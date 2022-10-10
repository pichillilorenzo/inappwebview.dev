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
      <>
        <p>Adding the <code>InAppWebView</code> widget into your app is very simple.
          It’s just a widget like any other Flutter widget:
          <pre><code>InAppWebView(initialUrlRequest: <br/>&nbsp;&nbsp;URLRequest(url: Uri.parse(<span
            style={{color: 'rgb(215, 58, 73)'}}>"https://flutter.dev"</span>))<br/>)</code></pre>
        </p>
        <p>You can listen to a lot of events and use the <code>InAppWebViewController</code> to control
          your <code>InAppWebView</code> instances!</p>
      </>
    ),
  },
  {
    title: 'Open An In-App Browser',
    img: '/img/in_app_browser.png',
    description: (
      <>
        <p>Use <code>InAppBrowser</code> or <code>ChromeSafariBrowser</code> to open an in-app
          browser! <code>ChromeSafariBrowser</code> is based on <a target="_blank" rel="noopener"
                                                                   href="https://developer.android.com/reference/android/support/customtabs/package-summary">Chrome
            Custom Tabs</a> on Android and on <a target="_blank" rel="noopener"
                                                 href="https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller">SFSafariViewController</a> on
          iOS.</p>
        <p>Create a Class that extends the <code>InAppBrowser</code>/<code>ChromeSafariBrowser</code> Class in order to
          override the callbacks to manage the browser events.</p>
      </>
    ),
  },
  {
    title: 'Use Headless WebViews',
    img: '/img/headless_webview.png',
    description: (
      <>
        <p>It can be used to run a WebView in background without attaching an <code>InAppWebView</code> to the widget
          tree.</p>
        <p>As <code>InAppWebView</code>, it has the same options and events. Use <code>InAppWebViewController</code> to
          control the <strong>headless WebView</strong> instance.</p>
      </>
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
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('text--center', styles.badgeContainer)}>
          <p><a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview#contributors-"
                rel="nofollow"><img className={styles.badge}
                                    src="https://camo.githubusercontent.com/f647464913e3384aa2615f74215f79c573200eea549194e265ff247866de8c03/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616c6c5f636f6e7472696275746f72732d35332d6f72616e67652e7376673f7374796c653d666c61742d737175617265"
                                    alt="All Contributors"
                                    data-canonical-src="https://img.shields.io/badge/all_contributors-53-orange.svg?style=flat-square"/></a>
          </p>
          <p><a target="_blank" href="https://pub.dartlang.org/packages/flutter_inappwebview" rel="nofollow"><img
            className={styles.badge}
            src="https://camo.githubusercontent.com/d400bf31124a59a6bc6bea08f0ff4c56343bd94295fd8160dee80eefb98daedb/68747470733a2f2f696d672e736869656c64732e696f2f7075622f762f666c75747465725f696e617070776562766965773f696e636c7564655f70726572656c6561736573"
            alt="Pub" data-canonical-src="https://img.shields.io/pub/v/flutter_inappwebview?include_prereleases"/></a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/bf22d820358b3c04b6b6d82b49159872b455d651f3e89d4e1cc64e555ff67686/68747470733a2f2f696d672e736869656c64732e696f2f7075622f706f696e74732f666c75747465725f696e61707077656276696577"
              alt="Pub Points"
              data-canonical-src="https://img.shields.io/pub/points/flutter_inappwebview"/></a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/affc517dc181151c8a134717079da58702a0b840ea363f68040d2c1d378c12c5/68747470733a2f2f696d672e736869656c64732e696f2f7075622f706f70756c61726974792f666c75747465725f696e61707077656276696577"
              alt="Pub Popularity"
              data-canonical-src="https://img.shields.io/pub/popularity/flutter_inappwebview"/></a>
            <a target="_blank" href="https://pub.dev/packages/flutter_inappwebview/score" rel="nofollow"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/e6ca13227178cf90435c9577f97811d61546a418e51e1942c6e62fc2694be63e/68747470733a2f2f696d672e736869656c64732e696f2f7075622f6c696b65732f666c75747465725f696e61707077656276696577"
              alt="Pub Likes"
              data-canonical-src="https://img.shields.io/pub/likes/flutter_inappwebview"/></a>
            <a target="_blank" href="https://stackoverflow.com/questions/tagged/flutter-inappwebview"
               rel="nofollow"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/503db17bcdc3d8ef4b44436324a4c03d2f00fa9b606b4c23b98761b80f8033f5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f417765736f6d652d466c75747465722d626c75652e7376673f6c6f6e6743616368653d74727565267374796c653d666c61742d737175617265"
              alt="Awesome Flutter"
              data-canonical-src="https://img.shields.io/badge/Awesome-Flutter-blue.svg?longCache=true&amp;style=flat-square"/></a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview/blob/master/LICENSE"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/2a2157c971b7ae1deb8eb095799440551c33dcf61ea3d965d86b496a5a65df55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d417061636865253230322e302d626c75652e737667"
              alt="License"
              data-canonical-src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/></a>
          </p>
          <p><a target="_blank" href="https://inappwebview.dev/donate/" rel="nofollow"><img className={styles.badge}
                                                                                            src="https://camo.githubusercontent.com/3698fccdc6d71d39e2731b65396bbe499a2e09e8b9812a8b05f5513fb7338204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737570706f72742d646f6e6174652d79656c6c6f772e737667"
                                                                                            alt="Donate to this project"
                                                                                            data-canonical-src="https://img.shields.io/badge/support-donate-yellow.svg"/></a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/4b8163d72f47d0672c703c8b2e86f37a8ca504508b692382f19f4a00e01fce5d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f666f726b732f70696368696c6c696c6f72656e7a6f2f666c75747465725f696e617070776562766965773f7374796c653d736f6369616c"
              alt="GitHub forks"
              data-canonical-src="https://img.shields.io/github/forks/pichillilorenzo/flutter_inappwebview?style=social"/></a>
            <a target="_blank" href="https://github.com/pichillilorenzo/flutter_inappwebview"><img
              className={styles.badge}
              src="https://camo.githubusercontent.com/29ae980ffe8f7342855db88c82cc8ad129db1974b71b91c1629b13139e4cd09f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f70696368696c6c696c6f72656e7a6f2f666c75747465725f696e617070776562766965773f7374796c653d736f6369616c"
              alt="GitHub stars"
              data-canonical-src="https://img.shields.io/github/stars/pichillilorenzo/flutter_inappwebview?style=social"/></a>
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
