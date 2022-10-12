---
sidebar_position: 7
date: 2022-12-10 12:00:00
---

# Http Auth Credential Database

To manage HTTP auth credentials, you can use the `HttpAuthCredentialDatabase` class, which implements a singleton object (shared instance).

On iOS, this class uses the [URLCredentialStorage](https://developer.apple.com/documentation/foundation/urlcredentialstorage) class. On Android, this class has a custom implementation using `android.database.sqlite.SQLiteDatabase` because the [WebViewDatabase](https://developer.android.com/reference/android/webkit/WebViewDatabase) class doesn't offer the same functionalities as iOS `URLCredentialStorage`.

## Basic Usage

Here is an example of how to set a HTTP auth credential for a particular Protection Space:

```dart
// get the HttpAuthCredentialDatabase instance
HttpAuthCredentialDatabase httpAuthCredentialDatabase =
          HttpAuthCredentialDatabase.instance();

// set a HTTP auth credential for a particular Protection Space
httpAuthCredentialDatabase.setHttpAuthCredential(
  protectionSpace: URLProtectionSpace(
      host: "example.com",
      protocol: "http",
      realm: "Realm",
      port: 8081),
  credential:
      URLCredential(username: "USERNAME", password: "PASSWORD"));
```
