---
sidebar_position: 4
---

# API reference

## `MMKVStorageAdapter`

| Method | Signature | Description |
|--------|-----------|-------------|
| `constructor` | `(id?: string)` | Custom MMKV instance ID. Default: `'rn-storage-kit.default'` |
| `get` | `(key: string) => Promise<string \| null>` | Returns the value or `null` |
| `set` | `(key: string, value: string) => Promise<void>` | Stores a string value |
| `remove` | `(key: string) => Promise<void>` | Deletes a key |
| `clear` | `() => Promise<void>` | Clears the whole MMKV instance |
| `getAllKeys` | `() => Promise<string[]>` | Returns all stored keys |

## `SecureStorageAdapter`

The same interface as `MMKVStorageAdapter`, backed by Keychain through `setGenericPassword` and `getGenericPassword` per key.

## Logger

| Export | Signature | Description |
|--------|-----------|-------------|
| `enableLogger` | `(options?: TLoggerOptions) => void` | Activates logging |
| `disableLogger` | `() => void` | Deactivates logging |
| `getLogs` | `() => TStorageLogEntry[]` | Returns a copy of all current entries |
| `clearLogs` | `() => void` | Clears entries from memory and MMKV |
| `onNewLog` | `(cb: TLogListener) => void` | Subscribes to new entries |
| `offNewLog` | `(cb: TLogListener) => void` | Unsubscribes |
