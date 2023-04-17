package com.segment.moengage.react.internal.model

import org.json.JSONObject

internal data class UserAttributeData(
    val instanceMeta: InstanceMeta,
    val traits: JSONObject
)