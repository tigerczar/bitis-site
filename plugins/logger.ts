import { defineNuxtPlugin } from '#app'
import { Logger, createRequestLogger } from '~/utils/logger'
import { getHeader, setResponseHeader, getRequestIP, getRequestURL } from 'h3'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const event = nuxtApp.ssrContext?.event
    if (event) {
      let traceId = (getHeader(event, 'x-request-id') as string | undefined) || undefined
      if (!traceId) {
        traceId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
      }
      setResponseHeader(event, 'x-request-id', traceId)

      const url = getRequestURL(event)
      const method = event.node.req.method || 'GET'
      const ip = getRequestIP(event)
      const reqLogger = createRequestLogger(traceId, { method, path: url?.pathname || event.node.req.url, ip })

      // Inject a per-request logger
      nuxtApp.provide('logger', reqLogger)
      ;(event.context as any).logger = reqLogger

      const start = Date.now()
      reqLogger.info('request:start')
      event.node.res.on('finish', () => {
        const ms = Date.now() - start
        reqLogger.info('request:end', { status: event.node.res.statusCode, durationMs: ms })
      })
    } else {
      // Fallback in rare cases
      nuxtApp.provide('logger', Logger)
    }
  } else {
    // Client-side logger with client context
    const clientLogger = Logger.child({ client: true })
    nuxtApp.provide('logger', clientLogger)
  }
})
