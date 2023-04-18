package com.segment.moengage.react.dataprovider

import com.segment.moengage.react.internal.model.AddressData
import com.segment.moengage.react.internal.model.AliasData
import com.segment.moengage.react.internal.model.AnonymousIdData
import com.segment.moengage.react.internal.model.Datapoint
import com.segment.moengage.react.internal.model.InstanceMeta
import com.segment.moengage.react.internal.model.UserAttributeData
import org.intellij.lang.annotations.Language
import org.json.JSONObject

private val dummyIsoDate = { "2023-04-12T05:23:50.415z" }

@Language("JSON")
internal val ACCOUNT_INSTANCE_META_JSON_STRING = """
    {
      "accountMeta": {
        "appId": "DummyAppId"
      }
    }
""".trimIndent()

@Language("JSON")
internal val USER_ALIAS_JSON_STRING = """
    {
      "accountMeta": {
        "appId": "DummyAppId"
      },
      "data": {
        "alias": "DummyUserAlias"
      }
    }
""".trimIndent()

@Language("JSON")
internal val USER_TRAITS_JSON_STRING = """
    {
        "address": {
            "street": "Koramangala", 
            "city": "Bengaluru",
            "country": "India",
            "state": "Karnataka",
            "postalCode": "560095"
        },
        "age": 1,
        "birthday": $dummyIsoDate,
        "createdAt": $dummyIsoDate,
        "email": "moengage@test.com",
        "firstName": "MoEngage",
        "lastName": "Inc. ",
        "phone": "1234567890",
        "username": "moengage"
    }
""".trimIndent()

@Language("JSON")
internal val USER_ATTRIBUTES_JSON_STRING = """
    {
      "accountMeta": {
        "appId": "DummyAppId"
      },
      "data": {
        "traits" : $USER_TRAITS_JSON_STRING
      }
    }
""".trimIndent()

@Language("JSON")
internal val TRACKED_EVENT_JSON_STRING = """
    {
      "accountMeta": {
        "appId": "DummyAppId"
      },
      "data": {
        "event": "Dummy Event",
        "properties": {
            "id": 321,
            "name": "iPhone",
            "purchaseTime": $dummyIsoDate,
            "billAmount": 12312.12,
            "userDetails": {
                "userName": "moengage",
                "email": "moengage@test.com",
                "phone": 1234567890,
                "gender": "male"
            },
            "2": "item" 
        }
      }
    }
""".trimIndent()

@Language("JSON")
internal val ANONYMOUS_ID_JSON_STRING = """
    {
      "accountMeta": {
        "appId": "DummyAppId"
      },
      "data": {
        "anonymousId": "DummyAnonymousId"
      }
    }
""".trimIndent()

@Language("JSON")
internal val ADDRESS_JSON_STRING = """
    {
        "street": "Koramangala", 
        "city": "Bengaluru",
        "country": "India",
        "state": "Karnataka",
        "postalCode": "560095"
    }
""".trimIndent()

@Language("JSON")
internal val ADDRESS_WITH_CITY_MISSING_JSON_STRING = """
    {
        "street": "Koramangala",
        "country": "India",
        "state": "Karnataka",
        "postalCode": "560095"
    }
""".trimIndent()

@Language("JSON")
internal val ADDRESS_WITH_COUNTRY_MISSING_JSON_STRING = """
    {
        "street": "Koramangala", 
        "city": "Bengaluru",
        "state": "Karnataka",
        "postalCode": "560095"
    }
""".trimIndent()

@Language("JSON")
internal val ADDRESS_WITH_STATE_MISSING_JSON_STRING = """
    {
        "street": "Koramangala", 
        "city": "Bengaluru",
        "country": "India",
        "postalCode": "560095"
    }
""".trimIndent()

@Language("JSON")
internal val ADDRESS_EMPTY_JSON_STRING = """
    {}
""".trimIndent()

internal val ACCOUNT_INSTANCE_META_OBJECT = InstanceMeta("DummyAppId")

internal val USER_ALIAS_OBJECT = AliasData(ACCOUNT_INSTANCE_META_OBJECT, "DummyUserAlias")

internal val USER_ATTRIBUTES_OBJECT =
    UserAttributeData(ACCOUNT_INSTANCE_META_OBJECT, JSONObject(USER_TRAITS_JSON_STRING))

internal val TRACKED_EVENT_OBJECT = Datapoint(
    InstanceMeta("DummyAppId"),
    "Dummy Event",
    JSONObject(TRACKED_EVENT_JSON_STRING).getJSONObject("data").getJSONObject("properties")
)

internal val ANONYMOUS_ID_OBJECT = AnonymousIdData(InstanceMeta("DummyAppId"), "DummyAnonymousId")

internal val ADDRESS_OBJECT = AddressData("Bengaluru", "Karnataka", "India")

internal val ADDRESS_WITH_CITY_MISSING_OBJECT = AddressData("", "Karnataka", "India")

internal val ADDRESS_WITH_COUNTRY_MISSING_OBJECT = AddressData("Bengaluru", "Karnataka", "")

internal val ADDRESS_WITH_STATE_MISSING_OBJECT = AddressData("Bengaluru", "", "India")

internal val ADDRESS_EMPTY_JSON_OBJECT = AddressData("", "", "")