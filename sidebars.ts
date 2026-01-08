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
    {
      type: 'category',
      label: 'Domain Management',
      items: [
        'api/domains/index',
      ],
    },
    {
      type: 'category',
      label: 'Mailbox Management',
      items: [
        'api/mailboxes/index',
      ],
    },
    {
      type: 'category',
      label: 'Caution Management',
      items: [
        'api/cautions/index',
      ],
    },
    {
      type: 'category',
      label: 'Disclaimer Management',
      items: [
        'api/disclaimers/index',
      ],
    },
    {
      type: 'category',
      label: 'Department Management',
      items: [
        'api/departments/index',
      ],
    },
    {
      type: 'category',
      label: 'Filter Policy',
      items: [
        'api/filter-policies/index',
      ],
    },
    {
      type: 'category',
      label: 'General Policy',
      items: [
        'api/general-policies/index',
      ],
    },
    {
      type: 'category',
      label: 'Attachment Policy',
      items: [
        'api/attachment-policies/index',
      ],
    },
    {
      type: 'category',
      label: 'Restriction Policy',
      items: [
        'api/restriction-policies/index',
      ],
    },
    {
      type: 'category',
      label: 'Forwarding Policy',
      items: [
        'api/forwarding-policies/index',
      ],
    },
    {
      type: 'category',
      label: 'Distribution Policy',
      items: [
        'api/distribution-policies/index',
      ],
    },
  ],
};

export default sidebars;
