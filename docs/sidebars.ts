import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Getting Started sidebar
  tutorialSidebar: ['intro', 'getting-started', 'examples'],

  // Components sidebar
  componentsSidebar: [
    'components/components-overview',
    {
      type: 'category',
      label: 'Actions',
      items: ['components/actions/button'],
    },
    {
      type: 'category',
      label: 'Feedback',
      items: [
        'components/feedbacks/badge',
        'components/feedbacks/banner',
        'components/feedbacks/spinner',
        'components/feedbacks/toast',
        'components/feedbacks/skeleton',
        'components/feedbacks/error-boundary',
        'components/feedbacks/transition',
        'components/feedbacks/exception-list',
      ],
    },
    {
      type: 'category',
      label: 'Forms & Selections',
      items: [
        'components/forms-selections/checkbox',
        'components/forms-selections/choice-list',
        'components/forms-selections/search-field',
        'components/forms-selections/text-field',
        'components/forms-selections/tabs',
        'components/forms-selections/index-filters',
        'components/forms-selections/inline-error',
        'components/forms-selections/popover',
      ],
    },
    {
      type: 'category',
      label: 'Layout & Structure',
      items: [
        'components/layout-structure/box',
        'components/layout-structure/stack',
        'components/layout-structure/page',
        'components/layout-structure/layout',
        'components/layout-structure/empty-state',
        'components/layout-structure/media-card',
        'components/layout-structure/header',
      ],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['components/navigations/navigation', 'components/navigations/frame'],
    },
    {
      type: 'category',
      label: 'Overlays',
      items: [
        'components/overlays/modal',
        'components/overlays/tooltip',
        'components/overlays/portal',
      ],
    },
    {
      type: 'category',
      label: 'Typography',
      items: [
        'components/typography/text',
        'components/typography/heading',
        'components/typography/title',
        'components/typography/subtitle',
      ],
    },
    {
      type: 'category',
      label: 'Data Display',
      items: ['components/tables/table', 'components/images/thumbnail'],
    },
  ],
}

export default sidebars
