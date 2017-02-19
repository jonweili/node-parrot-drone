# projects.skyctrl
-----
### All SkyController_only commands

Below is a table of all the skyctrl Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[WifiState](#projectsskyctrlwifistate)|0|0x0|Wifi state|
|[Wifi](#projectsskyctrlwifi)|1|0x1|Wifi|
|[Device](#projectsskyctrldevice)|2|0x2|Device Connection commands|
|[DeviceState](#projectsskyctrldevicestate)|3|0x3|Device state|
|[Settings](#projectsskyctrlsettings)|4|0x4|Settings commands|
|[SettingsState](#projectsskyctrlsettingsstate)|5|0x5|Settings state from the controller|
|[Common](#projectsskyctrlcommon)|6|0x6|Common commands|
|[CommonState](#projectsskyctrlcommonstate)|7|0x7|Common state from product|
|[SkyControllerState](#projectsskyctrlskycontrollerstate)|8|0x8|Sky Controller states|
|[AccessPointSettings](#projectsskyctrlaccesspointsettings)|9|0x9|AccessPoint settings commands|
|[AccessPointSettingsState](#projectsskyctrlaccesspointsettingsstate)|10|0xa|AccessPoint settings state from product|
|[Camera](#projectsskyctrlcamera)|11|0xb|Ask the drone to move camera|
|[ButtonMappings](#projectsskyctrlbuttonmappings)|12|0xc|Controls the button mappings of the SkyController|
|[ButtonMappingsState](#projectsskyctrlbuttonmappingsstate)|13|0xd|State of the button mappings of the SkyController|
|[AxisMappings](#projectsskyctrlaxismappings)|14|0xe|Controls the axis mappings of the SkyController|
|[AxisMappingsState](#projectsskyctrlaxismappingsstate)|15|0xf|State of the axis mappings of the SkyController|
|[AxisFilters](#projectsskyctrlaxisfilters)|16|0x10|Controls the axis filters of the SkyController|
|[AxisFiltersState](#projectsskyctrlaxisfiltersstate)|17|0x11|State of the axis filters of the SkyController|
|[GamepadInfos](#projectsskyctrlgamepadinfos)|18|0x12|Request infos about the gamepad of the SkyController|
|[GamepadInfosState](#projectsskyctrlgamepadinfosstate)|19|0x13|Informations about the gamepad of the SkyController|
|[CoPiloting](#projectsskyctrlcopiloting)|20|0x14|Configuration of the co_piloting feature|
|[CoPilotingState](#projectsskyctrlcopilotingstate)|21|0x15|State of the co_piloting feature|
|[Calibration](#projectsskyctrlcalibration)|22|0x16|Commands related to the SkyController sensors calibration|
|[CalibrationState](#projectsskyctrlcalibrationstate)|23|0x17|State of the SkyController calibration|
|[ButtonEvents](#projectsskyctrlbuttonevents)|24|0x18|Events sent on SkyController button presses. These events are sent under certain conditions only.|
|[Factory](#projectsskyctrlfactory)|25|0x19|Factory reset commands (SkyController 2 only)|
# projects.skyctrl.WifiState
-----
### Wifi state

The WifiState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiList](#projectsskyctrlwifistatewifilist)|0|0x0|Visible wifi networks|
|[ConnexionChanged](#projectsskyctrlwifistateconnexionchanged)|1|0x1|Wifi connection status|
|[WifiAuthChannelListChanged](#projectsskyctrlwifistatewifiauthchannellistchanged)|2|0x2|Authorized channel list|
|[AllWifiAuthChannelChanged](#projectsskyctrlwifistateallwifiauthchannelchanged)|3|0x3|Authorized channel list complete|
|[WifiSignalChanged](#projectsskyctrlwifistatewifisignalchanged)|4|0x4|Strength of the wifi signal|
## projects.skyctrl.WifiState.WifiList Event

Visible wifi networks

List of visible wifi networks.
 The application must clear the list before sending the [RequestWifiList](#4_1_0) command.

Triggered : by a [RequestWifiList](#4_1_0) command.

Example binding to listen for the ` WifiList ` event from the drone :

```javascript

drone.on(
  'WifiList',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.WifiState.ConnexionChanged Event

Wifi connection status

Describes the current wifi connection status of the SkyController.
 The connection to a wifi network does not guarantee a connection to a drone. To get the drone connection state, use the [device ConnectionChanged](#4_3_1) event.

Triggered : when the wifi connection status changes, or after a [RequestCurrentWifi](#4_1_1) command.

Example binding to listen for the ` ConnexionChanged ` event from the drone :

```javascript

drone.on(
  'ConnexionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.WifiState.WifiAuthChannelListChanged Event

Authorized channel list

Each element represent an authorized wifi channel for the current country regulatory domain.
 Note that some channels might be only authorized for indoor or outdoor use.
 The list is complete when the [AllWifiAuthChannelChanged](#4_0_3) event is recieved.

Triggered : by a [WifiAuthChannel](#4_1_4) command.

Example binding to listen for the ` WifiAuthChannelListChanged ` event from the drone :

```javascript

drone.on(
  'WifiAuthChannelListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.WifiState.AllWifiAuthChannelChanged Event

Authorized channel list complete

This event closes the [WifiAuthChannel](#4_1_4) command response. No more [WifiAuthChannelListChanged](#4_0_2) event will be sent after this event.

Triggered : by a [WifiAuthChannel](#4_1_4) command.

Example binding to listen for the ` AllWifiAuthChannelChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiAuthChannelChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.WifiState.WifiSignalChanged Event

Strength of the wifi signal

This event describes the signal strength for the long range wifi.
 A zero value is used when the SkyController is not connected to a wifi network.

Triggered : each time the wifi signal changes

Example binding to listen for the ` WifiSignalChanged ` event from the drone :

```javascript

drone.on(
  'WifiSignalChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Wifi
-----
### Wifi

The Wifi Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[RequestWifiList](#projectsskyctrlwifirequestwifilist)|0|0x0|Request visible wifi list|
|[RequestCurrentWifi](#projectsskyctrlwifirequestcurrentwifi)|1|0x1|Request current wifi informations|
|[ConnectToWifi](#projectsskyctrlwificonnecttowifi)|2|0x2|Connect the SkyController to a wifi network|
|[ForgetWifi](#projectsskyctrlwififorgetwifi)|3|0x3|Forget a wifi network|
|[WifiAuthChannel](#projectsskyctrlwifiwifiauthchannel)|4|0x4|Request the list of authorized channels|
## projects.skyctrl.Wifi.RequestWifiList Command

Request visible wifi list

After recieving this command, the SkyController will do a network scan to get the wifi list.
 Communication with the drone is stopped during the network scan, so the controller should avoid sending this command during flight.
 The controller should clear the local wifi list before sending this command.

Result : Event [WifiList](#4_0_0) is triggered for each visible wifi networks.
Example sending the ` RequestWifiList ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Wifi;

//build a message requesting all settings
const RequestWifiListMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.RequestWifiList
);

drone.message.send(RequestWifiListMessage);

```


## projects.skyctrl.Wifi.RequestCurrentWifi Command

Request current wifi informations

This is a synchronization command. The SkyController will automatically send its current wifi info when any data changes, so this command should only be used when connecting, in order to get an initial state.

Result : Event [wifi ConnectionChanged](#4_0_1) is triggered.
Example sending the ` RequestCurrentWifi ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Wifi;

//build a message requesting all settings
const RequestCurrentWifiMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.RequestCurrentWifi
);

drone.message.send(RequestCurrentWifiMessage);

```


## projects.skyctrl.Wifi.ConnectToWifi Command

Connect the SkyController to a wifi network

The network should be a visible network retrieved from the [WifiList](#4_0_0) event.
 If the network is secured, then the passphrase must be set. For non_secure network, the passphrase argument is ignored.

Result : The SkyController should connect to the network.
 A [wifi ConnectionChanged](#4_0_1) event is triggered.
Example sending the ` ConnectToWifi ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Wifi;

//build a message requesting all settings
const ConnectToWifiMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ConnectToWifi
);

drone.message.send(ConnectToWifiMessage);

```


## projects.skyctrl.Wifi.ForgetWifi Command

Forget a wifi network

Removes the network from the saved network list.
 If the network is the current network, then the SkyController will be disconnected first.

Result : The next [WifiList](#4_0_0) event will report this network as not saved.
 If the SkyController is connected to this network, a [wifi ConnectionChanged](#4_0_1) event is triggered
Example sending the ` ForgetWifi ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Wifi;

//build a message requesting all settings
const ForgetWifiMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ForgetWifi
);

drone.message.send(ForgetWifiMessage);

```


## projects.skyctrl.Wifi.WifiAuthChannel Command

Request the list of authorized channels

Requests the list of authorized wifi channels for the current country/regulatory domain.
 These channels are valid for the [AccessPointChannel](#4_9_1) command.

Result : A list of [WifiAuthChannelListChanged](#4_0_2) events will be sent, followed by an [AllWifiAuthChannelChanged](#4_0_3) event.
Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Wifi;

//build a message requesting all settings
const WifiAuthChannelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiAuthChannel
);

drone.message.send(WifiAuthChannelMessage);

```


# projects.skyctrl.Device
-----
### Device Connection commands

The Device Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[RequestDeviceList](#projectsskyctrldevicerequestdevicelist)|0|0x0|Request the list of visible devices|
|[RequestCurrentDevice](#projectsskyctrldevicerequestcurrentdevice)|1|0x1|Request current device informations|
|[ConnectToDevice](#projectsskyctrldeviceconnecttodevice)|2|0x2|Connect the SkyController to a given device|
## projects.skyctrl.Device.RequestDeviceList Command

Request the list of visible devices

This command is deprecated (The SkyController can only see one device at a time, so a device list is not required), and should not be used.

Result : This command is not implemented.
Example sending the ` RequestDeviceList ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Device;

//build a message requesting all settings
const RequestDeviceListMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.RequestDeviceList
);

drone.message.send(RequestDeviceListMessage);

```


## projects.skyctrl.Device.RequestCurrentDevice Command

Request current device informations

This command is deprecated and should not be used.

Result : This command is not implemented
Example sending the ` RequestCurrentDevice ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Device;

//build a message requesting all settings
const RequestCurrentDeviceMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.RequestCurrentDevice
);

drone.message.send(RequestCurrentDeviceMessage);

```


## projects.skyctrl.Device.ConnectToDevice Command

Connect the SkyController to a given device

This command is deprecated and should not be used.
 The SkyController will automatically connect to the first visible device on the current wifi network.

Result : This command is not implemented.
Example sending the ` ConnectToDevice ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Device;

//build a message requesting all settings
const ConnectToDeviceMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ConnectToDevice
);

drone.message.send(ConnectToDeviceMessage);

```


# projects.skyctrl.DeviceState
-----
### Device state

The DeviceState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[DeviceList](#projectsskyctrldevicestatedevicelist)|0|0x0|Visible device|
|[ConnexionChanged](#projectsskyctrldevicestateconnexionchanged)|1|0x1|Connection status|
## projects.skyctrl.DeviceState.DeviceList Command

Visible device

List of visible ARDiscoveryDevices.
 This event is deprecated and will never be sent by a SkyController

Result : undefined
Example sending the ` DeviceList ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.DeviceState;

//build a message requesting all settings
const DeviceListMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.DeviceList
);

drone.message.send(DeviceListMessage);

```


## projects.skyctrl.DeviceState.ConnexionChanged Event

Connection status

Status of the connection to a drone.

Triggered : when the connection state to a drone has changed.

Example binding to listen for the ` ConnexionChanged ` event from the drone :

```javascript

drone.on(
  'ConnexionChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Settings
-----
### Settings commands

The Settings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllSettings](#projectsskyctrlsettingsallsettings)|0|0x0|Ask for all controller's settings|
|[Reset](#projectsskyctrlsettingsreset)|1|0x1|Reset all settings|
## projects.skyctrl.Settings.AllSettings Command

Ask for all controller's settings

Request the controller to send all its settings.

Result : The controller will trigger all settings events and will finally trigger [AllSettingsChanged](#4_5_0).
Example sending the ` AllSettings ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Settings;

//build a message requesting all settings
const AllSettingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AllSettings
);

drone.message.send(AllSettingsMessage);

```


## projects.skyctrl.Settings.Reset Command

Reset all settings

This command is not implemented.

Result : All settings are reset, then a [ResetChanged](#4_5_1) event is fired.
Example sending the ` Reset ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Settings;

//build a message requesting all settings
const ResetMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Reset
);

drone.message.send(ResetMessage);

```


# projects.skyctrl.SettingsState
-----
### Settings state from the controller

The SettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllSettingsChanged](#projectsskyctrlsettingsstateallsettingschanged)|0|0x0|AllSettings changed|
|[ResetChanged](#projectsskyctrlsettingsstateresetchanged)|1|0x1|Settings were reset|
|[ProductSerialChanged](#projectsskyctrlsettingsstateproductserialchanged)|2|0x2|Product serial|
|[ProductVariantChanged](#projectsskyctrlsettingsstateproductvariantchanged)|3|0x3|Variant of the SkyController|
|[ProductVersionChanged](#projectsskyctrlsettingsstateproductversionchanged)|4|0x4|Product versions|
## projects.skyctrl.SettingsState.AllSettingsChanged Event

AllSettings changed

All settings have been sent by the controller.

Triggered : when all settings that have been requested by [AllSettings](#4_4_0) are sent.

Example binding to listen for the ` AllSettingsChanged ` event from the drone :

```javascript

drone.on(
  'AllSettingsChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SettingsState.ResetChanged Event

Settings were reset

This command is not implemented.

Triggered : by a [Reset](#4_4_1) command.

Example binding to listen for the ` ResetChanged ` event from the drone :

```javascript

drone.on(
  'ResetChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SettingsState.ProductSerialChanged Event

Product serial

The product serial of the controller.

Triggered : during the [AllSettings](#4_4_0) phase.

Example binding to listen for the ` ProductSerialChanged ` event from the drone :

```javascript

drone.on(
  'ProductSerialChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SettingsState.ProductVariantChanged Event

Variant of the SkyController

This event allow differentiation between original (red/blue/yellow) SkyControllers, and the Black Edition SkyControllers.

Triggered : during the [AllSettings](#4_4_0) phase.

Example binding to listen for the ` ProductVariantChanged ` event from the drone :

```javascript

drone.on(
  'ProductVariantChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SettingsState.ProductVersionChanged Event

Product versions

Software and hardware versions of the controller.

Triggered : during the [AllSettings](#4_4_0) phase.

Example binding to listen for the ` ProductVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductVersionChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Common
-----
### Common commands

The Common Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllStates](#projectsskyctrlcommonallstates)|0|0x0|Ask for all controller's states.|
## projects.skyctrl.Common.AllStates Command

Ask for all controller's states.

Request the controller to send all its states.

Result : The controller will trigger all states events and will finally trigger [AllStatesChanged](#4_7_0).
Example sending the ` AllStates ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Common;

//build a message requesting all settings
const AllStatesMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AllStates
);

drone.message.send(AllStatesMessage);

```


# projects.skyctrl.CommonState
-----
### Common state from product

The CommonState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllStatesChanged](#projectsskyctrlcommonstateallstateschanged)|0|0x0|AllStates changed|
## projects.skyctrl.CommonState.AllStatesChanged Event

AllStates changed

All states have been sent by the controller.

Triggered : when all states that have been requested by [AllStates](#4_6_0) are sent.

Example binding to listen for the ` AllStatesChanged ` event from the drone :

```javascript

drone.on(
  'AllStatesChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.SkyControllerState
-----
### Sky Controller states

The SkyControllerState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[BatteryChanged](#projectsskyctrlskycontrollerstatebatterychanged)|0|0x0|Battery state changed|
|[GpsFixChanged](#projectsskyctrlskycontrollerstategpsfixchanged)|1|0x1|GPS Fix gained/lost|
|[GpsPositionChanged](#projectsskyctrlskycontrollerstategpspositionchanged)|2|0x2|SkyController position/heading changed|
|[BatteryState](#projectsskyctrlskycontrollerstatebatterystate)|3|0x3|Battery state|
|[AttitudeChanged](#projectsskyctrlskycontrollerstateattitudechanged)|4|0x4|Attitude|
## projects.skyctrl.SkyControllerState.BatteryChanged Event

Battery state changed

The battery percentage has changed.

Triggered : when the battery level changes.

Example binding to listen for the ` BatteryChanged ` event from the drone :

```javascript

drone.on(
  'BatteryChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SkyControllerState.GpsFixChanged Event

GPS Fix gained/lost

The SkyController GPS has gained or lost the fix. If the fix is lost, thent the [GpsPositionChanged](#4_8_2) event will contain invalid values for the position.

Triggered : when the GPS accuracy goes under/over a certain level.

Example binding to listen for the ` GpsFixChanged ` event from the drone :

```javascript

drone.on(
  'GpsFixChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SkyControllerState.GpsPositionChanged Event

SkyController position/heading changed

The SkyController position or heading values changed.
 Some of the values can be invalid and should be ignored.

Triggered : each time the position or heading of the SkyController is updated, or when a data becomes (un)available.

Example binding to listen for the ` GpsPositionChanged ` event from the drone :

```javascript

drone.on(
  'GpsPositionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SkyControllerState.BatteryState Event

Battery state

The state of the controller battery

Triggered : when the controller battery state has changed.

Example binding to listen for the ` BatteryState ` event from the drone :

```javascript

drone.on(
  'BatteryState',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.SkyControllerState.AttitudeChanged Event

Attitude

SkyController Attitude in north_east_down (NED) coordinate system.
 Attitude is provided as a quaternion.

Triggered : when the SkyController attitude changes.

Example binding to listen for the ` AttitudeChanged ` event from the drone :

```javascript

drone.on(
  'AttitudeChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.AccessPointSettings
-----
### AccessPoint settings commands

The AccessPointSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AccessPointSSID](#projectsskyctrlaccesspointsettingsaccesspointssid)|0|0x0|Set access point SSID|
|[AccessPointChannel](#projectsskyctrlaccesspointsettingsaccesspointchannel)|1|0x1|Set access point channel|
|[WifiSelection](#projectsskyctrlaccesspointsettingswifiselection)|2|0x2|Set access point band/channel|
## projects.skyctrl.AccessPointSettings.AccessPointSSID Command

Set access point SSID

Set the SkyController access point SSID.
 The name will be checked, and can be modified before application. Use the [AccessPointSSIDChanged](#4_10_0) event to get the applied network name.

Result : The network name will change (which will likely disconnect the controller), then an [AccessPointSSIDChanged](#4_10_0) event will be sent
Example sending the ` AccessPointSSID ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AccessPointSettings;

//build a message requesting all settings
const AccessPointSSIDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AccessPointSSID
);

drone.message.send(AccessPointSSIDMessage);

```


## projects.skyctrl.AccessPointSettings.AccessPointChannel Command

Set access point channel

Set the SkyController access point channel.
 The channel will be checked, and can be modified before application. Use the [AccessPointChannelChanged](#4_10_1) event to get the applied channel.
 The list of authorized channels for the current country can be retrived with the [WifiAuthChannel](#4_1_4) command.
 This command is deprecated. Use the [WifiSelection](#4_9_2) command instead.

Result : The network channel will change (which will likely disconnect the controller), then an [AccessPointChannelChanged](#4_10_1) event will be sent
Example sending the ` AccessPointChannel ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AccessPointSettings;

//build a message requesting all settings
const AccessPointChannelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AccessPointChannel
);

drone.message.send(AccessPointChannelMessage);

```


## projects.skyctrl.AccessPointSettings.WifiSelection Command

Set access point band/channel

Set the SkyController access point channel.
 The channel will be checked, and can be modified before application. Use the [WifiSelectionChanged](#4_10_2) event to get the applied channel/band.
 The list of authorized channels for the current country can be retrived with the [WifiAuthChannel](#4_1_4) command.
 This command is deprecated. Use the [WifiSelection](#4_9_2) command instead.

Result : The network channel will change (which will likely disconnect the controller), then a [WifiSelectionChanged](#4_10_2) event will be sent
Example sending the ` WifiSelection ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AccessPointSettings;

//build a message requesting all settings
const WifiSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiSelection
);

drone.message.send(WifiSelectionMessage);

```


# projects.skyctrl.AccessPointSettingsState
-----
### AccessPoint settings state from product

The AccessPointSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AccessPointSSIDChanged](#projectsskyctrlaccesspointsettingsstateaccesspointssidchanged)|0|0x0|The access point SSID was changed|
|[AccessPointChannelChanged](#projectsskyctrlaccesspointsettingsstateaccesspointchannelchanged)|1|0x1|The access point channel was changed|
|[WifiSelectionChanged](#projectsskyctrlaccesspointsettingsstatewifiselectionchanged)|2|0x2|The access point channel/band was changed|
## projects.skyctrl.AccessPointSettingsState.AccessPointSSIDChanged Event

The access point SSID was changed

Changing the SSID will often (if not always) trigger a disconnection of the controller, so this event will only be recieved during the initial connexion phase.

Triggered : by an [AccessPointSSID](#4_9_0) command.

Example binding to listen for the ` AccessPointSSIDChanged ` event from the drone :

```javascript

drone.on(
  'AccessPointSSIDChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AccessPointSettingsState.AccessPointChannelChanged Event

The access point channel was changed

This command is deprecated, as the returned channel number does not contain information about the wifi band (2.4GHz or 5GHz). Use the [WifiSelectionChanged](#4_10_2) event instead

Triggered : by an [AccessPointChannel](#4_9_1) command

Example binding to listen for the ` AccessPointChannelChanged ` event from the drone :

```javascript

drone.on(
  'AccessPointChannelChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AccessPointSettingsState.WifiSelectionChanged Event

The access point channel/band was changed

Changing the channel will often (if not always) trigger a disconnection of the controller, so this event will only be recieved during the initial connexion phase.

Triggered : by an [WifiSelection](#4_9_2) command

Example binding to listen for the ` WifiSelectionChanged ` event from the drone :

```javascript

drone.on(
  'WifiSelectionChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Camera
-----
### Ask the drone to move camera

The Camera Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ResetOrientation](#projectsskyctrlcameraresetorientation)|0|0x0|Reset the camera orientation|
## projects.skyctrl.Camera.ResetOrientation Command

Reset the camera orientation

This command is deprecated. The same effect can be achieved by sending a [CameraOrientation](#1_1_0) command with values retrieved from the [defaultCameraOrientation](#1_25_1) event.

Result : The drone will reset its camera orientation
Example sending the ` ResetOrientation ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Camera;

//build a message requesting all settings
const ResetOrientationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ResetOrientation
);

drone.message.send(ResetOrientationMessage);

```


# projects.skyctrl.ButtonMappings
-----
### Controls the button mappings of the SkyController

The ButtonMappings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[getCurrentButtonMappings](#projectsskyctrlbuttonmappingsgetcurrentbuttonmappings)|0|0x0|Get the current button mappings|
|[getAvailableButtonMappings](#projectsskyctrlbuttonmappingsgetavailablebuttonmappings)|1|0x1|Get the available button mappings|
|[setButtonMapping](#projectsskyctrlbuttonmappingssetbuttonmapping)|2|0x2|Set a mapping for a button|
|[defaultButtonMapping](#projectsskyctrlbuttonmappingsdefaultbuttonmapping)|3|0x3|Reset the button mappings to the default value|
## projects.skyctrl.ButtonMappings.getCurrentButtonMappings Command

Get the current button mappings

The SkyController will send its full button mapping. This command is mainly useful for initial synchronization, as every change to the button mapping (via the [setButtonMapping](#4_12_2) command) will trigger [currentButtonMappings](#4_13_0) events.

Result : The SkyController will send a full list of [currentButtonMappings](#4_13_0) events, followed by an [allCurrentButtonMappingsSent](#4_13_1) event.
Example sending the ` getCurrentButtonMappings ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.ButtonMappings;

//build a message requesting all settings
const getCurrentButtonMappingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getCurrentButtonMappings
);

drone.message.send(getCurrentButtonMappingsMessage);

```


## projects.skyctrl.ButtonMappings.getAvailableButtonMappings Command

Get the available button mappings

The SkyController will send all the available action that can be mapped on buttons.
 As this list is static, the controller only need to request this information once.

Result : The SkyController will send a list of [availableButtonMappings](#4_13_2) events, followed by an [allAvailableButtonsMappingsSent](#4_13_3) event.
Example sending the ` getAvailableButtonMappings ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.ButtonMappings;

//build a message requesting all settings
const getAvailableButtonMappingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getAvailableButtonMappings
);

drone.message.send(getAvailableButtonMappingsMessage);

```


## projects.skyctrl.ButtonMappings.setButtonMapping Command

Set a mapping for a button

Any previous mapping for the given button will be removed, as a button can only be mapped to one action.
 To unmap a button, a NO_ACTION mapping can be used (see the [availableButtonMappings](#4_13_2) event).
 Some actions can not be mapped to two different buttons at the same time. In this case, the first button will automatically be set to NO_ACTION, and the corresponding [currentButtonMappings](#4_13_0) event will be fired.

Result : The SkyController will send a list of [currentButtonMappings](#4_13_0) events, describing the changes to the mapping table, followed by an [allCurrentButtonMappingsSent](#4_13_1) event.
Example sending the ` setButtonMapping ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.ButtonMappings;

//build a message requesting all settings
const setButtonMappingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setButtonMapping
);

drone.message.send(setButtonMappingMessage);

```


## projects.skyctrl.ButtonMappings.defaultButtonMapping Command

Reset the button mappings to the default value

The default values can change between software versions.
 The default values are different for Black Edition SkyControllers

Result : The SkyController will send a list of [currentButtonMappings](#4_13_0) events, describing the changes to the mapping table, followed by an [allCurrentButtonMappingsSent](#4_13_1) event.
Example sending the ` defaultButtonMapping ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.ButtonMappings;

//build a message requesting all settings
const defaultButtonMappingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.defaultButtonMapping
);

drone.message.send(defaultButtonMappingMessage);

```


# projects.skyctrl.ButtonMappingsState
-----
### State of the button mappings of the SkyController

The ButtonMappingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[currentButtonMappings](#projectsskyctrlbuttonmappingsstatecurrentbuttonmappings)|0|0x0|Button to Action mapping|
|[allCurrentButtonMappingsSent](#projectsskyctrlbuttonmappingsstateallcurrentbuttonmappingssent)|1|0x1|End of the button mapping list|
|[availableButtonMappings](#projectsskyctrlbuttonmappingsstateavailablebuttonmappings)|2|0x2|Action mappable on a button|
|[allAvailableButtonsMappingsSent](#projectsskyctrlbuttonmappingsstateallavailablebuttonsmappingssent)|3|0x3|End of the available button actions list|
## projects.skyctrl.ButtonMappingsState.currentButtonMappings Event

Button to Action mapping

The mapping maps a key_id (as found in [gamepadControl](#4_19_0) events) to a mapping_uid (as found in the [availableButtonMappings](#4_13_2) events).
 A special mapping (NO_ACTION) is attached to unmapped buttons.

Triggered : by a [getCurrentButtonMappings](#4_12_0) command for complete synchronization, or by either a [setButtonMapping](#4_12_2) or a [defaultButtonMapping](#4_12_3) command, only for changed mappings.

Example binding to listen for the ` currentButtonMappings ` event from the drone :

```javascript

drone.on(
  'currentButtonMappings',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.ButtonMappingsState.allCurrentButtonMappingsSent Event

End of the button mapping list

Sent by the SkyController to notify the end of a [currentButtonMappings](#4_13_0) events list.
 If the list is empty (e.g. the controller sent a [setButtonMapping](#4_12_2) command which made no change to the mapping table), then this command will be sent without any [currentButtonMappings](#4_13_0) event preceding it. This gives the controller a reliable synchronization point when editing mappings.

Triggered : by a [getCurrentButtonMappings](#4_12_0), [setButtonMapping](#4_12_2) or [defaultButtonMapping](#4_12_3) command, to notify the end of list.

Example binding to listen for the ` allCurrentButtonMappingsSent ` event from the drone :

```javascript

drone.on(
  'allCurrentButtonMappingsSent',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.ButtonMappingsState.availableButtonMappings Event

Action mappable on a button

Each action that can be mapped on a button is identified by its mapping_uid, which will be used in the [setButtonMapping](#4_12_2) and [currentButtonMappings](#4_13_0) commands.
 The name is a human readable string, in english, describing the action.
 A special action named NO_ACTION serves as the unmap action. This action can be bound to multiple buttons to disable them.
 An [allAvailableButtonsMappingsSent](#4_13_3) event is sent at the end of the list.

Triggered : by a [getAvailableButtonMappings](#4_12_1) command.

Example binding to listen for the ` availableButtonMappings ` event from the drone :

```javascript

drone.on(
  'availableButtonMappings',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.ButtonMappingsState.allAvailableButtonsMappingsSent Event

End of the available button actions list

Sent by the SkyController to notify the end of a [availableButtonMappings](#4_13_2) events list.

Triggered : by a [getAvailableButtonMappings](#4_12_1) command, to notify the end of list.

Example binding to listen for the ` allAvailableButtonsMappingsSent ` event from the drone :

```javascript

drone.on(
  'allAvailableButtonsMappingsSent',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.AxisMappings
-----
### Controls the axis mappings of the SkyController

The AxisMappings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[getCurrentAxisMappings](#projectsskyctrlaxismappingsgetcurrentaxismappings)|0|0x0|Get the current axis mappings|
|[getAvailableAxisMappings](#projectsskyctrlaxismappingsgetavailableaxismappings)|1|0x1|Get the available axis mappings|
|[setAxisMapping](#projectsskyctrlaxismappingssetaxismapping)|2|0x2|Set a mapping for a axis|
|[defaultAxisMapping](#projectsskyctrlaxismappingsdefaultaxismapping)|3|0x3|Reset the axis mappings to the default value|
## projects.skyctrl.AxisMappings.getCurrentAxisMappings Command

Get the current axis mappings

The SkyController will send its full axis mapping. This command is mainly useful for initial synchronization, as every change to the axis mapping (via the [setAxisMapping](#4_14_2) command) will trigger [currentAxisMappings](#4_15_0) events.

Result : The SkyController will send a full list of [currentAxisMappings](#4_15_0) events, followed by an [allCurrentAxisMappingsSent](#4_15_1) event.
Example sending the ` getCurrentAxisMappings ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisMappings;

//build a message requesting all settings
const getCurrentAxisMappingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getCurrentAxisMappings
);

drone.message.send(getCurrentAxisMappingsMessage);

```


## projects.skyctrl.AxisMappings.getAvailableAxisMappings Command

Get the available axis mappings

The SkyController will send all the available action that can be mapped on axes.
 As this list is static, the controller only need to request this information once.

Result : The SkyController will send a list of [availableAxisMappings](#4_15_2) events, followed by an [allAvailableAxissMappingsSent](#4_15_3) event.
Example sending the ` getAvailableAxisMappings ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisMappings;

//build a message requesting all settings
const getAvailableAxisMappingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getAvailableAxisMappings
);

drone.message.send(getAvailableAxisMappingsMessage);

```


## projects.skyctrl.AxisMappings.setAxisMapping Command

Set a mapping for a axis

Any previous mapping for the given axis will be removed, as a axis can only be mapped to one action.
 To unmap a axis, a NO_ACTION mapping can be used (see the [availableAxisMappings](#4_15_2) event).
 Some actions can not be mapped to two different axes at the same time. In this case, the first axis will automatically be set to NO_ACTION, and the corresponding [currentAxisMappings](#4_15_0) event will be fired.

Result : The SkyController will send a list of [currentAxisMappings](#4_15_0) events, describing the changes to the mapping table, followed by an [allCurrentAxisMappingsSent](#4_15_1) event.
Example sending the ` setAxisMapping ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisMappings;

//build a message requesting all settings
const setAxisMappingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAxisMapping
);

drone.message.send(setAxisMappingMessage);

```


## projects.skyctrl.AxisMappings.defaultAxisMapping Command

Reset the axis mappings to the default value

The default values can change between software versions.

Result : The SkyController will send a list of [currentAxisMappings](#4_15_0) events, describing the changes to the mapping table, followed by an [allCurrentAxisMappingsSent](#4_15_1) event.
Example sending the ` defaultAxisMapping ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisMappings;

//build a message requesting all settings
const defaultAxisMappingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.defaultAxisMapping
);

drone.message.send(defaultAxisMappingMessage);

```


# projects.skyctrl.AxisMappingsState
-----
### State of the axis mappings of the SkyController

The AxisMappingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[currentAxisMappings](#projectsskyctrlaxismappingsstatecurrentaxismappings)|0|0x0|Axis to Action mapping|
|[allCurrentAxisMappingsSent](#projectsskyctrlaxismappingsstateallcurrentaxismappingssent)|1|0x1|End of the axis mapping list|
|[availableAxisMappings](#projectsskyctrlaxismappingsstateavailableaxismappings)|2|0x2|Action mappable on an axis|
|[allAvailableAxisMappingsSent](#projectsskyctrlaxismappingsstateallavailableaxismappingssent)|3|0x3|End of the available axis actions list|
## projects.skyctrl.AxisMappingsState.currentAxisMappings Event

Axis to Action mapping

The mapping maps an axis_id (as found in [gamepadControl](#4_19_0) events) to a mapping_uid (as found in the [availableAxisMappings](#4_15_2) events).
 A special mapping (NO_ACTION) is attached to unmapped axes.

Triggered : by a [getCurrentAxisMappings](#4_14_0) command for complete synchronization, or by either a [setAxisMapping](#4_14_2) or [defaultAxisMapping](#4_14_3) command, only for changed mappings.

Example binding to listen for the ` currentAxisMappings ` event from the drone :

```javascript

drone.on(
  'currentAxisMappings',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AxisMappingsState.allCurrentAxisMappingsSent Event

End of the axis mapping list

Sent by the SkyController to notify the end of a [currentAxisMappings](#4_15_0) events list.
 If the list is empty (e.g. the controller sent a [setAxisMapping](#4_14_2) command which made no change to the mapping table), then this command will be sent without any [currentAxisMappings](#4_15_0) event preceding it. This gives the controller a reliable synchronization point when editing mappings.

Triggered : by a [getCurrentAxisMappings](#4_14_0), [setAxisMapping](#4_14_2) or [defaultAxisMapping](#4_14_3) command, to notify the end of list.

Example binding to listen for the ` allCurrentAxisMappingsSent ` event from the drone :

```javascript

drone.on(
  'allCurrentAxisMappingsSent',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AxisMappingsState.availableAxisMappings Event

Action mappable on an axis

Each action that can be mapped on an axis is identified by its mapping_uid, which will be used in the [setAxisMapping](#4_14_2) and [currentAxisMappings](#4_15_0) commands.
 The name is a human readable string, in english, describing the action.
 A special action named NO_ACTION serves as the unmap action. This action can be bound to multiple axes to disable them.
 An [allAvailableAxissMappingsSent](#4_15_3) event is sent at the end of the list.

Triggered : by a [getAvailableAxisMappings](#4_14_1) command.

Example binding to listen for the ` availableAxisMappings ` event from the drone :

```javascript

drone.on(
  'availableAxisMappings',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AxisMappingsState.allAvailableAxisMappingsSent Event

End of the available axis actions list

Sent by the SkyController to notify the end of a [availableAxisMappings](#4_15_2) events list.

Triggered : by a [getAvailableAxisMappings](#4_14_1) command.

Example binding to listen for the ` allAvailableAxisMappingsSent ` event from the drone :

```javascript

drone.on(
  'allAvailableAxisMappingsSent',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.AxisFilters
-----
### Controls the axis filters of the SkyController

The AxisFilters Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[getCurrentAxisFilters](#projectsskyctrlaxisfiltersgetcurrentaxisfilters)|0|0x0|Get the current axis filters|
|[getPresetAxisFilters](#projectsskyctrlaxisfiltersgetpresetaxisfilters)|1|0x1|Get the available preset axis filters|
|[setAxisFilter](#projectsskyctrlaxisfilterssetaxisfilter)|2|0x2|Set a filter for an axis|
|[defaultAxisFilters](#projectsskyctrlaxisfiltersdefaultaxisfilters)|3|0x3|Reset the axis filters to the default value|
## projects.skyctrl.AxisFilters.getCurrentAxisFilters Command

Get the current axis filters

The SkyController will send its full axis filters map. This command is mainly useful for initial synchronization, as every change to the filters map (via the [setAxisFilter](#4_16_2) command) will trigger [currentAxisFilters](#4_17_0) events.

Result : The SkyController will send a full list of [currentAxisFilters](#4_17_0) events, followed by an [allCurrentFiltersSent](#4_17_1) event.
Example sending the ` getCurrentAxisFilters ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisFilters;

//build a message requesting all settings
const getCurrentAxisFiltersMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getCurrentAxisFilters
);

drone.message.send(getCurrentAxisFiltersMessage);

```


## projects.skyctrl.AxisFilters.getPresetAxisFilters Command

Get the available preset axis filters

The preset list is empty and will never be filled, so this command is flagged as deprecated.

Result : As the preset list is empty, the SkyController will just send an [allPresetFiltersSent](#4_17_3) event.
Example sending the ` getPresetAxisFilters ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisFilters;

//build a message requesting all settings
const getPresetAxisFiltersMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getPresetAxisFilters
);

drone.message.send(getPresetAxisFiltersMessage);

```


## projects.skyctrl.AxisFilters.setAxisFilter Command

Set a filter for an axis

A filter modifies the response curve of an axis.
 As the preset filters list is empty, all filters are to be sent using the builder syntax.
 
 The builder syntax supports two types of filters: Multilinear and Exponential.
 
 Multilinear filters create response curves made of multiple linear segments_
 * The default filter (ARMF;) is purely linear and create a single segment from the two implicit `[_1; _1]` and `[1; 1]` points.
 * Additionnal points can be added to the filter with the following syntax: `ARMF;x1>y1;...;xN>yN;`, where all numbers are floating point numbers in range `[_1; 1]`.
 * Additionnal points **must** respect the following constraints : `x(N)>x(N_1)` and `y(N)>=y(N_1)`.
 
 Exponential filters_
 * The syntax is `ARXF;CPx;CPy;`, where CPx and CPy are floating point numbers in range `[0; 1]`.
 * Best results are achieved when `CPx + CPy == 1` and `CPx > CPy`.
 * If the control point is on the diagonal (i.e. `CPx == CPy`), then the resulting filter will be linear.

Result : The SkyController will send a list of [currentAxisFilters](#4_17_0) events, describing the changes to the filters table, followed by an [allCurrentFiltersSent](#4_17_1) event.
Example sending the ` setAxisFilter ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisFilters;

//build a message requesting all settings
const setAxisFilterMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAxisFilter
);

drone.message.send(setAxisFilterMessage);

```


## projects.skyctrl.AxisFilters.defaultAxisFilters Command

Reset the axis filters to the default value

The default values can change between software versions.

Result : The SkyController will send a list of [currentAxisFilters](#4_17_0) events, describing the changes to the filters table, followed by an [allCurrentFiltersSent](#4_17_1) event.
Example sending the ` defaultAxisFilters ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisFilters;

//build a message requesting all settings
const defaultAxisFiltersMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.defaultAxisFilters
);

drone.message.send(defaultAxisFiltersMessage);

```


# projects.skyctrl.AxisFiltersState
-----
### State of the axis filters of the SkyController

The AxisFiltersState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[currentAxisFilters](#projectsskyctrlaxisfiltersstatecurrentaxisfilters)|0|0x0|A filter set on an axis|
|[allCurrentFiltersSent](#projectsskyctrlaxisfiltersstateallcurrentfilterssent)|1|0x1|End of the axis filters list|
|[presetAxisFilters](#projectsskyctrlaxisfiltersstatepresetaxisfilters)|2|0x2|Predefined axis filters|
|[allPresetFiltersSent](#projectsskyctrlaxisfiltersstateallpresetfilterssent)|3|0x3|End of the preset axis filters list|
## projects.skyctrl.AxisFiltersState.currentAxisFilters Event

A filter set on an axis

As the preset filters list is empty, all the filters are transmitted using the builder syntax. See the [setAxisFilter](#4_16_2) command documentation for details about the builder syntax.

Triggered : by a [getCurrentAxisFilters](#4_16_0) command for complete synchronization, or after either a [setAxisFilter](#4_16_2) or [defaultAxisFilters](#4_16_3) command, only for changed filters.

Example binding to listen for the ` currentAxisFilters ` event from the drone :

```javascript

drone.on(
  'currentAxisFilters',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AxisFiltersState.allCurrentFiltersSent Event

End of the axis filters list

Sent by the SkyController to notify the end of a [currentAxisFilters](#4_17_0) events list.
 If the list is empty (e.g. the controller sent a [setAxisFilter](#4_16_2) command which made no change to the filters table), then this command will be sent without any [currentAxisFilters](#4_17_0) event preceding it. This gives the controller a reliable synchronization point when editing mappings.

Triggered : by a [getCurrentAxisFilters](#4_16_0), [setAxisFilter](#4_16_2) or [defaultAxisFilters](#4_16_3) command, to notify the end of list.

Example binding to listen for the ` allCurrentFiltersSent ` event from the drone :

```javascript

drone.on(
  'allCurrentFiltersSent',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.AxisFiltersState.presetAxisFilters Command

Predefined axis filters

No preset axis filter is defined on the SkyController, so this command will never be sent by the firmware.

Result : undefined
Example sending the ` presetAxisFilters ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.AxisFiltersState;

//build a message requesting all settings
const presetAxisFiltersMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.presetAxisFilters
);

drone.message.send(presetAxisFiltersMessage);

```


## projects.skyctrl.AxisFiltersState.allPresetFiltersSent Event

End of the preset axis filters list

As the SkyController will never send a [presetAxisFilters](#4_17_2) event, this is the only event sent when the deprecated [getPresetAxisFilters](#4_16_1) command is recieved.

Triggered : by a [getPresetAxisFilters](#4_16_1) command.

Example binding to listen for the ` allPresetFiltersSent ` event from the drone :

```javascript

drone.on(
  'allPresetFiltersSent',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.GamepadInfos
-----
### Request infos about the gamepad of the SkyController

The GamepadInfos Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[getGamepadControls](#projectsskyctrlgamepadinfosgetgamepadcontrols)|0|0x0|Get the SkyController buttons and axis list|
## projects.skyctrl.GamepadInfos.getGamepadControls Command

Get the SkyController buttons and axis list

This commands allow the application to get a representation of all the mappable controls on the SkyController. Some physical controls might be absent from this list because their function can not be changed.

Result : The SkyController will send a list of [GamepadControl](#4_19_0) events, describing all available controls, followed by an [allGamepadControlsSent](#4_19_1) event.
Example sending the ` getGamepadControls ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.GamepadInfos;

//build a message requesting all settings
const getGamepadControlsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.getGamepadControls
);

drone.message.send(getGamepadControlsMessage);

```


# projects.skyctrl.GamepadInfosState
-----
### Informations about the gamepad of the SkyController

The GamepadInfosState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[gamepadControl](#projectsskyctrlgamepadinfosstategamepadcontrol)|0|0x0|Gamepad control description|
|[allGamepadControlsSent](#projectsskyctrlgamepadinfosstateallgamepadcontrolssent)|1|0x1|End of the GamepadControl list|
## projects.skyctrl.GamepadInfosState.gamepadControl Event

Gamepad control description

Each gamepad control element represents a mappable control on the SkyController. The control can be either a button or an analog axis.
 Each control have a human_readable english name describing its physical position on the SkyController.

Triggered : by a [getGamepadControls](#4_18_0) command.

Example binding to listen for the ` gamepadControl ` event from the drone :

```javascript

drone.on(
  'gamepadControl',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.GamepadInfosState.allGamepadControlsSent Event

End of the GamepadControl list

This event marks the end of the GamepadControl list

Triggered : by a [getGamepadControls](#4_18_0) command, after sending all the [GamepadControl](#4_19_0) events.

Example binding to listen for the ` allGamepadControlsSent ` event from the drone :

```javascript

drone.on(
  'allGamepadControlsSent',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.CoPiloting
-----
### Configuration of the co_piloting feature

The CoPiloting Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[setPilotingSource](#projectsskyctrlcopilotingsetpilotingsource)|0|0x0|Set piloting source|
## projects.skyctrl.CoPiloting.setPilotingSource Command

Set piloting source

Change who is piloting the drone.
 By default, the SkyController is the source of piloting commands, and any connected application (i.e. FreeFlight) can not send [piloting commands](#1_0_2) commands directly to the drone. When the piloting source is set to Controller, the SkyController will forward the controller commands to the drone, and won't send any commands itself.
 The piloting source is automatically reset to SkyController when the controller is disconnected.

Result : The SkyController will sent a [pilotingSource](#4_21_0) event.
Example sending the ` setPilotingSource ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.CoPiloting;

//build a message requesting all settings
const setPilotingSourceMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setPilotingSource
);

drone.message.send(setPilotingSourceMessage);

```


# projects.skyctrl.CoPilotingState
-----
### State of the co_piloting feature

The CoPilotingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[pilotingSource](#projectsskyctrlcopilotingstatepilotingsource)|0|0x0|Piloting source|
## projects.skyctrl.CoPilotingState.pilotingSource Event

Piloting source

Define who is piloting the drone.
 The piloting source is reset to SkyController when the controller disconnects.

Triggered : by a [setPilotingSource](#4_20_0) command

Example binding to listen for the ` pilotingSource ` event from the drone :

```javascript

drone.on(
  'pilotingSource',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Calibration
-----
### Commands related to the SkyController sensors calibration

The Calibration Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[enableMagnetoCalibrationQualityUpdates](#projectsskyctrlcalibrationenablemagnetocalibrationqualityupdates)|0|0x0|Enable Magneto calibration quality updates|
## projects.skyctrl.Calibration.enableMagnetoCalibrationQualityUpdates Command

Enable Magneto calibration quality updates

Asks the SkyController to send (or not) the magneto calibration quality updates.
 The [MagnetoCalibrationState](#4_23_0) event will always be sent when the status parameters changes, regardless of this setting.

Result : The SkyController will send a [MagnetoCalibrationQualityUpdatesState](#4_23_1) event.
Example sending the ` enableMagnetoCalibrationQualityUpdates ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Calibration;

//build a message requesting all settings
const enableMagnetoCalibrationQualityUpdatesMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.enableMagnetoCalibrationQualityUpdates
);

drone.message.send(enableMagnetoCalibrationQualityUpdatesMessage);

```


# projects.skyctrl.CalibrationState
-----
### State of the SkyController calibration

The CalibrationState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MagnetoCalibrationState](#projectsskyctrlcalibrationstatemagnetocalibrationstate)|0|0x0|Magneto calibration state|
|[MagnetoCalibrationQualityUpdatesState](#projectsskyctrlcalibrationstatemagnetocalibrationqualityupdatesstate)|1|0x1|Magnetometer Calibration Quality Update State|
## projects.skyctrl.CalibrationState.MagnetoCalibrationState Event

Magneto calibration state

The current state of the magnetometer calibration.
 If the calibration quality updates are enabled, this event is sent at every calibration quality update. This is useful for calibration screens, but creates a lot of traffic on network.\ When the calibration quality updates are disabled, this event is only sent when the status parameter changes.

Triggered : when the magnetometer calibration state has changed.

Example binding to listen for the ` MagnetoCalibrationState ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationState',
  function(data){
    console.log(data);
  }
)

```


## projects.skyctrl.CalibrationState.MagnetoCalibrationQualityUpdatesState Event

Magnetometer Calibration Quality Update State

State of the magnetometer calibration quality sender.
 This determines the trigger of the [MagnetoCalibrationState](#4_23_0) event.

Triggered : by an [enableMagnetoCalibrationQualityUpdates](#4_22_0) command.

Example binding to listen for the ` MagnetoCalibrationQualityUpdatesState ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationQualityUpdatesState',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.ButtonEvents
-----
### Events sent on SkyController button presses. These events are sent under certain conditions only.

The ButtonEvents Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Settings](#projectsskyctrlbuttoneventssettings)|0|0x0|Settings button pressed|
## projects.skyctrl.ButtonEvents.Settings Event

Settings button pressed

This event notifies the application that the settings button was pressed on the device. This allow a connected application to open/close the settings screen from a physical button.
 This event is only sent when the SkyController is connected to a drone

Triggered : when the user presses the settings button on a connected SkyController.

Example binding to listen for the ` Settings ` event from the drone :

```javascript

drone.on(
  'Settings',
  function(data){
    console.log(data);
  }
)

```


# projects.skyctrl.Factory
-----
### Factory reset commands (SkyController 2 only)

The Factory Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Reset](#projectsskyctrlfactoryreset)|0|0x0|Reset the SkyController 2 to its factory settings|
## projects.skyctrl.Factory.Reset Command

Reset the SkyController 2 to its factory settings

This command will request a factory reset from the SkyController 2. *The factory reset procedure implies an automatic reboot*, which will be done immediately after recieving this command.

Result : The SkyController 2 will reboot, all settings will be reset to their default values. Products that were paired in factory will **NOT** lose this pairing.
Example sending the ` Reset ` command to your parrot drone :

```javascript

const project=drone.projects.skyctrl;
const commandClass=project.Factory;

//build a message requesting all settings
const ResetMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Reset
);

drone.message.send(ResetMessage);

```
