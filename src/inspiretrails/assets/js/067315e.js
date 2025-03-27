(window.webpackJsonp = window.webpackJsonp || []).push([
    [25, 8, 9], {
        568: function(t, l, c) {
            var content = c(572);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0,
                c(47).default)("2b1ff822", content, !0, {
                sourceMap: !1
            })
        },
        570: function(t, l, c) {
            "use strict";
            c.r(l);
            var e = {
                    name: "Loading",
                    props: {
                        color: {
                            type: String,
                            default: "#fff"
                        },
                        parent: {
                            type: [String],
                            default: null
                        },
                        width: {
                            type: String,
                            default: "150px"
                        },
                        height: {
                            type: String,
                            default: "150px"
                        },
                        bg: {
                            type: Boolean,
                            default: !0
                        },
                        bgColor: {
                            type: String,
                            default: "transparent"
                        }
                    },
                    data: function() {
                        return {
                            parentEl: null,
                            hasRelative: !1
                        }
                    },
                    mounted: function() {},
                    destroyed: function() {}
                },
                n = (c(571),
                    c(22)),
                component = Object(n.a)(e, (function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        class: {
                            "ajax-loader": !0,
                            "has-parent": null !== t.parent,
                                "no-bg": !t.bg
                        }
                    }, [l("div", {
                        staticClass: "ajax-img",
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    }, [l("svg", {
                        staticStyle: {
                            margin: "auto",
                            background: "#fff",
                            display: "block"
                        },
                        style: {
                            margin: "auto",
                            background: t.bgColor,
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "xMidYMid",
                            width: t.width,
                            height: t.height
                        }
                    }, [l("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "0",
                            fill: "none",
                            stroke: "#220b09",
                            "stroke-width": "2"
                        }
                    }, [l("animate", {
                        attrs: {
                            attributeName: "r",
                            repeatCount: "indefinite",
                            dur: "1s",
                            values: "0;40",
                            keyTimes: "0;1",
                            keySplines: "0 0.2 0.8 1",
                            calcMode: "spline",
                            begin: "0s"
                        }
                    }), t._v(" "), l("animate", {
                        attrs: {
                            attributeName: "opacity",
                            repeatCount: "indefinite",
                            dur: "1s",
                            values: "1;0",
                            keyTimes: "0;1",
                            keySplines: "0.2 0 0.8 1",
                            calcMode: "spline",
                            begin: "0s"
                        }
                    })]), t._v(" "), l("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "0",
                            fill: "none",
                            stroke: "#f5c037",
                            "stroke-width": "2"
                        }
                    }, [l("animate", {
                        attrs: {
                            attributeName: "r",
                            repeatCount: "indefinite",
                            dur: "1s",
                            values: "0;40",
                            keyTimes: "0;1",
                            keySplines: "0 0.2 0.8 1",
                            calcMode: "spline",
                            begin: "-0.5s"
                        }
                    }), t._v(" "), l("animate", {
                        attrs: {
                            attributeName: "opacity",
                            repeatCount: "indefinite",
                            dur: "1s",
                            values: "1;0",
                            keyTimes: "0;1",
                            keySplines: "0.2 0 0.8 1",
                            calcMode: "spline",
                            begin: "-0.5s"
                        }
                    })])])])])
                }), [], !1, null, "6e5af4b0", null);
            l.default = component.exports
        },
        571: function(t, l, c) {
            "use strict";
            c(568)
        },
        572: function(t, l, c) {
            var e = c(46)(!1);
            e.push([t.i, ".ajax-loader[data-v-6e5af4b0]{z-index:9999;top:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:400px;position:absolute;background:rgba(255,255,255,.5)}.ajax-loader.has-parent[data-v-6e5af4b0]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(254,105,106,.2)}.ajax-loader.has-parent.no-bg[data-v-6e5af4b0]{background-color:rgba(0,0,0,0) !important}", ""]),
                t.exports = e
        },
        712: function(t, l, c) {
            t.exports = c.p + "img/reason1.9ed2f98.svg"
        },
        720: function(t, l, c) {
            t.exports = c.p + "img/arrow.1b91d36.svg"
        },
        721: function(t, l, c) {
            t.exports = c.p + "img/earth.b34e89c.svg"
        },
        722: function(t, l, c) {
            t.exports = c.p + "img/tree.b37a57e.png"
        },
        723: function(t, l, c) {
            t.exports = c.p + "img/reason2.b169181.svg"
        },
        724: function(t, l, c) {
            t.exports = c.p + "img/reason3.034b391.svg"
        },
        727: function(t, l, c) {
            "use strict";
            c.r(l);
            var e = [function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row mt-5"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "intro-earth"
                    }, [l("span", [l("img", {
                        attrs: {
                            src: c(721)
                        }
                    })]), t._v(" "), l("span", {
                        staticClass: "title-bold"
                    }, [t._v("ĐỒNG HÀNH CÙNG "), l("br"), t._v(" BCVN VIỆT NAM")])]), t._v(" "), l("div", {
                        staticClass: "content-intro-medal mt-3"
                    }, [t._v("\n        Với  khao khát cùng chung tay tạo nên một xã hội trong đó phụ nữ Việt Nam và cộng đồng được trang bị những kiến thức, kỹ năng cần thiết và quan trọng để chống lại ung thư vú.  Inspire Trails chọn đồng hành cùng Breast Cancer Việt Nam và Fujifilm cho chuỗi vận động của các đồng run\n        "), l("p", [t._v('\n          Bạn chính là “Người truyền cảm hứng" cùng inspireTrails tạo dựng một cộng đồng chinh phục thử thách và đóng góp cho xã hội!\n        ')])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "image-intro-medal"
                    }, [l("img", {
                        attrs: {
                            src: c(722)
                        }
                    })])])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [t("div", {
                        staticClass: "title-box"
                    }, [this._v("\n        Lý do chọn inspire trails\n      ")])])])
                }, function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "wrap-reason"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-reason"
                    }, [l("div", {
                        staticClass: "icon-reason"
                    }, [l("img", {
                        attrs: {
                            src: c(712)
                        }
                    })]), t._v(" "), l("div", {
                        staticClass: "content-reason"
                    }, [l("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Chạy bất cứ khi nào\n                ")]), t._v(" "), l("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Tìm thử thách phù hợp với thời khoá biểu của bản thân? Chọn Inspire Trails và chạy bất cứ lúc\n                  nào bạn muốn\n                ")])])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-reason"
                    }, [l("div", {
                        staticClass: "icon-reason"
                    }, [l("img", {
                        attrs: {
                            src: c(723)
                        }
                    })]), t._v(" "), l("div", {
                        staticClass: "content-reason"
                    }, [l("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Đa dạng hoạt động chinh phục\n                ")]), t._v(" "), l("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Mọi hoạt động như chạy bộ, bơi, đạp xe, leo cầu thang hoặc đi bộ dốc đều được Inspire Trails\n                  khuyến khích sử dụng\n                ")])])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-reason"
                    }, [l("div", {
                        staticClass: "icon-reason"
                    }, [l("img", {
                        attrs: {
                            src: c(724)
                        }
                    })]), t._v(" "), l("div", {
                        staticClass: "content-reason"
                    }, [l("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Truy cập dễ dàng\n                ")]), t._v(" "), l("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Kết nối với tài khoản STRAVA của bạn. Hệ thống sẽ tự động cập nhật kết quả của bạn trên bảng\n                  thành tích.\n                ")])])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-reason"
                    }, [l("div", {
                        staticClass: "icon-reason"
                    }, [l("img", {
                        attrs: {
                            src: c(712)
                        }
                    })]), t._v(" "), l("div", {
                        staticClass: "content-reason"
                    }, [l("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Nguồn cảm hứng chinh phục\n                ")]), t._v(" "), l("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Dù là chạy ngay trên Everest hay đạp xe leo núi Fansipan, đã đến lúc đặt mục tiêu và vượt qua\n                  giới hạn bản thân để chinh phục nó.\n                ")])])])])])])])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [t("div", {
                        staticClass: "title-box"
                    }, [this._v("\n        Câu hỏi thường gặp (FAQ)\n      ")])])])
                }],
                n = {
                    name: "GlobalComponent",
                    data: function() {
                        return {
                            questionAnswer: []
                        }
                    },
                    mounted: function() {
                        this.getListQuestionAnswer()
                    },
                    methods: {
                        getListQuestionAnswer: function() {
                            var t = this;
                            this.$axios.get("/question-answer/list").then((function(l) {
                                l.data && (t.questionAnswer = l.data.data)
                            })).catch((function(t) {}))
                        }
                    }
                },
                o = c(22),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "wrap-question-answer pb-5"
                    }, [l("div", {
                        staticClass: "row"
                    }, t._l(t.questionAnswer, (function(e, i) {
                        return t.questionAnswer.length > 0 ? l("div", {
                            key: i,
                            staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        }, [l("div", {
                            staticClass: "item-question-answer"
                        }, [l("b-card", {
                            staticClass: "mb-1",
                            attrs: {
                                "no-body": ""
                            }
                        }, [l("b-card-header", {
                            staticClass: "p-1",
                            attrs: {
                                "header-tag": "header",
                                role: "tab"
                            }
                        }, [l("b-button", {
                            directives: [{
                                name: "b-toggle",
                                rawName: "v-b-toggle",
                                value: "accordion-" + i,
                                expression: "'accordion-' + i"
                            }],
                            staticClass: "head-q",
                            attrs: {
                                block: "",
                                variant: "link"
                            }
                        }, [l("span", [t._v(t._s(e.detail.question))]), t._v(" "), l("span", {
                            staticClass: "icon-arrow"
                        }, [l("img", {
                            attrs: {
                                src: c(720)
                            }
                        })])])], 1), t._v(" "), l("b-collapse", {
                            attrs: {
                                id: "accordion-" + i,
                                accordion: "my-accordion",
                                role: "tabpanel"
                            }
                        }, [l("b-card-body", [l("b-card-text", [l("span", {
                            domProps: {
                                innerHTML: t._s(e.detail.answer)
                            }
                        })])], 1)], 1)], 1)], 1)]) : t._e()
                    })), 0)])])])])
                }), e, !1, null, "6f5e986a", null);
            l.default = component.exports
        },
        728: function(t, l, c) {
            t.exports = c.p + "img/everest.09a3208.png"
        },
        729: function(t, l, c) {
            t.exports = c.p + "img/fansipan.bac395d.png"
        },
        730: function(t, l, c) {
            t.exports = c.p + "img/fuji.1906879.png"
        },
        731: function(t, l, c) {
            t.exports = c.p + "img/pharaoh.c6308d1.png"
        },
        732: function(t, l, c) {
            t.exports = c.p + "img/Huy-Chuong-van-ly-truong-thanh.75a3958.png"
        },
        746: function(t, l, c) {
            var content = c(785);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0,
                c(47).default)("4b62b331", content, !0, {
                sourceMap: !1
            })
        },
        772: function(t, l, c) {
            t.exports = c.p + "img/swimming.ea02b47.svg"
        },
        773: function(t, l, c) {
            t.exports = c.p + "img/biking.1a4e327.svg"
        },
        774: function(t, l, c) {
            t.exports = c.p + "img/running.1d1dad3.svg"
        },
        775: function(t, l, c) {
            t.exports = c.p + "img/hiking.5135f01.svg"
        },
        776: function(t, l, c) {
            t.exports = c.p + "img/climbing.bf4799a.svg"
        },
        777: function(t, l, c) {
            t.exports = c.p + "img/waking.2a69013.svg"
        },
        778: function(t, l, c) {
            t.exports = c.p + "img/intro-strava.e070ded.svg"
        },
        779: function(t, l, c) {
            t.exports = c.p + "img/shipping.06018d1.svg"
        },
        780: function(t, l, c) {
            t.exports = c.p + "img/challenge-icon.58d2a61.svg"
        },
        783: function(t, l, c) {
            t.exports = c.p + "img/mystery box.25610db.png"
        },
        784: function(t, l, c) {
            "use strict";
            c(746)
        },
        785: function(t, l, c) {
            var e = c(46)(!1);
            e.push([t.i, ".has-top-fixed[data-v-ca82aada]{position:fixed;top:0;left:0;right:0;z-index:99999}", ""]),
                t.exports = e
        },
        839: function(t, l, c) {
            "use strict";
            c.r(l);
            c(4),
                c(64);
            var e = [function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "icon-type-traking"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(772)
                        }
                    })])]), t._v(" "), l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(773)
                        }
                    })])]), t._v(" "), l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(774)
                        }
                    })])]), t._v(" "), l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(775)
                        }
                    })])]), t._v(" "), l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(776)
                        }
                    })])]), t._v(" "), l("div", {
                        staticClass: "col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                    }, [l("div", {
                        staticClass: "item-type-traking"
                    }, [l("img", {
                        attrs: {
                            src: c(777)
                        }
                    })])])])])])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [t("div", {
                        staticClass: "image-description-challenge"
                    })])
                }, function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "note-strava"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "title-note-strava"
                    }, [t._v("\n                        Inspire Trails, Strava và hàng vạn nhà truyền cảm hứng đang đồng hành cùng bạn trên Thử thách\n                        chinh\n                        phục Fansipan\n                      ")]), t._v(" "), l("div", {
                        staticClass: "description-note-strava text-normal"
                    }, [t._v('\n                        Bạn chỉ cần kết nối với tài khoản cá nhân trên ứng dụng quản lý hoạt động thể lực STRAVA. Sau\n                        khi\n                        hoàn thành thử thách và gửi kết quả trên ứng dụng, bạn sẽ ghi tên mình vào bảng thành tích nổi\n                        bật\n                        tại trang web của "Những nhà truyền cảm hứng".\n                      ')])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "image-strava-intro"
                    }, [l("img", {
                        attrs: {
                            src: c(778)
                        }
                    })])])])])])])
                }, function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "note-shipping"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                    }, [l("div", {
                        staticClass: "icon-and-title"
                    }, [l("span", {
                        staticClass: "icon-t"
                    }, [l("img", {
                        attrs: {
                            src: c(779)
                        }
                    })]), t._v(" "), l("span", {
                        staticClass: "title-t"
                    }, [t._v("\n                          Thông tin giao hàng:\n                        ")])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
                    }, [l("div", {
                        staticClass: "list-note-shipping"
                    }, [l("div", {
                        staticClass: "row no-gutters"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-note-shipping"
                    }, [t._v("\n                              Thời gian vận chuyển từ 3 – 5 ngày sau khi hoàn thành thử thách\n                            ")])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-note-shipping"
                    }, [t._v("\n                              Miễn phí vận chuyển cho Nhà chinh phục tại Việt Nam\n                            ")])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "item-note-shipping"
                    }, [t._v("\n                              Thông tin và địa chỉ vận chuyển sẽ được xác nhận sau khi hoàn thành thử thách\n                            ")])])])])])])])])])
                }, function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "note-shipping"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                    }, [l("div", {
                        staticClass: "icon-and-title"
                    }, [l("span", {
                        staticClass: "icon-t"
                    }, [l("img", {
                        attrs: {
                            src: c(780)
                        }
                    })]), t._v(" "), l("span", {
                        staticClass: "title-t"
                    }, [t._v("\n                          Ghi chú cho thử thách:\n                        ")])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
                    }, [l("div", {
                        staticClass: "list-note-shipping"
                    }, [l("div", {
                        staticClass: "row no-gutters"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "item-note-shipping"
                    }, [l("b", [t._v("Bạn có thể đăng ký tham gia thử thách bất kỳ lúc nào:")]), t._v(" "), l("br"), t._v("\n                              Tất cả các thử thách của Inspire Trails đều không giới hạn thời gian đăng ký.\n                              "), l("br"), t._v("\n                              Sau khi xác nhận thanh toán thành công, thử thách của bạn sẽ bắt đầu ngay lập tức.\n                            ")])])])])])])])])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "head-the-conquerors"
                    }, [t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"
                    }, [t("div", {
                        staticClass: "title-the-conquerors"
                    }, [this._v("\n                        GẶP MẶT CÁC NHÀ CHINH PHỤC\n                      ")])])])])
                }],
                n = (c(5),
                    c(2),
                    c(6),
                    c(3),
                    c(7),
                    c(10)),
                o = c(0),
                r = (c(41),
                    c(38),
                    c(12),
                    c(18),
                    c(1),
                    c(32),
                    c(743)),
                d = c.n(r),
                v = (c(744),
                    c(745),
                    c(56)),
                h = c(570),
                m = c(727);

            function C(t, l) {
                var c = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    l && (e = e.filter((function(l) {
                            return Object.getOwnPropertyDescriptor(t, l).enumerable
                        }))),
                        c.push.apply(c, e)
                }
                return c
            }

            function _(t) {
                for (var l = 1; l < arguments.length; l++) {
                    var c = null != arguments[l] ? arguments[l] : {};
                    l % 2 ? C(Object(c), !0).forEach((function(l) {
                        Object(o.a)(t, l, c[l])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c)) : C(Object(c)).forEach((function(l) {
                        Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(c, l))
                    }))
                }
                return t
            }
            var f = {
                    name: "ChallengeCategory",
                    components: {
                        VueSlickCarousel: d.a,
                        Loading: h.default,
                        GlobalComponent: m.default
                    },
                    auth: !1,
                    data: function() {
                        return {
                            url: "",
                            loading: !1,
                            scroll: !1,
                            loadingBtn: !1,
                            detail: {
                                challenge: []
                            },
                            challengeChoose: {},
                            medals: {
                                "chinh-phuc-everest": [c(728)],
                                "chinh-phuc-fuji-3-759m": [c(730)],
                                "thung-lung-cua-pharaoh": [c(731)],
                                "chinh-phuc-fansipan": [c(729)],
                                "mystery-box": [c(783)],
                                "van-ly-truong-thanh": [c(732)]
                            },
                            isFixed: !1
                        }
                    },
                    computed: {
                        userInfo: function() {
                            return this.$auth.user
                        }
                    },
                    beforeMount: function() {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("scroll", this.handleScroll)
                    },
                    mounted: function() {
                        var t = this;
                        this.url = this.$route.params.slug,
                            this.getDetailCategoryChallenge(),
                            this.scroll = this.$route.query.scroll,
                            setTimeout((function() {
                                t.scroll && document.getElementById("registerChallenge").scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                })
                            }), 1e3)
                    },
                    methods: _(_({}, Object(v.b)("challenges", ["resignChallenge"])), {}, {
                        handleScroll: function() {
                            window.scrollY > 95 ? this.isFixed = !0 : this.isFixed = !1
                        },
                        scrollToRegister: function() {
                            document.getElementById("registerChallenge").scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        },
                        formatNumber: function(t) {
                            return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        },
                        getDetailCategoryChallenge: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function l() {
                                return regeneratorRuntime.wrap((function(l) {
                                    for (;;)
                                        switch (l.prev = l.next) {
                                            case 0:
                                                t.loading = !0,
                                                    t.$axios.get("/admin/challenges/category/detail/" + t.url).then((function(l) {
                                                        t.loading = !1,
                                                            l.data.data && (t.detail = l.data.data)
                                                    }));
                                            case 2:
                                            case "end":
                                                return l.stop()
                                        }
                                }), l)
                            })))()
                        },
                        goRegisterChallenge: function(t) {
                            var l = this;
                            return Object(n.a)(regeneratorRuntime.mark((function c() {
                                return regeneratorRuntime.wrap((function(c) {
                                    for (;;)
                                        switch (c.prev = c.next) {
                                            case 0:
                                                if (l.challengeChoose = t, !l.userInfo) {
                                                    c.next = 7;
                                                    break
                                                }
                                                return l.loadingBtn = !0,
                                                    c.next = 5,
                                                    l.$axios.post("user/add-to-card", {
                                                        challenge_id: l.challengeChoose.id
                                                    }).then((function(t) {
                                                        t.data && l.$router.push({
                                                            path: "/order"
                                                        })
                                                    })).catch((function(t) {
                                                        l.$swal({
                                                            icon: "error",
                                                            title: "Oops...",
                                                            text: "Có lỗi xảy ra ! Vui lòng thử lại"
                                                        })
                                                    }));
                                            case 5:
                                                c.next = 8;
                                                break;
                                            case 7:
                                                l.$router.push({
                                                    path: "/login",
                                                    query: {
                                                        redirect: l.detail.slug
                                                    }
                                                });
                                            case 8:
                                            case "end":
                                                return c.stop()
                                        }
                                }), c)
                            })))()
                        }
                    })
                },
                x = (c(784),
                    c(22)),
                component = Object(x.a)(f, (function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "position-relative"
                    }, [t.loading ? l("Loading") : t._e(), t._v(" "), t.loading ? t._e() : l("div", [t.detail && t.detail.challenges ? l("div", [l("div", {
                        staticClass: "challenge-fixed",
                        class: {
                            "has-top-fixed": t.isFixed
                        }
                    }, [l("div", {
                        staticClass: "container-fluid px-custom"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "item-challenge-fixed"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "title-description-item-challenge-fixed"
                    }, [t.detail && t.detail.challenges && t.detail.challenges.length > 0 ? l("span", {
                        staticClass: "title-item-challenge-fixed"
                    }, [t._v(t._s(t.detail.challenges[0].title))]) : t._e(), t._v(" "), t.detail && t.detail.challenges && t.detail.challenges.length > 0 ? l("span", {
                        staticClass: "description-item-challenge-fixed"
                    }, [t._v(t._s(t.detail.challenges[0].distance) + "km / " + t._s(t.detail.challenges[0].date_completed) + " ngày")]) : t._e()])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "price-choose"
                    }, [l("div", {
                        staticClass: "price-item-challenge-fixed"
                    }, [t.detail && t.detail.challenges && t.detail.challenges.length > 0 && t.detail.challenges[0].price_discount ? l("span", {
                        staticClass: "price-item-challenge-fixed-discount"
                    }, [t._v("\n                            " + t._s(t.formatNumber(t.detail.challenges[0].price_discount)) + " VNĐ\n                          ")]) : t._e(), t._v(" "), t.detail && t.detail.challenges && t.detail.challenges.length > 0 && t.detail.challenges[0].price_sale ? l("span", {
                        staticClass: "price-item-challenge-fixed-sale"
                    }, [t._v("\n                            " + t._s(t.formatNumber(t.detail.challenges[0].price_sale)) + "\n                            VNĐ\n                          ")]) : t._e()]), t._v(" "), l("div", {
                        staticClass: "btn-scroll-join"
                    }, [l("button", {
                        staticClass: "btn btn-join",
                        on: {
                            click: t.scrollToRegister
                        }
                    }, [t._v("\n                            " + t._s(t.$t("challenges.choose-challenge")) + "\n                          ")])])])])])])])])])]), t._v(" "), l("div", {
                        staticClass: "bg-header-challenge"
                    }, [l("div", {
                        staticClass: "img-header-challenge"
                    }, [t.detail ? l("img", {
                        attrs: {
                            src: "".concat(t.detail.thumbnail_title)
                        }
                    }) : t._e()])]), t._v(" "), l("div", {
                        staticClass: "description-challenge-category"
                    }, [l("div", {
                        staticClass: "container"
                    }, [t._m(0), t._v(" "), l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "description-challenge-category-content"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [t.detail ? l("div", {
                        staticClass: "title-description-challenges",
                        domProps: {
                            innerHTML: t._s(t.detail.description_title)
                        }
                    }) : t._e(), t._v(" "), t.detail ? l("div", {
                        staticClass: "d-description-challenges text-normal",
                        domProps: {
                            innerHTML: t._s(t.detail.description)
                        }
                    }) : t._e()]), t._v(" "), t._m(1)])])])])])]), t._v(" "), l("div", {
                        staticClass: "no-background"
                    }, [l("div", {
                        staticClass: "container"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "content-challenge-page"
                    }, [t.detail ? l("div", {
                        staticClass: "title-box-content-challenge",
                        domProps: {
                            innerHTML: t._s(t.detail.distance_date)
                        }
                    }) : t._e(), t._v(" "), t.detail ? l("div", {
                        staticClass: "text-normal mt-4",
                        domProps: {
                            innerHTML: t._s(t.detail.distance_date_description)
                        }
                    }) : t._e()])])]), t._v(" "), l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "chart-detail-challenge"
                    }, [t.detail ? l("img", {
                        attrs: {
                            src: "".concat(t.detail.distance_date_thumbnail)
                        }
                    }) : t._e()])])]), t._v(" "), t._m(2), t._v(" "), l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "content-challenge-page"
                    }, [t.detail ? l("div", {
                        staticClass: "title-box-content-challenge",
                        domProps: {
                            innerHTML: t._s(t.detail.medal_title)
                        }
                    }, [l("span", [t._v("Thu thập huy chương")]), t._v(" "), l("span", [t._v("nhà chinh phục")])]) : t._e(), t._v(" "), l("div", {
                        staticClass: "info-medal my-5"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "slider-image-medal"
                    }, [t.detail ? l("b-carousel", {
                        staticStyle: {
                            "text-shadow": "0px 0px 2px #000"
                        },
                        attrs: {
                            id: "carousel-fade",
                            fade: "",
                            indicators: "",
                            "img-width": "1024",
                            "img-height": "480"
                        }
                    }, t._l(this.medals[this.$route.params.slug], (function(t, i) {
                        return l("b-carousel-slide", {
                            key: i,
                            attrs: {
                                "img-src": t
                            }
                        })
                    })), 1) : t._e()], 1)]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [t.detail ? l("div", {
                        staticClass: "note-medal text-normal",
                        domProps: {
                            innerHTML: t._s(t.detail.medal_description)
                        }
                    }) : t._e()])])])])])]), t._v(" "), l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [l("div", {
                        staticClass: "content-challenge-page"
                    }, [t.detail ? l("div", {
                        staticClass: "title-box-content-challenge",
                        domProps: {
                            innerHTML: t._s(t.detail.point_title)
                        }
                    }) : t._e(), t._v(" "), l("div", {
                        staticClass: "info-medal"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [t.detail ? l("div", {
                        staticClass: "note-point text-normal mt-4",
                        domProps: {
                            innerHTML: t._s(t.detail.point_description)
                        }
                    }) : t._e()]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [l("div", {
                        staticClass: "image-point"
                    }, [t.detail ? l("img", {
                        attrs: {
                            src: t.detail.point_thumbnail
                        }
                    }) : t._e()])])])])])])]), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), l("div", {
                        staticClass: "row",
                        attrs: {
                            id: "registerChallenge"
                        }
                    }, t._l(t.detail.challenges, (function(c, i) {
                        return t.detail && t.detail.challenges && t.detail.challenges.length > 0 ? l("div", {
                            key: i,
                            staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        }, [l("div", {
                            staticClass: "item-challenge-loop"
                        }, [l("div", {
                            staticClass: "row"
                        }, [l("div", {
                            staticClass: "col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
                        }, [l("div", {
                            staticClass: "info-challenge"
                        }, [l("div", {
                            staticClass: "title-challenge"
                        }, [t._v("\n                          " + t._s(c.title) + "\n                        ")]), t._v(" "), l("div", {
                            staticClass: "wrap-price-challenge"
                        }, [c && c.price_discount ? l("span", {
                            staticClass: "price-old"
                        }, [t._v(t._s(t.formatNumber(c.price_discount)) + " VNĐ")]) : t._e(), t._v(" "), c && c.price_sale ? l("span", {
                            staticClass: "price-sale"
                        }, [t._v(t._s(t.formatNumber(c.price_sale)) + " VNĐ")]) : t._e(), t._v(" "), c && c.price_discount ? l("span", {
                            staticClass: "price-save"
                        }, [t._v("SAVE 20%")]) : t._e()])]), t._v(" "), c && c.price_discount ? l("div", {
                            staticClass: "note-item-challenge"
                        }, [l("span", [t._v(" Price available from 05 Aug to 31 Aug")])]) : t._e()]), t._v(" "), l("div", {
                            staticClass: "col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                        }, [l("div", {
                            staticClass: "btn-order-challenge"
                        }, [l("button", {
                            staticClass: "btn btn-order",
                            staticStyle: {
                                width: "200px"
                            },
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(l) {
                                    return t.goRegisterChallenge(c)
                                }
                            }
                        }, [t.loadingBtn && t.challengeChoose.id === c.id ? l("div", {
                            staticClass: "spinner-grow text-light spinner-grow-sm",
                            attrs: {
                                role: "status"
                            }
                        }) : t._e(), t._v(" "), t.loadingBtn ? t._e() : l("span", [t._v("Đăng ký ngay")])])])])]), t._v(" "), l("div", {
                            staticClass: "row"
                        }, [l("div", {
                            staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        }, [c && c.description ? l("div", {
                            staticClass: "description-challenge-item",
                            domProps: {
                                innerHTML: t._s(c.description)
                            }
                        }) : t._e()]), t._v(" "), l("div", {
                            staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        }, [l("div", {
                            staticClass: "item-receive"
                        }, [l("div", {
                            staticClass: "title-item-receive"
                        }, [t._v("\n                          Giải thường bao gồm:\n                        ")]), t._v(" "), l("div", {
                            staticClass: "wrap-item-receive-loop"
                        }, [l("div", {
                            staticClass: "row"
                        }, t._l(c.prize, (function(e, i) {
                            return c && c.prize && c.prize.length > 0 ? l("div", {
                                key: i,
                                staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                            }, [l("div", {
                                staticClass: "item-receive-loop"
                            }, [l("img", {
                                attrs: {
                                    src: e.prize_thumbnail
                                }
                            })])]) : t._e()
                        })), 0)])])])])])]) : t._e()
                    })), 0)])]), t._v(" "), l("div", {
                        staticClass: "the-conquerors"
                    }, [l("div", {
                        staticClass: "container"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [t._m(5), t._v(" "), l("div", {
                        staticClass: "content-the-conquerors"
                    }, [l("VueSlickCarousel", {
                        attrs: {
                            arrows: !0,
                            dots: !0
                        }
                    }, [l("div", [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7"
                    }, [l("div", {
                        staticClass: "info-conquerors"
                    }, [l("div", {
                        staticClass: "name-conquerors"
                    }, [t._v("\n                              Phùng Ngân - Vietnam\n                            ")]), t._v(" "), l("div", {
                        staticClass: "description-conquerors"
                    }, [t._v("\n                              “ Bạn đừng để các con số làm choáng mình, hãy chia nhỏ nó ra mỗi ngày và giữ kỷ luật. Đây\n                              là\n                              bí quyết để bạn hoàn thành thử thách của Inspire Trails. Giải chạy rất hay và ý nghĩa. Huy\n                              chương rất đẹp. Mình sẽ tham gia các chương trình của Inspire Traills“\n                            ")]), t._v(" "), l("div", {
                        staticClass: "wrap-strava-conquerors"
                    }, [l("div", {
                        staticClass: "row"
                    }, [l("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [l("div", {
                        staticClass: "item-strava-conquerors"
                    }, [l("span", [t._v("Ngày bắt đầu")]), t._v(" "), l("span", [t._v("26/07/2021")])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [l("div", {
                        staticClass: "item-strava-conquerors"
                    }, [l("span", [t._v("Tổng tích lũy")]), t._v(" "), l("span", [t._v("86,79 Km")])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [l("div", {
                        staticClass: "item-strava-conquerors"
                    }, [l("span", [t._v("Ngày kết thúc")]), t._v(" "), l("span", [t._v("20/08/2021")])])])])])])]), t._v(" "), l("div", {
                        staticClass: "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
                    }, [l("div", {
                        staticClass: "img-conquerors"
                    }, [l("img", {
                        attrs: {
                            src: "/assets/images/Testi-01-2-768x768.png"
                        }
                    })])])])])])], 1)])])])])]) : t._e()]), t._v(" "), t.detail ? l("div", {
                        staticClass: "container"
                    }, [l("GlobalComponent")], 1) : t._e()], 1)
                }), e, !1, null, "ca82aada", null);
            l.default = component.exports;
            installComponents(component, {
                Loading: c(570).default
            })
        }
    }
]);