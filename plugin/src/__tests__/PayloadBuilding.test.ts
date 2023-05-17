import "ts-jest";
import "jest";
import {
    getAccountMetaPayload,
    getAnonymousIdPayload,
    getTrackEventPayload,
    getUserAliasUpdatePayload,
    getUserAttributePayload
} from '../internal/PayloadBuilder';
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

/**
 * Test Cases For {@link PayloadBuilder}
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
describe('PayloadBuilder', () => {
    describe('Anonymous Id Payload', () => {
        it('should return payload with anonymous id', () => {
            expect(getAnonymousIdPayload(dummyAppId, dummyAnonymousId)).toEqual(anonymousIdPayload);
        });
    });

    describe('User Attributes Payloads', () => {
        it('should return valid user attribute payload', () => {
            expect(getUserAttributePayload(dummyAppId, dummyUserTraits)).toEqual(userAttributePayload);
        });
    });

    describe('Event Track Payloads', () => {
        it('should return valid tracked event payload', () => {
            expect(getTrackEventPayload(dummyAppId, dummyTrackedEvent.event, dummyTrackedEvent.properties)).toEqual(trackedEventPayload);
        });
    });

    describe('User Alias Payloads', () => {
        it('should return valid alias payload', () => {
            expect(getUserAliasUpdatePayload(dummyAppId, dummyUserAlias)).toEqual(userAliasPayload);
        });
    });

    describe('Account Meta Payloads', () => {
        it('should return valid account meta payload', () => {
            expect(getAccountMetaPayload(dummyAppId)).toEqual(accountMetaPayload);
        });
    });
});