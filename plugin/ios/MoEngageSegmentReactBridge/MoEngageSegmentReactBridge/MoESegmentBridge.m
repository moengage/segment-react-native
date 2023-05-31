//
//  MoESegmentBridge.m
//  ReactNativeSegmentMoEngage
//
//  Created by Rakshitha on 11/05/23.
//  Copyright © 2016 MoEngage. All rights reserved.
//

#import "MoESegmentBridge.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import <React/RCTBundleURLProvider.h>
#import <MoEngageSDK/MoEngageSDK.h>

@import MoEngageSegmentPluginBase;


@implementation MoESegmentBridge


RCT_EXPORT_MODULE();


- (NSArray<NSString *> *)supportedEvents {
    return @[];
}

#pragma mark- Initialization Method
RCT_EXPORT_METHOD(initialiseSdk:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] initialize:payload];
}

#pragma mark- Track id
RCT_EXPORT_METHOD(trackAnonymousId:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] trackAnonymousId:payload];
}

#pragma mark - trackEvent
RCT_EXPORT_METHOD(trackEvent:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] trackEvent:payload];
}

#pragma mark- User Attribute Methods
RCT_EXPORT_METHOD(setUserAttributes:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] setUserAttribute:payload];
}

RCT_EXPORT_METHOD(setUserAlias:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] setAlias:payload];
}

#pragma mark- Reset User

RCT_EXPORT_METHOD(logoutUser:(NSDictionary *)payload)
{
    [[MoEngageSegmentPluginBridge sharedInstance] resetUser:payload];
}


@end
