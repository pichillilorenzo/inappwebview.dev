import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
// @ts-ignore
import showcaseDataJSON from './showcase-data.json';

const showcaseData = showcaseDataJSON.sort((a: ShowcaseItem, b: ShowcaseItem) => {
  // @ts-ignore
  return new Date(b.insertDate) - new Date(a.insertDate);
});

interface SearchForm {
  text: string;
  openSource: boolean;
}

export interface ShowcaseItem {
  appName: string;
  insertDate: string;
  icon: string;
  platforms: ('mobile' | 'desktop' | 'web')[],
  shortDescription: string;
  screenshots: string[],
  googlePlayStore?: string;
  appleAppStore?: string;
  sourceCode?: string;
  website?: string;
  longDescription: string;
  usedFor: string;
}

function ShowcasePageHeader() {
  return (
    <header className={'hero hero--primary'}>
      <div className="container text--center">
        <h1 className={'hero__title'}>An open list of apps built with Flutter InAppWebView</h1>
        <a className="button button--primary" href="/submit-app">
          Submit App
        </a>
      </div>
    </header>
  );
}

function SearchBar({
                     search,
                     setSearchForm
                   }: { search: SearchForm, setSearchForm: React.Dispatch<React.SetStateAction<SearchForm>> }) {
  const handleTextChange = event => {
    setSearchForm(prevState => ({
      ...prevState,
      text: event.target.value
    }));
  };
  const handleOpenSourceChange = event => {
    setSearchForm(prevState => ({
      ...prevState,
      openSource: event.target.checked
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__items">
          <div className={clsx("navbar__search", styles.navbarSearch)}>
            <input className="navbar__search-input" placeholder="Search" value={search.text}
                   onChange={handleTextChange}/>
          </div>
          <div>
            <label htmlFor="open-source">Open Source</label>
            <input id={"open-source"} type={"checkbox"} checked={search.openSource} onChange={handleOpenSourceChange}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ShowcaseItemInfo(item: ShowcaseItem) {
  return (
    <div className={styles.showcaseItem}>
      <div className="card">
        <a href={"/showcase/flutter-app?appName=" + item.appName} className={styles.flutterAppLink}>
          <div className="card__header">

            <div className="avatar">
              <img
                className={clsx("avatar__photo", styles.appIcon)}
                src={item.icon} alt={item.appName}
                title={item.appName}/>
              <div className={clsx("avatar__intro", styles.appInfoContainer)}>
                <h3 className={clsx("avatar__name", styles.appName)} title={item.appName}>{item.appName}</h3>
                <small className={clsx("avatar__subtitle", styles.appShortDesc)} title={item.shortDescription}>
                  {item.shortDescription}
                </small>
              </div>
            </div>
          </div>
          <div className="card__image">
            <img
              src={item.screenshots[0]}
              alt={item.appName}
              title={item.appName}/>

          </div>

        </a>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {item.googlePlayStore && <a href={item.googlePlayStore} target="_blank" rel="noopener noreferrer"
                                        className={clsx("button button--link", styles.appStoreLink)}>
              Google Play
            </a>}
            {item.appleAppStore &&
              <a href={item.appleAppStore} target="_blank" rel="noopener noreferrer"
                 className={clsx("button button--link", styles.appStoreLink)}>
                Apple Store
              </a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseItems({showcaseData}: { showcaseData: ShowcaseItem[] }) {
  return (
    <section className={styles.showcaseItemContainer}>
      <div className="container">
        <div className="row">
          {showcaseData.map((props, idx) => (
            <div key={idx} className={"col col--3"}>
              <ShowcaseItemInfo key={idx} {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const initialSearchForm: SearchForm = {
  text: '',
  openSource: false
}

export default function ShowcasePage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [search, setSearchForm] = useState(initialSearchForm);
  const [searchResults, setSearchResults] = React.useState([] as ShowcaseItem[]);

  useEffect(() => {
    const results = searchFlutterApps(search);
    setSearchResults(results);
  }, [search]);

  return (
    <Layout
      title={`Showcase`}
      description="InAppWebView Showcase">
      <ShowcasePageHeader/>
      <main className={'container'}>
        <SearchBar search={search} setSearchForm={setSearchForm}/>
        <ShowcaseItems showcaseData={searchResults}/>
      </main>
    </Layout>
  );
}

function searchFlutterApps(searchForm: SearchForm) {
  const text = searchForm.text.trim().toLowerCase();
  const weightedTests = [
    {
      test: function (testElement: ShowcaseItem) {
        const appName = testElement.appName.toLowerCase();
        return (appName.indexOf(text) >= 0 ? 1 : 0) * appName.split(text).length;
      }, weight: 5
    },
    {
      test: function (testElement: ShowcaseItem) {
        const longDescription = testElement.longDescription.toLowerCase();
        return (longDescription.indexOf(text) >= 0 ? 1 : 0) * longDescription.split(text).length;
      }, weight: 2
    }
  ];
  const searchSlitted = text.split(' ');
  if (searchSlitted.length > 1) {
    for (const s of searchSlitted) {
      if (s.length > 1) {
        weightedTests.push({
          test: function (testElement) {
            return testElement.appName.toLowerCase().indexOf(s) >= 0 ? 1 : 0;
          }, weight: 0.5
        });
        weightedTests.push({
          test: function (testElement) {
            return testElement.longDescription.toLowerCase().indexOf(s) >= 0 ? 1 : 0;
          }, weight: 0.2
        });
      }
    }
  }

  let results = weightedSearch(showcaseData, weightedTests, "insertDate") as ShowcaseItem[];
  if (searchForm.openSource) {
    results = results.filter(item => item.sourceCode != null && item.sourceCode !== '');
  }
  return results;
}

function weightedSearch(array, weightedTests, sortProperty) {
  return array.map(function (e) {
    return {
      element: e, weight: weightedTests.map(function (weightedTest) {
        const testResult = weightedTest.test(e);
        return testResult * weightedTest.weight;
      }).reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0)
    };
  }).filter(function (element) {
    return element.weight > 0;
  }).sort(function (obj1, obj2) {
    //sort first by weight
    if (obj1.weight > obj2.weight) {
      return -1;
    } else if (obj1.weight < obj2.weight) {
      return 1;
    }

    // Else by chosen property
    if (obj1.element[sortProperty] < obj2.element[sortProperty]) {
      return -1;
    } else if (obj1.element[sortProperty] > obj2.element[sortProperty]) {
      return 1;
    } else {
      return 0;
    }
  }).map(function (e) {
    return e.element;
  });
}
