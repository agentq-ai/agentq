/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Free Version',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Installation'
        },
        {
          type: 'doc',
          id: 'api-key-and-plan-management',
          label: 'API Key & Plan Upgrade'
        },
        {
          type: 'doc',
          id: 'manual-test-case-creation',
          label: 'Manual Test Case'
        },
        {
          type: 'doc',
          id: 'ai-test-case-creation',
          label: 'AI Test Case Creation'
        }
      ]
    },
    {
      type: 'category',
      label: 'Enterprise (All in Free +)',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'no-code-automation-testing',
          label: 'No Code Automation'
        },
        {
          type: 'doc',
          id: 'security-testing',
          label: 'Security Testing'
        }
      ]
    },
    {
      type: 'doc',
      id: 'versions-and-pricing',
      label: 'Version Comparison'
    },
    {
      type: 'doc',
      id: 'release-note',
      label: 'Release Notes'
    }
  ]
};
