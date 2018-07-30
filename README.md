# spruce-bridge

## Overview

### Application Architecture

![](/doc/Application%20Architecture.jpg)
![Alt text](/doc/Application%20Architecture.jpg?raw=true)

***Native code consists of***
1.	Application native code: the one that handles native application behaviour, native controls, e.g. MainViewController or UIControls.
2.	Bridge Cordova plugin code: the native piece of Cordova plugin that will be responsible for bridging between native and hybrid
 
***JavaScript code consists of***
1.	Application JavaScript code: web content, web logic etc.
2.	Bridge Cordova plugin code: the JavaScript piece of Cordova plugin that will be responsible for bridging between native and hybrid.
3.	NativeEventsListener: JavaScript listener that will get notifications regarding native events (*this can be done as a part of Bridge Cordova plugin as well, but for the sake of keeping things clear and detached we'll have it as a separate module*).

### Bind JavaScript Listener
First thing we want to do on an application startup is to prepare our native UI layout. This will be done in view controller by using native code. 
Next, we want to create a binding between JavaScript listener and a native layer. We'll create a ***bindListener()*** method that will take a reference to JavaScript NativeEventsListener and send it to native part of the Bridge Cordova plugin. The plugin will keep the reference to a listener throughout the application lifetime and eventually use it to send native events.

### Receiving Native Events
We'll create a public ***reportEvent()*** method in Bridge  that will send native events to JavaScript listener attached in previous step. Once native event has occurred (*e.g. IBAction*) application code will get a reference to the Bridge plugin by using Cordova APIs and use ***reportEvent()*** API to send this event to a JavaScript layer.  Once event is received in JavaScript layer - it can be processed by a custom JavaScript code. 
`This is the default way Cordova plugins work.`

### Receiving JavaScript Events
When something happened in JavaScript. Call ***cordova.exec()*** API to send notification to native piece of Cordova Plugin. From there on send commands to native.

## Installation

in Terminal go to:
```sh
$ cd ${repository_root}/hybrid/symmetry

$ cordova plugin add 'https://github.com/jimmychungbelkin/spruce-bridge.git'
```
 
 > NOTE
 > Make sure you have `spruce-bridge` inside plugins folder.

## iOS

### Bridge.swift
| Methods | Description |
| ------ | ------ |
| bindListener | *Action bind listener* |
| setValue | *Get value from JavaScript* |
| reportEvent | *Report event* |

### Example

#### Sending Action
```sh
guard let bridge = self.pluginObjects.value(forKey: "Bridge") as? Bridge else {
    print("Could find the Bridge in Plugins")
    return
}
// Send Dictionary or JSON as event
let eventData : [String : Any] = ["goTo":"eventType",
                                  path:"viewIndex"] // path = "linksys_login/selectLogin"
        
bridge.reportEvent(eventData: eventData)
```

## JavaScript

### Bridge.js
| Methods | Description |
| ------ | ------ |
| bindListener | *Action bind listener* |
| setView | *Set value to Native* |

### NativeEventsListener.js
| Methods | Description |
| ------ | ------ |
| onReceivedEvent | *Received actions from Native* |
| goToSelectedView | *Place to perform an action* |

### More Info
For more info on plugins see the *[Plugin Development Guide](http://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html)*