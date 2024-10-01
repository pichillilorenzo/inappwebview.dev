import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'WebView integrated into the widget tree',
    img: '/img/webview_integrated.png',
    description: (
      <div>
        <p>Adding the <code>InAppWebView</code> widget into your app is very simple.
          It’s just a widget like any other Flutter widget:
        </p>
        <pre><code>InAppWebView(initialUrlRequest: <br/>&nbsp;&nbsp;URLRequest(url: WebUri(<span
          style={{color: 'rgb(215, 58, 73)'}}>"https://flutter.dev"</span>))<br/>)</code></pre>
        <p>You can listen to a lot of events and use the <code>InAppWebViewController</code> to control
          your <code>InAppWebView</code> instances!</p>
      </div>
    ),
  },
  {
    title: 'Open An In-App Browser',
    img: '/img/in_app_browser.png',
    description: (
      <div>
        <p>Use <code>InAppBrowser</code> or <code>ChromeSafariBrowser</code> to open an in-app
          browser! <code>ChromeSafariBrowser</code> is based on <a target="_blank" rel="noopener"
                                                                   href="https://developer.android.com/reference/android/support/customtabs/package-summary">Chrome
            Custom Tabs</a> on Android and on <a target="_blank" rel="noopener"
                                                 href="https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller">SFSafariViewController</a> on
          iOS.</p>
        <p>Create a Class that extends the <code>InAppBrowser</code>/<code>ChromeSafariBrowser</code> Class in order to
          override the callbacks to manage the browser events.</p>
      </div>
    ),
  },
  {
    title: 'Use Headless WebViews',
    img: '/img/headless_webview.png',
    description: (
      <div>
        <p>It can be used to run a WebView in background without attaching an <code>InAppWebView</code> to the widget
          tree.</p>
        <p>As <code>InAppWebView</code>, it has the same options and events. Use <code>InAppWebViewController</code> to
          control the <strong>headless WebView</strong> instance.</p>
      </div>
    ),
  }
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={img} role="img"/>
      </div>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('text--center', styles.badgeContainer)}>
          <p>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview#contributors-"
               rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/badge/all_contributors-specification-brightgreen.svg"
                   alt="All Contributors"/>
            </a>
          </p>
          <p>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview" rel="nofollow">
              <img className={styles.badge} src="https://img.shields.io/pub/v/flutter_inappwebview?include_prereleases"
                   alt="flutter_inappwebview version"/>
            </a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow">
              <img className={styles.badge} src="https://img.shields.io/pub/points/flutter_inappwebview"
                   alt="Pub Points"/>
            </a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow">
              <img className={styles.badge} src="https://img.shields.io/pub/popularity/flutter_inappwebview"
                   alt="Pub Popularity"/>
            </a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow">
              <img className={styles.badge} src="https://img.shields.io/pub/likes/flutter_inappwebview"
                   alt="Pub Likes"/>
            </a>
            <a target="_blank" href="https://stackoverflow.com/questions/tagged/flutter-inappwebview"
               rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/badge/Awesome-Flutter-blue.svg?longCache=true&amp;style=flat-square"
                   alt="Awesome Flutter"/>
            </a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview/blob/master/LICENSE"><img
                className={styles.badge} src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"
                alt="License"/>
            </a>
          </p>
          <p><a target="_blank" href="https://inappwebview.dev/donate/" rel="nofollow">
            <img className={styles.badge} src="https://img.shields.io/badge/support-donate-yellow.svg"
                 alt="Donate to this project"/>
          </a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview">
              <img className={styles.badge}
                   src="https://img.shields.io/github/forks/pichillilorenzo/flutter_inappwebview?style=social"
                   alt="GitHub forks"/>
            </a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview">
              <img className={styles.badge}
                   src="https://img.shields.io/github/stars/pichillilorenzo/flutter_inappwebview?style=social"
                   alt="GitHub stars"/>
            </a>
          </p>
          <p>
            <strong className={"margin-bottom--sm"} style={{'display': 'block'}}>Supported Platforms</strong>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_platform_interface" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_platform_interface?include_prereleases&label=Platform Interface"
                   alt="flutter_inappwebview_platform_interface version"/>
            </a>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_android" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_android?include_prereleases&label=Android"
                   alt="flutter_inappwebview_android version"/>
            </a>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_ios" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_ios?include_prereleases&label=iOS"
                   alt="flutter_inappwebview_ios version"/>
            </a>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_macos" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_macos?include_prereleases&label=macOS"
                   alt="flutter_inappwebview_macos version"/>
            </a>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_windows" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_windows?include_prereleases&label=Windows"
                   alt="flutter_inappwebview_windows version"/>
            </a>
            <a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview_web" rel="nofollow">
              <img className={styles.badge}
                   src="https://img.shields.io/pub/v/flutter_inappwebview_web?include_prereleases&label=Web"
                   alt="flutter_inappwebview_web version"/>
            </a>
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
