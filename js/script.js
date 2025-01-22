/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Cr = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, h) {
        var O = new k.Bare();
        return O.init(l, h);
      }
      function n(l) {
        return l.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function r(l) {
        var h = parseInt(l.slice(1), 16),
          O = (h >> 16) & 255,
          P = (h >> 8) & 255,
          F = 255 & h;
        return [O, P, F];
      }
      function a(l, h, O) {
        return (
          "#" + ((1 << 24) | (l << 16) | (h << 8) | O).toString(16).slice(1)
        );
      }
      function i() {}
      function o(l, h) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof h + "] " + h);
      }
      function u(l, h, O) {
        f("Units do not match [" + l + "]: " + h + ", " + O);
      }
      function s(l, h, O) {
        if ((h !== void 0 && (O = h), l === void 0)) return O;
        var P = O;
        return (
          Oe.test(l) || !xe.test(l)
            ? (P = parseInt(l, 10))
            : xe.test(l) && (P = 1e3 * parseFloat(l)),
          0 > P && (P = 0),
          P === P ? P : O
        );
      }
      function f(l) {
        W.debug && window && window.console.warn(l);
      }
      function T(l) {
        for (var h = -1, O = l ? l.length : 0, P = []; ++h < O; ) {
          var F = l[h];
          F && P.push(F);
        }
        return P;
      }
      var v = (function (l, h, O) {
          function P(oe) {
            return typeof oe == "object";
          }
          function F(oe) {
            return typeof oe == "function";
          }
          function U() {}
          function te(oe, ne) {
            function X() {
              var Ae = new se();
              return F(Ae.init) && Ae.init.apply(Ae, arguments), Ae;
            }
            function se() {}
            ne === O && ((ne = oe), (oe = Object)), (X.Bare = se);
            var ue,
              ve = (U[l] = oe[l]),
              Me = (se[l] = X[l] = new U());
            return (
              (Me.constructor = X),
              (X.mixin = function (Ae) {
                return (se[l] = X[l] = te(X, Ae)[l]), X;
              }),
              (X.open = function (Ae) {
                if (
                  ((ue = {}),
                  F(Ae) ? (ue = Ae.call(X, Me, ve, X, oe)) : P(Ae) && (ue = Ae),
                  P(ue))
                )
                  for (var Yt in ue) h.call(ue, Yt) && (Me[Yt] = ue[Yt]);
                return F(Me.init) || (Me.init = oe), X;
              }),
              X.open(ne)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, h, O, P) {
              var F = (l /= P) * l,
                U = F * l;
              return (
                h +
                O * (-2.75 * U * F + 11 * F * F + -15.5 * U + 8 * F + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, h, O, P) {
              var F = (l /= P) * l,
                U = F * l;
              return h + O * (-1 * U * F + 3 * F * F + -3 * U + 2 * F);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, h, O, P) {
              var F = (l /= P) * l,
                U = F * l;
              return (
                h +
                O * (0.3 * U * F + -1.6 * F * F + 2.2 * U + -1.8 * F + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, h, O, P) {
              var F = (l /= P) * l,
                U = F * l;
              return h + O * (2 * U * F + -5 * F * F + 2 * U + 2 * F);
            },
          ],
          linear: [
            "linear",
            function (l, h, O, P) {
              return (O * l) / P + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, h, O, P) {
              return O * (l /= P) * l + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, h, O, P) {
              return -O * (l /= P) * (l - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, h, O, P) {
              return (l /= P / 2) < 1
                ? (O / 2) * l * l + h
                : (-O / 2) * (--l * (l - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, h, O, P) {
              return O * (l /= P) * l * l + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, h, O, P) {
              return O * ((l = l / P - 1) * l * l + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, h, O, P) {
              return (l /= P / 2) < 1
                ? (O / 2) * l * l * l + h
                : (O / 2) * ((l -= 2) * l * l + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, h, O, P) {
              return O * (l /= P) * l * l * l + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, h, O, P) {
              return -O * ((l = l / P - 1) * l * l * l - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, h, O, P) {
              return (l /= P / 2) < 1
                ? (O / 2) * l * l * l * l + h
                : (-O / 2) * ((l -= 2) * l * l * l - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, h, O, P) {
              return O * (l /= P) * l * l * l * l + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, h, O, P) {
              return O * ((l = l / P - 1) * l * l * l * l + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, h, O, P) {
              return (l /= P / 2) < 1
                ? (O / 2) * l * l * l * l * l + h
                : (O / 2) * ((l -= 2) * l * l * l * l + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, h, O, P) {
              return -O * Math.cos((l / P) * (Math.PI / 2)) + O + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, h, O, P) {
              return O * Math.sin((l / P) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, h, O, P) {
              return (-O / 2) * (Math.cos((Math.PI * l) / P) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, h, O, P) {
              return l === 0 ? h : O * Math.pow(2, 10 * (l / P - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, h, O, P) {
              return l === P
                ? h + O
                : O * (-Math.pow(2, (-10 * l) / P) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, h, O, P) {
              return l === 0
                ? h
                : l === P
                ? h + O
                : (l /= P / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (l - 1)) + h
                : (O / 2) * (-Math.pow(2, -10 * --l) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, h, O, P) {
              return -O * (Math.sqrt(1 - (l /= P) * l) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, h, O, P) {
              return O * Math.sqrt(1 - (l = l / P - 1) * l) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, h, O, P) {
              return (l /= P / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - l * l) - 1) + h
                : (O / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, h, O, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                O * (l /= P) * l * ((F + 1) * l - F) + h
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, h, O, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                O * ((l = l / P - 1) * l * ((F + 1) * l + F) + 1) + h
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, h, O, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                (l /= P / 2) < 1
                  ? (O / 2) * l * l * (((F *= 1.525) + 1) * l - F) + h
                  : (O / 2) *
                      ((l -= 2) * l * (((F *= 1.525) + 1) * l + F) + 2) +
                    h
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        _ = window,
        S = "bkwld-tram",
        m = /[\-\.0-9]/g,
        C = /[A-Z]/,
        L = "number",
        x = /^(rgb|#)/,
        D = /(em|cm|mm|in|pt|pc|px)$/,
        M = /(em|cm|mm|in|pt|pc|px|%)$/,
        H = /(deg|rad|turn)$/,
        z = "unitless",
        Q = /(all|none) 0s ease 0s/,
        Z = /^(width|height)$/,
        J = " ",
        G = b.createElement("a"),
        A = ["Webkit", "Moz", "O", "ms"],
        V = ["-webkit-", "-moz-", "-o-", "-ms-"],
        K = function (l) {
          if (l in G.style) return { dom: l, css: l };
          var h,
            O,
            P = "",
            F = l.split("-");
          for (h = 0; h < F.length; h++)
            P += F[h].charAt(0).toUpperCase() + F[h].slice(1);
          for (h = 0; h < A.length; h++)
            if (((O = A[h] + P), O in G.style))
              return { dom: O, css: V[h] + l };
        },
        Y = (t.support = {
          bind: Function.prototype.bind,
          transform: K("transform"),
          transition: K("transition"),
          backface: K("backface-visibility"),
          timing: K("transition-timing-function"),
        });
      if (Y.transition) {
        var re = Y.timing.dom;
        if (((G.style[re] = g["ease-in-back"][0]), !G.style[re]))
          for (var ie in I) g[ie][0] = I[ie];
      }
      var ce = (t.frame = (function () {
          var l =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return l && Y.bind
            ? l.bind(_)
            : function (h) {
                _.setTimeout(h, 16);
              };
        })()),
        Ee = (t.now = (function () {
          var l = _.performance,
            h = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return h && Y.bind
            ? h.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        y = v(function (l) {
          function h(ae, le) {
            var ye = T(("" + ae).split(J)),
              fe = ye[0];
            le = le || {};
            var Se = B[fe];
            if (!Se) return f("Unsupported property: " + fe);
            if (!le.weak || !this.props[fe]) {
              var Ge = Se[0],
                we = this.props[fe];
              return (
                we || (we = this.props[fe] = new Ge.Bare()),
                we.init(this.$el, ye, Se, le),
                we
              );
            }
          }
          function O(ae, le, ye) {
            if (ae) {
              var fe = typeof ae;
              if (
                (le ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                fe == "number" && le)
              )
                return (
                  (this.timer = new $({
                    duration: ae,
                    context: this,
                    complete: U,
                  })),
                  void (this.active = !0)
                );
              if (fe == "string" && le) {
                switch (ae) {
                  case "hide":
                    X.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    h.call(this, ae, ye && ye[1]);
                }
                return U.call(this);
              }
              if (fe == "function") return void ae.call(this, this);
              if (fe == "object") {
                var Se = 0;
                Me.call(
                  this,
                  ae,
                  function (he, yE) {
                    he.span > Se && (Se = he.span), he.stop(), he.animate(yE);
                  },
                  function (he) {
                    "wait" in he && (Se = s(he.wait, 0));
                  }
                ),
                  ve.call(this),
                  Se > 0 &&
                    ((this.timer = new $({ duration: Se, context: this })),
                    (this.active = !0),
                    le && (this.timer.complete = U));
                var Ge = this,
                  we = !1,
                  hn = {};
                ce(function () {
                  Me.call(Ge, ae, function (he) {
                    he.active && ((we = !0), (hn[he.name] = he.nextStyle));
                  }),
                    we && Ge.$el.css(hn);
                });
              }
            }
          }
          function P(ae) {
            (ae = s(ae, 0)),
              this.active
                ? this.queue.push({ options: ae })
                : ((this.timer = new $({
                    duration: ae,
                    context: this,
                    complete: U,
                  })),
                  (this.active = !0));
          }
          function F(ae) {
            return this.active
              ? (this.queue.push({ options: ae, args: arguments }),
                void (this.timer.complete = U))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function U() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ae = this.queue.shift();
              O.call(this, ae.options, !0, ae.args);
            }
          }
          function te(ae) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var le;
            typeof ae == "string"
              ? ((le = {}), (le[ae] = 1))
              : (le = typeof ae == "object" && ae != null ? ae : this.props),
              Me.call(this, le, Ae),
              ve.call(this);
          }
          function oe(ae) {
            te.call(this, ae), Me.call(this, ae, Yt, gE);
          }
          function ne(ae) {
            typeof ae != "string" && (ae = "block"),
              (this.el.style.display = ae);
          }
          function X() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, S),
              (this.$el = this.el = null);
          }
          function ve() {
            var ae,
              le,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ae in this.props)
              (le = this.props[ae]), le.active && ye.push(le.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[Y.transition.dom] = ye));
          }
          function Me(ae, le, ye) {
            var fe,
              Se,
              Ge,
              we,
              hn = le !== Ae,
              he = {};
            for (fe in ae)
              (Ge = ae[fe]),
                fe in de
                  ? (he.transform || (he.transform = {}),
                    (he.transform[fe] = Ge))
                  : (C.test(fe) && (fe = n(fe)),
                    fe in B ? (he[fe] = Ge) : (we || (we = {}), (we[fe] = Ge)));
            for (fe in he) {
              if (((Ge = he[fe]), (Se = this.props[fe]), !Se)) {
                if (!hn) continue;
                Se = h.call(this, fe);
              }
              le.call(this, Se, Ge);
            }
            ye && we && ye.call(this, we);
          }
          function Ae(ae) {
            ae.stop();
          }
          function Yt(ae, le) {
            ae.set(le);
          }
          function gE(ae) {
            this.$el.css(ae);
          }
          function Ue(ae, le) {
            l[ae] = function () {
              return this.children
                ? EE.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function EE(ae, le) {
            var ye,
              fe = this.children.length;
            for (ye = 0; fe > ye; ye++) ae.apply(this.children[ye], le);
            return this;
          }
          (l.init = function (ae) {
            if (
              ((this.$el = e(ae)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              W.keepInherited && !W.fallback)
            ) {
              var le = q(this.el, "transition");
              le && !Q.test(le) && (this.upstream = le);
            }
            Y.backface &&
              W.hideBackface &&
              p(this.el, Y.backface.css, "hidden");
          }),
            Ue("add", h),
            Ue("start", O),
            Ue("wait", P),
            Ue("then", F),
            Ue("next", U),
            Ue("stop", te),
            Ue("set", oe),
            Ue("show", ne),
            Ue("hide", X),
            Ue("redraw", se),
            Ue("destroy", ue);
        }),
        k = v(y, function (l) {
          function h(O, P) {
            var F = e.data(O, S) || e.data(O, S, new y.Bare());
            return F.el || F.init(O), P ? F.start(P) : F;
          }
          l.init = function (O, P) {
            var F = e(O);
            if (!F.length) return this;
            if (F.length === 1) return h(F[0], P);
            var U = [];
            return (
              F.each(function (te, oe) {
                U.push(h(oe, P));
              }),
              (this.children = U),
              this
            );
          };
        }),
        E = v(function (l) {
          function h() {
            var U = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(U), te;
          }
          function O(U, te, oe) {
            return te !== void 0 && (oe = te), U in g ? U : oe;
          }
          function P(U) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(U);
            return (te ? a(te[1], te[2], te[3]) : U).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var F = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (U, te, oe, ne) {
            (this.$el = U), (this.el = U[0]);
            var X = te[0];
            oe[2] && (X = oe[2]),
              j[X] && (X = j[X]),
              (this.name = X),
              (this.type = oe[1]),
              (this.duration = s(te[1], this.duration, F.duration)),
              (this.ease = O(te[2], this.ease, F.ease)),
              (this.delay = s(te[3], this.delay, F.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Z.test(this.name)),
              (this.unit = ne.unit || this.unit || W.defaultUnit),
              (this.angle = ne.angle || this.angle || W.defaultAngle),
              W.fallback || ne.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    J +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? J + g[this.ease][0] : "") +
                    (this.delay ? J + this.delay + "ms" : "")));
          }),
            (l.set = function (U) {
              (U = this.convert(U, this.type)), this.update(U), this.redraw();
            }),
            (l.transition = function (U) {
              (this.active = !0),
                (U = this.convert(U, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  U == "auto" && (U = h.call(this))),
                (this.nextStyle = U);
            }),
            (l.fallback = function (U) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (U = this.convert(U, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  U == "auto" && (U = h.call(this))),
                (this.tween = new N({
                  from: te,
                  to: U,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return q(this.el, this.name);
            }),
            (l.update = function (U) {
              p(this.el, this.name, U);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var U = this.tween;
              U && U.context && U.destroy();
            }),
            (l.convert = function (U, te) {
              if (U == "auto" && this.auto) return U;
              var oe,
                ne = typeof U == "number",
                X = typeof U == "string";
              switch (te) {
                case L:
                  if (ne) return U;
                  if (X && U.replace(m, "") === "") return +U;
                  oe = "number(unitless)";
                  break;
                case x:
                  if (X) {
                    if (U === "" && this.original) return this.original;
                    if (te.test(U))
                      return U.charAt(0) == "#" && U.length == 7 ? U : P(U);
                  }
                  oe = "hex or rgb string";
                  break;
                case D:
                  if (ne) return U + this.unit;
                  if (X && te.test(U)) return U;
                  oe = "number(px) or string(unit)";
                  break;
                case M:
                  if (ne) return U + this.unit;
                  if (X && te.test(U)) return U;
                  oe = "number(px) or string(unit or %)";
                  break;
                case H:
                  if (ne) return U + this.angle;
                  if (X && te.test(U)) return U;
                  oe = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ne || (X && M.test(U))) return U;
                  oe = "number(unitless) or string(unit or %)";
              }
              return o(oe, U), U;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = v(E, function (l, h) {
          l.init = function () {
            h.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), x));
          };
        }),
        R = v(E, function (l, h) {
          (l.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        w = v(E, function (l, h) {
          function O(P, F) {
            var U, te, oe, ne, X;
            for (U in P)
              (ne = de[U]),
                (oe = ne[0]),
                (te = ne[1] || U),
                (X = this.convert(P[U], oe)),
                F.call(this, te, X, oe);
          }
          (l.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  W.perspective &&
                  ((this.current.perspective = W.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (P) {
              O.call(this, P, function (F, U) {
                this.current[F] = U;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (P) {
              var F = this.values(P);
              this.tween = new ee({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var U,
                te = {};
              for (U in this.current) te[U] = U in F ? F[U] : this.current[U];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (l.fallback = function (P) {
              var F = this.values(P);
              this.tween = new ee({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (P) {
              var F,
                U = "";
              for (F in P) U += F + "(" + P[F] + ") ";
              return U;
            }),
            (l.values = function (P) {
              var F,
                U = {};
              return (
                O.call(this, P, function (te, oe, ne) {
                  (U[te] = oe),
                    this.current[te] === void 0 &&
                      ((F = 0),
                      ~te.indexOf("scale") && (F = 1),
                      (this.current[te] = this.convert(F, ne)));
                }),
                U
              );
            });
        }),
        N = v(function (l) {
          function h(X) {
            oe.push(X) === 1 && ce(O);
          }
          function O() {
            var X,
              se,
              ue,
              ve = oe.length;
            if (ve)
              for (ce(O), se = Ee(), X = ve; X--; )
                (ue = oe[X]), ue && ue.render(se);
          }
          function P(X) {
            var se,
              ue = e.inArray(X, oe);
            ue >= 0 &&
              ((se = oe.slice(ue + 1)),
              (oe.length = ue),
              se.length && (oe = oe.concat(se)));
          }
          function F(X) {
            return Math.round(X * ne) / ne;
          }
          function U(X, se, ue) {
            return a(
              X[0] + ue * (se[0] - X[0]),
              X[1] + ue * (se[1] - X[1]),
              X[2] + ue * (se[2] - X[2])
            );
          }
          var te = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (X) {
            (this.duration = X.duration || 0), (this.delay = X.delay || 0);
            var se = X.ease || te.ease;
            g[se] && (se = g[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = X.update || i),
              (this.complete = X.complete || i),
              (this.context = X.context || this),
              (this.name = X.name);
            var ue = X.from,
              ve = X.to;
            ue === void 0 && (ue = te.from),
              ve === void 0 && (ve = te.to),
              (this.unit = X.unit || ""),
              typeof ue == "number" && typeof ve == "number"
                ? ((this.begin = ue), (this.change = ve - ue))
                : this.format(ve, ue),
              (this.value = this.begin + this.unit),
              (this.start = Ee()),
              X.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Ee()),
                (this.active = !0),
                h(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), P(this));
            }),
            (l.render = function (X) {
              var se,
                ue = X - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var ve = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? U(this.startRGB, this.endRGB, ve)
                    : F(this.begin + ve * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (X, se) {
              if (((se += ""), (X += ""), X.charAt(0) == "#"))
                return (
                  (this.startRGB = r(se)),
                  (this.endRGB = r(X)),
                  (this.endHex = X),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(m, ""),
                  ve = X.replace(m, "");
                ue !== ve && u("tween", se, X), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (X = parseFloat(X)),
                (this.begin = this.value = se),
                (this.change = X - se);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var oe = [],
            ne = 1e3;
        }),
        $ = v(N, function (l) {
          (l.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || i),
              (this.context = h.context),
              this.play();
          }),
            (l.render = function (h) {
              var O = h - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ee = v(N, function (l, h) {
          (l.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var P, F;
            for (P in O.values)
              (F = O.values[P]),
                this.current[P] !== F &&
                  this.tweens.push(
                    new N({
                      name: P,
                      from: this.current[P],
                      to: F,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (O) {
              var P,
                F,
                U = this.tweens.length,
                te = !1;
              for (P = U; P--; )
                (F = this.tweens[P]),
                  F.context &&
                    (F.render(O), (this.current[F.name] = F.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var O,
                  P = this.tweens.length;
                for (O = P; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        W = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !Y.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!Y.transition) return (W.fallback = !0);
        W.agentTests.push("(" + l + ")");
        var h = new RegExp(W.agentTests.join("|"), "i");
        W.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new N(l);
        }),
        (t.delay = function (l, h, O) {
          return new $({ complete: h, duration: l, context: O });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        q = e.css,
        j = { transform: Y.transform && Y.transform.css },
        B = {
          color: [c, x],
          background: [c, x, "background-color"],
          "outline-color": [c, x],
          "border-color": [c, x],
          "border-top-color": [c, x],
          "border-right-color": [c, x],
          "border-bottom-color": [c, x],
          "border-left-color": [c, x],
          "border-width": [E, D],
          "border-top-width": [E, D],
          "border-right-width": [E, D],
          "border-bottom-width": [E, D],
          "border-left-width": [E, D],
          "border-spacing": [E, D],
          "letter-spacing": [E, D],
          margin: [E, D],
          "margin-top": [E, D],
          "margin-right": [E, D],
          "margin-bottom": [E, D],
          "margin-left": [E, D],
          padding: [E, D],
          "padding-top": [E, D],
          "padding-right": [E, D],
          "padding-bottom": [E, D],
          "padding-left": [E, D],
          "outline-width": [E, D],
          opacity: [E, L],
          top: [E, M],
          right: [E, M],
          bottom: [E, M],
          left: [E, M],
          "font-size": [E, M],
          "text-indent": [E, M],
          "word-spacing": [E, M],
          width: [E, M],
          "min-width": [E, M],
          "max-width": [E, M],
          height: [E, M],
          "min-height": [E, M],
          "max-height": [E, M],
          "line-height": [E, z],
          "scroll-top": [R, L, "scrollTop"],
          "scroll-left": [R, L, "scrollLeft"],
        },
        de = {};
      Y.transform &&
        ((B.transform = [w]),
        (de = {
          x: [M, "translateX"],
          y: [M, "translateY"],
          rotate: [H],
          rotateX: [H],
          rotateY: [H],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [H],
          skewX: [H],
          skewY: [H],
        })),
        Y.transform &&
          Y.backface &&
          ((de.z = [M, "translateZ"]),
          (de.rotateZ = [H]),
          (de.scaleZ = [L]),
          (de.perspective = [D]));
      var Oe = /ms/,
        xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var eo = d((kL, Ja) => {
    "use strict";
    var IE = window.$,
      vE = Cr() && IE.tram;
    Ja.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype,
        i = n.push,
        o = n.slice,
        u = n.concat,
        s = r.toString,
        f = r.hasOwnProperty,
        T = n.forEach,
        v = n.map,
        g = n.reduce,
        I = n.reduceRight,
        b = n.filter,
        _ = n.every,
        S = n.some,
        m = n.indexOf,
        C = n.lastIndexOf,
        L = Array.isArray,
        x = Object.keys,
        D = a.bind,
        M =
          (e.each =
          e.forEach =
            function (A, V, K) {
              if (A == null) return A;
              if (T && A.forEach === T) A.forEach(V, K);
              else if (A.length === +A.length) {
                for (var Y = 0, re = A.length; Y < re; Y++)
                  if (V.call(K, A[Y], Y, A) === t) return;
              } else
                for (var ie = e.keys(A), Y = 0, re = ie.length; Y < re; Y++)
                  if (V.call(K, A[ie[Y]], ie[Y], A) === t) return;
              return A;
            });
      (e.map = e.collect =
        function (A, V, K) {
          var Y = [];
          return A == null
            ? Y
            : v && A.map === v
            ? A.map(V, K)
            : (M(A, function (re, ie, ce) {
                Y.push(V.call(K, re, ie, ce));
              }),
              Y);
        }),
        (e.find = e.detect =
          function (A, V, K) {
            var Y;
            return (
              H(A, function (re, ie, ce) {
                if (V.call(K, re, ie, ce)) return (Y = re), !0;
              }),
              Y
            );
          }),
        (e.filter = e.select =
          function (A, V, K) {
            var Y = [];
            return A == null
              ? Y
              : b && A.filter === b
              ? A.filter(V, K)
              : (M(A, function (re, ie, ce) {
                  V.call(K, re, ie, ce) && Y.push(re);
                }),
                Y);
          });
      var H =
        (e.some =
        e.any =
          function (A, V, K) {
            V || (V = e.identity);
            var Y = !1;
            return A == null
              ? Y
              : S && A.some === S
              ? A.some(V, K)
              : (M(A, function (re, ie, ce) {
                  if (Y || (Y = V.call(K, re, ie, ce))) return t;
                }),
                !!Y);
          });
      (e.contains = e.include =
        function (A, V) {
          return A == null
            ? !1
            : m && A.indexOf === m
            ? A.indexOf(V) != -1
            : H(A, function (K) {
                return K === V;
              });
        }),
        (e.delay = function (A, V) {
          var K = o.call(arguments, 2);
          return setTimeout(function () {
            return A.apply(null, K);
          }, V);
        }),
        (e.defer = function (A) {
          return e.delay.apply(e, [A, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (A) {
          var V, K, Y;
          return function () {
            V ||
              ((V = !0),
              (K = arguments),
              (Y = this),
              vE.frame(function () {
                (V = !1), A.apply(Y, K);
              }));
          };
        }),
        (e.debounce = function (A, V, K) {
          var Y,
            re,
            ie,
            ce,
            Ee,
            y = function () {
              var k = e.now() - ce;
              k < V
                ? (Y = setTimeout(y, V - k))
                : ((Y = null), K || ((Ee = A.apply(ie, re)), (ie = re = null)));
            };
          return function () {
            (ie = this), (re = arguments), (ce = e.now());
            var k = K && !Y;
            return (
              Y || (Y = setTimeout(y, V)),
              k && ((Ee = A.apply(ie, re)), (ie = re = null)),
              Ee
            );
          };
        }),
        (e.defaults = function (A) {
          if (!e.isObject(A)) return A;
          for (var V = 1, K = arguments.length; V < K; V++) {
            var Y = arguments[V];
            for (var re in Y) A[re] === void 0 && (A[re] = Y[re]);
          }
          return A;
        }),
        (e.keys = function (A) {
          if (!e.isObject(A)) return [];
          if (x) return x(A);
          var V = [];
          for (var K in A) e.has(A, K) && V.push(K);
          return V;
        }),
        (e.has = function (A, V) {
          return f.call(A, V);
        }),
        (e.isObject = function (A) {
          return A === Object(A);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Z = /\\|'|\r|\n|\u2028|\u2029/g,
        J = function (A) {
          return "\\" + Q[A];
        },
        G = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (A, V, K) {
          !V && K && (V = K), (V = e.defaults({}, V, e.templateSettings));
          var Y = RegExp(
              [
                (V.escape || z).source,
                (V.interpolate || z).source,
                (V.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            re = 0,
            ie = "__p+='";
          A.replace(Y, function (k, E, c, R, w) {
            return (
              (ie += A.slice(re, w).replace(Z, J)),
              (re = w + k.length),
              E
                ? (ie +=
                    `'+
((__t=(` +
                    E +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (ie +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : R &&
                  (ie +=
                    `';
` +
                    R +
                    `
__p+='`),
              k
            );
          }),
            (ie += `';
`);
          var ce = V.variable;
          if (ce) {
            if (!G.test(ce))
              throw new Error("variable is not a bare identifier: " + ce);
          } else
            (ie =
              `with(obj||{}){
` +
              ie +
              `}
`),
              (ce = "obj");
          ie =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ie +
            `return __p;
`;
          var Ee;
          try {
            Ee = new Function(V.variable || "obj", "_", ie);
          } catch (k) {
            throw ((k.source = ie), k);
          }
          var y = function (k) {
            return Ee.call(this, k, e);
          };
          return (
            (y.source =
              "function(" +
              ce +
              `){
` +
              ie +
              "}"),
            y
          );
        }),
        e
      );
    })();
  });
  var Ce = d((XL, uo) => {
    "use strict";
    var pe = {},
      mt = {},
      bt = [],
      Nr = window.Webflow || [],
      nt = window.jQuery,
      qe = nt(window),
      TE = nt(document),
      Be = nt.isFunction,
      Ve = (pe._ = eo()),
      no = (pe.tram = Cr() && nt.tram),
      mn = !1,
      Pr = !1;
    no.config.hideBackface = !1;
    no.config.keepInherited = !0;
    pe.define = function (e, t, n) {
      mt[e] && io(mt[e]);
      var r = (mt[e] = t(nt, Ve, n) || {});
      return ro(r), r;
    };
    pe.require = function (e) {
      return mt[e];
    };
    function ro(e) {
      pe.env() &&
        (Be(e.design) && qe.on("__wf_design", e.design),
        Be(e.preview) && qe.on("__wf_preview", e.preview)),
        Be(e.destroy) && qe.on("__wf_destroy", e.destroy),
        e.ready && Be(e.ready) && hE(e);
    }
    function hE(e) {
      if (mn) {
        e.ready();
        return;
      }
      Ve.contains(bt, e.ready) || bt.push(e.ready);
    }
    function io(e) {
      Be(e.design) && qe.off("__wf_design", e.design),
        Be(e.preview) && qe.off("__wf_preview", e.preview),
        Be(e.destroy) && qe.off("__wf_destroy", e.destroy),
        e.ready && Be(e.ready) && _E(e);
    }
    function _E(e) {
      bt = Ve.filter(bt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (mn) {
        Be(e) && e();
        return;
      }
      Nr.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var _n = navigator.userAgent.toLowerCase(),
      ao = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      mE = (pe.env.chrome =
        /chrome/.test(_n) &&
        /Google/.test(navigator.vendor) &&
        parseInt(_n.match(/chrome\/(\d+)\./)[1], 10)),
      bE = (pe.env.ios = /(ipod|iphone|ipad)/.test(_n));
    pe.env.safari = /safari/.test(_n) && !mE && !bE;
    var Lr;
    ao &&
      TE.on("touchstart mousedown", function (e) {
        Lr = e.target;
      });
    pe.validClick = ao
      ? function (e) {
          return e === Lr || nt.contains(e, Lr);
        }
      : function () {
          return !0;
        };
    var oo = "resize.webflow orientationchange.webflow load.webflow",
      OE = "scroll.webflow " + oo;
    pe.resize = xr(qe, oo);
    pe.scroll = xr(qe, OE);
    pe.redraw = xr();
    function xr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Ve.throttle(function (a) {
          Ve.each(n, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (a) {
          typeof a == "function" && (Ve.contains(n, a) || n.push(a));
        }),
        (r.off = function (a) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Ve.filter(n, function (i) {
            return i !== a;
          });
        }),
        r
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (mn = !0), Pr ? AE() : Ve.each(bt, to), Ve.each(Nr, to), pe.resize.up();
    };
    function to(e) {
      Be(e) && e();
    }
    function AE() {
      (Pr = !1), Ve.each(mt, ro);
    }
    var dt;
    pe.load = function (e) {
      dt.then(e);
    };
    function so() {
      dt && (dt.reject(), qe.off("load", dt.resolve)),
        (dt = new nt.Deferred()),
        qe.on("load", dt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Pr = !0),
        qe.triggerHandler("__wf_destroy"),
        e.domready != null && (mn = e.domready),
        Ve.each(mt, io),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (bt = []),
        (Nr = []),
        dt.state() === "pending" && so();
    };
    nt(pe.ready);
    so();
    uo.exports = window.Webflow = pe;
  });
  var fo = d((WL, lo) => {
    "use strict";
    var co = Ce();
    co.define("brand", (lo.exports = function () {}), function (e) {
      var t = {},
        n = document,
        r = e("html"),
        a = e("body"),
        i = ".w-webflow-badge",
        o = window.location,
        u = /PhantomJS/i.test(navigator.userAgent),
        s =
          "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        f;
      t.ready = function () {
        var I = r.attr("data-wf-status"),
          b = r.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(b) && o.hostname !== b && (I = !0),
          I &&
            !u &&
            ((f = f || v()), g(), setTimeout(g, 500), e(n).off(s, T).on(s, T));
      };
      function T() {
        var I =
          n.fullScreen ||
          n.mozFullScreen ||
          n.webkitIsFullScreen ||
          n.msFullscreenElement ||
          !!n.webkitFullscreenElement;
        e(f).attr("style", I ? "display: none !important;" : "");
      }
      function v() {
        var I = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
          b = e("<img>")
            .attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg")
            .attr("alt", "")
            .css({ marginRight: "4px", width: "26px" }),
          _ = e("<img>")
            .attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg")
            .attr("alt", "Made in Webflow");
        return I.append(b, _), I[0];
      }
      function g() {
        var I = a.children(i),
          b = I.length && I.get(0) === f,
          _ = co.env("editor");
        if (b) {
          _ && I.remove();
          return;
        }
        I.length && I.remove(), _ || a.append(f);
      }
      return t;
    });
  });
  var go = d((BL, po) => {
    "use strict";
    var Ot = Ce();
    Ot.define(
      "links",
      (po.exports = function (e, t) {
        var n = {},
          r = e(window),
          a,
          i = Ot.env(),
          o = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          T = /\/$/,
          v,
          g;
        n.ready = n.design = n.preview = I;
        function I() {
          (a = i && Ot.env("design")),
            (g = Ot.env("slug") || o.pathname || ""),
            Ot.scroll.off(_),
            (v = []);
          for (var m = document.links, C = 0; C < m.length; ++C) b(m[C]);
          v.length && (Ot.scroll.on(_), _());
        }
        function b(m) {
          if (!m.getAttribute("hreflang")) {
            var C =
              (a && m.getAttribute("href-disabled")) || m.getAttribute("href");
            if (((u.href = C), !(C.indexOf(":") >= 0))) {
              var L = e(m);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === o.host + o.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var x = e(u.hash);
                x.length && v.push({ link: L, sec: x, active: !1 });
                return;
              }
              if (!(C === "#" || C === "")) {
                var D =
                  u.href === o.href || C === g || (f.test(C) && T.test(g));
                S(L, s, D);
              }
            }
          }
        }
        function _() {
          var m = r.scrollTop(),
            C = r.height();
          t.each(v, function (L) {
            if (!L.link.attr("hreflang")) {
              var x = L.link,
                D = L.sec,
                M = D.offset().top,
                H = D.outerHeight(),
                z = C * 0.5,
                Q = D.is(":visible") && M + H - z >= m && M + z <= m + C;
              L.active !== Q && ((L.active = Q), S(x, s, Q));
            }
          });
        }
        function S(m, C, L) {
          var x = m.hasClass(C);
          (L && x) || (!L && !x) || (L ? m.addClass(C) : m.removeClass(C));
        }
        return n;
      })
    );
  });
  var yo = d((HL, Eo) => {
    "use strict";
    var bn = Ce();
    bn.define(
      "scroll",
      (Eo.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = b() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (G) {
              window.setTimeout(G, 15);
            },
          s = bn.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          T = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + T + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(g));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function S(G) {
          return _.test(G.hash) && G.host + G.pathname === n.host + n.pathname;
        }
        let m =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function C() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            m.matches
          );
        }
        function L(G, A) {
          var V;
          switch (A) {
            case "add":
              (V = G.attr("tabindex")),
                V
                  ? G.attr("data-wf-tabindex-swap", V)
                  : G.attr("tabindex", "-1");
              break;
            case "remove":
              (V = G.attr("data-wf-tabindex-swap")),
                V
                  ? (G.attr("tabindex", V),
                    G.removeAttr("data-wf-tabindex-swap"))
                  : G.removeAttr("tabindex");
              break;
          }
          G.toggleClass("wf-force-outline-none", A === "add");
        }
        function x(G) {
          var A = G.currentTarget;
          if (
            !(
              bn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))
            )
          ) {
            var V = S(A) ? A.hash : "";
            if (V !== "") {
              var K = e(V);
              K.length &&
                (G && (G.preventDefault(), G.stopPropagation()),
                D(V, G),
                window.setTimeout(
                  function () {
                    M(K, function () {
                      L(K, "add"),
                        K.get(0).focus({ preventScroll: !0 }),
                        L(K, "remove");
                    });
                  },
                  G ? 0 : 300
                ));
            }
          }
        }
        function D(G) {
          if (
            n.hash !== G &&
            r &&
            r.pushState &&
            !(bn.env.chrome && n.protocol === "file:")
          ) {
            var A = r.state && r.state.hash;
            A !== G && r.pushState({ hash: G }, "", G);
          }
        }
        function M(G, A) {
          var V = a.scrollTop(),
            K = H(G);
          if (V !== K) {
            var Y = z(G, V, K),
              re = Date.now(),
              ie = function () {
                var ce = Date.now() - re;
                window.scroll(0, Q(V, K, ce, Y)),
                  ce <= Y ? u(ie) : typeof A == "function" && A();
              };
            u(ie);
          }
        }
        function H(G) {
          var A = e(f),
            V = A.css("position") === "fixed" ? A.outerHeight() : 0,
            K = G.offset().top - V;
          if (G.data("scroll") === "mid") {
            var Y = a.height() - V,
              re = G.outerHeight();
            re < Y && (K -= Math.round((Y - re) / 2));
          }
          return K;
        }
        function z(G, A, V) {
          if (C()) return 0;
          var K = 1;
          return (
            o.add(G).each(function (Y, re) {
              var ie = parseFloat(re.getAttribute("data-scroll-time"));
              !isNaN(ie) && ie >= 0 && (K = ie);
            }),
            (472.143 * Math.log(Math.abs(A - V) + 125) - 2e3) * K
          );
        }
        function Q(G, A, V, K) {
          return V > K ? A : G + (A - G) * Z(V / K);
        }
        function Z(G) {
          return G < 0.5
            ? 4 * G * G * G
            : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1;
        }
        function J() {
          var { WF_CLICK_EMPTY: G, WF_CLICK_SCROLL: A } = t;
          i.on(A, v, x),
            i.on(G, T, function (V) {
              V.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: J };
      })
    );
  });
  var To = d((zL, vo) => {
    "use strict";
    var Io = Ce();
    Io.define(
      "focus",
      (vo.exports = function () {
        var e = [],
          t = !1;
        function n(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function r(o) {
          var u = o.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function a(o) {
          r(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Io.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var _o = d((YL, ho) => {
    "use strict";
    var SE = Ce();
    SE.define(
      "focus-visible",
      (ho.exports = function () {
        function e(n) {
          var r = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function s(L) {
            var x = L.type,
              D = L.tagName;
            return !!(
              (D === "INPUT" && o[x] && !L.readOnly) ||
              (D === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function f(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function T(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function v(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (u(n.activeElement) && f(n.activeElement), (r = !0));
          }
          function g() {
            r = !1;
          }
          function I(L) {
            u(L.target) && (r || s(L.target)) && f(L.target);
          }
          function b(L) {
            u(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              T(L.target));
          }
          function _() {
            document.visibilityState === "hidden" && (a && (r = !0), S());
          }
          function S() {
            document.addEventListener("mousemove", C),
              document.addEventListener("mousedown", C),
              document.addEventListener("mouseup", C),
              document.addEventListener("pointermove", C),
              document.addEventListener("pointerdown", C),
              document.addEventListener("pointerup", C),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchstart", C),
              document.addEventListener("touchend", C);
          }
          function m() {
            document.removeEventListener("mousemove", C),
              document.removeEventListener("mousedown", C),
              document.removeEventListener("mouseup", C),
              document.removeEventListener("pointermove", C),
              document.removeEventListener("pointerdown", C),
              document.removeEventListener("pointerup", C),
              document.removeEventListener("touchmove", C),
              document.removeEventListener("touchstart", C),
              document.removeEventListener("touchend", C);
          }
          function C(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), m());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", _, !0),
            S(),
            n.addEventListener("focus", I, !0),
            n.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var bo = d((QL, mo) => {
    "use strict";
    var RE = Ce();
    RE.define(
      "touch",
      (mo.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var o = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            T;
          i.addEventListener("touchstart", v, !1),
            i.addEventListener("touchmove", g, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", b, !1),
            i.addEventListener("mousedown", v, !1),
            i.addEventListener("mousemove", g, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", b, !1);
          function v(S) {
            var m = S.touches;
            (m && m.length > 1) ||
              ((o = !0),
              m ? ((u = !0), (f = m[0].clientX)) : (f = S.clientX),
              (T = f));
          }
          function g(S) {
            if (o) {
              if (u && S.type === "mousemove") {
                S.preventDefault(), S.stopPropagation();
                return;
              }
              var m = S.touches,
                C = m ? m[0].clientX : S.clientX,
                L = C - T;
              (T = C),
                Math.abs(L) > s &&
                  n &&
                  String(n()) === "" &&
                  (a("swipe", S, { direction: L > 0 ? "right" : "left" }), b());
            }
          }
          function I(S) {
            if (o && ((o = !1), u && S.type === "mouseup")) {
              S.preventDefault(), S.stopPropagation(), (u = !1);
              return;
            }
          }
          function b() {
            o = !1;
          }
          function _() {
            i.removeEventListener("touchstart", v, !1),
              i.removeEventListener("touchmove", g, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", b, !1),
              i.removeEventListener("mousedown", v, !1),
              i.removeEventListener("mousemove", g, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", b, !1),
              (i = null);
          }
          this.destroy = _;
        }
        function a(i, o, u) {
          var s = e.Event(i, { originalEvent: o });
          e(o.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Ao = d((KL, Oo) => {
    "use strict";
    var Mr = Ce();
    Mr.define(
      "edit",
      (Oo.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Mr.env("test") || Mr.env("frame")) && !n.fixture && !wE())
        )
          return { exit: 1 };
        var r = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          u = "hashchange",
          s,
          f = n.load || g,
          T = !1;
        try {
          T =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        T
          ? f()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            f()
          : a.on(u, v).triggerHandler(u);
        function v() {
          s || (/\?edit/.test(o.hash) && f());
        }
        function g() {
          (s = !0),
            (window.WebflowEditor = !0),
            a.off(u, v),
            C(function (x) {
              e.ajax({
                url: m("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: I(x),
              });
            });
        }
        function I(x) {
          return function (D) {
            if (!D) {
              console.error("Could not load editor data");
              return;
            }
            (D.thirdPartyCookiesSupported = x),
              b(S(D.scriptPath), function () {
                window.WebflowEditor(D);
              });
          };
        }
        function b(x, D) {
          e.ajax({ type: "GET", url: x, dataType: "script", cache: !0 }).then(
            D,
            _
          );
        }
        function _(x, D, M) {
          throw (console.error("Could not load editor script: " + D), M);
        }
        function S(x) {
          return x.indexOf("//") >= 0
            ? x
            : m("https://editor-api.webflow.com" + x);
        }
        function m(x) {
          return x.replace(/([^:])\/\//g, "$1/");
        }
        function C(x) {
          var D = window.document.createElement("iframe");
          (D.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (D.style.display = "none"),
            (D.sandbox = "allow-scripts allow-same-origin");
          var M = function (H) {
            H.data === "WF_third_party_cookies_unsupported"
              ? (L(D, M), x(!1))
              : H.data === "WF_third_party_cookies_supported" &&
                (L(D, M), x(!0));
          };
          (D.onerror = function () {
            L(D, M), x(!1);
          }),
            window.addEventListener("message", M, !1),
            window.document.body.appendChild(D);
        }
        function L(x, D) {
          window.removeEventListener("message", D, !1), x.remove();
        }
        return r;
      })
    );
    function wE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Dr = d((jL, So) => {
    var CE =
      typeof global == "object" && global && global.Object === Object && global;
    So.exports = CE;
  });
  var ke = d(($L, Ro) => {
    var LE = Dr(),
      NE = typeof self == "object" && self && self.Object === Object && self,
      PE = LE || NE || Function("return this")();
    Ro.exports = PE;
  });
  var At = d((ZL, wo) => {
    var xE = ke(),
      ME = xE.Symbol;
    wo.exports = ME;
  });
  var Po = d((JL, No) => {
    var Co = At(),
      Lo = Object.prototype,
      DE = Lo.hasOwnProperty,
      FE = Lo.toString,
      Qt = Co ? Co.toStringTag : void 0;
    function UE(e) {
      var t = DE.call(e, Qt),
        n = e[Qt];
      try {
        e[Qt] = void 0;
        var r = !0;
      } catch {}
      var a = FE.call(e);
      return r && (t ? (e[Qt] = n) : delete e[Qt]), a;
    }
    No.exports = UE;
  });
  var Mo = d((e7, xo) => {
    var GE = Object.prototype,
      VE = GE.toString;
    function qE(e) {
      return VE.call(e);
    }
    xo.exports = qE;
  });
  var rt = d((t7, Uo) => {
    var Do = At(),
      kE = Po(),
      XE = Mo(),
      WE = "[object Null]",
      BE = "[object Undefined]",
      Fo = Do ? Do.toStringTag : void 0;
    function HE(e) {
      return e == null
        ? e === void 0
          ? BE
          : WE
        : Fo && Fo in Object(e)
        ? kE(e)
        : XE(e);
    }
    Uo.exports = HE;
  });
  var Fr = d((n7, Go) => {
    function zE(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Go.exports = zE;
  });
  var Ur = d((r7, Vo) => {
    var YE = Fr(),
      QE = YE(Object.getPrototypeOf, Object);
    Vo.exports = QE;
  });
  var Je = d((i7, qo) => {
    function KE(e) {
      return e != null && typeof e == "object";
    }
    qo.exports = KE;
  });
  var Gr = d((a7, Xo) => {
    var jE = rt(),
      $E = Ur(),
      ZE = Je(),
      JE = "[object Object]",
      ey = Function.prototype,
      ty = Object.prototype,
      ko = ey.toString,
      ny = ty.hasOwnProperty,
      ry = ko.call(Object);
    function iy(e) {
      if (!ZE(e) || jE(e) != JE) return !1;
      var t = $E(e);
      if (t === null) return !0;
      var n = ny.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && ko.call(n) == ry;
    }
    Xo.exports = iy;
  });
  var Wo = d((Vr) => {
    "use strict";
    Object.defineProperty(Vr, "__esModule", { value: !0 });
    Vr.default = ay;
    function ay(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Bo = d((kr, qr) => {
    "use strict";
    Object.defineProperty(kr, "__esModule", { value: !0 });
    var oy = Wo(),
      sy = uy(oy);
    function uy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var St;
    typeof self < "u"
      ? (St = self)
      : typeof window < "u"
      ? (St = window)
      : typeof global < "u"
      ? (St = global)
      : typeof qr < "u"
      ? (St = qr)
      : (St = Function("return this")());
    var cy = (0, sy.default)(St);
    kr.default = cy;
  });
  var Xr = d((Kt) => {
    "use strict";
    Kt.__esModule = !0;
    Kt.ActionTypes = void 0;
    Kt.default = Qo;
    var ly = Gr(),
      dy = Yo(ly),
      fy = Bo(),
      Ho = Yo(fy);
    function Yo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zo = (Kt.ActionTypes = { INIT: "@@redux/INIT" });
    function Qo(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(Qo)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        u = o,
        s = !1;
      function f() {
        u === o && (u = o.slice());
      }
      function T() {
        return i;
      }
      function v(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var S = !0;
        return (
          f(),
          u.push(_),
          function () {
            if (S) {
              (S = !1), f();
              var C = u.indexOf(_);
              u.splice(C, 1);
            }
          }
        );
      }
      function g(_) {
        if (!(0, dy.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (i = a(i, _));
        } finally {
          s = !1;
        }
        for (var S = (o = u), m = 0; m < S.length; m++) S[m]();
        return _;
      }
      function I(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = _), g({ type: zo.INIT });
      }
      function b() {
        var _,
          S = v;
        return (
          (_ = {
            subscribe: function (C) {
              if (typeof C != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                C.next && C.next(T());
              }
              L();
              var x = S(L);
              return { unsubscribe: x };
            },
          }),
          (_[Ho.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        g({ type: zo.INIT }),
        (r = { dispatch: g, subscribe: v, getState: T, replaceReducer: I }),
        (r[Ho.default] = b),
        r
      );
    }
  });
  var Br = d((Wr) => {
    "use strict";
    Wr.__esModule = !0;
    Wr.default = py;
    function py(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var $o = d((Hr) => {
    "use strict";
    Hr.__esModule = !0;
    Hr.default = vy;
    var Ko = Xr(),
      gy = Gr(),
      c7 = jo(gy),
      Ey = Br(),
      l7 = jo(Ey);
    function jo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function yy(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Iy(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: Ko.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ko.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function vy(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        typeof e[a] == "function" && (n[a] = e[a]);
      }
      var i = Object.keys(n);
      if (!1) var o;
      var u;
      try {
        Iy(n);
      } catch (s) {
        u = s;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          T = arguments[1];
        if (u) throw u;
        if (!1) var v;
        for (var g = !1, I = {}, b = 0; b < i.length; b++) {
          var _ = i[b],
            S = n[_],
            m = f[_],
            C = S(m, T);
          if (typeof C > "u") {
            var L = yy(_, T);
            throw new Error(L);
          }
          (I[_] = C), (g = g || C !== m);
        }
        return g ? I : f;
      };
    }
  });
  var Jo = d((zr) => {
    "use strict";
    zr.__esModule = !0;
    zr.default = Ty;
    function Zo(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Ty(e, t) {
      if (typeof e == "function") return Zo(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
        var i = n[a],
          o = e[i];
        typeof o == "function" && (r[i] = Zo(o, t));
      }
      return r;
    }
  });
  var Qr = d((Yr) => {
    "use strict";
    Yr.__esModule = !0;
    Yr.default = hy;
    function hy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var es = d((Kr) => {
    "use strict";
    Kr.__esModule = !0;
    var _y =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    Kr.default = Ay;
    var my = Qr(),
      by = Oy(my);
    function Oy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ay() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (a, i, o) {
          var u = r(a, i, o),
            s = u.dispatch,
            f = [],
            T = {
              getState: u.getState,
              dispatch: function (g) {
                return s(g);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(T);
            })),
            (s = by.default.apply(void 0, f)(u.dispatch)),
            _y({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var jr = d((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
        void 0;
    var Sy = Xr(),
      Ry = Rt(Sy),
      wy = $o(),
      Cy = Rt(wy),
      Ly = Jo(),
      Ny = Rt(Ly),
      Py = es(),
      xy = Rt(Py),
      My = Qr(),
      Dy = Rt(My),
      Fy = Br(),
      E7 = Rt(Fy);
    function Rt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = Ry.default;
    De.combineReducers = Cy.default;
    De.bindActionCreators = Ny.default;
    De.applyMiddleware = xy.default;
    De.compose = Dy.default;
  });
  var ts = d(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    function Uy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Uy($r, {
      EventAppliesTo: function () {
        return Vy;
      },
      EventBasedOn: function () {
        return qy;
      },
      EventContinuousMouseAxes: function () {
        return ky;
      },
      EventLimitAffectedElements: function () {
        return Xy;
      },
      EventTypeConsts: function () {
        return Gy;
      },
      QuickEffectDirectionConsts: function () {
        return By;
      },
      QuickEffectIds: function () {
        return Wy;
      },
    });
    var Gy = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      Vy = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      qy = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      ky = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      Xy = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      Wy = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      By = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var Jr = d((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    function Hy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Hy(Zr, {
      ActionAppliesTo: function () {
        return Yy;
      },
      ActionTypeConsts: function () {
        return zy;
      },
    });
    var zy = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      Yy = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var ns = d((ei) => {
    "use strict";
    Object.defineProperty(ei, "__esModule", { value: !0 });
    Object.defineProperty(ei, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return Qy;
      },
    });
    var Qy = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var rs = d((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    Object.defineProperty(ti, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return rI;
      },
    });
    var Ky = Jr(),
      {
        TRANSFORM_MOVE: jy,
        TRANSFORM_SCALE: $y,
        TRANSFORM_ROTATE: Zy,
        TRANSFORM_SKEW: Jy,
        STYLE_SIZE: eI,
        STYLE_FILTER: tI,
        STYLE_FONT_VARIATION: nI,
      } = Ky.ActionTypeConsts,
      rI = {
        [jy]: !0,
        [$y]: !0,
        [Zy]: !0,
        [Jy]: !0,
        [eI]: !0,
        [tI]: !0,
        [nI]: !0,
      };
  });
  var is = d((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    function iI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    iI(ni, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return _I;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return EI;
      },
      IX2_CLEAR_REQUESTED: function () {
        return fI;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return hI;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return pI;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return gI;
      },
      IX2_INSTANCE_ADDED: function () {
        return II;
      },
      IX2_INSTANCE_REMOVED: function () {
        return TI;
      },
      IX2_INSTANCE_STARTED: function () {
        return vI;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return bI;
      },
      IX2_PARAMETER_CHANGED: function () {
        return yI;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return lI;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return cI;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return aI;
      },
      IX2_SESSION_INITIALIZED: function () {
        return oI;
      },
      IX2_SESSION_STARTED: function () {
        return sI;
      },
      IX2_SESSION_STOPPED: function () {
        return uI;
      },
      IX2_STOP_REQUESTED: function () {
        return dI;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return OI;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return mI;
      },
    });
    var aI = "IX2_RAW_DATA_IMPORTED",
      oI = "IX2_SESSION_INITIALIZED",
      sI = "IX2_SESSION_STARTED",
      uI = "IX2_SESSION_STOPPED",
      cI = "IX2_PREVIEW_REQUESTED",
      lI = "IX2_PLAYBACK_REQUESTED",
      dI = "IX2_STOP_REQUESTED",
      fI = "IX2_CLEAR_REQUESTED",
      pI = "IX2_EVENT_LISTENER_ADDED",
      gI = "IX2_EVENT_STATE_CHANGED",
      EI = "IX2_ANIMATION_FRAME_CHANGED",
      yI = "IX2_PARAMETER_CHANGED",
      II = "IX2_INSTANCE_ADDED",
      vI = "IX2_INSTANCE_STARTED",
      TI = "IX2_INSTANCE_REMOVED",
      hI = "IX2_ELEMENT_STATE_CHANGED",
      _I = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      mI = "IX2_VIEWPORT_WIDTH_CHANGED",
      bI = "IX2_MEDIA_QUERIES_DEFINED",
      OI = "IX2_TEST_FRAME_RENDERED";
  });
  var as = d((ri) => {
    "use strict";
    Object.defineProperty(ri, "__esModule", { value: !0 });
    function AI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    AI(ri, {
      ABSTRACT_NODE: function () {
        return bv;
      },
      AUTO: function () {
        return fv;
      },
      BACKGROUND: function () {
        return ov;
      },
      BACKGROUND_COLOR: function () {
        return av;
      },
      BAR_DELIMITER: function () {
        return Ev;
      },
      BORDER_COLOR: function () {
        return sv;
      },
      BOUNDARY_SELECTOR: function () {
        return LI;
      },
      CHILDREN: function () {
        return yv;
      },
      COLON_DELIMITER: function () {
        return gv;
      },
      COLOR: function () {
        return uv;
      },
      COMMA_DELIMITER: function () {
        return pv;
      },
      CONFIG_UNIT: function () {
        return GI;
      },
      CONFIG_VALUE: function () {
        return MI;
      },
      CONFIG_X_UNIT: function () {
        return DI;
      },
      CONFIG_X_VALUE: function () {
        return NI;
      },
      CONFIG_Y_UNIT: function () {
        return FI;
      },
      CONFIG_Y_VALUE: function () {
        return PI;
      },
      CONFIG_Z_UNIT: function () {
        return UI;
      },
      CONFIG_Z_VALUE: function () {
        return xI;
      },
      DISPLAY: function () {
        return cv;
      },
      FILTER: function () {
        return tv;
      },
      FLEX: function () {
        return lv;
      },
      FONT_VARIATION_SETTINGS: function () {
        return nv;
      },
      HEIGHT: function () {
        return iv;
      },
      HTML_ELEMENT: function () {
        return _v;
      },
      IMMEDIATE_CHILDREN: function () {
        return Iv;
      },
      IX2_ID_DELIMITER: function () {
        return SI;
      },
      OPACITY: function () {
        return ev;
      },
      PARENT: function () {
        return Tv;
      },
      PLAIN_OBJECT: function () {
        return mv;
      },
      PRESERVE_3D: function () {
        return hv;
      },
      RENDER_GENERAL: function () {
        return Av;
      },
      RENDER_PLUGIN: function () {
        return Rv;
      },
      RENDER_STYLE: function () {
        return Sv;
      },
      RENDER_TRANSFORM: function () {
        return Ov;
      },
      ROTATE_X: function () {
        return QI;
      },
      ROTATE_Y: function () {
        return KI;
      },
      ROTATE_Z: function () {
        return jI;
      },
      SCALE_3D: function () {
        return YI;
      },
      SCALE_X: function () {
        return BI;
      },
      SCALE_Y: function () {
        return HI;
      },
      SCALE_Z: function () {
        return zI;
      },
      SIBLINGS: function () {
        return vv;
      },
      SKEW: function () {
        return $I;
      },
      SKEW_X: function () {
        return ZI;
      },
      SKEW_Y: function () {
        return JI;
      },
      TRANSFORM: function () {
        return VI;
      },
      TRANSLATE_3D: function () {
        return WI;
      },
      TRANSLATE_X: function () {
        return qI;
      },
      TRANSLATE_Y: function () {
        return kI;
      },
      TRANSLATE_Z: function () {
        return XI;
      },
      WF_PAGE: function () {
        return RI;
      },
      WIDTH: function () {
        return rv;
      },
      WILL_CHANGE: function () {
        return dv;
      },
      W_MOD_IX: function () {
        return CI;
      },
      W_MOD_JS: function () {
        return wI;
      },
    });
    var SI = "|",
      RI = "data-wf-page",
      wI = "w-mod-js",
      CI = "w-mod-ix",
      LI = ".w-dyn-item",
      NI = "xValue",
      PI = "yValue",
      xI = "zValue",
      MI = "value",
      DI = "xUnit",
      FI = "yUnit",
      UI = "zUnit",
      GI = "unit",
      VI = "transform",
      qI = "translateX",
      kI = "translateY",
      XI = "translateZ",
      WI = "translate3d",
      BI = "scaleX",
      HI = "scaleY",
      zI = "scaleZ",
      YI = "scale3d",
      QI = "rotateX",
      KI = "rotateY",
      jI = "rotateZ",
      $I = "skew",
      ZI = "skewX",
      JI = "skewY",
      ev = "opacity",
      tv = "filter",
      nv = "font-variation-settings",
      rv = "width",
      iv = "height",
      av = "backgroundColor",
      ov = "background",
      sv = "borderColor",
      uv = "color",
      cv = "display",
      lv = "flex",
      dv = "willChange",
      fv = "AUTO",
      pv = ",",
      gv = ":",
      Ev = "|",
      yv = "CHILDREN",
      Iv = "IMMEDIATE_CHILDREN",
      vv = "SIBLINGS",
      Tv = "PARENT",
      hv = "preserve-3d",
      _v = "HTML_ELEMENT",
      mv = "PLAIN_OBJECT",
      bv = "ABSTRACT_NODE",
      Ov = "RENDER_TRANSFORM",
      Av = "RENDER_GENERAL",
      Sv = "RENDER_STYLE",
      Rv = "RENDER_PLUGIN";
  });
  var Le = d((ft) => {
    "use strict";
    Object.defineProperty(ft, "__esModule", { value: !0 });
    function wv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    wv(ft, {
      ActionTypeConsts: function () {
        return Lv.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return Nv;
      },
      IX2EngineConstants: function () {
        return Pv;
      },
      QuickEffectIds: function () {
        return Cv.QuickEffectIds;
      },
    });
    var Cv = On(ts(), ft),
      Lv = On(Jr(), ft);
    On(ns(), ft);
    On(rs(), ft);
    var Nv = ss(is()),
      Pv = ss(as());
    function On(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function os(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (os = function (r) {
        return r ? n : t;
      })(e);
    }
    function ss(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = os(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var us = d((ii) => {
    "use strict";
    Object.defineProperty(ii, "__esModule", { value: !0 });
    Object.defineProperty(ii, "ixData", {
      enumerable: !0,
      get: function () {
        return Dv;
      },
    });
    var xv = Le(),
      { IX2_RAW_DATA_IMPORTED: Mv } = xv.IX2EngineActionTypes,
      Dv = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Mv:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var wt = d((Ie) => {
    "use strict";
    Object.defineProperty(Ie, "__esModule", { value: !0 });
    var Fv =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Ie.clone = Sn;
    Ie.addLast = ds;
    Ie.addFirst = fs;
    Ie.removeLast = ps;
    Ie.removeFirst = gs;
    Ie.insert = Es;
    Ie.removeAt = ys;
    Ie.replaceAt = Is;
    Ie.getIn = Rn;
    Ie.set = wn;
    Ie.setIn = Cn;
    Ie.update = Ts;
    Ie.updateIn = hs;
    Ie.merge = _s;
    Ie.mergeDeep = ms;
    Ie.mergeIn = bs;
    Ie.omit = Os;
    Ie.addDefaults = As;
    var cs = "INVALID_ARGS";
    function ls(e) {
      throw new Error(e);
    }
    function ai(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Uv = {}.hasOwnProperty;
    function Sn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ai(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    function Ne(e, t, n) {
      var r = n;
      r == null && ls(cs);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        o[u - 3] = arguments[u];
      for (var s = 0; s < o.length; s++) {
        var f = o[s];
        if (f != null) {
          var T = ai(f);
          if (T.length)
            for (var v = 0; v <= T.length; v++) {
              var g = T[v];
              if (!(e && r[g] !== void 0)) {
                var I = f[g];
                t && An(r[g]) && An(I) && (I = Ne(e, t, r[g], I)),
                  !(I === void 0 || I === r[g]) &&
                    (a || ((a = !0), (r = Sn(r))), (r[g] = I));
              }
            }
        }
      }
      return r;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : Fv(e);
      return e != null && (t === "object" || t === "function");
    }
    function ds(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function fs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ps(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function gs(e) {
      return e.length ? e.slice(1) : e;
    }
    function Es(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function ys(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Is(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
      return (a[t] = n), a;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && ls(cs), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var a = t[r];
          if (((n = n?.[a]), n === void 0)) return n;
        }
        return n;
      }
    }
    function wn(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        a = e ?? r;
      if (a[t] === n) return a;
      var i = Sn(a);
      return (i[t] = n), i;
    }
    function vs(e, t, n, r) {
      var a = void 0,
        i = t[r];
      if (r === t.length - 1) a = n;
      else {
        var o =
          An(e) && An(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        a = vs(o, t, n, r + 1);
      }
      return wn(e, i, a);
    }
    function Cn(e, t, n) {
      return t.length ? vs(e, t, n, 0) : n;
    }
    function Ts(e, t, n) {
      var r = e?.[t],
        a = n(r);
      return wn(e, t, a);
    }
    function hs(e, t, n) {
      var r = Rn(e, t),
        a = n(r);
      return Cn(e, t, a);
    }
    function _s(e, t, n, r, a, i) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ne.call.apply(Ne, [null, !1, !1, e, t, n, r, a, i].concat(u))
        : Ne(!1, !1, e, t, n, r, a, i);
    }
    function ms(e, t, n, r, a, i) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ne.call.apply(Ne, [null, !1, !0, e, t, n, r, a, i].concat(u))
        : Ne(!1, !0, e, t, n, r, a, i);
    }
    function bs(e, t, n, r, a, i, o) {
      var u = Rn(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          f = arguments.length,
          T = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        T[v - 7] = arguments[v];
      return (
        T.length
          ? (s = Ne.call.apply(Ne, [null, !1, !1, u, n, r, a, i, o].concat(T)))
          : (s = Ne(!1, !1, u, n, r, a, i, o)),
        Cn(e, t, s)
      );
    }
    function Os(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
        if (Uv.call(e, n[a])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, o = ai(e), u = 0; u < o.length; u++) {
        var s = o[u];
        n.indexOf(s) >= 0 || (i[s] = e[s]);
      }
      return i;
    }
    function As(e, t, n, r, a, i) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ne.call.apply(Ne, [null, !0, !1, e, t, n, r, a, i].concat(u))
        : Ne(!0, !1, e, t, n, r, a, i);
    }
    var Gv = {
      clone: Sn,
      addLast: ds,
      addFirst: fs,
      removeLast: ps,
      removeFirst: gs,
      insert: Es,
      removeAt: ys,
      replaceAt: Is,
      getIn: Rn,
      set: wn,
      setIn: Cn,
      update: Ts,
      updateIn: hs,
      merge: _s,
      mergeDeep: ms,
      mergeIn: bs,
      omit: Os,
      addDefaults: As,
    };
    Ie.default = Gv;
  });
  var Rs = d((oi) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    Object.defineProperty(oi, "ixRequest", {
      enumerable: !0,
      get: function () {
        return zv;
      },
    });
    var Vv = Le(),
      qv = wt(),
      {
        IX2_PREVIEW_REQUESTED: kv,
        IX2_PLAYBACK_REQUESTED: Xv,
        IX2_STOP_REQUESTED: Wv,
        IX2_CLEAR_REQUESTED: Bv,
      } = Vv.IX2EngineActionTypes,
      Hv = { preview: {}, playback: {}, stop: {}, clear: {} },
      Ss = Object.create(null, {
        [kv]: { value: "preview" },
        [Xv]: { value: "playback" },
        [Wv]: { value: "stop" },
        [Bv]: { value: "clear" },
      }),
      zv = (e = Hv, t) => {
        if (t.type in Ss) {
          let n = [Ss[t.type]];
          return (0, qv.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var Cs = d((si) => {
    "use strict";
    Object.defineProperty(si, "__esModule", { value: !0 });
    Object.defineProperty(si, "ixSession", {
      enumerable: !0,
      get: function () {
        return aT;
      },
    });
    var Yv = Le(),
      He = wt(),
      {
        IX2_SESSION_INITIALIZED: Qv,
        IX2_SESSION_STARTED: Kv,
        IX2_TEST_FRAME_RENDERED: jv,
        IX2_SESSION_STOPPED: $v,
        IX2_EVENT_LISTENER_ADDED: Zv,
        IX2_EVENT_STATE_CHANGED: Jv,
        IX2_ANIMATION_FRAME_CHANGED: eT,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: tT,
        IX2_VIEWPORT_WIDTH_CHANGED: nT,
        IX2_MEDIA_QUERIES_DEFINED: rT,
      } = Yv.IX2EngineActionTypes,
      ws = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      iT = 20,
      aT = (e = ws, t) => {
        switch (t.type) {
          case Qv: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, He.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case Kv:
            return (0, He.set)(e, "active", !0);
          case jv: {
            let {
              payload: { step: n = iT },
            } = t;
            return (0, He.set)(e, "tick", e.tick + n);
          }
          case $v:
            return ws;
          case eT: {
            let {
              payload: { now: n },
            } = t;
            return (0, He.set)(e, "tick", n);
          }
          case Zv: {
            let n = (0, He.addLast)(e.eventListeners, t.payload);
            return (0, He.set)(e, "eventListeners", n);
          }
          case Jv: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, He.setIn)(e, ["eventState", n], r);
          }
          case tT: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, He.setIn)(e, ["playbackState", n], r);
          }
          case nT: {
            let { width: n, mediaQueries: r } = t.payload,
              a = r.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: u, min: s, max: f } = r[o];
              if (n >= s && n <= f) {
                i = u;
                break;
              }
            }
            return (0, He.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case rT:
            return (0, He.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var Ns = d((w7, Ls) => {
    function oT() {
      (this.__data__ = []), (this.size = 0);
    }
    Ls.exports = oT;
  });
  var Ln = d((C7, Ps) => {
    function sT(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ps.exports = sT;
  });
  var jt = d((L7, xs) => {
    var uT = Ln();
    function cT(e, t) {
      for (var n = e.length; n--; ) if (uT(e[n][0], t)) return n;
      return -1;
    }
    xs.exports = cT;
  });
  var Ds = d((N7, Ms) => {
    var lT = jt(),
      dT = Array.prototype,
      fT = dT.splice;
    function pT(e) {
      var t = this.__data__,
        n = lT(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : fT.call(t, n, 1), --this.size, !0;
    }
    Ms.exports = pT;
  });
  var Us = d((P7, Fs) => {
    var gT = jt();
    function ET(e) {
      var t = this.__data__,
        n = gT(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Fs.exports = ET;
  });
  var Vs = d((x7, Gs) => {
    var yT = jt();
    function IT(e) {
      return yT(this.__data__, e) > -1;
    }
    Gs.exports = IT;
  });
  var ks = d((M7, qs) => {
    var vT = jt();
    function TT(e, t) {
      var n = this.__data__,
        r = vT(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    qs.exports = TT;
  });
  var $t = d((D7, Xs) => {
    var hT = Ns(),
      _T = Ds(),
      mT = Us(),
      bT = Vs(),
      OT = ks();
    function Ct(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ct.prototype.clear = hT;
    Ct.prototype.delete = _T;
    Ct.prototype.get = mT;
    Ct.prototype.has = bT;
    Ct.prototype.set = OT;
    Xs.exports = Ct;
  });
  var Bs = d((F7, Ws) => {
    var AT = $t();
    function ST() {
      (this.__data__ = new AT()), (this.size = 0);
    }
    Ws.exports = ST;
  });
  var zs = d((U7, Hs) => {
    function RT(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Hs.exports = RT;
  });
  var Qs = d((G7, Ys) => {
    function wT(e) {
      return this.__data__.get(e);
    }
    Ys.exports = wT;
  });
  var js = d((V7, Ks) => {
    function CT(e) {
      return this.__data__.has(e);
    }
    Ks.exports = CT;
  });
  var ze = d((q7, $s) => {
    function LT(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    $s.exports = LT;
  });
  var ui = d((k7, Zs) => {
    var NT = rt(),
      PT = ze(),
      xT = "[object AsyncFunction]",
      MT = "[object Function]",
      DT = "[object GeneratorFunction]",
      FT = "[object Proxy]";
    function UT(e) {
      if (!PT(e)) return !1;
      var t = NT(e);
      return t == MT || t == DT || t == xT || t == FT;
    }
    Zs.exports = UT;
  });
  var eu = d((X7, Js) => {
    var GT = ke(),
      VT = GT["__core-js_shared__"];
    Js.exports = VT;
  });
  var ru = d((W7, nu) => {
    var ci = eu(),
      tu = (function () {
        var e = /[^.]+$/.exec((ci && ci.keys && ci.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function qT(e) {
      return !!tu && tu in e;
    }
    nu.exports = qT;
  });
  var li = d((B7, iu) => {
    var kT = Function.prototype,
      XT = kT.toString;
    function WT(e) {
      if (e != null) {
        try {
          return XT.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    iu.exports = WT;
  });
  var ou = d((H7, au) => {
    var BT = ui(),
      HT = ru(),
      zT = ze(),
      YT = li(),
      QT = /[\\^$.*+?()[\]{}|]/g,
      KT = /^\[object .+?Constructor\]$/,
      jT = Function.prototype,
      $T = Object.prototype,
      ZT = jT.toString,
      JT = $T.hasOwnProperty,
      eh = RegExp(
        "^" +
          ZT.call(JT)
            .replace(QT, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function th(e) {
      if (!zT(e) || HT(e)) return !1;
      var t = BT(e) ? eh : KT;
      return t.test(YT(e));
    }
    au.exports = th;
  });
  var uu = d((z7, su) => {
    function nh(e, t) {
      return e?.[t];
    }
    su.exports = nh;
  });
  var it = d((Y7, cu) => {
    var rh = ou(),
      ih = uu();
    function ah(e, t) {
      var n = ih(e, t);
      return rh(n) ? n : void 0;
    }
    cu.exports = ah;
  });
  var Nn = d((Q7, lu) => {
    var oh = it(),
      sh = ke(),
      uh = oh(sh, "Map");
    lu.exports = uh;
  });
  var Zt = d((K7, du) => {
    var ch = it(),
      lh = ch(Object, "create");
    du.exports = lh;
  });
  var gu = d((j7, pu) => {
    var fu = Zt();
    function dh() {
      (this.__data__ = fu ? fu(null) : {}), (this.size = 0);
    }
    pu.exports = dh;
  });
  var yu = d(($7, Eu) => {
    function fh(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Eu.exports = fh;
  });
  var vu = d((Z7, Iu) => {
    var ph = Zt(),
      gh = "__lodash_hash_undefined__",
      Eh = Object.prototype,
      yh = Eh.hasOwnProperty;
    function Ih(e) {
      var t = this.__data__;
      if (ph) {
        var n = t[e];
        return n === gh ? void 0 : n;
      }
      return yh.call(t, e) ? t[e] : void 0;
    }
    Iu.exports = Ih;
  });
  var hu = d((J7, Tu) => {
    var vh = Zt(),
      Th = Object.prototype,
      hh = Th.hasOwnProperty;
    function _h(e) {
      var t = this.__data__;
      return vh ? t[e] !== void 0 : hh.call(t, e);
    }
    Tu.exports = _h;
  });
  var mu = d((eN, _u) => {
    var mh = Zt(),
      bh = "__lodash_hash_undefined__";
    function Oh(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = mh && t === void 0 ? bh : t),
        this
      );
    }
    _u.exports = Oh;
  });
  var Ou = d((tN, bu) => {
    var Ah = gu(),
      Sh = yu(),
      Rh = vu(),
      wh = hu(),
      Ch = mu();
    function Lt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Lt.prototype.clear = Ah;
    Lt.prototype.delete = Sh;
    Lt.prototype.get = Rh;
    Lt.prototype.has = wh;
    Lt.prototype.set = Ch;
    bu.exports = Lt;
  });
  var Ru = d((nN, Su) => {
    var Au = Ou(),
      Lh = $t(),
      Nh = Nn();
    function Ph() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Au(),
          map: new (Nh || Lh)(),
          string: new Au(),
        });
    }
    Su.exports = Ph;
  });
  var Cu = d((rN, wu) => {
    function xh(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    wu.exports = xh;
  });
  var Jt = d((iN, Lu) => {
    var Mh = Cu();
    function Dh(e, t) {
      var n = e.__data__;
      return Mh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Lu.exports = Dh;
  });
  var Pu = d((aN, Nu) => {
    var Fh = Jt();
    function Uh(e) {
      var t = Fh(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Nu.exports = Uh;
  });
  var Mu = d((oN, xu) => {
    var Gh = Jt();
    function Vh(e) {
      return Gh(this, e).get(e);
    }
    xu.exports = Vh;
  });
  var Fu = d((sN, Du) => {
    var qh = Jt();
    function kh(e) {
      return qh(this, e).has(e);
    }
    Du.exports = kh;
  });
  var Gu = d((uN, Uu) => {
    var Xh = Jt();
    function Wh(e, t) {
      var n = Xh(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    Uu.exports = Wh;
  });
  var Pn = d((cN, Vu) => {
    var Bh = Ru(),
      Hh = Pu(),
      zh = Mu(),
      Yh = Fu(),
      Qh = Gu();
    function Nt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Nt.prototype.clear = Bh;
    Nt.prototype.delete = Hh;
    Nt.prototype.get = zh;
    Nt.prototype.has = Yh;
    Nt.prototype.set = Qh;
    Vu.exports = Nt;
  });
  var ku = d((lN, qu) => {
    var Kh = $t(),
      jh = Nn(),
      $h = Pn(),
      Zh = 200;
    function Jh(e, t) {
      var n = this.__data__;
      if (n instanceof Kh) {
        var r = n.__data__;
        if (!jh || r.length < Zh - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new $h(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    qu.exports = Jh;
  });
  var di = d((dN, Xu) => {
    var e_ = $t(),
      t_ = Bs(),
      n_ = zs(),
      r_ = Qs(),
      i_ = js(),
      a_ = ku();
    function Pt(e) {
      var t = (this.__data__ = new e_(e));
      this.size = t.size;
    }
    Pt.prototype.clear = t_;
    Pt.prototype.delete = n_;
    Pt.prototype.get = r_;
    Pt.prototype.has = i_;
    Pt.prototype.set = a_;
    Xu.exports = Pt;
  });
  var Bu = d((fN, Wu) => {
    var o_ = "__lodash_hash_undefined__";
    function s_(e) {
      return this.__data__.set(e, o_), this;
    }
    Wu.exports = s_;
  });
  var zu = d((pN, Hu) => {
    function u_(e) {
      return this.__data__.has(e);
    }
    Hu.exports = u_;
  });
  var Qu = d((gN, Yu) => {
    var c_ = Pn(),
      l_ = Bu(),
      d_ = zu();
    function xn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new c_(); ++t < n; ) this.add(e[t]);
    }
    xn.prototype.add = xn.prototype.push = l_;
    xn.prototype.has = d_;
    Yu.exports = xn;
  });
  var ju = d((EN, Ku) => {
    function f_(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    Ku.exports = f_;
  });
  var Zu = d((yN, $u) => {
    function p_(e, t) {
      return e.has(t);
    }
    $u.exports = p_;
  });
  var fi = d((IN, Ju) => {
    var g_ = Qu(),
      E_ = ju(),
      y_ = Zu(),
      I_ = 1,
      v_ = 2;
    function T_(e, t, n, r, a, i) {
      var o = n & I_,
        u = e.length,
        s = t.length;
      if (u != s && !(o && s > u)) return !1;
      var f = i.get(e),
        T = i.get(t);
      if (f && T) return f == t && T == e;
      var v = -1,
        g = !0,
        I = n & v_ ? new g_() : void 0;
      for (i.set(e, t), i.set(t, e); ++v < u; ) {
        var b = e[v],
          _ = t[v];
        if (r) var S = o ? r(_, b, v, t, e, i) : r(b, _, v, e, t, i);
        if (S !== void 0) {
          if (S) continue;
          g = !1;
          break;
        }
        if (I) {
          if (
            !E_(t, function (m, C) {
              if (!y_(I, C) && (b === m || a(b, m, n, r, i))) return I.push(C);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(b === _ || a(b, _, n, r, i))) {
          g = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), g;
    }
    Ju.exports = T_;
  });
  var tc = d((vN, ec) => {
    var h_ = ke(),
      __ = h_.Uint8Array;
    ec.exports = __;
  });
  var rc = d((TN, nc) => {
    function m_(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, a) {
          n[++t] = [a, r];
        }),
        n
      );
    }
    nc.exports = m_;
  });
  var ac = d((hN, ic) => {
    function b_(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    ic.exports = b_;
  });
  var lc = d((_N, cc) => {
    var oc = At(),
      sc = tc(),
      O_ = Ln(),
      A_ = fi(),
      S_ = rc(),
      R_ = ac(),
      w_ = 1,
      C_ = 2,
      L_ = "[object Boolean]",
      N_ = "[object Date]",
      P_ = "[object Error]",
      x_ = "[object Map]",
      M_ = "[object Number]",
      D_ = "[object RegExp]",
      F_ = "[object Set]",
      U_ = "[object String]",
      G_ = "[object Symbol]",
      V_ = "[object ArrayBuffer]",
      q_ = "[object DataView]",
      uc = oc ? oc.prototype : void 0,
      pi = uc ? uc.valueOf : void 0;
    function k_(e, t, n, r, a, i, o) {
      switch (n) {
        case q_:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case V_:
          return !(e.byteLength != t.byteLength || !i(new sc(e), new sc(t)));
        case L_:
        case N_:
        case M_:
          return O_(+e, +t);
        case P_:
          return e.name == t.name && e.message == t.message;
        case D_:
        case U_:
          return e == t + "";
        case x_:
          var u = S_;
        case F_:
          var s = r & w_;
          if ((u || (u = R_), e.size != t.size && !s)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (r |= C_), o.set(e, t);
          var T = A_(u(e), u(t), r, a, i, o);
          return o.delete(e), T;
        case G_:
          if (pi) return pi.call(e) == pi.call(t);
      }
      return !1;
    }
    cc.exports = k_;
  });
  var Mn = d((mN, dc) => {
    function X_(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    dc.exports = X_;
  });
  var me = d((bN, fc) => {
    var W_ = Array.isArray;
    fc.exports = W_;
  });
  var gi = d((ON, pc) => {
    var B_ = Mn(),
      H_ = me();
    function z_(e, t, n) {
      var r = t(e);
      return H_(e) ? r : B_(r, n(e));
    }
    pc.exports = z_;
  });
  var Ec = d((AN, gc) => {
    function Y_(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    gc.exports = Y_;
  });
  var Ei = d((SN, yc) => {
    function Q_() {
      return [];
    }
    yc.exports = Q_;
  });
  var yi = d((RN, vc) => {
    var K_ = Ec(),
      j_ = Ei(),
      $_ = Object.prototype,
      Z_ = $_.propertyIsEnumerable,
      Ic = Object.getOwnPropertySymbols,
      J_ = Ic
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                K_(Ic(e), function (t) {
                  return Z_.call(e, t);
                }));
          }
        : j_;
    vc.exports = J_;
  });
  var hc = d((wN, Tc) => {
    function em(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Tc.exports = em;
  });
  var mc = d((CN, _c) => {
    var tm = rt(),
      nm = Je(),
      rm = "[object Arguments]";
    function im(e) {
      return nm(e) && tm(e) == rm;
    }
    _c.exports = im;
  });
  var en = d((LN, Ac) => {
    var bc = mc(),
      am = Je(),
      Oc = Object.prototype,
      om = Oc.hasOwnProperty,
      sm = Oc.propertyIsEnumerable,
      um = bc(
        (function () {
          return arguments;
        })()
      )
        ? bc
        : function (e) {
            return am(e) && om.call(e, "callee") && !sm.call(e, "callee");
          };
    Ac.exports = um;
  });
  var Rc = d((NN, Sc) => {
    function cm() {
      return !1;
    }
    Sc.exports = cm;
  });
  var Dn = d((tn, xt) => {
    var lm = ke(),
      dm = Rc(),
      Lc = typeof tn == "object" && tn && !tn.nodeType && tn,
      wc = Lc && typeof xt == "object" && xt && !xt.nodeType && xt,
      fm = wc && wc.exports === Lc,
      Cc = fm ? lm.Buffer : void 0,
      pm = Cc ? Cc.isBuffer : void 0,
      gm = pm || dm;
    xt.exports = gm;
  });
  var Fn = d((PN, Nc) => {
    var Em = 9007199254740991,
      ym = /^(?:0|[1-9]\d*)$/;
    function Im(e, t) {
      var n = typeof e;
      return (
        (t = t ?? Em),
        !!t &&
          (n == "number" || (n != "symbol" && ym.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Nc.exports = Im;
  });
  var Un = d((xN, Pc) => {
    var vm = 9007199254740991;
    function Tm(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vm;
    }
    Pc.exports = Tm;
  });
  var Mc = d((MN, xc) => {
    var hm = rt(),
      _m = Un(),
      mm = Je(),
      bm = "[object Arguments]",
      Om = "[object Array]",
      Am = "[object Boolean]",
      Sm = "[object Date]",
      Rm = "[object Error]",
      wm = "[object Function]",
      Cm = "[object Map]",
      Lm = "[object Number]",
      Nm = "[object Object]",
      Pm = "[object RegExp]",
      xm = "[object Set]",
      Mm = "[object String]",
      Dm = "[object WeakMap]",
      Fm = "[object ArrayBuffer]",
      Um = "[object DataView]",
      Gm = "[object Float32Array]",
      Vm = "[object Float64Array]",
      qm = "[object Int8Array]",
      km = "[object Int16Array]",
      Xm = "[object Int32Array]",
      Wm = "[object Uint8Array]",
      Bm = "[object Uint8ClampedArray]",
      Hm = "[object Uint16Array]",
      zm = "[object Uint32Array]",
      ge = {};
    ge[Gm] =
      ge[Vm] =
      ge[qm] =
      ge[km] =
      ge[Xm] =
      ge[Wm] =
      ge[Bm] =
      ge[Hm] =
      ge[zm] =
        !0;
    ge[bm] =
      ge[Om] =
      ge[Fm] =
      ge[Am] =
      ge[Um] =
      ge[Sm] =
      ge[Rm] =
      ge[wm] =
      ge[Cm] =
      ge[Lm] =
      ge[Nm] =
      ge[Pm] =
      ge[xm] =
      ge[Mm] =
      ge[Dm] =
        !1;
    function Ym(e) {
      return mm(e) && _m(e.length) && !!ge[hm(e)];
    }
    xc.exports = Ym;
  });
  var Fc = d((DN, Dc) => {
    function Qm(e) {
      return function (t) {
        return e(t);
      };
    }
    Dc.exports = Qm;
  });
  var Gc = d((nn, Mt) => {
    var Km = Dr(),
      Uc = typeof nn == "object" && nn && !nn.nodeType && nn,
      rn = Uc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      jm = rn && rn.exports === Uc,
      Ii = jm && Km.process,
      $m = (function () {
        try {
          var e = rn && rn.require && rn.require("util").types;
          return e || (Ii && Ii.binding && Ii.binding("util"));
        } catch {}
      })();
    Mt.exports = $m;
  });
  var Gn = d((FN, kc) => {
    var Zm = Mc(),
      Jm = Fc(),
      Vc = Gc(),
      qc = Vc && Vc.isTypedArray,
      e2 = qc ? Jm(qc) : Zm;
    kc.exports = e2;
  });
  var vi = d((UN, Xc) => {
    var t2 = hc(),
      n2 = en(),
      r2 = me(),
      i2 = Dn(),
      a2 = Fn(),
      o2 = Gn(),
      s2 = Object.prototype,
      u2 = s2.hasOwnProperty;
    function c2(e, t) {
      var n = r2(e),
        r = !n && n2(e),
        a = !n && !r && i2(e),
        i = !n && !r && !a && o2(e),
        o = n || r || a || i,
        u = o ? t2(e.length, String) : [],
        s = u.length;
      for (var f in e)
        (t || u2.call(e, f)) &&
          !(
            o &&
            (f == "length" ||
              (a && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              a2(f, s))
          ) &&
          u.push(f);
      return u;
    }
    Xc.exports = c2;
  });
  var Vn = d((GN, Wc) => {
    var l2 = Object.prototype;
    function d2(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || l2;
      return e === n;
    }
    Wc.exports = d2;
  });
  var Hc = d((VN, Bc) => {
    var f2 = Fr(),
      p2 = f2(Object.keys, Object);
    Bc.exports = p2;
  });
  var qn = d((qN, zc) => {
    var g2 = Vn(),
      E2 = Hc(),
      y2 = Object.prototype,
      I2 = y2.hasOwnProperty;
    function v2(e) {
      if (!g2(e)) return E2(e);
      var t = [];
      for (var n in Object(e)) I2.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    zc.exports = v2;
  });
  var pt = d((kN, Yc) => {
    var T2 = ui(),
      h2 = Un();
    function _2(e) {
      return e != null && h2(e.length) && !T2(e);
    }
    Yc.exports = _2;
  });
  var an = d((XN, Qc) => {
    var m2 = vi(),
      b2 = qn(),
      O2 = pt();
    function A2(e) {
      return O2(e) ? m2(e) : b2(e);
    }
    Qc.exports = A2;
  });
  var jc = d((WN, Kc) => {
    var S2 = gi(),
      R2 = yi(),
      w2 = an();
    function C2(e) {
      return S2(e, w2, R2);
    }
    Kc.exports = C2;
  });
  var Jc = d((BN, Zc) => {
    var $c = jc(),
      L2 = 1,
      N2 = Object.prototype,
      P2 = N2.hasOwnProperty;
    function x2(e, t, n, r, a, i) {
      var o = n & L2,
        u = $c(e),
        s = u.length,
        f = $c(t),
        T = f.length;
      if (s != T && !o) return !1;
      for (var v = s; v--; ) {
        var g = u[v];
        if (!(o ? g in t : P2.call(t, g))) return !1;
      }
      var I = i.get(e),
        b = i.get(t);
      if (I && b) return I == t && b == e;
      var _ = !0;
      i.set(e, t), i.set(t, e);
      for (var S = o; ++v < s; ) {
        g = u[v];
        var m = e[g],
          C = t[g];
        if (r) var L = o ? r(C, m, g, t, e, i) : r(m, C, g, e, t, i);
        if (!(L === void 0 ? m === C || a(m, C, n, r, i) : L)) {
          _ = !1;
          break;
        }
        S || (S = g == "constructor");
      }
      if (_ && !S) {
        var x = e.constructor,
          D = t.constructor;
        x != D &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof x == "function" &&
            x instanceof x &&
            typeof D == "function" &&
            D instanceof D
          ) &&
          (_ = !1);
      }
      return i.delete(e), i.delete(t), _;
    }
    Zc.exports = x2;
  });
  var tl = d((HN, el) => {
    var M2 = it(),
      D2 = ke(),
      F2 = M2(D2, "DataView");
    el.exports = F2;
  });
  var rl = d((zN, nl) => {
    var U2 = it(),
      G2 = ke(),
      V2 = U2(G2, "Promise");
    nl.exports = V2;
  });
  var al = d((YN, il) => {
    var q2 = it(),
      k2 = ke(),
      X2 = q2(k2, "Set");
    il.exports = X2;
  });
  var Ti = d((QN, ol) => {
    var W2 = it(),
      B2 = ke(),
      H2 = W2(B2, "WeakMap");
    ol.exports = H2;
  });
  var kn = d((KN, pl) => {
    var hi = tl(),
      _i = Nn(),
      mi = rl(),
      bi = al(),
      Oi = Ti(),
      fl = rt(),
      Dt = li(),
      sl = "[object Map]",
      z2 = "[object Object]",
      ul = "[object Promise]",
      cl = "[object Set]",
      ll = "[object WeakMap]",
      dl = "[object DataView]",
      Y2 = Dt(hi),
      Q2 = Dt(_i),
      K2 = Dt(mi),
      j2 = Dt(bi),
      $2 = Dt(Oi),
      gt = fl;
    ((hi && gt(new hi(new ArrayBuffer(1))) != dl) ||
      (_i && gt(new _i()) != sl) ||
      (mi && gt(mi.resolve()) != ul) ||
      (bi && gt(new bi()) != cl) ||
      (Oi && gt(new Oi()) != ll)) &&
      (gt = function (e) {
        var t = fl(e),
          n = t == z2 ? e.constructor : void 0,
          r = n ? Dt(n) : "";
        if (r)
          switch (r) {
            case Y2:
              return dl;
            case Q2:
              return sl;
            case K2:
              return ul;
            case j2:
              return cl;
            case $2:
              return ll;
          }
        return t;
      });
    pl.exports = gt;
  });
  var _l = d((jN, hl) => {
    var Ai = di(),
      Z2 = fi(),
      J2 = lc(),
      eb = Jc(),
      gl = kn(),
      El = me(),
      yl = Dn(),
      tb = Gn(),
      nb = 1,
      Il = "[object Arguments]",
      vl = "[object Array]",
      Xn = "[object Object]",
      rb = Object.prototype,
      Tl = rb.hasOwnProperty;
    function ib(e, t, n, r, a, i) {
      var o = El(e),
        u = El(t),
        s = o ? vl : gl(e),
        f = u ? vl : gl(t);
      (s = s == Il ? Xn : s), (f = f == Il ? Xn : f);
      var T = s == Xn,
        v = f == Xn,
        g = s == f;
      if (g && yl(e)) {
        if (!yl(t)) return !1;
        (o = !0), (T = !1);
      }
      if (g && !T)
        return (
          i || (i = new Ai()),
          o || tb(e) ? Z2(e, t, n, r, a, i) : J2(e, t, s, n, r, a, i)
        );
      if (!(n & nb)) {
        var I = T && Tl.call(e, "__wrapped__"),
          b = v && Tl.call(t, "__wrapped__");
        if (I || b) {
          var _ = I ? e.value() : e,
            S = b ? t.value() : t;
          return i || (i = new Ai()), a(_, S, n, r, i);
        }
      }
      return g ? (i || (i = new Ai()), eb(e, t, n, r, a, i)) : !1;
    }
    hl.exports = ib;
  });
  var Si = d(($N, Ol) => {
    var ab = _l(),
      ml = Je();
    function bl(e, t, n, r, a) {
      return e === t
        ? !0
        : e == null || t == null || (!ml(e) && !ml(t))
        ? e !== e && t !== t
        : ab(e, t, n, r, bl, a);
    }
    Ol.exports = bl;
  });
  var Sl = d((ZN, Al) => {
    var ob = di(),
      sb = Si(),
      ub = 1,
      cb = 2;
    function lb(e, t, n, r) {
      var a = n.length,
        i = a,
        o = !r;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var u = n[a];
        if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        u = n[a];
        var s = u[0],
          f = e[s],
          T = u[1];
        if (o && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var v = new ob();
          if (r) var g = r(f, T, s, e, t, v);
          if (!(g === void 0 ? sb(T, f, ub | cb, r, v) : g)) return !1;
        }
      }
      return !0;
    }
    Al.exports = lb;
  });
  var Ri = d((JN, Rl) => {
    var db = ze();
    function fb(e) {
      return e === e && !db(e);
    }
    Rl.exports = fb;
  });
  var Cl = d((e9, wl) => {
    var pb = Ri(),
      gb = an();
    function Eb(e) {
      for (var t = gb(e), n = t.length; n--; ) {
        var r = t[n],
          a = e[r];
        t[n] = [r, a, pb(a)];
      }
      return t;
    }
    wl.exports = Eb;
  });
  var wi = d((t9, Ll) => {
    function yb(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Ll.exports = yb;
  });
  var Pl = d((n9, Nl) => {
    var Ib = Sl(),
      vb = Cl(),
      Tb = wi();
    function hb(e) {
      var t = vb(e);
      return t.length == 1 && t[0][2]
        ? Tb(t[0][0], t[0][1])
        : function (n) {
            return n === e || Ib(n, e, t);
          };
    }
    Nl.exports = hb;
  });
  var on = d((r9, xl) => {
    var _b = rt(),
      mb = Je(),
      bb = "[object Symbol]";
    function Ob(e) {
      return typeof e == "symbol" || (mb(e) && _b(e) == bb);
    }
    xl.exports = Ob;
  });
  var Wn = d((i9, Ml) => {
    var Ab = me(),
      Sb = on(),
      Rb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      wb = /^\w*$/;
    function Cb(e, t) {
      if (Ab(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        Sb(e)
        ? !0
        : wb.test(e) || !Rb.test(e) || (t != null && e in Object(t));
    }
    Ml.exports = Cb;
  });
  var Ul = d((a9, Fl) => {
    var Dl = Pn(),
      Lb = "Expected a function";
    function Ci(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Lb);
      var n = function () {
        var r = arguments,
          a = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, r);
        return (n.cache = i.set(a, o) || i), o;
      };
      return (n.cache = new (Ci.Cache || Dl)()), n;
    }
    Ci.Cache = Dl;
    Fl.exports = Ci;
  });
  var Vl = d((o9, Gl) => {
    var Nb = Ul(),
      Pb = 500;
    function xb(e) {
      var t = Nb(e, function (r) {
          return n.size === Pb && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Gl.exports = xb;
  });
  var kl = d((s9, ql) => {
    var Mb = Vl(),
      Db =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Fb = /\\(\\)?/g,
      Ub = Mb(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Db, function (n, r, a, i) {
            t.push(a ? i.replace(Fb, "$1") : r || n);
          }),
          t
        );
      });
    ql.exports = Ub;
  });
  var Li = d((u9, Xl) => {
    function Gb(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
        a[n] = t(e[n], n, e);
      return a;
    }
    Xl.exports = Gb;
  });
  var Ql = d((c9, Yl) => {
    var Wl = At(),
      Vb = Li(),
      qb = me(),
      kb = on(),
      Xb = 1 / 0,
      Bl = Wl ? Wl.prototype : void 0,
      Hl = Bl ? Bl.toString : void 0;
    function zl(e) {
      if (typeof e == "string") return e;
      if (qb(e)) return Vb(e, zl) + "";
      if (kb(e)) return Hl ? Hl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Xb ? "-0" : t;
    }
    Yl.exports = zl;
  });
  var jl = d((l9, Kl) => {
    var Wb = Ql();
    function Bb(e) {
      return e == null ? "" : Wb(e);
    }
    Kl.exports = Bb;
  });
  var sn = d((d9, $l) => {
    var Hb = me(),
      zb = Wn(),
      Yb = kl(),
      Qb = jl();
    function Kb(e, t) {
      return Hb(e) ? e : zb(e, t) ? [e] : Yb(Qb(e));
    }
    $l.exports = Kb;
  });
  var Ft = d((f9, Zl) => {
    var jb = on(),
      $b = 1 / 0;
    function Zb(e) {
      if (typeof e == "string" || jb(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -$b ? "-0" : t;
    }
    Zl.exports = Zb;
  });
  var Bn = d((p9, Jl) => {
    var Jb = sn(),
      eO = Ft();
    function tO(e, t) {
      t = Jb(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[eO(t[n++])];
      return n && n == r ? e : void 0;
    }
    Jl.exports = tO;
  });
  var Hn = d((g9, ed) => {
    var nO = Bn();
    function rO(e, t, n) {
      var r = e == null ? void 0 : nO(e, t);
      return r === void 0 ? n : r;
    }
    ed.exports = rO;
  });
  var nd = d((E9, td) => {
    function iO(e, t) {
      return e != null && t in Object(e);
    }
    td.exports = iO;
  });
  var id = d((y9, rd) => {
    var aO = sn(),
      oO = en(),
      sO = me(),
      uO = Fn(),
      cO = Un(),
      lO = Ft();
    function dO(e, t, n) {
      t = aO(t, e);
      for (var r = -1, a = t.length, i = !1; ++r < a; ) {
        var o = lO(t[r]);
        if (!(i = e != null && n(e, o))) break;
        e = e[o];
      }
      return i || ++r != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && cO(a) && uO(o, a) && (sO(e) || oO(e)));
    }
    rd.exports = dO;
  });
  var od = d((I9, ad) => {
    var fO = nd(),
      pO = id();
    function gO(e, t) {
      return e != null && pO(e, t, fO);
    }
    ad.exports = gO;
  });
  var ud = d((v9, sd) => {
    var EO = Si(),
      yO = Hn(),
      IO = od(),
      vO = Wn(),
      TO = Ri(),
      hO = wi(),
      _O = Ft(),
      mO = 1,
      bO = 2;
    function OO(e, t) {
      return vO(e) && TO(t)
        ? hO(_O(e), t)
        : function (n) {
            var r = yO(n, e);
            return r === void 0 && r === t ? IO(n, e) : EO(t, r, mO | bO);
          };
    }
    sd.exports = OO;
  });
  var zn = d((T9, cd) => {
    function AO(e) {
      return e;
    }
    cd.exports = AO;
  });
  var Ni = d((h9, ld) => {
    function SO(e) {
      return function (t) {
        return t?.[e];
      };
    }
    ld.exports = SO;
  });
  var fd = d((_9, dd) => {
    var RO = Bn();
    function wO(e) {
      return function (t) {
        return RO(t, e);
      };
    }
    dd.exports = wO;
  });
  var gd = d((m9, pd) => {
    var CO = Ni(),
      LO = fd(),
      NO = Wn(),
      PO = Ft();
    function xO(e) {
      return NO(e) ? CO(PO(e)) : LO(e);
    }
    pd.exports = xO;
  });
  var at = d((b9, Ed) => {
    var MO = Pl(),
      DO = ud(),
      FO = zn(),
      UO = me(),
      GO = gd();
    function VO(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? FO
        : typeof e == "object"
        ? UO(e)
          ? DO(e[0], e[1])
          : MO(e)
        : GO(e);
    }
    Ed.exports = VO;
  });
  var Pi = d((O9, yd) => {
    var qO = at(),
      kO = pt(),
      XO = an();
    function WO(e) {
      return function (t, n, r) {
        var a = Object(t);
        if (!kO(t)) {
          var i = qO(n, 3);
          (t = XO(t)),
            (n = function (u) {
              return i(a[u], u, a);
            });
        }
        var o = e(t, n, r);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    yd.exports = WO;
  });
  var xi = d((A9, Id) => {
    function BO(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    Id.exports = BO;
  });
  var Td = d((S9, vd) => {
    var HO = /\s/;
    function zO(e) {
      for (var t = e.length; t-- && HO.test(e.charAt(t)); );
      return t;
    }
    vd.exports = zO;
  });
  var _d = d((R9, hd) => {
    var YO = Td(),
      QO = /^\s+/;
    function KO(e) {
      return e && e.slice(0, YO(e) + 1).replace(QO, "");
    }
    hd.exports = KO;
  });
  var Yn = d((w9, Od) => {
    var jO = _d(),
      md = ze(),
      $O = on(),
      bd = 0 / 0,
      ZO = /^[-+]0x[0-9a-f]+$/i,
      JO = /^0b[01]+$/i,
      e1 = /^0o[0-7]+$/i,
      t1 = parseInt;
    function n1(e) {
      if (typeof e == "number") return e;
      if ($O(e)) return bd;
      if (md(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = md(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = jO(e);
      var n = JO.test(e);
      return n || e1.test(e) ? t1(e.slice(2), n ? 2 : 8) : ZO.test(e) ? bd : +e;
    }
    Od.exports = n1;
  });
  var Rd = d((C9, Sd) => {
    var r1 = Yn(),
      Ad = 1 / 0,
      i1 = 17976931348623157e292;
    function a1(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = r1(e)), e === Ad || e === -Ad)) {
        var t = e < 0 ? -1 : 1;
        return t * i1;
      }
      return e === e ? e : 0;
    }
    Sd.exports = a1;
  });
  var Mi = d((L9, wd) => {
    var o1 = Rd();
    function s1(e) {
      var t = o1(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    wd.exports = s1;
  });
  var Ld = d((N9, Cd) => {
    var u1 = xi(),
      c1 = at(),
      l1 = Mi(),
      d1 = Math.max;
    function f1(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = n == null ? 0 : l1(n);
      return a < 0 && (a = d1(r + a, 0)), u1(e, c1(t, 3), a);
    }
    Cd.exports = f1;
  });
  var Di = d((P9, Nd) => {
    var p1 = Pi(),
      g1 = Ld(),
      E1 = p1(g1);
    Nd.exports = E1;
  });
  var Kn = d((Fi) => {
    "use strict";
    Object.defineProperty(Fi, "__esModule", { value: !0 });
    function y1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    y1(Fi, {
      ELEMENT_MATCHES: function () {
        return T1;
      },
      FLEX_PREFIXED: function () {
        return h1;
      },
      IS_BROWSER_ENV: function () {
        return xd;
      },
      TRANSFORM_PREFIXED: function () {
        return Md;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return _1;
      },
      withBrowser: function () {
        return Qn;
      },
    });
    var I1 = v1(Di());
    function v1(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var xd = typeof window < "u",
      Qn = (e, t) => (xd ? e() : t),
      T1 = Qn(() =>
        (0, I1.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      h1 = Qn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      Md = Qn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Pd = Md.split("transform")[0],
      _1 = Pd ? Pd + "TransformStyle" : "transformStyle";
  });
  var Ui = d((M9, Vd) => {
    var m1 = 4,
      b1 = 0.001,
      O1 = 1e-7,
      A1 = 10,
      un = 11,
      jn = 1 / (un - 1),
      S1 = typeof Float32Array == "function";
    function Dd(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Fd(e, t) {
      return 3 * t - 6 * e;
    }
    function Ud(e) {
      return 3 * e;
    }
    function $n(e, t, n) {
      return ((Dd(t, n) * e + Fd(t, n)) * e + Ud(t)) * e;
    }
    function Gd(e, t, n) {
      return 3 * Dd(t, n) * e * e + 2 * Fd(t, n) * e + Ud(t);
    }
    function R1(e, t, n, r, a) {
      var i,
        o,
        u = 0;
      do
        (o = t + (n - t) / 2), (i = $n(o, r, a) - e), i > 0 ? (n = o) : (t = o);
      while (Math.abs(i) > O1 && ++u < A1);
      return o;
    }
    function w1(e, t, n, r) {
      for (var a = 0; a < m1; ++a) {
        var i = Gd(t, n, r);
        if (i === 0) return t;
        var o = $n(t, n, r) - e;
        t -= o / i;
      }
      return t;
    }
    Vd.exports = function (t, n, r, a) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = S1 ? new Float32Array(un) : new Array(un);
      if (t !== n || r !== a)
        for (var o = 0; o < un; ++o) i[o] = $n(o * jn, t, r);
      function u(s) {
        for (var f = 0, T = 1, v = un - 1; T !== v && i[T] <= s; ++T) f += jn;
        --T;
        var g = (s - i[T]) / (i[T + 1] - i[T]),
          I = f + g * jn,
          b = Gd(I, t, r);
        return b >= b1 ? w1(s, I, t, r) : b === 0 ? I : R1(s, f, f + jn, t, r);
      }
      return function (f) {
        return t === n && r === a
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : $n(u(f), n, a);
      };
    };
  });
  var Vi = d((Gi) => {
    "use strict";
    Object.defineProperty(Gi, "__esModule", { value: !0 });
    function C1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    C1(Gi, {
      bounce: function () {
        return fA;
      },
      bouncePast: function () {
        return pA;
      },
      ease: function () {
        return N1;
      },
      easeIn: function () {
        return P1;
      },
      easeInOut: function () {
        return M1;
      },
      easeOut: function () {
        return x1;
      },
      inBack: function () {
        return rA;
      },
      inCirc: function () {
        return J1;
      },
      inCubic: function () {
        return G1;
      },
      inElastic: function () {
        return oA;
      },
      inExpo: function () {
        return j1;
      },
      inOutBack: function () {
        return aA;
      },
      inOutCirc: function () {
        return tA;
      },
      inOutCubic: function () {
        return q1;
      },
      inOutElastic: function () {
        return uA;
      },
      inOutExpo: function () {
        return Z1;
      },
      inOutQuad: function () {
        return U1;
      },
      inOutQuart: function () {
        return W1;
      },
      inOutQuint: function () {
        return z1;
      },
      inOutSine: function () {
        return K1;
      },
      inQuad: function () {
        return D1;
      },
      inQuart: function () {
        return k1;
      },
      inQuint: function () {
        return B1;
      },
      inSine: function () {
        return Y1;
      },
      outBack: function () {
        return iA;
      },
      outBounce: function () {
        return nA;
      },
      outCirc: function () {
        return eA;
      },
      outCubic: function () {
        return V1;
      },
      outElastic: function () {
        return sA;
      },
      outExpo: function () {
        return $1;
      },
      outQuad: function () {
        return F1;
      },
      outQuart: function () {
        return X1;
      },
      outQuint: function () {
        return H1;
      },
      outSine: function () {
        return Q1;
      },
      swingFrom: function () {
        return lA;
      },
      swingFromTo: function () {
        return cA;
      },
      swingTo: function () {
        return dA;
      },
    });
    var Zn = L1(Ui());
    function L1(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var et = 1.70158,
      N1 = (0, Zn.default)(0.25, 0.1, 0.25, 1),
      P1 = (0, Zn.default)(0.42, 0, 1, 1),
      x1 = (0, Zn.default)(0, 0, 0.58, 1),
      M1 = (0, Zn.default)(0.42, 0, 0.58, 1);
    function D1(e) {
      return Math.pow(e, 2);
    }
    function F1(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function U1(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function G1(e) {
      return Math.pow(e, 3);
    }
    function V1(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function q1(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function k1(e) {
      return Math.pow(e, 4);
    }
    function X1(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function W1(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function B1(e) {
      return Math.pow(e, 5);
    }
    function H1(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function z1(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function Y1(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function Q1(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function K1(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function j1(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function $1(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function Z1(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function J1(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function eA(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function tA(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function nA(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function rA(e) {
      let t = et;
      return e * e * ((t + 1) * e - t);
    }
    function iA(e) {
      let t = et;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function aA(e) {
      let t = et;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function oA(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function sA(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function uA(e) {
      let t = et,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function cA(e) {
      let t = et;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function lA(e) {
      let t = et;
      return e * e * ((t + 1) * e - t);
    }
    function dA(e) {
      let t = et;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function fA(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function pA(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Xi = d((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", { value: !0 });
    function gA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    gA(ki, {
      applyEasing: function () {
        return TA;
      },
      createBezierEasing: function () {
        return vA;
      },
      optimizeFloat: function () {
        return qi;
      },
    });
    var qd = IA(Vi()),
      EA = yA(Ui());
    function yA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function kd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (kd = function (r) {
        return r ? n : t;
      })(e);
    }
    function IA(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = kd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function qi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        a = Number(Math.round(e * r) / r);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function vA(e) {
      return (0, EA.default)(...e);
    }
    function TA(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : qi(n ? (t > 0 ? n(t) : t) : t > 0 && e && qd[e] ? qd[e](t) : t);
    }
  });
  var Hd = d((Bi) => {
    "use strict";
    Object.defineProperty(Bi, "__esModule", { value: !0 });
    function hA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hA(Bi, {
      createElementState: function () {
        return Bd;
      },
      ixElements: function () {
        return MA;
      },
      mergeActionState: function () {
        return Wi;
      },
    });
    var Jn = wt(),
      Wd = Le(),
      {
        HTML_ELEMENT: U9,
        PLAIN_OBJECT: _A,
        ABSTRACT_NODE: G9,
        CONFIG_X_VALUE: mA,
        CONFIG_Y_VALUE: bA,
        CONFIG_Z_VALUE: OA,
        CONFIG_VALUE: AA,
        CONFIG_X_UNIT: SA,
        CONFIG_Y_UNIT: RA,
        CONFIG_Z_UNIT: wA,
        CONFIG_UNIT: CA,
      } = Wd.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: LA,
        IX2_INSTANCE_ADDED: NA,
        IX2_ELEMENT_STATE_CHANGED: PA,
      } = Wd.IX2EngineActionTypes,
      Xd = {},
      xA = "refState",
      MA = (e = Xd, t = {}) => {
        switch (t.type) {
          case LA:
            return Xd;
          case NA: {
            let {
                elementId: n,
                element: r,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: u } = i,
              s = e;
            return (
              (0, Jn.getIn)(s, [n, r]) !== r && (s = Bd(s, r, o, n, i)),
              Wi(s, n, u, a, i)
            );
          }
          case PA: {
            let {
              elementId: n,
              actionTypeId: r,
              current: a,
              actionItem: i,
            } = t.payload;
            return Wi(e, n, r, a, i);
          }
          default:
            return e;
        }
      };
    function Bd(e, t, n, r, a) {
      let i =
        n === _A ? (0, Jn.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, Jn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function Wi(e, t, n, r, a) {
      let i = FA(a),
        o = [t, xA, n];
      return (0, Jn.mergeIn)(e, o, r, i);
    }
    var DA = [
      [mA, SA],
      [bA, RA],
      [OA, wA],
      [AA, CA],
    ];
    function FA(e) {
      let { config: t } = e;
      return DA.reduce((n, r) => {
        let a = r[0],
          i = r[1],
          o = t[a],
          u = t[i];
        return o != null && u != null && (n[i] = u), n;
      }, {});
    }
  });
  var zd = d((Hi) => {
    "use strict";
    Object.defineProperty(Hi, "__esModule", { value: !0 });
    function UA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    UA(Hi, {
      clearPlugin: function () {
        return BA;
      },
      createPluginInstance: function () {
        return XA;
      },
      getPluginConfig: function () {
        return GA;
      },
      getPluginDestination: function () {
        return kA;
      },
      getPluginDuration: function () {
        return VA;
      },
      getPluginOrigin: function () {
        return qA;
      },
      renderPlugin: function () {
        return WA;
      },
    });
    var GA = (e) => e.value,
      VA = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      qA = (e) => e || { value: 0 },
      kA = (e) => ({ value: e.value }),
      XA = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      WA = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      BA = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Qd = d((zi) => {
    "use strict";
    Object.defineProperty(zi, "__esModule", { value: !0 });
    function HA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    HA(zi, {
      clearPlugin: function () {
        return tS;
      },
      createPluginInstance: function () {
        return JA;
      },
      getPluginConfig: function () {
        return KA;
      },
      getPluginDestination: function () {
        return ZA;
      },
      getPluginDuration: function () {
        return jA;
      },
      getPluginOrigin: function () {
        return $A;
      },
      renderPlugin: function () {
        return eS;
      },
    });
    var zA = (e) => document.querySelector(`[data-w-id="${e}"]`),
      YA = () => window.Webflow.require("spline"),
      QA = (e, t) => e.filter((n) => !t.includes(n)),
      KA = (e, t) => e.value[t],
      jA = () => null,
      Yd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      $A = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            o = QA(r, i);
          return o.length ? o.reduce((s, f) => ((s[f] = Yd[f]), s), e) : e;
        }
        return r.reduce((i, o) => ((i[o] = Yd[o]), i), {});
      },
      ZA = (e) => e.value,
      JA = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? zA(n) : null;
      },
      eS = (e, t, n) => {
        let r = YA(),
          a = r.getInstance(e),
          i = n.config.target.objectId,
          o = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = i && u.findObjectById(i);
            if (!s) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (s.position.x = f.positionX),
              f.positionY != null && (s.position.y = f.positionY),
              f.positionZ != null && (s.position.z = f.positionZ),
              f.rotationX != null && (s.rotation.x = f.rotationX),
              f.rotationY != null && (s.rotation.y = f.rotationY),
              f.rotationZ != null && (s.rotation.z = f.rotationZ),
              f.scaleX != null && (s.scale.x = f.scaleX),
              f.scaleY != null && (s.scale.y = f.scaleY),
              f.scaleZ != null && (s.scale.z = f.scaleZ);
          };
        a ? o(a.spline) : r.setLoadHandler(e, o);
      },
      tS = () => null;
  });
  var Kd = d((Ki) => {
    "use strict";
    Object.defineProperty(Ki, "__esModule", { value: !0 });
    function nS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    nS(Ki, {
      clearPlugin: function () {
        return dS;
      },
      createPluginInstance: function () {
        return cS;
      },
      getPluginConfig: function () {
        return aS;
      },
      getPluginDestination: function () {
        return uS;
      },
      getPluginDuration: function () {
        return oS;
      },
      getPluginOrigin: function () {
        return sS;
      },
      renderPlugin: function () {
        return lS;
      },
    });
    var Yi = "--wf-rive-fit",
      Qi = "--wf-rive-alignment",
      rS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      iS = () => window.Webflow.require("rive"),
      aS = (e, t) => e.value.inputs[t],
      oS = () => null,
      sS = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let a in r) r[a] == null && (n[a] = 0);
        return n;
      },
      uS = (e) => e.value.inputs ?? {},
      cS = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? rS(r) : null;
      },
      lS = (e, { PLUGIN_RIVE: t }, n) => {
        let r = iS(),
          a = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: o, inputs: u = {} } = n.config.value || {};
        function s(f) {
          if (f.loaded) T();
          else {
            let v = () => {
              T(), f?.off("load", v);
            };
            f?.on("load", v);
          }
          function T() {
            let v = f.stateMachineInputs(o);
            if (v != null) {
              if ((f.isPlaying || f.play(o, !1), Yi in u || Qi in u)) {
                let g = f.layout,
                  I = u[Yi] ?? g.fit,
                  b = u[Qi] ?? g.alignment;
                (I !== g.fit || b !== g.alignment) &&
                  (f.layout = g.copyWith({ fit: I, alignment: b }));
              }
              for (let g in u) {
                if (g === Yi || g === Qi) continue;
                let I = v.find((b) => b.name === g);
                if (I != null)
                  switch (I.type) {
                    case i.Boolean: {
                      if (u[g] != null) {
                        let b = !!u[g];
                        I.value = b;
                      }
                      break;
                    }
                    case i.Number: {
                      let b = t[g];
                      b != null && (I.value = b);
                      break;
                    }
                    case i.Trigger: {
                      u[g] && I.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        a?.rive ? s(a.rive) : r.setLoadHandler(e, s);
      },
      dS = (e, t) => null;
  });
  var $i = d((ji) => {
    "use strict";
    Object.defineProperty(ji, "__esModule", { value: !0 });
    Object.defineProperty(ji, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return fS;
      },
    });
    var jd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function fS(e) {
      let t,
        n,
        r,
        a = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof jd[i] == "string" ? jd[i].toLowerCase() : null) || i;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (n = parseInt(s[1] + s[1], 16)),
            (r = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (a = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (n = parseInt(s.substring(2, 4), 16)),
            (r = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (a = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10)),
          (a = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          T = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100;
        a = parseFloat(s[3]);
        let g = (1 - Math.abs(2 * v - 1)) * T,
          I = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = v - g / 2,
          _,
          S,
          m;
        f >= 0 && f < 60
          ? ((_ = g), (S = I), (m = 0))
          : f >= 60 && f < 120
          ? ((_ = I), (S = g), (m = 0))
          : f >= 120 && f < 180
          ? ((_ = 0), (S = g), (m = I))
          : f >= 180 && f < 240
          ? ((_ = 0), (S = I), (m = g))
          : f >= 240 && f < 300
          ? ((_ = I), (S = 0), (m = g))
          : ((_ = g), (S = 0), (m = I)),
          (t = Math.round((_ + b) * 255)),
          (n = Math.round((S + b) * 255)),
          (r = Math.round((m + b) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          T = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * v - 1)) * T,
          I = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = v - g / 2,
          _,
          S,
          m;
        f >= 0 && f < 60
          ? ((_ = g), (S = I), (m = 0))
          : f >= 60 && f < 120
          ? ((_ = I), (S = g), (m = 0))
          : f >= 120 && f < 180
          ? ((_ = 0), (S = g), (m = I))
          : f >= 180 && f < 240
          ? ((_ = 0), (S = I), (m = g))
          : f >= 240 && f < 300
          ? ((_ = I), (S = 0), (m = g))
          : ((_ = g), (S = 0), (m = I)),
          (t = Math.round((_ + b) * 255)),
          (n = Math.round((S + b) * 255)),
          (r = Math.round((m + b) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: a };
    }
  });
  var $d = d((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    function pS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    pS(Zi, {
      clearPlugin: function () {
        return mS;
      },
      createPluginInstance: function () {
        return TS;
      },
      getPluginConfig: function () {
        return ES;
      },
      getPluginDestination: function () {
        return vS;
      },
      getPluginDuration: function () {
        return yS;
      },
      getPluginOrigin: function () {
        return IS;
      },
      renderPlugin: function () {
        return _S;
      },
    });
    var gS = $i(),
      ES = (e, t) => e.value[t],
      yS = () => null,
      IS = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          a = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(a, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(a) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, gS.normalizeColor)(a);
      },
      vS = (e) => e.value,
      TS = () => null,
      hS = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((a) => a != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      _S = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: a },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          o = Object.values(hS).find((u) => u.match(i, a));
        o && document.documentElement.style.setProperty(r, o.getValue(i, a));
      },
      mS = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Jd = d((Ji) => {
    "use strict";
    Object.defineProperty(Ji, "__esModule", { value: !0 });
    Object.defineProperty(Ji, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return RS;
      },
    });
    var er = Le(),
      bS = tr(zd()),
      OS = tr(Qd()),
      AS = tr(Kd()),
      SS = tr($d());
    function Zd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Zd = function (r) {
        return r ? n : t;
      })(e);
    }
    function tr(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Zd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var RS = new Map([
      [er.ActionTypeConsts.PLUGIN_LOTTIE, { ...bS }],
      [er.ActionTypeConsts.PLUGIN_SPLINE, { ...OS }],
      [er.ActionTypeConsts.PLUGIN_RIVE, { ...AS }],
      [er.ActionTypeConsts.PLUGIN_VARIABLE, { ...SS }],
    ]);
  });
  var ta = d((ea) => {
    "use strict";
    Object.defineProperty(ea, "__esModule", { value: !0 });
    function wS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    wS(ea, {
      clearPlugin: function () {
        return US;
      },
      createPluginInstance: function () {
        return DS;
      },
      getPluginConfig: function () {
        return NS;
      },
      getPluginDestination: function () {
        return MS;
      },
      getPluginDuration: function () {
        return xS;
      },
      getPluginOrigin: function () {
        return PS;
      },
      isPluginType: function () {
        return LS;
      },
      renderPlugin: function () {
        return FS;
      },
    });
    var CS = Kn(),
      ef = Jd();
    function LS(e) {
      return ef.pluginMethodMap.has(e);
    }
    var Et = (e) => (t) => {
        if (!CS.IS_BROWSER_ENV) return () => null;
        let n = ef.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      NS = Et("getPluginConfig"),
      PS = Et("getPluginOrigin"),
      xS = Et("getPluginDuration"),
      MS = Et("getPluginDestination"),
      DS = Et("createPluginInstance"),
      FS = Et("renderPlugin"),
      US = Et("clearPlugin");
  });
  var nf = d((Y9, tf) => {
    function GS(e, t) {
      return e == null || e !== e ? t : e;
    }
    tf.exports = GS;
  });
  var af = d((Q9, rf) => {
    function VS(e, t, n, r) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    rf.exports = VS;
  });
  var sf = d((K9, of) => {
    function qS(e) {
      return function (t, n, r) {
        for (var a = -1, i = Object(t), o = r(t), u = o.length; u--; ) {
          var s = o[e ? u : ++a];
          if (n(i[s], s, i) === !1) break;
        }
        return t;
      };
    }
    of.exports = qS;
  });
  var cf = d((j9, uf) => {
    var kS = sf(),
      XS = kS();
    uf.exports = XS;
  });
  var na = d(($9, lf) => {
    var WS = cf(),
      BS = an();
    function HS(e, t) {
      return e && WS(e, t, BS);
    }
    lf.exports = HS;
  });
  var ff = d((Z9, df) => {
    var zS = pt();
    function YS(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!zS(n)) return e(n, r);
        for (
          var a = n.length, i = t ? a : -1, o = Object(n);
          (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

        );
        return n;
      };
    }
    df.exports = YS;
  });
  var ra = d((J9, pf) => {
    var QS = na(),
      KS = ff(),
      jS = KS(QS);
    pf.exports = jS;
  });
  var Ef = d((eP, gf) => {
    function $S(e, t, n, r, a) {
      return (
        a(e, function (i, o, u) {
          n = r ? ((r = !1), i) : t(n, i, o, u);
        }),
        n
      );
    }
    gf.exports = $S;
  });
  var If = d((tP, yf) => {
    var ZS = af(),
      JS = ra(),
      e6 = at(),
      t6 = Ef(),
      n6 = me();
    function r6(e, t, n) {
      var r = n6(e) ? ZS : t6,
        a = arguments.length < 3;
      return r(e, e6(t, 4), n, a, JS);
    }
    yf.exports = r6;
  });
  var Tf = d((nP, vf) => {
    var i6 = xi(),
      a6 = at(),
      o6 = Mi(),
      s6 = Math.max,
      u6 = Math.min;
    function c6(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = r - 1;
      return (
        n !== void 0 &&
          ((a = o6(n)), (a = n < 0 ? s6(r + a, 0) : u6(a, r - 1))),
        i6(e, a6(t, 3), a, !0)
      );
    }
    vf.exports = c6;
  });
  var _f = d((rP, hf) => {
    var l6 = Pi(),
      d6 = Tf(),
      f6 = l6(d6);
    hf.exports = f6;
  });
  var bf = d((ia) => {
    "use strict";
    Object.defineProperty(ia, "__esModule", { value: !0 });
    Object.defineProperty(ia, "default", {
      enumerable: !0,
      get: function () {
        return g6;
      },
    });
    function mf(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function p6(e, t) {
      if (mf(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let a = 0; a < n.length; a++)
        if (!Object.hasOwn(t, n[a]) || !mf(e[n[a]], t[n[a]])) return !1;
      return !0;
    }
    var g6 = p6;
  });
  var Xf = d((pa) => {
    "use strict";
    Object.defineProperty(pa, "__esModule", { value: !0 });
    function E6(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    E6(pa, {
      cleanupHTMLElement: function () {
        return g5;
      },
      clearAllStyles: function () {
        return p5;
      },
      clearObjectCache: function () {
        return M6;
      },
      getActionListProgress: function () {
        return y5;
      },
      getAffectedElements: function () {
        return da;
      },
      getComputedStyle: function () {
        return X6;
      },
      getDestinationValues: function () {
        return K6;
      },
      getElementId: function () {
        return G6;
      },
      getInstanceId: function () {
        return F6;
      },
      getInstanceOrigin: function () {
        return H6;
      },
      getItemConfigByKey: function () {
        return Q6;
      },
      getMaxDurationItemIndex: function () {
        return kf;
      },
      getNamespacedParameterId: function () {
        return T5;
      },
      getRenderType: function () {
        return Gf;
      },
      getStyleProp: function () {
        return j6;
      },
      mediaQueriesEqual: function () {
        return _5;
      },
      observeStore: function () {
        return k6;
      },
      reduceListToGroup: function () {
        return I5;
      },
      reifyState: function () {
        return V6;
      },
      renderHTMLElement: function () {
        return $6;
      },
      shallowEqual: function () {
        return Nf.default;
      },
      shouldAllowMediaQuery: function () {
        return h5;
      },
      shouldNamespaceEventParameter: function () {
        return v5;
      },
      stringifyTarget: function () {
        return m5;
      },
    });
    var ot = ar(nf()),
      sa = ar(If()),
      oa = ar(_f()),
      Of = wt(),
      yt = Le(),
      Nf = ar(bf()),
      y6 = Xi(),
      I6 = $i(),
      Ke = ta(),
      Re = Kn();
    function ar(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: v6,
        TRANSFORM: T6,
        TRANSLATE_3D: h6,
        SCALE_3D: _6,
        ROTATE_X: m6,
        ROTATE_Y: b6,
        ROTATE_Z: O6,
        SKEW: A6,
        PRESERVE_3D: S6,
        FLEX: R6,
        OPACITY: rr,
        FILTER: cn,
        FONT_VARIATION_SETTINGS: ln,
        WIDTH: Ye,
        HEIGHT: Qe,
        BACKGROUND_COLOR: Pf,
        BORDER_COLOR: w6,
        COLOR: C6,
        CHILDREN: Af,
        IMMEDIATE_CHILDREN: L6,
        SIBLINGS: Sf,
        PARENT: N6,
        DISPLAY: ir,
        WILL_CHANGE: Ut,
        AUTO: st,
        COMMA_DELIMITER: dn,
        COLON_DELIMITER: P6,
        BAR_DELIMITER: aa,
        RENDER_TRANSFORM: xf,
        RENDER_GENERAL: ua,
        RENDER_STYLE: ca,
        RENDER_PLUGIN: Mf,
      } = yt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Gt,
        TRANSFORM_SCALE: Vt,
        TRANSFORM_ROTATE: qt,
        TRANSFORM_SKEW: fn,
        STYLE_OPACITY: Df,
        STYLE_FILTER: pn,
        STYLE_FONT_VARIATION: gn,
        STYLE_SIZE: kt,
        STYLE_BACKGROUND_COLOR: Xt,
        STYLE_BORDER: Wt,
        STYLE_TEXT_COLOR: Bt,
        GENERAL_DISPLAY: or,
        OBJECT_VALUE: x6,
      } = yt.ActionTypeConsts,
      Ff = (e) => e.trim(),
      la = Object.freeze({ [Xt]: Pf, [Wt]: w6, [Bt]: C6 }),
      Uf = Object.freeze({
        [Re.TRANSFORM_PREFIXED]: T6,
        [Pf]: v6,
        [rr]: rr,
        [cn]: cn,
        [Ye]: Ye,
        [Qe]: Qe,
        [ln]: ln,
      }),
      nr = new Map();
    function M6() {
      nr.clear();
    }
    var D6 = 1;
    function F6() {
      return "i" + D6++;
    }
    var U6 = 1;
    function G6(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + U6++;
    }
    function V6({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, sa.default)(
          e,
          (o, u) => {
            let { eventTypeId: s } = u;
            return o[s] || (o[s] = {}), (o[s][u.id] = u), o;
          },
          {}
        ),
        a = n && n.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var q6 = (e, t) => e === t;
    function k6({ store: e, select: t, onChange: n, comparator: r = q6 }) {
      let { getState: a, subscribe: i } = e,
        o = i(s),
        u = t(a());
      function s() {
        let f = t(a());
        if (f == null) {
          o();
          return;
        }
        r(f, u) || ((u = f), n(u, e));
      }
      return o;
    }
    function Rf(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: u,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: u,
        };
      }
      return {};
    }
    function da({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: a,
    }) {
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (G, A) =>
            G.concat(
              da({
                config: { target: A },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: o,
          getQuerySelector: u,
          queryDocument: s,
          getChildElements: f,
          getSiblingElements: T,
          matchSelector: v,
          elementContains: g,
          isSiblingNode: I,
        } = a,
        { target: b } = e;
      if (!b) return [];
      let {
        id: _,
        objectId: S,
        selector: m,
        selectorGuids: C,
        appliesTo: L,
        useEventTarget: x,
      } = Rf(b);
      if (S) return [nr.has(S) ? nr.get(S) : nr.set(S, {}).get(S)];
      if (L === yt.EventAppliesTo.PAGE) {
        let G = o(_);
        return G ? [G] : [];
      }
      let M = (t?.action?.config?.affectedElements ?? {})[_ || m] || {},
        H = !!(M.id || M.selector),
        z,
        Q,
        Z,
        J = t && u(Rf(t.target));
      if (
        (H
          ? ((z = M.limitAffectedElements), (Q = J), (Z = u(M)))
          : (Q = Z = u({ id: _, selector: m, selectorGuids: C })),
        t && x)
      ) {
        let G = n && (Z || x === !0) ? [n] : s(J);
        if (Z) {
          if (x === N6) return s(Z).filter((A) => G.some((V) => g(A, V)));
          if (x === Af) return s(Z).filter((A) => G.some((V) => g(V, A)));
          if (x === Sf) return s(Z).filter((A) => G.some((V) => I(V, A)));
        }
        return G;
      }
      return Q == null || Z == null
        ? []
        : Re.IS_BROWSER_ENV && r
        ? s(Z).filter((G) => r.contains(G))
        : z === Af
        ? s(Q, Z)
        : z === L6
        ? f(s(Q)).filter(v(Z))
        : z === Sf
        ? T(s(Q)).filter(v(Z))
        : s(Z);
    }
    function X6({ element: e, actionItem: t }) {
      if (!Re.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case kt:
        case Xt:
        case Wt:
        case Bt:
        case or:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var wf = /px/,
      W6 = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = Z6[r.type]), n),
          e || {}
        ),
      B6 = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = J6[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function H6(e, t = {}, n = {}, r, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = r;
      if ((0, Ke.isPluginType)(o)) return (0, Ke.getPluginOrigin)(o)(t[o], r);
      switch (r.actionTypeId) {
        case Gt:
        case Vt:
        case qt:
        case fn:
          return t[r.actionTypeId] || fa[r.actionTypeId];
        case pn:
          return W6(t[r.actionTypeId], r.config.filters);
        case gn:
          return B6(t[r.actionTypeId], r.config.fontVariations);
        case Df:
          return { value: (0, ot.default)(parseFloat(i(e, rr)), 1) };
        case kt: {
          let u = i(e, Ye),
            s = i(e, Qe),
            f,
            T;
          return (
            r.config.widthUnit === st
              ? (f = wf.test(u) ? parseFloat(u) : parseFloat(n.width))
              : (f = (0, ot.default)(parseFloat(u), parseFloat(n.width))),
            r.config.heightUnit === st
              ? (T = wf.test(s) ? parseFloat(s) : parseFloat(n.height))
              : (T = (0, ot.default)(parseFloat(s), parseFloat(n.height))),
            { widthValue: f, heightValue: T }
          );
        }
        case Xt:
        case Wt:
        case Bt:
          return l5({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case or:
          return { value: (0, ot.default)(i(e, ir), n.display) };
        case x6:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var z6 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      Y6 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      Q6 = (e, t, n) => {
        if ((0, Ke.isPluginType)(e)) return (0, Ke.getPluginConfig)(e)(n, t);
        switch (e) {
          case pn: {
            let r = (0, oa.default)(n.filters, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          case gn: {
            let r = (0, oa.default)(n.fontVariations, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function K6({ element: e, actionItem: t, elementApi: n }) {
      if ((0, Ke.isPluginType)(t.actionTypeId))
        return (0, Ke.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Gt:
        case Vt:
        case qt:
        case fn: {
          let { xValue: r, yValue: a, zValue: i } = t.config;
          return { xValue: r, yValue: a, zValue: i };
        }
        case kt: {
          let { getStyle: r, setStyle: a, getProperty: i } = n,
            { widthUnit: o, heightUnit: u } = t.config,
            { widthValue: s, heightValue: f } = t.config;
          if (!Re.IS_BROWSER_ENV) return { widthValue: s, heightValue: f };
          if (o === st) {
            let T = r(e, Ye);
            a(e, Ye, ""), (s = i(e, "offsetWidth")), a(e, Ye, T);
          }
          if (u === st) {
            let T = r(e, Qe);
            a(e, Qe, ""), (f = i(e, "offsetHeight")), a(e, Qe, T);
          }
          return { widthValue: s, heightValue: f };
        }
        case Xt:
        case Wt:
        case Bt: {
          let {
            rValue: r,
            gValue: a,
            bValue: i,
            aValue: o,
            globalSwatchId: u,
          } = t.config;
          if (u && u.startsWith("--")) {
            let { getStyle: s } = n,
              f = s(e, u),
              T = (0, I6.normalizeColor)(f);
            return {
              rValue: T.red,
              gValue: T.green,
              bValue: T.blue,
              aValue: T.alpha,
            };
          }
          return { rValue: r, gValue: a, bValue: i, aValue: o };
        }
        case pn:
          return t.config.filters.reduce(z6, {});
        case gn:
          return t.config.fontVariations.reduce(Y6, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function Gf(e) {
      if (/^TRANSFORM_/.test(e)) return xf;
      if (/^STYLE_/.test(e)) return ca;
      if (/^GENERAL_/.test(e)) return ua;
      if (/^PLUGIN_/.test(e)) return Mf;
    }
    function j6(e, t) {
      return e === ca ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function $6(e, t, n, r, a, i, o, u, s) {
      switch (u) {
        case xf:
          return n5(e, t, n, a, o);
        case ca:
          return d5(e, t, n, a, i, o);
        case ua:
          return f5(e, a, o);
        case Mf: {
          let { actionTypeId: f } = a;
          if ((0, Ke.isPluginType)(f)) return (0, Ke.renderPlugin)(f)(s, t, a);
        }
      }
    }
    var fa = {
        [Gt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Vt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [qt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [fn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      Z6 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      J6 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      e5 = (e, t) => {
        let n = (0, oa.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      t5 = Object.keys(fa);
    function n5(e, t, n, r, a) {
      let i = t5
          .map((u) => {
            let s = fa[u],
              {
                xValue: f = s.xValue,
                yValue: T = s.yValue,
                zValue: v = s.zValue,
                xUnit: g = "",
                yUnit: I = "",
                zUnit: b = "",
              } = t[u] || {};
            switch (u) {
              case Gt:
                return `${h6}(${f}${g}, ${T}${I}, ${v}${b})`;
              case Vt:
                return `${_6}(${f}${g}, ${T}${I}, ${v}${b})`;
              case qt:
                return `${m6}(${f}${g}) ${b6}(${T}${I}) ${O6}(${v}${b})`;
              case fn:
                return `${A6}(${f}${g}, ${T}${I})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: o } = a;
      It(e, Re.TRANSFORM_PREFIXED, a),
        o(e, Re.TRANSFORM_PREFIXED, i),
        a5(r, n) && o(e, Re.TRANSFORM_STYLE_PREFIXED, S6);
    }
    function r5(e, t, n, r) {
      let a = (0, sa.default)(t, (o, u, s) => `${o} ${s}(${u}${e5(s, n)})`, ""),
        { setStyle: i } = r;
      It(e, cn, r), i(e, cn, a);
    }
    function i5(e, t, n, r) {
      let a = (0, sa.default)(
          t,
          (o, u, s) => (o.push(`"${s}" ${u}`), o),
          []
        ).join(", "),
        { setStyle: i } = r;
      It(e, ln, r), i(e, ln, a);
    }
    function a5({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Gt && r !== void 0) ||
        (e === Vt && r !== void 0) ||
        (e === qt && (t !== void 0 || n !== void 0))
      );
    }
    var o5 = "\\(([^)]+)\\)",
      s5 = /^rgb/,
      u5 = RegExp(`rgba?${o5}`);
    function c5(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function l5({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let a = la[t],
        i = r(e, a),
        o = s5.test(i) ? i : n[a],
        u = c5(u5, o).split(dn);
      return {
        rValue: (0, ot.default)(parseInt(u[0], 10), 255),
        gValue: (0, ot.default)(parseInt(u[1], 10), 255),
        bValue: (0, ot.default)(parseInt(u[2], 10), 255),
        aValue: (0, ot.default)(parseFloat(u[3]), 1),
      };
    }
    function d5(e, t, n, r, a, i) {
      let { setStyle: o } = i;
      switch (r.actionTypeId) {
        case kt: {
          let { widthUnit: u = "", heightUnit: s = "" } = r.config,
            { widthValue: f, heightValue: T } = n;
          f !== void 0 &&
            (u === st && (u = "px"), It(e, Ye, i), o(e, Ye, f + u)),
            T !== void 0 &&
              (s === st && (s = "px"), It(e, Qe, i), o(e, Qe, T + s));
          break;
        }
        case pn: {
          r5(e, n, r.config, i);
          break;
        }
        case gn: {
          i5(e, n, r.config, i);
          break;
        }
        case Xt:
        case Wt:
        case Bt: {
          let u = la[r.actionTypeId],
            s = Math.round(n.rValue),
            f = Math.round(n.gValue),
            T = Math.round(n.bValue),
            v = n.aValue;
          It(e, u, i),
            o(
              e,
              u,
              v >= 1 ? `rgb(${s},${f},${T})` : `rgba(${s},${f},${T},${v})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = r.config;
          It(e, a, i), o(e, a, n.value + u);
          break;
        }
      }
    }
    function f5(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case or: {
          let { value: a } = t.config;
          a === R6 && Re.IS_BROWSER_ENV
            ? r(e, ir, Re.FLEX_PREFIXED)
            : r(e, ir, a);
          return;
        }
      }
    }
    function It(e, t, n) {
      if (!Re.IS_BROWSER_ENV) return;
      let r = Uf[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Ut);
      if (!o) {
        i(e, Ut, r);
        return;
      }
      let u = o.split(dn).map(Ff);
      u.indexOf(r) === -1 && i(e, Ut, u.concat(r).join(dn));
    }
    function Vf(e, t, n) {
      if (!Re.IS_BROWSER_ENV) return;
      let r = Uf[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Ut);
      !o ||
        o.indexOf(r) === -1 ||
        i(
          e,
          Ut,
          o
            .split(dn)
            .map(Ff)
            .filter((u) => u !== r)
            .join(dn)
        );
    }
    function p5({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: a = {} } = n;
      Object.keys(r).forEach((i) => {
        let o = r[i],
          { config: u } = o.action,
          { actionListId: s } = u,
          f = a[s];
        f && Cf({ actionList: f, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Cf({ actionList: a[i], elementApi: t });
        });
    }
    function Cf({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e;
      r &&
        r.forEach((i) => {
          Lf({ actionGroup: i, event: t, elementApi: n });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((u) => {
              Lf({ actionGroup: u, event: t, elementApi: n });
            });
          });
    }
    function Lf({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((a) => {
        let { actionTypeId: i, config: o } = a,
          u;
        (0, Ke.isPluginType)(i)
          ? (u = (s) => (0, Ke.clearPlugin)(i)(s, a))
          : (u = qf({ effect: E5, actionTypeId: i, elementApi: n })),
          da({ config: o, event: t, elementApi: n }).forEach(u);
      });
    }
    function g5(e, t, n) {
      let { setStyle: r, getStyle: a } = n,
        { actionTypeId: i } = t;
      if (i === kt) {
        let { config: o } = t;
        o.widthUnit === st && r(e, Ye, ""), o.heightUnit === st && r(e, Qe, "");
      }
      a(e, Ut) && qf({ effect: Vf, actionTypeId: i, elementApi: n })(e);
    }
    var qf =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Gt:
          case Vt:
          case qt:
          case fn:
            e(r, Re.TRANSFORM_PREFIXED, n);
            break;
          case pn:
            e(r, cn, n);
            break;
          case gn:
            e(r, ln, n);
            break;
          case Df:
            e(r, rr, n);
            break;
          case kt:
            e(r, Ye, n), e(r, Qe, n);
            break;
          case Xt:
          case Wt:
          case Bt:
            e(r, la[t], n);
            break;
          case or:
            e(r, ir, n);
            break;
        }
      };
    function E5(e, t, n) {
      let { setStyle: r } = n;
      Vf(e, t, n),
        r(e, t, ""),
        t === Re.TRANSFORM_PREFIXED && r(e, Re.TRANSFORM_STYLE_PREFIXED, "");
    }
    function kf(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, a) => {
          let { config: i } = r,
            o = i.delay + i.duration;
          o >= t && ((t = o), (n = a));
        }),
        n
      );
    }
    function y5(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        u = 0;
      return (
        n.forEach((s, f) => {
          if (r && f === 0) return;
          let { actionItems: T } = s,
            v = T[kf(T)],
            { config: g, actionTypeId: I } = v;
          a.id === v.id && (u = o + i);
          let b = Gf(I) === ua ? 0 : g.duration;
          o += g.delay + b;
        }),
        o > 0 ? (0, y6.optimizeFloat)(u / o) : 0
      );
    }
    function I5({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e,
        i = [],
        o = (u) => (
          i.push((0, Of.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        r && r.some(({ actionItems: u }) => u.some(o)),
        a &&
          a.some((u) => {
            let { continuousActionGroups: s } = u;
            return s.some(({ actionItems: f }) => f.some(o));
          }),
        (0, Of.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function v5(e, { basedOn: t }) {
      return (
        (e === yt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === yt.EventBasedOn.ELEMENT || t == null)) ||
        (e === yt.EventTypeConsts.MOUSE_MOVE && t === yt.EventBasedOn.ELEMENT)
      );
    }
    function T5(e, t) {
      return e + P6 + t;
    }
    function h5(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function _5(e, t) {
      return (0, Nf.default)(e && e.sort(), t && t.sort());
    }
    function m5(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + aa + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + aa + n + aa + r;
    }
  });
  var vt = d((ga) => {
    "use strict";
    Object.defineProperty(ga, "__esModule", { value: !0 });
    function b5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    b5(ga, {
      IX2BrowserSupport: function () {
        return O5;
      },
      IX2EasingUtils: function () {
        return S5;
      },
      IX2Easings: function () {
        return A5;
      },
      IX2ElementsReducer: function () {
        return R5;
      },
      IX2VanillaPlugins: function () {
        return w5;
      },
      IX2VanillaUtils: function () {
        return C5;
      },
    });
    var O5 = Ht(Kn()),
      A5 = Ht(Vi()),
      S5 = Ht(Xi()),
      R5 = Ht(Hd()),
      w5 = Ht(ta()),
      C5 = Ht(Xf());
    function Wf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Wf = function (r) {
        return r ? n : t;
      })(e);
    }
    function Ht(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Wf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Yf = d((ya) => {
    "use strict";
    Object.defineProperty(ya, "__esModule", { value: !0 });
    Object.defineProperty(ya, "ixInstances", {
      enumerable: !0,
      get: function () {
        return X5;
      },
    });
    var Bf = Le(),
      Hf = vt(),
      zt = wt(),
      {
        IX2_RAW_DATA_IMPORTED: L5,
        IX2_SESSION_STOPPED: N5,
        IX2_INSTANCE_ADDED: P5,
        IX2_INSTANCE_STARTED: x5,
        IX2_INSTANCE_REMOVED: M5,
        IX2_ANIMATION_FRAME_CHANGED: D5,
      } = Bf.IX2EngineActionTypes,
      {
        optimizeFloat: sr,
        applyEasing: zf,
        createBezierEasing: F5,
      } = Hf.IX2EasingUtils,
      { RENDER_GENERAL: U5 } = Bf.IX2EngineConstants,
      {
        getItemConfigByKey: Ea,
        getRenderType: G5,
        getStyleProp: V5,
      } = Hf.IX2VanillaUtils,
      q5 = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: u,
            actionTypeId: s,
            customEasingFn: f,
            skipMotion: T,
            skipToValue: v,
          } = e,
          { parameters: g } = t.payload,
          I = Math.max(1 - o, 0.01),
          b = g[r];
        b == null && ((I = 1), (b = u));
        let _ = Math.max(b, 0) || 0,
          S = sr(_ - n),
          m = T ? v : sr(n + S * I),
          C = m * 100;
        if (m === n && e.current) return e;
        let L, x, D, M;
        for (let z = 0, { length: Q } = a; z < Q; z++) {
          let { keyframe: Z, actionItems: J } = a[z];
          if ((z === 0 && (L = J[0]), C >= Z)) {
            L = J[0];
            let G = a[z + 1],
              A = G && C !== Z;
            (x = A ? G.actionItems[0] : null),
              A && ((D = Z / 100), (M = (G.keyframe - Z) / 100));
          }
        }
        let H = {};
        if (L && !x)
          for (let z = 0, { length: Q } = i; z < Q; z++) {
            let Z = i[z];
            H[Z] = Ea(s, Z, L.config);
          }
        else if (L && x && D !== void 0 && M !== void 0) {
          let z = (m - D) / M,
            Q = L.config.easing,
            Z = zf(Q, z, f);
          for (let J = 0, { length: G } = i; J < G; J++) {
            let A = i[J],
              V = Ea(s, A, L.config),
              re = (Ea(s, A, x.config) - V) * Z + V;
            H[A] = re;
          }
        }
        return (0, zt.merge)(e, { position: m, current: H });
      },
      k5 = (e, t) => {
        let {
            active: n,
            origin: r,
            start: a,
            immediate: i,
            renderType: o,
            verbose: u,
            actionItem: s,
            destination: f,
            destinationKeys: T,
            pluginDuration: v,
            instanceDelay: g,
            customEasingFn: I,
            skipMotion: b,
          } = e,
          _ = s.config.easing,
          { duration: S, delay: m } = s.config;
        v != null && (S = v),
          (m = g ?? m),
          o === U5 ? (S = 0) : (i || b) && (S = m = 0);
        let { now: C } = t.payload;
        if (n && r) {
          let L = C - (a + m);
          if (u) {
            let z = C - a,
              Q = S + m,
              Z = sr(Math.min(Math.max(0, z / Q), 1));
            e = (0, zt.set)(e, "verboseTimeElapsed", Q * Z);
          }
          if (L < 0) return e;
          let x = sr(Math.min(Math.max(0, L / S), 1)),
            D = zf(_, x, I),
            M = {},
            H = null;
          return (
            T.length &&
              (H = T.reduce((z, Q) => {
                let Z = f[Q],
                  J = parseFloat(r[Q]) || 0,
                  A = (parseFloat(Z) - J) * D + J;
                return (z[Q] = A), z;
              }, {})),
            (M.current = H),
            (M.position = x),
            x === 1 && ((M.active = !1), (M.complete = !0)),
            (0, zt.merge)(e, M)
          );
        }
        return e;
      },
      X5 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case L5:
            return t.payload.ixInstances || Object.freeze({});
          case N5:
            return Object.freeze({});
          case P5: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                isCarrier: T,
                origin: v,
                destination: g,
                immediate: I,
                verbose: b,
                continuous: _,
                parameterId: S,
                actionGroups: m,
                smoothing: C,
                restingValue: L,
                pluginInstance: x,
                pluginDuration: D,
                instanceDelay: M,
                skipMotion: H,
                skipToValue: z,
              } = t.payload,
              { actionTypeId: Q } = a,
              Z = G5(Q),
              J = V5(Z, Q),
              G = Object.keys(g).filter(
                (V) => g[V] != null && typeof g[V] != "string"
              ),
              { easing: A } = a.config;
            return (0, zt.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: v,
              destination: g,
              destinationKeys: G,
              immediate: I,
              verbose: b,
              current: null,
              actionItem: a,
              actionTypeId: Q,
              eventId: i,
              eventTarget: o,
              eventStateKey: u,
              actionListId: s,
              groupIndex: f,
              renderType: Z,
              isCarrier: T,
              styleProp: J,
              continuous: _,
              parameterId: S,
              actionGroups: m,
              smoothing: C,
              restingValue: L,
              pluginInstance: x,
              pluginDuration: D,
              instanceDelay: M,
              skipMotion: H,
              skipToValue: z,
              customEasingFn:
                Array.isArray(A) && A.length === 4 ? F5(A) : void 0,
            });
          }
          case x5: {
            let { instanceId: n, time: r } = t.payload;
            return (0, zt.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case M5: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let u = a[o];
              u !== n && (r[u] = e[u]);
            }
            return r;
          }
          case D5: {
            let n = e,
              r = Object.keys(e),
              { length: a } = r;
            for (let i = 0; i < a; i++) {
              let o = r[i],
                u = e[o],
                s = u.continuous ? q5 : k5;
              n = (0, zt.set)(n, o, s(u, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var Qf = d((Ia) => {
    "use strict";
    Object.defineProperty(Ia, "__esModule", { value: !0 });
    Object.defineProperty(Ia, "ixParameters", {
      enumerable: !0,
      get: function () {
        return Y5;
      },
    });
    var W5 = Le(),
      {
        IX2_RAW_DATA_IMPORTED: B5,
        IX2_SESSION_STOPPED: H5,
        IX2_PARAMETER_CHANGED: z5,
      } = W5.IX2EngineActionTypes,
      Y5 = (e = {}, t) => {
        switch (t.type) {
          case B5:
            return t.payload.ixParameters || {};
          case H5:
            return {};
          case z5: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var Kf = d((va) => {
    "use strict";
    Object.defineProperty(va, "__esModule", { value: !0 });
    Object.defineProperty(va, "default", {
      enumerable: !0,
      get: function () {
        return nR;
      },
    });
    var Q5 = jr(),
      K5 = us(),
      j5 = Rs(),
      $5 = Cs(),
      Z5 = vt(),
      J5 = Yf(),
      eR = Qf(),
      { ixElements: tR } = Z5.IX2ElementsReducer,
      nR = (0, Q5.combineReducers)({
        ixData: K5.ixData,
        ixRequest: j5.ixRequest,
        ixSession: $5.ixSession,
        ixElements: tR,
        ixInstances: J5.ixInstances,
        ixParameters: eR.ixParameters,
      });
  });
  var $f = d((lP, jf) => {
    var rR = rt(),
      iR = me(),
      aR = Je(),
      oR = "[object String]";
    function sR(e) {
      return typeof e == "string" || (!iR(e) && aR(e) && rR(e) == oR);
    }
    jf.exports = sR;
  });
  var Jf = d((dP, Zf) => {
    var uR = Ni(),
      cR = uR("length");
    Zf.exports = cR;
  });
  var tp = d((fP, ep) => {
    var lR = "\\ud800-\\udfff",
      dR = "\\u0300-\\u036f",
      fR = "\\ufe20-\\ufe2f",
      pR = "\\u20d0-\\u20ff",
      gR = dR + fR + pR,
      ER = "\\ufe0e\\ufe0f",
      yR = "\\u200d",
      IR = RegExp("[" + yR + lR + gR + ER + "]");
    function vR(e) {
      return IR.test(e);
    }
    ep.exports = vR;
  });
  var lp = d((pP, cp) => {
    var rp = "\\ud800-\\udfff",
      TR = "\\u0300-\\u036f",
      hR = "\\ufe20-\\ufe2f",
      _R = "\\u20d0-\\u20ff",
      mR = TR + hR + _R,
      bR = "\\ufe0e\\ufe0f",
      OR = "[" + rp + "]",
      Ta = "[" + mR + "]",
      ha = "\\ud83c[\\udffb-\\udfff]",
      AR = "(?:" + Ta + "|" + ha + ")",
      ip = "[^" + rp + "]",
      ap = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      op = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      SR = "\\u200d",
      sp = AR + "?",
      up = "[" + bR + "]?",
      RR = "(?:" + SR + "(?:" + [ip, ap, op].join("|") + ")" + up + sp + ")*",
      wR = up + sp + RR,
      CR = "(?:" + [ip + Ta + "?", Ta, ap, op, OR].join("|") + ")",
      np = RegExp(ha + "(?=" + ha + ")|" + CR + wR, "g");
    function LR(e) {
      for (var t = (np.lastIndex = 0); np.test(e); ) ++t;
      return t;
    }
    cp.exports = LR;
  });
  var fp = d((gP, dp) => {
    var NR = Jf(),
      PR = tp(),
      xR = lp();
    function MR(e) {
      return PR(e) ? xR(e) : NR(e);
    }
    dp.exports = MR;
  });
  var gp = d((EP, pp) => {
    var DR = qn(),
      FR = kn(),
      UR = pt(),
      GR = $f(),
      VR = fp(),
      qR = "[object Map]",
      kR = "[object Set]";
    function XR(e) {
      if (e == null) return 0;
      if (UR(e)) return GR(e) ? VR(e) : e.length;
      var t = FR(e);
      return t == qR || t == kR ? e.size : DR(e).length;
    }
    pp.exports = XR;
  });
  var yp = d((yP, Ep) => {
    var WR = "Expected a function";
    function BR(e) {
      if (typeof e != "function") throw new TypeError(WR);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Ep.exports = BR;
  });
  var _a = d((IP, Ip) => {
    var HR = it(),
      zR = (function () {
        try {
          var e = HR(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Ip.exports = zR;
  });
  var ma = d((vP, Tp) => {
    var vp = _a();
    function YR(e, t, n) {
      t == "__proto__" && vp
        ? vp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Tp.exports = YR;
  });
  var _p = d((TP, hp) => {
    var QR = ma(),
      KR = Ln(),
      jR = Object.prototype,
      $R = jR.hasOwnProperty;
    function ZR(e, t, n) {
      var r = e[t];
      (!($R.call(e, t) && KR(r, n)) || (n === void 0 && !(t in e))) &&
        QR(e, t, n);
    }
    hp.exports = ZR;
  });
  var Op = d((hP, bp) => {
    var JR = _p(),
      e4 = sn(),
      t4 = Fn(),
      mp = ze(),
      n4 = Ft();
    function r4(e, t, n, r) {
      if (!mp(e)) return e;
      t = e4(t, e);
      for (var a = -1, i = t.length, o = i - 1, u = e; u != null && ++a < i; ) {
        var s = n4(t[a]),
          f = n;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (a != o) {
          var T = u[s];
          (f = r ? r(T, s, u) : void 0),
            f === void 0 && (f = mp(T) ? T : t4(t[a + 1]) ? [] : {});
        }
        JR(u, s, f), (u = u[s]);
      }
      return e;
    }
    bp.exports = r4;
  });
  var Sp = d((_P, Ap) => {
    var i4 = Bn(),
      a4 = Op(),
      o4 = sn();
    function s4(e, t, n) {
      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
        var o = t[r],
          u = i4(e, o);
        n(u, o) && a4(i, o4(o, e), u);
      }
      return i;
    }
    Ap.exports = s4;
  });
  var wp = d((mP, Rp) => {
    var u4 = Mn(),
      c4 = Ur(),
      l4 = yi(),
      d4 = Ei(),
      f4 = Object.getOwnPropertySymbols,
      p4 = f4
        ? function (e) {
            for (var t = []; e; ) u4(t, l4(e)), (e = c4(e));
            return t;
          }
        : d4;
    Rp.exports = p4;
  });
  var Lp = d((bP, Cp) => {
    function g4(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Cp.exports = g4;
  });
  var Pp = d((OP, Np) => {
    var E4 = ze(),
      y4 = Vn(),
      I4 = Lp(),
      v4 = Object.prototype,
      T4 = v4.hasOwnProperty;
    function h4(e) {
      if (!E4(e)) return I4(e);
      var t = y4(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !T4.call(e, r))) || n.push(r);
      return n;
    }
    Np.exports = h4;
  });
  var Mp = d((AP, xp) => {
    var _4 = vi(),
      m4 = Pp(),
      b4 = pt();
    function O4(e) {
      return b4(e) ? _4(e, !0) : m4(e);
    }
    xp.exports = O4;
  });
  var Fp = d((SP, Dp) => {
    var A4 = gi(),
      S4 = wp(),
      R4 = Mp();
    function w4(e) {
      return A4(e, R4, S4);
    }
    Dp.exports = w4;
  });
  var Gp = d((RP, Up) => {
    var C4 = Li(),
      L4 = at(),
      N4 = Sp(),
      P4 = Fp();
    function x4(e, t) {
      if (e == null) return {};
      var n = C4(P4(e), function (r) {
        return [r];
      });
      return (
        (t = L4(t)),
        N4(e, n, function (r, a) {
          return t(r, a[0]);
        })
      );
    }
    Up.exports = x4;
  });
  var qp = d((wP, Vp) => {
    var M4 = at(),
      D4 = yp(),
      F4 = Gp();
    function U4(e, t) {
      return F4(e, D4(M4(t)));
    }
    Vp.exports = U4;
  });
  var Xp = d((CP, kp) => {
    var G4 = qn(),
      V4 = kn(),
      q4 = en(),
      k4 = me(),
      X4 = pt(),
      W4 = Dn(),
      B4 = Vn(),
      H4 = Gn(),
      z4 = "[object Map]",
      Y4 = "[object Set]",
      Q4 = Object.prototype,
      K4 = Q4.hasOwnProperty;
    function j4(e) {
      if (e == null) return !0;
      if (
        X4(e) &&
        (k4(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          W4(e) ||
          H4(e) ||
          q4(e))
      )
        return !e.length;
      var t = V4(e);
      if (t == z4 || t == Y4) return !e.size;
      if (B4(e)) return !G4(e).length;
      for (var n in e) if (K4.call(e, n)) return !1;
      return !0;
    }
    kp.exports = j4;
  });
  var Bp = d((LP, Wp) => {
    var $4 = ma(),
      Z4 = na(),
      J4 = at();
    function ew(e, t) {
      var n = {};
      return (
        (t = J4(t, 3)),
        Z4(e, function (r, a, i) {
          $4(n, a, t(r, a, i));
        }),
        n
      );
    }
    Wp.exports = ew;
  });
  var zp = d((NP, Hp) => {
    function tw(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Hp.exports = tw;
  });
  var Qp = d((PP, Yp) => {
    var nw = zn();
    function rw(e) {
      return typeof e == "function" ? e : nw;
    }
    Yp.exports = rw;
  });
  var jp = d((xP, Kp) => {
    var iw = zp(),
      aw = ra(),
      ow = Qp(),
      sw = me();
    function uw(e, t) {
      var n = sw(e) ? iw : aw;
      return n(e, ow(t));
    }
    Kp.exports = uw;
  });
  var Zp = d((MP, $p) => {
    var cw = ke(),
      lw = function () {
        return cw.Date.now();
      };
    $p.exports = lw;
  });
  var t0 = d((DP, e0) => {
    var dw = ze(),
      ba = Zp(),
      Jp = Yn(),
      fw = "Expected a function",
      pw = Math.max,
      gw = Math.min;
    function Ew(e, t, n) {
      var r,
        a,
        i,
        o,
        u,
        s,
        f = 0,
        T = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(fw);
      (t = Jp(t) || 0),
        dw(n) &&
          ((T = !!n.leading),
          (v = "maxWait" in n),
          (i = v ? pw(Jp(n.maxWait) || 0, t) : i),
          (g = "trailing" in n ? !!n.trailing : g));
      function I(M) {
        var H = r,
          z = a;
        return (r = a = void 0), (f = M), (o = e.apply(z, H)), o;
      }
      function b(M) {
        return (f = M), (u = setTimeout(m, t)), T ? I(M) : o;
      }
      function _(M) {
        var H = M - s,
          z = M - f,
          Q = t - H;
        return v ? gw(Q, i - z) : Q;
      }
      function S(M) {
        var H = M - s,
          z = M - f;
        return s === void 0 || H >= t || H < 0 || (v && z >= i);
      }
      function m() {
        var M = ba();
        if (S(M)) return C(M);
        u = setTimeout(m, _(M));
      }
      function C(M) {
        return (u = void 0), g && r ? I(M) : ((r = a = void 0), o);
      }
      function L() {
        u !== void 0 && clearTimeout(u), (f = 0), (r = s = a = u = void 0);
      }
      function x() {
        return u === void 0 ? o : C(ba());
      }
      function D() {
        var M = ba(),
          H = S(M);
        if (((r = arguments), (a = this), (s = M), H)) {
          if (u === void 0) return b(s);
          if (v) return clearTimeout(u), (u = setTimeout(m, t)), I(s);
        }
        return u === void 0 && (u = setTimeout(m, t)), o;
      }
      return (D.cancel = L), (D.flush = x), D;
    }
    e0.exports = Ew;
  });
  var r0 = d((FP, n0) => {
    var yw = t0(),
      Iw = ze(),
      vw = "Expected a function";
    function Tw(e, t, n) {
      var r = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(vw);
      return (
        Iw(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (a = "trailing" in n ? !!n.trailing : a)),
        yw(e, t, { leading: r, maxWait: t, trailing: a })
      );
    }
    n0.exports = Tw;
  });
  var ur = d((Oa) => {
    "use strict";
    Object.defineProperty(Oa, "__esModule", { value: !0 });
    function hw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hw(Oa, {
      actionListPlaybackChanged: function () {
        return oC;
      },
      animationFrameChanged: function () {
        return eC;
      },
      clearRequested: function () {
        return jw;
      },
      elementStateChanged: function () {
        return aC;
      },
      eventListenerAdded: function () {
        return $w;
      },
      eventStateChanged: function () {
        return Jw;
      },
      instanceAdded: function () {
        return nC;
      },
      instanceRemoved: function () {
        return iC;
      },
      instanceStarted: function () {
        return rC;
      },
      mediaQueriesDefined: function () {
        return uC;
      },
      parameterChanged: function () {
        return tC;
      },
      playbackRequested: function () {
        return Qw;
      },
      previewRequested: function () {
        return Yw;
      },
      rawDataImported: function () {
        return Ww;
      },
      sessionInitialized: function () {
        return Bw;
      },
      sessionStarted: function () {
        return Hw;
      },
      sessionStopped: function () {
        return zw;
      },
      stopRequested: function () {
        return Kw;
      },
      testFrameRendered: function () {
        return Zw;
      },
      viewportWidthChanged: function () {
        return sC;
      },
    });
    var i0 = Le(),
      _w = vt(),
      {
        IX2_RAW_DATA_IMPORTED: mw,
        IX2_SESSION_INITIALIZED: bw,
        IX2_SESSION_STARTED: Ow,
        IX2_SESSION_STOPPED: Aw,
        IX2_PREVIEW_REQUESTED: Sw,
        IX2_PLAYBACK_REQUESTED: Rw,
        IX2_STOP_REQUESTED: ww,
        IX2_CLEAR_REQUESTED: Cw,
        IX2_EVENT_LISTENER_ADDED: Lw,
        IX2_TEST_FRAME_RENDERED: Nw,
        IX2_EVENT_STATE_CHANGED: Pw,
        IX2_ANIMATION_FRAME_CHANGED: xw,
        IX2_PARAMETER_CHANGED: Mw,
        IX2_INSTANCE_ADDED: Dw,
        IX2_INSTANCE_STARTED: Fw,
        IX2_INSTANCE_REMOVED: Uw,
        IX2_ELEMENT_STATE_CHANGED: Gw,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Vw,
        IX2_VIEWPORT_WIDTH_CHANGED: qw,
        IX2_MEDIA_QUERIES_DEFINED: kw,
      } = i0.IX2EngineActionTypes,
      { reifyState: Xw } = _w.IX2VanillaUtils,
      Ww = (e) => ({ type: mw, payload: { ...Xw(e) } }),
      Bw = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: bw,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      Hw = () => ({ type: Ow }),
      zw = () => ({ type: Aw }),
      Yw = ({ rawData: e, defer: t }) => ({
        type: Sw,
        payload: { defer: t, rawData: e },
      }),
      Qw = ({
        actionTypeId: e = i0.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: a,
        immediate: i,
        testManual: o,
        verbose: u,
        rawData: s,
      }) => ({
        type: Rw,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: o,
          eventId: r,
          allowEvents: a,
          immediate: i,
          verbose: u,
          rawData: s,
        },
      }),
      Kw = (e) => ({ type: ww, payload: { actionListId: e } }),
      jw = () => ({ type: Cw }),
      $w = (e, t) => ({ type: Lw, payload: { target: e, listenerParams: t } }),
      Zw = (e = 1) => ({ type: Nw, payload: { step: e } }),
      Jw = (e, t) => ({ type: Pw, payload: { stateKey: e, newState: t } }),
      eC = (e, t) => ({ type: xw, payload: { now: e, parameters: t } }),
      tC = (e, t) => ({ type: Mw, payload: { key: e, value: t } }),
      nC = (e) => ({ type: Dw, payload: { ...e } }),
      rC = (e, t) => ({ type: Fw, payload: { instanceId: e, time: t } }),
      iC = (e) => ({ type: Uw, payload: { instanceId: e } }),
      aC = (e, t, n, r) => ({
        type: Gw,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      oC = ({ actionListId: e, isPlaying: t }) => ({
        type: Vw,
        payload: { actionListId: e, isPlaying: t },
      }),
      sC = ({ width: e, mediaQueries: t }) => ({
        type: qw,
        payload: { width: e, mediaQueries: t },
      }),
      uC = () => ({ type: kw });
  });
  var s0 = d((Sa) => {
    "use strict";
    Object.defineProperty(Sa, "__esModule", { value: !0 });
    function cC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    cC(Sa, {
      elementContains: function () {
        return _C;
      },
      getChildElements: function () {
        return bC;
      },
      getClosestElement: function () {
        return AC;
      },
      getProperty: function () {
        return yC;
      },
      getQuerySelector: function () {
        return vC;
      },
      getRefType: function () {
        return SC;
      },
      getSiblingElements: function () {
        return OC;
      },
      getStyle: function () {
        return EC;
      },
      getValidDocument: function () {
        return TC;
      },
      isSiblingNode: function () {
        return mC;
      },
      matchSelector: function () {
        return IC;
      },
      queryDocument: function () {
        return hC;
      },
      setStyle: function () {
        return gC;
      },
    });
    var lC = vt(),
      dC = Le(),
      { ELEMENT_MATCHES: Aa } = lC.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: a0,
        HTML_ELEMENT: fC,
        PLAIN_OBJECT: pC,
        WF_PAGE: o0,
      } = dC.IX2EngineConstants;
    function gC(e, t, n) {
      e.style[t] = n;
    }
    function EC(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function yC(e, t) {
      return e[t];
    }
    function IC(e) {
      return (t) => t[Aa](e);
    }
    function vC({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(a0) !== -1) {
          let r = e.split(a0),
            a = r[0];
          if (((n = r[1]), a !== document.documentElement.getAttribute(o0)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function TC(e) {
      return e == null || e === document.documentElement.getAttribute(o0)
        ? document
        : null;
    }
    function hC(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function _C(e, t) {
      return e.contains(t);
    }
    function mC(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function bC(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: a } = e[n],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function OC(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: a } = e; r < a; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var AC = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Aa] && n[Aa](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function SC(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? fC
          : pC
        : null;
    }
  });
  var Ra = d((VP, c0) => {
    var RC = ze(),
      u0 = Object.create,
      wC = (function () {
        function e() {}
        return function (t) {
          if (!RC(t)) return {};
          if (u0) return u0(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    c0.exports = wC;
  });
  var cr = d((qP, l0) => {
    function CC() {}
    l0.exports = CC;
  });
  var dr = d((kP, d0) => {
    var LC = Ra(),
      NC = cr();
    function lr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    lr.prototype = LC(NC.prototype);
    lr.prototype.constructor = lr;
    d0.exports = lr;
  });
  var E0 = d((XP, g0) => {
    var f0 = At(),
      PC = en(),
      xC = me(),
      p0 = f0 ? f0.isConcatSpreadable : void 0;
    function MC(e) {
      return xC(e) || PC(e) || !!(p0 && e && e[p0]);
    }
    g0.exports = MC;
  });
  var v0 = d((WP, I0) => {
    var DC = Mn(),
      FC = E0();
    function y0(e, t, n, r, a) {
      var i = -1,
        o = e.length;
      for (n || (n = FC), a || (a = []); ++i < o; ) {
        var u = e[i];
        t > 0 && n(u)
          ? t > 1
            ? y0(u, t - 1, n, r, a)
            : DC(a, u)
          : r || (a[a.length] = u);
      }
      return a;
    }
    I0.exports = y0;
  });
  var h0 = d((BP, T0) => {
    var UC = v0();
    function GC(e) {
      var t = e == null ? 0 : e.length;
      return t ? UC(e, 1) : [];
    }
    T0.exports = GC;
  });
  var m0 = d((HP, _0) => {
    function VC(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    _0.exports = VC;
  });
  var A0 = d((zP, O0) => {
    var qC = m0(),
      b0 = Math.max;
    function kC(e, t, n) {
      return (
        (t = b0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, a = -1, i = b0(r.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = r[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = r[a];
          return (u[t] = n(o)), qC(e, this, u);
        }
      );
    }
    O0.exports = kC;
  });
  var R0 = d((YP, S0) => {
    function XC(e) {
      return function () {
        return e;
      };
    }
    S0.exports = XC;
  });
  var L0 = d((QP, C0) => {
    var WC = R0(),
      w0 = _a(),
      BC = zn(),
      HC = w0
        ? function (e, t) {
            return w0(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: WC(t),
              writable: !0,
            });
          }
        : BC;
    C0.exports = HC;
  });
  var P0 = d((KP, N0) => {
    var zC = 800,
      YC = 16,
      QC = Date.now;
    function KC(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = QC(),
          a = YC - (r - n);
        if (((n = r), a > 0)) {
          if (++t >= zC) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    N0.exports = KC;
  });
  var M0 = d((jP, x0) => {
    var jC = L0(),
      $C = P0(),
      ZC = $C(jC);
    x0.exports = ZC;
  });
  var F0 = d(($P, D0) => {
    var JC = h0(),
      e8 = A0(),
      t8 = M0();
    function n8(e) {
      return t8(e8(e, void 0, JC), e + "");
    }
    D0.exports = n8;
  });
  var V0 = d((ZP, G0) => {
    var U0 = Ti(),
      r8 = U0 && new U0();
    G0.exports = r8;
  });
  var k0 = d((JP, q0) => {
    function i8() {}
    q0.exports = i8;
  });
  var wa = d((ex, W0) => {
    var X0 = V0(),
      a8 = k0(),
      o8 = X0
        ? function (e) {
            return X0.get(e);
          }
        : a8;
    W0.exports = o8;
  });
  var H0 = d((tx, B0) => {
    var s8 = {};
    B0.exports = s8;
  });
  var Ca = d((nx, Y0) => {
    var z0 = H0(),
      u8 = Object.prototype,
      c8 = u8.hasOwnProperty;
    function l8(e) {
      for (
        var t = e.name + "", n = z0[t], r = c8.call(z0, t) ? n.length : 0;
        r--;

      ) {
        var a = n[r],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    Y0.exports = l8;
  });
  var pr = d((rx, Q0) => {
    var d8 = Ra(),
      f8 = cr(),
      p8 = 4294967295;
    function fr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = p8),
        (this.__views__ = []);
    }
    fr.prototype = d8(f8.prototype);
    fr.prototype.constructor = fr;
    Q0.exports = fr;
  });
  var j0 = d((ix, K0) => {
    function g8(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    K0.exports = g8;
  });
  var Z0 = d((ax, $0) => {
    var E8 = pr(),
      y8 = dr(),
      I8 = j0();
    function v8(e) {
      if (e instanceof E8) return e.clone();
      var t = new y8(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = I8(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    $0.exports = v8;
  });
  var tg = d((ox, eg) => {
    var T8 = pr(),
      J0 = dr(),
      h8 = cr(),
      _8 = me(),
      m8 = Je(),
      b8 = Z0(),
      O8 = Object.prototype,
      A8 = O8.hasOwnProperty;
    function gr(e) {
      if (m8(e) && !_8(e) && !(e instanceof T8)) {
        if (e instanceof J0) return e;
        if (A8.call(e, "__wrapped__")) return b8(e);
      }
      return new J0(e);
    }
    gr.prototype = h8.prototype;
    gr.prototype.constructor = gr;
    eg.exports = gr;
  });
  var rg = d((sx, ng) => {
    var S8 = pr(),
      R8 = wa(),
      w8 = Ca(),
      C8 = tg();
    function L8(e) {
      var t = w8(e),
        n = C8[t];
      if (typeof n != "function" || !(t in S8.prototype)) return !1;
      if (e === n) return !0;
      var r = R8(n);
      return !!r && e === r[0];
    }
    ng.exports = L8;
  });
  var sg = d((ux, og) => {
    var ig = dr(),
      N8 = F0(),
      P8 = wa(),
      La = Ca(),
      x8 = me(),
      ag = rg(),
      M8 = "Expected a function",
      D8 = 8,
      F8 = 32,
      U8 = 128,
      G8 = 256;
    function V8(e) {
      return N8(function (t) {
        var n = t.length,
          r = n,
          a = ig.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(M8);
          if (a && !o && La(i) == "wrapper") var o = new ig([], !0);
        }
        for (r = o ? r : n; ++r < n; ) {
          i = t[r];
          var u = La(i),
            s = u == "wrapper" ? P8(i) : void 0;
          s &&
          ag(s[0]) &&
          s[1] == (U8 | D8 | F8 | G8) &&
          !s[4].length &&
          s[9] == 1
            ? (o = o[La(s[0])].apply(o, s[3]))
            : (o = i.length == 1 && ag(i) ? o[u]() : o.thru(i));
        }
        return function () {
          var f = arguments,
            T = f[0];
          if (o && f.length == 1 && x8(T)) return o.plant(T).value();
          for (var v = 0, g = n ? t[v].apply(this, f) : T; ++v < n; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    og.exports = V8;
  });
  var cg = d((cx, ug) => {
    var q8 = sg(),
      k8 = q8();
    ug.exports = k8;
  });
  var dg = d((lx, lg) => {
    function X8(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    lg.exports = X8;
  });
  var pg = d((dx, fg) => {
    var W8 = dg(),
      Na = Yn();
    function B8(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Na(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Na(t)), (t = t === t ? t : 0)),
        W8(Na(e), t, n)
      );
    }
    fg.exports = B8;
  });
  var Ng = d((Ua) => {
    "use strict";
    Object.defineProperty(Ua, "__esModule", { value: !0 });
    Object.defineProperty(Ua, "default", {
      enumerable: !0,
      get: function () {
        return S3;
      },
    });
    var H8 = Fa(cg()),
      z8 = Fa(Hn()),
      Y8 = Fa(pg()),
      Tt = Le(),
      Pa = Ga(),
      Er = ur(),
      Q8 = vt();
    function Fa(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: K8,
        MOUSE_SECOND_CLICK: j8,
        MOUSE_DOWN: $8,
        MOUSE_UP: Z8,
        MOUSE_OVER: J8,
        MOUSE_OUT: e3,
        DROPDOWN_CLOSE: t3,
        DROPDOWN_OPEN: n3,
        SLIDER_ACTIVE: r3,
        SLIDER_INACTIVE: i3,
        TAB_ACTIVE: a3,
        TAB_INACTIVE: o3,
        NAVBAR_CLOSE: s3,
        NAVBAR_OPEN: u3,
        MOUSE_MOVE: c3,
        PAGE_SCROLL_DOWN: mg,
        SCROLL_INTO_VIEW: bg,
        SCROLL_OUT_OF_VIEW: l3,
        PAGE_SCROLL_UP: d3,
        SCROLLING_IN_VIEW: f3,
        PAGE_FINISH: Og,
        ECOMMERCE_CART_CLOSE: p3,
        ECOMMERCE_CART_OPEN: g3,
        PAGE_START: Ag,
        PAGE_SCROLL: E3,
      } = Tt.EventTypeConsts,
      xa = "COMPONENT_ACTIVE",
      Sg = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: gg } = Tt.IX2EngineConstants,
      { getNamespacedParameterId: Eg } = Q8.IX2VanillaUtils,
      Rg = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      yn = Rg(({ element: e, nativeEvent: t }) => e === t.target),
      y3 = Rg(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      je = (0, H8.default)([yn, y3]),
      wg = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            a = r[t];
          if (a && !v3[a.eventTypeId]) return a;
        }
        return null;
      },
      I3 = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!wg(e, r);
      },
      Pe = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
        let { action: i, id: o } = t,
          { actionListId: u, autoStopEventId: s } = i.config,
          f = wg(e, s);
        return (
          f &&
            (0, Pa.stopActionGroup)({
              store: e,
              eventId: s,
              eventTarget: n,
              eventStateKey: s + gg + r.split(gg)[1],
              actionListId: (0, z8.default)(f, "action.config.actionListId"),
            }),
          (0, Pa.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: u,
          }),
          (0, Pa.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: u,
          }),
          a
        );
      },
      Xe = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      In = { handler: Xe(je, Pe) },
      Cg = { ...In, types: [xa, Sg].join(" ") },
      Ma = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      yg = "mouseover mouseout",
      Da = { types: Ma },
      v3 = { PAGE_START: Ag, PAGE_FINISH: Og },
      En = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, Y8.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      T3 = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      h3 = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: a } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(n === "mouseout" && i && o);
      },
      _3 = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: a } = En(),
          i = n.scrollOffsetValue,
          s = n.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return T3(t.getBoundingClientRect(), {
          left: 0,
          top: s,
          right: r,
          bottom: a - s,
        });
      },
      Lg = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          a = [xa, Sg].indexOf(r) !== -1 ? r === xa : n.isActive,
          i = { ...n, isActive: a };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      Ig = (e) => (t, n) => {
        let r = { elementHovered: h3(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      m3 = (e) => (t, n) => {
        let r = { ...n, elementVisible: _3(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      vg =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = En(),
            {
              event: { config: o, eventTypeId: u },
            } = t,
            { scrollOffsetValue: s, scrollOffsetUnit: f } = o,
            T = f === "PX",
            v = a - i,
            g = Number((r / v).toFixed(2));
          if (n && n.percentTop === g) return n;
          let I = (T ? s : (i * (s || 0)) / 100) / v,
            b,
            _,
            S = 0;
          n &&
            ((b = g > n.percentTop),
            (_ = n.scrollingDown !== b),
            (S = _ ? g : n.anchorTop));
          let m = u === mg ? g >= S + I : g <= S - I,
            C = {
              ...n,
              percentTop: g,
              inBounds: m,
              anchorTop: S,
              scrollingDown: b,
            };
          return (n && m && (_ || C.inBounds !== n.inBounds) && e(t, C)) || C;
        },
      b3 = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      O3 = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      A3 = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      Tg =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      yr = (e = !0) => ({
        ...Cg,
        handler: Xe(
          e ? je : yn,
          Lg((t, n) => (n.isActive ? In.handler(t, n) : n))
        ),
      }),
      Ir = (e = !0) => ({
        ...Cg,
        handler: Xe(
          e ? je : yn,
          Lg((t, n) => (n.isActive ? n : In.handler(t, n)))
        ),
      }),
      hg = {
        ...Da,
        handler: m3((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === bg) === n
            ? (Pe(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      _g = 0.05,
      S3 = {
        [r3]: yr(),
        [i3]: Ir(),
        [n3]: yr(),
        [t3]: Ir(),
        [u3]: yr(!1),
        [s3]: Ir(!1),
        [a3]: yr(),
        [o3]: Ir(),
        [g3]: { types: "ecommerce-cart-open", handler: Xe(je, Pe) },
        [p3]: { types: "ecommerce-cart-close", handler: Xe(je, Pe) },
        [K8]: {
          types: "click",
          handler: Xe(
            je,
            Tg((e, { clickCount: t }) => {
              I3(e) ? t === 1 && Pe(e) : Pe(e);
            })
          ),
        },
        [j8]: {
          types: "click",
          handler: Xe(
            je,
            Tg((e, { clickCount: t }) => {
              t === 2 && Pe(e);
            })
          ),
        },
        [$8]: { ...In, types: "mousedown" },
        [Z8]: { ...In, types: "mouseup" },
        [J8]: {
          types: yg,
          handler: Xe(
            je,
            Ig((e, t) => {
              t.elementHovered && Pe(e);
            })
          ),
        },
        [e3]: {
          types: yg,
          handler: Xe(
            je,
            Ig((e, t) => {
              t.elementHovered || Pe(e);
            })
          ),
        },
        [c3]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: u,
                continuousParameterGroupId: s,
                reverse: f,
                restingState: T = 0,
              } = n,
              {
                clientX: v = i.clientX,
                clientY: g = i.clientY,
                pageX: I = i.pageX,
                pageY: b = i.pageY,
              } = r,
              _ = u === "X_AXIS",
              S = r.type === "mouseout",
              m = T / 100,
              C = s,
              L = !1;
            switch (o) {
              case Tt.EventBasedOn.VIEWPORT: {
                m = _
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              }
              case Tt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: x,
                  scrollTop: D,
                  scrollWidth: M,
                  scrollHeight: H,
                } = En();
                m = _ ? Math.min(x + I, M) / M : Math.min(D + b, H) / H;
                break;
              }
              case Tt.EventBasedOn.ELEMENT:
              default: {
                C = Eg(a, s);
                let x = r.type.indexOf("mouse") === 0;
                if (x && je({ element: t, nativeEvent: r }) !== !0) break;
                let D = t.getBoundingClientRect(),
                  { left: M, top: H, width: z, height: Q } = D;
                if (!x && !b3({ left: v, top: g }, D)) break;
                (L = !0), (m = _ ? (v - M) / z : (g - H) / Q);
                break;
              }
            }
            return (
              S && (m > 1 - _g || m < _g) && (m = Math.round(m)),
              (o !== Tt.EventBasedOn.ELEMENT || L || L !== i.elementHovered) &&
                ((m = f ? 1 - m : m),
                e.dispatch((0, Er.parameterChanged)(C, m))),
              { elementHovered: L, clientX: v, clientY: g, pageX: I, pageY: b }
            );
          },
        },
        [E3]: {
          types: Ma,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = En(),
              u = a / (i - o);
            (u = r ? 1 - u : u), e.dispatch((0, Er.parameterChanged)(n, u));
          },
        },
        [f3]: {
          types: Ma,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: u,
                scrollHeight: s,
                clientHeight: f,
              } = En(),
              {
                basedOn: T,
                selectedAxis: v,
                continuousParameterGroupId: g,
                startsEntering: I,
                startsExiting: b,
                addEndOffset: _,
                addStartOffset: S,
                addOffsetValue: m = 0,
                endOffsetValue: C = 0,
              } = n,
              L = v === "X_AXIS";
            if (T === Tt.EventBasedOn.VIEWPORT) {
              let x = L ? i / u : o / s;
              return (
                x !== a.scrollPercent &&
                  t.dispatch((0, Er.parameterChanged)(g, x)),
                { scrollPercent: x }
              );
            } else {
              let x = Eg(r, g),
                D = e.getBoundingClientRect(),
                M = (S ? m : 0) / 100,
                H = (_ ? C : 0) / 100;
              (M = I ? M : 1 - M), (H = b ? H : 1 - H);
              let z = D.top + Math.min(D.height * M, f),
                Z = D.top + D.height * H - z,
                J = Math.min(f + Z, s),
                A = Math.min(Math.max(0, f - z), J) / J;
              return (
                A !== a.scrollPercent &&
                  t.dispatch((0, Er.parameterChanged)(x, A)),
                { scrollPercent: A }
              );
            }
          },
        },
        [bg]: hg,
        [l3]: hg,
        [mg]: {
          ...Da,
          handler: vg((e, t) => {
            t.scrollingDown && Pe(e);
          }),
        },
        [d3]: {
          ...Da,
          handler: vg((e, t) => {
            t.scrollingDown || Pe(e);
          }),
        },
        [Og]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Xe(yn, O3(Pe)),
        },
        [Ag]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Xe(yn, A3(Pe)),
        },
      };
  });
  var Ga = d((Ya) => {
    "use strict";
    Object.defineProperty(Ya, "__esModule", { value: !0 });
    function R3(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    R3(Ya, {
      observeRequests: function () {
        return tL;
      },
      startActionGroup: function () {
        return Ba;
      },
      startEngine: function () {
        return mr;
      },
      stopActionGroup: function () {
        return Wa;
      },
      stopAllActionGroups: function () {
        return kg;
      },
      stopEngine: function () {
        return br;
      },
    });
    var w3 = tt(Di()),
      ut = tt(Hn()),
      C3 = tt(gp()),
      L3 = tt(qp()),
      N3 = tt(Xp()),
      P3 = tt(Bp()),
      vn = tt(jp()),
      x3 = tt(r0()),
      Fe = Le(),
      Mg = vt(),
      Te = ur(),
      _e = D3(s0()),
      M3 = tt(Ng());
    function tt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Dg(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Dg = function (r) {
        return r ? n : t;
      })(e);
    }
    function D3(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Dg(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var F3 = Object.keys(Fe.QuickEffectIds),
      Va = (e) => F3.includes(e),
      {
        COLON_DELIMITER: qa,
        BOUNDARY_SELECTOR: vr,
        HTML_ELEMENT: Fg,
        RENDER_GENERAL: U3,
        W_MOD_IX: Pg,
      } = Fe.IX2EngineConstants,
      {
        getAffectedElements: Tr,
        getElementId: G3,
        getDestinationValues: ka,
        observeStore: ht,
        getInstanceId: V3,
        renderHTMLElement: q3,
        clearAllStyles: Ug,
        getMaxDurationItemIndex: k3,
        getComputedStyle: X3,
        getInstanceOrigin: W3,
        reduceListToGroup: B3,
        shouldNamespaceEventParameter: H3,
        getNamespacedParameterId: z3,
        shouldAllowMediaQuery: hr,
        cleanupHTMLElement: Y3,
        clearObjectCache: Q3,
        stringifyTarget: K3,
        mediaQueriesEqual: j3,
        shallowEqual: $3,
      } = Mg.IX2VanillaUtils,
      {
        isPluginType: _r,
        createPluginInstance: Xa,
        getPluginDuration: Z3,
      } = Mg.IX2VanillaPlugins,
      xg = navigator.userAgent,
      J3 = xg.match(/iPad/i) || xg.match(/iPhone/),
      eL = 12;
    function tL(e) {
      ht({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: iL }),
        ht({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: aL,
        }),
        ht({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: oL }),
        ht({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: sL });
    }
    function nL(e) {
      ht({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          br(e),
            Ug({ store: e, elementApi: _e }),
            mr({ store: e, allowEvents: !0 }),
            Gg();
        },
      });
    }
    function rL(e, t) {
      let n = ht({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function iL({ rawData: e, defer: t }, n) {
      let r = () => {
        mr({ store: n, rawData: e, allowEvents: !0 }), Gg();
      };
      t ? setTimeout(r, 0) : r();
    }
    function Gg() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function aL(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: u,
          testManual: s,
          verbose: f = !0,
        } = e,
        { rawData: T } = e;
      if (r && a && T && u) {
        let v = T.actionLists[r];
        v && (T = B3({ actionList: v, actionItemId: a, rawData: T }));
      }
      if (
        (mr({ store: t, rawData: T, allowEvents: o, testManual: s }),
        (r && n === Fe.ActionTypeConsts.GENERAL_START_ACTION) || Va(n))
      ) {
        Wa({ store: t, actionListId: r }),
          qg({ store: t, actionListId: r, eventId: i });
        let v = Ba({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: u,
          verbose: f,
        });
        f &&
          v &&
          t.dispatch(
            (0, Te.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !u,
            })
          );
      }
    }
    function oL({ actionListId: e }, t) {
      e ? Wa({ store: t, actionListId: e }) : kg({ store: t }), br(t);
    }
    function sL(e, t) {
      br(t), Ug({ store: t, elementApi: _e });
    }
    function mr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, Te.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, Te.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(vr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (pL(e),
            uL(),
            e.getState().ixSession.hasDefinedMediaQueries && nL(e)),
          e.dispatch((0, Te.sessionStarted)()),
          cL(e, r));
    }
    function uL() {
      let { documentElement: e } = document;
      e.className.indexOf(Pg) === -1 && (e.className += ` ${Pg}`);
    }
    function cL(e, t) {
      let n = (r) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, Te.animationFrameChanged)(r, i)),
          t ? rL(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function br(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(lL), Q3(), e.dispatch((0, Te.sessionStopped)());
      }
    }
    function lL({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function dL({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: u,
      restingValue: s,
    }) {
      let { ixData: f, ixSession: T } = e.getState(),
        { events: v } = f,
        g = v[r],
        { eventTypeId: I } = g,
        b = {},
        _ = {},
        S = [],
        { continuousActionGroups: m } = o,
        { id: C } = o;
      H3(I, a) && (C = z3(t, C));
      let L = T.hasBoundaryNodes && n ? _e.getClosestElement(n, vr) : null;
      m.forEach((x) => {
        let { keyframe: D, actionItems: M } = x;
        M.forEach((H) => {
          let { actionTypeId: z } = H,
            { target: Q } = H.config;
          if (!Q) return;
          let Z = Q.boundaryMode ? L : null,
            J = K3(Q) + qa + z;
          if (((_[J] = fL(_[J], D, H)), !b[J])) {
            b[J] = !0;
            let { config: G } = H;
            Tr({
              config: G,
              event: g,
              eventTarget: n,
              elementRoot: Z,
              elementApi: _e,
            }).forEach((A) => {
              S.push({ element: A, key: J });
            });
          }
        });
      }),
        S.forEach(({ element: x, key: D }) => {
          let M = _[D],
            H = (0, ut.default)(M, "[0].actionItems[0]", {}),
            { actionTypeId: z } = H,
            Z = (
              z === Fe.ActionTypeConsts.PLUGIN_RIVE
                ? (H.config?.target?.selectorGuids || []).length === 0
                : _r(z)
            )
              ? Xa(z)(x, H)
              : null,
            J = ka({ element: x, actionItem: H, elementApi: _e }, Z);
          Ha({
            store: e,
            element: x,
            eventId: r,
            actionListId: i,
            actionItem: H,
            destination: J,
            continuous: !0,
            parameterId: C,
            actionGroups: M,
            smoothing: u,
            restingValue: s,
            pluginInstance: Z,
          });
        });
    }
    function fL(e = [], t, n) {
      let r = [...e],
        a;
      return (
        r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[a].actionItems.push(n),
        r
      );
    }
    function pL(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      Vg(e),
        (0, vn.default)(n, (a, i) => {
          let o = M3.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          TL({ logic: o, store: e, events: a });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && EL(e);
    }
    var gL = ["resize", "orientationchange"];
    function EL(e) {
      let t = () => {
        Vg(e);
      };
      gL.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, Te.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function Vg(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: a } = n;
        e.dispatch((0, Te.viewportWidthChanged)({ width: r, mediaQueries: a }));
      }
    }
    var yL = (e, t) => (0, L3.default)((0, P3.default)(e, t), N3.default),
      IL = (e, t) => {
        (0, vn.default)(e, (n, r) => {
          n.forEach((a, i) => {
            let o = r + qa + i;
            t(a, r, o);
          });
        });
      },
      vL = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Tr({ config: t, elementApi: _e });
      };
    function TL({ logic: e, store: t, events: n }) {
      hL(n);
      let { types: r, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        u = yL(n, vL);
      if (!(0, C3.default)(u)) return;
      (0, vn.default)(u, (v, g) => {
        let I = n[g],
          { action: b, id: _, mediaQueries: S = i.mediaQueryKeys } = I,
          { actionListId: m } = b.config;
        j3(S, i.mediaQueryKeys) || t.dispatch((0, Te.mediaQueriesDefined)()),
          b.actionTypeId === Fe.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((L) => {
              let { continuousParameterGroupId: x } = L,
                D = (0, ut.default)(o, `${m}.continuousParameterGroups`, []),
                M = (0, w3.default)(D, ({ id: Q }) => Q === x),
                H = (L.smoothing || 0) / 100,
                z = (L.restingState || 0) / 100;
              M &&
                v.forEach((Q, Z) => {
                  let J = _ + qa + Z;
                  dL({
                    store: t,
                    eventStateKey: J,
                    eventTarget: Q,
                    eventId: _,
                    eventConfig: L,
                    actionListId: m,
                    parameterGroup: M,
                    smoothing: H,
                    restingValue: z,
                  });
                });
            }),
          (b.actionTypeId === Fe.ActionTypeConsts.GENERAL_START_ACTION ||
            Va(b.actionTypeId)) &&
            qg({ store: t, actionListId: m, eventId: _ });
      });
      let s = (v) => {
          let { ixSession: g } = t.getState();
          IL(u, (I, b, _) => {
            let S = n[b],
              m = g.eventState[_],
              { action: C, mediaQueries: L = i.mediaQueryKeys } = S;
            if (!hr(L, g.mediaQueryKey)) return;
            let x = (D = {}) => {
              let M = a(
                {
                  store: t,
                  element: I,
                  event: S,
                  eventConfig: D,
                  nativeEvent: v,
                  eventStateKey: _,
                },
                m
              );
              $3(M, m) || t.dispatch((0, Te.eventStateChanged)(_, M));
            };
            C.actionTypeId === Fe.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(x)
              : x();
          });
        },
        f = (0, x3.default)(s, eL),
        T = ({ target: v = document, types: g, throttle: I }) => {
          g.split(" ")
            .filter(Boolean)
            .forEach((b) => {
              let _ = I ? f : s;
              v.addEventListener(b, _),
                t.dispatch((0, Te.eventListenerAdded)(v, [b, _]));
            });
        };
      Array.isArray(r) ? r.forEach(T) : typeof r == "string" && T(e);
    }
    function hL(e) {
      if (!J3) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: a, target: i } = e[r],
          o = _e.getQuerySelector(i);
        t[o] ||
          ((a === Fe.EventTypeConsts.MOUSE_CLICK ||
            a === Fe.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (n += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function qg({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = r,
        u = o[n],
        s = i[t];
      if (s && s.useFirstGroupAsInitialState) {
        let f = (0, ut.default)(s, "actionItemGroups[0].actionItems", []),
          T = (0, ut.default)(u, "mediaQueries", r.mediaQueryKeys);
        if (!hr(T, a.mediaQueryKey)) return;
        f.forEach((v) => {
          let { config: g, actionTypeId: I } = v,
            b =
              g?.target?.useEventTarget === !0 && g?.target?.objectId == null
                ? { target: u.target, targets: u.targets }
                : g,
            _ = Tr({ config: b, event: u, elementApi: _e }),
            S = _r(I);
          _.forEach((m) => {
            let C = S ? Xa(I)(m, v) : null;
            Ha({
              destination: ka({ element: m, actionItem: v, elementApi: _e }, C),
              immediate: !0,
              store: e,
              element: m,
              eventId: n,
              actionItem: v,
              actionListId: t,
              pluginInstance: C,
            });
          });
        });
      }
    }
    function kg({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, vn.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: a } = n;
          za(n, e),
            a &&
              e.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Wa({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        u = o.hasBoundaryNodes && n ? _e.getClosestElement(n, vr) : null;
      (0, vn.default)(i, (s) => {
        let f = (0, ut.default)(s, "actionItem.config.target.boundaryMode"),
          T = r ? s.eventStateKey === r : !0;
        if (s.actionListId === a && s.eventId === t && T) {
          if (u && f && !_e.elementContains(u, s.element)) return;
          za(s, e),
            s.verbose &&
              e.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Ba({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: u,
    }) {
      let { ixData: s, ixSession: f } = e.getState(),
        { events: T } = s,
        v = T[t] || {},
        { mediaQueries: g = s.mediaQueryKeys } = v,
        I = (0, ut.default)(s, `actionLists.${a}`, {}),
        { actionItemGroups: b, useFirstGroupAsInitialState: _ } = I;
      if (!b || !b.length) return !1;
      i >= b.length && (0, ut.default)(v, "config.loop") && (i = 0),
        i === 0 && _ && i++;
      let m =
          (i === 0 || (i === 1 && _)) && Va(v.action?.actionTypeId)
            ? v.config.delay
            : void 0,
        C = (0, ut.default)(b, [i, "actionItems"], []);
      if (!C.length || !hr(g, f.mediaQueryKey)) return !1;
      let L = f.hasBoundaryNodes && n ? _e.getClosestElement(n, vr) : null,
        x = k3(C),
        D = !1;
      return (
        C.forEach((M, H) => {
          let { config: z, actionTypeId: Q } = M,
            Z = _r(Q),
            { target: J } = z;
          if (!J) return;
          let G = J.boundaryMode ? L : null;
          Tr({
            config: z,
            event: v,
            eventTarget: n,
            elementRoot: G,
            elementApi: _e,
          }).forEach((V, K) => {
            let Y = Z ? Xa(Q)(V, M) : null,
              re = Z ? Z3(Q)(V, M) : null;
            D = !0;
            let ie = x === H && K === 0,
              ce = X3({ element: V, actionItem: M }),
              Ee = ka({ element: V, actionItem: M, elementApi: _e }, Y);
            Ha({
              store: e,
              element: V,
              actionItem: M,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: a,
              groupIndex: i,
              isCarrier: ie,
              computedStyle: ce,
              destination: Ee,
              immediate: o,
              verbose: u,
              pluginInstance: Y,
              pluginDuration: re,
              instanceDelay: m,
            });
          });
        }),
        D
      );
    }
    function Ha(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: a,
          actionItem: i,
          immediate: o,
          pluginInstance: u,
          continuous: s,
          restingValue: f,
          eventId: T,
        } = r,
        v = !s,
        g = V3(),
        { ixElements: I, ixSession: b, ixData: _ } = t.getState(),
        S = G3(I, a),
        { refState: m } = I[S] || {},
        C = _e.getRefType(a),
        L = b.reducedMotion && Fe.ReducedMotionTypes[i.actionTypeId],
        x;
      if (L && s)
        switch (_.events[T]?.eventTypeId) {
          case Fe.EventTypeConsts.MOUSE_MOVE:
          case Fe.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            x = f;
            break;
          default:
            x = 0.5;
            break;
        }
      let D = W3(a, m, n, i, _e, u);
      if (
        (t.dispatch(
          (0, Te.instanceAdded)({
            instanceId: g,
            elementId: S,
            origin: D,
            refType: C,
            skipMotion: L,
            skipToValue: x,
            ...r,
          })
        ),
        Xg(document.body, "ix2-animation-started", g),
        o)
      ) {
        _L(t, g);
        return;
      }
      ht({ store: t, select: ({ ixInstances: M }) => M[g], onChange: Wg }),
        v && t.dispatch((0, Te.instanceStarted)(g, b.tick));
    }
    function za(e, t) {
      Xg(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[n] || {};
      o === Fg && Y3(i, r, _e), t.dispatch((0, Te.instanceRemoved)(e.id));
    }
    function Xg(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function _L(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, Te.instanceStarted)(t, 0)),
        e.dispatch((0, Te.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      Wg(r[t], e);
    }
    function Wg(e, t) {
      let {
          active: n,
          continuous: r,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: u,
          renderType: s,
          current: f,
          groupIndex: T,
          eventId: v,
          eventTarget: g,
          eventStateKey: I,
          actionListId: b,
          isCarrier: _,
          styleProp: S,
          verbose: m,
          pluginInstance: C,
        } = e,
        { ixData: L, ixSession: x } = t.getState(),
        { events: D } = L,
        M = D && D[v] ? D[v] : {},
        { mediaQueries: H = L.mediaQueryKeys } = M;
      if (hr(H, x.mediaQueryKey) && (r || n || a)) {
        if (f || (s === U3 && a)) {
          t.dispatch((0, Te.elementStateChanged)(i, u, f, o));
          let { ixElements: z } = t.getState(),
            { ref: Q, refType: Z, refState: J } = z[i] || {},
            G = J && J[u];
          (Z === Fg || _r(u)) && q3(Q, J, G, v, o, S, _e, s, C);
        }
        if (a) {
          if (_) {
            let z = Ba({
              store: t,
              eventId: v,
              eventTarget: g,
              eventStateKey: I,
              actionListId: b,
              groupIndex: T + 1,
              verbose: m,
            });
            m &&
              !z &&
              t.dispatch(
                (0, Te.actionListPlaybackChanged)({
                  actionListId: b,
                  isPlaying: !1,
                })
              );
          }
          za(e, t);
        }
      }
    }
  });
  var zg = d((Ka) => {
    "use strict";
    Object.defineProperty(Ka, "__esModule", { value: !0 });
    function mL(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    mL(Ka, {
      actions: function () {
        return AL;
      },
      destroy: function () {
        return Hg;
      },
      init: function () {
        return CL;
      },
      setEnv: function () {
        return wL;
      },
      store: function () {
        return Or;
      },
    });
    var bL = jr(),
      OL = SL(Kf()),
      Qa = Ga(),
      AL = RL(ur());
    function SL(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Bg(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Bg = function (r) {
        return r ? n : t;
      })(e);
    }
    function RL(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Bg(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Or = (0, bL.createStore)(OL.default);
    function wL(e) {
      e() && (0, Qa.observeRequests)(Or);
    }
    function CL(e) {
      Hg(), (0, Qa.startEngine)({ store: Or, rawData: e, allowEvents: !0 });
    }
    function Hg() {
      (0, Qa.stopEngine)(Or);
    }
  });
  var jg = d((Ex, Kg) => {
    "use strict";
    var Yg = Ce(),
      Qg = zg();
    Qg.setEnv(Yg.env);
    Yg.define(
      "ix2",
      (Kg.exports = function () {
        return Qg;
      })
    );
  });
  var Jg = d((yx, Zg) => {
    "use strict";
    var ja = window.jQuery,
      $e = {},
      Ar = [],
      $g = ".w-ix",
      Sr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ja(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ja(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + $g, OUTRO: "w-ix-outro" + $g };
    $e.init = function () {
      for (var e = Ar.length, t = 0; t < e; t++) {
        var n = Ar[t];
        n[0](0, n[1]);
      }
      (Ar = []), ja.extend($e.triggers, Sr);
    };
    $e.async = function () {
      for (var e in Sr) {
        var t = Sr[e];
        Sr.hasOwnProperty(e) &&
          ($e.triggers[e] = function (n, r) {
            Ar.push([t, r]);
          });
      }
    };
    $e.async();
    Zg.exports = $e;
  });
  var Tn = d((Ix, nE) => {
    "use strict";
    var $a = Jg();
    function eE(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var LL = window.jQuery,
      Rr = {},
      tE = ".w-ix",
      NL = {
        reset: function (e, t) {
          $a.triggers.reset(e, t);
        },
        intro: function (e, t) {
          $a.triggers.intro(e, t), eE(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          $a.triggers.outro(e, t), eE(t, "COMPONENT_INACTIVE");
        },
      };
    Rr.triggers = {};
    Rr.types = { INTRO: "w-ix-intro" + tE, OUTRO: "w-ix-outro" + tE };
    LL.extend(Rr.triggers, NL);
    nE.exports = Rr;
  });
  var iE = d((vx, rE) => {
    "use strict";
    var ct = Ce(),
      PL = Tn(),
      be = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    ct.define(
      "navbar",
      (rE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          a = e(window),
          i = e(document),
          o = t.debounce,
          u,
          s,
          f,
          T,
          v = ct.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          I = ".w-nav",
          b = "w--open",
          _ = "w--nav-dropdown-open",
          S = "w--nav-dropdown-toggle-open",
          m = "w--nav-dropdown-list-open",
          C = "w--nav-link-open",
          L = PL.triggers,
          x = e();
        (n.ready = n.design = n.preview = D),
          (n.destroy = function () {
            (x = e()), M(), s && s.length && s.each(Z);
          });
        function D() {
          (f = v && ct.env("design")),
            (T = ct.env("editor")),
            (u = e(document.body)),
            (s = i.find(I)),
            s.length && (s.each(Q), M(), H());
        }
        function M() {
          ct.resize.off(z);
        }
        function H() {
          ct.resize.on(z);
        }
        function z() {
          s.each(E);
        }
        function Q(p, q) {
          var j = e(q),
            B = e.data(q, I);
          B ||
            (B = e.data(q, I, {
              open: !1,
              el: j,
              config: {},
              selectedIdx: -1,
            })),
            (B.menu = j.find(".w-nav-menu")),
            (B.links = B.menu.find(".w-nav-link")),
            (B.dropdowns = B.menu.find(".w-dropdown")),
            (B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
            (B.dropdownList = B.menu.find(".w-dropdown-list")),
            (B.button = j.find(".w-nav-button")),
            (B.container = j.find(".w-container")),
            (B.overlayContainerId = "w-nav-overlay-" + p),
            (B.outside = y(B));
          var de = j.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null &&
              B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(I),
            B.button.off(I),
            B.menu.off(I),
            A(B),
            f
              ? (J(B), B.el.on("setting" + I, V(B)))
              : (G(B),
                B.button.on("click" + I, ce(B)),
                B.menu.on("click" + I, "a", Ee(B)),
                B.button.on("keydown" + I, K(B)),
                B.el.on("keydown" + I, Y(B))),
            E(p, q);
        }
        function Z(p, q) {
          var j = e.data(q, I);
          j && (J(j), e.removeData(q, I));
        }
        function J(p) {
          p.overlay && (W(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function G(p) {
          p.overlay ||
            ((p.overlay = e(g).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            W(p, !0));
        }
        function A(p) {
          var q = {},
            j = p.config || {},
            B = (q.animation = p.el.attr("data-animation") || "default");
          (q.animOver = /^over/.test(B)),
            (q.animDirect = /left$/.test(B) ? -1 : 1),
            j.animation !== B && p.open && t.defer(ie, p),
            (q.easing = p.el.attr("data-easing") || "ease"),
            (q.easing2 = p.el.attr("data-easing2") || "ease");
          var de = p.el.attr("data-duration");
          (q.duration = de != null ? Number(de) : 400),
            (q.docHeight = p.el.attr("data-doc-height")),
            (p.config = q);
        }
        function V(p) {
          return function (q, j) {
            j = j || {};
            var B = a.width();
            A(p),
              j.open === !0 && $(p, !0),
              j.open === !1 && W(p, !0),
              p.open &&
                t.defer(function () {
                  B !== a.width() && ie(p);
                });
          };
        }
        function K(p) {
          return function (q) {
            switch (q.keyCode) {
              case be.SPACE:
              case be.ENTER:
                return ce(p)(), q.preventDefault(), q.stopPropagation();
              case be.ESCAPE:
                return W(p), q.preventDefault(), q.stopPropagation();
              case be.ARROW_RIGHT:
              case be.ARROW_DOWN:
              case be.HOME:
              case be.END:
                return p.open
                  ? (q.keyCode === be.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    re(p),
                    q.preventDefault(),
                    q.stopPropagation())
                  : (q.preventDefault(), q.stopPropagation());
            }
          };
        }
        function Y(p) {
          return function (q) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                q.keyCode)
              ) {
                case be.HOME:
                case be.END:
                  return (
                    q.keyCode === be.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    re(p),
                    q.preventDefault(),
                    q.stopPropagation()
                  );
                case be.ESCAPE:
                  return (
                    W(p),
                    p.button.focus(),
                    q.preventDefault(),
                    q.stopPropagation()
                  );
                case be.ARROW_LEFT:
                case be.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    re(p),
                    q.preventDefault(),
                    q.stopPropagation()
                  );
                case be.ARROW_RIGHT:
                case be.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    re(p),
                    q.preventDefault(),
                    q.stopPropagation()
                  );
              }
          };
        }
        function re(p) {
          if (p.links[p.selectedIdx]) {
            var q = p.links[p.selectedIdx];
            q.focus(), Ee(q);
          }
        }
        function ie(p) {
          p.open && (W(p, !0), $(p, !0));
        }
        function ce(p) {
          return o(function () {
            p.open ? W(p) : $(p);
          });
        }
        function Ee(p) {
          return function (q) {
            var j = e(this),
              B = j.attr("href");
            if (!ct.validClick(q.currentTarget)) {
              q.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && p.open && W(p);
          };
        }
        function y(p) {
          return (
            p.outside && i.off("click" + I, p.outside),
            function (q) {
              var j = e(q.target);
              (T && j.closest(".w-editor-bem-EditorOverlay").length) || k(p, j);
            }
          );
        }
        var k = o(function (p, q) {
          if (p.open) {
            var j = q.closest(".w-nav-menu");
            p.menu.is(j) || W(p);
          }
        });
        function E(p, q) {
          var j = e.data(q, I),
            B = (j.collapsed = j.button.css("display") !== "none");
          if ((j.open && !B && !f && W(j, !0), j.container.length)) {
            var de = R(j);
            j.links.each(de), j.dropdowns.each(de);
          }
          j.open && ee(j);
        }
        var c = "max-width";
        function R(p) {
          var q = p.container.css(c);
          return (
            q === "none" && (q = ""),
            function (j, B) {
              (B = e(B)), B.css(c, ""), B.css(c) === "none" && B.css(c, q);
            }
          );
        }
        function w(p, q) {
          q.setAttribute("data-nav-menu-open", "");
        }
        function N(p, q) {
          q.removeAttribute("data-nav-menu-open");
        }
        function $(p, q) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(w),
            p.links.addClass(C),
            p.dropdowns.addClass(_),
            p.dropdownToggle.addClass(S),
            p.dropdownList.addClass(m),
            p.button.addClass(b);
          var j = p.config,
            B = j.animation;
          (B === "none" || !r.support.transform || j.duration <= 0) && (q = !0);
          var de = ee(p),
            Oe = p.menu.outerHeight(!0),
            xe = p.menu.outerWidth(!0),
            l = p.el.height(),
            h = p.el[0];
          if (
            (E(0, h),
            L.intro(0, h),
            ct.redraw.up(),
            f || i.on("click" + I, p.outside),
            q)
          ) {
            F();
            return;
          }
          var O = "transform " + j.duration + "ms " + j.easing;
          if (
            (p.overlay &&
              ((x = p.menu.prev()), p.overlay.show().append(p.menu)),
            j.animOver)
          ) {
            r(p.menu)
              .add(O)
              .set({ x: j.animDirect * xe, height: de })
              .start({ x: 0 })
              .then(F),
              p.overlay && p.overlay.width(xe);
            return;
          }
          var P = l + Oe;
          r(p.menu).add(O).set({ y: -P }).start({ y: 0 }).then(F);
          function F() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function ee(p) {
          var q = p.config,
            j = q.docHeight ? i.height() : u.height();
          return (
            q.animOver
              ? p.menu.height(j)
              : p.el.css("position") !== "fixed" && (j -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(j),
            j
          );
        }
        function W(p, q) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(b);
          var j = p.config;
          if (
            ((j.animation === "none" ||
              !r.support.transform ||
              j.duration <= 0) &&
              (q = !0),
            L.outro(0, p.el[0]),
            i.off("click" + I, p.outside),
            q)
          ) {
            r(p.menu).stop(), h();
            return;
          }
          var B = "transform " + j.duration + "ms " + j.easing2,
            de = p.menu.outerHeight(!0),
            Oe = p.menu.outerWidth(!0),
            xe = p.el.height();
          if (j.animOver) {
            r(p.menu)
              .add(B)
              .start({ x: Oe * j.animDirect })
              .then(h);
            return;
          }
          var l = xe + de;
          r(p.menu).add(B).start({ y: -l }).then(h);
          function h() {
            p.menu.height(""),
              r(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(N),
              p.links.removeClass(C),
              p.dropdowns.removeClass(_),
              p.dropdownToggle.removeClass(S),
              p.dropdownList.removeClass(m),
              p.overlay &&
                p.overlay.children().length &&
                (x.length ? p.menu.insertAfter(x) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  var sE = d((Tx, oE) => {
    "use strict";
    var _t = Ce(),
      xL = Tn(),
      We = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      aE = !0,
      ML = /^#[a-zA-Z0-9\-_]+$/;
    _t.define(
      "dropdown",
      (oE.exports = function (e, t) {
        var n = t.debounce,
          r = {},
          a = _t.env(),
          i = !1,
          o,
          u = _t.env.touch,
          s = ".w-dropdown",
          f = "w--open",
          T = xL.triggers,
          v = 900,
          g = "focusout" + s,
          I = "keydown" + s,
          b = "mouseenter" + s,
          _ = "mousemove" + s,
          S = "mouseleave" + s,
          m = (u ? "click" : "mouseup") + s,
          C = "w-close" + s,
          L = "setting" + s,
          x = e(document),
          D;
        (r.ready = M),
          (r.design = function () {
            i && A(), (i = !1), M();
          }),
          (r.preview = function () {
            (i = !0), M();
          });
        function M() {
          (o = a && _t.env("design")), (D = x.find(s)), D.each(H);
        }
        function H(c, R) {
          var w = e(R),
            N = e.data(R, s);
          N ||
            (N = e.data(R, s, {
              open: !1,
              el: w,
              config: {},
              selectedIdx: -1,
            })),
            (N.toggle = N.el.children(".w-dropdown-toggle")),
            (N.list = N.el.children(".w-dropdown-list")),
            (N.links = N.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (N.complete = Y(N)),
            (N.mouseLeave = ie(N)),
            (N.mouseUpOutside = K(N)),
            (N.mouseMoveOutside = ce(N)),
            z(N);
          var $ = N.toggle.attr("id"),
            ee = N.list.attr("id");
          $ || ($ = "w-dropdown-toggle-" + c),
            ee || (ee = "w-dropdown-list-" + c),
            N.toggle.attr("id", $),
            N.toggle.attr("aria-controls", ee),
            N.toggle.attr("aria-haspopup", "menu"),
            N.toggle.attr("aria-expanded", "false"),
            N.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            N.toggle.prop("tagName") !== "BUTTON" &&
              (N.toggle.attr("role", "button"),
              N.toggle.attr("tabindex") || N.toggle.attr("tabindex", "0")),
            N.list.attr("id", ee),
            N.list.attr("aria-labelledby", $),
            N.links.each(function (p, q) {
              q.hasAttribute("tabindex") || q.setAttribute("tabindex", "0"),
                ML.test(q.hash) && q.addEventListener("click", G.bind(null, N));
            }),
            N.el.off(s),
            N.toggle.off(s),
            N.nav && N.nav.off(s);
          var W = Z(N, aE);
          o && N.el.on(L, Q(N)),
            o ||
              (a && ((N.hovering = !1), G(N)),
              N.config.hover && N.toggle.on(b, re(N)),
              N.el.on(C, W),
              N.el.on(I, Ee(N)),
              N.el.on(g, E(N)),
              N.toggle.on(m, W),
              N.toggle.on(I, k(N)),
              (N.nav = N.el.closest(".w-nav")),
              N.nav.on(C, W));
        }
        function z(c) {
          var R = Number(c.el.css("z-index"));
          (c.manageZ = R === v || R === v + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !u,
              delay: c.el.attr("data-delay"),
            });
        }
        function Q(c) {
          return function (R, w) {
            (w = w || {}),
              z(c),
              w.open === !0 && J(c),
              w.open === !1 && G(c, { immediate: !0 });
          };
        }
        function Z(c, R) {
          return n(function (w) {
            if (c.open || (w && w.type === "w-close"))
              return G(c, { forceClose: R });
            J(c);
          });
        }
        function J(c) {
          if (!c.open) {
            V(c),
              (c.open = !0),
              c.list.addClass(f),
              c.toggle.addClass(f),
              c.toggle.attr("aria-expanded", "true"),
              T.intro(0, c.el[0]),
              _t.redraw.up(),
              c.manageZ && c.el.css("z-index", v + 1);
            var R = _t.env("editor");
            o || x.on(m, c.mouseUpOutside),
              c.hovering && !R && c.el.on(S, c.mouseLeave),
              c.hovering && R && x.on(_, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function G(c, { immediate: R, forceClose: w } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !w)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var N = c.config;
            if (
              (T.outro(0, c.el[0]),
              x.off(m, c.mouseUpOutside),
              x.off(_, c.mouseMoveOutside),
              c.el.off(S, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !N.delay || R)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, N.delay);
          }
        }
        function A() {
          x.find(s).each(function (c, R) {
            e(R).triggerHandler(C);
          });
        }
        function V(c) {
          var R = c.el[0];
          D.each(function (w, N) {
            var $ = e(N);
            $.is(R) || $.has(R).length || $.triggerHandler(C);
          });
        }
        function K(c) {
          return (
            c.mouseUpOutside && x.off(m, c.mouseUpOutside),
            n(function (R) {
              if (c.open) {
                var w = e(R.target);
                if (!w.closest(".w-dropdown-toggle").length) {
                  var N = e.inArray(c.el[0], w.parents(s)) === -1,
                    $ = _t.env("editor");
                  if (N) {
                    if ($) {
                      var ee =
                          w.parents().length === 1 &&
                          w.parents("svg").length === 1,
                        W = w.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ee || W) return;
                    }
                    G(c);
                  }
                }
              }
            })
          );
        }
        function Y(c) {
          return function () {
            c.list.removeClass(f),
              c.toggle.removeClass(f),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !0), J(c);
          };
        }
        function ie(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || G(c);
          };
        }
        function ce(c) {
          return n(function (R) {
            if (c.open) {
              var w = e(R.target),
                N = e.inArray(c.el[0], w.parents(s)) === -1;
              if (N) {
                var $ = w.parents(".w-editor-bem-EditorHoverControls").length,
                  ee = w.parents(".w-editor-bem-RTToolbar").length,
                  W = e(".w-editor-bem-EditorOverlay"),
                  p =
                    W.find(".w-editor-edit-outline").length ||
                    W.find(".w-editor-bem-RTToolbar").length;
                if ($ || ee || p) return;
                (c.hovering = !1), G(c);
              }
            }
          });
        }
        function Ee(c) {
          return function (R) {
            if (!(o || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                R.keyCode)
              ) {
                case We.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), y(c), R.preventDefault())
                    : void 0;
                case We.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      y(c),
                      R.preventDefault())
                    : void 0;
                case We.ESCAPE:
                  return G(c), c.toggle.focus(), R.stopPropagation();
                case We.ARROW_RIGHT:
                case We.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    y(c),
                    R.preventDefault()
                  );
                case We.ARROW_LEFT:
                case We.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    y(c),
                    R.preventDefault()
                  );
              }
          };
        }
        function y(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function k(c) {
          var R = Z(c, aE);
          return function (w) {
            if (!o) {
              if (!c.open)
                switch (w.keyCode) {
                  case We.ARROW_UP:
                  case We.ARROW_DOWN:
                    return w.stopPropagation();
                }
              switch (w.keyCode) {
                case We.SPACE:
                case We.ENTER:
                  return R(), w.stopPropagation(), w.preventDefault();
              }
            }
          };
        }
        function E(c) {
          return n(function (R) {
            var { relatedTarget: w, target: N } = R,
              $ = c.el[0],
              ee = $.contains(w) || $.contains(N);
            return ee || G(c), R.stopPropagation();
          });
        }
        return r;
      })
    );
  });
  var lE = d((hx, cE) => {
    "use strict";
    var lt = Ce(),
      DL = Tn(),
      Ze = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      uE =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    lt.define(
      "slider",
      (cE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          a = e(document),
          i,
          o,
          u = lt.env(),
          s = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          T =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = DL.triggers,
          I,
          b = !1;
        (n.ready = function () {
          (o = lt.env("design")), _();
        }),
          (n.design = function () {
            (o = !0), setTimeout(_, 1e3);
          }),
          (n.preview = function () {
            (o = !1), _();
          }),
          (n.redraw = function () {
            (b = !0), _(), (b = !1);
          }),
          (n.destroy = S);
        function _() {
          (i = a.find(s)), i.length && (i.each(L), !I && (S(), m()));
        }
        function S() {
          lt.resize.off(C), lt.redraw.off(n.redraw);
        }
        function m() {
          lt.resize.on(C), lt.redraw.on(n.redraw);
        }
        function C() {
          i.filter(":visible").each(Y);
        }
        function L(y, k) {
          var E = e(k),
            c = e.data(k, s);
          c ||
            (c = e.data(k, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: E,
              config: {},
            })),
            (c.mask = E.children(".w-slider-mask")),
            (c.left = E.children(".w-slider-arrow-left")),
            (c.right = E.children(".w-slider-arrow-right")),
            (c.nav = E.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(g.reset),
            b && (c.maskWidth = 0),
            E.attr("role") === void 0 && E.attr("role", "region"),
            E.attr("aria-label") === void 0 && E.attr("aria-label", "carousel");
          var R = c.mask.attr("id");
          if (
            (R || ((R = "w-slider-mask-" + y), c.mask.attr("id", R)),
            !o && !c.ariaLiveLabel && (c.ariaLiveLabel = e(T).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", R),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", R),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !r.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (I = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            x(c),
            o
              ? (c.el.on("setting" + s, A(c)), G(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, A(c)),
                c.left.on("click" + s, z(c)),
                c.right.on("click" + s, Q(c)),
                c.left.on("keydown" + s, H(c, z)),
                c.right.on("keydown" + s, H(c, Q)),
                c.nav.on("keydown" + s, "> div", A(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), J(c)),
                c.el.on("mouseenter" + s, M(c, !0, "mouse")),
                c.el.on("focusin" + s, M(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, M(c, !1, "mouse")),
                c.el.on("focusout" + s, M(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", A(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var w = E.filter(":hidden");
          w.addClass(v);
          var N = E.parents(":hidden");
          N.addClass(v), b || Y(y, k), w.removeClass(v), N.removeClass(v);
        }
        function x(y) {
          var k = {};
          (k.crossOver = 0),
            (k.animation = y.el.attr("data-animation") || "slide"),
            k.animation === "outin" &&
              ((k.animation = "cross"), (k.crossOver = 0.5)),
            (k.easing = y.el.attr("data-easing") || "ease");
          var E = y.el.attr("data-duration");
          if (
            ((k.duration = E != null ? parseInt(E, 10) : 500),
            D(y.el.attr("data-infinite")) && (k.infinite = !0),
            D(y.el.attr("data-disable-swipe")) && (k.disableSwipe = !0),
            D(y.el.attr("data-hide-arrows"))
              ? (k.hideArrows = !0)
              : y.config.hideArrows && (y.left.show(), y.right.show()),
            D(y.el.attr("data-autoplay")))
          ) {
            (k.autoplay = !0),
              (k.delay = parseInt(y.el.attr("data-delay"), 10) || 2e3),
              (k.timerMax = parseInt(y.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            o ||
              y.el.off(c).one(c, function () {
                G(y);
              });
          }
          var R = y.right.width();
          (k.edge = R ? R + 40 : 100), (y.config = k);
        }
        function D(y) {
          return y === "1" || y === "true";
        }
        function M(y, k, E) {
          return function (c) {
            if (k) y.hasFocus[E] = k;
            else if (
              e.contains(y.el.get(0), c.relatedTarget) ||
              ((y.hasFocus[E] = k),
              (y.hasFocus.mouse && E === "keyboard") ||
                (y.hasFocus.keyboard && E === "mouse"))
            )
              return;
            k
              ? (y.ariaLiveLabel.attr("aria-live", "polite"),
                y.hasTimer && G(y))
              : (y.ariaLiveLabel.attr("aria-live", "off"), y.hasTimer && J(y));
          };
        }
        function H(y, k) {
          return function (E) {
            switch (E.keyCode) {
              case Ze.SPACE:
              case Ze.ENTER:
                return k(y)(), E.preventDefault(), E.stopPropagation();
            }
          };
        }
        function z(y) {
          return function () {
            K(y, { index: y.index - 1, vector: -1 });
          };
        }
        function Q(y) {
          return function () {
            K(y, { index: y.index + 1, vector: 1 });
          };
        }
        function Z(y, k) {
          var E = null;
          k === y.slides.length && (_(), re(y)),
            t.each(y.anchors, function (c, R) {
              e(c.els).each(function (w, N) {
                e(N).index() === k && (E = R);
              });
            }),
            E != null && K(y, { index: E, immediate: !0 });
        }
        function J(y) {
          G(y);
          var k = y.config,
            E = k.timerMax;
          (E && y.timerCount++ > E) ||
            (y.timerId = window.setTimeout(function () {
              y.timerId == null || o || (Q(y)(), J(y));
            }, k.delay));
        }
        function G(y) {
          window.clearTimeout(y.timerId), (y.timerId = null);
        }
        function A(y) {
          return function (k, E) {
            E = E || {};
            var c = y.config;
            if (o && k.type === "setting") {
              if (E.select === "prev") return z(y)();
              if (E.select === "next") return Q(y)();
              if ((x(y), re(y), E.select == null)) return;
              Z(y, E.select);
              return;
            }
            if (k.type === "swipe")
              return c.disableSwipe || lt.env("editor")
                ? void 0
                : E.direction === "left"
                ? Q(y)()
                : E.direction === "right"
                ? z(y)()
                : void 0;
            if (y.nav.has(k.target).length) {
              var R = e(k.target).index();
              if (
                (k.type === "click" && K(y, { index: R }), k.type === "keydown")
              )
                switch (k.keyCode) {
                  case Ze.ENTER:
                  case Ze.SPACE: {
                    K(y, { index: R }), k.preventDefault();
                    break;
                  }
                  case Ze.ARROW_LEFT:
                  case Ze.ARROW_UP: {
                    V(y.nav, Math.max(R - 1, 0)), k.preventDefault();
                    break;
                  }
                  case Ze.ARROW_RIGHT:
                  case Ze.ARROW_DOWN: {
                    V(y.nav, Math.min(R + 1, y.pages)), k.preventDefault();
                    break;
                  }
                  case Ze.HOME: {
                    V(y.nav, 0), k.preventDefault();
                    break;
                  }
                  case Ze.END: {
                    V(y.nav, y.pages), k.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function V(y, k) {
          var E = y.children().eq(k).focus();
          y.children().not(E);
        }
        function K(y, k) {
          k = k || {};
          var E = y.config,
            c = y.anchors;
          y.previous = y.index;
          var R = k.index,
            w = {};
          R < 0
            ? ((R = c.length - 1),
              E.infinite &&
                ((w.x = -y.endX), (w.from = 0), (w.to = c[0].width)))
            : R >= c.length &&
              ((R = 0),
              E.infinite &&
                ((w.x = c[c.length - 1].width),
                (w.from = -c[c.length - 1].x),
                (w.to = w.from - w.x))),
            (y.index = R);
          var N = y.nav
            .children()
            .eq(R)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          y.nav
            .children()
            .not(N)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            E.hideArrows &&
              (y.index === c.length - 1 ? y.right.hide() : y.right.show(),
              y.index === 0 ? y.left.hide() : y.left.show());
          var $ = y.offsetX || 0,
            ee = (y.offsetX = -c[y.index].x),
            W = { x: ee, opacity: 1, visibility: "" },
            p = e(c[y.index].els),
            q = e(c[y.previous] && c[y.previous].els),
            j = y.slides.not(p),
            B = E.animation,
            de = E.easing,
            Oe = Math.round(E.duration),
            xe = k.vector || (y.index > y.previous ? 1 : -1),
            l = "opacity " + Oe + "ms " + de,
            h = "transform " + Oe + "ms " + de;
          if (
            (p.find(uE).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            j.find(uE).attr("tabindex", "-1"),
            j.attr("aria-hidden", "true"),
            j.find("*").attr("aria-hidden", "true"),
            o || (p.each(g.intro), j.each(g.outro)),
            k.immediate && !b)
          ) {
            r(p).set(W), F();
            return;
          }
          if (y.index === y.previous) return;
          if (
            (o || y.ariaLiveLabel.text(`Slide ${R + 1} of ${c.length}.`),
            B === "cross")
          ) {
            var O = Math.round(Oe - Oe * E.crossOver),
              P = Math.round(Oe - O);
            (l = "opacity " + O + "ms " + de),
              r(q).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              r(p)
                .set({ visibility: "", x: ee, opacity: 0, zIndex: y.depth++ })
                .add(l)
                .wait(P)
                .then({ opacity: 1 })
                .then(F);
            return;
          }
          if (B === "fade") {
            r(q).set({ visibility: "" }).stop(),
              r(p)
                .set({ visibility: "", x: ee, opacity: 0, zIndex: y.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(F);
            return;
          }
          if (B === "over") {
            (W = { x: y.endX }),
              r(q).set({ visibility: "" }).stop(),
              r(p)
                .set({
                  visibility: "",
                  zIndex: y.depth++,
                  x: ee + c[y.index].width * xe,
                })
                .add(h)
                .start({ x: ee })
                .then(F);
            return;
          }
          E.infinite && w.x
            ? (r(y.slides.not(q))
                .set({ visibility: "", x: w.x })
                .add(h)
                .start({ x: ee }),
              r(q).set({ visibility: "", x: w.from }).add(h).start({ x: w.to }),
              (y.shifted = q))
            : (E.infinite &&
                y.shifted &&
                (r(y.shifted).set({ visibility: "", x: $ }),
                (y.shifted = null)),
              r(y.slides).set({ visibility: "" }).add(h).start({ x: ee }));
          function F() {
            (p = e(c[y.index].els)),
              (j = y.slides.not(p)),
              B !== "slide" && (W.visibility = "hidden"),
              r(j).set(W);
          }
        }
        function Y(y, k) {
          var E = e.data(k, s);
          if (E) {
            if (ce(E)) return re(E);
            o && Ee(E) && re(E);
          }
        }
        function re(y) {
          var k = 1,
            E = 0,
            c = 0,
            R = 0,
            w = y.maskWidth,
            N = w - y.config.edge;
          N < 0 && (N = 0),
            (y.anchors = [{ els: [], x: 0, width: 0 }]),
            y.slides.each(function (ee, W) {
              c - E > N &&
                (k++,
                (E += w),
                (y.anchors[k - 1] = { els: [], x: c, width: 0 })),
                (R = e(W).outerWidth(!0)),
                (c += R),
                (y.anchors[k - 1].width += R),
                y.anchors[k - 1].els.push(W);
              var p = ee + 1 + " of " + y.slides.length;
              e(W).attr("aria-label", p), e(W).attr("role", "group");
            }),
            (y.endX = c),
            o && (y.pages = null),
            y.nav.length && y.pages !== k && ((y.pages = k), ie(y));
          var $ = y.index;
          $ >= k && ($ = k - 1), K(y, { immediate: !0, index: $ });
        }
        function ie(y) {
          var k = [],
            E,
            c = y.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var R = 0, w = y.pages; R < w; R++)
            (E = e(f)),
              E.attr("aria-label", "Show slide " + (R + 1) + " of " + w)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              y.nav.hasClass("w-num") && E.text(R + 1),
              c != null && E.css({ "margin-left": c, "margin-right": c }),
              k.push(E);
          y.nav.empty().append(k);
        }
        function ce(y) {
          var k = y.mask.width();
          return y.maskWidth !== k ? ((y.maskWidth = k), !0) : !1;
        }
        function Ee(y) {
          var k = 0;
          return (
            y.slides.each(function (E, c) {
              k += e(c).outerWidth(!0);
            }),
            y.slidesWidth !== k ? ((y.slidesWidth = k), !0) : !1
          );
        }
        return n;
      })
    );
  });
  var dE = d((Za) => {
    "use strict";
    Object.defineProperty(Za, "__esModule", { value: !0 });
    Object.defineProperty(Za, "default", {
      enumerable: !0,
      get: function () {
        return FL;
      },
    });
    function FL(e, t, n, r, a, i, o, u, s, f, T, v, g) {
      return function (I) {
        e(I);
        var b = I.form,
          _ = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            domain: v("html").attr("data-wf-domain") || null,
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: r(),
          };
        let S = b.attr("data-wf-flow");
        S && (_.wfFlow = S), a(I);
        var m = i(b, _.fields);
        if (m) return o(m);
        if (((_.fileUploads = u(b)), s(I), !f)) {
          T(I);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (C) {
            C && C.code === 200 && (I.success = !0), T(I);
          })
          .fail(function () {
            T(I);
          });
      };
    }
  });
  var pE = d((mx, fE) => {
    "use strict";
    var wr = Ce(),
      UL = (e, t, n, r) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (i) {
              n(i);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    wr.define(
      "forms",
      (fE.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          a = e(document),
          i,
          o = window.location,
          u = window.XDomainRequest && !window.atob,
          s = ".w-form",
          f,
          T = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          g = window.alert,
          I = wr.env(),
          b,
          _,
          S;
        let m = a.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          C;
        var L = /list-manage[1-9]?.com/i,
          x = t.debounce(function () {
            g(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              M(), D(), !I && !b && z();
            };
        function D() {
          (f = e("html").attr("data-wf-site")),
            (_ = "https://webflow.com/api/v1/form/" + f),
            u &&
              _.indexOf("https://webflow.com") >= 0 &&
              (_ = _.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${_}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(H);
        }
        function M() {
          m &&
            ((C = document.createElement("script")),
            (C.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(C),
            (C.onload = () => {
              a.trigger(n);
            }));
        }
        function H(E, c) {
          var R = e(c),
            w = e.data(c, s);
          w || (w = e.data(c, s, { form: R })), Q(w);
          var N = R.closest("div.w-form");
          (w.done = N.find("> .w-form-done")),
            (w.fail = N.find("> .w-form-fail")),
            (w.fileUploads = N.find(".w-file-upload")),
            w.fileUploads.each(function (W) {
              Ee(W, w);
            }),
            m &&
              ((w.wait = !1),
              Z(w),
              a.on(typeof turnstile < "u" ? "ready" : n, function () {
                UL(
                  m,
                  c,
                  (W) => {
                    (w.turnstileToken = W), Q(w);
                  },
                  () => {
                    Z(w);
                  }
                );
              }));
          var $ =
            w.form.attr("aria-label") || w.form.attr("data-name") || "Form";
          w.done.attr("aria-label") || w.form.attr("aria-label", $),
            w.done.attr("tabindex", "-1"),
            w.done.attr("role", "region"),
            w.done.attr("aria-label") ||
              w.done.attr("aria-label", $ + " success"),
            w.fail.attr("tabindex", "-1"),
            w.fail.attr("role", "region"),
            w.fail.attr("aria-label") ||
              w.fail.attr("aria-label", $ + " failure");
          var ee = (w.action = R.attr("action"));
          if (
            ((w.handler = null),
            (w.redirect = R.attr("data-redirect")),
            L.test(ee))
          ) {
            w.handler = re;
            return;
          }
          if (!ee) {
            if (f) {
              w.handler = (() => {
                let W = dE().default;
                return W(Q, o, wr, V, ce, J, g, G, Z, f, ie, e, _);
              })();
              return;
            }
            x();
          }
        }
        function z() {
          (b = !0),
            a.on("submit", s + " form", function (W) {
              var p = e.data(this, s);
              p.handler && ((p.evt = W), p.handler(p));
            });
          let E = ".w-checkbox-input",
            c = ".w-radio-input",
            R = "w--redirected-checked",
            w = "w--redirected-focus",
            N = "w--redirected-focus-visible",
            $ = ":focus-visible, [data-wf-focus-visible]",
            ee = [
              ["checkbox", E],
              ["radio", c],
            ];
          a.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + E + ")",
            (W) => {
              e(W.target).siblings(E).toggleClass(R);
            }
          ),
            a.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${E})`).map((q, j) =>
                e(j).siblings(c).removeClass(R)
              );
              let p = e(W.target);
              p.hasClass("w-radio-input") || p.siblings(c).addClass(R);
            }),
            ee.forEach(([W, p]) => {
              a.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + p + ")",
                (q) => {
                  e(q.target).siblings(p).addClass(w),
                    e(q.target).filter($).siblings(p).addClass(N);
                }
              ),
                a.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + p + ")",
                  (q) => {
                    e(q.target).siblings(p).removeClass(`${w} ${N}`);
                  }
                );
            });
        }
        function Q(E) {
          var c = (E.btn = E.form.find(':input[type="submit"]'));
          (E.wait = E.btn.attr("data-wait") || null),
            (E.success = !1),
            c.prop("disabled", !!(m && !E.turnstileToken)),
            E.label && c.val(E.label);
        }
        function Z(E) {
          var c = E.btn,
            R = E.wait;
          c.prop("disabled", !0), R && ((E.label = c.val()), c.val(R));
        }
        function J(E, c) {
          var R = null;
          return (
            (c = c || {}),
            E.find(':input:not([type="submit"]):not([type="file"])').each(
              function (w, N) {
                var $ = e(N),
                  ee = $.attr("type"),
                  W =
                    $.attr("data-name") || $.attr("name") || "Field " + (w + 1);
                W = encodeURIComponent(W);
                var p = $.val();
                if (ee === "checkbox") p = $.is(":checked");
                else if (ee === "radio") {
                  if (c[W] === null || typeof c[W] == "string") return;
                  p =
                    E.find(
                      'input[name="' + $.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof p == "string" && (p = e.trim(p)),
                  (c[W] = p),
                  (R = R || K($, ee, W, p));
              }
            ),
            R
          );
        }
        function G(E) {
          var c = {};
          return (
            E.find(':input[type="file"]').each(function (R, w) {
              var N = e(w),
                $ = N.attr("data-name") || N.attr("name") || "File " + (R + 1),
                ee = N.attr("data-value");
              typeof ee == "string" && (ee = e.trim(ee)), (c[$] = ee);
            }),
            c
          );
        }
        let A = { _mkto_trk: "marketo" };
        function V() {
          return document.cookie.split("; ").reduce(function (c, R) {
            let w = R.split("="),
              N = w[0];
            if (N in A) {
              let $ = A[N],
                ee = w.slice(1).join("=");
              c[$] = ee;
            }
            return c;
          }, {});
        }
        function K(E, c, R, w) {
          var N = null;
          return (
            c === "password"
              ? (N = "Passwords cannot be submitted.")
              : E.attr("required")
              ? w
                ? T.test(E.attr("type")) &&
                  (v.test(w) ||
                    (N = "Please enter a valid email address for: " + R))
                : (N = "Please fill out the required field: " + R)
              : R === "g-recaptcha-response" &&
                !w &&
                (N = "Please confirm you\u2019re not a robot."),
            N
          );
        }
        function Y(E) {
          ce(E), ie(E);
        }
        function re(E) {
          Q(E);
          var c = E.form,
            R = {};
          if (/^https/.test(o.href) && !/^https/.test(E.action)) {
            c.attr("method", "post");
            return;
          }
          ce(E);
          var w = J(c, R);
          if (w) return g(w);
          Z(E);
          var N;
          t.each(R, function (p, q) {
            T.test(q) && (R.EMAIL = p),
              /^((full[ _-]?)?name)$/i.test(q) && (N = p),
              /^(first[ _-]?name)$/i.test(q) && (R.FNAME = p),
              /^(last[ _-]?name)$/i.test(q) && (R.LNAME = p);
          }),
            N &&
              !R.FNAME &&
              ((N = N.split(" ")),
              (R.FNAME = N[0]),
              (R.LNAME = R.LNAME || N[1]));
          var $ = E.action.replace("/post?", "/post-json?") + "&c=?",
            ee = $.indexOf("u=") + 2;
          ee = $.substring(ee, $.indexOf("&", ee));
          var W = $.indexOf("id=") + 3;
          (W = $.substring(W, $.indexOf("&", W))),
            (R["b_" + ee + "_" + W] = ""),
            e
              .ajax({ url: $, data: R, dataType: "jsonp" })
              .done(function (p) {
                (E.success = p.result === "success" || /already/.test(p.msg)),
                  E.success || console.info("MailChimp error: " + p.msg),
                  ie(E);
              })
              .fail(function () {
                ie(E);
              });
        }
        function ie(E) {
          var c = E.form,
            R = E.redirect,
            w = E.success;
          if (w && R) {
            wr.location(R);
            return;
          }
          E.done.toggle(w),
            E.fail.toggle(!w),
            w ? E.done.focus() : E.fail.focus(),
            c.toggle(!w),
            Q(E);
        }
        function ce(E) {
          E.evt && E.evt.preventDefault(), (E.evt = null);
        }
        function Ee(E, c) {
          if (!c.fileUploads || !c.fileUploads[E]) return;
          var R,
            w = e(c.fileUploads[E]),
            N = w.find("> .w-file-upload-default"),
            $ = w.find("> .w-file-upload-uploading"),
            ee = w.find("> .w-file-upload-success"),
            W = w.find("> .w-file-upload-error"),
            p = N.find(".w-file-upload-input"),
            q = N.find(".w-file-upload-label"),
            j = q.children(),
            B = W.find(".w-file-upload-error-msg"),
            de = ee.find(".w-file-upload-file"),
            Oe = ee.find(".w-file-remove-link"),
            xe = de.find(".w-file-upload-file-name"),
            l = B.attr("data-w-size-error"),
            h = B.attr("data-w-type-error"),
            O = B.attr("data-w-generic-error");
          if (
            (I ||
              q.on("click keydown", function (ne) {
                (ne.type === "keydown" && ne.which !== 13 && ne.which !== 32) ||
                  (ne.preventDefault(), p.click());
              }),
            q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Oe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            I)
          )
            p.on("click", function (ne) {
              ne.preventDefault();
            }),
              q.on("click", function (ne) {
                ne.preventDefault();
              }),
              j.on("click", function (ne) {
                ne.preventDefault();
              });
          else {
            Oe.on("click keydown", function (ne) {
              if (ne.type === "keydown") {
                if (ne.which !== 13 && ne.which !== 32) return;
                ne.preventDefault();
              }
              p.removeAttr("data-value"),
                p.val(""),
                xe.html(""),
                N.toggle(!0),
                ee.toggle(!1),
                q.focus();
            }),
              p.on("change", function (ne) {
                (R = ne.target && ne.target.files && ne.target.files[0]),
                  R &&
                    (N.toggle(!1),
                    W.toggle(!1),
                    $.toggle(!0),
                    $.focus(),
                    xe.text(R.name),
                    oe() || Z(c),
                    (c.fileUploads[E].uploading = !0),
                    y(R, U));
              });
            var P = q.outerHeight();
            p.height(P), p.width(1);
          }
          function F(ne) {
            var X = ne.responseJSON && ne.responseJSON.msg,
              se = O;
            typeof X == "string" && X.indexOf("InvalidFileTypeError") === 0
              ? (se = h)
              : typeof X == "string" &&
                X.indexOf("MaxFileSizeError") === 0 &&
                (se = l),
              B.text(se),
              p.removeAttr("data-value"),
              p.val(""),
              $.toggle(!1),
              N.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (c.fileUploads[E].uploading = !1),
              oe() || Q(c);
          }
          function U(ne, X) {
            if (ne) return F(ne);
            var se = X.fileName,
              ue = X.postData,
              ve = X.fileId,
              Me = X.s3Url;
            p.attr("data-value", ve), k(Me, ue, R, se, te);
          }
          function te(ne) {
            if (ne) return F(ne);
            $.toggle(!1),
              ee.css("display", "inline-block"),
              ee.focus(),
              (c.fileUploads[E].uploading = !1),
              oe() || Q(c);
          }
          function oe() {
            var ne = (c.fileUploads && c.fileUploads.toArray()) || [];
            return ne.some(function (X) {
              return X.uploading;
            });
          }
        }
        function y(E, c) {
          var R = new URLSearchParams({ name: E.name, size: E.size });
          e.ajax({ type: "GET", url: `${S}?${R}`, crossDomain: !0 })
            .done(function (w) {
              c(null, w);
            })
            .fail(function (w) {
              c(w);
            });
        }
        function k(E, c, R, w, N) {
          var $ = new FormData();
          for (var ee in c) $.append(ee, c[ee]);
          $.append("file", R, w),
            e
              .ajax({
                type: "POST",
                url: E,
                data: $,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                N(null);
              })
              .fail(function (W) {
                N(W);
              });
        }
        return r;
      })
    );
  });
  fo();
  go();
  yo();
  To();
  _o();
  bo();
  Ao();
  jg();
  Tn();
  iE();
  sE();
  lE();
  pE();
  Webflow.require("ix2").init({
    events: {
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".portfolio-card_content",
          originalId:
            "675ac0b1764563902c042249|8830eb03-8692-7d23-c6ba-af2f3993de4d",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".portfolio-card_content",
            originalId:
              "675ac0b1764563902c042249|8830eb03-8692-7d23-c6ba-af2f3993de4d",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1645354059637,
      },
      "e-6": {
        id: "e-6",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-5",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".portfolio-card_content",
          originalId:
            "675ac0b1764563902c042249|8830eb03-8692-7d23-c6ba-af2f3993de4d",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".portfolio-card_content",
            originalId:
              "675ac0b1764563902c042249|8830eb03-8692-7d23-c6ba-af2f3993de4d",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1645354059638,
      },
      "e-16": {
        id: "e-16",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-96",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675ac0b1764563902c042249",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675ac0b1764563902c042249",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1647008496019,
      },
      "e-22": {
        id: "e-22",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-110",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".faq_item",
          originalId:
            "675ac0b1764563902c042249|5054a40e-b307-e99e-b7a7-70dd5e2c3f09",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq_item",
            originalId:
              "675ac0b1764563902c042249|5054a40e-b307-e99e-b7a7-70dd5e2c3f09",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638002808807,
      },
      "e-23": {
        id: "e-23",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-22",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".faq_item",
          originalId:
            "675ac0b1764563902c042249|5054a40e-b307-e99e-b7a7-70dd5e2c3f09",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq_item",
            originalId:
              "675ac0b1764563902c042249|5054a40e-b307-e99e-b7a7-70dd5e2c3f09",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638002808808,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-27",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".faq_item",
          originalId:
            "675ac0b1764563902c042249|2519df59-27a0-94ed-1034-bc9b71c6ddbf",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq_item",
            originalId:
              "675ac0b1764563902c042249|2519df59-27a0-94ed-1034-bc9b71c6ddbf",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1647685321519,
      },
      "e-27": {
        id: "e-27",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-26",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".faq_item",
          originalId:
            "675ac0b1764563902c042249|2519df59-27a0-94ed-1034-bc9b71c6ddbf",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq_item",
            originalId:
              "675ac0b1764563902c042249|2519df59-27a0-94ed-1034-bc9b71c6ddbf",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1647685321520,
      },
      "e-28": {
        id: "e-28",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-36",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".portfolio-card_img-wrapper",
          originalId:
            "675ac0b1764563902c042249|53ce7d34-27b8-99ff-bd59-b2008b62a7ab",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".portfolio-card_img-wrapper",
            originalId:
              "675ac0b1764563902c042249|53ce7d34-27b8-99ff-bd59-b2008b62a7ab",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1647849565659,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "custom",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-31",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".process_slide",
          originalId:
            "675ac0b1764563902c042249|a1fa178f-b875-a728-e3c9-74ee5d29ad5d",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".process_slide",
            originalId:
              "675ac0b1764563902c042249|a1fa178f-b875-a728-e3c9-74ee5d29ad5d",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1648234827666,
      },
      "e-31": {
        id: "e-31",
        name: "",
        animationType: "custom",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-105",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".process_slide",
          originalId:
            "675ac0b1764563902c042249|a1fa178f-b875-a728-e3c9-74ee5d29ad5d",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".process_slide",
            originalId:
              "675ac0b1764563902c042249|a1fa178f-b875-a728-e3c9-74ee5d29ad5d",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1648234827666,
      },
      "e-34": {
        id: "e-34",
        name: "",
        animationType: "preset",
        eventTypeId: "NAVBAR_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-407",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "4c3d61ed-6202-b4ec-1ae6-e597d8687730",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "4c3d61ed-6202-b4ec-1ae6-e597d8687730",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1626227992075,
      },
      "e-35": {
        id: "e-35",
        name: "",
        animationType: "preset",
        eventTypeId: "NAVBAR_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-590",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "4c3d61ed-6202-b4ec-1ae6-e597d8687730",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "4c3d61ed-6202-b4ec-1ae6-e597d8687730",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1626227992075,
      },
      "e-36": {
        id: "e-36",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-105",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".fs-dropdown-1",
          originalId:
            "675ac0b1764563902c04225b|02ec2307-9158-a72e-c1da-8e7916d41b27",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".fs-dropdown-1",
            originalId:
              "675ac0b1764563902c04225b|02ec2307-9158-a72e-c1da-8e7916d41b27",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638823214921,
      },
      "e-37": {
        id: "e-37",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-36",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".fs-dropdown-1",
          originalId:
            "675ac0b1764563902c04225b|02ec2307-9158-a72e-c1da-8e7916d41b27",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".fs-dropdown-1",
            originalId:
              "675ac0b1764563902c04225b|02ec2307-9158-a72e-c1da-8e7916d41b27",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1638823214922,
      },
      "e-38": {
        id: "e-38",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          selector: ".parallax",
          originalId:
            "675ac0b1764563902c042249|32e134c0-26f0-66fc-b075-6f9929c7f207",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".parallax",
            originalId:
              "675ac0b1764563902c042249|32e134c0-26f0-66fc-b075-6f9929c7f207",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-30-p",
            smoothing: 86,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1661276521506,
      },
      "e-44": {
        id: "e-44",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-45",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".work-card",
          originalId:
            "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".work-card",
            originalId:
              "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666534935786,
      },
      "e-45": {
        id: "e-45",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-44",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".work-card",
          originalId:
            "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".work-card",
            originalId:
              "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666534935786,
      },
      "e-46": {
        id: "e-46",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-35", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".work-card",
          originalId:
            "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".work-card",
            originalId:
              "675ac0b1764563902c042249|47a7d0c4-f5e8-d674-b1ff-e080cbfb4ba2",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-35-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-35-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
        ],
        createdOn: 1667373676341,
      },
      "e-47": {
        id: "e-47",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-36",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-48",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".skew-heading",
          originalId:
            "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".skew-heading",
            originalId:
              "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 25,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1668331439900,
      },
      "e-63": {
        id: "e-63",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_UP",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-40",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-64",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "65b36525eeaf2a447ba7e065",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "65b36525eeaf2a447ba7e065",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1678101598851,
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL_DOWN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-39",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-63",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "65b36525eeaf2a447ba7e065",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "65b36525eeaf2a447ba7e065",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1678101598852,
      },
      "e-65": {
        id: "e-65",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-66",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662070207780,
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-44",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-65",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662070207780,
      },
      "e-67": {
        id: "e-67",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-45",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-68",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662070207780,
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-46",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-67",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "682e64a6-43ff-81e4-ff27-409a0c057be5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662070207780,
      },
      "e-69": {
        id: "e-69",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-70",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".circle-container",
          originalId:
            "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".circle-container",
            originalId:
              "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1568645483720,
      },
      "e-70": {
        id: "e-70",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-69",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".circle-container",
          originalId:
            "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".circle-container",
            originalId:
              "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1568645483720,
      },
      "e-71": {
        id: "e-71",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-72",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675ac0b1764563902c042249",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675ac0b1764563902c042249",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1680523188476,
      },
      "e-73": {
        id: "e-73",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-49", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".circle-container",
          originalId:
            "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".circle-container",
            originalId:
              "675ac0b1764563902c042249|4ee18cd6-66af-084c-c45e-3520adfabc48",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-49-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-49-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
        ],
        createdOn: 1680524422061,
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-52",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-75",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".a_slide-up",
          originalId:
            "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_slide-up",
            originalId:
              "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068082750,
      },
      "e-76": {
        id: "e-76",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-53",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-77",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".a_slide-up_200",
          originalId:
            "675ac0b1764563902c04225b|34de3986-242e-840a-88b9-be2086e706cc",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_slide-up_200",
            originalId:
              "675ac0b1764563902c04225b|34de3986-242e-840a-88b9-be2086e706cc",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068255984,
      },
      "e-78": {
        id: "e-78",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-52",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-79",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          selector: ".a_slide-up_200",
          originalId:
            "675ac0b1764563902c04225b|34de3986-242e-840a-88b9-be2086e706cc",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_slide-up_200",
            originalId:
              "675ac0b1764563902c04225b|34de3986-242e-840a-88b9-be2086e706cc",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068312889,
      },
      "e-80": {
        id: "e-80",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-54",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-81",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".a_slide-up_400",
          originalId:
            "675ac0b1764563902c04225b|bb409966-1c20-f220-860d-3072c0499e83",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_slide-up_400",
            originalId:
              "675ac0b1764563902c04225b|bb409966-1c20-f220-860d-3072c0499e83",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068354050,
      },
      "e-82": {
        id: "e-82",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-52",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-83",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          selector: ".a_slide-up_400",
          originalId:
            "675ac0b1764563902c04225b|bb409966-1c20-f220-860d-3072c0499e83",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_slide-up_400",
            originalId:
              "675ac0b1764563902c04225b|bb409966-1c20-f220-860d-3072c0499e83",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068395750,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-55",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-85",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".a_appear",
          originalId:
            "675ac0b1764563902c04225b|fb0a1fb5-4d8c-05dc-82b6-b47e6937d5e7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_appear",
            originalId:
              "675ac0b1764563902c04225b|fb0a1fb5-4d8c-05dc-82b6-b47e6937d5e7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682068519319,
      },
      "e-86": {
        id: "e-86",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-56",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-87",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".a_appear-200",
          originalId:
            "675ac0b1764563902c04225b|5d83b8ff-c987-edd7-b8a2-4cb9b638ef9e",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_appear-200",
            originalId:
              "675ac0b1764563902c04225b|5d83b8ff-c987-edd7-b8a2-4cb9b638ef9e",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682069230456,
      },
      "e-88": {
        id: "e-88",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-55",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-89",
          },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          selector: ".a_appear-200",
          originalId:
            "675ac0b1764563902c04225b|5d83b8ff-c987-edd7-b8a2-4cb9b638ef9e",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".a_appear-200",
            originalId:
              "675ac0b1764563902c04225b|5d83b8ff-c987-edd7-b8a2-4cb9b638ef9e",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1682069262780,
      },
      "e-96": {
        id: "e-96",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-60", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          id: "675ac0b1764563902c042250",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675ac0b1764563902c042250",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-60-p",
            selectedAxis: "X_AXIS",
            basedOn: "VIEWPORT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-60-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "VIEWPORT",
            reverse: !1,
            smoothing: 96,
            restingState: 50,
          },
        ],
        createdOn: 1682071031516,
      },
      "e-97": {
        id: "e-97",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-61",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-98",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675ac0b1764563902c042249|86463962-0766-0c40-896d-05583fbcfaec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675ac0b1764563902c042249|86463962-0766-0c40-896d-05583fbcfaec",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1706258125091,
      },
      "e-98": {
        id: "e-98",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-62",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-97",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675ac0b1764563902c042249|86463962-0766-0c40-896d-05583fbcfaec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "675ac0b1764563902c042249|86463962-0766-0c40-896d-05583fbcfaec",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1706258125091,
      },
      "e-99": {
        id: "e-99",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-65",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-100",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-wrapper",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-wrapper",
            originalId:
              "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1625015493372,
      },
      "e-100": {
        id: "e-100",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-66",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-99",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-wrapper",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-wrapper",
            originalId:
              "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1625015493377,
      },
      "e-101": {
        id: "e-101",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-69",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-344",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".udesly-overline-large",
          originalId: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".udesly-overline-large",
            originalId: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1663925086207,
      },
      "e-103": {
        id: "e-103",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-70",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-104",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".udesly-paragraph-large",
          originalId:
            "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".udesly-paragraph-large",
            originalId:
              "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1663927130447,
      },
      "e-105": {
        id: "e-105",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-71",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-348",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".udesly-paragraph-large",
          originalId:
            "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".udesly-paragraph-large",
            originalId:
              "632d9a646d06405e98849663|135a3157-c61d-fa45-c153-1a0a42270610",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1663927130447,
      },
      "e-106": {
        id: "e-106",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-72",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-107",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".udesly-slider-wrapper",
          originalId:
            "675ac0b1764563902c042249|8ac94ff0-8da7-05b2-6056-a7fd3b3222d8",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".udesly-slider-wrapper",
            originalId:
              "675ac0b1764563902c042249|8ac94ff0-8da7-05b2-6056-a7fd3b3222d8",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1663928152599,
      },
      "e-108": {
        id: "e-108",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-71",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-109",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".udesly-property-content",
          originalId:
            "675ac0b1764563902c042249|8ac94ff0-8da7-05b2-6056-a7fd3b3222e6",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".udesly-property-content",
            originalId:
              "675ac0b1764563902c042249|8ac94ff0-8da7-05b2-6056-a7fd3b3222e6",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1663928160034,
      },
      "e-110": {
        id: "e-110",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-73",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-111",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-block-orange",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-block-orange",
            originalId:
              "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666312770566,
      },
      "e-111": {
        id: "e-111",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-74",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-110",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-block-orange",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-block-orange",
            originalId:
              "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666312770566,
      },
      "e-112": {
        id: "e-112",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-75",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-113",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-wrapper-2",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-wrapper-2",
            originalId:
              "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1625015493372,
      },
      "e-113": {
        id: "e-113",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-76",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-112",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-wrapper-2",
          originalId:
            "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-wrapper-2",
            originalId:
              "6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1625015493377,
      },
      "e-114": {
        id: "e-114",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-77",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-115",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-block-orange-2",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-block-orange-2",
            originalId:
              "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666312770566,
      },
      "e-115": {
        id: "e-115",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-78",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-114",
          },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".walsh-link-block-orange-2",
          originalId:
            "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-link-block-orange-2",
            originalId:
              "634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1666312770566,
      },
      "e-117": {
        id: "e-117",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-116",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "677cdefd46d609b408186454",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "677cdefd46d609b408186454",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736236798678,
      },
      "e-118": {
        id: "e-118",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-119",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "677cdefd46d609b408186454",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "677cdefd46d609b408186454",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736236798678,
      },
      "e-120": {
        id: "e-120",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-61",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-121",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "677cdefd46d609b408186454|86463962-0766-0c40-896d-05583fbcfaec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "677cdefd46d609b408186454|86463962-0766-0c40-896d-05583fbcfaec",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736236798678,
      },
      "e-121": {
        id: "e-121",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-62",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-120",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "677cdefd46d609b408186454|86463962-0766-0c40-896d-05583fbcfaec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "677cdefd46d609b408186454|86463962-0766-0c40-896d-05583fbcfaec",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1736236798678,
      },
      "e-122": {
        id: "e-122",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-79",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-123",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".walsh-rounded-card",
          originalId:
            "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-rounded-card",
            originalId:
              "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: !1,
        },
        createdOn: 1736405378926,
      },
      "e-123": {
        id: "e-123",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-80",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-122",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".walsh-rounded-card",
          originalId:
            "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".walsh-rounded-card",
            originalId:
              "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: !1,
        },
        createdOn: 1736405378928,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "portfolio-card-hover-IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  xValue: null,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-style-h3",
                    selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf5"],
                  },
                  globalSwatchId: "f93de768",
                  rValue: 16,
                  bValue: 40,
                  gValue: 24,
                  aValue: 1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 400,
                  target: {},
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-style-h3",
                    selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf5"],
                  },
                  globalSwatchId: "1bc3118a",
                  rValue: 38,
                  bValue: 235,
                  gValue: 89,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1645353830312,
      },
      "a-3": {
        id: "a-3",
        title: "portfolio-card-hover-OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 400,
                  target: {},
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-3-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".heading-style-h3",
                    selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf5"],
                  },
                  globalSwatchId: "f93de768",
                  rValue: 16,
                  bValue: 40,
                  gValue: 24,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1645353830312,
      },
      "a-8": {
        id: "a-8",
        title: "Hero enter",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-8-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  xValue: null,
                  yValue: 150,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-21",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-8-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  yValue: null,
                  zValue: 6,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-8-n-3",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  xValue: -6,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-8-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  xValue: null,
                  yValue: 150,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-9",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  xValue: -6,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-8-n-8",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  yValue: null,
                  zValue: 6,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-8-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuart",
                  duration: 500,
                  target: {
                    selector: ".avatar_wrapper",
                    selectorGuids: ["d57d911f-1306-bed1-07f2-14a77f8a5678"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-8-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-22",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-8-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  yValue: null,
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-8-n-6",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  xValue: 0,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-8-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".heading-style-headline.is-hero",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "683b2d8c-ae8e-4286-3aee-030ef7a77f3e",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-8-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-11",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 200,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  yValue: null,
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-8-n-12",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 200,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    selector: ".heading-style-headline.is-hero-2",
                    selectorGuids: [
                      "b0934d9a-875a-bb42-0630-12090a77fc43",
                      "a0fd312d-8e7b-8e15-3c50-f852cf15606d",
                    ],
                  },
                  xValue: 0,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-13",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "outBounce",
                  duration: 500,
                  target: {
                    selector: ".partner",
                    selectorGuids: ["140f1e91-d194-85db-f42e-f8ed501ba187"],
                  },
                  zValue: -4,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-8-n-14",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outBounce",
                  duration: 500,
                  target: {
                    selector: ".partner",
                    selectorGuids: ["140f1e91-d194-85db-f42e-f8ed501ba187"],
                  },
                  yValue: 0.25,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "inOutQuart",
                  duration: 1e3,
                  target: {
                    selector: ".avatar_wrapper",
                    selectorGuids: ["d57d911f-1306-bed1-07f2-14a77f8a5678"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1647008504306,
      },
      "a-10": {
        id: "a-10",
        title: "FAQ-open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-10-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-10-n-4",
                actionTypeId: "PLUGIN_LOTTIE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_icon",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e7"],
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 100,
                  easing: "easeOut",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-10-n-8",
                actionTypeId: "PLUGIN_LOTTIE",
                config: {
                  delay: 100,
                  easing: "",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_icon",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e7"],
                  },
                  value: 44,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1638002838892,
      },
      "a-11": {
        id: "a-11",
        title: "FAQ-close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-11-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-11-n-2",
                actionTypeId: "PLUGIN_LOTTIE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_icon",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e7"],
                  },
                  value: 0,
                },
              },
              {
                id: "a-11-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 100,
                  easing: "outQuart",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-11-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_answer-wrapper",
                    selectorGuids: ["1fd4dfa0-753e-1e38-3e18-d5d298cf44e2"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638002838892,
      },
      "a-13": {
        id: "a-13",
        title: "FAQ-hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_question",
                    selectorGuids: ["fb136ee5-54f7-7eb4-cec6-913fd7df634f"],
                  },
                  globalSwatchId: "f93de768",
                  rValue: 16,
                  bValue: 40,
                  gValue: 24,
                  aValue: 1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_question",
                    selectorGuids: ["fb136ee5-54f7-7eb4-cec6-913fd7df634f"],
                  },
                  globalSwatchId: "1bc3118a",
                  rValue: 38,
                  bValue: 235,
                  gValue: 89,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1647685330833,
      },
      "a-14": {
        id: "a-14",
        title: "FAQ-hover OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n-2",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq_question",
                    selectorGuids: ["fb136ee5-54f7-7eb4-cec6-913fd7df634f"],
                  },
                  globalSwatchId: "f93de768",
                  rValue: 16,
                  bValue: 40,
                  gValue: 24,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1647685330833,
      },
      "a-15": {
        id: "a-15",
        title: "Portfolio-image-reveal",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-15-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  value: 0.95,
                  unit: "",
                },
              },
              {
                id: "a-15-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  widthValue: 100,
                  heightValue: 100,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-15-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuad",
                  duration: 500,
                  target: {},
                  widthValue: 0,
                  heightValue: 100,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-15-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  value: 0.5,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1647683140071,
      },
      "a-16": {
        id: "a-16",
        title: "process-slide-IN",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-16-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  xValue: null,
                  yValue: 4,
                  xUnit: "px",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-16-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-16-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-16-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "swingTo",
                  duration: 300,
                  target: {},
                  xValue: null,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-16-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 300,
                  target: {},
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-16-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 100,
                  easing: "outQuad",
                  duration: 600,
                  target: {},
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1648234956592,
      },
      "a-17": {
        id: "a-17",
        title: "process-slide-OUT",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-17-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inCubic",
                  duration: 200,
                  target: {},
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-17-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuad",
                  duration: 300,
                  target: {},
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-17-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1648234956592,
      },
      "a-20": {
        id: "a-20",
        title: "Navbar 1 [Open Menu]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-20-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-middle",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269357"],
                  },
                  widthValue: 0,
                  widthUnit: "px",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-20-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-bottom",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269365"],
                  },
                  yValue: -8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-top",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269356"],
                  },
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-20-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-top",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269356"],
                  },
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-20-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-bottom",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269365"],
                  },
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1626168378054,
      },
      "a-21": {
        id: "a-21",
        title: "Navbar 1 [Close Menu]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-21-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-bottom",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269365"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-21-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-top",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269356"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-21-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-bottom",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269365"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-21-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-top",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269356"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-21-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 400,
                  easing: "inOutQuint",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon_line-middle",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269357"],
                  },
                  widthValue: 24,
                  widthUnit: "px",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1626168766736,
      },
      "a-28": {
        id: "a-28",
        title: "Dropdown 1 - Open Dropdown",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-28-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".fs-dropdown_icon-1",
                    selectorGuids: ["679fb706-68e0-435e-722f-feb4ff43d62d"],
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638823218457,
      },
      "a-29": {
        id: "a-29",
        title: "Dropdown 1 - Close Dropdown",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-29-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".fs-dropdown_icon-1",
                    selectorGuids: ["679fb706-68e0-435e-722f-feb4ff43d62d"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1638823218457,
      },
      "a-30": {
        id: "a-30",
        title: "parallax",
        continuousParameterGroups: [
          {
            id: "a-30-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|32e134c0-26f0-66fc-b075-6f9929c7f207",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|32e134c0-26f0-66fc-b075-6f9929c7f207",
                      },
                      yValue: -2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1661276530049,
      },
      "a-33": {
        id: "a-33",
        title: "Work card hover [hover in]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-33-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card-hover-cursor",
                    selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-33-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image-overlay-layer",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9eea"],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-33-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card_background-image",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9ee5"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-33-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card-hover-cursor",
                    selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-33-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image-overlay-layer",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9eea"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-33-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card_background-image",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9ee5"],
                  },
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1666534938967,
      },
      "a-34": {
        id: "a-34",
        title: "Work card hover [hover out]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-34-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card-hover-cursor",
                    selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-34-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".image-overlay-layer",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9eea"],
                  },
                  value: 0.2,
                  unit: "",
                },
              },
              {
                id: "a-34-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".work-card_background-image",
                    selectorGuids: ["4f5232bd-c5e8-a49c-e913-3ea2825a9ee5"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1666534938967,
      },
      "a-35": {
        id: "a-35",
        title: "work card",
        continuousParameterGroups: [
          {
            id: "a-35-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".work-card-hover-cursor",
                        selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".work-card-hover-cursor",
                        selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-35-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-35-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".work-card-hover-cursor",
                        selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-35-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".work-card-hover-cursor",
                        selectorGuids: ["621608d9-7395-0206-021f-25c8112da05d"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1666535037786,
      },
      "a-36": {
        id: "a-36",
        title: "Skew heading",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-36-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  xValue: null,
                  yValue: 150,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-36-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  yValue: null,
                  zValue: 6,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-36-n-3",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  xValue: -6,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-36-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-36-n-9",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  yValue: null,
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-36-n-10",
                actionTypeId: "TRANSFORM_SKEW",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  xValue: 0,
                  xUnit: "deg",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-36-n-14",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "outBounce",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  zValue: -4,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-36-n-15",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outBounce",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|b7ec51cd-d698-e3c4-d85f-66db2cc023e1",
                  },
                  yValue: 0.75,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1647008504306,
      },
      "a-40": {
        id: "a-40",
        title: "Nav show [scroll up]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-40-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    selector: ".navbar_component",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269358"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1669865329672,
      },
      "a-39": {
        id: "a-39",
        title: "Nav hide [scroll down]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-39-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    selector: ".navbar_component",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269358"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-39-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    selector: ".navbar_component",
                    selectorGuids: ["6e08245c-5bf2-3853-5521-c15a2a269358"],
                  },
                  yValue: -102,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1669865329672,
      },
      "a-43": {
        id: "a-43",
        title: "Navbar dropdown 1 [Open] [Tablet]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-43-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  heightValue: 0,
                  widthUnit: "px",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-43-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-43-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1626241970095,
      },
      "a-44": {
        id: "a-44",
        title: "Navbar dropdown 1 [Close] [Tablet]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-44-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-44-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1626241970095,
      },
      "a-45": {
        id: "a-45",
        title: "Navbar dropdown 1 [Open] [Desktop]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-45-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-45-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-45-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-45-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1626241970095,
      },
      "a-46": {
        id: "a-46",
        title: "Navbar dropdown 2 [Close] [Desktop]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-46-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-46-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-46-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar-dropdown_dropdown-list",
                    selectorGuids: ["122d9685-aa96-0e2e-b479-180e7e4f0800"],
                  },
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1626241970095,
      },
      "a-47": {
        id: "a-47",
        title: "circle-text-hover-over",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-47-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e4,
                  target: {
                    selector: ".circle-text",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd470"],
                  },
                  zValue: -360,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-47-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".circle-container",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd46f"],
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-47-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".circle-text",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd470"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1568644785449,
      },
      "a-48": {
        id: "a-48",
        title: "circle-text-rotate",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-48-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".circle-text",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd470"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-48-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e4,
                  target: {
                    selector: ".circle-text",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd470"],
                  },
                  zValue: 360,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
              {
                id: "a-48-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".circle-container",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd46f"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-48-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".circle-text",
                    selectorGuids: ["624082cc-f1ff-ee60-0a02-9b1b069fd470"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1568644785449,
      },
      "a-49": {
        id: "a-49",
        title: "avatar",
        continuousParameterGroups: [
          {
            id: "a-49-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-49-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|c77e02ed-dca8-e85b-6aad-a1c78a32a841",
                      },
                      xValue: -4,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-49-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|c77e02ed-dca8-e85b-6aad-a1c78a32a841",
                      },
                      xValue: 4,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-49-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-49-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|c77e02ed-dca8-e85b-6aad-a1c78a32a841",
                      },
                      yValue: -4,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-49-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675ac0b1764563902c042249|c77e02ed-dca8-e85b-6aad-a1c78a32a841",
                      },
                      yValue: 4,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1680524155787,
      },
      "a-52": {
        id: "a-52",
        title: "Slide Up",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-52-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-52-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-52-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-52-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1682068098596,
      },
      "a-53": {
        id: "a-53",
        title: "Slide Up 200",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-53-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-53-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-53-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
              {
                id: "a-53-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1682068098596,
      },
      "a-54": {
        id: "a-54",
        title: "Slide Up 400",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-54-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-54-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 2,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-54-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-54-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuart",
                  duration: 800,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1682068098596,
      },
      "a-55": {
        id: "a-55",
        title: "Fade in",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-55-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-55-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  xValue: 0.95,
                  yValue: 0.95,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-55-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outCirc",
                  duration: 1400,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-55-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outCirc",
                  duration: 1400,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1682068098596,
      },
      "a-56": {
        id: "a-56",
        title: "Fade in 200",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-56-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-56-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  xValue: 0.95,
                  yValue: 0.95,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-56-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "outCirc",
                  duration: 1400,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-56-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 200,
                  easing: "outCirc",
                  duration: 1400,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c04225b|2c8c7f03-4515-ce82-67ce-f9ba80e3844e",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1682068098596,
      },
      "a-60": {
        id: "a-60",
        title: "404 home button",
        continuousParameterGroups: [
          {
            id: "a-60-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-60-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "675ac0b1764563902c042250|0d8afa74-b3b8-efeb-afe7-ef0f863da863",
                      },
                      xValue: -50,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-60-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "675ac0b1764563902c042250|0d8afa74-b3b8-efeb-afe7-ef0f863da863",
                      },
                      xValue: 50,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-60-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-60-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "675ac0b1764563902c042250|0d8afa74-b3b8-efeb-afe7-ef0f863da863",
                      },
                      yValue: -50,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-60-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "675ac0b1764563902c042250|0d8afa74-b3b8-efeb-afe7-ef0f863da863",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1682071039524,
      },
      "a-61": {
        id: "a-61",
        title: "video-testimonial [hover in] 4",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-61-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-overlay-layer",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba836"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-61-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".lightbox-play-icon",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba838"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-61-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".lightbox-play-icon",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba838"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-61-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-overlay-layer",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba836"],
                  },
                  value: 0.5,
                  unit: "",
                },
              },
              {
                id: "a-61-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".lightbox-play-icon",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba838"],
                  },
                  xValue: 1.25,
                  yValue: 1.25,
                  locked: !0,
                },
              },
              {
                id: "a-61-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-testimonial_lightbox-image",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba83b"],
                  },
                  xValue: 1.05,
                  yValue: 1.05,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1652959886019,
      },
      "a-62": {
        id: "a-62",
        title: "video-testimonial [hover out] 4",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-62-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-overlay-layer",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba836"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-62-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".lightbox-play-icon",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba838"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-62-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-testimonial_lightbox-image",
                    selectorGuids: ["36d88695-098d-6a01-cdaf-7bf1ed7ba83b"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1652959886019,
      },
      "a-65": {
        id: "a-65",
        title: "Button CTA Arrow - Hover On",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-65-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow",
                    selectorGuids: ["e8a315e5-2860-b1cc-688a-62bac1db8c38"],
                  },
                  xValue: 6,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625015496555,
      },
      "a-66": {
        id: "a-66",
        title: "Button CTA Arrow - Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-66-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow",
                    selectorGuids: ["e8a315e5-2860-b1cc-688a-62bac1db8c38"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625015496555,
      },
      "a-69": {
        id: "a-69",
        title: "View Animation / 0.2s",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-69-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  yValue: 15,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-69-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-69-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-69-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1663925052941,
      },
      "a-70": {
        id: "a-70",
        title: "View Animation / 0.4s",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-70-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  yValue: 15,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-70-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-70-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-70-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "f847cbab-c4b8-dbd5-9d6c-6580f576bc9e",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1663925052941,
      },
      "a-71": {
        id: "a-71",
        title: "View Animation / 0.4s 3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-71-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  yValue: 15,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-71-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-71-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-71-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1663925052941,
      },
      "a-72": {
        id: "a-72",
        title: "From Up / 0.2s",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-72-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  xValue: null,
                  yValue: -15,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-72-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-72-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-72-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 700,
                  target: {
                    useEventTarget: !0,
                    id: "632d9a646d0640815d849657|644e516d-202e-c384-6fb1-d939426cca53",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1663925574487,
      },
      "a-73": {
        id: "a-73",
        title: "Button Default - Hover On 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-73-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "inOutExpo",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-flip-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c036"],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-73-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-label-button-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c038"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1661474026364,
      },
      "a-74": {
        id: "a-74",
        title: "Button Default - Hover Out 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-74-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c035"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-74-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c035"],
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-74-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 250,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-label-button-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c038"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-74-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-flip-2",
                    selectorGuids: ["1c09d17a-7025-b811-fbbc-8b088ae5c036"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1661474026364,
      },
      "a-75": {
        id: "a-75",
        title: "Button CTA Arrow - Hover On 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-75-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-2",
                    selectorGuids: ["2c619126-c58d-39f7-ab0f-db7195ae52c0"],
                  },
                  xValue: 6,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625015496555,
      },
      "a-76": {
        id: "a-76",
        title: "Button CTA Arrow - Hover Out 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-76-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-2",
                    selectorGuids: ["2c619126-c58d-39f7-ab0f-db7195ae52c0"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625015496555,
      },
      "a-77": {
        id: "a-77",
        title: "Button Default - Hover On 3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-77-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "inOutExpo",
                  duration: 1250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3ba"],
                  },
                  xValue: 3.8,
                  yValue: 3.8,
                  locked: !0,
                },
              },
              {
                id: "a-77-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutExpo",
                  duration: 1250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3ba"],
                  },
                  xValue: 180,
                  yValue: 80,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-77-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "inOutExpo",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-flip-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3b7"],
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-77-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-label-button-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3bb"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1661474026364,
      },
      "a-78": {
        id: "a-78",
        title: "Button Default - Hover Out 3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-78-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3ba"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-78-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 600,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-button-hover-fill-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3ba"],
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "%",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
              {
                id: "a-78-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 250,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-label-button-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3bb"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-78-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "outQuart",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".walsh-icon-arrow-flip-3",
                    selectorGuids: ["0fe9820a-c889-4bc7-efe5-ab7d34c7c3b7"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1661474026364,
      },
      "a-79": {
        id: "a-79",
        title: "growing",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-79-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
                  },
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1736405486470,
      },
      "a-80": {
        id: "a-80",
        title: "growing out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-80-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "675ac0b1764563902c042249|d3679b70-1c82-0d0b-be98-846e802f103a",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1736405579797,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.w-nav-button');
  const menu = document.querySelector('.w-nav-menu');

  // Toggle menu ketika tombol ditekan
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Tambahkan class 'active'
  });

  // Tutup menu ketika salah satu link ditekan
  const links = menu.querySelectorAll('.w-nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active'); // Hilangkan class 'active'
    });
  });
});
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
