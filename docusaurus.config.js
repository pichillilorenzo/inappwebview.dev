// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    experimental_faster: true,
  },

  title: 'InAppWebView',
  tagline: 'Flutter InAppWebView',
  url: 'https://inappwebview.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pichillilorenzo', // Usually your GitHub org/user name.
  projectName: 'flutter_inappwebview', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pichillilorenzo/inappwebview.dev/tree/main/',
          lastVersion: 'current',
          sidebarItemsGenerator: async ({defaultSidebarItemsGenerator, ...args}) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems;
          },
          versions: {
            current: {
              label: '6.x.x',
            },
            '5.x.x': {
              banner: 'none'
            }
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pichillilorenzo/inappwebview.dev/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-YKDBPM0BJ9',
          anonymizeIP: true,
        },
      })
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'webview, inappwebview, inappbrowser, flutter, chrome, safari, browser'}],
      algolia: {
        // The application ID provided by Algolia
        appId: 'MJATJYT1MX',
        // Public API key: it is safe to commit it
        apiKey: '1b4f2aea5c887ceeda4ed9fe83c426b1',
        indexName: 'inappwebview',
        contextualSearch: true,
        searchPagePath: 'search',
        debug: false
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Flutter InAppWebView Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://pub.dartlang.org/packages/flutter_inappwebview', label: 'Pub.dev', position: 'left'},
          {
            label: 'API Reference', position: 'left', items: [
              {to: 'https://pub.dev/documentation/flutter_inappwebview/latest/', label: '6.x.x'},
              {to: 'https://pub.dev/documentation/flutter_inappwebview/5.8.0/', label: '5.x.x'}
            ]
          },
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {to: '/donate', label: 'Donate', position: 'left', className: 'btn-donate'},
          {
            type: 'search',
            position: 'right'
          },
          {
            href: 'https://github.com/pichillilorenzo/flutter_inappwebview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Project Examples',
                href: '/docs/project-examples',
              },
              {
                label: 'Migration Guide from 5.x.x',
                to: '/docs/migration-guide',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Medium',
                to: 'https://medium.com/@pichillilorenzo',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/flutter-inappwebview?tab=Newest',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Privacy Policy',
                to: 'https://www.iubenda.com/privacy-policy/83191229',
              },
              {
                label: 'Cookie Policy',
                to: 'https://www.iubenda.com/privacy-policy/83191229/cookie-policy',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pichillilorenzo/flutter_inappwebview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flutter InAppWebView, Inc. Built with Docusaurus.<br />
        Flutter and the related logo are trademarks of Google LLC. We are not endorsed by or affiliated with Google LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart']
      },
    }),
  // themes: [
  //   [
  //     // @ts-ignore
  //     "@easyops-cn/docusaurus-search-local",
  //     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     // @ts-ignore
  //     ({
  //       hashed: true,
  //       language: ["en"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //     }),
  //   ],
  // ],
};

module.exports = config;
