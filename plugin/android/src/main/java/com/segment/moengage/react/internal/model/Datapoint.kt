package com.segment.moengage.react.internal.model

import org.json.JSONObject

internal data class Datapoint(
    val instanceMeta: InstanceMeta,
    val eventName: String,
    val properties: JSONObject
)