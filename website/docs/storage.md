---
sidebar_position: 2
---

# Storage

## MMKV storage

Fast, synchronous storage wrapped in a promise-based interface.

```ts
import { MMKVStorageAdapter } from '@88khp/rn-storage-kit';

const storage = new MMKVStorageAdapter();
// optionally scope to a named MMKV instance:
const scoped = new MMKVStorageAdapter('my-app.settings');

await storage.set('theme', 'dark');
const theme = await storage.get('theme'); // 'dark'
await storage.remove('theme');
await storage.clear();
const keys = await storage.getAllKeys();
```

## Secure storage (Keychain)

The same interface, backed by hardware-encrypted Keychain storage.

```ts
import { SecureStorageAdapter } from '@88khp/rn-storage-kit';

const secure = new SecureStorageAdapter();

await secure.set('auth_token', 'eyJ...');
const token = await secure.get('auth_token');
await secure.remove('auth_token');
await secure.clear();
const keys = await secure.getAllKeys();
```

Secure values are stored in Keychain with `setGenericPassword` per key. A key index lives in a dedicated MMKV instance (`rn-storage-kit.secure-index`), so `getAllKeys` and `clear` work without Keychain enumeration support.
