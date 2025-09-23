'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [3976],
  {
    7899: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => d,
        })
      const i = JSON.parse(
        '{"id":"intro","title":"Introduction","description":"Sirius UI is a modern, accessible, and customizable React component library designed to help you build beautiful and consistent user interfaces faster.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/","permalink":"/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/xkoders/sirius/tree/main/docs/docs/intro.md","tags":[],"version":"current","frontMatter":{"id":"intro","title":"Introduction","sidebar_label":"Introduction","slug":"/"},"sidebar":"tutorialSidebar","next":{"title":"Getting Started","permalink":"/docs/getting-started"}}',
      )
      var t = s(6106),
        r = s(9185)
      const o = { id: 'intro', title: 'Introduction', sidebar_label: 'Introduction', slug: '/' },
        l = 'Welcome to Sirius UI',
        c = {},
        d = [
          { value: '\u2728 Features', id: '-features', level: 2 },
          { value: '\ud83d\ude80 Quick Start', id: '-quick-start', level: 2 },
          { value: '\ud83c\udfaf What&#39;s Included', id: '-whats-included', level: 2 },
          { value: '\ud83c\udfa8 Design Philosophy', id: '-design-philosophy', level: 2 },
          { value: '\ud83d\udd17 Getting Started', id: '-getting-started', level: 2 },
          {
            value: '\ud83d\udcda Documentation Structure',
            id: '-documentation-structure',
            level: 2,
          },
          { value: '\ud83e\udd1d Contributing', id: '-contributing', level: 2 },
          { value: '\ud83d\udcc4 License', id: '-license', level: 2 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          header: 'header',
          li: 'li',
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
                id: 'welcome-to-sirius-ui',
                children: 'Welcome to Sirius UI',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                (0, t.jsx)(n.strong, { children: 'Sirius UI' }),
                ' is a modern, accessible, and customizable React component library designed to help you build beautiful and consistent user interfaces faster.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-features', children: '\u2728 Features' }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\ud83c\udfa8 Modern Design' }),
                    ': Clean, professional components that follow current design trends',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\u267f Accessibility First' }),
                    ': Built with accessibility in mind, following WCAG guidelines',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\ud83d\udd27 Highly Customizable' }),
                    ': Extensive theming and customization options',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\ud83d\udcf1 Responsive' }),
                    ': Mobile-first approach with responsive design patterns',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\u26a1 Performance' }),
                    ': Optimized components with minimal bundle impact',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\ud83d\udee0\ufe0f TypeScript' }),
                    ': Full TypeScript support with comprehensive type definitions',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: '\ud83c\udfaf Developer Experience' }),
                    ': Excellent developer experience with detailed documentation and examples',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-quick-start', children: '\ud83d\ude80 Quick Start' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'Get started with Sirius UI in just a few steps:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children:
                  "# Install the package\npnpm add @adersolutions/sirius-react\n\n# Import and use components\nimport { Button, Text, Box } from '@adersolutions/sirius-react';\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-whats-included', children: "\ud83c\udfaf What's Included" }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Sirius UI provides a comprehensive set of components organized into logical categories:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Actions' }),
                    ': Buttons, button groups, and interactive elements',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Feedback' }),
                    ': Badges, banners, spinners, toasts, and skeleton loaders',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Forms & Selections' }),
                    ': Input fields, checkboxes, search, and form controls',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Layout & Structure' }),
                    ': Boxes, stacks, pages, and layout components',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Navigation' }),
                    ': Navigation menus and frame components',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Overlays' }),
                    ': Modals, popovers, tooltips, and portals',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Typography' }),
                    ': Text, headings, titles, and subtitle components',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Data Display' }),
                    ': Tables and image components',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-design-philosophy',
              children: '\ud83c\udfa8 Design Philosophy',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Our components are built with these principles in mind:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Consistency' }),
                    ': Unified design language across all components',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Flexibility' }),
                    ': Easy to customize and extend for your specific needs',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Performance' }),
                    ': Optimized for speed and efficiency',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Accessibility' }),
                    ': Inclusive design that works for everyone',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Modern' }),
                    ': Leveraging the latest web technologies and best practices',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-getting-started', children: '\ud83d\udd17 Getting Started' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Ready to dive in? Check out our ',
                (0, t.jsx)(n.a, { href: '/docs/getting-started', children: 'Getting Started' }),
                ' guide to learn how to set up Sirius UI in your project.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: '-documentation-structure',
              children: '\ud83d\udcda Documentation Structure',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Getting Started' }),
                    ': Installation, setup, and basic usage',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Components' }),
                    ': Detailed documentation for each component',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Examples' }),
                    ': Real-world usage examples and patterns',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Changelog' }),
                    ': Version updates and changes',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-contributing', children: '\ud83e\udd1d Contributing' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                "We welcome contributions! Whether it's bug reports, feature requests, or code contributions, we'd love to hear from you. Check out our ",
                (0, t.jsx)(n.a, {
                  href: 'https://github.com/xkoders/sirius',
                  children: 'GitHub repository',
                }),
                ' to get started.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: '-license', children: '\ud83d\udcc4 License' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Sirius UI is open source and available under the MIT License.',
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e)
      }
    },
    9185: (e, n, s) => {
      s.d(n, { R: () => o, x: () => l })
      var i = s(7378)
      const t = {},
        r = i.createContext(t)
      function o(e) {
        const n = i.useContext(r)
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
            : o(e.components)),
          i.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
