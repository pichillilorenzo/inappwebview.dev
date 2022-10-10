import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
// @ts-ignore
import showcaseDataJSON from '../showcase-data.json';
import {ShowcaseItem} from "@site/src/pages/showcase";

function ShowcaseItemInfo(item: ShowcaseItem) {
  return (
    <div className={clsx('row', styles.showcaseItemContainer)}>
      <div className="col col--3">
        <img
          className={styles.appScreenshot}
          src={item.screenshots[0]}
          alt={item.appName}
          title={item.appName}/>
      </div>
      <div className="col col--9">
        <div className={styles.appHeader}>
          <img
            className={clsx("margin-right--md", styles.appIcon)}
            src={item.icon} alt={item.appName}
            title={item.appName}/>
          <h2 className={clsx("margin-right--md", styles.appName)}>{item.appName}</h2>
          {item.website && <a className="button button--primary" target="_blank" rel="noopener noreferrer"
                              href={item.website}>Website</a>}
        </div>
        <p className="margin-top--md">
          {item.shortDescription}
        </p>
        <div>
          <a href={item.googlePlayStore} target="_blank" rel="noopener noreferrer"
             className={clsx('margin-right--md', !item.googlePlayStore ? styles.appStoreLinkDisabled : '', styles.appStoreLink)}>
            <img src="/img/google-play-store.png" alt={`${item.appName} google play store link`}/>
          </a>
          <a href={item.appleAppStore} target="_blank" rel="noopener noreferrer"
             className={clsx(!item.appleAppStore.trim() ? styles.appStoreLinkDisabled : '', styles.appStoreLink)}>
            <img src="/img/apple-store.png" alt={`${item.appName} apple app store link`}/>
          </a>
        </div>
        {item.sourceCode && <p className="margin-top--sm">
          <strong>Source Code</strong>: <a href={item.sourceCode} target="_blank"
                                           rel="noopener noreferrer">{item.sourceCode}</a>
        </p>}
        <p>
          <strong>For what the InAppWebView plugin is used</strong>?<br/>
          {item.usedFor}
        </p>
        <div>
          <strong>Share on</strong>:
          <a className="button button--link" style={{color: "#3b5998"}}
             role="button"
             href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
             target="_blank" rel="noopener">Facebook</a><a style={{color: "#55acee"}} role="button"
                                                           className="button button--link"
                                                           href={`https://twitter.com/intent/tweet/?text=${item.appName} is using Flutter InAppWebView&amp;url=${window.location.href}`}
                                                           target="_blank" rel="noopener">Twitter</a><a
          style={{color: "#dd4b39"}} role="button"
          className="button button--link"
          href={`mailto:?subject=${item.appName} is using Flutter InAppWebView&amp;body=${window.location.href}`}
          target="_self" rel="noopener">Mail</a><a style={{color: "#25d366"}} role="button"
                                                   className="button button--link"
                                                   href={`whatsapp://send?text=${item.appName} is using Flutter InAppWebView%20${window.location.href}`}
                                                   target="_blank" rel="noopener">Whatsapp</a><a
          style={{color: "#54a9eb"}} role="button"
          className="button button--link"
          href={`https://telegram.me/share/url?text=${item.appName} is using Flutter InAppWebView&amp;url=${window.location.href}`}
          target="_blank" rel="noopener">Telegram</a></div>
      </div>
      <h3 className="margin-top--md">App Description</h3>
      <p dangerouslySetInnerHTML={{__html: item.longDescription.replace(/\n/g, "<br />")}}/>
      {item.screenshots.length > 0 && <div className="row">
        {item.screenshots.map((url, idx) => (
          <div key={idx} className="col col--3">
            <img className={styles.appScreenshot} src={url} alt={`${item.appName} screenshot ${idx + 1}`}/>
          </div>
        ))}
      </div>}
    </div>
  );
}

const appName = new URLSearchParams(window.location.search).get('appName')?.trim();
if (appName == null) {
  window.history.back();
}
const flutterApp: ShowcaseItem | null = (showcaseDataJSON as ShowcaseItem[]).find(item => item.appName === appName);
if (flutterApp == null) {
  window.history.back();
}

export default function FlutterAppPage(): JSX.Element {
  if (!flutterApp) {
    return null;
  }

  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${flutterApp.appName} - Showcase`}
      description={`${flutterApp.appName} - ${flutterApp.shortDescription}`}>
      <main className={'container'}>
        <ShowcaseItemInfo {...flutterApp}/>
      </main>
    </Layout>
  );
}
