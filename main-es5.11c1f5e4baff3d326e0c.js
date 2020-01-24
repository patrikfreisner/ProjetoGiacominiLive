function _defineProperty(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

function _slicedToArray(e, t) { return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest() }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }

function _iterableToArrayLimit(e, t) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try { for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } }
        return n
    }
}

function _arrayWithHoles(e) { if (Array.isArray(e)) return e }

function _toConsumableArray(e) { return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread() }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance") }

function _iterableToArray(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }

function _arrayWithoutHoles(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }

function isNativeReflectConstruct() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }

function _construct(e, t, n) {
    return (_construct = isNativeReflectConstruct() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && _setPrototypeOf(i, n.prototype), i
    }).apply(null, arguments)
}

function _possibleConstructorReturn(e, t) { return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t }

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

function _get(e, t, n) { return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = _superPropBase(e, t); if (r) { var i = Object.getOwnPropertyDescriptor(r, t); return i.get ? i.get.call(n) : i.value } })(e, t, n || e) }

function _superPropBase(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));); return e }

function _getPrototypeOf(e) { return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) { return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) { return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e }(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(e, t, n) { e.exports = n("zUnb") },
        zUnb: function(e, t, n) {
            "use strict";

            function r(e) { return "function" == typeof e }
            n.r(t);
            var i = !1,
                o = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(e) {
                        if (e) {
                            var t = new Error;
                            console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                        } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                        i = e
                    },
                    get useDeprecatedSynchronousErrorHandling() { return i }
                };

            function a(e) { setTimeout((function() { throw e })) }
            var l = {
                    closed: !0,
                    next: function(e) {},
                    error: function(e) {
                        if (o.useDeprecatedSynchronousErrorHandling) throw e;
                        a(e)
                    },
                    complete: function() {}
                },
                u = Array.isArray || function(e) { return e && "number" == typeof e.length };

            function s(e) { return null !== e && "object" == typeof e }

            function c(e) { return Error.call(this), this.message = e ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(e.map((function(e, t) { return "".concat(t + 1, ") ").concat(e.toString()) })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = e, this }
            c.prototype = Object.create(Error.prototype);
            var h, f = c,
                d = ((h = function() {
                    function e(t) { _classCallCheck(this, e), this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t) }
                    return _createClass(e, [{
                        key: "unsubscribe",
                        value: function() {
                            var e, t = !1;
                            if (!this.closed) {
                                var n = this._parent,
                                    i = this._parents,
                                    o = this._unsubscribe,
                                    a = this._subscriptions;
                                this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                                for (var l = -1, c = i ? i.length : 0; n;) n.remove(this), n = ++l < c && i[l] || null;
                                if (r(o)) try { o.call(this) } catch (d) { t = !0, e = d instanceof f ? v(d.errors) : [d] }
                                if (u(a))
                                    for (l = -1, c = a.length; ++l < c;) { var h = a[l]; if (s(h)) try { h.unsubscribe() } catch (d) { t = !0, e = e || [], d instanceof f ? e = e.concat(v(d.errors)) : e.push(d) } }
                                if (t) throw new f(e)
                            }
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            var n = t;
                            switch (typeof t) {
                                case "function":
                                    n = new e(t);
                                case "object":
                                    if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                    if (this.closed) return n.unsubscribe(), n;
                                    if (!(n instanceof e)) {
                                        var r = n;
                                        (n = new e)._subscriptions = [r]
                                    }
                                    break;
                                default:
                                    if (!t) return e.EMPTY;
                                    throw new Error("unrecognized teardown " + t + " added to Subscription.")
                            }
                            if (n._addParent(this)) {
                                var i = this._subscriptions;
                                i ? i.push(n) : this._subscriptions = [n]
                            }
                            return n
                        }
                    }, { key: "remove", value: function(e) { var t = this._subscriptions; if (t) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) } } }, {
                        key: "_addParent",
                        value: function(e) {
                            var t = this._parent,
                                n = this._parents;
                            return t !== e && (t ? n ? -1 === n.indexOf(e) && (n.push(e), !0) : (this._parents = [e], !0) : (this._parent = e, !0))
                        }
                    }]), e
                }()).EMPTY = function(e) { return e.closed = !0, e }(new h), h);

            function v(e) { return e.reduce((function(e, t) { return e.concat(t instanceof f ? t.errors : t) }), []) }
            var p = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                g = function(e) {
                    function t(e, n, r) {
                        var i;
                        switch (_classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = l;
                                break;
                            case 1:
                                if (!e) { i.destination = l; break }
                                if ("object" == typeof e) { e instanceof t ? (i.syncErrorThrowable = e.syncErrorThrowable, i.destination = e, e.add(_assertThisInitialized(i))) : (i.syncErrorThrowable = !0, i.destination = new y(_assertThisInitialized(i), e)); break }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new y(_assertThisInitialized(i), e, n, r)
                        }
                        return i
                    }
                    return _inherits(t, e), _createClass(t, [{ key: p, value: function() { return this } }, { key: "next", value: function(e) { this.isStopped || this._next(e) } }, { key: "error", value: function(e) { this.isStopped || (this.isStopped = !0, this._error(e)) } }, { key: "complete", value: function() { this.isStopped || (this.isStopped = !0, this._complete()) } }, { key: "unsubscribe", value: function() { this.closed || (this.isStopped = !0, _get(_getPrototypeOf(t.prototype), "unsubscribe", this).call(this)) } }, { key: "_next", value: function(e) { this.destination.next(e) } }, { key: "_error", value: function(e) { this.destination.error(e), this.unsubscribe() } }, { key: "_complete", value: function() { this.destination.complete(), this.unsubscribe() } }, {
                        key: "_unsubscribeAndRecycle",
                        value: function() {
                            var e = this._parent,
                                t = this._parents;
                            return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = t, this
                        }
                    }], [{ key: "create", value: function(e, n, r) { var i = new t(e, n, r); return i.syncErrorThrowable = !1, i } }]), t
                }(d),
                y = function(e) {
                    function t(e, n, i, o) {
                        var a, u;
                        _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._parentSubscriber = e;
                        var s = _assertThisInitialized(a);
                        return r(n) ? u = n : n && (u = n.next, i = n.error, o = n.complete, n !== l && (r((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), s.unsubscribe = a.unsubscribe.bind(_assertThisInitialized(a)))), a._context = s, a._next = u, a._error = i, a._complete = o, a
                    }
                    return _inherits(t, e), _createClass(t, [{
                        key: "next",
                        value: function(e) {
                            if (!this.isStopped && this._next) {
                                var t = this._parentSubscriber;
                                o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                            }
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            if (!this.isStopped) {
                                var t = this._parentSubscriber,
                                    n = o.useDeprecatedSynchronousErrorHandling;
                                if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                                else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : a(e), this.unsubscribe();
                                else {
                                    if (this.unsubscribe(), n) throw e;
                                    a(e)
                                }
                            }
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            var e = this;
                            if (!this.isStopped) {
                                var t = this._parentSubscriber;
                                if (this._complete) {
                                    var n = function() { return e._complete.call(e._context) };
                                    o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                                } else this.unsubscribe()
                            }
                        }
                    }, {
                        key: "__tryOrUnsub",
                        value: function(e, t) {
                            try { e.call(this._context, t) } catch (n) {
                                if (this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling) throw n;
                                a(n)
                            }
                        }
                    }, { key: "__tryOrSetError", value: function(e, t, n) { if (!o.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { t.call(this._context, n) } catch (r) { return o.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (a(r), !0) } return !1 } }, {
                        key: "_unsubscribe",
                        value: function() {
                            var e = this._parentSubscriber;
                            this._context = null, this._parentSubscriber = null, e.unsubscribe()
                        }
                    }]), t
                }(g),
                m = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function _() {}

            function k() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return C(t) }

            function C(e) { return e ? 1 === e.length ? e[0] : function(t) { return e.reduce((function(e, t) { return t(e) }), t) } : _ }
            var w, b = ((w = function() {
                function e(t) { _classCallCheck(this, e), this._isScalar = !1, t && (this._subscribe = t) }
                return _createClass(e, [{ key: "lift", value: function(t) { var n = new e; return n.source = this, n.operator = t, n } }, {
                    key: "subscribe",
                    value: function(e, t, n) {
                        var r = this.operator,
                            i = function(e, t, n) { if (e) { if (e instanceof g) return e; if (e[p]) return e[p]() } return e || t || n ? new g(e, t, n) : new g(l) }(e, t, n);
                        if (i.add(r ? r.call(i, this.source) : this.source || o.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), o.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                        return i
                    }
                }, {
                    key: "_trySubscribe",
                    value: function(e) {
                        try { return this._subscribe(e) } catch (t) {
                            o.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                                function(e) {
                                    for (; e;) {
                                        var t = e,
                                            n = t.closed,
                                            r = t.destination,
                                            i = t.isStopped;
                                        if (n || i) return !1;
                                        e = r && r instanceof g ? r : null
                                    }
                                    return !0
                                }(e) ? e.error(t) : console.warn(t)
                        }
                    }
                }, {
                    key: "forEach",
                    value: function(e, t) {
                        var n = this;
                        return new(t = S(t))((function(t, r) {
                            var i;
                            i = n.subscribe((function(t) { try { e(t) } catch (n) { r(n), i && i.unsubscribe() } }), r, t)
                        }))
                    }
                }, { key: "_subscribe", value: function(e) { var t = this.source; return t && t.subscribe(e) } }, { key: m, value: function() { return this } }, { key: "pipe", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return 0 === t.length ? this : C(t)(this) } }, {
                    key: "toPromise",
                    value: function(e) {
                        var t = this;
                        return new(e = S(e))((function(e, n) {
                            var r;
                            t.subscribe((function(e) { return r = e }), (function(e) { return n(e) }), (function() { return e(r) }))
                        }))
                    }
                }]), e
            }()).create = function(e) { return new w(e) }, w);

            function S(e) { if (e || (e = o.Promise || Promise), !e) throw new Error("no Promise impl found"); return e }

            function x() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this }
            x.prototype = Object.create(Error.prototype);
            var E, T = x,
                R = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).subject = e, r.subscriber = n, r.closed = !1, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "unsubscribe",
                        value: function() {
                            if (!this.closed) {
                                this.closed = !0;
                                var e = this.subject,
                                    t = e.observers;
                                if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) { var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1) }
                            }
                        }
                    }]), t
                }(d),
                P = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).destination = e, n }
                    return _inherits(t, e), t
                }(g),
                A = ((E = function(e) {
                    function t() { var e; return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e }
                    return _inherits(t, e), _createClass(t, [{ key: p, value: function() { return new P(this) } }, { key: "lift", value: function(e) { var t = new O(this, this); return t.operator = e, t } }, {
                        key: "next",
                        value: function(e) {
                            if (this.closed) throw new T;
                            if (!this.isStopped)
                                for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].next(e)
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            if (this.closed) throw new T;
                            this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                            for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].error(e);
                            this.observers.length = 0
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            if (this.closed) throw new T;
                            this.isStopped = !0;
                            for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                            this.observers.length = 0
                        }
                    }, { key: "unsubscribe", value: function() { this.isStopped = !0, this.closed = !0, this.observers = null } }, { key: "_trySubscribe", value: function(e) { if (this.closed) throw new T; return _get(_getPrototypeOf(t.prototype), "_trySubscribe", this).call(this, e) } }, { key: "_subscribe", value: function(e) { if (this.closed) throw new T; return this.hasError ? (e.error(this.thrownError), d.EMPTY) : this.isStopped ? (e.complete(), d.EMPTY) : (this.observers.push(e), new R(this, e)) } }, { key: "asObservable", value: function() { var e = new b; return e.source = this, e } }]), t
                }(b)).create = function(e, t) { return new O(e, t) }, E),
                O = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).destination = e, r.source = n, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "next",
                        value: function(e) {
                            var t = this.destination;
                            t && t.next && t.next(e)
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            var t = this.destination;
                            t && t.error && this.destination.error(e)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            var e = this.destination;
                            e && e.complete && this.destination.complete()
                        }
                    }, { key: "_subscribe", value: function(e) { return this.source ? this.source.subscribe(e) : d.EMPTY } }]), t
                }(A);

            function I(e) { return e && "function" == typeof e.schedule }
            var N = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i }
                    return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this) } }, { key: "_error", value: function(e) { this.parent.notifyError(e, this), this.unsubscribe() } }, { key: "_complete", value: function() { this.parent.notifyComplete(this), this.unsubscribe() } }]), t
                }(g),
                D = function(e) {
                    return function(t) {
                        for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                        t.closed || t.complete()
                    }
                },
                M = function(e) { return function(t) { return e.then((function(e) { t.closed || (t.next(e), t.complete()) }), (function(e) { return t.error(e) })).then(null, a), t } };
            var U = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
                j = function(e) { return function(t) { for (var n = e[U]();;) { var r = n.next(); if (r.done) { t.complete(); break } if (t.next(r.value), t.closed) break } return "function" == typeof n.return && t.add((function() { n.return && n.return() })), t } },
                L = function(e) { return function(t) { var n = e[m](); if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return n.subscribe(t) } },
                H = function(e) { return e && "number" == typeof e.length && "function" != typeof e };

            function V(e) { return !!e && "function" != typeof e.subscribe && "function" == typeof e.then }
            var z = function(e) { if (e instanceof b) return function(t) { return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t) }; if (e && "function" == typeof e[m]) return L(e); if (H(e)) return D(e); if (V(e)) return M(e); if (e && "function" == typeof e[U]) return j(e); var t = s(e) ? "an invalid object" : "'".concat(e, "'"); throw new TypeError("You provided ".concat(t, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.") };

            function F(e, t, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new N(e, n, r); if (!i.closed) return z(t)(i) }
            var B = function(e) {
                function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                return _inherits(t, e), _createClass(t, [{ key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }, { key: "notifyError", value: function(e, t) { this.destination.error(e) } }, { key: "notifyComplete", value: function(e) { this.destination.complete() } }]), t
            }(g);

            function q(e, t) { return function(n) { if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new Z(e, t)) } }
            var Z = function() {
                    function e(t, n) { _classCallCheck(this, e), this.project = t, this.thisArg = n }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new G(e, this.project, this.thisArg)) } }]), e
                }(),
                G = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, i.count = 0, i.thisArg = r || _assertThisInitialized(i), i }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            var t;
                            try { t = this.project.call(this.thisArg, e, this.count++) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(t)
                        }
                    }]), t
                }(g);

            function W(e, t) {
                return new b(t ? function(n) {
                    var r = new d,
                        i = 0;
                    return r.add(t.schedule((function() { i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete() }))), r
                } : D(e))
            }

            function Q(e, t) {
                if (!t) return e instanceof b ? e : new b(z(e));
                if (null != e) {
                    if (function(e) { return e && "function" == typeof e[m] }(e)) return function(e, t) {
                        return new b(t ? function(n) {
                            var r = new d;
                            return r.add(t.schedule((function() {
                                var i = e[m]();
                                r.add(i.subscribe({ next: function(e) { r.add(t.schedule((function() { return n.next(e) }))) }, error: function(e) { r.add(t.schedule((function() { return n.error(e) }))) }, complete: function() { r.add(t.schedule((function() { return n.complete() }))) } }))
                            }))), r
                        } : L(e))
                    }(e, t);
                    if (V(e)) return function(e, t) { return new b(t ? function(n) { var r = new d; return r.add(t.schedule((function() { return e.then((function(e) { r.add(t.schedule((function() { n.next(e), r.add(t.schedule((function() { return n.complete() }))) }))) }), (function(e) { r.add(t.schedule((function() { return n.error(e) }))) })) }))), r } : M(e)) }(e, t);
                    if (H(e)) return W(e, t);
                    if (function(e) { return e && "function" == typeof e[U] }(e) || "string" == typeof e) return function(e, t) {
                        if (!e) throw new Error("Iterable cannot be null");
                        return new b(t ? function(n) {
                            var r, i = new d;
                            return i.add((function() { r && "function" == typeof r.return && r.return() })), i.add(t.schedule((function() {
                                r = e[U](), i.add(t.schedule((function() {
                                    if (!n.closed) {
                                        var e, t;
                                        try {
                                            var i = r.next();
                                            e = i.value, t = i.done
                                        } catch (o) { return void n.error(o) }
                                        t ? n.complete() : (n.next(e), this.schedule())
                                    }
                                })))
                            }))), i
                        } : j(e))
                    }(e, t)
                }
                throw new TypeError((null !== e && typeof e || e) + " is not observable")
            }

            function K(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return "function" == typeof t ? function(r) { return r.pipe(K((function(n, r) { return Q(e(n, r)).pipe(q((function(e, i) { return t(n, e, r, i) }))) }), n)) } : ("number" == typeof t && (n = t), function(t) { return t.lift(new J(e, n)) }) }
            var J = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
                        _classCallCheck(this, e), this.project = t, this.concurrent = n
                    }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Y(e, this.project, this.concurrent)) } }]), e
                }(),
                Y = function(e) {
                    function t(e, n) { var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, r.concurrent = i, r.hasCompleted = !1, r.buffer = [], r.active = 0, r.index = 0, r }
                    return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e) } }, {
                        key: "_tryNext",
                        value: function(e) {
                            var t, n = this.index++;
                            try { t = this.project(e, n) } catch (r) { return void this.destination.error(r) }
                            this.active++, this._innerSub(t, e, n)
                        }
                    }, {
                        key: "_innerSub",
                        value: function(e, t, n) {
                            var r = new N(this, void 0, void 0);
                            this.destination.add(r), F(this, e, t, n, r)
                        }
                    }, { key: "_complete", value: function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() } }, { key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }, {
                        key: "notifyComplete",
                        value: function(e) {
                            var t = this.buffer;
                            this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                        }
                    }]), t
                }(B);

            function $(e) { return e }

            function X() { return K($, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY) }

            function ee() { return function(e) { return e.lift(new te(e)) } }
            var te = function() {
                    function e(t) { _classCallCheck(this, e), this.connectable = t }
                    return _createClass(e, [{
                        key: "call",
                        value: function(e, t) {
                            var n = this.connectable;
                            n._refCount++;
                            var r = new ne(e, n),
                                i = t.subscribe(r);
                            return r.closed || (r.connection = n.connect()), i
                        }
                    }]), e
                }(),
                ne = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).connectable = n, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_unsubscribe",
                        value: function() {
                            var e = this.connectable;
                            if (e) {
                                this.connectable = null;
                                var t = e._refCount;
                                if (t <= 0) this.connection = null;
                                else if (e._refCount = t - 1, t > 1) this.connection = null;
                                else {
                                    var n = this.connection,
                                        r = e._connection;
                                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                                }
                            } else this.connection = null
                        }
                    }]), t
                }(g),
                re = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r }
                    return _inherits(t, e), _createClass(t, [{ key: "_subscribe", value: function(e) { return this.getSubject().subscribe(e) } }, { key: "getSubject", value: function() { var e = this._subject; return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject } }, { key: "connect", value: function() { var e = this._connection; return e || (this._isComplete = !1, (e = this._connection = new d).add(this.source.subscribe(new oe(this.getSubject(), this))), e.closed ? (this._connection = null, e = d.EMPTY) : this._connection = e), e } }, { key: "refCount", value: function() { return ee()(this) } }]), t
                }(b).prototype,
                ie = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: re._subscribe }, _isComplete: { value: re._isComplete, writable: !0 }, getSubject: { value: re.getSubject }, connect: { value: re.connect }, refCount: { value: re.refCount } },
                oe = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).connectable = n, r }
                    return _inherits(t, e), _createClass(t, [{ key: "_error", value: function(e) { this._unsubscribe(), _get(_getPrototypeOf(t.prototype), "_error", this).call(this, e) } }, { key: "_complete", value: function() { this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(t.prototype), "_complete", this).call(this) } }, {
                        key: "_unsubscribe",
                        value: function() {
                            var e = this.connectable;
                            if (e) {
                                this.connectable = null;
                                var t = e._connection;
                                e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                            }
                        }
                    }]), t
                }(P);

            function ae() { return new A }
            var le = "__parameters__";

            function ue(e, t, n) {
                var r = function(e) { return function() { if (e) { var t = e.apply(void 0, arguments); for (var n in t) this[n] = t[n] } } }(t);

                function i() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (this instanceof i) return r.apply(this, t), this;
                    var o = _construct(i, t);
                    return a.annotation = o, a;

                    function a(e, t, n) { for (var r = e.hasOwnProperty(le) ? e[le] : Object.defineProperty(e, le, { value: [] })[le]; r.length <= n;) r.push(null); return (r[n] = r[n] || []).push(o), e }
                }
                return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
            }
            var se = ue("Inject", (function(e) { return { token: e } })),
                ce = ue("Optional"),
                he = ue("Self"),
                fe = ue("SkipSelf"),
                de = function(e) { return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e }({});

            function ve(e) {
                for (var t in e)
                    if (e[t] === ve) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function pe(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 } }

            function ge(e) { var t = e[ye]; return t && t.token === e ? t : null }
            var ye = ve({ ngInjectableDef: ve });

            function me(e) { if ("string" == typeof e) return e; if (e instanceof Array) return "[" + e.map(me).join(", ") + "]"; if (null == e) return "" + e; if (e.overriddenName) return "".concat(e.overriddenName); if (e.name) return "".concat(e.name); var t = e.toString(); if (null == t) return "" + t; var n = t.indexOf("\n"); return -1 === n ? t : t.substring(0, n) }
            var _e = ve({ __forward_ref__: ve });

            function ke(e) { return e.__forward_ref__ = ke, e.toString = function() { return me(this()) }, e }

            function Ce(e) { var t = e; return "function" == typeof t && t.hasOwnProperty(_e) && t.__forward_ref__ === ke ? t() : e }
            var we, be = "undefined" != typeof globalThis && globalThis,
                Se = "undefined" != typeof window && window,
                xe = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Ee = "undefined" != typeof global && global,
                Te = be || Ee || Se || xe,
                Re = function() {
                    function e(t, n) { _classCallCheck(this, e), this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.ngInjectableDef = pe({ token: this, providedIn: n.providedIn || "root", factory: n.factory })) }
                    return _createClass(e, [{ key: "toString", value: function() { return "InjectionToken ".concat(this._desc) } }]), e
                }(),
                Pe = new Re("INJECTOR", -1),
                Ae = new Object,
                Oe = /\n/gm,
                Ie = "\u0275",
                Ne = "__source",
                De = ve({ provide: String, useValue: ve }),
                Me = void 0;

            function Ue(e) { var t = Me; return Me = e, t }

            function je(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de.Default; if (void 0 === Me) throw new Error("inject() must be called from an injection context"); return null === Me ? function(e, t, n) { var r = ge(e); if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value; if (n & de.Optional) return null; throw new Error("Injector: NOT_FOUND [".concat(me(e), "]")) }(e, 0, t) : Me.get(e, t & de.Optional ? null : void 0, t) }

            function Le(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de.Default; return (we || je)(e, t) }
            var He = function() {
                function e() { _classCallCheck(this, e) }
                return _createClass(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ae; if (t === Ae) { var n = new Error("NullInjectorError: No provider for ".concat(me(e), "!")); throw n.name = "NullInjectorError", n } return t } }]), e
            }();

            function Ve(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e && "\n" === e.charAt(0) && e.charAt(1) == Ie ? e.substr(2) : e;
                var i = me(t);
                if (t instanceof Array) i = t.map(me).join(" -> ");
                else if ("object" == typeof t) {
                    var o = [];
                    for (var a in t)
                        if (t.hasOwnProperty(a)) {
                            var l = t[a];
                            o.push(a + ":" + ("string" == typeof l ? JSON.stringify(l) : me(l)))
                        }
                    i = "{".concat(o.join(", "), "}")
                }
                return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(e.replace(Oe, "\n  "))
            }
            var ze = function e() { _classCallCheck(this, e) },
                Fe = function e() { _classCallCheck(this, e) };

            function Be(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n) }

            function qe(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0] }
            var Ze = function() { var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 }; return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e }(),
                Ge = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Te),
                We = "ngDebugContext",
                Qe = "ngOriginalError",
                Ke = "ngErrorLogger";

            function Je(e) { return e[We] }

            function Ye(e) { return e[Qe] }

            function $e(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                e.error.apply(e, n)
            }
            var Xe = function() {
                    function e() { _classCallCheck(this, e), this._console = console }
                    return _createClass(e, [{
                        key: "handleError",
                        value: function(e) {
                            var t = this._findOriginalError(e),
                                n = this._findContext(e),
                                r = function(e) { return e[Ke] || $e }(e);
                            r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                        }
                    }, { key: "_findContext", value: function(e) { return e ? Je(e) ? Je(e) : this._findContext(Ye(e)) : null } }, { key: "_findOriginalError", value: function(e) { for (var t = Ye(e); t && Ye(t);) t = Ye(t); return t } }]), e
                }(),
                et = !0,
                tt = !1;

            function nt() { return tt = !0, et }
            var rt = function() {
                    function e(t) {
                        if (_classCallCheck(this, e), this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            var n = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(n), this.inertBodyElement = this.inertDocument.createElement("body"), n.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (e) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    return _createClass(e, [{
                        key: "getInertBodyElement_XHR",
                        value: function(e) {
                            e = "<body><remove></remove>" + e + "</body>";
                            try { e = encodeURI(e) } catch (r) { return null }
                            var t = new XMLHttpRequest;
                            t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(void 0);
                            var n = t.response.body;
                            return n.removeChild(n.firstChild), n
                        }
                    }, { key: "getInertBodyElement_DOMParser", value: function(e) { e = "<body><remove></remove>" + e + "</body>"; try { var t = (new window.DOMParser).parseFromString(e, "text/html").body; return t.removeChild(t.firstChild), t } catch (n) { return null } } }, { key: "getInertBodyElement_InertDocument", value: function(e) { var t = this.inertDocument.createElement("template"); return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement) } }, { key: "stripCustomNsAttrs", value: function(e) { for (var t = e.attributes, n = t.length - 1; 0 < n; n--) { var r = t.item(n).name; "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r) } for (var i = e.firstChild; i;) i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i), i = i.nextSibling } }]), e
                }(),
                it = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                ot = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function at(e) { return (e = String(e)).match(it) || e.match(ot) ? e : (nt() && console.warn("WARNING: sanitizing unsafe URL value ".concat(e, " (see http://g.co/ng/security#xss)")), "unsafe:" + e) }

            function lt(e) {
                var t = {},
                    n = !0,
                    r = !1,
                    i = void 0;
                try { for (var o, a = e.split(",")[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { t[o.value] = !0 } } catch (l) { r = !0, i = l } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } }
                return t
            }

            function ut() { for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; for (var i = 0, o = n; i < o.length; i++) { var a = o[i]; for (var l in a) a.hasOwnProperty(l) && (e[l] = !0) } return e }
            var st, ct = lt("area,br,col,hr,img,wbr"),
                ht = lt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                ft = lt("rp,rt"),
                dt = ut(ft, ht),
                vt = ut(ct, ut(ht, lt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), ut(ft, lt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), dt),
                pt = lt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                gt = lt("srcset"),
                yt = ut(pt, gt, lt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), lt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                mt = lt("script,style,template"),
                _t = function() {
                    function e() { _classCallCheck(this, e), this.sanitizedSomething = !1, this.buf = [] }
                    return _createClass(e, [{
                        key: "sanitizeChildren",
                        value: function(e) {
                            for (var t = e.firstChild, n = !0; t;)
                                if (t.nodeType === Node.ELEMENT_NODE ? n = this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, n && t.firstChild) t = t.firstChild;
                                else
                                    for (; t;) {
                                        t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                                        var r = this.checkClobberedElement(t, t.nextSibling);
                                        if (r) { t = r; break }
                                        t = this.checkClobberedElement(t, t.parentNode)
                                    }
                            return this.buf.join("")
                        }
                    }, {
                        key: "startElement",
                        value: function(e) {
                            var t = e.nodeName.toLowerCase();
                            if (!vt.hasOwnProperty(t)) return this.sanitizedSomething = !0, !mt.hasOwnProperty(t);
                            this.buf.push("<"), this.buf.push(t);
                            for (var n, r = e.attributes, i = 0; i < r.length; i++) {
                                var o = r.item(i),
                                    a = o.name,
                                    l = a.toLowerCase();
                                if (yt.hasOwnProperty(l)) {
                                    var u = o.value;
                                    pt[l] && (u = at(u)), gt[l] && (n = u, u = (n = String(n)).split(",").map((function(e) { return at(e.trim()) })).join(", ")), this.buf.push(" ", a, '="', wt(u), '"')
                                } else this.sanitizedSomething = !0
                            }
                            return this.buf.push(">"), !0
                        }
                    }, {
                        key: "endElement",
                        value: function(e) {
                            var t = e.nodeName.toLowerCase();
                            vt.hasOwnProperty(t) && !ct.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
                        }
                    }, { key: "chars", value: function(e) { this.buf.push(wt(e)) } }, { key: "checkClobberedElement", value: function(e, t) { if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: ".concat(e.outerHTML)); return t } }]), e
                }(),
                kt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Ct = /([^\#-~ |!])/g;

            function wt(e) { return e.replace(/&/g, "&amp;").replace(kt, (function(e) { return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" })).replace(Ct, (function(e) { return "&#" + e.charCodeAt(0) + ";" })).replace(/</g, "&lt;").replace(/>/g, "&gt;") }

            function bt(e) { return "content" in e && function(e) { return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName }(e) ? e.content : null }
            var St = function() { var e = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 }; return e[e.NONE] = "NONE", e[e.HTML] = "HTML", e[e.STYLE] = "STYLE", e[e.SCRIPT] = "SCRIPT", e[e.URL] = "URL", e[e.RESOURCE_URL] = "RESOURCE_URL", e }(),
                xt = function e() { _classCallCheck(this, e) },
                Et = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                Tt = /^url\(([^)]+)\)$/,
                Rt = /([A-Z])/g;

            function Pt(e) { try { return null != e ? e.toString().slice(0, 30) : e } catch (t) { return "[ERROR] Exception while trying to serialize the value" } }
            var At = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return Ot() }, e }(),
                Ot = function() {},
                It = new Re("The presence of this token marks an injector as being the root injector."),
                Nt = function(e, t, n) { return new Ht(e, t, n) },
                Dt = function() {
                    var e = function() {
                        function e() { _classCallCheck(this, e) }
                        return _createClass(e, null, [{ key: "create", value: function(e, t) { return Array.isArray(e) ? Nt(e, t, "") : Nt(e.providers, e.parent, e.name || "") } }]), e
                    }();
                    return e.THROW_IF_NOT_FOUND = Ae, e.NULL = new He, e.ngInjectableDef = pe({ token: e, providedIn: "any", factory: function() { return Le(Pe) } }), e.__NG_ELEMENT_ID__ = -1, e
                }(),
                Mt = function(e) { return e },
                Ut = [],
                jt = Mt,
                Lt = function() { return Array.prototype.slice.call(arguments) },
                Ht = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dt.NULL,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        _classCallCheck(this, e), this.parent = n, this.source = r;
                        var i = this._records = new Map;
                        i.set(Dt, { token: Dt, fn: Mt, deps: Ut, value: this, useNew: !1 }), i.set(Pe, { token: Pe, fn: Mt, deps: Ut, value: this, useNew: !1 }),
                            function e(t, n) {
                                if (n)
                                    if ((n = Ce(n)) instanceof Array)
                                        for (var r = 0; r < n.length; r++) e(t, n[r]);
                                    else {
                                        if ("function" == typeof n) throw zt("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw zt("Unexpected provider", n);
                                        var i = Ce(n.provide),
                                            o = function(e) {
                                                var t = function(e) {
                                                        var t = Ut,
                                                            n = e.deps;
                                                        if (n && n.length) {
                                                            t = [];
                                                            for (var r = 0; r < n.length; r++) {
                                                                var i = 6,
                                                                    o = Ce(n[r]);
                                                                if (o instanceof Array)
                                                                    for (var a = 0, l = o; a < l.length; a++) {
                                                                        var u = l[a];
                                                                        u instanceof ce || u == ce ? i |= 1 : u instanceof fe || u == fe ? i &= -3 : u instanceof he || u == he ? i &= -5 : o = u instanceof se ? u.token : Ce(u)
                                                                    }
                                                                t.push({ token: o, options: i })
                                                            }
                                                        } else if (e.useExisting) t = [{ token: Ce(e.useExisting), options: 6 }];
                                                        else if (!(n || De in e)) throw zt("'deps' required", e);
                                                        return t
                                                    }(e),
                                                    n = Mt,
                                                    r = Ut,
                                                    i = !1,
                                                    o = Ce(e.provide);
                                                if (De in e) r = e.useValue;
                                                else if (e.useFactory) n = e.useFactory;
                                                else if (e.useExisting);
                                                else if (e.useClass) i = !0, n = Ce(e.useClass);
                                                else {
                                                    if ("function" != typeof o) throw zt("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                                                    i = !0, n = o
                                                }
                                                return { deps: t, fn: n, useNew: i, value: r }
                                            }(n);
                                        if (!0 === n.multi) {
                                            var a = t.get(i);
                                            if (a) { if (a.fn !== Lt) throw Vt(i) } else t.set(i, a = { token: n.provide, deps: [], useNew: !1, fn: Lt, value: Ut });
                                            a.deps.push({ token: i = n, options: 6 })
                                        }
                                        var l = t.get(i);
                                        if (l && l.fn == Lt) throw Vt(i);
                                        t.set(i, o)
                                    }
                            }(i, t)
                    }
                    return _createClass(e, [{
                        key: "get",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de.Default,
                                r = this._records.get(e);
                            try {
                                return function e(t, n, r, i, o, a) {
                                    try {
                                        return function(t, n, r, i, o, a) {
                                            var l;
                                            if (!n || a & de.SkipSelf) a & de.Self || (l = i.get(t, o, de.Default));
                                            else {
                                                if ((l = n.value) == jt) throw Error("\u0275Circular dependency");
                                                if (l === Ut) {
                                                    n.value = jt;
                                                    var u = n.useNew,
                                                        s = n.fn,
                                                        c = n.deps,
                                                        h = Ut;
                                                    if (c.length) {
                                                        h = [];
                                                        for (var f = 0; f < c.length; f++) {
                                                            var d = c[f],
                                                                v = d.options,
                                                                p = 2 & v ? r.get(d.token) : void 0;
                                                            h.push(e(d.token, p, r, p || 4 & v ? i : Dt.NULL, 1 & v ? null : Dt.THROW_IF_NOT_FOUND, de.Default))
                                                        }
                                                    }
                                                    n.value = l = u ? _construct(s, _toConsumableArray(h)) : s.apply(void 0, h)
                                                }
                                            }
                                            return l
                                        }(t, n, r, i, o, a)
                                    } catch (l) { throw l instanceof Error || (l = new Error(l)), (l.ngTempTokenPath = l.ngTempTokenPath || []).unshift(t), n && n.value == jt && (n.value = Ut), l }
                                }(e, r, this._records, this.parent, t, n)
                            } catch (i) { return function(e, t, n, r) { var i = e.ngTempTokenPath; throw t[Ne] && i.unshift(t[Ne]), e.message = Ve("\n" + e.message, i, "StaticInjectorError", r), e.ngTokenPath = i, e.ngTempTokenPath = null, e }(i, e, 0, this.source) }
                        }
                    }, { key: "toString", value: function() { var e = []; return this._records.forEach((function(t, n) { return e.push(me(n)) })), "StaticInjector[".concat(e.join(", "), "]") } }]), e
                }();

            function Vt(e) { return zt("Cannot mix multi providers and regular providers", e) }

            function zt(e, t) { return new Error(Ve(e, t, "StaticInjectorError")) }
            var Ft = new Re("AnalyzeForEntryComponents"),
                Bt = null;

            function qt() {
                if (!Bt) {
                    var e = Te.Symbol;
                    if (e && e.iterator) Bt = e.iterator;
                    else
                        for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) { var r = t[n]; "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Bt = r) }
                }
                return Bt
            }

            function Zt(e, t) { return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t) }

            function Gt(e, t) {
                var n = Qt(e),
                    r = Qt(t);
                return n && r ? function(e, t, n) {
                    for (var r = e[qt()](), i = t[qt()]();;) {
                        var o = r.next(),
                            a = i.next();
                        if (o.done && a.done) return !0;
                        if (o.done || a.done) return !1;
                        if (!n(o.value, a.value)) return !1
                    }
                }(e, t, Gt) : !(n || !(e && ("object" == typeof e || "function" == typeof e)) || r || !(t && ("object" == typeof t || "function" == typeof t))) || Zt(e, t)
            }
            var Wt = function() {
                function e(t) { _classCallCheck(this, e), this.wrapped = t }
                return _createClass(e, null, [{ key: "wrap", value: function(t) { return new e(t) } }, { key: "unwrap", value: function(t) { return e.isWrapped(t) ? t.wrapped : t } }, { key: "isWrapped", value: function(t) { return t instanceof e } }]), e
            }();

            function Qt(e) { return !!Kt(e) && (Array.isArray(e) || !(e instanceof Map) && qt() in e) }

            function Kt(e) { return null !== e && ("function" == typeof e || "object" == typeof e) }

            function Jt(e) { return !!e && "function" == typeof e.then }

            function Yt(e) { return !!e && "function" == typeof e.subscribe }
            var $t = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.previousValue = t, this.currentValue = n, this.firstChange = r }
                    return _createClass(e, [{ key: "isFirstChange", value: function() { return this.firstChange } }]), e
                }(),
                Xt = function e() { _classCallCheck(this, e) },
                en = function e() { _classCallCheck(this, e) };

            function tn(e) { var t = Error("No component factory found for ".concat(me(e), ". Did you add it to @NgModule.entryComponents?")); return t[nn] = e, t }
            var nn = "ngComponent",
                rn = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "resolveComponentFactory", value: function(e) { throw tn(e) } }]), e
                }(),
                on = function() { var e = function e() { _classCallCheck(this, e) }; return e.NULL = new rn, e }(),
                an = function() {
                    function e(t, n, r) {
                        _classCallCheck(this, e), this._parent = n, this._ngModule = r, this._factories = new Map;
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return _createClass(e, [{ key: "resolveComponentFactory", value: function(e) { var t = this._factories.get(e); if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw tn(e); return new ln(t, this._ngModule) } }]), e
                }(),
                ln = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r }
                    return _inherits(t, e), _createClass(t, [{ key: "create", value: function(e, t, n, r) { return this.factory.create(e, t, n, r || this.ngModule) } }]), t
                }(en);

            function un() {}
            var sn = function() { var e = function e(t) { _classCallCheck(this, e), this.nativeElement = t }; return e.__NG_ELEMENT_ID__ = function() { return cn(e) }, e }(),
                cn = un,
                hn = function e() { _classCallCheck(this, e) },
                fn = function() { var e = { Important: 1, DashCase: 2 }; return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e }(),
                dn = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return vn() }, e }(),
                vn = un,
                pn = new function e(t) { _classCallCheck(this, e), this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".") }("8.2.14"),
                gn = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "supports", value: function(e) { return Qt(e) } }, { key: "create", value: function(e) { return new mn(e) } }]), e
                }(),
                yn = function(e, t) { return t },
                mn = function() {
                    function e(t) { _classCallCheck(this, e), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || yn }
                    return _createClass(e, [{ key: "forEachItem", value: function(e) { var t; for (t = this._itHead; null !== t; t = t._next) e(t) } }, {
                        key: "forEachOperation",
                        value: function(e) {
                            for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n;) {
                                var o = !n || t && t.currentIndex < wn(n, r, i) ? t : n,
                                    a = wn(o, r, i),
                                    l = o.currentIndex;
                                if (o === n) r--, n = n._nextRemoved;
                                else if (t = t._next, null == o.previousIndex) r++;
                                else {
                                    i || (i = []);
                                    var u = a - r,
                                        s = l - r;
                                    if (u != s) {
                                        for (var c = 0; c < u; c++) {
                                            var h = c < i.length ? i[c] : i[c] = 0,
                                                f = h + c;
                                            s <= f && f < u && (i[c] = h + 1)
                                        }
                                        i[o.previousIndex] = s - u
                                    }
                                }
                                a !== l && e(o, a, l)
                            }
                        }
                    }, { key: "forEachPreviousItem", value: function(e) { var t; for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t) } }, { key: "forEachAddedItem", value: function(e) { var t; for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t) } }, { key: "forEachMovedItem", value: function(e) { var t; for (t = this._movesHead; null !== t; t = t._nextMoved) e(t) } }, { key: "forEachRemovedItem", value: function(e) { var t; for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t) } }, { key: "forEachIdentityChange", value: function(e) { var t; for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t) } }, { key: "diff", value: function(e) { if (null == e && (e = []), !Qt(e)) throw new Error("Error trying to diff '".concat(me(e), "'. Only arrays and iterables are allowed")); return this.check(e) ? this : null } }, { key: "onDestroy", value: function() {} }, {
                        key: "check",
                        value: function(e) {
                            var t = this;
                            this._reset();
                            var n, r, i, o = this._itHead,
                                a = !1;
                            if (Array.isArray(e)) { this.length = e.length; for (var l = 0; l < this.length; l++) i = this._trackByFn(l, r = e[l]), null !== o && Zt(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, l)), Zt(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, l), a = !0), o = o._next } else n = 0,
                                function(e, t) {
                                    if (Array.isArray(e))
                                        for (var n = 0; n < e.length; n++) t(e[n]);
                                    else
                                        for (var r, i = e[qt()](); !(r = i.next()).done;) t(r.value)
                                }(e, (function(e) { i = t._trackByFn(n, e), null !== o && Zt(o.trackById, i) ? (a && (o = t._verifyReinsertion(o, e, i, n)), Zt(o.item, e) || t._addIdentityChange(o, e)) : (o = t._mismatch(o, e, i, n), a = !0), o = o._next, n++ })), this.length = n;
                            return this._truncate(o), this.collection = e, this.isDirty
                        }
                    }, {
                        key: "_reset",
                        value: function() {
                            if (this.isDirty) {
                                var e, t;
                                for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                                for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                            }
                        }
                    }, { key: "_mismatch", value: function(e, t, n, r) { var i; return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Zt(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Zt(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new _n(t, n), i, r), e } }, { key: "_verifyReinsertion", value: function(e, t, n, r) { var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e } }, {
                        key: "_truncate",
                        value: function(e) {
                            for (; null !== e;) {
                                var t = e._next;
                                this._addToRemovals(this._unlink(e)), e = t
                            }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                        }
                    }, {
                        key: "_reinsertAfter",
                        value: function(e, t, n) {
                            null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                            var r = e._prevRemoved,
                                i = e._nextRemoved;
                            return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                        }
                    }, { key: "_moveAfter", value: function(e, t, n) { return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e } }, { key: "_addAfter", value: function(e, t, n) { return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e } }, { key: "_insertAfter", value: function(e, t, n) { var r = null === t ? this._itHead : t._next; return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Cn), this._linkedRecords.put(e), e.currentIndex = n, e } }, { key: "_remove", value: function(e) { return this._addToRemovals(this._unlink(e)) } }, {
                        key: "_unlink",
                        value: function(e) {
                            null !== this._linkedRecords && this._linkedRecords.remove(e);
                            var t = e._prev,
                                n = e._next;
                            return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                        }
                    }, { key: "_addToMoves", value: function(e, t) { return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e) } }, { key: "_addToRemovals", value: function(e) { return null === this._unlinkedRecords && (this._unlinkedRecords = new Cn), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e } }, { key: "_addIdentityChange", value: function(e, t) { return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e } }, { key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead } }]), e
                }(),
                _n = function e(t, n) { _classCallCheck(this, e), this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null },
                kn = function() {
                    function e() { _classCallCheck(this, e), this._head = null, this._tail = null }
                    return _createClass(e, [{ key: "add", value: function(e) { null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e) } }, {
                        key: "get",
                        value: function(e, t) {
                            var n;
                            for (n = this._head; null !== n; n = n._nextDup)
                                if ((null === t || t <= n.currentIndex) && Zt(n.trackById, e)) return n;
                            return null
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            var t = e._prevDup,
                                n = e._nextDup;
                            return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                        }
                    }]), e
                }(),
                Cn = function() {
                    function e() { _classCallCheck(this, e), this.map = new Map }
                    return _createClass(e, [{
                        key: "put",
                        value: function(e) {
                            var t = e.trackById,
                                n = this.map.get(t);
                            n || (n = new kn, this.map.set(t, n)), n.add(e)
                        }
                    }, { key: "get", value: function(e, t) { var n = this.map.get(e); return n ? n.get(e, t) : null } }, { key: "remove", value: function(e) { var t = e.trackById; return this.map.get(t).remove(e) && this.map.delete(t), e } }, { key: "clear", value: function() { this.map.clear() } }, { key: "isEmpty", get: function() { return 0 === this.map.size } }]), e
                }();

            function wn(e, t, n) { var r = e.previousIndex; if (null === r) return r; var i = 0; return n && r < n.length && (i = n[r]), r + t + i }
            var bn = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "supports", value: function(e) { return e instanceof Map || Kt(e) } }, { key: "create", value: function() { return new Sn } }]), e
                }(),
                Sn = function() {
                    function e() { _classCallCheck(this, e), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null }
                    return _createClass(e, [{ key: "forEachItem", value: function(e) { var t; for (t = this._mapHead; null !== t; t = t._next) e(t) } }, { key: "forEachPreviousItem", value: function(e) { var t; for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t) } }, { key: "forEachChangedItem", value: function(e) { var t; for (t = this._changesHead; null !== t; t = t._nextChanged) e(t) } }, { key: "forEachAddedItem", value: function(e) { var t; for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t) } }, { key: "forEachRemovedItem", value: function(e) { var t; for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t) } }, { key: "diff", value: function(e) { if (e) { if (!(e instanceof Map || Kt(e))) throw new Error("Error trying to diff '".concat(me(e), "'. Only maps and objects are allowed")) } else e = new Map; return this.check(e) ? this : null } }, { key: "onDestroy", value: function() {} }, {
                        key: "check",
                        value: function(e) {
                            var t = this;
                            this._reset();
                            var n = this._mapHead;
                            if (this._appendAfter = null, this._forEach(e, (function(e, r) {
                                    if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next;
                                    else {
                                        var i = t._getOrCreateRecordForKey(r, e);
                                        n = t._insertBeforeOrAppend(n, i)
                                    }
                                })), n) { n._prev && (n._prev._next = null), this._removalsHead = n; for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null }
                            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                        }
                    }, { key: "_insertBeforeOrAppend", value: function(e, t) { if (e) { var n = e._prev; return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e } return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null } }, {
                        key: "_getOrCreateRecordForKey",
                        value: function(e, t) {
                            if (this._records.has(e)) {
                                var n = this._records.get(e);
                                this._maybeAddToChanges(n, t);
                                var r = n._prev,
                                    i = n._next;
                                return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                            }
                            var o = new xn(e);
                            return this._records.set(e, o), o.currentValue = t, this._addToAdditions(o), o
                        }
                    }, {
                        key: "_reset",
                        value: function() {
                            if (this.isDirty) {
                                var e;
                                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                                for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                                for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                            }
                        }
                    }, { key: "_maybeAddToChanges", value: function(e, t) { Zt(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e)) } }, { key: "_addToAdditions", value: function(e) { null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e) } }, { key: "_addToChanges", value: function(e) { null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e) } }, { key: "_forEach", value: function(e, t) { e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((function(n) { return t(e[n], n) })) } }, { key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead } }]), e
                }(),
                xn = function e(t) { _classCallCheck(this, e), this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null },
                En = function() {
                    var e = function() {
                        function e(t) { _classCallCheck(this, e), this.factories = t }
                        return _createClass(e, [{ key: "find", value: function(e) { var t, n = this.factories.find((function(t) { return t.supports(e) })); if (null != n) return n; throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'")) } }], [{
                            key: "create",
                            value: function(t, n) {
                                if (null != n) {
                                    var r = n.factories.slice();
                                    t = t.concat(r)
                                }
                                return new e(t)
                            }
                        }, {
                            key: "extend",
                            value: function(t) {
                                return {
                                    provide: e,
                                    useFactory: function(n) { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return e.create(t, n) },
                                    deps: [
                                        [e, new fe, new ce]
                                    ]
                                }
                            }
                        }]), e
                    }();
                    return e.ngInjectableDef = pe({ token: e, providedIn: "root", factory: function() { return new e([new gn]) } }), e
                }(),
                Tn = function() {
                    var e = function() {
                        function e(t) { _classCallCheck(this, e), this.factories = t }
                        return _createClass(e, [{ key: "find", value: function(e) { var t = this.factories.find((function(t) { return t.supports(e) })); if (t) return t; throw new Error("Cannot find a differ supporting object '".concat(e, "'")) } }], [{
                            key: "create",
                            value: function(t, n) {
                                if (n) {
                                    var r = n.factories.slice();
                                    t = t.concat(r)
                                }
                                return new e(t)
                            }
                        }, {
                            key: "extend",
                            value: function(t) {
                                return {
                                    provide: e,
                                    useFactory: function(n) { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return e.create(t, n) },
                                    deps: [
                                        [e, new fe, new ce]
                                    ]
                                }
                            }
                        }]), e
                    }();
                    return e.ngInjectableDef = pe({ token: e, providedIn: "root", factory: function() { return new e([new bn]) } }), e
                }(),
                Rn = [new bn],
                Pn = new En([new gn]),
                An = new Tn(Rn),
                On = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return In(e, sn) }, e }(),
                In = un,
                Nn = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return Dn(e, sn) }, e }(),
                Dn = un;

            function Mn(e, t, n, r) {
                var i = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '".concat(t, "'. Current value: '").concat(n, "'.");
                return r && (i += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(e, t) { var n = new Error(e); return Un(n, t), n }(i, e)
            }

            function Un(e, t) { e[We] = t, e[Ke] = t.logError.bind(t) }

            function jn(e) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: ".concat(e)) }

            function Ln(e, t, n) {
                var r = e.state,
                    i = 1792 & r;
                return i === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : i === n
            }

            function Hn(e, t, n) { return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0) }

            function Vn(e, t) { return e.nodes[t] }

            function zn(e, t) { return e.nodes[t] }

            function Fn(e, t) { return e.nodes[t] }

            function Bn(e, t) { return e.nodes[t] }

            function qn(e, t) { return e.nodes[t] }
            var Zn = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 },
                Gn = function() {},
                Wn = new Map;

            function Qn(e) { var t = Wn.get(e); return t || (t = me(e) + "_" + Wn.size, Wn.set(e, t)), t }
            var Kn = "$$undefined",
                Jn = "$$empty";

            function Yn(e) { return { id: Kn, styles: e.styles, encapsulation: e.encapsulation, data: e.data } }
            var $n = 0;

            function Xn(e, t, n, r) { return !(!(2 & e.state) && Zt(e.oldValues[t.bindingIndex + n], r)) }

            function er(e, t, n, r) { return !!Xn(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0) }

            function tr(e, t, n, r) { var i = e.oldValues[t.bindingIndex + n]; if (1 & e.state || !Gt(i, r)) { var o = t.bindings[n].name; throw Mn(Zn.createDebugContext(e, t.nodeIndex), "".concat(o, ": ").concat(i), "".concat(o, ": ").concat(r), 0 != (1 & e.state)) } }

            function nr(e) { for (var t = e; t;) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent }

            function rr(e, t) { for (var n = e; n && n !== t;) n.state |= 64, n = n.viewContainerParent || n.parent }

            function ir(e, t, n, r) { try { return nr(33554432 & e.def.nodes[t].flags ? zn(e, t).componentView : e), Zn.handleEvent(e, t, n, r) } catch (i) { e.root.errorHandler.handleError(i) } }

            function or(e) { return e.parent ? zn(e.parent, e.parentNodeDef.nodeIndex) : null }

            function ar(e) { return e.parent ? e.parentNodeDef.parent : null }

            function lr(e, t) {
                switch (201347067 & t.flags) {
                    case 1:
                        return zn(e, t.nodeIndex).renderElement;
                    case 2:
                        return Vn(e, t.nodeIndex).renderText
                }
            }

            function ur(e) { return !!e.parent && !!(32768 & e.parentNodeDef.flags) }

            function sr(e) { return !(!e.parent || 32768 & e.parentNodeDef.flags) }

            function cr(e) {
                var t = {},
                    n = 0,
                    r = {};
                return e && e.forEach((function(e) {
                    var i = _slicedToArray(e, 2),
                        o = i[0],
                        a = i[1];
                    "number" == typeof o ? (t[o] = a, n |= function(e) { return 1 << e % 32 }(o)) : r[o] = a
                })), { matchedQueries: t, references: r, matchedQueryIds: n }
            }

            function hr(e, t) { return e.map((function(e) { var n, r, i; return Array.isArray(e) ? (i = (n = _slicedToArray(e, 2))[0], r = n[1]) : (i = 0, r = e), r && ("function" == typeof r || "object" == typeof r) && t && Object.defineProperty(r, Ne, { value: t, configurable: !0 }), { flags: i, token: r, tokenKey: Qn(r) } })) }

            function fr(e, t, n) { var r = n.renderParent; return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Ze.Native ? zn(e, n.renderParent.nodeIndex).renderElement : void 0 : t }
            var dr = new WeakMap;

            function vr(e) { var t = dr.get(e); return t || ((t = e((function() { return Gn }))).factory = e, dr.set(e, t)), t }

            function pr(e, t, n, r, i) { 3 === t && (n = e.renderer.parentNode(lr(e, e.def.lastRenderRootNode))), gr(e, t, 0, e.def.nodes.length - 1, n, r, i) }

            function gr(e, t, n, r, i, o, a) {
                for (var l = n; l <= r; l++) {
                    var u = e.def.nodes[l];
                    11 & u.flags && mr(e, u, t, i, o, a), l += u.childCount
                }
            }

            function yr(e, t, n, r, i, o) {
                for (var a = e; a && !ur(a);) a = a.parent;
                for (var l = a.parent, u = ar(a), s = u.nodeIndex + u.childCount, c = u.nodeIndex + 1; c <= s; c++) {
                    var h = l.def.nodes[c];
                    h.ngContentIndex === t && mr(l, h, n, r, i, o), c += h.childCount
                }
                if (!l.parent) {
                    var f = e.root.projectableNodes[t];
                    if (f)
                        for (var d = 0; d < f.length; d++) _r(e, f[d], n, r, i, o)
                }
            }

            function mr(e, t, n, r, i, o) {
                if (8 & t.flags) yr(e, t.ngContent.index, n, r, i, o);
                else {
                    var a = lr(e, t);
                    if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && _r(e, a, n, r, i, o), 32 & t.bindingFlags && _r(zn(e, t.nodeIndex).componentView, a, n, r, i, o)) : _r(e, a, n, r, i, o), 16777216 & t.flags)
                        for (var l = zn(e, t.nodeIndex).viewContainer._embeddedViews, u = 0; u < l.length; u++) pr(l[u], n, r, i, o);
                    1 & t.flags && !t.element.name && gr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, o)
                }
            }

            function _r(e, t, n, r, i, o) {
                var a = e.renderer;
                switch (n) {
                    case 1:
                        a.appendChild(r, t);
                        break;
                    case 2:
                        a.insertBefore(r, t, i);
                        break;
                    case 3:
                        a.removeChild(r, t);
                        break;
                    case 0:
                        o.push(t)
                }
            }
            var kr = /^:([^:]+):(.+)$/;

            function Cr(e) { if (":" === e[0]) { var t = e.match(kr); return [t[1], t[2]] } return ["", e] }

            function wr(e) { for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags; return t }

            function br(e, t, n, r, i, o, a, l, u, s, c, h, f, d, v, p, g, y, m, _) {
                switch (e) {
                    case 1:
                        return t + Sr(n) + r;
                    case 2:
                        return t + Sr(n) + r + Sr(i) + o;
                    case 3:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l;
                    case 4:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s;
                    case 5:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s + Sr(c) + h;
                    case 6:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s + Sr(c) + h + Sr(f) + d;
                    case 7:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s + Sr(c) + h + Sr(f) + d + Sr(v) + p;
                    case 8:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s + Sr(c) + h + Sr(f) + d + Sr(v) + p + Sr(g) + y;
                    case 9:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(u) + s + Sr(c) + h + Sr(f) + d + Sr(v) + p + Sr(g) + y + Sr(m) + _;
                    default:
                        throw new Error("Does not support more than 9 expressions")
                }
            }

            function Sr(e) { return null != e ? e.toString() : "" }
            var xr = new Object,
                Er = Qn(Dt),
                Tr = Qn(Pe),
                Rr = Qn(ze);

            function Pr(e, t, n, r) { return n = Ce(n), { index: -1, deps: hr(r, me(t)), flags: e, token: t, value: n } }

            function Ar(e, t) {
                var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dt.THROW_IF_NOT_FOUND,
                    o = Ue(e);
                try {
                    if (8 & t.flags) return t.token;
                    if (2 & t.flags && (i = null), 1 & t.flags) return e._parent.get(t.token, i);
                    var a = t.tokenKey;
                    switch (a) {
                        case Er:
                        case Tr:
                        case Rr:
                            return e
                    }
                    var l, u = e._def.providersByKey[a];
                    if (u) { var s = e._providers[u.index]; return void 0 === s && (s = e._providers[u.index] = Or(e, u)), s === xr ? void 0 : s }
                    if ((l = ge(t.token)) && (n = e, null != (r = l).providedIn && (function(e, t) { return e._def.modules.indexOf(t) > -1 }(n, r.providedIn) || "root" === r.providedIn && n._def.isRoot))) { var c = e._providers.length; return e._def.providers[c] = e._def.providersByKey[t.tokenKey] = { flags: 5120, value: l.factory, deps: [], index: c, token: t.token }, e._providers[c] = xr, e._providers[c] = Or(e, e._def.providersByKey[t.tokenKey]) }
                    return 4 & t.flags ? i : e._parent.get(t.token, i)
                } finally { Ue(o) }
            }

            function Or(e, t) {
                var n;
                switch (201347067 & t.flags) {
                    case 512:
                        n = function(e, t, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(Ar(e, n[0]));
                                case 2:
                                    return new t(Ar(e, n[0]), Ar(e, n[1]));
                                case 3:
                                    return new t(Ar(e, n[0]), Ar(e, n[1]), Ar(e, n[2]));
                                default:
                                    for (var i = new Array(r), o = 0; o < r; o++) i[o] = Ar(e, n[o]);
                                    return _construct(t, i)
                            }
                        }(e, t.value, t.deps);
                        break;
                    case 1024:
                        n = function(e, t, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return t();
                                case 1:
                                    return t(Ar(e, n[0]));
                                case 2:
                                    return t(Ar(e, n[0]), Ar(e, n[1]));
                                case 3:
                                    return t(Ar(e, n[0]), Ar(e, n[1]), Ar(e, n[2]));
                                default:
                                    for (var i = Array(r), o = 0; o < r; o++) i[o] = Ar(e, n[o]);
                                    return t.apply(void 0, i)
                            }
                        }(e, t.value, t.deps);
                        break;
                    case 2048:
                        n = Ar(e, t.deps[0]);
                        break;
                    case 256:
                        n = t.value
                }
                return n === xr || null === n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), void 0 === n ? xr : n
            }

            function Ir(e, t) { var n = e.viewContainer._embeddedViews; if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null; var r = n[t]; return r.viewContainerParent = null, qe(n, t), Zn.dirtyParentQueries(r), Dr(r), r }

            function Nr(e, t, n) {
                var r = t ? lr(t, t.def.lastRenderRootNode) : e.renderElement,
                    i = n.renderer.parentNode(r),
                    o = n.renderer.nextSibling(r);
                pr(n, 2, i, o, void 0)
            }

            function Dr(e) { pr(e, 3, null, null, void 0) }
            var Mr = new Object;

            function Ur(e, t, n, r, i, o) { return new jr(e, t, n, r, i, o) }
            var jr = function(e) {
                    function t(e, n, r, i, o, a) { var l; return _classCallCheck(this, t), (l = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).selector = e, l.componentType = n, l._inputs = i, l._outputs = o, l.ngContentSelectors = a, l.viewDefFactory = r, l }
                    return _inherits(t, e), _createClass(t, [{
                        key: "create",
                        value: function(e, t, n, r) {
                            if (!r) throw new Error("ngModule should be provided");
                            var i = vr(this.viewDefFactory),
                                o = i.nodes[0].element.componentProvider.nodeIndex,
                                a = Zn.createRootView(e, t || [], n, i, r, Mr),
                                l = Fn(a, o).instance;
                            return n && a.renderer.setAttribute(zn(a, 0).renderElement, "ng-version", pn.full), new Lr(a, new Fr(a), l)
                        }
                    }, {
                        key: "inputs",
                        get: function() {
                            var e = [],
                                t = this._inputs;
                            for (var n in t) e.push({ propName: n, templateName: t[n] });
                            return e
                        }
                    }, { key: "outputs", get: function() { var e = []; for (var t in this._outputs) e.push({ propName: t, templateName: this._outputs[t] }); return e } }]), t
                }(en),
                Lr = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._view = e, i._viewRef = n, i._component = r, i._elDef = i._view.def.nodes[0], i.hostView = n, i.changeDetectorRef = n, i.instance = r, i }
                    return _inherits(t, e), _createClass(t, [{ key: "destroy", value: function() { this._viewRef.destroy() } }, { key: "onDestroy", value: function(e) { this._viewRef.onDestroy(e) } }, { key: "location", get: function() { return new sn(zn(this._view, this._elDef.nodeIndex).renderElement) } }, { key: "injector", get: function() { return new Gr(this._view, this._elDef) } }, { key: "componentType", get: function() { return this._component.constructor } }]), t
                }(Xt);

            function Hr(e, t, n) { return new Vr(e, t, n) }
            var Vr = function() {
                function e(t, n, r) { _classCallCheck(this, e), this._view = t, this._elDef = n, this._data = r, this._embeddedViews = [] }
                return _createClass(e, [{
                    key: "clear",
                    value: function() {
                        for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
                            var t = Ir(this._data, e);
                            Zn.destroyView(t)
                        }
                    }
                }, { key: "get", value: function(e) { var t = this._embeddedViews[e]; if (t) { var n = new Fr(t); return n.attachToViewContainerRef(this), n } return null } }, { key: "createEmbeddedView", value: function(e, t, n) { var r = e.createEmbeddedView(t || {}); return this.insert(r, n), r } }, {
                    key: "createComponent",
                    value: function(e, t, n, r, i) {
                        var o = n || this.parentInjector;
                        i || e instanceof ln || (i = o.get(ze));
                        var a = e.create(o, r, void 0, i);
                        return this.insert(a.hostView, t), a
                    }
                }, {
                    key: "insert",
                    value: function(e, t) {
                        if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                        var n, r, i, o, a, l = e;
                        return n = this._view, r = this._data, i = t, o = l._view, a = r.viewContainer._embeddedViews, null == i && (i = a.length), o.viewContainerParent = n, Be(a, i, o),
                            function(e, t) {
                                var n = or(t);
                                if (n && n !== e && !(16 & t.state)) {
                                    t.state |= 16;
                                    var r = n.template._projectedViews;
                                    r || (r = n.template._projectedViews = []), r.push(t),
                                        function(e, t) { if (!(4 & t.flags)) { e.nodeFlags |= 4, t.flags |= 4; for (var n = t.parent; n;) n.childFlags |= 4, n = n.parent } }(t.parent.def, t.parentNodeDef)
                                }
                            }(r, o), Zn.dirtyParentQueries(o), Nr(r, i > 0 ? a[i - 1] : null, o), l.attachToViewContainerRef(this), e
                    }
                }, { key: "move", value: function(e, t) { if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); var n, r, i, o, a, l = this._embeddedViews.indexOf(e._view); return n = this._data, r = l, i = t, o = n.viewContainer._embeddedViews, a = o[r], qe(o, r), null == i && (i = o.length), Be(o, i, a), Zn.dirtyParentQueries(a), Dr(a), Nr(n, i > 0 ? o[i - 1] : null, a), e } }, { key: "indexOf", value: function(e) { return this._embeddedViews.indexOf(e._view) } }, {
                    key: "remove",
                    value: function(e) {
                        var t = Ir(this._data, e);
                        t && Zn.destroyView(t)
                    }
                }, { key: "detach", value: function(e) { var t = Ir(this._data, e); return t ? new Fr(t) : null } }, { key: "element", get: function() { return new sn(this._data.renderElement) } }, { key: "injector", get: function() { return new Gr(this._view, this._elDef) } }, { key: "parentInjector", get: function() { for (var e = this._view, t = this._elDef.parent; !t && e;) t = ar(e), e = e.parent; return e ? new Gr(e, t) : new Gr(this._view, null) } }, { key: "length", get: function() { return this._embeddedViews.length } }]), e
            }();

            function zr(e) { return new Fr(e) }
            var Fr = function() {
                function e(t) { _classCallCheck(this, e), this._view = t, this._viewContainerRef = null, this._appRef = null }
                return _createClass(e, [{ key: "markForCheck", value: function() { nr(this._view) } }, { key: "detach", value: function() { this._view.state &= -5 } }, {
                    key: "detectChanges",
                    value: function() {
                        var e = this._view.root.rendererFactory;
                        e.begin && e.begin();
                        try { Zn.checkAndUpdateView(this._view) } finally { e.end && e.end() }
                    }
                }, { key: "checkNoChanges", value: function() { Zn.checkNoChangesView(this._view) } }, { key: "reattach", value: function() { this._view.state |= 4 } }, { key: "onDestroy", value: function(e) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e) } }, { key: "destroy", value: function() { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Zn.destroyView(this._view) } }, { key: "detachFromAppRef", value: function() { this._appRef = null, Dr(this._view), Zn.dirtyParentQueries(this._view) } }, {
                    key: "attachToAppRef",
                    value: function(e) {
                        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = e
                    }
                }, {
                    key: "attachToViewContainerRef",
                    value: function(e) {
                        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = e
                    }
                }, { key: "rootNodes", get: function() { return pr(this._view, 0, void 0, void 0, e = []), e; var e } }, { key: "context", get: function() { return this._view.context } }, { key: "destroyed", get: function() { return 0 != (128 & this._view.state) } }]), e
            }();

            function Br(e, t) { return new qr(e, t) }
            var qr = function(e) {
                function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._parentView = e, r._def = n, r }
                return _inherits(t, e), _createClass(t, [{ key: "createEmbeddedView", value: function(e) { return new Fr(Zn.createEmbeddedView(this._parentView, this._def, this._def.element.template, e)) } }, { key: "elementRef", get: function() { return new sn(zn(this._parentView, this._def.nodeIndex).renderElement) } }]), t
            }(On);

            function Zr(e, t) { return new Gr(e, t) }
            var Gr = function() {
                function e(t, n) { _classCallCheck(this, e), this.view = t, this.elDef = n }
                return _createClass(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dt.THROW_IF_NOT_FOUND; return Zn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: e, tokenKey: Qn(e) }, t) } }]), e
            }();

            function Wr(e, t) { var n = e.def.nodes[t]; if (1 & n.flags) { var r = zn(e, n.nodeIndex); return n.element.template ? r.template : r.renderElement } if (2 & n.flags) return Vn(e, n.nodeIndex).renderText; if (20240 & n.flags) return Fn(e, n.nodeIndex).instance; throw new Error("Illegal state: read nodeValue for node index ".concat(t)) }

            function Qr(e) { return new Kr(e.renderer) }
            var Kr = function() {
                function e(t) { _classCallCheck(this, e), this.delegate = t }
                return _createClass(e, [{ key: "selectRootElement", value: function(e) { return this.delegate.selectRootElement(e) } }, {
                    key: "createElement",
                    value: function(e, t) {
                        var n = _slicedToArray(Cr(t), 2),
                            r = n[0],
                            i = n[1],
                            o = this.delegate.createElement(i, r);
                        return e && this.delegate.appendChild(e, o), o
                    }
                }, { key: "createViewRoot", value: function(e) { return e } }, { key: "createTemplateAnchor", value: function(e) { var t = this.delegate.createComment(""); return e && this.delegate.appendChild(e, t), t } }, { key: "createText", value: function(e, t) { var n = this.delegate.createText(t); return e && this.delegate.appendChild(e, n), n } }, { key: "projectNodes", value: function(e, t) { for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]) } }, { key: "attachViewAfter", value: function(e, t) { for (var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), i = 0; i < t.length; i++) this.delegate.insertBefore(n, t[i], r) } }, {
                    key: "detachView",
                    value: function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                r = this.delegate.parentNode(n);
                            this.delegate.removeChild(r, n)
                        }
                    }
                }, { key: "destroyView", value: function(e, t) { for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]) } }, { key: "listen", value: function(e, t, n) { return this.delegate.listen(e, t, n) } }, { key: "listenGlobal", value: function(e, t, n) { return this.delegate.listen(e, t, n) } }, { key: "setElementProperty", value: function(e, t, n) { this.delegate.setProperty(e, t, n) } }, {
                    key: "setElementAttribute",
                    value: function(e, t, n) {
                        var r = _slicedToArray(Cr(t), 2),
                            i = r[0],
                            o = r[1];
                        null != n ? this.delegate.setAttribute(e, o, n, i) : this.delegate.removeAttribute(e, o, i)
                    }
                }, { key: "setBindingDebugInfo", value: function(e, t, n) {} }, { key: "setElementClass", value: function(e, t, n) { n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t) } }, { key: "setElementStyle", value: function(e, t, n) { null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t) } }, { key: "invokeElementMethod", value: function(e, t, n) { e[t].apply(e, n) } }, { key: "setText", value: function(e, t) { this.delegate.setValue(e, t) } }, { key: "animate", value: function() { throw new Error("Renderer.animate is no longer supported!") } }]), e
            }();

            function Jr(e, t, n, r) { return new Yr(e, t, n, r) }
            var Yr = function() {
                    function e(t, n, r, i) {
                        _classCallCheck(this, e), this._moduleType = t, this._parent = n, this._bootstrapComponents = r, this._def = i, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(e) {
                                for (var t = e._def, n = e._providers = new Array(t.providers.length), r = 0; r < t.providers.length; r++) {
                                    var i = t.providers[r];
                                    4096 & i.flags || void 0 === n[r] && (n[r] = Or(e, i))
                                }
                            }(this)
                    }
                    return _createClass(e, [{
                        key: "get",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dt.THROW_IF_NOT_FOUND,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de.Default,
                                r = 0;
                            return n & de.SkipSelf ? r |= 1 : n & de.Self && (r |= 4), Ar(this, { token: e, tokenKey: Qn(e), flags: r }, t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (this._destroyed) throw new Error("The ng module ".concat(me(this.instance.constructor), " has already been destroyed."));
                            this._destroyed = !0,
                                function(e, t) {
                                    for (var n = e._def, r = new Set, i = 0; i < n.providers.length; i++)
                                        if (131072 & n.providers[i].flags) { var o = e._providers[i]; if (o && o !== xr) { var a = o.ngOnDestroy; "function" != typeof a || r.has(o) || (a.apply(o), r.add(o)) } }
                                }(this), this._destroyListeners.forEach((function(e) { return e() }))
                        }
                    }, { key: "onDestroy", value: function(e) { this._destroyListeners.push(e) } }, { key: "instance", get: function() { return this.get(this._moduleType) } }, { key: "componentFactoryResolver", get: function() { return this.get(on) } }]), e
                }(),
                $r = Qn((function e() { _classCallCheck(this, e) })),
                Xr = Qn(dn),
                ei = Qn(sn),
                ti = Qn(Nn),
                ni = Qn(On),
                ri = Qn(At),
                ii = Qn(Dt),
                oi = Qn(Pe);

            function ai(e, t, n, r, i, o, a, l) {
                var u = [];
                if (a)
                    for (var s in a) {
                        var c = _slicedToArray(a[s], 2),
                            h = c[0],
                            f = c[1];
                        u[h] = { flags: 8, name: s, nonMinifiedName: f, ns: null, securityContext: null, suffix: null }
                    }
                var d = [];
                if (l)
                    for (var v in l) d.push({ type: 1, propName: v, target: null, eventName: l[v] });
                return function(e, t, n, r, i, o, a, l, u) {
                    var s = cr(n),
                        c = s.matchedQueries,
                        h = s.references,
                        f = s.matchedQueryIds;
                    u || (u = []), l || (l = []), o = Ce(o);
                    var d = hr(a, me(i));
                    return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: f, references: h, ngContentIndex: -1, childCount: r, bindings: l, bindingFlags: wr(l), outputs: u, element: null, provider: { token: i, value: o, deps: d }, text: null, query: null, ngContent: null }
                }(e, t |= 16384, n, r, i, i, o, u, d)
            }

            function li(e, t) { return hi(e, t) }

            function ui(e, t) { for (var n = e; n.parent && !ur(n);) n = n.parent; return fi(n.parent, ar(n), !0, t.provider.value, t.provider.deps) }

            function si(e, t) {
                var n = fi(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
                if (t.outputs.length)
                    for (var r = 0; r < t.outputs.length; r++) {
                        var i = t.outputs[r],
                            o = n[i.propName];
                        if (!Yt(o)) throw new Error("@Output ".concat(i.propName, " not initialized in '").concat(n.constructor.name, "'."));
                        var a = o.subscribe(ci(e, t.parent.nodeIndex, i.eventName));
                        e.disposables[t.outputIndex + r] = a.unsubscribe.bind(a)
                    }
                return n
            }

            function ci(e, t, n) { return function(r) { return ir(e, t, n, r) } }

            function hi(e, t) {
                var n = (8192 & t.flags) > 0,
                    r = t.provider;
                switch (201347067 & t.flags) {
                    case 512:
                        return fi(e, t.parent, n, r.value, r.deps);
                    case 1024:
                        return function(e, t, n, r, i) {
                            var o = i.length;
                            switch (o) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(vi(e, t, n, i[0]));
                                case 2:
                                    return r(vi(e, t, n, i[0]), vi(e, t, n, i[1]));
                                case 3:
                                    return r(vi(e, t, n, i[0]), vi(e, t, n, i[1]), vi(e, t, n, i[2]));
                                default:
                                    for (var a = Array(o), l = 0; l < o; l++) a[l] = vi(e, t, n, i[l]);
                                    return r.apply(void 0, a)
                            }
                        }(e, t.parent, n, r.value, r.deps);
                    case 2048:
                        return vi(e, t.parent, n, r.deps[0]);
                    case 256:
                        return r.value
                }
            }

            function fi(e, t, n, r, i) {
                var o = i.length;
                switch (o) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(vi(e, t, n, i[0]));
                    case 2:
                        return new r(vi(e, t, n, i[0]), vi(e, t, n, i[1]));
                    case 3:
                        return new r(vi(e, t, n, i[0]), vi(e, t, n, i[1]), vi(e, t, n, i[2]));
                    default:
                        for (var a = new Array(o), l = 0; l < o; l++) a[l] = vi(e, t, n, i[l]);
                        return _construct(r, a)
                }
            }
            var di = {};

            function vi(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dt.THROW_IF_NOT_FOUND;
                if (8 & r.flags) return r.token;
                var o = e;
                2 & r.flags && (i = null);
                var a = r.tokenKey;
                a === ri && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, t = t.parent);
                for (var l = e; l;) {
                    if (t) switch (a) {
                        case $r:
                            return Qr(pi(l, t, n));
                        case Xr:
                            return pi(l, t, n).renderer;
                        case ei:
                            return new sn(zn(l, t.nodeIndex).renderElement);
                        case ti:
                            return zn(l, t.nodeIndex).viewContainer;
                        case ni:
                            if (t.element.template) return zn(l, t.nodeIndex).template;
                            break;
                        case ri:
                            return zr(pi(l, t, n));
                        case ii:
                        case oi:
                            return Zr(l, t);
                        default:
                            var u = (n ? t.element.allProviders : t.element.publicProviders)[a];
                            if (u) { var s = Fn(l, u.nodeIndex); return s || (s = { instance: hi(l, u) }, l.nodes[u.nodeIndex] = s), s.instance }
                    }
                    n = ur(l), t = ar(l), l = l.parent, 4 & r.flags && (l = null)
                }
                var c = o.root.injector.get(r.token, di);
                return c !== di || i === di ? c : o.root.ngModule.injector.get(r.token, i)
            }

            function pi(e, t, n) {
                var r;
                if (n) r = zn(e, t.nodeIndex).componentView;
                else
                    for (r = e; r.parent && !ur(r);) r = r.parent;
                return r
            }

            function gi(e, t, n, r, i, o) {
                if (32768 & n.flags) {
                    var a = zn(e, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8)
                }
                if (t.instance[n.bindings[r].name] = i, 524288 & n.flags) {
                    o = o || {};
                    var l = Wt.unwrap(e.oldValues[n.bindingIndex + r]);
                    o[n.bindings[r].nonMinifiedName] = new $t(l, i, 0 != (2 & e.state))
                }
                return e.oldValues[n.bindingIndex + r] = i, o
            }

            function yi(e, t) {
                if (e.def.nodeFlags & t)
                    for (var n = e.def.nodes, r = 0, i = 0; i < n.length; i++) {
                        var o = n[i],
                            a = o.parent;
                        for (!a && o.flags & t && _i(e, i, o.flags & t, r++), 0 == (o.childFlags & t) && (i += o.childCount); a && 1 & a.flags && i === a.nodeIndex + a.childCount;) a.directChildFlags & t && (r = mi(e, a, t, r)), a = a.parent
                    }
            }

            function mi(e, t, n, r) {
                for (var i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) {
                    var o = e.def.nodes[i];
                    o.flags & n && _i(e, i, o.flags & n, r++), i += o.childCount
                }
                return r
            }

            function _i(e, t, n, r) {
                var i = Fn(e, t);
                if (i) {
                    var o = i.instance;
                    o && (Zn.setCurrentNode(e, t), 1048576 & n && Hn(e, 512, r) && o.ngAfterContentInit(), 2097152 & n && o.ngAfterContentChecked(), 4194304 & n && Hn(e, 768, r) && o.ngAfterViewInit(), 8388608 & n && o.ngAfterViewChecked(), 131072 & n && o.ngOnDestroy())
                }
            }
            var ki = new Re("SCHEDULER_TOKEN", { providedIn: "root", factory: function() { return Ge } }),
                Ci = {},
                wi = function() { var e = { LocaleId: 0, DayPeriodsFormat: 1, DayPeriodsStandalone: 2, DaysFormat: 3, DaysStandalone: 4, MonthsFormat: 5, MonthsStandalone: 6, Eras: 7, FirstDayOfWeek: 8, WeekendRange: 9, DateFormat: 10, TimeFormat: 11, DateTimeFormat: 12, NumberSymbols: 13, NumberFormats: 14, CurrencySymbol: 15, CurrencyName: 16, Currencies: 17, PluralCase: 18, ExtraData: 19 }; return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e }(),
                bi = void 0,
                Si = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], bi
                    ],
                    [
                        ["AM", "PM"], bi, bi
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], bi, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], bi, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", bi, "{1} 'at' {0}", bi],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(e) {
                        var t = Math.floor(Math.abs(e)),
                            n = e.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === t && 0 === n ? 1 : 5
                    }
                ],
                xi = "en-US";

            function Ei(e) { null == e && function(e) { throw new Error("ASSERTION ERROR: ".concat("Expected localeId to be defined")) }(), "string" == typeof e && e.toLowerCase().replace(/_/g, "-") }
            var Ti = function(e) {
                function t() { var e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).__isAsync = n, e }
                return _inherits(t, e), _createClass(t, [{ key: "emit", value: function(e) { _get(_getPrototypeOf(t.prototype), "next", this).call(this, e) } }, {
                    key: "subscribe",
                    value: function(e, n, r) {
                        var i, o = function(e) { return null },
                            a = function() { return null };
                        e && "object" == typeof e ? (i = this.__isAsync ? function(t) { setTimeout((function() { return e.next(t) })) } : function(t) { e.next(t) }, e.error && (o = this.__isAsync ? function(t) { setTimeout((function() { return e.error(t) })) } : function(t) { e.error(t) }), e.complete && (a = this.__isAsync ? function() { setTimeout((function() { return e.complete() })) } : function() { e.complete() })) : (i = this.__isAsync ? function(t) { setTimeout((function() { return e(t) })) } : function(t) { e(t) }, n && (o = this.__isAsync ? function(e) { setTimeout((function() { return n(e) })) } : function(e) { n(e) }), r && (a = this.__isAsync ? function() { setTimeout((function() { return r() })) } : function() { r() }));
                        var l = _get(_getPrototypeOf(t.prototype), "subscribe", this).call(this, i, o, a);
                        return e instanceof d && e.add(l), l
                    }
                }]), t
            }(A);

            function Ri() { return this._results[qt()]() }
            var Pi = function() {
                    function e() {
                        _classCallCheck(this, e), this.dirty = !0, this._results = [], this.changes = new Ti, this.length = 0;
                        var t = qt(),
                            n = e.prototype;
                        n[t] || (n[t] = Ri)
                    }
                    return _createClass(e, [{ key: "map", value: function(e) { return this._results.map(e) } }, { key: "filter", value: function(e) { return this._results.filter(e) } }, { key: "find", value: function(e) { return this._results.find(e) } }, { key: "reduce", value: function(e, t) { return this._results.reduce(e, t) } }, { key: "forEach", value: function(e) { this._results.forEach(e) } }, { key: "some", value: function(e) { return this._results.some(e) } }, { key: "toArray", value: function() { return this._results.slice() } }, { key: "toString", value: function() { return this._results.toString() } }, {
                        key: "reset",
                        value: function(e) {
                            this._results = function e(t, n) {
                                void 0 === n && (n = t);
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i)
                                }
                                return n
                            }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                        }
                    }, { key: "notifyOnChanges", value: function() { this.changes.emit(this) } }, { key: "setDirty", value: function() { this.dirty = !0 } }, { key: "destroy", value: function() { this.changes.complete(), this.changes.unsubscribe() } }]), e
                }(),
                Ai = new Re("Application Initializer"),
                Oi = function() {
                    function e(t) {
                        var n = this;
                        _classCallCheck(this, e), this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function(e, t) { n.resolve = e, n.reject = t }))
                    }
                    return _createClass(e, [{
                        key: "runInitializers",
                        value: function() {
                            var e = this;
                            if (!this.initialized) {
                                var t = [],
                                    n = function() { e.done = !0, e.resolve() };
                                if (this.appInits)
                                    for (var r = 0; r < this.appInits.length; r++) {
                                        var i = this.appInits[r]();
                                        Jt(i) && t.push(i)
                                    }
                                Promise.all(t).then((function() { n() })).catch((function(t) { e.reject(t) })), 0 === t.length && n(), this.initialized = !0
                            }
                        }
                    }]), e
                }(),
                Ii = new Re("AppId");

            function Ni() { return "".concat(Di()).concat(Di()).concat(Di()) }

            function Di() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) }
            var Mi = new Re("Platform Initializer"),
                Ui = new Re("Platform ID"),
                ji = new Re("appBootstrapListener"),
                Li = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "log", value: function(e) { console.log(e) } }, { key: "warn", value: function(e) { console.warn(e) } }]), e
                }(),
                Hi = new Re("LocaleId"),
                Vi = !1;

            function zi() { throw new Error("Runtime compiler is not loaded") }
            var Fi, Bi, qi = zi,
                Zi = zi,
                Gi = zi,
                Wi = zi,
                Qi = function() {
                    function e() { _classCallCheck(this, e), this.compileModuleSync = qi, this.compileModuleAsync = Zi, this.compileModuleAndAllComponentsSync = Gi, this.compileModuleAndAllComponentsAsync = Wi }
                    return _createClass(e, [{ key: "clearCache", value: function() {} }, { key: "clearCacheFor", value: function(e) {} }, { key: "getModuleId", value: function(e) {} }]), e
                }(),
                Ki = function e() { _classCallCheck(this, e) };
            var Ji, Yi = !(!(Ji = Te.wtf) || !(Fi = Ji.trace) || (Bi = Fi.events, 0));

            function $i(e, t) { return null }
            var Xi = Yi ? function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return Bi.createScope(e, t) } : function(e, t) { return $i },
                eo = Yi ? function(e, t) { return Fi.leaveScope(e, t), t } : function(e, t) { return t },
                to = Promise.resolve(0);

            function no(e) { "undefined" == typeof Zone ? to.then((function() { e && e.apply(null, null) })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e) }
            var ro = function() {
                function e(t) {
                    var n, r = t.enableLongStackTrace,
                        i = void 0 !== r && r;
                    if (_classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ti(!1), this.onMicrotaskEmpty = new Ti(!1), this.onStable = new Ti(!1), this.onError = new Ti(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), i && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (n = this)._inner = n._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function(e, t, r, i, o, a) { try { return lo(n), e.invokeTask(r, i, o, a) } finally { uo(n) } }, onInvoke: function(e, t, r, i, o, a, l) { try { return lo(n), e.invoke(r, i, o, a, l) } finally { uo(n) } }, onHasTask: function(e, t, r, i) { e.hasTask(r, i), t === r && ("microTask" == i.change ? (n.hasPendingMicrotasks = i.microTask, ao(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask)) }, onHandleError: function(e, t, r, i) { return e.handleError(r, i), n.runOutsideAngular((function() { return n.onError.emit(i) })), !1 } })
                }
                return _createClass(e, [{ key: "run", value: function(e, t, n) { return this._inner.run(e, t, n) } }, {
                    key: "runTask",
                    value: function(e, t, n, r) {
                        var i = this._inner,
                            o = i.scheduleEventTask("NgZoneEvent: " + r, e, oo, io, io);
                        try { return i.runTask(o, t, n) } finally { i.cancelTask(o) }
                    }
                }, { key: "runGuarded", value: function(e, t, n) { return this._inner.runGuarded(e, t, n) } }, { key: "runOutsideAngular", value: function(e) { return this._outer.run(e) } }], [{ key: "isInAngularZone", value: function() { return !0 === Zone.current.get("isAngularZone") } }, { key: "assertInAngularZone", value: function() { if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") } }, { key: "assertNotInAngularZone", value: function() { if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") } }]), e
            }();

            function io() {}
            var oo = {};

            function ao(e) { if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try { e._nesting++, e.onMicrotaskEmpty.emit(null) } finally { if (e._nesting--, !e.hasPendingMicrotasks) try { e.runOutsideAngular((function() { return e.onStable.emit(null) })) } finally { e.isStable = !0 } } }

            function lo(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)) }

            function uo(e) { e._nesting--, ao(e) }
            var so, co = function() {
                    function e() { _classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ti, this.onMicrotaskEmpty = new Ti, this.onStable = new Ti, this.onError = new Ti }
                    return _createClass(e, [{ key: "run", value: function(e) { return e() } }, { key: "runGuarded", value: function(e) { return e() } }, { key: "runOutsideAngular", value: function(e) { return e() } }, { key: "runTask", value: function(e) { return e() } }]), e
                }(),
                ho = function() {
                    function e(t) {
                        var n = this;
                        _classCallCheck(this, e), this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function() { n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone") }))
                    }
                    return _createClass(e, [{
                        key: "_watchAngularEvents",
                        value: function() {
                            var e = this;
                            this._ngZone.onUnstable.subscribe({ next: function() { e._didWork = !0, e._isZoneStable = !1 } }), this._ngZone.runOutsideAngular((function() { e._ngZone.onStable.subscribe({ next: function() { ro.assertNotInAngularZone(), no((function() { e._isZoneStable = !0, e._runCallbacksIfReady() })) } }) }))
                        }
                    }, { key: "increasePendingRequestCount", value: function() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount } }, { key: "decreasePendingRequestCount", value: function() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount } }, { key: "isStable", value: function() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks } }, {
                        key: "_runCallbacksIfReady",
                        value: function() {
                            var e = this;
                            if (this.isStable()) no((function() {
                                for (; 0 !== e._callbacks.length;) {
                                    var t = e._callbacks.pop();
                                    clearTimeout(t.timeoutId), t.doneCb(e._didWork)
                                }
                                e._didWork = !1
                            }));
                            else {
                                var t = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter((function(e) { return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1) })), this._didWork = !0
                            }
                        }
                    }, { key: "getPendingTasks", value: function() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function(e) { return { source: e.source, creationLocation: e.creationLocation, data: e.data } })) : [] } }, {
                        key: "addCallback",
                        value: function(e, t, n) {
                            var r = this,
                                i = -1;
                            t && t > 0 && (i = setTimeout((function() { r._callbacks = r._callbacks.filter((function(e) { return e.timeoutId !== i })), e(r._didWork, r.getPendingTasks()) }), t)), this._callbacks.push({ doneCb: e, timeoutId: i, updateCb: n })
                        }
                    }, {
                        key: "whenStable",
                        value: function(e, t, n) {
                            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(e, t, n), this._runCallbacksIfReady()
                        }
                    }, { key: "getPendingRequestCount", value: function() { return this._pendingCount } }, { key: "findProviders", value: function(e, t, n) { return [] } }]), e
                }(),
                fo = function() {
                    function e() { _classCallCheck(this, e), this._applications = new Map, vo.addToWindow(this) }
                    return _createClass(e, [{ key: "registerApplication", value: function(e, t) { this._applications.set(e, t) } }, { key: "unregisterApplication", value: function(e) { this._applications.delete(e) } }, { key: "unregisterAllApplications", value: function() { this._applications.clear() } }, { key: "getTestability", value: function(e) { return this._applications.get(e) || null } }, { key: "getAllTestabilities", value: function() { return Array.from(this._applications.values()) } }, { key: "getAllRootElements", value: function() { return Array.from(this._applications.keys()) } }, { key: "findTestabilityInTree", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return vo.findTestabilityInTree(this, e, t) } }]), e
                }(),
                vo = new(function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "addToWindow", value: function(e) {} }, { key: "findTestabilityInTree", value: function(e, t, n) { return null } }]), e
                }()),
                po = function(e, t, n) { return e.get(Ki).createCompiler([t]).compileModuleAsync(n) },
                go = new Re("AllowMultipleToken"),
                yo = function e(t, n) { _classCallCheck(this, e), this.name = t, this.token = n };

            function mo(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = "Platform: ".concat(t),
                    i = new Re(r);
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        o = _o();
                    if (!o || o.injector.get(go, !1))
                        if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
                        else {
                            var a = n.concat(t).concat({ provide: i, useValue: !0 });
                            ! function(e) {
                                if (so && !so.destroyed && !so.injector.get(go, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                so = e.get(ko);
                                var t = e.get(Mi, null);
                                t && t.forEach((function(e) { return e() }))
                            }(Dt.create({ providers: a, name: r }))
                        }
                    return function(e) { var t = _o(); if (!t) throw new Error("No platform exists!"); if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return t }(i)
                }
            }

            function _o() { return so && !so.destroyed ? so : null }
            var ko = function() {
                function e(t) { _classCallCheck(this, e), this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 }
                return _createClass(e, [{
                    key: "bootstrapModuleFactory",
                    value: function(e, t) {
                        var n, r = this,
                            i = "noop" === (n = t ? t.ngZone : void 0) ? new co : ("zone.js" === n ? void 0 : n) || new ro({ enableLongStackTrace: nt() }),
                            o = [{ provide: ro, useValue: i }];
                        return i.run((function() {
                            var t = Dt.create({ providers: o, parent: r.injector, name: e.moduleType.name }),
                                n = e.create(t),
                                a = n.injector.get(Xe, null);
                            if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return Vi && Ei(n.injector.get(Hi, xi) || xi), n.onDestroy((function() { return So(r._modules, n) })), i.runOutsideAngular((function() { return i.onError.subscribe({ next: function(e) { a.handleError(e) } }) })),
                                function(e, t, i) { try { var o = ((a = n.injector.get(Oi)).runInitializers(), a.donePromise.then((function() { return r._moduleDoBootstrap(n), n }))); return Jt(o) ? o.catch((function(n) { throw t.runOutsideAngular((function() { return e.handleError(n) })), n })) : o } catch (l) { throw t.runOutsideAngular((function() { return e.handleError(l) })), l } var a }(a, i)
                        }))
                    }
                }, {
                    key: "bootstrapModule",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = Co({}, n);
                        return po(this.injector, r, e).then((function(e) { return t.bootstrapModuleFactory(e, r) }))
                    }
                }, {
                    key: "_moduleDoBootstrap",
                    value: function(e) {
                        var t = e.injector.get(bo);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((function(e) { return t.bootstrap(e) }));
                        else {
                            if (!e.instance.ngDoBootstrap) throw new Error("The module ".concat(me(e.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ') + "Please define one of these.");
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                }, { key: "onDestroy", value: function(e) { this._destroyListeners.push(e) } }, {
                    key: "destroy",
                    value: function() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach((function(e) { return e.destroy() })), this._destroyListeners.forEach((function(e) { return e() })), this._destroyed = !0
                    }
                }, { key: "injector", get: function() { return this._injector } }, { key: "destroyed", get: function() { return this._destroyed } }]), e
            }();

            function Co(e, t) { return Array.isArray(t) ? t.reduce(Co, e) : Object.assign({}, e, t) }
            var wo, bo = ((wo = function() {
                function e(t, n, r, i, o, a) {
                    var l = this;
                    _classCallCheck(this, e), this._zone = t, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = o, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = nt(), this._zone.onMicrotaskEmpty.subscribe({ next: function() { l._zone.run((function() { l.tick() })) } });
                    var u = new b((function(e) { l._stable = l._zone.isStable && !l._zone.hasPendingMacrotasks && !l._zone.hasPendingMicrotasks, l._zone.runOutsideAngular((function() { e.next(l._stable), e.complete() })) })),
                        s = new b((function(e) {
                            var t;
                            l._zone.runOutsideAngular((function() { t = l._zone.onStable.subscribe((function() { ro.assertNotInAngularZone(), no((function() { l._stable || l._zone.hasPendingMacrotasks || l._zone.hasPendingMicrotasks || (l._stable = !0, e.next(!0)) })) })) }));
                            var n = l._zone.onUnstable.subscribe((function() { ro.assertInAngularZone(), l._stable && (l._stable = !1, l._zone.runOutsideAngular((function() { e.next(!1) }))) }));
                            return function() { t.unsubscribe(), n.unsubscribe() }
                        }));
                    this.isStable = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = Number.POSITIVE_INFINITY,
                            i = null,
                            o = t[t.length - 1];
                        return I(o) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof o && (r = t.pop()), null === i && 1 === t.length && t[0] instanceof b ? t[0] : X(r)(W(t, i))
                    }(u, s.pipe((function(e) {
                        return ee()((t = ae, function(e) {
                            var n;
                            n = "function" == typeof t ? t : function() { return t };
                            var r = Object.create(e, ie);
                            return r.source = e, r.subjectFactory = n, r
                        })(e));
                        var t
                    })))
                }
                return _createClass(e, [{
                    key: "bootstrap",
                    value: function(e, t) {
                        var n, r = this;
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        n = e instanceof en ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                        var i = n instanceof ln ? null : this._injector.get(ze),
                            o = n.create(Dt.NULL, [], t || n.selector, i);
                        o.onDestroy((function() { r._unloadComponent(o) }));
                        var a = o.injector.get(ho, null);
                        return a && o.injector.get(fo).registerApplication(o.location.nativeElement, a), this._loadComponent(o), nt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), o
                    }
                }, {
                    key: "tick",
                    value: function() {
                        var t = this;
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        var n = e._tickScope();
                        try {
                            this._runningTick = !0;
                            var r = !0,
                                i = !1,
                                o = void 0;
                            try { for (var a, l = this._views[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) a.value.detectChanges() } catch (d) { i = !0, o = d } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } }
                            if (this._enforceNoNewChanges) {
                                var u = !0,
                                    s = !1,
                                    c = void 0;
                                try { for (var h, f = this._views[Symbol.iterator](); !(u = (h = f.next()).done); u = !0) h.value.checkNoChanges() } catch (d) { s = !0, c = d } finally { try { u || null == f.return || f.return() } finally { if (s) throw c } }
                            }
                        } catch (v) { this._zone.runOutsideAngular((function() { return t._exceptionHandler.handleError(v) })) } finally { this._runningTick = !1, eo(n) }
                    }
                }, {
                    key: "attachView",
                    value: function(e) {
                        var t = e;
                        this._views.push(t), t.attachToAppRef(this)
                    }
                }, {
                    key: "detachView",
                    value: function(e) {
                        var t = e;
                        So(this._views, t), t.detachFromAppRef()
                    }
                }, { key: "_loadComponent", value: function(e) { this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(ji, []).concat(this._bootstrapListeners).forEach((function(t) { return t(e) })) } }, { key: "_unloadComponent", value: function(e) { this.detachView(e.hostView), So(this.components, e) } }, { key: "ngOnDestroy", value: function() { this._views.slice().forEach((function(e) { return e.destroy() })) } }, { key: "viewCount", get: function() { return this._views.length } }]), e
            }())._tickScope = Xi("ApplicationRef#tick()"), wo);

            function So(e, t) {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            var xo = function e() { _classCallCheck(this, e) },
                Eo = function e() { _classCallCheck(this, e) },
                To = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
                Ro = function() {
                    function e(t, n) { _classCallCheck(this, e), this._compiler = t, this._config = n || To }
                    return _createClass(e, [{ key: "load", value: function(e) { return !Vi && this._compiler instanceof Qi ? this.loadFactory(e) : this.loadAndCompile(e) } }, {
                        key: "loadAndCompile",
                        value: function(e) {
                            var t = this,
                                r = _slicedToArray(e.split("#"), 2),
                                i = r[0],
                                o = r[1];
                            return void 0 === o && (o = "default"), n("zn8P")(i).then((function(e) { return e[o] })).then((function(e) { return Po(e, i, o) })).then((function(e) { return t._compiler.compileModuleAsync(e) }))
                        }
                    }, {
                        key: "loadFactory",
                        value: function(e) {
                            var t = _slicedToArray(e.split("#"), 2),
                                r = t[0],
                                i = t[1],
                                o = "NgFactory";
                            return void 0 === i && (i = "default", o = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function(e) { return e[i + o] })).then((function(e) { return Po(e, r, i) }))
                        }
                    }]), e
                }();

            function Po(e, t, n) { if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'")); return e }
            var Ao = function e(t, n) { _classCallCheck(this, e), this.name = t, this.callback = n },
                Oo = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.listeners = [], this.parent = null, this._debugContext = r, this.nativeNode = t, n && n instanceof Io && n.addChild(this) }
                    return _createClass(e, [{ key: "injector", get: function() { return this._debugContext.injector } }, { key: "componentInstance", get: function() { return this._debugContext.component } }, { key: "context", get: function() { return this._debugContext.context } }, { key: "references", get: function() { return this._debugContext.references } }, { key: "providerTokens", get: function() { return this._debugContext.providerTokens } }]), e
                }(),
                Io = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n, r))).properties = {}, i.attributes = {}, i.classes = {}, i.styles = {}, i.childNodes = [], i.nativeElement = e, i }
                    return _inherits(t, e), _createClass(t, [{ key: "addChild", value: function(e) { e && (this.childNodes.push(e), e.parent = this) } }, { key: "removeChild", value: function(e) { var t = this.childNodes.indexOf(e); - 1 !== t && (e.parent = null, this.childNodes.splice(t, 1)) } }, {
                        key: "insertChildrenAfter",
                        value: function(e, t) {
                            var n, r = this,
                                i = this.childNodes.indexOf(e); - 1 !== i && ((n = this.childNodes).splice.apply(n, [i + 1, 0].concat(_toConsumableArray(t))), t.forEach((function(t) { t.parent && t.parent.removeChild(t), e.parent = r })))
                        }
                    }, { key: "insertBefore", value: function(e, t) { var n = this.childNodes.indexOf(e); - 1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, this.childNodes.splice(n, 0, t)) } }, { key: "query", value: function(e) { return this.queryAll(e)[0] || null } }, { key: "queryAll", value: function(e) { var n = []; return function e(n, r, i) { n.childNodes.forEach((function(n) { n instanceof t && (r(n) && i.push(n), e(n, r, i)) })) }(this, e, n), n } }, { key: "queryAllNodes", value: function(e) { var n = []; return function e(n, r, i) { n instanceof t && n.childNodes.forEach((function(n) { r(n) && i.push(n), n instanceof t && e(n, r, i) })) }(this, e, n), n } }, { key: "triggerEventHandler", value: function(e, t) { this.listeners.forEach((function(n) { n.name == e && n.callback(t) })) } }, { key: "children", get: function() { return this.childNodes.filter((function(e) { return e instanceof t })) } }]), t
                }(Oo),
                No = new Map,
                Do = function(e) { return No.get(e) || null };

            function Mo(e) { No.set(e.nativeNode, e) }
            var Uo = mo(null, "core", [{ provide: Ui, useValue: "unknown" }, { provide: ko, deps: [Dt] }, { provide: fo, deps: [] }, { provide: Li, deps: [] }]);

            function jo() { return Pn }

            function Lo() { return An }

            function Ho(e) { return e ? (Vi && Ei(e), e) : xi }

            function Vo(e) {
                var t = [];
                return e.onStable.subscribe((function() { for (; t.length;) t.pop()() })),
                    function(e) { t.push(e) }
            }
            var zo = function e(t) { _classCallCheck(this, e) };

            function Fo(e, t, n, r, i, o) {
                var a, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [],
                    u = arguments.length > 7 ? arguments[7] : void 0,
                    s = arguments.length > 8 ? arguments[8] : void 0,
                    c = arguments.length > 9 ? arguments[9] : void 0,
                    h = arguments.length > 10 ? arguments[10] : void 0,
                    f = arguments.length > 11 ? arguments[11] : void 0;
                c || (c = Gn);
                var d = cr(n),
                    v = d.matchedQueries,
                    p = d.references,
                    g = d.matchedQueryIds,
                    y = null,
                    m = null;
                o && (y = (a = _slicedToArray(Cr(o), 2))[0], m = a[1]), u = u || [];
                for (var _ = new Array(u.length), k = 0; k < u.length; k++) {
                    var C = _slicedToArray(u[k], 3),
                        w = C[0],
                        b = C[1],
                        S = C[2],
                        x = _slicedToArray(Cr(b), 2),
                        E = x[0],
                        T = x[1],
                        R = void 0,
                        P = void 0;
                    switch (15 & w) {
                        case 4:
                            P = S;
                            break;
                        case 1:
                        case 8:
                            R = S
                    }
                    _[k] = { flags: w, ns: E, name: T, nonMinifiedName: T, securityContext: R, suffix: P }
                }
                s = s || [];
                for (var A = new Array(s.length), O = 0; O < s.length; O++) {
                    var I = _slicedToArray(s[O], 2),
                        N = I[0],
                        D = I[1];
                    A[O] = { type: 0, target: N, eventName: D, propName: null }
                }
                var M = (l = l || []).map((function(e) {
                    var t = _slicedToArray(e, 2),
                        n = t[0],
                        r = t[1],
                        i = _slicedToArray(Cr(n), 2);
                    return [i[0], i[1], r]
                }));
                return f = function(e) {
                    if (e && e.id === Kn) {
                        var t = null != e.encapsulation && e.encapsulation !== Ze.None || e.styles.length || Object.keys(e.data).length;
                        e.id = t ? "c".concat($n++) : Jn
                    }
                    return e && e.id === Jn && (e = null), e || null
                }(f), h && (t |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: v, matchedQueryIds: g, references: p, ngContentIndex: r, childCount: i, bindings: _, bindingFlags: wr(_), outputs: A, element: { ns: y, name: m, attrs: M, template: null, componentProvider: null, componentView: h || null, componentRendererType: f, publicProviders: null, allProviders: null, handleEvent: c || Gn }, provider: null, text: null, query: null, ngContent: null }
            }

            function Bo(e, t, n) {
                var r, i = n.element,
                    o = e.root.selectorOrNode,
                    a = e.renderer;
                if (e.parent || !o) {
                    r = i.name ? a.createElement(i.name, i.ns) : a.createComment("");
                    var l = fr(e, t, n);
                    l && a.appendChild(l, r)
                } else r = a.selectRootElement(o, !!i.componentRendererType && i.componentRendererType.encapsulation === Ze.ShadowDom);
                if (i.attrs)
                    for (var u = 0; u < i.attrs.length; u++) {
                        var s = _slicedToArray(i.attrs[u], 3),
                            c = s[0],
                            h = s[1],
                            f = s[2];
                        a.setAttribute(r, h, f, c)
                    }
                return r
            }

            function qo(e, t, n, r) {
                for (var i = 0; i < n.outputs.length; i++) {
                    var o = n.outputs[i],
                        a = Zo(e, n.nodeIndex, (h = o.eventName, (c = o.target) ? "".concat(c, ":").concat(h) : h)),
                        l = o.target,
                        u = e;
                    "component" === o.target && (l = null, u = t);
                    var s = u.renderer.listen(l || r, o.eventName, a);
                    e.disposables[n.outputIndex + i] = s
                }
                var c, h
            }

            function Zo(e, t, n) { return function(r) { return ir(e, t, n, r) } }

            function Go(e, t, n, r) {
                if (!er(e, t, n, r)) return !1;
                var i = t.bindings[n],
                    o = zn(e, t.nodeIndex),
                    a = o.renderElement,
                    l = i.name;
                switch (15 & i.flags) {
                    case 1:
                        ! function(e, t, n, r, i, o) {
                            var a = t.securityContext,
                                l = a ? e.root.sanitizer.sanitize(a, o) : o;
                            l = null != l ? l.toString() : null;
                            var u = e.renderer;
                            null != o ? u.setAttribute(n, i, l, r) : u.removeAttribute(n, i, r)
                        }(e, i, a, i.ns, l, r);
                        break;
                    case 2:
                        ! function(e, t, n, r) {
                            var i = e.renderer;
                            r ? i.addClass(t, n) : i.removeClass(t, n)
                        }(e, a, l, r);
                        break;
                    case 4:
                        ! function(e, t, n, r, i) {
                            var o = e.root.sanitizer.sanitize(St.STYLE, i);
                            if (null != o) {
                                o = o.toString();
                                var a = t.suffix;
                                null != a && (o += a)
                            } else o = null;
                            var l = e.renderer;
                            null != o ? l.setStyle(n, r, o) : l.removeStyle(n, r)
                        }(e, i, a, l, r);
                        break;
                    case 8:
                        ! function(e, t, n, r, i) {
                            var o = t.securityContext,
                                a = o ? e.root.sanitizer.sanitize(o, i) : i;
                            e.renderer.setProperty(n, r, a)
                        }(33554432 & t.flags && 32 & i.flags ? o.componentView : e, i, a, l, r)
                }
                return !0
            }

            function Wo(e) {
                for (var t = e.def.nodeMatchedQueries; e.parent && sr(e);) {
                    var n = e.parentNodeDef;
                    e = e.parent;
                    for (var r = n.nodeIndex + n.childCount, i = 0; i <= r; i++) {
                        var o = e.def.nodes[i];
                        67108864 & o.flags && 536870912 & o.flags && (o.query.filterId & t) === o.query.filterId && qn(e, i).setDirty(), !(1 & o.flags && i + o.childCount < n.nodeIndex) && 67108864 & o.childFlags && 536870912 & o.childFlags || (i += o.childCount)
                    }
                }
                if (134217728 & e.def.nodeFlags)
                    for (var a = 0; a < e.def.nodes.length; a++) {
                        var l = e.def.nodes[a];
                        134217728 & l.flags && 536870912 & l.flags && qn(e, a).setDirty(), a += l.childCount
                    }
            }

            function Qo(e, t) {
                var n = qn(e, t.nodeIndex);
                if (n.dirty) {
                    var r, i = void 0;
                    if (67108864 & t.flags) {
                        var o = t.parent.parent;
                        i = Ko(e, o.nodeIndex, o.nodeIndex + o.childCount, t.query, []), r = Fn(e, t.parent.nodeIndex).instance
                    } else 134217728 & t.flags && (i = Ko(e, 0, e.def.nodes.length - 1, t.query, []), r = e.component);
                    n.reset(i);
                    for (var a = t.query.bindings, l = !1, u = 0; u < a.length; u++) {
                        var s = a[u],
                            c = void 0;
                        switch (s.bindingType) {
                            case 0:
                                c = n.first;
                                break;
                            case 1:
                                c = n, l = !0
                        }
                        r[s.propName] = c
                    }
                    l && n.notifyOnChanges()
                }
            }

            function Ko(e, t, n, r, i) {
                for (var o = t; o <= n; o++) {
                    var a = e.def.nodes[o],
                        l = a.matchedQueries[r.id];
                    if (null != l && i.push(Jo(e, a, l)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                        var u = zn(e, o);
                        if ((a.childMatchedQueries & r.filterId) === r.filterId && (Ko(e, o + 1, o + a.childCount, r, i), o += a.childCount), 16777216 & a.flags)
                            for (var s = u.viewContainer._embeddedViews, c = 0; c < s.length; c++) {
                                var h = s[c],
                                    f = or(h);
                                f && f === u && Ko(h, 0, h.def.nodes.length - 1, r, i)
                            }
                        var d = u.template._projectedViews;
                        if (d)
                            for (var v = 0; v < d.length; v++) {
                                var p = d[v];
                                Ko(p, 0, p.def.nodes.length - 1, r, i)
                            }
                    }(a.childMatchedQueries & r.filterId) !== r.filterId && (o += a.childCount)
                }
                return i
            }

            function Jo(e, t, n) {
                if (null != n) switch (n) {
                    case 1:
                        return zn(e, t.nodeIndex).renderElement;
                    case 0:
                        return new sn(zn(e, t.nodeIndex).renderElement);
                    case 2:
                        return zn(e, t.nodeIndex).template;
                    case 3:
                        return zn(e, t.nodeIndex).viewContainer;
                    case 4:
                        return Fn(e, t.nodeIndex).instance
                }
            }

            function Yo(e, t, n) {
                var r = fr(e, t, n);
                r && yr(e, n.ngContent.index, 1, r, null, void 0)
            }

            function $o(e, t, n) { for (var r = new Array(n.length - 1), i = 1; i < n.length; i++) r[i - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[i] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: t, childCount: 0, bindings: r, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: n[0] }, query: null, ngContent: null } }

            function Xo(e, t, n) {
                var r, i = e.renderer;
                r = i.createText(n.text.prefix);
                var o = fr(e, t, n);
                return o && i.appendChild(o, r), { renderText: r }
            }

            function ea(e, t) { return (null != e ? e.toString() : "") + t.suffix }

            function ta(e, t, n, r) {
                for (var i = 0, o = 0, a = 0, l = 0, u = 0, s = null, c = null, h = !1, f = !1, d = null, v = 0; v < t.length; v++) {
                    var p = t[v];
                    if (p.nodeIndex = v, p.parent = s, p.bindingIndex = i, p.outputIndex = o, p.renderParent = c, a |= p.flags, u |= p.matchedQueryIds, p.element) {
                        var g = p.element;
                        g.publicProviders = s ? s.element.publicProviders : Object.create(null), g.allProviders = g.publicProviders, h = !1, f = !1, p.element.template && (u |= p.element.template.nodeMatchedQueries)
                    }
                    if (ra(s, p, t.length), i += p.bindings.length, o += p.outputs.length, !c && 3 & p.flags && (d = p), 20224 & p.flags) {
                        h || (h = !0, s.element.publicProviders = Object.create(s.element.publicProviders), s.element.allProviders = s.element.publicProviders);
                        var y = 0 != (32768 & p.flags);
                        0 == (8192 & p.flags) || y ? s.element.publicProviders[Qn(p.provider.token)] = p : (f || (f = !0, s.element.allProviders = Object.create(s.element.publicProviders)), s.element.allProviders[Qn(p.provider.token)] = p), y && (s.element.componentProvider = p)
                    }
                    if (s ? (s.childFlags |= p.flags, s.directChildFlags |= p.flags, s.childMatchedQueries |= p.matchedQueryIds, p.element && p.element.template && (s.childMatchedQueries |= p.element.template.nodeMatchedQueries)) : l |= p.flags, p.childCount > 0) s = p, na(p) || (c = p);
                    else
                        for (; s && v === s.nodeIndex + s.childCount;) {
                            var m = s.parent;
                            m && (m.childFlags |= s.childFlags, m.childMatchedQueries |= s.childMatchedQueries), c = (s = m) && na(s) ? s.renderParent : s
                        }
                }
                return { factory: null, nodeFlags: a, rootNodeFlags: l, nodeMatchedQueries: u, flags: e, nodes: t, updateDirectives: n || Gn, updateRenderer: r || Gn, handleEvent: function(e, n, r, i) { return t[n].element.handleEvent(e, r, i) }, bindingCount: i, outputCount: o, lastRenderRootNode: d }
            }

            function na(e) { return 0 != (1 & e.flags) && null === e.element.name }

            function ra(e, t, n) { var r = t.element && t.element.template; if (r) { if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!"); if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index ".concat(t.nodeIndex, "!")) } if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ".concat(t.nodeIndex, "!")); if (t.query) { if (67108864 & t.flags && (!e || 0 == (16384 & e.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index ".concat(t.nodeIndex, "!")); if (134217728 & t.flags && e) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index ".concat(t.nodeIndex, "!")) } if (t.childCount) { var i = e ? e.nodeIndex + e.childCount : n - 1; if (t.nodeIndex <= i && t.nodeIndex + t.childCount > i) throw new Error("Illegal State: childCount of node leads outside of parent, at index ".concat(t.nodeIndex, "!")) } }

            function ia(e, t, n, r) { var i = la(e.root, e.renderer, e, t, n); return ua(i, e.component, r), sa(i), i }

            function oa(e, t, n) { var r = la(e, e.renderer, null, null, t); return ua(r, n, n), sa(r), r }

            function aa(e, t, n, r) { var i, o = t.element.componentRendererType; return i = o ? e.root.rendererFactory.createRenderer(r, o) : e.root.renderer, la(e.root, i, e, t.element.componentProvider, n) }

            function la(e, t, n, r, i) {
                var o = new Array(i.nodes.length),
                    a = i.outputCount ? new Array(i.outputCount) : null;
                return { def: i, parent: n, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: o, state: 13, root: e, renderer: t, oldValues: new Array(i.bindingCount), disposables: a, initIndex: -1 }
            }

            function ua(e, t, n) { e.component = t, e.context = n }

            function sa(e) {
                var t;
                ur(e) && (t = zn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = e.def, r = e.nodes, i = 0; i < n.nodes.length; i++) {
                    var o = n.nodes[i],
                        a = void 0;
                    switch (Zn.setCurrentNode(e, i), 201347067 & o.flags) {
                        case 1:
                            var l = Bo(e, t, o),
                                u = void 0;
                            if (33554432 & o.flags) {
                                var s = vr(o.element.componentView);
                                u = Zn.createComponentView(e, o, s, l)
                            }
                            qo(e, u, o, l), a = { renderElement: l, componentView: u, viewContainer: null, template: o.element.template ? Br(e, o) : void 0 }, 16777216 & o.flags && (a.viewContainer = Hr(e, o, a));
                            break;
                        case 2:
                            a = Xo(e, t, o);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[i]) || 4096 & o.flags || (a = { instance: li(e, o) });
                            break;
                        case 16:
                            a = { instance: ui(e, o) };
                            break;
                        case 16384:
                            (a = r[i]) || (a = { instance: si(e, o) }), 32768 & o.flags && ua(zn(e, o.parent.nodeIndex).componentView, a.instance, a.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            a = { value: void 0 };
                            break;
                        case 67108864:
                        case 134217728:
                            a = new Pi;
                            break;
                        case 8:
                            Yo(e, t, o), a = void 0
                    }
                    r[i] = a
                }
                ma(e, ya.CreateViewNodes), wa(e, 201326592, 268435456, 0)
            }

            function ca(e) { da(e), Zn.updateDirectives(e, 1), _a(e, ya.CheckNoChanges), Zn.updateRenderer(e, 1), ma(e, ya.CheckNoChanges), e.state &= -97 }

            function ha(e) {
                1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, Ln(e, 0, 256), da(e), Zn.updateDirectives(e, 0), _a(e, ya.CheckAndUpdate), wa(e, 67108864, 536870912, 0);
                var t = Ln(e, 256, 512);
                yi(e, 2097152 | (t ? 1048576 : 0)), Zn.updateRenderer(e, 0), ma(e, ya.CheckAndUpdate), wa(e, 134217728, 536870912, 0), yi(e, 8388608 | ((t = Ln(e, 512, 768)) ? 4194304 : 0)), 2 & e.def.flags && (e.state &= -9), e.state &= -97, Ln(e, 768, 1024)
            }

            function fa(e, t, n, r, i, o, a, l, u, s, c, h, f) {
                return 0 === n ? function(e, t, n, r, i, o, a, l, u, s, c, h) {
                    switch (201347067 & t.flags) {
                        case 1:
                            return function(e, t, n, r, i, o, a, l, u, s, c, h) {
                                var f = t.bindings.length,
                                    d = !1;
                                return f > 0 && Go(e, t, 0, n) && (d = !0), f > 1 && Go(e, t, 1, r) && (d = !0), f > 2 && Go(e, t, 2, i) && (d = !0), f > 3 && Go(e, t, 3, o) && (d = !0), f > 4 && Go(e, t, 4, a) && (d = !0), f > 5 && Go(e, t, 5, l) && (d = !0), f > 6 && Go(e, t, 6, u) && (d = !0), f > 7 && Go(e, t, 7, s) && (d = !0), f > 8 && Go(e, t, 8, c) && (d = !0), f > 9 && Go(e, t, 9, h) && (d = !0), d
                            }(e, t, n, r, i, o, a, l, u, s, c, h);
                        case 2:
                            return function(e, t, n, r, i, o, a, l, u, s, c, h) {
                                var f = !1,
                                    d = t.bindings,
                                    v = d.length;
                                if (v > 0 && er(e, t, 0, n) && (f = !0), v > 1 && er(e, t, 1, r) && (f = !0), v > 2 && er(e, t, 2, i) && (f = !0), v > 3 && er(e, t, 3, o) && (f = !0), v > 4 && er(e, t, 4, a) && (f = !0), v > 5 && er(e, t, 5, l) && (f = !0), v > 6 && er(e, t, 6, u) && (f = !0), v > 7 && er(e, t, 7, s) && (f = !0), v > 8 && er(e, t, 8, c) && (f = !0), v > 9 && er(e, t, 9, h) && (f = !0), f) {
                                    var p = t.text.prefix;
                                    v > 0 && (p += ea(n, d[0])), v > 1 && (p += ea(r, d[1])), v > 2 && (p += ea(i, d[2])), v > 3 && (p += ea(o, d[3])), v > 4 && (p += ea(a, d[4])), v > 5 && (p += ea(l, d[5])), v > 6 && (p += ea(u, d[6])), v > 7 && (p += ea(s, d[7])), v > 8 && (p += ea(c, d[8])), v > 9 && (p += ea(h, d[9]));
                                    var g = Vn(e, t.nodeIndex).renderText;
                                    e.renderer.setValue(g, p)
                                }
                                return f
                            }(e, t, n, r, i, o, a, l, u, s, c, h);
                        case 16384:
                            return function(e, t, n, r, i, o, a, l, u, s, c, h) {
                                var f = Fn(e, t.nodeIndex),
                                    d = f.instance,
                                    v = !1,
                                    p = void 0,
                                    g = t.bindings.length;
                                return g > 0 && Xn(e, t, 0, n) && (v = !0, p = gi(e, f, t, 0, n, p)), g > 1 && Xn(e, t, 1, r) && (v = !0, p = gi(e, f, t, 1, r, p)), g > 2 && Xn(e, t, 2, i) && (v = !0, p = gi(e, f, t, 2, i, p)), g > 3 && Xn(e, t, 3, o) && (v = !0, p = gi(e, f, t, 3, o, p)), g > 4 && Xn(e, t, 4, a) && (v = !0, p = gi(e, f, t, 4, a, p)), g > 5 && Xn(e, t, 5, l) && (v = !0, p = gi(e, f, t, 5, l, p)), g > 6 && Xn(e, t, 6, u) && (v = !0, p = gi(e, f, t, 6, u, p)), g > 7 && Xn(e, t, 7, s) && (v = !0, p = gi(e, f, t, 7, s, p)), g > 8 && Xn(e, t, 8, c) && (v = !0, p = gi(e, f, t, 8, c, p)), g > 9 && Xn(e, t, 9, h) && (v = !0, p = gi(e, f, t, 9, h, p)), p && d.ngOnChanges(p), 65536 & t.flags && Hn(e, 256, t.nodeIndex) && d.ngOnInit(), 262144 & t.flags && d.ngDoCheck(), v
                            }(e, t, n, r, i, o, a, l, u, s, c, h);
                        case 32:
                        case 64:
                        case 128:
                            return function(e, t, n, r, i, o, a, l, u, s, c, h) {
                                var f = t.bindings,
                                    d = !1,
                                    v = f.length;
                                if (v > 0 && er(e, t, 0, n) && (d = !0), v > 1 && er(e, t, 1, r) && (d = !0), v > 2 && er(e, t, 2, i) && (d = !0), v > 3 && er(e, t, 3, o) && (d = !0), v > 4 && er(e, t, 4, a) && (d = !0), v > 5 && er(e, t, 5, l) && (d = !0), v > 6 && er(e, t, 6, u) && (d = !0), v > 7 && er(e, t, 7, s) && (d = !0), v > 8 && er(e, t, 8, c) && (d = !0), v > 9 && er(e, t, 9, h) && (d = !0), d) {
                                    var p, g = Bn(e, t.nodeIndex);
                                    switch (201347067 & t.flags) {
                                        case 32:
                                            p = new Array(f.length), v > 0 && (p[0] = n), v > 1 && (p[1] = r), v > 2 && (p[2] = i), v > 3 && (p[3] = o), v > 4 && (p[4] = a), v > 5 && (p[5] = l), v > 6 && (p[6] = u), v > 7 && (p[7] = s), v > 8 && (p[8] = c), v > 9 && (p[9] = h);
                                            break;
                                        case 64:
                                            p = {}, v > 0 && (p[f[0].name] = n), v > 1 && (p[f[1].name] = r), v > 2 && (p[f[2].name] = i), v > 3 && (p[f[3].name] = o), v > 4 && (p[f[4].name] = a), v > 5 && (p[f[5].name] = l), v > 6 && (p[f[6].name] = u), v > 7 && (p[f[7].name] = s), v > 8 && (p[f[8].name] = c), v > 9 && (p[f[9].name] = h);
                                            break;
                                        case 128:
                                            var y = n;
                                            switch (v) {
                                                case 1:
                                                    p = y.transform(n);
                                                    break;
                                                case 2:
                                                    p = y.transform(r);
                                                    break;
                                                case 3:
                                                    p = y.transform(r, i);
                                                    break;
                                                case 4:
                                                    p = y.transform(r, i, o);
                                                    break;
                                                case 5:
                                                    p = y.transform(r, i, o, a);
                                                    break;
                                                case 6:
                                                    p = y.transform(r, i, o, a, l);
                                                    break;
                                                case 7:
                                                    p = y.transform(r, i, o, a, l, u);
                                                    break;
                                                case 8:
                                                    p = y.transform(r, i, o, a, l, u, s);
                                                    break;
                                                case 9:
                                                    p = y.transform(r, i, o, a, l, u, s, c);
                                                    break;
                                                case 10:
                                                    p = y.transform(r, i, o, a, l, u, s, c, h)
                                            }
                                    }
                                    g.value = p
                                }
                                return d
                            }(e, t, n, r, i, o, a, l, u, s, c, h);
                        default:
                            throw "unreachable"
                    }
                }(e, t, r, i, o, a, l, u, s, c, h, f) : function(e, t, n) {
                    switch (201347067 & t.flags) {
                        case 1:
                            return function(e, t, n) { for (var r = !1, i = 0; i < n.length; i++) Go(e, t, i, n[i]) && (r = !0); return r }(e, t, n);
                        case 2:
                            return function(e, t, n) {
                                for (var r = t.bindings, i = !1, o = 0; o < n.length; o++) er(e, t, o, n[o]) && (i = !0);
                                if (i) {
                                    for (var a = "", l = 0; l < n.length; l++) a += ea(n[l], r[l]);
                                    a = t.text.prefix + a;
                                    var u = Vn(e, t.nodeIndex).renderText;
                                    e.renderer.setValue(u, a)
                                }
                                return i
                            }(e, t, n);
                        case 16384:
                            return function(e, t, n) { for (var r = Fn(e, t.nodeIndex), i = r.instance, o = !1, a = void 0, l = 0; l < n.length; l++) Xn(e, t, l, n[l]) && (o = !0, a = gi(e, r, t, l, n[l], a)); return a && i.ngOnChanges(a), 65536 & t.flags && Hn(e, 256, t.nodeIndex) && i.ngOnInit(), 262144 & t.flags && i.ngDoCheck(), o }(e, t, n);
                        case 32:
                        case 64:
                        case 128:
                            return function(e, t, n) {
                                for (var r = t.bindings, i = !1, o = 0; o < n.length; o++) er(e, t, o, n[o]) && (i = !0);
                                if (i) {
                                    var a, l = Bn(e, t.nodeIndex);
                                    switch (201347067 & t.flags) {
                                        case 32:
                                            a = n;
                                            break;
                                        case 64:
                                            a = {};
                                            for (var u = 0; u < n.length; u++) a[r[u].name] = n[u];
                                            break;
                                        case 128:
                                            var s = n[0],
                                                c = n.slice(1);
                                            a = s.transform.apply(s, _toConsumableArray(c))
                                    }
                                    l.value = a
                                }
                                return i
                            }(e, t, n);
                        default:
                            throw "unreachable"
                    }
                }(e, t, r)
            }

            function da(e) {
                var t = e.def;
                if (4 & t.nodeFlags)
                    for (var n = 0; n < t.nodes.length; n++) {
                        var r = t.nodes[n];
                        if (4 & r.flags) {
                            var i = zn(e, n).template._projectedViews;
                            if (i)
                                for (var o = 0; o < i.length; o++) {
                                    var a = i[o];
                                    a.state |= 32, rr(a, e)
                                }
                        } else 0 == (4 & r.childFlags) && (n += r.childCount)
                    }
            }

            function va(e, t, n, r, i, o, a, l, u, s, c, h, f) {
                return 0 === n ? function(e, t, n, r, i, o, a, l, u, s, c, h) {
                    var f = t.bindings.length;
                    f > 0 && tr(e, t, 0, n), f > 1 && tr(e, t, 1, r), f > 2 && tr(e, t, 2, i), f > 3 && tr(e, t, 3, o), f > 4 && tr(e, t, 4, a), f > 5 && tr(e, t, 5, l), f > 6 && tr(e, t, 6, u), f > 7 && tr(e, t, 7, s), f > 8 && tr(e, t, 8, c), f > 9 && tr(e, t, 9, h)
                }(e, t, r, i, o, a, l, u, s, c, h, f) : function(e, t, n) { for (var r = 0; r < n.length; r++) tr(e, t, r, n[r]) }(e, t, r), !1
            }

            function pa(e, t) { if (qn(e, t.nodeIndex).dirty) throw Mn(Zn.createDebugContext(e, t.nodeIndex), "Query ".concat(t.query.id, " not dirty"), "Query ".concat(t.query.id, " dirty"), 0 != (1 & e.state)) }

            function ga(e) {
                if (!(128 & e.state)) {
                    if (_a(e, ya.Destroy), ma(e, ya.Destroy), yi(e, 131072), e.disposables)
                        for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
                    ! function(e) {
                        if (16 & e.state) {
                            var t = or(e);
                            if (t) {
                                var n = t.template._projectedViews;
                                n && (qe(n, n.indexOf(e)), Zn.dirtyParentQueries(e))
                            }
                        }
                    }(e), e.renderer.destroyNode && function(e) {
                        for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                            var r = e.def.nodes[n];
                            1 & r.flags ? e.renderer.destroyNode(zn(e, n).renderElement) : 2 & r.flags ? e.renderer.destroyNode(Vn(e, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && qn(e, n).destroy()
                        }
                    }(e), ur(e) && e.renderer.destroy(), e.state |= 128
                }
            }
            var ya = function() { var e = { CreateViewNodes: 0, CheckNoChanges: 1, CheckNoChangesProjectedViews: 2, CheckAndUpdate: 3, CheckAndUpdateProjectedViews: 4, Destroy: 5 }; return e[e.CreateViewNodes] = "CreateViewNodes", e[e.CheckNoChanges] = "CheckNoChanges", e[e.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate] = "CheckAndUpdate", e[e.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", e[e.Destroy] = "Destroy", e }();

            function ma(e, t) {
                var n = e.def;
                if (33554432 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var i = n.nodes[r];
                        33554432 & i.flags ? ka(zn(e, r).componentView, t) : 0 == (33554432 & i.childFlags) && (r += i.childCount)
                    }
            }

            function _a(e, t) {
                var n = e.def;
                if (16777216 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var i = n.nodes[r];
                        if (16777216 & i.flags)
                            for (var o = zn(e, r).viewContainer._embeddedViews, a = 0; a < o.length; a++) ka(o[a], t);
                        else 0 == (16777216 & i.childFlags) && (r += i.childCount)
                    }
            }

            function ka(e, t) {
                var n = e.state;
                switch (t) {
                    case ya.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? ca(e) : 64 & n && Ca(e, ya.CheckNoChangesProjectedViews));
                        break;
                    case ya.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? ca(e) : 64 & n && Ca(e, t));
                        break;
                    case ya.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? ha(e) : 64 & n && Ca(e, ya.CheckAndUpdateProjectedViews));
                        break;
                    case ya.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? ha(e) : 64 & n && Ca(e, t));
                        break;
                    case ya.Destroy:
                        ga(e);
                        break;
                    case ya.CreateViewNodes:
                        sa(e)
                }
            }

            function Ca(e, t) { _a(e, t), ma(e, t) }

            function wa(e, t, n, r) {
                if (e.def.nodeFlags & t && e.def.nodeFlags & n)
                    for (var i = e.def.nodes.length, o = 0; o < i; o++) {
                        var a = e.def.nodes[o];
                        if (a.flags & t && a.flags & n) switch (Zn.setCurrentNode(e, a.nodeIndex), r) {
                            case 0:
                                Qo(e, a);
                                break;
                            case 1:
                                pa(e, a)
                        }
                        a.childFlags & t && a.childFlags & n || (o += a.childCount)
                    }
            }
            var ba = !1;

            function Sa(e, t, n, r, i, o) { var a = i.injector.get(hn); return oa(Ea(e, i, a, t, n), r, o) }

            function xa(e, t, n, r, i, o) {
                var a = i.injector.get(hn),
                    l = Ea(e, i, new il(a), t, n),
                    u = Ua(r);
                return nl(Za.create, oa, null, [l, u, o])
            }

            function Ea(e, t, n, r, i) {
                var o = t.injector.get(xt),
                    a = t.injector.get(Xe),
                    l = n.createRenderer(null, null);
                return { ngModule: t, injector: e, projectableNodes: r, selectorOrNode: i, sanitizer: o, rendererFactory: n, renderer: l, errorHandler: a }
            }

            function Ta(e, t, n, r) { var i = Ua(n); return nl(Za.create, ia, null, [e, t, i, r]) }

            function Ra(e, t, n, r) { return n = Ia.get(t.element.componentProvider.provider.token) || Ua(n), nl(Za.create, aa, null, [e, t, n, r]) }

            function Pa(e, t, n, r) {
                return Jr(e, t, n, function(e) {
                    var t = function(e) {
                            var t = !1,
                                n = !1;
                            return 0 === Aa.size ? { hasOverrides: t, hasDeprecatedOverrides: n } : (e.providers.forEach((function(e) {
                                var r = Aa.get(e.token);
                                3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior)
                            })), e.modules.forEach((function(e) { Oa.forEach((function(r, i) { ge(i).providedIn === e && (t = !0, n = n || r.deprecatedBehavior) })) })), { hasOverrides: t, hasDeprecatedOverrides: n })
                        }(e),
                        n = t.hasOverrides,
                        r = t.hasDeprecatedOverrides;
                    return n ? (function(e) {
                        for (var t = 0; t < e.providers.length; t++) {
                            var n = e.providers[t];
                            r && (n.flags |= 4096);
                            var i = Aa.get(n.token);
                            i && (n.flags = -3841 & n.flags | i.flags, n.deps = hr(i.deps), n.value = i.value)
                        }
                        if (Oa.size > 0) {
                            var o = new Set(e.modules);
                            Oa.forEach((function(t, n) {
                                if (o.has(ge(n).providedIn)) {
                                    var i = { token: n, flags: t.flags | (r ? 4096 : 0), deps: hr(t.deps), value: t.value, index: e.providers.length };
                                    e.providers.push(i), e.providersByKey[Qn(n)] = i
                                }
                            }))
                        }
                    }(e = e.factory((function() { return Gn }))), e) : e
                }(r))
            }
            var Aa = new Map,
                Oa = new Map,
                Ia = new Map;

            function Na(e) {
                var t;
                Aa.set(e.token, e), "function" == typeof e.token && (t = ge(e.token)) && "function" == typeof t.providedIn && Oa.set(e.token, e)
            }

            function Da(e, t) {
                var n = vr(t.viewDefFactory),
                    r = vr(n.nodes[0].element.componentView);
                Ia.set(e, r)
            }

            function Ma() { Aa.clear(), Oa.clear(), Ia.clear() }

            function Ua(e) {
                if (0 === Aa.size) return e;
                var t = function(e) {
                    for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
                        var i = e.nodes[r];
                        1 & i.flags && (n = i), n && 3840 & i.flags && Aa.has(i.provider.token) && (t.push(n.nodeIndex), n = null)
                    }
                    return t
                }(e);
                if (0 === t.length) return e;
                e = e.factory((function() { return Gn }));
                for (var n = 0; n < t.length; n++) r(e, t[n]);
                return e;

                function r(e, t) {
                    for (var n = t + 1; n < e.nodes.length; n++) {
                        var r = e.nodes[n];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var i = r.provider,
                                o = Aa.get(i.token);
                            o && (r.flags = -3841 & r.flags | o.flags, i.deps = hr(o.deps), i.value = o.value)
                        }
                    }
                }
            }

            function ja(e, t, n, r, i, o, a, l, u, s, c, h, f) { var d = e.def.nodes[t]; return fa(e, d, n, r, i, o, a, l, u, s, c, h, f), 224 & d.flags ? Bn(e, t).value : void 0 }

            function La(e, t, n, r, i, o, a, l, u, s, c, h, f) { var d = e.def.nodes[t]; return va(e, d, n, r, i, o, a, l, u, s, c, h, f), 224 & d.flags ? Bn(e, t).value : void 0 }

            function Ha(e) { return nl(Za.detectChanges, ha, null, [e]) }

            function Va(e) { return nl(Za.checkNoChanges, ca, null, [e]) }

            function za(e) { return nl(Za.destroy, ga, null, [e]) }
            var Fa, Ba, qa, Za = function() { var e = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 }; return e[e.create] = "create", e[e.detectChanges] = "detectChanges", e[e.checkNoChanges] = "checkNoChanges", e[e.destroy] = "destroy", e[e.handleEvent] = "handleEvent", e }();

            function Ga(e, t) { Ba = e, qa = t }

            function Wa(e, t, n, r) { return Ga(e, t), nl(Za.handleEvent, e.def.handleEvent, null, [e, t, n, r]) }

            function Qa(e, t) { if (128 & e.state) throw jn(Za[Fa]); return Ga(e, $a(e, 0)), e.def.updateDirectives((function(e, n, r) { for (var i = e.def.nodes[n], o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), l = 3; l < o; l++) a[l - 3] = arguments[l]; return 0 === t ? Ja(e, i, r, a) : Ya(e, i, r, a), 16384 & i.flags && Ga(e, $a(e, n)), 224 & i.flags ? Bn(e, i.nodeIndex).value : void 0 }), e) }

            function Ka(e, t) { if (128 & e.state) throw jn(Za[Fa]); return Ga(e, Xa(e, 0)), e.def.updateRenderer((function(e, n, r) { for (var i = e.def.nodes[n], o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), l = 3; l < o; l++) a[l - 3] = arguments[l]; return 0 === t ? Ja(e, i, r, a) : Ya(e, i, r, a), 3 & i.flags && Ga(e, Xa(e, n)), 224 & i.flags ? Bn(e, i.nodeIndex).value : void 0 }), e) }

            function Ja(e, t, n, r) {
                if (fa.apply(void 0, [e, t, n].concat(_toConsumableArray(r)))) {
                    var i = 1 === n ? r[0] : r;
                    if (16384 & t.flags) {
                        for (var o = {}, a = 0; a < t.bindings.length; a++) {
                            var l = t.bindings[a],
                                u = i[a];
                            8 & l.flags && (o[(d = l.nonMinifiedName, v = void 0, v = d.replace(/[$@]/g, "_"), "ng-reflect-".concat(d = v.replace(Rt, (function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return "-" + t[1].toLowerCase() }))))] = Pt(u))
                        }
                        var s = t.parent,
                            c = zn(e, s.nodeIndex).renderElement;
                        if (s.element.name)
                            for (var h in o) {
                                var f = o[h];
                                null != f ? e.renderer.setAttribute(c, h, f) : e.renderer.removeAttribute(c, h)
                            } else e.renderer.setValue(c, "bindings=".concat(JSON.stringify(o, null, 2)))
                    }
                }
                var d, v
            }

            function Ya(e, t, n, r) { va.apply(void 0, [e, t, n].concat(_toConsumableArray(r))) }

            function $a(e, t) { for (var n = t; n < e.def.nodes.length; n++) { var r = e.def.nodes[n]; if (16384 & r.flags && r.bindings && r.bindings.length) return n } return null }

            function Xa(e, t) { for (var n = t; n < e.def.nodes.length; n++) { var r = e.def.nodes[n]; if (3 & r.flags && r.bindings && r.bindings.length) return n } return null }
            var el = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.view = t, this.nodeIndex = n, null == n && (this.nodeIndex = n = 0), this.nodeDef = t.def.nodes[n];
                    for (var r = this.nodeDef, i = t; r && 0 == (1 & r.flags);) r = r.parent;
                    if (!r)
                        for (; !r && i;) r = ar(i), i = i.parent;
                    this.elDef = r, this.elView = i
                }
                return _createClass(e, [{
                    key: "logError",
                    value: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i, o;
                        2 & this.nodeDef.flags ? (i = this.view.def, o = this.nodeDef.nodeIndex) : (i = this.elView.def, o = this.elDef.nodeIndex);
                        var a = function(e, t) { for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++; return n }(i, o),
                            l = -1;
                        i.factory((function() { var t; return ++l === a ? (t = e.error).bind.apply(t, [e].concat(n)) : Gn })), l < a && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), e.error.apply(e, n))
                    }
                }, { key: "elOrCompView", get: function() { return zn(this.elView, this.elDef.nodeIndex).componentView || this.view } }, { key: "injector", get: function() { return Zr(this.elView, this.elDef) } }, { key: "component", get: function() { return this.elOrCompView.component } }, { key: "context", get: function() { return this.elOrCompView.context } }, {
                    key: "providerTokens",
                    get: function() {
                        var e = [];
                        if (this.elDef)
                            for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                                var n = this.elView.def.nodes[t];
                                20224 & n.flags && e.push(n.provider.token), t += n.childCount
                            }
                        return e
                    }
                }, {
                    key: "references",
                    get: function() {
                        var e = {};
                        if (this.elDef) {
                            tl(this.elView, this.elDef, e);
                            for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                                var n = this.elView.def.nodes[t];
                                20224 & n.flags && tl(this.elView, n, e), t += n.childCount
                            }
                        }
                        return e
                    }
                }, { key: "componentRenderElement", get: function() { var e = function(e) { for (; e && !ur(e);) e = e.parent; return e.parent ? zn(e.parent, ar(e).nodeIndex) : null }(this.elOrCompView); return e ? e.renderElement : void 0 } }, { key: "renderNode", get: function() { return 2 & this.nodeDef.flags ? lr(this.view, this.nodeDef) : lr(this.elView, this.elDef) } }]), e
            }();

            function tl(e, t, n) { for (var r in t.references) n[r] = Jo(e, t, t.references[r]) }

            function nl(e, t, n, r) {
                var i, o, a = Fa,
                    l = Ba,
                    u = qa;
                try { Fa = e; var s = t.apply(n, r); return Ba = l, qa = u, Fa = a, s } catch (c) { if (Je(c) || !Ba) throw c; throw i = c, o = rl(), i instanceof Error || (i = new Error(i.toString())), Un(i, o), i }
            }

            function rl() { return Ba ? new el(Ba, qa) : null }
            var il = function() {
                    function e(t) { _classCallCheck(this, e), this.delegate = t }
                    return _createClass(e, [{ key: "createRenderer", value: function(e, t) { return new ol(this.delegate.createRenderer(e, t)) } }, { key: "begin", value: function() { this.delegate.begin && this.delegate.begin() } }, { key: "end", value: function() { this.delegate.end && this.delegate.end() } }, { key: "whenRenderingDone", value: function() { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null) } }]), e
                }(),
                ol = function() {
                    function e(t) { _classCallCheck(this, e), this.delegate = t, this.debugContextFactory = rl, this.data = this.delegate.data }
                    return _createClass(e, [{ key: "createDebugContext", value: function(e) { return this.debugContextFactory(e) } }, { key: "destroyNode", value: function(e) { var t = Do(e);! function(e) { No.delete(e.nativeNode) }(t), t instanceof Oo && (t.listeners.length = 0), this.delegate.destroyNode && this.delegate.destroyNode(e) } }, { key: "destroy", value: function() { this.delegate.destroy() } }, {
                        key: "createElement",
                        value: function(e, t) {
                            var n = this.delegate.createElement(e, t),
                                r = this.createDebugContext(n);
                            if (r) {
                                var i = new Io(n, null, r);
                                i.name = e, Mo(i)
                            }
                            return n
                        }
                    }, {
                        key: "createComment",
                        value: function(e) {
                            var t = this.delegate.createComment(e),
                                n = this.createDebugContext(t);
                            return n && Mo(new Oo(t, null, n)), t
                        }
                    }, {
                        key: "createText",
                        value: function(e) {
                            var t = this.delegate.createText(e),
                                n = this.createDebugContext(t);
                            return n && Mo(new Oo(t, null, n)), t
                        }
                    }, {
                        key: "appendChild",
                        value: function(e, t) {
                            var n = Do(e),
                                r = Do(t);
                            n && r && n instanceof Io && n.addChild(r), this.delegate.appendChild(e, t)
                        }
                    }, {
                        key: "insertBefore",
                        value: function(e, t, n) {
                            var r = Do(e),
                                i = Do(t),
                                o = Do(n);
                            r && i && r instanceof Io && r.insertBefore(o, i), this.delegate.insertBefore(e, t, n)
                        }
                    }, {
                        key: "removeChild",
                        value: function(e, t) {
                            var n = Do(e),
                                r = Do(t);
                            n && r && n instanceof Io && n.removeChild(r), this.delegate.removeChild(e, t)
                        }
                    }, {
                        key: "selectRootElement",
                        value: function(e, t) {
                            var n = this.delegate.selectRootElement(e, t),
                                r = rl();
                            return r && Mo(new Io(n, null, r)), n
                        }
                    }, {
                        key: "setAttribute",
                        value: function(e, t, n, r) {
                            var i = Do(e);
                            i && i instanceof Io && (i.attributes[r ? r + ":" + t : t] = n), this.delegate.setAttribute(e, t, n, r)
                        }
                    }, {
                        key: "removeAttribute",
                        value: function(e, t, n) {
                            var r = Do(e);
                            r && r instanceof Io && (r.attributes[n ? n + ":" + t : t] = null), this.delegate.removeAttribute(e, t, n)
                        }
                    }, {
                        key: "addClass",
                        value: function(e, t) {
                            var n = Do(e);
                            n && n instanceof Io && (n.classes[t] = !0), this.delegate.addClass(e, t)
                        }
                    }, {
                        key: "removeClass",
                        value: function(e, t) {
                            var n = Do(e);
                            n && n instanceof Io && (n.classes[t] = !1), this.delegate.removeClass(e, t)
                        }
                    }, {
                        key: "setStyle",
                        value: function(e, t, n, r) {
                            var i = Do(e);
                            i && i instanceof Io && (i.styles[t] = n), this.delegate.setStyle(e, t, n, r)
                        }
                    }, {
                        key: "removeStyle",
                        value: function(e, t, n) {
                            var r = Do(e);
                            r && r instanceof Io && (r.styles[t] = null), this.delegate.removeStyle(e, t, n)
                        }
                    }, {
                        key: "setProperty",
                        value: function(e, t, n) {
                            var r = Do(e);
                            r && r instanceof Io && (r.properties[t] = n), this.delegate.setProperty(e, t, n)
                        }
                    }, {
                        key: "listen",
                        value: function(e, t, n) {
                            if ("string" != typeof e) {
                                var r = Do(e);
                                r && r.listeners.push(new Ao(t, n))
                            }
                            return this.delegate.listen(e, t, n)
                        }
                    }, { key: "parentNode", value: function(e) { return this.delegate.parentNode(e) } }, { key: "nextSibling", value: function(e) { return this.delegate.nextSibling(e) } }, { key: "setValue", value: function(e, t) { return this.delegate.setValue(e, t) } }]), e
                }();
            var al = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).moduleType = e, i._bootstrapComponents = n, i._ngModuleDefFactory = r, i }
                    return _inherits(t, e), _createClass(t, [{
                        key: "create",
                        value: function(e) {
                            ! function() {
                                if (!ba) {
                                    ba = !0;
                                    var e = nt() ? { setCurrentNode: Ga, createRootView: xa, createEmbeddedView: Ta, createComponentView: Ra, createNgModuleRef: Pa, overrideProvider: Na, overrideComponentView: Da, clearOverrides: Ma, checkAndUpdateView: Ha, checkNoChangesView: Va, destroyView: za, createDebugContext: function(e, t) { return new el(e, t) }, handleEvent: Wa, updateDirectives: Qa, updateRenderer: Ka } : { setCurrentNode: function() {}, createRootView: Sa, createEmbeddedView: ia, createComponentView: aa, createNgModuleRef: Jr, overrideProvider: Gn, overrideComponentView: Gn, clearOverrides: Gn, checkAndUpdateView: ha, checkNoChangesView: ca, destroyView: ga, createDebugContext: function(e, t) { return new el(e, t) }, handleEvent: function(e, t, n, r) { return e.def.handleEvent(e, t, n, r) }, updateDirectives: function(e, t) { return e.def.updateDirectives(0 === t ? ja : La, e) }, updateRenderer: function(e, t) { return e.def.updateRenderer(0 === t ? ja : La, e) } };
                                    Zn.setCurrentNode = e.setCurrentNode, Zn.createRootView = e.createRootView, Zn.createEmbeddedView = e.createEmbeddedView, Zn.createComponentView = e.createComponentView, Zn.createNgModuleRef = e.createNgModuleRef, Zn.overrideProvider = e.overrideProvider, Zn.overrideComponentView = e.overrideComponentView, Zn.clearOverrides = e.clearOverrides, Zn.checkAndUpdateView = e.checkAndUpdateView, Zn.checkNoChangesView = e.checkNoChangesView, Zn.destroyView = e.destroyView, Zn.resolveDep = vi, Zn.createDebugContext = e.createDebugContext, Zn.handleEvent = e.handleEvent, Zn.updateDirectives = e.updateDirectives, Zn.updateRenderer = e.updateRenderer, Zn.dirtyParentQueries = Wo
                                }
                            }();
                            var t = function(e) {
                                var t = Array.from(e.providers),
                                    n = Array.from(e.modules),
                                    r = {};
                                for (var i in e.providersByKey) r[i] = e.providersByKey[i];
                                return { factory: e.factory, isRoot: e.isRoot, providers: t, modules: n, providersByKey: r }
                            }(vr(this._ngModuleDefFactory));
                            return Zn.createNgModuleRef(this.moduleType, e || Dt.NULL, this._bootstrapComponents, t)
                        }
                    }]), t
                }(Fe),
                ll = function e() { _classCallCheck(this, e) },
                ul = function() {
                    function e(t, n) { _classCallCheck(this, e), this.injector = t, this.router = n, this.title = "Grupo Giacomini", this.assetsDirectoryPath = this.injector.get("assetsDirectoryPath") }
                    return _createClass(e, [{ key: "ngOnInit", value: function() {} }, { key: "goHome", value: function() { this.router.navigateByUrl("/home") } }]), e
                }(),
                sl = function e() { _classCallCheck(this, e) },
                cl = new Re("Location Initialized"),
                hl = function e() { _classCallCheck(this, e) },
                fl = new Re("appBaseHref"),
                dl = function() {
                    function e(t, n) {
                        var r = this;
                        _classCallCheck(this, e), this._subject = new Ti, this._urlChangeListeners = [], this._platformStrategy = t;
                        var i = this._platformStrategy.getBaseHref();
                        this._platformLocation = n, this._baseHref = e.stripTrailingSlash(vl(i)), this._platformStrategy.onPopState((function(e) { r._subject.emit({ url: r.path(!0), pop: !0, state: e.state, type: e.type }) }))
                    }
                    return _createClass(e, [{ key: "path", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this.normalize(this._platformStrategy.path(e)) } }, { key: "getState", value: function() { return this._platformLocation.getState() } }, { key: "isCurrentPathEqualTo", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this.path() == this.normalize(t + e.normalizeQueryParams(n)) } }, { key: "normalize", value: function(t) { return e.stripTrailingSlash(function(e, t) { return e && t.startsWith(e) ? t.substring(e.length) : t }(this._baseHref, vl(t))) } }, { key: "prepareExternalUrl", value: function(e) { return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e) } }, {
                        key: "go",
                        value: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this._platformStrategy.pushState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r)
                        }
                    }, {
                        key: "replaceState",
                        value: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this._platformStrategy.replaceState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r)
                        }
                    }, { key: "forward", value: function() { this._platformStrategy.forward() } }, { key: "back", value: function() { this._platformStrategy.back() } }, {
                        key: "onUrlChange",
                        value: function(e) {
                            var t = this;
                            this._urlChangeListeners.push(e), this.subscribe((function(e) { t._notifyUrlChangeListeners(e.url, e.state) }))
                        }
                    }, {
                        key: "_notifyUrlChangeListeners",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            this._urlChangeListeners.forEach((function(n) { return n(e, t) }))
                        }
                    }, { key: "subscribe", value: function(e, t, n) { return this._subject.subscribe({ next: e, error: t, complete: n }) } }], [{ key: "normalizeQueryParams", value: function(e) { return e && "?" !== e[0] ? "?" + e : e } }, { key: "joinWithSlash", value: function(e, t) { if (0 == e.length) return t; if (0 == t.length) return e; var n = 0; return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t } }, {
                        key: "stripTrailingSlash",
                        value: function(e) {
                            var t = e.match(/#|\?|$/),
                                n = t && t.index || e.length;
                            return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
                        }
                    }]), e
                }();

            function vl(e) { return e.replace(/\/index.html$/, "") }
            var pl, gl = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r }
                    return _inherits(t, e), _createClass(t, [{ key: "onPopState", value: function(e) { this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "path", value: function() { arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; var e = this._platformLocation.hash; return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e } }, { key: "prepareExternalUrl", value: function(e) { var t = dl.joinWithSlash(this._baseHref, e); return t.length > 0 ? "#" + t : t } }, {
                        key: "pushState",
                        value: function(e, t, n, r) {
                            var i = this.prepareExternalUrl(n + dl.normalizeQueryParams(r));
                            0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i)
                        }
                    }, {
                        key: "replaceState",
                        value: function(e, t, n, r) {
                            var i = this.prepareExternalUrl(n + dl.normalizeQueryParams(r));
                            0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i)
                        }
                    }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), t
                }(hl),
                yl = function(e) {
                    function t(e, n) { var r; if (_classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); return r._baseHref = n, _possibleConstructorReturn(r) }
                    return _inherits(t, e), _createClass(t, [{ key: "onPopState", value: function(e) { this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "prepareExternalUrl", value: function(e) { return dl.joinWithSlash(this._baseHref, e) } }, {
                        key: "path",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this._platformLocation.pathname + dl.normalizeQueryParams(this._platformLocation.search),
                                n = this._platformLocation.hash;
                            return n && e ? "".concat(t).concat(n) : t
                        }
                    }, {
                        key: "pushState",
                        value: function(e, t, n, r) {
                            var i = this.prepareExternalUrl(n + dl.normalizeQueryParams(r));
                            this._platformLocation.pushState(e, t, i)
                        }
                    }, {
                        key: "replaceState",
                        value: function(e, t, n, r) {
                            var i = this.prepareExternalUrl(n + dl.normalizeQueryParams(r));
                            this._platformLocation.replaceState(e, t, i)
                        }
                    }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), t
                }(hl),
                ml = function() { var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 }; return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e }(),
                _l = new Re("UseV4Plurals"),
                kl = function e() { _classCallCheck(this, e) },
                Cl = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).locale = e, r.deprecatedPluralFn = n, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "getPluralCategory",
                        value: function(e, t) {
                            switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : function(e) {
                                return function(e) {
                                    var t = e.toLowerCase().replace(/_/g, "-"),
                                        n = Ci[t];
                                    if (n) return n;
                                    var r = t.split("-")[0];
                                    if (n = Ci[r]) return n;
                                    if ("en" === r) return Si;
                                    throw new Error('Missing locale data for the locale "'.concat(e, '".'))
                                }(e)[wi.PluralCase]
                            }(t || this.locale)(e)) {
                                case ml.Zero:
                                    return "zero";
                                case ml.One:
                                    return "one";
                                case ml.Two:
                                    return "two";
                                case ml.Few:
                                    return "few";
                                case ml.Many:
                                    return "many";
                                default:
                                    return "other"
                            }
                        }
                    }]), t
                }(kl),
                wl = function e() { _classCallCheck(this, e) },
                bl = new Re("DocumentToken"),
                Sl = "server",
                xl = ((pl = function e() { _classCallCheck(this, e) }).ngInjectableDef = pe({ token: pl, providedIn: "root", factory: function() { return new El(Le(bl), window, Le(Xe)) } }), pl),
                El = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.document = t, this.window = n, this.errorHandler = r, this.offset = function() { return [0, 0] } }
                    return _createClass(e, [{ key: "setOffset", value: function(e) { this.offset = Array.isArray(e) ? function() { return e } : e } }, { key: "getScrollPosition", value: function() { return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0] } }, { key: "scrollToPosition", value: function(e) { this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]) } }, { key: "scrollToAnchor", value: function(e) { if (this.supportScrollRestoration()) { e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1"); try { var t = this.document.querySelector("#".concat(e)); if (t) return void this.scrollToElement(t); var n = this.document.querySelector("[name='".concat(e, "']")); if (n) return void this.scrollToElement(n) } catch (r) { this.errorHandler.handleError(r) } } } }, {
                        key: "setHistoryScrollRestoration",
                        value: function(e) {
                            if (this.supportScrollRestoration()) {
                                var t = this.window.history;
                                t && t.scrollRestoration && (t.scrollRestoration = e)
                            }
                        }
                    }, {
                        key: "scrollToElement",
                        value: function(e) {
                            var t = e.getBoundingClientRect(),
                                n = t.left + this.window.pageXOffset,
                                r = t.top + this.window.pageYOffset,
                                i = this.offset();
                            this.window.scrollTo(n - i[0], r - i[1])
                        }
                    }, { key: "supportScrollRestoration", value: function() { try { return !!this.window && !!this.window.scrollTo } catch (e) { return !1 } } }]), e
                }(),
                Tl = new b((function(e) { return e.complete() }));

            function Rl(e) { return e ? function(e) { return new b((function(t) { return e.schedule((function() { return t.complete() })) })) }(e) : Tl }

            function Pl(e) { var t = new b((function(t) { t.next(e), t.complete() })); return t._isScalar = !0, t.value = e, t }

            function Al() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = t[t.length - 1];
                switch (I(r) ? t.pop() : r = void 0, t.length) {
                    case 0:
                        return Rl(r);
                    case 1:
                        return r ? W(t, r) : Pl(t[0]);
                    default:
                        return W(t, r)
                }
            }
            var Ol = function(e) {
                function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._value = e, n }
                return _inherits(t, e), _createClass(t, [{ key: "_subscribe", value: function(e) { var n = _get(_getPrototypeOf(t.prototype), "_subscribe", this).call(this, e); return n && !n.closed && e.next(this._value), n } }, { key: "getValue", value: function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new T; return this._value } }, { key: "next", value: function(e) { _get(_getPrototypeOf(t.prototype), "next", this).call(this, this._value = e) } }, { key: "value", get: function() { return this.getValue() } }]), t
            }(A);

            function Il() { return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this }
            Il.prototype = Object.create(Error.prototype);
            var Nl = Il,
                Dl = {},
                Ml = function() {
                    function e(t) { _classCallCheck(this, e), this.resultSelector = t }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Ul(e, this.resultSelector)) } }]), e
                }(),
                Ul = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).resultSelector = n, r.active = 0, r.values = [], r.observables = [], r }
                    return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.values.push(Dl), this.observables.push(e) } }, {
                        key: "_complete",
                        value: function() {
                            var e = this.observables,
                                t = e.length;
                            if (0 === t) this.destination.complete();
                            else {
                                this.active = t, this.toRespond = t;
                                for (var n = 0; n < t; n++) {
                                    var r = e[n];
                                    this.add(F(this, r, r, n))
                                }
                            }
                        }
                    }, { key: "notifyComplete", value: function(e) { 0 == (this.active -= 1) && this.destination.complete() } }, {
                        key: "notifyNext",
                        value: function(e, t, n, r, i) {
                            var o = this.values,
                                a = this.toRespond ? o[n] === Dl ? --this.toRespond : this.toRespond : 0;
                            o[n] = t, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
                        }
                    }, {
                        key: "_tryResultSelector",
                        value: function(e) {
                            var t;
                            try { t = this.resultSelector.apply(this, e) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(t)
                        }
                    }]), t
                }(B);

            function jl(e) { return new b((function(t) { var n; try { n = e() } catch (r) { return void t.error(r) } return (n ? Q(n) : Rl()).subscribe(t) })) }

            function Ll() { return X(1) }

            function Hl(e, t) { return function(n) { return n.lift(new Vl(e, t)) } }
            var Vl = function() {
                    function e(t, n) { _classCallCheck(this, e), this.predicate = t, this.thisArg = n }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new zl(e, this.predicate, this.thisArg)) } }]), e
                }(),
                zl = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).predicate = n, i.thisArg = r, i.count = 0, i }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            var t;
                            try { t = this.predicate.call(this.thisArg, e, this.count++) } catch (n) { return void this.destination.error(n) }
                            t && this.destination.next(e)
                        }
                    }]), t
                }(g);

            function Fl() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this }
            Fl.prototype = Object.create(Error.prototype);
            var Bl = Fl;

            function ql(e) { return function(t) { return 0 === e ? Rl() : t.lift(new Zl(e)) } }
            var Zl = function() {
                    function e(t) { if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Bl }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Gl(e, this.total)) } }]), e
                }(),
                Gl = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).total = n, r.ring = new Array, r.count = 0, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            var t = this.ring,
                                n = this.total,
                                r = this.count++;
                            t.length < n ? t.push(e) : t[r % n] = e
                        }
                    }, {
                        key: "_complete",
                        value: function() {
                            var e = this.destination,
                                t = this.count;
                            if (t > 0)
                                for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                                    var o = t++ % n;
                                    e.next(r[o])
                                }
                            e.complete()
                        }
                    }]), t
                }(g);

            function Wl(e, t, n) { return function(r) { return r.lift(new Ql(e, t, n)) } }
            var Ql = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.nextOrObserver = t, this.error = n, this.complete = r }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Kl(e, this.nextOrObserver, this.error, this.complete)) } }]), e
                }(),
                Kl = function(e) {
                    function t(e, n, i, o) { var a; return _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)))._tapNext = _, a._tapError = _, a._tapComplete = _, a._tapError = i || _, a._tapComplete = o || _, r(n) ? (a._context = _assertThisInitialized(a), a._tapNext = n) : n && (a._context = n, a._tapNext = n.next || _, a._tapError = n.error || _, a._tapComplete = n.complete || _), a }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            try { this._tapNext.call(this._context, e) } catch (t) { return void this.destination.error(t) }
                            this.destination.next(e)
                        }
                    }, {
                        key: "_error",
                        value: function(e) {
                            try { this._tapError.call(this._context, e) } catch (e) { return void this.destination.error(e) }
                            this.destination.error(e)
                        }
                    }, { key: "_complete", value: function() { try { this._tapComplete.call(this._context) } catch (e) { return void this.destination.error(e) } return this.destination.complete() } }]), t
                }(g),
                Jl = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yl; return Wl({ hasValue: !1, next: function() { this.hasValue = !0 }, complete: function() { if (!this.hasValue) throw e() } }) };

            function Yl() { return new Nl }

            function $l() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return function(t) { return t.lift(new Xl(e)) } }
            var Xl = function() {
                    function e(t) { _classCallCheck(this, e), this.defaultValue = t }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new eu(e, this.defaultValue)) } }]), e
                }(),
                eu = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).defaultValue = n, r.isEmpty = !0, r }
                    return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.isEmpty = !1, this.destination.next(e) } }, { key: "_complete", value: function() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() } }]), t
                }(g);

            function tu(e, t) { var n = arguments.length >= 2; return function(r) { return r.pipe(e ? Hl((function(t, n) { return e(t, n, r) })) : $, ql(1), n ? $l(t) : Jl((function() { return new Nl }))) } }

            function nu(e) {
                return function(t) {
                    var n = new ru(e),
                        r = t.lift(n);
                    return n.caught = r
                }
            }
            var ru = function() {
                    function e(t) { _classCallCheck(this, e), this.selector = t }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new iu(e, this.selector, this.caught)) } }]), e
                }(),
                iu = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).selector = n, i.caught = r, i }
                    return _inherits(t, e), _createClass(t, [{
                        key: "error",
                        value: function(e) {
                            if (!this.isStopped) {
                                var n;
                                try { n = this.selector(e, this.caught) } catch (i) { return void _get(_getPrototypeOf(t.prototype), "error", this).call(this, i) }
                                this._unsubscribeAndRecycle();
                                var r = new N(this, void 0, void 0);
                                this.add(r), F(this, n, void 0, void 0, r)
                            }
                        }
                    }]), t
                }(B);

            function ou(e) { return function(t) { return 0 === e ? Rl() : t.lift(new au(e)) } }
            var au = function() {
                    function e(t) { if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Bl }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new lu(e, this.total)) } }]), e
                }(),
                lu = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).total = n, r.count = 0, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            var t = this.total,
                                n = ++this.count;
                            n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
                        }
                    }]), t
                }(g);

            function uu(e, t) { var n = arguments.length >= 2; return function(r) { return r.pipe(e ? Hl((function(t, n) { return e(t, n, r) })) : $, ou(1), n ? $l(t) : Jl((function() { return new Nl }))) } }
            var su = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.predicate = t, this.thisArg = n, this.source = r }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new cu(e, this.predicate, this.thisArg, this.source)) } }]), e
                }(),
                cu = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).predicate = n, o.thisArg = r, o.source = i, o.index = 0, o.thisArg = r || _assertThisInitialized(o), o }
                    return _inherits(t, e), _createClass(t, [{ key: "notifyComplete", value: function(e) { this.destination.next(e), this.destination.complete() } }, {
                        key: "_next",
                        value: function(e) {
                            var t = !1;
                            try { t = this.predicate.call(this.thisArg, e, this.index++, this.source) } catch (n) { return void this.destination.error(n) }
                            t || this.notifyComplete(!1)
                        }
                    }, { key: "_complete", value: function() { this.notifyComplete(!0) } }]), t
                }(g);

            function hu(e, t) { return "function" == typeof t ? function(n) { return n.pipe(hu((function(n, r) { return Q(e(n, r)).pipe(q((function(e, i) { return t(n, e, r, i) }))) }))) } : function(t) { return t.lift(new fu(e)) } }
            var fu = function() {
                    function e(t) { _classCallCheck(this, e), this.project = t }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new du(e, this.project)) } }]), e
                }(),
                du = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, r.index = 0, r }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            var t, n = this.index++;
                            try { t = this.project(e, n) } catch (r) { return void this.destination.error(r) }
                            this._innerSub(t, e, n)
                        }
                    }, {
                        key: "_innerSub",
                        value: function(e, t, n) {
                            var r = this.innerSubscription;
                            r && r.unsubscribe();
                            var i = new N(this, void 0, void 0);
                            this.destination.add(i), this.innerSubscription = F(this, e, t, n, i)
                        }
                    }, {
                        key: "_complete",
                        value: function() {
                            var e = this.innerSubscription;
                            e && !e.closed || _get(_getPrototypeOf(t.prototype), "_complete", this).call(this), this.unsubscribe()
                        }
                    }, { key: "_unsubscribe", value: function() { this.innerSubscription = null } }, { key: "notifyComplete", value: function(e) { this.destination.remove(e), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(t.prototype), "_complete", this).call(this) } }, { key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }]), t
                }(B);

            function vu(e, t) {
                var n = !1;
                return arguments.length >= 2 && (n = !0),
                    function(r) { return r.lift(new pu(e, t, n)) }
            }
            var pu = function() {
                    function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        _classCallCheck(this, e), this.accumulator = t, this.seed = n, this.hasSeed = r
                    }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new gu(e, this.accumulator, this.seed, this.hasSeed)) } }]), e
                }(),
                gu = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).accumulator = n, o._seed = r, o.hasSeed = i, o.index = 0, o }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_next",
                        value: function(e) {
                            if (this.hasSeed) return this._tryNext(e);
                            this.seed = e, this.destination.next(e)
                        }
                    }, {
                        key: "_tryNext",
                        value: function(e) {
                            var t, n = this.index++;
                            try { t = this.accumulator(this.seed, e, n) } catch (r) { this.destination.error(r) }
                            this.seed = t, this.destination.next(t)
                        }
                    }, { key: "seed", get: function() { return this._seed }, set: function(e) { this.hasSeed = !0, this._seed = e } }]), t
                }(g);

            function yu(e, t) { return K(e, t, 1) }
            var mu = function() {
                    function e(t) { _classCallCheck(this, e), this.callback = t }
                    return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new _u(e, this.callback)) } }]), e
                }(),
                _u = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).add(new d(n)), r }
                    return _inherits(t, e), t
                }(g),
                ku = null;

            function Cu() { return ku }
            var wu, bu = function(e) {
                    function t() {
                        var e;
                        _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._animationPrefix = null, e._transitionEnd = null;
                        try {
                            var n = e.createElement("div", document);
                            if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                            else
                                for (var r = ["Webkit", "Moz", "O", "ms"], i = 0; i < r.length; i++)
                                    if (null != e.getStyle(n, r[i] + "AnimationName")) { e._animationPrefix = "-" + r[i].toLowerCase() + "-"; break } var o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                            Object.keys(o).forEach((function(t) { null != e.getStyle(n, t) && (e._transitionEnd = o[t]) }))
                        } catch (a) { e._animationPrefix = null, e._transitionEnd = null }
                        return e
                    }
                    return _inherits(t, e), _createClass(t, [{ key: "getDistributedNodes", value: function(e) { return e.getDistributedNodes() } }, { key: "resolveAndSetHref", value: function(e, t, n) { e.href = null == n ? t : t + "/../" + n } }, { key: "supportsDOMEvents", value: function() { return !0 } }, { key: "supportsNativeShadowDOM", value: function() { return "function" == typeof document.body.createShadowRoot } }, { key: "getAnimationPrefix", value: function() { return this._animationPrefix ? this._animationPrefix : "" } }, { key: "getTransitionEnd", value: function() { return this._transitionEnd ? this._transitionEnd : "" } }, { key: "supportsAnimation", value: function() { return null != this._animationPrefix && null != this._transitionEnd } }]), t
                }(function() {
                    function e() { _classCallCheck(this, e), this.resourceLoaderType = null }
                    return _createClass(e, [{ key: "attrToPropMap", get: function() { return this._attrToPropMap }, set: function(e) { this._attrToPropMap = e } }]), e
                }()),
                Su = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
                xu = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
                Eu = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" },
                Tu = function() { if (Te.Node) return Te.Node.prototype.contains || function(e) { return !!(16 & this.compareDocumentPosition(e)) } }(),
                Ru = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "parse", value: function(e) { throw new Error("parse not implemented") } }, { key: "hasProperty", value: function(e, t) { return t in e } }, { key: "setProperty", value: function(e, t, n) { e[t] = n } }, { key: "getProperty", value: function(e, t) { return e[t] } }, { key: "invoke", value: function(e, t, n) { e[t].apply(e, _toConsumableArray(n)) } }, { key: "logError", value: function(e) { window.console && (console.error ? console.error(e) : console.log(e)) } }, { key: "log", value: function(e) { window.console && window.console.log && window.console.log(e) } }, { key: "logGroup", value: function(e) { window.console && window.console.group && window.console.group(e) } }, { key: "logGroupEnd", value: function() { window.console && window.console.groupEnd && window.console.groupEnd() } }, { key: "contains", value: function(e, t) { return Tu.call(e, t) } }, { key: "querySelector", value: function(e, t) { return e.querySelector(t) } }, { key: "querySelectorAll", value: function(e, t) { return e.querySelectorAll(t) } }, { key: "on", value: function(e, t, n) { e.addEventListener(t, n, !1) } }, {
                        key: "onAndCancel",
                        value: function(e, t, n) {
                            return e.addEventListener(t, n, !1),
                                function() { e.removeEventListener(t, n, !1) }
                        }
                    }, { key: "dispatchEvent", value: function(e, t) { e.dispatchEvent(t) } }, { key: "createMouseEvent", value: function(e) { var t = this.getDefaultDocument().createEvent("MouseEvent"); return t.initEvent(e, !0, !0), t } }, { key: "createEvent", value: function(e) { var t = this.getDefaultDocument().createEvent("Event"); return t.initEvent(e, !0, !0), t } }, { key: "preventDefault", value: function(e) { e.preventDefault(), e.returnValue = !1 } }, { key: "isPrevented", value: function(e) { return e.defaultPrevented || null != e.returnValue && !e.returnValue } }, { key: "getInnerHTML", value: function(e) { return e.innerHTML } }, { key: "getTemplateContent", value: function(e) { return "content" in e && this.isTemplateElement(e) ? e.content : null } }, { key: "getOuterHTML", value: function(e) { return e.outerHTML } }, { key: "nodeName", value: function(e) { return e.nodeName } }, { key: "nodeValue", value: function(e) { return e.nodeValue } }, { key: "type", value: function(e) { return e.type } }, { key: "content", value: function(e) { return this.hasProperty(e, "content") ? e.content : e } }, { key: "firstChild", value: function(e) { return e.firstChild } }, { key: "nextSibling", value: function(e) { return e.nextSibling } }, { key: "parentElement", value: function(e) { return e.parentNode } }, { key: "childNodes", value: function(e) { return e.childNodes } }, { key: "childNodesAsList", value: function(e) { for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++) n[r] = t[r]; return n } }, { key: "clearNodes", value: function(e) { for (; e.firstChild;) e.removeChild(e.firstChild) } }, { key: "appendChild", value: function(e, t) { e.appendChild(t) } }, { key: "removeChild", value: function(e, t) { e.removeChild(t) } }, { key: "replaceChild", value: function(e, t, n) { e.replaceChild(t, n) } }, { key: "remove", value: function(e) { return e.parentNode && e.parentNode.removeChild(e), e } }, { key: "insertBefore", value: function(e, t, n) { e.insertBefore(n, t) } }, { key: "insertAllBefore", value: function(e, t, n) { n.forEach((function(n) { return e.insertBefore(n, t) })) } }, { key: "insertAfter", value: function(e, t, n) { e.insertBefore(n, t.nextSibling) } }, { key: "setInnerHTML", value: function(e, t) { e.innerHTML = t } }, { key: "getText", value: function(e) { return e.textContent } }, { key: "setText", value: function(e, t) { e.textContent = t } }, { key: "getValue", value: function(e) { return e.value } }, { key: "setValue", value: function(e, t) { e.value = t } }, { key: "getChecked", value: function(e) { return e.checked } }, { key: "setChecked", value: function(e, t) { e.checked = t } }, { key: "createComment", value: function(e) { return this.getDefaultDocument().createComment(e) } }, { key: "createTemplate", value: function(e) { var t = this.getDefaultDocument().createElement("template"); return t.innerHTML = e, t } }, { key: "createElement", value: function(e, t) { return (t = t || this.getDefaultDocument()).createElement(e) } }, { key: "createElementNS", value: function(e, t, n) { return (n = n || this.getDefaultDocument()).createElementNS(e, t) } }, { key: "createTextNode", value: function(e, t) { return (t = t || this.getDefaultDocument()).createTextNode(e) } }, { key: "createScriptTag", value: function(e, t, n) { var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT"); return r.setAttribute(e, t), r } }, { key: "createStyleElement", value: function(e, t) { var n = (t = t || this.getDefaultDocument()).createElement("style"); return this.appendChild(n, this.createTextNode(e, t)), n } }, { key: "createShadowRoot", value: function(e) { return e.createShadowRoot() } }, { key: "getShadowRoot", value: function(e) { return e.shadowRoot } }, { key: "getHost", value: function(e) { return e.host } }, { key: "clone", value: function(e) { return e.cloneNode(!0) } }, { key: "getElementsByClassName", value: function(e, t) { return e.getElementsByClassName(t) } }, { key: "getElementsByTagName", value: function(e, t) { return e.getElementsByTagName(t) } }, { key: "classList", value: function(e) { return Array.prototype.slice.call(e.classList, 0) } }, { key: "addClass", value: function(e, t) { e.classList.add(t) } }, { key: "removeClass", value: function(e, t) { e.classList.remove(t) } }, { key: "hasClass", value: function(e, t) { return e.classList.contains(t) } }, { key: "setStyle", value: function(e, t, n) { e.style[t] = n } }, { key: "removeStyle", value: function(e, t) { e.style[t] = "" } }, { key: "getStyle", value: function(e, t) { return e.style[t] } }, { key: "hasStyle", value: function(e, t, n) { var r = this.getStyle(e, t) || ""; return n ? r == n : r.length > 0 } }, { key: "tagName", value: function(e) { return e.tagName } }, {
                        key: "attributeMap",
                        value: function(e) {
                            for (var t = new Map, n = e.attributes, r = 0; r < n.length; r++) {
                                var i = n.item(r);
                                t.set(i.name, i.value)
                            }
                            return t
                        }
                    }, { key: "hasAttribute", value: function(e, t) { return e.hasAttribute(t) } }, { key: "hasAttributeNS", value: function(e, t, n) { return e.hasAttributeNS(t, n) } }, { key: "getAttribute", value: function(e, t) { return e.getAttribute(t) } }, { key: "getAttributeNS", value: function(e, t, n) { return e.getAttributeNS(t, n) } }, { key: "setAttribute", value: function(e, t, n) { e.setAttribute(t, n) } }, { key: "setAttributeNS", value: function(e, t, n, r) { e.setAttributeNS(t, n, r) } }, { key: "removeAttribute", value: function(e, t) { e.removeAttribute(t) } }, { key: "removeAttributeNS", value: function(e, t, n) { e.removeAttributeNS(t, n) } }, { key: "templateAwareRoot", value: function(e) { return this.isTemplateElement(e) ? this.content(e) : e } }, { key: "createHtmlDocument", value: function() { return document.implementation.createHTMLDocument("fakeTitle") } }, { key: "getDefaultDocument", value: function() { return document } }, { key: "getBoundingClientRect", value: function(e) { try { return e.getBoundingClientRect() } catch (t) { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } } }, { key: "getTitle", value: function(e) { return e.title } }, { key: "setTitle", value: function(e, t) { e.title = t || "" } }, { key: "elementMatches", value: function(e, t) { return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t)) } }, { key: "isTemplateElement", value: function(e) { return this.isElementNode(e) && "TEMPLATE" === e.nodeName } }, { key: "isTextNode", value: function(e) { return e.nodeType === Node.TEXT_NODE } }, { key: "isCommentNode", value: function(e) { return e.nodeType === Node.COMMENT_NODE } }, { key: "isElementNode", value: function(e) { return e.nodeType === Node.ELEMENT_NODE } }, { key: "hasShadowRoot", value: function(e) { return null != e.shadowRoot && e instanceof HTMLElement } }, { key: "isShadowRoot", value: function(e) { return e instanceof DocumentFragment } }, { key: "importIntoDoc", value: function(e) { return document.importNode(this.templateAwareRoot(e), !0) } }, { key: "adoptNode", value: function(e) { return document.adoptNode(e) } }, { key: "getHref", value: function(e) { return e.getAttribute("href") } }, {
                        key: "getEventKey",
                        value: function(e) {
                            var t = e.key;
                            if (null == t) {
                                if (null == (t = e.keyIdentifier)) return "Unidentified";
                                t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Eu.hasOwnProperty(t) && (t = Eu[t]))
                            }
                            return xu[t] || t
                        }
                    }, { key: "getGlobalEventTarget", value: function(e, t) { return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null } }, { key: "getHistory", value: function() { return window.history } }, { key: "getLocation", value: function() { return window.location } }, { key: "getBaseHref", value: function(e) { var t, n = Pu || (Pu = document.querySelector("base")) ? Pu.getAttribute("href") : null; return null == n ? null : (t = n, wu || (wu = document.createElement("a")), wu.setAttribute("href", t), "/" === wu.pathname.charAt(0) ? wu.pathname : "/" + wu.pathname) } }, { key: "resetBaseElement", value: function() { Pu = null } }, { key: "getUserAgent", value: function() { return window.navigator.userAgent } }, { key: "setData", value: function(e, t, n) { this.setAttribute(e, "data-" + t, n) } }, { key: "getData", value: function(e, t) { return this.getAttribute(e, "data-" + t) } }, {
                        key: "getComputedStyle",
                        value: function(e) {
                            function t(t) { return e.apply(this, arguments) }
                            return t.toString = function() { return e.toString() }, t
                        }((function(e) { return getComputedStyle(e) }))
                    }, { key: "supportsWebAnimation", value: function() { return "function" == typeof Element.prototype.animate } }, { key: "performanceNow", value: function() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() } }, { key: "supportsCookies", value: function() { return !0 } }, {
                        key: "getCookie",
                        value: function(e) {
                            return function(e, t) {
                                t = encodeURIComponent(t);
                                var n = !0,
                                    r = !1,
                                    i = void 0;
                                try {
                                    for (var o, a = e.split(";")[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                        var l = o.value,
                                            u = l.indexOf("="),
                                            s = _slicedToArray(-1 == u ? [l, ""] : [l.slice(0, u), l.slice(u + 1)], 2),
                                            c = s[0],
                                            h = s[1];
                                        if (c.trim() === t) return decodeURIComponent(h)
                                    }
                                } catch (f) { r = !0, i = f } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } }
                                return null
                            }(document.cookie, e)
                        }
                    }, { key: "setCookie", value: function(e, t) { document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) } }, { key: "attrToPropMap", get: function() { return Su } }], [{
                        key: "makeCurrent",
                        value: function() {
                            var e;
                            e = new t, ku || (ku = e)
                        }
                    }]), t
                }(bu),
                Pu = null;

            function Au() { return !!window.history.pushState }
            var Ou = new Re("TRANSITION_ID"),
                Iu = [{
                    provide: Ai,
                    useFactory: function(e, t, n) {
                        return function() {
                            n.get(Oi).donePromise.then((function() {
                                var n = Cu();
                                Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter((function(t) { return n.getAttribute(t, "ng-transition") === e })).forEach((function(e) { return n.remove(e) }))
                            }))
                        }
                    },
                    deps: [Ou, bl, Dt],
                    multi: !0
                }],
                Nu = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{
                        key: "addToWindow",
                        value: function(e) {
                            Te.getAngularTestability = function(t) {
                                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    r = e.findTestabilityInTree(t, n);
                                if (null == r) throw new Error("Could not find testability for element.");
                                return r
                            }, Te.getAllAngularTestabilities = function() { return e.getAllTestabilities() }, Te.getAllAngularRootElements = function() { return e.getAllRootElements() }, Te.frameworkStabilizers || (Te.frameworkStabilizers = []), Te.frameworkStabilizers.push((function(e) {
                                var t = Te.getAllAngularTestabilities(),
                                    n = t.length,
                                    r = !1,
                                    i = function(t) { r = r || t, 0 == --n && e(r) };
                                t.forEach((function(e) { e.whenStable(i) }))
                            }))
                        }
                    }, { key: "findTestabilityInTree", value: function(e, t, n) { if (null == t) return null; var r = e.getTestability(t); return null != r ? r : n ? Cu().isShadowRoot(t) ? this.findTestabilityInTree(e, Cu().getHost(t), !0) : this.findTestabilityInTree(e, Cu().parentElement(t), !0) : null } }], [{
                        key: "init",
                        value: function() {
                            var t;
                            t = new e, vo = t
                        }
                    }]), e
                }();

            function Du(e, t) { "undefined" != typeof COMPILED && COMPILED || ((Te.ng = Te.ng || {})[e] = t) }
            var Mu = { ApplicationRef: bo, NgZone: ro };

            function Uu(e) { return Do(e) }
            var ju = new Re("EventManagerPlugins"),
                Lu = function() {
                    function e(t, n) {
                        var r = this;
                        _classCallCheck(this, e), this._zone = n, this._eventNameToPlugin = new Map, t.forEach((function(e) { return e.manager = r })), this._plugins = t.slice().reverse()
                    }
                    return _createClass(e, [{ key: "addEventListener", value: function(e, t, n) { return this._findPluginFor(t).addEventListener(e, t, n) } }, { key: "addGlobalEventListener", value: function(e, t, n) { return this._findPluginFor(t).addGlobalEventListener(e, t, n) } }, { key: "getZone", value: function() { return this._zone } }, { key: "_findPluginFor", value: function(e) { var t = this._eventNameToPlugin.get(e); if (t) return t; for (var n = this._plugins, r = 0; r < n.length; r++) { var i = n[r]; if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i } throw new Error("No event manager plugin found for event ".concat(e)) } }]), e
                }(),
                Hu = function() {
                    function e(t) { _classCallCheck(this, e), this._doc = t }
                    return _createClass(e, [{ key: "addGlobalEventListener", value: function(e, t, n) { var r = Cu().getGlobalEventTarget(this._doc, e); if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(t)); return this.addEventListener(r, t, n) } }]), e
                }(),
                Vu = function() {
                    function e() { _classCallCheck(this, e), this._stylesSet = new Set }
                    return _createClass(e, [{
                        key: "addStyles",
                        value: function(e) {
                            var t = this,
                                n = new Set;
                            e.forEach((function(e) { t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e)) })), this.onStylesAdded(n)
                        }
                    }, { key: "onStylesAdded", value: function(e) {} }, { key: "getAllStyles", value: function() { return Array.from(this._stylesSet) } }]), e
                }(),
                zu = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n }
                    return _inherits(t, e), _createClass(t, [{
                        key: "_addStylesToHost",
                        value: function(e, t) {
                            var n = this;
                            e.forEach((function(e) {
                                var r = n._doc.createElement("style");
                                r.textContent = e, n._styleNodes.add(t.appendChild(r))
                            }))
                        }
                    }, { key: "addHost", value: function(e) { this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e) } }, { key: "removeHost", value: function(e) { this._hostNodes.delete(e) } }, {
                        key: "onStylesAdded",
                        value: function(e) {
                            var t = this;
                            this._hostNodes.forEach((function(n) { return t._addStylesToHost(e, n) }))
                        }
                    }, { key: "ngOnDestroy", value: function() { this._styleNodes.forEach((function(e) { return Cu().remove(e) })) } }]), t
                }(Vu),
                Fu = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
                Bu = /%COMP%/g,
                qu = "_nghost-%COMP%",
                Zu = "_ngcontent-%COMP%";

            function Gu(e, t, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    Array.isArray(i) ? Gu(e, i, n) : (i = i.replace(Bu, e), n.push(i))
                }
                return n
            }

            function Wu(e) { return function(t) {!1 === e(t) && (t.preventDefault(), t.returnValue = !1) } }
            var Qu = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.eventManager = t, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new Ku(t) }
                    return _createClass(e, [{
                        key: "createRenderer",
                        value: function(e, t) {
                            if (!e || !t) return this.defaultRenderer;
                            switch (t.encapsulation) {
                                case Ze.Emulated:
                                    var n = this.rendererByCompId.get(t.id);
                                    return n || (n = new $u(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                                case Ze.Native:
                                case Ze.ShadowDom:
                                    return new Xu(this.eventManager, this.sharedStylesHost, e, t);
                                default:
                                    if (!this.rendererByCompId.has(t.id)) {
                                        var r = Gu(t.id, t.styles, []);
                                        this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                    }
                                    return this.defaultRenderer
                            }
                        }
                    }, { key: "begin", value: function() {} }, { key: "end", value: function() {} }]), e
                }(),
                Ku = function() {
                    function e(t) { _classCallCheck(this, e), this.eventManager = t, this.data = Object.create(null) }
                    return _createClass(e, [{ key: "destroy", value: function() {} }, { key: "createElement", value: function(e, t) { return t ? document.createElementNS(Fu[t] || t, e) : document.createElement(e) } }, { key: "createComment", value: function(e) { return document.createComment(e) } }, { key: "createText", value: function(e) { return document.createTextNode(e) } }, { key: "appendChild", value: function(e, t) { e.appendChild(t) } }, { key: "insertBefore", value: function(e, t, n) { e && e.insertBefore(t, n) } }, { key: "removeChild", value: function(e, t) { e && e.removeChild(t) } }, { key: "selectRootElement", value: function(e, t) { var n = "string" == typeof e ? document.querySelector(e) : e; if (!n) throw new Error('The selector "'.concat(e, '" did not match any elements')); return t || (n.textContent = ""), n } }, { key: "parentNode", value: function(e) { return e.parentNode } }, { key: "nextSibling", value: function(e) { return e.nextSibling } }, {
                        key: "setAttribute",
                        value: function(e, t, n, r) {
                            if (r) {
                                t = r + ":" + t;
                                var i = Fu[r];
                                i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)
                            } else e.setAttribute(t, n)
                        }
                    }, {
                        key: "removeAttribute",
                        value: function(e, t, n) {
                            if (n) {
                                var r = Fu[n];
                                r ? e.removeAttributeNS(r, t) : e.removeAttribute("".concat(n, ":").concat(t))
                            } else e.removeAttribute(t)
                        }
                    }, { key: "addClass", value: function(e, t) { e.classList.add(t) } }, { key: "removeClass", value: function(e, t) { e.classList.remove(t) } }, { key: "setStyle", value: function(e, t, n, r) { r & fn.DashCase ? e.style.setProperty(t, n, r & fn.Important ? "important" : "") : e.style[t] = n } }, { key: "removeStyle", value: function(e, t, n) { n & fn.DashCase ? e.style.removeProperty(t) : e.style[t] = "" } }, { key: "setProperty", value: function(e, t, n) { Yu(t, "property"), e[t] = n } }, { key: "setValue", value: function(e, t) { e.nodeValue = t } }, { key: "listen", value: function(e, t, n) { return Yu(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, Wu(n)) : this.eventManager.addEventListener(e, t, Wu(n)) } }]), e
                }(),
                Ju = "@".charCodeAt(0);

            function Yu(e, t) { if (e.charCodeAt(0) === Ju) throw new Error("Found the synthetic ".concat(t, " ").concat(e, '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')) }
            var $u = function(e) {
                    function t(e, n, r, i) {
                        var o;
                        _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).component = r;
                        var a = Gu(i + "-" + r.id, r.styles, []);
                        return n.addStyles(a), o.contentAttr = Zu.replace(Bu, i + "-" + r.id), o.hostAttr = qu.replace(Bu, i + "-" + r.id), o
                    }
                    return _inherits(t, e), _createClass(t, [{ key: "applyToHost", value: function(e) { _get(_getPrototypeOf(t.prototype), "setAttribute", this).call(this, e, this.hostAttr, "") } }, { key: "createElement", value: function(e, n) { var r = _get(_getPrototypeOf(t.prototype), "createElement", this).call(this, e, n); return _get(_getPrototypeOf(t.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r } }]), t
                }(Ku),
                Xu = function(e) {
                    function t(e, n, r, i) {
                        var o;
                        _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).sharedStylesHost = n, o.hostEl = r, o.component = i, o.shadowRoot = i.encapsulation === Ze.ShadowDom ? r.attachShadow({ mode: "open" }) : r.createShadowRoot(), o.sharedStylesHost.addHost(o.shadowRoot);
                        for (var a = Gu(i.id, i.styles, []), l = 0; l < a.length; l++) {
                            var u = document.createElement("style");
                            u.textContent = a[l], o.shadowRoot.appendChild(u)
                        }
                        return o
                    }
                    return _inherits(t, e), _createClass(t, [{ key: "nodeOrShadowRoot", value: function(e) { return e === this.hostEl ? this.shadowRoot : e } }, { key: "destroy", value: function() { this.sharedStylesHost.removeHost(this.shadowRoot) } }, { key: "appendChild", value: function(e, n) { return _get(_getPrototypeOf(t.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(e), n) } }, { key: "insertBefore", value: function(e, n, r) { return _get(_getPrototypeOf(t.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(e), n, r) } }, { key: "removeChild", value: function(e, n) { return _get(_getPrototypeOf(t.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(e), n) } }, { key: "parentNode", value: function(e) { return this.nodeOrShadowRoot(_get(_getPrototypeOf(t.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(e))) } }]), t
                }(Ku),
                es = "undefined" != typeof Zone && Zone.__symbol__ || function(e) { return "__zone_symbol__" + e },
                ts = es("addEventListener"),
                ns = es("removeEventListener"),
                rs = {},
                is = "__zone_symbol__propagationStopped",
                os = function() { var e = "undefined" != typeof Zone && Zone[es("BLACK_LISTED_EVENTS")]; if (e) { var t = {}; return e.forEach((function(e) { t[e] = e })), t } }(),
                as = function(e) { return !!os && os.hasOwnProperty(e) },
                ls = function(e) {
                    var t = rs[e.type];
                    if (t) {
                        var n = this[t];
                        if (n) {
                            var r = [e];
                            if (1 === n.length) { var i = n[0]; return i.zone !== Zone.current ? i.zone.run(i.handler, this, r) : i.handler.apply(this, r) }
                            for (var o = n.slice(), a = 0; a < o.length && !0 !== e[is]; a++) {
                                var l = o[a];
                                l.zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r)
                            }
                        }
                    }
                },
                us = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).ngZone = n, r && function(e) { return e === Sl }(r) || i.patchEvent(), i }
                    return _inherits(t, e), _createClass(t, [{
                        key: "patchEvent",
                        value: function() {
                            if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                                var e = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                                Event.prototype.stopImmediatePropagation = function() { this && (this[is] = !0), e && e.apply(this, arguments) }
                            }
                        }
                    }, { key: "supports", value: function(e) { return !0 } }, {
                        key: "addEventListener",
                        value: function(e, t, n) {
                            var r = this,
                                i = n;
                            if (!e[ts] || ro.isInAngularZone() && !as(t)) e.addEventListener(t, i, !1);
                            else {
                                var o = rs[t];
                                o || (o = rs[t] = es("ANGULAR" + t + "FALSE"));
                                var a = e[o],
                                    l = a && a.length > 0;
                                a || (a = e[o] = []);
                                var u = as(t) ? Zone.root : Zone.current;
                                if (0 === a.length) a.push({ zone: u, handler: i });
                                else {
                                    for (var s = !1, c = 0; c < a.length; c++)
                                        if (a[c].handler === i) { s = !0; break }
                                    s || a.push({ zone: u, handler: i })
                                }
                                l || e[ts](t, ls, !1)
                            }
                            return function() { return r.removeEventListener(e, t, i) }
                        }
                    }, {
                        key: "removeEventListener",
                        value: function(e, t, n) {
                            var r = e[ns];
                            if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
                            var i = rs[t],
                                o = i && e[i];
                            if (!o) return e.removeEventListener.apply(e, [t, n, !1]);
                            for (var a = !1, l = 0; l < o.length; l++)
                                if (o[l].handler === n) { a = !0, o.splice(l, 1); break }
                            a ? 0 === o.length && r.apply(e, [t, ls, !1]) : e.removeEventListener.apply(e, [t, n, !1])
                        }
                    }]), t
                }(Hu),
                ss = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 },
                cs = new Re("HammerGestureConfig"),
                hs = new Re("HammerLoader"),
                fs = function() {
                    function e() { _classCallCheck(this, e), this.events = [], this.overrides = {} }
                    return _createClass(e, [{ key: "buildHammer", value: function(e) { var t = new Hammer(e, this.options); for (var n in t.get("pinch").set({ enable: !0 }), t.get("rotate").set({ enable: !0 }), this.overrides) t.get(n).set(this.overrides[n]); return t } }]), e
                }(),
                ds = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)))._config = n, o.console = r, o.loader = i, o }
                    return _inherits(t, e), _createClass(t, [{ key: "supports", value: function(e) { return !(!ss.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader && (this.console.warn('The "'.concat(e, '" event cannot be bound because Hammer.JS is not ') + "loaded and no custom loader has been specified."), 1)) } }, {
                        key: "addEventListener",
                        value: function(e, t, n) {
                            var r = this,
                                i = this.manager.getZone();
                            if (t = t.toLowerCase(), !window.Hammer && this.loader) {
                                var o = !1,
                                    a = function() { o = !0 };
                                return this.loader().then((function() {
                                        if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(a = function() {});
                                        o || (a = r.addEventListener(e, t, n))
                                    })).catch((function() { r.console.warn('The "'.concat(t, '" event cannot be bound because the custom ') + "Hammer.JS loader failed."), a = function() {} })),
                                    function() { a() }
                            }
                            return i.runOutsideAngular((function() {
                                var o = r._config.buildHammer(e),
                                    a = function(e) { i.runGuarded((function() { n(e) })) };
                                return o.on(t, a),
                                    function() { o.off(t, a), "function" == typeof o.destroy && o.destroy() }
                            }))
                        }
                    }, { key: "isCustomEvent", value: function(e) { return this._config.events.indexOf(e) > -1 } }]), t
                }(Hu),
                vs = ["alt", "control", "meta", "shift"],
                ps = { alt: function(e) { return e.altKey }, control: function(e) { return e.ctrlKey }, meta: function(e) { return e.metaKey }, shift: function(e) { return e.shiftKey } },
                gs = function(e) {
                    function t(e) { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)) }
                    return _inherits(t, e), _createClass(t, [{ key: "supports", value: function(e) { return null != t.parseEventName(e) } }, {
                        key: "addEventListener",
                        value: function(e, n, r) {
                            var i = t.parseEventName(n),
                                o = t.eventCallback(i.fullKey, r, this.manager.getZone());
                            return this.manager.getZone().runOutsideAngular((function() { return Cu().onAndCancel(e, i.domEventName, o) }))
                        }
                    }], [{
                        key: "parseEventName",
                        value: function(e) {
                            var n = e.toLowerCase().split("."),
                                r = n.shift();
                            if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                            var i = t._normalizeKey(n.pop()),
                                o = "";
                            if (vs.forEach((function(e) {
                                    var t = n.indexOf(e);
                                    t > -1 && (n.splice(t, 1), o += e + ".")
                                })), o += i, 0 != n.length || 0 === i.length) return null;
                            var a = {};
                            return a.domEventName = r, a.fullKey = o, a
                        }
                    }, {
                        key: "getEventFullKey",
                        value: function(e) {
                            var t = "",
                                n = Cu().getEventKey(e);
                            return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), vs.forEach((function(r) { r != n && (0, ps[r])(e) && (t += r + ".") })), t += n
                        }
                    }, { key: "eventCallback", value: function(e, n, r) { return function(i) { t.getEventFullKey(i) === e && r.runGuarded((function() { return n(i) })) } } }, {
                        key: "_normalizeKey",
                        value: function(e) {
                            switch (e) {
                                case "esc":
                                    return "escape";
                                default:
                                    return e
                            }
                        }
                    }]), t
                }(Hu),
                ys = function e() { _classCallCheck(this, e) },
                ms = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n }
                    return _inherits(t, e), _createClass(t, [{
                        key: "sanitize",
                        value: function(e, t) {
                            if (null == t) return null;
                            switch (e) {
                                case St.NONE:
                                    return t;
                                case St.HTML:
                                    return t instanceof ks ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), function(e, t) {
                                        var n = null;
                                        try {
                                            st = st || new rt(e);
                                            var r = t ? String(t) : "";
                                            n = st.getInertBodyElement(r);
                                            var i = 5,
                                                o = r;
                                            do {
                                                if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
                                                i--, r = o, o = n.innerHTML, n = st.getInertBodyElement(r)
                                            } while (r !== o);
                                            var a = new _t,
                                                l = a.sanitizeChildren(bt(n) || n);
                                            return nt() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), l
                                        } finally {
                                            if (n)
                                                for (var u = bt(n) || n; u.firstChild;) u.removeChild(u.firstChild)
                                        }
                                    }(this._doc, String(t)));
                                case St.STYLE:
                                    return t instanceof Cs ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), function(e) { if (!(e = String(e).trim())) return ""; var t = e.match(Tt); return t && at(t[1]) === t[1] || e.match(Et) && function(e) { for (var t = !0, n = !0, r = 0; r < e.length; r++) { var i = e.charAt(r); "'" === i && n ? t = !t : '"' === i && t && (n = !n) } return t && n }(e) ? e : (nt() && console.warn("WARNING: sanitizing unsafe style value ".concat(e, " (see http://g.co/ng/security#xss).")), "unsafe") }(t));
                                case St.SCRIPT:
                                    if (t instanceof ws) return t.changingThisBreaksApplicationSecurity;
                                    throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");
                                case St.URL:
                                    return t instanceof Ss || t instanceof bs ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), at(String(t)));
                                case St.RESOURCE_URL:
                                    if (t instanceof Ss) return t.changingThisBreaksApplicationSecurity;
                                    throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                                default:
                                    throw new Error("Unexpected SecurityContext ".concat(e, " (see http://g.co/ng/security#xss)"))
                            }
                        }
                    }, { key: "checkNotSafeValue", value: function(e, t) { if (e instanceof _s) throw new Error("Required a safe ".concat(t, ", got a ").concat(e.getTypeName(), " ") + "(see http://g.co/ng/security#xss)") } }, { key: "bypassSecurityTrustHtml", value: function(e) { return new ks(e) } }, { key: "bypassSecurityTrustStyle", value: function(e) { return new Cs(e) } }, { key: "bypassSecurityTrustScript", value: function(e) { return new ws(e) } }, { key: "bypassSecurityTrustUrl", value: function(e) { return new bs(e) } }, { key: "bypassSecurityTrustResourceUrl", value: function(e) { return new Ss(e) } }]), t
                }(ys),
                _s = function() {
                    function e(t) { _classCallCheck(this, e), this.changingThisBreaksApplicationSecurity = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)" } }]), e
                }(),
                ks = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "HTML" } }]), t
                }(_s),
                Cs = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "Style" } }]), t
                }(_s),
                ws = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "Script" } }]), t
                }(_s),
                bs = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "URL" } }]), t
                }(_s),
                Ss = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) }
                    return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "ResourceURL" } }]), t
                }(_s),
                xs = mo(Uo, "browser", [{ provide: Ui, useValue: "browser" }, { provide: Mi, useValue: function() { Ru.makeCurrent(), Nu.init() }, multi: !0 }, {
                    provide: sl,
                    useClass: function(e) {
                        function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n._init(), n }
                        return _inherits(t, e), _createClass(t, [{ key: "_init", value: function() { this.location = Cu().getLocation(), this._history = Cu().getHistory() } }, { key: "getBaseHrefFromDOM", value: function() { return Cu().getBaseHref(this._doc) } }, { key: "onPopState", value: function(e) { Cu().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1) } }, { key: "onHashChange", value: function(e) { Cu().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1) } }, { key: "pushState", value: function(e, t, n) { Au() ? this._history.pushState(e, t, n) : this.location.hash = n } }, { key: "replaceState", value: function(e, t, n) { Au() ? this._history.replaceState(e, t, n) : this.location.hash = n } }, { key: "forward", value: function() { this._history.forward() } }, { key: "back", value: function() { this._history.back() } }, { key: "getState", value: function() { return this._history.state } }, { key: "href", get: function() { return this.location.href } }, { key: "protocol", get: function() { return this.location.protocol } }, { key: "hostname", get: function() { return this.location.hostname } }, { key: "port", get: function() { return this.location.port } }, { key: "pathname", get: function() { return this.location.pathname }, set: function(e) { this.location.pathname = e } }, { key: "search", get: function() { return this.location.search } }, { key: "hash", get: function() { return this.location.hash } }]), t
                    }(sl),
                    deps: [bl]
                }, { provide: bl, useFactory: function() { return document }, deps: [] }]);

            function Es() { return new Xe }
            var Ts = function() {
                function e(t) { if (_classCallCheck(this, e), t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") }
                return _createClass(e, null, [{ key: "withServerTransition", value: function(t) { return { ngModule: e, providers: [{ provide: Ii, useValue: t.appId }, { provide: Ou, useExisting: Ii }, Iu] } } }]), e
            }();
            "undefined" != typeof window && window;
            var Rs = function() {
                function e() { _classCallCheck(this, e), this.store = {}, this.onSerializeCallbacks = {} }
                return _createClass(e, [{ key: "get", value: function(e, t) { return void 0 !== this.store[e] ? this.store[e] : t } }, { key: "set", value: function(e, t) { this.store[e] = t } }, { key: "remove", value: function(e) { delete this.store[e] } }, { key: "hasKey", value: function(e) { return this.store.hasOwnProperty(e) } }, { key: "onSerialize", value: function(e, t) { this.onSerializeCallbacks[e] = t } }, {
                    key: "toJson",
                    value: function() {
                        for (var e in this.onSerializeCallbacks)
                            if (this.onSerializeCallbacks.hasOwnProperty(e)) try { this.store[e] = this.onSerializeCallbacks[e]() } catch (t) { console.warn("Exception in onSerialize callback: ", t) }
                        return JSON.stringify(this.store)
                    }
                }], [{ key: "init", value: function(t) { var n = new e; return n.store = t, n } }]), e
            }();

            function Ps(e, t) {
                var n, r, i = e.getElementById(t + "-state"),
                    o = {};
                if (i && i.textContent) try { o = JSON.parse((n = i.textContent, r = { "&a;": "&", "&q;": '"', "&s;": "'", "&l;": "<", "&g;": ">" }, n.replace(/&[^;]+;/g, (function(e) { return r[e] })))) } catch (a) { console.warn("Exception while restoring TransferState for app " + t, a) }
                return Rs.init(o)
            }
            var As = function e() { _classCallCheck(this, e) },
                Os = function e(t, n) { _classCallCheck(this, e), this.id = t, this.url = n },
                Is = function(e) {
                    function t(e, n) {
                        var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).navigationTrigger = i, r.restoredState = o, r
                    }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), t
                }(Os),
                Ns = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, i }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')") } }]), t
                }(Os),
                Ds = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).reason = r, i }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), t
                }(Os),
                Ms = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).error = r, i }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")") } }]), t
                }(Os),
                Us = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t
                }(Os),
                js = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t
                }(Os),
                Ls = function(e) {
                    function t(e, n, r, i, o) { var a; return _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, a.state = i, a.shouldActivate = o, a }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")") } }]), t
                }(Os),
                Hs = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t
                }(Os),
                Vs = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t
                }(Os),
                zs = function() {
                    function e(t) { _classCallCheck(this, e), this.route = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "RouteConfigLoadStart(path: ".concat(this.route.path, ")") } }]), e
                }(),
                Fs = function() {
                    function e(t) { _classCallCheck(this, e), this.route = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")") } }]), e
                }(),
                Bs = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e
                }(),
                qs = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e
                }(),
                Zs = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e
                }(),
                Gs = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t }
                    return _createClass(e, [{ key: "toString", value: function() { return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e
                }(),
                Ws = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.routerEvent = t, this.position = n, this.anchor = r }
                    return _createClass(e, [{ key: "toString", value: function() { return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')") } }]), e
                }(),
                Qs = function e() { _classCallCheck(this, e) },
                Ks = "primary",
                Js = function() {
                    function e(t) { _classCallCheck(this, e), this.params = t || {} }
                    return _createClass(e, [{ key: "has", value: function(e) { return this.params.hasOwnProperty(e) } }, { key: "get", value: function(e) { if (this.has(e)) { var t = this.params[e]; return Array.isArray(t) ? t[0] : t } return null } }, { key: "getAll", value: function(e) { if (this.has(e)) { var t = this.params[e]; return Array.isArray(t) ? t : [t] } return [] } }, { key: "keys", get: function() { return Object.keys(this.params) } }]), e
                }();

            function Ys(e) { return new Js(e) }
            var $s = "ngNavigationCancelingError";

            function Xs(e) { var t = Error("NavigationCancelingError: " + e); return t[$s] = !0, t }

            function ec(e, t, n) {
                var r = n.path.split("/");
                if (r.length > e.length) return null;
                if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
                for (var i = {}, o = 0; o < r.length; o++) {
                    var a = r[o],
                        l = e[o];
                    if (a.startsWith(":")) i[a.substring(1)] = l;
                    else if (a !== l.path) return null
                }
                return { consumed: e.slice(0, r.length), posParams: i }
            }
            var tc = function e(t, n) { _classCallCheck(this, e), this.routes = t, this.module = n };

            function nc(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < e.length; n++) {
                    var r = e[n];
                    rc(r, ic(t, r))
                }
            }

            function rc(e, t) {
                if (!e) throw new Error("\n      Invalid configuration of route '".concat(t, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "));
                if (Array.isArray(e)) throw new Error("Invalid configuration of route '".concat(t, "': Array cannot be specified"));
                if (!e.component && !e.children && !e.loadChildren && e.outlet && e.outlet !== Ks) throw new Error("Invalid configuration of route '".concat(t, "': a componentless route without children or loadChildren cannot have a named outlet set"));
                if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and children cannot be used together"));
                if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and loadChildren cannot be used together"));
                if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': children and loadChildren cannot be used together"));
                if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and component cannot be used together"));
                if (e.path && e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': path and matcher cannot be used together"));
                if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "'. One of the following must be provided: component, redirectTo, children or loadChildren"));
                if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': routes must have either a path or a matcher specified"));
                if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(t, "': path cannot start with a slash"));
                if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(t, '", redirectTo: "').concat(e.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));
                if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '".concat(t, "': pathMatch can only be set to 'prefix' or 'full'"));
                e.children && nc(e.children, t)
            }

            function ic(e, t) { return t ? e || t.path ? e && !t.path ? "".concat(e, "/") : !e && t.path ? t.path : "".concat(e, "/").concat(t.path) : "" : e }

            function oc(e) {
                var t = e.children && e.children.map(oc),
                    n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
                return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== Ks && (n.component = Qs), n
            }

            function ac(e, t) {
                var n, r = Object.keys(e),
                    i = Object.keys(t);
                if (!r || !i || r.length != i.length) return !1;
                for (var o = 0; o < r.length; o++)
                    if (e[n = r[o]] !== t[n]) return !1;
                return !0
            }

            function lc(e) { return Array.prototype.concat.apply([], e) }

            function uc(e) { return e.length > 0 ? e[e.length - 1] : null }

            function sc(e, t) { for (var n in e) e.hasOwnProperty(n) && t(e[n], n) }

            function cc(e) { return Yt(e) ? e : Jt(e) ? Q(Promise.resolve(e)) : Al(e) }

            function hc(e, t, n) {
                return n ? function(e, t) { return ac(e, t) }(e.queryParams, t.queryParams) && function e(t, n) { if (!pc(t.segments, n.segments)) return !1; if (t.numberOfChildren !== n.numberOfChildren) return !1; for (var r in n.children) { if (!t.children[r]) return !1; if (!e(t.children[r], n.children[r])) return !1 } return !0 }(e.root, t.root) : function(e, t) { return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((function(n) { return t[n] === e[n] })) }(e.queryParams, t.queryParams) && function e(t, n) {
                    return function t(n, r, i) {
                        if (n.segments.length > i.length) return !!pc(n.segments.slice(0, i.length), i) && !r.hasChildren();
                        if (n.segments.length === i.length) { if (!pc(n.segments, i)) return !1; for (var o in r.children) { if (!n.children[o]) return !1; if (!e(n.children[o], r.children[o])) return !1 } return !0 }
                        var a = i.slice(0, n.segments.length),
                            l = i.slice(n.segments.length);
                        return !!pc(n.segments, a) && !!n.children[Ks] && t(n.children[Ks], r, l)
                    }(t, n, n.segments)
                }(e.root, t.root)
            }
            var fc = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.root = t, this.queryParams = n, this.fragment = r }
                    return _createClass(e, [{ key: "toString", value: function() { return _c.serialize(this) } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = Ys(this.queryParams)), this._queryParamMap } }]), e
                }(),
                dc = function() {
                    function e(t, n) {
                        var r = this;
                        _classCallCheck(this, e), this.segments = t, this.children = n, this.parent = null, sc(n, (function(e, t) { return e.parent = r }))
                    }
                    return _createClass(e, [{ key: "hasChildren", value: function() { return this.numberOfChildren > 0 } }, { key: "toString", value: function() { return kc(this) } }, { key: "numberOfChildren", get: function() { return Object.keys(this.children).length } }]), e
                }(),
                vc = function() {
                    function e(t, n) { _classCallCheck(this, e), this.path = t, this.parameters = n }
                    return _createClass(e, [{ key: "toString", value: function() { return Ec(this) } }, { key: "parameterMap", get: function() { return this._parameterMap || (this._parameterMap = Ys(this.parameters)), this._parameterMap } }]), e
                }();

            function pc(e, t) { return e.length === t.length && e.every((function(e, n) { return e.path === t[n].path })) }

            function gc(e, t) { var n = []; return sc(e.children, (function(e, r) { r === Ks && (n = n.concat(t(e, r))) })), sc(e.children, (function(e, r) { r !== Ks && (n = n.concat(t(e, r))) })), n }
            var yc = function e() { _classCallCheck(this, e) },
                mc = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "parse", value: function(e) { var t = new Oc(e); return new fc(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment()) } }, {
                        key: "serialize",
                        value: function(e) {
                            var t, n, r;
                            return "".concat("/".concat(function e(t, n) {
                                if (!t.hasChildren()) return kc(t);
                                if (n) {
                                    var r = t.children[Ks] ? e(t.children[Ks], !1) : "",
                                        i = [];
                                    return sc(t.children, (function(t, n) { n !== Ks && i.push("".concat(n, ":").concat(e(t, !1))) })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r
                                }
                                var o = gc(t, (function(n, r) { return r === Ks ? [e(t.children[Ks], !1)] : ["".concat(r, ":").concat(e(n, !1))] }));
                                return "".concat(kc(t), "/(").concat(o.join("//"), ")")
                            }(e.root, !0)), (n = e.queryParams, r = Object.keys(n).map((function(e) { var t = n[e]; return Array.isArray(t) ? t.map((function(t) { return "".concat(wc(e), "=").concat(wc(t)) })).join("&") : "".concat(wc(e), "=").concat(wc(t)) })), r.length ? "?".concat(r.join("&")) : "")).concat("string" == typeof e.fragment ? "#".concat((t = e.fragment, encodeURI(t))) : "")
                        }
                    }]), e
                }(),
                _c = new mc;

            function kc(e) { return e.segments.map((function(e) { return Ec(e) })).join("/") }

            function Cc(e) { return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",") }

            function wc(e) { return Cc(e).replace(/%3B/gi, ";") }

            function bc(e) { return Cc(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&") }

            function Sc(e) { return decodeURIComponent(e) }

            function xc(e) { return Sc(e.replace(/\+/g, "%20")) }

            function Ec(e) { return "".concat(bc(e.path)).concat((t = e.parameters, Object.keys(t).map((function(e) { return ";".concat(bc(e), "=").concat(bc(t[e])) })).join(""))); var t }
            var Tc = /^[^\/()?;=#]+/;

            function Rc(e) { var t = e.match(Tc); return t ? t[0] : "" }
            var Pc = /^[^=?&#]+/,
                Ac = /^[^?&#]+/,
                Oc = function() {
                    function e(t) { _classCallCheck(this, e), this.url = t, this.remaining = t }
                    return _createClass(e, [{ key: "parseRootSegment", value: function() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new dc([], {}) : new dc([], this.parseChildren()) } }, {
                        key: "parseQueryParams",
                        value: function() {
                            var e = {};
                            if (this.consumeOptional("?"))
                                do { this.parseQueryParam(e) } while (this.consumeOptional("&"));
                            return e
                        }
                    }, { key: "parseFragment", value: function() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null } }, {
                        key: "parseChildren",
                        value: function() {
                            if ("" === this.remaining) return {};
                            this.consumeOptional("/");
                            var e = [];
                            for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
                            var t = {};
                            this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
                            var n = {};
                            return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[Ks] = new dc(e, t)), n
                        }
                    }, { key: "parseSegment", value: function() { var e = Rc(this.remaining); if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'.")); return this.capture(e), new vc(Sc(e), this.parseMatrixParams()) } }, { key: "parseMatrixParams", value: function() { for (var e = {}; this.consumeOptional(";");) this.parseParam(e); return e } }, {
                        key: "parseParam",
                        value: function(e) {
                            var t = Rc(this.remaining);
                            if (t) {
                                this.capture(t);
                                var n = "";
                                if (this.consumeOptional("=")) {
                                    var r = Rc(this.remaining);
                                    r && this.capture(n = r)
                                }
                                e[Sc(t)] = Sc(n)
                            }
                        }
                    }, {
                        key: "parseQueryParam",
                        value: function(e) {
                            var t = function(e) { var t = e.match(Pc); return t ? t[0] : "" }(this.remaining);
                            if (t) {
                                this.capture(t);
                                var n = "";
                                if (this.consumeOptional("=")) {
                                    var r = function(e) { var t = e.match(Ac); return t ? t[0] : "" }(this.remaining);
                                    r && this.capture(n = r)
                                }
                                var i = xc(t),
                                    o = xc(n);
                                if (e.hasOwnProperty(i)) {
                                    var a = e[i];
                                    Array.isArray(a) || (e[i] = a = [a]), a.push(o)
                                } else e[i] = o
                            }
                        }
                    }, {
                        key: "parseParens",
                        value: function(e) {
                            var t = {};
                            for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                                var n = Rc(this.remaining),
                                    r = this.remaining[n.length];
                                if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'"));
                                var i = void 0;
                                n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = Ks);
                                var o = this.parseChildren();
                                t[i] = 1 === Object.keys(o).length ? o[Ks] : new dc([], o), this.consumeOptional("//")
                            }
                            return t
                        }
                    }, { key: "peekStartsWith", value: function(e) { return this.remaining.startsWith(e) } }, { key: "consumeOptional", value: function(e) { return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0) } }, { key: "capture", value: function(e) { if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".')) } }]), e
                }(),
                Ic = function() {
                    function e(t) { _classCallCheck(this, e), this._root = t }
                    return _createClass(e, [{ key: "parent", value: function(e) { var t = this.pathFromRoot(e); return t.length > 1 ? t[t.length - 2] : null } }, { key: "children", value: function(e) { var t = Nc(e, this._root); return t ? t.children.map((function(e) { return e.value })) : [] } }, { key: "firstChild", value: function(e) { var t = Nc(e, this._root); return t && t.children.length > 0 ? t.children[0].value : null } }, { key: "siblings", value: function(e) { var t = Dc(e, this._root); return t.length < 2 ? [] : t[t.length - 2].children.map((function(e) { return e.value })).filter((function(t) { return t !== e })) } }, { key: "pathFromRoot", value: function(e) { return Dc(e, this._root).map((function(e) { return e.value })) } }, { key: "root", get: function() { return this._root.value } }]), e
                }();

            function Nc(e, t) {
                if (e === t.value) return t;
                var n = !0,
                    r = !1,
                    i = void 0;
                try { for (var o, a = t.children[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { var l = Nc(e, o.value); if (l) return l } } catch (u) { r = !0, i = u } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } }
                return null
            }

            function Dc(e, t) {
                if (e === t.value) return [t];
                var n = !0,
                    r = !1,
                    i = void 0;
                try { for (var o, a = t.children[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { var l = Dc(e, o.value); if (l.length) return l.unshift(t), l } } catch (u) { r = !0, i = u } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } }
                return []
            }
            var Mc = function() {
                function e(t, n) { _classCallCheck(this, e), this.value = t, this.children = n }
                return _createClass(e, [{ key: "toString", value: function() { return "TreeNode(".concat(this.value, ")") } }]), e
            }();

            function Uc(e) { var t = {}; return e && e.children.forEach((function(e) { return t[e.value.outlet] = e })), t }
            var jc = function(e) {
                function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).snapshot = n, Bc(_assertThisInitialized(r), e), r }
                return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return this.snapshot.toString() } }]), t
            }(Ic);

            function Lc(e, t) {
                var n = function(e, t) { var n = new zc([], {}, {}, "", {}, Ks, t, null, e.root, -1, {}); return new Fc("", new Mc(n, [])) }(e, t),
                    r = new Ol([new vc("", {})]),
                    i = new Ol({}),
                    o = new Ol({}),
                    a = new Ol({}),
                    l = new Ol(""),
                    u = new Hc(r, i, a, l, o, Ks, t, n.root);
                return u.snapshot = n.root, new jc(new Mc(u, []), n)
            }
            var Hc = function() {
                function e(t, n, r, i, o, a, l, u) { _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = l, this._futureSnapshot = u }
                return _createClass(e, [{ key: "toString", value: function() { return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")") } }, { key: "routeConfig", get: function() { return this._futureSnapshot.routeConfig } }, { key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = this.params.pipe(q((function(e) { return Ys(e) })))), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(q((function(e) { return Ys(e) })))), this._queryParamMap } }]), e
            }();

            function Vc(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly",
                    n = e.pathFromRoot,
                    r = 0;
                if ("always" !== t)
                    for (r = n.length - 1; r >= 1;) {
                        var i = n[r],
                            o = n[r - 1];
                        if (i.routeConfig && "" === i.routeConfig.path) r--;
                        else {
                            if (o.component) break;
                            r--
                        }
                    }
                return function(e) { return e.reduce((function(e, t) { return { params: Object.assign({}, e.params, t.params), data: Object.assign({}, e.data, t.data), resolve: Object.assign({}, e.resolve, t._resolvedData) } }), { params: {}, data: {}, resolve: {} }) }(n.slice(r))
            }
            var zc = function() {
                    function e(t, n, r, i, o, a, l, u, s, c, h) { _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = l, this.routeConfig = u, this._urlSegment = s, this._lastPathIndex = c, this._resolve = h }
                    return _createClass(e, [{ key: "toString", value: function() { return "Route(url:'".concat(this.url.map((function(e) { return e.toString() })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')") } }, { key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = Ys(this.params)), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = Ys(this.queryParams)), this._queryParamMap } }]), e
                }(),
                Fc = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, n))).url = e, Bc(_assertThisInitialized(r), n), r }
                    return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return qc(this._root) } }]), t
                }(Ic);

            function Bc(e, t) { t.value._routerState = e, t.children.forEach((function(t) { return Bc(e, t) })) }

            function qc(e) { var t = e.children.length > 0 ? " { ".concat(e.children.map(qc).join(", "), " } ") : ""; return "".concat(e.value).concat(t) }

            function Zc(e) {
                if (e.snapshot) {
                    var t = e.snapshot,
                        n = e._futureSnapshot;
                    e.snapshot = n, ac(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), ac(t.params, n.params) || e.params.next(n.params),
                        function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (var n = 0; n < e.length; ++n)
                                if (!ac(e[n], t[n])) return !1;
                            return !0
                        }(t.url, n.url) || e.url.next(n.url), ac(t.data, n.data) || e.data.next(n.data)
                } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
            }

            function Gc(e, t) { var n, r; return ac(e.params, t.params) && pc(n = e.url, r = t.url) && n.every((function(e, t) { return ac(e.parameters, r[t].parameters) })) && !(!e.parent != !t.parent) && (!e.parent || Gc(e.parent, t.parent)) }

            function Wc(e) { return "object" == typeof e && null != e && !e.outlets && !e.segmentPath }

            function Qc(e, t, n, r, i) { var o = {}; return r && sc(r, (function(e, t) { o[t] = Array.isArray(e) ? e.map((function(e) { return "".concat(e) })) : "".concat(e) })), new fc(n.root === e ? t : function e(t, n, r) { var i = {}; return sc(t.children, (function(t, o) { i[o] = t === n ? r : e(t, n, r) })), new dc(t.segments, i) }(n.root, e, t), o, i) }
            var Kc = function() {
                    function e(t, n, r) { if (_classCallCheck(this, e), this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && Wc(r[0])) throw new Error("Root segment cannot have matrix parameters"); var i = r.find((function(e) { return "object" == typeof e && null != e && e.outlets })); if (i && i !== uc(r)) throw new Error("{outlets:{}} has to be the last command") }
                    return _createClass(e, [{ key: "toRoot", value: function() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0] } }]), e
                }(),
                Jc = function e(t, n, r) { _classCallCheck(this, e), this.segmentGroup = t, this.processChildren = n, this.index = r };

            function Yc(e) { return "object" == typeof e && null != e && e.outlets ? e.outlets[Ks] : "".concat(e) }

            function $c(e, t, n) {
                if (e || (e = new dc([], {})), 0 === e.segments.length && e.hasChildren()) return Xc(e, t, n);
                var r = function(e, t, n) {
                        for (var r = 0, i = t, o = { match: !1, pathIndex: 0, commandIndex: 0 }; i < e.segments.length;) {
                            if (r >= n.length) return o;
                            var a = e.segments[i],
                                l = Yc(n[r]),
                                u = r < n.length - 1 ? n[r + 1] : null;
                            if (i > 0 && void 0 === l) break;
                            if (l && u && "object" == typeof u && void 0 === u.outlets) {
                                if (!rh(l, u, a)) return o;
                                r += 2
                            } else {
                                if (!rh(l, {}, a)) return o;
                                r++
                            }
                            i++
                        }
                        return { match: !0, pathIndex: i, commandIndex: r }
                    }(e, t, n),
                    i = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < e.segments.length) { var o = new dc(e.segments.slice(0, r.pathIndex), {}); return o.children[Ks] = new dc(e.segments.slice(r.pathIndex), e.children), Xc(o, 0, i) }
                return r.match && 0 === i.length ? new dc(e.segments, {}) : r.match && !e.hasChildren() ? eh(e, t, n) : r.match ? Xc(e, 0, i) : eh(e, t, n)
            }

            function Xc(e, t, n) {
                if (0 === n.length) return new dc(e.segments, {});
                var r = function(e) { return "object" != typeof e[0] ? _defineProperty({}, Ks, e) : void 0 === e[0].outlets ? _defineProperty({}, Ks, e) : e[0].outlets }(n),
                    i = {};
                return sc(r, (function(n, r) { null !== n && (i[r] = $c(e.children[r], t, n)) })), sc(e.children, (function(e, t) { void 0 === r[t] && (i[t] = e) })), new dc(e.segments, i)
            }

            function eh(e, t, n) {
                for (var r = e.segments.slice(0, t), i = 0; i < n.length;) {
                    if ("object" == typeof n[i] && void 0 !== n[i].outlets) { var o = th(n[i].outlets); return new dc(r, o) }
                    if (0 === i && Wc(n[0])) r.push(new vc(e.segments[t].path, n[0])), i++;
                    else {
                        var a = Yc(n[i]),
                            l = i < n.length - 1 ? n[i + 1] : null;
                        a && l && Wc(l) ? (r.push(new vc(a, nh(l))), i += 2) : (r.push(new vc(a, {})), i++)
                    }
                }
                return new dc(r, {})
            }

            function th(e) { var t = {}; return sc(e, (function(e, n) { null !== e && (t[n] = eh(new dc([], {}), 0, e)) })), t }

            function nh(e) { var t = {}; return sc(e, (function(e, n) { return t[n] = "".concat(e) })), t }

            function rh(e, t, n) { return e == n.path && ac(t, n.parameters) }
            var ih = function() {
                function e(t, n, r, i) { _classCallCheck(this, e), this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i }
                return _createClass(e, [{
                    key: "activate",
                    value: function(e) {
                        var t = this.futureState._root,
                            n = this.currState ? this.currState._root : null;
                        this.deactivateChildRoutes(t, n, e), Zc(this.futureState.root), this.activateChildRoutes(t, n, e)
                    }
                }, {
                    key: "deactivateChildRoutes",
                    value: function(e, t, n) {
                        var r = this,
                            i = Uc(t);
                        e.children.forEach((function(e) {
                            var t = e.value.outlet;
                            r.deactivateRoutes(e, i[t], n), delete i[t]
                        })), sc(i, (function(e, t) { r.deactivateRouteAndItsChildren(e, n) }))
                    }
                }, {
                    key: "deactivateRoutes",
                    value: function(e, t, n) {
                        var r = e.value,
                            i = t ? t.value : null;
                        if (r === i)
                            if (r.component) {
                                var o = n.getContext(r.outlet);
                                o && this.deactivateChildRoutes(e, t, o.children)
                            } else this.deactivateChildRoutes(e, t, n);
                        else i && this.deactivateRouteAndItsChildren(t, n)
                    }
                }, { key: "deactivateRouteAndItsChildren", value: function(e, t) { this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t) } }, {
                    key: "detachAndStoreRouteSubtree",
                    value: function(e, t) {
                        var n = t.getContext(e.value.outlet);
                        if (n && n.outlet) {
                            var r = n.outlet.detach(),
                                i = n.children.onOutletDeactivated();
                            this.routeReuseStrategy.store(e.value.snapshot, { componentRef: r, route: e, contexts: i })
                        }
                    }
                }, {
                    key: "deactivateRouteAndOutlet",
                    value: function(e, t) {
                        var n = this,
                            r = t.getContext(e.value.outlet);
                        if (r) {
                            var i = Uc(e),
                                o = e.value.component ? r.children : t;
                            sc(i, (function(e, t) { return n.deactivateRouteAndItsChildren(e, o) })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                        }
                    }
                }, {
                    key: "activateChildRoutes",
                    value: function(e, t, n) {
                        var r = this,
                            i = Uc(t);
                        e.children.forEach((function(e) { r.activateRoutes(e, i[e.value.outlet], n), r.forwardEvent(new Gs(e.value.snapshot)) })), e.children.length && this.forwardEvent(new qs(e.value.snapshot))
                    }
                }, {
                    key: "activateRoutes",
                    value: function(e, t, n) {
                        var r = e.value,
                            i = t ? t.value : null;
                        if (Zc(r), r === i)
                            if (r.component) {
                                var o = n.getOrCreateContext(r.outlet);
                                this.activateChildRoutes(e, t, o.children)
                            } else this.activateChildRoutes(e, t, n);
                        else if (r.component) {
                            var a = n.getOrCreateContext(r.outlet);
                            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                                var l = this.routeReuseStrategy.retrieve(r.snapshot);
                                this.routeReuseStrategy.store(r.snapshot, null), a.children.onOutletReAttached(l.contexts), a.attachRef = l.componentRef, a.route = l.route.value, a.outlet && a.outlet.attach(l.componentRef, l.route.value), oh(l.route)
                            } else {
                                var u = function(e) { for (var t = e.parent; t; t = t.parent) { var n = t.routeConfig; if (n && n._loadedConfig) return n._loadedConfig; if (n && n.component) return null } return null }(r.snapshot),
                                    s = u ? u.module.componentFactoryResolver : null;
                                a.attachRef = null, a.route = r, a.resolver = s, a.outlet && a.outlet.activateWith(r, s), this.activateChildRoutes(e, null, a.children)
                            }
                        } else this.activateChildRoutes(e, null, n)
                    }
                }]), e
            }();

            function oh(e) { Zc(e.value), e.children.forEach(oh) }

            function ah(e) { return "function" == typeof e }

            function lh(e) { return e instanceof fc }
            var uh = function e(t) { _classCallCheck(this, e), this.segmentGroup = t || null },
                sh = function e(t) { _classCallCheck(this, e), this.urlTree = t };

            function ch(e) { return new b((function(t) { return t.error(new uh(e)) })) }

            function hh(e) { return new b((function(t) { return t.error(new sh(e)) })) }

            function fh(e) { return new b((function(t) { return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'"))) })) }
            var dh = function() {
                function e(t, n, r, i, o) { _classCallCheck(this, e), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(ze) }
                return _createClass(e, [{ key: "apply", value: function() { var e = this; return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Ks).pipe(q((function(t) { return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment) }))).pipe(nu((function(t) { if (t instanceof sh) return e.allowRedirects = !1, e.match(t.urlTree); if (t instanceof uh) throw e.noMatchError(t); throw t }))) } }, { key: "match", value: function(e) { var t = this; return this.expandSegmentGroup(this.ngModule, this.config, e.root, Ks).pipe(q((function(n) { return t.createUrlTree(n, e.queryParams, e.fragment) }))).pipe(nu((function(e) { if (e instanceof uh) throw t.noMatchError(e); throw e }))) } }, { key: "noMatchError", value: function(e) { return new Error("Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'")) } }, { key: "createUrlTree", value: function(e, t, n) { var r = e.segments.length > 0 ? new dc([], _defineProperty({}, Ks, e)) : e; return new fc(r, t, n) } }, { key: "expandSegmentGroup", value: function(e, t, n, r) { return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(q((function(e) { return new dc([], e) }))) : this.expandSegment(e, n, t, n.segments, r, !0) } }, {
                    key: "expandChildren",
                    value: function(e, t, n) {
                        var r = this;
                        return function(n, i) {
                            if (0 === Object.keys(n).length) return Al({});
                            var o = [],
                                a = [],
                                l = {};
                            return sc(n, (function(n, i) {
                                var u, s, c = (u = i, s = n, r.expandSegmentGroup(e, t, s, u)).pipe(q((function(e) { return l[i] = e })));
                                i === Ks ? o.push(c) : a.push(c)
                            })), Al.apply(null, o.concat(a)).pipe(Ll(), tu(), q((function() { return l })))
                        }(n.children)
                    }
                }, { key: "expandSegment", value: function(e, t, n, r, i, o) { var a = this; return Al.apply(void 0, _toConsumableArray(n)).pipe(q((function(l) { return a.expandSegmentAgainstRoute(e, t, n, l, r, i, o).pipe(nu((function(e) { if (e instanceof uh) return Al(null); throw e }))) })), Ll(), uu((function(e) { return !!e })), nu((function(e, n) { if (e instanceof Nl || "EmptyError" === e.name) { if (a.noLeftoversInUrl(t, r, i)) return Al(new dc([], {})); throw new uh(t) } throw e }))) } }, { key: "noLeftoversInUrl", value: function(e, t, n) { return 0 === t.length && !e.children[n] } }, { key: "expandSegmentAgainstRoute", value: function(e, t, n, r, i, o, a) { return yh(r) !== o ? ch(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) : ch(t) } }, { key: "expandSegmentAgainstRouteUsingRedirect", value: function(e, t, n, r, i, o) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) } }, {
                    key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
                    value: function(e, t, n, r) {
                        var i = this,
                            o = this.applyRedirectCommands([], n.redirectTo, {});
                        return n.redirectTo.startsWith("/") ? hh(o) : this.lineralizeSegments(n, o).pipe(K((function(n) { var o = new dc(n, {}); return i.expandSegment(e, o, t, n, r, !1) })))
                    }
                }, {
                    key: "expandRegularSegmentAgainstRouteUsingRedirect",
                    value: function(e, t, n, r, i, o) {
                        var a = this,
                            l = vh(t, r, i),
                            u = l.matched,
                            s = l.consumedSegments,
                            c = l.lastChild,
                            h = l.positionalParamSegments;
                        if (!u) return ch(t);
                        var f = this.applyRedirectCommands(s, r.redirectTo, h);
                        return r.redirectTo.startsWith("/") ? hh(f) : this.lineralizeSegments(r, f).pipe(K((function(r) { return a.expandSegment(e, t, n, r.concat(i.slice(c)), o, !1) })))
                    }
                }, {
                    key: "matchSegmentAgainstRoute",
                    value: function(e, t, n, r) {
                        var i = this;
                        if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(q((function(e) { return n._loadedConfig = e, new dc(r, {}) }))) : Al(new dc(r, {}));
                        var o = vh(t, n, r),
                            a = o.matched,
                            l = o.consumedSegments,
                            u = o.lastChild;
                        if (!a) return ch(t);
                        var s = r.slice(u);
                        return this.getChildConfig(e, n, r).pipe(K((function(e) {
                            var n = e.module,
                                r = e.routes,
                                o = function(e, t, n, r) {
                                    return n.length > 0 && function(e, t, n) { return n.some((function(n) { return gh(e, t, n) && yh(n) !== Ks })) }(e, n, r) ? {
                                        segmentGroup: ph(new dc(t, function(e, t) {
                                            var n = {};
                                            n[Ks] = t;
                                            var r = !0,
                                                i = !1,
                                                o = void 0;
                                            try { for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) { var u = a.value; "" === u.path && yh(u) !== Ks && (n[yh(u)] = new dc([], {})) } } catch (s) { i = !0, o = s } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } }
                                            return n
                                        }(r, new dc(n, e.children)))),
                                        slicedSegments: []
                                    } : 0 === n.length && function(e, t, n) { return n.some((function(n) { return gh(e, t, n) })) }(e, n, r) ? {
                                        segmentGroup: ph(new dc(e.segments, function(e, t, n, r) {
                                            var i = {},
                                                o = !0,
                                                a = !1,
                                                l = void 0;
                                            try {
                                                for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                                                    var c = u.value;
                                                    gh(e, t, c) && !r[yh(c)] && (i[yh(c)] = new dc([], {}))
                                                }
                                            } catch (h) { a = !0, l = h } finally { try { o || null == s.return || s.return() } finally { if (a) throw l } }
                                            return Object.assign({}, r, i)
                                        }(e, n, r, e.children))),
                                        slicedSegments: n
                                    } : { segmentGroup: e, slicedSegments: n }
                                }(t, l, s, r),
                                a = o.segmentGroup,
                                u = o.slicedSegments;
                            return 0 === u.length && a.hasChildren() ? i.expandChildren(n, r, a).pipe(q((function(e) { return new dc(l, e) }))) : 0 === r.length && 0 === u.length ? Al(new dc(l, {})) : i.expandSegment(n, a, r, u, Ks, !0).pipe(q((function(e) { return new dc(l.concat(e.segments), e.children) })))
                        })))
                    }
                }, {
                    key: "getChildConfig",
                    value: function(e, t, n) {
                        var r = this;
                        return t.children ? Al(new tc(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? Al(t._loadedConfig) : function(e, t, n) {
                            var r, i = t.canLoad;
                            return i && 0 !== i.length ? Q(i).pipe(q((function(r) {
                                var i, o = e.get(r);
                                if (function(e) { return e && ah(e.canLoad) }(o)) i = o.canLoad(t, n);
                                else {
                                    if (!ah(o)) throw new Error("Invalid CanLoad guard");
                                    i = o(t, n)
                                }
                                return cc(i)
                            }))).pipe(Ll(), (r = function(e) { return !0 === e }, function(e) { return e.lift(new su(r, void 0, e)) })) : Al(!0)
                        }(e.injector, t, n).pipe(K((function(n) { return n ? r.configLoader.load(e.injector, t).pipe(q((function(e) { return t._loadedConfig = e, e }))) : function(e) { return new b((function(t) { return t.error(Xs("Cannot load children because the guard of the route \"path: '".concat(e.path, "'\" returned false"))) })) }(t) }))) : Al(new tc([], e))
                    }
                }, {
                    key: "lineralizeSegments",
                    value: function(e, t) {
                        for (var n = [], r = t.root;;) {
                            if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Al(n);
                            if (r.numberOfChildren > 1 || !r.children[Ks]) return fh(e.redirectTo);
                            r = r.children[Ks]
                        }
                    }
                }, { key: "applyRedirectCommands", value: function(e, t, n) { return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n) } }, { key: "applyRedirectCreatreUrlTree", value: function(e, t, n, r) { var i = this.createSegmentGroup(e, t.root, n, r); return new fc(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment) } }, {
                    key: "createQueryParams",
                    value: function(e, t) {
                        var n = {};
                        return sc(e, (function(e, r) {
                            if ("string" == typeof e && e.startsWith(":")) {
                                var i = e.substring(1);
                                n[r] = t[i]
                            } else n[r] = e
                        })), n
                    }
                }, {
                    key: "createSegmentGroup",
                    value: function(e, t, n, r) {
                        var i = this,
                            o = this.createSegments(e, t.segments, n, r),
                            a = {};
                        return sc(t.children, (function(t, o) { a[o] = i.createSegmentGroup(e, t, n, r) })), new dc(o, a)
                    }
                }, { key: "createSegments", value: function(e, t, n, r) { var i = this; return t.map((function(t) { return t.path.startsWith(":") ? i.findPosParam(e, t, r) : i.findOrReturn(t, n) })) } }, { key: "findPosParam", value: function(e, t, n) { var r = n[t.path.substring(1)]; if (!r) throw new Error("Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'.")); return r } }, {
                    key: "findOrReturn",
                    value: function(e, t) {
                        var n = 0,
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                                var u = a.value;
                                if (u.path === e.path) return t.splice(n), u;
                                n++
                            }
                        } catch (s) { i = !0, o = s } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } }
                        return e
                    }
                }]), e
            }();

            function vh(e, t, n) { if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; var r = (t.matcher || ec)(n, e, t); return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } }

            function ph(e) { if (1 === e.numberOfChildren && e.children[Ks]) { var t = e.children[Ks]; return new dc(e.segments.concat(t.segments), t.children) } return e }

            function gh(e, t, n) { return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo }

            function yh(e) { return e.outlet || Ks }
            var mh = function e(t) { _classCallCheck(this, e), this.path = t, this.route = this.path[this.path.length - 1] },
                _h = function e(t, n) { _classCallCheck(this, e), this.component = t, this.route = n };

            function kh(e, t, n) { var r = function(e) { if (!e) return null; for (var t = e.parent; t; t = t.parent) { var n = t.routeConfig; if (n && n._loadedConfig) return n._loadedConfig } return null }(t); return (r ? r.module.injector : n).get(e) }

            function Ch(e, t, n) {
                var r = Uc(e),
                    i = e.value;
                sc(r, (function(e, r) { Ch(e, i.component ? t ? t.children.getContext(r) : null : t, n) })), n.canDeactivateChecks.push(new _h(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
            }
            var wh = Symbol("INITIAL_VALUE");

            function bh() {
                return hu((function(e) {
                    return (function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = null,
                            i = null;
                        return I(t[t.length - 1]) && (i = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && u(t[0]) && (t = t[0]), W(t, i).lift(new Ml(r))
                    }).apply(void 0, _toConsumableArray(e.map((function(e) {
                        return e.pipe(ou(1), function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e) {
                                var n = t[t.length - 1];
                                I(n) ? t.pop() : n = null;
                                var r = t.length;
                                return function() { return Ll()(Al.apply(void 0, arguments)) }(1 !== r || n ? r > 0 ? W(t, n) : Rl(n) : Pl(t[0]), e)
                            }
                        }(wh))
                    })))).pipe(vu((function(e, t) { var n = !1; return t.reduce((function(e, r, i) { if (e !== wh) return e; if (r === wh && (n = !0), !n) { if (!1 === r) return r; if (i === t.length - 1 || lh(r)) return r } return e }), e) }), wh), Hl((function(e) { return e !== wh })), q((function(e) { return lh(e) ? e : !0 === e })), ou(1))
                }))
            }

            function Sh(e, t) { return null !== e && t && t(new Zs(e)), Al(!0) }

            function xh(e, t) { return null !== e && t && t(new Bs(e)), Al(!0) }

            function Eh(e, t, n) {
                var r = t.routeConfig ? t.routeConfig.canActivate : null;
                return r && 0 !== r.length ? Al(r.map((function(r) {
                    return jl((function() {
                        var i, o = kh(r, t, n);
                        if (function(e) { return e && ah(e.canActivate) }(o)) i = cc(o.canActivate(t, e));
                        else {
                            if (!ah(o)) throw new Error("Invalid CanActivate guard");
                            i = cc(o(t, e))
                        }
                        return i.pipe(uu())
                    }))
                }))).pipe(bh()) : Al(!0)
            }

            function Th(e, t, n) {
                var r = t[t.length - 1],
                    i = t.slice(0, t.length - 1).reverse().map((function(e) { return function(e) { var t = e.routeConfig ? e.routeConfig.canActivateChild : null; return t && 0 !== t.length ? { node: e, guards: t } : null }(e) })).filter((function(e) { return null !== e })).map((function(t) {
                        return jl((function() {
                            return Al(t.guards.map((function(i) {
                                var o, a = kh(i, t.node, n);
                                if (function(e) { return e && ah(e.canActivateChild) }(a)) o = cc(a.canActivateChild(r, e));
                                else {
                                    if (!ah(a)) throw new Error("Invalid CanActivateChild guard");
                                    o = cc(a(r, e))
                                }
                                return o.pipe(uu())
                            }))).pipe(bh())
                        }))
                    }));
                return Al(i).pipe(bh())
            }
            var Rh = function e() { _classCallCheck(this, e) },
                Ph = function() {
                    function e(t, n, r, i, o, a) { _classCallCheck(this, e), this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = a }
                    return _createClass(e, [{
                        key: "recognize",
                        value: function() {
                            try {
                                var e = Ih(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                    t = this.processSegmentGroup(this.config, e, Ks),
                                    n = new zc([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Ks, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                    r = new Mc(n, t),
                                    i = new Fc(this.url, r);
                                return this.inheritParamsAndData(i._root), Al(i)
                            } catch (o) { return new b((function(e) { return e.error(o) })) }
                        }
                    }, {
                        key: "inheritParamsAndData",
                        value: function(e) {
                            var t = this,
                                n = e.value,
                                r = Vc(n, this.paramsInheritanceStrategy);
                            n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach((function(e) { return t.inheritParamsAndData(e) }))
                        }
                    }, { key: "processSegmentGroup", value: function(e, t, n) { return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n) } }, {
                        key: "processChildren",
                        value: function(e, t) {
                            var n, r = this,
                                i = gc(t, (function(t, n) { return r.processSegmentGroup(e, t, n) }));
                            return n = {}, i.forEach((function(e) {
                                var t = n[e.value.outlet];
                                if (t) {
                                    var r = t.url.map((function(e) { return e.toString() })).join("/"),
                                        i = e.value.url.map((function(e) { return e.toString() })).join("/");
                                    throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'."))
                                }
                                n[e.value.outlet] = e.value
                            })), i.sort((function(e, t) { return e.value.outlet === Ks ? -1 : t.value.outlet === Ks ? 1 : e.value.outlet.localeCompare(t.value.outlet) })), i
                        }
                    }, {
                        key: "processSegment",
                        value: function(e, t, n, r) {
                            var i = !0,
                                o = !1,
                                a = void 0;
                            try { for (var l, u = e[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) { var s = l.value; try { return this.processSegmentAgainstRoute(s, t, n, r) } catch (c) { if (!(c instanceof Rh)) throw c } } } catch (h) { o = !0, a = h } finally { try { i || null == u.return || u.return() } finally { if (o) throw a } }
                            if (this.noLeftoversInUrl(t, n, r)) return [];
                            throw new Rh
                        }
                    }, { key: "noLeftoversInUrl", value: function(e, t, n) { return 0 === t.length && !e.children[n] } }, {
                        key: "processSegmentAgainstRoute",
                        value: function(e, t, n, r) {
                            if (e.redirectTo) throw new Rh;
                            if ((e.outlet || Ks) !== r) throw new Rh;
                            var i, o = [],
                                a = [];
                            if ("**" === e.path) {
                                var l = n.length > 0 ? uc(n).parameters : {};
                                i = new zc(n, l, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Mh(e), r, e.component, e, Ah(t), Oh(t) + n.length, Uh(e))
                            } else {
                                var u = function(e, t, n) {
                                    if ("" === t.path) { if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Rh; return { consumedSegments: [], lastChild: 0, parameters: {} } }
                                    var r = (t.matcher || ec)(n, e, t);
                                    if (!r) throw new Rh;
                                    var i = {};
                                    sc(r.posParams, (function(e, t) { i[t] = e.path }));
                                    var o = r.consumed.length > 0 ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters) : i;
                                    return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o }
                                }(t, e, n);
                                o = u.consumedSegments, a = n.slice(u.lastChild), i = new zc(o, u.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Mh(e), r, e.component, e, Ah(t), Oh(t) + o.length, Uh(e))
                            }
                            var s = function(e) { return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [] }(e),
                                c = Ih(t, o, a, s, this.relativeLinkResolution),
                                h = c.segmentGroup,
                                f = c.slicedSegments;
                            if (0 === f.length && h.hasChildren()) { var d = this.processChildren(s, h); return [new Mc(i, d)] }
                            if (0 === s.length && 0 === f.length) return [new Mc(i, [])];
                            var v = this.processSegment(s, h, f, Ks);
                            return [new Mc(i, v)]
                        }
                    }]), e
                }();

            function Ah(e) { for (var t = e; t._sourceSegment;) t = t._sourceSegment; return t }

            function Oh(e) { for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0; return n - 1 }

            function Ih(e, t, n, r, i) {
                if (n.length > 0 && function(e, t, n) { return n.some((function(n) { return Nh(e, t, n) && Dh(n) !== Ks })) }(e, n, r)) {
                    var o = new dc(t, function(e, t, n, r) {
                        var i = {};
                        i[Ks] = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                        var o = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                                var c = u.value;
                                if ("" === c.path && Dh(c) !== Ks) {
                                    var h = new dc([], {});
                                    h._sourceSegment = e, h._segmentIndexShift = t.length, i[Dh(c)] = h
                                }
                            }
                        } catch (f) { a = !0, l = f } finally { try { o || null == s.return || s.return() } finally { if (a) throw l } }
                        return i
                    }(e, t, r, new dc(n, e.children)));
                    return o._sourceSegment = e, o._segmentIndexShift = t.length, { segmentGroup: o, slicedSegments: [] }
                }
                if (0 === n.length && function(e, t, n) { return n.some((function(n) { return Nh(e, t, n) })) }(e, n, r)) {
                    var a = new dc(e.segments, function(e, t, n, r, i, o) {
                        var a = {},
                            l = !0,
                            u = !1,
                            s = void 0;
                        try {
                            for (var c, h = r[Symbol.iterator](); !(l = (c = h.next()).done); l = !0) {
                                var f = c.value;
                                if (Nh(e, n, f) && !i[Dh(f)]) {
                                    var d = new dc([], {});
                                    d._sourceSegment = e, d._segmentIndexShift = "legacy" === o ? e.segments.length : t.length, a[Dh(f)] = d
                                }
                            }
                        } catch (v) { u = !0, s = v } finally { try { l || null == h.return || h.return() } finally { if (u) throw s } }
                        return Object.assign({}, i, a)
                    }(e, t, n, r, e.children, i));
                    return a._sourceSegment = e, a._segmentIndexShift = t.length, { segmentGroup: a, slicedSegments: n }
                }
                var l = new dc(e.segments, e.children);
                return l._sourceSegment = e, l._segmentIndexShift = t.length, { segmentGroup: l, slicedSegments: n }
            }

            function Nh(e, t, n) { return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo }

            function Dh(e) { return e.outlet || Ks }

            function Mh(e) { return e.data || {} }

            function Uh(e) { return e.resolve || {} }

            function jh(e, t, n, r) { var i = kh(e, t, r); return cc(i.resolve ? i.resolve(t, n) : i(t, n)) }

            function Lh(e) { return function(t) { return t.pipe(hu((function(t) { var n = e(t); return n ? Q(n).pipe(q((function() { return t }))) : Q([t]) }))) } }
            var Hh = function e() { _classCallCheck(this, e) },
                Vh = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "shouldDetach", value: function(e) { return !1 } }, { key: "store", value: function(e, t) {} }, { key: "shouldAttach", value: function(e) { return !1 } }, { key: "retrieve", value: function(e) { return null } }, { key: "shouldReuseRoute", value: function(e, t) { return e.routeConfig === t.routeConfig } }]), e
                }(),
                zh = new Re("ROUTES"),
                Fh = function() {
                    function e(t, n, r, i) { _classCallCheck(this, e), this.loader = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i }
                    return _createClass(e, [{ key: "load", value: function(e, t) { var n = this; return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(q((function(r) { n.onLoadEndListener && n.onLoadEndListener(t); var i = r.create(e); return new tc(lc(i.injector.get(zh)).map(oc), i) }))) } }, { key: "loadModuleFactory", value: function(e) { var t = this; return "string" == typeof e ? Q(this.loader.load(e)) : cc(e()).pipe(K((function(e) { return e instanceof Fe ? Al(e) : Q(t.compiler.compileModuleAsync(e)) }))) } }]), e
                }(),
                Bh = function e() { _classCallCheck(this, e) },
                qh = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "shouldProcessUrl", value: function(e) { return !0 } }, { key: "extract", value: function(e) { return e } }, { key: "merge", value: function(e, t) { return e } }]), e
                }();

            function Zh(e) { throw e }

            function Gh(e, t, n) { return t.parse("/") }

            function Wh(e, t) { return Al(null) }
            var Qh = function() {
                    function e(t, n, r, i, o, a, l, u) {
                        var s = this;
                        _classCallCheck(this, e), this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new A, this.errorHandler = Zh, this.malformedUriErrorHandler = Gh, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: Wh, afterPreactivation: Wh }, this.urlHandlingStrategy = new qh, this.routeReuseStrategy = new Vh, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(ze), this.console = o.get(Li);
                        var c = o.get(ro);
                        this.isNgZoneEnabled = c instanceof ro, this.resetConfig(u), this.currentUrlTree = new fc(new dc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Fh(a, l, (function(e) { return s.triggerEvent(new zs(e)) }), (function(e) { return s.triggerEvent(new Fs(e)) })), this.routerState = Lc(this.currentUrlTree, this.rootComponentType), this.transitions = new Ol({ id: 0, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree), urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree), rawUrl: this.currentUrlTree, extras: {}, resolve: null, reject: null, promise: Promise.resolve(!0), source: "imperative", restoredState: null, currentSnapshot: this.routerState.snapshot, targetSnapshot: null, currentRouterState: this.routerState, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    return _createClass(e, [{
                        key: "setupNavigations",
                        value: function(e) {
                            var t = this,
                                n = this.events;
                            return e.pipe(Hl((function(e) { return 0 !== e.id })), q((function(e) { return Object.assign({}, e, { extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl) }) })), hu((function(e) {
                                var r, i, o, a = !1,
                                    l = !1;
                                return Al(e).pipe(Wl((function(e) { t.currentNavigation = { id: e.id, initialUrl: e.currentRawUrl, extractedUrl: e.extractedUrl, trigger: e.source, extras: e.extras, previousNavigation: t.lastSuccessfulNavigation ? Object.assign({}, t.lastSuccessfulNavigation, { previousNavigation: null }) : null } })), hu((function(e) {
                                    var r, i, o, a, l = !t.navigated || e.extractedUrl.toString() !== t.browserUrlTree.toString();
                                    if (("reload" === t.onSameUrlNavigation || l) && t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return Al(e).pipe(hu((function(e) { var r = t.transitions.getValue(); return n.next(new Is(e.id, t.serializeUrl(e.extractedUrl), e.source, e.restoredState)), r !== t.transitions.getValue() ? Tl : [e] })), hu((function(e) { return Promise.resolve(e) })), (r = t.ngModule.injector, i = t.configLoader, o = t.urlSerializer, a = t.config, function(e) { return e.pipe(hu((function(e) { return function(e, t, n, r, i) { return new dh(e, t, n, r, i).apply() }(r, i, o, e.extractedUrl, a).pipe(q((function(t) { return Object.assign({}, e, { urlAfterRedirects: t }) }))) }))) }), Wl((function(e) { t.currentNavigation = Object.assign({}, t.currentNavigation, { finalUrl: e.urlAfterRedirects }) })), function(e, n, r, i, o) {
                                        return function(r) {
                                            return r.pipe(K((function(r) {
                                                return function(e, t, n, r) {
                                                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                                                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy";
                                                    return new Ph(e, t, n, r, i, o).recognize()
                                                }(e, n, r.urlAfterRedirects, (a = r.urlAfterRedirects, t.serializeUrl(a)), i, o).pipe(q((function(e) { return Object.assign({}, r, { targetSnapshot: e }) })));
                                                var a
                                            })))
                                        }
                                    }(t.rootComponentType, t.config, 0, t.paramsInheritanceStrategy, t.relativeLinkResolution), Wl((function(e) { "eager" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects) })), Wl((function(e) {
                                        var r = new Us(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        n.next(r)
                                    })));
                                    if (l && t.rawUrlTree && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) {
                                        var u = e.id,
                                            s = e.extractedUrl,
                                            c = e.source,
                                            h = e.restoredState,
                                            f = e.extras,
                                            d = new Is(u, t.serializeUrl(s), c, h);
                                        n.next(d);
                                        var v = Lc(s, t.rootComponentType).snapshot;
                                        return Al(Object.assign({}, e, { targetSnapshot: v, urlAfterRedirects: s, extras: Object.assign({}, f, { skipLocationChange: !1, replaceUrl: !1 }) }))
                                    }
                                    return t.rawUrlTree = e.rawUrl, t.browserUrlTree = e.urlAfterRedirects, e.resolve(null), Tl
                                })), Lh((function(e) {
                                    var n = e.targetSnapshot,
                                        r = e.id,
                                        i = e.extractedUrl,
                                        o = e.rawUrl,
                                        a = e.extras,
                                        l = a.skipLocationChange,
                                        u = a.replaceUrl;
                                    return t.hooks.beforePreactivation(n, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!l, replaceUrl: !!u })
                                })), Wl((function(e) {
                                    var n = new js(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n)
                                })), q((function(e) {
                                    return Object.assign({}, e, {
                                        guards: (n = e.targetSnapshot, r = e.currentSnapshot, i = t.rootContexts, o = n._root, function e(t, n, r, i) {
                                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                a = Uc(n);
                                            return t.children.forEach((function(t) {
                                                ! function(t, n, r, i) {
                                                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                        a = t.value,
                                                        l = n ? n.value : null,
                                                        u = r ? r.getContext(t.value.outlet) : null;
                                                    if (l && a.routeConfig === l.routeConfig) {
                                                        var s = function(e, t, n) {
                                                            if ("function" == typeof n) return n(e, t);
                                                            switch (n) {
                                                                case "pathParamsChange":
                                                                    return !pc(e.url, t.url);
                                                                case "pathParamsOrQueryParamsChange":
                                                                    return !pc(e.url, t.url) || !ac(e.queryParams, t.queryParams);
                                                                case "always":
                                                                    return !0;
                                                                case "paramsOrQueryParamsChange":
                                                                    return !Gc(e, t) || !ac(e.queryParams, t.queryParams);
                                                                case "paramsChange":
                                                                default:
                                                                    return !Gc(e, t)
                                                            }
                                                        }(l, a, a.routeConfig.runGuardsAndResolvers);
                                                        s ? o.canActivateChecks.push(new mh(i)) : (a.data = l.data, a._resolvedData = l._resolvedData), e(t, n, a.component ? u ? u.children : null : r, i, o), s && o.canDeactivateChecks.push(new _h(u && u.outlet && u.outlet.component || null, l))
                                                    } else l && Ch(n, u, o), o.canActivateChecks.push(new mh(i)), e(t, null, a.component ? u ? u.children : null : r, i, o)
                                                }(t, a[t.value.outlet], r, i.concat([t.value]), o), delete a[t.value.outlet]
                                            })), sc(a, (function(e, t) { return Ch(e, r.getContext(t), o) })), o
                                        }(o, r ? r._root : null, i, [o.value]))
                                    });
                                    var n, r, i, o
                                })), (i = t.ngModule.injector, o = function(e) { return t.triggerEvent(e) }, function(e) {
                                    return e.pipe(K((function(e) {
                                        var t = e.targetSnapshot,
                                            n = e.currentSnapshot,
                                            r = e.guards,
                                            a = r.canActivateChecks,
                                            l = r.canDeactivateChecks;
                                        return 0 === l.length && 0 === a.length ? Al(Object.assign({}, e, { guardsResult: !0 })) : function(e, t, n, r) {
                                            return Q(e).pipe(K((function(e) {
                                                return function(e, t, n, r, i) {
                                                    var o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                                    return o && 0 !== o.length ? Al(o.map((function(o) {
                                                        var a, l = kh(o, t, i);
                                                        if (function(e) { return e && ah(e.canDeactivate) }(l)) a = cc(l.canDeactivate(e, t, n, r));
                                                        else {
                                                            if (!ah(l)) throw new Error("Invalid CanDeactivate guard");
                                                            a = cc(l(e, t, n, r))
                                                        }
                                                        return a.pipe(uu())
                                                    }))).pipe(bh()) : Al(!0)
                                                }(e.component, e.route, n, t, r)
                                            })), uu((function(e) { return !0 !== e }), !0))
                                        }(l, t, n, i).pipe(K((function(e) { return e && "boolean" == typeof e ? function(e, t, n, r) { return Q(t).pipe(yu((function(t) { return Q([xh(t.route.parent, r), Sh(t.route, r), Th(e, t.path, n), Eh(e, t.route, n)]).pipe(Ll(), uu((function(e) { return !0 !== e }), !0)) })), uu((function(e) { return !0 !== e }), !0)) }(t, a, i, o) : Al(e) })), q((function(t) { return Object.assign({}, e, { guardsResult: t }) })))
                                    })))
                                }), Wl((function(e) { if (lh(e.guardsResult)) { var n = Xs('Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"')); throw n.url = e.guardsResult, n } })), Wl((function(e) {
                                    var n = new Ls(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                                    t.triggerEvent(n)
                                })), Hl((function(e) { if (!e.guardsResult) { t.resetUrlToCurrentUrlTree(); var r = new Ds(e.id, t.serializeUrl(e.extractedUrl), ""); return n.next(r), e.resolve(!1), !1 } return !0 })), Lh((function(e) {
                                    if (e.guards.canActivateChecks.length) return Al(e).pipe(Wl((function(e) {
                                        var n = new Hs(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        t.triggerEvent(n)
                                    })), function(e, t) {
                                        return function(n) {
                                            return n.pipe(K((function(n) {
                                                var r = n.targetSnapshot,
                                                    i = n.guards.canActivateChecks;
                                                return i.length ? Q(i).pipe(yu((function(n) { return function(e, t, n, r) { return function(e, t, n, r) { var i = Object.keys(e); if (0 === i.length) return Al({}); if (1 === i.length) { var o = i[0]; return jh(e[o], t, n, r).pipe(q((function(e) { return _defineProperty({}, o, e) }))) } var a = {}; return Q(i).pipe(K((function(i) { return jh(e[i], t, n, r).pipe(q((function(e) { return a[i] = e, e }))) }))).pipe(tu(), q((function() { return a }))) }(e._resolve, e, t, r).pipe(q((function(t) { return e._resolvedData = t, e.data = Object.assign({}, e.data, Vc(e, n).resolve), null }))) }(n.route, r, e, t) })), function(e, t) { return arguments.length >= 2 ? function(n) { return k(vu(e, t), ql(1), $l(t))(n) } : function(t) { return k(vu((function(t, n, r) { return e(t, n, r + 1) })), ql(1))(t) } }((function(e, t) { return e })), q((function(e) { return n }))) : Al(n)
                                            })))
                                        }
                                    }(t.paramsInheritanceStrategy, t.ngModule.injector), Wl((function(e) {
                                        var n = new Vs(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        t.triggerEvent(n)
                                    })))
                                })), Lh((function(e) {
                                    var n = e.targetSnapshot,
                                        r = e.id,
                                        i = e.extractedUrl,
                                        o = e.rawUrl,
                                        a = e.extras,
                                        l = a.skipLocationChange,
                                        u = a.replaceUrl;
                                    return t.hooks.afterPreactivation(n, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!l, replaceUrl: !!u })
                                })), q((function(e) {
                                    var n, r, i, o, a = (n = t.routeReuseStrategy, r = e.targetSnapshot, i = e.currentRouterState, o = function e(t, n, r) {
                                        if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                            var i = r.value;
                                            i._futureSnapshot = n.value;
                                            var o = function(t, n, r) {
                                                return n.children.map((function(n) {
                                                    var i = !0,
                                                        o = !1,
                                                        a = void 0;
                                                    try { for (var l, u = r.children[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) { var s = l.value; if (t.shouldReuseRoute(s.value.snapshot, n.value)) return e(t, n, s) } } catch (c) { o = !0, a = c } finally { try { i || null == u.return || u.return() } finally { if (o) throw a } }
                                                    return e(t, n)
                                                }))
                                            }(t, n, r);
                                            return new Mc(i, o)
                                        }
                                        var a = t.retrieve(n.value);
                                        if (a) {
                                            var l = a.route;
                                            return function e(t, n) {
                                                if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = t.value;
                                                for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                                            }(n, l), l
                                        }
                                        var u, s = new Hc(new Ol((u = n.value).url), new Ol(u.params), new Ol(u.queryParams), new Ol(u.fragment), new Ol(u.data), u.outlet, u.component, u),
                                            c = n.children.map((function(n) { return e(t, n) }));
                                        return new Mc(s, c)
                                    }(n, r._root, i ? i._root : void 0), new jc(o, r));
                                    return Object.assign({}, e, { targetRouterState: a })
                                })), Wl((function(e) { t.currentUrlTree = e.urlAfterRedirects, t.rawUrlTree = t.urlHandlingStrategy.merge(t.currentUrlTree, e.rawUrl), t.routerState = e.targetRouterState, "deferred" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects) })), function(e, t, n) { return q((function(r) { return new ih(t, r.targetRouterState, r.currentRouterState, n).activate(e), r })) }(t.rootContexts, t.routeReuseStrategy, (function(e) { return t.triggerEvent(e) })), Wl({ next: function() { a = !0 }, complete: function() { a = !0 } }), (r = function() {
                                    if (!a && !l) {
                                        t.resetUrlToCurrentUrlTree();
                                        var r = new Ds(e.id, t.serializeUrl(e.extractedUrl), "Navigation ID ".concat(e.id, " is not equal to the current navigation id ").concat(t.navigationId));
                                        n.next(r), e.resolve(!1)
                                    }
                                    t.currentNavigation = null
                                }, function(e) { return e.lift(new mu(r)) }), nu((function(r) {
                                    if (l = !0, (u = r) && u[$s]) {
                                        var i = lh(r.url);
                                        i || (t.navigated = !0, t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                                        var o = new Ds(e.id, t.serializeUrl(e.extractedUrl), r.message);
                                        n.next(o), e.resolve(!1), i && t.navigateByUrl(r.url)
                                    } else {
                                        t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                                        var a = new Ms(e.id, t.serializeUrl(e.extractedUrl), r);
                                        n.next(a);
                                        try { e.resolve(t.errorHandler(r)) } catch (s) { e.reject(s) }
                                    }
                                    var u;
                                    return Tl
                                })))
                            })))
                        }
                    }, { key: "resetRootComponentType", value: function(e) { this.rootComponentType = e, this.routerState.root.component = this.rootComponentType } }, { key: "getTransition", value: function() { var e = this.transitions.value; return e.urlAfterRedirects = this.browserUrlTree, e } }, { key: "setTransition", value: function(e) { this.transitions.next(Object.assign({}, this.getTransition(), e)) } }, { key: "initialNavigation", value: function() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }) } }, {
                        key: "setUpLocationChangeListener",
                        value: function() {
                            var e = this;
                            this.locationSubscription || (this.locationSubscription = this.location.subscribe((function(t) {
                                var n = e.parseUrl(t.url),
                                    r = "popstate" === t.type ? "popstate" : "hashchange",
                                    i = t.state && t.state.navigationId ? t.state : null;
                                setTimeout((function() { e.scheduleNavigation(n, r, i, { replaceUrl: !0 }) }), 0)
                            })))
                        }
                    }, { key: "getCurrentNavigation", value: function() { return this.currentNavigation } }, { key: "triggerEvent", value: function(e) { this.events.next(e) } }, { key: "resetConfig", value: function(e) { nc(e), this.config = e.map(oc), this.navigated = !1, this.lastSuccessfulId = -1 } }, { key: "ngOnDestroy", value: function() { this.dispose() } }, { key: "dispose", value: function() { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null) } }, {
                        key: "createUrlTree",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.relativeTo,
                                r = t.queryParams,
                                i = t.fragment,
                                o = t.preserveQueryParams,
                                a = t.queryParamsHandling,
                                l = t.preserveFragment;
                            nt() && o && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                            var u = n || this.routerState.root,
                                s = l ? this.currentUrlTree.fragment : i,
                                c = null;
                            if (a) switch (a) {
                                case "merge":
                                    c = Object.assign({}, this.currentUrlTree.queryParams, r);
                                    break;
                                case "preserve":
                                    c = this.currentUrlTree.queryParams;
                                    break;
                                default:
                                    c = r || null
                            } else c = o ? this.currentUrlTree.queryParams : r || null;
                            return null !== c && (c = this.removeEmptyProps(c)),
                                function(e, t, n, r, i) {
                                    if (0 === n.length) return Qc(t.root, t.root, t, r, i);
                                    var o = function(e) {
                                        if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new Kc(!0, 0, e);
                                        var t = 0,
                                            n = !1,
                                            r = e.reduce((function(e, r, i) { if ("object" == typeof r && null != r) { if (r.outlets) { var o = {}; return sc(r.outlets, (function(e, t) { o[t] = "string" == typeof e ? e.split("/") : e })), [].concat(_toConsumableArray(e), [{ outlets: o }]) } if (r.segmentPath) return [].concat(_toConsumableArray(e), [r.segmentPath]) } return "string" != typeof r ? [].concat(_toConsumableArray(e), [r]) : 0 === i ? (r.split("/").forEach((function(r, i) { 0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r)) })), e) : [].concat(_toConsumableArray(e), [r]) }), []);
                                        return new Kc(n, t, r)
                                    }(n);
                                    if (o.toRoot()) return Qc(t.root, new dc([], {}), t, r, i);
                                    var a = function(e, t, n) {
                                            if (e.isAbsolute) return new Jc(t.root, !0, 0);
                                            if (-1 === n.snapshot._lastPathIndex) return new Jc(n.snapshot._urlSegment, !0, 0);
                                            var r = Wc(e.commands[0]) ? 0 : 1;
                                            return function(e, t, n) {
                                                for (var r = e, i = t, o = n; o > i;) {
                                                    if (o -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                                    i = r.segments.length
                                                }
                                                return new Jc(r, !1, i - o)
                                            }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                                        }(o, t, e),
                                        l = a.processChildren ? Xc(a.segmentGroup, a.index, o.commands) : $c(a.segmentGroup, a.index, o.commands);
                                    return Qc(a.segmentGroup, l, t, r, i)
                                }(u, this.currentUrlTree, e, c, s)
                        }
                    }, {
                        key: "navigateByUrl",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 };
                            nt() && this.isNgZoneEnabled && !ro.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                            var n = lh(e) ? e : this.parseUrl(e),
                                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                            return this.scheduleNavigation(r, "imperative", null, t)
                        }
                    }, { key: "navigate", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 }; return function(e) { for (var t = 0; t < e.length; t++) { var n = e[t]; if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(t)) } }(e), this.navigateByUrl(this.createUrlTree(e, t), t) } }, { key: "serializeUrl", value: function(e) { return this.urlSerializer.serialize(e) } }, { key: "parseUrl", value: function(e) { var t; try { t = this.urlSerializer.parse(e) } catch (n) { t = this.malformedUriErrorHandler(n, this.urlSerializer, e) } return t } }, { key: "isActive", value: function(e, t) { if (lh(e)) return hc(this.currentUrlTree, e, t); var n = this.parseUrl(e); return hc(this.currentUrlTree, n, t) } }, { key: "removeEmptyProps", value: function(e) { return Object.keys(e).reduce((function(t, n) { var r = e[n]; return null != r && (t[n] = r), t }), {}) } }, {
                        key: "processNavigations",
                        value: function() {
                            var e = this;
                            this.navigations.subscribe((function(t) { e.navigated = !0, e.lastSuccessfulId = t.id, e.events.next(new Ns(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(e.currentUrlTree))), e.lastSuccessfulNavigation = e.currentNavigation, e.currentNavigation = null, t.resolve(!0) }), (function(t) { e.console.warn("Unhandled Navigation Error: ") }))
                        }
                    }, {
                        key: "scheduleNavigation",
                        value: function(e, t, n, r) {
                            var i = this.getTransition();
                            if (i && "imperative" !== t && "imperative" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                            if (i && "hashchange" == t && "popstate" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                            if (i && "popstate" == t && "hashchange" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                            var o = null,
                                a = null,
                                l = new Promise((function(e, t) { o = e, a = t })),
                                u = ++this.navigationId;
                            return this.setTransition({ id: u, source: t, restoredState: n, currentUrlTree: this.currentUrlTree, currentRawUrl: this.rawUrlTree, rawUrl: e, extras: r, resolve: o, reject: a, promise: l, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), l.catch((function(e) { return Promise.reject(e) }))
                        }
                    }, {
                        key: "setBrowserUrl",
                        value: function(e, t, n, r) {
                            var i = this.urlSerializer.serialize(e);
                            r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign({}, r, { navigationId: n })) : this.location.go(i, "", Object.assign({}, r, { navigationId: n }))
                        }
                    }, { key: "resetStateAndUrl", value: function(e, t, n) { this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree() } }, { key: "resetUrlToCurrentUrlTree", value: function() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId }) } }, { key: "url", get: function() { return this.serializeUrl(this.currentUrlTree) } }]), e
                }(),
                Kh = function() {
                    function e(t, n, r) {
                        var i = this;
                        _classCallCheck(this, e), this.router = t, this.route = n, this.locationStrategy = r, this.commands = [], this.subscription = t.events.subscribe((function(e) { e instanceof Ns && i.updateTargetUrlAndHref() }))
                    }
                    return _createClass(e, [{ key: "ngOnChanges", value: function(e) { this.updateTargetUrlAndHref() } }, { key: "ngOnDestroy", value: function() { this.subscription.unsubscribe() } }, { key: "onClick", value: function(e, t, n, r) { if (0 !== e || t || n || r) return !0; if ("string" == typeof this.target && "_self" != this.target) return !0; var i = { skipLocationChange: Jh(this.skipLocationChange), replaceUrl: Jh(this.replaceUrl), state: this.state }; return this.router.navigateByUrl(this.urlTree, i), !1 } }, { key: "updateTargetUrlAndHref", value: function() { this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) } }, { key: "routerLink", set: function(e) { this.commands = null != e ? Array.isArray(e) ? e : [e] : [] } }, { key: "preserveQueryParams", set: function(e) { nt() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e } }, { key: "urlTree", get: function() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: Jh(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: Jh(this.preserveFragment) }) } }]), e
                }();

            function Jh(e) { return "" === e || !!e }
            var Yh = function e() { _classCallCheck(this, e), this.outlet = null, this.route = null, this.resolver = null, this.children = new $h, this.attachRef = null },
                $h = function() {
                    function e() { _classCallCheck(this, e), this.contexts = new Map }
                    return _createClass(e, [{
                        key: "onChildOutletCreated",
                        value: function(e, t) {
                            var n = this.getOrCreateContext(e);
                            n.outlet = t, this.contexts.set(e, n)
                        }
                    }, {
                        key: "onChildOutletDestroyed",
                        value: function(e) {
                            var t = this.getContext(e);
                            t && (t.outlet = null)
                        }
                    }, { key: "onOutletDeactivated", value: function() { var e = this.contexts; return this.contexts = new Map, e } }, { key: "onOutletReAttached", value: function(e) { this.contexts = e } }, { key: "getOrCreateContext", value: function(e) { var t = this.getContext(e); return t || (t = new Yh, this.contexts.set(e, t)), t } }, { key: "getContext", value: function(e) { return this.contexts.get(e) || null } }]), e
                }(),
                Xh = function() {
                    function e(t, n, r, i, o) { _classCallCheck(this, e), this.parentContexts = t, this.location = n, this.resolver = r, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new Ti, this.deactivateEvents = new Ti, this.name = i || Ks, t.onChildOutletCreated(this.name, this) }
                    return _createClass(e, [{ key: "ngOnDestroy", value: function() { this.parentContexts.onChildOutletDestroyed(this.name) } }, {
                        key: "ngOnInit",
                        value: function() {
                            if (!this.activated) {
                                var e = this.parentContexts.getContext(this.name);
                                e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
                            }
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            this.location.detach();
                            var e = this.activated;
                            return this.activated = null, this._activatedRoute = null, e
                        }
                    }, { key: "attach", value: function(e, t) { this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView) } }, {
                        key: "deactivate",
                        value: function() {
                            if (this.activated) {
                                var e = this.component;
                                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                            }
                        }
                    }, {
                        key: "activateWith",
                        value: function(e, t) {
                            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                            this._activatedRoute = e;
                            var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                                r = this.parentContexts.getOrCreateContext(this.name).children,
                                i = new ef(e, r, this.location.injector);
                            this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                        }
                    }, { key: "isActivated", get: function() { return !!this.activated } }, { key: "component", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this.activated.instance } }, { key: "activatedRoute", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this._activatedRoute } }, { key: "activatedRouteData", get: function() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {} } }]), e
                }(),
                ef = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.route = t, this.childContexts = n, this.parent = r }
                    return _createClass(e, [{ key: "get", value: function(e, t) { return e === Hc ? this.route : e === $h ? this.childContexts : this.parent.get(e, t) } }]), e
                }(),
                tf = function e() { _classCallCheck(this, e) },
                nf = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "preload", value: function(e, t) { return t().pipe(nu((function() { return Al(null) }))) } }]), e
                }(),
                rf = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{ key: "preload", value: function(e, t) { return Al(null) } }]), e
                }(),
                of = function() {
                    function e(t, n, r, i, o) { _classCallCheck(this, e), this.router = t, this.injector = i, this.preloadingStrategy = o, this.loader = new Fh(n, r, (function(e) { return t.triggerEvent(new zs(e)) }), (function(e) { return t.triggerEvent(new Fs(e)) })) }
                    return _createClass(e, [{
                        key: "setUpPreloading",
                        value: function() {
                            var e = this;
                            this.subscription = this.router.events.pipe(Hl((function(e) { return e instanceof Ns })), yu((function() { return e.preload() }))).subscribe((function() {}))
                        }
                    }, { key: "preload", value: function() { var e = this.injector.get(ze); return this.processRoutes(e, this.router.config) } }, { key: "ngOnDestroy", value: function() { this.subscription.unsubscribe() } }, {
                        key: "processRoutes",
                        value: function(e, t) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                                    var u = a.value;
                                    if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                                        var s = u._loadedConfig;
                                        n.push(this.processRoutes(s.module, s.routes))
                                    } else u.loadChildren && !u.canLoad ? n.push(this.preloadConfig(e, u)) : u.children && n.push(this.processRoutes(e, u.children))
                                }
                            } catch (c) { i = !0, o = c } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } }
                            return Q(n).pipe(X(), q((function(e) {})))
                        }
                    }, { key: "preloadConfig", value: function(e, t) { var n = this; return this.preloadingStrategy.preload(t, (function() { return n.loader.load(e.injector, t).pipe(K((function(e) { return t._loadedConfig = e, n.processRoutes(e.module, e.routes) }))) })) } }]), e
                }(),
                af = function() {
                    function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _classCallCheck(this, e), this.router = t, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled"
                    }
                    return _createClass(e, [{ key: "init", value: function() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents() } }, { key: "createScrollEvents", value: function() { var e = this; return this.router.events.subscribe((function(t) { t instanceof Is ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Ns && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment)) })) } }, { key: "consumeScrollEvents", value: function() { var e = this; return this.router.events.subscribe((function(t) { t instanceof Ws && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0])) })) } }, { key: "scheduleScrollEvent", value: function(e, t) { this.router.triggerEvent(new Ws(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t)) } }, { key: "ngOnDestroy", value: function() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe() } }]), e
                }(),
                lf = new Re("ROUTER_CONFIGURATION"),
                uf = new Re("ROUTER_FORROOT_GUARD"),
                sf = [dl, { provide: yc, useClass: mc }, {
                    provide: Qh,
                    useFactory: gf,
                    deps: [bo, yc, $h, dl, Dt, xo, Qi, zh, lf, [Bh, new ce],
                        [Hh, new ce]
                    ]
                }, $h, { provide: Hc, useFactory: yf, deps: [Qh] }, { provide: xo, useClass: Ro }, of, rf, nf, { provide: lf, useValue: { enableTracing: !1 } }];

            function cf() { return new yo("Router", Qh) }
            var hf = function() {
                function e(t, n) { _classCallCheck(this, e) }
                return _createClass(e, null, [{
                    key: "forRoot",
                    value: function(t, n) {
                        return {
                            ngModule: e,
                            providers: [sf, pf(t), {
                                    provide: uf,
                                    useFactory: vf,
                                    deps: [
                                        [Qh, new ce, new fe]
                                    ]
                                }, { provide: lf, useValue: n || {} }, { provide: hl, useFactory: df, deps: [sl, [new se(fl), new ce], lf] }, { provide: af, useFactory: ff, deps: [Qh, xl, lf] }, { provide: tf, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : rf }, { provide: yo, multi: !0, useFactory: cf },
                                [mf, { provide: Ai, multi: !0, useFactory: _f, deps: [mf] }, { provide: Cf, useFactory: kf, deps: [mf] }, { provide: ji, multi: !0, useExisting: Cf }]
                            ]
                        }
                    }
                }, { key: "forChild", value: function(t) { return { ngModule: e, providers: [pf(t)] } } }]), e
            }();

            function ff(e, t, n) { return n.scrollOffset && t.setOffset(n.scrollOffset), new af(e, t, n) }

            function df(e, t) { return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).useHash ? new gl(e, t) : new yl(e, t) }

            function vf(e) { if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded" }

            function pf(e) { return [{ provide: Ft, multi: !0, useValue: e }, { provide: zh, multi: !0, useValue: e }] }

            function gf(e, t, n, r, i, o, a, l) {
                var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {},
                    s = arguments.length > 9 ? arguments[9] : void 0,
                    c = arguments.length > 10 ? arguments[10] : void 0,
                    h = new Qh(null, t, n, r, i, o, a, lc(l));
                if (s && (h.urlHandlingStrategy = s), c && (h.routeReuseStrategy = c), u.errorHandler && (h.errorHandler = u.errorHandler), u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler), u.enableTracing) {
                    var f = Cu();
                    h.events.subscribe((function(e) { f.logGroup("Router Event: ".concat(e.constructor.name)), f.log(e.toString()), f.log(e), f.logGroupEnd() }))
                }
                return u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation), u.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy), u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy), u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution), h
            }

            function yf(e) { return e.routerState.root }
            var mf = function() {
                function e(t) { _classCallCheck(this, e), this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new A }
                return _createClass(e, [{
                    key: "appInitializer",
                    value: function() {
                        var e = this;
                        return this.injector.get(cl, Promise.resolve(null)).then((function() {
                            var t = null,
                                n = new Promise((function(e) { return t = e })),
                                r = e.injector.get(Qh),
                                i = e.injector.get(lf);
                            if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0);
                            else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), t(!0);
                            else {
                                if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                                r.hooks.afterPreactivation = function() { return e.initNavigation ? Al(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone) }, r.initialNavigation()
                            }
                            return n
                        }))
                    }
                }, {
                    key: "bootstrapListener",
                    value: function(e) {
                        var t = this.injector.get(lf),
                            n = this.injector.get(of),
                            r = this.injector.get(af),
                            i = this.injector.get(Qh),
                            o = this.injector.get(bo);
                        e === o.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                    }
                }, { key: "isLegacyEnabled", value: function(e) { return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation } }, { key: "isLegacyDisabled", value: function(e) { return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation } }]), e
            }();

            function _f(e) { return e.appInitializer.bind(e) }

            function kf(e) { return e.bootstrapListener.bind(e) }
            var Cf = new Re("Router Initializer"),
                wf = Yn({ encapsulation: 2, styles: [], data: {} });

            function bf(e) { return ta(0, [(e()(), Fo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ai(1, 212992, null, 0, Xh, [$h, Nn, on, [8, null], At], null, null)], (function(e, t) { e(t, 1, 0) }), null) }
            var Sf = Ur("ng-component", Qs, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "ng-component", [], null, null, null, bf, wf)), ai(1, 49152, null, 0, Qs, [], null, null)], null, null) }), {}, {}, []),
                xf = function() {
                    function e(t) { _classCallCheck(this, e), this.injector = t, this.img_str = "", this.assetsDirectoryPath = this.injector.get("assetsDirectoryPath") }
                    return _createClass(e, [{ key: "ngOnInit", value: function() { this.img_str = window.innerWidth > 768 ? this.assetsDirectoryPath + "/homeBanner.jpg" : this.assetsDirectoryPath + "/publ_giacomini.jpeg" } }, { key: "onResize", value: function(e) { console.log(e.target.innerWidth), this.img_str = e.target.innerWidth > 768 ? this.assetsDirectoryPath + "/homeBanner.jpg" : this.assetsDirectoryPath + "/publ_giacomini.jpeg" } }]), e
                }(),
                Ef = Yn({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Tf(e) {
                return ta(0, [(e()(), Fo(0, 0, null, null, 1, "div", [
                    ["class", "h-100"]
                ], null, null, null, null, null)), (e()(), Fo(1, 0, null, null, 0, "img", [
                    ["class", "img-fluid"],
                    ["height", "auto"],
                    ["style", "width: 100%; display: block;"]
                ], [
                    [8, "src", 4]
                ], [
                    ["window", "resize"]
                ], (function(e, t, n) { var r = !0; return "window:resize" === t && (r = !1 !== e.component.onResize(n) && r), r }), null, null))], null, (function(e, t) { e(t, 1, 0, br(1, "", t.component.img_str, "")) }))
            }
            var Rf = Ur("app-home", xf, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "app-home", [], null, null, null, Tf, Ef)), ai(1, 114688, null, 0, xf, [Dt], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                Pf = function() {
                    function e(t) { _classCallCheck(this, e), this.injector = t, this.assetsDirectoryPath = this.injector.get("assetsDirectoryPath") }
                    return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e
                }(),
                Af = Yn({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Of(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["about works!"]))], null, null) }
            var If = Ur("app-about", Pf, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "app-about", [], null, null, null, Of, Af)), ai(1, 114688, null, 0, Pf, [Dt], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                Nf = function() {
                    function e(t) { _classCallCheck(this, e), this.injector = t, this.assetsDirectoryPath = this.injector.get("assetsDirectoryPath") }
                    return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e
                }(),
                Df = Yn({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Mf(e) {
                return ta(0, [(e()(), Fo(0, 0, null, null, 105, "div", [
                    ["class", "container h-100 w-100"],
                    ["style", "text-align: center; overflow-y: auto;"]
                ], null, null, null, null, null)), (e()(), Fo(1, 0, null, null, 1, "h1", [
                    ["class", "display-4"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, [" Residencial Giacomini "])), (e()(), Fo(3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (e()(), Fo(4, 0, null, null, 4, "div", [
                    ["class", "d-flex row"]
                ], null, null, null, null, null)), (e()(), Fo(5, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(6, 0, null, null, 1, "h3", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, [" \xc1rea comum "])), (e()(), Fo(8, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(9, 0, null, null, 17, "div", [
                    ["class", "m-auto"],
                    ["style", "text-align: left; font-size: 21px;"]
                ], null, null, null, null, null)), (e()(), Fo(10, 0, null, null, 16, "div", [], null, null, null, null, null)), (e()(), Fo(11, 0, null, null, 15, "ul", [], null, null, null, null, null)), (e()(), Fo(12, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Elevador com capacidade para 8 pessoas (Marca Otis)"])), (e()(), Fo(15, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["2 \xe1reas de festa com 110m\xb2"])), (e()(), Fo(18, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["\xc1rea fitness com 90m\xb2"])), (e()(), Fo(21, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Corredores com porcelanato alto padr\xe3o"])), (e()(), Fo(24, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(25, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Hall decorado"])), (e()(), Fo(27, 0, null, null, 4, "div", [
                    ["class", "d-flex row mt-5"]
                ], null, null, null, null, null)), (e()(), Fo(28, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(29, 0, null, null, 1, "h3", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, [" \xc1rea privativa "])), (e()(), Fo(31, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(32, 0, null, null, 32, "div", [
                    ["class", "container row "],
                    ["style", "text-align: left; font-size: 21px; "]
                ], null, null, null, null, null)), (e()(), Fo(33, 0, null, null, 31, "div", [], null, null, null, null, null)), (e()(), Fo(34, 0, null, null, 30, "ul", [], null, null, null, null, null)), (e()(), Fo(35, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(36, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Acabamento em gesso rebaixado em todos os apartamentos"])), (e()(), Fo(38, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(39, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Luzes de led na sala"])), (e()(), Fo(41, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(42, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Pr\xe9-instala\xe7\xe3o para ar condicionado e ampla laje t\xe9cnica"])), (e()(), Fo(44, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(45, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Ch\xe3o com porcelanato 60x60 (Alto padr\xe3o)"])), (e()(), Fo(47, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(48, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Banheiros, cozinha elavanderia com revestimento at\xe9 o teto (Alto padr\xe3o)"])), (e()(), Fo(50, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["\xc1rea gourmet e sacada de servi\xe7os em todos os apartamentos"])), (e()(), Fo(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(54, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["1 vaga de garagem coberta para cada apartamento (os primeiros compradores ter\xe3o a possiblidade de adquirir 1 vaga adicional)"])), (e()(), Fo(56, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(57, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Paredes com massa corrida"])), (e()(), Fo(59, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(60, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["2 banheiros por apartamento"])), (e()(), Fo(62, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(63, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Plantas de 73m\xb2 e de 84m\xb2"])), (e()(), Fo(65, 0, null, null, 4, "div", [
                    ["class", "d-flex row mt-5"]
                ], null, null, null, null, null)), (e()(), Fo(66, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(67, 0, null, null, 1, "h3", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, [" Localiza\xe7\xe3o privilegiada "])), (e()(), Fo(69, 0, null, null, 0, "hr", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(70, 0, null, null, 20, "div", [
                    ["class", "container row mb-5"],
                    ["style", "text-align: left; font-size: 21px; "]
                ], null, null, null, null, null)), (e()(), Fo(71, 0, null, null, 19, "div", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(72, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Pr\xe9dio pr\xf3ximo a:"])), (e()(), Fo(74, 0, null, null, 16, "ul", [], null, null, null, null, null)), (e()(), Fo(75, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Grandes empresas "])), (e()(), Fo(77, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Institui\xe7\xf5es de ensino "])), (e()(), Fo(79, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Supermercados "])), (e()(), Fo(81, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Farm\xe1cia "])), (e()(), Fo(83, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Bancos "])), (e()(), Fo(85, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Restaurantes "])), (e()(), Fo(87, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Posto de combust\xedvel "])), (e()(), Fo(89, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Linha de \xf4nibus "])), (e()(), Fo(91, 0, null, null, 12, "div", [
                    ["class", "container row m-auto"]
                ], null, null, null, null, null)), (e()(), Fo(92, 0, null, null, 5, "div", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(93, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Apartamento 73m\xb2"])), (e()(), Fo(95, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), $o(-1, null, [" 1 su\xedte + 1 dormit\xf3rio"])), (e()(), Fo(97, 0, null, null, 0, "img", [
                    ["class", "rounded border img-fluid"],
                    ["height", "350px "],
                    ["weight", "350px "]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(98, 0, null, null, 5, "div", [
                    ["class", "col-md"]
                ], null, null, null, null, null)), (e()(), Fo(99, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Apartamento 84m\xb2"])), (e()(), Fo(101, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), $o(-1, null, [" 1 su\xedte + 2 dormit\xf3rio"])), (e()(), Fo(103, 0, null, null, 0, "img", [
                    ["class", "rounded border img-fluid"],
                    ["height", "350px "],
                    ["weight", "350px "]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(104, 0, null, null, 1, "div", [
                    ["class", "container border mt-5 mb-2"]
                ], null, null, null, null, null)), (e()(), Fo(105, 0, null, null, 0, "iframe", [
                    ["allowfullscreen", ""],
                    ["class", "w-100"],
                    ["frameborder", "0"],
                    ["height", "450"],
                    ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.5798728887507!2d-49.03791566118203!3d-26.47345046459737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94debfd9be36f0eb%3A0x832884c4d021be8e!2sR.%20Richard%20Bublitz%20-%20Vieira%2C%20Jaragu%C3%A1%20do%20Sul%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1579822218721!5m2!1spt-BR!2sbr"],
                    ["style", "border:0;"]
                ], null, null, null, null, null))], null, (function(e, t) {
                    var n = t.component;
                    e(t, 97, 0, br(1, "", n.assetsDirectoryPath, "/planta2.jpeg ")), e(t, 103, 0, br(1, "", n.assetsDirectoryPath, "/planta1.jpeg "))
                }))
            }
            var Uf = Ur("app-enterprise", Nf, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "app-enterprise", [], null, null, null, Mf, Df)), ai(1, 114688, null, 0, Nf, [Dt], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                jf = function() {
                    function e(t) { _classCallCheck(this, e), this.injector = t, this.assetsDirectoryPath = this.injector.get("assetsDirectoryPath") }
                    return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e
                }(),
                Lf = Yn({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Hf(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), $o(-1, null, ["contact works!"]))], null, null) }
            var Vf = Ur("app-contact", jf, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "app-contact", [], null, null, null, Hf, Lf)), ai(1, 114688, null, 0, jf, [Dt], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                zf = Yn({
                    encapsulation: 0,
                    styles: [
                        ['html[_ngcontent-%COMP%]{font-size:14px;overflow-x:hidden}.container[_ngcontent-%COMP%]{max-width:960px}.pricing-header[_ngcontent-%COMP%]{max-width:700px}.card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-width:220px}.product-device[_ngcontent-%COMP%]{position:absolute;right:10%;bottom:-30%;width:300px;height:540px;background-color:#333;border-radius:21px;-webkit-transform:rotate(30deg);transform:rotate(30deg)}.product-device[_ngcontent-%COMP%]::before{position:absolute;top:10%;right:10px;bottom:10%;left:10px;content:"";background-color:rgba(255,255,255,.1);border-radius:5px}.product-device-2[_ngcontent-%COMP%]{top:-25%;right:auto;bottom:0;left:5%;background-color:#e5e5e5}.border-top[_ngcontent-%COMP%]{border-top:1px solid #e5e5e5}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #e5e5e5}.box-shadow[_ngcontent-%COMP%]{box-shadow:0 .25rem .75rem rgba(0,0,0,.05)}.flex-equal[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.go_home[_ngcontent-%COMP%]{background-color:#fff;padding:10px;border-radius:100%}@media (min-width:768px){html[_ngcontent-%COMP%]{font-size:16px}.flex-md-equal[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}#logoCameUp[_ngcontent-%COMP%]{background-color:#fff;border-radius:.9%;cursor:pointer}.primum_logo[_ngcontent-%COMP%]{width:85px;height:60px}.footerPrimumSpace[_ngcontent-%COMP%]{height:90px;width:70px}}@media (max-width:767px){.primum_logo[_ngcontent-%COMP%]{margin-top:10px;width:80px;height:60px;background-color:#fff;border-radius:70%}.giacominiText[_ngcontent-%COMP%], .homeHide[_ngcontent-%COMP%]{display:none}#carouselExampleSlidesOnly[_ngcontent-%COMP%]{overflow:auto}}']
                    ],
                    data: {}
                });

            function Ff(e) {
                return ta(0, [(e()(), Fo(0, 0, null, null, 19, "div", [
                    ["class", "sticky-top d-flex flex-column flex-md-row align-items-center px-md-4 border-bottom box-shadow"],
                    ["style", "background-color: #952323;"]
                ], null, null, null, null, null)), (e()(), Fo(1, 0, null, null, 4, "div", [
                    ["class", "my-0 mr-md-auto"],
                    ["id", "logoCameUp"]
                ], null, [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.goHome() && r), r }), null, null)), (e()(), Fo(2, 0, null, null, 0, "img", [
                    ["class", "primum_logo"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(3, 0, null, null, 2, "span", [
                    ["class", "giacominiText text-dark"],
                    ["style", "margin-right: 10px;"]
                ], null, null, null, null, null)), (e()(), Fo(4, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Grupo Giacomini "])), (e()(), Fo(6, 0, null, null, 13, "nav", [
                    ["class", "my-2 my-md-0 mr-md-3 text-nav-bar"]
                ], null, null, null, null, null)), (e()(), Fo(7, 0, null, null, 2, "a", [
                    ["class", "homeHide p-2 text-white"],
                    ["routerLink", "/home"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Wr(e, 8).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), ai(8, 671744, null, 0, Kh, [Qh, Hc, hl], { routerLink: [0, "routerLink"] }, null), (e()(), $o(-1, null, ["Home"])), (e()(), Fo(10, 0, null, null, 2, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/about"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Wr(e, 11).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), ai(11, 671744, null, 0, Kh, [Qh, Hc, hl], { routerLink: [0, "routerLink"] }, null), (e()(), $o(-1, null, ["Sobre"])), (e()(), Fo(13, 0, null, null, 3, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/enterprise"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Wr(e, 14).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), ai(14, 671744, null, 0, Kh, [Qh, Hc, hl], { routerLink: [0, "routerLink"] }, null), (e()(), Fo(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Residencial Giacomini"])), (e()(), Fo(17, 0, null, null, 2, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/contact"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Wr(e, 18).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), ai(18, 671744, null, 0, Kh, [Qh, Hc, hl], { routerLink: [0, "routerLink"] }, null), (e()(), $o(-1, null, ["Contato"])), (e()(), Fo(20, 0, null, null, 2, "main", [], null, null, null, null, null)), (e()(), Fo(21, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ai(22, 212992, null, 0, Xh, [$h, Nn, on, [8, null], At], null, null), (e()(), Fo(23, 0, null, null, 48, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (e()(), Fo(24, 0, null, null, 47, "footer", [
                    ["class", "pt-4 my-md-3 pt-md-5 border-top"]
                ], null, null, null, null, null)), (e()(), Fo(25, 0, null, null, 46, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), Fo(26, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(27, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "mb-2"],
                    ["height", "120"],
                    ["width", "150"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(28, 0, null, null, 16, "div", [
                    ["class", "col-12 col-md row"]
                ], null, null, null, null, null)), (e()(), Fo(29, 0, null, null, 1, "h5", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["Contate nossa equipe!"])), (e()(), Fo(31, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(32, 0, null, null, 1, "h6", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Email"])), (e()(), Fo(34, 0, null, null, 3, "ul", [
                    ["class", "list-unstyled text-small"]
                ], null, null, null, null, null)), (e()(), Fo(35, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(36, 0, null, null, 1, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["seuemail@grupogiacomini.com.br"])), (e()(), Fo(38, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(39, 0, null, null, 1, "h6", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Telefone"])), (e()(), Fo(41, 0, null, null, 3, "ul", [
                    ["class", "list-unstyled text-small"]
                ], null, null, null, null, null)), (e()(), Fo(42, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Fo(43, 0, null, null, 1, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["(47) 99999-9999"])), (e()(), Fo(45, 0, null, null, 12, "div", [
                    ["class", "col-12 col-md row"],
                    ["style", "display: flow-root;"]
                ], null, null, null, null, null)), (e()(), Fo(46, 0, null, null, 1, "h5", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["Redes sociais!"])), (e()(), Fo(48, 0, null, null, 4, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(49, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["width", "25px"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(50, 0, null, null, 2, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), Fo(51, 0, null, null, 1, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["Siga-nos no Instagram!"])), (e()(), Fo(53, 0, null, null, 4, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(54, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["width", "25px"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (e()(), Fo(55, 0, null, null, 2, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), Fo(56, 0, null, null, 1, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["Siga-nos no Facebook!"])), (e()(), Fo(58, 0, null, null, 13, "div", [
                    ["class", "col-12 col-md row"],
                    ["style", "display: flow-root;"]
                ], null, null, null, null, null)), (e()(), Fo(59, 0, null, null, 2, "div", [
                    ["class", "col-12 w-100"]
                ], null, null, null, null, null)), (e()(), Fo(60, 0, null, null, 1, "h1", [
                    ["style", "text-align: center;"]
                ], null, null, null, null, null)), (e()(), Fo(61, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "m-auto"],
                    ["height", "24"],
                    ["src", "https://patrikfreisner.github.io/primum_mainpage/LOGO_PRIMUM_BLACK.png"],
                    ["width", "24"]
                ], null, null, null, null, null)), (e()(), Fo(62, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(63, 0, null, null, 5, "small", [
                    ["style", "margin-right: 5px;"]
                ], null, null, null, null, null)), (e()(), Fo(64, 0, null, null, 4, "b", [], null, null, null, null, null)), (e()(), $o(-1, null, [" Desenvolvido por "])), (e()(), Fo(66, 0, null, null, 2, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), Fo(67, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), $o(-1, null, ["Primum!"])), (e()(), Fo(69, 0, null, null, 2, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Fo(70, 0, null, null, 1, "small", [
                    ["class", "mb-3 text-muted"]
                ], null, null, null, null, null)), (e()(), $o(-1, null, ["\xa9 2020-2020"]))], (function(e, t) { e(t, 8, 0, "/home"), e(t, 11, 0, "/about"), e(t, 14, 0, "/enterprise"), e(t, 18, 0, "/contact"), e(t, 22, 0) }), (function(e, t) {
                    var n = t.component;
                    e(t, 2, 0, br(1, "", n.assetsDirectoryPath, "/GiacominiLogoOnly.png")), e(t, 7, 0, Wr(t, 8).target, Wr(t, 8).href), e(t, 10, 0, Wr(t, 11).target, Wr(t, 11).href), e(t, 13, 0, Wr(t, 14).target, Wr(t, 14).href), e(t, 17, 0, Wr(t, 18).target, Wr(t, 18).href), e(t, 27, 0, br(1, "", n.assetsDirectoryPath, "/GrupoGiacoLogo.png")), e(t, 49, 0, br(1, "", n.assetsDirectoryPath, "/instagram-logo.png")), e(t, 54, 0, br(1, "", n.assetsDirectoryPath, "/facebook-logo-2-1.png"))
                }))
            }
            var Bf = Ur("app-root", ul, (function(e) { return ta(0, [(e()(), Fo(0, 0, null, null, 1, "app-root", [], null, null, null, Ff, zf)), ai(1, 114688, null, 0, ul, [Dt, Qh], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                qf = function() {
                    function e() { _classCallCheck(this, e) }
                    return _createClass(e, [{
                        key: "swipe",
                        value: function(e, t) {
                            var n = [e.changedTouches[0].pageX, e.changedTouches[0].pageY],
                                r = (new Date).getTime();
                            if ("start" === t) this._swipeCoord = n, this._swipeTime = r;
                            else if ("end" === t) { var i = [n[0] - this._swipeCoord[0], n[1] - this._swipeCoord[1]]; if (r - this._swipeTime < 1e3 && Math.abs(i[1]) < Math.abs(i[0]) && Math.abs(i[0]) > 30) return i[0] < 0 ? 1 : -1 }
                            return 0
                        }
                    }]), e
                }(),
                Zf = function e() { _classCallCheck(this, e) },
                Gf = function e() { _classCallCheck(this, e) },
                Wf = new al(ll, [ul], (function(e) {
                    return function(e) {
                        for (var t = {}, n = [], r = !1, i = 0; i < e.length; i++) {
                            var o = e[i];
                            o.token === It && !0 === o.value && (r = !0), 1073741824 & o.flags && n.push(o.token), o.index = i, t[Qn(o.token)] = o
                        }
                        return { factory: null, providersByKey: t, providers: e, modules: n, isRoot: r }
                    }([Pr(512, on, an, [
                        [8, [Sf, Rf, If, Uf, Vf, Bf]],
                        [3, on], ze
                    ]), Pr(5120, Hi, Ho, [
                        [3, Hi]
                    ]), Pr(4608, kl, Cl, [Hi, [2, _l]]), Pr(5120, ki, Vo, [ro]), Pr(5120, Ii, Ni, []), Pr(5120, En, jo, []), Pr(5120, Tn, Lo, []), Pr(4608, ys, ms, [bl]), Pr(6144, xt, null, [ys]), Pr(4608, cs, fs, []), Pr(5120, ju, (function(e, t, n, r, i, o, a, l) { return [new us(e, t, n), new gs(r), new ds(i, o, a, l)] }), [bl, ro, Ui, bl, bl, cs, Li, [2, hs]]), Pr(4608, Lu, Lu, [ju, ro]), Pr(135680, zu, zu, [bl]), Pr(4608, Qu, Qu, [Lu, zu, Ii]), Pr(6144, hn, null, [Qu]), Pr(6144, Vu, null, [zu]), Pr(4608, ho, ho, [ro]), Pr(5120, Hc, yf, [Qh]), Pr(4608, rf, rf, []), Pr(6144, tf, null, [rf]), Pr(135680, of, of, [Qh, xo, Qi, Dt, tf]), Pr(4608, nf, nf, []), Pr(5120, af, ff, [Qh, xl, lf]), Pr(5120, Cf, kf, [mf]), Pr(5120, ji, (function(e) { return [e] }), [Cf]), Pr(5120, Rs, Ps, [bl, Ii]), Pr(4608, qf, qf, []), Pr(1073742336, wl, wl, []), Pr(1024, Xe, Es, []), Pr(1024, yo, (function() { return [cf()] }), []), Pr(512, mf, mf, [Dt]), Pr(1024, Ai, (function(e, t) { return [(n = e, Du("probe", Uu), Du("coreTokens", Object.assign({}, Mu, (n || []).reduce((function(e, t) { return e[t.name] = t.token, e }), {}))), function() { return Uu }), _f(t)]; var n }), [
                        [2, yo], mf
                    ]), Pr(512, Oi, Oi, [
                        [2, Ai]
                    ]), Pr(131584, bo, bo, [ro, Li, Dt, Xe, on, Oi]), Pr(1073742336, zo, zo, [bo]), Pr(1073742336, Ts, Ts, [
                        [3, Ts]
                    ]), Pr(1024, uf, vf, [
                        [3, Qh]
                    ]), Pr(512, yc, mc, []), Pr(512, $h, $h, []), Pr(256, lf, {}, []), Pr(1024, hl, df, [sl, [2, fl], lf]), Pr(512, dl, dl, [hl, sl]), Pr(512, Qi, Qi, []), Pr(512, xo, Ro, [Qi, [2, Eo]]), Pr(1024, zh, (function() {
                        return [
                            [{ path: "", redirectTo: "/home", pathMatch: "full" }, { path: "home", component: xf }, { path: "about", component: Pf }, { path: "enterprise", component: Nf }, { path: "contact", component: jf }]
                        ]
                    }), []), Pr(1024, Qh, gf, [bo, yc, $h, dl, Dt, xo, Qi, zh, lf, [2, Bh],
                        [2, Hh]
                    ]), Pr(1073742336, hf, hf, [
                        [2, uf],
                        [2, Qh]
                    ]), Pr(1073742336, Gf, Gf, []), Pr(1073742336, As, As, []), Pr(1073742336, Zf, Zf, []), Pr(1073742336, ll, ll, []), Pr(256, It, !0, []), Pr(256, "assetsDirectoryPath", "./assets", [])])
                }));
            (function() {
                if (tt) throw new Error("Cannot enable prod mode after platform setup.");
                et = !1
            })(), xs().bootstrapModuleFactory(Wf).catch((function(e) { return console.error(e) }))
        },
        zn8P: function(e, t) {
            function n(e) { return Promise.resolve().then((function() { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t })) }
            n.keys = function() { return [] }, n.resolve = n, e.exports = n, n.id = "zn8P"
        }
    },
    [
        [0, 0]
    ]
]);
//# sourceMappingURL=main-es5.11c1f5e4baff3d326e0c.js.map