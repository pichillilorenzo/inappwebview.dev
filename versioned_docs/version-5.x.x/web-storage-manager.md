---
sidebar_position: 8
date: 2021-03-08 10:48:00
---

# Web Storage Manager

The `WebStorageManager` class implements a singleton object (shared instance) which manages the web storage used by `WebView` instances.

On Android, it is implemented using the [WebStorage](https://developer.android.com/reference/android/webkit/WebStorage.html) class.
On iOS, it is implemented using [WKWebsiteDataStore.default()](https://developer.apple.com/documentation/webkit/wkwebsitedatastore) instance.

:::info Note for iOS
  Available from iOS 9.0+.
:::

## Basic Usage

The Android-specific methods can be called using the `WebStorageManager.instance().android` attribute.

The `AndroidWebStorageManager` class is used to manage the JavaScript storage APIs provided by the WebView. It manages the Application Cache API, the Web SQL Database API and the HTML5 Web Storage API.

The iOS-specific methods can be called using the `WebStorageManager.instance().ios` attribute.

The `IOSWebStorageManager` class represents various types of data that a website might make use of. This includes cookies, disk and memory caches, and persistent data such as WebSQL, IndexedDB databases, and local storage.

Example:
```dart
// get the WebStorageManager instance
WebStorageManager webStorageManager = WebStorageManager.instance();

if (Platform.isAndroid) {
  // if current platform is Android, delete all data. 
  await webStorageManager.android.deleteAllData();
} else if (Platform.isIOS) {
  // if current platform is iOS, delete all data for "flutter.dev".
  var records = await webStorageManager.ios.fetchDataRecords(dataTypes: IOSWKWebsiteDataType.values);
  var recordsToDelete = <IOSWKWebsiteDataRecord>[];
  for (var record in records) {
    if (record.displayName == 'flutter.dev') {
      recordsToDelete.add(record);
    }
  }
  await webStorageManager.ios.removeDataFor(
      dataTypes: IOSWKWebsiteDataType.values,
      dataRecords: recordsToDelete
  );
}
```
