// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ppjs',
  tagline:
    'Open-source Javascript library',
  url: 'https://billionairedy.github.io/',
  baseUrl: '/ppjs/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/server-map-logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'ppjs',
  organizationName: 'BillionaireDY',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'servermap',
        path: 'servermap',
        routeBasePath: 'servermap',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'scatterchart',
        path: 'scatterchart',
        routeBasePath: 'scatterchart',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ppjs',
        logo: {
          alt: 'pinpoint logo',
          src: 'img/server-map-logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'introduction',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            // type: 'docSidebar',
            // sidebarId: 'servermap',
            to: '/servermap/introduction',
            activeBaseRegex: `/servermap/`,
            position: 'left',
            label: 'SERVERMAP',
          },
          {
            // type: 'docSidebar',
            // sidebarId: 'scatterchart',
            to: '/scatterchart/introduction',
            activeBaseRegex: `/scatterchart/`,
            position: 'left',
            label: 'SCATTERCHART',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/pinpoint-apm/pinpoint/blob/frontend-v3/web/src/main/web-frontend/packages/server-map/README.md',
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
                label: 'Docs',
                to: 'docs/introduction',
              },
            ],
          },
          {
            title: 'Demo',
            items: [
              {
                label: 'Examples',
                href: '/examples',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pinpoint-apm/pinpoint/blob/frontend-v3/web/src/main/web-frontend/packages/server-map/README.md',
              },
              {
                label: 'Issues',
                href: 'https://github.com/pinpoint-apm/pinpoint/issues',
              },
              {
                label: 'Naver Open Source',
                href: 'https://naver.github.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NAVER, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
