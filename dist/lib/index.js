!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.rMiniUtil = t() : e.rMiniUtil = t()
}(self, (function () {
    return function () {
        "use strict";
        var e = {
            882: function (e, t) {
                function r(e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1))
                }

                function n(e, t) {
                    return Object.prototype.toString.call(t).includes(t)
                }

                function o(e) {
                    return n(0, e)
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.debounce = t.shuffleArray = t.isEmptyObject = t.isFunction = t.isArray = t.isObject = t.is = t.randomHexColor = t.randomNum = void 0, t.randomNum = r, t.randomHexColor = function (e = !0) {
                    let t = "";
                    for (let e = 0; e < 3; e++) t += r(0, 255).toString(16).padStart(2, "0");
                    return t += e ? "#" : "", t
                }, t.shuffleArray = function (e) {
                    for (let t = 0, n = e.length; t < e.length; t++) {
                        let o = r(t, n - 1);
                        [e[t], e[o]] = [e[o], e[t]]
                    }
                }, t.is = n, t.isFunction = function (e) {
                    return n(0, e)
                }, t.isArray = function (e) {
                    return n(0, e)
                }, t.isObject = o, t.isEmptyObject = function (e) {
                    return o(e) && !Object.keys(e).length
                }, t.debounce = function (e, t = 300) {
                    let r;
                    return function () {
                        clearTimeout(r), r = setTimeout(e, t)
                    }
                }
            }
        }, t = {};

        function r(n) {
            var o = t[n];
            if (void 0 !== o) return o.exports;
            var i = t[n] = {exports: {}};
            return e[n](i, i.exports, r), i.exports
        }

        var n = {};
        return function () {
            var e = n;
            Object.defineProperty(e, "__esModule", {value: !0}), e.debounce = e.shuffleArray = e.isEmptyObject = e.isFunction = e.isArray = e.isObject = e.is = e.randomHexColor = e.randomNum = void 0;
            const t = r(882);
            Object.defineProperty(e, "randomNum", {
                enumerable: !0, get: function () {
                    return t.randomNum
                }
            }), Object.defineProperty(e, "randomHexColor", {
                enumerable: !0, get: function () {
                    return t.randomHexColor
                }
            }), Object.defineProperty(e, "is", {
                enumerable: !0, get: function () {
                    return t.is
                }
            }), Object.defineProperty(e, "isObject", {
                enumerable: !0, get: function () {
                    return t.isObject
                }
            }), Object.defineProperty(e, "isArray", {
                enumerable: !0, get: function () {
                    return t.isArray
                }
            }), Object.defineProperty(e, "isFunction", {
                enumerable: !0, get: function () {
                    return t.isFunction
                }
            }), Object.defineProperty(e, "isEmptyObject", {
                enumerable: !0, get: function () {
                    return t.isEmptyObject
                }
            }), Object.defineProperty(e, "shuffleArray", {
                enumerable: !0, get: function () {
                    return t.shuffleArray
                }
            }), Object.defineProperty(e, "debounce", {
                enumerable: !0, get: function () {
                    return t.debounce
                }
            })
        }(), n
    }()
}));