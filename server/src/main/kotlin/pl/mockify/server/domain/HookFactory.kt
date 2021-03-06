package pl.mockify.server.domain

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Component
import java.time.LocalDateTime

@Component
class HookFactory {

    fun createNewHook(
            name: String,
            body: Map<String, String>?,
            headers: Map<String, String>,
            method: HttpMethod
    ): Hook {
        val request = Request(method, body, headers)
        val defaultTemplate = Response(body = mapOf(Pair("status", "ok")))
        val event = Event(request, defaultTemplate, LocalDateTime.now())
        return Hook(name, defaultTemplate, listOf(event))
    }
}