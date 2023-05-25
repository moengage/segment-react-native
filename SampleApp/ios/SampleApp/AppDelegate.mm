#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <UserNotifications/UNUserNotificationCenter.h>
#import <ReactNativeSegmentMoEngage/MoEngageSegmentReactInitializer.h>
#import <ReactNativeMoEngage/MoEngageInitializer.h>
#import <MoEngageSDK/MoEngageSDK.h>
@interface AppDelegate()< UNUserNotificationCenterDelegate>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"SampleApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  MoEngageSDKConfig* sdkConfig = [[MoEngageSDKConfig alloc] initWithAppID:@"YOUR APP ID"];
  sdkConfig.enableLogs = true;
  sdkConfig.appGroupID = @"group.com.alphadevs.MoEngage.NotificationServices";
  [[MoEngageSegmentReactInitializer sharedInstance] initializeDefaultSDKConfig:sdkConfig andLaunchOptions:launchOptions];
  [[MoEngageInitializer sharedInstance] initializeDefaultSDKConfig:sdkConfig andLaunchOptions:launchOptions];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

//Remote notification Registration callback methods
- (void)application:(UIApplication*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData*)deviceToken {
  //Call only if MoEngageAppDelegateProxyEnabled is NO
  [[MoEngageSDKMessaging sharedInstance] setPushToken:deviceToken];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
  completionHandler((UNNotificationPresentationOptionAlert|UNNotificationPresentationOptionSound));
}

-(void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler{
  [[MoEngageSDKMessaging sharedInstance] userNotificationCenter:center didReceive:response];
    completionHandler();
}


@end
