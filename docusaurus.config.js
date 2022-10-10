// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
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
      // algolia: {
      //   searchPagePath: true,
      //   appId: '',
      //   apiKey: ''
      // },
      navbar: {
        title: '',
        logo: {
          alt: 'Flutter InAppWebView Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          // },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://pub.dartlang.org/packages/flutter_inappwebview', label: 'Pub.dev', position: 'left'},
          {to: 'https://pub.dev/documentation/flutter_inappwebview/latest/', label: 'API Reference', position: 'left'},
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {to: '/donate', label: 'Donate', position: 'left'},
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/flutter-inappwebview?tab=Newest',
              },
              {
                label: 'Medium',
                to: 'https://medium.com/@pichillilorenzo',
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
};

module.exports = config;
