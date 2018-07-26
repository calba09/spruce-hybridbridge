//
//  HybridBridge.swift
//  Linksys
//
//  Created by Carlos Alba on 7/19/18.
//  Copyright © 2018 Belkin International, Inc. All rights reserved.
//

import Foundation

@objc(HybridBridge) class HybridBridge: CDVPlugin {
    
    private var listenerCallbackId : String = String()
    
    //MARK: Action Methods
    
    public func bindListener(_ command : CDVInvokedUrlCommand) {
        self.commandDelegate.run {
            print("Action Bind Listener")
            
            self.listenerCallbackId = command.callbackId;
            
            let pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK)
            pluginResult?.setKeepCallbackAs(true)
            
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    public func setValue(_ command : CDVInvokedUrlCommand) {
        self.commandDelegate.run {
            print("Action Set Value")
            var pluginResult = CDVPluginResult.init()
            
            if command.arguments.count == 1 {
                guard let title = command.arguments[0] as? String else {
                    pluginResult = CDVPluginResult.init(status: CDVCommandStatus_ERROR, messageAs: "Invalid number of parameters")
                    return
                }
                
                print("\(title)")
                
                pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK)
            }
            
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    public func updateValue(_ command : CDVInvokedUrlCommand) {
        self.commandDelegate.run {
            print("Action Update Value")
            var pluginResult = CDVPluginResult.init()
            
            if command.arguments.count == 1 {
                guard let title = command.arguments[0] as? String else {
                    pluginResult = CDVPluginResult.init(status: CDVCommandStatus_ERROR, messageAs: "Invalid number of parameters")
                    return
                }
                
                print("\(title)")
                
                pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK)
            }
            
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    //MARK: Report Methods
    
    public func reportEvent(eventData : [String : Any]) {
        self.commandDelegate.run(inBackground: {
            print("Report Event")
            
            let pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: eventData)
            pluginResult?.setKeepCallbackAs(true)
            
            self.commandDelegate.send(pluginResult, callbackId: self.listenerCallbackId)
        })
    }
}
