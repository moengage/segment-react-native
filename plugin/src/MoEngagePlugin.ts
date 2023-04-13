import {
    AliasEventType,
    DestinationPlugin,
    IdentifyEventType,
    PluginType,
    SegmentAPISettings,
    SegmentError,
    TrackEventType,
    UpdateType,
} from '@segment/analytics-react-native';

export class MoEngagePlugin extends DestinationPlugin {

    type = PluginType.destination;
    key = 'MoEngage';
  
    update(settings: SegmentAPISettings, type: UpdateType): void {
        console.log("Segment MoEngage Update Called");
    }

    alias(event: AliasEventType): AliasEventType | Promise<AliasEventType | undefined> | undefined {
        console.log("Segment MoEngage Alias Called");
        return event
    }

    identify(event: IdentifyEventType): IdentifyEventType | Promise<IdentifyEventType | undefined> | undefined {
        console.log("Segment MoEngage Identify Called");
        return event
    }

    track(event: TrackEventType): TrackEventType | Promise<TrackEventType | undefined> | undefined {
        console.log("Segment MoEngage Track Called");
        return event
    }

    flush(): void | Promise<void> {
        console.log("Segment MoEngage Flush Called");
    }

    reset(): void {
        console.log("Segment MoEngage Reset Called");
    }
}