export const dummyAppId = "DUMMY_APP_ID";

export const dummyAnonymousId = "DUMMY_ANONYMOUS_ID";

export const dummyIsoDate = (new Date()).toISOString();

export const dummyUserAlias = "DUMMY_USER_ALIAS";

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

export const accountMetaPayload = {
    accountMeta: {
        appId: dummyAppId
    }
};

export const anonymousIdPayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        anonymousId: dummyAnonymousId
    }
};

export const anonymousIdPayloadWithEmptyId = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        anonymousId: ""
    }
};

export const userAttributePayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        traits: dummyUserTraits
    }
};

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

export const userAliasPayload = {
    accountMeta: {
        appId: dummyAppId
    },
    data: {
        alias: dummyUserAlias
    }
};

