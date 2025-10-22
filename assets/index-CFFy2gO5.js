import { R as t } from "./app-CYH7DoRt.js";
var r = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  e = t.createContext && t.createContext(r),
  c = ["attr", "size", "title"];
function n(t, r) {
  if (null == t) return {};
  var e,
    c,
    n = (function (t, r) {
      if (null == t) return {};
      var e = {};
      for (var c in t)
        if (Object.prototype.hasOwnProperty.call(t, c)) {
          if (r.indexOf(c) >= 0) continue;
          e[c] = t[c];
        }
      return e;
    })(t, r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (c = 0; c < a.length; c++)
      (e = a[c]),
        r.indexOf(e) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, e) && (n[e] = t[e]));
  }
  return n;
}
function a() {
  return (
    (a = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var c in e)
              Object.prototype.hasOwnProperty.call(e, c) && (t[c] = e[c]);
          }
          return t;
        }),
    a.apply(this, arguments)
  );
}
function i(t, r) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    r &&
      (c = c.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      e.push.apply(e, c);
  }
  return e;
}
function l(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? i(Object(e), !0).forEach(function (r) {
          o(t, r, e[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
      : i(Object(e)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        });
  }
  return t;
}
function o(t, r, e) {
  var c;
  return (
    (r =
      "symbol" ==
      typeof (c = (function (t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var c = e.call(t, r);
          if ("object" != typeof c) return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      })(r, "string"))
        ? c
        : c + "") in t
      ? Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[r] = e),
    t
  );
}
function s(r) {
  return (
    r &&
    r.map((r, e) => t.createElement(r.tag, l({ key: e }, r.attr), s(r.child)))
  );
}
function u(r) {
  return (e) => t.createElement(h, a({ attr: l({}, r.attr) }, e), s(r.child));
}
function h(i) {
  var o = (r) => {
    var e,
      { attr: o, size: s, title: u } = i,
      h = n(i, c),
      f = s || r.size || "1em";
    return (
      r.className && (e = r.className),
      i.className && (e = (e ? e + " " : "") + i.className),
      t.createElement(
        "svg",
        a(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          o,
          h,
          {
            className: e,
            style: l(l({ color: i.color || r.color }, r.style), i.style),
            height: f,
            width: f,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && t.createElement("title", null, u),
        i.children
      )
    );
  };
  return void 0 !== e ? t.createElement(e.Consumer, null, (t) => o(t)) : o(r);
}
function f(t) {
  return u({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(t);
}
function d(t) {
  return u({
    attr: { viewBox: "0 0 488 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
        },
        child: [],
      },
    ],
  })(t);
}
function p(t) {
  return u({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(t);
}
function v(t) {
  return u({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
        },
        child: [],
      },
    ],
  })(t);
}
function m(t) {
  return u({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
        child: [],
      },
    ],
  })(t);
}
function b(t) {
  return u({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
        child: [],
      },
    ],
  })(t);
}
function g(t) {
  return u({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
        child: [],
      },
    ],
  })(t);
}
function y(t) {
  return u({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
        },
        child: [],
      },
    ],
  })(t);
}
function O(t) {
  return u({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
        child: [],
      },
    ],
  })(t);
}
function w(t) {
  return u({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z",
        },
        child: [],
      },
    ],
  })(t);
}
function j(t) {
  return u({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z",
        },
        child: [],
      },
    ],
  })(t);
}
export {
  p as F,
  u as G,
  v as a,
  f as b,
  y as c,
  O as d,
  j as e,
  w as f,
  m as g,
  b as h,
  g as i,
  d as j,
};
