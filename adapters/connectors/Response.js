'use strict';
const Events=require('event-pubsub');

class Response extends Events{
    constructor(drone,data){
      super();
      this.message={};
      this.drone=drone;
      if(data){
        this.parse(data);
      }
    }

    get raw(){
        return this.message.raw;
    }

    get type(){
        return this.message.type;
    }

    get id(){
        return this.message.id;
    }

    get data(){
        return this.message.data;
    }

    get index(){
        return this.message.index;
    }

    get size(){
        return this.message.size;
    }

    parse(data){
      //console.log(data)
      if(data.length<1){
        throw 'empty data';
      }

      this.message.raw        = data;

      this.message.frameType  = this.drone.message.frameTypes.lookup[this.message.raw.readUInt8(0)];
      this.message.frameID    = this.drone.message.frameIDs.lookup[this.message.raw.readUInt8(1)];
      this.message.index      = this.message.raw.readUInt8(2);
      this.message.size       = this.message.raw.readUInt32LE(3);

      this.message.projectID  = this.message.raw.readUInt8(7);
      this.message.classID    = this.message.raw.readUInt8(8);
      this.message.commandID  = this.message.raw.readUInt16LE(9);

      this.message.arguments  = null;

      let next=null;

      if(this.message.raw.length>this.message.size){
        next=data.slice(this.message.size);
        this.message.raw=data.slice(0,this.message.size);
      }

      if(
        this.message.size>this.message.raw.length
        ||this.message.size<8
        ||!this.message.frameType
        ||!this.message.frameID
        ||!this.message.size
      ){
        this.drone.emit(
          'corruptResponse',
          Object.assign(
            {},
            this.message
          )
        )
        return;
      }

      if (networkFrame.type === constants.ARNETWORKAL_FRAME_TYPE_DATA_LOW_LATENCY &&
          this.message.frameID.id === constants.BD_NET_DC_VIDEO_DATA_ID)
      {
        var arstreamFrame = arstreamFrameParser(networkFrame.data);
        this._writePacket(this._createARStreamACK(arstreamFrame));
      }

      if(this.message.frameID == this.drone.message.frameIDs.internalBufferPong){
        this.drone.emit(
          'dronePong',
          this.message.raw
        );

        if(next){
          this.parse(next);
        }

        return;
      }

      if(this.message.frameID.id == this.drone.message.frameIDs.internalBufferPing){
        this.drone.runningTime = this.message.raw.readUInt32LE(7) + (this.message.raw.readUInt32LE(11) / 1e10)

        this.message.raw.writeUInt8(
          this.drone.message.frameIDs.internalBufferPong,
          1
        );

        this.drone.message.send(this.message.raw);

        this.drone.emit(
          'dronePing',
          this.message
        );

        this.drone.emit(
          'runTimeChanged',
          this.drone.runningTime
        );

        if(next){
          this.parse(next);
        }

        return;
      }

      if(this.message.size>10){
        this.message.arguments=this.message.raw.slice(11);
      }

      this.message.commandName    = null;
      this.message.className      = null;
      //console.log(this.drone.projects)
      this.message.projectName=this.drone.projects.lookup[
        this.message.projectID
      ];

      const project = this.drone.projects[this.message.projectName];

      this.message.command = null;

      if(project){
        this.message.className    = project.lookup[
          this.message.classID
        ];
      }

      if(this.message.className){
        const classRef=project[
          this.message.className
        ];

        this.message.commandName=classRef.lookup[
          this.message.commandID
        ];

        this.message.command    = classRef[
          this.message.commandName
        ];
      }

      //console.log(this.message.projectID,this.message.classID,this.message.className,this.message.commandID,this.message.commandName,this.message.command);
      //console.log(this.message.command.lookup);
      if(this.message.command && Object.keys(this.message.command.lookup).length>0){
        for(const argID in this.message.command.lookup){
          const argName=this.message.command.lookup[argID];
          const arg=this.message.command[argName];
          console.log(argName,this.message.arguments)
          switch(arg.info.type){
            case 'u8' :
              arg.value=this.message.arguments.readUInt8(0);
              break;
            case 'i8' :
              arg.value=this.message.arguments.readInt8(0);
              break;
            case 'u16' :
              arg.value=this.message.arguments.readUInt16LE(0);
              break;
            case 'i16' :
              arg.value=this.message.arguments.readInt16LE(0);
            break;
            case 'u32' :
            case 'enum' :
              arg.value=this.message.arguments.readUInt32LE(0);
              break;
            case 'i32' :
              arg.value=this.message.arguments.readInt32LE(0);
              break;
            case 'float' :
              arg.value=this.message.arguments.readFloatLE(0);
              break;
            default :
              arg.bytes=this.message.arguments.indexOf('\0');
              arg.value=this.message.arguments.slice(0,arg.bytes).toString();
          }

          this.message.arguments=this.message.arguments.slice(arg.bytes);
        }
      }

      this.drone.message.messageIndex=this.message.index+1;

      if(this.message.command){
        this.drone.emit(
          this.message.commandName,
          this.message.command
        );
      }

      //console.log(this.message.frameType.id,this.drone.message.frameTypes.dataWithAckType)

      if(this.message.frameType.id==this.drone.message.frameTypes.dataWithAckType){
        const ack=new Buffer.allocUnsafe(8);
        const frameID=this.drone.message.frameIDs.defaultManagerMaxID/2
          +this.message.id;

        if(!this.drone.message.sequence[frameID]){
          this.drone.message.sequence[frameID]=0;
        }

        this.drone.message.sequence[frameID]++;

        if(this.drone.message.sequence[frameID]>255){
          this.drone.message.sequence[frameID]=0;
        }

        ack.writeUInt8(this.drone.message.frameTypes.ackType,0);
        ack.writeUInt8(frameID,2);
        ack.writeUInt8(this.drone.message.sequence[frameID],2);
        ack.writeUInt32LE(8,3);
        ack.writeUInt8(this.message.index,7);

        this.drone.message.send(ack);
      }

      this.drone.emit(
        'message',
        Object.assign(
          {},
          this.message
        )
      );

      if(next){
        this.parse(next);
      }
    }
}

module.exports=Response;
