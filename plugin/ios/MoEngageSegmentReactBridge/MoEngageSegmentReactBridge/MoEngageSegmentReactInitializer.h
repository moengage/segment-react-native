//
//  MoEngageSegmentReactInitializer.h
//  ReactNativeSegmentMoEngage
//
//  Created by Rakshitha on 11/05/23.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@protocol SFSafariViewControllerDelegate;
#import <MoEngageSDK/MoEngageSDK.h>

NS_ASSUME_NONNULL_BEGIN

@interface MoEngageSegmentReactInitializer : NSObject

+(instancetype)sharedInstance;

/// Initialization Methods to setup SDK with MoEngageSDKConfig instance
/// @param sdkConfig MoEngageSDKConfig instance for SDK configuration
/// @param launchOptions Launch Options dictionary
/// @version 1.0.0 and above
- (void)initializeDefaultSDKConfig:(MoEngageSDKConfig*)sdkConfig andLaunchOptions:(NSDictionary*)launchOptions;

/// Initialization Methods to setup SDK with MoEngageSDKConfig along with SdkState
/// @param sdkConfig MoEngageSDKConfig instance for SDK configuration
/// @param sdkState MoEngageSDKState indicating if SDK is Enabled/Disabled
/// @param launchOptions Launch Options dictionary
/// @version 1.0.0 and above
- (void)initializeDefaultSDKConfigWithState:(MoEngageSDKConfig*)sdkConfig withSDKState:(MoEngageSDKState)sdkState andLaunchOptions:(NSDictionary*)launchOptions;

@end

NS_ASSUME_NONNULL_END
