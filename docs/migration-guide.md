---
sidebar_position: 12
date: 2022-12-10 12:00:00
---

# Migration Guide from 5.x.x

## Minimum Platform Version

Version `6.x.x` now requires Android `minSdkVersion` to be `19` (`android/app/build.gradle`)
and the minimum iOS version to be `9.0` (`ios/Podfile`).

## Deprecated Option classes

Option classes, such as `InAppWebViewGroupOptions`, `InAppBrowserClassOptions` or
`ChromeSafariBrowserClassOptions`, have been marked as `deprecated` in favor of the new ones
without using the `android` and `ios` properties for platform-specific options.

Now, options/settings are all in the same class without platform distinction.
To know if a specific option/setting is available for a specific platform, check the code docs directly.

For example, the old:
```dart
InAppWebViewGroupOptions(
  crossPlatform: InAppWebViewOptions(
      useShouldOverrideUrlLoading: true,
      mediaPlaybackRequiresUserGesture: false
  ),
  android: AndroidInAppWebViewOptions(
    useHybridComposition: true,
  ),
  ios: IOSInAppWebViewOptions(
    allowsInlineMediaPlayback: true,
  )
);
```

would now be:
```dart
InAppWebViewSettings(
  useShouldOverrideUrlLoading: true,
  mediaPlaybackRequiresUserGesture: false,
  useHybridComposition: true,
  allowsInlineMediaPlayback: true,
);
```

## Deprecated classes/properties/methods

All the classes/properties/methods that starts with the platform name prefix,
such as `AndroidInAppWebViewController`, `AndroidServiceWorkerController`, `IOSCookieManager`, `androidOnPermissionRequest`, `iosOnNavigationResponse`, etc...
have been marked as `deprecated` in favor of the corresponding class/property/method without the platform name prefix.

For example `AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);`
would now be `InAppWebViewController.setWebContentsDebuggingEnabled(true);`,
`androidOnPermissionRequest` event would now be `onPermissionRequest` event, etc...

Check the code docs to know which class/property/method you should use now.

## Changelog

Check the [CHANGELOG](https://github.com/pichillilorenzo/flutter_inappwebview/blob/master/CHANGELOG.md) file to know all the BREAKING CHANGES.
