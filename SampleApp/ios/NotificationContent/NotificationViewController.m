//
//  NotificationViewController.m
//  NotificationContent
//
//  Created by Rakshitha on 23/05/23.
//

#import "NotificationViewController.h"
#import <UserNotifications/UserNotifications.h>
#import <UserNotificationsUI/UserNotificationsUI.h>
@import MoEngageRichNotification;

@interface NotificationViewController () <UNNotificationContentExtension>


@end

@implementation NotificationViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  [MoEngageSDKRichNotification setAppGroupID:@"group.com.alphadevs.MoEngage.NotificationServices"];
}

- (void)didReceiveNotification:(UNNotification *)notification {
  [MoEngageSDKRichNotification addPushTemplateToController:self withNotification:notification];
}

@end
