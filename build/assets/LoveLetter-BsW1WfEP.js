import { j as e, r as t } from "./app-CYH7DoRt.js";
/* empty css                   */ import {
  f as l,
  e as s,
} from "./index-CFFy2gO5.js";
const a = ({
    contentOut: s,
    contentFull: l,
    contentBottom: a,
    onClose: n,
    onEndOpen: o,
  }) => {
    const [r, i] = t.useState(!1),
      [c, x] = t.useState(!1),
      [p, d] = t.useState(3),
      [m, u] = t.useState(2),
      [g, h] = t.useState(!1),
      f = (t) => {
        t.preventDefault(),
          t.stopPropagation(),
          g ||
            (x(!0),
            h(!0),
            setTimeout(() => {
              d(3), u(2), n && n(t);
            }, 205),
            setTimeout(() => {
              i(!1), x(!1), h(!1);
            }, 750));
      };
    return e.jsxs("div", {
      className: "perspective relative h-full w-full",
      onClick: (t) => {
        t.preventDefault(),
          t.stopPropagation(),
          g ||
            (h(!0),
            i(!0),
            setTimeout(() => {
              x(!1), d(2), u(3), o && o(t), h(!1);
            }, 300));
      },
      children: [
        e.jsx("div", {
          className:
            "tile out " +
            (r && !c ? "openingTop topOpen" : c ? "closingTop" : ""),
          style: { left: 0, zIndex: p },
          children: s,
        }),
        e.jsx("div", {
          className: `tile in-top left-0 ${
            r && !c
              ? "openingBottom bottomOpen"
              : c
              ? "closingBottom"
              : "overflow-hidden"
          } `,
          style: { zIndex: m },
          onClick: f,
          children: l,
        }),
        e.jsx("div", { className: "tile in-bottom", onClick: f, children: a }),
      ],
    });
  },
  n = ({
    name: n,
    message: o,
    greeting: r,
    ownName: i,
    title: c,
    music: x,
  }) => {
    const [p, d] = t.useState(!1),
      [m, u] = t.useState("z-[38]"),
      [g, h] = t.useState("z-40"),
      [f, j] = t.useState("translate-y-[-25%]"),
      [b, v] = t.useState(!1),
      [y, w] = t.useState(!1),
      [N, S] = t.useState(!1),
      [z, k] = t.useState([o ?? ""]),
      C = t.useRef(null),
      [T, F] = t.useState(!0),
      [E, $] = t.useState(!1),
      L = (t, e) => {
        if (t && t.includes("\n")) return t.split("\n", 2);
        const s = !O(t),
          l = t.substring(0, 1e3),
          a = s ? (e ? 473 : 575) : e ? 190 : 223,
          n = a - 10;
        if (!l || l.length <= a) return [l];
        const o = n + l.substring(n, a).lastIndexOf(" ");
        return [l.substring(0, o).trim(), l.substring(o).trim()];
      },
      O = (t) =>
        /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t),
      B = (t, e) => {
        if (!t) return !1;
        const s = !O(t) ? (e ? 220 : 290) : e ? 140 : 150;
        return t.length <= s;
      },
      D = [1.5, 1.7, 1.6, 1.8, 1.9, 1.6];
    t.useEffect(() => {
      const t = () => {
        const t = window.innerWidth <= 1e3;
        v(t), o && (t && o.length > 200 ? k(L(o, !0)) : k(L(o)));
      };
      return (
        t(),
        window.addEventListener("resize", t),
        () => window.removeEventListener("resize", t)
      );
    }, [o]),
      t.useEffect(() => {
        "z-[38]" === m
          ? u("z-[39]")
          : p
          ? (S(!0),
            w(!0),
            setTimeout(() => {
              j(b ? "-translate-y-[300px]" : "-translate-y-[30rem]"),
                u("z-[41]"),
                h("z-40");
            }, 300),
            setTimeout(() => {
              j(
                b
                  ? "translate-y-0 rotate-[-3deg]"
                  : "translate-y-0 rotate-[-5deg]"
              ),
                u("z-[56]");
            }, 900),
            setTimeout(() => {
              j(
                b
                  ? "translate-y-0 rotate-[-3deg]"
                  : "translate-y-0 rotate-[-5deg]"
              );
            }, 1200))
          : (S(!0),
            j(
              b
                ? "translate-y-0 rotate-[-3deg]"
                : "translate-y-0 rotate-[-5deg]"
            ),
            h("z-[39]"),
            setTimeout(() => {
              j(b ? "-translate-y-[300px]" : "-translate-y-[30rem]");
            }, 300),
            setTimeout(() => {
              u("z-50"), j("translate-y-[-25%]");
            }, 900),
            setTimeout(() => {
              u("z-10"), w(!1), S(!1);
            }, 1500));
      }, [p]),
      t.useEffect(() => {
        if (x) {
          W();
          const t = () => {
            W(), document.removeEventListener("click", t);
          };
          return (
            document.addEventListener("click", t),
            () => {
              document.removeEventListener("click", t);
            }
          );
        }
      }, [x]);
    const A = (t) => {
        null == t || t.preventDefault(),
          null == t || t.stopPropagation(),
          E || (W(), $(!0)),
          N ||
            (p
              ? setTimeout(() => {
                  d(!1);
                }, 650)
              : d(!0));
      },
      I = e.jsx("div", {
        className: "pointer-events-none absolute inset-0",
        children: [...Array(6)].map((t, s) =>
          e.jsx(
            "div",
            {
              className: `heart-float absolute heart-float-${
                s + 1
              } top-1/2 left-1/2`,
              style: {
                animation: `heartFloat${s + 1} forwards`,
                animationDuration: `${D[s]}s`,
                animationTimingFunction: "ease-out",
                animationDelay: "800ms",
              },
              children: e.jsx("svg", {
                viewBox: "0 0 32 32",
                width: "80",
                height: "80",
                children: e.jsx("path", {
                  d: "M16 29 C14 27, 2 18, 2 10 A7 7 0 0 1 16 7 A7 7 0 0 1 30 10 C30 18, 18 27, 16 29Z",
                  fill:
                    s % 3 == 0 ? "#F58E95" : s % 3 == 1 ? "#b91c1c" : "#feb1b0",
                }),
              }),
            },
            s
          )
        ),
      }),
      M = e.jsxs(e.Fragment, {
        children: [
          e.jsxs("div", {
            className:
              "clip-path-front absolute top-0 left-0 z-50 h-[150px] w-[250px] bg-[#b1484a] lg:h-[300px] lg:w-[500px]",
            children: [
              e.jsx("div", {
                className:
                  "clip-path-front-left absolute top-0 left-0 z-40 h-[150px] w-[250px] origin-top bg-[#b1484a] transition-transform duration-500 lg:h-[300px] lg:w-[500px]",
              }),
              e.jsx("div", {
                className:
                  "clip-path-front-right absolute top-0 right-0 z-40 h-[150px] w-[250px] origin-top bg-[#b1484a] transition-transform duration-500 lg:h-[300px] lg:w-[500px]",
              }),
              e.jsx("div", {
                className:
                  "clip-path-front-bottom absolute top-0 left-0 z-40 h-[150px] w-[250px] origin-top bg-[#b1484a] transition-transform duration-500 lg:h-[300px] lg:w-[500px]",
              }),
            ],
          }),
          e.jsx("div", {
            className: `clip-path-flap-bg absolute top-0 left-0 ${g} h-[150px] w-[250px] origin-top bg-[#b1484a] transition-transform duration-500 lg:h-[300px] lg:w-[500px] ${
              y ? "-rotate-x-180" : "rotate-x-0"
            }`,
          }),
          e.jsx("div", {
            className:
              "absolute top-[65px] left-[104px] z-[55] -translate-x-1/2 -translate-y-1/2 scale-[0.6] transition-transform duration-300 lg:top-[140px] lg:left-[190px] " +
              (p
                ? "-translate-x-[7px] -rotate-[45deg]"
                : "translate-x-0 rotate-0 delay-1700"),
            children: e.jsx("svg", {
              viewBox: "0 0 32 29.6",
              className: "h-12 w-12 drop-shadow-lg lg:h-[120px] lg:w-[120px]",
              style: { display: "block" },
              children: e.jsx("path", {
                d: "M23.6,0c-2.7,0-5.1,1.3-6.6,3.3C15.5,1.3,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4c0,11.1,16,19.2,16,19.2s16-8.1,16-19.2\n                                        C32,4.7,27.3,0,23.6,0z",
                fill: "#E66F71",
              }),
            }),
          }),
        ],
      }),
      P = e.jsx("p", {
        className: "text-left text-3xl text-black xl:text-5xl",
        children: e.jsx("em", {
          className: "font-semibold text-black",
          children: c,
        }),
      }),
      H = e.jsxs("p", {
        className: "mt-4 text-right lg:mt-8",
        children: [
          n,
          e.jsx("br", {}),
          e.jsx("span", { className: "font-semibold", children: i }),
        ],
      }),
      K = e.jsxs("div", {
        className:
          "flex h-full w-full flex-col px-10 pt-8 leading-relaxed lg:p-20 lg:pt-10 lg:pb-0",
        children: [
          e.jsx("h2", {
            className:
              "pb-4 text-center text-2xl font-bold text-black lg:p-6 lg:text-4xl",
            children: "Love letter",
          }),
          e.jsxs("div", {
            className: "text-md overflow-hidden text-left lg:text-3xl",
            children: [
              e.jsx("p", {
                className: "lg:mb-4",
                children: e.jsx("em", {
                  className: "font-semibold",
                  children: r,
                }),
              }),
              e.jsxs("div", {
                className: "flex h-full flex-col space-y-3 overflow-y-auto",
                children: [
                  e.jsx("p", {
                    className: "m-0 leading-[1.5]",
                    children: z[0],
                  }),
                  B(z[0], b) && H,
                ],
              }),
            ],
          }),
        ],
      }),
      R = e.jsxs("div", {
        className:
          "text-md flex h-full w-full flex-col px-10 py-8 pt-1 lg:px-20 lg:py-10 lg:pt-0 lg:text-3xl",
        children: [
          z[1] &&
            e.jsx("div", {
              className: "space-y-1",
              children: e.jsx("p", {
                className: "leading-[1.5]",
                children: z[1],
              }),
            }),
          !B(z[0], b) && H,
        ],
      }),
      V = e.jsx("div", {
        className:
          "col-span-12 row-span-3 row-start-4 mx-auto flex items-center justify-center sm:col-span-4 sm:col-start-5",
        children: e.jsx("div", {
          className:
            "fly-in relative h-[150px] w-[250px] origin-top-left scale-100 bg-pink-100 sm:scale-100 lg:h-[300px] lg:w-[500px]",
          onClick: (t) => {
            A(t);
          },
          children: e.jsxs("label", {
            htmlFor: "check",
            className: "absolute cursor-pointer",
            children: [
              e.jsx("div", {
                className: `absolute ${m} top-[10px] ml-[1px] flex h-[280px] w-[490px] scale-50 items-center justify-center rounded-xs bg-white transition-transform duration-700 ease-in-out md:ml-1 lg:h-[540px] lg:w-[980px] ${f} translate-x-[-24%] lg:translate-x-[-25%] ${
                  p ? "cursor-pointer hover:shadow-lg" : ""
                }`,
                style: { left: "50%" },
                children: e.jsx(a, {
                  contentOut: e.jsx(e.Fragment, { children: P }),
                  contentFull: e.jsx(e.Fragment, { children: K }),
                  contentBottom: e.jsx(e.Fragment, { children: R }),
                  onEndOpen: (t) => {
                    setTimeout(() => {
                      j(
                        b
                          ? "translate-y-[60px] rotate-[-4deg] scale-75"
                          : "translate-y-15 rotate-[-5deg] scale-75"
                      ),
                        S(!1);
                    }, 400);
                  },
                  onClose: (t) => {
                    p && !N && A(t);
                  },
                }),
              }),
              M,
            ],
          }),
        }),
      }),
      W = () => {
        const t = C.current;
        t &&
          ((t.muted = !1),
          F(!1),
          t.play().catch((t) => {
            console.error("Failed to play audio:", t);
          }));
      };
    return e.jsxs("div", {
      className: "min-h-screen",
      style: { background: "#ffebeb", fontFamily: "SVN-ComicSansMS" },
      children: [
        x &&
          e.jsx("audio", {
            ref: C,
            loop: !0,
            controls: !0,
            hidden: !0,
            children: e.jsx("source", { src: x, type: "audio/mpeg" }),
          }),
        e.jsx("div", {
          className: "flex justify-end p-4",
          children: T
            ? e.jsx("button", {
                className: "rounded-full bg-white p-2",
                type: "button",
                onClick: W,
                children: e.jsx(l, {
                  className: "cursor-pointer text-2xl text-gray-400",
                }),
              })
            : e.jsx("button", {
                className: "rounded-full bg-white p-2",
                type: "button",
                onClick: () => {
                  F(!0);
                  const t = C.current;
                  t && (t.muted = !0);
                },
                children: e.jsx(s, {
                  className: "cursor-pointer text-2xl text-gray-400",
                }),
              }),
        }),
        e.jsxs("div", {
          className:
            "relative flex min-h-[90vh] w-full items-center justify-center px-2 text-gray-900 sm:px-4 lg:flex",
          children: [I, V],
        }),
      ],
    });
  };
export { n as default };
