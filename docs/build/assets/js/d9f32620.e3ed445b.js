'use strict'
;(self.webpackChunk_adersolutions_sirius_docs =
  self.webpackChunk_adersolutions_sirius_docs || []).push([
  [5557],
  {
    1977: (e, s, o) => {
      o.d(s, { A: () => n })
      const n =
        o.p + 'assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg'
    },
    5494: (e, s, o) => {
      o.r(s),
        o.d(s, {
          assets: () => a,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => l,
          metadata: () => n,
          toc: () => c,
        })
      var n = o(8811),
        t = o(6106),
        r = o(9185)
      const l = {
          slug: 'welcome',
          title: 'Welcome',
          authors: ['slorber', 'yangshun'],
          tags: ['facebook', 'hello', 'docusaurus'],
        },
        i = void 0,
        a = { authorsImageUrls: [void 0, void 0] },
        c = []
      function u(e) {
        const s = {
          a: 'a',
          code: 'code',
          img: 'img',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(s.p, {
              children: [
                (0, t.jsx)(s.a, {
                  href: 'https://docusaurus.io/docs/blog',
                  children: 'Docusaurus blogging features',
                }),
                ' are powered by the ',
                (0, t.jsx)(s.a, {
                  href: 'https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog',
                  children: 'blog plugin',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'Here are a few tips you might find useful.' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Simply add Markdown files (or folders) to the ',
                (0, t.jsx)(s.code, { children: 'blog' }),
                ' directory.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Regular blog authors can be added to ',
                (0, t.jsx)(s.code, { children: 'authors.yml' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children: 'The blog post date can be extracted from filenames, such as:',
            }),
            '\n',
            (0, t.jsxs)(s.ul, {
              children: [
                '\n',
                (0, t.jsx)(s.li, {
                  children: (0, t.jsx)(s.code, { children: '2019-05-30-welcome.md' }),
                }),
                '\n',
                (0, t.jsx)(s.li, {
                  children: (0, t.jsx)(s.code, { children: '2019-05-30-welcome/index.md' }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children: 'A blog post folder can be convenient to co-locate blog post images:',
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children: (0, t.jsx)(s.img, {
                alt: 'Docusaurus Plushie',
                src: o(1977).A + '',
                width: '1500',
                height: '500',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'The blog supports tags as well!' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                (0, t.jsx)(s.strong, { children: "And if you don't want a blog" }),
                ': just delete this directory, and use ',
                (0, t.jsx)(s.code, { children: 'blog: false' }),
                ' in your Docusaurus config.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e)
      }
    },
    8811: (e) => {
      e.exports = JSON.parse(
        '{"permalink":"/blog/welcome","editUrl":"https://github.com/xkoders/sirius/tree/main/docs/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.56,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Ex-Meta Staff Engineer, Co-founder GreatFrontEnd","url":"https://linkedin.com/in/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","linkedin":"https://www.linkedin.com/in/yangshun/","github":"https://github.com/yangshun","newsletter":"https://www.greatfrontend.com"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}}',
      )
    },
    9185: (e, s, o) => {
      o.d(s, { R: () => l, x: () => i })
      var n = o(7378)
      const t = {},
        r = n.createContext(t)
      function l(e) {
        const s = n.useContext(r)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e],
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : l(e.components)),
          n.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
