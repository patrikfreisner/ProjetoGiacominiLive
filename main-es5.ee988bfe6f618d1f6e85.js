function _defineProperty(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

function _slicedToArray(e, t) { return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest() }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }

function _iterableToArrayLimit(e, t) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) { var n = [],
            r = !0,
            i = !1,
            o = void 0; try { for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (s) { i = !0, o = s } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } } return n } }

function _arrayWithHoles(e) { if (Array.isArray(e)) return e }

function _toConsumableArray(e) { return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread() }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance") }

function _iterableToArray(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }

function _arrayWithoutHoles(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }

function isNativeReflectConstruct() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }

function _construct(e, t, n) { return (_construct = isNativeReflectConstruct() ? Reflect.construct : function(e, t, n) { var r = [null];
        r.push.apply(r, t); var i = new(Function.bind.apply(e, r)); return n && _setPrototypeOf(i, n.prototype), i }).apply(null, arguments) }

function _possibleConstructorReturn(e, t) { return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t }

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

function _get(e, t, n) { return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = _superPropBase(e, t); if (r) { var i = Object.getOwnPropertyDescriptor(r, t); return i.get ? i.get.call(n) : i.value } })(e, t, n || e) }

function _superPropBase(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));); return e }

function _getPrototypeOf(e) { return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

function _inherits(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _setPrototypeOf(e, t) }

function _setPrototypeOf(e, t) { return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

function _createClass(e, t, n) { return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e }(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], { 0: function(e, t, n) { e.exports = n("zUnb") }, zUnb: function(e, t, n) { "use strict";

            function r(e) { return "function" == typeof e }
            n.r(t); var i = !1,
                o = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) { if (e) { var t = new Error;
                            console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack) } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                        i = e }, get useDeprecatedSynchronousErrorHandling() { return i } };

            function a(e) { setTimeout((function() { throw e })) } var l = { closed: !0, next: function(e) {}, error: function(e) { if (o.useDeprecatedSynchronousErrorHandling) throw e;
                        a(e) }, complete: function() {} },
                s = Array.isArray || function(e) { return e && "number" == typeof e.length };

            function u(e) { return null !== e && "object" == typeof e }

            function c(e) { return Error.call(this), this.message = e ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(e.map((function(e, t) { return "".concat(t + 1, ") ").concat(e.toString()) })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = e, this }
            c.prototype = Object.create(Error.prototype); var h, d = c,
                f = ((h = function() {
                    function e(t) { _classCallCheck(this, e), this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t) } return _createClass(e, [{ key: "unsubscribe", value: function() { var e, t = !1; if (!this.closed) { var n = this._parent,
                                    i = this._parents,
                                    o = this._unsubscribe,
                                    a = this._subscriptions;
                                this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null; for (var l = -1, c = i ? i.length : 0; n;) n.remove(this), n = ++l < c && i[l] || null; if (r(o)) try { o.call(this) } catch (f) { t = !0, e = f instanceof d ? p(f.errors) : [f] }
                                if (s(a))
                                    for (l = -1, c = a.length; ++l < c;) { var h = a[l]; if (u(h)) try { h.unsubscribe() } catch (f) { t = !0, e = e || [], f instanceof d ? e = e.concat(p(f.errors)) : e.push(f) } }
                                if (t) throw new d(e) } } }, { key: "add", value: function(t) { var n = t; switch (typeof t) {
                                case "function":
                                    n = new e(t);
                                case "object":
                                    if (n === this || n.closed || "function" != typeof n.unsubscribe) return n; if (this.closed) return n.unsubscribe(), n; if (!(n instanceof e)) { var r = n;
                                        (n = new e)._subscriptions = [r] } break;
                                default:
                                    if (!t) return e.EMPTY; throw new Error("unrecognized teardown " + t + " added to Subscription.") } if (n._addParent(this)) { var i = this._subscriptions;
                                i ? i.push(n) : this._subscriptions = [n] } return n } }, { key: "remove", value: function(e) { var t = this._subscriptions; if (t) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) } } }, { key: "_addParent", value: function(e) { var t = this._parent,
                                n = this._parents; return t !== e && (t ? n ? -1 === n.indexOf(e) && (n.push(e), !0) : (this._parents = [e], !0) : (this._parent = e, !0)) } }]), e }()).EMPTY = function(e) { return e.closed = !0, e }(new h), h);

            function p(e) { return e.reduce((function(e, t) { return e.concat(t instanceof d ? t.errors : t) }), []) } var v = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                g = function(e) {
                    function t(e, n, r) { var i; switch (_classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = l; break;
                            case 1:
                                if (!e) { i.destination = l; break } if ("object" == typeof e) { e instanceof t ? (i.syncErrorThrowable = e.syncErrorThrowable, i.destination = e, e.add(_assertThisInitialized(i))) : (i.syncErrorThrowable = !0, i.destination = new y(_assertThisInitialized(i), e)); break }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new y(_assertThisInitialized(i), e, n, r) } return i } return _inherits(t, e), _createClass(t, [{ key: v, value: function() { return this } }, { key: "next", value: function(e) { this.isStopped || this._next(e) } }, { key: "error", value: function(e) { this.isStopped || (this.isStopped = !0, this._error(e)) } }, { key: "complete", value: function() { this.isStopped || (this.isStopped = !0, this._complete()) } }, { key: "unsubscribe", value: function() { this.closed || (this.isStopped = !0, _get(_getPrototypeOf(t.prototype), "unsubscribe", this).call(this)) } }, { key: "_next", value: function(e) { this.destination.next(e) } }, { key: "_error", value: function(e) { this.destination.error(e), this.unsubscribe() } }, { key: "_complete", value: function() { this.destination.complete(), this.unsubscribe() } }, { key: "_unsubscribeAndRecycle", value: function() { var e = this._parent,
                                t = this._parents; return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = t, this } }], [{ key: "create", value: function(e, n, r) { var i = new t(e, n, r); return i.syncErrorThrowable = !1, i } }]), t }(f),
                y = function(e) {
                    function t(e, n, i, o) { var a, s;
                        _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._parentSubscriber = e; var u = _assertThisInitialized(a); return r(n) ? s = n : n && (s = n.next, i = n.error, o = n.complete, n !== l && (r((u = Object.create(n)).unsubscribe) && a.add(u.unsubscribe.bind(u)), u.unsubscribe = a.unsubscribe.bind(_assertThisInitialized(a)))), a._context = u, a._next = s, a._error = i, a._complete = o, a } return _inherits(t, e), _createClass(t, [{ key: "next", value: function(e) { if (!this.isStopped && this._next) { var t = this._parentSubscriber;
                                o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e) } } }, { key: "error", value: function(e) { if (!this.isStopped) { var t = this._parentSubscriber,
                                    n = o.useDeprecatedSynchronousErrorHandling; if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                                else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : a(e), this.unsubscribe();
                                else { if (this.unsubscribe(), n) throw e;
                                    a(e) } } } }, { key: "complete", value: function() { var e = this; if (!this.isStopped) { var t = this._parentSubscriber; if (this._complete) { var n = function() { return e._complete.call(e._context) };
                                    o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe()) } else this.unsubscribe() } } }, { key: "__tryOrUnsub", value: function(e, t) { try { e.call(this._context, t) } catch (n) { if (this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling) throw n;
                                a(n) } } }, { key: "__tryOrSetError", value: function(e, t, n) { if (!o.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { t.call(this._context, n) } catch (r) { return o.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (a(r), !0) } return !1 } }, { key: "_unsubscribe", value: function() { var e = this._parentSubscriber;
                            this._context = null, this._parentSubscriber = null, e.unsubscribe() } }]), t }(g),
                m = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function _() {}

            function k() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return C(t) }

            function C(e) { return e ? 1 === e.length ? e[0] : function(t) { return e.reduce((function(e, t) { return t(e) }), t) } : _ } var w, b = ((w = function() {
                function e(t) { _classCallCheck(this, e), this._isScalar = !1, t && (this._subscribe = t) } return _createClass(e, [{ key: "lift", value: function(t) { var n = new e; return n.source = this, n.operator = t, n } }, { key: "subscribe", value: function(e, t, n) { var r = this.operator,
                            i = function(e, t, n) { if (e) { if (e instanceof g) return e; if (e[v]) return e[v]() } return e || t || n ? new g(e, t, n) : new g(l) }(e, t, n); if (i.add(r ? r.call(i, this.source) : this.source || o.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), o.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue; return i } }, { key: "_trySubscribe", value: function(e) { try { return this._subscribe(e) } catch (t) { o.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                                function(e) { for (; e;) { var t = e,
                                            n = t.closed,
                                            r = t.destination,
                                            i = t.isStopped; if (n || i) return !1;
                                        e = r && r instanceof g ? r : null } return !0 }(e) ? e.error(t) : console.warn(t) } } }, { key: "forEach", value: function(e, t) { var n = this; return new(t = x(t))((function(t, r) { var i;
                            i = n.subscribe((function(t) { try { e(t) } catch (n) { r(n), i && i.unsubscribe() } }), r, t) })) } }, { key: "_subscribe", value: function(e) { var t = this.source; return t && t.subscribe(e) } }, { key: m, value: function() { return this } }, { key: "pipe", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return 0 === t.length ? this : C(t)(this) } }, { key: "toPromise", value: function(e) { var t = this; return new(e = x(e))((function(e, n) { var r;
                            t.subscribe((function(e) { return r = e }), (function(e) { return n(e) }), (function() { return e(r) })) })) } }]), e }()).create = function(e) { return new w(e) }, w);

            function x(e) { if (e || (e = o.Promise || Promise), !e) throw new Error("no Promise impl found"); return e }

            function S() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this }
            S.prototype = Object.create(Error.prototype); var E, T = S,
                P = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).subject = e, r.subscriber = n, r.closed = !1, r } return _inherits(t, e), _createClass(t, [{ key: "unsubscribe", value: function() { if (!this.closed) { this.closed = !0; var e = this.subject,
                                    t = e.observers; if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) { var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1) } } } }]), t }(f),
                O = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).destination = e, n } return _inherits(t, e), t }(g),
                R = ((E = function(e) {
                    function t() { var e; return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e } return _inherits(t, e), _createClass(t, [{ key: v, value: function() { return new O(this) } }, { key: "lift", value: function(e) { var t = new I(this, this); return t.operator = e, t } }, { key: "next", value: function(e) { if (this.closed) throw new T; if (!this.isStopped)
                                for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].next(e) } }, { key: "error", value: function(e) { if (this.closed) throw new T;
                            this.hasError = !0, this.thrownError = e, this.isStopped = !0; for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].error(e);
                            this.observers.length = 0 } }, { key: "complete", value: function() { if (this.closed) throw new T;
                            this.isStopped = !0; for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                            this.observers.length = 0 } }, { key: "unsubscribe", value: function() { this.isStopped = !0, this.closed = !0, this.observers = null } }, { key: "_trySubscribe", value: function(e) { if (this.closed) throw new T; return _get(_getPrototypeOf(t.prototype), "_trySubscribe", this).call(this, e) } }, { key: "_subscribe", value: function(e) { if (this.closed) throw new T; return this.hasError ? (e.error(this.thrownError), f.EMPTY) : this.isStopped ? (e.complete(), f.EMPTY) : (this.observers.push(e), new P(this, e)) } }, { key: "asObservable", value: function() { var e = new b; return e.source = this, e } }]), t }(b)).create = function(e, t) { return new I(e, t) }, E),
                I = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).destination = e, r.source = n, r } return _inherits(t, e), _createClass(t, [{ key: "next", value: function(e) { var t = this.destination;
                            t && t.next && t.next(e) } }, { key: "error", value: function(e) { var t = this.destination;
                            t && t.error && this.destination.error(e) } }, { key: "complete", value: function() { var e = this.destination;
                            e && e.complete && this.destination.complete() } }, { key: "_subscribe", value: function(e) { return this.source ? this.source.subscribe(e) : f.EMPTY } }]), t }(R);

            function A(e) { return e && "function" == typeof e.schedule } var N = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this) } }, { key: "_error", value: function(e) { this.parent.notifyError(e, this), this.unsubscribe() } }, { key: "_complete", value: function() { this.parent.notifyComplete(this), this.unsubscribe() } }]), t }(g),
                M = function(e) { return function(t) { for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                        t.closed || t.complete() } },
                D = function(e) { return function(t) { return e.then((function(e) { t.closed || (t.next(e), t.complete()) }), (function(e) { return t.error(e) })).then(null, a), t } }; var U = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
                L = function(e) { return function(t) { for (var n = e[U]();;) { var r = n.next(); if (r.done) { t.complete(); break } if (t.next(r.value), t.closed) break } return "function" == typeof n.return && t.add((function() { n.return && n.return() })), t } },
                j = function(e) { return function(t) { var n = e[m](); if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return n.subscribe(t) } },
                F = function(e) { return e && "number" == typeof e.length && "function" != typeof e };

            function V(e) { return !!e && "function" != typeof e.subscribe && "function" == typeof e.then } var H = function(e) { if (e instanceof b) return function(t) { return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t) }; if (e && "function" == typeof e[m]) return j(e); if (F(e)) return M(e); if (V(e)) return D(e); if (e && "function" == typeof e[U]) return L(e); var t = u(e) ? "an invalid object" : "'".concat(e, "'"); throw new TypeError("You provided ".concat(t, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.") };

            function z(e, t, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new N(e, n, r); if (!i.closed) return H(t)(i) } var B = function(e) {
                function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }, { key: "notifyError", value: function(e, t) { this.destination.error(e) } }, { key: "notifyComplete", value: function(e) { this.destination.complete() } }]), t }(g);

            function q(e, t) { return function(n) { if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new Z(e, t)) } } var Z = function() {
                    function e(t, n) { _classCallCheck(this, e), this.project = t, this.thisArg = n } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new W(e, this.project, this.thisArg)) } }]), e }(),
                W = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, i.count = 0, i.thisArg = r || _assertThisInitialized(i), i } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { var t; try { t = this.project.call(this.thisArg, e, this.count++) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(t) } }]), t }(g);

            function G(e, t) { return new b(t ? function(n) { var r = new f,
                        i = 0; return r.add(t.schedule((function() { i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete() }))), r } : M(e)) }

            function Q(e, t) { if (!t) return e instanceof b ? e : new b(H(e)); if (null != e) { if (function(e) { return e && "function" == typeof e[m] }(e)) return function(e, t) { return new b(t ? function(n) { var r = new f; return r.add(t.schedule((function() { var i = e[m]();
                                r.add(i.subscribe({ next: function(e) { r.add(t.schedule((function() { return n.next(e) }))) }, error: function(e) { r.add(t.schedule((function() { return n.error(e) }))) }, complete: function() { r.add(t.schedule((function() { return n.complete() }))) } })) }))), r } : j(e)) }(e, t); if (V(e)) return function(e, t) { return new b(t ? function(n) { var r = new f; return r.add(t.schedule((function() { return e.then((function(e) { r.add(t.schedule((function() { n.next(e), r.add(t.schedule((function() { return n.complete() }))) }))) }), (function(e) { r.add(t.schedule((function() { return n.error(e) }))) })) }))), r } : D(e)) }(e, t); if (F(e)) return G(e, t); if (function(e) { return e && "function" == typeof e[U] }(e) || "string" == typeof e) return function(e, t) { if (!e) throw new Error("Iterable cannot be null"); return new b(t ? function(n) { var r, i = new f; return i.add((function() { r && "function" == typeof r.return && r.return() })), i.add(t.schedule((function() { r = e[U](), i.add(t.schedule((function() { if (!n.closed) { var e, t; try { var i = r.next();
                                            e = i.value, t = i.done } catch (o) { return void n.error(o) }
                                        t ? n.complete() : (n.next(e), this.schedule()) } }))) }))), i } : L(e)) }(e, t) } throw new TypeError((null !== e && typeof e || e) + " is not observable") }

            function $(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return "function" == typeof t ? function(r) { return r.pipe($((function(n, r) { return Q(e(n, r)).pipe(q((function(e, i) { return t(n, e, r, i) }))) }), n)) } : ("number" == typeof t && (n = t), function(t) { return t.lift(new K(e, n)) }) } var K = function() {
                    function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
                        _classCallCheck(this, e), this.project = t, this.concurrent = n } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new J(e, this.project, this.concurrent)) } }]), e }(),
                J = function(e) {
                    function t(e, n) { var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, r.concurrent = i, r.hasCompleted = !1, r.buffer = [], r.active = 0, r.index = 0, r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e) } }, { key: "_tryNext", value: function(e) { var t, n = this.index++; try { t = this.project(e, n) } catch (r) { return void this.destination.error(r) }
                            this.active++, this._innerSub(t, e, n) } }, { key: "_innerSub", value: function(e, t, n) { var r = new N(this, void 0, void 0);
                            this.destination.add(r), z(this, e, t, n, r) } }, { key: "_complete", value: function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() } }, { key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }, { key: "notifyComplete", value: function(e) { var t = this.buffer;
                            this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete() } }]), t }(B);

            function Y(e) { return e }

            function X() { return $(Y, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY) }

            function ee() { return function(e) { return e.lift(new te(e)) } } var te = function() {
                    function e(t) { _classCallCheck(this, e), this.connectable = t } return _createClass(e, [{ key: "call", value: function(e, t) { var n = this.connectable;
                            n._refCount++; var r = new ne(e, n),
                                i = t.subscribe(r); return r.closed || (r.connection = n.connect()), i } }]), e }(),
                ne = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).connectable = n, r } return _inherits(t, e), _createClass(t, [{ key: "_unsubscribe", value: function() { var e = this.connectable; if (e) { this.connectable = null; var t = e._refCount; if (t <= 0) this.connection = null;
                                else if (e._refCount = t - 1, t > 1) this.connection = null;
                                else { var n = this.connection,
                                        r = e._connection;
                                    this.connection = null, !r || n && r !== n || r.unsubscribe() } } else this.connection = null } }]), t }(g),
                re = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r } return _inherits(t, e), _createClass(t, [{ key: "_subscribe", value: function(e) { return this.getSubject().subscribe(e) } }, { key: "getSubject", value: function() { var e = this._subject; return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject } }, { key: "connect", value: function() { var e = this._connection; return e || (this._isComplete = !1, (e = this._connection = new f).add(this.source.subscribe(new oe(this.getSubject(), this))), e.closed ? (this._connection = null, e = f.EMPTY) : this._connection = e), e } }, { key: "refCount", value: function() { return ee()(this) } }]), t }(b).prototype,
                ie = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: re._subscribe }, _isComplete: { value: re._isComplete, writable: !0 }, getSubject: { value: re.getSubject }, connect: { value: re.connect }, refCount: { value: re.refCount } },
                oe = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).connectable = n, r } return _inherits(t, e), _createClass(t, [{ key: "_error", value: function(e) { this._unsubscribe(), _get(_getPrototypeOf(t.prototype), "_error", this).call(this, e) } }, { key: "_complete", value: function() { this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(t.prototype), "_complete", this).call(this) } }, { key: "_unsubscribe", value: function() { var e = this.connectable; if (e) { this.connectable = null; var t = e._connection;
                                e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe() } } }]), t }(O);

            function ae() { return new R } var le = "__parameters__";

            function se(e, t, n) { var r = function(e) { return function() { if (e) { var t = e.apply(void 0, arguments); for (var n in t) this[n] = t[n] } } }(t);

                function i() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; if (this instanceof i) return r.apply(this, t), this; var o = _construct(i, t); return a.annotation = o, a;

                    function a(e, t, n) { for (var r = e.hasOwnProperty(le) ? e[le] : Object.defineProperty(e, le, { value: [] })[le]; r.length <= n;) r.push(null); return (r[n] = r[n] || []).push(o), e } } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i } var ue = se("Inject", (function(e) { return { token: e } })),
                ce = se("Optional"),
                he = se("Self"),
                de = se("SkipSelf"),
                fe = function(e) { return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e }({});

            function pe(e) { for (var t in e)
                    if (e[t] === pe) return t;
                throw Error("Could not find renamed property on target object.") }

            function ve(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 } }

            function ge(e) { var t = e[ye]; return t && t.token === e ? t : null } var ye = pe({ ngInjectableDef: pe });

            function me(e) { if ("string" == typeof e) return e; if (e instanceof Array) return "[" + e.map(me).join(", ") + "]"; if (null == e) return "" + e; if (e.overriddenName) return "".concat(e.overriddenName); if (e.name) return "".concat(e.name); var t = e.toString(); if (null == t) return "" + t; var n = t.indexOf("\n"); return -1 === n ? t : t.substring(0, n) } var _e = pe({ __forward_ref__: pe });

            function ke(e) { return e.__forward_ref__ = ke, e.toString = function() { return me(this()) }, e }

            function Ce(e) { var t = e; return "function" == typeof t && t.hasOwnProperty(_e) && t.__forward_ref__ === ke ? t() : e } var we, be = "undefined" != typeof globalThis && globalThis,
                xe = "undefined" != typeof window && window,
                Se = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Ee = "undefined" != typeof global && global,
                Te = be || Ee || xe || Se,
                Pe = function() {
                    function e(t, n) { _classCallCheck(this, e), this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.ngInjectableDef = ve({ token: this, providedIn: n.providedIn || "root", factory: n.factory })) } return _createClass(e, [{ key: "toString", value: function() { return "InjectionToken ".concat(this._desc) } }]), e }(),
                Oe = new Pe("INJECTOR", -1),
                Re = new Object,
                Ie = /\n/gm,
                Ae = "\u0275",
                Ne = "__source",
                Me = pe({ provide: String, useValue: pe }),
                De = void 0;

            function Ue(e) { var t = De; return De = e, t }

            function Le(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe.Default; if (void 0 === De) throw new Error("inject() must be called from an injection context"); return null === De ? function(e, t, n) { var r = ge(e); if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value; if (n & fe.Optional) return null; throw new Error("Injector: NOT_FOUND [".concat(me(e), "]")) }(e, 0, t) : De.get(e, t & fe.Optional ? null : void 0, t) }

            function je(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe.Default; return (we || Le)(e, t) } var Fe = function() {
                function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Re; if (t === Re) { var n = new Error("NullInjectorError: No provider for ".concat(me(e), "!")); throw n.name = "NullInjectorError", n } return t } }]), e }();

            function Ve(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e && "\n" === e.charAt(0) && e.charAt(1) == Ae ? e.substr(2) : e; var i = me(t); if (t instanceof Array) i = t.map(me).join(" -> ");
                else if ("object" == typeof t) { var o = []; for (var a in t)
                        if (t.hasOwnProperty(a)) { var l = t[a];
                            o.push(a + ":" + ("string" == typeof l ? JSON.stringify(l) : me(l))) }
                    i = "{".concat(o.join(", "), "}") } return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(e.replace(Ie, "\n  ")) } var He = function e() { _classCallCheck(this, e) },
                ze = function e() { _classCallCheck(this, e) };

            function Be(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n) }

            function qe(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0] } var Ze = function() { var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 }; return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e }(),
                We = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Te),
                Ge = "ngDebugContext",
                Qe = "ngOriginalError",
                $e = "ngErrorLogger";

            function Ke(e) { return e[Ge] }

            function Je(e) { return e[Qe] }

            function Ye(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                e.error.apply(e, n) } var Xe = function() {
                    function e() { _classCallCheck(this, e), this._console = console } return _createClass(e, [{ key: "handleError", value: function(e) { var t = this._findOriginalError(e),
                                n = this._findContext(e),
                                r = function(e) { return e[$e] || Ye }(e);
                            r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n) } }, { key: "_findContext", value: function(e) { return e ? Ke(e) ? Ke(e) : this._findContext(Je(e)) : null } }, { key: "_findOriginalError", value: function(e) { for (var t = Je(e); t && Je(t);) t = Je(t); return t } }]), e }(),
                et = !0,
                tt = !1;

            function nt() { return tt = !0, et } var rt = function() {
                    function e(t) { if (_classCallCheck(this, e), this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) { var n = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(n), this.inertBodyElement = this.inertDocument.createElement("body"), n.appendChild(this.inertBodyElement) }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (e) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR } return _createClass(e, [{ key: "getInertBodyElement_XHR", value: function(e) { e = "<body><remove></remove>" + e + "</body>"; try { e = encodeURI(e) } catch (r) { return null } var t = new XMLHttpRequest;
                            t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(void 0); var n = t.response.body; return n.removeChild(n.firstChild), n } }, { key: "getInertBodyElement_DOMParser", value: function(e) { e = "<body><remove></remove>" + e + "</body>"; try { var t = (new window.DOMParser).parseFromString(e, "text/html").body; return t.removeChild(t.firstChild), t } catch (n) { return null } } }, { key: "getInertBodyElement_InertDocument", value: function(e) { var t = this.inertDocument.createElement("template"); return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement) } }, { key: "stripCustomNsAttrs", value: function(e) { for (var t = e.attributes, n = t.length - 1; 0 < n; n--) { var r = t.item(n).name; "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r) } for (var i = e.firstChild; i;) i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i), i = i.nextSibling } }]), e }(),
                it = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                ot = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function at(e) { return (e = String(e)).match(it) || e.match(ot) ? e : (nt() && console.warn("WARNING: sanitizing unsafe URL value ".concat(e, " (see http://g.co/ng/security#xss)")), "unsafe:" + e) }

            function lt(e) { var t = {},
                    n = !0,
                    r = !1,
                    i = void 0; try { for (var o, a = e.split(",")[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { t[o.value] = !0 } } catch (l) { r = !0, i = l } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } } return t }

            function st() { for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; for (var i = 0, o = n; i < o.length; i++) { var a = o[i]; for (var l in a) a.hasOwnProperty(l) && (e[l] = !0) } return e } var ut, ct = lt("area,br,col,hr,img,wbr"),
                ht = lt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                dt = lt("rp,rt"),
                ft = st(dt, ht),
                pt = st(ct, st(ht, lt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), st(dt, lt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ft),
                vt = lt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                gt = lt("srcset"),
                yt = st(vt, gt, lt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), lt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                mt = lt("script,style,template"),
                _t = function() {
                    function e() { _classCallCheck(this, e), this.sanitizedSomething = !1, this.buf = [] } return _createClass(e, [{ key: "sanitizeChildren", value: function(e) { for (var t = e.firstChild, n = !0; t;)
                                if (t.nodeType === Node.ELEMENT_NODE ? n = this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, n && t.firstChild) t = t.firstChild;
                                else
                                    for (; t;) { t.nodeType === Node.ELEMENT_NODE && this.endElement(t); var r = this.checkClobberedElement(t, t.nextSibling); if (r) { t = r; break }
                                        t = this.checkClobberedElement(t, t.parentNode) }
                                return this.buf.join("") } }, { key: "startElement", value: function(e) { var t = e.nodeName.toLowerCase(); if (!pt.hasOwnProperty(t)) return this.sanitizedSomething = !0, !mt.hasOwnProperty(t);
                            this.buf.push("<"), this.buf.push(t); for (var n, r = e.attributes, i = 0; i < r.length; i++) { var o = r.item(i),
                                    a = o.name,
                                    l = a.toLowerCase(); if (yt.hasOwnProperty(l)) { var s = o.value;
                                    vt[l] && (s = at(s)), gt[l] && (n = s, s = (n = String(n)).split(",").map((function(e) { return at(e.trim()) })).join(", ")), this.buf.push(" ", a, '="', wt(s), '"') } else this.sanitizedSomething = !0 } return this.buf.push(">"), !0 } }, { key: "endElement", value: function(e) { var t = e.nodeName.toLowerCase();
                            pt.hasOwnProperty(t) && !ct.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">")) } }, { key: "chars", value: function(e) { this.buf.push(wt(e)) } }, { key: "checkClobberedElement", value: function(e, t) { if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: ".concat(e.outerHTML)); return t } }]), e }(),
                kt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Ct = /([^\#-~ |!])/g;

            function wt(e) { return e.replace(/&/g, "&amp;").replace(kt, (function(e) { return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" })).replace(Ct, (function(e) { return "&#" + e.charCodeAt(0) + ";" })).replace(/</g, "&lt;").replace(/>/g, "&gt;") }

            function bt(e) { return "content" in e && function(e) { return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName }(e) ? e.content : null } var xt = function() { var e = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 }; return e[e.NONE] = "NONE", e[e.HTML] = "HTML", e[e.STYLE] = "STYLE", e[e.SCRIPT] = "SCRIPT", e[e.URL] = "URL", e[e.RESOURCE_URL] = "RESOURCE_URL", e }(),
                St = function e() { _classCallCheck(this, e) },
                Et = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                Tt = /^url\(([^)]+)\)$/,
                Pt = /([A-Z])/g;

            function Ot(e) { try { return null != e ? e.toString().slice(0, 30) : e } catch (t) { return "[ERROR] Exception while trying to serialize the value" } } var Rt = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return It() }, e }(),
                It = function() {},
                At = new Pe("The presence of this token marks an injector as being the root injector."),
                Nt = function(e, t, n) { return new Ft(e, t, n) },
                Mt = function() { var e = function() {
                        function e() { _classCallCheck(this, e) } return _createClass(e, null, [{ key: "create", value: function(e, t) { return Array.isArray(e) ? Nt(e, t, "") : Nt(e.providers, e.parent, e.name || "") } }]), e }(); return e.THROW_IF_NOT_FOUND = Re, e.NULL = new Fe, e.ngInjectableDef = ve({ token: e, providedIn: "any", factory: function() { return je(Oe) } }), e.__NG_ELEMENT_ID__ = -1, e }(),
                Dt = function(e) { return e },
                Ut = [],
                Lt = Dt,
                jt = function() { return Array.prototype.slice.call(arguments) },
                Ft = function() {
                    function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mt.NULL,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        _classCallCheck(this, e), this.parent = n, this.source = r; var i = this._records = new Map;
                        i.set(Mt, { token: Mt, fn: Dt, deps: Ut, value: this, useNew: !1 }), i.set(Oe, { token: Oe, fn: Dt, deps: Ut, value: this, useNew: !1 }),
                            function e(t, n) { if (n)
                                    if ((n = Ce(n)) instanceof Array)
                                        for (var r = 0; r < n.length; r++) e(t, n[r]);
                                    else { if ("function" == typeof n) throw Ht("Function/Class not supported", n); if (!n || "object" != typeof n || !n.provide) throw Ht("Unexpected provider", n); var i = Ce(n.provide),
                                            o = function(e) { var t = function(e) { var t = Ut,
                                                            n = e.deps; if (n && n.length) { t = []; for (var r = 0; r < n.length; r++) { var i = 6,
                                                                    o = Ce(n[r]); if (o instanceof Array)
                                                                    for (var a = 0, l = o; a < l.length; a++) { var s = l[a];
                                                                        s instanceof ce || s == ce ? i |= 1 : s instanceof de || s == de ? i &= -3 : s instanceof he || s == he ? i &= -5 : o = s instanceof ue ? s.token : Ce(s) }
                                                                t.push({ token: o, options: i }) } } else if (e.useExisting) t = [{ token: Ce(e.useExisting), options: 6 }];
                                                        else if (!(n || Me in e)) throw Ht("'deps' required", e); return t }(e),
                                                    n = Dt,
                                                    r = Ut,
                                                    i = !1,
                                                    o = Ce(e.provide); if (Me in e) r = e.useValue;
                                                else if (e.useFactory) n = e.useFactory;
                                                else if (e.useExisting);
                                                else if (e.useClass) i = !0, n = Ce(e.useClass);
                                                else { if ("function" != typeof o) throw Ht("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                                                    i = !0, n = o } return { deps: t, fn: n, useNew: i, value: r } }(n); if (!0 === n.multi) { var a = t.get(i); if (a) { if (a.fn !== jt) throw Vt(i) } else t.set(i, a = { token: n.provide, deps: [], useNew: !1, fn: jt, value: Ut });
                                            a.deps.push({ token: i = n, options: 6 }) } var l = t.get(i); if (l && l.fn == jt) throw Vt(i);
                                        t.set(i, o) } }(i, t) } return _createClass(e, [{ key: "get", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe.Default,
                                r = this._records.get(e); try { return function e(t, n, r, i, o, a) { try { return function(t, n, r, i, o, a) { var l; if (!n || a & fe.SkipSelf) a & fe.Self || (l = i.get(t, o, fe.Default));
                                            else { if ((l = n.value) == Lt) throw Error("\u0275Circular dependency"); if (l === Ut) { n.value = Lt; var s = n.useNew,
                                                        u = n.fn,
                                                        c = n.deps,
                                                        h = Ut; if (c.length) { h = []; for (var d = 0; d < c.length; d++) { var f = c[d],
                                                                p = f.options,
                                                                v = 2 & p ? r.get(f.token) : void 0;
                                                            h.push(e(f.token, v, r, v || 4 & p ? i : Mt.NULL, 1 & p ? null : Mt.THROW_IF_NOT_FOUND, fe.Default)) } }
                                                    n.value = l = s ? _construct(u, _toConsumableArray(h)) : u.apply(void 0, h) } } return l }(t, n, r, i, o, a) } catch (l) { throw l instanceof Error || (l = new Error(l)), (l.ngTempTokenPath = l.ngTempTokenPath || []).unshift(t), n && n.value == Lt && (n.value = Ut), l } }(e, r, this._records, this.parent, t, n) } catch (i) { return function(e, t, n, r) { var i = e.ngTempTokenPath; throw t[Ne] && i.unshift(t[Ne]), e.message = Ve("\n" + e.message, i, "StaticInjectorError", r), e.ngTokenPath = i, e.ngTempTokenPath = null, e }(i, e, 0, this.source) } } }, { key: "toString", value: function() { var e = []; return this._records.forEach((function(t, n) { return e.push(me(n)) })), "StaticInjector[".concat(e.join(", "), "]") } }]), e }();

            function Vt(e) { return Ht("Cannot mix multi providers and regular providers", e) }

            function Ht(e, t) { return new Error(Ve(e, t, "StaticInjectorError")) } var zt = new Pe("AnalyzeForEntryComponents"),
                Bt = null;

            function qt() { if (!Bt) { var e = Te.Symbol; if (e && e.iterator) Bt = e.iterator;
                    else
                        for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) { var r = t[n]; "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Bt = r) } } return Bt }

            function Zt(e, t) { return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t) }

            function Wt(e, t) { var n = Qt(e),
                    r = Qt(t); return n && r ? function(e, t, n) { for (var r = e[qt()](), i = t[qt()]();;) { var o = r.next(),
                            a = i.next(); if (o.done && a.done) return !0; if (o.done || a.done) return !1; if (!n(o.value, a.value)) return !1 } }(e, t, Wt) : !(n || !(e && ("object" == typeof e || "function" == typeof e)) || r || !(t && ("object" == typeof t || "function" == typeof t))) || Zt(e, t) } var Gt = function() {
                function e(t) { _classCallCheck(this, e), this.wrapped = t } return _createClass(e, null, [{ key: "wrap", value: function(t) { return new e(t) } }, { key: "unwrap", value: function(t) { return e.isWrapped(t) ? t.wrapped : t } }, { key: "isWrapped", value: function(t) { return t instanceof e } }]), e }();

            function Qt(e) { return !!$t(e) && (Array.isArray(e) || !(e instanceof Map) && qt() in e) }

            function $t(e) { return null !== e && ("function" == typeof e || "object" == typeof e) }

            function Kt(e) { return !!e && "function" == typeof e.then }

            function Jt(e) { return !!e && "function" == typeof e.subscribe } var Yt = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.previousValue = t, this.currentValue = n, this.firstChange = r } return _createClass(e, [{ key: "isFirstChange", value: function() { return this.firstChange } }]), e }(),
                Xt = function e() { _classCallCheck(this, e) },
                en = function e() { _classCallCheck(this, e) };

            function tn(e) { var t = Error("No component factory found for ".concat(me(e), ". Did you add it to @NgModule.entryComponents?")); return t[nn] = e, t } var nn = "ngComponent",
                rn = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "resolveComponentFactory", value: function(e) { throw tn(e) } }]), e }(),
                on = function() { var e = function e() { _classCallCheck(this, e) }; return e.NULL = new rn, e }(),
                an = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this._parent = n, this._ngModule = r, this._factories = new Map; for (var i = 0; i < t.length; i++) { var o = t[i];
                            this._factories.set(o.componentType, o) } } return _createClass(e, [{ key: "resolveComponentFactory", value: function(e) { var t = this._factories.get(e); if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw tn(e); return new ln(t, this._ngModule) } }]), e }(),
                ln = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r } return _inherits(t, e), _createClass(t, [{ key: "create", value: function(e, t, n, r) { return this.factory.create(e, t, n, r || this.ngModule) } }]), t }(en);

            function sn() {} var un = function() { var e = function e(t) { _classCallCheck(this, e), this.nativeElement = t }; return e.__NG_ELEMENT_ID__ = function() { return cn(e) }, e }(),
                cn = sn,
                hn = function e() { _classCallCheck(this, e) },
                dn = function() { var e = { Important: 1, DashCase: 2 }; return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e }(),
                fn = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return pn() }, e }(),
                pn = sn,
                vn = new function e(t) { _classCallCheck(this, e), this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".") }("8.2.14"),
                gn = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "supports", value: function(e) { return Qt(e) } }, { key: "create", value: function(e) { return new mn(e) } }]), e }(),
                yn = function(e, t) { return t },
                mn = function() {
                    function e(t) { _classCallCheck(this, e), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || yn } return _createClass(e, [{ key: "forEachItem", value: function(e) { var t; for (t = this._itHead; null !== t; t = t._next) e(t) } }, { key: "forEachOperation", value: function(e) { for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n;) { var o = !n || t && t.currentIndex < wn(n, r, i) ? t : n,
                                    a = wn(o, r, i),
                                    l = o.currentIndex; if (o === n) r--, n = n._nextRemoved;
                                else if (t = t._next, null == o.previousIndex) r++;
                                else { i || (i = []); var s = a - r,
                                        u = l - r; if (s != u) { for (var c = 0; c < s; c++) { var h = c < i.length ? i[c] : i[c] = 0,
                                                d = h + c;
                                            u <= d && d < s && (i[c] = h + 1) }
                                        i[o.previousIndex] = u - s } }
                                a !== l && e(o, a, l) } } }, { key: "forEachPreviousItem", value: function(e) { var t; for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t) } }, { key: "forEachAddedItem", value: function(e) { var t; for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t) } }, { key: "forEachMovedItem", value: function(e) { var t; for (t = this._movesHead; null !== t; t = t._nextMoved) e(t) } }, { key: "forEachRemovedItem", value: function(e) { var t; for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t) } }, { key: "forEachIdentityChange", value: function(e) { var t; for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t) } }, { key: "diff", value: function(e) { if (null == e && (e = []), !Qt(e)) throw new Error("Error trying to diff '".concat(me(e), "'. Only arrays and iterables are allowed")); return this.check(e) ? this : null } }, { key: "onDestroy", value: function() {} }, { key: "check", value: function(e) { var t = this;
                            this._reset(); var n, r, i, o = this._itHead,
                                a = !1; if (Array.isArray(e)) { this.length = e.length; for (var l = 0; l < this.length; l++) i = this._trackByFn(l, r = e[l]), null !== o && Zt(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, l)), Zt(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, l), a = !0), o = o._next } else n = 0,
                                function(e, t) { if (Array.isArray(e))
                                        for (var n = 0; n < e.length; n++) t(e[n]);
                                    else
                                        for (var r, i = e[qt()](); !(r = i.next()).done;) t(r.value) }(e, (function(e) { i = t._trackByFn(n, e), null !== o && Zt(o.trackById, i) ? (a && (o = t._verifyReinsertion(o, e, i, n)), Zt(o.item, e) || t._addIdentityChange(o, e)) : (o = t._mismatch(o, e, i, n), a = !0), o = o._next, n++ })), this.length = n; return this._truncate(o), this.collection = e, this.isDirty } }, { key: "_reset", value: function() { if (this.isDirty) { var e, t; for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next; for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex; for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null } } }, { key: "_mismatch", value: function(e, t, n, r) { var i; return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Zt(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Zt(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new _n(t, n), i, r), e } }, { key: "_verifyReinsertion", value: function(e, t, n, r) { var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e } }, { key: "_truncate", value: function(e) { for (; null !== e;) { var t = e._next;
                                this._addToRemovals(this._unlink(e)), e = t }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null) } }, { key: "_reinsertAfter", value: function(e, t, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(e); var r = e._prevRemoved,
                                i = e._nextRemoved; return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e } }, { key: "_moveAfter", value: function(e, t, n) { return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e } }, { key: "_addAfter", value: function(e, t, n) { return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e } }, { key: "_insertAfter", value: function(e, t, n) { var r = null === t ? this._itHead : t._next; return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Cn), this._linkedRecords.put(e), e.currentIndex = n, e } }, { key: "_remove", value: function(e) { return this._addToRemovals(this._unlink(e)) } }, { key: "_unlink", value: function(e) { null !== this._linkedRecords && this._linkedRecords.remove(e); var t = e._prev,
                                n = e._next; return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e } }, { key: "_addToMoves", value: function(e, t) { return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e) } }, { key: "_addToRemovals", value: function(e) { return null === this._unlinkedRecords && (this._unlinkedRecords = new Cn), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e } }, { key: "_addIdentityChange", value: function(e, t) { return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e } }, { key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead } }]), e }(),
                _n = function e(t, n) { _classCallCheck(this, e), this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null },
                kn = function() {
                    function e() { _classCallCheck(this, e), this._head = null, this._tail = null } return _createClass(e, [{ key: "add", value: function(e) { null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e) } }, { key: "get", value: function(e, t) { var n; for (n = this._head; null !== n; n = n._nextDup)
                                if ((null === t || t <= n.currentIndex) && Zt(n.trackById, e)) return n;
                            return null } }, { key: "remove", value: function(e) { var t = e._prevDup,
                                n = e._nextDup; return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head } }]), e }(),
                Cn = function() {
                    function e() { _classCallCheck(this, e), this.map = new Map } return _createClass(e, [{ key: "put", value: function(e) { var t = e.trackById,
                                n = this.map.get(t);
                            n || (n = new kn, this.map.set(t, n)), n.add(e) } }, { key: "get", value: function(e, t) { var n = this.map.get(e); return n ? n.get(e, t) : null } }, { key: "remove", value: function(e) { var t = e.trackById; return this.map.get(t).remove(e) && this.map.delete(t), e } }, { key: "clear", value: function() { this.map.clear() } }, { key: "isEmpty", get: function() { return 0 === this.map.size } }]), e }();

            function wn(e, t, n) { var r = e.previousIndex; if (null === r) return r; var i = 0; return n && r < n.length && (i = n[r]), r + t + i } var bn = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "supports", value: function(e) { return e instanceof Map || $t(e) } }, { key: "create", value: function() { return new xn } }]), e }(),
                xn = function() {
                    function e() { _classCallCheck(this, e), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null } return _createClass(e, [{ key: "forEachItem", value: function(e) { var t; for (t = this._mapHead; null !== t; t = t._next) e(t) } }, { key: "forEachPreviousItem", value: function(e) { var t; for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t) } }, { key: "forEachChangedItem", value: function(e) { var t; for (t = this._changesHead; null !== t; t = t._nextChanged) e(t) } }, { key: "forEachAddedItem", value: function(e) { var t; for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t) } }, { key: "forEachRemovedItem", value: function(e) { var t; for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t) } }, { key: "diff", value: function(e) { if (e) { if (!(e instanceof Map || $t(e))) throw new Error("Error trying to diff '".concat(me(e), "'. Only maps and objects are allowed")) } else e = new Map; return this.check(e) ? this : null } }, { key: "onDestroy", value: function() {} }, { key: "check", value: function(e) { var t = this;
                            this._reset(); var n = this._mapHead; if (this._appendAfter = null, this._forEach(e, (function(e, r) { if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next;
                                    else { var i = t._getOrCreateRecordForKey(r, e);
                                        n = t._insertBeforeOrAppend(n, i) } })), n) { n._prev && (n._prev._next = null), this._removalsHead = n; for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty } }, { key: "_insertBeforeOrAppend", value: function(e, t) { if (e) { var n = e._prev; return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e } return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null } }, { key: "_getOrCreateRecordForKey", value: function(e, t) { if (this._records.has(e)) { var n = this._records.get(e);
                                this._maybeAddToChanges(n, t); var r = n._prev,
                                    i = n._next; return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n } var o = new Sn(e); return this._records.set(e, o), o.currentValue = t, this._addToAdditions(o), o } }, { key: "_reset", value: function() { if (this.isDirty) { var e; for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next; for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue; for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null } } }, { key: "_maybeAddToChanges", value: function(e, t) { Zt(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e)) } }, { key: "_addToAdditions", value: function(e) { null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e) } }, { key: "_addToChanges", value: function(e) { null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e) } }, { key: "_forEach", value: function(e, t) { e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((function(n) { return t(e[n], n) })) } }, { key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead } }]), e }(),
                Sn = function e(t) { _classCallCheck(this, e), this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null },
                En = function() { var e = function() {
                        function e(t) { _classCallCheck(this, e), this.factories = t } return _createClass(e, [{ key: "find", value: function(e) { var t, n = this.factories.find((function(t) { return t.supports(e) })); if (null != n) return n; throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'")) } }], [{ key: "create", value: function(t, n) { if (null != n) { var r = n.factories.slice();
                                    t = t.concat(r) } return new e(t) } }, { key: "extend", value: function(t) { return { provide: e, useFactory: function(n) { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return e.create(t, n) }, deps: [
                                        [e, new de, new ce]
                                    ] } } }]), e }(); return e.ngInjectableDef = ve({ token: e, providedIn: "root", factory: function() { return new e([new gn]) } }), e }(),
                Tn = function() { var e = function() {
                        function e(t) { _classCallCheck(this, e), this.factories = t } return _createClass(e, [{ key: "find", value: function(e) { var t = this.factories.find((function(t) { return t.supports(e) })); if (t) return t; throw new Error("Cannot find a differ supporting object '".concat(e, "'")) } }], [{ key: "create", value: function(t, n) { if (n) { var r = n.factories.slice();
                                    t = t.concat(r) } return new e(t) } }, { key: "extend", value: function(t) { return { provide: e, useFactory: function(n) { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return e.create(t, n) }, deps: [
                                        [e, new de, new ce]
                                    ] } } }]), e }(); return e.ngInjectableDef = ve({ token: e, providedIn: "root", factory: function() { return new e([new bn]) } }), e }(),
                Pn = [new bn],
                On = new En([new gn]),
                Rn = new Tn(Pn),
                In = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return An(e, un) }, e }(),
                An = sn,
                Nn = function() { var e = function e() { _classCallCheck(this, e) }; return e.__NG_ELEMENT_ID__ = function() { return Mn(e, un) }, e }(),
                Mn = sn;

            function Dn(e, t, n, r) { var i = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '".concat(t, "'. Current value: '").concat(n, "'."); return r && (i += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(e, t) { var n = new Error(e); return Un(n, t), n }(i, e) }

            function Un(e, t) { e[Ge] = t, e[$e] = t.logError.bind(t) }

            function Ln(e) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: ".concat(e)) }

            function jn(e, t, n) { var r = e.state,
                    i = 1792 & r; return i === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : i === n }

            function Fn(e, t, n) { return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0) }

            function Vn(e, t) { return e.nodes[t] }

            function Hn(e, t) { return e.nodes[t] }

            function zn(e, t) { return e.nodes[t] }

            function Bn(e, t) { return e.nodes[t] }

            function qn(e, t) { return e.nodes[t] } var Zn = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 },
                Wn = function() {},
                Gn = new Map;

            function Qn(e) { var t = Gn.get(e); return t || (t = me(e) + "_" + Gn.size, Gn.set(e, t)), t } var $n = "$$undefined",
                Kn = "$$empty";

            function Jn(e) { return { id: $n, styles: e.styles, encapsulation: e.encapsulation, data: e.data } } var Yn = 0;

            function Xn(e, t, n, r) { return !(!(2 & e.state) && Zt(e.oldValues[t.bindingIndex + n], r)) }

            function er(e, t, n, r) { return !!Xn(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0) }

            function tr(e, t, n, r) { var i = e.oldValues[t.bindingIndex + n]; if (1 & e.state || !Wt(i, r)) { var o = t.bindings[n].name; throw Dn(Zn.createDebugContext(e, t.nodeIndex), "".concat(o, ": ").concat(i), "".concat(o, ": ").concat(r), 0 != (1 & e.state)) } }

            function nr(e) { for (var t = e; t;) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent }

            function rr(e, t) { for (var n = e; n && n !== t;) n.state |= 64, n = n.viewContainerParent || n.parent }

            function ir(e, t, n, r) { try { return nr(33554432 & e.def.nodes[t].flags ? Hn(e, t).componentView : e), Zn.handleEvent(e, t, n, r) } catch (i) { e.root.errorHandler.handleError(i) } }

            function or(e) { return e.parent ? Hn(e.parent, e.parentNodeDef.nodeIndex) : null }

            function ar(e) { return e.parent ? e.parentNodeDef.parent : null }

            function lr(e, t) { switch (201347067 & t.flags) {
                    case 1:
                        return Hn(e, t.nodeIndex).renderElement;
                    case 2:
                        return Vn(e, t.nodeIndex).renderText } }

            function sr(e) { return !!e.parent && !!(32768 & e.parentNodeDef.flags) }

            function ur(e) { return !(!e.parent || 32768 & e.parentNodeDef.flags) }

            function cr(e) { return 1 << e % 32 }

            function hr(e) { var t = {},
                    n = 0,
                    r = {}; return e && e.forEach((function(e) { var i = _slicedToArray(e, 2),
                        o = i[0],
                        a = i[1]; "number" == typeof o ? (t[o] = a, n |= cr(o)) : r[o] = a })), { matchedQueries: t, references: r, matchedQueryIds: n } }

            function dr(e, t) { return e.map((function(e) { var n, r, i; return Array.isArray(e) ? (i = (n = _slicedToArray(e, 2))[0], r = n[1]) : (i = 0, r = e), r && ("function" == typeof r || "object" == typeof r) && t && Object.defineProperty(r, Ne, { value: t, configurable: !0 }), { flags: i, token: r, tokenKey: Qn(r) } })) }

            function fr(e, t, n) { var r = n.renderParent; return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Ze.Native ? Hn(e, n.renderParent.nodeIndex).renderElement : void 0 : t } var pr = new WeakMap;

            function vr(e) { var t = pr.get(e); return t || ((t = e((function() { return Wn }))).factory = e, pr.set(e, t)), t }

            function gr(e, t, n, r, i) { 3 === t && (n = e.renderer.parentNode(lr(e, e.def.lastRenderRootNode))), yr(e, t, 0, e.def.nodes.length - 1, n, r, i) }

            function yr(e, t, n, r, i, o, a) { for (var l = n; l <= r; l++) { var s = e.def.nodes[l];
                    11 & s.flags && _r(e, s, t, i, o, a), l += s.childCount } }

            function mr(e, t, n, r, i, o) { for (var a = e; a && !sr(a);) a = a.parent; for (var l = a.parent, s = ar(a), u = s.nodeIndex + s.childCount, c = s.nodeIndex + 1; c <= u; c++) { var h = l.def.nodes[c];
                    h.ngContentIndex === t && _r(l, h, n, r, i, o), c += h.childCount } if (!l.parent) { var d = e.root.projectableNodes[t]; if (d)
                        for (var f = 0; f < d.length; f++) kr(e, d[f], n, r, i, o) } }

            function _r(e, t, n, r, i, o) { if (8 & t.flags) mr(e, t.ngContent.index, n, r, i, o);
                else { var a = lr(e, t); if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && kr(e, a, n, r, i, o), 32 & t.bindingFlags && kr(Hn(e, t.nodeIndex).componentView, a, n, r, i, o)) : kr(e, a, n, r, i, o), 16777216 & t.flags)
                        for (var l = Hn(e, t.nodeIndex).viewContainer._embeddedViews, s = 0; s < l.length; s++) gr(l[s], n, r, i, o);
                    1 & t.flags && !t.element.name && yr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, o) } }

            function kr(e, t, n, r, i, o) { var a = e.renderer; switch (n) {
                    case 1:
                        a.appendChild(r, t); break;
                    case 2:
                        a.insertBefore(r, t, i); break;
                    case 3:
                        a.removeChild(r, t); break;
                    case 0:
                        o.push(t) } } var Cr = /^:([^:]+):(.+)$/;

            function wr(e) { if (":" === e[0]) { var t = e.match(Cr); return [t[1], t[2]] } return ["", e] }

            function br(e) { for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags; return t }

            function xr(e, t, n, r, i, o, a, l, s, u, c, h, d, f, p, v, g, y, m, _) { switch (e) {
                    case 1:
                        return t + Sr(n) + r;
                    case 2:
                        return t + Sr(n) + r + Sr(i) + o;
                    case 3:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l;
                    case 4:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u;
                    case 5:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u + Sr(c) + h;
                    case 6:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u + Sr(c) + h + Sr(d) + f;
                    case 7:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u + Sr(c) + h + Sr(d) + f + Sr(p) + v;
                    case 8:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u + Sr(c) + h + Sr(d) + f + Sr(p) + v + Sr(g) + y;
                    case 9:
                        return t + Sr(n) + r + Sr(i) + o + Sr(a) + l + Sr(s) + u + Sr(c) + h + Sr(d) + f + Sr(p) + v + Sr(g) + y + Sr(m) + _;
                    default:
                        throw new Error("Does not support more than 9 expressions") } }

            function Sr(e) { return null != e ? e.toString() : "" } var Er = new Object,
                Tr = Qn(Mt),
                Pr = Qn(Oe),
                Or = Qn(He);

            function Rr(e, t, n, r) { return n = Ce(n), { index: -1, deps: dr(r, me(t)), flags: e, token: t, value: n } }

            function Ir(e, t) { var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mt.THROW_IF_NOT_FOUND,
                    o = Ue(e); try { if (8 & t.flags) return t.token; if (2 & t.flags && (i = null), 1 & t.flags) return e._parent.get(t.token, i); var a = t.tokenKey; switch (a) {
                        case Tr:
                        case Pr:
                        case Or:
                            return e } var l, s = e._def.providersByKey[a]; if (s) { var u = e._providers[s.index]; return void 0 === u && (u = e._providers[s.index] = Ar(e, s)), u === Er ? void 0 : u } if ((l = ge(t.token)) && (n = e, null != (r = l).providedIn && (function(e, t) { return e._def.modules.indexOf(t) > -1 }(n, r.providedIn) || "root" === r.providedIn && n._def.isRoot))) { var c = e._providers.length; return e._def.providers[c] = e._def.providersByKey[t.tokenKey] = { flags: 5120, value: l.factory, deps: [], index: c, token: t.token }, e._providers[c] = Er, e._providers[c] = Ar(e, e._def.providersByKey[t.tokenKey]) } return 4 & t.flags ? i : e._parent.get(t.token, i) } finally { Ue(o) } }

            function Ar(e, t) { var n; switch (201347067 & t.flags) {
                    case 512:
                        n = function(e, t, n) { var r = n.length; switch (r) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(Ir(e, n[0]));
                                case 2:
                                    return new t(Ir(e, n[0]), Ir(e, n[1]));
                                case 3:
                                    return new t(Ir(e, n[0]), Ir(e, n[1]), Ir(e, n[2]));
                                default:
                                    for (var i = new Array(r), o = 0; o < r; o++) i[o] = Ir(e, n[o]); return _construct(t, i) } }(e, t.value, t.deps); break;
                    case 1024:
                        n = function(e, t, n) { var r = n.length; switch (r) {
                                case 0:
                                    return t();
                                case 1:
                                    return t(Ir(e, n[0]));
                                case 2:
                                    return t(Ir(e, n[0]), Ir(e, n[1]));
                                case 3:
                                    return t(Ir(e, n[0]), Ir(e, n[1]), Ir(e, n[2]));
                                default:
                                    for (var i = Array(r), o = 0; o < r; o++) i[o] = Ir(e, n[o]); return t.apply(void 0, i) } }(e, t.value, t.deps); break;
                    case 2048:
                        n = Ir(e, t.deps[0]); break;
                    case 256:
                        n = t.value } return n === Er || null === n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), void 0 === n ? Er : n }

            function Nr(e, t) { var n = e.viewContainer._embeddedViews; if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null; var r = n[t]; return r.viewContainerParent = null, qe(n, t), Zn.dirtyParentQueries(r), Dr(r), r }

            function Mr(e, t, n) { var r = t ? lr(t, t.def.lastRenderRootNode) : e.renderElement,
                    i = n.renderer.parentNode(r),
                    o = n.renderer.nextSibling(r);
                gr(n, 2, i, o, void 0) }

            function Dr(e) { gr(e, 3, null, null, void 0) } var Ur = new Object;

            function Lr(e, t, n, r, i, o) { return new jr(e, t, n, r, i, o) } var jr = function(e) {
                    function t(e, n, r, i, o, a) { var l; return _classCallCheck(this, t), (l = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).selector = e, l.componentType = n, l._inputs = i, l._outputs = o, l.ngContentSelectors = a, l.viewDefFactory = r, l } return _inherits(t, e), _createClass(t, [{ key: "create", value: function(e, t, n, r) { if (!r) throw new Error("ngModule should be provided"); var i = vr(this.viewDefFactory),
                                o = i.nodes[0].element.componentProvider.nodeIndex,
                                a = Zn.createRootView(e, t || [], n, i, r, Ur),
                                l = zn(a, o).instance; return n && a.renderer.setAttribute(Hn(a, 0).renderElement, "ng-version", vn.full), new Fr(a, new Br(a), l) } }, { key: "inputs", get: function() { var e = [],
                                t = this._inputs; for (var n in t) e.push({ propName: n, templateName: t[n] }); return e } }, { key: "outputs", get: function() { var e = []; for (var t in this._outputs) e.push({ propName: t, templateName: this._outputs[t] }); return e } }]), t }(en),
                Fr = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._view = e, i._viewRef = n, i._component = r, i._elDef = i._view.def.nodes[0], i.hostView = n, i.changeDetectorRef = n, i.instance = r, i } return _inherits(t, e), _createClass(t, [{ key: "destroy", value: function() { this._viewRef.destroy() } }, { key: "onDestroy", value: function(e) { this._viewRef.onDestroy(e) } }, { key: "location", get: function() { return new un(Hn(this._view, this._elDef.nodeIndex).renderElement) } }, { key: "injector", get: function() { return new Gr(this._view, this._elDef) } }, { key: "componentType", get: function() { return this._component.constructor } }]), t }(Xt);

            function Vr(e, t, n) { return new Hr(e, t, n) } var Hr = function() {
                function e(t, n, r) { _classCallCheck(this, e), this._view = t, this._elDef = n, this._data = r, this._embeddedViews = [] } return _createClass(e, [{ key: "clear", value: function() { for (var e = this._embeddedViews.length - 1; e >= 0; e--) { var t = Nr(this._data, e);
                            Zn.destroyView(t) } } }, { key: "get", value: function(e) { var t = this._embeddedViews[e]; if (t) { var n = new Br(t); return n.attachToViewContainerRef(this), n } return null } }, { key: "createEmbeddedView", value: function(e, t, n) { var r = e.createEmbeddedView(t || {}); return this.insert(r, n), r } }, { key: "createComponent", value: function(e, t, n, r, i) { var o = n || this.parentInjector;
                        i || e instanceof ln || (i = o.get(He)); var a = e.create(o, r, void 0, i); return this.insert(a.hostView, t), a } }, { key: "insert", value: function(e, t) { if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!"); var n, r, i, o, a, l = e; return n = this._view, r = this._data, i = t, o = l._view, a = r.viewContainer._embeddedViews, null == i && (i = a.length), o.viewContainerParent = n, Be(a, i, o),
                            function(e, t) { var n = or(t); if (n && n !== e && !(16 & t.state)) { t.state |= 16; var r = n.template._projectedViews;
                                    r || (r = n.template._projectedViews = []), r.push(t),
                                        function(e, t) { if (!(4 & t.flags)) { e.nodeFlags |= 4, t.flags |= 4; for (var n = t.parent; n;) n.childFlags |= 4, n = n.parent } }(t.parent.def, t.parentNodeDef) } }(r, o), Zn.dirtyParentQueries(o), Mr(r, i > 0 ? a[i - 1] : null, o), l.attachToViewContainerRef(this), e } }, { key: "move", value: function(e, t) { if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); var n, r, i, o, a, l = this._embeddedViews.indexOf(e._view); return n = this._data, r = l, i = t, o = n.viewContainer._embeddedViews, a = o[r], qe(o, r), null == i && (i = o.length), Be(o, i, a), Zn.dirtyParentQueries(a), Dr(a), Mr(n, i > 0 ? o[i - 1] : null, a), e } }, { key: "indexOf", value: function(e) { return this._embeddedViews.indexOf(e._view) } }, { key: "remove", value: function(e) { var t = Nr(this._data, e);
                        t && Zn.destroyView(t) } }, { key: "detach", value: function(e) { var t = Nr(this._data, e); return t ? new Br(t) : null } }, { key: "element", get: function() { return new un(this._data.renderElement) } }, { key: "injector", get: function() { return new Gr(this._view, this._elDef) } }, { key: "parentInjector", get: function() { for (var e = this._view, t = this._elDef.parent; !t && e;) t = ar(e), e = e.parent; return e ? new Gr(e, t) : new Gr(this._view, null) } }, { key: "length", get: function() { return this._embeddedViews.length } }]), e }();

            function zr(e) { return new Br(e) } var Br = function() {
                function e(t) { _classCallCheck(this, e), this._view = t, this._viewContainerRef = null, this._appRef = null } return _createClass(e, [{ key: "markForCheck", value: function() { nr(this._view) } }, { key: "detach", value: function() { this._view.state &= -5 } }, { key: "detectChanges", value: function() { var e = this._view.root.rendererFactory;
                        e.begin && e.begin(); try { Zn.checkAndUpdateView(this._view) } finally { e.end && e.end() } } }, { key: "checkNoChanges", value: function() { Zn.checkNoChangesView(this._view) } }, { key: "reattach", value: function() { this._view.state |= 4 } }, { key: "onDestroy", value: function(e) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e) } }, { key: "destroy", value: function() { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Zn.destroyView(this._view) } }, { key: "detachFromAppRef", value: function() { this._appRef = null, Dr(this._view), Zn.dirtyParentQueries(this._view) } }, { key: "attachToAppRef", value: function(e) { if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = e } }, { key: "attachToViewContainerRef", value: function(e) { if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = e } }, { key: "rootNodes", get: function() { return gr(this._view, 0, void 0, void 0, e = []), e; var e } }, { key: "context", get: function() { return this._view.context } }, { key: "destroyed", get: function() { return 0 != (128 & this._view.state) } }]), e }();

            function qr(e, t) { return new Zr(e, t) } var Zr = function(e) {
                function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._parentView = e, r._def = n, r } return _inherits(t, e), _createClass(t, [{ key: "createEmbeddedView", value: function(e) { return new Br(Zn.createEmbeddedView(this._parentView, this._def, this._def.element.template, e)) } }, { key: "elementRef", get: function() { return new un(Hn(this._parentView, this._def.nodeIndex).renderElement) } }]), t }(In);

            function Wr(e, t) { return new Gr(e, t) } var Gr = function() {
                function e(t, n) { _classCallCheck(this, e), this.view = t, this.elDef = n } return _createClass(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mt.THROW_IF_NOT_FOUND; return Zn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: e, tokenKey: Qn(e) }, t) } }]), e }();

            function Qr(e, t) { var n = e.def.nodes[t]; if (1 & n.flags) { var r = Hn(e, n.nodeIndex); return n.element.template ? r.template : r.renderElement } if (2 & n.flags) return Vn(e, n.nodeIndex).renderText; if (20240 & n.flags) return zn(e, n.nodeIndex).instance; throw new Error("Illegal state: read nodeValue for node index ".concat(t)) }

            function $r(e) { return new Kr(e.renderer) } var Kr = function() {
                function e(t) { _classCallCheck(this, e), this.delegate = t } return _createClass(e, [{ key: "selectRootElement", value: function(e) { return this.delegate.selectRootElement(e) } }, { key: "createElement", value: function(e, t) { var n = _slicedToArray(wr(t), 2),
                            r = n[0],
                            i = n[1],
                            o = this.delegate.createElement(i, r); return e && this.delegate.appendChild(e, o), o } }, { key: "createViewRoot", value: function(e) { return e } }, { key: "createTemplateAnchor", value: function(e) { var t = this.delegate.createComment(""); return e && this.delegate.appendChild(e, t), t } }, { key: "createText", value: function(e, t) { var n = this.delegate.createText(t); return e && this.delegate.appendChild(e, n), n } }, { key: "projectNodes", value: function(e, t) { for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]) } }, { key: "attachViewAfter", value: function(e, t) { for (var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), i = 0; i < t.length; i++) this.delegate.insertBefore(n, t[i], r) } }, { key: "detachView", value: function(e) { for (var t = 0; t < e.length; t++) { var n = e[t],
                                r = this.delegate.parentNode(n);
                            this.delegate.removeChild(r, n) } } }, { key: "destroyView", value: function(e, t) { for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]) } }, { key: "listen", value: function(e, t, n) { return this.delegate.listen(e, t, n) } }, { key: "listenGlobal", value: function(e, t, n) { return this.delegate.listen(e, t, n) } }, { key: "setElementProperty", value: function(e, t, n) { this.delegate.setProperty(e, t, n) } }, { key: "setElementAttribute", value: function(e, t, n) { var r = _slicedToArray(wr(t), 2),
                            i = r[0],
                            o = r[1];
                        null != n ? this.delegate.setAttribute(e, o, n, i) : this.delegate.removeAttribute(e, o, i) } }, { key: "setBindingDebugInfo", value: function(e, t, n) {} }, { key: "setElementClass", value: function(e, t, n) { n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t) } }, { key: "setElementStyle", value: function(e, t, n) { null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t) } }, { key: "invokeElementMethod", value: function(e, t, n) { e[t].apply(e, n) } }, { key: "setText", value: function(e, t) { this.delegate.setValue(e, t) } }, { key: "animate", value: function() { throw new Error("Renderer.animate is no longer supported!") } }]), e }();

            function Jr(e, t, n, r) { return new Yr(e, t, n, r) } var Yr = function() {
                    function e(t, n, r, i) { _classCallCheck(this, e), this._moduleType = t, this._parent = n, this._bootstrapComponents = r, this._def = i, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(e) { for (var t = e._def, n = e._providers = new Array(t.providers.length), r = 0; r < t.providers.length; r++) { var i = t.providers[r];
                                    4096 & i.flags || void 0 === n[r] && (n[r] = Ar(e, i)) } }(this) } return _createClass(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mt.THROW_IF_NOT_FOUND,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe.Default,
                                r = 0; return n & fe.SkipSelf ? r |= 1 : n & fe.Self && (r |= 4), Ir(this, { token: e, tokenKey: Qn(e), flags: r }, t) } }, { key: "destroy", value: function() { if (this._destroyed) throw new Error("The ng module ".concat(me(this.instance.constructor), " has already been destroyed."));
                            this._destroyed = !0,
                                function(e, t) { for (var n = e._def, r = new Set, i = 0; i < n.providers.length; i++)
                                        if (131072 & n.providers[i].flags) { var o = e._providers[i]; if (o && o !== Er) { var a = o.ngOnDestroy; "function" != typeof a || r.has(o) || (a.apply(o), r.add(o)) } } }(this), this._destroyListeners.forEach((function(e) { return e() })) } }, { key: "onDestroy", value: function(e) { this._destroyListeners.push(e) } }, { key: "instance", get: function() { return this.get(this._moduleType) } }, { key: "componentFactoryResolver", get: function() { return this.get(on) } }]), e }(),
                Xr = Qn((function e() { _classCallCheck(this, e) })),
                ei = Qn(fn),
                ti = Qn(un),
                ni = Qn(Nn),
                ri = Qn(In),
                ii = Qn(Rt),
                oi = Qn(Mt),
                ai = Qn(Oe);

            function li(e, t, n, r, i, o, a, l) { var s = []; if (a)
                    for (var u in a) { var c = _slicedToArray(a[u], 2),
                            h = c[0],
                            d = c[1];
                        s[h] = { flags: 8, name: u, nonMinifiedName: d, ns: null, securityContext: null, suffix: null } }
                var f = []; if (l)
                    for (var p in l) f.push({ type: 1, propName: p, target: null, eventName: l[p] }); return ui(e, t |= 16384, n, r, i, i, o, s, f) }

            function si(e, t, n, r, i) { return ui(-1, e, t, 0, n, r, i) }

            function ui(e, t, n, r, i, o, a, l, s) { var u = hr(n),
                    c = u.matchedQueries,
                    h = u.references,
                    d = u.matchedQueryIds;
                s || (s = []), l || (l = []), o = Ce(o); var f = dr(a, me(i)); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: d, references: h, ngContentIndex: -1, childCount: r, bindings: l, bindingFlags: br(l), outputs: s, element: null, provider: { token: i, value: o, deps: f }, text: null, query: null, ngContent: null } }

            function ci(e, t) { return pi(e, t) }

            function hi(e, t) { for (var n = e; n.parent && !sr(n);) n = n.parent; return vi(n.parent, ar(n), !0, t.provider.value, t.provider.deps) }

            function di(e, t) { var n = vi(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps); if (t.outputs.length)
                    for (var r = 0; r < t.outputs.length; r++) { var i = t.outputs[r],
                            o = n[i.propName]; if (!Jt(o)) throw new Error("@Output ".concat(i.propName, " not initialized in '").concat(n.constructor.name, "'.")); var a = o.subscribe(fi(e, t.parent.nodeIndex, i.eventName));
                        e.disposables[t.outputIndex + r] = a.unsubscribe.bind(a) }
                return n }

            function fi(e, t, n) { return function(r) { return ir(e, t, n, r) } }

            function pi(e, t) { var n = (8192 & t.flags) > 0,
                    r = t.provider; switch (201347067 & t.flags) {
                    case 512:
                        return vi(e, t.parent, n, r.value, r.deps);
                    case 1024:
                        return function(e, t, n, r, i) { var o = i.length; switch (o) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(yi(e, t, n, i[0]));
                                case 2:
                                    return r(yi(e, t, n, i[0]), yi(e, t, n, i[1]));
                                case 3:
                                    return r(yi(e, t, n, i[0]), yi(e, t, n, i[1]), yi(e, t, n, i[2]));
                                default:
                                    for (var a = Array(o), l = 0; l < o; l++) a[l] = yi(e, t, n, i[l]); return r.apply(void 0, a) } }(e, t.parent, n, r.value, r.deps);
                    case 2048:
                        return yi(e, t.parent, n, r.deps[0]);
                    case 256:
                        return r.value } }

            function vi(e, t, n, r, i) { var o = i.length; switch (o) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(yi(e, t, n, i[0]));
                    case 2:
                        return new r(yi(e, t, n, i[0]), yi(e, t, n, i[1]));
                    case 3:
                        return new r(yi(e, t, n, i[0]), yi(e, t, n, i[1]), yi(e, t, n, i[2]));
                    default:
                        for (var a = new Array(o), l = 0; l < o; l++) a[l] = yi(e, t, n, i[l]); return _construct(r, a) } } var gi = {};

            function yi(e, t, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Mt.THROW_IF_NOT_FOUND; if (8 & r.flags) return r.token; var o = e;
                2 & r.flags && (i = null); var a = r.tokenKey;
                a === ii && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, t = t.parent); for (var l = e; l;) { if (t) switch (a) {
                        case Xr:
                            return $r(mi(l, t, n));
                        case ei:
                            return mi(l, t, n).renderer;
                        case ti:
                            return new un(Hn(l, t.nodeIndex).renderElement);
                        case ni:
                            return Hn(l, t.nodeIndex).viewContainer;
                        case ri:
                            if (t.element.template) return Hn(l, t.nodeIndex).template; break;
                        case ii:
                            return zr(mi(l, t, n));
                        case oi:
                        case ai:
                            return Wr(l, t);
                        default:
                            var s = (n ? t.element.allProviders : t.element.publicProviders)[a]; if (s) { var u = zn(l, s.nodeIndex); return u || (u = { instance: pi(l, s) }, l.nodes[s.nodeIndex] = u), u.instance } }
                    n = sr(l), t = ar(l), l = l.parent, 4 & r.flags && (l = null) } var c = o.root.injector.get(r.token, gi); return c !== gi || i === gi ? c : o.root.ngModule.injector.get(r.token, i) }

            function mi(e, t, n) { var r; if (n) r = Hn(e, t.nodeIndex).componentView;
                else
                    for (r = e; r.parent && !sr(r);) r = r.parent; return r }

            function _i(e, t, n, r, i, o) { if (32768 & n.flags) { var a = Hn(e, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8) } if (t.instance[n.bindings[r].name] = i, 524288 & n.flags) { o = o || {}; var l = Gt.unwrap(e.oldValues[n.bindingIndex + r]);
                    o[n.bindings[r].nonMinifiedName] = new Yt(l, i, 0 != (2 & e.state)) } return e.oldValues[n.bindingIndex + r] = i, o }

            function ki(e, t) { if (e.def.nodeFlags & t)
                    for (var n = e.def.nodes, r = 0, i = 0; i < n.length; i++) { var o = n[i],
                            a = o.parent; for (!a && o.flags & t && wi(e, i, o.flags & t, r++), 0 == (o.childFlags & t) && (i += o.childCount); a && 1 & a.flags && i === a.nodeIndex + a.childCount;) a.directChildFlags & t && (r = Ci(e, a, t, r)), a = a.parent } }

            function Ci(e, t, n, r) { for (var i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) { var o = e.def.nodes[i];
                    o.flags & n && wi(e, i, o.flags & n, r++), i += o.childCount } return r }

            function wi(e, t, n, r) { var i = zn(e, t); if (i) { var o = i.instance;
                    o && (Zn.setCurrentNode(e, t), 1048576 & n && Fn(e, 512, r) && o.ngAfterContentInit(), 2097152 & n && o.ngAfterContentChecked(), 4194304 & n && Fn(e, 768, r) && o.ngAfterViewInit(), 8388608 & n && o.ngAfterViewChecked(), 131072 & n && o.ngOnDestroy()) } } var bi = new Pe("SCHEDULER_TOKEN", { providedIn: "root", factory: function() { return We } }),
                xi = {},
                Si = function() { var e = { LocaleId: 0, DayPeriodsFormat: 1, DayPeriodsStandalone: 2, DaysFormat: 3, DaysStandalone: 4, MonthsFormat: 5, MonthsStandalone: 6, Eras: 7, FirstDayOfWeek: 8, WeekendRange: 9, DateFormat: 10, TimeFormat: 11, DateTimeFormat: 12, NumberSymbols: 13, NumberFormats: 14, CurrencySymbol: 15, CurrencyName: 16, Currencies: 17, PluralCase: 18, ExtraData: 19 }; return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e }(),
                Ei = void 0,
                Ti = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], Ei
                    ],
                    [
                        ["AM", "PM"], Ei, Ei
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], Ei, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], Ei, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", Ei, "{1} 'at' {0}", Ei],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(e) { var t = Math.floor(Math.abs(e)),
                            n = e.toString().replace(/^[^.]*\.?/, "").length; return 1 === t && 0 === n ? 1 : 5 }
                ],
                Pi = "en-US";

            function Oi(e) { null == e && function(e) { throw new Error("ASSERTION ERROR: ".concat("Expected localeId to be defined")) }(), "string" == typeof e && e.toLowerCase().replace(/_/g, "-") } var Ri = function(e) {
                function t() { var e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).__isAsync = n, e } return _inherits(t, e), _createClass(t, [{ key: "emit", value: function(e) { _get(_getPrototypeOf(t.prototype), "next", this).call(this, e) } }, { key: "subscribe", value: function(e, n, r) { var i, o = function(e) { return null },
                            a = function() { return null };
                        e && "object" == typeof e ? (i = this.__isAsync ? function(t) { setTimeout((function() { return e.next(t) })) } : function(t) { e.next(t) }, e.error && (o = this.__isAsync ? function(t) { setTimeout((function() { return e.error(t) })) } : function(t) { e.error(t) }), e.complete && (a = this.__isAsync ? function() { setTimeout((function() { return e.complete() })) } : function() { e.complete() })) : (i = this.__isAsync ? function(t) { setTimeout((function() { return e(t) })) } : function(t) { e(t) }, n && (o = this.__isAsync ? function(e) { setTimeout((function() { return n(e) })) } : function(e) { n(e) }), r && (a = this.__isAsync ? function() { setTimeout((function() { return r() })) } : function() { r() })); var l = _get(_getPrototypeOf(t.prototype), "subscribe", this).call(this, i, o, a); return e instanceof f && e.add(l), l } }]), t }(R);

            function Ii() { return this._results[qt()]() } var Ai = function() {
                    function e() { _classCallCheck(this, e), this.dirty = !0, this._results = [], this.changes = new Ri, this.length = 0; var t = qt(),
                            n = e.prototype;
                        n[t] || (n[t] = Ii) } return _createClass(e, [{ key: "map", value: function(e) { return this._results.map(e) } }, { key: "filter", value: function(e) { return this._results.filter(e) } }, { key: "find", value: function(e) { return this._results.find(e) } }, { key: "reduce", value: function(e, t) { return this._results.reduce(e, t) } }, { key: "forEach", value: function(e) { this._results.forEach(e) } }, { key: "some", value: function(e) { return this._results.some(e) } }, { key: "toArray", value: function() { return this._results.slice() } }, { key: "toString", value: function() { return this._results.toString() } }, { key: "reset", value: function(e) { this._results = function e(t, n) { void 0 === n && (n = t); for (var r = 0; r < t.length; r++) { var i = t[r];
                                    Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i) } return n }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] } }, { key: "notifyOnChanges", value: function() { this.changes.emit(this) } }, { key: "setDirty", value: function() { this.dirty = !0 } }, { key: "destroy", value: function() { this.changes.complete(), this.changes.unsubscribe() } }]), e }(),
                Ni = new Pe("Application Initializer"),
                Mi = function() {
                    function e(t) { var n = this;
                        _classCallCheck(this, e), this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function(e, t) { n.resolve = e, n.reject = t })) } return _createClass(e, [{ key: "runInitializers", value: function() { var e = this; if (!this.initialized) { var t = [],
                                    n = function() { e.done = !0, e.resolve() }; if (this.appInits)
                                    for (var r = 0; r < this.appInits.length; r++) { var i = this.appInits[r]();
                                        Kt(i) && t.push(i) }
                                Promise.all(t).then((function() { n() })).catch((function(t) { e.reject(t) })), 0 === t.length && n(), this.initialized = !0 } } }]), e }(),
                Di = new Pe("AppId");

            function Ui() { return "".concat(Li()).concat(Li()).concat(Li()) }

            function Li() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) } var ji = new Pe("Platform Initializer"),
                Fi = new Pe("Platform ID"),
                Vi = new Pe("appBootstrapListener"),
                Hi = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "log", value: function(e) { console.log(e) } }, { key: "warn", value: function(e) { console.warn(e) } }]), e }(),
                zi = new Pe("LocaleId"),
                Bi = !1;

            function qi() { throw new Error("Runtime compiler is not loaded") } var Zi, Wi, Gi = qi,
                Qi = qi,
                $i = qi,
                Ki = qi,
                Ji = function() {
                    function e() { _classCallCheck(this, e), this.compileModuleSync = Gi, this.compileModuleAsync = Qi, this.compileModuleAndAllComponentsSync = $i, this.compileModuleAndAllComponentsAsync = Ki } return _createClass(e, [{ key: "clearCache", value: function() {} }, { key: "clearCacheFor", value: function(e) {} }, { key: "getModuleId", value: function(e) {} }]), e }(),
                Yi = function e() { _classCallCheck(this, e) }; var Xi, eo = !(!(Xi = Te.wtf) || !(Zi = Xi.trace) || (Wi = Zi.events, 0));

            function to(e, t) { return null } var no = eo ? function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return Wi.createScope(e, t) } : function(e, t) { return to },
                ro = eo ? function(e, t) { return Zi.leaveScope(e, t), t } : function(e, t) { return t },
                io = Promise.resolve(0);

            function oo(e) { "undefined" == typeof Zone ? io.then((function() { e && e.apply(null, null) })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e) } var ao = function() {
                function e(t) { var n, r = t.enableLongStackTrace,
                        i = void 0 !== r && r; if (_classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ri(!1), this.onMicrotaskEmpty = new Ri(!1), this.onStable = new Ri(!1), this.onError = new Ri(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), i && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (n = this)._inner = n._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function(e, t, r, i, o, a) { try { return co(n), e.invokeTask(r, i, o, a) } finally { ho(n) } }, onInvoke: function(e, t, r, i, o, a, l) { try { return co(n), e.invoke(r, i, o, a, l) } finally { ho(n) } }, onHasTask: function(e, t, r, i) { e.hasTask(r, i), t === r && ("microTask" == i.change ? (n.hasPendingMicrotasks = i.microTask, uo(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask)) }, onHandleError: function(e, t, r, i) { return e.handleError(r, i), n.runOutsideAngular((function() { return n.onError.emit(i) })), !1 } }) } return _createClass(e, [{ key: "run", value: function(e, t, n) { return this._inner.run(e, t, n) } }, { key: "runTask", value: function(e, t, n, r) { var i = this._inner,
                            o = i.scheduleEventTask("NgZoneEvent: " + r, e, so, lo, lo); try { return i.runTask(o, t, n) } finally { i.cancelTask(o) } } }, { key: "runGuarded", value: function(e, t, n) { return this._inner.runGuarded(e, t, n) } }, { key: "runOutsideAngular", value: function(e) { return this._outer.run(e) } }], [{ key: "isInAngularZone", value: function() { return !0 === Zone.current.get("isAngularZone") } }, { key: "assertInAngularZone", value: function() { if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") } }, { key: "assertNotInAngularZone", value: function() { if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") } }]), e }();

            function lo() {} var so = {};

            function uo(e) { if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try { e._nesting++, e.onMicrotaskEmpty.emit(null) } finally { if (e._nesting--, !e.hasPendingMicrotasks) try { e.runOutsideAngular((function() { return e.onStable.emit(null) })) } finally { e.isStable = !0 } } }

            function co(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)) }

            function ho(e) { e._nesting--, uo(e) } var fo, po = function() {
                    function e() { _classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ri, this.onMicrotaskEmpty = new Ri, this.onStable = new Ri, this.onError = new Ri } return _createClass(e, [{ key: "run", value: function(e) { return e() } }, { key: "runGuarded", value: function(e) { return e() } }, { key: "runOutsideAngular", value: function(e) { return e() } }, { key: "runTask", value: function(e) { return e() } }]), e }(),
                vo = function() {
                    function e(t) { var n = this;
                        _classCallCheck(this, e), this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function() { n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone") })) } return _createClass(e, [{ key: "_watchAngularEvents", value: function() { var e = this;
                            this._ngZone.onUnstable.subscribe({ next: function() { e._didWork = !0, e._isZoneStable = !1 } }), this._ngZone.runOutsideAngular((function() { e._ngZone.onStable.subscribe({ next: function() { ao.assertNotInAngularZone(), oo((function() { e._isZoneStable = !0, e._runCallbacksIfReady() })) } }) })) } }, { key: "increasePendingRequestCount", value: function() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount } }, { key: "decreasePendingRequestCount", value: function() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount } }, { key: "isStable", value: function() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks } }, { key: "_runCallbacksIfReady", value: function() { var e = this; if (this.isStable()) oo((function() { for (; 0 !== e._callbacks.length;) { var t = e._callbacks.pop();
                                    clearTimeout(t.timeoutId), t.doneCb(e._didWork) }
                                e._didWork = !1 }));
                            else { var t = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter((function(e) { return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1) })), this._didWork = !0 } } }, { key: "getPendingTasks", value: function() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function(e) { return { source: e.source, creationLocation: e.creationLocation, data: e.data } })) : [] } }, { key: "addCallback", value: function(e, t, n) { var r = this,
                                i = -1;
                            t && t > 0 && (i = setTimeout((function() { r._callbacks = r._callbacks.filter((function(e) { return e.timeoutId !== i })), e(r._didWork, r.getPendingTasks()) }), t)), this._callbacks.push({ doneCb: e, timeoutId: i, updateCb: n }) } }, { key: "whenStable", value: function(e, t, n) { if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(e, t, n), this._runCallbacksIfReady() } }, { key: "getPendingRequestCount", value: function() { return this._pendingCount } }, { key: "findProviders", value: function(e, t, n) { return [] } }]), e }(),
                go = function() {
                    function e() { _classCallCheck(this, e), this._applications = new Map, yo.addToWindow(this) } return _createClass(e, [{ key: "registerApplication", value: function(e, t) { this._applications.set(e, t) } }, { key: "unregisterApplication", value: function(e) { this._applications.delete(e) } }, { key: "unregisterAllApplications", value: function() { this._applications.clear() } }, { key: "getTestability", value: function(e) { return this._applications.get(e) || null } }, { key: "getAllTestabilities", value: function() { return Array.from(this._applications.values()) } }, { key: "getAllRootElements", value: function() { return Array.from(this._applications.keys()) } }, { key: "findTestabilityInTree", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return yo.findTestabilityInTree(this, e, t) } }]), e }(),
                yo = new(function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "addToWindow", value: function(e) {} }, { key: "findTestabilityInTree", value: function(e, t, n) { return null } }]), e }()),
                mo = function(e, t, n) { return e.get(Yi).createCompiler([t]).compileModuleAsync(n) },
                _o = new Pe("AllowMultipleToken"),
                ko = function e(t, n) { _classCallCheck(this, e), this.name = t, this.token = n };

            function Co(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = "Platform: ".concat(t),
                    i = new Pe(r); return function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        o = wo(); if (!o || o.injector.get(_o, !1))
                        if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
                        else { var a = n.concat(t).concat({ provide: i, useValue: !0 });! function(e) { if (fo && !fo.destroyed && !fo.injector.get(_o, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                fo = e.get(bo); var t = e.get(ji, null);
                                t && t.forEach((function(e) { return e() })) }(Mt.create({ providers: a, name: r })) }
                    return function(e) { var t = wo(); if (!t) throw new Error("No platform exists!"); if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return t }(i) } }

            function wo() { return fo && !fo.destroyed ? fo : null } var bo = function() {
                function e(t) { _classCallCheck(this, e), this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 } return _createClass(e, [{ key: "bootstrapModuleFactory", value: function(e, t) { var n, r = this,
                            i = "noop" === (n = t ? t.ngZone : void 0) ? new po : ("zone.js" === n ? void 0 : n) || new ao({ enableLongStackTrace: nt() }),
                            o = [{ provide: ao, useValue: i }]; return i.run((function() { var t = Mt.create({ providers: o, parent: r.injector, name: e.moduleType.name }),
                                n = e.create(t),
                                a = n.injector.get(Xe, null); if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return Bi && Oi(n.injector.get(zi, Pi) || Pi), n.onDestroy((function() { return To(r._modules, n) })), i.runOutsideAngular((function() { return i.onError.subscribe({ next: function(e) { a.handleError(e) } }) })),
                                function(e, t, i) { try { var o = ((a = n.injector.get(Mi)).runInitializers(), a.donePromise.then((function() { return r._moduleDoBootstrap(n), n }))); return Kt(o) ? o.catch((function(n) { throw t.runOutsideAngular((function() { return e.handleError(n) })), n })) : o } catch (l) { throw t.runOutsideAngular((function() { return e.handleError(l) })), l } var a }(a, i) })) } }, { key: "bootstrapModule", value: function(e) { var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = xo({}, n); return mo(this.injector, r, e).then((function(e) { return t.bootstrapModuleFactory(e, r) })) } }, { key: "_moduleDoBootstrap", value: function(e) { var t = e.injector.get(Eo); if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((function(e) { return t.bootstrap(e) }));
                        else { if (!e.instance.ngDoBootstrap) throw new Error("The module ".concat(me(e.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ') + "Please define one of these.");
                            e.instance.ngDoBootstrap(t) }
                        this._modules.push(e) } }, { key: "onDestroy", value: function(e) { this._destroyListeners.push(e) } }, { key: "destroy", value: function() { if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach((function(e) { return e.destroy() })), this._destroyListeners.forEach((function(e) { return e() })), this._destroyed = !0 } }, { key: "injector", get: function() { return this._injector } }, { key: "destroyed", get: function() { return this._destroyed } }]), e }();

            function xo(e, t) { return Array.isArray(t) ? t.reduce(xo, e) : Object.assign({}, e, t) } var So, Eo = ((So = function() {
                function e(t, n, r, i, o, a) { var l = this;
                    _classCallCheck(this, e), this._zone = t, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = o, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = nt(), this._zone.onMicrotaskEmpty.subscribe({ next: function() { l._zone.run((function() { l.tick() })) } }); var s = new b((function(e) { l._stable = l._zone.isStable && !l._zone.hasPendingMacrotasks && !l._zone.hasPendingMicrotasks, l._zone.runOutsideAngular((function() { e.next(l._stable), e.complete() })) })),
                        u = new b((function(e) { var t;
                            l._zone.runOutsideAngular((function() { t = l._zone.onStable.subscribe((function() { ao.assertNotInAngularZone(), oo((function() { l._stable || l._zone.hasPendingMacrotasks || l._zone.hasPendingMicrotasks || (l._stable = !0, e.next(!0)) })) })) })); var n = l._zone.onUnstable.subscribe((function() { ao.assertInAngularZone(), l._stable && (l._stable = !1, l._zone.runOutsideAngular((function() { e.next(!1) }))) })); return function() { t.unsubscribe(), n.unsubscribe() } }));
                    this.isStable = function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var r = Number.POSITIVE_INFINITY,
                            i = null,
                            o = t[t.length - 1]; return A(o) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof o && (r = t.pop()), null === i && 1 === t.length && t[0] instanceof b ? t[0] : X(r)(G(t, i)) }(s, u.pipe((function(e) { return ee()((t = ae, function(e) { var n;
                            n = "function" == typeof t ? t : function() { return t }; var r = Object.create(e, ie); return r.source = e, r.subjectFactory = n, r })(e)); var t }))) } return _createClass(e, [{ key: "bootstrap", value: function(e, t) { var n, r = this; if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        n = e instanceof en ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType); var i = n instanceof ln ? null : this._injector.get(He),
                            o = n.create(Mt.NULL, [], t || n.selector, i);
                        o.onDestroy((function() { r._unloadComponent(o) })); var a = o.injector.get(vo, null); return a && o.injector.get(go).registerApplication(o.location.nativeElement, a), this._loadComponent(o), nt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), o } }, { key: "tick", value: function() { var t = this; if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); var n = e._tickScope(); try { this._runningTick = !0; var r = !0,
                                i = !1,
                                o = void 0; try { for (var a, l = this._views[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) a.value.detectChanges() } catch (f) { i = !0, o = f } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } } if (this._enforceNoNewChanges) { var s = !0,
                                    u = !1,
                                    c = void 0; try { for (var h, d = this._views[Symbol.iterator](); !(s = (h = d.next()).done); s = !0) h.value.checkNoChanges() } catch (f) { u = !0, c = f } finally { try { s || null == d.return || d.return() } finally { if (u) throw c } } } } catch (p) { this._zone.runOutsideAngular((function() { return t._exceptionHandler.handleError(p) })) } finally { this._runningTick = !1, ro(n) } } }, { key: "attachView", value: function(e) { var t = e;
                        this._views.push(t), t.attachToAppRef(this) } }, { key: "detachView", value: function(e) { var t = e;
                        To(this._views, t), t.detachFromAppRef() } }, { key: "_loadComponent", value: function(e) { this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Vi, []).concat(this._bootstrapListeners).forEach((function(t) { return t(e) })) } }, { key: "_unloadComponent", value: function(e) { this.detachView(e.hostView), To(this.components, e) } }, { key: "ngOnDestroy", value: function() { this._views.slice().forEach((function(e) { return e.destroy() })) } }, { key: "viewCount", get: function() { return this._views.length } }]), e }())._tickScope = no("ApplicationRef#tick()"), So);

            function To(e, t) { var n = e.indexOf(t);
                n > -1 && e.splice(n, 1) } var Po = function e() { _classCallCheck(this, e) },
                Oo = function e() { _classCallCheck(this, e) },
                Ro = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
                Io = function() {
                    function e(t, n) { _classCallCheck(this, e), this._compiler = t, this._config = n || Ro } return _createClass(e, [{ key: "load", value: function(e) { return !Bi && this._compiler instanceof Ji ? this.loadFactory(e) : this.loadAndCompile(e) } }, { key: "loadAndCompile", value: function(e) { var t = this,
                                r = _slicedToArray(e.split("#"), 2),
                                i = r[0],
                                o = r[1]; return void 0 === o && (o = "default"), n("zn8P")(i).then((function(e) { return e[o] })).then((function(e) { return Ao(e, i, o) })).then((function(e) { return t._compiler.compileModuleAsync(e) })) } }, { key: "loadFactory", value: function(e) { var t = _slicedToArray(e.split("#"), 2),
                                r = t[0],
                                i = t[1],
                                o = "NgFactory"; return void 0 === i && (i = "default", o = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function(e) { return e[i + o] })).then((function(e) { return Ao(e, r, i) })) } }]), e }();

            function Ao(e, t, n) { if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'")); return e } var No = function e(t, n) { _classCallCheck(this, e), this.name = t, this.callback = n },
                Mo = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.listeners = [], this.parent = null, this._debugContext = r, this.nativeNode = t, n && n instanceof Do && n.addChild(this) } return _createClass(e, [{ key: "injector", get: function() { return this._debugContext.injector } }, { key: "componentInstance", get: function() { return this._debugContext.component } }, { key: "context", get: function() { return this._debugContext.context } }, { key: "references", get: function() { return this._debugContext.references } }, { key: "providerTokens", get: function() { return this._debugContext.providerTokens } }]), e }(),
                Do = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n, r))).properties = {}, i.attributes = {}, i.classes = {}, i.styles = {}, i.childNodes = [], i.nativeElement = e, i } return _inherits(t, e), _createClass(t, [{ key: "addChild", value: function(e) { e && (this.childNodes.push(e), e.parent = this) } }, { key: "removeChild", value: function(e) { var t = this.childNodes.indexOf(e); - 1 !== t && (e.parent = null, this.childNodes.splice(t, 1)) } }, { key: "insertChildrenAfter", value: function(e, t) { var n, r = this,
                                i = this.childNodes.indexOf(e); - 1 !== i && ((n = this.childNodes).splice.apply(n, [i + 1, 0].concat(_toConsumableArray(t))), t.forEach((function(t) { t.parent && t.parent.removeChild(t), e.parent = r }))) } }, { key: "insertBefore", value: function(e, t) { var n = this.childNodes.indexOf(e); - 1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, this.childNodes.splice(n, 0, t)) } }, { key: "query", value: function(e) { return this.queryAll(e)[0] || null } }, { key: "queryAll", value: function(e) { var n = []; return function e(n, r, i) { n.childNodes.forEach((function(n) { n instanceof t && (r(n) && i.push(n), e(n, r, i)) })) }(this, e, n), n } }, { key: "queryAllNodes", value: function(e) { var n = []; return function e(n, r, i) { n instanceof t && n.childNodes.forEach((function(n) { r(n) && i.push(n), n instanceof t && e(n, r, i) })) }(this, e, n), n } }, { key: "triggerEventHandler", value: function(e, t) { this.listeners.forEach((function(n) { n.name == e && n.callback(t) })) } }, { key: "children", get: function() { return this.childNodes.filter((function(e) { return e instanceof t })) } }]), t }(Mo),
                Uo = new Map,
                Lo = function(e) { return Uo.get(e) || null };

            function jo(e) { Uo.set(e.nativeNode, e) } var Fo = Co(null, "core", [{ provide: Fi, useValue: "unknown" }, { provide: bo, deps: [Mt] }, { provide: go, deps: [] }, { provide: Hi, deps: [] }]);

            function Vo() { return On }

            function Ho() { return Rn }

            function zo(e) { return e ? (Bi && Oi(e), e) : Pi }

            function Bo(e) { var t = []; return e.onStable.subscribe((function() { for (; t.length;) t.pop()() })),
                    function(e) { t.push(e) } } var qo = function e(t) { _classCallCheck(this, e) };

            function Zo(e, t, n, r, i, o) { e |= 1; var a = hr(t),
                    l = a.matchedQueries,
                    s = a.references; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: e, checkIndex: -1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: l, matchedQueryIds: a.matchedQueryIds, references: s, ngContentIndex: n, childCount: r, bindings: [], bindingFlags: 0, outputs: [], element: { ns: null, name: null, attrs: null, template: o ? vr(o) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: i || Wn }, provider: null, text: null, query: null, ngContent: null } }

            function Wo(e, t, n, r, i, o) { var a, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [],
                    s = arguments.length > 7 ? arguments[7] : void 0,
                    u = arguments.length > 8 ? arguments[8] : void 0,
                    c = arguments.length > 9 ? arguments[9] : void 0,
                    h = arguments.length > 10 ? arguments[10] : void 0,
                    d = arguments.length > 11 ? arguments[11] : void 0;
                c || (c = Wn); var f = hr(n),
                    p = f.matchedQueries,
                    v = f.references,
                    g = f.matchedQueryIds,
                    y = null,
                    m = null;
                o && (y = (a = _slicedToArray(wr(o), 2))[0], m = a[1]), s = s || []; for (var _ = new Array(s.length), k = 0; k < s.length; k++) { var C = _slicedToArray(s[k], 3),
                        w = C[0],
                        b = C[1],
                        x = C[2],
                        S = _slicedToArray(wr(b), 2),
                        E = S[0],
                        T = S[1],
                        P = void 0,
                        O = void 0; switch (15 & w) {
                        case 4:
                            O = x; break;
                        case 1:
                        case 8:
                            P = x }
                    _[k] = { flags: w, ns: E, name: T, nonMinifiedName: T, securityContext: P, suffix: O } }
                u = u || []; for (var R = new Array(u.length), I = 0; I < u.length; I++) { var A = _slicedToArray(u[I], 2),
                        N = A[0],
                        M = A[1];
                    R[I] = { type: 0, target: N, eventName: M, propName: null } } var D = (l = l || []).map((function(e) { var t = _slicedToArray(e, 2),
                        n = t[0],
                        r = t[1],
                        i = _slicedToArray(wr(n), 2); return [i[0], i[1], r] })); return d = function(e) { if (e && e.id === $n) { var t = null != e.encapsulation && e.encapsulation !== Ze.None || e.styles.length || Object.keys(e.data).length;
                        e.id = t ? "c".concat(Yn++) : Kn } return e && e.id === Kn && (e = null), e || null }(d), h && (t |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: p, matchedQueryIds: g, references: v, ngContentIndex: r, childCount: i, bindings: _, bindingFlags: br(_), outputs: R, element: { ns: y, name: m, attrs: D, template: null, componentProvider: null, componentView: h || null, componentRendererType: d, publicProviders: null, allProviders: null, handleEvent: c || Wn }, provider: null, text: null, query: null, ngContent: null } }

            function Go(e, t, n) { var r, i = n.element,
                    o = e.root.selectorOrNode,
                    a = e.renderer; if (e.parent || !o) { r = i.name ? a.createElement(i.name, i.ns) : a.createComment(""); var l = fr(e, t, n);
                    l && a.appendChild(l, r) } else r = a.selectRootElement(o, !!i.componentRendererType && i.componentRendererType.encapsulation === Ze.ShadowDom); if (i.attrs)
                    for (var s = 0; s < i.attrs.length; s++) { var u = _slicedToArray(i.attrs[s], 3),
                            c = u[0],
                            h = u[1],
                            d = u[2];
                        a.setAttribute(r, h, d, c) }
                return r }

            function Qo(e, t, n, r) { for (var i = 0; i < n.outputs.length; i++) { var o = n.outputs[i],
                        a = $o(e, n.nodeIndex, (h = o.eventName, (c = o.target) ? "".concat(c, ":").concat(h) : h)),
                        l = o.target,
                        s = e; "component" === o.target && (l = null, s = t); var u = s.renderer.listen(l || r, o.eventName, a);
                    e.disposables[n.outputIndex + i] = u } var c, h }

            function $o(e, t, n) { return function(r) { return ir(e, t, n, r) } }

            function Ko(e, t, n, r) { if (!er(e, t, n, r)) return !1; var i = t.bindings[n],
                    o = Hn(e, t.nodeIndex),
                    a = o.renderElement,
                    l = i.name; switch (15 & i.flags) {
                    case 1:
                        ! function(e, t, n, r, i, o) { var a = t.securityContext,
                                l = a ? e.root.sanitizer.sanitize(a, o) : o;
                            l = null != l ? l.toString() : null; var s = e.renderer;
                            null != o ? s.setAttribute(n, i, l, r) : s.removeAttribute(n, i, r) }(e, i, a, i.ns, l, r); break;
                    case 2:
                        ! function(e, t, n, r) { var i = e.renderer;
                            r ? i.addClass(t, n) : i.removeClass(t, n) }(e, a, l, r); break;
                    case 4:
                        ! function(e, t, n, r, i) { var o = e.root.sanitizer.sanitize(xt.STYLE, i); if (null != o) { o = o.toString(); var a = t.suffix;
                                null != a && (o += a) } else o = null; var l = e.renderer;
                            null != o ? l.setStyle(n, r, o) : l.removeStyle(n, r) }(e, i, a, l, r); break;
                    case 8:
                        ! function(e, t, n, r, i) { var o = t.securityContext,
                                a = o ? e.root.sanitizer.sanitize(o, i) : i;
                            e.renderer.setProperty(n, r, a) }(33554432 & t.flags && 32 & i.flags ? o.componentView : e, i, a, l, r) } return !0 }

            function Jo(e, t, n) { var r = []; for (var i in n) r.push({ propName: i, bindingType: n[i] }); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: -1, flags: e, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, ngContentIndex: -1, matchedQueries: {}, matchedQueryIds: 0, references: {}, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: { id: t, filterId: cr(t), bindings: r }, ngContent: null } }

            function Yo(e) { for (var t = e.def.nodeMatchedQueries; e.parent && ur(e);) { var n = e.parentNodeDef;
                    e = e.parent; for (var r = n.nodeIndex + n.childCount, i = 0; i <= r; i++) { var o = e.def.nodes[i];
                        67108864 & o.flags && 536870912 & o.flags && (o.query.filterId & t) === o.query.filterId && qn(e, i).setDirty(), !(1 & o.flags && i + o.childCount < n.nodeIndex) && 67108864 & o.childFlags && 536870912 & o.childFlags || (i += o.childCount) } } if (134217728 & e.def.nodeFlags)
                    for (var a = 0; a < e.def.nodes.length; a++) { var l = e.def.nodes[a];
                        134217728 & l.flags && 536870912 & l.flags && qn(e, a).setDirty(), a += l.childCount } }

            function Xo(e, t) { var n = qn(e, t.nodeIndex); if (n.dirty) { var r, i = void 0; if (67108864 & t.flags) { var o = t.parent.parent;
                        i = ea(e, o.nodeIndex, o.nodeIndex + o.childCount, t.query, []), r = zn(e, t.parent.nodeIndex).instance } else 134217728 & t.flags && (i = ea(e, 0, e.def.nodes.length - 1, t.query, []), r = e.component);
                    n.reset(i); for (var a = t.query.bindings, l = !1, s = 0; s < a.length; s++) { var u = a[s],
                            c = void 0; switch (u.bindingType) {
                            case 0:
                                c = n.first; break;
                            case 1:
                                c = n, l = !0 }
                        r[u.propName] = c }
                    l && n.notifyOnChanges() } }

            function ea(e, t, n, r, i) { for (var o = t; o <= n; o++) { var a = e.def.nodes[o],
                        l = a.matchedQueries[r.id]; if (null != l && i.push(ta(e, a, l)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) { var s = Hn(e, o); if ((a.childMatchedQueries & r.filterId) === r.filterId && (ea(e, o + 1, o + a.childCount, r, i), o += a.childCount), 16777216 & a.flags)
                            for (var u = s.viewContainer._embeddedViews, c = 0; c < u.length; c++) { var h = u[c],
                                    d = or(h);
                                d && d === s && ea(h, 0, h.def.nodes.length - 1, r, i) }
                        var f = s.template._projectedViews; if (f)
                            for (var p = 0; p < f.length; p++) { var v = f[p];
                                ea(v, 0, v.def.nodes.length - 1, r, i) } }(a.childMatchedQueries & r.filterId) !== r.filterId && (o += a.childCount) } return i }

            function ta(e, t, n) { if (null != n) switch (n) {
                    case 1:
                        return Hn(e, t.nodeIndex).renderElement;
                    case 0:
                        return new un(Hn(e, t.nodeIndex).renderElement);
                    case 2:
                        return Hn(e, t.nodeIndex).template;
                    case 3:
                        return Hn(e, t.nodeIndex).viewContainer;
                    case 4:
                        return zn(e, t.nodeIndex).instance } }

            function na(e, t, n) { var r = fr(e, t, n);
                r && mr(e, n.ngContent.index, 1, r, null, void 0) }

            function ra(e, t) { for (var n = Object.keys(t), r = n.length, i = new Array(r), o = 0; o < r; o++) { var a = n[o];
                    i[t[a]] = a } return function(e, t, n) { for (var r = new Array(n.length), i = 0; i < n.length; i++) { var o = n[i];
                        r[i] = { flags: 8, name: o, ns: null, nonMinifiedName: o, securityContext: null, suffix: null } } return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: 64, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: r, bindingFlags: br(r), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null } }(0, e, i) }

            function ia(e, t, n) { for (var r = new Array(n.length - 1), i = 1; i < n.length; i++) r[i - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[i] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: t, childCount: 0, bindings: r, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: n[0] }, query: null, ngContent: null } }

            function oa(e, t, n) { var r, i = e.renderer;
                r = i.createText(n.text.prefix); var o = fr(e, t, n); return o && i.appendChild(o, r), { renderText: r } }

            function aa(e, t) { return (null != e ? e.toString() : "") + t.suffix }

            function la(e, t, n, r) { for (var i = 0, o = 0, a = 0, l = 0, s = 0, u = null, c = null, h = !1, d = !1, f = null, p = 0; p < t.length; p++) { var v = t[p]; if (v.nodeIndex = p, v.parent = u, v.bindingIndex = i, v.outputIndex = o, v.renderParent = c, a |= v.flags, s |= v.matchedQueryIds, v.element) { var g = v.element;
                        g.publicProviders = u ? u.element.publicProviders : Object.create(null), g.allProviders = g.publicProviders, h = !1, d = !1, v.element.template && (s |= v.element.template.nodeMatchedQueries) } if (ua(u, v, t.length), i += v.bindings.length, o += v.outputs.length, !c && 3 & v.flags && (f = v), 20224 & v.flags) { h || (h = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders); var y = 0 != (32768 & v.flags);
                        0 == (8192 & v.flags) || y ? u.element.publicProviders[Qn(v.provider.token)] = v : (d || (d = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Qn(v.provider.token)] = v), y && (u.element.componentProvider = v) } if (u ? (u.childFlags |= v.flags, u.directChildFlags |= v.flags, u.childMatchedQueries |= v.matchedQueryIds, v.element && v.element.template && (u.childMatchedQueries |= v.element.template.nodeMatchedQueries)) : l |= v.flags, v.childCount > 0) u = v, sa(v) || (c = v);
                    else
                        for (; u && p === u.nodeIndex + u.childCount;) { var m = u.parent;
                            m && (m.childFlags |= u.childFlags, m.childMatchedQueries |= u.childMatchedQueries), c = (u = m) && sa(u) ? u.renderParent : u } } return { factory: null, nodeFlags: a, rootNodeFlags: l, nodeMatchedQueries: s, flags: e, nodes: t, updateDirectives: n || Wn, updateRenderer: r || Wn, handleEvent: function(e, n, r, i) { return t[n].element.handleEvent(e, r, i) }, bindingCount: i, outputCount: o, lastRenderRootNode: f } }

            function sa(e) { return 0 != (1 & e.flags) && null === e.element.name }

            function ua(e, t, n) { var r = t.element && t.element.template; if (r) { if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!"); if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index ".concat(t.nodeIndex, "!")) } if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ".concat(t.nodeIndex, "!")); if (t.query) { if (67108864 & t.flags && (!e || 0 == (16384 & e.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index ".concat(t.nodeIndex, "!")); if (134217728 & t.flags && e) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index ".concat(t.nodeIndex, "!")) } if (t.childCount) { var i = e ? e.nodeIndex + e.childCount : n - 1; if (t.nodeIndex <= i && t.nodeIndex + t.childCount > i) throw new Error("Illegal State: childCount of node leads outside of parent, at index ".concat(t.nodeIndex, "!")) } }

            function ca(e, t, n, r) { var i = fa(e.root, e.renderer, e, t, n); return pa(i, e.component, r), va(i), i }

            function ha(e, t, n) { var r = fa(e, e.renderer, null, null, t); return pa(r, n, n), va(r), r }

            function da(e, t, n, r) { var i, o = t.element.componentRendererType; return i = o ? e.root.rendererFactory.createRenderer(r, o) : e.root.renderer, fa(e.root, i, e, t.element.componentProvider, n) }

            function fa(e, t, n, r, i) { var o = new Array(i.nodes.length),
                    a = i.outputCount ? new Array(i.outputCount) : null; return { def: i, parent: n, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: o, state: 13, root: e, renderer: t, oldValues: new Array(i.bindingCount), disposables: a, initIndex: -1 } }

            function pa(e, t, n) { e.component = t, e.context = n }

            function va(e) { var t;
                sr(e) && (t = Hn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement); for (var n = e.def, r = e.nodes, i = 0; i < n.nodes.length; i++) { var o = n.nodes[i],
                        a = void 0; switch (Zn.setCurrentNode(e, i), 201347067 & o.flags) {
                        case 1:
                            var l = Go(e, t, o),
                                s = void 0; if (33554432 & o.flags) { var u = vr(o.element.componentView);
                                s = Zn.createComponentView(e, o, u, l) }
                            Qo(e, s, o, l), a = { renderElement: l, componentView: s, viewContainer: null, template: o.element.template ? qr(e, o) : void 0 }, 16777216 & o.flags && (a.viewContainer = Vr(e, o, a)); break;
                        case 2:
                            a = oa(e, t, o); break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[i]) || 4096 & o.flags || (a = { instance: ci(e, o) }); break;
                        case 16:
                            a = { instance: hi(e, o) }; break;
                        case 16384:
                            (a = r[i]) || (a = { instance: di(e, o) }), 32768 & o.flags && pa(Hn(e, o.parent.nodeIndex).componentView, a.instance, a.instance); break;
                        case 32:
                        case 64:
                        case 128:
                            a = { value: void 0 }; break;
                        case 67108864:
                        case 134217728:
                            a = new Ai; break;
                        case 8:
                            na(e, t, o), a = void 0 }
                    r[i] = a }
                xa(e, ba.CreateViewNodes), Pa(e, 201326592, 268435456, 0) }

            function ga(e) { _a(e), Zn.updateDirectives(e, 1), Sa(e, ba.CheckNoChanges), Zn.updateRenderer(e, 1), xa(e, ba.CheckNoChanges), e.state &= -97 }

            function ya(e) { 1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, jn(e, 0, 256), _a(e), Zn.updateDirectives(e, 0), Sa(e, ba.CheckAndUpdate), Pa(e, 67108864, 536870912, 0); var t = jn(e, 256, 512);
                ki(e, 2097152 | (t ? 1048576 : 0)), Zn.updateRenderer(e, 0), xa(e, ba.CheckAndUpdate), Pa(e, 134217728, 536870912, 0), ki(e, 8388608 | ((t = jn(e, 512, 768)) ? 4194304 : 0)), 2 & e.def.flags && (e.state &= -9), e.state &= -97, jn(e, 768, 1024) }

            function ma(e, t, n, r, i, o, a, l, s, u, c, h, d) { return 0 === n ? function(e, t, n, r, i, o, a, l, s, u, c, h) { switch (201347067 & t.flags) {
                        case 1:
                            return function(e, t, n, r, i, o, a, l, s, u, c, h) { var d = t.bindings.length,
                                    f = !1; return d > 0 && Ko(e, t, 0, n) && (f = !0), d > 1 && Ko(e, t, 1, r) && (f = !0), d > 2 && Ko(e, t, 2, i) && (f = !0), d > 3 && Ko(e, t, 3, o) && (f = !0), d > 4 && Ko(e, t, 4, a) && (f = !0), d > 5 && Ko(e, t, 5, l) && (f = !0), d > 6 && Ko(e, t, 6, s) && (f = !0), d > 7 && Ko(e, t, 7, u) && (f = !0), d > 8 && Ko(e, t, 8, c) && (f = !0), d > 9 && Ko(e, t, 9, h) && (f = !0), f }(e, t, n, r, i, o, a, l, s, u, c, h);
                        case 2:
                            return function(e, t, n, r, i, o, a, l, s, u, c, h) { var d = !1,
                                    f = t.bindings,
                                    p = f.length; if (p > 0 && er(e, t, 0, n) && (d = !0), p > 1 && er(e, t, 1, r) && (d = !0), p > 2 && er(e, t, 2, i) && (d = !0), p > 3 && er(e, t, 3, o) && (d = !0), p > 4 && er(e, t, 4, a) && (d = !0), p > 5 && er(e, t, 5, l) && (d = !0), p > 6 && er(e, t, 6, s) && (d = !0), p > 7 && er(e, t, 7, u) && (d = !0), p > 8 && er(e, t, 8, c) && (d = !0), p > 9 && er(e, t, 9, h) && (d = !0), d) { var v = t.text.prefix;
                                    p > 0 && (v += aa(n, f[0])), p > 1 && (v += aa(r, f[1])), p > 2 && (v += aa(i, f[2])), p > 3 && (v += aa(o, f[3])), p > 4 && (v += aa(a, f[4])), p > 5 && (v += aa(l, f[5])), p > 6 && (v += aa(s, f[6])), p > 7 && (v += aa(u, f[7])), p > 8 && (v += aa(c, f[8])), p > 9 && (v += aa(h, f[9])); var g = Vn(e, t.nodeIndex).renderText;
                                    e.renderer.setValue(g, v) } return d }(e, t, n, r, i, o, a, l, s, u, c, h);
                        case 16384:
                            return function(e, t, n, r, i, o, a, l, s, u, c, h) { var d = zn(e, t.nodeIndex),
                                    f = d.instance,
                                    p = !1,
                                    v = void 0,
                                    g = t.bindings.length; return g > 0 && Xn(e, t, 0, n) && (p = !0, v = _i(e, d, t, 0, n, v)), g > 1 && Xn(e, t, 1, r) && (p = !0, v = _i(e, d, t, 1, r, v)), g > 2 && Xn(e, t, 2, i) && (p = !0, v = _i(e, d, t, 2, i, v)), g > 3 && Xn(e, t, 3, o) && (p = !0, v = _i(e, d, t, 3, o, v)), g > 4 && Xn(e, t, 4, a) && (p = !0, v = _i(e, d, t, 4, a, v)), g > 5 && Xn(e, t, 5, l) && (p = !0, v = _i(e, d, t, 5, l, v)), g > 6 && Xn(e, t, 6, s) && (p = !0, v = _i(e, d, t, 6, s, v)), g > 7 && Xn(e, t, 7, u) && (p = !0, v = _i(e, d, t, 7, u, v)), g > 8 && Xn(e, t, 8, c) && (p = !0, v = _i(e, d, t, 8, c, v)), g > 9 && Xn(e, t, 9, h) && (p = !0, v = _i(e, d, t, 9, h, v)), v && f.ngOnChanges(v), 65536 & t.flags && Fn(e, 256, t.nodeIndex) && f.ngOnInit(), 262144 & t.flags && f.ngDoCheck(), p }(e, t, n, r, i, o, a, l, s, u, c, h);
                        case 32:
                        case 64:
                        case 128:
                            return function(e, t, n, r, i, o, a, l, s, u, c, h) { var d = t.bindings,
                                    f = !1,
                                    p = d.length; if (p > 0 && er(e, t, 0, n) && (f = !0), p > 1 && er(e, t, 1, r) && (f = !0), p > 2 && er(e, t, 2, i) && (f = !0), p > 3 && er(e, t, 3, o) && (f = !0), p > 4 && er(e, t, 4, a) && (f = !0), p > 5 && er(e, t, 5, l) && (f = !0), p > 6 && er(e, t, 6, s) && (f = !0), p > 7 && er(e, t, 7, u) && (f = !0), p > 8 && er(e, t, 8, c) && (f = !0), p > 9 && er(e, t, 9, h) && (f = !0), f) { var v, g = Bn(e, t.nodeIndex); switch (201347067 & t.flags) {
                                        case 32:
                                            v = new Array(d.length), p > 0 && (v[0] = n), p > 1 && (v[1] = r), p > 2 && (v[2] = i), p > 3 && (v[3] = o), p > 4 && (v[4] = a), p > 5 && (v[5] = l), p > 6 && (v[6] = s), p > 7 && (v[7] = u), p > 8 && (v[8] = c), p > 9 && (v[9] = h); break;
                                        case 64:
                                            v = {}, p > 0 && (v[d[0].name] = n), p > 1 && (v[d[1].name] = r), p > 2 && (v[d[2].name] = i), p > 3 && (v[d[3].name] = o), p > 4 && (v[d[4].name] = a), p > 5 && (v[d[5].name] = l), p > 6 && (v[d[6].name] = s), p > 7 && (v[d[7].name] = u), p > 8 && (v[d[8].name] = c), p > 9 && (v[d[9].name] = h); break;
                                        case 128:
                                            var y = n; switch (p) {
                                                case 1:
                                                    v = y.transform(n); break;
                                                case 2:
                                                    v = y.transform(r); break;
                                                case 3:
                                                    v = y.transform(r, i); break;
                                                case 4:
                                                    v = y.transform(r, i, o); break;
                                                case 5:
                                                    v = y.transform(r, i, o, a); break;
                                                case 6:
                                                    v = y.transform(r, i, o, a, l); break;
                                                case 7:
                                                    v = y.transform(r, i, o, a, l, s); break;
                                                case 8:
                                                    v = y.transform(r, i, o, a, l, s, u); break;
                                                case 9:
                                                    v = y.transform(r, i, o, a, l, s, u, c); break;
                                                case 10:
                                                    v = y.transform(r, i, o, a, l, s, u, c, h) } }
                                    g.value = v } return f }(e, t, n, r, i, o, a, l, s, u, c, h);
                        default:
                            throw "unreachable" } }(e, t, r, i, o, a, l, s, u, c, h, d) : function(e, t, n) { switch (201347067 & t.flags) {
                        case 1:
                            return function(e, t, n) { for (var r = !1, i = 0; i < n.length; i++) Ko(e, t, i, n[i]) && (r = !0); return r }(e, t, n);
                        case 2:
                            return function(e, t, n) { for (var r = t.bindings, i = !1, o = 0; o < n.length; o++) er(e, t, o, n[o]) && (i = !0); if (i) { for (var a = "", l = 0; l < n.length; l++) a += aa(n[l], r[l]);
                                    a = t.text.prefix + a; var s = Vn(e, t.nodeIndex).renderText;
                                    e.renderer.setValue(s, a) } return i }(e, t, n);
                        case 16384:
                            return function(e, t, n) { for (var r = zn(e, t.nodeIndex), i = r.instance, o = !1, a = void 0, l = 0; l < n.length; l++) Xn(e, t, l, n[l]) && (o = !0, a = _i(e, r, t, l, n[l], a)); return a && i.ngOnChanges(a), 65536 & t.flags && Fn(e, 256, t.nodeIndex) && i.ngOnInit(), 262144 & t.flags && i.ngDoCheck(), o }(e, t, n);
                        case 32:
                        case 64:
                        case 128:
                            return function(e, t, n) { for (var r = t.bindings, i = !1, o = 0; o < n.length; o++) er(e, t, o, n[o]) && (i = !0); if (i) { var a, l = Bn(e, t.nodeIndex); switch (201347067 & t.flags) {
                                        case 32:
                                            a = n; break;
                                        case 64:
                                            a = {}; for (var s = 0; s < n.length; s++) a[r[s].name] = n[s]; break;
                                        case 128:
                                            var u = n[0],
                                                c = n.slice(1);
                                            a = u.transform.apply(u, _toConsumableArray(c)) }
                                    l.value = a } return i }(e, t, n);
                        default:
                            throw "unreachable" } }(e, t, r) }

            function _a(e) { var t = e.def; if (4 & t.nodeFlags)
                    for (var n = 0; n < t.nodes.length; n++) { var r = t.nodes[n]; if (4 & r.flags) { var i = Hn(e, n).template._projectedViews; if (i)
                                for (var o = 0; o < i.length; o++) { var a = i[o];
                                    a.state |= 32, rr(a, e) } } else 0 == (4 & r.childFlags) && (n += r.childCount) } }

            function ka(e, t, n, r, i, o, a, l, s, u, c, h, d) { return 0 === n ? function(e, t, n, r, i, o, a, l, s, u, c, h) { var d = t.bindings.length;
                    d > 0 && tr(e, t, 0, n), d > 1 && tr(e, t, 1, r), d > 2 && tr(e, t, 2, i), d > 3 && tr(e, t, 3, o), d > 4 && tr(e, t, 4, a), d > 5 && tr(e, t, 5, l), d > 6 && tr(e, t, 6, s), d > 7 && tr(e, t, 7, u), d > 8 && tr(e, t, 8, c), d > 9 && tr(e, t, 9, h) }(e, t, r, i, o, a, l, s, u, c, h, d) : function(e, t, n) { for (var r = 0; r < n.length; r++) tr(e, t, r, n[r]) }(e, t, r), !1 }

            function Ca(e, t) { if (qn(e, t.nodeIndex).dirty) throw Dn(Zn.createDebugContext(e, t.nodeIndex), "Query ".concat(t.query.id, " not dirty"), "Query ".concat(t.query.id, " dirty"), 0 != (1 & e.state)) }

            function wa(e) { if (!(128 & e.state)) { if (Sa(e, ba.Destroy), xa(e, ba.Destroy), ki(e, 131072), e.disposables)
                        for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();! function(e) { if (16 & e.state) { var t = or(e); if (t) { var n = t.template._projectedViews;
                                n && (qe(n, n.indexOf(e)), Zn.dirtyParentQueries(e)) } } }(e), e.renderer.destroyNode && function(e) { for (var t = e.def.nodes.length, n = 0; n < t; n++) { var r = e.def.nodes[n];
                            1 & r.flags ? e.renderer.destroyNode(Hn(e, n).renderElement) : 2 & r.flags ? e.renderer.destroyNode(Vn(e, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && qn(e, n).destroy() } }(e), sr(e) && e.renderer.destroy(), e.state |= 128 } } var ba = function() { var e = { CreateViewNodes: 0, CheckNoChanges: 1, CheckNoChangesProjectedViews: 2, CheckAndUpdate: 3, CheckAndUpdateProjectedViews: 4, Destroy: 5 }; return e[e.CreateViewNodes] = "CreateViewNodes", e[e.CheckNoChanges] = "CheckNoChanges", e[e.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate] = "CheckAndUpdate", e[e.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", e[e.Destroy] = "Destroy", e }();

            function xa(e, t) { var n = e.def; if (33554432 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) { var i = n.nodes[r];
                        33554432 & i.flags ? Ea(Hn(e, r).componentView, t) : 0 == (33554432 & i.childFlags) && (r += i.childCount) } }

            function Sa(e, t) { var n = e.def; if (16777216 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) { var i = n.nodes[r]; if (16777216 & i.flags)
                            for (var o = Hn(e, r).viewContainer._embeddedViews, a = 0; a < o.length; a++) Ea(o[a], t);
                        else 0 == (16777216 & i.childFlags) && (r += i.childCount) } }

            function Ea(e, t) { var n = e.state; switch (t) {
                    case ba.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? ga(e) : 64 & n && Ta(e, ba.CheckNoChangesProjectedViews)); break;
                    case ba.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? ga(e) : 64 & n && Ta(e, t)); break;
                    case ba.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? ya(e) : 64 & n && Ta(e, ba.CheckAndUpdateProjectedViews)); break;
                    case ba.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? ya(e) : 64 & n && Ta(e, t)); break;
                    case ba.Destroy:
                        wa(e); break;
                    case ba.CreateViewNodes:
                        va(e) } }

            function Ta(e, t) { Sa(e, t), xa(e, t) }

            function Pa(e, t, n, r) { if (e.def.nodeFlags & t && e.def.nodeFlags & n)
                    for (var i = e.def.nodes.length, o = 0; o < i; o++) { var a = e.def.nodes[o]; if (a.flags & t && a.flags & n) switch (Zn.setCurrentNode(e, a.nodeIndex), r) {
                            case 0:
                                Xo(e, a); break;
                            case 1:
                                Ca(e, a) }
                        a.childFlags & t && a.childFlags & n || (o += a.childCount) } } var Oa = !1;

            function Ra(e, t, n, r, i, o) { var a = i.injector.get(hn); return ha(Aa(e, i, a, t, n), r, o) }

            function Ia(e, t, n, r, i, o) { var a = i.injector.get(hn),
                    l = Aa(e, i, new cl(a), t, n),
                    s = za(r); return sl(Ja.create, ha, null, [l, s, o]) }

            function Aa(e, t, n, r, i) { var o = t.injector.get(St),
                    a = t.injector.get(Xe),
                    l = n.createRenderer(null, null); return { ngModule: t, injector: e, projectableNodes: r, selectorOrNode: i, sanitizer: o, rendererFactory: n, renderer: l, errorHandler: a } }

            function Na(e, t, n, r) { var i = za(n); return sl(Ja.create, ca, null, [e, t, i, r]) }

            function Ma(e, t, n, r) { return n = ja.get(t.element.componentProvider.provider.token) || za(n), sl(Ja.create, da, null, [e, t, n, r]) }

            function Da(e, t, n, r) { return Jr(e, t, n, function(e) { var t = function(e) { var t = !1,
                                n = !1; return 0 === Ua.size ? { hasOverrides: t, hasDeprecatedOverrides: n } : (e.providers.forEach((function(e) { var r = Ua.get(e.token);
                                3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior) })), e.modules.forEach((function(e) { La.forEach((function(r, i) { ge(i).providedIn === e && (t = !0, n = n || r.deprecatedBehavior) })) })), { hasOverrides: t, hasDeprecatedOverrides: n }) }(e),
                        n = t.hasOverrides,
                        r = t.hasDeprecatedOverrides; return n ? (function(e) { for (var t = 0; t < e.providers.length; t++) { var n = e.providers[t];
                            r && (n.flags |= 4096); var i = Ua.get(n.token);
                            i && (n.flags = -3841 & n.flags | i.flags, n.deps = dr(i.deps), n.value = i.value) } if (La.size > 0) { var o = new Set(e.modules);
                            La.forEach((function(t, n) { if (o.has(ge(n).providedIn)) { var i = { token: n, flags: t.flags | (r ? 4096 : 0), deps: dr(t.deps), value: t.value, index: e.providers.length };
                                    e.providers.push(i), e.providersByKey[Qn(n)] = i } })) } }(e = e.factory((function() { return Wn }))), e) : e }(r)) } var Ua = new Map,
                La = new Map,
                ja = new Map;

            function Fa(e) { var t;
                Ua.set(e.token, e), "function" == typeof e.token && (t = ge(e.token)) && "function" == typeof t.providedIn && La.set(e.token, e) }

            function Va(e, t) { var n = vr(t.viewDefFactory),
                    r = vr(n.nodes[0].element.componentView);
                ja.set(e, r) }

            function Ha() { Ua.clear(), La.clear(), ja.clear() }

            function za(e) { if (0 === Ua.size) return e; var t = function(e) { for (var t = [], n = null, r = 0; r < e.nodes.length; r++) { var i = e.nodes[r];
                        1 & i.flags && (n = i), n && 3840 & i.flags && Ua.has(i.provider.token) && (t.push(n.nodeIndex), n = null) } return t }(e); if (0 === t.length) return e;
                e = e.factory((function() { return Wn })); for (var n = 0; n < t.length; n++) r(e, t[n]); return e;

                function r(e, t) { for (var n = t + 1; n < e.nodes.length; n++) { var r = e.nodes[n]; if (1 & r.flags) return; if (3840 & r.flags) { var i = r.provider,
                                o = Ua.get(i.token);
                            o && (r.flags = -3841 & r.flags | o.flags, i.deps = dr(o.deps), i.value = o.value) } } } }

            function Ba(e, t, n, r, i, o, a, l, s, u, c, h, d) { var f = e.def.nodes[t]; return ma(e, f, n, r, i, o, a, l, s, u, c, h, d), 224 & f.flags ? Bn(e, t).value : void 0 }

            function qa(e, t, n, r, i, o, a, l, s, u, c, h, d) { var f = e.def.nodes[t]; return ka(e, f, n, r, i, o, a, l, s, u, c, h, d), 224 & f.flags ? Bn(e, t).value : void 0 }

            function Za(e) { return sl(Ja.detectChanges, ya, null, [e]) }

            function Wa(e) { return sl(Ja.checkNoChanges, ga, null, [e]) }

            function Ga(e) { return sl(Ja.destroy, wa, null, [e]) } var Qa, $a, Ka, Ja = function() { var e = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 }; return e[e.create] = "create", e[e.detectChanges] = "detectChanges", e[e.checkNoChanges] = "checkNoChanges", e[e.destroy] = "destroy", e[e.handleEvent] = "handleEvent", e }();

            function Ya(e, t) { $a = e, Ka = t }

            function Xa(e, t, n, r) { return Ya(e, t), sl(Ja.handleEvent, e.def.handleEvent, null, [e, t, n, r]) }

            function el(e, t) { if (128 & e.state) throw Ln(Ja[Qa]); return Ya(e, il(e, 0)), e.def.updateDirectives((function(e, n, r) { for (var i = e.def.nodes[n], o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), l = 3; l < o; l++) a[l - 3] = arguments[l]; return 0 === t ? nl(e, i, r, a) : rl(e, i, r, a), 16384 & i.flags && Ya(e, il(e, n)), 224 & i.flags ? Bn(e, i.nodeIndex).value : void 0 }), e) }

            function tl(e, t) { if (128 & e.state) throw Ln(Ja[Qa]); return Ya(e, ol(e, 0)), e.def.updateRenderer((function(e, n, r) { for (var i = e.def.nodes[n], o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), l = 3; l < o; l++) a[l - 3] = arguments[l]; return 0 === t ? nl(e, i, r, a) : rl(e, i, r, a), 3 & i.flags && Ya(e, ol(e, n)), 224 & i.flags ? Bn(e, i.nodeIndex).value : void 0 }), e) }

            function nl(e, t, n, r) { if (ma.apply(void 0, [e, t, n].concat(_toConsumableArray(r)))) { var i = 1 === n ? r[0] : r; if (16384 & t.flags) { for (var o = {}, a = 0; a < t.bindings.length; a++) { var l = t.bindings[a],
                                s = i[a];
                            8 & l.flags && (o[(f = l.nonMinifiedName, p = void 0, p = f.replace(/[$@]/g, "_"), "ng-reflect-".concat(f = p.replace(Pt, (function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return "-" + t[1].toLowerCase() }))))] = Ot(s)) } var u = t.parent,
                            c = Hn(e, u.nodeIndex).renderElement; if (u.element.name)
                            for (var h in o) { var d = o[h];
                                null != d ? e.renderer.setAttribute(c, h, d) : e.renderer.removeAttribute(c, h) } else e.renderer.setValue(c, "bindings=".concat(JSON.stringify(o, null, 2))) } } var f, p }

            function rl(e, t, n, r) { ka.apply(void 0, [e, t, n].concat(_toConsumableArray(r))) }

            function il(e, t) { for (var n = t; n < e.def.nodes.length; n++) { var r = e.def.nodes[n]; if (16384 & r.flags && r.bindings && r.bindings.length) return n } return null }

            function ol(e, t) { for (var n = t; n < e.def.nodes.length; n++) { var r = e.def.nodes[n]; if (3 & r.flags && r.bindings && r.bindings.length) return n } return null } var al = function() {
                function e(t, n) { _classCallCheck(this, e), this.view = t, this.nodeIndex = n, null == n && (this.nodeIndex = n = 0), this.nodeDef = t.def.nodes[n]; for (var r = this.nodeDef, i = t; r && 0 == (1 & r.flags);) r = r.parent; if (!r)
                        for (; !r && i;) r = ar(i), i = i.parent;
                    this.elDef = r, this.elView = i } return _createClass(e, [{ key: "logError", value: function(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; var i, o;
                        2 & this.nodeDef.flags ? (i = this.view.def, o = this.nodeDef.nodeIndex) : (i = this.elView.def, o = this.elDef.nodeIndex); var a = function(e, t) { for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++; return n }(i, o),
                            l = -1;
                        i.factory((function() { var t; return ++l === a ? (t = e.error).bind.apply(t, [e].concat(n)) : Wn })), l < a && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), e.error.apply(e, n)) } }, { key: "elOrCompView", get: function() { return Hn(this.elView, this.elDef.nodeIndex).componentView || this.view } }, { key: "injector", get: function() { return Wr(this.elView, this.elDef) } }, { key: "component", get: function() { return this.elOrCompView.component } }, { key: "context", get: function() { return this.elOrCompView.context } }, { key: "providerTokens", get: function() { var e = []; if (this.elDef)
                            for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) { var n = this.elView.def.nodes[t];
                                20224 & n.flags && e.push(n.provider.token), t += n.childCount }
                        return e } }, { key: "references", get: function() { var e = {}; if (this.elDef) { ll(this.elView, this.elDef, e); for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) { var n = this.elView.def.nodes[t];
                                20224 & n.flags && ll(this.elView, n, e), t += n.childCount } } return e } }, { key: "componentRenderElement", get: function() { var e = function(e) { for (; e && !sr(e);) e = e.parent; return e.parent ? Hn(e.parent, ar(e).nodeIndex) : null }(this.elOrCompView); return e ? e.renderElement : void 0 } }, { key: "renderNode", get: function() { return 2 & this.nodeDef.flags ? lr(this.view, this.nodeDef) : lr(this.elView, this.elDef) } }]), e }();

            function ll(e, t, n) { for (var r in t.references) n[r] = ta(e, t, t.references[r]) }

            function sl(e, t, n, r) { var i, o, a = Qa,
                    l = $a,
                    s = Ka; try { Qa = e; var u = t.apply(n, r); return $a = l, Ka = s, Qa = a, u } catch (c) { if (Ke(c) || !$a) throw c; throw i = c, o = ul(), i instanceof Error || (i = new Error(i.toString())), Un(i, o), i } }

            function ul() { return $a ? new al($a, Ka) : null } var cl = function() {
                    function e(t) { _classCallCheck(this, e), this.delegate = t } return _createClass(e, [{ key: "createRenderer", value: function(e, t) { return new hl(this.delegate.createRenderer(e, t)) } }, { key: "begin", value: function() { this.delegate.begin && this.delegate.begin() } }, { key: "end", value: function() { this.delegate.end && this.delegate.end() } }, { key: "whenRenderingDone", value: function() { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null) } }]), e }(),
                hl = function() {
                    function e(t) { _classCallCheck(this, e), this.delegate = t, this.debugContextFactory = ul, this.data = this.delegate.data } return _createClass(e, [{ key: "createDebugContext", value: function(e) { return this.debugContextFactory(e) } }, { key: "destroyNode", value: function(e) { var t = Lo(e);! function(e) { Uo.delete(e.nativeNode) }(t), t instanceof Mo && (t.listeners.length = 0), this.delegate.destroyNode && this.delegate.destroyNode(e) } }, { key: "destroy", value: function() { this.delegate.destroy() } }, { key: "createElement", value: function(e, t) { var n = this.delegate.createElement(e, t),
                                r = this.createDebugContext(n); if (r) { var i = new Do(n, null, r);
                                i.name = e, jo(i) } return n } }, { key: "createComment", value: function(e) { var t = this.delegate.createComment(e),
                                n = this.createDebugContext(t); return n && jo(new Mo(t, null, n)), t } }, { key: "createText", value: function(e) { var t = this.delegate.createText(e),
                                n = this.createDebugContext(t); return n && jo(new Mo(t, null, n)), t } }, { key: "appendChild", value: function(e, t) { var n = Lo(e),
                                r = Lo(t);
                            n && r && n instanceof Do && n.addChild(r), this.delegate.appendChild(e, t) } }, { key: "insertBefore", value: function(e, t, n) { var r = Lo(e),
                                i = Lo(t),
                                o = Lo(n);
                            r && i && r instanceof Do && r.insertBefore(o, i), this.delegate.insertBefore(e, t, n) } }, { key: "removeChild", value: function(e, t) { var n = Lo(e),
                                r = Lo(t);
                            n && r && n instanceof Do && n.removeChild(r), this.delegate.removeChild(e, t) } }, { key: "selectRootElement", value: function(e, t) { var n = this.delegate.selectRootElement(e, t),
                                r = ul(); return r && jo(new Do(n, null, r)), n } }, { key: "setAttribute", value: function(e, t, n, r) { var i = Lo(e);
                            i && i instanceof Do && (i.attributes[r ? r + ":" + t : t] = n), this.delegate.setAttribute(e, t, n, r) } }, { key: "removeAttribute", value: function(e, t, n) { var r = Lo(e);
                            r && r instanceof Do && (r.attributes[n ? n + ":" + t : t] = null), this.delegate.removeAttribute(e, t, n) } }, { key: "addClass", value: function(e, t) { var n = Lo(e);
                            n && n instanceof Do && (n.classes[t] = !0), this.delegate.addClass(e, t) } }, { key: "removeClass", value: function(e, t) { var n = Lo(e);
                            n && n instanceof Do && (n.classes[t] = !1), this.delegate.removeClass(e, t) } }, { key: "setStyle", value: function(e, t, n, r) { var i = Lo(e);
                            i && i instanceof Do && (i.styles[t] = n), this.delegate.setStyle(e, t, n, r) } }, { key: "removeStyle", value: function(e, t, n) { var r = Lo(e);
                            r && r instanceof Do && (r.styles[t] = null), this.delegate.removeStyle(e, t, n) } }, { key: "setProperty", value: function(e, t, n) { var r = Lo(e);
                            r && r instanceof Do && (r.properties[t] = n), this.delegate.setProperty(e, t, n) } }, { key: "listen", value: function(e, t, n) { if ("string" != typeof e) { var r = Lo(e);
                                r && r.listeners.push(new No(t, n)) } return this.delegate.listen(e, t, n) } }, { key: "parentNode", value: function(e) { return this.delegate.parentNode(e) } }, { key: "nextSibling", value: function(e) { return this.delegate.nextSibling(e) } }, { key: "setValue", value: function(e, t) { return this.delegate.setValue(e, t) } }]), e }(); var dl = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).moduleType = e, i._bootstrapComponents = n, i._ngModuleDefFactory = r, i } return _inherits(t, e), _createClass(t, [{ key: "create", value: function(e) {! function() { if (!Oa) { Oa = !0; var e = nt() ? { setCurrentNode: Ya, createRootView: Ia, createEmbeddedView: Na, createComponentView: Ma, createNgModuleRef: Da, overrideProvider: Fa, overrideComponentView: Va, clearOverrides: Ha, checkAndUpdateView: Za, checkNoChangesView: Wa, destroyView: Ga, createDebugContext: function(e, t) { return new al(e, t) }, handleEvent: Xa, updateDirectives: el, updateRenderer: tl } : { setCurrentNode: function() {}, createRootView: Ra, createEmbeddedView: ca, createComponentView: da, createNgModuleRef: Jr, overrideProvider: Wn, overrideComponentView: Wn, clearOverrides: Wn, checkAndUpdateView: ya, checkNoChangesView: ga, destroyView: wa, createDebugContext: function(e, t) { return new al(e, t) }, handleEvent: function(e, t, n, r) { return e.def.handleEvent(e, t, n, r) }, updateDirectives: function(e, t) { return e.def.updateDirectives(0 === t ? Ba : qa, e) }, updateRenderer: function(e, t) { return e.def.updateRenderer(0 === t ? Ba : qa, e) } };
                                    Zn.setCurrentNode = e.setCurrentNode, Zn.createRootView = e.createRootView, Zn.createEmbeddedView = e.createEmbeddedView, Zn.createComponentView = e.createComponentView, Zn.createNgModuleRef = e.createNgModuleRef, Zn.overrideProvider = e.overrideProvider, Zn.overrideComponentView = e.overrideComponentView, Zn.clearOverrides = e.clearOverrides, Zn.checkAndUpdateView = e.checkAndUpdateView, Zn.checkNoChangesView = e.checkNoChangesView, Zn.destroyView = e.destroyView, Zn.resolveDep = yi, Zn.createDebugContext = e.createDebugContext, Zn.handleEvent = e.handleEvent, Zn.updateDirectives = e.updateDirectives, Zn.updateRenderer = e.updateRenderer, Zn.dirtyParentQueries = Yo } }(); var t = function(e) { var t = Array.from(e.providers),
                                    n = Array.from(e.modules),
                                    r = {}; for (var i in e.providersByKey) r[i] = e.providersByKey[i]; return { factory: e.factory, isRoot: e.isRoot, providers: t, modules: n, providersByKey: r } }(vr(this._ngModuleDefFactory)); return Zn.createNgModuleRef(this.moduleType, e || Mt.NULL, this._bootstrapComponents, t) } }]), t }(ze),
                fl = function e() { _classCallCheck(this, e) },
                pl = function() {
                    function e() { _classCallCheck(this, e), this.title = "ProjetoGiacomini" } return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e }(),
                vl = function e() { _classCallCheck(this, e) },
                gl = new Pe("Location Initialized"),
                yl = function e() { _classCallCheck(this, e) },
                ml = new Pe("appBaseHref"),
                _l = function() {
                    function e(t, n) { var r = this;
                        _classCallCheck(this, e), this._subject = new Ri, this._urlChangeListeners = [], this._platformStrategy = t; var i = this._platformStrategy.getBaseHref();
                        this._platformLocation = n, this._baseHref = e.stripTrailingSlash(kl(i)), this._platformStrategy.onPopState((function(e) { r._subject.emit({ url: r.path(!0), pop: !0, state: e.state, type: e.type }) })) } return _createClass(e, [{ key: "path", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this.normalize(this._platformStrategy.path(e)) } }, { key: "getState", value: function() { return this._platformLocation.getState() } }, { key: "isCurrentPathEqualTo", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this.path() == this.normalize(t + e.normalizeQueryParams(n)) } }, { key: "normalize", value: function(t) { return e.stripTrailingSlash(function(e, t) { return e && t.startsWith(e) ? t.substring(e.length) : t }(this._baseHref, kl(t))) } }, { key: "prepareExternalUrl", value: function(e) { return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e) } }, { key: "go", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this._platformStrategy.pushState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r) } }, { key: "replaceState", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this._platformStrategy.replaceState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r) } }, { key: "forward", value: function() { this._platformStrategy.forward() } }, { key: "back", value: function() { this._platformStrategy.back() } }, { key: "onUrlChange", value: function(e) { var t = this;
                            this._urlChangeListeners.push(e), this.subscribe((function(e) { t._notifyUrlChangeListeners(e.url, e.state) })) } }, { key: "_notifyUrlChangeListeners", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            this._urlChangeListeners.forEach((function(n) { return n(e, t) })) } }, { key: "subscribe", value: function(e, t, n) { return this._subject.subscribe({ next: e, error: t, complete: n }) } }], [{ key: "normalizeQueryParams", value: function(e) { return e && "?" !== e[0] ? "?" + e : e } }, { key: "joinWithSlash", value: function(e, t) { if (0 == e.length) return t; if (0 == t.length) return e; var n = 0; return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t } }, { key: "stripTrailingSlash", value: function(e) { var t = e.match(/#|\?|$/),
                                n = t && t.index || e.length; return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n) } }]), e }();

            function kl(e) { return e.replace(/\/index.html$/, "") } var Cl = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r } return _inherits(t, e), _createClass(t, [{ key: "onPopState", value: function(e) { this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "path", value: function() { arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; var e = this._platformLocation.hash; return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e } }, { key: "prepareExternalUrl", value: function(e) { var t = _l.joinWithSlash(this._baseHref, e); return t.length > 0 ? "#" + t : t } }, { key: "pushState", value: function(e, t, n, r) { var i = this.prepareExternalUrl(n + _l.normalizeQueryParams(r));
                            0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i) } }, { key: "replaceState", value: function(e, t, n, r) { var i = this.prepareExternalUrl(n + _l.normalizeQueryParams(r));
                            0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i) } }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), t }(yl),
                wl = function(e) {
                    function t(e, n) { var r; if (_classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); return r._baseHref = n, _possibleConstructorReturn(r) } return _inherits(t, e), _createClass(t, [{ key: "onPopState", value: function(e) { this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "prepareExternalUrl", value: function(e) { return _l.joinWithSlash(this._baseHref, e) } }, { key: "path", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this._platformLocation.pathname + _l.normalizeQueryParams(this._platformLocation.search),
                                n = this._platformLocation.hash; return n && e ? "".concat(t).concat(n) : t } }, { key: "pushState", value: function(e, t, n, r) { var i = this.prepareExternalUrl(n + _l.normalizeQueryParams(r));
                            this._platformLocation.pushState(e, t, i) } }, { key: "replaceState", value: function(e, t, n, r) { var i = this.prepareExternalUrl(n + _l.normalizeQueryParams(r));
                            this._platformLocation.replaceState(e, t, i) } }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), t }(yl),
                bl = function() { var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 }; return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e }(),
                xl = new Pe("UseV4Plurals"),
                Sl = function e() { _classCallCheck(this, e) },
                El = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))).locale = e, r.deprecatedPluralFn = n, r } return _inherits(t, e), _createClass(t, [{ key: "getPluralCategory", value: function(e, t) { switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : function(e) { return function(e) { var t = e.toLowerCase().replace(/_/g, "-"),
                                        n = xi[t]; if (n) return n; var r = t.split("-")[0]; if (n = xi[r]) return n; if ("en" === r) return Ti; throw new Error('Missing locale data for the locale "'.concat(e, '".')) }(e)[Si.PluralCase] }(t || this.locale)(e)) {
                                case bl.Zero:
                                    return "zero";
                                case bl.One:
                                    return "one";
                                case bl.Two:
                                    return "two";
                                case bl.Few:
                                    return "few";
                                case bl.Many:
                                    return "many";
                                default:
                                    return "other" } } }]), t }(Sl),
                Tl = function() {
                    function e(t, n, r, i) { _classCallCheck(this, e), this.$implicit = t, this.ngForOf = n, this.index = r, this.count = i } return _createClass(e, [{ key: "first", get: function() { return 0 === this.index } }, { key: "last", get: function() { return this.index === this.count - 1 } }, { key: "even", get: function() { return this.index % 2 == 0 } }, { key: "odd", get: function() { return !this.even } }]), e }(),
                Pl = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this._viewContainer = t, this._template = n, this._differs = r, this._ngForOfDirty = !0, this._differ = null } return _createClass(e, [{ key: "ngDoCheck", value: function() { if (this._ngForOfDirty) { this._ngForOfDirty = !1; var e = this._ngForOf; if (!this._differ && e) try { this._differ = this._differs.find(e).create(this.ngForTrackBy) } catch (r) { throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'. NgFor only supports binding to Iterables such as Arrays.")) } } var t; if (this._differ) { var n = this._differ.diff(this._ngForOf);
                                n && this._applyChanges(n) } } }, { key: "_applyChanges", value: function(e) { var t = this,
                                n = [];
                            e.forEachOperation((function(e, r, i) { if (null == e.previousIndex) { var o = t._viewContainer.createEmbeddedView(t._template, new Tl(null, t._ngForOf, -1, -1), null === i ? void 0 : i),
                                        a = new Ol(e, o);
                                    n.push(a) } else if (null == i) t._viewContainer.remove(null === r ? void 0 : r);
                                else if (null !== r) { var l = t._viewContainer.get(r);
                                    t._viewContainer.move(l, i); var s = new Ol(e, l);
                                    n.push(s) } })); for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record); for (var i = 0, o = this._viewContainer.length; i < o; i++) { var a = this._viewContainer.get(i);
                                a.context.index = i, a.context.count = o, a.context.ngForOf = this._ngForOf }
                            e.forEachIdentityChange((function(e) { t._viewContainer.get(e.currentIndex).context.$implicit = e.item })) } }, { key: "_perViewChange", value: function(e, t) { e.context.$implicit = t.item } }, { key: "ngForOf", set: function(e) { this._ngForOf = e, this._ngForOfDirty = !0 } }, { key: "ngForTrackBy", set: function(e) { nt() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received ".concat(JSON.stringify(e), ". ") + "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = e }, get: function() { return this._trackByFn } }, { key: "ngForTemplate", set: function(e) { e && (this._template = e) } }], [{ key: "ngTemplateContextGuard", value: function(e, t) { return !0 } }]), e }(),
                Ol = function e(t, n) { _classCallCheck(this, e), this.record = t, this.view = n },
                Rl = function() {
                    function e(t, n) { _classCallCheck(this, e), this._viewContainer = t, this._context = new Il, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n } return _createClass(e, [{ key: "_updateView", value: function() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))) } }, { key: "ngIf", set: function(e) { this._context.$implicit = this._context.ngIf = e, this._updateView() } }, { key: "ngIfThen", set: function(e) { Al("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView() } }, { key: "ngIfElse", set: function(e) { Al("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView() } }]), e }(),
                Il = function e() { _classCallCheck(this, e), this.$implicit = null, this.ngIf = null };

            function Al(e, t) { if (t && !t.createEmbeddedView) throw new Error("".concat(e, " must be a TemplateRef, but received '").concat(me(t), "'.")) } var Nl = function e() { _classCallCheck(this, e) },
                Ml = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this._ngEl = t, this._differs = n, this._renderer = r } return _createClass(e, [{ key: "getValue", value: function() { return null } }, { key: "setNgStyle", value: function(e) { this._ngStyle = e, !this._differ && e && (this._differ = this._differs.find(e).create()) } }, { key: "applyChanges", value: function() { if (this._differ) { var e = this._differ.diff(this._ngStyle);
                                e && this._applyChanges(e) } } }, { key: "_applyChanges", value: function(e) { var t = this;
                            e.forEachRemovedItem((function(e) { return t._setStyle(e.key, null) })), e.forEachAddedItem((function(e) { return t._setStyle(e.key, e.currentValue) })), e.forEachChangedItem((function(e) { return t._setStyle(e.key, e.currentValue) })) } }, { key: "_setStyle", value: function(e, t) { var n = _slicedToArray(e.split("."), 2),
                                r = n[0],
                                i = n[1];
                            null != (t = null != t && i ? "".concat(t).concat(i) : t) ? this._renderer.setStyle(this._ngEl.nativeElement, r, t) : this._renderer.removeStyle(this._ngEl.nativeElement, r) } }]), e }(),
                Dl = function(e) {
                    function t(e) { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)) } return _inherits(t, e), _createClass(t, [{ key: "ngDoCheck", value: function() { this._delegate.applyChanges() } }, { key: "ngStyle", set: function(e) { this._delegate.setNgStyle(e) } }]), t }(function() { var e = function() {
                        function e(t) { _classCallCheck(this, e), this._delegate = t } return _createClass(e, [{ key: "getValue", value: function() { return this._delegate.getValue() } }]), e }(); return e.ngDirectiveDef = void 0, e }()),
                Ul = function e() { _classCallCheck(this, e) },
                Ll = new Pe("DocumentToken"),
                jl = "server";

            function Fl(e) { return e === jl } var Vl, Hl = ((Vl = function e() { _classCallCheck(this, e) }).ngInjectableDef = ve({ token: Vl, providedIn: "root", factory: function() { return new zl(je(Ll), window, je(Xe)) } }), Vl),
                zl = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.document = t, this.window = n, this.errorHandler = r, this.offset = function() { return [0, 0] } } return _createClass(e, [{ key: "setOffset", value: function(e) { this.offset = Array.isArray(e) ? function() { return e } : e } }, { key: "getScrollPosition", value: function() { return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0] } }, { key: "scrollToPosition", value: function(e) { this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]) } }, { key: "scrollToAnchor", value: function(e) { if (this.supportScrollRestoration()) { e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1"); try { var t = this.document.querySelector("#".concat(e)); if (t) return void this.scrollToElement(t); var n = this.document.querySelector("[name='".concat(e, "']")); if (n) return void this.scrollToElement(n) } catch (r) { this.errorHandler.handleError(r) } } } }, { key: "setHistoryScrollRestoration", value: function(e) { if (this.supportScrollRestoration()) { var t = this.window.history;
                                t && t.scrollRestoration && (t.scrollRestoration = e) } } }, { key: "scrollToElement", value: function(e) { var t = e.getBoundingClientRect(),
                                n = t.left + this.window.pageXOffset,
                                r = t.top + this.window.pageYOffset,
                                i = this.offset();
                            this.window.scrollTo(n - i[0], r - i[1]) } }, { key: "supportScrollRestoration", value: function() { try { return !!this.window && !!this.window.scrollTo } catch (e) { return !1 } } }]), e }(),
                Bl = new b((function(e) { return e.complete() }));

            function ql(e) { return e ? function(e) { return new b((function(t) { return e.schedule((function() { return t.complete() })) })) }(e) : Bl }

            function Zl(e) { var t = new b((function(t) { t.next(e), t.complete() })); return t._isScalar = !0, t.value = e, t }

            function Wl() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var r = t[t.length - 1]; switch (A(r) ? t.pop() : r = void 0, t.length) {
                    case 0:
                        return ql(r);
                    case 1:
                        return r ? G(t, r) : Zl(t[0]);
                    default:
                        return G(t, r) } } var Gl = function(e) {
                function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._value = e, n } return _inherits(t, e), _createClass(t, [{ key: "_subscribe", value: function(e) { var n = _get(_getPrototypeOf(t.prototype), "_subscribe", this).call(this, e); return n && !n.closed && e.next(this._value), n } }, { key: "getValue", value: function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new T; return this._value } }, { key: "next", value: function(e) { _get(_getPrototypeOf(t.prototype), "next", this).call(this, this._value = e) } }, { key: "value", get: function() { return this.getValue() } }]), t }(R);

            function Ql() { return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this }
            Ql.prototype = Object.create(Error.prototype); var $l = Ql,
                Kl = {},
                Jl = function() {
                    function e(t) { _classCallCheck(this, e), this.resultSelector = t } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Yl(e, this.resultSelector)) } }]), e }(),
                Yl = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).resultSelector = n, r.active = 0, r.values = [], r.observables = [], r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.values.push(Kl), this.observables.push(e) } }, { key: "_complete", value: function() { var e = this.observables,
                                t = e.length; if (0 === t) this.destination.complete();
                            else { this.active = t, this.toRespond = t; for (var n = 0; n < t; n++) { var r = e[n];
                                    this.add(z(this, r, r, n)) } } } }, { key: "notifyComplete", value: function(e) { 0 == (this.active -= 1) && this.destination.complete() } }, { key: "notifyNext", value: function(e, t, n, r, i) { var o = this.values,
                                a = this.toRespond ? o[n] === Kl ? --this.toRespond : this.toRespond : 0;
                            o[n] = t, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice())) } }, { key: "_tryResultSelector", value: function(e) { var t; try { t = this.resultSelector.apply(this, e) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(t) } }]), t }(B);

            function Xl(e) { return new b((function(t) { var n; try { n = e() } catch (r) { return void t.error(r) } return (n ? Q(n) : ql()).subscribe(t) })) }

            function es() { return X(1) }

            function ts(e, t) { return function(n) { return n.lift(new ns(e, t)) } } var ns = function() {
                    function e(t, n) { _classCallCheck(this, e), this.predicate = t, this.thisArg = n } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new rs(e, this.predicate, this.thisArg)) } }]), e }(),
                rs = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).predicate = n, i.thisArg = r, i.count = 0, i } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { var t; try { t = this.predicate.call(this.thisArg, e, this.count++) } catch (n) { return void this.destination.error(n) }
                            t && this.destination.next(e) } }]), t }(g);

            function is() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this }
            is.prototype = Object.create(Error.prototype); var os = is;

            function as(e) { return function(t) { return 0 === e ? ql() : t.lift(new ls(e)) } } var ls = function() {
                    function e(t) { if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new os } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new ss(e, this.total)) } }]), e }(),
                ss = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).total = n, r.ring = new Array, r.count = 0, r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { var t = this.ring,
                                n = this.total,
                                r = this.count++;
                            t.length < n ? t.push(e) : t[r % n] = e } }, { key: "_complete", value: function() { var e = this.destination,
                                t = this.count; if (t > 0)
                                for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) { var o = t++ % n;
                                    e.next(r[o]) }
                            e.complete() } }]), t }(g);

            function us(e, t, n) { return function(r) { return r.lift(new cs(e, t, n)) } } var cs = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.nextOrObserver = t, this.error = n, this.complete = r } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new hs(e, this.nextOrObserver, this.error, this.complete)) } }]), e }(),
                hs = function(e) {
                    function t(e, n, i, o) { var a; return _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)))._tapNext = _, a._tapError = _, a._tapComplete = _, a._tapError = i || _, a._tapComplete = o || _, r(n) ? (a._context = _assertThisInitialized(a), a._tapNext = n) : n && (a._context = n, a._tapNext = n.next || _, a._tapError = n.error || _, a._tapComplete = n.complete || _), a } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { try { this._tapNext.call(this._context, e) } catch (t) { return void this.destination.error(t) }
                            this.destination.next(e) } }, { key: "_error", value: function(e) { try { this._tapError.call(this._context, e) } catch (e) { return void this.destination.error(e) }
                            this.destination.error(e) } }, { key: "_complete", value: function() { try { this._tapComplete.call(this._context) } catch (e) { return void this.destination.error(e) } return this.destination.complete() } }]), t }(g),
                ds = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fs; return us({ hasValue: !1, next: function() { this.hasValue = !0 }, complete: function() { if (!this.hasValue) throw e() } }) };

            function fs() { return new $l }

            function ps() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return function(t) { return t.lift(new vs(e)) } } var vs = function() {
                    function e(t) { _classCallCheck(this, e), this.defaultValue = t } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new gs(e, this.defaultValue)) } }]), e }(),
                gs = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).defaultValue = n, r.isEmpty = !0, r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { this.isEmpty = !1, this.destination.next(e) } }, { key: "_complete", value: function() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() } }]), t }(g);

            function ys(e, t) { var n = arguments.length >= 2; return function(r) { return r.pipe(e ? ts((function(t, n) { return e(t, n, r) })) : Y, as(1), n ? ps(t) : ds((function() { return new $l }))) } }

            function ms(e) { return function(t) { var n = new _s(e),
                        r = t.lift(n); return n.caught = r } } var _s = function() {
                    function e(t) { _classCallCheck(this, e), this.selector = t } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new ks(e, this.selector, this.caught)) } }]), e }(),
                ks = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).selector = n, i.caught = r, i } return _inherits(t, e), _createClass(t, [{ key: "error", value: function(e) { if (!this.isStopped) { var n; try { n = this.selector(e, this.caught) } catch (i) { return void _get(_getPrototypeOf(t.prototype), "error", this).call(this, i) }
                                this._unsubscribeAndRecycle(); var r = new N(this, void 0, void 0);
                                this.add(r), z(this, n, void 0, void 0, r) } } }]), t }(B);

            function Cs(e) { return function(t) { return 0 === e ? ql() : t.lift(new ws(e)) } } var ws = function() {
                    function e(t) { if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new os } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new bs(e, this.total)) } }]), e }(),
                bs = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).total = n, r.count = 0, r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { var t = this.total,
                                n = ++this.count;
                            n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe())) } }]), t }(g);

            function xs(e, t) { var n = arguments.length >= 2; return function(r) { return r.pipe(e ? ts((function(t, n) { return e(t, n, r) })) : Y, Cs(1), n ? ps(t) : ds((function() { return new $l }))) } } var Ss = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.predicate = t, this.thisArg = n, this.source = r } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Es(e, this.predicate, this.thisArg, this.source)) } }]), e }(),
                Es = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).predicate = n, o.thisArg = r, o.source = i, o.index = 0, o.thisArg = r || _assertThisInitialized(o), o } return _inherits(t, e), _createClass(t, [{ key: "notifyComplete", value: function(e) { this.destination.next(e), this.destination.complete() } }, { key: "_next", value: function(e) { var t = !1; try { t = this.predicate.call(this.thisArg, e, this.index++, this.source) } catch (n) { return void this.destination.error(n) }
                            t || this.notifyComplete(!1) } }, { key: "_complete", value: function() { this.notifyComplete(!0) } }]), t }(g);

            function Ts(e, t) { return "function" == typeof t ? function(n) { return n.pipe(Ts((function(n, r) { return Q(e(n, r)).pipe(q((function(e, i) { return t(n, e, r, i) }))) }))) } : function(t) { return t.lift(new Ps(e)) } } var Ps = function() {
                    function e(t) { _classCallCheck(this, e), this.project = t } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Os(e, this.project)) } }]), e }(),
                Os = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).project = n, r.index = 0, r } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { var t, n = this.index++; try { t = this.project(e, n) } catch (r) { return void this.destination.error(r) }
                            this._innerSub(t, e, n) } }, { key: "_innerSub", value: function(e, t, n) { var r = this.innerSubscription;
                            r && r.unsubscribe(); var i = new N(this, void 0, void 0);
                            this.destination.add(i), this.innerSubscription = z(this, e, t, n, i) } }, { key: "_complete", value: function() { var e = this.innerSubscription;
                            e && !e.closed || _get(_getPrototypeOf(t.prototype), "_complete", this).call(this), this.unsubscribe() } }, { key: "_unsubscribe", value: function() { this.innerSubscription = null } }, { key: "notifyComplete", value: function(e) { this.destination.remove(e), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(t.prototype), "_complete", this).call(this) } }, { key: "notifyNext", value: function(e, t, n, r, i) { this.destination.next(t) } }]), t }(B);

            function Rs(e, t) { var n = !1; return arguments.length >= 2 && (n = !0),
                    function(r) { return r.lift(new Is(e, t, n)) } } var Is = function() {
                    function e(t, n) { var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        _classCallCheck(this, e), this.accumulator = t, this.seed = n, this.hasSeed = r } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new As(e, this.accumulator, this.seed, this.hasSeed)) } }]), e }(),
                As = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).accumulator = n, o._seed = r, o.hasSeed = i, o.index = 0, o } return _inherits(t, e), _createClass(t, [{ key: "_next", value: function(e) { if (this.hasSeed) return this._tryNext(e);
                            this.seed = e, this.destination.next(e) } }, { key: "_tryNext", value: function(e) { var t, n = this.index++; try { t = this.accumulator(this.seed, e, n) } catch (r) { this.destination.error(r) }
                            this.seed = t, this.destination.next(t) } }, { key: "seed", get: function() { return this._seed }, set: function(e) { this.hasSeed = !0, this._seed = e } }]), t }(g);

            function Ns(e, t) { return $(e, t, 1) } var Ms = function() {
                    function e(t) { _classCallCheck(this, e), this.callback = t } return _createClass(e, [{ key: "call", value: function(e, t) { return t.subscribe(new Ds(e, this.callback)) } }]), e }(),
                Ds = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).add(new f(n)), r } return _inherits(t, e), t }(g),
                Us = null;

            function Ls() { return Us } var js, Fs = function(e) {
                    function t() { var e;
                        _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._animationPrefix = null, e._transitionEnd = null; try { var n = e.createElement("div", document); if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                            else
                                for (var r = ["Webkit", "Moz", "O", "ms"], i = 0; i < r.length; i++)
                                    if (null != e.getStyle(n, r[i] + "AnimationName")) { e._animationPrefix = "-" + r[i].toLowerCase() + "-"; break } var o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                            Object.keys(o).forEach((function(t) { null != e.getStyle(n, t) && (e._transitionEnd = o[t]) })) } catch (a) { e._animationPrefix = null, e._transitionEnd = null } return e } return _inherits(t, e), _createClass(t, [{ key: "getDistributedNodes", value: function(e) { return e.getDistributedNodes() } }, { key: "resolveAndSetHref", value: function(e, t, n) { e.href = null == n ? t : t + "/../" + n } }, { key: "supportsDOMEvents", value: function() { return !0 } }, { key: "supportsNativeShadowDOM", value: function() { return "function" == typeof document.body.createShadowRoot } }, { key: "getAnimationPrefix", value: function() { return this._animationPrefix ? this._animationPrefix : "" } }, { key: "getTransitionEnd", value: function() { return this._transitionEnd ? this._transitionEnd : "" } }, { key: "supportsAnimation", value: function() { return null != this._animationPrefix && null != this._transitionEnd } }]), t }(function() {
                    function e() { _classCallCheck(this, e), this.resourceLoaderType = null } return _createClass(e, [{ key: "attrToPropMap", get: function() { return this._attrToPropMap }, set: function(e) { this._attrToPropMap = e } }]), e }()),
                Vs = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
                Hs = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
                zs = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" },
                Bs = function() { if (Te.Node) return Te.Node.prototype.contains || function(e) { return !!(16 & this.compareDocumentPosition(e)) } }(),
                qs = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "parse", value: function(e) { throw new Error("parse not implemented") } }, { key: "hasProperty", value: function(e, t) { return t in e } }, { key: "setProperty", value: function(e, t, n) { e[t] = n } }, { key: "getProperty", value: function(e, t) { return e[t] } }, { key: "invoke", value: function(e, t, n) { e[t].apply(e, _toConsumableArray(n)) } }, { key: "logError", value: function(e) { window.console && (console.error ? console.error(e) : console.log(e)) } }, { key: "log", value: function(e) { window.console && window.console.log && window.console.log(e) } }, { key: "logGroup", value: function(e) { window.console && window.console.group && window.console.group(e) } }, { key: "logGroupEnd", value: function() { window.console && window.console.groupEnd && window.console.groupEnd() } }, { key: "contains", value: function(e, t) { return Bs.call(e, t) } }, { key: "querySelector", value: function(e, t) { return e.querySelector(t) } }, { key: "querySelectorAll", value: function(e, t) { return e.querySelectorAll(t) } }, { key: "on", value: function(e, t, n) { e.addEventListener(t, n, !1) } }, { key: "onAndCancel", value: function(e, t, n) { return e.addEventListener(t, n, !1),
                                function() { e.removeEventListener(t, n, !1) } } }, { key: "dispatchEvent", value: function(e, t) { e.dispatchEvent(t) } }, { key: "createMouseEvent", value: function(e) { var t = this.getDefaultDocument().createEvent("MouseEvent"); return t.initEvent(e, !0, !0), t } }, { key: "createEvent", value: function(e) { var t = this.getDefaultDocument().createEvent("Event"); return t.initEvent(e, !0, !0), t } }, { key: "preventDefault", value: function(e) { e.preventDefault(), e.returnValue = !1 } }, { key: "isPrevented", value: function(e) { return e.defaultPrevented || null != e.returnValue && !e.returnValue } }, { key: "getInnerHTML", value: function(e) { return e.innerHTML } }, { key: "getTemplateContent", value: function(e) { return "content" in e && this.isTemplateElement(e) ? e.content : null } }, { key: "getOuterHTML", value: function(e) { return e.outerHTML } }, { key: "nodeName", value: function(e) { return e.nodeName } }, { key: "nodeValue", value: function(e) { return e.nodeValue } }, { key: "type", value: function(e) { return e.type } }, { key: "content", value: function(e) { return this.hasProperty(e, "content") ? e.content : e } }, { key: "firstChild", value: function(e) { return e.firstChild } }, { key: "nextSibling", value: function(e) { return e.nextSibling } }, { key: "parentElement", value: function(e) { return e.parentNode } }, { key: "childNodes", value: function(e) { return e.childNodes } }, { key: "childNodesAsList", value: function(e) { for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++) n[r] = t[r]; return n } }, { key: "clearNodes", value: function(e) { for (; e.firstChild;) e.removeChild(e.firstChild) } }, { key: "appendChild", value: function(e, t) { e.appendChild(t) } }, { key: "removeChild", value: function(e, t) { e.removeChild(t) } }, { key: "replaceChild", value: function(e, t, n) { e.replaceChild(t, n) } }, { key: "remove", value: function(e) { return e.parentNode && e.parentNode.removeChild(e), e } }, { key: "insertBefore", value: function(e, t, n) { e.insertBefore(n, t) } }, { key: "insertAllBefore", value: function(e, t, n) { n.forEach((function(n) { return e.insertBefore(n, t) })) } }, { key: "insertAfter", value: function(e, t, n) { e.insertBefore(n, t.nextSibling) } }, { key: "setInnerHTML", value: function(e, t) { e.innerHTML = t } }, { key: "getText", value: function(e) { return e.textContent } }, { key: "setText", value: function(e, t) { e.textContent = t } }, { key: "getValue", value: function(e) { return e.value } }, { key: "setValue", value: function(e, t) { e.value = t } }, { key: "getChecked", value: function(e) { return e.checked } }, { key: "setChecked", value: function(e, t) { e.checked = t } }, { key: "createComment", value: function(e) { return this.getDefaultDocument().createComment(e) } }, { key: "createTemplate", value: function(e) { var t = this.getDefaultDocument().createElement("template"); return t.innerHTML = e, t } }, { key: "createElement", value: function(e, t) { return (t = t || this.getDefaultDocument()).createElement(e) } }, { key: "createElementNS", value: function(e, t, n) { return (n = n || this.getDefaultDocument()).createElementNS(e, t) } }, { key: "createTextNode", value: function(e, t) { return (t = t || this.getDefaultDocument()).createTextNode(e) } }, { key: "createScriptTag", value: function(e, t, n) { var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT"); return r.setAttribute(e, t), r } }, { key: "createStyleElement", value: function(e, t) { var n = (t = t || this.getDefaultDocument()).createElement("style"); return this.appendChild(n, this.createTextNode(e, t)), n } }, { key: "createShadowRoot", value: function(e) { return e.createShadowRoot() } }, { key: "getShadowRoot", value: function(e) { return e.shadowRoot } }, { key: "getHost", value: function(e) { return e.host } }, { key: "clone", value: function(e) { return e.cloneNode(!0) } }, { key: "getElementsByClassName", value: function(e, t) { return e.getElementsByClassName(t) } }, { key: "getElementsByTagName", value: function(e, t) { return e.getElementsByTagName(t) } }, { key: "classList", value: function(e) { return Array.prototype.slice.call(e.classList, 0) } }, { key: "addClass", value: function(e, t) { e.classList.add(t) } }, { key: "removeClass", value: function(e, t) { e.classList.remove(t) } }, { key: "hasClass", value: function(e, t) { return e.classList.contains(t) } }, { key: "setStyle", value: function(e, t, n) { e.style[t] = n } }, { key: "removeStyle", value: function(e, t) { e.style[t] = "" } }, { key: "getStyle", value: function(e, t) { return e.style[t] } }, { key: "hasStyle", value: function(e, t, n) { var r = this.getStyle(e, t) || ""; return n ? r == n : r.length > 0 } }, { key: "tagName", value: function(e) { return e.tagName } }, { key: "attributeMap", value: function(e) { for (var t = new Map, n = e.attributes, r = 0; r < n.length; r++) { var i = n.item(r);
                                t.set(i.name, i.value) } return t } }, { key: "hasAttribute", value: function(e, t) { return e.hasAttribute(t) } }, { key: "hasAttributeNS", value: function(e, t, n) { return e.hasAttributeNS(t, n) } }, { key: "getAttribute", value: function(e, t) { return e.getAttribute(t) } }, { key: "getAttributeNS", value: function(e, t, n) { return e.getAttributeNS(t, n) } }, { key: "setAttribute", value: function(e, t, n) { e.setAttribute(t, n) } }, { key: "setAttributeNS", value: function(e, t, n, r) { e.setAttributeNS(t, n, r) } }, { key: "removeAttribute", value: function(e, t) { e.removeAttribute(t) } }, { key: "removeAttributeNS", value: function(e, t, n) { e.removeAttributeNS(t, n) } }, { key: "templateAwareRoot", value: function(e) { return this.isTemplateElement(e) ? this.content(e) : e } }, { key: "createHtmlDocument", value: function() { return document.implementation.createHTMLDocument("fakeTitle") } }, { key: "getDefaultDocument", value: function() { return document } }, { key: "getBoundingClientRect", value: function(e) { try { return e.getBoundingClientRect() } catch (t) { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } } }, { key: "getTitle", value: function(e) { return e.title } }, { key: "setTitle", value: function(e, t) { e.title = t || "" } }, { key: "elementMatches", value: function(e, t) { return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t)) } }, { key: "isTemplateElement", value: function(e) { return this.isElementNode(e) && "TEMPLATE" === e.nodeName } }, { key: "isTextNode", value: function(e) { return e.nodeType === Node.TEXT_NODE } }, { key: "isCommentNode", value: function(e) { return e.nodeType === Node.COMMENT_NODE } }, { key: "isElementNode", value: function(e) { return e.nodeType === Node.ELEMENT_NODE } }, { key: "hasShadowRoot", value: function(e) { return null != e.shadowRoot && e instanceof HTMLElement } }, { key: "isShadowRoot", value: function(e) { return e instanceof DocumentFragment } }, { key: "importIntoDoc", value: function(e) { return document.importNode(this.templateAwareRoot(e), !0) } }, { key: "adoptNode", value: function(e) { return document.adoptNode(e) } }, { key: "getHref", value: function(e) { return e.getAttribute("href") } }, { key: "getEventKey", value: function(e) { var t = e.key; if (null == t) { if (null == (t = e.keyIdentifier)) return "Unidentified";
                                t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && zs.hasOwnProperty(t) && (t = zs[t])) } return Hs[t] || t } }, { key: "getGlobalEventTarget", value: function(e, t) { return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null } }, { key: "getHistory", value: function() { return window.history } }, { key: "getLocation", value: function() { return window.location } }, { key: "getBaseHref", value: function(e) { var t, n = Zs || (Zs = document.querySelector("base")) ? Zs.getAttribute("href") : null; return null == n ? null : (t = n, js || (js = document.createElement("a")), js.setAttribute("href", t), "/" === js.pathname.charAt(0) ? js.pathname : "/" + js.pathname) } }, { key: "resetBaseElement", value: function() { Zs = null } }, { key: "getUserAgent", value: function() { return window.navigator.userAgent } }, { key: "setData", value: function(e, t, n) { this.setAttribute(e, "data-" + t, n) } }, { key: "getData", value: function(e, t) { return this.getAttribute(e, "data-" + t) } }, { key: "getComputedStyle", value: function(e) {
                            function t(t) { return e.apply(this, arguments) } return t.toString = function() { return e.toString() }, t }((function(e) { return getComputedStyle(e) })) }, { key: "supportsWebAnimation", value: function() { return "function" == typeof Element.prototype.animate } }, { key: "performanceNow", value: function() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() } }, { key: "supportsCookies", value: function() { return !0 } }, { key: "getCookie", value: function(e) { return function(e, t) { t = encodeURIComponent(t); var n = !0,
                                    r = !1,
                                    i = void 0; try { for (var o, a = e.split(";")[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { var l = o.value,
                                            s = l.indexOf("="),
                                            u = _slicedToArray(-1 == s ? [l, ""] : [l.slice(0, s), l.slice(s + 1)], 2),
                                            c = u[0],
                                            h = u[1]; if (c.trim() === t) return decodeURIComponent(h) } } catch (d) { r = !0, i = d } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } } return null }(document.cookie, e) } }, { key: "setCookie", value: function(e, t) { document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) } }, { key: "attrToPropMap", get: function() { return Vs } }], [{ key: "makeCurrent", value: function() { var e;
                            e = new t, Us || (Us = e) } }]), t }(Fs),
                Zs = null;

            function Ws() { return !!window.history.pushState } var Gs = new Pe("TRANSITION_ID"),
                Qs = [{ provide: Ni, useFactory: function(e, t, n) { return function() { n.get(Mi).donePromise.then((function() { var n = Ls();
                                Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter((function(t) { return n.getAttribute(t, "ng-transition") === e })).forEach((function(e) { return n.remove(e) })) })) } }, deps: [Gs, Ll, Mt], multi: !0 }],
                $s = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "addToWindow", value: function(e) { Te.getAngularTestability = function(t) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    r = e.findTestabilityInTree(t, n); if (null == r) throw new Error("Could not find testability for element."); return r }, Te.getAllAngularTestabilities = function() { return e.getAllTestabilities() }, Te.getAllAngularRootElements = function() { return e.getAllRootElements() }, Te.frameworkStabilizers || (Te.frameworkStabilizers = []), Te.frameworkStabilizers.push((function(e) { var t = Te.getAllAngularTestabilities(),
                                    n = t.length,
                                    r = !1,
                                    i = function(t) { r = r || t, 0 == --n && e(r) };
                                t.forEach((function(e) { e.whenStable(i) })) })) } }, { key: "findTestabilityInTree", value: function(e, t, n) { if (null == t) return null; var r = e.getTestability(t); return null != r ? r : n ? Ls().isShadowRoot(t) ? this.findTestabilityInTree(e, Ls().getHost(t), !0) : this.findTestabilityInTree(e, Ls().parentElement(t), !0) : null } }], [{ key: "init", value: function() { var t;
                            t = new e, yo = t } }]), e }();

            function Ks(e, t) { "undefined" != typeof COMPILED && COMPILED || ((Te.ng = Te.ng || {})[e] = t) } var Js = { ApplicationRef: Eo, NgZone: ao };

            function Ys(e) { return Lo(e) } var Xs = new Pe("EventManagerPlugins"),
                eu = function() {
                    function e(t, n) { var r = this;
                        _classCallCheck(this, e), this._zone = n, this._eventNameToPlugin = new Map, t.forEach((function(e) { return e.manager = r })), this._plugins = t.slice().reverse() } return _createClass(e, [{ key: "addEventListener", value: function(e, t, n) { return this._findPluginFor(t).addEventListener(e, t, n) } }, { key: "addGlobalEventListener", value: function(e, t, n) { return this._findPluginFor(t).addGlobalEventListener(e, t, n) } }, { key: "getZone", value: function() { return this._zone } }, { key: "_findPluginFor", value: function(e) { var t = this._eventNameToPlugin.get(e); if (t) return t; for (var n = this._plugins, r = 0; r < n.length; r++) { var i = n[r]; if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i } throw new Error("No event manager plugin found for event ".concat(e)) } }]), e }(),
                tu = function() {
                    function e(t) { _classCallCheck(this, e), this._doc = t } return _createClass(e, [{ key: "addGlobalEventListener", value: function(e, t, n) { var r = Ls().getGlobalEventTarget(this._doc, e); if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(t)); return this.addEventListener(r, t, n) } }]), e }(),
                nu = function() {
                    function e() { _classCallCheck(this, e), this._stylesSet = new Set } return _createClass(e, [{ key: "addStyles", value: function(e) { var t = this,
                                n = new Set;
                            e.forEach((function(e) { t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e)) })), this.onStylesAdded(n) } }, { key: "onStylesAdded", value: function(e) {} }, { key: "getAllStyles", value: function() { return Array.from(this._stylesSet) } }]), e }(),
                ru = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n } return _inherits(t, e), _createClass(t, [{ key: "_addStylesToHost", value: function(e, t) { var n = this;
                            e.forEach((function(e) { var r = n._doc.createElement("style");
                                r.textContent = e, n._styleNodes.add(t.appendChild(r)) })) } }, { key: "addHost", value: function(e) { this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e) } }, { key: "removeHost", value: function(e) { this._hostNodes.delete(e) } }, { key: "onStylesAdded", value: function(e) { var t = this;
                            this._hostNodes.forEach((function(n) { return t._addStylesToHost(e, n) })) } }, { key: "ngOnDestroy", value: function() { this._styleNodes.forEach((function(e) { return Ls().remove(e) })) } }]), t }(nu),
                iu = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
                ou = /%COMP%/g,
                au = "_nghost-%COMP%",
                lu = "_ngcontent-%COMP%";

            function su(e, t, n) { for (var r = 0; r < t.length; r++) { var i = t[r];
                    Array.isArray(i) ? su(e, i, n) : (i = i.replace(ou, e), n.push(i)) } return n }

            function uu(e) { return function(t) {!1 === e(t) && (t.preventDefault(), t.returnValue = !1) } } var cu = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.eventManager = t, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new hu(t) } return _createClass(e, [{ key: "createRenderer", value: function(e, t) { if (!e || !t) return this.defaultRenderer; switch (t.encapsulation) {
                                case Ze.Emulated:
                                    var n = this.rendererByCompId.get(t.id); return n || (n = new pu(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                                case Ze.Native:
                                case Ze.ShadowDom:
                                    return new vu(this.eventManager, this.sharedStylesHost, e, t);
                                default:
                                    if (!this.rendererByCompId.has(t.id)) { var r = su(t.id, t.styles, []);
                                        this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer) } return this.defaultRenderer } } }, { key: "begin", value: function() {} }, { key: "end", value: function() {} }]), e }(),
                hu = function() {
                    function e(t) { _classCallCheck(this, e), this.eventManager = t, this.data = Object.create(null) } return _createClass(e, [{ key: "destroy", value: function() {} }, { key: "createElement", value: function(e, t) { return t ? document.createElementNS(iu[t] || t, e) : document.createElement(e) } }, { key: "createComment", value: function(e) { return document.createComment(e) } }, { key: "createText", value: function(e) { return document.createTextNode(e) } }, { key: "appendChild", value: function(e, t) { e.appendChild(t) } }, { key: "insertBefore", value: function(e, t, n) { e && e.insertBefore(t, n) } }, { key: "removeChild", value: function(e, t) { e && e.removeChild(t) } }, { key: "selectRootElement", value: function(e, t) { var n = "string" == typeof e ? document.querySelector(e) : e; if (!n) throw new Error('The selector "'.concat(e, '" did not match any elements')); return t || (n.textContent = ""), n } }, { key: "parentNode", value: function(e) { return e.parentNode } }, { key: "nextSibling", value: function(e) { return e.nextSibling } }, { key: "setAttribute", value: function(e, t, n, r) { if (r) { t = r + ":" + t; var i = iu[r];
                                i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n) } else e.setAttribute(t, n) } }, { key: "removeAttribute", value: function(e, t, n) { if (n) { var r = iu[n];
                                r ? e.removeAttributeNS(r, t) : e.removeAttribute("".concat(n, ":").concat(t)) } else e.removeAttribute(t) } }, { key: "addClass", value: function(e, t) { e.classList.add(t) } }, { key: "removeClass", value: function(e, t) { e.classList.remove(t) } }, { key: "setStyle", value: function(e, t, n, r) { r & dn.DashCase ? e.style.setProperty(t, n, r & dn.Important ? "important" : "") : e.style[t] = n } }, { key: "removeStyle", value: function(e, t, n) { n & dn.DashCase ? e.style.removeProperty(t) : e.style[t] = "" } }, { key: "setProperty", value: function(e, t, n) { fu(t, "property"), e[t] = n } }, { key: "setValue", value: function(e, t) { e.nodeValue = t } }, { key: "listen", value: function(e, t, n) { return fu(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, uu(n)) : this.eventManager.addEventListener(e, t, uu(n)) } }]), e }(),
                du = "@".charCodeAt(0);

            function fu(e, t) { if (e.charCodeAt(0) === du) throw new Error("Found the synthetic ".concat(t, " ").concat(e, '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')) } var pu = function(e) {
                    function t(e, n, r, i) { var o;
                        _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).component = r; var a = su(i + "-" + r.id, r.styles, []); return n.addStyles(a), o.contentAttr = lu.replace(ou, i + "-" + r.id), o.hostAttr = au.replace(ou, i + "-" + r.id), o } return _inherits(t, e), _createClass(t, [{ key: "applyToHost", value: function(e) { _get(_getPrototypeOf(t.prototype), "setAttribute", this).call(this, e, this.hostAttr, "") } }, { key: "createElement", value: function(e, n) { var r = _get(_getPrototypeOf(t.prototype), "createElement", this).call(this, e, n); return _get(_getPrototypeOf(t.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r } }]), t }(hu),
                vu = function(e) {
                    function t(e, n, r, i) { var o;
                        _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).sharedStylesHost = n, o.hostEl = r, o.component = i, o.shadowRoot = i.encapsulation === Ze.ShadowDom ? r.attachShadow({ mode: "open" }) : r.createShadowRoot(), o.sharedStylesHost.addHost(o.shadowRoot); for (var a = su(i.id, i.styles, []), l = 0; l < a.length; l++) { var s = document.createElement("style");
                            s.textContent = a[l], o.shadowRoot.appendChild(s) } return o } return _inherits(t, e), _createClass(t, [{ key: "nodeOrShadowRoot", value: function(e) { return e === this.hostEl ? this.shadowRoot : e } }, { key: "destroy", value: function() { this.sharedStylesHost.removeHost(this.shadowRoot) } }, { key: "appendChild", value: function(e, n) { return _get(_getPrototypeOf(t.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(e), n) } }, { key: "insertBefore", value: function(e, n, r) { return _get(_getPrototypeOf(t.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(e), n, r) } }, { key: "removeChild", value: function(e, n) { return _get(_getPrototypeOf(t.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(e), n) } }, { key: "parentNode", value: function(e) { return this.nodeOrShadowRoot(_get(_getPrototypeOf(t.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(e))) } }]), t }(hu),
                gu = "undefined" != typeof Zone && Zone.__symbol__ || function(e) { return "__zone_symbol__" + e },
                yu = gu("addEventListener"),
                mu = gu("removeEventListener"),
                _u = {},
                ku = "__zone_symbol__propagationStopped",
                Cu = function() { var e = "undefined" != typeof Zone && Zone[gu("BLACK_LISTED_EVENTS")]; if (e) { var t = {}; return e.forEach((function(e) { t[e] = e })), t } }(),
                wu = function(e) { return !!Cu && Cu.hasOwnProperty(e) },
                bu = function(e) { var t = _u[e.type]; if (t) { var n = this[t]; if (n) { var r = [e]; if (1 === n.length) { var i = n[0]; return i.zone !== Zone.current ? i.zone.run(i.handler, this, r) : i.handler.apply(this, r) } for (var o = n.slice(), a = 0; a < o.length && !0 !== e[ku]; a++) { var l = o[a];
                                l.zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r) } } } },
                xu = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).ngZone = n, r && Fl(r) || i.patchEvent(), i } return _inherits(t, e), _createClass(t, [{ key: "patchEvent", value: function() { if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) { var e = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                                Event.prototype.stopImmediatePropagation = function() { this && (this[ku] = !0), e && e.apply(this, arguments) } } } }, { key: "supports", value: function(e) { return !0 } }, { key: "addEventListener", value: function(e, t, n) { var r = this,
                                i = n; if (!e[yu] || ao.isInAngularZone() && !wu(t)) e.addEventListener(t, i, !1);
                            else { var o = _u[t];
                                o || (o = _u[t] = gu("ANGULAR" + t + "FALSE")); var a = e[o],
                                    l = a && a.length > 0;
                                a || (a = e[o] = []); var s = wu(t) ? Zone.root : Zone.current; if (0 === a.length) a.push({ zone: s, handler: i });
                                else { for (var u = !1, c = 0; c < a.length; c++)
                                        if (a[c].handler === i) { u = !0; break }
                                    u || a.push({ zone: s, handler: i }) }
                                l || e[yu](t, bu, !1) } return function() { return r.removeEventListener(e, t, i) } } }, { key: "removeEventListener", value: function(e, t, n) { var r = e[mu]; if (!r) return e.removeEventListener.apply(e, [t, n, !1]); var i = _u[t],
                                o = i && e[i]; if (!o) return e.removeEventListener.apply(e, [t, n, !1]); for (var a = !1, l = 0; l < o.length; l++)
                                if (o[l].handler === n) { a = !0, o.splice(l, 1); break }
                            a ? 0 === o.length && r.apply(e, [t, bu, !1]) : e.removeEventListener.apply(e, [t, n, !1]) } }]), t }(tu),
                Su = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 },
                Eu = new Pe("HammerGestureConfig"),
                Tu = new Pe("HammerLoader"),
                Pu = function() {
                    function e() { _classCallCheck(this, e), this.events = [], this.overrides = {} } return _createClass(e, [{ key: "buildHammer", value: function(e) { var t = new Hammer(e, this.options); for (var n in t.get("pinch").set({ enable: !0 }), t.get("rotate").set({ enable: !0 }), this.overrides) t.get(n).set(this.overrides[n]); return t } }]), e }(),
                Ou = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)))._config = n, o.console = r, o.loader = i, o } return _inherits(t, e), _createClass(t, [{ key: "supports", value: function(e) { return !(!Su.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader && (this.console.warn('The "'.concat(e, '" event cannot be bound because Hammer.JS is not ') + "loaded and no custom loader has been specified."), 1)) } }, { key: "addEventListener", value: function(e, t, n) { var r = this,
                                i = this.manager.getZone(); if (t = t.toLowerCase(), !window.Hammer && this.loader) { var o = !1,
                                    a = function() { o = !0 }; return this.loader().then((function() { if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(a = function() {});
                                        o || (a = r.addEventListener(e, t, n)) })).catch((function() { r.console.warn('The "'.concat(t, '" event cannot be bound because the custom ') + "Hammer.JS loader failed."), a = function() {} })),
                                    function() { a() } } return i.runOutsideAngular((function() { var o = r._config.buildHammer(e),
                                    a = function(e) { i.runGuarded((function() { n(e) })) }; return o.on(t, a),
                                    function() { o.off(t, a), "function" == typeof o.destroy && o.destroy() } })) } }, { key: "isCustomEvent", value: function(e) { return this._config.events.indexOf(e) > -1 } }]), t }(tu),
                Ru = ["alt", "control", "meta", "shift"],
                Iu = { alt: function(e) { return e.altKey }, control: function(e) { return e.ctrlKey }, meta: function(e) { return e.metaKey }, shift: function(e) { return e.shiftKey } },
                Au = function(e) {
                    function t(e) { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)) } return _inherits(t, e), _createClass(t, [{ key: "supports", value: function(e) { return null != t.parseEventName(e) } }, { key: "addEventListener", value: function(e, n, r) { var i = t.parseEventName(n),
                                o = t.eventCallback(i.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular((function() { return Ls().onAndCancel(e, i.domEventName, o) })) } }], [{ key: "parseEventName", value: function(e) { var n = e.toLowerCase().split("."),
                                r = n.shift(); if (0 === n.length || "keydown" !== r && "keyup" !== r) return null; var i = t._normalizeKey(n.pop()),
                                o = ""; if (Ru.forEach((function(e) { var t = n.indexOf(e);
                                    t > -1 && (n.splice(t, 1), o += e + ".") })), o += i, 0 != n.length || 0 === i.length) return null; var a = {}; return a.domEventName = r, a.fullKey = o, a } }, { key: "getEventFullKey", value: function(e) { var t = "",
                                n = Ls().getEventKey(e); return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Ru.forEach((function(r) { r != n && (0, Iu[r])(e) && (t += r + ".") })), t += n } }, { key: "eventCallback", value: function(e, n, r) { return function(i) { t.getEventFullKey(i) === e && r.runGuarded((function() { return n(i) })) } } }, { key: "_normalizeKey", value: function(e) { switch (e) {
                                case "esc":
                                    return "escape";
                                default:
                                    return e } } }]), t }(tu),
                Nu = function e() { _classCallCheck(this, e) },
                Mu = function(e) {
                    function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n } return _inherits(t, e), _createClass(t, [{ key: "sanitize", value: function(e, t) { if (null == t) return null; switch (e) {
                                case xt.NONE:
                                    return t;
                                case xt.HTML:
                                    return t instanceof Uu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), function(e, t) { var n = null; try { ut = ut || new rt(e); var r = t ? String(t) : "";
                                            n = ut.getInertBodyElement(r); var i = 5,
                                                o = r;
                                            do { if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
                                                i--, r = o, o = n.innerHTML, n = ut.getInertBodyElement(r) } while (r !== o); var a = new _t,
                                                l = a.sanitizeChildren(bt(n) || n); return nt() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), l } finally { if (n)
                                                for (var s = bt(n) || n; s.firstChild;) s.removeChild(s.firstChild) } }(this._doc, String(t)));
                                case xt.STYLE:
                                    return t instanceof Lu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), function(e) { if (!(e = String(e).trim())) return ""; var t = e.match(Tt); return t && at(t[1]) === t[1] || e.match(Et) && function(e) { for (var t = !0, n = !0, r = 0; r < e.length; r++) { var i = e.charAt(r); "'" === i && n ? t = !t : '"' === i && t && (n = !n) } return t && n }(e) ? e : (nt() && console.warn("WARNING: sanitizing unsafe style value ".concat(e, " (see http://g.co/ng/security#xss).")), "unsafe") }(t));
                                case xt.SCRIPT:
                                    if (t instanceof ju) return t.changingThisBreaksApplicationSecurity; throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");
                                case xt.URL:
                                    return t instanceof Vu || t instanceof Fu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), at(String(t)));
                                case xt.RESOURCE_URL:
                                    if (t instanceof Vu) return t.changingThisBreaksApplicationSecurity; throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                                default:
                                    throw new Error("Unexpected SecurityContext ".concat(e, " (see http://g.co/ng/security#xss)")) } } }, { key: "checkNotSafeValue", value: function(e, t) { if (e instanceof Du) throw new Error("Required a safe ".concat(t, ", got a ").concat(e.getTypeName(), " ") + "(see http://g.co/ng/security#xss)") } }, { key: "bypassSecurityTrustHtml", value: function(e) { return new Uu(e) } }, { key: "bypassSecurityTrustStyle", value: function(e) { return new Lu(e) } }, { key: "bypassSecurityTrustScript", value: function(e) { return new ju(e) } }, { key: "bypassSecurityTrustUrl", value: function(e) { return new Fu(e) } }, { key: "bypassSecurityTrustResourceUrl", value: function(e) { return new Vu(e) } }]), t }(Nu),
                Du = function() {
                    function e(t) { _classCallCheck(this, e), this.changingThisBreaksApplicationSecurity = t } return _createClass(e, [{ key: "toString", value: function() { return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)" } }]), e }(),
                Uu = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "HTML" } }]), t }(Du),
                Lu = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "Style" } }]), t }(Du),
                ju = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "Script" } }]), t }(Du),
                Fu = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "URL" } }]), t }(Du),
                Vu = function(e) {
                    function t() { return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)) } return _inherits(t, e), _createClass(t, [{ key: "getTypeName", value: function() { return "ResourceURL" } }]), t }(Du),
                Hu = Co(Fo, "browser", [{ provide: Fi, useValue: "browser" }, { provide: ji, useValue: function() { qs.makeCurrent(), $s.init() }, multi: !0 }, { provide: vl, useClass: function(e) {
                        function t(e) { var n; return _classCallCheck(this, t), (n = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._doc = e, n._init(), n } return _inherits(t, e), _createClass(t, [{ key: "_init", value: function() { this.location = Ls().getLocation(), this._history = Ls().getHistory() } }, { key: "getBaseHrefFromDOM", value: function() { return Ls().getBaseHref(this._doc) } }, { key: "onPopState", value: function(e) { Ls().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1) } }, { key: "onHashChange", value: function(e) { Ls().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1) } }, { key: "pushState", value: function(e, t, n) { Ws() ? this._history.pushState(e, t, n) : this.location.hash = n } }, { key: "replaceState", value: function(e, t, n) { Ws() ? this._history.replaceState(e, t, n) : this.location.hash = n } }, { key: "forward", value: function() { this._history.forward() } }, { key: "back", value: function() { this._history.back() } }, { key: "getState", value: function() { return this._history.state } }, { key: "href", get: function() { return this.location.href } }, { key: "protocol", get: function() { return this.location.protocol } }, { key: "hostname", get: function() { return this.location.hostname } }, { key: "port", get: function() { return this.location.port } }, { key: "pathname", get: function() { return this.location.pathname }, set: function(e) { this.location.pathname = e } }, { key: "search", get: function() { return this.location.search } }, { key: "hash", get: function() { return this.location.hash } }]), t }(vl), deps: [Ll] }, { provide: Ll, useFactory: function() { return document }, deps: [] }]);

            function zu() { return new Xe } var Bu = function() {
                function e(t) { if (_classCallCheck(this, e), t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") } return _createClass(e, null, [{ key: "withServerTransition", value: function(t) { return { ngModule: e, providers: [{ provide: Di, useValue: t.appId }, { provide: Gs, useExisting: Di }, Qs] } } }]), e }(); "undefined" != typeof window && window; var qu = function() {
                function e() { _classCallCheck(this, e), this.store = {}, this.onSerializeCallbacks = {} } return _createClass(e, [{ key: "get", value: function(e, t) { return void 0 !== this.store[e] ? this.store[e] : t } }, { key: "set", value: function(e, t) { this.store[e] = t } }, { key: "remove", value: function(e) { delete this.store[e] } }, { key: "hasKey", value: function(e) { return this.store.hasOwnProperty(e) } }, { key: "onSerialize", value: function(e, t) { this.onSerializeCallbacks[e] = t } }, { key: "toJson", value: function() { for (var e in this.onSerializeCallbacks)
                            if (this.onSerializeCallbacks.hasOwnProperty(e)) try { this.store[e] = this.onSerializeCallbacks[e]() } catch (t) { console.warn("Exception in onSerialize callback: ", t) }
                            return JSON.stringify(this.store) } }], [{ key: "init", value: function(t) { var n = new e; return n.store = t, n } }]), e }();

            function Zu(e, t) { var n, r, i = e.getElementById(t + "-state"),
                    o = {}; if (i && i.textContent) try { o = JSON.parse((n = i.textContent, r = { "&a;": "&", "&q;": '"', "&s;": "'", "&l;": "<", "&g;": ">" }, n.replace(/&[^;]+;/g, (function(e) { return r[e] })))) } catch (a) { console.warn("Exception while restoring TransferState for app " + t, a) }
                return qu.init(o) } var Wu = function e() { _classCallCheck(this, e) },
                Gu = function e(t, n) { _classCallCheck(this, e), this.id = t, this.url = n },
                Qu = function(e) {
                    function t(e, n) { var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).navigationTrigger = i, r.restoredState = o, r } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), t }(Gu),
                $u = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, i } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')") } }]), t }(Gu),
                Ku = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).reason = r, i } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), t }(Gu),
                Ju = function(e) {
                    function t(e, n, r) { var i; return _classCallCheck(this, t), (i = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).error = r, i } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")") } }]), t }(Gu),
                Yu = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t }(Gu),
                Xu = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t }(Gu),
                ec = function(e) {
                    function t(e, n, r, i, o) { var a; return _classCallCheck(this, t), (a = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, a.state = i, a.shouldActivate = o, a } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")") } }]), t }(Gu),
                tc = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t }(Gu),
                nc = function(e) {
                    function t(e, n, r, i) { var o; return _classCallCheck(this, t), (o = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, n))).urlAfterRedirects = r, o.state = i, o } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), t }(Gu),
                rc = function() {
                    function e(t) { _classCallCheck(this, e), this.route = t } return _createClass(e, [{ key: "toString", value: function() { return "RouteConfigLoadStart(path: ".concat(this.route.path, ")") } }]), e }(),
                ic = function() {
                    function e(t) { _classCallCheck(this, e), this.route = t } return _createClass(e, [{ key: "toString", value: function() { return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")") } }]), e }(),
                oc = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t } return _createClass(e, [{ key: "toString", value: function() { return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e }(),
                ac = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t } return _createClass(e, [{ key: "toString", value: function() { return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e }(),
                lc = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t } return _createClass(e, [{ key: "toString", value: function() { return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e }(),
                sc = function() {
                    function e(t) { _classCallCheck(this, e), this.snapshot = t } return _createClass(e, [{ key: "toString", value: function() { return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), e }(),
                uc = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.routerEvent = t, this.position = n, this.anchor = r } return _createClass(e, [{ key: "toString", value: function() { return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')") } }]), e }(),
                cc = function e() { _classCallCheck(this, e) },
                hc = "primary",
                dc = function() {
                    function e(t) { _classCallCheck(this, e), this.params = t || {} } return _createClass(e, [{ key: "has", value: function(e) { return this.params.hasOwnProperty(e) } }, { key: "get", value: function(e) { if (this.has(e)) { var t = this.params[e]; return Array.isArray(t) ? t[0] : t } return null } }, { key: "getAll", value: function(e) { if (this.has(e)) { var t = this.params[e]; return Array.isArray(t) ? t : [t] } return [] } }, { key: "keys", get: function() { return Object.keys(this.params) } }]), e }();

            function fc(e) { return new dc(e) } var pc = "ngNavigationCancelingError";

            function vc(e) { var t = Error("NavigationCancelingError: " + e); return t[pc] = !0, t }

            function gc(e, t, n) { var r = n.path.split("/"); if (r.length > e.length) return null; if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null; for (var i = {}, o = 0; o < r.length; o++) { var a = r[o],
                        l = e[o]; if (a.startsWith(":")) i[a.substring(1)] = l;
                    else if (a !== l.path) return null } return { consumed: e.slice(0, r.length), posParams: i } } var yc = function e(t, n) { _classCallCheck(this, e), this.routes = t, this.module = n };

            function mc(e) { for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < e.length; n++) { var r = e[n];
                    _c(r, kc(t, r)) } }

            function _c(e, t) { if (!e) throw new Error("\n      Invalid configuration of route '".concat(t, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ")); if (Array.isArray(e)) throw new Error("Invalid configuration of route '".concat(t, "': Array cannot be specified")); if (!e.component && !e.children && !e.loadChildren && e.outlet && e.outlet !== hc) throw new Error("Invalid configuration of route '".concat(t, "': a componentless route without children or loadChildren cannot have a named outlet set")); if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and children cannot be used together")); if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and loadChildren cannot be used together")); if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': children and loadChildren cannot be used together")); if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and component cannot be used together")); if (e.path && e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': path and matcher cannot be used together")); if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "'. One of the following must be provided: component, redirectTo, children or loadChildren")); if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': routes must have either a path or a matcher specified")); if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(t, "': path cannot start with a slash")); if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(t, '", redirectTo: "').concat(e.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.")); if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '".concat(t, "': pathMatch can only be set to 'prefix' or 'full'"));
                e.children && mc(e.children, t) }

            function kc(e, t) { return t ? e || t.path ? e && !t.path ? "".concat(e, "/") : !e && t.path ? t.path : "".concat(e, "/").concat(t.path) : "" : e }

            function Cc(e) { var t = e.children && e.children.map(Cc),
                    n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e); return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== hc && (n.component = cc), n }

            function wc(e, t) { var n, r = Object.keys(e),
                    i = Object.keys(t); if (!r || !i || r.length != i.length) return !1; for (var o = 0; o < r.length; o++)
                    if (e[n = r[o]] !== t[n]) return !1;
                return !0 }

            function bc(e) { return Array.prototype.concat.apply([], e) }

            function xc(e) { return e.length > 0 ? e[e.length - 1] : null }

            function Sc(e, t) { for (var n in e) e.hasOwnProperty(n) && t(e[n], n) }

            function Ec(e) { return Jt(e) ? e : Kt(e) ? Q(Promise.resolve(e)) : Wl(e) }

            function Tc(e, t, n) { return n ? function(e, t) { return wc(e, t) }(e.queryParams, t.queryParams) && function e(t, n) { if (!Ic(t.segments, n.segments)) return !1; if (t.numberOfChildren !== n.numberOfChildren) return !1; for (var r in n.children) { if (!t.children[r]) return !1; if (!e(t.children[r], n.children[r])) return !1 } return !0 }(e.root, t.root) : function(e, t) { return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((function(n) { return t[n] === e[n] })) }(e.queryParams, t.queryParams) && function e(t, n) { return function t(n, r, i) { if (n.segments.length > i.length) return !!Ic(n.segments.slice(0, i.length), i) && !r.hasChildren(); if (n.segments.length === i.length) { if (!Ic(n.segments, i)) return !1; for (var o in r.children) { if (!n.children[o]) return !1; if (!e(n.children[o], r.children[o])) return !1 } return !0 } var a = i.slice(0, n.segments.length),
                            l = i.slice(n.segments.length); return !!Ic(n.segments, a) && !!n.children[hc] && t(n.children[hc], r, l) }(t, n, n.segments) }(e.root, t.root) } var Pc = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.root = t, this.queryParams = n, this.fragment = r } return _createClass(e, [{ key: "toString", value: function() { return Dc.serialize(this) } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = fc(this.queryParams)), this._queryParamMap } }]), e }(),
                Oc = function() {
                    function e(t, n) { var r = this;
                        _classCallCheck(this, e), this.segments = t, this.children = n, this.parent = null, Sc(n, (function(e, t) { return e.parent = r })) } return _createClass(e, [{ key: "hasChildren", value: function() { return this.numberOfChildren > 0 } }, { key: "toString", value: function() { return Uc(this) } }, { key: "numberOfChildren", get: function() { return Object.keys(this.children).length } }]), e }(),
                Rc = function() {
                    function e(t, n) { _classCallCheck(this, e), this.path = t, this.parameters = n } return _createClass(e, [{ key: "toString", value: function() { return zc(this) } }, { key: "parameterMap", get: function() { return this._parameterMap || (this._parameterMap = fc(this.parameters)), this._parameterMap } }]), e }();

            function Ic(e, t) { return e.length === t.length && e.every((function(e, n) { return e.path === t[n].path })) }

            function Ac(e, t) { var n = []; return Sc(e.children, (function(e, r) { r === hc && (n = n.concat(t(e, r))) })), Sc(e.children, (function(e, r) { r !== hc && (n = n.concat(t(e, r))) })), n } var Nc = function e() { _classCallCheck(this, e) },
                Mc = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "parse", value: function(e) { var t = new Gc(e); return new Pc(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment()) } }, { key: "serialize", value: function(e) { var t, n, r; return "".concat("/".concat(function e(t, n) { if (!t.hasChildren()) return Uc(t); if (n) { var r = t.children[hc] ? e(t.children[hc], !1) : "",
                                        i = []; return Sc(t.children, (function(t, n) { n !== hc && i.push("".concat(n, ":").concat(e(t, !1))) })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r } var o = Ac(t, (function(n, r) { return r === hc ? [e(t.children[hc], !1)] : ["".concat(r, ":").concat(e(n, !1))] })); return "".concat(Uc(t), "/(").concat(o.join("//"), ")") }(e.root, !0)), (n = e.queryParams, r = Object.keys(n).map((function(e) { var t = n[e]; return Array.isArray(t) ? t.map((function(t) { return "".concat(jc(e), "=").concat(jc(t)) })).join("&") : "".concat(jc(e), "=").concat(jc(t)) })), r.length ? "?".concat(r.join("&")) : "")).concat("string" == typeof e.fragment ? "#".concat((t = e.fragment, encodeURI(t))) : "") } }]), e }(),
                Dc = new Mc;

            function Uc(e) { return e.segments.map((function(e) { return zc(e) })).join("/") }

            function Lc(e) { return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",") }

            function jc(e) { return Lc(e).replace(/%3B/gi, ";") }

            function Fc(e) { return Lc(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&") }

            function Vc(e) { return decodeURIComponent(e) }

            function Hc(e) { return Vc(e.replace(/\+/g, "%20")) }

            function zc(e) { return "".concat(Fc(e.path)).concat((t = e.parameters, Object.keys(t).map((function(e) { return ";".concat(Fc(e), "=").concat(Fc(t[e])) })).join(""))); var t } var Bc = /^[^\/()?;=#]+/;

            function qc(e) { var t = e.match(Bc); return t ? t[0] : "" } var Zc = /^[^=?&#]+/,
                Wc = /^[^?&#]+/,
                Gc = function() {
                    function e(t) { _classCallCheck(this, e), this.url = t, this.remaining = t } return _createClass(e, [{ key: "parseRootSegment", value: function() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Oc([], {}) : new Oc([], this.parseChildren()) } }, { key: "parseQueryParams", value: function() { var e = {}; if (this.consumeOptional("?"))
                                do { this.parseQueryParam(e) } while (this.consumeOptional("&")); return e } }, { key: "parseFragment", value: function() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null } }, { key: "parseChildren", value: function() { if ("" === this.remaining) return {};
                            this.consumeOptional("/"); var e = []; for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment()); var t = {};
                            this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0)); var n = {}; return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[hc] = new Oc(e, t)), n } }, { key: "parseSegment", value: function() { var e = qc(this.remaining); if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'.")); return this.capture(e), new Rc(Vc(e), this.parseMatrixParams()) } }, { key: "parseMatrixParams", value: function() { for (var e = {}; this.consumeOptional(";");) this.parseParam(e); return e } }, { key: "parseParam", value: function(e) { var t = qc(this.remaining); if (t) { this.capture(t); var n = ""; if (this.consumeOptional("=")) { var r = qc(this.remaining);
                                    r && this.capture(n = r) }
                                e[Vc(t)] = Vc(n) } } }, { key: "parseQueryParam", value: function(e) { var t = function(e) { var t = e.match(Zc); return t ? t[0] : "" }(this.remaining); if (t) { this.capture(t); var n = ""; if (this.consumeOptional("=")) { var r = function(e) { var t = e.match(Wc); return t ? t[0] : "" }(this.remaining);
                                    r && this.capture(n = r) } var i = Hc(t),
                                    o = Hc(n); if (e.hasOwnProperty(i)) { var a = e[i];
                                    Array.isArray(a) || (e[i] = a = [a]), a.push(o) } else e[i] = o } } }, { key: "parseParens", value: function(e) { var t = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) { var n = qc(this.remaining),
                                    r = this.remaining[n.length]; if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'")); var i = void 0;
                                n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = hc); var o = this.parseChildren();
                                t[i] = 1 === Object.keys(o).length ? o[hc] : new Oc([], o), this.consumeOptional("//") } return t } }, { key: "peekStartsWith", value: function(e) { return this.remaining.startsWith(e) } }, { key: "consumeOptional", value: function(e) { return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0) } }, { key: "capture", value: function(e) { if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".')) } }]), e }(),
                Qc = function() {
                    function e(t) { _classCallCheck(this, e), this._root = t } return _createClass(e, [{ key: "parent", value: function(e) { var t = this.pathFromRoot(e); return t.length > 1 ? t[t.length - 2] : null } }, { key: "children", value: function(e) { var t = $c(e, this._root); return t ? t.children.map((function(e) { return e.value })) : [] } }, { key: "firstChild", value: function(e) { var t = $c(e, this._root); return t && t.children.length > 0 ? t.children[0].value : null } }, { key: "siblings", value: function(e) { var t = Kc(e, this._root); return t.length < 2 ? [] : t[t.length - 2].children.map((function(e) { return e.value })).filter((function(t) { return t !== e })) } }, { key: "pathFromRoot", value: function(e) { return Kc(e, this._root).map((function(e) { return e.value })) } }, { key: "root", get: function() { return this._root.value } }]), e }();

            function $c(e, t) { if (e === t.value) return t; var n = !0,
                    r = !1,
                    i = void 0; try { for (var o, a = t.children[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { var l = $c(e, o.value); if (l) return l } } catch (s) { r = !0, i = s } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } } return null }

            function Kc(e, t) { if (e === t.value) return [t]; var n = !0,
                    r = !1,
                    i = void 0; try { for (var o, a = t.children[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) { var l = Kc(e, o.value); if (l.length) return l.unshift(t), l } } catch (s) { r = !0, i = s } finally { try { n || null == a.return || a.return() } finally { if (r) throw i } } return [] } var Jc = function() {
                function e(t, n) { _classCallCheck(this, e), this.value = t, this.children = n } return _createClass(e, [{ key: "toString", value: function() { return "TreeNode(".concat(this.value, ")") } }]), e }();

            function Yc(e) { var t = {}; return e && e.children.forEach((function(e) { return t[e.value.outlet] = e })), t } var Xc = function(e) {
                function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e))).snapshot = n, oh(_assertThisInitialized(r), e), r } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return this.snapshot.toString() } }]), t }(Qc);

            function eh(e, t) { var n = function(e, t) { var n = new rh([], {}, {}, "", {}, hc, t, null, e.root, -1, {}); return new ih("", new Jc(n, [])) }(e, t),
                    r = new Gl([new Rc("", {})]),
                    i = new Gl({}),
                    o = new Gl({}),
                    a = new Gl({}),
                    l = new Gl(""),
                    s = new th(r, i, a, l, o, hc, t, n.root); return s.snapshot = n.root, new Xc(new Jc(s, []), n) } var th = function() {
                function e(t, n, r, i, o, a, l, s) { _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = l, this._futureSnapshot = s } return _createClass(e, [{ key: "toString", value: function() { return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")") } }, { key: "routeConfig", get: function() { return this._futureSnapshot.routeConfig } }, { key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = this.params.pipe(q((function(e) { return fc(e) })))), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(q((function(e) { return fc(e) })))), this._queryParamMap } }]), e }();

            function nh(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly",
                    n = e.pathFromRoot,
                    r = 0; if ("always" !== t)
                    for (r = n.length - 1; r >= 1;) { var i = n[r],
                            o = n[r - 1]; if (i.routeConfig && "" === i.routeConfig.path) r--;
                        else { if (o.component) break;
                            r-- } }
                return function(e) { return e.reduce((function(e, t) { return { params: Object.assign({}, e.params, t.params), data: Object.assign({}, e.data, t.data), resolve: Object.assign({}, e.resolve, t._resolvedData) } }), { params: {}, data: {}, resolve: {} }) }(n.slice(r)) } var rh = function() {
                    function e(t, n, r, i, o, a, l, s, u, c, h) { _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = l, this.routeConfig = s, this._urlSegment = u, this._lastPathIndex = c, this._resolve = h } return _createClass(e, [{ key: "toString", value: function() { return "Route(url:'".concat(this.url.map((function(e) { return e.toString() })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')") } }, { key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = fc(this.params)), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = fc(this.queryParams)), this._queryParamMap } }]), e }(),
                ih = function(e) {
                    function t(e, n) { var r; return _classCallCheck(this, t), (r = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, n))).url = e, oh(_assertThisInitialized(r), n), r } return _inherits(t, e), _createClass(t, [{ key: "toString", value: function() { return ah(this._root) } }]), t }(Qc);

            function oh(e, t) { t.value._routerState = e, t.children.forEach((function(t) { return oh(e, t) })) }

            function ah(e) { var t = e.children.length > 0 ? " { ".concat(e.children.map(ah).join(", "), " } ") : ""; return "".concat(e.value).concat(t) }

            function lh(e) { if (e.snapshot) { var t = e.snapshot,
                        n = e._futureSnapshot;
                    e.snapshot = n, wc(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), wc(t.params, n.params) || e.params.next(n.params),
                        function(e, t) { if (e.length !== t.length) return !1; for (var n = 0; n < e.length; ++n)
                                if (!wc(e[n], t[n])) return !1;
                            return !0 }(t.url, n.url) || e.url.next(n.url), wc(t.data, n.data) || e.data.next(n.data) } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data) }

            function sh(e, t) { var n, r; return wc(e.params, t.params) && Ic(n = e.url, r = t.url) && n.every((function(e, t) { return wc(e.parameters, r[t].parameters) })) && !(!e.parent != !t.parent) && (!e.parent || sh(e.parent, t.parent)) }

            function uh(e) { return "object" == typeof e && null != e && !e.outlets && !e.segmentPath }

            function ch(e, t, n, r, i) { var o = {}; return r && Sc(r, (function(e, t) { o[t] = Array.isArray(e) ? e.map((function(e) { return "".concat(e) })) : "".concat(e) })), new Pc(n.root === e ? t : function e(t, n, r) { var i = {}; return Sc(t.children, (function(t, o) { i[o] = t === n ? r : e(t, n, r) })), new Oc(t.segments, i) }(n.root, e, t), o, i) } var hh = function() {
                    function e(t, n, r) { if (_classCallCheck(this, e), this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && uh(r[0])) throw new Error("Root segment cannot have matrix parameters"); var i = r.find((function(e) { return "object" == typeof e && null != e && e.outlets })); if (i && i !== xc(r)) throw new Error("{outlets:{}} has to be the last command") } return _createClass(e, [{ key: "toRoot", value: function() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0] } }]), e }(),
                dh = function e(t, n, r) { _classCallCheck(this, e), this.segmentGroup = t, this.processChildren = n, this.index = r };

            function fh(e) { return "object" == typeof e && null != e && e.outlets ? e.outlets[hc] : "".concat(e) }

            function ph(e, t, n) { if (e || (e = new Oc([], {})), 0 === e.segments.length && e.hasChildren()) return vh(e, t, n); var r = function(e, t, n) { for (var r = 0, i = t, o = { match: !1, pathIndex: 0, commandIndex: 0 }; i < e.segments.length;) { if (r >= n.length) return o; var a = e.segments[i],
                                l = fh(n[r]),
                                s = r < n.length - 1 ? n[r + 1] : null; if (i > 0 && void 0 === l) break; if (l && s && "object" == typeof s && void 0 === s.outlets) { if (!_h(l, s, a)) return o;
                                r += 2 } else { if (!_h(l, {}, a)) return o;
                                r++ }
                            i++ } return { match: !0, pathIndex: i, commandIndex: r } }(e, t, n),
                    i = n.slice(r.commandIndex); if (r.match && r.pathIndex < e.segments.length) { var o = new Oc(e.segments.slice(0, r.pathIndex), {}); return o.children[hc] = new Oc(e.segments.slice(r.pathIndex), e.children), vh(o, 0, i) } return r.match && 0 === i.length ? new Oc(e.segments, {}) : r.match && !e.hasChildren() ? gh(e, t, n) : r.match ? vh(e, 0, i) : gh(e, t, n) }

            function vh(e, t, n) { if (0 === n.length) return new Oc(e.segments, {}); var r = function(e) { return "object" != typeof e[0] ? _defineProperty({}, hc, e) : void 0 === e[0].outlets ? _defineProperty({}, hc, e) : e[0].outlets }(n),
                    i = {}; return Sc(r, (function(n, r) { null !== n && (i[r] = ph(e.children[r], t, n)) })), Sc(e.children, (function(e, t) { void 0 === r[t] && (i[t] = e) })), new Oc(e.segments, i) }

            function gh(e, t, n) { for (var r = e.segments.slice(0, t), i = 0; i < n.length;) { if ("object" == typeof n[i] && void 0 !== n[i].outlets) { var o = yh(n[i].outlets); return new Oc(r, o) } if (0 === i && uh(n[0])) r.push(new Rc(e.segments[t].path, n[0])), i++;
                    else { var a = fh(n[i]),
                            l = i < n.length - 1 ? n[i + 1] : null;
                        a && l && uh(l) ? (r.push(new Rc(a, mh(l))), i += 2) : (r.push(new Rc(a, {})), i++) } } return new Oc(r, {}) }

            function yh(e) { var t = {}; return Sc(e, (function(e, n) { null !== e && (t[n] = gh(new Oc([], {}), 0, e)) })), t }

            function mh(e) { var t = {}; return Sc(e, (function(e, n) { return t[n] = "".concat(e) })), t }

            function _h(e, t, n) { return e == n.path && wc(t, n.parameters) } var kh = function() {
                function e(t, n, r, i) { _classCallCheck(this, e), this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i } return _createClass(e, [{ key: "activate", value: function(e) { var t = this.futureState._root,
                            n = this.currState ? this.currState._root : null;
                        this.deactivateChildRoutes(t, n, e), lh(this.futureState.root), this.activateChildRoutes(t, n, e) } }, { key: "deactivateChildRoutes", value: function(e, t, n) { var r = this,
                            i = Yc(t);
                        e.children.forEach((function(e) { var t = e.value.outlet;
                            r.deactivateRoutes(e, i[t], n), delete i[t] })), Sc(i, (function(e, t) { r.deactivateRouteAndItsChildren(e, n) })) } }, { key: "deactivateRoutes", value: function(e, t, n) { var r = e.value,
                            i = t ? t.value : null; if (r === i)
                            if (r.component) { var o = n.getContext(r.outlet);
                                o && this.deactivateChildRoutes(e, t, o.children) } else this.deactivateChildRoutes(e, t, n);
                        else i && this.deactivateRouteAndItsChildren(t, n) } }, { key: "deactivateRouteAndItsChildren", value: function(e, t) { this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t) } }, { key: "detachAndStoreRouteSubtree", value: function(e, t) { var n = t.getContext(e.value.outlet); if (n && n.outlet) { var r = n.outlet.detach(),
                                i = n.children.onOutletDeactivated();
                            this.routeReuseStrategy.store(e.value.snapshot, { componentRef: r, route: e, contexts: i }) } } }, { key: "deactivateRouteAndOutlet", value: function(e, t) { var n = this,
                            r = t.getContext(e.value.outlet); if (r) { var i = Yc(e),
                                o = e.value.component ? r.children : t;
                            Sc(i, (function(e, t) { return n.deactivateRouteAndItsChildren(e, o) })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()) } } }, { key: "activateChildRoutes", value: function(e, t, n) { var r = this,
                            i = Yc(t);
                        e.children.forEach((function(e) { r.activateRoutes(e, i[e.value.outlet], n), r.forwardEvent(new sc(e.value.snapshot)) })), e.children.length && this.forwardEvent(new ac(e.value.snapshot)) } }, { key: "activateRoutes", value: function(e, t, n) { var r = e.value,
                            i = t ? t.value : null; if (lh(r), r === i)
                            if (r.component) { var o = n.getOrCreateContext(r.outlet);
                                this.activateChildRoutes(e, t, o.children) } else this.activateChildRoutes(e, t, n);
                        else if (r.component) { var a = n.getOrCreateContext(r.outlet); if (this.routeReuseStrategy.shouldAttach(r.snapshot)) { var l = this.routeReuseStrategy.retrieve(r.snapshot);
                                this.routeReuseStrategy.store(r.snapshot, null), a.children.onOutletReAttached(l.contexts), a.attachRef = l.componentRef, a.route = l.route.value, a.outlet && a.outlet.attach(l.componentRef, l.route.value), Ch(l.route) } else { var s = function(e) { for (var t = e.parent; t; t = t.parent) { var n = t.routeConfig; if (n && n._loadedConfig) return n._loadedConfig; if (n && n.component) return null } return null }(r.snapshot),
                                    u = s ? s.module.componentFactoryResolver : null;
                                a.attachRef = null, a.route = r, a.resolver = u, a.outlet && a.outlet.activateWith(r, u), this.activateChildRoutes(e, null, a.children) } } else this.activateChildRoutes(e, null, n) } }]), e }();

            function Ch(e) { lh(e.value), e.children.forEach(Ch) }

            function wh(e) { return "function" == typeof e }

            function bh(e) { return e instanceof Pc } var xh = function e(t) { _classCallCheck(this, e), this.segmentGroup = t || null },
                Sh = function e(t) { _classCallCheck(this, e), this.urlTree = t };

            function Eh(e) { return new b((function(t) { return t.error(new xh(e)) })) }

            function Th(e) { return new b((function(t) { return t.error(new Sh(e)) })) }

            function Ph(e) { return new b((function(t) { return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'"))) })) } var Oh = function() {
                function e(t, n, r, i, o) { _classCallCheck(this, e), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(He) } return _createClass(e, [{ key: "apply", value: function() { var e = this; return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, hc).pipe(q((function(t) { return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment) }))).pipe(ms((function(t) { if (t instanceof Sh) return e.allowRedirects = !1, e.match(t.urlTree); if (t instanceof xh) throw e.noMatchError(t); throw t }))) } }, { key: "match", value: function(e) { var t = this; return this.expandSegmentGroup(this.ngModule, this.config, e.root, hc).pipe(q((function(n) { return t.createUrlTree(n, e.queryParams, e.fragment) }))).pipe(ms((function(e) { if (e instanceof xh) throw t.noMatchError(e); throw e }))) } }, { key: "noMatchError", value: function(e) { return new Error("Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'")) } }, { key: "createUrlTree", value: function(e, t, n) { var r = e.segments.length > 0 ? new Oc([], _defineProperty({}, hc, e)) : e; return new Pc(r, t, n) } }, { key: "expandSegmentGroup", value: function(e, t, n, r) { return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(q((function(e) { return new Oc([], e) }))) : this.expandSegment(e, n, t, n.segments, r, !0) } }, { key: "expandChildren", value: function(e, t, n) { var r = this; return function(n, i) { if (0 === Object.keys(n).length) return Wl({}); var o = [],
                                a = [],
                                l = {}; return Sc(n, (function(n, i) { var s, u, c = (s = i, u = n, r.expandSegmentGroup(e, t, u, s)).pipe(q((function(e) { return l[i] = e })));
                                i === hc ? o.push(c) : a.push(c) })), Wl.apply(null, o.concat(a)).pipe(es(), ys(), q((function() { return l }))) }(n.children) } }, { key: "expandSegment", value: function(e, t, n, r, i, o) { var a = this; return Wl.apply(void 0, _toConsumableArray(n)).pipe(q((function(l) { return a.expandSegmentAgainstRoute(e, t, n, l, r, i, o).pipe(ms((function(e) { if (e instanceof xh) return Wl(null); throw e }))) })), es(), xs((function(e) { return !!e })), ms((function(e, n) { if (e instanceof $l || "EmptyError" === e.name) { if (a.noLeftoversInUrl(t, r, i)) return Wl(new Oc([], {})); throw new xh(t) } throw e }))) } }, { key: "noLeftoversInUrl", value: function(e, t, n) { return 0 === t.length && !e.children[n] } }, { key: "expandSegmentAgainstRoute", value: function(e, t, n, r, i, o, a) { return Nh(r) !== o ? Eh(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) : Eh(t) } }, { key: "expandSegmentAgainstRouteUsingRedirect", value: function(e, t, n, r, i, o) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) } }, { key: "expandWildCardWithParamsAgainstRouteUsingRedirect", value: function(e, t, n, r) { var i = this,
                            o = this.applyRedirectCommands([], n.redirectTo, {}); return n.redirectTo.startsWith("/") ? Th(o) : this.lineralizeSegments(n, o).pipe($((function(n) { var o = new Oc(n, {}); return i.expandSegment(e, o, t, n, r, !1) }))) } }, { key: "expandRegularSegmentAgainstRouteUsingRedirect", value: function(e, t, n, r, i, o) { var a = this,
                            l = Rh(t, r, i),
                            s = l.matched,
                            u = l.consumedSegments,
                            c = l.lastChild,
                            h = l.positionalParamSegments; if (!s) return Eh(t); var d = this.applyRedirectCommands(u, r.redirectTo, h); return r.redirectTo.startsWith("/") ? Th(d) : this.lineralizeSegments(r, d).pipe($((function(r) { return a.expandSegment(e, t, n, r.concat(i.slice(c)), o, !1) }))) } }, { key: "matchSegmentAgainstRoute", value: function(e, t, n, r) { var i = this; if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(q((function(e) { return n._loadedConfig = e, new Oc(r, {}) }))) : Wl(new Oc(r, {})); var o = Rh(t, n, r),
                            a = o.matched,
                            l = o.consumedSegments,
                            s = o.lastChild; if (!a) return Eh(t); var u = r.slice(s); return this.getChildConfig(e, n, r).pipe($((function(e) { var n = e.module,
                                r = e.routes,
                                o = function(e, t, n, r) { return n.length > 0 && function(e, t, n) { return n.some((function(n) { return Ah(e, t, n) && Nh(n) !== hc })) }(e, n, r) ? { segmentGroup: Ih(new Oc(t, function(e, t) { var n = {};
                                            n[hc] = t; var r = !0,
                                                i = !1,
                                                o = void 0; try { for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) { var s = a.value; "" === s.path && Nh(s) !== hc && (n[Nh(s)] = new Oc([], {})) } } catch (u) { i = !0, o = u } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } } return n }(r, new Oc(n, e.children)))), slicedSegments: [] } : 0 === n.length && function(e, t, n) { return n.some((function(n) { return Ah(e, t, n) })) }(e, n, r) ? { segmentGroup: Ih(new Oc(e.segments, function(e, t, n, r) { var i = {},
                                                o = !0,
                                                a = !1,
                                                l = void 0; try { for (var s, u = n[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) { var c = s.value;
                                                    Ah(e, t, c) && !r[Nh(c)] && (i[Nh(c)] = new Oc([], {})) } } catch (h) { a = !0, l = h } finally { try { o || null == u.return || u.return() } finally { if (a) throw l } } return Object.assign({}, r, i) }(e, n, r, e.children))), slicedSegments: n } : { segmentGroup: e, slicedSegments: n } }(t, l, u, r),
                                a = o.segmentGroup,
                                s = o.slicedSegments; return 0 === s.length && a.hasChildren() ? i.expandChildren(n, r, a).pipe(q((function(e) { return new Oc(l, e) }))) : 0 === r.length && 0 === s.length ? Wl(new Oc(l, {})) : i.expandSegment(n, a, r, s, hc, !0).pipe(q((function(e) { return new Oc(l.concat(e.segments), e.children) }))) }))) } }, { key: "getChildConfig", value: function(e, t, n) { var r = this; return t.children ? Wl(new yc(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? Wl(t._loadedConfig) : function(e, t, n) { var r, i = t.canLoad; return i && 0 !== i.length ? Q(i).pipe(q((function(r) { var i, o = e.get(r); if (function(e) { return e && wh(e.canLoad) }(o)) i = o.canLoad(t, n);
                                else { if (!wh(o)) throw new Error("Invalid CanLoad guard");
                                    i = o(t, n) } return Ec(i) }))).pipe(es(), (r = function(e) { return !0 === e }, function(e) { return e.lift(new Ss(r, void 0, e)) })) : Wl(!0) }(e.injector, t, n).pipe($((function(n) { return n ? r.configLoader.load(e.injector, t).pipe(q((function(e) { return t._loadedConfig = e, e }))) : function(e) { return new b((function(t) { return t.error(vc("Cannot load children because the guard of the route \"path: '".concat(e.path, "'\" returned false"))) })) }(t) }))) : Wl(new yc([], e)) } }, { key: "lineralizeSegments", value: function(e, t) { for (var n = [], r = t.root;;) { if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Wl(n); if (r.numberOfChildren > 1 || !r.children[hc]) return Ph(e.redirectTo);
                            r = r.children[hc] } } }, { key: "applyRedirectCommands", value: function(e, t, n) { return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n) } }, { key: "applyRedirectCreatreUrlTree", value: function(e, t, n, r) { var i = this.createSegmentGroup(e, t.root, n, r); return new Pc(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment) } }, { key: "createQueryParams", value: function(e, t) { var n = {}; return Sc(e, (function(e, r) { if ("string" == typeof e && e.startsWith(":")) { var i = e.substring(1);
                                n[r] = t[i] } else n[r] = e })), n } }, { key: "createSegmentGroup", value: function(e, t, n, r) { var i = this,
                            o = this.createSegments(e, t.segments, n, r),
                            a = {}; return Sc(t.children, (function(t, o) { a[o] = i.createSegmentGroup(e, t, n, r) })), new Oc(o, a) } }, { key: "createSegments", value: function(e, t, n, r) { var i = this; return t.map((function(t) { return t.path.startsWith(":") ? i.findPosParam(e, t, r) : i.findOrReturn(t, n) })) } }, { key: "findPosParam", value: function(e, t, n) { var r = n[t.path.substring(1)]; if (!r) throw new Error("Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'.")); return r } }, { key: "findOrReturn", value: function(e, t) { var n = 0,
                            r = !0,
                            i = !1,
                            o = void 0; try { for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) { var s = a.value; if (s.path === e.path) return t.splice(n), s;
                                n++ } } catch (u) { i = !0, o = u } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } } return e } }]), e }();

            function Rh(e, t, n) { if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; var r = (t.matcher || gc)(n, e, t); return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } }

            function Ih(e) { if (1 === e.numberOfChildren && e.children[hc]) { var t = e.children[hc]; return new Oc(e.segments.concat(t.segments), t.children) } return e }

            function Ah(e, t, n) { return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo }

            function Nh(e) { return e.outlet || hc } var Mh = function e(t) { _classCallCheck(this, e), this.path = t, this.route = this.path[this.path.length - 1] },
                Dh = function e(t, n) { _classCallCheck(this, e), this.component = t, this.route = n };

            function Uh(e, t, n) { var r = function(e) { if (!e) return null; for (var t = e.parent; t; t = t.parent) { var n = t.routeConfig; if (n && n._loadedConfig) return n._loadedConfig } return null }(t); return (r ? r.module.injector : n).get(e) }

            function Lh(e, t, n) { var r = Yc(e),
                    i = e.value;
                Sc(r, (function(e, r) { Lh(e, i.component ? t ? t.children.getContext(r) : null : t, n) })), n.canDeactivateChecks.push(new Dh(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i)) } var jh = Symbol("INITIAL_VALUE");

            function Fh() { return Ts((function(e) { return (function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var r = null,
                            i = null; return A(t[t.length - 1]) && (i = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && s(t[0]) && (t = t[0]), G(t, i).lift(new Jl(r)) }).apply(void 0, _toConsumableArray(e.map((function(e) { return e.pipe(Cs(1), function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e) { var n = t[t.length - 1];
                                A(n) ? t.pop() : n = null; var r = t.length; return function() { return es()(Wl.apply(void 0, arguments)) }(1 !== r || n ? r > 0 ? G(t, n) : ql(n) : Zl(t[0]), e) } }(jh)) })))).pipe(Rs((function(e, t) { var n = !1; return t.reduce((function(e, r, i) { if (e !== jh) return e; if (r === jh && (n = !0), !n) { if (!1 === r) return r; if (i === t.length - 1 || bh(r)) return r } return e }), e) }), jh), ts((function(e) { return e !== jh })), q((function(e) { return bh(e) ? e : !0 === e })), Cs(1)) })) }

            function Vh(e, t) { return null !== e && t && t(new lc(e)), Wl(!0) }

            function Hh(e, t) { return null !== e && t && t(new oc(e)), Wl(!0) }

            function zh(e, t, n) { var r = t.routeConfig ? t.routeConfig.canActivate : null; return r && 0 !== r.length ? Wl(r.map((function(r) { return Xl((function() { var i, o = Uh(r, t, n); if (function(e) { return e && wh(e.canActivate) }(o)) i = Ec(o.canActivate(t, e));
                        else { if (!wh(o)) throw new Error("Invalid CanActivate guard");
                            i = Ec(o(t, e)) } return i.pipe(xs()) })) }))).pipe(Fh()) : Wl(!0) }

            function Bh(e, t, n) { var r = t[t.length - 1],
                    i = t.slice(0, t.length - 1).reverse().map((function(e) { return function(e) { var t = e.routeConfig ? e.routeConfig.canActivateChild : null; return t && 0 !== t.length ? { node: e, guards: t } : null }(e) })).filter((function(e) { return null !== e })).map((function(t) { return Xl((function() { return Wl(t.guards.map((function(i) { var o, a = Uh(i, t.node, n); if (function(e) { return e && wh(e.canActivateChild) }(a)) o = Ec(a.canActivateChild(r, e));
                                else { if (!wh(a)) throw new Error("Invalid CanActivateChild guard");
                                    o = Ec(a(r, e)) } return o.pipe(xs()) }))).pipe(Fh()) })) })); return Wl(i).pipe(Fh()) } var qh = function e() { _classCallCheck(this, e) },
                Zh = function() {
                    function e(t, n, r, i, o, a) { _classCallCheck(this, e), this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = a } return _createClass(e, [{ key: "recognize", value: function() { try { var e = Qh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                    t = this.processSegmentGroup(this.config, e, hc),
                                    n = new rh([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, hc, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                    r = new Jc(n, t),
                                    i = new ih(this.url, r); return this.inheritParamsAndData(i._root), Wl(i) } catch (o) { return new b((function(e) { return e.error(o) })) } } }, { key: "inheritParamsAndData", value: function(e) { var t = this,
                                n = e.value,
                                r = nh(n, this.paramsInheritanceStrategy);
                            n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach((function(e) { return t.inheritParamsAndData(e) })) } }, { key: "processSegmentGroup", value: function(e, t, n) { return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n) } }, { key: "processChildren", value: function(e, t) { var n, r = this,
                                i = Ac(t, (function(t, n) { return r.processSegmentGroup(e, t, n) })); return n = {}, i.forEach((function(e) { var t = n[e.value.outlet]; if (t) { var r = t.url.map((function(e) { return e.toString() })).join("/"),
                                        i = e.value.url.map((function(e) { return e.toString() })).join("/"); throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'.")) }
                                n[e.value.outlet] = e.value })), i.sort((function(e, t) { return e.value.outlet === hc ? -1 : t.value.outlet === hc ? 1 : e.value.outlet.localeCompare(t.value.outlet) })), i } }, { key: "processSegment", value: function(e, t, n, r) { var i = !0,
                                o = !1,
                                a = void 0; try { for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) { var u = l.value; try { return this.processSegmentAgainstRoute(u, t, n, r) } catch (c) { if (!(c instanceof qh)) throw c } } } catch (h) { o = !0, a = h } finally { try { i || null == s.return || s.return() } finally { if (o) throw a } } if (this.noLeftoversInUrl(t, n, r)) return []; throw new qh } }, { key: "noLeftoversInUrl", value: function(e, t, n) { return 0 === t.length && !e.children[n] } }, { key: "processSegmentAgainstRoute", value: function(e, t, n, r) { if (e.redirectTo) throw new qh; if ((e.outlet || hc) !== r) throw new qh; var i, o = [],
                                a = []; if ("**" === e.path) { var l = n.length > 0 ? xc(n).parameters : {};
                                i = new rh(n, l, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Jh(e), r, e.component, e, Wh(t), Gh(t) + n.length, Yh(e)) } else { var s = function(e, t, n) { if ("" === t.path) { if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new qh; return { consumedSegments: [], lastChild: 0, parameters: {} } } var r = (t.matcher || gc)(n, e, t); if (!r) throw new qh; var i = {};
                                    Sc(r.posParams, (function(e, t) { i[t] = e.path })); var o = r.consumed.length > 0 ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters) : i; return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o } }(t, e, n);
                                o = s.consumedSegments, a = n.slice(s.lastChild), i = new rh(o, s.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Jh(e), r, e.component, e, Wh(t), Gh(t) + o.length, Yh(e)) } var u = function(e) { return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [] }(e),
                                c = Qh(t, o, a, u, this.relativeLinkResolution),
                                h = c.segmentGroup,
                                d = c.slicedSegments; if (0 === d.length && h.hasChildren()) { var f = this.processChildren(u, h); return [new Jc(i, f)] } if (0 === u.length && 0 === d.length) return [new Jc(i, [])]; var p = this.processSegment(u, h, d, hc); return [new Jc(i, p)] } }]), e }();

            function Wh(e) { for (var t = e; t._sourceSegment;) t = t._sourceSegment; return t }

            function Gh(e) { for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0; return n - 1 }

            function Qh(e, t, n, r, i) { if (n.length > 0 && function(e, t, n) { return n.some((function(n) { return $h(e, t, n) && Kh(n) !== hc })) }(e, n, r)) { var o = new Oc(t, function(e, t, n, r) { var i = {};
                        i[hc] = r, r._sourceSegment = e, r._segmentIndexShift = t.length; var o = !0,
                            a = !1,
                            l = void 0; try { for (var s, u = n[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) { var c = s.value; if ("" === c.path && Kh(c) !== hc) { var h = new Oc([], {});
                                    h._sourceSegment = e, h._segmentIndexShift = t.length, i[Kh(c)] = h } } } catch (d) { a = !0, l = d } finally { try { o || null == u.return || u.return() } finally { if (a) throw l } } return i }(e, t, r, new Oc(n, e.children))); return o._sourceSegment = e, o._segmentIndexShift = t.length, { segmentGroup: o, slicedSegments: [] } } if (0 === n.length && function(e, t, n) { return n.some((function(n) { return $h(e, t, n) })) }(e, n, r)) { var a = new Oc(e.segments, function(e, t, n, r, i, o) { var a = {},
                            l = !0,
                            s = !1,
                            u = void 0; try { for (var c, h = r[Symbol.iterator](); !(l = (c = h.next()).done); l = !0) { var d = c.value; if ($h(e, n, d) && !i[Kh(d)]) { var f = new Oc([], {});
                                    f._sourceSegment = e, f._segmentIndexShift = "legacy" === o ? e.segments.length : t.length, a[Kh(d)] = f } } } catch (p) { s = !0, u = p } finally { try { l || null == h.return || h.return() } finally { if (s) throw u } } return Object.assign({}, i, a) }(e, t, n, r, e.children, i)); return a._sourceSegment = e, a._segmentIndexShift = t.length, { segmentGroup: a, slicedSegments: n } } var l = new Oc(e.segments, e.children); return l._sourceSegment = e, l._segmentIndexShift = t.length, { segmentGroup: l, slicedSegments: n } }

            function $h(e, t, n) { return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo }

            function Kh(e) { return e.outlet || hc }

            function Jh(e) { return e.data || {} }

            function Yh(e) { return e.resolve || {} }

            function Xh(e, t, n, r) { var i = Uh(e, t, r); return Ec(i.resolve ? i.resolve(t, n) : i(t, n)) }

            function ed(e) { return function(t) { return t.pipe(Ts((function(t) { var n = e(t); return n ? Q(n).pipe(q((function() { return t }))) : Q([t]) }))) } } var td = function e() { _classCallCheck(this, e) },
                nd = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "shouldDetach", value: function(e) { return !1 } }, { key: "store", value: function(e, t) {} }, { key: "shouldAttach", value: function(e) { return !1 } }, { key: "retrieve", value: function(e) { return null } }, { key: "shouldReuseRoute", value: function(e, t) { return e.routeConfig === t.routeConfig } }]), e }(),
                rd = new Pe("ROUTES"),
                id = function() {
                    function e(t, n, r, i) { _classCallCheck(this, e), this.loader = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i } return _createClass(e, [{ key: "load", value: function(e, t) { var n = this; return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(q((function(r) { n.onLoadEndListener && n.onLoadEndListener(t); var i = r.create(e); return new yc(bc(i.injector.get(rd)).map(Cc), i) }))) } }, { key: "loadModuleFactory", value: function(e) { var t = this; return "string" == typeof e ? Q(this.loader.load(e)) : Ec(e()).pipe($((function(e) { return e instanceof ze ? Wl(e) : Q(t.compiler.compileModuleAsync(e)) }))) } }]), e }(),
                od = function e() { _classCallCheck(this, e) },
                ad = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "shouldProcessUrl", value: function(e) { return !0 } }, { key: "extract", value: function(e) { return e } }, { key: "merge", value: function(e, t) { return e } }]), e }();

            function ld(e) { throw e }

            function sd(e, t, n) { return t.parse("/") }

            function ud(e, t) { return Wl(null) } var cd = function() {
                    function e(t, n, r, i, o, a, l, s) { var u = this;
                        _classCallCheck(this, e), this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = s, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new R, this.errorHandler = ld, this.malformedUriErrorHandler = sd, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: ud, afterPreactivation: ud }, this.urlHandlingStrategy = new ad, this.routeReuseStrategy = new nd, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(He), this.console = o.get(Hi); var c = o.get(ao);
                        this.isNgZoneEnabled = c instanceof ao, this.resetConfig(s), this.currentUrlTree = new Pc(new Oc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new id(a, l, (function(e) { return u.triggerEvent(new rc(e)) }), (function(e) { return u.triggerEvent(new ic(e)) })), this.routerState = eh(this.currentUrlTree, this.rootComponentType), this.transitions = new Gl({ id: 0, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree), urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree), rawUrl: this.currentUrlTree, extras: {}, resolve: null, reject: null, promise: Promise.resolve(!0), source: "imperative", restoredState: null, currentSnapshot: this.routerState.snapshot, targetSnapshot: null, currentRouterState: this.routerState, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations() } return _createClass(e, [{ key: "setupNavigations", value: function(e) { var t = this,
                                n = this.events; return e.pipe(ts((function(e) { return 0 !== e.id })), q((function(e) { return Object.assign({}, e, { extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl) }) })), Ts((function(e) { var r, i, o, a = !1,
                                    l = !1; return Wl(e).pipe(us((function(e) { t.currentNavigation = { id: e.id, initialUrl: e.currentRawUrl, extractedUrl: e.extractedUrl, trigger: e.source, extras: e.extras, previousNavigation: t.lastSuccessfulNavigation ? Object.assign({}, t.lastSuccessfulNavigation, { previousNavigation: null }) : null } })), Ts((function(e) { var r, i, o, a, l = !t.navigated || e.extractedUrl.toString() !== t.browserUrlTree.toString(); if (("reload" === t.onSameUrlNavigation || l) && t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return Wl(e).pipe(Ts((function(e) { var r = t.transitions.getValue(); return n.next(new Qu(e.id, t.serializeUrl(e.extractedUrl), e.source, e.restoredState)), r !== t.transitions.getValue() ? Bl : [e] })), Ts((function(e) { return Promise.resolve(e) })), (r = t.ngModule.injector, i = t.configLoader, o = t.urlSerializer, a = t.config, function(e) { return e.pipe(Ts((function(e) { return function(e, t, n, r, i) { return new Oh(e, t, n, r, i).apply() }(r, i, o, e.extractedUrl, a).pipe(q((function(t) { return Object.assign({}, e, { urlAfterRedirects: t }) }))) }))) }), us((function(e) { t.currentNavigation = Object.assign({}, t.currentNavigation, { finalUrl: e.urlAfterRedirects }) })), function(e, n, r, i, o) { return function(r) { return r.pipe($((function(r) { return function(e, t, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                                                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy"; return new Zh(e, t, n, r, i, o).recognize() }(e, n, r.urlAfterRedirects, (a = r.urlAfterRedirects, t.serializeUrl(a)), i, o).pipe(q((function(e) { return Object.assign({}, r, { targetSnapshot: e }) }))); var a }))) } }(t.rootComponentType, t.config, 0, t.paramsInheritanceStrategy, t.relativeLinkResolution), us((function(e) { "eager" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects) })), us((function(e) { var r = new Yu(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        n.next(r) }))); if (l && t.rawUrlTree && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) { var s = e.id,
                                            u = e.extractedUrl,
                                            c = e.source,
                                            h = e.restoredState,
                                            d = e.extras,
                                            f = new Qu(s, t.serializeUrl(u), c, h);
                                        n.next(f); var p = eh(u, t.rootComponentType).snapshot; return Wl(Object.assign({}, e, { targetSnapshot: p, urlAfterRedirects: u, extras: Object.assign({}, d, { skipLocationChange: !1, replaceUrl: !1 }) })) } return t.rawUrlTree = e.rawUrl, t.browserUrlTree = e.urlAfterRedirects, e.resolve(null), Bl })), ed((function(e) { var n = e.targetSnapshot,
                                        r = e.id,
                                        i = e.extractedUrl,
                                        o = e.rawUrl,
                                        a = e.extras,
                                        l = a.skipLocationChange,
                                        s = a.replaceUrl; return t.hooks.beforePreactivation(n, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!l, replaceUrl: !!s }) })), us((function(e) { var n = new Xu(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n) })), q((function(e) { return Object.assign({}, e, { guards: (n = e.targetSnapshot, r = e.currentSnapshot, i = t.rootContexts, o = n._root, function e(t, n, r, i) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                a = Yc(n); return t.children.forEach((function(t) {! function(t, n, r, i) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                        a = t.value,
                                                        l = n ? n.value : null,
                                                        s = r ? r.getContext(t.value.outlet) : null; if (l && a.routeConfig === l.routeConfig) { var u = function(e, t, n) { if ("function" == typeof n) return n(e, t); switch (n) {
                                                                case "pathParamsChange":
                                                                    return !Ic(e.url, t.url);
                                                                case "pathParamsOrQueryParamsChange":
                                                                    return !Ic(e.url, t.url) || !wc(e.queryParams, t.queryParams);
                                                                case "always":
                                                                    return !0;
                                                                case "paramsOrQueryParamsChange":
                                                                    return !sh(e, t) || !wc(e.queryParams, t.queryParams);
                                                                case "paramsChange":
                                                                default:
                                                                    return !sh(e, t) } }(l, a, a.routeConfig.runGuardsAndResolvers);
                                                        u ? o.canActivateChecks.push(new Mh(i)) : (a.data = l.data, a._resolvedData = l._resolvedData), e(t, n, a.component ? s ? s.children : null : r, i, o), u && o.canDeactivateChecks.push(new Dh(s && s.outlet && s.outlet.component || null, l)) } else l && Lh(n, s, o), o.canActivateChecks.push(new Mh(i)), e(t, null, a.component ? s ? s.children : null : r, i, o) }(t, a[t.value.outlet], r, i.concat([t.value]), o), delete a[t.value.outlet] })), Sc(a, (function(e, t) { return Lh(e, r.getContext(t), o) })), o }(o, r ? r._root : null, i, [o.value])) }); var n, r, i, o })), (i = t.ngModule.injector, o = function(e) { return t.triggerEvent(e) }, function(e) { return e.pipe($((function(e) { var t = e.targetSnapshot,
                                            n = e.currentSnapshot,
                                            r = e.guards,
                                            a = r.canActivateChecks,
                                            l = r.canDeactivateChecks; return 0 === l.length && 0 === a.length ? Wl(Object.assign({}, e, { guardsResult: !0 })) : function(e, t, n, r) { return Q(e).pipe($((function(e) { return function(e, t, n, r, i) { var o = t && t.routeConfig ? t.routeConfig.canDeactivate : null; return o && 0 !== o.length ? Wl(o.map((function(o) { var a, l = Uh(o, t, i); if (function(e) { return e && wh(e.canDeactivate) }(l)) a = Ec(l.canDeactivate(e, t, n, r));
                                                        else { if (!wh(l)) throw new Error("Invalid CanDeactivate guard");
                                                            a = Ec(l(e, t, n, r)) } return a.pipe(xs()) }))).pipe(Fh()) : Wl(!0) }(e.component, e.route, n, t, r) })), xs((function(e) { return !0 !== e }), !0)) }(l, t, n, i).pipe($((function(e) { return e && "boolean" == typeof e ? function(e, t, n, r) { return Q(t).pipe(Ns((function(t) { return Q([Hh(t.route.parent, r), Vh(t.route, r), Bh(e, t.path, n), zh(e, t.route, n)]).pipe(es(), xs((function(e) { return !0 !== e }), !0)) })), xs((function(e) { return !0 !== e }), !0)) }(t, a, i, o) : Wl(e) })), q((function(t) { return Object.assign({}, e, { guardsResult: t }) }))) }))) }), us((function(e) { if (bh(e.guardsResult)) { var n = vc('Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"')); throw n.url = e.guardsResult, n } })), us((function(e) { var n = new ec(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                                    t.triggerEvent(n) })), ts((function(e) { if (!e.guardsResult) { t.resetUrlToCurrentUrlTree(); var r = new Ku(e.id, t.serializeUrl(e.extractedUrl), ""); return n.next(r), e.resolve(!1), !1 } return !0 })), ed((function(e) { if (e.guards.canActivateChecks.length) return Wl(e).pipe(us((function(e) { var n = new tc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        t.triggerEvent(n) })), function(e, t) { return function(n) { return n.pipe($((function(n) { var r = n.targetSnapshot,
                                                    i = n.guards.canActivateChecks; return i.length ? Q(i).pipe(Ns((function(n) { return function(e, t, n, r) { return function(e, t, n, r) { var i = Object.keys(e); if (0 === i.length) return Wl({}); if (1 === i.length) { var o = i[0]; return Xh(e[o], t, n, r).pipe(q((function(e) { return _defineProperty({}, o, e) }))) } var a = {}; return Q(i).pipe($((function(i) { return Xh(e[i], t, n, r).pipe(q((function(e) { return a[i] = e, e }))) }))).pipe(ys(), q((function() { return a }))) }(e._resolve, e, t, r).pipe(q((function(t) { return e._resolvedData = t, e.data = Object.assign({}, e.data, nh(e, n).resolve), null }))) }(n.route, r, e, t) })), function(e, t) { return arguments.length >= 2 ? function(n) { return k(Rs(e, t), as(1), ps(t))(n) } : function(t) { return k(Rs((function(t, n, r) { return e(t, n, r + 1) })), as(1))(t) } }((function(e, t) { return e })), q((function(e) { return n }))) : Wl(n) }))) } }(t.paramsInheritanceStrategy, t.ngModule.injector), us((function(e) { var n = new nc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                        t.triggerEvent(n) }))) })), ed((function(e) { var n = e.targetSnapshot,
                                        r = e.id,
                                        i = e.extractedUrl,
                                        o = e.rawUrl,
                                        a = e.extras,
                                        l = a.skipLocationChange,
                                        s = a.replaceUrl; return t.hooks.afterPreactivation(n, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!l, replaceUrl: !!s }) })), q((function(e) { var n, r, i, o, a = (n = t.routeReuseStrategy, r = e.targetSnapshot, i = e.currentRouterState, o = function e(t, n, r) { if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) { var i = r.value;
                                            i._futureSnapshot = n.value; var o = function(t, n, r) { return n.children.map((function(n) { var i = !0,
                                                        o = !1,
                                                        a = void 0; try { for (var l, s = r.children[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) { var u = l.value; if (t.shouldReuseRoute(u.value.snapshot, n.value)) return e(t, n, u) } } catch (c) { o = !0, a = c } finally { try { i || null == s.return || s.return() } finally { if (o) throw a } } return e(t, n) })) }(t, n, r); return new Jc(i, o) } var a = t.retrieve(n.value); if (a) { var l = a.route; return function e(t, n) { if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route"); if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = t.value; for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r]) }(n, l), l } var s, u = new th(new Gl((s = n.value).url), new Gl(s.params), new Gl(s.queryParams), new Gl(s.fragment), new Gl(s.data), s.outlet, s.component, s),
                                            c = n.children.map((function(n) { return e(t, n) })); return new Jc(u, c) }(n, r._root, i ? i._root : void 0), new Xc(o, r)); return Object.assign({}, e, { targetRouterState: a }) })), us((function(e) { t.currentUrlTree = e.urlAfterRedirects, t.rawUrlTree = t.urlHandlingStrategy.merge(t.currentUrlTree, e.rawUrl), t.routerState = e.targetRouterState, "deferred" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects) })), function(e, t, n) { return q((function(r) { return new kh(t, r.targetRouterState, r.currentRouterState, n).activate(e), r })) }(t.rootContexts, t.routeReuseStrategy, (function(e) { return t.triggerEvent(e) })), us({ next: function() { a = !0 }, complete: function() { a = !0 } }), (r = function() { if (!a && !l) { t.resetUrlToCurrentUrlTree(); var r = new Ku(e.id, t.serializeUrl(e.extractedUrl), "Navigation ID ".concat(e.id, " is not equal to the current navigation id ").concat(t.navigationId));
                                        n.next(r), e.resolve(!1) }
                                    t.currentNavigation = null }, function(e) { return e.lift(new Ms(r)) }), ms((function(r) { if (l = !0, (s = r) && s[pc]) { var i = bh(r.url);
                                        i || (t.navigated = !0, t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl)); var o = new Ku(e.id, t.serializeUrl(e.extractedUrl), r.message);
                                        n.next(o), e.resolve(!1), i && t.navigateByUrl(r.url) } else { t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl); var a = new Ju(e.id, t.serializeUrl(e.extractedUrl), r);
                                        n.next(a); try { e.resolve(t.errorHandler(r)) } catch (u) { e.reject(u) } } var s; return Bl }))) }))) } }, { key: "resetRootComponentType", value: function(e) { this.rootComponentType = e, this.routerState.root.component = this.rootComponentType } }, { key: "getTransition", value: function() { var e = this.transitions.value; return e.urlAfterRedirects = this.browserUrlTree, e } }, { key: "setTransition", value: function(e) { this.transitions.next(Object.assign({}, this.getTransition(), e)) } }, { key: "initialNavigation", value: function() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }) } }, { key: "setUpLocationChangeListener", value: function() { var e = this;
                            this.locationSubscription || (this.locationSubscription = this.location.subscribe((function(t) { var n = e.parseUrl(t.url),
                                    r = "popstate" === t.type ? "popstate" : "hashchange",
                                    i = t.state && t.state.navigationId ? t.state : null;
                                setTimeout((function() { e.scheduleNavigation(n, r, i, { replaceUrl: !0 }) }), 0) }))) } }, { key: "getCurrentNavigation", value: function() { return this.currentNavigation } }, { key: "triggerEvent", value: function(e) { this.events.next(e) } }, { key: "resetConfig", value: function(e) { mc(e), this.config = e.map(Cc), this.navigated = !1, this.lastSuccessfulId = -1 } }, { key: "ngOnDestroy", value: function() { this.dispose() } }, { key: "dispose", value: function() { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null) } }, { key: "createUrlTree", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.relativeTo,
                                r = t.queryParams,
                                i = t.fragment,
                                o = t.preserveQueryParams,
                                a = t.queryParamsHandling,
                                l = t.preserveFragment;
                            nt() && o && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."); var s = n || this.routerState.root,
                                u = l ? this.currentUrlTree.fragment : i,
                                c = null; if (a) switch (a) {
                                case "merge":
                                    c = Object.assign({}, this.currentUrlTree.queryParams, r); break;
                                case "preserve":
                                    c = this.currentUrlTree.queryParams; break;
                                default:
                                    c = r || null } else c = o ? this.currentUrlTree.queryParams : r || null; return null !== c && (c = this.removeEmptyProps(c)),
                                function(e, t, n, r, i) { if (0 === n.length) return ch(t.root, t.root, t, r, i); var o = function(e) { if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new hh(!0, 0, e); var t = 0,
                                            n = !1,
                                            r = e.reduce((function(e, r, i) { if ("object" == typeof r && null != r) { if (r.outlets) { var o = {}; return Sc(r.outlets, (function(e, t) { o[t] = "string" == typeof e ? e.split("/") : e })), [].concat(_toConsumableArray(e), [{ outlets: o }]) } if (r.segmentPath) return [].concat(_toConsumableArray(e), [r.segmentPath]) } return "string" != typeof r ? [].concat(_toConsumableArray(e), [r]) : 0 === i ? (r.split("/").forEach((function(r, i) { 0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r)) })), e) : [].concat(_toConsumableArray(e), [r]) }), []); return new hh(n, t, r) }(n); if (o.toRoot()) return ch(t.root, new Oc([], {}), t, r, i); var a = function(e, t, n) { if (e.isAbsolute) return new dh(t.root, !0, 0); if (-1 === n.snapshot._lastPathIndex) return new dh(n.snapshot._urlSegment, !0, 0); var r = uh(e.commands[0]) ? 0 : 1; return function(e, t, n) { for (var r = e, i = t, o = n; o > i;) { if (o -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                                    i = r.segments.length } return new dh(r, !1, i - o) }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots) }(o, t, e),
                                        l = a.processChildren ? vh(a.segmentGroup, a.index, o.commands) : ph(a.segmentGroup, a.index, o.commands); return ch(a.segmentGroup, l, t, r, i) }(s, this.currentUrlTree, e, c, u) } }, { key: "navigateByUrl", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 };
                            nt() && this.isNgZoneEnabled && !ao.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"); var n = bh(e) ? e : this.parseUrl(e),
                                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree); return this.scheduleNavigation(r, "imperative", null, t) } }, { key: "navigate", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 }; return function(e) { for (var t = 0; t < e.length; t++) { var n = e[t]; if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(t)) } }(e), this.navigateByUrl(this.createUrlTree(e, t), t) } }, { key: "serializeUrl", value: function(e) { return this.urlSerializer.serialize(e) } }, { key: "parseUrl", value: function(e) { var t; try { t = this.urlSerializer.parse(e) } catch (n) { t = this.malformedUriErrorHandler(n, this.urlSerializer, e) } return t } }, { key: "isActive", value: function(e, t) { if (bh(e)) return Tc(this.currentUrlTree, e, t); var n = this.parseUrl(e); return Tc(this.currentUrlTree, n, t) } }, { key: "removeEmptyProps", value: function(e) { return Object.keys(e).reduce((function(t, n) { var r = e[n]; return null != r && (t[n] = r), t }), {}) } }, { key: "processNavigations", value: function() { var e = this;
                            this.navigations.subscribe((function(t) { e.navigated = !0, e.lastSuccessfulId = t.id, e.events.next(new $u(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(e.currentUrlTree))), e.lastSuccessfulNavigation = e.currentNavigation, e.currentNavigation = null, t.resolve(!0) }), (function(t) { e.console.warn("Unhandled Navigation Error: ") })) } }, { key: "scheduleNavigation", value: function(e, t, n, r) { var i = this.getTransition(); if (i && "imperative" !== t && "imperative" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0); if (i && "hashchange" == t && "popstate" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0); if (i && "popstate" == t && "hashchange" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0); var o = null,
                                a = null,
                                l = new Promise((function(e, t) { o = e, a = t })),
                                s = ++this.navigationId; return this.setTransition({ id: s, source: t, restoredState: n, currentUrlTree: this.currentUrlTree, currentRawUrl: this.rawUrlTree, rawUrl: e, extras: r, resolve: o, reject: a, promise: l, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), l.catch((function(e) { return Promise.reject(e) })) } }, { key: "setBrowserUrl", value: function(e, t, n, r) { var i = this.urlSerializer.serialize(e);
                            r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign({}, r, { navigationId: n })) : this.location.go(i, "", Object.assign({}, r, { navigationId: n })) } }, { key: "resetStateAndUrl", value: function(e, t, n) { this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree() } }, { key: "resetUrlToCurrentUrlTree", value: function() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId }) } }, { key: "url", get: function() { return this.serializeUrl(this.currentUrlTree) } }]), e }(),
                hd = function() {
                    function e(t, n, r) { var i = this;
                        _classCallCheck(this, e), this.router = t, this.route = n, this.locationStrategy = r, this.commands = [], this.subscription = t.events.subscribe((function(e) { e instanceof $u && i.updateTargetUrlAndHref() })) } return _createClass(e, [{ key: "ngOnChanges", value: function(e) { this.updateTargetUrlAndHref() } }, { key: "ngOnDestroy", value: function() { this.subscription.unsubscribe() } }, { key: "onClick", value: function(e, t, n, r) { if (0 !== e || t || n || r) return !0; if ("string" == typeof this.target && "_self" != this.target) return !0; var i = { skipLocationChange: dd(this.skipLocationChange), replaceUrl: dd(this.replaceUrl), state: this.state }; return this.router.navigateByUrl(this.urlTree, i), !1 } }, { key: "updateTargetUrlAndHref", value: function() { this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) } }, { key: "routerLink", set: function(e) { this.commands = null != e ? Array.isArray(e) ? e : [e] : [] } }, { key: "preserveQueryParams", set: function(e) { nt() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e } }, { key: "urlTree", get: function() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: dd(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: dd(this.preserveFragment) }) } }]), e }();

            function dd(e) { return "" === e || !!e } var fd = function e() { _classCallCheck(this, e), this.outlet = null, this.route = null, this.resolver = null, this.children = new pd, this.attachRef = null },
                pd = function() {
                    function e() { _classCallCheck(this, e), this.contexts = new Map } return _createClass(e, [{ key: "onChildOutletCreated", value: function(e, t) { var n = this.getOrCreateContext(e);
                            n.outlet = t, this.contexts.set(e, n) } }, { key: "onChildOutletDestroyed", value: function(e) { var t = this.getContext(e);
                            t && (t.outlet = null) } }, { key: "onOutletDeactivated", value: function() { var e = this.contexts; return this.contexts = new Map, e } }, { key: "onOutletReAttached", value: function(e) { this.contexts = e } }, { key: "getOrCreateContext", value: function(e) { var t = this.getContext(e); return t || (t = new fd, this.contexts.set(e, t)), t } }, { key: "getContext", value: function(e) { return this.contexts.get(e) || null } }]), e }(),
                vd = function() {
                    function e(t, n, r, i, o) { _classCallCheck(this, e), this.parentContexts = t, this.location = n, this.resolver = r, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new Ri, this.deactivateEvents = new Ri, this.name = i || hc, t.onChildOutletCreated(this.name, this) } return _createClass(e, [{ key: "ngOnDestroy", value: function() { this.parentContexts.onChildOutletDestroyed(this.name) } }, { key: "ngOnInit", value: function() { if (!this.activated) { var e = this.parentContexts.getContext(this.name);
                                e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null)) } } }, { key: "detach", value: function() { if (!this.activated) throw new Error("Outlet is not activated");
                            this.location.detach(); var e = this.activated; return this.activated = null, this._activatedRoute = null, e } }, { key: "attach", value: function(e, t) { this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView) } }, { key: "deactivate", value: function() { if (this.activated) { var e = this.component;
                                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e) } } }, { key: "activateWith", value: function(e, t) { if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                            this._activatedRoute = e; var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                                r = this.parentContexts.getOrCreateContext(this.name).children,
                                i = new gd(e, r, this.location.injector);
                            this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance) } }, { key: "isActivated", get: function() { return !!this.activated } }, { key: "component", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this.activated.instance } }, { key: "activatedRoute", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this._activatedRoute } }, { key: "activatedRouteData", get: function() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {} } }]), e }(),
                gd = function() {
                    function e(t, n, r) { _classCallCheck(this, e), this.route = t, this.childContexts = n, this.parent = r } return _createClass(e, [{ key: "get", value: function(e, t) { return e === th ? this.route : e === pd ? this.childContexts : this.parent.get(e, t) } }]), e }(),
                yd = function e() { _classCallCheck(this, e) },
                md = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "preload", value: function(e, t) { return t().pipe(ms((function() { return Wl(null) }))) } }]), e }(),
                _d = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "preload", value: function(e, t) { return Wl(null) } }]), e }(),
                kd = function() {
                    function e(t, n, r, i, o) { _classCallCheck(this, e), this.router = t, this.injector = i, this.preloadingStrategy = o, this.loader = new id(n, r, (function(e) { return t.triggerEvent(new rc(e)) }), (function(e) { return t.triggerEvent(new ic(e)) })) } return _createClass(e, [{ key: "setUpPreloading", value: function() { var e = this;
                            this.subscription = this.router.events.pipe(ts((function(e) { return e instanceof $u })), Ns((function() { return e.preload() }))).subscribe((function() {})) } }, { key: "preload", value: function() { var e = this.injector.get(He); return this.processRoutes(e, this.router.config) } }, { key: "ngOnDestroy", value: function() { this.subscription.unsubscribe() } }, { key: "processRoutes", value: function(e, t) { var n = [],
                                r = !0,
                                i = !1,
                                o = void 0; try { for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) { var s = a.value; if (s.loadChildren && !s.canLoad && s._loadedConfig) { var u = s._loadedConfig;
                                        n.push(this.processRoutes(u.module, u.routes)) } else s.loadChildren && !s.canLoad ? n.push(this.preloadConfig(e, s)) : s.children && n.push(this.processRoutes(e, s.children)) } } catch (c) { i = !0, o = c } finally { try { r || null == l.return || l.return() } finally { if (i) throw o } } return Q(n).pipe(X(), q((function(e) {}))) } }, { key: "preloadConfig", value: function(e, t) { var n = this; return this.preloadingStrategy.preload(t, (function() { return n.loader.load(e.injector, t).pipe($((function(e) { return t._loadedConfig = e, n.processRoutes(e.module, e.routes) }))) })) } }]), e }(),
                Cd = function() {
                    function e(t, n) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _classCallCheck(this, e), this.router = t, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled" } return _createClass(e, [{ key: "init", value: function() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents() } }, { key: "createScrollEvents", value: function() { var e = this; return this.router.events.subscribe((function(t) { t instanceof Qu ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof $u && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment)) })) } }, { key: "consumeScrollEvents", value: function() { var e = this; return this.router.events.subscribe((function(t) { t instanceof uc && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0])) })) } }, { key: "scheduleScrollEvent", value: function(e, t) { this.router.triggerEvent(new uc(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t)) } }, { key: "ngOnDestroy", value: function() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe() } }]), e }(),
                wd = new Pe("ROUTER_CONFIGURATION"),
                bd = new Pe("ROUTER_FORROOT_GUARD"),
                xd = [_l, { provide: Nc, useClass: Mc }, { provide: cd, useFactory: Id, deps: [Eo, Nc, pd, _l, Mt, Po, Ji, rd, wd, [od, new ce],
                        [td, new ce]
                    ] }, pd, { provide: th, useFactory: Ad, deps: [cd] }, { provide: Po, useClass: Io }, kd, _d, md, { provide: wd, useValue: { enableTracing: !1 } }];

            function Sd() { return new ko("Router", cd) } var Ed = function() {
                function e(t, n) { _classCallCheck(this, e) } return _createClass(e, null, [{ key: "forRoot", value: function(t, n) { return { ngModule: e, providers: [xd, Rd(t), { provide: bd, useFactory: Od, deps: [
                                        [cd, new ce, new de]
                                    ] }, { provide: wd, useValue: n || {} }, { provide: yl, useFactory: Pd, deps: [vl, [new ue(ml), new ce], wd] }, { provide: Cd, useFactory: Td, deps: [cd, Hl, wd] }, { provide: yd, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : _d }, { provide: ko, multi: !0, useFactory: Sd },
                                [Nd, { provide: Ni, multi: !0, useFactory: Md, deps: [Nd] }, { provide: Ud, useFactory: Dd, deps: [Nd] }, { provide: Vi, multi: !0, useExisting: Ud }]
                            ] } } }, { key: "forChild", value: function(t) { return { ngModule: e, providers: [Rd(t)] } } }]), e }();

            function Td(e, t, n) { return n.scrollOffset && t.setOffset(n.scrollOffset), new Cd(e, t, n) }

            function Pd(e, t) { return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).useHash ? new Cl(e, t) : new wl(e, t) }

            function Od(e) { if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded" }

            function Rd(e) { return [{ provide: zt, multi: !0, useValue: e }, { provide: rd, multi: !0, useValue: e }] }

            function Id(e, t, n, r, i, o, a, l) { var s = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {},
                    u = arguments.length > 9 ? arguments[9] : void 0,
                    c = arguments.length > 10 ? arguments[10] : void 0,
                    h = new cd(null, t, n, r, i, o, a, bc(l)); if (u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c), s.errorHandler && (h.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (h.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) { var d = Ls();
                    h.events.subscribe((function(e) { d.logGroup("Router Event: ".concat(e.constructor.name)), d.log(e.toString()), d.log(e), d.logGroupEnd() })) } return s.onSameUrlNavigation && (h.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (h.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (h.relativeLinkResolution = s.relativeLinkResolution), h }

            function Ad(e) { return e.routerState.root } var Nd = function() {
                function e(t) { _classCallCheck(this, e), this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new R } return _createClass(e, [{ key: "appInitializer", value: function() { var e = this; return this.injector.get(gl, Promise.resolve(null)).then((function() { var t = null,
                                n = new Promise((function(e) { return t = e })),
                                r = e.injector.get(cd),
                                i = e.injector.get(wd); if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0);
                            else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), t(!0);
                            else { if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                                r.hooks.afterPreactivation = function() { return e.initNavigation ? Wl(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone) }, r.initialNavigation() } return n })) } }, { key: "bootstrapListener", value: function(e) { var t = this.injector.get(wd),
                            n = this.injector.get(kd),
                            r = this.injector.get(Cd),
                            i = this.injector.get(cd),
                            o = this.injector.get(Eo);
                        e === o.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete()) } }, { key: "isLegacyEnabled", value: function(e) { return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation } }, { key: "isLegacyDisabled", value: function(e) { return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation } }]), e }();

            function Md(e) { return e.appInitializer.bind(e) }

            function Dd(e) { return e.bootstrapListener.bind(e) } var Ud = new Pe("Router Initializer"),
                Ld = Jn({ encapsulation: 2, styles: [], data: {} });

            function jd(e) { return la(0, [(e()(), Wo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), li(1, 212992, null, 0, vd, [pd, Nn, on, [8, null], Rt], null, null)], (function(e, t) { e(t, 1, 0) }), null) } var Fd = Lr("ng-component", cc, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "ng-component", [], null, null, null, jd, Ld)), li(1, 49152, null, 0, cc, [], null, null)], null, null) }), {}, {}, []),
                Vd = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "swipe", value: function(e, t) { var n = [e.changedTouches[0].pageX, e.changedTouches[0].pageY],
                                r = (new Date).getTime(); if ("start" === t) this._swipeCoord = n, this._swipeTime = r;
                            else if ("end" === t) { var i = [n[0] - this._swipeCoord[0], n[1] - this._swipeCoord[1]]; if (r - this._swipeTime < 1e3 && Math.abs(i[1]) < Math.abs(i[0]) && Math.abs(i[0]) > 30) return i[0] < 0 ? 1 : -1 } return 0 } }]), e }(),
                Hd = function() {
                    function e(t, n, r, i, o, a, l) { _classCallCheck(this, e), this._swipeService = t, this._renderer = n, this._transferState = r, this._ngZone = i, this.sanitizer = o, this.platform_id = a, this.document = l, this.slideIndex = -1, this.slides = [], this._initial = !0, this._isHidden = !1, this.imageUrls = [], this.height = "100%", this.showArrows = !0, this.disableSwiping = !1, this.autoPlay = !1, this.autoPlayInterval = 3333, this.stopAutoPlayOnSlide = !0, this.autoPlayWaitForLazyLoad = !1, this.backgroundSize = "cover", this.backgroundPosition = "center center", this.backgroundRepeat = "no-repeat", this.showDots = !1, this.dotColor = "#FFF", this.showCaptions = !0, this.captionColor = "#FFF", this.captionBackground = "rgba(0, 0, 0, .35)", this.lazyLoad = !1, this.hideOnNoSlides = !1, this.fullscreen = !1, this.onSlideLeft = new Ri, this.onSlideRight = new Ri, this.onSwipeLeft = new Ri, this.onSwipeRight = new Ri, this.onFullscreenExit = new Ri, this.onIndexChanged = new Ri } return _createClass(e, [{ key: "ngOnInit", value: function() { void 0 !== this.debug && console.warn("[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0") } }, { key: "ngDoCheck", value: function() { this.imageUrls && this.imageUrls.length > 0 ? (!0 === this._initial && (this._urlCache = Array.from(this.imageUrls)), !0 === this._isHidden && (this._renderer.removeStyle(this.container.nativeElement, "display"), this._isHidden = !1), this.setSlides()) : !0 === this.hideOnNoSlides && (this._renderer.setStyle(this.container.nativeElement, "display", "none"), this._isHidden = !0), this.setStyles(), this.handleAutoPlay() } }, { key: "onSlide", value: function(e, t) { this.handleAutoPlay(this.stopAutoPlayOnSlide), this.slide(e, t) } }, { key: "onSwipe", value: function(e, t) { if (!0 !== this.disableSwiping) { var n = this._swipeService.swipe(e, t);
                                0 !== n && this.onSlide(n, !0) } } }, { key: "onClick", value: function(e) { e.preventDefault(); var t = this.slides.length > 0 && this.slides[this.slideIndex];
                            t && t.image.clickAction ? t.image.clickAction() : t && t.image.href && (this.document.location.href = t.image.href) } }, { key: "goToSlide", value: function(e) { var t = this.slideIndex;
                            this.slideIndex = e - 1, this.setSlideIndex(1), this.slides[this.slideIndex].loaded || this.loadRemainingSlides(), this.handleAutoPlay(this.stopAutoPlayOnSlide), this.slideRight(t), this.slides[t].selected = !1, this.slides[this.slideIndex].selected = !0 } }, { key: "getSlideStyle", value: function(e) { var t = this.slides[e]; return t.loaded ? { "background-image": "url(" + t.image.url + ")", "background-size": t.image.backgroundSize || this.backgroundSize, "background-position": t.image.backgroundPosition || this.backgroundPosition, "background-repeat": t.image.backgroundRepeat || this.backgroundRepeat } : { "background-image": void 0, "background-size": void 0, "background-position": void 0, "background-repeat": void 0 } } }, { key: "exitFullScreen", value: function(e) { e.preventDefault(), this.fullscreen = !1, this.onFullscreenExit.emit(!0) } }, { key: "slide", value: function(e, t) { var n = this.slideIndex;
                            this.setSlideIndex(e), this.slides[this.slideIndex].loaded || this.loadRemainingSlides(), 1 === e ? this.slideRight(n, t) : this.slideLeft(n, t), this.slides[n].selected = !1, this.slides[this.slideIndex].selected = !0 } }, { key: "setSlideIndex", value: function(e) { this.slideIndex += e, this.slideIndex < 0 && (this.slideIndex = this.slides.length - 1), this.slideIndex >= this.slides.length && (this.slideIndex = 0), this.onIndexChanged.emit(this.slideIndex) } }, { key: "slideLeft", value: function(e, t) {!0 === t ? this.onSwipeLeft.emit(this.slideIndex) : this.onSlideLeft.emit(this.slideIndex), this.slides[this.getLeftSideIndex(e)].leftSide = !1, this.slides[e].leftSide = !0, this.slides[e].action = "slideOutLeft", this.slides[this.slideIndex].rightSide = !1, this.slides[this.getRightSideIndex()].rightSide = !0, this.slides[this.slideIndex].action = "slideInRight" } }, { key: "slideRight", value: function(e, t) {!0 === t ? this.onSwipeRight.emit(this.slideIndex) : this.onSlideRight.emit(this.slideIndex), this.slides[this.getRightSideIndex(e)].rightSide = !1, this.slides[e].rightSide = !0, this.slides[e].action = "slideOutRight", this.slides[this.slideIndex].leftSide = !1, this.slides[this.getLeftSideIndex()].leftSide = !0, this.slides[this.slideIndex].action = "slideInLeft" } }, { key: "setSlides", value: function() { this.imageUrls && (this.checkCache() || !0 === this._initial) && (this._initial = !1, this._urlCache = Array.from(this.imageUrls), this.slides = [], !0 === this.lazyLoad ? this.buildLazyLoadSlideArray() : this.buildSlideArray()) } }, { key: "buildLazyLoadSlideArray", value: function() { var e = !0,
                                t = !1,
                                n = void 0; try { for (var r, i = this.imageUrls[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) { var o = r.value;
                                    this.slides.push({ image: "string" == typeof o ? { url: null } : { url: null, href: o.href || "" }, action: "", leftSide: !1, rightSide: !1, selected: !1, loaded: !1 }) } } catch (a) { t = !0, n = a } finally { try { e || null == i.return || i.return() } finally { if (t) throw n } }
                            this.slideIndex = 0, this.slides[this.slideIndex].selected = !0, this.loadFirstSlide(), this.onIndexChanged.emit(this.slideIndex) } }, { key: "buildSlideArray", value: function() { var e = !0,
                                t = !1,
                                n = void 0; try { for (var r, i = this.imageUrls[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) { var o = r.value;
                                    this.slides.push({ image: "string" == typeof o ? { url: o } : o, action: "", leftSide: !1, rightSide: !1, selected: !1, loaded: !0 }) } } catch (a) { t = !0, n = a } finally { try { e || null == i.return || i.return() } finally { if (t) throw n } }
                            this.slideIndex = 0, this.slides[this.slideIndex].selected = !0, this.onIndexChanged.emit(this.slideIndex) } }, { key: "loadFirstSlide", value: function() { var e = this,
                                t = this.slideIndex,
                                n = this.imageUrls[t]; if (Fl(this.platform_id)) this.slides[t].image = "string" == typeof n ? { url: n } : n, this.slides[t].loaded = !0, this._transferState.set("firstSlide", this.slides[t]);
                            else { var r = this._transferState.get("firstSlide", null); if (null === r) { var i = new Image;
                                    i.src = "string" == typeof n ? n : n.url, i.addEventListener("load", (function() { e.slides[t].image = "string" == typeof n ? { url: n } : n, e.slides[t].loaded = !0 })) } else this.slides[t] = r, this._transferState.remove("firstSlide") } } }, { key: "loadRemainingSlides", value: function() { for (var e = this, t = function(t) { e.slides[t].loaded || new Promise((function(n) { var r = e.imageUrls[t],
                                            i = new Image;
                                        i.addEventListener("load", (function() { e.slides[t].image = "string" == typeof r ? { url: r } : r, e.slides[t].loaded = !0, n() })), i.src = "string" == typeof r ? r : r.url })) }, n = 0; n < this.slides.length; n++) t(n) } }, { key: "handleAutoPlay", value: function(e) { var t = this;
                            Fl(this.platform_id) || (!0 === e || !1 === this.autoPlay ? this._autoplayIntervalId && (this._ngZone.runOutsideAngular((function() { return clearInterval(t._autoplayIntervalId) })), this._autoplayIntervalId = null) : this._autoplayIntervalId || this._ngZone.runOutsideAngular((function() { t._autoplayIntervalId = setInterval((function() {
                                    (!t.autoPlayWaitForLazyLoad || t.autoPlayWaitForLazyLoad && t.slides[t.slideIndex].loaded) && t._ngZone.run((function() { return t.slide(1) })) }), t.autoPlayInterval) }))) } }, { key: "setStyles", value: function() { this.fullscreen ? (this._renderer.setStyle(this.container.nativeElement, "height", "100%"), this._renderer.setStyle(this.container.nativeElement, "background-color", "white")) : (this._renderer.removeStyle(this.container.nativeElement, "background-color"), this.height && this._renderer.setStyle(this.container.nativeElement, "height", this.height), this.minHeight && this._renderer.setStyle(this.container.nativeElement, "min-height", this.minHeight)), this.arrowSize && (this._renderer.setStyle(this.prevArrow.nativeElement, "height", this.arrowSize), this._renderer.setStyle(this.prevArrow.nativeElement, "width", this.arrowSize), this._renderer.setStyle(this.nextArrow.nativeElement, "height", this.arrowSize), this._renderer.setStyle(this.nextArrow.nativeElement, "width", this.arrowSize)) } }, { key: "checkCache", value: function() { var e = this; return !(this._urlCache.length === this.imageUrls.length && this._urlCache.every((function(t, n) { return t === e.imageUrls[n] }))) } }, { key: "getLeftSideIndex", value: function(e) { return void 0 === e && (e = this.slideIndex), --e < 0 && (e = this.slides.length - 1), e } }, { key: "getRightSideIndex", value: function(e) { return void 0 === e && (e = this.slideIndex), ++e >= this.slides.length && (e = 0), e } }, { key: "trackByFn", value: function(e, t) { return t.image } }, { key: "safeStyleDotColor", get: function() { return this.sanitizer.bypassSecurityTrustStyle("--dot-color: ".concat(this.dotColor)) } }]), e }(),
                zd = function e() { _classCallCheck(this, e) },
                Bd = Jn({ encapsulation: 0, styles: [".display-none[_ngcontent-%COMP%] {\n      display: none !important; }\n\n    .fs-container[_ngcontent-%COMP%] {\n      display: block;\n      cursor: pointer;\n      position: fixed;\n      z-index: 1;\n      top: 16px;\n      left: 16px;\n      width: 46px;\n      height: 46px;\n      text-align: center;\n      padding: 0;\n      background-color: rgba(0, 0, 0, 0.2);\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n      .fs-container[_ngcontent-%COMP%]:hover {\n        background-color: rgba(0, 0, 0, 0.33); }\n      .fs-container[_ngcontent-%COMP%]   .arrow-exitfs[_ngcontent-%COMP%] {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background: transparent;\n        border-top: 2px solid #f2f2f2;\n        -webkit-transition: all .2s ease-in-out;\n        transition: all .2s ease-in-out; }\n        .fs-container[_ngcontent-%COMP%]   .arrow-exitfs.prev[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          position: relative;\n          left: 18px;\n          top: 18px; }\n        .fs-container[_ngcontent-%COMP%]   .arrow-exitfs[_ngcontent-%COMP%]:after {\n          content: '';\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          -webkit-transform: rotate(90deg);\n                  transform: rotate(90deg);\n          position: absolute;\n          left: -15px;\n          top: -17px; }\n\n    .slideshow-container.slideshow-container-fs[_ngcontent-%COMP%] {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n    .slideshow-container[_ngcontent-%COMP%] {\n      position: relative;\n      display: block;\n      margin: auto;\n      height: 100%;\n      width: 100%;\n      overflow: hidden; }\n      .slideshow-container[_ngcontent-%COMP%]   .hide-slide[_ngcontent-%COMP%] {\n        visibility: hidden;\n        position: absolute;\n        top: -100vw;\n        left: -100vw;\n        opacity: 0; }\n      .slideshow-container[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        visibility: visible;\n        opacity: 1;\n        display: block; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.selected[_ngcontent-%COMP%] {\n          left: 0; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.left-slide[_ngcontent-%COMP%] {\n          left: -100%; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.right-slide[_ngcontent-%COMP%] {\n          left: 100%; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-in-left[_ngcontent-%COMP%] {\n          left: 0;\n          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-in-right[_ngcontent-%COMP%] {\n          left: 0;\n          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-out-left[_ngcontent-%COMP%] {\n          left: -100%;\n          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-out-right[_ngcontent-%COMP%] {\n          left: 100%;\n          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.link[_ngcontent-%COMP%] {\n          cursor: pointer; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]:not(.link) {\n          cursor: default; }\n      .slideshow-container[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0;\n        padding: 10px;\n        width: 100%; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: auto;\n        cursor: pointer;\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));\n        background-image: linear-gradient(transparent, transparent);\n        z-index: 100;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:before {\n          display: block;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0;\n          opacity: 0;\n          width: 100%;\n          z-index: -100;\n          -webkit-transition: opacity 0.45s;\n          transition: opacity 0.45s; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container.prev[_ngcontent-%COMP%] {\n          left: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container.prev[_ngcontent-%COMP%]:before {\n            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container.next[_ngcontent-%COMP%] {\n          right: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container.next[_ngcontent-%COMP%]:before {\n            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n          display: block;\n          margin: auto;\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          border-left: 2px solid #f2f2f2;\n          -webkit-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before {\n            display: block;\n            height: 200%;\n            width: 200%;\n            margin-left: -50%;\n            margin-top: -50%;\n            content: \"\";\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow.prev[_ngcontent-%COMP%] {\n            -webkit-transform: rotate(-45deg);\n                    transform: rotate(-45deg);\n            position: relative;\n            left: 20px;\n            margin-right: 10px; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow.next[_ngcontent-%COMP%] {\n            -webkit-transform: rotate(135deg);\n                    transform: rotate(135deg);\n            position: relative;\n            right: 20px;\n            margin-left: 10px; }\n      .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%] {\n        display: block;\n        bottom: 15px;\n        z-index: 1;\n        text-align: center;\n        position: absolute;\n        padding: 0;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n        .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n          display: inline;\n          margin: 0;\n          padding: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            border: none;\n            background: none;\n            text-indent: -9999px;\n            font-size: 0;\n            width: 20px;\n            height: 20px;\n            outline: none;\n            position: relative;\n            z-index: 1;\n            cursor: pointer; }\n            .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n              content: '';\n              width: 4px;\n              height: 4px;\n              background: var(--dot-color, #FFF);\n              border-radius: 4px;\n              display: block;\n              position: absolute;\n              top: 50%;\n              left: 50%;\n              -webkit-transform: translate(-50%, -50%);\n                      transform: translate(-50%, -50%);\n              opacity: .7;\n              -webkit-transition: all .5s ease-out;\n              transition: all .5s ease-out; }\n          .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n            -webkit-transform: translate(-50%, -50%) scale(1.4);\n                    transform: translate(-50%, -50%) scale(1.4);\n            opacity: 1; }\n\n    @media screen and (min-width: 768px) {\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:hover:before {\n        opacity: 1; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n        border-width: 4px; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover {\n        border-width: 4px; } }\n\n    @-webkit-keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @-webkit-keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    @keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    .loader[_ngcontent-%COMP%] {\n      position: absolute;\n      left: 50%;\n      margin-left: -20px;\n      top: 50%;\n      margin-top: -20px;\n      border: 5px solid #f3f3f3;\n      border-top: 5px solid #555;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      -webkit-animation: spin 1s linear infinite;\n              animation: spin 1s linear infinite; }\n\n    @-webkit-keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n\n    @keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }"], data: {} });

            function qd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 0, "div", [
                    ["class", "loader"]
                ], null, null, null, null, null))], null, null) }

            function Zd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 3, "div", [
                    ["class", "caption"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), si(512, null, Nl, Ml, [un, Tn, fn]), li(2, 278528, null, 0, Dl, [Nl], { ngStyle: [0, "ngStyle"] }, null), ra(3, { color: 0, "background-color": 1 })], (function(e, t) { var n = t.component,
                        r = e(t, 3, 0, n.captionColor, n.captionBackground);
                    e(t, 2, 0, r) }), (function(e, t) { e(t, 0, 0, null == t.parent.context.$implicit ? null : null == t.parent.context.$implicit.image ? null : t.parent.context.$implicit.image.caption) })) }

            function Wd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 6, "a", [
                    ["class", "slides"]
                ], [
                    [8, "href", 4],
                    [8, "title", 0],
                    [2, "selected", null],
                    [2, "hide-slide", null],
                    [2, "left-side", null],
                    [2, "right-side", null],
                    [2, "slide-in-left", null],
                    [2, "slide-in-right", null],
                    [2, "slide-out-left", null],
                    [2, "slide-out-right", null],
                    [2, "link", null]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.onClick(n) && r), r }), null, null)), si(512, null, Nl, Ml, [un, Tn, fn]), li(2, 278528, null, 0, Dl, [Nl], { ngStyle: [0, "ngStyle"] }, null), (e()(), Zo(16777216, null, null, 1, null, qd)), li(4, 16384, null, 0, Rl, [Nn, In], { ngIf: [0, "ngIf"] }, null), (e()(), Zo(16777216, null, null, 1, null, Zd)), li(6, 16384, null, 0, Rl, [Nn, In], { ngIf: [0, "ngIf"] }, null)], (function(e, t) { var n = t.component;
                    e(t, 2, 0, n.getSlideStyle(t.context.index)), e(t, 4, 0, !(null != t.context.$implicit && t.context.$implicit.loaded)), e(t, 6, 0, n.showCaptions && (null == t.context.$implicit ? null : null == t.context.$implicit.image ? null : t.context.$implicit.image.caption)) }), (function(e, t) { e(t, 0, 1, [xr(1, "", null != t.context.$implicit && null != t.context.$implicit.image && t.context.$implicit.image.clickAction ? "#" : null == t.context.$implicit ? null : null == t.context.$implicit.image ? null : t.context.$implicit.image.href, ""), xr(1, "", null == t.context.$implicit ? null : null == t.context.$implicit.image ? null : t.context.$implicit.image.title, ""), null == t.context.$implicit ? null : t.context.$implicit.selected, !(null != t.context.$implicit && t.context.$implicit.selected || null != t.context.$implicit && t.context.$implicit.leftSide || null != t.context.$implicit && t.context.$implicit.rightSide), null == t.context.$implicit ? null : t.context.$implicit.leftSide, null == t.context.$implicit ? null : t.context.$implicit.rightSide, "slideInLeft" === (null == t.context.$implicit ? null : t.context.$implicit.action), "slideInRight" === (null == t.context.$implicit ? null : t.context.$implicit.action), "slideOutLeft" === (null == t.context.$implicit ? null : t.context.$implicit.action), "slideOutRight" === (null == t.context.$implicit ? null : t.context.$implicit.action), (null == t.context.$implicit ? null : null == t.context.$implicit.image ? null : t.context.$implicit.image.clickAction) || (null == t.context.$implicit ? null : null == t.context.$implicit.image ? null : t.context.$implicit.image.href)]) })) }

            function Gd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 2, "li", [], [
                    [2, "slick-active", null]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.goToSlide(e.context.index) && r), r }), null, null)), (e()(), Wo(1, 0, null, null, 1, "button", [
                    ["type", "button"]
                ], [
                    [1, "style", 2]
                ], null, null, null, null)), (e()(), ia(2, null, [" ", " "]))], null, (function(e, t) { var n = t.component;
                    e(t, 0, 0, t.context.$implicit.selected), e(t, 1, 0, n.safeStyleDotColor), e(t, 2, 0, t.context.index) })) }

            function Qd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 2, "ul", [
                    ["class", "slick-dots"]
                ], null, null, null, null, null)), (e()(), Zo(16777216, null, null, 1, null, Gd)), li(2, 278528, null, 0, Pl, [Nn, In, En], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null)], (function(e, t) { var n = t.component;
                    e(t, 2, 0, n.slides, n.trackByFn) }), null) }

            function $d(e) { return la(0, [Jo(402653184, 1, { container: 0 }), Jo(402653184, 2, { prevArrow: 0 }), Jo(402653184, 3, { nextArrow: 0 }), (e()(), Wo(3, 0, null, null, 1, "div", [
                    ["class", "fs-container"]
                ], [
                    [2, "display-none", null]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.exitFullScreen(n) && r), r }), null, null)), (e()(), Wo(4, 0, null, null, 0, "i", [
                    ["class", "arrow-exitfs prev"],
                    ["title", "Back"]
                ], null, null, null, null, null)), (e()(), Wo(5, 0, [
                    [1, 0],
                    ["container", 1]
                ], null, 8, "div", [
                    ["class", "slideshow-container"]
                ], [
                    [2, "slideshow-container-fs", null]
                ], [
                    [null, "touchstart"],
                    [null, "touchend"]
                ], (function(e, t, n) { var r = !0,
                        i = e.component; return "touchstart" === t && (r = !1 !== i.onSwipe(n, "start") && r), "touchend" === t && (r = !1 !== i.onSwipe(n, "end") && r), r }), null, null)), (e()(), Zo(16777216, null, null, 1, null, Wd)), li(7, 278528, null, 0, Pl, [Nn, In, En], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (e()(), Wo(8, 0, null, null, 1, "div", [
                    ["class", "arrow-container prev"]
                ], [
                    [2, "display-none", null]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.onSlide(-1) && r), r }), null, null)), (e()(), Wo(9, 0, [
                    [2, 0],
                    ["prevArrow", 1]
                ], null, 0, "i", [
                    ["class", "arrow prev"],
                    ["title", "Previous"]
                ], null, null, null, null, null)), (e()(), Wo(10, 0, null, null, 1, "div", [
                    ["class", "arrow-container next"]
                ], [
                    [2, "display-none", null]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.onSlide(1) && r), r }), null, null)), (e()(), Wo(11, 0, [
                    [3, 0],
                    ["nextArrow", 1]
                ], null, 0, "i", [
                    ["class", "arrow next"],
                    ["title", "Next"]
                ], null, null, null, null, null)), (e()(), Zo(16777216, null, null, 1, null, Qd)), li(13, 16384, null, 0, Rl, [Nn, In], { ngIf: [0, "ngIf"] }, null)], (function(e, t) { var n = t.component;
                    e(t, 7, 0, n.slides, n.trackByFn), e(t, 13, 0, n.showDots) }), (function(e, t) { var n = t.component;
                    e(t, 3, 0, !n.fullscreen), e(t, 5, 0, n.fullscreen), e(t, 8, 0, !n.showArrows), e(t, 10, 0, !n.showArrows) })) } var Kd = function() {
                    function e() { _classCallCheck(this, e), this.imageUrlArray = [] } return _createClass(e, [{ key: "ngOnInit", value: function() { this.imageUrlArray = window.innerWidth > 768 ? [{ url: "./assets/homeBanner.jpg" }] : [{ url: "./assets/publ_giacomini.jpeg" }] } }, { key: "onResize", value: function(e) { console.log(e.target.innerWidth), this.imageUrlArray = e.target.innerWidth > 768 ? [{ url: "./assets/homeBanner.jpg" }] : [{ url: "./assets/publ_giacomini.jpeg" }] } }]), e }(),
                Jd = Jn({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function Yd(e) { return la(0, [(e()(), Wo(0, 0, null, null, 2, "div", [
                    ["class", "h-100"]
                ], null, null, null, null, null)), (e()(), Wo(1, 0, null, null, 1, "slideshow", [], null, [
                    ["window", "resize"]
                ], (function(e, t, n) { var r = !0; return "window:resize" === t && (r = !1 !== e.component.onResize(n) && r), r }), $d, Bd)), li(2, 376832, null, 0, Hd, [Vd, fn, qu, ao, Nu, Fi, Ll], { imageUrls: [0, "imageUrls"], showArrows: [1, "showArrows"] }, null)], (function(e, t) { e(t, 2, 0, t.component.imageUrlArray, !1) }), null) } var Xd = Lr("app-home", Kd, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "app-home", [], null, null, null, Yd, Jd)), li(1, 114688, null, 0, Kd, [], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                ef = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e }(),
                tf = Jn({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function nf(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["about works!"]))], null, null) } var rf = Lr("app-about", ef, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "app-about", [], null, null, null, nf, tf)), li(1, 114688, null, 0, ef, [], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                of = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e }(),
                af = Jn({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function lf(e) { return la(0, [(e()(), Wo(0, 0, null, null, 58, "div", [
                    ["class", "container h-100"],
                    ["style", "text-align: center; overflow-y: auto;"]
                ], null, null, null, null, null)), (e()(), Wo(1, 0, null, null, 1, "h1", [
                    ["class", "display-4"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, [" Residencial Giacomini "])), (e()(), Wo(3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (e()(), Wo(4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (e()(), ia(-1, null, [" \xc1rea comum "])), (e()(), Wo(6, 0, null, null, 17, "div", [
                    ["class", "container row"],
                    ["style", "text-align: left; font-size: 21px;"]
                ], null, null, null, null, null)), (e()(), Wo(7, 0, null, null, 16, "div", [], null, null, null, null, null)), (e()(), Wo(8, 0, null, null, 15, "ul", [], null, null, null, null, null)), (e()(), Wo(9, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(10, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Elevador com capacidade para 8 pessoas (Marca Otis)"])), (e()(), Wo(12, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["2 \xe1reas de festa com 110m\xb2"])), (e()(), Wo(15, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["\xc1rea fitness com 90m\xb2"])), (e()(), Wo(18, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Corredores com porcelanato alto padr\xe3o"])), (e()(), Wo(21, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Hall decorado"])), (e()(), Wo(24, 0, null, null, 1, "h3", [], null, null, null, null, null)), (e()(), ia(-1, null, [" \xc1rea privativa "])), (e()(), Wo(26, 0, null, null, 32, "div", [
                    ["class", "container row"],
                    ["style", "text-align: left; font-size: 21px;"]
                ], null, null, null, null, null)), (e()(), Wo(27, 0, null, null, 31, "div", [], null, null, null, null, null)), (e()(), Wo(28, 0, null, null, 30, "ul", [], null, null, null, null, null)), (e()(), Wo(29, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(30, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Acabamento em gesso rebaixado em todos os apartamentos"])), (e()(), Wo(32, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(33, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Luzes de led na sala"])), (e()(), Wo(35, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(36, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Pr\xe9-instala\xe7\xe3o para ar condicionado e ampla laje t\xe9cnica"])), (e()(), Wo(38, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(39, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Ch\xe3o com porcelanato 60x60 (Alto padr\xe3o)"])), (e()(), Wo(41, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(42, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Banheiros, cozinha elavanderia com revestimento at\xe9 o teto (Alto padr\xe3o)"])), (e()(), Wo(44, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(45, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["\xc1rea gourmet e sacada de servi\xe7os em todos os apartamentos"])), (e()(), Wo(47, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(48, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["1 vaga de garagem coberta para cada apartamento (os primeiros compradores ter\xe3o a possiblidade de adquirir 1 vaga adicional)"])), (e()(), Wo(50, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Paredes com massa corrida"])), (e()(), Wo(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(54, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["2 banheiros por apartamento"])), (e()(), Wo(56, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(57, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Plantas de 73m\xb2 e de 84m\xb2"]))], null, null) } var sf = Lr("app-enterprise", of, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "app-enterprise", [], null, null, null, lf, af)), li(1, 114688, null, 0, of, [], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                uf = function() {
                    function e() { _classCallCheck(this, e) } return _createClass(e, [{ key: "ngOnInit", value: function() {} }]), e }(),
                cf = Jn({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function hf(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), ia(-1, null, ["contact works!"]))], null, null) } var df = Lr("app-contact", uf, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "app-contact", [], null, null, null, hf, cf)), li(1, 114688, null, 0, uf, [], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                ff = Jn({ encapsulation: 0, styles: [
                        ['html[_ngcontent-%COMP%]{font-size:14px;overflow-x:hidden}.container[_ngcontent-%COMP%]{max-width:960px}.pricing-header[_ngcontent-%COMP%]{max-width:700px}.card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-width:220px}.product-device[_ngcontent-%COMP%]{position:absolute;right:10%;bottom:-30%;width:300px;height:540px;background-color:#333;border-radius:21px;-webkit-transform:rotate(30deg);transform:rotate(30deg)}.product-device[_ngcontent-%COMP%]::before{position:absolute;top:10%;right:10px;bottom:10%;left:10px;content:"";background-color:rgba(255,255,255,.1);border-radius:5px}.product-device-2[_ngcontent-%COMP%]{top:-25%;right:auto;bottom:0;left:5%;background-color:#e5e5e5}.border-top[_ngcontent-%COMP%]{border-top:1px solid #e5e5e5}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #e5e5e5}.box-shadow[_ngcontent-%COMP%]{box-shadow:0 .25rem .75rem rgba(0,0,0,.05)}.flex-equal[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.go_home[_ngcontent-%COMP%]{background-color:#fff;padding:10px;border-radius:100%}@media (min-width:768px){html[_ngcontent-%COMP%]{font-size:16px}.flex-md-equal[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}#logoCameUp[_ngcontent-%COMP%]{background-color:#fff;border-radius:.9%}.primum_logo[_ngcontent-%COMP%]{width:85px;height:60px}.footerPrimumSpace[_ngcontent-%COMP%]{height:90px;width:70px}}@media (max-width:767px){.primum_logo[_ngcontent-%COMP%]{margin-top:10px;width:80px;height:60px;background-color:#fff;border-radius:70%}.giacominiText[_ngcontent-%COMP%], .homeHide[_ngcontent-%COMP%]{display:none}#carouselExampleSlidesOnly[_ngcontent-%COMP%]{overflow:auto}}']
                    ], data: {} });

            function pf(e) { return la(0, [(e()(), Wo(0, 0, null, null, 19, "div", [
                    ["class", "sticky-top d-flex flex-column flex-md-row align-items-center px-md-4 border-bottom box-shadow"],
                    ["style", "background-color: #952323;"]
                ], null, null, null, null, null)), (e()(), Wo(1, 0, null, null, 4, "div", [
                    ["class", "my-0 mr-md-auto"],
                    ["id", "logoCameUp"]
                ], null, null, null, null, null)), (e()(), Wo(2, 0, null, null, 0, "img", [
                    ["class", "primum_logo"],
                    ["src", "./assets/GiacominiLogoOnly.png"]
                ], null, null, null, null, null)), (e()(), Wo(3, 0, null, null, 2, "span", [
                    ["class", "giacominiText text-dark"],
                    ["style", "margin-right: 10px;"]
                ], null, null, null, null, null)), (e()(), Wo(4, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), ia(-1, null, [" Grupo Giacomini "])), (e()(), Wo(6, 0, null, null, 13, "nav", [
                    ["class", "my-2 my-md-0 mr-md-3 text-nav-bar"]
                ], null, null, null, null, null)), (e()(), Wo(7, 0, null, null, 2, "a", [
                    ["class", "homeHide p-2 text-white"],
                    ["routerLink", "/home"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Qr(e, 8).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), li(8, 671744, null, 0, hd, [cd, th, yl], { routerLink: [0, "routerLink"] }, null), (e()(), ia(-1, null, ["Home"])), (e()(), Wo(10, 0, null, null, 2, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/about"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Qr(e, 11).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), li(11, 671744, null, 0, hd, [cd, th, yl], { routerLink: [0, "routerLink"] }, null), (e()(), ia(-1, null, ["Sobre"])), (e()(), Wo(13, 0, null, null, 3, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/enterprise"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Qr(e, 14).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), li(14, 671744, null, 0, hd, [cd, th, yl], { routerLink: [0, "routerLink"] }, null), (e()(), Wo(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Residencial Giacomini"])), (e()(), Wo(17, 0, null, null, 2, "a", [
                    ["class", "p-2 text-white"],
                    ["routerLink", "/contact"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== Qr(e, 18).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }), null, null)), li(18, 671744, null, 0, hd, [cd, th, yl], { routerLink: [0, "routerLink"] }, null), (e()(), ia(-1, null, ["Contato"])), (e()(), Wo(20, 0, null, null, 2, "main", [
                    ["style", "height: 64vh;"]
                ], null, null, null, null, null)), (e()(), Wo(21, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), li(22, 212992, null, 0, vd, [pd, Nn, on, [8, null], Rt], null, null), (e()(), Wo(23, 0, null, null, 48, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (e()(), Wo(24, 0, null, null, 47, "footer", [
                    ["class", "pt-4 my-md-3 pt-md-5 border-top"]
                ], null, null, null, null, null)), (e()(), Wo(25, 0, null, null, 46, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), Wo(26, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(27, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "mb-2"],
                    ["height", "120"],
                    ["src", "./assets/GrupoGiacoLogo.png"],
                    ["width", "150"]
                ], null, null, null, null, null)), (e()(), Wo(28, 0, null, null, 16, "div", [
                    ["class", "col-12 col-md row"]
                ], null, null, null, null, null)), (e()(), Wo(29, 0, null, null, 1, "h5", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["Contate nossa equipe!"])), (e()(), Wo(31, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(32, 0, null, null, 1, "h6", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Email"])), (e()(), Wo(34, 0, null, null, 3, "ul", [
                    ["class", "list-unstyled text-small"]
                ], null, null, null, null, null)), (e()(), Wo(35, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(36, 0, null, null, 1, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["seuemail@grupogiacomini.com.br"])), (e()(), Wo(38, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(39, 0, null, null, 1, "h6", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Telefone"])), (e()(), Wo(41, 0, null, null, 3, "ul", [
                    ["class", "list-unstyled text-small"]
                ], null, null, null, null, null)), (e()(), Wo(42, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), Wo(43, 0, null, null, 1, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["(47) 99999-9999"])), (e()(), Wo(45, 0, null, null, 12, "div", [
                    ["class", "col-12 col-md row"],
                    ["style", "display: flow-root;"]
                ], null, null, null, null, null)), (e()(), Wo(46, 0, null, null, 1, "h5", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["Redes sociais!"])), (e()(), Wo(48, 0, null, null, 4, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(49, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "./assets/instagram-logo.png"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (e()(), Wo(50, 0, null, null, 2, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), Wo(51, 0, null, null, 1, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["Siga-nos no Instagram!"])), (e()(), Wo(53, 0, null, null, 4, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(54, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "./assets/facebook-logo-2-1.png"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (e()(), Wo(55, 0, null, null, 2, "p", [
                    ["class", "text-dark"]
                ], null, null, null, null, null)), (e()(), Wo(56, 0, null, null, 1, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["Siga-nos no Facebook!"])), (e()(), Wo(58, 0, null, null, 13, "div", [
                    ["class", "col-12 col-md row"],
                    ["style", "display: flow-root;"]
                ], null, null, null, null, null)), (e()(), Wo(59, 0, null, null, 2, "div", [
                    ["class", "col-12 w-100"]
                ], null, null, null, null, null)), (e()(), Wo(60, 0, null, null, 1, "h1", [
                    ["style", "text-align: center;"]
                ], null, null, null, null, null)), (e()(), Wo(61, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "m-auto"],
                    ["height", "24"],
                    ["src", "https://patrikfreisner.github.io/primum_mainpage/LOGO_PRIMUM_BLACK.png"],
                    ["width", "24"]
                ], null, null, null, null, null)), (e()(), Wo(62, 0, null, null, 6, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(63, 0, null, null, 5, "small", [
                    ["style", "margin-right: 5px;"]
                ], null, null, null, null, null)), (e()(), Wo(64, 0, null, null, 4, "b", [], null, null, null, null, null)), (e()(), ia(-1, null, [" Desenvolvido por "])), (e()(), Wo(66, 0, null, null, 2, "a", [
                    ["href", "http://www.primumtec.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (e()(), Wo(67, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), ia(-1, null, ["Primum!"])), (e()(), Wo(69, 0, null, null, 2, "div", [
                    ["class", "col-12 col-md"]
                ], null, null, null, null, null)), (e()(), Wo(70, 0, null, null, 1, "small", [
                    ["class", "mb-3 text-muted"]
                ], null, null, null, null, null)), (e()(), ia(-1, null, ["\xa9 2020-2020"]))], (function(e, t) { e(t, 8, 0, "/home"), e(t, 11, 0, "/about"), e(t, 14, 0, "/enterprise"), e(t, 18, 0, "/contact"), e(t, 22, 0) }), (function(e, t) { e(t, 7, 0, Qr(t, 8).target, Qr(t, 8).href), e(t, 10, 0, Qr(t, 11).target, Qr(t, 11).href), e(t, 13, 0, Qr(t, 14).target, Qr(t, 14).href), e(t, 17, 0, Qr(t, 18).target, Qr(t, 18).href) })) } var vf = Lr("app-root", pl, (function(e) { return la(0, [(e()(), Wo(0, 0, null, null, 1, "app-root", [], null, null, null, pf, ff)), li(1, 114688, null, 0, pl, [], null, null)], (function(e, t) { e(t, 1, 0) }), null) }), {}, {}, []),
                gf = function e() { _classCallCheck(this, e) },
                yf = new dl(fl, [pl], (function(e) { return function(e) { for (var t = {}, n = [], r = !1, i = 0; i < e.length; i++) { var o = e[i];
                            o.token === At && !0 === o.value && (r = !0), 1073741824 & o.flags && n.push(o.token), o.index = i, t[Qn(o.token)] = o } return { factory: null, providersByKey: t, providers: e, modules: n, isRoot: r } }([Rr(512, on, an, [
                        [8, [Fd, Xd, rf, sf, df, vf]],
                        [3, on], He
                    ]), Rr(5120, zi, zo, [
                        [3, zi]
                    ]), Rr(4608, Sl, El, [zi, [2, xl]]), Rr(5120, bi, Bo, [ao]), Rr(5120, Di, Ui, []), Rr(5120, En, Vo, []), Rr(5120, Tn, Ho, []), Rr(4608, Nu, Mu, [Ll]), Rr(6144, St, null, [Nu]), Rr(4608, Eu, Pu, []), Rr(5120, Xs, (function(e, t, n, r, i, o, a, l) { return [new xu(e, t, n), new Au(r), new Ou(i, o, a, l)] }), [Ll, ao, Fi, Ll, Ll, Eu, Hi, [2, Tu]]), Rr(4608, eu, eu, [Xs, ao]), Rr(135680, ru, ru, [Ll]), Rr(4608, cu, cu, [eu, ru, Di]), Rr(6144, hn, null, [cu]), Rr(6144, nu, null, [ru]), Rr(4608, vo, vo, [ao]), Rr(5120, th, Ad, [cd]), Rr(4608, _d, _d, []), Rr(6144, yd, null, [_d]), Rr(135680, kd, kd, [cd, Po, Ji, Mt, yd]), Rr(4608, md, md, []), Rr(5120, Cd, Td, [cd, Hl, wd]), Rr(5120, Ud, Dd, [Nd]), Rr(5120, Vi, (function(e) { return [e] }), [Ud]), Rr(5120, qu, Zu, [Ll, Di]), Rr(4608, Vd, Vd, []), Rr(1073742336, Ul, Ul, []), Rr(1024, Xe, zu, []), Rr(1024, ko, (function() { return [Sd()] }), []), Rr(512, Nd, Nd, [Mt]), Rr(1024, Ni, (function(e, t) { return [(n = e, Ks("probe", Ys), Ks("coreTokens", Object.assign({}, Js, (n || []).reduce((function(e, t) { return e[t.name] = t.token, e }), {}))), function() { return Ys }), Md(t)]; var n }), [
                        [2, ko], Nd
                    ]), Rr(512, Mi, Mi, [
                        [2, Ni]
                    ]), Rr(131584, Eo, Eo, [ao, Hi, Mt, Xe, on, Mi]), Rr(1073742336, qo, qo, [Eo]), Rr(1073742336, Bu, Bu, [
                        [3, Bu]
                    ]), Rr(1024, bd, Od, [
                        [3, cd]
                    ]), Rr(512, Nc, Mc, []), Rr(512, pd, pd, []), Rr(256, wd, {}, []), Rr(1024, yl, Pd, [vl, [2, ml], wd]), Rr(512, _l, _l, [yl, vl]), Rr(512, Ji, Ji, []), Rr(512, Po, Io, [Ji, [2, Oo]]), Rr(1024, rd, (function() { return [
                            [{ path: "", redirectTo: "/home", pathMatch: "full" }, { path: "home", component: Kd }, { path: "about", component: ef }, { path: "enterprise", component: of }, { path: "contact", component: uf }]
                        ] }), []), Rr(1024, cd, Id, [Eo, Nc, pd, _l, Mt, Po, Ji, rd, wd, [2, od],
                        [2, td]
                    ]), Rr(1073742336, Ed, Ed, [
                        [2, bd],
                        [2, cd]
                    ]), Rr(1073742336, gf, gf, []), Rr(1073742336, Wu, Wu, []), Rr(1073742336, zd, zd, []), Rr(1073742336, fl, fl, []), Rr(256, At, !0, [])]) }));
            (function() { if (tt) throw new Error("Cannot enable prod mode after platform setup.");
                et = !1 })(), Hu().bootstrapModuleFactory(yf).catch((function(e) { return console.error(e) })) }, zn8P: function(e, t) {
            function n(e) { return Promise.resolve().then((function() { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t })) }
            n.keys = function() { return [] }, n.resolve = n, e.exports = n, n.id = "zn8P" } },
    [
        [0, 0]
    ]
]);