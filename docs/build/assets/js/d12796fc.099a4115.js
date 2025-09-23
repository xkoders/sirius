'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [4239],
  {
    894: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => o,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => d,
          metadata: () => s,
          toc: () => c,
        })
      const s = JSON.parse(
        '{"id":"components/actions/button","title":"Button","description":"A versatile button component that supports multiple variants, sizes, and states.","source":"@site/docs/components/actions/button.md","sourceDirName":"components/actions","slug":"/components/actions/button","permalink":"/docs/components/actions/button","draft":false,"unlisted":false,"editUrl":"https://github.com/xkoders/sirius/tree/main/docs/docs/components/actions/button.md","tags":[],"version":"current","frontMatter":{"id":"button","title":"Button","sidebar_label":"Button"}}',
      )
      var i = t(6106),
        l = t(9185)
      const d = { id: 'button', title: 'Button', sidebar_label: 'Button' },
        r = 'Button',
        o = {},
        c = [
          { value: '\ud83d\udcd6 Overview', id: '-overview', level: 2 },
          { value: '\ud83d\ude80 Basic Usage', id: '-basic-usage', level: 2 },
          { value: '\ud83c\udfa8 Variants', id: '-variants', level: 2 },
          { value: 'Primary Button', id: 'primary-button', level: 3 },
          { value: 'Secondary Button', id: 'secondary-button', level: 3 },
          { value: 'Outline Button', id: 'outline-button', level: 3 },
          { value: 'Ghost Button', id: 'ghost-button', level: 3 },
          { value: 'Danger Button', id: 'danger-button', level: 3 },
          { value: '\ud83d\udccf Sizes', id: '-sizes', level: 2 },
          { value: 'Small', id: 'small', level: 3 },
          { value: 'Medium (Default)', id: 'medium-default', level: 3 },
          { value: 'Large', id: 'large', level: 3 },
          { value: '\ud83d\udd27 States', id: '-states', level: 2 },
          { value: 'Disabled', id: 'disabled', level: 3 },
          { value: 'Loading', id: 'loading', level: 3 },
          { value: 'With Icon', id: 'with-icon', level: 3 },
          { value: '\ud83c\udfaf Examples', id: '-examples', level: 2 },
          { value: 'Form Submission', id: 'form-submission', level: 3 },
          { value: 'Button Group', id: 'button-group', level: 3 },
          { value: 'Loading State', id: 'loading-state', level: 3 },
          { value: '\ud83d\udccb API Reference', id: '-api-reference', level: 2 },
          { value: 'Props', id: 'props', level: 3 },
          { value: 'CSS Classes', id: 'css-classes', level: 3 },
          { value: 'CSS Custom Properties', id: 'css-custom-properties', level: 3 },
          { value: '\u267f Accessibility', id: '-accessibility', level: 2 },
          { value: 'ARIA Attributes', id: 'aria-attributes', level: 3 },
          { value: '\ud83c\udfa8 Customization', id: '-customization', level: 2 },
          { value: 'Using Tailwind CSS', id: 'using-tailwind-css', level: 3 },
          { value: 'Using CSS Modules', id: 'using-css-modules', level: 3 },
          { value: 'Using Styled Components', id: 'using-styled-components', level: 3 },
          { value: '\ud83e\uddea Testing', id: '-testing', level: 2 },
          { value: 'Basic Test', id: 'basic-test', level: 3 },
          { value: 'Testing Different States', id: 'testing-different-states', level: 3 },
          { value: '\ud83d\udd17 Related Components', id: '-related-components', level: 2 },
          { value: '\ud83d\udcda Additional Resources', id: '-additional-resources', level: 2 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          header: 'header',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.header, {
              children: (0, i.jsx)(n.h1, { id: 'button', children: 'Button' }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'A versatile button component that supports multiple variants, sizes, and states.',
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-overview', children: '\ud83d\udcd6 Overview' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The Button component is the primary interactive element in Sirius UI. It provides a consistent way to trigger actions, submit forms, and navigate between pages.',
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-basic-usage', children: '\ud83d\ude80 Basic Usage' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import { Button } from '@adersolutions/sirius-react';\n\nfunction MyComponent() {\n  return (\n    <Button onClick={() => console.log('Button clicked!')}>\n      Click Me\n    </Button>\n  );\n}\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-variants', children: '\ud83c\udfa8 Variants' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'primary-button', children: 'Primary Button' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'The default button style for primary actions.' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button variant="primary">\n  Primary Action\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'secondary-button', children: 'Secondary Button' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'For secondary or less important actions.' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button variant="secondary">\n  Secondary Action\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'outline-button', children: 'Outline Button' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'A button with an outlined appearance.' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button variant="outline">\n  Outline Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'ghost-button', children: 'Ghost Button' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'A minimal button with no background or border.' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button variant="ghost">\n  Ghost Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'danger-button', children: 'Danger Button' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'For destructive actions that require caution.' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button variant="danger">\n  Delete Item\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-sizes', children: '\ud83d\udccf Sizes' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'small', children: 'Small' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button size="small">\n  Small Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'medium-default', children: 'Medium (Default)' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button size="medium">\n  Medium Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'large', children: 'Large' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button size="large">\n  Large Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-states', children: '\ud83d\udd27 States' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'disabled', children: 'Disabled' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button disabled>\n  Disabled Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'loading', children: 'Loading' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children: '<Button loading>\n  Loading...\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'with-icon', children: 'With Icon' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  'import { Icon } from \'@adersolutions/sirius-react\';\n\n<Button icon={<Icon name="plus" />}>\n  Add Item\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-examples', children: '\ud83c\udfaf Examples' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'form-submission', children: 'Form Submission' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  'function ContactForm() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Handle form submission\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Form fields */}\n      <Button type="submit" variant="primary">\n        Send Message\n      </Button>\n    </form>\n  );\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'button-group', children: 'Button Group' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  'import { Button, Stack } from \'@adersolutions/sirius-react\';\n\nfunction ActionButtons() {\n  return (\n    <Stack direction="horizontal" gap="2">\n      <Button variant="primary">\n        Save\n      </Button>\n      <Button variant="outline">\n        Cancel\n      </Button>\n      <Button variant="danger">\n        Delete\n      </Button>\n    </Stack>\n  );\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'loading-state', children: 'Loading State' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "function SaveButton() {\n  const [isLoading, setIsLoading] = useState(false);\n\n  const handleSave = async () => {\n    setIsLoading(true);\n    try {\n      await saveData();\n    } finally {\n      setIsLoading(false);\n    }\n  };\n\n  return (\n    <Button \n      variant=\"primary\" \n      loading={isLoading}\n      onClick={handleSave}\n    >\n      {isLoading ? 'Saving...' : 'Save'}\n    </Button>\n  );\n}\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-api-reference', children: '\ud83d\udccb API Reference' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'props', children: 'Props' }),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, { children: 'Prop' }),
                      (0, i.jsx)(n.th, { children: 'Type' }),
                      (0, i.jsx)(n.th, { children: 'Default' }),
                      (0, i.jsx)(n.th, { children: 'Description' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'variant' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: "'primary'" }),
                        }),
                        (0, i.jsx)(n.td, { children: 'The visual style of the button' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'size' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: "'small' | 'medium' | 'large'",
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: "'medium'" }),
                        }),
                        (0, i.jsx)(n.td, { children: 'The size of the button' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'disabled' }),
                        }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'boolean' }) }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'false' }) }),
                        (0, i.jsx)(n.td, { children: 'Whether the button is disabled' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'loading' }) }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'boolean' }) }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'false' }) }),
                        (0, i.jsx)(n.td, { children: 'Whether to show a loading state' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'icon' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'ReactNode' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'undefined' }),
                        }),
                        (0, i.jsx)(n.td, { children: 'Icon to display before the button text' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'iconPosition' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: "'left' | 'right'" }),
                        }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: "'left'" }) }),
                        (0, i.jsx)(n.td, { children: 'Position of the icon relative to text' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'fullWidth' }),
                        }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'boolean' }) }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'false' }) }),
                        (0, i.jsx)(n.td, { children: 'Whether the button should take full width' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'type' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: "'button' | 'submit' | 'reset'",
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: "'button'" }),
                        }),
                        (0, i.jsx)(n.td, { children: 'The type of the button' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'onClick' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: '(event: MouseEvent) => void' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'undefined' }),
                        }),
                        (0, i.jsx)(n.td, { children: 'Click event handler' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'children' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'ReactNode' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'undefined' }),
                        }),
                        (0, i.jsx)(n.td, { children: 'Button content' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'className' }),
                        }),
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'string' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'undefined' }),
                        }),
                        (0, i.jsx)(n.td, { children: 'Additional CSS classes' }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: 'style' }) }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'CSSProperties' }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, { children: 'undefined' }),
                        }),
                        (0, i.jsx)(n.td, { children: 'Inline styles' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'css-classes', children: 'CSS Classes' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'The Button component uses the following CSS classes:' }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button' }),
                    ' - Base button class',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button--{variant}' }),
                    ' - Variant-specific styles',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button--{size}' }),
                    ' - Size-specific styles',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button--disabled' }),
                    ' - Disabled state styles',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button--loading' }),
                    ' - Loading state styles',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: '.sirius-button--full-width' }),
                    ' - Full width styles',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'css-custom-properties', children: 'CSS Custom Properties' }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'You can customize the button appearance using CSS custom properties:',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-css',
                children:
                  ':root {\n  --sirius-button-primary-bg: #007bff;\n  --sirius-button-primary-color: #ffffff;\n  --sirius-button-border-radius: 6px;\n  --sirius-button-padding-x: 16px;\n  --sirius-button-padding-y: 8px;\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-accessibility', children: '\u267f Accessibility' }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'The Button component includes several accessibility features:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, { children: 'Semantic HTML' }),
                    ': Uses the ',
                    (0, i.jsx)(n.code, { children: '<button>' }),
                    ' element for proper semantics',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, { children: 'ARIA Support' }),
                    ': Includes appropriate ARIA attributes',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, { children: 'Keyboard Navigation' }),
                    ': Fully keyboard accessible',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, { children: 'Focus Management' }),
                    ': Proper focus handling and indicators',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, { children: 'Screen Reader Support' }),
                    ': Optimized for assistive technologies',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'aria-attributes', children: 'ARIA Attributes' }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'role="button"' }),
                    ' - Explicitly defines the button role',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'aria-disabled' }),
                    ' - Indicates when the button is disabled',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'aria-busy' }),
                    ' - Indicates when the button is in a loading state',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-customization', children: '\ud83c\udfa8 Customization' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'using-tailwind-css', children: 'Using Tailwind CSS' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  '<Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full">\n  Custom Button\n</Button>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'using-css-modules', children: 'Using CSS Modules' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import styles from './CustomButton.module.css';\n\n<Button className={styles.customButton}>\n  Custom Styled Button\n</Button>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'using-styled-components',
              children: 'Using Styled Components',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import styled from 'styled-components';\n\nconst StyledButton = styled(Button)`\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n  border: none;\n  border-radius: 25px;\n  color: white;\n  font-weight: bold;\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n`;\n\n<StyledButton>Gradient Button</StyledButton>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '-testing', children: '\ud83e\uddea Testing' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'basic-test', children: 'Basic Test' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import { render, screen, fireEvent } from '@testing-library/react';\nimport { Button } from '@adersolutions/sirius-react';\n\ntest('renders button with correct text', () => {\n  render(<Button>Click me</Button>);\n  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();\n});\n\ntest('calls onClick when clicked', () => {\n  const handleClick = jest.fn();\n  render(<Button onClick={handleClick}>Click me</Button>);\n  \n  fireEvent.click(screen.getByRole('button'));\n  expect(handleClick).toHaveBeenCalledTimes(1);\n});\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'testing-different-states',
              children: 'Testing Different States',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "test('disables button when disabled prop is true', () => {\n  render(<Button disabled>Disabled Button</Button>);\n  expect(screen.getByRole('button')).toBeDisabled();\n});\n\ntest('shows loading state when loading prop is true', () => {\n  render(<Button loading>Loading Button</Button>);\n  expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');\n});\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '-related-components',
              children: '\ud83d\udd17 Related Components',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.a, {
                        href: '/docs/components/actions/button-group',
                        children: 'Button Group',
                      }),
                    }),
                    ' - Group related buttons together',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.a, {
                        href: '/docs/components/icons/icon',
                        children: 'Icon',
                      }),
                    }),
                    ' - Icons for buttons',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.a, {
                        href: '/docs/components/layout-structure/stack',
                        children: 'Stack',
                      }),
                    }),
                    ' - Layout buttons in groups',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '-additional-resources',
              children: '\ud83d\udcda Additional Resources',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: 'https://material.io/design/components/buttons.html',
                    children: 'Button Design Guidelines',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
                    children: 'Accessible Button Patterns',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: 'https://www.nngroup.com/articles/buttons-design/',
                    children: 'Button Best Practices',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e)
      }
    },
    9185: (e, n, t) => {
      t.d(n, { R: () => d, x: () => r })
      var s = t(7378)
      const i = {},
        l = s.createContext(i)
      function d(e) {
        const n = s.useContext(l)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e],
        )
      }
      function r(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : d(e.components)),
          s.createElement(l.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
