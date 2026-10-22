// This runs in Node.js. Don't use client-side code here (browser APIs, JSX...).

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RN Storage Kit',
  tagline: 'One storage API for React Native: MMKV, Keychain and a production-safe logger',

  url: 'https://88khp.github.io',
  baseUrl: '/rn-storage-kit/',

  organizationName: '88khp',
  projectName: 'rn-storage-kit',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/88khp/rn-storage-kit/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RN Storage Kit',
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {href: 'https://github.com/88khp/rn-storage-kit', label: 'GitHub', position: 'right'},
        {href: 'https://www.npmjs.com/package/@88khp/rn-storage-kit', label: 'npm', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 88khp · @88khp/rn-storage-kit. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'tsx'],
    },
  },
};

module.exports = config;
