'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [8737],
  {
    8811: (e) => {
      e.exports = JSON.parse(
        '{"permalink":"/blog/welcome","editUrl":"https://github.com/xkoders/sirius/tree/main/docs/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.56,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Ex-Meta Staff Engineer, Co-founder GreatFrontEnd","url":"https://linkedin.com/in/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","linkedin":"https://www.linkedin.com/in/yangshun/","github":"https://github.com/yangshun","newsletter":"https://www.greatfrontend.com"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}}',
      )
    },
    9185: (e, t, s) => {
      s.d(t, { R: () => i, x: () => a })
      var o = s(7378)
      const n = {},
        r = o.createContext(n)
      function i(e) {
        const t = o.useContext(r)
        return o.useMemo(
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
              ? e.components(n)
              : e.components || n
            : i(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
    9946: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => g,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => u,
        })
      var o = s(8811),
        n = s(6106),
        r = s(9185)
      const i = {
          slug: 'welcome',
          title: 'Welcome',
          authors: ['slorber', 'yangshun'],
          tags: ['facebook', 'hello', 'docusaurus'],
        },
        a = void 0,
        l = { authorsImageUrls: [void 0, void 0] },
        u = []
      function c(e) {
        const t = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.a, {
                  href: 'https://docusaurus.io/docs/blog',
                  children: 'Docusaurus blogging features',
                }),
                ' are powered by the ',
                (0, n.jsx)(t.a, {
                  href: 'https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog',
                  children: 'blog plugin',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'Here are a few tips you might find useful.' }),
          ],
        })
      }
      function g(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e)
      }
    },
  },
])
