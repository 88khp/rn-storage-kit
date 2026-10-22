---
sidebar_position: 3
---

# Logger

Production-safe structured logging for every storage operation. **Disabled by default.**

## Enable

Call once at app startup, before any storage operations:

```ts
import { enableLogger } from '@88khp/rn-storage-kit';

enableLogger({
  level: 'debug',           // 'none' | 'error' | 'info' | 'debug'
  maxEntries: 200,          // FIFO cap
  ttl: 0,                   // auto-evict entries older than N ms (0 = off)
  allowInProduction: false, // never logs in production unless set
});
```

## Read, clear and subscribe

```ts
import { getLogs, clearLogs, onNewLog, offNewLog, disableLogger } from '@88khp/rn-storage-kit';

const entries = getLogs(); // TStorageLogEntry[]
clearLogs();

const handler = (entry) => console.log(entry);
onNewLog(handler);
offNewLog(handler);

disableLogger();
```

## Log levels

| Level | What is recorded |
|-------|------------------|
| `none` | Nothing |
| `error` | Failed operations only |
| `info` | All operations: key and adapter visible, values and results stripped |
| `debug` | Full detail: key, value, result, duration. Secure values are always masked as `***` |

## Entry shape

```ts
type TStorageLogEntry = {
  id: string;
  timestamp: number;
  adapter: 'mmkv' | 'secure';
  operation: 'set' | 'get' | 'remove' | 'clear' | 'getAllKeys';
  key?: string;
  value?: string;   // '***' for secure ops; absent at info level
  result?: string | null;
  error?: string;
  durationMs: number;
  secure: boolean;
};
```

## Production safety

- The logger is a no-op in production unless `allowInProduction: true` is passed to `enableLogger`.
- Secure adapter values are always logged as `***`, whatever the level.
- At `info` level, `value` and `result` are stripped from every entry.

Logs survive Metro fast refresh through a dedicated MMKV instance (`rn-storage-kit.logs`). Writes run async via `setImmediate`, so logging doesn't slow storage calls. Secure values never reach the log store.
