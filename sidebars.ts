import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    'intro',
    'authentication',
    {
      type: 'category',
      label: 'API Health',
      items: [
        'api/health/index',
      ],
    },
    {
      type: 'category',
      label: 'Self',
      items: [
        'api/self/index',
        'api/self/who-am-i',
        'api/self/refresh',
      ],
    },
  ],
};

export default sidebars;
