'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [7086],
  {
    7228: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => a,
        })
      const i = JSON.parse(
        '{"id":"components/components-overview","title":"Components Overview","description":"Sirius UI provides a comprehensive set of React components organized into logical categories. Each component is designed to be accessible, customizable, and performant.","source":"@site/docs/components/overview.md","sourceDirName":"components","slug":"/components/components-overview","permalink":"/docs/components/components-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/xkoders/sirius/tree/main/docs/docs/components/overview.md","tags":[],"version":"current","frontMatter":{"id":"components-overview","title":"Components Overview","sidebar_label":"Overview"},"sidebar":"componentsSidebar"}',
      )
      var t = s(6106),
        o = s(9185)
      const r = {
          id: 'components-overview',
          title: 'Components Overview',
          sidebar_label: 'Overview',
        },
        l = 'Components Overview',
        c = {},
        a = [
          { value: '\ud83c\udfaf Component Categories', id: '-component-categories', level: 2 },
          { value: 'Actions', id: 'actions', level: 3 },
          { value: 'Feedback', id: 'feedback', level: 3 },
          { value: 'Forms &amp; Selections', id: 'forms--selections', level: 3 },
          { value: 'Layout &amp; Structure', id: 'layout--structure', level: 3 },
          { value: 'Navigation', id: 'navigation', level: 3 },
          { value: 'Overlays', id: 'overlays', level: 3 },
          { value: 'Typography', id: 'typography', level: 3 },
          { value: 'Data Display', id: 'data-display', level: 3 },
          { value: '\ud83c\udfa8 Design Principles', id: '-design-principles', level: 2 },
          { value: 'Consistency', id: 'consistency', level: 3 },
          { value: 'Accessibility', id: 'accessibility', level: 3 },
          { value: 'Customization', id: 'customization', level: 3 },
          { value: 'Performance', id: 'performance', level: 3 },
          {
            value: '\ud83d\ude80 Getting Started with Components',
            id: '-getting-started-with-components',
            level: 2,
          },
          { value: 'Basic Usage', id: 'basic-usage', level: 3 },
          { value: 'Component Props', id: 'component-props', level: 3 },
          { value: 'Variants and Sizes', id: 'variants-and-sizes', level: 3 },
          { value: '\ud83d\udd27 Customization', id: '-customization', level: 2 },
          { value: 'Theming', id: 'theming', level: 3 },
          { value: 'Tailwind CSS', id: 'tailwind-css', level: 3 },
          { value: '\ud83d\udcf1 Responsive Design', id: '-responsive-design', level: 2 },
          { value: '\u267f Accessibility Features', id: '-accessibility-features', level: 2 },
          { value: '\ud83e\uddea Testing', id: '-testing', level: 2 },
          { value: '\ud83d\udcda Next Steps', id: '-next-steps', level: 2 },
          { value: '\ud83c\udd98 Need Help?', id: '-need-help', level: 2 },
        ]
      function d(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          header: 'header',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, {
              children: (0, t.jsx)(n.h1, {
                id: 'components-overview',
                children: 'Components Overview',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Sirius UI provides a comprehensive set of React components organized into logical categories. Each component is designed to be accessible, customizable, and performant.',
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-component-categories',
              children: '\ud83c\udfaf Component Categories',
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'actions', children: 'Actions' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Interactive elements that users can interact with to perform actions.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/actions/button',
                        children: 'Button',
                      }),
                    }),
                    ' - Primary interactive element with multiple variants',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/actions/button-group',
                        children: 'Button Group',
                      }),
                    }),
                    ' - Group related buttons together',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'feedback', children: 'Feedback' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Components that provide visual feedback to users about the state of the application.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/feedbacks/badge',
                        children: 'Badge',
                      }),
                    }),
                    ' - Small status indicators and labels',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/feedbacks/banner',
                        children: 'Banner',
                      }),
                    }),
                    ' - Important messages and announcements',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/feedbacks/spinner',
                        children: 'Spinner',
                      }),
                    }),
                    ' - Loading indicators',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/feedbacks/toast',
                        children: 'Toast',
                      }),
                    }),
                    ' - Temporary notification messages',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/feedbacks/skeleton',
                        children: 'Skeleton',
                      }),
                    }),
                    ' - Loading placeholders for content',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'forms--selections', children: 'Forms & Selections' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Components for collecting user input and making selections.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/button',
                        children: 'Button',
                      }),
                    }),
                    ' - Form submission and action buttons',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/checkbox',
                        children: 'Checkbox',
                      }),
                    }),
                    ' - Binary selection input',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/choice-list',
                        children: 'Choice List',
                      }),
                    }),
                    ' - Radio button and checkbox groups',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/search-field',
                        children: 'Search Field',
                      }),
                    }),
                    ' - Text input for searching',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/text-field',
                        children: 'Text Field',
                      }),
                    }),
                    ' - Single-line text input',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/forms-selections/tabs',
                        children: 'Tabs',
                      }),
                    }),
                    ' - Content organization with tabbed interface',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'layout--structure', children: 'Layout & Structure' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Components for organizing and structuring the layout of your application.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/box',
                        children: 'Box',
                      }),
                    }),
                    ' - Basic container with spacing and styling',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/stack',
                        children: 'Stack',
                      }),
                    }),
                    ' - Vertical or horizontal layout with consistent spacing',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/page',
                        children: 'Page',
                      }),
                    }),
                    ' - Full-page layout container',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/layout',
                        children: 'Layout',
                      }),
                    }),
                    ' - Application layout structure',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/empty-state',
                        children: 'Empty State',
                      }),
                    }),
                    " - Display when there's no content",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/layout-structure/media-card',
                        children: 'Media Card',
                      }),
                    }),
                    ' - Card layout for media content',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'navigation', children: 'Navigation' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Components for navigating between different parts of your application.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/navigations/navigation',
                        children: 'Navigation',
                      }),
                    }),
                    ' - Main navigation menu',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/navigations/frame',
                        children: 'Frame',
                      }),
                    }),
                    ' - Application frame with navigation',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'overlays', children: 'Overlays' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Components that appear above the main content.' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/overleys/modal',
                        children: 'Modal',
                      }),
                    }),
                    ' - Dialog boxes and overlays',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/overleys/popover',
                        children: 'Popover',
                      }),
                    }),
                    ' - Contextual information panels',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/overleys/tooltip',
                        children: 'Tooltip',
                      }),
                    }),
                    ' - Hover information displays',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/overleys/portal',
                        children: 'Portal',
                      }),
                    }),
                    ' - Render content in different DOM locations',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'typography', children: 'Typography' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Text components for displaying content with consistent styling.',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/typography/text',
                        children: 'Text',
                      }),
                    }),
                    ' - Basic text display with variants',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/typography/heading',
                        children: 'Heading',
                      }),
                    }),
                    ' - Section headings and titles',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/typography/title',
                        children: 'Title',
                      }),
                    }),
                    ' - Page and section titles',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/typography/subtitle',
                        children: 'Subtitle',
                      }),
                    }),
                    ' - Supporting text below titles',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'data-display', children: 'Data Display' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Components for displaying structured data and media.' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/tables/table',
                        children: 'Table',
                      }),
                    }),
                    ' - Data tables with sorting and pagination',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/images/thumbnail',
                        children: 'Thumbnail',
                      }),
                    }),
                    ' - Image thumbnails and previews',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-design-principles',
              children: '\ud83c\udfa8 Design Principles',
            }),
            '\n',
            (0, t.jsx)(n.p, { children: 'All components follow these design principles:' }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'consistency', children: 'Consistency' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Unified design language across all components' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Consistent spacing, typography, and color usage' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Predictable behavior and interactions' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'accessibility', children: 'Accessibility' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'WCAG 2.1 AA compliance' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Proper ARIA attributes and roles' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Keyboard navigation support' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Screen reader compatibility' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'customization', children: 'Customization' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Extensive theming options' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Flexible prop-based customization' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'CSS custom properties for styling' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Tailwind CSS integration' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'performance', children: 'Performance' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Optimized bundle size' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Lazy loading where appropriate' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Efficient re-renders' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Minimal dependencies' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-getting-started-with-components',
              children: '\ud83d\ude80 Getting Started with Components',
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'basic-usage', children: 'Basic Usage' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  'import { Button, Text, Box } from \'@adersolutions/sirius-react\';\n\nfunction MyComponent() {\n  return (\n    <Box padding="4">\n      <Text variant="heading" size="large">\n        Hello World\n      </Text>\n      <Button variant="primary">\n        Click Me\n      </Button>\n    </Box>\n  );\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'component-props', children: 'Component Props' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Most components accept common props:' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.code, { children: 'className' }),
                    }),
                    ' - Additional CSS classes',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: (0, t.jsx)(n.code, { children: 'style' }) }),
                    ' - Inline styles',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: (0, t.jsx)(n.code, { children: 'id' }) }),
                    ' - Unique identifier',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: (0, t.jsx)(n.code, { children: 'data-*' }) }),
                    ' - Custom data attributes',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'variants-and-sizes', children: 'Variants and Sizes' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Many components support different variants and sizes:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  '// Button variants\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n\n// Size variations\n<Button size="small">Small</Button>\n<Button size="medium">Medium</Button>\n<Button size="large">Large</Button>\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-customization', children: '\ud83d\udd27 Customization' }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'theming', children: 'Theming' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Customize the appearance using CSS custom properties:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-css',
                children:
                  ':root {\n  --sirius-primary-color: #007bff;\n  --sirius-border-radius: 8px;\n  --sirius-spacing-unit: 8px;\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'tailwind-css', children: 'Tailwind CSS' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Use Tailwind utilities to customize components:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  '<Button className="bg-blue-500 hover:bg-blue-600 text-white">\n  Custom Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-responsive-design',
              children: '\ud83d\udcf1 Responsive Design',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'All components are built with responsive design in mind:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Mobile-first approach' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Flexible layouts that adapt to screen size' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Touch-friendly interactions' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Optimized for different device types' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-accessibility-features',
              children: '\u267f Accessibility Features',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Semantic HTML' }),
                    ': Proper use of HTML elements',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'ARIA Support' }),
                    ': Comprehensive ARIA attribute support',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Keyboard Navigation' }),
                    ': Full keyboard accessibility',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Focus Management' }),
                    ': Proper focus handling and indicators',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Screen Reader Support' }),
                    ': Optimized for assistive technologies',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-testing', children: '\ud83e\uddea Testing' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Components are thoroughly tested:' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Unit tests for all functionality' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Integration tests for component interactions' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Accessibility testing with automated tools' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Cross-browser compatibility testing' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-next-steps', children: '\ud83d\udcda Next Steps' }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-need-help', children: '\ud83c\udd98 Need Help?' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'If you have questions about components:' }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Check the specific component documentation' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Look at the examples and code samples' }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Review the ',
                    (0, t.jsx)(n.a, { href: '/docs/getting-started', children: 'Getting Started' }),
                    ' guide',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Search existing ',
                    (0, t.jsx)(n.a, {
                      href: 'https://github.com/xkoders/sirius/issues',
                      children: 'GitHub Issues',
                    }),
                  ],
                }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Create a new issue for bugs or feature requests' }),
                '\n',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e)
      }
    },
    9185: (e, n, s) => {
      s.d(n, { R: () => r, x: () => l })
      var i = s(7378)
      const t = {},
        o = i.createContext(t)
      function r(e) {
        const n = i.useContext(o)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e],
        )
      }
      function l(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          i.createElement(o.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
