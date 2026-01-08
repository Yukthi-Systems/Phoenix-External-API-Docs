import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    'intro',
    'permissions',
    'authentication',
    {
      type: 'category',
      label: 'Health Checks',
      items: [
        'api/health/index',
      ],
    },
    {
      type: 'category',
      label: 'Self API Checks',
      items: [
        'api/self-checks/index',
        'api/self-checks/clear-cache',
      ],
    },

  ],
};

export default sidebars;
