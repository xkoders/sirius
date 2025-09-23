'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [7924],
  {
    1802: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => d,
        })
      const s = JSON.parse(
        '{"id":"getting-started","title":"Getting Started","description":"This guide will help you get up and running with Sirius UI in your React project.","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/docs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/xkoders/sirius/tree/main/docs/docs/getting-started.md","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Getting Started","sidebar_label":"Getting Started"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/"},"next":{"title":"examples","permalink":"/docs/examples"}}',
      )
      var t = i(6106),
        r = i(9185)
      const o = {
          id: 'getting-started',
          title: 'Getting Started',
          sidebar_label: 'Getting Started',
        },
        l = 'Getting Started with Sirius UI',
        a = {},
        d = [
          { value: '\ud83d\udccb Prerequisites', id: '-prerequisites', level: 2 },
          { value: '\ud83d\ude80 Installation', id: '-installation', level: 2 },
          { value: 'Using pnpm (Recommended)', id: 'using-pnpm-recommended', level: 3 },
          { value: 'Using npm', id: 'using-npm', level: 3 },
          { value: 'Using yarn', id: 'using-yarn', level: 3 },
          { value: '\ud83c\udfaf Basic Setup', id: '-basic-setup', level: 2 },
          { value: '1. Import Components', id: '1-import-components', level: 3 },
          { value: '2. Use Components', id: '2-use-components', level: 3 },
          { value: '\ud83c\udfa8 Styling and Theming', id: '-styling-and-theming', level: 2 },
          { value: 'CSS Import', id: 'css-import', level: 3 },
          { value: 'Tailwind CSS Integration', id: 'tailwind-css-integration', level: 3 },
          { value: '\ud83d\udd27 Configuration', id: '-configuration', level: 2 },
          { value: 'TypeScript Support', id: 'typescript-support', level: 3 },
          { value: 'Provider Setup (Optional)', id: 'provider-setup-optional', level: 3 },
          { value: '\ud83d\udcf1 Responsive Design', id: '-responsive-design', level: 2 },
          { value: '\u267f Accessibility', id: '-accessibility', level: 2 },
          { value: '\ud83e\uddea Testing', id: '-testing', level: 2 },
          { value: '\ud83d\udcda Next Steps', id: '-next-steps', level: 2 },
          { value: '\ud83c\udd98 Need Help?', id: '-need-help', level: 2 },
          { value: '\ud83c\udf89 Congratulations!', id: '-congratulations', level: 2 },
        ]
      function c(e) {
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
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, {
              children: (0, t.jsx)(n.h1, {
                id: 'getting-started-with-sirius-ui',
                children: 'Getting Started with Sirius UI',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This guide will help you get up and running with Sirius UI in your React project.',
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-prerequisites', children: '\ud83d\udccb Prerequisites' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Before you begin, make sure you have:' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Node.js' }),
                    ' version 18.0 or higher',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'pnpm' }),
                    ' package manager (recommended) or npm/yarn',
                  ],
                }),
                '\n',
                (0, t.jsx)(n.li, { children: 'A React project (version 18.0 or higher)' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-installation', children: '\ud83d\ude80 Installation' }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'using-pnpm-recommended',
              children: 'Using pnpm (Recommended)',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'pnpm add @adersolutions/sirius-react\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'using-npm', children: 'Using npm' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'npm install @adersolutions/sirius-react\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'using-yarn', children: 'Using yarn' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'yarn add @adersolutions/sirius-react\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-basic-setup', children: '\ud83c\udfaf Basic Setup' }),
            '\n',
            (0, t.jsx)(n.h3, { id: '1-import-components', children: '1. Import Components' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'You can import individual components to keep your bundle size minimal:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children: "import { Button, Text, Box } from '@adersolutions/sirius-react';\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: '2-use-components', children: '2. Use Components' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Start using components in your React components:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  'import React from \'react\';\nimport { Button, Text, Box, Stack } from \'@adersolutions/sirius-react\';\n\nfunction MyComponent() {\n  return (\n    <Box padding="4">\n      <Stack gap="4">\n        <Text variant="heading" size="large">\n          Welcome to Sirius UI\n        </Text>\n        <Text>\n          This is a beautiful and accessible component library.\n        </Text>\n        <Button variant="primary" size="medium">\n          Get Started\n        </Button>\n      </Stack>\n    </Box>\n  );\n}\n\nexport default MyComponent;\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-styling-and-theming',
              children: '\ud83c\udfa8 Styling and Theming',
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'css-import', children: 'CSS Import' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Import the base styles in your main application file:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "// In your main.tsx or App.tsx\nimport '@adersolutions/sirius-react/index.scss';\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'tailwind-css-integration',
              children: 'Tailwind CSS Integration',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Sirius UI is built with Tailwind CSS. Make sure you have Tailwind CSS configured in your project:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'pnpm add -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Update your ',
                (0, t.jsx)(n.code, { children: 'tailwind.config.js' }),
                ':',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-js',
                children:
                  '/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n    "./node_modules/@adersolutions/sirius-react/**/*.{js,jsx,ts,tsx}"\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-configuration', children: '\ud83d\udd27 Configuration' }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'typescript-support', children: 'TypeScript Support' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Sirius UI includes full TypeScript support. Make sure your ',
                (0, t.jsx)(n.code, { children: 'tsconfig.json' }),
                ' includes:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "compilerOptions": {\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "jsx": "react-jsx"\n  }\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'provider-setup-optional',
              children: 'Provider Setup (Optional)',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'For advanced features like theming and context, wrap your app with the Provider:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import { Provider } from '@adersolutions/sirius-react';\n\nfunction App() {\n  return (\n    <Provider>\n      {/* Your app content */}\n    </Provider>\n  );\n}\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-responsive-design',
              children: '\ud83d\udcf1 Responsive Design',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "All components are built with responsive design in mind. They automatically adapt to different screen sizes and can be customized using Tailwind's responsive utilities.",
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-accessibility', children: '\u267f Accessibility' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Sirius UI components are built with accessibility in mind:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Proper ARIA attributes' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Keyboard navigation support' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Screen reader compatibility' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'High contrast support' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Focus management' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-testing', children: '\ud83e\uddea Testing' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Test your components to ensure they work correctly:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import { render, screen } from '@testing-library/react';\nimport { Button } from '@adersolutions/sirius-react';\n\ntest('renders button with correct text', () => {\n  render(<Button>Click me</Button>);\n  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();\n});\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-next-steps', children: '\ud83d\udcda Next Steps' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Now that you have Sirius UI set up, explore:' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/components/overview',
                        children: 'Components Documentation',
                      }),
                    }),
                    ': Learn about all available components',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, { href: '/docs/examples', children: 'Examples' }),
                    }),
                    ': See real-world usage patterns',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.a, {
                        href: '/docs/customization',
                        children: 'Customization',
                      }),
                    }),
                    ': Learn how to customize components for your needs',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-need-help', children: '\ud83c\udd98 Need Help?' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'If you run into any issues:' }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Check the ',
                    (0, t.jsx)(n.a, {
                      href: '/docs/components/overview',
                      children: 'Components Documentation',
                    }),
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Look at the ',
                    (0, t.jsx)(n.a, { href: '/docs/examples', children: 'Examples' }),
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
                (0, t.jsx)(n.li, {
                  children: "Create a new issue if your problem isn't already documented",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-congratulations', children: '\ud83c\udf89 Congratulations!' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "You've successfully set up Sirius UI in your project! You're now ready to build beautiful, accessible, and consistent user interfaces.",
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e)
      }
    },
    9185: (e, n, i) => {
      i.d(n, { R: () => o, x: () => l })
      var s = i(7378)
      const t = {},
        r = s.createContext(t)
      function o(e) {
        const n = s.useContext(r)
        return s.useMemo(
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
            : o(e.components)),
          s.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
