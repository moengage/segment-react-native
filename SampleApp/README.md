![Logo](/.github/logo.png)

# SampleApp

This repository contains the ReactNative SampleApp to test the MoEngage Segment ReactNative Plugin

## App Setup

### ReactNative Changes
Add the key.tsx file under the root directory of the SampleApp with MoEngage AppId & Segment Write Key
```js
export const SEGMENT_WRITE_KEY = "Segment Write Key"
export const MOENGAGE_APP_ID = "MoEngage App Id"
```

Install the Required Package under SampleApp root directory
```sh
npm install
```

Install the MoEngage Segment Plugin to SampleApp
```sh
install-local ../plugin
```

### Android Native Module Changes
Add the MoEngage App Id in the Application Class
```kotlin
private val moEngageAppId: String = "Enter Your AppId"
```


Now, Run the application on required devices to check the integrations.