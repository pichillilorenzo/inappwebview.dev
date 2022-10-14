---
sidebar_position: 9
date: 2021-03-08 10:48:00
---

# WebRTC

To work with WebRTC, you need to request `camera` and `microphone` permissions, for example using the [permission_handler](https://pub.dev/packages/permission_handler) plugin:
```dart
import 'package:permission_handler/permission_handler.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Permission.camera.request();
  await Permission.microphone.request();

  runApp(MyApp());
}
```
Also, you need to set the cross-platform option `mediaPlaybackRequiresUserGesture` to `false` in order to autoplay HTML5 audio and video.

After that, follow the instructions below for each platform where you want to use it.

To test WebRTC, you can try to visit the [PubNub WebRTC Demo](https://www.pubnub.com/developers/demos/webrtc/launch/).

## WebRTC on Android

On Android, you need to implement the `androidOnPermissionRequest` event, that is an event fired when the WebView is requesting permission to access a specific resource.
This event is used to grant permissions for the WebRTC API, for example:
```dart
androidOnPermissionRequest: (controller, origin, resources) async {
  return PermissionRequestResponse(resources: resources, action: PermissionRequestResponseAction.GRANT);
}
```

Also, you need to add these permissions in your `AndroidManifest.xml` file:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.VIDEO_CAPTURE" />
<uses-permission android:name="android.permission.AUDIO_CAPTURE" />
```

## WebRTC on iOS

:::info
WebRTC is available starting from iOS 14.3+.
:::

You need to set the iOS-specific option `allowsInlineMediaPlayback` to `true`, for example:
```dart
initialOptions: InAppWebViewGroupOptions(
  crossPlatform: InAppWebViewOptions(
    mediaPlaybackRequiresUserGesture: false,
  ),
  android: AndroidInAppWebViewOptions(
    useHybridComposition: true
  ),
  ios: IOSInAppWebViewOptions(
    allowsInlineMediaPlayback: true,
  )
),
```
Note that on iOS, to be able to play video inline, the `video` HTML element must have the `playsinline` attribute, for example:
```html
<video autoplay playsinline src="..."></video>
```
In your `Info.plist` file, you need to add also the following properties:
```xml
<key>NSMicrophoneUsageDescription</key>
<string>Flutter requires access to microphone.</string>

<key>NSCameraUsageDescription</key>
<string>Flutter requires access to camera.</string>
```
If you open this file In Xcode, the `NSMicrophoneUsageDescription` property is represented by `Privacy - Microphone Usage Description` and
`NSCameraUsageDescription` is represented by `Privacy - Camera Usage Description`.
