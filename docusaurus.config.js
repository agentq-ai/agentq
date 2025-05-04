const lightCodeTheme = require('prism-react-renderer/themes/github');

// Determine if we're running on GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'AgentQ',
  tagline: 'AI-Powered Test Case Management',
  // Set the production URL based on the environment
  url: isGitHubPages ? 'https://agentq-ai.github.io' : 'https://agentq.id',
  // Set the baseUrl based on the environment
  baseUrl: isGitHubPages ? '/agentq/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'agentq-ai',
  projectName: 'agentq',

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
      // Use the correct path based on the environment
      src: isGitHubPages ? '/agentq/js/ios-fix.js' : '/js/ios-fix.js',
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
            href: 'https://discord.gg/5Kn7T8QP',
            label: 'Discord',
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
                href: 'mailto:support@agentq.id', // Replace with your repo URL
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/agentq-ai/agentq', // Replace with your repo URL
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5Kn7T8QP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AgentQ.`, // Update copyright
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
});