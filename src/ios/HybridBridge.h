//
//  HybridBridge.h
//  Linksys
//
//  Created by Carlos Alba on 7/19/18.
//  Copyright © 2018 Belkin International, Inc. All rights reserved.
//

#import <Cordova/CDV.h>

@interface HybridBridge : CDVPlugin

-(void)reportEvent:(NSDictionary*)eventData;

@end
