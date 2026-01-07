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
        'api/health/check_api_health',
      ],
    },
    // 'api/errors',
  ],
};

export default sidebars;
