package com.segment.moengage.react.internal

import com.segment.moengage.react.internal.model.AliasData
import com.segment.moengage.react.internal.model.AnonymousIdData
import com.segment.moengage.react.internal.model.Datapoint
import com.segment.moengage.react.internal.model.InstanceMeta
import com.segment.moengage.react.internal.model.UserAttributeData
import org.json.JSONObject

internal class PayloadTransformer {

    private val tag = "PayloadTransformer"

    fun instanceMetaFromJson(jsonObject: JSONObject): InstanceMeta {
        return InstanceMeta(
            jsonObject.getJSONObject(ARGUMENT_ACCOUNT_META).getString(ARGUMENT_APP_ID)
        )
    }

    fun aliasDataFromJson(jsonObject: JSONObject): AliasData {
        return AliasData(
            instanceMetaFromJson(jsonObject),
            jsonObject.getJSONObject(ARGUMENT_DATA).getString(ARGUMENT_ALIAS)
        )
    }

    fun anonymousIdDataFromJson(jsonObject: JSONObject): AnonymousIdData {
        return AnonymousIdData(
            instanceMetaFromJson(jsonObject),
            jsonObject.getJSONObject(ARGUMENT_DATA).getString(ARGUMENT_ANONYMOUS)
        )
    }

    fun dataPointsFromJson(jsonObject: JSONObject): Datapoint {
        return Datapoint(
            instanceMetaFromJson(jsonObject),
            jsonObject.getJSONObject(ARGUMENT_DATA).getString(ARGUMENT_EVENT),
            jsonObject.getJSONObject(ARGUMENT_DATA).getJSONObject(ARGUMENT_PROPERTIES)
        )
    }

    fun userAttributeDataFromJson(jsonObject: JSONObject): UserAttributeData {
        return UserAttributeData(
            instanceMetaFromJson(jsonObject),
            jsonObject.getJSONObject(ARGUMENT_DATA).getJSONObject(ARGUMENT_TRAITS)
        )
    }
}