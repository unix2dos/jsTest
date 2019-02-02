/* 2018-10-11 16:36:24 */
!function(t, a) {
    var r = 1e4
      , g_moduleConfig = {
        uabModule: {
            stable: ["g.alicdn.com/AWSC/uab/114.js"],
            grey: ["g.alicdn.com/AWSC/uab/115.js"],
            ratio: 10000
        },
        umidPCModule: {
            stable: ["AWSC/WebUMID/1.68.0/um.js"],
            grey: ["AWSC/WebUMID/1.69.2/um.js"],
            ratio: 9999
        },
        ncPCModule: {
            stable: ["js/nc/60.js"],
            grey: ["js/nc/60.js"],
            ratio: 1e4
        },
        ncH5Module: {
            stable: ["js/nc/60.js"],
            grey: ["js/nc/60.js"],
            ratio: 1e4
        }
    }
      , s = [{
        name: "umidPCModule",
        features: ["umpc", "um", "umh5"],
        depends: [],
        sync: !1
    }, {
        name: "uabModule",
        features: ["uab"],
        depends: [],
        sync: !1
    }, {
        name: "nsModule",
        features: ["ns"],
        depends: [],
        sync: !1
    }, {
        name: "ncPCModule",
        features: ["ncPC", "scPC"],
        depends: ["uab", "umpc"],
        sync: !0
    }, {
        name: "ncH5Module",
        features: ["ncH5", "scH5"],
        depends: ["uab", "umh5"],
        sync: !0
    }];
    function c(a, s) {
        var c = "AWSC_SPECIFY_" + a.toUpperCase() + "_ADDRESSES";
        if (t[c])
            return t[c];
        var v = [];
        for (var p in g_moduleConfig)
            if (g_moduleConfig.hasOwnProperty(p) && p === a) {
                var moduleConfig = g_moduleConfig[p];
                v = Math.ceil(Math.random() * r) <= moduleConfig.ratio ? moduleConfig.grey : moduleConfig.stable;
                for (var h = (new Date).getDate(), b = 0; b < v.length; b++)
                    v[b] = (s ? "//" + s + "/" : w) + v[b] + "?d=" + h;
                return v
            }
    }
    var v = []
      , p = "loading"
      , h = "loaded"
      , b = "timeout"
      , y = "unexpected"
      , j = "no such feature"
      , S = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$")
      , w = M(k());
    function M(t) {
        var a = "//g.alicdn.com/";
        if (!t)
            return a;
        if (/aliexpress/.test(location.href))
            return "//aeis.alicdn.com/";
        var r = S.exec(t);
        return r ? "//" + r[3] + (r[4] ? ":" + r[4] : "") + "/" : a
    }
    function k() {
        for (var t = document.getElementsByTagName("script"), i = 0; i < t.length; i++) {
            var a = t[i]
              , r = a.hasAttribute ? a.src : a.getAttribute("src", 4);
            if (/\/awsc\.js/.test(r))
                return r
        }
    }
    function A(t) {
        for (var a = void 0, r = 0; r < s.length; r++) {
            for (var c = s[r], v = 0; v < c.features.length; v++)
                if (c.features[v] === t) {
                    a = c;
                    break
                }
            if (a)
                break
        }
        return a
    }
    function W(t) {
        for (var a = 0; a < v.length; a++) {
            var r = v[a];
            if (r.name === t)
                return r
        }
    }
    function I(t) {
        for (var a = void 0, r = 0; r < s.length; r++) {
            var c = s[r];
            if (c.name === t) {
                a = c;
                break
            }
            if (a)
                break
        }
        return a
    }
    function x(t) {
        return /http/.test(location.protocol) || (t = "https:" + t),
        t
    }
    function E(t, r, s) {
        if (s)
            for (var c = 0; c < t.length; c++) {
                var v = t[c];
                v = x(v),
                a.write("<script src=" + v + "></script>")
            }
        else
            for (var c = 0; c < t.length; c++) {
                var v = t[c];
                v = x(v);
                var p = a.createElement("script");
                p.async = !1,
                p.src = v,
                p.id = r;
                var m = a.getElementsByTagName("script")[0];
                m && m.parentNode ? m.parentNode.insertBefore(p, m) : (m = a.body || a.head,
                m && m.appendChild(p))
            }
    }
    function P(a, r, s) {
        var c = "//acjs.aliyun.com/error?v=" + a + "&e=" + encodeURIComponent(r) + "&stack=" + encodeURIComponent(s);
        c = x(c);
        var v = new Image
          , p = "_awsc_img_" + Math.floor(1e6 * Math.random());
        t[p] = v,
        v.onload = v.onerror = function() {
            try {
                delete t[p]
            } catch (e) {
                t[p] = null
            }
        }
        ,
        v.src = c
    }
    function T(t, a) {
        Math.random() < 1e-4 && P("awsc_state", "feature=" + t.name + "&state=" + t.state + "&href=" + encodeURIComponent(location.href));
        for (var r = void 0; r = t.callbacks.shift(); )
            try {
                r(t.state, t.exportObj)
            } catch (e) {
                if (a)
                    throw e;
                P(t.name, e.message, e.stack)
            }
    }
    function D(t, a, r) {
        var s = A(t);
        if (!s)
            return a && a(j),
            void 0;
        var h = r && r.cdn
          , y = r && r.sync
          , S = r && r.timeout || 5e3;
        if (0 !== s.depends.length)
            for (var w = 0; w < s.depends.length; w++) {
                var M = s.depends[w];
                r && (delete r.sync,
                delete r.timeout,
                delete r.cdn),
                U(M, void 0, r)
            }
        var k = {};
        if (k.module = s,
        k.name = t,
        k.state = p,
        k.callbacks = [],
        k.options = r,
        a && k.callbacks.push(a),
        k.timeoutTimer = setTimeout(function() {
            k.state = b,
            T(k, r && r.throwExceptionInCallback)
        }, S),
        v.push(k),
        !s.moduleLoadStatus) {
            var W = s.sync;
            y && (W = y);
            var I = c(s.name, h);
            E(I, "AWSC_" + s.name, W)
        }
        s.moduleLoadStatus = p
    }
    function U(t, a, r) {
        var s = W(t);
        return s ? (s.state === h || s.state === b ? a && a(s.state, s.exportObj) : s.state === p ? a && s.callbacks.push(a) : void 0,
        void 0) : (D(t, a, r),
        void 0)
    }
    function O(t, a, r) {
        var s = !1;
        try {
            var c = I(t);
            c || void 0,
            c.moduleLoadStatus = h;
            for (var y = void 0, j = 0; j < v.length; j++) {
                var S = v[j];
                S.module === c && S.name === a && (s = S.options && S.options.throwExceptionInCallback,
                y = S,
                clearTimeout(y.timeoutTimer),
                delete y.timeoutTimer,
                y.exportObj = r,
                S.state === p || S.state === b ? (y.state = h,
                T(y, s)) : void 0)
            }
            y || (y = {},
            y.module = c,
            y.name = a,
            y.state = h,
            y.exportObj = r,
            y.callbacks = [],
            v.push(y))
        } catch (e) {
            if (s)
                throw e;
            P("awsc_error", e.message, e.stack)
        }
    }
    function R() {
        t.AWSC || (t.AWSC = {},
        t.AWSC.use = U,
        t.AWSCInner = {},
        t.AWSCInner.register = O)
    }
    R()
}(window, document);

