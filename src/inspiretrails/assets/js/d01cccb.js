(window.webpackJsonp = window.webpackJsonp || []).push([
    [30, 8, 9], {
        568: function(t, n, c) {
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
        570: function(t, n, c) {
            "use strict";
            c.r(n);
            var l = {
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
                e = (c(571),
                    c(22)),
                component = Object(e.a)(l, (function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        class: {
                            "ajax-loader": !0,
                            "has-parent": null !== t.parent,
                                "no-bg": !t.bg
                        }
                    }, [n("div", {
                        staticClass: "ajax-img",
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    }, [n("svg", {
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
                    }, [n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "0",
                            fill: "none",
                            stroke: "#220b09",
                            "stroke-width": "2"
                        }
                    }, [n("animate", {
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
                    }), t._v(" "), n("animate", {
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
                    })]), t._v(" "), n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "0",
                            fill: "none",
                            stroke: "#f5c037",
                            "stroke-width": "2"
                        }
                    }, [n("animate", {
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
                    }), t._v(" "), n("animate", {
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
            n.default = component.exports
        },
        571: function(t, n, c) {
            "use strict";
            c(568)
        },
        572: function(t, n, c) {
            var l = c(46)(!1);
            l.push([t.i, ".ajax-loader[data-v-6e5af4b0]{z-index:9999;top:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:400px;position:absolute;background:rgba(255,255,255,.5)}.ajax-loader.has-parent[data-v-6e5af4b0]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(254,105,106,.2)}.ajax-loader.has-parent.no-bg[data-v-6e5af4b0]{background-color:rgba(0,0,0,0) !important}", ""]),
                t.exports = l
        },
        712: function(t, n, c) {
            t.exports = c.p + "img/reason1.9ed2f98.svg"
        },
        720: function(t, n, c) {
            t.exports = c.p + "img/arrow.1b91d36.svg"
        },
        721: function(t, n, c) {
            t.exports = c.p + "img/earth.b34e89c.svg"
        },
        722: function(t, n, c) {
            t.exports = c.p + "img/tree.b37a57e.png"
        },
        723: function(t, n, c) {
            t.exports = c.p + "img/reason2.b169181.svg"
        },
        724: function(t, n, c) {
            t.exports = c.p + "img/reason3.034b391.svg"
        },
        727: function(t, n, c) {
            "use strict";
            c.r(n);
            var l = [function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row mt-5"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "intro-earth"
                    }, [n("span", [n("img", {
                        attrs: {
                            src: c(721)
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "title-bold"
                    }, [t._v("ĐỒNG HÀNH CÙNG "), n("br"), t._v(" BCVN VIỆT NAM")])]), t._v(" "), n("div", {
                        staticClass: "content-intro-medal mt-3"
                    }, [t._v("\n        Với  khao khát cùng chung tay tạo nên một xã hội trong đó phụ nữ Việt Nam và cộng đồng được trang bị những kiến thức, kỹ năng cần thiết và quan trọng để chống lại ung thư vú.  Inspire Trails chọn đồng hành cùng Breast Cancer Việt Nam và Fujifilm cho chuỗi vận động của các đồng run\n        "), n("p", [t._v('\n          Bạn chính là “Người truyền cảm hứng" cùng inspireTrails tạo dựng một cộng đồng chinh phục thử thách và đóng góp cho xã hội!\n        ')])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "image-intro-medal"
                    }, [n("img", {
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
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "wrap-reason"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "item-reason"
                    }, [n("div", {
                        staticClass: "icon-reason"
                    }, [n("img", {
                        attrs: {
                            src: c(712)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "content-reason"
                    }, [n("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Chạy bất cứ khi nào\n                ")]), t._v(" "), n("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Tìm thử thách phù hợp với thời khoá biểu của bản thân? Chọn Inspire Trails và chạy bất cứ lúc\n                  nào bạn muốn\n                ")])])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "item-reason"
                    }, [n("div", {
                        staticClass: "icon-reason"
                    }, [n("img", {
                        attrs: {
                            src: c(723)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "content-reason"
                    }, [n("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Đa dạng hoạt động chinh phục\n                ")]), t._v(" "), n("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Mọi hoạt động như chạy bộ, bơi, đạp xe, leo cầu thang hoặc đi bộ dốc đều được Inspire Trails\n                  khuyến khích sử dụng\n                ")])])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "item-reason"
                    }, [n("div", {
                        staticClass: "icon-reason"
                    }, [n("img", {
                        attrs: {
                            src: c(724)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "content-reason"
                    }, [n("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Truy cập dễ dàng\n                ")]), t._v(" "), n("div", {
                        staticClass: "description-reason"
                    }, [t._v("\n                  Kết nối với tài khoản STRAVA của bạn. Hệ thống sẽ tự động cập nhật kết quả của bạn trên bảng\n                  thành tích.\n                ")])])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "item-reason"
                    }, [n("div", {
                        staticClass: "icon-reason"
                    }, [n("img", {
                        attrs: {
                            src: c(712)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "content-reason"
                    }, [n("div", {
                        staticClass: "title-reason"
                    }, [t._v("\n                  Nguồn cảm hứng chinh phục\n                ")]), t._v(" "), n("div", {
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
                e = {
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
                            this.$axios.get("/question-answer/list").then((function(n) {
                                n.data && (t.questionAnswer = n.data.data)
                            })).catch((function(t) {}))
                        }
                    }
                },
                o = c(22),
                component = Object(o.a)(e, (function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "wrap-question-answer pb-5"
                    }, [n("div", {
                        staticClass: "row"
                    }, t._l(t.questionAnswer, (function(l, i) {
                        return t.questionAnswer.length > 0 ? n("div", {
                            key: i,
                            staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                        }, [n("div", {
                            staticClass: "item-question-answer"
                        }, [n("b-card", {
                            staticClass: "mb-1",
                            attrs: {
                                "no-body": ""
                            }
                        }, [n("b-card-header", {
                            staticClass: "p-1",
                            attrs: {
                                "header-tag": "header",
                                role: "tab"
                            }
                        }, [n("b-button", {
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
                        }, [n("span", [t._v(t._s(l.detail.question))]), t._v(" "), n("span", {
                            staticClass: "icon-arrow"
                        }, [n("img", {
                            attrs: {
                                src: c(720)
                            }
                        })])])], 1), t._v(" "), n("b-collapse", {
                            attrs: {
                                id: "accordion-" + i,
                                accordion: "my-accordion",
                                role: "tabpanel"
                            }
                        }, [n("b-card-body", [n("b-card-text", [n("span", {
                            domProps: {
                                innerHTML: t._s(l.detail.answer)
                            }
                        })])], 1)], 1)], 1)], 1)]) : t._e()
                    })), 0)])])])])
                }), l, !1, null, "6f5e986a", null);
            n.default = component.exports
        },
        735: function(t, n, c) {
            t.exports = c.p + "img/check.0574598.svg"
        },
        747: function(t, n, c) {
            var content = c(807);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [
                    [t.i, content, ""]
                ]),
                content.locals && (t.exports = content.locals);
            (0,
                c(47).default)("62238681", content, !0, {
                sourceMap: !1
            })
        },
        789: function(t, n, c) {
            t.exports = c.p + "img/line.10eb5e1.svg"
        },
        790: function(t, n, c) {
            t.exports = c.p + "img/mission.0689cb2.jpeg"
        },
        791: function(t, n, c) {
            t.exports = c.p + "img/map.62fa323.png"
        },
        792: function(t, n, c) {
            t.exports = c.p + "img/image-event.085f9fa.png"
        },
        793: function(t, n, c) {
            t.exports = c.p + "img/step-register.ef665d9.svg"
        },
        794: function(t, n, c) {
            t.exports = c.p + "img/step-update.f462cfd.svg"
        },
        795: function(t, n, c) {
            t.exports = c.p + "img/step-medal.d739a44.svg"
        },
        796: function(t, n, c) {
            t.exports = c.p + "img/4-medal.bc58559.png"
        },
        797: function(t, n, c) {
            t.exports = c.p + "img/partner1.e00b1fe.svg"
        },
        798: function(t, n, c) {
            t.exports = c.p + "img/partner2.1a87c68.svg"
        },
        799: function(t, n, c) {
            t.exports = c.p + "img/partner3.7b02f74.svg"
        },
        800: function(t, n, c) {
            t.exports = c.p + "img/partner4.37cc625.svg"
        },
        801: function(t, n, c) {
            t.exports = c.p + "img/partner5.c0a1f94.svg"
        },
        802: function(t, n, c) {
            t.exports = c.p + "img/pharaoh-500.11b0fe8.png"
        },
        803: function(t, n, c) {
            t.exports = c.p + "img/fansipan-500.17adf21.png"
        },
        804: function(t, n, c) {
            t.exports = c.p + "img/everest-500.07ec315.png"
        },
        805: function(t, n, c) {
            t.exports = c.p + "img/fuji-500.d6d7922.png"
        },
        806: function(t, n, c) {
            "use strict";
            c(747)
        },
        807: function(t, n, c) {
            var l = c(46)(!1);
            l.push([t.i, ".mh-400[data-v-7b000d80]{min-height:400px}", ""]),
                t.exports = l
        },
        841: function(t, n, c) {
            "use strict";
            c.r(n);
            var l = [function() {
                    var t = this,
                        n = t._self._c;
                    return n("section", {
                        staticClass: "mission"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "wrap-mission"
                    }, [n("div", {
                        staticClass: "head-mission"
                    }, [n("span", {
                        staticClass: "ms1"
                    }, [t._v("inspire")]), t._v(" "), n("br"), t._v(" "), n("span", {
                        staticClass: "ms2"
                    }, [t._v("Trails")]), t._v(" "), n("br"), t._v(" "), n("span", {
                        staticClass: "line"
                    }, [n("img", {
                        attrs: {
                            src: c(789)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "content-mission"
                    }, [n("div", {
                        staticClass: "image-mission"
                    }, [n("img", {
                        attrs: {
                            src: c(790)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text-content-mission"
                    }, [n("p", [t._v("\n                    Với sứ mệnh tạo nên một cộng đồng mà mỗi người tham gia trở thành một Nhà truyền cảm hứng, Inspire\n                    Trails là nền tảng cung cấp thử thách thể lực trực tuyến với mục đích khơi dậy động lực chinh phục\n                    những cung trails nổi tiếng trên thế giới.\n                  ")]), t._v(" "), n("p", [t._v("\n                    Bạn chỉ cần kết nối các ứng dụng quản lý hoạt động thể lực yêu thích của mình hoặc ghi lại khoảng\n                    cách theo cách thủ công. Sau khi hoàn thành thử thách và gửi kết quả trên ứng dụng, bạn sẽ ghi tên\n                    mình vào bảng thành tích nổi bật tại trang web của “Những nhà truyền cảm hứng”. Mọi hoạt động như\n                    chạy bộ, bơi, đạp xe hoặc đi bộ dốc đều được Inspire Trails khuyến khích sử dụng.\n                  ")])]), t._v(" "), n("div", {
                        staticClass: "text-title"
                    }, [t._v("\n                  HỆ THỐNG NHỮNG CUNG TRAIL CỦA\n                  INSPIRE TRAILS\n                ")]), t._v(" "), n("div", {
                        staticClass: "text-content-mission"
                    }, [n("p", [t._v("\n                    Tham vọng của những Nhà chinh phục không dậm chân tại chỗ, Inspire Trails cũng vậy. Chúng tôi sẽ\n                    liên tục mở đường và tìm kiếm những cung mới để bạn bổ sung vào bộ sưu tập Nhà Chinh Phục của mình.\n                    Chia sẻ những câu chuyện truyền cảm hứng cho những nhà vận động đích thực. Hãy chờ đợi những cung\n                    trails nổi tiếng và trở thành “Nhà truyền cảm hứng” của Inspire Trails ngay hôm nay.\n                  ")])])])])])])])])
                }, function() {
                    var t = this._self._c;
                    return t("section", {
                        staticClass: "map"
                    }, [t("div", {
                        staticClass: "container-fluid"
                    }, [t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [t("img", {
                        attrs: {
                            src: c(791)
                        }
                    })])])])])
                }, function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "image-intro"
                    }, [n("div", {
                        staticClass: "under-image"
                    }, [n("div", {
                        staticClass: "img-event"
                    }, [n("img", {
                        attrs: {
                            src: c(792)
                        }
                    })])])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "title-event"
                    }, [t._v("\n                    CHỨNG DANH "), n("br"), t._v("\n                    NHÀ CHINH PHỤC\n                  ")]), t._v(" "), n("div", {
                        staticClass: "description-event"
                    }, [t._v("\n                    Với mỗi chặng Chinh Phục thành công, bạn sẽ nhận được huy chương được thiết kế vô cùng độc đáo kèm phần quà tương ứng với nổ lực của bản thân.\n                  ")])])])
                }, function() {
                    var t = this,
                        n = t._self._c;
                    return n("section", {
                        staticClass: "step-to-start"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "title-box"
                    }, [t._v("\n              3 BƯỚC ĐƠN GIẢN ĐỂ BẮT ĐẦU\n            ")]), t._v(" "), n("div", {
                        staticClass: "content-step-to-start"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [n("div", {
                        staticClass: "item-step"
                    }, [n("div", {
                        staticClass: "image-icon-step"
                    }, [n("img", {
                        attrs: {
                            src: c(793)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title-step"
                    }, [t._v("\n                      Bước 1 - Đăng ký\n                    ")]), t._v(" "), n("div", {
                        staticClass: "description-step"
                    }, [t._v("\n                      Chọn cung trail bạn muốn chinh phục, và đăng ký tham gia thử thách. Tạo tài khoản trên Inspire\n                      Trails và liên kết tài khoản STRAVA của bạn theo hướng dẫn.\n                    ")])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [n("div", {
                        staticClass: "item-step"
                    }, [n("div", {
                        staticClass: "image-icon-step"
                    }, [n("img", {
                        attrs: {
                            src: c(794)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title-step"
                    }, [t._v("\n                      Bước 2 - Cập nhật\n                    ")]), t._v(" "), n("div", {
                        staticClass: "description-step"
                    }, [t._v("\n                      Vượt qua thử thách bằng cách hoàn thành mục tiêu trong thời gian có sẵn. Mọi hoạt động và chỉ số\n                      của bạn sẽ được hệ thống tự động cập nhật lên trang kết quả.\n                    ")])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                    }, [n("div", {
                        staticClass: "item-step"
                    }, [n("div", {
                        staticClass: "image-icon-step"
                    }, [n("img", {
                        attrs: {
                            src: c(795)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title-step"
                    }, [t._v("\n                      Bước 3 - Nhận kỷ niệm thử thách\n                    ")]), t._v(" "), n("div", {
                        staticClass: "description-step"
                    }, [t._v("\n                      Kết thúc thử thách để nhận ngay một chiếc huy chương kỷ niệm thành tích và cảm ơn bạn đã đóng góp\n                      một phần vào quỹ Trồng Cây Xanh của Inspire Trails.\n                    ")])])])])])])])])])
                }, function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "title-box"
                    }, [t._v("\n              NHẬN NGAY HUY CHƯƠNG "), n("br"), t._v("\n              và nhiều quà tặng hấp dẫn khác\n            ")])])])
                }, function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "image-intro-medal"
                    }, [n("img", {
                        attrs: {
                            src: c(796)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                    }, [n("div", {
                        staticClass: "content-intro-medal"
                    }, [t._v("\n              Inspire Trails sẽ gửi cho bạn một huy chương chứng nhận nhà chinh phục sau khi bạn hoàn thành thử thách.\n              Mỗi huy chương được lấy cảm hứng từ văn hóa đặc trưng của những cung đường nổi tiếng, là một câu chuyện\n              chúng tôi góp phần khơi dậy nguồn cảm hứng chinh phục thực tế bên trong bạn.\n              "), n("ul", {
                        staticClass: "list-intro"
                    }, [n("li", [n("span", {
                        staticClass: "icon-check"
                    }, [n("img", {
                        attrs: {
                            src: c(735)
                        }
                    })]), t._v(" "), n("span", [t._v("Huy chương đặc trưng với mức độ hoàn thiện cao cấp")])]), t._v(" "), n("li", [n("span", {
                        staticClass: "icon-check"
                    }, [n("img", {
                        attrs: {
                            src: c(735)
                        }
                    })]), t._v(" "), n("span", [t._v('Bổ sung thành tích vào bộ sưu tầm "Nhà chinh phục" của bạn')])]), t._v(" "), n("li", [n("span", {
                        staticClass: "icon-check"
                    }, [n("img", {
                        attrs: {
                            src: c(735)
                        }
                    })]), t._v(" "), n("span", [t._v("Câu chuyện trên những chiếc postcard gửi đến liên tục suốt quá trình bạn chinh phục thử thách")])])])])])])
                }, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [t("div", {
                        staticClass: "title-box"
                    }, [this._v("\n              Đối tác của inspire trails\n            ")])])])
                }, function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "wrap-partner"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
                    }, [n("div", {
                        staticClass: "item-partner"
                    }, [n("img", {
                        attrs: {
                            src: c(797)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
                    }, [n("div", {
                        staticClass: "item-partner"
                    }, [n("img", {
                        attrs: {
                            src: c(798)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
                    }, [n("div", {
                        staticClass: "item-partner"
                    }, [n("img", {
                        attrs: {
                            src: c(799)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
                    }, [n("div", {
                        staticClass: "item-partner"
                    }, [n("img", {
                        attrs: {
                            src: c(800)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
                    }, [n("div", {
                        staticClass: "item-partner"
                    }, [n("img", {
                        attrs: {
                            src: c(801)
                        }
                    })])])])])])])
                }],
                e = c(10),
                o = (c(41),
                    c(743)),
                r = c.n(o),
                h = (c(744),
                    c(745),
                    c(570)),
                v = c(727),
                d = c(802),
                m = c.n(d),
                C = c(803),
                _ = c.n(C),
                f = c(804),
                x = c.n(f),
                y = c(805),
                w = c.n(y),
                k = {
                    name: "IndexPage",
                    middleware: function(t) {
                        t.$gtm.push({
                            event: "test event"
                        })
                    },
                    auth: !1,
                    components: {
                        Loading: h.default,
                        GlobalComponent: v.default,
                        VueSlickCarousel: r.a
                    },
                    data: function() {
                        return {
                            title: "Inspire Trails - InspireTrails.life",
                            loadingPage: !0,
                            banners: [{
                                src: m.a
                            }, {
                                src: _.a
                            }, {
                                src: x.a
                            }, {
                                src: w.a
                            }],
                            challenges: []
                        }
                    },
                    head: function() {
                        return {
                            title: this.title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Home page description"
                            }]
                        }
                    },
                    computed: {
                        userInfo: function() {
                            return this.$auth.user
                        }
                    },
                    mounted: function() {
                        this.getListChallenge()
                    },
                    methods: {
                        scrollToJoin: function() {
                            document.getElementById("events").scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        },
                        getListChallenge: function() {
                            var t = this;
                            return Object(e.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return t.loadingPage = !0,
                                                    n.next = 3,
                                                    t.$axios.get("/master/challenges/list").then((function(n) {
                                                        t.loadingPage = !1,
                                                            t.challenges = n.data.data,
                                                            console.log(1234, t.challenges)
                                                    })).catch((function() {
                                                        t.loadingPage = !1
                                                    }));
                                            case 3:
                                            case "end":
                                                return n.stop()
                                        }
                                }), n)
                            })))()
                        },
                        goRegisterChallenge: function(t) {
                            var n = this;
                            return Object(e.a)(regeneratorRuntime.mark((function c() {
                                var path;
                                return regeneratorRuntime.wrap((function(c) {
                                    for (;;)
                                        switch (c.prev = c.next) {
                                            case 0:
                                                return n.challengeChoose = t,
                                                    path = "",
                                                    7 === n.challengeChoose.category_challenge_id ? path = "/challenges/chinh-phuc-fansipan" : 4 === n.challengeChoose.category_challenge_id ? path = "/challenges/thung-lung-cua-pharaoh" : 3 === n.challengeChoose.category_challenge_id ? path = "/challenges/chinh-phuc-fuji-3-759m" : 5 === n.challengeChoose.category_challenge_id ? path = "/challenges/chinh-phuc-everest" : 10 === n.challengeChoose.category_challenge_id && (path = "/challenges/van-ly-truong-thanh"),
                                                    c.abrupt("return", n.$router.push({
                                                        path: path,
                                                        query: {
                                                            scroll: !0
                                                        }
                                                    }));
                                            case 4:
                                            case "end":
                                                return c.stop()
                                        }
                                }), c)
                            })))()
                        }
                    }
                },
                N = (c(806),
                    c(22)),
                component = Object(N.a)(k, (function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "mh-400"
                    }, [n("div", {
                        staticClass: "wrap-index"
                    }, [n("section", {
                        staticClass: "wrapper-slider"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "wrap-slider"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7"
                    }, [n("div", {
                        staticClass: "intro-challenge"
                    }, [n("div", {
                        staticClass: "title-introl-challenge"
                    }, [t._v("\n                  THỬ THÁCH TRỰC TUYẾN\n                ")]), t._v(" "), n("div", {
                        staticClass: "description-introl-challenge"
                    }, [t._v("\n                  KHƠI DẬY CẢM HỨNG CHINH PHỤC\n                ")]), t._v(" "), n("div", {
                        staticClass: "wrap-btn text-left"
                    }, [n("a", {
                        staticClass: "btn btn-now",
                        on: {
                            click: t.scrollToJoin
                        }
                    }, [t._v("Tham gia ngay")])])])]), t._v(" "), n("div", {
                        staticClass: "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
                    }, [n("div", {
                        staticClass: "wrap-medal"
                    }, [n("VueSlickCarousel", {
                        attrs: {
                            arrows: !0,
                            dots: !0
                        }
                    }, t._l(t.banners, (function(t, c) {
                        return n("div", {
                            key: c,
                            staticClass: "banner"
                        }, [n("img", {
                            attrs: {
                                src: t.src
                            }
                        })])
                    })), 0)], 1)])])])])]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), n("section", {
                        staticClass: "events position-relative",
                        attrs: {
                            id: "events"
                        }
                    }, [t.loadingPage ? n("Loading") : t._e(), t._v(" "), t.loadingPage ? t._e() : n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "intro-events"
                    }, [t._m(2), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    }, [n("div", {
                        staticClass: "list-challenges"
                    }, [n("div", {
                        staticClass: "row"
                    }, t._l(t.challenges, (function(c, i) {
                        return t.challenges.length > 0 ? n("div", {
                            key: i,
                            staticClass: "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                        }, [n("div", {
                            staticClass: "item-challenge"
                        }, [n("a", {
                            staticClass: "color-white",
                            on: {
                                click: function(n) {
                                    return t.goRegisterChallenge(c)
                                }
                            }
                        }, [n("div", {
                            staticClass: "image-challenge"
                        }, [n("img", {
                            attrs: {
                                src: c.thumbnail_avatar
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "note-challenge"
                        }, [n("span", [t._v(t._s(c.distance) + " km/ " + t._s(c.date_completed) + " ngày")])]), t._v(" "), n("div", {
                            staticClass: "title-challenge"
                        }, [t._v("\n                              " + t._s(c.title) + "\n                            ")])])])]) : t._e()
                    })), 0)])])])])])])])], 1), t._v(" "), t._m(3), t._v(" "), n("section", {
                        staticClass: "intro-medal"
                    }, [n("div", {
                        staticClass: "container"
                    }, [t._m(4), t._v(" "), t._m(5), t._v(" "), n("GlobalComponent"), t._v(" "), t._m(6), t._v(" "), t._m(7)], 1)])])])
                }), l, !1, null, "7b000d80", null);
            n.default = component.exports;
            installComponents(component, {
                Loading: c(570).default
            })
        }
    }
]);