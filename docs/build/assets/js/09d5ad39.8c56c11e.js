'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [1864],
  {
    404: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => l,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => u,
        })
      const n = JSON.parse(
        '{"id":"examples","title":"examples","description":"","source":"@site/docs/examples.md","sourceDirName":".","slug":"/examples","permalink":"/docs/examples","draft":false,"unlisted":false,"editUrl":"https://github.com/xkoders/sirius/tree/main/docs/docs/examples.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/getting-started"}}',
      )
      var o = s(6106),
        r = s(9185)
      const i = {},
        a = void 0,
        c = {},
        u = []
      function d(e) {
        return (0, o.jsx)(o.Fragment, {})
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d()
      }
    },
    9185: (e, t, s) => {
      s.d(t, { R: () => i, x: () => a })
      var n = s(7378)
      const o = {},
        r = n.createContext(o)
      function i(e) {
        const t = n.useContext(r)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e],
        )
      }
      function a(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          n.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
