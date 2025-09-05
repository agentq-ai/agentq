const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'AgentQ',
  tagline: 'AI-Powered Test Case Management',
  url: 'https://agentq-ai.github.io',
  baseUrl: '/agentq/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'agentq-ai',
  projectName: 'agentq',

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-JVSJ3Q22KF',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/agentq-ai/agentq/edit/main/', // Replace with your repo URL
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/agentq-ai/agentq/edit/main/blog/', // Replace with your repo URL
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  // Add custom scripts
  scripts: [
    {
      src: '/agentq/js/ios-fix.js',
      defer: true,
    },
    {
      src: '/agentq/js/workflow-slider.js',
      defer: true,
    },
  ],

  scripts: [
    {
      src: '/agentq/js/ios-fix.js',
      defer: true,
    },
    {
      src: '/agentq/js/workflow-slider.js',
      defer: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // Or true if you want to disable it
        respectPrefersColorScheme: false, // If you want to respect system preference
      },
      navbar: {
        title: '',
        hideOnScroll: false,
        logo: {
          alt: 'AgentQ Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },
          {
            href: 'https://github.com/agentq-ai/agentq',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Sign In',
            position: 'right',
            to: 'https://agentq.id/login',
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
                label: 'Installation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'support@agentq.id',
                href: 'mailto:support@agentq.id',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/agentq-ai/agentq',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/6dArs9tpfm',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                to: '/terms',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PT QUALITY AGENT TECHNOLOGIES - AgentQ.`, // Update copyright
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
});