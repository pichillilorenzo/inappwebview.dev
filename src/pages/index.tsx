import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures/index';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
        <img src="/img/larger-logo.svg" alt={siteConfig.title + ' - ' + siteConfig.tagline}/>
        <p className="hero__subtitle">
          Flutter plugin that allows you to incorporate <strong>WebView widgets</strong> into your Flutter app,<br />
          to use <strong>headless WebViews</strong>, or to use <strong>In-App browsers</strong>.
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="What is flutter_inappwebview? It’s a Flutter plugin that allows you to incorporate WebView widgets into your Flutter app, to use headless WebViews, or to use In-App browsers.">
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
