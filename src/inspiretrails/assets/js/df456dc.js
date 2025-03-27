(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        104: function(t, e, n) {
            "use strict";
            n.r(e);
            n(125);
            var r = n(10),
                o = (n(41), n(166)),
                l = {
                    name: "NavHeader",
                    components: {
                        NotificationIcon: n(350).default,
                        LogoInspiretrails: o.default,
                    },
                    data: function() {
                        return {
                            isShowMenu: !1,
                            isMobile: !1,
                            isLogin: !1,
                            lang: "",
                            hasUser: !1,
                            menus: [{
                                    label: "The Trail Fansipan",
                                    link: "/challenges/chinh-phuc-fansipan",
                                },
                                {
                                    label: "The Trail Of Pharaoh",
                                    link: "/challenges/thung-lung-cua-pharaoh",
                                },
                                {
                                    label: "The Mount Fuji",
                                    link: "/challenges/chinh-phuc-fuji-3-759m",
                                },
                                {
                                    label: "The Mount Everest",
                                    link: "/challenges/chinh-phuc-everest",
                                },
                                {
                                    label: "The Great Wall Of China",
                                    link: "/challenges/van-ly-truong-thanh",
                                },
                            ],
                        };
                    },
                    mounted: function() {
                        this.$store.state.i18n && "vi" === this.$store.state.i18n.locale ?
                            (this.lang = "vi") :
                            (this.lang = "en"),
                            this.$auth && this.$auth.user && (this.hasUser = !0);
                    },
                    created: function() {},
                    methods: {
                        menuNav: function() {
                            (this.isShowMenu = !this.isShowMenu),
                            (this.isMobile = !this.isMobile);
                        },
                        changeLanguage: function(t) {
                            this.$store.commit("i18n/SET_LANG", t),
                                (this.$i18n.locale = t),
                                this.$cookiz.set("lang", t),
                                (this.lang = t);
                        },
                        goToPage: function(t) {
                            this.$nuxt.$options.router.push(t);
                        },
                        goToLogout: function() {
                            var t = this;
                            return Object(r.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        t.$axios
                                                        .$post("/auth/logout")
                                                        .then(
                                                            (function() {
                                                                var e = Object(r.a)(
                                                                    regeneratorRuntime.mark(function e(n) {
                                                                        return regeneratorRuntime.wrap(function(
                                                                            e,
                                                                        ) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        return (
                                                                                            (e.next = 2),
                                                                                            t.$auth.logout("local")
                                                                                        );
                                                                                    case 2:
                                                                                        t.hasUser = !1;
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    }),
                                                                );
                                                                return function(t) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })(),
                                                        )
                                                        .catch(function(e) {
                                                            t.$swal({
                                                                icon: "error",
                                                                title: "Oops...",
                                                                text: "Có lỗi xảy ra ! Vui lòng thử lại",
                                                            });
                                                        })
                                                    );
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            )();
                        },
                        closeMenu: function() {
                            (this.isShowMenu = !1), (this.isMobile = !1);
                        },
                    },
                },
                c = l,
                f = (n(431), n(22)),
                component = Object(f.a)(
                    c,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [
                            e("section", { staticClass: "header" }, [
                                e("div", { staticClass: "top-header" }, [
                                    e("div", { staticClass: "container-fluid flex-box" }, [
                                        e("ul", { staticClass: "ul-top top-header__left" }, [
                                            e("li", [
                                                e("a", { attrs: { href: "#" } }, [
                                                    e(
                                                        "span", { staticClass: "icon-top" }, [
                                                            e("font-awesome-icon", {
                                                                attrs: { icon: ["fas", "phone"] },
                                                            }),
                                                        ],
                                                        1,
                                                    ),
                                                    t._v(" "),
                                                    e("span", [t._v("0833228833")]),
                                                ]),
                                            ]),
                                            t._v(" "),
                                            e("li", [
                                                e("a", { attrs: { href: "#" } }, [
                                                    e(
                                                        "span", { staticClass: "icon-top" }, [
                                                            e("font-awesome-icon", {
                                                                attrs: { icon: ["fas", "envelope"] },
                                                            }),
                                                        ],
                                                        1,
                                                    ),
                                                    t._v(" "),
                                                    e("span", [t._v("support@inspiretrails.life")]),
                                                ]),
                                            ]),
                                            t._v(" "),
                                            e("li", [
                                                e("a", { attrs: { href: "#" } }, [
                                                    e(
                                                        "span", { staticClass: "icon-top" }, [
                                                            e("font-awesome-icon", {
                                                                attrs: { icon: ["fas", "clock"] },
                                                            }),
                                                        ],
                                                        1,
                                                    ),
                                                    t._v(" "),
                                                    e("span", [t._v("Mon - Fri: 9:00 - 18:30")]),
                                                ]),
                                            ]),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "top-header__right" }, [
                                            e(
                                                "div", { staticClass: "languages" }, [
                                                    e(
                                                        "b-dropdown", {
                                                            staticClass: "dropdown-language",
                                                            attrs: { "no-caret": "", variant: "link" },
                                                            scopedSlots: t._u([{
                                                                key: "button-content",
                                                                fn: function() {
                                                                    return [
                                                                        "vi" === t.lang ?
                                                                        e(
                                                                            "span", { staticClass: "lang-choose" }, [
                                                                                e("img", {
                                                                                    attrs: { src: n(292) },
                                                                                }),
                                                                            ],
                                                                        ) :
                                                                        e(
                                                                            "span", { staticClass: "lang-choose" }, [
                                                                                e("img", {
                                                                                    attrs: { src: n(293) },
                                                                                }),
                                                                            ],
                                                                        ),
                                                                    ];
                                                                },
                                                                proxy: !0,
                                                            }, ]),
                                                        }, [
                                                            t._v(" "),
                                                            e(
                                                                "b-dropdown-item", {
                                                                    staticClass: "item-language",
                                                                    attrs: { href: "#" },
                                                                    on: {
                                                                        click: function(e) {
                                                                            return t.changeLanguage("vi");
                                                                        },
                                                                    },
                                                                }, [e("img", { attrs: { src: n(292) } })],
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                                "b-dropdown-item", {
                                                                    staticClass: "item-language",
                                                                    attrs: { href: "#" },
                                                                    on: {
                                                                        click: function(e) {
                                                                            return t.changeLanguage("en");
                                                                        },
                                                                    },
                                                                }, [e("img", { attrs: { src: n(293) } })],
                                                            ),
                                                        ],
                                                        1,
                                                    ),
                                                ],
                                                1,
                                            ),
                                            t._v(" "),
                                            e("div", { staticClass: "user-info" }, [
                                                t.hasUser ?
                                                e(
                                                    "div", [
                                                        e(
                                                            "b-dropdown", {
                                                                staticClass: "dropdown-user-info",
                                                                attrs: { "no-caret": "", variant: "link" },
                                                                scopedSlots: t._u(
                                                                    [{
                                                                        key: "button-content",
                                                                        fn: function() {
                                                                            return [
                                                                                e(
                                                                                    "span", {
                                                                                        staticClass: "img-user mr-2",
                                                                                    }, [
                                                                                        e("img", {
                                                                                            attrs: { src: n(427) },
                                                                                        }),
                                                                                    ],
                                                                                ),
                                                                                t._v(" "),
                                                                                e(
                                                                                    "span", [
                                                                                        e("font-awesome-icon", {
                                                                                            attrs: {
                                                                                                icon: [
                                                                                                    "fas",
                                                                                                    "angle-down",
                                                                                                ],
                                                                                            },
                                                                                        }),
                                                                                    ],
                                                                                    1,
                                                                                ),
                                                                            ];
                                                                        },
                                                                        proxy: !0,
                                                                    }, ],
                                                                    null, !1,
                                                                    3254745955,
                                                                ),
                                                            }, [
                                                                t._v(" "),
                                                                e(
                                                                    "b-dropdown-item-button", {
                                                                        staticClass: "text-btn",
                                                                        on: {
                                                                            click: function(e) {
                                                                                return t.goToPage("/my-challenges");
                                                                            },
                                                                        },
                                                                    }, [
                                                                        t._v(
                                                                            "\n                  Thử thách của tôi\n                ",
                                                                        ),
                                                                    ],
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "b-dropdown-item-button", {
                                                                        staticClass: "text-btn",
                                                                        on: {
                                                                            click: function(e) {
                                                                                return t.goToPage("profile");
                                                                            },
                                                                        },
                                                                    }, [
                                                                        t._v(
                                                                            "\n                  Thông tin tài khoản\n                ",
                                                                        ),
                                                                    ],
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "b-dropdown-item-button", {
                                                                        staticClass: "text-btn",
                                                                        on: {
                                                                            click: function(e) {
                                                                                return t.goToLogout();
                                                                            },
                                                                        },
                                                                    }, [
                                                                        e("span", [t._v("Đăng xuất")]),
                                                                        t._v(" "),
                                                                        e(
                                                                            "span", { staticClass: "icon-logout" }, [
                                                                                e("img", {
                                                                                    attrs: { src: n(428) },
                                                                                }),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                    1,
                                                ) :
                                                e(
                                                    "div", [
                                                        e(
                                                            "Nuxt-link", {
                                                                staticClass: "btn-custom-login",
                                                                attrs: { to: "/login" },
                                                            }, [
                                                                e("font-awesome-icon", {
                                                                    staticClass: "ml-2",
                                                                    attrs: { icon: ["fas", "user"] },
                                                                }),
                                                                t._v(
                                                                    "\n                " +
                                                                    t._s(t.$t("home.txtLogin")) +
                                                                    "\n              ",
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                    1,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "logo-menu" }, [
                                    e("div", { staticClass: "container-fluid" }, [
                                        e("div", { staticClass: "row" }, [
                                            e(
                                                "div", {
                                                    staticClass: "col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2",
                                                }, [
                                                    e("div", { staticClass: "logo" }, [
                                                        e(
                                                            "h1", [
                                                                e(
                                                                    "NuxtLink", { attrs: { to: "/" } }, [e("LogoInspiretrails")],
                                                                    1,
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                        t._v(" "),
                                                        e("div", { staticClass: "btn-menu-mobile" }, [
                                                            t.isShowMenu ?
                                                            e("img", {
                                                                attrs: { src: n(430) },
                                                                on: {
                                                                    click: function(e) {
                                                                        return t.menuNav();
                                                                    },
                                                                },
                                                            }) :
                                                            e("img", {
                                                                attrs: { src: n(429) },
                                                                on: {
                                                                    click: function(e) {
                                                                        return t.menuNav();
                                                                    },
                                                                },
                                                            }),
                                                        ]),
                                                    ]),
                                                ],
                                            ),
                                            t._v(" "),
                                            e("div", { staticClass: "col-12 col-sm-12 col-md-10" }, [
                                                e(
                                                    "div", {
                                                        staticClass: "menu",
                                                        class: { "menu-mobile": t.isMobile },
                                                    }, [
                                                        e(
                                                            "ul", { staticClass: "main-menu" },
                                                            t._l(t.menus, function(n, r) {
                                                                return e(
                                                                    "li", {
                                                                        key: r,
                                                                        on: {
                                                                            click: function(e) {
                                                                                return t.closeMenu();
                                                                            },
                                                                        },
                                                                    }, [
                                                                        e("NuxtLink", { attrs: { to: n.link } }, [
                                                                            t._v(
                                                                                "\n                    " +
                                                                                t._s(n.label) +
                                                                                "\n                  ",
                                                                            ),
                                                                        ]),
                                                                    ],
                                                                    1,
                                                                );
                                                            }),
                                                            0,
                                                        ),
                                                    ],
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    }, [], !1,
                    null,
                    "148ba13a",
                    null,
                );
            e.default = component.exports;
            installComponents(component, { LogoInspiretrails: n(166).default });
        },
        105: function(t, e, n) {
            "use strict";
            n.r(e);
            n(4), n(64), n(125);
            var r = [
                    function() {
                        var t = this._self._c;
                        return t("div", { staticClass: "share-social" }, [
                            t(
                                "a", {
                                    attrs: {
                                        href: "https://facebook.com/inspireTrails.life",
                                        target: "_blank",
                                    },
                                }, [t("img", { attrs: { src: n(433) } })],
                            ),
                            this._v(" "),
                            t(
                                "a", {
                                    attrs: {
                                        href: "https://instagram.com/inspiretrails.life/",
                                        target: "_blank",
                                    },
                                }, [t("img", { attrs: { src: n(434) } })],
                            ),
                        ]);
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", { staticClass: "row" }, [
                            e(
                                "div", {
                                    staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
                                }, [
                                    e("div", { staticClass: "copy-right" }, [
                                        e("span", [e("img", { attrs: { src: n(435) } })]),
                                        t._v(" "),
                                        e("span", [t._v("All rights reserved")]),
                                    ]),
                                ],
                            ),
                        ]);
                    },
                ],
                o = {
                    name: "NavFooter",
                    data: function() {
                        return {
                            description: "Inspire Trails là nền tảng cung cấp thử thách thể lực trực tuyến với mục đích khơi dậy động lực chinh phục những cung trails nổi tiếng trên thế giới.",
                            menu_home: [
                                { label: "Liên hệ", link: "#" },
                                { label: "FAQs", link: "#" },
                                { label: "Blog", link: "#" },
                                { label: "Điều khoản và điều kiện", link: "#" },
                                { label: "Chính sách Bảo Mật", link: "#" },
                                { label: "Đăng ký Affiliate", link: "#" },
                                { label: "Đăng nhập Affiliate", link: "#" },
                            ],
                            menu_trail: [{
                                    label: "The Trail Fansipan",
                                    link: "/challenges/chinh-phuc-fansipan",
                                },
                                {
                                    label: "The Trail Of Pharaoh",
                                    link: "/challenges/thung-lung-cua-pharaoh",
                                },
                                {
                                    label: "The Mount Fuji",
                                    link: "/challenges/chinh-phuc-fuji-3-759m",
                                },
                                {
                                    label: "The Mount Everest",
                                    link: "/challenges/chinh-phuc-everest",
                                },
                            ],
                        };
                    },
                },
                l = n(22),
                component = Object(l.a)(
                    o,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [
                            e("section", { staticClass: "footer" }, [
                                e("div", { staticClass: "container" }, [
                                    e("div", { staticClass: "row" }, [
                                        e(
                                            "div", {
                                                staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                                            }, [
                                                e("div", { staticClass: "left-footer" }, [
                                                    e("div", { staticClass: "logo" }, [
                                                        e(
                                                            "a", { attrs: { href: "#" } }, [e("LogoInspiretrails")],
                                                            1,
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    e("div", { staticClass: "intro-company" }, [
                                                        t._v(
                                                            "\n              " +
                                                            t._s(t.description) +
                                                            "\n            ",
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    t._m(0),
                                                    t._v(" "),
                                                    e("img", {
                                                        staticClass: "mt-4",
                                                        attrs: {
                                                            width: "124px",
                                                            alt: "connect-with-strava",
                                                            src: "/strava/strava-logo.png",
                                                        },
                                                    }),
                                                ]),
                                            ],
                                        ),
                                        t._v(" "),
                                        e(
                                            "div", {
                                                staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                                            }, [
                                                e("div", { staticClass: "right-footer" }, [
                                                    e("div", { staticClass: "row" }, [
                                                        e(
                                                            "div", {
                                                                staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                                                            }, [
                                                                e("div", { staticClass: "title-footer" }, [
                                                                    t._v(
                                                                        "\n                  Home\n                ",
                                                                    ),
                                                                ]),
                                                                t._v(" "),
                                                                e(
                                                                    "ul", { staticClass: "item-footer" },
                                                                    t._l(t.menu_home, function(n, r) {
                                                                        return e("li", { key: r }, [
                                                                            e("a", { attrs: { href: "#" } }, [
                                                                                t._v(
                                                                                    "\n                      " +
                                                                                    t._s(n.label) +
                                                                                    "\n                    ",
                                                                                ),
                                                                            ]),
                                                                        ]);
                                                                    }),
                                                                    0,
                                                                ),
                                                            ],
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                            "div", {
                                                                staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                                                            }, [
                                                                e("div", { staticClass: "title-footer" }, [
                                                                    t._v(
                                                                        "\n                  TRAIL RACES\n                ",
                                                                    ),
                                                                ]),
                                                                t._v(" "),
                                                                e(
                                                                    "ul", { staticClass: "item-footer" },
                                                                    t._l(t.menu_trail, function(n, r) {
                                                                        return e(
                                                                            "li", { key: r }, [
                                                                                e(
                                                                                    "NuxtLink", { attrs: { to: n.link } }, [
                                                                                        t._v(
                                                                                            "\n                      " +
                                                                                            t._s(n.label) +
                                                                                            "\n                    ",
                                                                                        ),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                            1,
                                                                        );
                                                                    }),
                                                                    0,
                                                                ),
                                                            ],
                                                        ),
                                                    ]),
                                                ]),
                                            ],
                                        ),
                                    ]),
                                    t._v(" "),
                                    t._m(1),
                                ]),
                            ]),
                        ]);
                    },
                    r, !1,
                    null,
                    "5d42de0e",
                    null,
                );
            e.default = component.exports;
            installComponents(component, { LogoInspiretrails: n(166).default });
        },
        131: function(t, e, n) {
            "use strict";
            var r = {};
            (r.admin = n(396)),
            (r.admin = r.admin.default || r.admin),
            (r.auth = n(397)),
            (r.auth = r.auth.default || r.auth),
            (r.client = n(398)),
            (r.client = r.client.default || r.client),
            (r.i18n = n(399)),
            (r.i18n = r.i18n.default || r.i18n),
            (r["normalize-url"] = n(400)),
            (r["normalize-url"] = r["normalize-url"].default || r["normalize-url"]),
            (e.a = r);
        },
        166: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(22),
                component = Object(r.a)({},
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "svg", {
                                attrs: {
                                    width: "136",
                                    height: "50",
                                    viewBox: "0 0 136 50",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                },
                            }, [
                                e("path", {
                                    attrs: {
                                        d: "M42.3232 11.4247L23.3376 0.383562C22.9024 0.109589 22.3856 0 21.8688 0C21.352 0 20.8624 0.136986 20.4 0.383562L1.4688 11.4247C0.544 11.9452 0 12.9315 0 13.9726V36.0274C0 37.0685 0.544 38.0548 1.4688 38.5753L20.4272 49.6164C20.8896 49.863 21.3792 50 21.896 50C22.4128 50 22.9024 49.863 23.3648 49.6164L42.3232 38.5753C43.2208 38.0548 43.792 37.0685 43.792 36.0274V13.9726C43.792 12.9315 43.2208 11.9452 42.3232 11.4247ZM22.712 48.4931C22.4672 48.6301 22.1952 48.7123 21.896 48.7123C21.5968 48.7123 21.3248 48.6301 21.08 48.4931L17.7888 46.5753C18.0064 45.9178 18.1968 45.2055 18.4688 44.5753C19.2576 42.7945 19.176 41.0411 18.5776 39.2055C17.5712 36.1096 16.728 32.9863 15.8576 29.863C15.7216 29.3973 15.7216 28.7945 15.8304 28.3288C16.9184 23.6986 17.9792 19.0685 19.176 14.4658C19.5024 13.2329 20.2096 12.1096 20.7536 10.9589C20.8896 10.9863 21.0256 10.9863 21.1616 11.0137C24.0448 17.8082 26.928 24.6301 29.8112 31.4521C30.2464 31.3151 30.5728 31.2055 31.0352 31.0685C31.3616 32.7671 31.7152 34.4658 32.0416 36.137C32.4224 38.2466 32.7488 40.3562 33.1568 42.4658L22.712 48.4931ZM42.4864 36.0274C42.4864 36.6027 42.16 37.1507 41.6704 37.4521L37.5904 39.8082C36.7472 39.1507 35.8496 38.0274 35.8768 37.4521C36.0944 33.589 36.312 29.6986 36.5568 25.8356C36.5568 25.7808 36.6384 25.726 36.8288 25.3973C37.5632 26.6301 38.2432 27.726 38.896 28.8767C40.12 31.0137 41.2896 33.1507 42.4864 35.2877V36.0274ZM42.4864 31.726C41.7792 30.4932 41.0992 29.3425 40.4464 28.1644C39.4128 26.3288 38.352 24.4932 37.3728 22.6301C36.9104 21.7534 36.5296 21.7534 35.904 22.4658C34.3536 24.2466 32.7216 25.9726 31.144 27.726C30.9808 27.9178 30.7904 28.0548 30.4096 28.3836C27.3088 21.0685 24.2624 13.9178 21.08 6.41096C20.2912 7.91781 19.6656 9.06849 19.0672 10.274C17.272 13.9178 15.504 17.589 13.6816 21.2055C13.5184 21.5342 13.1376 21.8082 12.784 21.9452C10.8528 22.6849 8.8944 23.3425 6.9904 24.137C6.4464 24.3562 5.8752 24.9041 5.6032 25.4521C4.488 27.726 3.5088 30.0548 2.3936 32.3014C2.1216 32.8493 1.6864 33.3425 1.2784 33.8356V13.9726C1.2784 13.3973 1.6048 12.8493 2.0944 12.5479L21.08 1.50685C21.3248 1.36986 21.5968 1.28767 21.896 1.28767C22.168 1.28767 22.4672 1.36986 22.712 1.50685L41.6704 12.5479C42.1872 12.8493 42.4864 13.3699 42.4864 13.9726V31.726Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M42.4872 35.3151V36.0549C42.4872 36.6302 42.1608 37.1782 41.6712 37.4795L37.5912 39.8357C36.748 39.1782 35.8504 38.0549 35.8776 37.4795C36.0952 33.6165 36.3128 29.7261 36.5576 25.8631C36.5576 25.8083 36.6392 25.7535 36.8296 25.4247C37.564 26.6576 38.244 27.7535 38.8968 28.9042C40.1208 31.0138 41.2904 33.1508 42.4872 35.3151Z",
                                        fill: "black",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M33.1296 42.4384L22.712 48.4932C22.4672 48.6302 22.1952 48.7124 21.896 48.7124C21.5968 48.7124 21.3248 48.6302 21.08 48.4932L17.7888 46.5754C18.0064 45.9178 18.1968 45.2055 18.4688 44.5754C19.2576 42.7945 19.176 41.0411 18.5776 39.2055C17.5712 36.1096 16.728 32.9863 15.8576 29.863C15.7216 29.3973 15.7216 28.7945 15.8304 28.3288C16.9184 23.6987 17.9792 19.0685 19.176 14.4658C19.5024 13.2329 20.2096 12.1096 20.7536 10.9589C20.8896 10.9863 21.0256 10.9863 21.1616 11.0137C24.0448 17.8082 26.928 24.6302 29.8112 31.4521C30.2464 31.3151 30.5728 31.2055 31.0352 31.0685C31.3616 32.7671 31.7152 34.4658 32.0416 36.137C32.3952 38.1918 32.7216 40.3288 33.1296 42.4384Z",
                                        fill: "black",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M42.4873 13.9725V31.7533C41.7801 30.5205 41.1001 29.3698 40.4473 28.1917C39.4137 26.3561 38.3529 24.5205 37.3737 22.6575C36.9113 21.7807 36.5305 21.7807 35.9049 22.4931C34.3545 24.2739 32.7225 25.9999 31.1449 27.7533C30.9817 27.9451 30.7913 28.0821 30.4105 28.4109C27.3097 21.0958 24.2633 13.9451 21.0809 6.43828C20.2921 7.94513 19.6665 9.09582 19.0681 10.3013C17.2729 13.9451 15.5049 17.6164 13.6825 21.2328C13.5193 21.5616 13.1385 21.8355 12.7849 21.9725C10.8537 22.7123 8.8953 23.3698 6.9913 24.1643C6.4473 24.3835 5.8761 24.9314 5.6041 25.4794C4.4889 27.7533 3.5097 30.0821 2.3945 32.3287C2.1225 32.8766 1.6873 33.3698 1.2793 33.8629V13.9725C1.2793 13.3972 1.6057 12.8492 2.0953 12.5479L21.0809 1.50678C21.3257 1.36979 21.5977 1.2876 21.8969 1.2876C22.1689 1.2876 22.4681 1.36979 22.7129 1.50678L41.6713 12.5479C42.1881 12.8492 42.4873 13.3698 42.4873 13.9725Z",
                                        fill: "black",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M48.416 20.8219V8.35614H51.2448V20.8219H48.416Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M62.2877 8.35614H65.0349V20.8219H62.5053L57.0109 13.0959V20.8219H54.2637V8.35614H56.7933L62.2877 16.0822V8.35614Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M72.0792 20.9589C70.556 20.9589 69.3864 20.6301 68.5432 19.9726C67.7 19.315 67.2376 18.3561 67.1016 17.0684L69.7672 16.6849C69.8488 17.2876 70.0664 17.7534 70.4744 18.0821C70.8824 18.4109 71.4536 18.5753 72.1607 18.5753C72.7863 18.5753 73.2488 18.4657 73.5752 18.2465C73.9015 18.0273 74.0647 17.726 74.0647 17.315C74.0647 16.9589 73.9015 16.6575 73.5479 16.4657C73.1943 16.2465 72.6232 16.0547 71.8344 15.863C70.964 15.6438 70.2568 15.3972 69.6584 15.0958C69.06 14.7945 68.6248 14.4109 68.3256 13.9178C68.0264 13.4246 67.8632 12.8219 67.8632 12.0821C67.8632 11.315 68.0536 10.6301 68.4616 10.0273C68.8696 9.4246 69.4136 8.95885 70.1208 8.63008C70.828 8.30132 71.644 8.13693 72.5687 8.13693C73.7655 8.13693 74.772 8.4383 75.5335 9.06844C76.2951 9.69858 76.7303 10.5479 76.8663 11.6164L74.3639 12.0273C74.2823 11.5342 74.0647 11.178 73.7111 10.9041C73.3848 10.6301 72.9495 10.5205 72.4327 10.5205C71.916 10.5205 71.508 10.6301 71.2088 10.8767C70.8824 11.1232 70.7464 11.452 70.7464 11.863C70.7464 12.2465 70.9096 12.5479 71.2088 12.7671C71.508 12.9862 72.052 13.2054 72.8679 13.3972C73.7111 13.6164 74.4455 13.8356 75.0711 14.1095C75.6967 14.3835 76.1591 14.7397 76.4855 15.178C76.8119 15.6438 76.9751 16.2465 76.9751 17.041C76.9751 17.8082 76.7847 18.4657 76.3767 19.0684C75.9687 19.6438 75.3975 20.1095 74.6631 20.4383C73.9015 20.7945 73.0312 20.9589 72.0792 20.9589Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M81.9541 20.8219H79.1797V8.35614H83.7221C85.4629 8.35614 86.7685 8.68491 87.6389 9.36984C88.5093 10.0548 88.9445 11.0411 88.9445 12.3287C88.9445 13.6164 88.4549 14.6301 87.4757 15.3698C86.4965 16.1096 85.1093 16.4657 83.3413 16.4657H81.9541V20.8219ZM83.7221 10.6849H81.9541V14.0822H83.4773C84.3749 14.0822 85.0277 13.9452 85.4629 13.6712C85.8981 13.3972 86.1157 12.9589 86.1157 12.3287C86.1157 11.6986 85.9253 11.2876 85.5445 11.0411C85.1637 10.8219 84.5381 10.6849 83.7221 10.6849Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M91.0391 20.8219V8.35614H93.8679V20.8219H91.0391Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M107.223 18.137L107.876 20.3561C107.631 20.5479 107.305 20.7123 106.897 20.8219C106.489 20.9315 106.081 20.9863 105.673 20.9863C104.911 20.9863 104.258 20.8219 103.687 20.5205C103.116 20.2192 102.653 19.7534 102.273 19.1507L100.804 16.7671C100.641 16.4931 100.45 16.3013 100.287 16.1918C100.124 16.0822 99.9334 16.0274 99.7158 16V20.8219H96.9414V8.35614H100.994C102.708 8.35614 103.986 8.7123 104.829 9.39724C105.673 10.0822 106.108 11.0411 106.108 12.2466C106.108 13.2055 105.809 14 105.237 14.6027C104.639 15.2055 103.905 15.6164 102.98 15.8082C103.361 16 103.687 16.3013 103.986 16.7397L104.585 17.6438C104.965 18.1918 105.455 18.4931 106.053 18.4931C106.271 18.4931 106.489 18.4657 106.679 18.4109C106.842 18.3561 107.033 18.2465 107.223 18.137ZM100.804 10.6849H99.6886V13.7808H100.777C101.647 13.7808 102.273 13.6438 102.653 13.3972C103.034 13.1507 103.225 12.7397 103.225 12.2192C103.225 11.6712 103.007 11.2876 102.572 11.0411C102.164 10.7945 101.565 10.6849 100.804 10.6849Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M117.613 10.8219H111.929V13.2876H117.233V15.7534H111.929V18.3287H117.777L117.613 20.7945H109.154V8.35614H117.613V10.8219Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M62.478 26.2464L61.798 30.3834H56.8476V43.1779H52.1148V30.4108H46.8652V26.2464H62.478Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M78.9059 38.7944L79.9939 42.4656C79.6131 42.767 79.0963 43.0136 78.4707 43.2053C77.8451 43.3971 77.1923 43.4793 76.5395 43.4793C75.2883 43.4793 74.2547 43.2601 73.4387 42.7944C72.6227 42.3286 71.9427 41.6711 71.4531 40.8492L69.9027 38.1916C69.7123 37.8629 69.5219 37.6437 69.3587 37.4793C69.1955 37.3149 68.9779 37.2053 68.7059 37.1779V43.2053H64.0547V26.2464H69.7395C72.3235 26.2464 74.2547 26.7396 75.4787 27.7259C76.7299 28.7122 77.3283 30.082 77.3283 31.8355C77.3283 33.0683 76.9747 34.1094 76.2675 34.9314C75.5603 35.7533 74.6083 36.3286 73.4387 36.6574C74.0371 36.8492 74.4995 37.2053 74.8531 37.7259L75.2883 38.3834C75.6963 39.0136 76.2947 39.3149 77.1107 39.3149C77.4099 39.3149 77.7091 39.2875 78.0083 39.2053C78.3347 39.1231 78.6339 38.9862 78.9059 38.7944ZM69.7123 30.082H68.7059V33.4519H69.9027C70.9363 33.4519 71.6435 33.3149 72.0515 33.041C72.4595 32.767 72.6499 32.3286 72.6499 31.7533C72.6499 31.1231 72.3779 30.6848 71.8339 30.4656C71.3171 30.1916 70.6099 30.082 69.7123 30.082Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M80.8926 43.1779L88.3182 26.2464H92.2622L99.4158 43.1779H94.6286L93.4318 40.1369H86.931L85.707 43.1779H80.8926ZM88.5086 36.219H91.8542L90.2222 32.082L88.5086 36.219Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M100.939 43.1779V26.2464H105.672V43.1779H100.939Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M109.453 43.1779V26.2464H114.186V39.041H121.204L120.932 43.1779H109.453Z",
                                        fill: "#FDB913",
                                    },
                                }),
                                t._v(" "),
                                e("path", {
                                    attrs: {
                                        d: "M128.901 43.4246C126.779 43.4246 125.147 42.9588 123.95 42.0547C122.754 41.1506 122.101 39.8355 121.938 38.0821L126.317 37.4246C126.344 38.0273 126.616 38.5205 127.105 38.904C127.595 39.2876 128.248 39.452 129.037 39.452C130.478 39.452 131.213 39.0684 131.213 38.3013C131.213 37.9451 131.022 37.6712 130.614 37.452C130.206 37.2328 129.553 37.0136 128.629 36.7944C126.67 36.3287 125.229 35.6712 124.331 34.8766C123.406 34.0821 122.971 32.9588 122.971 31.5068C122.998 30.4109 123.27 29.452 123.841 28.6027C124.413 27.7807 125.201 27.1232 126.208 26.6575C127.214 26.1917 128.411 25.9451 129.798 25.9451C131.485 25.9451 132.872 26.3835 133.987 27.2328C135.075 28.0821 135.701 29.2602 135.864 30.7397L131.729 31.452C131.648 30.9862 131.403 30.6027 130.995 30.3287C130.587 30.0273 130.097 29.8903 129.526 29.8903C128.982 29.8903 128.547 29.9999 128.248 30.2191C127.921 30.4383 127.758 30.7123 127.758 31.0958C127.758 31.4246 127.921 31.726 128.248 31.9725C128.574 32.2191 129.173 32.4657 130.07 32.6849C131.376 33.0136 132.437 33.3698 133.334 33.7807C134.205 34.1917 134.885 34.7123 135.32 35.3424C135.782 35.9725 136 36.8218 136 37.8355C136 38.9314 135.701 39.8903 135.102 40.7397C134.504 41.5616 133.688 42.2191 132.627 42.6849C131.566 43.178 130.315 43.4246 128.901 43.4246Z",
                                        fill: "#FDB913",
                                    },
                                }),
                            ],
                        );
                    }, [], !1,
                    null,
                    "3408ed7c",
                    null,
                );
            e.default = component.exports;
        },
        172: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = [
                    function() {
                        var t = this._self._c;
                        return t("li", { staticClass: "text-center j-center my-3" }, [
                            t("img", { attrs: { src: n(441) } }),
                        ]);
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("li", [
                            e(
                                "a", {
                                    attrs: {
                                        href: "https://www.facebook.com/inspireTrails.life",
                                    },
                                }, [
                                    e("span", { staticClass: "icon-menu" }, [
                                        e("img", { attrs: { src: n(442) } }),
                                    ]),
                                    t._v(" "),
                                    e("span", { staticClass: "title-menu" }, [t._v("Liên hệ")]),
                                ],
                            ),
                        ]);
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("li", [
                            e("a", { attrs: { href: "tel:083 3228833" } }, [
                                e("span", { staticClass: "icon-menu" }, [
                                    e("img", { attrs: { src: n(443) } }),
                                ]),
                                t._v(" "),
                                e("span", { staticClass: "title-menu" }, [t._v("Kết nối")]),
                            ]),
                        ]);
                    },
                    function() {
                        var t = this._self._c;
                        return t("span", { staticClass: "icon-menu" }, [
                            t("img", { attrs: { src: n(444) } }),
                        ]);
                    },
                ],
                o = n(10),
                l =
                (n(41), {
                    name: "NavLeft",
                    methods: {
                        goToLogout: function() {
                            var t = this;
                            return Object(o.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        t.$axios
                                                        .$post("/auth/logout")
                                                        .then(
                                                            (function() {
                                                                var e = Object(o.a)(
                                                                    regeneratorRuntime.mark(function e(n) {
                                                                        return regeneratorRuntime.wrap(
                                                                            function(e) {
                                                                                for (;;)
                                                                                    switch ((e.prev = e.next)) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (e.next = 2),
                                                                                                t.$auth.logout("local")
                                                                                            );
                                                                                        case 2:
                                                                                            t.hasUser = !1;
                                                                                        case 3:
                                                                                        case "end":
                                                                                            return e.stop();
                                                                                    }
                                                                            },
                                                                            e,
                                                                        );
                                                                    }),
                                                                );
                                                                return function(t) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })(),
                                                        )
                                                        .catch(function(e) {
                                                            t.$swal({
                                                                icon: "error",
                                                                title: "Oops...",
                                                                text: "Có lỗi xảy ra ! Vui lòng thử lại",
                                                            });
                                                        })
                                                    );
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            )();
                        },
                    },
                }),
                c = l,
                f = n(22),
                component = Object(f.a)(
                    c,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [
                            e("ul", { staticClass: "menu-l" }, [
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/my-challenges" } }, [
                                            e("span", { staticClass: "icon-menu" }, [
                                                e("img", { attrs: { src: n(438) } }),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v("Thử thách của bạn"),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                                t._v(" "),
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/conquering" } }, [
                                            e("span", { staticClass: "icon-menu" }, [
                                                e("img", { attrs: { src: n(439) } }),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v(t._s(t.$t("profile.data-strava"))),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                                t._v(" "),
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/profile" } }, [
                                            e("span", { staticClass: "icon-menu" }, [
                                                e("img", { attrs: { src: n(440) } }),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v("Thông tin tài khoản"),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                                t._v(" "),
                                t._m(0),
                                t._v(" "),
                                t._m(1),
                                t._v(" "),
                                t._m(2),
                                t._v(" "),
                                e("li", [
                                    e("a", { on: { click: t.goToLogout } }, [
                                        t._m(3),
                                        t._v(" "),
                                        e("span", { staticClass: "title-menu" }, [
                                            t._v("Đăng xuất"),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    r, !1,
                    null,
                    "195900d6",
                    null,
                );
            e.default = component.exports;
        },
        173: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10),
                o =
                (n(41), {
                    data: function() {
                        return { isMenuVisible: !1 };
                    },
                    methods: {
                        toggleMenu: function() {
                            this.isMenuVisible = !this.isMenuVisible;
                        },
                        goToLogout: function() {
                            var t = this;
                            return Object(r.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        t.$axios
                                                        .$post("/auth/logout")
                                                        .then(
                                                            (function() {
                                                                var e = Object(r.a)(
                                                                    regeneratorRuntime.mark(function e(n) {
                                                                        return regeneratorRuntime.wrap(
                                                                            function(e) {
                                                                                for (;;)
                                                                                    switch ((e.prev = e.next)) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (e.next = 2),
                                                                                                t.$auth.logout("local")
                                                                                            );
                                                                                        case 2:
                                                                                            t.hasUser = !1;
                                                                                        case 3:
                                                                                        case "end":
                                                                                            return e.stop();
                                                                                    }
                                                                            },
                                                                            e,
                                                                        );
                                                                    }),
                                                                );
                                                                return function(t) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })(),
                                                        )
                                                        .catch(function(e) {
                                                            t.$swal({
                                                                icon: "error",
                                                                title: "Oops...",
                                                                text: "Có lỗi xảy ra ! Vui lòng thử lại",
                                                            });
                                                        })
                                                    );
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            )();
                        },
                    },
                }),
                l = o,
                c = (n(445), n(22)),
                component = Object(c.a)(
                    l,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", { staticClass: "sticky-menu-mobile" }, [
                            e(
                                "div", { staticClass: "mobile-explain", on: { click: t.toggleMenu } }, [
                                    t.isMenuVisible ?
                                    e(
                                        "svg", {
                                            attrs: {
                                                width: "13",
                                                height: "8",
                                                viewBox: "0 0 13 8",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                            },
                                        }, [
                                            e("path", {
                                                attrs: {
                                                    d: "M6.00023 7.71309L12.0102 1.70209L10.5962 0.288086L6.00023 4.88409L1.40423 0.288086L-0.00976562 1.70209L6.00023 7.71309Z",
                                                    fill: "#FDB913",
                                                },
                                            }),
                                        ],
                                    ) :
                                    e(
                                        "svg", {
                                            attrs: {
                                                width: "13",
                                                height: "8",
                                                viewBox: "0 0 13 8",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                            },
                                        }, [
                                            e("path", {
                                                attrs: {
                                                    d: "M6.00023 0.286914L-0.00976569 6.29791L1.40423 7.71191L6.00423 3.11191L10.5972 7.71191L12.0112 6.29791L6.00023 0.286914Z",
                                                    fill: "#FDB913",
                                                },
                                            }),
                                        ],
                                    ),
                                ],
                            ),
                            t._v(" "),
                            e(
                                "div", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.isMenuVisible,
                                        expression: "isMenuVisible",
                                    }, ],
                                    staticClass: "second-menu-mobi",
                                }, [
                                    e("ul", [
                                        e("li", [
                                            e(
                                                "a", {
                                                    attrs: {
                                                        href: "https://www.facebook.com/inspireTrails.life",
                                                    },
                                                }, [
                                                    e("div", { staticClass: "icon-menu" }, [
                                                        e(
                                                            "svg", {
                                                                attrs: {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 28 28",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                },
                                                            }, [
                                                                e("path", {
                                                                    attrs: {
                                                                        d: "M16.3334 26.2499L13.0667 22.1666H7.00008C6.69066 22.1666 6.39392 22.0437 6.17512 21.8249C5.95633 21.6061 5.83341 21.3093 5.83341 20.9999V8.28675C5.83341 7.97733 5.95633 7.68059 6.17512 7.46179C6.39392 7.243 6.69066 7.12009 7.00008 7.12009H25.6667C25.9762 7.12009 26.2729 7.243 26.4917 7.46179C26.7105 7.68059 26.8334 7.97733 26.8334 8.28675V20.9999C26.8334 21.3093 26.7105 21.6061 26.4917 21.8249C26.2729 22.0437 25.9762 22.1666 25.6667 22.1666H19.6001L16.3334 26.2499ZM18.4789 19.8333H24.5001V9.45342H8.16675V19.8333H14.1879L16.3334 22.5143L18.4789 19.8333ZM2.33341 2.33325H22.1667V4.66659H3.50008V17.4999H1.16675V3.49992C1.16675 3.1905 1.28966 2.89375 1.50846 2.67496C1.72725 2.45617 2.024 2.33325 2.33341 2.33325Z",
                                                                        fill: "#FDB913",
                                                                    },
                                                                }),
                                                            ],
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    e("span", { staticClass: "title-menu" }, [
                                                        t._v("Liên hệ"),
                                                    ]),
                                                ],
                                            ),
                                        ]),
                                        t._v(" "),
                                        e("li", [
                                            e("a", { attrs: { href: "tel:0833228833" } }, [
                                                e("div", { staticClass: "icon-menu" }, [
                                                    e(
                                                        "svg", {
                                                            attrs: {
                                                                width: "28",
                                                                height: "28",
                                                                viewBox: "0 0 28 28",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                            },
                                                        }, [
                                                            e("path", {
                                                                attrs: {
                                                                    d: "M10.927 12.4623C12.0217 14.3856 13.6144 15.9783 15.5377 17.073L16.569 15.6287C16.7349 15.3964 16.9801 15.233 17.2583 15.1694C17.5365 15.1058 17.8283 15.1463 18.0787 15.2833C19.7287 16.1851 21.5509 16.7274 23.4255 16.8747C23.7181 16.8979 23.9912 17.0305 24.1903 17.246C24.3895 17.4616 24.5 17.7443 24.5 18.0378V23.2435C24.5001 23.5324 24.393 23.811 24.1994 24.0254C24.0059 24.2399 23.7397 24.3749 23.4523 24.4043C22.834 24.4685 22.211 24.5 21.5833 24.5C11.5967 24.5 3.5 16.4033 3.5 6.41667C3.5 5.789 3.5315 5.166 3.59567 4.54767C3.62513 4.26031 3.76015 3.99411 3.97459 3.80057C4.18903 3.60704 4.46764 3.49994 4.7565 3.5H9.96217C10.2557 3.49996 10.5384 3.61054 10.754 3.80969C10.9695 4.00884 11.1021 4.28193 11.1253 4.5745C11.2726 6.44909 11.8149 8.27129 12.7167 9.92133C12.8537 10.1717 12.8942 10.4635 12.8306 10.7417C12.767 11.0199 12.6036 11.2651 12.3713 11.431L10.927 12.4623ZM7.98467 11.6958L10.2013 10.1127C9.57225 8.75478 9.14124 7.31365 8.9215 5.83333H5.845C5.838 6.027 5.8345 6.22183 5.8345 6.41667C5.83333 15.1153 12.8847 22.1667 21.5833 22.1667C21.7782 22.1667 21.973 22.1632 22.1667 22.155V19.0785C20.6864 18.8588 19.2452 18.4278 17.8873 17.7987L16.3042 20.0153C15.6668 19.7677 15.0477 19.4753 14.4515 19.1403L14.3838 19.1018C12.0955 17.7995 10.2005 15.9045 8.89817 13.6162L8.85967 13.5485C8.52472 12.9523 8.23233 12.3332 7.98467 11.6958Z",
                                                                    fill: "#FDB913",
                                                                },
                                                            }),
                                                        ],
                                                    ),
                                                ]),
                                                t._v(" "),
                                                e("span", { staticClass: "title-menu" }, [
                                                    t._v("Kết nối"),
                                                ]),
                                            ]),
                                        ]),
                                        t._v(" "),
                                        e("li", [
                                            e("a", { on: { click: t.goToLogout } }, [
                                                e("div", { staticClass: "icon-menu" }, [
                                                    e(
                                                        "svg", {
                                                            attrs: {
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 20 20",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                            },
                                                        }, [
                                                            e("path", {
                                                                attrs: {
                                                                    d: "M10.195 17.8904H3.09366C2.65811 17.8904 2.30464 17.5369 2.30464 17.1014V2.89869C2.30464 2.46314 2.65814 2.10967 3.09366 2.10967H10.195C10.6314 2.10967 10.984 1.75698 10.984 1.32065C10.984 0.884317 10.6314 0.531555 10.195 0.531555H3.09366C1.7886 0.531555 0.726562 1.59363 0.726562 2.89869V17.1013C0.726562 18.4064 1.7886 19.4684 3.09366 19.4684H10.195C10.6314 19.4684 10.984 19.1157 10.984 18.6794C10.984 18.2431 10.6314 17.8904 10.195 17.8904Z",
                                                                    fill: "#121212",
                                                                },
                                                            }),
                                                            t._v(" "),
                                                            e("path", {
                                                                attrs: {
                                                                    d: "M19.4916 9.43822L14.6943 4.704C14.385 4.39784 13.8847 4.40181 13.5786 4.7119C13.2724 5.02199 13.2756 5.52144 13.5865 5.82759L17.0148 9.21097H7.82808C7.39175 9.21097 7.03906 9.56365 7.03906 9.99999C7.03906 10.4363 7.39175 10.789 7.82808 10.789H17.0148L13.5865 14.1724C13.2756 14.4786 13.2732 14.978 13.5786 15.2881C13.7332 15.4443 13.9368 15.5232 14.1404 15.5232C14.3408 15.5232 14.5412 15.4475 14.6943 15.296L19.4916 10.5617C19.6415 10.4134 19.7268 10.2114 19.7268 9.99995C19.7268 9.78857 19.6423 9.58737 19.4916 9.43822Z",
                                                                    fill: "#121212",
                                                                },
                                                            }),
                                                        ],
                                                    ),
                                                ]),
                                                t._v(" "),
                                                e("span", { staticClass: "title-menu" }, [
                                                    t._v("Đăng xuất"),
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                    t._v(" "),
                                    e("hr"),
                                ],
                            ),
                            t._v(" "),
                            e("ul", [
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/my-challenges" } }, [
                                            e("div", { staticClass: "icon-menu text-danger" }, [
                                                e(
                                                    "svg", {
                                                        staticClass: "icon-home",
                                                        attrs: {
                                                            width: "32",
                                                            height: "32",
                                                            viewBox: "0 0 32 32",
                                                            fill: "currentColor",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                        },
                                                    }, [
                                                        e("path", {
                                                            attrs: {
                                                                d: "M7.99992 25.3334H23.9999V12.2094L15.9999 4.93739L7.99992 12.2094V25.3334ZM25.3333 28.0001H6.66658C6.31296 28.0001 5.97382 27.8596 5.72378 27.6095C5.47373 27.3595 5.33325 27.0203 5.33325 26.6667V14.6667H1.33325L15.1026 2.14939C15.3481 1.92603 15.668 1.80225 15.9999 1.80225C16.3318 1.80225 16.6518 1.92603 16.8973 2.14939L30.6666 14.6667H26.6666V26.6667C26.6666 27.0203 26.5261 27.3595 26.2761 27.6095C26.026 27.8596 25.6869 28.0001 25.3333 28.0001ZM9.99992 17.3334H12.6666C12.6666 18.2174 13.0178 19.0653 13.6429 19.6904C14.268 20.3155 15.1159 20.6667 15.9999 20.6667C16.884 20.6667 17.7318 20.3155 18.3569 19.6904C18.9821 19.0653 19.3333 18.2174 19.3333 17.3334H21.9999C21.9999 18.9247 21.3678 20.4508 20.2426 21.576C19.1173 22.7012 17.5912 23.3334 15.9999 23.3334C14.4086 23.3334 12.8825 22.7012 11.7573 21.576C10.6321 20.4508 9.99992 18.9247 9.99992 17.3334Z",
                                                                fill: "#FDB913",
                                                            },
                                                        }),
                                                    ],
                                                ),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v("Thử thách của bạn"),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                                t._v(" "),
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/conquering" } }, [
                                            e("div", { staticClass: "icon-menu" }, [
                                                e(
                                                    "svg", {
                                                        attrs: {
                                                            width: "28",
                                                            height: "28",
                                                            viewBox: "0 0 28 28",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                        },
                                                    }, [
                                                        e("path", {
                                                            attrs: {
                                                                d: "M10.5001 8.79543L17.5001 25.1288L21.7689 15.1666H26.8334V12.8333H20.2312L17.5001 19.2044L10.5001 2.87109L6.23125 12.8333H1.16675V15.1666H7.76891L10.5001 8.79543Z",
                                                                fill: "#FDB913",
                                                            },
                                                        }),
                                                    ],
                                                ),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v(t._s(t.$t("profile.data-strava"))),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                                t._v(" "),
                                e(
                                    "li", [
                                        e("NuxtLink", { attrs: { to: "/profile" } }, [
                                            e("div", { staticClass: "icon-menu" }, [
                                                e(
                                                    "svg", {
                                                        attrs: {
                                                            width: "28",
                                                            height: "28",
                                                            viewBox: "0 0 28 28",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                        },
                                                    }, [
                                                        e("path", {
                                                            attrs: {
                                                                d: "M13.9999 25.6666C7.55642 25.6666 2.33325 20.4434 2.33325 13.9999C2.33325 7.55642 7.55642 2.33325 13.9999 2.33325C20.4434 2.33325 25.6666 7.55642 25.6666 13.9999C25.6666 20.4434 20.4434 25.6666 13.9999 25.6666ZM8.18175 21.2986C9.83323 22.6189 11.8855 23.3366 13.9999 23.3333C16.2983 23.3333 18.4018 22.5026 20.0281 21.1259C19.2683 20.3463 18.3598 19.7269 17.3565 19.3045C16.3531 18.8821 15.2752 18.6652 14.1866 18.6666C13.0579 18.6653 11.9413 18.8986 10.9076 19.3517C9.87392 19.8048 8.94566 20.4678 8.18175 21.2986ZM6.55192 19.6233C7.53245 18.5827 8.7157 17.7539 10.0287 17.1881C11.3418 16.6223 12.7568 16.3313 14.1866 16.3333C15.5652 16.3315 16.9305 16.602 18.2043 17.1294C19.478 17.6567 20.6351 18.4305 21.6089 19.4063C22.6077 18.0006 23.1975 16.3457 23.3129 14.6252C23.4283 12.9046 23.0649 11.1858 22.2628 9.65928C21.4608 8.13278 20.2515 6.85831 18.7692 5.97727C17.2869 5.09623 15.5895 4.64306 13.8653 4.66805C12.1411 4.69303 10.4575 5.19518 9.00136 6.1188C7.5452 7.04242 6.37337 8.35139 5.61589 9.90049C4.85841 11.4496 4.5449 13.1782 4.71012 14.8947C4.87535 16.6111 5.51285 18.2483 6.55192 19.6244V19.6233ZM13.9999 15.1666C12.7622 15.1666 11.5753 14.6749 10.7001 13.7998C9.82492 12.9246 9.33325 11.7376 9.33325 10.4999C9.33325 9.26224 9.82492 8.07526 10.7001 7.20009C11.5753 6.32492 12.7622 5.83325 13.9999 5.83325C15.2376 5.83325 16.4246 6.32492 17.2998 7.20009C18.1749 8.07526 18.6666 9.26224 18.6666 10.4999C18.6666 11.7376 18.1749 12.9246 17.2998 13.7998C16.4246 14.6749 15.2376 15.1666 13.9999 15.1666ZM13.9999 12.8333C14.6188 12.8333 15.2122 12.5874 15.6498 12.1498C16.0874 11.7122 16.3333 11.1188 16.3333 10.4999C16.3333 9.88108 16.0874 9.28759 15.6498 8.85C15.2122 8.41242 14.6188 8.16659 13.9999 8.16659C13.3811 8.16659 12.7876 8.41242 12.35 8.85C11.9124 9.28759 11.6666 9.88108 11.6666 10.4999C11.6666 11.1188 11.9124 11.7122 12.35 12.1498C12.7876 12.5874 13.3811 12.8333 13.9999 12.8333Z",
                                                                fill: "#FDB913",
                                                            },
                                                        }),
                                                    ],
                                                ),
                                            ]),
                                            t._v(" "),
                                            e("span", { staticClass: "title-menu" }, [
                                                t._v("Thông tin tài khoản"),
                                            ]),
                                        ]),
                                    ],
                                    1,
                                ),
                            ]),
                        ]);
                    }, [], !1,
                    null,
                    "4781bfca",
                    null,
                );
            e.default = component.exports;
        },
        177: function(t, e, n) {
            "use strict";
            n(38),
                n(1),
                n(3),
                n(68),
                n(108),
                n(16),
                n(2),
                n(19),
                n(32),
                n(24),
                n(72),
                n(49),
                n(12),
                n(4),
                n(64),
                n(80),
                n(55);
            var r = n(8);

            function o(t, e) {
                var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return l(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                                return l(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ?
                                    { done: !0 } :
                                    { done: !1, value: t[i++] };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    c = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return (c = t.done), t;
                    },
                    e: function(t) {
                        (f = !0), (o = t);
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return();
                        } finally {
                            if (f) throw o;
                        }
                    },
                };
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            var c =
                window.requestIdleCallback ||
                function(t) {
                    var e = Date.now();
                    return setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e));
                            },
                        });
                    }, 1);
                },
                f =
                window.cancelIdleCallback ||
                function(t) {
                    clearTimeout(t);
                },
                h =
                window.IntersectionObserver &&
                new window.IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch();
                    });
                });
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: { type: Boolean, default: !0 },
                    noPrefetch: { type: Boolean, default: !1 },
                },
                mounted: function() {
                    this.prefetch &&
                        !this.noPrefetch &&
                        (this.handleId = c(this.observe, { timeout: 2e3 }));
                },
                beforeDestroy: function() {
                    f(this.handleId),
                        this.__observed &&
                        (h.unobserve(this.$el), delete this.$el.__prefetch);
                },
                methods: {
                    observe: function() {
                        h &&
                            this.shouldPrefetch() &&
                            ((this.$el.__prefetch = this.prefetchLink.bind(this)),
                                h.observe(this.$el),
                                (this.__observed = !0));
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0;
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(
                            this.$nuxt.isOffline ||
                            (t && ((t.effectiveType || "").includes("2g") || t.saveData))
                        );
                    },
                    getPrefetchComponents: function() {
                        return this.$router
                            .resolve(this.to, this.$route, this.append)
                            .resolved.matched.map(function(t) {
                                return t.components.default;
                            })
                            .filter(function(t) {
                                return "function" == typeof t && !t.options && !t.__prefetched;
                            });
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            h.unobserve(this.$el);
                            var t,
                                e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch(function() {}),
                                        (n.__prefetched = !0);
                                }
                            } catch (t) {
                                e.e(t);
                            } finally {
                                e.f();
                            }
                        }
                    },
                },
            };
        },
        288: function(t, e, n) {
            var content = n(409);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("245790f0", content, !0, { sourceMap: !1 });
        },
        289: function(t, e, n) {
            var content = n(411);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("ac5c1b06", content, !0, { sourceMap: !1 });
        },
        292: function(t, e) {
            t.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABsElEQVRoge2Yy0rDQBSG/0kmtEisKK5c+ASKiDcQ26cRxY2iPoDgyr24ddEX6APUlT6BCi68FaQqFSpRcNLm6iIIFtpqyRmDcD4IDMkw53zMORMSgGEYhmH+MeJrcDkzE2eZyKBMn58LADCyTiQtLJA1LJA1LNAPa1zAGhc/T0yBVoFCUaKwInWG+AOBkl4BbavLUYGhKRMCgBwzELxGWuJo24HCioQwkgiFZVNXGI0CRdl1TE3qlUdKEhM7OZh279PGnjMxdWJ33ItUjKdDD07VTxU/9Q68nQa4W1dQV7+vcfc6wu2Gmzp5gKiEvEaM2rbCS9kD+nnEQLPi435LwXukaWqy4oxD4KXsoVWLMLmX7zrnYb+F97OAKiQADU1sWL2fCYv+rUwu8P3Eif3k+mKkSH+ckgoYOcBeSJL0GjFquy7uN12060m924sSRp52F0gF7KUkQafq43ZVQV2FcG9C3K0pNCt+hyAVpG+Y4XmJ+kELzklno0Ye8HzUxsdlCHvWJG1kUoHGcRuB0/vnxvtpAHURUoakLaF+yQ8yZxD4iyxrWCBrWIBhGIZhmBR8AlAegdvTb90RAAAAAElFTkSuQmCC";
        },
        293: function(t, e) {
            t.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRoge3WsUrDUBTG8X80qC1CCLg5uHSwQzfBxaGLiKPiW/gCdezQ1UfwCRQndRAXBQmCiw7dhFIIFdGESMUIGqcEoyK03ptw4fym3OXmfpyccwNCCCGEKI8FkCSJ1dw8/lC9+VHUVr1lZvbsygKY0PaGguQCVCs2G+sLY68bdZdG3dV53h/s9GF6apLd9jKLNYenMMa7fhhpfdd7prOzBMB265K+P+R1/1TfyV0nHyB+e+fcG+Dfv3DTDUZeB2HMhTcAoO8P9R38G61NfLC3onrLzJzrWPClAqlqxWatOc/hSW+sddoDt92Ama1VbQFSuQCq+4BI+/nzAUzsA+N7QO6Bv+6BQgPo+P6LmELyM1e2rAKPYaS8Ajr9OoVMZHyAbAoVMTF0ML4CxgeQKVQ24wPIFCqb8QGEEEIIIf7hEycURuUfhn7yAAAAAElFTkSuQmCC";
        },
        294: function(t, e, n) {
            var content = n(432);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("156aed09", content, !0, { sourceMap: !1 });
        },
        295: function(t, e, n) {
            var content = n(437);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("22f83418", content, !0, { sourceMap: !1 });
        },
        296: function(t, e, n) {
            t.exports = n.p + "img/arrow-collpen.78d8efe.svg";
        },
        297: function(t, e, n) {
            var content = n(446);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("915d0fa4", content, !0, { sourceMap: !1 });
        },
        299: function(t, e, n) {
            var content = n(449);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("47ed6445", content, !0, { sourceMap: !1 });
        },
        300: function(t, e, n) {
            var content = n(451);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("e1b16a8e", content, !0, { sourceMap: !1 });
        },
        348: function(t, e, n) {
            "use strict";
            var r = n(10),
                o = (n(41), n(1), n(38), n(8)),
                l = n(9),
                c = window.__NUXT__;

            function f() {
                if (!this._hydrated) return this.$fetch();
            }

            function h() {
                if (
                    (t = this).$vnode &&
                    t.$vnode.elm &&
                    t.$vnode.elm.dataset &&
                    t.$vnode.elm.dataset.fetchKey
                ) {
                    var t;
                    (this._hydrated = !0),
                    (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
                    var data = c.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e]);
                }
            }

            function d() {
                var t = this;
                return (
                    this._fetchPromise ||
                    (this._fetchPromise = m.call(this).then(function() {
                        delete t._fetchPromise;
                    })),
                    this._fetchPromise
                );
            }

            function m() {
                return v.apply(this, arguments);
            }

            function v() {
                return (v = Object(r.a)(
                    regeneratorRuntime.mark(function t() {
                        var e,
                            n,
                            r,
                            o = this;
                        return regeneratorRuntime.wrap(
                            function(t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                this.$nuxt.nbFetching++,
                                                (this.$fetchState.pending = !0),
                                                (this.$fetchState.error = null),
                                                (this._hydrated = !1),
                                                (e = null),
                                                (n = Date.now()),
                                                (t.prev = 6),
                                                (t.next = 9),
                                                this.$options.fetch.call(this)
                                            );
                                        case 9:
                                            t.next = 15;
                                            break;
                                        case 11:
                                            (t.prev = 11),
                                            (t.t0 = t.catch(6)),
                                            (e = Object(l.p)(t.t0));
                                        case 15:
                                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                                t.next = 19;
                                                break;
                                            }
                                            return (
                                                (t.next = 19),
                                                new Promise(function(t) {
                                                    return setTimeout(t, r);
                                                })
                                            );
                                        case 19:
                                            (this.$fetchState.error = e),
                                            (this.$fetchState.pending = !1),
                                            (this.$fetchState.timestamp = Date.now()),
                                            this.$nextTick(function() {
                                                return o.$nuxt.nbFetching--;
                                            });
                                        case 23:
                                        case "end":
                                            return t.stop();
                                    }
                            },
                            t,
                            this, [
                                [6, 11]
                            ],
                        );
                    }),
                )).apply(this, arguments);
            }
            e.a = {
                beforeCreate: function() {
                    Object(l.l)(this) &&
                        ((this._fetchDelay =
                                "number" == typeof this.$options.fetchDelay ?
                                this.$options.fetchDelay :
                                200),
                            o.default.util.defineReactive(this, "$fetchState", {
                                pending: !1,
                                error: null,
                                timestamp: Date.now(),
                            }),
                            (this.$fetch = d.bind(this)),
                            Object(l.a)(this, "created", h),
                            Object(l.a)(this, "beforeMount", f));
                },
            };
        },
        350: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = { name: "NotificationIcon" },
                o = n(22),
                component = Object(o.a)(
                    r,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "svg", {
                                attrs: {
                                    width: "29",
                                    height: "25",
                                    viewBox: "0 0 29 25",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                },
                            }, [
                                e("g", { attrs: { "clip-path": "url(#clip0_347_1721)" } }, [
                                    e("path", {
                                        attrs: {
                                            d: "M13.5764 4.9681C13.2988 4.9681 13.0736 4.74283 13.0736 4.46528V2.7758C13.0736 2.2217 12.622 1.77017 12.0679 1.77017C11.5138 1.77017 11.0623 2.2217 11.0623 2.7758V4.46528C11.0623 4.74283 10.837 4.9681 10.5595 4.9681C10.2819 4.9681 10.0566 4.74384 10.0566 4.46528V2.7758C10.0566 1.66658 10.9587 0.764526 12.0679 0.764526C13.1771 0.764526 14.0792 1.66658 14.0792 2.7758V4.46528C14.0792 4.74384 13.8539 4.9681 13.5764 4.9681Z",
                                            fill: "white",
                                        },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                        attrs: {
                                            d: "M12.0666 24.8999C10.1257 24.8999 8.54688 23.321 8.54688 21.3801C8.54688 21.1026 8.77214 20.8773 9.04969 20.8773C9.32725 20.8773 9.55251 21.1026 9.55251 21.3801C9.55251 22.7659 10.6808 23.8942 12.0666 23.8942C13.4524 23.8942 14.5807 22.7659 14.5807 21.3801C14.5807 21.1026 14.806 20.8773 15.0835 20.8773C15.3611 20.8773 15.5864 21.1026 15.5864 21.3801C15.5864 23.321 14.0075 24.8999 12.0666 24.8999Z",
                                            fill: "white",
                                        },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                        attrs: {
                                            d: "M20.616 21.8829H3.52018C2.68851 21.8829 2.01172 21.2061 2.01172 20.3745C2.01172 19.933 2.2038 19.5157 2.53968 19.228C4.12457 17.8885 5.02864 15.9396 5.02864 13.876V10.8209C5.02864 6.93914 8.18634 3.78143 12.0681 3.78143C15.9499 3.78143 19.1076 6.93914 19.1076 10.8209V13.876C19.1076 15.9406 20.0116 17.8885 21.5885 19.221C21.9324 19.5157 22.1245 19.933 22.1245 20.3745C22.1245 21.2061 21.4487 21.8829 20.616 21.8829ZM12.0681 4.78707C8.74045 4.78707 6.03427 7.49325 6.03427 10.8209V13.876C6.03427 16.2373 5.00048 18.4648 3.19737 19.9893C3.08172 20.0879 3.01736 20.2277 3.01736 20.3745C3.01736 20.652 3.24262 20.8773 3.52018 20.8773H20.616C20.8936 20.8773 21.1189 20.652 21.1189 20.3745C21.1189 20.2277 21.0545 20.0879 20.9429 19.9923C19.1367 18.4648 18.1019 16.2363 18.1019 13.876V10.8209C18.1019 7.49325 15.3958 4.78707 12.0681 4.78707Z",
                                            fill: "white",
                                        },
                                    }),
                                ]),
                                t._v(" "),
                                e("circle", {
                                    attrs: {
                                        cx: "21.3188",
                                        cy: "7",
                                        r: "6.83835",
                                        fill: "#CA0303",
                                    },
                                }),
                                t._v(" "),
                                e("defs", [
                                    e("clipPath", { attrs: { id: "clip0_347_1721" } }, [
                                        e("rect", {
                                            attrs: {
                                                width: "24.1353",
                                                height: "24.1353",
                                                fill: "white",
                                                transform: "translate(0 0.764526)",
                                            },
                                        }),
                                    ]),
                                ]),
                            ],
                        );
                    }, [], !1,
                    null,
                    "b30768f4",
                    null,
                );
            e.default = component.exports;
        },
        360: function(t, e, n) {
            n(361), (t.exports = n(362));
        },
        362: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(19), n(32), n(72), n(4), n(64), n(80);
                    var e = n(28),
                        r = n(10),
                        o =
                        (n(190),
                            n(377),
                            n(389),
                            n(390),
                            n(41),
                            n(24),
                            n(1),
                            n(3),
                            n(2),
                            n(5),
                            n(68),
                            n(108),
                            n(14),
                            n(16),
                            n(12),
                            n(49),
                            n(55),
                            n(38),
                            n(8)),
                        l = n(335),
                        c = n(131),
                        f = n(9),
                        h = n(67),
                        d = n(348),
                        m = n(177);

                    function v(t, e) {
                        var n =
                            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                            t["@@iterator"];
                        if (!n) {
                            if (
                                Array.isArray(t) ||
                                (n = (function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return x(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if (
                                        "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                    )
                                        return x(t, e);
                                })(t)) ||
                                (e && t && "number" == typeof t.length)
                            ) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ?
                                            { done: !0 } :
                                            { done: !1, value: t[i++] };
                                    },
                                    e: function(t) {
                                        throw t;
                                    },
                                    f: r,
                                };
                            }
                            throw new TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                        }
                        var o,
                            l = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = n.call(t);
                            },
                            n: function() {
                                var t = n.next();
                                return (l = t.done), t;
                            },
                            e: function(t) {
                                (c = !0), (o = t);
                            },
                            f: function() {
                                try {
                                    l || null == n.return || n.return();
                                } finally {
                                    if (c) throw o;
                                }
                            },
                        };
                    }

                    function x(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n;
                    }
                    o.default.__nuxt__fetch__mixin__ ||
                        (o.default.mixin(d.a), (o.default.__nuxt__fetch__mixin__ = !0)),
                        o.default.component(m.a.name, m.a),
                        o.default.component("NLink", m.a),
                        t.fetch || (t.fetch = l.a);
                    var w,
                        y,
                        C = [],
                        _ = window.__NUXT__ || {},
                        k = _.config || {};
                    k._app && (n.p = Object(f.v)(k._app.cdnURL, k._app.assetsPath)),
                        Object.assign(o.default.config, { silent: !0, performance: !1 });
                    var j = o.default.config.errorHandler || console.error;

                    function O(t, e, n) {
                        for (
                            var r = function(component) {
                                    var t =
                                        (function(component, t) {
                                            if (!component ||
                                                !component.options ||
                                                !component.options[t]
                                            )
                                                return {};
                                            var option = component.options[t];
                                            if ("function" == typeof option) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 2 ? e - 2 : 0),
                                                        r = 2; r < e; r++
                                                )
                                                    n[r - 2] = arguments[r];
                                                return option.apply(void 0, n);
                                            }
                                            return option;
                                        })(component, "transition", e, n) || {};
                                    return "string" == typeof t ? { name: t } : t;
                                },
                                o = n ? Object(f.g)(n) : [],
                                l = Math.max(t.length, o.length),
                                c = [],
                                h = function() {
                                    var e = Object.assign({}, r(t[i])),
                                        n = Object.assign({}, r(o[i]));
                                    Object.keys(e)
                                        .filter(function(t) {
                                            return (
                                                void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                            );
                                        })
                                        .forEach(function(t) {
                                            n[t] = e[t];
                                        }),
                                        c.push(n);
                                },
                                i = 0; i < l; i++
                        )
                            h();
                        return c;
                    }

                    function L(t, e, n) {
                        return $.apply(this, arguments);
                    }

                    function $() {
                        return ($ = Object(r.a)(
                            regeneratorRuntime.mark(function t(e, n, r) {
                                var o,
                                    l,
                                    c,
                                    h,
                                    d = this;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (
                                                        ((this._routeChanged =
                                                                Boolean(w.nuxt.err) || n.name !== e.name),
                                                            (this._paramChanged = !this._routeChanged && n.path !== e.path),
                                                            (this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath),
                                                            (this._diffQuery = this._queryChanged ?
                                                                Object(f.i)(e.query, n.query) :
                                                                []),
                                                            (this._routeChanged || this._paramChanged) &&
                                                            this.$loading.start &&
                                                            !this.$loading.manual &&
                                                            this.$loading.start(),
                                                            (t.prev = 5), !this._queryChanged)
                                                    ) {
                                                        t.next = 12;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 9),
                                                        Object(f.r)(e, function(t, e) {
                                                            return { Component: t, instance: e };
                                                        })
                                                    );
                                                case 9:
                                                    (o = t.sent),
                                                    o.some(function(t) {
                                                            var r = t.Component,
                                                                o = t.instance,
                                                                l = r.options.watchQuery;
                                                            return (!0 === l ||
                                                                (Array.isArray(l) ?
                                                                    l.some(function(t) {
                                                                        return d._diffQuery[t];
                                                                    }) :
                                                                    "function" == typeof l &&
                                                                    l.apply(o, [e.query, n.query]))
                                                            );
                                                        }) &&
                                                        this.$loading.start &&
                                                        !this.$loading.manual &&
                                                        this.$loading.start();
                                                case 12:
                                                    r(), (t.next = 26);
                                                    break;
                                                case 15:
                                                    if (
                                                        ((t.prev = 15),
                                                            (t.t0 = t.catch(5)),
                                                            (l = t.t0 || {}),
                                                            (c =
                                                                l.statusCode ||
                                                                l.status ||
                                                                (l.response && l.response.status) ||
                                                                500),
                                                            (h = l.message || ""), !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                                                    ) {
                                                        t.next = 23;
                                                        break;
                                                    }
                                                    return window.location.reload(!0), t.abrupt("return");
                                                case 23:
                                                    this.error({ statusCode: c, message: h }),
                                                        this.$nuxt.$emit("routeChanged", e, n, l),
                                                        r();
                                                case 26:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this, [
                                        [5, 15]
                                    ],
                                );
                            }),
                        )).apply(this, arguments);
                    }

                    function S(t, e) {
                        return _.serverRendered && e && Object(f.b)(t, e), (t._Ctor = t), t;
                    }

                    function T(t, e, n) {
                        var r = this,
                            o = ["i18n", "normalize-url"],
                            l = !1;
                        if (
                            (void 0 !== n &&
                                ((o = []),
                                    (n = Object(f.s)(n)).options.middleware &&
                                    (o = o.concat(n.options.middleware)),
                                    t.forEach(function(t) {
                                        t.options.middleware && (o = o.concat(t.options.middleware));
                                    })),
                                (o = o.map(function(t) {
                                    return "function" == typeof t ?
                                        t :
                                        ("function" != typeof c.a[t] &&
                                            ((l = !0),
                                                r.error({
                                                    statusCode: 500,
                                                    message: "Unknown middleware " + t,
                                                })),
                                            c.a[t]);
                                })), !l)
                        )
                            return Object(f.o)(o, e);
                    }

                    function z(t, e, n) {
                        return A.apply(this, arguments);
                    }

                    function A() {
                        return (
                            (A = Object(r.a)(
                                regeneratorRuntime.mark(function t(e, n, o) {
                                    var l,
                                        c,
                                        d,
                                        m,
                                        x,
                                        y,
                                        _,
                                        k,
                                        j,
                                        L,
                                        $,
                                        S,
                                        z,
                                        A,
                                        E,
                                        P = this;
                                    return regeneratorRuntime.wrap(
                                        function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if (!1 !== this._routeChanged ||
                                                            !1 !== this._paramChanged ||
                                                            !1 !== this._queryChanged
                                                        ) {
                                                            t.next = 2;
                                                            break;
                                                        }
                                                        return t.abrupt("return", o());
                                                    case 2:
                                                        return (!1,
                                                            e === n ?
                                                            ((C = []), !0) :
                                                            ((l = []),
                                                                (C = Object(f.g)(n, l).map(function(t, i) {
                                                                    return Object(f.c)(n.matched[l[i]].path)(
                                                                        n.params,
                                                                    );
                                                                }))),
                                                            (c = !1),
                                                            (d = function(path) {
                                                                n.path === path.path &&
                                                                    P.$loading.finish &&
                                                                    P.$loading.finish(),
                                                                    n.path !== path.path &&
                                                                    P.$loading.pause &&
                                                                    P.$loading.pause(),
                                                                    c || ((c = !0), o(path));
                                                            }),
                                                            (t.next = 8),
                                                            Object(f.t)(w, {
                                                                route: e,
                                                                from: n,
                                                                next: d.bind(this),
                                                            })
                                                        );
                                                    case 8:
                                                        if (
                                                            ((this._dateLastError = w.nuxt.dateErr),
                                                                (this._hadError = Boolean(w.nuxt.err)),
                                                                (m = []),
                                                                (x = Object(f.g)(e, m)).length)
                                                        ) {
                                                            t.next = 27;
                                                            break;
                                                        }
                                                        return (t.next = 15), T.call(this, x, w.context);
                                                    case 15:
                                                        if (!c) {
                                                            t.next = 17;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 17:
                                                        return (
                                                            (y = (h.a.options || h.a).layout),
                                                            (t.next = 20),
                                                            this.loadLayout(
                                                                "function" == typeof y ?
                                                                y.call(h.a, w.context) :
                                                                y,
                                                            )
                                                        );
                                                    case 20:
                                                        return (
                                                            (_ = t.sent),
                                                            (t.next = 23),
                                                            T.call(this, x, w.context, _)
                                                        );
                                                    case 23:
                                                        if (!c) {
                                                            t.next = 25;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 25:
                                                        return (
                                                            w.context.error({
                                                                statusCode: 404,
                                                                message: "This page could not be found",
                                                            }),
                                                            t.abrupt("return", o())
                                                        );
                                                    case 27:
                                                        return (
                                                            x.forEach(function(t) {
                                                                t._Ctor &&
                                                                    t._Ctor.options &&
                                                                    ((t.options.asyncData =
                                                                            t._Ctor.options.asyncData),
                                                                        (t.options.fetch = t._Ctor.options.fetch));
                                                            }),
                                                            this.setTransitions(O(x, e, n)),
                                                            (t.prev = 29),
                                                            (t.next = 32),
                                                            T.call(this, x, w.context)
                                                        );
                                                    case 32:
                                                        if (!c) {
                                                            t.next = 34;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 34:
                                                        if (!w.context._errored) {
                                                            t.next = 36;
                                                            break;
                                                        }
                                                        return t.abrupt("return", o());
                                                    case 36:
                                                        return (
                                                            "function" == typeof(k = x[0].options.layout) &&
                                                            (k = k(w.context)),
                                                            (t.next = 40),
                                                            this.loadLayout(k)
                                                        );
                                                    case 40:
                                                        return (
                                                            (k = t.sent),
                                                            (t.next = 43),
                                                            T.call(this, x, w.context, k)
                                                        );
                                                    case 43:
                                                        if (!c) {
                                                            t.next = 45;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 45:
                                                        if (!w.context._errored) {
                                                            t.next = 47;
                                                            break;
                                                        }
                                                        return t.abrupt("return", o());
                                                    case 47:
                                                        (j = !0),
                                                        (t.prev = 48),
                                                        (L = v(x)),
                                                        (t.prev = 50),
                                                        L.s();
                                                    case 52:
                                                        if (($ = L.n()).done) {
                                                            t.next = 63;
                                                            break;
                                                        }
                                                        if (
                                                            "function" ==
                                                            typeof(S = $.value).options.validate
                                                        ) {
                                                            t.next = 56;
                                                            break;
                                                        }
                                                        return t.abrupt("continue", 61);
                                                    case 56:
                                                        return (t.next = 58), S.options.validate(w.context);
                                                    case 58:
                                                        if ((j = t.sent)) {
                                                            t.next = 61;
                                                            break;
                                                        }
                                                        return t.abrupt("break", 63);
                                                    case 61:
                                                        t.next = 52;
                                                        break;
                                                    case 63:
                                                        t.next = 68;
                                                        break;
                                                    case 65:
                                                        (t.prev = 65), (t.t0 = t.catch(50)), L.e(t.t0);
                                                    case 68:
                                                        return (t.prev = 68), L.f(), t.finish(68);
                                                    case 71:
                                                        t.next = 77;
                                                        break;
                                                    case 73:
                                                        return (
                                                            (t.prev = 73),
                                                            (t.t1 = t.catch(48)),
                                                            this.error({
                                                                statusCode: t.t1.statusCode || "500",
                                                                message: t.t1.message,
                                                            }),
                                                            t.abrupt("return", o())
                                                        );
                                                    case 77:
                                                        if (j) {
                                                            t.next = 80;
                                                            break;
                                                        }
                                                        return (
                                                            this.error({
                                                                statusCode: 404,
                                                                message: "This page could not be found",
                                                            }),
                                                            t.abrupt("return", o())
                                                        );
                                                    case 80:
                                                        return (
                                                            (t.next = 82),
                                                            Promise.all(
                                                                x.map(
                                                                    (function() {
                                                                        var t = Object(r.a)(
                                                                            regeneratorRuntime.mark(function t(r, i) {
                                                                                var o, l, c, h, d, v, x, y, p;
                                                                                return regeneratorRuntime.wrap(
                                                                                    function(t) {
                                                                                        for (;;)
                                                                                            switch ((t.prev = t.next)) {
                                                                                                case 0:
                                                                                                    if (
                                                                                                        ((r._path = Object(f.c)(
                                                                                                                e.matched[m[i]].path,
                                                                                                            )(e.params)),
                                                                                                            (r._dataRefresh = !1),
                                                                                                            (o = r._path !== C[i]),
                                                                                                            P._routeChanged && o ?
                                                                                                            (r._dataRefresh = !0) :
                                                                                                            P._paramChanged && o ?
                                                                                                            ((l =
                                                                                                                    r.options
                                                                                                                    .watchParam),
                                                                                                                (r._dataRefresh = !1 !== l)) :
                                                                                                            P._queryChanged &&
                                                                                                            (!0 ===
                                                                                                                (c =
                                                                                                                    r.options
                                                                                                                    .watchQuery) ?
                                                                                                                (r._dataRefresh = !0) :
                                                                                                                Array.isArray(c) ?
                                                                                                                (r._dataRefresh =
                                                                                                                    c.some(
                                                                                                                        function(
                                                                                                                            t,
                                                                                                                        ) {
                                                                                                                            return P
                                                                                                                                ._diffQuery[
                                                                                                                                    t
                                                                                                                                ];
                                                                                                                        },
                                                                                                                    )) :
                                                                                                                "function" ==
                                                                                                                typeof c &&
                                                                                                                (z ||
                                                                                                                    (z = Object(
                                                                                                                        f.h,
                                                                                                                    )(e)),
                                                                                                                    (r._dataRefresh =
                                                                                                                        c.apply(
                                                                                                                            z[i], [
                                                                                                                                e.query,
                                                                                                                                n.query,
                                                                                                                            ],
                                                                                                                        )))),
                                                                                                            P._hadError ||
                                                                                                            !P._isMounted ||
                                                                                                            r._dataRefresh)
                                                                                                    ) {
                                                                                                        t.next = 6;
                                                                                                        break;
                                                                                                    }
                                                                                                    return t.abrupt("return");
                                                                                                case 6:
                                                                                                    return (
                                                                                                        (h = []),
                                                                                                        (d =
                                                                                                            r.options.asyncData &&
                                                                                                            "function" ==
                                                                                                            typeof r.options
                                                                                                            .asyncData),
                                                                                                        (v =
                                                                                                            Boolean(
                                                                                                                r.options.fetch,
                                                                                                            ) &&
                                                                                                            r.options.fetch.length),
                                                                                                        (x = d && v ? 30 : 45),
                                                                                                        d &&
                                                                                                        ((y = Object(f.q)(
                                                                                                                r.options.asyncData,
                                                                                                                w.context,
                                                                                                            )).then(function(t) {
                                                                                                                Object(f.b)(r, t),
                                                                                                                    P.$loading.increase &&
                                                                                                                    P.$loading.increase(
                                                                                                                        x,
                                                                                                                    );
                                                                                                            }),
                                                                                                            h.push(y)),
                                                                                                        (P.$loading.manual = !1 === r.options.loading),
                                                                                                        v &&
                                                                                                        (((p = r.options.fetch(
                                                                                                                    w.context,
                                                                                                                )) &&
                                                                                                                (p instanceof Promise ||
                                                                                                                    "function" ==
                                                                                                                    typeof p.then)) ||
                                                                                                            (p =
                                                                                                                Promise.resolve(p)),
                                                                                                            p.then(function(t) {
                                                                                                                P.$loading.increase &&
                                                                                                                    P.$loading.increase(
                                                                                                                        x,
                                                                                                                    );
                                                                                                            }),
                                                                                                            h.push(p)),
                                                                                                        t.abrupt(
                                                                                                            "return",
                                                                                                            Promise.all(h),
                                                                                                        )
                                                                                                    );
                                                                                                case 14:
                                                                                                case "end":
                                                                                                    return t.stop();
                                                                                            }
                                                                                    },
                                                                                    t,
                                                                                );
                                                                            }),
                                                                        );
                                                                        return function(e, n) {
                                                                            return t.apply(this, arguments);
                                                                        };
                                                                    })(),
                                                                ),
                                                            )
                                                        );
                                                    case 82:
                                                        c ||
                                                            (this.$loading.finish &&
                                                                !this.$loading.manual &&
                                                                this.$loading.finish(),
                                                                o()),
                                                            (t.next = 99);
                                                        break;
                                                    case 85:
                                                        if (
                                                            ((t.prev = 85),
                                                                (t.t2 = t.catch(29)),
                                                                "ERR_REDIRECT" !== (A = t.t2 || {}).message)
                                                        ) {
                                                            t.next = 90;
                                                            break;
                                                        }
                                                        return t.abrupt(
                                                            "return",
                                                            this.$nuxt.$emit("routeChanged", e, n, A),
                                                        );
                                                    case 90:
                                                        return (
                                                            (C = []),
                                                            Object(f.k)(A),
                                                            "function" ==
                                                            typeof(E = (h.a.options || h.a).layout) &&
                                                            (E = E(w.context)),
                                                            (t.next = 96),
                                                            this.loadLayout(E)
                                                        );
                                                    case 96:
                                                        this.error(A),
                                                            this.$nuxt.$emit("routeChanged", e, n, A),
                                                            o();
                                                    case 99:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this, [
                                            [29, 85],
                                            [48, 73],
                                            [50, 65, 68, 71],
                                        ],
                                    );
                                }),
                            )),
                            A.apply(this, arguments)
                        );
                    }

                    function E(t, n) {
                        Object(f.d)(t, function(t, n, r, l) {
                            return (
                                "object" !== Object(e.a)(t) ||
                                t.options ||
                                (((t = o.default.extend(t))._Ctor = t),
                                    (r.components[l] = t)),
                                t
                            );
                        });
                    }

                    function P(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError &&
                            this._dateLastError === this.$options.nuxt.dateErr &&
                            (e = !1);
                        var n = e ?
                            (h.a.options || h.a).layout :
                            t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(w.context)), this.setLayout(n);
                    }

                    function R(t) {
                        t._hadError &&
                            t._dateLastError === t.$options.nuxt.dateErr &&
                            t.error();
                    }

                    function M(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                        ) {
                            var r = Object(f.h)(t),
                                l = Object(f.g)(t),
                                c = !1;
                            o.default.nextTick(function() {
                                r.forEach(function(t, i) {
                                        if (
                                            t &&
                                            !t._isDestroyed &&
                                            t.constructor._dataRefresh &&
                                            l[i] === t.constructor &&
                                            !0 !== t.$vnode.data.keepAlive &&
                                            "function" == typeof t.constructor.options.data
                                        ) {
                                            var e = t.constructor.options.data.call(t);
                                            for (var n in e) o.default.set(t.$data, n, e[n]);
                                            c = !0;
                                        }
                                    }),
                                    c &&
                                    window.$nuxt.$nextTick(function() {
                                        window.$nuxt.$emit("triggerScroll");
                                    }),
                                    R(n);
                            });
                        }
                    }

                    function D(t) {
                        window.onNuxtReadyCbs.forEach(function(e) {
                                "function" == typeof e && e(t);
                            }),
                            "function" == typeof window._onNuxtLoaded &&
                            window._onNuxtLoaded(t),
                            y.afterEach(function(e, n) {
                                o.default.nextTick(function() {
                                    return t.$nuxt.$emit("routeChanged", e, n);
                                });
                            });
                    }

                    function N() {
                        return (
                            (N = Object(r.a)(
                                regeneratorRuntime.mark(function t(e) {
                                    var n, l, c, h, d;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (w = e.app),
                                                        (y = e.router),
                                                        e.store,
                                                        (n = new o.default(w)),
                                                        (l = _.layout || "default"),
                                                        (t.next = 7),
                                                        n.loadLayout(l)
                                                    );
                                                case 7:
                                                    return (
                                                        n.setLayout(l),
                                                        (c = function() {
                                                            n.$mount("#__nuxt"),
                                                                y.afterEach(E),
                                                                y.afterEach(P.bind(n)),
                                                                y.afterEach(M.bind(n)),
                                                                o.default.nextTick(function() {
                                                                    D(n);
                                                                });
                                                        }),
                                                        (t.next = 11),
                                                        Promise.all(
                                                            ((m = w.context.route),
                                                                Object(f.d)(
                                                                    m,
                                                                    (function() {
                                                                        var t = Object(r.a)(
                                                                            regeneratorRuntime.mark(
                                                                                function t(e, n, r, o, l) {
                                                                                    var c;
                                                                                    return regeneratorRuntime.wrap(
                                                                                        function(t) {
                                                                                            for (;;)
                                                                                                switch ((t.prev = t.next)) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            "function" != typeof e ||
                                                                                                            e.options
                                                                                                        ) {
                                                                                                            t.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (t.next = 3), e();
                                                                                                    case 3:
                                                                                                        e = t.sent;
                                                                                                    case 4:
                                                                                                        return (
                                                                                                            (c = S(
                                                                                                                Object(f.s)(e),
                                                                                                                _.data ? _.data[l] : null,
                                                                                                            )),
                                                                                                            (r.components[o] = c),
                                                                                                            t.abrupt("return", c)
                                                                                                        );
                                                                                                    case 7:
                                                                                                    case "end":
                                                                                                        return t.stop();
                                                                                                }
                                                                                        },
                                                                                        t,
                                                                                    );
                                                                                },
                                                                            ),
                                                                        );
                                                                        return function(e, n, r, o, l) {
                                                                            return t.apply(this, arguments);
                                                                        };
                                                                    })(),
                                                                )),
                                                        )
                                                    );
                                                case 11:
                                                    if (
                                                        ((h = t.sent),
                                                            (n.setTransitions =
                                                                n.$options.nuxt.setTransitions.bind(n)),
                                                            h.length &&
                                                            (n.setTransitions(O(h, y.currentRoute)),
                                                                (C = y.currentRoute.matched.map(function(t) {
                                                                    return Object(f.c)(t.path)(
                                                                        y.currentRoute.params,
                                                                    );
                                                                }))),
                                                            (n.$loading = {}),
                                                            _.error && n.error(_.error),
                                                            y.beforeEach(L.bind(n)),
                                                            y.beforeEach(z.bind(n)), !_.serverRendered ||
                                                            !Object(f.n)(_.routePath, n.context.route.path))
                                                    ) {
                                                        t.next = 20;
                                                        break;
                                                    }
                                                    return t.abrupt("return", c());
                                                case 20:
                                                    return (
                                                        (d = function() {
                                                            E(y.currentRoute, y.currentRoute),
                                                                P.call(n, y.currentRoute),
                                                                R(n),
                                                                c();
                                                        }),
                                                        (t.next = 23),
                                                        new Promise(function(t) {
                                                            return setTimeout(t, 0);
                                                        })
                                                    );
                                                case 23:
                                                    z.call(
                                                        n,
                                                        y.currentRoute,
                                                        y.currentRoute,
                                                        function(path) {
                                                            if (path) {
                                                                var t = y.afterEach(function(e, n) {
                                                                    t(), d();
                                                                });
                                                                y.push(path, void 0, function(t) {
                                                                    t && j(t);
                                                                });
                                                            } else d();
                                                        },
                                                    );
                                                case 24:
                                                case "end":
                                                    return t.stop();
                                            }
                                        var m;
                                    }, t);
                                }),
                            )),
                            N.apply(this, arguments)
                        );
                    }
                    Object(h.b)(null, _.config)
                        .then(function(t) {
                            return N.apply(this, arguments);
                        })
                        .catch(j);
                }.call(this, n(42));
        },
        396: function(t, e, n) {
            "use strict";
            n.r(e),
                (e.default = function(t) {
                    var e = t.store,
                        n = t.redirect;
                    return (
                        console.log(1234, e.state.auth),
                        e.state.auth.loggedIn || e.state.auth.user ?
                        1 !== e.state.auth.user.isAdmin ?
                        n("/admin/login") :
                        void 0 :
                        n("/admin/login")
                    );
                });
        },
        397: function(t, e) {},
        398: function(t, e, n) {
            "use strict";
            n.r(e),
                (e.default = function(t) {
                    t.store, t.redirect;
                });
        },
        399: function(t, e, n) {
            "use strict";
            n.r(e),
                (e.default = function(t) {
                    t.isHMR;
                    var e = t.app,
                        n = t.store;
                    t.route, t.params, t.error, t.redirect, e.i18n.fallbackLocale;
                    e.$axios
                        .$get("/master/ip")
                        .then(function(t) {
                            console.log(12345, t.data),
                                n.commit("i18n/SET_LANG", t.data),
                                (e.i18n.locale = t.data);
                        })
                        .catch(function(t) {});
                });
        },
        400: function(t, e, n) {
            "use strict";
            n.r(e);
            n(12), n(18);
            e.default = function(t) {
                var e = t.route,
                    n = t.redirect,
                    r = e.fullPath.replace(/([^:]\/)\/+/g, "$1");
                r !== e.fullPath && n(r);
            };
        },
        408: function(t, e, n) {
            "use strict";
            n(288);
        },
        409: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        410: function(t, e, n) {
            "use strict";
            n(289);
        },
        411: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 3px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #FDB913;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        417: function(t, e, n) {
            var content = n(418);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0, n(47).default)("19199133", content, !0, { sourceMap: !1 });
        },
        418: function(t, e, n) {
            var r = n(46),
                o = n(291),
                l = n(419),
                c = n(420),
                f = n(421),
                h = r(!1);
            h.push([
                t.i,
                "@import url(https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;400;500;600;900&display=swap);",
            ]);
            var d = o(l),
                m = o(c),
                v = o(f);
            h.push([
                    t.i,
                    '.position-relative{min-height:500px}.header{width:100%}.header .logo{display:flex;align-items:center;justify-content:space-between}.header .top-header{width:100%;background:#fff}.header .top-header ul.ul-top{width:100%;margin:0;padding:0;display:flex;justify-content:flex-start;align-items:center}.header .top-header ul.ul-top>li{list-style:none;padding:0 10px;position:relative}.header .top-header ul.ul-top>li>a{font-family:"Livvic",sans-serif;font-size:13px;font-weight:500}.header .top-header ul.ul-top>li>a span.icon-top{color:#fdb913}.header .top-header ul.ul-top>li>a span{color:#000}.header .top-header ul.ul-top>li>a:hover{text-decoration:none}.header .logo-menu{width:100%;background:#000;padding:1rem 0}.header .logo-menu .menu{width:100%;height:100%;display:flex;align-items:center}.header .logo-menu .menu ul.main-menu{width:100%;margin:0;padding:0;list-style-type:none;display:flex;flex-wrap:wrap;justify-content:flex-start}.header .logo-menu .menu ul.main-menu>li{position:relative;margin-right:30px}.header .logo-menu .menu ul.main-menu>li:hover ul.sub-menu{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1;visibility:visible}.header .logo-menu .menu ul.main-menu>li>a{color:#fff;font-family:"Livvic",sans-serif;font-size:20px;line-height:.1em;letter-spacing:0px;font-style:normal;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.header .logo-menu .menu ul.main-menu>li>a:hover{text-decoration:none;color:#fdb913;border-bottom:2px #fdb913 solid}.header .logo-menu .menu ul.main-menu>li .sub-menu{width:100%;padding:30px 40px;background:#fff;list-style-type:none;position:fixed;top:155px;left:0;margin:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;visibility:hidden;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;box-shadow:0 0 3px #ccc;z-index:99999}.header .logo-menu .menu ul.main-menu>li .sub-menu>li{display:flex}.header .logo-menu .menu ul.main-menu>li .sub-menu>li>a{padding:7px 15px;color:#121212;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.px-custom{padding-left:4rem;padding-right:4rem}.notification-user-info{width:100%;display:flex;height:100%;align-items:center;justify-content:flex-end;position:relative}.notification-user-info .list-notification{width:436px;height:500px;background:red;position:absolute}.notification-user-info .notification{position:relative;cursor:pointer}.notification-user-info .notification .number-notification{position:absolute;top:7px;right:17px;font-size:10px;font-family:"Livvic",sans-serif;font-weight:bold;color:#fff}.notification-user-info .user-info{color:#fff;display:flex;align-items:center;justify-content:flex-end}.notification-user-info .user-info .img-user{width:40px;max-height:40px;height:40px;overflow:hidden;position:relative;border-radius:50%;border:2px #fff solid}.notification-user-info .user-info .img-user img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%}.dropdown-notification .title-notification-drop{width:100%;font-family:"Livvic",sans-serif;font-weight:bold;font-size:20px;color:#121212;padding:19px 30px}.dropdown-notification ul{width:436px;transform:translate3d(-290px, 52px, 0px) !important;filter:drop-shadow(0px 2px 2px rgba(18, 18, 18, 0.25))}.dropdown-notification ul li a{background:#fff;display:flex !important;justify-content:space-between;white-space:unset;align-items:center}.dropdown-notification ul li a .info-notification{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400 !important;font-size:15px;line-height:19px;color:#121212 !important;width:calc(100% - 40px);justify-content:start;padding:0 10px}.img-avatar-notification{width:40px;height:40px;border-radius:50%;border:#fff 2px solid;justify-content:start;position:relative}.img-avatar-notification img{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.time-post{color:#fdb913;font-style:normal;font-weight:400;font-size:15px;line-height:25px}.read-more-notification{width:100%;display:flex;justify-content:flex-end;padding:10px 25px}.read-more-notification a{color:#fdb913;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:25px;text-decoration:underline}.btn-link:focus{outline:0 !important}.dropdown-toggle-no-caret:focus{outline:0 !important}.dropdown-user-info button{display:flex;align-items:center;color:#fff}.dropdown-user-info button:hover{color:#fdb913}.dropdown-user-info ul{width:219px;transform:translate3d(-136px, 60px, 0px) !important}.dropdown-user-info ul li a{padding:10px 25px;display:flex;justify-content:space-between}.dropdown-user-info ul li a .icon-logout{justify-content:flex-end}.dropdown-user-info ul li+li{border-top:1px solid #e1e1e1}.title-submenu{font-size:15px;font-family:"Livvic",sans-serif;color:#121212;font-weight:bold;padding:15px}.title-submenu::after{content:"";width:100px;height:2px;background:#121212;display:flex;margin-top:15px}.btn-menu-mobile{display:none}.wrapper-slider{width:100%;height:676px;background:#121212;background-image:url(' +
                    d +
                    ');display:flex;align-items:center}.wrap-slider{width:100%}.intro-challenge{width:100%}.intro-challenge .title-introl-challenge{width:100%;font-size:80px;font-family:"Livvic",sans-serif;font-weight:900;color:#fff;text-transform:uppercase;font-style:normal;line-height:100px}.intro-challenge .description-introl-challenge{width:100%;font-size:35px;font-family:"Livvic",sans-serif;font-weight:900;color:#fff;text-transform:uppercase;margin-top:30px}.wrap-btn{width:100%;text-align:center}.btn-now{background:#121212;border:1px solid #fff;box-sizing:border-box;border-radius:5px;padding:10px 20px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;color:#fdb913;margin-top:50px}.wrap-medal{width:100%}.mission{width:100%;background:#fff;background-image:url(' +
                    m +
                    ')}.wrap-mission{width:100%;padding:0 7rem}.wrap-mission .head-mission{width:100%;text-align:center;margin-top:80px}.wrap-mission .head-mission .ms1{font-family:"Livvic",sans-serif;font-size:35px;text-transform:uppercase;font-weight:800}.wrap-mission .head-mission .ms2{font-family:"Livvic",sans-serif;font-size:80px;text-transform:uppercase;font-weight:800;line-height:50px}.line img{animation:pulse 2s infinite;transition:width 2s}.content-mission{width:100%;margin-top:20px}.content-mission .image-mission{width:100%}.content-mission .image-mission img{width:100%;border-radius:5px}.text-content-mission{width:100%;margin-top:20px;font-family:"Livvic",sans-serif;font-size:20px;color:#000;margin-bottom:50px}.text-title{text-transform:uppercase;font-family:"Livvic",sans-serif;font-size:35px;font-weight:bold;color:#121212;text-align:center;padding:0 55px}.map{width:100%}.map img{width:100%}.events{width:100%;background:#121212;background:url(' +
                    d +
                    ') no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}.intro-events{width:100%;padding:7rem 0}.image-intro{width:100%;display:flex;justify-content:right}.image-intro .under-image{width:436px;height:296px;background:#fdb913;position:relative}.image-intro .under-image .img-event{position:absolute;top:-34px;left:-65px;width:436px;height:296px}.title-event{font-family:"Livvic",sans-serif;font-size:35px;font-weight:bold;color:#fff;text-transform:uppercase}.description-event{font-family:"Livvic",sans-serif;font-size:20px;color:#fff;margin-top:20px}.list-challenges{width:100%;margin-top:50px}.color-white{color:#fff}.color-white:hover{color:#fff}.item-challenge{width:100%;margin-bottom:25px}.item-challenge:hover a{text-decoration:none}.item-challenge .image-challenge{width:100%;max-height:288px;height:288px;overflow:hidden;position:relative;border-radius:5px}.item-challenge .image-challenge a{width:100%}.item-challenge .image-challenge a:hover{text-decoration:none}.item-challenge .image-challenge img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.item-challenge .note-challenge{width:100%;margin-top:10px;font-family:"Livvic",sans-serif;font-size:15px;font-weight:bold}.item-challenge .note-challenge span{padding:5px 15px;background:rgba(194,194,194,.5);border-radius:5px}.item-challenge .title-challenge{font-family:"Livvic",sans-serif;font-size:20px;font-weight:bold;text-transform:uppercase;margin-top:15px}.challenge-category{width:100%;padding:3rem 0}.challenge-category .title-challenge-category{width:100%;text-align:center;font-family:"Livvic",sans-serif;font-size:35px;font-weight:bold;text-transform:uppercase;color:#121212}.challenge-category .intro-challenge-category{width:100%;margin-top:30px;position:relative}.challenge-category .intro-challenge-category .image-intro-challenge-category{width:100%;display:flex;justify-content:flex-end;position:relative}.challenge-category .intro-challenge-category .image-intro-challenge-category .img-wrap{width:470px;height:376px;overflow:hidden;position:relative}.challenge-category .intro-challenge-category .image-intro-challenge-category .img-wrap img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.challenge-category .description-intro-challenge{background:rgba(225,225,225,.5);padding:15px;font-family:"Livvic",sans-serif;font-size:20px}.flex-middle{display:flex;align-items:center;justify-content:center}.c-position-absolute{top:50%;transform:translateY(-50%);right:88px}.color-black{color:#121212}.color-black:hover{color:#121212}.step-to-start{width:100%;background:#c4c4c4;padding-bottom:3rem}.title-box{width:100%;text-align:center;font-family:"Livvic",sans-serif;font-size:35px;font-weight:bold;padding:30px 0;text-transform:uppercase}.item-step{width:100%;margin-bottom:15px}.item-step .image-icon-step{width:100%;text-align:center}.item-step .title-step{width:100%;text-align:center;font-family:"Livvic",sans-serif;font-size:20px;font-weight:bold;margin-top:20px}.item-step .description-step{width:100%;text-align:justify;font-family:"Livvic",sans-serif;font-size:20px;margin-top:10px;padding:0 15px}.intro-medal{width:100%}.image-intro-medal{width:100%}.image-intro-medal img{width:100%}.content-intro-medal{width:100%;text-align:justify;font-family:"Livvic",sans-serif;font-size:20px}ul.list-intro{width:100%;margin:0;padding:0;margin-top:20px}ul.list-intro li{display:flex;list-style:none;margin-bottom:10px}ul.list-intro li span.icon-check{margin-right:10px}.intro-earth{display:flex;justify-content:center;align-items:center}.intro-earth span:first-child img{width:83px;margin-right:20px}.intro-earth .title-bold{font-family:"Livvic",sans-serif;font-size:35px;font-weight:bold}.wrap-reason{width:100%;padding:1rem 0}.wrap-reason .item-reason{width:100%;display:flex;margin-bottom:20px}.wrap-reason .item-reason .icon-reason{width:70px;margin-right:30px}.wrap-reason .item-reason .title-reason{font-family:"Livvic",sans-serif;font-size:20px;font-weight:bold}.wrap-reason .item-reason .description-reason{font-family:"Livvic",sans-serif;font-size:20px}.wrap-question-answer{width:100%}.item-question-answer{width:100%;margin-bottom:10px}.item-question-answer .card-header{background:#fff !important}.item-question-answer .head-q{font-family:"Livvic",sans-serif;font-size:20px;font-weight:bold;color:#121212;text-align:left;background:#fff !important;position:relative}.item-question-answer .head-q .icon-arrow{position:absolute;right:10px}.item-question-answer .not-collapsed .icon-arrow{transform:rotate(180deg)}.wrap-partner{width:100%;padding:2rem 0}.wrap-partner img{width:100%}.footer{width:100%;padding:3rem 1rem;background:#000}.left-footer{width:100%}.intro-company{width:100%;font-family:"Livvic",sans-serif;font-size:20px;margin-top:20px;color:#fff}.share-social{margin-top:20px}.share-social span{margin-right:10px}.right-footer{width:100%;color:#fff}.title-footer{font-family:"Livvic",sans-serif;font-size:20px;font-weight:bold}ul.item-footer{margin:0;padding:0;width:100%}ul.item-footer li{width:100%;list-style:none;padding:5px 0}ul.item-footer li a{width:100%;color:#fff;font-family:"Livvic",sans-serif;font-size:20px}.copy-right{padding:25px 0 0 0;border-top:#fff 1px solid;margin-top:40px;font-family:"Livvic",sans-serif;font-size:15px;color:#fff}.copy-right span{margin-right:10px}.btn-custom-login{color:#fff}.btn-custom-login:hover{color:#fdb913;text-decoration:none}.btn-custom-login span:first-child{margin:5px}.wrap-page{width:100%}.content-no-page{width:100%}.content-no-page .title-no-page{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:40px;line-height:50px;color:#121212;margin-top:5rem;position:relative}.content-no-page .title-no-page::before{content:"";width:100px;height:7px;background:#fdb913;position:absolute;left:0;bottom:-20px}.content-no-page .note{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:25px;color:#000;margin-top:35px}.form-c{width:100%;margin-top:30px}.c-input{background:#fff;border:1px solid #bdbdbd;box-sizing:border-box;border-radius:5px}.forgot-password{display:flex;justify-content:flex-end}.forgot-password a{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;text-align:right;text-decoration-line:underline;color:#888}.wrap-button{width:100%;margin-top:30px}.btn-c{width:100%;background:#fdb913;border-radius:5px;color:#121212;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;padding:15px 0}.register-now{width:100%;text-align:center;margin-top:30px}.register-now .question-acc{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px}.register-now-link a{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;text-decoration-line:underline;color:#000}.register-note{width:100%;margin-top:30px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px}.register-note a{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;text-decoration-line:underline;color:#fdb913}.wrap-user{width:100%}.wrap-user .menu-left{width:100%;background:#121212;min-height:100vh;height:100%;position:relative;transition:all .1s ease}.wrap-user .menu-left .icon-collapse{position:absolute;right:-24px;top:10px;background:#121212;cursor:pointer;z-index:999}.wrap-user .menu-left .content-menu-left{width:100%}.wrap-user .menu-left .content-menu-left .menu-l{width:100%;margin:0;padding:0;display:flex;flex-direction:column}.wrap-user .menu-left .content-menu-left .menu-l li{width:100%;display:flex}.wrap-user .menu-left .content-menu-left .menu-l li a{display:flex;width:100%;padding:15px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:25px;color:#fff;align-items:center}.wrap-user .menu-left .content-menu-left .menu-l li a span.icon-menu{width:33px;margin-right:10px}.wrap-user .menu-left .content-menu-left .menu-l li a:hover{background:#e1e1e1;color:#000;text-decoration:none}.wrap-user .no-collapse{width:56px;transition:all .9s ease}.wrap-user .no-collapse .icon-collapse img{transform:rotate(180deg)}.wrap-user .no-collapse .title-menu{display:none}.wrap-user .no-collapse .icon-menu{margin-right:0}.wrap-user .no-collapse .j-center img{width:100%;height:2px}.j-center{display:flex;justify-content:center}.j-center img{width:100%;height:2px}.content-page-user{width:100%}.has-collapse .col-left{width:56px;transition:all .6s ease}.has-collapse .col-center{width:calc(100% - 56px - 305px)}.has-collapse .col-center-full{width:calc(100% - 56px)}@media(max-width: 768px){.has-collapse .col-center-full{width:100%}}.col-left{width:15%;transition:all .1s ease}.col-center{width:calc(85% - 305px)}.col-center-full{width:85%}.col-right{width:305px;background:#888}.col-right .wrap-col-right{min-height:100vh;height:100%;width:100%}.col-right .wrap-col-right .user-info-right{width:100%;border-bottom:#fff 1px solid;padding:20px}.col-right .wrap-col-right .user-info-right .avatar-user-info-right{width:80px;height:80px;overflow:hidden;position:relative}.col-right .wrap-col-right .user-info-right .avatar-user-info-right img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.col-right .wrap-col-right .user-info-right .name-email-user-info-right{width:100%}.col-right .wrap-col-right .user-info-right .name-email-user-info-right .name{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;color:#121212;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.col-right .wrap-col-right .user-info-right .name-email-user-info-right .email{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.col-right .wrap-col-right .connect-support{padding:20px;margin-top:20px;width:100%}.col-right .wrap-col-right .connect-support .title-connect-support{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;text-decoration-line:underline;color:#121212}.col-right .wrap-col-right .connect-support .item-connect-support{width:100%;margin-top:15px}.col-right .wrap-col-right .connect-support .item-connect-support .title-item-connect{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.col-right .wrap-col-right .connect-support .item-connect-support .email-connected{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000}.col-right .wrap-col-right .connect-support .item-connect-support .btn-switch{width:100%;float:left;display:flex;align-items:center;justify-content:center;margin-top:0}.col-right .wrap-col-right .connect-support .item-connect-support .switch{position:relative;display:inline-block;width:60px;height:34px}.col-right .wrap-col-right .connect-support .item-connect-support .switch input{opacity:0;width:0;height:0}.col-right .wrap-col-right .connect-support .item-connect-support .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#c4c4c4;-webkit-transition:.4s;transition:.4s}.col-right .wrap-col-right .connect-support .item-connect-support .slider:before{position:absolute;content:"";height:34px;width:34px;left:1px;bottom:0;background:#fdb913;-webkit-transition:.4s;transition:.4s}.col-right .wrap-col-right .connect-support .item-connect-support input:checked+.slider{background-color:#000}.col-right .wrap-col-right .connect-support .item-connect-support input:focus+.slider{box-shadow:0 0 1px #000}.col-right .wrap-col-right .connect-support .item-connect-support input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);background:#fdb913}.col-right .wrap-col-right .connect-support .item-connect-support .slider.round{border-radius:34px}.col-right .wrap-col-right .connect-support .item-connect-support .slider.round:before{border-radius:50%}.col-right .wrap-col-right .info-data-strava{width:100%;background:#000;padding:20px}.col-right .wrap-col-right .info-data-strava .item-info-data{width:100%;padding:20px 0}.col-right .wrap-col-right .info-data-strava .item-info-data+.item-info-data{border-top:rgba(255,253,253,.3) 1px solid}.col-right .wrap-col-right .info-data-strava .item-info-data .label-item-info-data{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:16px;line-height:25px;color:#fff}.col-right .wrap-col-right .info-data-strava .item-info-data .content-item-info-data{width:100%;display:flex;flex-direction:column;justify-content:flex-end}.col-right .wrap-col-right .info-data-strava .item-info-data .content-item-info-data .parameters{display:flex;justify-content:flex-end;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:35px;line-height:20px;color:#fdb913}.col-right .wrap-col-right .info-data-strava .item-info-data .content-item-info-data .unit{margin-top:15px;display:flex;justify-content:flex-end;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px;color:#fdb913}.my-challenge{width:100%;background:#e1e1e1;padding:3rem 0 0 0}.content-my-challenge .title-my-challenge{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212}.box-items-challenge{width:100%;padding:2rem 0 0 0}.item-cl{width:100%}.item-cl .info-cl{width:100%;background:#fff;border-radius:5px 0 0 5px;padding:24px 32px}.item-cl .info-cl .title-info-cl{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;text-transform:uppercase;color:#000}.item-cl .info-cl .parameter{width:100%;margin-top:10px}.item-cl .info-cl .parameter span{padding:5px 8px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:25px;color:#121212;background:rgba(196,196,196,.5);border-radius:5px}.item-cl .info-cl .date-start-end{width:100%;margin-top:25px}.item-cl .info-cl .date-start-end .label-date{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#121212}.item-cl .info-cl .date-start-end .value-date{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:19px;margin-top:10px}.item-cl .info-cl .length-challenge{width:100%;margin-top:20px}.item-cl .info-cl .length-challenge .lenght-l{width:100%;display:flex;flex-direction:column}.item-cl .info-cl .length-challenge .lenght-l .lenght{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000}.item-cl .info-cl .length-challenge .lenght-l .percent{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:31px;color:#121212}.item-cl .info-cl .length-challenge .wrap-rectangle{display:flex;width:100%}.item-cl .info-cl .length-challenge .wrap-rectangle .rectangle{width:10%;padding-bottom:7.45%;background:#888;margin:0 2.5px;position:relative}.item-cl .info-cl .length-challenge .wrap-rectangle .rectangle.\\--active{background-color:#fdb913}.item-cl .info-cl .length-challenge .wrap-rectangle .rectangle.\\--active-mod::after{content:"";position:absolute;height:100%;background-color:#fdb913}.item-cl .info-cl .length-challenge .wrap-info-lenght{width:100%;display:flex;justify-content:space-between;margin-top:5px}.item-cl .info-cl .length-challenge .wrap-info-lenght span.right{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:13px;line-height:20px;color:#000}.item-cl .info-cl .length-challenge .wrap-info-lenght span.left{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:20px;color:#000}.item-cl .info-cl .read-more{width:100%;margin-top:25px}.item-cl .info-cl .read-more a{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;text-decoration-line:underline;color:#000}.item-cl .info-cl .read-more aspan:first-child{margin-right:15px}.item-cl .image-cl{width:100%;height:100%;overflow:hidden;position:relative;background-color:#fff;text-align:center;border-radius:0 5px 5px 0}.item-cl .image-cl img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:auto;-o-object-fit:cover;object-fit:cover;border-radius:0 5px 5px 0;margin:auto}.pagination-custom{width:100%;padding:2rem 0;display:flex;justify-content:center;align-items:center}.pagination-custom ul{margin:0;padding:0;width:100%;display:flex;justify-content:center;align-items:center}.pagination-custom ul li{list-style:none;margin-right:5px}.pagination-custom ul li.active span{color:#fdb913;background:#000}.pagination-custom ul li span{padding:5px 10px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:19px;background:#fff;border:1px #000 solid;border-radius:5px;cursor:pointer}.challenge-new{width:100%;background:#fff;padding:2rem 0}.title-box-user{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212}.content-challenge-new{width:100%;margin-top:2rem}.content-challenge-new .item-challenge-new{width:100%;margin-bottom:30px}.content-challenge-new .item-challenge-new:hover{text-decoration:none}.content-challenge-new .item-challenge-new .image-challenge-new{width:100%;height:280px;overflow:hidden;position:relative}.content-challenge-new .item-challenge-new .image-challenge-new img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px 5px 0 0}.content-challenge-new .item-challenge-new .info-challenge-new{width:100%;padding:32px;border-radius:0 0 5px 5px;border-bottom:1px solid #e1e1e1;border-left:1px solid #e1e1e1;border-right:1px solid #e1e1e1;box-sizing:border-box;box-shadow:0px 2px 4px rgba(201,204,207,.25)}.content-challenge-new .item-challenge-new .info-challenge-new .title{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;color:#121212}.content-challenge-new .item-challenge-new .info-challenge-new .param{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.content-challenge-new .item-challenge-new .info-challenge-new .description-challenge-new{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#000;width:100%;margin:1rem 0}.btn-link-more{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#000;border:#000 1px solid;border-radius:5px;width:213px !important}.btn-link-more:hover{background:#000;color:#fff}.has-fixed{position:fixed;top:0;right:0;z-index:999}.header-conquering{width:100%;background:#e1e1e1;padding:30px 0}.header-conquering .name-user{font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-align:center;text-transform:uppercase;color:#121212}.content-header-conquering{padding:30px 0}.item-info-data-horizontal{width:100%}.item-info-data-horizontal .label-item-info-data-horizontal{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;text-align:center;color:#121212}.item-info-data-horizontal .unit-item-info-data-horizontal{width:100%;text-align:center;margin-top:15px}.item-info-data-horizontal .unit-item-info-data-horizontal span:first-child{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:35px;line-height:20px;text-align:center;color:#fdb913;margin-right:5px}.item-info-data-horizontal .unit-item-info-data-horizontal span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px;color:#fdb913}.challenge-conquering{width:100%}.challenge-conquering .item-cl{border:1px solid #e1e1e1;box-sizing:border-box;box-shadow:0px 2px 4px rgba(201,204,207,.25);border-radius:5px}.item-cl-new{margin-bottom:30px}.item-cl-new .image-item-cl-new{width:100%;max-height:250px;height:250px;overflow:hidden;position:relative}.item-cl-new .image-item-cl-new img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px 5px 0 0}.cl-failure{opacity:.5}.header-detail-challenge{width:100%;display:flex;align-items:center;margin-top:2rem}.header-detail-challenge span:first-child{margin-right:10px}.header-detail-challenge span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;text-decoration-line:underline;color:#121212}.info-cl-detail{padding:0 !important}.parameter-detail{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212}.chart-detail-challenge{width:100%;margin-top:2rem}.chart-detail-challenge img{width:100%}.progress-custom{margin-top:2rem}.progress-custom .progress-bar{position:static}.progress-custom .progress-bar .icon-arrow{position:absolute;width:100%;top:18px;left:0;padding:0 15px}.progress-custom .progress-bar .icon-arrow img{position:absolute}.note-progress{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212;padding:10px 2rem}.note-failure{width:100%;background:#ffeab9;padding:5px 15px;display:flex;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;align-items:center;margin-top:10px;margin-bottom:15px;color:#121212}.note-failure span:first-child{margin-right:10px}.active-postcard-1{filter:grayscale(0%) !important}.active-postcard-2{filter:grayscale(0%) !important}.active-postcard-3{filter:grayscale(0%) !important}.item-post-card{width:100%;margin-top:20px;margin-bottom:20px;filter:grayscale(100%)}.item-post-card .img-postcard{width:100%}.item-post-card .img-postcard img{width:100%}.item-post-card .title-post-card{width:100%;text-align:center;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212;margin-top:10px}.img-post-card-modal{width:100%;text-align:center}.title-post-card-modal{width:100%;text-align:center;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;color:#121212;margin-top:15px}.modal-header{border-bottom:0px}.description-post-card-modal{width:100%;margin-top:20px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212;max-height:300px;overflow-y:scroll;margin-bottom:20px}.item-history{width:100%;margin-top:20px}.item-history .icon-run{width:100%;display:flex;align-items:center}.item-history .type-run-time{width:100%;display:flex;flex-direction:column}.item-history .distance,.item-history .challenge-text{width:100%;display:flex;flex-direction:column}.text-bold{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.btn-b{width:100%;background:#121212;border-radius:5px;color:#fdb913;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;padding:15px 0}.btn-b:hover{color:#fff}.header-profile{width:100%;border-bottom:1px solid #e1e1e1;position:relative;margin-bottom:5rem}@media(max-width: 768px){.header-profile{display:flex;flex-wrap:wrap;justify-content:space-between}}.header-profile .title-profile{font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-align:center;text-transform:uppercase;padding:2rem 0;color:#121212}.header-profile .wrap-avatar-profile{position:absolute;top:50%;transform:translateY(-5%)}@media(max-width: 768px){.header-profile .wrap-avatar-profile{position:relative}}.header-profile .avatar-profile{width:112px;height:112px;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.header-profile .avatar-profile img{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;-o-object-fit:cover;object-fit:cover}.header-profile .text-edit-avatar{position:absolute;top:50%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;z-index:9999;text-decoration-line:underline;transform:translate(-50%, -50%);left:50%;color:#fff}.header-profile .btn-edit-profile{cursor:pointer;position:absolute;top:70px;right:0;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;display:flex;align-items:center;text-decoration-line:underline;color:#000}@media(max-width: 768px){.header-profile .btn-edit-profile{position:relative;top:0}}.title-box-profile{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.label-profile{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212}.note-profile{margin-top:2rem;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000}.link-c{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:19px;text-decoration-line:underline;color:#000}.challenge-fixed{width:100%;background:#fdb913;padding:15px 0}.item-challenge-fixed{width:100%}.item-challenge-fixed .title-description-item-challenge-fixed{width:100%;display:flex;flex-direction:column}.item-challenge-fixed .title-description-item-challenge-fixed .title-item-challenge-fixed{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;color:#121212}.item-challenge-fixed .title-description-item-challenge-fixed .description-item-challenge-fixed{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;color:#121212}.item-challenge-fixed .price-choose{width:100%;display:flex;justify-content:flex-end}.item-challenge-fixed .price-choose .price-item-challenge-fixed{display:flex;flex-direction:column;justify-content:flex-end;text-align:right}.item-challenge-fixed .price-choose .price-item-challenge-fixed span.price-item-challenge-fixed-discount{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;text-align:right;text-decoration-line:line-through;color:#ca0303}.item-challenge-fixed .price-choose .price-item-challenge-fixed span.price-item-challenge-fixed-sale{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;text-align:right;color:#121212}.btn-scroll-join{display:flex;align-items:center}.btn-join{background:#121212;border-radius:5px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;color:#fdb913;margin-left:15px}.bg-header-challenge{width:100%}.bg-header-challenge .img-header-challenge{width:100%;height:600px;overflow:hidden;position:relative}.bg-header-challenge .img-header-challenge img{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;-o-object-fit:cover;object-fit:cover}.description-challenge-category{width:100%;background:#fff;background-image:url(' +
                    m +
                    ')}.icon-type-traking{width:100%}.item-type-traking{width:100%;display:flex;align-items:center;justify-content:center;padding:1.5rem 0}.item-type-traking img{width:90px;height:56px}.description-challenge-category-content{width:100%;margin-top:1rem}.description-challenge-category-content .title-description-challenges{width:100%;display:flex;flex-direction:column;margin-bottom:2rem}.description-challenge-category-content .title-description-challenges span:first-child{font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:70px;line-height:100px;text-transform:uppercase;color:#121212}.description-challenge-category-content .title-description-challenges span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212}.d-description-challenges{width:100%;margin-bottom:2rem}.text-normal{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#000}.image-description-challenge{width:100%;text-align:right;height:100%;background:url(' +
                    v +
                    ') no-repeat;background-position:center top;background-size:100% auto}.image-description-challenge img{width:70%}::-webkit-scrollbar{width:2px}::-webkit-scrollbar-track{background:#fdb913}::-webkit-scrollbar-thumb{background:#000}::-webkit-scrollbar-thumb:hover{background:#000}.content-challenge-page{width:100%}.title-box-content-challenge{width:100%;display:flex;flex-direction:column;font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212;margin-top:2rem}.chart-detail-challenge{width:100%;margin:2rem 0}.chart-detail-challenge img{width:100%}.note-strava{margin-top:1rem;width:100%;margin-bottom:2rem}.note-strava .title-note-strava{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#000}.note-strava .description-note-strava{margin-top:1rem}.image-strava-intro{width:100%}.image-strava-intro img{width:100%}.info-medal{width:100%}.slider-image-medal{width:100%}.note-point{width:100%}.image-point{width:100%}.image-point img{width:100%}.note-shipping{width:100%;margin:.5rem 0;border:#e1e1e1 1px solid;border-radius:5px;padding:15px 30px}.icon-and-title{width:100%;display:flex;align-items:center}.icon-and-title span:first-child{width:50px;margin-right:15px}.title-t{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.list-note-shipping{width:100%}.list-note-shipping .item-note-shipping{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000}.item-challenge-loop{border:#e1e1e1 1px solid;padding:15px;border-radius:5px;margin-top:15px;margin-bottom:15px}.item-challenge-loop .info-challenge{width:100%}.item-challenge-loop .info-challenge .title-challenge{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212}.item-challenge-loop .info-challenge .wrap-price-challenge{width:100%;margin-top:1rem}.item-challenge-loop .info-challenge .wrap-price-challenge span.price-old{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;text-decoration-line:line-through;color:#888;margin-right:20px}.item-challenge-loop .info-challenge .wrap-price-challenge span.price-sale{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#ca0303;margin-right:20px}.item-challenge-loop .info-challenge .wrap-price-challenge span.price-save{padding:0px 12px;width:96px;height:20px;background:#ca0303;border-radius:20px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;color:#fff}.item-challenge-loop .note-item-challenge{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:30px;display:flex;align-items:center;color:#121212;margin-top:15px;padding-bottom:20px}.item-challenge-loop .note-item-challenge span{background:#fdb913;padding:2px 20px;border-radius:5px}.no-background{background:#fff}.description-challenge-item{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;padding:20px 0;color:#000;border-top:#e1e1e1 1px solid}.item-receive{width:100%}.item-receive .title-item-receive{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#121212}.wrap-item-receive-loop{width:100%}.item-receive-loop{width:100%;margin:15px 0}.item-receive-loop img{width:100%}.btn-order-challenge{width:100%;display:flex;justify-content:flex-end}.btn-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;color:#fdb913;background:#000}.btn-order:hover{color:#fff}.the-conquerors{width:100%;background:#121212;margin:2rem 0;padding:3rem 0}.the-conquerors .head-the-conquerors{width:100%}.the-conquerors .head-the-conquerors .title-the-conquerors{font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#fff;position:relative;padding-left:95px}.the-conquerors .head-the-conquerors .title-the-conquerors:before{content:"";width:85px;height:2px;background:#fff;position:absolute;top:21px;left:0}.content-the-conquerors{width:100%;margin-top:2rem}.info-conquerors{background:#000;border-radius:5px;position:relative;padding:2rem;margin-top:2.5rem;z-index:999}.info-conquerors .name-conquerors{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:25px;line-height:31px;color:#fff}.info-conquerors .description-conquerors{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#fff;margin-top:30px;margin-bottom:30px}.info-conquerors .wrap-strava-conquerors{width:100%;border-top:1px solid #fff;margin-top:20px;padding-top:20px}.info-conquerors .wrap-strava-conquerors .item-strava-conquerors{width:100%;display:flex;flex-direction:column}.info-conquerors .wrap-strava-conquerors .item-strava-conquerors span:first-child{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:25px;color:#fff;margin-bottom:10px}.info-conquerors .wrap-strava-conquerors .item-strava-conquerors span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;color:#fdb913}.img-conquerors{position:relative;top:0;width:427px;height:472px;overflow:hidden;left:-83px;border-radius:5px}.img-conquerors img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.header-order{width:100%}.title-box-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:35px;line-height:34px;color:#000;padding:1.5rem 0}.info-challenge-order{width:100%;margin-bottom:25px;border-bottom:1px solid #000;box-shadow:0 4px 2px -2px rgba(0,0,0,.5);padding-bottom:25px}.info-challenge-order .label-info{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:1.5px;text-transform:uppercase;color:#8f8f8f;margin-bottom:15px}.info-challenge-order .content-info-challenge-order{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:28px;color:#2d2d2d}.image-challenge-order{width:100%;height:91px;position:relative;overflow:hidden}.image-challenge-order img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.title-description-info-challenge{width:100%;display:flex;flex-direction:column;margin-top:25px}.title-description-info-challenge span:first-child{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:24px;color:#2d2d2d}.title-description-info-challenge span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:28px;display:flex;align-items:center;color:#2d2d2d}.price-total-info{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:24px;display:flex;align-items:center;color:#eb5757}.form-order{width:100%}.form-order .form-coupon{width:100%}.btn-apply{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;background:#000;border-radius:5px;color:#fdb913}.btn-apply:hover{color:#fff}.input-apply{border:1px solid #000}.label-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;display:flex;align-items:center;letter-spacing:1.5px;text-transform:uppercase;color:#8f8f8f;margin-bottom:15px}.text-required{color:#eb5757}.form-shipping{width:100%}.wrap-payment-method{width:100%;margin-bottom:3rem}.wrap-payment-method .container-radio{display:flex;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;width:100%}.wrap-payment-method .container-radio input{position:absolute;opacity:0;cursor:pointer}.wrap-payment-method .checkmark{position:absolute;left:0;height:20px;width:20px;background-color:#eee;border-radius:50%}.wrap-payment-method .container-radio:hover input~.checkmark{background-color:#fdb913}.wrap-payment-method .container-radio input:checked~.checkmark{background-color:#fdb913}.wrap-payment-method .checkmark:after{content:"";position:absolute;display:none}.wrap-payment-method .container-radio input:checked~.checkmark:after{display:block}.wrap-payment-method .container-radio .checkmark:after{top:6px;left:6px;width:8px;height:8px;border-radius:50%;background:#fff}.icon-payment-method{margin-right:25px;width:50px}.description-payment-method{width:100%;padding:20px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:16px;line-height:22px;background:#e7e7e7;color:#000;margin-bottom:15px;position:relative}.description-payment-method .icon-arrow-up{position:absolute;top:-10px;left:100px;width:50px}.description-payment-method .icon-arrow-up img{width:100%}.preview-price-order{width:100%}.wrap-preview{background:#ebeced;border-radius:5px;padding:10px 20px}.title-preview{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:28px;text-transform:uppercase;color:#000;margin-bottom:15px}.item-info-preview{width:100%;padding-bottom:15px;padding-top:15px}.item-info-preview+.item-info-preview{border-top:1px solid #8f8f8f}.label-preview{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:28px;color:#000;margin-bottom:20px}.content-preview{width:100%}.content-preview span:first-child{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:24px;color:#2d2d2d}.content-preview span:nth-child(2){font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:20px;display:flex;align-items:center;color:#2d2d2d}.price-preview{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:28px;color:#000}.rules-order{width:100%;margin:2rem 0;font-family:"Livvic",sans-serif;font-style:italic;font-weight:400;font-size:14px;line-height:18px;color:#000}.rules-order a{color:#000;text-decoration:underline}.btn-order-now{width:100%}.btn-order-now button{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:30px;text-transform:capitalize;color:#000;text-align:center;background:#fdb913;width:100%;padding:1rem 0}.content-notification-order{width:100%}.content-notification-order .title-thank{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:22px;line-height:24px;text-transform:uppercase;color:#000;margin-bottom:25px}.content-notification-order .title-challenge-order{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:37px;line-height:46px;color:#000}.content-notification-order .description-challenge-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:22px;line-height:24px;margin-top:15px;color:#121212}.content-notification-order .img-challenge-order{width:100%;height:319px;position:relative;overflow:hidden;margin-top:15px;margin-bottom:15px}.content-notification-order .img-challenge-order img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.content-notification-order .content-description-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:26px;margin-top:20px;margin-bottom:20px;color:#000}.content-notification-order .note-strava-order{width:100%;padding:20px;background:#ebeced;border-radius:5px}.content-notification-order .note-strava-order .title-note-strava-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:uppercase;color:#000}.content-notification-order .content-note-strava-order{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:28px;margin-top:20px;color:#000;width:100%}.input-group-text-c{padding:.32rem .75rem}.title-page-password{font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:35px;line-height:44px;text-transform:uppercase;color:#121212}.description-page-password{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:25px;color:#121212;border-bottom:1px solid #e1e1e1;margin-bottom:25px}.note-page-password{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;color:#121212;margin-top:20px;margin-bottom:20px}.form-update-password{width:100%}.forgot-password-link{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:30px;text-decoration-line:underline;color:#121212;display:flex;align-items:center}.text-middle{display:flex;align-items:center}.note-update-password{width:100%}.note-update-password .title-note-update{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:25px;display:flex;align-items:center;color:#000;margin-bottom:20px}ul.ul-note{margin:0;padding:0;width:100%}ul.ul-note li{list-style:none;width:100%;padding:5px 0;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:25px;display:flex;align-items:center;color:#121212}ul.ul-note li span:first-child{margin-right:10px;margin-top:-4px}.btn-back{background:#fff;border:1px solid #000;box-sizing:border-box;border-radius:5px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;color:#000}.btn-update{background:#121212;border-radius:5px;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-transform:capitalize;color:#fdb913}.text-success-noti{width:100%}.has-text-danger{color:#ff2a36}input.is-danger{border-color:#ff2a36}.flex-box{display:flex}.languages ul{padding:0;width:2.5rem !important;min-width:2.5rem !important}.languages ul li a{padding:0 5px;display:flex;justify-content:center;align-items:center}.languages ul li a img{width:25px}span.lang-choose img{width:25px}li.text-btn button{font-weight:400;color:#212529 !important;text-align:inherit;white-space:nowrap;padding:10px 25px;display:flex;justify-content:space-between}.image-preview{margin-top:15px}.image-preview img{width:100%}.title-my-connect{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:25px;line-height:44px;text-transform:uppercase;color:#121212}.is-mobile{display:none}.wrap-connect-strava-mobile{width:100%;background:#fff}.is-mobile .user-info-right{width:100%;border-bottom:#fff 1px solid;padding:20px}.is-mobile .user-info-right .avatar-user-info-right{width:50px;height:50px;overflow:hidden;position:relative;margin-right:15px}.is-mobile .user-info-right .avatar-user-info-right img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.is-mobile .user-info-right .name-email-user-info-right{width:100%}.is-mobile .user-info-right .name-email-user-info-right .name{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:20px;color:#121212}.is-mobile .user-info-right .name-email-user-info-right .email{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:13px;line-height:19px;color:#000}.is-mobile .connect-support{padding:0px;margin-top:20px;width:100%}.is-mobile .connect-support .title-connect-support{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;text-decoration-line:underline;color:#121212}.is-mobile .connect-support .item-connect-support{width:100%;margin-top:15px}.is-mobile .connect-support .item-connect-support .title-item-connect{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:30px;color:#121212}.is-mobile .connect-support .item-connect-support .email-connected{font-family:"Livvic",sans-serif;font-style:normal;font-weight:400;font-size:15px;line-height:19px;color:#000}.is-mobile .connect-support .item-connect-support .btn-switch{width:100%;float:left;display:flex;align-items:center;justify-content:center;margin-top:0}.is-mobile .connect-support .item-connect-support .switch{position:relative;display:inline-block;width:50px;height:25px}.is-mobile .connect-support .item-connect-support .switch input{opacity:0;width:0;height:0}.is-mobile .connect-support .item-connect-support .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#c4c4c4;-webkit-transition:.4s;transition:.4s}.is-mobile .connect-support .item-connect-support .slider:before{position:absolute;content:"";height:25px;width:25px;left:1px;bottom:0;background:#fdb913;-webkit-transition:.4s;transition:.4s}.is-mobile .connect-support .item-connect-support input:checked+.slider{background-color:#000}.is-mobile .connect-support .item-connect-support input:focus+.slider{box-shadow:0 0 1px #000}.is-mobile .connect-support .item-connect-support input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);background:#fdb913}.is-mobile .connect-support .item-connect-support .slider.round{border-radius:34px}.is-mobile .connect-support .item-connect-support .slider.round:before{border-radius:50%}.description-challenge-list span{background:none !important}.header-detail-challenge a.nuxt-link-active{color:#121212;display:flex;justify-content:center;align-items:center;font-weight:bold}.header-detail-challenge a.nuxt-link-active img{margin-right:10px}.img-post-card-modal img{width:100%}.content-active{width:100%;background:#fff;margin-top:2em;margin-bottom:2em;padding:25px 15px}.list-group-item-custom{display:flex;width:100%}.list-group-item-custom .challenge-name{display:flex;justify-content:flex-start;align-items:center;width:70%}.list-group-item-custom .btn-switch{display:flex;justify-content:flex-end;align-items:center;width:30%}@tailwind base;@tailwind components;@tailwind utilities;@media all and (max-width: 767px){.is-mobile{display:block}.col-center-full{width:100%}}@media all and (max-width: 766px){.is-mobile{display:block}.header-conquering .name-user{font-size:25px}.user-info ul.dropdown-menu{top:-18px !important}ul.ul-top{display:none !important}.wrapper-slider{height:auto}.top-header{display:none}.px-custom{padding-left:15px;padding-right:15px}.logo-menu{padding:.5rem 0 !important}.btn-menu-mobile{display:block;cursor:pointer}.notification-user-info{width:100%;display:flex;height:100%;align-items:center;justify-content:flex-end;position:absolute !important;top:-32px;right:50px}.notification-user-info .notification{margin-right:0 !important}.header .logo-menu .menu{display:none}.menu-mobile{display:block !important;position:fixed;top:125px;left:0;z-index:99}.menu-mobile ul.main-menu{background:#fff;padding:0 20px !important}.menu-mobile ul.main-menu>li{width:100%;display:flex;position:relative;flex-direction:column}.menu-mobile ul.main-menu>li .sub-menu{position:absolute}.menu-mobile ul.main-menu>li>a{width:100%;color:#121212 !important;padding:10px 15px !important;line-height:unset !important;border-bottom:#e1e1e1 1px solid;justify-content:space-between;display:flex;align-items:center}.dropdown-notification ul{position:fixed !important;width:100%;transform:translate3d(0px, 77px, 0px) !important;filter:drop-shadow(0px 2px 2px rgba(18, 18, 18, 0.25)) !important}.slider{height:auto !important}.wrap-mission{padding:0}.slick-arrow{display:none !important}.intro-challenge{width:100%;margin-top:20px}.title-introl-challenge{font-size:35px !important;line-height:45px !important}.description-introl-challenge{font-size:25px !important;margin-top:7px !important}.wrap-mission .head-mission .ms1{font-family:"Livvic",sans-serif;font-size:25px !important;text-transform:uppercase;font-weight:800}.wrap-mission .head-mission .ms2{font-family:"Livvic",sans-serif;font-size:35px;text-transform:uppercase;font-weight:800;line-height:33px}.image-intro .under-image{width:100%;height:296px;background:#fdb913;position:relative}.image-intro .under-image .img-event{position:absolute;top:50%;left:0;width:100%;height:296px;transform:translateY(-38%)}.image-intro .under-image .img-event img{width:100%}.notification-user-info .user-info{color:#fff;display:flex;align-items:center;justify-content:flex-end;margin-right:10px}.header .logo-menu .menu ul.main-menu>li .sub-menu{width:100%;padding:30px 40px;background:#fff;list-style-type:none;position:relative;top:0;z-index:99999;opacity:1;visibility:unset}.text-title{text-transform:uppercase;font-family:"Livvic",sans-serif;font-size:25px;font-weight:bold;color:#121212;text-align:center;padding:0 55px}.c-position-absolute{top:50%;transform:translateY(-50%);right:0}.col-left{display:none}.col-right{display:none}.col-center{width:100% !important}.content-my-challenge .title-my-challenge{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:900;font-size:25px;line-height:44px;text-transform:uppercase;color:#121212}.my-challenge{width:100%;background:#e1e1e1;padding:1rem 0 0 0}.box-items-challenge{width:100%;padding:1rem 0}.item-cl .image-cl{display:none;border-radius:0 5px 5px 0}.item-cl .info-cl{width:100%;background:#fff;border-radius:0 0 5px 5px;padding:24px 32px}.is-desktop{display:none}}@media all and (max-width: 600px){.item-challenge-fixed .title-description-item-challenge-fixed .title-item-challenge-fixed{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:19px;line-height:31px;color:#121212}.item-challenge-fixed .price-choose .price-item-challenge-fixed span.price-item-challenge-fixed-sale{font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:31px;text-align:left;color:#121212}.item-challenge-loop .info-challenge .title-challenge{width:100%;font-family:"Livvic",sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:30px;text-transform:uppercase;color:#121212}.btn-order-challenge{width:100%;display:flex;justify-content:center;margin-bottom:15px}}aside.main-sidebar{width:250px;height:100vh;overflow-y:hidden;z-index:1038;background-color:#343a40;position:fixed;bottom:0;top:0;left:0}aside.main-sidebar .brand-link{display:flex;width:100%;border-bottom:1px solid #4b545c;font-size:1.25rem;line-height:1.5;padding:.8125rem .5rem;transition:width .3s ease-in-out;white-space:nowrap;color:rgba(255,255,255,.8);align-items:center;font-family:"Livvic",sans-serif}aside.main-sidebar .brand-link span:first-child{margin-right:10px}.menu-admin{width:100%}.menu-admin ul{margin:0;padding:0;width:100%;display:flex;flex-direction:column}.menu-admin ul>li{list-style:none;display:flex;width:100%;position:relative;flex-direction:column}.menu-admin ul>li.active span.icon-arrow{transform:rotate(90deg);top:.5rem}.menu-admin ul>li ul.sub-menu{margin:0;padding:0;flex-direction:column;display:none;transition:all .3s linear}.menu-admin ul>li ul.sub-menu>li>a{padding-left:21px}.menu-admin ul>li ul.collapsed{display:block;opacity:1}.menu-admin ul>li span.icon-arrow{position:absolute;right:.6rem;top:.7rem;color:#fff}.menu-admin ul>li.has-children:before{border-right:2px solid;content:"";display:block;height:8px;margin-top:-6px;position:absolute;transform:rotate(135deg);right:10px;top:50%;width:0;color:#fff}.menu-admin ul>li>a{width:100%;display:flex;padding:10px 15px;color:#fff;font-size:18px}.menu-admin ul>li>a:hover{text-decoration:none;background-color:rgba(255,255,255,.1)}.menu-admin ul>li>a span:first-child{width:35px;margin-right:5px}.link-parent{color:#fff;cursor:pointer}.right-content-admin{width:100%;padding-left:250px}.top-content-admin{width:100%;border-bottom:1px solid #dee2e6}.top-content-admin .hamburger{padding:10px 0;cursor:pointer}.top-content-admin .hamburger svg{font-size:30px}.content-admin{width:100%}.title-page-admin{width:100%}.title-page-admin h1{font-family:"Livvic",sans-serif;font-size:30px}.wrap-small-box{width:100%}.wrap-small-box .small-box{width:100%;border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.13),0 1px 3px rgba(0,0,0,.2);display:block;margin-bottom:20px;position:relative;color:#fff !important}.wrap-small-box .small-box>.inner{padding:10px}.wrap-small-box .small-box h3{font-size:2.2rem;font-weight:700;margin:0 0 10px;padding:0;white-space:nowrap}.wrap-small-box .small-box p{font-size:1rem}.wrap-small-box .small-box .icon{color:rgba(0,0,0,.15);z-index:0}.wrap-small-box .small-box .icon>svg{position:absolute;right:15px;transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;font-size:70px;top:20px}.wrap-small-box .small-box>.small-box-footer{background-color:rgba(0,0,0,.1);color:rgba(255,255,255,.8);display:block;padding:3px 0;position:relative;text-align:center;text-decoration:none;z-index:10}sup{top:-0.5em}sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.wrap-right-admin{width:100%}.btn-switch{width:100%;float:left;display:flex;align-items:center;justify-content:flex-start;margin-top:10px}.switch{position:relative;display:inline-block;width:60px;height:34px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#c4c4c4;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:"";height:34px;width:34px;left:1px;bottom:0;background:#fdb913;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#000}input:focus+.slider{box-shadow:0 0 1px #000}input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);background:#fdb913}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}table .img-thumbnail-post{display:flex;width:70px;height:70px;border-radius:6px;background:red;position:relative;overflow:hidden}table .img-thumbnail-post img{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.d-middle{width:100%;height:100%;display:flex;justify-content:center;align-items:center}tbody tr td{vertical-align:middle !important}.tab-lang .nav-link{color:#000}.tab-lang .nav-link.active{background-color:#000;color:#fdb913}.wrap-upload-image{display:table;width:100%;height:110px;border:2px dashed #ccc;background-color:#f2f2f2;text-align:center;border-radius:10px}.upload-inner{display:table-cell;vertical-align:middle;margin:0 auto}.upload-inner p{margin-bottom:1em}.custom-file-upload{display:inline-block;position:relative;padding:.2em .5em .2em .5em;border-radius:5px;text-align:center;font-size:.8em;border:1px solid #ccc;background-color:#f2f2f2;color:#333;font-weight:700;cursor:pointer;margin-bottom:10px}.custom-file-upload{text-align:center !important}.custom-file-upload input[type=file]{display:none !important}.form-row label{font-weight:bold}.wrap-middle{width:100%;height:100%}.wrap-paginate{width:100%;display:flex;justify-content:center}.thumbnail-table{width:70px;height:70px;border-radius:10px}.d-flex-custom{display:flex;align-items:center;justify-content:space-between}.d-flex-custom .add-new{justify-content:flex-end}',
                    "",
                ]),
                (t.exports = h);
        },
        419: function(t, e, n) {
            t.exports = n.p + "img/cover-home.ace4a69.jpg";
        },
        420: function(t, e, n) {
            t.exports = n.p + "img/bg-mission.8de3971.svg";
        },
        421: function(t, e, n) {
            t.exports = n.p + "img/mount.fd97656.png";
        },
        425: function(t, e, n) {
            t.exports = n.p + "img/inspire.e33338b.svg";
        },
        426: function(t, e, n) {
            t.exports = n.p + "img/Messenger.6826328.svg";
        },
        427: function(t, e, n) {
            t.exports = n.p + "img/user.272222e.png";
        },
        428: function(t, e, n) {
            t.exports = n.p + "img/logout.0c0f556.svg";
        },
        429: function(t, e, n) {
            t.exports = n.p + "img/hambuger.0f1cae8.svg";
        },
        430: function(t, e, n) {
            t.exports = n.p + "img/close.f1dc058.svg";
        },
        431: function(t, e, n) {
            "use strict";
            n(294);
        },
        432: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    ".languages[data-v-148ba13a]{justify-content:flex-end}@media(max-width: 576px){.flex-box[data-v-148ba13a]{flex-wrap:wrap;padding:0}}.top-header[data-v-148ba13a]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}@media(max-width: 576px){.top-header__left[data-v-148ba13a]{width:100%;justify-content:left;flex-wrap:wrap}.top-header__left li[data-v-148ba13a]{display:block;width:50%}}.top-header__right[data-v-148ba13a]{display:flex;align-items:center}.top-header__right[data-v-148ba13a],.top-header__right *[data-v-148ba13a]{color:#000}.top-header__right .user-info[data-v-148ba13a]{width:115px}.top-header__right .img-user img[data-v-148ba13a]{width:30px}@media(max-width: 576px){.top-header__right[data-v-148ba13a]{width:100%;justify-content:right}}",
                    "",
                ]),
                (t.exports = r);
        },
        433: function(t, e, n) {
            t.exports = n.p + "img/fb.579e64a.svg";
        },
        434: function(t, e, n) {
            t.exports = n.p + "img/is.0d37613.svg";
        },
        435: function(t, e, n) {
            t.exports = n.p + "img/copy-right.48086eb.svg";
        },
        436: function(t, e, n) {
            "use strict";
            n(295);
        },
        437: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\n.footer[data-v-0b5c3495] {\n  /* CSS cho footer */\n}\n.messenger-button[data-v-0b5c3495] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000; /* Đảm bảo nút luôn nằm trên các phần tử khác */\n}\n.messenger-button img[data-v-0b5c3495] {\n  width: 50px; /* Kích thước của nút Messenger */\n  height: 50px;\n  cursor: pointer;\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        438: function(t, e, n) {
            t.exports = n.p + "img/home.f6e5b9c.svg";
        },
        439: function(t, e, n) {
            t.exports = n.p + "img/chart.8328e16.svg";
        },
        440: function(t, e, n) {
            t.exports = n.p + "img/user.d4993d2.svg";
        },
        441: function(t, e, n) {
            t.exports = n.p + "img/lines.1d7c6cd.svg";
        },
        442: function(t, e, n) {
            t.exports = n.p + "img/contact.43226fc.svg";
        },
        443: function(t, e, n) {
            t.exports = n.p + "img/connect.d4597a3.svg";
        },
        444: function(t, e, n) {
            t.exports = n.p + "img/logout.b2eb690.svg";
        },
        445: function(t, e, n) {
            "use strict";
            n(297);
        },
        446: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\nhr[data-v-4781bfca]{\n  margin: 0px;\n  background: rgb(77 73 73);\n}\n.sticky-menu-mobile[data-v-4781bfca],.mobile-explain[data-v-4781bfca] {\n  display: none;\n}\n.icon-menu path[data-v-4781bfca]{\n  /* fill:rgba(225, 225, 225, 1); */\n  fill:#555555;\n}\n.nuxt-link-exact-active path[data-v-4781bfca]{\n  fill:rgba(253, 185, 19, 1);\n}\n@media only screen and (max-width: 767px) {\n.mobile-explain[data-v-4781bfca]{\n      display:block;\n      position: absolute;\n      top: -24px;\n      background: black;\n      width: 24px;\n      right: 20px;\n}\n.sticky-menu-mobile[data-v-4781bfca] {\n      display:block;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      background-color: #000000;\n      color: white;\n      text-align: center;\n      z-index: 1000;\n}\n.title-menu[data-v-4781bfca] {\n      font-size: 10px;\n}\n.sticky-menu-mobile ul[data-v-4781bfca] {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n}\n.sticky-menu-mobile li[data-v-4781bfca] {\n      padding: 10px 0;\n}\n.sticky-menu-mobile a[data-v-4781bfca] {\n      text-decoration: none;\n      color: white;\n}\n.icon-menu img[data-v-4781bfca] {\n      min-height: 32px;\n}\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        447: function(t, e, n) {
            t.exports = n.p + "img/avatar.7f43551.svg";
        },
        448: function(t, e, n) {
            "use strict";
            n(299);
        },
        449: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\n.avatar-strava img{\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        450: function(t, e, n) {
            "use strict";
            n(300);
        },
        451: function(t, e, n) {
            var r = n(46)(!1);
            r.push([
                    t.i,
                    "\n.disconnect-text[data-v-7be7d1c0] {\n  text-decoration: underline;\n  color: black;\n}\n",
                    "",
                ]),
                (t.exports = r);
        },
        452: function(t, e) {},
        453: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "state", function() {
                    return f;
                }),
                n.d(e, "getters", function() {
                    return h;
                }),
                n.d(e, "mutations", function() {
                    return d;
                }),
                n.d(e, "actions", function() {
                    return m;
                });
            n(5), n(4), n(2), n(6), n(3), n(7);
            var r = n(10),
                o = n(0),
                l = n(27);
            n(41), n(1);

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var f = {
                    my_challenges: [],
                    challenge: {},
                    activities: [],
                    pagination: [],
                },
                h = {},
                d = {
                    SET_MY_CHALLENGES: function(t, e) {
                        t.my_challenges = Object(l.a)(e);
                    },
                    SET_CHALLENGE: function(t, e) {
                        console.log("SET_CHALLENGE", e),
                            (t.challenge = (function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ?
                                        c(Object(n), !0).forEach(function(e) {
                                            Object(o.a)(t, e, n[e]);
                                        }) :
                                        Object.getOwnPropertyDescriptors ?
                                        Object.defineProperties(
                                            t,
                                            Object.getOwnPropertyDescriptors(n),
                                        ) :
                                        c(Object(n)).forEach(function(e) {
                                            Object.defineProperty(
                                                t,
                                                e,
                                                Object.getOwnPropertyDescriptor(n, e),
                                            );
                                        });
                                }
                                return t;
                            })({}, e));
                    },
                    SET_ACTIVITIES: function(t, e) {
                        t.activities = Object(l.a)(e);
                    },
                    SET_PAGINATION: function(t, e) {
                        console.log(112233, e), (t.pagination = Object(l.a)(e));
                    },
                },
                m = {
                    setMyChallenges: function(t, e) {
                        (0, t.commit)("SET_MY_CHALLENGES", e);
                    },
                    setChallenges: function(t, e) {
                        (0, t.commit)("SET_CHALLENGE", e);
                    },
                    setActivities: function(t, e) {
                        (0, t.commit)("SET_ACTIVITIES", e);
                    },
                    setPagination: function(t, e) {
                        (0, t.commit)("SET_PAGINATION", e);
                    },
                    resignChallenge: function(t, e) {
                        var n = this;
                        t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$post("/user/resign-challenge", e)
                                                            .then(function(t) {
                                                                r(t);
                                                            })
                                                            .catch(function(t) {
                                                                n.$router.push("/login"), o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchResignChallenges: function(t) {
                        var e = this,
                            n = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .$get("/user/resign-challenge")
                                                            .then(function(t) {
                                                                200 === t.status ?
                                                                    (n("setMyChallenges", t.data.data),
                                                                        n("setPagination", t.data.links),
                                                                        r(t.data)) :
                                                                    o(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                console.error(t), o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchDetailChallenge: function(t, e) {
                        var n = this,
                            o = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, l) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$get("/user/detail-challenge/".concat(e))
                                                            .then(function(t) {
                                                                200 === t.status ?
                                                                    (t.data ||
                                                                        n.$router.push("/my-challenges"),
                                                                        o("setChallenges", t.data),
                                                                        r(t.data)) :
                                                                    l(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                console.error(t), l(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchActivities: function(t, e) {
                        var n = this,
                            o = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, l) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$get(
                                                                "/user/detail-challenge-activities/".concat(
                                                                    e,
                                                                ),
                                                            )
                                                            .then(function(t) {
                                                                200 === t.status ?
                                                                    (o("setActivities", t.data), r(t.data)) :
                                                                    l(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                console.error(t), l(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    mapActivityChallenge: function(t, e) {
                        var n = this,
                            o = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, l) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$post("/user/map-challenge-activity", e)
                                                            .then(function(t) {
                                                                200 === t.status ?
                                                                    (o("strava/fetchDataStrava", null, {
                                                                            root: !0,
                                                                        }),
                                                                        r(t.data)) :
                                                                    l(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                console.error(t), l(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                };
        },
        454: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "state", function() {
                    return r;
                }),
                n.d(e, "mutations", function() {
                    return o;
                });
            var r = function() {
                    return { locales: ["vi", "en"], locale: "vi" };
                },
                o = {
                    SET_LANG: function(t, e) {
                        (t.locale = e), console.log(1e4, t);
                    },
                };
        },
        455: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "state", function() {
                    return f;
                }),
                n.d(e, "getters", function() {
                    return h;
                }),
                n.d(e, "mutations", function() {
                    return d;
                }),
                n.d(e, "actions", function() {
                    return m;
                });
            n(5), n(4), n(2), n(6), n(3), n(7);
            var r = n(10),
                o = n(27),
                l = n(0);
            n(41), n(1);

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var f = { token: "", userMedal: {}, activities: [] },
                h = {},
                d = {
                    SET_TOKEN: function(t, e) {
                        t.token = e;
                    },
                    SET_USER_MEDAL: function(t, e) {
                        t.userMedal = (function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ?
                                    c(Object(n), !0).forEach(function(e) {
                                        Object(l.a)(t, e, n[e]);
                                    }) :
                                    Object.getOwnPropertyDescriptors ?
                                    Object.defineProperties(
                                        t,
                                        Object.getOwnPropertyDescriptors(n),
                                    ) :
                                    c(Object(n)).forEach(function(e) {
                                        Object.defineProperty(
                                            t,
                                            e,
                                            Object.getOwnPropertyDescriptor(n, e),
                                        );
                                    });
                            }
                            return t;
                        })({}, e);
                    },
                    SET_ACTIVITIES: function(t, e) {
                        t.activities = Object(o.a)(e);
                    },
                },
                m = {
                    setToken: function(t, e) {
                        (0, t.commit)("SET_TOKEN", e);
                    },
                    setUserMedal: function(t, e) {
                        (0, t.commit)("SET_USER_MEDAL", e);
                    },
                    setActivities: function(t, e) {
                        (0, t.commit)("SET_ACTIVITIES", e);
                    },
                    saveToken: function(t, e) {
                        var n = this;
                        t.commit;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$post("/strava-connect/save-token", e)
                                                            .then(function(t) {
                                                                r(t);
                                                            })
                                                            .catch(function(t) {
                                                                o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchUserMedal: function(t) {
                        var e = this,
                            n = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .$get("/user-medal")
                                                            .then(function(t) {
                                                                n("setUserMedal", t.data), r(t);
                                                            })
                                                            .catch(function(t) {
                                                                o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    syncActivities: function(t) {
                        var e = this;
                        t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(n, r) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .$post("/strava-connect/sync-activities")
                                                            .then(function(t) {
                                                                console.log("res", t), n(t);
                                                            })
                                                            .catch(function(t) {
                                                                r(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    unAuthenticate: function(t) {
                        var e = this;
                        t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(n, r) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .$post("/strava-connect/un-authenticate")
                                                            .then(function(t) {
                                                                n(t), location.reload();
                                                            })
                                                            .catch(function(t) {
                                                                r(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchDataStrava: function(t) {
                        var e = this,
                            n = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .$get("/user/activities")
                                                            .then(function(t) {
                                                                n("setActivities", t.data), r(t);
                                                            })
                                                            .catch(function(t) {
                                                                o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchDataActivity: function(t, e) {
                        var n = this;
                        t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$get("/user/resign-challenge/".concat(e))
                                                            .then(function(t) {
                                                                r(t);
                                                            })
                                                            .catch(function(t) {
                                                                o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    connectStrava: function() {
                        window.open(
                            "https://inspiretrails.life/api/strava-connect/authentication",
                        );
                    },
                };
        },
        456: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "state", function() {
                    return h;
                }),
                n.d(e, "mutations", function() {
                    return d;
                }),
                n.d(e, "actions", function() {
                    return m;
                }),
                n.d(e, "getters", function() {
                    return v;
                });
            n(5), n(4), n(2), n(6), n(3), n(7);
            var r = n(10),
                o = n(27),
                l = n(0);
            n(1), n(41);

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        c(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        c(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }
            var h = function() {
                    return { userInfo: {}, isLogin: !1, userMedal: {}, activities: [] };
                },
                d = {
                    SET_USER_INFO: function(t, e) {
                        t.userInfo = f({}, e);
                    },
                    UPDATE_LOGIN_STATUS: function(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t.isLogin = e;
                    },
                    SET_USER_MEDAL: function(t, e) {
                        t.userMedal = f({}, e);
                    },
                    SET_ACTIVITIES: function(t, e) {
                        t.activities = Object(o.a)(e);
                    },
                },
                m = {
                    setUserInfo: function(t, data) {
                        var e = t.dispatch,
                            n = t.commit;
                        console.log("data", data),
                            n("SET_USER_INFO", data),
                            e("setLoginStatus");
                    },
                    setLoginStatus: function(t) {
                        var e = t.commit,
                            n = t.state;
                        e("UPDATE_LOGIN_STATUS", !!n.userInfo && !!n.userInfo.id);
                    },
                    setUserMedal: function(t, e) {
                        (0, t.commit)("SET_USER_MEDAL", e);
                    },
                    setActivities: function(t, e) {
                        (0, t.commit)("SET_ACTIVITIES", e);
                    },
                    checkLogin: function(t) {
                        var e = this;
                        return Object(r.a)(
                            regeneratorRuntime.mark(function n() {
                                var r;
                                return regeneratorRuntime.wrap(function(n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                if (((r = t.dispatch), t.commit, t.state.isLogin)) {
                                                    n.next = 4;
                                                    break;
                                                }
                                                return (
                                                    (n.next = 4),
                                                    e.$axios
                                                    .$get("/auth/user")
                                                    .then(function(t) {
                                                        r("setUserInfo", t.data);
                                                    })
                                                    .catch(function(t) {})
                                                );
                                            case 4:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            }),
                        )();
                    },
                    activeAccount: function(t, e) {
                        var n = this;
                        return Object(r.a)(
                            regeneratorRuntime.mark(function o() {
                                return regeneratorRuntime.wrap(function(o) {
                                    for (;;)
                                        switch ((o.prev = o.next)) {
                                            case 0:
                                                return (
                                                    t.dispatch,
                                                    o.abrupt(
                                                        "return",
                                                        new Promise(
                                                            (function() {
                                                                var t = Object(r.a)(
                                                                    regeneratorRuntime.mark(function t(r, o) {
                                                                        return regeneratorRuntime.wrap(function(
                                                                            t,
                                                                        ) {
                                                                            for (;;)
                                                                                switch ((t.prev = t.next)) {
                                                                                    case 0:
                                                                                        return (
                                                                                            (t.next = 2),
                                                                                            n.$axios
                                                                                            .$post("/account/active", {
                                                                                                token: e,
                                                                                            })
                                                                                            .then(function(t) {
                                                                                                r(t);
                                                                                            })
                                                                                            .catch(function(t) {
                                                                                                o(t);
                                                                                            })
                                                                                        );
                                                                                    case 2:
                                                                                    case "end":
                                                                                        return t.stop();
                                                                                }
                                                                        }, t);
                                                                    }),
                                                                );
                                                                return function(e, n) {
                                                                    return t.apply(this, arguments);
                                                                };
                                                            })(),
                                                        ),
                                                    )
                                                );
                                            case 2:
                                            case "end":
                                                return o.stop();
                                        }
                                }, o);
                            }),
                        )();
                    },
                    fetchMedal: function(t, e) {
                        var n = this,
                            o = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, l) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            n.$axios
                                                            .$get("/user-medal", { token: e })
                                                            .then(function(t) {
                                                                o("setUserMedal", t.data), r(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                l(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                    fetchActivities: function(t) {
                        var e = this,
                            n = t.dispatch;
                        return new Promise(
                            (function() {
                                var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, o) {
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.$axios
                                                            .get("/user/activities")
                                                            .then(function(t) {
                                                                200 === t.data.status ?
                                                                    (n("setActivities", t.data.data),
                                                                        r(t.data)) :
                                                                    o(t.data);
                                                            })
                                                            .catch(function(t) {
                                                                o(t);
                                                            })
                                                        );
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    }),
                                );
                                return function(e, n) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                        );
                    },
                },
                v = {
                    getUserInfo: function(t) {
                        return t.userInfo;
                    },
                    isLogin: function(t) {
                        return t.isLogin;
                    },
                    IS_CONNECT_STRAVA: function(t) {
                        return !!t.userMedal.access_token;
                    },
                    TOTAL_DISTANCE: function(t) {
                        return t.activities.reduce(function(t, e) {
                            return (t += e.distance || 0);
                        }, 0);
                    },
                    TOTAL_TIME: function(t) {
                        return t.activities.reduce(function(t, e) {
                            return (t += e.moving_time || 0);
                        }, 0);
                    },
                    TOTAL_SPEED: function(t) {
                        return t.activities.reduce(function(t, e) {
                            return (t += e.average_speed || 0);
                        }, 0);
                    },
                };
        },
        500: function(t) {
            t.exports = JSON.parse(
                '{"home":{"lang":"Tiếng Việt","txtLogin":"Đăng nhập"},"challenge":{"start_date":"Ngày bắt đầu","end_date":"Ngày kết thúc","length":"Độ dài","distance_done":"Hoàn thành {value}","remaining":"Còn lại {value}","time":"Thời gian","day":"{value} day","remaining_day":"Còn lại {value} ngày","monitor_progress":"Theo dõi tiến độ","my_challenge":"Thử thách của tôi","new_challenge":"Săn thử thách mới","looking_more":"Tìm hiểu thêm"},"profile":{"info":"Thông tin tài khoản","myInfo":"Thông tin cá nhân","fullName":"Họ và tên:","birthday":"Ngày sinh:","password":"Mật khẩu:","height":"Chiều cao:","weight":"Cân nặng","info-medal":"Thông tin về huy chương","email":"Email","phone":"Số điện thoại","address":"Địa chỉ","privacy_policy":"Chính sách bảo mật","looking_more":"Tìm hiểu thêm","data-strava":"Dữ liệu strava"},"action":{"edit":"Sửa","updateInfo":"Cập nhật thông tin","update":"Cập nhật","close":"Đóng"},"user":{"unConnectStrava":"Bạn có muốn gỡ kết nối với strava?"},"challenges":{"choose-challenge":"Chọn thử thách"},"strava":{"distance":"Quảng đường","time":"Thời gian","speed":"Tốc độ","cal":"Cal","challenge":"Thử thách","update-challenge":"Cập nhật thử thách","message":{"update-challenge":"Cập nhật thử thách thành công","updated-challenge":"Đã cập nhật thử thách"}}}',
            );
        },
        501: function(t) {
            t.exports = JSON.parse(
                '{"home":{"lang":"English","txtLogin":"Login"},"challenge":{"start_date":"","my_challenge":"My challenge"}}',
            );
        },
        67: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                    return Xe;
                }),
                n.d(e, "a", function() {
                    return P;
                });
            var r = {};
            n.r(r),
                n.d(r, "ChallengeVertical", function() {
                    return yt;
                }),
                n.d(r, "Global", function() {
                    return Ct;
                }),
                n.d(r, "Loading", function() {
                    return _t;
                }),
                n.d(r, "LogoInspiretrails", function() {
                    return kt;
                }),
                n.d(r, "NotificationIcon", function() {
                    return jt;
                }),
                n.d(r, "NuxtLogo", function() {
                    return Ot;
                }),
                n.d(r, "Pagination", function() {
                    return Lt;
                }),
                n.d(r, "Tutorial", function() {
                    return $t;
                }),
                n.d(r, "BoxChallenge", function() {
                    return St;
                }),
                n.d(r, "ChallengeNew", function() {
                    return Tt;
                }),
                n.d(r, "TableStrava", function() {
                    return zt;
                }),
                n.d(r, "ClientLayoutsFooter", function() {
                    return At;
                }),
                n.d(r, "ClientLayoutsHeader", function() {
                    return Et;
                }),
                n.d(r, "ClientLayoutsNavLeft", function() {
                    return Pt;
                }),
                n.d(r, "ClientLayoutsNavMobi", function() {
                    return Rt;
                });
            n(5), n(4), n(2), n(6), n(3), n(7);
            var o = n(10),
                l = n(0),
                c = (n(41), n(24), n(1), n(16), n(12), n(18), n(8)),
                f = n(56),
                h = n(336),
                d = n(233),
                m = n.n(d),
                v = n(107),
                x = n.n(v),
                w = (n(49), n(55), n(234)),
                y = n(66),
                C = n(9);
            "scrollRestoration" in window.history &&
                (Object(C.u)("manual"),
                    window.addEventListener("beforeunload", function() {
                        Object(C.u)("auto");
                    }),
                    window.addEventListener("load", function() {
                        Object(C.u)("manual");
                    }));

            function k(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        k(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        k(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }
            var O = function() {};
            c.default.use(w.a);
            var L = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n
                        ?
                        (r = n) :
                        o &&
                        (function(t) {
                            var e = Object(C.g)(t);
                            if (1 === e.length) {
                                var n = e[0].options;
                                return !1 !== (void 0 === n ? {} : n).scrollToTop;
                            }
                            return e.some(function(t) {
                                var e = t.options;
                                return e && e.scrollToTop;
                            });
                        })(t) &&
                        (r = { x: 0, y: 0 });
                    var l = window.$nuxt;
                    return (
                        (!o || (t.path === e.path && t.hash !== e.hash)) &&
                        l.$nextTick(function() {
                            return l.$emit("triggerScroll");
                        }),
                        new Promise(function(e) {
                            l.$once("triggerScroll", function() {
                                if (t.hash) {
                                    var n = t.hash;
                                    void 0 !== window.CSS &&
                                        void 0 !== window.CSS.escape &&
                                        (n = "#" + window.CSS.escape(n.substr(1)));
                                    try {
                                        document.querySelector(n) && (r = { selector: n });
                                    } catch (t) {
                                        console.warn(
                                            "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).",
                                        );
                                    }
                                }
                                e(r);
                            });
                        })
                    );
                },
                routes: [{
                        path: "/challenges",
                        component: function() {
                            return Object(C.m)(n.e(26).then(n.bind(null, 810)));
                        },
                        name: "challenges",
                    },
                    {
                        path: "/change-password",
                        component: function() {
                            return Object(C.m)(n.e(27).then(n.bind(null, 811)));
                        },
                        name: "change-password",
                    },
                    {
                        path: "/conquering",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 812)),
                            );
                        },
                        name: "conquering",
                    },
                    {
                        path: "/forgot-password",
                        component: function() {
                            return Object(C.m)(n.e(29).then(n.bind(null, 813)));
                        },
                        name: "forgot-password",
                    },
                    {
                        path: "/login",
                        component: function() {
                            return Object(C.m)(n.e(31).then(n.bind(null, 814)));
                        },
                        name: "login",
                    },
                    {
                        path: "/my-challenges",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(33)]).then(n.bind(null, 815)),
                            );
                        },
                        name: "my-challenges",
                    },
                    {
                        path: "/my-strava",
                        component: function() {
                            return Object(C.m)(n.e(34).then(n.bind(null, 816)));
                        },
                        name: "my-strava",
                    },
                    {
                        path: "/order",
                        component: function() {
                            return Object(C.m)(n.e(35).then(n.bind(null, 817)));
                        },
                        name: "order",
                    },
                    {
                        path: "/privacy-policy",
                        component: function() {
                            return Object(C.m)(n.e(39).then(n.bind(null, 818)));
                        },
                        name: "privacy-policy",
                    },
                    {
                        path: "/profile",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(1), n.e(40)]).then(n.bind(null, 819)),
                            );
                        },
                        name: "profile",
                    },
                    {
                        path: "/receive-medal",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(41)]).then(n.bind(null, 820)),
                            );
                        },
                        name: "receive-medal",
                    },
                    {
                        path: "/register",
                        component: function() {
                            return Object(C.m)(n.e(43).then(n.bind(null, 821)));
                        },
                        name: "register",
                    },
                    {
                        path: "/strava",
                        component: function() {
                            return Object(C.m)(n.e(44).then(n.bind(null, 822)));
                        },
                        name: "strava",
                    },
                    {
                        path: "/update-email",
                        component: function() {
                            return Object(C.m)(n.e(45).then(n.bind(null, 823)));
                        },
                        name: "update-email",
                    },
                    {
                        path: "/update-password",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(46)]).then(n.bind(null, 824)),
                            );
                        },
                        name: "update-password",
                    },
                    {
                        path: "/admin/categories",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(1), n.e(0), n.e(14)]).then(n.bind(null, 825)),
                            );
                        },
                        name: "admin-categories",
                    },
                    {
                        path: "/admin/dashboard",
                        component: function() {
                            return Object(C.m)(n.e(18).then(n.bind(null, 826)));
                        },
                        name: "admin-dashboard",
                    },
                    {
                        path: "/admin/login",
                        component: function() {
                            return Object(C.m)(n.e(19).then(n.bind(null, 827)));
                        },
                        name: "admin-login",
                    },
                    {
                        path: "/order/notification",
                        component: function() {
                            return Object(C.m)(n.e(37).then(n.bind(null, 828)));
                        },
                        name: "order-notification",
                    },
                    {
                        path: "/order/thank-you",
                        component: function() {
                            return Object(C.m)(n.e(38).then(n.bind(null, 829)));
                        },
                        name: "order-thank-you",
                    },
                    {
                        path: "/register/active",
                        component: function() {
                            return Object(C.m)(n.e(42).then(n.bind(null, 830)));
                        },
                        name: "register-active",
                    },
                    {
                        path: "/admin/challenges/create",
                        component: function() {
                            return Object(C.m)(n.e(17).then(n.bind(null, 831)));
                        },
                        name: "admin-challenges-create",
                    },
                    {
                        path: "/admin/posts/create",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(1), n.e(20)]).then(n.bind(null, 832)),
                            );
                        },
                        name: "admin-posts-create",
                    },
                    {
                        path: "/admin/posts/list",
                        component: function() {
                            return Object(C.m)(n.e(21).then(n.bind(null, 833)));
                        },
                        name: "admin-posts-list",
                    },
                    {
                        path: "/admin/users/create",
                        component: function() {
                            return Object(C.m)(n.e(23).then(n.bind(null, 834)));
                        },
                        name: "admin-users-create",
                    },
                    {
                        path: "/admin/users/list",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(24)]).then(n.bind(null, 844)),
                            );
                        },
                        name: "admin-users-list",
                    },
                    {
                        path: "/admin/challenges/categories/create",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(1), n.e(15)]).then(n.bind(null, 835)),
                            );
                        },
                        name: "admin-challenges-categories-create",
                    },
                    {
                        path: "/admin/challenges/categories/list",
                        component: function() {
                            return Object(C.m)(n.e(16).then(n.bind(null, 836)));
                        },
                        name: "admin-challenges-categories-list",
                    },
                    {
                        path: "/order/notification/:slug",
                        component: function() {
                            return Object(C.m)(n.e(36).then(n.bind(null, 837)));
                        },
                        name: "order-notification-slug",
                    },
                    {
                        path: "/admin/users/:edit?/:id?",
                        component: function() {
                            return Object(C.m)(n.e(22).then(n.bind(null, 838)));
                        },
                        name: "admin-users-edit-id",
                    },
                    {
                        path: "/challenges/:slug",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(2), n.e(25)]).then(n.bind(null, 839)),
                            );
                        },
                        name: "challenges-slug",
                    },
                    {
                        path: "/my-challenges/:id?",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(0), n.e(32)]).then(n.bind(null, 840)),
                            );
                        },
                        name: "my-challenges-id",
                    },
                    {
                        path: "/",
                        component: function() {
                            return Object(C.m)(
                                Promise.all([n.e(2), n.e(30)]).then(n.bind(null, 841)),
                            );
                        },
                        name: "index",
                    },
                ],
                fallback: !1,
            };

            function $(t, e) {
                var base = (e._app && e._app.basePath) || L.base,
                    n = new w.a(j(j({}, L), {}, { base: base })),
                    r = n.push;
                n.push = function(t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1] ?
                        arguments[1] :
                        O,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n);
                };
                var o = n.resolve.bind(n);
                return (
                    (n.resolve = function(t, e, n) {
                        return "string" == typeof t && (t = Object(y.c)(t)), o(t, e, n);
                    }),
                    n
                );
            }
            var S = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: { type: String, default: "" },
                        keepAlive: Boolean,
                        keepAliveProps: { type: Object, default: void 0 },
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (
                            var l = n,
                                c = n.$nuxt.nuxt.transitions,
                                f = n.$nuxt.nuxt.defaultTransition,
                                h = 0; n;

                        )
                            n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent);
                        data.nuxtChildDepth = h;
                        var d = c[h] || f,
                            m = {};
                        T.forEach(function(t) {
                            void 0 !== d[t] && (m[t] = d[t]);
                        });
                        var v = {};
                        z.forEach(function(t) {
                            "function" == typeof d[t] && (v[t] = d[t].bind(l));
                        });
                        var x = v.beforeEnter;
                        if (
                            ((v.beforeEnter = function(t) {
                                if (
                                    (window.$nuxt.$nextTick(function() {
                                            window.$nuxt.$emit("triggerScroll");
                                        }),
                                        x)
                                )
                                    return x.call(l, t);
                            }), !1 === d.css)
                        ) {
                            var w = v.leave;
                            (!w || w.length < 2) &&
                            (v.leave = function(t, e) {
                                w && w.call(l, t), l.$nextTick(e);
                            });
                        }
                        var y = o("routerView", data);
                        return (
                            r.keepAlive &&
                            (y = o("keep-alive", { props: r.keepAliveProps }, [y])),
                            o("transition", { props: m, on: v }, [y])
                        );
                    },
                },
                T = [
                    "name",
                    "mode",
                    "appear",
                    "css",
                    "type",
                    "duration",
                    "enterClass",
                    "leaveClass",
                    "appearClass",
                    "enterActiveClass",
                    "enterActiveClass",
                    "leaveActiveClass",
                    "appearActiveClass",
                    "enterToClass",
                    "leaveToClass",
                    "appearToClass",
                ],
                z = [
                    "beforeEnter",
                    "enter",
                    "afterEnter",
                    "enterCancelled",
                    "beforeLeave",
                    "leave",
                    "afterLeave",
                    "leaveCancelled",
                    "beforeAppear",
                    "appear",
                    "afterAppear",
                    "appearCancelled",
                ],
                A = {
                    name: "NuxtError",
                    props: { error: { type: Object, default: null } },
                    computed: {
                        statusCode: function() {
                            return (this.error && this.error.statusCode) || 500;
                        },
                        message: function() {
                            return this.error.message || "Error";
                        },
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
                            }, ],
                        };
                    },
                },
                E = (n(408), n(22)),
                P = Object(E.a)(
                    A,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", { staticClass: "__nuxt-error-page" }, [
                            e("div", { staticClass: "error" }, [
                                e(
                                    "svg", {
                                        attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "90",
                                            height: "90",
                                            fill: "#DBE1EC",
                                            viewBox: "0 0 48 48",
                                        },
                                    }, [
                                        e("path", {
                                            attrs: {
                                                d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
                                            },
                                        }),
                                    ],
                                ),
                                t._v(" "),
                                e("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
                                t._v(" "),
                                404 === t.statusCode ?
                                e(
                                    "p", { staticClass: "description" }, [
                                        void 0 === t.$route ?
                                        e("a", {
                                            staticClass: "error-link",
                                            attrs: { href: "/" },
                                        }) :
                                        e(
                                            "NuxtLink", { staticClass: "error-link", attrs: { to: "/" } }, [t._v("Back to the home page")],
                                        ),
                                    ],
                                    1,
                                ) :
                                t._e(),
                                t._v(" "),
                                t._m(0),
                            ]),
                        ]);
                    }, [
                        function() {
                            var t = this._self._c;
                            return t("div", { staticClass: "logo" }, [
                                t(
                                    "a", {
                                        attrs: {
                                            href: "https://nuxtjs.org",
                                            target: "_blank",
                                            rel: "noopener",
                                        },
                                    }, [this._v("Nuxt")],
                                ),
                            ]);
                        },
                    ], !1,
                    null,
                    null,
                    null,
                ).exports,
                R = n(36),
                M =
                (n(32), {
                    name: "Nuxt",
                    components: { NuxtChild: S, NuxtError: P },
                    props: {
                        nuxtChildKey: { type: String, default: void 0 },
                        keepAlive: Boolean,
                        keepAliveProps: { type: Object, default: void 0 },
                        name: { type: String, default: "default" },
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError &&
                            ((this.errorFromNuxtError = t), this.$forceUpdate());
                    },
                    computed: {
                        routerViewKey: function() {
                            if (
                                void 0 !== this.nuxtChildKey ||
                                this.$route.matched.length > 1
                            )
                                return (
                                    this.nuxtChildKey ||
                                    Object(C.c)(this.$route.matched[0].path)(this.$route.params)
                                );
                            var t = Object(R.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key)
                                    return "function" == typeof n.key ?
                                        n.key(this.$route) :
                                        n.key;
                            }
                            return /\/$/.test(t.path) ?
                                this.$route.path :
                                this.$route.path.replace(/\/$/, "");
                        },
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(
                            this,
                            "nuxt",
                            this.$root.$options.nuxt,
                        );
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ?
                            this.errorFromNuxtError ?
                            (this.$nextTick(function() {
                                    return (e.errorFromNuxtError = !1);
                                }),
                                t("div", {}, [
                                    t("h2", "An error occurred while showing the error page"),
                                    t(
                                        "p",
                                        "Unfortunately an error occurred and while showing the error page another error occurred",
                                    ),
                                    t(
                                        "p",
                                        "Error details: ".concat(
                                            this.errorFromNuxtError.toString(),
                                        ),
                                    ),
                                    t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                                ])) :
                            ((this.displayingNuxtError = !0),
                                this.$nextTick(function() {
                                    return (e.displayingNuxtError = !1);
                                }),
                                t(P, { props: { error: this.nuxt.err } })) :
                            t("NuxtChild", {
                                key: this.routerViewKey,
                                props: this.$props,
                            });
                    },
                }),
                D =
                (n(19),
                    n(72),
                    n(64),
                    n(80),
                    n(38), {
                        name: "NuxtLoading",
                        data: function() {
                            return {
                                percent: 0,
                                show: !1,
                                canSucceed: !0,
                                reversed: !1,
                                skipTimerCount: 0,
                                rtl: !1,
                                throttle: 200,
                                duration: 5e3,
                                continuous: !1,
                            };
                        },
                        computed: {
                            left: function() {
                                return (!(!this.continuous && !this.rtl) &&
                                    (this.rtl ?
                                        this.reversed ?
                                        "0px" :
                                        "auto" :
                                        this.reversed ?
                                        "auto" :
                                        "0px")
                                );
                            },
                        },
                        beforeDestroy: function() {
                            this.clear();
                        },
                        methods: {
                            clear: function() {
                                clearInterval(this._timer),
                                    clearTimeout(this._throttle),
                                    (this._timer = null);
                            },
                            start: function() {
                                var t = this;
                                return (
                                    this.clear(),
                                    (this.percent = 0),
                                    (this.reversed = !1),
                                    (this.skipTimerCount = 0),
                                    (this.canSucceed = !0),
                                    this.throttle ?
                                    (this._throttle = setTimeout(function() {
                                        return t.startTimer();
                                    }, this.throttle)) :
                                    this.startTimer(),
                                    this
                                );
                            },
                            set: function(t) {
                                return (
                                    (this.show = !0),
                                    (this.canSucceed = !0),
                                    (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                                    this
                                );
                            },
                            get: function() {
                                return this.percent;
                            },
                            increase: function(t) {
                                return (
                                    (this.percent = Math.min(100, Math.floor(this.percent + t))),
                                    this
                                );
                            },
                            decrease: function(t) {
                                return (
                                    (this.percent = Math.max(0, Math.floor(this.percent - t))),
                                    this
                                );
                            },
                            pause: function() {
                                return clearInterval(this._timer), this;
                            },
                            resume: function() {
                                return this.startTimer(), this;
                            },
                            finish: function() {
                                return (
                                    (this.percent = this.reversed ? 0 : 100), this.hide(), this
                                );
                            },
                            hide: function() {
                                var t = this;
                                return (
                                    this.clear(),
                                    setTimeout(function() {
                                        (t.show = !1),
                                        t.$nextTick(function() {
                                            (t.percent = 0), (t.reversed = !1);
                                        });
                                    }, 500),
                                    this
                                );
                            },
                            fail: function(t) {
                                return (this.canSucceed = !1), this;
                            },
                            startTimer: function() {
                                var t = this;
                                this.show || (this.show = !0),
                                    void 0 === this._cut &&
                                    (this._cut = 1e4 / Math.floor(this.duration)),
                                    (this._timer = setInterval(function() {
                                        t.skipTimerCount > 0 ?
                                            t.skipTimerCount--
                                            :
                                            (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                                                t.continuous &&
                                                (t.percent >= 100 || t.percent <= 0) &&
                                                ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                                    }, 100));
                            },
                        },
                        render: function(t) {
                            var e = t(!1);
                            return (
                                this.show &&
                                (e = t("div", {
                                    staticClass: "nuxt-progress",
                                    class: {
                                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                                            "nuxt-progress-failed": !this.canSucceed,
                                    },
                                    style: { width: this.percent + "%", left: this.left },
                                })),
                                e
                            );
                        },
                    }),
                N =
                (n(410),
                    Object(E.a)(D, undefined, undefined, !1, null, null, null).exports),
                U =
                (n(412),
                    n(414),
                    n(290),
                    n(417),
                    n(422),
                    n(125), {
                        name: "AdminLayout",
                        data: function() {
                            return {
                                menus: [{
                                        name: "Dashboard",
                                        link: "/admin/dashboard",
                                        icon: "gauge",
                                        isCollapse: !1,
                                    },
                                    {
                                        name: "Quản lý người dùng",
                                        link: "/users",
                                        icon: "users",
                                        isCollapse: !1,
                                        children: [{
                                                name: "Thêm mới",
                                                link: "/admin/users/create",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                            {
                                                name: "Danh sách người dùng",
                                                link: "/admin/users/list",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                        ],
                                    },
                                    {
                                        name: "Quản lý thử thách",
                                        link: "/challenges",
                                        icon: "globe",
                                        isCollapse: !1,
                                        children: [{
                                                name: "Thêm mới chuyên mục",
                                                link: "/admin/challenges/categories/create",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                            {
                                                name: "Danh sách chuyên mục",
                                                link: "/admin/challenges/categories/list",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                            {
                                                name: "Tạo mới thử thách",
                                                link: "/admin/challenges/create",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                        ],
                                    },
                                    {
                                        name: "Quản lý bài viết",
                                        link: "/posts",
                                        icon: "newspaper",
                                        isCollapse: !1,
                                        children: [{
                                                name: "Thêm mới",
                                                link: "/admin/posts/create",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                            {
                                                name: "Danh sách bài viết",
                                                link: "/admin/posts/list",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                            {
                                                name: "Chuyên mục",
                                                link: "/admin/categories?type=post",
                                                icon: "",
                                                isCollapse: !1,
                                            },
                                        ],
                                    },
                                ],
                            };
                        },
                        methods: {
                            toggleSubMenu: function(menu, t) {
                                this.menus.forEach(function(e, i) {
                                        e.isCollapse = i === t && !e.isCollapse;
                                    }),
                                    console.log(121212, this.menus);
                            },
                        },
                    }),
                I = Object(E.a)(
                    U,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [
                            e(
                                "aside", { staticClass: "main-sidebar" }, [
                                    e(
                                        "NuxtLink", { staticClass: "brand-link", attrs: { to: "to" } }, [
                                            e("span", [e("img", { attrs: { src: n(425) } })]),
                                            t._v(" "),
                                            e("span", [t._v("InspireTrails")]),
                                        ],
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "menu-admin" }, [
                                        e(
                                            "ul",
                                            t._l(t.menus, function(menu, n) {
                                                return e(
                                                    "li", { key: n, class: { active: menu.isCollapse } }, [!menu.children || menu.children <= 0 ?
                                                        e("NuxtLink", { attrs: { to: menu.link } }, [
                                                            e(
                                                                "span", [
                                                                    e("font-awesome-icon", {
                                                                        staticClass: "ml-2",
                                                                        attrs: { icon: ["fas", menu.icon] },
                                                                    }),
                                                                ],
                                                                1,
                                                            ),
                                                            t._v(" "),
                                                            e("span", [t._v(t._s(menu.name))]),
                                                        ]) :
                                                        t._e(),
                                                        t._v(" "),
                                                        menu.children || menu.children > 0 ?
                                                        e(
                                                            "a", {
                                                                staticClass: "link-parent",
                                                                on: {
                                                                    click: function(e) {
                                                                        return t.toggleSubMenu(menu, n);
                                                                    },
                                                                },
                                                            }, [
                                                                e(
                                                                    "span", [
                                                                        e("font-awesome-icon", {
                                                                            staticClass: "ml-2",
                                                                            attrs: { icon: ["fas", menu.icon] },
                                                                        }),
                                                                    ],
                                                                    1,
                                                                ),
                                                                t._v(" "),
                                                                e("span", [t._v(t._s(menu.name))]),
                                                            ],
                                                        ) :
                                                        t._e(),
                                                        t._v(" "),
                                                        menu.children && menu.children.length > 0 ?
                                                        e(
                                                            "span", { staticClass: "icon-arrow" }, [
                                                                e("font-awesome-icon", {
                                                                    staticClass: "ml-2",
                                                                    attrs: { icon: ["fas", "chevron-right"] },
                                                                }),
                                                            ],
                                                            1,
                                                        ) :
                                                        t._e(),
                                                        t._v(" "),
                                                        menu.children && menu.children.length > 0 ?
                                                        e(
                                                            "ul", {
                                                                staticClass: "sub-menu",
                                                                class: { collapsed: menu.isCollapse },
                                                            },
                                                            t._l(menu.children, function(n, i) {
                                                                return e(
                                                                    "li", { key: i }, [
                                                                        e(
                                                                            "NuxtLink", { attrs: { to: n.link } }, [
                                                                                t._v(
                                                                                    "\n                " +
                                                                                    t._s(n.name) +
                                                                                    "\n              ",
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                    1,
                                                                );
                                                            }),
                                                            0,
                                                        ) :
                                                        t._e(),
                                                    ],
                                                    1,
                                                );
                                            }),
                                            0,
                                        ),
                                    ]),
                                ],
                                1,
                            ),
                            t._v(" "),
                            e("div", { staticClass: "right-content-admin" }, [
                                e("div", { staticClass: "top-content-admin" }, [
                                    e("div", { staticClass: "container-fluid" }, [
                                        e("div", { staticClass: "row" }, [
                                            e(
                                                "div", {
                                                    staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                                                }, [
                                                    e(
                                                        "div", { staticClass: "hamburger" }, [
                                                            e("font-awesome-icon", {
                                                                staticClass: "ml-2",
                                                                attrs: { icon: ["fas", "bars"] },
                                                            }),
                                                        ],
                                                        1,
                                                    ),
                                                ],
                                            ),
                                        ]),
                                    ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "content-admin" }, [
                                    e("div", { staticClass: "container-fluid" }, [
                                        e("div", { staticClass: "row" }, [
                                            e(
                                                "div", {
                                                    staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-3",
                                                }, [e("Nuxt")],
                                                1,
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    }, [], !1,
                    null,
                    "eeaecd0c",
                    null,
                ).exports,
                H = [
                    function() {
                        var t = this._self._c;
                        return t("div", { staticClass: "messenger-button" }, [
                            t(
                                "a", {
                                    attrs: {
                                        href: "https://www.facebook.com/inspireTrails.life",
                                        target: "_blank",
                                    },
                                }, [t("img", { attrs: { src: n(426), alt: "Messenger" } })],
                            ),
                        ]);
                    },
                ],
                V = n(104),
                B = n(105);

            function F(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var Z = {
                    name: "default",
                    components: { NavFooter: B.default, NavHeader: V.default },
                    created: function() {},
                    methods: (function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ?
                                F(Object(n), !0).forEach(function(e) {
                                    Object(l.a)(t, e, n[e]);
                                }) :
                                Object.getOwnPropertyDescriptors ?
                                Object.defineProperties(
                                    t,
                                    Object.getOwnPropertyDescriptors(n),
                                ) :
                                F(Object(n)).forEach(function(e) {
                                    Object.defineProperty(
                                        t,
                                        e,
                                        Object.getOwnPropertyDescriptor(n, e),
                                    );
                                });
                        }
                        return t;
                    })({}, Object(f.b)({ setUserInfos: "user/setUserInfo" })),
                },
                G = Z,
                K =
                (n(436),
                    Object(E.a)(
                        G,
                        function() {
                            var t = this,
                                e = t._self._c;
                            return e(
                                "div", [
                                    e("NavHeader"),
                                    t._v(" "),
                                    e("Nuxt"),
                                    t._v(" "),
                                    e("NavFooter"),
                                    t._v(" "),
                                    t._m(0),
                                ],
                                1,
                            );
                        },
                        H, !1,
                        null,
                        "0b5c3495",
                        null,
                    ).exports),
                Q = { name: "PageAdmin" },
                X = Object(E.a)(
                    Q,
                    function() {
                        var t = this._self._c;
                        return t("div", [t("Nuxt")], 1);
                    }, [], !1,
                    null,
                    "66a9c249",
                    null,
                ).exports,
                Y = { name: "NoPage" },
                J = Object(E.a)(
                    Y,
                    function() {
                        var t = this._self._c;
                        return t("div", [t("Nuxt")], 1);
                    }, [], !1,
                    null,
                    "08b03817",
                    null,
                ).exports,
                W = n(172),
                tt = n(173),
                et = {
                    name: "UserFull",
                    components: {
                        NavLeft: W.default,
                        NavFooter: B.default,
                        NavHeader: V.default,
                        NavMobi: tt.default,
                    },
                    data: function() {
                        return { isCollapse: !1, isFixed: !1 };
                    },
                    beforeMount: function() {
                        window.addEventListener("scroll", this.handleScroll);
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("scroll", this.handleScroll);
                    },
                    methods: {
                        collapse: function() {
                            this.isCollapse = !this.isCollapse;
                        },
                        handleScroll: function() {
                            window.scrollY > 95 ? (this.isFixed = !0) : (this.isFixed = !1);
                        },
                    },
                },
                nt = Object(E.a)(
                    et,
                    function() {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "div", [
                                e("NavHeader"),
                                t._v(" "),
                                e(
                                    "div", {
                                        staticClass: "wrap-user",
                                        class: { "has-collapse": t.isCollapse },
                                    }, [
                                        e("div", { staticClass: "container-fluid px-0" }, [
                                            e("div", { staticClass: "row no-gutters" }, [
                                                e(
                                                    "div", {
                                                        staticClass: "col-left",
                                                        class: { "has-left-fixed": t.isFixed },
                                                    }, [
                                                        e(
                                                            "div", {
                                                                staticClass: "menu-left",
                                                                class: { "no-collapse": t.isCollapse },
                                                            }, [
                                                                e(
                                                                    "div", {
                                                                        staticClass: "icon-collapse",
                                                                        on: {
                                                                            click: function(e) {
                                                                                return t.collapse();
                                                                            },
                                                                        },
                                                                    }, [e("img", { attrs: { src: n(296) } })],
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "div", { staticClass: "content-menu-left" }, [e("NavLeft")],
                                                                    1,
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                                t._v(" "),
                                                e("div", { staticClass: "col-center-full" }, [
                                                    e(
                                                        "div", { staticClass: "content-page-user h-100" }, [e("Nuxt")],
                                                        1,
                                                    ),
                                                ]),
                                            ]),
                                        ]),
                                    ],
                                ),
                                t._v(" "),
                                e("NavMobi"),
                                t._v(" "),
                                e("NavFooter"),
                            ],
                            1,
                        );
                    }, [], !1,
                    null,
                    "86a4e816",
                    null,
                ).exports,
                it =
                (n(135), [
                    function() {
                        var t = this._self._c;
                        return t(
                            "div", { staticClass: "col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" }, [
                                t("div", { staticClass: "avatar-user-info-right" }, [
                                    t("img", { attrs: { src: n(447) } }),
                                ]),
                            ],
                        );
                    },
                    function() {
                        var t = this._self._c;
                        return t(
                            "div", { staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" }, [
                                t("div", { staticClass: "label-item-info-data" }, [
                                    this._v(
                                        "\n                      Tổng km tích lũy\n                    ",
                                    ),
                                ]),
                            ],
                        );
                    },
                    function() {
                        var t = this._self._c;
                        return t(
                            "div", { staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" }, [
                                t("div", { staticClass: "label-item-info-data" }, [
                                    this._v(
                                        "\n                      Tổng thời gian vận động tích lũy\n                    ",
                                    ),
                                ]),
                            ],
                        );
                    },
                    function() {
                        var t = this._self._c;
                        return t(
                            "div", { staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" }, [
                                t("div", { staticClass: "label-item-info-data" }, [
                                    this._v(
                                        "\n                      Tổng lượng Kcal tích lũy\n                    ",
                                    ),
                                ]),
                            ],
                        );
                    },
                    function() {
                        var t = this._self._c;
                        return t(
                            "div", { staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" }, [
                                t("div", { staticClass: "label-item-info-data" }, [
                                    this._v(
                                        "\n                      Pace (tốc độ) trung bình\n                    ",
                                    ),
                                ]),
                            ],
                        );
                    },
                ]);

            function ot(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function at(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        ot(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        ot(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }
            var st = {
                    name: "UserLayout",
                    components: {
                        NavLeft: W.default,
                        NavFooter: B.default,
                        NavHeader: V.default,
                        NavMobi: tt.default,
                    },
                    data: function() {
                        return {
                            isCollapse: !1,
                            isFixed: !1,
                            BASE_SERVER: void 0,
                            hasUser: !1,
                            userStrava: {},
                            userStravaData: {},
                        };
                    },
                    computed: at(
                        at({},
                            Object(f.c)("user", [
                                "TOTAL_DISTANCE",
                                "TOTAL_SPEED",
                                "TOTAL_TIME",
                            ]),
                        ), {}, {
                            userInfo: function() {
                                return this.$auth.user;
                            },
                            strava_connected: {
                                get: function() {
                                    return this.hasUser ? this.$auth.user.access_token : null;
                                },
                                set: function(data) {
                                    data
                                        ?
                                        window.open(
                                            "https://inspiretrails.life/api/strava-connect/authentication",
                                        ) :
                                        this.unAuthenticate();
                                },
                            },
                        },
                    ),
                    mounted: function() {
                        this.$auth && this.$auth.user ?
                            ((this.hasUser = !0),
                                this.getUserDetail(),
                                this.getUserStravaData()) :
                            this.$router.push("/login");
                    },
                    beforeMount: function() {
                        window.addEventListener("scroll", this.handleScroll);
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("scroll", this.handleScroll);
                    },
                    created: function() {
                        this.fetchActivities(), this.strava_connected && this.onSync();
                    },
                    methods: at(
                        at(
                            at({},
                                Object(f.b)("strava", [
                                    "syncAthlete",
                                    "syncActivities",
                                    "unAuthenticate",
                                    "fetchDataStrava",
                                    "connectStrava",
                                ]),
                            ),
                            Object(f.b)("user", ["fetchMedal", "fetchActivities"]),
                        ), {}, {
                            reFetchMyChallenges: function() {
                                var t = this;
                                return Object(o.a)(
                                    regeneratorRuntime.mark(function e() {
                                        var n, r;
                                        return regeneratorRuntime.wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t.loading = !0),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                t.$axios.post("/strava/manual-update-activity")
                                                            );
                                                        case 4:
                                                            if (
                                                                null == (r = e.sent) ||
                                                                null === (n = r.data) ||
                                                                void 0 === n ||
                                                                !n.status
                                                            ) {
                                                                e.next = 8;
                                                                break;
                                                            }
                                                            return (e.next = 8), t.fetchDataStrava();
                                                        case 8:
                                                            window.location.reload(), (e.next = 14);
                                                            break;
                                                        case 11:
                                                            (e.prev = 11),
                                                            (e.t0 = e.catch(1)),
                                                            console.log(e.t0);
                                                        case 14:
                                                            t.loading = !1;
                                                        case 15:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null, [
                                                [1, 11]
                                            ],
                                        );
                                    }),
                                )();
                            },
                            collapse: function() {
                                this.isCollapse = !this.isCollapse;
                            },
                            handleScroll: function() {
                                window.scrollY > 95 ? (this.isFixed = !0) : (this.isFixed = !1);
                            },
                            connectedStrava: function() {
                                var t = this;
                                this.fetchUserMedal().then(function(e) {
                                    200 === e.status ?
                                        (t.strava_connected = !0) :
                                        (t.strava_connected = !1);
                                });
                            },
                            onSync: function() {
                                this.syncActivities();
                            },
                            getUserDetail: function() {
                                var t = this;
                                this.$axios.get("user/strava").then(function(e) {
                                    e.data && (t.userStrava = e.data.data);
                                });
                            },
                            getUserStravaData: function() {
                                var t = this;
                                this.$axios.get("user/strava/data").then(function(e) {
                                    e.data && (t.userStravaData = e.data.data);
                                });
                            },
                        },
                    ),
                },
                lt =
                (n(448),
                    n(450),
                    Object(E.a)(
                        st,
                        function() {
                            var t = this,
                                e = t._self._c;
                            return e(
                                "div", [
                                    e("NavHeader"),
                                    t._v(" "),
                                    t.hasUser ?
                                    e(
                                        "div", {
                                            staticClass: "wrap-user",
                                            class: { "has-collapse": t.isCollapse },
                                        }, [
                                            e("div", { staticClass: "container-fluid px-0" }, [
                                                e("div", { staticClass: "row no-gutters" }, [
                                                    e(
                                                        "div", {
                                                            staticClass: "col-left",
                                                            class: { "has-left-fixed": t.isFixed },
                                                        }, [
                                                            e(
                                                                "div", {
                                                                    staticClass: "menu-left",
                                                                    class: { "no-collapse": t.isCollapse },
                                                                }, [
                                                                    e(
                                                                        "div", {
                                                                            staticClass: "icon-collapse",
                                                                            on: {
                                                                                click: function(e) {
                                                                                    return t.collapse();
                                                                                },
                                                                            },
                                                                        }, [e("img", { attrs: { src: n(296) } })],
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                        "div", { staticClass: "content-menu-left" }, [e("NavLeft")],
                                                                        1,
                                                                    ),
                                                                ],
                                                            ),
                                                        ],
                                                    ),
                                                    t._v(" "),
                                                    e("div", { staticClass: "col-center" }, [
                                                        e(
                                                            "div", { staticClass: "content-page-user" }, [e("Nuxt")],
                                                            1,
                                                        ),
                                                    ]),
                                                    t._v(" "),
                                                    e(
                                                        "div", {
                                                            staticClass: "col-right",
                                                            class: { "has-fixed": t.isFixed },
                                                        }, [
                                                            e("div", { staticClass: "wrap-col-right" }, [
                                                                e(
                                                                    "div", { staticClass: "user-info-right" }, [
                                                                        e("div", { staticClass: "row" }, [
                                                                            t._m(0),
                                                                            t._v(" "),
                                                                            e(
                                                                                "div", {
                                                                                    staticClass: "col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8",
                                                                                }, [
                                                                                    e(
                                                                                        "div", {
                                                                                            staticClass: "name-email-user-info-right",
                                                                                        }, [
                                                                                            e(
                                                                                                "div", {
                                                                                                    staticClass: "name text-wrap",
                                                                                                }, [
                                                                                                    e(
                                                                                                        "span", {
                                                                                                            directives: [{
                                                                                                                name: "b-tooltip",
                                                                                                                rawName: "v-b-tooltip.bottom",
                                                                                                                modifiers: {
                                                                                                                    bottom: !0,
                                                                                                                },
                                                                                                            }, ],
                                                                                                            attrs: {
                                                                                                                title: t.userInfo.name,
                                                                                                            },
                                                                                                        }, [
                                                                                                            t._v(
                                                                                                                t._s(
                                                                                                                    t.userInfo.name,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ],
                                                                                                    ),
                                                                                                ],
                                                                                            ),
                                                                                            t._v(" "),
                                                                                            e(
                                                                                                "div", {
                                                                                                    staticClass: "email",
                                                                                                    staticStyle: {
                                                                                                        "font-size": "13px",
                                                                                                    },
                                                                                                }, [
                                                                                                    e(
                                                                                                        "span", {
                                                                                                            directives: [{
                                                                                                                name: "b-tooltip",
                                                                                                                rawName: "v-b-tooltip.bottom",
                                                                                                                modifiers: {
                                                                                                                    bottom: !0,
                                                                                                                },
                                                                                                            }, ],
                                                                                                            attrs: {
                                                                                                                title: t.userInfo.email,
                                                                                                            },
                                                                                                        }, [
                                                                                                            t._v(
                                                                                                                t._s(
                                                                                                                    t.userInfo.email,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ],
                                                                                                    ),
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                            t._v(" "),
                                                                            e(
                                                                                "button", {
                                                                                    staticClass: "btn btn-update mt-2 ml-3",
                                                                                    on: {
                                                                                        click: t.reFetchMyChallenges,
                                                                                    },
                                                                                }, [t._v("Đồng bộ thử thách")],
                                                                            ),
                                                                        ]),
                                                                    ],
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "div", { staticClass: "connect-support" }, [
                                                                        e(
                                                                            "div", {
                                                                                staticClass: "title-connect-support",
                                                                            }, [
                                                                                t._v(
                                                                                    "\n                Các kết nối hỗ trợ\n              ",
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        t._v(" "),
                                                                        e(
                                                                            "div", {
                                                                                staticClass: "item-connect-support",
                                                                            }, [
                                                                                e(
                                                                                    "div", { staticClass: "row no-gutters" }, [
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "title-item-connect",
                                                                                                    }, [
                                                                                                        t.strava_connected ?
                                                                                                        t._e() :
                                                                                                        e("span", [
                                                                                                            t._v(
                                                                                                                "Kết nối với Strava",
                                                                                                            ),
                                                                                                        ]),
                                                                                                        t._v(" "),
                                                                                                        t.strava_connected ?
                                                                                                        e("span", [
                                                                                                            t._v(
                                                                                                                "Đã kết nối Strava",
                                                                                                            ),
                                                                                                        ]) :
                                                                                                        t._e(),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                        t._v(" "),
                                                                                        t.strava_connected ?
                                                                                        t._e() :
                                                                                        e("img", {
                                                                                            attrs: {
                                                                                                alt: "connect-with-strava",
                                                                                                src: "/strava/btn_strava_connectwith_light.png",
                                                                                            },
                                                                                            on: {
                                                                                                click: t.connectStrava,
                                                                                            },
                                                                                        }),
                                                                                        t._v(" "),
                                                                                        t.strava_connected &&
                                                                                        t.userStrava &&
                                                                                        t.userStrava.strava ?
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "email-connected mt-2",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "row text-middle",
                                                                                                    }, [
                                                                                                        e(
                                                                                                            "div", {
                                                                                                                staticClass: "col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
                                                                                                            }, [
                                                                                                                t.userStrava
                                                                                                                .strava
                                                                                                                .thumbnail ?
                                                                                                                e(
                                                                                                                    "div", {
                                                                                                                        staticClass: "avatar-strava",
                                                                                                                    }, [
                                                                                                                        e(
                                                                                                                            "img", {
                                                                                                                                attrs: {
                                                                                                                                    src: t
                                                                                                                                        .userStrava
                                                                                                                                        .strava
                                                                                                                                        .thumbnail,
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ],
                                                                                                                ) :
                                                                                                                t._e(),
                                                                                                            ],
                                                                                                        ),
                                                                                                        t._v(" "),
                                                                                                        e(
                                                                                                            "div", {
                                                                                                                staticClass: "col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9",
                                                                                                            }, [
                                                                                                                t.userStrava
                                                                                                                .strava
                                                                                                                .athlete_id ?
                                                                                                                e(
                                                                                                                    "div", {
                                                                                                                        staticClass: "avatar-strava",
                                                                                                                    }, [
                                                                                                                        e(
                                                                                                                            "span", [
                                                                                                                                t._v(
                                                                                                                                    "Athlete Id : ",
                                                                                                                                ),
                                                                                                                            ],
                                                                                                                        ),
                                                                                                                        t._v(
                                                                                                                            " ",
                                                                                                                        ),
                                                                                                                        e(
                                                                                                                            "span", [
                                                                                                                                t._v(
                                                                                                                                    t._s(
                                                                                                                                        t
                                                                                                                                        .userStrava
                                                                                                                                        .strava
                                                                                                                                        .athlete_id,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ],
                                                                                                                        ),
                                                                                                                    ],
                                                                                                                ) :
                                                                                                                t._e(),
                                                                                                            ],
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                                t._v(" "),
                                                                                                e(
                                                                                                    "a", {
                                                                                                        staticClass: "mt-2 disconnect-text",
                                                                                                        on: {
                                                                                                            click: t.unAuthenticate,
                                                                                                        },
                                                                                                    }, [
                                                                                                        t._v(
                                                                                                            "Ngắt kết nối",
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ) :
                                                                                        t._e(),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                    "div", { staticClass: "info-data-strava" }, [
                                                                        e(
                                                                            "div", { staticClass: "item-info-data" }, [
                                                                                e(
                                                                                    "div", { staticClass: "row no-gutters" }, [
                                                                                        t._m(1),
                                                                                        t._v(" "),
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "content-item-info-data",
                                                                                                    }, [
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "parameters",
                                                                                                            }, [
                                                                                                                t.userStravaData
                                                                                                                .total_km ?
                                                                                                                e("span", [
                                                                                                                    t._v(
                                                                                                                        t._s(
                                                                                                                            (
                                                                                                                                t
                                                                                                                                .userStravaData
                                                                                                                                .total_km /
                                                                                                                                1e3
                                                                                                                            ).toFixed(
                                                                                                                                2,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ]) :
                                                                                                                e("span", [
                                                                                                                    t._v("0"),
                                                                                                                ]),
                                                                                                            ],
                                                                                                        ),
                                                                                                        t._v(" "),
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "unit",
                                                                                                            }, [t._v("km")],
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        t._v(" "),
                                                                        e(
                                                                            "div", { staticClass: "item-info-data" }, [
                                                                                e(
                                                                                    "div", { staticClass: "row no-gutters" }, [
                                                                                        t._m(2),
                                                                                        t._v(" "),
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "content-item-info-data",
                                                                                                    }, [
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "parameters",
                                                                                                            }, [
                                                                                                                t.userStravaData
                                                                                                                .total_time ?
                                                                                                                e("span", [
                                                                                                                    t._v(
                                                                                                                        t._s(
                                                                                                                            t
                                                                                                                            .userStravaData
                                                                                                                            .total_time,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ]) :
                                                                                                                e("span", [
                                                                                                                    t._v("0"),
                                                                                                                ]),
                                                                                                            ],
                                                                                                        ),
                                                                                                        t._v(" "),
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "unit",
                                                                                                            }, [t._v("giây")],
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        t._v(" "),
                                                                        e(
                                                                            "div", { staticClass: "item-info-data" }, [
                                                                                e(
                                                                                    "div", { staticClass: "row no-gutters" }, [
                                                                                        t._m(3),
                                                                                        t._v(" "),
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "content-item-info-data",
                                                                                                    }, [
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "parameters",
                                                                                                            }, [
                                                                                                                t.userStravaData
                                                                                                                .total_calories ?
                                                                                                                e("span", [
                                                                                                                    t._v(
                                                                                                                        t._s(
                                                                                                                            t
                                                                                                                            .userStravaData
                                                                                                                            .total_calories,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ]) :
                                                                                                                e("span", [
                                                                                                                    t._v("0"),
                                                                                                                ]),
                                                                                                            ],
                                                                                                        ),
                                                                                                        t._v(" "),
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "unit",
                                                                                                            }, [t._v("kcal")],
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        t._v(" "),
                                                                        e(
                                                                            "div", { staticClass: "item-info-data" }, [
                                                                                e(
                                                                                    "div", { staticClass: "row no-gutters" }, [
                                                                                        t._m(4),
                                                                                        t._v(" "),
                                                                                        e(
                                                                                            "div", {
                                                                                                staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",
                                                                                            }, [
                                                                                                e(
                                                                                                    "div", {
                                                                                                        staticClass: "content-item-info-data",
                                                                                                    }, [
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "parameters",
                                                                                                            }, [
                                                                                                                t.userStravaData
                                                                                                                .average_pace ?
                                                                                                                e("span", [
                                                                                                                    t._v(
                                                                                                                        t._s(
                                                                                                                            t.userStravaData.average_pace.toFixed(
                                                                                                                                2,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ]) :
                                                                                                                e("span", [
                                                                                                                    t._v("0"),
                                                                                                                ]),
                                                                                                            ],
                                                                                                        ),
                                                                                                        t._v(" "),
                                                                                                        e(
                                                                                                            "span", {
                                                                                                                staticClass: "unit",
                                                                                                            }, [t._v("km/ngày")],
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                ),
                                                            ]),
                                                        ],
                                                    ),
                                                ]),
                                            ]),
                                        ],
                                    ) :
                                    t._e(),
                                    t._v(" "),
                                    e("NavMobi"),
                                    t._v(" "),
                                    e("NavFooter"),
                                ],
                                1,
                            );
                        },
                        it, !1,
                        null,
                        "7be7d1c0",
                        null,
                    ).exports);

            function ct(t, e) {
                var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return ut(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                                return ut(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ?
                                    { done: !0 } :
                                    { done: !1, value: t[i++] };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return (l = t.done), t;
                    },
                    e: function(t) {
                        (c = !0), (o = t);
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return();
                        } finally {
                            if (c) throw o;
                        }
                    },
                };
            }

            function ut(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            var ft = {
                    _admin: Object(C.s)(I),
                    _default: Object(C.s)(K),
                    "_page-admin": Object(C.s)(X),
                    _page: Object(C.s)(J),
                    "_user-full": Object(C.s)(nt),
                    _user: Object(C.s)(lt),
                },
                pt = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", { ref: "loading" }),
                            r = t(this.layout || "nuxt"),
                            o = t(
                                "div", { domProps: { id: "__layout" }, key: this.layoutName }, [r],
                            ),
                            l = t(
                                "transition", {
                                    props: { name: "layout", mode: "out-in" },
                                    on: {
                                        beforeEnter: function(t) {
                                            window.$nuxt.$nextTick(function() {
                                                window.$nuxt.$emit("triggerScroll");
                                            });
                                        },
                                    },
                                }, [o],
                            );
                        return t("div", { domProps: { id: "__nuxt" } }, [n, l]);
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0,
                        };
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
                    },
                    created: function() {
                        (this.$root.$options.$nuxt = this),
                        (window.$nuxt = this),
                        this.refreshOnlineStatus(),
                            window.addEventListener("online", this.refreshOnlineStatus),
                            window.addEventListener("offline", this.refreshOnlineStatus),
                            (this.error = this.nuxt.error),
                            (this.context = this.$options.context);
                    },
                    mounted: function() {
                        var t = this;
                        return Object(o.a)(
                            regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                t.$loading = t.$refs.loading;
                                            case 1:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        )();
                    },
                    watch: { "nuxt.err": "errorChanged" },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline;
                        },
                        isFetching: function() {
                            return this.nbFetching > 0;
                        },
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ?
                                (this.isOnline = !0) :
                                (this.isOnline = window.navigator.onLine);
                        },
                        refresh: function() {
                            var t = this;
                            return Object(o.a)(
                                regeneratorRuntime.mark(function e() {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((n = Object(C.h)(t.$route)).length) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.abrupt("return");
                                                    case 3:
                                                        return (
                                                            t.$loading.start(),
                                                            (r = n.map(function(e) {
                                                                var p = [];
                                                                if (
                                                                    (e.$options.fetch &&
                                                                        e.$options.fetch.length &&
                                                                        p.push(
                                                                            Object(C.q)(e.$options.fetch, t.context),
                                                                        ),
                                                                        e.$fetch)
                                                                )
                                                                    p.push(e.$fetch());
                                                                else {
                                                                    var n,
                                                                        r = ct(
                                                                            Object(C.e)(e.$vnode.componentInstance),
                                                                        );
                                                                    try {
                                                                        for (r.s(); !(n = r.n()).done;) {
                                                                            var component = n.value;
                                                                            p.push(component.$fetch());
                                                                        }
                                                                    } catch (t) {
                                                                        r.e(t);
                                                                    } finally {
                                                                        r.f();
                                                                    }
                                                                }
                                                                return (
                                                                    e.$options.asyncData &&
                                                                    p.push(
                                                                        Object(C.q)(
                                                                            e.$options.asyncData,
                                                                            t.context,
                                                                        ).then(function(t) {
                                                                            for (var n in t)
                                                                                c.default.set(e.$data, n, t[n]);
                                                                        }),
                                                                    ),
                                                                    Promise.all(p)
                                                                );
                                                            })),
                                                            (e.prev = 5),
                                                            (e.next = 8),
                                                            Promise.all(r)
                                                        );
                                                    case 8:
                                                        e.next = 15;
                                                        break;
                                                    case 10:
                                                        (e.prev = 10),
                                                        (e.t0 = e.catch(5)),
                                                        t.$loading.fail(e.t0),
                                                            Object(C.k)(e.t0),
                                                            t.error(e.t0);
                                                    case 15:
                                                        t.$loading.finish();
                                                    case 16:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null, [
                                            [5, 10]
                                        ],
                                    );
                                }),
                            )();
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading &&
                                    (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                                        this.$loading.finish && this.$loading.finish());
                                var t = (P.options || P).layout;
                                "function" == typeof t && (t = t(this.context)),
                                    this.setLayout(t);
                            }
                        },
                        setLayout: function(t) {
                            return (
                                (t && ft["_" + t]) || (t = "default"),
                                (this.layoutName = t),
                                (this.layout = ft["_" + t]),
                                this.layout
                            );
                        },
                        loadLayout: function(t) {
                            return (
                                (t && ft["_" + t]) || (t = "default"),
                                Promise.resolve(ft["_" + t])
                            );
                        },
                    },
                    components: { NuxtLoading: N },
                };
            n(68);
            c.default.use(f.a);
            var ht = ["state", "getters", "actions", "mutations"],
                mt = {};
            ((mt = (function(t, e) {
                if ((t = t.default || t).commit)
                    throw new Error(
                        "[nuxt] ".concat(
                            e,
                            " should export a method that returns a Vuex instance.",
                        ),
                    );
                return "function" != typeof t && (t = Object.assign({}, t)), vt(t, e);
            })(n(452), "store/index.js")).modules = mt.modules || {}),
            xt(n(453), "challenges.js"),
                xt(n(454), "i18n.js"),
                xt(n(455), "strava.js"),
                xt(n(456), "user.js");
            var gt =
                mt instanceof Function ?
                mt :
                function() {
                    return new f.a.Store(Object.assign({ strict: !1 }, mt));
                };

            function vt(t, e) {
                if (t.state && "function" != typeof t.state) {
                    console.warn(
                        "'state' should be a method that returns an object in ".concat(e),
                    );
                    var n = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return n;
                        },
                    });
                }
                return t;
            }

            function xt(t, e) {
                t = t.default || t;
                var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                    r = n[n.length - 1],
                    o = "store/".concat(e);
                if (
                    ((t =
                            "state" === r ?
                            (function(t, e) {
                                if ("function" != typeof t) {
                                    console.warn(
                                        "".concat(
                                            e,
                                            " should export a method that returns an object",
                                        ),
                                    );
                                    var n = Object.assign({}, t);
                                    return function() {
                                        return n;
                                    };
                                }
                                return vt(t, e);
                            })(t, o) :
                            vt(t, o)),
                        ht.includes(r))
                ) {
                    var l = r;
                    wt(bt(mt, n, { isProperty: !0 }), t, l);
                } else {
                    "index" === r && (n.pop(), (r = n[n.length - 1]));
                    for (var c = bt(mt, n), f = 0, h = ht; f < h.length; f++) {
                        var d = h[f];
                        wt(c, t[d], d);
                    }!1 === t.namespaced && delete c.namespaced;
                }
            }

            function bt(t, e) {
                var n = (
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    ).isProperty,
                    r = void 0 !== n && n;
                if (!e.length || (r && 1 === e.length)) return t;
                var o = e.shift();
                return (
                    (t.modules[o] = t.modules[o] || {}),
                    (t.modules[o].namespaced = !0),
                    (t.modules[o].modules = t.modules[o].modules || {}),
                    bt(t.modules[o], e, { isProperty: r })
                );
            }

            function wt(t, e, n) {
                e &&
                    ("state" === n ?
                        (t.state = e || t.state) :
                        (t[n] = Object.assign({}, t[n], e)));
            }
            n(108);
            var yt = function() {
                    return Promise.all([n.e(0), n.e(7)])
                        .then(n.bind(null, 842))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Ct = function() {
                    return n
                        .e(8)
                        .then(n.bind(null, 727))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                _t = function() {
                    return n
                        .e(9)
                        .then(n.bind(null, 570))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                kt = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 166))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                jt = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 350))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Ot = function() {
                    return n
                        .e(10)
                        .then(n.bind(null, 845))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Lt = function() {
                    return n
                        .e(11)
                        .then(n.bind(null, 750))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                $t = function() {
                    return n
                        .e(13)
                        .then(n.bind(null, 843))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                St = function() {
                    return Promise.all([n.e(0), n.e(5)])
                        .then(n.bind(null, 726))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Tt = function() {
                    return n
                        .e(6)
                        .then(n.bind(null, 749))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                zt = function() {
                    return n
                        .e(12)
                        .then(n.bind(null, 736))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                At = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 105))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Et = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 104))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Pt = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 172))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                },
                Rt = function() {
                    return Promise.resolve()
                        .then(n.bind(null, 173))
                        .then(function(t) {
                            return Mt(t.default || t);
                        });
                };

            function Mt(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var l in this.$attrs)
                            e.includes(l) ? (o[l] = this.$attrs[l]) : (r[l] = this.$attrs[l]);
                        return n(
                            t, {
                                on: this.$listeners,
                                attrs: r,
                                props: o,
                                scopedSlots: this.$scopedSlots,
                            },
                            this.$slots.default,
                        );
                    },
                };
            }
            for (var Dt in r)
                c.default.component(Dt, r[Dt]), c.default.component("Lazy" + Dt, r[Dt]);
            var Nt = n(349);
            c.default.use(Nt.a, {});
            n(154), n(14);
            var Ut = "dataLayer";
            var It = function(t, e) {
                    var n = ((t.$config && t.$config.gtm) || {}).id,
                        r = (function(t, e) {
                            return {
                                init: function() {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0] ?
                                        arguments[0] :
                                        "";
                                    !e[t] &&
                                        window._gtm_inject &&
                                        (window._gtm_inject(t), (e[t] = !0));
                                },
                                push: function(t) {
                                    window[Ut] || (window[Ut] = []), window[Ut].push(t);
                                },
                            };
                        })(0, {});
                    n && "" !== n && r.init(n), (t.$gtm = r), e("gtm", t.$gtm);
                },
                Ht = n(339),
                qt = n.n(Ht),
                Vt = function(t, e) {
                    var n = t.req,
                        r = t.res,
                        o = !0;
                    e("cookiz", qt()(n, r, o));
                },
                Bt = n(340),
                Ft = n(341),
                Zt = n.n(Ft);
            n(476);
            c.default.use(Zt.a, {
                confirmButtonColor: "#FDB913",
                cancelButtonColor: "#ff7674",
            });
            var Gt = function(t, e) {
                    Object(Bt.a)(t), e("swal", c.default.swal);
                },
                Kt = n(134),
                Qt = n.n(Kt),
                Xt = n(342);

            function Yt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function Jt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        Yt(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        Yt(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }

            function Wt(t, e) {
                var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return te(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                                return te(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ?
                                    { done: !0 } :
                                    { done: !1, value: t[i++] };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return (l = t.done), t;
                    },
                    e: function(t) {
                        (c = !0), (o = t);
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return();
                        } finally {
                            if (c) throw o;
                        }
                    },
                };
            }

            function te(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            for (
                var ee = {
                        setBaseURL: function(t) {
                            this.defaults.baseURL = t;
                        },
                        setHeader: function(t, e) {
                            var n,
                                r =
                                arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] :
                                "common",
                                o = Wt(Array.isArray(r) ? r : [r]);
                            try {
                                for (o.s(); !(n = o.n()).done;) {
                                    var l = n.value;
                                    e
                                        ?
                                        (this.defaults.headers[l][t] = e) :
                                        delete this.defaults.headers[l][t];
                                }
                            } catch (t) {
                                o.e(t);
                            } finally {
                                o.f();
                            }
                        },
                        setToken: function(t, e) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] :
                                "common",
                                r = t ? (e ? e + " " : "") + t : null;
                            this.setHeader("Authorization", r, n);
                        },
                        onRequest: function(t) {
                            this.interceptors.request.use(function(e) {
                                return t(e) || e;
                            });
                        },
                        onResponse: function(t) {
                            this.interceptors.response.use(function(e) {
                                return t(e) || e;
                            });
                        },
                        onRequestError: function(t) {
                            this.interceptors.request.use(void 0, function(e) {
                                return t(e) || Promise.reject(e);
                            });
                        },
                        onResponseError: function(t) {
                            this.interceptors.response.use(void 0, function(e) {
                                return t(e) || Promise.reject(e);
                            });
                        },
                        onError: function(t) {
                            this.onRequestError(t), this.onResponseError(t);
                        },
                        create: function(t) {
                            return oe(Object(Xt.a)(t, this.defaults));
                        },
                    },
                    ne = function() {
                        var t = re[ie];
                        ee["$" + t] = function() {
                            return this[t].apply(this, arguments).then(function(t) {
                                return t && t.data;
                            });
                        };
                    },
                    ie = 0,
                    re = [
                        "request",
                        "delete",
                        "get",
                        "head",
                        "options",
                        "post",
                        "put",
                        "patch",
                    ]; ie < re.length; ie++
            )
                ne();
            var oe = function(t) {
                    var e = Qt.a.create(t);
                    return (
                        (e.CancelToken = Qt.a.CancelToken),
                        (e.isCancel = Qt.a.isCancel),
                        (function(t) {
                            for (var e in ee) t[e] = ee[e].bind(t);
                        })(e),
                        e.onRequest(function(t) {
                            t.headers = Jt(Jt({}, e.defaults.headers.common), t.headers);
                        }),
                        ae(e),
                        se(e),
                        e
                    );
                },
                ae = function(t) {
                    t.onRequest(function(t) {
                        void 0 === t.withCredentials &&
                            ((/^https?:\/\//i.test(t.url) &&
                                    0 !== t.url.indexOf(t.baseURL)) ||
                                (t.withCredentials = !0));
                    });
                },
                se = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {},
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e;
                        },
                        r = 0;
                    t.onRequest(function(t) {
                            (t && !1 === t.progress) || r++;
                        }),
                        t.onResponse(function(t) {
                            (t && t.config && !1 === t.config.progress) ||
                            (--r <= 0 && ((r = 0), n().finish()));
                        }),
                        t.onError(function(t) {
                            (t && t.config && !1 === t.config.progress) ||
                            (r--,
                                Qt.a.isCancel(t) ?
                                r <= 0 && ((r = 0), n().finish()) :
                                (n().fail(), n().finish()));
                        });
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = (100 * t.loaded) / (t.total * r);
                            n().set(Math.min(100, progress));
                        }
                    };
                    (t.defaults.onUploadProgress = o),
                    (t.defaults.onDownloadProgress = o);
                },
                le = function(t, e) {
                    var n = (t.$config && t.$config.axios) || {},
                        r =
                        n.browserBaseURL ||
                        n.browserBaseUrl ||
                        n.baseURL ||
                        n.baseUrl ||
                        "https://api.inspiretrails.life/api/";
                    var o = oe({
                        baseURL: r,
                        headers: {
                            common: { Accept: "application/json, text/plain, */*" },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {},
                        },
                    });
                    (t.$axios = o), e("axios", o);
                },
                ce = n(54),
                ue = n(176),
                fe = n(343),
                pe = n(344);
            ce.c.add(fe.a, pe.a),
                (ce.a.autoAddCss = !1),
                c.default.component("FontAwesomeIcon", ue.a),
                c.default.component("FontAwesomeLayers", ue.b),
                c.default.component("FontAwesomeLayersText", ue.c);
            var he = n(345),
                de = n.n(he);
            c.default.use(de.a);
            var me = {
                data: function() {
                    return { errors: {} };
                },
                methods: {
                    _isError: function() {
                        var t = this,
                            e =
                            arguments.length > 0 && void 0 !== arguments[0] ?
                            arguments[0] :
                            null;
                        return e ?
                            this.errors[e] &&
                            _.isObject(this.errors[e]) &&
                            Object.keys(this.errors[e]).length :
                            !(
                                _.isObject(this.errors) && !Object.keys(this.errors).length
                            ) &&
                            Object.keys(this.errors).every(function(e) {
                                return t.errors[e] && t.errors[e].length > 0;
                            });
                    },
                    getError: function(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1] :
                            null;
                        return this.hasError(t, e) ?
                            e ?
                            this.errors[e][t] :
                            this.errors[t] :
                            "";
                    },
                    hasError: function(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1] :
                            null;
                        return e ?
                            e in this.errors && t in this.errors[e] :
                            t in this.errors;
                    },
                    setError: function(t, e) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2] ?
                            arguments[2] :
                            null;
                        n
                            ?
                            (n in this.errors || this.$set(this.errors, n, {}),
                                this.$set(this.errors[n], t, e)) :
                            this.$set(this.errors, t, e);
                    },
                    removeError: function(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1] :
                            null;
                        e && e in this.errors && t in this.errors ?
                            delete this.errors[e][t] :
                            t in this.errors && delete this.errors[t];
                    },
                    resetError: function() {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0] ?
                            arguments[0] :
                            null;
                        t && t in this.errors ? (this.errors[t] = {}) : (this.errors = {});
                    },
                },
            };
            c.default.mixin(me);
            var ge = n(235);
            c.default.use(ge.a);
            var ve = function(t) {
                    var e = t.app,
                        r = t.store;
                    e.i18n = new ge.a({
                        locale: r.state.i18n.locale,
                        fallbackLocale: "vi",
                        messages: { vi: n(500), en: n(501) },
                    });
                },
                xe = function(t) {
                    var e = t.app;
                    (function(t, e, s, n, i) {
                        (t[n] = t[n] || []),
                        t[n].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                        var r = e.getElementsByTagName(s)[0],
                            o = e.createElement(s);
                        (o.async = !0),
                        (o.src =
                            "https://www.googletagmanager.com/gtm.js?id=GTM-KMTZ2LRG"),
                        r.parentNode.insertBefore(o, r);
                    })(window, document, "script", "dataLayer"),
                    (e.head.noscript = e.head.noscript || []),
                    e.head.noscript.push({
                        hid: "gtm-noscript",
                        innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMTZ2LRG" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
                        pbody: !0,
                    });
                },
                be = function(t) {
                    t.app;
                    t.$axios.onError(function(t) {
                        return t.response && t.response.status, Promise.reject(t);
                    });
                },
                we = n(346),
                ye = n.n(we),
                Ce = n(347),
                _e = n.n(Ce),
                ke =
                (n(561),
                    function() {
                        c.default.use(ye.a, { locale: _e.a });
                    }),
                je = n(28),
                Oe = n(25),
                Le = n(26),
                $e = n(236),
                Se =
                (n(20),
                    n(281),
                    n(565),
                    function(t) {
                        return null == t;
                    }),
                Te = function(t) {
                    return !Se(t);
                },
                ze = function(a, b) {
                    return (
                        a.split("?")[0].replace(/\/+$/, "") ===
                        b.split("?")[0].replace(/\/+$/, "")
                    );
                },
                Ae = function(u) {
                    return (
                        u &&
                        u.length &&
                        /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(
                            u,
                        )
                    );
                },
                Ee = function(t, e, n) {
                    return t.matched.some(function(t) {
                        return Object.values(t.components).some(function(component) {
                            return component.options && component.options[e] === n;
                        });
                    });
                };

            function Pe() {
                var t = (
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                ).split("?")[0];
                return "/" === t.charAt(t.length - 1) && (t = t.slice(0, -1)), t;
            }

            function Re(t) {
                return "string" == typeof t ? t : JSON.stringify(t);
            }

            function Me(t) {
                if ("string" == typeof t)
                    try {
                        return JSON.parse(t);
                    } catch (t) {}
                return t;
            }

            function De(t, e) {
                if (!e || !t) return t;
                if (e in t) return t[e];
                for (
                    var n = Array.isArray(e) ? e : (e + "").split("."), r = t; n.length && r;

                )
                    r = r[n.shift()];
                return r;
            }
            var Ne = (function() {
                function t(e, n) {
                    Object(Oe.a)(this, t),
                        (this.ctx = e),
                        (this.options = n),
                        this._initState();
                }
                return (
                    Object(Le.a)(t, [{
                            key: "setUniversal",
                            value: function(t, e) {
                                return Se(e) ?
                                    this.removeUniversal(t) :
                                    (this.setState(t, e),
                                        this.setCookie(t, e),
                                        this.setLocalStorage(t, e),
                                        e);
                            },
                        },
                        {
                            key: "getUniversal",
                            value: function(t) {
                                var e = this.getState(t);
                                return (
                                    Se(e) && (e = this.getCookie(t)),
                                    Se(e) && (e = this.getLocalStorage(t)),
                                    e
                                );
                            },
                        },
                        {
                            key: "syncUniversal",
                            value: function(t, e) {
                                var n = this.getUniversal(t);
                                return (
                                    Se(n) && Te(e) && (n = e), Te(n) && this.setUniversal(t, n), n
                                );
                            },
                        },
                        {
                            key: "removeUniversal",
                            value: function(t) {
                                this.removeState(t),
                                    this.removeLocalStorage(t),
                                    this.removeCookie(t);
                            },
                        },
                        {
                            key: "_initState",
                            value: function() {
                                var t = this;
                                if (
                                    (c.default.set(this, "_state", {}),
                                        (this._useVuex = this.options.vuex && this.ctx.store),
                                        this._useVuex)
                                ) {
                                    var e = {
                                        namespaced: !0,
                                        state: function() {
                                            return t.options.initialState;
                                        },
                                        mutations: {
                                            SET: function(t, e) {
                                                c.default.set(t, e.key, e.value);
                                            },
                                        },
                                    };
                                    this.ctx.store.registerModule(
                                            this.options.vuex.namespace,
                                            e, {
                                                preserveState: Boolean(
                                                    this.ctx.store.state[this.options.vuex.namespace],
                                                ),
                                            },
                                        ),
                                        (this.state =
                                            this.ctx.store.state[this.options.vuex.namespace]);
                                } else c.default.set(this, "state", {});
                            },
                        },
                        {
                            key: "setState",
                            value: function(t, e) {
                                return (
                                    "_" === t[0] ?
                                    c.default.set(this._state, t, e) :
                                    this._useVuex ?
                                    this.ctx.store.commit(
                                        this.options.vuex.namespace + "/SET", { key: t, value: e },
                                    ) :
                                    c.default.set(this.state, t, e),
                                    e
                                );
                            },
                        },
                        {
                            key: "getState",
                            value: function(t) {
                                return "_" !== t[0] ? this.state[t] : this._state[t];
                            },
                        },
                        {
                            key: "watchState",
                            value: function(t, e) {
                                var n = this;
                                if (this._useVuex)
                                    return this.ctx.store.watch(function(e) {
                                        return De(e[n.options.vuex.namespace], t);
                                    }, e);
                            },
                        },
                        {
                            key: "removeState",
                            value: function(t) {
                                this.setState(t, void 0);
                            },
                        },
                        {
                            key: "setLocalStorage",
                            value: function(t, e) {
                                if (Se(e)) return this.removeLocalStorage(t);
                                if (
                                    "undefined" != typeof localStorage &&
                                    this.options.localStorage
                                ) {
                                    var n = this.options.localStorage.prefix + t;
                                    try {
                                        localStorage.setItem(n, Re(e));
                                    } catch (t) {
                                        if (!this.options.ignoreExceptions) throw t;
                                    }
                                    return e;
                                }
                            },
                        },
                        {
                            key: "getLocalStorage",
                            value: function(t) {
                                if (
                                    "undefined" != typeof localStorage &&
                                    this.options.localStorage
                                ) {
                                    var e = this.options.localStorage.prefix + t;
                                    return Me(localStorage.getItem(e));
                                }
                            },
                        },
                        {
                            key: "removeLocalStorage",
                            value: function(t) {
                                if (
                                    "undefined" != typeof localStorage &&
                                    this.options.localStorage
                                ) {
                                    var e = this.options.localStorage.prefix + t;
                                    localStorage.removeItem(e);
                                }
                            },
                        },
                        {
                            key: "getCookies",
                            value: function() {
                                var t = document.cookie;
                                return Object($e.parse)(t || "") || {};
                            },
                        },
                        {
                            key: "setCookie",
                            value: function(t, e) {
                                var n =
                                    arguments.length > 2 && void 0 !== arguments[2] ?
                                    arguments[2] :
                                    {};
                                if (this.options.cookie) {
                                    var r = this.options.cookie.prefix + t,
                                        o = Object.assign({}, this.options.cookie.options, n),
                                        l = Re(e);
                                    Se(e) && (o.maxAge = -1),
                                        "number" == typeof o.expires &&
                                        (o.expires = new Date(
                                            1 * new Date() + 864e5 * o.expires,
                                        ));
                                    var c = Object($e.serialize)(r, l, o);
                                    return (document.cookie = c), e;
                                }
                            },
                        },
                        {
                            key: "getCookie",
                            value: function(t) {
                                if (this.options.cookie) {
                                    var e = this.options.cookie.prefix + t,
                                        n = this.getCookies();
                                    return Me(n[e] ? decodeURIComponent(n[e]) : void 0);
                                }
                            },
                        },
                        {
                            key: "removeCookie",
                            value: function(t, e) {
                                this.setCookie(t, void 0, e);
                            },
                        },
                    ]),
                    t
                );
            })();

            function Ue(t, e) {
                var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Ie(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                                return Ie(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ?
                                    { done: !0 } :
                                    { done: !1, value: t[i++] };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return (l = t.done), t;
                    },
                    e: function(t) {
                        (c = !0), (o = t);
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return();
                        } finally {
                            if (c) throw o;
                        }
                    },
                };
            }

            function Ie(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            var He = (function() {
                function t(e, n) {
                    Object(Oe.a)(this, t),
                        (this.ctx = e),
                        (this.options = n),
                        (this.strategies = {}),
                        (this._errorListeners = []),
                        (this._redirectListeners = []),
                        (n.initialState = { user: null, loggedIn: !1 });
                    var r = new Ne(e, n);
                    (this.$storage = r), (this.$state = r.state);
                }
                var e;
                return (
                    Object(Le.a)(t, [{
                            key: "init",
                            value:
                                ((e = Object(o.a)(
                                        regeneratorRuntime.mark(function t() {
                                            var e = this;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (
                                                                    (this.options.resetOnError &&
                                                                        this.onError(function() {
                                                                            var t;
                                                                            ("function" !=
                                                                                typeof e.options.resetOnError ||
                                                                                (t = e.options).resetOnError.apply(
                                                                                    t,
                                                                                    arguments,
                                                                                )) &&
                                                                            e.reset();
                                                                        }),
                                                                        this.$storage.syncUniversal(
                                                                            "strategy",
                                                                            this.options.defaultStrategy,
                                                                        ),
                                                                        this.strategy)
                                                                ) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                if (
                                                                    (this.$storage.setUniversal(
                                                                            "strategy",
                                                                            this.options.defaultStrategy,
                                                                        ),
                                                                        this.strategy)
                                                                ) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return t.abrupt("return", Promise.resolve());
                                                            case 6:
                                                                return (t.prev = 6), (t.next = 9), this.mounted();
                                                            case 9:
                                                                t.next = 14;
                                                                break;
                                                            case 11:
                                                                (t.prev = 11),
                                                                (t.t0 = t.catch(6)),
                                                                this.callOnError(t.t0);
                                                            case 14:
                                                                return (
                                                                    (t.prev = 14),
                                                                    this.options.watchLoggedIn &&
                                                                    this.$storage.watchState(
                                                                        "loggedIn",
                                                                        function(t) {
                                                                            Ee(e.ctx.route, "auth", !1) ||
                                                                                e.redirect(t ? "home" : "logout");
                                                                        },
                                                                    ),
                                                                    t.finish(14)
                                                                );
                                                            case 17:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this, [
                                                    [6, 11, 14, 17]
                                                ],
                                            );
                                        }),
                                    )),
                                    function() {
                                        return e.apply(this, arguments);
                                    }),
                        },
                        {
                            key: "state",
                            get: function() {
                                return (
                                    this._state_warn_shown ||
                                    ((this._state_warn_shown = !0),
                                        console.warn(
                                            "[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn",
                                        )),
                                    this.$state
                                );
                            },
                        },
                        {
                            key: "getState",
                            value: function(t) {
                                return (
                                    this._get_state_warn_shown ||
                                    ((this._get_state_warn_shown = !0),
                                        console.warn(
                                            "[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn",
                                        )),
                                    this.$storage.getState(t)
                                );
                            },
                        },
                        {
                            key: "strategy",
                            get: function() {
                                return this.strategies[this.$state.strategy];
                            },
                        },
                        {
                            key: "registerStrategy",
                            value: function(t, e) {
                                this.strategies[t] = e;
                            },
                        },
                        {
                            key: "setStrategy",
                            value: function(t) {
                                return t === this.$storage.getUniversal("strategy") ?
                                    Promise.resolve() :
                                    (this.$storage.setUniversal("strategy", t), this.mounted());
                            },
                        },
                        {
                            key: "mounted",
                            value: function() {
                                var t,
                                    e = this;
                                return this.strategy.mounted ?
                                    Promise.resolve(
                                        (t = this.strategy).mounted.apply(t, arguments),
                                    ).catch(function(t) {
                                        return (
                                            e.callOnError(t, { method: "mounted" }),
                                            Promise.reject(t)
                                        );
                                    }) :
                                    this.fetchUserOnce();
                            },
                        },
                        {
                            key: "loginWith",
                            value: function(t) {
                                for (
                                    var e = this,
                                        n = arguments.length,
                                        r = new Array(n > 1 ? n - 1 : 0),
                                        o = 1; o < n; o++
                                )
                                    r[o - 1] = arguments[o];
                                return this.setStrategy(t).then(function() {
                                    return e.login.apply(e, r);
                                });
                            },
                        },
                        {
                            key: "login",
                            value: function() {
                                var t,
                                    e = this;
                                return this.strategy.login ?
                                    this.wrapLogin(
                                        (t = this.strategy).login.apply(t, arguments),
                                    ).catch(function(t) {
                                        return (
                                            e.callOnError(t, { method: "login" }), Promise.reject(t)
                                        );
                                    }) :
                                    Promise.resolve();
                            },
                        },
                        {
                            key: "fetchUser",
                            value: function() {
                                var t,
                                    e = this;
                                return this.strategy.fetchUser ?
                                    Promise.resolve(
                                        (t = this.strategy).fetchUser.apply(t, arguments),
                                    ).catch(function(t) {
                                        return (
                                            e.callOnError(t, { method: "fetchUser" }),
                                            Promise.reject(t)
                                        );
                                    }) :
                                    Promise.resolve();
                            },
                        },
                        {
                            key: "logout",
                            value: function() {
                                var t,
                                    e = this;
                                return this.strategy.logout ?
                                    Promise.resolve(
                                        (t = this.strategy).logout.apply(t, arguments),
                                    ).catch(function(t) {
                                        return (
                                            e.callOnError(t, { method: "logout" }),
                                            Promise.reject(t)
                                        );
                                    }) :
                                    (this.reset(), Promise.resolve());
                            },
                        },
                        {
                            key: "setUserToken",
                            value: function(t) {
                                var e = this;
                                return this.strategy.setUserToken ?
                                    Promise.resolve(this.strategy.setUserToken(t)).catch(
                                        function(t) {
                                            return (
                                                e.callOnError(t, { method: "setUserToken" }),
                                                Promise.reject(t)
                                            );
                                        },
                                    ) :
                                    (this.setToken(this.strategy.name, t), Promise.resolve());
                            },
                        },
                        {
                            key: "reset",
                            value: function() {
                                var t,
                                    e = this;
                                return this.strategy.reset ?
                                    Promise.resolve(
                                        (t = this.strategy).reset.apply(t, arguments),
                                    ).catch(function(t) {
                                        return (
                                            e.callOnError(t, { method: "reset" }), Promise.reject(t)
                                        );
                                    }) :
                                    (this.setUser(!1),
                                        this.setToken(this.$state.strategy, !1),
                                        this.setRefreshToken(this.$state.strategy, !1),
                                        Promise.resolve());
                            },
                        },
                        {
                            key: "getToken",
                            value: function(t) {
                                var e = this.options.token.prefix + t;
                                return this.$storage.getUniversal(e);
                            },
                        },
                        {
                            key: "setToken",
                            value: function(t, e) {
                                var n = this.options.token.prefix + t;
                                return this.$storage.setUniversal(n, e);
                            },
                        },
                        {
                            key: "syncToken",
                            value: function(t) {
                                var e = this.options.token.prefix + t;
                                return this.$storage.syncUniversal(e);
                            },
                        },
                        {
                            key: "getRefreshToken",
                            value: function(t) {
                                var e = this.options.refresh_token.prefix + t;
                                return this.$storage.getUniversal(e);
                            },
                        },
                        {
                            key: "setRefreshToken",
                            value: function(t, e) {
                                var n = this.options.refresh_token.prefix + t;
                                return this.$storage.setUniversal(n, e);
                            },
                        },
                        {
                            key: "syncRefreshToken",
                            value: function(t) {
                                var e = this.options.refresh_token.prefix + t;
                                return this.$storage.syncUniversal(e);
                            },
                        },
                        {
                            key: "user",
                            get: function() {
                                return this.$state.user;
                            },
                        },
                        {
                            key: "loggedIn",
                            get: function() {
                                return this.$state.loggedIn;
                            },
                        },
                        {
                            key: "fetchUserOnce",
                            value: function() {
                                return this.$state.user ?
                                    Promise.resolve() :
                                    this.fetchUser.apply(this, arguments);
                            },
                        },
                        {
                            key: "setUser",
                            value: function(t) {
                                this.$storage.setState("user", t),
                                    this.$storage.setState("loggedIn", Boolean(t));
                            },
                        },
                        {
                            key: "busy",
                            get: function() {
                                return this.$storage.getState("busy");
                            },
                        },
                        {
                            key: "request",
                            value: function(t, e, n) {
                                var r = this,
                                    o =
                                    "object" === Object(je.a)(e) ? Object.assign({}, e, t) : t;
                                if (this.ctx.app.$axios)
                                    return this.ctx.app.$axios
                                        .request(o)
                                        .then(function(t) {
                                            var e = o.propertyName ?
                                                De(t.data, o.propertyName) :
                                                t.data;
                                            return n ? { response: t, result: e } : e;
                                        })
                                        .catch(function(t) {
                                            return (
                                                r.callOnError(t, { method: "request" }),
                                                Promise.reject(t)
                                            );
                                        });
                                console.error(
                                    "[AUTH] add the @nuxtjs/axios module to nuxt.config file",
                                );
                            },
                        },
                        {
                            key: "requestWith",
                            value: function(t, e, n, r) {
                                var o = this.getToken(t),
                                    l = Object.assign({}, n, e),
                                    c = this.strategies[t].options.tokenName || "Authorization";
                                return (
                                    l.headers || (l.headers = {}), !l.headers[c] && Te(o) && o && (l.headers[c] = o),
                                    this.request(l, !1, r)
                                );
                            },
                        },
                        {
                            key: "wrapLogin",
                            value: function(t) {
                                var e = this;
                                return (
                                    this.$storage.setState("busy", !0),
                                    (this.error = null),
                                    Promise.resolve(t)
                                    .then(function(t) {
                                        return e.$storage.setState("busy", !1), t;
                                    })
                                    .catch(function(t) {
                                        return e.$storage.setState("busy", !1), Promise.reject(t);
                                    })
                                );
                            },
                        },
                        {
                            key: "onError",
                            value: function(t) {
                                this._errorListeners.push(t);
                            },
                        },
                        {
                            key: "callOnError",
                            value: function(t) {
                                var e =
                                    arguments.length > 1 && void 0 !== arguments[1] ?
                                    arguments[1] :
                                    {};
                                this.error = t;
                                var n,
                                    r = Ue(this._errorListeners);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        (0, n.value)(t, e);
                                    }
                                } catch (t) {
                                    r.e(t);
                                } finally {
                                    r.f();
                                }
                            },
                        },
                        {
                            key: "redirect",
                            value: function(t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                if (this.options.redirect) {
                                    var n = this.options.fullPathRedirect ?
                                        this.ctx.route.fullPath :
                                        this.ctx.route.path,
                                        r = this.options.redirect[t];
                                    if (r) {
                                        if (
                                            this.options.rewriteRedirects &&
                                            ("login" === t &&
                                                Ae(n) &&
                                                !ze(r, n) &&
                                                this.$storage.setUniversal("redirect", n),
                                                "home" === t)
                                        ) {
                                            var o = this.$storage.getUniversal("redirect");
                                            this.$storage.setUniversal("redirect", null),
                                                Ae(o) && (r = o);
                                        }
                                        (r = this.callOnRedirect(r, n) || r),
                                        ze(r, n) ||
                                            (e ?
                                                window.location.replace(r) :
                                                this.ctx.redirect(r, this.ctx.query));
                                    }
                                }
                            },
                        },
                        {
                            key: "onRedirect",
                            value: function(t) {
                                this._redirectListeners.push(t);
                            },
                        },
                        {
                            key: "callOnRedirect",
                            value: function(t, e) {
                                var n,
                                    r = Ue(this._redirectListeners);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        t = (0, n.value)(t, e) || t;
                                    }
                                } catch (t) {
                                    r.e(t);
                                } finally {
                                    r.f();
                                }
                                return t;
                            },
                        },
                        {
                            key: "hasScope",
                            value: function(t) {
                                var e =
                                    this.$state.user &&
                                    De(this.$state.user, this.options.scopeKey);
                                return (!!e && (Array.isArray(e) ? e.includes(t) : Boolean(De(e, t))));
                            },
                        },
                    ]),
                    t
                );
            })();
            n(131).a.auth = function(t) {
                if (!Ee(t.route, "auth", !1)) {
                    var e = (function(t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return [].concat.apply(
                            [],
                            t.matched.map(function(t, n) {
                                return Object.keys(t.components).map(function(r) {
                                    return e && e.push(n), t.components[r];
                                });
                            }),
                        );
                    })(t.route, []);
                    if (e.length) {
                        var n = t.$auth.options.redirect,
                            r = n.login,
                            o = n.callback,
                            l = Ee(t.route, "auth", "guest"),
                            c = function(e) {
                                return Pe(t.route.path) === Pe(e);
                            };
                        t.$auth.$state.loggedIn ?
                            (!r || c(r) || l) && t.$auth.redirect("home") :
                            l || (o && c(o)) || t.$auth.redirect("login");
                    }
                }
            };
            var qe = (function() {
                    function t(e, n) {
                        Object(Oe.a)(this, t),
                            (this.$auth = e),
                            (this.name = n._name),
                            (this.options = Object.assign({}, Ve, n));
                    }
                    var e, n, r, l, c;
                    return (
                        Object(Le.a)(t, [{
                                key: "_setToken",
                                value: function(t) {
                                    this.options.globalToken &&
                                        this.$auth.ctx.app.$axios.setHeader(
                                            this.options.tokenName,
                                            t,
                                        );
                                },
                            },
                            {
                                key: "_clearToken",
                                value: function() {
                                    this.options.globalToken &&
                                        this.$auth.ctx.app.$axios.setHeader(
                                            this.options.tokenName, !1,
                                        );
                                },
                            },
                            {
                                key: "mounted",
                                value: function() {
                                    if (this.options.tokenRequired) {
                                        var t = this.$auth.syncToken(this.name);
                                        this._setToken(t);
                                    }
                                    return this.$auth.fetchUserOnce();
                                },
                            },
                            {
                                key: "login",
                                value:
                                    ((c = Object(o.a)(
                                            regeneratorRuntime.mark(function t(e) {
                                                var n, r, o, l;
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    if (this.options.endpoints.login) {
                                                                        t.next = 2;
                                                                        break;
                                                                    }
                                                                    return t.abrupt("return");
                                                                case 2:
                                                                    return (t.next = 4), this.$auth.reset();
                                                                case 4:
                                                                    return (
                                                                        (t.next = 6),
                                                                        this.$auth.request(
                                                                            e,
                                                                            this.options.endpoints.login, !0,
                                                                        )
                                                                    );
                                                                case 6:
                                                                    if (
                                                                        ((n = t.sent),
                                                                            (r = n.response),
                                                                            (o = n.result),
                                                                            this.options.tokenRequired &&
                                                                            ((l = this.options.tokenType ?
                                                                                    this.options.tokenType + " " + o :
                                                                                    o),
                                                                                this.$auth.setToken(this.name, l),
                                                                                this._setToken(l)), !this.options.autoFetchUser)
                                                                    ) {
                                                                        t.next = 13;
                                                                        break;
                                                                    }
                                                                    return (t.next = 13), this.fetchUser();
                                                                case 13:
                                                                    return t.abrupt("return", r);
                                                                case 14:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                );
                                            }),
                                        )),
                                        function(t) {
                                            return c.apply(this, arguments);
                                        }),
                            },
                            {
                                key: "setUserToken",
                                value:
                                    ((l = Object(o.a)(
                                            regeneratorRuntime.mark(function t(e) {
                                                var n;
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        (n = this.options.tokenType ?
                                                                            this.options.tokenType + " " + e :
                                                                            e),
                                                                        this.$auth.setToken(this.name, n),
                                                                        this._setToken(n),
                                                                        t.abrupt("return", this.fetchUser())
                                                                    );
                                                                case 4:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                );
                                            }),
                                        )),
                                        function(t) {
                                            return l.apply(this, arguments);
                                        }),
                            },
                            {
                                key: "fetchUser",
                                value:
                                    ((r = Object(o.a)(
                                            regeneratorRuntime.mark(function t(e) {
                                                var n;
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    if (!this.options.tokenRequired ||
                                                                        this.$auth.getToken(this.name)
                                                                    ) {
                                                                        t.next = 2;
                                                                        break;
                                                                    }
                                                                    return t.abrupt("return");
                                                                case 2:
                                                                    if (this.options.endpoints.user) {
                                                                        t.next = 5;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        this.$auth.setUser({}), t.abrupt("return")
                                                                    );
                                                                case 5:
                                                                    return (
                                                                        (t.next = 7),
                                                                        this.$auth.requestWith(
                                                                            this.name,
                                                                            e,
                                                                            this.options.endpoints.user,
                                                                        )
                                                                    );
                                                                case 7:
                                                                    (n = t.sent), this.$auth.setUser(n);
                                                                case 9:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                );
                                            }),
                                        )),
                                        function(t) {
                                            return r.apply(this, arguments);
                                        }),
                            },
                            {
                                key: "logout",
                                value:
                                    ((n = Object(o.a)(
                                            regeneratorRuntime.mark(function t(e) {
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    if (!this.options.endpoints.logout) {
                                                                        t.next = 3;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        (t.next = 3),
                                                                        this.$auth
                                                                        .requestWith(
                                                                            this.name,
                                                                            e,
                                                                            this.options.endpoints.logout,
                                                                        )
                                                                        .catch(function() {})
                                                                    );
                                                                case 3:
                                                                    return t.abrupt("return", this.$auth.reset());
                                                                case 4:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                );
                                            }),
                                        )),
                                        function(t) {
                                            return n.apply(this, arguments);
                                        }),
                            },
                            {
                                key: "reset",
                                value:
                                    ((e = Object(o.a)(
                                            regeneratorRuntime.mark(function t() {
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        this.options.tokenRequired &&
                                                                        this._clearToken(),
                                                                        this.$auth.setUser(!1),
                                                                        this.$auth.setToken(this.name, !1),
                                                                        this.$auth.setRefreshToken(this.name, !1),
                                                                        t.abrupt("return", Promise.resolve())
                                                                    );
                                                                case 5:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                );
                                            }),
                                        )),
                                        function() {
                                            return e.apply(this, arguments);
                                        }),
                            },
                        ]),
                        t
                    );
                })(),
                Ve = {
                    tokenRequired: !0,
                    tokenType: "Bearer",
                    globalToken: !0,
                    tokenName: "Authorization",
                    autoFetchUser: !0,
                },
                Be = function(t, e) {
                    var n = new He(t, {
                        resetOnError: !1,
                        scopeKey: "scope",
                        rewriteRedirects: !0,
                        fullPathRedirect: !1,
                        watchLoggedIn: !0,
                        redirect: {
                            login: "/login",
                            logout: "/",
                            home: "/",
                            callback: "/login",
                        },
                        vuex: { namespace: "auth" },
                        cookie: { prefix: "auth.", options: { path: "/", expires: 365 } },
                        localStorage: !0,
                        token: { prefix: "_token." },
                        refresh_token: { prefix: "_refresh_token." },
                        defaultStrategy: "local",
                    });
                    return (
                        n.registerStrategy(
                            "local",
                            new qe(n, {
                                endpoints: {
                                    login: {
                                        url: "/auth/login",
                                        method: "post",
                                        propertyName: "authorisation.token",
                                    },
                                    logout: !0,
                                    user: {
                                        url: "/auth/user",
                                        method: "get",
                                        propertyName: "data",
                                    },
                                    refresh: { url: "/auth/refresh", method: "post" },
                                },
                                schema: "refresh",
                                user: { property: "data", autoFetch: !1 },
                                _name: "local",
                            }),
                        ),
                        e("auth", n),
                        (t.$auth = n),
                        n.init().catch(function(t) {
                            console.error("[ERROR] [AUTH]", t);
                        })
                    );
                };

            function Fe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function Ze(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        Fe(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        Fe(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }
            c.default.component(m.a.name, m.a),
                c.default.component(
                    x.a.name,
                    Ze(
                        Ze({}, x.a), {}, {
                            render: function(t, e) {
                                return (
                                    x.a._warned ||
                                    ((x.a._warned = !0),
                                        console.warn(
                                            "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead",
                                        )),
                                    x.a.render(t, e)
                                );
                            },
                        },
                    ),
                ),
                c.default.component(S.name, S),
                c.default.component("NChild", S),
                c.default.component(M.name, M),
                Object.defineProperty(c.default.prototype, "$nuxt", {
                    get: function() {
                        var t = this.$root.$options.$nuxt;
                        return t || "undefined" == typeof window ? t : window.$nuxt;
                    },
                    configurable: !0,
                }),
                c.default.use(h.a, {
                    keyName: "head",
                    attribute: "data-n-head",
                    ssrAttribute: "data-n-head-ssr",
                    tagIDKeyName: "hid",
                });
            var Ge = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to",
                },
                Ke = f.a.Store.prototype.registerModule;

            function Qe(path, t) {
                var e =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Array.isArray(path) ?
                    !!path.reduce(function(t, path) {
                        return t && t[path];
                    }, this.state) :
                    path in this.state;
                return Ke.call(this, path, t, Ze({ preserveState: n }, e));
            }

            function Xe(t) {
                return Ye.apply(this, arguments);
            }

            function Ye() {
                return (
                    (Ye = Object(o.a)(
                        regeneratorRuntime.mark(function t(e) {
                            var n,
                                r,
                                l,
                                f,
                                h,
                                d,
                                path,
                                m,
                                v = arguments;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                (m = function(t, e) {
                                                    if (!t)
                                                        throw new Error(
                                                            "inject(key, value) has no key provided",
                                                        );
                                                    if (void 0 === e)
                                                        throw new Error(
                                                            "inject('".concat(
                                                                t,
                                                                "', value) has no value provided",
                                                            ),
                                                        );
                                                    (f[(t = "$" + t)] = e),
                                                    f.context[t] || (f.context[t] = e),
                                                        (l[t] = f[t]);
                                                    var n = "__nuxt_" + t + "_installed__";
                                                    c.default[n] ||
                                                        ((c.default[n] = !0),
                                                            c.default.use(function() {
                                                                Object.prototype.hasOwnProperty.call(
                                                                        c.default.prototype,
                                                                        t,
                                                                    ) ||
                                                                    Object.defineProperty(c.default.prototype, t, {
                                                                        get: function() {
                                                                            return this.$root.$options[t];
                                                                        },
                                                                    });
                                                            }));
                                                }),
                                                (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                                                (t.next = 4),
                                                $(0, n)
                                            );
                                        case 4:
                                            return (
                                                (r = t.sent),
                                                ((l = gt(e)).$router = r),
                                                (l.registerModule = Qe),
                                                (f = Ze({
                                                        head: {
                                                            title: "Inspire Trails - InspireTrails.life",
                                                            htmlAttrs: { lang: "en" },
                                                            meta: [
                                                                { charset: "utf-8" },
                                                                {
                                                                    name: "viewport",
                                                                    content: "width=device-width, initial-scale=1",
                                                                },
                                                                {
                                                                    hid: "description",
                                                                    name: "description",
                                                                    content: "",
                                                                },
                                                                {
                                                                    name: "format-detection",
                                                                    content: "telephone=no",
                                                                },
                                                            ],
                                                            link: [{
                                                                    rel: "icon",
                                                                    type: "image/x-icon",
                                                                    href: "/favicon.png",
                                                                },
                                                                {
                                                                    rel: "stylesheet",
                                                                    href: "https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;400;500;600;900&display=swap",
                                                                },
                                                            ],
                                                            script: [{
                                                                    hid: "gtm-script",
                                                                    innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-KMTZ2LRG');",
                                                                    type: "text/javascript",
                                                                    charset: "utf-8",
                                                                },
                                                                {
                                                                    hid: "gtm-script",
                                                                    innerHTML: "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}",
                                                                },
                                                            ],
                                                            __dangerouslyDisableSanitizers: ["script"],
                                                            style: [],
                                                            noscript: [{
                                                                hid: "gtm-noscript",
                                                                pbody: !0,
                                                                innerHTML: "",
                                                            }, ],
                                                            __dangerouslyDisableSanitizersByTagID: {
                                                                "gtm-script": ["innerHTML"],
                                                                "gtm-noscript": ["innerHTML"],
                                                            },
                                                        },
                                                        store: l,
                                                        router: r,
                                                        nuxt: {
                                                            defaultTransition: Ge,
                                                            transitions: [Ge],
                                                            setTransitions: function(t) {
                                                                return (
                                                                    Array.isArray(t) || (t = [t]),
                                                                    (t = t.map(function(t) {
                                                                        return (t = t ?
                                                                            "string" == typeof t ?
                                                                            Object.assign({}, Ge, { name: t }) :
                                                                            Object.assign({}, Ge, t) :
                                                                            Ge);
                                                                    })),
                                                                    (this.$options.nuxt.transitions = t),
                                                                    t
                                                                );
                                                            },
                                                            err: null,
                                                            dateErr: null,
                                                            error: function(t) {
                                                                (t = t || null),
                                                                (f.context._errored = Boolean(t)),
                                                                (t = t ? Object(C.p)(t) : null);
                                                                var n = f.nuxt;
                                                                return (
                                                                    this && (n = this.nuxt || this.$options.nuxt),
                                                                    (n.dateErr = Date.now()),
                                                                    (n.err = t),
                                                                    e && (e.nuxt.error = t),
                                                                    t
                                                                );
                                                            },
                                                        },
                                                    },
                                                    pt,
                                                )),
                                                (l.app = f),
                                                (h = e ?
                                                    e.next :
                                                    function(t) {
                                                        return f.router.push(t);
                                                    }),
                                                e ?
                                                (d = r.resolve(e.url).route) :
                                                ((path = Object(C.f)(
                                                        r.options.base,
                                                        r.options.mode,
                                                    )),
                                                    (d = r.resolve(path).route)),
                                                (t.next = 14),
                                                Object(C.t)(f, {
                                                    store: l,
                                                    route: d,
                                                    next: h,
                                                    error: f.nuxt.error.bind(f),
                                                    payload: e ? e.payload : void 0,
                                                    req: e ? e.req : void 0,
                                                    res: e ? e.res : void 0,
                                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                                    ssrContext: e,
                                                })
                                            );
                                        case 14:
                                            m("config", n),
                                                window.__NUXT__ &&
                                                window.__NUXT__.state &&
                                                l.replaceState(window.__NUXT__.state),
                                                (t.next = 20);
                                            break;
                                        case 20:
                                            t.next = 23;
                                            break;
                                        case 23:
                                            if ("function" != typeof It) {
                                                t.next = 26;
                                                break;
                                            }
                                            return (t.next = 26), It(f.context, m);
                                        case 26:
                                            if ("function" != typeof Vt) {
                                                t.next = 29;
                                                break;
                                            }
                                            return (t.next = 29), Vt(f.context, m);
                                        case 29:
                                            if ("function" != typeof Gt) {
                                                t.next = 32;
                                                break;
                                            }
                                            return (t.next = 32), Gt(f.context, m);
                                        case 32:
                                            if ("function" != typeof le) {
                                                t.next = 35;
                                                break;
                                            }
                                            return (t.next = 35), le(f.context, m);
                                        case 35:
                                            t.next = 38;
                                            break;
                                        case 38:
                                            t.next = 41;
                                            break;
                                        case 41:
                                            t.next = 44;
                                            break;
                                        case 44:
                                            if ("function" != typeof ve) {
                                                t.next = 47;
                                                break;
                                            }
                                            return (t.next = 47), ve(f.context, m);
                                        case 47:
                                            if ("function" != typeof xe) {
                                                t.next = 50;
                                                break;
                                            }
                                            return (t.next = 50), xe(f.context, m);
                                        case 50:
                                            if ("function" != typeof be) {
                                                t.next = 53;
                                                break;
                                            }
                                            return (t.next = 53), be(f.context, m);
                                        case 53:
                                            if ("function" != typeof ke) {
                                                t.next = 56;
                                                break;
                                            }
                                            return (t.next = 56), ke(f.context, m);
                                        case 56:
                                            if ("function" != typeof Be) {
                                                t.next = 59;
                                                break;
                                            }
                                            return (t.next = 59), Be(f.context, m);
                                        case 59:
                                            return (
                                                (t.next = 62),
                                                new Promise(function(t, e) {
                                                    if (!r.resolve(f.context.route.fullPath).route.matched
                                                        .length
                                                    )
                                                        return t();
                                                    r.replace(f.context.route.fullPath, t, function(n) {
                                                        if (!n._isRouter) return e(n);
                                                        if (2 !== n.type) return t();
                                                        var l = r.afterEach(
                                                            (function() {
                                                                var e = Object(o.a)(
                                                                    regeneratorRuntime.mark(function e(n, r) {
                                                                        return regeneratorRuntime.wrap(function(
                                                                            e,
                                                                        ) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        return (e.next = 3), Object(C.j)(n);
                                                                                    case 3:
                                                                                        (f.context.route = e.sent),
                                                                                        (f.context.params =
                                                                                            n.params || {}),
                                                                                        (f.context.query = n.query || {}),
                                                                                        l(),
                                                                                            t();
                                                                                    case 8:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    }),
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })(),
                                                        );
                                                    });
                                                })
                                            );
                                        case 62:
                                            return t.abrupt("return", {
                                                store: l,
                                                app: f,
                                                router: r,
                                            });
                                        case 63:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        }),
                    )),
                    Ye.apply(this, arguments)
                );
            }
        },
        9: function(t, e, n) {
            "use strict";
            n.d(e, "k", function() {
                    return w;
                }),
                n.d(e, "m", function() {
                    return y;
                }),
                n.d(e, "l", function() {
                    return C;
                }),
                n.d(e, "e", function() {
                    return _;
                }),
                n.d(e, "b", function() {
                    return k;
                }),
                n.d(e, "s", function() {
                    return j;
                }),
                n.d(e, "g", function() {
                    return O;
                }),
                n.d(e, "h", function() {
                    return L;
                }),
                n.d(e, "d", function() {
                    return $;
                }),
                n.d(e, "r", function() {
                    return S;
                }),
                n.d(e, "j", function() {
                    return T;
                }),
                n.d(e, "t", function() {
                    return A;
                }),
                n.d(e, "o", function() {
                    return P;
                }),
                n.d(e, "q", function() {
                    return R;
                }),
                n.d(e, "f", function() {
                    return M;
                }),
                n.d(e, "c", function() {
                    return D;
                }),
                n.d(e, "i", function() {
                    return N;
                }),
                n.d(e, "p", function() {
                    return U;
                }),
                n.d(e, "a", function() {
                    return G;
                }),
                n.d(e, "v", function() {
                    return K;
                }),
                n.d(e, "n", function() {
                    return Q;
                }),
                n.d(e, "u", function() {
                    return X;
                });
            n(72), n(4), n(64), n(80), n(6), n(3), n(7);
            var r = n(28),
                o = n(10),
                l = n(0),
                c = n(36),
                f =
                (n(41),
                    n(1),
                    n(2),
                    n(281),
                    n(24),
                    n(14),
                    n(16),
                    n(5),
                    n(49),
                    n(55),
                    n(19),
                    n(12),
                    n(18),
                    n(201),
                    n(178),
                    n(96),
                    n(32),
                    n(20),
                    n(403),
                    n(68),
                    n(108),
                    n(8)),
                h = n(66);

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        d(Object(n), !0).forEach(function(e) {
                            Object(l.a)(t, e, n[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                        d(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e),
                            );
                        });
                }
                return t;
            }

            function v(t, e) {
                var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return x(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                                return x(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ?
                                    { done: !0 } :
                                    { done: !1, value: t[i++] };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return (l = t.done), t;
                    },
                    e: function(t) {
                        (c = !0), (o = t);
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return();
                        } finally {
                            if (c) throw o;
                        }
                    },
                };
            }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }

            function w(t) {
                f.default.config.errorHandler && f.default.config.errorHandler(t);
            }

            function y(t) {
                return t.then(function(t) {
                    return t.default || t;
                });
            }

            function C(t) {
                return (
                    t.$options &&
                    "function" == typeof t.$options.fetch &&
                    !t.$options.fetch.length
                );
            }

            function _(t) {
                var e,
                    n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = v(t.$children || []);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = e.value;
                        o.$fetch ? n.push(o) : o.$children && _(o, n);
                    }
                } catch (t) {
                    r.e(t);
                } finally {
                    r.f();
                }
                return n;
            }

            function k(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n =
                        t.options._originDataFn ||
                        t.options.data ||
                        function() {
                            return {};
                        };
                    (t.options._originDataFn = n),
                    (t.options.data = function() {
                        var data = n.call(this, this);
                        return (
                            this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                            m(m({}, data), e)
                        );
                    }),
                    (t.options.__hasNuxtData = !0),
                    t._Ctor &&
                        t._Ctor.options &&
                        (t._Ctor.options.data = t.options.data);
                }
            }

            function j(t) {
                return (
                    (t.options && t._Ctor === t) ||
                    (t.options ?
                        ((t._Ctor = t), (t.extendOptions = t.options)) :
                        ((t = f.default.extend(t))._Ctor = t), !t.options.name &&
                        t.options.__file &&
                        (t.options.name = t.options.__file)),
                    t
                );
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n =
                    arguments.length > 2 && void 0 !== arguments[2] ?
                    arguments[2] :
                    "components";
                return Array.prototype.concat.apply(
                    [],
                    t.matched.map(function(t, r) {
                        return Object.keys(t[n]).map(function(o) {
                            return e && e.push(r), t[n][o];
                        });
                    }),
                );
            }

            function L(t) {
                return O(
                    t,
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    "instances",
                );
            }

            function $(t, e) {
                return Array.prototype.concat.apply(
                    [],
                    t.matched.map(function(t, n) {
                        return Object.keys(t.components).reduce(function(r, o) {
                            return (
                                t.components[o] ?
                                r.push(e(t.components[o], t.instances[o], t, o, n)) :
                                delete t.components[o],
                                r
                            );
                        }, []);
                    }),
                );
            }

            function S(t, e) {
                return Promise.all(
                    $(
                        t,
                        (function() {
                            var t = Object(o.a)(
                                regeneratorRuntime.mark(function t(n, r, o, l) {
                                    var c, f;
                                    return regeneratorRuntime.wrap(
                                        function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if ("function" != typeof n || n.options) {
                                                            t.next = 11;
                                                            break;
                                                        }
                                                        return (t.prev = 1), (t.next = 4), n();
                                                    case 4:
                                                        (n = t.sent), (t.next = 11);
                                                        break;
                                                    case 7:
                                                        throw (
                                                            ((t.prev = 7),
                                                                (t.t0 = t.catch(1)),
                                                                t.t0 &&
                                                                "ChunkLoadError" === t.t0.name &&
                                                                "undefined" != typeof window &&
                                                                window.sessionStorage &&
                                                                ((c = Date.now()),
                                                                    (!(f = parseInt(
                                                                            window.sessionStorage.getItem("nuxt-reload"),
                                                                        )) ||
                                                                        f + 6e4 < c) &&
                                                                    (window.sessionStorage.setItem(
                                                                            "nuxt-reload",
                                                                            c,
                                                                        ),
                                                                        window.location.reload(!0))),
                                                                t.t0)
                                                        );
                                                    case 11:
                                                        return (
                                                            (o.components[l] = n = j(n)),
                                                            t.abrupt(
                                                                "return",
                                                                "function" == typeof e ? e(n, r, o, l) : n,
                                                            )
                                                        );
                                                    case 13:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null, [
                                            [1, 7]
                                        ],
                                    );
                                }),
                            );
                            return function(e, n, r, o) {
                                return t.apply(this, arguments);
                            };
                        })(),
                    ),
                );
            }

            function T(t) {
                return z.apply(this, arguments);
            }

            function z() {
                return (z = Object(o.a)(
                    regeneratorRuntime.mark(function t(e) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        if (e) {
                                            t.next = 2;
                                            break;
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return (t.next = 4), S(e);
                                    case 4:
                                        return t.abrupt(
                                            "return",
                                            m(
                                                m({}, e), {}, {
                                                    meta: O(e).map(function(t, n) {
                                                        return m(
                                                            m({}, t.options.meta),
                                                            (e.matched[n] || {}).meta,
                                                        );
                                                    }),
                                                },
                                            ),
                                        );
                                    case 5:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    }),
                )).apply(this, arguments);
            }

            function A(t, e) {
                return E.apply(this, arguments);
            }

            function E() {
                return (E = Object(o.a)(
                    regeneratorRuntime.mark(function t(e, n) {
                        var o, l, f, d;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            e.context ||
                                            ((e.context = {
                                                    isStatic: !1,
                                                    isDev: !1,
                                                    isHMR: !1,
                                                    app: e,
                                                    store: e.store,
                                                    payload: n.payload,
                                                    error: n.error,
                                                    base: e.router.options.base,
                                                    env: {},
                                                }),
                                                n.req && (e.context.req = n.req),
                                                n.res && (e.context.res = n.res),
                                                n.ssrContext && (e.context.ssrContext = n.ssrContext),
                                                (e.context.redirect = function(t, path, n) {
                                                    if (t) {
                                                        e.context._redirected = !0;
                                                        var o = Object(r.a)(path);
                                                        if (
                                                            ("number" == typeof t ||
                                                                ("undefined" !== o && "object" !== o) ||
                                                                ((n = path || {}),
                                                                    (path = t),
                                                                    (o = Object(r.a)(path)),
                                                                    (t = 302)),
                                                                "object" === o &&
                                                                (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                                        )
                                                            throw (
                                                                ((path = Object(h.d)(path, n)),
                                                                    window.location.replace(path),
                                                                    new Error("ERR_REDIRECT"))
                                                            );
                                                        e.context.next({ path: path, query: n, status: t });
                                                    }
                                                }),
                                                (e.context.nuxtState = window.__NUXT__)),
                                            (t.next = 3),
                                            Promise.all([T(n.route), T(n.from)])
                                        );
                                    case 3:
                                        (o = t.sent),
                                        (l = Object(c.a)(o, 2)),
                                        (f = l[0]),
                                        (d = l[1]),
                                        n.route && (e.context.route = f),
                                            n.from && (e.context.from = d),
                                            (e.context.next = n.next),
                                            (e.context._redirected = !1),
                                            (e.context._errored = !1),
                                            (e.context.isHMR = !1),
                                            (e.context.params = e.context.route.params || {}),
                                            (e.context.query = e.context.route.query || {});
                                    case 15:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    }),
                )).apply(this, arguments);
            }

            function P(t, e) {
                return !t.length || e._redirected || e._errored ?
                    Promise.resolve() :
                    R(t[0], e).then(function() {
                        return P(t.slice(1), e);
                    });
            }

            function R(t, e) {
                var n;
                return (n =
                        2 === t.length ?
                        new Promise(function(n) {
                            t(e, function(t, data) {
                                t && e.error(t), n((data = data || {}));
                            });
                        }) :
                        t(e)) &&
                    n instanceof Promise &&
                    "function" == typeof n.then ?
                    n :
                    Promise.resolve(n);
            }

            function M(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(h.c)(e);
            }

            function D(t, e) {
                return (function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++)
                        "object" === Object(r.a)(t[i]) &&
                        (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", Z(e)));
                    return function(e, r) {
                        for (
                            var path = "",
                                data = e || {},
                                o = (r || {}).pretty ? H : encodeURIComponent,
                                l = 0; l < t.length; l++
                        ) {
                            var c = t[l];
                            if ("string" != typeof c) {
                                var f = data[c.name || "pathMatch"],
                                    h = void 0;
                                if (null == f) {
                                    if (c.optional) {
                                        c.partial && (path += c.prefix);
                                        continue;
                                    }
                                    throw new TypeError(
                                        'Expected "' + c.name + '" to be defined',
                                    );
                                }
                                if (Array.isArray(f)) {
                                    if (!c.repeat)
                                        throw new TypeError(
                                            'Expected "' +
                                            c.name +
                                            '" to not repeat, but received `' +
                                            JSON.stringify(f) +
                                            "`",
                                        );
                                    if (0 === f.length) {
                                        if (c.optional) continue;
                                        throw new TypeError(
                                            'Expected "' + c.name + '" to not be empty',
                                        );
                                    }
                                    for (var d = 0; d < f.length; d++) {
                                        if (((h = o(f[d])), !n[l].test(h)))
                                            throw new TypeError(
                                                'Expected all "' +
                                                c.name +
                                                '" to match "' +
                                                c.pattern +
                                                '", but received `' +
                                                JSON.stringify(h) +
                                                "`",
                                            );
                                        path += (0 === d ? c.prefix : c.delimiter) + h;
                                    }
                                } else {
                                    if (((h = c.asterisk ? V(f) : o(f)), !n[l].test(h)))
                                        throw new TypeError(
                                            'Expected "' +
                                            c.name +
                                            '" to match "' +
                                            c.pattern +
                                            '", but received "' +
                                            h +
                                            '"',
                                        );
                                    path += c.prefix + h;
                                }
                            } else path += c;
                        }
                        return path;
                    };
                })(
                    (function(t, e) {
                        var n,
                            r = [],
                            o = 0,
                            l = 0,
                            path = "",
                            c = (e && e.delimiter) || "/";
                        for (; null != (n = I.exec(t));) {
                            var f = n[0],
                                h = n[1],
                                d = n.index;
                            if (((path += t.slice(l, d)), (l = d + f.length), h))
                                path += h[1];
                            else {
                                var m = t[l],
                                    v = n[2],
                                    x = n[3],
                                    w = n[4],
                                    y = n[5],
                                    C = n[6],
                                    _ = n[7];
                                path && (r.push(path), (path = ""));
                                var k = null != v && null != m && m !== v,
                                    j = "+" === C || "*" === C,
                                    O = "?" === C || "*" === C,
                                    L = n[2] || c,
                                    pattern = w || y;
                                r.push({
                                    name: x || o++,
                                    prefix: v || "",
                                    delimiter: L,
                                    optional: O,
                                    repeat: j,
                                    partial: k,
                                    asterisk: Boolean(_),
                                    pattern: pattern ?
                                        F(pattern) :
                                        _ ?
                                        ".*" :
                                        "[^" + B(L) + "]+?",
                                });
                            }
                        }
                        l < t.length && (path += t.substr(l));
                        path && r.push(path);
                        return r;
                    })(t, e),
                    e,
                );
            }

            function N(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n;
            }

            function U(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else
                    try {
                        e = JSON.stringify(t, null, 2);
                    } catch (n) {
                        e = "[".concat(t.constructor.name, "]");
                    }
                return m(
                    m({}, t), {}, {
                        message: e,
                        statusCode: t.statusCode ||
                            t.status ||
                            (t.response && t.response.status) ||
                            500,
                    },
                );
            }
            (window.onNuxtReadyCbs = []),
            (window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t);
            });
            var I = new RegExp(
                [
                    "(\\\\.)",
                    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
                ].join("|"),
                "g",
            );

            function H(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                });
            }

            function V(t) {
                return H(t, !0);
            }

            function B(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
            }

            function F(t) {
                return t.replace(/([=!:$/()])/g, "\\$1");
            }

            function Z(t) {
                return t && t.sensitive ? "" : "i";
            }

            function G(t, e, n) {
                t.$options[e] || (t.$options[e] = []),
                    t.$options[e].includes(n) || t.$options[e].push(n);
            }
            var K = h.b,
                Q = (h.e, h.a);

            function X(t) {
                try {
                    window.history.scrollRestoration = t;
                } catch (t) {}
            }
        },
    },
    [
        [360, 47, 4, 48]
    ],
]);