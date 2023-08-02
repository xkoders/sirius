import F, { useRef as V, useState as z, useCallback as re, useEffect as B, useMemo as H, createContext as ie, useReducer as zt, useContext as q, useLayoutEffect as Rr, forwardRef as Tr, Fragment as _e, isValidElement as Or, cloneElement as _r, createElement as Lr, createRef as Ot } from "react";
import { createPortal as Ht } from "react-dom";
var at = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Mr() {
  if (_t)
    return Te;
  _t = 1;
  var e = F, t = Symbol.for("react.element"), l = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, p) {
    var d, h = {}, m = null, w = null;
    p !== void 0 && (m = "" + p), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (d in u)
      a.call(u, d) && !i.hasOwnProperty(d) && (h[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        h[d] === void 0 && (h[d] = u[d]);
    return { $$typeof: t, type: c, key: m, ref: w, props: h, _owner: o.current };
  }
  return Te.Fragment = l, Te.jsx = s, Te.jsxs = s, Te;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Ir() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, t = Symbol.for("react.element"), l = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function S(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = v && n[v] || n[y];
      return typeof f == "function" ? f : null;
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(n) {
      {
        for (var f = arguments.length, x = new Array(f > 1 ? f - 1 : 0), g = 1; g < f; g++)
          x[g - 1] = arguments[g];
        L("error", n, x);
      }
    }
    function L(n, f, x) {
      {
        var g = N.ReactDebugCurrentFrame, k = g.getStackAddendum();
        k !== "" && (f += "%s", x = x.concat([k]));
        var _ = x.map(function(P) {
          return String(P);
        });
        _.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, _);
      }
    }
    var U = !1, Q = !1, ee = !1, O = !1, Y = !1, M;
    M = Symbol.for("react.module.reference");
    function K(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === i || Y || n === o || n === p || n === d || O || n === w || U || Q || ee || typeof n == "object" && n !== null && (n.$$typeof === m || n.$$typeof === h || n.$$typeof === s || n.$$typeof === c || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === M || n.getModuleId !== void 0));
    }
    function j(n, f, x) {
      var g = n.displayName;
      if (g)
        return g;
      var k = f.displayName || f.name || "";
      return k !== "" ? x + "(" + k + ")" : x;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function R(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case l:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var f = n;
            return I(f) + ".Consumer";
          case s:
            var x = n;
            return I(x._context) + ".Provider";
          case u:
            return j(n, n.render, "ForwardRef");
          case h:
            var g = n.displayName || null;
            return g !== null ? g : R(n.type) || "Memo";
          case m: {
            var k = n, _ = k._payload, P = k._init;
            try {
              return R(P(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, te = 0, T, G, me, ce, xe, Ie, ve;
    function xt() {
    }
    xt.__reactDisabledLog = !0;
    function lr() {
      {
        if (te === 0) {
          T = console.log, G = console.info, me = console.warn, ce = console.error, xe = console.group, Ie = console.groupCollapsed, ve = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: xt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        te++;
      }
    }
    function ar() {
      {
        if (te--, te === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, n, {
              value: T
            }),
            info: W({}, n, {
              value: G
            }),
            warn: W({}, n, {
              value: me
            }),
            error: W({}, n, {
              value: ce
            }),
            group: W({}, n, {
              value: xe
            }),
            groupCollapsed: W({}, n, {
              value: Ie
            }),
            groupEnd: W({}, n, {
              value: ve
            })
          });
        }
        te < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ze = N.ReactCurrentDispatcher, Ge;
    function Fe(n, f, x) {
      {
        if (Ge === void 0)
          try {
            throw Error();
          } catch (k) {
            var g = k.stack.trim().match(/\n( *(at )?)/);
            Ge = g && g[1] || "";
          }
        return `
` + Ge + n;
      }
    }
    var qe = !1, $e;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      $e = new or();
    }
    function vt(n, f) {
      if (!n || qe)
        return "";
      {
        var x = $e.get(n);
        if (x !== void 0)
          return x;
      }
      var g;
      qe = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Ze.current, Ze.current = null, lr();
      try {
        if (f) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (le) {
              g = le;
            }
            Reflect.construct(n, [], P);
          } else {
            try {
              P.call();
            } catch (le) {
              g = le;
            }
            n.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            g = le;
          }
          n();
        }
      } catch (le) {
        if (le && g && typeof le.stack == "string") {
          for (var E = le.stack.split(`
`), Z = g.stack.split(`
`), $ = E.length - 1, D = Z.length - 1; $ >= 1 && D >= 0 && E[$] !== Z[D]; )
            D--;
          for (; $ >= 1 && D >= 0; $--, D--)
            if (E[$] !== Z[D]) {
              if ($ !== 1 || D !== 1)
                do
                  if ($--, D--, D < 0 || E[$] !== Z[D]) {
                    var J = `
` + E[$].replace(" at new ", " at ");
                    return n.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", n.displayName)), typeof n == "function" && $e.set(n, J), J;
                  }
                while ($ >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        qe = !1, Ze.current = _, ar(), Error.prepareStackTrace = k;
      }
      var Ce = n ? n.displayName || n.name : "", Tt = Ce ? Fe(Ce) : "";
      return typeof n == "function" && $e.set(n, Tt), Tt;
    }
    function sr(n, f, x) {
      return vt(n, !1);
    }
    function ir(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ae(n, f, x) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return vt(n, ir(n));
      if (typeof n == "string")
        return Fe(n);
      switch (n) {
        case p:
          return Fe("Suspense");
        case d:
          return Fe("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return sr(n.render);
          case h:
            return Ae(n.type, f, x);
          case m: {
            var g = n, k = g._payload, _ = g._init;
            try {
              return Ae(_(k), f, x);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, gt = {}, bt = N.ReactDebugCurrentFrame;
    function Be(n) {
      if (n) {
        var f = n._owner, x = Ae(n.type, n._source, f ? f.type : null);
        bt.setExtraStackFrame(x);
      } else
        bt.setExtraStackFrame(null);
    }
    function cr(n, f, x, g, k) {
      {
        var _ = Function.call.bind(De);
        for (var P in n)
          if (_(n, P)) {
            var E = void 0;
            try {
              if (typeof n[P] != "function") {
                var Z = Error((g || "React class") + ": " + x + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              E = n[P](f, P, g, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              E = $;
            }
            E && !(E instanceof Error) && (Be(k), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", x, P, typeof E), Be(null)), E instanceof Error && !(E.message in gt) && (gt[E.message] = !0, Be(k), b("Failed %s type: %s", x, E.message), Be(null));
          }
      }
    }
    var ur = Array.isArray;
    function Ke(n) {
      return ur(n);
    }
    function dr(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, x = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return x;
      }
    }
    function fr(n) {
      try {
        return wt(n), !1;
      } catch {
        return !0;
      }
    }
    function wt(n) {
      return "" + n;
    }
    function yt(n) {
      if (fr(n))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(n)), wt(n);
    }
    var Re = N.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Ct, Je;
    Je = {};
    function hr(n) {
      if (De.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function mr(n) {
      if (De.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function xr(n, f) {
      if (typeof n.ref == "string" && Re.current && f && Re.current.stateNode !== f) {
        var x = R(Re.current.type);
        Je[x] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(Re.current.type), n.ref), Je[x] = !0);
      }
    }
    function vr(n, f) {
      {
        var x = function() {
          jt || (jt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        x.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function gr(n, f) {
      {
        var x = function() {
          Ct || (Ct = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        x.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var br = function(n, f, x, g, k, _, P) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: x,
        props: P,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function wr(n, f, x, g, k) {
      {
        var _, P = {}, E = null, Z = null;
        x !== void 0 && (yt(x), E = "" + x), mr(f) && (yt(f.key), E = "" + f.key), hr(f) && (Z = f.ref, xr(f, k));
        for (_ in f)
          De.call(f, _) && !pr.hasOwnProperty(_) && (P[_] = f[_]);
        if (n && n.defaultProps) {
          var $ = n.defaultProps;
          for (_ in $)
            P[_] === void 0 && (P[_] = $[_]);
        }
        if (E || Z) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          E && vr(P, D), Z && gr(P, D);
        }
        return br(n, E, Z, k, g, Re.current, P);
      }
    }
    var Xe = N.ReactCurrentOwner, Nt = N.ReactDebugCurrentFrame;
    function je(n) {
      if (n) {
        var f = n._owner, x = Ae(n.type, n._source, f ? f.type : null);
        Nt.setExtraStackFrame(x);
      } else
        Nt.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function et(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Et() {
      {
        if (Xe.current) {
          var n = R(Xe.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function yr(n) {
      {
        if (n !== void 0) {
          var f = n.fileName.replace(/^.*[\\\/]/, ""), x = n.lineNumber;
          return `

Check your code at ` + f + ":" + x + ".";
        }
        return "";
      }
    }
    var St = {};
    function jr(n) {
      {
        var f = Et();
        if (!f) {
          var x = typeof n == "string" ? n : n.displayName || n.name;
          x && (f = `

Check the top-level render call using <` + x + ">.");
        }
        return f;
      }
    }
    function Pt(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var x = jr(f);
        if (St[x])
          return;
        St[x] = !0;
        var g = "";
        n && n._owner && n._owner !== Xe.current && (g = " It was passed a child from " + R(n._owner.type) + "."), je(n), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, g), je(null);
      }
    }
    function kt(n, f) {
      {
        if (typeof n != "object")
          return;
        if (Ke(n))
          for (var x = 0; x < n.length; x++) {
            var g = n[x];
            et(g) && Pt(g, f);
          }
        else if (et(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var k = S(n);
          if (typeof k == "function" && k !== n.entries)
            for (var _ = k.call(n), P; !(P = _.next()).done; )
              et(P.value) && Pt(P.value, f);
        }
      }
    }
    function Cr(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var x;
        if (typeof f == "function")
          x = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === h))
          x = f.propTypes;
        else
          return;
        if (x) {
          var g = R(f);
          cr(x, n.props, "prop", g, n);
        } else if (f.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var k = R(f);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(n) {
      {
        for (var f = Object.keys(n.props), x = 0; x < f.length; x++) {
          var g = f[x];
          if (g !== "children" && g !== "key") {
            je(n), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), je(null);
            break;
          }
        }
        n.ref !== null && (je(n), b("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Rt(n, f, x, g, k, _) {
      {
        var P = K(n);
        if (!P) {
          var E = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = yr(k);
          Z ? E += Z : E += Et();
          var $;
          n === null ? $ = "null" : Ke(n) ? $ = "array" : n !== void 0 && n.$$typeof === t ? ($ = "<" + (R(n.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof n, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, E);
        }
        var D = wr(n, f, x, k, _);
        if (D == null)
          return D;
        if (P) {
          var J = f.children;
          if (J !== void 0)
            if (g)
              if (Ke(J)) {
                for (var Ce = 0; Ce < J.length; Ce++)
                  kt(J[Ce], n);
                Object.freeze && Object.freeze(J);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(J, n);
        }
        return n === a ? Nr(D) : Cr(D), D;
      }
    }
    function Er(n, f, x) {
      return Rt(n, f, x, !0);
    }
    function Sr(n, f, x) {
      return Rt(n, f, x, !1);
    }
    var Pr = Sr, kr = Er;
    Oe.Fragment = a, Oe.jsx = Pr, Oe.jsxs = kr;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? at.exports = Mr() : at.exports = Ir();
var r = at.exports;
function Fr({ children: e, className: t, as: l = "section" }) {
  return /* @__PURE__ */ r.jsx(l, { className: ["flex flex-wrap gap-5 ", t].join(" "), children: e });
}
function $r({
  children: e,
  className: t,
  primary: l,
  secondary: a,
  oneTwo: o,
  oneThird: i,
  oneFourth: s
}) {
  const c = [
    t,
    l ? "w-[calc(66.6666%-10px)] peer/primary" : a ? "" : "peer-first/primary:w-[calc(33.3333%-10px)]",
    a ? "w-[calc(33.3333%-10px)] peer/secondary" : l ? "" : "peer-first/secondary:w-[calc(66.6666%-10px)]",
    o ? "w-1/2" : "",
    i ? "w-1/3" : "",
    s ? "w-1/4" : "",
    !a && !l && !o && !i && !s ? "w-full" : ""
  ];
  return /* @__PURE__ */ r.jsx("article", { className: c.filter(Boolean).join(" "), children: e });
}
function Ar({
  children: e,
  className: t = "",
  title: l,
  description: a
}) {
  return /* @__PURE__ */ r.jsxs("article", { className: ["flex w-full gap-5", t].join(" "), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "w-1/3", children: [
      l && /* @__PURE__ */ r.jsx("h3", { className: "text-[22px] font-medium", children: l }),
      a && /* @__PURE__ */ r.jsx("h4", { className: "text-base opacity-75", children: a })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "w-2/3", children: e })
  ] });
}
const Nl = Object.assign(Fr, { Section: $r, AnnotatedSection: Ar });
function C(...e) {
  return e.filter(Boolean).join(" ");
}
function de(e) {
  let t = [], l = JSON.stringify(e, function(a, o) {
    if (typeof o == "object" && o !== null) {
      if (t.indexOf(o) !== -1)
        return;
      t.push(o);
    }
    return o;
  });
  return t = null, l;
}
const Vt = ({
  indeterminate: e = !1,
  label: t,
  disabled: l = !1,
  name: a,
  value: o,
  onChange: i,
  checked: s,
  className: c
}) => {
  const u = V(null), [p] = z((a || "sirius") + performance.now()), d = re(
    (h) => {
      i && i(h.target.checked, h);
    },
    [i]
  );
  return B(() => {
    u.current && (u.current.indeterminate = e);
  }, [u, e]), /* @__PURE__ */ r.jsxs("div", { className: C("flex items-center justify-center", c), children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "checkbox",
        className: "inp-cbx hidden",
        name: a,
        value: o,
        checked: s,
        onChange: d,
        disabled: l,
        ref: u,
        id: p
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "label",
      {
        htmlFor: p,
        className: C(
          "cbx cursor-pointer select-none flex items-center text-sm gap-2",
          "checkbox",
          l ? "disabled" : "",
          e ? "checkbox-indeterminate" : ""
        ),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "relative w-5 h-5 rounded align-middle scale-100  border hover:border-orange-500 transition-all border-gray-400", children: /* @__PURE__ */ r.jsx(
            "svg",
            {
              className: C(
                e ? "indeterminate  stroke-orange-500" : "",
                "transition-all duration-300 delay-100 absolute inset-0 fill-none "
              ),
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "white",
              strokeDasharray: 26,
              strokeDashoffset: 26,
              children: e ? /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12h-15" }) : /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })
            }
          ) }),
          t && /* @__PURE__ */ r.jsx("span", { className: "flex-1", children: t })
        ]
      }
    )
  ] });
};
function El({
  className: e = "",
  name: t,
  horizontal: l,
  items: a = [],
  defaultChecked: o,
  onChange: i
}) {
  return /* @__PURE__ */ r.jsxs("fieldset", { children: [
    /* @__PURE__ */ r.jsx("legend", { className: "sr-only", children: t }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: C(
          e,
          l ? "flex-row" : "flex-col",
          "flex gap-y-5 gap-x-6"
        ),
        children: a.map((s, c) => /* @__PURE__ */ r.jsxs("div", { className: "relative flex items-start", children: [
          /* @__PURE__ */ r.jsx("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ r.jsx(
            "input",
            {
              id: `${t}-${c}`,
              "aria-describedby": `${t}-${c}-description`,
              name: t,
              type: "radio",
              value: s,
              defaultChecked: de(o) === de(s),
              className: "h-5 w-5 border-gray-100 text-indigo-600 focus:ring-indigo-600",
              onChange: () => i == null ? void 0 : i(s)
            }
          ) }),
          /* @__PURE__ */ r.jsxs("div", { className: "ml-3 text-sm leading-6", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${t}-${c}`, className: "font-medium text-gray-900", children: s.label }),
            /* @__PURE__ */ r.jsx("p", { id: `${t}-${c}-description`, className: "text-gray-500 text-xs", children: s.description })
          ] })
        ] }, c))
      }
    )
  ] });
}
function Sl({ message: e, className: t = "" }) {
  return e ? /* @__PURE__ */ r.jsxs("div", { className: C("text-red-600 flex gap-1 text-xs items-center mt-1", t), children: [
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /* @__PURE__ */ r.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("p", { children: e })
  ] }) : null;
}
const Wt = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10"
}, Dr = {
  sm: "h-3",
  md: "h-4",
  lg: "h-5",
  xl: "h-6",
  "2xl": "h-7",
  "3xl": "h-8",
  "4xl": "h-9",
  "5xl": "h-10"
}, it = {
  full: "rounded-full",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  "5xl": "rounded-5xl"
}, Br = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  "3xl": "shadow-3xl",
  "4xl": "shadow-4xl",
  "5xl": "shadow-5xl"
};
function Pl({ lines: e = 3, className: t = "", gap: l = 3 }) {
  return /* @__PURE__ */ r.jsx("div", { className: ["grid animate-pulse", t, Wt[l]].filter(Boolean).join(" "), children: Array.from({ length: e }).map((a, o) => /* @__PURE__ */ r.jsx("div", { className: "h-2 rounded-lg bg-gray-300 flex-1 last:w-2/3" }, o)) });
}
function kl({
  size: e = "md",
  rounded: t = "md",
  width: l = 20,
  className: a = "md"
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      style: { width: `${l}%` },
      className: ["inline-block bg-gray-300 animate-pulse", Dr[e], it[t], a].filter(Boolean).join(" ")
    }
  );
}
const zr = {
  info: "bg-blue-100 text-blue-600 border border-blue-300",
  warning: "bg-yellow-100 text-yellow-600 border border-yellow-300",
  critical: "bg-red-100 text-red-600 border border-red-300",
  success: "bg-green-100 text-green-600 border border-green-300",
  pending: "bg-gray-100 text-gray-600 border border-gray-300",
  default: "bg-white text-gray-600 border border-gray-300"
}, Hr = {
  incomplete: /* @__PURE__ */ r.jsx("circle", { cx: "100", cy: "100", r: "89.5", stroke: "black", strokeWidth: "21" }),
  halfComplete: /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M101 21.0062C144.17 21.5417 179 56.7033 179 100C179 143.297 144.17 178.458 101 178.994L101 21.0062ZM101 0.00489366C155.768 0.541436 200 45.1052 200 100C200 154.895 155.768 199.459 101 199.995L101 200C100.833 200 100.667 200 100.5 199.999C100.333 200 100.167 200 100 200C44.7715 200 -1.95703e-06 155.228 -4.37114e-06 100C-6.78525e-06 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06C100.167 -4.37843e-06 100.333 0.000407602 100.5 0.00121631C100.667 0.000407587 100.833 -4.40756e-06 101 -4.41485e-06L101 0.00489366Z",
      fill: "currentColor"
    }
  ),
  complete: /* @__PURE__ */ r.jsx("circle", { cx: "100", cy: "100", r: "100", fill: "currentColor" }),
  dashed: /* @__PURE__ */ r.jsx(
    "circle",
    {
      cx: "100",
      cy: "100",
      r: "89.5",
      stroke: "currentColor",
      strokeWidth: "21",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "50 50"
    }
  )
};
function Rl({ children: e, status: t = "default", type: l, className: a, ...o }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C(
        a,
        zr[t],
        "inline-flex gap-1 items-center px-2 py-0.5 rounded-full text-xs font-medium"
      ),
      children: [
        (!!l || !!o.icon) && /* @__PURE__ */ r.jsxs("div", { className: "-ml-1 flex", children: [
          l && /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 200 200", className: "w-2.5", fill: "none", children: Hr[l] }),
          o.icon && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(o.icon, { className: "w-4 h-4 fill-current" }) })
        ] }),
        e
      ]
    }
  );
}
const Vr = {
  base: "drop-shadow",
  sm: "drop-shadow-sm",
  md: "drop-shadow-md",
  lg: "drop-shadow-lg",
  xl: "drop-shadow-xl"
}, Wr = {
  default: "text-base",
  headingXl: "text-xl",
  heading2xl: "text-2xl",
  heading3xl: "text-3xl",
  heading4xl: "text-4xl",
  heading5xl: "text-5xl",
  heading6xl: "text-6xl",
  heading7xl: "text-7xl",
  bodyXS: "text-xs",
  bodySm: "text-sm",
  bodyMd: "text-md",
  bodyLg: "text-lg"
}, Ur = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5"
}, Yr = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, Zr = {
  info: "text-blue-600",
  success: "text-green-500",
  critical: "text-red-500",
  warning: "text-yellow-500",
  subdued: "text-gray-500",
  "text-inverse": "invert"
};
function Ut({
  as: e = "p",
  children: t,
  className: l,
  shadow: a,
  variant: o = "default",
  fontWeight: i = "regular",
  color: s,
  disabled: c,
  lineClamp: u
}) {
  return /* @__PURE__ */ r.jsx(
    e,
    {
      className: C(
        l,
        Wr[o],
        a && Vr[a],
        u && Ur[u],
        c ? "opacity-50 cursor-not-allowed" : "",
        Yr[i],
        s && Zr[s]
      ),
      disabled: c,
      children: t
    }
  );
}
const tt = {
  info: {
    icon: /* @__PURE__ */ r.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
      }
    ),
    className: "bg-blue-100 text-blue-600 border border-blue-300"
  },
  warning: {
    icon: /* @__PURE__ */ r.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
      }
    ),
    className: "bg-orange-50 text-orange-600 border border-orange-300"
  },
  critical: {
    icon: /* @__PURE__ */ r.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
      }
    ),
    className: "bg-red-100 text-red-600 border border-red-300"
  },
  success: {
    icon: /* @__PURE__ */ r.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
      }
    ),
    className: "bg-green-100 text-green-600 border border-green-300"
  },
  pending: {
    icon: /* @__PURE__ */ r.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",
        clipRule: "evenodd"
      }
    ),
    className: "bg-gray-100 text-gray-600 border border-gray-300"
  },
  default: {
    icon: null,
    className: "text-gray-600 border border-gray-300"
  }
};
function Tl({
  children: e,
  as: t = "div",
  className: l,
  onDismiss: a,
  title: o,
  status: i = "default"
}) {
  return /* @__PURE__ */ r.jsxs(
    t,
    {
      className: C(
        l || "",
        tt[i].className,
        "w-full flex gap-3 p-3 rounded-md  relative"
      ),
      children: [
        tt[i].icon && /* @__PURE__ */ r.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "w-4 h-4",
            children: tt[i].icon
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { children: [
          o && /* @__PURE__ */ r.jsx(Ut, { as: "h5", variant: "bodySm", fontWeight: "semibold", className: "-mt-0.5 mb-0.5", children: o }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs opacity-75", children: e })
        ] }),
        /* @__PURE__ */ r.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            onClick: a,
            className: "w-6 h-6 p-1 absolute right-1 top-1 hover:bg-black/10 rounded-full",
            children: /* @__PURE__ */ r.jsx("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
          }
        )
      ]
    }
  );
}
const Ne = ({
  children: e,
  className: t,
  duration: l = 200,
  as: a = "div",
  type: o = "fade-in",
  timing: i = "ease-out"
}) => {
  const s = {
    "--x-duration": `${l}ms`,
    "--x-timing": i
  };
  return /* @__PURE__ */ r.jsx(a, { style: s, className: C("animate", t, o), children: e });
}, Gr = {
  large: "h-8 w-8",
  medium: "h-6 w-6",
  small: "h-5 w-5",
  none: ""
};
function qr({ className: e = "", size: t = "medium" }) {
  return /* @__PURE__ */ r.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: C(e, Gr[t], "animate-spin"),
      viewBox: "0 0 100 100",
      children: /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "10",
          r: "35",
          strokeDasharray: "164.93361431346415 56.97787143782138",
          transform: "matrix(1,0,0,1,0,0)"
        }
      )
    }
  );
}
const Kr = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end"
}, Jr = {
  large: "text-lg px-6 py-2",
  medium: "text-sm px-4 py-1.5 !h-9",
  small: "text-[14px] px-2 py-1",
  slim: "text-xs px-2 py-px !h-6",
  none: ""
}, Mt = {
  large: "h-6 w-6 -ml-3 mr-3",
  medium: "h-5 w-5 -ml-2 mr-2",
  small: "h-4 w-4 -ml-1.5 mr-1.5",
  slim: "h-3 w-3 -ml-1 mr-1",
  none: "h-full w-full"
}, Xr = {
  default: "bg-white border border-gray-400 disabled:bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100",
  primary: "bg-indigo-600 border-indigo-900 text-white hover:bg-indigo-700",
  success: "bg-green-600 border-green-800 text-white hover:bg-green-700",
  warning: "bg-orange-400 border-orange-600 text-white hover:bg-orange-500",
  danger: "bg-red-600 border-red-800 text-white hover:bg-red-700",
  info: "bg-blue-600 border-blue-800 text-white hover:bg-blue-700",
  ghost: "shadow-none text-slate-700 hover:bg-slate-100",
  subdued: "text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300",
  dark: "text-gray-100 hover:text-white bg-gray-950 hover:bg-gray-900",
  none: ""
}, Qr = {
  default: "text-gray-900 hover:bg-gray-200",
  primary: "text-indigo-600 hover:bg-indigo-100",
  success: "text-green-600 hover:bg-green-100",
  warning: "text-orange-600 hover:bg-orange-100",
  danger: "text-red-600 hover:bg-red-100",
  info: "text-blue-600 hover:bg-blue-100",
  dark: "text-black hover:bg-gray-100",
  ghost: "text-slate-700",
  subdued: "hover:bg-gray-200 !border-gray-300",
  none: ""
}, X = ({
  children: e,
  onClick: t,
  className: l,
  submit: a,
  disabled: o,
  loading: i,
  outline: s,
  link: c,
  target: u,
  url: p,
  rel: d,
  rounded: h = "md",
  alignment: m = "center",
  fullwidth: w,
  variant: v = "default",
  size: y = "medium",
  ...S
}) => {
  const N = re(() => {
    t == null || t();
  }, [t]), b = p ? "a" : "button";
  return /* @__PURE__ */ r.jsxs(
    b,
    {
      className: C(
        "h-fit flex items-center  transition-colors active:opacity-70",
        w ? "w-full" : "",
        o ? "!opacity-50 cursor-not-allowed pointer-events-none select-none" : "",
        Jr[y],
        Kr[m],
        it[h],
        s || c ? Qr[v] : Xr[v],
        s && !c ? " border border-current" : "",
        s && v === "default" ? "!border-gray-400" : "",
        c ? "!bg-transparent  hover:underline" : "",
        l
      ),
      ...p ? { href: p || "#" } : {},
      type: a ? "submit" : "button",
      target: u,
      rel: d,
      disabled: o,
      onClick: N,
      children: [
        i ? /* @__PURE__ */ r.jsx(qr, { className: C(Mt[y], "fill-current"), size: "none" }) : S.icon && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(S.icon, { className: C(Mt[y], "fill-current") }) }),
        e
      ]
    }
  );
}, en = {
  success: "bg-green-100 text-green-700 border-green-300 shadow-green-500",
  error: "bg-red-100 text-red-700 border-red-300 shadow-red-500",
  info: "bg-blue-100 text-blue-700 border-blue-300 shadow-blue-500",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-300 shadow-yellow-500",
  default: "bg-gray-900 text-white"
};
function tn({
  content: e,
  className: t,
  type: l = "default",
  duration: a = 4500,
  onDismiss: o = () => {
  },
  action: i
}) {
  const [s, c] = z(!1);
  return B(() => {
    setTimeout(() => {
      c(!0);
    }, a);
  }), s ? null : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C(
        t,
        s ? "bottom-0" : "bottom-10",
        "shadow-xl rounded-md p-2 py-3 absolute transition-all z-30 left-1/2 -translate-x-1/2 w-fit flex gap-2 items-center md:min-w-[20rem]",
        en[l]
      ),
      onClick: o,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "flex-1", children: e }),
        i && /* @__PURE__ */ r.jsx(
          X,
          {
            link: !0,
            size: "small",
            icon: i.icon,
            url: i.url,
            rel: i.rel,
            target: i.target,
            variant: i.variant || "none",
            disabled: i.disabled,
            loading: i.loading,
            onClick: i.onAction,
            children: i.label
          }
        ),
        /* @__PURE__ */ r.jsx("button", { onClick: o, className: "hover:opacity-75 ", children: /* @__PURE__ */ r.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "w-5 h-5",
            children: /* @__PURE__ */ r.jsx("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
          }
        ) })
      ]
    }
  );
}
function Ol({ items: e, className: t = "", gap: l = 3 }) {
  return e != null && e.length ? /* @__PURE__ */ r.jsx("ul", { className: C("flex flex-col w-full text-xs", t, Wt[l]), children: e.map((a, o) => /* @__PURE__ */ r.jsxs("li", { className: "flex gap-2 items-center", children: [
    a.icon && /* @__PURE__ */ r.jsx(a.icon, { className: "w-4 h-4 fill-current" }),
    /* @__PURE__ */ r.jsx("p", { children: a.description })
  ] }, o)) }) : null;
}
function be({
  children: e,
  className: t,
  as: l = "div",
  activator: a,
  disabled: o
}) {
  const i = V(null), [s, c] = z(!1);
  return B(() => {
    const u = (p) => {
      i.current && !i.current.contains(p.target) && c(!1);
    };
    return document.addEventListener("click", u), () => {
      document.removeEventListener("click", u);
    };
  }, []), /* @__PURE__ */ r.jsxs(
    l,
    {
      ref: i,
      className: C(t, "relative inline-block text-left"),
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: C(
              o ? "pointer-events-none opacity-75" : "",
              "focus:outline-none"
            ),
            onClick: () => c((u) => !u),
            children: a
          }
        ),
        /* @__PURE__ */ r.jsx(Ne, { type: "slide-down", timing: "ease", className: "z-10", children: s && /* @__PURE__ */ r.jsx("div", { className: "absolute z-50 right-0 mt-1 min-w-[10rem] origin-top-right rounded-md bg-white shadow-lg border ", children: e }) })
      ]
    }
  );
}
function rn({
  tabs: e,
  className: t,
  children: l,
  canCreateTab: a,
  filled: o,
  selected: i,
  onChange: s
}) {
  const c = H(() => i || 0, [i, e]);
  return /* @__PURE__ */ r.jsxs("div", { className: C(t, "flex-1"), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "sm:hidden text-sm flex w-full", children: [
      /* @__PURE__ */ r.jsx("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          id: "tabs",
          name: "tabs",
          className: "block w-full rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 border p-2 shadow-sm",
          defaultValue: i,
          children: e.map((u, p) => /* @__PURE__ */ r.jsx("option", { value: p, children: u.label }, p))
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ r.jsxs("nav", { className: "flex gap-3 ", "aria-label": "Tabs", children: [
      e.map((u, p) => /* @__PURE__ */ r.jsx(
        "div",
        {
          className: C(
            c === p ? "bg-orange-100 text-orange-500" : "text-gray-800 hover:bg-gray-100 transition-all",
            "rounded-md px-3 h-8 text-xs font-medium cursor-pointer flex items-center",
            o ? "flex-1 text-center justify-center" : ""
          ),
          onClick: () => s == null ? void 0 : s(p, u),
          children: u.label
        },
        p
      )),
      a && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: C(
            "text-gray-800 hover:bg-gray-100 transition-all rounded-md px-2 h-8"
          ),
          children: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: "w-5 h-5",
              children: /* @__PURE__ */ r.jsx("path", { d: "M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" })
            }
          )
        }
      )
    ] }) })
  ] });
}
function nn({ value: e, placeholder: t, onChange: l, className: a }) {
  const [o, i] = z(!1), s = () => {
    setTimeout(() => {
      l == null || l(""), i(!1);
    }, 100);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: C(a, "relative"), children: [
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: "pointer-events-none absolute left-2 top-1/2 -mt-2.5 h-5 w-5  text-gray-600",
        "aria-hidden": "true",
        children: /* @__PURE__ */ r.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
            clipRule: "evenodd"
          }
        )
      }
    ),
    (o || !!e) && /* @__PURE__ */ r.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: "absolute right-2 top-1/2 -mt-2.5 h-5 w-5 p-px text-gray-600 cursor-pointer",
        onClick: () => l == null ? void 0 : l(""),
        children: /* @__PURE__ */ r.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
            clipRule: "evenodd"
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "text",
        className: "h-8 rounded-md w-full border-0 bg-transparent pl-9 pr-4 text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm",
        placeholder: t,
        name: "q",
        autoFocus: !0,
        value: e,
        onClick: () => i(!0),
        onBlur: s,
        onChange: (c) => l == null ? void 0 : l(c.target.value)
      }
    )
  ] });
}
const _l = ({ onChange: e, className: t, sortOptions: l, filters: a }) => {
  const [o, i] = z(0), [s, c] = z(!1), [u, p] = z([]), [d, h] = z(a || []), [m, w] = z(""), v = re(
    (b, L) => {
      i(b);
    },
    [e]
  ), y = re((b) => {
    p((L) => [...L, b]), h((L) => L.filter(({ key: U }) => U !== b.key));
  }, []), S = re(() => {
    p([]), a && h(a);
  }, []), N = [
    { label: "My Account" },
    { label: "Company" },
    { label: "Team Members" },
    { label: "Billing" }
  ];
  return /* @__PURE__ */ r.jsxs("section", { className: C("flex flex-col", t), children: [
    /* @__PURE__ */ r.jsxs("article", { className: "p-1.5 flex gap-2", children: [
      /* @__PURE__ */ r.jsx(Ne, { className: "flex-1", children: s ? /* @__PURE__ */ r.jsx(
        nn,
        {
          className: "flex-1",
          placeholder: "Searching for...",
          onChange: w,
          value: m
        }
      ) : /* @__PURE__ */ r.jsx(
        rn,
        {
          tabs: N,
          onChange: v,
          selected: o,
          className: "flex-1",
          canCreateTab: !0
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => c(!s),
          className: C(
            s ? "px-2 " : "w-12 border border-gray-400/90 shadow-sm rounded-md hover:bg-gray-100 ",
            "h-8 flex justify-center items-center trans "
          ),
          children: /* @__PURE__ */ r.jsx(Ne, { className: "flex", as: "p", children: s ? /* @__PURE__ */ r.jsx(Ut, { color: "info", variant: "bodySm", as: "span", children: "cancel" }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "w-4 h-4",
                children: /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
                    clipRule: "evenodd"
                  }
                )
              }
            ),
            /* @__PURE__ */ r.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "w-4 h-4",
                children: /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          ] }) })
        }
      ),
      !!l && /* @__PURE__ */ r.jsx(
        be,
        {
          activator: /* @__PURE__ */ r.jsx("button", { className: "h-8 w-8 border border-gray-400/90 shadow-sm rounded-md flex justify-center items-center hover:bg-gray-100", children: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              className: "w-4 h-4",
              children: /* @__PURE__ */ r.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
                  clipRule: "evenodd"
                }
              )
            }
          ) }),
          children: l
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(Ne, { type: "collapsible", duration: 500, timing: "ease-out", children: s && !!(a != null && a.length) && /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs("div", { className: "px-2 py-3 h-full flex flex-wrap items-center gap-2 text-gray-950 border-t", children: [
      u && u.map((b, L) => /* @__PURE__ */ r.jsx(
        be,
        {
          activator: /* @__PURE__ */ r.jsx("button", { className: "text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1", children: b.label }),
          children: b.filter
        },
        L
      )),
      /* @__PURE__ */ r.jsx(
        be,
        {
          disabled: !d.length,
          activator: /* @__PURE__ */ r.jsxs("button", { className: "text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1", children: [
            /* @__PURE__ */ r.jsx("span", { children: " Add filter" }),
            /* @__PURE__ */ r.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "w-5 h-5 -mr-1.5",
                children: /* @__PURE__ */ r.jsx("path", { d: "M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" })
              }
            )
          ] }),
          children: /* @__PURE__ */ r.jsx("ul", { className: "p-2 text-sm flex flex-col gap-px", children: d == null ? void 0 : d.map((b, L) => /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "py-2 px-2 rounded-md hover:bg-gray-100",
              onClick: () => y(b),
              children: b.label
            },
            L
          )) })
        }
      ),
      !!u.length && /* @__PURE__ */ r.jsx(X, { variant: "info", link: !0, size: "slim", onClick: S, children: "Clear All" })
    ] }) }) })
  ] });
}, ln = ({ title: e }) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(X, { children: [
  /* @__PURE__ */ r.jsx("span", { children: e }),
  /* @__PURE__ */ r.jsx("span", { className: "-mr-2.5 ml-1", children: /* @__PURE__ */ r.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "w-5 h-5",
      children: /* @__PURE__ */ r.jsx("path", { d: "M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" })
    }
  ) })
] }) }), an = () => /* @__PURE__ */ r.jsx(X, { outline: !0, children: /* @__PURE__ */ r.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "w-5 h-5 -mx-2",
    children: /* @__PURE__ */ r.jsx("path", { d: "M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" })
  }
) });
function Ll({
  children: e,
  className: t = "",
  title: l,
  backAction: a,
  subtitle: o,
  primaryAction: i,
  secondaryActions: s,
  actionGroups: c,
  fullWidth: u
}) {
  return /* @__PURE__ */ r.jsxs(
    "main",
    {
      className: C(t, u ? "w-full" : "max-w-5xl", "mx-auto p-6 w-full"),
      children: [
        /* @__PURE__ */ r.jsxs("section", { className: "flex gap-3 md:gap-6 mb-5 text-[15px]", children: [
          /* @__PURE__ */ r.jsxs(
            "article",
            {
              className: C(o ? "items-start" : "items-center", "flex-1 flex gap-3"),
              children: [
                a && /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "shadow-sm border border-gray-400 hover:bg-gray-200 font-medium flex justify-center items-center w-10 h-10 rounded-md",
                    onClick: a.onAction,
                    title: a.label || "Back",
                    children: "←"
                  }
                ),
                /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
                  l && /* @__PURE__ */ r.jsx("h1", { className: "text-[22px] font-medium leading-[1]", children: l }),
                  o && /* @__PURE__ */ r.jsx("h2", { className: "text-base opacity-75 mt-1", children: o })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs("article", { className: "flex gap-3", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "hidden lg:flex gap-3", children: [
              s && s.map(
                ({ label: p, onAction: d, target: h, url: m, disabled: w, loading: v, variant: y = "ghost", rel: S }, N) => /* @__PURE__ */ r.jsx(
                  X,
                  {
                    className: "hover:text-indigo-700 font-medium py-2 h-fit rounded-md",
                    onClick: d,
                    disabled: w,
                    loading: v,
                    variant: y,
                    url: m,
                    rel: S,
                    target: h,
                    children: p
                  },
                  N
                )
              ),
              c && c.map(({ title: p, actions: d }, h) => /* @__PURE__ */ r.jsx(be, { activator: /* @__PURE__ */ r.jsx(ln, { title: p }), children: /* @__PURE__ */ r.jsx("ul", { className: "  focus:outline-none p-2 whitespace-nowrap min-w-[12rem]", children: d.map(
                ({ label: m, onAction: w, target: v, url: y, disabled: S, loading: N, variant: b = "ghost", rel: L }, U) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
                  X,
                  {
                    disabled: S,
                    onClick: w,
                    url: y,
                    rel: L,
                    target: v,
                    variant: b,
                    loading: N,
                    fullwidth: !0,
                    alignment: "start",
                    size: "none",
                    className: "p-2",
                    children: m
                  }
                ) }, U)
              ) }) }, h))
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "block lg:hidden", children: /* @__PURE__ */ r.jsx(be, { activator: /* @__PURE__ */ r.jsx(an, {}), children: /* @__PURE__ */ r.jsxs("ul", { className: "py-2", children: [
              s && s.map(
                ({ label: p, onAction: d, target: h, url: m, disabled: w, loading: v, variant: y = "ghost", rel: S }, N) => /* @__PURE__ */ r.jsx("li", { className: "px-2", children: /* @__PURE__ */ r.jsx(
                  X,
                  {
                    disabled: w,
                    onClick: d,
                    url: m,
                    rel: S,
                    target: h,
                    variant: y,
                    loading: v,
                    fullwidth: !0,
                    alignment: "start",
                    size: "small",
                    children: p
                  }
                ) }, N)
              ),
              c && c.map(({ title: p, actions: d }, h) => /* @__PURE__ */ r.jsxs("li", { children: [
                /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium px-4 py-2.5 mt-2 border-t w-full flex", children: p }),
                /* @__PURE__ */ r.jsx("ul", { className: "focus:outline-none px-2 whitespace-nowrap min-w-[12rem]", children: d.map(
                  ({
                    label: m,
                    onAction: w,
                    target: v,
                    url: y,
                    disabled: S,
                    loading: N,
                    variant: b = "ghost",
                    rel: L
                  }, U) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
                    X,
                    {
                      disabled: S,
                      onClick: w,
                      url: y,
                      rel: L,
                      target: v,
                      variant: b,
                      loading: N,
                      fullwidth: !0,
                      alignment: "start",
                      size: "small",
                      className: "",
                      children: m
                    }
                  ) }, U)
                ) })
              ] }, h))
            ] }) }) }),
            i && /* @__PURE__ */ r.jsx(X, { onClick: i.onAction, variant: "primary", children: i.label })
          ] })
        ] }),
        e
      ]
    }
  );
}
const on = Object.assign(Br, { colored: "colored" });
function sn({
  as: e = "div",
  children: t,
  rounded: l = "md",
  shadow: a = "none",
  className: o = "",
  sectionned: i = !1,
  ...s
}) {
  const c = e || "div";
  return /* @__PURE__ */ r.jsxs(
    c,
    {
      className: [
        it[l],
        on[a === "none" && i ? "md" : a],
        i ? "px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 bg-white" : "",
        o || "",
        "w-full relative"
      ].join(" "),
      ...s,
      children: [
        a === "colored" && /* @__PURE__ */ r.jsx("span", { className: "bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 absolute z-[-1] inset-0 blur-[6px] opacity-90 m-1 mt-2" }),
        t
      ]
    }
  );
}
const cn = {
  extraTight: "gap-1",
  tight: "gap-2",
  baseTight: "gap-4",
  loose: "gap-8",
  extraLoose: "gap-12",
  none: "gap-0"
}, un = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
};
function Ml({
  children: e,
  className: t,
  vertical: l,
  spacing: a = "baseTight",
  alignment: o,
  wrap: i,
  as: s = "div"
}) {
  return /* @__PURE__ */ r.jsx(
    s,
    {
      className: [
        "flex",
        l && "flex-col",
        i && "flex-wrap",
        a && cn[a],
        o && un[o],
        t
      ].filter(Boolean).join(" "),
      children: e
    }
  );
}
function Il({ children: e, className: t, heading: l, ...a }) {
  const o = H(
    () => typeof a.thumb == "string" ? /* @__PURE__ */ r.jsx("img", { src: a.thumb, alt: l || "", className: "w-20 object-contain" }) : /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 block", children: a.thumb }),
    [a.thumb]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C(
        "flex flex-col items-center justify-center text-center my-5",
        t
      ),
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "flex", children: o }),
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg text-center mt-4 mb-2 font-medium text-gray-800", children: l }),
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-gray-500 max-w-xl ", children: e })
      ]
    }
  );
}
function Fl({
  children: e,
  className: t,
  title: l,
  url: a,
  promotedAction: o,
  popoverActions: i,
  primaryAction: s
}) {
  const c = /* @__PURE__ */ r.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-6 h-6 hover:text-gray-950 text-gray-600 cursor-pointer",
      children: /* @__PURE__ */ r.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        }
      )
    }
  );
  return /* @__PURE__ */ r.jsxs(
    sn,
    {
      className: C(t, "bg-white flex flex-col lg:flex-row overflow-hidden"),
      rounded: "md",
      shadow: "md",
      as: "section",
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "relative aspect-[16/9]", children: /* @__PURE__ */ r.jsx("img", { src: a, alt: "", className: "aspect-video object-cover flex h-full w-full" }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 px-5 py-2.5", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex mb-2", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-medium flex-1", children: l }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1 items-center -mt-1.5", children: [
              o && /* @__PURE__ */ r.jsx(
                X,
                {
                  link: !0,
                  disabled: o.disabled,
                  loading: o.loading,
                  icon: o.icon,
                  onClick: o.onAction,
                  variant: "info",
                  size: "small",
                  className: "-mt-0.5",
                  children: o.label
                }
              ),
              !!(i != null && i.length) && /* @__PURE__ */ r.jsx(be, { activator: c, children: /* @__PURE__ */ r.jsx("div", { className: "p-3 flex flex-col gap-1", children: i.map(
                ({ label: u, onAction: p, target: d, url: h, disabled: m, variant: w = "ghost", rel: v }, y) => /* @__PURE__ */ r.jsx(
                  X,
                  {
                    disabled: m,
                    onClick: p,
                    url: h,
                    target: d,
                    rel: v,
                    variant: w,
                    fullwidth: !0,
                    alignment: "start",
                    children: u
                  },
                  y
                )
              ) }) })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-sm text-gray-600", children: e }),
          !!(s != null && s.length) && /* @__PURE__ */ r.jsx("div", { className: "flex gap-2 mt-4", children: s.map(
            ({ label: u, onAction: p, target: d, url: h, disabled: m, variant: w = "default", rel: v }, y) => /* @__PURE__ */ r.jsx(
              X,
              {
                disabled: m,
                onClick: p,
                url: h,
                target: d,
                rel: v,
                variant: w,
                children: u
              },
              y
            )
          ) })
        ] })
      ]
    }
  );
}
const Yt = {
  selectedItems: [],
  select: !0,
  isFramePresent: !1,
  isSticky: {
    first: !1,
    second: !1,
    last: !1
  }
}, Pe = ie({
  tableResources: Yt,
  dispatch: () => null,
  toasts: [],
  setToasts: () => null,
  setIsFramePresent: () => null,
  isFramePresent: !1
});
function dn(e, t) {
  switch (t.type) {
    case "ADD_SELECTED_ITEM":
      return {
        ...e,
        selectedItems: [...e.selectedItems, t.payload]
      };
    case "REMOVE_SELECTED_ITEM":
      const l = e.selectedItems;
      return {
        ...e,
        selectedItems: l.filter((a) => de(a) !== de(t.payload))
      };
    case "SELECT_ALL":
      return {
        ...e,
        selectedItems: t.payload
      };
    default:
      throw Error("Unknown action: " + t.type);
  }
}
function $l({ children: e }) {
  const [t, l] = zt(dn, Yt), [a, o] = z([]), [i, s] = z(!1), c = re(
    (u) => o(a.filter((p) => p.id !== u.id || de(p) !== de(u))),
    [a]
  );
  return /* @__PURE__ */ r.jsxs(
    Pe.Provider,
    {
      value: { tableResources: t, dispatch: l, toasts: a, setToasts: o, isFramePresent: i, setIsFramePresent: s },
      children: [
        a.map((u, p) => /* @__PURE__ */ r.jsx(
          tn,
          {
            content: u.content,
            type: "default",
            onDismiss: () => c(u),
            duration: u.duration,
            action: { label: "Undo", onAction: () => {
            } }
          },
          p
        )),
        " ",
        e
      ]
    }
  );
}
const fn = () => /* @__PURE__ */ r.jsxs("svg", { width: "167", height: "48", viewBox: "0 0 167 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M58.2031 30.1679C58.2031 30.8798 57.6812 31.4651 56.9386 31.4651C56.2163 31.4651 55.6943 30.8785 55.6943 30.1679V17.7986C55.6943 17.0865 56.2163 16.5012 56.9588 16.5012C57.6812 16.5012 58.2031 17.0879 58.2031 17.7986V30.1679Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M74.4188 17.7985V29.1011C74.4188 30.6291 73.6365 31.4878 72.3922 31.4878H72.2925C71.1087 31.4878 70.5459 30.7758 70.0447 29.7291L67.5157 24.6011L65.2679 19.3065L65.3284 24.4345L65.3486 30.1478C65.3486 30.8598 64.8272 31.4451 64.0841 31.4451C63.3617 31.4451 62.8403 30.8584 62.8403 30.1478V18.8452C62.8403 17.4425 63.6226 16.4585 64.9879 16.4585H65.0882C66.3526 16.4585 66.874 17.1705 67.3763 18.2172L69.8644 23.3038L71.9918 28.2438L71.9319 23.5131L71.9117 17.7999C71.9117 17.0878 72.4331 16.5025 73.1762 16.5025C73.8969 16.5012 74.4188 17.0865 74.4188 17.7985Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M84.4745 30.1479C84.4745 30.8598 83.9532 31.4451 83.21 31.4451C82.4882 31.4451 81.9663 30.8585 81.9663 30.1479V18.9505H78.8555C78.2137 18.9505 77.6924 18.4479 77.6924 17.7159C77.6924 17.0039 78.2137 16.5026 78.8555 16.5026H87.5853C88.2271 16.5026 88.749 17.0052 88.749 17.7372C88.749 18.4492 88.2271 18.9505 87.5853 18.9505H84.4745V30.1479Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M92.0204 29.7293V18.1133C92.0204 17.0253 92.6022 16.4187 93.6662 16.46H100.891C101.533 16.46 102.054 16.9826 102.054 17.6947C102.054 18.4067 101.533 18.908 100.891 18.908H94.5085V22.508H100.148C100.771 22.508 101.272 22.9893 101.272 23.68C101.272 24.3706 100.771 24.852 100.148 24.852H94.5085V28.9959H100.891C101.533 28.9959 102.054 29.5186 102.054 30.2306C102.054 30.9426 101.533 31.444 100.891 31.444H93.6058C92.5625 31.4453 91.9812 30.8386 92.0204 29.7293Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M115.723 31.5079C116.425 31.1306 116.647 30.3559 116.305 29.7493L113.796 25.1039C115.864 24.6853 117.068 23.0946 117.068 20.9386C117.068 18.6786 115.704 16.46 112.432 16.46H107.676C106.613 16.4187 106.031 17.0253 106.031 18.1133V30.1693C106.031 30.8799 106.552 31.4666 107.275 31.4666C108.018 31.4666 108.539 30.8813 108.539 30.1693L108.519 25.6066H111.168L113.958 30.9853C114.297 31.5919 115.041 31.864 115.723 31.5079ZM112.491 23.24H108.517V18.9067H112.471C113.795 18.9067 114.538 19.7853 114.538 21.0627C114.538 22.34 113.836 23.24 112.491 23.24Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M122.245 30.3359C120.74 28.9332 120.058 26.7359 120.058 23.9732C120.058 21.1892 120.72 19.0132 122.206 17.6319C123.129 16.7946 124.372 16.2292 126.18 16.2292C127.765 16.2292 128.99 16.6066 129.912 17.4225C130.716 18.0919 131.297 19.0346 131.638 20.3532C131.819 21.0439 131.357 21.7345 130.595 21.8812C129.873 22.0066 129.291 21.5252 129.07 20.8346C128.829 20.1652 128.507 19.6839 128.127 19.3479C127.605 18.8666 126.963 18.6572 126.119 18.6572C125.216 18.6572 124.433 18.9292 123.851 19.5359C123.008 20.4146 122.646 21.9852 122.646 23.9732C122.646 25.9412 122.988 27.5105 123.871 28.3892C124.453 28.9958 125.216 29.2678 126.099 29.2678C127.022 29.2678 127.724 29.0172 128.307 28.4519C128.607 28.1585 128.869 27.7825 129.05 27.3425C129.31 26.6932 129.853 26.2119 130.554 26.3799C131.256 26.5479 131.699 27.2585 131.478 27.9492C131.116 29.0998 130.494 30.0212 129.652 30.6492C128.729 31.3398 127.585 31.6958 126.14 31.6958C124.293 31.6958 123.129 31.1305 122.245 30.3359Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M140.67 16.2292C136.314 16.2292 134.468 19.2852 134.468 23.9732C134.468 28.8079 136.295 31.7172 140.67 31.7172C144.964 31.7172 146.852 28.8079 146.852 23.9732C146.852 19.2012 144.985 16.2292 140.67 16.2292ZM140.65 18.6786C143.038 18.6786 144.282 20.4146 144.282 23.9732C144.282 27.5305 143.017 29.2678 140.65 29.2678C138.261 29.2678 137.057 27.5318 137.057 23.9732C137.057 20.4159 138.301 18.6786 140.65 18.6786Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M166.319 30.1478C166.319 30.8598 165.797 31.4451 165.055 31.4451C164.332 31.4451 163.81 30.8584 163.81 30.1478V24.5385L163.871 19.0758L162.124 24.6225L160.359 30.0851C160.058 31.0478 159.436 31.4251 158.653 31.4251C157.83 31.4251 157.228 31.0278 156.907 30.0651L155.1 24.6238L153.434 19.1612L153.494 24.5398V30.1491C153.494 30.8611 152.972 31.4464 152.23 31.4464C151.507 31.4464 150.986 30.8598 150.986 30.1491V18.9518C150.986 17.4025 151.788 16.5025 153.193 16.5025C154.518 16.5025 155.261 17.2345 155.681 18.5745L157.528 24.2878L158.652 28.1811L159.796 24.2878L161.642 18.5745C162.064 17.2345 162.787 16.5025 164.111 16.5025C165.516 16.5025 166.299 17.3812 166.299 18.9518L166.319 30.1478Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "path",
    {
      d: "M35.438 26.1117C35.438 26.486 35.2946 26.8451 35.0393 27.1099C34.784 27.3746 34.4378 27.5233 34.0767 27.5233C33.7157 27.5233 33.3694 27.3746 33.1141 27.1099C32.8588 26.8451 32.7154 26.486 32.7154 26.1117V13.5001C32.7154 13.1257 32.8588 12.7666 33.1141 12.5019C33.3694 12.2371 33.7157 12.0884 34.0767 12.0884C34.4378 12.0884 34.784 12.2371 35.0393 12.5019C35.2946 12.7666 35.438 13.1257 35.438 13.5001V26.1117ZM34.9655 34.8499C34.7855 35.0366 29.7229 39.4116 20.4415 39.4116C11.1601 39.4116 6.13135 35.0599 5.9176 34.8733C5.78287 34.7555 5.67193 34.6113 5.59107 34.449C5.51021 34.2866 5.46109 34.1093 5.44642 33.9272C5.43181 33.7451 5.45196 33.5618 5.50578 33.3878C5.5596 33.2138 5.646 33.0526 5.76008 32.9133C5.99505 32.6314 6.32791 32.4572 6.6862 32.4288C7.04449 32.4004 7.39908 32.5201 7.67258 32.7616C7.75137 32.8199 12.2739 36.6233 20.4303 36.6233C28.5866 36.6233 33.1429 32.7966 33.188 32.7616C33.4645 32.5222 33.8203 32.4041 34.1795 32.4325C34.5388 32.4608 34.8732 32.6333 35.1117 32.9133C35.3413 33.191 35.4558 33.5514 35.4305 33.9162C35.4053 34.2811 35.2422 34.6208 34.9768 34.8616L34.9655 34.8499ZM5.43382 13.5001C5.45415 13.1245 5.61705 12.7725 5.88692 12.5211C6.15672 12.2697 6.51159 12.1393 6.87385 12.1584C7.20968 12.1781 7.52659 12.3262 7.76341 12.574C8.00023 12.8217 8.14023 13.1516 8.15636 13.5001V26.0883C8.15636 26.4627 8.01295 26.8218 7.75764 27.0865C7.5024 27.3513 7.15615 27.5 6.79512 27.5C6.43409 27.5 6.08784 27.3513 5.83254 27.0865C5.57724 26.8218 5.43382 26.4627 5.43382 26.0883V13.5001ZM12.2627 10.7001C12.283 10.3245 12.4459 9.97254 12.7157 9.7211C12.9856 9.46972 13.3404 9.33929 13.7027 9.35839C14.0385 9.37816 14.3554 9.52622 14.5922 9.77396C14.8291 10.0217 14.9691 10.3516 14.9852 10.7001V29.3667C14.9852 29.741 14.8418 30.1001 14.5865 30.3649C14.3312 30.6296 13.985 30.7783 13.624 30.7783C13.2629 30.7783 12.9167 30.6296 12.6614 30.3649C12.4061 30.1001 12.2627 29.741 12.2627 29.3667V10.7001ZM19.1253 10.0001C19.1253 9.62568 19.2687 9.2666 19.524 9.00189C19.7793 8.73713 20.1255 8.58839 20.4865 8.58839C20.8476 8.58839 21.1938 8.73713 21.4491 9.00189C21.7044 9.2666 21.8478 9.62568 21.8478 10.0001V30.2999C21.8478 30.6744 21.7044 31.0334 21.4491 31.2981C21.1938 31.5629 20.8476 31.7117 20.4865 31.7117C20.1255 31.7117 19.7793 31.5629 19.524 31.2981C19.2687 31.0334 19.1253 30.6744 19.1253 30.2999V10.0001ZM25.8753 10.7001C25.8753 10.3257 26.0188 9.9666 26.2741 9.70189C26.5294 9.43712 26.8756 9.28839 27.2366 9.28839C27.5977 9.28839 27.9439 9.43712 28.1992 9.70189C28.4545 9.9666 28.5979 10.3257 28.5979 10.7001V29.3667C28.5979 29.741 28.4545 30.1001 28.1992 30.3649C27.9439 30.6296 27.5977 30.7783 27.2366 30.7783C26.8756 30.7783 26.5294 30.6296 26.2741 30.3649C26.0188 30.1001 25.8753 29.741 25.8753 29.3667V10.7001ZM35.8092 3.00012H5.11882C4.45007 2.99547 3.78704 3.12769 3.16768 3.38921C2.54827 3.65067 1.98474 4.03628 1.50925 4.52393C1.03376 5.01163 0.655701 5.59173 0.396758 6.23114C0.137759 6.87049 0.00296799 7.5566 0 8.2501V39.7499C0.00296799 40.4434 0.137759 41.1295 0.396758 41.7689C0.655701 42.4083 1.03376 42.9884 1.50925 43.4761C1.98474 43.9637 2.54827 44.3493 3.16768 44.6108C3.78704 44.8723 4.45007 45.0044 5.11882 44.9999H35.8092C36.477 45.0044 37.1391 44.8727 37.7578 44.6119C38.3764 44.3512 38.9395 43.9666 39.4148 43.4802C39.8902 42.9938 40.2685 42.415 40.5281 41.777C40.7877 41.1389 40.9236 40.4541 40.9281 39.7616V8.2501C40.9251 7.55755 40.7906 6.87245 40.5324 6.23383C40.2741 5.5952 39.8971 5.01561 39.4228 4.52807C38.9485 4.04059 38.3862 3.65476 37.7682 3.39256C37.1501 3.13037 36.4883 2.99704 35.8205 3.00012",
      fill: "black"
    }
  )
] }), pn = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, hn = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function Al() {
  const { setIsFramePresent: e } = q(Pe);
  return B(() => {
    e(!0);
  }, []), /* @__PURE__ */ r.jsxs("header", { className: "flex h-14 w-full sticky top-0 z-50 bg-white border-b shadow-sm", children: [
    /* @__PURE__ */ r.jsx("div", { className: "w-60 flex items-center px-5 ", children: /* @__PURE__ */ r.jsx(fn, {}) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-end md:justify-between flex-1 max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "h-9 w-full max-w-md bg-gray-100 rounded-md relative border border-gray-300 hidden md:flex justify-between items-center px-3 text-gray-500 text-sm", children: [
        /* @__PURE__ */ r.jsx("span", { children: "search by keyword" }),
        /* @__PURE__ */ r.jsx("span", { children: "⌘K" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            type: "button",
            className: "rounded-full bg-white p-1 w-8 flex justify-center items-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ",
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "View notifications" }),
              /* @__PURE__ */ r.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  className: "w-5 h-5",
                  children: /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            as: "div",
            activator: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs("button", { className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500", children: [
              /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Open user menu" }),
              /* @__PURE__ */ r.jsx("img", { className: "h-8 w-8 rounded-full", src: pn.imageUrl, alt: "" })
            ] }) }),
            className: "relative ml-3",
            children: /* @__PURE__ */ r.jsx("ul", { className: "w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: hn.map((t) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
              "a",
              {
                href: t.href,
                className: C("block px-4 py-2 text-sm text-gray-700"),
                children: t.name
              }
            ) }, t.name)) })
          }
        )
      ] })
    ] })
  ] });
}
function mn({ children: e, minimized: t, className: l }) {
  const { isFramePresent: a } = q(Pe);
  return /* @__PURE__ */ r.jsx(
    "aside",
    {
      className: C(
        "transition-all duration-500 overflow-y-auto sticky z-10 hidden border-r divide-y flex-col",
        l,
        t ? "w-[61px] md:w-60 sm:flex" : " md:flex w-60",
        a ? " max-h-[calc(100vh-56px)] top-14" : " max-h-screen top-0"
      ),
      children: e
    }
  );
}
function xn({ children: e }) {
  return /* @__PURE__ */ r.jsx("div", { className: "flex gap-3 p-2", children: e });
}
function vn({ items: e, title: t }) {
  const l = () => /* @__PURE__ */ r.jsx("span", { className: "absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500" }), a = re(
    (o, i) => {
      const s = o.findIndex((c) => c.selected);
      return s !== -1 ? i < s : !1;
    },
    [e]
  );
  return re(
    (o, i) => {
      const s = o.findIndex((c) => c.selected);
      return s !== -1 ? i < s : !1;
    },
    [e]
  ), /* @__PURE__ */ r.jsxs("ul", { className: "py-3 w-full text-[15px] text-gray-950 last:flex-1 last-of-type:flex-1", children: [
    /* @__PURE__ */ r.jsx("li", { className: "text-xs font-medium px-5 py-1 text-gray-500", children: t }),
    e.map((o, i) => {
      var s;
      return /* @__PURE__ */ r.jsxs("li", { className: "px-3 flex flex-col gap-1 ", children: [
        /* @__PURE__ */ r.jsxs(
          "a",
          {
            href: o.url || "#",
            className: [
              "py-1 flex items-center flex-1 gap-3 relative hover:bg-gray-200/50 hover:text-orange-500 px-1 rounded-md",
              o.disabled && "pointer-events-none opacity-50",
              o.className
            ].join(" "),
            children: [
              o.selected && !((s = o.subNavigationItems) != null && s.length) && /* @__PURE__ */ r.jsx(l, {}),
              o.badge && /* @__PURE__ */ r.jsx("span", { className: "absolute top-1/2 right-2 w-fit h-fit -translate-y-1/2", children: o.badge }),
              o.icon && /* @__PURE__ */ r.jsx("span", { children: /* @__PURE__ */ r.jsx(
                o.icon,
                {
                  className: ["w-[18px] h-7 md:h-5", o.selected && "text-orange-500"].filter(Boolean).join(" ")
                }
              ) }),
              /* @__PURE__ */ r.jsx("span", { children: o.label })
            ]
          }
        ),
        o.subNavigationItems && /* @__PURE__ */ r.jsx("ul", { className: "text-slate-500 relative flex flex-col gap-px", children: o.subNavigationItems.map((c, u) => /* @__PURE__ */ r.jsx(
          gn,
          {
            subItem: c,
            isSelectedPassed: a((o == null ? void 0 : o.subNavigationItems) || [], u) || !1
          },
          u
        )) })
      ] }, i);
    })
  ] });
}
function gn({
  subItem: e,
  isSelectedPassed: t
}) {
  return /* @__PURE__ */ r.jsx("li", { className: " flex flex-col group/si", children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      href: e.url,
      className: [
        "py-1 flex flex-1 gap-2 relative hover:bg-gray-200/50 hover:text-orange-500 pl-8 pr-2 rounded-md",
        e.className,
        e.selected && !e.disabled && "bg-white shadow-sm text-orange-500",
        e.disabled && "pointer-events-none opacity-50"
      ].join(" "),
      children: [
        (e.selected || t) && /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(
          "span",
          {
            className: C(
              "-top-2  absolute left-3 w-[1.8px] z-10 bg-orange-500 rounded-full",
              t ? "bottom-px" : "bottom-[18px]"
            )
          }
        ) }),
        !e.disabled && /* @__PURE__ */ r.jsx(
          "svg",
          {
            className: C(
              e.selected ? "" : "invisible group-hover/si:visible text-gray-400",
              "w-[18px] absolute left-[8.25px] top-1.5 isolate "
            ),
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ r.jsx(
              "path",
              {
                d: "M19 14.0625L11 14.0625C7.68629 14.0625 6 12.3762 6 9.0625L6 7M19 14.0625L15.0625 18M19 14.0625L15.0625 10.125",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ),
        e.badge && /* @__PURE__ */ r.jsx("span", { className: "absolute top-1/2 right-2 w-fit h-fit px-1.5 -translate-y-1/2 rounded-full bg-orange-500 text-xs text-white", children: e.badge }),
        e.icon && /* @__PURE__ */ r.jsx("span", { children: e.icon }),
        /* @__PURE__ */ r.jsx("span", { children: e.label })
      ]
    }
  ) });
}
const Dl = Object.assign(mn, {
  Section: vn,
  SectionFooter: xn
});
function Bl({ children: e, sidebar: t, header: l, className: a }) {
  return /* @__PURE__ */ r.jsxs("div", { className: C("w-full", a), children: [
    l,
    /* @__PURE__ */ r.jsxs("div", { className: "flex w-full", children: [
      t,
      e
    ] })
  ] });
}
var bn = Object.defineProperty, wn = (e, t, l) => t in e ? bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, rt = (e, t, l) => (wn(e, typeof t != "symbol" ? t + "" : t, l), l);
let yn = class {
  constructor() {
    rt(this, "current", this.detect()), rt(this, "handoffState", "pending"), rt(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, se = new yn(), we = (e, t) => {
  se.isServer ? B(e, t) : Rr(e, t);
};
function Se(e) {
  let t = V(e);
  return we(() => {
    t.current = e;
  }, [e]), t;
}
function jn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
let A = function(e) {
  let t = Se(e);
  return F.useCallback((...l) => t.current(...l), [t]);
};
function Zt() {
  let [e, t] = z(se.isHandoffComplete);
  return e && se.isHandoffComplete === !1 && t(!1), B(() => {
    e !== !0 && t(!0);
  }, [e]), B(() => se.handoff(), []), e;
}
var It;
let Ee = (It = F.useId) != null ? It : function() {
  let e = Zt(), [t, l] = F.useState(e ? () => se.nextId() : null);
  return we(() => {
    t === null && l(se.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function ne(e, t, ...l) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...l) : o;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, ne), a;
}
function ct(e) {
  return se.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let ot = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), He = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(He || {}), Cn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cn || {});
function We(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ot)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ut = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ut || {});
function Gt(e, t = 0) {
  var l;
  return e === ((l = ct(e)) == null ? void 0 : l.body) ? !1 : ne(t, { 0() {
    return e.matches(ot);
  }, 1() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(ot))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
var Nn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Nn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let En = ["textarea", "input"].join(",");
function Sn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, En)) != null ? l : !1;
}
function Pn(e, t = (l) => l) {
  return e.slice().sort((l, a) => {
    let o = t(l), i = t(a);
    if (o === null || i === null)
      return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ge(e, t, { sorted: l = !0, relativeTo: a = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? l ? Pn(e) : e : We(e);
  o.length > 0 && s.length > 1 && (s = s.filter((w) => !o.includes(w))), a = a ?? i.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(a)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(a)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = t & 32 ? { preventScroll: !0 } : {}, d = 0, h = s.length, m;
  do {
    if (d >= h || d + h <= 0)
      return 0;
    let w = u + d;
    if (t & 16)
      w = (w + h) % h;
    else {
      if (w < 0)
        return 3;
      if (w >= h)
        return 1;
    }
    m = s[w], m == null || m.focus(p), d += c;
  } while (m !== i.activeElement);
  return t & 6 && Sn(m) && m.select(), 2;
}
function Ft(e, t, l) {
  let a = Se(t);
  B(() => {
    function o(i) {
      a.current(i);
    }
    return document.addEventListener(e, o, l), () => document.removeEventListener(e, o, l);
  }, [e, l]);
}
function qt(e, t, l) {
  let a = Se(t);
  B(() => {
    function o(i) {
      a.current(i);
    }
    return window.addEventListener(e, o, l), () => window.removeEventListener(e, o, l);
  }, [e, l]);
}
function kn(e, t, l = !0) {
  let a = V(!1);
  B(() => {
    requestAnimationFrame(() => {
      a.current = l;
    });
  }, [l]);
  function o(s, c) {
    if (!a.current || s.defaultPrevented)
      return;
    let u = c(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let p = function d(h) {
      return typeof h == "function" ? d(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(e);
    for (let d of p) {
      if (d === null)
        continue;
      let h = d instanceof HTMLElement ? d : d.current;
      if (h != null && h.contains(u) || s.composed && s.composedPath().includes(h))
        return;
    }
    return !Gt(u, ut.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
  }
  let i = V(null);
  Ft("mousedown", (s) => {
    var c, u;
    a.current && (i.current = ((u = (c = s.composedPath) == null ? void 0 : c.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), Ft("click", (s) => {
    i.current && (o(s, () => i.current), i.current = null);
  }, !0), qt("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function $t(e) {
  var t;
  if (e.type)
    return e.type;
  let l = (t = e.as) != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Rn(e, t) {
  let [l, a] = z(() => $t(e));
  return we(() => {
    a($t(e));
  }, [e.type, e.as]), we(() => {
    l || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button");
  }, [l, t]), l;
}
let Kt = Symbol();
function Jt(e, t = !0) {
  return Object.assign(e, { [Kt]: t });
}
function fe(...e) {
  let t = V(e);
  B(() => {
    t.current = e;
  }, [e]);
  let l = A((a) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(a) : o.current = a);
  });
  return e.every((a) => a == null || (a == null ? void 0 : a[Kt])) ? void 0 : l;
}
function At(...e) {
  return e.filter(Boolean).join(" ");
}
var Le = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Le || {}), Tn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Tn || {});
function pe({ ourProps: e, theirProps: t, slot: l, defaultTag: a, features: o, visible: i = !0, name: s }) {
  let c = Xt(t, e);
  if (i)
    return ze(c, l, a, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: p = !1, ...d } = c;
    if (p)
      return ze(d, l, a, s);
  }
  if (u & 1) {
    let { unmount: p = !0, ...d } = c;
    return ne(p ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return ze({ ...d, hidden: !0, style: { display: "none" } }, l, a, s);
    } });
  }
  return ze(c, l, a, s);
}
function ze(e, t = {}, l, a) {
  let { as: o = l, children: i, refName: s = "ref", ...c } = nt(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, p = typeof i == "function" ? i(t) : i;
  "className" in c && c.className && typeof c.className == "function" && (c.className = c.className(t));
  let d = {};
  if (t) {
    let h = !1, m = [];
    for (let [w, v] of Object.entries(t))
      typeof v == "boolean" && (h = !0), v === !0 && m.push(w);
    h && (d["data-headlessui-state"] = m.join(" "));
  }
  if (o === _e && Object.keys(Dt(c)).length > 0) {
    if (!Or(p) || Array.isArray(p) && p.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let h = p.props, m = typeof (h == null ? void 0 : h.className) == "function" ? (...v) => At(h == null ? void 0 : h.className(...v), c.className) : At(h == null ? void 0 : h.className, c.className), w = m ? { className: m } : {};
    return _r(p, Object.assign({}, Xt(p.props, Dt(nt(c, ["ref"]))), d, u, On(p.ref, u.ref), w));
  }
  return Lr(o, Object.assign({}, nt(c, ["ref"]), o !== _e && u, o !== _e && d), p);
}
function On(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let l of e)
      l != null && (typeof l == "function" ? l(t) : l.current = t);
  } };
}
function Xt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let a of e)
    for (let o in a)
      o.startsWith("on") && typeof a[o] == "function" ? (l[o] != null || (l[o] = []), l[o].push(a[o])) : t[o] = a[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((a) => [a, void 0])));
  for (let a in l)
    Object.assign(t, { [a](o, ...i) {
      let s = l[a];
      for (let c of s) {
        if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented)
          return;
        c(o, ...i);
      }
    } });
  return t;
}
function he(e) {
  var t;
  return Object.assign(Tr(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Dt(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function nt(e, t = []) {
  let l = Object.assign({}, e);
  for (let a of t)
    a in l && delete l[a];
  return l;
}
function Qt(e) {
  let t = e.parentElement, l = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (l = t), t = t.parentElement;
  let a = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return a && _n(l) ? !1 : a;
}
function _n(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ln = "div";
var Me = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Me || {});
function Mn(e, t) {
  let { features: l = 1, ...a } = e, o = { ref: t, "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
  return pe({ ourProps: o, theirProps: a, slot: {}, defaultTag: Ln, name: "Hidden" });
}
let Ve = he(Mn), dt = ie(null);
dt.displayName = "OpenClosedContext";
var ye = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ye || {});
function er() {
  return q(dt);
}
function In({ value: e, children: t }) {
  return F.createElement(dt.Provider, { value: e }, t);
}
var ue = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ue || {}), oe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(oe || {});
function tr() {
  let e = V(0);
  return qt("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function ke(...e) {
  return H(() => ct(...e), [...e]);
}
function Fn(e, t, l, a) {
  let o = Se(l);
  B(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, a), () => e.removeEventListener(t, i, a);
  }, [e, t, a]);
}
function $n(e) {
  let t = A(e), l = V(!1);
  B(() => (l.current = !1, () => {
    l.current = !0, jn(() => {
      l.current && t();
    });
  }), [t]);
}
let An = ie(!1);
function Dn() {
  return q(An);
}
function Bn(e) {
  let t = Dn(), l = q(rr), a = ke(e), [o, i] = z(() => {
    if (!t && l !== null || se.isServer)
      return null;
    let s = a == null ? void 0 : a.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (a === null)
      return null;
    let c = a.createElement("div");
    return c.setAttribute("id", "headlessui-portal-root"), a.body.appendChild(c);
  });
  return B(() => {
    o !== null && (a != null && a.body.contains(o) || a == null || a.body.appendChild(o));
  }, [o, a]), B(() => {
    t || l !== null && i(l.current);
  }, [l, i, t]), o;
}
let zn = _e;
function Hn(e, t) {
  let l = e, a = V(null), o = fe(Jt((d) => {
    a.current = d;
  }), t), i = ke(a), s = Bn(a), [c] = z(() => {
    var d;
    return se.isServer ? null : (d = i == null ? void 0 : i.createElement("div")) != null ? d : null;
  }), u = q(st), p = Zt();
  return we(() => {
    !s || !c || s.contains(c) || (c.setAttribute("data-headlessui-portal", ""), s.appendChild(c));
  }, [s, c]), we(() => {
    if (c && u)
      return u.register(c);
  }, [u, c]), $n(() => {
    var d;
    !s || !c || (c instanceof Node && s.contains(c) && s.removeChild(c), s.childNodes.length <= 0 && ((d = s.parentElement) == null || d.removeChild(s)));
  }), p ? !s || !c ? null : Ht(pe({ ourProps: { ref: o }, theirProps: l, defaultTag: zn, name: "Portal" }), c) : null;
}
let Vn = _e, rr = ie(null);
function Wn(e, t) {
  let { target: l, ...a } = e, o = { ref: fe(t) };
  return F.createElement(rr.Provider, { value: l }, pe({ ourProps: o, theirProps: a, defaultTag: Vn, name: "Popover.Group" }));
}
let st = ie(null);
function Un() {
  let e = q(st), t = V([]), l = A((i) => (t.current.push(i), e && e.register(i), () => a(i))), a = A((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = H(() => ({ register: l, unregister: a, portals: t }), [l, a, t]);
  return [t, H(() => function({ children: i }) {
    return F.createElement(st.Provider, { value: o }, i);
  }, [o])];
}
let Yn = he(Hn), Zn = he(Wn);
Object.assign(Yn, { Group: Zn });
function Gn({ defaultContainers: e = [], portals: t } = {}) {
  let l = V(null), a = ke(l), o = A(() => {
    var i;
    let s = [];
    for (let c of e)
      c !== null && (c instanceof HTMLElement ? s.push(c) : "current" in c && c.current instanceof HTMLElement && s.push(c.current));
    if (t != null && t.current)
      for (let c of t.current)
        s.push(c);
    for (let c of (i = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? i : [])
      c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(l.current) || s.some((u) => c.contains(u)) || s.push(c));
    return s;
  });
  return { resolveContainers: o, contains: A((i) => o().some((s) => s.contains(i))), mainTreeNodeRef: l, MainTreeNode: H(() => function() {
    return F.createElement(Ve, { features: Me.Hidden, ref: l });
  }, [l]) };
}
var qn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qn || {}), Kn = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(Kn || {});
let Jn = { 0: (e) => {
  let t = { ...e, popoverState: ne(e.popoverState, { 0: 1, 1: 0 }) };
  return t.popoverState === 0 && (t.__demoMode = !1), t;
}, 1(e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
}, 2(e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, 3(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 4(e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, 5(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} }, ft = ie(null);
ft.displayName = "PopoverContext";
function Ue(e) {
  let t = q(ft);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ue), l;
  }
  return t;
}
let pt = ie(null);
pt.displayName = "PopoverAPIContext";
function ht(e) {
  let t = q(pt);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, ht), l;
  }
  return t;
}
let mt = ie(null);
mt.displayName = "PopoverGroupContext";
function nr() {
  return q(mt);
}
let Ye = ie(null);
Ye.displayName = "PopoverPanelContext";
function Xn() {
  return q(Ye);
}
function Qn(e, t) {
  return ne(t.type, Jn, e, t);
}
let el = "div";
function tl(e, t) {
  var l;
  let { __demoMode: a = !1, ...o } = e, i = V(null), s = fe(t, Jt((T) => {
    i.current = T;
  })), c = V([]), u = zt(Qn, { __demoMode: a, popoverState: a ? 0 : 1, buttons: c, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: Ot(), afterPanelSentinel: Ot() }), [{ popoverState: p, button: d, buttonId: h, panel: m, panelId: w, beforePanelSentinel: v, afterPanelSentinel: y }, S] = u, N = ke((l = i.current) != null ? l : d), b = H(() => {
    if (!d || !m)
      return !1;
    for (let ve of document.querySelectorAll("body > *"))
      if (Number(ve == null ? void 0 : ve.contains(d)) ^ Number(ve == null ? void 0 : ve.contains(m)))
        return !0;
    let T = We(), G = T.indexOf(d), me = (G + T.length - 1) % T.length, ce = (G + 1) % T.length, xe = T[me], Ie = T[ce];
    return !m.contains(xe) && !m.contains(Ie);
  }, [d, m]), L = Se(h), U = Se(w), Q = H(() => ({ buttonId: L, panelId: U, close: () => S({ type: 1 }) }), [L, U, S]), ee = nr(), O = ee == null ? void 0 : ee.registerPopover, Y = A(() => {
    var T;
    return (T = ee == null ? void 0 : ee.isFocusWithinPopoverGroup()) != null ? T : (N == null ? void 0 : N.activeElement) && ((d == null ? void 0 : d.contains(N.activeElement)) || (m == null ? void 0 : m.contains(N.activeElement)));
  });
  B(() => O == null ? void 0 : O(Q), [O, Q]);
  let [M, K] = Un(), j = Gn({ portals: M, defaultContainers: [d, m] });
  Fn(N == null ? void 0 : N.defaultView, "focus", (T) => {
    var G, me, ce, xe;
    T.target !== window && T.target instanceof HTMLElement && p === 0 && (Y() || d && m && (j.contains(T.target) || (me = (G = v.current) == null ? void 0 : G.contains) != null && me.call(G, T.target) || (xe = (ce = y.current) == null ? void 0 : ce.contains) != null && xe.call(ce, T.target) || S({ type: 1 })));
  }, !0), kn(j.resolveContainers, (T, G) => {
    S({ type: 1 }), Gt(G, ut.Loose) || (T.preventDefault(), d == null || d.focus());
  }, p === 0);
  let I = A((T) => {
    S({ type: 1 });
    let G = (() => T ? T instanceof HTMLElement ? T : "current" in T && T.current instanceof HTMLElement ? T.current : d : d)();
    G == null || G.focus();
  }), R = H(() => ({ close: I, isPortalled: b }), [I, b]), W = H(() => ({ open: p === 0, close: I }), [p, I]), te = { ref: s };
  return F.createElement(Ye.Provider, { value: null }, F.createElement(ft.Provider, { value: u }, F.createElement(pt.Provider, { value: R }, F.createElement(In, { value: ne(p, { 0: ye.Open, 1: ye.Closed }) }, F.createElement(K, null, pe({ ourProps: te, theirProps: o, slot: W, defaultTag: el, name: "Popover" }), F.createElement(j.MainTreeNode, null))))));
}
let rl = "button";
function nl(e, t) {
  let l = Ee(), { id: a = `headlessui-popover-button-${l}`, ...o } = e, [i, s] = Ue("Popover.Button"), { isPortalled: c } = ht("Popover.Button"), u = V(null), p = `headlessui-focus-sentinel-${Ee()}`, d = nr(), h = d == null ? void 0 : d.closeOthers, m = Xn() !== null;
  B(() => {
    if (!m)
      return s({ type: 3, buttonId: a }), () => {
        s({ type: 3, buttonId: null });
      };
  }, [m, a, s]);
  let [w] = z(() => Symbol()), v = fe(u, t, m ? null : (j) => {
    if (j)
      i.buttons.current.push(w);
    else {
      let I = i.buttons.current.indexOf(w);
      I !== -1 && i.buttons.current.splice(I, 1);
    }
    i.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), j && s({ type: 2, button: j });
  }), y = fe(u, t), S = ke(u), N = A((j) => {
    var I, R, W;
    if (m) {
      if (i.popoverState === 1)
        return;
      switch (j.key) {
        case ue.Space:
        case ue.Enter:
          j.preventDefault(), (R = (I = j.target).click) == null || R.call(I), s({ type: 1 }), (W = i.button) == null || W.focus();
          break;
      }
    } else
      switch (j.key) {
        case ue.Space:
        case ue.Enter:
          j.preventDefault(), j.stopPropagation(), i.popoverState === 1 && (h == null || h(i.buttonId)), s({ type: 0 });
          break;
        case ue.Escape:
          if (i.popoverState !== 0)
            return h == null ? void 0 : h(i.buttonId);
          if (!u.current || S != null && S.activeElement && !u.current.contains(S.activeElement))
            return;
          j.preventDefault(), j.stopPropagation(), s({ type: 1 });
          break;
      }
  }), b = A((j) => {
    m || j.key === ue.Space && j.preventDefault();
  }), L = A((j) => {
    var I, R;
    Qt(j.currentTarget) || e.disabled || (m ? (s({ type: 1 }), (I = i.button) == null || I.focus()) : (j.preventDefault(), j.stopPropagation(), i.popoverState === 1 && (h == null || h(i.buttonId)), s({ type: 0 }), (R = i.button) == null || R.focus()));
  }), U = A((j) => {
    j.preventDefault(), j.stopPropagation();
  }), Q = i.popoverState === 0, ee = H(() => ({ open: Q }), [Q]), O = Rn(e, u), Y = m ? { ref: y, type: O, onKeyDown: N, onClick: L } : { ref: v, id: i.buttonId, type: O, "aria-expanded": e.disabled ? void 0 : i.popoverState === 0, "aria-controls": i.panel ? i.panelId : void 0, onKeyDown: N, onKeyUp: b, onClick: L, onMouseDown: U }, M = tr(), K = A(() => {
    let j = i.panel;
    if (!j)
      return;
    function I() {
      ne(M.current, { [oe.Forwards]: () => ge(j, ae.First), [oe.Backwards]: () => ge(j, ae.Last) }) === He.Error && ge(We().filter((R) => R.dataset.headlessuiFocusGuard !== "true"), ne(M.current, { [oe.Forwards]: ae.Next, [oe.Backwards]: ae.Previous }), { relativeTo: i.button });
    }
    I();
  });
  return F.createElement(F.Fragment, null, pe({ ourProps: Y, theirProps: o, slot: ee, defaultTag: rl, name: "Popover.Button" }), Q && !m && c && F.createElement(Ve, { id: p, features: Me.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: K }));
}
let ll = "div", al = Le.RenderStrategy | Le.Static;
function ol(e, t) {
  let l = Ee(), { id: a = `headlessui-popover-overlay-${l}`, ...o } = e, [{ popoverState: i }, s] = Ue("Popover.Overlay"), c = fe(t), u = er(), p = (() => u !== null ? (u & ye.Open) === ye.Open : i === 0)(), d = A((m) => {
    if (Qt(m.currentTarget))
      return m.preventDefault();
    s({ type: 1 });
  }), h = H(() => ({ open: i === 0 }), [i]);
  return pe({ ourProps: { ref: c, id: a, "aria-hidden": !0, onClick: d }, theirProps: o, slot: h, defaultTag: ll, features: al, visible: p, name: "Popover.Overlay" });
}
let sl = "div", il = Le.RenderStrategy | Le.Static;
function cl(e, t) {
  let l = Ee(), { id: a = `headlessui-popover-panel-${l}`, focus: o = !1, ...i } = e, [s, c] = Ue("Popover.Panel"), { close: u, isPortalled: p } = ht("Popover.Panel"), d = `headlessui-focus-sentinel-before-${Ee()}`, h = `headlessui-focus-sentinel-after-${Ee()}`, m = V(null), w = fe(m, t, (O) => {
    c({ type: 4, panel: O });
  }), v = ke(m);
  we(() => (c({ type: 5, panelId: a }), () => {
    c({ type: 5, panelId: null });
  }), [a, c]);
  let y = er(), S = (() => y !== null ? (y & ye.Open) === ye.Open : s.popoverState === 0)(), N = A((O) => {
    var Y;
    switch (O.key) {
      case ue.Escape:
        if (s.popoverState !== 0 || !m.current || v != null && v.activeElement && !m.current.contains(v.activeElement))
          return;
        O.preventDefault(), O.stopPropagation(), c({ type: 1 }), (Y = s.button) == null || Y.focus();
        break;
    }
  });
  B(() => {
    var O;
    e.static || s.popoverState === 1 && ((O = e.unmount) == null || O) && c({ type: 4, panel: null });
  }, [s.popoverState, e.unmount, e.static, c]), B(() => {
    if (s.__demoMode || !o || s.popoverState !== 0 || !m.current)
      return;
    let O = v == null ? void 0 : v.activeElement;
    m.current.contains(O) || ge(m.current, ae.First);
  }, [s.__demoMode, o, m, s.popoverState]);
  let b = H(() => ({ open: s.popoverState === 0, close: u }), [s, u]), L = { ref: w, id: a, onKeyDown: N, onBlur: o && s.popoverState === 0 ? (O) => {
    var Y, M, K, j, I;
    let R = O.relatedTarget;
    R && m.current && ((Y = m.current) != null && Y.contains(R) || (c({ type: 1 }), ((K = (M = s.beforePanelSentinel.current) == null ? void 0 : M.contains) != null && K.call(M, R) || (I = (j = s.afterPanelSentinel.current) == null ? void 0 : j.contains) != null && I.call(j, R)) && R.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1 }, U = tr(), Q = A(() => {
    let O = m.current;
    if (!O)
      return;
    function Y() {
      ne(U.current, { [oe.Forwards]: () => {
        var M;
        ge(O, ae.First) === He.Error && ((M = s.afterPanelSentinel.current) == null || M.focus());
      }, [oe.Backwards]: () => {
        var M;
        (M = s.button) == null || M.focus({ preventScroll: !0 });
      } });
    }
    Y();
  }), ee = A(() => {
    let O = m.current;
    if (!O)
      return;
    function Y() {
      ne(U.current, { [oe.Forwards]: () => {
        var M;
        if (!s.button)
          return;
        let K = We(), j = K.indexOf(s.button), I = K.slice(0, j + 1), R = [...K.slice(j + 1), ...I];
        for (let W of R.slice())
          if (W.dataset.headlessuiFocusGuard === "true" || (M = s.panel) != null && M.contains(W)) {
            let te = R.indexOf(W);
            te !== -1 && R.splice(te, 1);
          }
        ge(R, ae.First, { sorted: !1 });
      }, [oe.Backwards]: () => {
        var M;
        ge(O, ae.Previous) === He.Error && ((M = s.button) == null || M.focus());
      } });
    }
    Y();
  });
  return F.createElement(Ye.Provider, { value: a }, S && p && F.createElement(Ve, { id: d, ref: s.beforePanelSentinel, features: Me.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: Q }), pe({ ourProps: L, theirProps: i, slot: b, defaultTag: sl, features: il, visible: S, name: "Popover.Panel" }), S && p && F.createElement(Ve, { id: h, ref: s.afterPanelSentinel, features: Me.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: ee }));
}
let ul = "div";
function dl(e, t) {
  let l = V(null), a = fe(l, t), [o, i] = z([]), s = A((v) => {
    i((y) => {
      let S = y.indexOf(v);
      if (S !== -1) {
        let N = y.slice();
        return N.splice(S, 1), N;
      }
      return y;
    });
  }), c = A((v) => (i((y) => [...y, v]), () => s(v))), u = A(() => {
    var v;
    let y = ct(l);
    if (!y)
      return !1;
    let S = y.activeElement;
    return (v = l.current) != null && v.contains(S) ? !0 : o.some((N) => {
      var b, L;
      return ((b = y.getElementById(N.buttonId.current)) == null ? void 0 : b.contains(S)) || ((L = y.getElementById(N.panelId.current)) == null ? void 0 : L.contains(S));
    });
  }), p = A((v) => {
    for (let y of o)
      y.buttonId.current !== v && y.close();
  }), d = H(() => ({ registerPopover: c, unregisterPopover: s, isFocusWithinPopoverGroup: u, closeOthers: p }), [c, s, u, p]), h = H(() => ({}), []), m = e, w = { ref: a };
  return F.createElement(mt.Provider, { value: d }, pe({ ourProps: w, theirProps: m, slot: h, defaultTag: ul, name: "Popover.Group" }));
}
let fl = he(tl), pl = he(nl), hl = he(ol), ml = he(cl), xl = he(dl), lt = Object.assign(fl, { Button: pl, Overlay: hl, Panel: ml, Group: xl });
function vl({
  children: e = /* @__PURE__ */ r.jsx(r.Fragment, {}),
  items: t = [],
  className: l,
  headings: a,
  bulkActions: o,
  promotedBulkActions: i
}) {
  var p;
  const { dispatch: s, tableResources: c } = q(Pe);
  V(null);
  const u = H(() => {
    const d = c.selectedItems.length, h = t.length;
    return d && d < h ? "intermediate" : d === h ? "all" : "none";
  }, [c.selectedItems]);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsx("div", { className: "overflow-x-auto h-fit rounded-md border shadow-sm grid", children: /* @__PURE__ */ r.jsxs("table", { className: C("min-w-full divide-y divide-gray-300", l), children: [
      /* @__PURE__ */ r.jsx("thead", { className: "bg-slate-200/70", children: /* @__PURE__ */ r.jsxs("tr", { children: [
        c.select && /* @__PURE__ */ r.jsx("th", { className: " text-sm  text-gray-900 align-middle", children: /* @__PURE__ */ r.jsx(
          Vt,
          {
            checked: u === "all",
            indeterminate: u === "intermediate",
            onChange: (d) => {
              s({
                type: "SELECT_ALL",
                payload: d ? t : []
              });
            }
          }
        ) }),
        a.map((d, h) => /* @__PURE__ */ r.jsx(
          "th",
          {
            scope: "col",
            className: "py-2 pl-4 pr-3 text-left text-xs font-normal text-gray-900 sm:pl-6",
            children: d.title
          },
          h
        ))
      ] }) }),
      /* @__PURE__ */ r.jsx("tbody", { className: "divide-y divide-gray-200", children: e })
    ] }) }),
    /* @__PURE__ */ r.jsx(Ne, { children: !!((p = c.selectedItems) != null && p.length) && /* @__PURE__ */ r.jsxs("div", { className: "absolute top-full translate-y-1 left-1/2 -translate-x-1/2 z-50 bg-white p-4 shadow-lg rounded-md border flex gap-4 h-fit", children: [
      i && /* @__PURE__ */ r.jsx("div", { className: "flex", children: i.map((d, h) => /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: d.onAction,
          className: "bg-white shadow-sm border border-gray-400 hover:text-indigo-700 flex justify-center items-center h-9 px-3 rounded-md",
          children: d.label
        },
        h
      )) }),
      o && /* @__PURE__ */ r.jsxs(lt, { className: "relative h-9", children: [
        /* @__PURE__ */ r.jsx(lt.Button, { className: "focus:outline-none", children: /* @__PURE__ */ r.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "w-9 h-9 p-1.5 bg-white shadow-sm border border-gray-400 rounded-md",
            children: /* @__PURE__ */ r.jsx("path", { d: "M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" })
          }
        ) }),
        /* @__PURE__ */ r.jsx(lt.Panel, { className: "absolute z-10 bg-white shadow bottom-11 w-40 rounded-md flex flex-col p-3 right-0 text-gray-600 text-[15px]", children: o.map((d, h) => /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: d.onAction,
            className: "hover:text-indigo-700 flex items-center h-9 px-3 rounded-md",
            children: d.label
          },
          h
        )) })
      ] })
    ] }) })
  ] });
}
function gl({ children: e, className: t, item: l }) {
  const { dispatch: a, tableResources: o } = q(Pe), i = H(
    () => o.selectedItems.some((c) => de(c) === de(l)),
    [o.selectedItems]
  ), s = (c) => {
    a({ type: c ? "ADD_SELECTED_ITEM" : "REMOVE_SELECTED_ITEM", payload: l });
  };
  return /* @__PURE__ */ r.jsxs("tr", { className: C("relative", t, i ? "bg-slate-100" : ""), children: [
    o.select && /* @__PURE__ */ r.jsxs("td", { className: "whitespace-nowrap py-1 text-sm font-medium text-gray-900 text-center px-2", children: [
      i && /* @__PURE__ */ r.jsx("span", { className: "absolute inset-y-1 left-px flex items-center w-1  bg-orange-500 rounded-full" }),
      /* @__PURE__ */ r.jsx(Vt, { checked: i, name: "table-row-checkbox", onChange: s })
    ] }),
    e
  ] });
}
function bl({ children: e, className: t }) {
  return /* @__PURE__ */ r.jsx("td", { className: C(t, "whitespace-nowrap  pl-4 pr-3 text-sm sm:pl-6 h-9"), children: e });
}
const Hl = Object.assign(vl, {
  Row: gl,
  Cell: bl
}), Bt = {
  xs: "rounded-[3px] h-6 w-6",
  sm: "rounded h-8 w-8",
  md: "rounded h-10 w-10",
  lg: "rounded-md h-14 w-14",
  xl: "rounded-md h-20 w-20",
  none: ""
}, wl = {
  xs: "p-1",
  sm: "p-1.5",
  md: "p-2.5",
  lg: "p-4",
  xl: "p-6",
  none: ""
};
function Vl({
  className: e,
  alt: t,
  size: l = "md",
  fit: a = "contain",
  ...o
}) {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: typeof o.src == "string" ? /* @__PURE__ */ r.jsx(
    "img",
    {
      src: o.src,
      alt: t,
      className: C(
        Bt[l],
        e,
        a === "contain" ? "object-contain" : "object-cover",
        "border border-gray-300 shadow-sm"
      )
    }
  ) : /* @__PURE__ */ r.jsx(
    o.src,
    {
      className: C(
        Bt[l],
        wl[l],
        e || "text-gray-500",
        "border border-gray-300 shadow-sm"
      )
    }
  ) });
}
function yl({ children: e }) {
  return Ht(/* @__PURE__ */ r.jsx("div", { children: e }), document.body);
}
function Wl({ show: e, children: t, className: l, title: a, onClose: o = () => null }) {
  const i = re(
    (s) => {
      s.stopPropagation(), o();
    },
    [e]
  );
  return /* @__PURE__ */ r.jsx(yl, { children: /* @__PURE__ */ r.jsx(Ne, { type: "slide-up", children: e && /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-25 z-[999] flex items-center justify-center",
      onClick: i,
      children: /* @__PURE__ */ r.jsxs("div", { className: C(l, "w-full max-w-xl bg-white rounded-md p-4"), children: [
        a && /* @__PURE__ */ r.jsx("h1", { className: "font-medium pb-4", children: a }),
        t
      ] })
    }
  ) }) });
}
function Ul({
  children: e,
  className: t,
  content: l,
  align: a = "center",
  dark: o,
  down: i
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: "relative group/t h-fit", children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: C(
          t,
          "absolute  px-3 py-1 rounded-md shadow-md text-sm whitespace-nowrap border z-50",
          a === "left" ? "left-0" : a === "right" ? "right-0" : "right-1/2 translate-x-1/2",
          o ? "bg-gray-950 text-white border-gray-900" : "bg-white",
          i ? "top-full" : "bottom-full mb-1",
          "invisible opacity-0 translate-y-5 group-hover/t:translate-y-0 group-hover/t:visible group-hover/t:opacity-100 transition-all"
        ),
        children: l
      }
    ),
    e
  ] });
}
function Yl() {
  const { toasts: e, setToasts: t } = q(Pe), l = re(
    (a) => {
      t((o) => [...o, a]);
    },
    [e]
  );
  return {
    toasts: e,
    show: l
  };
}
export {
  Ar as AnnotatedSection,
  Pe as AppContext,
  Rl as Badge,
  Tl as Banner,
  sn as Box,
  X as Button,
  Vt as Checkbox,
  El as ChoiceList,
  Il as EmptyState,
  Ol as ExceptionList,
  Bl as Frame,
  Wt as GAP,
  Al as Header,
  _l as IndexFilters,
  Sl as InlineError,
  Nl as Layout,
  Fl as MediaCard,
  Wl as Modal,
  Dl as Navigation,
  Ll as Page,
  be as Popover,
  yl as Portal,
  $l as ProviderSirius,
  it as ROUNDED,
  Br as SHADOW,
  Dr as SIZE,
  $r as Section,
  Pl as SkeletonBodyText,
  kl as SkeletonDisplayText,
  qr as Spinner,
  Ml as Stack,
  Hl as Table,
  rn as Tabs,
  Ut as Text,
  Vl as Thumbnail,
  tn as Toast,
  Ul as Tooltip,
  Ne as Transition,
  C as classNames,
  de as stringify,
  Yl as useToast
};
