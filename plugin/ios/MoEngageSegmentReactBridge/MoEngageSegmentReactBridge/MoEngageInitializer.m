//
//  MoEngageInitializer.m
//  ReactNativeSegmentMoEngage
//
//  Created by Rakshitha on 11/05/23.
//

#import "MoEngageInitializer.h"
#import "MoEngageReactSegmentPluginInfo.h"
#import "MoEngageSegmentConstants.h"
#import <MoEngageSDK/MoEngageSDK.h>
@import MoEngageSegmentPluginBase;
@interface MoEngageInitializer()

@end

@implementation MoEngageInitializer

#pragma mark- Initialization

+(instancetype)sharedInstance{
    static dispatch_once_t onceToken;
    static MoEngageInitializer *instance;
    dispatch_once(&onceToken, ^{
        instance = [[MoEngageInitializer alloc] init];
    });
    return instance;
}
#pragma mark- Initialization methods

- (void)initializeDefaultSDKConfig:(MoEngageSDKConfig*)sdkConfig andLaunchOptions:(NSDictionary*)launchOptions{
    MoEngageSegmentPlugin *plugin = [[MoEngageSegmentPlugin alloc] init];
    [plugin initializeDefaultInstanceWithSdkConfig:sdkConfig launchOptions:launchOptions];
    [self commonSetUp:plugin identifier:sdkConfig.appId];
}

- (void)initializeDefaultSDKConfigWithState:(MoEngageSDKConfig *)sdkConfig withSDKState:(MoEngageSDKState)sdkState andLaunchOptions:(NSDictionary*)launchOptions{
    MoEngageSegmentPlugin *plugin = [[MoEngageSegmentPlugin alloc] init];
    [plugin initializeDefaultInstanceWithSdkConfig:sdkConfig sdkState:sdkState launchOptions:launchOptions];
    [self commonSetUp: plugin identifier:sdkConfig.appId];
}

#pragma mark- Utils

- (void)commonSetUp:(MoEngageSegmentPlugin *)plugin identifier:(NSString*)identifier {
    [plugin trackPluginInfo: kReactSegment version:MOE_REACT_SEGMENT_PLUGIN_VERSION];
}

@end
