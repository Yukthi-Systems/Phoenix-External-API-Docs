import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    'intro',
    'authentication',
    {
      type: 'category',
      label: 'API Endpoints',
      items: [
        'api/health',
        'api/self-checks',
        'api/domains',
        'api/cautions',
        'api/disclaimers',
        'api/departments',
      ],
    },
    'api/errors',
  ],
};

export default sidebars;