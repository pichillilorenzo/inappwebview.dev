import React from "react";
import {useState} from "react";
import styles from './index.module.css';
import {ShowcaseItem} from "@site/src/pages/showcase";

const initialShowcaseItem: ShowcaseItem = {
  appName: '',
  insertDate: '',
  icon: '',
  platforms: ['mobile'],
  shortDescription: '',
  screenshots: [],
  googlePlayStore: '',
  appleAppStore: '',
  sourceCode: '',
  website: '',
  longDescription: '',
  usedFor: '',
};

export default function SubmitAppForm(): JSX.Element {
  const [showcaseItem, setShowcaseItem] = useState(initialShowcaseItem);
  const [jsonCode, setJsonCode] = useState('');

  const generateJSONCode = (e) => {
    e.preventDefault();
    showcaseItem.appName = showcaseItem.appName.trim();
    showcaseItem.insertDate = new Date().toISOString();
    showcaseItem.shortDescription = showcaseItem.shortDescription.trim();
    showcaseItem.longDescription = showcaseItem.longDescription.trim();
    showcaseItem.icon = showcaseItem.icon.trim();
    showcaseItem.googlePlayStore = showcaseItem.googlePlayStore.trim();
    showcaseItem.appleAppStore = showcaseItem.appleAppStore.trim();
    showcaseItem.sourceCode = showcaseItem.sourceCode.trim();
    showcaseItem.website = showcaseItem.website.trim();
    showcaseItem.usedFor = showcaseItem.usedFor.trim();
    setJsonCode(JSON.stringify(showcaseItem, null, '\t'));
    return false;
  }

  const updatePlatform = (e) => {
    if (e.target.checked) {
      showcaseItem.platforms.push(e.target.value)
    } else {
      showcaseItem.platforms.splice(showcaseItem.platforms.indexOf(e.target.value), 1);
    }
    setShowcaseItem({...showcaseItem});
  }

  const updateScreenshots = (e) => {
    showcaseItem.screenshots = e.target.value.split("\n");
    showcaseItem.screenshots.splice(8);
    setShowcaseItem({...showcaseItem});
  }

  return (
    <div className="card">
      <div className="card__body">
        <form className={styles.submitAppForm} onSubmit={generateJSONCode}>
          <h4>Required Fields</h4>
          <div>
            <label htmlFor="application-name">Application Name *</label>
            <input type="text" id="application-name" required value={showcaseItem.appName}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, appName: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="application-name">Platforms *</label>
            <div>
              <div>
                <input type="checkbox" className="form-check-input flutter-app-platform" id="mobile"
                       value='mobile'
                       onChange={updatePlatform}
                       checked={showcaseItem.platforms.includes('mobile')}/>
                <label className="form-check-label" htmlFor="mobile">Mobile</label>
              </div>
              <div>
                <input type="checkbox" className="form-check-input flutter-app-platform" id="desktop"
                       value="desktop"
                       onChange={updatePlatform}
                       checked={showcaseItem.platforms.includes('desktop')}/>
                <label className="form-check-label" htmlFor="desktop">Desktop</label>
              </div>
              <div>
                <input type="checkbox" className="form-check-input flutter-app-platform" id="web"
                       value="web"
                       onChange={updatePlatform}
                       checked={showcaseItem.platforms.includes('web')}/>
                <label className="form-check-label" htmlFor="web">Web</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="short-description">Short Description (max 250 characters) *</label>
            <input type="text" id="short-description" maxLength={250} required
                   value={showcaseItem.shortDescription}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, shortDescription: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="long-description">Long Description *</label>
            <textarea id="long-description" rows={10} required
                      value={showcaseItem.longDescription}
                      onChange={e => setShowcaseItem(prevState => ({...prevState, longDescription: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="screenshots">Screenshots (1080x1920, max 8 images) *</label>
            <textarea id="screenshots" rows={4} aria-describedby="screenshots-help" placeholder="https://user-images.githubusercontent.com/...,
https://user-images.githubusercontent.com/...,
https://user-images.githubusercontent.com/..." required
                      onChange={updateScreenshots}/>
            <small id="screenshots-help" className="form-text text-muted">List of App Screenshot URLs separated by a
              comma.
              The first screenshot will be the main App Image.
              Each screenshot image MUST be 1080x1920 and it MUST be uploaded on Github's CDN.</small>
          </div>
          <div>
            <label htmlFor="used-for">For what the InAppWebView plugin is used? (max 250 characters) *</label>
            <input type="text" id="used-for"
                   placeholder="To create a Browser, WebRTC, To display local HTML content, ..."
                   aria-describedby="used-for-help" maxLength={250} required value={showcaseItem.usedFor}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, usedFor: e.target.value}))}/>
            <small id="used-for-help" className="form-text text-muted">Briefly explain here what the InAppWebView plugin
              is used
              for.</small>
          </div>
          <h4 className="margin-top--md">Optional Fields</h4>
          <div>
            <label htmlFor="url-app-icon">URL App Icon (300x300)</label>
            <input type="url" id="url-app-icon" aria-describedby="url-app-icon-help"
                   placeholder="https://user-images.githubusercontent.com/..." value={showcaseItem.icon}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, icon: e.target.value}))}/>
            <small id="url-app-icon-help" className="form-text text-muted">The App Icon image MUST be 300x300 and it
              MUST
              be
              uploaded on Github's CDN.</small>
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input type="url" id="website" placeholder="https://example.com"
                   value={showcaseItem.website}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, website: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="google-play-store">Google Play Store</label>
            <input type="url" id="google-play-store" placeholder="https://play.google.com/..."
                   value={showcaseItem.googlePlayStore}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, googlePlayStore: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="apple-app-store">Apple App Store</label>
            <input type="url" id="apple-app-store" placeholder="https://apps.apple.com/..."
                   value={showcaseItem.appleAppStore}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, appleAppStore: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor="source-code">Source Code</label>
            <input type="url" id="source-code" placeholder="https://github.com/..."
                   value={showcaseItem.sourceCode}
                   onChange={e => setShowcaseItem(prevState => ({...prevState, sourceCode: e.target.value}))}/>
          </div>
          <div className="margin-top--md">
            <button type="submit" className="button button--block button--primary">Generate JSON code</button>
          </div>
          <label htmlFor="json-code">JSON Code Generated:</label>
          <textarea id="json-code" rows={15} disabled value={jsonCode}/>
        </form>
        <div className="margin-top--md">
          <a className="button button--block button--link"
             target="_blank" href="https://github.com/pichillilorenzo/inappwebview.dev/pulls">Make Pull Request</a>
        </div>
      </div>
    </div>
  )
}
