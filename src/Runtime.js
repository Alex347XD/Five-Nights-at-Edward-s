var wa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(z, V, n) {
        if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
        z != Array.prototype && z != Object.prototype && (z[V] = n.value)
    },
    xa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function Da() {
    Da = function() {};
    xa.Symbol || (xa.Symbol = Ia)
}
var Ja = 0;

function Ia(z) {
    return "jscomp_symbol_" + (z || "") + Ja++
}

function Ta() {
    Da();
    var z = xa.Symbol.iterator;
    z || (z = xa.Symbol.iterator = xa.Symbol("iterator"));
    "function" != typeof Array.prototype[z] && wa(Array.prototype, z, {
        configurable: !0,
        writable: !0,
        value: function() {
            return cb(this)
        }
    });
    Ta = function() {}
}

function cb(z) {
    var V = 0;
    return db(function() {
        return V < z.length ? {
            done: !1,
            value: z[V++]
        } : {
            done: !0
        }
    })
}

function db(z) {
    Ta();
    z = {
        next: z
    };
    z[xa.Symbol.iterator] = function() {
        return this
    };
    return z
}

function sb(z) {
    Ta();
    var V = z[Symbol.iterator];
    return V ? V.call(z) : cb(z)
}

function tb(z, V) {
    Ta();
    z instanceof String && (z += "");
    var n = 0,
        O = {
            next: function() {
                if (n < z.length) {
                    var H = n++;
                    return {
                        value: V(H, z[H]),
                        done: !1
                    }
                }
                O.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return O.next()
            }
        };
    O[Symbol.iterator] = function() {
        return O
    };
    return O
}

function De(z, V) {
    if (V) {
        for (var n = xa, O = z.split("."), H = 0; H < O.length - 1; H++) {
            var N = O[H];
            N in n || (n[N] = {});
            n = n[N]
        }
        O = O[O.length - 1];
        H = n[O];
        N = V(H);
        N != H && null != N && wa(n, O, {
            configurable: !0,
            writable: !0,
            value: N
        })
    }
}
De("Array.prototype.values", function(z) {
    return z ? z : function() {
        return tb(this, function(z, n) {
            return n
        })
    }
});

function Ee(z, V) {
    return Object.prototype.hasOwnProperty.call(z, V)
}
De("WeakMap", function(z) {
    function V(n) {
        this.fo = (N += Math.random() + 1).toString();
        if (n) {
            Da();
            Ta();
            n = sb(n);
            for (var G; !(G = n.next()).done;) G = G.value, this.set(G[0], G[1])
        }
    }

    function n(n) {
        Ee(n, H) || wa(n, H, {
            value: {}
        })
    }

    function O(z) {
        var G = Object[z];
        G && (Object[z] = function(z) {
            n(z);
            return G(z)
        })
    }
    if (function() {
            if (!z || !Object.seal) return !1;
            try {
                var n = Object.seal({}),
                    G = Object.seal({}),
                    H = new z([
                        [n, 2],
                        [G, 3]
                    ]);
                if (2 != H.get(n) || 3 != H.get(G)) return !1;
                H["delete"](n);
                H.set(G, 4);
                return !H.has(n) && 4 == H.get(G)
            } catch (la) {
                return !1
            }
        }()) return z;
    var H = "$jscomp_hidden_" + Math.random().toString().substring(2);
    O("freeze");
    O("preventExtensions");
    O("seal");
    var N = 0;
    V.prototype.set = function(z, G) {
        n(z);
        if (!Ee(z, H)) throw Error("WeakMap key fail: " + z);
        z[H][this.fo] = G;
        return this
    };
    V.prototype.get = function(n) {
        return Ee(n, H) ? n[H][this.fo] : void 0
    };
    V.prototype.has = function(n) {
        return Ee(n, H) && Ee(n[H], this.fo)
    };
    V.prototype["delete"] = function(n) {
        return Ee(n, H) && Ee(n[H], this.fo) ? delete n[H][this.fo] : !1
    };
    return V
});
De("Map", function(z) {
    function V() {
        var n = {};
        return n.hi = n.next = n.head = n
    }

    function n(n, z) {
        var G = n.Mh;
        return db(function() {
            if (G) {
                for (; G.head != n.Mh;) G = G.hi;
                for (; G.next != G.head;) return G = G.next, {
                    done: !1,
                    value: z(G)
                };
                G = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function O(n, z) {
        var G;
        G = z && typeof z;
        "object" == G || "function" == G ? N.has(z) ? G = N.get(z) : (G = "" + ++aa, N.set(z, G)) : G = "p_" + z;
        var H = n.Hn[G];
        if (H && Ee(n.Hn, G))
            for (var O = 0; O < H.length; O++) {
                var V = H[O];
                if (z !== z && V.key !== V.key || z === V.key) return {
                    id: G,
                    list: H,
                    index: O,
                    ce: V
                }
            }
        return {
            id: G,
            list: H,
            index: -1,
            ce: void 0
        }
    }

    function H(n) {
        this.Hn = {};
        this.Mh = V();
        this.size = 0;
        if (n) {
            n = sb(n);
            for (var G; !(G = n.next()).done;) G = G.value, this.set(G[0], G[1])
        }
    }
    if (function() {
            if (!z || !z.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var n = Object.seal({
                        x: 4
                    }),
                    H = new z(sb([
                        [n, "s"]
                    ]));
                if ("s" != H.get(n) || 1 != H.size || H.get({
                        x: 4
                    }) || H.set({
                        x: 4
                    }, "t") != H || 2 != H.size) return !1;
                var N = H.entries(),
                    O = N.next();
                if (O.done || O.value[0] != n || "s" != O.value[1]) return !1;
                O = N.next();
                return O.done || 4 != O.value[0].x || "t" != O.value[1] || !N.next().done ? !1 : !0
            } catch (Ka) {
                return !1
            }
        }()) return z;
    Da();
    Ta();
    var N = new WeakMap;
    H.prototype.set = function(n, z) {
        var G = O(this, n);
        G.list || (G.list = this.Hn[G.id] = []);
        G.ce ? G.ce.value = z : (G.ce = {
            next: this.Mh,
            hi: this.Mh.hi,
            head: this.Mh,
            key: n,
            value: z
        }, G.list.push(G.ce), this.Mh.hi.next = G.ce, this.Mh.hi = G.ce, this.size++);
        return this
    };
    H.prototype["delete"] = function(n) {
        n = O(this, n);
        return n.ce && n.list ? (n.list.splice(n.index, 1), n.list.length || delete this.Hn[n.id], n.ce.hi.next = n.ce.next, n.ce.next.hi = n.ce.hi, n.ce.head = null, this.size--, !0) : !1
    };
    H.prototype.clear = function() {
        this.Hn = {};
        this.Mh = this.Mh.hi = V();
        this.size = 0
    };
    H.prototype.has = function(n) {
        return !!O(this, n).ce
    };
    H.prototype.get = function(n) {
        return (n = O(this, n).ce) && n.value
    };
    H.prototype.entries = function() {
        return n(this, function(n) {
            return [n.key, n.value]
        })
    };
    H.prototype.keys = function() {
        return n(this, function(n) {
            return n.key
        })
    };
    H.prototype.values = function() {
        return n(this, function(n) {
            return n.value
        })
    };
    H.prototype.forEach = function(n, z) {
        for (var H = this.entries(), G; !(G = H.next()).done;) G = G.value, n.call(z, G[1], G[0], this)
    };
    H.prototype[Symbol.iterator] = H.prototype.entries;
    var aa = 0;
    return H
});
De("Array.prototype.keys", function(z) {
    return z ? z : function() {
        return tb(this, function(z) {
            return z
        })
    }
});
De("Array.prototype.entries", function(z) {
    return z ? z : function() {
        return tb(this, function(z, n) {
            return [z, n]
        })
    }
});
De("Array.prototype.fill", function(z) {
    return z ? z : function(z, n, O) {
        var H = this.length || 0;
        0 > n && (n = Math.max(0, H + n));
        if (null == O || O > H) O = H;
        O = Number(O);
        0 > O && (O = Math.max(0, H + O));
        for (n = Number(n || 0); n < O; n++) this[n] = z;
        return this
    }
});
window.Runtime = function(z, V) {
    function n(a, b) {
        this.files = {};
        this.root = "";
        a && this.load(a, b)
    }

    function O(a, b, c) {
        this.x = a;
        this.y = b;
        this.text = c
    }

    function H() {
        this.td = "";
        this.offset = this.S = 0;
        this.sd = !1
    }

    function N() {
        this.Gd = []
    }

    function aa(a, b, c, d) {
        this.left = a ? a : 0;
        this.top = b ? b : 0;
        this.right = c ? c : 0;
        this.bottom = d ? d : 0
    }

    function G() {
        this.y = this.x = 0
    }

    function eb() {
        this.kc = 12;
        this.Je = 400;
        this.Ie = 0;
        this.He = "Arial";
        this.Yi = !1
    }

    function la(a, b) {
        this.app = a;
        this.Ka = b;
        this.ab = new N;
        this.pk = null
    }

    function ma(a, b, c) {
        this.app = a;
        this.width = b;
        this.height = c;
        this.canvas = document.createElement("canvas");
        this.canvas.width = b;
        this.canvas.height = c;
        this.Zd = this.canvas.getContext("2d")
    }

    function Ka() {
        this.WI = !!window.opr && !!opr.LP || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
        this.VI = "undefined" !== typeof InstallTrigger;
        this.YI = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
        this.ZA = !!document.documentMode;
        this.SI = !this.ZA && !!window.StyleMedia;
        (this.TI = (this.XA = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) && -1 != navigator.userAgent.indexOf("Edg")) || this.XA || this.SI || this.ZA || this.VI || this.WI || this.YI || this.dD(Ka.CH);
        this.version = this.eD(navigator.userAgent) || this.eD(navigator.appVersion) || "Unknown version";
        this.dD(Ka.EH)
    }

    function ya() {
        this.Iu = null;
        this.height = this.width = 0;
        this.Gg = null;
        this.Ka = this.color = 0;
        this.gI = null;
        this.Qr = this.Av = this.QI = this.tA = this.Md = 0;
        this.Hu = null;
        this.Yi = !0
    }

    function X() {}

    function ub() {
        this.Ka = 0;
        this.name = null;
        this.index = 0
    }

    function ga() {}

    function vb() {}

    function wb() {}

    function xb() {}

    function yb() {}

    function zb() {}

    function Ab() {}

    function Bb() {}

    function Cb() {}

    function Db() {}

    function Eb() {}

    function Fb() {}

    function Gb() {}

    function Hb() {}

    function Ib() {}

    function Jb() {}

    function Kb() {}

    function Lb() {}

    function Mb() {}

    function Nb() {}

    function Ob() {}

    function Pb() {}

    function Qb() {}

    function Rb() {}

    function Sb() {}

    function Tb() {}

    function Ub() {}

    function Vb() {}

    function Wb() {}

    function Xb() {}

    function Yb() {}

    function Zb() {}

    function $b() {}

    function P() {}

    function ua() {}

    function ac() {}

    function P() {}

    function bc() {}

    function cc() {}

    function dc() {}

    function ec() {}

    function fc() {}

    function gc() {}

    function hc() {}

    function ic() {}

    function jc() {}

    function kc() {}

    function lc() {}

    function mc() {}

    function nc() {}

    function oc() {}

    function pc() {}

    function qc() {}

    function rc() {}

    function sc() {}

    function tc() {}

    function uc() {}

    function vc() {}

    function fb() {}

    function wc() {}

    function xc() {}

    function yc() {}

    function zc() {}

    function Ac() {}

    function ba() {}

    function gb() {}

    function va() {}

    function hb() {}

    function Bc() {}

    function Cc() {}

    function Dc() {}

    function Ec() {}

    function Fc() {}

    function Gc() {}

    function Hc() {}

    function Ic() {}

    function Jc() {}

    function Kc() {}

    function Lc() {}

    function Mc() {}

    function Nc() {}

    function Oc() {}

    function Pc() {}

    function Qc() {}

    function Rc() {}

    function Sc() {}

    function Tc() {}

    function Uc() {}

    function Vc() {}

    function Wc() {}

    function Xc() {}

    function Yc() {}

    function Zc() {}

    function ib() {
        ja.Rb.nJ()
    }

    function $c() {
        ja.Rb.sJ()
    }

    function l(a, b, c, d) {
        (this.bB = !0 === d) ? (this.canvas = a.canvas, this.Yr = a.Yr) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.Yr = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.Yr = a);
        a = this.Lu = a.Lu || document.createElement("div");
        a.appendChild(this.canvas);
        this.Yr.appendChild(a);
        a.style.overflow = "hidden";
        a.style.position = "relative";
        a.style.transform = "translateZ(0)";
        a.style.margin = "0";
        a.style.padding = "0";
        a.style.display = "block";
        a.style.boxSizing = "content-box";
        a.className = "MMFDiv";
        this.uA = this.vA = this.gv = null;
        this.am = 0;
        this.appName = this.hv = null;
        this.om = 0;
        this.qv = this.PA = null;
        this.xo = 0;
        this.yD = this.sc = this.zf = this.Sb = this.ca = this.tc = this.pv = null;
        this.eb = this.zD = 0;
        this.Un = this.Vn = this.wC = this.jp = this.mo = null;
        this.Ce = this.Eb = this.vx = 0;
        this.Ea = this.file = this.frame = null;
        this.Dw = this.Ew = this.Wk = 0;
        this.gi = this.H = null;
        this.Qv = !1;
        this.yA = this.Of = this.xA = this.zA = this.AA = this.ya = this.qa = this.Xn = this.Wn = this.kg = this.jg = 0;
        this.Sn = this.Fw = this.vC = null;
        this.Wf = this.Vf = this.BH = this.AH = this.Tn = 0;
        this.Qc = null;
        this.Oz = 0;
        this.cursor = "auto";
        this.ms = !1;
        this.vk = this.Sq = null;
        this.sd = !1;
        this.Ja = this.alpha = this.be = this.ae = this.Sz = this.Lj = this.Jj = 0;
        this.file = b;
        this.tj = "";
        this.path = c;
        b = c.lastIndexOf("/");
        0 <= b && (this.tj = c.substring(0, b + 1));
        this.Ag = 0;
        this.H = null;
        this.Nh = this.Oh = this.nd = 0;
        this.Gk = !1;
        this.Jb = [];
        this.No = -1;
        this.es = this.Zk = this.AC = this.CC = this.BC = this.zC = this.yC = 0;
        this.ig = this.od = this.zx = this.transition = null;
        this.yu = !1;
        this.mh = this.lh = this.Bf = null;
        this.ro = l.ek;
        this.Aa = null;
        this.MG = this.ku = this.ju = this.PG = this.OG = this.NG = this.vn = this.Rh = 0;
        this.qc = this.rc = 1;
        this.hasFocus = !0;
        this.lr = this.zu = !1;
        this.rv = this.fs = null;
        this.nr = -1;
        this.jo = null;
        this.io = 1E9;
        this.mr = null;
        0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.mr = window.location.href.substring(0, b + 6), this.nr = -1, this.io = 25));
        this.tg = !1;
        this.DH = 3;
        this.Gn = new N;
        this.Oq = new N;
        this.Mb = [];
        this.he = 0;
        this.Te = null;
        this.Vv = "Please touch the screen to start";
        this.fullScreen = !1;
        this.QD = "***version***";
        this.Fx = this.sp = 0;
        this.wz = -1
    }

    function Ua(a, b, c) {
        this.changedTouches = Array(1);
        this.changedTouches[0] = {
            pageX: a,
            pageY: b,
            target: c,
            identifier: l.fy
        }
    }

    function J(a) {
        this.app = a;
        this.l = null;
        this.dB = this.Xc = this.Nd = 0;
        this.sr = !1;
        this.Vb = 0;
        this.tr = null;
        this.ko = this.lo = 0;
        this.wA = null;
        this.xc = 0;
        this.On = this.Dd = this.Ya = null;
        this.iB = this.Ir = this.Iv = this.Hv = this.$i = this.Zi = this.Lg = 0;
        this.zd = this.yd = this.qo = this.bv = this.Qn = null;
        this.fm = this.Aa = this.he = 0
    }

    function Y(a) {
        this.app = a;
        this.Ua = null;
        this.uu = !1;
        this.bz = !0;
        this.yn = this.tp = null;
        this.lB = 0;
        this.qk = null;
        this.Su = !1;
        this.Ua = Array(Y.Wc);
        this.tp = Array(Y.Wc);
        this.yn = Array(Y.Wc);
        this.uu = this.bz = !0;
        var b;
        for (b = 0; b < Y.Wc; b++) this.Ua[b] = null, this.tp[b] = 100, this.yn[b] = !1;
        this.lB = 100;
        b = new Audio;
        var c = Array(4);
        c[0] = b.canPlayType("audio/ogg");
        c[1] = b.canPlayType("audio/x-m4a");
        c[2] = b.canPlayType("audio/mpeg");
        c[3] = b.canPlayType("audio/wav");
        for (b = this.Wv = this.Lw = 0; 4 > b; b++) "probably" == c[b] && (this.Lw |= 1 << b), "maybe" == c[b] && (this.Wv |= 1 << b);
        for (; null != a.Ea;) a = a.Ea;
        this.context = a.yD;
        this.Sl = a.zD;
        null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.Sl = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.Sl = 0), a.yD = this.context, a.zD = this.Sl)
    }

    function ad(a) {
        this.app = a
    }

    function bd(a) {
        this.app = a;
        this.Ev = !1;
        this.C = null;
        this.context = this.app.context;
        this.rf = this.app.BC;
        this.color = this.app.AC;
        this.ti = this.app.yC;
        0 > this.ti && (this.ti = this.app.qa / 2);
        this.ui = this.app.zC;
        0 > this.ui && (this.ui = this.app.ya / 2);
        this.size = this.app.CC;
        this.ww = 0;
        this.Iq = 25;
        this.Ne = 0;
        this.Gg = new Image;
        var b = this;
        this.Gg.onload = function() {
            b.Ev = !0
        };
        this.Gg.src = this.app.tj + "Preloader.png"
    }

    function cd(a) {
        this.app = a;
        this.context = this.app.context;
        this.width = 100;
        this.height = 12;
        this.position = 0;
        this.aH = 10526880;
        this.borderColor = 8421504;
        this.bH = 0;
        this.rect = new aa;
        this.rect.left = this.app.qa / 2 - this.width / 2;
        this.rect.top = this.app.ya / 2 - this.height / 2;
        this.rect.right = this.rect.left + this.width;
        this.rect.bottom = this.rect.top + this.height;
        this.reset()
    }

    function dd(a) {
        this.app = a;
        this.Ev = !1;
        this.Oc = new Ea;
        this.C = new l(this.app, this.app.file, this.app.path, !0);
        this.C.hD(this.app, this.app.es, 0, this.Oc, this.app.qa, this.app.ya);
        this.C.digest();
        this.C.Qv = !1;
        this.C.Ej = !1;
        this.C.Ja &= ~l.wi;
        this.C.ux();
        this.C.Qs(0, 0);
        this.C.mp();
        this.Oc.x = this.app.qa / 2 - this.C.frame.Nd / 2;
        this.Oc.y = this.app.ya / 2 - this.C.frame.Xc / 2;
        this.fL = 0 != (this.app.Ja & l.YD);
        this.app.Jb.push(this.C);
        this.Vl = 0
    }

    function t(a) {
        this.app = a;
        this.rA = this.qA = this.ee = this.Kd = this.rr = this.jc = null;
        this.bc = Array(3);
        this.cc = Array(3);
        this.Ka = this.Aa = this.Sf = this.Rf = 0;
        this.touches = Array(3);
        this.wu = !1;
        this.$A = !0;
        this.df = this.Hg = this.cB = 0
    }

    function k(a) {
        this.h = a;
        this.A = null;
        this.dh = this.ob = this.Um = this.lx = this.zb = this.bd = this.Rc = this.kx = this.vf = 0;
        this.i = this.W = null;
        this.wf = this.Zo = this.ap = this.nl = this.ri = this.pc = this.jx = this.pi = this.$o = this.ol = this.ka = this.ia = this.Vd = this.Ud = 0;
        this.ys = this.cx = this.zs = null;
        this.Fs = this.dx = this.Om = this.Km = this.Qm = this.Mm = this.Nm = this.Jm = this.Pm = this.Lm = this.kl = this.ue = this.Im = this.Hm = this.jl = this.il = this.UC = this.dg = this.wj = this.vj = this.Wo = this.gl = 0;
        this.ll = null;
        this.$ = this.Tm = this.Is = this.Hs = this.eg = this.ex = this.YC = 0;
        this.Es = this.Sm = this.pa = null;
        this.oc = 0;
        this.Ds = this.yj = null;
        this.Rm = 0;
        this.ml = null;
        this.Ic = 0;
        this.ls = null;
        this.zn = !1;
        this.G = null;
        this.Bv = Array(2);
        this.zg = !1;
        this.lA = 0;
        this.ix = 255;
        this.ns = this.GJ = !1
    }

    function ed() {
        this.iH = null;
        this.vz = this.uz = this.tz = this.kH = this.jH = this.Gq = 0
    }

    function Q() {
        this.vw = this.tw = this.hb = this.hd = this.bb = this.Zc = 0;
        this.ag = !1;
        this.Jo = this.nC = this.oC = this.Tk = this.vm = this.Rd = this.Xr = this.Bd = this.Fb = this.mj = this.Ug = this.kj = this.rw = this.qw = this.Vg = 0;
        this.lj = this.wm = null;
        this.sw = 0;
        this.jj = null;
        this.uw = 0;
        this.mf = null
    }

    function Fe() {
        this.Le = this.name = null
    }

    function Ge() {
        this.value = null;
        this.Ks = this.Ls = this.Sc = this.pb = 0
    }

    function He() {
        this.text = null;
        this.pb = 0
    }

    function Ie() {
        this.ab = this.values = null;
        this.Ka = 0
    }

    function ea() {
        this.AJ = 0;
        this.yJ = null;
        this.zJ = 0;
        this.ea = this.K = null
    }

    function r() {
        this.Ji = this.Eh = this.Yd = null
    }

    function Pa() {
        this.Hf = 0;
        this.Ii = this.If = null
    }

    function fd() {
        this.Nl = this.Vy = this.Uy = this.lu = this.mu = 0;
        this.gk = null
    }

    function La() {
        this.a = null;
        this.cl = this.ps = this.Zg = 0;
        this.Uo = !1;
        this.ii = 0;
        this.se = null;
        this.qs = this.os = 0;
        this.To = null;
        this.Cm = this.al = this.Sd = this.qf = this.JC = this.bl = this.Am = this.So = this.IC = this.Bm = this.pj = this.Sw = 0;
        this.KC = -1
    }

    function gd(a, b) {
        this.ca = a;
        this.app = a.app;
        this.handle = b
    }

    function hd(a) {
        this.app = a;
        this.images = this.file = null;
        this.hf = this.Vh = this.Db = 0;
        this.di = this.Mb = this.ei = this.ik = this.Fk = this.ji = this.Sa = this.za = this.Sk = null
    }

    function Z() {
        this.app = null;
        this.Sa = this.qh = this.ph = this.Ca = this.Ga = this.height = this.width = this.handle = 0;
        this.Th = this.Nk = this.ef = this.rb = null;
        this.ho = this.zd = this.yd = this.sb = 0
    }

    function id(a) {
        this.app = a;
        this.Vr = this.fonts = this.file = null;
        this.Uh = 0;
        this.za = null;
        this.Kg = this.ge = 0;
        this.Sa = null;
        this.Bo = new za;
        this.Bo.Kq()
    }

    function za() {
        this.Ie = this.Je = this.kc = this.handle = this.Sa = 0;
        this.font = this.He = null;
        this.Yi = !1
    }

    function jd(a) {
        this.app = a;
        this.Dj = null;
        this.zo = this.Vh = this.Db = 0;
        this.file = this.Sa = this.za = this.Wr = null
    }

    function Va(a) {
        this.Rb = a;
        this.context = a.sc.context;
        this.Sl = a.sc.Sl;
        this.iI = a.sc.iI;
        this.type = 0;
        this.file = a.file;
        this.handle = -1;
        this.qb = this.source = null;
        this.Sa = 0;
        this.Bn = !1;
        this.Wh = 0;
        this.name = null;
        this.Mi = this.jk = !1;
        this.frequency = 0;
        this.gain = this.response = null;
        this.volume = 100
    }

    function jb(a) {
        this.name = a;
        this.bK = [];
        this.position = 0;
        this.Ar = !1
    }

    function I(a) {
        this.Rb = a;
        this.l = null;
        this.bC = this.Lg = 0;
        this.Qk = Array(u.dd + u.By);
        this.wo = this.Og = 0;
        this.Hk = this.Ze = this.gc = this.lc = this.ad = this.$c = this.ud = this.Yg = null;
        this.Re = Array(u.dd + 1);
        this.$C = !1;
        this.Xe = null;
        this.Po = this.Ro = this.Oo = this.Qo = 0;
        this.Yo = !1;
        this.Qe = null;
        this.Js = 0;
        this.Gs = Array(4);
        this.Gm = this.el = this.uj = !1;
        this.Cs = this.mi = this.dl = this.Ib = 0;
        this.VC = this.bh = !1;
        this.$g = null;
        this.Xo = this.uf = this.ah = 0;
        this.fl = this.ni = null;
        this.vc = 0;
        this.Hc = !1;
        this.xs = this.hx = this.Jc = this.ZC = 0;
        this.gx = null;
        this.An = !1;
        this.xj = null;
        this.DK = 0;
        this.hl = null;
        this.Du = !1;
        this.pB = 0;
        this.Ju = null;
        this.Eq = [];
        this.Ul = K.WE;
        this.pf = this.nf = null
    }

    function K() {
        this.Yl = this.Ti = this.la = this.de = this.Bb = 0;
        this.Wa = null;
        this.WH = 0
    }

    function T() {}

    function Je() {
        this.gA = this.id = 0
    }

    function Ke() {
        this.js = this.hs = 0
    }

    function Le(a, b, c, d, e) {
        this.FK = a;
        this.code = b;
        this.TJ = c;
        this.SJ = d;
        this.$f = e
    }

    function kd() {
        this.Mw = this.ks = this.nj = this.zm = this.oj = this.Wg = 0;
        this.Nw = this.bg = !1;
        this.J = null
    }

    function kb() {
        this.next = null;
        this.type = 0;
        this.name = null;
        this.index = this.zr = this.np = this.iL = this.nd = 0;
        this.tu = !1
    }

    function Aa() {
        this.vr = this.eB = this.Kv = this.Mv = this.Lv = this.Tf = this.aj = 0;
        this.Jv = null;
        this.Jv = Array(4);
        var a;
        for (a = 0; 4 > a; a++) this.Jv[a] = null
    }

    function ld() {
        this.za = this.list = null;
        this.ur = this.Xf = 0
    }

    function W(a) {
        this.app = a;
        this.tk = this.rk = this.us = this.ts = this.y = this.x = 0;
        this.yq = this.ym = this.xm = null;
        this.ne = !1;
        this.Vk = null;
        this.fz = this.ez = this.hz = this.gz = this.dz = this.be = this.ae = this.Rr = this.Pr = this.Kj = this.Ij = this.Ja = this.gw = 0;
        this.Pa = this.Nb = this.nc = null;
        this.angle = 0;
        this.scale = this.qc = this.rc = 1;
        this.Ga = this.up = 320;
        this.Ca = this.wp = 240
    }

    function ia(a, b, c, d, e, f) {
        this.app = a;
        this.kJ = d;
        this.jf = this.type = 0;
        this.x = b;
        this.y = c;
        this.height = this.width = 0;
        this.ie = null;
        this.Ql = !1;
        this.fd = null;
        this.borderWidth = 0;
        this.borderColor = this.Ku = this.lk = null;
        this.be = this.ae = 0;
        this.K = this.body = null;
        if (d)
            if (this.ie = this.app.tc.Ui(d.Tf), this.type = this.ie.Me, this.jf = this.ie.yc.hC, this.borderWidth = this.ie.yc.Ur, this.QA = this.ie.yc.Fo, this.ae = this.ie.nw, this.be = this.ie.ow, this.width = this.ie.yc.eC, this.height = this.ie.yc.fC, this.Ql = 0 != this.ie.yc.dC, this.lk = this.ie.yc.Qg, this.Ku = this.ie.yc.tm, this.borderColor = this.ie.yc.Tr, 1 == this.type) this.fd = this.app.ca.Lb(this.ie.yc.Xh), this.width = this.fd.width, this.height = this.fd.height;
            else {
                if (32 <= this.type) {
                    a = this.app.H;
                    b = null;
                    for (e = c = 0; e < a.ob; e++) {
                        for (; null == a.G[c];) c++;
                        b = a.G[c];
                        c++;
                        if (b.lJ == d) break
                    }
                    this.K = b
                }
            }
        else {
            this.type = u.Dy;
            this.fd = e;
            this.width = this.fd.width;
            this.height = this.fd.height;
            this.x -= this.fd.Ga;
            this.y -= this.fd.Ca;
            switch (f) {
                case 0:
                    this.jf = ca.Hy;
                    break;
                case 1:
                    this.jf = ca.hq;
                    break;
                case 2:
                    this.jf = ca.qg;
                    break;
                case 3:
                    this.jf = ca.au
            }
            this.Ql = !1
        }
    }

    function u() {
        this.ow = this.nw = this.bi = this.Me = this.Ho = 0;
        this.yc = this.pw = null;
        this.mC = this.lC = 0
    }

    function md() {
        this.Tg = this.yb = this.ij = 0;
        this.Sg = this.Io = this.ci = null;
        this.Nq = 0
    }

    function ca() {}

    function nd() {
        this.Xh = 0
    }

    function Ma() {
        this.Xh = this.Fo = this.tm = this.Qg = this.Go = this.ej = this.Yh = this.Tr = this.Ur = 0
    }

    function D() {
        this.Rg = 0;
        this.kw = null;
        this.Ec = this.fj = 0;
        this.Yc = this.lb = this.dj = this.gj = this.Zh = this.kf = null;
        this.iC = this.jC = this.gC = 0;
        this.Eo = this.um = null
    }

    function od() {
        this.Qd = this.kC = this.ai = this.$h = 0;
        this.lw = null
    }

    function pd() {
        this.Iz = this.Jz = this.Hz = 0
    }

    function ka() {
        this.nm = this.Fo = this.tm = this.Qg = this.Go = this.ej = this.Yh = this.Tr = this.Ur = this.hj = this.Rk = this.lf = this.mw = this.ai = this.$h = 0;
        this.frames = null
    }

    function qd() {
        this.ai = this.$h = this.Qd = 0;
        this.text = null
    }

    function pa() {
        this.Ax = this.rp = this.an = 0;
        this.si = null
    }

    function rd() {
        this.Uk = this.Cw = this.Bw = 0;
        this.Wb = null
    }

    function L() {
        this.ic = this.Ub = 0;
        this.c = null;
        this.tv = this.Da = this.Tb = this.Fg = this.cf = this.ir = 0;
        this.wb = null;
        this.uv = 0;
        this.hr = this.RA = null;
        this.jr = this.em = 0;
        this.P = this.dm = null;
        this.HI = this.bf = this.fe = this.xv = this.V = this.ra = this.L = this.N = this.na = this.ma = this.v = this.Eg = this.w = this.Dg = 0;
        this.co = !1;
        this.D = this.M = this.aa = this.B = this.b = null
    }

    function sd() {
        this.sx = !1;
        this.Gg = null;
        this.xa = !1;
        this.Ba = null;
        this.ne = !0;
        this.rc = this.qc = 1;
        this.y = this.x = this.angle = 0;
        this.wl = null
    }

    function R() {
        this.Qd = this.Ka = 0;
        this.C = null;
        this.Aw = this.zw = 0;
        this.pC = this.level = -1;
        this.hm = null;
        this.ne = !0
    }

    function td() {
        this.te = this.Fc = this.li = 0;
        this.Ra = -1;
        this.Hb = this.Gb = 1;
        this.jb = this.ki = this.da = this.Za = this.ib = 0;
        this.Qa = this.O = !1;
        this.rj = this.qj = 0;
        this.ss = -1;
        this.Xw = this.Vw = this.Ww = this.Uw = this.Tw = this.rs = 0
    }

    function fa() {
        this.ld = this.kd = this.Sc = this.pb = this.ua = this.type = 0;
        this.cz = this.xa = !1;
        this.Hd = this.Xf = this.fh = this.gp = this.Kc = 0;
        this.Li = !1;
        this.Ba = this.oa = null;
        this.Md = 0;
        this.font = null;
        this.$d = this.Oa = !1
    }

    function ud() {
        this.type = this.Kc = this.Lc = this.ld = this.kd = this.ua = this.ql = 0;
        this.xa = !0;
        this.Xf = 0;
        this.oa = null;
        this.Hd = 0;
        this.Ba = null;
        this.Md = 0;
        this.alpha = 1;
        this.mk = "source-over";
        this.$d = !1
    }

    function vd() {
        this.type = this.Kc = this.Lc = this.ld = this.kd = this.ua = this.ql = 0;
        this.xa = !0;
        this.Xf = 0;
        this.oa = null;
        this.Hd = 0;
        this.Ba = null;
        this.Md = 0;
        this.alpha = 1;
        this.mk = "source-over";
        this.$d = !1
    }

    function wd() {
        this.gg = null;
        this.hp = this.Lc = this.pb = this.Sc = 0;
        this.font = null;
        this.xa = !0;
        this.bD = this.Ka = 0;
        this.oa = this.Ba = null;
        this.Oa = !1;
        this.rect = new aa;
        this.ld = this.kd = this.deltaY = 0;
        this.mb = null;
        this.$d = !1
    }

    function xd() {
        this.ld = this.kd = 0;
        this.Td = null;
        this.nk = 0;
        this.jh = []
    }

    function yd(a, b) {
        this.ext = b.h.Sq.xr(a);
        this.hw = !1;
        this.jw = this.Do = this.Kw = 0;
        this.Oa = !1;
        this.xa = !0;
        this.oa = this.Ba = null
    }

    function Wa() {}

    function lb() {
        this.hm = this.dir = this.y = this.x = 0;
        this.vu = !1
    }

    function zd(a) {
        a.file.o();
        this.bt = a.file.o()
    }

    function Me(a) {
        this.nd = a.file.s();
        this.zr = a.file.s();
        this.Lf = a.file.o()
    }

    function Ne(a) {
        this.color = a.file.jd()
    }

    function Oe(a) {
        this.Vl = a.file.s();
        this.oH = a.file.s()
    }

    function qa(a) {
        this.Lf = a.file.o();
        for (var b = a.file.S, c = 0, d;;) {
            c++;
            d = a.file.s();
            if (0 == d) break;
            d = a.file.o();
            6 < d && a.file.va(d - 6)
        }
        a.file.seek(b);
        this.ja = Array(c);
        for (b = 0; b < c; b++) this.ja[b] = ba.create(a.file)
    }

    function Pe(a) {
        var b = a.file.o();
        a.file.va(4);
        this.data = 0;
        6 < b && (this.data = a.file.S, a.file.va(b - 6))
    }

    function na(a) {
        this.Cg = a.file.o();
        this.AI = a.file.o()
    }

    function Qe(a) {
        a.file.va(4);
        this.S = 0;
        this.id = a.file.o()
    }

    function Fa(a) {
        this.value = a.file.s();
        this.bt = 0
    }

    function Ad(a) {
        this.key = a.file.o()
    }

    function Re(a) {
        this.tb = a.file.X();
        this.$f = a.file.X();
        this.type = a.file.X()
    }

    function Se(a) {
        a.file.va(4);
        this.hA = 0;
        for (this.yb = [];;) {
            var b = a.file.X(),
                c = a.file.X();
            if (-1 == b) break;
            this.yb.push(b);
            this.yb.push(c)
        }
    }

    function oa() {}

    function Bd(a) {
        this.Lo = a.file.X();
        this.Yk = a.file.X();
        this.bs = a.file.X();
        this.cs = a.file.X();
        this.$r = a.file.X();
        this.Gw = a.file.X();
        this.Zr = a.file.s();
        this.as = a.file.X();
        this.Mo = a.file.X();
        this.Hw = a.file.X()
    }

    function mb(a) {
        this.Lo = a.file.X();
        this.Yk = a.file.X();
        this.bs = a.file.X();
        this.cs = a.file.X();
        this.$r = a.file.X();
        this.Gw = a.file.X();
        this.Zr = a.file.s();
        this.as = a.file.X();
        this.Mo = a.file.X();
        this.Hw = a.file.X();
        this.Cq = a.file.o();
        this.lz = a.file.o()
    }

    function Cd(a) {
        this.Lo = a.file.X();
        this.Yk = a.file.X();
        this.bs = a.file.X();
        this.cs = a.file.X();
        this.$r = a.file.X();
        this.Gw = a.file.X();
        this.Zr = a.file.s();
        this.as = a.file.X();
        this.Mo = a.file.X();
        this.Hw = a.file.X();
        this.Cq = a.file.X();
        this.lz = a.file.X();
        a.file.va(4);
        a.file.o()
    }

    function Qa(a) {
        this.tx = a.file.o();
        this.xD = a.file.o()
    }

    function ha(a) {
        this.value = a.file.o()
    }

    function Xa(a) {
        this.vb = a.file.Ob()
    }

    function Te(a) {
        this.nd = a.file.s();
        this.zr = a.file.s()
    }

    function Dd(a) {
        a.file.X();
        a.file.X();
        a.file.X();
        a.file.X()
    }

    function Ue(a, b, c) {
        this.index = a.file.s();
        this.sC = a.file.s();
        this.global = b;
        c ? this.Ex = a.file.LC() : (this.Ex = a.file.s(), a.file.va(4))
    }

    function Ed(a) {
        this.Ka = a.file.s();
        this.Yq = a.file.s();
        this.sA = a.file.s();
        this.values = [];
        for (var b = 1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.Ka & b); e++) {
            var f = new Ue(a, 0 != (this.Ka & c), 0 != (this.Ka & d)),
                b = b << 4,
                c = c << 4,
                d = d << 4;
            this.values.push(f)
        }
    }

    function Ya() {
        this.kk = []
    }

    function Ga(a) {
        this.xp = this.vp = 1;
        this.xw = -1;
        this.yw = this.sx = !1;
        this.uk = this.sk = 0;
        if (!(this.La = a.getContext("2d"))) throw Error("Failed to init standard renderer");
    }

    function sa() {
        this.In = "";
        this.Pz = this.pp = this.qp = this.LD = this.MD = 0
    }

    function Fd() {}

    function w() {
        this.j = this.oo = this.no = this.Dr = 0;
        this.wa = this.jB = !1;
        this.Jh = this.Uz = this.m = this.Y = null
    }

    function Gd(a) {
        this.app = a
    }

    function Ra() {}

    function Hd() {
        this.kB = this.f = this.g = this.fb = 0
    }

    function Id() {
        this.f = this.g = this.fb = 0
    }

    function Jd() {
        this.xb = this.Dc = this.Bu = this.Kf = 0;
        this.BJ = null
    }

    function Kd() {
        this.f = this.g = this.Qq = this.Va = 0
    }

    function Ld() {
        this.xb = this.Dc = this.bj = 0
    }

    function Md() {}

    function Nd() {
        this.f = this.g = this.Kn = this.fb = this.Va = 0
    }

    function Od() {
        this.Uv;
        this.Kk = this.Mk = this.Jg = this.Ke = this.I = 0;
        this.pe = null
    }

    function Pd() {
        this.f = this.g = this.fb = 0
    }

    function Qd() {
        this.Tv = this.f = this.g = this.fb = 0
    }

    function Rd() {
        this.bj;
        this.Dc;
        this.xb
    }

    function Sd() {
        this.f = this.g = this.dA = this.Va = this.fb = 0
    }

    function Td() {
        this.f = this.g = this.fb = 0
    }

    function Ud() {
        this.mc = this.f = this.g = this.fb = 0
    }

    function Vd() {
        this.Jk = this.Ik = this.f = this.g = this.fb = 0
    }

    function Wd() {
        this.jm = this.f = this.g = this.cA = this.Jn = this.Va = 0
    }

    function Xd() {
        this.Cr = this.f = this.g = this.Jn = this.Va = 0
    }

    function Yd() {
        this.Br = this.Gr = this.Hr = this.Er = this.xd = this.Sv = this.ha = this.ga = this.Kk = this.Mk = this.Jg = this.Ke = this.I = this.TD = this.ht = this.Gx = 0
    }

    function Zd() {
        this.Uf = this.Lk = this.f = this.g = this.Va = this.fb = 0
    }

    function $d() {}

    function ae() {
        this.f = this.g = this.Va = 0
    }

    function be(a, b) {
        var c = new H;
        ja.Rb = new l(a, c, b);
        c.getFile(b, ce)
    }

    function ce() {
        ja.Rb.load()
    }

    function Za() {
        ja.Rb.mp()
    }

    function Ea() {
        this.y = this.x = 0;
        this.visible = !0;
        this.children = [];
        this.tg = !1
    }

    function ra() {}

    function F() {
        this.R = null;
        this.lineWidth = this.Ca = this.Ga = this.width = this.height = this.lineWidth = 0
    }

    function Ve() {
        this.R = null;
        this.angle = 0;
        this.rc = this.qc = 1;
        this.yx = 0
    }

    function A() {
        this.a = null;
        this.T = this.Yb = this.Xb = this.Ms = this.Wm = this.Vm = this.pl = 0;
        this.gh = null
    }

    function de() {
        this.pm = 0;
        this.ab = null
    }

    function ee() {
        this.qm = 0;
        this.values = null;
        this.Ka = 0
    }

    function Na() {
        this.rl = 0;
        this.md = this.Na = null
    }

    function Sa(a) {
        this.app = a;
        this.xk = null;
        this.Sr = 0
    }

    function nb() {
        this.handle = 0
    }

    function Ba() {
        this.ea = this.K = null
    }

    function fe() {}

    function ge() {}

    function he() {}

    function U() {
        this.to = 100;
        this.Or = this.$B = this.aC = this.Pk = 0
    }

    function ie() {
        this.yo = 0;
        this.gd = null
    }

    function je() {
        this.sB = this.tB = this.qB = this.rB = this.po = 0
    }

    function ke() {
        this.zB = this.yB = this.xB = this.AB = 0
    }

    function le() {
        this.EB = this.CB = this.DB = this.BB = 0
    }

    function me() {
        this.ZB = this.XB = this.fw = this.UB = this.VB = this.mm = 0;
        this.cb = null
    }

    function ne() {
        this.aw = this.vB = this.bw = this.Xv = this.$v = this.Zv = this.Yv = this.wB = 0;
        this.re = null
    }

    function oe() {
        this.MB = this.LB = this.NB = this.KB = this.JB = this.OB = 0
    }

    function pe() {
        this.QB = this.PB = this.RB = this.ew = this.dw = this.SB = 0
    }

    function qe() {}

    function re() {
        this.Ng = null;
        this.data = 0;
        this.pr = !1
    }

    function M() {
        this.a = null;
        this.Aj = this.we = this.eh = this.Pb = this.fg = this.cp = this.bp = 0
    }

    function ta() {
        this.Lt = this.Up = this.Dl = this.sy = this.Cl = this.Vp = this.Tp = 0;
        this.Bi = !1
    }

    function se() {
        this.Wp = !1;
        this.El = null
    }

    function te() {}

    function ue() {
        this.Nt = this.pg = this.Ot = this.wh = 0
    }

    function ve() {
        this.Xp = this.Yp = this.St = this.Rt = this.Qt = this.Pt = 0
    }

    function we() {
        this.le = this.Zj = this.Yj = this.Ch = this.Bh = this.bq = this.on = this.pn = this.Nc = 0;
        this.qd = !1;
        this.Ia = null;
        this.Ah = this.eq = this.cq = this.zh = 0;
        this.Il = null;
        this.aq = !1
    }

    function S() {
        this.Gl = this.wy = this.Ci = this.Ff = this.Ef = this.Ed = this.vy = this.Tt = this.Wd = this.nb = 0;
        this.Wj = null;
        this.Vt = this.Ut = 0;
        this.Vj = !1
    }

    function $a() {
        this.xy = this.Wt = this.yy = this.Xt = this.Xj = this.Hl = this.Yt = this.Fd = this.yh = 0
    }

    function ab() {}

    function Ha() {
        this.fp = 0;
        this.ta = null;
        this.mx = 0;
        this.U = !1;
        this.Bj = 0;
        this.zj = !1;
        this.ep = 0
    }

    function Oa() {
        this.Pc = null;
        this.UA = 0;
        this.gm = this.Ge = this.Cc = null;
        this.oe = 0
    }

    function Ca() {
        this.ds = {};
        this.response = "";
        this.Pe = 0;
        this.Ko = !1;
        this.password = this.Dx = this.headers = "";
        this.timeout = 0;
        this.Qi = this.Xq = -1;
        this.charset = ""
    }
    var ja = this,
        p = {
            extend: function(a, b) {
                var c = Object.create(a.prototype || a);
                if (void 0 !== b && (b = b.prototype || b))
                    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            },
            Mp: function(a) {
                return a >> 16
            },
            QF: function(a) {
                return a & 65535
            },
            SF: function(a, b) {
                return b << 16 | a & 65535
            },
            JQ: function(a) {
                return a >>> 16 & 255
            },
            CQ: function(a) {
                return a >>> 8 & 255
            },
            wQ: function(a) {
                return a & 255
            },
            VO: function(a, b, c) {
                return (a & 255) << 16 | (b & 255) << 8 | c & 255
            },
            uR: function(a) {
                return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
            },
            hH: function(a, b, c) {
                return Math.min(Math.max(a, b), c)
            },
            $e: function(a) {
                var b = (a >>> 16 & 255).toString(16),
                    c = (a >>> 8 & 255).toString(16);
                for (a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
                for (; 2 > c.length;) c = "0" + c;
                for (; 2 > a.length;) a = "0" + a;
                return "#" + b + c + a
            },
            Ld: function(a) {
                return 0 > a ? Math.ceil(a) : Math.floor(a)
            },
            OP: function(a) {
                return Math.round(a)
            },
            Dv: function(a) {
                return Math.ceil(a) == a
            },
            Lq: function(a, b, c, d, e) {
                ox = d / 2 * .5522848;
                oy = e / 2 * .5522848;
                xe = b + d;
                ye = c + e;
                xm = b + d / 2;
                ym = c + e / 2;
                a.beginPath();
                a.moveTo(b, ym);
                a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
                a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
                a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
                a.closePath()
            },
            kQ: function(a, b) {
                a.beginPath();
                a.moveTo(b.left, b.top);
                a.lineTo(b.right, b.top);
                a.lineTo(b.right, b.bottom);
                a.lineTo(b.left, b.bottom);
                a.lineTo(b.left, b.top);
                a.closePath();
                a.stroke()
            },
            jQ: function(a, b, c, d, e) {
                a.beginPath();
                a.moveTo(b, c);
                a.lineTo(d, e);
                a.closePath();
                a.stroke()
            },
            Rn: function(a, b) {
                for (var c = a.toString(); 4 > c.length;) c = "0" + c;
                return c + ("." + b)
            },
            Ac: function(a, b) {
                if (a == b) return !0;
                a = a.toLowerCase();
                b = b.toLowerCase();
                return a == b
            },
            uC: function(a) {
                var b = a.lastIndexOf("\\");
                0 < b && (a = a.substring(b + 1));
                return a
            },
            TF: 40,
            LG: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52],
            OQ: function(a) {
                return a < p.TF ? p.LG[a] : Math.round(96 * a / 72)
            },
            Ep: 0,
            Fp: 0,
            Rj: 1,
            qt: 2,
            Dp: 8,
            xi: 4,
            KE: 32,
            pt: 1024,
            LE: 2048,
            bA: function(a, b, c, d, e, f) {
                if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
                e.Yi || (a.font = e.Bg());
                var g = 0,
                    h = String.fromCharCode(10),
                    q = String.fromCharCode(13),
                    da = b.indexOf(h);
                if (0 <= da) {
                    var C = new aa;
                    C.Cz(d);
                    var k, l = 0,
                        m = 0,
                        n;
                    do k = -1, l < b.length && (k = b.indexOf(q, l)), n = Math.max(da, k), k == da - 1 && da--, da = b.substring(l, da), k = p.Wl(a, da, c, C, f, e), m = Math.max(m, C.right - C.left), g += k, C.top += k, C.bottom = d.bottom, C.right = d.right, l = n + 1, da = -1, l < b.length ? da = b.indexOf(h, l) : (k = p.Wl(a, "", c, C, f, e), m = Math.max(m, C.right - C.left), g += k, C.top += k, C.bottom = d.bottom, C.right = d.right); while (0 <= da);
                    l < b.length && (da = b.substring(l), k = p.Wl(a, da, c, C, f, e), m = Math.max(m, C.right - C.left), g += k);
                    0 != (c & p.pt) && (d.right = d.left + m, d.bottom = C.bottom);
                    return g
                }
                return g = p.Wl(a, b, c | p.LE, d, f, e)
            },
            et: null,
            Wl: function(a, b, c, d, e, f) {
                0 == b.length && (b = " ");
                var g, h;
                g = f.af();
                h = f.Yi ? f.measureText(" ") : a.measureText(" ").width;
                var q = d.right - d.left,
                    da = 0,
                    C = 0,
                    k, l, m, n = 0,
                    u = 0,
                    t;
                null == p.et && (p.et = Array(100));
                var w, v, E = !1,
                    B = !1,
                    D = d.top;
                l = g;
                0 != (l & 1) && l++;
                var r = D;
                do {
                    l = da;
                    m = t = 0;
                    u += g;
                    do {
                        p.et[t] = m;
                        t += 1;
                        k = C;
                        C = -1;
                        l < b.length && (C = b.indexOf(" ", l)); - 1 == C && (C = b.length);
                        if (C < l) {
                            m -= h;
                            break
                        }
                        v = b.substring(l, C);
                        w = f.Yi ? f.measureText(v) : a.measureText(v).width;
                        if (m + w > q) {
                            t--;
                            if (0 < t) {
                                m -= h;
                                C = k;
                                break
                            }
                            for (k = l; k < C; k++) {
                                w = f.Yi ? f.measureText(b.substring(k, k + 1)) : a.measureText(b.substring(k, k + 1)).width;
                                if (m + w >= q) {
                                    k--;
                                    if (0 < k) {
                                        n = Math.max(m, n);
                                        0 == (c & p.pt) && (m = 0 != (c & p.Rj) ? d.left + (d.right - d.left) / 2 - m / 2 : 0 != (c & p.qt) ? d.right - m : d.left, v = b.substring(l, k), e.push(new O(m, D, v)));
                                        C = k - 1;
                                        B = E = !0;
                                        break
                                    }
                                    C = k < b.length ? b.indexOf(" ", k) : -1;
                                    E = !0;
                                    0 <= C && (B = !0);
                                    break
                                }
                                m += w
                            }
                        }
                        if (E) break;
                        m += w;
                        if (m + h > q) break;
                        m += h;
                        l = C + 1
                    } while (1);
                    if (0 == B) {
                        if (E) break;
                        n = Math.max(m, n);
                        if (0 == (c & p.pt))
                            for (m = 0 != (c & p.Rj) ? d.left + (d.right - d.left) / 2 - m / 2 : 0 != (c & p.qt) ? d.right - m : d.left, l = da, da = 0; da < t; da++) {
                                C = -1;
                                l < b.length && (C = b.indexOf(" ", l)); - 1 == C && (C = b.length);
                                if (C < l) break;
                                v = b.substring(l, C);
                                e.push(new O(m + p.et[da], D, v));
                                l = C + 1
                            }
                    }
                    B = E = !1;
                    D += g;
                    da = C + 1
                } while (da < b.length);
                d.right = d.left + n;
                d.bottom = r + u;
                return u
            },
            Kh: function(a, b, c, d, e, f) {
                var g;
                if (e.Yi)
                    for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
                else
                    for (a.font = e.Bg(), a.fillStyle = p.$e(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
            },
            Xi: function(a, b) {
                var c = a.toString();
                if (0 != (b & fa.Yx)) {
                    var d = b & fa.Yx;
                    if (c.length > d) c = c.substring(c.length - d);
                    else
                        for (; c.length < d;) c = "0" + c
                }
                return c
            },
            Xu: function(a, b) {
                var c;
                if (0 == (b & fa.BE)) c = a.toString();
                else {
                    var d = Math.floor(((b & fa.zE) >> fa.AE) + 1);
                    c = -1;
                    0 != (b & fa.DE) ? c = (b & fa.xE) >> fa.yE : 0 != a && -1 < a && 1 > a && (c = d);
                    c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
                    var e, f, g;
                    if (0 != (b & fa.CE))
                        for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
                    f = !1;
                    "-" == c.charAt(0) && (f = !0, c = c.substr(1));
                    for (; e < d;) c = "0" + c, e++;
                    f && (c = "-" + c)
                }
                return c
            },
            tR: function(a, b) {
                for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0, e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
                return c
            }
        },
        ze = !1,
        bb = !1,
        ob = !1,
        pb = window.XMLHttpRequest ? new XMLHttpRequest : null;
    if (pb && pb.overrideMimeType) try {
        bb = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (bb = !1)
    } catch (a) {} else {
        var ze = !0,
            qb = document.createElement("script");
        qb.type = "text/vbscript";
        qb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
        document.head.appendChild(qb)
    }
    if (bb) {
        var Ae = new FileReader;
        try {
            Ae.readAsBinaryString && (ob = !0)
        } catch (a) {}
        Ae = null
    }
    pb = null;
    H.prototype = {
        sa: function() {
            return this.td.charCodeAt(this.S++) & 255
        },
        getFile: function(a, b, c) {
            this.Fu = b;
            if (ze) try {
                var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
                    e, f = d.length;
                f > c && (f = c);
                for (e = 0; e < f; e++) this.td += String.fromCharCode(d[e]);
                this.end = this.td.length;
                this.Fu()
            } catch (q) {} else {
                var g = new XMLHttpRequest;
                g.open("GET", a, !0);
                var h = this;
                bb ? (g.responseType = "blob", g.onload = function() {
                    if (4 == g.readyState && 200 == g.status) {
                        var a = new FileReader;
                        a.onloadend = function() {
                            if (ob) h.td += a.result;
                            else {
                                var b = new Uint8Array(a.result),
                                    c;
                                for (c = 0; c < b.length; c++) h.td += String.fromCharCode(b[c])
                            }
                            h.end = h.td.length;
                            h.Fu()
                        };
                        ob ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
                    }
                }) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function() {
                    4 == g.readyState && 200 == g.status && (h.td += g.responseText, h.end = h.td.length, h.Fu())
                });
                g.send(null)
            }
        },
        OK: function(a) {
            this.td = a;
            this.end = a.length;
            var b = this;
            this.sa = function() {
                return b.td.charCodeAt(b.S++) & 255
            }
        },
        wg: function(a, b) {
            var c = new H;
            c.td = this.td;
            c.offset = a;
            c.S = a;
            c.end = a + b;
            c.sd = this.sd;
            return c
        },
        mD: function(a) {
            this.sd = a
        },
        LH: function() {
            var a = this.sa(),
                b = this.sa(),
                c = this.sa();
            255 == a && 254 == b ? (this.sd = !0, this.S--) : 239 == a && 187 == b && 191 == c ? this.sd = !1 : (this.sd = !1, this.S -= 3)
        },
        va: function(a) {
            this.S += a
        },
        Qh: function() {
            return this.S >= this.end
        },
        ub: function() {
            return this.sa()
        },
        o: function() {
            var a;
            a = this.sa();
            return 256 * this.sa() + a
        },
        X: function() {
            var a;
            a = this.sa();
            a = 256 * this.sa() + a;
            return 32768 > a ? a : a - 65536
        },
        Dm: function() {
            var a;
            a = this.sa();
            return 256 * this.sa() + a
        },
        s: function() {
            var a, b, c;
            a = this.sa();
            b = this.sa();
            c = this.sa();
            a = 16777216 * this.sa() + 65536 * c + 256 * b + a;
            return 2147483647 >= a ? a : a - 4294967296
        },
        jd: function() {
            var a, b, c;
            a = this.sa();
            b = this.sa();
            c = this.sa();
            this.sa();
            return 65536 * a + 256 * b + c
        },
        MC: function() {
            var a, b, c;
            a = this.sa();
            b = this.sa();
            c = this.sa();
            a = 16777216 * this.sa() + 65536 * c + 256 * b + a;
            2147483648 < a && (a -= 4294967296);
            return a / 65536
        },
        LC: function() {
            var a,
                b, c, d, e, f, g;
            a = this.sa();
            b = this.sa();
            c = this.sa();
            d = this.sa();
            e = this.sa();
            f = this.sa();
            g = this.sa();
            a = 72057594037927936 * this.sa() + 281474976710656 * g + 1099511627776 * f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
            0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
            return a / 4294967296
        },
        Ob: function(a) {
            var b = "";
            if (this.sd)
                if (1 > arguments.length) {
                    if (this.Qh()) return b;
                    c = this.S;
                    for (b = this.Dm(); b && !this.Qh();) b = this.Dm();
                    b = (this.S - c - 2) / 2;
                    this.S = c;
                    b = this.Ob(b);
                    this.sa();
                    this.sa()
                } else {
                    b = "";
                    c = this.S;
                    for (e = 0; e < a; e++) {
                        d = this.Dm();
                        if (0 == d) break;
                        b += String.fromCharCode(d)
                    }
                    this.S = c + 2 * a
                }
            else if (1 > arguments.length) {
                if (this.Qh()) return b;
                for (var c = this.S, b = this.sa(); b && !this.Qh();) b = this.sa();
                b = this.S - c - 1;
                this.S = c;
                b = this.Ob(b);
                this.sa()
            } else {
                for (var d, c = this.S, e = 0; e < a; ++e) {
                    d = this.sa();
                    if (0 == d) break;
                    b += String.fromCharCode(d)
                }
                this.S = c + a
            }
            return b
        },
        kK: function() {
            var a = this.S,
                b, c = "",
                d, e;
            if (0 == this.sd) {
                if (this.Qh()) return;
                for (b = this.sa(); 10 != b && 13 != b && !this.Qh();) b = this.sa();
                d = this.S;
                this.S = a;
                e = 1;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.Ob(d - a - e));
                if (10 == b || 13 == b) this.sa(), a = this.ub(), 10 == b && 13 != a && this.S--, 13 == b && 10 != a && this.S--
            } else {
                if (this.Qh()) return;
                for (b = this.Dm(); 10 != b && 13 != b && !this.Qh();) b = this.Dm();
                d = this.S;
                this.S = a;
                e = 2;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.Ob((d - a - e) / 2));
                if (10 == b || 13 == b) this.S += 2, a = this.Dm(), 10 == b && 13 != a && (this.S -= 2), 13 == b && 10 != a && (this.S -= 2)
            }
            return c
        },
        seek: function(a) {
            a >= this.end && (a = this.end);
            this.S = a
        },
        ZK: function(a) {
            var b = this.S,
                b = b - a;
            0 > b && (b = 0);
            this.S = b
        },
        oK: function(a) {
            var b, c = a.length;
            for (b = 0; b < c; b++) a[b] = this.sa()
        },
        NC: function(a) {
            var b = [],
                c;
            for (c = 0; c < a; c++) b[c] = this.sa();
            return b
        }
    };
    N.prototype = {
        add: function(a) {
            this.Gd.push(a)
        },
        OI: function(a, b) {
            this.Gd.splice(a, 0, b)
        },
        get: function(a) {
            return a < this.Gd.length ? this.Gd[a] : null
        },
        put: function(a, b) {
            this.Gd[a] = b
        },
        set: function(a, b) {
            a < this.Gd.length && (this.Gd[a] = b)
        },
        Vo: function(a) {
            a < this.Gd.length && this.Gd.splice(a, 1)
        },
        indexOf: function(a) {
            return this.Gd.indexOf(a)
        },
        contains: function(a) {
            return 0 <= this.Gd.indexOf(a)
        },
        OC: function(a) {
            a = this.Gd.indexOf(a);
            0 <= a && this.Gd.splice(a, 1)
        },
        size: function() {
            return this.Gd.length
        },
        clear: function() {
            this.Gd.length = 0
        },
        sort: function(a) {
            Array.prototype.sort.call(this.Gd, a)
        }
    };
    aa.prototype = {
        load: function(a) {
            this.left = a.s();
            this.top = a.s();
            this.right = a.s();
            this.bottom = a.s()
        },
        Cz: function(a) {
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom
        }
    };
    eb.prototype = {
        Bg: function() {
            var a;
            a = this.Ie ? "italic " : "normal ";
            var b = 100 * Math.floor(this.Je / 100),
                b = Math.max(b, 100),
                b = Math.min(b, 900);
            a = a + (b + " ") + (this.kc + "px ");
            return a += this.He
        },
        af: function() {
            return this.kc + Math.ceil(this.kc / 8)
        },
        Z: function() {
            this.He = "Arial";
            this.kc = 13;
            this.Je = 400;
            this.Ie = 0
        }
    };
    la.separator = "{@24}";
    la.ly = 1;
    la.xF = 2;
    la.prototype = {
        ip: function() {
            if (null != this.ab && null != this.pk) {
                var a = "",
                    b;
                for (b = 0; b < this.ab.size(); b++) a += this.ab.get(b) + la.separator;
                localStorage.setItem(this.pk, a)
            }
        },
        wr: function(a) {
            var b = !0;
            null != this.pk && p.Ac(a, this.pk) && (b = !1);
            if (b)
                if (this.ip(), this.pk = a, this.ab = new N, a = localStorage.getItem(this.pk))
                    for (var b = 0, c = a.indexOf(la.separator, 0); 0 <= c;) this.ab.add(a.substring(b, c)), b = c + la.separator.length, c = a.indexOf(la.separator, b);
                else if (a = null, null == a && (b = this.app.nI(this.pk), null != b && (a = b.open())), a)
                for (b = !1, a.LH(), "undefined" != typeof this.Ka && (this.Ka & la.ly && (this.sd = !1, b = !0), this.Ka & la.xF && (this.sd = !0)); 0 == a.Qh();) {
                    c = a.kK();
                    b && (c = this.GH(c));
                    if ("<" == c.substring(0, 1)) {
                        this.ab.clear();
                        break
                    }
                    if (null == c) break;
                    this.ab.add(c)
                }
        },
        GH: function(a) {
            for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
            return b
        },
        Vq: function(a) {
            var b, c;
            for (b = 0; b < this.ab.size(); b++)
                if (c = this.ab.get(b), "[" == c.charAt(0)) {
                    var d = c.lastIndexOf("]");
                    if (1 <= d && (c = c.substring(1, d), p.Ac(a, c))) return b
                } return -1
        },
        dv: function(a, b) {
            for (var c, d; a < this.ab.size(); a++) {
                c = this.ab.get(a);
                if ("[" == c.charAt(0)) break;
                d = c.indexOf("=");
                if (0 <= d) {
                    for (var e = 0; e < d && 32 == c.charCodeAt(e);) e++;
                    for (; d > e && 32 == c.charCodeAt(d - 1);) d--;
                    if (d > e && (c = c.substring(0, d), p.Ac(c, b))) return a
                }
            }
            return -1
        },
        Ck: function(a, b, c, d) {
            this.wr(d);
            a = this.Vq(a);
            return 0 <= a && (a = this.dv(a + 1, b), 0 <= a) ? (b = this.ab.get(a), b.substring(b.indexOf("=") + 1)) : c
        },
        xl: function(a, b, c, d) {
            this.wr(d);
            d = this.Vq(a);
            if (0 > d) this.ab.add("[" + a + "]"), this.ab.add(b + "=" + c);
            else if (a = this.dv(d + 1, b), 0 <= a) this.ab.set(a, b + "=" + c);
            else {
                for (a = d + 1; a < this.ab.size(); a++)
                    if (d = this.ab.get(a), "[" == d.charAt(0)) {
                        d = b + "=" + c;
                        this.ab.OI(a, d);
                        return
                    } this.ab.add(b + "=" + c)
            }
        },
        Qz: function(a, b, c) {
            this.wr(c);
            a = this.Vq(a);
            0 <= a && (b = this.dv(a + 1, b), 0 <= b && this.ab.Vo(b), this.ip())
        },
        JH: function(a, b) {
            this.wr(b);
            var c = this.Vq(a);
            if (0 <= c) {
                for (this.ab.Vo(c); !(c >= this.ab.size()) && "[" != this.ab.get(c).charAt(0);) this.ab.Vo(c);
                this.ip()
            }
        }
    };
    ma.prototype = {
        measureText: function(a, b) {
            b = this.app.kv(b);
            if (b.Yi) return b.measureText(a);
            this.Zd.font = b.Bg();
            return this.Zd.measureText(a).width
        },
        Ss: function(a, b, c, d, e) {
            if (a == this.jJ && b == this.fJ && c == this.iJ && d == this.gJ && e == this.eJ) return this.hJ;
            var f = this.Zd;
            f.clearRect(0, 0, this.width, this.height);
            c || (c = new aa(0, 0, this.width, this.height));
            var g = [];
            d = this.app.kv(d);
            var h = p.bA(f, a, b, c, d, g);
            if (0 != h) {
                var q = 0;
                0 != (b & p.Dp) ? q = this.height - h : 0 != (b & p.xi) && (q = this.height / 2 - h / 2);
                p.Kh(f, 0, q, g, d, e, 0, 0)
            }
            this.jJ = a;
            this.fJ = b;
            this.iJ = c;
            this.gJ = d;
            this.eJ = e;
            return this.hJ = h
        },
        oB: function(a) {
            a ? (this.Zd.fillStyle = p.$e(a), this.Zd.fillRect(0, 0, this.width, this.height)) : this.Zd.clearRect(0, 0, this.width, this.height)
        },
        Kr: function(a, b, c, d, e, f, g) {
            var h = [];
            c || (c = new aa(0, 0, this.width, this.height));
            e = this.app.kv(e);
            a = p.bA(this.Zd, a, b, c, e, h);
            if (0 != a) switch (c = 0, 0 != (b & p.Dp) ? c = this.height - a : 0 != (b & p.xi) && (c = this.height / 2 - a / 2), f) {
                case 1:
                    p.Kh(this.Zd, 1, c + 1, h, e, g, 0, 0);
                    p.Kh(this.Zd, 0, c, h, e, d, 0, 0);
                    break;
                case 2:
                    p.Kh(this.Zd, 1, c, h, e, g, 0, 0);
                    p.Kh(this.Zd, 1, c + 2, h, e, g, 0, 0);
                    p.Kh(this.Zd, 0, c + 1, h, e, g, 0, 0);
                    p.Kh(this.Zd, 2, c + 1, h, e, g, 0, 0);
                    p.Kh(this.Zd, 1, c + 1, h, e, d, 0, 0);
                    break;
                case 0:
                    p.Kh(this.Zd, 0, c, h, e, d, 0, 0)
            }
        },
        resize: function(a, b) {
            if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
        },
        Ab: function(a, b, c, d, e) {
            a.sj(this.canvas, b, c, this.width, this.height, d, e)
        }
    };
    Ka.CH = [{
        vb: navigator.userAgent,
        cd: "Chrome",
        wc: "Chrome"
    }, {
        vb: navigator.userAgent,
        cd: "OmniWeb",
        cn: "OmniWeb/",
        wc: "OmniWeb"
    }, {
        vb: navigator.vendor,
        cd: "Apple",
        wc: "Safari",
        cn: "Version"
    }, {
        eK: window.opera,
        wc: "Opera",
        cn: "Version"
    }, {
        vb: navigator.vendor,
        cd: "iCab",
        wc: "iCab"
    }, {
        vb: navigator.vendor,
        cd: "KDE",
        wc: "Konqueror"
    }, {
        vb: navigator.userAgent,
        cd: "Firefox",
        wc: "Firefox"
    }, {
        vb: navigator.vendor,
        cd: "Camino",
        wc: "Camino"
    }, {
        vb: navigator.userAgent,
        cd: "Netscape",
        wc: "Netscape"
    }, {
        vb: navigator.userAgent,
        cd: "MSIE",
        wc: "Explorer",
        cn: "MSIE"
    }, {
        vb: navigator.userAgent,
        cd: "Gecko",
        wc: "Mozilla",
        cn: "rv"
    }, {
        vb: navigator.userAgent,
        cd: "Mozilla",
        wc: "Netscape",
        cn: "Mozilla"
    }];
    Ka.EH = [{
        vb: navigator.platform,
        cd: "Win",
        wc: "Windows"
    }, {
        vb: navigator.platform,
        cd: "Mac",
        wc: "MacOS"
    }, {
        vb: navigator.userAgent,
        cd: "iPhone",
        wc: "iOS"
    }, {
        vb: navigator.userAgent,
        cd: "iPod",
        wc: "iOS"
    }, {
        vb: navigator.userAgent,
        cd: "iPad",
        wc: "iOS"
    }, {
        vb: navigator.userAgent,
        cd: "Android",
        wc: "Android"
    }, {
        vb: navigator.platform,
        cd: "Windows Phone",
        wc: "Windows Phone"
    }, {
        vb: navigator.platform,
        cd: "Linux",
        wc: "Linux"
    }];
    Ka.prototype = {
        dD: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].vb,
                    d = a[b].eK;
                this.RD = a[b].cn || a[b].wc;
                if (c) {
                    if (-1 != c.indexOf(a[b].cd)) return a[b].wc
                } else if (d) return a[b].wc
            }
        },
        eD: function(a) {
            var b = a.indexOf(this.RD);
            if (-1 != b) return parseFloat(a.substring(b + this.RD.length + 1))
        }
    };
    p.WQ = function(a, b, c, d) {
        var e = document.createElement("canvas");
        e.width = b.width;
        e.height = b.height;
        var f = e.getContext("2d");
        0 == b.sb ? f.drawImage(b.rb, 0, 0) : f.drawImage(a.ca.Mb[b.sb], b.yd, b.zd, b.width, b.height, 0, 0, b.width, b.height);
        var g = f.getImageData(0, 0, b.width, b.height),
            h = d >> 16 & 255,
            q = d >> 8 & 255;
        d &= 255;
        var k = c >> 16 & 255,
            C = c >> 8 & 255;
        c &= 255;
        var l, p, m;
        for (m = 0; m < b.height; m++)
            for (p = 0; p < b.width; p++) l = 4 * (m * b.width + p), g.data[l] == k && g.data[l + 1] == C && g.data[l + 2] == c && (g.data[l] = h, g.data[l + 1] = q, g.data[l + 2] = d);
        f.putImageData(g, 0, 0);
        f = new Z;
        f.app = a;
        f.width = b.width;
        f.height = b.height;
        f.Ga = b.Ga;
        f.Ca = b.Ca;
        f.ph = b.ph;
        f.qh = b.qh;
        f.Sa = 0;
        f.rb = e;
        f.ef = b.ef;
        f.Nk = b.Nk;
        f.Th = b.Th;
        return f
    };
    ya.aF = 1;
    ya.bN = 2;
    ya.$E = 4;
    ya.ZE = 8;
    ya.prototype = {
        lH: function(a) {
            if (this.gI != a.He || this.Md != a.kc) return !1;
            var b = 0 != (this.tA & ya.aF),
                c = 0 != a.Ie;
            if (b != c) return !1;
            b = 0 != (this.tA & ya.$E);
            c = 400 < a.Je;
            return b != c ? !1 : !0
        },
        af: function() {
            return this.height + this.QI
        },
        measureText: function(a) {
            var b = 0,
                c = a.length,
                d, e;
            for (d = 0; d < c; d++) e = this.Iu.indexOf(a.charAt(d)), b = 0 <= e ? b + (this.Hu[e] + this.Av) : b + this.width;
            return b
        },
        fillText: function(a, b, c, d) {
            var e = b.length,
                f, g, h, q, k = this.Gg;
            if (0 == (this.Ka & ya.ZE))
                for (f = 0; f < e; f++) q = this.Iu.indexOf(b.charAt(f)), 0 <= q ? (h = Math.floor(q / this.Qr), g = q - h * this.Qr, h *= this.height + 1, g *= this.width + 1, 0 == k.sb ? a.drawImage(k.rb, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.app.ca.Mb[k.sb], g + k.yd, h + k.zd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.Hu[q] + this.Av) : (a.fillStyle = p.$e(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
            else
                for (c += this.measureText(b), f = e - 1; 0 <= f; f--) q = this.Iu.indexOf(b.charAt(f)),
                    0 <= q ? (c -= this.Hu[q] + this.Av, h = q / this.Qr, g = q - h * this.Qr, h *= this.height + 1, g *= this.width + 1, 0 == k.sb ? a.drawImage(k.rb, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.app.ca.Mb[k.sb], g + k.yd, h + k.zd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = p.$e(this.color), a.fillRect(c, d, this.width, this.height))
        }
    };
    X.vi = 1;
    X.EL = 17408;
    X.DL = 17664;
    X.xL = 17920;
    X.vL = 18176;
    X.wL = 18432;
    X.yL = 18688;
    X.GL = 18944;
    X.BL = 19200;
    X.zL = 19456;
    X.AL = 19712;
    X.HL = 19968;
    X.IL = 20224;
    X.CL = 20480;
    X.FL = 20736;
    X.UD = 983039;
    X.create = function(a) {
        var b = !1,
            c = !1,
            d = !1,
            e = !1,
            f = !1,
            g = !1,
            h = !1,
            q = !1,
            k = !1,
            C = !1,
            l = a.file.S,
            p = a.file.o(),
            m, n = a.file.s();
        switch (n) {
            case 65535:
                m = new ga;
                break;
            case 131071:
                m = new ga;
                break;
            case 262143:
                m = new ACT_SETVARG;
                break;
            case 327679:
                m = new ACT_SUBVARG;
                break;
            case 393215:
                m = new ACT_ADDVARG;
                break;
            case 458751:
                m = new ACT_GRPACTIVATE;
                break;
            case 524287:
                m = new ACT_GRPDEACTIVATE;
                break;
            case 983039:
                m = new ACT_STARTLOOP;
                break;
            case 1048575:
                m = new ACT_STOPLOOP;
                break;
            case 1114111:
                m = new ACT_SETLOOPINDEX;
                break;
            case 1179647:
                m = new ACT_RANDOMIZE;
                break;
            case 1310719:
                m = new ACT_SETGLOBALSTRING;
                break;
            case 1572863:
                m = new ga;
                break;
            case 1638399:
                m = new ga;
                break;
            case 1835007:
                m = new ACT_SETVARGCONST;
                b = !0;
                break;
            case 1900543:
                m = new ACT_SETVARG;
                break;
            case 1966079:
                m = new ACT_SETVARGCONST;
                b = !0;
                break;
            case 2031615:
                m = new ACT_SETVARG;
                break;
            case 2097151:
                m = new ACT_ADDVARGCONST;
                c = !0;
                break;
            case 2162687:
                m = new ACT_ADDVARG;
                break;
            case 2228223:
                m = new ACT_ADDVARGCONST;
                c = !0;
                break;
            case 2293759:
                m = new ACT_ADDVARG;
                break;
            case 2359295:
                m = new ACT_SUBVARGCONST;
                d = !0;
                break;
            case 2424831:
                m = new ACT_SUBVARG;
                break;
            case 2490367:
                m = new ACT_SUBVARGCONST;
                d = !0;
                break;
            case 2555903:
                m = new ACT_SUBVARG;
                break;
            case 2883583:
                m = new ACT_EXECUTECHILDEVENTS;
                break;
            case 2949119:
                m = new ga;
                break;
            case 65534:
                m = new ACT_PLAYSAMPLE;
                break;
            case 131070:
                m = new vb;
                break;
            case 327678:
                m = new ACT_PLAYLOOPSAMPLE;
                break;
            case 458750:
                m = new ACT_STOPSPESAMPLE;
                break;
            case 524286:
                m = new ACT_PAUSESAMPLE;
                break;
            case 589822:
                m = new ACT_RESUMESAMPLE;
                break;
            case 786430:
                m = new wb;
                break;
            case 851966:
                m = new xb;
                break;
            case 917502:
                m = new ACT_PAUSECHANNEL;
                break;
            case 983038:
                m = new ACT_RESUMECHANNEL;
                break;
            case 1048574:
                m = new yb;
                break;
            case 1114110:
                m = new ACT_SETCHANNELPOS;
                break;
            case 1179646:
                m = new zb;
                break;
            case 1245182:
                m = new ga;
                break;
            case 1310718:
                m = new ACT_SETSAMPLEPOS;
                break;
            case 1376254:
                m = new ACT_SETSAMPLEMAINVOL;
                break;
            case 1441790:
                m = new ACT_SETSAMPLEVOL;
                break;
            case 1507326:
                m = new ga;
                break;
            case 1572862:
                m = new ga;
                break;
            case 1638398:
                m = new ACT_PAUSEALLCHANNELS;
                break;
            case 1703934:
                m = new ACT_RESUMEALLCHANNELS;
                break;
            case 2031614:
                m = new ACT_LOCKCHANNEL;
                break;
            case 2097150:
                m = new ACT_UNLOCKCHANNEL;
                break;
            case 2162686:
                m = new ACT_SETCHANNELFREQ;
                break;
            case 2228222:
                m = new ACT_SETSAMPLEFREQ;
                break;
            case 2424830:
                m = new ACT_PLAYSAMPLE2;
                break;
            case 65533:
                m = new ACT_NEXTLEVEL;
                break;
            case 131069:
                m = new ACT_PREVLEVEL;
                break;
            case 196605:
                m = new Ab;
                break;
            case 262141:
                m = new ACT_PAUSEKEY;
                break;
            case 327677:
                m = new Bb;
                break;
            case 393213:
                m = new ACT_RESTARTGAME;
                break;
            case 458749:
                m = new ACT_RESTARTLEVEL;
                break;
            case 524285:
                m = new Cb;
                break;
            case 589821:
                m = new ACT_CDISPLAYX;
                break;
            case 655357:
                m = new ACT_CDISPLAYY;
                break;
            case 983037:
                m = new ACT_FULLSCREENMODE;
                break;
            case 1048573:
                m = new ACT_WINDOWEDMODE;
                break;
            case 1114109:
                m = new ACT_SETFRAMERATE;
                break;
            case 1179645:
                m = new ACT_PAUSEKEY;
                break;
            case 1245181:
                m = new ACT_PAUSEANYKEY;
                break;
            case 1310717:
                m = new ACT_SETVSYNCON;
                break;
            case 1376253:
                m = new ACT_SETVSYNCOFF;
                break;
            case 1441789:
                m = new ACT_SETVIRTUALWIDTH;
                break;
            case 1507325:
                m = new ACT_SETVIRTUALHEIGHT;
                break;
            case 1572861:
                m = new ACT_SETFRAMEBDKCOLOR;
                break;
            case 1638397:
                m = new ACT_DELCREATEDBKDAT;
                break;
            case 1703933:
                m = new ACT_DELALLCREATEDBKD;
                break;
            case 1769469:
                m = new ACT_SETFRAMEWIDTH;
                break;
            case 1835005:
                m = new ACT_SETFRAMEHEIGHT;
                break;
            case 2097149:
                m = new ACT_PLAYDEMO;
                break;
            case 2162685:
                m = new ga;
                break;
            case 2228221:
                m = new ga;
                break;
            case 2293757:
                m = new ga;
                break;
            case 2359293:
                m = new ga;
                break;
            case 2424829:
                m = new ga;
                break;
            case 2490365:
                m = new ACT_SETSTRETCHRESAMPLING;
                break;
            case 65532:
                m = new ACT_SETTIMER;
                break;
            case 131068:
                m = new ACT_EVENTAFTER;
                break;
            case 196604:
                m = new ACT_NEVENTSAFTER;
                break;
            case 65530:
                m = new ACT_HIDECURSOR;
                break;
            case 131066:
                m = new ACT_SHOWCURSOR;
                break;
            case 65529:
                m = new ACT_SETSCORE;
                break;
            case 131065:
                m = new ACT_SETLIVES;
                break;
            case 196601:
                m = new ACT_NOINPUT;
                break;
            case 262137:
                m = new ACT_RESTINPUT;
                break;
            case 327673:
                m = new ACT_ADDSCORE;
                break;
            case 393209:
                m = new ACT_ADDLIVES;
                break;
            case 458745:
                m = new ACT_SUBSCORE;
                break;
            case 524281:
                m = new ACT_SUBLIVES;
                break;
            case 589817:
                m = new ACT_SETINPUT;
                break;
            case 655353:
                m = new ACT_SETINPUTKEY;
                break;
            case 720889:
                m = new ACT_SETPLAYERNAME;
                break;
            case 65531:
                m = new Db;
                break;
            case 131067:
                m = new ACT_CREATEBYNAME;
                break;
            case 196603:
                m = new ACT_CREATEEXP;
                break;
            case 262139:
                m = new ACT_CREATEBYNAMEEXP;
                break;
            case 5242883:
                m = new ACT_STRDESTROY;
                break;
            case 5308419:
                m = new ACT_STRDISPLAY;
                break;
            case 5373955:
                m = new ACT_STRDISPLAYDURING;
                break;
            case 5439491:
                m = new ACT_STRSETCOLOUR;
                break;
            case 5505027:
                m = new ACT_STRSET;
                break;
            case 5570563:
                m = new ACT_STRPREV;
                break;
            case 5636099:
                m = new ACT_STRNEXT;
                break;
            case 5701635:
                m = new ACT_STRDISPLAYSTRING;
                break;
            case 5767171:
                m = new Eb;
                break;
            case 5242882:
                m = new ACT_SPRPASTE;
                break;
            case 5308418:
                m = new ACT_SPRFRONT;
                break;
            case 5373954:
                m = new ACT_SPRBACK;
                break;
            case 5439490:
                m = new ACT_SPRADDBKD;
                break;
            case 5505026:
                m = new ACT_SPRREPLACECOLOR;
                break;
            case 5570562:
                m = new Fb;
                break;
            case 5636098:
                m = new ACT_SPRSETSCALEX;
                break;
            case 5701634:
                m = new ACT_SPRSETSCALEY;
                break;
            case 5767170:
                m = new ACT_SPRSETANGLE;
                break;
            case 5242887:
                m = new Gb;
                break;
            case 5308423:
                m = new Hb;
                break;
            case 5373959:
                m = new Ib;
                break;
            case 5439495:
                m = new ACT_CSETMIN;
                break;
            case 5505031:
                m = new ACT_CSETMAX;
                break;
            case 5570567:
                m = new ACT_CSETCOLOR1;
                break;
            case 5636103:
                m = new ACT_CSETCOLOR2;
                break;
            case 5242884:
                m = new ACT_QASK;
                break;
            case 5242889:
                m = new ACT_CCARESTARTAPP;
                break;
            case 5308425:
                m = new ACT_CCARESTARTFRAME;
                break;
            case 5373961:
                m = new ACT_CCANEXTFRAME;
                break;
            case 5439497:
                m = new ACT_CCAPREVIOUSFRAME;
                break;
            case 5505033:
                m = new ACT_CCAENDAPP;
                break;
            case 5636105:
                m = new ACT_CCAJUMPFRAME;
                break;
            case 5701641:
                m = new ACT_CCASETGLOBALVALUE;
                break;
            case 5767177:
                m = new ACT_CCASHOW;
                break;
            case 5832713:
                m = new ACT_CCAHIDE;
                break;
            case 5898249:
                m = new ACT_CCASETGLOBALSTRING;
                break;
            case 5963785:
                m = new ACT_CCAPAUSEAPP;
                break;
            case 6029321:
                m = new ACT_CCARESUMEAPP;
                break;
            case 6094857:
                m = new ACT_CCASETWIDTH;
                break;
            case 6160393:
                m = new ACT_CCASETHEIGHT;
                break;
            default:
                switch (n & 4294901760) {
                    case 0:
                        m = new ACT_EXTEXTRA;
                        C = !0;
                        break;
                    case 65536:
                        m = new Jb;
                        break;
                    case 131072:
                        m = new Kb;
                        break;
                    case 196608:
                        m = new Lb;
                        break;
                    case 262144:
                        m = new ACT_EXTSTOP;
                        break;
                    case 327680:
                        m = new ACT_EXTSTART;
                        break;
                    case 393216:
                        m = new ACT_EXTSPEED;
                        break;
                    case 458752:
                        m = new ACT_EXTMAXSPEED;
                        break;
                    case 524288:
                        m = new ACT_EXTWRAP;
                        break;
                    case 589824:
                        m = new ACT_EXTBOUNCE;
                        break;
                    case 655360:
                        m = new ACT_EXTREVERSE;
                        break;
                    case 720896:
                        m = new ACT_EXTNEXTMOVE;
                        break;
                    case 786432:
                        m = new ACT_EXTPREVMOVE;
                        break;
                    case 851968:
                        m = new ACT_EXTSELMOVE;
                        break;
                    case 917504:
                        m = new ACT_EXTLOOKAT;
                        break;
                    case 983040:
                        m = new Mb;
                        break;
                    case 1048576:
                        m = new Nb;
                        break;
                    case 1114112:
                        m = new Ob;
                        break;
                    case 1179648:
                        m = new ACT_EXTFORCEDIR;
                        break;
                    case 1245184:
                        m = new ACT_EXTFORCESPEED;
                        break;
                    case 1310720:
                        m = new ACT_EXTRESTANIM;
                        break;
                    case 1376256:
                        m = new ACT_EXTRESTDIR;
                        break;
                    case 1441792:
                        m = new ACT_EXTRESTSPEED;
                        break;
                    case 1507328:
                        m = new ACT_EXTSETDIR;
                        break;
                    case 1572864:
                        m = new Pb;
                        break;
                    case 1638400:
                        m = new ACT_EXTSHUFFLE;
                        break;
                    case 1703936:
                        m = new Qb;
                        break;
                    case 1769472:
                        m = new Rb;
                        break;
                    case 1835008:
                        m = new Sb;
                        break;
                    case 1900544:
                        m = new ACT_EXTSHOOT;
                        break;
                    case 1966080:
                        m = new ACT_EXTSHOOTTOWARD;
                        break;
                    case 2031616:
                        m = new Tb;
                        e = !0;
                        break;
                    case 2097152:
                        m = new Vb;
                        f = !0;
                        break;
                    case 2162688:
                        m = new Xb;
                        g = !0;
                        break;
                    case 2228224:
                        m = new ACT_EXTDISPATCHVAR;
                        break;
                    case 2293760:
                        m = new ACT_EXTSETFLAG;
                        h = !0;
                        break;
                    case 2359296:
                        m = new ACT_EXTCLRFLAG;
                        q = !0;
                        break;
                    case 2424832:
                        m = new ACT_EXTCHGFLAG;
                        k = !0;
                        break;
                    case 2490368:
                        m = new ACT_EXTINKEFFECT;
                        break;
                    case 2555904:
                        m = new ACT_EXTSETSEMITRANSPARENCY;
                        break;
                    case 2621440:
                        m = new Zb;
                        break;
                    case 2686976:
                        m = new ACT_EXTRESTFRAME;
                        break;
                    case 2752512:
                        m = new ACT_EXTSETACCELERATION;
                        break;
                    case 2818048:
                        m = new ACT_EXTSETDECELERATION;
                        break;
                    case 2883584:
                        m = new ACT_EXTSETROTATINGSPEED;
                        break;
                    case 2949120:
                        m = new ACT_EXTSETDIRECTIONS;
                        break;
                    case 3014656:
                        m = new ACT_EXTBRANCHNODE;
                        break;
                    case 3080192:
                        m = new ACT_EXTSETGRAVITY;
                        break;
                    case 3145728:
                        m = new ACT_EXTGOTONODE;
                        break;
                    case 3211264:
                        m = new ACT_EXTSETVARSTRING;
                        break;
                    case 3276800:
                        m = new ACT_EXTSETFONTNAME;
                        break;
                    case 3342336:
                        m = new ACT_EXTSETFONTSIZE;
                        break;
                    case 3407872:
                        m = new ACT_EXTSETBOLD;
                        break;
                    case 3473408:
                        m = new ACT_EXTSETITALIC;
                        break;
                    case 3538944:
                        m = new ACT_EXTSETUNDERLINE;
                        break;
                    case 3604480:
                        m = new ga;
                        break;
                    case 3670016:
                        m = new ACT_EXTSETTEXTCOLOR;
                        break;
                    case 3735552:
                        m = new ACT_EXTSPRFRONT;
                        break;
                    case 3801088:
                        m = new ACT_EXTSPRBACK;
                        break;
                    case 3866624:
                        m = new ACT_EXTMOVEBEFORE;
                        break;
                    case 3932160:
                        m = new ACT_EXTMOVEAFTER;
                        break;
                    case 3997696:
                        m = new ACT_EXTMOVETOLAYER;
                        break;
                    case 4063232:
                        m = new ga;
                        break;
                    case 4128768:
                        m = new ACT_EXTSETEFFECT;
                        break;
                    case 4194304:
                        m = new ga;
                        break;
                    case 4259840:
                        m = new $b;
                        break;
                    case 4325376:
                        m = new ACT_EXTSETRGBCOEF;
                        break;
                    case 4390912:
                        m = new ga;
                        break;
                    case 4456448:
                        m = new ACT_EXTSETFRICTION;
                        break;
                    case 4521984:
                        m = new ACT_EXTSETELASTICITY;
                        break;
                    case 4587520:
                        m = new ACT_EXTAPPLYIMPULSE;
                        break;
                    case 4653056:
                        m = new ACT_EXTAPPLYANGULARIMPULSE;
                        break;
                    case 4718592:
                        m = new ACT_EXTAPPLYFORCE;
                        break;
                    case 4784128:
                        m = new ACT_EXTAPPLYTORQUE;
                        break;
                    case 4849664:
                        m = new ACT_EXTSETLINEARVELOCITY;
                        break;
                    case 4915200:
                        m = new ACT_EXTSETANGULARVELOCITY;
                        break;
                    case 4980736:
                        m = new ACT_EXTFOREACH;
                        break;
                    case 5046272:
                        m = new ACT_EXTFOREACH2;
                        break;
                    case 5111808:
                        m = new ACT_EXTSTOPFORCE;
                        break;
                    case 5177344:
                        m = new ACT_EXTSTOPTORQUE;
                        break;
                    default:
                        m = new ge
                }
        }
        if (null != m) {
            m.ba = n;
            m.Id = a.file.X();
            m.Ta = a.file.X();
            m.Ha = a.file.ub();
            m.vd = a.file.ub();
            m.uc = a.file.ub();
            m.wk = a.file.ub();
            n = 0;
            if (C) {
                m.uc--;
                var C = a.file.S,
                    u = a.file.o();
                a.file.o();
                n = a.file.o();
                a.file.seek(C + u)
            }
            if (0 < m.uc)
                for (m.u = Array(m.uc), C = 0; C < m.uc; C++) m.u[C] = Wa.create(a);
            if (0 != n) {
                C = null;
                switch (n) {
                    case 1:
                        C = new ACT_EXTSETFLAGBYEXP
                }
                null != C && (C.ba = m.ba, C.Id = m.Id, C.Ta = m.Ta, C.Ha = m.Ha, C.vd = m.vd, C.uc = m.uc, C.wk = m.wk, C.u = m.u, m = C)
            }
            if (b || c || d) b = m.u[0], m.Ad = b.value, b = m.u[1], m.value = b.ja[0].value;
            if (e || f || g) C = null, b = m.u[0], 53 != b.code && (c = b.value, b = m.u[1], 0 <= c && 2 == b.ja.length && (0 >= b.ja[1].code || 1310720 <= b.ja[1].code) && (65535 == b.ja[0].code || 1572863 == b.ja[0].code) && (e ? (C = new Ub, C.Ad = c, C.value = b.ja[0].value) : f ? (C = new Wb, C.Ad = c, C.value = b.ja[0].value) : g && (C = new Yb, C.Ad = c, C.value = b.ja[0].value)), null != C && (C.ba = m.ba, C.Id = m.Id, C.Ta = m.Ta, C.Ha = m.Ha, C.vd = m.vd, C.uc = m.uc, C.wk = m.wk, C.u = m.u, m = C));
            if (h || q || k) C = null, e = m.u[0], 2 == e.ja.length && (0 >= e.ja[1].code || 1310720 <= e.ja[1].code) && 65535 == e.ja[0].code && (h ? (C = new ACT_EXTSETFLAGCONST, C.R = 1 << e.ja[0].value) : q ? (C = new ACT_EXTCLRFLAGCONST, C.R = 1 << e.ja[0].value) : k && (C = new ACT_EXTCHGFLAGCONST, C.R = 1 << e.ja[0].value)), null != C && (C.ba = m.ba, C.Id = m.Id, C.Ta = m.Ta, C.Ha = m.Ha, C.vd = m.vd, C.uc = m.uc, C.wk = m.wk, C.u = m.u, m = C)
        }
        a.file.seek(l + p);
        return m
    };
    ub.YM = 1;
    ga.prototype = {
        Ma: function() {}
    };
    vb.prototype = {
        Ma: function(a) {
            a.h.sc.Us()
        }
    };
    wb.prototype = {
        Ma: function(a) {
            var b = this.u[0],
                c = a.Xa(this.u[1]),
                d = !1;
            45 == b.code ? (b = a.bo(b), b = a.h.zf.KA(b)) : (d = 0 != (b.xD & Qa.rG), b = b.tx);
            0 <= b && a.h.sc.play(b, 1, c - 1, d, -1, 0)
        }
    };
    xb.prototype = {
        Ma: function(a) {
            var b = this.u[0],
                c = !1;
            45 == b.code ? (b = a.bo(b), b = a.h.zf.KA(b)) : (c = 0 != (b.xD & Qa.rG), b = b.tx);
            var d = a.Xa(this.u[1]),
                e = a.Xa(this.u[2]);
            0 <= b && a.h.sc.play(b, e, d - 1, c, -1, 0)
        }
    };
    yb.prototype = {
        Ma: function(a) {
            var b = a.Xa(this.u[0]);
            a.h.sc.eL(b - 1)
        }
    };
    zb.prototype = {
        Ma: function(a) {
            var b = a.Xa(this.u[0]),
                c = a.Xa(this.u[1]);
            0 <= c && 100 >= c && a.h.sc.XK(b - 1, c)
        }
    };
    Ab.prototype = {
        Ma: function(a) {
            var b;
            if (26 == this.u[0].code) {
                if (b = this.u[0].value, -1 == a.h.uF(b)) return
            } else {
                b = a.Xa(this.u[0]) - 1;
                if (0 > b || 4096 <= b) return;
                a.h.RP && b++;
                b |= 32768
            }
            a.zb = k.Rp;
            a.Um = b;
            a.h.Ej = !0
        }
    };
    Bb.prototype = {
        Ma: function(a) {
            a.h.Ej = !0;
            a.h.bB && !a.h.PQ && (a.zb = k.Qp)
        }
    };
    Cb.prototype = {
        Ma: function(a) {
            var b = new lb;
            this.u[0].Yw(a, 0, b);
            a.PK(b.x, b.y, b.hm, 3)
        }
    };
    Db.prototype = {
        Ma: function(a) {
            var b = this.u[0],
                c = new lb;
            b.Yw(a, 17, c) && (c.vu ? (this.Ha |= X.vi, a.i.uj = !0) : this.Ha &= ~X.vi, b = a.$u(b.Cq, b.lz, c.x, c.y, c.dir, 0, c.hm, -1), 0 <= b && (b = a.G[b], a.i.Zl(b), b && 32 <= b.Da && a.UG(b), a.Lp(b) || null != a.iR && a.oi.iK(b)))
        }
    };
    Eb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.bo(this.u[0]), null == b.gg || null != b.gg && a != b.gg) && (b.ND(a), b.kL(-1))
        }
    };
    Fb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c = a.xI(this.u[0]);
                0 > c && (c = 0);
                var d = !1;
                0 != a.Xa(this.u[1]) && (d = !0);
                b.D.T &= ~A.eu;
                d && (b.D.T |= A.eu);
                b.px(c, c)
            }
        }
    };
    Gb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Ee(this.u[0]), b.Mu(a), b.En(a))
        }
    };
    Hb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Ee(this.u[0]), b.uH(a))
        }
    };
    Ib.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Ee(this.u[0]), b.vH(a))
        }
    };
    Jb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c = new lb;
                this.u[0].Yw(a, 1, c) && (k.dc(b, c.x), k.ec(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Zb(b) != c && (b.b.Za = c, b.b.O = !0, b.B.ta.xf(c), 2 == b.Da && b.aa.hk(0))))
            }
        }
    };
    Kb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Xa(this.u[0]), k.dc(b, Math.floor(a)))
        }
    };
    Lb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Xa(this.u[0]), k.ec(b, Math.floor(a)))
        }
    };
    Mb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && (a.aa.Uo = !0)
        }
    };
    Nb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && (a.aa.Uo = !1)
        }
    };
    Ob.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = 10 == this.u[0].code ? this.u[0].value : a.Xa(this.u[0]), 0 > a && (a = 0), b.aa.zq(a), b.b.O = !0)
        }
    };
    Pb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (3 == b.Da ? 0 != (b.bD & k.Wx) ? (b.D.Co(), b.D.T &= ~A.sg, b.V |= L.vh) : (b.V |= L.Be, a.xg(b.Ub)) : 0 == (b.V & L.Be) && (b.V |= L.Be, 0 != (b.ra & D.$j) || 0 != (b.ra & D.bk) ? a.WA(b) : (b.co = !1, a.xg(b.Ub))))
        }
    };
    Qb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && k.IJ(a)
        }
    };
    Rb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && k.JJ(a)
        }
    };
    Sb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && null != b.D && (b.D.Co(), b.D.T &= ~A.sg, 2 == this.u[0].code ? (b.D.pl = this.u[0].nd, b.D.Vm = this.u[0].nd) : (b.D.pl = a.Xa(this.u[0]), b.D.Vm = b.D.pl))
        }
    };
    Tb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c;
                c = 53 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value;
                0 <= c && null != b.M && (c >= b.M.Na.length && b.M.Vi(c + 10), a = a.Ee(this.u[1]), b.M.Na[c] = a)
            }
        }
    };
    Ub.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && 0 <= this.Ad && null != a.M && (this.Ad >= a.M.Na.length && a.M.Vi(this.Ad + 10), a.M.Na[this.Ad] = this.value)
        }
    };
    Vb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c;
                c = 53 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value;
                0 <= c && null != b.M && (c >= b.M.Na.length && b.M.Vi(c + 10), a = a.Ee(this.u[1]), b.M.Na[c] += a)
            }
        }
    };
    Wb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && 0 <= this.Ad && null != a.M && (this.Ad >= a.M.Na.length && a.M.Vi(this.Ad + 10), a.M.Na[this.Ad] += this.value)
        }
    };
    Xb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c;
                c = 53 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value;
                0 <= c && null != b.M && (c >= b.M.Na.length && b.M.Vi(c + 10), a = a.Ee(this.u[1]), b.M.Na[c] -= a)
            }
        }
    };
    Yb.prototype = {
        Ma: function(a) {
            a = a.i.ac(this);
            null != a && 0 <= this.Ad && null != a.M && (this.Ad >= a.M.Na.length && a.M.Vi(this.Ad + 10), a.M.Na[this.Ad] -= this.value)
        }
    };
    Zb.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            null != b && (a = a.Xa(this.u[0]), b.aa.WG(a), b.b.O = !0)
        }
    };
    $b.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b && null != b.D) {
                a = p.hH(255 - a.Xa(this.u[0]), 0, 255);
                var c = 0 == (b.D.Xb & A.lt);
                b.D.Xb = b.D.Xb & A.Nx | A.lt;
                var d = 16777215;
                c || (d = b.D.Yb);
                b.D.Yb = a << 24 | d & 16777215;
                b.D.EJ(b.D.Xb, b.D.Yb)
            }
        }
    };
    P.zy = 6;
    P.qE = -983041;
    P.rE = -1507329;
    P.sE = -1572865;
    P.create = function(a) {
        var b = a.file.S,
            c = a.file.o(),
            d, e = a.file.s();
        switch (e) {
            case -2752513:
                d = new CND_STARTCHILDEVENT;
                break;
            case -2686977:
                d = new ua;
                break;
            case -2555905:
                d = new bc;
                break;
            case -2490369:
                d = new CND_COMPAREGCONST_GT;
                break;
            case -2424833:
                d = new CND_COMPAREGCONST_GE;
                break;
            case -2359297:
                d = new CND_COMPAREGCONST_LT;
                break;
            case -2293761:
                d = new CND_COMPAREGCONST_LE;
                break;
            case -2228225:
                d = new CND_COMPAREGCONST_NE;
                break;
            case -2162689:
                d = new CND_COMPAREGCONST_EQ;
                break;
            case -2097153:
                d = new CND_COMPAREGCONST_GT;
                break;
            case -2031617:
                d = new CND_COMPAREGCONST_GE;
                break;
            case -1966081:
                d = new CND_COMPAREGCONST_LT;
                break;
            case -1900545:
                d = new CND_COMPAREGCONST_LE;
                break;
            case -1835009:
                d = new CND_COMPAREGCONST_NE;
                break;
            case -1769473:
                d = new CND_COMPAREGCONST_EQ;
                break;
            case -1703937:
                d = new ua;
                break;
            case -1638401:
                d = new CND_CHANCE;
                break;
            case -1572865:
                d = new ua;
                break;
            case -1507329:
                d = new ua;
                break;
            case -1441793:
                d = new CND_GROUPSTART;
                break;
            case -1245185:
                d = new CND_COMPAREGSTRING;
                break;
            case -983041:
                d = new CND_ONLOOP;
                break;
            case -720897:
                d = new CND_GROUPACTIVATED;
                break;
            case -655361:
                d = new ua;
                break;
            case -589825:
                d = new ua;
                break;
            case -524289:
                d = new ua;
                break;
            case -458753:
                d = new CND_COMPAREG;
                break;
            case -393217:
                d = new cc;
                break;
            case -327681:
                d = new dc;
                break;
            case -262145:
                d = new CND_REPEAT;
                break;
            case -196609:
                d = new CND_NOMORE;
                break;
            case -131073:
                d = new ec;
                break;
            case -65537:
                d = new ua;
                break;
            case -1:
                d = new ac;
                break;
            case -524290:
                d = new CND_SPCHANNELPAUSED;
                break;
            case -458754:
                d = new fc;
                break;
            case -327682:
                d = new CND_SPSAMPAUSED;
                break;
            case -131074:
                d = new CND_NOSAMPLAYING;
                break;
            case -2:
                d = new CND_NOSPSAMPLAYING;
                break;
            case -458755:
                d = new CND_ENDOFPAUSE;
                break;
            case -393219:
                d = new CND_ISVSYNCON;
                break;
            case -327683:
                d = new CND_ISLADDER;
                break;
            case -262147:
                d = new CND_ISOBSTACLE;
                break;
            case -196611:
                d = new CND_QUITAPPLICATION;
                break;
            case -131075:
                d = new CND_LEVEL;
                break;
            case -65539:
                d = new CND_END;
                break;
            case -3:
                d = new gc;
                break;
            case -458756:
                d = new pc;
                break;
            case -393220:
                d = new CND_TIMEREQUALS;
                break;
            case -327684:
                d = new CND_ONEVENT;
                break;
            case -262148:
                d = new CND_TIMEOUT;
                break;
            case -196612:
                d = new CND_EVERY;
                break;
            case -131076:
                d = new CND_TIMER;
                break;
            case -65540:
                d = new CND_TIMERINF;
                break;
            case -4:
                d = new hc;
                break;
            case -720902:
                d = new CND_ONMOUSEWHEELDOWN;
                break;
            case -655366:
                d = new CND_ONMOUSEWHEELUP;
                break;
            case -589830:
                d = new CND_MOUSEON;
                break;
            case -524294:
                d = new CND_ANYKEY;
                break;
            case -458758:
                d = new ic;
                break;
            case -393222:
                d = new jc;
                break;
            case -327686:
                d = new CND_MCLICKINZONE;
                break;
            case -262150:
                d = new kc;
                break;
            case -196614:
                d = new lc;
                break;
            case -131078:
                d = new CND_MINZONE;
                break;
            case -65542:
                d = new mc;
                break;
            case -6:
                d = new nc;
                break;
            case -327687:
                d = new CND_JOYPUSHED;
                break;
            case -262151:
                d = new CND_NOMORELIVE;
                break;
            case -196615:
                d = new CND_JOYPRESSED;
                break;
            case -131079:
                d = new CND_LIVE;
                break;
            case -65543:
                d = new CND_SCORE;
                break;
            case -7:
                d = new CND_PLAYERPLAYING;
                break;
            case -1441797:
                d = new CND_CHOOSEALLINLINE;
                break;
            case -1376261:
                d = new CND_CHOOSEFLAGRESET;
                break;
            case -1310725:
                d = new CND_CHOOSEFLAGSET;
                break;
            case -1245189:
                d = new CND_CHOOSEVALUE;
                break;
            case -1179653:
                d = new CND_PICKFROMID;
                break;
            case -1114117:
                d = new CND_CHOOSEALLINZONE;
                break;
            case -1048581:
                d = new CND_CHOOSEALL;
                break;
            case -983045:
                d = new CND_CHOOSEZONE;
                break;
            case -917509:
                d = new CND_NUMOFALLOBJECT;
                break;
            case -851973:
                d = new CND_NUMOFALLZONE;
                break;
            case -786437:
                d = new CND_NOMOREALLZONE;
                break;
            case -720901:
                d = new CND_CHOOSEFLAGRESET_OLD;
                break;
            case -655365:
                d = new CND_CHOOSEFLAGSET_OLD;
                break;
            case -458757:
                d = new CND_CHOOSEVALUE_OLD;
                break;
            case -393221:
                d = new CND_PICKFROMID_OLD;
                break;
            case -327685:
                d = new CND_CHOOSEALLINZONE_OLD;
                break;
            case -262149:
                d = new CND_CHOOSEALL_OLD;
                break;
            case -196613:
                d = new CND_CHOOSEZONE_OLD;
                break;
            case -131077:
                d = new CND_NUMOFALLOBJECT_OLD;
                break;
            case -65541:
                d = new CND_NUMOFALLZONE_OLD;
                break;
            case -5:
                d = new CND_NOMOREALLZONE_OLD;
                break;
            case -5505022:
                d = new CND_CMPSCALEY;
                break;
            case -5439486:
                d = new CND_CMPSCALEX;
                break;
            case -5373950:
                d = new CND_CMPANGLE;
                break;
            case -5308409:
                d = new oc;
                break;
            case -5439484:
                d = new CND_QEQUAL;
                break;
            case -5373948:
                d = new CND_QFALSE;
                break;
            case -5308412:
                d = new CND_QEXACT;
                break;
            case -5505015:
                d = new CND_CCAISPAUSED;
                break;
            case -5439479:
                d = new CND_CCAISVISIBLE;
                break;
            case -5373943:
                d = new CND_CCAAPPFINISHED;
                break;
            case -5308407:
                d = new CND_CCAFRAMECHANGED;
                break;
            default:
                switch (e & 4294901760) {
                    case -3211264:
                        d = new CND_EXTCMPINSTANCEDATA;
                        break;
                    case -3145728:
                        d = new CND_EXTPICKMAXVALUE;
                        break;
                    case -3080192:
                        d = new CND_EXTPICKMINVALUE;
                        break;
                    case -3014656:
                        d = new CND_EXTCMPLAYER;
                        break;
                    case -2949120:
                        d = new CND_EXTCOMPARE;
                        break;
                    case -2883584:
                        d = new CND_EXTPICKCLOSEST;
                        break;
                    case -2818048:
                        d = new fb;
                        break;
                    case -2752512:
                        d = new fb;
                        break;
                    case -2686976:
                        d = new CND_EXTONLOOP;
                        break;
                    case -2621440:
                        d = new CND_EXTISSTRIKEOUT;
                        break;
                    case -2555904:
                        d = new CND_EXTISUNDERLINE;
                        break;
                    case -2490368:
                        d = new CND_EXTISITALIC;
                        break;
                    case -2424832:
                        d = new CND_EXTISBOLD;
                        break;
                    case -2359296:
                        d = new qc;
                        break;
                    case -2293760:
                        d = new CND_EXTPATHNODENAME;
                        break;
                    case -2228224:
                        d = new rc;
                        break;
                    case -2162688:
                        d = new CND_EXTNOMOREOBJECT;
                        break;
                    case -2097152:
                        d = new sc;
                        break;
                    case -2031616:
                        d = new CND_EXTNOMOREZONE;
                        break;
                    case -1966080:
                        d = new CND_EXTNUMBERZONE;
                        break;
                    case -1900544:
                        d = new tc;
                        break;
                    case -1835008:
                        d = new uc;
                        break;
                    case -1769472:
                        d = new vc;
                        break;
                    case -1703936:
                        d = new CND_EXTCMPVARFIXED;
                        break;
                    case -1638400:
                        d = new wc;
                        break;
                    case -1572864:
                        d = new CND_EXTFLAGRESET;
                        break;
                    case -1507328:
                        d = new CND_EXTISCOLBACK;
                        break;
                    case -1441792:
                        d = new CND_EXTNEARBORDERS;
                        break;
                    case -1376256:
                        d = new CND_EXTENDPATH;
                        break;
                    case -1310720:
                        d = new CND_EXTPATHNODE;
                        break;
                    case -1245184:
                        d = new CND_EXTCMPACC;
                        break;
                    case -1179648:
                        d = new CND_EXTCMPDEC;
                        break;
                    case -1114112:
                        d = new xc;
                        break;
                    case -1048576:
                        d = new CND_EXTCMPY;
                        break;
                    case -983040:
                        d = new CND_EXTCMPSPEED;
                        break;
                    case -917504:
                        d = new CND_EXTCOLLISION;
                        break;
                    case -851968:
                        d = new CND_EXTCOLBACK;
                        break;
                    case -786432:
                        d = new CND_EXTOUTPLAYFIELD;
                        break;
                    case -720896:
                        d = new CND_EXTINPLAYFIELD;
                        break;
                    case -655360:
                        d = new CND_EXTISOUT;
                        break;
                    case -589824:
                        d = new CND_EXTISIN;
                        break;
                    case -524288:
                        d = new CND_EXTFACING;
                        break;
                    case -458752:
                        d = new CND_EXTSTOPPED;
                        break;
                    case -393216:
                        d = new CND_EXTBOUNCING;
                        break;
                    case -327680:
                        d = new CND_EXTREVERSED;
                        break;
                    case -262144:
                        d = new yc;
                        break;
                    case -196608:
                        d = new zc;
                        break;
                    case -131072:
                        d = new Ac;
                        break;
                    case -65536:
                        d = new CND_EXTCMPFRAME;
                        break;
                    default:
                        d = new he
                }
        }
        if (null != d && (d.ba = e, d.Id = a.file.X(), d.Ta = a.file.X(), d.Ha = a.file.ub(), d.vd = a.file.ub(), d.uc = a.file.ub(), d.wk = a.file.ub(), d.oQ = a.file.o(), 0 < d.uc)) {
            d.u = Array(d.uc);
            for (e = 0; e < d.uc; e++) d.u[e] = Wa.create(a); - 2686976 == d.ba && (e = d.u[0], 2 == e.ja.length && e.ja[0].code == ba.Al && 0 == e.ja[1].code && (d.QP = !0, d.name = e.ja[0].vb.toLowerCase()))
        }
        a.file.seek(b + c);
        return d
    };
    P.rm = function(a) {
        return a.vd & T.Sj ? !1 : !0
    };
    P.Pg = function(a) {
        return a.vd & T.Sj ? !0 : !1
    };
    P.cC = function(a, b) {
        return a.vd & T.Sj ? !b : b
    };
    P.qH = function(a) {
        var b = a.i.Qe,
            c = b.Ti;
        a = b.Ti = a.pc;
        if (a == c) return !1;
        a--;
        return a == c ? !1 : !0
    };
    P.YP = function(a, b) {
        var c, d = b.hr;
        if (null == d) d = new N, b.hr = d;
        else
            for (c = 0; c < d.size(); c++)
                if (d.get(c) == a) return !1;
        d.add(a);
        d = b.RA;
        if (null == d) return !0;
        for (c = 0; c < d.size(); c++)
            if (d.get(c) == a) return !1;
        return !0
    };
    P.WP = function(a, b) {
        return 0 == b ? !1 : b == a.pc || b == a.pc - 1 ? !0 : !1
    };
    ua.prototype = {
        gb: function() {
            return !1
        },
        fa: function() {
            return !1
        }
    };
    ac.prototype = {
        gb: function() {
            return !0
        },
        fa: function() {
            return !0
        }
    };
    P.prototype = {
        Mn: function(a, b) {
            var c = a.i.De(this.Ta),
                d = a.i.vc,
                e = this.u[0],
                f;
            f = e.ja[0];
            if (0 != (this.vd & T.rt))
                for (f = f.code != ba.ey && f.code != ba.YE || 0 != e.ja[1].code ? a.Xa(e) : f.value; null != c;) 0 == b.Nn(c, f, e.Lf) && (d--, a.i.hc()),
                    c = a.i.Jd();
            else
                for (; null != c;) f = a.Xa(e), 0 == b.Nn(c, f, e.Lf) && (d--, a.i.hc()), c = a.i.Jd();
            return 0 != d ? !0 : !1
        },
        Xl: function(a, b) {
            for (var c = a.i.De(this.Ta), d = a.i.vc; null != c;) 0 == b.Rq(c) && (d--, a.i.hc()), c = a.i.Jd();
            return 0 != d ? !0 : !1
        },
        YA: function(a) {
            if (a.i.bh) return a.i.De(this.Ta), a.i.De(this.u[0].tb), !1;
            var b = !1;
            0 != (this.vd & T.Sj) && (b = !0);
            var c = a.i.De(this.Ta);
            if (null == c) return P.Pg(this);
            var d = a.i.vc,
                e = this.u[0].$f;
            0 <= e ? (a.Bv[0] = e, a.Bv[1] = this.u[0].tb, e = a.Bv) : e = a.i.$c[this.u[0].tb & 32767].J;
            var f, g = new N,
                h, q;
            do {
                h = c.w;
                q = c.v;
                3 <= this.uc && (h = a.Xa(this.u[1]), q = a.Xa(this.u[2]));
                f = a.sm(c, c.b.Ra, c.b.ib, c.b.Gb, c.b.Hb, h, q, e);
                if (null == f) 0 == b && (d--, a.i.hc());
                else {
                    c = !1;
                    for (h = 0; h < f.size(); h++) q = f.get(h), 0 == (q.V & L.Be) && (g.add(q), c = !0);
                    1 == b ? 1 == c && (d--, a.i.hc()) : 0 == c && (d--, a.i.hc())
                }
                c = a.i.Jd()
            } while (null != c);
            if (0 == d) return !1;
            c = a.i.De(this.u[0].tb);
            if (null == c) return !1;
            d = a.i.vc;
            if (0 == b) {
                do {
                    for (h = 0; h < g.size() && (q = g.get(h), c != q); h++);
                    h == g.size() && (d--, a.i.hc());
                    c = a.i.Jd()
                } while (null != c);
                return 0 != d ? !0 : !1
            }
            do {
                for (h = 0; h < g.size(); h++)
                    if (q = g.get(h), c == q) {
                        d--;
                        a.i.hc();
                        break
                    } c = a.i.Jd()
            } while (null != c);
            return 0 != d ? !0 : !1
        }
    };
    bc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            return 5 == (67 == this.u[0].code ? this.u[0].value : a.Xa(this.u[0])) ? P.rm(this) : P.Pg(this)
        }
    };
    cc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            a = a.i.Qe;
            if (0 != (a.la & K.kn)) return !0;
            if (0 != (a.la & K.jn)) return !1;
            a.Ti = -2;
            a.la |= K.kn;
            return !0
        }
    };
    dc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            a = a.i.Qe;
            if (0 != (a.la & K.Jp)) return !1;
            a.la |= K.Jp;
            return !0
        }
    };
    ec.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = a.Ee(this.u[0]);
            a = a.Ee(this.u[1]);
            return k.Ih(b, a, this.u[1].Lf)
        }
    };
    fc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = a.Xa(this.u[0]);
            return a.h.sc.RI(b - 1) ? P.Pg(this) : P.rm(this)
        }
    };
    gc.prototype = {
        gb: function(a) {
            return 2 < a.pc ? !1 : !0
        },
        fa: function(a) {
            return 2 < a.pc ? !1 : !0
        }
    };
    hc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b;
            b = 22 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].nd;
            return a.ri > b ? !0 : !1
        }
    };
    ic.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = 0;
            switch (this.u[0].key) {
                case 1:
                    b = l.Ve;
                    break;
                case 2:
                    b = l.fk;
                    break;
                case 4:
                    b = l.Ml
            }
            return 0 == a.h.Qc[b] ? P.Pg(this) : P.rm(this)
        }
    };
    jc.prototype = {
        gb: function(a) {
            if (a.i.Jc != this.u[0].value) return !1;
            var b = a.i.hx,
                c = this.u[1];
            if (b == c.$f) return a.i.Zl(a.i.gx), !0;
            c = c.tb;
            if (0 == (c & 32768)) return !1;
            var d = a.i.$c[c & 32767],
                e;
            for (e = 0; e < d.J.length && !(0 > d.J[e]); e += 2)
                if (d.J[e] == b) return a.i.YH(c), a.i.Zl(a.i.gx), !0;
            return !1
        },
        fa: function(a) {
            return a.i.xs != this.u[0].value ? !1 : a.FA(this.u[1].tb, !1)
        }
    };
    kc.prototype = {
        gb: function(a) {
            return this.u[0].value != a.i.Jc ? !1 : !0
        },
        fa: function(a) {
            return this.u[0].value == a.i.xs ? !0 : !1
        }
    };
    lc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            return a.FA(this.u[0].tb, 0 != (this.vd & T.Sj))
        }
    };
    mc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            return P.cC(this, a.h.Qc[this.u[0].key])
        }
    };
    nc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            return 0 == a.h.Qc[this.u[0].key] ? P.Pg(this) : P.qH(a) ? P.rm(this) : P.Pg(this)
        }
    };
    oc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            for (var b = a.i.De(this.Ta), c = a.i.vc, d; null != b;) b = b.ua, d = a.Ee(this.u[0]), 0 == k.Ih(b, d, this.u[0].Lf) && (c--, a.i.hc()), b = a.i.Jd();
            return 0 != c
        }
    };
    pc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = this.u[1];
            if (0 == b.bt) a = 22 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].nd, b.value = a, b.bt = -1;
            else if (b.value -= a.ap, 0 >= b.value) return a = 22 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].nd, b.value += a, !0;
            return !1
        }
    };
    qc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = a.i.De(this.Ta);
            if (null == b) return !1;
            var c = a.i.vc,
                d, e;
            if (0 != (this.vd & T.rt)) {
                e = 62 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value;
                d = a.Ee(this.u[1]);
                do 0 <= e && null != b.M && e < b.M.md.length ? (b = b.M.dr(e), 0 == k.Ih(b, d, this.u[1].Lf) && (c--, a.i.hc())) : (c--, a.i.hc()), b = a.i.Jd(); while (null != b)
            } else {
                do e = 62 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value, 0 <= e && null != b.M && e < b.M.md.length ? (b = b.M.dr(e), d = a.Ee(this.u[1]), 0 == k.Ih(b, d, this.u[1].Lf) && (c--, a.i.hc())) : (c--, a.i.hc()), b = a.i.Jd(); while (null != b)
            }
            return 0 != c
        }
    };
    rc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            a.i.Ez(this.Ta, -1);
            if (0 == a.i.vc) return !1;
            var b = a.random(a.i.vc),
                b = a.i.Ez(this.Ta, b);
            if (0 < this.uc) {
                var c = this.u[0];
                if (68 == c.code && 0 == c.evaluate(b)) return !1
            }
            a.i.ZH(this.Ta, b);
            return !0
        }
    };
    sc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = 0,
                c, d = this.Ta;
            if (0 == (d & 32768)) c = a.W[d], b = c.Vg;
            else if (32767 != (d & 32767)) {
                var d = a.i.$c[d & 32767],
                    e;
                for (e = 0; e < d.J.length; e += 2) {
                    c = d.J[e + 1];
                    if (0 > c) break;
                    c = a.W[c];
                    b += c.Vg
                }
            }
            a = a.Xa(this.u[0]);
            return k.xz(b, a, this.u[0].Lf)
        }
    };
    tc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.Xl(a, this)
        },
        fa: function(a) {
            return this.Xl(a, this)
        },
        Rq: function(a) {
            return P.cC(this, 0 == (a.D.T & A.rg))
        }
    });
    uc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.Xl(a, this)
        },
        fa: function(a) {
            return this.Xl(a, this)
        },
        Rq: function(a) {
            return 0 != (a.D.T & A.rg) ? !0 : !1
        }
    });
    vc.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = a.i.De(this.Ta);
            if (null == b) return !1;
            var c = a.i.vc,
                d, e = this.u[1],
                f;
            if (0 != (this.vd & T.rt)) {
                f = 53 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value;
                d = a.Ee(e);
                do 0 <= f && null != b.M ? (b = f < b.M.Na.length ? b.M.Dk(f) : 0, 0 == k.Ih(b, d, e.Lf) && (c--, a.i.hc())) : (c--, a.i.hc()), b = a.i.Jd(); while (null != b)
            } else {
                do f = 53 == this.u[0].code ? a.Xa(this.u[0]) : this.u[0].value, 0 <= f && null != b.M ? (b = f < b.M.Na.length ? b.M.Dk(f) : 0, d = a.Ee(e), 0 == k.Ih(b, d, e.Lf) && (c--, a.i.hc())) : (c--, a.i.hc()), b = a.i.Jd(); while (null != b)
            }
            return 0 != c
        }
    };
    fb.prototype = {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = a.i.De(this.Ta);
            if (null == b) return !1;
            var c = a.i.vc,
                d = this.u[0].value,
                e = this.u[1],
                f = e.ja[0].value;
            do 0 <= d && null != b.M ? (b = d < b.M.Na.length ? b.M.Dk(d) : 0, 0 == k.Ih(b, f, e.Lf) && (c--, a.i.hc())) : (c--, a.i.hc()), b = a.i.Jd(); while (null != b);
            return 0 != c
        }
    };
    wc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            var b = this.u[0];
            if (68 != b.code) return this.Mn(a, this);
            for (var c = a.i.De(this.Ta), d = a.i.vc; null != c;) 0 == b.VH(c) && (d--, a.i.hc()), c = a.i.Jd();
            return 0 != d ? !0 : !1
        },
        Nn: function(a, b) {
            return null != a.M && 0 != (a.M.rl & 1 << (b & 31)) ? !0 : !1
        }
    });
    xc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.Mn(a, this)
        },
        fa: function(a) {
            return this.Mn(a, this)
        },
        Nn: function(a, b, c) {
            return k.xz(a.w, b, c)
        }
    });
    yc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.YA(a)
        },
        fa: function(a) {
            return this.YA(a)
        }
    });
    zc.prototype = p.extend(new P, {
        gb: function(a) {
            return this.fa(a)
        },
        fa: function(a) {
            return 10 == this.u[0].code ? this.Xl(a, this) : this.Mn(a, this)
        },
        Rq: function(a) {
            return this.u[0].value != a.aa.ii ? P.Pg(this) : 0 != a.aa.Sd ? P.rm(this) : P.Pg(this)
        },
        Nn: function(a, b) {
            return b != a.aa.ii ? P.Pg(this) : 0 != a.aa.Sd ? P.rm(this) : P.Pg(this)
        }
    });
    Ac.prototype = p.extend(new P, {
        gb: function(a, b) {
            if ((10 == this.u[0].code ? this.u[0].value : a.Xa(this.u[0])) != a.i.Jc) return !1;
            a.i.Zl(b);
            return !0
        },
        fa: function(a) {
            return 10 == this.u[0].code ? this.Xl(a, this) : this.Mn(a, this)
        },
        Rq: function(a) {
            return this.u[0].value != a.aa.ii ? !1 : 0 == a.aa.Sd ? !0 : !1
        },
        Nn: function(a, b) {
            return b != a.aa.ii ? !1 : 0 == a.aa.Sd ? !0 : !1
        }
    });
    ba.UM = 8960;
    ba.WM = 9216;
    ba.TM = 9472;
    ba.XM = 9728;
    ba.RM = 9984;
    ba.VM = 10752;
    ba.SM = 11008;
    ba.Al = 262143;
    ba.ey = 65535;
    ba.YE = 1572863;
    ba.create = function(a) {
        var b = a.S,
            c, d = a.s();
        switch (d) {
            case 0:
                c = new va;
                break;
            case 131072:
                c = new Kc;
                break;
            case 262144:
                c = new Lc;
                break;
            case 393216:
                c = new Mc;
                break;
            case 524288:
                c = new Nc;
                break;
            case 655360:
                c = new EXP_MOD;
                break;
            case 786432:
                c = new EXP_POW;
                break;
            case 917504:
                c = new EXP_AND;
                break;
            case 1048576:
                c = new EXP_OR;
                break;
            case 1179648:
                c = new EXP_XOR;
                break;
            case 65535:
                c = new hb;
                break;
            case 131071:
                c = new Oc;
                break;
            case 196607:
                c = new EXP_VARGLO;
                break;
            case 262143:
                c = new Gc;
                break;
            case 327679:
                c = new Pc;
                break;
            case 393215:
                c = new EXP_VAL;
                break;
            case 458751:
            case 524287:
            case 589823:
            case 655359:
                c = new gb;
                break;
            case 720895:
                c = new EXP_SIN;
                break;
            case 786431:
                c = new EXP_COS;
                break;
            case 851967:
                c = new EXP_TAN;
                break;
            case 917503:
                c = new EXP_SQR;
                break;
            case 983039:
                c = new EXP_LOG;
                break;
            case 1048575:
                c = new EXP_LN;
                break;
            case 1114111:
                c = new EXP_HEX;
                break;
            case 1179647:
                c = new EXP_BIN;
                break;
            case 1245183:
                c = new EXP_EXP;
                break;
            case 1310719:
                c = new EXP_LEFT;
                break;
            case 1376255:
                c = new EXP_RIGHT;
                break;
            case 1441791:
                c = new EXP_MID;
                break;
            case 1507327:
                c = new EXP_LEN;
                break;
            case 1572863:
                c = new Bc;
                break;
            case 1638399:
                c = new Fc;
                break;
            case 1900543:
                c = new EXP_INT;
                break;
            case 1966079:
                c = new EXP_ABS;
                break;
            case 2031615:
                c = new EXP_CEIL;
                break;
            case 2097151:
                c = new EXP_FLOOR;
                break;
            case 2162687:
                c = new EXP_ACOS;
                break;
            case 2228223:
                c = new EXP_ASIN;
                break;
            case 2293759:
                c = new EXP_ATAN;
                break;
            case 2359295:
                c = new EXP_NOT;
                break;
            case 2686975:
                c = new EXP_MIN;
                break;
            case 2752511:
                c = new EXP_MAX;
                break;
            case 2818047:
                c = new EXP_GETRGB;
                break;
            case 2883583:
                c = new EXP_GETRED;
                break;
            case 2949119:
                c = new EXP_GETGREEN;
                break;
            case 3014655:
                c = new EXP_GETBLUE;
                break;
            case 3080191:
                c = new EXP_LOOPINDEX;
                break;
            case 3145727:
                c = new Qc;
                break;
            case 3211263:
                c = new EXP_ROUND;
                break;
            case 3276799:
                c = new EXP_STRINGGLO;
                break;
            case 3342335:
                c = new Ec;
                break;
            case 3407871:
                c = new EXP_LOWER;
                break;
            case 3473407:
                c = new EXP_UPPER;
                break;
            case 3538943:
                c = new EXP_FIND;
                break;
            case 3604479:
                c = new EXP_REVERSEFIND;
                break;
            case 3866623:
                c = new EXP_FLOATTOSTRING;
                break;
            case 3932159:
                c = new EXP_ATAN2;
                break;
            case 3997695:
                c = new va;
                break;
            case 4063231:
                c = new gb;
                break;
            case 4128767:
                c = new EXP_DISTANCE;
                break;
            case 4194303:
                c = new EXP_ANGLE;
                break;
            case 4259839:
                c = new EXP_RANGE;
                break;
            case 4325375:
                c = new Xc;
                break;
            case 4456447:
                c = new EXP_RUNTIMENAME;
                break;
            case 4521983:
                c = new Hc;
                break;
            case -1:
                c = new Rc;
                break;
            case -65537:
                c = new Sc;
                break;
            case -131073:
                c = new Tc;
                break;
            case 65534:
                c = new EXP_GETSAMPLEMAINVOL;
                break;
            case 131070:
                c = new EXP_GETSAMPLEVOL;
                break;
            case 196606:
                c = new EXP_GETCHANNELVOL;
                break;
            case 262142:
                c = new va;
                break;
            case 327678:
                c = new EXP_GETSAMPLEPAN;
                break;
            case 393214:
                c = new EXP_GETCHANNELPAN;
                break;
            case 458750:
                c = new EXP_GETSAMPLEPOS;
                break;
            case 524286:
                c = new EXP_GETCHANNELPOS;
                break;
            case 589822:
                c = new EXP_GETSAMPLEDUR;
                break;
            case 655358:
                c = new EXP_GETCHANNELDUR;
                break;
            case 720894:
                c = new EXP_GETSAMPLEFREQ;
                break;
            case 786430:
                c = new EXP_GETCHANNELFREQ;
                break;
            case 851966:
                c = new EXP_GETCHANNELSNDNAME;
                break;
            case 65533:
                c = new EXP_GAMLEVEL;
                break;
            case 131069:
                c = new EXP_GAMNPLAYER;
                break;
            case 196605:
                c = new EXP_PLAYXLEFT;
                break;
            case 262141:
                c = new EXP_PLAYXRIGHT;
                break;
            case 327677:
                c = new EXP_PLAYYTOP;
                break;
            case 393213:
                c = new EXP_PLAYYBOTTOM;
                break;
            case 458749:
                c = new Uc;
                break;
            case 524285:
                c = new EXP_PLAYHEIGHT;
                break;
            case 589821:
                c = new EXP_GAMLEVELNEW;
                break;
            case 655357:
                c = new EXP_GETCOLLISIONMASK;
                break;
            case 720893:
                c = new EXP_FRAMERATE;
                break;
            case 786429:
                c = new EXP_GETVIRTUALWIDTH;
                break;
            case 851965:
                c = new EXP_GETVIRTUALHEIGHT;
                break;
            case 917501:
                c = new EXP_GETFRAMEBKDCOLOR;
                break;
            case 983037:
                c = new va;
                break;
            case 1048573:
                c = new va;
                break;
            case 1114109:
                c = new EXP_FRAMEALPHACOEF;
                break;
            case 1179645:
                c = new EXP_FRAMERGBCOEF;
                break;
            case 1245181:
                c = new va;
                break;
            case 65532:
                c = new EXP_TIMVALUE;
                break;
            case 131068:
                c = new EXP_TIMCENT;
                break;
            case 196604:
                c = new EXP_TIMSECONDS;
                break;
            case 262140:
                c = new EXP_TIMHOURS;
                break;
            case 327676:
                c = new EXP_TIMMINITS;
                break;
            case 393212:
                c = new EXP_EVENTAFTER;
                break;
            case 65530:
                c = new EXP_XMOUSE;
                break;
            case 131066:
                c = new EXP_YMOUSE;
                break;
            case 196602:
                c = new EXP_MOUSEWHEELDELTA;
                break;
            case 65529:
                c = new EXP_PLASCORE;
                break;
            case 131065:
                c = new EXP_PLALIVES;
                break;
            case 196601:
                c = new EXP_GETINPUT;
                break;
            case 262137:
                c = new EXP_GETINPUTKEY;
                break;
            case 327673:
                c = new EXP_GETPLAYERNAME;
                break;
            case 65531:
                c = new EXP_CRENUMBERALL;
                break;
            case 131067:
                c = new EXP_LASTFIXEDVALUE;
                break;
            case 5242883:
                c = new EXP_STRNUMBER;
                break;
            case 5308419:
                c = new Vc;
                break;
            case 5373955:
                c = new EXP_STRGETNUMBER;
                break;
            case 5439491:
                c = new EXP_STRGETNUMERIC;
                break;
            case 5505027:
                c = new EXP_STRGETNPARA;
                break;
            case 5242882:
                c = new EXP_GETRGBAT;
                break;
            case 5308418:
                c = new EXP_GETSCALEX;
                break;
            case 5373954:
                c = new EXP_GETSCALEY;
                break;
            case 5439490:
                c = new EXP_GETANGLE;
                break;
            case 5242887:
                c = new Wc;
                break;
            case 5308423:
                c = new EXP_CGETMIN;
                break;
            case 5373959:
                c = new EXP_CGETMAX;
                break;
            case 5439495:
                c = new EXP_CGETCOLOR1;
                break;
            case 5505031:
                c = new EXP_CGETCOLOR2;
                break;
            case 5242889:
                c = new EXP_CCAGETFRAMENUMBER;
                break;
            case 5308425:
                c = new EXP_CCAGETGLOBALVALUE;
                break;
            case 5373961:
                c = new EXP_CCAGETGLOBALSTRING;
                break;
            default:
                switch (d & 4294901760) {
                    case 65536:
                        c = new Yc;
                        break;
                    case 131072:
                        c = new EXP_EXTISPR;
                        break;
                    case 196608:
                        c = new EXP_EXTSPEED;
                        break;
                    case 262144:
                        c = new EXP_EXTACC;
                        break;
                    case 327680:
                        c = new EXP_EXTDEC;
                        break;
                    case 393216:
                        c = new EXP_EXTDIR;
                        break;
                    case 458752:
                        c = new EXP_EXTXLEFT;
                        break;
                    case 524288:
                        c = new EXP_EXTXRIGHT;
                        break;
                    case 589824:
                        c = new EXP_EXTYTOP;
                        break;
                    case 655360:
                        c = new EXP_EXTYBOTTOM;
                        break;
                    case 720896:
                        c = new Zc;
                        break;
                    case 786432:
                        c = new EXP_EXTIDENTIFIER;
                        break;
                    case 851968:
                        c = new EXP_EXTFLAG;
                        break;
                    case 917504:
                        c = new EXP_EXTNANI;
                        break;
                    case 983040:
                        c = new EXP_EXTNOBJECTS;
                        break;
                    case 1048576:
                        c = new Cc;
                        break;
                    case 1114112:
                        c = new EXP_EXTGETSEMITRANSPARENCY;
                        break;
                    case 1179648:
                        c = new EXP_EXTNMOVE;
                        break;
                    case 1245184:
                        c = new Dc;
                        break;
                    case 1310720:
                        c = new EXP_EXTGETFONTNAME;
                        break;
                    case 1376256:
                        c = new EXP_EXTGETFONTSIZE;
                        break;
                    case 1441792:
                        c = new EXP_EXTGETFONTCOLOR;
                        break;
                    case 1507328:
                        c = new EXP_EXTGETLAYER;
                        break;
                    case 1572864:
                        c = new EXP_EXTGETGRAVITY;
                        break;
                    case 1638400:
                        c = new EXP_EXTXAP;
                        break;
                    case 1703936:
                        c = new EXP_EXTYAP;
                        break;
                    case 1769472:
                        c = new EXP_EXTALPHACOEF;
                        break;
                    case 1835008:
                        c = new EXP_EXTRGBCOEF;
                        break;
                    case 1900544:
                        c = new va;
                        break;
                    case 1966080:
                        c = new Ic;
                        break;
                    case 2031616:
                        c = new Jc;
                        break;
                    case 2097152:
                        c = new EXP_EXTDISTANCE;
                        break;
                    case 2162688:
                        c = new EXP_EXTANGLE;
                        break;
                    case 2228224:
                        c = new EXP_EXTLOOPINDEX;
                        break;
                    case 2293760:
                        c = new EXP_EXTGETFRICTION;
                        break;
                    case 2359296:
                        c = new EXP_EXTGETRESTITUTION;
                        break;
                    case 2424832:
                        c = new EXP_EXTGETDENSITY;
                        break;
                    case 2490368:
                        c = new EXP_EXTGETVELOCITY;
                        break;
                    case 2555904:
                        c = new EXP_EXTGETANGLE;
                        break;
                    case 2621440:
                        c = new EXP_EXTWIDTH;
                        break;
                    case 2686976:
                        c = new EXP_EXTHEIGHT;
                        break;
                    case 2752512:
                        c = new EXP_EXTGETMASS;
                        break;
                    case 2818048:
                        c = new EXP_EXTGETANGULARVELOCITY;
                        break;
                    case 2883584:
                        c = new EXP_EXTGETNAME;
                        break;
                    case 2949120:
                        c = new EXP_NUMBEROFSELECTED;
                        break;
                    case 3014656:
                        c = new EXP_EXTINSTANCEDATA;
                        break;
                    default:
                        c = new fe
                }
        }
        if (null != c && (c.code = d, 0 != d)) {
            var e = a.o(),
                f;
            switch (d) {
                case 262143:
                    c.vb = a.Ob();
                    break;
                case 65535:
                    c.value = a.s();
                    break;
                case 1572863:
                    c.value = a.LC();
                    break;
                case 1638399:
                    a.va(4);
                    c.Zf = a.o();
                    break;
                case 3342335:
                    a.va(4);
                    c.Zf = a.o();
                    break;
                default:
                    if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == u.Ey) switch (c.$f = a.X(), c.tb = a.X(), d & 4294901760) {
                        case 1048576:
                            c.Zf = a.o();
                            break;
                        case 1245184:
                            c.Zf = a.o()
                    }
            }
            a.seek(b + e)
        }
        return c
    };
    gb.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = ""
        }
    };
    va.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = 0
        }
    };
    hb.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = this.value
        }
    };
    Bc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = this.value;
            a.zg = !0
        }
    };
    Cc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            null == b ? a.pa[a.$] = 0 : (b = null != b.M ? b.M.Dk(this.Zf) : 0, p.Dv(b) || (a.zg = !0), a.pa[a.$] = b)
        }
    };
    Dc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.pa[a.$] = null == b ? "" : b.M.dr(this.Zf)
        }
    };
    Ec.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = a.h.CA(this.Zf)
        }
    };
    Fc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = a.h.jv(this.Zf)
        }
    };
    Gc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = this.vb
        }
    };
    Hc.prototype = {
        evaluate: function(a) {
            a.oc++;
            var b = a.getExpression();
            a.oc++;
            var c = a.getExpression();
            a.oc++;
            var d = a.getExpression();
            a.pa[a.$] = b.split(c).join(d)
        }
    };
    Ic.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.oc++;
            var c = a.ov();
            null != b && null != b.M && 0 <= c && c < b.M.Na.length ? (b = b.M.Dk(c), p.Dv(b) || (a.zg = !0), a.pa[a.$] = b) : a.pa[a.$] = 0
        }
    };
    Jc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.oc++;
            var c = a.ov();
            a.pa[a.$] = null != b && null != b.M && 0 <= c && c < b.M.md.length ? b.M.dr(c) : ""
        }
    };
    Kc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] += a.pa[a.$ + 1]
        }
    };
    Lc.prototype = {
        evaluate: function(a) {
            a.zn ? (a.oc++, a.yj[a.oc].evaluate(a), a.pa[a.$] = -a.pa[a.$]) : a.pa[a.$] -= a.pa[a.$ + 1]
        }
    };
    Mc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] *= a.pa[a.$ + 1]
        }
    };
    Nc.prototype = {
        evaluate: function(a) {
            var b = a.pa[a.$],
                c = a.pa[a.$ + 1];
            a.pa[a.$] = 0 != c ? 0 == a.zg ? p.Ld(b / c) : a.pa[a.$] / a.pa[a.$ + 1] : 0
        }
    };
    Oc.prototype = {
        evaluate: function(a) {
            a.oc++;
            var b = a.ov();
            a.pa[a.$] = a.random(b)
        }
    };
    Pc.prototype = {
        evaluate: function(a) {
            a.oc++;
            var b = a.getExpression();
            a.pa[a.$] = b.toString()
        }
    };
    Qc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = "\n"
        }
    };
    Rc.prototype = {
        evaluate: function(a) {
            a.oc++;
            a.pa[a.$] = a.getExpression()
        }
    };
    Sc.prototype = {
        evaluate: function() {}
    };
    Tc.prototype = {
        evaluate: function() {}
    };
    Uc.prototype = {
        evaluate: function(a) {
            a.pa[a.$] = a.A.Nd
        }
    };
    Vc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.pa[a.$] = null == b ? "" : null != b.gg ? b.gg : ""
        }
    };
    Wc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            null == b ? a.pa[a.$] = 0 : (a.pa[a.$] = b.ua, b.Li && (a.zg = !0))
        }
    };
    Xc.prototype = {
        evaluate: function(a) {
            a.oc++;
            var b = a.getExpression();
            a.oc++;
            var c = a.getExpression();
            a.pa[a.$] = b + a.random(c - b + 1)
        }
    };
    Yc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.pa[a.$] = null == b ? 0 : b.v
        }
    };
    Zc.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            a.pa[a.$] = null == b ? 0 : b.w
        }
    };
    ja.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 285.1";
    l.og = 4;
    l.$O = 770;
    l.mn = 8;
    l.nN = 2;
    l.kF = 4;
    l.oN = 8;
    l.iy = 16;
    l.mN = 128;
    l.lN = 256;
    l.kN = 512;
    l.jF = 1024;
    l.jN = 2048;
    l.hF = 1;
    l.fF = 4;
    l.gF = 8;
    l.gN = 64;
    l.eN = 128;
    l.dN = 512;
    l.fN = 1024;
    l.iF = 4096;
    l.iN = 4096;
    l.hN = 8192;
    l.ZO = 1;
    l.rq = 0;
    l.Ll = 1;
    l.gu = 2;
    l.Jl = 3;
    l.qq = 4;
    l.pq = 5;
    l.Kl = 6;
    l.dP = 7;
    l.ry = 203;
    l.rP = 37;
    l.DP = 39;
    l.GP = 38;
    l.oP = 40;
    l.Ve = 200;
    l.Ml = 201;
    l.fk = 202;
    l.tP = 96;
    l.uP = 97;
    l.vP = 98;
    l.wP = 99;
    l.xP = 100;
    l.yP = 101;
    l.zP = 102;
    l.AP = 103;
    l.BP = 104;
    l.CP = 105;
    l.EP = 83;
    l.nP = 68;
    l.pP = 69;
    l.HP = 88;
    l.qP = 123;
    l.FP = 16;
    l.mP = 17;
    l.sP = 18;
    l.DM = 0;
    l.yM = 1;
    l.zM = 2;
    l.AM = 3;
    l.BM = 4;
    l.CM = 5;
    l.Lx = 4;
    l.$L = 128;
    l.XD = 1;
    l.ZD = 4;
    l.ML = 65536;
    l.it = 32768;
    l.$D = 1048576;
    l.YD = 8388608;
    l.wi = 16777216;
    l.LL = 33554432;
    l.WD = 67108864;
    l.pd = 10;
    l.fy = 592880741;
    l.ek = 1770410840;
    ja.loadApplication = ib;
    ja.loadInfo = $c;
    l.prototype = {
        sJ: function() {
            var a = this.jo.s();
            0 > this.nr && (this.nr = a);
            a != this.nr && (this.jo.mD(!0), a = this.jo.Ob(), window.open(this.mr + a, "_self"));
            this.io = 25
        },
        load: function() {
            this.HJ = this.file.o();
            this.Mq = 1;
            this.yr = new H;
            var a = this.file.s();
            this.yr.getFile(this.path.substring(0, this.path.length - 1) + this.Mq.toString(), ib, a)
        },
        nJ: function() {
            this.Mq++;
            if (this.Mq > this.HJ) {
                var a = (new n(this.yr.td, "content")).file("Application.ccj").Zy();
                this.yr = null;
                this.file = new H;
                this.file.OK(a);
                this.digest();
                this.ux()
            } else a = this.file.s(), this.yr.getFile(this.path.substring(0, this.path.length - 1) + this.Mq.toString(), ib, a)
        },
        digest: function() {
            this.file.seek(0);
            var a = this.file.NC(4);
            this.sd = !1;
            80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.sd = !0);
            this.file.mD(this.sd);
            this.file.va(8);
            this.file.va(4);
            this.tc = new md;
            this.ca = new hd(this);
            this.Sb = new id(this);
            this.zf = new jd(this);
            this.sc = new Y(this);
            for (var b, c = 0; 32639 != c;)
                if (c = this.file.o(), this.file.o(), b = this.file.s(), 0 != b) {
                    a = this.file.S + b;
                    switch (c) {
                        case 8739:
                            this.mJ();
                            this.gv = Array(this.Of);
                            this.vA = Array(this.Of);
                            this.uA = Array(this.Of);
                            this.hv = Array(this.Of);
                            for (b = 0; b < this.Of; b++) this.hv[b] = null;
                            break;
                        case 8773:
                            this.Ja = this.file.s();
                            this.file.s();
                            this.file.s();
                            this.file.o();
                            this.file.o();
                            break;
                        case 8740:
                            this.appName = this.file.Ob();
                            break;
                        case 8774:
                            this.wz = this.file.s();
                            break;
                        case 8750:
                            this.file.Ob();
                            break;
                        case 8782:
                            this.Vv = this.file.Ob();
                            break;
                        case 8754:
                            this.rJ();
                            break;
                        case 8755:
                            this.qJ();
                            break;
                        case 8745:
                        case 8767:
                            this.Sq = new Sa(this);
                            this.Sq.wH(this.file);
                            this.tc.fi(this.file);
                            break;
                        case 8747:
                            this.oJ(b);
                            break;
                        case 8778:
                            this.No = this.file.s();
                            this.yC = this.file.s();
                            this.zC = this.file.s();
                            this.BC = this.file.s();
                            this.CC = this.file.s();
                            this.AC = this.file.jd();
                            this.Zk = this.file.s(); - 1 != this.Zk && (this.file.ZK(4), this.Zk = this.file.jd());
                            this.es = this.file.s();
                            this.Qv = !0;
                            break;
                        case 13107:
                            this.gv[this.am] = this.file.S;
                            for (var d = 0; 32639 != d;)
                                if (d = this.file.o(), this.file.o(), b = this.file.s(), 0 != b) {
                                    var e = this.file.S + b;
                                    switch (d) {
                                        case 13108:
                                            0 == this.am && (this.file.va(8), this.file.jd());
                                            break;
                                        case 13110:
                                            this.hv[this.am] = this.file.Ob();
                                            break;
                                        case 13129:
                                            this.vA[this.am] = this.file.s();
                                            this.uA[this.am] = this.file.s();
                                            break;
                                        case 13128:
                                            var f = b / 6;
                                            for (b = 0; b < f; b++) {
                                                var g = this.file.o();
                                                this.file.va(4);
                                                0 != g && (this.Mb[g] = 1, this.he = Math.max(this.he, g + 1))
                                            }
                                    }
                                    this.file.seek(e)
                                } this.am++;
                            break;
                        case 8760:
                            d = this.file.s();
                            this.vk = Array(d);
                            for (b = 0; b < d; b++) this.vk[b] = new ad(this), this.vk[b].fi();
                            break;
                        case 26214:
                            this.ca.fi(this.file);
                            break;
                        case 26215:
                            this.Sb.fi(this.file);
                            break;
                        case 26216:
                            this.zf.fi(this.file)
                    }
                    this.file.seek(a)
                } this.context = new Ga(this.canvas);
            this.sc.UK(0 != (this.Wn & l.jF));
            null == this.Ea && (this.qe = new Ea)
        },
        hD: function(a, b, c, d, e, f) {
            this.Ea = a;
            this.Wk = c;
            this.qe = d;
            this.vx = b;
            this.Ew = e;
            this.Dw = f
        },
        MI: function() {
            this.tg = !1;
            this.cD = 0;
            this.HK = this.IK = 1;
            this.KK = this.JK = this.qa / 2;
            this.MK = this.LK = this.ya / 2
        },
        Ts: function() {
            window.setTimeout(Za.bind(this), 20)
        },
        ux: function() {
            (this.lr = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.zf.Db && (this.Te = new Va(this), this.Te.vJ());
            this.Fm();
            this.Qc = Array(l.ry);
            var a;
            for (a = 0; a < l.ry; a++) this.Qc[a] = !1;
            this.canvas.Rb = this;
            if (null == this.Ea) {
                var b = this;
                window.addEventListener("keypress", function(a) {
                    b.NH(a)
                }, !1);
                window.addEventListener("keydown", function(a) {
                    b.Zz(a)
                }, !1);
                window.addEventListener("keyup", function(a) {
                    b.$z(a)
                }, !1);
                window.addEventListener("blur", function() {
                    b.hasFocus = !1
                }, !1);
                window.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                if (window !== window.top) try {
                    var c = window.top;
                    c.addEventListener("focus", function() {
                        b.hasFocus = !0;
                        b.canvas.focus()
                    });
                    c.addEventListener("blur", function() {
                        b.hasFocus = !1
                    })
                } catch (d) {}
                window.addEventListener("resize", function() {
                    b.Fm()
                }, !1);
                document.addEventListener("blur", function() {
                    b.hasFocus = !1
                }, !1);
                document.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                document.addEventListener("fullscreenchange", function() {
                    b.fullScreen = document.tQ;
                    b.Fm()
                }, !1);
                document.addEventListener("mozfullscreenchange", function() {
                    b.fullScreen = document.mozFullScreen;
                    b.Fm()
                }, !1);
                document.addEventListener("webkitfullscreenchange", function() {
                    b.fullScreen = document.webkitIsFullScreen;
                    b.Fm()
                }, !1);
                this.canvas.addEventListener("mousemove", function(a) {
                    b.Mr(a, b.canvas);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mousedown", function(a) {
                    b.FB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseup", function(a) {
                    b.HB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseout", function(a) {
                    b.GB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("click", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("dblclick", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("contextmenu", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
                document.attachEvent ? document.attachEvent("on" + a, function(a) {
                    b.IB(a)
                }) : document.addEventListener && document.addEventListener(a, function(a) {
                    b.IB(a)
                }, !1);
                document.onselectstart = function() {
                    return !1
                };
                this.canvas.onselectstart = function(a) {
                    a.preventDefault && a.preventDefault();
                    return !1
                };
                this.Hj = this.ZI();
                this.Af = new N;
                this.Bf = Array(l.pd);
                this.Ni = Array(l.pd);
                this.$m = Array(l.pd);
                this.lh = Array(l.pd);
                this.mh = Array(l.pd);
                for (a = 0; a < l.pd; a++) this.Bf[a] = l.ek, this.lh[a] = 0, this.mh[a] = 0, this.Ni[a] = !1, this.$m[a] = 0;
                this.Hj && (this.canvas.addEventListener("touchstart", function(a) {
                    b.Xs(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchmove", function(a) {
                    b.JD(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchend", function(a) {
                    b.op(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchcancel", function(a) {
                    b.op(a);
                    a.preventDefault && a.preventDefault()
                }, !1));
                window.focus();
                this.Ts()
            } else
                for (this.Hj = this.Ea.Hj, this.Af = new N, this.Bf = Array(l.pd), this.Ni = Array(l.pd), this.$m = Array(l.pd), this.lh = Array(l.pd), this.mh = Array(l.pd), a = 0; a < l.pd; a++) this.Bf[a] = l.ek, this.lh[a] = 0, this.mh[a] = 0, this.Ni[a] = !1, this.$m[a] = 0;
            this.eb = this.Lj = this.Jj = 0;
            this.Ce = -2;
            this.H = new k(this)
        },
        Fm: function() {
            var a = this.qa,
                b = this.ya,
                c, d;
            this.fullScreen || this.Wn & l.iy ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
            c /= a;
            d /= b;
            if (this.Ja & l.XD || this.Wn & l.iy && this.Wn & l.kF) c = d = Math.min(c, d);
            if (c != this.qc || d != this.rc) this.qc = c, this.rc = d, this.canvas.width = Math.floor(this.qc * a), this.canvas.height = Math.floor(this.rc * b), this.context.px(this.qc, this.rc);
            this.H && this.H.Ki()
        },
        ZI: function() {
            var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
                b = navigator.userAgent,
                c;
            for (c in a)
                if (0 <= b.indexOf(a[c])) return !0;
            return !1
        },
        Ri: function(a) {
            this.Oq.OC(a);
            this.Nh++
        },
        wn: function(a) {
            this.Gn.add(a);
            this.Oh++;
            this.Ig = !0
        },
        mp: function() {
            this.mr && (this.io--, 0 > this.io && (this.io = 1E9, this.jo = new H, this.jo.getFile(this.mr + "info.dat", $c)));
            this.nd = (new Date).getTime();
            if (this.aK(!1)) {
                if (this.Ig) {
                    if (null == this.gi) {
                        var a = this.Ag;
                        this.Qv ? (this.gi = 0 == this.No ? new bd(this) : new dd(this), 0 == this.No && -1 != this.Zk && (a = this.Zk)) : this.gi = new cd(this);
                        this.DC = !1;
                        this.bx = !0;
                        null == this.Ea && (this.frame.sr ? this.context.Fq(0, 0, this.canvas.width, this.canvas.height) : this.context.Gc(0, 0, this.qa, this.ya, a), this.Ts());
                        return
                    }
                    if (null != this.gi && 0 == this.DC) {
                        this.DC = this.gi.load();
                        null == this.Ea && this.Ts();
                        return
                    }
                    for (; 0 < this.Gn.size() && this.Oq.size() < this.DH;) a = this.Gn.get(0), this.Oq.add(a), this.Gn.Vo(0), a.Vu();
                    this.sc.FH();
                    a = !1;
                    0 == this.Gn.size() && 0 == this.Oq.size() && (a = !0);
                    null == this.gi || 0 == (this.Ja & l.wi) && 0 == (this.frame.fm & J.wF) || (this.bx || (this.gi.reset(), this.bx = !0), this.gi.step(), a = this.gi.Cv());
                    a && (this.bx = !1, this.H.resume(), this.H.Hh(), this.Ig = !1, this.ca.tf(), this.zf.tf(), this.Sb.tf(), this.Nh = this.Oh = 0, this.yu && (this.yu = !1, 0 != this.H.Wu() ? this.eb = l.pq : (this.eb = l.Jl, this.CD(this.ig), this.ig = null)));
                    null == this.Ea && this.Ts()
                } else null == this.Ea && (null == this.od ? (this.context.ax(0 != (this.Ja & l.ZD)), this.fs ? this.context.sj(this.fs, 0, 0, this.qa, this.ya, 0, 0) : this.frame.sr ? this.context.Fq(0, 0, this.qa, this.ya) : this.context.Gc(0, 0, this.qa, this.ya, this.Ag), a = this.context.La, this.tg && (bRestore = !0, a.save(), a.translate(this.JK, this.LK), 0 != this.cD && a.rotate(.0174532925 * -this.cD), a.scale(Math.max(.001, this.HK), Math.max(.001, this.IK)), a.translate(-this.KK, -this.MK)), this.qe.Ab(this.context, 0, 0), this.tg && a.restore(), this.Rh && this.Aa.Ab(this.context), this.Fx && (this.Fx--, this.ct || (a = new za, a.Kq(), a.kc = 16, this.ct = new ma(this, this.qa, 30), this.ct.oB(16711680), this.ct.Kr(window.FusionVersion, p.Rj | p.xi, null, 16777215, a, 1, 10526880)), this.ct.Ab(this.context, 0, 0, 0, 0))) : (this.context.ax(), this.context.sj(this.od, 0, 0, this.qa, this.ya, 0, 0)), 0 != (this.Xn & l.iF) && window.requestAnimationFrame ? window.requestAnimationFrame(Za) : (a = (new Date).getTime() - this.nd, a = Math.max(1E3 / this.yA - a, 1), window.setTimeout(Za, a)));
                return !0
            }
            this.eA();
            return !1
        },
        aA: function(a, b, c, d) {
            this.Ig || (null == this.od ? (d || this.context.Gc(b, c, this.Ew, this.Dw, this.Ag), this.context.clip(b, c, this.Ew, this.Dw), this.qe.Ab(this.context, 0, 0), this.context.mL()) : (this.context.ax(), this.context.sj(this.od, b, c, this.qa, this.ya, 0, 0)))
        },
        eH: function() {
            0 == (this.Ja & l.$D) && (this.hasFocus ? this.zu && (this.H.resume(), this.zu = !1) : (this.H.pause(this.Xn & l.gF), this.zu = !0))
        },
        aK: function(a) {
            this.eH();
            var b = !0,
                c = !0;
            do switch (this.eb) {
                case l.rq:
                    if (this.KI(), this.Eb = this.vx, this.eb = 1, this.bJ(), a) {
                        b = !1;
                        break
                    }
                case l.Ll:
                    this.dL();
                    break;
                case l.gu:
                    0 == this.wJ() ? (this.RH(), this.eb != l.Kl && this.eb != l.rq || this.Ln()) : b = !1;
                    break;
                case l.Jl:
                    this.H.Wu();
                    0 != this.H.zb ? this.bL() ? this.eb = l.qq : this.Ln() : b = !1;
                    break;
                case l.qq:
                    0 == this.xJ() ? (this.fA(), this.eb != l.Kl && this.eb != l.rq || this.Ln()) : b = !1;
                    break;
                case l.pq:
                    this.Ln();
                    break;
                default:
                    b = !1
            }
            while (1 == b);
            this.eb == l.Kl && (c = !1);
            return c
        },
        eA: function() {
            null != this.sc && this.sc.Us()
        },
        dL: function() {
            this.Eb != this.Ce && (this.frame = new J(this), this.frame.pJ(this.Eb));
            this.Ag = this.frame.dB;
            this.Ce = this.Eb;
            this.frame.Zi = this.frame.$i = 0;
            this.frame.Hv = this.frame.Iv = 0;
            this.frame.aD = !1;
            this.MI();
            var a;
            null != this.Ea ? this.kg = this.jg = 0 : (this.jg = this.qa / 2 - this.frame.lo / 2, this.kg = this.ya / 2 - this.frame.ko / 2);
            for (a = 0; a < this.frame.xc; a++) this.frame.Ya[a].xH(this.jg, this.kg);
            this.frame.Vb & J.JF && (document.title = this.frame.wA);
            this.fs = null;
            this.frame.Vb & J.KF && (this.fs = this.ig);
            this.frame.Vb & J.LF && (this.frame.sr = !0);
            this.H.QK(this.frame);
            this.H.LI(null != this.frame.Qn);
            this.eb = l.Jl;
            null != this.frame.Qn ? this.Ig ? this.yu = !0 : 0 != this.H.Wu() ? this.eb = l.pq : (this.eb = l.Jl, this.CD(this.ig), this.ig = null) : this.ig = null;
            this.Ig ? this.H.pause(!0) : this.H.Hh()
        },
        TC: function() {
            null != this.Ea ? this.kg = this.jg = 0 : (this.jg = this.qa / 2 - this.frame.lo / 2, this.kg = this.ya / 2 - this.frame.ko / 2);
            var a;
            for (a = 0; a < this.frame.xc; a++) this.frame.Ya[a].CK(this.jg, this.kg)
        },
        Ln: function() {
            var a;
            a = this.H.cJ(!1);
            if (0 != (this.Xn & l.fF)) this.eb = l.Kl;
            else switch (p.QF(a)) {
                case 1:
                    this.Eb = this.Ce + 1;
                    1 == this.No && this.Eb == this.es && this.Eb++;
                    this.eb = l.Ll;
                    this.Eb >= this.Of && (this.eb = l.Kl);
                    break;
                case 2:
                    this.Eb = Math.max(0, this.Ce - 1);
                    1 == this.No && this.Eb == this.es && (0 == this.Eb ? this.Eb = this.Ce : this.Eb--);
                    this.eb = l.Ll;
                    break;
                case 3:
                    this.eb = l.Ll;
                    0 != (p.Mp(a) & 32768) ? (this.Eb = p.Mp(a) & 32767, this.Eb >= this.Of && (this.Eb = this.Of - 1), 0 > this.Eb && (this.Eb = 0)) : p.Mp(a) < this.Tn ? (this.Eb = this.Sn[p.Mp(a)], -1 == this.Eb && (this.Eb = this.Ce + 1)) : this.Eb = this.Ce + 1;
                    break;
                case 4:
                    this.eb = l.rq;
                    this.Eb = this.vx;
                    break;
                default:
                    this.eb = l.Kl
            }
            this.eb == l.Ll && (0 > this.Eb || this.Eb >= this.Of) && (this.eb = this.Ce);
            if (this.eb != l.Ll || this.Eb != this.Ce) {
                for (a = 0; a < this.frame.xc; a++) this.frame.Ya[a].Rz();
                this.frame = null;
                this.Ce = -1
            }
        },
        nv: function() {
            null == this.zx && (this.zx = new Gd(this));
            return this.zx
        },
        CD: function(a) {
            var b, c, d = this.frame.Qn;
            if (null != d) {
                b = document.createElement("canvas");
                b.width = this.qa;
                b.height = this.ya;
                c = document.createElement("canvas");
                c.width = this.qa;
                c.height = this.ya;
                var e = new Ga(c);
                e.Gc(0, 0, this.qa, this.ya, this.Ag);
                this.qe.Ab(e, 0, 0);
                e = new Ga(b);
                0 != (d.qp & sa.sq) ? e.Gc(0, 0, this.qa, this.ya, d.pp) : (e.Gc(0, 0, this.qa, this.ya, this.xA), null != a && e.sj(a, 0, 0, a.width, a.height, 0, 0));
                this.od = document.createElement("canvas");
                this.od.width = this.qa;
                this.od.height = this.ya;
                this.od.getContext("2d").drawImage(b, 0, 0);
                this.transition = this.nv().Tl(d, this.od, b, c);
                if (null != this.transition) return this.eb = l.gu, !0
            }
            this.od = null;
            this.eb = l.Jl;
            this.H.Gz();
            return !1
        },
        wJ: function() {
            if (null != this.transition) {
                if (this.transition.or()) return !1;
                this.transition.Qb(w.iu);
                return !0
            }
            return !1
        },
        RH: function() {
            null != this.transition && (this.transition.end(), this.od = this.transition = null, this.eb == l.gu && (this.eb = l.Jl), this.H.Gz());
            return !0
        },
        bL: function() {
            var a, b, c = this.frame.bv;
            if (null != c) {
                a = document.createElement("canvas");
                a.width = this.qa;
                a.height = this.ya;
                b = document.createElement("canvas");
                b.width = this.qa;
                b.height = this.ya;
                var d = new Ga(a);
                d.Gc(0, 0, this.qa, this.ya, this.Ag);
                this.qe.Ab(d, 0, 0);
                d = new Ga(b);
                0 != (c.qp & sa.sq) ? d.Gc(0, 0, this.qa, this.ya, c.pp) : d.Gc(0, 0, this.qa, this.ya, 0);
                this.od = document.createElement("canvas");
                this.od.width = this.qa;
                this.od.height = this.ya;
                this.od.getContext("2d").drawImage(a, 0, 0);
                this.transition = this.nv().Tl(c, this.od, a, b);
                if (null != this.transition) return this.eb = l.qq, !0
            }
            this.od = null;
            return !1
        },
        xJ: function() {
            if (null != this.transition) {
                if (this.transition.or()) return this.fA(), !1;
                this.transition.Qb(w.tq)
            }
            return !0
        },
        fA: function() {
            null != this.transition && (this.ig = this.transition.m, this.transition.end(), this.od = this.transition = null, this.eb == l.qq && (this.eb = l.pq));
            return !0
        },
        mJ: function() {
            this.file.va(4);
            this.Wn = this.file.o();
            this.Xn = this.file.o();
            this.file.o();
            this.file.o();
            this.qa = this.file.o();
            this.ya = this.file.o();
            this.AA = this.file.s();
            this.zA = this.file.s();
            var a,
                b;
            this.vC = Array(l.og);
            for (a = 0; a < l.og; a++) this.vC[a] = this.file.o();
            this.Fw = Array(l.og * l.mn);
            for (a = 0; a < l.og; a++)
                for (b = 0; b < l.mn; b++) this.Fw[a * l.mn + b] = this.file.o();
            this.xA = this.file.jd();
            this.Of = this.file.s();
            this.yA = this.file.s();
            this.file.va(1);
            this.file.va(3)
        },
        rJ: function() {
            this.om = this.file.o();
            this.qv = Array(this.om);
            this.PA = Array(this.om);
            var a;
            for (a = 0; a < this.om; a++) this.qv[a] = this.file.s();
            this.file.oK(this.PA)
        },
        qJ: function() {
            this.xo = this.file.s();
            this.pv = Array(this.xo);
            var a;
            for (a = 0; a < this.xo; a++) this.pv[a] = this.file.Ob()
        },
        oJ: function(a) {
            this.Tn = a / 2;
            this.Sn = Array(this.Tn);
            for (a = 0; a < this.Tn; a++) this.Sn[a] = this.file.o()
        },
        uF: function(a) {
            return null == this.Sn || -1 == a || a >= this.Tn ? -1 : this.Sn[a]
        },
        kv: function(a) {
            if (this.rv) {
                var b;
                for (b = 0; b < this.rv.size(); b++)
                    if (gFont = this.rv.get(b), gFont.lH(a)) return gFont
            }
            return a
        },
        bJ: function() {
            this.Hi = null
        },
        KI: function() {
            var a;
            if (null == this.Ea || null != this.Ea && 0 == (this.Wk & R.hE))
                for (this.mo = Array(l.og), a = 0; a < l.og; a++) this.mo[a] = this.zA ^ 4294967295;
            else this.mo = null;
            if (null == this.Ea || null != this.Ea && 0 == (this.Wk & R.jE))
                for (this.jp = Array(l.og), a = 0; a < l.og; a++) this.jp[a] = this.AA ^ 4294967295;
            else this.jp = null;
            this.wC = Array(l.og);
            for (a = 0; a < l.og; a++) this.wC[a] = "";
            if (null == this.Ea || null != this.Ea && 0 == (this.Wk & R.Rx))
                for (this.Vn = Array(this.om), a = 0; a < this.om; a++) this.Vn[a] = this.qv[a];
            else this.Vn = null;
            if (null == this.Ea || null != this.Ea && 0 == (this.Wk & R.Rx))
                for (this.Un = Array(this.xo), a = 0; a < this.xo; a++) this.Un[a] = this.pv[a];
            else this.Un = null
        },
        EA: function() {
            for (var a = this; null == a.mo;) a = this.Ea;
            return a.mo
        },
        JA: function() {
            for (var a = this; null == a.jp;) a = this.Ea;
            return a.jp
        },
        kI: function() {
            for (var a = this; null != a.Ea && 0 != (a.Wk & R.iE);) a = a.Ea;
            return a.Fw
        },
        qI: function() {
            for (var a = this; null == a.Vn;) a = a.Ea;
            return a.Vn
        },
        pI: function() {
            for (var a = this; null == a.Un;) a = a.Ea;
            return a.Un
        },
        qz: function(a) {
            var b = this.qI();
            if (0 > a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push(0);
            return b
        },
        jv: function(a) {
            var b = this.qz(a);
            return null != b ? b[a] : 0
        },
        SK: function(a, b) {
            var c = this.qz(a);
            null != c && (c[a] = b)
        },
        pz: function(a) {
            var b = this.pI();
            if (0 > a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push("");
            return b
        },
        CA: function(a) {
            var b = this.pz(a);
            return null != b ? b[a] : ""
        },
        RK: function(a, b) {
            var c = this.pz(a);
            null != c && (c[a] = b)
        },
        NH: function(a) {
            a && (this.QD.charCodeAt(this.sp) == a.charCode ? (this.sp++, this.sp == this.QD.length && (this.Fx = 250, this.sp = 0)) : this.sp = 0)
        },
        Zz: function(a) {
            if (a) {
                var b = a.keyCode;
                this.Gk = this.Qc[b] = !0;
                null != this.H && null != this.H.i && this.H.i.NJ(b);
                for (b = 0; b < this.Jb.length; b++) this.Jb[b].Zz(a)
            }
        },
        $z: function(a) {
            if (a) {
                this.Qc[a.keyCode] = !1;
                var b;
                for (b = 0; b < this.Jb.length; b++) this.Jb[b].$z(a)
            }
        },
        Qs: function(a, b) {
            this.Jj = a;
            this.Lj = b
        },
        Mr: function(a, b, c) {
            a.pageX ? (this.Vf = a.pageX, this.Wf = a.pageY) : a.clientY && (this.Vf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.Wf = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
            for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;) d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent;
            this.Vf -= e + this.Jj;
            this.Wf -= d + this.Lj;
            this.Vf = Math.floor(this.Vf / this.qc);
            this.Wf = Math.floor(this.Wf / this.rc);
            null != this.H && null != this.H.i && this.H.i.rC();
            for (d = 0; d < this.Jb.length; d++) this.Jb[d].Mr(a, b);
            this.Hj || 305419896 == c || this.JD(new Ua(a.pageX, a.pageY, this.canvas))
        },
        HB: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = l.Ml;
                    break;
                case 3:
                    b = l.fk;
                    break;
                default:
                    b = l.Ve
            } else switch (a.button) {
                case 2:
                    b = l.fk;
                    break;
                case 4:
                    b = l.Ml;
                    break;
                default:
                    b = l.Ve
            }
            this.Mr(a, this.canvas, 305419896);
            this.Qc[b] = !1;
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].HB(a);
            this.Hj || this.op(new Ua(a.pageX, a.pageY, this.canvas))
        },
        FB: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = l.Ml;
                    break;
                case 3:
                    b = l.fk;
                    break;
                default:
                    b = l.Ve
            } else switch (a.button) {
                case 2:
                    b = l.fk;
                    break;
                case 4:
                    b = l.Ml;
                    break;
                default:
                    b = l.Ve
            }
            this.Mr(a, this.canvas, 305419896);
            this.Gk = !0;
            this.Qc[b] = !0;
            null != this.H && null != this.H.i && this.H.i.qC(b - l.Ve, 0 == a.detail % 2 ? 2 : 1);
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].FB(a);
            this.Hj || this.Xs(new Ua(a.pageX, a.pageY, this.canvas))
        },
        GB: function(a) {
            this.Qc[l.Ve] = !1;
            this.Qc[l.Ml] = !1;
            this.Qc[l.fk] = !1;
            var b;
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].GB(a);
            this.Hj || this.op(new Ua(a.pageX, a.pageY, this.canvas))
        },
        IB: function(a) {
            this.Sz = "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail;
            null != this.H && null != this.H.i && this.H.OJ(this.Sz)
        },
        Xs: function(a) {
            !this.lr && this.Te && (this.Te.Xk(), this.Te = null);
            if (null != this.Bf) {
                var b, c;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var d = a.changedTouches[b];
                    for (c = 0; c < l.pd; c++)
                        if (this.Bf[c] == l.ek) {
                            this.Bf[c] = d.identifier;
                            this.Ni[c] = !1;
                            for (o = 0; o < this.Af.size(); o++)
                                if (this.Af.get(o).jL(d)) {
                                    this.Ni[c] = !0;
                                    this.$m[c] = o;
                                    break
                                } if (!this.Ni[c] && (this.lh[c] = this.$n(d), this.mh[c] = this.ao(d), this.ro == l.ek && d.identifier != l.fy))
                                for (this.ro = c, this.Vf = this.lh[c], this.Wf = this.mh[c], this.Gk = !0, this.Qc[l.Ve] = !0, null != this.H && null != this.H.i && this.H.i.qC(0, 1), c = 0; c < this.Jb.length; c++) this.Jb[c].Xs(a);
                            break
                        }
                }
            }
        },
        JD: function(a) {
            if (null != this.Bf) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < l.pd; c++)
                        if (this.Bf[c] == e.identifier) {
                            if (this.Ni[c]) this.Af.get(this.$m[c]).KD(e);
                            else {
                                for (d = 0; d < this.Af.size(); d++) this.Af.get(d).KD(e);
                                this.lh[c] = this.$n(e);
                                this.mh[c] = this.ao(e)
                            }
                            if (this.ro == c)
                                for (this.Vf = this.lh[c], this.Wf = this.mh[c], null != this.H && null != this.H.i && this.H.i.rC(), c = 0; c < this.Jb.length; c++) this.Jb[c].Xs(a, null);
                            break
                        }
                }
            }
        },
        op: function(a) {
            this.lr && this.Te && (this.Te.Xk(), this.Te = null);
            if (null != this.Bf) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < l.pd; c++)
                        if (this.Bf[c] == e.identifier) {
                            this.Bf[c] = l.ek;
                            if (this.Ni[c]) this.Af.get(this.$m[c]).HD(e);
                            else {
                                for (d = 0; d < this.Af.size(); d++) this.Af.get(d).HD(e);
                                this.lh[c] = this.$n(e);
                                this.mh[c] = this.ao(e)
                            }
                            if (c == this.ro)
                                for (this.Vf = this.lh[c], this.Wf = this.mh[c], this.ro = l.ek, this.Qc[l.Ve] = !1, d = 0; d < this.Jb.length; d++) this.Jb[d].op(a)
                        }
                }
            }
        },
        $n: function(a) {
            var b = a.pageX;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
            return Math.floor((b - this.Jj) / this.qc)
        },
        ao: function(a) {
            var b = a.pageY;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
            return Math.floor((b - this.Lj) / this.rc)
        },
        nI: function(a) {
            if (null != this.vk) {
                var b;
                b = a.lastIndexOf("\\");
                0 > b && (b = a.lastIndexOf("/"));
                0 <= b && (a = a.substring(b + 1));
                for (b = 0; b < this.vk.length; b++)
                    if (this.vk[b].path == a) return this.vk[b]
            }
            return null
        },
        rx: function(a) {
            this.Oz = a;
            this.canvas.style.cursor = 0 <= this.Oz ? this.cursor : "none"
        },
        DD: function(a, b) {
            null == this.Aa && (this.Aa = new t(this), this.Aa.gB(), this.Aa.reset(b), this.Rh = 1, 0 > this.Af.indexOf(this.Aa) && this.Af.add(this.Aa))
        },
        $K: function() {
            this.aL();
            this.Rh = 2
        },
        SH: function() {
            null != this.Aa && (1 == this.Rh && this.Af.OC(this.Aa), this.Aa = null);
            2 == this.Rh && this.PH();
            this.Rh = 0
        },
        aL: function() {
            if (0 == this.vn) {
                var a = this;
                window.DeviceMotionEvent && (ja.QJ = function(b) {
                    a.NG = b.acceleration.y / 9.780318;
                    a.OG = b.acceleration.x / 9.780318;
                    a.PG = b.acceleration.z / 9.780318;
                    a.ju = b.accelerationIncludingGravity.y / 9.780318;
                    a.ku = b.accelerationIncludingGravity.x / 9.780318;
                    a.MG = b.accelerationIncludingGravity.z / 9.780318
                })
            }
            this.vn++
        },
        PH: function() {
            this.vn--;
            0 >= this.vn && (ja.QJ = null, this.vn = 0)
        },
        cr: function() {
            var a = 0; - .2 > this.ju && (a |= 4);
            .2 < this.ju && (a |= 8); - .2 > this.ku && (a |= 1);
            .2 < this.ku && (a |= 2);
            return a
        },
        Yu: function(a) {
            if (a.vl) {
                null == this.Te && (a.ID = 2);
                switch (a.ID) {
                    case 0:
                        0 < a.hg && (a.hg -= 2, 0 > a.hg && (a.hg = 0, phase++));
                        break;
                    case 2:
                        128 > a.hg && (a.hg += 4, 128 <= a.hg && (a.hg = 128, a.Ws = !0))
                }
                this.context.Gc(a.je.left, a.je.top, a.je.right - a.je.left, a.je.bottom - a.je.top, this.Ag, 0, 0);
                a.vl.Ab(this.context, a.je.left, a.je.top, A.Cf, a.hg);
                a.Ws && (a.vl = null, a.je = null, a.Zm = null)
            } else if (a.Ws = !0, null != this.Te) {
                a.Zm = new za;
                a.Zm.Kq();
                a.Zm.kc = 24;
                var b = a.Zm.kc + 6;
                a.vl = new ma(this, 120, b);
                var c = a.vl.measureText(this.Vv, a.Zm) + 64;
                a.vl.resize(c, b);
                a.vl.oB();
                a.vl.Kr(this.Vv, p.xi | p.Rj, null, 16776960, a.Zm, 2, 0);
                a.je = new aa;
                a.je.left = this.qa / 2 - c / 2;
                a.je.top = this.ya / 2 - b / 2;
                a.je.right = a.je.left + c;
                a.je.bottom = a.je.top + b;
                a.hg = 128;
                a.ID = 0;
                a.Ws = !1;
                this.context.Gc(0, 0, this.qa, this.ya, this.Ag, 0, 0)
            }
            return a.Ws
        }
    };
    J.JF = 1;
    J.BN = 2;
    J.KF = 4;
    J.oy = 32;
    J.DN = 256;
    J.CN = 2048;
    J.Vc = 32768;
    J.LF = 131072;
    J.Bp = 0;
    J.ze = 1;
    J.lE = 1;
    J.mE = 2;
    J.Bl = 6;
    J.wF = 256;
    J.zF = 1;
    J.AF = 2;
    J.BF = 4;
    J.FF = 0;
    J.GF = 1;
    J.DF = 2;
    J.EF = 3;
    J.prototype = {
        pJ: function(a) {
            this.app.file.seek(this.app.gv[a]);
            this.On = new I(this.app);
            this.Dd = new ld;
            this.tr = new aa;
            a = 0;
            var b;
            for (this.Ir = -1; 32639 != a;)
                if (a = this.app.file.o(), this.app.file.o(), b = this.app.file.s(), 0 != b) {
                    this.cK = this.app.file.S + b;
                    switch (a) {
                        case 13108:
                            this.Ov();
                            null != this.app.Ea && 0 != (this.app.Wk & R.gE) ? (this.lo = this.app.AH, this.ko = this.app.BH) : (this.lo = Math.min(this.app.qa, this.Nd), this.ko = Math.min(this.app.ya, this.Xc));
                            break;
                        case 13128:
                            var c = b / 6;
                            this.qo = Array(c);
                            this.yd = Array(c);
                            this.zd = Array(c);
                            for (b = this.he = 0; b < c; b++) this.qo[b] = this.app.file.o(), this.he = Math.max(this.he, this.qo[b]), this.yd[b] = this.app.file.o(), this.zd[b] = this.app.file.o();
                            this.he++;
                            break;
                        case 13130:
                            this.Aa = this.app.file.o();
                            this.fm = this.app.file.o();
                            break;
                        case 13122:
                            this.tr.load(this.app.file);
                            break;
                        case 13124:
                            this.Ir = this.app.file.o();
                            break;
                        case 13127:
                            this.iB = this.app.file.s();
                            break;
                        case 13109:
                            this.wA = this.app.file.Ob();
                            break;
                        case 13115:
                            this.Qn = new sa;
                            this.Qn.load(this.app.file);
                            break;
                        case 13116:
                            this.bv = new sa;
                            this.bv.load(this.app.file);
                            break;
                        case 13121:
                            this.uJ();
                            break;
                        case 13125:
                            this.tJ();
                            break;
                        case 13112:
                            this.Dd.load(this.app);
                            break;
                        case 13117:
                            this.On.load(this.app), this.Lg = this.On.Lg
                    }
                    this.app.file.seek(this.cK)
                } this.app.tc.tf();
            for (b = 0; b < this.Dd.Xf; b++) this.app.tc.Cj(this.Dd.DA(b).Tf);
            this.app.ca.tf();
            this.app.zf.tf();
            this.app.Sb.tf();
            this.app.tc.load(this.app.file);
            this.app.tc.fc(this.app.ca, this.app.Sb);
            this.app.Ja & l.wi && (this.app.Sb.kp(), this.app.zf.kp(), 0 == this.app.he && this.app.ca.kp());
            this.app.ca.load(this.app.file);
            this.app.Sb.load(this.app.file);
            this.On.UH(this.app.zf);
            this.app.zf.load();
            this.app.tc.BK();
            for (b = 0; b < this.Dd.Xf; b++) a = this.Dd.list[b], a.vr >= u.Kb && this.app.tc.VK(a.Tf)
        },
        uJ: function() {
            this.xc = this.app.file.s();
            this.Ya = Array(this.xc);
            var a;
            for (a = 0; a < this.xc; a++) this.Ya[a] = new W(this.app), this.Ya[a].load(this.app.file)
        },
        tJ: function() {
            var a;
            for (a = 0; a < this.xc; a++) this.Ya[a].ae = this.app.file.s(), this.Ya[a].be = this.app.file.s(), this.app.file.va(12)
        },
        Ov: function() {
            this.Nd = this.app.file.s();
            this.Xc = this.app.file.s();
            this.dB = this.app.file.jd();
            this.Vb = this.app.file.s()
        }
    };
    Y.Wc = 32;
    Y.prototype = {
        RG: function(a) {
            null == this.qk && (this.qk = new N);
            this.qk.add(a)
        },
        FH: function() {
            if (null != this.qk && 0 < this.qk.size() && !this.Su) {
                var a = this.qk.get(0);
                this.qk.Vo(0);
                this.Su = !0;
                var b = this;
                b.context.decodeAudioData(a.response, function(c) {
                    a.buffer = c;
                    a.response = null;
                    b.app.Ri(a);
                    b.Su = !1
                })
            }
        },
        reset: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) this.yn[a] = !1
        },
        play: function(a, b, c, d) {
            if (0 != this.bz) {
                var e = this.app.zf.uI(a);
                if (null != e) {
                    0 == this.uu && (c = 0);
                    if (0 > c) {
                        for (a = 0; a < Y.Wc && (null != this.Ua[a] || 0 != this.yn[a]); a++);
                        if (a == Y.Wc)
                            for (a = 0; a < Y.Wc && (0 != this.yn[a] || null == this.Ua[a] || 0 != this.Ua[a].Bn); a++);
                        c = a;
                        0 <= c && c < Y.Wc && (this.tp[c] = this.lB)
                    }
                    if (!(0 > c || c >= Y.Wc)) {
                        if (null != this.Ua[c]) {
                            if (1 == this.Ua[c].Bn) return;
                            this.Ua[c] != e && (this.Ua[c].stop(), this.Ua[c] = null)
                        }
                        for (a = 0; a < Y.Wc; a++) this.Ua[a] == e && (this.Ua[a].stop(), this.Ua[a] = null);
                        this.Ua[c] = e;
                        e.play(b, d, this.tp[c])
                    }
                }
            }
        },
        UK: function(a) {
            this.uu = a
        },
        aJ: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) null != this.Ua[a] && this.Ua[a].aB() && this.app.zf.Cj(this.Ua[a].handle)
        },
        Us: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) null != this.Ua[a] && (this.Ua[a].stop(), this.Ua[a] = null)
        },
        eL: function(a) {
            0 <= a && a < Y.Wc && null != this.Ua[a] && (this.Ua[a].stop(), this.Ua[a] = null)
        },
        RI: function(a) {
            return 0 <= a && a < Y.Wc && null != this.Ua[a] ? this.Ua[a].aB() : !1
        },
        pause: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) null != this.Ua[a] && this.Ua[a].pause()
        },
        resume: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) null != this.Ua[a] && this.Ua[a].resume()
        },
        XK: function(a, b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 <= a && a < Y.Wc && (this.tp[a] = b, null != this.Ua[a] && this.Ua[a].WK(b))
        },
        gH: function() {
            var a;
            for (a = 0; a < Y.Wc; a++) null != this.Ua[a] && this.Ua[a].fH() && (this.Ua[a] = null)
        }
    };
    ad.prototype = {
        fi: function() {
            var a = this.app.file.o();
            this.path = this.app.file.Ob(a);
            a = this.path.lastIndexOf("\\");
            0 <= a && (this.path = this.path.substring(a + 1));
            this.length = this.app.file.s();
            this.offset = this.app.file.S;
            this.app.file.va(this.length)
        },
        open: function() {
            return this.app.file.wg(this.offset, this.length)
        }
    };
    bd.prototype = {
        load: function() {
            return this.Ev
        },
        reset: function() {
            this.ww = this.Ne = 0;
            this.Iq = 25
        },
        step: function() {
            switch (this.Ne) {
                case 0:
                    -1 != this.app.Zk ? this.context.Gc(0, 0, this.app.qa, this.app.ya, this.app.Zk) : this.context.Fq(0, 0, this.app.qa, this.app.ya);
                    this.context.sj(this.Gg, this.ti - this.Gg.width / 2, this.ui - this.Gg.height / 2, this.Gg.width, this.Gg.height, 0, 0);
                    this.Ne++;
                    break;
                case 1:
                    this.angle = this.app.Nh / this.app.Oh * 2 * Math.PI;
                    this.Wl(this.angle);
                    this.app.Nh == this.app.Oh && this.Ne++;
                    break;
                case 2:
                    0 < this.Iq && this.Iq--;
                    0 == this.Iq && this.Ne++;
                    break;
                case 3:
                    this.app.Yu(this) && this.Ne++
            }
        },
        Cv: function() {
            return 4 == this.Ne
        },
        Wl: function(a) {
            var b, c,
                d, e, f;
            for (b = this.ww; b <= a; b += .005) {
                c = this.ti + Math.cos(b) * (this.rf - this.size);
                d = this.ui - Math.sin(b) * (this.rf - this.size);
                e = this.ti + Math.cos(b) * this.rf;
                f = this.ui - Math.sin(b) * this.rf;
                this.context.Cd(c, d, e, f, this.color, 1, 0, 0);
                var g;
                for (g = 0; 3 > g; g++) c = this.ti + Math.cos(b) * (this.rf - this.size - g), d = this.ui - Math.sin(b) * (this.rf - this.size - g), e = this.ti + Math.cos(b) * (this.rf - this.size - g - 1), f = this.ui - Math.sin(b) * (this.rf - this.size - g - 1), this.context.Cd(c, d, e, f, this.color, 1, 0, 0), c = this.ti + Math.cos(b) * (this.rf + g), d = this.ui - Math.sin(b) * (this.rf + g), e = this.ti + Math.cos(b) * (this.rf + g + 1), f = this.ui - Math.sin(b) * (this.rf + g + 1), this.context.Cd(c, d, e, f, this.color, 1, 0, 0)
            }
            this.ww = a
        }
    };
    cd.prototype = {
        load: function() {
            return !0
        },
        reset: function() {
            this.ms = !1;
            this.Ne = 0;
            this.alpha = 128;
            this.position = 0
        },
        step: function() {
            if (this.app.Nh < this.app.Oh) switch (this.Ne) {
                case 0:
                    0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.Ne++))
            } else switch (this.Ne) {
                case 0:
                case 1:
                    this.Ne = 2;
                    break;
                case 2:
                    128 > this.alpha && (this.alpha += 4);
                    128 <= this.alpha && (this.alpha = 128, null == this.app.Te ? this.ms = !0 : this.Ne++);
                    break;
                default:
                    this.ms = this.app.Yu(this);
                    return
            }
            this.context.Gc(this.rect.left, this.rect.top, this.width, this.height, this.aH, A.Cf, this.alpha);
            this.context.vs(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, A.Cf, this.alpha);
            this.position = this.app.Nh / this.app.Oh * (this.width - 2);
            this.context.Gc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.bH, A.Cf, this.alpha)
        },
        Cv: function() {
            return this.ms && this.app.Nh == this.app.Oh
        }
    };
    dd.prototype = {
        load: function() {
            this.step();
            return !this.C.Ig
        },
        reset: function() {
            this.C.H.kA();
            this.C.H.Fv();
            this.C.H.gt(!1);
            this.C.H.Em(-1, !1);
            this.C.H.i.$s();
            this.C.H.Zq();
            this.C.H.iv();
            this.C.H.A.Zi = this.C.H.A.Hv = this.C.H.il = 0;
            this.C.H.A.$i = this.C.H.A.Iv = this.C.H.jl = 0;
            this.C.TC();
            this.C.H.pu();
            this.C.H.zv();
            this.C.H.Em(-1, !1);
            this.C.H.Iw();
            this.C.H.Nu(!1);
            this.C.H.Zu();
            this.C.H.Nv();
            this.C.H.i.Jw();
            this.C.H.i.Aq(this.C.H);
            this.C.H.av();
            this.C.H.Bq();
            this.C.H.zb = 0;
            this.C.H.Um = 0;
            this.C.Ej = !1;
            this.app.Jb.push(this.C);
            this.Vl = 0
        },
        step: function() {
            this.C.Ej || (this.fL && (this.C.Ej = this.app.Nh == this.app.Oh), 0 == this.C.mp() && (this.C.Ej = !0), this.C.aA(this.context, this.Oc.x, this.Oc.y, !1));
            this.C.Ej && this.app.Te && this.app.Yu(this)
        },
        Cv: function() {
            var a = this.C.Ej;
            this.app.Te && (a = !1);
            if (a) {
                if (0 < this.Vl && (this.Vl--, 0 < this.Vl)) return !1;
                var b;
                for (b = 0; b < this.app.Jb.length; b++)
                    if (this.app.Jb[b] == this.C) {
                        this.app.Jb.splice(b, 1);
                        break
                    }
            }
            return a
        }
    };
    t.zc = 0;
    t.Tc = 1;
    t.Uc = 2;
    t.ny = -1;
    t.pd = 3;
    t.Ai = 1;
    t.lg = 2;
    t.mg = 4;
    t.my = 8;
    t.AN = 2147483648;
    t.HF = 70;
    t.JE = 60;
    t.HE = .5;
    t.prototype = {
        gB: function() {
            null == this.jc && (this.jc = Z.wg(this.app, "joyback.png"), this.rr = Z.wg(this.app, "joyfront.png"), this.Kd = Z.wg(this.app, "fire1U.png"), this.ee = Z.wg(this.app, "fire2U.png"), this.qA = Z.wg(this.app, "fire1D.png"), this.rA = Z.wg(this.app, "fire2D.png"))
        },
        reset: function(a) {
            this.Ka = a;
            null != this.jc && 0 != this.jc.width ? this.iD() : this.wu = !0;
            this.Hg = this.$A ? t.HF * Math.PI / 180 : t.JE * Math.PI / 180
        },
        iD: function() {
            var a, b;
            a = this.app.qa;
            b = this.app.ya;
            0 == (this.Ka & t.my) ? (0 != (this.Ka & t.Ai) && (this.bc[t.zc] = 16 + this.jc.width / 2, this.cc[t.zc] = b - 16 - this.jc.height / 2), 0 != (this.Ka & t.lg) && 0 != (this.Ka & t.mg) ? (this.bc[t.Tc] = a - this.Kd.width / 2 - 32, this.cc[t.Tc] = b - this.Kd.height / 2 - 16, this.bc[t.Uc] = a - this.ee.width / 2 - 16, this.cc[t.Uc] = b - this.ee.height / 2 - this.Kd.height - 24) : 0 != (this.Ka & t.lg) ? (this.bc[t.Tc] = a - this.Kd.width / 2 - 16, this.cc[t.Tc] = b - this.Kd.height / 2 - 16) : 0 != (this.Ka & t.mg) && (this.bc[t.Uc] = a - this.ee.width / 2 - 16, this.cc[t.Uc] = b - this.ee.height / 2 - 16)) : (0 != (this.Ka & t.Ai) && (this.bc[t.zc] = a - 16 - this.jc.width / 2, this.cc[t.zc] = b - 16 - this.jc.height / 2), 0 != (this.Ka & t.lg) && 0 != (this.Ka & t.mg) ? (this.bc[t.Tc] = this.Kd.width / 2 + 16 + 2 * this.ee.width / 3, this.cc[t.Tc] = b - this.Kd.height / 2 - 16, this.bc[t.Uc] = this.ee.width / 2 + 16, this.cc[t.Uc] = b - this.ee.height / 2 - this.Kd.height - 24) : 0 != (this.Ka & t.lg) ? (this.bc[t.Tc] = this.Kd.width / 2 + 16, this.cc[t.Tc] = b - this.Kd.height / 2 - 16) : 0 != (this.Ka & t.mg) && (this.bc[t.Uc] = this.ee.width / 2 + 16, this.cc[t.Uc] = b - this.ee.height / 2 - 16))
        },
        dc: function(a, b) {
            0 != (a & t.Ai) ? this.bc[t.zc] = b : 0 != (a & t.lg) ? this.bc[t.Tc] = b : 0 != (a & t.mg) && (this.bc[t.Uc] = b)
        },
        ec: function(a, b) {
            0 != (a & t.Ai) ? this.cc[t.zc] = b : 0 != (a & t.lg) ? this.cc[t.Tc] = b : 0 != (a & t.mg) && (this.cc[t.Uc] = b)
        },
        Ab: function(a) {
            this.wu && (this.wu = !1, this.iD());
            var b, c;
            0 != (this.Ka & t.Ai) && (b = this.bc[t.zc] - this.jc.width / 2, c = this.cc[t.zc] - this.jc.height / 2, a.Oe(this.jc, b, c, 0, 1, 1, 0, 0), b = this.bc[t.zc] + this.Rf - this.rr.width / 2, c = this.cc[t.zc] + this.Sf - this.rr.height / 2, a.Oe(this.rr, b, c, 0, 1, 1, 0, 0));
            if (0 != (this.Ka & t.lg)) {
                var d = 0 == (this.Aa & 16) ? this.Kd : this.qA;
                b = this.bc[t.Tc] - d.width / 2;
                c = this.cc[t.Tc] - d.height / 2;
                a.Oe(d, b, c, 0, 1, 1, 0, 0)
            }
            0 != (this.Ka & t.mg) && (d = 0 == (this.Aa & 32) ? this.ee : this.rA, b = this.bc[t.Uc] - d.width / 2, c = this.cc[t.Uc] - d.height / 2, a.Oe(d, b, c, 0, 1, 1, 0, 0))
        },
        jL: function(a) {
            var b = !1,
                c = this.app.$n(a),
                d = this.app.ao(a);
            this.cB = t.HE * Math.ceil(Math.sqrt(this.jc.width / 2 * this.jc.width / 2 + this.jc.height / 2 * this.jc.height / 2));
            this.df = Math.ceil(Math.sqrt(this.jc.width / 4 * this.jc.width / 4 + this.jc.height / 4 * this.jc.height / 4));
            c = this.getKey(c, d);
            c != t.ny && (this.touches[c] = a.identifier, c == t.zc && (this.Aa &= 240, b = !0), c == t.Tc ? (this.Aa |= 16, b = !0) : c == t.Uc && (this.Aa |= 32, b = !0));
            return b
        },
        KD: function(a) {
            var b = this.app.$n(a),
                c = this.app.ao(a);
            if (this.getKey(b, c) == t.zc && a.identifier == this.touches[t.zc] && (this.Rf = b - this.bc[t.zc], this.Sf = c - this.cc[t.zc], a = (2 * Math.PI - Math.atan2(this.Sf, this.Rf)) % (2 * Math.PI), this.Aa &= 240, b = Math.sqrt(this.Rf * this.Rf + this.Sf * this.Sf), this.$A ? (this.Rf = Math.cos(a) * this.df, this.Sf = Math.sin(a) * -this.df) : (this.Rf < -this.df && (this.Rf = -this.df), this.Rf > this.df && (this.Rf = this.df), this.Sf < -this.df && (this.Sf = -this.df), this.Sf > this.df && (this.Sf = this.df)), b > this.cB && b < 3 * this.df)) {
                b = 0;
                if (0 <= a)
                    for (;;) {
                        if (this.Ph(a, 0, this.Hg) || this.Ph(a, 2 * Math.PI, this.Hg)) {
                            b = 8;
                            break
                        }
                        if (this.Ph(a, Math.PI / 2, this.Hg)) {
                            b = 1;
                            break
                        }
                        if (this.Ph(a, Math.PI, this.Hg)) {
                            b = 4;
                            break
                        }
                        if (this.Ph(a, Math.PI / 4 * 6, this.Hg)) {
                            b = 2;
                            break
                        }
                        if (this.Ph(a, Math.PI / 4, Math.PI / 2 - this.Hg)) {
                            b = 9;
                            break
                        }
                        if (this.Ph(a, Math.PI / 4 * 3, Math.PI / 2 - this.Hg)) {
                            b = 5;
                            break
                        }
                        if (this.Ph(a, Math.PI / 4 * 5, Math.PI / 2 - this.Hg)) {
                            b = 6;
                            break
                        }
                        if (this.Ph(a, Math.PI / 4 * 7, Math.PI / 2 - this.Hg)) {
                            b = 10;
                            break
                        }
                        break
                    }
                this.Aa |= b
            }
        },
        Ph: function(a, b, c) {
            return a > b - c / 2 && a < b + c / 2
        },
        HD: function(a) {
            var b;
            for (b = 0; b < t.pd; b++)
                if (this.touches[b] == a.identifier) {
                    this.touches[b] = 0;
                    switch (b) {
                        case t.zc:
                            this.Sf = this.Rf = 0;
                            this.Aa &= 240;
                            break;
                        case t.Tc:
                            this.Aa &= -17;
                            break;
                        case t.Uc:
                            this.Aa &= -33
                    }
                    break
                }
        },
        getKey: function(a, b) {
            return 0 != (this.Ka & t.Ai) && a >= this.bc[t.zc] - this.jc.width / 2 && a < this.bc[t.zc] + this.jc.width / 2 && b > this.cc[t.zc] - this.jc.height / 2 && b < this.cc[t.zc] + this.jc.height / 2 ? t.zc : 0 != (this.Ka & t.lg) && a >= this.bc[t.Tc] - this.Kd.width / 2 && a < this.bc[t.Tc] + this.Kd.width / 2 && b > this.cc[t.Tc] - this.Kd.height / 2 && b < this.cc[t.Tc] + this.Kd.height / 2 ? t.Tc : 0 != (this.Ka & t.mg) && a >= this.bc[t.Uc] - this.ee.width / 2 && a < this.bc[t.Uc] + this.ee.width / 2 && b > this.cc[t.Uc] - this.ee.height / 2 && b < this.cc[t.Uc] + this.ee.height / 2 ? t.Uc : t.ny
        },
        cr: function() {
            return this.Aa
        }
    };
    k.cN = 2;
    k.bF = 4;
    k.ln = 16;
    k.cF = 32;
    k.eF = 64;
    k.dF = 128;
    k.Dt = 512;
    k.GM = 2;
    k.IM = 4;
    k.KM = 8;
    k.HM = 16;
    k.FM = 32;
    k.LM = 64;
    k.JM = 128;
    k.MM = 256;
    k.gy = 480;
    k.hy = 300;
    k.fn = 64;
    k.gn = 16;
    k.IP = 1;
    k.KP = 2;
    k.JP = 4;
    k.du = 1;
    k.XO = 2;
    k.WO = 4;
    k.YO = 8;
    k.Hy = 0;
    k.hq = 1;
    k.qg = 2;
    k.au = 3;
    k.fG = 4;
    k.tE = 1;
    k.en = 2;
    k.Wx = 4;
    k.Vx = 8;
    k.Sp = 10;
    k.Ht = 1;
    k.It = 2;
    k.Rp = 3;
    k.qy = 4;
    k.GN = 5;
    k.HN = 6;
    k.EN = 7;
    k.IN = 8;
    k.FN = 9;
    k.Qp = -2;
    k.OF = 100;
    k.PF = 101;
    k.sh = 1;
    k.th = 2;
    k.uh = 4;
    k.rh = 8;
    k.eE = 15;
    k.Kt = 128;
    k.Df = 2147483647;
    k.xt = 1110591041;
    k.hu = 1110594637;
    k.qG = 1110600435;
    k.Jt = 1110874198;
    k.oq = 1110634490;
    k.dn = 1110590791;
    k.ZJ = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
    k.Sy = [0, k.sh, k.th, 0, k.uh, k.uh + k.sh, k.uh + k.th, 0, k.rh, k.rh + k.sh, k.rh + k.th, 0, 0, 0, 0, 0];
    k.az = !1;
    k.Ih = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >= b;
            case 5:
                return a > b
        }
        return !1
    };
    k.xz = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >= b;
            case 5:
                return a > b
        }
        return !1
    };
    k.GQ = function(a) {
        a = a.Da >= u.ng ? a.ext.IA() : a.Bg();
        null == a && (a = new eb);
        return a
    };
    k.qR = function(a, b, c) {
        a.Da >= u.ng ? a.ext.jD(b, c) : a.sl(b, c)
    };
    k.IQ = function(a) {
        return a.Da >= u.ng ? 0 : a.ar()
    };
    k.rR = function(a, b) {
        a.Da >= u.ng || a.Os(b)
    };
    k.JJ = function(a) {
        null != a.D && (a.D.iw(), a.D.T |= A.sg, a.D.pl = 0)
    };
    k.IJ = function(a) {
        null != a.D && (a.D.Co(), a.D.T &= ~A.sg, a.D.pl = 0)
    };
    k.dc = function(a, b) {
        null != a.B ? a.B.ta.dc(b) : a.w != b && (a.w = b, null != a.b && (a.b.O = !0, a.b.Qa = !0))
    };
    k.ec = function(a, b) {
        null != a.B ? a.B.ta.ec(b) : a.v != b && (a.v = b, null != a.b && (a.b.O = !0, a.b.Qa = !0))
    };
    k.NQ = function(a, b) {
        if (0 == a) return 0 <= b ? 24 : 8;
        if (0 == b) return 0 <= a ? 0 : 16;
        var c, d = !1,
            e = !1;
        0 > a && (d = !0, a = -a);
        0 > b && (e = !0, b = -b);
        c = 256 * a / b;
        var f;
        for (f = 0; !(c >= M.yl[f]); f += 2);
        c = M.yl[f + 1];
        e && (c = -c + 32 & 31);
        d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
        return c
    };
    k.prototype = {
        QK: function(a) {
            this.A = a
        },
        pu: function() {
            this.G = Array(this.A.Lg);
            this.i = this.A.On;
            this.vf = 0;
            var a;
            for (a = this.h.tc.BA(); null != a; a = this.h.tc.GA()) a.Me >= u.Kb && this.vf++;
            this.dx = -1 == this.A.Ir ? this.h.nd & 65535 : this.A.Ir;
            this.ml = Array(Math.round(this.A.Lg / 32 + 1));
            this.ll = new N;
            this.dh = this.A.Lg;
            this.kx = this.i.bC;
            this.A.Zi = 0;
            this.A.$i = 0;
            this.ia = this.A.Zi;
            this.ka = this.A.$i;
            this.Is = this.Hs = 0;
            this.Ud = this.A.tr.right; - 1 == this.Ud && (this.Ud = 2147479552);
            this.Vd = this.A.tr.bottom; - 1 == this.Vd && (this.Vd = 2147479552);
            this.lx = this.zb = this.ob = 0;
            this.Rc &= k.dF;
            this.Rc |= k.bF;
            this.Rm = 0;
            this.Ds = Array(k.Sp);
            this.ve = null;
            this.Rc |= k.eF;
            this.pa = Array(k.Kt);
            this.Sm = Array(k.Kt);
            this.Es = new va;
            this.Es.code = 0;
            this.zs = Array(4);
            this.cx = Array(4);
            this.ys = Array(4);
            this.bd = Array(4);
            for (a = this.Ic = 0; a < k.Sp; a++) this.Ds[a] = 50;
            this.Au = this.ns = !1;
            this.A.aD = !0
        },
        iv: function() {
            this.A.aD = !1;
            this.ve = this.ll = this.ml = this.W = this.G = null;
            var a;
            for (a = 0; a < k.Kt; a++) this.pa[a] = 0;
            this.Es = null
        },
        LI: function(a) {
            this.pu();
            this.h.Rh = 0;
            if (null == this.h.Ea && this.h.Hj)
                if (this.A.Aa == J.EF) null == this.h.Aa && (this.h.Aa = new t(this.h), this.h.Aa.gB()), this.h.Aa.reset(0), this.h.DD();
                else if (this.A.Aa != J.FF) {
                var b = 0;
                0 != (this.A.fm & J.zF) && (b = t.lg);
                0 != (this.A.fm & J.AF) && (b |= t.mg);
                0 != (this.A.fm & J.BF) && (b |= t.my);
                0 != (this.A.fm & J.wN) && (b |= t.zN);
                this.A.Aa == J.GF && (b |= t.Ai);
                0 != (b & (t.lg | t.mg | t.Ai)) && (this.h.DD(b), this.h.Aa.reset(b));
                this.A.Aa == J.DF && this.h.$K()
            }
            this.ix = 255;
            a && (this.Rc |= k.ln);
            this.zv();
            this.Em(-1, !1);
            this.Iw();
            this.pc = 0;
            this.Nu(a);
            this.Zu();
            this.GI();
            this.Nv();
            this.i.Jw();
            this.i.Aq(this);
            this.vD();
            this.Um = 0;
            this.av();
            this.Au = !1
        },
        Wu: function() {
            if (0 < this.dg && null == this.h.Mg) this.ns && (1 == this.h.Gk && (0 <= this.Fs ? this.h.Qc[this.Fs] && (this.resume(), this.zb = 0, this.i.Fe(-458755)) : this.h.Gk && (this.resume(), this.zb = 0, this.i.Fe(-458755))), this.h.Gk = !1), null != this.ls && this.ls.BI(), a = this.zb;
            else {
                this.h.su |= l.Lx;
                var a = this.dI();
                this.h.su &= ~l.Lx;
                0 != (this.Rc & k.ln) && (this.lA = (new Date).getTime() - this.nl, this.gt(!0), this.i.$s())
            }
            if (a == k.Ht || a == k.It || a == k.Rp) {
                this.h.ig = document.createElement("canvas");
                this.h.ig.width = this.h.qa;
                this.h.ig.height = this.h.ya;
                var b = new Ga(this.h.ig);
                this.h.frame.sr ? b.Fq(0, 0, this.qa, this.ya) : b.Gc(0, 0, this.qa, this.ya, this.Ag);
                b.Gc(0, 0, this.h.qa, this.h.ya, this.h.Ag);
                this.h.qe.Ab(b, 0, 0)
            }
            if (0 != a) switch (a) {
                case 5:
                    this.pause();
                    this.h.Gk = !1;
                    this.ns = !0;
                    a = 0;
                    break;
                case 101:
                    if (this.A.pQ) break;
                    this.kA();
                    this.Fv();
                    this.gt(!1);
                    this.Em(-1, !1);
                    this.i.$s();
                    this.Zq();
                    this.iv();
                    this.A.Zi = this.A.Hv = this.il = 0;
                    this.A.$i = this.A.Iv = this.jl = 0;
                    this.h.TC();
                    this.pu();
                    this.zv();
                    this.Em(-1, !1);
                    this.Iw();
                    this.Nu(!1);
                    this.Zu();
                    this.Nv();
                    this.i.Jw();
                    this.i.Aq(this);
                    this.av();
                    this.vD();
                    this.Um = a = 0;
                    break;
                case 100:
                case -2:
                    this.i.Fe(-196611)
            }
            return this.zb = a
        },
        cJ: function(a) {
            var b;
            100 < this.zb && (this.zb = k.Qp);
            b = this.Um;
            this.GK();
            this.Fv();
            this.gt(a);
            this.i.$s();
            this.iv();
            this.Zq();
            this.Em(-1, !0);
            this.h.SH();
            return p.SF(this.zb, b)
        },
        zv: function() {
            var a;
            for (a = 0; a < this.dh; a++) this.G[a] = null
        },
        Iw: function() {
            var a, b;
            this.Rc |= k.cF;
            this.Rc |= k.Dt;
            var c = this.Wo = 0;
            this.W = Array(this.vf);
            this.wf = 0;
            for (a = this.h.tc.BA(); null != a; a = this.h.tc.GA())
                if (b = a.Me, b >= u.Kb) {
                    this.W[c] = new Q;
                    this.W[c].tH(a);
                    this.W[c].uw = c;
                    this.W[c].Jo = -1;
                    if (b == u.Dh || b == u.Fy)
                        for (a = this.A.Dd.Wq(); null != a; a = this.A.Dd.Ao())
                            if (a.Tf == this.W[c].Zc) {
                                this.W[c].Jo = a.aj;
                                break
                            } c++
                } this.i.dK(this.W);
            for (c = 0; c < this.A.xc; c++) this.A.Ya[c].gw = 1;
            return 0
        },
        Gz: function() {
            var a, b, c, d, e;
            this.Rc &= ~k.ln;
            c = 0;
            for (e = this.A.Dd.Wq(); null != e; c++, e = this.A.Dd.Ao())
                if (a = this.h.tc.Ui(e.Tf), b = a.yc, a = a.Me, !(a < u.ng) && 0 == (b.Rg & D.Ly) && (d = k.Vx, e.Kv == Aa.Ny)) {
                    if (0 == (b.fj & D.iq)) {
                        if (a != u.Dh) continue;
                        d |= k.en
                    }
                    0 == (b.Rg & D.Iy) && this.$u(e.aj, e.Tf, 2147483648, 2147483648, -1, d, -1, -1)
                } this.i.Aq(this);
            this.nl = (new Date).getTime() - this.lA
        },
        Nu: function(a) {
            var b, c, d, e, f;
            d = 0;
            for (f = this.A.Dd.Wq(); null != f; d++, f = this.A.Dd.Ao())
                if (b = this.h.tc.Ui(f.Tf), c = b.yc, b = b.Me, e = k.Vx, f.Kv == Aa.Ny) {
                    b == u.Dh && (e |= k.Wx);
                    if (0 == (c.fj & D.iq)) {
                        if (b == u.Fy) continue;
                        e |= k.en
                    }
                    a && b >= u.ng && 0 == (c.Rg & D.Ly) || 0 == (c.Rg & D.Iy) && this.$u(f.aj, f.Tf, 2147483648, 2147483648, -1, e, -1, -1)
                } this.Rc &= ~k.Dt
        },
        Fv: function() {
            var a;
            for (a = 0; a < this.dh && 0 != this.ob; a++)
                if (null != this.G[a]) {
                    var b = this.G[a];
                    (32 > b.Da || b.P.Ec != k.dn) && this.Uq(a, !0)
                } for (a = 0; a < this.dh && 0 != this.ob; a++) null != this.G[a] && (b = this.G[a], 32 <= b.Da && b.P.Ec == k.dn && this.Uq(a, !0))
        },
        gt: function(a) {
            a || (0 == (this.h.Xn & l.hF) ? this.h.sc.Us() : this.h.sc.aJ())
        },
        Em: function(a, b) {
            var c, d;
            d = -1 == a ? this.A.xc : a + 1;
            for (c = 0; c < d; c++) {
                var e = this.A.Ya[c];
                e.reset();
                e.IH();
                b && e.Rz()
            }
        },
        Bq: function() {
            0 != this.wf && this.fD(-1)
        },
        Zq: function() {
            0 != this.wf && this.fD(0)
        },
        Vz: function(a) {
            var b = 0,
                c, d = 0;
            for (c = 0; c < this.ob; c++) {
                for (; null == this.G[d];) d++;
                var e = this.G[d];
                d++;
                e != a && e.ra & D.Gf && (e = e.P.kf.gd[e.B.fp], e.to == U.Zt && (b |= 1 << e.Pk - 1))
            }
            b != this.wf && (0 != this.wf && this.Zq(), this.wf = b, 0 != this.wf && this.Bq())
        },
        PJ: function(a) {
            var b = this.wf;
            a.ra & D.Gf && (a = a.P.kf.gd[a.B.fp], a.to == U.Zt && (this.wf |= 1 << a.Pk - 1, 0 == b && this.Bq()))
        },
        fD: function(a) {
            0 <= a ? this.h.rx(1) : this.h.rx(-1)
        },
        vD: function() {
            this.h.rx(1)
        },
        nu: function(a) {
            var b, c;
            for (c = 0; c < this.ll.size() && (b = this.ll.get(c), !p.Ac(b.name, a)); c++);
            c == this.ll.size() && (b = new ub, this.ll.add(b), c = this.ll.size() - 1, b.name = a, b.Ka = 0);
            return c
        },
        GK: function() {
            var a, b, c, d, e, f;
            for (c = 0; c < this.W.length; c++)
                if (b = this.W[c], f = b.hb, 32767 != b.Zc && 0 == (f & 2147483648) && (d = this.h.tc.Ui(b.Zc), 0 != (d.bi & u.My) && (a = this.G[f], b.hd == u.Dh || b.hd == u.rn || null != a.M))) {
                    e = b.lj + b.hd.toString();
                    null == this.h.Hi && (this.h.Hi = new N);
                    var g = !1;
                    d = null;
                    for (a = 0; a < this.h.Hi.size(); a++)
                        if (d = this.h.Hi.get(a), e == d.name) {
                            g = !0;
                            break
                        } 0 == g ? (d = new Fe, d.name = e, d.Le = new N, this.h.Hi.add(d)) : d.Le.clear();
                    for (;;) {
                        a = this.G[f];
                        if (b.hd == u.Dh) f = new He, f.text = a.gg, f.pb = a.pb, d.Le.add(f);
                        else if (b.hd == u.rn) f = new Ge, f.value = a.ua, f.pb = a.pb, f.Sc = a.Sc, f.Ls = a.Ls, f.Ks = a.Ks, d.Le.add(f);
                        else {
                            e = new Ie;
                            e.Ka = a.M.rl;
                            e.values = Array(a.M.Na.length);
                            for (f = 0; f < a.M.Na.length; f++) e.values[f] = a.M.Na[f];
                            e.ab = Array(a.M.md.length);
                            for (f = 0; f < a.M.md.length; f++) e.ab[f] = a.M.md[f];
                            d.Le.add(e)
                        }
                        f = a.Tb;
                        if (0 != (f & 2147483648)) break
                    }
                }
        },
        Nv: function() {
            var a, b, c, d, e, f;
            if (null != this.h.Hi)
                for (c = 0; c < this.W.length; c++)
                    if (b = this.W[c], a = b.hb, 32767 != b.Zc && 0 <= a && (e = this.h.tc.Ui(b.Zc), 0 != (e.bi & u.My)))
                        for (f = b.lj + b.hd.toString(), d = 0; d < this.h.Hi.size(); d++)
                            if (e = this.h.Hi.get(d), f == e.name) {
                                for (d = 0;;) {
                                    a = this.G[a];
                                    if (b.hd == u.Dh) f = e.Le.get(d), a.gg = f.text, a.pb = f.pb, a.b.O = !0, a.SP = !0;
                                    else if (b.hd == u.rn) f = e.Le.get(d), a.ua = f.value, a.pb = f.pb, a.Sc = f.Sc, a.Ls = f.Ls, a.Ks = f.Ks, a.PP = !0, a.b.O = !0;
                                    else {
                                        f = e.Le.get(d);
                                        a.M.rl = f.Ka;
                                        a.M.Vi(f.values.length);
                                        a.M.zI(f.ab.length);
                                        var g;
                                        for (g = 0; g < f.values.length; g++) a.M.Na[g] = f.values[g];
                                        for (g = 0; g < f.ab.length; g++) a.M.md[g] = f.ab[g]
                                    }
                                    a = a.Tb;
                                    if (0 != (a & 2147483648)) break;
                                    d++;
                                    if (d >= e.Le.size()) break
                                }
                                break
                            }
        },
        $u: function(a, b, c, d, e, f, g, h) {
            for (;;) {
                var q = new ed,
                    l = null; - 1 != a && (l = this.A.Dd.rI(a));
                var C = this.h.tc.Ui(b),
                    p = C.yc;
                0 == (p.fj & D.iq) && (f |= k.en);
                if (this.ob >= this.dh) break;
                var n = null,
                    m = new L;
                switch (C.Me) {
                    case 2:
                        n = new sd;
                        break;
                    case 3:
                        n = new wd;
                        break;
                    case 4:
                        n = new xd;
                        break;
                    case 5:
                        n = new ud;
                        break;
                    case 6:
                        n = new vd;
                        break;
                    case 7:
                        n = new fa;
                        break;
                    case 8:
                        break;
                    case 9:
                        n = new R;
                        break;
                    default:
                        n = new yd(C.Me, this), null == n.ext && (n = null)
                }
                if (null == n) break;
                n.prototype = m;
                n.lJ = l;
                if (0 > h)
                    for (h = 0; h < this.dh && null != this.G[h]; h++);
                if (h >= this.dh) break;
                this.G[h] = n;
                this.ob++;
                n.HI = p.Ec;
                n.ra = p.Rg;
                h > this.YC && this.ex++;
                n.Ub = h;
                this.Wo++;
                0 == this.Wo && (this.Wo = 1);
                n.tv = this.Wo;
                n.cf = b;
                n.ir = a;
                n.Da = C.Me;
                this.LJ(n);
                n.c = this;
                n.co = !0;
                n.P = p;
                a = n.wb;
                if (null != a.mf)
                    for (C = a.uw, m = 0; m < a.mf.length; m++) {
                        var u = a.mf[m],
                            t = !1,
                            w, r = this.i.$c[u],
                            v = r.J.length;
                        for (w = 0; w < v; w += 2) {
                            if (0 > r.J[w + 1]) {
                                v = w;
                                break
                            }
                            if (r.J[w + 1] == C) {
                                t = !0;
                                break
                            }
                        }
                        if (!t) {
                            u = this.i.ad[u];
                            t = -1;
                            for (w = 0; w < u.J.length; w += 2)
                                if (u.J[w + 1] == C) {
                                    t = w;
                                    break
                                } if (0 <= t) {
                                var E = !0;
                                if (0 <= r.J[0])
                                    for (t += 2; E && t < u.J.length; t += 2) {
                                        var B = u.J[t + 1];
                                        for (w = 0; 0 <= r.J[w + 1]; w += 2)
                                            if (r.J[w + 1] == B) {
                                                for (E = v; E > w; E -= 2) r.J[E] = r.J[E - 2], r.J[E + 1] = r.J[E - 1];
                                                r.J[w] = b;
                                                r.J[w + 1] = C;
                                                E = !1;
                                                break
                                            }
                                    }
                                E && (r.J[v] = b, r.J[v + 1] = C)
                            }
                        }
                    }
                0 == (n.ra & D.Jy) && (n.ra &= ~D.ak, 0 != (n.bf & Q.kq) && 0 != (this.A.Vb & J.oy) && (n.ra |= D.ak), 0 != (n.bf & (Q.Xd | Q.lq)) && (n.ra |= D.ak));
                b = c;
                2147483648 == b && (b = l.Lv);
                q.jH = b;
                n.w = b;
                2147483648 == d && (d = l.Mv);
                q.kH = d;
                n.v = d;
                null != l && -1 == g && (g = l.eB);
                q.uz = g;
                n.fe = g;
                g = this.A.Ya[g];
                g.gw++;
                q.vz = g.gw;
                q.Gq = f;
                q.tz = e;
                q.iH = l;
                n.b = null;
                0 != (n.ra & (D.$j | D.Gf | D.bk)) && (n.b = new td, n.b.Z());
                n.B = null;
                0 != (n.ra & D.Gf) && (n.B = new Ha, 0 == (q.Gq & k.tE) && n.B.Z(0, n, p, q, -1));
                n.aa = null;
                0 != (n.ra & D.$j) && (n.aa = new La, n.aa.Z(n));
                n.D = null;
                0 != (n.ra & D.bk) && (n.D = new A, n.D.II(n, p, q));
                n.M = null;
                0 != (n.ra & D.lG) && (n.M = new Na, n.M.Z(n, p, q));
                n.Z(p, q);
                0 != (n.ra & D.bk) && n.D.yv(!0);
                1 <= this.pc && n.Hh();
                return h
            }
            return -1
        },
        Uq: function(a, b) {
            var c = this.G[a];
            if (null != c) {
                if (1 != b || 0 != c.tv) this.dJ(c), null != c.B && c.B.Cb(b), null != c.M && c.M.Cb(b), null != c.D && c.D.Cb(b), null != c.b && c.b.Cb(b), c.Cb(b), this.KJ(c);
                this.G[a] = null;
                this.ob--
            }
        },
        xg: function(a) {
            this.ml[Math.floor(a / 32)] |= 1 << (a & 31);
            this.Zo++
        },
        KH: function() {
            if (0 != this.Zo)
                for (var a = 0, b, c; a < this.dh;) {
                    b = this.ml[a / 32];
                    if (0 != b) {
                        for (c = this.ml[a / 32] = 0; 0 != b && 32 > c; c++) {
                            if (0 != (b & 1)) {
                                var d = this.G[a + c];
                                if (null != d && 1 == d.wb.Vg && (this.i.wd(d, d.Da | -2162688), d = d.wb, null != d.mf)) {
                                    var e = d.uw,
                                        f;
                                    for (f = 0; f < d.mf.length; f++) {
                                        var g, h = this.i.$c[d.mf[f]];
                                        for (g = 0; g < h.J.length && 0 <= h.J[g]; g += 2)
                                            if (h.J[g + 1] == e) {
                                                for (; g < h.J.length - 2 && 0 <= h.J[g]; g += 2) h.J[g] = h.J[g + 2], h.J[g + 1] = h.J[g + 3];
                                                g < h.J.length && (h.J[g] = -1, h.J[g + 1] = -1);
                                                break
                                            }
                                    }
                                }
                                this.Uq(a + c, !1);
                                this.Zo--
                            }
                            b >>= 1
                        }
                        if (0 == this.Zo) break
                    }
                    a += 32
                }
        },
        dJ: function(a) {
            var b = 0,
                c, d;
            if (0 != (a.V & L.ky))
                for (c = 0; c < this.ob; c++) {
                    for (; null == this.G[b];) b++;
                    d = this.G[b];
                    b++;
                    null != d.B && d.b.Fc == U.XF && (d = d.B.ta, d.El == a && 1 == d.Wp && d.AD())
                }
        },
        Hh: function() {
            var a, b, c;
            for (c = a = 0; a < this.ob; a++) {
                for (; null == this.G[c];) c++;
                c++
            }
            for (c = a = 0; a < this.ob; a++) {
                for (; null == this.G[c];) c++;
                b = this.G[c];
                c++;
                b.Hh()
            }
        },
        LJ: function(a) {
            var b = a.cf,
                c;
            for (c = 0; c < this.vf && this.W[c].Zc != b; c++);
            b = this.W[c];
            0 != (b.hb & 2147483648) ? (b.hb = a.Ub, a.Fg = c | 2147483648, a.Tb = 2147483648) : (c = this.G[b.hb], a.Fg = c.Fg, c.Fg = a.Ub, a.Tb = c.Ub, b.hb = a.Ub);
            a.uv = b.tw;
            a.wb = b;
            a.bf = b.Rd; - 1 == a.ir ? a.ir = b.Jo : -1 == b.Jo && (b.Jo = a.ir);
            b.Vg += 1
        },
        KJ: function(a) {
            var b = a.wb;
            --b.Vg;
            var c;
            0 == (a.Fg & 2147483648) ? (c = this.G[a.Fg], 0 == (a.Tb & 2147483648) ? (b = this.G[a.Tb], null != c && (c.Tb = a.Tb), null != b && (b.Fg = a.Fg)) : null != c && (c.Tb = 2147483648)) : 0 == (a.Tb & 2147483648) ? (c = this.G[a.Tb], null != c && (c.Fg = a.Fg, b.hb = c.Ub)) : b.hb = 2147483648
        },
        GE: function() {
            var a = this.jy();
            if (null != a) {
                var b = 0,
                    c;
                for (c = 0; c < this.ob; b++, c++) {
                    for (; null == this.G[b];) b++;
                    var d = this.G[b];
                    32 <= d.Da && (d.P.Ec == k.xt || d.P.Ec == k.hu || d.P.Ec == k.qG || d.P.Ec == k.oq || d.P.Ec == k.Jt ? d.ext.jK() : d.P.Ec == k.dn && d.ext.jK())
                }
                for (c = b = 0; c < this.ob; b++, c++) {
                    for (; null == this.G[b];) b++;
                    d = this.G[b];
                    if (0 != (d.ra & D.Gf)) {
                        var e = !1;
                        d.b.Fc == U.Di && d.P.kf.gd[d.B.fp].pr && (e = !0);
                        0 == e && 2 == d.Da && a.iK(d)
                    }
                }
                for (c = b = 0; c < this.ob; b++, c++)
                    for (; null == this.G[b];) b++
            }
        },
        jy: function() {
            if (0 == this.WC) {
                this.WC = !0;
                this.oi = null;
                var a = 0,
                    b;
                for (b = 0; b < this.ob; a++, b++) {
                    for (; null == this.G[a];) a++;
                    var c = this.G[a];
                    if (32 <= c.Da && c.P.Ec == k.dn) {
                        this.oi = c.ext;
                        break
                    }
                }
            }
            return this.oi
        },
        Lp: function(a) {
            return a && 0 == (a.V & L.Be) && 0 != (a.ra & D.Gf) && a.b.Fc == U.Di && a.P.kf.gd[a.B.fp].pr ? a.B.ta.Pd : null
        },
        UG: function(a) {
            if (a.P.Ec == k.xt || a.P.Ec == k.hu || a.P.Ec == k.Jt || a.P.Ec == k.oq) {
                var b = 0,
                    c;
                for (c = 0; c < this.ob; b++, c++) {
                    for (; null == this.G[b];) b++;
                    var d = this.G[b];
                    32 <= d.Da && d.P.Ec == k.dn && (a.P.Ec == k.xt ? a.ext.identifier == d.ext.identifier && d.ext.qQ.add(a.ext) : a.P.Ec == k.hu ? a.ext.identifier == d.ext.identifier && d.ext.vR.add(a.ext) : a.P.Ec == k.Jt ? a.ext.identifier == d.ext.identifier && d.ext.SQ.add(a.ext) : a.P.Ec == k.oq && a.ext.identifier == d.ext.identifier && d.ext.jR.add(a.ext))
                }
                if (a.P.Ec != k.oq)
                    for (c = b = 0; c < this.ob; b++, c++) {
                        for (; null == this.G[b];) b++;
                        d = this.G[b];
                        d.Da == u.Kb && (d = this.Lp(d)) && a.ext.$Q(d)
                    }
            }
        },
        Zb: function(a) {
            return null != a.B && null != a.B.ta ? a.B.ta.Zb() : a.b.Za
        },
        pause: function(a) {
            if (0 == this.dg) {
                this.dg = 1;
                this.UC = this.h.nd;
                var b = 0,
                    c;
                for (c = 0; c < this.ob; c++) {
                    for (; null == this.G[b];) b++;
                    b++
                }
                a || this.h.sc.pause()
            }
        },
        resume: function() {
            if (!this.GJ && 0 != this.dg) {
                this.dg = 0;
                this.Bq();
                var a = 0,
                    b;
                for (b = 0; b < this.ob; b++) {
                    for (; null == this.G[a];) a++;
                    a++
                }
                this.h.sc.resume();
                a = this.h.nd;
                a -= this.UC;
                this.nl += a;
                this.Fs = 0;
                this.ns = !1
            }
        },
        kA: function() {
            this.h.sc.Us()
        },
        Ki: function() {
            var a = 0,
                b;
            for (b = 0; b < this.ob; b++) {
                for (; null == this.G[a];) a++;
                var c = this.G[a];
                a++;
                c.Ki()
            }
        },
        vg: function(a, b, c) {
            a = this.rL(a, b, c);
            return null != a ? a.top : k.Df
        },
        rL: function(a, b, c) {
            b -= this.ia;
            c -= this.ka;
            var d; - 1 == a ? (d = 0, a = this.A.xc) : (d = a, a += 1);
            for (; d < a; d++) {
                var e = this.A.Ya[d].sI(b, c);
                if (null != e) return e
            }
            return null
        },
        av: function() {
            this.nl = this.h.nd;
            this.Zo = this.lx = this.zb = this.pc = this.ri = 0;
            var a;
            for (a = 0; a < (this.dh + 31) / 32; a++) this.ml[a] = 0;
            this.Hm = this.A.lo;
            this.Im = this.A.ko;
            this.Mm = -k.gy;
            this.Qm = -k.hy;
            this.Km = this.Ud + k.gy;
            this.Om = this.Vd + k.hy;
            this.il = a = this.ia;
            a -= k.fn;
            0 > a && (a = this.Mm);
            this.Lm = a;
            this.jl = a = this.ka;
            a -= k.gn;
            0 > a && (a = this.Qm);
            this.Pm = a;
            a = this.ia;
            a += this.Hm + k.fn;
            a > this.Ud && (a = this.Km);
            this.Jm = a;
            a = this.ka;
            a += this.Im + k.gn;
            a > this.Vd && (a = this.Om);
            this.Nm = a;
            for (a = this.dg = this.Tm = this.eg = this.kl = 0; 4 > a; a++) this.bd[a] = 0, this.zs[a] = 0, this.ys[a] = 255;
            this.gl = 0;
            this.i.Du = !1;
            this.i.Yo = !1;
            this.Fs = 0;
            this.oi = null;
            this.WC = !1;
            this.fx = this.Bs = this.As = this.XC = null;
            for (a = 0; a < k.Sp; a++) this.Ds[a] = 20;
            this.Rm = 0
        },
        dI: function() {
            this.h.sc.gH();
            if (null != this.h.Ea && this.h.Ig) return this.nl = this.h.nd, this.ri = 0, this.zb;
            if (null != this.h.Mg) return this.h.Mg.handle(), 0;
            this.Au || (this.GE(), this.Au = !0);
            var a = this.h.nd - this.nl,
                b = this.ri;
            this.ri = a;
            this.ap = a -= b;
            this.Tm += a;
            this.pc += 1;
            this.Ic = this.ap * this.A.iB / 1E3;
            this.Ds[this.Rm] = a;
            this.Rm++;
            this.Rm >= k.Sp && (this.Rm = 0);
            for (a = 0; 4 > a; a++) this.zs[a] = this.bd[a];
            this.$I();
            1 == this.h.Rh ? this.bd[0] |= this.h.Aa.cr() & this.ix : 2 == this.h.Rh && (this.bd[0] |= this.h.cr() & this.ix);
            if (0 != this.wf)
                for (this.lv(), this.gl = 0, this.h.Qc[l.Ve] && (this.gl |= 16), this.h.Qc[l.fk] && (this.gl |= 32), a = 0; a < this.kx; a++) 0 != (this.TQ & 1) && (b = this.bd[a] & 207, b |= this.gl, this.bd[a] = b);
            else this.lv();
            for (a = 0; 4 > a; a++)
                if (b = this.bd[a] & k.ZJ[4 * this.kx + a], b &= this.ys[a], this.bd[a] = b, b ^= this.zs[a], this.cx[a] = b, 0 != b)
                    if (b &= this.bd[a], 0 != (b & 240)) this.i.ZC = a, b = this.cx[a], 0 != (b & 240) && (this.i.Jc = b, this.i.Fe(-196615)), 0 != (b & 15) && (this.i.Jc = b, this.i.Fe(-196615));
                    else {
                        var c = this.i.lc[this.i.Re[-u.Ey] + 4];
                        0 != c && (this.i.Jc = b, this.i.Ye(c, null))
                    } if (0 != this.ob) {
                a = this.ob;
                b = 0;
                do {
                    for (this.ex = 0; null == this.G[b];) b++;
                    c = this.G[b];
                    c.RA = c.hr;
                    c.hr = null;
                    c.co && (this.YC = b, c.handle());
                    a += this.ex;
                    b++;
                    a--
                } while (0 != a)
            }
            this.ue++;
            this.i.rH();
            this.i.EI();
            this.i.$C && 0 == (this.Rc & k.ln) && this.i.Ye(0, null);
            this.i.DI();
            this.KH();
            this.doScroll();
            this.i.xs = -1;
            this.eg++;
            if (0 == this.zb) return this.lx;
            this.zb != k.Ht && this.zb != k.It && this.zb != k.Qp && this.zb != k.Rp && this.zb != k.OF && this.zb != k.qy || this.i.Fe(-65539);
            return this.zb
        },
        $I: function() {
            var a;
            for (a = 0; 4 > a; a++) this.bd[a] = 0;
            var b = this.h.kI();
            for (a = 0; 4 > a; a++) {
                var c;
                for (c = 0; c < l.mn; c++) this.h.Qc[b[a * l.mn + c]] && (this.bd[a] |= 1 << c)
            }
        },
        lv: function() {
            this.vj = this.h.Vf + this.ia - this.h.jg;
            this.wj = this.h.Wf + this.ka - this.h.kg
        },
        Yf: function(a) {
            a.B.U = !1;
            k.az = !1;
            a.B.ep = 0;
            var b, c;
            0 != (a.bf & Q.lq) && (b = this.Qw(a.b.Uw, a.b.Ww, a.b.Vw, a.b.Xw), 0 != b && (c = this.Qw(a.w - a.ma, a.v - a.na, a.w - a.ma + a.N, a.v - a.na + a.L), 0 == c && (b ^= c, 0 != b && (a.B.ep |= Ha.PE, this.i.Jc = b, this.i.wd(a, -720896 | a.Da & 65535)))), b = this.Qw(a.w - a.ma, a.v - a.na, a.w - a.ma + a.N, a.v - a.na + a.L), 0 != (b & a.B.mx) && (c = a.B.U, 0 != (b & k.sh) ? a.B.ta.dc(a.w + this.Ud) : 0 != (b & k.th) && a.B.ta.dc(a.w - this.Ud), 0 != (b & k.uh) ? a.B.ta.ec(a.v + this.Vd) : 0 != (b & k.rh) && a.B.ta.ec(a.v - this.Vd), a.b.Fc != U.$t && a.b.Fc != U.Di && (a.B.U = c)), b = this.$k(a.b.Uw, a.b.Ww, a.b.Vw, a.b.Xw), b != k.eE && (c = this.$k(a.w - a.ma, a.v - a.na, a.w - a.ma + a.N, a.v - a.na + a.L), b = ~b & c, 0 != b && (a.B.ep |= Ha.QE, this.i.Jc = b, this.i.wd(a, -786432 | a.Da & 65535))));
            0 != (a.bf & Q.kq) && (a.b.Fc == U.$t ? a.B.ta.FJ() : this.Cn(a, a.b.Ra, a.b.ib, a.b.Gb, a.b.Hb, a.w, a.v, 0, J.ze) && this.i.wd(a, -851968 | a.Da & 65535));
            if (0 != (a.bf & Q.un) && (b = this.sm(a, a.b.Ra, a.b.ib, a.b.Gb, a.b.Hb, a.w, a.v, a.wb.jj), null != b))
                for (c = 0; c < b.size(); c++) {
                    var d = b.get(c);
                    if (0 == (d.V & L.Be)) {
                        var e = a.Da,
                            f = a,
                            g = d;
                        f.Da > g.Da && (f = d, g = a, e = f.Da);
                        this.i.Jc = g.cf;
                        this.i.DK = g.Ub;
                        this.i.wd(f, -917504 | e & 65535)
                    }
                }
            return k.az
        },
        sm: function(a, b, c, d, e, f, g, h) {
            var q = null;
            f -= a.ma;
            var k = f + a.N;
            g -= a.na;
            var C = g + a.L,
                l, n;
            if (0 != (a.V & L.vh) || 0 != (a.V & L.Be)) return q;
            var m = !1,
                p = null,
                t = -1;
            a.Da == u.Kb && 0 == (a.D.T & A.Ei) && (m = !0);
            a.Da == u.Kb && (t = a.D.Wm);
            var w = a.V;
            a.V |= L.vh;
            var r = 0,
                v, E, B;
            if (null != h)
                for (r = 0; r < h.length; r += 2) {
                    v = h[r + 1];
                    if (0 > v) break;
                    for (var D = this.W[v].hb; 0 == (D & 2147483648);)
                        if (v = this.G[D], D = v.Tb, 0 == (v.V & L.vh) && 0 == (v.V & L.Be) && (E = v.w - v.ma, B = v.v - v.na, E < k && E + v.N > f && B < C && B + v.L > g)) switch (v.Da) {
                            case u.Kb:
                                (0 > t || 0 <= t && t == v.D.Wm) && 0 != (v.D.T & A.ck) && (0 == m || 0 != (v.D.T & A.Ei) ? (null == q && (q = new N), q.add(v)) : (null == p && (n = this.h.ca.Lb(b), null != n && (p = n.Qf(0, c, d, e))), n = this.h.ca.Lb(v.b.Ra), null != n && (l = n.Qf(0, v.b.ib, v.b.Gb, v.b.Hb)), null != p && null != l && p.Fj(f, g, 0, l, E, B, 0) && (null == q && (q = new N), q.add(v))));
                                break;
                            case u.Dh:
                            case u.rn:
                            case u.Cy:
                            case u.Gy:
                            case u.Ay:
                                null == q && (q = new N);
                                q.add(v);
                                break;
                            default:
                                null == q && (q = new N), q.add(v)
                        }
                } else
                    for (h = 0; h < this.ob; h++) {
                        for (; null == this.G[r];) r++;
                        v = this.G[r];
                        r++;
                        if (0 == (v.V & L.vh) && (E = v.w - v.ma, B = v.v - v.na, E < k && E + v.N > f && B < C && B + v.L > g)) switch (v.Da) {
                            case u.Kb:
                                (0 > t || 0 <= t && t == v.D.Wm) && 0 != (v.D.T & A.ck) && (0 == m || 0 != (v.D.T & A.Ei) ? (null == q && (q = new N), q.add(v)) : (null == p && (n = this.h.ca.Lb(b), null != n && (p = n.Qf(0, c, d, e))), n = this.h.ca.Lb(v.b.Ra), null != n && (l = n.Qf(0, v.b.ib, v.b.Gb, v.b.Hb)), null != p && null != l && p.Fj(f, g, 0, l, E, B, 0) && (null == q && (q = new N), q.add(v))));
                                break;
                            case u.Dh:
                            case u.rn:
                            case u.Cy:
                            case u.Gy:
                            case u.Ay:
                                null == q && (q = new N);
                                q.add(v);
                                break;
                            default:
                                null == q && (q = new N), q.add(v)
                        }
                    }
            a.V = w;
            return q
        },
        Cn: function(a, b, c, d, e, f, g, h, q) {
            b = this.A.Ya[a.fe];
            switch (a.Da) {
                case u.Kb:
                    if (0 == (a.D.T & A.Ei)) {
                        if (a = this.h.ca.Lb(a.b.Ra), null != a) return a = a.Qf(F.Tj, c, d, e), null != b.Fj(a, f - this.ia, g - this.ka, h, q)
                    } else return f = f - a.ma - this.ia, g = g - a.na - this.ka, c = f + a.N, a = g + a.L, h = null != b.Vs(f, g, c, a, h, q);
                    return !1;
                default:
                    return f = f - a.ma - this.ia, g = g - a.na - this.ka, c = f + a.N, a = g + a.L, h = null != b.Vs(f, g, c, a, h, q)
            }
        },
        $k: function(a, b, c, d) {
            var e = 0;
            0 > a && (e |= k.sh);
            0 > b && (e |= k.uh);
            c > this.Ud && (e |= k.th);
            d > this.Vd && (e |= k.rh);
            return k.Sy[e]
        },
        Qw: function(a, b, c, d) {
            var e = 15;
            a < this.Ud && (e &= ~k.th);
            b < this.Vd && (e &= ~k.rh);
            0 < c && (e &= ~k.sh);
            0 < d && (e &= ~k.uh);
            return k.Sy[e]
        },
        random: function(a) {
            var b = 31415 * this.dx + 1;
            this.dx = b &= 65535;
            return b * a >>> 16
        },
        OA: function(a) {
            if (0 == a || -1 == a) return this.random(32);
            var b, c = 0,
                d = 0,
                e = a;
            for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
            if (1 == d) return c;
            d = this.random(d);
            e = a;
            for (b = 0; 32 > b; b++) {
                if (0 != (e & 1) && (d--, 0 > d)) return b;
                e >>>= 1
            }
            return 0
        },
        Ee: function(a) {
            this.yj = a.ja;
            this.oc = 0;
            this.zg = !1;
            return this.getExpression()
        },
        Xa: function(a) {
            this.yj = a.ja;
            this.oc = 0;
            this.zg = !1;
            return this.getExpression()
        },
        xI: function(a) {
            this.yj = a.ja;
            this.oc = 0;
            this.zg = !1;
            return this.getExpression()
        },
        bo: function(a) {
            this.yj = a.ja;
            this.oc = 0;
            this.zg = !1;
            return this.getExpression()
        },
        ov: function() {
            this.zg = !1;
            var a = this.getExpression();
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        },
        getExpression: function() {
            var a, b = this.$;
            this.Sm[this.$] = this.Es;
            do {
                this.$++;
                this.zn = !0;
                this.yj[this.oc].evaluate(this);
                this.zn = !1;
                this.oc++;
                do
                    if (a = this.yj[this.oc], 0 < a.code && 1310720 > a.code) a.code > this.Sm[this.$ - 1].code ? (this.Sm[this.$] = a, this.oc++, this.$++, this.zn = !0, this.yj[this.oc].evaluate(this), this.zn = !1, this.oc++) : (this.$--, this.Sm[this.$].evaluate(this));
                    else {
                        this.$--;
                        if (this.$ == b) break;
                        this.Sm[this.$].evaluate(this)
                    } while (1)
            } while (this.$ > b + 1);
            return this.pa[b + 1]
        },
        FA: function(a, b) {
            var c = this.i.De(a);
            if (null == c) return b ? !0 : !1;
            var d = this.i.vc,
                e = 0,
                f, g, h, q, k, C, l = new N;
            for (f = 0; f < this.ob; f++) {
                for (; null == this.G[e];) e++;
                g = this.G[e];
                e++;
                h = g.w - g.ma;
                q = g.v - g.na;
                k = h + g.N;
                C = q + g.L;
                this.vj >= h && this.vj < k && this.wj >= q && this.wj < C && 0 == (g.V & L.Be) && (g.Da == u.Kb ? 0 == (g.D.T & A.Ei) ? this.h.ca.Lb(g.b.Ra).Qf(F.Tj, 0, 1, 1).GD(this.vj - g.w, this.wj - g.v, g.b.ib, g.b.Gb, g.b.Hb) && l.add(g) : l.add(g) : l.add(g))
            }
            if (0 == l.size()) return b ? !0 : !1;
            if (0 == b) {
                do {
                    for (e = 0; e < l.size() && (g = l.get(e), g != c); e++);
                    e == l.size() && (d--, this.i.hc());
                    c = this.i.Jd()
                } while (null != c);
                return 0 != d
            }
            do {
                for (e = 0; e < l.size(); e++)
                    if (g = l.get(e), g == c) return !1;
                c = this.i.Jd()
            } while (null != c);
            return !0
        },
        WA: function(a) {
            var b = !1,
                c = 0;
            if (0 != (a.ra & D.$j)) {
                if (null != a.D && a.D.JI()) return;
                null != a.aa && a.aa.Fh(r.Mj) && (c = 1)
            }
            0 == c && (b = !0);
            b ? (a.co = !1, this.xg(a.Ub)) : (null != a.D && (a.D.Ns(!1), a.V |= L.vh), null != a.B && (a.B.Cb(!1), a.B.NI(a, U.YF, !1), a.b.da = 0), 0 != (c & 1) && (a.aa.zq(r.Mj), a.aa.ru()))
        },
        Zu: function() {
            var a, b = new aa,
                c;
            for (c = 0; c < this.A.xc; c++) {
                var d = this.A.Ya[c],
                    e = 0 != (d.Ja & W.zt),
                    f = 0 != (d.Ja & W.At),
                    g = d.Pr,
                    h;
                for (h = 0; h < g; h++) {
                    a = this.A.Dd.DA(d.Rr + h);
                    a.vr < u.Kb && (b.left = a.Lv, b.top = a.Mv);
                    var q;
                    q = new ia(this.h, b.left, b.top, a, null, 0);
                    q.rd(0, d);
                    e ? (q = new ia(this.h, this.A.Nd + b.left, b.top, a, null, 0), q.rd(1, d), b.left + q.width > this.A.Nd && (q = new ia(this.h, b.left - this.A.Nd, b.top, a, null, 0), q.rd(4, d)), f && (q = new ia(this.h, b.left, this.A.Xc + b.top, a, null, 0), q.rd(2, d), q = new ia(this.h, this.A.Nd + b.left, this.A.Xc + b.top, a, null, 0), q.rd(3, d), b.top + q.height > this.A.Xc && (q = new ia(this.h, b.left, b.top - this.A.Xc, a, null, 0), q.rd(5, d)))) : f && (q = new ia(this.h, b.left, this.A.Xc + b.top, a, null, 0), q.rd(2, d), b.top + q.height > this.A.Xc && (q = new ia(this.h, b.left, b.top - this.A.Xc, a, null, 0), q.rd(5, d)))
                }
            }
        },
        NK: function() {
            for (var a, b = this.il, c = this.jl,
                    d, e, f = 0; f < this.A.xc; f++) {
                a = this.A.Ya[f];
                d = b;
                e = c;
                0 != (a.Ja & (W.Bt | W.Ct)) && (0 != (a.Ja & W.Bt) && (d *= a.Ij), 0 != (a.Ja & W.Ct) && (e *= a.Kj));
                d += a.ts;
                e += a.us;
                d += a.rk;
                e += a.tk;
                var g = 0 != (a.Ja & W.At);
                0 != (a.Ja & W.zt) && (d %= this.A.Nd, 0 > d && (d += this.A.Nd));
                g && (e %= this.A.Xc, 0 > e && (e += this.A.Xc));
                a.x = d;
                a.y = e;
                a.ts += a.rk;
                a.us += a.tk;
                a.nc.x = -d + this.h.jg;
                a.nc.y = -e + this.h.kg;
                a.Nb.x = -d + this.h.jg;
                a.Nb.y = -e + this.h.kg;
                a.Pa.x = -d + this.h.jg;
                a.Pa.y = -e + this.h.kg
            }
            this.A.Zi = b;
            this.A.$i = c
        },
        GI: function() {
            var a;
            for (a = 0; a < this.A.xc; a++) {
                var b = this.A.Ya[a];
                b.Ja & W.Kp && b.gr()
            }
        },
        PK: function(a, b, c, d) {
            a -= Math.floor(this.Hm / 2);
            b -= Math.floor(this.Im / 2); - 1 != c && c < this.A.xc && (c = this.A.Ya[c], 1 < c.Ij && (a -= this.ia, a /= c.Ij, a = p.Ld(this.ia + a)), 1 < c.Kj && (b -= this.ka, b /= c.Kj, b = p.Ld(this.ka + b)));
            0 > a && (a = 0);
            0 > b && (b = 0);
            c = a + this.Hm;
            var e = b + this.Im;
            c > this.Ud && (c = this.Ud - this.Hm, 0 > c && (c = 0), a = c);
            e > this.Vd && (e = this.Vd - this.Im, 0 > e && (e = 0), b = e);
            0 != (d & 1) && a != this.ia && (this.il = a, this.kl |= k.du);
            0 != (d & 2) && b != this.ka && (this.jl = b, this.kl |= k.du)
        },
        pL: function(a, b) {
            var c = !1;
            this.Hs = a - this.ia;
            this.Is = b - this.ka;
            if (0 != this.Hs || 0 != this.Is) c = !0;
            var d;
            if (!c)
                for (var e = 0; e < this.A.xc; e++)
                    if (d = this.A.Ya[e], 0 != d.rk || 0 != d.tk) {
                        c = !0;
                        break
                    } var e = this.ia,
                f = this.ka,
                g = this.Hs,
                h = this.Is;
            this.ia = a;
            this.Lm = a - k.fn;
            0 > this.Lm && (this.Lm = this.Mm);
            this.ka = b;
            this.Pm = b - k.gn;
            0 > this.Pm && (this.Pm = this.Qm);
            this.Jm = a + this.Hm + k.fn;
            this.Jm > this.Ud && (this.Jm = this.Km);
            this.Nm = b + this.Im + k.gn;
            this.Nm > this.Vd && (this.Nm = this.Om);
            if (c)
                for (var q = c = 0; q < this.ob; q++) {
                    for (; null == this.G[c];) c++;
                    var l = this.G[c];
                    c++;
                    if (0 != (l.ra & D.kG)) null == l.B ? (l.w += g, l.v += h) : (l.B.ta.dc(l.w + g), l.B.ta.ec(l.v + h));
                    else if (d = l.fe, d < this.A.xc) {
                        var C = e,
                            n = f,
                            p = a,
                            m = b;
                        d = this.A.Ya[d];
                        0 != (d.Ja & W.Bt) && (C *= d.Ij, p *= d.Ij);
                        0 != (d.Ja & W.Ct) && (n *= d.Kj, m *= d.Kj);
                        C = l.w + C - p + g - d.rk;
                        d = l.v + n - m + h - d.tk;
                        0 == (l.ra & D.Gf) ? (l.w = C, l.v = d) : (l.B.ta.dc(C), l.B.ta.ec(d));
                        l.$l()
                    }
                }
        },
        doScroll: function() {
            if (0 != (this.kl & k.du)) {
                this.kl = 0;
                var a = this.A.Zi != this.il || this.A.$i != this.jl;
                if (!a)
                    for (var b = 0; b < this.A.xc; b++)
                        if (0 != this.A.Ya[b].rk || 0 != this.A.Ya[b].tk) {
                            a = !0;
                            break
                        } if (a)
                    for (this.NK(), this.pL(this.A.Zi, this.A.$i), b = 0; b < this.A.xc; b++) this.A.Ya[b].rk = 0, this.A.Ya[b].tk = 0;
                this.il = this.ia;
                this.jl = this.ka
            }
        },
        uq: function(a, b, c, d, e, f) {
            d = this.A.Ya[d];
            var g = new ia(this.h, b - this.ia + d.x, c - this.ia + d.y, null, a, e);
            g.rd(0, d);
            !f || e != ca.hq && e != ca.qg || null == this.oi || (g.body = this.oi.ZQ(pHo.w - this.ia + d.x, pHo.v - this.ka + d.y, pHo.b.Ra, e));
            f = 0 != (d.Ja & W.At);
            0 != (d.Ja & W.zt) ? (g = new ia(this.h, this.A.Nd + b - this.ia + d.x, c - this.ka + d.y, null, a, e), g.rd(1, d), b + g.width > this.A.Nd && (g = new ia(this.h, b - this.ia + d.x - this.A.Nd, c - this.ka + d.y, null, a, e), g.rd(4, d)), f && (g = new ia(this.h, b - this.ia + d.x, this.A.Xc + c - this.ka + d.y, null, a, e), g.rd(2, d), g = new ia(this.h, this.A.Nd + b - this.ia + d.x, this.A.Xc + c - this.ka + d.y, null, a, e), g.rd(3, d), c + g.height > this.A.Xc && (g = new ia(this.h, b - this.ia + d.x, c - this.ka + d.y - this.A.Xc, null, a, e), g.rd(5, d)))) : f && (g = new ia(this.h, b - this.ia + d.x, this.A.Xc + c - this.ka + d.y, null, a, e), g.rd(2, d), c + g.height > this.A.Xc && (g = new ia(this.h, b - this.ia + d.x, c - this.ka + d.y - this.A.Xc, null, a, e), g.rd(5, d)))
        },
        OJ: function(a) {
            0 > a ? this.i.Fe(-720902) : this.i.Fe(-655366)
        },
        oA: function(a) {
            var b, c;
            if (0 != this.ob)
                for (b = 0; b < this.dh; b++)
                    if ((c = this.G[b]) && c.wb.lj == a) return this.ev = c.wb.Vg - 1, c;
            return null
        },
        pA: function(a) {
            if (a && this.ev) {
                var b = a.Ub + 1;
                a = a.wb.lj;
                for (var c;;) {
                    c = this.G[b];
                    if (null != c && c.wb.lj == a) return this.ev--, c;
                    b++
                }
            }
            this.ev = 0;
            return null
        }
    };
    ed.en = 2;
    Q.OO = 15;
    Q.oG = 16;
    Q.un = 128;
    Q.Xd = 256;
    Q.kq = 512;
    Q.lq = 1024;
    Q.PO = 2048;
    Q.mq = 4096;
    Q.nG = 65535;
    Q.prototype = {
        tH: function(a) {
            this.Zc = a.Ho;
            this.hd = a.Me;
            var b = a.yc;
            this.Tk = b.fj;
            this.oC = a.nw;
            this.nC = a.ow;
            this.Xr = b.Rg;
            this.Fb = 0;
            this.hb = -1;
            this.Rd = Q.nG;
            null != a.pw && (this.lj = a.pw);
            this.wm = Array(8);
            for (a = 0; 8 > a; a++) this.wm[a] = b.kw[a];
            this.mf = null
        }
    };
    ea.WF = 0;
    ea.VN = 1;
    ea.YN = 2;
    ea.WN = 3;
    ea.SN = 4;
    ea.TN = 5;
    ea.UN = 6;
    ea.RN = 7;
    ea.XN = 8;
    ea.ZN = 9;
    ea.ON = 0;
    ea.MN = 1;
    ea.QN = 2;
    ea.NN = 3;
    ea.PN = 4;
    ea.aE = 123456789;
    ea.prototype = {
        CF: function() {
            m_currentAngle = 0
        },
        Z: function(a) {
            this.K = a;
            this.ea = this.K.c
        },
        Cb: function() {},
        move: function() {
            return !1
        },
        setPosition: function() {},
        dc: function() {},
        ec: function() {},
        stop: function() {},
        ug: function() {},
        reverse: function() {},
        start: function() {},
        yf: function() {},
        hh: function() {},
        xf: function() {},
        Rs: function() {},
        Ps: function() {},
        Uu: function(a) {
            return this.K.B.Uu(this.K, a, 32)
        },
        xn: function(a) {
            this.K.b.te = a;
            null != this.K.aa && this.K.aa.We()
        },
        cr: function(a) {
            return this.K.c.bd[a]
        },
        nx: function() {}
    };
    r.ke = 0;
    r.Mc = 1;
    r.ye = 2;
    r.yp = 3;
    r.Mj = 4;
    r.bE = 5;
    r.Kx = 6;
    r.Jx = 7;
    r.Ix = 8;
    r.Hx = 9;
    r.jt = 10;
    r.zp = 11;
    r.NL = 12;
    r.hL = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    r.prototype = {
        load: function(a) {
            var b = a.S,
                c = Array(32),
                d;
            for (d = 0; 32 > d; d++) c[d] = a.o();
            this.Yd = Array(32);
            this.Eh = Array(32);
            this.Ji = Array(32);
            for (d = 0; 32 > d; d++) this.Yd[d] = null, this.Eh[d] = 0, this.Ji[d] = 0, 0 != c[d] && (this.Yd[d] = new fd, a.seek(b + c[d]), this.Yd[d].load(a))
        },
        fc: function(a) {
            var b;
            for (b = 0; 32 > b; b++) null != this.Yd[b] && this.Yd[b].fc(a)
        },
        $G: function(a) {
            var b, c, d, e, f;
            for (b = 0; 32 > b; b++)
                if (null == this.Yd[b]) {
                    c = 0;
                    for (e = b + 1; 32 > c; c++, e++)
                        if (e &= 31, null != this.Yd[e]) {
                            this.Eh[b] = e;
                            break
                        } d = 0;
                    for (f = b - 1; 32 > d; d++, f--)
                        if (f &= 31, null != this.Yd[f]) {
                            this.Ji[b] = f;
                            break
                        } e == f || c < d ? this.Eh[b] |= 64 : d < c && (this.Ji[b] |= 64)
                } else 16 > a && 0 == r.hL[a] && (this.Yd[b].mu = this.Yd[b].lu)
        }
    };
    Pa.FD = [r.yp, r.Mc, r.ye, 0, r.ye, r.ke, 0, 0, r.Mc, r.ke, 0, 0, r.ke, r.Mc, r.ye, 0, r.ke, 0, 0, 0, r.ke, r.Mc, r.ye, 0, r.ke, r.Mc, r.ye, 0, r.Mc, r.ye, r.ke, 0, r.ke, r.Mc, r.ye, 0, r.Mc, r.ye, r.ke, 0, r.ke, r.Mc, r.ye, 0, r.ke, r.Mc, r.ye, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    Pa.prototype = {
        load: function(a) {
            var b = a.S;
            a.va(2);
            this.Hf = a.o();
            var c = Array(this.Hf),
                d;
            for (d = 0; d < this.Hf; d++) c[d] = a.o();
            this.If = Array(this.Hf);
            this.Ii = Array(this.Hf);
            for (d = 0; d < this.Hf; d++) this.If[d] = null, this.Ii[d] = 0, 0 != c[d] && (this.If[d] = new r, a.seek(b + c[d]), this.If[d].load(a), this.Ii[d] = 1);
            for (a = 0; a < this.Hf; a++)
                if (0 == this.Ii[a]) {
                    b = !1;
                    if (12 > a)
                        for (d = 0; 4 > d; d++)
                            if (0 != this.Ii[Pa.FD[4 * a + d]]) {
                                this.If[a] = this.If[Pa.FD[4 * a + d]];
                                b = !0;
                                break
                            } if (0 == b)
                        for (d = 0; d < this.Hf; d++)
                            if (0 != this.Ii[d]) {
                                this.If[a] = this.If[d];
                                break
                            }
                } else this.If[a].$G(a)
        },
        fc: function(a) {
            var b;
            for (b = 0; b < this.Hf; b++) 0 != this.Ii[b] && this.If[b].fc(a)
        }
    };
    fd.prototype = {
        load: function(a) {
            this.mu = a.ub();
            this.lu = a.ub();
            this.Uy = a.o();
            this.Vy = a.o();
            this.Nl = a.o();
            this.gk = Array(this.Nl);
            var b;
            for (b = 0; b < this.Nl; b++) this.gk[b] = a.o()
        },
        fc: function(a) {
            var b;
            for (b = 0; b < this.Nl; b++)
                if (null != a) {
                    var c = a.yg(this.gk[b]); - 1 != c && (this.gk[b] = c)
                }
        }
    };
    La.qu = [r.ke, r.Mc, r.ye, r.bE, r.Kx, r.Jx, r.Ix, r.Hx, r.jt, r.zp, 12, 13, 14, 15, -1];
    La.prototype = {
        Z: function(a) {
            this.a = a;
            this.Cm = 0;
            this.VA(r.Mc);
            if (this.Fh(r.yp)) this.Cm = 1, this.zq(r.yp), this.ru(), this.xn();
            else {
                for (a = 0; 0 <= La.qu[a] && !this.Fh(La.qu[a]); a++);
                0 > La.qu[a] && this.Fh(r.Mj) && (this.Cm = 2, this.zq(r.Mj), this.ru(), this.xn())
            }
        },
        VA: function(a) {
            this.a.b.te = a;
            this.Uo = !1;
            this.qf = this.So = this.al = this.cl = this.ps = this.Zg = 0;
            this.qs = this.pj = this.ii = -1;
            this.To = this.se = null;
            this.xn()
        },
        We: function() {
            switch (this.Cm) {
                case 0:
                    return this.xn();
                case 1:
                    this.XG();
                    break;
                case 2:
                    this.YG()
            }
            return !1
        },
        xn: function() {
            var a = this.a.w;
            this.a.b.qj = a;
            a -= this.a.ma;
            this.a.b.Uw = a;
            a += this.a.N;
            this.a.b.Vw = a;
            a = this.a.v;
            this.a.b.rj = a;
            a -= this.a.na;
            this.a.b.Ww = a;
            a += this.a.L;
            this.a.b.Xw = a;
            this.a.b.ss = this.a.b.Ra;
            this.a.b.rs = this.a.b.ib;
            return this.hk(1)
        },
        hk: function(a) {
            var b = this.a.P,
                c = this.a.b.da,
                d = this.a.b.te;
            0 != this.cl && (c = this.cl - 1);
            d == r.Mc && (0 == c && (d = r.ke), 75 <= c && (d = r.ye));
            0 != this.Zg && (d = this.Zg - 1);
            d != this.ii && (this.ii = d, d >= b.dj.Hf && (d = b.dj.Hf - 1), b = b.dj.If[d], b != this.se && (this.se = b, this.os = -1, this.qf = 0, 0 == (this.a.ra & D.jG) && (this.So = 0)));
            var e, f = this.a.b.Za % 32,
                b = !1;
            0 != this.ps && (f = this.ps - 1);
            if (this.os != f && (this.os = f, e = this.se.Yd[f], null == e ? 0 != (this.se.Ji[f] & 64) ? f = this.se.Ji[f] & 63 : 0 != (this.se.Eh[f] & 64) ? f = this.se.Eh[f] & 63 : (e = f, 0 > this.qs ? f = this.se.Eh[f] & 63 : (f -= this.qs, f = 15 < (f & 31) ? this.se.Eh[e] & 63 : this.se.Ji[e] & 63)) : this.qs = f, e = this.se.Yd[f], null != this.se.Yd[0] && 0 != (this.a.P.fj & D.gG) && (this.a.b.ib = 360 * this.os / 32, e = this.se.Yd[0], this.To = null, b = !0), this.To != e)) {
                this.To = e;
                this.bl = e.Uy;
                this.JC = e.Vy;
                var f = e.mu,
                    g = e.lu;
                if (f != this.pj || g != this.Bm) this.pj = f, this.Bm = g, this.IC = g - f, this.Am = f, this.Sw = -1;
                this.Sd = e.Nl;
                0 != this.al && this.al - 1 >= this.Sd && (this.al = 0);
                this.qf >= this.Sd && (this.qf = 0);
                e = e.gk[this.qf];
                0 == this.Uo && (this.a.b.Ra = e, e = this.a.c.h.ca.Bk(e, this.a.b.ib, this.a.b.Gb, this.a.b.Hb), null != e && (this.a.N = e.width, this.a.L = e.height, this.a.ma = e.Ga, this.a.na = e.Ca, this.a.vv = e.ph, this.a.wv = e.qh), this.a.b.O = !0, this.a.b.Qa = !0);
                if (1 == this.Sd) {
                    0 == this.pj && (this.Sd = 0);
                    e = this.a.b.Ra;
                    if (0 == e) return !1;
                    e = this.a.c.h.ca.Bk(e, this.a.b.ib, this.a.b.Gb, this.a.b.Hb);
                    null != e && (this.a.N = e.width, this.a.L = e.height, this.a.ma = e.Ga, this.a.na = e.Ca, this.a.vv = e.ph, this.a.wv = e.qh);
                    return !1
                }
            }
            if (0 == a && 0 == this.al || 0 == b && 0 == this.Sd && d != r.Mj) return !1;
            a = this.IC;
            c != this.Sw && (this.Sw = c, 0 == a ? (this.Am = this.pj, 0 != this.cl && (this.Am = this.cl - 1)) : (d = this.a.b.jb - this.a.b.ki, 0 == d ? 0 != this.cl ? (a = a * c / 100 + this.pj, a > this.Bm && (a = this.Bm)) : (a /= 2, a += this.pj) : (a = a * c / d + this.pj, a > this.Bm && (a = this.Bm)), this.Am = a));
            e = this.To;
            a = this.al;
            if (0 == a) {
                if (0 == this.Am || this.Uo) return !1;
                c = this.So;
                a = this.qf;
                d = this.Am;
                0 != (this.a.c.A.Vb & J.Vc) && (d = Math.round(d * this.a.c.Ic));
                for (c += d; 100 < c;)
                    if (c -= 100, a++, a >= this.Sd && (a = this.JC, 0 != this.bl && (this.bl--, 0 == this.bl))) {
                        this.qf = this.Sd - 1;
                        0 > this.qf && (this.qf = 0);
                        this.Sd = 0;
                        0 != this.Zg && (this.cl = this.ps = this.Zg = 0);
                        this.qf < e.Nl && (e = e.gk[this.qf], e != this.a.b.Ra && (this.a.b.Ra = e, this.a.b.O = !0, this.a.b.Qa = !0));
                        this.So = c;
                        if (0 != (this.a.c.Rc & k.Dt)) return !1;
                        b && (this.a.b.O = !0, this.a.b.Qa = !0, e = this.a.c.h.ca.Bk(this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb), null != e && (this.a.N = e.width, this.a.L = e.height, this.a.ma = e.Ga, this.a.na = e.Ca, this.a.vv = e.ph, this.a.wv = e.qh));
                        b = -131072;
                        b |= this.a.Da & 65535;
                        this.a.c.i.Jc = this.a.aa.ii;
                        return this.a.c.i.wd(this.a, b)
                    } this.So = c
            } else a--;
            this.qf = a;
            this.a.b.O = !0;
            this.a.b.Qa = !0;
            e = e.gk[a];
            if (this.a.b.Ra != e || this.KC != this.a.b.ib) this.a.b.Ra = e, this.KC = this.a.b.ib, 0 <= e && (e = this.a.c.h.ca.Bk(e, this.a.b.ib, this.a.b.Gb, this.a.b.Hb), null != e && (this.a.N = e.width, this.a.L = e.height, this.a.ma = e.Ga, this.a.na = e.Ca, this.a.vv = e.ph, this.a.wv = e.qh));
            return !1
        },
        Fh: function(a) {
            return 0 == this.a.P.dj.Ii[a] ? !1 : !0
        },
        ru: function() {
            0 == this.bl && (this.bl = 1)
        },
        zq: function(a) {
            this.Zg = a + 1;
            this.hk(0)
        },
        ZG: function() {
            this.Zg = 0;
            this.hk(0)
        },
        WG: function(a) {
            a >= this.Sd && (a = this.Sd - 1);
            0 > a && (a = 0);
            this.al = a + 1;
            this.hk(0)
        },
        XG: function() {
            this.hk(1);
            this.Zg != r.yp + 1 && (this.Fh(r.ke) || this.Fh(r.Mc) || this.Fh(r.ye) ? (this.Cm = 0, this.ZG()) : (this.Cm = 2, this.a.c.WA(this.a)))
        },
        YG: function() {
            0 == (this.a.V & L.zi) && (this.hk(1), this.Zg != r.Mj + 1 && this.a.c.xg(this.a.Ub))
        }
    };
    gd.prototype = {
        Vu: function() {
            var a = this.app.tj + "M" + p.Rn(this.handle, "png"),
                b = new Image;
            this.ca.Mb[this.handle] = b;
            var c = this;
            b.onload = function() {
                c.app.Ri(c)
            };
            b.onerror = function() {
                c.app.Ri(c)
            };
            b.src = a
        }
    };
    hd.prototype = {
        fi: function(a) {
            this.file = a;
            this.Db = this.file.o();
            this.Sk = Array(this.Db);
            a = this.file.o();
            var b, c, d = new Z;
            for (b = 0; b < a; b++) c = this.file.S, d.im(this.file), this.Sk[d.handle] = c;
            this.Sa = Array(this.Db);
            for (b = 0; b < this.Db; b++) this.Sa[b] = 0;
            this.za = null;
            this.Vh = this.Db;
            this.hf = 0;
            this.images = null
        },
        Lb: function(a) {
            return 0 <= a && a < this.Vh && -1 != this.za[a] ? this.images[this.za[a]] : null
        },
        kp: function() {
            var a;
            for (a = 0; a < this.Db; a++) this.Sk[a] && (this.Sa[a] = 1)
        },
        tf: function() {
            if (0 == (this.app.Ja & l.wi) && 0 == (this.app.Ja & l.it)) {
                var a;
                for (a = 0; a < this.Db; a++) this.Sa[a] = 0
            }
            this.di = null
        },
        Cj: function(a) {
            this.Sa[a]++
        },
        yg: function(a) {
            this.Cj(a);
            return -1
        },
        hB: function(a) {
            null == this.Mb[a] && (null != this.di && a < this.di.length && null != this.di[a] ? this.Mb[a] = this.di[a] : (this.Mb[a] = new gd(this, a), this.app.wn(this.Mb[a])))
        },
        load: function(a) {
            var b;
            if (0 < this.app.he)
                if (null == this.Mb) {
                    if (this.Mb = Array(this.app.he), this.app.Ja & l.wi)
                        for (b = 0; b < this.app.he; b++) this.app.Mb[b] && this.hB(b)
                } else if (0 == (this.app.Ja & l.wi)) {
                this.di = Array(this.app.he);
                for (b = 0; b < this.app.he; b++) this.di[b] = this.Mb[b];
                this.Mb = Array(this.app.he);
                for (b = 0; b < this.app.he; b++) this.Mb[b] = null
            }
            for (b = this.hf = 0; b < this.Db; b++) 0 != this.Sa[b] && this.hf++;
            b = Array(this.hf);
            var c = 0,
                d;
            for (d = 0; d < this.Db; d++)
                if (0 != this.Sa[d]) {
                    if (null != this.images && -1 != this.za[d] && null != this.images[this.za[d]]) {
                        if (b[c] = this.images[this.za[d]], b[c].Sa = this.Sa[d], null != this.Mb && null != this.di) {
                            var e = b[c].sb;
                            0 < e && (this.Mb[e] = this.di[e])
                        }
                    } else 0 != this.Sk[d] && (b[c] = new Z, a.seek(this.Sk[d]), b[c].load(this.app), b[c].Sa = this.Sa[d]);
                    c++
                } this.images = b;
            this.za = Array(this.Db);
            for (b = 0; b < this.Db; b++) this.za[b] = -1;
            for (b = 0; b < this.hf; b++) this.images[b] && (this.za[this.images[b].handle] = b);
            this.Vh = this.Db
        },
        fB: function(a) {
            var b;
            for (b = 0; b < a.length; b++)
                if (0 <= a[b] && a[b] < this.Vh && 0 != this.Sk[a[b]] && null == this.Lb(a[b])) {
                    var c, d = -1;
                    for (c = 0; c < this.hf; c++)
                        if (null == this.images[c]) {
                            d = c;
                            break
                        } if (-1 == d) {
                        var e = Array(this.hf + 10);
                        for (c = 0; c < this.hf; c++) e[c] = this.images[c];
                        for (; c < this.hf + 10; c++) e[c] = null;
                        d = this.hf;
                        this.hf += 10;
                        this.images = e
                    }
                    this.za[a[b]] = d;
                    this.images[d] = new Z;
                    this.images[d].Sa = 1;
                    this.file.seek(this.Sk[a[b]]);
                    this.images[d].load(this.app)
                }
        },
        Bk: function(a, b, c, d) {
            var e;
            null == this.ei && (this.ei = new Z);
            e = this.Lb(a);
            if (null != e) {
                a = e.width;
                var f = e.height,
                    g = e.Ga,
                    h = e.Ca,
                    q = e.ph;
                e = e.qh;
                0 == b ? (1 != c && (g *= c, q *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d)) : (1 != c && (g *= c, q *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d), null == this.ji && (this.ji = new aa), null == this.Fk && (this.Fk = new G), null == this.ik && (this.ik = new G), this.Fk.x = g, this.Fk.y = h, this.ik.x = q, this.ik.y = e, this.ji.left = this.ji.top = 0, this.ji.right = a, this.ji.bottom = f, this.OH(this.ji, this.Fk, this.ik, b), a = this.ji.right, f = this.ji.bottom, g = this.Fk.x, h = this.Fk.y, q = this.ik.x, e = this.ik.y);
                this.ei.width = a;
                this.ei.height = f;
                this.ei.Ga = g;
                this.ei.Ca = h;
                this.ei.ph = q;
                this.ei.qh = e;
                return this.ei
            }
            return e
        },
        OH: function(a, b, c, d) {
            var e, f, g;
            90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
            var h, q, l, k, n;
            null == b ? h = q = n = f = 0 : (l = -b.x * d, k = -b.x * g, n = -b.y * d, f = -b.y * g, h = l + f, q = n - k);
            e = null == b ? a.right : a.right - b.x;
            l = e * d;
            k = e * g;
            e = l + f;
            n -= k;
            var p;
            f = null == b ? a.bottom : a.bottom - b.y;
            p = l + f * g;
            f = f * d - k;
            var m, u;
            m = h + p - e;
            u = q + f - n;
            l = Math.min(h, Math.min(e, Math.min(p, m)));
            k = Math.min(q, Math.min(n, Math.min(f, u)));
            h = Math.max(h, Math.max(e, Math.max(p, m)));
            q = Math.max(q, Math.max(n, Math.max(f, u)));
            null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - l, c.y = f * d - e * g - k);
            null != b && (b.x = -l, b.y = -k);
            a.right = h - l;
            a.bottom = q - k
        }
    };
    Z.CJ = 10;
    Z.Op = 1;
    Z.wg = function(a, b) {
        var c = new Z;
        c.app = a;
        c.rb = new Image;
        c.rb.onload = function() {
            c.app.Nh++;
            c.width = c.rb.width;
            c.height = c.rb.height
        };
        a.Oh++;
        a.Ig = !0;
        c.rb.src = a.tj + b;
        return c
    };
    Z.prototype = {
        im: function(a) {
            this.handle = a.o();
            a.va(12)
        },
        Vu: function() {
            this.rb = new Image;
            var a = this;
            this.rb.onload = function() {
                a.app.Ri(a)
            };
            this.rb.onerror = function() {
                a.app.Ri(a)
            };
            this.rb.src = this.app.tj + p.Rn(this.handle, "png")
        },
        load: function(a) {
            this.app = a;
            this.handle = a.file.o();
            this.width = a.file.o();
            this.height = a.file.o();
            this.Ga = a.file.X();
            this.Ca = a.file.X();
            this.ph = a.file.X();
            this.qh = a.file.X();
            this.sb = 0;
            this.rb = null;
            null != this.app.frame.qo ? (this.sb = this.app.frame.qo[this.handle], 0 != this.sb ? (this.app.ca.hB(this.sb), this.yd = this.app.frame.yd[this.handle], this.zd = this.app.frame.zd[this.handle]) : this.app.wn(this)) : this.app.wn(this)
        },
        createElement: function() {
            var a = document.createElement("div");
            a.style.width = this.width + "px";
            a.style.height = this.height + "px";
            a.style.backgroundRepeat = "no-repeat";
            0 == this.sb ? a.style.backgroundImage = "url('" + this.rb.src + "')" : (a.style.backgroundPosition = "-" + this.yd + "px -" + this.zd + "px", a.style.backgroundImage = "url('" + this.app.tj + "M" + p.Rn(this.sb, "png") + "')");
            return a
        },
        Qf: function(a, b, c, d) {
            if (0 == (a & F.Uj)) {
                null == this.ef && (this.ef = new F, this.ho & Z.Op ? this.ef.Pu(this.app, this, a) : this.ef.Ou(this.app, this, a));
                if (0 == b && 1 == c && 1 == d) return this.ef;
                null == this.Th && (this.Th = new N);
                var e, f = 2147483647,
                    g = -1;
                for (e = 0; e < this.Th.size(); e++) {
                    a = this.Th.get(e);
                    if (b == a.angle && c == a.qc && d == a.rc) return a.R;
                    a.yx < f && (f = a.yx, g = e)
                }
                this.Th.size() < this.CJ && (g = -1);
                a = new Ve;
                a.R = new F;
                a.R.yH(this.ef, b, c, d);
                a.angle = b;
                a.qc = c;
                a.rc = d;
                a.yx = this.app.nd;
                0 > g ? this.Th.add(a) : this.Th.set(g, a);
                return a.R
            }
            null == this.Nk && (null == this.ef && (this.ef = new F, this.ho & Z.Op ? this.ef.Pu(this.app, this, 0) : this.ef.Ou(this.app, this, 0)), this.Nk = new F, this.ho & Z.Op ? this.Nk.Pu(this.app, this, a) : this.Nk.Ou(this.app, this, a));
            return this.Nk
        }
    };
    id.prototype = {
        fi: function(a) {
            var b = a.s(),
                c;
            this.ge = 0;
            var d = a.S,
                e = new za;
            for (c = 0; c < b; c++) e.im(a), this.ge = Math.max(this.ge, e.handle + 1);
            a.seek(d);
            this.Vr = Array(this.ge);
            for (c = 0; c < b; c++) d = a.S, e.im(a), this.Vr[e.handle] = d;
            this.Sa = Array(this.ge);
            for (c = 0; c < this.ge; c++) this.Sa[c] = 0;
            this.za = null;
            this.Kg = this.ge;
            this.Uh = 0;
            this.fonts = null
        },
        load: function(a) {
            var b;
            for (b = this.Uh = 0; b < this.ge; b++) 0 != this.Sa[b] && this.Uh++;
            b = Array(this.Uh);
            var c = 0,
                d;
            for (d = 0; d < this.ge; d++) 0 != this.Sa[d] && (null != this.fonts && -1 != this.za[d] && null != this.fonts[this.za[d]] ? b[c] = this.fonts[this.za[d]] : (b[c] = new za, a.seek(this.Vr[d]), b[c].load(a)), b[c].Sa = this.Sa[d], c++);
            this.fonts = b;
            this.za = Array(this.ge);
            for (b = 0; b < this.ge; b++) this.za[b] = -1;
            for (b = 0; b < this.Uh; b++) this.za[this.fonts[b].handle] = b;
            this.Kg = this.ge
        },
        Pf: function(a) {
            return -1 == a ? this.Bo : 0 <= a && a < this.Kg && -1 != this.za[a] ? this.fonts[this.za[a]] : null
        },
        br: function(a) {
            return this.Pf(a).oI()
        },
        tf: function() {
            if (0 == (this.app.lQ & l.wi) && 0 == (this.app.Ja & l.it)) {
                var a;
                for (a = 0; a < this.ge; a++) this.Sa[a] = 0
            }
        },
        kp: function() {
            var a;
            for (a = 0; a < this.ge; a++) this.Vr[a] && (this.Sa[a] = 1)
        },
        Cj: function(a) {
            -1 == a ? null == this.Bo && (this.Bo = new za, this.Bo.Kq()) : this.Sa[a]++
        },
        yg: function(a) {
            this.Cj(a);
            return -1
        },
        xq: function(a) {
            var b, c;
            for (c = 0; c < this.Uh && (null == this.fonts[c] || this.fonts[c].kc != a.kc || this.fonts[c].Je != a.Je || this.fonts[c].Ie != a.Ie || this.fonts[c].He != a.He); c++);
            if (c < this.Uh) return this.fonts[c].handle;
            c = -1;
            for (b = this.ge; b < this.Kg && -1 != this.za[b]; b++);
            if (-1 == c) {
                var d = Array(this.Kg + 10);
                for (b = 0; b < this.Kg; b++) d[b] = this.za[b];
                for (; b < this.Kg + 10; b++) d[b] = -1;
                c = this.Kg;
                this.Kg += 10;
                this.za = d
            }
            d = -1;
            for (b = 0; b < this.Uh; b++)
                if (null == this.fonts[b]) {
                    d = b;
                    break
                } - 1 == d && (d = this.Uh, this.fonts.push(null));
            this.za[c] = d;
            this.fonts[d] = new za;
            this.fonts[d].handle = c;
            this.fonts[d].kc = a.kc;
            this.fonts[d].Je = a.Je;
            this.fonts[d].Ie = a.Ie;
            this.fonts[d].He = a.He;
            return c
        }
    };
    za.prototype = {
        im: function(a) {
            this.handle = a.s();
            0 == a.sd ? a.va(72) : a.va(104)
        },
        load: function(a) {
            this.handle = a.s();
            var b = a.S;
            a.va(12);
            this.kc = a.s();
            0 > this.kc && (this.kc = -this.kc);
            a.s();
            a.s();
            a.s();
            this.Je = a.s();
            this.Ie = a.ub();
            a.ub();
            a.ub();
            a.ub();
            a.ub();
            a.ub();
            a.ub();
            a.ub();
            this.He = a.Ob();
            0 == a.sd ? a.seek(b + 72) : a.seek(b + 104)
        },
        oI: function() {
            var a = new eb;
            a.kc = this.kc;
            a.Je = this.Je;
            a.Ie = this.Ie;
            a.He = this.He;
            return a
        },
        Kq: function() {
            this.He = "Arial";
            this.kc = 13;
            this.Je = 400;
            this.Ie = 0
        },
        af: function() {
            return this.kc + Math.ceil(this.kc / 8)
        },
        Bg: function() {
            if (null == this.font) {
                this.font = this.Ie ? "italic " : "normal ";
                var a = 100 * Math.floor(this.Je / 100),
                    a = Math.max(a, 100),
                    a = Math.min(a, 900);
                this.font += a + " ";
                this.font += this.kc + "px ";
                this.font += this.He
            }
            return this.font
        }
    };
    jd.prototype = {
        fi: function(a) {
            this.file = a;
            this.Db = this.file.o();
            this.Wr = Array(this.Db);
            this.Sa = Array(this.Db);
            this.za = Array(this.Db);
            for (a = 0; a < this.Db; a++) this.Sa[a] = 0, this.za[a] = -1;
            var b = this.file.o(),
                c = new Va(this.app),
                d;
            for (a = 0; a < b; a++) d = this.file.S, c.im(), this.Wr[c.handle] = d;
            this.Vh = this.Db;
            this.zo = 0;
            this.Dj = null
        },
        uI: function(a) {
            return 0 <= a && a < this.Vh && -1 != this.za[a] ? this.Dj[this.za[a]] : null
        },
        KA: function(a) {
            for (var b = 0; b < this.Vh; b++)
                if (-1 != this.za[b] && this.Dj[this.za[b]].name == a) return b;
            return -1
        },
        tf: function() {
            if (0 == (this.app.Ja & l.wi) && 0 == (this.app.Ja & l.it)) {
                var a;
                for (a = 0; a < this.Db; a++) this.Sa[a] = 0
            }
        },
        kp: function() {
            var a;
            for (a = 0; a < this.Db; a++) this.Wr[a] && (this.Sa[a] = 1)
        },
        Cj: function(a) {
            this.Sa[a]++
        },
        yg: function(a) {
            this.Cj(a);
            return -1
        },
        load: function() {
            var a;
            for (a = this.zo = 0; a < this.Db; a++) 0 != this.Sa[a] && this.zo++;
            a = Array(this.zo);
            var b = 0,
                c;
            for (c = 0; c < this.Db; c++) 0 != this.Sa[c] && (null != this.Dj && -1 != this.za[c] && null != this.Dj[this.za[c]] ? a[b] = this.Dj[this.za[c]] : (a[b] = new Va(this.app), this.file.seek(this.Wr[c]), a[b].load()), a[b].Sa = this.Sa[c], b++);
            this.Dj = a;
            this.za = Array(this.Db);
            for (a = 0; a < this.Db; a++) this.za[a] = -1;
            for (a = 0; a < this.zo; a++) this.za[this.Dj[a].handle] = a;
            this.Vh = this.Db;
            this.tf()
        }
    };
    Va.prototype = {
        im: function() {
            this.handle = this.file.o();
            this.file.va(5);
            var a = this.file.o();
            0 == this.file.sd ? this.file.va(a) : this.file.va(2 * a)
        },
        Vu: function() {
            var a, b = this.Rb.sc.Lw & this.type;
            0 == b && (b = this.Rb.sc.Wv & this.type);
            for (a = 0; 4 > a && !(b & 1 << a); a++);
            if (4 > a) {
                b = "";
                switch (a) {
                    case 0:
                        b = "ogg";
                        break;
                    case 1:
                        b = "m4a";
                        break;
                    case 2:
                        b = "mp3";
                        break;
                    case 3:
                        b = "wav"
                }
                if (this.context) {
                    var c = this,
                        d = new XMLHttpRequest;
                    d.open("GET", this.Rb.tj + p.Rn(this.handle, b), !0);
                    d.responseType = "arraybuffer";
                    d.addEventListener("load", function() {
                        c.response = d.response;
                        c.Rb.sc.RG(c)
                    });
                    d.send()
                } else this.qb = new Audio, this.qb.XQ = "auto", c = this, this.qb.addEventListener("loadeddata", function(a) {
                    c.Rb.Ri(c);
                    c.qb.removeEventListener("loadeddata", arguments.callee, !1)
                }, !1), this.qb.addEventListener("error", function() {
                    c.Rb.Ri(c);
                    c.qb = null
                }, !1), this.qb.src = this.Rb.tj + p.Rn(this.handle, b), this.qb.load(), this.qb.autoplay = !1
            } else this.Rb.Ri(this)
        },
        load: function() {
            this.handle = this.file.o();
            this.type = this.file.ub();
            this.Fn = this.frequency = this.file.s();
            var a = this.file.o();
            this.name = this.file.Ob(a);
            this.qb = null;
            this.Rb.wn(this)
        },
        vJ: function() {
            this.handle = 9999;
            this.type = 4;
            this.Fn = this.frequency = 4E4;
            this.name = "";
            this.qb = null;
            this.Rb.wn(this)
        },
        Xk: function(a, b) {
            a || (a = 0);
            b || (b = this.frequency);
            if (this.qb) this.qb.volume = this.volume / 100, this.Fn = b, this.qb.playbackRate = b / this.frequency, this.qb.duration && (this.qb.currentTime = 0), this.qb.play();
            else if (this.buffer) {
                this.source = this.context.createBufferSource();
                this.source.buffer = this.buffer;
                0 == this.Sl ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
                a || (a = 0);
                b || (b = this.frequency);
                this.Fn = b;
                this.source.playbackRate.value = b / this.frequency;
                this.startTime = Date.now() - a;
                "undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
                var c = this;
                this.source.onended = function() {
                    c.$y = !0
                }
            }
            this.jk = !1;
            this.Mi = !0;
            this.$y = !1
        },
        play: function(a, b, c) {
            this.Wh = a;
            0 == this.Wh && (this.Wh = 1E7);
            this.volume = c;
            this.Xk()
        },
        stop: function() {
            this.qb ? this.qb.pause() : this.source && this.Mi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
            this.Mi = this.Bn = !1
        },
        WK: function(a) {
            this.volume = a;
            this.qb ? this.qb.volume = a / 100 : this.source && (this.gain ? this.gain.gain.value = a / 100 : this.source.gain.value = a / 100)
        },
        pause: function() {
            this.jk || (this.qb ? this.qb.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.WJ = Date.now() - this.startTime), this.jk = !0)
        },
        resume: function() {
            this.jk && (this.qb ? this.qb.play() : this.source && this.Xk(this.WJ), this.jk = !1)
        },
        XI: function() {
            return this.jk
        },
        aB: function() {
            return (this.qb || this.source) && this.Mi ? !0 : !1
        },
        setPosition: function(a) {
            this.qb ? this.qb.currentTime = a / 1E3 : this.source && (this.Mi && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.Xk(a))
        },
        fH: function() {
            if (1 == this.Mi && 0 == this.jk)
                if (this.qb) {
                    if (this.qb.ended) {
                        if (0 < this.Wh && (this.Wh--, 0 < this.Wh)) return this.Xk(0, this.Fn), !1;
                        this.Mi = this.Bn = !1;
                        return !0
                    }
                } else if (this.source && (3 == this.source.playbackState || this.$y)) {
                if (0 < this.Wh && (this.Wh--, 0 < this.Wh)) return this.Xk(0, this.Fn), !1;
                this.Mi = this.Bn = !1;
                return !0
            }
            return !1
        }
    };
    jb.prototype = {
        Mx: function(a) {
            this.bK[this.position++] = a
        }
    };
    I.Ae = 80;
    I.Cp = 52;
    I.nE = I.Ae;
    I.oE = I.nE + 1 - I.Cp;
    I.fq = 4;
    I.ot = 199 + I.Ae;
    I.pE = I.ot + 1 - I.fq - I.Cp;
    I.pG = 256;
    I.RE = 1;
    I.UP = function(a, b) {
        var c = b >> 5,
            d = 1 << (b & 31),
            e = 0 != (a[c] & d);
        a[c] |= d;
        return e
    };
    I.XH = function(a) {
        return a.Bb + 0
    };
    I.Ue = function(a) {
        a &= 65535;
        return 0 != (a & 32768) ? a - 65536 : a
    };
    I.wt = function(a) {
        return a >> 16
    };
    I.zk = function(a) {
        return a & 4294901760
    };
    I.prototype = {
        De: function(a) {
            var b;
            this.vc = 0;
            this.$g = null;
            this.ah = -1;
            if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.gK(a);
            var c = this.l.W[a];
            if (c.Fb == this.Ib) {
                if (0 != (c.bb & 2147483648)) return null;
                b = this.l.G[c.bb];
                this.ni = null;
                this.fl = c;
                this.uf = b;
                this.Xo = a
            } else {
                c.Fb = this.Ib;
                if (this.bh) return c.bb = -1, c.Bd = 0, null;
                c.bb = c.hb;
                if (0 != (c.hb & 2147483648)) return c.Bd = 0, null;
                var d = c.hb;
                do b = this.l.G[d], d = b.Tb, b.ic = d; while (0 == (d & 2147483648));
                b = this.l.G[c.hb];
                this.ni = null;
                this.fl = c;
                this.uf = b;
                this.Xo = a;
                c.Bd = c.Vg
            }
            this.vc = c.Bd;
            return b
        },
        gK: function(a) {
            var b, c, d = 0,
                e = 0;
            for (a = this.$c[a & 32767]; e < a.J.length;) {
                c = a.J[e + 1];
                if (0 > c) break;
                c = this.l.W[c];
                if (c.Fb == this.Ib) b = 0, 0 == (c.bb & 2147483648) && (b = c.Bd, null == this.$g && (this.$g = a, this.ah = e));
                else if (b = 0, c.Fb = this.Ib, this.bh) c.bb = -1, c.Bd = 0;
                else if (c.bb = c.hb, 0 != (c.hb & 2147483648)) c.Bd = 0;
                else {
                    null == this.$g && (this.$g = a, this.ah = e);
                    b = c.hb;
                    do b = this.l.G[b], b = b.ic = b.Tb; while (0 == (b & 2147483648));
                    b = c.Bd = c.Vg
                }
                d += b;
                e += 2
            }
            a = this.$g;
            return null != a ? (c = this.l.W[a.J[this.ah + 1]], this.ni = null, this.fl = c, this.uf = b = this.l.G[c.bb], this.Xo = a.J[this.ah + 1], this.vc = d, b) : null
        },
        Jd: function() {
            var a = this.uf,
                b;
            if (null == a && (b = this.l.W[this.Xo], 0 == (b.bb & 2147483648))) return a = this.l.G[b.bb], this.ni = null, this.fl = b, this.uf = a;
            if (null != a && 0 == (a.ic & 2147483648)) return this.ni = a, this.fl = null, this.uf = a = this.l.G[a.ic];
            if (null == this.$g) return null;
            do {
                this.ah += 2;
                if (this.ah >= this.$g.J.length) return null;
                a = this.$g.J[this.ah + 1];
                if (0 > a) return null;
                b = this.l.W[a]
            } while (0 != (b.bb & 2147483648));
            this.ni = null;
            this.fl = b;
            this.uf = a = this.l.G[b.bb];
            this.Xo = this.$g.J[this.ah + 1];
            return a
        },
        YH: function(a) {
            a = this.$c[a & 32767];
            for (var b = 0, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.W[c];
                c.Fb != this.Ib && (c.Fb = this.Ib, c.Bd = 0, c.bb = -1);
                b += 2
            }
        },
        hc: function() {
            --this.uf.wb.Bd;
            null != this.ni ? (this.ni.ic = this.uf.ic, this.uf = this.ni) : (this.fl.bb = this.uf.ic, this.uf = null)
        },
        Zl: function(a) {
            var b = a.wb;
            if (b.Fb != this.Ib) b.Fb = this.Ib, b.bb = a.Ub, b.Bd = 1, a.ic = -1;
            else {
                var c = b.bb;
                if (0 != (c & 2147483648)) b.bb = a.Ub, b.Bd += 1, a.ic = -1;
                else {
                    do {
                        if (a.Ub == c) return;
                        b = this.l.G[c];
                        c = b.ic
                    } while (0 == (c & 2147483648));
                    b.ic = a.Ub;
                    a.ic = -1;
                    a.wb.Bd += 1
                }
            }
        },
        Tz: function(a) {
            a = this.l.W[a];
            a.Fb = this.Ib;
            a.bb = -1;
            a.Bd = 0
        },
        ZH: function(a, b) {
            if (0 == (a & 32768)) this.Tz(a);
            else {
                if (32767 == (a & 32767)) return;
                var c = this.$c[a & 32767],
                    d;
                for (d = 0; d < c.J.length; d += 2) {
                    var e = c.J[d + 1];
                    if (0 > e) break;
                    this.Tz(e)
                }
            }
            b.ic = -1;
            b.wb.bb = b.Ub;
            b.wb.Bd = 1;
            b.wb.Fb = this.Ib
        },
        jA: function() {
            var a, b, c;
            for (b = 0; b < this.l.vf; b++)
                if (c = this.l.W[b], c.Fb == this.Ib) {
                    if (c.sw != this.Cs)
                        for (c.sw = this.Cs, a = c.hb; 0 == (a & 2147483648);) a = this.l.G[a], a.xv = 0, a = a.Tb;
                    for (a = c.bb; 0 == (a & 2147483648);) a = this.l.G[a], a.xv = 1, a = a.ic
                }
        },
        iA: function() {
            var a, b, c, d, e;
            for (d = 0; d < this.l.vf; d++)
                if (e = this.l.W[d], e.sw == this.Cs)
                    for (e.Fb = this.Ib, a = e.hb, c = null; 0 == (a & 2147483648);) b = this.l.G[a], 0 != b.xv && (null != c ? c.ic = a : e.bb = a, b.ic = -1, c = b), a = b.Tb
        },
        Lh: function(a) {
            if (this.el) return this.Gm = !1, a = this.er(a);
            var b;
            if (0 == (a & 32768)) return b = this.l.W[a], b.Fb == this.Ib && 0 == (b.bb & 2147483648) ? this.l.G[b.bb] : 0 == (b.hb & 2147483648) ? this.l.G[b.hb] : null;
            a = this.$c[a & 32767];
            var c = 0;
            if (c >= a.J.length) return null;
            do {
                b = a.J[c + 1];
                if (0 > b) break;
                b = this.l.W[b];
                if (b.Fb == this.Ib && 0 == (b.bb & 2147483648)) return this.l.G[b.bb];
                c += 2
            } while (c < a.J.length);
            c = 0;
            do {
                b = a.J[c + 1];
                if (0 > b) break;
                b = this.l.W[b];
                if (0 == (b.hb & 2147483648)) return this.l.G[b.hb];
                c += 2
            } while (c < a.J.length);
            return null
        },
        yI: function(a, b) {
            this.Gm = !0;
            var c = this.er(a);
            if (null != c) return 0 != this.Hc && (b.Ha |= X.vi, this.uj = !0), c;
            b.Ha |= T.zl;
            return c
        },
        ac: function(a) {
            a.Ha &= ~T.zl;
            this.Gm = !0;
            var b = this.er(a.Ta);
            if (null != b) return 0 != this.Hc && (a.Ha |= X.vi, this.uj = !0), b;
            a.Ha |= T.zl;
            return b
        },
        er: function(a) {
            return 0 == (a & 32768) ? this.vI(a) : this.wI(a)
        },
        vI: function(a) {
            var b = this.l.W[a];
            if (b.qw != this.dl) {
                b.qw = this.dl;
                b.rw = this.mi;
                if (b.Fb == this.Ib && 0 == (b.bb & 2147483648)) {
                    b.Ug = b.bb;
                    a = this.l.G[b.bb];
                    b.mj = a.ic;
                    if (0 != (a.ic & 2147483648)) return b.ag = !1, b.kj = 1, this.Hc = !1, a;
                    b.ag = !0;
                    b.kj = 2;
                    this.Hc = !0;
                    return a
                }
                if (this.Gm && b.Fb == this.Ib) return b.kj = 0, b.Ug = -1, null;
                if (0 == (b.hb & 2147483648)) {
                    b.Ug = b.hb;
                    a = this.l.G[b.hb];
                    if (null == a) return b.kj = 0, b.Ug = -1, null;
                    if (0 == (a.Tb & 2147483648)) return b.mj = a.Tb, b.ag = !0, b.kj = 3, this.Hc = !0, a;
                    b.ag = !1;
                    b.kj = 1;
                    this.Hc = !1;
                    return a
                }
                b.kj = 0;
                b.Ug = -1;
                return null
            }
            if (b.rw != this.mi) {
                var c;
                b.rw = this.mi;
                switch (b.kj) {
                    case 0:
                        return this.Hc = b.ag, null;
                    case 1:
                        return a = this.l.G[b.Ug], this.Hc = b.ag, a;
                    case 2:
                        b.Ug = b.mj;
                        a = this.l.G[b.mj];
                        if (null == a) return null;
                        c = a.ic;
                        0 != (c & 2147483648) && (b.ag = !1, c = b.bb);
                        b.mj = c;
                        this.Hc = b.ag;
                        return a;
                    case 3:
                        b.Ug = b.mj;
                        a = this.l.G[b.mj];
                        if (null == a) return null;
                        c = a.Tb;
                        0 != (c & 2147483648) && (b.ag = !1, c = b.hb);
                        b.mj = c;
                        this.Hc = b.ag;
                        return a
                }
            }
            if (0 > b.Ug) return null;
            a = this.l.G[b.Ug];
            this.Hc = b.ag;
            return a
        },
        wI: function(a) {
            var b, c = this.$c[a & 32767];
            if (c.ks != this.dl) {
                c.ks = this.dl;
                c.Mw = this.mi;
                b = this.GC(c);
                if (0 <= b) {
                    c.Wg = b;
                    a = this.l.G[b];
                    if (null == a) return c.nj = 0, c.Wg = -1, null;
                    b = a.ic;
                    if (0 != (b & 2147483648) && (b = this.Pw(c), 0 > b)) return c.nj = 1, this.Hc = c.bg = !1, a;
                    c.oj = b;
                    c.nj = 2;
                    this.Hc = c.bg = !0;
                    return a
                }
                if (this.Gm && c.Nw) return c.nj = 0, c.Wg = -1, null;
                b = this.FC(c);
                if (0 <= b && (c.Wg = b, a = this.l.G[b], null != a)) {
                    b = a.Tb;
                    if (0 != (b & 2147483648) && (b = this.Ow(c), 0 != (b & 2147483648))) return c.nj = 1, this.Hc = c.bg = !1, a;
                    c.oj = b;
                    c.nj = 3;
                    this.Hc = c.bg = !0;
                    return a
                }
                c.nj = 0;
                c.Wg = -1;
                return null
            }
            if (c.Mw != this.mi) switch (c.Mw = this.mi, c.nj) {
                case 0:
                    return this.Hc = c.bg, null;
                case 1:
                    return a = this.l.G[c.Wg], this.Hc = c.bg, a;
                case 2:
                    return c.Wg = c.oj, a = this.l.G[c.oj], null != a && (b = a.ic, 0 != (b & 2147483648) && (b = this.Pw(c), 0 > b && (c.bg = !1, b = this.GC(c))), c.oj = b), this.Hc = c.bg, a;
                case 3:
                    return c.Wg = c.oj, a = this.l.G[c.oj], null != a && (b = a.Tb, 0 != (b & 2147483648) && (b = this.Ow(c), 0 != (b & 2147483648) && (c.bg = !1, b = this.FC(c))), c.oj = b), this.Hc = c.bg, a
            }
            if (0 > c.Wg) return null;
            a = this.l.G[c.Wg];
            this.Hc = c.bg;
            return a
        },
        Pw: function(a) {
            for (var b = a.zm, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.W[c];
                if (c.Fb == this.Ib && (a.Nw = !0, 0 == (c.bb & 2147483648))) return a.zm = b + 2, c.bb;
                b += 2
            }
            return -1
        },
        GC: function(a) {
            a.zm = 0;
            a.Nw = !1;
            return this.Pw(a)
        },
        Ow: function(a) {
            for (var b = a.zm, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.W[c];
                if (0 == (c.hb & 2147483648)) return a.zm = b + 2, c.hb;
                b += 2
            }
            return -1
        },
        FC: function(a) {
            a.zm = 0;
            return this.Ow(a)
        },
        QH: function() {
            this.Du = !1;
            for (var a = this.l.As, b = this.l.Bs;;) {
                for (var c = null, d = null, e = this.l.XC; null != e;) {
                    if (0 > e.index) {
                        (c = e.next) && (p.Ac(e.name, c.name) || (c = null));
                        break
                    }
                    d = e;
                    e = e.next
                }
                if (null == e) break;
                var f = -2686976,
                    g = -2686976,
                    h = null;
                0 < e.Zf && (h = e.Le[0].Da == u.Kb ? this.pf : this.nf);
                null != h && (h = h.get(e.name), void 0 != h && (f = 65536 * -h), null != c && (h = null, 0 < c.Zf && (h = c.Le[0].Da == u.Kb ? this.pf : this.nf), null != h && (h = h.get(c.name), void 0 != h && (g = 65536 * -h))));
                e.stop = !1;
                for (e.index = 0; e.index < e.Zf; e.index++) {
                    this.l.As = e;
                    if (this.l.Bs = c) c.index = e.index;
                    this.el = 0;
                    this.wd(e.Le[e.index], f);
                    if (e.stop) break
                }
                if (c)
                    for (c.index = 0; c.index < c.Zf; c.index++) {
                        this.l.As = c;
                        if (this.l.Bs = e) e.index = c.index;
                        this.el = 0;
                        this.wd(c.Le[c.index], g);
                        if (c.stop) break
                    }
                c && (e.next = c.next);
                null == d ? this.l.XC = e.next : d.next = e.next
            }
            this.l.As = a;
            this.l.Bs = b
        },
        $H: function(a, b) {
            for (var c = 0; c < a.length; c += 2) {
                var d = this.l.W[a[c + 1]];
                if (d.Fb == this.Ib) {
                    var e = b.get(d);
                    void 0 != e ? e.length = 0 : (e = [], b.set(d, e));
                    for (d = d.bb; 0 <= d;) {
                        var f = this.l.G[d];
                        if (null == f) break;
                        0 == (f.V & L.Be) && e.push(d);
                        d = f.ic
                    }
                }
            }
        },
        aI: function(a) {
            var b = this.Eq.length,
                c = new Map;
            if (0 < b)
                for (var b = this.Eq[b - 1], d = sb(b.keys()), e = d.next(); !e.done; e = d.next()) {
                    var e = e.value,
                        f = b.get(e).slice();
                    c.set(e, f)
                }
            this.$H(a.yb, c);
            this.Eq.push(c);
            this.Ye(a.hA, null);
            this.Eq.pop()
        },
        Fe: function(a) {
            var b = a & 65535;
            0 != (b & 32768) && (b = 65536 - b);
            a = this.lc[this.Re[b] + -(a >> 16)];
            0 != a && this.Ye(a, null)
        },
        wd: function(a, b) {
            this.Js = b;
            var c = this.lc[a.uv + -(b >> 16)];
            return 0 != c ? (this.Ye(c, a), !0) : !1
        },
        EI: function() {
            for (var a = !1, b = this.l.fx; b;) {
                if (this.l.ri >= b.nd)
                    if (b.type == kb.HG) {
                        this.l.i.Jc = b.name;
                        var c = this.lc[this.Re[-u.sn] + P.zy];
                        0 != c && this.Ye(c, null);
                        a = b.tu = !0
                    } else
                        for (0 == b.np && (b.np = this.l.ri); this.l.ri >= b.np;) {
                            this.l.i.Jc = b.name;
                            this.l.i.hx = b.index;
                            c = this.lc[this.Re[-u.sn] + P.zy];
                            0 != c && this.Ye(c, null);
                            b.index++;
                            b.zr--;
                            if (0 == b.zr) {
                                a = b.tu = !0;
                                break
                            }
                            b.np += b.iL
                        }
                b = b.next
            }
            if (a)
                for (b = this.l.fx, a = null; b;) c = b.next, b.tu ? null == a ? this.l.fx = c : a.next = c : a = b, b = c
        },
        rH: function() {
            var a;
            if (0 != (this.l.Rc & k.ln)) a = this.lc[this.Re[-u.gq] + 1], 0 != a && (this.lc[this.Re[-u.gq] + 1] = -1, this.Ye(a, null), this.Yo = !0);
            else {
                a = this.lc[this.Re[-u.sn] + 3];
                0 != a && this.Ye(a, null);
                a = this.lc[this.Re[-u.gq] + 1];
                var b, c, d, e, f;
                if (0 != a) {
                    if (this.Yo) {
                        e = null;
                        b = a;
                        do {
                            d = this.gc[b];
                            if (d != e)
                                for (e = d, c = d.Bb; c < d.Bb + d.de; c++) f = d.Wa[c], 0 == (f.Ha & T.zl) && (f.Ha |= T.Gp);
                            b++
                        } while (null != this.gc[b])
                    }
                    this.Ye(a, null);
                    this.lc[this.Re[-u.gq] + 1] = 0;
                    if (this.Yo) {
                        e = null;
                        b = a;
                        do {
                            d = this.gc[b];
                            if (d != e)
                                for (e = d, c = d.Bb; c < d.Bb + d.de; c++) f = d.Wa[c], f.Ha &= ~T.Gp;
                            b++
                        } while (null != this.gc[b]);
                        this.Yo = !1
                    }
                }
                a = this.lc[this.Re[-u.sn] + 2];
                0 != a && this.Ye(a, null);
                a = this.lc[this.Re[-u.sn] + 1];
                0 != a && this.Ye(a, null)
            }
        },
        Ye: function(a, b) {
            var c, d, e;
            this.VC = !1;
            do
                if (d = this.gc[a], 0 == (d.la & K.Ip))
                    if (this.Qe = d, this.Gs[0] = 0, this.Gs[1] = 0, this.Gs[2] = 0, this.Gs[3] = 0, 0 == (d.la & K.tt)) {
                        this.Ib += 1;
                        this.bh = !1;
                        e = 0;
                        if (d.Wa[e].gb(this.l, b))
                            for (e++; e < d.Bb && 0 != d.Wa[e].fa(this.l); e++);
                        if (e == d.Bb)
                            if (this.VC) null != b && this.dH(b);
                            else if (this.Eu(d), 0 != (d.la & K.hn)) break;
                        a++
                    } else {
                        this.Cs++;
                        if (0 == (d.la & K.cy)) {
                            c = !1;
                            do {
                                this.Ib++;
                                this.bh = !1;
                                e = this.Ze[a];
                                0 == d.Wa[e].gb(this.l, b) && (this.bh = !0);
                                for (e++; e < d.Bb && -1507329 != d.Wa[e].ba;) 0 == d.Wa[e].fa(this.l) && (this.bh = !0), e++;
                                this.jA();
                                0 == this.bh && (c = !0);
                                a++;
                                d = this.gc[a];
                                if (null == d) break
                            } while (d == this.Qe)
                        } else {
                            var f;
                            c = this.bh = !1;
                            do {
                                this.Ib++;
                                f = !1;
                                e = this.Ze[a];
                                if (d.Wa[e].gb(this.l, b))
                                    for (e++; e < d.Bb && -1572865 != d.Wa[e].ba;) {
                                        if (0 == d.Wa[e].fa(this.l)) {
                                            f = !0;
                                            break
                                        }
                                        e++
                                    } else f = !0;
                                0 == f && (this.jA(), c = !0);
                                a++;
                                d = this.gc[a];
                                if (null == d) break
                            } while (d == this.Qe)
                        }
                        if (c && (this.Ib++, this.iA(), d = 0 != (this.Qe.la & K.hn), this.Eu(this.Qe), d)) break
                    }
            else
            if (a++, null != this.gc[a])
                for (c = this.gc[a]; c == d;) {
                    a++;
                    if (null == this.gc[a]) break;
                    c = this.gc[a]
                }
            while (null != this.gc[a])
        },
        Eu: function(a) {
            this.Ju = null;
            if (0 != (a.la & K.by)) {
                0 != (a.la & K.vt) && (this.xj = new N);
                if (0 != (a.la & K.kn)) {
                    var b = this.l.pc,
                        c = a.Ti;
                    a.Ti = b;
                    if (b == c || b - 1 == c) return
                }
                if (0 != (a.la & K.ut))
                    if (0 != a.Yl) a.Yl--;
                    else return;
                if (0 != (a.la & K.jn)) {
                    b = this.l.ri / 10;
                    c = a.Yl;
                    if (0 != c && b < c) return;
                    a.Yl = b + a.Ti
                }
            }
            this.dl++;
            this.uj = !1;
            this.mi = 0;
            this.el = !0;
            b = 0;
            do c = a.Wa[b + a.Bb], 0 == (c.Ha & (T.$x | T.Gp)) && (c.Ha &= ~X.vi, c.Ma(this.l)), b++; while (b < a.de);
            if (this.uj) {
                do
                    for (this.uj = !1, this.mi++, b = 0; b < a.de; b++) c = a.Wa[b + a.Bb], 0 != (c.Ha & X.vi) && (c.Ha &= ~X.vi, c.Ma(this.l)); while (this.uj)
            }
            b = this.Ju;
            0 != (a.la & K.hn) && 0 != (a.la & K.Hp) && (b = null);
            this.Ju = null;
            this.el = !1;
            null != this.xj && this.TH();
            this.Du && this.QH();
            b && this.aI(b)
        },
        dH: function(a) {
            var b;
            b = a.cf;
            this.Ib += 1;
            this.Zl(a);
            this.dl++;
            this.uj = !1;
            this.mi = 0;
            this.el = !0;
            var c = 0,
                d;
            do {
                a = this.Qe.Wa[this.Qe.Bb + c];
                d = a.ba & 4294901760;
                if (262144 == d || 589824 == d)
                    if (b == a.Id) a.Ma(this.l);
                    else if (d = a.Ta, 0 != (d & 32768)) {
                    var e = this.$c[d & 32767];
                    for (d = 0; d < e.J.length;) {
                        var f = e.J[d];
                        if (0 > f) break;
                        if (f == b) {
                            a.Ma(this.l);
                            break
                        }
                        d += 2
                    }
                }
                c++
            } while (c < this.Qe.de);
            this.el = !1
        },
        TH: function() {
            if (!(1 >= this.xj.size())) {
                var a = this.l.random(this.xj.size()),
                    b;
                do b = this.l.random(this.xj.size()); while (a == b);
                a = this.xj.get(a);
                b = this.xj.get(b);
                var c = a.w,
                    d = a.v,
                    e = b.v;
                k.dc(a, b.w);
                k.ec(a, e);
                k.dc(b, c);
                k.ec(b, d);
                this.xj = null
            }
        },
        qC: function(a, b) {
            var c;
            if (null != this.l && (this.l.lv(), 0 == this.l.dg && 0 != this.An && (c = a, 2 == b && (c += I.pG), this.l.Tm = 0, 0 == this.l.wf))) {
                this.xs = this.Jc = c;
                this.Fe(-262150);
                this.Fe(-327686);
                c = 0;
                var d, e, f, g, h, q, l = new N;
                for (d = 0; d < this.l.ob; d++) {
                    for (; null == this.l.G[c];) c++;
                    e = this.l.G[c];
                    c++;
                    f = e.w - e.ma;
                    g = e.v - e.na;
                    h = f + e.N;
                    q = g + e.L;
                    this.l.vj >= f && this.l.vj < h && this.l.wj >= g && this.l.wj < q && 0 != (e.bf & Q.Xd) && 0 == (e.V & L.Be) && (e.Da == u.Kb ? 0 == (e.D.T & A.Ei) ? this.Rb.ca.Lb(e.b.Ra).Qf(F.Tj, 0, 1, 1).GD(this.l.vj - e.w, this.l.wj - e.v, e.b.ib, e.b.Gb, e.b.Hb) && l.add(e) : l.add(e) : l.add(e))
                }
                for (c = 0; c < l.size(); c++) e = l.get(c), this.hx = e.cf, this.gx = e, this.Fe(-393222)
            }
        },
        NJ: function() {
            null != this.l && 0 != this.An && (this.l.Tm = 0, this.Fe(-524294))
        },
        rC: function() {
            0 != this.An && 0 == this.l.dg && (this.l.Tm = 0)
        },
        Dz: function(a, b) {
            var c = this.l.W[a];
            if (c.Fb != this.Ib) {
                if (this.bh) return this.vc = 0, null;
                for (c = c.hb; 0 == (c & 2147483648);) {
                    c = this.l.G[c];
                    if (null == c) break;
                    if (0 == (c.V & L.Be) && (this.vc++, this.vc == b)) return c;
                    c = c.Tb
                }
                return null
            }
            for (c = c.bb; 0 == (c & 2147483648);) {
                c = this.l.G[c];
                if (null == c) break;
                if (0 == (c.V & L.Be) && (this.vc++, this.vc == b)) return c;
                c = c.ic
            }
            return null
        },
        Ez: function(a, b) {
            b++;
            this.vc = 0;
            if (0 == (a & 32768)) return this.Dz(a, b);
            if (32767 == (a & 32767)) return null;
            var c = this.$c[a & 32767],
                d;
            for (d = 0; d < c.J.length; d += 2) {
                var e = c.J[d + 1];
                if (0 > e) break;
                e = this.Dz(e, b);
                if (null != e) return e
            }
            return null
        },
        fK: function(a, b, c, d, e) {
            a = new Le(a, b, c, d, e);
            null == this.hl && (this.hl = new N);
            this.hl.add(a)
        },
        DI: function() {
            if (null != this.hl) {
                var a;
                for (a = 0; a < this.hl.size(); a++) {
                    var b = this.hl.get(a);
                    if (null != b && 0 != b.code) switch (this.Jc = b.TJ, this.ZC = b.$f, b.FK) {
                        case 0:
                            this.Fe(b.code);
                            break;
                        case 1:
                            this.wd(b.SJ, b.code)
                    }
                }
                this.hl.clear()
            }
        },
        load: function(a) {
            for (var b,
                    c, d = 0;;)
                if (b = a.file.NC(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
                    this.Lg = a.file.o();
                    300 > this.Lg && (this.Lg = 300);
                    a.file.o();
                    this.bC = a.file.o();
                    for (c = 0; c < 7 + u.By; c++) this.Qk[c] = a.file.o();
                    this.Qk[u.dd + u.Kb] < I.ot + 1 && (this.Qk[u.dd + u.Kb] = I.ot + 1);
                    this.Og = a.file.o();
                    if (0 < this.Og)
                        for (this.Yg = Array(this.Og), c = 0; c < this.Og; c++) this.Yg[c] = new Ke, this.Yg[c].hs = a.file.X(), this.Yg[c].js = a.file.X()
                } else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.s(), this.wo = a.file.s(), this.ud = Array(this.wo);
            else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
                for (a.file.s(), b = a.file.s(), c = 0; c < b; c++) this.ud[d] = K.create(a), d++;
            else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3]) 0 != (a.file.s() & I.RE) && (this.Ul |= K.hn);
            else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
            this.pB = Math.max(this.pB, d)
        },
        TA: function(a) {
            var b, c;
            c = this.ud[a];
            c.la &= this.Ul;
            c.la |= K.Ip;
            a++;
            for (b = !1;;) {
                c = this.ud[a];
                c.la &= this.Ul;
                c.la |= K.Ip;
                c = c.Wa[0];
                switch (c.ba) {
                    case -589825:
                        c = c.u[0];
                        c.Cg |= na.Ft;
                        a = this.TA(a);
                        continue;
                    case -655361:
                        b = !0, a++
                }
                if (b) break;
                a++
            }
            return a
        },
        Jw: function() {
            var a, b, c, d, e, f, g = new N,
                h;
            for (d = 0; d < this.ud.length;) a = this.ud[d], a.la &= this.Ul, b = a.Wa[0], -589825 == b.ba && (a = b.u[0], h = new Je, h.id = a.AI, h.gA = d, g.add(h), a.Cg &= ~(na.Ft | na.Et), 0 != (a.Cg & na.nF) && (a.Cg |= na.Et)), d++;
            for (d = 0; d < this.ud.length;) {
                a = this.ud[d];
                a.la &= this.Ul;
                b = a.Wa[0];
                if (-589825 == b.ba && (a = b.u[0], a.Cg &= ~na.Ft, 0 != (a.Cg & na.Et))) {
                    d = this.TA(d);
                    continue
                }
                d++
            }
            for (d = 0; d < this.ud.length; d++) switch (a = this.ud[d], b = a.Wa[0], b.ba) {
                case -589825:
                case -655361:
                    break;
                default:
                    for (a.Ti = 0, e = a.Yl = 0; e < a.Bb + a.de; e++)
                        if (b = a.Wa[e], b.Ha = 0 > b.ba ? b.Ha & T.TE : b.Ha & ~(X.vi | T.zl), 0 != b.uc)
                            for (f = 0; f < b.uc; f++) switch (c = b.u[f], c.code) {
                                case 25:
                                    c.bt = 0;
                                    break;
                                case 13:
                                    c.oH = c.Vl;
                                    break;
                                case 39:
                                    var q;
                                    for (q = 0; q < g.size(); q++)
                                        if (h = g.get(q), h.id == c.id) {
                                            c.S = h.gA;
                                            break
                                        }
                            }
            }
        },
        dK: function(a) {
            qualToOiListFull = qualToOiList = null;
            if (0 < this.Og) {
                var b, c, d, e, f = Array(this.Og);
                for (d = 0; d < a.length; d++) a[d].Fb = 0, a[d].mf = null;
                for (c = 0; c < this.Og; c++)
                    for (e = this.Yg[c].hs & 32767, d = f[c] = 0; d < a.length; d++) {
                        var g = a[d];
                        if (g.hd == this.Yg[c].js)
                            for (b = 0; 8 > b && -1 != g.wm[b]; b++)
                                if (e == g.wm[b]) {
                                    f[c]++;
                                    g.Fb++;
                                    break
                                }
                    }
                this.$c = Array(this.Og);
                this.ad = Array(this.Og);
                for (c = 0; c < this.Og; c++) {
                    this.$c[c] = new kd;
                    this.ad[c] = new kd;
                    b = f[c];
                    0 != b && (this.$c[c].J = Array(2 * b), this.ad[c].J = Array(2 * b));
                    var h = 0;
                    e = this.Yg[c].hs & 32767;
                    for (d = 0; d < a.length; d++)
                        if (g = a[d], g.hd == this.Yg[c].js)
                            for (b = 0; 8 > b && -1 != g.wm[b]; b++)
                                if (e == g.wm[b]) {
                                    this.ad[c].J[2 * h] = g.Zc;
                                    this.ad[c].J[2 * h + 1] = d;
                                    this.$c[c].J[2 * h] = -1;
                                    this.$c[c].J[2 * h + 1] = -1;
                                    null == g.mf && 0 != g.Fb && (g.mf = Array(g.Fb), g.Fb = 0);
                                    null != g.mf && (g.mf[g.Fb++] = c);
                                    h++;
                                    break
                                } this.$c[c].ks = -1;
                    this.ad[c].ks = -1
                }
                for (d = 0; d < a.length; d++) a[d].Fb = 0
            }
        },
        Aq: function(a) {
            var b, c, d, e, f, g, h, q, k, n, t, w, m, r, A, z;
            this.l = a;
            var G = this.dl = 0;
            for (h = a = 0; h < this.l.vf; h++) - 1 != this.l.W[h].Zc && (this.l.W[h].qw = -1, this.l.W[h].Rd = 0, this.l.W[h].vm = -1, a++, this.l.W[h].Zc + 1 > G && (G = this.l.W[h].Zc + 1));
            this.Xe = Array(200 * G + 1);
            a = 0;
            g = [];
            var v;
            for (r = 0; r < this.ud.length; r++) {
                b = this.ud[r];
                for (v = 0; v < b.de + b.Bb; v++) {
                    c = b.Wa[v];
                    c.Ha &= ~T.$x;
                    0 <= I.Ue(c.ba) && (c.Ta = this.cm(c.Id, I.Ue(c.ba)));
                    if (c.ba == X.UD) d = c.u[0],
                        d.eI = 0, d.ja[0].code == ba.Al && 0 == d.ja[1].code && (n = {}, n.VG = c.u[0], n.name = d.ja[0].vb, g.push(n), this.l.nu(d.ja[0].vb));
                    else if (c.ba == X.KL || c.ba == X.JL) d = c.u[0], d.ja[0].code == ba.Al && 0 == d.ja[1].code && (d.ja[0] = new hb, d.ja[0].code = ba.ey, d.ja[0].value = this.l.nu(d.ja[0].vb));
                    if (0 < c.uc)
                        for (n = 0; n < c.uc; n++) switch (d = c.u[n], d.code) {
                            case 25:
                                d.value = 0;
                                break;
                            case 21:
                                if (0 == (c.Id & u.cu))
                                    for (t = this.l.A.Dd.Wq(); null != t; t = this.l.A.Dd.Ao()) {
                                        if (c.Id == t.Tf) {
                                            d.Cq = t.aj;
                                            break
                                        }
                                    } else d.Cq = -1;
                                f = d.Lo; - 1 != f && (d.Mo = this.cm(f, d.as));
                                break;
                            case 9:
                            case 18:
                            case 16:
                                f = d.Lo; - 1 != f && (d.Mo = this.cm(f, d.as));
                                break;
                            case 1:
                                d.tb = this.cm(d.$f, d.type);
                                break;
                            case 69:
                                for (h = 0; h < d.yb.length; h += 2) d.yb[h + 1] = this.cm(d.yb[h], 0);
                                break;
                            case 15:
                            case 27:
                            case 28:
                            case 45:
                            case 46:
                            case 22:
                            case 23:
                            case 52:
                            case 59:
                            case 53:
                            case 62:
                            case 54:
                                for (t = d, h = 0; h < t.ja.length; h++) 0 < I.Ue(t.ja[h].code) && (q = t.ja[h], q.tb = this.cm(q.$f, I.Ue(q.code)))
                        }
                }
                n = 0;
                t = K.Jp | K.by | K.dy;
                for (v = 0; v < b.Bb + b.de; v++) {
                    c = b.Wa[v];
                    e = I.Ue(c.ba);
                    f = c.ba;
                    q = k = h = 0;
                    d = null;
                    if (e >= u.Kb) switch (I.zk(f)) {
                        case 262144:
                        case 589824:
                            n |= K.dy;
                            f = c.Id;
                            if (0 != (f & u.cu))
                                for (e = this.hK(c.Ta); - 1 != e; e = this.HC()) a = this.mB(b, a, this.l.W[e].Zc);
                            else a = this.mB(b, a, f);
                            break;
                        case 1638400:
                            n |= K.vt;
                            break;
                        case -917504:
                            d = c.u[0];
                            h = c.u[0];
                            this.wq(c.Ta, c.Id, h.tb, h.$f);
                            this.wq(h.tb, h.$f, c.Ta, c.Id);
                            q = I.Ue(c.ba);
                            q = this.qr(q) ? Q.Xd | Q.un : Q.Xd | Q.mq | Q.un;
                            k = h.type;
                            k = this.qr(k) ? Q.Xd | Q.un : Q.Xd | Q.mq | Q.un;
                            this.Rb.FI & l.VD && this.ws(c.Ta, c.Id, h.tb, h.$f);
                            h = 3;
                            break;
                        case -262144:
                            q = I.Ue(c.ba);
                            q = this.qr(q) ? Q.Xd : Q.Xd | Q.mq;
                            d = c.u[0];
                            k = c.u[0].type;
                            k = this.qr(k) ? Q.Xd : Q.Xd | Q.mq;
                            0 != (this.Rb.FI & l.VD) && this.ws(c.Ta, c.Id, d.tb, d.$f);
                            h = 3;
                            break;
                        case -720896:
                        case -786432:
                            k = Q.lq;
                            h = 1;
                            break;
                        case -851968:
                            k = Q.kq, h = 1
                    } else switch (f) {
                        case -327681:
                            t &= ~K.Jp;
                            break;
                        case -393217:
                            t |= K.jn;
                            break;
                        case -262145:
                            t |= K.jn;
                            break;
                        case -196609:
                            t |= K.kn + K.ut;
                            break;
                        case -196614:
                            q = Q.Xd;
                            d = c.u[0];
                            h = 2;
                            break;
                        case -393222:
                            q = Q.Xd, d = c.u[1], h = 2
                    }
                    if (0 != (h & 1))
                        for (e = this.Xg(c.Ta); - 1 != e; e = this.cg()) this.l.W[e].Rd |= k;
                    if (0 != (h & 2))
                        for (e = this.Xg(d.tb); - 1 != e; e = this.cg()) this.l.W[e].Rd |= q
                }
                b.la &= ~t;
                b.la |= n
            }
            this.Xe[a] = -1;
            k = !1;
            if (null == this.nf && null == this.pf) {
                this.nf = new Map;
                this.pf = new Map;
                k = !0;
                for (r = 0; r < this.ud.length && k; r++)
                    if (b = this.ud[r], null != b) {
                        for (v = 0; v < b.Bb; v++)
                            if (c = b.Wa[v], null != c && (e = I.Ue(c.ba), e >= u.Kb && -2686976 == I.zk(c.ba))) {
                                var E = c.u[0];
                                if (2 == E.ja.length && E.ja[0].code == ba.Al && 0 == E.ja[1].code) {
                                    E = E.ja[0].vb.toLowerCase();
                                    c = e == u.Kb ? this.pf : this.nf;
                                    var B = c.get(E);
                                    void 0 == B ? B = 1 : B++;
                                    c.set(E, B)
                                } else {
                                    k = !1;
                                    break
                                }
                            } for (h = 0; h < b.de && k; h++)
                            if (c = b.Wa[h + b.Bb], null != c && (e = I.Ue(c.ba), e >= u.Kb && 5046272 == I.zk(c.ba))) {
                                k = !1;
                                break
                            }
                    } if (k) {
                    for (; this.nf.size > I.oE;) {
                        b = 1E9;
                        c = null;
                        v = sb(this.nf.entries());
                        for (r = v.next(); !r.done; r = v.next()) n = r.value, r = n[1], r < b && (c = n[0], b = r);
                        null != c && this.nf["delete"](c)
                    }
                    b = I.Cp;
                    r = sb(this.nf.keys());
                    for (c = r.next(); !c.done; c = r.next()) this.nf.set(c.value, b++);
                    for (; this.pf.size > I.pE;) {
                        b = 1E9;
                        c = null;
                        v = sb(this.pf.entries());
                        for (r = v.next(); !r.done; r = v.next()) n = r.value, r = n[1], r < b && (c = n[0], b = r);
                        null != c && this.pf["delete"](c)
                    }
                    b = I.Cp;
                    r = sb(this.pf.keys());
                    for (c = r.next(); !c.done; c = r.next()) this.pf.set(c.value, b++), b == I.Ae + 1 && (b += I.fq);
                    b > I.Ae + 1 + I.fq && (this.Qk[u.dd + u.Kb] += b - (I.Ae + 1 + I.fq))
                } else this.pf = this.nf = null
            }
            t = Array(u.dd + G + 1);
            b = r = 0;
            for (e = -u.dd; 0 > e; e++, b++) t[b] = r, r += this.Qk[u.dd + e];
            for (oil = 0; oil < this.l.vf; oil++, b++) t[b] = r, r = this.l.W[oil].hd < u.ng ? r + (this.Qk[u.dd + this.l.W[oil].hd] + I.Ae + 1) : r + (this.Rb.Sq.Yn(this.l.W[oil].hd) + I.Ae + 1);
            m = r;
            this.lc = Array(m);
            for (h = 0; h < m; h++) this.lc[h] = 0;
            n = w = 0;
            q = Array(this.l.A.Lg);
            for (r = 0; r < this.wo; r++)
                for (b = this.ud[r], b.la &= ~K.tt, d = !0, v = A = 0; v < b.Bb; v++) {
                    c = b.Wa[v];
                    e = I.Ue(c.ba);
                    f = c.ba;
                    h = -I.wt(f);
                    k && e >= u.Kb && -2686976 == I.zk(f) && (E = c.u[0], 2 == E.ja.length && E.ja[0].code == ba.Al && 0 == E.ja[1].code && (E = E.ja[0].vb.toLowerCase(), B = (e == u.Kb ? this.pf : this.nf).get(E), void 0 != B && (h = B, f = (f & 65535) + 65536 * -h, c.ba = f)));
                    if (d && -2686977 != c.ba)
                        if (0 != (c.Ha & T.st) && (w++, 0 == (b.la & K.Hp) && n++), 0 > e) this.lc[t[7 + e] + h]++;
                        else {
                            d = 0;
                            for (e = this.Xg(c.Ta); - 1 != e; e = this.cg()) this.lc[t[u.dd + e] + h]++, q[d++] = e;
                            q[d] = -1;
                            if (-917504 == I.zk(f))
                                for (d = c.u[0], f = this.Xg(d.tb); - 1 != f; f = this.cg()) {
                                    for (d = 0; q[d] != f && -1 != q[d];) d++; - 1 == q[d] && this.lc[t[u.dd + f] + h]++
                                }
                        } d = !1;
                    if (-1507329 == c.ba || -1572865 == c.ba) d = !0, b.la |= K.tt, 0 == A ? A = c.ba : c.ba = A, -1572865 == A && (b.la |= K.cy); - 2686977 == c.ba && (w++, b.la |= K.Ip)
                }
            c = w + 1;
            for (b = 0; b < m; b++) 0 != this.lc[b] && (r = this.lc[b], this.lc[b] = c, c += r + 1);
            this.gc = Array(c);
            this.Ze = Array(c);
            for (h = 0; h < c; h++) this.gc[h] = null, this.Ze[h] = 0;
            k = Array(m);
            for (h = 0; h < m; h++) k[h] = this.lc[h];
            this.l.ve = null;
            m = 0;
            w = [];
            A = [];
            E = n + 1;
            for (r = 0; r < this.wo; r++) {
                b = this.ud[r];
                d = !0;
                for (v = 0; v < b.Bb; v++) {
                    c = b.Wa[v];
                    e = I.Ue(c.ba);
                    f = c.ba;
                    h = -I.wt(f);
                    if (d && -2686977 != c.ba)
                        if (0 != (c.Ha & T.st) && (0 != (b.la & K.Hp) ? 0 < w.length && (B = w[w.length - 1], B.push(b), B.push(v)) : (this.gc[m] = b, this.Ze[m] = v, m++)), 0 > e) {
                            if (B = t[u.dd + e] + h, this.gc[k[B]] = b, this.Ze[k[B]] = v, k[B]++, c.ba == P.qE) {
                                f = !1;
                                for (h = 0; h < b.Bb && b.Wa[h].ba != P.rE && b.Wa[h].ba != P.sE; h++);
                                h < b.Bb && (f = !0);
                                d = c.u[0];
                                if (d.ja[0].code == ba.Al && 0 == d.ja[1].code) {
                                    h = null;
                                    d = d.ja[0].vb;
                                    this.l.nu(d);
                                    for (e = 0; e < g.length; e++)
                                        if (B = g[e], p.Ac(B.name, d)) {
                                            this.l.ve || (this.l.ve = []);
                                            if (null == h) {
                                                for (z = 0; z < this.l.ve.length && (h = this.l.ve[z], !p.Ac(d, h.name)); z++);
                                                z == this.l.ve.length && (h = new jb(d), this.l.ve.push(h));
                                                h.Mx(b);
                                                h.Ar |= f
                                            }
                                            B.VG.eI = z + 1
                                        } if (null == h) {
                                        this.l.ve || (this.l.ve = []);
                                        for (z = 0; z < this.l.ve.length && (h = this.l.ve[z], !p.Ac(d, h.name)); z++);
                                        z == this.l.ve.length && (h = new jb(d), this.l.ve.push(h));
                                        h.Mx(b);
                                        h.Ar |= f
                                    }
                                }
                            }
                        } else {
                            d = 0;
                            for (e = this.Xg(c.Ta); - 1 != e; e = this.cg()) B = t[u.dd + e] + h, this.gc[k[B]] = b, this.Ze[k[B]] = v, k[B]++, q[d++] = e;
                            q[d] = -1;
                            if (-917504 == I.zk(f))
                                for (d = c.u[0], f = this.Xg(d.tb); - 1 != f; f = this.cg()) {
                                    for (d = 0; q[d] != f && -1 != q[d];) d++; - 1 == q[d] && (B = t[u.dd + f] + h, this.gc[k[B]] = b, this.Ze[k[B]] = v, k[B]++)
                                }
                        } d = !1;
                    if (-1507329 == c.ba || -1572865 == c.ba) d = !0;
                    if (-2686977 == c.ba && 0 < w.length) {
                        A.pop().hA = E;
                        B = w.pop();
                        for (c = 0; c < B.length; c += 2) this.gc[E] = B[c], this.Ze[E] = B[c + 1], E++;
                        this.gc[E] = null;
                        this.Ze[E] = null;
                        E++
                    }
                }
                if (0 != (b.la & K.ay))
                    for (B = [], w.push(B), h = 0; h < b.de; h++)
                        if (c = b.Wa[b.Bb + h], 2883583 == c.ba) {
                            0 < c.uc && (d = c.u[0], A.push(d));
                            break
                        }
            }
            this.Hk = Array(G + 1 + a / 2);
            for (oil = G = 0; oil < this.l.vf; oil++)
                if (z = this.l.W[oil], b = t[u.dd + oil], z.tw = b, 0 != (z.Xr & D.Gf)) {
                    a = 0;
                    r = this.lc[b - I.wt(-786432)];
                    if (0 != r)
                        for (; null != this.gc[r];) {
                            b = this.gc[r];
                            c = b.Wa[this.Ze[r]];
                            g = c.u[0].value;
                            v = I.XH(b);
                            for (h = b.de; 0 < h; h--, v++) c = b.Wa[v], c.ba == (524288 | z.hd & 65535) && (a |= g);
                            r++
                        }
                    z.vw = a;
                    g = z.Zc;
                    for (c = a = 0; - 1 != this.Xe[a]; a += 2)
                        if (this.Xe[a] == g)
                            if (b = this.Xe[a + 1], 0 != (b & 32768)) z.Rd |= b;
                            else {
                                for (r = 0; r < c && this.Hk[G + r] != b;) r++;
                                r == c && (this.Hk[G + c++] = b)
                            } 0 < c && (z.vm = G, this.Hk[G + c++] = -1, G += c)
                } this.Re[0] = 0;
            for (h = 1; h <= u.dd; h++) this.Re[h] = t[u.dd - h];
            for (oil = 0; oil < this.l.vf; oil++)
                if (z = this.l.W[oil], e = z.hb, 0 == (e & 2147483648)) {
                    do a = this.l.G[e], a.uv = z.tw, a.wb = z, a.bf = z.Rd, 0 != (a.ra & D.Gf) && (a.B.mx = z.vw), 0 != (a.ra & D.bk) && 0 == (a.bf & Q.Xd) && a.D.Ns(!1), 0 == (a.ra & D.Jy) && (a.ra &= ~D.ak, 0 != (a.bf & Q.kq) && 0 != (this.l.A.Vb & J.oy) && (a.ra |= D.ak), 0 != (a.bf & (Q.Xd | Q.lq)) && (a.ra |= D.ak)), e = a.Tb; while (0 == (e & 2147483648))
                } this.$C = 0 != n ? !0 : !1;
            this.Xe = null;
            this.An = !0
        },
        $s: function() {
            this.An = !1;
            this.Ze = this.gc = this.lc = this.Hk = this.$c = null
        },
        cm: function(a, b) {
            if (0 != (a & u.cu)) {
                var c;
                for (c = 0; a != this.Yg[c].hs || b != this.Yg[c].js;) c++;
                return c | 32768
            }
            for (c = 0; c < this.l.vf && this.l.W[c].Zc != a;) c++;
            return c
        },
        qr: function(a) {
            var b;
            for (b = 0; b < this.l.vf; b++)
                if (-1 != this.l.W[b].Zc && this.l.W[b].hd == a)
                    if (0 != (this.l.W[b].Xr & D.bk) && 0 == (this.l.W[b].Xr & D.bu)) break;
                    else return !1;
            return !0
        },
        Xg: function(a) {
            if (0 == (a & 32768)) return this.Qo = -1, a;
            if (-1 == a) return -1;
            this.Qo = a & 32767;
            this.Oo = 0;
            return this.cg()
        },
        cg: function() {
            var a;
            if (-1 == this.Qo || this.Oo >= this.ad[this.Qo].J.length) return -1;
            a = this.ad[this.Qo].J[this.Oo + 1];
            this.Oo += 2;
            return a
        },
        hK: function(a) {
            if (0 == (a & 32768)) return this.Ro = -1, a;
            if (-1 == a) return -1;
            this.Ro = a & 32767;
            this.Po = 0;
            return this.HC()
        },
        HC: function() {
            var a;
            if (-1 == this.Ro || this.Po >= this.ad[this.Ro].J.length) return -1;
            a = this.ad[this.Ro].J[this.Po + 1];
            this.Po += 2;
            return a
        },
        wq: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.ad)
                    for (e = this.ad[a & 32767], f = 0; f < e.J.length;) this.wq(e.J[f + 1], e.J[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.ad)
                    for (e = this.ad[c & 32767], f = 0; f < e.J.length;) this.wq(a, b, e.J[f + 1], e.J[f]), f += 2
            } else {
                a = this.l.W[a];
                if (null == a.jj) a.jj = [], a = a.jj;
                else
                    for (a = a.jj, b = 0; b < a.length; b += 2)
                        if (d == a[b]) return;
                a.push(d);
                a.push(c)
            }
        },
        ws: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.ad)
                    for (e = this.ad[a & 32767], f = 0; f < e.J.length;) this.ws(e.J[f + 1], e.J[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.ad)
                    for (e = this.ad[c & 32767], f = 0; f < e.J.length;) this.ws(a, b, e.J[f + 1], e.J[f]), f += 2
            } else if (a = this.l.W[a], c = this.l.W[c], a.hd == u.Kb && c.hd == u.Kb && (a.Tk & D.tn) != (c.Tk & D.tn) && (0 != (c.Tk & D.tn) && (a = c, b = d), d = this.Rb.tc.Ui(b), e = d.yc, c = !1, 0 != (e.Rg & D.Gf) && null != e.kf && 0 < e.kf.yo && (e = e.kf.gd[0], e.to == U.Di && (c = e.pr)), !c)) {
                a.Tk &= ~D.tn;
                for (a = a.hb; 0 == (a & 2147483648);) {
                    a = this.l.G[a];
                    if (null == a) break;
                    a.D.T &= ~A.Ei;
                    a = a.Tb
                }
                null != this.Rb.tc.Sg && this.Rb.tc.Sg[b] && d.fc(this, null)
            }
        },
        yg: function(a) {
            a = this.Rb.ca.Lb(a);
            null != a && (a.ho |= Z.Op);
            return -1
        },
        mB: function(a, b, c) {
            var d, e, f, g, h;
            for (h = 0; h < a.Bb; h++)
                if (g = a.Wa[h], 2 <= I.Ue(g.ba)) switch (e = 32768 + Q.oG, f = I.zk(g.ba), f) {
                    case -917504:
                        f = g.u[0];
                        for (d = this.Xg(g.Ta); - 1 != d; d = this.cg()) d = this.l.W[d].Zc, c == d && (e = 0, b = this.nB(b, c, f.tb));
                        if (0 == e) break;
                        for (d = this.Xg(f.tb); - 1 != d; d = this.cg()) d = this.l.W[d].Zc, c == d && (b = this.nB(b, c, g.Ta));
                        break;
                    case -786432:
                        f = g.u[0], e = 32768 + f.value;
                    case -851968:
                        for (d = this.Xg(g.Ta); - 1 != d; d = this.cg()) d = this.l.W[d].Zc, c == d && (this.Xe[b++] = c, this.Xe[b++] = e)
                }
            return b
        },
        nB: function(a, b, c) {
            for (c = this.Xg(c); - 1 != c; c = this.cg()) {
                c = this.l.W[c].Zc;
                var d;
                for (d = 0; d < a && (this.Xe[d] != b || this.Xe[d + 1] != c); d += 2);
                d == a && (this.Xe[a++] = b, this.Xe[a++] = c)
            }
            return a
        },
        UH: function(a) {
            var b, c, d, e, f, g;
            for (d = 0; d < this.wo; d++)
                for (b = this.ud[d], e = 0; e < b.Bb + b.de; e++)
                    for (c = b.Wa[e], f = 0; f < c.uc; f++) switch (c.u[f].code) {
                        case 6:
                        case 35:
                            g = c.u[f], a.yg(g.tx)
                    }
        }
    };
    K.Jp = 1;
    K.kn = 2;
    K.ut = 4;
    K.jn = 8;
    K.vt = 16;
    K.ay = 64;
    K.hn = 128;
    K.VE = 256;
    K.QM = 512;
    K.tt = 1024;
    K.dy = 2048;
    K.cy = 4096;
    K.XE = 8192;
    K.Ip = 16384;
    K.Hp = 32768;
    K.by = K.vt + K.kn + K.ut + K.jn;
    K.WE = K.VE + K.XE + K.ay + K.Hp;
    K.create = function(a) {
        var b = a.file.S,
            c = a.file.X(),
            d = new K;
        d.Bb = a.file.ub();
        d.de = a.file.ub();
        d.la = a.file.o();
        d.WH = a.file.o();
        d.Ti = a.file.s();
        d.Yl = a.file.s();
        d.Wa = Array(d.Bb + d.de);
        var e, f = 0;
        for (e = 0; e < d.Bb; e++) d.Wa[f++] = P.create(a);
        for (e = 0; e < d.de; e++) d.Wa[f++] = X.create(a);
        a.file.seek(b - c);
        return d
    };
    T.UE = 1;
    T.PM = 2;
    T.SE = 4;
    T.Gp = 8;
    T.zl = 16;
    T.st = 32;
    T.OM = 64;
    T.$x = 128;
    T.TE = T.st + T.UE + T.SE + T.Gp + T.zl;
    T.Sj = 1;
    T.rt = 32;
    kb.HG = 0;
    kb.gP = 1;
    Aa.Ny = 0;
    Aa.RO = 1;
    Aa.SO = 2;
    Aa.TO = 3;
    Aa.prototype = {
        load: function(a) {
            this.aj = a.o();
            this.Tf = a.o();
            this.Lv = a.s();
            this.Mv = a.s();
            this.Kv = a.o();
            a.o();
            this.eB = a.o();
            a.va(2)
        },
        rd: function(a, b) {
            this.Jv[a] = b
        }
    };
    ld.prototype = {
        load: function(a) {
            this.Xf = a.file.s();
            this.list = Array(this.Xf);
            var b, c = 0;
            for (b = 0; b < this.Xf; b++) this.list[b] = new Aa, this.list[b].load(a.file), this.list[b].aj + 1 > c && (c = this.list[b].aj + 1), this.list[b].vr = a.tc.Ui(this.list[b].Tf).Me;
            this.za = Array(c);
            for (b = 0; b < this.Xf; b++) this.za[this.list[b].aj] = b
        },
        DA: function(a) {
            return this.list[a]
        },
        rI: function(a) {
            return a < this.za.length ? this.list[this.za[a]] : null
        },
        Ao: function() {
            var a;
            if (this.ur < this.Xf) {
                do
                    if (a = this.list[this.ur++], 2 <= a.vr) return a; while (this.ur < this.Xf)
            }
            return null
        },
        Wq: function() {
            this.ur = 0;
            return this.Ao()
        }
    };
    W.Bt = 1;
    W.Ct = 2;
    W.ZM = 4;
    W.yt = 16;
    W.zt = 32;
    W.At = 64;
    W.$M = 65536;
    W.Kp = 131072;
    W.aN = 262144;
    W.prototype = {
        load: function(a) {
            this.Ja = a.s();
            this.Ij = a.MC();
            this.Kj = a.MC();
            this.Pr = a.s();
            this.Rr = a.s();
            a.Ob();
            this.dz = this.Ja;
            this.gz = this.Ij;
            this.hz = this.Kj;
            this.ez = this.Pr;
            this.fz = this.Rr
        },
        reset: function() {
            this.Ja = this.dz;
            this.Ij = this.gz;
            this.Kj = this.hz;
            this.Pr = this.ez;
            this.Rr = this.fz;
            this.x = this.y = this.rk = this.tk = this.ts = this.us = 0;
            this.yq = this.Vk = this.ym = this.xm = null;
            this.nx(0);
            this.scale = 1;
            this.kD(1);
            this.lD(1);
            this.qD(this.app.qa / 2);
            this.tD(this.app.ya / 2);
            this.pD(this.app.qa / 2);
            this.sD(this.app.ya / 2);
            this.uD(!1);
            this.Ja & W.Kp ? (this.ne = !0, this.gr()) : (this.ne = !1, this.show())
        },
        IH: function() {
            this.nc.zK()
        },
        TG: function(a) {
            null == this.xm && (this.xm = new N);
            this.xm.add(a)
        },
        Xy: function(a) {
            null == this.ym && (this.ym = new N);
            this.ym.add(a)
        },
        uq: function(a) {
            null == this.yq && (this.yq = new N);
            this.yq.add(a)
        },
        xH: function(a, b) {
            this.nc = new Ea;
            this.nc.x = a;
            this.nc.y = b;
            this.Nb = new Ea;
            this.Nb.x = a;
            this.Nb.y = b;
            this.Pa = new Ea;
            this.Pa.x = a;
            this.Pa.y = b;
            this.nx(0);
            this.scale = 1;
            this.kD(1);
            this.lD(1);
            this.qD(this.app.qa / 2);
            this.tD(this.app.ya / 2);
            this.pD(this.app.qa / 2);
            this.sD(this.app.ya / 2);
            this.uD(!1);
            this.app.qe.me(this.nc);
            this.app.qe.me(this.Nb);
            this.app.qe.me(this.Pa);
            this.YK()
        },
        nx: function(a) {
            this.angle = a;
            this.nc.angle = a;
            this.Nb.angle = a;
            this.Pa.angle = a
        },
        kD: function(a) {
            this.qc = a;
            this.nc.qc = a;
            this.Nb.qc = a;
            this.Pa.qc = a
        },
        lD: function(a) {
            this.rc = a;
            this.nc.rc = a;
            this.Nb.rc = a;
            this.Pa.rc = a
        },
        qD: function(a) {
            this.Ga = a;
            this.nc.Ga = a;
            this.Nb.Ga = a;
            this.Pa.Ga = a
        },
        tD: function(a) {
            this.Ca = a;
            this.nc.Ca = a;
            this.Nb.Ca = a;
            this.Pa.Ca = a
        },
        pD: function(a) {
            this.up = a = this.app.qa - a;
            this.nc.up = a;
            this.Nb.up = a;
            this.Pa.up = a
        },
        sD: function(a) {
            this.wp = a = this.app.ya - a;
            this.nc.wp = a;
            this.Nb.wp = a;
            this.Pa.wp = a
        },
        uD: function(a) {
            this.tg = a;
            this.nc.tg = a;
            this.Nb.tg = a;
            this.Pa.tg = a
        },
        CK: function(a, b) {
            this.nc.x = a;
            this.nc.y = b;
            this.Nb.x = a;
            this.Nb.y = b;
            this.Pa.x = a;
            this.Pa.y = b;
            this.show()
        },
        YK: function() {
            this.Ja & W.yt ? this.show() : this.gr()
        },
        gr: function() {
            this.Ja &= ~W.Kp;
            this.ne && (this.nc.visible = !1, this.Nb.visible = !1, this.ne = this.Pa.visible = !1)
        },
        show: function() {
            0 == this.ne && (this.nc.visible = !0, this.Nb.visible = !0, this.ne = this.Pa.visible = !0)
        },
        Rz: function() {
            null != this.nc && (this.app.qe.removeChild(this.nc), this.nc = null);
            null != this.Nb && (this.app.qe.removeChild(this.Nb), this.Nb = null);
            null != this.Pa && (this.app.qe.removeChild(this.Pa), this.Pa = null)
        },
        SG: function(a, b, c, d) {
            var e = new aa;
            e.left = a;
            e.top = b;
            e.right = c;
            e.bottom = d;
            null == this.Vk && (this.Vk = new N);
            this.Vk.add(e)
        },
        sI: function(a, b) {
            a += this.x;
            b += this.y;
            if (null != this.Vk) {
                var c, d;
                for (c = 0; c < this.Vk.size(); c++)
                    if (d = this.Vk.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
            }
            return null
        },
        Fj: function(a, b, c, d, e) {
            b = b + this.x - a.Ga;
            c = c + this.y - a.Ca;
            var f = b + a.width,
                g = c + a.height,
                h = c;
            0 != d && (h = g - d);
            var q, k;
            k = e == ra.Bp ? this.xm : this.ym;
            if (null == k) return null;
            for (e = 0; e < k.size(); e++)
                if (q = k.get(e), q.x < f && q.x + q.width > b && q.y < g && q.y + q.height > h && q.Fj(a, b, c, d)) return q;
            return null
        },
        Vs: function(a, b, c, d, e, f) {
            f = f == ra.Bp ? this.xm : this.ym;
            if (null == f) return null;
            a += this.x;
            b += this.y;
            c += this.x;
            d += this.y;
            0 != e && (b = d - e);
            for (e = 0; e < f.size(); e++) {
                var g = f.get(e);
                if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.Vs(a, b, c, d)) return g
            }
            return null
        }
    };
    ia.prototype = {
        Ab: function(a, b, c) {
            if (null != this.kJ)
                if (this.type == u.eG) {
                    var d = this.ie.yc,
                        e;
                    switch (d.ej) {
                        case 1:
                            switch (d.Yh) {
                                case 1:
                                    a.Cd(b + this.x, c + this.y, this.width, this.height, this.lk, this.ae, this.be);
                                    break;
                                case 2:
                                    a.Gc(b + this.x, c + this.y, this.width, this.height, this.lk, this.ae, this.be);
                                    break;
                                case 3:
                                    a.$w(b + this.x, c + this.y, this.width, this.height, this.lk, this.ae, this.be)
                            }
                            break;
                        case 2:
                            switch (d.Yh) {
                                case 1:
                                    a.Cd(b + this.x, c + this.y, this.width, this.height, this.lk, this.ae, this.be);
                                    break;
                                case 2:
                                    a.Zw(b + this.x, c + this.y, this.width, this.height, this.lk, this.Ku, 0 != this.QA, this.ae, this.be);
                                    break;
                                case 3:
                                    a.QC(b + this.x, c + this.y, this.width, this.height, this.lk, this.Ku, 0 != this.QA, this.ae, this.be)
                            }
                            break;
                        case 3:
                            switch (d.Yh) {
                                case 2:
                                    e = this.app.ca.Lb(d.Xh);
                                    a.RC(e, b + this.x, c + this.y, this.width, this.height, this.ae, this.be);
                                    break;
                                case 3:
                                    e = this.app.ca.Lb(d.Xh), a.SC(e, b + this.x, c + this.y, this.width, this.height, this.ae, this.be)
                            }
                    }
                    if (0 < this.borderWidth) switch (d.Yh) {
                        case 1:
                            var f = e = 0,
                                g = this.width,
                                h = this.height;
                            0 != (d.Go & Ma.MF) && (e += g, g = -g);
                            0 != (d.Go & Ma.NF) && (f += h, h = -h);
                            a.Cd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + h, this.borderColor, this.borderWidth);
                            break;
                        case 2:
                            a.vs(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
                            break;
                        case 3:
                            a.PC(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
                    }
                } else this.type == u.dG ? a.Oe(this.fd, b + this.x + this.fd.Ga, c + this.y + this.fd.Ca, 0, 1, 1, this.ae, this.be) : null != this.K && this.K.Ab(a, b, c);
            else a.Oe(this.fd, b + this.x + this.fd.Ga, c + this.y + this.fd.Ca, 0, 1, 1, this.ae, this.be)
        },
        gD: function(a, b) {
            this.ae = a;
            this.be = b
        },
        rd: function(a, b) {
            b.nc.me(this);
            this.type == u.Dy && b.uq(this);
            switch (this.jf) {
                case ca.hq:
                    b.TG(this);
                    b.Xy(this);
                    break;
                case ca.qg:
                    b.Xy(this);
                    break;
                case ca.au:
                    b.SG(this.x, this.y, this.x + this.width, this.y + this.height)
            }
        },
        Fj: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    return e = this.height, this.jf == ca.qg && (e = J.Bl), a.xx(b, c, d, this.x, this.y, this.width, e, 0);
                case 1:
                    if (0 != this.Ql) return !0;
                    e = F.Tj;
                    this.jf == ca.qg && (e = F.Uj);
                    e = this.fd.Qf(e, 0, 1, 1);
                    return a.Fj(b, c, d, e, this.x, this.y, 0);
                case 11:
                    if (0 != this.Ql) return !0;
                    e = F.Tj;
                    this.jf == ca.qg && (e = F.Uj);
                    e = this.fd.Qf(e, 0, 1, 1);
                    return a.Fj(b, c, d, e, this.x, this.y, 0)
            }
            return !1
        },
        Vs: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    if (this.jf == ca.qg) {
                        a = this.y + Math.min(this.height, J.Bl);
                        if (this.y < d && a > b) return !0;
                        break
                    }
                    return !0;
                case 1:
                    if (0 != this.Ql) return !0;
                    e = F.Tj;
                    this.jf == ca.qg && (e = F.Uj);
                    e = this.fd.Qf(e, 0, 1, 1);
                    return e.xx(this.x, this.y, 0, a, b, c, d, 0);
                case 11:
                    if (0 != this.Ql) return !0;
                    e = F.Tj;
                    this.jf == ca.qg && (e = F.Uj);
                    e = this.fd.Qf(e, 0, 1, 1);
                    return e.xx(this.x, this.y, 0, a, b, c, d, 0)
            }
            return !1
        }
    };
    u.LO = 1;
    u.JO = 2;
    u.NO = 4;
    u.MO = 8;
    u.jq = 16;
    u.mG = 32;
    u.KO = 64;
    u.IO = 1;
    u.HO = 2;
    u.My = 4;
    u.dd = 7;
    u.Ey = -7;
    u.fO = -6;
    u.eO = -5;
    u.sn = -4;
    u.gq = -3;
    u.hO = -2;
    u.iO = -1;
    u.eG = 0;
    u.dG = 1;
    u.Kb = 2;
    u.Dh = 3;
    u.Fy = 4;
    u.Gy = 5;
    u.Cy = 6;
    u.rn = 7;
    u.gO = 8;
    u.Ay = 9;
    u.dO = 10;
    u.Dy = 11;
    u.By = 10;
    u.ng = 32;
    u.cu = 32768;
    u.prototype = {
        Ov: function(a) {
            this.Ho = a.o();
            this.Me = a.o();
            this.bi = a.o();
            a.va(2);
            this.nw = a.s();
            this.ow = a.s()
        },
        load: function(a) {
            a.seek(this.lC);
            switch (this.Me) {
                case 0:
                    this.yc = new Ma;
                    break;
                case 1:
                    this.yc = new nd;
                    break;
                default:
                    this.yc = new D
            }
            this.yc.load(a, this.Me);
            this.mC = 0
        },
        nL: function() {
            this.yc = null
        },
        fc: function(a, b) {
            this.yc.fc(a, b)
        }
    };
    md.prototype = {
        fi: function(a) {
            this.ij = a.s();
            this.yb = Array(this.ij);
            var b;
            for (b = this.Tg = 0; b < this.ij; b++)
                for (var c = 0, d; 32639 != c;)
                    if (c = a.o(), a.o(), d = a.s(), 0 != d) {
                        d = a.S + d;
                        switch (c) {
                            case 17476:
                                this.yb[b] = new u;
                                this.yb[b].Ov(a);
                                this.yb[b].Ho >= this.Tg && (this.Tg = this.yb[b].Ho + 1);
                                break;
                            case 17477:
                                this.yb[b].pw = a.Ob();
                                break;
                            case 17478:
                                this.yb[b].lC = a.S
                        }
                        a.seek(d)
                    } this.ci = Array(this.Tg);
            for (b = 0; b < this.ij; b++) this.ci[this.yb[b].Ho] = b;
            this.Io = Array(this.Tg);
            this.Sg = Array(this.Tg);
            for (a = 0; a < this.Tg; a++) this.Io[a] = 0, this.Sg[a] = 0
        },
        Ui: function(a) {
            return this.yb[this.ci[a]]
        },
        BK: function() {
            var a;
            for (a = 0; a < this.ij; a++) this.yb[a].bi &= ~u.jq
        },
        VK: function(a) {
            this.yb[this.ci[a]].bi |= u.jq
        },
        BA: function() {
            var a;
            for (a = 0; a < this.ij; a++)
                if (0 != (this.yb[a].bi & u.jq)) return this.Nq = a, this.yb[a];
            return null
        },
        GA: function() {
            if (this.Nq < this.ij) {
                var a;
                for (a = this.Nq + 1; a < this.ij; a++)
                    if (0 != (this.yb[a].bi & u.jq)) return this.Nq = a, this.yb[a]
            }
            return null
        },
        tf: function() {
            var a;
            for (a = 0; a < this.Tg; a++) this.Io[a] = 0
        },
        Cj: function(a) {
            this.Io[a] = 1
        },
        load: function(a) {
            var b;
            for (b = 0; b < this.Tg; b++)
                if (0 != this.Io[b]) {
                    if (0 == this.Sg[b] || 0 != this.Sg[b] && 0 != (this.yb[this.ci[b]].mC & u.mG)) this.yb[this.ci[b]].load(a), this.Sg[b] = 1
                } else 0 != this.Sg[b] && (this.yb[this.ci[b]].nL(), this.Sg[b] = 0);
            this.tf()
        },
        fc: function(a, b) {
            var c;
            for (c = 0; c < this.Tg; c++) 0 != this.Sg[c] && this.yb[this.ci[c]].fc(a, b)
        }
    };
    ca.Hy = 0;
    ca.hq = 1;
    ca.qg = 2;
    ca.au = 3;
    ca.fG = 4;
    nd.prototype = {
        load: function(a) {
            a.va(4);
            this.hC = a.o();
            this.dC = a.o();
            this.eC = a.s();
            this.fC = a.s();
            this.Xh = a.o()
        },
        fc: function(a) {
            null != a && (a = a.yg(this.Xh), -1 != a && (this.Xh = a))
        }
    };
    Ma.MF = 1;
    Ma.NF = 2;
    Ma.prototype = {
        load: function(a) {
            a.va(4);
            this.hC = a.o();
            this.dC = a.o();
            this.eC = a.s();
            this.fC = a.s();
            this.Ur = a.o();
            this.Tr = a.jd();
            this.Yh = a.o();
            this.ej = a.o();
            if (1 == this.Yh) this.Go = a.o();
            else switch (this.ej) {
                case 1:
                    this.Qg = this.tm = a.jd();
                    break;
                case 2:
                    this.Qg = a.jd();
                    this.tm = a.jd();
                    this.Fo = a.s();
                    break;
                case 3:
                    this.Xh = a.o()
            }
        },
        fc: function(a) {
            3 == this.ej && null != a && (a = a.yg(this.Xh), -1 != a && (ocImage = a))
        }
    };
    D.rO = 1;
    D.qO = 2;
    D.iG = 4;
    D.Ly = 8;
    D.Gf = 16;
    D.$j = 32;
    D.tO = 64;
    D.vO = 128;
    D.lG = 256;
    D.bk = 512;
    D.sO = 1024;
    D.kG = 2048;
    D.bu = 4096;
    D.Ky = 8192;
    D.ak = 16384;
    D.Jy = 32768;
    D.uO = 65536;
    D.Iy = 131072;
    D.jG = 1048576;
    D.jO = 1;
    D.pO = 2;
    D.tn = 4;
    D.iq = 8;
    D.lO = 4;
    D.kO = 48;
    D.oO = 16;
    D.nO = 32;
    D.mO = 48;
    D.gG = 64;
    D.hG = 128;
    D.xO = 1;
    D.EO = 2;
    D.DO = 4;
    D.FO = 8;
    D.CO = 16;
    D.zO = 32;
    D.wO = 64;
    D.BO = 128;
    D.AO = 256;
    D.GO = 512;
    D.yO = 1024;
    D.prototype = ca;
    D.prototype = {
        load: function(a, b) {
            var c = a.S;
            this.kw = Array(8);
            var d;
            a.va(4);
            a.va(2);
            var e = a.o();
            a.va(2);
            var f = a.o(),
                g = a.o(),
                h = a.o();
            this.Rg = a.s();
            for (d = 0; 8 > d; d++) this.kw[d] = a.X();
            a.o();
            var q = a.o(),
                k = a.o();
            this.fj = a.o();
            var l = a.o();
            this.Ec = a.s();
            a.jd();
            d = a.s();
            var n = a.s();
            this.Eo = this.um = null;
            0 != h && (a.seek(c + h), this.kf = new ie, this.kf.load(a));
            0 != q && (a.seek(c + q), this.Zh = new ee, this.Zh.load(a, 0 != (this.fj & D.hG)));
            0 != k && (a.seek(c + k), this.gj = new de, this.gj.load(a));
            0 != g && (a.seek(c + g), this.dj = new Pa, this.dj.load(a));
            0 != f && (a.seek(c + f), this.Yc = new pd, this.Yc.load(a));
            0 != l && (a.seek(c + l), f = a.s(), a.va(4), this.jC = a.s(), a.s(), this.iC = a.s(), 0 != f - 20 && (this.gC = a.S));
            0 != d && (a.seek(c + d), this.um = new sa, this.um.load(a));
            0 != n && (a.seek(c + n), this.Eo = new sa, this.Eo.load(a));
            if (0 != e) switch (a.seek(c + e), b) {
                case 3:
                case 4:
                    this.Yc = new rd;
                    this.Yc.load(a);
                    break;
                case 5:
                case 6:
                case 7:
                    this.lb = new ka;
                    this.lb.load(a);
                    break;
                case 8:
                    this.Yc = new qd;
                    this.Yc.load(a);
                    this.Rg &= ~(D.bk | D.bu | D.iG);
                    break;
                case 9:
                    this.Yc = new od, this.Yc.load(a)
            }
        },
        fc: function(a, b) {
            null != this.dj && this.dj.fc(a);
            null != this.Yc && this.Yc.fc(a, b);
            null != this.lb && this.lb.fc(a, b)
        }
    };
    od.prototype = {
        load: function(a) {
            a.va(4);
            this.$h = a.s();
            this.ai = a.s();
            a.o();
            this.kC = a.o();
            this.Qd = a.s();
            a.va(8);
            this.lw = a.Ob()
        },
        fc: function() {}
    };
    pd.prototype = {
        load: function(a) {
            a.va(2);
            this.Hz = a.s();
            this.Jz = a.s();
            this.Iz = a.s()
        },
        fc: function() {}
    };
    ka.wM = 0;
    ka.vM = 1;
    ka.FE = 2;
    ka.EE = 3;
    ka.uM = 4;
    ka.xM = 5;
    ka.kt = 256;
    ka.prototype = {
        load: function(a) {
            a.va(4);
            this.$h = a.s();
            this.ai = a.s();
            this.mw = a.o();
            this.lf = a.o();
            this.Rk = a.o();
            this.hj = a.o();
            switch (this.lf) {
                case 1:
                case 4:
                    this.nm = a.o();
                    this.frames = Array(this.nm);
                    var b;
                    for (b = 0; b < this.nm; b++) this.frames[b] = a.o();
                    break;
                case 2:
                case 3:
                case 5:
                    if (this.Ur = a.o(), this.Tr = a.jd(), this.Yh = a.o(), this.ej = a.o(), 1 == this.Yh) this.Go = a.o();
                    else switch (this.ej) {
                        case 1:
                            this.Qg = a.jd();
                            break;
                        case 2:
                            this.Qg = a.jd(), this.tm = a.jd(), this.Fo = a.s()
                    }
            }
        },
        fc: function(a, b) {
            switch (this.lf) {
                case 1:
                case 4:
                    var c;
                    for (c = 0; c < this.nm; c++) null != a && a.yg(this.frames[c]);
                    break;
                case 5:
                    null != b && b.yg(this.hj)
            }
        }
    };
    qd.prototype = {
        load: function(a) {
            a.s();
            a.s();
            this.Qd = a.s();
            a.jd();
            this.$h = a.s();
            this.ai = a.s();
            a.va(4);
            var b = a.s();
            this.text = a.Ob(b)
        },
        fc: function() {}
    };
    pa.jP = 0;
    pa.iP = 1;
    pa.kP = 2;
    pa.lP = 4;
    pa.hP = 15;
    pa.IG = 256;
    pa.Ry = 512;
    pa.prototype = {
        load: function(a) {
            this.an = a.X();
            this.rp = a.o();
            this.Ax = a.jd();
            this.si = a.Ob()
        },
        fc: function(a, b) {
            null != b && b.yg(this.an)
        }
    };
    rd.prototype = {
        load: function(a) {
            var b = a.S;
            a.va(4);
            this.Bw = a.s();
            this.Cw = a.s();
            this.Uk = a.s();
            this.Wb = Array(this.Uk);
            var c = Array(this.Uk),
                d;
            for (d = 0; d < this.Uk; d++) c[d] = a.s();
            for (d = 0; d < this.Uk; d++) this.Wb[d] = new pa, a.seek(b + c[d]), this.Wb[d].load(a)
        },
        fc: function(a, b) {
            var c;
            for (c = 0; c < this.Uk; c++) this.Wb[c].fc(a, b)
        }
    };
    L.Be = 1;
    L.Np = 2;
    L.uN = 4;
    L.yi = 8;
    L.zi = 16;
    L.vF = 32;
    L.ky = 64;
    L.vh = 8192;
    L.tN = 16384;
    L.vN = 32768;
    L.prototype = {
        px: function(a, b) {
            if (this.b.Gb != a || this.b.Hb != b) {
                0 <= a && (this.b.Gb = a);
                0 <= b && (this.b.Hb = b);
                this.b.O = !0;
                var c = this.c.h.ca.Bk(this.b.Ra, this.b.ib, this.b.Gb, this.b.Hb);
                null != c && (this.N = c.width, this.L = c.height, this.ma = c.Ga, this.na = c.Ca)
            }
        },
        Z: function() {},
        handle: function() {},
        Hh: function() {},
        Fz: function() {},
        display: function() {},
        Cb: function() {},
        jI: function() {
            return null
        },
        gD: function() {},
        ou: function() {},
        Ol: function() {},
        Si: function() {
            return 0
        },
        tl: function() {},
        Ek: function() {},
        Ym: function() {},
        ed: function() {
            return -1
        },
        bm: function() {
            return 0
        },
        xe: function() {},
        Ki: function() {},
        $l: function() {}
    };
    sd.prototype = p.extend(new L, {
        handle: function() {
            this.D.handle();
            this.b.O && (this.b.O = !1)
        },
        ou: function(a, b, c, d, e) {
            this.Ba = this.c.A.Ya[d];
            this.xa = e;
            this.Ba.Pa.me(this)
        },
        Ab: function(a, b, c) {
            if (this.xa && (0 == (this.V & L.yi) || this.D.gh)) {
                var d = this.D.Xb;
                this.D.T & A.eu && (d |= A.Ox);
                var e = this.c.h.ca.Lb(this.b.Ra);
                e && (this.wl ? a.sj(this.wl, b + this.w - this.c.ia + this.Ba.x - e.Ga, c + this.v - this.c.ka + this.Ba.y - e.Ca, this.wl.width * this.b.Gb, this.wl.height * this.b.Hb, d, this.D.Yb) : a.Oe(e, b + this.w - this.c.ia + this.Ba.x, c + this.v - this.c.ka + this.Ba.y, this.b.ib, this.b.Gb, this.b.Hb, d, this.D.Yb))
            }
        },
        Si: function() {
            return this.Ba.Pa.removeChild(this)
        },
        tl: function() {
            this.xa = !0
        },
        Ek: function() {
            this.xa = !1
        },
        ed: function() {
            return this.Ba.Pa.ed(this)
        },
        bm: function() {
            return this.Ba.Pa.children.length
        },
        xe: function(a) {
            a >= this.Ba.Pa.children.length && (a = this.Ba.Pa.children.length);
            0 > a && (a = 0);
            this.Ba.Pa.xe(this, a)
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        }
    });
    R.Rx = 1;
    R.hE = 2;
    R.jE = 4;
    R.qM = 8;
    R.kE = 16;
    R.oM = 32;
    R.bM = 64;
    R.sM = 128;
    R.aM = 256;
    R.tM = 512;
    R.rM = 1024;
    R.eM = 2048;
    R.Ap = 4096;
    R.dM = 8192;
    R.Qx = 16384;
    R.kM = 32768;
    R.fE = 65536;
    R.lM = 131072;
    R.cM = 262144;
    R.iE = 524288;
    R.mM = 1048576;
    R.gE = 2097152;
    R.jM = 12582912;
    R.gM = 0;
    R.iM = 4194304;
    R.hM = 8388608;
    R.fM = 12582912;
    R.pM = 16777216;
    R.nM = 33554432;
    R.prototype = p.extend(new L, {
        BD: function(a, b, c) {
            b = a.Yc;
            this.N = b.$h;
            this.L = b.ai;
            this.Qd = b.Qd;
            0 != (this.Qd & R.kE) && (this.Qd |= R.fE); - 1 == c && (c = 0, 0 != (this.Qd & R.Qx) && (c = b.kC));
            null == b.lw || 0 != b.lw.length || 0 == (this.Qd & R.Qx) || c >= this.c.h.Of || c == this.c.h.Ce || (this.ne = 0 != (a.fj & D.iq) ? !0 : !1, this.Oc = new Ea, this.Oc.x = this.w - this.c.ia, this.Oc.y = this.v - this.c.ka, this.c.h.qe.me(this), this.zw = this.w, this.Aw = this.v, this.C = new l(this.c.h, this.c.h.file, this.c.h.path, !0), this.C.hD(this.c.h, c, this.Qd, this.Oc, this.N, this.L), this.C.digest(), 0 != (this.Qd & R.Ap) && null == this.c.h.Mg && (this.c.h.Mg = this, this.c.h.H.pause()), this.C.ux(), this.C.Qs((this.c.h.Jj + this.Oc.x) * this.c.h.qc, (this.c.h.Lj + this.Oc.y) * this.c.h.rc), this.C.mp(), this.c.h.Jb.push(this.C))
        },
        Z: function(a) {
            this.BD(a, !0, -1)
        },
        handle: function() {
            this.B.move();
            if (null != this.C) {
                if (this.zw != this.w || this.Aw != this.v) this.Oc.x = this.w - this.c.ia, this.Oc.y = this.v - this.c.ka, this.zw = this.w, this.Aw = this.v, this.C.Qs(this.Oc.x * this.c.h.qc, this.Oc.y * this.c.h.rc), this.oL();
                0 == this.C.mp() ? (this.Pq(), 0 != (this.Qd & R.Ap) && null != this.C.Ea && this.C.Ea.Mg == this && (this.C.Ea.Mg = null, this.C.Ea.H.resume()), this.C = null) : (this.pC = this.level, this.level = this.C.Ce)
            }
        },
        Ab: function(a) {
            this.ne && null != this.C && this.C.aA(a, this.Oc.x, this.Oc.y)
        },
        Cb: function() {
            if (null != this.C) {
                switch (this.C.eb) {
                    case 3:
                        this.C.Ln()
                }
                this.Pq();
                this.C.eA();
                0 != (this.Qd & R.Ap) && null != this.C.Ea && this.C.Ea.Mg == this && (this.C.Ea.Mg = null, this.C.Ea.H.resume());
                this.C = null
            }
        },
        Pq: function() {
            var a;
            for (a = 0; a < this.c.h.Jb.length; a++)
                if (this.c.h.Jb[a] == this.C) {
                    this.c.h.Jb.splice(a, 1);
                    break
                } this.c.h.qe.removeChild(this.Oc)
        },
        gR: function() {
            if (null != this.C) {
                if (null != this.C.H) {
                    this.C.H.zb = k.qy;
                    return
                }
                this.Cb(!0)
            }
            this.BD(this.P, !1, -1)
        },
        nQ: function() {
            null != this.C && (null != this.C.H && (this.C.H.zb = k.Qp), 0 != (this.Qd & R.Ap) && null != this.C.Ea && this.C.Ea.Mg == this && (this.C.Ea.Mg = null, this.C.Ea.H.resume()))
        },
        gr: function() {
            this.ne = !1
        },
        show: function() {
            this.ne = !0
        },
        RQ: function(a) {
            null != this.C && null != this.C.H && 0 <= a && 4096 > a && (this.C.H.zb = k.Rp, this.C.H.Um = 32768 | a)
        },
        Eb: function() {
            null != this.C && null != this.C.H && (this.C.H.zb = k.Ht)
        },
        YQ: function() {
            null != this.C && null != this.C.H && (this.C.H.zb = k.It)
        },
        hR: function() {
            null != this.C && null != this.C.H && (this.C.H.zb = k.PF)
        },
        pause: function() {
            null != this.C && null != this.C.H && this.C.H.pause()
        },
        resume: function() {
            null != this.C && null != this.C.H && this.C.H.resume()
        },
        pR: function(a, b) {
            null != this.C && this.C.SK(a, b)
        },
        oR: function(a, b) {
            null != this.C && this.C.RK(a, b)
        },
        XI: function() {
            return null != this.C && null != this.C.H ? 0 != this.C.H.dg : !1
        },
        NP: function() {
            return null == this.C
        },
        QQ: function() {
            return this.ne
        },
        sQ: function() {
            return this.level != this.pC
        },
        DQ: function(a) {
            return null != this.C ? this.C.CA(a) : ""
        },
        EQ: function(a) {
            return null != this.C ? this.C.jv(a) : 0
        },
        BQ: function() {
            return this.level + 1
        },
        qx: function() {},
        ox: function() {},
        TP: function() {
            null != this.C && this.ne && (hoAdRunHeader.h.$J.removeChild(this), hoAdRunHeader.h.$J.me(this))
        },
        oL: function() {
            if (null != this.C && null != this.C.H) {
                var a = this.C.H,
                    b = 0,
                    c;
                for (c = 0; c < a.ob; c++) {
                    for (; null == a.G[b];) b++;
                    var d = a.G[b];
                    b++;
                    d.$l()
                }
            }
        },
        Ki: function() {
            null != this.C && (this.C.Qs((this.c.h.Jj + this.Oc.x) * this.c.h.qc, (this.c.h.Lj + this.Oc.y) * this.c.h.rc), this.C.Fm())
        }
    });
    td.prototype = {
        Z: function() {
            this.Hb = this.Gb = 1;
            this.ib = 0;
            this.Fc = -1
        },
        Cb: function() {}
    };
    fa.Yx = 15;
    fa.zE = 240;
    fa.AE = 4;
    fa.xE = 61440;
    fa.yE = 12;
    fa.BE = 512;
    fa.DE = 1024;
    fa.CE = 2048;
    fa.prototype = p.extend(new L, {
        Z: function() {
            this.Lc = -1;
            this.gp = this.Kc = 0;
            this.N = this.L = 1;
            if (null == this.P.lb) this.L = this.ld = this.N = this.kd = 1;
            else {
                var a = this.P.lb;
                this.N = this.kd = a.$h;
                this.L = this.ld = a.ai;
                this.Hd = a.Rk;
                this.type = a.lf;
                switch (this.type) {
                    case 5:
                        var b = this.Lc; - 1 == b && (b = a.hj);
                        this.font = this.c.h.Sb.Pf(b);
                        this.Md = this.font.af();
                        this.Kc = a.Qg;
                        break;
                    case 2:
                    case 3:
                        this.Kc = a.Qg, this.gp = a.tm
                }
            }
            a = this.P.Yc;
            this.pb = a.Jz;
            this.Sc = a.Iz;
            this.ua = a.Hz;
            this.Li = !1
        },
        Cb: function() {},
        handle: function() {
            this.D.handle();
            this.b.O && (this.b.O = !1)
        },
        Bg: function() {
            var a = this.P.lb;
            if (5 == this.type) {
                var b = rsFont; - 1 == b && (b = a.hj);
                return this.c.h.Sb.br(b)
            }
            return null
        },
        sl: function(a, b) {
            5 == this.type && (this.Lc = this.c.h.Sb.xq(a), this.font = this.c.h.Sb.Pf(this.Lc), this.Md = this.font.af(), null != b && (this.N = this.kd = b.right - b.left, this.L = this.ld = b.bottom - b.top), this.kb())
        },
        ar: function() {
            return this.Kc
        },
        Os: function(a) {
            this.Kc = a;
            this.kb()
        },
        Mu: function(a) {
            0 != this.Li || p.Dv(a) || (this.Li = !0)
        },
        En: function(a) {
            0 == this.Li ? (a = p.Ld(a), a < this.pb && (a = this.pb), a > this.Sc && (a = this.Sc), a != Math.round(this.ua) && (this.ua = a, this.b.O = !0, this.kb())) : (a < this.pb && (a = this.pb), a > this.Sc && (a = this.Sc), a != this.ua && (this.ua = a, this.b.O = !0, this.kb()))
        },
        uH: function(a) {
            this.Mu(a);
            this.En(this.ua + a)
        },
        vH: function(a) {
            this.Mu(a);
            this.En(this.ua - a)
        },
        gQ: function(a) {
            this.pb = a;
            this.En(this.ua)
        },
        fQ: function(a) {
            this.Sc = a;
            this.En(this.ua)
        },
        dQ: function(a) {
            this.Kc = a;
            this.kb()
        },
        eQ: function(a) {
            this.gp = a;
            this.kb()
        },
        cQ: function() {
            return this.ua
        },
        bQ: function() {
            return this.pb
        },
        aQ: function() {
            return this.Sc
        },
        ZP: function() {
            return this.Kc
        },
        $P: function() {
            return this.gp
        },
        Ol: function(a, b, c, d, e, f) {
            null != this.P.lb && 1 != this.Oa && (this.Oa = !0, this.cz = d, this.xa = e, this.Ba = this.c.A.Ya[c], this.oa = this.cz ? this.Ba.Nb : this.Ba.Pa, 0 > f ? this.oa.me(this) : this.oa.vq(this, f), 5 != this.type && this.kb())
        },
        Si: function() {
            if (null == this.P.lb || 0 == this.Oa) return -1;
            this.Oa = !1;
            var a = this.oa.ed(this);
            this.oa.removeChild(this);
            return a
        },
        ed: function() {
            return this.Oa ? this.oa.ed(this) : -1
        },
        bm: function() {
            return this.Oa ? this.oa.children.length : -1
        },
        xe: function(a) {
            this.Oa && this.oa.xe(this, a)
        },
        tl: function() {
            null != this.P.lb && 0 == this.xa && (this.xa = !0, this.kb())
        },
        Ek: function() {
            null != this.P.lb && 1 == this.xa && (this.xa = !1)
        },
        Hh: function() {
            this.$d || this.kb()
        },
        kb: function() {
            var a, b = this.P.lb;
            switch (this.type) {
                case 4:
                    this.fh = this.Sc <= this.pb ? 0 : Math.floor((this.ua - this.pb) * b.nm / (this.Sc - this.pb));
                    this.fh = Math.min(this.fh, b.nm - 1);
                    a = this.c.h.ca.Lb(b.frames[Math.max(this.fh, 0)]);
                    this.N = a.width;
                    this.L = a.height;
                    this.ma = a.Ga;
                    this.na = a.Ca;
                    break;
                case 2:
                case 3:
                    a = this.kd;
                    b.lf == ka.FE && (a = this.ld);
                    this.fh = this.Sc <= this.pb ? 0 : (this.ua - this.pb) * a / (this.Sc - this.pb);
                    b.lf == ka.EE ? (this.na = 0, this.L = this.ld, this.N = this.fh, this.ma = 0 != (b.Rk & ka.kt) ? this.fh - this.kd : 0) : (this.ma = 0, this.N = this.kd, this.L = this.fh, this.na = 0 != (b.Rk & ka.kt) ? this.fh - this.ld : 0);
                    break;
                case 1:
                    a = 0 == this.Li ? p.Xi(this.ua, this.Hd) : p.Xu(this.ua, this.Hd);
                    var c, d, e, f = 0,
                        g = 0;
                    for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.ca.Lb(e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
                    this.ma = f;
                    this.na = g;
                    this.N = f;
                    this.L = g;
                    break;
                case 5:
                    a = 0 == this.Li ? p.Xi(this.ua, this.Hd) : p.Xu(this.ua, this.Hd), this.ma = b = null != this.mb ? this.mb.measureText(a, this.font) : (new ma(this.c.h, 16, 16)).measureText(a, this.font), this.na = this.ld / 2 + this.Md / 2, this.N = b, this.L = this.Md, null == this.mb ? this.mb = new ma(this.c.h, this.N, this.L) : (this.N > this.mb.width || this.L > this.mb.height) && this.mb.resize(this.N, this.L), this.mb.Ss(a, p.Ep | p.Fp, new aa(0, 0, 1E3, 1E3), this.font, this.Kc)
            }
            this.$d = !0
        },
        Ab: function(a, b, c) {
            if (this.xa && this.$d) {
                var d, e, f;
                d = this.P.lb;
                b = b + this.w - this.ma - this.c.ia + this.Ba.x;
                c = c + this.v - this.na - this.c.ka + this.Ba.y;
                var g = this.N,
                    h = this.L;
                switch (this.type) {
                    case 4:
                        d = this.c.h.ca.Lb(d.frames[Math.max(this.fh, 0)]);
                        a.Oe(d, b + d.Ga, c + d.Ca, 0, 1, 1, this.D.Xb, this.D.Yb);
                        break;
                    case 2:
                    case 3:
                        e = this.Kc;
                        f = this.gp;
                        switch (d.ej) {
                            case 1:
                                a.Gc(b, c, g, h, e, this.D.Xb, this.D.Yb);
                                break;
                            case 2:
                                0 != (d.Rk & ka.kt) && (dl = e, e = f, f = dl), a.Zw(b, c, g, h, e, f, 0 != d.Fo, this.D.Xb, this.D.Yb)
                        }
                        break;
                    case 1:
                        e = 0 == this.Li ? p.Xi(this.ua, this.Hd) : p.Xu(this.ua, this.Hd);
                        for (f = 0; f < e.length; f++) h = e.charCodeAt(f), g = 0, 45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]), g = this.c.h.ca.Lb(g), null != g && (a.Oe(g, b + g.Ga, c + g.Ca, 0, 1, 1, this.D.Xb, this.D.Yb), b += g.width);
                        break;
                    case 5:
                        this.mb.Ab(a, b, c, this.D.Xb, this.D.Yb)
                }
            }
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        }
    });
    ud.prototype = p.extend(new L, {
        Z: function() {
            this.Lc = -1;
            this.Kc = 0;
            var a = this.P.lb;
            this.N = this.kd = a.$h;
            this.L = this.ld = a.ai;
            this.type = a.lf;
            this.Kc = a.Qg;
            this.ql = a.mw;
            this.ua = this.c.h.JA()[this.ql - 1];
            this.Hd = a.Rk;
            if (5 == this.type) {
                var b = this.Lc; - 1 == b && (b = a.hj);
                this.font = this.c.h.Sb.Pf(b);
                this.Md = this.font.af()
            }
        },
        Cb: function() {},
        handle: function() {
            var a = this.c.h.JA()[this.ql - 1];
            a != this.ua && (this.ua = a, this.kb());
            this.D.handle();
            this.b.O && (this.b.O = !1)
        },
        Bg: function() {
            var a = this.P.lb;
            if (5 == a.lf) {
                var b = this.Lc; - 1 == b && (b = a.hj);
                return this.c.h.Sb.br(b)
            }
            return null
        },
        sl: function(a, b) {
            5 == type && (this.Lc = hoAdRunHeader.h.Sb.xq(a), a = this.c.h.Sb.Pf(this.Lc), this.Md = a.af(), null != b && (this.N = this.kd = b.right - b.left, this.L = this.ld = b.bottom - b.top), this.kb())
        },
        ar: function() {
            return this.Kc
        },
        Os: function(a) {
            this.Kc = a;
            this.kb()
        },
        Ol: function(a, b, c, d, e, f) {
            null != this.P.lb && 1 != this.Oa && (this.Oa = !0, this.xa = e, this.Ba = this.c.A.Ya[c], this.oa = d ? this.Ba.Nb : this.Ba.Pa, 0 > f ? this.oa.me(this) : this.oa.vq(this, f), 5 != this.type && this.kb())
        },
        Si: function() {
            if (null == this.P.lb || 0 == this.Oa) return -1;
            this.Oa = !1;
            var a = this.oa.ed(this);
            this.oa.removeChild(this);
            return a
        },
        ed: function() {
            return this.Oa ? this.oa.ed(this) : -1
        },
        bm: function() {
            return this.Oa ? this.oa.children.length : -1
        },
        xe: function(a) {
            this.Oa && this.oa.xe(this, a)
        },
        tl: function() {
            null != this.P.lb && 0 == this.xa && (this.xa = !0, this.kb())
        },
        Ek: function() {
            null != this.P.lb && 1 == this.xa && (this.xa = !1)
        },
        nD: function(a) {
            a != this.ua && (this.ua = a, this.kb())
        },
        Hh: function() {
            this.$d || this.kb()
        },
        kb: function() {
            this.$d = !0;
            this.N = this.L = 1;
            if (null != this.P.lb) {
                var a = this.P.lb,
                    b, c = p.Xi(this.ua, this.Hd);
                switch (a.lf) {
                    case 1:
                        var d, e, f = 0,
                            g = 0;
                        for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.ca.Lb(b), f += b.width, g = Math.max(g, b.height));
                        this.ma = f;
                        this.na = g;
                        this.N = f;
                        this.L = g;
                        break;
                    case 5:
                        this.ma = a = null != this.mb ? this.mb.measureText(c, this.font) : (new ma(this.c.h, 8, 8)).measureText(c, this.font), this.na = this.ld / 2 + this.Md / 2, this.N = a, this.L = this.Md, null == this.mb ? this.mb = new ma(this.c.h, this.N, this.L) : (this.N > this.mb.width || this.L > this.mb.height) && this.mb.resize(this.N, this.L), this.mb.Ss(c, p.Ep | p.Fp, new aa(0, 0, 1E3, 1E3), this.font, this.Kc)
                }
            }
        },
        Ab: function(a, b, c) {
            if (this.xa && this.$d) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.mk;
                var d = this.P.lb;
                b = b + this.w - this.ma - this.c.ia + this.Ba.x;
                var e = c + this.v - this.na - this.c.ka + this.Ba.y;
                c = p.Xi(this.ua, this.Hd);
                switch (this.type) {
                    case 1:
                        var f, g;
                        for (f = 0; f < c.length; f++) {
                            var h = c.charCodeAt(f);
                            g = 0;
                            45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]);
                            g = this.c.h.ca.Lb(g);
                            a.Oe(g, b + g.Ga, e + g.Ca, 0, 1, 1, this.D.Xb, this.D.Yb);
                            b += g.width
                        }
                        break;
                    case 5:
                        this.mb.Ab(a, b, e, this.D.Xb, this.D.Yb)
                }
            }
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        }
    });
    vd.prototype = p.extend(new L, {
        Z: function() {
            this.Lc = -1;
            this.Kc = 0;
            var a = this.P.lb;
            this.N = this.kd = a.$h;
            this.L = this.ld = a.ai;
            this.type = a.lf;
            this.Kc = a.Qg;
            this.ql = a.mw;
            this.ua = this.c.h.EA()[this.ql - 1];
            this.Hd = a.Rk;
            if (5 == this.type) {
                var b = this.Lc; - 1 == b && (b = a.hj);
                this.font = this.c.h.Sb.Pf(b);
                this.Md = this.font.af()
            }
        },
        Cb: function() {},
        handle: function() {
            var a = this.c.h.EA()[this.ql - 1];
            a != this.ua && (this.ua = a, this.kb());
            this.D.handle();
            this.b.O && (this.b.O = !1)
        },
        Bg: function() {
            var a = this.P.lb;
            if (5 == a.lf) {
                var b = this.Lc; - 1 == b && (b = a.hj);
                return this.c.h.Sb.br(b)
            }
            return null
        },
        sl: function(a, b) {
            5 == type && (this.Lc = hoAdRunHeader.h.Sb.xq(a), a = this.c.h.Sb.Pf(this.Lc), this.Md = a.af(), null != b && (this.N = this.kd = b.right - b.left, this.L = this.ld = b.bottom - b.top), this.kb())
        },
        ar: function() {
            return this.Kc
        },
        Os: function(a) {
            this.Kc = a;
            this.kb()
        },
        Ol: function(a, b, c, d, e, f) {
            null != this.P.lb && 1 != this.Oa && (this.Oa = !0, this.xa = e, this.Ba = this.c.A.Ya[c], this.oa = d ? this.Ba.Nb : this.Ba.Pa, 0 > f ? this.oa.me(this) : this.oa.vq(this, f), 5 != this.type && this.kb())
        },
        Si: function() {
            if (null == this.P.lb || 0 == this.Oa) return -1;
            this.Oa = !1;
            var a = this.oa.ed(this);
            this.oa.removeChild(this);
            return a
        },
        ed: function() {
            return this.Oa ? this.oa.ed(this) : -1
        },
        bm: function() {
            return this.Oa ? this.oa.children.length : -1
        },
        xe: function(a) {
            this.Oa && this.oa.xe(this, a)
        },
        tl: function() {
            null != this.P.lb && 0 == this.xa && (this.xa = !0, this.kb())
        },
        Ek: function() {
            null != this.P.lb && 1 == this.xa && (this.xa = !1)
        },
        nD: function(a) {
            a != this.ua && (this.ua = a, this.kb())
        },
        Hh: function() {
            this.$d || this.kb()
        },
        kb: function() {
            this.$d = !0;
            this.N = this.L = 1;
            if (null != this.P.lb) {
                var a = this.P.lb;
                switch (a.lf) {
                    case 4:
                        if (0 != this.ua) {
                            var b = this.c.h.ca.Lb(a.frames[0]),
                                c = this.ua * b.width;
                            c <= this.kd ? (this.N = c, this.L = b.height) : (this.N = this.kd, this.L = (this.kd / b.width + this.ua - 1) * b.height);
                            break
                        }
                        this.N = this.L = 1;
                        break;
                    case 1:
                        var d, e, b, f = 0,
                            g = 0,
                            c = p.Xi(this.ua, this.Hd);
                        for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.ca.Lb(e), f += b.width, g = Math.max(g, b.height));
                        this.ma = f;
                        this.na = g;
                        this.N = f;
                        this.L = g;
                        break;
                    case 5:
                        c = p.Xi(this.ua, this.Hd), this.ma = a = null != this.mb ? this.mb.measureText(c, this.font) : (new ma(this.c.h, 8, 8)).measureText(c, this.font), this.na = this.ld / 2 + this.Md / 2, this.N = a, this.L = this.Md, null == this.mb ? this.mb = new ma(this.c.h, this.N, this.L) : (this.N > this.mb.width || this.L > this.mb.height) && this.mb.resize(this.N, this.L), this.mb.Ss(c, p.Ep | p.Fp, new aa(0, 0, 1E3, 1E3), this.font, this.Kc)
                }
            }
        },
        Ab: function(a, b, c) {
            if (this.xa && this.$d) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.mk;
                var d, e = this.P.lb;
                b = b + this.w - this.ma - this.c.ia + this.Ba.x;
                c = c + this.v - this.na - this.c.ka + this.Ba.y;
                switch (this.type) {
                    case 1:
                        var f, g;
                        d = p.Xi(this.ua, this.Hd);
                        for (f = 0; f < d.length; f++) {
                            var h = d.charCodeAt(f);
                            g = 0;
                            45 == h ? g = e.frames[10] : 46 == h || 44 == h ? g = e.frames[12] : 43 == h ? g = e.frames[11] : 69 == h || 101 == h ? g = e.frames[13] : 48 <= h && 57 >= h && (g = e.frames[h - 48]);
                            g = this.c.h.ca.Lb(g);
                            a.Oe(g, b + g.Ga, c + g.Ca, 0, 1, 1, this.D.Xb, this.D.Yb);
                            b += g.width
                        }
                        break;
                    case 4:
                        if (0 != this.ua) {
                            d = b + this.N;
                            f = c + this.L;
                            var h = b,
                                q = this.ua;
                            for (g = this.c.h.ca.Lb(e.frames[0]); c < f && 0 < q; c += g.height)
                                for (b = h; b < d && 0 < q; b += g.width, --q) a.Oe(g, b + g.Ga, c + g.Ca, 0, 1, 1, this.D.Xb, this.D.Yb)
                        }
                        break;
                    case 5:
                        this.mb.Ab(a, b, c, this.D.Xb, this.D.Yb)
                }
            }
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        }
    });
    wd.prototype = p.extend(new L, {
        Z: function(a, b) {
            var c = a.Yc;
            this.N = c.Bw;
            this.L = c.Cw;
            this.kd = c.Bw;
            this.ld = c.Cw;
            this.Sc = c.Uk;
            this.hp = 0;
            0 < c.Wb.length && (this.hp = c.Wb[0].Ax);
            this.gg = null;
            this.Lc = -1;
            this.pb = 0;
            this.xa = !0;
            this.bD = b.Gq;
            0 < c.Wb.length && (this.gg = c.Wb[0].si);
            var d = this.Lc; - 1 == d && 0 < c.Wb.length && (d = c.Wb[0].an);
            this.font = this.c.h.Sb.Pf(d);
            this.mb = new ma(this.c.h, this.N, this.L)
        },
        Cb: function() {},
        handle: function() {
            this.D.handle();
            this.b.O && (this.b.O = !1)
        },
        Bg: function() {
            var a = this.Lc; - 1 == a && (a = this.P.Yc.Wb[0].an);
            return this.c.h.Sb.br(a)
        },
        sl: function(a, b) {
            this.Lc = this.c.h.Sb.xq(a);
            this.font = this.c.h.Sb.Pf(this.Lc);
            null != b && (this.N = b.right - b.left, this.L = b.bottom - b.top, this.mb.resize(this.N, this.L));
            this.b.O = !0;
            this.kb()
        },
        ar: function() {
            return this.hp
        },
        Os: function(a) {
            this.hp = a;
            this.kb()
        },
        Ol: function(a, b, c, d, e, f) {
            1 != this.Oa && (this.Oa = !0, this.xa = e, this.Ba = this.c.A.Ya[c], this.oa = d ? this.Ba.Nb : this.Ba.Pa, 0 > f ? this.oa.me(this) : this.oa.vq(this, f))
        },
        Si: function() {
            if (0 == this.Oa) return -1;
            this.Oa = !1;
            var a = this.oa.ed(this);
            this.oa.removeChild(this);
            return a
        },
        ed: function() {
            return this.Oa ? this.oa.ed(this) : -1
        },
        bm: function() {
            return this.Oa ? this.oa.children.length : -1
        },
        xe: function(a) {
            this.Oa && this.oa.xe(this, a)
        },
        tl: function() {
            0 == this.xa && (this.xa = !0)
        },
        Ek: function() {
            1 == this.xa && (this.xa = !1)
        },
        kL: function(a) {
            -1 > a && (a = -1);
            a >= this.Sc && (a = this.Sc - 1);
            if (a == this.pb) return !1;
            this.pb = a;
            0 <= a && this.ND(this.P.Yc.Wb[this.pb].si);
            this.kb();
            return 0 != (this.D.T & A.rg) ? !1 : !0
        },
        ND: function(a) {
            this.gg = a;
            this.kb()
        },
        Hh: function() {
            this.$d || this.kb()
        },
        kb: function() {
            this.$d = !0;
            var a = this.P.Yc,
                b = a.Wb[0].rp;
            this.na = this.ma = 0;
            this.rect.left = 0;
            this.rect.top = 0;
            this.rect.right = this.N;
            this.rect.bottom = this.L;
            0 <= this.pb ? a = a.Wb[this.pb].si : (a = this.gg, null == a && (a = ""));
            b &= p.Ep | p.Rj | p.qt | p.Fp | p.Dp | p.xi | p.KE;
            a = this.mb.Ss(a, b, this.rect, this.font, this.hp);
            0 == (b & (p.Dp | p.xi)) && (this.L = a)
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        },
        Ab: function(a, b, c) {
            this.xa && this.$d && this.mb.Ab(a, b + this.w - this.c.ia + this.Ba.x, c + this.v - this.c.ka + this.Ba.y, this.D.Xb, this.D.Yb)
        }
    });
    xd.prototype = p.extend(new L, {
        Z: function() {},
        Cb: function() {},
        handle: function() {
            this.c.pause();
            this.c.ls = this;
            this.c.A.Ya[this.c.A.xc - 1].Pa.me(this);
            this.pH()
        },
        Pq: function() {
            this.c.A.Ya[this.c.A.xc - 1].Pa.removeChild(this)
        },
        BI: function() {
            var a;
            a = this.c.h.Vf - this.c.h.jg;
            var b = this.c.h.Wf - this.c.h.kg;
            0 == this.nk ? this.c.h.Qc[l.Ve] && (a = this.HA(a, b), 0 != a && (this.nk = a)) : this.c.h.Qc[l.Ve] || (this.HA(a, b) == this.nk ? (this.c.i.Jc = this.nk, this.c.i.wd(this, -5439484), 0 != (this.P.Yc.Wb[this.nk].rp & pa.IG) ? this.c.i.wd(this, -5308412) : this.c.i.wd(this, -5373948), this.Pq(), this.c.ls = null, this.c.resume(), this.c.Uq(this.Ub, !0)) : this.nk = 0)
        },
        HA: function(a, b) {
            var c;
            if (null != this.Td)
                for (c = 1; c < this.Td.length; c++)
                    if (a >= this.Td[c].left && a < this.Td[c].right && b > this.Td[c].top && b < this.Td[c].bottom) return c;
            return 0
        },
        jz: function(a, b, c) {
            var d, e;
            c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
            a.vs(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
            var f = Array(3),
                g;
            for (g = 0; 3 > g; g++) f[g] = new G;
            f[0].x = b.right - 1;
            0 == c && --f[0].x;
            f[0].y = b.top + 1;
            f[1].y = b.top + 1;
            f[1].x = b.left + 1;
            f[2].x = b.left + 1;
            f[2].y = b.bottom;
            0 == c && --f[2].y;
            a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
            a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && --f[0].x;
            f[0].y += 1;
            f[1].x += 1;
            f[1].y += 1;
            f[2].x += 1;
            0 == c && --f[2].y;
            a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
            a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.Cd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Cd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
        },
        xK: function(a, b, c) {
            var d = new aa;
            d.Cz(this.Td[b]);
            this.jz(a, this.Td[b], c);
            d.left += 2;
            d.top += 2;
            d.right -= 4;
            d.bottom -= 4;
            c && (d.left += 2, d.top += 2);
            this.jh[b].Ab(a,
                (d.left + d.right) / 2 - this.jh[b].width / 2, (d.top + d.bottom) / 2 - this.jh[b].height / 2, 0, 0)
        },
        pH: function() {
            this.Lr = new ma(this.c.h, 8, 8);
            var a = this.P.Yc,
                b = this.c,
                c = a.Wb[1],
                d = c.Ax,
                e = 0 != (c.rp & pa.Ry),
                f = b.h.Sb.Pf(c.an);
            this.ft = Math.floor(3 * this.Lr.measureText("X", f) / 2);
            this.Wi = 4;
            this.Od = 64;
            var g;
            for (g = 1; g < a.Wb.length; g++) c = a.Wb[g], 0 < c.si.length && (c = this.Lr.measureText(c.si, f), this.Od = Math.max(this.Od, c + 2 * this.ft + 4), this.Wi = Math.max(this.Wi, Math.floor(3 * f.af() / 2)));
            this.kr = Math.max(Math.floor(this.Wi / 4), 2);
            this.Od += 2 * this.ft + 4;
            var h = new aa;
            for (g = 1; g < a.Wb.length; g++) c = a.Wb[g], this.jh[g] = new ma(b.h, this.Od, this.Wi), h.right = this.Od, h.bottom = this.Wi, this.jh[g].Kr(c.si, p.Rj | p.xi, h, d, f, e ? 1 : 0, 16777215);
            a = a.Wb[0];
            e = 0 != (a.rp & pa.Ry);
            f = b.h.Sb.Pf(a.an);
            g = Math.floor(3 * this.Lr.measureText("X", f) / 2);
            c = this.Lr.measureText(a.si, f);
            this.eo = Math.floor(3 * f.af() / 2);
            this.Od = Math.max(this.Od, c + 2 * g + 4);
            this.Od > b.h.qa ? this.Od = b.h.qa : this.Od > b.A.Nd && (this.Od = b.A.Nd);
            h.right = this.Od;
            h.bottom = this.eo;
            this.jh[0] = new ma(b.h, this.Od, this.eo);
            this.jh[0].Kr(a.si, p.Rj | p.xi, h, d, f, e ? 1 : 0, 16777215)
        },
        Ab: function(a) {
            var b = this.P.Yc,
                c = this.c,
                d = this.w - c.ia,
                c = this.v - c.ka,
                e = new aa;
            e.left = d;
            e.top = c;
            var f = this.eo + 1 + (this.Wi + this.kr) * (b.Wb.length - 1) + this.kr + 4;
            e.right = d + this.Od;
            e.bottom = c + f;
            a.Gc(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
            this.jz(a, e, !1);
            e.left += 2;
            e.top += 2;
            e.right -= 2;
            e.bottom = e.top + this.eo;
            this.jh[0].Ab(a, (e.left + e.right) / 2 - this.jh[0].width / 2, (e.top + e.bottom) / 2 - this.jh[0].height / 2, 0, 0);
            e.top = e.bottom;
            a.Cd(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
            e.top += 1;
            e.bottom += 1;
            a.Cd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
            if (null == this.Td)
                for (this.Td = Array(b.Wb.length), i = 1; i < b.Wb.length; i++) this.Td[i] = new aa, this.Td[i].left = d + 2 + this.ft, this.Td[i].right = d + this.Od - 2 - this.ft, this.Td[i].top = c + 2 + this.eo + 1 + this.kr + (this.Wi + this.kr) * (i - 1), this.Td[i].bottom = this.Td[i].top + this.Wi;
            for (i = 1; i < b.Wb.length; i++) this.xK(a, i, this.nk == i)
        }
    });
    yd.prototype = p.extend(new L, {
        Z: function(a, b) {
            this.ext.Z(this);
            var c = this.c.h.file.wg(a.gC);
            this.Kw = a.iC;
            this.ext.Qu(c, b, a.jC)
        },
        ou: function(a, b, c, d, e) {
            this.Ba = this.c.A.Ya[d];
            this.xa = e;
            1 != this.Oa && (this.Oa = !0, this.oa = this.Ba.Pa, this.oa.me(this))
        },
        Ol: function(a, b, c, d, e) {
            this.Ba = this.c.A.Ya[c];
            this.xa = e;
            1 != this.Oa && (this.Oa = !0, this.oa = d ? this.Ba.Nb : this.Ba.Pa, this.oa.me(this))
        },
        Si: function() {
            if (0 == this.Oa) return -1;
            this.Oa = !1;
            var a = this.oa.ed(this);
            this.oa.removeChild(this);
            return a
        },
        handle: function() {
            0 != (this.ra & 512) ? this.D.handle() : 16 == (this.ra & 48) || 48 == (this.ra & 48) ? this.B.move() : 32 == (this.ra & 48) && this.aa.We();
            var a = 0;
            0 == this.hw && (a = this.ext.sv());
            0 != (a & Ba.Oy) && (this.hw = !0);
            null != this.b && this.b.O && (this.b.O = !1)
        },
        Ki: function() {
            this.ext.Ki()
        },
        Fz: function() {},
        Ab: function() {},
        Cb: function(a) {
            this.ext.Tu(a)
        },
        jI: function() {
            return null
        },
        Dn: function(a, b) {
            return this.ext.Dn(a, b)
        },
        action: function(a, b) {
            this.ext.action(a, b)
        },
        Pn: function(a) {
            return this.ext.Pn(a)
        },
        Ym: function(a) {
            this.D.Xb = A.Cf;
            this.D.Yb = a
        },
        nR: function() {},
        tl: function() {
            this.xa = !0
        },
        Ek: function() {
            this.xa = !1
        },
        ed: function() {
            return this.oa.ed(this)
        },
        bm: function() {
            return this.oa.children.length
        },
        xe: function(a) {
            a >= this.oa.children.length && (a = this.oa.children.length);
            0 > a && (a = 0);
            this.oa.xe(this, a)
        },
        VJ: function() {},
        sH: function() {},
        $l: function() {
            this.ext.$l()
        },
        fB: function(a) {
            this.c.h.ca.fB(a)
        },
        FQ: function(a) {
            return this.c.h.ca.Lb(a)
        },
        vQ: function() {
            return this.c.h
        },
        LQ: function() {
            return this.w
        },
        MQ: function() {
            return this.v
        },
        KQ: function() {
            return this.N
        },
        af: function() {
            return this.L
        },
        oD: function(a) {
            null != this.B ? this.B.ta.dc(a) : (this.w = a, null != this.b && (this.b.O = !0, this.b.Qa = !0))
        },
        rD: function(a) {
            null != this.B ? this.B.ta.ec(a) : (this.v = a, null != this.b && (this.b.O = !0, this.b.Qa = !0))
        },
        qx: function(a) {
            this.N = a
        },
        ox: function(a) {
            this.L = a
        },
        lp: function(a, b) {
            this.N = a;
            this.L = b
        },
        cR: function() {
            this.hw = !1
        },
        $q: function(a, b) {
            if (0 == this.c.dg) {
                var c = this.c.i.Jc;
                this.c.i.Jc = b;
                a = -(a + I.Ae + 1) << 16;
                a |= this.Da & 65535;
                this.c.i.wd(this, a);
                this.c.i.Jc = c
            }
        },
        gs: function(a, b) {
            0 == this.c.dg && (a = -(a + I.Ae + 1) << 16, a |= this.Da & 65535, this.c.i.fK(1, a, b, this, this.cf))
        },
        pause: function() {
            this.c.pause()
        },
        resume: function() {
            this.c.resume()
        },
        dR: function() {},
        iQ: function() {
            this.c.xg(this.Ub)
        },
        setPosition: function(a, b) {
            null != this.B ? (this.B.ta.dc(a), this.B.ta.ec(b)) : (this.w = a, this.v = b, null != this.b && (this.b.O = !0, this.b.Qa = !0))
        },
        zQ: function() {
            return this.Kw
        },
        mR: function(a) {
            this.Kw = a
        },
        uq: function(a, b, c, d, e) {
            this.c.uq(a, b, c, e, d, !0)
        },
        xQ: function() {
            return this.c.eg
        },
        Ak: function() {
            this.c.oc++;
            return this.c.getExpression()
        },
        yQ: function() {
            return this.c.i.Jc
        },
        kz: function(a, b, c) {
            return 0 != (a.ra & D.Gf) && a.b.Fc == U.Di ? a.B.ta.kz(b, c) : 0
        },
        AQ: function() {
            this.jw = this.Do = 0;
            return this.tI()
        },
        tI: function() {
            if (this.jw < this.c.ob) {
                for (; null == this.c.G[this.Do];) this.Do++;
                var a = this.c.G[this.Do];
                this.jw++;
                this.Do++;
                return a
            }
            return null
        },
        HQ: function(a) {
            var b = 0,
                c;
            for (c = 0; c < this.c.ob; c++) {
                for (; null == this.c.G[b];) b++;
                var d = this.c.G[b];
                b++;
                if ((d.tv << 16 | d.Ub & 65535) == a) return d
            }
            return null
        },
        oA: function(a) {
            return this.c.oA(a)
        },
        pA: function(a) {
            return this.c.pA(a)
        },
        RJ: function(a) {
            return hoAdRunHeader.h.RJ(a)
        },
        XP: function() {}
    });
    Wa.QO = 22;
    Wa.create = function(a) {
        var b = a.file.S,
            c = null,
            d = a.file.o(),
            e = a.file.o();
        switch (e) {
            case 1:
                c = new Re(a);
                break;
            case 2:
                c = new Te(a);
                break;
            case 3:
                c = new ha(a);
                break;
            case 4:
                c = new ha(a);
                break;
            case 5:
                c = new Fa(a);
                break;
            case 6:
                c = new Qa(a);
                break;
            case 7:
                c = new Fa(a);
                break;
            case 9:
                c = new mb(a);
                break;
            case 10:
                c = new ha(a);
                break;
            case 11:
                c = new ha(a);
                break;
            case 12:
                c = new ha(a);
                break;
            case 13:
                c = new Oe(a);
                break;
            case 14:
                c = new Ad(a);
                break;
            case 15:
                c = new qa(a);
                break;
            case 16:
                c = new Bd(a);
                break;
            case 17:
                c = new ha(a);
                break;
            case 18:
                c = new Cd(a);
                break;
            case 19:
                c = new Dd(a);
                break;
            case 21:
                c = new mb(a);
                break;
            case 22:
                c = new qa(a);
                break;
            case 23:
                c = new qa(a);
                break;
            case 24:
                c = new Ne(a);
                break;
            case 25:
                c = new Fa(a);
                break;
            case 26:
                c = new ha(a);
                break;
            case 27:
                c = new qa(a);
                break;
            case 28:
                c = new qa(a);
                break;
            case 29:
                c = new Fa(a);
                break;
            case 31:
                c = new ha(a);
                break;
            case 32:
                c = new ha(a);
                break;
            case 34:
                c = new Fa(a);
                break;
            case 35:
                c = new Qa(a);
                break;
            case 36:
                c = new Qa(a);
                break;
            case 37:
                c = new ha(a);
                break;
            case 38:
                c = new na(a);
                break;
            case 39:
                c = new Qe(a);
                break;
            case 40:
                c = new Xa(a);
                break;
            case 41:
                c = new Xa(a);
                break;
            case 42:
                c = new Me(a);
                break;
            case 43:
                c = new ha(a);
                break;
            case 44:
                c = new Ad(a);
                break;
            case 45:
                c = new qa(a);
                break;
            case 46:
                c = new qa(a);
                break;
            case 47:
                c = new zd(a);
                break;
            case 48:
                c = new Fa(a);
                break;
            case 49:
                c = new ha(a);
                break;
            case 50:
                c = new ha(a);
                break;
            case 51:
                c = new zd(a);
                break;
            case 52:
                c = new qa(a);
                break;
            case 53:
                c = new qa(a);
                break;
            case 54:
                c = new qa(a);
                break;
            case 55:
                c = new Pe(a);
                break;
            case 56:
                c = new Fa(a);
                break;
            case 57:
                c = new ha(a);
                break;
            case 58:
                c = new ha(a);
                break;
            case 59:
                c = new qa(a);
                break;
            case 60:
                c = new ha(a);
                break;
            case 61:
                c = new ha(a);
                break;
            case 62:
                c = new qa(a);
                break;
            case 63:
                c = new Xa(a);
                break;
            case 64:
                c = new Xa(a);
                break;
            case 67:
                c = new ha(a);
                break;
            case 68:
                c = new Ed(a);
                break;
            case 69:
                c = new Se(a);
                break;
            case 72:
                c = new Dd(a)
        }
        c.code = e;
        a.file.seek(b + d);
        return c
    };
    na.nF = 1;
    na.rN = 2;
    na.Ft = 4;
    na.Et = 8;
    na.sN = 16;
    oa.vE = 1;
    oa.uE = 2;
    oa.wE = 4;
    oa.Xx = 8;
    oa.prototype = {
        Yw: function(a, b, c) {
            c.hm = -1;
            if (-1 == this.Lo) {
                0 != b && (c.dir = -1, 0 == (this.Yk & oa.Xx) && (c.dir = a.OA(this.Zr)));
                c.x = this.bs;
                c.y = this.cs;
                var d = this.Hw;
                d > a.A.xc - 1 && (d = a.A.xc - 1);
                c.hm = d;
                c.vu = !1
            } else {
                a.i.Gm = !1;
                d = a.i.er(this.Mo);
                c.vu = a.i.Hc;
                if (null == d) return !1;
                c.x = d.w;
                c.y = d.v;
                c.hm = d.fe;
                if (0 != (this.Yk & oa.uE) && 0 != (d.ra & D.$j) && 0 <= d.b.Ra) {
                    var e;
                    e = d.b.ib;
                    null != a.Lp(d) && (e = 0, e == ea.aE && (e = d.b.ib));
                    e = a.h.ca.Bk(d.b.Ra, e, d.b.Gb, d.b.Hb);
                    c.x += e.ph - e.Ga;
                    c.y += e.qh - e.Ca
                }
                if (0 != (this.Yk & oa.vE)) {
                    e = this.Gw + d.c.Zb(d) & 31;
                    var f = M.mI(this.$r, e);
                    c.x += M.lI(this.$r, e);
                    c.y += f
                } else c.x += this.bs, c.y += this.cs;
                0 != (b & 1) && (c.dir = 0 != (this.Yk & oa.Xx) ? -1 : 0 != (this.Yk & oa.wE) ? d.c.Zb(d) : a.OA(this.Zr))
            }
            return 0 != (b & 2) && (c.x < a.Mm || c.x > a.Km || c.y < a.Qm || c.y > a.Om) ? !1 : !0
        }
    };
    Bd.prototype = p.extend(new oa, {});
    mb.prototype = p.extend(new oa, {});
    Cd.prototype = p.extend(new oa, {});
    Ed.prototype = {
        evaluate: function(a) {
            if (null == a.M || 0 != this.Yq && (a.M.rl & this.Yq) != this.sA) return !1;
            for (var b = 0; b < this.values.length; b++) {
                var c = this.values[b],
                    d;
                d = c.global ? a.c.h.jv(c.index) : a.M.Dk(c.index);
                if (!k.Ih(d, c.Ex, c.sC)) return !1
            }
            return !0
        },
        VH: function(a) {
            if (null == a.M || 0 != this.Yq && (a.M.rl & this.Yq) != this.sA) return !1;
            for (var b = 0; b < this.values.length; b++) {
                var c = this.values[b];
                if (!k.Ih(a.M.Dk(c.index), c.Ex, c.sC)) return !1
            }
            return !0
        }
    };
    Ya.prototype = {
        Gc: function() {},
        $w: function() {},
        Zw: function() {},
        QC: function() {},
        Oe: function() {},
        sj: function() {},
        RC: function() {},
        SC: function() {},
        Cd: function() {},
        vs: function() {},
        PC: function() {},
        AK: function() {},
        EC: function(a, b, c, d) {
            var e = this.kk[this.kk.length - 1];
            e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.dt && (c = e.x + e.dt - a), b + d > e.y + e.fr && (d = e.y + e.fr - b));
            a = {
                x: a,
                y: b,
                dt: c,
                fr: d
            };
            this.kk.push(a);
            return a
        },
        xC: function() {
            this.kk.pop()
        }
    };
    Ga.prototype = p.extend(new Ya, {
        ax: function(a) {
            this.yw = this.sx = a;
            this.La.imageSmoothingEnabled = a;
            this.La.webkitImageSmoothingEnabled = a;
            this.La.mozImageSmoothingEnabled = a;
            this.La.msImageSmoothingEnabled = a;
            this.xw = -1;
            this.Se(0, 0)
        },
        px: function(a, b) {
            this.La.scale(a, b);
            this.vp = a;
            this.xp = b;
            this.uk = this.sk = 0;
            1 < this.vp ? this.sk = 1 : 0 < this.vp && 1 > this.vp && (this.sk = 1 / this.vp);
            1 < this.xp && (this.uk = 1);
            0 < this.xp && 1 > this.xp && (this.uk = 1 / this.xp)
        },
        Fq: function(a, b, c, d) {
            this.La.clearRect(a, b, c, d)
        },
        Gc: function(a, b, c, d, e, f, g) {
            var h = this.La;
            this.Se(f, g);
            h.fillStyle = p.$e(e);
            h.fillRect(a, b, c, d)
        },
        $w: function(a, b, c, d, e, f, g) {
            var h = this.La;
            this.Se(f, g);
            h.fillStyle = p.$e(e);
            p.Lq(h, a, b, c, d);
            h.fill()
        },
        Zw: function(a, b, c, d, e, f, g, h, q) {
            if (e == f) return this.Gc(a, b, c, d, e, h, q);
            var k = this.La;
            this.Se(h, q);
            this.zz(a, b, c, d, g, e, f);
            k.fillRect(a, b, c, d)
        },
        QC: function(a, b, c, d, e, f, g, h, q) {
            if (e == f) return this.$w(a, b, c, d, e, h, q);
            var k = this.La;
            this.Se(h, q);
            this.zz(a, b, c, d, g, e, f);
            p.Lq(k, a, b, c, d);
            this.La.fill()
        },
        Oe: function(a, b, c, d, e, f, g, h) {
            var q = this.La,
                k = b - a.Ga,
                l = c - a.Ca;
            this.Se(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.sb ? null != a.rb && q.drawImage(a.rb, k, l) : q.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, k, l, a.width, a.height) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.Ga, -a.Ca), 0 == a.sb ? null != a.rb && 0 != a.width && 0 != a.height && q.drawImage(a.rb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : q.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, 0, 0, a.width, a.height), q.restore())
        },
        eR: function(a, b, c, d, e, f, g, h) {
            var q = this.La,
                k = b - a.Ga,
                l = c - a.Ca;
            this.Se(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.sb ? null != a.rb && q.drawImage(a.rb, 0, 0, a.width, a.height, k, l, a.width + this.sk, a.height + this.uk) : q.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, k, l, a.width + this.sk, a.height + this.uk) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.Ga, -a.Ca), 0 == a.sb ? null != a.rb && q.drawImage(a.rb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : q.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, 0, 0, a.width, a.height), q.restore())
        },
        sj: function(a, b, c, d, e, f, g) {
            this.Se(f, g);
            this.La.drawImage(a, b, c, d, e)
        },
        RC: function(a, b, c, d, e, f, g) {
            var h = this.La;
            this.Se(f, g);
            h.save();
            h.beginPath();
            h.moveTo(b, c);
            h.lineTo(b + d, c);
            h.lineTo(b + d, c + e);
            h.lineTo(b, c + e);
            h.lineTo(b, c);
            h.clip();
            f = a.width;
            g = a.height;
            d = Math.floor(d / f) + 1;
            e = Math.floor(e / g) + 1;
            var q, k;
            for (q = 0; q < d; q++)
                for (k = 0; k < e; k++) 0 == a.sb ? null != a.rb && h.drawImage(a.rb, 0, 0, a.width, a.height, b + q * f, c + k * g, a.width + this.sk, a.height + this.uk) : h.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, b + q * f, c + k * g, a.width + this.sk, a.height + this.uk);
            h.restore()
        },
        SC: function(a, b, c, d, e, f, g) {
            if (!(a instanceof Z)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
            var h = this.La;
            this.Se(f, g);
            0 == a.sb ? null != a.rb && (h.fillStyle = h.createPattern(a.rb, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, h = a.pattern.getContext("2d"), h.drawImage(a.app.ca.Mb[a.sb], a.yd, a.zd, a.width, a.height, 0, 0, a.width, a.height)), h.fillStyle = h.createPattern(a.pattern, "repeat"));
            p.Lq(h, b, c, d, e);
            this.La.fill()
        },
        Cd: function(a, b, c, d, e, f, g, h) {
            var q = this.La;
            this.Se(g, h);
            q.strokeStyle = p.$e(e);
            q.lineCap = "round";
            q.lineWidth = f;
            q.beginPath();
            q.moveTo(a, b);
            q.lineTo(c, d);
            q.closePath();
            q.stroke()
        },
        AK: function(a, b, c, d, e, f) {
            var g = this.La;
            e = p.$e(e);
            1 == f ? (g.beginPath(), g.moveTo(a, b), g.lineTo(a + c, b), g.lineTo(a + c / 2, b - d)) : (g.beginPath(), g.moveTo(a, b), g.lineTo(a, b - c), g.lineTo(a - d, b - c / 2));
            g.closePath();
            g.lineWidth = 1;
            g.strokeStyle = e;
            g.stroke();
            g.fillStyle = e;
            g.fill()
        },
        vs: function(a, b, c, d, e, f, g, h) {
            var q = this.La;
            this.Se(g, h);
            q.strokeStyle = p.$e(e);
            q.lineWidth = f;
            q.strokeRect(a, b, c, d)
        },
        PC: function(a, b, c, d, e, f, g, h) {
            var q = this.La;
            this.Se(g, h);
            q.lineWidth = e;
            q.strokeStyle = p.$e(f);
            p.Lq(q, a, b, c, d);
            this.La.stroke()
        },
        clip: function(a, b, c, d) {
            var e = this.La;
            e.save();
            e.beginPath();
            e.rect(a, b, c, d);
            e.clip()
        },
        mL: function() {
            this.La.restore()
        },
        EC: function() {
            var a = this.La,
                b = Ya.prototype.EC.apply(this, arguments);
            a.beginPath();
            a.rect(b.x, b.y, b.dt, b.fr);
            a.clip()
        },
        xC: function() {
            var a = this.La;
            Ya.prototype.xC.apply(this, arguments);
            if (0 < this.kk.length) {
                var b = this.kk[this.kk.length - 1];
                a.beginPath();
                a.rect(b.x, b.y, b.dt, b.fr);
                a.clip()
            } else a.fR()
        },
        Se: function(a, b) {
            var c = this.La;
            if ("undefined" == typeof a) c.globalAlpha = 1, c.mk = "source-over";
            else if (a != this.xw || b != this.MJ) {
                this.xw = a;
                this.MJ = b;
                var d = a & A.Nx,
                    e = 0 != (a & A.Ox) | this.sx;
                e != this.yw && (this.yw = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled = e);
                c.globalAlpha = 0 != (a & A.lt) ? (b >>> 24 & 255) / 255 : d == A.Cf ? (128 - b) / 128 : 1;
                switch (d) {
                    case A.cE:
                        c.mk = "lighter";
                        break;
                    case A.dE:
                        c.mk = "xor";
                        break;
                    default:
                        c.mk = "source-over"
                }
            }
        },
        zz: function(a, b, c, d, e, f, g) {
            a = e ? this.La.createLinearGradient(a, b, a, b + d) : this.La.createLinearGradient(a, b, a + c, b);
            a.addColorStop(0, p.$e(f));
            a.addColorStop(1, p.$e(g));
            this.La.fillStyle = a
        }
    });
    sa.sq = 1;
    sa.prototype = {
        load: function(a) {
            var b = a.S;
            a.va(4);
            this.MD = a.s();
            this.LD = a.s();
            this.qp = a.s();
            this.pp = a.jd();
            var c = a.s(),
                d = a.s();
            a.seek(b + c);
            this.In = a.Ob();
            this.In = this.In.substr(0, this.In.indexOf("."));
            this.Pz = b + d
        }
    };
    Fd.prototype = {
        LA: function() {
            return null
        }
    };
    w.Pp = 0;
    w.nq = 1;
    w.Qy = 2;
    w.Px = 3;
    w.mt = 0;
    w.Gt = 1;
    w.Tx = 2;
    w.Py = 3;
    w.Fi = 0;
    w.Gi = 1;
    w.Oj = 2;
    w.Pj = 3;
    w.Sx = 4;
    w.Zx = 0;
    w.IE = 1;
    w.iu = 1;
    w.tq = 2;
    w.prototype = {
        start: function(a, b, c, d) {
            this.Uz = b;
            this.Jh = this.Uz.getContext("2d");
            this.Y = c;
            this.m = d;
            this.Dr = (new Date).getTime();
            this.j = a.LD;
            0 == this.j && (this.j = 1);
            this.no = this.Dr;
            this.oo = this.Dr + this.j;
            this.wa = this.jB = !0
        },
        finish: function() {},
        or: function() {
            if (this.jB) {
                var a = new Date;
                return a.getTime() >= this.oo ? !0 : a.getTime() >= this.oo
            }
            return !0
        },
        Bc: function() {
            this.no = (new Date).getTime();
            this.no > this.oo && (this.no = this.oo);
            return this.no - this.Dr
        },
        F: function(a, b, c, d, e, f, g) {
            this.Fr && (this.Jh.globalCompositeOperation = "source-atop");
            1 == arguments.length ? this.Jh.drawImage(a, 0, 0) : 0 < f && 0 < g && this.Jh.drawImage(a, d, e, f, g, b, c, f, g)
        },
        stretch: function(a, b, c, d, e, f, g, h, q) {
            this.Fr && (this.Jh.globalCompositeOperation = "source-atop");
            0 < d && 0 < e && 0 < h && 0 < q && this.Jh.drawImage(a, f, g, h, q, b, c, d, e)
        },
        Qb: function() {},
        end: function() {},
        Z: function() {}
    };
    Gd.prototype = {
        cL: function(a, b) {
            var c = a.P.um;
            b && (c = a.P.Eo);
            var d = null,
                e;
            if (0 != (a.ra & D.$j)) {
                var f = this.app.ca.Lb(a.b.Ra),
                    d = document.createElement("canvas");
                d.width = f.width;
                d.height = f.height;
                e = d.getContext("2d");
                0 == f.sb ? e.drawImage(f.rb, 0, 0) : e.drawImage(this.app.ca.Mb[f.sb], f.yd, f.zd, f.width, f.height, 0, 0, f.width, f.height)
            } else 32 <= a.Da && (d = document.createElement("canvas"), d.width = a.N, d.height = a.L, new StandardRendered(d), d = null);
            if (null == d) return null;
            e = d.width;
            var g = d.height,
                f = document.createElement("canvas");
            f.width = e;
            f.height = g;
            var h = document.createElement("canvas");
            h.width = e;
            h.height = g;
            var q = document.createElement("canvas");
            q.width = e;
            q.height = g;
            b ? (e = h.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.qp & sa.sq) && this.Bz(q, d, c.pp)) : (e = q.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.qp & sa.sq) && this.Bz(h, d, c.pp));
            c = this.Tl(c, f, h, q);
            null != c && (d = 0, 0 != (a.V & L.zi) ? (c.Fr = !0, d |= w.tq) : (c.Fr = !1, d |= w.iu), a.wl = f, c.Qb(d));
            return c
        },
        Bz: function(a, b, c) {
            a = a.getContext("2d");
            a.drawImage(b, 0, 0);
            var d = b.width;
            b = b.height;
            var e = a.getImageData(0, 0, d, b),
                f, g = (c & 16711680) >> 16,
                h = (c & 65280) >> 8,
                q = c & 255;
            for (f = 0; f < b; f++)
                for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = h, e.data[4 * (f * d + c) + 2] = q);
            a.putImageData(e, 0, 0)
        },
        Tl: function(a, b, c, d) {
            var e = null;
            "cctrans" == a.In.toLowerCase() && (e = new Ra);
            return null != e ? (e = e.LA(a), this.app.file.seek(a.Pz), e.Fr = !1, e.Z(a, this.app.file, b, c, d), e) : null
        }
    };
    Ra.SA = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
    Ra.prototype = p.extend(new Fd, {
        LA: function(a) {
            var b = a.MD;
            a = "" + String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            a += String.fromCharCode(b >> 8 & 255);
            for (b = 0; b < Ra.SA.length && a != Ra.SA[b]; b++);
            a = null;
            switch (b) {
                case 0:
                    a = new Jd;
                    break;
                case 1:
                    a = new Hd;
                    break;
                case 2:
                    a = new Id;
                    break;
                case 3:
                    a = new Kd;
                    break;
                case 4:
                    a = new Ld;
                    break;
                case 5:
                    a = new Nd;
                    break;
                case 6:
                    a = new Od;
                    break;
                case 7:
                    a = new Pd;
                    break;
                case 8:
                    a = new Qd;
                    break;
                case 9:
                    a = new Rd;
                    break;
                case 10:
                    a = new Sd;
                    break;
                case 11:
                    a = new Td;
                    break;
                case 12:
                    a = new Ud;
                    break;
                case 13:
                    a = new Vd;
                    break;
                case 14:
                    a = new Wd;
                    break;
                case 15:
                    a = new Xd;
                    break;
                case 16:
                    a = new Yd;
                    break;
                case 17:
                    a = new Zd;
                    break;
                case 18:
                    a = new $d;
                    break;
                case 19:
                    a = new ae;
                    break;
                case 20:
                    a = new Md
            }
            return a
        }
    });
    Hd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.kB = 8 != this.fb ? this.fb : Math.floor(8 * Math.random()));
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.kB) {
                    case 0:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        break;
                    case 1:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, this.f - c, b, 0, b, c);
                        break;
                    case 2:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, 0, b, 0, b, c);
                        break;
                    case 3:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, this.f - c, b, this.f - c, b, c);
                        break;
                    case 4:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f / 2 * a / this.j;
                        this.F(this.m, b, 0, b, this.f / 2 - c, b, c);
                        this.F(this.m, b, this.f - c, b, this.f / 2, b, c);
                        break;
                    case 5:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f / 2 * a / this.j;
                        this.F(this.m, b, 0, b, 0, b, c);
                        this.F(this.m, b, this.f - c, b, this.f - c, b, c);
                        break;
                    case 6:
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, 0, this.f - c, 0, 0, b, c);
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        this.F(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
                        break;
                    case 7:
                        b = this.g / 7;
                        c = this.f * a / this.j;
                        this.F(this.m, 0, this.f - c, 0, 0, b, c);
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        this.F(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
                        this.F(this.m, 3 * b, 0, 3 * b, this.f - c, b, c);
                        this.F(this.m, 4 * b, this.f - c, 4 * b, 0, b, c);
                        this.F(this.m, 5 * b, 0, 5 * b, this.f - c, b, c);
                        this.F(this.m, 6 * b, this.f - c, 6 * b, 0, 2 * b, c);
                        break;
                    default:
                        this.F(this.m)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Id.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                this.F(this.m);
                switch (this.fb) {
                    case 0:
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.stretch(this.Y, 0, 0, b, c, 0, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.stretch(this.Y, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.Y, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.Y, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 1:
                        b = this.g * a / this.j;
                        b = this.g - b;
                        c = this.f * a / this.j;
                        c = this.f - c;
                        this.F(this.Y, 0, 0, this.g - b, this.f - c, b, c);
                        break;
                    case 2:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        c = this.f - c;
                        this.F(this.Y, b, 0, 0, this.f - c, this.g - b, c);
                        break;
                    case 3:
                        b = this.g * a / this.j;
                        b = this.g - b;
                        c = this.f * a / this.j;
                        this.F(this.Y, 0, c, this.g - b, 0, b, this.f - c);
                        break;
                    case 4:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.F(this.Y, b, c, 0, 0, this.g - b, this.f - c);
                        break;
                    case 5:
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.Y, b - this.g / 2, c - this.f / 2, 0, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.Y, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        this.F(this.Y, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.F(this.Y, this.g / 2 + b, this.f / 2 + c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 6:
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.Y, 0, c - this.f / 2, 0, 0, this.g, this.f / 2);
                        this.F(this.Y, 0, this.f - c, 0, this.f / 2, this.g, this.f / 2);
                        break;
                    case 7:
                        b = this.g / 2 * a / this.j, b = this.g / 2 - b, this.F(this.Y, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.F(this.Y, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Jd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Kf = b.o();
            this.Bu = b.o();
            this.start(a, c, d, e)
        },
        Qb: function() {
            var a = this.Y.width,
                b = this.Y.height,
                c;
            if (this.wa) {
                0 == this.Kf && (this.Kf = 1);
                switch (this.Bu) {
                    case w.Pp:
                    case w.nq:
                        this.Dc = (a + this.Kf - 1) / this.Kf;
                        0 == this.Dc && (this.Dc = 1, this.Kf = a);
                        break;
                    default:
                        this.Dc = (b + this.Kf - 1) / this.Kf, 0 == this.Dc && (this.Dc = 1, this.Kf = b)
                }
                this.xb = 0;
                this.wa = !1
            }
            if (0 >= this.Kf || 0 >= this.Dc || 0 == this.j) this.F(this.m);
            else {
                var d = this.Dc * this.Bc() / this.j;
                if (d > this.xb) {
                    var e = 0,
                        f = 0,
                        g = 0,
                        h = 0;
                    for (c = 0; c < this.Kf; c++) {
                        switch (this.Bu) {
                            case w.Pp:
                                e = this.xb + c * this.Dc;
                                f = 0;
                                g = d - this.xb;
                                h = b;
                                break;
                            case w.nq:
                                e = a - (this.xb + c * this.Dc) - (d - this.xb);
                                f = 0;
                                g = d - this.xb;
                                h = b;
                                break;
                            case w.Qy:
                                e = 0;
                                f = this.xb + c * this.Dc;
                                g = a;
                                h = d - this.xb;
                                break;
                            case w.Px:
                                e = 0, f = b - (this.xb + c * this.Dc) - (d - this.xb), g = a, h = d - this.xb
                        }
                        this.F(this.m, e, f, e, f, g, h)
                    }
                }
                this.xb = d
            }
            return this.BJ
        },
        end: function() {
            this.finish()
        }
    });
    Kd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Va = b.s();
            this.Qq = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f, g, h, q, k, l;
                k = this.g / this.Va;
                l = this.f / this.Qq;
                d = this.g / this.Va;
                e = this.f / this.Qq;
                for (f = 0; f < this.Va; f++)
                    for (g = 0; g < this.Qq; g++) b = f * k, c = g * l, h = d * a / this.j, q = e * a / this.j, this.stretch(this.m, b + (d - h) / 2, c + (e - q) / 2, h, q, b + (d - h) / 2, c + (e - q) / 2, h, q)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Ld.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.bj = b.o();
            this.start(a, c, d, e)
        },
        Qb: function() {
            if (this.wa) {
                switch (this.bj) {
                    case w.mt:
                    case w.Gt:
                        this.Dc = this.Y.width / 2;
                        break;
                    default:
                        this.Dc = this.Y.height / 2
                }
                this.xb = 0;
                this.wa = !1
            }
            if (0 == this.Dc) this.F(this.m);
            else {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0,
                    e = this.Dc * this.Bc() / this.j;
                if (e > this.xb) {
                    switch (this.bj) {
                        case w.mt:
                            a = this.Y.width / 2 - e;
                            b = 0;
                            c = e - this.xb;
                            d = this.m.height;
                            break;
                        case w.Gt:
                            a = this.xb;
                            b = 0;
                            c = e - this.xb;
                            d = this.m.height;
                            break;
                        case w.Tx:
                            a = 0;
                            b = this.Y.height / 2 - e;
                            c = this.m.width;
                            d = e - this.xb;
                            break;
                        case w.Py:
                            a = 0, b = this.xb, c = this.m.width, d = e - this.xb
                    }
                    this.F(this.m, a, b, a, b, c, d);
                    switch (this.bj) {
                        case w.mt:
                            a = this.Y.width / 2 + this.xb;
                            break;
                        case w.Gt:
                            a = this.Y.width - e;
                            break;
                        case w.Tx:
                            b = this.Y.height / 2 + this.xb;
                            break;
                        case w.Py:
                            b = this.Y.height - e
                    }
                    this.F(this.m, a, b, a, b, c, d)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Md.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1);
            var a;
            this.Jh.globalAlpha = 1;
            this.F(this.Y);
            a = this.Bc() / this.j;
            this.Jh.globalAlpha = a;
            this.F(this.m);
            return null
        },
        end: function() {
            this.Jh.globalAlpha = 1;
            this.finish()
        }
    });
    Nd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Va = b.s();
            this.fb = b.s();
            this.Kn = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f;
                b = 0;
                var g;
                if (0 == this.fb)
                    for (g = this.f / this.Va, f = 0; f < this.Va; f++) 0 == b ? (b = 0, c = f * g, d = this.g * a / this.j, e = f == this.Va - 1 ? this.f : g + 1, 0 == this.Kn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.j, b = this.g - d, e = f == this.Va - 1 ? this.f : g + 1, 0 == this.Kn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, 0, c, d, e), b = 0);
                else
                    for (g = this.g / this.Va, f = 0; f < this.Va; f++) 0 == b ? (b = f * g, c = 0, e = this.f * a / this.j, d = f == this.Va - 1 ? this.g : g + 1, 0 == this.Kn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.j, c = this.f - e, d = f == this.Va - 1 ? this.g : g + 1, 0 == this.Kn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, b, 0, d, e), b = 0)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Od.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Uv = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            if (this.wa) {
                var a = this.Y.width,
                    b = this.Y.height;
                this.I = Math.floor((a * this.Uv / 100 + b * this.Uv / 100) / 2);
                0 == this.I && (this.I = 1);
                this.Ke = (a + this.I - 1) / this.I;
                this.Jg = (b + this.I - 1) / this.I;
                this.Mk = this.Ke * this.Jg;
                a = Math.floor((this.Mk + 7) / 8 + 2);
                this.Kk = 0;
                this.pe = Array(a);
                for (b = 0; b < a; b++) this.pe[b] = 0;
                this.wa = !1
            }
            if (null == this.pe || 2 > this.Ke || 2 > this.Jg || 0 == this.j) this.F(this.m);
            else {
                var c, d, b = a = 0;
                c = Math.floor(this.Mk * this.Bc() / this.j);
                var e = c - this.Kk;
                if (0 != e)
                    for (this.Kk = c, d = 0; d < e; d++) {
                        for (c = 0; 1 > c; c++) {
                            var a = Math.floor(this.Ke * Math.random()),
                                b = Math.floor(this.Jg * Math.random()),
                                f, g;
                            f = b * this.Ke + a;
                            g = Math.floor(f / 8);
                            f = 1 << (f & 7);
                            if (0 == (this.pe[g] & f)) {
                                this.pe[g] |= f;
                                break
                            }
                            var h = g,
                                q = (this.Mk + 7) / 8,
                                k, l = !1;
                            for (k = g; k < q; k++, h++)
                                if (-1 != this.pe[h]) {
                                    b = Math.floor(8 * k / this.Ke);
                                    a = Math.floor(8 * k % this.Ke);
                                    for (f = 1; 0 != f; f <<= 1) {
                                        if (0 == (this.pe[h] & f)) {
                                            this.pe[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Ke && (a = 0, ++b >= this.Jg)) break
                                    }
                                    if (l) break
                                } if (l) break;
                            for (k = h = 0; k < g; k++, h++) {
                                if (255 != this.pe[h]) {
                                    b = Math.floor(8 * k / m_nbBlockPerLine);
                                    a = Math.floor(8 * k % m_nbBlockPerLine);
                                    for (f = 1; 0 != f; f <<= 1) {
                                        if (0 == (this.pe[h] & f)) {
                                            this.pe[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Ke && (a = 0, ++b >= this.Jg)) break
                                    }
                                    if (l) break
                                }
                                if (l) break;
                                l = !1
                            }
                        }
                        1 > c && this.F(this.m, Math.floor(a * this.I), Math.floor(b * this.I), Math.floor(a * this.I), Math.floor(b * this.I), this.I, this.I)
                    }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Pd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc(),
                b = a / this.j;
            if (1 < b) this.F(this.m);
            else {
                var c, d, e;
                .25 > b ? (d = 2 * this.g * a / this.j, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.F(this.m, b, c, b, c, d, e), d = this.g / 7, e = 2 * this.f * a / this.j, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.j - b, e = this.f / 2, c = 0, this.F(this.m, b, c, b, c, d, e), c = this.f / 2, e = this.f * a / this.j - c, b = d = this.g / 2, this.F(this.m, b, c, b, c, d, e), d = this.g * a / this.j - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.F(this.m, b, c, b, c, d, e), e = this.f * a / this.j - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0);
                this.F(this.m, b, c, b, c, d, e)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Qd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.Tv = !1);
            var a = this.Bc(),
                b = a / this.j;
            if (1 < b) this.F(this.m);
            else {
                var c,
                    d, e, f;
                if (.5 >= b) switch (this.fb) {
                    case 0:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, 0, 0, c, d, e, f);
                        break;
                    case 1:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, c, 0, 0, d, e, f);
                        break;
                    case 2:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, 0, d, c, 0, e, f);
                        break;
                    case 3:
                        e = this.g * a / this.j * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.F(this.m, c, d, 0, 0, e, f)
                }
                if (.5 < b) switch (0 == this.Tv && (1 >= this.fb ? this.F(this.m, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.F(this.m, 0, this.f / 2, 0, 0, this.g, this.f / 2), this.Tv = !0), b = a - this.j / 2, b /= this.j / 2, f = this.f / 2 * 1E3 * b / 1E3, this.fb) {
                    case 0:
                    case 1:
                        this.stretch(this.m, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2);
                        this.stretch(this.m, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f);
                        break;
                    case 2:
                    case 3:
                        this.stretch(this.m, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.m, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Rd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.bj = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            var a = this.Y.width,
                b = this.Y.height;
            if (this.wa) {
                switch (this.bj) {
                    case w.Pp:
                    case w.nq:
                        this.Dc = a;
                        break;
                    default:
                        this.Dc = b
                }
                this.xb = 0;
                this.wa = !1
            }
            if (0 == this.j) this.F(this.m);
            else {
                var c = this.Dc * this.Bc() / this.j;
                if (c > this.xb) {
                    var d = 0,
                        e = 0;
                    switch (this.bj) {
                        case w.Pp:
                            d = c - a;
                            e = 0;
                            break;
                        case w.nq:
                            d = a - c;
                            e = 0;
                            break;
                        case w.Qy:
                            d = 0;
                            e = c - b;
                            break;
                        case w.Px:
                            d = 0, e = b - c
                    }
                    this.F(this.m, d, e, 0, 0, a, b);
                    this.xb = c
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Sd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.Va = b.s();
            this.dA = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f, g;
                f = this.g * this.Va / 100;
                g = this.f * this.Va / 100;
                d = f * a / this.j;
                e = g * a / this.j;
                b = this.g / 2 - d / 2;
                c = this.f / 2 - e / 2;
                0 == this.dA ? this.F(this.m, b, c, b, c, d, e) : this.stretch(this.m, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g / 2, f, g);
                b = 100 - this.Va;
                f = this.g * b / 100;
                g = this.f * b / 100;
                d = f / 2 * a / this.j;
                e = g / 2 * a / this.j;
                this.F(this.m, 0, 0, 0, 0, this.g, e);
                this.F(this.m, 0, 0, 0, 0, d, this.f);
                this.F(this.m, 0, this.f - e, 0, this.f - e, this.g, e);
                this.F(this.m, this.g - d, 0, this.g - d, 0, d, this.f)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Td.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.fb) {
                    case 0:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 1:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 2:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f);
                        break;
                    case 3:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f);
                        break;
                    case 4:
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.Y.width / 2, this.Y.height / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g - b, 0, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, 0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 5:
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.Y.width / 2, this.Y.height / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g / 2, this.f / 2 - c, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g / 2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 6:
                        b = this.g;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 7:
                        b = this.g * a / this.j;
                        c = this.f;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 8:
                        b = this.g * a / this.j;
                        c = this.f;
                        this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 9:
                        b = this.g, c = this.f * a / this.j, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Ud.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.mc = 0);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.fb) {
                    case 0:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 1:
                        0 == this.mc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 2:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 3:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.Y, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 4:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.Y, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 5:
                        0 == this.mc ? (c = 2 * this.f * a / this.j, c = this.f - c, b = this.g, this.stretch(this.Y, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (c = 2 * this.f * a / this.j, c -= this.f, b = this.g, this.stretch(this.m, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                        break;
                    case 6:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                        break;
                    case 7:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.Y, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, this.f - b, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 8:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                        break;
                    case 9:
                        0 == this.mc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                        break;
                    case 10:
                        0 == this.mc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.Y, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.mc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Vd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.Jk = this.Ik = 0);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e;
                b = this.f * a / this.j;
                a = this.g * a / this.j;
                if (0 == this.fb) {
                    e = b % 2;
                    for (c = 0; c < this.g; c += 2) {
                        for (d = this.Ik; d < b; d++) this.F(this.m, c, d, c, d, 1, 1);
                        for (d = this.f - b - e; d < this.f - this.Ik; d++) this.F(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    this.Ik = 0 == b % 2 ? b : b - 1
                }
                if (1 == this.fb) {
                    e = a % 2;
                    for (d = 0; d < this.f; d++) {
                        for (c = this.Jk; c < a; c += 2) this.F(this.m, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.g - a - e; c < this.g - this.Jk; c += 2) this.F(this.m, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Jk = 0 == a % 2 ? a : a - 1
                }
                if (2 == this.fb) {
                    e = b % 2;
                    for (c = 0; c < this.g; c += 2) {
                        for (d = this.Ik; d < b; d += 2) this.F(this.m, c, d, c, d, 1, 1);
                        for (d = this.f - b - e; d < this.f - this.Ik; d += 2) this.F(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    e = a % 2;
                    for (d = 0; d < this.f; d += 2) {
                        for (c = this.Jk; c < a; c += 2) this.F(this.m, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.g - a - e; c < this.g - this.Jk; c += 2) this.F(this.m, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Ik = 0 == b % 2 ? b : b - 1;
                    this.Jk = 0 == a % 2 ? a : a - 1
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Wd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Va = b.s();
            this.Jn = b.s();
            this.cA = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.jm = 0);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                b = this.g / 2;
                d = this.f / 2;
                this.jm = 6.28318 * this.Va * a / this.j;
                1 == this.cA && (this.jm = 6.28318 - this.jm);
                c = this.g / 2 - this.g / 2 * a / this.j;
                b = Math.floor(b + Math.cos(this.jm) * c);
                c = Math.floor(d + Math.sin(this.jm) * c);
                d = this.g * a / this.j;
                a = this.f * a / this.j;
                this.stretch(this.Y, 0, 0, this.g, this.f, 0, 0, this.Y.width, this.Y.height);
                1 == this.wR ? this.stretch(this.m, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.m, b - d / 2, c - a / 2, d, a, this.g - d, this.f - a, d, a)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Xd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Va = b.s();
            this.Jn = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.Cr = 0);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                b = this.g / 2;
                c = this.f / 2;
                d = 6.28318 * this.Va * a / this.j;
                d -= 6.28318 * this.Cr;
                1 == this.Jn && (d = 6.28318 - d);
                a = this.g * a / this.j;
                b = Math.floor(b + Math.cos(d) * a);
                c = Math.floor(c + Math.sin(d) * a);
                this.F(this.m);
                this.F(this.Y, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f);
                0 == this.Jn ? 6.28318 <= d && this.Cr++ : 0 >= d && this.Cr++
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Yd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Gx = b.s();
            this.ht = b.o();
            this.TD = b.o();
            this.start(a, c, d, e)
        },
        Qb: function() {
            var a = this.Y.width,
                b = this.Y.height;
            if (this.wa) {
                this.I = Math.floor((a * this.Gx / 100 + b * this.Gx / 100) / 2);
                0 == this.I && (this.I = 1);
                this.Ke = (a + this.I - 1) / this.I;
                this.Jg = (b + this.I - 1) / this.I;
                this.Sv = this.TD;
                this.xd = this.ht;
                switch (this.ht) {
                    case w.Fi:
                        this.ga = this.ha = 0;
                        break;
                    case w.Gi:
                        this.ga = a - this.I;
                        this.ha = 0;
                        break;
                    case w.Oj:
                        this.ga = 0;
                        this.ha = b - this.I;
                        break;
                    case w.Pj:
                        this.ga = a - this.I;
                        this.ha = b - this.I;
                        break;
                    case w.Sx:
                        this.ga = a / 2 - this.I, this.ha = b / 2 - this.I, this.xd = this.Sv == w.Zx ? w.Fi : w.Gi, this.Er = this.ga - this.I, this.Hr = this.ha - this.I, this.Br = this.ha + 2 * this.I, this.Gr = this.ga + 2 * this.I, this.Ke = 2 + 2 * (this.ga + this.I - 1) / this.I, this.Jg = 2 + 2 * (this.ha + this.I - 1) / this.I
                }
                this.Mk = Math.floor(this.Ke * this.Jg);
                this.Kk = 0;
                this.wa = !1
            }
            if (this.I >= a || this.I >= b) this.F(this.m);
            else {
                var c;
                c = Math.floor(this.Mk * this.Bc() / this.j);
                var d = c - this.Kk;
                if (0 != d)
                    for (this.Kk = c, c = 0; c < d; c++)
                        if (this.F(this.m, this.ga, this.ha, this.ga, this.ha, this.I, this.I), this.ht == w.Sx) switch (this.xd) {
                            case w.Fi:
                                this.ga += this.I;
                                this.ga >= this.Gr && (this.ga -= this.I, this.ha += this.I, this.xd = w.Gi, this.Gr += this.I);
                                break;
                            case w.Gi:
                                this.ha += this.I;
                                this.ha >= this.Br && (this.ha -= this.I, this.ga -= this.I, this.xd = w.Pj, this.Br += this.I);
                                break;
                            case w.Pj:
                                this.ga -= this.I;
                                this.ga + this.I <= this.Er && (this.ga += this.I, this.ha -= this.I, this.xd = w.Oj, this.Er -= this.I);
                                break;
                            case w.Oj:
                                this.ha -= this.I, this.ha + this.I <= this.Hr && (this.ha += this.I, this.ga += this.I, this.xd = w.Fi, this.Hr -= this.I)
                        } else switch (this.Sv) {
                            case w.Zx:
                                switch (this.xd) {
                                    case w.Fi:
                                        this.ga += this.I;
                                        this.ga >= a && (this.ga -= this.I, this.ha += this.I, this.xd = w.Gi);
                                        break;
                                    case w.Gi:
                                        this.ga -= this.I;
                                        0 >= this.ga + this.I && (this.ga += this.I, this.ha += this.I, this.xd = w.Fi);
                                        break;
                                    case w.Oj:
                                        this.ga += this.I;
                                        this.ga >= a && (this.ga -= this.I, this.ha -= this.I, this.xd = w.Pj);
                                        break;
                                    case w.Pj:
                                        this.ga -= this.I, 0 >= this.ga + this.I && (this.ga += this.I, this.ha -= this.I, this.xd = w.Oj)
                                }
                                break;
                            case w.IE:
                                switch (this.xd) {
                                    case w.Fi:
                                        this.ha += this.I;
                                        this.ha >= b && (this.ha -= this.I, this.ga += this.I, this.xd = w.Oj);
                                        break;
                                    case w.Gi:
                                        this.ha += this.I;
                                        this.ha >= b && (this.ha -= this.I, this.ga -= this.I, this.xd = w.Pj);
                                        break;
                                    case w.Oj:
                                        this.ha -= this.I;
                                        0 >= this.ha + this.I && (this.ha += this.I, this.ga += this.I, this.xd = w.Fi);
                                        break;
                                    case w.Pj:
                                        this.ha -= this.I, 0 >= this.ha + this.I && (this.ha += this.I, this.ga -= this.I, this.xd = w.Gi)
                                }
                        }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    Zd.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.fb = b.s();
            this.Va = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height, this.Uf = this.Lk = 0);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e;
                0 == this.fb ? (b = this.f / this.Va, e = Math.floor(this.Lk * b) + Math.floor(b), c = 0, d = this.g * a / this.j, d = d * this.Va / 2, d -= this.g * this.Lk, b = 0 == this.Uf ? 0 : this.g - d, this.F(this.m, b, c, b, c, d, e), c = this.f - e, b = 1 == this.Uf ? 0 : this.g - d, this.F(this.m, b, c, b, c, d, e), d >= this.g && (this.Lk++, this.Uf++, 2 == this.Uf && (this.Uf = 0))) : (b = this.g / this.Va, d = Math.floor(this.Lk * b) + Math.floor(b), b = 0, e = this.f * a / this.j, e = e * this.Va / 2, e -= this.f * this.Lk, c = 0 == this.Uf ? 0 : this.f - e, this.F(this.m, b, c, b, c, d, e), b = this.g - d, c = 1 == this.Uf ? 0 : this.f - e, this.F(this.m, b, c, b, c, d, e), e >= this.f && (this.Lk++, this.Uf++, 2 == this.Uf && (this.Uf = 0)))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    $d.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.start(a, c, d, e)
        },
        Qb: function(a) {
            var b = this.Y.width,
                c = this.Y.height;
            this.wa && (this.wa = !1);
            if (0 == this.j) this.F(this.m);
            else {
                var d;
                d = this.Bc();
                0 != (a & w.tq) ? (a = Math.floor(b - b * d / this.j), d = Math.floor(c - c * d / this.j), this.F(this.m), this.stretch(this.Y, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.j), d = Math.floor(c * d / this.j), this.F(this.Y), this.stretch(this.m, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ae.prototype = p.extend(new w, {
        Z: function(a, b, c, d, e) {
            this.Va = b.s();
            this.start(a, c, d, e)
        },
        Qb: function() {
            this.wa && (this.wa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.Bc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                0 == this.Va ? (c = this.g * a / this.j, d = this.f * a / this.j, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.m, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.j, c = this.g - c, d = this.f * a / this.j, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.Y, 0, 0, this.g, this.f, a, b, c, d))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    n.ih = {
        py: "PK\u0003\u0004",
        Ux: "PK\u0001\u0002",
        nt: "PK\u0005\u0006",
        Ty: "PK\u0006\u0007",
        KG: "PK\u0006\u0006",
        EM: "PK\u0007\b"
    };
    n.HH = {
        Gh: !1,
        Oi: !1,
        dir: !1,
        Nf: null,
        Rl: null
    };
    n.prototype = function() {
        function a(d) {
            "/" != d.slice(-1) && (d += "/");
            if (!this.files[d]) {
                var e = b(d);
                e && a.call(this, e);
                c.call(this, d, null, {
                    dir: !0
                })
            }
            return this.files[d]
        }

        function b(a) {
            "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
            var b = a.lastIndexOf("/");
            return 0 < b ? a.substring(0, b) : ""
        }

        function c(c, e, q) {
            var g = b(c);
            g && a.call(this, g);
            q = q || {};
            !0 === q.Gh && null == q.Oi && (q.Oi = !0);
            q = d(q, n.HH);
            q.Nf = q.Nf || new Date;
            null !== q.Rl && (q.Rl = q.Rl.toUpperCase());
            q.dir || null === e || "undefined" === typeof e ? (q.Gh = !1, q.Oi = !1, e = null) : n.ul.Zs && e instanceof Uint8Array ? (q.Gh = !1, q.Oi = !0, e = n.oh.Ys(e)) : n.ul.Yy && e instanceof ArrayBuffer ? (q.Gh = !1, q.Oi = !0, e = new Uint8Array(e), e = n.oh.Ys(e)) : q.Oi && !q.Gh && (!0 !== q.tC && (e = n.oh.ED(e)), delete q.tC);
            return this.files[c] = new f(c, e, q)
        }

        function d() {
            var a = {},
                b, c;
            for (b = 0; b < arguments.length; b++)
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            var c = "",
                d;
            for (d = 0; d < b; d++) c += String.fromCharCode(a & 255), a >>>= 8;
            return c
        }

        function f(a, b, c) {
            this.name = a;
            this.data = b;
            this.options = c
        }
        f.prototype = {
            Zy: function() {
                var a = this.data;
                if (null === a || "undefined" === typeof a) return "";
                this.options.Gh && (a = rb.decode(a));
                this.options.Oi || (a = n.prototype.PD(a));
                return a
            }
        };
        return {
            load: function() {
                throw Error("Load method is not defined. Is the file jszip-load.js included ?");
            },
            filter: function(a) {
                var b = [],
                    c, e, g;
                for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
                return b
            },
            file: function(a, b, d) {
                if (1 === arguments.length) {
                    if (a instanceof RegExp) {
                        var e = a;
                        return this.filter(function(a, b) {
                            return !b.options.dir && e.test(a)
                        })
                    }
                    return this.filter(function(b, c) {
                        return !c.options.dir && b === a
                    })[0] || null
                }
                a = this.root + a;
                c.call(this, a, b, d);
                return this
            },
            rQ: function(b) {
                if (!b) return this;
                if (b instanceof RegExp) return this.filter(function(a, c) {
                    return c.options.dir && b.test(a)
                });
                var c = a.call(this, this.root + b),
                    d = this.clone();
                d.root = c.name;
                return d
            },
            remove: function(a) {
                a = this.root + a;
                var b = this.files[a];
                b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
                if (b)
                    if (b.options.dir)
                        for (var b = this.filter(function(b, c) {
                                return c.name.slice(0, a.length) === a
                            }), c = 0; c < b.length; c++) delete this.files[b[c].name];
                    else delete this.files[a];
                return this
            },
            uQ: function(a) {
                var b, c;
                a = d(a || {}, {
                    Gh: !0,
                    Rl: "STORE",
                    type: "base64"
                });
                var f = a.Rl.toUpperCase();
                if (!n.Mf[f]) throw f + " is not a valid compression method !";
                var g = [],
                    k = [],
                    l = 0,
                    m;
                for (m in this.files)
                    if (this.files.hasOwnProperty(m)) {
                        b = this.files[m];
                        var p = this.PD(b.name),
                            r, t, u;
                        t = b;
                        b = p;
                        var v = f;
                        r = b !== t.name;
                        c = t.Zy();
                        var w = t.options;
                        u = w.Nf.getHours();
                        u = u << 6 | w.Nf.getMinutes();
                        u = u << 5 | w.Nf.getSeconds() / 2;
                        t = w.Nf.getFullYear() - 1980;
                        t = t << 4 | w.Nf.getMonth() + 1;
                        t = t << 5 | w.Nf.getDate();
                        var B = null !== c && 0 !== c.length,
                            v = w.Rl || v;
                        if (!n.Mf[v]) throw v + " is not a valid compression method !";
                        w = n.Mf[v];
                        v = B ? w.mH(c) : "";
                        r = "\n\x00" + (r ? "\x00\b" : "\x00\x00") + (B ? w.Jr : n.Mf.STORE.Jr);
                        r += e(u, 2);
                        r += e(t, 2);
                        r += B ? e(this.Jq(c), 4) : "\x00\x00\x00\x00";
                        r += B ? e(v.length, 4) : "\x00\x00\x00\x00";
                        r += B ? e(c.length, 4) : "\x00\x00\x00\x00";
                        r += e(b.length, 2);
                        b = r += "\x00\x00";
                        c = v;
                        c = n.ih.py + b + p + c;
                        p = n.ih.Ux + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[m].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(l, 4) + p;
                        l += c.length;
                        k.push(c);
                        g.push(p)
                    } f = k.join("");
                g = g.join("");
                k = f + g + (n.ih.nt + "\x00\x00\x00\x00" + e(k.length, 2) + e(k.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
                switch (a.type.toLowerCase()) {
                    case "uint8array":
                        return n.oh.wx(k);
                    case "arraybuffer":
                        return n.oh.wx(k).buffer;
                    case "blob":
                        return n.oh.gL(k);
                    case "base64":
                        return a.Gh ? rb.encode(k) : k;
                    default:
                        return k
                }
            },
            Jq: function(a, b) {
                if ("" === a || "undefined" === typeof a) return 0;
                var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
                    1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368,
                    4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646,
                    62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
                    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701,
                    2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
                ];
                "undefined" == typeof b && (b = 0);
                var d;
                b ^= -1;
                for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
                return b ^ -1
            },
            clone: function() {
                var a = new n,
                    b;
                for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
                return a
            },
            PD: function(a) {
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
                }
                return b
            },
            OD: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        }
    }();
    n.Mf = {
        STORE: {
            Jr: "\x00\x00",
            mH: function(a) {
                return a
            },
            Bx: function(a) {
                return a
            }
        }
    };
    n.ul = {
        Yy: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
        Zs: "undefined" !== typeof Uint8Array,
        blob: function() {
            if ("undefined" === typeof ArrayBuffer) return !1;
            var a = new ArrayBuffer(0);
            try {
                return 0 === (new Blob([a], {
                    type: "application/zip"
                })).size
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.bG || window.VF);
                b.append(a);
                return 0 === b.getBlob("application/zip").size
            } catch (c) {}
            return !1
        }()
    };
    n.oh = {
        ED: function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
            return b
        },
        wx: function(a) {
            if (!n.ul.Zs) throw Error("Uint8Array is not supported by this browser");
            for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
            return b
        },
        Ys: function(a) {
            if (!n.ul.Zs) throw Error("Uint8Array is not supported by this browser");
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
            return b
        },
        gL: function(a) {
            if (!n.ul.blob) throw Error("Blob is not supported by this browser");
            a = n.oh.wx(a).buffer;
            try {
                return new Blob([a], {
                    type: "application/zip"
                })
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.bG || window.VF);
                b.append(a);
                return b.getBlob("application/zip")
            } catch (c) {}
            throw Error("Bug : can't construct the Blob.");
        }
    };
    var rb = function() {
        return {
            encode: function(a) {
                for (var b = "", c, d, e, f, g, h, k = 0; k < a.length;) c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
                return b
            },
            decode: function(a) {
                var b = "",
                    c, d, e, f, g,
                    h = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
                return b
            }
        }
    }();
    if (!n) throw "JSZip not defined";
    (function() {
        function a() {
            this.list = this.next = null
        }

        function b() {
            this.n = this.Jf = this.e = 0;
            this.t = null
        }

        function c(c, d, e, f, g, h) {
            this.Nj = 16;
            this.cG = 288;
            this.status = 0;
            this.root = null;
            this.Sh = 0;
            var k = Array(this.Nj + 1),
                m, l, q, n, p, r, t, v = Array(this.Nj + 1),
                C, u, w, B = new b,
                E = Array(this.Nj);
            n = Array(this.cG);
            var z, D = Array(this.Nj + 1),
                A, G, H;
            H = this.root = null;
            for (p = 0; p < k.length; p++) k[p] = 0;
            for (p = 0; p < v.length; p++) v[p] = 0;
            for (p = 0; p < E.length; p++) E[p] = null;
            for (p = 0; p < n.length; p++) n[p] = 0;
            for (p = 0; p < D.length; p++) D[p] = 0;
            m = 256 < d ? c[256] : this.Nj;
            C = c;
            u = 0;
            p = d;
            do k[C[u]]++, u++; while (0 < --p);
            if (k[0] == d) this.root = null, this.status = this.Sh = 0;
            else {
                for (r = 1; r <= this.Nj && 0 == k[r]; r++);
                t = r;
                h < r && (h = r);
                for (p = this.Nj; 0 != p && 0 == k[p]; p--);
                q = p;
                h > p && (h = p);
                for (A = 1 << r; r < p; r++, A <<= 1)
                    if (0 > (A -= k[r])) {
                        this.status = 2;
                        this.Sh = h;
                        return
                    } if (0 > (A -= k[p])) this.status = 2, this.Sh = h;
                else {
                    k[p] += A;
                    D[1] = r = 0;
                    C = k;
                    u = 1;
                    for (w = 2; 0 < --p;) D[w++] = r += C[u++];
                    C = c;
                    p = u = 0;
                    do 0 != (r = C[u++]) && (n[D[r]++] = p); while (++p < d);
                    d = D[q];
                    D[0] = p = 0;
                    C = n;
                    u = 0;
                    n = -1;
                    z = v[0] = 0;
                    w = null;
                    for (G = 0; t <= q; t++)
                        for (c = k[t]; 0 < c--;) {
                            for (; t > z + v[1 + n];) {
                                z += v[1 + n];
                                n++;
                                G = (G = q - z) > h ? h : G;
                                if ((l = 1 << (r = t - z)) > c + 1)
                                    for (l -= c + 1, w = t; ++r < G && !((l <<= 1) <= k[++w]);) l -= k[w];
                                z + r > m && z < m && (r = m - z);
                                G = 1 << r;
                                v[1 + n] = r;
                                w = Array(G);
                                for (l = 0; l < G; l++) w[l] = new b;
                                H = null == H ? this.root = new a : H.next = new a;
                                H.next = null;
                                H.list = w;
                                E[n] = w;
                                0 < n && (D[n] = p, B.Jf = v[n], B.e = 16 + r, B.t = w, r = (p & (1 << z) - 1) >> z - v[n], E[n - 1][r].e = B.e, E[n - 1][r].Jf = B.Jf, E[n - 1][r].n = B.n, E[n - 1][r].t = B.t)
                            }
                            B.Jf = t - z;
                            u >= d ? B.e = 99 : C[u] < e ? (B.e = 256 > C[u] ? 16 : 15, B.n = C[u++]) : (B.e = g[C[u] - e], B.n = f[C[u++] - e]);
                            l = 1 << t - z;
                            for (r = p >> z; r < G; r += l) w[r].e = B.e, w[r].Jf = B.Jf, w[r].n = B.n, w[r].t = B.t;
                            for (r = 1 << t - 1; 0 != (p & r); r >>= 1) p ^= r;
                            for (p ^= r;
                                (p & (1 << z) - 1) != D[n];) z -= v[n], n--
                        }
                    this.Sh = v[1];
                    this.status = 0 != A && 1 != q ? 1 : 0
                }
            }
        }

        function d(a) {
            for (; D < a;) z |= (F.length == K ? -1 : F.charCodeAt(K++) & 255) << D, D += 8
        }

        function e(a) {
            return z & L[a]
        }

        function f(a) {
            z >>= a;
            D -= a
        }

        function g(a, b, c) {
            var g, h, k;
            if (0 == c) return 0;
            for (k = 0;;) {
                d(H);
                h = G.list[e(H)];
                for (g = h.e; 16 < g;) {
                    if (99 == g) return -1;
                    f(h.Jf);
                    g -= 16;
                    d(g);
                    h = h.t[e(g)];
                    g = h.e
                }
                f(h.Jf);
                if (16 == g) t &= 32767, a[b + k++] = r[t++] = h.n;
                else {
                    if (15 == g) break;
                    d(g);
                    B = h.n + e(g);
                    f(g);
                    d(I);
                    h = J.list[e(I)];
                    for (g = h.e; 16 < g;) {
                        if (99 == g) return -1;
                        f(h.Jf);
                        g -= 16;
                        d(g);
                        h = h.t[e(g)];
                        g = h.e
                    }
                    f(h.Jf);
                    d(g);
                    A = t - h.n - e(g);
                    for (f(g); 0 < B && k < c;) B--, A &= 32767, t &= 32767, a[b + k++] = r[t++] = r[A++]
                }
                if (k == c) return c
            }
            v = -1;
            return k
        }

        function h(a, b, h) {
            var k, m, l, q, n, p, r, t = Array(316);
            for (k = 0; k < t.length; k++) t[k] = 0;
            d(5);
            p = 257 + e(5);
            f(5);
            d(5);
            r = 1 + e(5);
            f(5);
            d(4);
            k = 4 + e(4);
            f(4);
            if (286 < p || 30 < r) return -1;
            for (m = 0; m < k; m++) d(3), t[Q[m]] = e(3), f(3);
            for (; 19 > m; m++) t[Q[m]] = 0;
            H = 7;
            m = new c(t, 19, 19, null, null, H);
            if (0 != m.status) return -1;
            G = m.root;
            H = m.Sh;
            q = p + r;
            for (k = l = 0; k < q;)
                if (d(H), n = G.list[e(H)], m = n.Jf, f(m), m = n.n, 16 > m) t[k++] = l = m;
                else if (16 == m) {
                d(2);
                m = 3 + e(2);
                f(2);
                if (k + m > q) return -1;
                for (; 0 < m--;) t[k++] = l
            } else {
                17 == m ? (d(3), m = 3 + e(3), f(3)) : (d(7), m = 11 + e(7), f(7));
                if (k + m > q) return -1;
                for (; 0 < m--;) t[k++] = 0;
                l = 0
            }
            H = 9;
            m = new c(t, p, 257, M, N, H);
            0 == H && (m.status = 1);
            if (0 != m.status) return -1;
            G = m.root;
            H = m.Sh;
            for (k = 0; k < r; k++) t[k] = t[k + p];
            I = 6;
            m = new c(t, r, 0, O, P, I);
            J = m.root;
            I = m.Sh;
            return 0 == I && 257 < p || 0 != m.status ? -1 : g(a, b, h)
        }

        function k(a, b) {
            var k, l;
            for (k = 0; k < b && (!E || -1 != v);) {
                if (0 < B) {
                    if (0 != v)
                        for (; 0 < B && k < b;) B--, A &= 32767, t &= 32767, a[0 + k++] = r[t++] = r[A++];
                    else {
                        for (; 0 < B && k < b;) B--, t &= 32767, d(8), a[0 + k++] = r[t++] = e(8), f(8);
                        0 == B && (v = -1)
                    }
                    if (k == b) break
                }
                if (-1 == v) {
                    if (E) break;
                    d(1);
                    0 != e(1) && (E = !0);
                    f(1);
                    d(2);
                    v = e(2);
                    f(2);
                    G = null;
                    B = 0
                }
                switch (v) {
                    case 0:
                        var q = a,
                            n = 0 + k,
                            C = b - k;
                        l = D & 7;
                        f(l);
                        d(16);
                        l = e(16);
                        f(16);
                        d(16);
                        if (l != (~z & 65535)) l = -1;
                        else {
                            f(16);
                            B = l;
                            for (l = 0; 0 < B && l < C;) B--, t &= 32767, d(8), q[n + l++] = r[t++] = e(8), f(8);
                            0 == B && (v = -1)
                        }
                        break;
                    case 1:
                        if (null != G) l = g(a, 0 + k, b - k);
                        else a: {
                            var F;l = a;q = 0 + k;n = b - k;
                            if (null == m) {
                                C = Array(288);
                                for (F = 0; 144 > F; F++) C[F] = 8;
                                for (; 256 > F; F++) C[F] = 9;
                                for (; 280 > F; F++) C[F] = 7;
                                for (; 288 > F; F++) C[F] = 8;
                                w = 7;
                                F = new c(C, 288, 257, M, N, w);
                                if (0 != F.status) {
                                    alert("HufBuild error: " + F.status);
                                    l = -1;
                                    break a
                                }
                                m = F.root;
                                w = F.Sh;
                                for (F = 0; 30 > F; F++) C[F] = 5;
                                p = 5;
                                F = new c(C, 30, 0, O, P, p);
                                if (1 < F.status) {
                                    m = null;
                                    alert("HufBuild error: " + F.status);
                                    l = -1;
                                    break a
                                }
                                u = F.root;
                                p = F.Sh
                            }
                            G = m;J = u;H = w;I = p;l = g(l, q, n)
                        }
                        break;
                    case 2:
                        l = null != G ? g(a, 0 + k, b - k) : h(a, 0 + k, b - k);
                        break;
                    default:
                        l = -1
                }
                if (-1 == l) return E ? 0 : -1;
                k += l
            }
            return k
        }

        function l(a) {
            var b, c, d;
            null == r && (r = Array(65536));
            D = z = t = 0;
            v = -1;
            E = !1;
            B = A = 0;
            G = null;
            F = a;
            K = 0;
            b = Array(1024);
            for (a = ""; 0 < (c = k(b, b.length));)
                for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
            F = null;
            return a
        }
        var p, r, t, m = null,
            u, w, z, D, v, E, B, A, G, J, H, I, F, K, L = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
            M = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
                99, 115, 131, 163, 195, 227, 258, 0, 0
            ],
            N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
            O = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        n.Mf.DEFLATE ? n.Mf.DEFLATE.Bx = l : n.Mf.DEFLATE = {
            Jr: "\b\x00",
            Bx: l
        }
    })();
    (function() {
        function a(a) {
            var b = "",
                c, d;
            for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase();
            return b
        }

        function b(a) {
            this.stream = "";
            n.ul.Zs && a instanceof Uint8Array ? this.stream = n.oh.Ys(a) : n.ul.Yy && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = n.oh.Ys(a)) : this.stream = n.oh.ED(a);
            this.index = 0
        }

        function c(a, b) {
            this.options = a;
            this.Pv = b
        }

        function d(a, b) {
            this.files = [];
            this.Pv = b;
            a && this.load(a)
        }
        b.prototype = {
            sz: function(a) {
                this.rz(this.index + a)
            },
            rz: function(a) {
                if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + a + "). Corrupted zip ?");
            },
            Xm: function(a) {
                this.rz(a);
                this.index = a
            },
            wD: function(a) {
                this.Xm(this.index + a)
            },
            cH: function(a) {
                return this.stream.charCodeAt(a)
            },
            Fa: function(a) {
                var b = 0,
                    c;
                this.sz(a);
                for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.cH(c);
                this.index += a;
                return b
            },
            sf: function(a) {
                this.sz(a);
                var b = this.stream.slice(this.index, this.index + a);
                this.index += a;
                return b
            },
            rK: function() {
                var a = this.Fa(4);
                return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) << 1)
            }
        };
        c.prototype = {
            UI: function() {
                return 1 === (this.iz & 1)
            },
            qL: function() {
                return 2048 === (this.iz & 2048)
            },
            vK: function(b) {
                var c, d;
                b.wD(22);
                this.cv = b.Fa(2);
                d = b.Fa(2);
                this.fileName = b.sf(this.cv);
                b.wD(d);
                if (-1 == this.Hq || -1 == this.at) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                this.nH = b.sf(this.Hq);
                a: {
                    b = this.yz;
                    for (c in n.Mf)
                        if (n.Mf.hasOwnProperty(c) && n.Mf[c].Jr === b) {
                            c = n.Mf[c];
                            break a
                        } c = null
                }
                if (null === c) throw Error("Corrupted zip : compression " + a(this.yz) + " unknown (inner file : " + this.fileName + ")");
                this.Cx = c.Bx(this.nH);
                if (this.Cx.length !== this.at) throw Error("Bug : uncompressed data size mismatch");
                if (this.Pv.VP && n.prototype.Jq(this.Cx) !== this.Jq) throw Error("Corrupted zip : CRC32 mismatch");
            },
            qK: function(a) {
                a.sf(2);
                a.Fa(2);
                this.iz = a.Fa(2);
                this.yz = a.sf(2);
                this.Nf = a.rK();
                this.Jq = a.Fa(4);
                this.Hq = a.Fa(4);
                this.at = a.Fa(4);
                this.cv = a.Fa(2);
                this.cI = a.Fa(2);
                this.fI = a.Fa(2);
                this.Xz = a.Fa(2);
                a.Fa(2);
                this.bI = a.Fa(4);
                this.Rv = a.Fa(4);
                if (this.UI()) throw Error("Encrypted zip are not supported");
                this.fileName = a.sf(this.cv);
                this.tK(a);
                this.UJ(a);
                this.mA = a.sf(this.fI);
                this.dir = this.bI & 16 ? !0 : !1
            },
            UJ: function() {
                if (this.Tq[1]) {
                    var a = new b(this.Tq[1].value); - 1 === this.at && (this.at = a.Fa(8)); - 1 === this.Hq && (this.Hq = a.Fa(8)); - 1 === this.Rv && (this.Rv = a.Fa(8)); - 1 === this.Xz && (this.Xz = a.Fa(4))
                }
            },
            tK: function(a) {
                var b = a.index,
                    c, d, e;
                for (this.Tq = this.Tq || {}; a.index < b + this.cI;) c = a.Fa(2), d = a.Fa(2), e = a.sf(d), this.Tq[c] = {
                    id: c,
                    length: d,
                    value: e
                }
            },
            CI: function() {
                this.qL() && (this.fileName = n.prototype.OD(this.fileName), this.mA = n.prototype.OD(this.mA))
            }
        };
        d.prototype = {
            Dq: function(b) {
                var c = this.$a.sf(4);
                if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
            },
            lK: function() {
                this.Wz = this.$a.Fa(2);
                this.Yz = this.$a.Fa(2);
                this.nz = this.$a.Fa(2);
                this.mz = this.$a.Fa(2);
                this.oz = this.$a.Fa(4);
                this.Gu = this.$a.Fa(4);
                this.uL = this.$a.Fa(2);
                this.$a.sf(this.uL)
            },
            mK: function() {
                this.sL = this.$a.Fa(8);
                this.$a.sf(2);
                this.$a.Fa(2);
                this.Wz = this.$a.Fa(4);
                this.Yz = this.$a.Fa(4);
                this.nz = this.$a.Fa(8);
                this.mz = this.$a.Fa(8);
                this.oz = this.$a.Fa(8);
                this.Gu = this.$a.Fa(8);
                this.tL = {};
                for (var a = this.sL - 44, b, c, d; 0 < a;) b = this.$a.Fa(2), c = this.$a.Fa(4), d = this.$a.sf(c), this.tL[b] = {
                    id: b,
                    length: c,
                    value: d
                }
            },
            nK: function() {
                this.$a.Fa(4);
                this.yK = this.$a.Fa(8);
                this.MH = this.$a.Fa(4);
                if (1 < this.MH) throw Error("Multi-volumes zip are not supported");
            },
            uK: function() {
                var a, b;
                for (a = 0; a < this.files.length; a++) b = this.files[a], this.$a.Xm(b.Rv), this.Dq(n.ih.py), b.vK(this.$a), b.CI()
            },
            pK: function() {
                var a;
                for (this.$a.Xm(this.Gu); this.$a.sf(4) === n.ih.Ux;) a = new c({
                    SD: this.SD
                }, this.Pv), a.qK(this.$a), this.files.push(a)
            },
            sK: function() {
                var a = this.$a.stream.lastIndexOf(n.ih.nt);
                if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
                this.$a.Xm(a);
                this.Dq(n.ih.nt);
                this.lK();
                if (65535 === this.Wz || 65535 === this.Yz || 65535 === this.nz || 65535 === this.mz || -1 === this.oz || -1 === this.Gu) {
                    this.SD = !0;
                    a = this.$a.stream.lastIndexOf(n.ih.Ty);
                    if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                    this.$a.Xm(a);
                    this.Dq(n.ih.Ty);
                    this.nK();
                    this.$a.Xm(this.yK);
                    this.Dq(n.ih.KG);
                    this.mK()
                }
            },
            load: function(a) {
                this.$a = new b(a);
                this.sK();
                this.pK();
                this.uK()
            }
        };
        n.prototype.load = function(a, b) {
            var c, e, f;
            b = b || {};
            b.Gh && (a = rb.decode(a));
            c = (new d(a, b)).files;
            for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.Cx, {
                Oi: !0,
                tC: !0,
                Nf: f.Nf,
                dir: f.dir
            });
            return this
        }
    })();
    var Be = document.getElementsByTagName("script"),
        Ce = Be[Be.length - 1].src;
    document.sR = Ce.substring(0, Ce.lastIndexOf("/") + 1);
    ja.Runtime = be;
    ja.headerLoaded = ce;
    ja.lL = "updateApplication";
    ja[window.lL] = Za;
    Ea.prototype = {
        Ab: function(a, b, c) {
            if (this.visible) {
                this.tg && (a.La.save(), a.La.translate(this.up, this.wp), 0 != this.angle && a.La.rotate(.0174532925 * -this.angle), a.La.scale(Math.max(.001, this.qc), Math.max(.001, this.rc)), a.La.translate(-this.Ga, -this.Ca));
                var d;
                for (d = 0; d < this.children.length; d++) this.children[d].Ab(a, b + this.x, c + this.y);
                this.tg && a.La.restore()
            }
        },
        me: function(a) {
            this.children.push(a)
        },
        vq: function(a, b) {
            b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b, 0, a))
        },
        zK: function() {
            this.children.length = 0
        },
        removeChild: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return this.children.splice(b, 1), b;
            return -1
        },
        ed: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return b;
            return -1
        },
        xe: function(a, b) {
            var c, d = null;
            for (c = 0; c < this.children.length; c++)
                if (this.children[c] == a) {
                    d = this.children[c];
                    break
                } null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b, 0, a))
        }
    };
    ra.Bp = 0;
    ra.ze = 1;
    ra.lE = 1;
    ra.mE = 2;
    ra.fn = 64;
    ra.gn = 16;
    ra.Bl = 6;
    F.bP = 0;
    F.cP = 1;
    F.Tj = 0;
    F.Uj = 1;
    F.Gv = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
    F.Rw = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
    F.kh = new G;
    F.Gj = new G;
    F.Pl = new G;
    F.Pi = new G;
    F.prototype = {
        Ou: function(a, b, c) {
            var d, e;
            this.width = b.width;
            this.height = b.height;
            this.Ga = b.Ga;
            this.Ca = b.Ca;
            var f = Math.floor((this.width + 15 & 4294967280) / 16);
            this.lineWidth = f;
            e = f * this.height + 1;
            if ("undefined" != typeof ArrayBuffer) this.R = new Uint16Array(new ArrayBuffer(2 * e));
            else
                for (this.R = Array(e), d = 0; d < e; d++) this.R[d] = 0;
            d = document.createElement("canvas");
            d.width = b.width;
            d.height = b.height;
            d = d.getContext("2d");
            0 == b.sb ? d.drawImage(b.rb, 0, 0) : d.drawImage(a.ca.Mb[b.sb], b.yd, b.zd, b.width, b.height, 0, 0, b.width, b.height);
            a = d.getImageData(0, 0, this.width, this.height);
            if (0 == (c & F.Uj))
                for (c = 0; c < this.height; c++) {
                    e = c * b.width * 4 + 3;
                    var g = c * f,
                        h = 32768;
                    for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.R[g] |= h),
                        e += 4, h >>>= 1, 0 == h && (h = 32768, g++)
                } else
                    for (d = 0; d < this.width; d++) {
                        for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
                        if (c < this.height)
                            for (g = Math.min(this.height, c + ra.Bl), h = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.R[e] |= h)
                    }
        },
        Pu: function(a, b, c) {
            var d;
            this.width = b.width;
            this.height = b.height;
            this.Ga = b.Ga;
            this.Ca = b.Ca;
            this.lineWidth = a = Math.floor((this.width + 15 & 4294967280) / 16);
            b = a * this.height + 1;
            this.R = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * b)) : Array(b);
            b = this.height;
            0 != (c & F.Uj) && b > ra.Bl && (b = ra.Bl);
            var e = a,
                f = 0;
            0 != (this.width & 15) && (f = 65535 << 16 - (this.width & 15) & 65535, e--);
            for (d = 0; d < b; d++) {
                var g = d * a;
                for (c = 0; c < e; c++) this.R[g++] = 65535;
                0 != f && (this.R[g] = f)
            }
        },
        EK: function(a, b, c) {
            var d, e, f;
            90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
            var g, h;
            null == b ? (e = h = 0, F.kh.x = F.kh.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, h = -b.y * f, F.kh.x = Math.floor(g + h), F.kh.y = Math.floor(e - d));
            d = null == b ? a.right : a.right - b.x;
            g = d * c;
            d *= f;
            F.Gj.x = Math.floor(g + h);
            F.Gj.y = Math.floor(e - d);
            e = null == b ? a.bottom : a.bottom - b.y;
            F.Pi.x = Math.floor(g + e * f);
            F.Pi.y = Math.floor(e * c - d);
            F.Pl.x = F.kh.x + F.Pi.x - F.Gj.x;
            F.Pl.y = F.kh.y + F.Pi.y - F.Gj.y;
            c = Math.min(F.kh.x, Math.min(F.Gj.x, Math.min(F.Pi.x, F.Pl.x)));
            f = Math.min(F.kh.y, Math.min(F.Gj.y, Math.min(F.Pi.y, F.Pl.y)));
            g = Math.max(F.kh.x, Math.max(F.Gj.x, Math.max(F.Pi.x, F.Pl.x)));
            d = Math.max(F.kh.y, Math.max(F.Gj.y, Math.max(F.Pi.y, F.Pl.y)));
            null != b && (b.x = -c, b.y = -f);
            a.right = g - c;
            a.bottom = d - f
        },
        yH: function(a, b, c, d) {
            var e,
                f, g = a.width;
            e = a.height;
            var h = new aa;
            h.right = Math.floor(a.width * c);
            h.bottom = Math.floor(a.height * d);
            var k = new G;
            k.x = Math.floor(a.Ga * c);
            k.y = Math.floor(a.Ca * d);
            this.EK(h, k, b);
            var l = h.right,
                h = h.bottom;
            if (0 >= l || 0 >= h) return !1;
            var n = a.lineWidth,
                p = (l + 15 & 2147483632) / 16;
            this.R = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (p * h + 1))) : Array(p * h + 1);
            var r;
            for (r = p * h; 0 <= r; r--) this.R[r] = 0;
            this.lineWidth = p;
            this.width = l;
            this.height = h;
            this.Ga = k.x;
            this.Ca = k.y;
            b *= .017453292;
            f = Math.cos(b);
            var m = Math.sin(b);
            b = 0;
            k = Math.floor(65536 * (g / 2 - (l / 2 * f - h / 2 * m) / c));
            r = Math.floor(65536 * (e / 2 - (l / 2 * m + h / 2 * f) / d));
            var t = Math.floor(65536 * f / c),
                u = Math.floor(65536 * m / d),
                w = l / 16,
                l = l % 16;
            d = Math.floor(65536 * f / d);
            c = Math.floor(65536 * m / c);
            var g = 65536 * g,
                m = 65536 * e,
                z, v;
            for (f = 0; f < h; f++) {
                var E = k,
                    B = r,
                    D = b,
                    A;
                for (e = 0; e < w; e++) {
                    var F = 0;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 32768));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 16384));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 8192));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 4096));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 2048));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 1024));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 512));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 256));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 128));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 64));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 32));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 16));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 8));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 4));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 2));
                    E += t;
                    B += u;
                    0 <= E && E < g && 0 <= B && B < m && (A = Math.floor(E / 65536), v = Math.floor(B / 65536), z = 32768 >>> A % 16, v = a.R[Math.floor(v * n + A / 16)], 0 != (v & z) && (F |= 1));
                    E += t;
                    B += u;
                    this.R[D++] = F
                }
                if (0 != l) {
                    F = 32768;
                    for (e = A = 0; e < l; e++, F = F >> 1 & 32767) {
                        if (0 <= E && E < g && 0 <= B && B < m) {
                            v = Math.floor(E / 65536);
                            var H = Math.floor(B / 65536);
                            z = 32768 >>> v % 16;
                            v = a.R[Math.floor(H * n + v / 16)];
                            0 != (v & z) && (A |= F)
                        }
                        E += t;
                        B += u
                    }
                    this.R[D] = A
                }
                b += p;
                k -= c;
                r += d
            }
            return !0
        },
        Fj: function(a, b, c, d, e, f, g) {
            var h, k, l;
            a <= e ? (h = this, l = Math.floor(c), c = Math.floor(g), k = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (h = d, d = this, l = Math.floor(g), c = Math.floor(c), k = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
            f = h.height;
            var n = 0;
            0 != l && (f = l, g += h.height - l, n = h.height - l);
            e = d.height;
            var p = 0;
            0 != c && (e = c, b += d.height - c, p = d.height - c);
            if (k >= a + d.width || k + h.width <= a || g >= b + e || g + f < b) return !1;
            c = a - k;
            l = Math.floor(c / 16);
            c %= 16;
            k = Math.min(k + h.width - a, d.width);
            k = Math.floor((k + 15) / 16);
            g <= b ? (a = b - g + n, n = p, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + p, g = Math.min(g + f, b + e) - g);
            b = a * h.lineWidth;
            e = n * d.lineWidth;
            if (0 != c) switch (k) {
                case 1:
                    for (a = 0; a < g; a++) {
                        n = h.R[b + l] << c;
                        if (0 != (n & d.R[e]) || l + 1 < h.lineWidth && (n = h.R[b + l + 1] << c, n >>>= 16, 0 != (n & d.R[e]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                case 2:
                    for (a = 0; a < g; a++) {
                        n = h.R[b + l] << c;
                        if (0 != (n & d.R[e])) return !0;
                        n = h.R[b + l + 1] << c;
                        p = n >>> 16;
                        if (0 != (p & d.R[e]) || 0 != (n & d.R[e + 1]) || l + 2 < h.lineWidth && (n = h.R[b + l + 2] << c, n >>>= 16, 0 != (n & d.R[e + 1]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                default:
                    for (a = 0; a < g; a++) {
                        n = h.R[b + l] << c;
                        if (0 != (n & d.R[e])) return !0;
                        for (f = 0; f < k - 1; f++)
                            if (n = h.R[b + l + f + 1] << c, p = n >>> 16, 0 != (p & d.R[e + f]) || 0 != (n & d.R[e + f + 1])) return !0;
                        if (l + f + 1 < h.lineWidth && (n = h.R[b + l + f + 1] << c, n >>>= 16, 0 != (n & d.R[e + f]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
            } else
                for (a = 0; a < g; a++) {
                    for (f = 0; f < k; f++)
                        if (n = h.R[b + l + f], 0 != (d.R[e + f] & n)) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
            return !1
        },
        xx: function(a, b, c, d, e, f, g, h) {
            a = Math.floor(a);
            b = Math.floor(b);
            d = Math.floor(d);
            e = Math.floor(e);
            var k = 0,
                l = this.height;
            0 < c && (k = this.height - c, b += k, l = c);
            c = g;
            0 < h && (e += g - h, c = h);
            if (a >= d + f || a + this.width <= d || b >= e + c || b + l < e) return !1;
            a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
            b <= e ? (k = e - b + k, b = Math.min(b + l, e + c) - e) : b = Math.min(b + l, e + c) - b;
            e = Math.floor(g / 8);
            l = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
            for (f = 0; f < b; f++) switch (d = (f + k) * this.lineWidth, l) {
                case 1:
                    c = F.Gv[g & 15] & F.Rw[(g + a - 1 & 15) + 1];
                    if (0 != (this.R[d + e] & c)) return !0;
                    break;
                case 2:
                    c = F.Gv[g & 15];
                    if (0 != (this.R[d + e] & c)) return !0;
                    c = F.Rw[(g + a - 1 & 15) + 1];
                    if (0 != (this.R[d + e + 1] & c)) return !0;
                    break;
                default:
                    c = F.Gv[g & 15];
                    if (0 != (this.R[d + e] & c)) return !0;
                    for (h = 1; h < l - 1; h++)
                        if (0 != this.R[d + e + h]) return !0;
                    c = F.Rw[(g + a - 1 & 15) + 1];
                    if (0 != (this.R[d + e + h] & c)) return !0
            }
            return !1
        },
        GD: function(a, b, c, d, e) {
            a = Math.floor(a);
            b = Math.floor(b);
            var f = a,
                g = b;
            if (0 == c) {
                if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
            } else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
            f += this.Ga;
            g += this.Ca;
            a = Math.floor(f);
            b = Math.floor(g);
            return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.R[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
        }
    };
    A.rg = 1;
    A.uG = 2;
    A.fu = 4;
    A.eu = 16;
    A.sg = 32;
    A.ck = 64;
    A.Ei = 128;
    A.fP = 0;
    A.eP = 1;
    A.SL = 0;
    A.Cf = 1;
    A.VL = 2;
    A.dE = 3;
    A.OL = 4;
    A.YL = 5;
    A.RL = 6;
    A.TL = 7;
    A.PL = 8;
    A.cE = 9;
    A.XL = 10;
    A.ZL = 11;
    A.QL = 12;
    A.UL = 13;
    A.WL = 13;
    A.Nx = 4095;
    A.lt = 4096;
    A.Ox = 8192;
    A.prototype = {
        II: function(a, b, c) {
            this.a = a;
            this.Wm = c.uz;
            this.Ms = c.vz;
            this.T = 0;
            this.T |= A.ck;
            0 == (this.a.bf & Q.Xd) && (this.T &= ~A.ck);
            0 != (this.a.wb.Tk & D.tn) && (this.T |= A.Ei);
            0 != (c.Gq & k.en) ? (this.T |= A.rg, this.a.Da == u.Dh && (this.a.V |= L.vh, this.T &= ~A.ck)) : this.T |= A.sg;
            this.Xb = this.a.wb.oC;
            this.Yb = this.a.wb.nC;
            this.a.b.Fc == U.$F && (this.T |= A.uG)
        },
        yv: function(a) {
            this.zH(a);
            a && this.a.P.um && (this.a.V |= L.yi)
        },
        handle: function() {
            var a = this.a.c,
                b, c, d, e;
            0 != (this.a.V & L.yi) ? (this.gh || this.Tl(!1), this.XJ()) : 0 != (this.a.V & L.zi) ? this.YJ() : 0 == (this.T & A.fu) ? (0 != this.pl && (this.Vm -= a.ap, 0 > this.Vm && (this.Vm = this.pl, 0 == (this.T & A.sg) ? (this.T |= A.sg, this.iw()) : (this.T &= ~A.sg, this.Co()))), null != this.a.B && this.a.B.move(), 0 == this.a.b.li && (0 != (this.a.ra & D.ak) ? 0 == (this.a.ra & D.Ky) && 0 != (a.h.Ja & l.WD) && (b = this.a.w - this.a.ma, c = this.a.v - this.a.na, d = b + this.a.N, e = c + this.a.L, (d < a.Mm || b > a.Km || e < a.Qm || c > a.Om) && a.xg(this.a.Ub)) : (b = this.a.w - this.a.ma, c = this.a.v - this.a.na, d = b + this.a.N, e = c + this.a.L, d >= a.Lm && b <= a.Jm && e >= a.Pm && c <= a.Nm || (d >= a.Mm && b <= a.Km && e >= a.Qm && c <= a.Om ? (this.T |= A.fu, this.Ms = this.a.Si()) : 0 == (this.a.ra & D.Ky) && a.xg(this.a.Ub))))) : (b = this.a.w - this.a.ma, c = this.a.v - this.a.na, d = b + this.a.N, e = c + this.a.L, d >= a.Lm && b <= a.Jm && e >= a.Pm && c <= a.Nm && (this.T &= ~A.fu, this.yv(!1), this.a.xe(this.Ms)))
        },
        zH: function() {
            0 != (this.a.ra & D.$j) ? this.a.ou(this.a.w - this.a.c.ia, this.a.v - this.a.c.ka, this.a.b.Ra, this.Wm, 0 == (this.T & A.rg)) : (this.a.V |= L.vF, this.a.Ol(this.a.w - this.a.c.ia, this.a.v - this.a.c.ka, this.Wm, 0 != (this.a.ra & D.bu), 0 == (this.T & A.rg), -1));
            this.a.gD(this.Xb, this.Yb)
        },
        Tl: function(a) {
            this.a.V &= ~(L.yi | L.zi);
            if (0 == a) {
                if (!this.a.P.um) return !1;
                this.a.V |= L.yi
            } else {
                if (!this.a.P.Eo) return !1;
                this.a.V |= L.zi
            }
            this.gh = this.a.c.h.nv().cL(this.a, a);
            return this.gh ? !0 : (this.a.V &= ~(L.yi | L.zi), !1)
        },
        XJ: function() {
            if (0 != (this.a.V & L.yi)) {
                if (this.gh.or()) return this.a.V &= ~L.yi, this.gh = this.a.wl = null, !1;
                this.gh.Qb(w.iu);
                return !0
            }
            return !1
        },
        YJ: function() {
            if (0 != (this.a.V & L.zi)) {
                if (this.gh.or()) return this.wl = this.gh = null, this.a.c.xg(this.a.Ub), !1;
                this.gh.Qb(w.tq);
                return !0
            }
            return !1
        },
        JI: function() {
            return this.Tl(!0) ? (this.a.V |= L.vh, !0) : !1
        },
        Cb: function() {
            this.Ms = this.a.Si()
        },
        Co: function() {
            0 == (this.T & A.rg) && (this.T |= A.rg, this.a.b.O = !0, this.a.Ek())
        },
        iw: function() {
            0 != (this.T & A.rg) && (this.a.c.A.Ya[this.a.fe].Ja & (W.Kp | W.yt)) == W.yt && (this.T &= ~A.rg, this.a.V &= ~L.vh, this.a.b.O = !0, this.a.tl())
        },
        Ns: function(a) {
            this.T = a ? this.T | A.ck : this.T & ~A.ck
        },
        EJ: function(a, b) {
            this.Xb = a;
            this.Yb = b
        }
    };
    de.prototype = {
        load: function(a) {
            this.pm = a.o();
            this.ab = Array(this.pm);
            var b;
            for (b = 0; b < this.pm; b++) this.ab[b] = a.Ob()
        }
    };
    ee.prototype = {
        load: function(a, b) {
            this.qm = a.o();
            this.values = Array(this.qm);
            var c;
            for (c = 0; c < this.qm; c++) this.values[c] = a.s();
            b && (this.Ka = a.s())
        }
    };
    Na.JG = 26;
    Na.wG = 10;
    Na.prototype = {
        Z: function(a, b) {
            this.rl = 0;
            var c = Na.JG;
            null != b.Zh && b.Zh.qm > c && (c = b.Zh.qm);
            this.Na = Array(c);
            c = Na.wG;
            null != b.gj && b.gj.pm > c && (c = b.gj.pm);
            this.md = Array(c);
            for (c = 0; c < this.Na.length; c++) this.Na[c] = 0;
            for (c = 0; c < this.md.length; c++) this.md[c] = "";
            if (null != b.Zh)
                for (this.rl = b.Zh.Ka, c = 0; c < b.Zh.qm; c++) this.Na[c] = b.Zh.values[c];
            if (null != b.gj)
                for (c = 0; c < b.gj.pm; c++) this.md[c] = b.gj.ab[c]
        },
        Cb: function() {
            var a;
            for (a = 0; a < this.Na.length; a++) this.Na[a] = 0;
            for (a = 0; a < this.md.length; a++) this.md[a] = null
        },
        Dk: function(a) {
            return a < this.Na.length ? this.Na[a] : 0
        },
        dr: function(a) {
            return a < this.md.length ? this.md[a] : ""
        },
        nD: function(a, b) {
            a >= this.M.Na.length && this.Vi(a + 10);
            this.Na[a] = b
        },
        Vi: function(a) {
            if (a > this.Na.length) {
                var b;
                for (b = this.Na.length; b < a; b++) this.Na[b] = 0
            }
        },
        zI: function(a) {
            if (a > this.md.length) {
                var b;
                for (b = this.md.length; b < a; b++) this.md[b] = ""
            }
        }
    };
    Sa.ng = 32;
    Sa.prototype = {
        wH: function() {
            this.xk = Array(4);
            this.Sr = Array(4);
            var a;
            for (a = 0; 4 > a; a++) this.xk[a] = null, this.Sr[a] = 0;
            a = new nb;
            a.handle = 1;
            this.Wy(a);
            a = new nb;
            a.handle = 3;
            this.Wy(a)
        },
        Wy: function(a) {
            var b = a.xr();
            null != b && (this.xk[a.handle] = a, this.Sr[a.handle] = b.Yn())
        },
        xr: function(a) {
            a -= Sa.ng;
            var b = null;
            a < this.xk.length && null != this.xk[a] && (b = this.xk[a].xr());
            return b
        },
        Yn: function(a) {
            a -= Sa.ng;
            return a < this.xk.length ? this.Sr[a] : 0
        }
    };
    nb.prototype = {
        xr: function() {
            switch (this.handle) {
                case 1:
                    return new Oa;
                case 3:
                    return new Ca
            }
            return null
        }
    };
    Ba.UO = 1;
    Ba.Oy = 2;
    Ba.prototype = {
        Z: function(a) {
            this.K = a;
            this.ea = a.c
        },
        Yn: function() {
            return 0
        },
        Qu: function() {
            return !1
        },
        sv: function() {
            return Ba.Oy
        },
        Tu: function() {},
        Fz: function() {},
        VJ: function() {},
        sH: function() {},
        Dn: function() {
            return !1
        },
        action: function() {},
        Pn: function() {
            return null
        },
        IA: function() {
            return null
        },
        jD: function() {},
        Ki: function() {},
        $l: function() {}
    };
    fe.prototype = {
        evaluate: function(a) {
            var b = a.i.Lh(this.tb);
            if (null == b) a.pa[a.$] = 0;
            else {
                var c = (this.code >> 16) - I.Ae;
                a.Ru = this;
                a.pa[a.$] = b.Pn(c)
            }
        }
    };
    ge.prototype = {
        Ma: function(a) {
            var b = a.i.ac(this);
            if (null != b) {
                var c = (this.ba >>> 16) - I.Ae;
                a.Ru = this;
                b.action(c, this)
            }
        },
        mv: function(a, b) {
            return a.i.yI(this.u[b].tb, this)
        },
        Zn: function(a, b) {
            return a.Xa(this.u[b])
        },
        $b: function(a, b) {
            return a.bo(this.u[b])
        }
    };
    he.prototype = {
        gb: function(a, b) {
            if (null == b) return this.fa(a);
            b.V |= L.Np;
            var c = -(this.ba >> 16) - I.Ae - 1;
            a.Ru = this;
            return b.Dn(c, this) ? (a.i.Zl(b), !0) : !1
        },
        fa: function(a) {
            var b = a.i.De(this.Ta),
                c = a.i.vc,
                d = -(this.ba >> 16) - I.Ae - 1;
            for (a.Ru = this; null != b;) b.V &= ~L.Np, b.Dn(d, this) ? 0 != (this.vd & T.Sj) && (c--, a.i.hc()) : 0 == (this.vd & T.Sj) && (c--, a.i.hc()), b = a.i.Jd();
            return 0 != c ? !0 : !1
        },
        mv: function(a, b) {
            return this.u[b]
        },
        Zn: function(a, b) {
            return a.Xa(this.u[b])
        },
        $b: function(a, b) {
            return a.bo(this.u[b])
        }
    };
    (function() {
        this.element = null;
        this.Az = !1
    }).prototype = p.extend(new Ba, {
        $l: function() {
            this.setPosition(this.K.w, this.K.v)
        },
        Ki: function() {
            this.setPosition(this.K.w, this.K.v);
            this.lp(this.K.N, this.K.L)
        },
        lR: function(a, b) {
            this.element = a;
            a.style.position = "absolute";
            this.lp(this.K.N, this.K.L);
            this.setPosition(this.K.w, this.K.v);
            this.fv && this.sl(this.fv);
            this.xu = this.K.xa = b;
            this.ea.h.Ig ? (a.style.visibility = "hidden", this.xu = !1) : a.style.visibility = b ? "visible" : "hidden";
            this.ea.h.Lu.appendChild(a)
        },
        MA: function() {
            return this.ea.h.canvas ? this.ea.h.canvas.offsetLeft : 0
        },
        NA: function() {
            return this.ea.h.canvas ? this.ea.h.canvas.offsetTop : 0
        },
        oD: function(a) {
            this.Mz = a;
            this.K.oD(a);
            this.element && (this.element.style.left = this.MA() + this.ea.h.Jj + (this.K.w - this.K.c.ia) * this.ea.h.qc + "px")
        },
        rD: function(a) {
            this.Nz = a;
            this.K.rD(a);
            this.element && (this.element.style.top = this.NA() + this.ea.h.Lj + (this.K.v - this.K.c.ka) * this.ea.h.rc + "px")
        },
        setPosition: function(a, b) {
            this.Mz = a;
            this.Nz = b;
            this.K.setPosition(a, b);
            this.element && (this.element.style.left = this.MA() + this.ea.h.Jj + (this.K.w - this.K.c.ia) * this.ea.h.qc + "px", this.element.style.top = this.NA() + this.ea.h.Lj + (this.K.v - this.K.c.ka) * this.ea.h.rc + "px")
        },
        qx: function(a) {
            this.Lz = a;
            this.K.qx(a);
            this.element && (this.element.style.width = this.K.N * this.ea.h.qc + "px")
        },
        ox: function(a) {
            this.Kz = a;
            this.K.ox(a);
            this.element && !this.Az && (this.element.style.height = this.K.L * this.ea.h.rc + "px")
        },
        lp: function(a, b) {
            this.Lz = a;
            this.Kz = b;
            this.K.lp(a, b);
            this.element && (this.element.style.width = this.K.N * this.ea.h.qc + "px", this.Az || (this.element.style.height = this.K.L * this.ea.h.rc + "px"))
        },
        sl: function(a) {
            this.fv = a;
            this.element && (this.element.style.font = a.Bg())
        },
        Tu: function() {
            this.element && this.ea.h.Lu.removeChild(this.element)
        },
        IA: function() {
            return this.fv
        },
        jD: function(a) {
            this.sl(a)
        },
        sv: function() {
            this.ea.h.Ig || this.K.xa == this.xu || (this.xu = this.K.xa, this.element && (this.element.style.visibility = this.K.xa ? "visible" : "hidden"));
            this.K.w == this.Mz && this.K.v == this.Nz || this.setPosition(this.K.w, this.K.v);
            this.K.N == this.Lz && this.K.L == this.Kz || this.lp(this.K.N, this.K.L);
            return 0
        }
    });
    U.$F = 0;
    U.Zt = 1;
    U.ZF = 2;
    U.bO = 3;
    U.aO = 4;
    U.cO = 5;
    U.$t = 9;
    U.YF = 11;
    U.$N = 12;
    U.XF = 13;
    U.Di = 14;
    U.prototype = {
        setData: function(a, b, c, d, e) {
            this.to = a;
            this.Pk = b;
            this.aC = c;
            this.$B = d;
            this.Or = e
        }
    };
    ie.prototype = {
        load: function(a) {
            var b = a.S;
            this.yo = a.s();
            this.gd = Array(this.yo);
            var c;
            for (c = 0; c < this.yo; c++) {
                a.seek(b + 4 + 16 * c);
                var d = a.s(),
                    e = a.s(),
                    f = a.s(),
                    g = a.s();
                a.seek(b + f);
                var f = a.o(),
                    h = a.o(),
                    k = a.ub(),
                    l = a.ub();
                a.va(2);
                var n = a.s();
                switch (h) {
                    case 0:
                        this.gd[c] = new qe;
                        break;
                    case 1:
                        this.gd[c] = new le;
                        break;
                    case 2:
                        this.gd[c] = new pe;
                        break;
                    case 3:
                        this.gd[c] = new ke;
                        break;
                    case 4:
                        this.gd[c] = new je;
                        break;
                    case 5:
                        this.gd[c] = new me;
                        break;
                    case 9:
                        this.gd[c] = new oe;
                        break;
                    case 14:
                        this.gd[c] = new re
                }
                this.gd[c].setData(h, f, k, n, l);
                this.gd[c].load(a, g - 12);
                14 == h && (a.seek(b + d), d = a.Ob(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.gd[c].TK(d, e))
            }
        }
    };
    je.prototype = p.extend(new U, {
        load: function(a) {
            this.po = a.o();
            this.rB = a.o();
            this.qB = a.o();
            this.tB = a.o();
            this.sB = a.o()
        }
    });
    ke.prototype = p.extend(new U, {
        load: function(a) {
            this.AB = a.o();
            this.xB = a.o();
            this.yB = a.o();
            a.o();
            this.zB = a.s()
        }
    });
    le.prototype = p.extend(new U, {
        load: function(a) {
            this.BB = a.X();
            this.DB = a.X();
            this.CB = a.X();
            this.EB = a.X();
            a.o()
        }
    });
    me.prototype = p.extend(new U, {
        load: function(a) {
            this.mm = a.o();
            this.VB = a.o();
            this.UB = a.o();
            this.fw = a.ub();
            this.XB = a.ub();
            this.ZB = a.ub();
            a.va(1);
            this.cb = Array(this.mm);
            var b, c, d;
            for (b = 0; b < this.mm; b++) d = a.S, this.cb[b] = new ne, a.sa(), c = a.sa(), this.cb[b].load(a), a.seek(d + c)
        }
    });
    ne.prototype = {
        load: function(a) {
            this.wB = a.ub();
            this.Yv = a.ub();
            this.Zv = a.X();
            this.$v = a.X();
            this.Xv = a.X();
            this.bw = a.X();
            this.vB = a.o();
            this.aw = a.o();
            a = a.Ob();
            0 < a.length && (this.re = a)
        }
    };
    oe.prototype = p.extend(new U, {
        load: function(a) {
            this.OB = a.o();
            this.JB = a.o();
            this.KB = a.o();
            this.NB = a.o();
            this.LB = a.o();
            this.MB = a.o()
        }
    });
    pe.prototype = p.extend(new U, {
        load: function(a) {
            this.SB = a.o();
            this.dw = a.o();
            this.ew = a.o();
            this.RB = a.o();
            a.o();
            this.PB = a.o();
            this.QB = a.o()
        }
    });
    qe.prototype = p.extend(new U, {
        load: function() {}
    });
    re.prototype = p.extend(new U, {
        load: function(a) {
            a.va(14);
            this.data = a.S
        },
        TK: function(a) {
            this.Ng = a;
            if (p.Ac(this.Ng, "box2d8directions") || p.Ac(this.Ng, "box2dspring") || p.Ac(this.Ng, "box2dspaceship") || p.Ac(this.Ng, "box2dstatic") || p.Ac(this.Ng, "box2dracecar") || p.Ac(this.Ng, "box2daxial") || p.Ac(this.Ng, "box2dplatform") || p.Ac(this.Ng, "box2dbouncingball") || p.Ac(this.Ng, "box2dbackground")) this.pr = !0
        }
    });
    M.Qj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
    M.dk = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
    M.QG = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480,
        512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
    ];
    M.IF = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
    M.yl = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
    M.gf = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0];
    M.qn = 1;
    M.lI = function(a, b) {
        return a * M.Qj[b] / 256
    };
    M.mI = function(a, b) {
        return a * M.dk[b] / 256
    };
    M.prototype = {
        cj: function(a, b) {
            this.a.c.ue++;
            this.fg = this.a.c.ue;
            this.a.B.U = !1;
            if (0 == a) return this.a.c.Yf(this.a), !1;
            var c, d, e;
            for (e = 0 != (this.a.c.A.Vb & J.Vc) ? Math.floor(a * this.a.c.Ic * 32) : a << 5; 2048 < e;) {
                c = 65536 * this.a.w + (this.a.Dg & 65535);
                d = 65536 * this.a.v + (this.a.Eg & 65535);
                c += 2048 * M.Qj[b];
                d += 2048 * M.dk[b];
                this.a.Dg = c & 65535;
                this.a.w = Math.floor(c / 65536);
                this.a.Eg = d & 65535;
                this.a.v = Math.floor(d / 65536);
                if (this.a.c.Yf(this.a)) return !0;
                if (this.a.B.U) break;
                e -= 2048
            }
            if (!this.a.B.U && (c = 65536 * this.a.w + (this.a.Dg & 65535), d = 65536 * this.a.v + (this.a.Eg & 65535), c += M.Qj[b] * e, d += M.dk[b] * e, this.a.Dg = c & 65535, this.a.w = Math.floor(c / 65536), this.a.Eg = d & 65535, this.a.v = Math.floor(d / 65536), this.a.c.Yf(this.a))) return !0;
            this.a.b.O = !0;
            this.a.B.U || (this.a.c.ol = 0);
            return this.a.B.U
        },
        so: function(a) {
            0 == a.aC && this.stop()
        },
        yk: function(a) {
            return 100 >= a ? M.QG[a] : a << 8
        },
        uo: function(a) {
            if (a) this.uB(!1);
            else switch (this.a.c.i.Js & 4294901760) {
                case -786432:
                    a = this.a.w - this.a.ma;
                    var b = this.a.v - this.a.na,
                        c = this.a.c.$k(a, b, a + this.a.N, b + this.a.L);
                    a = this.a.w;
                    b = this.a.v;
                    0 != (c & k.sh) && (a = this.a.ma);
                    0 != (c & k.th) && (a = this.a.c.Ud - this.a.N + this.a.ma);
                    0 != (c & k.uh) && (b = this.a.na);
                    0 != (c & k.rh) && (b = this.a.c.Vd - this.a.L + this.a.na);
                    this.a.w = a;
                    this.a.v = b;
                    break;
                case -851968:
                case -917504:
                    a = 18 * (this.a.c.Zb(this.a) >> 2);
                    do {
                        if (this.nh(this.a.w + M.gf[a], this.a.v + M.gf[a + 1], !1)) {
                            this.a.w += M.gf[a];
                            this.a.v += M.gf[a + 1];
                            return
                        }
                        a += 2
                    } while (0 != M.gf[a] || 0 != M.gf[a + 1]);
                    this.a.w = this.a.b.qj;
                    this.a.v = this.a.b.rj;
                    this.a.b.Ra = this.a.b.ss;
                    this.a.b.ib = this.a.b.rs
            }
        },
        uB: function(a) {
            switch (this.a.c.i.Js & 4294901760) {
                case -786432:
                    a = this.a.w - this.a.ma;
                    var b = this.a.v - this.a.na,
                        c = this.a.c.$k(a, b, a + this.a.N, b + this.a.L);
                    a = this.a.w;
                    b = this.a.v;
                    0 != (c & k.sh) && (a = this.a.ma);
                    0 != (c & k.th) && (a = this.a.c.Ud - this.a.N + this.a.ma);
                    0 != (c & k.uh) && (b = this.a.na);
                    0 != (c & k.rh) && (b = this.a.c.Vd - this.a.L + this.a.na);
                    this.a.w = a;
                    this.a.v = b;
                    break;
                case -851968:
                case -917504:
                    if (b = new G, this.DJ(this.a.w, this.a.v, this.a.b.qj, this.a.b.rj, a, b)) this.a.w = b.x, this.a.v = b.y;
                    else {
                        b = 18 * (this.a.c.Zb(this.a) >> 2);
                        do {
                            if (this.nh(this.a.w + M.gf[b], this.a.v + M.gf[b + 1], a)) {
                                this.a.w += M.gf[b];
                                this.a.v += M.gf[b + 1];
                                return
                            }
                            b += 2
                        } while (0 != M.gf[b] || 0 != M.gf[b + 1]);
                        0 == a && (this.a.w = this.a.b.qj, this.a.v = this.a.b.rj, this.a.b.Ra = this.a.b.ss, this.a.b.ib = this.a.b.rs)
                    }
            }
        },
        bn: function(a, b, c, d, e) {
            var f;
            f = -1;
            e && (f = this.a.cf);
            e = this.a.wb;
            if (0 != (e.Rd & 15)) {
                var g = a - this.a.ma,
                    h = b - this.a.na;
                if (0 != (this.a.c.$k(g, h, g + this.a.N, h + this.a.L) & e.Rd)) return !1
            }
            if (0 != (e.Rd & 16) && this.a.c.Cn(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, a, b, c, d)) return !1;
            if (-1 == e.vm) return !0;
            a = this.a.c.sm(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, a, b, e.jj);
            if (null == a) return !0;
            b = this.a.c.i.Hk;
            for (c = 0; c < a.size(); c++)
                if (d = a.get(c).cf, d != f)
                    for (g = e.vm; 0 <= b[g]; g++)
                        if (b[g] == d) return !1;
            return !0
        },
        nh: function(a, b, c) {
            var d;
            d = -1;
            c && (d = this.a.cf);
            c = this.a.wb;
            if (0 != (c.Rd & 15)) {
                var e = a - this.a.ma,
                    f = b - this.a.na;
                if (0 != (this.a.c.$k(e, f, e + this.a.N, f + this.a.L) & c.Rd)) return !1
            }
            if (0 != (c.Rd & 16) && this.a.c.Cn(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, a, b, 0, J.ze)) return !1;
            if (-1 == c.vm) return !0;
            a = this.a.c.sm(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, a, b, c.jj);
            if (null == a) return !0;
            b = this.a.c.i.Hk;
            for (e = 0; e < a.size(); e++)
                if (f = a.get(e).cf, f != d) {
                    var g;
                    for (g = c.vm; 0 <= b[g]; g++)
                        if (b[g] == f) return !1
                } return !0
        },
        km: function(a, b, c, d, e, f, g) {
            var h = p.Ld((a + c) / 2),
                k = p.Ld((b + d) / 2),
                l, n;
            do
                if (this.bn(h + this.a.c.ia, k + this.a.c.ka, e, f, !1)) {
                    if (c = h, d = k, l = h, n = k, h = p.Ld((c + a) / 2), k = p.Ld((d + b) / 2), h == l && k == n) return c == a && d == b || !this.bn(a + this.a.c.ia, b + this.a.c.ka, e, f, !1) || (h = a, k = b), g.x = h, g.y = k, !0
                } else if (a = h, b = k, l = h, n = k, h = p.Ld((c + a) / 2), k = p.Ld((d + b) / 2), h == l && k == n) {
                if ((c != a || d != b) && this.bn(c + this.a.c.ia, d + this.a.c.ka, e, f, !1)) return g.x = c, g.y = d, !0;
                g.x = h;
                g.y = k;
                return !1
            } while (1)
        },
        DJ: function(a, b, c, d, e, f) {
            var g = p.Ld((a + c) / 2),
                h = p.Ld((b + d) / 2),
                k, l;
            do
                if (this.nh(g, h, e)) {
                    if (c = g, d = h, k = g, l = h, g = p.Ld((c + a) / 2), h = p.Ld((d + b) / 2), g == k && h == l) return c == a && d == b || !this.nh(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
                } else if (a = g, b = h, k = g, l = h, g = p.Ld((c + a) / 2), h = p.Ld((d + b) / 2), g == k && h == l) {
                if ((c != a || d != b) && this.nh(c, d, e)) return f.x = c, f.y = d, !0;
                f.x = g;
                f.y = h;
                return !1
            } while (1)
        },
        Rs: function(a) {
            this.a.b.Fc == U.ZF && (250 < a && (a = 250), 0 > a && (a = 0), this.Rs(a));
            this.a.b.Fc == U.Di && this.Pd.Rs(a)
        },
        Ps: function(a) {
            this.a.b.Fc == U.$t && (250 < a && (a = 250), 0 > a && (a = 0), this.Ps(a));
            this.a.b.Fc == U.Di && this.Pd.Ps(a)
        },
        Zb: function() {
            return this.a.b.Fc == U.Di && this.Pd.Zb ? this.Pd.Zb() : this.a.b.Za
        },
        Cb: function() {},
        start: function() {}
    };
    ta.wK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24,
        25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27,
        26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31
    ];
    ta.aG = [4294967292, 4294967294, 4294967295];
    ta.sG = [-4, 4, -2, 2, -1, 1];
    ta.tG = [-4, 4, -4, 4, -4, 4];
    ta.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.Dg = 0;
            this.a.Eg = 0;
            this.a.b.da = b.po;
            this.a.b.jb = b.po;
            this.a.b.ki = b.po;
            this.Dl = b.po << 8;
            var c = b.sB;
            0 != c && (c = this.yk(c), this.a.b.ki = 0);
            this.we = c;
            this.sy = b.rB;
            this.Tp = b.qB;
            this.Up = ta.aG[this.Tp];
            this.Bi = !1;
            this.Lt = -1;
            this.Cl = this.Vp = (100 - b.tB) / 8;
            this.so(b);
            this.a.b.O = !0
        },
        move: function() {
            this.a.B.zj = !1;
            this.a.c.ol = 1;
            this.a.b.te = r.Mc;
            null != this.a.aa && this.a.aa.We();
            if (0 != this.we) {
                var a = this.Dl;
                if (0 < a) {
                    var b = this.we;
                    0 != (this.a.c.A.Vb & J.Vc) && (b *= this.a.c.Ic);
                    a -= b;
                    0 > a && (a = 0);
                    this.Dl = a;
                    this.a.b.da = a >> 8
                }
            }
            this.cj(this.a.b.da, this.a.c.Zb(this.a))
        },
        stop: function() {
            0 == this.Pb && (this.Pb = this.a.b.da | 32768, this.Dl = this.a.b.da = 0, this.a.B.U = !0)
        },
        start: function() {
            var a = this.Pb;
            0 != a && (a &= 32767, this.a.b.da = a, this.Dl = a << 8, this.Pb = 0, this.a.B.U = !0)
        },
        ug: function() {
            if (0 == this.Pb && this.a.c.pc != this.Lt) {
                this.Lt = this.a.c.pc;
                this.fg == this.a.c.ue && this.uB(this.Bi);
                var a = this.a.w,
                    b = this.a.v,
                    c = 0,
                    a = a - 8,
                    b = b - 8;
                0 == this.nh(a, b, this.Bi) && (c |= 1);
                a += 16;
                0 == this.nh(a, b, this.Bi) && (c |= 2);
                b += 16;
                0 == this.nh(a, b, this.Bi) && (c |= 4);
                0 == this.nh(a - 16, b, this.Bi) && (c |= 8);
                a = ta.wK[32 * c + this.a.c.Zb(this.a)];
                a &= this.Up;
                if (!this.vo(a)) {
                    var c = b = ta.tG[2 * this.Tp + 1],
                        d = !1;
                    do {
                        a -= b;
                        a &= 31;
                        if (this.vo(a)) {
                            d = !0;
                            break
                        }
                        a += 2 * b;
                        a &= 31;
                        if (this.vo(a)) {
                            d = !0;
                            break
                        }
                        a -= b;
                        a &= 31;
                        b += c
                    } while (16 >= b);
                    if (0 == d) {
                        this.Bi = !0;
                        this.a.b.Za = this.a.c.random(32) & this.Up;
                        this.a.B.zj = !0;
                        this.a.B.U = !0;
                        return
                    }
                }
                this.Bi = !1;
                this.a.b.Za = a;
                a = this.a.c.random(100);
                if (a < this.sy && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.Up, this.vo(a)))) {
                    this.a.b.Za = a;
                    this.a.B.zj = !0;
                    this.a.B.U = !0;
                    return
                }
                a = this.a.c.Zb(this.a) & 7;
                12 != this.Cl && (0 == a ? (this.Cl--, 0 > this.Cl && (a = this.a.c.Zb(this.a) + ta.sG[this.a.c.random(2) + 2 * this.Tp], a &= 31, this.vo(a) && (this.a.b.Za = a, this.Cl = this.Vp))) : this.Cl = this.Vp);
                this.a.B.zj = !0;
                this.a.B.U = !0
            }
        },
        vo: function(a) {
            var b = 2048 * M.Qj[a] + (65536 * this.a.w + (this.a.Dg & 65535));
            a = 2048 * M.dk[a] + (65536 * this.a.v + (this.a.Eg & 65535));
            b = Math.floor(b / 65536);
            a = Math.floor(a / 65536);
            return this.nh(b, a, !1)
        },
        xf: function() {},
        yf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.da = a;
            this.Dl = a << 8;
            this.Pb = 0;
            this.a.B.U = !0
        },
        hh: function(a) {
            this.yf(a)
        },
        reverse: function() {
            0 == this.Pb && (this.a.B.U = !0, this.a.b.Za += 16, this.a.b.Za &= 31)
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        }
    });
    se.prototype = p.extend(new M, {
        Z: function(a) {
            this.a = a;
            this.l = a.c;
            this.l.jy();
            null != this.a.D && this.a.D.Ns(!1);
            null != this.a.D && (this.a.D.T &= ~A.sg, this.a.D.Co());
            this.Wp = !0;
            this.a.Dg = 0;
            this.a.Eg = 0;
            null != this.a.aa && this.a.aa.VA(r.Mc);
            this.a.b.da = 0;
            this.a.b.Qa = !0;
            this.a.b.O = !0
        },
        yv: function(a) {
            this.a.b.jb = this.a.b.da;
            this.a.b.ki = this.a.b.da;
            this.El = a;
            null != a && (a.V |= L.ky)
        },
        Cb: function() {
            this.hI(this.a)
        },
        move: function() {
            if (this.Wp) {
                if (null != this.El.aa && this.El.aa.ii == r.Kx) return;
                this.AD()
            }
            null != this.a.aa && this.a.aa.We();
            this.cj(this.a.b.da, this.a.c.Zb(this.a));
            if (-64 > this.a.w || this.a.w > this.a.c.Ud + 64 || -64 > this.a.v || this.a.v > this.a.c.Vd + 64) this.a.co = !1, this.a.c.xg(this.a.Ub);
            this.a.b.Qa && (this.a.b.Qa = !1, this.a.c.Yf(this.a))
        },
        AD: function() {
            null != this.a.D && this.a.D.Ns(!0);
            null != this.a.D && (this.a.D.T |= A.sg, this.a.D.iw());
            if (null != this.l.oi) {
                var a = this.l.Lp(this.El);
                if (null != a) {
                    var b = this.l.oi,
                        c = new ea;
                    this.Mt = c;
                    c.CF(this.a, ea.WF);
                    c.AJ = b.identifier;
                    this.nn = b.aR(a.zJ, this.a.b.da / 250 * 50, c);
                    c.yJ = this.nn;
                    null == this.nn && (this.Mt = null)
                }
            }
            this.Wp = !1;
            this.El = null
        },
        hI: function() {
            null != this.nn && (pBase = this.a.c.oi, pBase.bR(this.nn), this.nn = null);
            null != this.Mt && (this.Mt = null)
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        xf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        ug: function() {},
        yf: function() {},
        hh: function() {}
    });
    te.prototype = p.extend(new M, {
        Z: function(a) {
            this.a = a
        },
        move: function() {
            0 == (this.a.V & L.zi) && null != this.a.aa && (this.a.aa.We(), this.a.aa.Zg != r.Mj + 1 && this.a.c.xg(this.a.Ub))
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0)
        },
        xf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        ug: function() {},
        yf: function() {},
        hh: function() {}
    });
    ue.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.Dg = 0;
            this.pg = this.a.Eg = 0;
            this.wh = this.a.b.da = 0;
            this.Nt = -1;
            this.a.b.li = b.Pk;
            this.bp = b.xB;
            this.eh = this.yk(this.bp);
            this.cp = b.yB;
            this.we = this.yk(this.cp);
            this.a.b.jb = b.AB;
            this.a.b.ki = 0;
            this.Ot = b.zB;
            this.Aj = b.Or;
            this.a.b.O = !0
        },
        move: function() {
            var a, b, c, d;
            this.a.c.ol = 1;
            a = this.a.c.Zb(this.a);
            this.a.b.Tw = a;
            if (0 == this.wh) {
                this.a.B.zj = !1;
                b = 0;
                c = this.a.c.bd[this.a.b.li - 1] & 15;
                0 != c && (d = M.IF[c], -1 != d && 0 != (1 << d & this.Ot) && (b = 1, a = d));
                c = this.pg;
                0 == b ? 0 != c && (b = this.we, 0 != (this.a.c.A.Vb & J.Vc) && (b *= this.a.c.Ic), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.jb && (b = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (b *= this.a.c.Ic), c += b, c >> 8 > this.a.b.jb && (c = this.a.b.jb << 8));
                this.pg = c;
                this.a.b.da = c >> 8;
                this.a.b.Za = a;
                this.a.b.te = r.Mc;
                null != this.a.aa && this.a.aa.We();
                if (0 == this.cj(this.a.b.da, this.a.c.Zb(this.a))) return;
                if (0 == this.a.b.da) {
                    c = this.pg;
                    if (0 == c || this.a.b.Tw == this.a.c.Zb(this.a)) return;
                    this.a.b.da = c >> 8;
                    this.a.b.Za = this.a.b.Tw;
                    if (0 == this.cj(this.a.b.da, this.a.c.Zb(this.a))) return
                }
            }
            for (; 0 != this.wh && 0 != this.a.c.ol;)
                if (c = this.pg, c -= this.we, 0 < c) {
                    if (this.pg = c, c >>= 8, this.a.b.da = c, d = this.a.c.Zb(this.a), 0 != this.wh && (d += 16, d &= 31), 0 == this.cj(c, d)) break
                } else {
                    this.pg = 0;
                    this.wh = this.a.b.da = 0;
                    break
                }
        },
        ug: function() {
            this.fg == this.a.c.ue && this.uo(0 != (this.Aj & M.qn));
            this.a.c.pc != this.Nt && (this.Nt = this.a.c.pc, this.wh++, 12 <= this.wh ? this.stop() : (this.a.B.zj = !0, this.a.B.U = !0))
        },
        reverse: function() {},
        xf: function() {},
        stop: function() {
            this.pg = this.wh = this.a.b.da = 0;
            this.a.B.U = !0;
            this.fg == this.a.c.ue && (this.uo(0 != (this.Aj & M.qn)), this.wh = 0)
        },
        start: function() {
            this.a.B.U = !0;
            this.Pb = 0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.jb = a;
            this.a.b.da > a && (this.a.b.da = a, this.pg = a << 8);
            this.a.B.U = !0
        },
        yf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.jb && (a = this.a.b.jb);
            this.a.b.da = a;
            this.pg = a << 8;
            this.a.B.U = !0
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        kR: function(a) {
            this.Ot = a
        }
    });
    ve.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.b.li = b.Pk;
            this.Pt = b.BB + this.a.w;
            this.Qt = b.CB + this.a.v;
            this.Rt = b.DB + this.a.w;
            this.St = b.EB + this.a.v;
            this.Yp = this.Xp = this.a.b.da = 0;
            this.a.b.ki = 0;
            this.a.b.jb = 100;
            this.Aj = b.Or;
            this.so(b);
            this.a.b.O = !0;
            this.a.c.PJ(this.a)
        },
        Cb: function() {
            this.a.c.Vz(this.a)
        },
        move: function() {
            var a = this.a.w,
                b = this.a.v,
                c, d, e, f;
            if (0 == this.Pb && 0 != this.a.c.ys[this.a.b.li - 1] && (a = this.a.c.vj, a < this.Pt && (a = this.Pt), a > this.Rt && (a = this.Rt), b = this.a.c.wj, b < this.Qt && (b = this.Qt), b > this.St && (b = this.St), c = a - this.a.w, d = b - this.a.v, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.da = f, 0 != f)) {
                0 == d && (d = 1);
                c = (c << 8) / d;
                for (d = 0; !(c >= M.yl[d]); d += 2);
                c = M.yl[d + 1];
                0 != (e & 2) && (c = -c + 32 & 31);
                0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
                this.a.b.Za = c
            }
            0 != this.a.b.da && (this.Yp = 0, this.Xp = this.a.b.da);
            this.Yp++;
            10 < this.Yp && (this.Xp = 0);
            this.a.b.da = this.Xp;
            null != this.a.aa && this.a.aa.We();
            this.a.w = a;
            this.a.v = b;
            this.a.b.O = !0;
            this.a.c.ue++;
            this.fg = this.a.c.ue;
            this.a.c.Yf(this.a)
        },
        stop: function() {
            this.fg == this.a.c.ue && this.uo(0 != (this.Aj & M.qn));
            this.a.b.da = 0
        },
        start: function() {
            this.Pb = 0;
            this.a.B.U = !0
        },
        ug: function() {
            this.stop()
        },
        reverse: function() {},
        xf: function() {},
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        }
    });
    we.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.cq = this.a.w;
            this.eq = this.a.v;
            this.qd = !1;
            this.Ah = 0;
            this.a.em = 0;
            this.Ia = b;
            this.a.b.ki = b.VB;
            this.a.b.jb = b.UB;
            this.zh = 0;
            this.Il = null;
            this.Ok(0);
            this.so(b);
            this.a.b.da = this.Nc;
            this.a.b.O = !0;
            0 == this.Ia.cb.length && this.stop()
        },
        move: function() {
            this.a.em = 0;
            this.a.b.te = r.Mc;
            null != this.a.aa && this.a.aa.We();
            if (0 == this.Nc) {
                var a = this.Ah;
                if (0 == a) {
                    this.a.b.da = 0;
                    this.a.c.Yf(this.a);
                    return
                }
                a -= this.a.c.ap;
                if (0 < a) {
                    this.Ah = a;
                    this.a.b.da = 0;
                    this.a.c.Yf(this.a);
                    return
                }
                this.Ah = 0;
                this.Nc = this.Pb & 32767;
                this.Pb = 0;
                this.a.b.da = this.Nc
            }
            a = 0 != (this.a.c.A.Vb & J.Vc) ? 256 * this.a.c.Ic : 256;
            this.a.c.pi = a;
            for (var b;;) {
                b = !1;
                this.a.c.$o = a;
                a *= this.Nc;
                a <<= 5;
                524288 >= a ? this.a.c.jx = a : (a = 16384, a /= this.Nc, this.a.c.$o = a, this.a.c.jx = 524288);
                for (;;) {
                    this.aq = !1;
                    if (1 == this.WB(this.a.c.jx) && 0 == this.aq) {
                        b = !0;
                        break
                    }
                    if (this.a.c.pi == this.a.c.$o) {
                        b = !0;
                        break
                    }
                    if (this.a.c.pi > this.a.c.$o) {
                        this.a.c.pi -= this.a.c.$o;
                        a = this.a.c.pi;
                        break
                    }
                    a = this.a.c.pi * MT_Speed;
                    a <<= 5;
                    this.WB(a);
                    b = !0;
                    break
                }
                if (b) break
            }
        },
        WB: function(a) {
            a += this.zh;
            var b = a >>> 16;
            if (b < this.bq) return this.zh = a, a = b * this.pn / 16384 + this.Ch, this.a.w = b * this.on / 16384 + this.Bh, this.a.v = a, this.a.b.O = !0, this.a.c.Yf(this.a), this.a.B.U;
            b -= this.bq;
            a = b << 16 | a & 65535;
            0 != this.Nc && (a /= this.Nc);
            this.a.c.pi += a >> 5 & 65535;
            this.a.w = this.Yj;
            this.a.v = this.Zj;
            this.a.b.O = !0;
            this.a.c.Yf(this.a);
            if (this.a.B.U) return !0;
            this.a.em = this.a.c.pc;
            this.a.dm = null;
            b = this.le;
            this.zh = 0;
            if (0 == this.qd) {
                b++;
                if (b < this.Ia.mm) {
                    this.a.dm = this.Ia.cb[b].re;
                    if (null != this.Il && null != this.Ia.cb[b].re && p.Ac(this.Il, this.Ia.cb[b].re)) return this.le = b, this.ff(), this.Nr();
                    this.Ok(b);
                    this.ff();
                    return this.a.B.U
                }
                this.a.jr = this.a.c.pc;
                this.le = b;
                if (this.qd) return this.ff(), this.a.B.U;
                if (0 != this.Ia.ZB) return this.qd = !0, b--, this.a.dm = this.Ia.cb[b].re, this.lm(b), this.ff(), this.a.B.U;
                this.YB();
                if (0 == this.Ia.fw) return this.Nr(), this.ff(), this.a.B.U;
                b = 0
            } else {
                if (null != this.Il && null != this.Ia.cb[b].re && p.Ac(this.Il, this.Ia.cb[b].re)) return this.ff(), this.Nr();
                this.a.dm = this.Ia.cb[b].re;
                this.Ah = this.Ia.cb[b].aw;
                b--;
                if (0 <= b) return this.lm(b), this.ff(), this.a.B.U;
                this.YB();
                if (0 == this.qd) return this.ff(), this.a.B.U;
                if (0 == this.Ia.fw) return this.Nr(), this.ff(), this.a.B.U;
                b = 0;
                this.qd = !1
            }
            this.Ok(b);
            this.ff();
            return this.a.B.U
        },
        Ok: function(a) {
            a >= this.Ia.cb.length ? this.stop() : (this.qd = !1, this.le = a, this.Ah = this.Ia.cb[a].aw, this.on = this.Ia.cb[a].Xv, this.pn = this.Ia.cb[a].bw, this.Bh = this.a.w, this.Ch = this.a.v, this.Yj = this.a.w + this.Ia.cb[a].Zv, this.Zj = this.a.v + this.Ia.cb[a].$v, this.a.b.Za = this.Ia.cb[a].Yv, this.TB())
        },
        lm: function(a) {
            a >= this.Ia.cb.length ? this.stop() : (this.qd = !0, this.le = a, this.on = -this.Ia.cb[a].Xv, this.pn = -this.Ia.cb[a].bw, this.Bh = this.a.w, this.Ch = this.a.v, this.Yj = this.a.w - this.Ia.cb[a].Zv, this.Zj = this.a.v - this.Ia.cb[a].$v, this.a.b.Za = this.Ia.cb[a].Yv + 16 & 31, this.TB())
        },
        TB: function() {
            this.bq = this.Ia.cb[this.le].vB;
            var a = this.Ia.cb[this.le].wB,
                b = this.Ah;
            0 != b && (this.Ah = 20 * b, this.Pb = a |= 32768);
            0 != this.Pb && (a = 0);
            if (a != this.Nc || 0 != a) this.Nc = a, this.aq = this.a.B.U = !0;
            this.a.b.da = this.Nc
        },
        ff: function() {
            this.a.em == this.a.c.pc && (this.a.c.i.Jc = 0, this.a.c.i.wd(this.a, -1310720 | this.a.Da & 65535), this.a.c.i.wd(this.a, -2293760 | this.a.Da & 65535));
            this.a.jr == this.a.c.pc && (this.a.c.i.Jc = 0, this.a.c.i.wd(this.a, -1376256 | this.a.Da & 65535))
        },
        Nr: function() {
            this.Pb = this.Nc = 0;
            this.a.B.U = !0;
            this.aq = !1;
            return !0
        },
        YB: function() {
            0 != this.Ia.XB && (this.a.w = this.cq, this.a.v = this.eq, this.a.b.O = !0)
        },
        UQ: function(a) {
            var b;
            for (b = 0; b < this.Ia.mm; b++)
                if (null != this.Ia.cb[b].re && p.Ac(a, this.Ia.cb[b].re)) {
                    0 == this.qd ? (this.Ok(b), this.a.em = this.a.c.pc, this.a.dm = this.Ia.cb[b].re, this.a.jr = 0, this.ff()) : 0 < b && (b--, this.lm(b), this.a.em = this.a.c.pc, this.a.dm = this.Ia.cb[b].re, this.a.jr = 0, this.ff());
                    this.a.B.U = !0;
                    break
                }
        },
        VQ: function(a) {
            var b;
            for (b = 0; b < this.Ia.mm; b++)
                if (null != this.Ia.cb[b].re && p.Ac(a, this.Ia.cb[b].re)) {
                    if (b == this.le && 0 == this.zh) break;
                    this.Il = a;
                    if (0 == this.qd)
                        if (b > this.le) {
                            if (0 != this.Nc) break;
                            0 != (this.Pb & 32768) ? this.start() : this.Ok(this.le)
                        } else {
                            if (0 != this.Nc) {
                                this.reverse();
                                break
                            }
                            0 != (this.Pb & 32768) ? (this.start(), this.reverse()) : this.lm(MT_MoveNumber - 1)
                        }
                    else if (b <= this.le) {
                        if (0 != this.Nc) break;
                        0 != (this.Pb & 32768) ? this.start() : this.lm(this.le - 1)
                    } else {
                        if (0 != this.Nc) {
                            this.reverse();
                            break
                        }
                        0 != (this.Pb & 32768) ? (this.start(), this.reverse()) : this.Ok(this.le)
                    }
                    break
                }
        },
        stop: function() {
            0 == this.Pb && (this.Pb = this.Nc | 32768);
            this.Nc = 0;
            this.a.B.U = !0
        },
        start: function() {
            0 != (this.Pb & 32768) && (this.Nc = this.Pb & 32767, this.Pb = this.Ah = 0, this.a.B.U = !0)
        },
        reverse: function() {
            if (0 == this.Pb) {
                this.a.B.U = !0;
                var a = this.le;
                if (0 == this.zh)(this.qd = !this.qd) ? 0 == a ? this.qd = !this.qd : (a--, this.lm(a)) : this.Ok(a);
                else {
                    this.qd = !this.qd;
                    this.on = -this.on;
                    this.pn = -this.pn;
                    var a = this.Bh,
                        b = this.Yj;
                    this.Bh = b;
                    this.Yj = a;
                    a = this.Ch;
                    this.Ch = b = this.Zj;
                    this.Zj = a;
                    this.a.b.Za += 16;
                    this.a.b.Za &= 31;
                    a = this.zh >>> 16;
                    a = this.bq - a;
                    this.zh = a << 16 | this.zh & 65535
                }
            }
        },
        dc: function(a) {
            var b = this.a.w;
            this.a.w = a;
            b -= this.Bh;
            a -= b;
            this.Yj = b = this.Yj - this.Bh + a;
            b = this.Bh;
            this.Bh = a;
            this.cq -= b - a;
            this.a.B.U = !0;
            this.a.b.O = !0;
            this.a.b.Qa = !0
        },
        ec: function(a) {
            var b = this.a.v;
            this.a.v = a;
            b -= this.Ch;
            a -= b;
            this.Zj = b = this.Zj - this.Ch + a;
            b = this.Ch;
            this.Ch = a;
            this.eq -= b - a;
            this.a.B.U = !0;
            this.a.b.O = !0;
            this.a.b.Qa = !0
        },
        yf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.Nc = a;
            this.a.b.da = a;
            this.a.B.U = !0
        },
        hh: function(a) {
            this.yf(a)
        },
        xf: function() {}
    });
    S.LN = 0;
    S.UF = 1;
    S.JN = 2;
    S.KN = 3;
    S.xh = 0;
    S.Fl = 1;
    S.$p = 2;
    S.Zp = 3;
    S.ty = 4;
    S.uy = 5;
    S.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.l = this.a.c;
            this.a.Dg = 0;
            this.Wd = this.a.Eg = 0;
            this.a.b.da = 0;
            this.a.b.li = b.Pk;
            this.bp = b.JB;
            this.eh = this.yk(this.bp);
            this.cp = b.KB;
            this.we = this.yk(this.cp);
            this.a.b.jb = b.OB;
            this.a.b.ki = 0;
            this.Tt = b.LB;
            this.vy = b.MB;
            var c = b.NB;
            3 < c && (c = S.UF);
            this.wy = c;
            this.Gl = this.Ed = 0;
            this.Wj = null;
            this.so(b);
            this.a.b.O = !0;
            this.nb = S.xh
        },
        move: function() {
            var a, b;
            this.a.c.ol = 1;
            a = this.a.c.bd[this.a.b.li - 1];
            this.Cu();
            b = this.Wd;
            var c;
            0 == this.Gl && (0 >= b && (0 != (a & 4) ? (c = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), b -= c, b / 256 < -this.a.b.jb && (b = 256 * -this.a.b.jb)) : 0 > b && (c = this.we, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), b += c, b / 256 > this.a.b.jb && (b = 256 * this.a.b.jb)) : 0 < b && (c = this.we, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.Wd = b);
            var d = this.Ed;
            for (c = !1;;) {
                switch (this.nb) {
                    case 2:
                    case 3:
                        c = this.Tt << 5;
                        0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic);
                        d += c;
                        64E3 < d && (d = 64E3);
                        break;
                    case 0:
                        if (0 != (a & 1)) {
                            if (this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff - 4) == k.Df) break;
                            this.nb = S.Fl;
                            c = !0;
                            continue
                        }
                        if (0 != (a & 2) && this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff + 4) != k.Df) {
                            this.nb = S.Fl;
                            c = !0;
                            continue
                        }
                        break;
                    case 1:
                        if (0 == c && (this.Gl = 0, this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) == k.Df && this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff - 4) == k.Df)) break;
                        0 >= d && (0 != (a & 1) ? (c = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), d -= c, c = d / 256, c < -this.a.b.jb && (d = 256 * -this.a.b.jb)) : (c = this.we, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
                        0 <= d && (0 != (a & 2) ? (c = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), d += c, c = d / 256, c > this.a.b.jb && (d = 256 * this.a.b.jb)) : (c = this.we, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
                }
                break
            }
            this.Ed = d;
            var e = 0;
            0 > b && (e = 16);
            c = b;
            var f = d;
            if (0 != f) {
                var g = 0;
                0 > c && (g |= 1, c = -c);
                0 > f && (g |= 2, f = -f);
                c = (c << 8) / f;
                for (e = 0; !(c >= M.yl[e]); e += 2);
                e = M.yl[e + 1];
                0 != (g & 2) && (e = -e + 32 & 31);
                0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
            }
            c = b;
            g = M.Qj[e];
            f = M.dk[e];
            0 > g && (g = -g);
            0 > f && (f = -f);
            g < f && (g = f, c = d);
            0 > c && (c = -c);
            c /= g;
            250 < c && (c = 250);
            this.a.b.da = c;
            switch (this.nb) {
                case 1:
                    0 > d ? this.a.b.Za = 8 : 0 < d && (this.a.b.Za = 24);
                    break;
                case 3:
                    this.a.b.Za = e;
                    break;
                default:
                    0 > b ? this.a.b.Za = 16 : 0 < b && (this.a.b.Za = 0)
            }
            switch (this.nb) {
                case 4:
                    this.a.b.te = r.jt;
                    break;
                case 5:
                    this.a.b.te = r.zp;
                    break;
                case 3:
                    this.a.b.te = r.Ix;
                    break;
                case 2:
                    this.a.b.te = r.Jx;
                    break;
                case 1:
                    this.a.b.te = r.Hx;
                    break;
                default:
                    this.a.b.te = r.Mc
            }
            null != this.a.aa && this.a.aa.We();
            this.Cu();
            this.cj(this.a.b.da, e);
            this.nb != S.xh && this.nb != S.Fl || 0 != this.Vj || (b = !1, d = this.wy, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.Ed = -this.vy << 8, this.nb = S.$p));
            switch (this.nb) {
                case 2:
                    0 <= this.Ed && (this.nb = S.Zp);
                    break;
                case 3:
                    this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) != k.Df && (this.Ed = 0, this.nb = S.Fl, this.a.b.Za = 8);
                    break;
                case 0:
                    if (0 != (a & 3) && 0 == (a & 12) && this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) != k.Df) {
                        this.nb = S.Fl;
                        this.Wd = 0;
                        break
                    }
                    0 != (a & 2) && null != this.a.aa && this.a.aa.Fh(r.jt) && (this.Wd = 0, this.nb = S.ty);
                    if (this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) != k.Df) break;
                    0 == this.bn(this.a.w, this.a.v + 10, this.Ci, J.ze, !0) ? (a = this.a.w - this.a.c.ia, b = this.a.v - this.a.c.ka, d = new G, this.km(a, b + this.Ci - 1, a, b, this.Ci, J.ze, d), this.a.w = d.x + this.a.c.ia, this.a.v = d.y + this.a.c.ka, this.Vj = !1) : this.nb = S.Zp;
                    break;
                case 1:
                    if (this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) == k.Df) {
                        if (0 > this.Ed)
                            for (f = 0; 32 > f; f++)
                                if (this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff + f) != k.Df) {
                                    this.a.v += f;
                                    break
                                } this.Ed = 0
                    }
                    0 != (a & 12) && (this.nb = S.xh, this.Ed = 0);
                    break;
                case 4:
                    0 == (a & 2) && (null != this.a.aa && this.a.aa.Fh(r.zp) ? (this.nb = S.uy, this.a.b.te = r.zp, this.a.aa.We(), this.a.aa.bl = 1) : this.nb = S.xh);
                    break;
                case 5:
                    null != this.a.aa && 0 == this.a.aa.Sd && (this.nb = S.xh)
            }
            if (this.nb == S.xh || this.nb == S.ty || this.nb == S.uy) {
                do {
                    a = null;
                    null != this.a.wb && (a = this.a.wb.jj);
                    if (null == this.a.c.sm(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, this.a.w, this.a.v, a) && (a = this.a.c.sm(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, this.a.w, this.a.v + 1, a), null != a && 1 == a.size())) {
                        a = a.get(0);
                        if (null == this.Wj || this.Wj != a) {
                            if (this.a.cf != a.cf) {
                                this.Wj = a;
                                this.Ut = a.w;
                                this.Vt = a.v;
                                break
                            }
                            if (null == this.Wj) break
                        }
                        b = a.w - this.Ut;
                        d = a.v - this.Vt;
                        this.Ut = a.w;
                        this.Vt = a.v;
                        this.a.w += b;
                        this.a.v += d;
                        this.a.c.Yf(this.a);
                        this.a.b.O = !0;
                        break
                    }
                    this.Wj = null
                } while (0)
            } else this.Wj = null
        },
        cw: function() {
            this.Ed = this.Wd = this.a.b.da = 0
        },
        ug: function() {
            this.stop()
        },
        stop: function() {
            if (this.fg != this.a.c.ue) this.cw();
            else {
                this.a.B.U = !0;
                var a = this.a.w - this.a.c.ia,
                    b = this.a.v - this.a.c.ka,
                    c;
                switch (this.a.c.i.Js & 4294901760) {
                    case -786432:
                        a = this.a.w - this.a.ma;
                        b = this.a.v - this.a.na;
                        c = this.a.c.$k(a, b, a + this.a.N, b + this.a.L);
                        a = this.a.w;
                        b = this.a.v;
                        0 != (c & k.sh) && (a = this.a.ma, this.Wd = 0, this.Vj = !0);
                        0 != (c & k.th) && (a = this.a.c.Ud - this.a.N + this.a.ma, this.Wd = 0, this.Vj = !0);
                        0 != (c & k.uh) && (b = this.a.na, this.Ed = 0, this.Vj = !1);
                        0 != (c & k.rh) && (b = this.a.c.Vd - this.a.L + this.a.na, this.Ed = 0, this.Vj = !1);
                        this.a.w = a;
                        this.a.v = b;
                        this.nb = this.nb == S.$p ? S.Zp : S.xh;
                        this.Gl = 0;
                        break;
                    case -851968:
                    case -917504:
                        if (this.Vj = !1, c = new G, this.nb == S.Zp) this.km(a, b, this.a.b.qj - this.a.c.ia, this.a.b.rj - this.a.c.ka, this.Ci, J.ze, c), this.a.w = c.x + this.a.c.ia, this.a.v = c.y + this.a.c.ka, this.nb = S.xh, this.a.b.O = !0, this.bn(this.a.w, this.a.v + 1, 0, J.ze, !0) ? this.Wd = this.a.b.da = 0 : (this.Gl = 0, this.a.b.da = Math.abs(this.Wd / 256), this.Ed = 0);
                        else {
                            if (this.nb == S.xh) {
                                if (this.km(a, b, a, b - this.Ci, 0, J.ze, c)) {
                                    this.a.w = c.x + this.a.c.ia;
                                    this.a.v = c.y + this.a.c.ka;
                                    this.a.b.O = !0;
                                    break
                                }
                                if (this.km(a, b, this.a.b.qj - this.a.c.ia, this.a.b.rj - this.a.c.ka, 0, J.ze, c)) {
                                    this.a.w = c.x + this.a.c.ia;
                                    this.a.v = c.y + this.a.c.ka;
                                    this.a.b.O = !0;
                                    this.cw();
                                    break
                                }
                            }
                            if (this.nb == S.$p) {
                                if (this.km(a, b, a, b - this.Ci, 0, J.ze, c)) {
                                    this.a.w = c.x + this.a.c.ia;
                                    this.a.v = c.y + this.a.c.ka;
                                    this.a.b.O = !0;
                                    break
                                }
                                this.Gl = 1;
                                this.Wd = 0
                            }
                            this.nb == S.Fl && this.km(a, b, this.a.b.qj - this.a.c.ia, this.a.b.rj - this.a.c.ka, 0, J.ze, c) ? (this.a.w = c.x + this.a.c.ia, this.a.v = c.y + this.a.c.ka, this.a.b.O = !0, this.cw()) : (this.a.b.Ra = this.a.b.ss, this.a.b.ib = this.a.b.rs, this.bn(this.a.w, this.a.v, 0, J.ze, !0) || (this.a.w = this.a.b.qj, this.a.v = this.a.b.rj, this.a.b.O = !0))
                        }
                }
            }
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        yf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.jb && (a = this.a.b.jb);
            this.a.b.da = a;
            this.Wd = this.a.b.da * M.Qj[this.a.c.Zb(this.a)];
            this.Ed = this.a.b.da * M.dk[this.a.c.Zb(this.a)];
            this.a.B.U = !0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.jb = a;
            a <<= 8;
            this.Wd > a && (this.Wd = a);
            this.a.B.U = !0
        },
        Ps: function(a) {
            this.Tt = a
        },
        xf: function(a) {
            this.a.b.Za = a;
            this.Wd = this.a.b.da * M.Qj[a];
            this.Ed = this.a.b.da * M.dk[a]
        },
        Cu: function() {
            var a;
            0 < this.a.b.Ra ? a = this.a.c.h.ca.Bk(this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb) : (a = new Z, a.width = this.a.N, a.height = this.a.L, a.Ga = this.a.ma, a.Ca = this.a.na);
            this.Ef = 0;
            this.Ff = a.height - a.Ca;
            this.Ci = 2 * a.height + a.height >>> 3
        },
        FJ: function() {
            this.Cu();
            this.l.vg(this.a.fe, this.a.w + this.Ef, this.a.v + this.Ff) == k.Df && (0 == this.a.c.Cn(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, this.a.w, this.a.v, 0, J.Bp) && (this.nb == S.$p && 0 > this.Ed || 0 == this.a.c.Cn(this.a, this.a.b.Ra, this.a.b.ib, this.a.b.Gb, this.a.b.Hb, this.a.w, this.a.v, this.Ci, J.ze)) || this.a.c.i.wd(this.a, -851968 | this.a.Da & 65535))
        }
    });
    $a.vG = [4294967288, 4294967292, 4294967294, 4294967295];
    $a.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.Fd = 0;
            this.yh = this.a.b.da = 0;
            this.xy = -1;
            this.a.b.li = b.Pk;
            this.bp = b.dw;
            this.eh = this.yk(b.dw);
            this.cp = b.ew;
            this.we = this.yk(b.ew);
            this.a.b.jb = b.SB;
            this.a.b.ki = 0;
            this.yy = b.QB;
            this.a.B.Bj = 0;
            this.Aj = b.Or;
            this.Wt = 0;
            this.Xt = $a.vG[b.PB];
            this.Yt = b.RB;
            this.Hl = 0;
            this.Xj = this.a.c.Zb(this.a);
            this.a.Dg = 0;
            this.a.Eg = 0;
            this.so(b);
            this.a.b.O = !0
        },
        move: function() {
            var a, b, c;
            this.a.c.ol = 1;
            if (0 == this.yh) {
                this.a.B.zj = !1;
                a = this.a.c.bd[this.a.b.li - 1] & 15;
                b = 0;
                0 != (a & 8) && (b = -1);
                0 != (a & 4) && (b = 1);
                if (0 != b) {
                    c = this.Yt;
                    0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic);
                    for (this.Hl += c; 100 < this.Hl;) this.Hl -= 100, this.Xj += b, this.Xj &= 31, this.a.b.Za = this.Xj & this.Xt;
                    this.a.b.O = !0
                }
                c = 0;
                0 != this.a.B.Bj ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
                for (b = this.Fd;;) {
                    if (0 != (c & 1)) {
                        if (0 == this.Fd) {
                            if (0 == this.yy) break;
                            if (0 != (this.Wt & 3)) break;
                            this.a.B.Bj ^= 1;
                            c = this.eh;
                            0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic);
                            b += c;
                            c = b >> 8;
                            c > this.a.b.jb && (this.Fd = b = this.a.b.jb << 8);
                            this.Fd = b;
                            break
                        }
                        c = this.we;
                        0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic);
                        b -= c;
                        0 > b && (b = 0);
                        this.Fd = b
                    } else 0 != (c & 2) && (c = this.eh, 0 != (this.a.c.A.Vb & J.Vc) && (c *= this.a.c.Ic), b += c, c = b >> 8, c > this.a.b.jb && (this.Fd = b = this.a.b.jb << 8), this.Fd = b);
                    break
                }
                this.Wt = a;
                this.a.b.da = this.Fd >> 8;
                this.a.b.te = r.Mc;
                null != this.a.aa && this.a.aa.We();
                a = this.a.c.Zb(this.a);
                0 != this.a.B.Bj && (a = a + 16 & 31);
                if (0 == this.cj(this.a.b.da, a)) return
            }
            do {
                if (0 == this.yh) break;
                if (0 == this.a.c.ol) break;
                b = this.Fd;
                b -= this.we;
                if (0 >= b) {
                    this.yh = this.Fd = 0;
                    break
                }
                this.Fd = b;
                b >>= 8;
                a = this.a.c.Zb(this.a);
                0 != this.yh && (a += 16, a &= 31);
                if (0 == this.cj(b, a)) break
            } while (1)
        },
        reverse: function() {},
        stop: function() {
            this.Fd = this.yh = 0;
            this.a.B.Bj = 0;
            this.fg == this.a.c.ue && (this.uo(0 != (this.Aj & M.qn)), this.a.B.U = !0)
        },
        start: function() {
            this.Pb = 0;
            this.a.B.U = !0
        },
        ug: function() {
            this.fg == this.a.c.ue && this.uo(0 != (this.Aj & M.qn));
            this.a.c.pc != this.xy && (this.yh = this.a.B.Bj, this.a.B.Bj = 0, this.yh++, 16 <= this.yh ? this.stop() : (this.a.B.U = !0, this.a.B.zj = !0))
        },
        yf: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.jb && (a = this.a.b.jb);
            this.Fd = a << 8;
            this.a.B.U = !0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.jb = a;
            a <<= 8;
            this.Fd > a && (this.Fd = a);
            this.a.B.U = !0
        },
        Rs: function(a) {
            this.Yt = a
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0, this.a.b.Qa = !0)
        },
        xf: function(a) {
            this.Xj = a;
            this.a.b.Za = a & this.Xt
        }
    });
    ab.prototype = p.extend(new M, {
        Z: function(a) {
            this.a = a;
            this.a.b.da = 0;
            this.a.b.Qa = !0;
            this.a.b.O = !0
        },
        move: function() {
            null != this.a.aa && this.a.aa.We();
            this.a.b.Qa && (this.a.b.Qa = !1, this.a.c.Yf(this.a))
        },
        dc: function(a) {
            this.a.w != a && (this.a.w = a, this.a.B.U = !0, this.a.b.O = !0);
            this.a.b.Qa = !0
        },
        ec: function(a) {
            this.a.v != a && (this.a.v = a, this.a.B.U = !0, this.a.b.O = !0);
            this.a.b.Qa = !0
        },
        xf: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        ug: function() {},
        yf: function() {},
        hh: function() {}
    });
    (function(a) {
        this.Pd = a
    }).prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            a.c.h.file.wg(b.data);
            this.a.b.Qa = !0;
            this.a.b.O = !0
        },
        Cb: function() {
            this.Pd.Cb()
        },
        move: function() {
            this.Pd.move() && (this.a.b.O = !0)
        },
        stop: function() {
            this.Pd.stop(this.fg == this.a.c.ue)
        },
        start: function() {
            this.Pd.start()
        },
        ug: function() {
            this.Pd.ug(this.fg == this.a.c.ue)
        },
        yf: function(a) {
            this.Pd.yf(a)
        },
        hh: function(a) {
            this.Pd.hh(a)
        },
        reverse: function() {
            this.Pd.reverse()
        },
        dc: function(a) {
            this.Pd.dc(a);
            this.a.b.O = !0;
            this.a.b.Qa = !0
        },
        ec: function(a) {
            this.Pd.ec(a);
            this.a.b.O = !0;
            this.a.b.Qa = !0
        },
        xf: function(a) {
            this.Pd.xf(a);
            this.a.b.O = !0;
            this.a.b.Qa = !0
        },
        kz: function() {
            return 0
        }
    });
    Ha.PE = 1;
    Ha.QE = 2;
    Ha.NM = 4;
    Ha.prototype = {
        Z: function(a, b, c, d, e) {
            null != this.ta && this.ta.Cb();
            null != d && (b.b.Za = d.tz);
            this.mx = b.wb.vw;
            d = b.b.Fc;
            b.b.Fc = -1;
            if (null != c.kf && a < c.kf.yo) {
                c = c.kf.gd[a];
                this.fp = a; - 1 == e && (e = c.to);
                b.b.Fc = e;
                switch (e) {
                    case 0:
                        this.ta = new ab;
                        break;
                    case 1:
                        this.ta = new ve;
                        break;
                    case 2:
                        this.ta = new $a;
                        break;
                    case 3:
                        this.ta = new ue;
                        break;
                    case 4:
                        this.ta = new ta;
                        break;
                    case 5:
                        this.ta = new we;
                        break;
                    case 9:
                        this.ta = new S;
                        break;
                    case 14:
                        this.ta = null, null == this.ta && (this.ta = new ab)
                }
                b.b.Za = this.Uu(b, c.$B, b.b.Za);
                this.ta.Z(b, c)
            }
            d != b.b.Fc && d == U.Zt && b.c.Vz(); - 1 == b.b.Fc && (b.b.Fc = 0, this.ta = new ab, this.ta.Z(b, null), b.b.Za = 0)
        },
        NI: function(a, b, c) {
            null != this.ta && this.ta.Cb();
            a.b.Fc = b;
            switch (b) {
                case 11:
                    this.ta = new te;
                    break;
                case 13:
                    this.ta = new se
            }
            this.ta.a = a;
            0 == c && this.ta.Z(a, null)
        },
        Cb: function() {
            this.ta.Cb()
        },
        move: function() {
            this.ta.move()
        },
        Uu: function(a, b, c) {
            if (0 > c || 32 <= c) {
                var d = 0,
                    e = b,
                    f;
                for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
                if (0 == d) c = 0;
                else
                    for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--, 0 > d)); c++);
            }
            return c
        }
    };
    Oa.xN = 2;
    Oa.yN = 4;
    Oa.yF = 8;
    Oa.prototype = p.extend(new Ba, {
        Yn: function() {
            return 0
        },
        Qu: function(a) {
            this.UA = a.o();
            this.Cc = p.uC(a.Ob());
            0 == this.Cc.length && (this.Cc = "Ini.ini");
            a = 0;
            this.UA & Oa.yF && (a |= la.ly);
            this.Pc = new la(this.ea.h, a);
            this.Ge = "Group";
            this.gm = "Item";
            this.oe = 0;
            return !1
        },
        sv: function() {
            0 < this.oe && (this.oe--, 0 == this.oe && this.Pc.ip());
            return 0
        },
        Tu: function() {
            this.Pc.ip()
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    this.zG(b);
                    break;
                case 1:
                    this.AG(b);
                    break;
                case 2:
                    this.EG(b);
                    break;
                case 3:
                    this.xG(b);
                    break;
                case 4:
                    this.RF(b);
                    break;
                case 5:
                    this.BG(b);
                    break;
                case 6:
                    this.yG(b);
                    break;
                case 7:
                    this.GG(b);
                    break;
                case 8:
                    this.FG(b);
                    break;
                case 9:
                    this.DG(b);
                    break;
                case 10:
                    this.CG(b);
                    break;
                case 11:
                    this.OE(b);
                    break;
                case 12:
                    this.NE(b);
                    break;
                case 13:
                    this.ME(b)
            }
        },
        zG: function(a) {
            this.Ge = a.$b(this.ea, 0)
        },
        AG: function(a) {
            this.gm = a.$b(this.ea, 0)
        },
        EG: function(a) {
            a = a.Zn(this.ea, 0).toString();
            this.Pc.xl(this.Ge, this.gm, a, this.Cc);
            this.oe = 10
        },
        xG: function(a) {
            a = a.mv(this.ea, 0);
            this.Pc.xl(this.Ge, "pos." + a.wb.lj, a.w.toString() + "," + a.v.toString(), this.Cc);
            this.oe = 10
        },
        RF: function(a) {
            a = a.mv(this.ea, 0);
            var b = this.Pc.Ck(this.Ge, "pos." + a.wb.lj, "X", this.Cc);
            if ("X" != b) {
                var c = b.indexOf(","),
                    d = b.substring(c + 1);
                a.w = parseInt(b.substring(0, c), 10);
                isNaN(a.w) && (a.w = 0);
                a.v = parseInt(d, 10);
                isNaN(a.v) && (a.v = 0);
                a.b.O = !0;
                a.b.Qa = !0
            }
        },
        BG: function(a) {
            a = a.$b(this.ea, 0);
            this.Pc.xl(this.Ge, this.gm, a, this.Cc);
            this.oe = 10
        },
        yG: function(a) {
            this.Cc = p.uC(a.$b(this.ea, 0))
        },
        GG: function(a) {
            var b = a.$b(this.ea, 0);
            a = a.Zn(this.ea, 1).toString();
            this.Pc.xl(this.Ge, b, a, this.Cc);
            this.oe = 10
        },
        FG: function(a) {
            var b = a.$b(this.ea, 0),
                c = a.$b(this.ea, 1);
            a = a.Zn(this.ea, 2).toString();
            this.Pc.xl(b, c, a, this.Cc);
            this.oe = 10
        },
        DG: function(a) {
            var b = a.$b(this.ea, 0);
            a = a.$b(this.ea, 1);
            this.Pc.xl(this.Ge, b, a, this.Cc);
            this.oe = 10
        },
        CG: function(a) {
            var b = a.$b(this.ea, 0),
                c = a.$b(this.ea, 1);
            a = a.$b(this.ea, 2);
            this.Pc.xl(b, c, a, this.Cc);
            this.oe = 10
        },
        OE: function(a) {
            this.Pc.Qz(this.Ge, a.$b(this.ea, 0), this.Cc);
            this.oe = 10
        },
        NE: function(a) {
            this.Pc.Qz(a.$b(this.ea, 0), a.$b(this.ea, 1), this.Cc);
            this.oe = 10
        },
        ME: function(a) {
            this.Pc.JH(a.$b(this.ea, 0), this.Cc);
            this.oe = 10
        },
        Pn: function(a) {
            switch (a) {
                case 0:
                    return this.rF();
                case 1:
                    return this.oF();
                case 2:
                    return this.tF();
                case 3:
                    return this.sF();
                case 4:
                    return this.qF();
                case 5:
                    return this.pF()
            }
            return null
        },
        rF: function() {
            var a = this.Pc.Ck(this.Ge, this.gm, "", this.Cc),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        oF: function() {
            return this.Pc.Ck(this.Ge, this.gm, "", this.Cc)
        },
        tF: function() {
            var a = this.K.Ak(),
                a = this.Pc.Ck(this.Ge, a, "", this.Cc),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        sF: function() {
            var a = this.K.Ak(),
                b = this.K.Ak(),
                a = this.Pc.Ck(a, b, "", this.Cc),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        qF: function() {
            var a = this.K.Ak();
            return this.Pc.Ck(this.Ge, a, "", this.Cc)
        },
        pF: function() {
            var a = this.K.Ak(),
                b = this.K.Ak();
            return this.Pc.Ck(a, b, "", this.Cc)
        }
    });
    Ca.mF = 0;
    Ca.lF = 1;
    Ca.pN = 2;
    Ca.qN = 3;
    Ca.prototype = p.extend(new Ba, {
        Yn: function() {
            return 3
        },
        Qu: function(a) {
            try {
                this.Xq = a.s()
            } catch (b) {
                this.Xq = 0
            }
        },
        MP: function(a) {
            a.setRequestHeader("Access-Control-Allow-Origin", "*");
            a.setRequestHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
            a.setRequestHeader("Access-Control-Allow-Credentials", "true");
            a.setRequestHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,ORIGIN");
            a.setRequestHeader("Access-Control-Max-Age", "846000")
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    if (this.Ko) break;
                    var c = b.$b(this.ea, 0);
                    request = new XMLHttpRequest;
                    var d = this,
                        e = "",
                        f;
                    for (f in this.ds) e.length && (e += "&"), e += f + "=" + encodeURI(this.ds[f]);
                    this.ds = {};
                    if (e.length) {
                        if ("withCredentials" in request) request.open("POST", c, !0);
                        else if ("undefined" != typeof XDomainRequest) request = new XDomainRequest, request.open("POST", c);
                        else {
                            alert("CORS not supported");
                            break
                        }
                        this.nA(request);
                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        request.onreadystatechange = function() {
                            4 == request.readyState && (d.Ko = !1, d.Pe = 0 != request.status ? request.status : 522, d.response = 200 !== request.status ? "" : request.responseText, d.Qi = d.K.c.eg, 408 !== request.status && 522 !== d.Pe ? d.K.$q(0, 0) : d.K.gs(2, 0))
                        };
                        request.ontimeout = function() {
                            d.Pe = 408;
                            d.Qi = d.K.c.eg;
                            d.K.$q(2, 0)
                        };
                        request.onerror = function() {
                            d.response = "";
                            d.Pe = 0 != request.status ? request.status : 522;
                            d.Qi = d.K.c.eg;
                            522 !== d.Pe && 408 !== d.Pe && d.K.gs(2, 0)
                        };
                        request.send(e)
                    } else {
                        0 < c.indexOf("forceLoad") && (c += (/\?/.test(c) ? "&" : "?") + (new Date).getTime());
                        if ("withCredentials" in request) request.open("GET", c, !0);
                        else if ("undefined" != typeof XDomainRequest) request = new XDomainRequest, request.open("GET", c);
                        else {
                            alert("CORS not supported");
                            break
                        }
                        this.nA(request);
                        request.onreadystatechange = function() {
                            4 == request.readyState && (d.Ko = !1, d.Pe = 0 != request.status ? request.status : 522, d.response = 200 !== request.status ? "" : request.responseText, d.Qi = d.K.c.eg, 408 !== request.status && 522 !== d.Pe ? d.K.$q(0, 0) : d.K.gs(2, 0))
                        };
                        request.ontimeout = function() {
                            d.Pe = 408;
                            d.Qi = d.K.c.eg;
                            d.K.$q(2, 0)
                        };
                        request.onerror = function() {
                            d.response = "";
                            d.Pe = 0 != request.status ? request.status : 522;
                            d.Qi = d.K.c.eg;
                            522 !== d.Pe && 408 !== d.Pe && d.K.gs(2, 0)
                        };
                        request.send(null)
                    }
                    this.Ko = !0;
                    break;
                case 1:
                    f = b.$b(this.ea, 0);
                    c = b.$b(this.ea, 1);
                    this.ds[f] = c;
                    break;
                case 2:
                    this.headers = b.$b(this.ea, 0);
                    break;
                case 3:
                    this.Dx = b.$b(this.ea, 0);
                    break;
                case 4:
                    this.password = b.$b(this.ea, 0);
                    break;
                case 5:
                    this.timeout = b.Zn(this.ea, 0);
                    break;
                case 6:
                    b.$b(this.ea, 0)
            }
        },
        Dn: function(a) {
            switch (a) {
                case 0:
                    return 0 != (this.K.V & L.Np) || this.K.c.eg == this.Qi;
                case 1:
                    return this.Ko;
                case 2:
                    return 0 != (this.K.V & L.Np) || this.K.c.eg == this.Qi
            }
            return !1
        },
        Pn: function(a) {
            switch (a) {
                case 0:
                    return this.response;
                case 1:
                    return encodeURI("" + this.K.Ak());
                case 2:
                    return this.Pe
            }
        },
        nA: function(a) {
            if (this.headers) {
                var b = this.headers.split("[\\r\\n]+");
                for (i = 0; i < b.length; i++) {
                    var c = b[i].split(":");
                    a.setRequestHeader(c[0], c[1])
                }
            }
            this.Dx && this.password && a.setRequestHeader("Authorization", "Basic " + this.Dx + ":" + this.password);
            0 < this.timeout && (a.timeout = 1E3 * this.timeout);
            this.Xq == Ca.mF ? a = a.getResponseHeader("Content-Type") : this.Xq == Ca.lF && ReverseCharset(this.K.c.h.wz)
        },
        mQ: function(a) {
            return unescape(encodeURIComponent(a))
        },
        hQ: function(a) {
            return decodeURIComponent(escape(a))
        },
        aP: function(a) {
            return 28591 == a ? "iso-8859-1" : 28592 == a ? "iso-8859-2" : 28593 == a ? "iso-8859-3" : 28594 == a ? "iso-8859-4" : 28595 == a ? "iso-8859-5" : 28596 == a ? "iso-8859-6" : 28597 == a ? "iso-8859-7" : 28598 == a ? "iso-8859-8" : 1251 == a ? "windows-1251" : 1252 == a ? "windows-1252" : 1253 == a ? "windows-1253" : 1254 == a ? "windows-1254" : 1255 == a ? "windows-1255" : 20936 == a ? "gb2312" : 936 == a ? "gbk" : 950 == a ? "big5" : 20866 == a ? "koi8-r" : 51932 == a ? "euc-jp" : 51949 == a ? "euc-kr" : 51936 == a ? "euc-cn" : 50222 == a ? "iso-2022-jp" : 50225 == a ? "iso-2022-kr" : 65001 == a ? "utf-8" : 0 == a ? "utf-8" : null
        }
    });
    be(z, V)
};