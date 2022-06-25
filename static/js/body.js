! function () {
    var d, p, h, t, n;
    d = jQuery, p = window, h = document, n = { navAnchor: "js-anchor", navLink: "js-link", navIcon: "js-navcontrol", navClosed: "is-closed", activeLink: "is-selected", state: "closed" }, (t = function (e, t) { this.options = d.extend({}, n, t), this.element = e, this.init() }).prototype.init = function () {
        var e, t, s, l, u, n, r, c, f, i, o;
        for (l = d(this.element), e = d("." + this.options.navAnchor), s = d("." + this.options.navLink), t = d("." + this.options.navIcon), r = this.options.state, o = l.show().height(), c = l.show().outerHeight(!0), u = [], f = void 0, r && "closed" !== r ? t.show() : (l.show().toggleClass(this.options.navClosed), t.show().addClass(this.options.navClosed)), t.on("click", d.proxy(function (e) { e.preventDefault(), l.add(t).toggleClass(this.options.navClosed) }, this)), e.on("click", function () { var e; if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname && (e = (e = d(this.hash)).length ? e : d("[name=" + this.hash.slice(1) + "]")).length) return d("html,body").animate({ scrollTop: e.offset().top - o }, 1e3), !1 }), f = 0; f < s.length;) i = s[f], n = d(i).attr("href"), u.push(n), f += 1;
        d('body').imagesLoaded({ background: true }, function () {
            $('body').addClass('loaded');
            var e, t, n, r, i, o, a, w, y, z;
            for (a = d(p).scrollTop(), o = d(p).height(), t = d(h).height(), e = d("section").eq(0), f = 0; f < u.length; f++) {
                i = u[f], r = d(i).offset().top - c, n = d(i).height();
                if (r - 0.5 * o <= a && a < r + n) {
                    d(i).find(".animate__animated").each(function () {
                        z = $(this).offset().top - c, y = d(this).height();
                        if (z - 0.8 * o <= a && a < z + y) {
                            window.matchMedia("(max-width: 800px)").matches ? w = '0s' : w = $(this).attr("animation-delay");
                            $(this).css("animation", $(this).attr("animation-style") + " " + $(this).attr("animation-duration") + " forwards " + w + " ease-in-out");
                        }
                    });
                }
            }
        })
        d(p).on("scroll", d.proxy(function () {
            var e, t, n, r, i, o, a, y, z;
            for (a = d(p).scrollTop(), o = d(p).height(), t = d(h).height(), e = d("section").eq(0), f = 0; f < u.length; f++) {
                i = u[f], r = d(i).offset().top - c, n = d(i).height();
                if (r - 0.5 * o <= a && a < r + n) {
                    s.filter("[href='" + i + "']").addClass(this.options.activeLink);
                    d(i).find(".animate__animated").each(function () {
                        z = $(this).offset().top - c, y = d(this).height();
                        if (z - 0.8 * o <= a && a < z + y) {
                            window.matchMedia("(max-width: 800px)").matches ? w = '0s' : w = $(this).attr("animation-delay");
                            $(this).css("animation", $(this).attr("animation-style") + " " + $(this).attr("animation-duration") + " forwards " + w + " ease-in-out");
                        }
                    });
                } else {
                    s.filter("[href='" + i + "']").removeClass(this.options.activeLink);
                }
            }
            a + o === t && (l.find("li").filter(":last-child").find(s).hasClass(this.options.activeLink) || (s.filter("." + this.options.activeLink).removeClass(this.options.activeLink), l.find("li").filter(":last-child").find(s).addClass(this.options.activeLink))), a < e.offset().top && (l.find("li").filter(":first-child").find(s).hasClass(this.options.activeLink) || (s.filter("." + this.options.activeLink).removeClass(this.options.activeLink), l.find("li").filter(":first-child").find(s).addClass(this.options.activeLink)));
        }, this))
    }, d.fn.navKit = function (e) { return this.each(function () { new t(this, e) }) }
}.call(this),
    function () { $(function () { $(".js-nav").navKit({ state: "closed" }) }) }.call(this);