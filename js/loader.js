/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    a = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    o = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    p = d.call(Object),
    f = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    h = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      a = (n = n || g).createElement("script");
    if (((a.text = e), t))
      for (i in v)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          a.setAttribute(i, r);
    n.head.appendChild(a).parentNode.removeChild(a);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var w = "3.7.0",
    x = /HTML$/i,
    T = function (e, t) {
      return new T.fn.init(e, t);
    };
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !m(e) &&
      !h(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function E(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (T.fn = T.prototype =
    {
      jquery: w,
      constructor: T,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = T.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return T.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          T.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          T.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          T.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (T.extend = T.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          a,
          s = arguments[0] || {},
          o = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[o] || {}), o++),
            "object" == typeof s || m(s) || (s = {}),
            o === l && ((s = this), o--);
          o < l;
          o++
        )
          if (null != (e = arguments[o]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = s[t]),
                      (a =
                        r && !Array.isArray(n)
                          ? []
                          : r || T.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (s[t] = T.extend(c, a, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    T.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              d.call(n) !== p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (C(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) return e.textContent;
          if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += T.text(t);
        return n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? T.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !x.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, a = e.length, s = !n; r < a; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          o = [];
        if (C(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && o.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
        return a(o);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = n[Symbol.iterator]),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var S = n.pop,
    M = n.sort,
    k = n.splice,
    _ = "[\\x20\\t\\r\\n\\f]",
    I = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g");
  T.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var P = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function D(e, t) {
    return t
      ? "\0" === e
        ? "�"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  T.escapeSelector = function (e) {
    return (e + "").replace(P, D);
  };
  var A = g,
    L = s;
  !(function () {
    var t,
      i,
      a,
      s,
      l,
      c,
      d,
      p,
      m,
      h,
      g = L,
      v = T.expando,
      y = 0,
      b = 0,
      w = ee(),
      x = ee(),
      C = ee(),
      P = ee(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      O =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      $ =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        _ +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      z =
        "\\[" +
        _ +
        "*(" +
        $ +
        ")(?:" +
        _ +
        "*([*^$|!~]?=)" +
        _ +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        $ +
        "))|)" +
        _ +
        "*\\]",
      N =
        ":(" +
        $ +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        z +
        ")*)|.*)\\)|)",
      j = new RegExp(_ + "+", "g"),
      F = new RegExp("^" + _ + "*," + _ + "*"),
      H = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
      R = new RegExp(_ + "|>"),
      B = new RegExp(N),
      q = new RegExp("^" + $ + "$"),
      W = {
        ID: new RegExp("^#(" + $ + ")"),
        CLASS: new RegExp("^\\.(" + $ + ")"),
        TAG: new RegExp("^(" + $ + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            _ +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            _ +
            "*(?:([+-]|)" +
            _ +
            "*(\\d+)|))" +
            _ +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + O + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            _ +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            _ +
            "*((?:-\\d)?\\d*)" +
            _ +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      V = /[+~]/,
      U = new RegExp("\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\([^\\r\\n\\f])", "g"),
      Z = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      K = function () {
        le();
      },
      Q = pe(
        function (e) {
          return !0 === e.disabled && E(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      g.apply((n = r.call(A.childNodes)), A.childNodes),
        n[A.childNodes.length].nodeType;
    } catch (e) {
      g = {
        apply: function (e, t) {
          L.apply(e, r.call(t));
        },
        call: function (e) {
          L.apply(e, r.call(arguments, 1));
        },
      };
    }
    function J(e, t, n, i) {
      var r,
        a,
        s,
        o,
        l,
        u,
        d,
        h = t && t.ownerDocument,
        y = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
      )
        return n;
      if (!i && (le(t), (t = t || c), p)) {
        if (11 !== y && (l = X.exec(e)))
          if ((r = l[1])) {
            if (9 === y) {
              if (!(s = t.getElementById(r))) return n;
              if (s.id === r) return g.call(n, s), n;
            } else if (
              h &&
              (s = h.getElementById(r)) &&
              J.contains(t, s) &&
              s.id === r
            )
              return g.call(n, s), n;
          } else {
            if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n;
            if ((r = l[3]) && t.getElementsByClassName)
              return g.apply(n, t.getElementsByClassName(r)), n;
          }
        if (!(P[e + " "] || (m && m.test(e)))) {
          if (((d = e), (h = t), 1 === y && (R.test(e) || H.test(e)))) {
            for (
              ((h = (V.test(e) && oe(t.parentNode)) || t) == t && f.scope) ||
                ((o = t.getAttribute("id"))
                  ? (o = T.escapeSelector(o))
                  : t.setAttribute("id", (o = v))),
                a = (u = ue(e)).length;
              a--;

            )
              u[a] = (o ? "#" + o : ":scope") + " " + de(u[a]);
            d = u.join(",");
          }
          try {
            return g.apply(n, h.querySelectorAll(d)), n;
          } catch (t) {
            P(e, !0);
          } finally {
            o === v && t.removeAttribute("id");
          }
        }
      }
      return ye(e.replace(I, "$1"), t, n, i);
    }
    function ee() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function te(e) {
      return (e[v] = !0), e;
    }
    function ne(e) {
      var t = c.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ie(e) {
      return function (t) {
        return E(t, "input") && t.type === e;
      };
    }
    function re(e) {
      return function (t) {
        return (E(t, "input") || E(t, "button")) && t.type === e;
      };
    }
    function ae(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Q(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function se(e) {
      return te(function (t) {
        return (
          (t = +t),
          te(function (n, i) {
            for (var r, a = e([], n.length, t), s = a.length; s--; )
              n[(r = a[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function oe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function le(e) {
      var t,
        n = e ? e.ownerDocument || e : A;
      return n != c && 9 === n.nodeType && n.documentElement
        ? ((d = (c = n).documentElement),
          (p = !T.isXMLDoc(c)),
          (h = d.matches || d.webkitMatchesSelector || d.msMatchesSelector),
          A != c &&
            (t = c.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", K),
          (f.getById = ne(function (e) {
            return (
              (d.appendChild(e).id = T.expando),
              !c.getElementsByName || !c.getElementsByName(T.expando).length
            );
          })),
          (f.disconnectedMatch = ne(function (e) {
            return h.call(e, "*");
          })),
          (f.scope = ne(function () {
            return c.querySelectorAll(":scope");
          })),
          (f.cssHas = ne(function () {
            try {
              return c.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          f.getById
            ? ((i.filter.ID = function (e) {
                var t = e.replace(U, Z);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && p) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function (e) {
                var t = e.replace(U, Z);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && p) {
                  var n,
                    i,
                    r,
                    a = t.getElementById(e);
                  if (a) {
                    if ((n = a.getAttributeNode("id")) && n.value === e)
                      return [a];
                    for (r = t.getElementsByName(e), i = 0; (a = r[i++]); )
                      if ((n = a.getAttributeNode("id")) && n.value === e)
                        return [a];
                  }
                  return [];
                }
              })),
          (i.find.TAG = function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (i.find.CLASS = function (e, t) {
            if (void 0 !== t.getElementsByClassName && p)
              return t.getElementsByClassName(e);
          }),
          (m = []),
          ne(function (e) {
            var t;
            (d.appendChild(e).innerHTML =
              "<a id='" +
              v +
              "' href='' disabled='disabled'></a><select id='" +
              v +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                m.push("\\[" + _ + "*(?:value|" + O + ")"),
              e.querySelectorAll("[id~=" + v + "-]").length || m.push("~="),
              e.querySelectorAll("a#" + v + "+*").length || m.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || m.push(":checked"),
              (t = c.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (d.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                m.push(":enabled", ":disabled"),
              (t = c.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                m.push("\\[" + _ + "*name" + _ + "*=" + _ + "*(?:''|\"\")");
          }),
          f.cssHas || m.push(":has"),
          (m = m.length && new RegExp(m.join("|"))),
          (D = function (e, t) {
            if (e === t) return (l = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!f.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === c || (e.ownerDocument == A && J.contains(A, e))
                  ? -1
                  : t === c || (t.ownerDocument == A && J.contains(A, t))
                  ? 1
                  : s
                  ? o.call(s, e) - o.call(s, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          }),
          c)
        : c;
    }
    for (t in ((J.matches = function (e, t) {
      return J(e, null, null, t);
    }),
    (J.matchesSelector = function (e, t) {
      if ((le(e), p && !P[t + " "] && (!m || !m.test(t))))
        try {
          var n = h.call(e, t);
          if (
            n ||
            f.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          P(t, !0);
        }
      return J(t, c, null, [e]).length > 0;
    }),
    (J.contains = function (e, t) {
      return (e.ownerDocument || e) != c && le(e), T.contains(e, t);
    }),
    (J.attr = function (e, t) {
      (e.ownerDocument || e) != c && le(e);
      var n = i.attrHandle[t.toLowerCase()],
        r = n && u.call(i.attrHandle, t.toLowerCase()) ? n(e, t, !p) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (J.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (T.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        a = 0;
      if (
        ((l = !f.sortStable),
        (s = !f.sortStable && r.call(e, 0)),
        M.call(e, D),
        l)
      ) {
        for (; (t = e[a++]); ) t === e[a] && (i = n.push(a));
        for (; i--; ) k.call(e, n[i], 1);
      }
      return (s = null), e;
    }),
    (T.fn.uniqueSort = function () {
      return this.pushStack(T.uniqueSort(r.apply(this)));
    }),
    (i = T.expr =
      {
        cacheLength: 50,
        createPseudo: te,
        match: W,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(U, Z)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(U, Z)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || J.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && J.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return W.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    B.test(n) &&
                    (t = ue(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(U, Z).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return E(e, t);
                };
          },
          CLASS: function (e) {
            var t = w[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) &&
                w(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = J.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && r.indexOf(n) > -1
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + r.replace(j, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var a = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              o = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    p,
                    f,
                    m = a !== s ? "nextSibling" : "previousSibling",
                    h = t.parentNode,
                    g = o && t.nodeName.toLowerCase(),
                    b = !l && !o,
                    w = !1;
                  if (h) {
                    if (a) {
                      for (; m; ) {
                        for (d = t; (d = d[m]); )
                          if (o ? E(d, g) : 1 === d.nodeType) return !1;
                        f = m = "only" === e && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [s ? h.firstChild : h.lastChild]), s && b)) {
                      for (
                        w =
                          (p =
                            (c = (u = h[v] || (h[v] = {}))[e] || [])[0] === y &&
                            c[1]) && c[2],
                          d = p && h.childNodes[p];
                        (d = (++p && d && d[m]) || (w = p = 0) || f.pop());

                      )
                        if (1 === d.nodeType && ++w && d === t) {
                          u[e] = [y, p, w];
                          break;
                        }
                    } else if (
                      (b &&
                        (w = p =
                          (c = (u = t[v] || (t[v] = {}))[e] || [])[0] === y &&
                          c[1]),
                      !1 === w)
                    )
                      for (
                        ;
                        (d = (++p && d && d[m]) || (w = p = 0) || f.pop()) &&
                        (!(o ? E(d, g) : 1 === d.nodeType) ||
                          !++w ||
                          (b && ((u = d[v] || (d[v] = {}))[e] = [y, w]),
                          d !== t));

                      );
                    return (w -= r) === i || (w % i == 0 && w / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                J.error("unsupported pseudo: " + e);
            return r[v]
              ? r(t)
              : r.length > 1
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? te(function (e, n) {
                      for (var i, a = r(e, t), s = a.length; s--; )
                        e[(i = o.call(e, a[s]))] = !(n[i] = a[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: te(function (e) {
            var t = [],
              n = [],
              i = ve(e.replace(I, "$1"));
            return i[v]
              ? te(function (e, t, n, r) {
                  for (var a, s = i(e, null, r, []), o = e.length; o--; )
                    (a = s[o]) && (e[o] = !(t[o] = a));
                })
              : function (e, r, a) {
                  return (t[0] = e), i(t, null, a, n), (t[0] = null), !n.pop();
                };
          }),
          has: te(function (e) {
            return function (t) {
              return J(e, t).length > 0;
            };
          }),
          contains: te(function (e) {
            return (
              (e = e.replace(U, Z)),
              function (t) {
                return (t.textContent || T.text(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: te(function (e) {
            return (
              q.test(e || "") || J.error("unsupported lang: " + e),
              (e = e.replace(U, Z).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = p
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === d;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return c.activeElement;
                  } catch (e) {}
                })() &&
              c.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ae(!1),
          disabled: ae(!0),
          checked: function (e) {
            return (
              (E(e, "input") && !!e.checked) || (E(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            return (E(e, "input") && "button" === e.type) || E(e, "button");
          },
          text: function (e) {
            var t;
            return (
              E(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: se(function () {
            return [0];
          }),
          last: se(function (e, t) {
            return [t - 1];
          }),
          eq: se(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: se(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: se(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: se(function (e, t, n) {
            var i;
            for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: se(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }),
    (i.pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = ie(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = re(t);
    function ce() {}
    function ue(e, t) {
      var n,
        r,
        a,
        s,
        o,
        l,
        c,
        u = x[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (o = e, l = [], c = i.preFilter; o; ) {
        for (s in ((n && !(r = F.exec(o))) ||
          (r && (o = o.slice(r[0].length) || o), l.push((a = []))),
        (n = !1),
        (r = H.exec(o)) &&
          ((n = r.shift()),
          a.push({ value: n, type: r[0].replace(I, " ") }),
          (o = o.slice(n.length))),
        i.filter))
          !(r = W[s].exec(o)) ||
            (c[s] && !(r = c[s](r))) ||
            ((n = r.shift()),
            a.push({ value: n, type: s, matches: r }),
            (o = o.slice(n.length)));
        if (!n) break;
      }
      return t ? o.length : o ? J.error(e) : x(e, l).slice(0);
    }
    function de(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function pe(e, t, n) {
      var i = t.dir,
        r = t.next,
        a = r || i,
        s = n && "parentNode" === a,
        o = b++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d = [y, o];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (((u = t[v] || (t[v] = {})), r && E(t, r))) t = t[i] || t;
                  else {
                    if ((c = u[a]) && c[0] === y && c[1] === o)
                      return (d[2] = c[2]);
                    if (((u[a] = d), (d[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function fe(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function me(e, t, n, i, r) {
      for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++)
        (a = e[o]) && ((n && !n(a, i, r)) || (s.push(a), c && t.push(o)));
      return s;
    }
    function he(e, t, n, i, r, a) {
      return (
        i && !i[v] && (i = he(i)),
        r && !r[v] && (r = he(r, a)),
        te(function (a, s, l, c) {
          var u,
            d,
            p,
            f,
            m = [],
            h = [],
            v = s.length,
            y =
              a ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) J(e, t[i], n);
                return n;
              })(t || "*", l.nodeType ? [l] : l, []),
            b = !e || (!a && t) ? y : me(y, m, e, l, c);
          if (
            (n ? n(b, (f = r || (a ? e : v || i) ? [] : s), l, c) : (f = b), i)
          )
            for (u = me(f, h), i(u, [], l, c), d = u.length; d--; )
              (p = u[d]) && (f[h[d]] = !(b[h[d]] = p));
          if (a) {
            if (r || e) {
              if (r) {
                for (u = [], d = f.length; d--; )
                  (p = f[d]) && u.push((b[d] = p));
                r(null, (f = []), u, c);
              }
              for (d = f.length; d--; )
                (p = f[d]) &&
                  (u = r ? o.call(a, p) : m[d]) > -1 &&
                  (a[u] = !(s[u] = p));
            }
          } else (f = me(f === s ? f.splice(v, f.length) : f)), r ? r(null, s, f, c) : g.apply(s, f);
        })
      );
    }
    function ge(e) {
      for (
        var t,
          n,
          r,
          s = e.length,
          l = i.relative[e[0].type],
          c = l || i.relative[" "],
          u = l ? 1 : 0,
          d = pe(
            function (e) {
              return e === t;
            },
            c,
            !0
          ),
          p = pe(
            function (e) {
              return o.call(t, e) > -1;
            },
            c,
            !0
          ),
          f = [
            function (e, n, i) {
              var r =
                (!l && (i || n != a)) ||
                ((t = n).nodeType ? d(e, n, i) : p(e, n, i));
              return (t = null), r;
            },
          ];
        u < s;
        u++
      )
        if ((n = i.relative[e[u].type])) f = [pe(fe(f), n)];
        else {
          if ((n = i.filter[e[u].type].apply(null, e[u].matches))[v]) {
            for (r = ++u; r < s && !i.relative[e[r].type]; r++);
            return he(
              u > 1 && fe(f),
              u > 1 &&
                de(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(I, "$1"),
              n,
              u < r && ge(e.slice(u, r)),
              r < s && ge((e = e.slice(r))),
              r < s && de(e)
            );
          }
          f.push(n);
        }
      return fe(f);
    }
    function ve(e, t) {
      var n,
        r = [],
        s = [],
        o = C[e + " "];
      if (!o) {
        for (t || (t = ue(e)), n = t.length; n--; )
          (o = ge(t[n]))[v] ? r.push(o) : s.push(o);
        (o = C(
          e,
          (function (e, t) {
            var n = t.length > 0,
              r = e.length > 0,
              s = function (s, o, l, u, d) {
                var f,
                  m,
                  h,
                  v = 0,
                  b = "0",
                  w = s && [],
                  x = [],
                  C = a,
                  E = s || (r && i.find.TAG("*", d)),
                  M = (y += null == C ? 1 : Math.random() || 0.1),
                  k = E.length;
                for (
                  d && (a = o == c || o || d);
                  b !== k && null != (f = E[b]);
                  b++
                ) {
                  if (r && f) {
                    for (
                      m = 0, o || f.ownerDocument == c || (le(f), (l = !p));
                      (h = e[m++]);

                    )
                      if (h(f, o || c, l)) {
                        g.call(u, f);
                        break;
                      }
                    d && (y = M);
                  }
                  n && ((f = !h && f) && v--, s && w.push(f));
                }
                if (((v += b), n && b !== v)) {
                  for (m = 0; (h = t[m++]); ) h(w, x, o, l);
                  if (s) {
                    if (v > 0) for (; b--; ) w[b] || x[b] || (x[b] = S.call(u));
                    x = me(x);
                  }
                  g.apply(u, x),
                    d &&
                      !s &&
                      x.length > 0 &&
                      v + t.length > 1 &&
                      T.uniqueSort(u);
                }
                return d && ((y = M), (a = C)), w;
              };
            return n ? te(s) : s;
          })(s, r)
        )),
          (o.selector = e);
      }
      return o;
    }
    function ye(e, t, n, r) {
      var a,
        s,
        o,
        l,
        c,
        u = "function" == typeof e && e,
        d = !r && ue((e = u.selector || e));
      if (((n = n || []), 1 === d.length)) {
        if (
          (s = d[0] = d[0].slice(0)).length > 2 &&
          "ID" === (o = s[0]).type &&
          9 === t.nodeType &&
          p &&
          i.relative[s[1].type]
        ) {
          if (!(t = (i.find.ID(o.matches[0].replace(U, Z), t) || [])[0]))
            return n;
          u && (t = t.parentNode), (e = e.slice(s.shift().value.length));
        }
        for (
          a = W.needsContext.test(e) ? 0 : s.length;
          a-- && ((o = s[a]), !i.relative[(l = o.type)]);

        )
          if (
            (c = i.find[l]) &&
            (r = c(
              o.matches[0].replace(U, Z),
              (V.test(s[0].type) && oe(t.parentNode)) || t
            ))
          ) {
            if ((s.splice(a, 1), !(e = r.length && de(s))))
              return g.apply(n, r), n;
            break;
          }
      }
      return (
        (u || ve(e, d))(
          r,
          t,
          !p,
          n,
          !t || (V.test(e) && oe(t.parentNode)) || t
        ),
        n
      );
    }
    (ce.prototype = i.filters = i.pseudos),
      (i.setFilters = new ce()),
      (f.sortStable = v.split("").sort(D).join("") === v),
      le(),
      (f.sortDetached = ne(function (e) {
        return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
      })),
      (T.find = J),
      (T.expr[":"] = T.expr.pseudos),
      (T.unique = T.uniqueSort),
      (J.compile = ve),
      (J.select = ye),
      (J.setDocument = le),
      (J.escape = T.escapeSelector),
      (J.getText = T.text),
      (J.isXML = T.isXMLDoc),
      (J.selectors = T.expr),
      (J.support = T.support),
      (J.uniqueSort = T.uniqueSort);
  })();
  var O = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && T(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    $ = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    z = T.expr.match.needsContext,
    N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return m(t)
      ? T.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? T.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? T.grep(e, function (e) {
          return o.call(t, e) > -1 !== n;
        })
      : T.filter(t, e, n);
  }
  (T.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? T.find.matchesSelector(i, e)
          ? [i]
          : []
        : T.find.matches(
            e,
            T.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    T.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            T(e).filter(function () {
              for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
        return i > 1 ? T.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && z.test(e) ? T(e) : e || [], !1)
          .length;
      },
    });
  var F,
    H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((T.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || F), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : H.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof T ? t[0] : t),
          T.merge(
            this,
            T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
          ),
          N.test(i[1]) && T.isPlainObject(t))
        )
          for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(T)
      : T.makeArray(e, this);
  }).prototype = T.fn),
    (F = T(g));
  var R = /^(?:parents|prev(?:Until|All))/,
    B = { children: !0, contents: !0, next: !0, prev: !0 };
  function q(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  T.fn.extend({
    has: function (e) {
      var t = T(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        a = [],
        s = "string" != typeof e && T(e);
      if (!z.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && T.find.matchesSelector(n, e))
            ) {
              a.push(n);
              break;
            }
      return this.pushStack(a.length > 1 ? T.uniqueSort(a) : a);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? o.call(T(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    T.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return O(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return O(e, "parentNode", n);
        },
        next: function (e) {
          return q(e, "nextSibling");
        },
        prev: function (e) {
          return q(e, "previousSibling");
        },
        nextAll: function (e) {
          return O(e, "nextSibling");
        },
        prevAll: function (e) {
          return O(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return O(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return O(e, "previousSibling", n);
        },
        siblings: function (e) {
          return $((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return $(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (E(e, "template") && (e = e.content || e),
              T.merge([], e.childNodes));
        },
      },
      function (e, t) {
        T.fn[e] = function (n, i) {
          var r = T.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = T.filter(i, r)),
            this.length > 1 &&
              (B[e] || T.uniqueSort(r), R.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var W = /[^\x20\t\r\n\f]+/g;
  function G(e) {
    return e;
  }
  function Y(e) {
    throw e;
  }
  function X(e, t, n, i) {
    var r;
    try {
      e && m((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && m((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (T.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              T.each(e.match(W) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : T.extend({}, e);
    var t,
      n,
      i,
      r,
      a = [],
      s = [],
      o = -1,
      l = function () {
        for (r = r || e.once, i = t = !0; s.length; o = -1)
          for (n = s.shift(); ++o < a.length; )
            !1 === a[o].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((o = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            a &&
              (n && !t && ((o = a.length - 1), s.push(n)),
              (function t(n) {
                T.each(n, function (n, i) {
                  m(i)
                    ? (e.unique && c.has(i)) || a.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            T.each(arguments, function (e, t) {
              for (var n; (n = T.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= o && o--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? T.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (r = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (r = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    T.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              T.Callbacks("memory"),
              T.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return T.Deferred(function (t) {
                T.each(n, function (n, i) {
                  var r = m(e[i[4]]) && e[i[4]];
                  a[i[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[i[0] + "With"](this, r ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, i, r) {
              var a = 0;
              function s(t, n, i, r) {
                return function () {
                  var o = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < a)) {
                        if ((e = i.apply(o, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(c)
                            ? r
                              ? c.call(e, s(a, n, G, r), s(a, n, Y, r))
                              : (a++,
                                c.call(
                                  e,
                                  s(a, n, G, r),
                                  s(a, n, Y, r),
                                  s(a, n, G, n.notifyWith)
                                ))
                            : (i !== G && ((o = void 0), (l = [e])),
                              (r || n.resolveWith)(o, l));
                      }
                    },
                    u = r
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            T.Deferred.exceptionHook &&
                              T.Deferred.exceptionHook(e, u.error),
                              t + 1 >= a &&
                                (i !== Y && ((o = void 0), (l = [e])),
                                n.rejectWith(o, l));
                          }
                        };
                  t
                    ? u()
                    : (T.Deferred.getErrorHook
                        ? (u.error = T.Deferred.getErrorHook())
                        : T.Deferred.getStackHook &&
                          (u.error = T.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return T.Deferred(function (e) {
                n[0][3].add(s(0, e, m(r) ? r : G, e.notifyWith)),
                  n[1][3].add(s(0, e, m(t) ? t : G)),
                  n[2][3].add(s(0, e, m(i) ? i : Y));
              }).promise();
            },
            promise: function (e) {
              return null != e ? T.extend(e, r) : r;
            },
          },
          a = {};
        return (
          T.each(n, function (e, t) {
            var s = t[2],
              o = t[5];
            (r[t[1]] = s.add),
              o &&
                s.add(
                  function () {
                    i = o;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + "With"] = s.fireWith);
          }),
          r.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          a = r.call(arguments),
          s = T.Deferred(),
          o = function (e) {
            return function (n) {
              (i[e] = this),
                (a[e] = arguments.length > 1 ? r.call(arguments) : n),
                --t || s.resolveWith(i, a);
            };
          };
        if (
          t <= 1 &&
          (X(e, s.done(o(n)).resolve, s.reject, !t),
          "pending" === s.state() || m(a[n] && a[n].then))
        )
          return s.then();
        for (; n--; ) X(a[n], o(n), s.reject);
        return s.promise();
      },
    });
  var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (T.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      V.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (T.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var U = T.Deferred();
  function Z() {
    g.removeEventListener("DOMContentLoaded", Z),
      e.removeEventListener("load", Z),
      T.ready();
  }
  (T.fn.ready = function (e) {
    return (
      U.then(e).catch(function (e) {
        T.readyException(e);
      }),
      this
    );
  }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0),
          (!0 !== e && --T.readyWait > 0) || U.resolveWith(g, [T]));
      },
    }),
    (T.ready.then = U.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(T.ready)
      : (g.addEventListener("DOMContentLoaded", Z),
        e.addEventListener("load", Z));
  var K = function (e, t, n, i, r, a, s) {
      var o = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (o in ((r = !0), n)) K(e, t, o, n[o], !0, a, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        m(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(T(e), n);
              }))),
        t)
      )
        for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : a;
    },
    Q = /^-ms-/,
    J = /-([a-z])/g;
  function ee(e, t) {
    return t.toUpperCase();
  }
  function te(e) {
    return e.replace(Q, "ms-").replace(J, ee);
  }
  var ne = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function ie() {
    this.expando = T.expando + ie.uid++;
  }
  (ie.uid = 1),
    (ie.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ne(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[te(t)] = n;
        else for (i in t) r[te(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][te(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(te)
              : (t = te(t)) in i
              ? [t]
              : t.match(W) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || T.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t);
      },
    });
  var re = new ie(),
    ae = new ie(),
    se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    oe = /[A-Z]/g;
  function le(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(oe, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : se.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        ae.set(e, t, n);
      } else n = void 0;
    return n;
  }
  T.extend({
    hasData: function (e) {
      return ae.hasData(e) || re.hasData(e);
    },
    data: function (e, t, n) {
      return ae.access(e, t, n);
    },
    removeData: function (e, t) {
      ae.remove(e, t);
    },
    _data: function (e, t, n) {
      return re.access(e, t, n);
    },
    _removeData: function (e, t) {
      re.remove(e, t);
    },
  }),
    T.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          a = this[0],
          s = a && a.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = ae.get(a)), 1 === a.nodeType && !re.get(a, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = te(i.slice(5))), le(a, i, r[i]));
            re.set(a, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              ae.set(this, e);
            })
          : K(
              this,
              function (t) {
                var n;
                if (a && void 0 === t)
                  return void 0 !== (n = ae.get(a, e)) ||
                    void 0 !== (n = le(a, e))
                    ? n
                    : void 0;
                this.each(function () {
                  ae.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          ae.remove(this, e);
        });
      },
    }),
    T.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = re.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = re.access(e, t, T.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          i = n.length,
          r = n.shift(),
          a = T._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            r.call(
              e,
              function () {
                T.dequeue(e, t);
              },
              a
            )),
          !i && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          re.get(e, n) ||
          re.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              re.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? T.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = T.queue(this, e, t);
                T._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = T.Deferred(),
          a = this,
          s = this.length,
          o = function () {
            --i || r.resolveWith(a, [a]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = re.get(a[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(o));
        return o(), r.promise(t);
      },
    });
  var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ue = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
    de = ["Top", "Right", "Bottom", "Left"],
    pe = g.documentElement,
    fe = function (e) {
      return T.contains(e.ownerDocument, e);
    },
    me = { composed: !0 };
  pe.getRootNode &&
    (fe = function (e) {
      return (
        T.contains(e.ownerDocument, e) || e.getRootNode(me) === e.ownerDocument
      );
    });
  var he = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && fe(e) && "none" === T.css(e, "display"))
    );
  };
  function ge(e, t, n, i) {
    var r,
      a,
      s = 20,
      o = i
        ? function () {
            return i.cur();
          }
        : function () {
            return T.css(e, t, "");
          },
      l = o(),
      c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (T.cssNumber[t] || ("px" !== c && +l)) &&
        ue.exec(T.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        T.style(e, t, u + c),
          (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0),
          (u /= a);
      (u *= 2), T.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var ve = {};
  function ye(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = ve[i];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(i))),
      (r = T.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === r && (r = "block"),
      (ve[i] = r),
      r)
    );
  }
  function be(e, t) {
    for (var n, i, r = [], a = 0, s = e.length; a < s; a++)
      (i = e[a]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((r[a] = re.get(i, "display") || null),
              r[a] || (i.style.display = "")),
            "" === i.style.display && he(i) && (r[a] = ye(i)))
          : "none" !== n && ((r[a] = "none"), re.set(i, "display", n)));
    for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
    return e;
  }
  T.fn.extend({
    show: function () {
      return be(this, !0);
    },
    hide: function () {
      return be(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            he(this) ? T(this).show() : T(this).hide();
          });
    },
  });
  var we,
    xe,
    Te = /^(?:checkbox|radio)$/i,
    Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ee = /^$|^module$|\/(?:java|ecma)script/i;
  (we = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (xe = g.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    we.appendChild(xe),
    (f.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (we.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue),
    (we.innerHTML = "<option></option>"),
    (f.option = !!we.lastChild);
  var Se = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && E(e, t)) ? T.merge([e], n) : n
    );
  }
  function ke(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      re.set(e[n], "globalEval", !t || re.get(t[n], "globalEval"));
  }
  (Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead),
    (Se.th = Se.td),
    f.option ||
      (Se.optgroup = Se.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var _e = /<|&#?\w+;/;
  function Ie(e, t, n, i, r) {
    for (
      var a,
        s,
        o,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        f = 0,
        m = e.length;
      f < m;
      f++
    )
      if ((a = e[f]) || 0 === a)
        if ("object" === b(a)) T.merge(p, a.nodeType ? [a] : a);
        else if (_e.test(a)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              o = (Ce.exec(a) || ["", ""])[1].toLowerCase(),
              l = Se[o] || Se._default,
              s.innerHTML = l[1] + T.htmlPrefilter(a) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          T.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(a));
    for (d.textContent = "", f = 0; (a = p[f++]); )
      if (i && T.inArray(a, i) > -1) r && r.push(a);
      else if (
        ((c = fe(a)), (s = Me(d.appendChild(a), "script")), c && ke(s), n)
      )
        for (u = 0; (a = s[u++]); ) Ee.test(a.type || "") && n.push(a);
    return d;
  }
  var Pe = /^([^.]*)(?:\.(.+)|)/;
  function De() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function Le(e, t, n, i, r, a) {
    var s, o;
    if ("object" == typeof t) {
      for (o in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Le(e, o, n, i, t[o], a);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Ae;
    else if (!r) return e;
    return (
      1 === a &&
        ((s = r),
        (r = function (e) {
          return T().off(e), s.apply(this, arguments);
        }),
        (r.guid = s.guid || (s.guid = T.guid++))),
      e.each(function () {
        T.event.add(this, t, r, i, n);
      })
    );
  }
  function Oe(e, t, n) {
    n
      ? (re.set(e, t, !1),
        T.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var n,
              i = re.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (i)
                (T.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = r.call(arguments)),
                re.set(this, t, i),
                this[t](),
                (n = re.get(this, t)),
                re.set(this, t, !1),
                i !== n)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), n;
            } else
              i &&
                (re.set(this, t, T.event.trigger(i[0], i.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = De));
          },
        }))
      : void 0 === re.get(e, t) && T.event.add(e, t, De);
  }
  (T.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var a,
        s,
        o,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g = re.get(e);
      if (ne(e))
        for (
          n.handler && ((n = (a = n).handler), (r = a.selector)),
            r && T.find.matchesSelector(pe, r),
            n.guid || (n.guid = T.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return void 0 !== T && T.event.triggered !== t.type
                    ? T.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(W) || [""]).length;
          c--;

        )
          (f = h = (o = Pe.exec(t[c]) || [])[1]),
            (m = (o[2] || "").split(".").sort()),
            f &&
              ((d = T.event.special[f] || {}),
              (f = (r ? d.delegateType : d.bindType) || f),
              (d = T.event.special[f] || {}),
              (u = T.extend(
                {
                  type: f,
                  origType: h,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && T.expr.match.needsContext.test(r),
                  namespace: m.join("."),
                },
                a
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, m, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (T.event.global[f] = !0));
    },
    remove: function (e, t, n, i, r) {
      var a,
        s,
        o,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g = re.hasData(e) && re.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(W) || [""]).length; c--; )
          if (
            ((f = h = (o = Pe.exec(t[c]) || [])[1]),
            (m = (o[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = T.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                o =
                  o[2] &&
                  new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = a = p.length;
              a--;

            )
              (u = p[a]),
                (!r && h !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (o && !o.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(a, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u));
            s &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, m, g.handle)) ||
                T.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) T.event.remove(e, f + t[c], n, i, !0);
        T.isEmptyObject(l) && re.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        a,
        s,
        o = new Array(arguments.length),
        l = T.event.fix(e),
        c = (re.get(this, "events") || Object.create(null))[l.type] || [],
        u = T.event.special[l.type] || {};
      for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          s = T.event.handlers.call(this, l, c), t = 0;
          (r = s[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (a = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== a.namespace &&
              !l.rnamespace.test(a.namespace)) ||
              ((l.handleObj = a),
              (l.data = a.data),
              void 0 !==
                (i = (
                  (T.event.special[a.origType] || {}).handle || a.handler
                ).apply(r.elem, o)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        a,
        s,
        o = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (a = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? T(r, this).index(c) > -1
                  : T.find(r, this, null, [c]).length),
                s[r] && a.push(i);
            a.length && o.push({ elem: c, handlers: a });
          }
      return (
        (c = this), l < t.length && o.push({ elem: c, handlers: t.slice(l) }), o
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(T.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[T.expando] ? e : new T.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            Te.test(t.type) && t.click && E(t, "input") && Oe(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            Te.test(t.type) && t.click && E(t, "input") && Oe(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (Te.test(t.type) &&
              t.click &&
              E(t, "input") &&
              re.get(t, "click")) ||
            E(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? De
              : Ae),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && T.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[T.expando] = !0);
    }),
    (T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = De),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = De),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = De),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    T.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      T.event.addProp
    ),
    T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      function n(e) {
        if (g.documentMode) {
          var n = re.get(this, "handle"),
            i = T.event.fix(e);
          (i.type = "focusin" === e.type ? "focus" : "blur"),
            (i.isSimulated = !0),
            n(e),
            i.target === i.currentTarget && n(i);
        } else T.event.simulate(t, e.target, T.event.fix(e));
      }
      (T.event.special[e] = {
        setup: function () {
          var i;
          if ((Oe(this, e, !0), !g.documentMode)) return !1;
          (i = re.get(this, t)) || this.addEventListener(t, n),
            re.set(this, t, (i || 0) + 1);
        },
        trigger: function () {
          return Oe(this, e), !0;
        },
        teardown: function () {
          var e;
          if (!g.documentMode) return !1;
          (e = re.get(this, t) - 1)
            ? re.set(this, t, e)
            : (this.removeEventListener(t, n), re.remove(this, t));
        },
        _default: function (t) {
          return re.get(t.target, e);
        },
        delegateType: t,
      }),
        (T.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = g.documentMode ? this : i,
              a = re.get(r, t);
            a ||
              (g.documentMode
                ? this.addEventListener(t, n)
                : i.addEventListener(e, n, !0)),
              re.set(r, t, (a || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = g.documentMode ? this : i,
              a = re.get(r, t) - 1;
            a
              ? re.set(r, t, a)
              : (g.documentMode
                  ? this.removeEventListener(t, n)
                  : i.removeEventListener(e, n, !0),
                re.remove(r, t));
          },
        });
    }),
    T.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        T.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || T.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    T.fn.extend({
      on: function (e, t, n, i) {
        return Le(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Le(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            T(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ae),
          this.each(function () {
            T.event.remove(this, e, n, t);
          })
        );
      },
    });
  var $e = /<script|<style|<link/i,
    ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (E(e, "table") &&
        E(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        T(e).children("tbody")[0]) ||
      e
    );
  }
  function Fe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Re(e, t) {
    var n, i, r, a, s, o;
    if (1 === t.nodeType) {
      if (re.hasData(e) && (o = re.get(e).events))
        for (r in (re.remove(t, "handle events"), o))
          for (n = 0, i = o[r].length; n < i; n++) T.event.add(t, r, o[r][n]);
      ae.hasData(e) &&
        ((a = ae.access(e)), (s = T.extend({}, a)), ae.set(t, s));
    }
  }
  function Be(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Te.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function qe(e, t, n, i) {
    t = a(t);
    var r,
      s,
      o,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      h = p - 1,
      g = t[0],
      v = m(g);
    if (v || (p > 1 && "string" == typeof g && !f.checkClone && ze.test(g)))
      return e.each(function (r) {
        var a = e.eq(r);
        v && (t[0] = g.call(this, r, a.html())), qe(a, t, n, i);
      });
    if (
      p &&
      ((s = (r = Ie(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = s),
      s || i)
    ) {
      for (l = (o = T.map(Me(r, "script"), Fe)).length; d < p; d++)
        (c = r),
          d !== h &&
            ((c = T.clone(c, !0, !0)), l && T.merge(o, Me(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = o[o.length - 1].ownerDocument, T.map(o, He), d = 0; d < l; d++)
          (c = o[d]),
            Ee.test(c.type || "") &&
              !re.access(c, "globalEval") &&
              T.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? T._evalUrl &&
                  !c.noModule &&
                  T._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    u
                  )
                : y(c.textContent.replace(Ne, ""), c, u));
    }
    return e;
  }
  function We(e, t, n) {
    for (var i, r = t ? T.filter(t, e) : e, a = 0; null != (i = r[a]); a++)
      n || 1 !== i.nodeType || T.cleanData(Me(i)),
        i.parentNode &&
          (n && fe(i) && ke(Me(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  T.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        a,
        s,
        o = e.cloneNode(!0),
        l = fe(e);
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          T.isXMLDoc(e)
        )
      )
        for (s = Me(o), i = 0, r = (a = Me(e)).length; i < r; i++)
          Be(a[i], s[i]);
      if (t)
        if (n)
          for (a = a || Me(e), s = s || Me(o), i = 0, r = a.length; i < r; i++)
            Re(a[i], s[i]);
        else Re(e, o);
      return (
        (s = Me(o, "script")).length > 0 && ke(s, !l && Me(e, "script")), o
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = T.event.special, a = 0; void 0 !== (n = e[a]); a++)
        if (ne(n)) {
          if ((t = n[re.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
            n[re.expando] = void 0;
          }
          n[ae.expando] && (n[ae.expando] = void 0);
        }
    },
  }),
    T.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return K(
          this,
          function (e) {
            return void 0 === e
              ? T.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (T.cleanData(Me(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return T.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return K(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !$e.test(e) &&
              !Se[(Ce.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = T.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (T.cleanData(Me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return qe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            T.inArray(this, e) < 0 &&
              (T.cleanData(Me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        T.fn[e] = function (e) {
          for (var n, i = [], r = T(e), a = r.length - 1, o = 0; o <= a; o++)
            (n = o === a ? this : this.clone(!0)),
              T(r[o])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Ge = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
    Ye = /^--/,
    Xe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Ve = function (e, t, n) {
      var i,
        r,
        a = {};
      for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = a[r];
      return i;
    },
    Ue = new RegExp(de.join("|"), "i");
  function Ze(e, t, n) {
    var i,
      r,
      a,
      s,
      o = Ye.test(t),
      l = e.style;
    return (
      (n = n || Xe(e)) &&
        ((s = n.getPropertyValue(t) || n[t]),
        o && s && (s = s.replace(I, "$1") || void 0),
        "" !== s || fe(e) || (s = T.style(e, t)),
        !f.pixelBoxStyles() &&
          Ge.test(s) &&
          Ue.test(t) &&
          ((i = l.width),
          (r = l.minWidth),
          (a = l.maxWidth),
          (l.minWidth = l.maxWidth = l.width = s),
          (s = n.width),
          (l.width = i),
          (l.minWidth = r),
          (l.maxWidth = a))),
      void 0 !== s ? s + "" : s
    );
  }
  function Ke(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          pe.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (a = 12 === n(u.offsetWidth / 3)),
          pe.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      a,
      s,
      o,
      l,
      c = g.createElement("div"),
      u = g.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
      T.extend(f, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), a;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == o &&
              ((t = g.createElement("table")),
              (n = g.createElement("tr")),
              (i = g.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              pe.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (o =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                n.offsetHeight),
              pe.removeChild(t)),
            o
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = g.createElement("div").style,
    et = {};
  function tt(e) {
    return (
      T.cssProps[e] ||
      et[e] ||
      (e in Je
        ? e
        : (et[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
                n--;

              )
                if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var nt = /^(none|table(?!-c[ea]).+)/,
    it = { position: "absolute", visibility: "hidden", display: "block" },
    rt = { letterSpacing: "0", fontWeight: "400" };
  function at(e, t, n) {
    var i = ue.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function st(e, t, n, i, r, a) {
    var s = "width" === t ? 1 : 0,
      o = 0,
      l = 0,
      c = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (c += T.css(e, n + de[s], !0, r)),
        i
          ? ("content" === n && (l -= T.css(e, "padding" + de[s], !0, r)),
            "margin" !== n &&
              (l -= T.css(e, "border" + de[s] + "Width", !0, r)))
          : ((l += T.css(e, "padding" + de[s], !0, r)),
            "padding" !== n
              ? (l += T.css(e, "border" + de[s] + "Width", !0, r))
              : (o += T.css(e, "border" + de[s] + "Width", !0, r)));
    return (
      !i &&
        a >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - 0.5
            )
          ) || 0),
      l + c
    );
  }
  function ot(e, t, n) {
    var i = Xe(e),
      r =
        (!f.boxSizingReliable() || n) &&
        "border-box" === T.css(e, "boxSizing", !1, i),
      a = r,
      s = Ze(e, t, i),
      o = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ge.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!f.boxSizingReliable() && r) ||
        (!f.reliableTrDimensions() && E(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
        (a = o in e) && (s = e[o])),
      (s = parseFloat(s) || 0) +
        st(e, t, n || (r ? "border" : "content"), a, i, s) +
        "px"
    );
  }
  function lt(e, t, n, i, r) {
    return new lt.prototype.init(e, t, n, i, r);
  }
  T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ze(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          a,
          s,
          o = te(t),
          l = Ye.test(t),
          c = e.style;
        if (
          (l || (t = tt(o)), (s = T.cssHooks[t] || T.cssHooks[o]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        "string" == (a = typeof n) &&
          (r = ue.exec(n)) &&
          r[1] &&
          ((n = ge(e, t, r)), (a = "number")),
          null != n &&
            n == n &&
            ("number" !== a ||
              l ||
              (n += (r && r[3]) || (T.cssNumber[o] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        a,
        s,
        o = te(t);
      return (
        Ye.test(t) || (t = tt(o)),
        (s = T.cssHooks[t] || T.cssHooks[o]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = Ze(e, t, i)),
        "normal" === r && t in rt && (r = rt[t]),
        "" === n || n
          ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r)
          : r
      );
    },
  }),
    T.each(["height", "width"], function (e, t) {
      T.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !nt.test(T.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, t, i)
              : Ve(e, it, function () {
                  return ot(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            a = Xe(e),
            s = !f.scrollboxSize() && "absolute" === a.position,
            o = (s || i) && "border-box" === T.css(e, "boxSizing", !1, a),
            l = i ? st(e, t, i, o, a) : 0;
          return (
            o &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(a[t]) -
                  st(e, t, "border", !1, a) -
                  0.5
              )),
            l &&
              (r = ue.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = T.css(e, t))),
            at(0, n, l)
          );
        },
      };
    }),
    (T.cssHooks.marginLeft = Ke(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ze(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ve(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (T.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + de[i] + t] = a[i] || a[i - 2] || a[0];
          return r;
        },
      }),
        "margin" !== e && (T.cssHooks[e + t].set = at);
    }),
    T.fn.extend({
      css: function (e, t) {
        return K(
          this,
          function (e, t, n) {
            var i,
              r,
              a = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Xe(e), r = t.length; s < r; s++)
                a[t[s]] = T.css(e, t[s], !1, i);
              return a;
            }
            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (T.Tween = lt),
    (lt.prototype = {
      constructor: lt,
      init: function (e, t, n, i, r, a) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || T.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = a || (T.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = lt.propHooks[this.prop];
        return e && e.get ? e.get(this) : lt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = lt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                T.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : lt.propHooks._default.set(this),
          this
        );
      },
    }),
    (lt.prototype.init.prototype = lt.prototype),
    (lt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          T.fx.step[e.prop]
            ? T.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!T.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : T.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (lt.propHooks.scrollTop = lt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (T.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (T.fx = lt.prototype.init),
    (T.fx.step = {});
  var ct,
    ut,
    dt = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function ft() {
    ut &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ft)
        : e.setTimeout(ft, T.fx.interval),
      T.fx.tick());
  }
  function mt() {
    return (
      e.setTimeout(function () {
        ct = void 0;
      }),
      (ct = Date.now())
    );
  }
  function ht(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = de[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function gt(e, t, n) {
    for (
      var i,
        r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
        a = 0,
        s = r.length;
      a < s;
      a++
    )
      if ((i = r[a].call(n, t, e))) return i;
  }
  function vt(e, t, n) {
    var i,
      r,
      a = 0,
      s = vt.prefilters.length,
      o = T.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = ct || mt(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            a = 0,
            s = c.tweens.length;
          a < s;
          a++
        )
          c.tweens[a].run(i);
        return (
          o.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
        );
      },
      c = o.promise({
        elem: e,
        props: T.extend({}, t),
        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ct || mt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = T.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t]))
              : o.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, r, a, s;
        for (n in e)
          if (
            ((r = t[(i = te(n))]),
            (a = e[n]),
            Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])),
            n !== i && ((e[i] = a), delete e[n]),
            (s = T.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((a = s.expand(a)), delete e[i], a))
              (n in e) || ((e[n] = a[n]), (t[n] = r));
          else t[i] = r;
      })(u, c.opts.specialEasing);
      a < s;
      a++
    )
      if ((i = vt.prefilters[a].call(c, e, u, c.opts)))
        return (
          m(i.stop) &&
            (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      T.map(u, gt, c),
      m(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (T.Animation = T.extend(vt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ge(n.elem, e, ue.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(W));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (vt.tweeners[n] = vt.tweeners[n] || []),
          vt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          a,
          s,
          o,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          p = this,
          f = {},
          m = e.style,
          h = e.nodeType && he(e),
          g = re.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = T._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (o = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || o();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), dt.test(r))) {
            if (
              (delete t[i],
              (a = a || "toggle" === r),
              r === (h ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              h = !0;
            }
            f[i] = (g && g[i]) || T.style(e, i);
          }
        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [m.overflow, m.overflowX, m.overflowY]),
            null == (c = g && g.display) && (c = re.get(e, "display")),
            "none" === (u = T.css(e, "display")) &&
              (c
                ? (u = c)
                : (be([e], !0),
                  (c = e.style.display || c),
                  (u = T.css(e, "display")),
                  be([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === T.css(e, "float") &&
              (l ||
                (p.done(function () {
                  m.display = c;
                }),
                null == c && ((u = m.display), (c = "none" === u ? "" : u))),
              (m.display = "inline-block"))),
          n.overflow &&
            ((m.overflow = "hidden"),
            p.always(function () {
              (m.overflow = n.overflow[0]),
                (m.overflowX = n.overflow[1]),
                (m.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (h = g.hidden)
                : (g = re.access(e, "fxshow", { display: c })),
              a && (g.hidden = !h),
              h && be([e], !0),
              p.done(function () {
                for (i in (h || be([e]), re.remove(e, "fxshow"), f))
                  T.style(e, i, f[i]);
              })),
              (l = gt(h ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), h && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
    },
  })),
    (T.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? T.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        T.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in T.fx.speeds
              ? (i.duration = T.fx.speeds[i.duration])
              : (i.duration = T.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          m(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
        }),
        i
      );
    }),
    T.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(he)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = T.isEmptyObject(e),
          a = T.speed(t, n, i),
          s = function () {
            var t = vt(this, T.extend({}, e), a);
            (r || re.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              a = T.timers,
              s = re.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && pt.test(r) && i(s[r]);
            for (r = a.length; r--; )
              a[r].elem !== this ||
                (null != e && a[r].queue !== e) ||
                (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
            (!t && n) || T.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = re.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              a = T.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                T.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = a.length;
              t--;

            )
              a[t].elem === this &&
                a[t].queue === e &&
                (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (e, t) {
      var n = T.fn[t];
      T.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ht(t, !0), e, i, r);
      };
    }),
    T.each(
      {
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        T.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var e,
        t = 0,
        n = T.timers;
      for (ct = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || T.fx.stop(), (ct = void 0);
    }),
    (T.fx.timer = function (e) {
      T.timers.push(e), T.fx.start();
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      ut || ((ut = !0), ft());
    }),
    (T.fx.stop = function () {
      ut = null;
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (t, n) {
      return (
        (t = (T.fx && T.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = g.createElement("input"),
        t = g.createElement("select").appendChild(g.createElement("option"));
      (e.type = "checkbox"),
        (f.checkOn = "" !== e.value),
        (f.optSelected = t.selected),
        ((e = g.createElement("input")).value = "t"),
        (e.type = "radio"),
        (f.radioValue = "t" === e.value);
    })();
  var yt,
    bt = T.expr.attrHandle;
  T.fn.extend({
    attr: function (e, t) {
      return K(this, T.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        T.removeAttr(this, e);
      });
    },
  }),
    T.extend({
      attr: function (e, t, n) {
        var i,
          r,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return void 0 === e.getAttribute
            ? T.prop(e, t, n)
            : ((1 === a && T.isXMLDoc(e)) ||
                (r =
                  T.attrHooks[t.toLowerCase()] ||
                  (T.expr.match.bool.test(t) ? yt : void 0)),
              void 0 !== n
                ? null === n
                  ? void T.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = T.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && "radio" === t && E(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(W);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (yt = {
      set: function (e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = bt[t] || T.find.attr;
      bt[t] = function (e, t, i) {
        var r,
          a,
          s = t.toLowerCase();
        return (
          i ||
            ((a = bt[s]),
            (bt[s] = r),
            (r = null != n(e, t, i) ? s : null),
            (bt[s] = a)),
          r
        );
      };
    });
  var wt = /^(?:input|select|textarea|button)$/i,
    xt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(W) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Et(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(W)) || [];
  }
  T.fn.extend({
    prop: function (e, t) {
      return K(this, T.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e];
      });
    },
  }),
    T.extend({
      prop: function (e, t, n) {
        var i,
          r,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && T.isXMLDoc(e)) ||
              ((t = T.propFix[t] || t), (r = T.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (T.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      }
    ),
    T.fn.extend({
      addClass: function (e) {
        var t, n, i, r, a, s;
        return m(e)
          ? this.each(function (t) {
              T(this).addClass(e.call(this, t, Ct(this)));
            })
          : (t = Et(e)).length
          ? this.each(function () {
              if (
                ((i = Ct(this)), (n = 1 === this.nodeType && " " + Tt(i) + " "))
              ) {
                for (a = 0; a < t.length; a++)
                  (r = t[a]), n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                (s = Tt(n)), i !== s && this.setAttribute("class", s);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, n, i, r, a, s;
        return m(e)
          ? this.each(function (t) {
              T(this).removeClass(e.call(this, t, Ct(this)));
            })
          : arguments.length
          ? (t = Et(e)).length
            ? this.each(function () {
                if (
                  ((i = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(i) + " "))
                ) {
                  for (a = 0; a < t.length; a++)
                    for (r = t[a]; n.indexOf(" " + r + " ") > -1; )
                      n = n.replace(" " + r + " ", " ");
                  (s = Tt(n)), i !== s && this.setAttribute("class", s);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          i,
          r,
          a,
          s = typeof e,
          o = "string" === s || Array.isArray(e);
        return m(e)
          ? this.each(function (n) {
              T(this).toggleClass(e.call(this, n, Ct(this), t), t);
            })
          : "boolean" == typeof t && o
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = Et(e)),
            this.each(function () {
              if (o)
                for (a = T(this), r = 0; r < n.length; r++)
                  (i = n[r]), a.hasClass(i) ? a.removeClass(i) : a.addClass(i);
              else
                (void 0 !== e && "boolean" !== s) ||
                  ((i = Ct(this)) && re.set(this, "__className__", i),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      i || !1 === e ? "" : re.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + Tt(Ct(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  T.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = m(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, T(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = T.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                T.valHooks[this.type] ||
                T.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(St, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    T.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : Tt(T.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              o = s ? null : [],
              l = s ? a + 1 : r.length;
            for (i = a < 0 ? l : s ? a : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))
              ) {
                if (((t = T(n).val()), s)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, a = T.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                T.inArray(T.valHooks.option.get(i), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a;
          },
        },
      },
    }),
    T.each(["radio", "checkbox"], function () {
      (T.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = T.inArray(T(e).val(), t) > -1);
        },
      }),
        f.checkOn ||
          (T.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Mt = e.location,
    kt = { guid: Date.now() },
    _t = /\?/;
  T.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        T.error(
          "Invalid XML: " +
            (i
              ? T.map(i.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : t)
        ),
      n
    );
  };
  var It = /^(?:focusinfocus|focusoutblur)$/,
    Pt = function (e) {
      e.stopPropagation();
    };
  T.extend(T.event, {
    trigger: function (t, n, i, r) {
      var a,
        s,
        o,
        l,
        c,
        d,
        p,
        f,
        v = [i || g],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = f = o = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !It.test(y + T.event.triggered) &&
          (y.indexOf(".") > -1 &&
            ((b = y.split(".")), (y = b.shift()), b.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[T.expando]
            ? t
            : new T.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : T.makeArray(n, [t])),
          (p = T.event.special[y] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(i, n)))
      ) {
        if (!r && !p.noBubble && !h(i)) {
          for (
            l = p.delegateType || y, It.test(l + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (o = s);
          o === (i.ownerDocument || g) &&
            v.push(o.defaultView || o.parentWindow || e);
        }
        for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
          (f = s),
            (t.type = a > 1 ? l : p.bindType || y),
            (d =
              (re.get(s, "events") || Object.create(null))[t.type] &&
              re.get(s, "handle")) && d.apply(s, n),
            (d = c && s[c]) &&
              d.apply &&
              ne(s) &&
              ((t.result = d.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), n)) ||
            !ne(i) ||
            (c &&
              m(i[y]) &&
              !h(i) &&
              ((o = i[c]) && (i[c] = null),
              (T.event.triggered = y),
              t.isPropagationStopped() && f.addEventListener(y, Pt),
              i[y](),
              t.isPropagationStopped() && f.removeEventListener(y, Pt),
              (T.event.triggered = void 0),
              o && (i[c] = o))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
      T.event.trigger(i, null, t);
    },
  }),
    T.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0);
      },
    });
  var Dt = /\[\]$/,
    At = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function $t(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      T.each(t, function (t, r) {
        n || Dt.test(e)
          ? i(e, r)
          : $t(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (r in t) $t(e + "[" + r + "]", t[r], n, i);
  }
  (T.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = m(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
      T.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) $t(n, e[n], t, r);
    return i.join("&");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !Te.test(e))
            );
          })
          .map(function (e, t) {
            var n = T(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? T.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var zt = /%20/g,
    Nt = /#.*$/,
    jt = /([?&])_=[^&]*/,
    Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ht = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    Bt = {},
    qt = {},
    Wt = "*/".concat("*"),
    Gt = g.createElement("a");
  function Yt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        a = t.toLowerCase().match(W) || [];
      if (m(n))
        for (; (i = a[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Xt(e, t, n, i) {
    var r = {},
      a = e === qt;
    function s(o) {
      var l;
      return (
        (r[o] = !0),
        T.each(e[o] || [], function (e, o) {
          var c = o(t, n, i);
          return "string" != typeof c || a || r[c]
            ? a
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function Vt(e, t) {
    var n,
      i,
      r = T.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && T.extend(!0, e, i), e;
  }
  (Gt.href = Mt.href),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Mt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Vt(Vt(e, T.ajaxSettings), t) : Vt(T.ajaxSettings, e);
      },
      ajaxPrefilter: Yt(Bt),
      ajaxTransport: Yt(qt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          r,
          a,
          s,
          o,
          l,
          c,
          u,
          d,
          p,
          f = T.ajaxSetup({}, n),
          m = f.context || f,
          h = f.context && (m.nodeType || m.jquery) ? T(m) : T.event,
          v = T.Deferred(),
          y = T.Callbacks("once memory"),
          b = f.statusCode || {},
          w = {},
          x = {},
          C = "canceled",
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Ft.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) E.always(e[E.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), S(0, t), this;
            },
          };
        if (
          (v.promise(E),
          (f.url = ((t || f.url || Mt.href) + "").replace(
            Rt,
            Mt.protocol + "//"
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(W) || [""]),
          null == f.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = f.url),
              (l.href = l.href),
              (f.crossDomain =
                Gt.protocol + "//" + Gt.host != l.protocol + "//" + l.host);
          } catch (e) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = T.param(f.data, f.traditional)),
          Xt(Bt, f, n, E),
          c)
        )
          return E;
        for (d in ((u = T.event && f.global) &&
          0 == T.active++ &&
          T.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Ht.test(f.type)),
        (r = f.url.replace(Nt, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(zt, "+"))
          : ((p = f.url.slice(r.length)),
            f.data &&
              (f.processData || "string" == typeof f.data) &&
              ((r += (_t.test(r) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((r = r.replace(jt, "$1")),
              (p = (_t.test(r) ? "&" : "?") + "_=" + kt.guid++ + p)),
            (f.url = r + p)),
        f.ifModified &&
          (T.lastModified[r] &&
            E.setRequestHeader("If-Modified-Since", T.lastModified[r]),
          T.etag[r] && E.setRequestHeader("If-None-Match", T.etag[r])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", f.contentType),
        E.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          E.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(m, E, f) || c))
          return E.abort();
        if (
          ((C = "abort"),
          y.add(f.complete),
          E.done(f.success),
          E.fail(f.error),
          (i = Xt(qt, f, n, E)))
        ) {
          if (((E.readyState = 1), u && h.trigger("ajaxSend", [E, f]), c))
            return E;
          f.async &&
            f.timeout > 0 &&
            (o = e.setTimeout(function () {
              E.abort("timeout");
            }, f.timeout));
          try {
            (c = !1), i.send(w, S);
          } catch (e) {
            if (c) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");
        function S(t, n, s, l) {
          var d,
            p,
            g,
            w,
            x,
            C = n;
          c ||
            ((c = !0),
            o && e.clearTimeout(o),
            (i = void 0),
            (a = l || ""),
            (E.readyState = t > 0 ? 4 : 0),
            (d = (t >= 200 && t < 300) || 304 === t),
            s &&
              (w = (function (e, t, n) {
                for (
                  var i, r, a, s, o = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in o)
                    if (o[r] && o[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) a = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      a = r;
                      break;
                    }
                    s || (s = r);
                  }
                  a = a || s;
                }
                if (a) return a !== l[0] && l.unshift(a), n[a];
              })(f, E, s)),
            !d &&
              T.inArray("script", f.dataTypes) > -1 &&
              T.inArray("json", f.dataTypes) < 0 &&
              (f.converters["text script"] = function () {}),
            (w = (function (e, t, n, i) {
              var r,
                a,
                s,
                o,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (a = u.shift(); a; )
                if (
                  (e.responseFields[a] && (n[e.responseFields[a]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = a),
                  (a = u.shift()))
                )
                  if ("*" === a) a = l;
                  else if ("*" !== l && l !== a) {
                    if (!(s = c[l + " " + a] || c["* " + a]))
                      for (r in c)
                        if (
                          (o = r.split(" "))[1] === a &&
                          (s = c[l + " " + o[0]] || c["* " + o[0]])
                        ) {
                          !0 === s
                            ? (s = c[r])
                            : !0 !== c[r] && ((a = o[0]), u.unshift(o[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + a,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, w, E, d)),
            d
              ? (f.ifModified &&
                  ((x = E.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[r] = x),
                  (x = E.getResponseHeader("etag")) && (T.etag[r] = x)),
                204 === t || "HEAD" === f.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = w.state), (p = w.data), (d = !(g = w.error))))
              : ((g = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || C) + ""),
            d ? v.resolveWith(m, [p, C, E]) : v.rejectWith(m, [E, C, g]),
            E.statusCode(b),
            (b = void 0),
            u && h.trigger(d ? "ajaxSuccess" : "ajaxError", [E, f, d ? p : g]),
            y.fireWith(m, [E, C]),
            u &&
              (h.trigger("ajaxComplete", [E, f]),
              --T.active || T.event.trigger("ajaxStop")));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script");
      },
    }),
    T.each(["get", "post"], function (e, t) {
      T[t] = function (e, n, i, r) {
        return (
          m(n) && ((r = r || i), (i = n), (n = void 0)),
          T.ajax(
            T.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              T.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    T.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (T._evalUrl = function (e, t, n) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          T.globalEval(e, t, n);
        },
      });
    }),
    T.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return m(e)
          ? this.each(function (t) {
              T(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = T(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = m(e);
        return this.each(function (n) {
          T(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              T(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }),
    (T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Zt = T.ajaxSettings.xhr();
  (f.cors = !!Zt && "withCredentials" in Zt),
    (f.ajax = Zt = !!Zt),
    T.ajaxTransport(function (t) {
      var n, i;
      if (f.cors || (Zt && !t.crossDomain))
        return {
          send: function (r, a) {
            var s,
              o = t.xhr();
            if (
              (o.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) o[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              o.overrideMimeType &&
              o.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              o.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    o.onload =
                    o.onerror =
                    o.onabort =
                    o.ontimeout =
                    o.onreadystatechange =
                      null),
                  "abort" === e
                    ? o.abort()
                    : "error" === e
                    ? "number" != typeof o.status
                      ? a(0, "error")
                      : a(o.status, o.statusText)
                    : a(
                        Ut[o.status] || o.status,
                        o.statusText,
                        "text" !== (o.responseType || "text") ||
                          "string" != typeof o.responseText
                          ? { binary: o.response }
                          : { text: o.responseText },
                        o.getAllResponseHeaders()
                      ));
              };
            }),
              (o.onload = n()),
              (i = o.onerror = o.ontimeout = n("error")),
              void 0 !== o.onabort
                ? (o.onabort = i)
                : (o.onreadystatechange = function () {
                    4 === o.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              o.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    T.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    T.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return T.globalEval(e), e;
        },
      },
    }),
    T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    T.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = T("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Kt,
    Qt = [],
    Jt = /(=)\?(?=&|$)|\?\?/;
  T.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Qt.pop() || T.expando + "_" + kt.guid++;
      return (this[e] = !0), e;
    },
  }),
    T.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        a,
        s,
        o =
          !1 !== t.jsonp &&
          (Jt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Jt.test(t.data) &&
              "data");
      if (o || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          o
            ? (t[o] = t[o].replace(Jt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || T.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (a = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === a ? T(e).removeProp(r) : (e[r] = a),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Qt.push(r)),
              s && m(a) && a(s[0]),
              (s = a = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument =
      (((Kt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Kt.childNodes.length)),
    (T.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (f.createHTMLDocument
              ? (((i = (t =
                  g.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = g.location.href),
                t.head.appendChild(i))
              : (t = g)),
          (a = !n && []),
          (r = N.exec(e))
            ? [t.createElement(r[1])]
            : ((r = Ie([e], t, a)),
              a && a.length && T(a).remove(),
              T.merge([], r.childNodes)));
      var i, r, a;
    }),
    (T.fn.load = function (e, t, n) {
      var i,
        r,
        a,
        s = this,
        o = e.indexOf(" ");
      return (
        o > -1 && ((i = Tt(e.slice(o))), (e = e.slice(0, o))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        s.length > 0 &&
          T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (a = arguments),
                s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, a || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (T.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          a,
          s,
          o,
          l,
          c = T.css(e, "position"),
          u = T(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (o = u.offset()),
          (a = T.css(e, "top")),
          (l = T.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1
            ? ((s = (i = u.position()).top), (r = i.left))
            : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
          m(t) && (t = t.call(e, n, T.extend({}, o))),
          null != t.top && (d.top = t.top - o.top + s),
          null != t.left && (d.left = t.left - o.left + r),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    T.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                T.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === T.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
              (r.left += T.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - T.css(i, "marginTop", !0),
            left: t.left - r.left - T.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === T.css(e, "position");

          )
            e = e.offsetParent;
          return e || pe;
        });
      },
    }),
    T.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        T.fn[e] = function (i) {
          return K(
            this,
            function (e, i, r) {
              var a;
              if (
                (h(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView),
                void 0 === r)
              )
                return a ? a[t] : e[i];
              a
                ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    T.each(["top", "left"], function (e, t) {
      T.cssHooks[t] = Ke(f.pixelPosition, function (e, n) {
        if (n)
          return (n = Ze(e, t)), Ge.test(n) ? T(e).position()[t] + "px" : n;
      });
    }),
    T.each({ Height: "height", Width: "width" }, function (e, t) {
      T.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          T.fn[i] = function (r, a) {
            var s = arguments.length && (n || "boolean" != typeof r),
              o = n || (!0 === r || !0 === a ? "margin" : "border");
            return K(
              this,
              function (t, n, r) {
                var a;
                return h(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((a = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      a["scroll" + e],
                      t.body["offset" + e],
                      a["offset" + e],
                      a["client" + e]
                    ))
                  : void 0 === r
                  ? T.css(t, n, o)
                  : T.style(t, n, r, o);
              },
              t,
              s ? r : void 0,
              s
            );
          };
        }
      );
    }),
    T.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    T.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    T.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        T.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (T.proxy = function (e, t) {
    var n, i, a;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (i = r.call(arguments, 2)),
        (a = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }),
        (a.guid = e.guid = e.guid || T.guid++),
        a
      );
  }),
    (T.holdReady = function (e) {
      e ? T.readyWait++ : T.ready(!0);
    }),
    (T.isArray = Array.isArray),
    (T.parseJSON = JSON.parse),
    (T.nodeName = E),
    (T.isFunction = m),
    (T.isWindow = h),
    (T.camelCase = te),
    (T.type = b),
    (T.now = Date.now),
    (T.isNumeric = function (e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (T.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return T;
      });
  var tn = e.jQuery,
    nn = e.$;
  return (
    (T.noConflict = function (t) {
      return e.$ === T && (e.$ = nn), t && e.jQuery === T && (e.jQuery = tn), T;
    }),
    void 0 === t && (e.jQuery = e.$ = T),
    T
  );
}),
  /*!
   * Modernizr v2.8.3
   * www.modernizr.com
   *
   * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
   * Available under the BSD and MIT licenses: www.modernizr.com/license/
   */
  (window.Modernizr = (function (e, t, n) {
    function i(e) {
      h.cssText = e;
    }
    function r(e, t) {
      return typeof e === t;
    }
    function a(e, t) {
      return !!~("" + e).indexOf(t);
    }
    function s(e, t) {
      for (var i in e) {
        var r = e[i];
        if (!a(r, "-") && h[r] !== n) return "pfx" != t || r;
      }
      return !1;
    }
    function o(e, t, i) {
      for (var a in e) {
        var s = t[e[a]];
        if (s !== n)
          return !1 === i ? e[a] : r(s, "function") ? s.bind(i || t) : s;
      }
      return !1;
    }
    function l(e, t, n) {
      var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + x.join(i + " ") + i).split(" ");
      return r(t, "string") || r(t, "undefined")
        ? s(a, t)
        : o((a = (e + " " + T.join(i + " ") + i).split(" ")), t, n);
    }
    var c,
      u,
      d = {},
      p = t.documentElement,
      f = "modernizr",
      m = t.createElement(f),
      h = m.style,
      g = t.createElement("input"),
      v = ":)",
      y = {}.toString,
      b = " -webkit- -moz- -o- -ms- ".split(" "),
      w = "Webkit Moz O ms",
      x = w.split(" "),
      T = w.toLowerCase().split(" "),
      C = "http://www.w3.org/2000/svg",
      E = {},
      S = {},
      M = {},
      k = [],
      _ = k.slice,
      I = function (e, n, i, r) {
        var a,
          s,
          o,
          l,
          c = t.createElement("div"),
          u = t.body,
          d = u || t.createElement("body");
        if (parseInt(i, 10))
          for (; i--; )
            ((o = t.createElement("div")).id = r ? r[i] : f + (i + 1)),
              c.appendChild(o);
        return (
          (a = ["&#173;", '<style id="s', f, '">', e, "</style>"].join("")),
          (c.id = f),
          ((u ? c : d).innerHTML += a),
          d.appendChild(c),
          u ||
            ((d.style.background = ""),
            (d.style.overflow = "hidden"),
            (l = p.style.overflow),
            (p.style.overflow = "hidden"),
            p.appendChild(d)),
          (s = n(c, e)),
          u
            ? c.parentNode.removeChild(c)
            : (d.parentNode.removeChild(d), (p.style.overflow = l)),
          !!s
        );
      },
      P = (function () {
        var e = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img",
        };
        return function (i, a) {
          a = a || t.createElement(e[i] || "div");
          var s = (i = "on" + i) in a;
          return (
            s ||
              (a.setAttribute || (a = t.createElement("div")),
              a.setAttribute &&
                a.removeAttribute &&
                (a.setAttribute(i, ""),
                (s = r(a[i], "function")),
                r(a[i], "undefined") || (a[i] = n),
                a.removeAttribute(i))),
            (a = null),
            s
          );
        };
      })(),
      D = {}.hasOwnProperty;
    for (var A in ((u =
      r(D, "undefined") || r(D.call, "undefined")
        ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined");
          }
        : function (e, t) {
            return D.call(e, t);
          }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = _.call(arguments, 1),
          i = function () {
            if (this instanceof i) {
              var r = function () {};
              r.prototype = t.prototype;
              var a = new r(),
                s = t.apply(a, n.concat(_.call(arguments)));
              return Object(s) === s ? s : a;
            }
            return t.apply(e, n.concat(_.call(arguments)));
          };
        return i;
      }),
    (E.flexbox = function () {
      return l("flexWrap");
    }),
    (E.flexboxlegacy = function () {
      return l("boxDirection");
    }),
    (E.canvas = function () {
      var e = t.createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    (E.canvastext = function () {
      return !(
        !d.canvas ||
        !r(t.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (E.webgl = function () {
      return !!e.WebGLRenderingContext;
    }),
    (E.touch = function () {
      var n;
      return (
        "ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)
          ? (n = !0)
          : I(
              [
                "@media (",
                b.join("touch-enabled),("),
                f,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (e) {
                n = 9 === e.offsetTop;
              }
            ),
        n
      );
    }),
    (E.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (E.postmessage = function () {
      return !!e.postMessage;
    }),
    (E.websqldatabase = function () {
      return !!e.openDatabase;
    }),
    (E.indexedDB = function () {
      return !!l("indexedDB", e);
    }),
    (E.hashchange = function () {
      return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }),
    (E.history = function () {
      return !(!e.history || !history.pushState);
    }),
    (E.draganddrop = function () {
      var e = t.createElement("div");
      return "draggable" in e || ("ondragstart" in e && "ondrop" in e);
    }),
    (E.websockets = function () {
      return "WebSocket" in e || "MozWebSocket" in e;
    }),
    (E.rgba = function () {
      return (
        i("background-color:rgba(150,255,150,.5)"), a(h.backgroundColor, "rgba")
      );
    }),
    (E.hsla = function () {
      return (
        i("background-color:hsla(120,40%,100%,.5)"),
        a(h.backgroundColor, "rgba") || a(h.backgroundColor, "hsla")
      );
    }),
    (E.multiplebgs = function () {
      return (
        i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(h.background)
      );
    }),
    (E.backgroundsize = function () {
      return l("backgroundSize");
    }),
    (E.borderimage = function () {
      return l("borderImage");
    }),
    (E.borderradius = function () {
      return l("borderRadius");
    }),
    (E.boxshadow = function () {
      return l("boxShadow");
    }),
    (E.textshadow = function () {
      return "" === t.createElement("div").style.textShadow;
    }),
    (E.opacity = function () {
      return i(b.join("opacity:.55;") + ""), /^0.55$/.test(h.opacity);
    }),
    (E.cssanimations = function () {
      return l("animationName");
    }),
    (E.csscolumns = function () {
      return l("columnCount");
    }),
    (E.cssgradients = function () {
      var e = "background-image:";
      return (
        i(
          (
            e +
            "-webkit- "
              .split(" ")
              .join(
                "gradient(linear,left top,right bottom,from(#9f9),to(white));" +
                  e
              ) +
            b.join("linear-gradient(left top,#9f9, white);" + e)
          ).slice(0, -17)
        ),
        a(h.backgroundImage, "gradient")
      );
    }),
    (E.cssreflections = function () {
      return l("boxReflect");
    }),
    (E.csstransforms = function () {
      return !!l("transform");
    }),
    (E.csstransforms3d = function () {
      var e = !!l("perspective");
      return (
        e &&
          "webkitPerspective" in p.style &&
          I(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (t) {
              e = 9 === t.offsetLeft && 3 === t.offsetHeight;
            }
          ),
        e
      );
    }),
    (E.csstransitions = function () {
      return l("transition");
    }),
    (E.fontface = function () {
      var e;
      return (
        I(
          '@font-face {font-family:"font";src:url("https://")}',
          function (n, i) {
            var r = t.getElementById("smodernizr"),
              a = r.sheet || r.styleSheet,
              s = a
                ? a.cssRules && a.cssRules[0]
                  ? a.cssRules[0].cssText
                  : a.cssText || ""
                : "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
          }
        ),
        e
      );
    }),
    (E.generatedcontent = function () {
      var e;
      return (
        I(
          [
            "#",
            f,
            "{font:0/0 a}#",
            f,
            ':after{content:"',
            v,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (t) {
            e = t.offsetHeight >= 3;
          }
        ),
        e
      );
    }),
    (E.video = function () {
      var e = t.createElement("video"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          (((n = new Boolean(n)).ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")));
      } catch (e) {}
      return n;
    }),
    (E.audio = function () {
      var e = t.createElement("audio"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          (((n = new Boolean(n)).ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "")),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (n.m4a = (
            e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (e) {}
      return n;
    }),
    (E.localstorage = function () {
      try {
        return localStorage.setItem(f, f), localStorage.removeItem(f), !0;
      } catch (e) {
        return !1;
      }
    }),
    (E.sessionstorage = function () {
      try {
        return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0;
      } catch (e) {
        return !1;
      }
    }),
    (E.webworkers = function () {
      return !!e.Worker;
    }),
    (E.applicationcache = function () {
      return !!e.applicationCache;
    }),
    (E.svg = function () {
      return !!t.createElementNS && !!t.createElementNS(C, "svg").createSVGRect;
    }),
    (E.inlinesvg = function () {
      var e = t.createElement("div");
      return (
        (e.innerHTML = "<svg/>"),
        (e.firstChild && e.firstChild.namespaceURI) == C
      );
    }),
    (E.smil = function () {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(y.call(t.createElementNS(C, "animate")))
      );
    }),
    (E.svgclippaths = function () {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(y.call(t.createElementNS(C, "clipPath")))
      );
    }),
    E))
      u(E, A) &&
        ((c = A.toLowerCase()),
        (d[c] = E[A]()),
        k.push((d[c] ? "" : "no-") + c));
    return (
      d.input ||
        ((d.input = (function (n) {
          for (var i = 0, r = n.length; r > i; i++) M[n[i]] = !!(n[i] in g);
          return (
            M.list &&
              (M.list = !(
                !t.createElement("datalist") || !e.HTMLDataListElement
              )),
            M
          );
        })(
          "autocomplete autofocus list placeholder max min multiple pattern required step".split(
            " "
          )
        )),
        (d.inputtypes = (function (e) {
          for (var i, r, a, s = 0, o = e.length; o > s; s++)
            g.setAttribute("type", (r = e[s])),
              (i = "text" !== g.type) &&
                ((g.value = v),
                (g.style.cssText = "position:absolute;visibility:hidden;"),
                /^range$/.test(r) && g.style.WebkitAppearance !== n
                  ? (p.appendChild(g),
                    (i =
                      (a = t.defaultView).getComputedStyle &&
                      "textfield" !==
                        a.getComputedStyle(g, null).WebkitAppearance &&
                      0 !== g.offsetHeight),
                    p.removeChild(g))
                  : /^(search|tel)$/.test(r) ||
                    (i = /^(url|email)$/.test(r)
                      ? g.checkValidity && !1 === g.checkValidity()
                      : g.value != v)),
              (S[e[s]] = !!i);
          return S;
        })(
          "search tel url email datetime date month week time datetime-local number range color".split(
            " "
          )
        ))),
      (d.addTest = function (e, t) {
        if ("object" == typeof e)
          for (var i in e) u(e, i) && d.addTest(i, e[i]);
        else {
          if (((e = e.toLowerCase()), d[e] !== n)) return d;
          (t = "function" == typeof t ? t() : t),
            (p.className += " " + (t ? "" : "no-") + e),
            (d[e] = t);
        }
        return d;
      }),
      i(""),
      (m = g = null),
      (function (e, t) {
        function n() {
          var e = h.elements;
          return "string" == typeof e ? e.split(" ") : e;
        }
        function i(e) {
          var t = m[e[p]];
          return t || ((t = {}), f++, (e[p] = f), (m[f] = t)), t;
        }
        function r(e, n, r) {
          return (
            n || (n = t),
            l
              ? n.createElement(e)
              : (r || (r = i(n)),
                !(a = r.cache[e]
                  ? r.cache[e].cloneNode()
                  : d.test(e)
                  ? (r.cache[e] = r.createElem(e)).cloneNode()
                  : r.createElem(e)).canHaveChildren ||
                u.test(e) ||
                a.tagUrn
                  ? a
                  : r.frag.appendChild(a))
          );
          var a;
        }
        function a(e, t) {
          t.cache ||
            ((t.cache = {}),
            (t.createElem = e.createElement),
            (t.createFrag = e.createDocumentFragment),
            (t.frag = t.createFrag())),
            (e.createElement = function (n) {
              return h.shivMethods ? r(n, e, t) : t.createElem(n);
            }),
            (e.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                n()
                  .join()
                  .replace(/[\w\-]+/g, function (e) {
                    return (
                      t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    );
                  }) +
                ");return n}"
            )(h, t.frag));
        }
        function s(e) {
          e || (e = t);
          var n = i(e);
          return (
            !h.shivCSS ||
              o ||
              n.hasCSS ||
              (n.hasCSS = !!(function (e, t) {
                var n = e.createElement("p"),
                  i = e.getElementsByTagName("head")[0] || e.documentElement;
                return (
                  (n.innerHTML =
                    "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>"),
                  i.insertBefore(n.lastChild, i.firstChild)
                );
              })(e)),
            l || a(e, n),
            e
          );
        }
        var o,
          l,
          c = e.html5 || {},
          u =
            /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          d =
            /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          p = "_html5shiv",
          f = 0,
          m = {};
        !(function () {
          try {
            var e = t.createElement("a");
            (e.innerHTML = "<xyz></xyz>"),
              (o = "hidden" in e),
              (l =
                1 == e.childNodes.length ||
                (function () {
                  t.createElement("a");
                  var e = t.createDocumentFragment();
                  return (
                    void 0 === e.cloneNode ||
                    void 0 === e.createDocumentFragment ||
                    void 0 === e.createElement
                  );
                })());
          } catch (e) {
            (o = !0), (l = !0);
          }
        })();
        var h = {
          elements:
            c.elements ||
            "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: "3.7.0",
          shivCSS: !1 !== c.shivCSS,
          supportsUnknownElements: l,
          shivMethods: !1 !== c.shivMethods,
          type: "default",
          shivDocument: s,
          createElement: r,
          createDocumentFragment: function (e, r) {
            if ((e || (e = t), l)) return e.createDocumentFragment();
            for (
              var a = (r = r || i(e)).frag.cloneNode(),
                s = 0,
                o = n(),
                c = o.length;
              c > s;
              s++
            )
              a.createElement(o[s]);
            return a;
          },
        };
        (e.html5 = h), s(t);
      })(this, t),
      (d._version = "2.8.3"),
      (d._prefixes = b),
      (d._domPrefixes = T),
      (d._cssomPrefixes = x),
      (d.mq = function (t) {
        var n,
          i = e.matchMedia || e.msMatchMedia;
        return i
          ? (i(t) && i(t).matches) || !1
          : (I(
              "@media " + t + " { #" + f + " { position: absolute; } }",
              function (t) {
                n =
                  "absolute" ==
                  (e.getComputedStyle
                    ? getComputedStyle(t, null)
                    : t.currentStyle
                  ).position;
              }
            ),
            n);
      }),
      (d.hasEvent = P),
      (d.testProp = function (e) {
        return s([e]);
      }),
      (d.testAllProps = l),
      (d.testStyles = I),
      (d.prefixed = function (e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx");
      }),
      (p.className =
        p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        " js " +
        k.join(" ")),
      d
    );
  })(this, this.document)),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e || self).Typed = t());
  })(this, function () {
    function e() {
      return (
        (e = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
        e.apply(this, arguments)
      );
    }
    var t = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onBegin: function (e) {},
        onComplete: function (e) {},
        preStringTyped: function (e, t) {},
        onStringTyped: function (e, t) {},
        onLastStringBackspaced: function (e) {},
        onTypingPaused: function (e, t) {},
        onTypingResumed: function (e, t) {},
        onReset: function (e) {},
        onStop: function (e, t) {},
        onStart: function (e, t) {},
        onDestroy: function (e) {},
      },
      n = new ((function () {
        function n() {}
        var i = n.prototype;
        return (
          (i.load = function (n, i, r) {
            if (
              ((n.el = "string" == typeof r ? document.querySelector(r) : r),
              (n.options = e({}, t, i)),
              (n.isInput = "input" === n.el.tagName.toLowerCase()),
              (n.attr = n.options.attr),
              (n.bindInputFocusEvents = n.options.bindInputFocusEvents),
              (n.showCursor = !n.isInput && n.options.showCursor),
              (n.cursorChar = n.options.cursorChar),
              (n.cursorBlinking = !0),
              (n.elContent = n.attr
                ? n.el.getAttribute(n.attr)
                : n.el.textContent),
              (n.contentType = n.options.contentType),
              (n.typeSpeed = n.options.typeSpeed),
              (n.startDelay = n.options.startDelay),
              (n.backSpeed = n.options.backSpeed),
              (n.smartBackspace = n.options.smartBackspace),
              (n.backDelay = n.options.backDelay),
              (n.fadeOut = n.options.fadeOut),
              (n.fadeOutClass = n.options.fadeOutClass),
              (n.fadeOutDelay = n.options.fadeOutDelay),
              (n.isPaused = !1),
              (n.strings = n.options.strings.map(function (e) {
                return e.trim();
              })),
              (n.stringsElement =
                "string" == typeof n.options.stringsElement
                  ? document.querySelector(n.options.stringsElement)
                  : n.options.stringsElement),
              n.stringsElement)
            ) {
              (n.strings = []),
                (n.stringsElement.style.cssText =
                  "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
              var a = Array.prototype.slice.apply(n.stringsElement.children),
                s = a.length;
              if (s)
                for (var o = 0; o < s; o += 1)
                  n.strings.push(a[o].innerHTML.trim());
            }
            for (var l in ((n.strPos = 0),
            (n.currentElContent = this.getCurrentElContent(n)),
            n.currentElContent &&
              n.currentElContent.length > 0 &&
              ((n.strPos = n.currentElContent.length - 1),
              n.strings.unshift(n.currentElContent)),
            (n.sequence = []),
            n.strings))
              n.sequence[l] = l;
            (n.arrayPos = 0),
              (n.stopNum = 0),
              (n.loop = n.options.loop),
              (n.loopCount = n.options.loopCount),
              (n.curLoop = 0),
              (n.shuffle = n.options.shuffle),
              (n.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0,
              }),
              (n.typingComplete = !1),
              (n.autoInsertCss = n.options.autoInsertCss),
              n.autoInsertCss &&
                (this.appendCursorAnimationCss(n),
                this.appendFadeOutAnimationCss(n));
          }),
          (i.getCurrentElContent = function (e) {
            return e.attr
              ? e.el.getAttribute(e.attr)
              : e.isInput
              ? e.el.value
              : "html" === e.contentType
              ? e.el.innerHTML
              : e.el.textContent;
          }),
          (i.appendCursorAnimationCss = function (e) {
            var t = "data-typed-js-cursor-css";
            if (e.showCursor && !document.querySelector("[" + t + "]")) {
              var n = document.createElement("style");
              n.setAttribute(t, "true"),
                (n.innerHTML =
                  "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                document.body.appendChild(n);
            }
          }),
          (i.appendFadeOutAnimationCss = function (e) {
            var t = "data-typed-fadeout-js-css";
            if (e.fadeOut && !document.querySelector("[" + t + "]")) {
              var n = document.createElement("style");
              n.setAttribute(t, "true"),
                (n.innerHTML =
                  "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                document.body.appendChild(n);
            }
          }),
          n
        );
      })())(),
      i = new ((function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.typeHtmlChars = function (e, t, n) {
            if ("html" !== n.contentType) return t;
            var i = e.substring(t).charAt(0);
            if ("<" === i || "&" === i) {
              var r;
              for (
                r = "<" === i ? ">" : ";";
                e.substring(t + 1).charAt(0) !== r && !(1 + ++t > e.length);

              );
              t++;
            }
            return t;
          }),
          (t.backSpaceHtmlChars = function (e, t, n) {
            if ("html" !== n.contentType) return t;
            var i = e.substring(t).charAt(0);
            if (">" === i || ";" === i) {
              var r;
              for (
                r = ">" === i ? "<" : "&";
                e.substring(t - 1).charAt(0) !== r && !(--t < 0);

              );
              t--;
            }
            return t;
          }),
          e
        );
      })())();
    return (function () {
      function e(e, t) {
        n.load(this, t, e), this.begin();
      }
      var t = e.prototype;
      return (
        (t.toggle = function () {
          this.pause.status ? this.start() : this.stop();
        }),
        (t.stop = function () {
          this.typingComplete ||
            this.pause.status ||
            (this.toggleBlinking(!0),
            (this.pause.status = !0),
            this.options.onStop(this.arrayPos, this));
        }),
        (t.start = function () {
          this.typingComplete ||
            (this.pause.status &&
              ((this.pause.status = !1),
              this.pause.typewrite
                ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                : this.backspace(this.pause.curString, this.pause.curStrPos),
              this.options.onStart(this.arrayPos, this)));
        }),
        (t.destroy = function () {
          this.reset(!1), this.options.onDestroy(this);
        }),
        (t.reset = function (e) {
          void 0 === e && (e = !0),
            clearInterval(this.timeout),
            this.replaceText(""),
            this.cursor &&
              this.cursor.parentNode &&
              (this.cursor.parentNode.removeChild(this.cursor),
              (this.cursor = null)),
            (this.strPos = 0),
            (this.arrayPos = 0),
            (this.curLoop = 0),
            e &&
              (this.insertCursor(), this.options.onReset(this), this.begin());
        }),
        (t.begin = function () {
          var e = this;
          this.options.onBegin(this),
            (this.typingComplete = !1),
            this.shuffleStringsIfNeeded(this),
            this.insertCursor(),
            this.bindInputFocusEvents && this.bindFocusEvents(),
            (this.timeout = setTimeout(function () {
              0 === e.strPos
                ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos);
            }, this.startDelay));
        }),
        (t.typewrite = function (e, t) {
          var n = this;
          this.fadeOut &&
            this.el.classList.contains(this.fadeOutClass) &&
            (this.el.classList.remove(this.fadeOutClass),
            this.cursor && this.cursor.classList.remove(this.fadeOutClass));
          var r = this.humanizer(this.typeSpeed),
            a = 1;
          !0 !== this.pause.status
            ? (this.timeout = setTimeout(function () {
                t = i.typeHtmlChars(e, t, n);
                var r = 0,
                  s = e.substring(t);
                if ("^" === s.charAt(0) && /^\^\d+/.test(s)) {
                  var o = 1;
                  (o += (s = /\d+/.exec(s)[0]).length),
                    (r = parseInt(s)),
                    (n.temporaryPause = !0),
                    n.options.onTypingPaused(n.arrayPos, n),
                    (e = e.substring(0, t) + e.substring(t + o)),
                    n.toggleBlinking(!0);
                }
                if ("`" === s.charAt(0)) {
                  for (
                    ;
                    "`" !== e.substring(t + a).charAt(0) &&
                    (a++, !(t + a > e.length));

                  );
                  var l = e.substring(0, t),
                    c = e.substring(l.length + 1, t + a),
                    u = e.substring(t + a + 1);
                  (e = l + c + u), a--;
                }
                n.timeout = setTimeout(function () {
                  n.toggleBlinking(!1),
                    t >= e.length ? n.doneTyping(e, t) : n.keepTyping(e, t, a),
                    n.temporaryPause &&
                      ((n.temporaryPause = !1),
                      n.options.onTypingResumed(n.arrayPos, n));
                }, r);
              }, r))
            : this.setPauseStatus(e, t, !0);
        }),
        (t.keepTyping = function (e, t, n) {
          0 === t &&
            (this.toggleBlinking(!1),
            this.options.preStringTyped(this.arrayPos, this));
          var i = e.substring(0, (t += n));
          this.replaceText(i), this.typewrite(e, t);
        }),
        (t.doneTyping = function (e, t) {
          var n = this;
          this.options.onStringTyped(this.arrayPos, this),
            this.toggleBlinking(!0),
            (this.arrayPos === this.strings.length - 1 &&
              (this.complete(),
              !1 === this.loop || this.curLoop === this.loopCount)) ||
              (this.timeout = setTimeout(function () {
                n.backspace(e, t);
              }, this.backDelay));
        }),
        (t.backspace = function (e, t) {
          var n = this;
          if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var r = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              t = i.backSpaceHtmlChars(e, t, n);
              var r = e.substring(0, t);
              if ((n.replaceText(r), n.smartBackspace)) {
                var a = n.strings[n.arrayPos + 1];
                n.stopNum = a && r === a.substring(0, t) ? t : 0;
              }
              t > n.stopNum
                ? (t--, n.backspace(e, t))
                : t <= n.stopNum &&
                  (n.arrayPos++,
                  n.arrayPos === n.strings.length
                    ? ((n.arrayPos = 0),
                      n.options.onLastStringBackspaced(),
                      n.shuffleStringsIfNeeded(),
                      n.begin())
                    : n.typewrite(n.strings[n.sequence[n.arrayPos]], t));
            }, r);
          } else this.setPauseStatus(e, t, !1);
        }),
        (t.complete = function () {
          this.options.onComplete(this),
            this.loop ? this.curLoop++ : (this.typingComplete = !0);
        }),
        (t.setPauseStatus = function (e, t, n) {
          (this.pause.typewrite = n),
            (this.pause.curString = e),
            (this.pause.curStrPos = t);
        }),
        (t.toggleBlinking = function (e) {
          this.cursor &&
            (this.pause.status ||
              (this.cursorBlinking !== e &&
                ((this.cursorBlinking = e),
                e
                  ? this.cursor.classList.add("typed-cursor--blink")
                  : this.cursor.classList.remove("typed-cursor--blink"))));
        }),
        (t.humanizer = function (e) {
          return Math.round((Math.random() * e) / 2) + e;
        }),
        (t.shuffleStringsIfNeeded = function () {
          this.shuffle &&
            (this.sequence = this.sequence.sort(function () {
              return Math.random() - 0.5;
            }));
        }),
        (t.initFadeOut = function () {
          var e = this;
          return (
            (this.el.className += " " + this.fadeOutClass),
            this.cursor && (this.cursor.className += " " + this.fadeOutClass),
            setTimeout(function () {
              e.arrayPos++,
                e.replaceText(""),
                e.strings.length > e.arrayPos
                  ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0)
                  : (e.typewrite(e.strings[0], 0), (e.arrayPos = 0));
            }, this.fadeOutDelay)
          );
        }),
        (t.replaceText = function (e) {
          this.attr
            ? this.el.setAttribute(this.attr, e)
            : this.isInput
            ? (this.el.value = e)
            : "html" === this.contentType
            ? (this.el.innerHTML = e)
            : (this.el.textContent = e);
        }),
        (t.bindFocusEvents = function () {
          var e = this;
          this.isInput &&
            (this.el.addEventListener("focus", function (t) {
              e.stop();
            }),
            this.el.addEventListener("blur", function (t) {
              (e.el.value && 0 !== e.el.value.length) || e.start();
            }));
        }),
        (t.insertCursor = function () {
          this.showCursor &&
            (this.cursor ||
              ((this.cursor = document.createElement("span")),
              (this.cursor.className = "typed-cursor"),
              this.cursor.setAttribute("aria-hidden", !0),
              (this.cursor.innerHTML = this.cursorChar),
              this.el.parentNode &&
                this.el.parentNode.insertBefore(
                  this.cursor,
                  this.el.nextSibling
                )));
        }),
        e
      );
    })();
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.anime = t());
  })(this, function () {
    "use strict";
    var e = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0,
      },
      t = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0,
      },
      n = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
        "matrix",
        "matrix3d",
      ],
      i = { CSS: {}, springs: {} };
    function r(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function a(e, t) {
      return e.indexOf(t) > -1;
    }
    function s(e, t) {
      return e.apply(null, t);
    }
    var o = {
      arr: function (e) {
        return Array.isArray(e);
      },
      obj: function (e) {
        return a(Object.prototype.toString.call(e), "Object");
      },
      pth: function (e) {
        return o.obj(e) && e.hasOwnProperty("totalLength");
      },
      svg: function (e) {
        return e instanceof SVGElement;
      },
      inp: function (e) {
        return e instanceof HTMLInputElement;
      },
      dom: function (e) {
        return e.nodeType || o.svg(e);
      },
      str: function (e) {
        return "string" == typeof e;
      },
      fnc: function (e) {
        return "function" == typeof e;
      },
      und: function (e) {
        return void 0 === e;
      },
      nil: function (e) {
        return o.und(e) || null === e;
      },
      hex: function (e) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
      },
      rgb: function (e) {
        return /^rgb/.test(e);
      },
      hsl: function (e) {
        return /^hsl/.test(e);
      },
      col: function (e) {
        return o.hex(e) || o.rgb(e) || o.hsl(e);
      },
      key: function (n) {
        return (
          !e.hasOwnProperty(n) &&
          !t.hasOwnProperty(n) &&
          "targets" !== n &&
          "keyframes" !== n
        );
      },
    };
    function l(e) {
      var t = /\(([^)]+)\)/.exec(e);
      return t
        ? t[1].split(",").map(function (e) {
            return parseFloat(e);
          })
        : [];
    }
    function c(e, t) {
      var n = l(e),
        a = r(o.und(n[0]) ? 1 : n[0], 0.1, 100),
        s = r(o.und(n[1]) ? 100 : n[1], 0.1, 100),
        c = r(o.und(n[2]) ? 10 : n[2], 0.1, 100),
        u = r(o.und(n[3]) ? 0 : n[3], 0.1, 100),
        d = Math.sqrt(s / a),
        p = c / (2 * Math.sqrt(s * a)),
        f = p < 1 ? d * Math.sqrt(1 - p * p) : 0,
        m = p < 1 ? (p * d - u) / f : -u + d;
      function h(e) {
        var n = t ? (t * e) / 1e3 : e;
        return (
          (n =
            p < 1
              ? Math.exp(-n * p * d) *
                (1 * Math.cos(f * n) + m * Math.sin(f * n))
              : (1 + m * n) * Math.exp(-n * d)),
          0 === e || 1 === e ? e : 1 - n
        );
      }
      return t
        ? h
        : function () {
            var t = i.springs[e];
            if (t) return t;
            for (var n = 0, r = 0; ; )
              if (1 === h((n += 1 / 6))) {
                if (++r >= 16) break;
              } else r = 0;
            var a = n * (1 / 6) * 1e3;
            return (i.springs[e] = a), a;
          };
    }
    function u(e) {
      return (
        void 0 === e && (e = 10),
        function (t) {
          return Math.ceil(r(t, 1e-6, 1) * e) * (1 / e);
        }
      );
    }
    var d,
      p,
      f = (function () {
        var e = 0.1;
        function t(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function n(e, t) {
          return 3 * t - 6 * e;
        }
        function i(e) {
          return 3 * e;
        }
        function r(e, r, a) {
          return ((t(r, a) * e + n(r, a)) * e + i(r)) * e;
        }
        function a(e, r, a) {
          return 3 * t(r, a) * e * e + 2 * n(r, a) * e + i(r);
        }
        return function (t, n, i, s) {
          if (0 <= t && t <= 1 && 0 <= i && i <= 1) {
            var o = new Float32Array(11);
            if (t !== n || i !== s)
              for (var l = 0; l < 11; ++l) o[l] = r(l * e, t, i);
            return function (e) {
              return (t === n && i === s) || 0 === e || 1 === e
                ? e
                : r(c(e), n, s);
            };
          }
          function c(n) {
            for (var s = 0, l = 1; 10 !== l && o[l] <= n; ++l) s += e;
            var c = s + ((n - o[--l]) / (o[l + 1] - o[l])) * e,
              u = a(c, t, i);
            return u >= 0.001
              ? (function (e, t, n, i) {
                  for (var s = 0; s < 4; ++s) {
                    var o = a(t, n, i);
                    if (0 === o) return t;
                    t -= (r(t, n, i) - e) / o;
                  }
                  return t;
                })(n, c, t, i)
              : 0 === u
              ? c
              : (function (e, t, n, i, a) {
                  for (
                    var s, o, l = 0;
                    (s = r((o = t + (n - t) / 2), i, a) - e) > 0
                      ? (n = o)
                      : (t = o),
                      Math.abs(s) > 1e-7 && ++l < 10;

                  );
                  return o;
                })(n, s, s + e, t, i);
          }
        };
      })(),
      m =
        ((d = {
          linear: function () {
            return function (e) {
              return e;
            };
          },
        }),
        (p = {
          Sine: function () {
            return function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            };
          },
          Circ: function () {
            return function (e) {
              return 1 - Math.sqrt(1 - e * e);
            };
          },
          Back: function () {
            return function (e) {
              return e * e * (3 * e - 2);
            };
          },
          Bounce: function () {
            return function (e) {
              for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
              );
            };
          },
          Elastic: function (e, t) {
            void 0 === e && (e = 1), void 0 === t && (t = 0.5);
            var n = r(e, 1, 10),
              i = r(t, 0.1, 2);
            return function (e) {
              return 0 === e || 1 === e
                ? e
                : -n *
                    Math.pow(2, 10 * (e - 1)) *
                    Math.sin(
                      ((e - 1 - (i / (2 * Math.PI)) * Math.asin(1 / n)) *
                        (2 * Math.PI)) /
                        i
                    );
            };
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, t) {
          p[e] = function () {
            return function (e) {
              return Math.pow(e, t + 2);
            };
          };
        }),
        Object.keys(p).forEach(function (e) {
          var t = p[e];
          (d["easeIn" + e] = t),
            (d["easeOut" + e] = function (e, n) {
              return function (i) {
                return 1 - t(e, n)(1 - i);
              };
            }),
            (d["easeInOut" + e] = function (e, n) {
              return function (i) {
                return i < 0.5
                  ? t(e, n)(2 * i) / 2
                  : 1 - t(e, n)(-2 * i + 2) / 2;
              };
            }),
            (d["easeOutIn" + e] = function (e, n) {
              return function (i) {
                return i < 0.5
                  ? (1 - t(e, n)(1 - 2 * i)) / 2
                  : (t(e, n)(2 * i - 1) + 1) / 2;
              };
            });
        }),
        d);
    function h(e, t) {
      if (o.fnc(e)) return e;
      var n = e.split("(")[0],
        i = m[n],
        r = l(e);
      switch (n) {
        case "spring":
          return c(e, t);
        case "cubicBezier":
          return s(f, r);
        case "steps":
          return s(u, r);
        default:
          return s(i, r);
      }
    }
    function g(e) {
      try {
        return document.querySelectorAll(e);
      } catch (e) {
        return;
      }
    }
    function v(e, t) {
      for (
        var n = e.length,
          i = arguments.length >= 2 ? arguments[1] : void 0,
          r = [],
          a = 0;
        a < n;
        a++
      )
        if (a in e) {
          var s = e[a];
          t.call(i, s, a, e) && r.push(s);
        }
      return r;
    }
    function y(e) {
      return e.reduce(function (e, t) {
        return e.concat(o.arr(t) ? y(t) : t);
      }, []);
    }
    function b(e) {
      return o.arr(e)
        ? e
        : (o.str(e) && (e = g(e) || e),
          e instanceof NodeList || e instanceof HTMLCollection
            ? [].slice.call(e)
            : [e]);
    }
    function w(e, t) {
      return e.some(function (e) {
        return e === t;
      });
    }
    function x(e) {
      var t = {};
      for (var n in e) t[n] = e[n];
      return t;
    }
    function T(e, t) {
      var n = x(e);
      for (var i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
      return n;
    }
    function C(e, t) {
      var n = x(e);
      for (var i in t) n[i] = o.und(e[i]) ? t[i] : e[i];
      return n;
    }
    function E(e) {
      var t =
        /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          e
        );
      if (t) return t[1];
    }
    function S(e, t) {
      return o.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function M(e, t) {
      return e.getAttribute(t);
    }
    function k(e, t, n) {
      if (w([n, "deg", "rad", "turn"], E(t))) return t;
      var r = i.CSS[t + n];
      if (!o.und(r)) return r;
      var a = document.createElement(e.tagName),
        s =
          e.parentNode && e.parentNode !== document
            ? e.parentNode
            : document.body;
      s.appendChild(a),
        (a.style.position = "absolute"),
        (a.style.width = 100 + n);
      var l = 100 / a.offsetWidth;
      s.removeChild(a);
      var c = l * parseFloat(t);
      return (i.CSS[t + n] = c), c;
    }
    function _(e, t, n) {
      if (t in e.style) {
        var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          r = e.style[t] || getComputedStyle(e).getPropertyValue(i) || "0";
        return n ? k(e, r, n) : r;
      }
    }
    function I(e, t) {
      return o.dom(e) && !o.inp(e) && (!o.nil(M(e, t)) || (o.svg(e) && e[t]))
        ? "attribute"
        : o.dom(e) && w(n, t)
        ? "transform"
        : o.dom(e) && "transform" !== t && _(e, t)
        ? "css"
        : null != e[t]
        ? "object"
        : void 0;
    }
    function P(e) {
      if (o.dom(e)) {
        for (
          var t,
            n = e.style.transform || "",
            i = /(\w+)\(([^)]*)\)/g,
            r = new Map();
          (t = i.exec(n));

        )
          r.set(t[1], t[2]);
        return r;
      }
    }
    function D(e, t, n, i) {
      switch (I(e, t)) {
        case "transform":
          return (function (e, t, n, i) {
            var r,
              s = a(t, "scale")
                ? 1
                : 0 +
                  (a((r = t), "translate") || "perspective" === r
                    ? "px"
                    : a(r, "rotate") || a(r, "skew")
                    ? "deg"
                    : void 0),
              o = P(e).get(t) || s;
            return (
              n && (n.transforms.list.set(t, o), (n.transforms.last = t)),
              i ? k(e, o, i) : o
            );
          })(e, t, i, n);
        case "css":
          return _(e, t, n);
        case "attribute":
          return M(e, t);
        default:
          return e[t] || 0;
      }
    }
    function A(e, t) {
      var n = /^(\*=|\+=|-=)/.exec(e);
      if (!n) return e;
      var i = E(e) || 0,
        r = parseFloat(t),
        a = parseFloat(e.replace(n[0], ""));
      switch (n[0][0]) {
        case "+":
          return r + a + i;
        case "-":
          return r - a + i;
        case "*":
          return r * a + i;
      }
    }
    function L(e, t) {
      if (o.col(e))
        return (function (e) {
          return o.rgb(e)
            ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
              ? "rgba(" + n[1] + ",1)"
              : t
            : o.hex(e)
            ? ((i = e.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (e, t, n, i) {
                  return t + t + n + n + i + i;
                }
              )),
              (r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i)),
              "rgba(" +
                parseInt(r[1], 16) +
                "," +
                parseInt(r[2], 16) +
                "," +
                parseInt(r[3], 16) +
                ",1)")
            : o.hsl(e)
            ? (function (e) {
                var t,
                  n,
                  i,
                  r =
                    /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                    /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                      e
                    ),
                  a = parseInt(r[1], 10) / 360,
                  s = parseInt(r[2], 10) / 100,
                  o = parseInt(r[3], 10) / 100,
                  l = r[4] || 1;
                function c(e, t, n) {
                  return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? e + 6 * (t - e) * n
                      : n < 0.5
                      ? t
                      : n < 2 / 3
                      ? e + (t - e) * (2 / 3 - n) * 6
                      : e
                  );
                }
                if (0 == s) t = n = i = o;
                else {
                  var u = o < 0.5 ? o * (1 + s) : o + s - o * s,
                    d = 2 * o - u;
                  (t = c(d, u, a + 1 / 3)),
                    (n = c(d, u, a)),
                    (i = c(d, u, a - 1 / 3));
                }
                return (
                  "rgba(" +
                  255 * t +
                  "," +
                  255 * n +
                  "," +
                  255 * i +
                  "," +
                  l +
                  ")"
                );
              })(e)
            : void 0;
          var t, n, i, r;
        })(e);
      if (/\s/g.test(e)) return e;
      var n = E(e),
        i = n ? e.substr(0, e.length - n.length) : e;
      return t ? i + t : i;
    }
    function O(e, t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function $(e) {
      for (var t, n = e.points, i = 0, r = 0; r < n.numberOfItems; r++) {
        var a = n.getItem(r);
        r > 0 && (i += O(t, a)), (t = a);
      }
      return i;
    }
    function z(e) {
      if (e.getTotalLength) return e.getTotalLength();
      switch (e.tagName.toLowerCase()) {
        case "circle":
          return (a = e), 2 * Math.PI * M(a, "r");
        case "rect":
          return 2 * M((r = e), "width") + 2 * M(r, "height");
        case "line":
          return O(
            { x: M((i = e), "x1"), y: M(i, "y1") },
            { x: M(i, "x2"), y: M(i, "y2") }
          );
        case "polyline":
          return $(e);
        case "polygon":
          return (
            (n = (t = e).points),
            $(t) + O(n.getItem(n.numberOfItems - 1), n.getItem(0))
          );
      }
      var t, n, i, r, a;
    }
    function N(e, t) {
      var n = t || {},
        i =
          n.el ||
          (function (e) {
            for (var t = e.parentNode; o.svg(t) && o.svg(t.parentNode); )
              t = t.parentNode;
            return t;
          })(e),
        r = i.getBoundingClientRect(),
        a = M(i, "viewBox"),
        s = r.width,
        l = r.height,
        c = n.viewBox || (a ? a.split(" ") : [0, 0, s, l]);
      return {
        el: i,
        viewBox: c,
        x: c[0] / 1,
        y: c[1] / 1,
        w: s,
        h: l,
        vW: c[2],
        vH: c[3],
      };
    }
    function j(e, t, n) {
      function i(n) {
        void 0 === n && (n = 0);
        var i = t + n >= 1 ? t + n : 0;
        return e.el.getPointAtLength(i);
      }
      var r = N(e.el, e.svg),
        a = i(),
        s = i(-1),
        o = i(1),
        l = n ? 1 : r.w / r.vW,
        c = n ? 1 : r.h / r.vH;
      switch (e.property) {
        case "x":
          return (a.x - r.x) * l;
        case "y":
          return (a.y - r.y) * c;
        case "angle":
          return (180 * Math.atan2(o.y - s.y, o.x - s.x)) / Math.PI;
      }
    }
    function F(e, t) {
      var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        i = L(o.pth(e) ? e.totalLength : e, t) + "";
      return {
        original: i,
        numbers: i.match(n) ? i.match(n).map(Number) : [0],
        strings: o.str(e) || t ? i.split(n) : [],
      };
    }
    function H(e) {
      return v(e ? y(o.arr(e) ? e.map(b) : b(e)) : [], function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    function R(e) {
      var t = H(e);
      return t.map(function (e, n) {
        return {
          target: e,
          id: n,
          total: t.length,
          transforms: { list: P(e) },
        };
      });
    }
    function B(e, t) {
      var n = x(t);
      if ((/^spring/.test(n.easing) && (n.duration = c(n.easing)), o.arr(e))) {
        var i = e.length;
        2 !== i || o.obj(e[0])
          ? o.fnc(t.duration) || (n.duration = t.duration / i)
          : (e = { value: e });
      }
      var r = o.arr(e) ? e : [e];
      return r
        .map(function (e, n) {
          var i = o.obj(e) && !o.pth(e) ? e : { value: e };
          return (
            o.und(i.delay) && (i.delay = n ? 0 : t.delay),
            o.und(i.endDelay) &&
              (i.endDelay = n === r.length - 1 ? t.endDelay : 0),
            i
          );
        })
        .map(function (e) {
          return C(e, n);
        });
    }
    function q(e, t) {
      var n = [],
        i = t.keyframes;
      for (var r in (i &&
        (t = C(
          (function (e) {
            for (
              var t = v(
                  y(
                    e.map(function (e) {
                      return Object.keys(e);
                    })
                  ),
                  function (e) {
                    return o.key(e);
                  }
                ).reduce(function (e, t) {
                  return e.indexOf(t) < 0 && e.push(t), e;
                }, []),
                n = {},
                i = function (i) {
                  var r = t[i];
                  n[r] = e.map(function (e) {
                    var t = {};
                    for (var n in e)
                      o.key(n) ? n == r && (t.value = e[n]) : (t[n] = e[n]);
                    return t;
                  });
                },
                r = 0;
              r < t.length;
              r++
            )
              i(r);
            return n;
          })(i),
          t
        )),
      t))
        o.key(r) && n.push({ name: r, tweens: B(t[r], e) });
      return n;
    }
    var W = {
      css: function (e, t, n) {
        return (e.style[t] = n);
      },
      attribute: function (e, t, n) {
        return e.setAttribute(t, n);
      },
      object: function (e, t, n) {
        return (e[t] = n);
      },
      transform: function (e, t, n, i, r) {
        if ((i.list.set(t, n), t === i.last || r)) {
          var a = "";
          i.list.forEach(function (e, t) {
            a += t + "(" + e + ") ";
          }),
            (e.style.transform = a);
        }
      },
    };
    function G(e, t) {
      R(e).forEach(function (e) {
        for (var n in t) {
          var i = S(t[n], e),
            r = e.target,
            a = E(i),
            s = D(r, n, a, e),
            o = A(L(i, a || E(s)), s),
            l = I(r, n);
          W[l](r, n, o, e.transforms, !0);
        }
      });
    }
    function Y(e, t) {
      return v(
        y(
          e.map(function (e) {
            return t.map(function (t) {
              return (function (e, t) {
                var n = I(e.target, t.name);
                if (n) {
                  var i = (function (e, t) {
                      var n;
                      return e.tweens.map(function (i) {
                        var r = (function (e, t) {
                            var n = {};
                            for (var i in e) {
                              var r = S(e[i], t);
                              o.arr(r) &&
                                1 ===
                                  (r = r.map(function (e) {
                                    return S(e, t);
                                  })).length &&
                                (r = r[0]),
                                (n[i] = r);
                            }
                            return (
                              (n.duration = parseFloat(n.duration)),
                              (n.delay = parseFloat(n.delay)),
                              n
                            );
                          })(i, t),
                          a = r.value,
                          s = o.arr(a) ? a[1] : a,
                          l = E(s),
                          c = D(t.target, e.name, l, t),
                          u = n ? n.to.original : c,
                          d = o.arr(a) ? a[0] : u,
                          p = E(d) || E(c),
                          f = l || p;
                        return (
                          o.und(s) && (s = u),
                          (r.from = F(d, f)),
                          (r.to = F(A(s, d), f)),
                          (r.start = n ? n.end : 0),
                          (r.end = r.start + r.delay + r.duration + r.endDelay),
                          (r.easing = h(r.easing, r.duration)),
                          (r.isPath = o.pth(a)),
                          (r.isPathTargetInsideSVG =
                            r.isPath && o.svg(t.target)),
                          (r.isColor = o.col(r.from.original)),
                          r.isColor && (r.round = 1),
                          (n = r),
                          r
                        );
                      });
                    })(t, e),
                    r = i[i.length - 1];
                  return {
                    type: n,
                    property: t.name,
                    animatable: e,
                    tweens: i,
                    duration: r.end,
                    delay: i[0].delay,
                    endDelay: r.endDelay,
                  };
                }
              })(e, t);
            });
          })
        ),
        function (e) {
          return !o.und(e);
        }
      );
    }
    function X(e, t) {
      var n = e.length,
        i = function (e) {
          return e.timelineOffset ? e.timelineOffset : 0;
        },
        r = {};
      return (
        (r.duration = n
          ? Math.max.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.duration;
              })
            )
          : t.duration),
        (r.delay = n
          ? Math.min.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.delay;
              })
            )
          : t.delay),
        (r.endDelay = n
          ? r.duration -
            Math.max.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.duration - e.endDelay;
              })
            )
          : t.endDelay),
        r
      );
    }
    var V = 0,
      U = [],
      Z = (function () {
        var e;
        function t(n) {
          for (var i = U.length, r = 0; r < i; ) {
            var a = U[r];
            a.paused ? (U.splice(r, 1), i--) : (a.tick(n), r++);
          }
          e = r > 0 ? requestAnimationFrame(t) : void 0;
        }
        return (
          "undefined" != typeof document &&
            document.addEventListener("visibilitychange", function () {
              Q.suspendWhenDocumentHidden &&
                (K()
                  ? (e = cancelAnimationFrame(e))
                  : (U.forEach(function (e) {
                      return e._onDocumentVisibility();
                    }),
                    Z()));
            }),
          function () {
            e ||
              (K() && Q.suspendWhenDocumentHidden) ||
              !(U.length > 0) ||
              (e = requestAnimationFrame(t));
          }
        );
      })();
    function K() {
      return !!document && document.hidden;
    }
    function Q(n) {
      void 0 === n && (n = {});
      var i,
        a = 0,
        s = 0,
        o = 0,
        l = 0,
        c = null;
      function u(e) {
        var t =
          window.Promise &&
          new Promise(function (e) {
            return (c = e);
          });
        return (e.finished = t), t;
      }
      var d,
        p,
        f,
        m,
        h,
        g,
        y,
        b,
        w =
          ((p = T(e, (d = n))),
          (m = q((f = T(t, d)), d)),
          (y = X((g = Y((h = R(d.targets)), m)), f)),
          (b = V),
          V++,
          C(p, {
            id: b,
            children: [],
            animatables: h,
            animations: g,
            duration: y.duration,
            delay: y.delay,
            endDelay: y.endDelay,
          }));
      function x() {
        var e = w.direction;
        "alternate" !== e &&
          (w.direction = "normal" !== e ? "normal" : "reverse"),
          (w.reversed = !w.reversed),
          i.forEach(function (e) {
            return (e.reversed = w.reversed);
          });
      }
      function E(e) {
        return w.reversed ? w.duration - e : e;
      }
      function S() {
        (a = 0), (s = E(w.currentTime) * (1 / Q.speed));
      }
      function M(e, t) {
        t && t.seek(e - t.timelineOffset);
      }
      function k(e) {
        for (var t = 0, n = w.animations, i = n.length; t < i; ) {
          var a = n[t],
            s = a.animatable,
            o = a.tweens,
            l = o.length - 1,
            c = o[l];
          l &&
            (c =
              v(o, function (t) {
                return e < t.end;
              })[0] || c);
          for (
            var u = r(e - c.start - c.delay, 0, c.duration) / c.duration,
              d = isNaN(u) ? 1 : c.easing(u),
              p = c.to.strings,
              f = c.round,
              m = [],
              h = c.to.numbers.length,
              g = void 0,
              y = 0;
            y < h;
            y++
          ) {
            var b = void 0,
              x = c.to.numbers[y],
              T = c.from.numbers[y] || 0;
            (b = c.isPath
              ? j(c.value, d * x, c.isPathTargetInsideSVG)
              : T + d * (x - T)),
              f && ((c.isColor && y > 2) || (b = Math.round(b * f) / f)),
              m.push(b);
          }
          var C = p.length;
          if (C) {
            g = p[0];
            for (var E = 0; E < C; E++) {
              p[E];
              var S = p[E + 1],
                M = m[E];
              isNaN(M) || (g += S ? M + S : M + " ");
            }
          } else g = m[0];
          W[a.type](s.target, a.property, g, s.transforms),
            (a.currentValue = g),
            t++;
        }
      }
      function _(e) {
        w[e] && !w.passThrough && w[e](w);
      }
      function I(e) {
        var t = w.duration,
          n = w.delay,
          d = t - w.endDelay,
          p = E(e);
        (w.progress = r((p / t) * 100, 0, 100)),
          (w.reversePlayback = p < w.currentTime),
          i &&
            (function (e) {
              if (w.reversePlayback) for (var t = l; t--; ) M(e, i[t]);
              else for (var n = 0; n < l; n++) M(e, i[n]);
            })(p),
          !w.began && w.currentTime > 0 && ((w.began = !0), _("begin")),
          !w.loopBegan &&
            w.currentTime > 0 &&
            ((w.loopBegan = !0), _("loopBegin")),
          p <= n && 0 !== w.currentTime && k(0),
          ((p >= d && w.currentTime !== t) || !t) && k(t),
          p > n && p < d
            ? (w.changeBegan ||
                ((w.changeBegan = !0),
                (w.changeCompleted = !1),
                _("changeBegin")),
              _("change"),
              k(p))
            : w.changeBegan &&
              ((w.changeCompleted = !0),
              (w.changeBegan = !1),
              _("changeComplete")),
          (w.currentTime = r(p, 0, t)),
          w.began && _("update"),
          e >= t &&
            ((s = 0),
            w.remaining && !0 !== w.remaining && w.remaining--,
            w.remaining
              ? ((a = o),
                _("loopComplete"),
                (w.loopBegan = !1),
                "alternate" === w.direction && x())
              : ((w.paused = !0),
                w.completed ||
                  ((w.completed = !0),
                  _("loopComplete"),
                  _("complete"),
                  !w.passThrough && "Promise" in window && (c(), u(w)))));
      }
      return (
        u(w),
        (w.reset = function () {
          var e = w.direction;
          (w.passThrough = !1),
            (w.currentTime = 0),
            (w.progress = 0),
            (w.paused = !0),
            (w.began = !1),
            (w.loopBegan = !1),
            (w.changeBegan = !1),
            (w.completed = !1),
            (w.changeCompleted = !1),
            (w.reversePlayback = !1),
            (w.reversed = "reverse" === e),
            (w.remaining = w.loop),
            (i = w.children);
          for (var t = (l = i.length); t--; ) w.children[t].reset();
          ((w.reversed && !0 !== w.loop) ||
            ("alternate" === e && 1 === w.loop)) &&
            w.remaining++,
            k(w.reversed ? w.duration : 0);
        }),
        (w._onDocumentVisibility = S),
        (w.set = function (e, t) {
          return G(e, t), w;
        }),
        (w.tick = function (e) {
          (o = e), a || (a = o), I((o + (s - a)) * Q.speed);
        }),
        (w.seek = function (e) {
          I(E(e));
        }),
        (w.pause = function () {
          (w.paused = !0), S();
        }),
        (w.play = function () {
          w.paused &&
            (w.completed && w.reset(), (w.paused = !1), U.push(w), S(), Z());
        }),
        (w.reverse = function () {
          x(), (w.completed = !w.reversed), S();
        }),
        (w.restart = function () {
          w.reset(), w.play();
        }),
        (w.remove = function (e) {
          ee(H(e), w);
        }),
        w.reset(),
        w.autoplay && w.play(),
        w
      );
    }
    function J(e, t) {
      for (var n = t.length; n--; )
        w(e, t[n].animatable.target) && t.splice(n, 1);
    }
    function ee(e, t) {
      var n = t.animations,
        i = t.children;
      J(e, n);
      for (var r = i.length; r--; ) {
        var a = i[r],
          s = a.animations;
        J(e, s), s.length || a.children.length || i.splice(r, 1);
      }
      n.length || i.length || t.pause();
    }
    return (
      (Q.version = "3.2.1"),
      (Q.speed = 1),
      (Q.suspendWhenDocumentHidden = !0),
      (Q.running = U),
      (Q.remove = function (e) {
        for (var t = H(e), n = U.length; n--; ) ee(t, U[n]);
      }),
      (Q.get = D),
      (Q.set = G),
      (Q.convertPx = k),
      (Q.path = function (e, t) {
        var n = o.str(e) ? g(e)[0] : e,
          i = t || 100;
        return function (e) {
          return {
            property: e,
            el: n,
            svg: N(n),
            totalLength: z(n) * (i / 100),
          };
        };
      }),
      (Q.setDashoffset = function (e) {
        var t = z(e);
        return e.setAttribute("stroke-dasharray", t), t;
      }),
      (Q.stagger = function (e, t) {
        void 0 === t && (t = {});
        var n = t.direction || "normal",
          i = t.easing ? h(t.easing) : null,
          r = t.grid,
          a = t.axis,
          s = t.from || 0,
          l = "first" === s,
          c = "center" === s,
          u = "last" === s,
          d = o.arr(e),
          p = d ? parseFloat(e[0]) : parseFloat(e),
          f = d ? parseFloat(e[1]) : 0,
          m = E(d ? e[1] : e) || 0,
          g = t.start || 0 + (d ? p : 0),
          v = [],
          y = 0;
        return function (e, t, o) {
          if (
            (l && (s = 0), c && (s = (o - 1) / 2), u && (s = o - 1), !v.length)
          ) {
            for (var h = 0; h < o; h++) {
              if (r) {
                var b = c ? (r[0] - 1) / 2 : s % r[0],
                  w = c ? (r[1] - 1) / 2 : Math.floor(s / r[0]),
                  x = b - (h % r[0]),
                  T = w - Math.floor(h / r[0]),
                  C = Math.sqrt(x * x + T * T);
                "x" === a && (C = -x), "y" === a && (C = -T), v.push(C);
              } else v.push(Math.abs(s - h));
              y = Math.max.apply(Math, v);
            }
            i &&
              (v = v.map(function (e) {
                return i(e / y) * y;
              })),
              "reverse" === n &&
                (v = v.map(function (e) {
                  return a ? (e < 0 ? -1 * e : -e) : Math.abs(y - e);
                }));
          }
          return g + (d ? (f - p) / y : p) * (Math.round(100 * v[t]) / 100) + m;
        };
      }),
      (Q.timeline = function (e) {
        void 0 === e && (e = {});
        var n = Q(e);
        return (
          (n.duration = 0),
          (n.add = function (i, r) {
            var a = U.indexOf(n),
              s = n.children;
            function l(e) {
              e.passThrough = !0;
            }
            a > -1 && U.splice(a, 1);
            for (var c = 0; c < s.length; c++) l(s[c]);
            var u = C(i, T(t, e));
            u.targets = u.targets || e.targets;
            var d = n.duration;
            (u.autoplay = !1),
              (u.direction = n.direction),
              (u.timelineOffset = o.und(r) ? d : A(r, d)),
              l(n),
              n.seek(u.timelineOffset);
            var p = Q(u);
            l(p), s.push(p);
            var f = X(s, e);
            return (
              (n.delay = f.delay),
              (n.endDelay = f.endDelay),
              (n.duration = f.duration),
              n.seek(0),
              n.reset(),
              n.autoplay && n.play(),
              n
            );
          }),
          n
        );
      }),
      (Q.easing = h),
      (Q.penner = m),
      (Q.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }),
      Q
    );
  }),
  (function () {
    "use strict";
    var e = !1;
    (window.JQClass = function () {}),
      (JQClass.classes = {}),
      (JQClass.extend = function t(n) {
        function i() {
          !e && this._init && this._init.apply(this, arguments);
        }
        var r = this.prototype;
        e = !0;
        var a = new this();
        for (var s in ((e = !1), n))
          if ("function" == typeof n[s] && "function" == typeof r[s])
            a[s] = (function (e, t) {
              return function () {
                var n = this._super;
                this._super = function (t) {
                  return r[e].apply(this, t || []);
                };
                var i = t.apply(this, arguments);
                return (this._super = n), i;
              };
            })(s, n[s]);
          else if (
            "object" == typeof n[s] &&
            "object" == typeof r[s] &&
            "defaultOptions" === s
          ) {
            var o,
              l = r[s],
              c = n[s],
              u = {};
            for (o in l) u[o] = l[o];
            for (o in c) u[o] = c[o];
            a[s] = u;
          } else a[s] = n[s];
        return (
          (i.prototype = a), (i.prototype.constructor = i), (i.extend = t), i
        );
      });
  })(),
  /*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
  (function ($) {
    "use strict";
    function camelCase(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      deepMerge: !0,
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {}
        );
        var e = camelCase(this.name);
        ($[e] = this),
          ($.fn[e] = function (t) {
            var n = Array.prototype.slice.call(arguments, 1),
              i = this,
              r = this;
            return (
              this.each(function () {
                if ("string" == typeof t) {
                  if ("_" === t[0] || !$[e][t]) throw "Unknown method: " + t;
                  var a = $[e][t].apply($[e], [this].concat(n));
                  if (a !== i && void 0 !== a) return (r = a), !1;
                } else $[e]._attach(this, t);
              }),
              r
            );
          });
      },
      setDefaults: function (e) {
        $.extend(this.defaultOptions, e || {});
      },
      _attach: function (e, t) {
        if (!(e = $(e)).hasClass(this._getMarker())) {
          e.addClass(this._getMarker()),
            (t = $.extend(
              this.deepMerge,
              {},
              this.defaultOptions,
              this._getMetadata(e),
              t || {}
            ));
          var n = $.extend(
            { name: this.name, elem: e, options: t },
            this._instSettings(e, t)
          );
          e.data(this.name, n), this._postAttach(e, n), this.option(e, t);
        }
      },
      _instSettings: function (e, t) {
        return {};
      },
      _postAttach: function (e, t) {},
      _getMetadata: function (elem) {
        try {
          var data = elem.data(this.name.toLowerCase()) || "";
          for (var key in ((data = data
            .replace(/(\\?)'/g, function (e, t) {
              return t ? "'" : '"';
            })
            .replace(/([a-zA-Z0-9]+):/g, function (e, t, n) {
              var i = data.substring(0, n).match(/"/g);
              return i && i.length % 2 != 0 ? t + ":" : '"' + t + '":';
            })
            .replace(/\\:/g, ":")),
          (data = $.parseJSON("{" + data + "}")),
          data))
            if (data.hasOwnProperty(key)) {
              var value = data[key];
              "string" == typeof value &&
                value.match(/^new Date\(([-0-9,\s]*)\)$/) &&
                (data[key] = eval(value));
            }
          return data;
        } catch (e) {
          return {};
        }
      },
      _getInst: function (e) {
        return $(e).data(this.name) || {};
      },
      option: function (e, t, n) {
        var i = (e = $(e)).data(this.name),
          r = t || {};
        return !t || ("string" == typeof t && void 0 === n)
          ? (r = (i || {}).options) && t
            ? r[t]
            : r
          : void (
              e.hasClass(this._getMarker()) &&
              ("string" == typeof t && ((r = {}), (r[t] = n)),
              this._optionsChanged(e, i, r),
              $.extend(i.options, r))
            );
      },
      _optionsChanged: function (e, t, n) {},
      destroy: function (e) {
        (e = $(e)).hasClass(this._getMarker()) &&
          (this._preDestroy(e, this._getInst(e)),
          e.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (e, t) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (e, t) {
          "object" == typeof e && ((t = e), (e = "JQPlugin")),
            (e = camelCase(e));
          var n = camelCase(t.name);
          (JQClass.classes[n] = JQClass.classes[e].extend(t)),
            new JQClass.classes[n]();
        },
      });
  })(jQuery),
  (function (e) {
    "use strict";
    var t = "countdown";
    e.JQPlugin.createPlugin({
      name: t,
      defaultOptions: {
        until: null,
        since: null,
        timezone: null,
        serverSync: null,
        format: "dHMS",
        layout: "",
        compact: !1,
        padZeroes: !1,
        significant: 0,
        description: "",
        expiryUrl: "",
        expiryText: "",
        alwaysExpire: !1,
        onExpiry: null,
        onTick: null,
        tickInterval: 1,
      },
      regionalOptions: {
        "": {
          labels: [
            "Years",
            "Months",
            "Weeks",
            "Days",
            "Hours",
            "Minutes",
            "Seconds",
          ],
          labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
          compactLabels: ["y", "m", "w", "d"],
          whichLabels: null,
          digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          timeSeparator: ":",
          isRTL: !1,
        },
      },
      _rtlClass: t + "-rtl",
      _sectionClass: t + "-section",
      _amountClass: t + "-amount",
      _periodClass: t + "-period",
      _rowClass: t + "-row",
      _holdingClass: t + "-holding",
      _showClass: t + "-show",
      _descrClass: t + "-descr",
      _timerElems: [],
      _init: function () {
        var t = this;
        this._super(), (this._serverSyncs = []);
        var n =
            "function" == typeof Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                },
          i = window.performance && "function" == typeof window.performance.now,
          r =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            null,
          a = 0;
        !r || e.noRequestAnimationFrame
          ? ((e.noRequestAnimationFrame = null),
            (e.countdown._timer = setInterval(function () {
              t._updateElems();
            }, 1e3)))
          : ((a =
              window.animationStartTime ||
              window.webkitAnimationStartTime ||
              window.mozAnimationStartTime ||
              window.oAnimationStartTime ||
              window.msAnimationStartTime ||
              n()),
            r(function e(s) {
              var o =
                s < 1e12
                  ? i
                    ? window.performance.now() +
                      window.performance.timing.navigationStart
                    : n()
                  : s || n();
              o - a >= 1e3 && (t._updateElems(), (a = o)), r(e);
            }));
      },
      UTCDate: function (e, t, n, i, r, a, s, o) {
        "object" == typeof t &&
          t instanceof Date &&
          ((o = t.getMilliseconds()),
          (s = t.getSeconds()),
          (a = t.getMinutes()),
          (r = t.getHours()),
          (i = t.getDate()),
          (n = t.getMonth()),
          (t = t.getFullYear()));
        var l = new Date();
        return (
          l.setUTCFullYear(t),
          l.setUTCDate(1),
          l.setUTCMonth(n || 0),
          l.setUTCDate(i || 1),
          l.setUTCHours(r || 0),
          l.setUTCMinutes((a || 0) - (Math.abs(e) < 30 ? 60 * e : e)),
          l.setUTCSeconds(s || 0),
          l.setUTCMilliseconds(o || 0),
          l
        );
      },
      periodsToSeconds: function (e) {
        return (
          31557600 * e[0] +
          2629800 * e[1] +
          604800 * e[2] +
          86400 * e[3] +
          3600 * e[4] +
          60 * e[5] +
          e[6]
        );
      },
      resync: function () {
        var t = this;
        e("." + this._getMarker()).each(function () {
          var n = e.data(this, t.name);
          if (n.options.serverSync) {
            for (var i = null, r = 0; r < t._serverSyncs.length; r++)
              if (t._serverSyncs[r][0] === n.options.serverSync) {
                i = t._serverSyncs[r];
                break;
              }
            if (t._eqNull(i[2])) {
              var a = e.isFunction(n.options.serverSync)
                ? n.options.serverSync.apply(this, [])
                : null;
              i[2] = (a ? new Date().getTime() - a.getTime() : 0) - i[1];
            }
            n._since &&
              n._since.setMilliseconds(n._since.getMilliseconds() + i[2]),
              n._until.setMilliseconds(n._until.getMilliseconds() + i[2]);
          }
        });
        for (var n = 0; n < t._serverSyncs.length; n++)
          t._eqNull(t._serverSyncs[n][2]) ||
            ((t._serverSyncs[n][1] += t._serverSyncs[n][2]),
            delete t._serverSyncs[n][2]);
      },
      _instSettings: function (e, t) {
        return { _periods: [0, 0, 0, 0, 0, 0, 0] };
      },
      _addElem: function (e) {
        this._hasElem(e) || this._timerElems.push(e);
      },
      _hasElem: function (t) {
        return e.inArray(t, this._timerElems) > -1;
      },
      _removeElem: function (t) {
        this._timerElems = e.map(this._timerElems, function (e) {
          return e === t ? null : e;
        });
      },
      _updateElems: function () {
        for (var e = this._timerElems.length - 1; e >= 0; e--)
          this._updateCountdown(this._timerElems[e]);
      },
      _optionsChanged: function (t, n, i) {
        i.layout &&
          (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
          this._resetExtraLabels(n.options, i);
        var r = n.options.timezone !== i.timezone;
        e.extend(n.options, i),
          this._adjustSettings(
            t,
            n,
            !this._eqNull(i.until) || !this._eqNull(i.since) || r
          );
        var a = new Date();
        ((n._since && n._since < a) || (n._until && n._until > a)) &&
          this._addElem(t[0]),
          this._updateCountdown(t, n);
      },
      _updateCountdown: function (t, n) {
        if (((t = t.jquery ? t : e(t)), (n = n || this._getInst(t)))) {
          if (
            (t
              .html(this._generateHTML(n))
              .toggleClass(this._rtlClass, n.options.isRTL),
            "pause" !== n._hold && e.isFunction(n.options.onTick))
          ) {
            var i =
              "lap" !== n._hold
                ? n._periods
                : this._calculatePeriods(
                    n,
                    n._show,
                    n.options.significant,
                    new Date()
                  );
            (1 !== n.options.tickInterval &&
              this.periodsToSeconds(i) % n.options.tickInterval != 0) ||
              n.options.onTick.apply(t[0], [i]);
          }
          if (
            "pause" !== n._hold &&
            (n._since
              ? n._now.getTime() < n._since.getTime()
              : n._now.getTime() >= n._until.getTime()) &&
            !n._expiring
          ) {
            if (
              ((n._expiring = !0),
              this._hasElem(t[0]) || n.options.alwaysExpire)
            ) {
              if (
                (this._removeElem(t[0]),
                e.isFunction(n.options.onExpiry) &&
                  n.options.onExpiry.apply(t[0], []),
                n.options.expiryText)
              ) {
                var r = n.options.layout;
                (n.options.layout = n.options.expiryText),
                  this._updateCountdown(t[0], n),
                  (n.options.layout = r);
              }
              n.options.expiryUrl && (window.location = n.options.expiryUrl);
            }
            n._expiring = !1;
          } else "pause" === n._hold && this._removeElem(t[0]);
        }
      },
      _resetExtraLabels: function (e, t) {
        var n = null;
        for (n in t) n.match(/[Ll]abels[02-9]|compactLabels1/) && (e[n] = t[n]);
        for (n in e)
          n.match(/[Ll]abels[02-9]|compactLabels1/) &&
            void 0 === t[n] &&
            (e[n] = null);
      },
      _eqNull: function (e) {
        return null == e;
      },
      _adjustSettings: function (t, n, i) {
        for (var r = null, a = 0; a < this._serverSyncs.length; a++)
          if (this._serverSyncs[a][0] === n.options.serverSync) {
            r = this._serverSyncs[a][1];
            break;
          }
        var s = null,
          o = null;
        if (this._eqNull(r)) {
          var l = e.isFunction(n.options.serverSync)
            ? n.options.serverSync.apply(t[0], [])
            : null;
          (s = new Date()),
            (o = l ? s.getTime() - l.getTime() : 0),
            this._serverSyncs.push([n.options.serverSync, o]);
        } else (s = new Date()), (o = n.options.serverSync ? r : 0);
        var c = n.options.timezone;
        (c = this._eqNull(c) ? -s.getTimezoneOffset() : c),
          (i || (!i && this._eqNull(n._until) && this._eqNull(n._since))) &&
            ((n._since = n.options.since),
            this._eqNull(n._since) ||
              ((n._since = this.UTCDate(
                c,
                this._determineTime(n._since, null)
              )),
              n._since &&
                o &&
                n._since.setMilliseconds(n._since.getMilliseconds() + o)),
            (n._until = this.UTCDate(
              c,
              this._determineTime(n.options.until, s)
            )),
            o && n._until.setMilliseconds(n._until.getMilliseconds() + o)),
          (n._show = this._determineShow(n));
      },
      _preDestroy: function (e, t) {
        this._removeElem(e[0]), e.empty();
      },
      pause: function (e) {
        this._hold(e, "pause");
      },
      lap: function (e) {
        this._hold(e, "lap");
      },
      resume: function (e) {
        this._hold(e, null);
      },
      toggle: function (t) {
        this[(e.data(t, this.name) || {})._hold ? "resume" : "pause"](t);
      },
      toggleLap: function (t) {
        this[(e.data(t, this.name) || {})._hold ? "resume" : "lap"](t);
      },
      _hold: function (t, n) {
        var i = e.data(t, this.name);
        if (i) {
          if ("pause" === i._hold && !n) {
            i._periods = i._savePeriods;
            var r = i._since ? "-" : "+";
            (i[i._since ? "_since" : "_until"] = this._determineTime(
              r +
                i._periods[0] +
                "y" +
                r +
                i._periods[1] +
                "o" +
                r +
                i._periods[2] +
                "w" +
                r +
                i._periods[3] +
                "d" +
                r +
                i._periods[4] +
                "h" +
                r +
                i._periods[5] +
                "m" +
                r +
                i._periods[6] +
                "s"
            )),
              this._addElem(t);
          }
          (i._hold = n),
            (i._savePeriods = "pause" === n ? i._periods : null),
            e.data(t, this.name, i),
            this._updateCountdown(t, i);
        }
      },
      getTimes: function (t) {
        var n = e.data(t, this.name);
        return n
          ? "pause" === n._hold
            ? n._savePeriods
            : n._hold
            ? this._calculatePeriods(
                n,
                n._show,
                n.options.significant,
                new Date()
              )
            : n._periods
          : null;
      },
      _determineTime: function (e, t) {
        var n = this,
          i = this._eqNull(e)
            ? t
            : "string" == typeof e
            ? (function (e) {
                e = e.toLowerCase();
                for (
                  var t = new Date(),
                    i = t.getFullYear(),
                    r = t.getMonth(),
                    a = t.getDate(),
                    s = t.getHours(),
                    o = t.getMinutes(),
                    l = t.getSeconds(),
                    c = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
                    u = c.exec(e);
                  u;

                ) {
                  switch (u[2] || "s") {
                    case "s":
                      l += parseInt(u[1], 10);
                      break;
                    case "m":
                      o += parseInt(u[1], 10);
                      break;
                    case "h":
                      s += parseInt(u[1], 10);
                      break;
                    case "d":
                      a += parseInt(u[1], 10);
                      break;
                    case "w":
                      a += 7 * parseInt(u[1], 10);
                      break;
                    case "o":
                      (r += parseInt(u[1], 10)),
                        (a = Math.min(a, n._getDaysInMonth(i, r)));
                      break;
                    case "y":
                      (i += parseInt(u[1], 10)),
                        (a = Math.min(a, n._getDaysInMonth(i, r)));
                  }
                  u = c.exec(e);
                }
                return new Date(i, r, a, s, o, l, 0);
              })(e)
            : "number" == typeof e
            ? (function (e) {
                var t = new Date();
                return t.setTime(t.getTime() + 1e3 * e), t;
              })(e)
            : e;
        return i && i.setMilliseconds(0), i;
      },
      _getDaysInMonth: function (e, t) {
        return 32 - new Date(e, t, 32).getDate();
      },
      _normalLabels: function (e) {
        return e;
      },
      _generateHTML: function (t) {
        var n = this;
        t._periods = t._hold
          ? t._periods
          : this._calculatePeriods(
              t,
              t._show,
              t.options.significant,
              new Date()
            );
        var i = !1,
          r = 0,
          a = t.options.significant,
          s = e.extend({}, t._show),
          o = null;
        for (o = 0; o <= 6; o++)
          (i = i || ("?" === t._show[o] && t._periods[o] > 0)),
            (s[o] = "?" !== t._show[o] || i ? t._show[o] : null),
            (r += s[o] ? 1 : 0),
            (a -= t._periods[o] > 0 ? 1 : 0);
        var l = [!1, !1, !1, !1, !1, !1, !1];
        for (o = 6; o >= 0; o--)
          t._show[o] && (t._periods[o] ? (l[o] = !0) : ((l[o] = a > 0), a--));
        var c = t.options.compact ? t.options.compactLabels : t.options.labels,
          u = t.options.whichLabels || this._normalLabels,
          d = function (e) {
            var i = t.options["compactLabels" + u(t._periods[e])];
            return s[e]
              ? n._translateDigits(t, t._periods[e]) + (i ? i[e] : c[e]) + " "
              : "";
          },
          p = t.options.padZeroes ? 2 : 1,
          f = function (e) {
            var i = t.options["labels" + u(t._periods[e])];
            return (!t.options.significant && s[e]) ||
              (t.options.significant && l[e])
              ? '<span class="' +
                  n._sectionClass +
                  '"><span class="' +
                  n._amountClass +
                  '">' +
                  n._minDigits(t, t._periods[e], p) +
                  '</span><span class="' +
                  n._periodClass +
                  '">' +
                  (i ? i[e] : c[e]) +
                  "</span></span>"
              : "";
          };
        return t.options.layout
          ? this._buildLayout(
              t,
              s,
              t.options.layout,
              t.options.compact,
              t.options.significant,
              l
            )
          : (t.options.compact
              ? '<span class="' +
                this._rowClass +
                " " +
                this._amountClass +
                (t._hold ? " " + this._holdingClass : "") +
                '">' +
                d(0) +
                d(1) +
                d(2) +
                d(3) +
                (s[4] ? this._minDigits(t, t._periods[4], 2) : "") +
                (s[5]
                  ? (s[4] ? t.options.timeSeparator : "") +
                    this._minDigits(t, t._periods[5], 2)
                  : "") +
                (s[6]
                  ? (s[4] || s[5] ? t.options.timeSeparator : "") +
                    this._minDigits(t, t._periods[6], 2)
                  : "")
              : '<span class="' +
                this._rowClass +
                " " +
                this._showClass +
                (t.options.significant || r) +
                (t._hold ? " " + this._holdingClass : "") +
                '">' +
                f(0) +
                f(1) +
                f(2) +
                f(3) +
                f(4) +
                f(5) +
                f(6)) +
              "</span>" +
              (t.options.description
                ? '<span class="' +
                  this._rowClass +
                  " " +
                  this._descrClass +
                  '">' +
                  t.options.description +
                  "</span>"
                : "");
      },
      _buildLayout: function (t, n, i, r, a, s) {
        for (
          var o = t.options[r ? "compactLabels" : "labels"],
            l = t.options.whichLabels || this._normalLabels,
            c = function (e) {
              return (t.options[
                (r ? "compactLabels" : "labels") + l(t._periods[e])
              ] || o)[e];
            },
            u = function (e, n) {
              return t.options.digits[Math.floor(e / n) % 10];
            },
            d = {
              desc: t.options.description,
              sep: t.options.timeSeparator,
              yl: c(0),
              yn: this._minDigits(t, t._periods[0], 1),
              ynn: this._minDigits(t, t._periods[0], 2),
              ynnn: this._minDigits(t, t._periods[0], 3),
              y1: u(t._periods[0], 1),
              y10: u(t._periods[0], 10),
              y100: u(t._periods[0], 100),
              y1000: u(t._periods[0], 1e3),
              ol: c(1),
              on: this._minDigits(t, t._periods[1], 1),
              onn: this._minDigits(t, t._periods[1], 2),
              onnn: this._minDigits(t, t._periods[1], 3),
              o1: u(t._periods[1], 1),
              o10: u(t._periods[1], 10),
              o100: u(t._periods[1], 100),
              o1000: u(t._periods[1], 1e3),
              wl: c(2),
              wn: this._minDigits(t, t._periods[2], 1),
              wnn: this._minDigits(t, t._periods[2], 2),
              wnnn: this._minDigits(t, t._periods[2], 3),
              w1: u(t._periods[2], 1),
              w10: u(t._periods[2], 10),
              w100: u(t._periods[2], 100),
              w1000: u(t._periods[2], 1e3),
              dl: c(3),
              dn: this._minDigits(t, t._periods[3], 1),
              dnn: this._minDigits(t, t._periods[3], 2),
              dnnn: this._minDigits(t, t._periods[3], 3),
              d1: u(t._periods[3], 1),
              d10: u(t._periods[3], 10),
              d100: u(t._periods[3], 100),
              d1000: u(t._periods[3], 1e3),
              hl: c(4),
              hn: this._minDigits(t, t._periods[4], 1),
              hnn: this._minDigits(t, t._periods[4], 2),
              hnnn: this._minDigits(t, t._periods[4], 3),
              h1: u(t._periods[4], 1),
              h10: u(t._periods[4], 10),
              h100: u(t._periods[4], 100),
              h1000: u(t._periods[4], 1e3),
              ml: c(5),
              mn: this._minDigits(t, t._periods[5], 1),
              mnn: this._minDigits(t, t._periods[5], 2),
              mnnn: this._minDigits(t, t._periods[5], 3),
              m1: u(t._periods[5], 1),
              m10: u(t._periods[5], 10),
              m100: u(t._periods[5], 100),
              m1000: u(t._periods[5], 1e3),
              sl: c(6),
              sn: this._minDigits(t, t._periods[6], 1),
              snn: this._minDigits(t, t._periods[6], 2),
              snnn: this._minDigits(t, t._periods[6], 3),
              s1: u(t._periods[6], 1),
              s10: u(t._periods[6], 10),
              s100: u(t._periods[6], 100),
              s1000: u(t._periods[6], 1e3),
            },
            p = i,
            f = 0;
          f <= 6;
          f++
        ) {
          var m = "yowdhms".charAt(f),
            h = new RegExp("\\{" + m + "<\\}([\\s\\S]*)\\{" + m + ">\\}", "g");
          p = p.replace(h, (!a && n[f]) || (a && s[f]) ? "$1" : "");
        }
        return (
          e.each(d, function (e, t) {
            var n = new RegExp("\\{" + e + "\\}", "g");
            p = p.replace(n, t);
          }),
          p
        );
      },
      _minDigits: function (e, t, n) {
        return (t = "" + t).length >= n
          ? this._translateDigits(e, t)
          : ((t = "0000000000" + t),
            this._translateDigits(e, t.substr(t.length - n)));
      },
      _translateDigits: function (e, t) {
        return ("" + t).replace(/[0-9]/g, function (t) {
          return e.options.digits[t];
        });
      },
      _determineShow: function (e) {
        var t = e.options.format,
          n = [];
        return (
          (n[0] = t.match("y") ? "?" : t.match("Y") ? "!" : null),
          (n[1] = t.match("o") ? "?" : t.match("O") ? "!" : null),
          (n[2] = t.match("w") ? "?" : t.match("W") ? "!" : null),
          (n[3] = t.match("d") ? "?" : t.match("D") ? "!" : null),
          (n[4] = t.match("h") ? "?" : t.match("H") ? "!" : null),
          (n[5] = t.match("m") ? "?" : t.match("M") ? "!" : null),
          (n[6] = t.match("s") ? "?" : t.match("S") ? "!" : null),
          n
        );
      },
      _calculatePeriods: function (e, t, n, i) {
        (e._now = i), e._now.setMilliseconds(0);
        var r = new Date(e._now.getTime());
        e._since
          ? i.getTime() < e._since.getTime()
            ? (e._now = i = r)
            : (i = e._since)
          : (r.setTime(e._until.getTime()),
            i.getTime() > e._until.getTime() && (e._now = i = r));
        var a = [0, 0, 0, 0, 0, 0, 0];
        if (t[0] || t[1]) {
          var s = this._getDaysInMonth(i.getFullYear(), i.getMonth()),
            o = this._getDaysInMonth(r.getFullYear(), r.getMonth()),
            l =
              r.getDate() === i.getDate() ||
              (r.getDate() >= Math.min(s, o) && i.getDate() >= Math.min(s, o)),
            c = function (e) {
              return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds();
            },
            u = Math.max(
              0,
              12 * (r.getFullYear() - i.getFullYear()) +
                r.getMonth() -
                i.getMonth() +
                ((r.getDate() < i.getDate() && !l) || (l && c(r) < c(i))
                  ? -1
                  : 0)
            );
          (a[0] = t[0] ? Math.floor(u / 12) : 0),
            (a[1] = t[1] ? u - 12 * a[0] : 0);
          var d = (i = new Date(i.getTime())).getDate() === s,
            p = this._getDaysInMonth(
              i.getFullYear() + a[0],
              i.getMonth() + a[1]
            );
          i.getDate() > p && i.setDate(p),
            i.setFullYear(i.getFullYear() + a[0]),
            i.setMonth(i.getMonth() + a[1]),
            d && i.setDate(p);
        }
        var f = Math.floor((r.getTime() - i.getTime()) / 1e3),
          m = null,
          h = function (e, n) {
            (a[e] = t[e] ? Math.floor(f / n) : 0), (f -= a[e] * n);
          };
        if (
          (h(2, 604800),
          h(3, 86400),
          h(4, 3600),
          h(5, 60),
          h(6, 1),
          f > 0 && !e._since)
        ) {
          var g = [1, 12, 4.3482, 7, 24, 60, 60],
            v = 6,
            y = 1;
          for (m = 6; m >= 0; m--)
            t[m] &&
              (a[v] >= y && ((a[v] = 0), (f = 1)),
              f > 0 && (a[m]++, (f = 0), (v = m), (y = 1))),
              (y *= g[m]);
        }
        if (n) for (m = 0; m <= 6; m++) n && a[m] ? n-- : n || (a[m] = 0);
        return a;
      },
    });
  })(jQuery),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(n, i) {
      void 0 === n && (n = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((r) => {
          void 0 === n[r]
            ? (n[r] = i[r])
            : e(i[r]) &&
              e(n[r]) &&
              Object.keys(i[r]).length > 0 &&
              t(n[r], i[r]);
        });
    }
    const n = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function i() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, n), e;
    }
    const r = {
      document: n,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function a() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, r), e;
    }
    function s(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function o() {
      return Date.now();
    }
    function l(e, t) {
      void 0 === t && (t = "x");
      const n = a();
      let i, r, s;
      const o = (function (e) {
        const t = a();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((s =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = s.toString().split(","))),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function c(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function u() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = n.length; t < i; t += 1) {
            const i = n[t],
              a = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== a &&
              a.enumerable &&
              (c(e[i]) && c(r[i])
                ? r[i].__swiper__
                  ? (e[i] = r[i])
                  : u(e[i], r[i])
                : !c(e[i]) && c(r[i])
                ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : u(e[i], r[i]))
                : (e[i] = r[i]));
          }
        }
      }
      var n;
      return e;
    }
    function d(e, t, n) {
      e.style.setProperty(t, n);
    }
    function p(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const r = a(),
        s = -t.translate;
      let o,
        l = null;
      const c = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const u = n > s ? "next" : "prev",
        d = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
        p = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / c, 1), 0),
            a = 0.5 - Math.cos(e * Math.PI) / 2;
          let u = s + a * (n - s);
          if ((d(u, n) && (u = n), t.wrapperEl.scrollTo({ [i]: u }), d(u, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: u });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(p);
        };
      p();
    }
    function f(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function m(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function h(e, t) {
      void 0 === t && (t = []);
      const n = document.createElement(e);
      return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
    }
    function g(e) {
      const t = a(),
        n = i(),
        r = e.getBoundingClientRect(),
        s = n.body,
        o = e.clientTop || s.clientTop || 0,
        l = e.clientLeft || s.clientLeft || 0,
        c = e === t ? t.scrollY : e.scrollTop,
        u = e === t ? t.scrollX : e.scrollLeft;
      return { top: r.top + c - o, left: r.left + u - l };
    }
    function v(e, t) {
      return a().getComputedStyle(e, null).getPropertyValue(t);
    }
    function y(e) {
      let t,
        n = e;
      if (n) {
        for (t = 0; null !== (n = n.previousSibling); )
          1 === n.nodeType && (t += 1);
        return t;
      }
    }
    function b(e, t) {
      const n = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement);
      return n;
    }
    function w(e, t) {
      t &&
        e.addEventListener("transitionend", function n(i) {
          i.target === e &&
            (t.call(e, i), e.removeEventListener("transitionend", n));
        });
    }
    function x(e, t, n) {
      const i = a();
      return n
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let T, C, E;
    function S() {
      return (
        T ||
          (T = (function () {
            const e = a(),
              t = i();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        T
      );
    }
    function M(e) {
      return (
        void 0 === e && (e = {}),
        C ||
          (C = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = S(),
              i = a(),
              r = i.navigator.platform,
              s = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = i.screen.width,
              c = i.screen.height,
              u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = s.match(/(iPad).*OS\s([\d_]+)/);
            const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === r;
            let h = "MacIntel" === r;
            return (
              !d &&
                h &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${c}`) >= 0 &&
                ((d = s.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              u && !m && ((o.os = "android"), (o.android = !0)),
              (d || f || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        C
      );
    }
    function k() {
      return (
        E ||
          (E = (function () {
            const e = a();
            let t = !1;
            function n() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (n()) {
              const n = String(e.navigator.userAgent);
              if (n.includes("Version/")) {
                const [e, i] = n
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || n(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        E
      );
    }
    var _ = {
      on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          t.apply(i, a);
        }
        return (r.__emitterProxy = t), i.on(e, r, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, r) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(r, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
          a[s] = arguments[s];
        return (
          "string" == typeof a[0] || Array.isArray(a[0])
            ? ((t = a[0]), (n = a.slice(1, a.length)), (i = e))
            : ((t = a[0].events), (n = a[0].data), (i = a[0].context || e)),
          n.unshift(i),
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          e
        );
      },
    };
    const I = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const n = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (n) {
          const t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      P = (e, t) => {
        if (!e.slides[t]) return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute("loading");
      },
      D = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0) return;
        t = Math.min(t, n);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex,
          a = r + i - 1;
        if (e.params.rewind)
          for (let i = r - t; i <= a + t; i += 1) {
            const t = ((i % n) + n) % n;
            t !== r && t > a && P(e, t);
          }
        else
          for (let i = Math.max(a - t, 0); i <= Math.min(a + t, n - 1); i += 1)
            i !== r && i > a && P(e, i);
      };
    var A = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i.clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(v(i, "padding-left") || 0, 10) -
                parseInt(v(i, "padding-right") || 0, 10)),
              (n =
                n -
                parseInt(v(i, "padding-top") || 0, 10) -
                parseInt(v(i, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const i = e.params,
            {
              wrapperEl: r,
              slidesEl: a,
              size: s,
              rtlTranslate: o,
              wrongRTL: l,
            } = e,
            c = e.virtual && i.virtual.enabled,
            u = c ? e.virtual.slides.length : e.slides.length,
            p = m(a, `.${e.params.slideClass}, swiper-slide`),
            f = c ? e.virtual.slides.length : p.length;
          let h = [];
          const g = [],
            y = [];
          let b = i.slidesOffsetBefore;
          "function" == typeof b && (b = i.slidesOffsetBefore.call(e));
          let w = i.slidesOffsetAfter;
          "function" == typeof w && (w = i.slidesOffsetAfter.call(e));
          const T = e.snapGrid.length,
            C = e.slidesGrid.length;
          let E = i.spaceBetween,
            S = -b,
            M = 0,
            k = 0;
          if (void 0 === s) return;
          "string" == typeof E && E.indexOf("%") >= 0
            ? (E = (parseFloat(E.replace("%", "")) / 100) * s)
            : "string" == typeof E && (E = parseFloat(E)),
            (e.virtualSize = -E),
            p.forEach((e) => {
              o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            i.centeredSlides &&
              i.cssMode &&
              (d(r, "--swiper-centered-offset-before", ""),
              d(r, "--swiper-centered-offset-after", ""));
          const _ = i.grid && i.grid.rows > 1 && e.grid;
          let I;
          _ && e.grid.initSlides(f);
          const P =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < f; r += 1) {
            let a;
            if (
              ((I = 0),
              p[r] && (a = p[r]),
              _ && e.grid.updateSlide(r, a, f, t),
              !p[r] || "none" !== v(a, "display"))
            ) {
              if ("auto" === i.slidesPerView) {
                P && (p[r].style[t("width")] = "");
                const s = getComputedStyle(a),
                  o = a.style.transform,
                  l = a.style.webkitTransform;
                if (
                  (o && (a.style.transform = "none"),
                  l && (a.style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  I = e.isHorizontal() ? x(a, "width", !0) : x(a, "height", !0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    i = n(s, "padding-right"),
                    r = n(s, "margin-left"),
                    o = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) I = e + r + o;
                  else {
                    const { clientWidth: n, offsetWidth: s } = a;
                    I = e + t + i + r + o + (s - n);
                  }
                }
                o && (a.style.transform = o),
                  l && (a.style.webkitTransform = l),
                  i.roundLengths && (I = Math.floor(I));
              } else
                (I = (s - (i.slidesPerView - 1) * E) / i.slidesPerView),
                  i.roundLengths && (I = Math.floor(I)),
                  p[r] && (p[r].style[t("width")] = `${I}px`);
              p[r] && (p[r].swiperSlideSize = I),
                y.push(I),
                i.centeredSlides
                  ? ((S = S + I / 2 + M / 2 + E),
                    0 === M && 0 !== r && (S = S - s / 2 - E),
                    0 === r && (S = S - s / 2 - E),
                    Math.abs(S) < 0.001 && (S = 0),
                    i.roundLengths && (S = Math.floor(S)),
                    k % i.slidesPerGroup == 0 && h.push(S),
                    g.push(S))
                  : (i.roundLengths && (S = Math.floor(S)),
                    (k - Math.min(e.params.slidesPerGroupSkip, k)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(S),
                    g.push(S),
                    (S = S + I + E)),
                (e.virtualSize += I + E),
                (M = I),
                (k += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + w),
            o &&
              l &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              (r.style.width = `${e.virtualSize + E}px`),
            i.setWrapperSize &&
              (r.style[t("width")] = `${e.virtualSize + E}px`),
            _ && e.grid.updateWrapperSize(I, h, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < h.length; n += 1) {
              let r = h[n];
              i.roundLengths && (r = Math.floor(r)),
                h[n] <= e.virtualSize - s && t.push(r);
            }
            (h = t),
              Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - s);
          }
          if (c && i.loop) {
            const t = y[0] + E;
            if (i.slidesPerGroup > 1) {
              const n = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    i.slidesPerGroup
                ),
                r = t * i.slidesPerGroup;
              for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + r);
            }
            for (
              let n = 0;
              n < e.virtual.slidesBefore + e.virtual.slidesAfter;
              n += 1
            )
              1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
                g.push(g[g.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === h.length && (h = [0]), 0 !== E)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            p.filter(
              (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
            ).forEach((e) => {
              e.style[n] = `${E}px`;
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            y.forEach((t) => {
              e += t + (E || 0);
            }),
              (e -= E);
            const t = e - s;
            h = h.map((e) => (e < 0 ? -b : e > t ? t + w : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (y.forEach((t) => {
                e += t + (E || 0);
              }),
              (e -= E),
              e < s)
            ) {
              const t = (s - e) / 2;
              h.forEach((e, n) => {
                h[n] = e - t;
              }),
                g.forEach((e, n) => {
                  g[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: p,
              snapGrid: h,
              slidesGrid: g,
              slidesSizesGrid: y,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            d(r, "--swiper-centered-offset-before", -h[0] + "px"),
              d(
                r,
                "--swiper-centered-offset-after",
                e.size / 2 - y[y.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (f !== u && e.emit("slidesLengthChange"),
            h.length !== T &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            g.length !== C && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            f <= i.maxBackfaceHiddenSlides
              ? n || e.el.classList.add(t)
              : n && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            a = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const s = (e) =>
            i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                n.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                n.push(s(e));
              }
          else n.push(s(t.activeIndex));
          for (r = 0; r < n.length; r += 1)
            if (void 0 !== n[r]) {
              const e = n[r].offsetHeight;
              a = e > a ? e : a;
            }
          (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset =
              (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
              n -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: r, snapGrid: a } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          r && (s = e),
            i.forEach((e) => {
              e.classList.remove(n.slideVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let o = n.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0
            ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
            : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let c = l.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
            const u =
                (s + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (l.swiperSlideSize + o),
              d =
                (s - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (l.swiperSlideSize + o),
              p = -(s - c),
              f = p + t.slidesSizesGrid[e];
            ((p >= 0 && p < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (p <= 0 && f >= t.size)) &&
              (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(e),
              i[e].classList.add(n.slideVisibleClass)),
              (l.progress = r ? -u : u),
              (l.originalProgress = r ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: a, isEnd: s, progressLoop: o } = t;
          const l = a,
            c = s;
          if (0 === i) (r = 0), (a = !0), (s = !0);
          else {
            r = (e - t.minTranslate()) / i;
            const n = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (a = n || r <= 0), (s = o || r >= 1), n && (r = 0), o && (r = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[n],
              a = t.slidesGrid[i],
              s = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            (o = l >= r ? (l - r) / s : (l + s - a) / s), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: r,
            progressLoop: o,
            isBeginning: a,
            isEnd: s,
          }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            a && !l && t.emit("reachBeginning toEdge"),
            s && !c && t.emit("reachEnd toEdge"),
            ((l && !a) || (c && !s)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: i, activeIndex: r } = e,
            a = e.virtual && n.virtual.enabled,
            s = (e) => m(i, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
          let o;
          if (
            (t.forEach((e) => {
              e.classList.remove(
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              );
            }),
            a)
          )
            if (n.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (o = s(`[data-swiper-slide-index="${t}"]`));
            } else o = s(`[data-swiper-slide-index="${r}"]`);
          else o = t[r];
          if (o) {
            o.classList.add(n.slideActiveClass);
            let e = (function (e, t) {
              const n = [];
              for (; e.nextElementSibling; ) {
                const i = e.nextElementSibling;
                t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
              }
              return n;
            })(o, `.${n.slideClass}, swiper-slide`)[0];
            n.loop && !e && (e = t[0]), e && e.classList.add(n.slideNextClass);
            let i = (function (e, t) {
              const n = [];
              for (; e.previousElementSibling; ) {
                const i = e.previousElementSibling;
                t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
              }
              return n;
            })(o, `.${n.slideClass}, swiper-slide`)[0];
            n.loop && 0 === !i && (i = t[t.length - 1]),
              i && i.classList.add(n.slidePrevClass);
          }
          e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
              activeIndex: a,
              realIndex: s,
              snapIndex: o,
            } = t;
          let l,
            c = e;
          const u = (e) => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            (void 0 === c &&
              (c = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  i = e.rtlTranslate ? e.translate : -e.translate;
                let r;
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (r = e)
                      : i >= t[e] && i < t[e + 1] && (r = e + 1)
                    : i >= t[e] && (r = e);
                return (
                  n.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                );
              })(t)),
            i.indexOf(n) >= 0)
          )
            l = i.indexOf(n);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            l = e + Math.floor((c - e) / r.slidesPerGroup);
          }
          if ((l >= i.length && (l = i.length - 1), c === a))
            return (
              l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
              void (
                t.params.loop &&
                t.virtual &&
                t.params.virtual.enabled &&
                (t.realIndex = u(c))
              )
            );
          let d;
          (d =
            t.virtual && r.virtual.enabled && r.loop
              ? u(c)
              : t.slides[c]
              ? parseInt(
                  t.slides[c].getAttribute("data-swiper-slide-index") || c,
                  10
                )
              : c),
            Object.assign(t, {
              previousSnapIndex: o,
              snapIndex: l,
              previousRealIndex: s,
              realIndex: d,
              previousIndex: a,
              activeIndex: c,
            }),
            t.initialized && D(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            s !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            i = e.closest(`.${n.slideClass}, swiper-slide`);
          let r,
            a = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (a = !0), (r = e);
                break;
              }
          if (!i || !a)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  i.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      L = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let a = l(r, e);
          return (a += this.cssOverflowAdjustment()), n && (a = -a), a || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: i, params: r, wrapperEl: a, progress: s } = n;
          let o,
            l = 0,
            c = 0;
          n.isHorizontal() ? (l = i ? -e : e) : (c = e),
            r.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : c),
            r.cssMode
              ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -l : -c)
              : r.virtualTranslate ||
                (n.isHorizontal()
                  ? (l -= n.cssOverflowAdjustment())
                  : (c -= n.cssOverflowAdjustment()),
                (a.style.transform = `translate3d(${l}px, ${c}px, 0px)`));
          const u = n.maxTranslate() - n.minTranslate();
          (o = 0 === u ? 0 : (e - n.minTranslate()) / u),
            o !== s && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          const a = this,
            { params: s, wrapperEl: o } = a;
          if (a.animating && s.preventInteractionOnTransition) return !1;
          const l = a.minTranslate(),
            c = a.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            a.updateProgress(u),
            s.cssMode)
          ) {
            const e = a.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!a.support.smoothScroll)
                return (
                  p({
                    swiper: a,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(u),
                n &&
                  (a.emit("beforeTransitionStart", t, r),
                  a.emit("transitionEnd")))
              : (a.setTransition(t),
                a.setTranslate(u),
                n &&
                  (a.emit("beforeTransitionStart", t, r),
                  a.emit("transitionStart")),
                a.animating ||
                  ((a.animating = !0),
                  a.onTranslateToWrapperTransitionEnd ||
                    (a.onTranslateToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.wrapperEl.removeEventListener(
                          "transitionend",
                          a.onTranslateToWrapperTransitionEnd
                        ),
                        (a.onTranslateToWrapperTransitionEnd = null),
                        delete a.onTranslateToWrapperTransitionEnd,
                        n && a.emit("transitionEnd"));
                    }),
                  a.wrapperEl.addEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
    function O(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
      const { activeIndex: a, previousIndex: s } = t;
      let o = i;
      if (
        (o || (o = a > s ? "next" : a < s ? "prev" : "reset"),
        t.emit(`transition${r}`),
        n && a !== s)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === o
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    var $ = {
        slideTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" == typeof e && (e = parseInt(e, 10));
          const a = this;
          let s = e;
          s < 0 && (s = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: f,
            wrapperEl: m,
            enabled: h,
          } = a;
          if (
            (a.animating && o.preventInteractionOnTransition) ||
            (!h && !i && !r)
          )
            return !1;
          const g = Math.min(a.params.slidesPerGroupSkip, s);
          let v = g + Math.floor((s - g) / a.params.slidesPerGroup);
          v >= l.length && (v = l.length - 1);
          const y = -l[v];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * y),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < i - (i - n) / 2
                  ? (s = e)
                  : t >= n && t < i && (s = e + 1)
                : t >= n && (s = e);
            }
          if (a.initialized && s !== d) {
            if (!a.allowSlideNext && y < a.translate && y < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              y > a.translate &&
              y > a.maxTranslate() &&
              (d || 0) !== s
            )
              return !1;
          }
          let b;
          if (
            (s !== (u || 0) && n && a.emit("beforeSlideChangeStart"),
            a.updateProgress(y),
            (b = s > d ? "next" : s < d ? "prev" : "reset"),
            (f && -y === a.translate) || (!f && y === a.translate))
          )
            return (
              a.updateActiveIndex(s),
              o.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              "slide" !== o.effect && a.setTranslate(y),
              "reset" !== b && (a.transitionStart(n, b), a.transitionEnd(n, b)),
              !1
            );
          if (o.cssMode) {
            const e = a.isHorizontal(),
              n = f ? y : -y;
            if (0 === t) {
              const t = a.virtual && a.params.virtual.enabled;
              t &&
                ((a.wrapperEl.style.scrollSnapType = "none"),
                (a._immediateVirtual = !0)),
                t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                  ? ((a._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      m[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (m[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (a.wrapperEl.style.scrollSnapType = ""),
                      (a._immediateVirtual = !1);
                  });
            } else {
              if (!a.support.smoothScroll)
                return (
                  p({ swiper: a, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              m.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            a.setTransition(t),
            a.setTranslate(y),
            a.updateActiveIndex(s),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, i),
            a.transitionStart(n, b),
            0 === t
              ? a.transitionEnd(n, b)
              : a.animating ||
                ((a.animating = !0),
                a.onSlideToWrapperTransitionEnd ||
                  (a.onSlideToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      (a.onSlideToWrapperTransitionEnd = null),
                      delete a.onSlideToWrapperTransitionEnd,
                      a.transitionEnd(n, b));
                  }),
                a.wrapperEl.addEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" == typeof e && (e = parseInt(e, 10));
          const r = this;
          let a = e;
          return (
            r.params.loop &&
              (r.virtual && r.params.virtual.enabled
                ? (a += r.virtual.slidesBefore)
                : (a = r.getSlideIndexByData(a))),
            r.slideTo(a, t, n, i)
          );
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { enabled: r, params: a, animating: s } = i;
          if (!r) return i;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
            c = i.virtual && a.virtual.enabled;
          if (a.loop) {
            if (s && !c && a.loopPreventsSliding) return !1;
            i.loopFix({ direction: "next" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          return a.rewind && i.isEnd
            ? i.slideTo(0, e, t, n)
            : i.slideTo(i.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              snapGrid: a,
              slidesGrid: s,
              rtlTranslate: o,
              enabled: l,
              animating: c,
            } = i;
          if (!l) return i;
          const u = i.virtual && r.virtual.enabled;
          if (r.loop) {
            if (c && !u && r.loopPreventsSliding) return !1;
            i.loopFix({ direction: "prev" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = d(o ? i.translate : -i.translate),
            f = a.map((e) => d(e));
          let m = a[f.indexOf(p) - 1];
          if (void 0 === m && r.cssMode) {
            let e;
            a.forEach((t, n) => {
              p >= t && (e = n);
            }),
              void 0 !== e && (m = a[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            (void 0 !== m &&
              ((h = s.indexOf(m)),
              h < 0 && (h = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, n);
          }
          return i.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const r = this;
          let a = r.activeIndex;
          const s = Math.min(r.params.slidesPerGroupSkip, a),
            o = s + Math.floor((a - s) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[o]) {
            const e = r.snapGrid[o];
            l - e > (r.snapGrid[o + 1] - e) * i &&
              (a += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[o - 1];
            l - e <= (r.snapGrid[o] - e) * i && (a -= r.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, r.slidesGrid.length - 1)),
            r.slideTo(a, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, slidesEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            a = e.clickedIndex;
          const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? a < e.loopedSlides - i / 2 ||
                  a > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (a = e.getSlideIndex(
                      m(n, `${o}[data-swiper-slide-index="${r}"]`)[0]
                    )),
                    s(() => {
                      e.slideTo(a);
                    }))
                  : e.slideTo(a)
                : a > e.slides.length - i
                ? (e.loopFix(),
                  (a = e.getSlideIndex(
                    m(n, `${o}[data-swiper-slide-index="${r}"]`)[0]
                  )),
                  s(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a);
          } else e.slideTo(a);
        },
      },
      z = {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: i } = t;
          !n.loop ||
            (t.virtual && t.params.virtual.enabled) ||
            (m(i, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            }),
            t.loopFix({
              slideRealIndex: e,
              direction: n.centeredSlides ? void 0 : "next",
            }));
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: i,
            setTranslate: r,
            activeSlideIndex: a,
            byController: s,
            byMousewheel: o,
          } = void 0 === e ? {} : e;
          const l = this;
          if (!l.params.loop) return;
          l.emit("beforeLoopFix");
          const {
            slides: c,
            allowSlidePrev: u,
            allowSlideNext: d,
            slidesEl: p,
            params: f,
          } = l;
          if (
            ((l.allowSlidePrev = !0),
            (l.allowSlideNext = !0),
            l.virtual && f.virtual.enabled)
          )
            return (
              n &&
                (f.centeredSlides || 0 !== l.snapIndex
                  ? f.centeredSlides && l.snapIndex < f.slidesPerView
                    ? l.slideTo(
                        l.virtual.slides.length + l.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : l.snapIndex === l.snapGrid.length - 1 &&
                      l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                  : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
              (l.allowSlidePrev = u),
              (l.allowSlideNext = d),
              void l.emit("loopFix")
            );
          const m =
            "auto" === f.slidesPerView
              ? l.slidesPerViewDynamic()
              : Math.ceil(parseFloat(f.slidesPerView, 10));
          let h = f.loopedSlides || m;
          h % f.slidesPerGroup != 0 &&
            (h += f.slidesPerGroup - (h % f.slidesPerGroup)),
            (l.loopedSlides = h);
          const g = [],
            v = [];
          let y = l.activeIndex;
          void 0 === a
            ? (a = l.getSlideIndex(
                l.slides.filter((e) =>
                  e.classList.contains(f.slideActiveClass)
                )[0]
              ))
            : (y = a);
          const b = "next" === i || !i,
            w = "prev" === i || !i;
          let x = 0,
            T = 0;
          if (a < h) {
            x = Math.max(h - a, f.slidesPerGroup);
            for (let e = 0; e < h - a; e += 1) {
              const t = e - Math.floor(e / c.length) * c.length;
              g.push(c.length - t - 1);
            }
          } else if (a > l.slides.length - 2 * h) {
            T = Math.max(a - (l.slides.length - 2 * h), f.slidesPerGroup);
            for (let e = 0; e < T; e += 1) {
              const t = e - Math.floor(e / c.length) * c.length;
              v.push(t);
            }
          }
          if (
            (w &&
              g.forEach((e) => {
                (l.slides[e].swiperLoopMoveDOM = !0),
                  p.prepend(l.slides[e]),
                  (l.slides[e].swiperLoopMoveDOM = !1);
              }),
            b &&
              v.forEach((e) => {
                (l.slides[e].swiperLoopMoveDOM = !0),
                  p.append(l.slides[e]),
                  (l.slides[e].swiperLoopMoveDOM = !1);
              }),
            l.recalcSlides(),
            "auto" === f.slidesPerView && l.updateSlides(),
            f.watchSlidesProgress && l.updateSlidesOffset(),
            n)
          )
            if (g.length > 0 && w)
              if (void 0 === t) {
                const e = l.slidesGrid[y],
                  t = l.slidesGrid[y + x] - e;
                o
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(y + x, 0, !1, !0),
                    r &&
                      (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
              } else r && l.slideToLoop(t, 0, !1, !0);
            else if (v.length > 0 && b)
              if (void 0 === t) {
                const e = l.slidesGrid[y],
                  t = l.slidesGrid[y - T] - e;
                o
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(y - T, 0, !1, !0),
                    r &&
                      (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
              } else l.slideToLoop(t, 0, !1, !0);
          if (
            ((l.allowSlidePrev = u),
            (l.allowSlideNext = d),
            l.controller && l.controller.control && !s)
          ) {
            const e = {
              slideRealIndex: t,
              slideTo: !1,
              direction: i,
              setTranslate: r,
              activeSlideIndex: a,
              byController: !0,
            };
            Array.isArray(l.controller.control)
              ? l.controller.control.forEach((t) => {
                  !t.destroyed && t.params.loop && t.loopFix(e);
                })
              : l.controller.control instanceof l.constructor &&
                l.controller.control.params.loop &&
                l.controller.control.loopFix(e);
          }
          l.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const i = [];
          e.slides.forEach((e) => {
            const t =
              void 0 === e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            i[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            i.forEach((e) => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
    function N(e) {
      const t = this,
        n = i(),
        r = a(),
        s = t.touchEventsData;
      s.evCache.push(e);
      const { params: l, touches: c, enabled: u } = t;
      if (!u) return;
      if (!l.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && l.preventInteractionOnTransition) return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let p = d.target;
      if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
      if ("which" in d && 3 === d.which) return;
      if ("button" in d && d.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      const f = !!l.noSwipingClass && "" !== l.noSwipingClass,
        m = e.composedPath ? e.composedPath() : e.path;
      f && d.target && d.target.shadowRoot && m && (p = m[0]);
      const h = l.noSwipingSelector
          ? l.noSwipingSelector
          : `.${l.noSwipingClass}`,
        g = !(!d.target || !d.target.shadowRoot);
      if (
        l.noSwiping &&
        (g
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === i() || n === a()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const r = n.closest(e);
                  return r || n.getRootNode
                    ? r || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(h, p)
          : p.closest(h))
      )
        return void (t.allowClick = !0);
      if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
      (c.currentX = d.pageX), (c.currentY = d.pageY);
      const v = c.currentX,
        y = c.currentY,
        b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
      if (b && (v <= w || v >= r.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (c.startX = v),
        (c.startY = y),
        (s.touchStartTime = o()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (s.allowThresholdMove = !1);
      let x = !0;
      p.matches(s.focusableElements) &&
        ((x = !1), "SELECT" === p.nodeName && (s.isTouched = !1)),
        n.activeElement &&
          n.activeElement.matches(s.focusableElements) &&
          n.activeElement !== p &&
          n.activeElement.blur();
      const T = x && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !T) ||
        p.isContentEditable ||
        d.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !l.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", d);
    }
    function j(e) {
      const t = i(),
        n = this,
        r = n.touchEventsData,
        { params: a, touches: s, rtlTranslate: l, enabled: c } = n;
      if (!c) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let u = e;
      if ((u.originalEvent && (u = u.originalEvent), !r.isTouched))
        return void (
          r.startMoving &&
          r.isScrolling &&
          n.emit("touchMoveOpposite", u)
        );
      const d = r.evCache.findIndex((e) => e.pointerId === u.pointerId);
      d >= 0 && (r.evCache[d] = u);
      const p = r.evCache.length > 1 ? r.evCache[0] : u,
        f = p.pageX,
        m = p.pageY;
      if (u.preventedByNestedSwiper) return (s.startX = f), void (s.startY = m);
      if (!n.allowTouchMove)
        return (
          u.target.matches(r.focusableElements) || (n.allowClick = !1),
          void (
            r.isTouched &&
            (Object.assign(s, {
              startX: f,
              startY: m,
              prevX: n.touches.currentX,
              prevY: n.touches.currentY,
              currentX: f,
              currentY: m,
            }),
            (r.touchStartTime = o()))
          )
        );
      if (a.touchReleaseOnEdges && !a.loop)
        if (n.isVertical()) {
          if (
            (m < s.startY && n.translate <= n.maxTranslate()) ||
            (m > s.startY && n.translate >= n.minTranslate())
          )
            return (r.isTouched = !1), void (r.isMoved = !1);
        } else if (
          (f < s.startX && n.translate <= n.maxTranslate()) ||
          (f > s.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        u.target === t.activeElement &&
        u.target.matches(r.focusableElements)
      )
        return (r.isMoved = !0), void (n.allowClick = !1);
      if (
        (r.allowTouchCallbacks && n.emit("touchMove", u),
        u.targetTouches && u.targetTouches.length > 1)
      )
        return;
      (s.currentX = f), (s.currentY = m);
      const h = s.currentX - s.startX,
        g = s.currentY - s.startY;
      if (n.params.threshold && Math.sqrt(h ** 2 + g ** 2) < n.params.threshold)
        return;
      if (void 0 === r.isScrolling) {
        let e;
        (n.isHorizontal() && s.currentY === s.startY) ||
        (n.isVertical() && s.currentX === s.startX)
          ? (r.isScrolling = !1)
          : h * h + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(h))) / Math.PI),
            (r.isScrolling = n.isHorizontal()
              ? e > a.touchAngle
              : 90 - e > a.touchAngle));
      }
      if (
        (r.isScrolling && n.emit("touchMoveOpposite", u),
        void 0 === r.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (r.startMoving = !0)),
        r.isScrolling ||
          (n.zoom &&
            n.params.zoom &&
            n.params.zoom.enabled &&
            r.evCache.length > 1))
      )
        return void (r.isTouched = !1);
      if (!r.startMoving) return;
      (n.allowClick = !1),
        !a.cssMode && u.cancelable && u.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
      let v = n.isHorizontal() ? h : g,
        y = n.isHorizontal()
          ? s.currentX - s.previousX
          : s.currentY - s.previousY;
      a.oneWayMovement &&
        ((v = Math.abs(v) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
        (s.diff = v),
        (v *= a.touchRatio),
        l && ((v = -v), (y = -y));
      const b = n.touchesDirection;
      (n.swipeDirection = v > 0 ? "prev" : "next"),
        (n.touchesDirection = y > 0 ? "prev" : "next");
      const w = n.params.loop && !a.cssMode;
      if (!r.isMoved) {
        if (
          (w && n.loopFix({ direction: n.swipeDirection }),
          (r.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          n.wrapperEl.dispatchEvent(e);
        }
        (r.allowMomentumBounce = !1),
          !a.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", u);
      }
      let x;
      r.isMoved &&
        b !== n.touchesDirection &&
        w &&
        Math.abs(v) >= 1 &&
        (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }),
        (x = !0)),
        n.emit("sliderMove", u),
        (r.isMoved = !0),
        (r.currentTranslate = v + r.startTranslate);
      let T = !0,
        C = a.resistanceRatio;
      if (
        (a.touchReleaseOnEdges && (C = 0),
        v > 0
          ? (w &&
              !x &&
              r.currentTranslate >
                (a.centeredSlides
                  ? n.minTranslate() - n.size / 2
                  : n.minTranslate()) &&
              n.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            r.currentTranslate > n.minTranslate() &&
              ((T = !1),
              a.resistance &&
                (r.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + r.startTranslate + v) ** C)))
          : v < 0 &&
            (w &&
              !x &&
              r.currentTranslate <
                (a.centeredSlides
                  ? n.maxTranslate() + n.size / 2
                  : n.maxTranslate()) &&
              n.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  n.slides.length -
                  ("auto" === a.slidesPerView
                    ? n.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(a.slidesPerView, 10))),
              }),
            r.currentTranslate < n.maxTranslate() &&
              ((T = !1),
              a.resistance &&
                (r.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - r.startTranslate - v) ** C))),
        T && (u.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          r.currentTranslate < r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          r.currentTranslate > r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (r.currentTranslate = r.startTranslate),
        a.threshold > 0)
      ) {
        if (!(Math.abs(v) > a.threshold || r.allowThresholdMove))
          return void (r.currentTranslate = r.startTranslate);
        if (!r.allowThresholdMove)
          return (
            (r.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (r.currentTranslate = r.startTranslate),
            void (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
          );
      }
      a.followFinger &&
        !a.cssMode &&
        (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
          a.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          a.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate));
    }
    function F(e) {
      const t = this,
        n = t.touchEventsData,
        i = n.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && n.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
          ("pointercancel" !== e.type ||
            (!t.browser.isSafari && !t.browser.isWebView)))
      )
        return;
      const {
        params: r,
        touches: a,
        rtlTranslate: l,
        slidesGrid: c,
        enabled: u,
      } = t;
      if (!u) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", d),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      r.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const p = o(),
        f = p - n.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          f < 300 &&
            p - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((n.lastClickTime = o()),
        s(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === a.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let m;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (m = r.followFinger
          ? l
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        r.cssMode)
      )
        return;
      if (t.params.freeMode && r.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: m });
      let h = 0,
        g = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < c.length;
        e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== c[e + t]
          ? m >= c[e] && m < c[e + t] && ((h = e), (g = c[e + t] - c[e]))
          : m >= c[e] && ((h = e), (g = c[c.length - 1] - c[c.length - 2]));
      }
      let v = null,
        y = null;
      r.rewind &&
        (t.isBeginning
          ? (y =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (v = 0));
      const b = (m - c[h]) / g,
        w = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (f > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (b >= r.longSwipesRatio
            ? t.slideTo(r.rewind && t.isEnd ? v : h + w)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (b > 1 - r.longSwipesRatio
              ? t.slideTo(h + w)
              : null !== y && b < 0 && Math.abs(b) > r.longSwipesRatio
              ? t.slideTo(y)
              : t.slideTo(h));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + w),
            "prev" === t.swipeDirection && t.slideTo(null !== y ? y : h))
          : d.target === t.navigation.nextEl
          ? t.slideTo(h + w)
          : t.slideTo(h);
      }
    }
    function H() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: a } = e,
        s = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = s && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !s
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function R(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function B() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (r = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function q(e) {
      const t = this;
      I(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let W = !1;
    function G() {}
    const Y = (e, t) => {
        const n = i(),
          { params: r, el: a, wrapperEl: s, device: o } = e,
          l = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        a[c]("pointerdown", e.onTouchStart, { passive: !1 }),
          n[c]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
          n[c]("pointerup", e.onTouchEnd, { passive: !0 }),
          n[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
          n[c]("pointerout", e.onTouchEnd, { passive: !0 }),
          n[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
          (r.preventClicks || r.preventClicksPropagation) &&
            a[c]("click", e.onClick, !0),
          r.cssMode && s[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[u](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                H,
                !0
              )
            : e[u]("observerUpdate", H, !0),
          a[c]("load", e.onLoad, { capture: !0 });
      },
      X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var V = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function U(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                u(t, n))
              : u(t, n))
          : u(t, n);
      };
    }
    const Z = {
        eventsEmitter: _,
        update: A,
        translate: L,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode ||
              (n.wrapperEl.style.transitionDuration = `${e}ms`),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              O({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                O({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: $,
        loop: z,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = i(),
              { params: n } = e;
            (e.onTouchStart = N.bind(e)),
              (e.onTouchMove = j.bind(e)),
              (e.onTouchEnd = F.bind(e)),
              n.cssMode && (e.onScroll = B.bind(e)),
              (e.onClick = R.bind(e)),
              (e.onLoad = q.bind(e)),
              W || (t.addEventListener("touchstart", G), (W = !0)),
              Y(e, "on");
          },
          detachEvents: function () {
            Y(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: n, params: i, el: r } = e,
              a = i.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const s = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!s || e.currentBreakpoint === s) return;
            const o = (s in a ? a[s] : void 0) || e.originalParams,
              l = X(e, i),
              c = X(e, o),
              d = i.enabled;
            l && !c
              ? (r.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                c &&
                (r.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  r.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const n = i[t] && i[t].enabled,
                  r = o[t] && o[t].enabled;
                n && !r && e[t].disable(), !n && r && e[t].enable();
              });
            const p = o.direction && o.direction !== i.direction,
              f = i.loop && (o.slidesPerView !== i.slidesPerView || p);
            p && n && e.changeDirection(), u(e.params, o);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !m ? e.disable() : !d && m && e.enable(),
              (e.currentBreakpoint = s),
              e.emit("_beforeBreakpoint", o),
              f && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, n) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !n))
            )
              return;
            let i = !1;
            const r = a(),
              s = "window" === t ? r.innerHeight : n.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: s * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: a, value: s } = o[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${s}px)`).matches && (i = a)
                : s <= n.clientWidth && (i = a);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: n, rtl: i, el: r, device: a } = e,
              s = (function (e, t) {
                const n = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && n.push(t + i);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  n.direction,
                  { "free-mode": e.params.freeMode && n.freeMode.enabled },
                  { autoheight: n.autoHeight },
                  { rtl: i },
                  { grid: n.grid && n.grid.rows > 1 },
                  {
                    "grid-column":
                      n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                  },
                  { android: a.android },
                  { ios: a.ios },
                  { "css-mode": n.cssMode },
                  { centered: n.cssMode && n.centeredSlides },
                  { "watch-progress": n.watchSlidesProgress },
                ],
                n.containerModifierClass
              );
            t.push(...s), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      K = {};
    class Q {
      constructor() {
        let e, t;
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        1 === r.length &&
        r[0].constructor &&
        "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
          ? (t = r[0])
          : ([e, t] = r),
          t || (t = {}),
          (t = u({}, t)),
          e && !t.el && (t.el = e);
        const s = i();
        if (
          t.el &&
          "string" == typeof t.el &&
          s.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            s.querySelectorAll(t.el).forEach((n) => {
              const i = u({}, t, { el: n });
              e.push(new Q(i));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = S()),
          (o.device = M({ userAgent: t.userAgent })),
          (o.browser = k()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach((e) => {
          e({
            params: t,
            swiper: o,
            extendParams: U(t, l),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const c = u({}, V, l);
        return (
          (o.params = u({}, c, K, t)),
          (o.originalParams = u({}, o.params)),
          (o.passedParams = u({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: n } = this,
          i = y(m(t, `.${n.slideClass}, swiper-slide`)[0]);
        return y(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = m(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          r = (n.maxTranslate() - i) * e + i;
        n.translateTo(r, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: a,
          size: s,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let n = o + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1)
            (t ? r[e] + a[e] - r[o] < s : r[e] - r[o] < s) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < s && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (n.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && I(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled)
        )
          i(), e.params.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            const t =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides
                : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || i();
        }
        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.el.classList.remove(`${n.params.containerModifierClass}${i}`),
            n.el.classList.add(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let n = e || t.params.el;
        if (("string" == typeof n && (n = document.querySelector(n)), !n))
          return !1;
        (n.swiper = t), n.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r =
          n && n.shadowRoot && n.shadowRoot.querySelector
            ? n.shadowRoot.querySelector(i())
            : m(n, i())[0];
        return (
          !r &&
            t.params.createElements &&
            ((r = h("div", t.params.wrapperClass)),
            n.append(r),
            m(n, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: n,
            wrapperEl: r,
            slidesEl: t.isElement ? n : r,
            mounted: !0,
            rtl: "rtl" === n.dir.toLowerCase() || "rtl" === v(n, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === n.dir.toLowerCase() || "rtl" === v(n, "direction")),
            wrongRTL: "-webkit-box" === v(r, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? I(t, e)
                : e.addEventListener("load", (e) => {
                    I(t, e.target);
                  });
            }),
            D(t),
            (t.initialized = !0),
            D(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, el: r, wrapperEl: a, slides: s } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttribute("style"),
              a.removeAttribute("style"),
              s &&
                s.length &&
                s.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        u(K, e);
      }
      static get extendedDefaults() {
        return K;
      }
      static get defaults() {
        return V;
      }
      static installModule(e) {
        Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
        const t = Q.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => Q.installModule(e)), Q)
          : (Q.installModule(e), Q);
      }
    }
    function J(e, t, n, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!n[r] && !0 === n.auto) {
              let a = m(e.el, `.${i[r]}`)[0];
              a || ((a = h("div", i[r])), (a.className = i[r]), e.el.append(a)),
                (n[r] = a),
                (t[r] = a);
            }
          }),
        n
      );
    }
    function ee(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function te(e) {
      const t = this,
        { params: n, slidesEl: i } = t;
      n.loop && t.loopDestroy();
      const r = (e) => {
        if ("string" == typeof e) {
          const t = document.createElement("div");
          (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
        } else i.append(e);
      };
      if ("object" == typeof e && "length" in e)
        for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]);
      else r(e);
      t.recalcSlides(),
        n.loop && t.loopCreate(),
        (n.observer && !t.isElement) || t.update();
    }
    function ne(e) {
      const t = this,
        { params: n, activeIndex: i, slidesEl: r } = t;
      n.loop && t.loopDestroy();
      let a = i + 1;
      const s = (e) => {
        if ("string" == typeof e) {
          const t = document.createElement("div");
          (t.innerHTML = e), r.prepend(t.children[0]), (t.innerHTML = "");
        } else r.prepend(e);
      };
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && s(e[t]);
        a = i + e.length;
      } else s(e);
      t.recalcSlides(),
        n.loop && t.loopCreate(),
        (n.observer && !t.isElement) || t.update(),
        t.slideTo(a, 0, !1);
    }
    function ie(e, t) {
      const n = this,
        { params: i, activeIndex: r, slidesEl: a } = n;
      let s = r;
      i.loop && ((s -= n.loopedSlides), n.loopDestroy(), n.recalcSlides());
      const o = n.slides.length;
      if (e <= 0) return void n.prependSlide(t);
      if (e >= o) return void n.appendSlide(t);
      let l = s > e ? s + 1 : s;
      const c = [];
      for (let t = o - 1; t >= e; t -= 1) {
        const e = n.slides[t];
        e.remove(), c.unshift(e);
      }
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
        l = s > e ? s + t.length : s;
      } else a.append(t);
      for (let e = 0; e < c.length; e += 1) a.append(c[e]);
      n.recalcSlides(),
        i.loop && n.loopCreate(),
        (i.observer && !n.isElement) || n.update(),
        i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
    }
    function re(e) {
      const t = this,
        { params: n, activeIndex: i } = t;
      let r = i;
      n.loop && ((r -= t.loopedSlides), t.loopDestroy());
      let a,
        s = r;
      if ("object" == typeof e && "length" in e) {
        for (let n = 0; n < e.length; n += 1)
          (a = e[n]), t.slides[a] && t.slides[a].remove(), a < s && (s -= 1);
        s = Math.max(s, 0);
      } else (a = e), t.slides[a] && t.slides[a].remove(), a < s && (s -= 1), (s = Math.max(s, 0));
      t.recalcSlides(),
        n.loop && t.loopCreate(),
        (n.observer && !t.isElement) || t.update(),
        n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
    }
    function ae() {
      const e = this,
        t = [];
      for (let n = 0; n < e.slides.length; n += 1) t.push(n);
      e.removeSlide(t);
    }
    function se(e) {
      const {
        effect: t,
        swiper: n,
        on: i,
        setTranslate: r,
        setTransition: a,
        overwriteParams: s,
        perspective: o,
        recreateShadows: l,
        getEffectParams: c,
      } = e;
      let u;
      i("beforeInit", () => {
        if (n.params.effect !== t) return;
        n.classNames.push(`${n.params.containerModifierClass}${t}`),
          o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
        const e = s ? s() : {};
        Object.assign(n.params, e), Object.assign(n.originalParams, e);
      }),
        i("setTranslate", () => {
          n.params.effect === t && r();
        }),
        i("setTransition", (e, i) => {
          n.params.effect === t && a(i);
        }),
        i("transitionEnd", () => {
          if (n.params.effect === t && l) {
            if (!c || !c().slideShadows) return;
            n.slides.forEach((e) => {
              e.querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              ).forEach((e) => e.remove());
            }),
              l();
          }
        }),
        i("virtualUpdate", () => {
          n.params.effect === t &&
            (n.slides.length || (u = !0),
            requestAnimationFrame(() => {
              u && n.slides && n.slides.length && (r(), (u = !1));
            }));
        });
    }
    function oe(e, t) {
      const n = f(t);
      return (
        n !== t &&
          ((n.style.backfaceVisibility = "hidden"),
          (n.style["-webkit-backface-visibility"] = "hidden")),
        n
      );
    }
    function le(e) {
      let { swiper: t, duration: n, transformElements: i, allSlides: r } = e;
      const { activeIndex: a } = t;
      if (t.params.virtualTranslate && 0 !== n) {
        let e,
          n = !1;
        (e = r
          ? i
          : i.filter((e) => {
              const n = e.classList.contains("swiper-slide-transform")
                ? ((e) =>
                    e.parentElement
                      ? e.parentElement
                      : t.slides.filter(
                          (t) => t.shadowEl && t.shadowEl === e.parentNode
                        )[0])(e)
                : e;
              return t.getSlideIndex(n) === a;
            })),
          e.forEach((e) => {
            w(e, () => {
              if (n) return;
              if (!t || t.destroyed) return;
              (n = !0), (t.animating = !1);
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              t.wrapperEl.dispatchEvent(e);
            });
          });
      }
    }
    function ce(e, t, n) {
      const i = "swiper-slide-shadow" + (n ? `-${n}` : ""),
        r = f(t);
      let a = r.querySelector(`.${i}`);
      return (
        a ||
          ((a = h("div", "swiper-slide-shadow" + (n ? `-${n}` : ""))),
          r.append(a)),
        a
      );
    }
    Object.keys(Z).forEach((e) => {
      Object.keys(Z[e]).forEach((t) => {
        Q.prototype[t] = Z[e][t];
      });
    }),
      Q.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const r = a();
          let s = null,
            o = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            c = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((s = new ResizeObserver((e) => {
                  o = r.requestAnimationFrame(() => {
                    const { width: n, height: i } = t;
                    let r = n,
                      a = i;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: i, target: s } = e;
                      (s && s !== t.el) ||
                        ((r = i ? i.width : (n[0] || n).inlineSize),
                        (a = i ? i.height : (n[0] || n).blockSize));
                    }),
                      (r === n && a === i) || l();
                  });
                })),
                s.observe(t.el))
              : (r.addEventListener("resize", l),
                r.addEventListener("orientationchange", c));
          }),
            n("destroy", () => {
              o && r.cancelAnimationFrame(o),
                s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                r.removeEventListener("resize", l),
                r.removeEventListener("orientationchange", c);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: r } = e;
          const s = [],
            o = a(),
            l = function (e, n) {
              void 0 === n && (n = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const n = function () {
                    r("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(n)
                    : o.setTimeout(n, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === n.attributes || n.attributes,
                childList: void 0 === n.childList || n.childList,
                characterData: void 0 === n.characterData || n.characterData,
              }),
                s.push(i);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = b(t.el);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.el, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const ue = [
      function (e) {
        let t,
          { swiper: n, extendParams: r, on: a, emit: s } = e;
        r({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        });
        const o = i();
        n.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        };
        const l = o.createElement("div");
        function c(e, t) {
          const i = n.params.virtual;
          if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
          let r;
          return (
            i.renderSlide
              ? ((r = i.renderSlide.call(n, e, t)),
                "string" == typeof r &&
                  ((l.innerHTML = r), (r = l.children[0])))
              : (r = n.isElement
                  ? h("swiper-slide")
                  : h("div", n.params.slideClass)),
            r.setAttribute("data-swiper-slide-index", t),
            i.renderSlide || (r.innerHTML = e),
            i.cache && (n.virtual.cache[t] = r),
            r
          );
        }
        function u(e) {
          const {
              slidesPerView: t,
              slidesPerGroup: i,
              centeredSlides: r,
              loop: a,
            } = n.params,
            { addSlidesBefore: o, addSlidesAfter: l } = n.params.virtual,
            { from: u, to: d, slides: p, slidesGrid: f, offset: h } = n.virtual;
          n.params.cssMode || n.updateActiveIndex();
          const g = n.activeIndex || 0;
          let v, y, b;
          (v = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top"),
            r
              ? ((y = Math.floor(t / 2) + i + l),
                (b = Math.floor(t / 2) + i + o))
              : ((y = t + (i - 1) + l), (b = (a ? t : i) + o));
          let w = g - b,
            x = g + y;
          a || ((w = Math.max(w, 0)), (x = Math.min(x, p.length - 1)));
          let T = (n.slidesGrid[w] || 0) - (n.slidesGrid[0] || 0);
          function C() {
            n.updateSlides(),
              n.updateProgress(),
              n.updateSlidesClasses(),
              s("virtualUpdate");
          }
          if (
            (a && g >= b
              ? ((w -= b), r || (T += n.slidesGrid[0]))
              : a && g < b && ((w = -b), r && (T += n.slidesGrid[0])),
            Object.assign(n.virtual, {
              from: w,
              to: x,
              offset: T,
              slidesGrid: n.slidesGrid,
              slidesBefore: b,
              slidesAfter: y,
            }),
            u === w && d === x && !e)
          )
            return (
              n.slidesGrid !== f &&
                T !== h &&
                n.slides.forEach((e) => {
                  e.style[v] = T - Math.abs(n.cssOverflowAdjustment()) + "px";
                }),
              n.updateProgress(),
              void s("virtualUpdate")
            );
          if (n.params.virtual.renderExternal)
            return (
              n.params.virtual.renderExternal.call(n, {
                offset: T,
                from: w,
                to: x,
                slides: (function () {
                  const e = [];
                  for (let t = w; t <= x; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (n.params.virtual.renderExternalUpdate
                ? C()
                : s("virtualUpdate"))
            );
          const E = [],
            S = [],
            M = (e) => {
              let t = e;
              return (
                e < 0 ? (t = p.length + e) : t >= p.length && (t -= p.length), t
              );
            };
          if (e)
            n.slidesEl
              .querySelectorAll(`.${n.params.slideClass}, swiper-slide`)
              .forEach((e) => {
                e.remove();
              });
          else
            for (let e = u; e <= d; e += 1)
              if (e < w || e > x) {
                const t = M(e);
                n.slidesEl
                  .querySelectorAll(
                    `.${n.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                  )
                  .forEach((e) => {
                    e.remove();
                  });
              }
          const k = a ? -p.length : 0,
            _ = a ? 2 * p.length : p.length;
          for (let t = k; t < _; t += 1)
            if (t >= w && t <= x) {
              const n = M(t);
              void 0 === d || e
                ? S.push(n)
                : (t > d && S.push(n), t < u && E.push(n));
            }
          if (
            (S.forEach((e) => {
              n.slidesEl.append(c(p[e], e));
            }),
            a)
          )
            for (let e = E.length - 1; e >= 0; e -= 1) {
              const t = E[e];
              n.slidesEl.prepend(c(p[t], t));
            }
          else
            E.sort((e, t) => t - e),
              E.forEach((e) => {
                n.slidesEl.prepend(c(p[e], e));
              });
          m(n.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
            e.style[v] = T - Math.abs(n.cssOverflowAdjustment()) + "px";
          }),
            C();
        }
        a("beforeInit", () => {
          if (!n.params.virtual.enabled) return;
          let e;
          if (void 0 === n.passedParams.virtual.slides) {
            const t = [...n.slidesEl.children].filter((e) =>
              e.matches(`.${n.params.slideClass}, swiper-slide`)
            );
            t &&
              t.length &&
              ((n.virtual.slides = [...t]),
              (e = !0),
              t.forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t),
                  (n.virtual.cache[t] = e),
                  e.remove();
              }));
          }
          e || (n.virtual.slides = n.params.virtual.slides),
            n.classNames.push(`${n.params.containerModifierClass}virtual`),
            (n.params.watchSlidesProgress = !0),
            (n.originalParams.watchSlidesProgress = !0),
            n.params.initialSlide || u();
        }),
          a("setTranslate", () => {
            n.params.virtual.enabled &&
              (n.params.cssMode && !n._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    u();
                  }, 100)))
                : u());
          }),
          a("init update resize", () => {
            n.params.virtual.enabled &&
              n.params.cssMode &&
              d(n.wrapperEl, "--swiper-virtual-size", `${n.virtualSize}px`);
          }),
          Object.assign(n.virtual, {
            appendSlide: function (e) {
              if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                  e[t] && n.virtual.slides.push(e[t]);
              else n.virtual.slides.push(e);
              u(!0);
            },
            prependSlide: function (e) {
              const t = n.activeIndex;
              let i = t + 1,
                r = 1;
              if (Array.isArray(e)) {
                for (let t = 0; t < e.length; t += 1)
                  e[t] && n.virtual.slides.unshift(e[t]);
                (i = t + e.length), (r = e.length);
              } else n.virtual.slides.unshift(e);
              if (n.params.virtual.cache) {
                const e = n.virtual.cache,
                  t = {};
                Object.keys(e).forEach((n) => {
                  const i = e[n],
                    a = i.getAttribute("data-swiper-slide-index");
                  a &&
                    i.setAttribute(
                      "data-swiper-slide-index",
                      parseInt(a, 10) + r
                    ),
                    (t[parseInt(n, 10) + r] = i);
                }),
                  (n.virtual.cache = t);
              }
              u(!0), n.slideTo(i, 0);
            },
            removeSlide: function (e) {
              if (null == e) return;
              let t = n.activeIndex;
              if (Array.isArray(e))
                for (let i = e.length - 1; i >= 0; i -= 1)
                  n.virtual.slides.splice(e[i], 1),
                    n.params.virtual.cache && delete n.virtual.cache[e[i]],
                    e[i] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                n.virtual.slides.splice(e, 1),
                  n.params.virtual.cache && delete n.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              u(!0), n.slideTo(t, 0);
            },
            removeAllSlides: function () {
              (n.virtual.slides = []),
                n.params.virtual.cache && (n.virtual.cache = {}),
                u(!0),
                n.slideTo(0, 0);
            },
            update: u,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r, emit: s } = e;
        const o = i(),
          l = a();
        function c(e) {
          if (!t.enabled) return;
          const { rtlTranslate: n } = t;
          let i = e;
          i.originalEvent && (i = i.originalEvent);
          const r = i.keyCode || i.charCode,
            a = t.params.keyboard.pageUpDown,
            c = a && 33 === r,
            u = a && 34 === r,
            d = 37 === r,
            p = 39 === r,
            f = 38 === r,
            m = 40 === r;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && p) || (t.isVertical() && m) || u)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && d) || (t.isVertical() && f) || c)
          )
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ("input" === o.activeElement.nodeName.toLowerCase() ||
                  "textarea" === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (c || u || d || p || f || m)
            ) {
              let e = !1;
              if (
                b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
                0 === b(t.el, `.${t.params.slideActiveClass}`).length
              )
                return;
              const i = t.el,
                r = i.clientWidth,
                a = i.clientHeight,
                s = l.innerWidth,
                o = l.innerHeight,
                c = g(i);
              n && (c.left -= i.scrollLeft);
              const u = [
                [c.left, c.top],
                [c.left + r, c.top],
                [c.left, c.top + a],
                [c.left + r, c.top + a],
              ];
              for (let t = 0; t < u.length; t += 1) {
                const n = u[t];
                if (n[0] >= 0 && n[0] <= s && n[1] >= 0 && n[1] <= o) {
                  if (0 === n[0] && 0 === n[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((c || u || d || p) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (((u || p) && !n) || ((c || d) && n)) && t.slideNext(),
                (((c || d) && !n) || ((u || p) && n)) && t.slidePrev())
              : ((c || u || f || m) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (u || m) && t.slideNext(),
                (c || f) && t.slidePrev()),
              s("keyPress", r);
          }
        }
        function u() {
          t.keyboard.enabled ||
            (o.addEventListener("keydown", c), (t.keyboard.enabled = !0));
        }
        function d() {
          t.keyboard.enabled &&
            (o.removeEventListener("keydown", c), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          r("init", () => {
            t.params.keyboard.enabled && u();
          }),
          r("destroy", () => {
            t.keyboard.enabled && d();
          }),
          Object.assign(t.keyboard, { enable: u, disable: d });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const l = a();
        let c;
        n({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel",
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let u,
          d = o();
        const p = [];
        function f() {
          t.enabled && (t.mouseEntered = !0);
        }
        function m() {
          t.enabled && (t.mouseEntered = !1);
        }
        function h(e) {
          return !(
            (t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta) ||
            (t.params.mousewheel.thresholdTime &&
              o() - d < t.params.mousewheel.thresholdTime) ||
            (!(e.delta >= 6 && o() - d < 60) &&
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), r("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), r("scroll", e.raw)),
              (d = new l.Date().getTime()),
              1))
          );
        }
        function g(e) {
          let n = e,
            i = !0;
          if (!t.enabled) return;
          if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
            return;
          const a = t.params.mousewheel;
          t.params.cssMode && n.preventDefault();
          let l = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (l = document.querySelector(t.params.mousewheel.eventsTarget));
          const d = l && l.contains(n.target);
          if (!t.mouseEntered && !d && !a.releaseOnEdges) return !0;
          n.originalEvent && (n = n.originalEvent);
          let f = 0;
          const m = t.rtlTranslate ? -1 : 1,
            g = (function (e) {
              let t = 0,
                n = 0,
                i = 0,
                r = 0;
              return (
                "detail" in e && (n = e.detail),
                "wheelDelta" in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = n), (n = 0)),
                (i = 10 * t),
                (r = 10 * n),
                "deltaY" in e && (r = e.deltaY),
                "deltaX" in e && (i = e.deltaX),
                e.shiftKey && !i && ((i = r), (r = 0)),
                (i || r) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((i *= 40), (r *= 40))
                    : ((i *= 800), (r *= 800))),
                i && !t && (t = i < 1 ? -1 : 1),
                r && !n && (n = r < 1 ? -1 : 1),
                { spinX: t, spinY: n, pixelX: i, pixelY: r }
              );
            })(n);
          if (a.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
              f = -g.pixelX * m;
            } else {
              if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
              f = -g.pixelY;
            }
          else
            f =
              Math.abs(g.pixelX) > Math.abs(g.pixelY)
                ? -g.pixelX * m
                : -g.pixelY;
          if (0 === f) return !0;
          a.invert && (f = -f);
          let v = t.getTranslate() + f * a.sensitivity;
          if (
            (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (i =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            i && t.params.nested && n.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: o(),
                delta: Math.abs(f),
                direction: Math.sign(f),
              },
              i =
                u &&
                e.time < u.time + 500 &&
                e.delta <= u.delta &&
                e.direction === u.direction;
            if (!i) {
              u = void 0;
              let o = t.getTranslate() + f * a.sensitivity;
              const l = t.isBeginning,
                d = t.isEnd;
              if (
                (o >= t.minTranslate() && (o = t.minTranslate()),
                o <= t.maxTranslate() && (o = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(o),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!l && t.isBeginning) || (!d && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.loop &&
                  t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0,
                  }),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(c), (c = void 0), p.length >= 15 && p.shift();
                const n = p.length ? p[p.length - 1] : void 0,
                  i = p[0];
                if (
                  (p.push(e),
                  n && (e.delta > n.delta || e.direction !== n.direction))
                )
                  p.splice(0);
                else if (
                  p.length >= 15 &&
                  e.time - i.time < 500 &&
                  i.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const n = f > 0 ? 0.8 : 0.2;
                  (u = e),
                    p.splice(0),
                    (c = s(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, n);
                    }, 0));
                }
                c ||
                  (c = s(() => {
                    (u = e),
                      p.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (i || r("scroll", n),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                o === t.minTranslate() || o === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const n = {
              time: o(),
              delta: Math.abs(f),
              direction: Math.sign(f),
              raw: e,
            };
            p.length >= 2 && p.shift();
            const i = p.length ? p[p.length - 1] : void 0;
            if (
              (p.push(n),
              i
                ? (n.direction !== i.direction ||
                    n.delta > i.delta ||
                    n.time > i.time + 150) &&
                  h(n)
                : h(n),
              (function (e) {
                const n = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                  return !0;
                return !1;
              })(n))
            )
              return !0;
          }
          return (
            n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
          );
        }
        function v(e) {
          let n = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (n = document.querySelector(t.params.mousewheel.eventsTarget)),
            n[e]("mouseenter", f),
            n[e]("mouseleave", m),
            n[e]("wheel", g);
        }
        function y() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", g), !0)
            : !t.mousewheel.enabled &&
                (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
        }
        function b() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, g), !0)
            : !!t.mousewheel.enabled &&
                (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
        }
        i("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && b(),
            t.params.mousewheel.enabled && y();
        }),
          i("destroy", () => {
            t.params.cssMode && y(), t.mousewheel.enabled && b();
          }),
          Object.assign(t.mousewheel, { enable: y, disable: b });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null });
        const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function s(e) {
          let n;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            ((n = t.el.shadowRoot.querySelector(e)), n)
            ? n
            : (e &&
                ("string" == typeof e &&
                  (n = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                  "string" == typeof e &&
                  n.length > 1 &&
                  1 === t.el.querySelectorAll(e).length &&
                  (n = t.el.querySelector(e))),
              e && !n ? e : n);
        }
        function o(e, n) {
          const i = t.params.navigation;
          (e = a(e)).forEach((e) => {
            e &&
              (e.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = n),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
          });
        }
        function l() {
          const { nextEl: e, prevEl: n } = t.navigation;
          if (t.params.loop) return o(n, !1), void o(e, !1);
          o(n, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function c(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), r("navigationPrev"));
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), r("navigationNext"));
        }
        function d() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = J(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          let n = s(e.nextEl),
            i = s(e.prevEl);
          Object.assign(t.navigation, { nextEl: n, prevEl: i }),
            (n = a(n)),
            (i = a(i));
          const r = (n, i) => {
            n && n.addEventListener("click", "next" === i ? u : c),
              !t.enabled && n && n.classList.add(...e.lockClass.split(" "));
          };
          n.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
        }
        function p() {
          let { nextEl: e, prevEl: n } = t.navigation;
          (e = a(e)), (n = a(n));
          const i = (e, n) => {
            e.removeEventListener("click", "next" === n ? u : c),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => i(e, "next")), n.forEach((e) => i(e, "prev"));
        }
        i("init", () => {
          !1 === t.params.navigation.enabled ? f() : (d(), l());
        }),
          i("toEdge fromEdge lock unlock", () => {
            l();
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            let { nextEl: e, prevEl: n } = t.navigation;
            (e = a(e)),
              (n = a(n)),
              [...e, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList[t.enabled ? "remove" : "add"](
                    t.params.navigation.lockClass
                  )
                );
          }),
          i("click", (e, n) => {
            let { nextEl: i, prevEl: s } = t.navigation;
            (i = a(i)), (s = a(s));
            const o = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !s.includes(o) &&
              !i.includes(o)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              i.length
                ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
                : s.length &&
                  (e = s[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                [...i, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        const f = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            p();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              d(),
              l();
          },
          disable: f,
          update: l,
          init: d,
          destroy: p,
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const a = "swiper-pagination";
        let s;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${a}-bullet`,
            bulletActiveClass: `${a}-bullet-active`,
            modifierClass: `${a}-`,
            currentClass: `${a}-current`,
            totalClass: `${a}-total`,
            hiddenClass: `${a}-hidden`,
            progressbarFillClass: `${a}-progressbar-fill`,
            progressbarOppositeClass: `${a}-progressbar-opposite`,
            clickableClass: `${a}-clickable`,
            lockClass: `${a}-lock`,
            horizontalClass: `${a}-horizontal`,
            verticalClass: `${a}-vertical`,
            paginationDisabledClass: `${a}-disabled`,
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function c() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, n) {
          const { bulletActiveClass: i } = t.params.pagination;
          e &&
            (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
            (e.classList.add(`${i}-${n}`),
            (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
              e.classList.add(`${i}-${n}-${n}`));
        }
        function d(e) {
          const n = e.target.closest(ee(t.params.pagination.bulletClass));
          if (!n) return;
          e.preventDefault();
          const i = y(n) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            const e = t.getSlideIndexByData(i),
              n = t.getSlideIndexByData(t.realIndex);
            e > t.slides.length - t.loopedSlides &&
              t.loopFix({
                direction: e > n ? "next" : "prev",
                activeSlideIndex: e,
                slideTo: !1,
              }),
              t.slideToLoop(i);
          } else t.slideTo(i);
        }
        function p() {
          const e = t.rtl,
            n = t.params.pagination;
          if (c()) return;
          let i,
            a,
            d = t.pagination.el;
          d = l(d);
          const p =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            f = t.params.loop
              ? Math.ceil(p / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((a = t.previousRealIndex || 0),
                (i =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : void 0 !== t.snapIndex
              ? ((i = t.snapIndex), (a = t.previousSnapIndex))
              : ((a = t.previousIndex || 0), (i = t.activeIndex || 0)),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const r = t.pagination.bullets;
            let l, c, p;
            if (
              (n.dynamicBullets &&
                ((s = x(r[0], t.isHorizontal() ? "width" : "height", !0)),
                d.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] =
                    s * (n.dynamicMainBullets + 4) + "px";
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== a &&
                  ((o += i - (a || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (l = Math.max(i - o, 0)),
                (c = l + (Math.min(r.length, n.dynamicMainBullets) - 1)),
                (p = (c + l) / 2)),
              r.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${n.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              r.forEach((e) => {
                const t = y(e);
                t === i && e.classList.add(...n.bulletActiveClass.split(" ")),
                  n.dynamicBullets &&
                    (t >= l &&
                      t <= c &&
                      e.classList.add(
                        ...`${n.bulletActiveClass}-main`.split(" ")
                      ),
                    t === l && u(e, "prev"),
                    t === c && u(e, "next"));
              });
            else {
              const e = r[i];
              if (
                (e && e.classList.add(...n.bulletActiveClass.split(" ")),
                n.dynamicBullets)
              ) {
                const e = r[l],
                  t = r[c];
                for (let e = l; e <= c; e += 1)
                  r[e] &&
                    r[e].classList.add(
                      ...`${n.bulletActiveClass}-main`.split(" ")
                    );
                u(e, "prev"), u(t, "next");
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(r.length, n.dynamicMainBullets + 4),
                a = (s * i - s) / 2 - p * s,
                o = e ? "right" : "left";
              r.forEach((e) => {
                e.style[t.isHorizontal() ? o : "top"] = `${a}px`;
              });
            }
          }
          d.forEach((e, a) => {
            if (
              ("fraction" === n.type &&
                (e.querySelectorAll(ee(n.currentClass)).forEach((e) => {
                  e.textContent = n.formatFractionCurrent(i + 1);
                }),
                e.querySelectorAll(ee(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(f);
                })),
              "progressbar" === n.type)
            ) {
              let r;
              r = n.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const a = (i + 1) / f;
              let s = 1,
                o = 1;
              "horizontal" === r ? (s = a) : (o = a),
                e.querySelectorAll(ee(n.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${o})`),
                    (e.style.transitionDuration = `${t.params.speed}ms`);
                });
            }
            "custom" === n.type && n.renderCustom
              ? ((e.innerHTML = n.renderCustom(t, i + 1, f)),
                0 === a && r("paginationRender", e))
              : (0 === a && r("paginationRender", e), r("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](n.lockClass);
          });
        }
        function f() {
          const e = t.params.pagination;
          if (c()) return;
          const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length;
          let i = t.pagination.el;
          i = l(i);
          let a = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil(n / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > n && (i = n);
            for (let n = 0; n < i; n += 1)
              e.renderBullet
                ? (a += e.renderBullet.call(t, n, e.bulletClass))
                : (a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          "fraction" === e.type &&
            (a = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type &&
              (a = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (t.pagination.bullets = []),
            i.forEach((n) => {
              "custom" !== e.type && (n.innerHTML = a || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(
                    ...n.querySelectorAll(ee(e.bulletClass))
                  );
            }),
            "custom" !== e.type && r("paginationRender", i[0]);
        }
        function m() {
          t.params.pagination = J(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n;
          "string" == typeof e.el &&
            t.isElement &&
            (n = t.el.shadowRoot.querySelector(e.el)),
            n ||
              "string" != typeof e.el ||
              (n = [...document.querySelectorAll(e.el)]),
            n || (n = e.el),
            n &&
              0 !== n.length &&
              (t.params.uniqueNavElements &&
                "string" == typeof e.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...t.el.querySelectorAll(e.el)]),
                n.length > 1 &&
                  (n = n.filter((e) => b(e, ".swiper")[0] === t.el)[0])),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(t.pagination, { el: n }),
              (n = l(n)),
              n.forEach((n) => {
                "bullets" === e.type &&
                  e.clickable &&
                  n.classList.add(e.clickableClass),
                  n.classList.add(e.modifierClass + e.type),
                  n.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass
                  ),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (n.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    n.classList.add(e.progressbarOppositeClass),
                  e.clickable && n.addEventListener("click", d),
                  t.enabled || n.classList.add(e.lockClass);
              }));
        }
        function h() {
          const e = t.params.pagination;
          if (c()) return;
          let n = t.pagination.el;
          n &&
            ((n = l(n)),
            n.forEach((n) => {
              n.classList.remove(e.hiddenClass),
                n.classList.remove(e.modifierClass + e.type),
                n.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable && n.removeEventListener("click", d);
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        i("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: n } = t.pagination;
          (n = l(n)),
            n.forEach((n) => {
              n.classList.remove(e.horizontalClass, e.verticalClass),
                n.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
          i("init", () => {
            !1 === t.params.pagination.enabled ? g() : (m(), f(), p());
          }),
          i("activeIndexChange", () => {
            void 0 === t.snapIndex && p();
          }),
          i("snapIndexChange", () => {
            p();
          }),
          i("snapGridLengthChange", () => {
            f(), p();
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              ((e = l(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
          }),
          i("lock unlock", () => {
            p();
          }),
          i("click", (e, n) => {
            const i = n.target;
            let { el: a } = t.pagination;
            if (
              (Array.isArray(a) || (a = [a].filter((e) => !!e)),
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                a &&
                a.length > 0 &&
                !i.classList.contains(t.params.pagination.bulletClass))
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = a[0].classList.contains(
                t.params.pagination.hiddenClass
              );
              r(!0 === e ? "paginationShow" : "paginationHide"),
                a.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass)
                );
            }
          });
        const g = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
            h();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = l(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
              m(),
              f(),
              p();
          },
          disable: g,
          render: f,
          update: p,
          init: m,
          destroy: h,
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const o = i();
        let l,
          c,
          u,
          d,
          p = !1,
          f = null,
          m = null;
        function v() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: n } = t,
            { dragEl: i, el: r } = e,
            a = t.params.scrollbar,
            s = t.params.loop ? t.progressLoop : t.progress;
          let o = c,
            l = (u - c) * s;
          n
            ? ((l = -l),
              l > 0 ? ((o = c - l), (l = 0)) : -l + c > u && (o = u + l))
            : l < 0
            ? ((o = c + l), (l = 0))
            : l + c > u && (o = u - l),
            t.isHorizontal()
              ? ((i.style.transform = `translate3d(${l}px, 0, 0)`),
                (i.style.width = `${o}px`))
              : ((i.style.transform = `translate3d(0px, ${l}px, 0)`),
                (i.style.height = `${o}px`)),
            a.hide &&
              (clearTimeout(f),
              (r.style.opacity = 1),
              (f = setTimeout(() => {
                (r.style.opacity = 0), (r.style.transitionDuration = "400ms");
              }, 1e3)));
        }
        function y() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { dragEl: n, el: i } = e;
          (n.style.width = ""),
            (n.style.height = ""),
            (u = t.isHorizontal() ? i.offsetWidth : i.offsetHeight),
            (d =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (c =
              "auto" === t.params.scrollbar.dragSize
                ? u * d
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (n.style.width = `${c}px`)
              : (n.style.height = `${c}px`),
            (i.style.display = d >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (i.style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.el.classList[t.isLocked ? "add" : "remove"](
                t.params.scrollbar.lockClass
              );
        }
        function b(e) {
          return t.isHorizontal() ? e.clientX : e.clientY;
        }
        function w(e) {
          const { scrollbar: n, rtlTranslate: i } = t,
            { el: r } = n;
          let a;
          (a =
            (b(e) -
              g(r)[t.isHorizontal() ? "left" : "top"] -
              (null !== l ? l : c / 2)) /
            (u - c)),
            (a = Math.max(Math.min(a, 1), 0)),
            i && (a = 1 - a);
          const s =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
          t.updateProgress(s),
            t.setTranslate(s),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function x(e) {
          const n = t.params.scrollbar,
            { scrollbar: i, wrapperEl: r } = t,
            { el: s, dragEl: o } = i;
          (p = !0),
            (l =
              e.target === o
                ? b(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            (r.style.transitionDuration = "100ms"),
            (o.style.transitionDuration = "100ms"),
            w(e),
            clearTimeout(m),
            (s.style.transitionDuration = "0ms"),
            n.hide && (s.style.opacity = 1),
            t.params.cssMode &&
              (t.wrapperEl.style["scroll-snap-type"] = "none"),
            a("scrollbarDragStart", e);
        }
        function T(e) {
          const { scrollbar: n, wrapperEl: i } = t,
            { el: r, dragEl: s } = n;
          p &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            w(e),
            (i.style.transitionDuration = "0ms"),
            (r.style.transitionDuration = "0ms"),
            (s.style.transitionDuration = "0ms"),
            a("scrollbarDragMove", e));
        }
        function C(e) {
          const n = t.params.scrollbar,
            { scrollbar: i, wrapperEl: r } = t,
            { el: o } = i;
          p &&
            ((p = !1),
            t.params.cssMode &&
              ((t.wrapperEl.style["scroll-snap-type"] = ""),
              (r.style.transitionDuration = "")),
            n.hide &&
              (clearTimeout(m),
              (m = s(() => {
                (o.style.opacity = 0), (o.style.transitionDuration = "400ms");
              }, 1e3))),
            a("scrollbarDragEnd", e),
            n.snapOnRelease && t.slideToClosest());
        }
        function E(e) {
          const { scrollbar: n, params: i } = t,
            r = n.el;
          if (!r) return;
          const a = r,
            s = !!i.passiveListeners && { passive: !1, capture: !1 },
            l = !!i.passiveListeners && { passive: !0, capture: !1 };
          if (!a) return;
          const c = "on" === e ? "addEventListener" : "removeEventListener";
          a[c]("pointerdown", x, s),
            o[c]("pointermove", T, s),
            o[c]("pointerup", C, l);
        }
        function S() {
          const { scrollbar: e, el: n } = t;
          t.params.scrollbar = J(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const i = t.params.scrollbar;
          if (!i.el) return;
          let r, a;
          "string" == typeof i.el &&
            t.isElement &&
            (r = t.el.shadowRoot.querySelector(i.el)),
            r || "string" != typeof i.el
              ? r || (r = i.el)
              : (r = o.querySelectorAll(i.el)),
            t.params.uniqueNavElements &&
              "string" == typeof i.el &&
              r.length > 1 &&
              1 === n.querySelectorAll(i.el).length &&
              (r = n.querySelector(i.el)),
            r.length > 0 && (r = r[0]),
            r.classList.add(
              t.isHorizontal() ? i.horizontalClass : i.verticalClass
            ),
            r &&
              ((a = r.querySelector(`.${t.params.scrollbar.dragClass}`)),
              a || ((a = h("div", t.params.scrollbar.dragClass)), r.append(a))),
            Object.assign(e, { el: r, dragEl: a }),
            i.draggable && t.params.scrollbar.el && t.scrollbar.el && E("on"),
            r &&
              r.classList[t.enabled ? "remove" : "add"](
                t.params.scrollbar.lockClass
              );
        }
        function M() {
          const e = t.params.scrollbar,
            n = t.scrollbar.el;
          n &&
            n.classList.remove(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.params.scrollbar.el && t.scrollbar.el && E("off");
        }
        n({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null }),
          r("init", () => {
            !1 === t.params.scrollbar.enabled ? k() : (S(), y(), v());
          }),
          r("update resize observerUpdate lock unlock", () => {
            y();
          }),
          r("setTranslate", () => {
            v();
          }),
          r("setTransition", (e, n) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
            })(n);
          }),
          r("enable disable", () => {
            const { el: e } = t.scrollbar;
            e &&
              e.classList[t.enabled ? "remove" : "add"](
                t.params.scrollbar.lockClass
              );
          }),
          r("destroy", () => {
            M();
          });
        const k = () => {
          t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.el &&
              t.scrollbar.el.classList.add(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            M();
        };
        Object.assign(t.scrollbar, {
          enable: () => {
            t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.el &&
                t.scrollbar.el.classList.remove(
                  t.params.scrollbar.scrollbarDisabledClass
                ),
              S(),
              y(),
              v();
          },
          disable: k,
          updateSize: y,
          setTranslate: v,
          init: S,
          destroy: M,
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({ parallax: { enabled: !1 } });
        const r = (e, n) => {
            const { rtl: i } = t,
              r = i ? -1 : 1,
              a = e.getAttribute("data-swiper-parallax") || "0";
            let s = e.getAttribute("data-swiper-parallax-x"),
              o = e.getAttribute("data-swiper-parallax-y");
            const l = e.getAttribute("data-swiper-parallax-scale"),
              c = e.getAttribute("data-swiper-parallax-opacity"),
              u = e.getAttribute("data-swiper-parallax-rotate");
            if (
              (s || o
                ? ((s = s || "0"), (o = o || "0"))
                : t.isHorizontal()
                ? ((s = a), (o = "0"))
                : ((o = a), (s = "0")),
              (s =
                s.indexOf("%") >= 0
                  ? parseInt(s, 10) * n * r + "%"
                  : s * n * r + "px"),
              (o =
                o.indexOf("%") >= 0 ? parseInt(o, 10) * n + "%" : o * n + "px"),
              null != c)
            ) {
              const t = c - (c - 1) * (1 - Math.abs(n));
              e.style.opacity = t;
            }
            let d = `translate3d(${s}, ${o}, 0px)`;
            null != l && (d += ` scale(${l - (l - 1) * (1 - Math.abs(n))})`),
              u && null != u && (d += ` rotate(${u * n * -1}deg)`),
              (e.style.transform = d);
          },
          a = () => {
            const { el: e, slides: n, progress: i, snapGrid: a } = t;
            m(
              e,
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            ).forEach((e) => {
              r(e, i);
            }),
              n.forEach((e, n) => {
                let s = e.progress;
                t.params.slidesPerGroup > 1 &&
                  "auto" !== t.params.slidesPerView &&
                  (s += Math.ceil(n / 2) - i * (a.length - 1)),
                  (s = Math.min(Math.max(s, -1), 1)),
                  e
                    .querySelectorAll(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                    )
                    .forEach((e) => {
                      r(e, s);
                    });
              });
          };
        i("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          i("init", () => {
            t.params.parallax.enabled && a();
          }),
          i("setTranslate", () => {
            t.params.parallax.enabled && a();
          }),
          i("setTransition", (e, n) => {
            t.params.parallax.enabled &&
              (function (e) {
                void 0 === e && (e = t.params.speed);
                const { el: n } = t;
                n.querySelectorAll(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).forEach((t) => {
                  let n =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || e;
                  0 === e && (n = 0), (t.style.transitionDuration = `${n}ms`);
                });
              })(n);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const s = a();
        n({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (t.zoom = { enabled: !1 });
        let o,
          c,
          u = 1,
          d = !1;
        const p = [],
          f = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3,
          },
          h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          v = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let y = 1;
        function w() {
          if (p.length < 2) return 1;
          const e = p[0].pageX,
            t = p[0].pageY,
            n = p[1].pageX,
            i = p[1].pageY;
          return Math.sqrt((n - e) ** 2 + (i - t) ** 2);
        }
        function x(e) {
          const n = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
          return (
            !!e.target.matches(n) ||
            t.slides.filter((t) => t.contains(e.target)).length > 0
          );
        }
        function T(e) {
          if (("mouse" === e.pointerType && p.splice(0, p.length), !x(e)))
            return;
          const n = t.params.zoom;
          if (((o = !1), (c = !1), p.push(e), !(p.length < 2))) {
            if (((o = !0), (f.scaleStart = w()), !f.slideEl)) {
              (f.slideEl = e.target.closest(
                `.${t.params.slideClass}, swiper-slide`
              )),
                f.slideEl || (f.slideEl = t.slides[t.activeIndex]);
              let i = f.slideEl.querySelector(`.${n.containerClass}`);
              if (
                (i &&
                  (i = i.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                (f.imageEl = i),
                (f.imageWrapEl = i
                  ? b(f.imageEl, `.${n.containerClass}`)[0]
                  : void 0),
                !f.imageWrapEl)
              )
                return void (f.imageEl = void 0);
              f.maxRatio =
                f.imageWrapEl.getAttribute("data-swiper-zoom") || n.maxRatio;
            }
            if (f.imageEl) {
              const [e, t] = (function () {
                if (p.length < 2) return { x: null, y: null };
                const e = f.imageEl.getBoundingClientRect();
                return [
                  (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x) / u,
                  (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y) / u,
                ];
              })();
              (f.originX = e),
                (f.originY = t),
                (f.imageEl.style.transitionDuration = "0ms");
            }
            d = !0;
          }
        }
        function C(e) {
          if (!x(e)) return;
          const n = t.params.zoom,
            i = t.zoom,
            r = p.findIndex((t) => t.pointerId === e.pointerId);
          r >= 0 && (p[r] = e),
            p.length < 2 ||
              ((c = !0),
              (f.scaleMove = w()),
              f.imageEl &&
                ((i.scale = (f.scaleMove / f.scaleStart) * u),
                i.scale > f.maxRatio &&
                  (i.scale =
                    f.maxRatio - 1 + (i.scale - f.maxRatio + 1) ** 0.5),
                i.scale < n.minRatio &&
                  (i.scale =
                    n.minRatio + 1 - (n.minRatio - i.scale + 1) ** 0.5),
                (f.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
        }
        function E(e) {
          if (!x(e)) return;
          if ("mouse" === e.pointerType && "pointerout" === e.type) return;
          const n = t.params.zoom,
            i = t.zoom,
            r = p.findIndex((t) => t.pointerId === e.pointerId);
          r >= 0 && p.splice(r, 1),
            o &&
              c &&
              ((o = !1),
              (c = !1),
              f.imageEl &&
                ((i.scale = Math.max(
                  Math.min(i.scale, f.maxRatio),
                  n.minRatio
                )),
                (f.imageEl.style.transitionDuration = `${t.params.speed}ms`),
                (f.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                (u = i.scale),
                (d = !1),
                i.scale > 1 && f.slideEl
                  ? f.slideEl.classList.add(`${n.zoomedSlideClass}`)
                  : i.scale <= 1 &&
                    f.slideEl &&
                    f.slideEl.classList.remove(`${n.zoomedSlideClass}`),
                1 === i.scale &&
                  ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
        }
        function S(e) {
          if (
            !x(e) ||
            !(function (e) {
              const n = `.${t.params.zoom.containerClass}`;
              return (
                !!e.target.matches(n) ||
                [...t.el.querySelectorAll(n)].filter((t) =>
                  t.contains(e.target)
                ).length > 0
              );
            })(e)
          )
            return;
          const n = t.zoom;
          if (!f.imageEl) return;
          if (!h.isTouched || !f.slideEl) return;
          h.isMoved ||
            ((h.width = f.imageEl.offsetWidth),
            (h.height = f.imageEl.offsetHeight),
            (h.startX = l(f.imageWrapEl, "x") || 0),
            (h.startY = l(f.imageWrapEl, "y") || 0),
            (f.slideWidth = f.slideEl.offsetWidth),
            (f.slideHeight = f.slideEl.offsetHeight),
            (f.imageWrapEl.style.transitionDuration = "0ms"));
          const i = h.width * n.scale,
            r = h.height * n.scale;
          if (i < f.slideWidth && r < f.slideHeight) return;
          if (
            ((h.minX = Math.min(f.slideWidth / 2 - i / 2, 0)),
            (h.maxX = -h.minX),
            (h.minY = Math.min(f.slideHeight / 2 - r / 2, 0)),
            (h.maxY = -h.minY),
            (h.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX),
            (h.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY),
            Math.max(
              Math.abs(h.touchesCurrent.x - h.touchesStart.x),
              Math.abs(h.touchesCurrent.y - h.touchesStart.y)
            ) > 5 && (t.allowClick = !1),
            !h.isMoved && !d)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(h.minX) === Math.floor(h.startX) &&
                h.touchesCurrent.x < h.touchesStart.x) ||
                (Math.floor(h.maxX) === Math.floor(h.startX) &&
                  h.touchesCurrent.x > h.touchesStart.x))
            )
              return void (h.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(h.minY) === Math.floor(h.startY) &&
                h.touchesCurrent.y < h.touchesStart.y) ||
                (Math.floor(h.maxY) === Math.floor(h.startY) &&
                  h.touchesCurrent.y > h.touchesStart.y))
            )
              return void (h.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (h.isMoved = !0);
          const a = (n.scale - u) / (f.maxRatio - t.params.zoom.minRatio),
            { originX: s, originY: o } = f;
          (h.currentX =
            h.touchesCurrent.x -
            h.touchesStart.x +
            h.startX +
            a * (h.width - 2 * s)),
            (h.currentY =
              h.touchesCurrent.y -
              h.touchesStart.y +
              h.startY +
              a * (h.height - 2 * o)),
            h.currentX < h.minX &&
              (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
            h.currentX > h.maxX &&
              (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
            h.currentY < h.minY &&
              (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
            h.currentY > h.maxY &&
              (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
            v.prevPositionX || (v.prevPositionX = h.touchesCurrent.x),
            v.prevPositionY || (v.prevPositionY = h.touchesCurrent.y),
            v.prevTime || (v.prevTime = Date.now()),
            (v.x =
              (h.touchesCurrent.x - v.prevPositionX) /
              (Date.now() - v.prevTime) /
              2),
            (v.y =
              (h.touchesCurrent.y - v.prevPositionY) /
              (Date.now() - v.prevTime) /
              2),
            Math.abs(h.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
            Math.abs(h.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
            (v.prevPositionX = h.touchesCurrent.x),
            (v.prevPositionY = h.touchesCurrent.y),
            (v.prevTime = Date.now()),
            (f.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
        }
        function M() {
          const e = t.zoom;
          f.slideEl &&
            t.activeIndex !== t.slides.indexOf(f.slideEl) &&
            (f.imageEl &&
              (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            f.imageWrapEl &&
              (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            f.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            (e.scale = 1),
            (u = 1),
            (f.slideEl = void 0),
            (f.imageEl = void 0),
            (f.imageWrapEl = void 0),
            (f.originX = 0),
            (f.originY = 0));
        }
        function k(e) {
          const n = t.zoom,
            i = t.params.zoom;
          if (!f.slideEl) {
            e &&
              e.target &&
              (f.slideEl = e.target.closest(
                `.${t.params.slideClass}, swiper-slide`
              )),
              f.slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (f.slideEl = m(
                      t.slidesEl,
                      `.${t.params.slideActiveClass}`
                    )[0])
                  : (f.slideEl = t.slides[t.activeIndex]));
            let n = f.slideEl.querySelector(`.${i.containerClass}`);
            n &&
              (n = n.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
              (f.imageEl = n),
              (f.imageWrapEl = n
                ? b(f.imageEl, `.${i.containerClass}`)[0]
                : void 0);
          }
          if (!f.imageEl || !f.imageWrapEl) return;
          let r, a, o, l, c, d, p, v, y, w, x, T, C, E, S, M, k, _;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            f.slideEl.classList.add(`${i.zoomedSlideClass}`),
            void 0 === h.touchesStart.x && e
              ? ((r = e.pageX), (a = e.pageY))
              : ((r = h.touchesStart.x), (a = h.touchesStart.y));
          const I = "number" == typeof e ? e : null;
          1 === u && I && ((r = void 0), (a = void 0)),
            (n.scale =
              I ||
              f.imageWrapEl.getAttribute("data-swiper-zoom") ||
              i.maxRatio),
            (u =
              I ||
              f.imageWrapEl.getAttribute("data-swiper-zoom") ||
              i.maxRatio),
            !e || (1 === u && I)
              ? ((p = 0), (v = 0))
              : ((k = f.slideEl.offsetWidth),
                (_ = f.slideEl.offsetHeight),
                (o = g(f.slideEl).left + s.scrollX),
                (l = g(f.slideEl).top + s.scrollY),
                (c = o + k / 2 - r),
                (d = l + _ / 2 - a),
                (y = f.imageEl.offsetWidth),
                (w = f.imageEl.offsetHeight),
                (x = y * n.scale),
                (T = w * n.scale),
                (C = Math.min(k / 2 - x / 2, 0)),
                (E = Math.min(_ / 2 - T / 2, 0)),
                (S = -C),
                (M = -E),
                (p = c * n.scale),
                (v = d * n.scale),
                p < C && (p = C),
                p > S && (p = S),
                v < E && (v = E),
                v > M && (v = M)),
            I && 1 === n.scale && ((f.originX = 0), (f.originY = 0)),
            (f.imageWrapEl.style.transitionDuration = "300ms"),
            (f.imageWrapEl.style.transform = `translate3d(${p}px, ${v}px,0)`),
            (f.imageEl.style.transitionDuration = "300ms"),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`);
        }
        function _() {
          const e = t.zoom,
            n = t.params.zoom;
          if (!f.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (f.slideEl = m(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
              : (f.slideEl = t.slides[t.activeIndex]);
            let e = f.slideEl.querySelector(`.${n.containerClass}`);
            e &&
              (e = e.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
              (f.imageEl = e),
              (f.imageWrapEl = e
                ? b(f.imageEl, `.${n.containerClass}`)[0]
                : void 0);
          }
          f.imageEl &&
            f.imageWrapEl &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (u = 1),
            (f.imageWrapEl.style.transitionDuration = "300ms"),
            (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            (f.imageEl.style.transitionDuration = "300ms"),
            (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            f.slideEl.classList.remove(`${n.zoomedSlideClass}`),
            (f.slideEl = void 0),
            (f.originX = 0),
            (f.originY = 0));
        }
        function I(e) {
          const n = t.zoom;
          n.scale && 1 !== n.scale ? _() : k(e);
        }
        function P() {
          return {
            passiveListener: !!t.params.passiveListeners && {
              passive: !0,
              capture: !1,
            },
            activeListenerWithCapture: !t.params.passiveListeners || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function D() {
          const e = t.zoom;
          if (e.enabled) return;
          e.enabled = !0;
          const { passiveListener: n, activeListenerWithCapture: i } = P();
          t.wrapperEl.addEventListener("pointerdown", T, n),
            t.wrapperEl.addEventListener("pointermove", C, i),
            ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
              t.wrapperEl.addEventListener(e, E, n);
            }),
            t.wrapperEl.addEventListener("pointermove", S, i);
        }
        function A() {
          const e = t.zoom;
          if (!e.enabled) return;
          e.enabled = !1;
          const { passiveListener: n, activeListenerWithCapture: i } = P();
          t.wrapperEl.removeEventListener("pointerdown", T, n),
            t.wrapperEl.removeEventListener("pointermove", C, i),
            ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
              t.wrapperEl.removeEventListener(e, E, n);
            }),
            t.wrapperEl.removeEventListener("pointermove", S, i);
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => y,
          set(e) {
            if (y !== e) {
              const t = f.imageEl,
                n = f.slideEl;
              r("zoomChange", e, t, n);
            }
            y = e;
          },
        }),
          i("init", () => {
            t.params.zoom.enabled && D();
          }),
          i("destroy", () => {
            A();
          }),
          i("touchStart", (e, n) => {
            t.zoom.enabled &&
              (function (e) {
                const n = t.device;
                if (!f.imageEl) return;
                if (h.isTouched) return;
                n.android && e.cancelable && e.preventDefault(),
                  (h.isTouched = !0);
                const i = p.length > 0 ? p[0] : e;
                (h.touchesStart.x = i.pageX), (h.touchesStart.y = i.pageY);
              })(n);
          }),
          i("touchEnd", (e, n) => {
            t.zoom.enabled &&
              (function () {
                const e = t.zoom;
                if (!f.imageEl) return;
                if (!h.isTouched || !h.isMoved)
                  return (h.isTouched = !1), void (h.isMoved = !1);
                (h.isTouched = !1), (h.isMoved = !1);
                let n = 300,
                  i = 300;
                const r = v.x * n,
                  a = h.currentX + r,
                  s = v.y * i,
                  o = h.currentY + s;
                0 !== v.x && (n = Math.abs((a - h.currentX) / v.x)),
                  0 !== v.y && (i = Math.abs((o - h.currentY) / v.y));
                const l = Math.max(n, i);
                (h.currentX = a), (h.currentY = o);
                const c = h.width * e.scale,
                  u = h.height * e.scale;
                (h.minX = Math.min(f.slideWidth / 2 - c / 2, 0)),
                  (h.maxX = -h.minX),
                  (h.minY = Math.min(f.slideHeight / 2 - u / 2, 0)),
                  (h.maxY = -h.minY),
                  (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
                  (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
                  (f.imageWrapEl.style.transitionDuration = `${l}ms`),
                  (f.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
              })();
          }),
          i("doubleTap", (e, n) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              I(n);
          }),
          i("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && M();
          }),
          i("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && M();
          }),
          Object.assign(t.zoom, {
            enable: D,
            disable: A,
            in: k,
            out: _,
            toggle: I,
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        function r(e, t) {
          const n = (function () {
            let e, t, n;
            return (i, r) => {
              for (t = -1, e = i.length; e - t > 1; )
                (n = (e + t) >> 1), i[n] <= r ? (t = n) : (e = n);
              return e;
            };
          })();
          let i, r;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((r = n(this.x, e)),
                  (i = r - 1),
                  ((e - this.x[i]) * (this.y[r] - this.y[i])) /
                    (this.x[r] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        }
        function a() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        n({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          i("beforeInit", () => {
            if (
              "undefined" != typeof window &&
              ("string" == typeof t.params.controller.control ||
                t.params.controller.control instanceof HTMLElement)
            ) {
              const e = document.querySelector(t.params.controller.control);
              if (e && e.swiper) t.controller.control = e.swiper;
              else if (e) {
                const n = (i) => {
                  (t.controller.control = i.detail[0]),
                    t.update(),
                    e.removeEventListener("init", n);
                };
                e.addEventListener("init", n);
              }
            } else t.controller.control = t.params.controller.control;
          }),
          i("update", () => {
            a();
          }),
          i("resize", () => {
            a();
          }),
          i("observerUpdate", () => {
            a();
          }),
          i("setTranslate", (e, n, i) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTranslate(n, i);
          }),
          i("setTransition", (e, n, i) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTransition(n, i);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, n) {
              const i = t.controller.control;
              let a, s;
              const o = t.constructor;
              function l(e) {
                if (e.destroyed) return;
                const n = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  ((function (e) {
                    t.controller.spline = t.params.loop
                      ? new r(t.slidesGrid, e.slidesGrid)
                      : new r(t.snapGrid, e.snapGrid);
                  })(e),
                  (s = -t.controller.spline.interpolate(-n))),
                  (s && "container" !== t.params.controller.by) ||
                    ((a =
                      (e.maxTranslate() - e.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (!Number.isNaN(a) && Number.isFinite(a)) || (a = 1),
                    (s = (n - t.minTranslate()) * a + e.minTranslate())),
                  t.params.controller.inverse && (s = e.maxTranslate() - s),
                  e.updateProgress(s),
                  e.setTranslate(s, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(i))
                for (let e = 0; e < i.length; e += 1)
                  i[e] !== n && i[e] instanceof o && l(i[e]);
              else i instanceof o && n !== i && l(i);
            },
            setTransition: function (e, n) {
              const i = t.constructor,
                r = t.controller.control;
              let a;
              function o(n) {
                n.destroyed ||
                  (n.setTransition(e, t),
                  0 !== e &&
                    (n.transitionStart(),
                    n.params.autoHeight &&
                      s(() => {
                        n.updateAutoHeight();
                      }),
                    w(n.wrapperEl, () => {
                      r && n.transitionEnd();
                    })));
              }
              if (Array.isArray(r))
                for (a = 0; a < r.length; a += 1)
                  r[a] !== n && r[a] instanceof i && o(r[a]);
              else r instanceof i && n !== r && o(r);
            },
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
          },
        }),
          (t.a11y = { clicked: !1 });
        let r = null;
        function a(e) {
          const t = r;
          0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
        }
        const s = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function o(e) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("tabIndex", "0");
          });
        }
        function l(e) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("tabIndex", "-1");
          });
        }
        function c(e, t) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("role", t);
          });
        }
        function u(e, t) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("aria-roledescription", t);
          });
        }
        function d(e, t) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("aria-label", t);
          });
        }
        function p(e) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !0);
          });
        }
        function f(e) {
          (e = s(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !1);
          });
        }
        function m(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            i = e.target;
          (t.pagination &&
            t.pagination.el &&
            (i === t.pagination.el || t.pagination.el.contains(e.target)) &&
            !e.target.matches(ee(t.params.pagination.bulletClass))) ||
            (t.navigation &&
              t.navigation.nextEl &&
              i === t.navigation.nextEl &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? a(n.lastSlideMessage) : a(n.nextSlideMessage)),
            t.navigation &&
              t.navigation.prevEl &&
              i === t.navigation.prevEl &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? a(n.firstSlideMessage) : a(n.prevSlideMessage)),
            t.pagination &&
              i.matches(ee(t.params.pagination.bulletClass)) &&
              i.click());
        }
        function g() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function v() {
          return g() && t.params.pagination.clickable;
        }
        const b = (e, t, n) => {
            o(e),
              "BUTTON" !== e.tagName &&
                (c(e, "button"), e.addEventListener("keydown", m)),
              d(e, n),
              (function (e, t) {
                (e = s(e)).forEach((e) => {
                  e.setAttribute("aria-controls", t);
                });
              })(e, t);
          },
          w = () => {
            t.a11y.clicked = !0;
          },
          x = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            });
          },
          T = (e) => {
            if (t.a11y.clicked) return;
            const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!n || !t.slides.includes(n)) return;
            const i = t.slides.indexOf(n) === t.activeIndex,
              r =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(n);
            i ||
              r ||
              (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
              (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              t.slideTo(t.slides.indexOf(n), 0));
          },
          C = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage &&
              u(t.slides, e.itemRoleDescriptionMessage),
              e.slideRole && c(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage &&
              t.slides.forEach((i, r) => {
                const a = t.params.loop
                  ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                  : r;
                d(
                  i,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, a + 1)
                    .replace(/\{\{slidesLength\}\}/, n)
                );
              });
          };
        i("beforeInit", () => {
          (r = h("span", t.params.a11y.notificationClass)),
            r.setAttribute("aria-live", "assertive"),
            r.setAttribute("aria-atomic", "true");
        }),
          i("afterInit", () => {
            t.params.a11y.enabled &&
              (() => {
                const e = t.params.a11y;
                t.isElement ? t.el.shadowEl.append(r) : t.el.append(r);
                const n = t.el;
                e.containerRoleDescriptionMessage &&
                  u(n, e.containerRoleDescriptionMessage),
                  e.containerMessage && d(n, e.containerMessage);
                const i = t.wrapperEl,
                  a =
                    e.id ||
                    i.getAttribute("id") ||
                    `swiper-wrapper-${
                      ((o = 16),
                      void 0 === o && (o = 16),
                      "x"
                        .repeat(o)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ))
                    }`;
                var o;
                const l =
                  t.params.autoplay && t.params.autoplay.enabled
                    ? "off"
                    : "polite";
                var c;
                (c = a),
                  s(i).forEach((e) => {
                    e.setAttribute("id", c);
                  }),
                  (function (e, t) {
                    (e = s(e)).forEach((e) => {
                      e.setAttribute("aria-live", t);
                    });
                  })(i, l),
                  C();
                let { nextEl: p, prevEl: f } = t.navigation ? t.navigation : {};
                (p = s(p)),
                  (f = s(f)),
                  p && p.forEach((t) => b(t, a, e.nextSlideMessage)),
                  f && f.forEach((t) => b(t, a, e.prevSlideMessage)),
                  v() &&
                    (Array.isArray(t.pagination.el)
                      ? t.pagination.el
                      : [t.pagination.el]
                    ).forEach((e) => {
                      e.addEventListener("keydown", m);
                    }),
                  t.el.addEventListener("focus", T, !0),
                  t.el.addEventListener("pointerdown", w, !0),
                  t.el.addEventListener("pointerup", x, !0);
              })();
          }),
          i(
            "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
            () => {
              t.params.a11y.enabled && C();
            }
          ),
          i("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { nextEl: e, prevEl: n } = t.navigation;
                n && (t.isBeginning ? (p(n), l(n)) : (f(n), o(n))),
                  e && (t.isEnd ? (p(e), l(e)) : (f(e), o(e)));
              })();
          }),
          i("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                g() &&
                  t.pagination.bullets.forEach((n) => {
                    t.params.pagination.clickable &&
                      (o(n),
                      t.params.pagination.renderBullet ||
                        (c(n, "button"),
                        d(
                          n,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            y(n) + 1
                          )
                        ))),
                      n.matches(ee(t.params.pagination.bulletActiveClass))
                        ? n.setAttribute("aria-current", "true")
                        : n.removeAttribute("aria-current");
                  });
              })();
          }),
          i("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                r && r.remove();
                let { nextEl: e, prevEl: n } = t.navigation ? t.navigation : {};
                (e = s(e)),
                  (n = s(n)),
                  e && e.forEach((e) => e.removeEventListener("keydown", m)),
                  n && n.forEach((e) => e.removeEventListener("keydown", m)),
                  v() &&
                    (Array.isArray(t.pagination.el)
                      ? t.pagination.el
                      : [t.pagination.el]
                    ).forEach((e) => {
                      e.removeEventListener("keydown", m);
                    }),
                  t.el.removeEventListener("focus", T, !0),
                  t.el.removeEventListener("pointerdown", w, !0),
                  t.el.removeEventListener("pointerup", x, !0);
              })();
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1,
          },
        });
        let r = !1,
          s = {};
        const o = (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          l = (e) => {
            const t = a();
            let n;
            n = e ? new URL(e) : t.location;
            const i = n.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              r = i.length;
            return { key: i[r - 2], value: i[r - 1] };
          },
          c = (e, n) => {
            const i = a();
            if (!r || !t.params.history.enabled) return;
            let s;
            s = t.params.url ? new URL(t.params.url) : i.location;
            const l = t.slides[n];
            let c = o(l.getAttribute("data-history"));
            if (t.params.history.root.length > 0) {
              let n = t.params.history.root;
              "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)),
                (c = `${n}/${e ? `${e}/` : ""}${c}`);
            } else s.pathname.includes(e) || (c = `${e ? `${e}/` : ""}${c}`);
            t.params.history.keepQuery && (c += s.search);
            const u = i.history.state;
            (u && u.value === c) ||
              (t.params.history.replaceState
                ? i.history.replaceState({ value: c }, null, c)
                : i.history.pushState({ value: c }, null, c));
          },
          u = (e, n, i) => {
            if (n)
              for (let r = 0, a = t.slides.length; r < a; r += 1) {
                const a = t.slides[r];
                if (o(a.getAttribute("data-history")) === n) {
                  const n = t.getSlideIndex(a);
                  t.slideTo(n, e, i);
                }
              }
            else t.slideTo(0, e, i);
          },
          d = () => {
            (s = l(t.params.url)), u(t.params.speed, s.value, !1);
          };
        i("init", () => {
          t.params.history.enabled &&
            (() => {
              const e = a();
              if (t.params.history) {
                if (!e.history || !e.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (r = !0),
                  (s = l(t.params.url)),
                  s.key || s.value
                    ? (u(0, s.value, t.params.runCallbacksOnInit),
                      t.params.history.replaceState ||
                        e.addEventListener("popstate", d))
                    : t.params.history.replaceState ||
                      e.addEventListener("popstate", d);
              }
            })();
        }),
          i("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const e = a();
                t.params.history.replaceState ||
                  e.removeEventListener("popstate", d);
              })();
          }),
          i("transitionEnd _freeModeNoMomentumRelease", () => {
            r && c(t.params.history.key, t.activeIndex);
          }),
          i("slideChange", () => {
            r && t.params.cssMode && c(t.params.history.key, t.activeIndex);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, emit: r, on: s } = e,
          o = !1;
        const l = i(),
          c = a();
        n({
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex(e, n) {
              if (t.virtual && t.params.virtual.enabled) {
                const e = t.slides.filter(
                  (e) => e.getAttribute("data-hash") === n
                )[0];
                return e
                  ? parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                  : 0;
              }
              return t.getSlideIndex(
                m(
                  t.slidesEl,
                  `.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`
                )[0]
              );
            },
          },
        });
        const u = () => {
            r("hashChange");
            const e = l.location.hash.replace("#", ""),
              n = t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              );
            if (e !== (n ? n.getAttribute("data-hash") : "")) {
              const n = t.params.hashNavigation.getSlideIndex(t, e);
              if (void 0 === n || Number.isNaN(n)) return;
              t.slideTo(n);
            }
          },
          d = () => {
            if (!o || !t.params.hashNavigation.enabled) return;
            const e = t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              ),
              n = e
                ? e.getAttribute("data-hash") || e.getAttribute("data-history")
                : "";
            t.params.hashNavigation.replaceState &&
            c.history &&
            c.history.replaceState
              ? (c.history.replaceState(null, null, `#${n}` || ""),
                r("hashSet"))
              : ((l.location.hash = n || ""), r("hashSet"));
          };
        s("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              o = !0;
              const e = l.location.hash.replace("#", "");
              if (e) {
                const n = 0,
                  i = t.params.hashNavigation.getSlideIndex(t, e);
                t.slideTo(i || 0, n, t.params.runCallbacksOnInit, !0);
              }
              t.params.hashNavigation.watchState &&
                c.addEventListener("hashchange", u);
            })();
        }),
          s("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              c.removeEventListener("hashchange", u);
          }),
          s("transitionEnd _freeModeNoMomentumRelease", () => {
            o && d();
          }),
          s("slideChange", () => {
            o && t.params.cssMode && d();
          });
      },
      function (e) {
        let t,
          n,
          { swiper: r, extendParams: a, on: s, emit: o, params: l } = e;
        (r.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          a({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let c,
          u,
          d,
          p,
          f,
          m,
          h,
          g = l && l.autoplay ? l.autoplay.delay : 3e3,
          v = l && l.autoplay ? l.autoplay.delay : 3e3,
          y = new Date().getTime;
        function b(e) {
          r &&
            !r.destroyed &&
            r.wrapperEl &&
            e.target === r.wrapperEl &&
            (r.wrapperEl.removeEventListener("transitionend", b), S());
        }
        const w = () => {
            if (r.destroyed || !r.autoplay.running) return;
            r.autoplay.paused ? (u = !0) : u && ((v = c), (u = !1));
            const e = r.autoplay.paused ? c : y + v - new Date().getTime();
            (r.autoplay.timeLeft = e),
              o("autoplayTimeLeft", e, e / g),
              (n = requestAnimationFrame(() => {
                w();
              }));
          },
          x = (e) => {
            if (r.destroyed || !r.autoplay.running) return;
            cancelAnimationFrame(n), w();
            let i = void 0 === e ? r.params.autoplay.delay : e;
            (g = r.params.autoplay.delay), (v = r.params.autoplay.delay);
            const a = (() => {
              let e;
              if (
                ((e =
                  r.virtual && r.params.virtual.enabled
                    ? r.slides.filter((e) =>
                        e.classList.contains("swiper-slide-active")
                      )[0]
                    : r.slides[r.activeIndex]),
                e)
              )
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(a) &&
              a > 0 &&
              void 0 === e &&
              ((i = a), (g = a), (v = a)),
              (c = i);
            const s = r.params.speed,
              l = () => {
                r &&
                  !r.destroyed &&
                  (r.params.autoplay.reverseDirection
                    ? !r.isBeginning || r.params.loop || r.params.rewind
                      ? (r.slidePrev(s, !0, !0), o("autoplay"))
                      : r.params.autoplay.stopOnLastSlide ||
                        (r.slideTo(r.slides.length - 1, s, !0, !0),
                        o("autoplay"))
                    : !r.isEnd || r.params.loop || r.params.rewind
                    ? (r.slideNext(s, !0, !0), o("autoplay"))
                    : r.params.autoplay.stopOnLastSlide ||
                      (r.slideTo(0, s, !0, !0), o("autoplay")),
                  r.params.cssMode &&
                    ((y = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
              };
            return (
              i > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, i)))
                : requestAnimationFrame(() => {
                    l();
                  }),
              i
            );
          },
          T = () => {
            (r.autoplay.running = !0), x(), o("autoplayStart");
          },
          C = () => {
            (r.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(n),
              o("autoplayStop");
          },
          E = (e, n) => {
            if (r.destroyed || !r.autoplay.running) return;
            clearTimeout(t), e || (h = !0);
            const i = () => {
              o("autoplayPause"),
                r.params.autoplay.waitForTransition
                  ? r.wrapperEl.addEventListener("transitionend", b)
                  : S();
            };
            if (((r.autoplay.paused = !0), n))
              return m && (c = r.params.autoplay.delay), (m = !1), void i();
            const a = c || r.params.autoplay.delay;
            (c = a - (new Date().getTime() - y)),
              (r.isEnd && c < 0 && !r.params.loop) || (c < 0 && (c = 0), i());
          },
          S = () => {
            (r.isEnd && c < 0 && !r.params.loop) ||
              r.destroyed ||
              !r.autoplay.running ||
              ((y = new Date().getTime()),
              h ? ((h = !1), x(c)) : x(),
              (r.autoplay.paused = !1),
              o("autoplayResume"));
          },
          M = () => {
            if (r.destroyed || !r.autoplay.running) return;
            const e = i();
            "hidden" === e.visibilityState && ((h = !0), E(!0)),
              "visible" === e.visibilityState && S();
          },
          k = (e) => {
            "mouse" === e.pointerType && ((h = !0), E(!0));
          },
          _ = (e) => {
            "mouse" === e.pointerType && r.autoplay.paused && S();
          };
        s("init", () => {
          r.params.autoplay.enabled &&
            (r.params.autoplay.pauseOnMouseEnter &&
              (r.el.addEventListener("pointerenter", k),
              r.el.addEventListener("pointerleave", _)),
            i().addEventListener("visibilitychange", M),
            (y = new Date().getTime()),
            T());
        }),
          s("destroy", () => {
            r.el.removeEventListener("pointerenter", k),
              r.el.removeEventListener("pointerleave", _),
              i().removeEventListener("visibilitychange", M),
              r.autoplay.running && C();
          }),
          s("beforeTransitionStart", (e, t, n) => {
            !r.destroyed &&
              r.autoplay.running &&
              (n || !r.params.autoplay.disableOnInteraction ? E(!0, !0) : C());
          }),
          s("sliderFirstMove", () => {
            !r.destroyed &&
              r.autoplay.running &&
              (r.params.autoplay.disableOnInteraction
                ? C()
                : ((d = !0),
                  (p = !1),
                  (h = !1),
                  (f = setTimeout(() => {
                    (h = !0), (p = !0), E(!0);
                  }, 200))));
          }),
          s("touchEnd", () => {
            if (!r.destroyed && r.autoplay.running && d) {
              if (
                (clearTimeout(f),
                clearTimeout(t),
                r.params.autoplay.disableOnInteraction)
              )
                return (p = !1), void (d = !1);
              p && r.params.cssMode && S(), (p = !1), (d = !1);
            }
          }),
          s("slideChange", () => {
            !r.destroyed && r.autoplay.running && (m = !0);
          }),
          Object.assign(r.autoplay, { start: T, stop: C, pause: E, resume: S });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r } = e;
        n({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let a = !1,
          s = !1;
        function o() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const n = e.clickedIndex,
            i = e.clickedSlide;
          if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
            return;
          if (null == n) return;
          let r;
          (r = e.params.loop
            ? parseInt(
                e.clickedSlide.getAttribute("data-swiper-slide-index"),
                10
              )
            : n),
            t.params.loop ? t.slideToLoop(r) : t.slideTo(r);
        }
        function l() {
          const { thumbs: e } = t.params;
          if (a) return !1;
          a = !0;
          const n = t.constructor;
          if (e.swiper instanceof n)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              t.thumbs.swiper.update();
          else if (c(e.swiper)) {
            const i = Object.assign({}, e.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new n(i)),
              (s = !0);
          }
          return (
            t.thumbs.swiper.el.classList.add(
              t.params.thumbs.thumbsContainerClass
            ),
            t.thumbs.swiper.on("tap", o),
            !0
          );
        }
        function u(e) {
          const n = t.thumbs.swiper;
          if (!n || n.destroyed) return;
          const i =
            "auto" === n.params.slidesPerView
              ? n.slidesPerViewDynamic()
              : n.params.slidesPerView;
          let r = 1;
          const a = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (r = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (r = 1),
            (r = Math.floor(r)),
            n.slides.forEach((e) => e.classList.remove(a)),
            n.params.loop || (n.params.virtual && n.params.virtual.enabled))
          )
            for (let e = 0; e < r; e += 1)
              m(
                n.slidesEl,
                `[data-swiper-slide-index="${t.realIndex + e}"]`
              ).forEach((e) => {
                e.classList.add(a);
              });
          else
            for (let e = 0; e < r; e += 1)
              n.slides[t.realIndex + e] &&
                n.slides[t.realIndex + e].classList.add(a);
          const s = t.params.thumbs.autoScrollOffset,
            o = s && !n.params.loop;
          if (t.realIndex !== n.realIndex || o) {
            const r = n.activeIndex;
            let a, l;
            if (n.params.loop) {
              const e = n.slides.filter(
                (e) =>
                  e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
              )[0];
              (a = n.slides.indexOf(e)),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (a = t.realIndex), (l = a > t.previousIndex ? "next" : "prev");
            o && (a += "next" === l ? s : -1 * s),
              n.visibleSlidesIndexes &&
                n.visibleSlidesIndexes.indexOf(a) < 0 &&
                (n.params.centeredSlides
                  ? (a =
                      a > r
                        ? a - Math.floor(i / 2) + 1
                        : a + Math.floor(i / 2) - 1)
                  : a > r && n.params.slidesPerGroup,
                n.slideTo(a, e ? 0 : void 0));
          }
        }
        (t.thumbs = { swiper: null }),
          r("beforeInit", () => {
            const { thumbs: e } = t.params;
            if (e && e.swiper)
              if (
                "string" == typeof e.swiper ||
                e.swiper instanceof HTMLElement
              ) {
                const n = i(),
                  r = () => {
                    const i =
                      "string" == typeof e.swiper
                        ? n.querySelector(e.swiper)
                        : e.swiper;
                    if (i && i.swiper) (e.swiper = i.swiper), l(), u(!0);
                    else if (i) {
                      const n = (r) => {
                        (e.swiper = r.detail[0]),
                          i.removeEventListener("init", n),
                          l(),
                          u(!0),
                          e.swiper.update(),
                          t.update();
                      };
                      i.addEventListener("init", n);
                    }
                    return i;
                  },
                  a = () => {
                    t.destroyed || r() || requestAnimationFrame(a);
                  };
                requestAnimationFrame(a);
              } else l(), u(!0);
          }),
          r("slideChange update resize observerUpdate", () => {
            u();
          }),
          r("setTransition", (e, n) => {
            const i = t.thumbs.swiper;
            i && !i.destroyed && i.setTransition(n);
          }),
          r("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && s && e.destroy();
          }),
          Object.assign(t.thumbs, { init: l, update: u });
      },
      function (e) {
        let { swiper: t, extendParams: n, emit: i, once: r } = e;
        n({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: n } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: o(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: n } = e;
                const {
                    params: a,
                    wrapperEl: s,
                    rtlTranslate: l,
                    snapGrid: c,
                    touchEventsData: u,
                  } = t,
                  d = o() - u.touchStartTime;
                if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (n > -t.maxTranslate())
                  t.slides.length < c.length
                    ? t.slideTo(c.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (a.freeMode.momentum) {
                    if (u.velocities.length > 1) {
                      const e = u.velocities.pop(),
                        n = u.velocities.pop(),
                        i = e.position - n.position,
                        r = e.time - n.time;
                      (t.velocity = i / r),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < a.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (r > 150 || o() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= a.freeMode.momentumVelocityRatio),
                      (u.velocities.length = 0);
                    let e = 1e3 * a.freeMode.momentumRatio;
                    const n = t.velocity * e;
                    let d = t.translate + n;
                    l && (d = -d);
                    let p,
                      f = !1;
                    const m =
                      20 *
                      Math.abs(t.velocity) *
                      a.freeMode.momentumBounceRatio;
                    let h;
                    if (d < t.maxTranslate())
                      a.freeMode.momentumBounce
                        ? (d + t.maxTranslate() < -m &&
                            (d = t.maxTranslate() - m),
                          (p = t.maxTranslate()),
                          (f = !0),
                          (u.allowMomentumBounce = !0))
                        : (d = t.maxTranslate()),
                        a.loop && a.centeredSlides && (h = !0);
                    else if (d > t.minTranslate())
                      a.freeMode.momentumBounce
                        ? (d - t.minTranslate() > m &&
                            (d = t.minTranslate() + m),
                          (p = t.minTranslate()),
                          (f = !0),
                          (u.allowMomentumBounce = !0))
                        : (d = t.minTranslate()),
                        a.loop && a.centeredSlides && (h = !0);
                    else if (a.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < c.length; t += 1)
                        if (c[t] > -d) {
                          e = t;
                          break;
                        }
                      (d =
                        Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) ||
                        "next" === t.swipeDirection
                          ? c[e]
                          : c[e - 1]),
                        (d = -d);
                    }
                    if (
                      (h &&
                        r("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = l
                          ? Math.abs((-d - t.translate) / t.velocity)
                          : Math.abs((d - t.translate) / t.velocity)),
                        a.freeMode.sticky)
                      ) {
                        const n = Math.abs((l ? -d : d) - t.translate),
                          i = t.slidesSizesGrid[t.activeIndex];
                        e =
                          n < i
                            ? a.speed
                            : n < 2 * i
                            ? 1.5 * a.speed
                            : 2.5 * a.speed;
                      }
                    } else if (a.freeMode.sticky)
                      return void t.slideToClosest();
                    a.freeMode.momentumBounce && f
                      ? (t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        w(s, () => {
                          t &&
                            !t.destroyed &&
                            u.allowMomentumBounce &&
                            (i("momentumBounce"),
                            t.setTransition(a.speed),
                            setTimeout(() => {
                              t.setTranslate(p),
                                w(s, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (i("_freeModeNoMomentumRelease"),
                        t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          w(s, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(d),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (a.freeMode.sticky) return void t.slideToClosest();
                    a.freeMode && i("_freeModeNoMomentumRelease");
                  }
                  (!a.freeMode.momentum || d >= a.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let t,
          n,
          i,
          { swiper: r, extendParams: a } = e;
        a({ grid: { rows: 1, fill: "column" } });
        const s = () => {
          let e = r.params.spaceBetween;
          return (
            "string" == typeof e && e.indexOf("%") >= 0
              ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size)
              : "string" == typeof e && (e = parseFloat(e)),
            e
          );
        };
        r.grid = {
          initSlides: (e) => {
            const { slidesPerView: a } = r.params,
              { rows: s, fill: o } = r.params.grid;
            (n = t / s),
              (i = Math.floor(e / s)),
              (t = Math.floor(e / s) === e / s ? e : Math.ceil(e / s) * s),
              "auto" !== a && "row" === o && (t = Math.max(t, a * s));
          },
          updateSlide: (e, a, o, l) => {
            const { slidesPerGroup: c } = r.params,
              u = s(),
              { rows: d, fill: p } = r.params.grid;
            let f, m, h;
            if ("row" === p && c > 1) {
              const n = Math.floor(e / (c * d)),
                i = e - d * c * n,
                r = 0 === n ? c : Math.min(Math.ceil((o - n * d * c) / d), c);
              (h = Math.floor(i / r)),
                (m = i - h * r + n * c),
                (f = m + (h * t) / d),
                (a.style.order = f);
            } else
              "column" === p
                ? ((m = Math.floor(e / d)),
                  (h = e - m * d),
                  (m > i || (m === i && h === d - 1)) &&
                    ((h += 1), h >= d && ((h = 0), (m += 1))))
                : ((h = Math.floor(e / n)), (m = e - h * n));
            a.style[l("margin-top")] = 0 !== h ? u && `${u}px` : "";
          },
          updateWrapperSize: (e, n, i) => {
            const { centeredSlides: a, roundLengths: o } = r.params,
              l = s(),
              { rows: c } = r.params.grid;
            if (
              ((r.virtualSize = (e + l) * t),
              (r.virtualSize = Math.ceil(r.virtualSize / c) - l),
              (r.wrapperEl.style[i("width")] = `${r.virtualSize + l}px`),
              a)
            ) {
              const e = [];
              for (let t = 0; t < n.length; t += 1) {
                let i = n[t];
                o && (i = Math.floor(i)),
                  n[t] < r.virtualSize + n[0] && e.push(i);
              }
              n.splice(0, n.length), n.push(...e);
            }
          },
        };
      },
      function (e) {
        let { swiper: t } = e;
        Object.assign(t, {
          appendSlide: te.bind(t),
          prependSlide: ne.bind(t),
          addSlide: ie.bind(t),
          removeSlide: re.bind(t),
          removeAllSlides: ae.bind(t),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({ fadeEffect: { crossFade: !1 } }),
          se({
            effect: "fade",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { slides: e } = t;
              t.params.fadeEffect;
              for (let n = 0; n < e.length; n += 1) {
                const e = t.slides[n];
                let i = -e.swiperSlideOffset;
                t.params.virtualTranslate || (i -= t.translate);
                let r = 0;
                t.isHorizontal() || ((r = i), (i = 0));
                const a = t.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(e.progress), 0)
                    : 1 + Math.min(Math.max(e.progress, -1), 0),
                  s = oe(0, e);
                (s.style.opacity = a),
                  (s.style.transform = `translate3d(${i}px, ${r}px, 0px)`);
              }
            },
            setTransition: (e) => {
              const n = t.slides.map((e) => f(e));
              n.forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              }),
                le({
                  swiper: t,
                  duration: e,
                  transformElements: n,
                  allSlides: !0,
                });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        });
        const r = (e, t, n) => {
          let i = n
              ? e.querySelector(".swiper-slide-shadow-left")
              : e.querySelector(".swiper-slide-shadow-top"),
            r = n
              ? e.querySelector(".swiper-slide-shadow-right")
              : e.querySelector(".swiper-slide-shadow-bottom");
          i ||
            ((i = h("div", "swiper-slide-shadow-" + (n ? "left" : "top"))),
            e.append(i)),
            r ||
              ((r = h(
                "div",
                "swiper-slide-shadow-" + (n ? "right" : "bottom")
              )),
              e.append(r)),
            i && (i.style.opacity = Math.max(-t, 0)),
            r && (r.style.opacity = Math.max(t, 0));
        };
        se({
          effect: "cube",
          swiper: t,
          on: i,
          setTranslate: () => {
            const {
                el: e,
                wrapperEl: n,
                slides: i,
                width: a,
                height: s,
                rtlTranslate: o,
                size: l,
                browser: c,
              } = t,
              u = t.params.cubeEffect,
              d = t.isHorizontal(),
              p = t.virtual && t.params.virtual.enabled;
            let f,
              m = 0;
            u.shadow &&
              (d
                ? ((f = t.slidesEl.querySelector(".swiper-cube-shadow")),
                  f ||
                    ((f = h("div", "swiper-cube-shadow")),
                    t.slidesEl.append(f)),
                  (f.style.height = `${a}px`))
                : ((f = e.querySelector(".swiper-cube-shadow")),
                  f || ((f = h("div", "swiper-cube-shadow")), e.append(f))));
            for (let e = 0; e < i.length; e += 1) {
              const t = i[e];
              let n = e;
              p &&
                (n = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
              let a = 90 * n,
                s = Math.floor(a / 360);
              o && ((a = -a), (s = Math.floor(-a / 360)));
              const c = Math.max(Math.min(t.progress, 1), -1);
              let f = 0,
                h = 0,
                g = 0;
              n % 4 == 0
                ? ((f = 4 * -s * l), (g = 0))
                : (n - 1) % 4 == 0
                ? ((f = 0), (g = 4 * -s * l))
                : (n - 2) % 4 == 0
                ? ((f = l + 4 * s * l), (g = l))
                : (n - 3) % 4 == 0 && ((f = -l), (g = 3 * l + 4 * l * s)),
                o && (f = -f),
                d || ((h = f), (f = 0));
              const v = `rotateX(${d ? 0 : -a}deg) rotateY(${
                d ? a : 0
              }deg) translate3d(${f}px, ${h}px, ${g}px)`;
              c <= 1 &&
                c > -1 &&
                ((m = 90 * n + 90 * c), o && (m = 90 * -n - 90 * c)),
                (t.style.transform = v),
                u.slideShadows && r(t, c, d);
            }
            if (
              ((n.style.transformOrigin = `50% 50% -${l / 2}px`),
              (n.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
              u.shadow)
            )
              if (d)
                f.style.transform = `translate3d(0px, ${
                  a / 2 + u.shadowOffset
                }px, ${-a / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                  u.shadowScale
                })`;
              else {
                const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  n = u.shadowScale,
                  i = u.shadowScale / t,
                  r = u.shadowOffset;
                f.style.transform = `scale3d(${n}, 1, ${i}) translate3d(0px, ${
                  s / 2 + r
                }px, ${-s / 2 / i}px) rotateX(-90deg)`;
              }
            const g =
              (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
            (n.style.transform = `translate3d(0px,0,${g}px) rotateX(${
              t.isHorizontal() ? 0 : m
            }deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`),
              n.style.setProperty("--swiper-cube-translate-z", `${g}px`);
          },
          setTransition: (e) => {
            const { el: n, slides: i } = t;
            if (
              (i.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              }),
              t.params.cubeEffect.shadow && !t.isHorizontal())
            ) {
              const t = n.querySelector(".swiper-cube-shadow");
              t && (t.style.transitionDuration = `${e}ms`);
            }
          },
          recreateShadows: () => {
            const e = t.isHorizontal();
            t.slides.forEach((t) => {
              const n = Math.max(Math.min(t.progress, 1), -1);
              r(t, n, e);
            });
          },
          getEffectParams: () => t.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
        const r = (e, n, i) => {
          let r = t.isHorizontal()
              ? e.querySelector(".swiper-slide-shadow-left")
              : e.querySelector(".swiper-slide-shadow-top"),
            a = t.isHorizontal()
              ? e.querySelector(".swiper-slide-shadow-right")
              : e.querySelector(".swiper-slide-shadow-bottom");
          r || (r = ce(0, e, t.isHorizontal() ? "left" : "top")),
            a || (a = ce(0, e, t.isHorizontal() ? "right" : "bottom")),
            r && (r.style.opacity = Math.max(-n, 0)),
            a && (a.style.opacity = Math.max(n, 0));
        };
        se({
          effect: "flip",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, rtlTranslate: n } = t,
              i = t.params.flipEffect;
            for (let a = 0; a < e.length; a += 1) {
              const s = e[a];
              let o = s.progress;
              t.params.flipEffect.limitRotation &&
                (o = Math.max(Math.min(s.progress, 1), -1));
              const l = s.swiperSlideOffset;
              let c = -180 * o,
                u = 0,
                d = t.params.cssMode ? -l - t.translate : -l,
                p = 0;
              t.isHorizontal()
                ? n && (c = -c)
                : ((p = d), (d = 0), (u = -c), (c = 0)),
                (s.style.zIndex = -Math.abs(Math.round(o)) + e.length),
                i.slideShadows && r(s, o);
              const f = `translate3d(${d}px, ${p}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;
              oe(0, s).style.transform = f;
            }
          },
          setTransition: (e) => {
            const n = t.slides.map((e) => f(e));
            n.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
              le({ swiper: t, duration: e, transformElements: n });
          },
          recreateShadows: () => {
            t.params.flipEffect,
              t.slides.forEach((e) => {
                let n = e.progress;
                t.params.flipEffect.limitRotation &&
                  (n = Math.max(Math.min(e.progress, 1), -1)),
                  r(e, n);
              });
          },
          getEffectParams: () => t.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        }),
          se({
            effect: "coverflow",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { width: e, height: n, slides: i, slidesSizesGrid: r } = t,
                a = t.params.coverflowEffect,
                s = t.isHorizontal(),
                o = t.translate,
                l = s ? e / 2 - o : n / 2 - o,
                c = s ? a.rotate : -a.rotate,
                u = a.depth;
              for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i[e],
                  n = r[e],
                  o = (l - t.swiperSlideOffset - n / 2) / n,
                  d =
                    "function" == typeof a.modifier
                      ? a.modifier(o)
                      : o * a.modifier;
                let p = s ? c * d : 0,
                  f = s ? 0 : c * d,
                  m = -u * Math.abs(d),
                  h = a.stretch;
                "string" == typeof h &&
                  -1 !== h.indexOf("%") &&
                  (h = (parseFloat(a.stretch) / 100) * n);
                let g = s ? 0 : h * d,
                  v = s ? h * d : 0,
                  y = 1 - (1 - a.scale) * Math.abs(d);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${f}deg) rotateY(${p}deg) scale(${y})`;
                if (
                  ((oe(0, t).style.transform = b),
                  (t.style.zIndex = 1 - Math.abs(Math.round(d))),
                  a.slideShadows)
                ) {
                  let e = s
                      ? t.querySelector(".swiper-slide-shadow-left")
                      : t.querySelector(".swiper-slide-shadow-top"),
                    n = s
                      ? t.querySelector(".swiper-slide-shadow-right")
                      : t.querySelector(".swiper-slide-shadow-bottom");
                  e || (e = ce(0, t, s ? "left" : "top")),
                    n || (n = ce(0, t, s ? "right" : "bottom")),
                    e && (e.style.opacity = d > 0 ? d : 0),
                    n && (n.style.opacity = -d > 0 ? -d : 0);
                }
              }
            },
            setTransition: (e) => {
              t.slides
                .map((e) => f(e))
                .forEach((t) => {
                  (t.style.transitionDuration = `${e}ms`),
                    t
                      .querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .forEach((t) => {
                        t.style.transitionDuration = `${e}ms`;
                      });
                });
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const r = (e) => ("string" == typeof e ? e : `${e}px`);
        se({
          effect: "creative",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, wrapperEl: n, slidesSizesGrid: i } = t,
              a = t.params.creativeEffect,
              { progressMultiplier: s } = a,
              o = t.params.centeredSlides;
            if (o) {
              const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
              n.style.transform = `translateX(calc(50% - ${e}px))`;
            }
            for (let n = 0; n < e.length; n += 1) {
              const i = e[n],
                l = i.progress,
                c = Math.min(
                  Math.max(i.progress, -a.limitProgress),
                  a.limitProgress
                );
              let u = c;
              o ||
                (u = Math.min(
                  Math.max(i.originalProgress, -a.limitProgress),
                  a.limitProgress
                ));
              const d = i.swiperSlideOffset,
                p = [t.params.cssMode ? -d - t.translate : -d, 0, 0],
                f = [0, 0, 0];
              let m = !1;
              t.isHorizontal() || ((p[1] = p[0]), (p[0] = 0));
              let h = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              c < 0
                ? ((h = a.next), (m = !0))
                : c > 0 && ((h = a.prev), (m = !0)),
                p.forEach((e, t) => {
                  p[t] = `calc(${e}px + (${r(h.translate[t])} * ${Math.abs(
                    c * s
                  )}))`;
                }),
                f.forEach((e, t) => {
                  f[t] = h.rotate[t] * Math.abs(c * s);
                }),
                (i.style.zIndex = -Math.abs(Math.round(l)) + e.length);
              const g = p.join(", "),
                v = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                y =
                  u < 0
                    ? `scale(${1 + (1 - h.scale) * u * s})`
                    : `scale(${1 - (1 - h.scale) * u * s})`,
                b =
                  u < 0
                    ? 1 + (1 - h.opacity) * u * s
                    : 1 - (1 - h.opacity) * u * s,
                w = `translate3d(${g}) ${v} ${y}`;
              if ((m && h.shadow) || !m) {
                let e = i.querySelector(".swiper-slide-shadow");
                if ((!e && h.shadow && (e = ce(0, i)), e)) {
                  const t = a.shadowPerProgress ? c * (1 / a.limitProgress) : c;
                  e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                }
              }
              const x = oe(0, i);
              (x.style.transform = w),
                (x.style.opacity = b),
                h.origin && (x.style.transformOrigin = h.origin);
            }
          },
          setTransition: (e) => {
            const n = t.slides.map((e) => f(e));
            n.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              le({
                swiper: t,
                duration: e,
                transformElements: n,
                allSlides: !0,
              });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: i } = e;
        n({
          cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8,
          },
        }),
          se({
            effect: "cards",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { slides: e, activeIndex: n } = t,
                i = t.params.cardsEffect,
                { startTranslate: r, isTouched: a } = t.touchEventsData,
                s = t.translate;
              for (let o = 0; o < e.length; o += 1) {
                const l = e[o],
                  c = l.progress,
                  u = Math.min(Math.max(c, -4), 4);
                let d = l.swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (d -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -d - t.translate : -d,
                  f = 0;
                const m = -100 * Math.abs(u);
                let h = 1,
                  g = -i.perSlideRotate * u,
                  v = i.perSlideOffset - 0.75 * Math.abs(u);
                const y =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + o
                      : o,
                  b =
                    (y === n || y === n - 1) &&
                    u > 0 &&
                    u < 1 &&
                    (a || t.params.cssMode) &&
                    s < r,
                  w =
                    (y === n || y === n + 1) &&
                    u < 0 &&
                    u > -1 &&
                    (a || t.params.cssMode) &&
                    s > r;
                if (b || w) {
                  const e = (1 - Math.abs((Math.abs(u) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * u * e),
                    (h += -0.5 * e),
                    (v += 96 * e),
                    (f = -25 * e * Math.abs(u) + "%");
                }
                if (
                  ((p =
                    u < 0
                      ? `calc(${p}px + (${v * Math.abs(u)}%))`
                      : u > 0
                      ? `calc(${p}px + (-${v * Math.abs(u)}%))`
                      : `${p}px`),
                  !t.isHorizontal())
                ) {
                  const e = f;
                  (f = p), (p = e);
                }
                const x =
                    u < 0 ? "" + (1 + (1 - h) * u) : "" + (1 - (1 - h) * u),
                  T = `\n        translate3d(${p}, ${f}, ${m}px)\n        rotateZ(${
                    i.rotate ? g : 0
                  }deg)\n        scale(${x})\n      `;
                if (i.slideShadows) {
                  let e = l.querySelector(".swiper-slide-shadow");
                  e || (e = ce(0, l)),
                    e &&
                      (e.style.opacity = Math.min(
                        Math.max((Math.abs(u) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (l.style.zIndex = -Math.abs(Math.round(c)) + e.length),
                  (oe(0, l).style.transform = T);
              }
            },
            setTransition: (e) => {
              const n = t.slides.map((e) => f(e));
              n.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
              }),
                le({ swiper: t, duration: e, transformElements: n });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return Q.use(ue), Q;
  }),
  /*!
   * https://github.com/umarwebdeveloper/jquery-css-skills-bar
   * Author: @umarwebdeveloper
   * Licensed under the MIT license
   */
  (function (e) {
    e.fn.skillBars = function (t) {
      var n = e.extend(
        {
          from: 0,
          to: !1,
          speed: 1e3,
          interval: 100,
          decimals: 0,
          onUpdate: null,
          onComplete: null,
          classes: {
            skillBarBar: ".skillbar-bar",
            skillBarPercent: ".skill-bar-percent",
          },
        },
        t
      );
      return this.each(function () {
        var t = e(this),
          i = 0 != n.to ? n.to : parseInt(t.attr("data-percent"));
        i > 100 && (i = 100);
        var r = n.from,
          a = Math.ceil(n.speed / n.interval),
          s = (i - r) / a,
          o = 0,
          l = setInterval(function () {
            (r += s),
              o++,
              e(t)
                .find(n.classes.skillBarPercent)
                .text(r.toFixed(n.decimals) + "%"),
              "function" == typeof n.onUpdate && n.onUpdate.call(t, r),
              o >= a &&
                (clearInterval(l),
                (r = i),
                "function" == typeof n.onComplete && n.onComplete.call(t, r));
          }, n.interval);
        t.find(n.classes.skillBarBar).animate(
          { width: parseInt(t.attr("data-percent")) + "%" },
          n.speed
        );
      });
    };
  })(jQuery),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(window.jQuery || window.Zepto);
  })(function (e) {
    var t,
      n,
      i,
      r,
      a,
      s,
      o = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      u = "Open",
      d = "Change",
      p = "mfp",
      f = "." + p,
      m = "mfp-ready",
      h = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      b = e(window),
      w = function (e, n) {
        t.ev.on(p + e + f, n);
      },
      x = function (t, n, i, r) {
        var a = document.createElement("div");
        return (
          (a.className = "mfp-" + t),
          i && (a.innerHTML = i),
          r ? n && n.appendChild(a) : ((a = e(a)), n && a.appendTo(n)),
          a
        );
      },
      T = function (n, i) {
        t.ev.triggerHandler(p + n, i),
          t.st.callbacks &&
            ((n = n.charAt(0).toLowerCase() + n.slice(1)),
            t.st.callbacks[n] &&
              t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
      },
      C = function (n) {
        return (
          (n === s && t.currTemplate.closeBtn) ||
            ((t.currTemplate.closeBtn = e(
              t.st.closeMarkup.replace("%title%", t.st.tClose)
            )),
            (s = n)),
          t.currTemplate.closeBtn
        );
      },
      E = function () {
        e.magnificPopup.instance ||
          ((t = new v()).init(), (e.magnificPopup.instance = t));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var n = navigator.appVersion;
        (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
          (t.isAndroid = /android/gi.test(n)),
          (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
          (t.supportsTransition = (function () {
            var e = document.createElement("p").style,
              t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
            return !1;
          })()),
          (t.probablyMobile =
            t.isAndroid ||
            t.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (i = e(document)),
          (t.popupsCache = {});
      },
      open: function (n) {
        var r;
        if (!1 === n.isObj) {
          (t.items = n.items.toArray()), (t.index = 0);
          var s,
            o = n.items;
          for (r = 0; r < o.length; r++)
            if (((s = o[r]).parsed && (s = s.el[0]), s === n.el[0])) {
              t.index = r;
              break;
            }
        } else
          (t.items = e.isArray(n.items) ? n.items : [n.items]),
            (t.index = n.index || 0);
        if (!t.isOpen) {
          (t.types = []),
            (a = ""),
            n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
            n.key
              ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                (t.currTemplate = t.popupsCache[n.key]))
              : (t.currTemplate = {}),
            (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
            (t.fixedContentPos =
              "auto" === t.st.fixedContentPos
                ? !t.probablyMobile
                : t.st.fixedContentPos),
            t.st.modal &&
              ((t.st.closeOnContentClick = !1),
              (t.st.closeOnBgClick = !1),
              (t.st.showCloseBtn = !1),
              (t.st.enableEscapeKey = !1)),
            t.bgOverlay ||
              ((t.bgOverlay = x("bg").on("click" + f, function () {
                t.close();
              })),
              (t.wrap = x("wrap")
                .attr("tabindex", -1)
                .on("click" + f, function (e) {
                  t._checkIfClose(e.target) && t.close();
                })),
              (t.container = x("container", t.wrap))),
            (t.contentContainer = x("content")),
            t.st.preloader &&
              (t.preloader = x("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;
          for (r = 0; r < l.length; r++) {
            var d = l[r];
            (d = d.charAt(0).toUpperCase() + d.slice(1)), t["init" + d].call(t);
          }
          T("BeforeOpen"),
            t.st.showCloseBtn &&
              (t.st.closeBtnInside
                ? (w(c, function (e, t, n, i) {
                    n.close_replaceWith = C(i.type);
                  }),
                  (a += " mfp-close-btn-in"))
                : t.wrap.append(C())),
            t.st.alignTop && (a += " mfp-align-top"),
            t.fixedContentPos
              ? t.wrap.css({
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                })
              : t.wrap.css({ top: b.scrollTop(), position: "absolute" }),
            (!1 === t.st.fixedBgPos ||
              ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
              t.bgOverlay.css({ height: i.height(), position: "absolute" }),
            t.st.enableEscapeKey &&
              i.on("keyup" + f, function (e) {
                27 === e.keyCode && t.close();
              }),
            b.on("resize" + f, function () {
              t.updateSize();
            }),
            t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && t.wrap.addClass(a);
          var p = (t.wH = b.height()),
            h = {};
          if (t.fixedContentPos && t._hasScrollBar(p)) {
            var g = t._getScrollbarSize();
            g && (h.marginRight = g);
          }
          t.fixedContentPos &&
            (t.isIE7
              ? e("body, html").css("overflow", "hidden")
              : (h.overflow = "hidden"));
          var v = t.st.mainClass;
          return (
            t.isIE7 && (v += " mfp-ie7"),
            v && t._addClassToMFP(v),
            t.updateItemHTML(),
            T("BuildControls"),
            e("html").css(h),
            t.bgOverlay
              .add(t.wrap)
              .prependTo(t.st.prependTo || e(document.body)),
            (t._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              t.content
                ? (t._addClassToMFP(m), t._setFocus())
                : t.bgOverlay.addClass(m),
                i.on("focusin" + f, t._onFocusIn);
            }, 16),
            (t.isOpen = !0),
            t.updateSize(p),
            T(u),
            n
          );
        }
        t.updateItemHTML();
      },
      close: function () {
        t.isOpen &&
          (T(l),
          (t.isOpen = !1),
          t.st.removalDelay && !t.isLowIE && t.supportsTransition
            ? (t._addClassToMFP(h),
              setTimeout(function () {
                t._close();
              }, t.st.removalDelay))
            : t._close());
      },
      _close: function () {
        T(o);
        var n = h + " " + m + " ";
        if (
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (n += t.st.mainClass + " "),
          t._removeClassFromMFP(n),
          t.fixedContentPos)
        ) {
          var r = { marginRight: "" };
          t.isIE7 ? e("body, html").css("overflow", "") : (r.overflow = ""),
            e("html").css(r);
        }
        i.off("keyup.mfp focusin" + f),
          t.ev.off(f),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn ||
            (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
            (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          (t.currItem = null),
          (t.content = null),
          (t.currTemplate = null),
          (t.prevHeight = 0),
          T("AfterClose");
      },
      updateSize: function (e) {
        if (t.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          t.wrap.css("height", i), (t.wH = i);
        } else t.wH = e || b.height();
        t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
      },
      updateItemHTML: function () {
        var n = t.items[t.index];
        t.contentContainer.detach(),
          t.content && t.content.detach(),
          n.parsed || (n = t.parseEl(t.index));
        var i = n.type;
        if (
          (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
          (t.currItem = n),
          !t.currTemplate[i])
        ) {
          var a = !!t.st[i] && t.st[i].markup;
          T("FirstMarkupParse", a), (t.currTemplate[i] = !a || e(a));
        }
        r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
        var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
          n,
          t.currTemplate[i]
        );
        t.appendContent(s, i),
          (n.preloaded = !0),
          T(d, n),
          (r = n.type),
          t.container.prepend(t.contentContainer),
          T("AfterChange");
      },
      appendContent: function (e, n) {
        (t.content = e),
          e
            ? t.st.showCloseBtn &&
              t.st.closeBtnInside &&
              !0 === t.currTemplate[n]
              ? t.content.find(".mfp-close").length || t.content.append(C())
              : (t.content = e)
            : (t.content = ""),
          T("BeforeAppend"),
          t.container.addClass("mfp-" + n + "-holder"),
          t.contentContainer.append(t.content);
      },
      parseEl: function (n) {
        var i,
          r = t.items[n];
        if (
          (r.tagName
            ? (r = { el: e(r) })
            : ((i = r.type), (r = { data: r, src: r.src })),
          r.el)
        ) {
          for (var a = t.types, s = 0; s < a.length; s++)
            if (r.el.hasClass("mfp-" + a[s])) {
              i = a[s];
              break;
            }
          (r.src = r.el.attr("data-mfp-src")),
            r.src || (r.src = r.el.attr("href"));
        }
        return (
          (r.type = i || t.st.type || "inline"),
          (r.index = n),
          (r.parsed = !0),
          (t.items[n] = r),
          T("ElementParse", r),
          t.items[n]
        );
      },
      addGroup: function (e, n) {
        var i = function (i) {
          (i.mfpEl = this), t._openClick(i, e, n);
        };
        n || (n = {});
        var r = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(r).on(r, i))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(r).on(r, n.delegate, i)
                : ((n.items = e), e.off(r).on(r, i)));
      },
      _openClick: function (n, i, r) {
        if (
          (void 0 !== r.midClick
            ? r.midClick
            : e.magnificPopup.defaults.midClick) ||
          !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)
        ) {
          var a =
            void 0 !== r.disableOn
              ? r.disableOn
              : e.magnificPopup.defaults.disableOn;
          if (a)
            if (e.isFunction(a)) {
              if (!a.call(t)) return !0;
            } else if (b.width() < a) return !0;
          n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
            (r.el = e(n.mfpEl)),
            r.delegate && (r.items = i.find(r.delegate)),
            t.open(r);
        }
      },
      updateStatus: function (e, i) {
        if (t.preloader) {
          n !== e && t.container.removeClass("mfp-s-" + n),
            i || "loading" !== e || (i = t.st.tLoading);
          var r = { status: e, text: i };
          T("UpdateStatus", r),
            (e = r.status),
            (i = r.text),
            t.preloader.html(i),
            t.preloader.find("a").on("click", function (e) {
              e.stopImmediatePropagation();
            }),
            t.container.addClass("mfp-s-" + e),
            (n = e);
        }
      },
      _checkIfClose: function (n) {
        if (!e(n).hasClass(g)) {
          var i = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;
          if (i && r) return !0;
          if (
            !t.content ||
            e(n).hasClass("mfp-close") ||
            (t.preloader && n === t.preloader[0])
          )
            return !0;
          if (n === t.content[0] || e.contains(t.content[0], n)) {
            if (i) return !0;
          } else if (r && e.contains(document, n)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        t.bgOverlay.addClass(e), t.wrap.addClass(e);
      },
      _removeClassFromMFP: function (e) {
        this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
      },
      _hasScrollBar: function (e) {
        return (
          (t.isIE7 ? i.height() : document.body.scrollHeight) >
          (e || b.height())
        );
      },
      _setFocus: function () {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
      },
      _onFocusIn: function (n) {
        if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target))
          return t._setFocus(), !1;
      },
      _parseMarkup: function (t, n, i) {
        var r;
        i.data && (n = e.extend(i.data, n)),
          T(c, [t, n, i]),
          e.each(n, function (n, i) {
            if (void 0 === i || !1 === i) return !0;
            if ((r = n.split("_")).length > 1) {
              var a = t.find(f + "-" + r[0]);
              if (a.length > 0) {
                var s = r[1];
                "replaceWith" === s
                  ? a[0] !== i[0] && a.replaceWith(i)
                  : "img" === s
                  ? a.is("img")
                    ? a.attr("src", i)
                    : a.replaceWith(
                        e("<img>").attr("src", i).attr("class", a.attr("class"))
                      )
                  : a.attr(r[1], i);
              }
            } else t.find(f + "-" + n).html(i);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === t.scrollbarSize) {
          var e = document.createElement("div");
          (e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(e),
            (t.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e);
        }
        return t.scrollbarSize;
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (t, n) {
          return (
            E(),
            ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = n || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, n) {
          n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (e.fn.magnificPopup = function (n) {
        E();
        var i = e(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var r,
              a = y ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            a.items
              ? (r = a.items[s])
              : ((r = i),
                a.delegate && (r = r.find(a.delegate)),
                (r = r.eq(s))),
              t._openClick({ mfpEl: r }, i, a);
          } else
            t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
          (n = e.extend(!0, {}, n)),
            y ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
            t.addGroup(i, n);
        return i;
      });
    var S,
      M,
      k,
      _ = "inline",
      I = function () {
        k && (M.after(k.addClass(S)).detach(), (k = null));
      };
    e.magnificPopup.registerModule(_, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          t.types.push(_),
            w(o + "." + _, function () {
              I();
            });
        },
        getInline: function (n, i) {
          if ((I(), n.src)) {
            var r = t.st.inline,
              a = e(n.src);
            if (a.length) {
              var s = a[0].parentNode;
              s &&
                s.tagName &&
                (M || ((S = r.hiddenClass), (M = x(S)), (S = "mfp-" + S)),
                (k = a.after(M).detach().removeClass(S))),
                t.updateStatus("ready");
            } else t.updateStatus("error", r.tNotFound), (a = e("<div>"));
            return (n.inlineElement = a), a;
          }
          return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
        },
      },
    });
    var P,
      D = "ajax",
      A = function () {
        P && e(document.body).removeClass(P);
      },
      L = function () {
        A(), t.req && t.req.abort();
      };
    e.magnificPopup.registerModule(D, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          t.types.push(D),
            (P = t.st.ajax.cursor),
            w(o + "." + D, L),
            w("BeforeChange." + D, L);
        },
        getAjax: function (n) {
          P && e(document.body).addClass(P), t.updateStatus("loading");
          var i = e.extend(
            {
              url: n.src,
              success: function (i, r, a) {
                var s = { data: i, xhr: a };
                T("ParseAjax", s),
                  t.appendContent(e(s.data), D),
                  (n.finished = !0),
                  A(),
                  t._setFocus(),
                  setTimeout(function () {
                    t.wrap.addClass(m);
                  }, 16),
                  t.updateStatus("ready"),
                  T("AjaxContentAdded");
              },
              error: function () {
                A(),
                  (n.finished = n.loadError = !0),
                  t.updateStatus(
                    "error",
                    t.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            t.st.ajax.settings
          );
          return (t.req = e.ajax(i)), "";
        },
      },
    });
    var O,
      $,
      z = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
          if (e.isFunction(i)) return i.call(t, n);
          if (n.el) return n.el.attr(i) || "";
        }
        return "";
      };
    e.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var n = t.st.image,
            i = ".image";
          t.types.push("image"),
            w(u + i, function () {
              "image" === t.currItem.type &&
                n.cursor &&
                e(document.body).addClass(n.cursor);
            }),
            w(o + i, function () {
              n.cursor && e(document.body).removeClass(n.cursor),
                b.off("resize" + f);
            }),
            w("Resize" + i, t.resizeImage),
            t.isLowIE && w("AfterChange", t.resizeImage);
        },
        resizeImage: function () {
          var e = t.currItem;
          if (e && e.img && t.st.image.verticalFit) {
            var n = 0;
            t.isLowIE &&
              (n =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - n);
          }
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            O && clearInterval(O),
            (e.isCheckingImgSize = !1),
            T("ImageHasSize", e),
            e.imgHidden &&
              (t.content && t.content.removeClass("mfp-loading"),
              (e.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var n = 0,
            i = e.img[0],
            r = function (a) {
              O && clearInterval(O),
                (O = setInterval(function () {
                  i.naturalWidth > 0
                    ? t._onImageHasSize(e)
                    : (n > 200 && clearInterval(O),
                      3 == ++n
                        ? r(10)
                        : 40 === n
                        ? r(50)
                        : 100 === n && r(500));
                }, a));
            };
          r(1);
        },
        getImage: function (n, i) {
          var r = 0,
            a = function () {
              n &&
                (n.img[0].complete
                  ? (n.img.off(".mfploader"),
                    n === t.currItem &&
                      (t._onImageHasSize(n), t.updateStatus("ready")),
                    (n.hasSize = !0),
                    (n.loaded = !0),
                    T("ImageLoadComplete"))
                  : ++r < 200
                  ? setTimeout(a, 100)
                  : s());
            },
            s = function () {
              n &&
                (n.img.off(".mfploader"),
                n === t.currItem &&
                  (t._onImageHasSize(n),
                  t.updateStatus("error", o.tError.replace("%url%", n.src))),
                (n.hasSize = !0),
                (n.loaded = !0),
                (n.loadError = !0));
            },
            o = t.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              n.el &&
                n.el.find("img").length &&
                (c.alt = n.el.find("img").attr("alt")),
              (n.img = e(c).on("load.mfploader", a).on("error.mfploader", s)),
              (c.src = n.src),
              l.is("img") && (n.img = n.img.clone()),
              (c = n.img[0]).naturalWidth > 0
                ? (n.hasSize = !0)
                : c.width || (n.hasSize = !1);
          }
          return (
            t._parseMarkup(i, { title: z(n), img_replaceWith: n.img }, n),
            t.resizeImage(),
            n.hasSize
              ? (O && clearInterval(O),
                n.loadError
                  ? (i.addClass("mfp-loading"),
                    t.updateStatus("error", o.tError.replace("%url%", n.src)))
                  : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
                i)
              : (t.updateStatus("loading"),
                (n.loading = !0),
                n.hasSize ||
                  ((n.imgHidden = !0),
                  i.addClass("mfp-loading"),
                  t.findImageSize(n)),
                i)
          );
        },
      },
    }),
      e.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (e) {
            return e.is("img") ? e : e.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var e,
              n = t.st.zoom,
              i = ".zoom";
            if (n.enabled && t.supportsTransition) {
              var r,
                a,
                s = n.duration,
                c = function (e) {
                  var t = e
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                    r = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    a = "transition";
                  return (
                    (r["-webkit-" + a] =
                      r["-moz-" + a] =
                      r["-o-" + a] =
                      r[a] =
                        i),
                    t.css(r),
                    t
                  );
                },
                u = function () {
                  t.content.css("visibility", "visible");
                };
              w("BuildControls" + i, function () {
                if (t._allowZoom()) {
                  if (
                    (clearTimeout(r),
                    t.content.css("visibility", "hidden"),
                    !(e = t._getItemToZoom()))
                  )
                    return void u();
                  (a = c(e)).css(t._getOffset()),
                    t.wrap.append(a),
                    (r = setTimeout(function () {
                      a.css(t._getOffset(!0)),
                        (r = setTimeout(function () {
                          u(),
                            setTimeout(function () {
                              a.remove(),
                                (e = a = null),
                                T("ZoomAnimationEnded");
                            }, 16);
                        }, s));
                    }, 16));
                }
              }),
                w(l + i, function () {
                  if (t._allowZoom()) {
                    if ((clearTimeout(r), (t.st.removalDelay = s), !e)) {
                      if (!(e = t._getItemToZoom())) return;
                      a = c(e);
                    }
                    a.css(t._getOffset(!0)),
                      t.wrap.append(a),
                      t.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        a.css(t._getOffset());
                      }, 16);
                  }
                }),
                w(o + i, function () {
                  t._allowZoom() && (u(), a && a.remove(), (e = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === t.currItem.type;
          },
          _getItemToZoom: function () {
            return !!t.currItem.hasSize && t.currItem.img;
          },
          _getOffset: function (n) {
            var i,
              r = (i = n
                ? t.currItem.img
                : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
              a = parseInt(i.css("padding-top"), 10),
              s = parseInt(i.css("padding-bottom"), 10);
            r.top -= e(window).scrollTop() - a;
            var o = {
              width: i.width(),
              height: (y ? i.innerHeight() : i[0].offsetHeight) - s - a,
            };
            return (
              void 0 === $ &&
                ($ = void 0 !== document.createElement("p").style.MozTransform),
              $
                ? (o["-moz-transform"] = o.transform =
                    "translate(" + r.left + "px," + r.top + "px)")
                : ((o.left = r.left), (o.top = r.top)),
              o
            );
          },
        },
      });
    var N = "iframe",
      j = function (e) {
        if (t.currTemplate[N]) {
          var n = t.currTemplate[N].find("iframe");
          n.length &&
            (e || (n[0].src = "//about:blank"),
            t.isIE8 && n.css("display", e ? "block" : "none"));
        }
      };
    e.magnificPopup.registerModule(N, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          t.types.push(N),
            w("BeforeChange", function (e, t, n) {
              t !== n && (t === N ? j() : n === N && j(!0));
            }),
            w(o + "." + N, function () {
              j();
            });
        },
        getIframe: function (n, i) {
          var r = n.src,
            a = t.st.iframe;
          e.each(a.patterns, function () {
            if (r.indexOf(this.index) > -1)
              return (
                this.id &&
                  (r =
                    "string" == typeof this.id
                      ? r.substr(
                          r.lastIndexOf(this.id) + this.id.length,
                          r.length
                        )
                      : this.id.call(this, r)),
                (r = this.src.replace("%id%", r)),
                !1
              );
          });
          var s = {};
          return (
            a.srcAction && (s[a.srcAction] = r),
            t._parseMarkup(i, s, n),
            t.updateStatus("ready"),
            i
          );
        },
      },
    });
    var F = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : e < 0 ? n + e : e;
      },
      H = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
      };
    e.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var n = t.st.gallery,
            r = ".mfp-gallery";
          if (((t.direction = !0), !n || !n.enabled)) return !1;
          (a += " mfp-gallery"),
            w(u + r, function () {
              n.navigateByImgClick &&
                t.wrap.on("click" + r, ".mfp-img", function () {
                  if (t.items.length > 1) return t.next(), !1;
                }),
                i.on("keydown" + r, function (e) {
                  37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                });
            }),
            w("UpdateStatus" + r, function (e, n) {
              n.text && (n.text = H(n.text, t.currItem.index, t.items.length));
            }),
            w(c + r, function (e, i, r, a) {
              var s = t.items.length;
              r.counter = s > 1 ? H(n.tCounter, a.index, s) : "";
            }),
            w("BuildControls" + r, function () {
              if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                var i = n.arrowMarkup,
                  r = (t.arrowLeft = e(
                    i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(g)),
                  a = (t.arrowRight = e(
                    i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")
                  ).addClass(g));
                r.click(function () {
                  t.prev();
                }),
                  a.click(function () {
                    t.next();
                  }),
                  t.container.append(r.add(a));
              }
            }),
            w(d + r, function () {
              t._preloadTimeout && clearTimeout(t._preloadTimeout),
                (t._preloadTimeout = setTimeout(function () {
                  t.preloadNearbyImages(), (t._preloadTimeout = null);
                }, 16));
            }),
            w(o + r, function () {
              i.off(r),
                t.wrap.off("click" + r),
                (t.arrowRight = t.arrowLeft = null);
            });
        },
        next: function () {
          (t.direction = !0), (t.index = F(t.index + 1)), t.updateItemHTML();
        },
        prev: function () {
          (t.direction = !1), (t.index = F(t.index - 1)), t.updateItemHTML();
        },
        goTo: function (e) {
          (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            r = Math.min(n[1], t.items.length);
          for (e = 1; e <= (t.direction ? r : i); e++)
            t._preloadItem(t.index + e);
          for (e = 1; e <= (t.direction ? i : r); e++)
            t._preloadItem(t.index - e);
        },
        _preloadItem: function (n) {
          if (((n = F(n)), !t.items[n].preloaded)) {
            var i = t.items[n];
            i.parsed || (i = t.parseEl(n)),
              T("LazyLoad", i),
              "image" === i.type &&
                (i.img = e('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    i.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (i.hasSize = !0), (i.loadError = !0), T("LazyLoadError", i);
                  })
                  .attr("src", i.src)),
              (i.preloaded = !0);
          }
        },
      },
    });
    var R = "retina";
    e.magnificPopup.registerModule(R, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              n = e.ratio;
            (n = isNaN(n) ? n() : n) > 1 &&
              (w("ImageHasSize." + R, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              w("ElementParse." + R, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
          }
        },
      },
    }),
      E();
  }),
  /*! PhotoSwipe - v4.1.3 - 2019-01-08
   * http://photoswipe.com
   * Copyright (c) 2019 Dmitry Semenov; */
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipe = t());
  })(this, function () {
    "use strict";
    return function (e, t, n, i) {
      var r = {
        features: null,
        bind: function (e, t, n, i) {
          var r = (i ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var a = 0; a < t.length; a++) t[a] && e[r](t[a], n, !1);
        },
        isArray: function (e) {
          return e instanceof Array;
        },
        createEl: function (e, t) {
          var n = document.createElement(t || "div");
          return e && (n.className = e), n;
        },
        getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop;
        },
        unbind: function (e, t, n) {
          r.bind(e, t, n, !0);
        },
        removeClass: function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className
            .replace(n, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function (e, t) {
          r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
        },
        hasClass: function (e, t) {
          return (
            e.className &&
            new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          );
        },
        getChildByClass: function (e, t) {
          for (var n = e.firstChild; n; ) {
            if (r.hasClass(n, t)) return n;
            n = n.nextSibling;
          }
        },
        arraySearch: function (e, t, n) {
          for (var i = e.length; i--; ) if (e[i][n] === t) return i;
          return -1;
        },
        extend: function (e, t, n) {
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              if (n && e.hasOwnProperty(i)) continue;
              e[i] = t[i];
            }
        },
        easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            },
          },
          cubic: {
            out: function (e) {
              return --e * e * e + 1;
            },
          },
        },
        detectFeatures: function () {
          if (r.features) return r.features;
          var e = r.createEl().style,
            t = "",
            n = {};
          if (
            ((n.oldIE = document.all && !document.addEventListener),
            (n.touch = "ontouchstart" in window),
            window.requestAnimationFrame &&
              ((n.raf = window.requestAnimationFrame),
              (n.caf = window.cancelAnimationFrame)),
            (n.pointerEvent =
              !!window.PointerEvent || navigator.msPointerEnabled),
            !n.pointerEvent)
          ) {
            var i = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              a &&
                a.length > 0 &&
                (a = parseInt(a[1], 10)) >= 1 &&
                a < 8 &&
                (n.isOldIOSPhone = !0);
            }
            var s = i.match(/Android\s([0-9\.]*)/),
              o = s ? s[1] : 0;
            (o = parseFloat(o)) >= 1 &&
              (o < 4.4 && (n.isOldAndroid = !0), (n.androidVersion = o)),
              (n.isMobileOpera = /opera mini|opera mobi/i.test(i));
          }
          for (
            var l,
              c,
              u = ["transform", "perspective", "animationName"],
              d = ["", "webkit", "Moz", "ms", "O"],
              p = 0;
            p < 4;
            p++
          ) {
            t = d[p];
            for (var f = 0; f < 3; f++)
              (l = u[f]),
                (c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                !n[l] && c in e && (n[l] = c);
            t &&
              !n.raf &&
              ((t = t.toLowerCase()),
              (n.raf = window[t + "RequestAnimationFrame"]),
              n.raf &&
                (n.caf =
                  window[t + "CancelAnimationFrame"] ||
                  window[t + "CancelRequestAnimationFrame"]));
          }
          if (!n.raf) {
            var m = 0;
            (n.raf = function (e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - m)),
                i = window.setTimeout(function () {
                  e(t + n);
                }, n);
              return (m = t + n), i;
            }),
              (n.caf = function (e) {
                clearTimeout(e);
              });
          }
          return (
            (n.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (r.features = n),
            n
          );
        },
      };
      r.detectFeatures(),
        r.features.oldIE &&
          (r.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (
              var r,
                a = (i ? "detach" : "attach") + "Event",
                s = function () {
                  n.handleEvent.call(n);
                },
                o = 0;
              o < t.length;
              o++
            )
              if ((r = t[o]))
                if ("object" == typeof n && n.handleEvent) {
                  if (i) {
                    if (!n["oldIE" + r]) return !1;
                  } else n["oldIE" + r] = s;
                  e[a]("on" + r, n["oldIE" + r]);
                } else e[a]("on" + r, n);
          });
      var a = this,
        s = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (e) {
            return "A" === e.tagName;
          },
          getDoubleTapZoom: function (e, t) {
            return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit",
        };
      r.extend(s, i);
      var o,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g,
        v,
        y,
        b,
        w,
        x,
        T,
        C,
        E,
        S,
        M,
        k,
        _,
        I,
        P,
        D,
        A,
        L,
        O,
        $,
        z,
        N,
        j,
        F,
        H,
        R,
        B,
        q,
        W,
        G,
        Y,
        X,
        V,
        U,
        Z,
        K,
        Q,
        J,
        ee,
        te,
        ne,
        ie,
        re,
        ae,
        se,
        oe,
        le,
        ce = { x: 0, y: 0 },
        ue = { x: 0, y: 0 },
        de = { x: 0, y: 0 },
        pe = {},
        fe = 0,
        me = {},
        he = { x: 0, y: 0 },
        ge = 0,
        ve = !0,
        ye = [],
        be = {},
        we = !1,
        xe = function (e, t) {
          r.extend(a, t.publicMethods), ye.push(e);
        },
        Te = function (e) {
          var t = Rt();
          return e > t - 1 ? e - t : e < 0 ? t + e : e;
        },
        Ce = {},
        Ee = function (e, t) {
          return Ce[e] || (Ce[e] = []), Ce[e].push(t);
        },
        Se = function (e) {
          var t = Ce[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var i = 0; i < t.length; i++) t[i].apply(a, n);
          }
        },
        Me = function () {
          return new Date().getTime();
        },
        ke = function (e) {
          (se = e), (a.bg.style.opacity = e * s.bgOpacity);
        },
        _e = function (e, t, n, i, r) {
          (!we || (r && r !== a.currItem)) &&
            (i /= r ? r.fitRatio : a.currItem.fitRatio),
            (e[_] = y + t + "px, " + n + "px" + b + " scale(" + i + ")");
        },
        Ie = function (e) {
          te &&
            (e &&
              (g > a.currItem.fitRatio
                ? we || (Zt(a.currItem, !1, !0), (we = !0))
                : we && (Zt(a.currItem), (we = !1))),
            _e(te, de.x, de.y, g));
        },
        Pe = function (e) {
          e.container &&
            _e(
              e.container.style,
              e.initialPosition.x,
              e.initialPosition.y,
              e.initialZoomLevel,
              e
            );
        },
        De = function (e, t) {
          t[_] = y + e + "px, 0px" + b;
        },
        Ae = function (e, t) {
          if (!s.loop && t) {
            var n = u + (he.x * fe - e) / he.x,
              i = Math.round(e - ut.x);
            ((n < 0 && i > 0) || (n >= Rt() - 1 && i < 0)) &&
              (e = ut.x + i * s.mainScrollEndFriction);
          }
          (ut.x = e), De(e, d);
        },
        Le = function (e, t) {
          var n = dt[e] - me[e];
          return ue[e] + ce[e] + n - n * (t / v);
        },
        Oe = function (e, t) {
          (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
        },
        $e = function (e) {
          (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
        },
        ze = null,
        Ne = function () {
          ze &&
            (r.unbind(document, "mousemove", Ne),
            r.addClass(e, "pswp--has_mouse"),
            (s.mouseUsed = !0),
            Se("mouseUsed")),
            (ze = setTimeout(function () {
              ze = null;
            }, 100));
        },
        je = function (e, t) {
          var n = Yt(a.currItem, pe, e);
          return t && (ee = n), n;
        },
        Fe = function (e) {
          return e || (e = a.currItem), e.initialZoomLevel;
        },
        He = function (e) {
          return e || (e = a.currItem), e.w > 0 ? s.maxSpreadZoom : 1;
        },
        Re = function (e, t, n, i) {
          return i === a.currItem.initialZoomLevel
            ? ((n[e] = a.currItem.initialPosition[e]), !0)
            : ((n[e] = Le(e, i)),
              n[e] > t.min[e]
                ? ((n[e] = t.min[e]), !0)
                : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
        },
        Be = function (e) {
          var t = "";
          s.escKey && 27 === e.keyCode
            ? (t = "close")
            : s.arrowKeys &&
              (37 === e.keyCode
                ? (t = "prev")
                : 39 === e.keyCode && (t = "next")),
            t &&
              (e.ctrlKey ||
                e.altKey ||
                e.shiftKey ||
                e.metaKey ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                a[t]()));
        },
        qe = function (e) {
          e && (V || X || ne || q) && (e.preventDefault(), e.stopPropagation());
        },
        We = function () {
          a.setScrollOffset(0, r.getScrollY());
        },
        Ge = {},
        Ye = 0,
        Xe = function (e) {
          Ge[e] && (Ge[e].raf && A(Ge[e].raf), Ye--, delete Ge[e]);
        },
        Ve = function (e) {
          Ge[e] && Xe(e), Ge[e] || (Ye++, (Ge[e] = {}));
        },
        Ue = function () {
          for (var e in Ge) Ge.hasOwnProperty(e) && Xe(e);
        },
        Ze = function (e, t, n, i, r, a, s) {
          var o,
            l = Me();
          Ve(e);
          var c = function () {
            if (Ge[e]) {
              if ((o = Me() - l) >= i) return Xe(e), a(n), void (s && s());
              a((n - t) * r(o / i) + t), (Ge[e].raf = D(c));
            }
          };
          c();
        },
        Ke = {
          shout: Se,
          listen: Ee,
          viewportSize: pe,
          options: s,
          isMainScrollAnimating: function () {
            return ne;
          },
          getZoomLevel: function () {
            return g;
          },
          getCurrentIndex: function () {
            return u;
          },
          isDragging: function () {
            return G;
          },
          isZooming: function () {
            return Q;
          },
          setScrollOffset: function (e, t) {
            (me.x = e), (z = me.y = t), Se("updateScrollOffset", me);
          },
          applyZoomPan: function (e, t, n, i) {
            (de.x = t), (de.y = n), (g = e), Ie(i);
          },
          init: function () {
            if (!o && !l) {
              var n;
              (a.framework = r),
                (a.template = e),
                (a.bg = r.getChildByClass(e, "pswp__bg")),
                (L = e.className),
                (o = !0),
                (N = r.detectFeatures()),
                (D = N.raf),
                (A = N.caf),
                (_ = N.transform),
                ($ = N.oldIE),
                (a.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap")),
                (a.container = r.getChildByClass(
                  a.scrollWrap,
                  "pswp__container"
                )),
                (d = a.container.style),
                (a.itemHolders = T =
                  [
                    { el: a.container.children[0], wrap: 0, index: -1 },
                    { el: a.container.children[1], wrap: 0, index: -1 },
                    { el: a.container.children[2], wrap: 0, index: -1 },
                  ]),
                (T[0].el.style.display = T[2].el.style.display = "none"),
                (function () {
                  if (_) {
                    var t = N.perspective && !P;
                    return (
                      (y = "translate" + (t ? "3d(" : "(")),
                      void (b = N.perspective ? ", 0px)" : ")")
                    );
                  }
                  (_ = "left"),
                    r.addClass(e, "pswp--ie"),
                    (De = function (e, t) {
                      t.left = e + "px";
                    }),
                    (Pe = function (e) {
                      var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        r = t * e.h;
                      (n.width = i + "px"),
                        (n.height = r + "px"),
                        (n.left = e.initialPosition.x + "px"),
                        (n.top = e.initialPosition.y + "px");
                    }),
                    (Ie = function () {
                      if (te) {
                        var e = te,
                          t = a.currItem,
                          n = t.fitRatio > 1 ? 1 : t.fitRatio,
                          i = n * t.w,
                          r = n * t.h;
                        (e.width = i + "px"),
                          (e.height = r + "px"),
                          (e.left = de.x + "px"),
                          (e.top = de.y + "px");
                      }
                    });
                })(),
                (h = {
                  resize: a.updateSize,
                  orientationchange: function () {
                    clearTimeout(j),
                      (j = setTimeout(function () {
                        pe.x !== a.scrollWrap.clientWidth && a.updateSize();
                      }, 500));
                  },
                  scroll: We,
                  keydown: Be,
                  click: qe,
                });
              var i = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
              for (
                (N.animationName && N.transform && !i) ||
                  (s.showAnimationDuration = s.hideAnimationDuration = 0),
                  n = 0;
                n < ye.length;
                n++
              )
                a["init" + ye[n]]();
              t && (a.ui = new t(a, r)).init(),
                Se("firstUpdate"),
                (u = u || s.index || 0),
                (isNaN(u) || u < 0 || u >= Rt()) && (u = 0),
                (a.currItem = Ht(u)),
                (N.isOldIOSPhone || N.isOldAndroid) && (ve = !1),
                e.setAttribute("aria-hidden", "false"),
                s.modal &&
                  (ve
                    ? (e.style.position = "fixed")
                    : ((e.style.position = "absolute"),
                      (e.style.top = r.getScrollY() + "px"))),
                void 0 === z && (Se("initialLayout"), (z = O = r.getScrollY()));
              var c = "pswp--open ";
              for (
                s.mainClass && (c += s.mainClass + " "),
                  s.showHideOpacity && (c += "pswp--animate_opacity "),
                  c += P ? "pswp--touch" : "pswp--notouch",
                  c += N.animationName ? " pswp--css_animation" : "",
                  c += N.svg ? " pswp--svg" : "",
                  r.addClass(e, c),
                  a.updateSize(),
                  p = -1,
                  ge = null,
                  n = 0;
                n < 3;
                n++
              )
                De((n + p) * he.x, T[n].el.style);
              $ || r.bind(a.scrollWrap, m, a),
                Ee("initialZoomInEnd", function () {
                  a.setContent(T[0], u - 1),
                    a.setContent(T[2], u + 1),
                    (T[0].el.style.display = T[2].el.style.display = "block"),
                    s.focus && e.focus(),
                    r.bind(document, "keydown", a),
                    N.transform && r.bind(a.scrollWrap, "click", a),
                    s.mouseUsed || r.bind(document, "mousemove", Ne),
                    r.bind(window, "resize scroll orientationchange", a),
                    Se("bindEvents");
                }),
                a.setContent(T[1], u),
                a.updateCurrItem(),
                Se("afterInit"),
                ve ||
                  (w = setInterval(function () {
                    Ye ||
                      G ||
                      Q ||
                      g !== a.currItem.initialZoomLevel ||
                      a.updateSize();
                  }, 1e3)),
                r.addClass(e, "pswp--visible");
            }
          },
          close: function () {
            o &&
              ((o = !1),
              (l = !0),
              Se("close"),
              r.unbind(window, "resize scroll orientationchange", a),
              r.unbind(window, "scroll", h.scroll),
              r.unbind(document, "keydown", a),
              r.unbind(document, "mousemove", Ne),
              N.transform && r.unbind(a.scrollWrap, "click", a),
              G && r.unbind(window, f, a),
              clearTimeout(j),
              Se("unbindEvents"),
              Bt(a.currItem, null, !0, a.destroy));
          },
          destroy: function () {
            Se("destroy"),
              zt && clearTimeout(zt),
              e.setAttribute("aria-hidden", "true"),
              (e.className = L),
              w && clearInterval(w),
              r.unbind(a.scrollWrap, m, a),
              r.unbind(window, "scroll", a),
              mt(),
              Ue(),
              (Ce = null);
          },
          panTo: function (e, t, n) {
            n ||
              (e > ee.min.x ? (e = ee.min.x) : e < ee.max.x && (e = ee.max.x),
              t > ee.min.y ? (t = ee.min.y) : t < ee.max.y && (t = ee.max.y)),
              (de.x = e),
              (de.y = t),
              Ie();
          },
          handleEvent: function (e) {
            (e = e || window.event), h[e.type] && h[e.type](e);
          },
          goTo: function (e) {
            var t = (e = Te(e)) - u;
            (ge = t),
              (u = e),
              (a.currItem = Ht(u)),
              (fe -= t),
              Ae(he.x * fe),
              Ue(),
              (ne = !1),
              a.updateCurrItem();
          },
          next: function () {
            a.goTo(u + 1);
          },
          prev: function () {
            a.goTo(u - 1);
          },
          updateCurrZoomItem: function (e) {
            if ((e && Se("beforeChange", 0), T[1].el.children.length)) {
              var t = T[1].el.children[0];
              te = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
            } else te = null;
            (ee = a.currItem.bounds),
              (v = g = a.currItem.initialZoomLevel),
              (de.x = ee.center.x),
              (de.y = ee.center.y),
              e && Se("afterChange");
          },
          invalidateCurrItems: function () {
            x = !0;
            for (var e = 0; e < 3; e++)
              T[e].item && (T[e].item.needsUpdate = !0);
          },
          updateCurrItem: function (e) {
            if (0 !== ge) {
              var t,
                n = Math.abs(ge);
              if (!(e && n < 2)) {
                (a.currItem = Ht(u)),
                  (we = !1),
                  Se("beforeChange", ge),
                  n >= 3 && ((p += ge + (ge > 0 ? -3 : 3)), (n = 3));
                for (var i = 0; i < n; i++)
                  ge > 0
                    ? ((t = T.shift()),
                      (T[2] = t),
                      p++,
                      De((p + 2) * he.x, t.el.style),
                      a.setContent(t, u - n + i + 1 + 1))
                    : ((t = T.pop()),
                      T.unshift(t),
                      p--,
                      De(p * he.x, t.el.style),
                      a.setContent(t, u + n - i - 1 - 1));
                if (te && 1 === Math.abs(ge)) {
                  var r = Ht(C);
                  r.initialZoomLevel !== g && (Yt(r, pe), Zt(r), Pe(r));
                }
                (ge = 0), a.updateCurrZoomItem(), (C = u), Se("afterChange");
              }
            }
          },
          updateSize: function (t) {
            if (!ve && s.modal) {
              var n = r.getScrollY();
              if (
                (z !== n && ((e.style.top = n + "px"), (z = n)),
                !t && be.x === window.innerWidth && be.y === window.innerHeight)
              )
                return;
              (be.x = window.innerWidth),
                (be.y = window.innerHeight),
                (e.style.height = be.y + "px");
            }
            if (
              ((pe.x = a.scrollWrap.clientWidth),
              (pe.y = a.scrollWrap.clientHeight),
              We(),
              (he.x = pe.x + Math.round(pe.x * s.spacing)),
              (he.y = pe.y),
              Ae(he.x * fe),
              Se("beforeResize"),
              void 0 !== p)
            ) {
              for (var i, o, l, c = 0; c < 3; c++)
                (i = T[c]),
                  De((c + p) * he.x, i.el.style),
                  (l = u + c - 1),
                  s.loop && Rt() > 2 && (l = Te(l)),
                  (o = Ht(l)) && (x || o.needsUpdate || !o.bounds)
                    ? (a.cleanSlide(o),
                      a.setContent(i, l),
                      1 === c && ((a.currItem = o), a.updateCurrZoomItem(!0)),
                      (o.needsUpdate = !1))
                    : -1 === i.index && l >= 0 && a.setContent(i, l),
                  o && o.container && (Yt(o, pe), Zt(o), Pe(o));
              x = !1;
            }
            (v = g = a.currItem.initialZoomLevel),
              (ee = a.currItem.bounds) &&
                ((de.x = ee.center.x), (de.y = ee.center.y), Ie(!0)),
              Se("resize");
          },
          zoomTo: function (e, t, n, i, a) {
            t &&
              ((v = g),
              (dt.x = Math.abs(t.x) - de.x),
              (dt.y = Math.abs(t.y) - de.y),
              Oe(ue, de));
            var s = je(e, !1),
              o = {};
            Re("x", s, o, e), Re("y", s, o, e);
            var l = g,
              c = de.x,
              u = de.y;
            $e(o);
            var d = function (t) {
              1 === t
                ? ((g = e), (de.x = o.x), (de.y = o.y))
                : ((g = (e - l) * t + l),
                  (de.x = (o.x - c) * t + c),
                  (de.y = (o.y - u) * t + u)),
                a && a(t),
                Ie(1 === t);
            };
            n ? Ze("customZoomTo", 0, 1, n, i || r.easing.sine.inOut, d) : d(1);
          },
        },
        Qe = {},
        Je = {},
        et = {},
        tt = {},
        nt = {},
        it = [],
        rt = {},
        at = [],
        st = {},
        ot = 0,
        lt = { x: 0, y: 0 },
        ct = 0,
        ut = { x: 0, y: 0 },
        dt = { x: 0, y: 0 },
        pt = { x: 0, y: 0 },
        ft = function (e, t) {
          return (
            (st.x = Math.abs(e.x - t.x)),
            (st.y = Math.abs(e.y - t.y)),
            Math.sqrt(st.x * st.x + st.y * st.y)
          );
        },
        mt = function () {
          U && (A(U), (U = null));
        },
        ht = function () {
          G && ((U = D(ht)), It());
        },
        gt = function (e, t) {
          return (
            !(!e || e === document) &&
            !(
              e.getAttribute("class") &&
              e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
            ) &&
            (t(e) ? e : gt(e.parentNode, t))
          );
        },
        vt = {},
        yt = function (e, t) {
          return (
            (vt.prevent = !gt(e.target, s.isClickableElement)),
            Se("preventDragEvent", e, t, vt),
            vt.prevent
          );
        },
        bt = function (e, t) {
          return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
        },
        wt = function (e, t, n) {
          (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
        },
        xt = function () {
          var e = de.y - a.currItem.initialPosition.y;
          return 1 - Math.abs(e / (pe.y / 2));
        },
        Tt = {},
        Ct = {},
        Et = [],
        St = function (e) {
          for (; Et.length > 0; ) Et.pop();
          return (
            I
              ? ((le = 0),
                it.forEach(function (e) {
                  0 === le ? (Et[0] = e) : 1 === le && (Et[1] = e), le++;
                }))
              : e.type.indexOf("touch") > -1
              ? e.touches &&
                e.touches.length > 0 &&
                ((Et[0] = bt(e.touches[0], Tt)),
                e.touches.length > 1 && (Et[1] = bt(e.touches[1], Ct)))
              : ((Tt.x = e.pageX),
                (Tt.y = e.pageY),
                (Tt.id = ""),
                (Et[0] = Tt)),
            Et
          );
        },
        Mt = function (e, t) {
          var n,
            i,
            r,
            o,
            l = de[e] + t[e],
            c = t[e] > 0,
            u = ut.x + t.x,
            d = ut.x - rt.x;
          if (
            ((n = l > ee.min[e] || l < ee.max[e] ? s.panEndFriction : 1),
            (l = de[e] + t[e] * n),
            (s.allowPanToNext || g === a.currItem.initialZoomLevel) &&
              (te
                ? "h" !== ie ||
                  "x" !== e ||
                  X ||
                  (c
                    ? (l > ee.min[e] &&
                        ((n = s.panEndFriction),
                        ee.min[e],
                        (i = ee.min[e] - ue[e])),
                      (i <= 0 || d < 0) && Rt() > 1
                        ? ((o = u), d < 0 && u > rt.x && (o = rt.x))
                        : ee.min.x !== ee.max.x && (r = l))
                    : (l < ee.max[e] &&
                        ((n = s.panEndFriction),
                        ee.max[e],
                        (i = ue[e] - ee.max[e])),
                      (i <= 0 || d > 0) && Rt() > 1
                        ? ((o = u), d > 0 && u < rt.x && (o = rt.x))
                        : ee.min.x !== ee.max.x && (r = l)))
                : (o = u),
              "x" === e))
          )
            return (
              void 0 !== o && (Ae(o, !0), (Z = o !== rt.x)),
              ee.min.x !== ee.max.x &&
                (void 0 !== r ? (de.x = r) : Z || (de.x += t.x * n)),
              void 0 !== o
            );
          ne || Z || (g > a.currItem.fitRatio && (de[e] += t[e] * n));
        },
        kt = function (e) {
          if (!("mousedown" === e.type && e.button > 0))
            if (Ft) e.preventDefault();
            else if (!W || "mousedown" !== e.type) {
              if ((yt(e, !0) && e.preventDefault(), Se("pointerDown"), I)) {
                var t = r.arraySearch(it, e.pointerId, "id");
                t < 0 && (t = it.length),
                  (it[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
              }
              var n = St(e),
                i = n.length;
              (K = null),
                Ue(),
                (G && 1 !== i) ||
                  ((G = re = !0),
                  r.bind(window, f, a),
                  (B = oe = ae = q = Z = V = Y = X = !1),
                  (ie = null),
                  Se("firstTouchStart", n),
                  Oe(ue, de),
                  (ce.x = ce.y = 0),
                  Oe(tt, n[0]),
                  Oe(nt, tt),
                  (rt.x = he.x * fe),
                  (at = [{ x: tt.x, y: tt.y }]),
                  (H = F = Me()),
                  je(g, !0),
                  mt(),
                  ht()),
                !Q &&
                  i > 1 &&
                  !ne &&
                  !Z &&
                  ((v = g),
                  (X = !1),
                  (Q = Y = !0),
                  (ce.y = ce.x = 0),
                  Oe(ue, de),
                  Oe(Qe, n[0]),
                  Oe(Je, n[1]),
                  wt(Qe, Je, pt),
                  (dt.x = Math.abs(pt.x) - de.x),
                  (dt.y = Math.abs(pt.y) - de.y),
                  (J = ft(Qe, Je)));
            }
        },
        _t = function (e) {
          if ((e.preventDefault(), I)) {
            var t = r.arraySearch(it, e.pointerId, "id");
            if (t > -1) {
              var n = it[t];
              (n.x = e.pageX), (n.y = e.pageY);
            }
          }
          if (G) {
            var i = St(e);
            if (ie || V || Q) K = i;
            else if (ut.x !== he.x * fe) ie = "h";
            else {
              var a = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
              Math.abs(a) >= 10 && ((ie = a > 0 ? "h" : "v"), (K = i));
            }
          }
        },
        It = function () {
          if (K) {
            var e = K.length;
            if (0 !== e)
              if (
                (Oe(Qe, K[0]),
                (et.x = Qe.x - tt.x),
                (et.y = Qe.y - tt.y),
                Q && e > 1)
              ) {
                if (
                  ((tt.x = Qe.x),
                  (tt.y = Qe.y),
                  !et.x &&
                    !et.y &&
                    (function (e, t) {
                      return e.x === t.x && e.y === t.y;
                    })(K[1], Je))
                )
                  return;
                Oe(Je, K[1]), X || ((X = !0), Se("zoomGestureStarted"));
                var t = ft(Qe, Je),
                  n = Ot(t);
                n >
                  a.currItem.initialZoomLevel +
                    a.currItem.initialZoomLevel / 15 && (oe = !0);
                var i = 1,
                  r = Fe(),
                  o = He();
                if (n < r)
                  if (
                    s.pinchToClose &&
                    !oe &&
                    v <= a.currItem.initialZoomLevel
                  ) {
                    var l = 1 - (r - n) / (r / 1.2);
                    ke(l), Se("onPinchClose", l), (ae = !0);
                  } else
                    (i = (r - n) / r) > 1 && (i = 1), (n = r - i * (r / 3));
                else
                  n > o &&
                    ((i = (n - o) / (6 * r)) > 1 && (i = 1), (n = o + i * r));
                i < 0 && (i = 0),
                  wt(Qe, Je, lt),
                  (ce.x += lt.x - pt.x),
                  (ce.y += lt.y - pt.y),
                  Oe(pt, lt),
                  (de.x = Le("x", n)),
                  (de.y = Le("y", n)),
                  (B = n > g),
                  (g = n),
                  Ie();
              } else {
                if (!ie) return;
                if (
                  (re &&
                    ((re = !1),
                    Math.abs(et.x) >= 10 && (et.x -= K[0].x - nt.x),
                    Math.abs(et.y) >= 10 && (et.y -= K[0].y - nt.y)),
                  (tt.x = Qe.x),
                  (tt.y = Qe.y),
                  0 === et.x && 0 === et.y)
                )
                  return;
                if (
                  "v" === ie &&
                  s.closeOnVerticalDrag &&
                  "fit" === s.scaleMode &&
                  g === a.currItem.initialZoomLevel
                ) {
                  (ce.y += et.y), (de.y += et.y);
                  var c = xt();
                  return (q = !0), Se("onVerticalDrag", c), ke(c), void Ie();
                }
                !(function (e, t, n) {
                  if (e - H > 50) {
                    var i = at.length > 2 ? at.shift() : {};
                    (i.x = t), (i.y = n), at.push(i), (H = e);
                  }
                })(Me(), Qe.x, Qe.y),
                  (V = !0),
                  (ee = a.currItem.bounds),
                  Mt("x", et) || (Mt("y", et), $e(de), Ie());
              }
          }
        },
        Pt = function (e) {
          if (N.isOldAndroid) {
            if (W && "mouseup" === e.type) return;
            e.type.indexOf("touch") > -1 &&
              (clearTimeout(W),
              (W = setTimeout(function () {
                W = 0;
              }, 600)));
          }
          var t;
          if ((Se("pointerUp"), yt(e, !1) && e.preventDefault(), I)) {
            var n = r.arraySearch(it, e.pointerId, "id");
            n > -1 &&
              ((t = it.splice(n, 1)[0]),
              navigator.msPointerEnabled
                ? ((t.type = { 4: "mouse", 2: "touch", 3: "pen" }[
                    e.pointerType
                  ]),
                  t.type || (t.type = e.pointerType || "mouse"))
                : (t.type = e.pointerType || "mouse"));
          }
          var i,
            o = St(e),
            l = o.length;
          if (("mouseup" === e.type && (l = 0), 2 === l)) return (K = null), !0;
          1 === l && Oe(nt, o[0]),
            0 !== l ||
              ie ||
              ne ||
              (t ||
                ("mouseup" === e.type
                  ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
                  : e.changedTouches &&
                    e.changedTouches[0] &&
                    (t = {
                      x: e.changedTouches[0].pageX,
                      y: e.changedTouches[0].pageY,
                      type: "touch",
                    })),
              Se("touchRelease", e, t));
          var c = -1;
          if (
            (0 === l &&
              ((G = !1),
              r.unbind(window, f, a),
              mt(),
              Q ? (c = 0) : -1 !== ct && (c = Me() - ct)),
            (ct = 1 === l ? Me() : -1),
            (i = -1 !== c && c < 150 ? "zoom" : "swipe"),
            Q &&
              l < 2 &&
              ((Q = !1),
              1 === l && (i = "zoomPointerUp"),
              Se("zoomGestureEnded")),
            (K = null),
            V || X || ne || q)
          )
            if ((Ue(), R || (R = Dt()), R.calculateSwipeSpeed("x"), q))
              if (xt() < s.verticalDragRange) a.close();
              else {
                var u = de.y,
                  d = se;
                Ze("verticalDrag", 0, 1, 300, r.easing.cubic.out, function (e) {
                  (de.y = (a.currItem.initialPosition.y - u) * e + u),
                    ke((1 - d) * e + d),
                    Ie();
                }),
                  Se("onVerticalDrag", 1);
              }
            else {
              if ((Z || ne) && 0 === l) {
                if (Lt(i, R)) return;
                i = "zoomPointerUp";
              }
              ne ||
                ("swipe" === i ? !Z && g > a.currItem.fitRatio && At(R) : $t());
            }
        },
        Dt = function () {
          var e,
            t,
            n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (i) {
                at.length > 1
                  ? ((e = Me() - H + 50), (t = at[at.length - 2][i]))
                  : ((e = Me() - F), (t = nt[i])),
                  (n.lastFlickOffset[i] = tt[i] - t),
                  (n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i])),
                  n.lastFlickDist[i] > 20
                    ? (n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e)
                    : (n.lastFlickSpeed[i] = 0),
                  Math.abs(n.lastFlickSpeed[i]) < 0.1 &&
                    (n.lastFlickSpeed[i] = 0),
                  (n.slowDownRatio[i] = 0.95),
                  (n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i]),
                  (n.speedDecelerationRatio[i] = 1);
              },
              calculateOverBoundsAnimOffset: function (e, t) {
                n.backAnimStarted[e] ||
                  (de[e] > ee.min[e]
                    ? (n.backAnimDestination[e] = ee.min[e])
                    : de[e] < ee.max[e] &&
                      (n.backAnimDestination[e] = ee.max[e]),
                  void 0 !== n.backAnimDestination[e] &&
                    ((n.slowDownRatio[e] = 0.7),
                    (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                    n.speedDecelerationRatioAbs[e] < 0.05 &&
                      ((n.lastFlickSpeed[e] = 0),
                      (n.backAnimStarted[e] = !0),
                      Ze(
                        "bounceZoomPan" + e,
                        de[e],
                        n.backAnimDestination[e],
                        t || 300,
                        r.easing.sine.out,
                        function (t) {
                          (de[e] = t), Ie();
                        }
                      ))));
              },
              calculateAnimOffset: function (e) {
                n.backAnimStarted[e] ||
                  ((n.speedDecelerationRatio[e] =
                    n.speedDecelerationRatio[e] *
                    (n.slowDownRatio[e] +
                      n.slowDownRatioReverse[e] -
                      (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                  (n.speedDecelerationRatioAbs[e] = Math.abs(
                    n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                  )),
                  (n.distanceOffset[e] =
                    n.lastFlickSpeed[e] *
                    n.speedDecelerationRatio[e] *
                    n.timeDiff),
                  (de[e] += n.distanceOffset[e]));
              },
              panAnimLoop: function () {
                if (
                  Ge.zoomPan &&
                  ((Ge.zoomPan.raf = D(n.panAnimLoop)),
                  (n.now = Me()),
                  (n.timeDiff = n.now - n.lastNow),
                  (n.lastNow = n.now),
                  n.calculateAnimOffset("x"),
                  n.calculateAnimOffset("y"),
                  Ie(),
                  n.calculateOverBoundsAnimOffset("x"),
                  n.calculateOverBoundsAnimOffset("y"),
                  n.speedDecelerationRatioAbs.x < 0.05 &&
                    n.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (de.x = Math.round(de.x)),
                    (de.y = Math.round(de.y)),
                    Ie(),
                    void Xe("zoomPan")
                  );
              },
            };
          return n;
        },
        At = function (e) {
          if (
            (e.calculateSwipeSpeed("y"),
            (ee = a.currItem.bounds),
            (e.backAnimDestination = {}),
            (e.backAnimStarted = {}),
            Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
              Math.abs(e.lastFlickSpeed.y) <= 0.05)
          )
            return (
              (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y =
                0),
              e.calculateOverBoundsAnimOffset("x"),
              e.calculateOverBoundsAnimOffset("y"),
              !0
            );
          Ve("zoomPan"), (e.lastNow = Me()), e.panAnimLoop();
        },
        Lt = function (e, t) {
          var n, i, o;
          if ((ne || (ot = u), "swipe" === e)) {
            var l = tt.x - nt.x,
              c = t.lastFlickDist.x < 10;
            l > 30 && (c || t.lastFlickOffset.x > 20)
              ? (i = -1)
              : l < -30 && (c || t.lastFlickOffset.x < -20) && (i = 1);
          }
          i &&
            ((u += i) < 0
              ? ((u = s.loop ? Rt() - 1 : 0), (o = !0))
              : u >= Rt() && ((u = s.loop ? 0 : Rt() - 1), (o = !0)),
            (o && !s.loop) || ((ge += i), (fe -= i), (n = !0)));
          var d,
            p = he.x * fe,
            f = Math.abs(p - ut.x);
          return (
            n || p > ut.x == t.lastFlickSpeed.x > 0
              ? ((d =
                  Math.abs(t.lastFlickSpeed.x) > 0
                    ? f / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (d = Math.min(d, 400)),
                (d = Math.max(d, 250)))
              : (d = 333),
            ot === u && (n = !1),
            (ne = !0),
            Se("mainScrollAnimStart"),
            Ze("mainScroll", ut.x, p, d, r.easing.cubic.out, Ae, function () {
              Ue(),
                (ne = !1),
                (ot = -1),
                (n || ot !== u) && a.updateCurrItem(),
                Se("mainScrollAnimComplete");
            }),
            n && a.updateCurrItem(!0),
            n
          );
        },
        Ot = function (e) {
          return (1 / J) * e * v;
        },
        $t = function () {
          var e = g,
            t = Fe(),
            n = He();
          g < t ? (e = t) : g > n && (e = n);
          var i,
            s = se;
          return ae && !B && !oe && g < t
            ? (a.close(), !0)
            : (ae &&
                (i = function (e) {
                  ke((1 - s) * e + s);
                }),
              a.zoomTo(e, 0, 200, r.easing.cubic.out, i),
              !0);
        };
      xe("Gestures", {
        publicMethods: {
          initGestures: function () {
            var e = function (e, t, n, i, r) {
              (E = e + t), (S = e + n), (M = e + i), (k = r ? e + r : "");
            };
            (I = N.pointerEvent) && N.touch && (N.touch = !1),
              I
                ? navigator.msPointerEnabled
                  ? e("MSPointer", "Down", "Move", "Up", "Cancel")
                  : e("pointer", "down", "move", "up", "cancel")
                : N.touch
                ? (e("touch", "start", "move", "end", "cancel"), (P = !0))
                : e("mouse", "down", "move", "up"),
              (f = S + " " + M + " " + k),
              (m = E),
              I &&
                !P &&
                (P =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (a.likelyTouchDevice = P),
              (h[E] = kt),
              (h[S] = _t),
              (h[M] = Pt),
              k && (h[k] = h[M]),
              N.touch &&
                ((m += " mousedown"),
                (f += " mousemove mouseup"),
                (h.mousedown = h[E]),
                (h.mousemove = h[S]),
                (h.mouseup = h[M])),
              P || (s.allowPanToNext = !1);
          },
        },
      });
      var zt,
        Nt,
        jt,
        Ft,
        Ht,
        Rt,
        Bt = function (t, n, i, o) {
          var l;
          zt && clearTimeout(zt),
            (Ft = !0),
            (jt = !0),
            t.initialLayout
              ? ((l = t.initialLayout), (t.initialLayout = null))
              : (l = s.getThumbBoundsFn && s.getThumbBoundsFn(u));
          var d,
            p,
            f = i ? s.hideAnimationDuration : s.showAnimationDuration,
            m = function () {
              Xe("initialZoom"),
                i
                  ? (a.template.removeAttribute("style"),
                    a.bg.removeAttribute("style"))
                  : (ke(1),
                    n && (n.style.display = "block"),
                    r.addClass(e, "pswp--animated-in"),
                    Se("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                o && o(),
                (Ft = !1);
            };
          if (!f || !l || void 0 === l.x)
            return (
              Se("initialZoom" + (i ? "Out" : "In")),
              (g = t.initialZoomLevel),
              Oe(de, t.initialPosition),
              Ie(),
              (e.style.opacity = i ? 0 : 1),
              ke(1),
              void (f
                ? setTimeout(function () {
                    m();
                  }, f)
                : m())
            );
          (d = c),
            (p = !a.currItem.src || a.currItem.loadError || s.showHideOpacity),
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
            i ||
              ((g = l.w / t.w),
              (de.x = l.x),
              (de.y = l.y - O),
              (a[p ? "template" : "bg"].style.opacity = 0.001),
              Ie()),
            Ve("initialZoom"),
            i && !d && r.removeClass(e, "pswp--animated-in"),
            p &&
              (i
                ? r[(d ? "remove" : "add") + "Class"](
                    e,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    r.addClass(e, "pswp--animate_opacity");
                  }, 30)),
            (zt = setTimeout(
              function () {
                if ((Se("initialZoom" + (i ? "Out" : "In")), i)) {
                  var n = l.w / t.w,
                    a = { x: de.x, y: de.y },
                    s = g,
                    o = se,
                    c = function (t) {
                      1 === t
                        ? ((g = n), (de.x = l.x), (de.y = l.y - z))
                        : ((g = (n - s) * t + s),
                          (de.x = (l.x - a.x) * t + a.x),
                          (de.y = (l.y - z - a.y) * t + a.y)),
                        Ie(),
                        p ? (e.style.opacity = 1 - t) : ke(o - t * o);
                    };
                  d
                    ? Ze("initialZoom", 0, 1, f, r.easing.cubic.out, c, m)
                    : (c(1), (zt = setTimeout(m, f + 20)));
                } else
                  (g = t.initialZoomLevel),
                    Oe(de, t.initialPosition),
                    Ie(),
                    ke(1),
                    p ? (e.style.opacity = 1) : ke(1),
                    (zt = setTimeout(m, f + 20));
              },
              i ? 25 : 90
            ));
        },
        qt = {},
        Wt = [],
        Gt = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Nt.length;
          },
        },
        Yt = function (e, t, n) {
          if (e.src && !e.loadError) {
            var i = !n;
            if (
              (i &&
                (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                Se("parseVerticalMargin", e)),
              (qt.x = t.x),
              (qt.y = t.y - e.vGap.top - e.vGap.bottom),
              i)
            ) {
              var r = qt.x / e.w,
                a = qt.y / e.h;
              e.fitRatio = r < a ? r : a;
              var o = s.scaleMode;
              "orig" === o ? (n = 1) : "fit" === o && (n = e.fitRatio),
                n > 1 && (n = 1),
                (e.initialZoomLevel = n),
                e.bounds ||
                  (e.bounds = {
                    center: { x: 0, y: 0 },
                    max: { x: 0, y: 0 },
                    min: { x: 0, y: 0 },
                  });
            }
            if (!n) return;
            return (
              (function (e, t, n) {
                var i = e.bounds;
                (i.center.x = Math.round((qt.x - t) / 2)),
                  (i.center.y = Math.round((qt.y - n) / 2) + e.vGap.top),
                  (i.max.x = t > qt.x ? Math.round(qt.x - t) : i.center.x),
                  (i.max.y =
                    n > qt.y ? Math.round(qt.y - n) + e.vGap.top : i.center.y),
                  (i.min.x = t > qt.x ? 0 : i.center.x),
                  (i.min.y = n > qt.y ? e.vGap.top : i.center.y);
              })(e, e.w * n, e.h * n),
              i &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds
            );
          }
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = {
              center: { x: 0, y: 0 },
              max: { x: 0, y: 0 },
              min: { x: 0, y: 0 },
            }),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        },
        Xt = function (e, t, n, i, r, s) {
          t.loadError ||
            (i &&
              ((t.imageAppended = !0),
              Zt(t, i, t === a.currItem && we),
              n.appendChild(i),
              s &&
                setTimeout(function () {
                  t &&
                    t.loaded &&
                    t.placeholder &&
                    ((t.placeholder.style.display = "none"),
                    (t.placeholder = null));
                }, 500)));
        },
        Vt = function (e) {
          (e.loading = !0), (e.loaded = !1);
          var t = (e.img = r.createEl("pswp__img", "img")),
            n = function () {
              (e.loading = !1),
                (e.loaded = !0),
                e.loadComplete ? e.loadComplete(e) : (e.img = null),
                (t.onload = t.onerror = null),
                (t = null);
            };
          return (
            (t.onload = n),
            (t.onerror = function () {
              (e.loadError = !0), n();
            }),
            (t.src = e.src),
            t
          );
        },
        Ut = function (e, t) {
          if (e.src && e.loadError && e.container)
            return (
              t && (e.container.innerHTML = ""),
              (e.container.innerHTML = s.errorMsg.replace("%url%", e.src)),
              !0
            );
        },
        Zt = function (e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var i = n ? e.w : Math.round(e.w * e.fitRatio),
              r = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder &&
              !e.loaded &&
              ((e.placeholder.style.width = i + "px"),
              (e.placeholder.style.height = r + "px")),
              (t.style.width = i + "px"),
              (t.style.height = r + "px");
          }
        },
        Kt = function () {
          if (Wt.length) {
            for (var e, t = 0; t < Wt.length; t++)
              (e = Wt[t]).holder.index === e.index &&
                Xt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Wt = [];
          }
        };
      xe("Controller", {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = Te(e);
            var t = Ht(e);
            t &&
              ((!t.loaded && !t.loading) || x) &&
              (Se("gettingData", e, t), t.src && Vt(t));
          },
          initController: function () {
            r.extend(s, Gt, !0),
              (a.items = Nt = n),
              (Ht = a.getItemAt),
              (Rt = s.getNumItemsFn),
              s.loop,
              Rt() < 3 && (s.loop = !1),
              Ee("beforeChange", function (e) {
                var t,
                  n = s.preload,
                  i = null === e || e >= 0,
                  r = Math.min(n[0], Rt()),
                  o = Math.min(n[1], Rt());
                for (t = 1; t <= (i ? o : r); t++) a.lazyLoadItem(u + t);
                for (t = 1; t <= (i ? r : o); t++) a.lazyLoadItem(u - t);
              }),
              Ee("initialLayout", function () {
                a.currItem.initialLayout =
                  s.getThumbBoundsFn && s.getThumbBoundsFn(u);
              }),
              Ee("mainScrollAnimComplete", Kt),
              Ee("initialZoomInEnd", Kt),
              Ee("destroy", function () {
                for (var e, t = 0; t < Nt.length; t++)
                  (e = Nt[t]).container && (e.container = null),
                    e.placeholder && (e.placeholder = null),
                    e.img && (e.img = null),
                    e.preloader && (e.preloader = null),
                    e.loadError && (e.loaded = e.loadError = !1);
                Wt = null;
              });
          },
          getItemAt: function (e) {
            return e >= 0 && void 0 !== Nt[e] && Nt[e];
          },
          allowProgressiveImg: function () {
            return (
              s.forceProgressiveLoading ||
              !P ||
              s.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (e, t) {
            s.loop && (t = Te(t));
            var n = a.getItemAt(e.index);
            n && (n.container = null);
            var i,
              l = a.getItemAt(t);
            if (l) {
              Se("gettingData", t, l), (e.index = t), (e.item = l);
              var c = (l.container = r.createEl("pswp__zoom-wrap"));
              if (
                (!l.src &&
                  l.html &&
                  (l.html.tagName
                    ? c.appendChild(l.html)
                    : (c.innerHTML = l.html)),
                Ut(l),
                Yt(l, pe),
                !l.src || l.loadError || l.loaded)
              )
                l.src &&
                  !l.loadError &&
                  (((i = r.createEl("pswp__img", "img")).style.opacity = 1),
                  (i.src = l.src),
                  Zt(l, i),
                  Xt(0, l, c, i));
              else {
                if (
                  ((l.loadComplete = function (n) {
                    if (o) {
                      if (e && e.index === t) {
                        if (Ut(n, !0))
                          return (
                            (n.loadComplete = n.img = null),
                            Yt(n, pe),
                            Pe(n),
                            void (e.index === u && a.updateCurrZoomItem())
                          );
                        n.imageAppended
                          ? !Ft &&
                            n.placeholder &&
                            ((n.placeholder.style.display = "none"),
                            (n.placeholder = null))
                          : N.transform && (ne || Ft)
                          ? Wt.push({
                              item: n,
                              baseDiv: c,
                              img: n.img,
                              index: t,
                              holder: e,
                              clearPlaceholder: !0,
                            })
                          : Xt(0, n, c, n.img, 0, !0);
                      }
                      (n.loadComplete = null),
                        (n.img = null),
                        Se("imageLoadComplete", t, n);
                    }
                  }),
                  r.features.transform)
                ) {
                  var d = "pswp__img pswp__img--placeholder";
                  d += l.msrc ? "" : " pswp__img--placeholder--blank";
                  var p = r.createEl(d, l.msrc ? "img" : "");
                  l.msrc && (p.src = l.msrc),
                    Zt(l, p),
                    c.appendChild(p),
                    (l.placeholder = p);
                }
                l.loading || Vt(l),
                  a.allowProgressiveImg() &&
                    (!jt && N.transform
                      ? Wt.push({
                          item: l,
                          baseDiv: c,
                          img: l.img,
                          index: t,
                          holder: e,
                        })
                      : Xt(0, l, c, l.img, 0, !0));
              }
              jt || t !== u ? Pe(l) : ((te = c.style), Bt(l, i || l.img)),
                (e.el.innerHTML = ""),
                e.el.appendChild(c);
            } else e.el.innerHTML = "";
          },
          cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null),
              (e.loaded = e.loading = e.img = e.imageAppended = !1);
          },
        },
      });
      var Qt,
        Jt,
        en = {},
        tn = function (e, t, n) {
          var i = document.createEvent("CustomEvent"),
            r = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || "touch",
            };
          i.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(i);
        };
      xe("Tap", {
        publicMethods: {
          initTap: function () {
            Ee("firstTouchStart", a.onTapStart),
              Ee("touchRelease", a.onTapRelease),
              Ee("destroy", function () {
                (en = {}), (Qt = null);
              });
          },
          onTapStart: function (e) {
            e.length > 1 && (clearTimeout(Qt), (Qt = null));
          },
          onTapRelease: function (e, t) {
            var n, i;
            if (t && !V && !Y && !Ye) {
              var a = t;
              if (
                Qt &&
                (clearTimeout(Qt),
                (Qt = null),
                (n = a),
                (i = en),
                Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)
              )
                return void Se("doubleTap", a);
              if ("mouse" === t.type) return void tn(e, t, "mouse");
              if (
                "BUTTON" === e.target.tagName.toUpperCase() ||
                r.hasClass(e.target, "pswp__single-tap")
              )
                return void tn(e, t);
              Oe(en, a),
                (Qt = setTimeout(function () {
                  tn(e, t), (Qt = null);
                }, 300));
            }
          },
        },
      }),
        xe("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              $ ||
                (P
                  ? Ee("mouseUsed", function () {
                      a.setupDesktopZoom();
                    })
                  : a.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function (t) {
              Jt = {};
              var n = "wheel mousewheel DOMMouseScroll";
              Ee("bindEvents", function () {
                r.bind(e, n, a.handleMouseWheel);
              }),
                Ee("unbindEvents", function () {
                  Jt && r.unbind(e, n, a.handleMouseWheel);
                }),
                (a.mouseZoomedIn = !1);
              var i,
                s = function () {
                  a.mouseZoomedIn &&
                    (r.removeClass(e, "pswp--zoomed-in"),
                    (a.mouseZoomedIn = !1)),
                    g < 1
                      ? r.addClass(e, "pswp--zoom-allowed")
                      : r.removeClass(e, "pswp--zoom-allowed"),
                    o();
                },
                o = function () {
                  i && (r.removeClass(e, "pswp--dragging"), (i = !1));
                };
              Ee("resize", s),
                Ee("afterChange", s),
                Ee("pointerDown", function () {
                  a.mouseZoomedIn &&
                    ((i = !0), r.addClass(e, "pswp--dragging"));
                }),
                Ee("pointerUp", o),
                t || s();
            },
            handleMouseWheel: function (e) {
              if (g <= a.currItem.fitRatio)
                return (
                  s.modal &&
                    (!s.closeOnScroll || Ye || G
                      ? e.preventDefault()
                      : _ && Math.abs(e.deltaY) > 2 && ((c = !0), a.close())),
                  !0
                );
              if ((e.stopPropagation(), (Jt.x = 0), "deltaX" in e))
                1 === e.deltaMode
                  ? ((Jt.x = 18 * e.deltaX), (Jt.y = 18 * e.deltaY))
                  : ((Jt.x = e.deltaX), (Jt.y = e.deltaY));
              else if ("wheelDelta" in e)
                e.wheelDeltaX && (Jt.x = -0.16 * e.wheelDeltaX),
                  e.wheelDeltaY
                    ? (Jt.y = -0.16 * e.wheelDeltaY)
                    : (Jt.y = -0.16 * e.wheelDelta);
              else {
                if (!("detail" in e)) return;
                Jt.y = e.detail;
              }
              je(g, !0);
              var t = de.x - Jt.x,
                n = de.y - Jt.y;
              (s.modal ||
                (t <= ee.min.x &&
                  t >= ee.max.x &&
                  n <= ee.min.y &&
                  n >= ee.max.y)) &&
                e.preventDefault(),
                a.panTo(t, n);
            },
            toggleDesktopZoom: function (t) {
              t = t || { x: pe.x / 2 + me.x, y: pe.y / 2 + me.y };
              var n = s.getDoubleTapZoom(!0, a.currItem),
                i = g === n;
              (a.mouseZoomedIn = !i),
                a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333),
                r[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in");
            },
          },
        });
      var nn,
        rn,
        an,
        sn,
        on,
        ln,
        cn,
        un,
        dn,
        pn,
        fn,
        mn,
        hn = { history: !0, galleryUID: 1 },
        gn = function () {
          return fn.hash.substring(1);
        },
        vn = function () {
          nn && clearTimeout(nn), an && clearTimeout(an);
        },
        yn = function () {
          var e = gn(),
            t = {};
          if (e.length < 5) return t;
          var n,
            i = e.split("&");
          for (n = 0; n < i.length; n++)
            if (i[n]) {
              var r = i[n].split("=");
              r.length < 2 || (t[r[0]] = r[1]);
            }
          if (s.galleryPIDs) {
            var a = t.pid;
            for (t.pid = 0, n = 0; n < Nt.length; n++)
              if (Nt[n].pid === a) {
                t.pid = n;
                break;
              }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t;
        },
        bn = function () {
          if ((an && clearTimeout(an), Ye || G)) an = setTimeout(bn, 500);
          else {
            sn ? clearTimeout(rn) : (sn = !0);
            var e = u + 1,
              t = Ht(u);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = cn + "&gid=" + s.galleryUID + "&pid=" + e;
            un || (-1 === fn.hash.indexOf(n) && (pn = !0));
            var i = fn.href.split("#")[0] + "#" + n;
            mn
              ? "#" + n !== window.location.hash &&
                history[un ? "replaceState" : "pushState"](
                  "",
                  document.title,
                  i
                )
              : un
              ? fn.replace(i)
              : (fn.hash = n),
              (un = !0),
              (rn = setTimeout(function () {
                sn = !1;
              }, 60));
          }
        };
      xe("History", {
        publicMethods: {
          initHistory: function () {
            if ((r.extend(s, hn, !0), s.history)) {
              (fn = window.location),
                (pn = !1),
                (dn = !1),
                (un = !1),
                (cn = gn()),
                (mn = "pushState" in history),
                cn.indexOf("gid=") > -1 &&
                  (cn = (cn = cn.split("&gid=")[0]).split("?gid=")[0]),
                Ee("afterChange", a.updateURL),
                Ee("unbindEvents", function () {
                  r.unbind(window, "hashchange", a.onHashChange);
                });
              var e = function () {
                (ln = !0),
                  dn ||
                    (pn
                      ? history.back()
                      : cn
                      ? (fn.hash = cn)
                      : mn
                      ? history.pushState(
                          "",
                          document.title,
                          fn.pathname + fn.search
                        )
                      : (fn.hash = "")),
                  vn();
              };
              Ee("unbindEvents", function () {
                c && e();
              }),
                Ee("destroy", function () {
                  ln || e();
                }),
                Ee("firstUpdate", function () {
                  u = yn().pid;
                });
              var t = cn.indexOf("pid=");
              t > -1 &&
                "&" === (cn = cn.substring(0, t)).slice(-1) &&
                (cn = cn.slice(0, -1)),
                setTimeout(function () {
                  o && r.bind(window, "hashchange", a.onHashChange);
                }, 40);
            }
          },
          onHashChange: function () {
            if (gn() === cn) return (dn = !0), void a.close();
            sn || ((on = !0), a.goTo(yn().pid), (on = !1));
          },
          updateURL: function () {
            vn(), on || (un ? (nn = setTimeout(bn, 800)) : bn());
          },
        },
      }),
        r.extend(a, Ke);
    };
  }),
  /*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
   * http://photoswipe.com
   * Copyright (c) 2019 Dmitry Semenov; */
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipeUI_Default = t());
  })(this, function () {
    "use strict";
    return function (e, t) {
      var n,
        i,
        r,
        a,
        s,
        o,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g,
        v,
        y,
        b,
        w = this,
        x = !1,
        T = !0,
        C = !0,
        E = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title
              ? ((t.children[0].innerHTML = e.title), !0)
              : ((t.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return e.currItem.src || "";
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return e.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200,
        },
        S = function (e) {
          if (v) return !0;
          (e = e || window.event), g.timeToIdle && g.mouseUsed && !u && O();
          for (
            var n,
              i,
              r = (e.target || e.srcElement).getAttribute("class") || "",
              a = 0;
            a < j.length;
            a++
          )
            (n = j[a]).onTap &&
              r.indexOf("pswp__" + n.name) > -1 &&
              (n.onTap(), (i = !0));
          if (i) {
            e.stopPropagation && e.stopPropagation(), (v = !0);
            var s = t.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              v = !1;
            }, s);
          }
        },
        M = function (e, n, i) {
          t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n);
        },
        k = function () {
          var e = 1 === g.getNumItemsFn();
          e !== h && (M(i, "ui--one-slide", e), (h = e));
        },
        _ = function () {
          M(l, "share-modal--hidden", C);
        },
        I = function () {
          return (
            (C = !C)
              ? (t.removeClass(l, "pswp__share-modal--fade-in"),
                setTimeout(function () {
                  C && _();
                }, 300))
              : (_(),
                setTimeout(function () {
                  C || t.addClass(l, "pswp__share-modal--fade-in");
                }, 30)),
            C || D(),
            !1
          );
        },
        P = function (t) {
          var n = (t = t || window.event).target || t.srcElement;
          return (
            e.shout("shareLinkClick", t, n),
            !(
              !n.href ||
              (!n.hasAttribute("download") &&
                (window.open(
                  n.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                C || I(),
                1))
            )
          );
        },
        D = function () {
          for (var e, t, n, i, r = "", a = 0; a < g.shareButtons.length; a++)
            (e = g.shareButtons[a]),
              (t = g.getImageURLForShare(e)),
              (n = g.getPageURLForShare(e)),
              (i = g.getTextForShare(e)),
              (r +=
                '<a href="' +
                e.url
                  .replace("{{url}}", encodeURIComponent(n))
                  .replace("{{image_url}}", encodeURIComponent(t))
                  .replace("{{raw_image_url}}", t)
                  .replace("{{text}}", encodeURIComponent(i)) +
                '" target="_blank" class="pswp__share--' +
                e.id +
                '"' +
                (e.download ? "download" : "") +
                ">" +
                e.label +
                "</a>"),
              g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
          (l.children[0].innerHTML = r), (l.children[0].onclick = P);
        },
        A = function (e) {
          for (var n = 0; n < g.closeElClasses.length; n++)
            if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0;
        },
        L = 0,
        O = function () {
          clearTimeout(b), (L = 0), u && w.setIdle(!1);
        },
        $ = function (e) {
          var t = (e = e || window.event).relatedTarget || e.toElement;
          (t && "HTML" !== t.nodeName) ||
            (clearTimeout(b),
            (b = setTimeout(function () {
              w.setIdle(!0);
            }, g.timeToIdleOutside)));
        },
        z = function (e) {
          f !== e && (M(p, "preloader--active", !e), (f = e));
        },
        N = function (n) {
          var s = n.vGap;
          if (
            !e.likelyTouchDevice ||
            g.mouseUsed ||
            screen.width > g.fitControlsWidth
          ) {
            var o = g.barsSize;
            if (g.captionEl && "auto" === o.bottom)
              if (
                (a ||
                  ((a = t.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(t.createEl("pswp__caption__center")),
                  i.insertBefore(a, r),
                  t.addClass(i, "pswp__ui--fit")),
                g.addCaptionHTMLFn(n, a, !0))
              ) {
                var l = a.clientHeight;
                s.bottom = parseInt(l, 10) || 44;
              } else s.bottom = o.top;
            else s.bottom = "auto" === o.bottom ? 0 : o.bottom;
            s.top = o.top;
          } else s.top = s.bottom = 0;
        },
        j = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function (e) {
              r = e;
            },
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function (e) {
              l = e;
            },
            onTap: function () {
              I();
            },
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function (e) {
              o = e;
            },
            onTap: function () {
              I();
            },
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom,
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
              s = e;
            },
          },
          { name: "button--close", option: "closeEl", onTap: e.close },
          { name: "button--arrow--left", option: "arrowEl", onTap: e.prev },
          { name: "button--arrow--right", option: "arrowEl", onTap: e.next },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
              n.isFullscreen() ? n.exit() : n.enter();
            },
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function (e) {
              p = e;
            },
          },
        ];
      (w.init = function () {
        var s;
        t.extend(e.options, E, !0),
          (g = e.options),
          (i = t.getChildByClass(e.scrollWrap, "pswp__ui")),
          (d = e.listen)("onVerticalDrag", function (e) {
            T && e < 0.95
              ? w.hideControls()
              : !T && e >= 0.95 && w.showControls();
          }),
          d("onPinchClose", function (e) {
            T && e < 0.9
              ? (w.hideControls(), (s = !0))
              : s && !T && e > 0.9 && w.showControls();
          }),
          d("zoomGestureEnded", function () {
            (s = !1) && !T && w.showControls();
          }),
          d("beforeChange", w.update),
          d("doubleTap", function (t) {
            var n = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== n
              ? e.zoomTo(n, t, 333)
              : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333);
          }),
          d("preventDragEvent", function (e, t, n) {
            var i = e.target || e.srcElement;
            i &&
              i.getAttribute("class") &&
              e.type.indexOf("mouse") > -1 &&
              (i.getAttribute("class").indexOf("__caption") > 0 ||
                /(SMALL|STRONG|EM)/i.test(i.tagName)) &&
              (n.prevent = !1);
          }),
          d("bindEvents", function () {
            t.bind(i, "pswpTap click", S),
              t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap),
              e.likelyTouchDevice ||
                t.bind(e.scrollWrap, "mouseover", w.onMouseOver);
          }),
          d("unbindEvents", function () {
            C || I(),
              y && clearInterval(y),
              t.unbind(document, "mouseout", $),
              t.unbind(document, "mousemove", O),
              t.unbind(i, "pswpTap click", S),
              t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap),
              t.unbind(e.scrollWrap, "mouseover", w.onMouseOver),
              n &&
                (t.unbind(document, n.eventK, w.updateFullscreen),
                n.isFullscreen() && ((g.hideAnimationDuration = 0), n.exit()),
                (n = null));
          }),
          d("destroy", function () {
            g.captionEl &&
              (a && i.removeChild(a), t.removeClass(r, "pswp__caption--empty")),
              l && (l.children[0].onclick = null),
              t.removeClass(i, "pswp__ui--over-close"),
              t.addClass(i, "pswp__ui--hidden"),
              w.setIdle(!1);
          }),
          g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"),
          d("initialZoomIn", function () {
            g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden");
          }),
          d("initialZoomOut", function () {
            t.addClass(i, "pswp__ui--hidden");
          }),
          d("parseVerticalMargin", N),
          (function () {
            var e,
              n,
              r,
              a = function (i) {
                if (i)
                  for (var a = i.length, s = 0; s < a; s++) {
                    (e = i[s]), (n = e.className);
                    for (var o = 0; o < j.length; o++)
                      (r = j[o]),
                        n.indexOf("pswp__" + r.name) > -1 &&
                          (g[r.option]
                            ? (t.removeClass(e, "pswp__element--disabled"),
                              r.onInit && r.onInit(e))
                            : t.addClass(e, "pswp__element--disabled"));
                  }
              };
            a(i.children);
            var s = t.getChildByClass(i, "pswp__top-bar");
            s && a(s.children);
          })(),
          g.shareEl && o && l && (C = !0),
          k(),
          g.timeToIdle &&
            d("mouseUsed", function () {
              t.bind(document, "mousemove", O),
                t.bind(document, "mouseout", $),
                (y = setInterval(function () {
                  2 == ++L && w.setIdle(!0);
                }, g.timeToIdle / 2));
            }),
          g.fullscreenEl &&
            !t.features.isOldAndroid &&
            (n || (n = w.getFullscreenAPI()),
            n
              ? (t.bind(document, n.eventK, w.updateFullscreen),
                w.updateFullscreen(),
                t.addClass(e.template, "pswp--supports-fs"))
              : t.removeClass(e.template, "pswp--supports-fs")),
          g.preloaderEl &&
            (z(!0),
            d("beforeChange", function () {
              clearTimeout(m),
                (m = setTimeout(function () {
                  e.currItem && e.currItem.loading
                    ? (!e.allowProgressiveImg() ||
                        (e.currItem.img && !e.currItem.img.naturalWidth)) &&
                      z(!1)
                    : z(!0);
                }, g.loadingIndicatorDelay));
            }),
            d("imageLoadComplete", function (t, n) {
              e.currItem === n && z(!0);
            }));
      }),
        (w.setIdle = function (e) {
          (u = e), M(i, "ui--idle", e);
        }),
        (w.update = function () {
          T && e.currItem
            ? (w.updateIndexIndicator(),
              g.captionEl &&
                (g.addCaptionHTMLFn(e.currItem, r),
                M(r, "caption--empty", !e.currItem.title)),
              (x = !0))
            : (x = !1),
            C || I(),
            k();
        }),
        (w.updateFullscreen = function (i) {
          i &&
            setTimeout(function () {
              e.setScrollOffset(0, t.getScrollY());
            }, 50),
            t[(n.isFullscreen() ? "add" : "remove") + "Class"](
              e.template,
              "pswp--fs"
            );
        }),
        (w.updateIndexIndicator = function () {
          g.counterEl &&
            (s.innerHTML =
              e.getCurrentIndex() +
              1 +
              g.indexIndicatorSep +
              g.getNumItemsFn());
        }),
        (w.onGlobalTap = function (n) {
          var i = (n = n || window.event).target || n.srcElement;
          if (!v)
            if (n.detail && "mouse" === n.detail.pointerType) {
              if (A(i)) return void e.close();
              t.hasClass(i, "pswp__img") &&
                (1 === e.getZoomLevel() &&
                e.getZoomLevel() <= e.currItem.fitRatio
                  ? g.clickToCloseNonZoomable && e.close()
                  : e.toggleDesktopZoom(n.detail.releasePoint));
            } else if (
              (g.tapToToggleControls &&
                (T ? w.hideControls() : w.showControls()),
              g.tapToClose && (t.hasClass(i, "pswp__img") || A(i)))
            )
              return void e.close();
        }),
        (w.onMouseOver = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          M(i, "ui--over-close", A(t));
        }),
        (w.hideControls = function () {
          t.addClass(i, "pswp__ui--hidden"), (T = !1);
        }),
        (w.showControls = function () {
          (T = !0), x || w.update(), t.removeClass(i, "pswp__ui--hidden");
        }),
        (w.supportsFullscreen = function () {
          var e = document;
          return !!(
            e.exitFullscreen ||
            e.mozCancelFullScreen ||
            e.webkitExitFullscreen ||
            e.msExitFullscreen
          );
        }),
        (w.getFullscreenAPI = function () {
          var t,
            n = document.documentElement,
            i = "fullscreenchange";
          return (
            n.requestFullscreen
              ? (t = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: i,
                })
              : n.mozRequestFullScreen
              ? (t = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + i,
                })
              : n.webkitRequestFullscreen
              ? (t = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + i,
                })
              : n.msRequestFullscreen &&
                (t = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange",
                }),
            t &&
              ((t.enter = function () {
                if (
                  ((c = g.closeOnScroll),
                  (g.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK)
                )
                  return e.template[this.enterK]();
                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              }),
              (t.exit = function () {
                return (g.closeOnScroll = c), document[this.exitK]();
              }),
              (t.isFullscreen = function () {
                return document[this.elementK];
              })),
            t
          );
        });
    };
  }),
  /*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
  (function (e) {
    "use strict";
    (e.ajaxChimp = {
      responses: {
        "We have sent you a confirmation email": 0,
        "Please enter a value": 1,
        "An email address must contain a single @": 2,
        "The domain portion of the email address is invalid (the portion after the @: )": 3,
        "The username portion of the email address is invalid (the portion before the @: )": 4,
        "This email address looks fake or invalid. Please enter a real email address": 5,
      },
      translations: { en: null },
      init: function (t, n) {
        e(t).ajaxChimp(n);
      },
    }),
      (e.fn.ajaxChimp = function (t) {
        return (
          e(this).each(function (n, i) {
            var r = e(i),
              a = r.find("input[type=email]"),
              s = r.find("label[for=" + a.attr("id") + "]"),
              o = e.extend({ url: r.attr("action"), language: "en" }, t),
              l = o.url.replace("/post?", "/post-json?").concat("&c=?");
            r.attr("novalidate", "true"),
              a.attr("name", "EMAIL"),
              r.submit(function () {
                var t,
                  n = {},
                  i = r.serializeArray();
                e.each(i, function (e, t) {
                  n[t.name] = t.value;
                }),
                  e.ajax({
                    url: l,
                    data: n,
                    success: function (n) {
                      if ("success" === n.result)
                        (t = "We have sent you a confirmation email"),
                          s.removeClass("error").addClass("valid"),
                          a.removeClass("error").addClass("valid");
                      else {
                        a.removeClass("valid").addClass("error"),
                          s.removeClass("valid").addClass("error");
                        try {
                          var i = n.msg.split(" - ", 2);
                          void 0 === i[1]
                            ? (t = n.msg)
                            : parseInt(i[0], 10).toString() === i[0]
                            ? (i[0], (t = i[1]))
                            : (t = n.msg);
                        } catch (e) {
                          t = n.msg;
                        }
                      }
                      "en" !== o.language &&
                        void 0 !== e.ajaxChimp.responses[t] &&
                        e.ajaxChimp.translations &&
                        e.ajaxChimp.translations[o.language] &&
                        e.ajaxChimp.translations[o.language][
                          e.ajaxChimp.responses[t]
                        ] &&
                        (t =
                          e.ajaxChimp.translations[o.language][
                            e.ajaxChimp.responses[t]
                          ]),
                        s.html(t),
                        s.show(2e3),
                        o.callback && o.callback(n);
                    },
                    dataType: "jsonp",
                    error: function (e, t) {
                      console.log("mailchimp ajax submit error: " + t);
                    },
                  });
                var c = "Submitting...";
                return (
                  "en" !== o.language &&
                    e.ajaxChimp.translations &&
                    e.ajaxChimp.translations[o.language] &&
                    e.ajaxChimp.translations[o.language].submit &&
                    (c = e.ajaxChimp.translations[o.language].submit),
                  s.html(c).show(2e3),
                  !1
                );
              });
          }),
          this
        );
      });
  })(jQuery),
  /*! ------------------------------------------------
 * Project Name: Ackley - Coming Soon and Landing Page Template
 * Project Description: Ackley - bold and clean coming soon and landing page template to kick-start your project
 * Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
 * Version: 1.0.0
 * Build Date: June 2023
 * Last Update: June 2023
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  1. SVG Fallback
 *  2. Chrome Smooth Scroll
 *  3. Images moving ban
 *  4. Detecting Mobile/Desktop
 *  5. Menu Hover Effect
 *  6. Cursor
 *  7. Menu & Sections Behavior
 *  8. Popup Open/Close
 *  9. Socials Mobile Open/Close
 *  10. PhotoSwipe Gallery Images Replace
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */
  $(function () {
    "use strict";
    Modernizr.svg ||
      $("img[src*='svg']").attr("src", function () {
        return $(this).attr("src").replace(".svg", ".png");
      });
    try {
      $.browserSelector(), $("html").hasClass("chrome") && $.smoothScroll();
    } catch (e) {}
    var e;
    $("img, a").on("dragstart", function (e) {
      e.preventDefault();
    }),
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? $("html").addClass("touch")
        : $("html").addClass("no-touch"),
      /MSIE 9/i.test(navigator.userAgent) ||
        /rv:11.0/i.test(navigator.userAgent) ||
        /MSIE 10/i.test(navigator.userAgent) ||
        /Edge\/\d+/.test(navigator.userAgent),
      $("html").hasClass("no-touch") &&
        ($(".navigation__link ").on("mouseenter", function () {
          $(this).next().addClass("is-visible"), $(this).addClass("is-hidden");
        }),
        $(".navigation__link ").on("mouseleave", function () {
          $(this).next().removeClass("is-visible"),
            $(this).removeClass("is-hidden");
        })),
      (e = $(".cursor")),
      $(window).on("mousemove", function (e) {
        var t = e.clientX + "px",
          n = e.clientY + "px";
        anime({
          targets: ".cursor",
          duration: 30,
          left: t,
          top: n,
          easing: "linear",
        });
      }),
      $(".link-s").on("mouseenter", function () {
        e.addClass("cursor-s");
      }),
      $(".link-s").on("mouseleave", function () {
        e.removeClass("cursor-s");
      }),
      $(".link-m").on("mouseenter", function () {
        e.addClass("cursor-m");
      }),
      $(".link-m").on("mouseleave", function () {
        e.removeClass("cursor-m");
      }),
      $(".link-m-opposite").on("mouseenter", function () {
        e.addClass("cursor-m-opposite");
      }),
      $(".link-m-opposite").on("mouseleave", function () {
        e.removeClass("cursor-m-opposite");
      }),
      $(".link-l").on("mouseenter", function () {
        e.addClass("cursor-l");
      }),
      $(".link-l").on("mouseleave", function () {
        e.removeClass("cursor-l");
      }),
      $(".link-l-opposite").on("mouseenter", function () {
        e.addClass("cursor-l-opposite");
      }),
      $(".link-l-opposite").on("mouseleave", function () {
        e.removeClass("cursor-l-opposite");
      }),
      $(".link-l-arrow").on("mouseenter", function () {
        e.addClass("cursor-l-arrow");
      }),
      $(".link-l-arrow").on("mouseleave", function () {
        e.removeClass("cursor-l-arrow");
      }),
      $(".link-xl").on("mouseenter", function () {
        e.addClass("cursor-xl");
      }),
      $(".link-xl").on("mouseleave", function () {
        e.removeClass("cursor-xl");
      }),
      $(".link-xl-opposite").on("mouseenter", function () {
        e.addClass("cursor-xl-opposite");
      }),
      $(".link-xl-opposite").on("mouseleave", function () {
        e.removeClass("cursor-xl-opposite");
      });
    var t = $("#menu-trigger"),
      n = $("#menu-tigger-headline"),
      i = $("#menu"),
      r = $("#header"),
      a = $("#main"),
      s = $("#about"),
      o = $("#works"),
      l = $("#contact"),
      c = $("#home-trigger"),
      u = $("#about-trigger"),
      d = $("#works-trigger"),
      p = $("#contact-trigger");
    t.on("click", function (e) {
      e.preventDefault(),
        i.hasClass("animate-in")
          ? (i.addClass("animate-out"),
            setTimeout(function () {
              $(".active").addClass("animate-in"),
                $(".main-fullscreen").hasClass("active") &&
                  r.addClass("header-transparent"),
                t.removeClass("menu-opened");
            }, 500),
            setTimeout(function () {
              i.removeClass("animate-in animate-out");
            }, 1500))
          : ($(".active").addClass("animate-out"),
            t.addClass("menu-opened"),
            setTimeout(function () {
              i.addClass("animate-in"),
                $(".main-fullscreen").hasClass("active") &&
                  r.removeClass("header-transparent"),
                $(".active, .inner__content").animate({ scrollTop: 0 }, 100);
            }, 500),
            setTimeout(function () {
              $(".active").removeClass("animate-out animate-in");
            }, 1200));
    }),
      n.on("click", function (e) {
        e.preventDefault(),
          $(".active").addClass("animate-out"),
          t.addClass("menu-opened"),
          setTimeout(function () {
            i.addClass("animate-in"),
              $(".main-fullscreen").hasClass("active") &&
                r.removeClass("header-transparent"),
              $(".active, .inner__content").animate({ scrollTop: 0 }, 100);
          }, 500),
          setTimeout(function () {
            $(".active").removeClass("animate-out animate-in");
          }, 1200);
      }),
      $(".navigation__link").on("click", function (e) {
        $(".active").removeClass("active"),
          $(".active-link").removeClass("active-link"),
          i.addClass("animate-out"),
          setTimeout(function () {
            t.removeClass("menu-opened");
          }, 500),
          setTimeout(function () {
            i.removeClass("animate-in animate-out");
          }, 1500);
      }),
      c.on("click", function (e) {
        e.preventDefault(),
          setTimeout(function () {
            a.addClass("active animate-in"),
              $(".main-fullscreen").hasClass("active") &&
                r.addClass("header-transparent"),
              c.addClass("active-link");
          }, 500);
      }),
      u.on("click", function (e) {
        e.preventDefault(),
          setTimeout(function () {
            s.addClass("active animate-in"), u.addClass("active-link");
          }, 500);
      }),
      d.on("click", function (e) {
        e.preventDefault(),
          setTimeout(function () {
            o.addClass("active animate-in"), d.addClass("active-link");
          }, 500);
      }),
      p.on("click", function (e) {
        e.preventDefault(),
          setTimeout(function () {
            l.addClass("active animate-in"), p.addClass("active-link");
          }, 500);
      });
    var f = $("#notify"),
      m = $("#notify-trigger"),
      h = $("#notify-close"),
      g = $("#sayhello"),
      v = $("#sayhello-trigger"),
      y = $("#sayhello-close");
    m.on("click", function (e) {
      e.preventDefault(),
        f
          .addClass("animate-in")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              h.addClass("is-scaled-up");
            }
          );
    }),
      h.on("click", function (e) {
        e.preventDefault(),
          h.removeClass("is-scaled-up"),
          setTimeout(function () {
            f.addClass("animate-out");
          }, 300),
          setTimeout(function () {
            f.removeClass("animate-in animate-out");
          }, 1e3);
      }),
      v.on("click", function (e) {
        e.preventDefault(),
          g
            .addClass("animate-in")
            .one(
              "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function () {
                y.addClass("is-scaled-up");
              }
            );
      }),
      y.on("click", function (e) {
        e.preventDefault(),
          y.removeClass("is-scaled-up"),
          setTimeout(function () {
            g.addClass("animate-out");
          }, 300),
          setTimeout(function () {
            g.removeClass("animate-in animate-out");
          }, 1e3);
      });
    var b = $("#header-socials"),
      w = $("#socials-trigger"),
      x = $("#socials-close");
    w.on("click", function (e) {
      e.preventDefault(),
        w.addClass("is-hidden"),
        b
          .addClass("animate-in")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              x.addClass("is-scaled-up");
            }
          ),
        setTimeout(function () {}, 300);
    }),
      x.on("click", function (e) {
        e.preventDefault(),
          x.removeClass("is-scaled-up"),
          setTimeout(function () {
            b.addClass("animate-out"), w.removeClass("is-hidden");
          }, 300),
          setTimeout(function () {
            b.removeClass("animate-in animate-out");
          }, 1e3);
      }),
      $(".my-gallery__link").each(function () {
        $(this)
          .append('<div class="picture"></div>')
          .children(".picture")
          .css({
            "background-image": "url(" + $(this).attr("data-image") + ")",
          });
      });
  });

$(window).on("load", function () {
  "use strict";
  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  $(".loader__circle").addClass("fade");

  setTimeout(function () {
    $(".loader").addClass("loaded");
    $("#main").addClass("active animate-in");
    $("body").addClass("loaded");
    $("#home-trigger").addClass("active-link");
  }, 800);
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if (animatedHeadline.length) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2500,
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //
});
