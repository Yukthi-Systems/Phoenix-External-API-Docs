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
        'api/self-checks/whoami',
        'api/self-checks/clear-cache',
      ],
    },
    {
      type: 'category',
      label: 'Domain Management',
      items: [
        'api/domains/index',
        'api/domains/list',
        'api/domains/count',
        'api/domains/detail',
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
        'api/cautions/list',
        'api/cautions/count',
        'api/cautions/detail',
        'api/cautions/create',
        'api/cautions/update',
        'api/cautions/delete',
      ],
    },
    {
      type: 'category',
      label: 'Disclaimer Management',
      items: [
        'api/disclaimers/index',
        'api/disclaimers/list',
        'api/disclaimers/count',
        'api/disclaimers/detail',
        'api/disclaimers/create',
        'api/disclaimers/update',
        'api/disclaimers/delete',
      ],
    },
    {
      type: 'category',
      label: 'Department Management',
      items: [
        'api/departments/index',
        'api/departments/list',
        'api/departments/count',
        'api/departments/detail',
        'api/departments/create',
        'api/departments/update',
        'api/departments/delete',
      ],
    },
    {
      type: 'category',
      label: 'Filter Policy',
      items: [
        'api/filter-policies/index',
        'api/filter-policies/list',
        'api/filter-policies/count',
        'api/filter-policies/detail',
        'api/filter-policies/create',
        'api/filter-policies/update',
        'api/filter-policies/delete',
      ],
    },
    {
      type: 'category',
      label: 'General Policy',
      items: [
        'api/general-policies/index',
        'api/general-policies/list',
        'api/general-policies/count',
        'api/general-policies/detail',
        'api/general-policies/create',
        'api/general-policies/update',
        'api/general-policies/delete',
      ],
    },
    {
      type: 'category',
      label: 'Attachment Policy',
      items: [
        'api/attachment-policies/index',
        'api/attachment-policies/list',
        'api/attachment-policies/count',
        'api/attachment-policies/detail',
        'api/attachment-policies/create',
        'api/attachment-policies/update',
        'api/attachment-policies/delete',
      ],
    },
    {
      type: 'category',
      label: 'Restriction Policy',
      items: [
        'api/restriction-policies/index',
        'api/restriction-policies/list',
        'api/restriction-policies/count',
        'api/restriction-policies/detail',
        'api/restriction-policies/create',
        'api/restriction-policies/update',
        'api/restriction-policies/delete',
      ],
    },
    {
      type: 'category',
      label: 'Forwarding Policy',
      items: [
        'api/forwarding-policies/index',
        'api/forwarding-policies/list',
        'api/forwarding-policies/count',
        'api/forwarding-policies/detail',
        'api/forwarding-policies/create',
        'api/forwarding-policies/update',
        'api/forwarding-policies/delete',
      ],
    },
    {
      type: 'category',
      label: 'Distribution Policy',
      items: [
        'api/distribution-policies/index',
        'api/distribution-policies/list',
        'api/distribution-policies/count',
        'api/distribution-policies/detail',
        'api/distribution-policies/create',
        'api/distribution-policies/update',
        'api/distribution-policies/delete',
      ],
    },
  ],
};

export default sidebars;

