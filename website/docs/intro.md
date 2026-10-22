---
sidebar_position: 1
---

# RN Storage Kit

Unified storage for React Native. One async `get`, `set`, `remove`, `clear` interface covers three needs:

| Adapter | Backed by | Use for |
|---------|-----------|---------|
| `MMKVStorageAdapter` | [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) | Preferences, cache, app state |
| `SecureStorageAdapter` | [react-native-keychain](https://github.com/oblador/react-native-keychain) | Tokens, passwords, secrets |
| Logger | MMKV-persisted | Debug traces, production-safe logs |

## Install

```sh
npm install @88khp/rn-storage-kit
npm install react-native-mmkv react-native-keychain
```

Follow the native setup guides for [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) and [react-native-keychain](https://github.com/oblador/react-native-keychain).
