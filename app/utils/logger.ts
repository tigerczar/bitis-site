// app/utils/logger.ts

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'

const LEVELS: Record<LogLevel, number> = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
}

const env = (typeof process !== 'undefined' && process?.env) ? process.env : (globalThis as any)?.process?.env || {}
const DEFAULT_LEVEL: LogLevel = ((env.LOG_LEVEL as LogLevel) || (env.NODE_ENV === 'development' ? 'debug' : 'info'))
const OUTPUT_FORMAT: 'json' | 'pretty' = (env.LOG_FORMAT as 'json' | 'pretty') || (env.NODE_ENV === 'production' ? 'json' : 'pretty')
const DEFAULT_PREFIX = env.LOG_PREFIX || 'NuxtApp'

// Keys that should be masked in logs
const REDACT_KEYS = new Set<string>([
  'password', 'pwd', 'pass', 'secret', 'token', 'accessToken', 'refreshToken', 'authorization', 'auth', 'email', 'phone', 'creditCard', 'cardNumber'
])

function isPlainObject(val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function redact(value: any, seen = new WeakSet()): any {
  try {
    if (value === null || value === undefined) return value
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value
    if (value instanceof Date) return value.toISOString()

    if (Array.isArray(value)) {
      if (seen.has(value)) return '[Circular]'
      seen.add(value)
      return value.map((v) => redact(v, seen))
    }

    if (isPlainObject(value)) {
      if (seen.has(value)) return '[Circular]'
      seen.add(value)
      const out: Record<string, any> = {}
      for (const [k, v] of Object.entries(value)) {
        if (REDACT_KEYS.has(k)) out[k] = '***'
        else out[k] = redact(v, seen)
      }
      return out
    }

    // Fallback for other types
    return String(value)
  } catch (e) {
    return '[Unserializable]'
  }
}

interface LogEntry {
  level: LogLevel
  time: string
  prefix: string
  msg: string
  data?: any
  ctx?: Record<string, any>
}

export class LoggerService {
  private prefix: string
  private level: LogLevel
  private baseContext: Record<string, any>
  private timers: Map<string, number>

  constructor(prefix = DEFAULT_PREFIX, context: Record<string, any> = {}, level: LogLevel = DEFAULT_LEVEL) {
    this.prefix = prefix
    this.level = level
    this.baseContext = { ...context }
    this.timers = new Map()
  }

  setLevel(level: LogLevel) {
    this.level = level
  }

  child(context: Record<string, any>) {
    return new LoggerService(this.prefix, { ...this.baseContext, ...context }, this.level)
  }

  private shouldLog(level: LogLevel) {
    return LEVELS[level] >= LEVELS[this.level]
  }

  private format(level: LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString()

    if (OUTPUT_FORMAT === 'json') {
      const entry: LogEntry = {
        level,
        time: timestamp,
        prefix: this.prefix,
        msg: message,
        data: data !== undefined ? redact(data) : undefined,
        ctx: Object.keys(this.baseContext).length ? redact(this.baseContext) : undefined,
      }
      return JSON.stringify(entry)
    }

    // pretty format
    const base = `[${timestamp}] [${this.prefix}] [${level.toUpperCase()}] ${message}`
    const ctxStr = Object.keys(this.baseContext).length ? ` | ctx=${JSON.stringify(redact(this.baseContext))}` : ''
    const dataStr = data !== undefined ? ` | data=${JSON.stringify(redact(data))}` : ''
    return `${base}${ctxStr}${dataStr}`
  }

  private write(level: LogLevel, message: string, data?: any) {
    if (!this.shouldLog(level)) return

    const line = this.format(level, message, data)

    switch (level) {
      case 'trace':
      case 'debug':
        console.debug(line)
        break
      case 'info':
        console.info(line)
        break
      case 'warn':
        console.warn(line)
        break
      case 'error':
      case 'fatal':
        console.error(line)
        break
      default:
        console.log(line)
    }
  }

  trace(message: string, data?: any) { this.write('trace', message, data) }
  debug(message: string, data?: any) { this.write('debug', message, data) }
  info(message: string, data?: any)  { this.write('info', message, data) }
  warn(message: string, data?: any)  { this.write('warn', message, data) }
  error(message: string | Error, data?: any) {
    if (message instanceof Error) {
      this.write('error', message.message, { ...data, stack: message.stack })
    } else {
      this.write('error', message, data)
    }
  }
  fatal(message: string | Error, data?: any) {
    if (message instanceof Error) {
      this.write('fatal', message.message, { ...data, stack: message.stack })
    } else {
      this.write('fatal', message, data)
    }
  }

  // Simple timers to measure durations
  time(name: string) {
    this.timers.set(name, Date.now())
  }
  timeEnd(name: string, extra?: any) {
    const start = this.timers.get(name)
    if (!start) return
    const ms = Date.now() - start
    this.timers.delete(name)
    this.info(`timer:${name}`, { durationMs: ms, ...extra })
  }
}
 
import { useNuxtApp } from '#app'

const baseLogger = new LoggerService(DEFAULT_PREFIX)

// Proxy that forwards calls to request-scoped $logger if available; otherwise uses the base logger
export const Logger = new Proxy(baseLogger as any, {
  get(target, prop: keyof LoggerService) {
    try {
      const nuxtApp = typeof useNuxtApp === 'function' ? useNuxtApp() : undefined
      const injected = (nuxtApp as any)?.$logger
      if (injected && typeof injected[prop] === 'function') {
        return injected[prop].bind(injected)
      }
    } catch (_) {
      // ignore and fallback
    }
    return (target as any)[prop]
  },
}) as unknown as LoggerService

// Create a logger instance with correlation/trace ID support for a request or action
export function createRequestLogger(traceId?: string, context: Record<string, any> = {}) {
  const ctx = traceId ? { traceId, ...context } : context
  return new LoggerService(DEFAULT_PREFIX, ctx)
}
