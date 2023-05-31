/**
 * @file Provided the Mock data which can be used to test the functions
 * @author Abhishek Kumar
 * @since 1.0.0
 */

/**
 * MoEngage App Id
 */
export const dummyAppId = "DUMMY_APP_ID";

/**
 * User Anonymous Id
 */
export const dummyAnonymousId = "DUMMY_ANONYMOUS_ID";

/**
 * Date in ISO Format
 */
export const dummyIsoDate = (new Date()).toISOString();

/**
 * User Alias
 */
export const dummyUserAlias = "DUMMY_USER_ALIAS";

/**
 * User Traits JSON
 */
export const dummyUserTraits = {
    address: {
        street: "Koramangala",
        city: "Bengaluru",
        country: "India",
        state: "Karnataka",
        postalCode: "560095",
    },
    age: 1,
    birthday: dummyIsoDate,
    createdAt: dummyIsoDate,
    email: "moengage@test.com",
    firstName: "MoEngage",
    lastName: "Inc. ",
    phone: "1234567890",
    username: "moengage"
};

/**
 * Tracked Event JSON 
 */
export const dummyTrackedEvent = {
    event: 'Mobile Item Purchased',
    properties: {
        id: 321,
        name: "iPhone",
        purchaseTime: dummyIsoDate,
        billAmount: 12312.12,
        userDetails: {
            userName: "moengage",
            email: "moengage@test.com",
            phone: 1234567890,
            gender: "male"
        },
        2: "item"
    }
};

/**
 * Account Meta Payload
 */
export const accountMetaPayload = {
    accountMeta: {
        appId: dummyAppId
    }
};

/**
 * AnonymousId Payload using AnonymousId as {@link dummyAnonymousId}
 */
export const anonymousIdPayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        anonymousId: dummyAnonymousId
    }
};

/**
 * AnonymousId Payload with empty Anonymous Id
 */
export const anonymousIdPayloadWithEmptyId = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        anonymousId: ""
    }
};

/**
 * User Attributes payload using traits as {@link dummyUserTraits}
 */
export const userAttributePayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        traits: dummyUserTraits
    }
};

/**
 * Tracked Event payload using event name & propeties from {@link dummyTrackedEvent}
 */
export const trackedEventPayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        event: "Mobile Item Purchased",
        properties: {
            id: 321,
            name: "iPhone",
            purchaseTime: dummyIsoDate,
            billAmount: 12312.12,
            userDetails: {
                userName: "moengage",
                email: "moengage@test.com",
                phone: 1234567890,
                gender: "male"
            },
            2: "item"
        }
    }
};

/**
 * User Alias payload using alias as {@link dummyUserAlias}
 */
export const userAliasPayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        alias: dummyUserAlias
    }
};

