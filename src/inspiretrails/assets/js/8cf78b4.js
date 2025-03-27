(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        569: function(t, e, n) {
            "use strict";
            var r = n(25),
                o = n(26),
                l = (n(12),
                    n(238),
                    function() {
                        function t() {
                            Object(r.a)(this, t)
                        }
                        return Object(o.a)(t, [{
                                key: "required",
                                value: function(t) {
                                    return "" === t || null === t
                                }
                            }, {
                                key: "isNull",
                                value: function(t) {
                                    return null === t || (Array.isArray(t) ? !t.length > 0 : !String(t).length > 0)
                                }
                            }, {
                                key: "isMax",
                                value: function(t) {
                                    return "number" == typeof t ? (arguments.length <= 2 ? void 0 : arguments[2]) ? t >= (arguments.length <= 1 ? void 0 : arguments[1]) : t > (arguments.length <= 1 ? void 0 : arguments[1]) : (arguments.length <= 2 ? void 0 : arguments[2]) ? String(t).length >= (arguments.length <= 1 ? void 0 : arguments[1]) : String(t).length > (arguments.length <= 1 ? void 0 : arguments[1])
                                }
                            }, {
                                key: "isMin",
                                value: function(t) {
                                    return "number" == typeof t ? (arguments.length <= 2 ? void 0 : arguments[2]) ? t <= (arguments.length <= 1 ? void 0 : arguments[1]) : t < (arguments.length <= 1 ? void 0 : arguments[1]) : (arguments.length <= 2 ? void 0 : arguments[2]) ? String(t).length <= (arguments.length <= 1 ? void 0 : arguments[1]) : String(t).length < (arguments.length <= 1 ? void 0 : arguments[1])
                                }
                            }, {
                                key: "isNumber",
                                value: function(t) {
                                    return String(t).match(/[0-9]+/)
                                }
                            }, {
                                key: "isEq",
                                value: function(t, e) {
                                    return String(t) === String(e)
                                }
                            }, {
                                key: "isPhone",
                                value: function(t, e) {
                                    var n = /\d/;
                                    return e && (n = e),
                                        n.test(t)
                                }
                            }, {
                                key: "isEmail",
                                value: function(t) {
                                    return /\S+@\S+\.\S+/.test(t)
                                }
                            }]),
                            t
                    }()),
                c = new l;
            e.a = c
        },
        814: function(t, e, n) {
            "use strict";
            n.r(e);
            n(5),
                n(4),
                n(2),
                n(1),
                n(6),
                n(3),
                n(7);
            var r = n(10),
                o = n(0),
                l = (n(41),
                    n(56)),
                c = n(569);

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))),
                        n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        Object(o.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var h = {
                    name: "LoginClient",
                    layout: "page",
                    auth: "guest",
                    data: function() {
                        return {
                            loading: !1,
                            email: "",
                            password: "",
                            redirect: ""
                        }
                    },
                    computed: {
                        isValid: function() {
                            return this.pwdOk && this.emailOk
                        },
                        emailOk: function() {
                            return !c.a.isNull(this.email) && c.a.isEmail(this.email)
                        },
                        pwdOk: function() {
                            return !c.a.isMin(this.password, 6) && !c.a.isNull(this.password)
                        }
                    },
                    mounted: function() {
                        this.redirect = this.$route.query.redirect
                    },
                    methods: v(v({}, Object(l.b)({
                        setUserInfos: "setUserInfo"
                    })), {}, {
                        login: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!t.isValid) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.prev = 1,
                                                    t.$nextTick((function() {
                                                        t.loading = !0,
                                                            t.$nuxt.$loading.start()
                                                    })),
                                                    e.next = 5,
                                                    t.$auth.loginWith("local", {
                                                        data: {
                                                            email: t.email,
                                                            password: t.password
                                                        }
                                                    });
                                            case 5:
                                                (n = e.sent).data && (t.$auth.setUser(n.data.user),
                                                        t.$auth.$storage.setUniversal("user", n.data.user, !0),
                                                        t.$nuxt.$loading.finish(),
                                                        t.loading = !1,
                                                        t.redirect ? t.$router.push("/challenges/" + t.redirect) : window.location.href = "/"),
                                                    e.next = 13;
                                                break;
                                            case 9:
                                                e.prev = 9,
                                                    e.t0 = e.catch(1),
                                                    t.loading = !1,
                                                    t.$swal({
                                                        icon: "error",
                                                        title: "Sai thông tin đăng nhập",
                                                        text: "Email hoặc mật khẩu không chính xác"
                                                    });
                                            case 13:
                                                return e.prev = 13,
                                                    e.finish(13);
                                            case 15:
                                                e.next = 19;
                                                break;
                                            case 17:
                                                t.loading = !1,
                                                    t.$swal({
                                                        icon: "error",
                                                        title: "Oops...",
                                                        text: "Có lỗi xảy ra ! Vui lòng thử lại"
                                                    });
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }), e, null, [
                                    [1, 9, 13, 15]
                                ])
                            })))()
                        }
                    })
                },
                f = n(22),
                component = Object(f.a)(h, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "wrap-page"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row justify-content-md-center"
                    }, [e("div", {
                        staticClass: "col-md-6"
                    }, [e("div", {
                        staticClass: "content-no-page"
                    }, [e("div", {
                        staticClass: "title-no-page"
                    }, [t._v("\n            " + t._s(t.$t("home.txtLogin")) + "\n          ")]), t._v(" "), e("div", {
                        staticClass: "note"
                    }, [t._v("\n            Hãy đăng nhập tài khoản của bạn để tiếp tục\n          ")]), t._v(" "), e("div", {
                        staticClass: "form-c"
                    }, [e("div", {
                        staticClass: "form-group"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.email,
                            expression: "email"
                        }],
                        staticClass: "form-control form-control-lg c-input",
                        attrs: {
                            type: "email",
                            placeholder: "Email"
                        },
                        domProps: {
                            value: t.email
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.email = e.target.value)
                            }
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "form-group"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.password,
                            expression: "password"
                        }],
                        staticClass: "form-control form-control-lg c-input",
                        attrs: {
                            type: "password",
                            placeholder: "Mật khẩu"
                        },
                        domProps: {
                            value: t.password
                        },
                        on: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.login()
                            },
                            input: function(e) {
                                e.target.composing || (t.password = e.target.value)
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "forgot-password"
                    }, [e("NuxtLink", {
                        attrs: {
                            to: "/forgot-password"
                        }
                    }, [t._v("\n              Quên mật khẩu?\n            ")])], 1), t._v(" "), e("div", {
                        staticClass: "wrap-button"
                    }, [e("button", {
                        staticClass: "btn btn-c",
                        attrs: {
                            disabled: t.loading
                        },
                        on: {
                            click: function(e) {
                                return t.login()
                            }
                        }
                    }, [t.loading ? t._e() : e("span", [t._v("Đăng nhập")]), t._v(" "), t.loading ? e("div", {
                        staticClass: "spinner-border text-light",
                        attrs: {
                            role: "status"
                        }
                    }, [e("span", {
                        staticClass: "sr-only"
                    }, [t._v("Loading...")])]) : t._e()])]), t._v(" "), e("div", {
                        staticClass: "register-now"
                    }, [e("span", {
                        staticClass: "question-acc"
                    }, [t._v("Bạn chưa có tài khoản?")]), t._v(" "), e("br"), t._v(" "), e("span", {
                        staticClass: "register-now-link"
                    }, [e("NuxtLink", {
                        attrs: {
                            to: {
                                path: "register",
                                query: {
                                    redirect: t.redirect
                                }
                            }
                        }
                    }, [t._v("Đăng ký ngay")])], 1)])])])])])])
                }), [], !1, null, "a31561f0", null);
            e.default = component.exports
        }
    }
]);