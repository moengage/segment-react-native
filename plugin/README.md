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

**Notes**: For complete Segment SDK setup please refer [`Segment Developer Doc`](https://segment.com/docs/connections/sources/catalog/libraries/mobile/react-native/)

### MoEngage ReactNative Setup
Install `react-native-segment-plugin-moengage` & [`react-native-moengage`](https://www.npmjs.com/package/react-native-moengage)
```sh
npm install react-native-segment-plugin-moengage react-native-moengage
```

Initialise the MoEngage ReactNative SDK.
Reference Doc: https://developers.moengage.com/hc/en-us/categories/4404199274900-React-Native-SDK

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
        new MoEngage.Builder(this, "Your App Id")
            .enablePartnerIntegration(IntegrationPartner.SEGMENT)
            .build();
MoEngage.initialiseDefaultInstance(moEngage);
```