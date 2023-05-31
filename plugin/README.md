![Logo](/.github/logo.png)

# MoEngage Segment Integration Plugin

## SDK Installation 

### Segment Setup
Install [`@segment/analytics-react-native`](https://github.com/segmentio/analytics-react-native)

```sh
yarn add @segment/analytics-react-native
# or
npm install @segment/analytics-react-native
```

Initialise the Segment SDK
```js
import { createClient } from '@segment/analytics-react-native';

const segmentClient = createClient({
  writeKey: 'SEGMENT_API_KEY'
});
```

**Notes**: For complete Segment SDK setup please refer [`Segment Developer Documentation`](https://segment.com/docs/connections/sources/catalog/libraries/mobile/react-native/)

### MoEngage ReactNative Setup
Install `react-native-segment-plugin-moengage` & [`react-native-moengage`](https://www.npmjs.com/package/react-native-moengage)
```sh
npm install react-native-segment-plugin-moengage react-native-moengage
```

Add the MoEngage Plugin to Segment Client.
```js
import { MoEngagePlugin } from "react-native-segment-plugin-moengage";

segmentClient.add({ plugin: new MoEngagePlugin() });
```

Once the installation is done move to platform specific integrations. 

### Android 
Add the Segment Integration to MoEngage builder
```java
MoEngage moEngage =
        new MoEngage.Builder(this, "YOUR_APP_ID", [YOUR_DATA_CENTER])
            .enablePartnerIntegration(IntegrationPartner.SEGMENT)
            .build();
MoEInitializer.INSTANCE.initializeDefaultInstance(getApplicationContext(), moEngage);
```
### iOS 
Add the Segment Integration in application:didFinishLaunchingWithOptions: method: of AppDelegate
```Objective-C
#import <ReactNativeSegmentMoEngage/MoEngageSegmentReactInitializer.h>
#import <MoEngageSDK/MoEngageSDK.h>
@implementation AppDelegate
 
- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{    
    MoEngageSDKConfig* sdkConfig = [[MoEngageSDKConfig alloc] initWithAppId:@"YOUR APPID" dataCenter: DATA_CENTER];
    sdkConfig.enableLogs = true;
    [[MoEngageSegmentReactInitializer sharedInstance] initializeDefaultSDKConfig:sdkConfig andLaunchOptions:launchOptions];
 
    return YES;
}
```
Refer to the integration [documentation](https://partners.moengage.com/hc/en-us/sections/15979246131092-React-Native-Device-Mode) for more details.
