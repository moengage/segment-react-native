import { SEGMENT_WRITE_KEY, MOENGAGE_APP_ID } from '../key';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import HomeScreenComponent from './HomeScreen';
import { createClient, AnalyticsProvider } from '@segment/analytics-react-native';
import ReactMoE from "react-native-moengage";
import { MoEngagePlugin, MoEngageLogger, LogLevel } from "react-native-segment-plugin-moengage";

function App(): JSX.Element {

  // MoEngage React Segment Logger Configuration
  MoEngageLogger.configureLogs(LogLevel.DEBUG, true);

  // Segment Initialisation
  const segmentClient = createClient({
    writeKey: SEGMENT_WRITE_KEY
  });

  // Adding MoEngage Plugin to Segment
  segmentClient.add({ plugin: new MoEngagePlugin() });

  useEffect(() => {
    // MoEngage ReactNative SDK Initialisation
    ReactMoE.initialize(MOENGAGE_APP_ID);
  }, [])

  return (
    <AnalyticsProvider client={segmentClient}>
      <View style={{flex: 1}}>
        <HomeScreenComponent client={segmentClient}/>
      </View>
    </AnalyticsProvider>
  );
}

export default App;
