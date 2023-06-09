import "ts-jest";
import "jest";
import {
    accountMetaPayload,
    anonymousIdPayload,
    dummyAnonymousId,
    dummyAppId,
    dummyTrackedEvent,
    dummyUserAlias,
    dummyUserTraits,
    trackedEventPayload,
    userAliasPayload,
    userAttributePayload
} from '../__mocks__/PayloadDataProvider';
import PlatformPayloadBuilder from "../internal/PlatformPayloadBuilder";

/**
 * Test Cases For {@link PlatformPayloadBuilder}
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
describe('PlatformPayloadBuilder', () => {
    const androidPlatformPayloadBuilder = new PlatformPayloadBuilder("android", dummyAppId);
    const iosPlatformPayloadBuilder = new PlatformPayloadBuilder("ios", dummyAppId);
    const webPlatformBuilder = new PlatformPayloadBuilder("web", dummyAppId);

    describe('Anonymous Id Payload', () => {
        it('should return anonymous id payload for android', () => {
            expect(androidPlatformPayloadBuilder.getAnonymousIdPayload(dummyAnonymousId)).toEqual(JSON.stringify(anonymousIdPayload));
        });

        it('should return anonymous id payload for ios', () => {
            expect(iosPlatformPayloadBuilder.getAnonymousIdPayload(dummyAnonymousId)).toEqual(anonymousIdPayload);
        });

        it('should throw error', () => {
            expect(() => { webPlatformBuilder.getAnonymousIdPayload(dummyAnonymousId) }).toThrow("Platform Not Supported");
        });
    });

    describe('User Attributes Payloads', () => {
        it('should return valid user attribute payload for android', () => {
            expect(androidPlatformPayloadBuilder.getUserAttributesPayload(dummyUserTraits)).toEqual(JSON.stringify(userAttributePayload));
        });

        it('should return valid user attribute payload for ios', () => {
            expect(iosPlatformPayloadBuilder.getUserAttributesPayload(dummyUserTraits)).toEqual(userAttributePayload);
        });

        it('should throw error', () => {
            expect(() => { webPlatformBuilder.getUserAttributesPayload(dummyUserTraits) }).toThrow("Platform Not Supported");
        });
    });

    describe('Event Track Payloads', () => {
        it('should return valid tracked event payload for android', () => {
            expect(androidPlatformPayloadBuilder.getTrackEventPayload(dummyTrackedEvent.event, dummyTrackedEvent.properties)).toEqual(JSON.stringify(trackedEventPayload));
        });

        it('should return valid tracked event payload for ios', () => {
            expect(iosPlatformPayloadBuilder.getTrackEventPayload(dummyTrackedEvent.event, dummyTrackedEvent.properties)).toEqual(trackedEventPayload);
        });

        it('should throw error', () => {
            expect(() => { webPlatformBuilder.getTrackEventPayload(dummyTrackedEvent.event, dummyTrackedEvent.properties) }).toThrow("Platform Not Supported");
        });
    });

    describe('User Alias Payloads', () => {
        it('should return valid alias payload for android', () => {
            expect(androidPlatformPayloadBuilder.getUserAliasUpdatePayload(dummyUserAlias)).toEqual(JSON.stringify(userAliasPayload));
        });

        it('should return valid alias payload for ios', () => {
            expect(iosPlatformPayloadBuilder.getUserAliasUpdatePayload(dummyUserAlias)).toEqual(userAliasPayload);
        });

        it('should throw error', () => {
            expect(() => { webPlatformBuilder.getUserAliasUpdatePayload(dummyUserAlias) }).toThrow("Platform Not Supported");
        });
    });

    describe('Account Meta Payloads', () => {
        it('should return valid account meta payload for android', () => {
            expect(androidPlatformPayloadBuilder.getAccountMetaPayload()).toEqual(JSON.stringify(accountMetaPayload));
        });

        it('should return valid account meta payload for ios', () => {
            expect(iosPlatformPayloadBuilder.getAccountMetaPayload()).toEqual(accountMetaPayload);
        });

        it('should throw error', () => {
            expect(() => { webPlatformBuilder.getAccountMetaPayload() }).toThrow("Platform Not Supported");
        });
    });
});

