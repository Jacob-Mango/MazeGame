function aa(a) {
  throw a;
}
var fa = void 0,
  ia = !0,
  na = null,
  oa = !1;
function pa() {
  return function() {};
}
try {
  this.Module = Module;
} catch (aaa) {
  this.Module = Module = {};
}
var qa = "object" === typeof process,
  sa = "object" === typeof window,
  va = "function" === typeof importScripts,
  baa = !sa && !qa && !va;
if (qa) {
  Module.print = function(a) {
    process.stdout.write(a + "\n");
  };
  Module.printErr = function(a) {
    process.stderr.write(a + "\n");
  };
  var caa = require("fs"),
    daa = require("path");
  Module.read = function(a) {
    var a = daa.normalize(a),
      d = caa.readFileSync(a).toString();
    !d &&
      a != daa.resolve(a) &&
      ((a = path.join(__dirname, "..", "src", a)),
      (d = caa.readFileSync(a).toString()));
    return d;
  };
  Module.load = function(a) {
    eaa(read(a));
  };
  Module.arguments || (Module.arguments = process.argv.slice(2));
}
baa &&
  ((Module.print = print),
  "undefined" != typeof printErr && (Module.printErr = printErr),
  (Module.read =
    "undefined" != typeof read
      ? read
      : function(a) {
          snarf(a);
        }),
  Module.arguments ||
    ("undefined" != typeof scriptArgs
      ? (Module.arguments = scriptArgs)
      : "undefined" != typeof arguments && (Module.arguments = arguments)));
sa &&
  !va &&
  (Module.print ||
    (Module.print = function(a) {
      console.log(a);
    }),
  Module.printErr ||
    (Module.printErr = function(a) {
      console.log(a);
    }));
if (sa || va) {
  (Module.read = function(a) {
    var d = new XMLHttpRequest();
    d.open("GET", a, oa);
    d.send(na);
    return d.responseText;
  }),
    Module.arguments ||
      ("undefined" != typeof arguments && (Module.arguments = arguments));
}
va && (Module.print || (Module.print = pa()), (Module.load = importScripts));
!va && !sa && !qa && !baa && aa("Unknown runtime environment. Where are we?");
function eaa(a) {
  eval.call(na, a);
}
"undefined" == !Module.load &&
  Module.read &&
  (Module.load = function(a) {
    eaa(Module.read(a));
  });
Module.print || (Module.print = pa());
Module.printErr || (Module.printErr = Module.print);
Module.arguments || (Module.arguments = []);
Module.print = Module.print;
Module.f = Module.printErr;
Module.preRun || (Module.preRun = []);
Module.postRun || (Module.postRun = []);
var faa = { i1: 0, i8: 0, i16: 0, i32: 0, i64: 0 },
  gaa = { float: 0, double: 0 };
function wa(a) {
  if (1 == xa) {
    return 1;
  }
  var d = {
    "%i1": 1,
    "%i8": 1,
    "%i16": 2,
    "%i32": 4,
    "%i64": 8,
    "%float": 4,
    "%double": 8
  }["%" + a];
  d ||
    ("*" == a.charAt(a.length - 1)
      ? (d = xa)
      : "i" == a[0] &&
        ((a = parseInt(a.substr(1))), ya(0 == a % 8), (d = a / 8)));
  return d;
}
var Aa;
function Ba() {
  var a = [],
    d = 0;
  this.J = function(e) {
    e &= 255;
    d && (a.push(e), d--);
    if (0 == a.length) {
      if (128 > e) {
        return String.fromCharCode(e);
      }
      a.push(e);
      d = 191 < e && 224 > e ? 1 : 2;
      return "";
    }
    if (0 < d) {
      return "";
    }
    var e = a[0],
      f = a[1],
      g = a[2],
      e =
        191 < e && 224 > e
          ? String.fromCharCode(((e & 31) << 6) | (f & 63))
          : String.fromCharCode(((e & 15) << 12) | ((f & 63) << 6) | (g & 63));
    a.length = 0;
    return e;
  };
  this.Jf = function(a) {
    for (
      var a = unescape(encodeURIComponent(a)), d = [], g = 0;
      g < a.length;
      g++
    ) {
      d.push(a.charCodeAt(g));
    }
    return d;
  };
}
function Da(a) {
  var d = b;
  b += a;
  return d;
}
function haa(a) {
  var d = Ea;
  Ea += a;
  if (Ea >= Fa) {
    for (; Fa <= Ea; ) {
      Fa = ((2 * Fa + 4095) >> 12) << 12;
    }
    a = c;
    Ga = c = new Int32Array(Fa);
    c.set(a);
    Ha = new Uint32Array(c.buffer);
    a = k;
    k = new Float64Array(Fa);
    k.set(a);
  }
  return d;
}
function Ia(a, d) {
  return Math.ceil(a / (d ? d : 1)) * (d ? d : 1);
}
var xa = 1,
  iaa = {},
  Ja,
  Ka,
  Ma;
function Na(a) {
  Module.print(a + ":\n" + Error().stack);
  aa("Assertion: " + a);
}
function ya(a, d) {
  a || Na("Assertion failed: " + d);
}
var jaa = this;
function kaa(a, d, e, f) {
  function g(a, d) {
    if ("string" == d) {
      if (a === na || a === fa || 0 === a) {
        return 0;
      }
      h || (h = b);
      var e = Da(a.length + 1);
      laa(a, e);
      return e;
    }
    return "array" == d ? (h || (h = b), (e = Da(a.length)), maa(a, e), e) : a;
  }
  var h = 0;
  try {
    var i = eval("_" + a);
  } catch (j) {
    try {
      i = jaa.Module["_" + a];
    } catch (l) {}
  }
  ya(
    i,
    "Cannot call unknown function " +
      a +
      " (perhaps LLVM optimizations or closure removed it?)"
  );
  var m = 0,
    a = f
      ? f.map(function(a) {
          return g(a, e[m++]);
        })
      : [],
    d = (function(a, d) {
      if ("string" == d) {
        return Qa(a);
      }
      ya("array" != d);
      return a;
    })(i.apply(na, a), d);
  h && (b = h);
  return d;
}
Module.ccall = kaa;
Module.cwrap = function(a, d, e) {
  return function() {
    return kaa(a, d, e, Array.prototype.slice.call(arguments));
  };
};
function Ta(a, d, e) {
  e = e || "i8";
  "*" === e.charAt(e.length - 1) && (e = "i32");
  switch (e) {
    case "i1":
      c[a] = d;
      break;
    case "i8":
      c[a] = d;
      break;
    case "i16":
      c[a] = d;
      break;
    case "i32":
      c[a] = d;
      break;
    case "i64":
      c[a] = d;
      break;
    case "float":
      k[a] = d;
      break;
    case "double":
      k[a] = d;
      break;
    default:
      Na("invalid type for setValue: " + e);
  }
}
Module.setValue = Ta;
function Ua(a, d) {
  d = d || "i8";
  "*" === d.charAt(d.length - 1) && (d = "i32");
  switch (d) {
    case "i1":
      return c[a];
    case "i8":
      return c[a];
    case "i16":
      return c[a];
    case "i32":
      return c[a];
    case "i64":
      return c[a];
    case "float":
      return k[a];
    case "double":
      return k[a];
    default:
      Na("invalid type for setValue: " + d);
  }
  return na;
}
Module.getValue = Ua;
var Va = 1,
  q = 2;
Module.ALLOC_NORMAL = 0;
Module.ALLOC_STACK = Va;
Module.ALLOC_STATIC = q;
function u(a, d, e) {
  var f, g;
  "number" === typeof a ? ((f = ia), (g = a)) : ((f = oa), (g = a.length));
  var h = "string" === typeof d ? d : na,
    e = [Wa, Da, haa][e === fa ? q : e](Math.max(g, h ? 1 : d.length));
  if (f) {
    a = e;
    for (g = a + g; a < g; a++) {
      (c[a] = 0), (k[a] = 0);
    }
    return e;
  }
  f = 0;
  for (var i; f < g; ) {
    var j = a[f];
    "function" === typeof j && (j = iaa.Yf(j));
    i = h || d[f];
    0 === i ? f++ : (Ta(e + f, j, i), (f += wa(i)));
  }
  return e;
}
Module.allocate = u;
function Qa(a, d) {
  for (var e = new Ba(), f = "undefined" == typeof d, g = "", h = 0, i; ; ) {
    i = Ha[a + h];
    if (f && 0 == i) {
      break;
    }
    g += e.J(i);
    h += 1;
    if (!f && h == d) {
      break;
    }
  }
  return g;
}
Module.Pointer_stringify = Qa;
Module.Array_stringify = function(a) {
  for (var d = "", e = 0; e < a.length; e++) {
    d += String.fromCharCode(a[e]);
  }
  return d;
};
var v,
  naa = 4096,
  Ga,
  c,
  Ha,
  k,
  b,
  Ea,
  oaa = Module.TOTAL_STACK || 5242880,
  Fa = Module.TOTAL_MEMORY || 10485760;
ya(
  !!Int32Array &&
    !!Float64Array &&
    !!new Int32Array(1).subarray &&
    !!new Int32Array(1).set,
  "Cannot fallback to non-typed array case: Code is too specialized"
);
Ga = c = new Int32Array(Fa);
Ha = new Uint32Array(c.buffer);
k = new Float64Array(Fa);
Module.HEAP = Ga;
Module.IHEAP = c;
Module.FHEAP = k;
Ea = (((b = Ia(1)) + oaa + 4095) >> 12) << 12;
ya(Ea < Fa);
var paa = u(Xa("(null)"), "i8", q);
function Ya(a) {
  for (; 0 < a.length; ) {
    var d = a.shift(),
      e = d.j;
    "number" === typeof e && (e = v[e]);
    e(d.s === fa ? na : d.s);
  }
}
var cb = [],
  qaa = [],
  eb = [];
function raa(a) {
  for (var d = a; c[d++]; ) {}
  return d - a - 1;
}
Module.String_len = raa;
function Xa(a, d, e) {
  a = new Ba().Jf(a);
  e && (a.length = e);
  d || a.push(0);
  return a;
}
Module.intArrayFromString = Xa;
Module.intArrayToString = function(a) {
  for (var d = [], e = 0; e < a.length; e++) {
    var f = a[e];
    255 < f && (f &= 255);
    d.push(String.fromCharCode(f));
  }
  return d.join("");
};
function laa(a, d, e) {
  a = Xa(a, e);
  for (e = 0; e < a.length; ) {
    (c[d + e] = a[e]), (e += 1);
  }
}
Module.writeStringToMemory = laa;
function maa(a, d) {
  for (var e = 0; e < a.length; e++) {
    c[d + e] = a[e];
  }
}
Module.writeArrayToMemory = maa;
var D = [];
function saa(a, d) {
  return 0 <= a
    ? a
    : 32 >= d ? 2 * Math.abs(1 << (d - 1)) + a : Math.pow(2, d) + a;
}
function taa(a, d) {
  if (0 >= a) {
    return a;
  }
  var e = 32 >= d ? Math.abs(1 << (d - 1)) : Math.pow(2, d - 1);
  if (a >= e && (32 >= d || a > e)) {
    a = -2 * e + a;
  }
  return a;
}
var hb = 0,
  kb = {},
  uaa = oa,
  lb = na;
function nb(a) {
  hb++;
  Module.monitorRunDependencies && Module.monitorRunDependencies(hb);
  a
    ? (ya(!kb[a]),
      (kb[a] = 1),
      lb === na &&
        "undefined" !== typeof setInterval &&
        (lb = setInterval(function() {
          var a = oa,
            e;
          for (e in kb) {
            a || ((a = ia), Module.f("still waiting on run dependencies:")),
              Module.f("dependency: " + e);
          }
          a && Module.f("(end of list)");
        }, 6e3)))
    : Module.f("warning: run dependency added without ID");
}
Module.addRunDependency = nb;
function sb(a) {
  hb--;
  Module.monitorRunDependencies && Module.monitorRunDependencies(hb);
  a
    ? (ya(kb[a]), delete kb[a])
    : Module.f("warning: run dependency removed without ID");
  0 == hb && (lb !== na && (clearInterval(lb), (lb = na)), uaa || tb());
}
Module.removeRunDependency = sb;
Module.preloadedImages = {};
Module.preloadedAudios = {};
function vaa() {
  return 44;
}
vaa.X = 1;
function wb() {
  return xb(48);
}
wb.X = 1;
function yb(a) {
  var d = xb(48);
  zb(d, a);
  return d;
}
yb.X = 1;
function Cb(a, d, e, f, g, h, i, j, l) {
  var m = b;
  b += 9;
  var n = m + 1,
    p = m + 2,
    r = m + 3,
    s = m + 4,
    t = m + 5,
    w = m + 6,
    x = m + 7,
    y = m + 8;
  k[m] = a;
  k[n] = d;
  k[p] = e;
  k[r] = f;
  k[s] = g;
  k[t] = h;
  k[w] = i;
  k[x] = j;
  k[y] = l;
  a = xb(48);
  Db(a, m, n, p, r, s, t, w, x, y);
  b = m;
  return a;
}
Cb.X = 1;
function Fb(a, d) {
  var e = b;
  b += 4;
  0 == (c[Gb] << 24) >> 24 && Hb(Gb);
  Jb(e, a, d);
  c[Kb] = c[e];
  k[Kb] = k[e];
  c[Kb + 1] = c[e + 1];
  k[Kb + 1] = k[e + 1];
  c[Kb + 2] = c[e + 2];
  k[Kb + 2] = k[e + 2];
  c[Kb + 3] = c[e + 3];
  k[Kb + 3] = k[e + 3];
  b = e;
  return Kb;
}
Fb.X = 1;
function Jb(a, d, e) {
  H(a, d + e, d + 4 + e, d + 8 + e);
}
Jb.X = 1;
function waa(a, d) {
  Lb(a, d);
}
waa.X = 1;
function Lb(a, d) {
  var e;
  for (e = 0; ; ) {
    Mb((e << 2) + a, (e << 2) + d);
    var f = e + 1;
    e = f;
    if (3 <= (f | 0)) {
      break;
    }
  }
}
Lb.X = 1;
function xaa(a, d) {
  Nb(a, d);
}
xaa.X = 1;
function Nb(a, d) {
  var e;
  for (e = 0; ; ) {
    Ob((e << 2) + a, (e << 2) + d);
    var f = e + 1;
    e = f;
    if (3 <= (f | 0)) {
      break;
    }
  }
}
Nb.X = 1;
function Pb(a, d) {
  var e = b;
  b += 12;
  0 == (c[Qb] << 24) >> 24 && Hb(Qb);
  Vb(e, a, d);
  Wb(Xb, e);
  b = e;
  return Xb;
}
Pb.X = 1;
function Wb(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  var e = a + 4,
    f = d + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 8;
  f = d + 8;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  return a;
}
Wb.X = 1;
function Vb(a, d, e) {
  var f = b;
  b += 9;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8;
  k[f] = k[d] * k[e];
  k[g] = k[d + 1] * k[e + 1];
  k[h] = k[d + 2] * k[e + 2];
  k[i] = k[d + 4] * k[e];
  k[j] = k[d + 4 + 1] * k[e + 1];
  k[l] = k[d + 4 + 2] * k[e + 2];
  k[m] = k[d + 8] * k[e];
  k[n] = k[d + 8 + 1] * k[e + 1];
  k[p] = k[d + 8 + 2] * k[e + 2];
  Db(a, f, g, h, i, j, l, m, n, p);
  b = f;
}
Vb.X = 1;
function yaa(a, d) {
  return Yb(a, d);
}
yaa.X = 1;
function Yb(a, d) {
  var e = b;
  b += 9;
  var f = e + 1,
    g = e + 2,
    h = e + 3,
    i = e + 4,
    j = e + 5,
    l = e + 6,
    m = e + 7,
    n = e + 8;
  k[e] = k[a] - k[d];
  k[f] = k[a + 1] - k[d + 1];
  k[g] = k[a + 2] - k[d + 2];
  k[h] = k[a + 4] - k[d + 4];
  k[i] = k[a + 4 + 1] - k[d + 4 + 1];
  k[j] = k[a + 4 + 2] - k[d + 4 + 2];
  k[l] = k[a + 8] - k[d + 8];
  k[m] = k[a + 8 + 1] - k[d + 8 + 1];
  k[n] = k[a + 8 + 2] - k[d + 8 + 2];
  Db(a, e, f, g, h, i, j, l, m, n);
  b = e;
  return a;
}
Yb.X = 1;
function Zb(a, d) {
  var e = b;
  b += 12;
  0 == (c[ac] << 24) >> 24 && Hb(ac);
  bc(e, a, d);
  Wb(cc, e);
  b = e;
  return cc;
}
Zb.X = 1;
function bc(a, d, e) {
  var f = b;
  b += 9;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8;
  k[f] = k[d] * k[0 + e] + k[d + 4] * k[4 + e] + k[d + 8] * k[8 + e];
  k[g] =
    k[d] * k[0 + e + 1] + k[d + 4] * k[4 + e + 1] + k[d + 8] * k[8 + e + 1];
  k[h] =
    k[d] * k[0 + e + 2] + k[d + 4] * k[4 + e + 2] + k[d + 8] * k[8 + e + 2];
  k[i] =
    k[d + 1] * k[0 + e] + k[d + 4 + 1] * k[4 + e] + k[d + 8 + 1] * k[8 + e];
  k[j] =
    k[d + 1] * k[0 + e + 1] +
    k[d + 4 + 1] * k[4 + e + 1] +
    k[d + 8 + 1] * k[8 + e + 1];
  k[l] =
    k[d + 1] * k[0 + e + 2] +
    k[d + 4 + 1] * k[4 + e + 2] +
    k[d + 8 + 1] * k[8 + e + 2];
  k[m] =
    k[d + 2] * k[0 + e] + k[d + 4 + 2] * k[4 + e] + k[d + 8 + 2] * k[8 + e];
  k[n] =
    k[d + 2] * k[0 + e + 1] +
    k[d + 4 + 2] * k[4 + e + 1] +
    k[d + 8 + 2] * k[8 + e + 1];
  k[p] =
    k[d + 2] * k[0 + e + 2] +
    k[d + 4 + 2] * k[4 + e + 2] +
    k[d + 8 + 2] * k[8 + e + 2];
  Db(a, f, g, h, i, j, l, m, n, p);
  b = f;
}
bc.X = 1;
function zaa(a, d) {
  dc(a, d);
}
zaa.X = 1;
function dc(a, d) {
  var e = b;
  b += 4;
  var f, g, h, i;
  f = k[a] + k[a + 4 + 1] + k[a + 8 + 2];
  0 < f
    ? ((f = ec(f + 1)),
      (k[e + 3] = 0.5 * f),
      (f = 0.5 / f),
      (k[e] = (k[a + 8 + 1] - k[a + 4 + 2]) * f),
      (k[e + 1] = (k[a + 2] - k[a + 8]) * f),
      (k[e + 2] = (k[a + 4] - k[a + 1]) * f))
    : ((f =
        k[a] < k[a + 4 + 1]
          ? k[a + 4 + 1] < k[a + 8 + 2] ? 2 : 1
          : k[a] < k[a + 8 + 2] ? 2 : 0),
      (g = ((f + 1) | 0) % 3),
      (h = ((f + 2) | 0) % 3),
      (i = ec(
        k[(f << 2) + a + f] - k[(g << 2) + a + g] - k[(h << 2) + a + h] + 1
      )),
      (k[e + f] = 0.5 * i),
      (i = 0.5 / i),
      (k[e + 3] = (k[(h << 2) + a + g] - k[(g << 2) + a + h]) * i),
      (k[e + g] = (k[(g << 2) + a + f] + k[(f << 2) + a + g]) * i),
      (k[e + h] = (k[(h << 2) + a + f] + k[(f << 2) + a + h]) * i));
  jc(d, e, e + 1, e + 2, e + 3);
  b = e;
}
dc.X = 1;
function Aaa(a, d) {
  return kc(a, d);
}
Aaa.X = 1;
function kc(a, d) {
  return k[a + 2] * k[d] + k[a + 4 + 2] * k[d + 1] + k[a + 8 + 2] * k[d + 2];
}
kc.X = 1;
function Baa(a, d) {
  lc(a, d);
}
Baa.X = 1;
function lc(a, d) {
  var e;
  for (e = 0; ; ) {
    mc((e << 2) + a, (e << 2) + d);
    var f = e + 1;
    e = f;
    if (3 <= (f | 0)) {
      break;
    }
  }
}
lc.X = 1;
function Caa(a, d) {
  return nc(a, d);
}
Caa.X = 1;
function nc(a, d) {
  return k[a] * k[d] + k[a + 4] * k[d + 1] + k[a + 8] * k[d + 2];
}
nc.X = 1;
function oc(a) {
  var d = b;
  b += 12;
  0 == (c[pc] << 24) >> 24 && Hb(pc);
  qc(d, a);
  Wb(rc, d);
  b = d;
  return rc;
}
oc.X = 1;
function qc(a, d) {
  var e = b;
  b += 9;
  var f = e + 1,
    g = e + 2,
    h = e + 3,
    i = e + 4,
    j = e + 5,
    l = e + 6,
    m = e + 7,
    n = e + 8;
  k[e] = sc(k[d]);
  k[f] = sc(k[d + 1]);
  k[g] = sc(k[d + 2]);
  k[h] = sc(k[d + 4]);
  k[i] = sc(k[d + 4 + 1]);
  k[j] = sc(k[d + 4 + 2]);
  k[l] = sc(k[d + 8]);
  k[m] = sc(k[d + 8 + 1]);
  k[n] = sc(k[d + 8 + 2]);
  Db(a, e, f, g, h, i, j, l, m, n);
  b = e;
}
qc.X = 1;
function Daa(a, d) {
  return xc(a, d);
}
Daa.X = 1;
function xc(a, d) {
  return k[a + 1] * k[d] + k[a + 4 + 1] * k[d + 1] + k[a + 8 + 1] * k[d + 2];
}
xc.X = 1;
function yc(a) {
  var d = b;
  b += 12;
  0 == (c[zc] << 24) >> 24 && Hb(zc);
  Bc(d, a);
  Wb(Nc, d);
  b = d;
  return Nc;
}
yc.X = 1;
function Bc(a, d) {
  var e = b;
  b += 16;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 8,
    l = e + 9,
    m = e + 10,
    n = e + 11,
    p = e + 12,
    r = e + 13,
    s = e + 14,
    t = e + 15;
  k[f] = Oc(d, 1, 1, 2, 2);
  k[g] = Oc(d, 1, 2, 2, 0);
  k[h] = Oc(d, 1, 0, 2, 1);
  H(e, f, g, h);
  f = 1 / J(0 + d, e);
  k[i] = k[e] * f;
  k[j] = Oc(d, 0, 2, 2, 1) * f;
  k[l] = Oc(d, 0, 1, 1, 2) * f;
  k[m] = k[e + 1] * f;
  k[n] = Oc(d, 0, 0, 2, 2) * f;
  k[p] = Oc(d, 0, 2, 1, 0) * f;
  k[r] = k[e + 2] * f;
  k[s] = Oc(d, 0, 1, 2, 0) * f;
  k[t] = Oc(d, 0, 0, 1, 1) * f;
  Db(a, i, j, l, m, n, p, r, s, t);
  b = e;
}
Bc.X = 1;
function Eaa(a, d, e, f, g) {
  return Oc(a, d, e, f, g);
}
Eaa.X = 1;
function Oc(a, d, e, f, g) {
  return (
    k[(d << 2) + a + e] * k[(f << 2) + a + g] -
    k[(d << 2) + a + g] * k[(f << 2) + a + e]
  );
}
Oc.X = 1;
function Faa(a, d) {
  Pc(a, d);
}
Faa.X = 1;
function Pc(a, d) {
  var e;
  for (e = 0; ; ) {
    Tc((e << 2) + a, (e << 2) + d);
    var f = e + 1;
    e = f;
    if (3 <= (f | 0)) {
      break;
    }
  }
}
Pc.X = 1;
function Vc() {
  Wc();
  return Xc;
}
Vc.X = 1;
function Wc() {
  var a = b;
  b += 9;
  var d = a + 1,
    e = a + 2,
    f = a + 3,
    g = a + 4,
    h = a + 5,
    i = a + 6,
    j = a + 7,
    l = a + 8;
  0 == (c[cd] << 24) >> 24 &&
    0 != (Hb(cd) | 0) &&
    ((k[a] = 1),
    (k[d] = 0),
    (k[e] = 0),
    (k[f] = 0),
    (k[g] = 1),
    (k[h] = 0),
    (k[i] = 0),
    (k[j] = 0),
    (k[l] = 1),
    Db(Xc, a, d, e, f, g, h, i, j, l));
  b = a;
  return Xc;
}
Wc.X = 1;
function dd(a) {
  var d = b;
  b += 12;
  0 == (c[ed] << 24) >> 24 && Hb(ed);
  Gaa(d, a);
  Wb(gd, d);
  b = d;
  return gd;
}
dd.X = 1;
function Gaa(a, d) {
  var e = b;
  b += 9;
  var f = e + 1,
    g = e + 2,
    h = e + 3,
    i = e + 4,
    j = e + 5,
    l = e + 6,
    m = e + 7,
    n = e + 8;
  k[e] = Oc(d, 1, 1, 2, 2);
  k[f] = Oc(d, 0, 2, 2, 1);
  k[g] = Oc(d, 0, 1, 1, 2);
  k[h] = Oc(d, 1, 2, 2, 0);
  k[i] = Oc(d, 0, 0, 2, 2);
  k[j] = Oc(d, 0, 2, 1, 0);
  k[l] = Oc(d, 1, 0, 2, 1);
  k[m] = Oc(d, 0, 1, 2, 0);
  k[n] = Oc(d, 0, 0, 1, 1);
  Db(a, e, f, g, h, i, j, l, m, n);
  b = e;
}
Gaa.X = 1;
function Haa(a, d) {
  return (d << 2) + a;
}
Haa.X = 1;
function Iaa(a, d) {
  return kd(a, d);
}
Iaa.X = 1;
function kd(a, d) {
  var e = b;
  b += 9;
  var f = e + 1,
    g = e + 2,
    h = e + 3,
    i = e + 4,
    j = e + 5,
    l = e + 6,
    m = e + 7,
    n = e + 8;
  k[e] = k[a] + k[d];
  k[f] = k[a + 1] + k[d + 1];
  k[g] = k[a + 2] + k[d + 2];
  k[h] = k[a + 4] + k[d + 4];
  k[i] = k[a + 4 + 1] + k[d + 4 + 1];
  k[j] = k[a + 4 + 2] + k[d + 4 + 2];
  k[l] = k[a + 8] + k[d + 8];
  k[m] = k[a + 8 + 1] + k[d + 8 + 1];
  k[n] = k[a + 8 + 2] + k[d + 8 + 2];
  Db(a, e, f, g, h, i, j, l, m, n);
  b = e;
  return a;
}
kd.X = 1;
function Jaa(a, d) {
  return ld(a, d);
}
Jaa.X = 1;
function ld(a, d) {
  var e = b;
  b += 9;
  var f = e + 1,
    g = e + 2,
    h = e + 3,
    i = e + 4,
    j = e + 5,
    l = e + 6,
    m = e + 7,
    n = e + 8;
  k[e] = nc(d, a);
  k[f] = xc(d, a);
  k[g] = kc(d, a);
  k[h] = nc(d, a + 4);
  k[i] = xc(d, a + 4);
  k[j] = kc(d, a + 4);
  k[l] = nc(d, a + 8);
  k[m] = xc(d, a + 8);
  k[n] = kc(d, a + 8);
  Db(a, e, f, g, h, i, j, l, m, n);
  b = e;
  return a;
}
ld.X = 1;
function Kaa(a, d, e, f) {
  md(a, d, e, f);
}
Kaa.X = 1;
function md(a, d, e, f) {
  var g, h, i, j, l, m, n, p;
  qd(d);
  g = f;
  for (var r = a + 4, s = a + 4, t = a + 8; 0 < (f | 0); ) {
    f = 0;
    h = 1;
    i = 2;
    j = sc(k[a + 1]);
    l = sc(k[a + 2]);
    l > j && ((h = 2), (i = 1), (j = l));
    l = sc(k[r + 2]);
    l > j && ((f = 1), (h = 2), (i = 0), (j = l));
    l = sc(k[a]) + sc(k[s + 1]);
    m = e * (l + sc(k[t + 2]));
    if (j <= m) {
      if (j <= 1.1920928955078125e-7 * m) {
        break;
      }
      g = 1;
    }
    n = k[(f << 2) + a + h];
    m = (k[(h << 2) + a + h] - k[(f << 2) + a + f]) / (2 * n);
    l = m * m;
    j = m;
    83886080 > l * l
      ? ((l = ec(l + 1)),
        (m = 0 <= j ? 1 / (m + l) : 1 / (m - l)),
        (j = 1 / ec(m * m + 1)))
      : ((m = 1 / (j * (0.5 / l + 2))), (j = 1 - 0.5 * m * m));
    l = j * m;
    k[(h << 2) + a + f] = 0;
    k[(f << 2) + a + h] = 0;
    p = (f << 2) + a + f;
    k[p] -= m * n;
    p = (h << 2) + a + h;
    k[p] += m * n;
    n = k[(i << 2) + a + f];
    m = k[(i << 2) + a + h];
    p = j * n - l * m;
    k[(f << 2) + a + i] = p;
    k[(i << 2) + a + f] = p;
    n = j * m + l * n;
    k[(h << 2) + a + i] = n;
    k[(i << 2) + a + h] = n;
    for (
      i = 0;
      !((p = (i << 2) + d),
      (n = k[p + f]),
      (m = k[p + h]),
      (k[p + f] = j * n - l * m),
      (k[p + h] = j * m + l * n),
      (i = n = i + 1),
      3 <= (n | 0));

    ) {}
    g = f = g - 1;
  }
}
md.X = 1;
function Laa(a, d) {
  zb(a, d);
}
Laa.X = 1;
function zb(a, d) {
  var e = b;
  b += 9;
  var f,
    g,
    h,
    i,
    j,
    l,
    m,
    n,
    p,
    r = e + 1,
    s = e + 2,
    t = e + 3,
    w = e + 4,
    x = e + 5,
    y = e + 6,
    z = e + 7,
    A = e + 8;
  f = 2 / rd(d);
  g = k[d] * f;
  h = k[d + 1] * f;
  i = k[d + 2] * f;
  f = k[d + 3] * g;
  j = k[d + 3] * h;
  l = k[d + 3] * i;
  g *= k[d];
  m = k[d] * h;
  n = k[d] * i;
  h *= k[d + 1];
  p = k[d + 1] * i;
  i *= k[d + 2];
  k[e] = 1 - (h + i);
  k[r] = m - l;
  k[s] = n + j;
  k[t] = m + l;
  k[w] = 1 - (g + i);
  k[x] = p - f;
  k[y] = n - j;
  k[z] = p + f;
  k[A] = 1 - (g + h);
  Db(a, e, r, s, t, w, x, y, z, A);
  b = e;
}
zb.X = 1;
function Maa(a, d, e, f) {
  sd(a, d, e, f);
}
Maa.X = 1;
function sd(a, d, e, f) {
  var g = b;
  b += 9;
  var h,
    i,
    j,
    l,
    m,
    n,
    p,
    r = g + 1,
    s = g + 2,
    t = g + 3,
    w = g + 4,
    x = g + 5,
    y = g + 6,
    z = g + 7,
    A = g + 8;
  h = td(d);
  i = td(e);
  j = td(f);
  d = ud(d);
  e = ud(e);
  f = ud(f);
  l = h * j;
  m = h * f;
  n = d * j;
  p = d * f;
  k[g] = i * j;
  k[r] = e * n - m;
  k[s] = e * l + p;
  k[t] = i * f;
  k[w] = e * p + l;
  k[x] = e * m - n;
  k[y] = -e;
  k[z] = i * d;
  k[A] = i * h;
  Db(a, g, r, s, t, w, x, y, z, A);
  b = g;
}
sd.X = 1;
function Naa(a) {
  qd(a);
}
Naa.X = 1;
function qd(a) {
  var d = b;
  b += 9;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5,
    j = d + 6,
    l = d + 7,
    m = d + 8;
  k[d] = 1;
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  k[h] = 1;
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  k[m] = 1;
  Db(a, d, e, f, g, h, i, j, l, m);
  b = d;
}
qd.X = 1;
function Oaa(a, d) {
  return Wb(a, d);
}
Oaa.X = 1;
function vd(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  yd(a, g, h, i, 1);
  b = g;
}
vd.X = 1;
function zd(a, d) {
  c[a + 6] = d & 1;
}
zd.X = 1;
function Ad(a, d) {
  c[a + 1] = d;
}
Ad.X = 1;
function Bd(a) {
  return k[a + 3];
}
Bd.X = 1;
function Ed(a) {
  return c[a + 1];
}
Ed.X = 1;
function Fd(a) {
  return c[a + 8] & 1;
}
Fd.X = 1;
function Id(a) {
  return c[a + 4] & 1;
}
Id.X = 1;
function Jd(a, d) {
  c[a + 4] = d & 1;
}
Jd.X = 1;
function Md(a) {
  return c[a + 2];
}
Md.X = 1;
function Nd(a, d) {
  c[a + 12] = d;
}
Nd.X = 1;
function Od(a) {
  return c[a + 12];
}
Od.X = 1;
function Paa(a) {
  return k[a];
}
Paa.X = 1;
function Pd(a) {
  return k[a + 11];
}
Pd.X = 1;
function Qd(a) {
  return c[a + 6] & 1;
}
Qd.X = 1;
function Sd(a, d) {
  k[a + 9] = d;
}
Sd.X = 1;
function Qaa(a, d) {
  k[a] = d;
}
Qaa.X = 1;
function Td(a, d) {
  k[a + 3] = d;
}
Td.X = 1;
function Ud(a, d) {
  c[a + 10] = d & 1;
}
Ud.X = 1;
function Vd(a) {
  return c[a + 10] & 1;
}
Vd.X = 1;
function Wd(a) {
  return k[a + 9];
}
Wd.X = 1;
function Yd(a, d) {
  k[a + 11] = d;
}
Yd.X = 1;
function ae(a, d) {
  c[a + 2] = d;
}
ae.X = 1;
function be(a) {
  return c[a + 7] & 1;
}
be.X = 1;
function ce(a, d) {
  c[a + 7] = d & 1;
}
ce.X = 1;
function de(a, d) {
  c[a + 8] = d & 1;
}
de.X = 1;
function yd(a, d, e, f, g) {
  var h = b;
  b += 6;
  var i = h + 3,
    j;
  if (1 <= sc(k[a + 8])) {
    k[h] = 0;
    k[i] = 0;
    j = ee(k[a], k[a + 2]);
    var l = h + 1;
    0 < k[a + 8]
      ? ((k[l] = 1.5707963705062866),
        (k[i + 1] = 1.5707963705062866),
        (k[h + 2] = k[h + 1] + j),
        (k[i + 2] = k[h + 1] + j))
      : ((k[l] = -1.5707963705062866),
        (k[i + 1] = -1.5707963705062866),
        (k[h + 2] = -k[h + 1] + j),
        (k[i + 2] = -k[h + 1] + j));
  } else {
    (k[h + 1] = -ie(k[a + 8])),
      (k[i + 1] = 3.1415927410125732 - k[h + 1]),
      (j = k[a + 8 + 1] / td(k[h + 1])),
      (k[h + 2] = je(j, k[a + 8 + 2] / td(k[h + 1]))),
      (j = k[a + 8 + 1] / td(k[i + 1])),
      (k[i + 2] = je(j, k[a + 8 + 2] / td(k[i + 1]))),
      (j = k[a + 4] / td(k[h + 1])),
      (k[h] = je(j, k[a] / td(k[h + 1]))),
      (j = k[a + 4] / td(k[i + 1])),
      (k[i] = je(j, k[a] / td(k[i + 1])));
  }
  1 == (g | 0)
    ? ((k[d] = k[h]), (k[e] = k[h + 1]), (k[f] = k[h + 2]))
    : ((k[d] = k[i]), (k[e] = k[i + 1]), (k[f] = k[i + 2]));
  b = h;
}
yd.X = 1;
function ke(a, d, e, f, g) {
  var h = b;
  b += 3;
  var i = h + 1,
    j = h + 2;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  yd(a, h, i, j, g);
  b = h;
}
ke.X = 1;
function le(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  Raa(a, g, h, i);
  b = g;
}
le.X = 1;
function Raa(a, d, e, f) {
  sd(a, k[f], k[e], k[d]);
}
Raa.X = 1;
function Saa(a) {
  return me(a);
}
Saa.X = 1;
function me(a) {
  return ne(0 + a, 4 + a, 8 + a);
}
me.X = 1;
function oe(a, d, e, f, g, h, i, j, l, m) {
  var n = b;
  b += 9;
  var p = n + 1,
    r = n + 2,
    s = n + 3,
    t = n + 4,
    w = n + 5,
    x = n + 6,
    y = n + 7,
    z = n + 8;
  k[n] = d;
  k[p] = e;
  k[r] = f;
  k[s] = g;
  k[t] = h;
  k[w] = i;
  k[x] = j;
  k[y] = l;
  k[z] = m;
  Db(a, n, p, r, s, t, w, x, y, z);
  b = n;
}
oe.X = 1;
function Db(a, d, e, f, g, h, i, j, l, m) {
  pe(a, d, e, f);
  pe(a + 4, g, h, i);
  pe(a + 8, j, l, m);
}
Db.X = 1;
function Taa(a, d) {
  qe(a, d);
}
Taa.X = 1;
function qe(a, d) {
  var e;
  for (e = 0; ; ) {
    re((e << 2) + a, (e << 2) + d);
    var f = e + 1;
    e = f;
    if (3 <= (f | 0)) {
      break;
    }
  }
}
qe.X = 1;
function se(a) {
  var d = b;
  b += 12;
  0 == (c[te] << 24) >> 24 && Hb(te);
  ue(d, a);
  Wb(ve, d);
  b = d;
  return ve;
}
se.X = 1;
function ue(a, d) {
  Db(
    a,
    d,
    d + 4,
    d + 8,
    d + 1,
    d + 4 + 1,
    d + 8 + 1,
    d + 2,
    d + 4 + 2,
    d + 8 + 2
  );
}
ue.X = 1;
function Uaa(a, d) {
  return (d << 2) + a;
}
Uaa.X = 1;
function we(a) {
  0 != (a | 0) && xe(a);
}
we.X = 1;
function ye(a, d) {
  var e = b;
  b += 12;
  0 == (c[ze] << 24) >> 24 && Hb(ze);
  Vaa(e, a, d);
  Wb(Ae, e);
  b = e;
  return Ae;
}
ye.X = 1;
function Vaa(a, d, e) {
  var f = b;
  b += 9;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8;
  k[f] = J(d, 0 + e);
  k[g] = J(d, 4 + e);
  k[h] = J(d, 8 + e);
  k[i] = J(d + 4, 0 + e);
  k[j] = J(d + 4, 4 + e);
  k[l] = J(d + 4, 8 + e);
  k[m] = J(d + 8, 0 + e);
  k[n] = J(d + 8, 4 + e);
  k[p] = J(d + 8, 8 + e);
  Db(a, f, g, h, i, j, l, m, n, p);
  b = f;
}
Vaa.X = 1;
function Be(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  Waa(a, g, h, i);
  b = g;
}
Be.X = 1;
function Waa(a, d, e, f) {
  k[d] = ee(k[a + 4], k[a]);
  k[e] = ie(-k[a + 8]);
  k[f] = ee(k[a + 8 + 1], k[a + 8 + 2]);
  1.5707963705062866 == sc(k[e]) &&
    ((a = k[d]),
    (k[d] = 0 < k[d] ? a - 3.1415927410125732 : a + 3.1415927410125732),
    (d = k[f]),
    (k[f] = 0 < k[f] ? d - 3.1415927410125732 : d + 3.1415927410125732));
}
Waa.X = 1;
function Ce() {
  var a = xb(44);
  De(a);
  return a;
}
Ce.X = 1;
function Ee(a) {
  0 != (a | 0) && xe(a);
}
Ee.X = 1;
function Fe(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Fe.X = 1;
function Xaa(a) {
  return Ge(a);
}
Xaa.X = 1;
function Ge(a) {
  return He(Ie(a));
}
Ge.X = 1;
function Je(a, d) {
  c[a + 2] = d;
}
Je.X = 1;
function Ke(a) {
  return c[a + 13];
}
Ke.X = 1;
function Le(a) {
  return k[a + 11];
}
Le.X = 1;
function Me(a) {
  return c[a + 2];
}
Me.X = 1;
function Ie(a) {
  return c[a + 1];
}
Ie.X = 1;
function Ne(a, d) {
  var e = b;
  b += 4;
  0 == (c[Pe] << 24) >> 24 && Hb(Pe);
  v[c[c[a] + 15]](e, a, d);
  c[Qe] = c[e];
  k[Qe] = k[e];
  c[Qe + 1] = c[e + 1];
  k[Qe + 1] = k[e + 1];
  c[Qe + 2] = c[e + 2];
  k[Qe + 2] = k[e + 2];
  c[Qe + 3] = c[e + 3];
  k[Qe + 3] = k[e + 3];
  b = e;
  return Qe;
}
Ne.X = 1;
function Yaa(a, d) {
  Je(a, d);
}
Yaa.X = 1;
function Re(a, d) {
  var e = Se(56);
  Te(e, a, d);
  return e;
}
Re.X = 1;
function Se(a) {
  return Ue(a, 16);
}
Se.X = 1;
function Zaa(a) {
  return Ke(a);
}
Zaa.X = 1;
function Ve(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
Ve.X = 1;
function We(a) {
  return v[c[c[a] + 7]](a);
}
We.X = 1;
function Xe(a) {
  return v[c[c[a] + 19]](a);
}
Xe.X = 1;
function $aa(a) {
  return Ye(a);
}
$aa.X = 1;
function Ye(a) {
  return bf(Ie(a));
}
Ye.X = 1;
function aba(a) {
  return cf(a);
}
aba.X = 1;
function cf(a) {
  return k[a + 7 + ((c[a + 13] + 2) | 0) % 3];
}
cf.X = 1;
function bba(a, d, e, f) {
  df(a, d, e, f);
}
bba.X = 1;
function ef(a) {
  return v[c[c[a] + 12]](a);
}
ef.X = 1;
function ff(a) {
  return v[c[c[a] + 9]](a);
}
ff.X = 1;
function cba(a) {
  return gf(a);
}
cba.X = 1;
function gf(a) {
  return k[a + 7 + c[a + 13]];
}
gf.X = 1;
function dba(a) {
  return a + 3;
}
dba.X = 1;
function hf(a, d) {
  var e = b;
  b += 4;
  0 == (c[jf] << 24) >> 24 && Hb(jf);
  kf(e, a, d);
  c[lf] = c[e];
  k[lf] = k[e];
  c[lf + 1] = c[e + 1];
  k[lf + 1] = k[e + 1];
  c[lf + 2] = c[e + 2];
  k[lf + 2] = k[e + 2];
  c[lf + 3] = c[e + 3];
  k[lf + 3] = k[e + 3];
  b = e;
  return lf;
}
hf.X = 1;
function mf(a, d) {
  var e = b;
  b += 4;
  0 == (c[nf] << 24) >> 24 && Hb(nf);
  v[c[c[a] + 16]](e, a, d);
  c[of] = c[e];
  k[of] = k[e];
  c[of + 1] = c[e + 1];
  k[of + 1] = k[e + 1];
  c[of + 2] = c[e + 2];
  k[of + 2] = k[e + 2];
  c[of + 3] = c[e + 3];
  k[of + 3] = k[e + 3];
  b = e;
  return of;
}
mf.X = 1;
function pf(a, d) {
  v[c[c[a] + 6]](a, d);
}
pf.X = 1;
function qf(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
qf.X = 1;
function eba(a) {
  return Le(a);
}
eba.X = 1;
function rf(a, d) {
  var e = b;
  b += 4;
  0 == (c[sf] << 24) >> 24 && Hb(sf);
  tf(e, a, d);
  c[uf] = c[e];
  k[uf] = k[e];
  c[uf + 1] = c[e + 1];
  k[uf + 1] = k[e + 1];
  c[uf + 2] = c[e + 2];
  k[uf + 2] = k[e + 2];
  c[uf + 3] = c[e + 3];
  k[uf + 3] = k[e + 3];
  b = e;
  return uf;
}
rf.X = 1;
function vf(a, d) {
  return v[c[c[a] + 5]](a, d);
}
vf.X = 1;
function fba(a) {
  return xf(a);
}
fba.X = 1;
function xf(a) {
  return yf(Ie(a));
}
xf.X = 1;
function gba(a) {
  return zf(a);
}
gba.X = 1;
function zf(a) {
  return Af(Ie(a));
}
zf.X = 1;
function hba(a) {
  return Me(a);
}
hba.X = 1;
function iba(a) {
  return Bf(a);
}
iba.X = 1;
function Bf(a) {
  return Cf(Ie(a));
}
Bf.X = 1;
function Df(a) {
  return v[c[c[a] + 11]](a);
}
Df.X = 1;
function Ef(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
Ef.X = 1;
function Ff(a, d) {
  v[c[c[a] + 10]](a, d);
}
Ff.X = 1;
function jba(a) {
  return Gf(a);
}
jba.X = 1;
function Gf(a) {
  return Hf(Ie(a));
}
Gf.X = 1;
function kba(a, d) {
  Jf(a, d);
}
kba.X = 1;
function Jf(a, d) {
  var e = a + 7;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Jf.X = 1;
function lba(a) {
  return Kf(a);
}
lba.X = 1;
function Kf(a) {
  return Lf(Ie(a));
}
Kf.X = 1;
function mba(a) {
  return Mf(a);
}
mba.X = 1;
function Nf(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Nf.X = 1;
function Of(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
Of.X = 1;
function nba(a) {
  return a + 7;
}
nba.X = 1;
function Pf(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
Pf.X = 1;
function Qf(a) {
  return v[c[c[a] + 4]](a);
}
Qf.X = 1;
function Rf(a, d) {
  v[c[c[a] + 14]](a, d);
}
Rf.X = 1;
function Sf(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
Sf.X = 1;
function oba(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
oba.X = 1;
function pba(a) {
  return Uf(a);
}
pba.X = 1;
function Uf(a) {
  return Yf(Ie(a));
}
Uf.X = 1;
function qba(a) {
  return Ie(a);
}
qba.X = 1;
function Zf(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Zf.X = 1;
function $f(a) {
  return v[c[c[a] + 26]](a);
}
$f.X = 1;
function ag(a, d) {
  var e = b;
  b += 4;
  0 == (c[bg] << 24) >> 24 && Hb(bg);
  v[c[c[a] + 15]](e, a, d);
  c[cg] = c[e];
  k[cg] = k[e];
  c[cg + 1] = c[e + 1];
  k[cg + 1] = k[e + 1];
  c[cg + 2] = c[e + 2];
  k[cg + 2] = k[e + 2];
  c[cg + 3] = c[e + 3];
  k[cg + 3] = k[e + 3];
  b = e;
  return cg;
}
ag.X = 1;
function dg(a) {
  return v[c[c[a] + 4]](a);
}
dg.X = 1;
function eg(a, d) {
  var e = b;
  b += 4;
  0 == (c[fg] << 24) >> 24 && Hb(fg);
  gg(e, a, d);
  c[hg] = c[e];
  k[hg] = k[e];
  c[hg + 1] = c[e + 1];
  k[hg + 1] = k[e + 1];
  c[hg + 2] = c[e + 2];
  k[hg + 2] = k[e + 2];
  c[hg + 3] = c[e + 3];
  k[hg + 3] = k[e + 3];
  b = e;
  return hg;
}
eg.X = 1;
function gg(a, d, e) {
  ig(a, jg(d + 23, e), d + 3);
}
gg.X = 1;
function rba(a) {
  return xf(a);
}
rba.X = 1;
function kg(a, d, e, f) {
  v[c[c[a] + 24]](a, d, e, f);
}
kg.X = 1;
function lg(a) {
  return v[c[c[a] + 22]](a);
}
lg.X = 1;
function mg(a) {
  return v[c[c[a] + 7]](a);
}
mg.X = 1;
function ng(a) {
  return v[c[c[a] + 19]](a);
}
ng.X = 1;
function sba(a) {
  return Ye(a);
}
sba.X = 1;
function og(a, d, e) {
  v[c[c[a] + 25]](a, d, e);
}
og.X = 1;
function tba(a) {
  return wg(a);
}
tba.X = 1;
function wg(a) {
  return xg(a + 23, 0);
}
wg.X = 1;
function uba(a, d, e, f) {
  df(a, d, e, f);
}
uba.X = 1;
function yg(a) {
  return c[a + 13];
}
yg.X = 1;
function vba(a) {
  return c[a];
}
vba.X = 1;
function wba(a, d) {
  c[a] = d;
}
wba.X = 1;
function zg(a) {
  return c[a + 3];
}
zg.X = 1;
function Ag(a) {
  return c[a + 4];
}
Ag.X = 1;
function Bg(a, d) {
  c[a + 6] = d;
}
Bg.X = 1;
function xba(a, d) {
  c[a] = d;
}
xba.X = 1;
function Cg(a) {
  return c[a + 7];
}
Cg.X = 1;
function Dg(a) {
  return c[a + 5];
}
Dg.X = 1;
function yba(a) {
  return c[a];
}
yba.X = 1;
function Eg(a, d) {
  c[a + 3] = d;
}
Eg.X = 1;
function Fg(a, d) {
  c[a + 7] = d;
}
Fg.X = 1;
function Gg(a) {
  return c[a + 6];
}
Gg.X = 1;
function Hg(a, d) {
  c[a + 4] = d;
}
Hg.X = 1;
function Ig(a) {
  return v[c[c[a] + 12]](a);
}
Ig.X = 1;
function zba(a, d) {
  Je(a, d);
}
zba.X = 1;
function Jg(a) {
  return v[c[c[a] + 23]](a);
}
Jg.X = 1;
function Kg(a) {
  return v[c[c[a] + 9]](a);
}
Kg.X = 1;
function Lg(a) {
  return Ue(a, 16);
}
Lg.X = 1;
function Aba(a) {
  return a + 3;
}
Aba.X = 1;
function Mg(a, d) {
  var e = b;
  b += 4;
  0 == (c[Ng] << 24) >> 24 && Hb(Ng);
  kf(e, a, d);
  c[Og] = c[e];
  k[Og] = k[e];
  c[Og + 1] = c[e + 1];
  k[Og + 1] = k[e + 1];
  c[Og + 2] = c[e + 2];
  k[Og + 2] = k[e + 2];
  c[Og + 3] = c[e + 3];
  k[Og + 3] = k[e + 3];
  b = e;
  return Og;
}
Mg.X = 1;
function Bba(a, d) {
  Jf(a, d);
}
Bba.X = 1;
function Pg(a, d) {
  v[c[c[a] + 6]](a, d);
}
Pg.X = 1;
function Qg(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
Qg.X = 1;
function Cba(a) {
  return Le(a);
}
Cba.X = 1;
function Dba(a) {
  return Gf(a);
}
Dba.X = 1;
function Rg(a, d) {
  var e = b;
  b += 4;
  0 == (c[Sg] << 24) >> 24 && Hb(Sg);
  tf(e, a, d);
  c[Tg] = c[e];
  k[Tg] = k[e];
  c[Tg + 1] = c[e + 1];
  k[Tg + 1] = k[e + 1];
  c[Tg + 2] = c[e + 2];
  k[Tg + 2] = k[e + 2];
  c[Tg + 3] = c[e + 3];
  k[Tg + 3] = k[e + 3];
  b = e;
  return Tg;
}
Rg.X = 1;
function Ug(a, d) {
  return v[c[c[a] + 5]](a, d);
}
Ug.X = 1;
function Eba(a, d) {
  Vg(a, d);
}
Eba.X = 1;
function Fba(a) {
  return zf(a);
}
Fba.X = 1;
function Wg(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
Wg.X = 1;
function Gba(a) {
  return Uf(a);
}
Gba.X = 1;
function Hba(a) {
  return Me(a);
}
Hba.X = 1;
function Iba(a) {
  return Bf(a);
}
Iba.X = 1;
function ah(a) {
  return v[c[c[a] + 11]](a);
}
ah.X = 1;
function Jba(a) {
  bh(a);
}
Jba.X = 1;
function ch(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
ch.X = 1;
function dh(a, d) {
  v[c[c[a] + 10]](a, d);
}
dh.X = 1;
function Kba(a, d, e, f, g) {
  eh(a, d, e, f, g);
}
Kba.X = 1;
function eh(a, d, e, f, g) {
  fh(a + 14, a + 18, g, d, e, f);
}
eh.X = 1;
function gh(a, d) {
  var e = b;
  b += 4;
  0 == (c[hh] << 24) >> 24 && Hb(hh);
  v[c[c[a] + 16]](e, a, d);
  c[ih] = c[e];
  k[ih] = k[e];
  c[ih + 1] = c[e + 1];
  k[ih + 1] = k[e + 1];
  c[ih + 2] = c[e + 2];
  k[ih + 2] = k[e + 2];
  c[ih + 3] = c[e + 3];
  k[ih + 3] = k[e + 3];
  b = e;
  return ih;
}
gh.X = 1;
function Lba(a) {
  return Kf(a);
}
Lba.X = 1;
function Mba(a) {
  return Mf(a);
}
Mba.X = 1;
function jh(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
jh.X = 1;
function kh(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
kh.X = 1;
function Nba(a) {
  return lh(a);
}
Nba.X = 1;
function Oba(a) {
  return a + 7;
}
Oba.X = 1;
function mh(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
mh.X = 1;
function nh(a, d, e) {
  return v[c[c[a] + 28]](a, d, e);
}
nh.X = 1;
function oh(a, d) {
  v[c[c[a] + 14]](a, d);
}
oh.X = 1;
function ph(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
ph.X = 1;
function qh(a, d, e, f) {
  v[c[c[a] + 27]](a, d, e, f);
}
qh.X = 1;
function Pba(a) {
  return Ge(a);
}
Pba.X = 1;
function Qba(a) {
  return yg(a);
}
Qba.X = 1;
function Rba(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Rba.X = 1;
function Sba(a) {
  return Ie(a);
}
Sba.X = 1;
function Tba(a) {
  return sh(a);
}
Tba.X = 1;
function sh(a) {
  return th(a + 23);
}
sh.X = 1;
function uh(a) {
  return v[c[c[a] + 21]](a);
}
uh.X = 1;
function vh(a) {
  0 != (a | 0) && xe(a);
}
vh.X = 1;
function wh(a) {
  var d = xb(4);
  c[d] = a;
  return d;
}
wh.X = 1;
function Uba(a) {
  return c[a];
}
Uba.X = 1;
function xh(a) {
  0 != (a | 0) && yh(a);
}
xh.X = 1;
function zh() {
  var a = Vba(32);
  Ah(a);
  return a;
}
zh.X = 1;
function Vba(a) {
  return Ue(a, 16);
}
Vba.X = 1;
function Bh() {
  var a = Lg(112);
  Ch(a, 0, 0, 16);
  return a;
}
Bh.X = 1;
function Fh(a) {
  var d = Lg(112);
  Ch(d, a, 0, 16);
  return d;
}
Fh.X = 1;
function Gh(a, d) {
  var e = Lg(112);
  Ch(e, a, d, 16);
  return e;
}
Gh.X = 1;
function Hh(a, d, e) {
  var f = Lg(112);
  Ch(f, a, d, e);
  return f;
}
Hh.X = 1;
function Ih(a) {
  return c[a + 1];
}
Ih.X = 1;
function Jh(a, d) {
  c[a + 2] = d;
}
Jh.X = 1;
function Kh(a, d) {
  c[a + 5] = d;
}
Kh.X = 1;
function Lh(a, d) {
  c[a + 1] = d;
}
Lh.X = 1;
function Mh(a) {
  return c[a + 2];
}
Mh.X = 1;
function Nh(a) {
  return k[a + 56];
}
Nh.X = 1;
function Oh(a, d) {
  k[a + 46] = d;
}
Oh.X = 1;
function Ph(a) {
  return k[a + 55];
}
Ph.X = 1;
function Qh(a, d) {
  k[a + 56] = d;
}
Qh.X = 1;
function Rh(a, d) {
  c[a + 49] = d;
}
Rh.X = 1;
function Sh(a) {
  return 0 == ((c[a + 51] & 7) | 0);
}
Sh.X = 1;
function Th(a, d) {
  k[a + 62] = d;
}
Th.X = 1;
function Uh(a) {
  return c[a + 52];
}
Uh.X = 1;
function Vh(a, d) {
  c[a + 53] = d;
}
Vh.X = 1;
function Wh(a) {
  return k[a + 62];
}
Wh.X = 1;
function Xh(a, d) {
  c[a + 59] = d;
}
Xh.X = 1;
function Yh(a, d) {
  c[a + 52] = d;
}
Yh.X = 1;
function Zh(a, d) {
  k[a + 60] = d;
}
Zh.X = 1;
function $h(a) {
  return c[a + 51];
}
$h.X = 1;
function ai(a) {
  return 0 != ((c[a + 51] & 1) | 0);
}
ai.X = 1;
function bi(a) {
  return c[a + 48];
}
bi.X = 1;
function ci(a) {
  return c[a + 47];
}
ci.X = 1;
function di(a) {
  return k[a + 57];
}
di.X = 1;
function ei(a) {
  return c[a + 59];
}
ei.X = 1;
function fi(a, d) {
  k[a + 61] = d;
}
fi.X = 1;
function gi(a) {
  return k[a + 62] * k[a + 62];
}
gi.X = 1;
function hi(a, d) {
  c[a + 48] = d;
}
hi.X = 1;
function ii(a) {
  return c[a + 53];
}
ii.X = 1;
function ji(a) {
  return c[a + 58];
}
ji.X = 1;
function ki(a) {
  return c[a + 54];
}
ki.X = 1;
function li(a) {
  return 0 == ((c[a + 51] & 4) | 0);
}
li.X = 1;
function mi(a) {
  return c[a + 50];
}
mi.X = 1;
function ni(a) {
  return k[a + 46];
}
ni.X = 1;
function oi(a) {
  return k[a + 60];
}
oi.X = 1;
function pi(a) {
  return k[a + 61];
}
pi.X = 1;
function Wba(a) {
  return Nh(a);
}
Wba.X = 1;
function Xba(a, d) {
  Oh(a, d);
}
Xba.X = 1;
function Yba(a, d) {
  qi(a, d);
}
Yba.X = 1;
function qi(a, d) {
  var e = a + 33;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
qi.X = 1;
function Zba(a) {
  return Ph(a);
}
Zba.X = 1;
function $ba(a, d) {
  ri(a, d);
}
$ba.X = 1;
function ri(a, d) {
  var e = a + 37;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
ri.X = 1;
function si(a, d, e) {
  return v[c[c[a] + 5]](a, d, e);
}
si.X = 1;
function aca(a, d) {
  Qh(a, d);
}
aca.X = 1;
function bca(a, d) {
  Rh(a, d);
}
bca.X = 1;
function ti(a) {
  ui(a, 0);
}
ti.X = 1;
function vi(a, d) {
  ui(a, d & 1);
}
vi.X = 1;
function cca(a, d) {
  wi(a, d);
}
cca.X = 1;
function wi(a, d) {
  xi(a + 17, d);
}
wi.X = 1;
function yi() {
  var a = zi(256);
  Bi(a);
  return a;
}
yi.X = 1;
function zi(a) {
  return Ue(a, 16);
}
zi.X = 1;
function dca(a) {
  return a + 33;
}
dca.X = 1;
function eca(a) {
  return Sh(a);
}
eca.X = 1;
function Ci(a, d) {
  v[c[c[a] + 3]](a, d);
}
Ci.X = 1;
function fca(a, d) {
  Th(a, d);
}
fca.X = 1;
function gca(a) {
  return Uh(a);
}
gca.X = 1;
function hca(a, d) {
  Vh(a, d);
}
hca.X = 1;
function ica(a) {
  return Wh(a);
}
ica.X = 1;
function jca(a, d) {
  Xh(a, d);
}
jca.X = 1;
function kca(a, d) {
  return Di(a, d);
}
kca.X = 1;
function Di(a, d) {
  return 0 != (c[a + 63] | 0) ? v[c[c[a]]](a, d) : 1;
}
Di.X = 1;
function lca(a) {
  return a + 41;
}
lca.X = 1;
function Ei(a) {
  return v[c[c[a] + 4]](a);
}
Ei.X = 1;
function mca(a) {
  return a + 37;
}
mca.X = 1;
function nca(a, d) {
  Fi(a, d);
}
nca.X = 1;
function oca(a) {
  return a + 17;
}
oca.X = 1;
function pca(a, d) {
  Yh(a, d);
}
pca.X = 1;
function qca(a, d) {
  Zh(a, d);
}
qca.X = 1;
function Gi(a, d) {
  v[c[c[a] + 6]](a, d);
}
Gi.X = 1;
function rca(a) {
  return $h(a);
}
rca.X = 1;
function sca(a) {
  return ai(a);
}
sca.X = 1;
function tca(a) {
  return bi(a);
}
tca.X = 1;
function uca(a, d) {
  Hi(a, d);
}
uca.X = 1;
function Hi(a, d) {
  var e = a + 41;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  c[a + 45] = (1 != k[d] ? 1 : 1 != k[d + 1] ? 1 : 1 != k[d + 2]) & 1;
}
Hi.X = 1;
function Ii(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 2]](a);
  }
}
Ii.X = 1;
function vca(a) {
  return ci(a);
}
vca.X = 1;
function wca(a) {
  return di(a);
}
wca.X = 1;
function xca(a) {
  return ei(a);
}
xca.X = 1;
function yca(a, d) {
  fi(a, d);
}
yca.X = 1;
function zca(a) {
  return a + 1;
}
zca.X = 1;
function Aca(a) {
  return gi(a);
}
Aca.X = 1;
function Bca(a, d) {
  Ji(a, d);
}
Bca.X = 1;
function Ji(a, d) {
  xi(a + 1, d);
}
Ji.X = 1;
function Cca(a, d) {
  hi(a, d);
}
Cca.X = 1;
function Dca(a) {
  return ii(a);
}
Dca.X = 1;
function Eca(a) {
  return Ki(a);
}
Eca.X = 1;
function Ki(a) {
  return 2 != (ki(a) | 0) ? 5 != (ki(a) | 0) : 0;
}
Ki.X = 1;
function Fca(a) {
  return ji(a);
}
Fca.X = 1;
function Gca(a) {
  return ki(a);
}
Gca.X = 1;
function Hca(a) {
  return li(a);
}
Hca.X = 1;
function Ica(a, d) {
  Li(a, d);
}
Ica.X = 1;
function Jca(a) {
  return mi(a);
}
Jca.X = 1;
function Kca(a) {
  return ni(a);
}
Kca.X = 1;
function Lca(a) {
  return oi(a);
}
Lca.X = 1;
function Mca(a) {
  return pi(a);
}
Mca.X = 1;
function Nca(a, d) {
  Mi(a, d);
}
Nca.X = 1;
function Mi(a, d) {
  k[a + 55] = d;
}
Mi.X = 1;
function Ni(a) {
  return c[a + 49];
}
Ni.X = 1;
function Oi(a, d) {
  c[a + 51] = d;
}
Oi.X = 1;
function Pi(a) {
  return 0 != ((c[a + 51] & 3) | 0);
}
Pi.X = 1;
function Qi(a, d) {
  k[a + 57] = d;
}
Qi.X = 1;
function Ri(a) {
  return 0 != (c[a + 45] | 0);
}
Ri.X = 1;
function Si(a, d) {
  c[a + 47] = d;
}
Si.X = 1;
function Ti(a) {
  return 0 != ((c[a + 51] & 2) | 0);
}
Ti.X = 1;
function Ui(a) {
  return k[a + 5];
}
Ui.X = 1;
function Vi(a) {
  return c[a + 7] & 1;
}
Vi.X = 1;
function Wi(a) {
  return k[a + 3];
}
Wi.X = 1;
function Xi(a) {
  return k[a + 6];
}
Xi.X = 1;
function Yi(a) {
  return k[a + 2];
}
Yi.X = 1;
function Zi(a) {
  return k[a + 1];
}
Zi.X = 1;
function $i(a) {
  return k[a + 4];
}
$i.X = 1;
function aj(a, d) {
  c[a + 1] = d;
}
aj.X = 1;
function bj(a, d) {
  c[a + 2] = d;
}
bj.X = 1;
function cj(a) {
  return c[a + 2];
}
cj.X = 1;
function dj(a) {
  return c[a + 1];
}
dj.X = 1;
function Oca(a) {
  return Ni(a);
}
Oca.X = 1;
function Pca(a, d) {
  Oi(a, d);
}
Pca.X = 1;
function Qca(a) {
  return Pi(a);
}
Qca.X = 1;
function Rca(a, d) {
  Qi(a, d);
}
Rca.X = 1;
function Sca(a) {
  return Ri(a);
}
Sca.X = 1;
function Tca(a, d) {
  Si(a, d);
}
Tca.X = 1;
function Uca(a) {
  return Ti(a);
}
Uca.X = 1;
function ej(a, d, e, f) {
  var g = b;
  b += 14;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = c[c[a] + 6];
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  v[r](a, d, e, f, g, l);
  b = g;
}
ej.X = 1;
function fj(a, d, e, f, g) {
  var h = b;
  b += 7;
  var i = h + 4,
    j = h + 5,
    l = h + 6,
    m = c[c[a] + 6];
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  v[m](a, d, e, f, g, h);
  b = h;
}
fj.X = 1;
function gj(a, d, e, f, g, h) {
  v[c[c[a] + 6]](a, d, e, f, g, h);
}
gj.X = 1;
function hj(a, d, e, f, g) {
  v[c[c[a] + 4]](a, d, e, f, g);
}
hj.X = 1;
function ij(a) {
  return v[c[c[a] + 9]](a);
}
ij.X = 1;
function jj(a, d) {
  v[c[c[a] + 12]](a, d);
}
jj.X = 1;
function kj(a, d) {
  v[c[c[a] + 8]](a, d);
}
kj.X = 1;
function lj(a) {
  v[c[c[a] + 13]](a);
}
lj.X = 1;
function mj(a, d, e, f) {
  v[c[c[a] + 5]](a, d, e, f);
}
mj.X = 1;
function nj(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
nj.X = 1;
function oj(a, d, e, f, g, h, i, j, l) {
  return v[c[c[a] + 2]](a, d, e, f, g, h, i, j, l);
}
oj.X = 1;
function pj(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
pj.X = 1;
function qj(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
qj.X = 1;
function Vca(a) {
  return Ui(a);
}
Vca.X = 1;
function rj() {
  var a = xb(32);
  sj(a);
  return a;
}
rj.X = 1;
function Wca(a) {
  return tj(a);
}
Wca.X = 1;
function uj(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  vj(a, e);
  b = e;
}
uj.X = 1;
function wj(a) {
  0 != (a | 0) && xe(a);
}
wj.X = 1;
function Xca(a) {
  return Vi(a);
}
Xca.X = 1;
function Yca(a) {
  return Wi(a);
}
Yca.X = 1;
function Zca(a) {
  return Xi(a);
}
Zca.X = 1;
function xj(a, d, e) {
  yj(a, d, e, 0.8999999761581421, 0.30000001192092896, 1);
}
xj.X = 1;
function zj(a, d, e, f) {
  yj(a, d, e, f, 0.30000001192092896, 1);
}
zj.X = 1;
function Aj(a, d, e, f, g) {
  yj(a, d, e, f, g, 1);
}
Aj.X = 1;
function $ca(a, d, e, f, g, h) {
  yj(a, d, e, f, g, h);
}
$ca.X = 1;
function ada(a) {
  return Yi(a);
}
ada.X = 1;
function bda(a) {
  return Bj(a);
}
bda.X = 1;
function cda(a, d) {
  Cj(a, d);
}
cda.X = 1;
function dda(a) {
  return Zi(a);
}
dda.X = 1;
function eda(a) {
  return Dj(a);
}
eda.X = 1;
function fda(a) {
  return $i(a);
}
fda.X = 1;
function Ej(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Ej.X = 1;
function Fj(a) {
  return v[c[c[a] + 4]](a);
}
Fj.X = 1;
function Gj() {
  var a = b;
  b += 8;
  var d = xb(88);
  Hj(a);
  Ij(d, a);
  b = a;
  return d;
}
Gj.X = 1;
function Jj(a) {
  var d = xb(88);
  Ij(d, a);
  return d;
}
Jj.X = 1;
function Kj(a) {
  return v[c[c[a] + 2]](a);
}
Kj.X = 1;
function Lj(a) {
  return v[c[c[a] + 6]](a);
}
Lj.X = 1;
function Mj(a) {
  Nj(a, 3, 3);
}
Mj.X = 1;
function Oj(a, d) {
  Nj(a, d, 3);
}
Oj.X = 1;
function gda(a, d, e) {
  Nj(a, d, e);
}
gda.X = 1;
function Pj(a) {
  return v[c[c[a] + 3]](a);
}
Pj.X = 1;
function Qj(a, d, e) {
  return v[c[c[a] + 5]](a, d, e);
}
Qj.X = 1;
function Rj(a, d, e, f, g, h, i, j) {
  return v[c[c[a] + 3]](a, d, e, f, g, h, i, j);
}
Rj.X = 1;
function Sj(a, d) {
  return v[c[c[a] + 2]](a, d);
}
Sj.X = 1;
function Tj(a, d) {
  v[c[c[a] + 4]](a, d);
}
Tj.X = 1;
function Uj(a) {
  var d = xb(16);
  hda(d, a);
  return d;
}
Uj.X = 1;
function Vj(a, d, e, f) {
  var g = xb(16);
  Wj(g, a, d, e, f);
  return g;
}
Vj.X = 1;
function Xj(a) {
  return c[a + 279];
}
Xj.X = 1;
function ida(a, d) {
  c[a] = d;
}
ida.X = 1;
function Yj(a) {
  return c[a + 278];
}
Yj.X = 1;
function jda(a) {
  return c[a];
}
jda.X = 1;
function Zj(a, d) {
  c[a + 284] = d;
}
Zj.X = 1;
function $j(a) {
  return c[a + 277];
}
$j.X = 1;
function ak(a, d, e) {
  c[a + 277] = d;
  c[a + 278] = e;
}
ak.X = 1;
function bk(a) {
  return c[a + 284];
}
bk.X = 1;
function ck(a) {
  return k[a + 281];
}
ck.X = 1;
function dk(a) {
  return c[a + 283];
}
dk.X = 1;
function ek(a) {
  return c[a + 282];
}
ek.X = 1;
function fk(a, d) {
  c[a + 283] = d;
}
fk.X = 1;
function gk(a, d) {
  c[a + 282] = d;
}
gk.X = 1;
function hk(a) {
  return c[a + 16];
}
hk.X = 1;
function ik(a) {
  return c[a + 17];
}
ik.X = 1;
function jk(a, d, e, f, g) {
  return v[c[c[a] + 3]](a, d, e, f, g);
}
jk.X = 1;
function kk(a, d, e, f, g) {
  v[c[c[a] + 2]](a, d, e, f, g);
}
kk.X = 1;
function lk(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
lk.X = 1;
function mk(a) {
  return v[c[c[a] + 2]](a);
}
mk.X = 1;
function nk(a) {
  return v[c[c[a] + 4]](a);
}
nk.X = 1;
function ok(a) {
  return v[c[c[a] + 3]](a);
}
ok.X = 1;
function pk(a, d, e) {
  return v[c[c[a] + 5]](a, d, e);
}
pk.X = 1;
function kda(a) {
  return Xj(a);
}
kda.X = 1;
function lda(a) {
  return Yj(a);
}
lda.X = 1;
function mda(a, d) {
  return qk(a, d);
}
mda.X = 1;
function qk(a, d) {
  var e = k[d + 20];
  return 1 < (c[d + 36] | 0) ? e <= rk(a) : e <= ck(a);
}
qk.X = 1;
function nda(a, d, e) {
  sk(a, d, e);
}
nda.X = 1;
function oda(a, d) {
  tk(a, d);
}
oda.X = 1;
function uk() {
  var a = vk(1140);
  wk(a);
  return a;
}
uk.X = 1;
function vk(a) {
  return Ue(a, 16);
}
vk.X = 1;
function xk(a, d, e, f, g) {
  var h = vk(1140);
  yk(h, a, d, e, f, g);
  return h;
}
xk.X = 1;
function pda(a, d) {
  return zk(a, d);
}
pda.X = 1;
function qda(a, d) {
  return Ak(a, d);
}
qda.X = 1;
function rda(a) {
  return c[a];
}
rda.X = 1;
function sda(a, d) {
  return a + 69 * d + 1;
}
sda.X = 1;
function tda(a) {
  return rk(a);
}
tda.X = 1;
function uda(a) {
  Bk(a);
}
uda.X = 1;
function Bk(a) {
  var d;
  d = 0;
  var e = a + 279,
    f = (d | 0) < (c[e] | 0);
  a: do {
    if (f) {
      for (var g = a + 1; ; ) {
        if ((tk(a, g + 69 * d), (d += 1), (d | 0) >= (c[e] | 0))) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 279] = 0;
}
Bk.X = 1;
function vda(a) {
  return $j(a);
}
vda.X = 1;
function wda(a, d, e) {
  ak(a, d, e);
}
wda.X = 1;
function xda(a, d) {
  Ck(a, d);
}
xda.X = 1;
function Ck(a, d) {
  var e;
  tk(a, a + 69 * d + 1);
  e = Xj(a) - 1;
  if ((d | 0) != (e | 0)) {
    for (
      var f = a + 69 * e + 1, g = a + 69 * d + 1, h = f + 69;
      f < h;
      f++, g++
    ) {
      (c[g] = c[f]), (k[g] = k[f]);
    }
    c[a + 69 * e + 28] = 0;
    k[a + 69 * e + 53] = 0;
    k[a + 69 * e + 61] = 0;
    k[a + 69 * e + 69] = 0;
    k[a + 69 * e + 29] = 0;
    c[a + 69 * e + 30] = 0;
    k[a + 69 * e + 31] = 0;
    k[a + 69 * e + 32] = 0;
    c[a + 69 * e + 37] = 0;
  }
  e = a + 279;
  c[e] -= 1;
}
Ck.X = 1;
function Dk(a) {
  0 != (a | 0) && yh(a);
}
Dk.X = 1;
function yda(a) {
  return ck(a);
}
yda.X = 1;
function zda(a, d, e) {
  Ek(a, d, e);
}
zda.X = 1;
function Ek(a, d, e) {
  var f, g, h, i, j;
  f = Fk(a + 69 * e + 1);
  g = k[a + 69 * e + 53];
  h = k[a + 69 * e + 61];
  i = k[a + 69 * e + 69];
  j = c[a + 69 * e + 28];
  for (var l = a + 69 * e + 1, m = d + 69; d < m; d++, l++) {
    (c[l] = c[d]), (k[l] = k[d]);
  }
  c[a + 69 * e + 28] = j;
  k[a + 69 * e + 29] = g;
  k[a + 69 * e + 31] = h;
  k[a + 69 * e + 32] = i;
  k[a + 69 * e + 53] = g;
  k[a + 69 * e + 61] = h;
  k[a + 69 * e + 69] = i;
  c[a + 69 * e + 37] = f;
}
Ek.X = 1;
function Gk(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
Gk.X = 1;
function Hk(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Hk.X = 1;
function Ada(a) {
  return hk(a);
}
Ada.X = 1;
function Bda(a) {
  return xf(a);
}
Bda.X = 1;
function Cda(a) {
  return ik(a);
}
Cda.X = 1;
function Ik(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
Ik.X = 1;
function Jk(a) {
  return v[c[c[a] + 7]](a);
}
Jk.X = 1;
function Dda(a) {
  Kk(a);
}
Dda.X = 1;
function Lk(a) {
  return Ue(a, 16);
}
Lk.X = 1;
function Mk(a) {
  return v[c[c[a] + 12]](a);
}
Mk.X = 1;
function Eda(a, d) {
  Je(a, d);
}
Eda.X = 1;
function Nk(a) {
  return v[c[c[a] + 9]](a);
}
Nk.X = 1;
function Fda(a) {
  return Ge(a);
}
Fda.X = 1;
function Gda(a) {
  return Ye(a);
}
Gda.X = 1;
function Ok(a, d) {
  v[c[c[a] + 6]](a, d);
}
Ok.X = 1;
function Pk() {
  var a = Lk(92);
  Qk(a, 1);
  return a;
}
Pk.X = 1;
function Rk(a) {
  var a = a & 1,
    d = Lk(92);
  Qk(d, a & 1);
  return d;
}
Rk.X = 1;
function Sk(a) {
  return c[a + 6];
}
Sk.X = 1;
function Tk(a, d) {
  c[a + 21] = d;
}
Tk.X = 1;
function Uk(a, d, e, f) {
  f & 1 ? (c[a + 25] = d) : (c[a + 24] = d);
  c[a + 26] = e;
}
Uk.X = 1;
function Vk(a) {
  return c[a + 23] & 1;
}
Vk.X = 1;
function Wk(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
Wk.X = 1;
function Xk(a, d) {
  return v[c[c[a] + 5]](a, d);
}
Xk.X = 1;
function Hda(a, d) {
  return Yk(a, d);
}
Hda.X = 1;
function Yk(a, d) {
  return c[Zk(a + 3, d) + 16];
}
Yk.X = 1;
function Ida(a, d, e) {
  $k(a, d, e);
}
Ida.X = 1;
function Jda(a) {
  return zf(a);
}
Jda.X = 1;
function Kda(a, d) {
  return al(a, d);
}
Kda.X = 1;
function al(a, d) {
  return Zk(a + 3, d);
}
al.X = 1;
function Lda(a) {
  return Me(a);
}
Lda.X = 1;
function Mda(a) {
  return Bf(a);
}
Mda.X = 1;
function Nda(a) {
  return bl(a);
}
Nda.X = 1;
function bl(a) {
  return Zk(a + 3, 0);
}
bl.X = 1;
function cl(a) {
  return v[c[c[a] + 11]](a);
}
cl.X = 1;
function dl(a, d) {
  v[c[c[a] + 10]](a, d);
}
dl.X = 1;
function Oda(a) {
  return el(a);
}
Oda.X = 1;
function el(a) {
  return fl(a + 3);
}
el.X = 1;
function Pda(a, d) {
  gl(a, d);
}
Pda.X = 1;
function hl(a) {
  v[c[c[a] + 16]](a);
}
hl.X = 1;
function Qda(a) {
  return Kf(a);
}
Qda.X = 1;
function il(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
il.X = 1;
function jl(a, d, e) {
  kl(a, d, e, 1);
}
jl.X = 1;
function ll(a, d, e, f) {
  kl(a, d, e, f & 1);
}
ll.X = 1;
function ml(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
ml.X = 1;
function nl(a) {
  return v[c[c[a] + 4]](a);
}
nl.X = 1;
function ol(a, d) {
  v[c[c[a] + 14]](a, d);
}
ol.X = 1;
function Rda(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Rda.X = 1;
function Sda(a, d, e, f) {
  pl(a, d, e, f);
}
Sda.X = 1;
function ql(a, d) {
  v[c[c[a] + 15]](a, d);
}
ql.X = 1;
function Tda(a) {
  return Ie(a);
}
Tda.X = 1;
function Uda(a) {
  return Uf(a);
}
Uda.X = 1;
function Vda(a) {
  return Gf(a);
}
Vda.X = 1;
function rl(a, d) {
  v[c[c[a] + 17]](a, d);
}
rl.X = 1;
function sl(a, d) {
  v[c[c[a] + 15]](a, d);
}
sl.X = 1;
function Wda(a) {
  return a + 27;
}
Wda.X = 1;
function tl(a, d) {
  v[c[c[a] + 11]](a, d);
}
tl.X = 1;
function Xda(a) {
  return Sk(a);
}
Xda.X = 1;
function ul(a, d) {
  v[c[c[a] + 20]](a, d);
}
ul.X = 1;
function vl(a, d, e, f) {
  v[c[c[a] + 21]](a, d, e, f);
}
vl.X = 1;
function wl(a) {
  v[c[c[a] + 29]](a);
}
wl.X = 1;
function xl(a, d) {
  v[c[c[a] + 31]](a, d);
}
xl.X = 1;
function zl(a) {
  return v[c[c[a] + 4]](a);
}
zl.X = 1;
function Yda(a, d) {
  Tk(a, d);
}
Yda.X = 1;
function Al(a) {
  v[c[c[a] + 10]](a);
}
Al.X = 1;
function Zda(a) {
  return a + 1;
}
Zda.X = 1;
function Bl(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
Bl.X = 1;
function Cl(a, d) {
  v[c[c[a] + 14]](a, d);
}
Cl.X = 1;
function Dl(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Dl.X = 1;
function El(a) {
  return v[c[c[a] + 25]](a);
}
El.X = 1;
function Fl(a, d) {
  v[c[c[a] + 8]](a, d, 1, -1);
}
Fl.X = 1;
function Gl(a, d, e) {
  v[c[c[a] + 8]](a, d, e, -1);
}
Gl.X = 1;
function Hl(a, d, e, f) {
  v[c[c[a] + 8]](a, d, e, f);
}
Hl.X = 1;
function Il(a, d) {
  v[c[c[a] + 22]](a, d);
}
Il.X = 1;
function $da(a, d, e) {
  Jl(a, d, e);
}
$da.X = 1;
function Kl(a, d) {
  Uk(a, d, 0, 0);
}
Kl.X = 1;
function Ll(a, d, e) {
  Uk(a, d, e, 0);
}
Ll.X = 1;
function Ml(a, d, e, f) {
  Uk(a, d, e, f & 1);
}
Ml.X = 1;
function aea(a) {
  return Vk(a);
}
aea.X = 1;
function Nl(a) {
  v[c[c[a] + 2]](a);
}
Nl.X = 1;
function Ol(a, d) {
  v[c[c[a] + 3]](a, d);
}
Ol.X = 1;
function Pl(a) {
  v[c[c[a] + 19]](a);
}
Pl.X = 1;
function Ql(a, d, e, f, g) {
  Rl(a, d, e, f, g, 0);
}
Ql.X = 1;
function bea(a, d, e, f, g, h) {
  Rl(a, d, e, f, g, h);
}
bea.X = 1;
function cea(a) {
  return Sl(a);
}
cea.X = 1;
function Sl(a) {
  return Tl(a + 1);
}
Sl.X = 1;
function Ul(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Ul.X = 1;
function Vl(a, d) {
  v[c[c[a] + 13]](a, d, 0);
}
Vl.X = 1;
function Wl(a, d, e) {
  v[c[c[a] + 13]](a, d, e & 1);
}
Wl.X = 1;
function dea(a, d, e, f) {
  Xl(a, d, e, f);
}
dea.X = 1;
function Yl(a) {
  var d = b;
  b += 4;
  0 == (c[Zl] << 24) >> 24 && Hb(Zl);
  v[c[c[a] + 18]](d, a);
  c[$l] = c[d];
  k[$l] = k[d];
  c[$l + 1] = c[d + 1];
  k[$l + 1] = k[d + 1];
  c[$l + 2] = c[d + 2];
  k[$l + 2] = k[d + 2];
  c[$l + 3] = c[d + 3];
  k[$l + 3] = k[d + 3];
  b = d;
  return $l;
}
Yl.X = 1;
function am(a) {
  return c[a + 21];
}
am.X = 1;
function bm(a, d) {
  c[a + 23] = d & 1;
}
bm.X = 1;
function cm(a, d) {
  c[a + 26] = d;
}
cm.X = 1;
function dm(a) {
  return c[a + 26];
}
dm.X = 1;
function em(a, d) {
  k[a + 2] = d;
}
em.X = 1;
function fm(a) {
  return k[a + 1];
}
fm.X = 1;
function gm(a) {
  return k[a + 2];
}
gm.X = 1;
function eea(a, d) {
  k[a] = d;
}
eea.X = 1;
function hm(a, d) {
  k[a + 1] = d;
}
hm.X = 1;
function fea(a) {
  return k[a];
}
fea.X = 1;
function im(a, d) {
  var e;
  e = d + c[a + 2];
  e >>> 0 < c[a + 1] >>> 0
    ? ((c[a + 2] = e), (e = c[a] + (c[a + 2] - d)))
    : (e = 0);
  return e;
}
im.X = 1;
function jm(a) {
  return c[a + 1] - c[a + 2];
}
jm.X = 1;
function km(a, d) {
  (d | 0) == (c[a + 3] | 0) &&
    ((c[a + 3] = c[d]), (c[a + 2] = c[d + 1] - 8 + -c[a]));
}
km.X = 1;
function lm(a) {
  v[c[c[a] + 5]](a);
}
lm.X = 1;
function gea(a) {
  return am(a);
}
gea.X = 1;
function hea(a, d, e, f, g, h) {
  mm(a, d, e, f, g, h);
}
hea.X = 1;
function nm(a, d) {
  v[c[c[a] + 16]](a, d);
}
nm.X = 1;
function pm(a, d) {
  bm(a, d & 1);
}
pm.X = 1;
function iea(a, d) {
  cm(a, d);
}
iea.X = 1;
function qm(a, d) {
  v[c[c[a] + 33]](a, d);
}
qm.X = 1;
function rm(a, d) {
  return v[c[c[a] + 26]](a, d);
}
rm.X = 1;
function sm(a) {
  return v[c[c[a] + 24]](a);
}
sm.X = 1;
function tm(a, d) {
  return v[c[c[a] + 12]](a, d, 1, 0.01666666753590107);
}
tm.X = 1;
function um(a, d, e) {
  return v[c[c[a] + 12]](a, d, e, 0.01666666753590107);
}
um.X = 1;
function vm(a, d, e, f) {
  return v[c[c[a] + 12]](a, d, e, f);
}
vm.X = 1;
function wm(a, d) {
  v[c[c[a] + 32]](a, d);
}
wm.X = 1;
function xm(a) {
  return v[c[c[a] + 28]](a);
}
xm.X = 1;
function jea(a, d) {
  ym(a, d);
}
jea.X = 1;
function zm(a, d) {
  v[c[c[a] + 30]](a, d);
}
zm.X = 1;
function kea(a) {
  return Am(a);
}
kea.X = 1;
function Am(a) {
  a = c[a + 21];
  return v[c[c[a] + 9]](a);
}
Am.X = 1;
function lea(a) {
  return dm(a);
}
lea.X = 1;
function Bm(a, d) {
  v[c[c[a] + 9]](a, d);
}
Bm.X = 1;
function Cm(a, d) {
  v[c[c[a] + 23]](a, d);
}
Cm.X = 1;
function mea(a, d, e, f, g, h, i, j) {
  Dm(a, d, e, f, g, h, i, j);
}
mea.X = 1;
function nea(a) {
  return a + 7;
}
nea.X = 1;
function Em(a) {
  var d = xb(8);
  oea(d, a);
  return d;
}
Em.X = 1;
function Fm(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Fm.X = 1;
function Gm(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f);
}
Gm.X = 1;
function Hm(a) {
  0 != (a | 0) && xe(a);
}
Hm.X = 1;
function Im() {
  var a = xb(12);
  Jm(a);
  return a;
}
Im.X = 1;
function Km(a) {
  0 != (a | 0) && (Lm(a), xe(a));
}
Km.X = 1;
function pea(a, d) {
  Mm(a, d);
}
pea.X = 1;
function Mm(a, d) {
  Lm(a);
  c[a] = Ue(d, 16);
  c[a + 1] = d;
}
Mm.X = 1;
function Nm(a) {
  var d = xb(20);
  Om(d, a);
  return d;
}
Nm.X = 1;
function qea(a, d) {
  return im(a, d);
}
qea.X = 1;
function rea(a) {
  Lm(a);
}
rea.X = 1;
function Lm(a) {
  0 == (c[a + 2] | 0) &&
    (!(c[a + 4] & 1) && 0 != (c[a] | 0) && yh(c[a]),
    (c[a] = 0),
    (c[a + 2] = 0));
}
Lm.X = 1;
function sea(a) {
  return Pm(a);
}
sea.X = 1;
function Pm(a) {
  var d;
  d = im(a, 8);
  c[d] = c[a + 3];
  c[d + 1] = c[a] + c[a + 2];
  return (c[a + 3] = d);
}
Pm.X = 1;
function tea(a) {
  return jm(a);
}
tea.X = 1;
function uea(a, d) {
  km(a, d);
}
uea.X = 1;
function Qm() {
  var a = xb(72);
  Rm(a);
  return a;
}
Qm.X = 1;
function Sm(a) {
  0 != (a | 0) && xe(a);
}
Sm.X = 1;
function vea(a, d) {
  Tm(a, d);
}
vea.X = 1;
function Tm(a, d) {
  var e = 2 == (ki(a) | 0);
  a: do {
    if (!e && 4 != (ki(a) | 0)) {
      var f = Um(a + 76) < k[a + 116] * k[a + 116];
      do {
        if (f && Um(a + 80) < k[a + 117] * k[a + 117]) {
          e = a + 55;
          k[e] += d;
          break a;
        }
      } while (0);
      k[a + 55] = 0;
      Li(a, 0);
    }
  } while (0);
}
Tm.X = 1;
function wea(a, d) {
  Xh(a, d);
}
wea.X = 1;
function xea(a) {
  return Vm(a);
}
xea.X = 1;
function Vm(a) {
  var d,
    e = 4 == (ki(a) | 0);
  a: do {
    if (e) {
      d = 0;
    } else {
      if ((c[Wm] & 1) | (0 == k[Xm])) {
        d = 0;
      } else {
        d = 2 == (ki(a) | 0);
        do {
          if (!d && 3 != (ki(a) | 0)) {
            if (k[a + 55] > k[Xm]) {
              d = 1;
              break a;
            }
            d = 0;
            break a;
          }
        } while (0);
        d = 1;
      }
    }
  } while (0);
  return d;
}
Vm.X = 1;
function Ym(a, d) {
  c[a + 151] = d;
}
Ym.X = 1;
function Zm(a) {
  return k[a + 84];
}
Zm.X = 1;
function $m(a, d) {
  c[a + 124] = d;
}
$m.X = 1;
function an(a) {
  return k[a + 116];
}
an.X = 1;
function bn(a) {
  return k[a + 110];
}
bn.X = 1;
function cn(a) {
  var d = b;
  b += 4;
  0 == (c[dn] << 24) >> 24 && Hb(dn);
  yea(d, a);
  c[en] = c[d];
  k[en] = k[d];
  c[en + 1] = c[d + 1];
  k[en + 1] = k[d + 1];
  c[en + 2] = c[d + 2];
  k[en + 2] = k[d + 2];
  c[en + 3] = c[d + 3];
  k[en + 3] = k[d + 3];
  b = d;
  return en;
}
cn.X = 1;
function zea(a, d, e) {
  fn(a, d, e);
}
zea.X = 1;
function Aea(a, d) {
  gn(a, d);
}
Aea.X = 1;
function gn(a, d) {
  c[a + 118] = d;
  if (0 != (c[a + 118] | 0)) {
    v[c[c[d] + 2]](d, a + 1);
  }
}
gn.X = 1;
function Bea(a) {
  hn(a);
}
Bea.X = 1;
function hn(a) {
  var d = b;
  b += 6;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5;
  k[d] = 0;
  k[e] = 0;
  k[f] = 0;
  pe(a + 101, d, e, f);
  k[g] = 0;
  k[h] = 0;
  k[i] = 0;
  pe(a + 105, g, h, i);
  b = d;
}
hn.X = 1;
function Cea(a) {
  return a + 33;
}
Cea.X = 1;
function jn(a, d) {
  v[c[c[a] + 3]](a, d);
}
jn.X = 1;
function Dea(a) {
  return oi(a);
}
Dea.X = 1;
function Eea(a) {
  return a + 146;
}
Eea.X = 1;
function Fea(a) {
  return a + 138;
}
Fea.X = 1;
function Gea(a, d) {
  Yh(a, d);
}
Gea.X = 1;
function Hea(a) {
  return Zm(a);
}
Hea.X = 1;
function Iea(a) {
  return $h(a);
}
Iea.X = 1;
function Jea(a) {
  return a + 101;
}
Jea.X = 1;
function Kea(a) {
  return a + 1 + 12;
}
Kea.X = 1;
function Lea(a) {
  return Ph(a);
}
Lea.X = 1;
function Mea(a) {
  return mi(a);
}
Mea.X = 1;
function Nea(a) {
  return a + 93;
}
Nea.X = 1;
function Oea(a, d) {
  kn(a, d);
}
Oea.X = 1;
function Pea(a, d) {
  $m(a, d);
}
Pea.X = 1;
function Qea(a) {
  return Ki(a);
}
Qea.X = 1;
function Rea(a) {
  return ki(a);
}
Rea.X = 1;
function Sea(a) {
  return a + 105;
}
Sea.X = 1;
function Tea(a) {
  return a + 64;
}
Tea.X = 1;
function Uea(a, d, e) {
  return ln(a, d, e);
}
Uea.X = 1;
function ln(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 8,
    i = f + 12;
  N(f, d, a + 1 + 12);
  qn(g, f, e);
  rn(i, g, a + 64);
  qn(h, i, f);
  a = k[a + 84] + J(e, h);
  b = f;
  return a;
}
ln.X = 1;
function Vea(a) {
  return an(a);
}
Vea.X = 1;
function Wea(a) {
  return Ni(a);
}
Wea.X = 1;
function Xea(a, d, e) {
  sn(a, d, e);
}
Xea.X = 1;
function sn(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4;
  tn(a, d);
  ig(g, d, a + 85);
  qn(f, e, g);
  un(a, f);
  b = f;
}
sn.X = 1;
function Yea(a, d, e) {
  vn(a, d, e);
}
Yea.X = 1;
function vn(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 8,
    i = f + 12;
  wn(g, a + 76, a + 126);
  wn(i, a + 80, a + 130);
  qn(h, i, d);
  wn(f, g, h);
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  b = f;
}
vn.X = 1;
function Zea(a) {
  return Sh(a);
}
Zea.X = 1;
function $ea(a) {
  return Nh(a);
}
$ea.X = 1;
function afa(a, d) {
  Oh(a, d);
}
afa.X = 1;
function bfa(a) {
  return a + 130;
}
bfa.X = 1;
function cfa(a, d) {
  tn(a, d);
}
cfa.X = 1;
function tn(a, d) {
  var e = b;
  b += 4;
  ig(e, d, a + 85);
  xn(a + 101, e);
  b = e;
}
tn.X = 1;
function dfa(a, d, e) {
  yn(a, d, e);
}
dfa.X = 1;
function yn(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4;
  0 != k[a + 84] &&
    (zn(a, d),
    0 != ((a + 134) | 0) && (ig(g, d, a + 85), qn(f, e, g), An(a, f)));
  b = f;
}
yn.X = 1;
function efa(a, d) {
  un(a, d);
}
efa.X = 1;
function un(a, d) {
  var e = b;
  b += 4;
  ig(e, d, a + 134);
  xn(a + 105, e);
  b = e;
}
un.X = 1;
function ffa(a) {
  return Uh(a);
}
ffa.X = 1;
function gfa(a) {
  return a + 134;
}
gfa.X = 1;
function hfa(a, d, e) {
  Bn(a, d, e);
}
hfa.X = 1;
function ifa(a) {
  return a + 37;
}
ifa.X = 1;
function jfa(a, d) {
  Fi(a, d);
}
jfa.X = 1;
function kfa(a) {
  return a + 80;
}
kfa.X = 1;
function lfa(a) {
  return a + 76;
}
lfa.X = 1;
function Cn(a, d) {
  return v[c[c[a]]](a, d);
}
Cn.X = 1;
function mfa(a) {
  return ci(a);
}
mfa.X = 1;
function nfa(a) {
  return ei(a);
}
nfa.X = 1;
function ofa(a, d) {
  fi(a, d);
}
ofa.X = 1;
function pfa(a, d) {
  Dn(a, d);
}
pfa.X = 1;
function Dn(a, d) {
  var e = a + 80;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Dn.X = 1;
function qfa(a, d) {
  En(a, d);
}
qfa.X = 1;
function rfa(a, d) {
  Fn(a, d);
}
rfa.X = 1;
function sfa(a) {
  return Mn(a);
}
sfa.X = 1;
function Mn(a) {
  return 0 != (tfa(a) | 0);
}
Mn.X = 1;
function ufa(a, d) {
  hi(a, d);
}
ufa.X = 1;
function vfa(a, d) {
  return Nn(a, d);
}
vfa.X = 1;
function Nn(a, d) {
  var e = b;
  b += 4;
  rn(e, d, a + 64);
  var f = J(d, e);
  b = e;
  return f;
}
Nn.X = 1;
function wfa(a) {
  return bn(a);
}
wfa.X = 1;
function xfa(a, d) {
  On(a, d);
}
xfa.X = 1;
function Pn(a) {
  var d = zi(608);
  Qn(d, a);
  return d;
}
Pn.X = 1;
function Rn(a, d, e) {
  var f = b;
  b += 7;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = zi(608);
  k[g] = 0;
  k[h] = 0;
  k[i] = 0;
  H(f, g, h, i);
  Sn(j, a, d, e, f);
  b = f;
  return j;
}
Rn.X = 1;
function Tn(a, d, e, f) {
  var g = zi(608);
  Sn(g, a, d, e, f);
  return g;
}
Tn.X = 1;
function On(a, d) {
  c[a + 47] = d;
}
On.X = 1;
function Un(a) {
  return c[a + 118];
}
Un.X = 1;
function Vn(a) {
  return k[a + 117];
}
Vn.X = 1;
function Wn(a) {
  return c[a + 47];
}
Wn.X = 1;
function Xn(a) {
  return c[a + 48];
}
Xn.X = 1;
function Yn(a) {
  return c[a + 150];
}
Yn.X = 1;
function Zn(a) {
  return c[a + 124];
}
Zn.X = 1;
function $n(a, d) {
  c[a + 150] = d;
}
$n.X = 1;
function yfa(a, d) {
  ao(a, d);
}
yfa.X = 1;
function zfa(a) {
  return a + 134;
}
zfa.X = 1;
function Afa(a) {
  return Pi(a);
}
Afa.X = 1;
function Bfa(a, d) {
  Qi(a, d);
}
Bfa.X = 1;
function Cfa(a) {
  return Ti(a);
}
Cfa.X = 1;
function Dfa(a, d) {
  kn(a, d);
}
Dfa.X = 1;
function Efa(a) {
  bo(a);
}
Efa.X = 1;
function bo(a) {
  var d = b;
  b += 8;
  var e = d + 4;
  0 != k[a + 84] &&
    (wn(d, a + 76, a + 126), co(a, d), wn(e, a + 80, a + 130), Dn(a, e));
  b = d;
}
bo.X = 1;
function Ffa(a, d) {
  eo(a, d);
}
Ffa.X = 1;
function Gfa(a, d) {
  qi(a, d);
}
Gfa.X = 1;
function Hfa(a) {
  fo(a);
}
Hfa.X = 1;
function go(a, d, e) {
  return v[c[c[a] + 5]](a, d, e);
}
go.X = 1;
function Ifa(a, d, e, f) {
  ho(a, d, e, f);
}
Ifa.X = 1;
function ho(a, d, e, f) {
  var g = b;
  b += 13;
  var h = g + 1,
    i = g + 5,
    j = g + 9;
  k[g] = f;
  0 != k[a + 84] &&
    (Q(h, d, g), xn(a + 126, h), Q(j, a + 134, g), ig(i, e, j), xn(a + 130, i));
  b = g;
}
ho.X = 1;
function Jfa(a, d) {
  Rh(a, d);
}
Jfa.X = 1;
function io(a) {
  ui(a, 0);
}
io.X = 1;
function jo(a, d) {
  ui(a, d & 1);
}
jo.X = 1;
function Kfa(a) {
  return Un(a);
}
Kfa.X = 1;
function Lfa(a, d) {
  Vh(a, d);
}
Lfa.X = 1;
function Mfa(a, d, e, f) {
  ko(a, d, e, f);
}
Mfa.X = 1;
function ko(a, d, e, f) {
  var g = b;
  b += 13;
  var h = g + 1,
    i = g + 5,
    j = g + 9;
  k[g] = f;
  0 != k[a + 84] &&
    (Q(h, d, g), xn(a + 142, h), Q(j, a + 134, g), ig(i, e, j), xn(a + 146, i));
  b = g;
}
ko.X = 1;
function Nfa(a, d) {
  Th(a, d);
}
Nfa.X = 1;
function lo(a, d) {
  var e = b;
  b += 4;
  0 == (c[mo] << 24) >> 24 && Hb(mo);
  no(e, a, d);
  c[oo] = c[e];
  k[oo] = k[e];
  c[oo + 1] = c[e + 1];
  k[oo + 1] = k[e + 1];
  c[oo + 2] = c[e + 2];
  k[oo + 2] = k[e + 2];
  c[oo + 3] = c[e + 3];
  k[oo + 3] = k[e + 3];
  b = e;
  return oo;
}
lo.X = 1;
function no(a, d, e) {
  var f = b;
  b += 4;
  qn(f, d + 80, e);
  wn(a, d + 76, f);
  b = f;
}
no.X = 1;
function Ofa(a) {
  return Wh(a);
}
Ofa.X = 1;
function Pfa(a) {
  return a + 85;
}
Pfa.X = 1;
function Qfa(a) {
  return a + 41;
}
Qfa.X = 1;
function Rfa(a) {
  return Vn(a);
}
Rfa.X = 1;
function Sfa(a) {
  return a + 17;
}
Sfa.X = 1;
function Tfa(a, d, e) {
  po(a, d, e);
}
Tfa.X = 1;
function qo(a, d) {
  v[c[c[a] + 6]](a, d);
}
qo.X = 1;
function Ufa(a, d) {
  ro(a, d);
}
Ufa.X = 1;
function ro(a, d) {
  xn(a + 1 + 12, d);
}
ro.X = 1;
function Vfa(a) {
  return a + 1;
}
Vfa.X = 1;
function Wfa(a) {
  return Wn(a);
}
Wfa.X = 1;
function Xfa(a) {
  return Xn(a);
}
Xfa.X = 1;
function Yfa(a, d) {
  Hi(a, d);
}
Yfa.X = 1;
function Zfa(a) {
  return a + 126;
}
Zfa.X = 1;
function $fa(a) {
  return li(a);
}
$fa.X = 1;
function aga(a) {
  return so(a);
}
aga.X = 1;
function so(a) {
  return 0 != ((ji(a) & 2) | 0) ? a : 0;
}
so.X = 1;
function bga(a) {
  return ii(a);
}
bga.X = 1;
function cga(a, d) {
  to(a, d);
}
cga.X = 1;
function dga(a, d) {
  Ji(a, d);
}
dga.X = 1;
function ega(a, d) {
  Li(a, d);
}
ega.X = 1;
function fga(a) {
  return a + 130;
}
fga.X = 1;
function gga(a) {
  return pi(a);
}
gga.X = 1;
function hga(a, d) {
  return uo(a, d);
}
hga.X = 1;
function uo(a, d) {
  return c[vo(a + 119, d)];
}
uo.X = 1;
function iga(a, d) {
  Mi(a, d);
}
iga.X = 1;
function jga(a) {
  return a + 1;
}
jga.X = 1;
function kga(a) {
  return Ri(a);
}
kga.X = 1;
function lga(a, d) {
  Si(a, d);
}
lga.X = 1;
function mga(a) {
  return Zn(a);
}
mga.X = 1;
function nga(a, d) {
  wo(a, d);
}
nga.X = 1;
function oga(a) {
  return gi(a);
}
oga.X = 1;
function pga(a, d) {
  xo(a, d);
}
pga.X = 1;
function xo(a, d) {
  var e = a + 134;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
xo.X = 1;
function qga(a) {
  return a + 142;
}
qga.X = 1;
function rga(a) {
  yo(a);
}
rga.X = 1;
function sga(a, d) {
  ri(a, d);
}
sga.X = 1;
function tga(a, d) {
  Qh(a, d);
}
tga.X = 1;
function uga(a, d, e) {
  zo(a, d, e);
}
uga.X = 1;
function vga(a) {
  return ji(a);
}
vga.X = 1;
function Ao(a) {
  return v[c[c[a] + 4]](a);
}
Ao.X = 1;
function wga(a, d) {
  return Di(a, d);
}
wga.X = 1;
function xga(a) {
  return a + 97;
}
xga.X = 1;
function yga(a, d) {
  An(a, d);
}
yga.X = 1;
function An(a, d) {
  var e = b;
  b += 8;
  var f = e + 4;
  Bo(f, a + 64, d);
  ig(e, f, a + 134);
  xn(a + 80, e);
  b = e;
}
An.X = 1;
function zga(a) {
  return a + 142;
}
zga.X = 1;
function Aga(a, d) {
  Co(a, d);
}
Aga.X = 1;
function Co(a, d) {
  var e = b;
  b += 4;
  var f = a + 85;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  Q(e, a + 85, a + 84);
  f = a + 138;
  c[f] = c[e];
  k[f] = k[e];
  c[f + 1] = c[e + 1];
  k[f + 1] = k[e + 1];
  c[f + 2] = c[e + 2];
  k[f + 2] = k[e + 2];
  c[f + 3] = c[e + 3];
  k[f + 3] = k[e + 3];
  b = e;
}
Co.X = 1;
function Bga(a, d) {
  co(a, d);
}
Bga.X = 1;
function co(a, d) {
  var e = a + 76;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
co.X = 1;
function Cga(a) {
  return ai(a);
}
Cga.X = 1;
function Dga(a, d) {
  zn(a, d);
}
Dga.X = 1;
function Ega() {
  return 0;
}
Ega.X = 1;
function Do(a, d, e) {
  k[a + 116] = d;
  k[a + 117] = e;
}
Do.X = 1;
function Eo(a) {
  return c[a + 151];
}
Eo.X = 1;
function Fo(a) {
  return k[a + 109];
}
Fo.X = 1;
function Go(a) {
  return c[a + 15] & 1;
}
Go.X = 1;
function Ho(a) {
  return c[a + 8];
}
Ho.X = 1;
function Io(a) {
  return c[a + 7];
}
Io.X = 1;
function Jo(a, d) {
  c[a + 4] = d;
}
Jo.X = 1;
function Ko(a, d) {
  c[a + 6] = d & 1;
}
Ko.X = 1;
function Lo(a) {
  return c[a + 3];
}
Lo.X = 1;
function zn(a, d) {
  var e = b;
  b += 8;
  var f = e + 4;
  ig(f, d, a + 85);
  Q(e, f, a + 84);
  xn(a + 76, e);
  b = e;
}
zn.X = 1;
function Fga(a, d) {
  Oi(a, d);
}
Fga.X = 1;
function Gga(a) {
  return a + 126;
}
Gga.X = 1;
function Hga(a, d) {
  Mo(a, d);
}
Hga.X = 1;
function Mo(a, d) {
  var e = a + 97;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Mo.X = 1;
function Iga(a, d, e) {
  Do(a, d, e);
}
Iga.X = 1;
function No(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 2]](a);
  }
}
No.X = 1;
function Jga(a, d) {
  Oo(a, d);
}
Jga.X = 1;
function Oo(a, d) {
  var e = b;
  b += 4;
  wn(e, a + 80, a + 130);
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  b = e;
}
Oo.X = 1;
function Kga(a) {
  return Po(a);
}
Kga.X = 1;
function Po(a) {
  return Qo(a + 119);
}
Po.X = 1;
function Lga(a) {
  return di(a);
}
Lga.X = 1;
function Mga(a) {
  return ni(a);
}
Mga.X = 1;
function Nga(a) {
  return a + 146;
}
Nga.X = 1;
function Oga(a, d) {
  wi(a, d);
}
Oga.X = 1;
function Pga(a, d) {
  Zh(a, d);
}
Pga.X = 1;
function Qga(a, d) {
  Ro(a, d);
}
Qga.X = 1;
function Rga(a) {
  return Fo(a);
}
Rga.X = 1;
function Sga(a) {
  So(a);
}
Sga.X = 1;
function To(a, d, e) {
  return 0 != (v[c[c[a] + 4]](a, d, e) | 0);
}
To.X = 1;
function Uo(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f & 1);
}
Uo.X = 1;
function Tga(a) {
  return a + 26;
}
Tga.X = 1;
function Vo(a, d, e) {
  Wo(a, d, e, 1);
}
Vo.X = 1;
function Uga(a, d, e, f) {
  Wo(a, d, e, f);
}
Uga.X = 1;
function Vga(a, d, e, f) {
  Xo(a, d, e, f);
}
Vga.X = 1;
function Xo(a, d, e, f) {
  var g = b;
  b += 8;
  var h = g + 4;
  N(h, e, a + 1);
  ig(g, h, a + 9);
  a = k[g];
  0 != (f | 0)
    ? ((c[d] = ((Math.floor(a + 1) & 65535) | 1) & 65535),
      (c[d + 1] = ((Math.floor(k[g + 1] + 1) & 65535) | 1) & 65535),
      (c[d + 2] = ((Math.floor(k[g + 2] + 1) & 65535) | 1) & 65535))
    : ((c[d] = Math.floor(a) & 65534),
      (c[d + 1] = Math.floor(k[g + 1]) & 65534),
      (c[d + 2] = Math.floor(k[g + 2]) & 65534));
  b = g;
}
Xo.X = 1;
function Wga(a) {
  return Go(a);
}
Wga.X = 1;
function Xga(a, d, e, f, g) {
  Yo(a, d, e, f, g);
}
Xga.X = 1;
function Yga(a) {
  return Zo(a);
}
Yga.X = 1;
function Zga(a) {
  return a + 31;
}
Zga.X = 1;
function $ga(a, d, e, f) {
  $o(a, d, e, f);
}
$ga.X = 1;
function aha(a, d, e, f) {
  ap(a, d, e, f);
}
aha.X = 1;
function bp(a, d, e, f, g) {
  cp(a, d, e & 1, f, g);
}
bp.X = 1;
function bha(a, d, e, f) {
  dp(a, d, e, f);
}
bha.X = 1;
function ep(a, d, e) {
  return cha(a, d, e & 1);
}
ep.X = 1;
function dha(a, d, e, f) {
  fp(a, d, e, f);
}
dha.X = 1;
function fp(a, d, e, f) {
  var g = b;
  b += 4;
  c[g] = c[e];
  k[g] = k[e];
  c[g + 1] = c[e + 1];
  k[g + 1] = k[e + 1];
  c[g + 2] = c[e + 2];
  k[g + 2] = k[e + 2];
  c[g + 3] = c[e + 3];
  k[g + 3] = k[e + 3];
  gp(g, a + 1);
  hp(g, a + 5);
  Xo(a, d, g, f);
  b = g;
}
fp.X = 1;
function eha(a, d, e, f) {
  ip(a, d, e, f);
}
eha.X = 1;
function jp(a, d) {
  v[c[c[a] + 6]](a, d);
}
jp.X = 1;
function kp(a) {
  return v[c[c[a] + 3]](a);
}
kp.X = 1;
function lp(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
lp.X = 1;
function mp(a, d) {
  v[c[c[a] + 5]](a, d);
}
mp.X = 1;
function np(a, d, e, f) {
  return v[c[c[a] + 7]](a, d, e, f & 1);
}
np.X = 1;
function fha(a) {
  return a + 37;
}
fha.X = 1;
function op(a, d) {
  var e = b;
  b += 4;
  0 == (c[pp] << 24) >> 24 && Hb(pp);
  qp(e, a, d);
  c[rp] = c[e];
  k[rp] = k[e];
  c[rp + 1] = c[e + 1];
  k[rp + 1] = k[e + 1];
  c[rp + 2] = c[e + 2];
  k[rp + 2] = k[e + 2];
  c[rp + 3] = c[e + 3];
  k[rp + 3] = k[e + 3];
  b = e;
  return rp;
}
op.X = 1;
function qp(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = (c[e] & 65535) / k[d + 9];
  k[g] = (c[e + 1] & 65535) / k[d + 9 + 1];
  k[h] = (c[e + 2] & 65535) / k[d + 9 + 2];
  pe(a, f, g, h);
  xn(a, d + 1);
  b = f;
}
qp.X = 1;
function gha(a, d, e, f, g, h) {
  sp(a, d, e, f, g, h);
}
gha.X = 1;
function hha(a) {
  return Ue(a, 16);
}
hha.X = 1;
function iha(a) {
  return Ho(a);
}
iha.X = 1;
function tp(a) {
  v[c[c[a] + 2]](a);
}
tp.X = 1;
function jha(a) {
  return Io(a);
}
jha.X = 1;
function up(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
up.X = 1;
function vp(a, d) {
  Ko(a, d & 1);
}
vp.X = 1;
function kha(a) {
  return Lo(a);
}
kha.X = 1;
function wp() {
  var a = hha(172);
  xp(a);
  return a;
}
wp.X = 1;
function yp(a) {
  return c[a + 4];
}
yp.X = 1;
function zp(a, d) {
  k[a + 4] = d;
}
zp.X = 1;
function Ap(a) {
  return c[a + 5] & 1;
}
Ap.X = 1;
function Bp(a, d) {
  c[a + 3] = d;
}
Bp.X = 1;
function Cp(a) {
  return c[a + 4];
}
Cp.X = 1;
function Dp(a) {
  return k[a + 10];
}
Dp.X = 1;
function Ep(a, d) {
  k[a + 9] = d;
}
Ep.X = 1;
function Fp(a) {
  return c[a + 6] & 1;
}
Fp.X = 1;
function Gp(a) {
  return c[a + 3];
}
Gp.X = 1;
function Hp(a, d) {
  c[a + 5] = d & 1;
}
Hp.X = 1;
function Ip(a) {
  return c[a + 3];
}
Ip.X = 1;
function Jp(a, d) {
  k[a + 10] = d;
}
Jp.X = 1;
function Kp(a, d) {
  c[a + 2] = d;
}
Kp.X = 1;
function Lp(a) {
  return k[a + 9];
}
Lp.X = 1;
function Mp(a) {
  return k[a + 4];
}
Mp.X = 1;
function Np(a) {
  return c[a + 2];
}
Np.X = 1;
function Op(a) {
  return k[a + 9];
}
Op.X = 1;
function Pp(a, d) {
  c[a + 3] = d;
}
Pp.X = 1;
function Qp(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
Qp.X = 1;
function Rp(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Rp.X = 1;
function Sp(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
Sp.X = 1;
function Tp(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
Tp.X = 1;
function Up(a, d) {
  v[c[c[a] + 4]](a, d);
}
Up.X = 1;
function Vp(a, d) {
  v[c[c[a] + 5]](a, d);
}
Vp.X = 1;
function lha(a, d) {
  zp(a, d);
}
lha.X = 1;
function Wp(a) {
  return v[c[c[a] + 9]](a);
}
Wp.X = 1;
function mha(a) {
  return Ap(a);
}
mha.X = 1;
function nha(a, d) {
  Bp(a, d);
}
nha.X = 1;
function oha(a) {
  return Cp(a);
}
oha.X = 1;
function pha(a) {
  return Dp(a);
}
pha.X = 1;
function qha(a, d) {
  Ep(a, d);
}
qha.X = 1;
function rha(a) {
  return Fp(a);
}
rha.X = 1;
function Xp(a) {
  return c[a + 4];
}
Xp.X = 1;
function sha(a) {
  return Gp(a);
}
sha.X = 1;
function Yp(a, d) {
  Hp(a, d & 1);
}
Yp.X = 1;
function tha(a) {
  return Ip(a);
}
tha.X = 1;
function uha(a, d) {
  Jp(a, d);
}
uha.X = 1;
function vha(a, d) {
  Kp(a, d);
}
vha.X = 1;
function wha(a) {
  return Lp(a);
}
wha.X = 1;
function Zp(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Zp.X = 1;
function $p(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
$p.X = 1;
function xha(a) {
  return Mp(a);
}
xha.X = 1;
function yha(a) {
  return Np(a);
}
yha.X = 1;
function aq(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
aq.X = 1;
function zha(a) {
  return Op(a);
}
zha.X = 1;
function Aha(a, d) {
  Pp(a, d);
}
Aha.X = 1;
function bq(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
bq.X = 1;
function cq(a) {
  return v[c[c[a] + 26]](a);
}
cq.X = 1;
function dq(a, d) {
  var e = b;
  b += 4;
  0 == (c[eq] << 24) >> 24 && Hb(eq);
  v[c[c[a] + 15]](e, a, d);
  c[fq] = c[e];
  k[fq] = k[e];
  c[fq + 1] = c[e + 1];
  k[fq + 1] = k[e + 1];
  c[fq + 2] = c[e + 2];
  k[fq + 2] = k[e + 2];
  c[fq + 3] = c[e + 3];
  k[fq + 3] = k[e + 3];
  b = e;
  return fq;
}
dq.X = 1;
function Bha(a, d) {
  Je(a, d);
}
Bha.X = 1;
function gq(a, d, e) {
  return v[c[c[a] + 28]](a, d, e);
}
gq.X = 1;
function hq(a) {
  return v[c[c[a] + 22]](a);
}
hq.X = 1;
function iq(a) {
  return v[c[c[a] + 7]](a);
}
iq.X = 1;
function jq(a) {
  return v[c[c[a] + 19]](a);
}
jq.X = 1;
function Cha(a) {
  return Ye(a);
}
Cha.X = 1;
function kq(a, d, e) {
  v[c[c[a] + 25]](a, d, e);
}
kq.X = 1;
function lq(a, d) {
  var e = b;
  b += 4;
  0 == (c[mq] << 24) >> 24 && Hb(mq);
  tf(e, a, d);
  c[nq] = c[e];
  k[nq] = k[e];
  c[nq + 1] = c[e + 1];
  k[nq + 1] = k[e + 1];
  c[nq + 2] = c[e + 2];
  k[nq + 2] = k[e + 2];
  c[nq + 3] = c[e + 3];
  k[nq + 3] = k[e + 3];
  b = e;
  return nq;
}
lq.X = 1;
function Dha(a, d, e, f) {
  df(a, d, e, f);
}
Dha.X = 1;
function oq(a) {
  return v[c[c[a] + 12]](a);
}
oq.X = 1;
function pq(a) {
  return v[c[c[a] + 23]](a);
}
pq.X = 1;
function qq(a) {
  return v[c[c[a] + 9]](a);
}
qq.X = 1;
function rq(a, d, e, f) {
  v[c[c[a] + 24]](a, d, e, f);
}
rq.X = 1;
function Eha(a) {
  return a + 3;
}
Eha.X = 1;
function sq(a, d) {
  var e = b;
  b += 4;
  0 == (c[tq] << 24) >> 24 && Hb(tq);
  kf(e, a, d);
  c[uq] = c[e];
  k[uq] = k[e];
  c[uq + 1] = c[e + 1];
  k[uq + 1] = k[e + 1];
  c[uq + 2] = c[e + 2];
  k[uq + 2] = k[e + 2];
  c[uq + 3] = c[e + 3];
  k[uq + 3] = k[e + 3];
  b = e;
  return uq;
}
sq.X = 1;
function vq(a, d) {
  var e = b;
  b += 4;
  0 == (c[wq] << 24) >> 24 && Hb(wq);
  v[c[c[a] + 16]](e, a, d);
  c[xq] = c[e];
  k[xq] = k[e];
  c[xq + 1] = c[e + 1];
  k[xq + 1] = k[e + 1];
  c[xq + 2] = c[e + 2];
  k[xq + 2] = k[e + 2];
  c[xq + 3] = c[e + 3];
  k[xq + 3] = k[e + 3];
  b = e;
  return xq;
}
vq.X = 1;
function yq(a, d) {
  v[c[c[a] + 6]](a, d);
}
yq.X = 1;
function zq(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
zq.X = 1;
function Fha(a) {
  return Le(a);
}
Fha.X = 1;
function Gha(a) {
  return Gf(a);
}
Gha.X = 1;
function Aq(a, d) {
  return v[c[c[a] + 5]](a, d);
}
Aq.X = 1;
function Hha(a) {
  return xf(a);
}
Hha.X = 1;
function Iha(a) {
  return zf(a);
}
Iha.X = 1;
function Bq(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
Bq.X = 1;
function Jha(a) {
  return Me(a);
}
Jha.X = 1;
function Kha(a) {
  return Bf(a);
}
Kha.X = 1;
function Cq(a) {
  return v[c[c[a] + 11]](a);
}
Cq.X = 1;
function Dq(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
Dq.X = 1;
function Eq(a, d) {
  v[c[c[a] + 10]](a, d);
}
Eq.X = 1;
function Fq(a) {
  return v[c[c[a] + 21]](a);
}
Fq.X = 1;
function Gq(a, d) {
  c[a + 35] = d;
}
Gq.X = 1;
function Hq(a) {
  return c[a + 39] & 1;
}
Hq.X = 1;
function Iq(a, d) {
  c[a + 38] = d & 1;
}
Iq.X = 1;
function Jq(a) {
  return c[a + 28];
}
Jq.X = 1;
function Kq(a, d) {
  c[a + 24] = d;
}
Kq.X = 1;
function Lq(a) {
  return c[a + 38] & 1;
}
Lq.X = 1;
function Mq(a, d) {
  c[a + 27] = d;
}
Mq.X = 1;
function Nq(a, d) {
  c[a + 39] = d & 1;
}
Nq.X = 1;
function Oq(a, d) {
  c[a + 36] = d;
}
Oq.X = 1;
function Pq(a, d) {
  c[a + 30] = d;
}
Pq.X = 1;
function Qq(a) {
  return c[a + 31];
}
Qq.X = 1;
function Rq(a, d) {
  c[a + 37] = d;
}
Rq.X = 1;
function Sq(a) {
  return c[a + 26];
}
Sq.X = 1;
function Tq(a, d) {
  c[a + 32] = d;
}
Tq.X = 1;
function Uq(a, d) {
  c[a + 40] = d & 1;
}
Uq.X = 1;
function Vq(a, d) {
  c[a + 33] = d;
}
Vq.X = 1;
function Wq(a) {
  return c[a + 27];
}
Wq.X = 1;
function Xq(a) {
  return c[a + 35];
}
Xq.X = 1;
function Yq(a, d) {
  c[a + 28] = d;
}
Yq.X = 1;
function Zq(a) {
  return c[a + 36];
}
Zq.X = 1;
function $q(a, d) {
  k[a + 34] = d;
}
$q.X = 1;
function ar(a, d) {
  k[a + 25] = d;
}
ar.X = 1;
function br(a) {
  return c[a + 32];
}
br.X = 1;
function cr(a) {
  return c[a + 29];
}
cr.X = 1;
function dr(a, d) {
  c[a + 29] = d;
}
dr.X = 1;
function er(a) {
  return k[a + 25];
}
er.X = 1;
function fr(a) {
  return c[a + 37];
}
fr.X = 1;
function gr(a) {
  return c[a + 40] & 1;
}
gr.X = 1;
function hr(a) {
  return c[a + 30];
}
hr.X = 1;
function ir(a) {
  return k[a + 34];
}
ir.X = 1;
function jr(a, d) {
  k[a + 25] = d;
}
jr.X = 1;
function kr(a) {
  return k[a + 25];
}
kr.X = 1;
function lr(a) {
  return c[a + 24];
}
lr.X = 1;
function mr(a) {
  return c[a + 33];
}
mr.X = 1;
function or(a, d) {
  c[a + 31] = d;
}
or.X = 1;
function pr(a, d) {
  c[a + 26] = d;
}
pr.X = 1;
function Lha(a, d) {
  Jf(a, d);
}
Lha.X = 1;
function Mha(a) {
  return Kf(a);
}
Mha.X = 1;
function Nha(a) {
  return Mf(a);
}
Nha.X = 1;
function qr(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
qr.X = 1;
function Oha(a) {
  return a + 7;
}
Oha.X = 1;
function rr(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
rr.X = 1;
function sr(a) {
  return v[c[c[a] + 4]](a);
}
sr.X = 1;
function tr(a, d) {
  v[c[c[a] + 14]](a, d);
}
tr.X = 1;
function ur(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
ur.X = 1;
function vr(a, d, e, f) {
  v[c[c[a] + 27]](a, d, e, f);
}
vr.X = 1;
function Pha(a) {
  return Ge(a);
}
Pha.X = 1;
function Qha(a) {
  return yg(a);
}
Qha.X = 1;
function Rha(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Rha.X = 1;
function Sha(a) {
  return Ie(a);
}
Sha.X = 1;
function Tha(a) {
  return Uf(a);
}
Tha.X = 1;
function wr() {
  var a = xb(156);
  xr(a, 0);
  return a;
}
wr.X = 1;
function yr(a) {
  var d = xb(156);
  xr(d, a);
  return d;
}
yr.X = 1;
function Uha(a, d) {
  zr(a, d);
}
Uha.X = 1;
function Ar(a, d) {
  v[c[c[a] + 8]](a, d);
}
Ar.X = 1;
function Br(a, d, e, f) {
  var g = b;
  b += 14;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = c[c[a] + 6];
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  v[r](a, d, e, f, g, l);
  b = g;
}
Br.X = 1;
function Cr(a, d, e, f, g) {
  var h = b;
  b += 7;
  var i = h + 4,
    j = h + 5,
    l = h + 6,
    m = c[c[a] + 6];
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  v[m](a, d, e, f, g, h);
  b = h;
}
Cr.X = 1;
function Dr(a, d, e, f, g, h) {
  v[c[c[a] + 6]](a, d, e, f, g, h);
}
Dr.X = 1;
function Er(a, d, e, f, g) {
  v[c[c[a] + 4]](a, d, e, f, g);
}
Er.X = 1;
function Fr(a, d) {
  v[c[c[a] + 12]](a, d);
}
Fr.X = 1;
function Gr(a, d, e, f) {
  v[c[c[a] + 5]](a, d, e, f);
}
Gr.X = 1;
function Vha(a, d) {
  ar(a, d);
}
Vha.X = 1;
function Wha() {}
Wha.X = 1;
function Xha(a, d) {
  Hr(a, d);
}
Xha.X = 1;
function Ir(a) {
  v[c[c[a] + 13]](a);
}
Ir.X = 1;
function Jr(a, d, e, f, g, h, i, j, l) {
  return v[c[c[a] + 2]](a, d, e, f, g, h, i, j, l);
}
Jr.X = 1;
function Yha(a) {
  Kr(a);
}
Yha.X = 1;
function Lr(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Lr.X = 1;
function Mr(a) {
  return v[c[c[a] + 9]](a);
}
Mr.X = 1;
function Zha(a, d, e, f, g) {
  Nr(a, d, e, f, g);
}
Zha.X = 1;
function Or(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Or.X = 1;
function $ha(a) {
  return kr(a);
}
$ha.X = 1;
function Pr(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
Pr.X = 1;
function Qr(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
Qr.X = 1;
function Rr(a) {
  var d = xb(5388);
  Sr(d, a);
  return d;
}
Rr.X = 1;
function Tr(a, d) {
  c[a + 47] = d;
}
Tr.X = 1;
function Ur(a) {
  return c[a + 47];
}
Ur.X = 1;
function Vr(a) {
  return c[a + 1];
}
Vr.X = 1;
function Wr(a, d) {
  c[a + 1] = d;
}
Wr.X = 1;
function Xr(a, d) {
  c[a + 1346] = d;
}
Xr.X = 1;
function Yr(a) {
  return c[a + 1346];
}
Yr.X = 1;
function Zr(a) {
  return c[a + 15];
}
Zr.X = 1;
function $r(a, d) {
  v[c[c[a] + 15]](a, d);
}
$r.X = 1;
function aia(a, d) {
  Tr(a, d);
}
aia.X = 1;
function bia(a) {
  return Ur(a);
}
bia.X = 1;
function as(a, d, e) {
  return v[c[c[a] + 2]](a, d, e, 0);
}
as.X = 1;
function bs(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f);
}
bs.X = 1;
function cs(a, d, e) {
  return v[c[c[a] + 7]](a, d, e);
}
cs.X = 1;
function ds(a, d) {
  v[c[c[a] + 4]](a, d);
}
ds.X = 1;
function cia(a) {
  return Vr(a);
}
cia.X = 1;
function dia(a, d) {
  Wr(a, d);
}
dia.X = 1;
function es(a, d) {
  return v[c[c[a] + 10]](a, d);
}
es.X = 1;
function eia(a, d, e, f) {
  fs(a, d, e, f);
}
eia.X = 1;
function gs(a, d, e) {
  return v[c[c[a] + 6]](a, d, e);
}
gs.X = 1;
function hs(a) {
  return v[c[c[a] + 9]](a);
}
hs.X = 1;
function fia(a, d) {
  Xr(a, d);
}
fia.X = 1;
function is(a, d) {
  v[c[c[a] + 5]](a, d);
}
is.X = 1;
function js(a, d, e) {
  return v[c[c[a] + 3]](a, d, e);
}
js.X = 1;
function ks(a, d, e, f) {
  v[c[c[a] + 8]](a, d, e, f);
}
ks.X = 1;
function ls(a, d) {
  return v[c[c[a] + 14]](a, d);
}
ls.X = 1;
function ms(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
ms.X = 1;
function gia(a) {
  return Yr(a);
}
gia.X = 1;
function ns(a) {
  return v[c[c[a] + 11]](a);
}
ns.X = 1;
function hia(a, d, e) {
  os(a, d, e);
}
hia.X = 1;
function ps(a) {
  return v[c[c[a] + 12]](a);
}
ps.X = 1;
function qs(a) {
  return Ue(a, 16);
}
qs.X = 1;
function iia(a) {
  return Zr(a);
}
iia.X = 1;
function jia(a, d, e, f, g, h, i, j) {
  return rs(a, d, e, f, g, h, i, j);
}
jia.X = 1;
function rs(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 6;
  var m = l + 3;
  ss(a, l, d, 0);
  ss(a, m, e, 1);
  d = kia(a);
  e = ts(a, d);
  c[e + 4] = d & 65535;
  c[e] = f;
  c[e + 1] = g;
  c[e + 2] = h;
  c[e + 3] = j;
  f = ((c[a + 15] & 65535) << 1) & 65535;
  g = 0;
  h = 3 > ((g & 65535) | 0);
  a: do {
    if (h) {
      for (
        var j = a + 17,
          n = a + 19,
          p = a + 19,
          r = a + 19,
          s = a + 19,
          t = a + 19,
          w = a + 19;
        ;

      ) {
        var x = c[j] + (g & 65535) + 16;
        c[x] = ((c[x] & 65535) + 2) & 65535;
        var x = (((f & 65535) + 1) << 1) + c[n + (g & 65535)],
          y = (((f & 65535) - 1) << 1) + c[p + (g & 65535)];
        c[x] = c[y];
        k[x] = k[y];
        c[x + 1] = c[y + 1];
        k[x + 1] = k[y + 1];
        c[(((f & 65535) - 1) << 1) + c[r + (g & 65535)]] = c[l + (g & 65535)];
        c[(((f & 65535) - 1) << 1) + c[s + (g & 65535)] + 1] = d;
        c[((f & 65535) << 1) + c[t + (g & 65535)]] = c[m + (g & 65535)];
        c[((f & 65535) << 1) + c[w + (g & 65535)] + 1] = d;
        c[e + (g & 65535) + 13] = ((f & 65535) - 1) & 65535;
        c[e + (g & 65535) + 16] = f;
        g += 1;
        if (3 <= ((g & 65535) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  us(a, 0, c[e + 13], i, 0);
  vs(a, 0, c[e + 16], i, 0);
  us(a, 1, c[e + 14], i, 0);
  vs(a, 1, c[e + 17], i, 0);
  us(a, 2, c[e + 15], i, 1);
  vs(a, 2, c[e + 18], i, 1);
  b = l;
  return d;
}
rs.X = 1;
function lia(a, d, e, f) {
  ss(a, d, e, f);
}
lia.X = 1;
function ws(a, d) {
  var e = qs(116);
  xs(e, a, d, 16384, 0, 0);
  return e;
}
ws.X = 1;
function ys(a, d, e) {
  var f = qs(116);
  xs(f, a, d, e, 0, 0);
  return f;
}
ys.X = 1;
function zs(a, d, e, f) {
  var g = qs(116);
  xs(g, a, d, e, f, 0);
  return g;
}
zs.X = 1;
function As(a, d, e, f, g) {
  var g = g & 1,
    h = qs(116);
  xs(h, a, d, e, f, g & 1);
  return h;
}
As.X = 1;
function Bs(a) {
  return c[a + 26];
}
Bs.X = 1;
function Cs(a, d, e) {
  var f;
  $2 = a;
  var g = (a = 0);
  a: for (;;) {
    if (3 > (g | 0)) {
      g = ((c[d + (a + 16)] & 65535) | 0) < ((c[e + (a + 13)] & 65535) | 0);
      do {
        if (
          !g &&
          ((c[e + (a + 16)] & 65535) | 0) >= ((c[d + (a + 13)] & 65535) | 0)
        ) {
          a = g = a + 1;
          continue a;
        }
      } while (0);
      f = 0;
      break;
    }
    f = 1;
    break;
  }
  return f;
}
Cs.X = 1;
function Ds(a, d) {
  c[a + 26] = d;
}
Ds.X = 1;
function ss(a, d, e, f) {
  var g = b;
  b += 8;
  var h = g + 4;
  N(h, e, a + 3);
  ig(g, h, a + 11);
  c[d] =
    0 >= k[g]
      ? f & 65535
      : k[g] >= ((c[a + 2] & 65535) | 0)
        ? ((c[a + 1] & 65535 & c[a + 2] & 65535) | f) & 65535
        : ((Math.floor(k[g]) & 65535 & c[a + 1] & 65535) | f) & 65535;
  c[d + 1] =
    0 >= k[g + 1]
      ? f & 65535
      : k[g + 1] >= ((c[a + 2] & 65535) | 0)
        ? ((c[a + 1] & 65535 & c[a + 2] & 65535) | f) & 65535
        : ((Math.floor(k[g + 1]) & 65535 & c[a + 1] & 65535) | f) & 65535;
  c[d + 2] =
    0 >= k[g + 2]
      ? f & 65535
      : k[g + 2] >= ((c[a + 2] & 65535) | 0)
        ? ((c[a + 1] & 65535 & c[a + 2] & 65535) | f) & 65535
        : ((Math.floor(k[g + 2]) & 65535 & c[a + 1] & 65535) | f) & 65535;
  b = g;
}
ss.X = 1;
function mia(a, d, e) {
  Es(a, d, e);
}
mia.X = 1;
function Es(a, d, e) {
  var f, g, h, i, j;
  f = ts(a, d);
  g = c[a + 25];
  v[c[c[g] + 14]](g) || ((g = c[a + 25]), v[c[c[g] + 4]](g, f, e));
  g = (c[a + 15] & 65535) << 1;
  h = 0;
  for (var l = a + 17; ; ) {
    var m = c[l] + h + 16;
    c[m] = ((c[m] & 65535) - 2) & 65535;
    h = m = h + 1;
    if (3 <= (m | 0)) {
      break;
    }
  }
  h = 0;
  for (
    var l = a + 19, m = a + 2, n = a + 2, p = a + 2;
    !((i = c[l + h]),
    (j = c[f + (h + 16)]),
    (c[((j & 65535) << 1) + i] = c[m]),
    Fs(a, h, j, e, 0),
    (j = c[f + (h + 13)]),
    (c[((j & 65535) << 1) + i] = c[n]),
    Gs(a, h, j, e, 0),
    (c[((g - 1) << 1) + i + 1] = 0),
    (c[((g - 1) << 1) + i] = c[p]),
    (h = i = h + 1),
    3 <= (i | 0));

  ) {}
  nia(a, d);
}
Es.X = 1;
function oia(a) {
  return Bs(a);
}
oia.X = 1;
function pia(a, d) {
  qia(a, d);
}
pia.X = 1;
function Hs(a, d, e, f) {
  var g = b;
  b += 14;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = c[c[a] + 6];
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  v[r](a, d, e, f, g, l);
  b = g;
}
Hs.X = 1;
function Is(a, d, e, f, g) {
  var h = b;
  b += 7;
  var i = h + 4,
    j = h + 5,
    l = h + 6,
    m = c[c[a] + 6];
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  v[m](a, d, e, f, g, h);
  b = h;
}
Is.X = 1;
function Js(a, d, e, f, g, h) {
  v[c[c[a] + 6]](a, d, e, f, g, h);
}
Js.X = 1;
function Ks(a, d, e, f, g) {
  v[c[c[a] + 4]](a, d, e, f, g);
}
Ks.X = 1;
function Ls(a, d) {
  v[c[c[a] + 12]](a, d);
}
Ls.X = 1;
function ria(a, d, e) {
  return Cs(a, d, e);
}
ria.X = 1;
function Ms(a, d, e, f) {
  v[c[c[a] + 5]](a, d, e, f);
}
Ms.X = 1;
function sia(a, d, e, f, g) {
  Ns(a, d, e, f, g);
}
sia.X = 1;
function Ns(a, d, e, f, g) {
  var h = b;
  b += 6;
  var i = h + 3,
    j,
    l,
    m,
    n,
    d = ts(a, d);
  ss(a, h, e, 0);
  ss(a, i, f, 1);
  for (
    var e = 0, f = a + 19, p = a + 19, r = a + 19, s = a + 19;
    !((j = c[d + (e + 13)]),
    (l = c[d + (e + 16)]),
    (m = (c[h + e] & 65535) - (c[((j & 65535) << 1) + c[f + e]] & 65535)),
    (n = (c[i + e] & 65535) - (c[((l & 65535) << 1) + c[p + e]] & 65535)),
    (c[((j & 65535) << 1) + c[r + e]] = c[h + e]),
    (c[((l & 65535) << 1) + c[s + e]] = c[i + e]),
    0 > (m | 0) && us(a, e, j, g, 1),
    0 < (n | 0) && Fs(a, e, l, g, 1),
    0 < (m | 0) && Gs(a, e, j, g, 1),
    0 > (n | 0) && vs(a, e, l, g, 1),
    (e = j = e + 1),
    3 <= (j | 0));

  ) {}
  b = h;
}
Ns.X = 1;
function Os(a) {
  v[c[c[a] + 13]](a);
}
Os.X = 1;
function Ps(a, d, e, f, g, h, i, j, l) {
  return v[c[c[a] + 2]](a, d, e, f, g, h, i, j, l);
}
Ps.X = 1;
function Qs(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Qs.X = 1;
function tia(a, d) {
  Ds(a, d);
}
tia.X = 1;
function Rs(a, d) {
  v[c[c[a] + 8]](a, d);
}
Rs.X = 1;
function Ss(a) {
  return v[c[c[a] + 9]](a);
}
Ss.X = 1;
function uia(a, d, e, f) {
  Ts(a, d, e, f);
}
uia.X = 1;
function ts(a, d) {
  return c[a + 17] + 20 * (d & 65535);
}
ts.X = 1;
function via(a, d) {
  c[a] = d;
}
via.X = 1;
function wia(a) {
  return c[a];
}
wia.X = 1;
function Us(a, d) {
  c[a + 1] = d;
}
Us.X = 1;
function Vs(a) {
  return c[a + 1];
}
Vs.X = 1;
function Ws(a) {
  return c[a + 64] & 1;
}
Ws.X = 1;
function xia(a, d) {
  c[a + 64] = d & 1;
}
xia.X = 1;
function Ts(a, d, e, f) {
  var g = b;
  b += 12;
  var h = g + 3,
    i = g + 6,
    j = g + 7,
    l = g + 8,
    m = g + 9,
    n = g + 10,
    p = g + 11;
  c[g] = c[((c[d + 13] & 65535) << 1) + c[a + 19]];
  c[h] = ((c[((c[d + 16] & 65535) << 1) + c[a + 19]] & 65535) + 1) & 65535;
  c[g + 1] = c[((c[d + 14] & 65535) << 1) + c[a + 20]];
  c[h + 1] = ((c[((c[d + 17] & 65535) << 1) + c[a + 20]] & 65535) + 1) & 65535;
  c[g + 2] = c[((c[d + 15] & 65535) << 1) + c[a + 21]];
  c[h + 2] = ((c[((c[d + 18] & 65535) << 1) + c[a + 21]] & 65535) + 1) & 65535;
  k[i] = (c[g] & 65535) / k[a + 11];
  k[j] = (c[g + 1] & 65535) / k[a + 11 + 1];
  k[l] = (c[g + 2] & 65535) / k[a + 11 + 2];
  pe(e, i, j, l);
  xn(e, a + 3);
  k[m] = (c[h] & 65535) / k[a + 11];
  k[n] = (c[h + 1] & 65535) / k[a + 11 + 1];
  k[p] = (c[h + 2] & 65535) / k[a + 11 + 2];
  pe(f, m, n, p);
  xn(f, a + 3);
  b = g;
}
Ts.X = 1;
function Xs(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Xs.X = 1;
function Ys(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
Ys.X = 1;
function Zs(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
Zs.X = 1;
function yia(a, d) {
  return ts(a, d);
}
yia.X = 1;
function at(a) {
  0 != (a | 0) && xe(a);
}
at.X = 1;
function bt() {
  var a = xb(8);
  ct(a);
  return a;
}
bt.X = 1;
function dt(a) {
  var d = xb(8);
  c[d] = a;
  return d;
}
dt.X = 1;
function et(a, d) {
  v[c[c[a] + 17]](a, d);
}
et.X = 1;
function ft(a, d) {
  v[c[c[a] + 15]](a, d);
}
ft.X = 1;
function zia(a) {
  return a + 27;
}
zia.X = 1;
function gt(a) {
  return v[c[c[a] + 4]](a);
}
gt.X = 1;
function ht(a) {
  v[c[c[a] + 41]](a);
}
ht.X = 1;
function it(a, d) {
  v[c[c[a] + 11]](a, d);
}
it.X = 1;
function Aia(a) {
  return Sk(a);
}
Aia.X = 1;
function Bia(a) {
  return a;
}
Bia.X = 1;
function jt(a, d) {
  v[c[c[a] + 20]](a, d);
}
jt.X = 1;
function kt(a, d, e, f) {
  v[c[c[a] + 21]](a, d, e, f);
}
kt.X = 1;
function lt(a) {
  v[c[c[a] + 29]](a);
}
lt.X = 1;
function mt(a, d) {
  v[c[c[a] + 31]](a, d);
}
mt.X = 1;
function nt(a, d, e, f) {
  var g = xb(268);
  ot(g, a, d, e, f);
  return g;
}
nt.X = 1;
function Cia(a, d) {
  Tk(a, d);
}
Cia.X = 1;
function Dia(a) {
  return Ws(a);
}
Dia.X = 1;
function pt(a, d) {
  v[c[c[a] + 42]](a, d);
}
pt.X = 1;
function qt(a, d) {
  xia(a, d & 1);
}
qt.X = 1;
function Eia(a) {
  return a + 1;
}
Eia.X = 1;
function rt(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
rt.X = 1;
function st(a, d) {
  v[c[c[a] + 14]](a, d);
}
st.X = 1;
function tt(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
tt.X = 1;
function ut(a) {
  return v[c[c[a] + 25]](a);
}
ut.X = 1;
function vt(a, d) {
  v[c[c[a] + 8]](a, d, 2, -3);
}
vt.X = 1;
function wt(a, d, e) {
  v[c[c[a] + 8]](a, d, e, -3);
}
wt.X = 1;
function xt(a, d, e, f) {
  v[c[c[a] + 8]](a, d, e, f);
}
xt.X = 1;
function yt(a, d) {
  v[c[c[a] + 22]](a, d);
}
yt.X = 1;
function Fia(a, d, e) {
  Jl(a, d, e);
}
Fia.X = 1;
function zt(a) {
  v[c[c[a] + 10]](a);
}
zt.X = 1;
function At(a, d) {
  Uk(a, d, 0, 0);
}
At.X = 1;
function Bt(a, d, e) {
  Uk(a, d, e, 0);
}
Bt.X = 1;
function Ct(a, d, e, f) {
  Uk(a, d, e, f & 1);
}
Ct.X = 1;
function Gia(a) {
  return Vk(a);
}
Gia.X = 1;
function Dt(a) {
  v[c[c[a] + 2]](a);
}
Dt.X = 1;
function Et(a, d) {
  v[c[c[a] + 3]](a, d);
}
Et.X = 1;
function Hia(a, d) {
  Ft(a, d);
}
Hia.X = 1;
function Gt(a) {
  v[c[c[a] + 5]](a);
}
Gt.X = 1;
function Ht(a, d, e, f, g) {
  Rl(a, d, e, f, g, 0);
}
Ht.X = 1;
function Iia(a, d, e, f, g, h) {
  Rl(a, d, e, f, g, h);
}
Iia.X = 1;
function Jia(a) {
  return Sl(a);
}
Jia.X = 1;
function Kia(a, d) {
  cm(a, d);
}
Kia.X = 1;
function It(a, d) {
  v[c[c[a] + 13]](a, d, 0);
}
It.X = 1;
function Jt(a, d, e) {
  v[c[c[a] + 13]](a, d, e & 1);
}
Jt.X = 1;
function Lia(a) {
  return dm(a);
}
Lia.X = 1;
function Mia(a, d, e, f) {
  Xl(a, d, e, f);
}
Mia.X = 1;
function Kt(a) {
  return c[a + 46];
}
Kt.X = 1;
function Lt(a) {
  return c[a + 8];
}
Lt.X = 1;
function Mt(a) {
  return c[a + 7];
}
Mt.X = 1;
function Nt(a) {
  return c[a + 132] & 1;
}
Nt.X = 1;
function Ot(a, d) {
  c[a + 4] = d;
}
Ot.X = 1;
function Pt(a) {
  return k[a + 111];
}
Pt.X = 1;
function Qt(a) {
  return k[a + 110];
}
Qt.X = 1;
function Rt(a) {
  return c[a + 4];
}
Rt.X = 1;
function St(a, d) {
  k[a + 109] = d;
}
St.X = 1;
function Tt(a) {
  return k[a + 127];
}
Tt.X = 1;
function Ut(a, d) {
  k[a + 146] = d;
  c[a + 141] = 1;
}
Ut.X = 1;
function Vt(a) {
  return c[a + 131] & 1;
}
Vt.X = 1;
function Nia(a, d) {
  c[a + 140] = d & 1;
}
Nia.X = 1;
function Wt(a) {
  var d = b;
  b += 4;
  0 == (c[Xt] << 24) >> 24 && Hb(Xt);
  v[c[c[a] + 18]](d, a);
  c[Yt] = c[d];
  k[Yt] = k[d];
  c[Yt + 1] = c[d + 1];
  k[Yt + 1] = k[d + 1];
  c[Yt + 2] = c[d + 2];
  k[Yt + 2] = k[d + 2];
  c[Yt + 3] = c[d + 3];
  k[Yt + 3] = k[d + 3];
  b = d;
  return Yt;
}
Wt.X = 1;
function Oia(a) {
  return am(a);
}
Oia.X = 1;
function Pia(a, d, e, f, g, h) {
  mm(a, d, e, f, g, h);
}
Pia.X = 1;
function Zt(a, d) {
  v[c[c[a] + 16]](a, d);
}
Zt.X = 1;
function $t(a, d) {
  bm(a, d & 1);
}
$t.X = 1;
function au(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
au.X = 1;
function bu(a, d) {
  v[c[c[a] + 33]](a, d);
}
bu.X = 1;
function cu(a, d) {
  return v[c[c[a] + 26]](a, d);
}
cu.X = 1;
function du(a) {
  return v[c[c[a] + 24]](a);
}
du.X = 1;
function eu(a, d) {
  return v[c[c[a] + 12]](a, d, 1, 0.01666666753590107);
}
eu.X = 1;
function fu(a, d, e) {
  return v[c[c[a] + 12]](a, d, e, 0.01666666753590107);
}
fu.X = 1;
function gu(a, d, e, f) {
  return v[c[c[a] + 12]](a, d, e, f);
}
gu.X = 1;
function hu(a, d) {
  v[c[c[a] + 32]](a, d);
}
hu.X = 1;
function iu(a) {
  return v[c[c[a] + 28]](a);
}
iu.X = 1;
function Qia(a, d) {
  ym(a, d);
}
Qia.X = 1;
function ju(a, d) {
  v[c[c[a] + 43]](a, d);
}
ju.X = 1;
function Ria(a, d) {
  ku(a, d);
}
Ria.X = 1;
function lu(a, d) {
  v[c[c[a] + 30]](a, d);
}
lu.X = 1;
function Sia(a) {
  return Am(a);
}
Sia.X = 1;
function mu(a) {
  v[c[c[a] + 19]](a);
}
mu.X = 1;
function Tia(a) {
  return Kt(a);
}
Tia.X = 1;
function nu(a, d) {
  v[c[c[a] + 9]](a, d);
}
nu.X = 1;
function ou(a, d) {
  v[c[c[a] + 23]](a, d);
}
ou.X = 1;
function Uia(a, d, e, f, g, h, i, j) {
  Dm(a, d, e, f, g, h, i, j);
}
Uia.X = 1;
function Via(a) {
  return a + 7;
}
Via.X = 1;
function pu(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
pu.X = 1;
function Wia(a) {
  return Lt(a);
}
Wia.X = 1;
function qu(a) {
  v[c[c[a] + 2]](a);
}
qu.X = 1;
function Xia(a) {
  return Mt(a);
}
Xia.X = 1;
function Yia(a) {
  return Nt(a);
}
Yia.X = 1;
function ru(a, d) {
  Hp(a, d & 1);
}
ru.X = 1;
function Zia(a) {
  return a + 74;
}
Zia.X = 1;
function $ia(a) {
  return a + 90;
}
$ia.X = 1;
function aja(a) {
  return Pt(a);
}
aja.X = 1;
function bja(a) {
  return Qt(a);
}
bja.X = 1;
function cja(a, d, e, f, g) {
  su(a, d, e, f, g);
}
cja.X = 1;
function tu(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
tu.X = 1;
function uu(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
uu.X = 1;
function vu(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
vu.X = 1;
function wu(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
wu.X = 1;
function dja(a, d) {
  St(a, d);
}
dja.X = 1;
function xu(a, d) {
  v[c[c[a] + 4]](a, d);
}
xu.X = 1;
function yu(a, d) {
  v[c[c[a] + 5]](a, d);
}
yu.X = 1;
function eja(a, d) {
  zp(a, d);
}
eja.X = 1;
function zu(a, d) {
  var e = xb(600);
  Au(e, a, d);
  return e;
}
zu.X = 1;
function Bu(a, d, e, f) {
  var g = xb(600);
  Cu(g, a, d, e, f);
  return g;
}
Bu.X = 1;
function fja(a, d) {
  Du(a, d);
}
fja.X = 1;
function Eu(a) {
  return v[c[c[a] + 9]](a);
}
Eu.X = 1;
function gja(a, d) {
  Pp(a, d);
}
gja.X = 1;
function hja(a) {
  return Ap(a);
}
hja.X = 1;
function ija(a, d) {
  Bp(a, d);
}
ija.X = 1;
function jja(a) {
  return Cp(a);
}
jja.X = 1;
function kja(a) {
  return Tt(a);
}
kja.X = 1;
function lja(a, d) {
  Ut(a, d);
}
lja.X = 1;
function Fu(a, d) {
  Ko(a, d & 1);
}
Fu.X = 1;
function mja(a, d) {
  Ep(a, d);
}
mja.X = 1;
function nja(a) {
  return Fp(a);
}
nja.X = 1;
function Gu(a) {
  return c[a + 4];
}
Gu.X = 1;
function oja(a) {
  return Vt(a);
}
oja.X = 1;
function pja(a) {
  return Gp(a);
}
pja.X = 1;
function Hu(a, d) {
  Nia(a, d & 1);
}
Hu.X = 1;
function sja(a) {
  return a + 90;
}
sja.X = 1;
function tja(a, d) {
  Iu(0, d);
}
tja.X = 1;
function Ju(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
Ju.X = 1;
function uja(a) {
  return Ip(a);
}
uja.X = 1;
function vja(a) {
  return Dp(a);
}
vja.X = 1;
function Ku(a) {
  return k[a + 113];
}
Ku.X = 1;
function Lu(a) {
  return c[a + 131] & 1;
}
Lu.X = 1;
function wja(a, d) {
  c[a + 130] = d & 1;
}
wja.X = 1;
function Mu(a, d, e) {
  3 == (d | 0)
    ? (k[a + 112] = e)
    : 4 == (d | 0) ? (k[a + 111] = e) : 5 == (d | 0) && (k[a + 110] = e);
}
Mu.X = 1;
function Nu(a, d, e, f, g, h, i) {
  k[a + 110] = d;
  k[a + 111] = e;
  k[a + 112] = f;
  k[a + 106] = g;
  k[a + 107] = h;
  k[a + 108] = i;
}
Nu.X = 1;
function Ou(a) {
  return k[a + 124];
}
Ou.X = 1;
function Pu(a, d) {
  k[a + 146] = d;
  c[a + 141] = 0;
}
Pu.X = 1;
function Qu(a, d) {
  k[a + 113] = d;
}
Qu.X = 1;
function Ru(a) {
  return k[a + 112];
}
Ru.X = 1;
function Su(a) {
  return c[a + 8];
}
Su.X = 1;
function Tu(a) {
  return c[a + 7];
}
Tu.X = 1;
function Uu(a, d) {
  c[a + 4] = d;
}
Uu.X = 1;
function Vu(a) {
  return k[a + 169];
}
Vu.X = 1;
function Wu(a, d) {
  k[a + 170] = d;
}
Wu.X = 1;
function Xu(a) {
  return c[a + 4];
}
Xu.X = 1;
function xja(a, d, e, f) {
  c[a + 184] = d & 1;
  k[a + 169] = e;
  k[a + 170] = f;
}
xja.X = 1;
function Yu(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Yu.X = 1;
function yja(a, d) {
  Jp(a, d);
}
yja.X = 1;
function zja(a) {
  return Ku(a);
}
zja.X = 1;
function Aja(a) {
  return Lu(a);
}
Aja.X = 1;
function Bja(a, d) {
  Kp(a, d);
}
Bja.X = 1;
function Cja(a) {
  return Lp(a);
}
Cja.X = 1;
function Zu(a, d) {
  wja(a, d & 1);
}
Zu.X = 1;
function dv(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
dv.X = 1;
function Dja(a, d, e) {
  Mu(a, d, e);
}
Dja.X = 1;
function ev(a, d, e, f) {
  Nu(a, d, e, f, 1, 0.30000001192092896, 1);
}
ev.X = 1;
function fv(a, d, e, f, g) {
  Nu(a, d, e, f, g, 0.30000001192092896, 1);
}
fv.X = 1;
function gv(a, d, e, f, g, h) {
  Nu(a, d, e, f, g, h, 1);
}
gv.X = 1;
function Eja(a, d, e, f, g, h, i) {
  Nu(a, d, e, f, g, h, i);
}
Eja.X = 1;
function Fja(a) {
  return Op(a);
}
Fja.X = 1;
function Gja(a) {
  return Ou(a);
}
Gja.X = 1;
function Hja(a, d) {
  Pu(a, d);
}
Hja.X = 1;
function hv(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
hv.X = 1;
function Ija(a) {
  return Lo(a);
}
Ija.X = 1;
function Jja() {}
Jja.X = 1;
function Kja(a, d, e, f, g, h) {
  iv(a, d, e, f, g, h);
}
Kja.X = 1;
function Lja(a, d) {
  Qu(a, d);
}
Lja.X = 1;
function Mja(a, d) {
  jv(a, d);
}
Mja.X = 1;
function Nja(a) {
  return Mp(a);
}
Nja.X = 1;
function Oja(a) {
  return Np(a);
}
Oja.X = 1;
function kv(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
kv.X = 1;
function lv(a, d, e) {
  var f = b;
  b += 4;
  0 == (c[mv] << 24) >> 24 && Hb(mv);
  nv(f, a, d, e);
  c[ov] = c[f];
  k[ov] = k[f];
  c[ov + 1] = c[f + 1];
  k[ov + 1] = k[f + 1];
  c[ov + 2] = c[f + 2];
  k[ov + 2] = k[f + 2];
  c[ov + 3] = c[f + 3];
  k[ov + 3] = k[f + 3];
  b = f;
  return ov;
}
lv.X = 1;
function Pja(a) {
  pv(a);
}
Pja.X = 1;
function Qja(a) {
  return Ru(a);
}
Qja.X = 1;
function Rja(a) {
  return a + 74;
}
Rja.X = 1;
function Sja(a) {
  return Su(a);
}
Sja.X = 1;
function Tja(a, d, e, f, g, h) {
  qv(a, d, e, f, g, h);
}
Tja.X = 1;
function Uja(a) {
  return Tu(a);
}
Uja.X = 1;
function Vja(a) {
  return Vu(a);
}
Vja.X = 1;
function Wja(a) {
  return a + 137;
}
Wja.X = 1;
function Xja(a) {
  return a + 153;
}
Xja.X = 1;
function rv(a) {
  v[c[c[a] + 2]](a);
}
rv.X = 1;
function Yja(a, d) {
  Wu(a, d);
}
Yja.X = 1;
function Zja(a) {
  return sv(a);
}
Zja.X = 1;
function $ja(a, d, e) {
  return tv(a, d, e);
}
$ja.X = 1;
function aka(a, d, e) {
  uv(a, d, e);
}
aka.X = 1;
function vv(a, d) {
  v[c[c[a] + 4]](a, d);
}
vv.X = 1;
function bka(a, d, e, f, g, h) {
  wv(a, d, e, f, g, h);
}
bka.X = 1;
function xv(a, d) {
  v[c[c[a] + 5]](a, d);
}
xv.X = 1;
function cka(a) {
  return yv(a);
}
cka.X = 1;
function yv(a) {
  return Bj(a + 171);
}
yv.X = 1;
function zv(a, d, e, f) {
  xja(a, d & 1, e, f);
}
zv.X = 1;
function dka(a) {
  return Av(a);
}
dka.X = 1;
function Av(a) {
  return Xi(a + 171);
}
Av.X = 1;
function Bv(a, d, e) {
  var f = xb(756);
  Cv(f, a, d, e, 0);
  return f;
}
Bv.X = 1;
function Dv(a, d, e, f) {
  var f = f & 1,
    g = xb(756);
  Cv(g, a, d, e, f & 1);
  return g;
}
Dv.X = 1;
function Ev(a, d, e, f, g, h) {
  var i = xb(756);
  Fv(i, a, d, e, f, g, h, 0);
  return i;
}
Ev.X = 1;
function Gv(a) {
  return k[a + 170];
}
Gv.X = 1;
function eka(a, d) {
  c[a + 186] = d & 1;
}
eka.X = 1;
function Hv(a) {
  return c[a + 184] & 1;
}
Hv.X = 1;
function fka(a, d) {
  c[a + 184] = d & 1;
}
fka.X = 1;
function Iv(a) {
  return c[a + 186] & 1;
}
Iv.X = 1;
function gka(a, d) {
  c[a + 183] = d & 1;
}
gka.X = 1;
function Jv(a) {
  return c[a + 183] & 1;
}
Jv.X = 1;
function hka(a, d) {
  k[a] = d;
}
hka.X = 1;
function Kv(a, d) {
  k[a + 12] = d;
}
Kv.X = 1;
function Lv(a, d) {
  k[a + 4] = d;
}
Lv.X = 1;
function Mv(a) {
  var d;
  0 == (c[a + 14] | 0)
    ? 0 != ((c[a + 11] & 1) | 0) ? (a = 5) : ((d = 0), (a = 6))
    : (a = 5);
  5 == a && (d = 1);
  return d;
}
Mv.X = 1;
function Nv(a, d) {
  k[a + 13] = d;
}
Nv.X = 1;
function Ov(a) {
  return k[a + 8];
}
Ov.X = 1;
function Pv(a, d) {
  k[a + 8] = d;
}
Pv.X = 1;
function Qv(a, d) {
  k[a + 9] = d;
}
Qv.X = 1;
function Rv(a, d, e, f, g, h, i) {
  var i = i & 1,
    j = xb(756);
  Fv(j, a, d, e, f, g, h, i & 1);
  return j;
}
Rv.X = 1;
function ika(a) {
  return Ap(a);
}
ika.X = 1;
function jka(a, d) {
  Bp(a, d);
}
jka.X = 1;
function Sv(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
Sv.X = 1;
function Tv(a, d) {
  Hp(a, d & 1);
}
Tv.X = 1;
function kka(a) {
  return Cp(a);
}
kka.X = 1;
function Uv(a, d) {
  Ko(a, d & 1);
}
Uv.X = 1;
function lka(a, d) {
  Pp(a, d);
}
lka.X = 1;
function mka(a) {
  return Gv(a);
}
mka.X = 1;
function nka(a) {
  return Vv(a);
}
nka.X = 1;
function Vv(a) {
  return Dj(a + 171);
}
Vv.X = 1;
function Wv(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
Wv.X = 1;
function Xv(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Xv.X = 1;
function Yv(a, d) {
  eka(a, d & 1);
}
Yv.X = 1;
function oka(a) {
  return Hv(a);
}
oka.X = 1;
function pka(a) {
  return Fp(a);
}
pka.X = 1;
function Zv(a) {
  return c[a + 4];
}
Zv.X = 1;
function qka(a) {
  return Gp(a);
}
qka.X = 1;
function $v(a, d) {
  fka(a, d & 1);
}
$v.X = 1;
function rka(a) {
  return a + 153;
}
rka.X = 1;
function ska(a, d) {
  aw(a, d);
}
ska.X = 1;
function tka(a, d, e, f, g, h) {
  bw(a, d, e, f, g, h);
}
tka.X = 1;
function uka(a) {
  return Ip(a);
}
uka.X = 1;
function vka(a) {
  return Dp(a);
}
vka.X = 1;
function cw(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
cw.X = 1;
function wka(a, d) {
  Jp(a, d);
}
wka.X = 1;
function xka(a) {
  return Iv(a);
}
xka.X = 1;
function yka(a, d) {
  Kp(a, d);
}
yka.X = 1;
function zka(a, d) {
  Ep(a, d);
}
zka.X = 1;
function Aka(a, d) {
  zp(a, d);
}
Aka.X = 1;
function dw(a) {
  return v[c[c[a] + 9]](a);
}
dw.X = 1;
function Bka(a) {
  return Lp(a);
}
Bka.X = 1;
function ew(a, d) {
  gka(a, d & 1);
}
ew.X = 1;
function fw(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
fw.X = 1;
function gw(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
gw.X = 1;
function hw(a, d, e) {
  iw(a, d, e, 0.8999999761581421, 0.30000001192092896, 1);
}
hw.X = 1;
function iw(a, d, e, f, g, h) {
  yj(a + 171, d, e, f, g, h);
}
iw.X = 1;
function jw(a, d, e, f) {
  iw(a, d, e, f, 0.30000001192092896, 1);
}
jw.X = 1;
function kw(a, d, e, f, g) {
  iw(a, d, e, f, g, 1);
}
kw.X = 1;
function Cka(a, d, e, f, g, h) {
  iw(a, d, e, f, g, h);
}
Cka.X = 1;
function Dka(a) {
  return lw(a);
}
Dka.X = 1;
function lw(a) {
  return Vi(a + 171) & 1;
}
lw.X = 1;
function mw(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
mw.X = 1;
function nw(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
nw.X = 1;
function Eka(a) {
  return Lo(a);
}
Eka.X = 1;
function Fka() {}
Fka.X = 1;
function Gka(a, d, e) {
  ow(a, d, e);
}
Gka.X = 1;
function Hka(a) {
  return Mp(a);
}
Hka.X = 1;
function Ika(a) {
  return Np(a);
}
Ika.X = 1;
function Jka(a) {
  return Jv(a);
}
Jka.X = 1;
function Kka(a, d, e) {
  pw(a, d, e);
}
Kka.X = 1;
function Lka(a) {
  return Op(a);
}
Lka.X = 1;
function Mka(a, d) {
  qw(a, d);
}
Mka.X = 1;
function qw(a, d) {
  var e = b;
  b += 76;
  var f = e + 4,
    g = e + 8,
    h = e + 12,
    i = e + 16,
    j = e + 20,
    l = e + 24,
    m = e + 28,
    n = e + 32,
    p = e + 48,
    r = e + 52,
    s = e + 64;
  rw(d, e, f);
  var t = a + 137 + 12;
  c[g] = c[t];
  k[g] = k[t];
  c[g + 1] = c[t + 1];
  k[g + 1] = k[t + 1];
  c[g + 2] = c[t + 2];
  k[g + 2] = k[t + 2];
  c[g + 3] = c[t + 3];
  k[g + 3] = k[t + 3];
  Db(a + 137, e, f, d, e + 1, f + 1, d + 1, e + 2, f + 2, d + 2);
  Bo(h, c[a + 7] + 1, d);
  sw(i, d, h);
  tw(j, i, e);
  qn(l, h, j);
  f = a + 153 + 12;
  uw(n, c[a + 8] + 1);
  vw(p, c[a + 7] + 1, g);
  vw(m, n, p);
  c[f] = c[m];
  k[f] = k[m];
  c[f + 1] = c[m + 1];
  k[f + 1] = k[m + 1];
  c[f + 2] = c[m + 2];
  k[f + 2] = k[m + 2];
  c[f + 3] = c[m + 3];
  k[f + 3] = k[m + 3];
  Db(a + 153, j, l, h, j + 1, l + 1, h + 1, j + 2, l + 2, h + 2);
  g = a + 153;
  Bc(s, c[a + 8] + 1);
  ww(r, s, a + 153);
  Wb(g, r);
  b = e;
}
qw.X = 1;
function Nka(a) {
  return a + 137;
}
Nka.X = 1;
function Oka(a) {
  return Mv(a);
}
Oka.X = 1;
function Pka(a, d, e, f, g, h) {
  return xw(a, d, e, f, g, h);
}
Pka.X = 1;
function yw(a) {
  return k[a + 13];
}
yw.X = 1;
function zw(a) {
  return k[a + 9];
}
zw.X = 1;
function Aw(a) {
  return c[a + 11] & 1;
}
Aw.X = 1;
function Bw(a, d) {
  c[a + 11] = d & 1;
}
Bw.X = 1;
function Cw(a) {
  return k[a + 12];
}
Cw.X = 1;
function Dw(a, d) {
  k[a + 6] = d;
}
Dw.X = 1;
function Qka(a) {
  return k[a];
}
Qka.X = 1;
function Ew(a) {
  return c[a + 14];
}
Ew.X = 1;
function Fw(a, d) {
  k[a + 1] = d;
}
Fw.X = 1;
function Gw(a) {
  return k[a + 10];
}
Gw.X = 1;
function Hw(a) {
  return k[a + 2];
}
Hw.X = 1;
function Iw(a) {
  return k[a + 15];
}
Iw.X = 1;
function Jw(a, d) {
  k[a + 5] = d;
}
Jw.X = 1;
function Kw(a, d) {
  k[a + 3] = d;
}
Kw.X = 1;
function Lw(a, d) {
  k[a + 7] = d;
}
Lw.X = 1;
function Mw(a) {
  return k[a + 4];
}
Mw.X = 1;
function Nw(a) {
  return k[a + 5];
}
Nw.X = 1;
function Ow(a) {
  return k[a + 7];
}
Ow.X = 1;
function Pw(a) {
  return k[a + 1];
}
Pw.X = 1;
function Qw(a, d) {
  k[a + 15] = d;
}
Qw.X = 1;
function Rw(a, d) {
  k[a + 2] = d;
}
Rw.X = 1;
function Sw(a) {
  return k[a] > k[a + 1] ? 0 : 1;
}
Sw.X = 1;
function Tw(a) {
  return k[a + 3];
}
Tw.X = 1;
function Uw(a, d) {
  c[a + 14] = d;
}
Uw.X = 1;
function Vw(a, d) {
  k[a + 10] = d;
}
Vw.X = 1;
function Ww(a) {
  return k[a + 6];
}
Ww.X = 1;
function Xw(a) {
  return k[a + 14];
}
Xw.X = 1;
function Yw(a) {
  return k[a + 15];
}
Yw.X = 1;
function Zw(a) {
  return c[a + 17];
}
Zw.X = 1;
function $w() {
  var a = xb(64);
  ax(a);
  return a;
}
$w.X = 1;
function bx(a) {
  var d = xb(64);
  Rka(d, a);
  return d;
}
bx.X = 1;
function Ska(a, d) {
  return cx(a, d);
}
Ska.X = 1;
function dx(a) {
  0 != (a | 0) && xe(a);
}
dx.X = 1;
function Tka(a) {
  return Sw(a);
}
Tka.X = 1;
function ex(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f);
}
ex.X = 1;
function fx(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
fx.X = 1;
function Uka(a) {
  return Ge(a);
}
Uka.X = 1;
function gx(a, d) {
  var e = b;
  b += 4;
  0 == (c[hx] << 24) >> 24 && Hb(hx);
  v[c[c[a] + 15]](e, a, d);
  c[ix] = c[e];
  k[ix] = k[e];
  c[ix + 1] = c[e + 1];
  k[ix + 1] = k[e + 1];
  c[ix + 2] = c[e + 2];
  k[ix + 2] = k[e + 2];
  c[ix + 3] = c[e + 3];
  k[ix + 3] = k[e + 3];
  b = e;
  return ix;
}
gx.X = 1;
function Vka(a, d) {
  Je(a, d);
}
Vka.X = 1;
function Wka(a) {
  return Le(a);
}
Wka.X = 1;
function jx(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
jx.X = 1;
function kx(a) {
  return v[c[c[a] + 7]](a);
}
kx.X = 1;
function lx(a) {
  return v[c[c[a] + 19]](a);
}
lx.X = 1;
function Xka(a) {
  return Ye(a);
}
Xka.X = 1;
function Yka(a) {
  return Xw(a);
}
Yka.X = 1;
function Zka(a, d, e, f) {
  df(a, d, e, f);
}
Zka.X = 1;
function mx(a) {
  return v[c[c[a] + 12]](a);
}
mx.X = 1;
function nx(a, d) {
  var e = Se(76);
  ox(e, a, d);
  return e;
}
nx.X = 1;
function px(a) {
  return v[c[c[a] + 9]](a);
}
px.X = 1;
function $ka(a) {
  return Yw(a);
}
$ka.X = 1;
function ala(a) {
  return a + 3;
}
ala.X = 1;
function qx(a, d) {
  var e = b;
  b += 4;
  0 == (c[rx] << 24) >> 24 && Hb(rx);
  kf(e, a, d);
  c[sx] = c[e];
  k[sx] = k[e];
  c[sx + 1] = c[e + 1];
  k[sx + 1] = k[e + 1];
  c[sx + 2] = c[e + 2];
  k[sx + 2] = k[e + 2];
  c[sx + 3] = c[e + 3];
  k[sx + 3] = k[e + 3];
  b = e;
  return sx;
}
qx.X = 1;
function tx(a, d) {
  var e = b;
  b += 4;
  0 == (c[ux] << 24) >> 24 && Hb(ux);
  v[c[c[a] + 16]](e, a, d);
  c[vx] = c[e];
  k[vx] = k[e];
  c[vx + 1] = c[e + 1];
  k[vx + 1] = k[e + 1];
  c[vx + 2] = c[e + 2];
  k[vx + 2] = k[e + 2];
  c[vx + 3] = c[e + 3];
  k[vx + 3] = k[e + 3];
  b = e;
  return vx;
}
tx.X = 1;
function bla(a, d) {
  wx(a, d);
}
bla.X = 1;
function xx(a, d) {
  v[c[c[a] + 6]](a, d);
}
xx.X = 1;
function yx(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
yx.X = 1;
function zx(a, d) {
  var e = b;
  b += 4;
  0 == (c[Ax] << 24) >> 24 && Hb(Ax);
  tf(e, a, d);
  c[Bx] = c[e];
  k[Bx] = k[e];
  c[Bx + 1] = c[e + 1];
  k[Bx + 1] = k[e + 1];
  c[Bx + 2] = c[e + 2];
  k[Bx + 2] = k[e + 2];
  c[Bx + 3] = c[e + 3];
  k[Bx + 3] = k[e + 3];
  b = e;
  return Bx;
}
zx.X = 1;
function Cx(a, d) {
  return v[c[c[a] + 5]](a, d);
}
Cx.X = 1;
function cla(a) {
  return xf(a);
}
cla.X = 1;
function dla(a) {
  return zf(a);
}
dla.X = 1;
function ela(a) {
  return Me(a);
}
ela.X = 1;
function fla(a) {
  return Bf(a);
}
fla.X = 1;
function Dx(a) {
  return v[c[c[a] + 11]](a);
}
Dx.X = 1;
function Ex(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
Ex.X = 1;
function Fx(a, d) {
  v[c[c[a] + 10]](a, d);
}
Fx.X = 1;
function gla(a) {
  return Gf(a);
}
gla.X = 1;
function hla(a, d) {
  Jf(a, d);
}
hla.X = 1;
function ila(a) {
  return Kf(a);
}
ila.X = 1;
function jla(a) {
  return Mf(a);
}
jla.X = 1;
function Gx(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Gx.X = 1;
function Hx(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
Hx.X = 1;
function kla(a) {
  return a + 7;
}
kla.X = 1;
function Ix(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
Ix.X = 1;
function Jx(a) {
  return v[c[c[a] + 4]](a);
}
Jx.X = 1;
function lla(a) {
  return Zw(a);
}
lla.X = 1;
function Kx(a, d) {
  v[c[c[a] + 14]](a, d);
}
Kx.X = 1;
function Lx(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
Lx.X = 1;
function mla(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
mla.X = 1;
function nla(a) {
  return Uf(a);
}
nla.X = 1;
function ola(a) {
  return Ie(a);
}
ola.X = 1;
function Mx(a) {
  return k[a + 43];
}
Mx.X = 1;
function Nx(a) {
  return c[a + 42] & 1;
}
Nx.X = 1;
function Ox(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Ox.X = 1;
function pla(a) {
  return Ge(a);
}
pla.X = 1;
function Px(a, d) {
  var e = b;
  b += 4;
  0 == (c[Qx] << 24) >> 24 && Hb(Qx);
  v[c[c[a] + 15]](e, a, d);
  c[Rx] = c[e];
  k[Rx] = k[e];
  c[Rx + 1] = c[e + 1];
  k[Rx + 1] = k[e + 1];
  c[Rx + 2] = c[e + 2];
  k[Rx + 2] = k[e + 2];
  c[Rx + 3] = c[e + 3];
  k[Rx + 3] = k[e + 3];
  b = e;
  return Rx;
}
Px.X = 1;
function qla(a, d) {
  Je(a, d);
}
qla.X = 1;
function rla(a) {
  return Le(a);
}
rla.X = 1;
function Sx(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
Sx.X = 1;
function Tx(a) {
  return v[c[c[a] + 7]](a);
}
Tx.X = 1;
function Ux(a) {
  return v[c[c[a] + 19]](a);
}
Ux.X = 1;
function sla(a) {
  return Ye(a);
}
sla.X = 1;
function tla(a) {
  return Xw(a);
}
tla.X = 1;
function ula(a, d, e, f) {
  df(a, d, e, f);
}
ula.X = 1;
function Vx(a) {
  return v[c[c[a] + 12]](a);
}
Vx.X = 1;
function Wx(a, d) {
  var e = Se(76);
  Xx(e, a, d);
  return e;
}
Wx.X = 1;
function vla(a) {
  return Yw(a);
}
vla.X = 1;
function wla(a) {
  return a + 3;
}
wla.X = 1;
function Yx(a, d) {
  var e = b;
  b += 4;
  0 == (c[Zx] << 24) >> 24 && Hb(Zx);
  kf(e, a, d);
  c[$x] = c[e];
  k[$x] = k[e];
  c[$x + 1] = c[e + 1];
  k[$x + 1] = k[e + 1];
  c[$x + 2] = c[e + 2];
  k[$x + 2] = k[e + 2];
  c[$x + 3] = c[e + 3];
  k[$x + 3] = k[e + 3];
  b = e;
  return $x;
}
Yx.X = 1;
function ay(a, d) {
  var e = b;
  b += 4;
  0 == (c[by] << 24) >> 24 && Hb(by);
  v[c[c[a] + 16]](e, a, d);
  c[cy] = c[e];
  k[cy] = k[e];
  c[cy + 1] = c[e + 1];
  k[cy + 1] = k[e + 1];
  c[cy + 2] = c[e + 2];
  k[cy + 2] = k[e + 2];
  c[cy + 3] = c[e + 3];
  k[cy + 3] = k[e + 3];
  b = e;
  return cy;
}
ay.X = 1;
function xla(a, d) {
  wx(a, d);
}
xla.X = 1;
function dy(a, d) {
  v[c[c[a] + 6]](a, d);
}
dy.X = 1;
function ey(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
ey.X = 1;
function fy(a, d) {
  var e = b;
  b += 4;
  0 == (c[gy] << 24) >> 24 && Hb(gy);
  tf(e, a, d);
  c[hy] = c[e];
  k[hy] = k[e];
  c[hy + 1] = c[e + 1];
  k[hy + 1] = k[e + 1];
  c[hy + 2] = c[e + 2];
  k[hy + 2] = k[e + 2];
  c[hy + 3] = c[e + 3];
  k[hy + 3] = k[e + 3];
  b = e;
  return hy;
}
fy.X = 1;
function iy(a, d) {
  return v[c[c[a] + 5]](a, d);
}
iy.X = 1;
function yla(a) {
  return xf(a);
}
yla.X = 1;
function zla(a) {
  return zf(a);
}
zla.X = 1;
function Ala(a) {
  return Uf(a);
}
Ala.X = 1;
function Bla(a) {
  return Me(a);
}
Bla.X = 1;
function Cla(a) {
  return Bf(a);
}
Cla.X = 1;
function jy(a) {
  return v[c[c[a] + 11]](a);
}
jy.X = 1;
function ky(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
ky.X = 1;
function ly(a, d) {
  v[c[c[a] + 10]](a, d);
}
ly.X = 1;
function Dla(a) {
  return Gf(a);
}
Dla.X = 1;
function Ela(a, d) {
  Jf(a, d);
}
Ela.X = 1;
function Fla(a) {
  return Kf(a);
}
Fla.X = 1;
function Gla(a) {
  return Mf(a);
}
Gla.X = 1;
function my(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
my.X = 1;
function ny(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
ny.X = 1;
function Hla(a) {
  return a + 7;
}
Hla.X = 1;
function oy(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
oy.X = 1;
function py(a) {
  return v[c[c[a] + 4]](a);
}
py.X = 1;
function Ila(a) {
  return Zw(a);
}
Ila.X = 1;
function qy(a, d) {
  v[c[c[a] + 14]](a, d);
}
qy.X = 1;
function ry(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
ry.X = 1;
function Jla(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Jla.X = 1;
function sy(a) {
  return v[c[c[a] + 9]](a);
}
sy.X = 1;
function Kla(a) {
  return Ie(a);
}
Kla.X = 1;
function Lla(a, d) {
  ty(a, d);
}
Lla.X = 1;
function uy(a, d) {
  v[c[c[a] + 8]](a, d);
}
uy.X = 1;
function Mla(a, d, e) {
  vy(a, d, e);
}
Mla.X = 1;
function wy(a, d, e) {
  return xy(a, d, e & 1);
}
wy.X = 1;
function yy(a, d) {
  zy(a, d, 2);
}
yy.X = 1;
function zy(a, d, e) {
  Ay(a + 5, d);
  c[By(a + 5, Cy(a + 5) - 1) + 6] = e;
}
zy.X = 1;
function Nla(a, d, e) {
  zy(a, d, e);
}
Nla.X = 1;
function Dy(a, d, e) {
  v[c[c[a] + 12]](a, d, e);
}
Dy.X = 1;
function Ola(a) {
  return Nx(a);
}
Ola.X = 1;
function Ey(a) {
  return v[c[c[a] + 13]](a);
}
Ey.X = 1;
function Fy(a) {
  return Ue(a, 16);
}
Fy.X = 1;
function Pla(a) {
  return a + 1;
}
Pla.X = 1;
function Gy(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
Gy.X = 1;
function Hy(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
Hy.X = 1;
function Qla(a, d) {
  Iy(a, d);
}
Qla.X = 1;
function Iy(a, d) {
  var e = a + 1;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Iy.X = 1;
function Jy() {
  var a = Fy(172);
  Ky(a, 1, 1);
  return a;
}
Jy.X = 1;
function Ly(a) {
  var a = a & 1,
    d = Fy(172);
  Ky(d, a & 1, 1);
  return d;
}
Ly.X = 1;
function My(a, d) {
  var e, f;
  e = a & 1;
  f = d & 1;
  var g = Fy(172);
  Ky(g, e & 1, f & 1);
  return g;
}
My.X = 1;
function Ny(a, d) {
  k[a + 43] = d;
}
Ny.X = 1;
function Oy(a) {
  return c[a + 41] & 1;
}
Oy.X = 1;
function Py(a, d) {
  c[a + 3] = d;
}
Py.X = 1;
function Rla(a) {
  return c[a];
}
Rla.X = 1;
function Qy(a) {
  return c[a + 1];
}
Qy.X = 1;
function Sla(a, d) {
  c[a] = d;
}
Sla.X = 1;
function Ry(a, d) {
  c[a + 1] = d;
}
Ry.X = 1;
function Sy(a) {
  return c[a + 3];
}
Sy.X = 1;
function Ty(a) {
  return c[a + 3];
}
Ty.X = 1;
function Uy(a) {
  return c[a + 2];
}
Uy.X = 1;
function Vy(a, d) {
  c[a + 3] = d;
}
Vy.X = 1;
function Wy(a, d) {
  c[a + 2] = d;
}
Wy.X = 1;
function Tla(a) {
  return a + 1;
}
Tla.X = 1;
function Xy(a, d) {
  k[a + 8] = d;
}
Xy.X = 1;
function Yy(a) {
  return k[a + 8];
}
Yy.X = 1;
function Zy(a) {
  return k[a + 1];
}
Zy.X = 1;
function $y(a, d) {
  c[a + 2] = d;
}
$y.X = 1;
function az(a, d) {
  k[a + 1] = d;
}
az.X = 1;
function bz(a, d) {
  c[a + 3] = d;
}
bz.X = 1;
function cz(a) {
  return 1 > k[a + 1];
}
cz.X = 1;
function dz(a) {
  return c[a + 3];
}
dz.X = 1;
function ez(a) {
  return c[a + 2];
}
ez.X = 1;
function Ula(a) {
  return a + 33;
}
Ula.X = 1;
function fz(a) {
  return c[a + 49];
}
fz.X = 1;
function Vla(a) {
  return a + 1;
}
Vla.X = 1;
function gz(a, d) {
  c[a + 49] = d;
}
gz.X = 1;
function Wla(a) {
  return a + 17;
}
Wla.X = 1;
function hz(a, d) {
  v[c[c[a] + 6]](a, d);
}
hz.X = 1;
function iz(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, 0);
}
iz.X = 1;
function jz(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, m);
}
jz.X = 1;
function kz(a, d) {
  v[c[c[a] + 9]](a, d);
}
kz.X = 1;
function lz(a, d, e) {
  return v[c[c[a] + 14]](a, d, e);
}
lz.X = 1;
function Xla(a) {
  return Oy(a);
}
Xla.X = 1;
function mz(a, d) {
  v[c[c[a] + 5]](a, d);
}
mz.X = 1;
function nz(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
nz.X = 1;
function Yla(a) {
  return oz(a);
}
Yla.X = 1;
function Zla(a) {
  return a + 5;
}
Zla.X = 1;
function pz(a) {
  return v[c[c[a] + 7]](a);
}
pz.X = 1;
function qz(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, 0);
}
qz.X = 1;
function rz(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, m);
}
rz.X = 1;
function sz(a) {
  return v[c[c[a] + 10]](a);
}
sz.X = 1;
function tz(a, d, e, f) {
  uz(a, d, e, f, 0);
}
tz.X = 1;
function vz(a, d, e, f, g) {
  uz(a, d, e, f, g & 1);
}
vz.X = 1;
function wz(a, d) {
  return v[c[c[a] + 2]](a, d);
}
wz.X = 1;
function xz(a) {
  0 != (a | 0) && yh(a);
}
xz.X = 1;
function yz() {
  var a = zz(16);
  Az(a);
  return a;
}
yz.X = 1;
function zz(a) {
  return Ue(a, 16);
}
zz.X = 1;
function Bz(a) {
  var d = zz(16);
  Cz(d, a);
  return d;
}
Bz.X = 1;
function Dz(a, d) {
  var e = zz(16);
  Ez(e, a, d);
  return e;
}
Dz.X = 1;
function Fz(a, d) {
  return v[c[c[a] + 2]](a, d);
}
Fz.X = 1;
function Gz(a, d) {
  var e = a + 1;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Gz.X = 1;
function Hz(a, d) {
  return v[c[c[a] + 2]](a, d);
}
Hz.X = 1;
function $la(a) {
  return cz(a);
}
$la.X = 1;
function Iz(a, d, e) {
  return v[c[c[a] + 3]](a, d, e & 1);
}
Iz.X = 1;
function Jz(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Jz.X = 1;
function Kz(a, d) {
  v[c[c[a] + 2]](a, d);
}
Kz.X = 1;
function Lz(a, d) {
  xi(a + 33, d);
}
Lz.X = 1;
function xi(a, d) {
  Wb(a, d);
  var e = a + 12,
    f = d + 12;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  return a;
}
xi.X = 1;
function Mz(a, d) {
  v[c[c[a] + 3]](a, d);
}
Mz.X = 1;
function Nz(a, d) {
  xi(a + 1, d);
}
Nz.X = 1;
function Oz() {
  var a = xb(200);
  Pz();
  Pz();
  Qz(a, Rz, Rz);
  return a;
}
Oz.X = 1;
function Pz() {
  var a = b;
  b += 7;
  var d = a + 4,
    e = a + 5,
    f = a + 6;
  0 == (c[Sz] << 24) >> 24 &&
    0 != (Hb(Sz) | 0) &&
    (Wc(), (k[d] = 0), (k[e] = 0), (k[f] = 0), H(a, d, e, f), Tz(Rz, Xc, a));
  b = a;
  return Rz;
}
Pz.X = 1;
function Uz(a) {
  var d = xb(200);
  Pz();
  Qz(d, a, Rz);
  return d;
}
Uz.X = 1;
function Vz(a, d) {
  var e = xb(200);
  Qz(e, a, d);
  return e;
}
Vz.X = 1;
function Wz(a, d) {
  xi(a + 17, d);
}
Wz.X = 1;
function Xz(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Xz.X = 1;
function ama(a) {
  return Ge(a);
}
ama.X = 1;
function Yz(a, d) {
  var e = b;
  b += 4;
  0 == (c[Zz] << 24) >> 24 && Hb(Zz);
  v[c[c[a] + 15]](e, a, d);
  c[$z] = c[e];
  k[$z] = k[e];
  c[$z + 1] = c[e + 1];
  k[$z + 1] = k[e + 1];
  c[$z + 2] = c[e + 2];
  k[$z + 2] = k[e + 2];
  c[$z + 3] = c[e + 3];
  k[$z + 3] = k[e + 3];
  b = e;
  return $z;
}
Yz.X = 1;
function bma(a, d) {
  Je(a, d);
}
bma.X = 1;
function cma(a) {
  return Le(a);
}
cma.X = 1;
function aA(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
aA.X = 1;
function bA(a, d) {
  k[a + 52] = d;
}
bA.X = 1;
function cA(a) {
  return k[a + 53];
}
cA.X = 1;
function dA(a) {
  return k[a + 51];
}
dA.X = 1;
function eA(a, d) {
  k[a + 54] = d;
}
eA.X = 1;
function fA(a, d) {
  k[a + 53] = d;
}
fA.X = 1;
function gA(a) {
  return k[a + 62];
}
gA.X = 1;
function hA(a) {
  return k[a + 55];
}
hA.X = 1;
function iA(a) {
  return k[a + 67];
}
iA.X = 1;
function dma(a) {
  return a + 23;
}
dma.X = 1;
function jA(a) {
  return k[a + 57];
}
jA.X = 1;
function kA(a) {
  return c[a + 65] & 1;
}
kA.X = 1;
function lA(a, d) {
  k[a + 63] = d;
}
lA.X = 1;
function mA(a) {
  return k[a + 63];
}
mA.X = 1;
function nA(a) {
  return k[a + 58];
}
nA.X = 1;
function oA(a) {
  return k[a + 61];
}
oA.X = 1;
function pA(a) {
  return k[a + 68];
}
pA.X = 1;
function qA(a, d) {
  c[a + 66] = d;
}
qA.X = 1;
function rA(a, d) {
  k[a + 64] = d;
}
rA.X = 1;
function sA(a, d) {
  k[a + 68] = d;
}
sA.X = 1;
function tA(a, d) {
  c[a + 65] = d & 1;
}
tA.X = 1;
function uA(a, d) {
  k[a + 55] = d;
}
uA.X = 1;
function vA(a, d) {
  k[a + 60] = d;
}
vA.X = 1;
function wA(a) {
  return c[a + 66];
}
wA.X = 1;
function xA(a, d) {
  k[a + 57] = d;
}
xA.X = 1;
function yA(a) {
  return k[a + 70];
}
yA.X = 1;
function zA(a) {
  return k[a + 56];
}
zA.X = 1;
function AA(a) {
  return k[a + 52];
}
AA.X = 1;
function BA(a, d) {
  k[a + 58] = d;
}
BA.X = 1;
function ema(a) {
  return a + 39;
}
ema.X = 1;
function CA(a) {
  return k[a + 64];
}
CA.X = 1;
function DA(a, d) {
  k[a + 70] = d;
}
DA.X = 1;
function EA(a) {
  return k[a + 69];
}
EA.X = 1;
function FA(a, d) {
  k[a + 51] = d;
}
FA.X = 1;
function GA(a, d) {
  k[a + 61] = d;
}
GA.X = 1;
function HA(a) {
  return k[a + 59];
}
HA.X = 1;
function IA(a, d) {
  k[a + 56] = d;
}
IA.X = 1;
function fma(a) {
  return a + 43;
}
fma.X = 1;
function JA(a) {
  return k[a + 54];
}
JA.X = 1;
function KA(a, d) {
  k[a + 67] = d;
}
KA.X = 1;
function LA(a, d) {
  k[a + 59] = d;
}
LA.X = 1;
function gma(a) {
  return a + 47;
}
gma.X = 1;
function MA(a) {
  return v[c[c[a] + 7]](a);
}
MA.X = 1;
function NA(a) {
  return v[c[c[a] + 19]](a);
}
NA.X = 1;
function hma(a) {
  return Ye(a);
}
hma.X = 1;
function ima(a) {
  return Xw(a);
}
ima.X = 1;
function OA(a, d) {
  var e = Se(76);
  PA(e, a, d);
  return e;
}
OA.X = 1;
function QA(a) {
  return v[c[c[a] + 12]](a);
}
QA.X = 1;
function RA(a) {
  return v[c[c[a] + 9]](a);
}
RA.X = 1;
function jma(a) {
  return Yw(a);
}
jma.X = 1;
function kma(a) {
  return a + 3;
}
kma.X = 1;
function SA(a, d) {
  var e = b;
  b += 4;
  0 == (c[TA] << 24) >> 24 && Hb(TA);
  kf(e, a, d);
  c[UA] = c[e];
  k[UA] = k[e];
  c[UA + 1] = c[e + 1];
  k[UA + 1] = k[e + 1];
  c[UA + 2] = c[e + 2];
  k[UA + 2] = k[e + 2];
  c[UA + 3] = c[e + 3];
  k[UA + 3] = k[e + 3];
  b = e;
  return UA;
}
SA.X = 1;
function VA(a, d) {
  var e = b;
  b += 4;
  0 == (c[WA] << 24) >> 24 && Hb(WA);
  v[c[c[a] + 16]](e, a, d);
  c[XA] = c[e];
  k[XA] = k[e];
  c[XA + 1] = c[e + 1];
  k[XA + 1] = k[e + 1];
  c[XA + 2] = c[e + 2];
  k[XA + 2] = k[e + 2];
  c[XA + 3] = c[e + 3];
  k[XA + 3] = k[e + 3];
  b = e;
  return XA;
}
VA.X = 1;
function lma(a, d) {
  wx(a, d);
}
lma.X = 1;
function YA(a, d) {
  v[c[c[a] + 6]](a, d);
}
YA.X = 1;
function ZA(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
ZA.X = 1;
function $A(a, d) {
  var e = b;
  b += 4;
  0 == (c[aB] << 24) >> 24 && Hb(aB);
  tf(e, a, d);
  c[bB] = c[e];
  k[bB] = k[e];
  c[bB + 1] = c[e + 1];
  k[bB + 1] = k[e + 1];
  c[bB + 2] = c[e + 2];
  k[bB + 2] = k[e + 2];
  c[bB + 3] = c[e + 3];
  k[bB + 3] = k[e + 3];
  b = e;
  return bB;
}
$A.X = 1;
function cB(a, d) {
  return v[c[c[a] + 5]](a, d);
}
cB.X = 1;
function mma(a) {
  return xf(a);
}
mma.X = 1;
function nma(a) {
  return zf(a);
}
nma.X = 1;
function oma(a, d, e, f) {
  df(a, d, e, f);
}
oma.X = 1;
function pma(a) {
  return Me(a);
}
pma.X = 1;
function qma(a) {
  return Bf(a);
}
qma.X = 1;
function dB(a) {
  return v[c[c[a] + 11]](a);
}
dB.X = 1;
function eB(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
eB.X = 1;
function fB(a, d) {
  v[c[c[a] + 10]](a, d);
}
fB.X = 1;
function rma(a) {
  return Gf(a);
}
rma.X = 1;
function sma(a, d) {
  Jf(a, d);
}
sma.X = 1;
function tma(a) {
  return Kf(a);
}
tma.X = 1;
function uma(a) {
  return Mf(a);
}
uma.X = 1;
function gB(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
gB.X = 1;
function hB(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
hB.X = 1;
function vma(a) {
  return a + 7;
}
vma.X = 1;
function iB(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
iB.X = 1;
function jB(a) {
  return v[c[c[a] + 4]](a);
}
jB.X = 1;
function wma(a) {
  return Zw(a);
}
wma.X = 1;
function kB(a, d) {
  v[c[c[a] + 14]](a, d);
}
kB.X = 1;
function lB(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
lB.X = 1;
function xma(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
xma.X = 1;
function yma(a) {
  return Uf(a);
}
yma.X = 1;
function zma(a) {
  return Ie(a);
}
zma.X = 1;
function mB(a, d) {
  var e = a + 39;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
mB.X = 1;
function nB(a, d, e) {
  var f = b,
    g = e,
    e = b;
  b += 23;
  for (var h = e, i = g + 23; g < i; g++, h++) {
    (c[h] = c[g]), (k[h] = k[g]);
  }
  Ama(a, d, e);
  b = f;
}
nB.X = 1;
function oB(a, d) {
  var e = a + 43;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
oB.X = 1;
function Bma(a) {
  return pB(a);
}
Bma.X = 1;
function qB(a, d) {
  var e = a + 47;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
qB.X = 1;
function rB(a) {
  var d = xb(284);
  sB(d, a);
  return d;
}
rB.X = 1;
function tB(a) {
  0 != (a | 0) && xe(a);
}
tB.X = 1;
function uB(a, d) {
  k[a + 69] = d;
}
uB.X = 1;
function vB(a, d) {
  k[a + 62] = d;
}
vB.X = 1;
function wB(a) {
  return k[a + 60];
}
wB.X = 1;
function Mb(a, d) {
  var e;
  for (e = 0; ; ) {
    k[d + e] = k[a + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
Mb.X = 1;
function Ob(a, d) {
  var e;
  for (e = 0; ; ) {
    k[a + e] = k[d + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
Ob.X = 1;
function xB(a) {
  var d, e;
  d = -1;
  e = 0xde0b6b000000000;
  k[a] < e && ((d = 0), (e = k[a]));
  k[a + 1] < e && ((d = 1), (e = k[a + 1]));
  k[a + 2] < e && ((d = 2), (e = k[a + 2]));
  k[a + 3] < e && (d = 3);
  return d;
}
xB.X = 1;
function yB(a, d, e, f) {
  var g;
  g = 1 - f;
  k[a] = g * k[d] + f * k[e];
  k[a + 1] = g * k[d + 1] + f * k[e + 1];
  k[a + 2] = g * k[d + 2] + f * k[e + 2];
}
yB.X = 1;
function ne(a, d, e) {
  return (
    k[a] * (k[d + 1] * k[e + 2] - k[d + 2] * k[e + 1]) +
    k[a + 1] * (k[d + 2] * k[e] - k[d] * k[e + 2]) +
    k[a + 2] * (k[d] * k[e + 1] - k[d + 1] * k[e])
  );
}
ne.X = 1;
function Tc(a, d) {
  var e;
  for (e = 0; ; ) {
    k[a + e] = k[d + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
Tc.X = 1;
function zB(a, d) {
  var e;
  for (e = 0; ; ) {
    k[d + e] = k[a + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
zB.X = 1;
function AB(a, d) {
  xi(a + 23, d);
}
AB.X = 1;
function Cma(a, d) {
  hp(a, d);
}
Cma.X = 1;
function hp(a, d) {
  BB(a, d);
  BB(a + 1, d + 1);
  BB(a + 2, d + 2);
  BB(a + 3, d + 3);
}
hp.X = 1;
function Dma(a, d, e, f) {
  CB(a, d, e, f);
}
Dma.X = 1;
function CB(a, d, e, f) {
  var g = b;
  b += 6;
  var h = g + 1,
    i = g + 2,
    j = g + 3,
    l = g + 4,
    m = g + 5;
  k[g] = 0;
  k[h] = -k[a + 2];
  pe(d, g, h, a + 1);
  k[i] = 0;
  k[j] = -k[a];
  pe(e, a + 2, i, j);
  k[l] = -k[a + 1];
  k[m] = 0;
  pe(f, l, a, m);
  b = g;
}
CB.X = 1;
function Ema(a, d) {
  Mb(a, d);
}
Ema.X = 1;
function Fma(a, d) {
  Ob(a, d);
}
Fma.X = 1;
function Gma(a) {
  return k[a];
}
Gma.X = 1;
function Hma(a) {
  return xB(a);
}
Hma.X = 1;
function DB(a) {
  return k[a + 2];
}
DB.X = 1;
function Ima(a, d, e, f) {
  yB(a, d, e, f);
}
Ima.X = 1;
function Jma(a, d, e) {
  return ne(a, d, e);
}
Jma.X = 1;
function EB(a) {
  var d = b;
  b += 4;
  0 == (c[FB] << 24) >> 24 && Hb(FB);
  GB(d, a);
  c[HB] = c[d];
  k[HB] = k[d];
  c[HB + 1] = c[d + 1];
  k[HB + 1] = k[d + 1];
  c[HB + 2] = c[d + 2];
  k[HB + 2] = k[d + 2];
  c[HB + 3] = c[d + 3];
  k[HB + 3] = k[d + 3];
  b = d;
  return HB;
}
EB.X = 1;
function GB(a, d) {
  var e = b;
  b += 3;
  var f = e + 1,
    g = e + 2;
  k[e] = sc(k[d]);
  k[f] = sc(k[d + 1]);
  k[g] = sc(k[d + 2]);
  H(a, e, f, g);
  b = e;
}
GB.X = 1;
function Kma(a) {
  return IB(a);
}
Kma.X = 1;
function IB(a) {
  var d = b;
  b += 1;
  k[d] = JB(a);
  a = KB(a, d);
  b = d;
  return a;
}
IB.X = 1;
function Lma(a, d) {
  return LB(a, d);
}
Lma.X = 1;
function LB(a, d) {
  var e;
  e = ec(Um(a) * Um(d));
  return MB(J(a, d) / e);
}
LB.X = 1;
function Mma(a, d) {
  Tc(a, d);
}
Mma.X = 1;
function NB(a, d, e) {
  var f = b;
  b += 5;
  var g = f + 1;
  k[f] = e;
  0 == (c[OB] << 24) >> 24 && Hb(OB);
  PB(g, a, d, f);
  c[QB] = c[g];
  k[QB] = k[g];
  c[QB + 1] = c[g + 1];
  k[QB + 1] = k[g + 1];
  c[QB + 2] = c[g + 2];
  k[QB + 2] = k[g + 2];
  c[QB + 3] = c[g + 3];
  k[QB + 3] = k[g + 3];
  b = f;
  return QB;
}
NB.X = 1;
function PB(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = k[d] + (k[e] - k[d]) * k[f];
  k[h] = k[d + 1] + (k[e + 1] - k[d + 1]) * k[f];
  k[i] = k[d + 2] + (k[e + 2] - k[d + 2]) * k[f];
  H(a, g, h, i);
  b = g;
}
PB.X = 1;
function Nma(a, d) {
  gp(a, d);
}
Nma.X = 1;
function gp(a, d) {
  RB(a, d);
  RB(a + 1, d + 1);
  RB(a + 2, d + 2);
  RB(a + 3, d + 3);
}
gp.X = 1;
function SB(a, d) {
  var e = b;
  b += 4;
  0 == (c[TB] << 24) >> 24 && Hb(TB);
  qn(e, a, d);
  c[UB] = c[e];
  k[UB] = k[e];
  c[UB + 1] = c[e + 1];
  k[UB + 1] = k[e + 1];
  c[UB + 2] = c[e + 2];
  k[UB + 2] = k[e + 2];
  c[UB + 3] = c[e + 3];
  k[UB + 3] = k[e + 3];
  b = e;
  return UB;
}
SB.X = 1;
function qn(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d + 1] * k[e + 2] - k[d + 2] * k[e + 1];
  k[g] = k[d + 2] * k[e] - k[d] * k[e + 2];
  k[h] = k[d] * k[e + 1] - k[d + 1] * k[e];
  H(a, f, g, h);
  b = f;
}
qn.X = 1;
function Oma(a, d) {
  zB(a, d);
}
Oma.X = 1;
function VB(a) {
  var d = b;
  b += 4;
  0 == (c[WB] << 24) >> 24 && Hb(WB);
  XB(d, a);
  c[YB] = c[d];
  k[YB] = k[d];
  c[YB + 1] = c[d + 1];
  k[YB + 1] = k[d + 1];
  c[YB + 2] = c[d + 2];
  k[YB + 2] = k[d + 2];
  c[YB + 3] = c[d + 3];
  k[YB + 3] = k[d + 3];
  b = d;
  return YB;
}
VB.X = 1;
function ZB(a) {
  return k[a + 3];
}
ZB.X = 1;
function $B(a, d, e, f, g) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = k[g];
}
$B.X = 1;
function re(a, d) {
  var e;
  for (e = 0; ; ) {
    k[a + e] = k[d + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
re.X = 1;
function aC(a) {
  return k[a] < k[a + 1]
    ? k[a] < k[a + 2] ? 0 : 2
    : k[a + 1] < k[a + 2] ? 1 : 2;
}
aC.X = 1;
function bC(a) {
  return 0 == k[a] ? (0 != k[a + 1] ? 0 : 0 == k[a + 2]) : 0;
}
bC.X = 1;
function mc(a, d) {
  var e;
  for (e = 0; ; ) {
    k[d + e] = k[a + e];
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
mc.X = 1;
function cC(a, d) {
  k[a + 1] = d;
}
cC.X = 1;
function dC(a, d) {
  k[a + 2] = d;
}
dC.X = 1;
function eC(a) {
  var d, e;
  d = -1;
  e = -0xde0b6b000000000;
  k[a] > e && ((d = 0), (e = k[a]));
  k[a + 1] > e && ((d = 1), (e = k[a + 1]));
  k[a + 2] > e && ((d = 2), (e = k[a + 2]));
  k[a + 3] > e && (d = 3);
  return d;
}
eC.X = 1;
function fC(a) {
  return k[a] < k[a + 1]
    ? k[a + 1] < k[a + 2] ? 2 : 1
    : k[a] < k[a + 2] ? 2 : 0;
}
fC.X = 1;
function gC(a, d) {
  k[a + 3] = d;
}
gC.X = 1;
function XB(a, d) {
  var e = b;
  b += 4;
  var f = e + 1,
    g = e + 2,
    h = e + 3;
  k[e] = sc(k[d]);
  k[f] = sc(k[d + 1]);
  k[g] = sc(k[d + 2]);
  k[h] = sc(k[d + 3]);
  jC(a, e, f, g, h);
  b = e;
}
XB.X = 1;
function Pma(a) {
  return ZB(a);
}
Pma.X = 1;
function Qma(a, d) {
  return kC(a, d);
}
Qma.X = 1;
function kC(a, d) {
  var e = b;
  b += 4;
  N(e, d, a);
  var f = Um(e);
  b = e;
  return f;
}
kC.X = 1;
function Rma(a) {
  return lC(a);
}
Rma.X = 1;
function lC(a) {
  var d = b;
  b += 4;
  GB(d, a);
  a = fC(d);
  b = d;
  return a;
}
lC.X = 1;
function mC(a, d, e, f, g) {
  var h = b;
  b += 4;
  var i = h + 1,
    j = h + 2,
    l = h + 3;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  k[l] = g;
  $B(a, h, i, j, l);
  b = h;
}
mC.X = 1;
function Sma(a) {
  return nC(a);
}
Sma.X = 1;
function nC(a) {
  return 1.1920928955078125e-7 > Um(a);
}
nC.X = 1;
function Tma(a, d) {
  re(a, d);
}
Tma.X = 1;
function Uma(a, d) {
  return oC(a, d);
}
Uma.X = 1;
function oC(a, d) {
  var e = b;
  b += 4;
  N(e, d, a);
  var f = JB(e);
  b = e;
  return f;
}
oC.X = 1;
function Vma(a) {
  return aC(a);
}
Vma.X = 1;
function pC() {
  return xb(16);
}
pC.X = 1;
function qC(a, d, e, f) {
  var g = b;
  b += 4;
  var h = g + 1,
    i = g + 2,
    j = g + 3;
  k[g] = a;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  a = xb(16);
  jC(a, g, h, i, j);
  b = g;
  return a;
}
qC.X = 1;
function Wma(a) {
  return bC(a);
}
Wma.X = 1;
function Xma(a) {
  return rC(a);
}
Xma.X = 1;
function rC(a) {
  var d = b;
  b += 8;
  var e,
    f = d + 4,
    g = d + 5,
    h = d + 6,
    i = d + 7;
  GB(d, a);
  e = fC(d);
  0 < k[d + e]
    ? (KB(a, d + e), (k[f] = JB(a)), (a = KB(a, f)))
    : ((k[g] = 1), (k[h] = 0), (k[i] = 0), pe(a, g, h, i));
  b = d;
  return a;
}
rC.X = 1;
function sC(a) {
  var d = b;
  b += 4;
  0 == (c[tC] << 24) >> 24 && Hb(tC);
  uC(d, a);
  c[vC] = c[d];
  k[vC] = k[d];
  c[vC + 1] = c[d + 1];
  k[vC + 1] = k[d + 1];
  c[vC + 2] = c[d + 2];
  k[vC + 2] = k[d + 2];
  c[vC + 3] = c[d + 3];
  k[vC + 3] = k[d + 3];
  b = d;
  return vC;
}
sC.X = 1;
function uC(a, d) {
  var e = b;
  b += 1;
  k[e] = JB(d);
  wC(a, d, e);
  b = e;
}
uC.X = 1;
function Yma(a, d) {
  mc(a, d);
}
Yma.X = 1;
function Zma(a, d) {
  k[a] = d;
}
Zma.X = 1;
function $ma(a, d) {
  cC(a, d);
}
$ma.X = 1;
function ana(a, d) {
  dC(a, d);
}
ana.X = 1;
function bna(a) {
  return eC(a);
}
bna.X = 1;
function xC(a) {
  0 != (a | 0) && xe(a);
}
xC.X = 1;
function yC(a, d, e) {
  var f = b;
  b += 4;
  0 == (c[zC] << 24) >> 24 && Hb(zC);
  AC(f, a, d, e);
  c[BC] = c[f];
  k[BC] = k[f];
  c[BC + 1] = c[f + 1];
  k[BC + 1] = k[f + 1];
  c[BC + 2] = c[f + 2];
  k[BC + 2] = k[f + 2];
  c[BC + 3] = c[f + 3];
  k[BC + 3] = k[f + 3];
  b = f;
  return BC;
}
yC.X = 1;
function AC(a, d, e, f) {
  var g = b;
  b += 31;
  var h = g + 4,
    i = g + 5,
    j = g + 9,
    l = g + 13,
    m = g + 17,
    n = g + 21,
    p = g + 25,
    r = g + 26,
    s = g + 30;
  k[h] = J(e, d);
  Q(g, e, h);
  N(i, d, g);
  qn(l, e, d);
  c[j] = c[l];
  k[j] = k[l];
  c[j + 1] = c[l + 1];
  k[j + 1] = k[l + 1];
  c[j + 2] = c[l + 2];
  k[j + 2] = k[l + 2];
  c[j + 3] = c[l + 3];
  k[j + 3] = k[l + 3];
  k[p] = td(f);
  Q(n, i, p);
  wn(m, g, n);
  k[s] = ud(f);
  Q(r, j, s);
  wn(a, m, r);
  b = g;
}
AC.X = 1;
function cna(a) {
  return fC(a);
}
cna.X = 1;
function dna(a) {
  return CC(a);
}
dna.X = 1;
function CC(a) {
  var d = b;
  b += 4;
  XB(d, a);
  a = eC(d);
  b = d;
  return a;
}
CC.X = 1;
function DC(a) {
  return k[a + 1];
}
DC.X = 1;
function ena(a) {
  return Um(a);
}
ena.X = 1;
function Um(a) {
  return J(a, a);
}
Um.X = 1;
function fna(a) {
  EC(a);
}
fna.X = 1;
function EC(a) {
  var d = b;
  b += 3;
  var e = d + 1,
    f = d + 2;
  k[d] = 0;
  k[e] = 0;
  k[f] = 0;
  pe(a, d, e, f);
  b = d;
}
EC.X = 1;
function gna(a) {
  return JB(a);
}
gna.X = 1;
function JB(a) {
  return ec(Um(a));
}
JB.X = 1;
function hna(a, d) {
  gC(a, d);
}
hna.X = 1;
function ina(a) {
  return FC(a);
}
ina.X = 1;
function FC(a) {
  var d = b;
  b += 4;
  GB(d, a);
  a = aC(d);
  b = d;
  return a;
}
FC.X = 1;
function GC(a) {
  return k[a + 3];
}
GC.X = 1;
function HC(a) {
  return k[a + 1];
}
HC.X = 1;
function jna(a) {
  return k[a];
}
jna.X = 1;
function IC(a) {
  return k[a + 2];
}
IC.X = 1;
function kna(a, d) {
  return J(a, d);
}
kna.X = 1;
function J(a, d) {
  return k[a] * k[d] + k[a + 1] * k[d + 1] + k[a + 2] * k[d + 2];
}
J.X = 1;
function JC(a, d) {
  k[a] -= k[d];
  var e = a + 1;
  k[e] -= k[d + 1];
  e = a + 2;
  k[e] -= k[d + 2];
  return a;
}
JC.X = 1;
function xn(a, d) {
  k[a] += k[d];
  var e = a + 1;
  k[e] += k[d + 1];
  e = a + 2;
  k[e] += k[d + 2];
  return a;
}
xn.X = 1;
function KC(a, d) {
  return k[a + 3] == k[d + 3]
    ? k[a + 2] != k[d + 2] ? 0 : k[a + 1] != k[d + 1] ? 0 : k[a] == k[d]
    : 0;
}
KC.X = 1;
function LC(a, d) {
  k[a] *= k[d];
  var e = a + 1;
  k[e] *= k[d];
  e = a + 2;
  k[e] *= k[d];
  return a;
}
LC.X = 1;
function pe(a, d, e, f) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = 0;
}
pe.X = 1;
function MC(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
MC.X = 1;
function NC(a, d) {
  v[c[c[a] + 3]](a, d);
}
NC.X = 1;
function lna(a, d) {
  hp(a, d);
}
lna.X = 1;
function mna(a, d, e, f) {
  CB(a, d, e, f);
}
mna.X = 1;
function nna(a, d) {
  Mb(a, d);
}
nna.X = 1;
function ona(a, d) {
  Ob(a, d);
}
ona.X = 1;
function pna(a) {
  return k[a];
}
pna.X = 1;
function OC(a) {
  return k[a + 1];
}
OC.X = 1;
function PC(a) {
  return k[a + 2];
}
PC.X = 1;
function qna(a, d, e, f) {
  yB(a, d, e, f);
}
qna.X = 1;
function rna(a, d, e) {
  return ne(a, d, e);
}
rna.X = 1;
function sna(a, d) {
  return JC(a, d);
}
sna.X = 1;
function QC(a) {
  var d = b;
  b += 4;
  0 == (c[RC] << 24) >> 24 && Hb(RC);
  GB(d, a);
  c[SC] = c[d];
  k[SC] = k[d];
  c[SC + 1] = c[d + 1];
  k[SC + 1] = k[d + 1];
  c[SC + 2] = c[d + 2];
  k[SC + 2] = k[d + 2];
  c[SC + 3] = c[d + 3];
  k[SC + 3] = k[d + 3];
  b = d;
  return SC;
}
QC.X = 1;
function tna(a) {
  return IB(a);
}
tna.X = 1;
function una(a, d) {
  return LB(a, d);
}
una.X = 1;
function TC(a, d, e) {
  var f = b;
  b += 5;
  var g = f + 1;
  k[f] = e;
  0 == (c[UC] << 24) >> 24 && Hb(UC);
  PB(g, a, d, f);
  c[VC] = c[g];
  k[VC] = k[g];
  c[VC + 1] = c[g + 1];
  k[VC + 1] = k[g + 1];
  c[VC + 2] = c[g + 2];
  k[VC + 2] = k[g + 2];
  c[VC + 3] = c[g + 3];
  k[VC + 3] = k[g + 3];
  b = f;
  return VC;
}
TC.X = 1;
function vna(a, d) {
  gp(a, d);
}
vna.X = 1;
function WC(a, d) {
  var e = b;
  b += 4;
  0 == (c[XC] << 24) >> 24 && Hb(XC);
  qn(e, a, d);
  c[YC] = c[e];
  k[YC] = k[e];
  c[YC + 1] = c[e + 1];
  k[YC + 1] = k[e + 1];
  c[YC + 2] = c[e + 2];
  k[YC + 2] = k[e + 2];
  c[YC + 3] = c[e + 3];
  k[YC + 3] = k[e + 3];
  b = e;
  return YC;
}
WC.X = 1;
function wna(a, d) {
  return xn(a, d);
}
wna.X = 1;
function xna(a, d) {
  return KC(a, d);
}
xna.X = 1;
function ZC(a) {
  0 != (a | 0) && xe(a);
}
ZC.X = 1;
function $C(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  var f = LC(a, e);
  b = e;
  return f;
}
$C.X = 1;
function yna(a, d) {
  zB(a, d);
}
yna.X = 1;
function zna(a) {
  return bC(a);
}
zna.X = 1;
function aD(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  return 0 != (a | 0);
}
aD.X = 1;
function Ana(a, d) {
  return kC(a, d);
}
Ana.X = 1;
function Bna(a) {
  return lC(a);
}
Bna.X = 1;
function bD(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  pe(a, g, h, i);
  b = g;
}
bD.X = 1;
function Cna(a) {
  return nC(a);
}
Cna.X = 1;
function Dna(a, d) {
  re(a, d);
}
Dna.X = 1;
function cD(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  var f = KB(a, e);
  b = e;
  return f;
}
cD.X = 1;
function KB(a, d) {
  var e = b;
  b += 1;
  k[e] = 1 / k[d];
  var f = LC(a, e);
  b = e;
  return f;
}
KB.X = 1;
function Ena(a) {
  return aC(a);
}
Ena.X = 1;
function Fna(a) {
  return rC(a);
}
Fna.X = 1;
function dD(a) {
  var d = b;
  b += 4;
  0 == (c[eD] << 24) >> 24 && Hb(eD);
  uC(d, a);
  c[fD] = c[d];
  k[fD] = k[d];
  c[fD + 1] = c[d + 1];
  k[fD + 1] = k[d + 1];
  c[fD + 2] = c[d + 2];
  k[fD + 2] = k[d + 2];
  c[fD + 3] = c[d + 3];
  k[fD + 3] = k[d + 3];
  b = d;
  return fD;
}
dD.X = 1;
function gD() {
  return xb(16);
}
gD.X = 1;
function hD(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = a;
  k[g] = d;
  k[h] = e;
  a = xb(16);
  H(a, f, g, h);
  b = f;
  return a;
}
hD.X = 1;
function Gna(a, d) {
  mc(a, d);
}
Gna.X = 1;
function Hna(a, d) {
  k[a] = d;
}
Hna.X = 1;
function Ina(a, d) {
  cC(a, d);
}
Ina.X = 1;
function Jna(a, d) {
  dC(a, d);
}
Jna.X = 1;
function Kna(a, d) {
  return oC(a, d);
}
Kna.X = 1;
function iD(a, d, e) {
  var f = b;
  b += 4;
  0 == (c[jD] << 24) >> 24 && Hb(jD);
  AC(f, a, d, e);
  c[kD] = c[f];
  k[kD] = k[f];
  c[kD + 1] = c[f + 1];
  k[kD + 1] = k[f + 1];
  c[kD + 2] = c[f + 2];
  k[kD + 2] = k[f + 2];
  c[kD + 3] = c[f + 3];
  k[kD + 3] = k[f + 3];
  b = f;
  return kD;
}
iD.X = 1;
function Lna(a) {
  return fC(a);
}
Lna.X = 1;
function Mna(a, d) {
  Tc(a, d);
}
Mna.X = 1;
function Nna(a) {
  return Um(a);
}
Nna.X = 1;
function Ona(a) {
  EC(a);
}
Ona.X = 1;
function Pna(a) {
  return JB(a);
}
Pna.X = 1;
function Qna(a, d) {
  gC(a, d);
}
Qna.X = 1;
function Rna(a, d) {
  return J(a, d);
}
Rna.X = 1;
function lD(a) {
  return k[a + 3];
}
lD.X = 1;
function mD(a) {
  return k[a + 1];
}
mD.X = 1;
function Sna(a) {
  return k[a];
}
Sna.X = 1;
function nD(a) {
  return k[a + 2];
}
nD.X = 1;
function Tna(a) {
  return FC(a);
}
Tna.X = 1;
function oD(a, d) {
  v[c[c[a] + 14]](a, d);
}
oD.X = 1;
function pD(a, d) {
  return v[c[c[a] + 10]](a, d);
}
pD.X = 1;
function qD(a) {
  v[c[c[a] + 8]](a);
}
qD.X = 1;
function rD(a) {
  return v[c[c[a] + 13]](a);
}
rD.X = 1;
function sD(a) {
  v[c[c[a] + 9]](a);
}
sD.X = 1;
function tD(a, d) {
  return v[c[c[a] + 7]](a, d);
}
tD.X = 1;
function uD(a) {
  return v[c[c[a] + 2]](a);
}
uD.X = 1;
function vD(a) {
  return v[c[c[a] + 3]](a);
}
vD.X = 1;
function wD(a, d, e, f, g) {
  v[c[c[a] + 5]](a, d, e, f, g);
}
wD.X = 1;
function xD(a, d) {
  v[c[c[a] + 12]](a, d);
}
xD.X = 1;
function yD(a, d) {
  k[a + 3] = d;
}
yD.X = 1;
function zD(a) {
  return k[a + 2];
}
zD.X = 1;
function AD(a) {
  return k[a + 1];
}
AD.X = 1;
function Una(a, d) {
  c[a] = d;
}
Una.X = 1;
function BD(a, d) {
  k[a + 1] = d;
}
BD.X = 1;
function CD(a) {
  return k[a + 3];
}
CD.X = 1;
function DD(a, d) {
  k[a + 2] = d;
}
DD.X = 1;
function Vna(a) {
  return c[a];
}
Vna.X = 1;
function ED(a, d) {
  c[a + 3] = d;
}
ED.X = 1;
function Wna(a) {
  return a + 10;
}
Wna.X = 1;
function Xna(a) {
  return a + 18;
}
Xna.X = 1;
function FD(a, d) {
  c[a + 2] = d;
}
FD.X = 1;
function GD(a) {
  return c[a + 2];
}
GD.X = 1;
function HD(a, d) {
  c[a + 5] = d;
}
HD.X = 1;
function Yna(a) {
  return a + 6;
}
Yna.X = 1;
function ID(a) {
  return c[a + 4];
}
ID.X = 1;
function JD(a) {
  return k[a + 1];
}
JD.X = 1;
function KD(a) {
  return c[a + 5];
}
KD.X = 1;
function LD(a, d) {
  k[a + 1] = d;
}
LD.X = 1;
function MD(a, d) {
  c[a + 4] = d;
}
MD.X = 1;
function ND(a) {
  return 0 != (c[a + 2] | 0);
}
ND.X = 1;
function Zna(a) {
  return a + 14;
}
Zna.X = 1;
function OD(a) {
  return c[a + 3];
}
OD.X = 1;
function PD(a, d) {
  c[a + 1] = d;
}
PD.X = 1;
function $na(a) {
  return a + 2;
}
$na.X = 1;
function QD(a, d) {
  k[a + 6] = d;
}
QD.X = 1;
function RD(a) {
  return k[a + 6];
}
RD.X = 1;
function SD(a) {
  return c[a + 1];
}
SD.X = 1;
function aoa(a, d) {
  c[a] = d;
}
aoa.X = 1;
function boa(a) {
  return c[a];
}
boa.X = 1;
function TD(a) {
  return c[a + 29];
}
TD.X = 1;
function UD(a) {
  return c[a + 22];
}
UD.X = 1;
function VD(a, d) {
  c[a + 22] = d;
}
VD.X = 1;
function WD(a) {
  return c[a + 30];
}
WD.X = 1;
function XD(a, d) {
  c[a + 21] = d;
}
XD.X = 1;
function YD(a, d) {
  return v[c[c[a] + 6]](a, d);
}
YD.X = 1;
function ZD(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
ZD.X = 1;
function $D(a, d, e) {
  return v[c[c[a] + 4]](a, d, e);
}
$D.X = 1;
function aE(a) {
  0 != (a | 0) && xe(a);
}
aE.X = 1;
function bE() {
  var a = xb(16);
  cE(a);
  return a;
}
bE.X = 1;
function dE(a, d, e) {
  return v[c[c[a] + 3]](a, d, e & 1);
}
dE.X = 1;
function eE(a, d) {
  var e = a + 10;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
eE.X = 1;
function fE(a, d) {
  return v[c[c[a] + 2]](a, d);
}
fE.X = 1;
function gE(a, d) {
  var e = a + 14;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
gE.X = 1;
function hE(a, d) {
  var e = a + 18;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
hE.X = 1;
function iE(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
iE.X = 1;
function coa(a) {
  return ND(a);
}
coa.X = 1;
function jE(a, d) {
  var e = xb(84);
  kE(e, a, d);
  return e;
}
jE.X = 1;
function lE(a, d) {
  var e = a + 6;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
lE.X = 1;
function mE(a) {
  0 != (a | 0) && xe(a);
}
mE.X = 1;
function nE(a, d) {
  var e = a + 2;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
nE.X = 1;
function oE(a, d, e, f) {
  var g = xb(28);
  pE(g, a, d, e, f);
  return g;
}
oE.X = 1;
function qE(a) {
  v[c[c[a] + 5]](a);
}
qE.X = 1;
function rE(a, d, e, f) {
  v[c[c[a] + 4]](a, d, e, f);
}
rE.X = 1;
function sE(a, d, e, f, g, h, i, j, l, m, n) {
  return v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, m, n);
}
sE.X = 1;
function tE(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
tE.X = 1;
function doa(a, d) {
  uE(a, d);
}
doa.X = 1;
function eoa(a) {
  return TD(a);
}
eoa.X = 1;
function foa(a) {
  return UD(a);
}
foa.X = 1;
function goa(a, d) {
  return vE(a, d);
}
goa.X = 1;
function wE(a, d, e, f, g, h, i, j) {
  return hoa(a, d, e, f, g, h, i, j & 1);
}
wE.X = 1;
function xE(a, d) {
  yE(a, d, 1);
}
xE.X = 1;
function zE(a, d, e) {
  yE(a, d, e & 1);
}
zE.X = 1;
function ioa(a, d) {
  VD(a, d);
}
ioa.X = 1;
function joa(a) {
  return AE(a);
}
joa.X = 1;
function AE(a) {
  return BE(a + 33);
}
AE.X = 1;
function koa(a, d) {
  return CE(a, d);
}
koa.X = 1;
function loa(a) {
  return WD(a);
}
loa.X = 1;
function moa(a, d, e) {
  DE(a, d, e);
}
moa.X = 1;
function EE(a) {
  var d = b;
  b += 4;
  0 == (c[FE] << 24) >> 24 && Hb(FE);
  noa(d, a);
  c[GE] = c[d];
  k[GE] = k[d];
  c[GE + 1] = c[d + 1];
  k[GE + 1] = k[d + 1];
  c[GE + 2] = c[d + 2];
  k[GE + 2] = k[d + 2];
  c[GE + 3] = c[d + 3];
  k[GE + 3] = k[d + 3];
  b = d;
  return GE;
}
EE.X = 1;
function noa(a, d) {
  var e;
  e = HE(d);
  H(a, 0 + e + c[d + 32], 4 + e + c[d + 32], 8 + e + c[d + 32]);
}
noa.X = 1;
function ooa(a, d) {
  return IE(a, d);
}
ooa.X = 1;
function poa(a) {
  return HE(a);
}
poa.X = 1;
function JE(a, d) {
  KE(a, d, 1);
}
JE.X = 1;
function LE(a, d, e) {
  KE(a, d, e & 1);
}
LE.X = 1;
function qoa(a) {
  ME(a);
}
qoa.X = 1;
function NE(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
NE.X = 1;
function roa(a, d) {
  XD(a, d);
}
roa.X = 1;
function OE(a, d) {
  v[c[c[a] + 3]](a, d);
}
OE.X = 1;
function PE(a) {
  return c[a + 32];
}
PE.X = 1;
function QE(a) {
  return c[a + 21];
}
QE.X = 1;
function RE(a) {
  return c[a + 31];
}
RE.X = 1;
function SE(a, d) {
  k[a + 26] = d;
}
SE.X = 1;
function TE(a) {
  return k[a + 28];
}
TE.X = 1;
function UE(a, d) {
  c[a + 3] = d;
}
UE.X = 1;
function VE(a, d) {
  k[a + 1] = d;
}
VE.X = 1;
function WE(a, d) {
  c[a + 4] = d;
}
WE.X = 1;
function XE(a) {
  return k[a + 1];
}
XE.X = 1;
function YE(a, d) {
  c[a + 5] = d;
}
YE.X = 1;
function ZE(a) {
  return c[a + 4];
}
ZE.X = 1;
function soa(a) {
  return a + 15;
}
soa.X = 1;
function $E(a) {
  return c[a + 5];
}
$E.X = 1;
function toa(a) {
  return a + 11;
}
toa.X = 1;
function aF(a) {
  return c[a + 3];
}
aF.X = 1;
function bF(a, d) {
  c[a + 2] = d;
}
bF.X = 1;
function cF(a) {
  return c[a + 2];
}
cF.X = 1;
function dF(a) {
  return c[a + 13];
}
dF.X = 1;
function eF(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
eF.X = 1;
function fF(a, d) {
  v[c[c[a] + 5]](a, d);
}
fF.X = 1;
function gF(a, d, e) {
  a = xb(152);
  hF(a, 0, d, e);
  return a;
}
gF.X = 1;
function uoa(a) {
  return PE(a);
}
uoa.X = 1;
function voa(a, d) {
  return iF(a, d);
}
voa.X = 1;
function woa(a) {
  return QE(a);
}
woa.X = 1;
function xoa(a) {
  return RE(a);
}
xoa.X = 1;
function yoa(a, d) {
  SE(a, d);
}
yoa.X = 1;
function zoa(a) {
  return TE(a);
}
zoa.X = 1;
function Aoa(a, d, e) {
  jF(a, d, e);
}
Aoa.X = 1;
function Boa(a, d, e) {
  kF(a, d, e);
}
Boa.X = 1;
function lF(a, d) {
  v[c[c[a] + 4]](a, d);
}
lF.X = 1;
function mF(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
mF.X = 1;
function nF(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
nF.X = 1;
function oF(a, d) {
  return v[c[c[a] + 2]](a, d);
}
oF.X = 1;
function pF(a, d, e) {
  return v[c[c[a] + 3]](a, d, e & 1);
}
pF.X = 1;
function qF(a, d) {
  var e = a + 15;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
qF.X = 1;
function Coa(a) {
  return ND(a);
}
Coa.X = 1;
function rF(a, d) {
  var e = a + 11;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
rF.X = 1;
function sF(a, d) {
  var e = xb(132);
  Doa(e, a, d);
  return e;
}
sF.X = 1;
function tF(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
tF.X = 1;
function Eoa(a) {
  return Ge(a);
}
Eoa.X = 1;
function uF(a, d) {
  var e = b;
  b += 4;
  0 == (c[vF] << 24) >> 24 && Hb(vF);
  v[c[c[a] + 15]](e, a, d);
  c[wF] = c[e];
  k[wF] = k[e];
  c[wF + 1] = c[e + 1];
  k[wF + 1] = k[e + 1];
  c[wF + 2] = c[e + 2];
  k[wF + 2] = k[e + 2];
  c[wF + 3] = c[e + 3];
  k[wF + 3] = k[e + 3];
  b = e;
  return wF;
}
uF.X = 1;
function Foa(a, d) {
  Je(a, d);
}
Foa.X = 1;
function Goa(a) {
  return dF(a);
}
Goa.X = 1;
function xF(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
xF.X = 1;
function yF(a) {
  return v[c[c[a] + 7]](a);
}
yF.X = 1;
function zF(a, d) {
  v[c[c[a] + 14]](a, d);
}
zF.X = 1;
function AF(a) {
  return v[c[c[a] + 19]](a);
}
AF.X = 1;
function Hoa(a) {
  return Ye(a);
}
Hoa.X = 1;
function BF(a) {
  return v[c[c[a] + 21]](a);
}
BF.X = 1;
function Ioa(a, d, e, f) {
  df(a, d, e, f);
}
Ioa.X = 1;
function CF(a) {
  return v[c[c[a] + 12]](a);
}
CF.X = 1;
function DF(a) {
  return v[c[c[a] + 9]](a);
}
DF.X = 1;
function Joa(a) {
  return a + 3;
}
Joa.X = 1;
function EF(a, d) {
  var e = b;
  b += 4;
  0 == (c[FF] << 24) >> 24 && Hb(FF);
  kf(e, a, d);
  c[GF] = c[e];
  k[GF] = k[e];
  c[GF + 1] = c[e + 1];
  k[GF + 1] = k[e + 1];
  c[GF + 2] = c[e + 2];
  k[GF + 2] = k[e + 2];
  c[GF + 3] = c[e + 3];
  k[GF + 3] = k[e + 3];
  b = e;
  return GF;
}
EF.X = 1;
function HF(a, d) {
  var e = b;
  b += 4;
  0 == (c[IF] << 24) >> 24 && Hb(IF);
  v[c[c[a] + 16]](e, a, d);
  c[JF] = c[e];
  k[JF] = k[e];
  c[JF + 1] = c[e + 1];
  k[JF + 1] = k[e + 1];
  c[JF + 2] = c[e + 2];
  k[JF + 2] = k[e + 2];
  c[JF + 3] = c[e + 3];
  k[JF + 3] = k[e + 3];
  b = e;
  return JF;
}
HF.X = 1;
function KF(a, d) {
  v[c[c[a] + 6]](a, d);
}
KF.X = 1;
function LF(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
LF.X = 1;
function Koa(a) {
  return Le(a);
}
Koa.X = 1;
function MF(a, d) {
  var e = b;
  b += 4;
  0 == (c[NF] << 24) >> 24 && Hb(NF);
  tf(e, a, d);
  c[OF] = c[e];
  k[OF] = k[e];
  c[OF + 1] = c[e + 1];
  k[OF + 1] = k[e + 1];
  c[OF + 2] = c[e + 2];
  k[OF + 2] = k[e + 2];
  c[OF + 3] = c[e + 3];
  k[OF + 3] = k[e + 3];
  b = e;
  return OF;
}
MF.X = 1;
function PF(a, d) {
  return v[c[c[a] + 5]](a, d);
}
PF.X = 1;
function Loa(a) {
  return xf(a);
}
Loa.X = 1;
function Moa(a) {
  return zf(a);
}
Moa.X = 1;
function Noa(a) {
  return Me(a);
}
Noa.X = 1;
function Ooa(a) {
  return Bf(a);
}
Ooa.X = 1;
function QF(a) {
  return v[c[c[a] + 11]](a);
}
QF.X = 1;
function RF(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
RF.X = 1;
function Poa(a) {
  return a + 7;
}
Poa.X = 1;
function Qoa(a) {
  return Gf(a);
}
Qoa.X = 1;
function Roa(a, d) {
  Jf(a, d);
}
Roa.X = 1;
function Soa(a) {
  return Kf(a);
}
Soa.X = 1;
function Toa(a) {
  return Mf(a);
}
Toa.X = 1;
function SF(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
SF.X = 1;
function TF(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
TF.X = 1;
function Uoa(a) {
  return a + 7;
}
Uoa.X = 1;
function UF(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
UF.X = 1;
function VF(a) {
  return k[a + 1];
}
VF.X = 1;
function WF(a, d) {
  c[a + 3] = d;
}
WF.X = 1;
function XF(a) {
  return c[a + 5];
}
XF.X = 1;
function YF(a, d) {
  k[a + 1] = d;
}
YF.X = 1;
function ZF(a, d) {
  c[a + 4] = d;
}
ZF.X = 1;
function $F(a, d) {
  c[a + 5] = d;
}
$F.X = 1;
function aG(a) {
  return c[a + 4];
}
aG.X = 1;
function bG(a) {
  return c[a + 3];
}
bG.X = 1;
function cG(a, d) {
  c[a + 2] = d;
}
cG.X = 1;
function dG(a) {
  return c[a + 2];
}
dG.X = 1;
function eG(a, d) {
  k[a + 8] = d;
}
eG.X = 1;
function Voa(a) {
  return a + 4;
}
Voa.X = 1;
function Woa(a) {
  return a;
}
Woa.X = 1;
function fG(a) {
  return k[a + 8];
}
fG.X = 1;
function gG(a, d, e, f) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = 0;
}
gG.X = 1;
function jc(a, d, e, f, g) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = k[g];
}
jc.X = 1;
function hG(a, d) {
  return k[a + 3] == k[d + 3]
    ? k[a + 2] != k[d + 2] ? 0 : k[a + 1] != k[d + 1] ? 0 : k[a] == k[d]
    : 0;
}
hG.X = 1;
function iG(a, d) {
  k[a + 3] = d;
}
iG.X = 1;
function jG(a, d) {
  k[a + 1] = d;
}
jG.X = 1;
function kG(a, d) {
  k[a + 2] = d;
}
kG.X = 1;
function lG(a) {
  return v[c[c[a] + 4]](a);
}
lG.X = 1;
function mG(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
mG.X = 1;
function nG(a, d) {
  v[c[c[a] + 10]](a, d);
}
nG.X = 1;
function Xoa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Xoa.X = 1;
function oG(a) {
  var d = b;
  b += 4;
  0 == (c[pG] << 24) >> 24 && Hb(pG);
  qG(d, a);
  c[rG] = c[d];
  k[rG] = k[d];
  c[rG + 1] = c[d + 1];
  k[rG + 1] = k[d + 1];
  c[rG + 2] = c[d + 2];
  k[rG + 2] = k[d + 2];
  c[rG + 3] = c[d + 3];
  k[rG + 3] = k[d + 3];
  b = d;
  return rG;
}
oG.X = 1;
function qG(a, d) {
  var e = b;
  b += 7;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = d + 7;
  c[a] = c[i];
  k[a] = k[i];
  c[a + 1] = c[i + 1];
  k[a + 1] = k[i + 1];
  c[a + 2] = c[i + 2];
  k[a + 2] = k[i + 2];
  c[a + 3] = c[i + 3];
  k[a + 3] = k[i + 3];
  k[f] = v[c[c[d] + 11]](d);
  k[g] = v[c[c[d] + 11]](d);
  k[h] = v[c[c[d] + 11]](d);
  H(e, f, g, h);
  xn(a, e);
  b = e;
}
qG.X = 1;
function Yoa(a) {
  return Uf(a);
}
Yoa.X = 1;
function Zoa(a) {
  return Ie(a);
}
Zoa.X = 1;
function $oa(a) {
  return ND(a);
}
$oa.X = 1;
function sG(a, d, e) {
  return v[c[c[a] + 3]](a, d, e & 1);
}
sG.X = 1;
function tG(a, d) {
  return v[c[c[a] + 2]](a, d);
}
tG.X = 1;
function uG(a) {
  0 != (a | 0) && xe(a);
}
uG.X = 1;
function vG() {
  var a = xb(36);
  wG(a);
  return a;
}
vG.X = 1;
function xG(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
xG.X = 1;
function yG(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
}
yG.X = 1;
function zG(a) {
  0 != (a | 0) && xe(a);
}
zG.X = 1;
function apa(a, d) {
  AG(a, d);
}
apa.X = 1;
function AG(a, d) {
  BB(a, d);
  BB(a + 1, d + 1);
  BB(a + 2, d + 2);
  BB(a + 3, d + 3);
}
AG.X = 1;
function BG(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  gG(a, g, h, i);
  b = g;
}
BG.X = 1;
function CG(a, d, e, f, g) {
  var h = b;
  b += 4;
  var i = h + 1,
    j = h + 2,
    l = h + 3;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  k[l] = g;
  jc(a, h, i, j, l);
  b = h;
}
CG.X = 1;
function bpa(a, d) {
  DG(a, d);
}
bpa.X = 1;
function DG(a, d) {
  RB(a, d);
  RB(a + 1, d + 1);
  RB(a + 2, d + 2);
  RB(a + 3, d + 3);
}
DG.X = 1;
function cpa(a, d) {
  return hG(a, d);
}
cpa.X = 1;
function dpa(a) {
  return k[a];
}
dpa.X = 1;
function EG(a) {
  return k[a + 1];
}
EG.X = 1;
function FG(a) {
  return k[a + 2];
}
FG.X = 1;
function epa(a, d) {
  iG(a, d);
}
epa.X = 1;
function GG(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  return 0 != (a | 0);
}
GG.X = 1;
function HG(a) {
  return k[a + 3];
}
HG.X = 1;
function IG(a) {
  return k[a + 1];
}
IG.X = 1;
function fpa(a) {
  return k[a];
}
fpa.X = 1;
function JG(a) {
  return k[a + 2];
}
JG.X = 1;
function gpa(a, d) {
  k[a] = d;
}
gpa.X = 1;
function hpa(a, d) {
  jG(a, d);
}
hpa.X = 1;
function ipa(a, d) {
  kG(a, d);
}
ipa.X = 1;
function KG() {
  return xb(16);
}
KG.X = 1;
function LG(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = a;
  k[g] = d;
  k[h] = e;
  a = xb(16);
  jpa(a, f, g, h);
  b = f;
  return a;
}
LG.X = 1;
function MG(a, d, e, f) {
  var g = b;
  b += 4;
  var h = g + 1,
    i = g + 2,
    j = g + 3;
  k[g] = a;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  a = xb(16);
  NG(a, g, h, i, j);
  b = g;
  return a;
}
MG.X = 1;
function OG(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
OG.X = 1;
function kpa(a) {
  return Ge(a);
}
kpa.X = 1;
function PG(a) {
  var d = Se(56);
  QG(d, a);
  return d;
}
PG.X = 1;
function He(a) {
  return 31 == (a | 0);
}
He.X = 1;
function bf(a) {
  return 7 > (a | 0);
}
bf.X = 1;
function yf(a) {
  return 20 > (a | 0);
}
yf.X = 1;
function RG(a, d) {
  k[a + 9] = d;
}
RG.X = 1;
function SG(a) {
  return k[a + 9];
}
SG.X = 1;
function lpa(a) {
  return a + 5;
}
lpa.X = 1;
function mpa(a) {
  return a + 1;
}
mpa.X = 1;
function npa(a) {
  return c[a];
}
npa.X = 1;
function TG(a) {
  return c[a + 16];
}
TG.X = 1;
function UG(a, d) {
  c[a + 16] = d;
}
UG.X = 1;
function opa(a, d) {
  c[a] = d;
}
opa.X = 1;
function VG(a) {
  return c[a + 13];
}
VG.X = 1;
function ppa(a) {
  return a + 5;
}
ppa.X = 1;
function WG(a, d) {
  c[a + 4] = d;
}
WG.X = 1;
function XG(a) {
  return c[a + 2];
}
XG.X = 1;
function YG(a) {
  return c[a + 4];
}
YG.X = 1;
function qpa(a) {
  return a + 9;
}
qpa.X = 1;
function ZG(a, d) {
  c[a + 3] = d;
}
ZG.X = 1;
function $G(a, d) {
  c[a + 1] = d;
}
$G.X = 1;
function aH(a, d) {
  var e = b;
  b += 4;
  0 == (c[bH] << 24) >> 24 && Hb(bH);
  v[c[c[a] + 15]](e, a, d);
  c[cH] = c[e];
  k[cH] = k[e];
  c[cH + 1] = c[e + 1];
  k[cH + 1] = k[e + 1];
  c[cH + 2] = c[e + 2];
  k[cH + 2] = k[e + 2];
  c[cH + 3] = c[e + 3];
  k[cH + 3] = k[e + 3];
  b = e;
  return cH;
}
aH.X = 1;
function rpa(a, d) {
  Je(a, d);
}
rpa.X = 1;
function spa(a) {
  return dF(a);
}
spa.X = 1;
function dH(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
dH.X = 1;
function eH(a) {
  return v[c[c[a] + 7]](a);
}
eH.X = 1;
function fH(a) {
  return v[c[c[a] + 19]](a);
}
fH.X = 1;
function tpa(a) {
  return Ye(a);
}
tpa.X = 1;
function gH(a) {
  return v[c[c[a] + 21]](a);
}
gH.X = 1;
function upa(a, d, e, f) {
  df(a, d, e, f);
}
upa.X = 1;
function hH(a) {
  return v[c[c[a] + 12]](a);
}
hH.X = 1;
function iH(a) {
  return v[c[c[a] + 9]](a);
}
iH.X = 1;
function vpa(a) {
  return a + 3;
}
vpa.X = 1;
function jH(a, d) {
  var e = b;
  b += 4;
  0 == (c[kH] << 24) >> 24 && Hb(kH);
  kf(e, a, d);
  c[lH] = c[e];
  k[lH] = k[e];
  c[lH + 1] = c[e + 1];
  k[lH + 1] = k[e + 1];
  c[lH + 2] = c[e + 2];
  k[lH + 2] = k[e + 2];
  c[lH + 3] = c[e + 3];
  k[lH + 3] = k[e + 3];
  b = e;
  return lH;
}
jH.X = 1;
function mH(a, d) {
  var e = b;
  b += 4;
  0 == (c[nH] << 24) >> 24 && Hb(nH);
  v[c[c[a] + 16]](e, a, d);
  c[oH] = c[e];
  k[oH] = k[e];
  c[oH + 1] = c[e + 1];
  k[oH + 1] = k[e + 1];
  c[oH + 2] = c[e + 2];
  k[oH + 2] = k[e + 2];
  c[oH + 3] = c[e + 3];
  k[oH + 3] = k[e + 3];
  b = e;
  return oH;
}
mH.X = 1;
function pH(a, d) {
  v[c[c[a] + 6]](a, d);
}
pH.X = 1;
function qH(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
qH.X = 1;
function wpa(a) {
  return Le(a);
}
wpa.X = 1;
function rH(a, d) {
  var e = b;
  b += 4;
  0 == (c[sH] << 24) >> 24 && Hb(sH);
  tf(e, a, d);
  c[tH] = c[e];
  k[tH] = k[e];
  c[tH + 1] = c[e + 1];
  k[tH + 1] = k[e + 1];
  c[tH + 2] = c[e + 2];
  k[tH + 2] = k[e + 2];
  c[tH + 3] = c[e + 3];
  k[tH + 3] = k[e + 3];
  b = e;
  return tH;
}
rH.X = 1;
function uH(a, d) {
  return v[c[c[a] + 5]](a, d);
}
uH.X = 1;
function xpa(a) {
  return xf(a);
}
xpa.X = 1;
function ypa(a) {
  return zf(a);
}
ypa.X = 1;
function zpa(a) {
  return Me(a);
}
zpa.X = 1;
function Apa(a) {
  return Bf(a);
}
Apa.X = 1;
function vH(a) {
  return v[c[c[a] + 11]](a);
}
vH.X = 1;
function wH(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
wH.X = 1;
function Bpa(a) {
  return a + 7;
}
Bpa.X = 1;
function Cpa(a) {
  return Gf(a);
}
Cpa.X = 1;
function Dpa(a, d) {
  Jf(a, d);
}
Dpa.X = 1;
function Epa(a) {
  return Kf(a);
}
Epa.X = 1;
function Fpa(a) {
  return Mf(a);
}
Fpa.X = 1;
function xH(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
xH.X = 1;
function yH(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
yH.X = 1;
function Gpa(a) {
  return a + 7;
}
Gpa.X = 1;
function zH(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
zH.X = 1;
function AH(a) {
  return v[c[c[a] + 4]](a);
}
AH.X = 1;
function BH(a, d) {
  v[c[c[a] + 14]](a, d);
}
BH.X = 1;
function CH(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
CH.X = 1;
function DH(a, d) {
  v[c[c[a] + 10]](a, d);
}
DH.X = 1;
function Hpa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Hpa.X = 1;
function EH(a) {
  var d = b;
  b += 4;
  0 == (c[FH] << 24) >> 24 && Hb(FH);
  qG(d, a);
  c[GH] = c[d];
  k[GH] = k[d];
  c[GH + 1] = c[d + 1];
  k[GH + 1] = k[d + 1];
  c[GH + 2] = c[d + 2];
  k[GH + 2] = k[d + 2];
  c[GH + 3] = c[d + 3];
  k[GH + 3] = k[d + 3];
  b = d;
  return GH;
}
EH.X = 1;
function Ipa(a) {
  return Uf(a);
}
Ipa.X = 1;
function Jpa(a) {
  return Ie(a);
}
Jpa.X = 1;
function HH(a, d) {
  var e = a + 5;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
HH.X = 1;
function IH(a, d, e, f) {
  v[c[c[a] + 4]](a, d, e, f);
}
IH.X = 1;
function JH(a, d) {
  var e = a + 1;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
JH.X = 1;
function KH(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
KH.X = 1;
function LH(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
LH.X = 1;
function Kpa(a) {
  return He(a);
}
Kpa.X = 1;
function Lpa(a) {
  return bf(a);
}
Lpa.X = 1;
function Mpa(a) {
  return yf(a);
}
Mpa.X = 1;
function Npa(a) {
  return YG(a);
}
Npa.X = 1;
function Opa(a) {
  return Cf(a);
}
Opa.X = 1;
function Cf(a) {
  return Yf(a) ? (25 == (a | 0)) ^ 1 : 0;
}
Cf.X = 1;
function MH(a, d) {
  var e = a + 5;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
MH.X = 1;
function NH(a, d, e, f, g) {
  var h = OH(64);
  PH(h, a, d, e, f, g);
  return h;
}
NH.X = 1;
function OH(a) {
  return Ue(a, 16);
}
OH.X = 1;
function QH(a) {
  var d = Se(56);
  RH(d, a);
  return d;
}
QH.X = 1;
function Lf(a) {
  return 32 == (a | 0);
}
Lf.X = 1;
function Af(a) {
  return 28 == (a | 0);
}
Af.X = 1;
function Yf(a) {
  return 20 < (a | 0) ? 30 > (a | 0) : 0;
}
Yf.X = 1;
function Hf(a) {
  return 17 == (a | 0) ? 1 : 18 == (a | 0);
}
Hf.X = 1;
function SH(a) {
  return c[a + 4];
}
SH.X = 1;
function TH(a, d) {
  c[a + 2] = d;
}
TH.X = 1;
function UH(a, d) {
  c[a + 13] = d;
}
UH.X = 1;
function VH(a) {
  return c[a + 3];
}
VH.X = 1;
function WH(a) {
  return c[a + 1];
}
WH.X = 1;
function XH(a, d) {
  c[a + 1] = d;
}
XH.X = 1;
function YH(a, d) {
  c[a + 2] = d;
}
YH.X = 1;
function ZH(a) {
  return c[a + 2];
}
ZH.X = 1;
function $H(a) {
  return c[a + 1];
}
$H.X = 1;
function aI(a) {
  return c[a + 31];
}
aI.X = 1;
function bI(a, d) {
  c[a + 31] = d;
}
bI.X = 1;
function cI(a) {
  return c[a + 1];
}
cI.X = 1;
function dI(a) {
  return c[a + 34];
}
dI.X = 1;
function eI(a) {
  return c[a + 35];
}
eI.X = 1;
function fI(a, d) {
  c[a + 1] = d;
}
fI.X = 1;
function Ppa(a) {
  return Lf(a);
}
Ppa.X = 1;
function gI(a, d) {
  var e = a + 9;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
gI.X = 1;
function hI(a) {
  0 != (a | 0) && yh(a);
}
hI.X = 1;
function Qpa(a) {
  return Af(a);
}
Qpa.X = 1;
function Rpa(a) {
  return Yf(a);
}
Rpa.X = 1;
function Spa(a) {
  return Hf(a);
}
Spa.X = 1;
function iI() {
  var a = xb(8);
  Tpa(a);
  return a;
}
iI.X = 1;
function jI(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
jI.X = 1;
function kI(a, d, e, f, g, h, i, j) {
  return v[c[c[a] + 3]](a, d, e, f, g, h, i, j);
}
kI.X = 1;
function lI(a, d) {
  return v[c[c[a] + 2]](a, d);
}
lI.X = 1;
function mI(a) {
  v[c[c[a] + 5]](a);
}
mI.X = 1;
function nI(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
nI.X = 1;
function oI() {
  var a = xb(128);
  pI(a);
  return a;
}
oI.X = 1;
function qI(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
qI.X = 1;
function Upa(a) {
  return rI(a);
}
Upa.X = 1;
function Vpa(a) {
  return aI(a);
}
Vpa.X = 1;
function Wpa(a, d) {
  bI(a, d);
}
Wpa.X = 1;
function sI(a, d, e, f) {
  v[c[c[a] + 4]](a, d, e, f);
}
sI.X = 1;
function tI(a, d, e, f, g, h, i, j, l, m, n) {
  return v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, m, n);
}
tI.X = 1;
function Xpa(a, d) {
  return uI(a, d);
}
Xpa.X = 1;
function vI(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
vI.X = 1;
function Ypa(a) {
  return cI(a);
}
Ypa.X = 1;
function Zpa(a) {
  return dI(a);
}
Zpa.X = 1;
function wI(a, d, e, f) {
  v[c[c[a] + 4]](a, d, e, f);
}
wI.X = 1;
function $pa(a) {
  return eI(a);
}
$pa.X = 1;
function xI() {
  var a = xb(160);
  yI(a);
  return a;
}
xI.X = 1;
function zI(a, d) {
  var e = xb(160);
  AI(e, a, d);
  return e;
}
zI.X = 1;
function BI(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
BI.X = 1;
function CI(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
CI.X = 1;
function aqa(a) {
  DI(a);
}
aqa.X = 1;
function DI(a) {
  if (0 != (Xj(c[a + 1]) | 0)) {
    var d = c[a + 1];
    (($j(c[a + 1]) | 0) != (c[a + 34] | 0)) & 1
      ? sk(d, a + 18, a + 2)
      : sk(d, a + 2, a + 18);
  }
}
DI.X = 1;
function bqa(a, d) {
  fI(a, d);
}
bqa.X = 1;
function EI(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
EI.X = 1;
function cqa(a) {
  return Ge(a);
}
cqa.X = 1;
function FI(a, d) {
  var e = b;
  b += 4;
  0 == (c[GI] << 24) >> 24 && Hb(GI);
  v[c[c[a] + 15]](e, a, d);
  c[HI] = c[e];
  k[HI] = k[e];
  c[HI + 1] = c[e + 1];
  k[HI + 1] = k[e + 1];
  c[HI + 2] = c[e + 2];
  k[HI + 2] = k[e + 2];
  c[HI + 3] = c[e + 3];
  k[HI + 3] = k[e + 3];
  b = e;
  return HI;
}
FI.X = 1;
function dqa(a, d) {
  Je(a, d);
}
dqa.X = 1;
function eqa(a) {
  return Le(a);
}
eqa.X = 1;
function II(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
II.X = 1;
function JI(a) {
  return v[c[c[a] + 19]](a);
}
JI.X = 1;
function fqa(a) {
  return Ye(a);
}
fqa.X = 1;
function gqa(a, d) {
  return KI(a, d);
}
gqa.X = 1;
function KI(a, d) {
  return k[LI(a + 27, d)];
}
KI.X = 1;
function MI(a, d) {
  var e = b;
  b += 4;
  0 == (c[NI] << 24) >> 24 && Hb(NI);
  tf(e, a, d);
  c[OI] = c[e];
  k[OI] = k[e];
  c[OI + 1] = c[e + 1];
  k[OI + 1] = k[e + 1];
  c[OI + 2] = c[e + 2];
  k[OI + 2] = k[e + 2];
  c[OI + 3] = c[e + 3];
  k[OI + 3] = k[e + 3];
  b = e;
  return OI;
}
MI.X = 1;
function hqa(a, d, e, f) {
  df(a, d, e, f);
}
hqa.X = 1;
function PI(a) {
  return v[c[c[a] + 12]](a);
}
PI.X = 1;
function iqa(a) {
  return QI(a);
}
iqa.X = 1;
function QI(a) {
  return th(a + 22);
}
QI.X = 1;
function RI(a) {
  return v[c[c[a] + 9]](a);
}
RI.X = 1;
function jqa(a) {
  return a + 3;
}
jqa.X = 1;
function SI(a, d) {
  var e = b;
  b += 4;
  0 == (c[TI] << 24) >> 24 && Hb(TI);
  kf(e, a, d);
  c[UI] = c[e];
  k[UI] = k[e];
  c[UI + 1] = c[e + 1];
  k[UI + 1] = k[e + 1];
  c[UI + 2] = c[e + 2];
  k[UI + 2] = k[e + 2];
  c[UI + 3] = c[e + 3];
  k[UI + 3] = k[e + 3];
  b = e;
  return UI;
}
SI.X = 1;
function VI(a, d, e) {
  var f = Se(128);
  WI(f, a, d, e);
  return f;
}
VI.X = 1;
function XI(a, d) {
  c[a + 26] = d & 1;
}
XI.X = 1;
function kqa(a, d) {
  Jf(a, d);
}
kqa.X = 1;
function YI(a, d) {
  v[c[c[a] + 6]](a, d);
}
YI.X = 1;
function ZI(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
ZI.X = 1;
function lqa(a, d) {
  return $I(a, d);
}
lqa.X = 1;
function $I(a, d) {
  return jg(a + 22, d);
}
$I.X = 1;
function aJ(a, d) {
  return v[c[c[a] + 5]](a, d);
}
aJ.X = 1;
function mqa(a) {
  return xf(a);
}
mqa.X = 1;
function nqa(a) {
  return zf(a);
}
nqa.X = 1;
function oqa(a) {
  return Me(a);
}
oqa.X = 1;
function pqa(a) {
  return Bf(a);
}
pqa.X = 1;
function bJ(a) {
  return v[c[c[a] + 11]](a);
}
bJ.X = 1;
function qqa(a) {
  cJ(a);
}
qqa.X = 1;
function dJ(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
dJ.X = 1;
function eJ(a, d) {
  v[c[c[a] + 10]](a, d);
}
eJ.X = 1;
function rqa(a) {
  return Gf(a);
}
rqa.X = 1;
function fJ(a) {
  return v[c[c[a] + 7]](a);
}
fJ.X = 1;
function gJ(a, d) {
  var e = b;
  b += 4;
  0 == (c[hJ] << 24) >> 24 && Hb(hJ);
  v[c[c[a] + 16]](e, a, d);
  c[iJ] = c[e];
  k[iJ] = k[e];
  c[iJ + 1] = c[e + 1];
  k[iJ + 1] = k[e + 1];
  c[iJ + 2] = c[e + 2];
  k[iJ + 2] = k[e + 2];
  c[iJ + 3] = c[e + 3];
  k[iJ + 3] = k[e + 3];
  b = e;
  return iJ;
}
gJ.X = 1;
function sqa(a) {
  return Kf(a);
}
sqa.X = 1;
function tqa(a) {
  return Mf(a);
}
tqa.X = 1;
function jJ(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
jJ.X = 1;
function kJ(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
kJ.X = 1;
function uqa(a) {
  return a + 7;
}
uqa.X = 1;
function lJ(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
lJ.X = 1;
function mJ(a) {
  return v[c[c[a] + 4]](a);
}
mJ.X = 1;
function nJ(a, d) {
  v[c[c[a] + 14]](a, d);
}
nJ.X = 1;
function oJ(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
oJ.X = 1;
function vqa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
vqa.X = 1;
function wqa(a) {
  return Uf(a);
}
wqa.X = 1;
function xqa(a) {
  return Ie(a);
}
xqa.X = 1;
function pJ(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
pJ.X = 1;
function yqa(a, d) {
  Je(a, d);
}
yqa.X = 1;
function qJ(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
qJ.X = 1;
function rJ(a) {
  return v[c[c[a] + 7]](a);
}
rJ.X = 1;
function sJ(a, d, e, f, g, h, i) {
  var h = h & 1,
    i = i & 1,
    j = xb(124);
  tJ(j, a, d, e, f, g, h & 1, i & 1);
  return j;
}
sJ.X = 1;
function uJ(a, d, e, f, g, h, i, j, l) {
  var l = l & 1,
    m = xb(124);
  vJ(m, a, d, e, f, g, h, i, j, l & 1);
  return m;
}
uJ.X = 1;
function wJ(a, d, e, f) {
  v[c[c[a] + 15]](a, d, e, f);
}
wJ.X = 1;
function xJ(a) {
  return v[c[c[a] + 12]](a);
}
xJ.X = 1;
function yJ(a) {
  return v[c[c[a] + 9]](a);
}
yJ.X = 1;
function zqa(a) {
  return Ge(a);
}
zqa.X = 1;
function Aqa(a) {
  return Ye(a);
}
Aqa.X = 1;
function zJ(a, d) {
  v[c[c[a] + 6]](a, d);
}
zJ.X = 1;
function AJ(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
AJ.X = 1;
function BJ(a) {
  XI(a, 1);
}
BJ.X = 1;
function CJ(a, d) {
  XI(a, d & 1);
}
CJ.X = 1;
function DJ(a, d) {
  return v[c[c[a] + 5]](a, d);
}
DJ.X = 1;
function Bqa(a) {
  return xf(a);
}
Bqa.X = 1;
function Cqa(a) {
  return zf(a);
}
Cqa.X = 1;
function Dqa(a) {
  return Me(a);
}
Dqa.X = 1;
function Eqa(a) {
  return Bf(a);
}
Eqa.X = 1;
function EJ(a) {
  return v[c[c[a] + 11]](a);
}
EJ.X = 1;
function FJ(a, d) {
  v[c[c[a] + 10]](a, d);
}
FJ.X = 1;
function Fqa(a) {
  return Gf(a);
}
Fqa.X = 1;
function Gqa(a) {
  return Kf(a);
}
Gqa.X = 1;
function GJ(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
GJ.X = 1;
function Hqa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Hqa.X = 1;
function Iqa(a) {
  return Uf(a);
}
Iqa.X = 1;
function HJ(a) {
  return v[c[c[a] + 4]](a);
}
HJ.X = 1;
function IJ(a, d) {
  v[c[c[a] + 14]](a, d);
}
IJ.X = 1;
function JJ(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
JJ.X = 1;
function Jqa(a) {
  return Ie(a);
}
Jqa.X = 1;
function KJ(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
KJ.X = 1;
function Kqa(a) {
  return Ge(a);
}
Kqa.X = 1;
function LJ(a, d) {
  var e = b;
  b += 4;
  0 == (c[MJ] << 24) >> 24 && Hb(MJ);
  v[c[c[a] + 15]](e, a, d);
  c[NJ] = c[e];
  k[NJ] = k[e];
  c[NJ + 1] = c[e + 1];
  k[NJ + 1] = k[e + 1];
  c[NJ + 2] = c[e + 2];
  k[NJ + 2] = k[e + 2];
  c[NJ + 3] = c[e + 3];
  k[NJ + 3] = k[e + 3];
  b = e;
  return NJ;
}
LJ.X = 1;
function Lqa(a, d) {
  Je(a, d);
}
Lqa.X = 1;
function Mqa(a) {
  return Le(a);
}
Mqa.X = 1;
function OJ(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
OJ.X = 1;
function PJ(a) {
  return v[c[c[a] + 7]](a);
}
PJ.X = 1;
function QJ(a) {
  return v[c[c[a] + 19]](a);
}
QJ.X = 1;
function Nqa(a) {
  return Ye(a);
}
Nqa.X = 1;
function RJ(a, d) {
  var e = b;
  b += 4;
  0 == (c[SJ] << 24) >> 24 && Hb(SJ);
  tf(e, a, d);
  c[TJ] = c[e];
  k[TJ] = k[e];
  c[TJ + 1] = c[e + 1];
  k[TJ + 1] = k[e + 1];
  c[TJ + 2] = c[e + 2];
  k[TJ + 2] = k[e + 2];
  c[TJ + 3] = c[e + 3];
  k[TJ + 3] = k[e + 3];
  b = e;
  return TJ;
}
RJ.X = 1;
function Oqa(a, d, e, f) {
  df(a, d, e, f);
}
Oqa.X = 1;
function UJ(a) {
  return v[c[c[a] + 12]](a);
}
UJ.X = 1;
function VJ(a) {
  return v[c[c[a] + 9]](a);
}
VJ.X = 1;
function Pqa(a) {
  return a + 3;
}
Pqa.X = 1;
function WJ(a, d) {
  var e = b;
  b += 4;
  0 == (c[XJ] << 24) >> 24 && Hb(XJ);
  kf(e, a, d);
  c[YJ] = c[e];
  k[YJ] = k[e];
  c[YJ + 1] = c[e + 1];
  k[YJ + 1] = k[e + 1];
  c[YJ + 2] = c[e + 2];
  k[YJ + 2] = k[e + 2];
  c[YJ + 3] = c[e + 3];
  k[YJ + 3] = k[e + 3];
  b = e;
  return YJ;
}
WJ.X = 1;
function Qqa(a, d) {
  Jf(a, d);
}
Qqa.X = 1;
function ZJ(a, d) {
  v[c[c[a] + 6]](a, d);
}
ZJ.X = 1;
function $J(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
$J.X = 1;
function aK(a, d) {
  return v[c[c[a] + 5]](a, d);
}
aK.X = 1;
function Rqa(a) {
  return xf(a);
}
Rqa.X = 1;
function Sqa(a) {
  return zf(a);
}
Sqa.X = 1;
function Tqa(a) {
  return Me(a);
}
Tqa.X = 1;
function Uqa(a) {
  return Bf(a);
}
Uqa.X = 1;
function bK(a) {
  return v[c[c[a] + 11]](a);
}
bK.X = 1;
function Vqa(a) {
  cJ(a);
}
Vqa.X = 1;
function cK(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
cK.X = 1;
function dK(a, d) {
  v[c[c[a] + 10]](a, d);
}
dK.X = 1;
function Wqa(a) {
  return Gf(a);
}
Wqa.X = 1;
function eK(a, d) {
  var e = b;
  b += 4;
  0 == (c[fK] << 24) >> 24 && Hb(fK);
  v[c[c[a] + 16]](e, a, d);
  c[gK] = c[e];
  k[gK] = k[e];
  c[gK + 1] = c[e + 1];
  k[gK + 1] = k[e + 1];
  c[gK + 2] = c[e + 2];
  k[gK + 2] = k[e + 2];
  c[gK + 3] = c[e + 3];
  k[gK + 3] = k[e + 3];
  b = e;
  return gK;
}
eK.X = 1;
function Xqa(a) {
  return Kf(a);
}
Xqa.X = 1;
function Yqa(a) {
  return Mf(a);
}
Yqa.X = 1;
function hK(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
hK.X = 1;
function iK(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
iK.X = 1;
function Zqa(a) {
  return a + 7;
}
Zqa.X = 1;
function jK(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
jK.X = 1;
function kK(a) {
  return v[c[c[a] + 4]](a);
}
kK.X = 1;
function lK(a, d) {
  v[c[c[a] + 14]](a, d);
}
lK.X = 1;
function mK(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
mK.X = 1;
function $qa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
$qa.X = 1;
function ara(a) {
  return Uf(a);
}
ara.X = 1;
function bra(a) {
  return Ie(a);
}
bra.X = 1;
function nK(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
nK.X = 1;
function oK(a, d) {
  var e = b;
  b += 4;
  0 == (c[pK] << 24) >> 24 && Hb(pK);
  v[c[c[a] + 15]](e, a, d);
  c[qK] = c[e];
  k[qK] = k[e];
  c[qK + 1] = c[e + 1];
  k[qK + 1] = k[e + 1];
  c[qK + 2] = c[e + 2];
  k[qK + 2] = k[e + 2];
  c[qK + 3] = c[e + 3];
  k[qK + 3] = k[e + 3];
  b = e;
  return qK;
}
oK.X = 1;
function cra(a, d) {
  Je(a, d);
}
cra.X = 1;
function rK(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
rK.X = 1;
function sK(a) {
  return v[c[c[a] + 7]](a);
}
sK.X = 1;
function tK(a) {
  return v[c[c[a] + 19]](a);
}
tK.X = 1;
function dra(a) {
  return Ye(a);
}
dra.X = 1;
function uK(a, d) {
  var e = b;
  b += 4;
  0 == (c[vK] << 24) >> 24 && Hb(vK);
  tf(e, a, d);
  c[wK] = c[e];
  k[wK] = k[e];
  c[wK + 1] = c[e + 1];
  k[wK + 1] = k[e + 1];
  c[wK + 2] = c[e + 2];
  k[wK + 2] = k[e + 2];
  c[wK + 3] = c[e + 3];
  k[wK + 3] = k[e + 3];
  b = e;
  return wK;
}
uK.X = 1;
function era(a, d, e, f) {
  df(a, d, e, f);
}
era.X = 1;
function xK(a) {
  return v[c[c[a] + 12]](a);
}
xK.X = 1;
function yK(a) {
  return v[c[c[a] + 9]](a);
}
yK.X = 1;
function fra(a) {
  return Ge(a);
}
fra.X = 1;
function zK(a, d) {
  var e = b;
  b += 4;
  0 == (c[AK] << 24) >> 24 && Hb(AK);
  kf(e, a, d);
  c[BK] = c[e];
  k[BK] = k[e];
  c[BK + 1] = c[e + 1];
  k[BK + 1] = k[e + 1];
  c[BK + 2] = c[e + 2];
  k[BK + 2] = k[e + 2];
  c[BK + 3] = c[e + 3];
  k[BK + 3] = k[e + 3];
  b = e;
  return BK;
}
zK.X = 1;
function CK(a, d) {
  v[c[c[a] + 6]](a, d);
}
CK.X = 1;
function DK(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
DK.X = 1;
function EK(a, d) {
  return v[c[c[a] + 5]](a, d);
}
EK.X = 1;
function gra(a) {
  return xf(a);
}
gra.X = 1;
function hra(a) {
  return zf(a);
}
hra.X = 1;
function ira(a) {
  return Me(a);
}
ira.X = 1;
function jra(a) {
  return Bf(a);
}
jra.X = 1;
function FK(a) {
  return v[c[c[a] + 11]](a);
}
FK.X = 1;
function GK(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
GK.X = 1;
function HK(a, d) {
  v[c[c[a] + 10]](a, d);
}
HK.X = 1;
function kra(a) {
  return Gf(a);
}
kra.X = 1;
function IK(a, d) {
  var e = b;
  b += 4;
  0 == (c[JK] << 24) >> 24 && Hb(JK);
  v[c[c[a] + 16]](e, a, d);
  c[KK] = c[e];
  k[KK] = k[e];
  c[KK + 1] = c[e + 1];
  k[KK + 1] = k[e + 1];
  c[KK + 2] = c[e + 2];
  k[KK + 2] = k[e + 2];
  c[KK + 3] = c[e + 3];
  k[KK + 3] = k[e + 3];
  b = e;
  return KK;
}
IK.X = 1;
function lra(a) {
  return Kf(a);
}
lra.X = 1;
function mra(a) {
  return Mf(a);
}
mra.X = 1;
function LK(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
LK.X = 1;
function nra(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
nra.X = 1;
function MK(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
MK.X = 1;
function NK(a) {
  return v[c[c[a] + 4]](a);
}
NK.X = 1;
function OK(a, d) {
  v[c[c[a] + 14]](a, d);
}
OK.X = 1;
function PK(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
PK.X = 1;
function ora(a) {
  return Uf(a);
}
ora.X = 1;
function pra(a) {
  return Ie(a);
}
pra.X = 1;
function QK(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f, 0);
}
QK.X = 1;
function RK(a, d) {
  c[a + 5] = d;
}
RK.X = 1;
function SK(a, d) {
  c[a + 2] = d;
}
SK.X = 1;
function TK(a) {
  return c[a + 5];
}
TK.X = 1;
function UK(a) {
  return c[a + 1];
}
UK.X = 1;
function VK(a, d) {
  c[a + 7] = d;
}
VK.X = 1;
function WK(a) {
  return c[a + 6];
}
WK.X = 1;
function XK(a, d) {
  c[a + 6] = d;
}
XK.X = 1;
function YK(a) {
  return c[a + 4];
}
YK.X = 1;
function ZK(a, d) {
  c[a + 3] = d;
}
ZK.X = 1;
function $K(a) {
  return c[a + 7];
}
$K.X = 1;
function qra(a, d) {
  c[a] = d;
}
qra.X = 1;
function aL(a) {
  return c[a + 2];
}
aL.X = 1;
function rra(a) {
  return c[a];
}
rra.X = 1;
function bL(a, d) {
  c[a + 4] = d;
}
bL.X = 1;
function cL(a) {
  return c[a + 3];
}
cL.X = 1;
function dL(a, d) {
  c[a + 1] = d;
}
dL.X = 1;
function sra(a) {
  return a + 8;
}
sra.X = 1;
function tra(a) {
  return a;
}
tra.X = 1;
function eL(a) {
  return k[a + 20];
}
eL.X = 1;
function fL(a, d) {
  k[a + 20] = d;
}
fL.X = 1;
function gL(a) {
  return k[a + 20];
}
gL.X = 1;
function ura(a) {
  return a + 12;
}
ura.X = 1;
function vra(a) {
  return a + 4;
}
vra.X = 1;
function wra(a) {
  return a + 16;
}
wra.X = 1;
function hL(a, d, e, f, g) {
  v[c[c[a] + 2]](a, d, e, f, g & 1);
}
hL.X = 1;
function iL(a) {
  0 != (a | 0) && xe(a);
}
iL.X = 1;
function jL() {
  var a = xb(32);
  Hj(a);
  return a;
}
jL.X = 1;
function kL(a, d) {
  return v[c[c[a] + 14]](a, d);
}
kL.X = 1;
function lL(a, d) {
  return v[c[c[a] + 10]](a, d);
}
lL.X = 1;
function mL(a) {
  return v[c[c[a] + 9]](a);
}
mL.X = 1;
function nL(a, d) {
  v[c[c[a] + 5]](a, d);
}
nL.X = 1;
function oL(a, d) {
  v[c[c[a] + 15]](a, d);
}
oL.X = 1;
function pL(a) {
  return v[c[c[a] + 11]](a);
}
pL.X = 1;
function qL(a, d, e) {
  return v[c[c[a] + 2]](a, d, e, 0);
}
qL.X = 1;
function rL(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f);
}
rL.X = 1;
function sL(a, d, e) {
  return v[c[c[a] + 7]](a, d, e);
}
sL.X = 1;
function tL(a, d, e) {
  return v[c[c[a] + 3]](a, d, e);
}
tL.X = 1;
function uL(a, d, e, f) {
  v[c[c[a] + 8]](a, d, e, f);
}
uL.X = 1;
function vL(a) {
  return v[c[c[a] + 12]](a);
}
vL.X = 1;
function wL(a, d, e) {
  return v[c[c[a] + 6]](a, d, e);
}
wL.X = 1;
function xL(a, d) {
  v[c[c[a] + 4]](a, d);
}
xL.X = 1;
function yL(a) {
  0 != (a | 0) && xe(a);
}
yL.X = 1;
function zL(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
}
zL.X = 1;
function AL() {
  return xb(84);
}
AL.X = 1;
function BL(a, d, e, f) {
  var g = xb(84);
  xra(g, a, d, e, f);
  return g;
}
BL.X = 1;
function CL(a, d, e, f, g) {
  var h = xb(84);
  DL(h, a, d, e, f, g);
  return h;
}
CL.X = 1;
function EL(a, d, e, f, g, h) {
  var i = xb(84);
  yra(i, a, d, e, f, g, h);
  return i;
}
EL.X = 1;
function FL(a, d, e, f, g, h, i, j, l) {
  var m = xb(84);
  GL(m, a, d, e, f, g, h, i, j, l);
  return m;
}
FL.X = 1;
function HL(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
HL.X = 1;
function zra(a) {
  return eL(a);
}
zra.X = 1;
function Ara(a, d, e, f, g) {
  return IL(a, d, e, f, g);
}
Ara.X = 1;
function IL(a, d, e, f, g) {
  var h = b;
  b += 12;
  var i = h + 4,
    j = h + 8;
  N(h, d, f);
  ig(i, e, a + 4);
  ig(j, g, a + 8);
  JL(h, a);
  xn(i, j);
  xn(i, h);
  a = k[i] + k[i + 1] + k[i + 2] + 1.1920928955078125e-7;
  b = h;
  return a;
}
IL.X = 1;
function KL(a, d) {
  var e = a + 8;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
KL.X = 1;
function Bra(a, d, e) {
  return LL(a, d, e);
}
Bra.X = 1;
function LL(a, d, e) {
  return e * J(a, d) + J(a + 12, d + 4);
}
LL.X = 1;
function Cra(a, d, e, f) {
  return ML(a, d, e, f);
}
Cra.X = 1;
function ML(a, d, e, f) {
  var g = b;
  b += 34;
  var h = g + 1,
    i = g + 2,
    j = g + 6,
    l = g + 10,
    m = g + 14,
    n = g + 18,
    p = g + 22,
    r = g + 26,
    s = g + 30;
  k[g] = e;
  k[h] = f;
  ig(i, a, d);
  ig(j, a + 12, d + 4);
  ig(l, a + 16, d + 8);
  Q(m, i, g);
  Q(n, i, h);
  wn(s, j, l);
  wn(r, s, m);
  wn(p, r, n);
  a = k[p] + k[p + 1] + k[p + 2];
  b = g;
  return a;
}
ML.X = 1;
function NL(a, d) {
  var e = a + 16;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
NL.X = 1;
function OL(a, d) {
  var e = a + 12;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
OL.X = 1;
function PL(a, d, e) {
  return v[c[c[a] + 2]](a, d, e);
}
PL.X = 1;
function QL(a, d, e, f) {
  return v[c[c[a] + 3]](a, d, e, f);
}
QL.X = 1;
function RL(a, d, e) {
  v[c[c[a] + 4]](a, d, e);
}
RL.X = 1;
function SL(a) {
  a = c[a];
  a += (a << 15) ^ -1;
  a ^= a >> 10;
  a = (a << 3) + a;
  a ^= a >> 6;
  a += (a << 11) ^ -1;
  return a ^ (a >> 16);
}
SL.X = 1;
function TL(a) {
  return c[a + 1] & 1;
}
TL.X = 1;
function UL(a, d) {
  c[a + 1] = d & 1;
}
UL.X = 1;
function VL(a, d) {
  var e, f;
  0 == (c[a + (d + 46)] | 0)
    ? 0 != ((c[a + (d + 27)] & 1) | 0) ? (e = 5) : ((f = 0), (e = 6))
    : (e = 5);
  5 == e && (f = 1);
  return f;
}
VL.X = 1;
function Dra(a) {
  return a + 38;
}
Dra.X = 1;
function Era(a) {
  return a + 42;
}
Era.X = 1;
function Fra(a) {
  return a + 19;
}
Fra.X = 1;
function Gra(a) {
  return a + 23;
}
Gra.X = 1;
function Hra(a) {
  return a;
}
Hra.X = 1;
function WL(a, d) {
  k[a + 14] = d;
}
WL.X = 1;
function XL(a, d) {
  k[a + 12] = d;
}
XL.X = 1;
function YL(a) {
  return k[a + 14];
}
YL.X = 1;
function Ira(a) {
  return a + 30;
}
Ira.X = 1;
function Jra(a) {
  return a + 34;
}
Jra.X = 1;
function ZL(a, d) {
  k[a + 13] = d;
}
ZL.X = 1;
function Kra(a) {
  return a + 4;
}
Kra.X = 1;
function $L(a) {
  return k[a + 13];
}
$L.X = 1;
function Lra(a) {
  return a + 15;
}
Lra.X = 1;
function aM(a) {
  0 != (a | 0) && xe(a);
}
aM.X = 1;
function Mra(a, d) {
  c[a] = d;
}
Mra.X = 1;
function bM(a) {
  var d = xb(4);
  c[d] = a;
  return d;
}
bM.X = 1;
function Nra(a, d) {
  return cM(a, d);
}
Nra.X = 1;
function cM(a, d) {
  return (c[a] | 0) == (c[d] | 0);
}
cM.X = 1;
function Ora(a) {
  return c[a];
}
Ora.X = 1;
function Pra(a) {
  return SL(a);
}
Pra.X = 1;
function dM(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
dM.X = 1;
function eM(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f);
}
eM.X = 1;
function fM() {
  var a = xb(8);
  gM(a);
  return a;
}
fM.X = 1;
function Qra(a, d) {
  Tk(a, d);
}
Qra.X = 1;
function hM(a, d) {
  v[c[c[a] + 11]](a, d);
}
hM.X = 1;
function Rra(a) {
  return Sk(a);
}
Rra.X = 1;
function Sra(a) {
  return a + 7;
}
Sra.X = 1;
function iM(a) {
  return v[c[c[a] + 4]](a);
}
iM.X = 1;
function jM(a) {
  v[c[c[a] + 10]](a);
}
jM.X = 1;
function Tra(a) {
  return a + 1;
}
Tra.X = 1;
function kM(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
kM.X = 1;
function lM(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
lM.X = 1;
function mM(a, d) {
  v[c[c[a] + 8]](a, d, 1, -1);
}
mM.X = 1;
function nM(a, d, e) {
  v[c[c[a] + 8]](a, d, e, -1);
}
nM.X = 1;
function oM(a, d, e, f) {
  v[c[c[a] + 8]](a, d, e, f);
}
oM.X = 1;
function pM(a, d, e) {
  var f = xb(88);
  qM(f, a, d, e);
  return f;
}
pM.X = 1;
function Ura(a, d, e) {
  Jl(a, d, e);
}
Ura.X = 1;
function Vra(a) {
  return Vk(a);
}
Vra.X = 1;
function rM(a) {
  v[c[c[a] + 2]](a);
}
rM.X = 1;
function sM(a, d) {
  v[c[c[a] + 3]](a, d);
}
sM.X = 1;
function tM(a) {
  v[c[c[a] + 5]](a);
}
tM.X = 1;
function uM(a, d, e, f, g) {
  Rl(a, d, e, f, g, 0);
}
uM.X = 1;
function Wra(a, d, e, f, g, h) {
  Rl(a, d, e, f, g, h);
}
Wra.X = 1;
function Xra(a) {
  return Sl(a);
}
Xra.X = 1;
function Yra(a, d, e, f) {
  Xl(a, d, e, f);
}
Yra.X = 1;
function Zra(a) {
  return am(a);
}
Zra.X = 1;
function $ra(a, d, e, f, g, h) {
  mm(a, d, e, f, g, h);
}
$ra.X = 1;
function vM(a, d) {
  bm(a, d & 1);
}
vM.X = 1;
function wM(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
wM.X = 1;
function asa(a, d, e, f, g, h, i, j) {
  Dm(a, d, e, f, g, h, i, j);
}
asa.X = 1;
function bsa(a, d) {
  ym(a, d);
}
bsa.X = 1;
function csa(a) {
  return Am(a);
}
csa.X = 1;
function xM(a, d) {
  v[c[c[a] + 9]](a, d);
}
xM.X = 1;
function yM(a, d) {
  var e = a + 38;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
yM.X = 1;
function dsa(a, d) {
  return VL(a, d);
}
dsa.X = 1;
function zM(a, d) {
  var e = a + 19;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
zM.X = 1;
function AM(a, d) {
  var e = a + 23;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
AM.X = 1;
function BM(a, d) {
  var e = a + 34;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
BM.X = 1;
function esa(a, d, e) {
  return CM(a, d, e);
}
esa.X = 1;
function DM(a, d) {
  var e = a + 42;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
DM.X = 1;
function EM(a, d) {
  var e = a + 8;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
EM.X = 1;
function FM() {
  var a = xb(188);
  GM(a);
  return a;
}
FM.X = 1;
function HM(a) {
  var d = xb(188);
  fsa(d, a);
  return d;
}
HM.X = 1;
function IM(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
IM.X = 1;
function JM(a) {
  0 != (a | 0) && xe(a);
}
JM.X = 1;
function KM(a, d) {
  var e = a + 15;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
KM.X = 1;
function LM(a, d) {
  var e = a + 30;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
LM.X = 1;
function gsa(a, d) {
  return MM(a, d);
}
gsa.X = 1;
function hsa(a) {
  return a + 8;
}
hsa.X = 1;
function NM(a) {
  return k[a + 12];
}
NM.X = 1;
function OM(a) {
  $VOID_IS_8 = 0;
  a = c[a];
  a += (a << 15) ^ -1;
  a ^= a >> 10;
  a = (a << 3) + a;
  a ^= a >> 6;
  a += (a << 11) ^ -1;
  return a ^ (a >> 16);
}
OM.X = 1;
function MM(a, d) {
  return k[a + 4 + d] >= k[a + d];
}
MM.X = 1;
function PM(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
}
PM.X = 1;
function isa(a, d, e, f, g, h, i, j, l, m) {
  return QM(a, d, e, f, g, h, i, j, l, m);
}
isa.X = 1;
function RM(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
RM.X = 1;
function SM(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
SM.X = 1;
function jsa(a) {
  return Ge(a);
}
jsa.X = 1;
function TM(a, d) {
  var e = b;
  b += 4;
  0 == (c[UM] << 24) >> 24 && Hb(UM);
  v[c[c[a] + 15]](e, a, d);
  c[VM] = c[e];
  k[VM] = k[e];
  c[VM + 1] = c[e + 1];
  k[VM + 1] = k[e + 1];
  c[VM + 2] = c[e + 2];
  k[VM + 2] = k[e + 2];
  c[VM + 3] = c[e + 3];
  k[VM + 3] = k[e + 3];
  b = e;
  return VM;
}
TM.X = 1;
function ksa(a, d) {
  Je(a, d);
}
ksa.X = 1;
function lsa(a) {
  return Le(a);
}
lsa.X = 1;
function WM(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
WM.X = 1;
function XM(a) {
  return v[c[c[a] + 7]](a);
}
XM.X = 1;
function YM(a) {
  return v[c[c[a] + 19]](a);
}
YM.X = 1;
function msa(a) {
  return Ye(a);
}
msa.X = 1;
function ZM(a, d) {
  var e = b;
  b += 4;
  0 == (c[$M] << 24) >> 24 && Hb($M);
  tf(e, a, d);
  c[aN] = c[e];
  k[aN] = k[e];
  c[aN + 1] = c[e + 1];
  k[aN + 1] = k[e + 1];
  c[aN + 2] = c[e + 2];
  k[aN + 2] = k[e + 2];
  c[aN + 3] = c[e + 3];
  k[aN + 3] = k[e + 3];
  b = e;
  return aN;
}
ZM.X = 1;
function nsa(a, d, e, f) {
  df(a, d, e, f);
}
nsa.X = 1;
function bN(a) {
  return v[c[c[a] + 12]](a);
}
bN.X = 1;
function cN(a) {
  return v[c[c[a] + 9]](a);
}
cN.X = 1;
function osa(a) {
  return a + 3;
}
osa.X = 1;
function dN(a, d) {
  var e = b;
  b += 4;
  0 == (c[eN] << 24) >> 24 && Hb(eN);
  kf(e, a, d);
  c[fN] = c[e];
  k[fN] = k[e];
  c[fN + 1] = c[e + 1];
  k[fN + 1] = k[e + 1];
  c[fN + 2] = c[e + 2];
  k[fN + 2] = k[e + 2];
  c[fN + 3] = c[e + 3];
  k[fN + 3] = k[e + 3];
  b = e;
  return fN;
}
dN.X = 1;
function psa(a, d) {
  Jf(a, d);
}
psa.X = 1;
function gN(a, d) {
  v[c[c[a] + 6]](a, d);
}
gN.X = 1;
function hN(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
hN.X = 1;
function iN(a, d) {
  return v[c[c[a] + 5]](a, d);
}
iN.X = 1;
function qsa(a) {
  return xf(a);
}
qsa.X = 1;
function rsa(a) {
  return zf(a);
}
rsa.X = 1;
function ssa(a) {
  return Me(a);
}
ssa.X = 1;
function tsa(a) {
  return Bf(a);
}
tsa.X = 1;
function jN(a) {
  return v[c[c[a] + 11]](a);
}
jN.X = 1;
function kN(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
kN.X = 1;
function lN(a, d) {
  v[c[c[a] + 10]](a, d);
}
lN.X = 1;
function usa(a) {
  return Gf(a);
}
usa.X = 1;
function mN(a, d) {
  var e = b;
  b += 4;
  0 == (c[nN] << 24) >> 24 && Hb(nN);
  v[c[c[a] + 16]](e, a, d);
  c[oN] = c[e];
  k[oN] = k[e];
  c[oN + 1] = c[e + 1];
  k[oN + 1] = k[e + 1];
  c[oN + 2] = c[e + 2];
  k[oN + 2] = k[e + 2];
  c[oN + 3] = c[e + 3];
  k[oN + 3] = k[e + 3];
  b = e;
  return oN;
}
mN.X = 1;
function vsa(a) {
  return Kf(a);
}
vsa.X = 1;
function wsa(a) {
  return Mf(a);
}
wsa.X = 1;
function pN(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
pN.X = 1;
function xsa(a) {
  return a + 7;
}
xsa.X = 1;
function qN(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
qN.X = 1;
function rN(a) {
  return v[c[c[a] + 4]](a);
}
rN.X = 1;
function sN(a, d) {
  v[c[c[a] + 14]](a, d);
}
sN.X = 1;
function tN(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
tN.X = 1;
function ysa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
ysa.X = 1;
function zsa(a) {
  return Uf(a);
}
zsa.X = 1;
function Asa(a) {
  return Ie(a);
}
Asa.X = 1;
function uN(a) {
  0 != (a | 0) && xe(a);
}
uN.X = 1;
function Bsa(a, d) {
  return vN(a, d);
}
Bsa.X = 1;
function vN(a, d) {
  return (c[a] | 0) == (c[d] | 0);
}
vN.X = 1;
function Csa(a) {
  return OM(a);
}
Csa.X = 1;
function wN(a) {
  var d = xb(8);
  c[d] = a;
  return d;
}
wN.X = 1;
function Dsa(a) {
  return c[a];
}
Dsa.X = 1;
function xN(a, d) {
  return v[c[c[a] + 2]](a, d);
}
xN.X = 1;
function yN(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
yN.X = 1;
function Esa(a, d) {
  Je(a, d);
}
Esa.X = 1;
function zN(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
zN.X = 1;
function AN(a) {
  return v[c[c[a] + 7]](a);
}
AN.X = 1;
function BN(a, d, e, f) {
  v[c[c[a] + 15]](a, d, e, f);
}
BN.X = 1;
function CN(a) {
  return v[c[c[a] + 12]](a);
}
CN.X = 1;
function DN(a) {
  return v[c[c[a] + 9]](a);
}
DN.X = 1;
function Fsa(a) {
  return Ge(a);
}
Fsa.X = 1;
function Gsa(a) {
  return Ye(a);
}
Gsa.X = 1;
function Hsa(a) {
  return a + 12;
}
Hsa.X = 1;
function EN(a, d) {
  v[c[c[a] + 6]](a, d);
}
EN.X = 1;
function FN(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
FN.X = 1;
function GN(a, d) {
  return v[c[c[a] + 5]](a, d);
}
GN.X = 1;
function Isa(a) {
  return xf(a);
}
Isa.X = 1;
function Jsa(a) {
  return zf(a);
}
Jsa.X = 1;
function Ksa(a) {
  return Me(a);
}
Ksa.X = 1;
function HN(a, d) {
  c[a + 4] = d;
}
HN.X = 1;
function Lsa(a) {
  return Bf(a);
}
Lsa.X = 1;
function IN(a) {
  return v[c[c[a] + 11]](a);
}
IN.X = 1;
function JN(a) {
  return k[a + 16];
}
JN.X = 1;
function KN(a, d) {
  v[c[c[a] + 10]](a, d);
}
KN.X = 1;
function Msa(a) {
  return Gf(a);
}
Msa.X = 1;
function Nsa(a) {
  return Kf(a);
}
Nsa.X = 1;
function LN(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
LN.X = 1;
function Osa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Osa.X = 1;
function MN(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
MN.X = 1;
function NN(a) {
  return v[c[c[a] + 4]](a);
}
NN.X = 1;
function ON(a, d) {
  v[c[c[a] + 14]](a, d);
}
ON.X = 1;
function PN(a, d) {
  var e = xb(84);
  QN(e, a, d);
  return e;
}
PN.X = 1;
function Psa(a) {
  return Uf(a);
}
Psa.X = 1;
function Qsa(a) {
  return Ie(a);
}
Qsa.X = 1;
function RN(a, d) {
  v[c[c[a] + 16]](a, d);
}
RN.X = 1;
function SN(a, d) {
  v[c[c[a] + 15]](a, d);
}
SN.X = 1;
function TN(a, d, e) {
  return v[c[c[a] + 2]](a, d, e);
}
TN.X = 1;
function UN(a, d, e) {
  v[c[c[a] + 4]](a, d, e);
}
UN.X = 1;
function VN(a) {
  return v[c[c[a] + 14]](a);
}
VN.X = 1;
function WN(a) {
  return v[c[c[a] + 7]](a);
}
WN.X = 1;
function XN(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
XN.X = 1;
function YN(a, d, e) {
  v[c[c[a] + 10]](a, d, e);
}
YN.X = 1;
function ZN(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
ZN.X = 1;
function $N(a) {
  return v[c[c[a] + 9]](a);
}
$N.X = 1;
function aO(a, d, e, f) {
  return v[c[c[a] + 3]](a, d, e, f);
}
aO.X = 1;
function bO(a, d) {
  v[c[c[a] + 11]](a, d);
}
bO.X = 1;
function cO(a) {
  return v[c[c[a] + 5]](a);
}
cO.X = 1;
function dO(a, d, e) {
  v[c[c[a] + 12]](a, d, e);
}
dO.X = 1;
function eO(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
eO.X = 1;
function Rsa(a, d) {
  Je(a, d);
}
Rsa.X = 1;
function fO(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
fO.X = 1;
function gO(a) {
  return v[c[c[a] + 7]](a);
}
gO.X = 1;
function hO(a) {
  return v[c[c[a] + 12]](a);
}
hO.X = 1;
function iO(a) {
  return v[c[c[a] + 9]](a);
}
iO.X = 1;
function Ssa(a) {
  return Ge(a);
}
Ssa.X = 1;
function Tsa(a) {
  return Ye(a);
}
Tsa.X = 1;
function jO(a, d) {
  v[c[c[a] + 6]](a, d);
}
jO.X = 1;
function kO(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
kO.X = 1;
function lO(a, d) {
  return v[c[c[a] + 5]](a, d);
}
lO.X = 1;
function Usa(a) {
  return xf(a);
}
Usa.X = 1;
function Vsa(a) {
  return zf(a);
}
Vsa.X = 1;
function Wsa(a) {
  return Me(a);
}
Wsa.X = 1;
function Xsa(a) {
  return Bf(a);
}
Xsa.X = 1;
function mO(a) {
  return v[c[c[a] + 11]](a);
}
mO.X = 1;
function nO(a, d) {
  v[c[c[a] + 10]](a, d);
}
nO.X = 1;
function Ysa(a) {
  return Gf(a);
}
Ysa.X = 1;
function Zsa(a) {
  return Kf(a);
}
Zsa.X = 1;
function $sa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
$sa.X = 1;
function oO(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
oO.X = 1;
function pO(a) {
  return v[c[c[a] + 4]](a);
}
pO.X = 1;
function qO(a, d) {
  v[c[c[a] + 14]](a, d);
}
qO.X = 1;
function ata(a) {
  return Uf(a);
}
ata.X = 1;
function bta(a) {
  return Ie(a);
}
bta.X = 1;
function cta(a) {
  return Ho(a);
}
cta.X = 1;
function rO(a) {
  v[c[c[a] + 2]](a);
}
rO.X = 1;
function sO(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
sO.X = 1;
function tO(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
tO.X = 1;
function dta(a) {
  return Ip(a);
}
dta.X = 1;
function uO(a, d) {
  Hp(a, d & 1);
}
uO.X = 1;
function eta(a) {
  return a + 11;
}
eta.X = 1;
function fta(a, d) {
  return vO(a, d);
}
fta.X = 1;
function gta(a) {
  return a + 27;
}
gta.X = 1;
function hta(a, d, e, f, g, h, i, j) {
  wO(a, d, e, f, g, h, i, j);
}
hta.X = 1;
function ita(a) {
  return a + 267;
}
ita.X = 1;
function jta(a) {
  return Lo(a);
}
jta.X = 1;
function xO(a, d, e) {
  var e = e & 1,
    f = xb(1304);
  yO(f, a, d, e & 1);
  return f;
}
xO.X = 1;
function zO(a, d, e, f, g) {
  var g = g & 1,
    h = xb(1304);
  AO(h, a, d, e, f, g & 1);
  return h;
}
zO.X = 1;
function kta(a) {
  return Io(a);
}
kta.X = 1;
function lta(a) {
  return Mp(a);
}
lta.X = 1;
function BO(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
BO.X = 1;
function mta(a, d) {
  c[a + 327] = d & 1;
}
mta.X = 1;
function CO(a, d) {
  return (d << 4) + a + 218;
}
CO.X = 1;
function DO(a) {
  return c[a + 327] & 1;
}
DO.X = 1;
function EO(a) {
  return c[a + 329] & 1;
}
EO.X = 1;
function FO(a, d) {
  c[a + 329] = d & 1;
}
FO.X = 1;
function GO(a) {
  return c[a + 4];
}
GO.X = 1;
function HO(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
HO.X = 1;
function IO(a, d) {
  v[c[c[a] + 4]](a, d);
}
IO.X = 1;
function JO(a, d) {
  v[c[c[a] + 5]](a, d);
}
JO.X = 1;
function KO(a) {
  v[c[c[a] + 11]](a);
}
KO.X = 1;
function nta(a, d) {
  LO(a, d);
}
nta.X = 1;
function LO(a, d) {
  var e;
  e = 0;
  for (var f = a + 218; ; ) {
    k[d + e] = k[(e << 4) + f];
    var g = e + 1;
    e = g;
    if (3 <= (g | 0)) {
      break;
    }
  }
}
LO.X = 1;
function MO(a) {
  return v[c[c[a] + 9]](a);
}
MO.X = 1;
function NO(a, d) {
  var e = b;
  b += 4;
  0 == (c[OO] << 24) >> 24 && Hb(OO);
  PO(e, a, d);
  c[QO] = c[e];
  k[QO] = k[e];
  c[QO + 1] = c[e + 1];
  k[QO + 1] = k[e + 1];
  c[QO + 2] = c[e + 2];
  k[QO + 2] = k[e + 2];
  c[QO + 3] = c[e + 3];
  k[QO + 3] = k[e + 3];
  b = e;
  return QO;
}
NO.X = 1;
function ota(a) {
  return Lp(a);
}
ota.X = 1;
function pta(a) {
  return Ap(a);
}
pta.X = 1;
function qta(a, d) {
  Bp(a, d);
}
qta.X = 1;
function rta(a, d) {
  RO(a, d);
}
rta.X = 1;
function RO(a, d) {
  var e = a + 173;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
}
RO.X = 1;
function sta(a) {
  return Cp(a);
}
sta.X = 1;
function SO(a, d) {
  Ko(a, d & 1);
}
SO.X = 1;
function TO(a, d) {
  mta(a, d & 1);
}
TO.X = 1;
function tta(a) {
  return Fp(a);
}
tta.X = 1;
function UO(a) {
  return c[a + 4];
}
UO.X = 1;
function uta(a, d) {
  return CO(a, d);
}
uta.X = 1;
function vta(a, d) {
  VO(a, d);
}
vta.X = 1;
function WO(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
WO.X = 1;
function wta(a, d) {
  XO(a, d);
}
wta.X = 1;
function XO(a, d) {
  var e = a + 169;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
XO.X = 1;
function xta(a) {
  return Dp(a);
}
xta.X = 1;
function yta(a, d) {
  YO(a, d);
}
yta.X = 1;
function YO(a, d) {
  var e = a + 169;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
}
YO.X = 1;
function zta(a, d) {
  Jp(a, d);
}
zta.X = 1;
function Ata(a, d) {
  return ZO(a, d);
}
Ata.X = 1;
function ZO(a, d) {
  return 3 > (d | 0) ? MM(a + 169, d) : Sw(((d - 3) << 4) + a + 218);
}
ZO.X = 1;
function Bta(a) {
  return DO(a);
}
Bta.X = 1;
function Cta(a, d) {
  Kp(a, d);
}
Cta.X = 1;
function Dta(a) {
  return a + 283;
}
Dta.X = 1;
function Eta(a) {
  $O(a);
}
Eta.X = 1;
function Fta(a, d, e) {
  aP(a, d, e);
}
Fta.X = 1;
function Gta(a, d) {
  Ep(a, d);
}
Gta.X = 1;
function Hta(a, d) {
  zp(a, d);
}
Hta.X = 1;
function bP(a, d, e, f, g, h, i, j, l, m, n, p) {
  return cP(a, d, e, f, g, h, i, j, l, m, n, p, 0);
}
bP.X = 1;
function Ita(a, d, e, f, g, h, i, j, l, m, n, p, r) {
  return cP(a, d, e, f, g, h, i, j, l, m, n, p, r);
}
Ita.X = 1;
function Jta(a) {
  return Op(a);
}
Jta.X = 1;
function Kta(a, d, e, f) {
  dP(a, d, e, f);
}
Kta.X = 1;
function dP(a, d, e, f) {
  3 > (d | 0)
    ? ((k[a + 169 + d] = e), (k[a + 173 + d] = f))
    : ((e = eP(e)),
      (f = eP(f)),
      (k[((d - 3) << 4) + a + 218] = e),
      (k[((d - 3) << 4) + a + 219] = f));
}
dP.X = 1;
function Lta(a) {
  return a + 169;
}
Lta.X = 1;
function fP(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
fP.X = 1;
function gP(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
gP.X = 1;
function Mta(a, d) {
  return hP(a, d);
}
Mta.X = 1;
function Nta() {}
Nta.X = 1;
function Ota(a, d) {
  iP(a, d);
}
Ota.X = 1;
function iP(a, d) {
  var e;
  e = 0;
  for (var f = a + 218; ; ) {
    k[d + e] = k[(e << 4) + f + 1];
    var g = e + 1;
    e = g;
    if (3 <= (g | 0)) {
      break;
    }
  }
}
iP.X = 1;
function Pta(a, d) {
  jP(a, d);
}
Pta.X = 1;
function jP(a, d) {
  var e;
  e = 0;
  for (var f = a + 218; ; ) {
    k[(e << 4) + f] = eP(k[d + e]);
    var g = e + 1;
    e = g;
    if (3 <= (g | 0)) {
      break;
    }
  }
}
jP.X = 1;
function Qta(a) {
  return Np(a);
}
Qta.X = 1;
function kP(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
kP.X = 1;
function Rta(a) {
  return Gp(a);
}
Rta.X = 1;
function Sta(a, d, e) {
  lP(a, d, e);
}
Sta.X = 1;
function Tta(a, d) {
  mP(a, d);
}
Tta.X = 1;
function mP(a, d) {
  var e = a + 173;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
mP.X = 1;
function Uta(a, d) {
  nP(a, d);
}
Uta.X = 1;
function nP(a, d) {
  var e;
  e = 0;
  for (var f = a + 218; ; ) {
    k[(e << 4) + f + 1] = eP(k[d + e]);
    var g = e + 1;
    e = g;
    if (3 <= (g | 0)) {
      break;
    }
  }
}
nP.X = 1;
function Vta(a, d, e) {
  oP(a, d, e);
}
Vta.X = 1;
function Wta(a, d) {
  Pp(a, d);
}
Wta.X = 1;
function Xta(a, d) {
  return pP(a, d);
}
Xta.X = 1;
function qP(a) {
  return k[a + 26];
}
qP.X = 1;
function rP(a) {
  return c[a + 29] & 1;
}
rP.X = 1;
function Yta(a, d) {
  k[a] = d;
}
Yta.X = 1;
function sP(a, d) {
  c[a + 29] = d & 1;
}
sP.X = 1;
function tP(a, d) {
  k[a + 28] = d;
}
tP.X = 1;
function uP(a, d) {
  k[a + 24] = d;
}
uP.X = 1;
function vP(a) {
  return k[a + 27];
}
vP.X = 1;
function wP(a, d) {
  k[a + 25] = d;
}
wP.X = 1;
function xP(a) {
  return k[a + 23];
}
xP.X = 1;
function yP(a) {
  return k[a + 24];
}
yP.X = 1;
function Zta(a) {
  return k[a];
}
Zta.X = 1;
function zP(a, d) {
  k[a + 23] = d;
}
zP.X = 1;
function AP(a, d) {
  k[a + 26] = d;
}
AP.X = 1;
function BP(a) {
  return k[a + 33];
}
BP.X = 1;
function CP(a) {
  return k[a + 32];
}
CP.X = 1;
function DP(a, d) {
  c[a + 18] = d;
}
DP.X = 1;
function EP(a, d) {
  k[a + 32] = d;
}
EP.X = 1;
function FP(a, d) {
  k[a + 31] = d;
}
FP.X = 1;
function GP(a) {
  return c[a + 18];
}
GP.X = 1;
function HP(a, d) {
  c[a + 1] = d;
}
HP.X = 1;
function IP(a) {
  return k[a + 25];
}
IP.X = 1;
function JP(a, d) {
  k[a + 27] = d;
}
JP.X = 1;
function $ta(a) {
  return a + 2;
}
$ta.X = 1;
function aua(a) {
  return a + 19;
}
aua.X = 1;
function KP(a) {
  return c[a + 1];
}
KP.X = 1;
function LP(a) {
  return k[a + 30];
}
LP.X = 1;
function MP(a) {
  return k[a + 31];
}
MP.X = 1;
function bua(a, d) {
  NP(a, d);
}
bua.X = 1;
function NP(a, d) {
  cua(a, d);
  pe(a + 12, d + 12, d + 13, d + 14);
}
NP.X = 1;
function dua(a, d) {
  Wb(a, d);
}
dua.X = 1;
function eua(a) {
  return a + 12;
}
eua.X = 1;
function fua(a, d) {
  OP(a, d);
}
fua.X = 1;
function OP(a, d) {
  Nb(a, d);
  Ob(a + 12, d + 12);
}
OP.X = 1;
function gua(a, d) {
  PP(a, d);
}
gua.X = 1;
function PP(a, d) {
  Pc(a, d);
  Tc(a + 12, d + 12);
}
PP.X = 1;
function QP(a) {
  var d = b;
  b += 4;
  0 == (c[RP] << 24) >> 24 && Hb(RP);
  dc(a, d);
  c[SP] = c[d];
  k[SP] = k[d];
  c[SP + 1] = c[d + 1];
  k[SP + 1] = k[d + 1];
  c[SP + 2] = c[d + 2];
  k[SP + 2] = k[d + 2];
  c[SP + 3] = c[d + 3];
  k[SP + 3] = k[d + 3];
  b = d;
  return SP;
}
QP.X = 1;
function TP(a) {
  var d = b;
  b += 16;
  0 == (c[UP] << 24) >> 24 && Hb(UP);
  uw(d, a);
  xi(VP, d);
  b = d;
  return VP;
}
TP.X = 1;
function uw(a, d) {
  var e = b;
  b += 20;
  var f = e + 12,
    g = e + 16;
  ue(e, d);
  WP(g, d + 12);
  Bo(f, e, g);
  Tz(a, e, f);
  b = e;
}
uw.X = 1;
function XP() {
  Pz();
  return Rz;
}
XP.X = 1;
function YP(a, d) {
  var e = b;
  b += 16;
  0 == (c[ZP] << 24) >> 24 && Hb(ZP);
  $P(e, a, d);
  xi(aQ, e);
  b = e;
  return aQ;
}
YP.X = 1;
function $P(a, d, e) {
  var f = b;
  b += 20;
  var g = f + 4,
    h = f + 16;
  N(f, e + 12, d + 12);
  bc(g, d, e);
  rn(h, f, d);
  Tz(a, g, h);
  b = f;
}
$P.X = 1;
function bQ(a, d) {
  var e = b;
  b += 4;
  0 == (c[cQ] << 24) >> 24 && Hb(cQ);
  vw(e, a, d);
  c[dQ] = c[e];
  k[dQ] = k[e];
  c[dQ + 1] = c[e + 1];
  k[dQ + 1] = k[e + 1];
  c[dQ + 2] = c[e + 2];
  k[dQ + 2] = k[e + 2];
  c[dQ + 3] = c[e + 3];
  k[dQ + 3] = k[e + 3];
  b = e;
  return dQ;
}
bQ.X = 1;
function hua(a, d) {
  zb(a, d);
}
hua.X = 1;
function iua(a) {
  eQ(a);
}
iua.X = 1;
function eQ(a) {
  var d = b;
  b += 3;
  var e = d + 1,
    f = d + 2;
  qd(a);
  k[d] = 0;
  k[e] = 0;
  k[f] = 0;
  pe(a + 12, d, e, f);
  b = d;
}
eQ.X = 1;
function jua(a, d) {
  return xi(a, d);
}
jua.X = 1;
function kua(a, d) {
  fQ(a, d);
}
kua.X = 1;
function fQ(a, d) {
  lua(a, d);
  k[d + 12] = k[a + 12];
  k[d + 13] = k[a + 12 + 1];
  k[d + 14] = k[a + 12 + 2];
  k[d + 15] = 1;
}
fQ.X = 1;
function mua(a, d) {
  gQ(a, d);
}
mua.X = 1;
function gQ(a, d) {
  Lb(a, d);
  Mb(a + 12, d + 12);
}
gQ.X = 1;
function nua(a, d) {
  hQ(a, d);
}
nua.X = 1;
function hQ(a, d) {
  qe(a, d);
  re(a + 12, d + 12);
}
hQ.X = 1;
function iQ(a, d) {
  var e = b;
  b += 4;
  0 == (c[jQ] << 24) >> 24 && Hb(jQ);
  kQ(e, a, d);
  c[lQ] = c[e];
  k[lQ] = k[e];
  c[lQ + 1] = c[e + 1];
  k[lQ + 1] = k[e + 1];
  c[lQ + 2] = c[e + 2];
  k[lQ + 2] = k[e + 2];
  c[lQ + 3] = c[e + 3];
  k[lQ + 3] = k[e + 3];
  b = e;
  return lQ;
}
iQ.X = 1;
function kQ(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4;
  N(f, e, d + 12);
  ue(g, d);
  Bo(a, g, f);
  b = f;
}
kQ.X = 1;
function oua(a, d) {
  mQ(a, d);
}
oua.X = 1;
function mQ(a, d) {
  lc(a, d);
  mc(a + 12, d + 12);
}
mQ.X = 1;
function pua(a, d, e) {
  nQ(a, d, e);
}
pua.X = 1;
function nQ(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 12;
  ww(f, d, e);
  Wb(a, f);
  vw(g, d, e + 12);
  a += 12;
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  b = f;
}
nQ.X = 1;
function oQ(a) {
  0 != (a | 0) && xe(a);
}
oQ.X = 1;
function qua(a) {
  return a;
}
qua.X = 1;
function rua(a, d) {
  pQ(a, d);
}
rua.X = 1;
function pQ(a, d) {
  var e = a + 12;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
pQ.X = 1;
function qQ() {
  return xb(64);
}
qQ.X = 1;
function rQ(a) {
  var d = xb(64);
  sQ(d, a);
  return d;
}
rQ.X = 1;
function tQ(a, d) {
  var e = xb(64);
  uQ(e, a, d);
  return e;
}
tQ.X = 1;
function vQ(a, d, e) {
  var f = b;
  b += 7;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = xb(136);
  k[g] = 0;
  k[h] = 0;
  k[i] = 0;
  H(f, g, h, i);
  wQ(j, a, d, e, f);
  b = f;
  return j;
}
vQ.X = 1;
function xQ(a, d, e, f) {
  var g = xb(136);
  wQ(g, a, d, e, f);
  return g;
}
xQ.X = 1;
function yQ(a, d) {
  xi(a + 2, d);
}
yQ.X = 1;
function zQ(a, d) {
  var e = a + 19;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
zQ.X = 1;
function AQ(a) {
  0 != (a | 0) && xe(a);
}
AQ.X = 1;
function BQ(a, d) {
  k[a + 30] = d;
}
BQ.X = 1;
function CQ(a) {
  return k[a + 28];
}
CQ.X = 1;
function DQ(a, d) {
  k[a + 33] = d;
}
DQ.X = 1;
function EQ(a) {
  return k[a + 32];
}
EQ.X = 1;
function sua(a) {
  return a;
}
sua.X = 1;
function tua(a) {
  return a + 16;
}
tua.X = 1;
function FQ(a, d) {
  c[a + 33] = d;
}
FQ.X = 1;
function GQ(a) {
  return c[a + 33];
}
GQ.X = 1;
function HQ(a, d) {
  k[a + 32] = d;
}
HQ.X = 1;
function IQ(a) {
  return c[a + 16] & 1;
}
IQ.X = 1;
function JQ(a) {
  return c[a + 12];
}
JQ.X = 1;
function KQ(a, d) {
  c[a + 14] = d;
}
KQ.X = 1;
function LQ(a) {
  return c[a + 15] & 1;
}
LQ.X = 1;
function MQ(a) {
  return c[a + 14];
}
MQ.X = 1;
function NQ(a) {
  return c[a + 13];
}
NQ.X = 1;
function OQ(a, d) {
  xi(a + 16, d);
}
OQ.X = 1;
function PQ() {
  var a = xb(136);
  QQ(a);
  return a;
}
PQ.X = 1;
function uua(a, d) {
  xi(a, d);
}
uua.X = 1;
function RQ(a) {
  0 != (a | 0) && xe(a);
}
RQ.X = 1;
function SQ(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
SQ.X = 1;
function vua(a) {
  return a + 8;
}
vua.X = 1;
function TQ(a) {
  return Ue(a, 16);
}
TQ.X = 1;
function UQ(a, d) {
  v[c[c[a] + 19]](a, d);
}
UQ.X = 1;
function VQ(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
VQ.X = 1;
function WQ(a, d) {
  var e = b;
  b += 4;
  0 == (c[XQ] << 24) >> 24 && Hb(XQ);
  v[c[c[a] + 16]](e, a, d);
  c[YQ] = c[e];
  k[YQ] = k[e];
  c[YQ + 1] = c[e + 1];
  k[YQ + 1] = k[e + 1];
  c[YQ + 2] = c[e + 2];
  k[YQ + 2] = k[e + 2];
  c[YQ + 3] = c[e + 3];
  k[YQ + 3] = k[e + 3];
  b = e;
  return YQ;
}
WQ.X = 1;
function ZQ(a) {
  return v[c[c[a] + 7]](a);
}
ZQ.X = 1;
function wua(a) {
  return IQ(a);
}
wua.X = 1;
function xua(a) {
  return JQ(a);
}
xua.X = 1;
function $Q(a, d, e, f) {
  v[c[c[a] + 15]](a, d, e, f);
}
$Q.X = 1;
function yua(a, d, e) {
  aR(a, d, e);
}
yua.X = 1;
function bR(a) {
  return v[c[c[a] + 12]](a);
}
bR.X = 1;
function zua(a, d) {
  Je(a, d);
}
zua.X = 1;
function Aua(a, d, e, f) {
  cR(a, d, e, f);
}
Aua.X = 1;
function Bua(a, d) {
  KQ(a, d);
}
Bua.X = 1;
function Cua(a) {
  return LQ(a);
}
Cua.X = 1;
function dR(a) {
  return v[c[c[a] + 9]](a);
}
dR.X = 1;
function Dua(a) {
  return MQ(a);
}
Dua.X = 1;
function Eua(a) {
  return Ge(a);
}
Eua.X = 1;
function Fua(a) {
  return Ye(a);
}
Fua.X = 1;
function eR(a, d) {
  v[c[c[a] + 6]](a, d);
}
eR.X = 1;
function fR(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
fR.X = 1;
function Gua(a) {
  return NQ(a);
}
Gua.X = 1;
function Hua(a) {
  return a + 4;
}
Hua.X = 1;
function gR(a, d) {
  return v[c[c[a] + 5]](a, d);
}
gR.X = 1;
function Iua(a) {
  return xf(a);
}
Iua.X = 1;
function Jua(a) {
  return zf(a);
}
Jua.X = 1;
function Kua(a) {
  hR(a);
}
Kua.X = 1;
function Lua(a) {
  return Uf(a);
}
Lua.X = 1;
function Mua(a) {
  return Me(a);
}
Mua.X = 1;
function Nua(a) {
  return Bf(a);
}
Nua.X = 1;
function iR(a) {
  return v[c[c[a] + 11]](a);
}
iR.X = 1;
function Oua(a) {
  jR(a);
}
Oua.X = 1;
function kR(a, d) {
  v[c[c[a] + 10]](a, d);
}
kR.X = 1;
function Pua(a, d, e) {
  lR(a, d, e);
}
Pua.X = 1;
function Qua(a, d, e, f, g, h) {
  mR(a, d, e, f, g, h);
}
Qua.X = 1;
function nR(a, d) {
  var e = b;
  b += 4;
  0 == (c[oR] << 24) >> 24 && Hb(oR);
  v[c[c[a] + 17]](e, a, d);
  c[pR] = c[e];
  k[pR] = k[e];
  c[pR + 1] = c[e + 1];
  k[pR + 1] = k[e + 1];
  c[pR + 2] = c[e + 2];
  k[pR + 2] = k[e + 2];
  c[pR + 3] = c[e + 3];
  k[pR + 3] = k[e + 3];
  b = e;
  return pR;
}
nR.X = 1;
function Rua(a) {
  return Kf(a);
}
Rua.X = 1;
function qR(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
qR.X = 1;
function Sua(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Sua.X = 1;
function rR(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
rR.X = 1;
function sR(a) {
  return v[c[c[a] + 4]](a);
}
sR.X = 1;
function tR(a, d) {
  v[c[c[a] + 14]](a, d);
}
tR.X = 1;
function Tua(a) {
  return Ie(a);
}
Tua.X = 1;
function uR(a, d) {
  v[c[c[a] + 18]](a, d);
}
uR.X = 1;
function vR(a, d) {
  var e = b;
  b += 7;
  var f = e + 4,
    g = e + 5,
    h = e + 6;
  k[f] = 1;
  k[g] = 1;
  k[h] = 1;
  H(e, f, g, h);
  wR(a, d, e);
  b = e;
}
vR.X = 1;
function xR(a, d) {
  var e;
  e = d & 1;
  var f = TQ(76);
  yR(f, a, e & 1, 1);
  return f;
}
xR.X = 1;
function zR(a, d, e) {
  var d = d & 1,
    e = e & 1,
    f = TQ(76);
  yR(f, a, d & 1, e & 1);
  return f;
}
zR.X = 1;
function AR(a, d, e, f) {
  var d = d & 1,
    g = TQ(76);
  BR(g, a, d & 1, e, f, 1);
  return g;
}
AR.X = 1;
function CR(a, d, e, f, g) {
  var d = d & 1,
    g = g & 1,
    h = TQ(76);
  BR(h, a, d & 1, e, f, g & 1);
  return h;
}
CR.X = 1;
function DR(a) {
  return c[a + 8];
}
DR.X = 1;
function ER(a) {
  return c[a + 7];
}
ER.X = 1;
function FR(a) {
  return k[a + 273];
}
FR.X = 1;
function GR(a) {
  return k[a + 280];
}
GR.X = 1;
function HR(a) {
  return k[a + 272];
}
HR.X = 1;
function IR(a, d) {
  k[a + 63] = d;
}
IR.X = 1;
function JR(a) {
  return c[a + 275] & 1;
}
JR.X = 1;
function Uua(a, d) {
  c[a + 12] = d & 1;
}
Uua.X = 1;
function KR(a, d) {
  k[a + 58] = d;
}
KR.X = 1;
function LR(a, d) {
  k[a + 56] = d;
}
LR.X = 1;
function MR(a) {
  return c[a + 74] & 1;
}
MR.X = 1;
function NR(a) {
  return c[a + 12] & 1;
}
NR.X = 1;
function OR(a) {
  return k[a + 281];
}
OR.X = 1;
function PR(a, d) {
  k[a + 55] = d;
}
PR.X = 1;
function QR(a) {
  return k[a + 277];
}
QR.X = 1;
function RR(a, d) {
  k[a + 68] = d;
}
RR.X = 1;
function SR(a) {
  return c[a + 75] & 1;
}
SR.X = 1;
function Vua(a, d) {
  c[a + 279] = d & 1;
}
Vua.X = 1;
function TR(a) {
  return k[a + 271];
}
TR.X = 1;
function UR(a) {
  return c[a + 4];
}
UR.X = 1;
function VR(a, d) {
  k[a + 52] = d;
}
VR.X = 1;
function WR(a) {
  return k[a + 49];
}
WR.X = 1;
function XR(a) {
  return k[a + 63];
}
XR.X = 1;
function YR(a) {
  return k[a + 66];
}
YR.X = 1;
function ZR(a, d) {
  k[a + 46] = d;
}
ZR.X = 1;
function $R(a) {
  return k[a + 51];
}
$R.X = 1;
function aS(a, d) {
  k[a + 59] = d;
}
aS.X = 1;
function bS(a, d) {
  k[a + 276] = d;
}
bS.X = 1;
function cS(a) {
  return k[a + 47];
}
cS.X = 1;
function dS(a, d) {
  k[a + 277] = d;
}
dS.X = 1;
function eS(a) {
  return k[a + 48];
}
eS.X = 1;
function fS(a, d) {
  k[a + 50] = d;
}
fS.X = 1;
function Wua(a, d, e) {
  wR(a, d, e);
}
Wua.X = 1;
function Xua(a) {
  return Gf(a);
}
Xua.X = 1;
function gS(a, d, e) {
  return v[c[c[a] + 2]](a, d, e);
}
gS.X = 1;
function hS(a, d) {
  v[c[c[a] + 4]](a, d);
}
hS.X = 1;
function iS(a, d, e, f, g) {
  return v[c[c[a] + 3]](a, d, e, f, g);
}
iS.X = 1;
function jS(a, d, e, f, g) {
  v[c[c[a] + 2]](a, d, e, f, g);
}
jS.X = 1;
function Yua(a) {
  return DR(a);
}
Yua.X = 1;
function Zua(a) {
  return ER(a);
}
Zua.X = 1;
function $ua(a) {
  return FR(a);
}
$ua.X = 1;
function kS(a) {
  v[c[c[a] + 2]](a);
}
kS.X = 1;
function ava(a) {
  return GR(a);
}
ava.X = 1;
function bva(a) {
  return HR(a);
}
bva.X = 1;
function cva(a, d) {
  IR(a, d);
}
cva.X = 1;
function lS(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
lS.X = 1;
function mS(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
mS.X = 1;
function nS(a, d) {
  v[c[c[a] + 4]](a, d);
}
nS.X = 1;
function oS(a, d) {
  v[c[c[a] + 5]](a, d);
}
oS.X = 1;
function dva(a) {
  return Ap(a);
}
dva.X = 1;
function eva(a) {
  return JR(a);
}
eva.X = 1;
function pS(a, d) {
  Uua(a, d & 1);
}
pS.X = 1;
function fva(a, d) {
  KR(a, d);
}
fva.X = 1;
function qS(a) {
  var d = b;
  b += 4;
  0 == (c[rS] << 24) >> 24 && Hb(rS);
  gva(d, a);
  c[sS] = c[d];
  k[sS] = k[d];
  c[sS + 1] = c[d + 1];
  k[sS + 1] = k[d + 1];
  c[sS + 2] = c[d + 2];
  k[sS + 2] = k[d + 2];
  c[sS + 3] = c[d + 3];
  k[sS + 3] = k[d + 3];
  b = d;
  return sS;
}
qS.X = 1;
function tS(a) {
  var d = b;
  b += 4;
  0 == (c[uS] << 24) >> 24 && Hb(uS);
  hva(d, a);
  c[vS] = c[d];
  k[vS] = k[d];
  c[vS + 1] = c[d + 1];
  k[vS + 1] = k[d + 1];
  c[vS + 2] = c[d + 2];
  k[vS + 2] = k[d + 2];
  c[vS + 3] = c[d + 3];
  k[vS + 3] = k[d + 3];
  b = d;
  return vS;
}
tS.X = 1;
function iva(a, d) {
  LR(a, d);
}
iva.X = 1;
function jva(a) {
  return MR(a);
}
jva.X = 1;
function kva(a) {
  return NR(a);
}
kva.X = 1;
function lva(a) {
  return OR(a);
}
lva.X = 1;
function mva(a, d) {
  PR(a, d);
}
mva.X = 1;
function wS(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
wS.X = 1;
function nva(a) {
  return Fp(a);
}
nva.X = 1;
function ova(a) {
  return QR(a);
}
ova.X = 1;
function xS(a) {
  return c[a + 4];
}
xS.X = 1;
function pva(a, d) {
  RR(a, d);
}
pva.X = 1;
function qva(a) {
  return SR(a);
}
qva.X = 1;
function yS(a, d) {
  Vua(a, d & 1);
}
yS.X = 1;
function zS(a, d) {
  Ko(a, d & 1);
}
zS.X = 1;
function rva(a) {
  return TR(a);
}
rva.X = 1;
function sva(a) {
  return a + 223;
}
sva.X = 1;
function tva(a) {
  return a + 207;
}
tva.X = 1;
function uva(a) {
  AS(a);
}
uva.X = 1;
function vva(a, d) {
  zp(a, d);
}
vva.X = 1;
function wva(a, d) {
  VR(a, d);
}
wva.X = 1;
function xva(a) {
  return WR(a);
}
xva.X = 1;
function yva(a, d) {
  BS(a, d);
}
yva.X = 1;
function BS(a, d) {
  k[a + 49] = eP(d);
}
BS.X = 1;
function zva(a) {
  return XR(a);
}
zva.X = 1;
function Ava(a) {
  return YR(a);
}
Ava.X = 1;
function Bva(a, d) {
  ZR(a, d);
}
Bva.X = 1;
function Cva(a) {
  return $R(a);
}
Cva.X = 1;
function Dva(a, d) {
  CS(0, d);
}
Dva.X = 1;
function Eva(a, d) {
  aS(a, d);
}
Eva.X = 1;
function Fva(a) {
  return Ip(a);
}
Fva.X = 1;
function Gva(a, d) {
  bS(a, d);
}
Gva.X = 1;
function Hva(a) {
  return cS(a);
}
Hva.X = 1;
function Iva(a, d) {
  dS(a, d);
}
Iva.X = 1;
function Jva(a) {
  return eS(a);
}
Jva.X = 1;
function Kva(a) {
  return Mp(a);
}
Kva.X = 1;
function Lva(a, d) {
  fS(a, d);
}
Lva.X = 1;
function Mva(a, d) {
  Pp(a, d);
}
Mva.X = 1;
function Nva(a, d, e, f, g, h, i, j) {
  DS(a, d, e, f, g, h, i, j);
}
Nva.X = 1;
function ES(a, d) {
  c[a + 4] = d;
}
ES.X = 1;
function FS(a) {
  return k[a + 56];
}
FS.X = 1;
function GS(a) {
  return k[a + 59];
}
GS.X = 1;
function HS(a) {
  return k[a + 70];
}
HS.X = 1;
function IS(a, d) {
  k[a + 66] = d;
}
IS.X = 1;
function JS(a, d) {
  k[a + 62] = d;
}
JS.X = 1;
function KS(a) {
  return k[a + 52];
}
KS.X = 1;
function LS(a) {
  return k[a + 58];
}
LS.X = 1;
function Ova(a, d) {
  c[a + 275] = d & 1;
}
Ova.X = 1;
function MS(a) {
  return k[a + 60];
}
MS.X = 1;
function NS(a) {
  return k[a + 55];
}
NS.X = 1;
function OS(a) {
  return k[a + 64];
}
OS.X = 1;
function PS(a, d) {
  k[a + 67] = d;
}
PS.X = 1;
function QS(a, d) {
  k[a + 51] = d;
}
QS.X = 1;
function RS(a, d) {
  k[a + 64] = d;
}
RS.X = 1;
function SS(a, d) {
  k[a + 54] = d;
}
SS.X = 1;
function TS(a, d) {
  k[a + 47] = d;
}
TS.X = 1;
function US(a, d) {
  k[a + 280] = d;
}
US.X = 1;
function VS(a) {
  return k[a + 54];
}
VS.X = 1;
function WS(a, d) {
  k[a + 281] = d;
}
WS.X = 1;
function XS(a) {
  return c[a + 279] & 1;
}
XS.X = 1;
function YS(a) {
  return k[a + 72];
}
YS.X = 1;
function ZS(a) {
  return k[a + 67];
}
ZS.X = 1;
function $S(a) {
  return k[a + 276];
}
$S.X = 1;
function aT(a) {
  return k[a + 46];
}
aT.X = 1;
function bT(a, d) {
  k[a + 72] = d;
}
bT.X = 1;
function cT(a, d) {
  k[a + 71] = d;
}
cT.X = 1;
function dT(a) {
  return k[a + 71];
}
dT.X = 1;
function eT(a) {
  return k[a + 68];
}
eT.X = 1;
function fT(a) {
  return k[a + 62];
}
fT.X = 1;
function gT(a, d) {
  k[a + 70] = d;
}
gT.X = 1;
function hT(a, d) {
  k[a + 60] = d;
}
hT.X = 1;
function iT(a) {
  return k[a + 50];
}
iT.X = 1;
function Pva(a) {
  return a + 13;
}
Pva.X = 1;
function Qva(a) {
  return a + 29;
}
Qva.X = 1;
function Rva(a) {
  return FS(a);
}
Rva.X = 1;
function Sva(a) {
  return GS(a);
}
Sva.X = 1;
function Tva(a) {
  return HS(a);
}
Tva.X = 1;
function Uva(a, d) {
  IS(a, d);
}
Uva.X = 1;
function Vva(a, d) {
  JS(a, d);
}
Vva.X = 1;
function Wva(a) {
  return KS(a);
}
Wva.X = 1;
function Xva(a) {
  return Dp(a);
}
Xva.X = 1;
function Yva(a) {
  return Gp(a);
}
Yva.X = 1;
function Zva(a) {
  return LS(a);
}
Zva.X = 1;
function jT(a, d) {
  Hp(a, d & 1);
}
jT.X = 1;
function kT(a, d) {
  Ova(a, d & 1);
}
kT.X = 1;
function $va(a, d) {
  Jp(a, d);
}
$va.X = 1;
function awa(a, d, e) {
  lT(a, d, e);
}
awa.X = 1;
function bwa(a) {
  return mT(a);
}
bwa.X = 1;
function mT(a) {
  return k[a + 259];
}
mT.X = 1;
function nT(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
nT.X = 1;
function cwa(a) {
  return MS(a);
}
cwa.X = 1;
function dwa(a) {
  return NS(a);
}
dwa.X = 1;
function oT(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
oT.X = 1;
function ewa(a) {
  return Op(a);
}
ewa.X = 1;
function pT(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
pT.X = 1;
function qT(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
qT.X = 1;
function fwa(a) {
  return OS(a);
}
fwa.X = 1;
function gwa(a, d) {
  PS(a, d);
}
gwa.X = 1;
function hwa(a, d) {
  QS(a, d);
}
hwa.X = 1;
function iwa(a, d) {
  RS(a, d);
}
iwa.X = 1;
function rT(a, d, e) {
  var e = e & 1,
    f = xb(1120);
  sT(f, a, d, e & 1);
  return f;
}
rT.X = 1;
function tT(a, d, e, f, g) {
  var g = g & 1,
    h = xb(1120);
  uT(h, a, d, e, f, g & 1);
  return h;
}
tT.X = 1;
function jwa(a) {
  return Lo(a);
}
jwa.X = 1;
function kwa(a, d) {
  SS(a, d);
}
kwa.X = 1;
function lwa(a, d) {
  TS(a, d);
}
lwa.X = 1;
function vT(a) {
  return v[c[c[a] + 9]](a);
}
vT.X = 1;
function mwa(a, d) {
  US(a, d);
}
mwa.X = 1;
function nwa(a) {
  return VS(a);
}
nwa.X = 1;
function owa(a, d) {
  WS(a, d);
}
owa.X = 1;
function pwa(a, d) {
  wT(a, d);
}
pwa.X = 1;
function wT(a, d) {
  k[a + 48] = eP(d);
}
wT.X = 1;
function qwa(a, d) {
  Bp(a, d);
}
qwa.X = 1;
function rwa(a) {
  return Cp(a);
}
rwa.X = 1;
function swa(a) {
  return XS(a);
}
swa.X = 1;
function twa(a) {
  return YS(a);
}
twa.X = 1;
function uwa(a, d) {
  Ep(a, d);
}
uwa.X = 1;
function vwa(a) {
  return ZS(a);
}
vwa.X = 1;
function wwa(a) {
  return $S(a);
}
wwa.X = 1;
function xwa(a) {
  xT(a);
}
xwa.X = 1;
function ywa(a) {
  return aT(a);
}
ywa.X = 1;
function zwa(a, d) {
  bT(a, d);
}
zwa.X = 1;
function Awa(a) {
  return Np(a);
}
Awa.X = 1;
function Bwa(a, d) {
  cT(a, d);
}
Bwa.X = 1;
function Cwa(a) {
  return dT(a);
}
Cwa.X = 1;
function Dwa(a, d) {
  Kp(a, d);
}
Dwa.X = 1;
function Ewa(a) {
  return eT(a);
}
Ewa.X = 1;
function Fwa(a) {
  return Lp(a);
}
Fwa.X = 1;
function Gwa(a) {
  return fT(a);
}
Gwa.X = 1;
function yT(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
yT.X = 1;
function Hwa(a, d) {
  gT(a, d);
}
Hwa.X = 1;
function Iwa(a, d) {
  hT(a, d);
}
Iwa.X = 1;
function Jwa(a, d, e) {
  zT(a, d, e);
}
Jwa.X = 1;
function zT(a, d, e) {
  xi(a + 13, d);
  xi(a + 29, e);
  lT(a, c[a + 7] + 1, c[a + 8] + 1);
  v[c[c[a] + 2]](a);
}
zT.X = 1;
function Kwa(a) {
  return iT(a);
}
Kwa.X = 1;
function Lwa(a) {
  return AT(a);
}
Lwa.X = 1;
function AT(a) {
  return c[a + 45] & 1;
}
AT.X = 1;
function BT(a, d) {
  k[a + 1] = d;
}
BT.X = 1;
function CT(a, d) {
  k[a + 3] = d;
}
CT.X = 1;
function DT(a) {
  return k[a + 3];
}
DT.X = 1;
function Mwa(a, d) {
  k[a] = d;
}
Mwa.X = 1;
function ET(a) {
  return k[a + 4];
}
ET.X = 1;
function FT(a) {
  return k[a + 2];
}
FT.X = 1;
function Nwa(a) {
  return k[a];
}
Nwa.X = 1;
function GT(a) {
  return k[a + 1];
}
GT.X = 1;
function HT(a, d) {
  k[a + 2] = d;
}
HT.X = 1;
function IT(a, d) {
  k[a + 4] = d;
}
IT.X = 1;
function JT(a, d) {
  k[a + 5] = d;
}
JT.X = 1;
function KT(a) {
  return k[a + 5];
}
KT.X = 1;
function LT(a, d) {
  c[a + 4] = d;
}
LT.X = 1;
function MT(a) {
  return c[a + 4];
}
MT.X = 1;
function NT(a) {
  return k[a + 34];
}
NT.X = 1;
function OT(a) {
  return k[a + 35];
}
OT.X = 1;
function PT(a, d) {
  k[a + 28] = d;
}
PT.X = 1;
function QT(a, d) {
  k[a + 34] = d;
}
QT.X = 1;
function RT(a) {
  return k[a + 21];
}
RT.X = 1;
function ST(a) {
  return c[a + 23];
}
ST.X = 1;
function TT(a) {
  return c[a + 24];
}
TT.X = 1;
function Owa(a) {
  return a + 16;
}
Owa.X = 1;
function UT(a, d) {
  k[a + 21] = d;
}
UT.X = 1;
function VT(a) {
  return c[a + 26];
}
VT.X = 1;
function WT(a) {
  return c[a + 25];
}
WT.X = 1;
function XT(a, d) {
  c[a + 27] = d;
}
XT.X = 1;
function YT(a, d) {
  k[a + 35] = d;
}
YT.X = 1;
function ZT(a) {
  return k[a + 28];
}
ZT.X = 1;
function $T(a) {
  return c[a + 27];
}
$T.X = 1;
function aU(a) {
  return k[a + 20];
}
aU.X = 1;
function bU(a) {
  return c[a + 36];
}
bU.X = 1;
function cU(a, d) {
  c[a + 23] = d;
}
cU.X = 1;
function dU(a, d) {
  c[a + 24] = d;
}
dU.X = 1;
function eU(a, d) {
  k[a + 20] = d;
}
eU.X = 1;
function fU(a) {
  return k[a + 30];
}
fU.X = 1;
function gU(a) {
  return k[a + 31];
}
gU.X = 1;
function hU(a, d) {
  c[a + 29] = d & 1;
}
hU.X = 1;
function Fk(a) {
  return c[a + 36];
}
Fk.X = 1;
function iU(a, d) {
  c[a + 25] = d;
}
iU.X = 1;
function jU() {
  var a = xb(24);
  Pwa(a);
  return a;
}
jU.X = 1;
function kU(a) {
  0 != (a | 0) && xe(a);
}
kU.X = 1;
function Qwa(a) {
  return Ho(a);
}
Qwa.X = 1;
function lU(a) {
  v[c[c[a] + 2]](a);
}
lU.X = 1;
function Rwa(a) {
  return Io(a);
}
Rwa.X = 1;
function mU(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
mU.X = 1;
function nU(a, d) {
  Ko(a, d & 1);
}
nU.X = 1;
function Swa(a) {
  return a + 11;
}
Swa.X = 1;
function Twa(a) {
  return Lo(a);
}
Twa.X = 1;
function oU(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
oU.X = 1;
function pU(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
pU.X = 1;
function qU(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
qU.X = 1;
function rU(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
rU.X = 1;
function sU(a, d) {
  v[c[c[a] + 4]](a, d);
}
sU.X = 1;
function tU(a, d) {
  v[c[c[a] + 5]](a, d);
}
tU.X = 1;
function Uwa(a, d) {
  zp(a, d);
}
Uwa.X = 1;
function uU(a) {
  return v[c[c[a] + 9]](a);
}
uU.X = 1;
function Vwa(a) {
  return Ap(a);
}
Vwa.X = 1;
function Wwa(a, d) {
  Bp(a, d);
}
Wwa.X = 1;
function Xwa(a, d) {
  vU(a, d);
}
Xwa.X = 1;
function Ywa(a) {
  return Cp(a);
}
Ywa.X = 1;
function Zwa(a) {
  return Dp(a);
}
Zwa.X = 1;
function $wa(a, d) {
  Ep(a, d);
}
$wa.X = 1;
function axa(a) {
  return Fp(a);
}
axa.X = 1;
function wU(a) {
  return c[a + 4];
}
wU.X = 1;
function bxa(a) {
  return Gp(a);
}
bxa.X = 1;
function xU(a, d) {
  Hp(a, d & 1);
}
xU.X = 1;
function cxa(a) {
  return Ip(a);
}
cxa.X = 1;
function dxa(a, d) {
  Jp(a, d);
}
dxa.X = 1;
function exa(a, d) {
  Kp(a, d);
}
exa.X = 1;
function fxa(a) {
  return Lp(a);
}
fxa.X = 1;
function yU(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
yU.X = 1;
function zU(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
zU.X = 1;
function gxa(a) {
  return Mp(a);
}
gxa.X = 1;
function hxa(a) {
  return Np(a);
}
hxa.X = 1;
function AU(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
AU.X = 1;
function ixa(a) {
  return Op(a);
}
ixa.X = 1;
function jxa(a, d) {
  Pp(a, d);
}
jxa.X = 1;
function BU() {
  var a = xb(276);
  CU(a);
  return a;
}
BU.X = 1;
function DU(a, d, e, f) {
  var g = xb(276);
  EU(g, a, d, e, f);
  return g;
}
DU.X = 1;
function FU(a, d) {
  var e = a + 37;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
FU.X = 1;
function kxa(a) {
  return aU(a);
}
kxa.X = 1;
function lxa(a) {
  return a + 8;
}
lxa.X = 1;
function mxa(a) {
  return a + 12;
}
mxa.X = 1;
function GU(a, d) {
  var e = a + 12;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
GU.X = 1;
function nxa(a, d) {
  eU(a, d);
}
nxa.X = 1;
function HU(a, d) {
  var e = a + 8;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
HU.X = 1;
function IU(a) {
  0 != (a | 0) && xe(a);
}
IU.X = 1;
function oxa(a) {
  return Fk(a);
}
oxa.X = 1;
function JU(a) {
  return k[a + 32];
}
JU.X = 1;
function KU(a) {
  return k[a + 33];
}
KU.X = 1;
function LU(a, d) {
  c[a + 26] = d;
}
LU.X = 1;
function pxa(a) {
  return a + 37;
}
pxa.X = 1;
function MU(a, d) {
  k[a + 22] = d;
}
MU.X = 1;
function qxa(a) {
  return a + 12;
}
qxa.X = 1;
function rxa(a) {
  return a + 41;
}
rxa.X = 1;
function sxa(a) {
  return a + 8;
}
sxa.X = 1;
function NU(a, d) {
  k[a + 30] = d;
}
NU.X = 1;
function OU(a, d) {
  k[a + 31] = d;
}
OU.X = 1;
function PU(a) {
  return c[a + 29] & 1;
}
PU.X = 1;
function QU(a) {
  return k[a + 22];
}
QU.X = 1;
function RU(a, d) {
  k[a + 32] = d;
}
RU.X = 1;
function SU(a, d) {
  k[a + 33] = d;
}
SU.X = 1;
function txa(a) {
  return a + 4;
}
txa.X = 1;
function uxa(a) {
  return a;
}
uxa.X = 1;
function TU(a, d) {
  k[a + 20] = d;
}
TU.X = 1;
function UU(a) {
  return k[a + 20];
}
UU.X = 1;
function VU(a) {
  return k[a + 28];
}
VU.X = 1;
function WU(a, d) {
  c[a + 36] = d;
}
WU.X = 1;
function XU(a, d) {
  c[a + 4] = d;
}
XU.X = 1;
function vxa(a) {
  return c[a + 4];
}
vxa.X = 1;
function wxa(a, d) {
  c[a + 85] = d & 1;
}
wxa.X = 1;
function xxa(a) {
  return a + 86;
}
xxa.X = 1;
function yxa(a, d) {
  var e = a + 16;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
yxa.X = 1;
function zxa(a, d) {
  var e = a + 41;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
zxa.X = 1;
function Axa(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Axa.X = 1;
function Bxa(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
}
Bxa.X = 1;
function Cxa(a) {
  return VU(a);
}
Cxa.X = 1;
function Dxa(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, 0);
}
Dxa.X = 1;
function Exa(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, m);
}
Exa.X = 1;
function Fxa(a, d) {
  v[c[c[a] + 9]](a, d);
}
Fxa.X = 1;
function Gxa(a, d, e) {
  vy(a, d, e);
}
Gxa.X = 1;
function Hxa(a, d, e) {
  return v[c[c[a] + 14]](a, d, e);
}
Hxa.X = 1;
function Ixa(a, d) {
  v[c[c[a] + 8]](a, d);
}
Ixa.X = 1;
function Jxa(a) {
  return v[c[c[a] + 13]](a);
}
Jxa.X = 1;
function Kxa(a, d) {
  Iy(a, d);
}
Kxa.X = 1;
function Lxa(a) {
  return a + 1;
}
Lxa.X = 1;
function Mxa(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
Mxa.X = 1;
function Nxa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
Nxa.X = 1;
function Oxa(a, d, e) {
  v[c[c[a] + 12]](a, d, e);
}
Oxa.X = 1;
function Pxa(a) {
  return v[c[c[a] + 7]](a);
}
Pxa.X = 1;
function Qxa(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, 0);
}
Qxa.X = 1;
function Rxa(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, m);
}
Rxa.X = 1;
function Sxa(a) {
  return v[c[c[a] + 10]](a);
}
Sxa.X = 1;
function Txa(a, d) {
  v[c[c[a] + 5]](a, d);
}
Txa.X = 1;
function Uxa(a, d) {
  v[c[c[a] + 6]](a, d);
}
Uxa.X = 1;
function Vxa(a) {
  return Ho(a);
}
Vxa.X = 1;
function Wxa(a, d, e, f) {
  YU(a, d, e, f);
}
Wxa.X = 1;
function Xxa(a, d, e) {
  v[c[c[a] + 7]](a, d, e, -1);
}
Xxa.X = 1;
function Yxa(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
Yxa.X = 1;
function Zxa(a) {
  return Ip(a);
}
Zxa.X = 1;
function $xa(a, d) {
  Hp(a, d & 1);
}
$xa.X = 1;
function aya(a, d) {
  Bp(a, d);
}
aya.X = 1;
function bya(a, d, e) {
  return v[c[c[a] + 10]](a, d, e);
}
bya.X = 1;
function cya(a) {
  v[c[c[a] + 2]](a);
}
cya.X = 1;
function dya(a) {
  return Lo(a);
}
dya.X = 1;
function eya(a) {
  return Io(a);
}
eya.X = 1;
function fya(a, d) {
  return v[c[c[a] + 8]](a, d, -1);
}
fya.X = 1;
function gya(a, d, e) {
  return v[c[c[a] + 8]](a, d, e);
}
gya.X = 1;
function hya(a, d) {
  var e = xb(352);
  iya(e, a, d);
  return e;
}
hya.X = 1;
function jya(a, d, e, f) {
  var g = xb(352);
  kya(g, a, d, e, f);
  return g;
}
jya.X = 1;
function lya(a) {
  return c[a + 4];
}
lya.X = 1;
function mya(a, d) {
  v[c[c[a] + 5]](a, d);
}
mya.X = 1;
function nya(a) {
  return v[c[c[a] + 9]](a);
}
nya.X = 1;
function oya(a) {
  return a + 74;
}
oya.X = 1;
function pya(a) {
  return a + 78;
}
pya.X = 1;
function qya(a) {
  return Ap(a);
}
qya.X = 1;
function rya(a, d) {
  var e = a + 86;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
}
rya.X = 1;
function sya(a) {
  return Cp(a);
}
sya.X = 1;
function tya(a, d) {
  Ko(a, d & 1);
}
tya.X = 1;
function uya(a, d) {
  Ep(a, d);
}
uya.X = 1;
function vya(a) {
  return Fp(a);
}
vya.X = 1;
function wya(a, d) {
  xya(a, d);
}
wya.X = 1;
function xya(a, d) {
  var e = a + 74;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
xya.X = 1;
function yya(a) {
  return Gp(a);
}
yya.X = 1;
function zya(a) {
  return c[a + 85] & 1;
}
zya.X = 1;
function Aya(a) {
  return c[a + 7];
}
Aya.X = 1;
function Bya(a) {
  return c[a + 6];
}
Bya.X = 1;
function Cya(a, d) {
  c[a + 6] = d;
}
Cya.X = 1;
function ZU(a, d) {
  c[a] = c[d];
  c[a + 1] = c[d + 1];
  c[a + 2] = c[d + 2];
  c[a + 3] = c[d + 3];
  c[a + 4] = c[d + 4];
  c[a + 5] = c[d + 5];
}
ZU.X = 1;
function Dya(a, d) {
  Eya(a, d);
}
Dya.X = 1;
function Eya(a, d) {
  var e = a + 78;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Eya.X = 1;
function Fya(a, d) {
  $U(a, d);
}
Fya.X = 1;
function Gya(a, d) {
  v[c[c[a] + 4]](a, d);
}
Gya.X = 1;
function Hya(a) {
  return Dp(a);
}
Hya.X = 1;
function Iya(a, d) {
  Jp(a, d);
}
Iya.X = 1;
function Jya(a, d) {
  Kp(a, d);
}
Jya.X = 1;
function Kya(a, d) {
  zp(a, d);
}
Kya.X = 1;
function Lya(a) {
  return Lp(a);
}
Lya.X = 1;
function Mya(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Mya.X = 1;
function Nya(a, d, e, f, g) {
  v[c[c[a] + 3]](a, d, e, f, g);
}
Nya.X = 1;
function Oya() {}
Oya.X = 1;
function Pya(a) {
  return Mp(a);
}
Pya.X = 1;
function Qya(a) {
  return Np(a);
}
Qya.X = 1;
function Rya(a, d, e, f) {
  v[c[c[a] + 6]](a, d, e, f);
}
Rya.X = 1;
function Sya(a) {
  return Op(a);
}
Sya.X = 1;
function Tya(a, d) {
  Pp(a, d);
}
Tya.X = 1;
function Uya(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
Uya.X = 1;
function Vya(a) {
  return Ge(a);
}
Vya.X = 1;
function Wya(a, d) {
  var e = b;
  b += 4;
  0 == (c[Xya] << 24) >> 24 && Hb(Xya);
  v[c[c[a] + 15]](e, a, d);
  c[aV] = c[e];
  k[aV] = k[e];
  c[aV + 1] = c[e + 1];
  k[aV + 1] = k[e + 1];
  c[aV + 2] = c[e + 2];
  k[aV + 2] = k[e + 2];
  c[aV + 3] = c[e + 3];
  k[aV + 3] = k[e + 3];
  b = e;
  return aV;
}
Wya.X = 1;
function Yya(a, d) {
  Je(a, d);
}
Yya.X = 1;
function Zya(a) {
  return dF(a);
}
Zya.X = 1;
function $ya(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
$ya.X = 1;
function aza(a) {
  return v[c[c[a] + 7]](a);
}
aza.X = 1;
function bza(a) {
  return v[c[c[a] + 19]](a);
}
bza.X = 1;
function cza(a) {
  return Ye(a);
}
cza.X = 1;
function dza(a) {
  return v[c[c[a] + 21]](a);
}
dza.X = 1;
function eza(a, d, e, f) {
  df(a, d, e, f);
}
eza.X = 1;
function fza(a) {
  return v[c[c[a] + 12]](a);
}
fza.X = 1;
function gza(a) {
  return v[c[c[a] + 9]](a);
}
gza.X = 1;
function hza(a) {
  return a + 3;
}
hza.X = 1;
function iza(a, d) {
  var e = b;
  b += 4;
  0 == (c[jza] << 24) >> 24 && Hb(jza);
  kf(e, a, d);
  c[bV] = c[e];
  k[bV] = k[e];
  c[bV + 1] = c[e + 1];
  k[bV + 1] = k[e + 1];
  c[bV + 2] = c[e + 2];
  k[bV + 2] = k[e + 2];
  c[bV + 3] = c[e + 3];
  k[bV + 3] = k[e + 3];
  b = e;
  return bV;
}
iza.X = 1;
function kza(a, d) {
  Jf(a, d);
}
kza.X = 1;
function lza(a, d) {
  v[c[c[a] + 6]](a, d);
}
lza.X = 1;
function mza(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
mza.X = 1;
function nza(a) {
  return Le(a);
}
nza.X = 1;
function oza(a, d) {
  var e = b;
  b += 4;
  0 == (c[pza] << 24) >> 24 && Hb(pza);
  tf(e, a, d);
  c[cV] = c[e];
  k[cV] = k[e];
  c[cV + 1] = c[e + 1];
  k[cV + 1] = k[e + 1];
  c[cV + 2] = c[e + 2];
  k[cV + 2] = k[e + 2];
  c[cV + 3] = c[e + 3];
  k[cV + 3] = k[e + 3];
  b = e;
  return cV;
}
oza.X = 1;
function qza(a, d) {
  return v[c[c[a] + 5]](a, d);
}
qza.X = 1;
function rza(a) {
  return xf(a);
}
rza.X = 1;
function sza(a) {
  return zf(a);
}
sza.X = 1;
function tza(a) {
  return Me(a);
}
tza.X = 1;
function uza(a) {
  return Bf(a);
}
uza.X = 1;
function vza(a) {
  return v[c[c[a] + 11]](a);
}
vza.X = 1;
function wza(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
wza.X = 1;
function xza(a) {
  return a + 7;
}
xza.X = 1;
function yza(a) {
  return Gf(a);
}
yza.X = 1;
function zza(a, d) {
  var e = b;
  b += 4;
  0 == (c[Aza] << 24) >> 24 && Hb(Aza);
  v[c[c[a] + 16]](e, a, d);
  c[dV] = c[e];
  k[dV] = k[e];
  c[dV + 1] = c[e + 1];
  k[dV + 1] = k[e + 1];
  c[dV + 2] = c[e + 2];
  k[dV + 2] = k[e + 2];
  c[dV + 3] = c[e + 3];
  k[dV + 3] = k[e + 3];
  b = e;
  return dV;
}
zza.X = 1;
function Bza(a) {
  return Kf(a);
}
Bza.X = 1;
function Cza(a) {
  return Mf(a);
}
Cza.X = 1;
function Dza(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
Dza.X = 1;
function Eza(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
Eza.X = 1;
function Fza(a) {
  return a + 7;
}
Fza.X = 1;
function Gza(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
Gza.X = 1;
function Hza(a) {
  return v[c[c[a] + 4]](a);
}
Hza.X = 1;
function Iza(a, d) {
  v[c[c[a] + 14]](a, d);
}
Iza.X = 1;
function Jza(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
Jza.X = 1;
function Kza(a, d) {
  v[c[c[a] + 10]](a, d);
}
Kza.X = 1;
function Lza(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
Lza.X = 1;
function Mza(a) {
  var d = b;
  b += 4;
  0 == (c[Nza] << 24) >> 24 && Hb(Nza);
  qG(d, a);
  c[eV] = c[d];
  k[eV] = k[d];
  c[eV + 1] = c[d + 1];
  k[eV + 1] = k[d + 1];
  c[eV + 2] = c[d + 2];
  k[eV + 2] = k[d + 2];
  c[eV + 3] = c[d + 3];
  k[eV + 3] = k[d + 3];
  b = d;
  return eV;
}
Mza.X = 1;
function Oza(a) {
  return Uf(a);
}
Oza.X = 1;
function Pza(a) {
  return Ie(a);
}
Pza.X = 1;
function Qza(a) {
  0 != (a | 0) && yh(a);
}
Qza.X = 1;
function Rza(a, d) {
  ZU(a, d);
}
Rza.X = 1;
function Sza() {
  return Tza(32);
}
Sza.X = 1;
function Uza(a) {
  var d = Se(56);
  Vza(d, a);
  return d;
}
Uza.X = 1;
function Wza(a, d) {
  c[a + 7] = d;
}
Wza.X = 1;
function Xza(a) {
  return a + 8;
}
Xza.X = 1;
function Yza(a, d) {
  c[a + 2] = d;
}
Yza.X = 1;
function Zza(a, d) {
  k[a + 1] = d;
}
Zza.X = 1;
function $za(a) {
  return k[a + 1];
}
$za.X = 1;
function aAa(a) {
  return c[a + 20];
}
aAa.X = 1;
function bAa(a, d) {
  c[a + 20] = d;
}
bAa.X = 1;
function cAa(a) {
  return a + 12;
}
cAa.X = 1;
function dAa(a) {
  return a + 16;
}
dAa.X = 1;
function eAa(a) {
  return c[a + 3];
}
eAa.X = 1;
function fAa(a) {
  return a + 4;
}
fAa.X = 1;
function gAa(a) {
  return c[a + 2];
}
gAa.X = 1;
function hAa(a, d) {
  c[a + 3] = d;
}
hAa.X = 1;
function iAa(a) {
  return k[a + 22];
}
iAa.X = 1;
function jAa(a) {
  return c[a];
}
jAa.X = 1;
function kAa(a, d) {
  c[a] = d;
}
kAa.X = 1;
function lAa(a, d) {
  c[a + 3] = d;
}
lAa.X = 1;
function mAa(a) {
  return a + 5;
}
mAa.X = 1;
function nAa(a, d) {
  c[a + 4] = d;
}
nAa.X = 1;
function oAa(a) {
  return c[a + 2];
}
oAa.X = 1;
function pAa(a) {
  return a + 9;
}
pAa.X = 1;
function qAa(a, d) {
  c[a + 1] = d;
}
qAa.X = 1;
function rAa(a) {
  return c[a + 4];
}
rAa.X = 1;
function sAa(a, d) {
  c[a + 2] = d;
}
sAa.X = 1;
function tAa(a) {
  return c[a + 3];
}
tAa.X = 1;
function uAa(a) {
  return c[a + 1];
}
uAa.X = 1;
function Tza(a) {
  return Ue(a, 16);
}
Tza.X = 1;
function vAa(a, d) {
  v[c[c[a] + 3]](a, d);
}
vAa.X = 1;
function wAa(a, d) {
  v[c[c[a] + 2]](a, d);
}
wAa.X = 1;
function xAa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
xAa.X = 1;
function yAa(a, d) {
  return v[c[c[a] + 2]](a, d);
}
yAa.X = 1;
function zAa(a, d, e) {
  return v[c[c[a] + 3]](a, d, e & 1);
}
zAa.X = 1;
function AAa(a) {
  return cz(a);
}
AAa.X = 1;
function BAa(a, d) {
  var e = a + 16;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
BAa.X = 1;
function CAa(a, d) {
  var e = a + 8;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
CAa.X = 1;
function DAa(a, d) {
  var e = xb(80);
  fV(e, a, d);
  return e;
}
DAa.X = 1;
function EAa(a, d) {
  var e = a + 12;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
EAa.X = 1;
function FAa(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
FAa.X = 1;
function GAa(a, d, e) {
  HAa(a, d, e);
}
GAa.X = 1;
function HAa(a, d, e) {
  var f = b;
  b += 28;
  var g,
    h,
    i = f + 4,
    j = f + 8,
    l = f + 12,
    m = f + 16,
    n = f + 20,
    p = f + 24;
  g = d + 12;
  h = e + 12;
  dc(d, f);
  dc(e, i);
  0 < k[a + 22] &&
    (IAa(a + 8, g, a, f, 1, j, l),
    IAa(a + 12, h, a + 4, i, 1, m, n),
    (d = JB(l) * k[a + 20]),
    (n = JB(n)),
    (n = d + n * k[a + 21]),
    N(p, m, j),
    (j = J(p, a + 16)),
    0 > j && (j = 0),
    (m = a + 22),
    (k[m] -= n + j));
  j = a + 8;
  c[j] = c[g];
  k[j] = k[g];
  c[j + 1] = c[g + 1];
  k[j + 1] = k[g + 1];
  c[j + 2] = c[g + 2];
  k[j + 2] = k[g + 2];
  c[j + 3] = c[g + 3];
  k[j + 3] = k[g + 3];
  g = a + 12;
  c[g] = c[h];
  k[g] = k[h];
  c[g + 1] = c[h + 1];
  k[g + 1] = k[h + 1];
  c[g + 2] = c[h + 2];
  k[g + 2] = k[h + 2];
  c[g + 3] = c[h + 3];
  k[g + 3] = k[h + 3];
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
  a += 4;
  c[a] = c[i];
  k[a] = k[i];
  c[a + 1] = c[i + 1];
  k[a + 1] = k[i + 1];
  c[a + 2] = c[i + 2];
  k[a + 2] = k[i + 2];
  c[a + 3] = c[i + 3];
  k[a + 3] = k[i + 3];
  b = f;
}
HAa.X = 1;
function JAa(a) {
  0 != (a | 0) && xe(a);
}
JAa.X = 1;
function KAa(a, d) {
  var e = xb(92);
  LAa(e, a, d);
  return e;
}
KAa.X = 1;
function MAa(a) {
  return iAa(a);
}
MAa.X = 1;
function NAa(a, d, e, f, g) {
  OAa(a, d, e, f, g);
}
NAa.X = 1;
function OAa(a, d, e, f, g) {
  var h = b;
  b += 8;
  var i = h + 4;
  k[a + 22] = e;
  0 < k[a + 22] &&
    ((e = a + 16),
    (c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]),
    (c[e + 2] = c[d + 2]),
    (k[e + 2] = k[d + 2]),
    (c[e + 3] = c[d + 3]),
    (k[e + 3] = k[d + 3]),
    (e = f + 12),
    (d = g + 12),
    dc(f, h),
    dc(g, i),
    (f = a + 8),
    (c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    (f = a + 12),
    (c[f] = c[d]),
    (k[f] = k[d]),
    (c[f + 1] = c[d + 1]),
    (k[f + 1] = k[d + 1]),
    (c[f + 2] = c[d + 2]),
    (k[f + 2] = k[d + 2]),
    (c[f + 3] = c[d + 3]),
    (k[f + 3] = k[d + 3]),
    (c[a] = c[h]),
    (k[a] = k[h]),
    (c[a + 1] = c[h + 1]),
    (k[a + 1] = k[h + 1]),
    (c[a + 2] = c[h + 2]),
    (k[a + 2] = k[h + 2]),
    (c[a + 3] = c[h + 3]),
    (k[a + 3] = k[h + 3]),
    (a += 4),
    (c[a] = c[i]),
    (k[a] = k[i]),
    (c[a + 1] = c[i + 1]),
    (k[a + 1] = k[i + 1]),
    (c[a + 2] = c[i + 2]),
    (k[a + 2] = k[i + 2]),
    (c[a + 3] = c[i + 3]),
    (k[a + 3] = k[i + 3]));
  b = h;
}
OAa.X = 1;
function PAa(a) {
  return Af(a);
}
PAa.X = 1;
function QAa() {
  var a = OH(48);
  gV(a);
  return a;
}
QAa.X = 1;
function RAa(a, d, e, f, g) {
  var h = OH(48);
  hV(h, a, d, e, f, g, 0);
  return h;
}
RAa.X = 1;
function SAa(a, d, e, f, g, h) {
  var i = OH(48);
  hV(i, a, d, e, f, g, h);
  return i;
}
SAa.X = 1;
function TAa(a) {
  return He(a);
}
TAa.X = 1;
function UAa(a) {
  return bf(a);
}
UAa.X = 1;
function VAa(a) {
  return yf(a);
}
VAa.X = 1;
function WAa(a) {
  return YG(a);
}
WAa.X = 1;
function XAa(a) {
  return Cf(a);
}
XAa.X = 1;
function YAa(a, d) {
  var e = a + 5;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
YAa.X = 1;
function ZAa(a) {
  return Hf(a);
}
ZAa.X = 1;
function $Aa(a) {
  return Lf(a);
}
$Aa.X = 1;
function aBa(a, d) {
  var e = a + 9;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
aBa.X = 1;
function bBa(a) {
  0 != (a | 0) && yh(a);
}
bBa.X = 1;
function cBa(a) {
  return Yf(a);
}
cBa.X = 1;
function dBa(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, 0);
}
dBa.X = 1;
function eBa(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 4]](a, d, e, f, g, h, i, j, l, m);
}
eBa.X = 1;
function fBa(a, d) {
  v[c[c[a] + 9]](a, d);
}
fBa.X = 1;
function gBa(a, d, e) {
  vy(a, d, e);
}
gBa.X = 1;
function hBa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
hBa.X = 1;
function iBa(a, d) {
  v[c[c[a] + 8]](a, d);
}
iBa.X = 1;
function jBa(a, d, e) {
  return v[c[c[a] + 14]](a, d, e);
}
jBa.X = 1;
function kBa(a) {
  return a + 5;
}
kBa.X = 1;
function lBa() {
  var a = Fy(84);
  mBa(a);
  return a;
}
lBa.X = 1;
function nBa(a, d) {
  Iy(a, d);
}
nBa.X = 1;
function oBa(a) {
  return a + 1;
}
oBa.X = 1;
function pBa(a) {
  return v[c[c[a] + 13]](a);
}
pBa.X = 1;
function qBa(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
qBa.X = 1;
function rBa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
rBa.X = 1;
function sBa(a, d, e) {
  v[c[c[a] + 12]](a, d, e);
}
sBa.X = 1;
function tBa(a, d) {
  zy(a, d, 2);
}
tBa.X = 1;
function uBa(a, d, e) {
  zy(a, d, e);
}
uBa.X = 1;
function vBa(a) {
  return v[c[c[a] + 7]](a);
}
vBa.X = 1;
function wBa(a, d, e, f, g, h, i, j, l) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, 0);
}
wBa.X = 1;
function xBa(a, d, e, f, g, h, i, j, l, m) {
  v[c[c[a] + 3]](a, d, e, f, g, h, i, j, l, m);
}
xBa.X = 1;
function yBa(a) {
  return v[c[c[a] + 10]](a);
}
yBa.X = 1;
function zBa(a, d) {
  v[c[c[a] + 5]](a, d);
}
zBa.X = 1;
function ABa(a, d) {
  v[c[c[a] + 6]](a, d);
}
ABa.X = 1;
function BBa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
BBa.X = 1;
function CBa(a) {
  return v[c[c[a] + 26]](a);
}
CBa.X = 1;
function DBa(a, d) {
  var e = b;
  b += 4;
  0 == (c[EBa] << 24) >> 24 && Hb(EBa);
  v[c[c[a] + 15]](e, a, d);
  c[iV] = c[e];
  k[iV] = k[e];
  c[iV + 1] = c[e + 1];
  k[iV + 1] = k[e + 1];
  c[iV + 2] = c[e + 2];
  k[iV + 2] = k[e + 2];
  c[iV + 3] = c[e + 3];
  k[iV + 3] = k[e + 3];
  b = e;
  return iV;
}
DBa.X = 1;
function FBa(a, d) {
  Je(a, d);
}
FBa.X = 1;
function GBa(a, d, e) {
  return v[c[c[a] + 28]](a, d, e);
}
GBa.X = 1;
function HBa(a) {
  return v[c[c[a] + 22]](a);
}
HBa.X = 1;
function IBa(a) {
  return v[c[c[a] + 7]](a);
}
IBa.X = 1;
function JBa(a) {
  return Ye(a);
}
JBa.X = 1;
function KBa(a) {
  return v[c[c[a] + 19]](a);
}
KBa.X = 1;
function LBa(a, d) {
  var e = b;
  b += 4;
  0 == (c[MBa] << 24) >> 24 && Hb(MBa);
  kf(e, a, d);
  c[jV] = c[e];
  k[jV] = k[e];
  c[jV + 1] = c[e + 1];
  k[jV + 1] = k[e + 1];
  c[jV + 2] = c[e + 2];
  k[jV + 2] = k[e + 2];
  c[jV + 3] = c[e + 3];
  k[jV + 3] = k[e + 3];
  b = e;
  return jV;
}
LBa.X = 1;
function NBa(a, d, e) {
  v[c[c[a] + 25]](a, d, e);
}
NBa.X = 1;
function OBa(a, d, e) {
  v[c[c[a] + 29]](a, d, e);
}
OBa.X = 1;
function PBa(a, d) {
  var e = b;
  b += 4;
  0 == (c[QBa] << 24) >> 24 && Hb(QBa);
  tf(e, a, d);
  c[kV] = c[e];
  k[kV] = k[e];
  c[kV + 1] = c[e + 1];
  k[kV + 1] = k[e + 1];
  c[kV + 2] = c[e + 2];
  k[kV + 2] = k[e + 2];
  c[kV + 3] = c[e + 3];
  k[kV + 3] = k[e + 3];
  b = e;
  return kV;
}
PBa.X = 1;
function RBa(a, d, e, f) {
  df(a, d, e, f);
}
RBa.X = 1;
function SBa(a) {
  return v[c[c[a] + 12]](a);
}
SBa.X = 1;
function TBa(a) {
  return v[c[c[a] + 23]](a);
}
TBa.X = 1;
function UBa(a) {
  return v[c[c[a] + 9]](a);
}
UBa.X = 1;
function VBa(a, d, e, f) {
  v[c[c[a] + 24]](a, d, e, f);
}
VBa.X = 1;
function WBa(a) {
  return a + 3;
}
WBa.X = 1;
function XBa(a, d) {
  Jf(a, d);
}
XBa.X = 1;
function YBa(a) {
  return Ge(a);
}
YBa.X = 1;
function ZBa(a, d) {
  v[c[c[a] + 6]](a, d);
}
ZBa.X = 1;
function $Ba(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
$Ba.X = 1;
function aCa(a) {
  return Le(a);
}
aCa.X = 1;
function bCa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
bCa.X = 1;
function cCa(a) {
  return xf(a);
}
cCa.X = 1;
function dCa(a) {
  return zf(a);
}
dCa.X = 1;
function eCa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
eCa.X = 1;
function fCa(a) {
  return Me(a);
}
fCa.X = 1;
function gCa(a) {
  return Bf(a);
}
gCa.X = 1;
function hCa(a) {
  return v[c[c[a] + 11]](a);
}
hCa.X = 1;
function iCa(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
iCa.X = 1;
function jCa(a) {
  return a + 7;
}
jCa.X = 1;
function kCa(a) {
  return v[c[c[a] + 21]](a);
}
kCa.X = 1;
function lCa(a, d) {
  var e = b;
  b += 4;
  0 == (c[mCa] << 24) >> 24 && Hb(mCa);
  v[c[c[a] + 16]](e, a, d);
  c[lV] = c[e];
  k[lV] = k[e];
  c[lV + 1] = c[e + 1];
  k[lV + 1] = k[e + 1];
  c[lV + 2] = c[e + 2];
  k[lV + 2] = k[e + 2];
  c[lV + 3] = c[e + 3];
  k[lV + 3] = k[e + 3];
  b = e;
  return lV;
}
lCa.X = 1;
function nCa(a) {
  return Kf(a);
}
nCa.X = 1;
function oCa(a) {
  return Mf(a);
}
oCa.X = 1;
function pCa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
pCa.X = 1;
function qCa(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
qCa.X = 1;
function rCa(a) {
  return a + 7;
}
rCa.X = 1;
function sCa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
sCa.X = 1;
function tCa(a) {
  return v[c[c[a] + 4]](a);
}
tCa.X = 1;
function uCa(a, d) {
  v[c[c[a] + 14]](a, d);
}
uCa.X = 1;
function vCa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
vCa.X = 1;
function wCa(a, d, e, f, g, h) {
  var i = Fy(84);
  mV(i, a, d, e, f, g, h);
  return i;
}
wCa.X = 1;
function xCa(a) {
  var d = Se(56);
  yCa(d, a);
  return d;
}
xCa.X = 1;
function zCa(a, d, e, f) {
  v[c[c[a] + 27]](a, d, e, f);
}
zCa.X = 1;
function ACa(a, d) {
  v[c[c[a] + 10]](a, d);
}
ACa.X = 1;
function BCa(a) {
  return yg(a);
}
BCa.X = 1;
function CCa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
CCa.X = 1;
function DCa(a) {
  return Ie(a);
}
DCa.X = 1;
function ECa(a) {
  var d = b;
  b += 4;
  0 == (c[FCa] << 24) >> 24 && Hb(FCa);
  nV(d, a);
  c[oV] = c[d];
  k[oV] = k[d];
  c[oV + 1] = c[d + 1];
  k[oV + 1] = k[d + 1];
  c[oV + 2] = c[d + 2];
  k[oV + 2] = k[d + 2];
  c[oV + 3] = c[d + 3];
  k[oV + 3] = k[d + 3];
  b = d;
  return oV;
}
ECa.X = 1;
function nV(a, d) {
  var e = b;
  b += 7;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = d + 7;
  c[a] = c[i];
  k[a] = k[i];
  c[a + 1] = c[i + 1];
  k[a + 1] = k[i + 1];
  c[a + 2] = c[i + 2];
  k[a + 2] = k[i + 2];
  c[a + 3] = c[i + 3];
  k[a + 3] = k[i + 3];
  k[f] = v[c[c[d] + 11]](d);
  k[g] = v[c[c[d] + 11]](d);
  k[h] = v[c[c[d] + 11]](d);
  H(e, f, g, h);
  xn(a, e);
  b = e;
}
nV.X = 1;
function GCa(a) {
  return Uf(a);
}
GCa.X = 1;
function HCa(a) {
  return Gf(a);
}
HCa.X = 1;
function ICa(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
ICa.X = 1;
function JCa(a, d, e) {
  v[c[c[a] + 2]](a, d, e);
}
JCa.X = 1;
function KCa(a, d, e, f) {
  v[c[c[a] + 4]](a, d, e, f);
}
KCa.X = 1;
function LCa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
LCa.X = 1;
function MCa(a) {
  return v[c[c[a] + 26]](a);
}
MCa.X = 1;
function NCa(a, d) {
  var e = b;
  b += 4;
  0 == (c[OCa] << 24) >> 24 && Hb(OCa);
  v[c[c[a] + 15]](e, a, d);
  c[pV] = c[e];
  k[pV] = k[e];
  c[pV + 1] = c[e + 1];
  k[pV + 1] = k[e + 1];
  c[pV + 2] = c[e + 2];
  k[pV + 2] = k[e + 2];
  c[pV + 3] = c[e + 3];
  k[pV + 3] = k[e + 3];
  b = e;
  return pV;
}
NCa.X = 1;
function PCa(a, d) {
  Je(a, d);
}
PCa.X = 1;
function QCa(a, d, e) {
  return v[c[c[a] + 28]](a, d, e);
}
QCa.X = 1;
function RCa(a) {
  return v[c[c[a] + 22]](a);
}
RCa.X = 1;
function SCa(a) {
  return v[c[c[a] + 7]](a);
}
SCa.X = 1;
function TCa(a) {
  return v[c[c[a] + 19]](a);
}
TCa.X = 1;
function UCa(a) {
  return Ye(a);
}
UCa.X = 1;
function VCa(a, d, e) {
  v[c[c[a] + 25]](a, d, e);
}
VCa.X = 1;
function WCa(a, d) {
  var e = b;
  b += 4;
  0 == (c[XCa] << 24) >> 24 && Hb(XCa);
  tf(e, a, d);
  c[qV] = c[e];
  k[qV] = k[e];
  c[qV + 1] = c[e + 1];
  k[qV + 1] = k[e + 1];
  c[qV + 2] = c[e + 2];
  k[qV + 2] = k[e + 2];
  c[qV + 3] = c[e + 3];
  k[qV + 3] = k[e + 3];
  b = e;
  return qV;
}
WCa.X = 1;
function YCa(a, d, e, f) {
  df(a, d, e, f);
}
YCa.X = 1;
function ZCa(a) {
  return v[c[c[a] + 12]](a);
}
ZCa.X = 1;
function $Ca(a) {
  return v[c[c[a] + 23]](a);
}
$Ca.X = 1;
function aDa(a) {
  return v[c[c[a] + 9]](a);
}
aDa.X = 1;
function bDa(a, d, e, f) {
  v[c[c[a] + 24]](a, d, e, f);
}
bDa.X = 1;
function cDa(a) {
  return a + 3;
}
cDa.X = 1;
function dDa(a, d) {
  var e = b;
  b += 4;
  0 == (c[eDa] << 24) >> 24 && Hb(eDa);
  kf(e, a, d);
  c[rV] = c[e];
  k[rV] = k[e];
  c[rV + 1] = c[e + 1];
  k[rV + 1] = k[e + 1];
  c[rV + 2] = c[e + 2];
  k[rV + 2] = k[e + 2];
  c[rV + 3] = c[e + 3];
  k[rV + 3] = k[e + 3];
  b = e;
  return rV;
}
dDa.X = 1;
function fDa(a, d) {
  var e = b;
  b += 4;
  0 == (c[gDa] << 24) >> 24 && Hb(gDa);
  v[c[c[a] + 16]](e, a, d);
  c[sV] = c[e];
  k[sV] = k[e];
  c[sV + 1] = c[e + 1];
  k[sV + 1] = k[e + 1];
  c[sV + 2] = c[e + 2];
  k[sV + 2] = k[e + 2];
  c[sV + 3] = c[e + 3];
  k[sV + 3] = k[e + 3];
  b = e;
  return sV;
}
fDa.X = 1;
function hDa(a, d) {
  v[c[c[a] + 6]](a, d);
}
hDa.X = 1;
function iDa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
iDa.X = 1;
function jDa(a) {
  return Gf(a);
}
jDa.X = 1;
function kDa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
kDa.X = 1;
function lDa(a) {
  return xf(a);
}
lDa.X = 1;
function mDa(a) {
  return zf(a);
}
mDa.X = 1;
function nDa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
nDa.X = 1;
function oDa(a) {
  return Me(a);
}
oDa.X = 1;
function pDa(a) {
  return Bf(a);
}
pDa.X = 1;
function qDa(a) {
  return v[c[c[a] + 11]](a);
}
qDa.X = 1;
function rDa(a) {
  bh(a);
}
rDa.X = 1;
function sDa(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
sDa.X = 1;
function tDa(a, d) {
  v[c[c[a] + 10]](a, d);
}
tDa.X = 1;
function uDa(a) {
  return v[c[c[a] + 21]](a);
}
uDa.X = 1;
function vDa(a) {
  return Le(a);
}
vDa.X = 1;
function wDa(a, d) {
  Jf(a, d);
}
wDa.X = 1;
function xDa(a) {
  return Kf(a);
}
xDa.X = 1;
function yDa(a) {
  return Mf(a);
}
yDa.X = 1;
function zDa(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
zDa.X = 1;
function ADa(a) {
  return a + 7;
}
ADa.X = 1;
function BDa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
BDa.X = 1;
function CDa(a) {
  return v[c[c[a] + 4]](a);
}
CDa.X = 1;
function DDa(a, d) {
  v[c[c[a] + 14]](a, d);
}
DDa.X = 1;
function EDa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
EDa.X = 1;
function FDa(a, d, e, f) {
  v[c[c[a] + 27]](a, d, e, f);
}
FDa.X = 1;
function GDa(a) {
  return Ge(a);
}
GDa.X = 1;
function HDa(a) {
  return yg(a);
}
HDa.X = 1;
function IDa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
IDa.X = 1;
function JDa(a) {
  return Ie(a);
}
JDa.X = 1;
function KDa(a) {
  return Uf(a);
}
KDa.X = 1;
function LDa(a, d, e, f, g) {
  eh(a, d, e, f, g);
}
LDa.X = 1;
function MDa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
MDa.X = 1;
function NDa(a) {
  return Ge(a);
}
NDa.X = 1;
function ODa(a, d) {
  var e = b;
  b += 4;
  0 == (c[PDa] << 24) >> 24 && Hb(PDa);
  v[c[c[a] + 15]](e, a, d);
  c[tV] = c[e];
  k[tV] = k[e];
  c[tV + 1] = c[e + 1];
  k[tV + 1] = k[e + 1];
  c[tV + 2] = c[e + 2];
  k[tV + 2] = k[e + 2];
  c[tV + 3] = c[e + 3];
  k[tV + 3] = k[e + 3];
  b = e;
  return tV;
}
ODa.X = 1;
function QDa(a, d) {
  Je(a, d);
}
QDa.X = 1;
function RDa(a) {
  return Ke(a);
}
RDa.X = 1;
function SDa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
SDa.X = 1;
function TDa(a) {
  return v[c[c[a] + 7]](a);
}
TDa.X = 1;
function UDa(a) {
  return v[c[c[a] + 19]](a);
}
UDa.X = 1;
function VDa(a) {
  return Ye(a);
}
VDa.X = 1;
function WDa(a) {
  return cf(a);
}
WDa.X = 1;
function XDa(a, d, e, f) {
  df(a, d, e, f);
}
XDa.X = 1;
function YDa(a) {
  return v[c[c[a] + 12]](a);
}
YDa.X = 1;
function ZDa(a) {
  return v[c[c[a] + 9]](a);
}
ZDa.X = 1;
function $Da(a) {
  return gf(a);
}
$Da.X = 1;
function aEa(a) {
  return a + 3;
}
aEa.X = 1;
function bEa(a, d) {
  var e = b;
  b += 4;
  0 == (c[cEa] << 24) >> 24 && Hb(cEa);
  kf(e, a, d);
  c[uV] = c[e];
  k[uV] = k[e];
  c[uV + 1] = c[e + 1];
  k[uV + 1] = k[e + 1];
  c[uV + 2] = c[e + 2];
  k[uV + 2] = k[e + 2];
  c[uV + 3] = c[e + 3];
  k[uV + 3] = k[e + 3];
  b = e;
  return uV;
}
bEa.X = 1;
function dEa(a, d) {
  var e = b;
  b += 4;
  0 == (c[eEa] << 24) >> 24 && Hb(eEa);
  v[c[c[a] + 16]](e, a, d);
  c[vV] = c[e];
  k[vV] = k[e];
  c[vV + 1] = c[e + 1];
  k[vV + 1] = k[e + 1];
  c[vV + 2] = c[e + 2];
  k[vV + 2] = k[e + 2];
  c[vV + 3] = c[e + 3];
  k[vV + 3] = k[e + 3];
  b = e;
  return vV;
}
dEa.X = 1;
function fEa(a, d) {
  v[c[c[a] + 6]](a, d);
}
fEa.X = 1;
function gEa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
gEa.X = 1;
function hEa(a) {
  return Le(a);
}
hEa.X = 1;
function iEa(a, d) {
  var e = b;
  b += 4;
  0 == (c[jEa] << 24) >> 24 && Hb(jEa);
  tf(e, a, d);
  c[wV] = c[e];
  k[wV] = k[e];
  c[wV + 1] = c[e + 1];
  k[wV + 1] = k[e + 1];
  c[wV + 2] = c[e + 2];
  k[wV + 2] = k[e + 2];
  c[wV + 3] = c[e + 3];
  k[wV + 3] = k[e + 3];
  b = e;
  return wV;
}
iEa.X = 1;
function kEa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
kEa.X = 1;
function lEa(a) {
  return xf(a);
}
lEa.X = 1;
function mEa(a) {
  return zf(a);
}
mEa.X = 1;
function nEa(a, d) {
  var e = Se(56);
  oEa(e, a, d);
  return e;
}
nEa.X = 1;
function pEa(a) {
  return Me(a);
}
pEa.X = 1;
function qEa(a) {
  return Bf(a);
}
qEa.X = 1;
function rEa(a) {
  return v[c[c[a] + 11]](a);
}
rEa.X = 1;
function sEa(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
sEa.X = 1;
function tEa(a, d) {
  v[c[c[a] + 10]](a, d);
}
tEa.X = 1;
function uEa(a) {
  return Gf(a);
}
uEa.X = 1;
function vEa(a, d) {
  Jf(a, d);
}
vEa.X = 1;
function wEa(a) {
  return Kf(a);
}
wEa.X = 1;
function xEa(a) {
  return Mf(a);
}
xEa.X = 1;
function yEa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
yEa.X = 1;
function zEa(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
zEa.X = 1;
function AEa(a) {
  return a + 7;
}
AEa.X = 1;
function BEa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
BEa.X = 1;
function CEa(a) {
  return v[c[c[a] + 4]](a);
}
CEa.X = 1;
function DEa(a, d) {
  v[c[c[a] + 14]](a, d);
}
DEa.X = 1;
function EEa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
EEa.X = 1;
function FEa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
FEa.X = 1;
function GEa(a) {
  return Uf(a);
}
GEa.X = 1;
function HEa(a) {
  return Ie(a);
}
HEa.X = 1;
function IEa(a, d) {
  var e = b;
  b += 4;
  0 == (c[JEa] << 24) >> 24 && Hb(JEa);
  KEa(e, a, d);
  c[xV] = c[e];
  k[xV] = k[e];
  c[xV + 1] = c[e + 1];
  k[xV + 1] = k[e + 1];
  c[xV + 2] = c[e + 2];
  k[xV + 2] = k[e + 2];
  c[xV + 3] = c[e + 3];
  k[xV + 3] = k[e + 3];
  b = e;
  return xV;
}
IEa.X = 1;
function KEa(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 8,
    i = f + 12;
  LEa(h, d, e);
  c[f] = c[h];
  k[f] = k[h];
  c[f + 1] = c[h + 1];
  k[f + 1] = k[h + 1];
  c[f + 2] = c[h + 2];
  k[f + 2] = k[h + 2];
  c[f + 3] = c[h + 3];
  k[f + 3] = k[h + 3];
  MEa(i, d, e);
  c[g] = c[i];
  k[g] = k[i];
  c[g + 1] = c[i + 1];
  k[g + 1] = k[i + 1];
  c[g + 2] = c[i + 2];
  k[g + 2] = k[i + 2];
  c[g + 3] = c[i + 3];
  k[g + 3] = k[i + 3];
  yV(f, f) < yV(g, g)
    ? ((c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]),
      (c[a + 2] = c[e + 2]),
      (k[a + 2] = k[e + 2]),
      (c[a + 3] = c[e + 3]),
      (k[a + 3] = k[e + 3]))
    : NEa(a, e);
  b = f;
}
KEa.X = 1;
function OEa(a, d) {
  AG(a, d);
}
OEa.X = 1;
function PEa(a, d) {
  var e = b;
  b += 4;
  0 == (c[QEa] << 24) >> 24 && Hb(QEa);
  REa(e, a, d);
  c[zV] = c[e];
  k[zV] = k[e];
  c[zV + 1] = c[e + 1];
  k[zV + 1] = k[e + 1];
  c[zV + 2] = c[e + 2];
  k[zV + 2] = k[e + 2];
  c[zV + 3] = c[e + 3];
  k[zV + 3] = k[e + 3];
  b = e;
  return zV;
}
PEa.X = 1;
function REa(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 8,
    i = f + 12;
  LEa(h, d, e);
  c[f] = c[h];
  k[f] = k[h];
  c[f + 1] = c[h + 1];
  k[f + 1] = k[h + 1];
  c[f + 2] = c[h + 2];
  k[f + 2] = k[h + 2];
  c[f + 3] = c[h + 3];
  k[f + 3] = k[h + 3];
  MEa(i, d, e);
  c[g] = c[i];
  k[g] = k[i];
  c[g + 1] = c[i + 1];
  k[g + 1] = k[i + 1];
  c[g + 2] = c[i + 2];
  k[g + 2] = k[i + 2];
  c[g + 3] = c[i + 3];
  k[g + 3] = k[i + 3];
  yV(f, f) > yV(g, g)
    ? ((c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]),
      (c[a + 2] = c[e + 2]),
      (k[a + 2] = k[e + 2]),
      (c[a + 3] = c[e + 3]),
      (k[a + 3] = k[e + 3]))
    : NEa(a, e);
  b = f;
}
REa.X = 1;
function SEa(a) {
  return k[a];
}
SEa.X = 1;
function TEa(a) {
  return k[a + 1];
}
TEa.X = 1;
function UEa(a) {
  return k[a + 2];
}
UEa.X = 1;
function VEa(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  WEa(a, g, h, i);
  b = g;
}
VEa.X = 1;
function WEa(a, d, e, f) {
  var g = b;
  b += 4;
  var h,
    i,
    j,
    l = g + 1,
    m = g + 2,
    n = g + 3,
    d = 0.5 * k[d];
  h = 0.5 * k[e];
  e = 0.5 * k[f];
  f = td(d);
  d = ud(d);
  i = td(h);
  h = ud(h);
  j = td(e);
  e = ud(e);
  k[g] = j * h * f + e * i * d;
  k[l] = j * i * d - e * h * f;
  k[m] = e * i * f - j * h * d;
  k[n] = j * i * f + e * h * d;
  jc(a, g, l, m, n);
  b = g;
}
WEa.X = 1;
function XEa(a, d) {
  return YEa(a, d);
}
XEa.X = 1;
function YEa(a, d) {
  k[a] -= k[d];
  var e = a + 1;
  k[e] -= k[d + 1];
  e = a + 2;
  k[e] -= k[d + 2];
  e = a + 3;
  k[e] -= k[d + 3];
  return a;
}
YEa.X = 1;
function ZEa(a) {
  return k[a + 3];
}
ZEa.X = 1;
function $Ea(a) {
  return AV(a);
}
$Ea.X = 1;
function AV(a) {
  var d = b;
  b += 1;
  k[d] = BV(a);
  a = aFa(a, d);
  b = d;
  return a;
}
AV.X = 1;
function bFa(a, d, e) {
  var f = b;
  b += 5;
  var g = f + 1;
  k[f] = e;
  0 == (c[cFa] << 24) >> 24 && Hb(cFa);
  dFa(g, a, d, f);
  c[CV] = c[g];
  k[CV] = k[g];
  c[CV + 1] = c[g + 1];
  k[CV + 1] = k[g + 1];
  c[CV + 2] = c[g + 2];
  k[CV + 2] = k[g + 2];
  c[CV + 3] = c[g + 3];
  k[CV + 3] = k[g + 3];
  b = f;
  return CV;
}
bFa.X = 1;
function eFa(a, d) {
  k[a] *= k[d];
  var e = a + 1;
  k[e] *= k[d];
  e = a + 2;
  k[e] *= k[d];
  e = a + 3;
  k[e] *= k[d];
  return a;
}
eFa.X = 1;
function dFa(a, d, e, f) {
  var g = b;
  b += 8;
  var h,
    i,
    j,
    l = g + 1,
    m = g + 2,
    n = g + 3,
    p = g + 4,
    r = g + 5,
    s = g + 6,
    t = g + 7;
  h = DV(d, e);
  if (0 != h) {
    i = 1 / ud(h);
    j = ud((1 - k[f]) * h);
    f = ud(k[f] * h);
    h = k[d] * j;
    var w = k[e];
    0 > yV(d, e)
      ? ((k[g] = (h + -w * f) * i),
        (k[l] = (k[d + 1] * j + -k[e + 1] * f) * i),
        (k[m] = (k[d + 2] * j + -k[e + 2] * f) * i),
        (k[n] = (k[d + 3] * j + -k[e + 3] * f) * i),
        NG(a, g, l, m, n))
      : ((k[p] = (h + w * f) * i),
        (k[r] = (k[d + 1] * j + k[e + 1] * f) * i),
        (k[s] = (k[d + 2] * j + k[e + 2] * f) * i),
        (k[t] = (k[d + 3] * j + k[e + 3] * f) * i),
        NG(a, p, r, s, t));
  } else {
    (c[a] = c[d]),
      (k[a] = k[d]),
      (c[a + 1] = c[d + 1]),
      (k[a + 1] = k[d + 1]),
      (c[a + 2] = c[d + 2]),
      (k[a + 2] = k[d + 2]),
      (c[a + 3] = c[d + 3]),
      (k[a + 3] = k[d + 3]);
  }
  b = g;
}
dFa.X = 1;
function fFa(a) {
  var d = b;
  b += 4;
  0 == (c[gFa] << 24) >> 24 && Hb(gFa);
  EV(d, a);
  c[FV] = c[d];
  k[FV] = k[d];
  c[FV + 1] = c[d + 1];
  k[FV + 1] = k[d + 1];
  c[FV + 2] = c[d + 2];
  k[FV + 2] = k[d + 2];
  c[FV + 3] = c[d + 3];
  k[FV + 3] = k[d + 3];
  b = d;
  return FV;
}
fFa.X = 1;
function EV(a, d) {
  var e = b;
  b += 3;
  var f = e + 1,
    g = e + 2;
  k[e] = -k[d];
  k[f] = -k[d + 1];
  k[g] = -k[d + 2];
  NG(a, e, f, g, d + 3);
  b = e;
}
EV.X = 1;
function hFa(a, d) {
  return DV(a, d);
}
hFa.X = 1;
function DV(a, d) {
  var e;
  e = ec(rd(a) * rd(d));
  return MB(yV(a, d) / e);
}
DV.X = 1;
function iFa(a) {
  var d = b;
  b += 4;
  0 == (c[jFa] << 24) >> 24 && Hb(jFa);
  kFa(d, a);
  c[GV] = c[d];
  k[GV] = k[d];
  c[GV + 1] = c[d + 1];
  k[GV + 1] = k[d + 1];
  c[GV + 2] = c[d + 2];
  k[GV + 2] = k[d + 2];
  c[GV + 3] = c[d + 3];
  k[GV + 3] = k[d + 3];
  b = d;
  return GV;
}
iFa.X = 1;
function kFa(a, d) {
  var e = b;
  b += 6;
  var f,
    g = e + 1,
    h = e + 2,
    i = e + 3,
    j = e + 4,
    l = e + 5;
  f = 1 - lFa(k[d + 3], 2);
  11920928955078125e-22 > f
    ? ((k[e] = 1), (k[g] = 0), (k[h] = 0), H(a, e, g, h))
    : ((f = ec(f)),
      (k[i] = k[d] / f),
      (k[j] = k[d + 1] / f),
      (k[l] = k[d + 2] / f),
      H(a, i, j, l));
  b = e;
}
kFa.X = 1;
function mFa() {
  nFa();
  return HV;
}
mFa.X = 1;
function nFa() {
  var a = b;
  b += 4;
  var d = a + 1,
    e = a + 2,
    f = a + 3;
  0 == (c[oFa] << 24) >> 24 &&
    0 != (Hb(oFa) | 0) &&
    ((k[a] = 0), (k[d] = 0), (k[e] = 0), (k[f] = 1), NG(HV, a, d, e, f));
  b = a;
  return HV;
}
nFa.X = 1;
function pFa(a, d) {
  DG(a, d);
}
pFa.X = 1;
function qFa(a, d) {
  return rFa(a, d);
}
qFa.X = 1;
function rFa(a, d) {
  k[a] += k[d];
  var e = a + 1;
  k[e] += k[d + 1];
  e = a + 2;
  k[e] += k[d + 2];
  e = a + 3;
  k[e] += k[d + 3];
  return a;
}
rFa.X = 1;
function sFa(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  var f = eFa(a, e);
  b = e;
  return f;
}
sFa.X = 1;
function tFa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  IV(a, d, f);
  b = f;
}
tFa.X = 1;
function IV(a, d, e) {
  var f = b;
  b += 4;
  var g,
    h = f + 1,
    i = f + 2,
    j = f + 3;
  g = JB(d);
  g = ud(0.5 * k[e]) / g;
  k[f] = k[d] * g;
  k[h] = k[d + 1] * g;
  k[i] = k[d + 2] * g;
  k[j] = td(0.5 * k[e]);
  jc(a, f, h, i, j);
  b = f;
}
IV.X = 1;
function uFa(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  vFa(a, g, h, i);
  b = g;
}
uFa.X = 1;
function vFa(a, d, e, f) {
  var g = b;
  b += 4;
  var h,
    i,
    j,
    l = g + 1,
    m = g + 2,
    n = g + 3,
    d = 0.5 * k[d];
  h = 0.5 * k[e];
  e = 0.5 * k[f];
  f = td(d);
  d = ud(d);
  i = td(h);
  h = ud(h);
  j = td(e);
  e = ud(e);
  k[g] = e * i * f - j * h * d;
  k[l] = j * h * f + e * i * d;
  k[m] = j * i * d - e * h * f;
  k[n] = j * i * f + e * h * d;
  jc(a, g, l, m, n);
  b = g;
}
vFa.X = 1;
function wFa(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = d;
  k[h] = e;
  k[i] = f;
  gG(a, g, h, i);
  b = g;
}
wFa.X = 1;
function xFa(a, d, e, f, g) {
  var h = b;
  b += 4;
  var i = h + 1,
    j = h + 2,
    l = h + 3;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  k[l] = g;
  jc(a, h, i, j, l);
  b = h;
}
xFa.X = 1;
function yFa() {
  return xb(16);
}
yFa.X = 1;
function zFa(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  var f = xb(16);
  IV(f, a, e);
  b = e;
  return f;
}
zFa.X = 1;
function AFa(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = a;
  k[g] = d;
  k[h] = e;
  a = xb(16);
  WEa(a, f, g, h);
  b = f;
  return a;
}
AFa.X = 1;
function BFa(a, d, e, f) {
  var g = b;
  b += 4;
  var h = g + 1,
    i = g + 2,
    j = g + 3;
  k[g] = a;
  k[h] = d;
  k[i] = e;
  k[j] = f;
  a = xb(16);
  NG(a, g, h, i, j);
  b = g;
  return a;
}
BFa.X = 1;
function CFa(a, d) {
  var e = b;
  b += 1;
  k[e] = d;
  var f = aFa(a, e);
  b = e;
  return f;
}
CFa.X = 1;
function aFa(a, d) {
  var e = b;
  b += 1;
  k[e] = 1 / k[d];
  var f = eFa(a, e);
  b = e;
  return f;
}
aFa.X = 1;
function DFa(a, d) {
  iG(a, d);
}
DFa.X = 1;
function EFa(a) {
  var d = b;
  b += 4;
  0 == (c[FFa] << 24) >> 24 && Hb(FFa);
  GFa(d, a);
  c[JV] = c[d];
  k[JV] = k[d];
  c[JV + 1] = c[d + 1];
  k[JV + 1] = k[d + 1];
  c[JV + 2] = c[d + 2];
  k[JV + 2] = k[d + 2];
  c[JV + 3] = c[d + 3];
  k[JV + 3] = k[d + 3];
  b = d;
  return JV;
}
EFa.X = 1;
function GFa(a, d) {
  var e = b;
  b += 1;
  k[e] = BV(d);
  HFa(a, d, e);
  b = e;
}
GFa.X = 1;
function IFa(a, d) {
  k[a] = d;
}
IFa.X = 1;
function JFa(a, d) {
  jG(a, d);
}
JFa.X = 1;
function KFa(a, d) {
  kG(a, d);
}
KFa.X = 1;
function LFa(a) {
  0 != (a | 0) && xe(a);
}
LFa.X = 1;
function MFa(a) {
  return KV(a);
}
MFa.X = 1;
function KV(a) {
  return 2 * MB(k[a + 3]);
}
KV.X = 1;
function NFa(a) {
  return rd(a);
}
NFa.X = 1;
function rd(a) {
  return yV(a, a);
}
rd.X = 1;
function OFa(a) {
  return BV(a);
}
OFa.X = 1;
function BV(a) {
  return ec(rd(a));
}
BV.X = 1;
function PFa(a) {
  return k[a + 3];
}
PFa.X = 1;
function QFa(a) {
  return k[a + 1];
}
QFa.X = 1;
function RFa(a) {
  return k[a];
}
RFa.X = 1;
function SFa(a) {
  return k[a + 2];
}
SFa.X = 1;
function TFa(a, d) {
  return yV(a, d);
}
TFa.X = 1;
function yV(a, d) {
  return (
    k[a] * k[d] +
    k[a + 1] * k[d + 1] +
    k[a + 2] * k[d + 2] +
    k[a + 3] * k[d + 3]
  );
}
yV.X = 1;
function UFa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
UFa.X = 1;
function VFa(a) {
  return Ge(a);
}
VFa.X = 1;
function WFa(a, d) {
  var e = b;
  b += 4;
  0 == (c[XFa] << 24) >> 24 && Hb(XFa);
  v[c[c[a] + 15]](e, a, d);
  c[LV] = c[e];
  k[LV] = k[e];
  c[LV + 1] = c[e + 1];
  k[LV + 1] = k[e + 1];
  c[LV + 2] = c[e + 2];
  k[LV + 2] = k[e + 2];
  c[LV + 3] = c[e + 3];
  k[LV + 3] = k[e + 3];
  b = e;
  return LV;
}
WFa.X = 1;
function YFa(a, d) {
  Je(a, d);
}
YFa.X = 1;
function ZFa(a) {
  return Ke(a);
}
ZFa.X = 1;
function $Fa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
$Fa.X = 1;
function aGa(a) {
  return v[c[c[a] + 7]](a);
}
aGa.X = 1;
function bGa(a) {
  return v[c[c[a] + 19]](a);
}
bGa.X = 1;
function cGa(a) {
  return Ye(a);
}
cGa.X = 1;
function dGa(a) {
  return cf(a);
}
dGa.X = 1;
function eGa(a, d, e, f) {
  df(a, d, e, f);
}
eGa.X = 1;
function fGa(a) {
  return v[c[c[a] + 12]](a);
}
fGa.X = 1;
function gGa(a) {
  return v[c[c[a] + 9]](a);
}
gGa.X = 1;
function hGa(a) {
  return gf(a);
}
hGa.X = 1;
function iGa(a) {
  return a + 3;
}
iGa.X = 1;
function jGa(a, d) {
  var e = b;
  b += 4;
  0 == (c[kGa] << 24) >> 24 && Hb(kGa);
  kf(e, a, d);
  c[MV] = c[e];
  k[MV] = k[e];
  c[MV + 1] = c[e + 1];
  k[MV + 1] = k[e + 1];
  c[MV + 2] = c[e + 2];
  k[MV + 2] = k[e + 2];
  c[MV + 3] = c[e + 3];
  k[MV + 3] = k[e + 3];
  b = e;
  return MV;
}
jGa.X = 1;
function lGa(a, d) {
  var e = b;
  b += 4;
  0 == (c[mGa] << 24) >> 24 && Hb(mGa);
  v[c[c[a] + 16]](e, a, d);
  c[NV] = c[e];
  k[NV] = k[e];
  c[NV + 1] = c[e + 1];
  k[NV + 1] = k[e + 1];
  c[NV + 2] = c[e + 2];
  k[NV + 2] = k[e + 2];
  c[NV + 3] = c[e + 3];
  k[NV + 3] = k[e + 3];
  b = e;
  return NV;
}
lGa.X = 1;
function nGa(a, d) {
  v[c[c[a] + 6]](a, d);
}
nGa.X = 1;
function oGa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
oGa.X = 1;
function pGa(a) {
  return Le(a);
}
pGa.X = 1;
function qGa(a, d) {
  var e = b;
  b += 4;
  0 == (c[rGa] << 24) >> 24 && Hb(rGa);
  tf(e, a, d);
  c[OV] = c[e];
  k[OV] = k[e];
  c[OV + 1] = c[e + 1];
  k[OV + 1] = k[e + 1];
  c[OV + 2] = c[e + 2];
  k[OV + 2] = k[e + 2];
  c[OV + 3] = c[e + 3];
  k[OV + 3] = k[e + 3];
  b = e;
  return OV;
}
qGa.X = 1;
function sGa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
sGa.X = 1;
function tGa(a) {
  return xf(a);
}
tGa.X = 1;
function uGa(a) {
  return zf(a);
}
uGa.X = 1;
function vGa(a, d) {
  var e = Se(56);
  wGa(e, a, d);
  return e;
}
vGa.X = 1;
function xGa(a) {
  return Me(a);
}
xGa.X = 1;
function yGa(a) {
  return Bf(a);
}
yGa.X = 1;
function zGa(a) {
  return v[c[c[a] + 11]](a);
}
zGa.X = 1;
function AGa(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
AGa.X = 1;
function BGa(a, d) {
  v[c[c[a] + 10]](a, d);
}
BGa.X = 1;
function CGa(a) {
  return Gf(a);
}
CGa.X = 1;
function DGa(a, d) {
  Jf(a, d);
}
DGa.X = 1;
function EGa(a) {
  return Kf(a);
}
EGa.X = 1;
function FGa(a) {
  return Mf(a);
}
FGa.X = 1;
function GGa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
GGa.X = 1;
function HGa(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
HGa.X = 1;
function IGa(a) {
  return a + 7;
}
IGa.X = 1;
function JGa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
JGa.X = 1;
function KGa(a) {
  return v[c[c[a] + 4]](a);
}
KGa.X = 1;
function LGa(a, d) {
  v[c[c[a] + 14]](a, d);
}
LGa.X = 1;
function MGa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
MGa.X = 1;
function NGa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
NGa.X = 1;
function OGa(a) {
  return Uf(a);
}
OGa.X = 1;
function PGa(a) {
  return Ie(a);
}
PGa.X = 1;
function QGa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
QGa.X = 1;
function RGa(a, d) {
  Je(a, d);
}
RGa.X = 1;
function SGa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
SGa.X = 1;
function TGa(a) {
  return v[c[c[a] + 7]](a);
}
TGa.X = 1;
function UGa(a, d, e, f) {
  v[c[c[a] + 15]](a, d, e, f);
}
UGa.X = 1;
function VGa(a) {
  return v[c[c[a] + 12]](a);
}
VGa.X = 1;
function WGa(a) {
  return v[c[c[a] + 9]](a);
}
WGa.X = 1;
function XGa(a) {
  return Ge(a);
}
XGa.X = 1;
function YGa(a) {
  return Ye(a);
}
YGa.X = 1;
function ZGa(a, d) {
  v[c[c[a] + 6]](a, d);
}
ZGa.X = 1;
function $Ga(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
$Ga.X = 1;
function aHa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
aHa.X = 1;
function bHa(a) {
  return xf(a);
}
bHa.X = 1;
function cHa(a) {
  return zf(a);
}
cHa.X = 1;
function dHa(a) {
  return Me(a);
}
dHa.X = 1;
function eHa(a) {
  return Bf(a);
}
eHa.X = 1;
function fHa(a) {
  return v[c[c[a] + 11]](a);
}
fHa.X = 1;
function gHa(a, d) {
  v[c[c[a] + 10]](a, d);
}
gHa.X = 1;
function hHa(a) {
  return Gf(a);
}
hHa.X = 1;
function iHa(a) {
  return Kf(a);
}
iHa.X = 1;
function jHa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
jHa.X = 1;
function kHa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
kHa.X = 1;
function lHa(a) {
  return v[c[c[a] + 4]](a);
}
lHa.X = 1;
function mHa(a) {
  return k[a + 26];
}
mHa.X = 1;
function nHa(a) {
  return k[a + 25];
}
nHa.X = 1;
function oHa(a, d) {
  k[a + 21] = d;
}
oHa.X = 1;
function pHa(a) {
  return k[a + 24];
}
pHa.X = 1;
function qHa(a, d) {
  k[a + 23] = d;
}
qHa.X = 1;
function rHa(a, d) {
  k[a + 22] = d;
}
rHa.X = 1;
function sHa(a) {
  return k[a + 23];
}
sHa.X = 1;
function tHa(a) {
  return k[a + 21];
}
tHa.X = 1;
function uHa(a, d) {
  k[a + 24] = d;
}
uHa.X = 1;
function vHa(a, d) {
  k[a + 25] = d;
}
vHa.X = 1;
function wHa(a, d) {
  k[a + 26] = d;
}
wHa.X = 1;
function xHa(a) {
  return k[a + 22];
}
xHa.X = 1;
function yHa(a, d) {
  c[a + 1] = d;
}
yHa.X = 1;
function zHa(a) {
  return a + 2;
}
zHa.X = 1;
function AHa(a) {
  return c[a];
}
AHa.X = 1;
function BHa(a, d) {
  k[a + 10] = d;
}
BHa.X = 1;
function CHa(a, d) {
  c[a] = d;
}
CHa.X = 1;
function DHa(a) {
  return k[a + 10];
}
DHa.X = 1;
function EHa(a) {
  return c[a + 1];
}
EHa.X = 1;
function FHa(a) {
  return a + 6;
}
FHa.X = 1;
function GHa(a) {
  return c[a + 15];
}
GHa.X = 1;
function HHa(a, d) {
  v[c[c[a] + 14]](a, d);
}
HHa.X = 1;
function IHa(a) {
  return Uf(a);
}
IHa.X = 1;
function JHa(a) {
  return Ie(a);
}
JHa.X = 1;
function KHa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
KHa.X = 1;
function LHa(a) {
  return v[c[c[a] + 2]](a);
}
LHa.X = 1;
function MHa(a, d) {
  NHa(a, d);
}
MHa.X = 1;
function NHa(a, d) {
  var e = b;
  b += 7;
  var f,
    g = e + 1,
    h = e + 2,
    i = e + 6;
  k[a + 21] = k[d + 4];
  k[a + 22] = k[d + 5];
  k[a + 23] = k[d + 6];
  k[a + 24] = k[d + 7];
  k[a + 26] = k[d + 8];
  f = c[d + 10];
  c[e] = 0;
  PV(a + 4, f, e);
  f = 0;
  var j = (f | 0) < (c[d + 10] | 0);
  a: do {
    if (j) {
      for (var l = a + 4; ; ) {
        if (
          ((c[QV(l, f)] = c[c[d] + f]), (f += 1), (f | 0) >= (c[d + 10] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  f = c[d + 9];
  c[g] = 0;
  PV(a + 9, f, g);
  f = 0;
  g = (f | 0) < (c[d + 9] | 0);
  a: do {
    if (g) {
      for (j = a + 9; ; ) {
        if (
          ((c[QV(j, f)] = c[c[d + 1] + f]), (f += 1), (f | 0) >= (c[d + 9] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  f = c[d + 11];
  cE(h);
  OHa(a + 14, f, h);
  f = 0;
  h = (f | 0) < (c[d + 11] | 0);
  a: do {
    if (h) {
      for (var g = a + 14, j = a + 14, l = a + 14, m = a + 14; ; ) {
        if (
          ((k[RV(g, f) + 1] = k[(f << 2) + c[d + 2] + 1]),
          (k[RV(j, f) + 2] = k[(f << 2) + c[d + 2] + 2]),
          (k[RV(l, f) + 3] = k[(f << 2) + c[d + 2] + 3]),
          (c[RV(m, f)] = c[(f << 2) + c[d + 2]]),
          (f += 1),
          (f | 0) >= (c[d + 11] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  f = c[d + 12];
  c[i] = 0;
  PHa(a + 19, f, i);
  f = 0;
  i = (f | 0) < (c[d + 12] | 0);
  a: do {
    if (i) {
      for (h = a + 19; ; ) {
        if (
          ((c[QHa(h, f)] = c[c[d + 3] + f]),
          (f += 1),
          (f | 0) >= (c[d + 12] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = e;
}
NHa.X = 1;
function RHa(a, d, e) {
  return v[c[c[a] + 3]](a, d, e);
}
RHa.X = 1;
function SHa(a) {
  0 != (a | 0) && xe(a);
}
SHa.X = 1;
function THa(a, d) {
  var e = a + 2;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
THa.X = 1;
function UHa(a, d, e, f, g) {
  var h = xb(44);
  SV(h, a, d, e, f, g);
  return h;
}
UHa.X = 1;
function VHa(a, d) {
  var e = a + 6;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
VHa.X = 1;
function WHa(a) {
  return GHa(a);
}
WHa.X = 1;
function XHa(a, d, e, f, g, h, i, j) {
  return TV(a, d, e, f, g, h, i, j);
}
XHa.X = 1;
function TV(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 6;
  var m = l + 3;
  UV(a, l, d, 0);
  UV(a, m, e, 1);
  d = YHa(a);
  e = VV(a, d);
  c[e + 4] = d;
  c[e] = f;
  c[e + 1] = g;
  c[e + 2] = h;
  c[e + 3] = j;
  for (
    var f = c[a + 15] << 1,
      g = 0,
      h = a + 17,
      j = a + 19,
      n = a + 19,
      p = a + 19,
      r = a + 19,
      s = a + 19,
      t = a + 19;
    ;

  ) {
    var w = c[h] + g + 16;
    c[w] += 2;
    var w = ((f + 1) << 1) + c[j + g],
      x = ((f - 1) << 1) + c[n + g];
    c[w] = c[x];
    k[w] = k[x];
    c[w + 1] = c[x + 1];
    k[w + 1] = k[x + 1];
    c[((f - 1) << 1) + c[p + g]] = c[l + g];
    c[((f - 1) << 1) + c[r + g] + 1] = d;
    c[(f << 1) + c[s + g]] = c[m + g];
    c[(f << 1) + c[t + g] + 1] = d;
    c[e + (g + 13)] = f - 1;
    c[e + (g + 16)] = f;
    g = w = g + 1;
    if (3 <= w >>> 0) {
      break;
    }
  }
  WV(a, 0, c[e + 13], i, 0);
  XV(a, 0, c[e + 16], i, 0);
  WV(a, 1, c[e + 14], i, 0);
  XV(a, 1, c[e + 17], i, 0);
  WV(a, 2, c[e + 15], i, 1);
  XV(a, 2, c[e + 18], i, 1);
  b = l;
  return d;
}
TV.X = 1;
function ZHa(a, d, e, f) {
  UV(a, d, e, f);
}
ZHa.X = 1;
function $Ha(a) {
  return c[a + 26];
}
$Ha.X = 1;
function YV(a, d, e) {
  var f;
  $2 = a;
  var g = (a = 0);
  a: for (;;) {
    if (3 > (g | 0)) {
      g = c[d + (a + 16)] >>> 0 < c[e + (a + 13)] >>> 0;
      do {
        if (!g && c[e + (a + 16)] >>> 0 >= c[d + (a + 13)] >>> 0) {
          a = g = a + 1;
          continue a;
        }
      } while (0);
      f = 0;
      break;
    }
    f = 1;
    break;
  }
  return f;
}
YV.X = 1;
function UV(a, d, e, f) {
  var g = b;
  b += 8;
  var h = g + 4;
  N(h, e, a + 3);
  ig(g, h, a + 11);
  c[d] =
    0 >= k[g]
      ? f
      : k[g] >= c[a + 2] >>> 0
        ? (c[a + 1] & c[a + 2]) | f
        : (Math.floor(k[g]) & c[a + 1]) | f;
  c[d + 1] =
    0 >= k[g + 1]
      ? f
      : k[g + 1] >= c[a + 2] >>> 0
        ? (c[a + 1] & c[a + 2]) | f
        : (Math.floor(k[g + 1]) & c[a + 1]) | f;
  c[d + 2] =
    0 >= k[g + 2]
      ? f
      : k[g + 2] >= c[a + 2] >>> 0
        ? (c[a + 1] & c[a + 2]) | f
        : (Math.floor(k[g + 2]) & c[a + 1]) | f;
  b = g;
}
UV.X = 1;
function aIa(a, d, e) {
  ZV(a, d, e);
}
aIa.X = 1;
function ZV(a, d, e) {
  var f, g, h, i, j;
  f = VV(a, d);
  g = c[a + 25];
  v[c[c[g] + 14]](g) || ((g = c[a + 25]), v[c[c[g] + 4]](g, f, e));
  g = c[a + 15] << 1;
  h = 0;
  for (var l = a + 17; ; ) {
    var m = c[l] + h + 16;
    c[m] -= 2;
    h = m = h + 1;
    if (3 <= (m | 0)) {
      break;
    }
  }
  h = 0;
  for (
    var l = a + 19, m = a + 2, n = a + 2, p = a + 2;
    !((i = c[l + h]),
    (j = c[f + (h + 16)]),
    (c[(j << 1) + i] = c[m]),
    bIa(a, h, j, e, 0),
    (j = c[f + (h + 13)]),
    (c[(j << 1) + i] = c[n]),
    cIa(a, h, j, e, 0),
    (c[((g - 1) << 1) + i + 1] = 0),
    (c[((g - 1) << 1) + i] = c[p]),
    (h = i = h + 1),
    3 <= (i | 0));

  ) {}
  dIa(a, d);
}
ZV.X = 1;
function eIa(a) {
  return $Ha(a);
}
eIa.X = 1;
function fIa(a, d) {
  gIa(a, d);
}
fIa.X = 1;
function hIa(a, d, e, f) {
  var g = b;
  b += 14;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = c[c[a] + 6];
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  v[r](a, d, e, f, g, l);
  b = g;
}
hIa.X = 1;
function iIa(a, d, e, f, g) {
  var h = b;
  b += 7;
  var i = h + 4,
    j = h + 5,
    l = h + 6,
    m = c[c[a] + 6];
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  v[m](a, d, e, f, g, h);
  b = h;
}
iIa.X = 1;
function jIa(a, d, e, f, g, h) {
  v[c[c[a] + 6]](a, d, e, f, g, h);
}
jIa.X = 1;
function kIa(a, d, e, f, g) {
  v[c[c[a] + 4]](a, d, e, f, g);
}
kIa.X = 1;
function lIa(a, d) {
  v[c[c[a] + 12]](a, d);
}
lIa.X = 1;
function mIa(a, d, e) {
  return YV(a, d, e);
}
mIa.X = 1;
function nIa(a, d, e, f) {
  v[c[c[a] + 5]](a, d, e, f);
}
nIa.X = 1;
function oIa(a, d, e, f, g) {
  $V(a, d, e, f, g);
}
oIa.X = 1;
function $V(a, d, e, f, g) {
  var h = b;
  b += 6;
  var i = h + 3,
    j,
    l,
    m,
    n,
    d = VV(a, d);
  UV(a, h, e, 0);
  UV(a, i, f, 1);
  for (
    var e = 0, f = a + 19, p = a + 19, r = a + 19, s = a + 19;
    !((j = c[d + (e + 13)]),
    (l = c[d + (e + 16)]),
    (m = c[h + e] - c[(j << 1) + c[f + e]]),
    (n = c[i + e] - c[(l << 1) + c[p + e]]),
    (c[(j << 1) + c[r + e]] = c[h + e]),
    (c[(l << 1) + c[s + e]] = c[i + e]),
    0 > (m | 0) && WV(a, e, j, g, 1),
    0 < (n | 0) && bIa(a, e, l, g, 1),
    0 < (m | 0) && cIa(a, e, j, g, 1),
    0 > (n | 0) && XV(a, e, l, g, 1),
    (e = j = e + 1),
    3 <= (j | 0));

  ) {}
  b = h;
}
$V.X = 1;
function aW(a) {
  return Ue(a, 16);
}
aW.X = 1;
function pIa(a) {
  v[c[c[a] + 13]](a);
}
pIa.X = 1;
function qIa(a, d, e, f, g, h, i, j, l) {
  return v[c[c[a] + 2]](a, d, e, f, g, h, i, j, l);
}
qIa.X = 1;
function rIa(a, d) {
  var e = aW(124);
  bW(e, a, d, 15e5, 0, 0);
  return e;
}
rIa.X = 1;
function sIa(a, d, e) {
  var f = aW(124);
  bW(f, a, d, e, 0, 0);
  return f;
}
sIa.X = 1;
function tIa(a, d, e, f) {
  var g = aW(124);
  bW(g, a, d, e, f, 0);
  return g;
}
tIa.X = 1;
function uIa(a, d, e, f, g) {
  var g = g & 1,
    h = aW(124);
  bW(h, a, d, e, f, g & 1);
  return h;
}
uIa.X = 1;
function vIa(a, d) {
  c[a + 26] = d;
}
vIa.X = 1;
function VV(a, d) {
  return c[a + 17] + 20 * d;
}
VV.X = 1;
function wIa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
wIa.X = 1;
function xIa(a, d) {
  vIa(a, d);
}
xIa.X = 1;
function yIa(a, d) {
  v[c[c[a] + 8]](a, d);
}
yIa.X = 1;
function zIa(a) {
  return v[c[c[a] + 9]](a);
}
zIa.X = 1;
function AIa(a, d, e, f) {
  BIa(a, d, e, f);
}
AIa.X = 1;
function BIa(a, d, e, f) {
  var g = b;
  b += 12;
  var h = g + 3,
    i = g + 6,
    j = g + 7,
    l = g + 8,
    m = g + 9,
    n = g + 10,
    p = g + 11;
  c[g] = c[(c[d + 13] << 1) + c[a + 19]] & 65535;
  c[h] = (c[(c[d + 16] << 1) + c[a + 19]] + 1) & 65535;
  c[g + 1] = c[(c[d + 14] << 1) + c[a + 20]] & 65535;
  c[h + 1] = (c[(c[d + 17] << 1) + c[a + 20]] + 1) & 65535;
  c[g + 2] = c[(c[d + 15] << 1) + c[a + 21]] & 65535;
  c[h + 2] = (c[(c[d + 18] << 1) + c[a + 21]] + 1) & 65535;
  k[i] = (c[g] & 65535) / k[a + 11];
  k[j] = (c[g + 1] & 65535) / k[a + 11 + 1];
  k[l] = (c[g + 2] & 65535) / k[a + 11 + 2];
  pe(e, i, j, l);
  xn(e, a + 3);
  k[m] = (c[h] & 65535) / k[a + 11];
  k[n] = (c[h + 1] & 65535) / k[a + 11 + 1];
  k[p] = (c[h + 2] & 65535) / k[a + 11 + 2];
  pe(f, m, n, p);
  xn(f, a + 3);
  b = g;
}
BIa.X = 1;
function CIa(a, d, e, f) {
  v[c[c[a] + 7]](a, d, e, f);
}
CIa.X = 1;
function DIa(a, d, e) {
  v[c[c[a] + 11]](a, d, e);
}
DIa.X = 1;
function EIa(a, d, e) {
  v[c[c[a] + 3]](a, d, e);
}
EIa.X = 1;
function FIa(a, d) {
  return VV(a, d);
}
FIa.X = 1;
function GIa(a, d) {
  v[c[c[a] + 4]](a, d);
}
GIa.X = 1;
function HIa(a, d, e, f, g) {
  return v[c[c[a] + 3]](a, d, e, f, g);
}
HIa.X = 1;
function IIa(a, d, e, f, g) {
  v[c[c[a] + 2]](a, d, e, f, g);
}
IIa.X = 1;
function JIa(a, d, e) {
  v[c[c[a] + 8]](a, d, e);
}
JIa.X = 1;
function KIa(a) {
  return Ge(a);
}
KIa.X = 1;
function LIa(a, d) {
  var e = b;
  b += 4;
  0 == (c[MIa] << 24) >> 24 && Hb(MIa);
  v[c[c[a] + 15]](e, a, d);
  c[cW] = c[e];
  k[cW] = k[e];
  c[cW + 1] = c[e + 1];
  k[cW + 1] = k[e + 1];
  c[cW + 2] = c[e + 2];
  k[cW + 2] = k[e + 2];
  c[cW + 3] = c[e + 3];
  k[cW + 3] = k[e + 3];
  b = e;
  return cW;
}
LIa.X = 1;
function NIa(a, d) {
  Je(a, d);
}
NIa.X = 1;
function OIa(a) {
  return Le(a);
}
OIa.X = 1;
function PIa(a, d, e) {
  return v[c[c[a] + 13]](a, d, e);
}
PIa.X = 1;
function QIa(a) {
  return v[c[c[a] + 7]](a);
}
QIa.X = 1;
function RIa(a) {
  return v[c[c[a] + 19]](a);
}
RIa.X = 1;
function SIa(a) {
  return Ye(a);
}
SIa.X = 1;
function TIa(a) {
  return dW(a);
}
TIa.X = 1;
function dW(a) {
  return k[a + 7] * k[a + 3];
}
dW.X = 1;
function UIa(a, d, e, f) {
  df(a, d, e, f);
}
UIa.X = 1;
function VIa(a) {
  return v[c[c[a] + 12]](a);
}
VIa.X = 1;
function WIa(a) {
  return v[c[c[a] + 9]](a);
}
WIa.X = 1;
function XIa(a) {
  return a + 3;
}
XIa.X = 1;
function YIa(a, d) {
  var e = b;
  b += 4;
  0 == (c[ZIa] << 24) >> 24 && Hb(ZIa);
  kf(e, a, d);
  c[eW] = c[e];
  k[eW] = k[e];
  c[eW + 1] = c[e + 1];
  k[eW + 1] = k[e + 1];
  c[eW + 2] = c[e + 2];
  k[eW + 2] = k[e + 2];
  c[eW + 3] = c[e + 3];
  k[eW + 3] = k[e + 3];
  b = e;
  return eW;
}
YIa.X = 1;
function $Ia(a, d) {
  Jf(a, d);
}
$Ia.X = 1;
function aJa(a, d) {
  v[c[c[a] + 6]](a, d);
}
aJa.X = 1;
function bJa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
bJa.X = 1;
function cJa(a, d) {
  dJa(a, d);
}
cJa.X = 1;
function dJa(a, d) {
  k[a + 7] = d;
  fW(a, d);
}
dJa.X = 1;
function eJa(a, d) {
  var e = b;
  b += 4;
  0 == (c[fJa] << 24) >> 24 && Hb(fJa);
  tf(e, a, d);
  c[gW] = c[e];
  k[gW] = k[e];
  c[gW + 1] = c[e + 1];
  k[gW + 1] = k[e + 1];
  c[gW + 2] = c[e + 2];
  k[gW + 2] = k[e + 2];
  c[gW + 3] = c[e + 3];
  k[gW + 3] = k[e + 3];
  b = e;
  return gW;
}
eJa.X = 1;
function gJa(a, d) {
  return v[c[c[a] + 5]](a, d);
}
gJa.X = 1;
function hJa(a) {
  return xf(a);
}
hJa.X = 1;
function iJa(a) {
  return zf(a);
}
iJa.X = 1;
function jJa(a) {
  return Me(a);
}
jJa.X = 1;
function kJa(a) {
  return Bf(a);
}
kJa.X = 1;
function lJa(a) {
  return v[c[c[a] + 11]](a);
}
lJa.X = 1;
function mJa(a, d, e) {
  v[c[c[a] + 20]](a, d, e);
}
mJa.X = 1;
function nJa(a, d) {
  v[c[c[a] + 10]](a, d);
}
nJa.X = 1;
function oJa(a) {
  return Gf(a);
}
oJa.X = 1;
function pJa(a) {
  var d = qJa(52);
  hW(d, a);
  return d;
}
pJa.X = 1;
function qJa(a) {
  return Ue(a, 16);
}
qJa.X = 1;
function rJa(a, d) {
  var e = b;
  b += 4;
  0 == (c[sJa] << 24) >> 24 && Hb(sJa);
  v[c[c[a] + 16]](e, a, d);
  c[iW] = c[e];
  k[iW] = k[e];
  c[iW + 1] = c[e + 1];
  k[iW + 1] = k[e + 1];
  c[iW + 2] = c[e + 2];
  k[iW + 2] = k[e + 2];
  c[iW + 3] = c[e + 3];
  k[iW + 3] = k[e + 3];
  b = e;
  return iW;
}
rJa.X = 1;
function tJa(a) {
  return Kf(a);
}
tJa.X = 1;
function uJa(a) {
  return Mf(a);
}
uJa.X = 1;
function vJa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
vJa.X = 1;
function wJa(a, d, e, f) {
  v[c[c[a] + 17]](a, d, e, f);
}
wJa.X = 1;
function xJa(a) {
  return a + 7;
}
xJa.X = 1;
function yJa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = e;
  v[c[c[a] + 3]](a, d, f);
  b = f;
}
yJa.X = 1;
function zJa(a) {
  return v[c[c[a] + 4]](a);
}
zJa.X = 1;
function AJa(a, d) {
  v[c[c[a] + 14]](a, d);
}
AJa.X = 1;
function BJa() {
  return 0;
}
BJa.X = 1;
function CJa() {}
CJa.X = 1;
function DJa() {}
DJa.X = 1;
function EJa() {}
EJa.X = 1;
function FJa(a, d) {
  c[a + 36] = d;
}
FJa.X = 1;
function GJa(a) {
  return c[a];
}
GJa.X = 1;
function HJa(a, d) {
  c[a + 1] = d;
}
HJa.X = 1;
function IJa(a, d) {
  c[a] = d;
}
IJa.X = 1;
function JJa(a) {
  return c[a + 1];
}
JJa.X = 1;
function KJa(a, d, e) {
  $1 = a;
  a = d;
  for (d = 0; ; ) {
    var f = (c[a] & 255) - (c[e] & 255),
      d = f;
    if (0 != (f | 0)) {
      var g = f;
      break;
    }
    if (0 == (c[e] << 24) >> 24) {
      g = d;
      break;
    }
    a += 1;
    e += 1;
  }
  0 > (g | 0) ? (d = -1) : 0 < (d | 0) && (d = 1);
  return d;
}
KJa.X = 1;
function LJa(a) {
  return c[a + 1];
}
LJa.X = 1;
function MJa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
MJa.X = 1;
function NJa(a, d, e, f, g, h, i) {
  Tf(a, d, e, f, g, h, i);
}
NJa.X = 1;
function OJa(a) {
  return Uf(a);
}
OJa.X = 1;
function PJa(a) {
  return Ie(a);
}
PJa.X = 1;
function QJa(a, d) {
  FJa(a, d);
}
QJa.X = 1;
function RJa(a) {
  So(a);
}
RJa.X = 1;
function SJa(a, d, e) {
  return 0 != (v[c[c[a] + 4]](a, d, e) | 0);
}
SJa.X = 1;
function TJa(a, d, e, f) {
  return v[c[c[a] + 2]](a, d, e, f & 1);
}
TJa.X = 1;
function UJa(a) {
  return a + 26;
}
UJa.X = 1;
function VJa(a, d, e) {
  Wo(a, d, e, 1);
}
VJa.X = 1;
function WJa(a, d, e, f) {
  Wo(a, d, e, f);
}
WJa.X = 1;
function XJa(a, d, e, f) {
  Xo(a, d, e, f);
}
XJa.X = 1;
function YJa(a) {
  return Go(a);
}
YJa.X = 1;
function ZJa(a) {
  return Zo(a);
}
ZJa.X = 1;
function $Ja(a) {
  return a + 31;
}
$Ja.X = 1;
function aKa(a, d, e, f) {
  $o(a, d, e, f);
}
aKa.X = 1;
function bKa(a, d, e, f) {
  ap(a, d, e, f);
}
bKa.X = 1;
function cKa(a, d, e) {
  return dKa(a, d, e & 1);
}
cKa.X = 1;
function eKa(a, d, e, f) {
  fp(a, d, e, f);
}
eKa.X = 1;
function fKa(a, d) {
  v[c[c[a] + 6]](a, d);
}
fKa.X = 1;
function gKa(a) {
  return v[c[c[a] + 3]](a);
}
gKa.X = 1;
function hKa(a) {
  if (0 != (a | 0)) {
    v[c[c[a] + 1]](a);
  }
}
hKa.X = 1;
function iKa(a) {
  return Ue(a, 16);
}
iKa.X = 1;
function jKa(a, d) {
  v[c[c[a] + 5]](a, d);
}
jKa.X = 1;
function kKa(a) {
  return a + 37;
}
kKa.X = 1;
function lKa(a, d) {
  var e = b;
  b += 4;
  0 == (c[mKa] << 24) >> 24 && Hb(mKa);
  qp(e, a, d);
  c[jW] = c[e];
  k[jW] = k[e];
  c[jW + 1] = c[e + 1];
  k[jW + 1] = k[e + 1];
  c[jW + 2] = c[e + 2];
  k[jW + 2] = k[e + 2];
  c[jW + 3] = c[e + 3];
  k[jW + 3] = k[e + 3];
  b = e;
  return jW;
}
lKa.X = 1;
function nKa(a, d, e, f, g, h) {
  sp(a, d, e, f, g, h);
}
nKa.X = 1;
function oKa(a) {
  0 != (a | 0) && xe(a);
}
oKa.X = 1;
function pKa(a) {
  var d = xb(8);
  qKa(d, a);
  return d;
}
pKa.X = 1;
function rKa(a, d) {
  return sKa(a, d);
}
rKa.X = 1;
function sKa(a, d) {
  return (c[a] | 0) == (c[d] | 0) ? 1 : 0 == (KJa(a, c[a], c[d]) | 0);
}
sKa.X = 1;
function tKa(a) {
  return JJa(a);
}
tKa.X = 1;
function uKa(a, d, e) {
  return KJa(a, d, e);
}
uKa.X = 1;
function vKa() {}
vKa.X = 1;
function wKa(a) {
  xe(a);
}
wKa.X = 1;
function WV(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i, j, l, m;
  $5 = f;
  f = g & 1;
  e = (e << 1) + c[a + (d + 19)];
  g = e - 2;
  i = VV(a, c[e + 1]);
  var n = c[e] >>> 0 < c[g] >>> 0;
  a: do {
    if (n) {
      for (var p = a + 25, r = a + 26, s = a + 26, t = h, w = h; ; ) {
        if (
          ((j = VV(a, c[g + 1])),
          (l = d),
          0 != (kW(g) | 0)
            ? ((l = (1 << l) & 3),
              (m = (1 << l) & 3),
              f & 1 &&
                lW(a, i, j, l, m) &&
                ((l = c[p]),
                v[c[c[l] + 2]](l, i, j),
                0 != (c[r] | 0) && ((l = c[s]), v[c[c[l] + 2]](l, i, j))),
              (j += d + 16))
            : (j += l + 13),
          (c[j] += 1),
          (j = i + (d + 13)),
          (c[j] -= 1),
          (j = e),
          (c[t] = c[j]),
          (k[t] = k[j]),
          (c[t + 1] = c[j + 1]),
          (k[t + 1] = k[j + 1]),
          (j = e),
          (l = g),
          (c[j] = c[l]),
          (k[j] = k[l]),
          (c[j + 1] = c[l + 1]),
          (k[j + 1] = k[l + 1]),
          (j = g),
          (c[j] = c[w]),
          (k[j] = k[w]),
          (c[j + 1] = c[w + 1]),
          (k[j + 1] = k[w + 1]),
          (e -= 2),
          (g -= 2),
          c[e] >>> 0 >= c[g] >>> 0)
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
WV.X = 1;
function xKa() {
  var a = iKa(172);
  mW(a);
  return a;
}
xKa.X = 1;
function kW(a) {
  return c[a] & 1;
}
kW.X = 1;
function lW(a, d, e, f, g) {
  var h;
  $2 = a;
  c[d + (f + 16)] >>> 0 < c[e + (f + 13)] >>> 0
    ? (a = 6)
    : c[e + (f + 16)] >>> 0 < c[d + (f + 13)] >>> 0
      ? (a = 6)
      : c[d + (g + 16)] >>> 0 < c[e + (g + 13)] >>> 0
        ? (a = 6)
        : c[e + (g + 16)] >>> 0 < c[d + (g + 13)] >>> 0
          ? (a = 6)
          : ((h = 1), (a = 8));
  6 == a && (h = 0);
  return h;
}
lW.X = 1;
function nW(a, d) {
  c[a + 13] = d;
}
nW.X = 1;
function yKa(a) {
  return c[a + 13];
}
yKa.X = 1;
function bIa(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i, j, l, m;
  $5 = f;
  f = g & 1;
  e = (e << 1) + c[a + (d + 19)];
  g = e + 2;
  i = VV(a, c[e + 1]);
  for (
    var n = a + 25, p = a + 26, r = a + 26;
    0 != (c[g + 1] | 0) && c[e] >>> 0 >= c[g] >>> 0;

  ) {
    j = VV(a, c[g + 1]);
    l = (1 << d) & 3;
    m = (1 << l) & 3;
    if (0 != (kW(g) | 0)) {
      j += d + 16;
    } else {
      if (f & 1 && lW(a, i, j, l, m)) {
        l = VV(a, c[e + 1]);
        m = VV(a, c[g + 1]);
        var s = c[n];
        v[c[c[s] + 2]](s, l, m);
        0 != (c[p] | 0) && ((s = c[r]), v[c[c[s] + 2]](s, l, m));
      }
      j += d + 13;
    }
    c[j] -= 1;
    j = i + (d + 16);
    c[j] += 1;
    j = e;
    c[h] = c[j];
    k[h] = k[j];
    c[h + 1] = c[j + 1];
    k[h + 1] = k[j + 1];
    j = e;
    l = g;
    c[j] = c[l];
    k[j] = k[l];
    c[j + 1] = c[l + 1];
    k[j + 1] = k[l + 1];
    j = g;
    c[j] = c[h];
    k[j] = k[h];
    c[j + 1] = c[h + 1];
    k[j + 1] = k[h + 1];
    e += 2;
    g += 2;
  }
  b = h;
}
bIa.X = 1;
function cIa(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i,
    j,
    l,
    m,
    n,
    p,
    r,
    g = g & 1,
    e = (e << 1) + c[a + (d + 19)];
  i = e + 2;
  j = VV(a, c[e + 1]);
  for (
    var s = a + 25, t = a + 26, w = a + 26;
    0 != (c[i + 1] | 0) && c[e] >>> 0 >= c[i] >>> 0;

  ) {
    (l = VV(a, c[i + 1])),
      0 != (kW(i) | 0)
        ? ((m = VV(a, c[e + 1])),
          (n = VV(a, c[i + 1])),
          (p = (1 << d) & 3),
          (r = (1 << p) & 3),
          g & 1 &&
            lW(a, m, n, p, r) &&
            ((p = c[s]),
            v[c[c[p] + 3]](p, m, n, f),
            0 != (c[t] | 0) && ((p = c[w]), v[c[c[p] + 3]](p, m, n, f))),
          (l += d + 16))
        : (l += d + 13),
      (c[l] -= 1),
      (l = j + (d + 13)),
      (c[l] += 1),
      (l = e),
      (c[h] = c[l]),
      (k[h] = k[l]),
      (c[h + 1] = c[l + 1]),
      (k[h + 1] = k[l + 1]),
      (l = e),
      (m = i),
      (c[l] = c[m]),
      (k[l] = k[m]),
      (c[l + 1] = c[m + 1]),
      (k[l + 1] = k[m + 1]),
      (l = i),
      (c[l] = c[h]),
      (k[l] = k[h]),
      (c[l + 1] = c[h + 1]),
      (k[l + 1] = k[h + 1]),
      (e += 2),
      (i += 2);
  }
  b = h;
}
cIa.X = 1;
function XV(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i,
    j,
    l,
    m,
    n,
    p,
    r,
    g = g & 1,
    e = (e << 1) + c[a + (d + 19)];
  i = e - 2;
  j = VV(a, c[e + 1]);
  var s = c[e] >>> 0 < c[i] >>> 0;
  a: do {
    if (s) {
      for (var t = h, w = h, x = a + 25, y = a + 26, z = a + 26; ; ) {
        if (
          ((l = VV(a, c[i + 1])),
          0 != (kW(i) | 0)
            ? (l += d + 16)
            : ((m = VV(a, c[e + 1])),
              (n = VV(a, c[i + 1])),
              (p = (1 << d) & 3),
              (r = (1 << p) & 3),
              g & 1 &&
                lW(a, m, n, p, r) &&
                ((p = c[x]),
                v[c[c[p] + 3]](p, m, n, f),
                0 != (c[y] | 0) && ((p = c[z]), v[c[c[p] + 3]](p, m, n, f))),
              (l += d + 13)),
          (c[l] += 1),
          (l = j + (d + 16)),
          (c[l] -= 1),
          (l = e),
          (c[t] = c[l]),
          (k[t] = k[l]),
          (c[t + 1] = c[l + 1]),
          (k[t + 1] = k[l + 1]),
          (l = e),
          (m = i),
          (c[l] = c[m]),
          (k[l] = k[m]),
          (c[l + 1] = c[m + 1]),
          (k[l + 1] = k[m + 1]),
          (l = i),
          (c[l] = c[w]),
          (k[l] = k[w]),
          (c[l + 1] = c[w + 1]),
          (k[l + 1] = k[w + 1]),
          (e -= 2),
          (i -= 2),
          c[e] >>> 0 >= c[i] >>> 0)
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
XV.X = 1;
function dIa(a, d) {
  nW(VV(a, d), c[a + 18]);
  c[a + 18] = d;
  var e = a + 15;
  c[e] -= 1;
}
dIa.X = 1;
function ig(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d] * k[e];
  k[g] = k[d + 1] * k[e + 1];
  k[h] = k[d + 2] * k[e + 2];
  H(a, f, g, h);
  b = f;
}
ig.X = 1;
function N(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d] - k[e];
  k[g] = k[d + 1] - k[e + 1];
  k[h] = k[d + 2] - k[e + 2];
  H(a, f, g, h);
  b = f;
}
N.X = 1;
function YHa(a) {
  var d;
  d = c[a + 18];
  c[a + 18] = yKa(VV(a, d));
  a += 15;
  c[a] += 1;
  return d;
}
YHa.X = 1;
function us(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i, j, l, m;
  $5 = f;
  f = g & 1;
  e = ((e & 65535) << 1) + c[a + (d + 19)];
  g = e - 2;
  i = ts(a, c[e + 1]);
  var n = ((c[e] & 65535) | 0) < ((c[g] & 65535) | 0);
  a: do {
    if (n) {
      for (var p = a + 25, r = a + 26, s = a + 26, t = h, w = h; ; ) {
        if (
          ((j = ts(a, c[g + 1])),
          (l = d),
          0 != (oW(g) << 16) >> 16
            ? ((l = (1 << l) & 3),
              (m = (1 << l) & 3),
              f & 1 &&
                pW(a, i, j, l, m) &&
                ((l = c[p]),
                v[c[c[l] + 2]](l, i, j),
                0 != (c[r] | 0) && ((l = c[s]), v[c[c[l] + 2]](l, i, j))),
              (j += d + 16))
            : (j += l + 13),
          (c[j] += 1),
          (j = i + (d + 13)),
          (c[j] -= 1),
          (j = e),
          (c[t] = c[j]),
          (k[t] = k[j]),
          (c[t + 1] = c[j + 1]),
          (k[t + 1] = k[j + 1]),
          (j = e),
          (l = g),
          (c[j] = c[l]),
          (k[j] = k[l]),
          (c[j + 1] = c[l + 1]),
          (k[j + 1] = k[l + 1]),
          (j = g),
          (c[j] = c[w]),
          (k[j] = k[w]),
          (c[j + 1] = c[w + 1]),
          (k[j + 1] = k[w + 1]),
          (e -= 2),
          (g -= 2),
          ((c[e] & 65535) | 0) >= ((c[g] & 65535) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
us.X = 1;
function zKa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
zKa.X = 1;
function AKa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
AKa.X = 1;
function BKa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
BKa.X = 1;
function oW(a) {
  return c[a] & 1;
}
oW.X = 1;
function pW(a, d, e, f, g) {
  var h;
  $2 = a;
  ((c[d + (f + 16)] & 65535) | 0) < ((c[e + (f + 13)] & 65535) | 0)
    ? (a = 6)
    : ((c[e + (f + 16)] & 65535) | 0) < ((c[d + (f + 13)] & 65535) | 0)
      ? (a = 6)
      : ((c[d + (g + 16)] & 65535) | 0) < ((c[e + (g + 13)] & 65535) | 0)
        ? (a = 6)
        : ((c[e + (g + 16)] & 65535) | 0) < ((c[d + (g + 13)] & 65535) | 0)
          ? (a = 6)
          : ((h = 1), (a = 8));
  6 == a && (h = 0);
  return h;
}
pW.X = 1;
function qW(a, d) {
  c[a + 13] = d;
}
qW.X = 1;
function CKa(a) {
  return c[a + 13];
}
CKa.X = 1;
function rW(a) {
  return c[a + 1];
}
rW.X = 1;
function sW(a, d) {
  return c[a + 3] + d;
}
sW.X = 1;
function tW(a) {
  return c[a + 1];
}
tW.X = 1;
function uW(a) {
  return c[a + 1];
}
uW.X = 1;
function DKa(a, d) {
  return c[a + 3] + d;
}
DKa.X = 1;
function vW(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
vW.X = 1;
function Fs(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i, j, l, m;
  $5 = f;
  f = g & 1;
  e = ((e & 65535) << 1) + c[a + (d + 19)];
  g = e + 2;
  i = ts(a, c[e + 1]);
  for (
    var n = a + 25, p = a + 26, r = a + 26;
    0 != (c[g + 1] << 16) >> 16 && ((c[e] & 65535) | 0) >= ((c[g] & 65535) | 0);

  ) {
    j = ts(a, c[g + 1]);
    l = (1 << d) & 3;
    m = (1 << l) & 3;
    if (0 != (oW(g) << 16) >> 16) {
      j += d + 16;
    } else {
      if (f & 1 && pW(a, i, j, l, m)) {
        l = ts(a, c[e + 1]);
        m = ts(a, c[g + 1]);
        var s = c[n];
        v[c[c[s] + 2]](s, l, m);
        0 != (c[p] | 0) && ((s = c[r]), v[c[c[s] + 2]](s, l, m));
      }
      j += d + 13;
    }
    c[j] -= 1;
    j = i + (d + 16);
    c[j] += 1;
    j = e;
    c[h] = c[j];
    k[h] = k[j];
    c[h + 1] = c[j + 1];
    k[h + 1] = k[j + 1];
    j = e;
    l = g;
    c[j] = c[l];
    k[j] = k[l];
    c[j + 1] = c[l + 1];
    k[j + 1] = k[l + 1];
    j = g;
    c[j] = c[h];
    k[j] = k[h];
    c[j + 1] = c[h + 1];
    k[j + 1] = k[h + 1];
    e += 2;
    g += 2;
  }
  b = h;
}
Fs.X = 1;
function Gs(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i,
    j,
    l,
    m,
    n,
    p,
    r,
    g = g & 1,
    e = ((e & 65535) << 1) + c[a + (d + 19)];
  i = e + 2;
  j = ts(a, c[e + 1]);
  for (
    var s = a + 25, t = a + 26, w = a + 26;
    0 != (c[i + 1] << 16) >> 16 && ((c[e] & 65535) | 0) >= ((c[i] & 65535) | 0);

  ) {
    (l = ts(a, c[i + 1])),
      0 != (oW(i) << 16) >> 16
        ? ((m = ts(a, c[e + 1])),
          (n = ts(a, c[i + 1])),
          (p = (1 << d) & 3),
          (r = (1 << p) & 3),
          g & 1 &&
            pW(a, m, n, p, r) &&
            ((p = c[s]),
            v[c[c[p] + 3]](p, m, n, f),
            0 != (c[t] | 0) && ((p = c[w]), v[c[c[p] + 3]](p, m, n, f))),
          (l += d + 16))
        : (l += d + 13),
      (c[l] -= 1),
      (l = j + (d + 13)),
      (c[l] += 1),
      (l = e),
      (c[h] = c[l]),
      (k[h] = k[l]),
      (c[h + 1] = c[l + 1]),
      (k[h + 1] = k[l + 1]),
      (l = e),
      (m = i),
      (c[l] = c[m]),
      (k[l] = k[m]),
      (c[l + 1] = c[m + 1]),
      (k[l + 1] = k[m + 1]),
      (l = i),
      (c[l] = c[h]),
      (k[l] = k[h]),
      (c[l + 1] = c[h + 1]),
      (k[l + 1] = k[h + 1]),
      (e += 2),
      (i += 2);
  }
  b = h;
}
Gs.X = 1;
function vs(a, d, e, f, g) {
  var h = b;
  b += 2;
  var i,
    j,
    l,
    m,
    n,
    p,
    r,
    g = g & 1,
    e = ((e & 65535) << 1) + c[a + (d + 19)];
  i = e - 2;
  j = ts(a, c[e + 1]);
  var s = ((c[e] & 65535) | 0) < ((c[i] & 65535) | 0);
  a: do {
    if (s) {
      for (var t = h, w = h, x = a + 25, y = a + 26, z = a + 26; ; ) {
        if (
          ((l = ts(a, c[i + 1])),
          0 != (oW(i) << 16) >> 16
            ? (l += d + 16)
            : ((m = ts(a, c[e + 1])),
              (n = ts(a, c[i + 1])),
              (p = (1 << d) & 3),
              (r = (1 << p) & 3),
              g & 1 &&
                pW(a, m, n, p, r) &&
                ((p = c[x]),
                v[c[c[p] + 3]](p, m, n, f),
                0 != (c[y] | 0) && ((p = c[z]), v[c[c[p] + 3]](p, m, n, f))),
              (l += d + 13)),
          (c[l] += 1),
          (l = j + (d + 16)),
          (c[l] -= 1),
          (l = e),
          (c[t] = c[l]),
          (k[t] = k[l]),
          (c[t + 1] = c[l + 1]),
          (k[t + 1] = k[l + 1]),
          (l = e),
          (m = i),
          (c[l] = c[m]),
          (k[l] = k[m]),
          (c[l + 1] = c[m + 1]),
          (k[l + 1] = k[m + 1]),
          (l = i),
          (c[l] = c[w]),
          (k[l] = k[w]),
          (c[l + 1] = c[w + 1]),
          (k[l + 1] = k[w + 1]),
          (e -= 2),
          (i -= 2),
          ((c[e] & 65535) | 0) >= ((c[i] & 65535) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
vs.X = 1;
function nia(a, d) {
  qW(ts(a, d), c[a + 18]);
  c[a + 18] = d;
  var e = a + 15;
  c[e] -= 1;
}
nia.X = 1;
function kia(a) {
  var d;
  d = c[a + 18];
  c[a + 18] = CKa(ts(a, d));
  a += 15;
  c[a] += 1;
  return d;
}
kia.X = 1;
function wW(a) {
  zKa(a, 0, rW(a));
  EKa(a);
  vW(a);
}
wW.X = 1;
function EKa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && FKa(a, c[a + 3]), (c[a + 3] = 0));
}
EKa.X = 1;
function FKa(a, d) {
  $1 = a;
  yh(d);
}
FKa.X = 1;
function GKa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && HKa(a, c[a + 3]), (c[a + 3] = 0));
}
GKa.X = 1;
function HKa(a, d) {
  $1 = a;
  yh(d);
}
HKa.X = 1;
function IKa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && JKa(a, c[a + 3]), (c[a + 3] = 0));
}
IKa.X = 1;
function qKa(a, d) {
  var e, f;
  c[a] = d;
  f = 0;
  var g = 0 != (c[c[a] + f] << 24) >> 24,
    h = -2128831035;
  a: do {
    if (g) {
      var i = a;
      for (e = h; ; ) {
        if (
          ((e ^= (c[c[i] + f] << 24) >> 24),
          (e *= 16777619),
          (f += 1),
          0 == (c[c[a] + f] << 24) >> 24)
        ) {
          var j = e;
          break a;
        }
      }
    } else {
      j = h;
    }
  } while (0);
  c[a + 1] = j;
}
qKa.X = 1;
function fW(a, d) {
  k[a + 11] = d;
}
fW.X = 1;
function QV(a, d) {
  return c[a + 3] + d;
}
QV.X = 1;
function RV(a, d) {
  return (d << 2) + c[a + 3];
}
RV.X = 1;
function QHa(a, d) {
  return c[a + 3] + d;
}
QHa.X = 1;
function KKa(a) {
  return c[a + 2];
}
KKa.X = 1;
function xW(a) {
  return c[a + 2];
}
xW.X = 1;
function LKa(a) {
  return c[a + 2];
}
LKa.X = 1;
function MKa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
MKa.X = 1;
function NG(a, d, e, f, g) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = k[g];
}
NG.X = 1;
function JKa(a, d) {
  $1 = a;
  yh(d);
}
JKa.X = 1;
function hW(a, d) {
  yW(a);
  c[a] = NKa + 2;
  c[a + 1] = 8;
  k[a + 7] = d;
  k[a + 11] = d;
}
hW.X = 1;
function SV(a, d, e, f, g, h) {
  c[a] = d;
  c[a + 1] = e;
  d = a + 2;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  f = a + 6;
  c[f] = c[g];
  k[f] = k[g];
  c[f + 1] = c[g + 1];
  k[f + 1] = k[g + 1];
  c[f + 2] = c[g + 2];
  k[f + 2] = k[g + 2];
  c[f + 3] = c[g + 3];
  k[f + 3] = k[g + 3];
  k[a + 10] = h;
}
SV.X = 1;
function PV(a, d, e) {
  var f, g;
  f = rW(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (rW(a) | 0) && OKa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (c[j] = c[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
PV.X = 1;
function OHa(a, d, e) {
  var f, g;
  f = tW(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (tW(a) | 0) && PKa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = (g << 2) + c[i];
          if (0 != (j | 0)) {
            var l = e;
            c[j] = c[l];
            k[j] = k[l];
            c[j + 1] = c[l + 1];
            k[j + 1] = k[l + 1];
            c[j + 2] = c[l + 2];
            k[j + 2] = k[l + 2];
            c[j + 3] = c[l + 3];
            k[j + 3] = k[l + 3];
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
OHa.X = 1;
function PHa(a, d, e) {
  var f, g;
  f = uW(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (uW(a) | 0) && QKa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          if (0 != (j | 0)) {
            var l = e;
            c[j] = c[l];
            k[j] = k[l];
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
PHa.X = 1;
function QKa(a, d) {
  var e;
  (KKa(a) | 0) < (d | 0) &&
    ((e = RKa(a, d)),
    SKa(a, 0, uW(a), e),
    BKa(a, 0, uW(a)),
    IKa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
QKa.X = 1;
function RKa(a, d) {
  return 0 != (d | 0) ? TKa(a, d, 0) : 0;
}
RKa.X = 1;
function SKa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        if (0 != (i | 0)) {
          var j = c[h] + d;
          c[i] = c[j];
          k[i] = k[j];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
SKa.X = 1;
function TKa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
TKa.X = 1;
function PKa(a, d) {
  var e;
  (xW(a) | 0) < (d | 0) &&
    ((e = UKa(a, d)),
    VKa(a, 0, tW(a), e),
    AKa(a, 0, tW(a)),
    GKa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
PKa.X = 1;
function UKa(a, d) {
  return 0 != (d | 0) ? WKa(a, d, 0) : 0;
}
UKa.X = 1;
function VKa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 2) + f;
        if (0 != (i | 0)) {
          var j = (d << 2) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
          c[i + 2] = c[j + 2];
          k[i + 2] = k[j + 2];
          c[i + 3] = c[j + 3];
          k[i + 3] = k[j + 3];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
VKa.X = 1;
function WKa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 4, 16);
}
WKa.X = 1;
function OKa(a, d) {
  var e;
  (LKa(a) | 0) < (d | 0) &&
    ((e = XKa(a, d)),
    MKa(a, 0, rW(a), e),
    zKa(a, 0, rW(a)),
    EKa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
OKa.X = 1;
function XKa(a, d) {
  return 0 != (d | 0) ? YKa(a, d, 0) : 0;
}
XKa.X = 1;
function YKa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
YKa.X = 1;
function MB(a) {
  var d = a;
  -1 > d ? (a = -1) : 1 < d && (a = 1);
  return ZKa(a);
}
MB.X = 1;
function HFa(a, d, e) {
  var f = b;
  b += 1;
  k[f] = 1 / k[e];
  $Ka(a, d, f);
  b = f;
}
HFa.X = 1;
function $Ka(a, d, e) {
  var f = b;
  b += 4;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] = k[d] * k[e];
  k[g] = k[d + 1] * k[e];
  k[h] = k[d + 2] * k[e];
  k[i] = k[d + 3] * k[e];
  NG(a, f, g, h, i);
  b = f;
}
$Ka.X = 1;
function aLa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
aLa.X = 1;
function Cy(a) {
  return c[a + 1];
}
Cy.X = 1;
function zW(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
zW.X = 1;
function bLa(a) {
  c[a] = cLa + 2;
  k[a + 1] = 1;
  c[a + 2] = 1;
  c[a + 3] = -1;
}
bLa.X = 1;
function LEa(a, d, e) {
  var f = b;
  b += 4;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] = k[d] - k[e];
  k[g] = k[d + 1] - k[e + 1];
  k[h] = k[d + 2] - k[e + 2];
  k[i] = k[d + 3] - k[e + 3];
  NG(a, f, g, h, i);
  b = f;
}
LEa.X = 1;
function MEa(a, d, e) {
  var f = b;
  b += 4;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] = k[d] + k[e];
  k[g] = k[d + 1] + k[e + 1];
  k[h] = k[d + 2] + k[e + 2];
  k[i] = k[d + 3] + k[e + 3];
  NG(a, f, g, h, i);
  b = f;
}
MEa.X = 1;
function NEa(a, d) {
  var e = b;
  b += 4;
  var f = e + 1,
    g = e + 2,
    h = e + 3;
  k[e] = -k[d];
  k[f] = -k[d + 1];
  k[g] = -k[d + 2];
  k[h] = -k[d + 3];
  NG(a, e, f, g, h);
  b = e;
}
NEa.X = 1;
function mBa(a) {
  dLa(a);
  c[a] = AW + 2;
  zW(a + 5);
  c[a + 12] = 0;
}
mBa.X = 1;
function dLa(a) {
  var d = b;
  b += 3;
  var e = d + 1,
    f = d + 2;
  c[a] = eLa + 2;
  k[d] = 1;
  k[e] = 1;
  k[f] = 1;
  H(a + 1, d, e, f);
  b = d;
}
dLa.X = 1;
function fLa(a) {
  aLa(a, 0, Cy(a));
  gLa(a);
  zW(a);
}
fLa.X = 1;
function gLa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && hLa(a, c[a + 3]), (c[a + 3] = 0));
}
gLa.X = 1;
function hLa(a, d) {
  $1 = a;
  yh(d);
}
hLa.X = 1;
function hV(a, d, e, f, g, h, i) {
  c[a] = f;
  c[a + 1] = g;
  c[a + 2] = h;
  f = a + 5;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  d = a + 9;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[a + 3] = i;
}
hV.X = 1;
function gV(a) {
  c[a] = 0;
  c[a + 3] = 0;
}
gV.X = 1;
function LAa(a, d, e) {
  k[a + 20] = d;
  k[a + 21] = e;
  k[a + 22] = 0;
}
LAa.X = 1;
function IAa(a, d, e, f, g, h, i) {
  var j = b;
  b += 25;
  var l = j + 1,
    m = j + 5,
    n = j + 9,
    p = j + 13,
    r = j + 14,
    s = j + 18,
    t = j + 22,
    w = j + 23,
    x = j + 24;
  k[j] = g;
  N(m, d, a);
  wC(l, m, j);
  c[h] = c[l];
  k[h] = k[l];
  c[h + 1] = c[l + 1];
  k[h + 1] = k[l + 1];
  c[h + 2] = c[l + 2];
  k[h + 2] = k[l + 2];
  c[h + 3] = c[l + 3];
  k[h + 3] = k[l + 3];
  iLa(e, f)
    ? (jLa(e, f, n, p),
      Q(s, n, p),
      wC(r, s, j),
      (c[i] = c[r]),
      (k[i] = k[r]),
      (c[i + 1] = c[r + 1]),
      (k[i + 1] = k[r + 1]),
      (c[i + 2] = c[r + 2]),
      (k[i + 2] = k[r + 2]),
      (c[i + 3] = c[r + 3]),
      (k[i + 3] = k[r + 3]))
    : ((k[t] = 0), (k[w] = 0), (k[x] = 0), pe(i, t, w, x));
  b = j;
}
IAa.X = 1;
function wC(a, d, e) {
  var f = b;
  b += 1;
  k[f] = 1 / k[e];
  Q(a, d, f);
  b = f;
}
wC.X = 1;
function iLa(a, d) {
  return hG(a, d) ^ 1;
}
iLa.X = 1;
function jLa(a, d, e, f) {
  var g = b;
  b += 24;
  var h = g + 4,
    i = g + 8,
    j = g + 12,
    l = g + 16,
    m = g + 20,
    n = g + 21,
    p = g + 22,
    r = g + 23;
  KEa(g, a, d);
  EV(i, a);
  BW(h, g, i);
  k[f] = KV(h);
  H(j, h, h + 1, h + 2);
  c[e] = c[j];
  k[e] = k[j];
  c[e + 1] = c[j + 1];
  k[e + 1] = k[j + 1];
  c[e + 2] = c[j + 2];
  k[e + 2] = k[j + 2];
  c[e + 3] = c[j + 3];
  k[e + 3] = k[j + 3];
  k[e + 3] = 0;
  a = Um(e);
  1.4210854715202004e-14 > a
    ? ((k[m] = 1),
      (k[n] = 0),
      (k[p] = 0),
      H(l, m, n, p),
      (c[e] = c[l]),
      (k[e] = k[l]),
      (c[e + 1] = c[l + 1]),
      (k[e + 1] = k[l + 1]),
      (c[e + 2] = c[l + 2]),
      (k[e + 2] = k[l + 2]),
      (c[e + 3] = c[l + 3]),
      (k[e + 3] = k[l + 3]))
    : ((k[r] = ec(a)), KB(e, r));
  b = g;
}
jLa.X = 1;
function Q(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d] * k[e];
  k[g] = k[d + 1] * k[e];
  k[h] = k[d + 2] * k[e];
  H(a, f, g, h);
  b = f;
}
Q.X = 1;
function BW(a, d, e) {
  var f = b;
  b += 4;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] =
    k[d + 3] * k[e] +
    k[d] * k[e + 3] +
    k[d + 1] * k[e + 2] -
    k[d + 2] * k[e + 1];
  k[g] =
    k[d + 3] * k[e + 1] +
    k[d + 1] * k[e + 3] +
    k[d + 2] * k[e] -
    k[d] * k[e + 2];
  k[h] =
    k[d + 3] * k[e + 2] +
    k[d + 2] * k[e + 3] +
    k[d] * k[e + 1] -
    k[d + 1] * k[e];
  k[i] =
    k[d + 3] * k[e + 3] -
    k[d] * k[e] -
    k[d + 1] * k[e + 1] -
    k[d + 2] * k[e + 2];
  NG(a, f, g, h, i);
  b = f;
}
BW.X = 1;
function fV(a, d, e) {
  bLa(a);
  c[a] = kLa + 2;
  var f = a + 4;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  d = a + 8;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[a + 20] = 0;
}
fV.X = 1;
function lLa() {}
lLa.X = 1;
function mLa(a) {
  xe(a);
}
mLa.X = 1;
function yCa(a, d) {
  var e = b;
  b += 15;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11;
  CW(a);
  c[a] = nLa + 2;
  c[a + 1] = 0;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  ig(j, d, a + 3);
  N(i, j, e);
  f = a + 7;
  c[f] = c[i];
  k[f] = k[i];
  c[f + 1] = c[i + 1];
  k[f + 1] = k[i + 1];
  c[f + 2] = c[i + 2];
  k[f + 2] = k[i + 2];
  c[f + 3] = c[i + 3];
  k[f + 3] = k[i + 3];
  b = e;
}
yCa.X = 1;
function oLa(a, d) {
  var e;
  e = (0 != ((((c[a + 3] << 16) >> 16) & ((c[d + 1] << 16) >> 16)) | 0)) & 1;
  e =
    (e & 1
      ? 0 != ((((c[d + 2] << 16) >> 16) & ((c[a + 2] << 16) >> 16)) | 0)
      : 0) & 1;
  return e & 1;
}
oLa.X = 1;
function Pwa(a) {
  k[a] = 5.880000114440918;
  k[a + 1] = 0.8299999833106995;
  k[a + 2] = 0.8799999952316284;
  k[a + 3] = 500;
  k[a + 4] = 10.5;
  k[a + 5] = 6e3;
}
Pwa.X = 1;
function DW(a, d, e) {
  var f = b;
  b += 4;
  k[a + 1] = k[d + 10];
  c[a + 20] = c[d];
  var g = a + 12;
  e & 1
    ? ((e = d + 2),
      (c[g] = c[e]),
      (k[g] = k[e]),
      (c[g + 1] = c[e + 1]),
      (k[g + 1] = k[e + 1]),
      (c[g + 2] = c[e + 2]),
      (k[g + 2] = k[e + 2]),
      (c[g + 3] = c[e + 3]),
      (k[g + 3] = k[e + 3]))
    : (Bo(f, c[a + 20] + 1, d + 2),
      (c[g] = c[f]),
      (k[g] = k[f]),
      (c[g + 1] = c[f + 1]),
      (k[g + 1] = k[f + 1]),
      (c[g + 2] = c[f + 2]),
      (k[g + 2] = k[f + 2]),
      (c[g + 3] = c[f + 3]),
      (k[g + 3] = k[f + 3]));
  a += 16;
  g = d + 6;
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  d = k[d + 10];
  b = f;
  return d;
}
DW.X = 1;
function Bo(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = J(0 + d, e);
  k[g] = J(4 + d, e);
  k[h] = J(8 + d, e);
  H(a, f, g, h);
  b = f;
}
Bo.X = 1;
function pLa() {}
pLa.X = 1;
function qLa(a) {
  xe(a);
}
qLa.X = 1;
function EU(a, d, e, f, g) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  d = a + 4;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  e = a + 16;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  k[a + 20] = g;
  k[a + 21] = 0;
  k[a + 22] = 0;
  c[a + 27] = 0;
  k[a + 28] = 0;
  c[a + 29] = 0;
  f = a + 30;
  c[f] = 0;
  k[f] = 0;
  c[f + 1] = 0;
  k[f + 1] = 0;
  c[f + 2] = 0;
  k[f + 2] = 0;
  c[f + 3] = 0;
  k[f + 3] = 0;
  c[f + 4] = 0;
  k[f + 4] = 0;
  c[f + 5] = 0;
  k[f + 5] = 0;
  c[f + 6] = 0;
  k[f + 6] = 0;
  k[a + 52] = 0;
  k[a + 60] = 0;
  k[a + 68] = 0;
}
EU.X = 1;
function CU(a) {
  c[a + 27] = 0;
  k[a + 28] = 0;
  c[a + 29] = 0;
  a += 30;
  c[a] = 0;
  k[a] = 0;
  c[a + 1] = 0;
  k[a + 1] = 0;
  c[a + 2] = 0;
  k[a + 2] = 0;
  c[a + 3] = 0;
  k[a + 3] = 0;
  c[a + 4] = 0;
  k[a + 4] = 0;
  c[a + 5] = 0;
  k[a + 5] = 0;
  c[a + 6] = 0;
  k[a + 6] = 0;
}
CU.X = 1;
function eP(a) {
  var d,
    a = (d = a % 6.2831854820251465);
  return (a =
    -3.1415927410125732 > d
      ? a + 6.2831854820251465
      : 3.1415927410125732 < a ? d - 6.2831854820251465 : d);
}
eP.X = 1;
function QQ(a) {
  k[a + 32] = 0xde0b6b000000000;
  c[a + 33] = 0;
}
QQ.X = 1;
function wQ(a, d, e, f, g) {
  k[a] = d;
  c[a + 1] = e;
  c[a + 18] = f;
  d = a + 19;
  c[d] = c[g];
  k[d] = k[g];
  c[d + 1] = c[g + 1];
  k[d + 1] = k[g + 1];
  c[d + 2] = c[g + 2];
  k[d + 2] = k[g + 2];
  c[d + 3] = c[g + 3];
  k[d + 3] = k[g + 3];
  k[a + 23] = 0;
  k[a + 24] = 0;
  k[a + 25] = 0.5;
  k[a + 26] = 0;
  k[a + 27] = 0.800000011920929;
  k[a + 28] = 1;
  c[a + 29] = 0;
  k[a + 30] = 0.004999999888241291;
  k[a + 31] = 0.009999999776482582;
  k[a + 32] = 0.009999999776482582;
  k[a + 33] = 0.009999999776482582;
  eQ(a + 2);
}
wQ.X = 1;
function uQ(a, d, e) {
  zb(a, d);
  a += 12;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
uQ.X = 1;
function sQ(a, d) {
  EW(a, d);
  var e = a + 12,
    f = d + 12;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
}
sQ.X = 1;
function EW(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  var e = a + 4,
    f = d + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 8;
  f = d + 8;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
}
EW.X = 1;
function ww(a, d, e) {
  var f = b;
  b += 9;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8;
  k[f] = nc(e, 0 + d);
  k[g] = xc(e, 0 + d);
  k[h] = kc(e, 0 + d);
  k[i] = nc(e, 4 + d);
  k[j] = xc(e, 4 + d);
  k[l] = kc(e, 4 + d);
  k[m] = nc(e, 8 + d);
  k[n] = xc(e, 8 + d);
  k[p] = kc(e, 8 + d);
  Db(a, f, g, h, i, j, l, m, n, p);
  b = f;
}
ww.X = 1;
function vw(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = J(0 + d, e) + k[d + 12];
  k[g] = J(4 + d, e) + k[d + 12 + 1];
  k[h] = J(8 + d, e) + k[d + 12 + 2];
  H(a, f, g, h);
  b = f;
}
vw.X = 1;
function lua(a, d) {
  k[d] = k[a];
  k[d + 1] = k[a + 4];
  k[d + 2] = k[a + 8];
  k[d + 3] = 0;
  k[d + 4] = k[a + 1];
  k[d + 5] = k[a + 4 + 1];
  k[d + 6] = k[a + 8 + 1];
  k[d + 7] = 0;
  k[d + 8] = k[a + 2];
  k[d + 9] = k[a + 4 + 2];
  k[d + 10] = k[a + 8 + 2];
  k[d + 11] = 0;
}
lua.X = 1;
function rn(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = nc(e, d);
  k[g] = xc(e, d);
  k[h] = kc(e, d);
  H(a, f, g, h);
  b = f;
}
rn.X = 1;
function Tz(a, d, e) {
  EW(a, d);
  a += 12;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
Tz.X = 1;
function WP(a, d) {
  var e = b;
  b += 3;
  var f = e + 1,
    g = e + 2;
  k[e] = -k[d];
  k[f] = -k[d + 1];
  k[g] = -k[d + 2];
  H(a, e, f, g);
  b = e;
}
WP.X = 1;
function cua(a, d) {
  pe(a, d, d + 4, d + 8);
  pe(a + 4, d + 1, d + 5, d + 9);
  pe(a + 8, d + 2, d + 6, d + 10);
}
cua.X = 1;
function fsa(a, d) {
  var e;
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  e = a + 4;
  var f = d + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 8;
  f = d + 8;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  k[a + 12] = k[d + 12];
  k[a + 13] = k[d + 13];
  k[a + 14] = k[d + 14];
  e = a + 15;
  f = d + 15;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 19;
  f = d + 19;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 23;
  f = d + 23;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = 0;
  for (var f = a + 27, g = a + 30, h = a + 34; ; ) {
    c[f + e] = c[d + (e + 27)] & 1;
    k[g + e] = k[d + 30 + e];
    k[h + e] = k[d + 34 + e];
    var i = e + 1;
    e = i;
    if (3 <= (i | 0)) {
      break;
    }
  }
}
fsa.X = 1;
function rLa() {
  return 0;
}
rLa.X = 1;
function sLa() {
  return 0;
}
sLa.X = 1;
function RB(a, d) {
  k[a] < k[d] && (k[a] = k[d]);
}
RB.X = 1;
function BB(a, d) {
  k[d] < k[a] && (k[a] = k[d]);
}
BB.X = 1;
function FW(a) {
  c[a] = tLa + 2;
}
FW.X = 1;
function gM(a) {
  c[a] = uLa + 2;
  c[a + 1] = 0;
}
gM.X = 1;
function JL(a, d) {
  k[a] *= k[d];
  var e = a + 1;
  k[e] *= k[d + 1];
  e = a + 2;
  k[e] *= k[d + 2];
  return a;
}
JL.X = 1;
function jg(a, d) {
  return (d << 2) + c[a + 3];
}
jg.X = 1;
function th(a) {
  return c[a + 1];
}
th.X = 1;
function LI(a, d) {
  return c[a + 3] + d;
}
LI.X = 1;
function vLa(a) {
  c[a] = wLa + 2;
  c[a + 1] = 1;
  c[a + 2] = -1;
}
vLa.X = 1;
function xLa(a, d) {
  var e;
  e = (0 != ((((c[a + 2] << 16) >> 16) & ((c[d + 1] << 16) >> 16)) | 0)) & 1;
  e =
    (e & 1
      ? 0 != ((((c[d + 2] << 16) >> 16) & ((c[a + 1] << 16) >> 16)) | 0)
      : 0) & 1;
  return e & 1;
}
xLa.X = 1;
function jpa(a, d, e, f) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = 0;
}
jpa.X = 1;
function GW(a) {
  c[a] = yLa + 2;
  k[a + 1] = 1;
  c[a + 2] = 0;
  c[a + 3] = 1;
  c[a + 4] = -1;
  c[a + 5] = 0;
}
GW.X = 1;
function GM(a) {
  var d = b;
  b += 18;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5,
    j = d + 6,
    l = d + 7,
    m = d + 8,
    n = d + 9,
    p = d + 10,
    r = d + 11,
    s = d + 12,
    t = d + 13,
    w = d + 14,
    x = d + 15,
    y = d + 16,
    z = d + 17;
  k[d] = 0;
  k[e] = 0;
  k[f] = 0;
  pe(a, d, e, f);
  k[g] = 0;
  k[h] = 0;
  k[i] = 0;
  pe(a + 4, g, h, i);
  k[j] = 0;
  k[l] = 0;
  k[m] = 0;
  pe(a + 8, j, l, m);
  k[n] = 0;
  k[p] = 0;
  k[r] = 0;
  pe(a + 15, n, p, r);
  k[s] = 0.20000000298023224;
  k[t] = 0.20000000298023224;
  k[w] = 0.20000000298023224;
  pe(a + 19, s, t, w);
  k[x] = 0;
  k[y] = 0;
  k[z] = 0;
  pe(a + 23, x, y, z);
  k[a + 12] = 0.699999988079071;
  k[a + 13] = 1;
  k[a + 14] = 0.5;
  e = 0;
  f = a + 27;
  g = a + 30;
  for (
    a += 34;
    !((c[f + e] = 0),
    (k[g + e] = 0),
    (k[a + e] = 0),
    (e = h = e + 1),
    3 <= (h | 0));

  ) {}
  b = d;
}
GM.X = 1;
function zLa() {}
zLa.X = 1;
function ALa(a) {
  xe(a);
}
ALa.X = 1;
function wn(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d] + k[e];
  k[g] = k[d + 1] + k[e + 1];
  k[h] = k[d + 2] + k[e + 2];
  H(a, f, g, h);
  b = f;
}
wn.X = 1;
function GL(a, d, e, f, g, h, i, j, l, m) {
  var n = b;
  b += 28;
  var p = n + 4,
    r = n + 8,
    s = n + 12,
    t = n + 16,
    w = n + 20,
    x = n + 24;
  c[a] = c[h];
  k[a] = k[h];
  c[a + 1] = c[h + 1];
  k[a + 1] = k[h + 1];
  c[a + 2] = c[h + 2];
  k[a + 2] = k[h + 2];
  c[a + 3] = c[h + 3];
  k[a + 3] = k[h + 3];
  qn(p, f, a);
  Bo(n, d, p);
  d = a + 4;
  c[d] = c[n];
  k[d] = k[n];
  c[d + 1] = c[n + 1];
  k[d + 1] = k[n + 1];
  c[d + 2] = c[n + 2];
  k[d + 2] = k[n + 2];
  c[d + 3] = c[n + 3];
  k[d + 3] = k[n + 3];
  WP(t, a);
  qn(s, g, t);
  Bo(r, e, s);
  e = a + 8;
  c[e] = c[r];
  k[e] = k[r];
  c[e + 1] = c[r + 1];
  k[e + 1] = k[r + 1];
  c[e + 2] = c[r + 2];
  k[e + 2] = k[r + 2];
  c[e + 3] = c[r + 3];
  k[e + 3] = k[r + 3];
  ig(w, i, a + 4);
  i = a + 12;
  c[i] = c[w];
  k[i] = k[w];
  c[i + 1] = c[w + 1];
  k[i + 1] = k[w + 1];
  c[i + 2] = c[w + 2];
  k[i + 2] = k[w + 2];
  c[i + 3] = c[w + 3];
  k[i + 3] = k[w + 3];
  ig(x, l, a + 8);
  l = a + 16;
  c[l] = c[x];
  k[l] = k[x];
  c[l + 1] = c[x + 1];
  k[l + 1] = k[x + 1];
  c[l + 2] = c[x + 2];
  k[l + 2] = k[x + 2];
  c[l + 3] = c[x + 3];
  k[l + 3] = k[x + 3];
  k[a + 20] = j + J(a + 12, a + 4) + m + J(a + 16, a + 8);
  b = n;
}
GL.X = 1;
function yra(a, d, e, f, g, h, i) {
  var j = b;
  b += 31;
  var l = j + 4,
    m = j + 8,
    n = j + 12,
    p = j + 16,
    r = j + 20,
    s = j + 24,
    t = j + 28,
    w = j + 29,
    x = j + 30;
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  qn(l, e, g);
  Bo(j, d, l);
  e = a + 4;
  c[e] = c[j];
  k[e] = k[j];
  c[e + 1] = c[j + 1];
  k[e + 1] = k[j + 1];
  c[e + 2] = c[j + 2];
  k[e + 2] = k[j + 2];
  c[e + 3] = c[j + 3];
  k[e + 3] = k[j + 3];
  WP(p, g);
  qn(n, f, p);
  Bo(m, d, n);
  d = a + 8;
  c[d] = c[m];
  k[d] = k[m];
  c[d + 1] = c[m + 1];
  k[d + 1] = k[m + 1];
  c[d + 2] = c[m + 2];
  k[d + 2] = k[m + 2];
  c[d + 3] = c[m + 3];
  k[d + 3] = k[m + 3];
  ig(r, h, a + 4);
  h = a + 12;
  c[h] = c[r];
  k[h] = k[r];
  c[h + 1] = c[r + 1];
  k[h + 1] = k[r + 1];
  c[h + 2] = c[r + 2];
  k[h + 2] = k[r + 2];
  c[h + 3] = c[r + 3];
  k[h + 3] = k[r + 3];
  k[t] = 0;
  k[w] = 0;
  k[x] = 0;
  H(s, t, w, x);
  r = a + 16;
  c[r] = c[s];
  k[r] = k[s];
  c[r + 1] = c[s + 1];
  k[r + 1] = k[s + 1];
  c[r + 2] = c[s + 2];
  k[r + 2] = k[s + 2];
  c[r + 3] = c[s + 3];
  k[r + 3] = k[s + 3];
  k[a + 20] = i + J(a + 12, a + 4);
  b = j;
}
yra.X = 1;
function DL(a, d, e, f, g, h) {
  var i = b;
  b += 23;
  var j = i + 1,
    l = i + 2,
    m = i + 3,
    n = i + 7,
    p = i + 11,
    r = i + 15,
    s = i + 19;
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(a, i, j, l);
  Bo(m, e, d);
  e = a + 4;
  c[e] = c[m];
  k[e] = k[m];
  c[e + 1] = c[m + 1];
  k[e + 1] = k[m + 1];
  c[e + 2] = c[m + 2];
  k[e + 2] = k[m + 2];
  c[e + 3] = c[m + 3];
  k[e + 3] = k[m + 3];
  WP(p, d);
  Bo(n, f, p);
  d = a + 8;
  c[d] = c[n];
  k[d] = k[n];
  c[d + 1] = c[n + 1];
  k[d + 1] = k[n + 1];
  c[d + 2] = c[n + 2];
  k[d + 2] = k[n + 2];
  c[d + 3] = c[n + 3];
  k[d + 3] = k[n + 3];
  ig(r, g, a + 4);
  g = a + 12;
  c[g] = c[r];
  k[g] = k[r];
  c[g + 1] = c[r + 1];
  k[g + 1] = k[r + 1];
  c[g + 2] = c[r + 2];
  k[g + 2] = k[r + 2];
  c[g + 3] = c[r + 3];
  k[g + 3] = k[r + 3];
  ig(s, h, a + 8);
  h = a + 16;
  c[h] = c[s];
  k[h] = k[s];
  c[h + 1] = c[s + 1];
  k[h + 1] = k[s + 1];
  c[h + 2] = c[s + 2];
  k[h + 2] = k[s + 2];
  c[h + 3] = c[s + 3];
  k[h + 3] = k[s + 3];
  k[a + 20] = J(a + 12, a + 4) + J(a + 16, a + 8);
  b = i;
}
DL.X = 1;
function xra(a, d, e, f, g) {
  var h = b;
  b += 11;
  var i = h + 1,
    j = h + 2,
    l = h + 3,
    m = h + 7;
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(a, h, i, j);
  i = a + 4;
  c[i] = c[d];
  k[i] = k[d];
  c[i + 1] = c[d + 1];
  k[i + 1] = k[d + 1];
  c[i + 2] = c[d + 2];
  k[i + 2] = k[d + 2];
  c[i + 3] = c[d + 3];
  k[i + 3] = k[d + 3];
  WP(a + 8, e);
  ig(l, f, a + 4);
  d = a + 12;
  c[d] = c[l];
  k[d] = k[l];
  c[d + 1] = c[l + 1];
  k[d + 1] = k[l + 1];
  c[d + 2] = c[l + 2];
  k[d + 2] = k[l + 2];
  c[d + 3] = c[l + 3];
  k[d + 3] = k[l + 3];
  ig(m, g, a + 8);
  g = a + 16;
  c[g] = c[m];
  k[g] = k[m];
  c[g + 1] = c[m + 1];
  k[g + 1] = k[m + 1];
  c[g + 2] = c[m + 2];
  k[g + 2] = k[m + 2];
  c[g + 3] = c[m + 3];
  k[g + 3] = k[m + 3];
  k[a + 20] = J(a + 12, a + 4) + J(a + 16, a + 8);
  b = h;
}
xra.X = 1;
function yI(a) {
  FW(a);
  c[a] = HW + 2;
  a += 36;
  c[a] = -1;
  k[a] = -1;
  c[a + 1] = -1;
  k[a + 1] = -1;
  c[a + 2] = -1;
  k[a + 2] = -1;
  c[a + 3] = -1;
  k[a + 3] = -1;
}
yI.X = 1;
function BLa() {}
BLa.X = 1;
function CLa(a) {
  xe(a);
}
CLa.X = 1;
function Tpa(a) {
  vLa(a);
  c[a] = DLa + 2;
}
Tpa.X = 1;
function ELa() {}
ELa.X = 1;
function FLa(a) {
  xe(a);
}
FLa.X = 1;
function GLa() {}
GLa.X = 1;
function HLa(a) {
  xe(a);
}
HLa.X = 1;
function PH(a, d, e, f, g, h) {
  hV(a, d, e, f, g, h, 0);
  c[a + 15] = 0;
  c[a + 14] = 0;
}
PH.X = 1;
function wG(a) {
  k[a + 8] = -1;
}
wG.X = 1;
function Doa(a, d, e) {
  GW(a);
  c[a] = IW + 2;
  JW(a + 6);
  var f = a + 11;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  d = a + 15;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  KW(a + 19);
  KW(a + 24);
  LW(a + 29);
}
Doa.X = 1;
function ILa(a) {
  JLa(a);
}
ILa.X = 1;
function KLa(a) {
  JLa(a);
  xe(a);
}
KLa.X = 1;
function LLa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
LLa.X = 1;
function MLa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
MLa.X = 1;
function NLa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
NLa.X = 1;
function OLa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
OLa.X = 1;
function PLa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
PLa.X = 1;
function QLa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
QLa.X = 1;
function RLa(a, d) {
  var e;
  e = (0 != ((((c[a + 4] << 16) >> 16) & ((c[d + 1] << 16) >> 16)) | 0)) & 1;
  e =
    (e & 1
      ? 0 != ((((c[d + 2] << 16) >> 16) & ((c[a + 3] << 16) >> 16)) | 0)
      : 0) & 1;
  return e & 1;
}
RLa.X = 1;
function MW(a) {
  return c[a + 1];
}
MW.X = 1;
function SLa(a) {
  return c[a + 2];
}
SLa.X = 1;
function TLa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (k[i] = k[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
TLa.X = 1;
function NW(a) {
  return c[a + 2];
}
NW.X = 1;
function Tl(a) {
  return c[a + 1];
}
Tl.X = 1;
function ULa(a) {
  return c[a + 2];
}
ULa.X = 1;
function VLa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
VLa.X = 1;
function WLa(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 8,
    e = e & 1;
  c[a + 2] = c[d];
  OW(a + 6, d);
  e & 1 ? (g = d + 2) : Bo(g, c[a + 2] + 1, d + 2);
  c[f] = c[g];
  k[f] = k[g];
  c[f + 1] = c[g + 1];
  k[f + 1] = k[g + 1];
  c[f + 2] = c[g + 2];
  k[f + 2] = k[g + 2];
  c[f + 3] = c[g + 3];
  k[f + 3] = k[g + 3];
  PW(a + 19, f);
  yB(h, a + 11, a + 15, k[d + 6]);
  PW(a + 24, h);
  QW(a + 29, d + 6);
  a = k[a + 1];
  b = f;
  return a;
}
WLa.X = 1;
function OW(a, d) {
  (Tl(a) | 0) == (ULa(a) | 0) && XLa(a, PLa(a, Tl(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
OW.X = 1;
function PW(a, d) {
  (th(a) | 0) == (NW(a) | 0) && RW(a, NLa(a, th(a)));
  var e = (c[a + 1] << 2) + c[a + 3];
  0 != (e | 0) &&
    ((c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]),
    (c[e + 2] = c[d + 2]),
    (k[e + 2] = k[d + 2]),
    (c[e + 3] = c[d + 3]),
    (k[e + 3] = k[d + 3]));
  e = a + 1;
  c[e] += 1;
}
PW.X = 1;
function QW(a, d) {
  (MW(a) | 0) == (SLa(a) | 0) && YLa(a, LLa(a, MW(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (k[e] = k[d]);
  e = a + 1;
  c[e] += 1;
}
QW.X = 1;
function YLa(a, d) {
  var e;
  (SLa(a) | 0) < (d | 0) &&
    ((e = ZLa(a, d)),
    TLa(a, 0, MW(a), e),
    MLa(a, 0, MW(a)),
    $La(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
YLa.X = 1;
function ZLa(a, d) {
  return 0 != (d | 0) ? aMa(a, d, 0) : 0;
}
ZLa.X = 1;
function $La(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && bMa(a, c[a + 3]), (c[a + 3] = 0));
}
$La.X = 1;
function bMa(a, d) {
  $1 = a;
  yh(d);
}
bMa.X = 1;
function aMa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
aMa.X = 1;
function RW(a, d) {
  var e;
  (NW(a) | 0) < (d | 0) &&
    ((e = cMa(a, d)),
    dMa(a, 0, th(a), e),
    OLa(a, 0, th(a)),
    eMa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
RW.X = 1;
function cMa(a, d) {
  return 0 != (d | 0) ? fMa(a, d, 0) : 0;
}
cMa.X = 1;
function dMa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 2) + f;
        if (0 != (i | 0)) {
          var j = (d << 2) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
          c[i + 2] = c[j + 2];
          k[i + 2] = k[j + 2];
          c[i + 3] = c[j + 3];
          k[i + 3] = k[j + 3];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
dMa.X = 1;
function eMa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && gMa(a, c[a + 3]), (c[a + 3] = 0));
}
eMa.X = 1;
function gMa(a, d) {
  $1 = a;
  yh(d);
}
gMa.X = 1;
function fMa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 4, 16);
}
fMa.X = 1;
function XLa(a, d) {
  var e;
  (ULa(a) | 0) < (d | 0) &&
    ((e = hMa(a, d)),
    VLa(a, 0, Tl(a), e),
    QLa(a, 0, Tl(a)),
    iMa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
XLa.X = 1;
function hMa(a, d) {
  return 0 != (d | 0) ? jMa(a, d, 0) : 0;
}
hMa.X = 1;
function iMa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && kMa(a, c[a + 3]), (c[a + 3] = 0));
}
iMa.X = 1;
function kMa(a, d) {
  $1 = a;
  yh(d);
}
kMa.X = 1;
function jMa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
jMa.X = 1;
function lMa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
lMa.X = 1;
function mMa(a) {
  c[a] = nMa + 2;
}
mMa.X = 1;
function LW(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
LW.X = 1;
function JW(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
JW.X = 1;
function KW(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
KW.X = 1;
function BE(a) {
  return c[a + 1];
}
BE.X = 1;
function cE(a) {
  k[a + 1] = 6.2831854820251465;
  k[a + 2] = 6.2831854820251465;
  k[a + 3] = 6.2831854820251465;
  c[a] = 0;
}
cE.X = 1;
function H(a, d, e, f) {
  k[a] = k[d];
  k[a + 1] = k[e];
  k[a + 2] = k[f];
  k[a + 3] = 0;
}
H.X = 1;
function Ez(a, d, e) {
  (c[d + 4] | 0) < (c[e + 4] | 0)
    ? ((c[a] = d), (c[a + 1] = e))
    : ((c[a] = e), (c[a + 1] = d));
  c[a + 2] = 0;
  c[a + 3] = 0;
}
Ez.X = 1;
function Cz(a, d) {
  c[a] = c[d];
  c[a + 1] = c[d + 1];
  c[a + 2] = c[d + 2];
  c[a + 3] = c[d + 3];
}
Cz.X = 1;
function By(a, d) {
  return (d << 3) + c[a + 3];
}
By.X = 1;
function oMa(a) {
  return c[a + 2];
}
oMa.X = 1;
function SW(a) {
  MLa(a, 0, MW(a));
  $La(a);
  LW(a);
}
SW.X = 1;
function TW(a) {
  QLa(a, 0, Tl(a));
  iMa(a);
  JW(a);
}
TW.X = 1;
function UW(a) {
  OLa(a, 0, th(a));
  eMa(a);
  KW(a);
}
UW.X = 1;
function pMa() {}
pMa.X = 1;
function qMa(a) {
  xe(a);
}
qMa.X = 1;
function pE(a, d, e, f, g) {
  c[a] = d;
  c[a + 1] = e;
  d = a + 2;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  k[a + 6] = g;
}
pE.X = 1;
function kE(a, d, e) {
  GW(a);
  c[a] = rMa + 2;
  var f = a + 6;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  a += 10;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
kE.X = 1;
function sMa() {}
sMa.X = 1;
function tMa(a) {
  xe(a);
}
tMa.X = 1;
function uMa(a, d, e) {
  var f = b;
  b += 4;
  k[a + 1] = k[d + 6];
  c[a + 2] = c[d];
  var g = a + 14;
  e & 1
    ? ((e = d + 2),
      (c[g] = c[e]),
      (k[g] = k[e]),
      (c[g + 1] = c[e + 1]),
      (k[g + 1] = k[e + 1]),
      (c[g + 2] = c[e + 2]),
      (k[g + 2] = k[e + 2]),
      (c[g + 3] = c[e + 3]),
      (k[g + 3] = k[e + 3]))
    : (Bo(f, c[a + 2] + 1, d + 2),
      (c[g] = c[f]),
      (k[g] = k[f]),
      (c[g + 1] = c[f + 1]),
      (k[g + 1] = k[f + 1]),
      (c[g + 2] = c[f + 2]),
      (k[g + 2] = k[f + 2]),
      (c[g + 3] = c[f + 3]),
      (k[g + 3] = k[f + 3]));
  yB(a + 18, a + 6, a + 10, k[d + 6]);
  a = k[d + 6];
  b = f;
  return a;
}
uMa.X = 1;
function jC(a, d, e, f, g) {
  H(a, d, e, f);
  k[a + 3] = k[g];
}
jC.X = 1;
function VW(a) {
  return sc(a);
}
VW.X = 1;
function sB(a, d) {
  k[a + 51] = k[d + 12];
  k[a + 52] = k[d + 13];
  k[a + 53] = k[d + 14];
  k[a + 54] = k[d + 15];
  k[a + 55] = k[d + 16];
  k[a + 56] = k[d + 17];
  var e = a + 39;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  var e = a + 43,
    f = d + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 47;
  f = d + 8;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  k[a + 57] = k[d + 18];
  k[a + 58] = 0;
  k[a + 63] = 0;
  k[a + 59] = 0;
  k[a + 60] = 0;
  k[a + 64] = 0;
  k[a + 61] = 0.10000000149011612;
  c[a + 65] = c[d + 20] & 1;
  k[a + 62] = k[d + 19];
}
sB.X = 1;
function Qz(a, d, e) {
  mMa(a);
  c[a] = vMa + 2;
  sQ(a + 1, d);
  sQ(a + 17, e);
  sQ(a + 33, d);
  c[a + 49] = 0;
}
Qz.X = 1;
function wMa() {}
wMa.X = 1;
function xMa(a) {
  xe(a);
}
xMa.X = 1;
function yMa(a, d) {
  var e = b;
  b += 32;
  var f = e + 16;
  uw(f, a + 17);
  WW(e, f, a + 1);
  xi(d, e);
  b = e;
}
yMa.X = 1;
function zMa(a, d) {
  var e = b;
  b += 16;
  WW(e, d, a + 17);
  xi(a + 1, e);
  b = e;
}
zMa.X = 1;
function WW(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 12;
  ww(f, d, e);
  vw(g, d, e + 12);
  Tz(a, f, g);
  b = f;
}
WW.X = 1;
function AMa() {}
AMa.X = 1;
function BMa(a) {
  xe(a);
}
BMa.X = 1;
function Az(a) {
  c[a] = 0;
  k[a] = 0;
  c[a + 1] = 0;
  k[a + 1] = 0;
  c[a + 2] = 0;
  k[a + 2] = 0;
  c[a + 3] = 0;
  k[a + 3] = 0;
}
Az.X = 1;
function Ay(a, d) {
  (Cy(a) | 0) == (oMa(a) | 0) && CMa(a, lMa(a, Cy(a)));
  var e = (c[a + 1] << 3) + c[a + 3];
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  c[e + 4] = c[d + 4];
  k[e + 4] = k[d + 4];
  c[e + 5] = c[d + 5];
  k[e + 5] = k[d + 5];
  c[e + 6] = c[d + 6];
  k[e + 6] = k[d + 6];
  c[e + 7] = c[d + 7];
  k[e + 7] = k[d + 7];
  e = a + 1;
  c[e] += 1;
}
Ay.X = 1;
function CMa(a, d) {
  var e;
  (oMa(a) | 0) < (d | 0) &&
    ((e = DMa(a, d)),
    EMa(a, 0, Cy(a), e),
    aLa(a, 0, Cy(a)),
    gLa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
CMa.X = 1;
function DMa(a, d) {
  return 0 != (d | 0) ? FMa(a, d, 0) : 0;
}
DMa.X = 1;
function JLa(a) {
  c[a] = IW + 2;
  SW(a + 29);
  UW(a + 24);
  UW(a + 19);
  TW(a + 6);
}
JLa.X = 1;
function GMa(a) {
  c[a] = HMa + 2;
}
GMa.X = 1;
function Rka(a, d) {
  k[a + 2] = k[d + 2];
  k[a + 3] = k[d + 3];
  k[a + 6] = k[d + 6];
  k[a] = k[d];
  k[a + 1] = k[d + 1];
  k[a + 7] = k[d + 7];
  k[a + 8] = k[d + 8];
  k[a + 9] = k[d + 9];
  k[a + 10] = k[d + 10];
  c[a + 14] = c[d + 14];
  k[a + 12] = k[d + 12];
  c[a + 11] = c[d + 11] & 1;
}
Rka.X = 1;
function ax(a) {
  k[a + 15] = 0;
  k[a + 2] = 0;
  k[a + 3] = 0.10000000149011612;
  k[a + 4] = 300;
  k[a] = 1;
  k[a + 1] = -1;
  k[a + 7] = 0;
  k[a + 8] = 0.20000000298023224;
  k[a + 9] = 0;
  k[a + 10] = 0;
  k[a + 5] = 1;
  k[a + 6] = 0.5;
  c[a + 14] = 0;
  k[a + 12] = 0;
  c[a + 11] = 0;
}
ax.X = 1;
function ct(a) {
  c[a] = 0;
  c[a + 1] = 0;
}
ct.X = 1;
function Qo(a) {
  return c[a + 1];
}
Qo.X = 1;
function vo(a, d) {
  return c[a + 3] + d;
}
vo.X = 1;
function tfa(a) {
  return c[a + 47];
}
tfa.X = 1;
function Rm(a) {
  k[a] = 0.6000000238418579;
  k[a + 1] = 1;
  k[a + 2] = 0.30000001192092896;
  k[a + 4] = 0;
  k[a + 6] = 20;
  c[a + 5] = 10;
  k[a + 8] = 0.20000000298023224;
  k[a + 9] = 0.10000000149011612;
  k[a + 10] = 0;
  k[a + 7] = 1;
  c[a + 11] = 0;
  k[a + 12] = -0.019999999552965164;
  k[a + 13] = 0;
  k[a + 14] = 0.8500000238418579;
  c[a + 15] = 260;
  c[a + 16] = 2;
  c[a + 17] = 128;
}
Rm.X = 1;
function Jm(a) {
  k[a] = 0.30000001192092896;
  k[a + 1] = 1;
  k[a + 2] = 0;
}
Jm.X = 1;
function fl(a) {
  return c[a + 1];
}
fl.X = 1;
function Zk(a, d) {
  return c[a + 3] + 20 * d;
}
Zk.X = 1;
function EMa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 3) + f,
          j = (d << 3) + c[h];
        c[i] = c[j];
        k[i] = k[j];
        c[i + 1] = c[j + 1];
        k[i + 1] = k[j + 1];
        c[i + 2] = c[j + 2];
        k[i + 2] = k[j + 2];
        c[i + 3] = c[j + 3];
        k[i + 3] = k[j + 3];
        c[i + 4] = c[j + 4];
        k[i + 4] = k[j + 4];
        c[i + 5] = c[j + 5];
        k[i + 5] = k[j + 5];
        c[i + 6] = c[j + 6];
        k[i + 6] = k[j + 6];
        c[i + 7] = c[j + 7];
        k[i + 7] = k[j + 7];
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
EMa.X = 1;
function FMa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 5, 16);
}
FMa.X = 1;
function rw(a, d, e) {
  var f, g;
  0.7071067690849304 < sc(k[a + 2])
    ? ((f = k[a + 1] * k[a + 1] + k[a + 2] * k[a + 2]),
      (g = 1 / ec(f)),
      (k[d] = 0),
      (k[d + 1] = -k[a + 2] * g),
      (k[d + 2] = k[a + 1] * g),
      (k[e] = f * g),
      (k[e + 1] = -k[a] * k[d + 2]),
      (k[e + 2] = k[a] * k[d + 1]))
    : ((f = k[a] * k[a] + k[a + 1] * k[a + 1]),
      (g = 1 / ec(f)),
      (k[d] = -k[a + 1] * g),
      (k[d + 1] = k[a] * g),
      (k[d + 2] = 0),
      (k[e] = -k[a + 2] * k[d + 1]),
      (k[e + 1] = k[a + 2] * k[d]),
      (k[e + 2] = f * g));
}
rw.X = 1;
function sw(a, d, e) {
  var f = b;
  b += 17;
  var g = f + 4,
    h = f + 8,
    i = f + 12,
    j = f + 13,
    l = f + 14,
    m = f + 15,
    n = f + 16;
  qn(f, d, e);
  e = J(d, e);
  -0.9999998807907104 > e
    ? (rw(d, g, h), (k[i] = 0), NG(a, g, g + 1, g + 2, i))
    : ((d = ec(2 * (e + 1))),
      (g = 1 / d),
      (k[j] = k[f] * g),
      (k[l] = k[f + 1] * g),
      (k[m] = k[f + 2] * g),
      (k[n] = 0.5 * d),
      NG(a, j, l, m, n));
  b = f;
}
sw.X = 1;
function tw(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4;
  IMa(f, d, e);
  EV(g, d);
  JMa(f, g);
  H(a, f, f + 1, f + 2);
  b = f;
}
tw.X = 1;
function IMa(a, d, e) {
  var f = b;
  b += 4;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] = k[d + 3] * k[e] + k[d + 1] * k[e + 2] - k[d + 2] * k[e + 1];
  k[g] = k[d + 3] * k[e + 1] + k[d + 2] * k[e] - k[d] * k[e + 2];
  k[h] = k[d + 3] * k[e + 2] + k[d] * k[e + 1] - k[d + 1] * k[e];
  k[i] = -k[d] * k[e] - k[d + 1] * k[e + 1] - k[d + 2] * k[e + 2];
  NG(a, f, g, h, i);
  b = f;
}
IMa.X = 1;
function JMa(a, d) {
  var e = b;
  b += 4;
  var f = e + 1,
    g = e + 2,
    h = e + 3;
  k[e] =
    k[a + 3] * k[d] +
    k[a] * k[d + 3] +
    k[a + 1] * k[d + 2] -
    k[a + 2] * k[d + 1];
  k[f] =
    k[a + 3] * k[d + 1] +
    k[a + 1] * k[d + 3] +
    k[a + 2] * k[d] -
    k[a] * k[d + 2];
  k[g] =
    k[a + 3] * k[d + 2] +
    k[a + 2] * k[d + 3] +
    k[a] * k[d + 1] -
    k[a + 1] * k[d];
  k[h] =
    k[a + 3] * k[d + 3] -
    k[a] * k[d] -
    k[a + 1] * k[d + 1] -
    k[a + 2] * k[d + 2];
  jc(a, e, f, g, h);
  b = e;
  return a;
}
JMa.X = 1;
function Om(a, d) {
  KMa(a);
  Mm(a, d);
}
Om.X = 1;
function KMa(a) {
  c[a] = 0;
  k[a] = 0;
  c[a + 1] = 0;
  k[a + 1] = 0;
  c[a + 2] = 0;
  k[a + 2] = 0;
  c[a + 3] = 0;
  k[a + 3] = 0;
  c[a + 4] = 0;
  k[a + 4] = 0;
}
KMa.X = 1;
function oea(a, d) {
  GMa(a);
  c[a] = LMa + 2;
  c[a + 1] = d;
}
oea.X = 1;
function MMa() {}
MMa.X = 1;
function NMa(a) {
  xe(a);
}
NMa.X = 1;
function XW(a) {
  c[a] = OMa + 2;
}
XW.X = 1;
function Hj(a) {
  c[a] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
  c[a + 3] = 4096;
  c[a + 4] = 4096;
  c[a + 5] = 0;
  c[a + 6] = 0;
  c[a + 7] = 1;
}
Hj.X = 1;
function sj(a) {
  k[a] = 0;
  k[a + 1] = -1;
  k[a + 2] = 0.8999999761581421;
  k[a + 3] = 0.30000001192092896;
  k[a + 4] = 1;
  k[a + 5] = 0;
  k[a + 6] = 0;
  c[a + 7] = 0;
}
sj.X = 1;
function Ah(a) {
  c[a + 6] = 2;
  c[a + 7] = 0;
}
Ah.X = 1;
function xg(a, d) {
  return (d << 2) + c[a + 3];
}
xg.X = 1;
function De(a) {
  k[a] = 0;
  c[a + 1] = 0;
  c[a + 2] = 1;
  k[a + 3] = 1;
  c[a + 4] = 1;
  c[a + 5] = 0;
  c[a + 6] = 0;
  c[a + 7] = 1;
  c[a + 8] = 1;
  k[a + 9] = 0.03999999910593033;
  c[a + 10] = 0;
  k[a + 11] = 0;
  c[a + 12] = 0;
}
De.X = 1;
function yk(a, d, e, f, g, h) {
  $5 = f;
  c[a] = 1025;
  f = a + 1;
  CU(f);
  f += 69;
  CU(f);
  f += 69;
  CU(f);
  CU(f + 69);
  c[a + 277] = d;
  c[a + 278] = e;
  c[a + 279] = 0;
  k[a + 280] = g;
  k[a + 281] = h;
}
yk.X = 1;
function hda(a, d) {
  PMa(a, d);
  c[a] = YW + 2;
}
hda.X = 1;
function lh(a) {
  return jg(a + 23, 0);
}
lh.X = 1;
function fh(a, d, e, f, g, h) {
  var i = b;
  b += 54;
  var j = i + 1,
    l = i + 5,
    m = i + 6,
    n = i + 10,
    p = i + 14,
    r = i + 18,
    s = i + 19,
    t = i + 23,
    w = i + 35,
    x = i + 39,
    y = i + 43,
    z = i + 44,
    A = i + 45,
    C = i + 46,
    B = i + 50;
  k[i] = e;
  k[l] = 0.5;
  N(m, d, a);
  Q(j, m, l);
  H(n, i, i, i);
  xn(j, n);
  k[r] = 0.5;
  wn(s, d, a);
  Q(p, s, r);
  qc(t, f);
  vw(w, f, p);
  k[y] = J(0 + t, j);
  k[z] = J(4 + t, j);
  k[A] = J(8 + t, j);
  H(x, y, z, A);
  N(C, w, x);
  c[g] = c[C];
  k[g] = k[C];
  c[g + 1] = c[C + 1];
  k[g + 1] = k[C + 1];
  c[g + 2] = c[C + 2];
  k[g + 2] = k[C + 2];
  c[g + 3] = c[C + 3];
  k[g + 3] = k[C + 3];
  wn(B, w, x);
  c[h] = c[B];
  k[h] = k[B];
  c[h + 1] = c[B + 1];
  k[h + 1] = k[B + 1];
  c[h + 2] = c[B + 2];
  k[h + 2] = k[B + 2];
  c[h + 3] = c[B + 3];
  k[h + 3] = k[B + 3];
  b = i;
}
fh.X = 1;
function je(a, d) {
  return ee(a, d);
}
je.X = 1;
function ie(a) {
  var d = a;
  -1 > d ? (a = -1) : 1 < d && (a = 1);
  return QMa(a);
}
ie.X = 1;
function RMa(a, d, e, f) {
  XW(a);
  c[a] = SMa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  k[a + 3] = f;
}
RMa.X = 1;
function TMa(a, d, e, f, g) {
  var h = b;
  b += 54;
  var i = h + 4,
    j = h + 8,
    l = h + 9,
    m = h + 10,
    n = h + 26,
    p = h + 30,
    r = h + 34,
    s = h + 38,
    t = h + 42,
    w = h + 46,
    x = h + 50;
  $4 = f;
  g &= 1;
  f = d + 16;
  k[j] = 1;
  k[l] = 0;
  $P(m, f, d);
  UMa(a, m + 12, h, i, l, j, k[a + 3]) &&
    (g & 1
      ? (Bo(n, f, i),
        WP(p, n),
        vw(s, f, h),
        Q(t, n, l),
        wn(r, s, t),
        v[c[c[e] + 4]](e, p, r, k[l]))
      : ((a = c[c[e] + 4]), Bo(w, f, i), vw(x, f, h), v[a](e, w, x, k[l])));
  b = h;
}
TMa.X = 1;
function UMa(a, d, e, f, g, h, i) {
  var j = b;
  b += 46;
  var l,
    m,
    n = j + 4,
    p = j + 8,
    r = j + 12,
    s = j + 16,
    t = j + 17,
    w = j + 18,
    x = j + 22,
    y = j + 26,
    z = j + 30,
    A = j + 34,
    C = j + 38,
    B = j + 42;
  $7 = h;
  m = VMa(c[a + 2], 0);
  h = dW(c[a + 1]);
  i = h + i;
  N(n, m + 4, m);
  N(p, m + 8, m);
  qn(j, n, p);
  IB(j);
  N(r, d, m);
  k[s] = J(r, j);
  0 > k[s] && ((k[s] *= -1), (k[t] = -1), LC(j, t));
  p = (k[s] < i) & 1;
  n = 0;
  p &= 1;
  a: do {
    if (p) {
      if (WMa(a, d, m, j)) {
        (n = 1),
          Q(y, j, s),
          N(x, d, y),
          (r = w),
          (t = x),
          (c[r] = c[t]),
          (k[r] = k[t]),
          (c[r + 1] = c[t + 1]),
          (k[r + 1] = k[t + 1]),
          (c[r + 2] = c[t + 2]),
          (k[r + 2] = k[t + 2]),
          (c[r + 3] = c[t + 3]),
          (k[r + 3] = k[t + 3]);
      } else {
        var r = i * i,
          t = 0,
          K = a + 2,
          E = c[K];
        if ((t | 0) < (v[c[c[E] + 23]](E) | 0)) {
          for (var E = a + 2, G = w, M = z; ; ) {
            var L = c[E];
            v[c[c[L] + 24]](L, t, A, C);
            XMa(A, C, d, z) < r &&
              ((n = 1),
              (c[G] = c[M]),
              (k[G] = k[M]),
              (c[G + 1] = c[M + 1]),
              (k[G + 1] = k[M + 1]),
              (c[G + 2] = c[M + 2]),
              (k[G + 2] = k[M + 2]),
              (c[G + 3] = c[M + 3]),
              (k[G + 3] = k[M + 3]));
            t += 1;
            L = c[K];
            if ((t | 0) >= (v[c[c[L] + 23]](L) | 0)) {
              break a;
            }
          }
        }
      }
    }
  } while (0);
  n & 1
    ? (N(B, d, w),
      (a = Um(B)),
      a < i * i
        ? (1.1920928955078125e-7 < a
            ? ((l = ec(a)),
              (c[f] = c[B]),
              (k[f] = k[B]),
              (c[f + 1] = c[B + 1]),
              (k[f + 1] = k[B + 1]),
              (c[f + 2] = c[B + 2]),
              (k[f + 2] = k[B + 2]),
              (c[f + 3] = c[B + 3]),
              (k[f + 3] = k[B + 3]),
              IB(f),
              (c[e] = c[w]),
              (k[e] = k[w]),
              (c[e + 1] = c[w + 1]),
              (k[e + 1] = k[w + 1]),
              (c[e + 2] = c[w + 2]),
              (k[e + 2] = k[w + 2]),
              (c[e + 3] = c[w + 3]),
              (k[e + 3] = k[w + 3]),
              (k[g] = -(h - l)))
            : (($distance2 = 0),
              (c[f] = c[j]),
              (k[f] = k[j]),
              (c[f + 1] = c[j + 1]),
              (k[f + 1] = k[j + 1]),
              (c[f + 2] = c[j + 2]),
              (k[f + 2] = k[j + 2]),
              (c[f + 3] = c[j + 3]),
              (k[f + 3] = k[j + 3]),
              (c[e] = c[w]),
              (k[e] = k[w]),
              (c[e + 1] = c[w + 1]),
              (k[e + 1] = k[w + 1]),
              (c[e + 2] = c[w + 2]),
              (k[e + 2] = k[w + 2]),
              (c[e + 3] = c[w + 3]),
              (k[e + 3] = k[w + 3]),
              (k[g] = -h)),
          (l = 1),
          (e = 19))
        : (e = 18))
    : (e = 18);
  18 == e && (l = 0);
  b = j;
  return l;
}
UMa.X = 1;
function XMa(a, d, e, f) {
  var g = b;
  b += 21;
  var h = g + 4,
    i = g + 8,
    j = g + 9,
    l = g + 13,
    m = g + 17;
  N(g, e, a);
  N(h, d, a);
  k[i] = J(h, g);
  0 < k[i]
    ? ((d = J(h, h)),
      k[i] < d ? ((k[i] /= d), Q(j, h, i), JC(g, j)) : ((k[i] = 1), JC(g, h)))
    : (k[i] = 0);
  Q(m, h, i);
  wn(l, a, m);
  c[f] = c[l];
  k[f] = k[l];
  c[f + 1] = c[l + 1];
  k[f + 1] = k[l + 1];
  c[f + 2] = c[l + 2];
  k[f + 2] = k[l + 2];
  c[f + 3] = c[l + 3];
  k[f + 3] = k[l + 3];
  a = J(g, g);
  b = g;
  return a;
}
XMa.X = 1;
function WMa(a, d, e, f) {
  var g = b;
  b += 8;
  var h = g + 4;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  c[h] = c[f];
  k[h] = k[f];
  c[h + 1] = c[f + 1];
  k[h + 1] = k[f + 1];
  c[h + 2] = c[f + 2];
  k[h + 2] = k[f + 2];
  c[h + 3] = c[f + 3];
  k[h + 3] = k[f + 3];
  a = YMa(a, e, h, g);
  b = g;
  return a;
}
WMa.X = 1;
function YMa(a, d, e, f) {
  var g = b;
  b += 36;
  var h,
    i,
    j,
    l = g + 4,
    m = g + 8,
    n = g + 12,
    p = g + 16,
    r = g + 20,
    s = g + 24,
    t = g + 28;
  h = g + 32;
  $2 = a;
  a = d + 4;
  j = d + 8;
  N(g, a, d);
  N(l, j, a);
  N(m, d, j);
  N(n, f, d);
  N(p, f, a);
  N(r, f, j);
  qn(s, g, e);
  qn(t, l, e);
  qn(h, m, e);
  d = J(s, n);
  p = J(t, p);
  r = J(h, r);
  t = 0 < d;
  do {
    if (t) {
      if (0 < p && 0 < r) {
        h = 9;
        break;
      }
      var w = d;
    } else {
      w = d;
    }
    h = 6;
  } while (0);
  a: do {
    if (6 == h) {
      h = 0 >= w;
      do {
        if (h && 0 >= p && 0 >= r) {
          h = 9;
          break a;
        }
      } while (0);
      i = 0;
      h = 11;
    }
  } while (0);
  9 == h && (i = 1);
  b = g;
  return i;
}
YMa.X = 1;
function VMa(a, d) {
  return (d << 2) + a + 14;
}
VMa.X = 1;
function ZMa() {}
ZMa.X = 1;
function $Ma(a) {
  xe(a);
}
$Ma.X = 1;
function aNa() {}
aNa.X = 1;
function bNa(a) {
  xe(a);
}
bNa.X = 1;
function PMa(a, d) {
  ZW(a, d);
  c[a] = $W + 2;
}
PMa.X = 1;
function aX(a, d, e, f) {
  $3 = e;
  $4 = f;
  ZW(a, d);
  c[a] = $W + 2;
}
aX.X = 1;
function cNa(a) {
  xe(a);
}
cNa.X = 1;
function dNa() {}
dNa.X = 1;
function xs(a, d, e, f, g, h) {
  eNa(a, d, e, -2, -1, f, g, h & 1);
  c[a] = fNa + 2;
}
xs.X = 1;
function eNa(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 15;
  var m = l + 4,
    n = l + 8,
    p = l + 12,
    r = l + 13,
    s = l + 14,
    j = j & 1;
  bX(a);
  c[a] = cX + 2;
  c[a + 1] = f;
  c[a + 2] = g;
  c[a + 25] = i;
  c[a + 26] = 0;
  c[a + 27] = 0;
  c[a + 28] = 0;
  c[a + 29] = 0;
  f = ((h & 65535) + 1) & 65535;
  0 == (c[a + 25] | 0) &&
    ((g = Ue(76, 16)),
    0 == (g | 0) ? (g = 0) : dX(g),
    (c[a + 25] = g),
    (c[a + 27] = 1));
  j & 1 ||
    ((j = Ue(24, 16)),
    0 == (j | 0)
      ? (j = 0)
      : ((c[j] = 0),
        (k[j] = 0),
        (c[j + 1] = 0),
        (k[j + 1] = 0),
        (c[j + 2] = 0),
        (k[j + 2] = 0),
        (c[j + 3] = 0),
        (k[j + 3] = 0),
        (c[j + 4] = 0),
        (k[j + 4] = 0),
        (c[j + 5] = 0),
        (k[j + 5] = 0),
        gNa(j)),
    (c[a + 30] = j),
    (j = Ue(156, 16)),
    0 == (j | 0) ? (j = 0) : xr(j, c[a + 30]),
    (c[a + 29] = j),
    (c[c[a + 29] + 39] = 1));
  j = a + 3;
  c[j] = c[d];
  k[j] = k[d];
  c[j + 1] = c[d + 1];
  k[j + 1] = k[d + 1];
  c[j + 2] = c[d + 2];
  k[j + 2] = k[d + 2];
  c[j + 3] = c[d + 3];
  k[j + 3] = k[d + 3];
  d = a + 7;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  N(l, a + 7, a + 3);
  e = c[a + 2];
  k[p] = e & 65535;
  k[r] = e & 65535;
  k[s] = e & 65535;
  H(n, p, r, s);
  eX(m, n, l);
  n = a + 11;
  c[n] = c[m];
  k[n] = k[m];
  c[n + 1] = c[m + 1];
  k[n + 1] = k[m + 1];
  c[n + 2] = c[m + 2];
  k[n + 2] = k[m + 2];
  c[n + 3] = c[m + 3];
  k[n + 3] = k[m + 3];
  m = f & 65535;
  n = hNa(m, 64);
  n = iNa(n.A ? -1 : n.v);
  p = 0 == (m | 0);
  a: do {
    if (!p) {
      r = n + 20 * m;
      for (s = n; ; ) {
        if ((gV(s), (s += 20), (s | 0) == (r | 0))) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 17] = n;
  c[a + 16] = f;
  c[a + 15] = 0;
  c[a + 18] = 1;
  m = c[a + 18];
  n = ((m & 65535) | 0) < ((f & 65535) | 0);
  a: do {
    if (n) {
      for (p = a + 17; ; ) {
        if (
          (qW(c[p] + 20 * (m & 65535), ((m & 65535) + 1) & 65535),
          (m += 1),
          ((m & 65535) | 0) >= ((f & 65535) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  qW(c[a + 17] + 20 * ((f & 65535) - 1), 0);
  m = 0;
  n = a + 22;
  p = a + 22;
  r = a + 19;
  for (s = 0; 3 > (s | 0); ) {
    (c[n + m] = Ue((f & 65535) << 3, 16)),
      (s = c[p + m]),
      (c[r + m] = 0 == (s | 0) ? 0 : s),
      (m = s = m + 1);
  }
  f = c[c[a + 17]] = 0;
  m = a + 17;
  n = a + 17;
  p = a + 19;
  r = a + 19;
  s = a + 2;
  e = a + 19;
  for (
    a += 19;
    !((c[c[m] + f + 13] = 0),
    (c[c[n] + f + 16] = 1),
    (c[c[p + f]] = 0),
    (c[c[r + f] + 1] = 0),
    (c[c[e + f] + 2] = c[s]),
    (c[c[a + f] + 3] = 0),
    (f = d = f + 1),
    3 <= (d | 0));

  ) {}
  b = l;
}
eNa.X = 1;
function bW(a, d, e, f, g, h) {
  jNa(a, d, e, -2, 2147483647, f, g, h & 1);
  c[a] = kNa + 2;
}
bW.X = 1;
function jNa(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 15;
  var m = l + 4,
    n = l + 8,
    p = l + 12,
    r = l + 13,
    s = l + 14,
    j = j & 1;
  bX(a);
  c[a] = fX + 2;
  c[a + 1] = f;
  c[a + 2] = g;
  c[a + 25] = i;
  c[a + 26] = 0;
  c[a + 27] = 0;
  c[a + 28] = 0;
  c[a + 29] = 0;
  f = h + 1;
  0 == (c[a + 25] | 0) &&
    ((g = Ue(76, 16)),
    0 == (g | 0) ? (g = 0) : dX(g),
    (c[a + 25] = g),
    (c[a + 27] = 1));
  j & 1 ||
    ((j = Ue(24, 16)),
    0 == (j | 0)
      ? (j = 0)
      : ((c[j] = 0),
        (k[j] = 0),
        (c[j + 1] = 0),
        (k[j + 1] = 0),
        (c[j + 2] = 0),
        (k[j + 2] = 0),
        (c[j + 3] = 0),
        (k[j + 3] = 0),
        (c[j + 4] = 0),
        (k[j + 4] = 0),
        (c[j + 5] = 0),
        (k[j + 5] = 0),
        gNa(j)),
    (c[a + 30] = j),
    (j = Ue(156, 16)),
    0 == (j | 0) ? (j = 0) : xr(j, c[a + 30]),
    (c[a + 29] = j),
    (c[c[a + 29] + 39] = 1));
  j = a + 3;
  c[j] = c[d];
  k[j] = k[d];
  c[j + 1] = c[d + 1];
  k[j + 1] = k[d + 1];
  c[j + 2] = c[d + 2];
  k[j + 2] = k[d + 2];
  c[j + 3] = c[d + 3];
  k[j + 3] = k[d + 3];
  d = a + 7;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  N(l, a + 7, a + 3);
  e = c[a + 2];
  k[p] = e >>> 0;
  k[r] = e >>> 0;
  k[s] = e >>> 0;
  H(n, p, r, s);
  eX(m, n, l);
  n = a + 11;
  c[n] = c[m];
  k[n] = k[m];
  c[n + 1] = c[m + 1];
  k[n + 1] = k[m + 1];
  c[n + 2] = c[m + 2];
  k[n + 2] = k[m + 2];
  c[n + 3] = c[m + 3];
  k[n + 3] = k[m + 3];
  m = hNa(f, 76);
  m = lNa(m.A ? -1 : m.v);
  n = 0 == (f | 0);
  a: do {
    if (!n) {
      p = m + 20 * f;
      for (r = m; ; ) {
        if ((gV(r), (r += 20), (r | 0) == (p | 0))) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 17] = m;
  c[a + 16] = f;
  c[a + 15] = 0;
  c[a + 18] = 1;
  m = c[a + 18];
  n = m >>> 0 < f >>> 0;
  a: do {
    if (n) {
      for (p = a + 17; ; ) {
        if ((nW(c[p] + 20 * m, m + 1), (m += 1), m >>> 0 >= f >>> 0)) {
          break a;
        }
      }
    }
  } while (0);
  nW(c[a + 17] + 20 * (f - 1), 0);
  m = 0;
  n = a + 22;
  p = a + 22;
  r = a + 19;
  for (s = 0; 3 > (s | 0); ) {
    (c[n + m] = Ue(f << 4, 16)),
      (s = c[p + m]),
      (c[r + m] = 0 == (s | 0) ? 0 : s),
      (m = s = m + 1);
  }
  f = c[c[a + 17]] = 0;
  m = a + 17;
  n = a + 17;
  p = a + 19;
  r = a + 19;
  s = a + 2;
  e = a + 19;
  for (
    a += 19;
    !((c[c[m] + f + 13] = 0),
    (c[c[n] + f + 16] = 1),
    (c[c[p + f]] = 0),
    (c[c[r + f] + 1] = 0),
    (c[c[e + f] + 2] = c[s]),
    (c[c[a + f] + 3] = 0),
    (f = d = f + 1),
    3 <= (d | 0));

  ) {}
  b = l;
}
jNa.X = 1;
function mNa(a) {
  gX(a);
}
mNa.X = 1;
function nNa() {}
nNa.X = 1;
function oNa(a) {
  return c[a + 25];
}
oNa.X = 1;
function pNa(a) {
  return c[a + 25];
}
pNa.X = 1;
function qNa(a, d, e, f, g, h, i, j, l) {
  l = VV(a, TV(a, d, e, g, h, i, j, l));
  0 != (c[a + 29] | 0) &&
    ((a = c[a + 29]), (c[l + 19] = v[c[c[a] + 2]](a, d, e, f, g, h, i, j, 0)));
  return l;
}
qNa.X = 1;
function rNa(a, d, e) {
  if (0 != (c[a + 29] | 0)) {
    var f = c[a + 29];
    v[c[c[f] + 3]](f, c[d + 19], e);
  }
  ZV(a, c[d + 4], e);
}
rNa.X = 1;
function sNa(a, d, e, f, g) {
  var h = d + 5;
  c[h] = c[e];
  k[h] = k[e];
  c[h + 1] = c[e + 1];
  k[h + 1] = k[e + 1];
  c[h + 2] = c[e + 2];
  k[h + 2] = k[e + 2];
  c[h + 3] = c[e + 3];
  k[h + 3] = k[e + 3];
  h = d + 9;
  c[h] = c[f];
  k[h] = k[f];
  c[h + 1] = c[f + 1];
  k[h + 1] = k[f + 1];
  c[h + 2] = c[f + 2];
  k[h + 2] = k[f + 2];
  c[h + 3] = c[f + 3];
  k[h + 3] = k[f + 3];
  $V(a, c[d + 4], e, f, g);
  0 != (c[a + 29] | 0) &&
    ((a = c[a + 29]), v[c[c[a] + 4]](a, c[d + 19], e, f, g));
}
sNa.X = 1;
function tNa(a, d, e, f) {
  $1 = a;
  a = d + 5;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
  d += 9;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
}
tNa.X = 1;
function uNa(a, d, e, f, g, h) {
  var i,
    j = 0 != (c[a + 29] | 0);
  a: do {
    if (j) {
      (i = c[a + 29]), v[c[c[i] + 6]](i, d, e, f, g, h);
    } else {
      i = 1;
      var l = a + 15;
      if (i >>> 0 < ((c[l] << 1) + 1) >>> 0) {
        for (var m = a + 19, n = a + 19; ; ) {
          if (0 != (kW((i << 1) + c[m + 0]) | 0)) {
            var p = f;
            v[c[c[p] + 2]](p, VV(a, c[(i << 1) + c[n + 0] + 1]));
          }
          i += 1;
          if (i >>> 0 >= ((c[l] << 1) + 1) >>> 0) {
            break a;
          }
        }
      }
    }
  } while (0);
}
uNa.X = 1;
function vNa(a, d, e, f) {
  var g,
    h,
    i = 0 != (c[a + 29] | 0);
  a: do {
    if (i) {
      (g = c[a + 29]), v[c[c[g] + 7]](g, d, e, f);
    } else {
      g = 1;
      var j = a + 15;
      if (g >>> 0 < ((c[j] << 1) + 1) >>> 0) {
        for (var l = a + 19, m = a + 19; ; ) {
          if (
            0 != (kW((g << 1) + c[l + 0]) | 0) &&
            ((h = VV(a, c[(g << 1) + c[m + 0] + 1])), hX(d, e, h + 5, h + 9))
          ) {
            var n = f;
            v[c[c[n] + 2]](n, h);
          }
          g += 1;
          if (g >>> 0 >= ((c[j] << 1) + 1) >>> 0) {
            break a;
          }
        }
      }
    }
  } while (0);
}
vNa.X = 1;
function wNa(a, d) {
  var e = b;
  b += 12;
  var f,
    g,
    h = e + 4,
    i,
    j,
    l = e + 8;
  f = c[a + 25];
  if (v[c[c[f] + 14]](f)) {
    f = c[a + 25];
    f = v[c[c[f] + 7]](f);
    iX(f);
    g = jX(f) - c[a + 28];
    Az(e);
    kX(f, g, e);
    c[a + 28] = 0;
    Az(h);
    c[h] = 0;
    c[h + 1] = 0;
    g = c[h + 2] = 0;
    var m = (g | 0) < (jX(f) | 0);
    a: do {
      if (m) {
        var n = h,
          p = a + 25,
          r = a + 28;
        for (i = f; ; ) {
          i = lX(i, g);
          j = mX(i, h) & 1;
          var s = i;
          c[n] = c[s];
          k[n] = k[s];
          c[n + 1] = c[s + 1];
          k[n + 1] = k[s + 1];
          c[n + 2] = c[s + 2];
          k[n + 2] = k[s + 2];
          c[n + 3] = c[s + 3];
          k[n + 3] = k[s + 3];
          j = j & 1 ? 1 : YV(a, c[i], c[i + 1]) & 1 ? 0 : 1;
          j & 1 &&
            ((j = c[p]),
            v[c[c[j] + 8]](j, i, d),
            (c[i] = 0),
            (c[i + 1] = 0),
            (c[r] += 1),
            (c[nX] -= 1));
          g += 1;
          i = f;
          if ((g | 0) >= (jX(f) | 0)) {
            var t = i;
            break a;
          }
        }
      } else {
        t = f;
      }
    } while (0);
    iX(t);
    h = jX(f) - c[a + 28];
    Az(l);
    kX(f, h, l);
    c[a + 28] = 0;
  }
  b = e;
}
wNa.X = 1;
function xNa(a, d, e) {
  var f = a + 3;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  a += 7;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
}
xNa.X = 1;
function yNa(a, d) {
  var e;
  $2 = d;
  if (0 == (c[a + 15] | 0)) {
    c[a + 18] = 1;
    e = c[a + 18];
    var f = a + 16,
      g = e >>> 0 < c[f] >>> 0;
    a: do {
      if (g) {
        for (var h = a + 17; ; ) {
          if ((nW(c[h] + 20 * e, e + 1), (e += 1), e >>> 0 >= c[f] >>> 0)) {
            break a;
          }
        }
      }
    } while (0);
    nW(c[a + 17] + 20 * (c[a + 16] - 1), 0);
  }
}
yNa.X = 1;
function zNa(a) {
  oX(a);
}
zNa.X = 1;
function ANa(a, d, e, f, g, h, i, j, l) {
  l = ts(a, rs(a, d, e, g, h, i, j, l));
  0 != (c[a + 29] | 0) &&
    ((a = c[a + 29]), (c[l + 19] = v[c[c[a] + 2]](a, d, e, f, g, h, i, j, 0)));
  return l;
}
ANa.X = 1;
function BNa(a, d, e) {
  if (0 != (c[a + 29] | 0)) {
    var f = c[a + 29];
    v[c[c[f] + 3]](f, c[d + 19], e);
  }
  Es(a, c[d + 4] & 65535, e);
}
BNa.X = 1;
function CNa(a, d, e, f, g) {
  var h = d + 5;
  c[h] = c[e];
  k[h] = k[e];
  c[h + 1] = c[e + 1];
  k[h + 1] = k[e + 1];
  c[h + 2] = c[e + 2];
  k[h + 2] = k[e + 2];
  c[h + 3] = c[e + 3];
  k[h + 3] = k[e + 3];
  h = d + 9;
  c[h] = c[f];
  k[h] = k[f];
  c[h + 1] = c[f + 1];
  k[h + 1] = k[f + 1];
  c[h + 2] = c[f + 2];
  k[h + 2] = k[f + 2];
  c[h + 3] = c[f + 3];
  k[h + 3] = k[f + 3];
  Ns(a, c[d + 4] & 65535, e, f, g);
  0 != (c[a + 29] | 0) &&
    ((a = c[a + 29]), v[c[c[a] + 4]](a, c[d + 19], e, f, g));
}
CNa.X = 1;
function DNa(a) {
  gX(a);
  yh(a);
}
DNa.X = 1;
function ENa(a) {
  oX(a);
  yh(a);
}
ENa.X = 1;
function FNa() {}
FNa.X = 1;
function GNa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
GNa.X = 1;
function HNa(a) {
  return c[a + 25];
}
HNa.X = 1;
function INa(a) {
  return c[a + 25];
}
INa.X = 1;
function jX(a) {
  return c[a + 1];
}
jX.X = 1;
function lX(a, d) {
  return (d << 2) + c[a + 3];
}
lX.X = 1;
function mX(a, d) {
  return (c[a] | 0) == (c[d] | 0) ? (c[a + 1] | 0) == (c[d + 1] | 0) : 0;
}
mX.X = 1;
function pX(a) {
  return c[a + 2];
}
pX.X = 1;
function JNa(a, d, e, f) {
  $1 = a;
  a = d + 5;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
  d += 9;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
}
JNa.X = 1;
function KNa(a, d, e, f, g, h) {
  var i,
    j = 0 != (c[a + 29] | 0);
  a: do {
    if (j) {
      (i = c[a + 29]), v[c[c[i] + 6]](i, d, e, f, g, h);
    } else {
      i = 1;
      var l = a + 15;
      if (((i & 65535) | 0) < ((((c[l] & 65535) << 1) + 1) | 0)) {
        for (var m = a + 19, n = a + 19; ; ) {
          if (0 != (oW(((i & 65535) << 1) + c[m + 0]) << 16) >> 16) {
            var p = f;
            v[c[c[p] + 2]](p, ts(a, c[((i & 65535) << 1) + c[n + 0] + 1]));
          }
          i += 1;
          if (((i & 65535) | 0) >= ((((c[l] & 65535) << 1) + 1) | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
}
KNa.X = 1;
function LNa(a, d, e, f) {
  var g,
    h,
    i = 0 != (c[a + 29] | 0);
  a: do {
    if (i) {
      (g = c[a + 29]), v[c[c[g] + 7]](g, d, e, f);
    } else {
      g = 1;
      var j = a + 15;
      if (((g & 65535) | 0) < ((((c[j] & 65535) << 1) + 1) | 0)) {
        for (var l = a + 19, m = a + 19; ; ) {
          if (
            0 != (oW(((g & 65535) << 1) + c[l + 0]) << 16) >> 16 &&
            ((h = ts(a, c[((g & 65535) << 1) + c[m + 0] + 1])),
            hX(d, e, h + 5, h + 9))
          ) {
            var n = f;
            v[c[c[n] + 2]](n, h);
          }
          g += 1;
          if (((g & 65535) | 0) >= ((((c[j] & 65535) << 1) + 1) | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
}
LNa.X = 1;
function MNa(a, d) {
  var e = b;
  b += 12;
  var f,
    g,
    h = e + 4,
    i,
    j,
    l = e + 8;
  f = c[a + 25];
  if (v[c[c[f] + 14]](f)) {
    f = c[a + 25];
    f = v[c[c[f] + 7]](f);
    iX(f);
    g = jX(f) - c[a + 28];
    Az(e);
    kX(f, g, e);
    c[a + 28] = 0;
    Az(h);
    c[h] = 0;
    c[h + 1] = 0;
    g = c[h + 2] = 0;
    var m = (g | 0) < (jX(f) | 0);
    a: do {
      if (m) {
        var n = h,
          p = a + 25,
          r = a + 28;
        for (i = f; ; ) {
          i = lX(i, g);
          j = mX(i, h) & 1;
          var s = i;
          c[n] = c[s];
          k[n] = k[s];
          c[n + 1] = c[s + 1];
          k[n + 1] = k[s + 1];
          c[n + 2] = c[s + 2];
          k[n + 2] = k[s + 2];
          c[n + 3] = c[s + 3];
          k[n + 3] = k[s + 3];
          j = j & 1 ? 1 : Cs(a, c[i], c[i + 1]) & 1 ? 0 : 1;
          j & 1 &&
            ((j = c[p]),
            v[c[c[j] + 8]](j, i, d),
            (c[i] = 0),
            (c[i + 1] = 0),
            (c[r] += 1),
            (c[nX] -= 1));
          g += 1;
          i = f;
          if ((g | 0) >= (jX(f) | 0)) {
            var t = i;
            break a;
          }
        }
      } else {
        t = f;
      }
    } while (0);
    iX(t);
    h = jX(f) - c[a + 28];
    Az(l);
    kX(f, h, l);
    c[a + 28] = 0;
  }
  b = e;
}
MNa.X = 1;
function NNa(a, d, e) {
  var f = a + 3;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  a += 7;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
}
NNa.X = 1;
function ONa(a, d) {
  var e;
  $2 = d;
  if (0 == ((c[a + 15] & 65535) | 0)) {
    c[a + 18] = 1;
    e = c[a + 18];
    var f = a + 16,
      g = ((e & 65535) | 0) < ((c[f] & 65535) | 0);
    a: do {
      if (g) {
        for (var h = a + 17; ; ) {
          if (
            (qW(c[h] + 20 * (e & 65535), ((e & 65535) + 1) & 65535),
            (e += 1),
            ((e & 65535) | 0) >= ((c[f] & 65535) | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    qW(c[a + 17] + 20 * ((c[a + 16] & 65535) - 1), 0);
  }
}
ONa.X = 1;
function iX(a) {
  1 < (jX(a) | 0) && qX(a, 0, jX(a) - 1);
}
iX.X = 1;
function kX(a, d, e) {
  var f, g;
  f = jX(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (jX(a) | 0) && rX(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          if ((Cz((g << 2) + c[i], e), (g += 1), (g | 0) >= (d | 0))) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
kX.X = 1;
function rX(a, d) {
  var e;
  (pX(a) | 0) < (d | 0) &&
    ((e = PNa(a, d)),
    QNa(a, 0, jX(a), e),
    GNa(a, 0, jX(a)),
    RNa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
rX.X = 1;
function PNa(a, d) {
  return 0 != (d | 0) ? SNa(a, d, 0) : 0;
}
PNa.X = 1;
function QNa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        if ((Cz((d << 2) + f, (d << 2) + c[h]), (d += 1), (d | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
QNa.X = 1;
function RNa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && TNa(a, c[a + 3]), (c[a + 3] = 0));
}
RNa.X = 1;
function TNa(a, d) {
  $1 = a;
  yh(d);
}
TNa.X = 1;
function SNa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 4, 16);
}
SNa.X = 1;
function UNa() {
  return 0;
}
UNa.X = 1;
function VNa() {
  return 0;
}
VNa.X = 1;
function WNa() {}
WNa.X = 1;
function bX(a) {
  c[a] = XNa + 2;
}
bX.X = 1;
function sX(a, d, e) {
  var f;
  $1 = a;
  var g = 0 != (c[d] | 0) ? c[c[d] + 4] : -1,
    h = 0 != (c[e] | 0) ? c[c[e] + 4] : -1,
    a = 0 != (c[d + 1] | 0) ? c[c[d + 1] + 4] : -1;
  f = 0 != (c[e + 1] | 0) ? c[c[e + 1] + 4] : -1;
  return (g | 0) > (h | 0)
    ? 1
    : (c[d] | 0) == (c[e] | 0) && (a | 0) > (f | 0)
      ? 1
      : (c[d] | 0) != (c[e] | 0)
        ? 0
        : (c[d + 1] | 0) != (c[e + 1] | 0)
          ? 0
          : c[d + 2] >>> 0 > c[e + 2] >>> 0;
}
sX.X = 1;
function qX(a, d, e) {
  var f = b;
  b += 5;
  var g,
    h,
    i = f + 1;
  g = d;
  h = e;
  Cz(i, (((((e + d) | 0) / 2) & -1) << 2) + c[a + 3]);
  for (var j = a + 3, l = a + 3; ; ) {
    if (sX(f, (g << 2) + c[j], i)) {
      g += 1;
    } else {
      var m = sX(f, i, (h << 2) + c[l]);
      a: do {
        if (m) {
          for (;;) {
            if (((h -= 1), !sX(f, i, (h << 2) + c[l]))) {
              break a;
            }
          }
        }
      } while (0);
      (g | 0) <= (h | 0) && (tX(a, g, h), (g += 1), (h -= 1));
      if (!((g | 0) <= (h | 0))) {
        break;
      }
    }
  }
  (d | 0) < (h | 0) && qX(a, d, h);
  (g | 0) < (e | 0) && qX(a, g, e);
  b = f;
}
qX.X = 1;
function tX(a, d, e) {
  var f = b;
  b += 4;
  Cz(f, (d << 2) + c[a + 3]);
  var d = (d << 2) + c[a + 3],
    g = (e << 2) + c[a + 3];
  c[d] = c[g];
  k[d] = k[g];
  c[d + 1] = c[g + 1];
  k[d + 1] = k[g + 1];
  c[d + 2] = c[g + 2];
  k[d + 2] = k[g + 2];
  c[d + 3] = c[g + 3];
  k[d + 3] = k[g + 3];
  a = (e << 2) + c[a + 3];
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
  b = f;
}
tX.X = 1;
function hX(a, d, e, f) {
  var g;
  g = (k[a] > k[f] ? 0 : k[d] < k[e] ? 0 : 1) & 1;
  g = (k[a + 2] > k[f + 2] ? 0 : k[d + 2] < k[e + 2] ? 0 : g & 1) & 1;
  g = (k[a + 1] > k[f + 1] ? 0 : k[d + 1] < k[e + 1] ? 0 : g & 1) & 1;
  return g & 1;
}
hX.X = 1;
function oX(a) {
  var d;
  c[a] = cX + 2;
  0 != (c[a + 29] | 0) &&
    ((d = c[a + 30]),
    v[c[c[d]]](d),
    yh(c[a + 30]),
    (d = c[a + 29]),
    v[c[c[d]]](d),
    yh(c[a + 29]));
  d = 2;
  for (var e = a + 22, f = 2; 0 <= (f | 0); ) {
    yh(c[e + d]), (d = f = d - 1);
  }
  d = c[a + 17];
  0 != (d | 0) && yh(d);
  c[a + 27] & 1 && ((d = c[a + 25]), v[c[c[d]]](d), yh(c[a + 25]));
}
oX.X = 1;
function YNa(a) {
  oX(a);
}
YNa.X = 1;
function gX(a) {
  var d;
  c[a] = fX + 2;
  0 != (c[a + 29] | 0) &&
    ((d = c[a + 30]),
    v[c[c[d]]](d),
    yh(c[a + 30]),
    (d = c[a + 29]),
    v[c[c[d]]](d),
    yh(c[a + 29]));
  d = 2;
  for (var e = a + 22, f = 2; 0 <= (f | 0); ) {
    yh(c[e + d]), (d = f = d - 1);
  }
  d = c[a + 17];
  0 != (d | 0) && yh(d);
  c[a + 27] & 1 && ((d = c[a + 25]), v[c[c[d]]](d), yh(c[a + 25]));
}
gX.X = 1;
function ZNa(a) {
  gX(a);
}
ZNa.X = 1;
function eX(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  k[f] = k[d] / k[e];
  k[g] = k[d + 1] / k[e + 1];
  k[h] = k[d + 2] / k[e + 2];
  H(a, f, g, h);
  b = f;
}
eX.X = 1;
function lNa(a) {
  return Ue(a, 16);
}
lNa.X = 1;
function gNa(a) {
  uX(a);
  c[a] = vX + 2;
  wX(a + 1);
}
gNa.X = 1;
function uX(a) {
  $Na(a);
  c[a] = aOa + 2;
}
uX.X = 1;
function bOa(a) {
  cOa(a);
}
bOa.X = 1;
function dOa(a) {
  cOa(a);
  xe(a);
}
dOa.X = 1;
function eOa(a) {
  return lX(a + 1, 0);
}
eOa.X = 1;
function fOa(a) {
  return xX(a + 1, 0);
}
fOa.X = 1;
function gOa(a) {
  oX(a);
  yh(a);
}
gOa.X = 1;
function hOa(a) {
  gX(a);
  yh(a);
}
hOa.X = 1;
function iOa() {}
iOa.X = 1;
function jOa() {
  return 0;
}
jOa.X = 1;
function kOa() {}
kOa.X = 1;
function lOa() {}
lOa.X = 1;
function mOa() {}
mOa.X = 1;
function nOa() {
  return 0;
}
nOa.X = 1;
function oOa() {
  return 1;
}
oOa.X = 1;
function pOa() {}
pOa.X = 1;
function qOa() {}
qOa.X = 1;
function rOa() {}
rOa.X = 1;
function sOa() {
  return 1;
}
sOa.X = 1;
function $Na(a) {
  c[a] = tOa + 2;
}
$Na.X = 1;
function uOa(a) {
  return a + 1;
}
uOa.X = 1;
function xX(a, d) {
  return (d << 2) + c[a + 3];
}
xX.X = 1;
function wX(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
wX.X = 1;
function cOa(a) {
  c[a] = vX + 2;
  yX(a + 1);
}
cOa.X = 1;
function yX(a) {
  GNa(a, 0, jX(a));
  RNa(a);
  wX(a);
}
yX.X = 1;
function vOa() {}
vOa.X = 1;
function wOa(a) {
  xe(a);
}
wOa.X = 1;
function xOa() {}
xOa.X = 1;
function yOa(a) {
  xe(a);
}
yOa.X = 1;
function zOa() {}
zOa.X = 1;
function AOa(a) {
  xe(a);
}
AOa.X = 1;
function iNa(a) {
  return Ue(a, 16);
}
iNa.X = 1;
function BOa(a, d, e, f, g) {
  aX(a, e, f, g);
  c[a] = zX + 2;
  c[a + 2] = 0;
  c[a + 3] = d;
  0 == (c[a + 3] | 0) &&
    ((d = c[a + 1]),
    v[c[c[d] + 6]](d, f, g) &&
      ((d = c[a + 1]), (c[a + 3] = v[c[c[d] + 3]](d, f, g)), (c[a + 2] = 1)));
}
BOa.X = 1;
function COa(a) {
  DOa(a);
  xe(a);
}
COa.X = 1;
function DOa(a) {
  c[a] = zX + 2;
  if (c[a + 2] & 1 && 0 != (c[a + 3] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 3]);
  }
}
DOa.X = 1;
function EOa(a, d, e, f, g) {
  var h;
  $4 = f;
  0 != (c[a + 3] | 0) &&
    ((f = bi(d)),
    (h = bi(e)),
    fI(g, c[a + 3]),
    FOa(g, f, d + 1, h, e + 1),
    c[a + 2] & 1 && DI(g));
}
EOa.X = 1;
function FOa(a, d, e, f, g) {
  var h = b;
  b += 123;
  var i,
    j = h + 1,
    l,
    m,
    n,
    p = h + 2,
    r = h + 18,
    s,
    t = h + 34,
    w = h + 44,
    x = h + 48,
    y = h + 52,
    z = h + 56,
    A = h + 60,
    C = h + 64,
    B = h + 68,
    K = h + 69,
    E = h + 70,
    G = h + 71,
    M = h + 75,
    L = h + 79,
    F = h + 89,
    I = h + 90,
    R = h + 91,
    O = h + 92,
    Z = h + 93,
    P = h + 94,
    S = h + 95,
    da = h + 105,
    V = h + 106,
    ba = h + 107,
    $ = h + 108,
    Y = h + 109,
    la = h + 110,
    ka = h + 111,
    ja = h + 115,
    ea = h + 119;
  c[h] = 0;
  i = GOa(h, d, e, f, g);
  var ca = 0 < i;
  a: do {
    if (!ca && ((c[j] = 0), (l = GOa(j, f, g, d, e)), 0 >= l)) {
      $k_relativeTol = 0.9800000190734863;
      $k_absoluteTol = 0.0010000000474974513;
      l > 0.9800000190734863 * i + 0.0010000000474974513
        ? ((m = f), (n = d), xi(p, g), xi(r, e), (s = c[j]), (l = 1))
        : ((m = d), (n = f), xi(p, e), xi(r, g), (s = c[h]), (l = 0));
      HOa(t, m, p, s, n, r);
      m += 18;
      n = w;
      var W = (s << 2) + m;
      c[n] = c[W];
      k[n] = k[W];
      c[n + 1] = c[W + 1];
      k[n + 1] = k[W + 1];
      c[n + 2] = c[W + 2];
      k[n + 2] = k[W + 2];
      c[n + 3] = c[W + 3];
      k[n + 3] = k[W + 3];
      n = x;
      s = 4 > ((s + 1) | 0) ? ((s + 1) << 2) + m : m;
      c[n] = c[s];
      k[n] = k[s];
      c[n + 1] = c[s + 1];
      k[n + 1] = k[s + 1];
      c[n + 2] = c[s + 2];
      k[n + 2] = k[s + 2];
      c[n + 3] = c[s + 3];
      k[n + 3] = k[s + 3];
      N(y, x, w);
      s = p;
      N(A, x, w);
      Bo(z, s, A);
      IB(z);
      k[B] = k[z + 1];
      k[K] = -1 * k[z];
      k[E] = 0;
      H(C, B, K, E);
      vw(G, p, w);
      s = w;
      m = G;
      c[s] = c[m];
      k[s] = k[m];
      c[s + 1] = c[m + 1];
      k[s + 1] = k[m + 1];
      c[s + 2] = c[m + 2];
      k[s + 2] = k[m + 2];
      c[s + 3] = c[m + 3];
      k[s + 3] = k[m + 3];
      vw(M, p, x);
      s = x;
      m = M;
      c[s] = c[m];
      k[s] = k[m];
      c[s + 1] = c[m + 1];
      k[s + 1] = k[m + 1];
      c[s + 2] = c[m + 2];
      k[s + 2] = k[m + 2];
      c[s + 3] = c[m + 3];
      k[s + 3] = k[m + 3];
      s = J(C, w);
      m = -J(z, w);
      n = J(z, x);
      k[F] = 0;
      k[I] = 0;
      k[R] = 0;
      pe(L, F, I, R);
      k[O] = 0;
      k[Z] = 0;
      k[P] = 0;
      pe(L + 5, O, Z, P);
      k[da] = 0;
      k[V] = 0;
      k[ba] = 0;
      pe(S, da, V, ba);
      k[$] = 0;
      k[Y] = 0;
      k[la] = 0;
      pe(S + 5, $, Y, la);
      WP(ka, z);
      if (
        2 <= (IOa(L, t, ka, m) | 0) &&
        ((m = IOa(S, L, z, n)),
        2 <= (m | 0) &&
          (0 != (l << 24) >> 24
            ? WP(ja, C)
            : ((l = ja),
              (m = C),
              (c[l] = c[m]),
              (k[l] = k[m]),
              (c[l + 1] = c[m + 1]),
              (k[l + 1] = k[m + 1]),
              (c[l + 2] = c[m + 2]),
              (k[l + 2] = k[m + 2]),
              (c[l + 3] = c[m + 3]),
              (k[l + 3] = k[m + 3])),
          (l = 0),
          (l | 0) < (c[JOa] | 0)))
      ) {
        for (;;) {
          if (
            ((m = J(C, S + 5 * l) - s),
            0 >= m &&
              ((n = a),
              (W = c[c[n] + 4]),
              WP(ea, ja),
              v[W](n, ea, S + 5 * l, m)),
            (l += 1),
            (l | 0) >= (c[JOa] | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = h;
}
FOa.X = 1;
function KOa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
KOa.X = 1;
function LOa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
LOa.X = 1;
function AX(a) {
  return c[a + 1];
}
AX.X = 1;
function MOa(a) {
  return c[a + 2];
}
MOa.X = 1;
function NOa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
NOa.X = 1;
function GOa(a, d, e, f, g) {
  var h = b;
  b += 28;
  var i,
    j,
    l,
    m = h + 4;
  i = h + 8;
  var n = h + 12,
    p = h + 16,
    r,
    s,
    t,
    w,
    x;
  l = d + 34;
  vw(m, g, f + 14);
  vw(i, e, d + 14);
  N(h, m, i);
  ue(p, e);
  Bo(n, p, h);
  m = 0;
  i = -0xde0b6b000000000;
  p = 0;
  s = 4 > (p | 0);
  a: do {
    if (s) {
      for (;;) {
        if (
          ((r = J((p << 2) + l, n)),
          r > i && ((i = r), (m = p)),
          (p += 1),
          4 <= (p | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  l = n = BX(d, e, m, f, g);
  n = 0 < n;
  a: do {
    if (n) {
      j = l;
    } else {
      if (
        ((i = 0 <= ((m - 1) | 0) ? m - 1 : 3),
        (p = r = BX(d, e, i, f, g)),
        0 < r)
      ) {
        j = p;
      } else {
        r = 4 > ((m + 1) | 0) ? m + 1 : 0;
        var y = BX(d, e, r, f, g);
        s = y;
        if (0 < y) {
          j = s;
        } else {
          if (p > l) {
            if (p > s) {
              x = -1;
              t = i;
              w = p;
              var z = -1;
              i = 23;
            } else {
              i = 20;
            }
          } else {
            i = 20;
          }
          if (20 == i) {
            if (s <= l) {
              c[a] = m;
              j = l;
              break;
            }
            x = 1;
            t = r;
            w = s;
            z = 1;
          }
          for (;;) {
            m = t;
            m =
              -1 == (z | 0)
                ? 0 <= ((m - 1) | 0) ? t - 1 : 3
                : 4 > ((m + 1) | 0) ? t + 1 : 0;
            i = l = z = BX(d, e, m, f, g);
            if (0 < z) {
              j = i;
              break a;
            }
            if (i <= w) {
              c[a] = t;
              j = w;
              break a;
            }
            t = m;
            w = l;
            z = x;
          }
        }
      }
    }
  } while (0);
  b = h;
  return j;
}
GOa.X = 1;
function HOa(a, d, e, f, g, h) {
  var i = b;
  b += 28;
  var j,
    l = i + 4,
    m = i + 16,
    n = i + 20,
    p = i + 24;
  j = d + 34;
  d = g + 18;
  g += 34;
  ue(l, h);
  Bo(m, e, (f << 2) + j);
  Bo(i, l, m);
  e = 0;
  f = 0xde0b6b000000000;
  l = 0;
  j = 4 > (l | 0);
  a: do {
    if (j) {
      for (;;) {
        if (
          ((m = J(i, (l << 2) + g)),
          m < f && ((f = m), (e = l)),
          (l += 1),
          4 <= (l | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  g = e;
  e = 4 > ((g + 1) | 0) ? g + 1 : 0;
  vw(n, h, (g << 2) + d);
  c[a] = c[n];
  k[a] = k[n];
  c[a + 1] = c[n + 1];
  k[a + 1] = k[n + 1];
  c[a + 2] = c[n + 2];
  k[a + 2] = k[n + 2];
  c[a + 3] = c[n + 3];
  k[a + 3] = k[n + 3];
  vw(p, h, (e << 2) + d);
  a += 5;
  c[a] = c[p];
  k[a] = k[p];
  c[a + 1] = c[p + 1];
  k[a + 1] = k[p + 1];
  c[a + 2] = c[p + 2];
  k[a + 2] = k[p + 2];
  c[a + 3] = c[p + 3];
  k[a + 3] = k[p + 3];
  b = i;
}
HOa.X = 1;
function IOa(a, d, e, f) {
  var g = b;
  b += 13;
  var h,
    i,
    j = g + 1,
    l = g + 5,
    m = g + 9;
  h = 0;
  i = J(e, d) - f;
  e = J(e, d + 5) - f;
  0 >= i &&
    ((f = h),
    (h = f + 1),
    (f = a + 5 * f),
    (c[f] = c[d]),
    (k[f] = k[d]),
    (c[f + 1] = c[d + 1]),
    (k[f + 1] = k[d + 1]),
    (c[f + 2] = c[d + 2]),
    (k[f + 2] = k[d + 2]),
    (c[f + 3] = c[d + 3]),
    (k[f + 3] = k[d + 3]),
    (c[f + 4] = c[d + 4]),
    (k[f + 4] = k[d + 4]));
  f = e;
  if (0 >= f) {
    f = h;
    h = f + 1;
    var f = a + 5 * f,
      n = d + 5;
    c[f] = c[n];
    k[f] = k[n];
    c[f + 1] = c[n + 1];
    k[f + 1] = k[n + 1];
    c[f + 2] = c[n + 2];
    k[f + 2] = k[n + 2];
    c[f + 3] = c[n + 3];
    k[f + 3] = k[n + 3];
    c[f + 4] = c[n + 4];
    k[f + 4] = k[n + 4];
  }
  0 > i * e &&
    ((k[g] = i / (i - e)),
    N(m, d + 5, d),
    Q(l, m, g),
    wn(j, d, l),
    (l = a + 5 * h),
    (c[l] = c[j]),
    (k[l] = k[j]),
    (c[l + 1] = c[j + 1]),
    (k[l + 1] = k[j + 1]),
    (c[l + 2] = c[j + 2]),
    (k[l + 2] = k[j + 2]),
    (c[l + 3] = c[j + 3]),
    (k[l + 3] = k[j + 3]),
    (c[a + 5 * h + 4] = 0 < i ? c[d + 4] : c[d + 9]),
    (h += 1));
  b = g;
  return h;
}
IOa.X = 1;
function OOa(a, d) {
  0 != (c[a + 3] | 0) && c[a + 2] & 1 && CX(d, a + 3);
}
OOa.X = 1;
function CX(a, d) {
  (AX(a) | 0) == (MOa(a) | 0) && POa(a, KOa(a, AX(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
CX.X = 1;
function POa(a, d) {
  var e;
  (MOa(a) | 0) < (d | 0) &&
    ((e = QOa(a, d)),
    NOa(a, 0, AX(a), e),
    LOa(a, 0, AX(a)),
    ROa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
POa.X = 1;
function QOa(a, d) {
  return 0 != (d | 0) ? SOa(a, d, 0) : 0;
}
QOa.X = 1;
function ROa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && TOa(a, c[a + 3]), (c[a + 3] = 0));
}
ROa.X = 1;
function TOa(a, d) {
  $1 = a;
  yh(d);
}
TOa.X = 1;
function SOa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
SOa.X = 1;
function UOa() {
  return D.Nd;
}
UOa.X = 1;
function VOa() {
  return 52;
}
VOa.X = 1;
function WOa() {
  return 6;
}
WOa.X = 1;
function XOa() {
  return 4;
}
XOa.X = 1;
function YOa() {
  return 12;
}
YOa.X = 1;
function ZOa(a) {
  return a + 3;
}
ZOa.X = 1;
function $Oa(a) {
  return k[a + 11];
}
$Oa.X = 1;
function BX(a, d, e, f, g) {
  var h = b;
  b += 32;
  var i,
    j = h + 4,
    l = h + 8,
    m,
    n,
    p = h + 20,
    r = h + 24,
    s = h + 28;
  i = a + 18;
  f += 18;
  Bo(h, d, (e << 2) + (a + 34));
  ue(l, g);
  Bo(j, l, h);
  a = 0;
  l = 0xde0b6b000000000;
  m = 0;
  var t = 4 > (m | 0);
  a: do {
    if (t) {
      for (;;) {
        if (
          ((n = J((m << 2) + f, j)),
          n < l && ((l = n), (a = m)),
          (m += 1),
          4 <= (m | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  vw(p, d, (e << 2) + i);
  vw(r, g, (a << 2) + f);
  N(s, r, p);
  d = J(s, h);
  b = h;
  return d;
}
BX.X = 1;
function aPa(a, d, e, f) {
  DX(a + 7, v[c[c[a] + 11]](a), d, e, f);
}
aPa.X = 1;
function DX(a, d, e, f, g) {
  var h = b;
  b += 40;
  var i = h + 1,
    j = h + 5,
    l = h + 9,
    m = h + 21,
    n = h + 25,
    p = h + 29,
    r = h + 30,
    s = h + 31,
    t = h + 32,
    w = h + 36;
  k[h] = d;
  H(j, h, h, h);
  wn(i, a, j);
  qc(l, e);
  a = e + 12;
  c[m] = c[a];
  k[m] = k[a];
  c[m + 1] = c[a + 1];
  k[m + 1] = k[a + 1];
  c[m + 2] = c[a + 2];
  k[m + 2] = k[a + 2];
  c[m + 3] = c[a + 3];
  k[m + 3] = k[a + 3];
  k[p] = J(0 + l, i);
  k[r] = J(4 + l, i);
  k[s] = J(8 + l, i);
  H(n, p, r, s);
  N(t, m, n);
  c[f] = c[t];
  k[f] = k[t];
  c[f + 1] = c[t + 1];
  k[f + 1] = k[t + 1];
  c[f + 2] = c[t + 2];
  k[f + 2] = k[t + 2];
  c[f + 3] = c[t + 3];
  k[f + 3] = k[t + 3];
  wn(w, m, n);
  c[g] = c[w];
  k[g] = k[w];
  c[g + 1] = c[w + 1];
  k[g + 1] = k[w + 1];
  c[g + 2] = c[w + 2];
  k[g + 2] = k[w + 2];
  c[g + 3] = c[w + 3];
  k[g + 3] = k[w + 3];
  b = h;
}
DX.X = 1;
function bPa(a, d, e) {
  var f = b;
  b += 7;
  var g,
    h,
    i = f + 4,
    j = f + 5,
    l = f + 6;
  cPa(f, a);
  a = 2 * k[f];
  g = 2 * k[f + 1];
  h = 2 * k[f + 2];
  k[i] = d / 12 * (g * g + h * h);
  k[j] = d / 12 * (a * a + h * h);
  k[l] = d / 12 * (a * a + g * g);
  pe(e, i, j, l);
  b = f;
}
bPa.X = 1;
function cPa(a, d) {
  var e = b;
  b += 7;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = d + 7;
  c[a] = c[i];
  k[a] = k[i];
  c[a + 1] = c[i + 1];
  k[a + 1] = k[i + 1];
  c[a + 2] = c[i + 2];
  k[a + 2] = k[i + 2];
  c[a + 3] = c[i + 3];
  k[a + 3] = k[i + 3];
  k[f] = v[c[c[d] + 11]](d);
  k[g] = v[c[c[d] + 11]](d);
  k[h] = v[c[c[d] + 11]](d);
  H(e, f, g, h);
  xn(a, e);
  b = e;
}
cPa.X = 1;
function dPa(a) {
  EX(a);
}
dPa.X = 1;
function ePa(a, d) {
  var e = b;
  b += 23;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 19;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  eX(j, i, a + 3);
  FX(a, d);
  ig(m, j, a + 3);
  N(l, m, e);
  f = a + 7;
  c[f] = c[l];
  k[f] = k[l];
  c[f + 1] = c[l + 1];
  k[f + 1] = k[l + 1];
  c[f + 2] = c[l + 2];
  k[f + 2] = k[l + 2];
  c[f + 3] = c[l + 3];
  k[f + 3] = k[l + 3];
  b = e;
}
ePa.X = 1;
function fPa(a, d) {
  var e = b;
  b += 22;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 16,
    n = e + 17,
    p = e + 18;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  fW(a, d);
  k[l] = v[c[c[a] + 11]](a);
  k[m] = v[c[c[a] + 11]](a);
  k[n] = v[c[c[a] + 11]](a);
  H(j, l, m, n);
  N(p, i, j);
  f = a + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  b = e;
}
fPa.X = 1;
function GX(a, d, e) {
  HX(a, d, e);
  mc(a + 7, d + 10);
  mc(a + 3, d + 6);
  k[d + 14] = k[a + 11];
  return D.nf;
}
GX.X = 1;
function gPa(a, d, e) {
  var f = b;
  b += 14;
  var g = f + 4,
    h = f + 8,
    i = f + 9,
    j = f + 10,
    l = f + 11,
    m = f + 12,
    n = f + 13,
    p = d + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  k[h] = v[c[c[d] + 11]](d);
  k[i] = v[c[c[d] + 11]](d);
  k[j] = v[c[c[d] + 11]](d);
  H(g, h, i, j);
  xn(f, g);
  k[l] = 0 <= k[e] ? k[f] : -k[f];
  k[m] = 0 <= k[e + 1] ? k[f + 1] : -k[f + 1];
  k[n] = 0 <= k[e + 2] ? k[f + 2] : -k[f + 2];
  H(a, l, m, n);
  b = f;
}
gPa.X = 1;
function hPa(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2,
    d = d + 7;
  k[f] = 0 <= k[e] ? k[d] : -k[d];
  k[g] = 0 <= k[e + 1] ? k[d + 1] : -k[d + 1];
  k[h] = 0 <= k[e + 2] ? k[d + 2] : -k[d + 2];
  H(a, f, g, h);
  b = f;
}
hPa.X = 1;
function iPa(a, d, e, f) {
  var g = b;
  b += 3;
  var h,
    i,
    j = g + 1,
    l = g + 2,
    a = a + 7;
  h = 0;
  var m = (h | 0) < (f | 0);
  a: do {
    if (m) {
      for (;;) {
        if (
          ((i = (h << 2) + d),
          (k[g] = 0 <= k[i] ? k[a] : -k[a]),
          (k[j] = 0 <= k[i + 1] ? k[a + 1] : -k[a + 1]),
          (k[l] = 0 <= k[i + 2] ? k[a + 2] : -k[a + 2]),
          pe((h << 2) + e, g, j, l),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
iPa.X = 1;
function jPa(a, d, e) {
  var f = b;
  b += 18;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8,
    r = f + 9,
    s = f + 10,
    t = f + 11,
    w = f + 12,
    x = f + 13,
    y = f + 14,
    z = f + 15,
    A = f + 16,
    C = f + 17;
  $1 = a;
  0 == (d | 0)
    ? ((k[f] = 1), (k[g] = 0), (k[h] = 0), pe(e, f, g, h))
    : 1 == (d | 0)
      ? ((k[i] = -1), (k[j] = 0), (k[l] = 0), pe(e, i, j, l))
      : 2 == (d | 0)
        ? ((k[m] = 0), (k[n] = 1), (k[p] = 0), pe(e, m, n, p))
        : 3 == (d | 0)
          ? ((k[r] = 0), (k[s] = -1), (k[t] = 0), pe(e, r, s, t))
          : 4 == (d | 0)
            ? ((k[w] = 0), (k[x] = 0), (k[y] = 1), pe(e, w, x, y))
            : 5 == (d | 0) &&
              ((k[z] = 0), (k[A] = 0), (k[C] = -1), pe(e, z, A, C));
  b = f;
}
jPa.X = 1;
function kPa(a) {
  EX(a);
  yh(a);
}
kPa.X = 1;
function lPa() {
  return 6;
}
lPa.X = 1;
function mPa() {
  return 1;
}
mPa.X = 1;
function nPa(a, d, e, f) {
  var g, h;
  h = g = 0;
  0 == (d | 0)
    ? ((g = 0), (h = 1))
    : 1 == (d | 0)
      ? ((g = 0), (h = 2))
      : 2 == (d | 0)
        ? ((g = 1), (h = 3))
        : 3 == (d | 0)
          ? ((g = 2), (h = 3))
          : 4 == (d | 0)
            ? ((g = 0), (h = 4))
            : 5 == (d | 0)
              ? ((g = 1), (h = 5))
              : 6 == (d | 0)
                ? ((g = 2), (h = 6))
                : 7 == (d | 0)
                  ? ((g = 3), (h = 7))
                  : 8 == (d | 0)
                    ? ((g = 4), (h = 5))
                    : 9 == (d | 0)
                      ? ((g = 4), (h = 6))
                      : 10 == (d | 0)
                        ? ((g = 5), (h = 7))
                        : 11 == (d | 0) && ((g = 6), (h = 7));
  v[c[c[a] + 25]](a, g, e);
  v[c[c[a] + 25]](a, h, f);
}
nPa.X = 1;
function oPa(a, d, e) {
  var f = b;
  b += 11;
  var g = f + 4,
    h = f + 8,
    i = f + 9,
    j = f + 10,
    a = a + 7;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  k[h] = k[f] * ((1 - (d & 1)) | 0) - k[f] * ((d & 1) | 0);
  k[i] =
    k[f + 1] * ((1 - ((d & 2) >> 1)) | 0) - k[f + 1] * (((d & 2) >> 1) | 0);
  k[j] =
    k[f + 2] * ((1 - ((d & 4) >> 2)) | 0) - k[f + 2] * (((d & 4) >> 2) | 0);
  H(g, h, i, j);
  c[e] = c[g];
  k[e] = k[g];
  c[e + 1] = c[g + 1];
  k[e + 1] = k[g + 1];
  c[e + 2] = c[g + 2];
  k[e + 2] = k[g + 2];
  c[e + 3] = c[g + 3];
  k[e + 3] = k[g + 3];
  b = f;
}
oPa.X = 1;
function pPa(a, d, e, f) {
  var g = b;
  b += 16;
  var h = g + 4,
    i = g + 8,
    j = g + 12;
  v[c[c[a] + 29]](a, g, f);
  H(h, g, g + 1, g + 2);
  c[d] = c[h];
  k[d] = k[h];
  c[d + 1] = c[h + 1];
  k[d + 1] = k[h + 1];
  c[d + 2] = c[h + 2];
  k[d + 2] = k[h + 2];
  c[d + 3] = c[h + 3];
  k[d + 3] = k[h + 3];
  f = c[c[a] + 15];
  WP(j, d);
  v[f](i, a, j);
  c[e] = c[i];
  k[e] = k[i];
  c[e + 1] = c[i + 1];
  k[e + 1] = k[i + 1];
  c[e + 2] = c[i + 2];
  k[e + 2] = k[i + 2];
  c[e + 3] = c[i + 3];
  k[e + 3] = k[i + 3];
  b = g;
}
pPa.X = 1;
function qPa(a, d, e) {
  var f = b;
  b += 4;
  a += 7;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  d =
    (k[d] <= k[f] + e
      ? k[d] >= -k[f] - e
        ? k[d + 1] <= k[f + 1] + e
          ? k[d + 1] >= -k[f + 1] - e
            ? k[d + 2] <= k[f + 2] + e ? k[d + 2] >= -k[f + 2] - e : 0
            : 0
          : 0
        : 0
      : 0) & 1;
  b = f;
  return d;
}
qPa.X = 1;
function rPa(a, d, e) {
  var f = b;
  b += 28;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11,
    r = f + 12,
    s = f + 13,
    t = f + 14,
    w = f + 15,
    x = f + 16,
    y = f + 17,
    z = f + 18,
    A = f + 19,
    C = f + 20,
    B = f + 21,
    K = f + 22,
    E = f + 23,
    G = f + 24,
    M = f + 25,
    L = f + 26,
    F = f + 27,
    a = a + 7;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  0 == (e | 0)
    ? ((k[g] = 1), (k[h] = 0), (k[i] = 0), (k[j] = -k[f]), $B(d, g, h, i, j))
    : 1 == (e | 0)
      ? ((k[l] = -1), (k[m] = 0), (k[n] = 0), (k[p] = -k[f]), $B(d, l, m, n, p))
      : 2 == (e | 0)
        ? ((k[r] = 0),
          (k[s] = 1),
          (k[t] = 0),
          (k[w] = -k[f + 1]),
          $B(d, r, s, t, w))
        : 3 == (e | 0)
          ? ((k[x] = 0),
            (k[y] = -1),
            (k[z] = 0),
            (k[A] = -k[f + 1]),
            $B(d, x, y, z, A))
          : 4 == (e | 0)
            ? ((k[C] = 0),
              (k[B] = 0),
              (k[K] = 1),
              (k[E] = -k[f + 2]),
              $B(d, C, B, K, E))
            : 5 == (e | 0) &&
              ((k[G] = 0),
              (k[M] = 0),
              (k[L] = -1),
              (k[F] = -k[f + 2]),
              $B(d, G, M, L, F));
  b = f;
}
rPa.X = 1;
function sPa(a, d, e, f, g) {
  aX(a, e, f, g);
  c[a] = IX + 2;
  c[a + 2] = 0;
  c[a + 3] = d;
  0 == (c[a + 3] | 0) &&
    ((d = c[a + 1]),
    v[c[c[d] + 6]](d, f, g) &&
      ((d = c[a + 1]), (c[a + 3] = v[c[c[d] + 3]](d, f, g)), (c[a + 2] = 1)));
}
sPa.X = 1;
function tPa(a) {
  uPa(a);
  xe(a);
}
tPa.X = 1;
function uPa(a) {
  c[a] = IX + 2;
  if (c[a + 2] & 1 && 0 != (c[a + 3] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 3]);
  }
}
uPa.X = 1;
function vPa(a, d, e, f, g) {
  var h = b;
  b += 37;
  var i,
    j,
    l = h + 34;
  0 != (c[a + 3] | 0) &&
    ((i = bi(d)),
    (j = bi(e)),
    fI(g, c[a + 3]),
    QQ(h),
    (k[h + 32] = 0xde0b6b000000000),
    xi(h, d + 1),
    xi(h + 16, e + 1),
    wPa(l, i, j),
    xPa(l, h, g, c[f + 5], 0),
    c[a + 2] & 1 && DI(g));
  b = h;
}
vPa.X = 1;
function yPa() {}
yPa.X = 1;
function zPa(a, d) {
  0 != (c[a + 3] | 0) && c[a + 2] & 1 && CX(d, a + 3);
}
zPa.X = 1;
function wPa(a, d, e) {
  XW(a);
  c[a] = APa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
}
wPa.X = 1;
function BPa(a, d, e, f, g, h) {
  var i = b;
  b += 4;
  k[i] = k[e] - k[a];
  k[i + 1] = k[e + 1] - k[a + 1];
  k[i + 2] = k[e + 2] - k[a + 2];
  a = JX(d, f);
  d = JX(d, i);
  f = -JX(f, i);
  e = 1 - a * a;
  9999999747378752e-20 >= e
    ? ((k[g] = 0), (k[h] = 0))
    : ((e = 1 / e), (k[g] = (d + a * f) * e), (k[h] = (a * d + f) * e));
  b = i;
}
BPa.X = 1;
function JX(a, d) {
  return k[a] * k[d] + k[a + 1] * k[d + 1] + k[a + 2] * k[d + 2];
}
JX.X = 1;
function CPa(a, d, e, f, g) {
  var h = b;
  b += 16;
  var i,
    j,
    l,
    m,
    n,
    p = h + 8;
  if (1 == (a | 0)) {
    (l = k[d]), (m = k[d + 1]);
  } else {
    if (2 == (a | 0)) {
      (l = 0.5 * (k[d] + k[d + 2])), (m = 0.5 * (k[d + 1] + k[d + 3]));
    } else {
      i = m = l = j = 0;
      var r = (i | 0) < ((a - 1) | 0);
      a: do {
        if (r) {
          for (;;) {
            if (
              ((n =
                k[(i << 1) + d] * k[(i << 1) + d + 3] -
                k[(i << 1) + d + 2] * k[(i << 1) + d + 1]),
              (j += n),
              (l += n * (k[(i << 1) + d] + k[(i << 1) + d + 2])),
              (m += n * (k[(i << 1) + d + 1] + k[(i << 1) + d + 3])),
              (i += 1),
              (i | 0) >= ((a - 1) | 0))
            ) {
              break a;
            }
          }
        }
      } while (0);
      n = k[d + ((a << 1) - 2)] * k[d + 1] - k[d] * k[d + ((a << 1) - 1)];
      j =
        1.1920928955078125e-7 < sc(j + n)
          ? 1 / (3 * (j + n))
          : 0xde0b6b000000000;
      l = j * (l + n * (k[d + ((a << 1) - 2)] + k[d]));
      m = j * (m + n * (k[d + ((a << 1) - 1)] + k[d + 1]));
    }
  }
  i = 0;
  j = (i | 0) < (a | 0);
  a: do {
    if (j) {
      for (;;) {
        if (
          ((k[h + i] = ee(k[(i << 1) + d + 1] - m, k[(i << 1) + d] - l)),
          (i += 1),
          (i | 0) >= (a | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  i = 0;
  j = (i | 0) < (a | 0);
  a: do {
    if (j) {
      for (;;) {
        if (((c[p + i] = 1), (i += 1), (i | 0) >= (a | 0))) {
          break a;
        }
      }
    }
  } while (0);
  c[p + f] = 0;
  c[g] = f;
  g += 1;
  d = 1;
  l = (d | 0) < (e | 0);
  a: do {
    if (l) {
      for (;;) {
        j = i = (d | 0) * (6.2831854820251465 / (e | 0)) + k[h + f];
        3.1415927410125732 < i && (j -= 6.2831854820251465);
        m = 1e9;
        c[g] = f;
        i = 0;
        r = (i | 0) < (a | 0);
        b: do {
          if (r) {
            for (;;) {
              if (
                (0 != (c[p + i] | 0) &&
                  ((n = sc(k[h + i] - j)),
                  3.1415927410125732 < n && (n = 6.2831854820251465 - n),
                  n < m && ((m = n), (c[g] = i))),
                (i += 1),
                (i | 0) >= (a | 0))
              ) {
                break b;
              }
            }
          }
        } while (0);
        c[p + c[g]] = 0;
        g += 1;
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
CPa.X = 1;
function DPa(a, d, e, f, g, h, i, j, l, m, n, p, r) {
  var s = b;
  b += 169;
  var t,
    w,
    x,
    y = s + 4,
    z = s + 8,
    A = s + 12,
    C = s + 13,
    B = s + 14,
    K,
    E = s + 15,
    G = s + 18,
    M,
    L,
    F,
    I,
    R,
    O,
    Z,
    P,
    S,
    da,
    V,
    ba,
    $,
    Y,
    la,
    ka,
    ja,
    ea,
    ca,
    W,
    U,
    X,
    ma,
    ga,
    ha,
    ta = s + 21,
    ra = s + 25,
    ua,
    za = s + 29,
    Za = s + 33,
    ib = s + 34,
    Ca = s + 35,
    Sa = s + 39,
    mb = s + 47,
    Oa,
    Pa,
    fc,
    jb,
    La,
    fb,
    Rb = s + 51,
    pb = s + 55,
    Sb = s + 59,
    ab,
    Ib,
    Fc,
    Ac = s + 63,
    ob,
    Gc,
    Yc,
    Cc = s + 67,
    Ub,
    Uc,
    nd,
    Ic,
    tc,
    hd,
    Tb,
    Jc,
    ub,
    uc,
    Kc = s + 75,
    gb = s + 77,
    gc,
    Lc = s + 93,
    Dc = s + 117,
    Eb,
    Ra,
    qb,
    Ab,
    hc = s + 125,
    Hc = s + 129,
    ic = s + 133,
    db = s + 137,
    bb,
    id,
    Zc = s + 141,
    vb = s + 149,
    rb = s + 153,
    vc = s + 157,
    Qc = s + 161,
    Rc = s + 165;
  x = m;
  $14 = n;
  $15 = p;
  $fudge_factor = 1.0499999523162842;
  k[A] = 0;
  k[C] = 0;
  k[B] = 0;
  H(z, A, C, B);
  K = 0;
  N(ta, f, a);
  c[s] = c[ta];
  k[s] = k[ta];
  c[s + 1] = c[ta + 1];
  k[s + 1] = k[ta + 1];
  c[s + 2] = c[ta + 2];
  k[s + 2] = k[ta + 2];
  c[s + 3] = c[ta + 3];
  k[s + 3] = k[ta + 3];
  k[y] = KX(d, s);
  k[y + 1] = KX(d + 1, s);
  k[y + 2] = KX(d + 2, s);
  k[E] = 0.5 * k[e];
  k[E + 1] = 0.5 * k[e + 1];
  k[E + 2] = 0.5 * k[e + 2];
  k[G] = 0.5 * k[h];
  k[G + 1] = 0.5 * k[h + 1];
  k[G + 2] = 0.5 * k[h + 2];
  M = LX(d, g);
  L = LX(d, g + 1);
  F = LX(d, g + 2);
  I = LX(d + 1, g);
  R = LX(d + 1, g + 1);
  O = LX(d + 1, g + 2);
  Z = LX(d + 2, g);
  P = LX(d + 2, g + 1);
  S = LX(d + 2, g + 2);
  da = sc(M);
  V = sc(L);
  ba = sc(F);
  $ = sc(I);
  Y = sc(R);
  la = sc(O);
  ka = sc(Z);
  ja = sc(P);
  ea = sc(S);
  ca = -3.4028234663852886e38;
  ha = ga = 0;
  W = sc(k[y]) - (k[E] + k[G] * da + k[G + 1] * V + k[G + 2] * ba);
  var Xd = 0 < W;
  a: do {
    if (Xd) {
      w = 0;
    } else {
      W > ca && ((ca = W), (K = d), (ga = (0 > k[y]) & 1), (ha = 1));
      var Sc =
        sc(k[y + 1]) - (k[E + 1] + k[G] * $ + k[G + 1] * Y + k[G + 2] * la);
      W = Sc;
      if (0 < Sc) {
        w = 0;
      } else {
        W > ca && ((ca = W), (K = d + 1), (ga = (0 > k[y + 1]) & 1), (ha = 2));
        var Mc =
          sc(k[y + 2]) - (k[E + 2] + k[G] * ka + k[G + 1] * ja + k[G + 2] * ea);
        W = Mc;
        if (0 < Mc) {
          w = 0;
        } else {
          W > ca &&
            ((ca = W), (K = d + 2), (ga = (0 > k[y + 2]) & 1), (ha = 3));
          var $c =
            sc(KX(g, s)) - (k[E] * da + k[E + 1] * $ + k[E + 2] * ka + k[G]);
          W = $c;
          if (0 < $c) {
            w = 0;
          } else {
            W > ca && ((ca = W), (K = g), (ga = (0 > KX(g, s)) & 1), (ha = 4));
            var Cd =
              sc(KX(g + 1, s)) -
              (k[E] * V + k[E + 1] * Y + k[E + 2] * ja + k[G + 1]);
            W = Cd;
            if (0 < Cd) {
              w = 0;
            } else {
              W > ca &&
                ((ca = W),
                (K = g + 1),
                (ga = (0 > KX(g + 1, s)) & 1),
                (ha = 5));
              var wc =
                sc(KX(g + 2, s)) -
                (k[E] * ba + k[E + 1] * la + k[E + 2] * ea + k[G + 2]);
              W = wc;
              if (0 < wc) {
                w = 0;
              } else {
                W > ca &&
                  ((ca = W),
                  (K = g + 2),
                  (ga = (0 > KX(g + 2, s)) & 1),
                  (ha = 6));
                da += 9999999747378752e-21;
                V += 9999999747378752e-21;
                ba += 9999999747378752e-21;
                $ += 9999999747378752e-21;
                Y += 9999999747378752e-21;
                la += 9999999747378752e-21;
                ka += 9999999747378752e-21;
                ja += 9999999747378752e-21;
                ea += 9999999747378752e-21;
                var Bb =
                  sc(k[y + 2] * I - k[y + 1] * Z) -
                  (k[E + 1] * ka + k[E + 2] * $ + k[G + 1] * ba + k[G + 2] * V);
                W = Bb;
                if (1.1920928955078125e-7 < Bb) {
                  w = 0;
                } else {
                  U = ec(-Z * -Z + I * I);
                  1.1920928955078125e-7 < U &&
                    ((W /= U),
                    1.0499999523162842 * W > ca &&
                      ((ca = W),
                      (K = 0),
                      (k[z] = 0),
                      (k[z + 1] = -Z / U),
                      (k[z + 2] = I / U),
                      (ga = (0 > k[y + 2] * I - k[y + 1] * Z) & 1),
                      (ha = 7)));
                  var fd =
                    sc(k[y + 2] * R - k[y + 1] * P) -
                    (k[E + 1] * ja + k[E + 2] * Y + k[G] * ba + k[G + 2] * da);
                  W = fd;
                  if (1.1920928955078125e-7 < fd) {
                    w = 0;
                  } else {
                    U = ec(-P * -P + R * R);
                    1.1920928955078125e-7 < U &&
                      ((W /= U),
                      1.0499999523162842 * W > ca &&
                        ((ca = W),
                        (K = 0),
                        (k[z] = 0),
                        (k[z + 1] = -P / U),
                        (k[z + 2] = R / U),
                        (ga = (0 > k[y + 2] * R - k[y + 1] * P) & 1),
                        (ha = 8)));
                    var ad =
                      sc(k[y + 2] * O - k[y + 1] * S) -
                      (k[E + 1] * ea +
                        k[E + 2] * la +
                        k[G] * V +
                        k[G + 1] * da);
                    W = ad;
                    if (1.1920928955078125e-7 < ad) {
                      w = 0;
                    } else {
                      U = ec(-S * -S + O * O);
                      1.1920928955078125e-7 < U &&
                        ((W /= U),
                        1.0499999523162842 * W > ca &&
                          ((ca = W),
                          (K = 0),
                          (k[z] = 0),
                          (k[z + 1] = -S / U),
                          (k[z + 2] = O / U),
                          (ga = (0 > k[y + 2] * O - k[y + 1] * S) & 1),
                          (ha = 9)));
                      var wd =
                        sc(k[y] * Z - k[y + 2] * M) -
                        (k[E] * ka +
                          k[E + 2] * da +
                          k[G + 1] * la +
                          k[G + 2] * Y);
                      W = wd;
                      if (1.1920928955078125e-7 < wd) {
                        w = 0;
                      } else {
                        U = ec(Z * Z + -M * -M);
                        1.1920928955078125e-7 < U &&
                          ((W /= U),
                          1.0499999523162842 * W > ca &&
                            ((ca = W),
                            (K = 0),
                            (k[z] = Z / U),
                            (k[z + 1] = 0),
                            (k[z + 2] = -M / U),
                            (ga = (0 > k[y] * Z - k[y + 2] * M) & 1),
                            (ha = 10)));
                        var Kd =
                          sc(k[y] * P - k[y + 2] * L) -
                          (k[E] * ja + k[E + 2] * V + k[G] * la + k[G + 2] * $);
                        W = Kd;
                        if (1.1920928955078125e-7 < Kd) {
                          w = 0;
                        } else {
                          U = ec(P * P + -L * -L);
                          1.1920928955078125e-7 < U &&
                            ((W /= U),
                            1.0499999523162842 * W > ca &&
                              ((ca = W),
                              (K = 0),
                              (k[z] = P / U),
                              (k[z + 1] = 0),
                              (k[z + 2] = -L / U),
                              (ga = (0 > k[y] * P - k[y + 2] * L) & 1),
                              (ha = 11)));
                          var Rd =
                            sc(k[y] * S - k[y + 2] * F) -
                            (k[E] * ea +
                              k[E + 2] * ba +
                              k[G] * Y +
                              k[G + 1] * $);
                          W = Rd;
                          if (1.1920928955078125e-7 < Rd) {
                            w = 0;
                          } else {
                            U = ec(S * S + -F * -F);
                            1.1920928955078125e-7 < U &&
                              ((W /= U),
                              1.0499999523162842 * W > ca &&
                                ((ca = W),
                                (K = 0),
                                (k[z] = S / U),
                                (k[z + 1] = 0),
                                (k[z + 2] = -F / U),
                                (ga = (0 > k[y] * S - k[y + 2] * F) & 1),
                                (ha = 12)));
                            var Ec =
                              sc(k[y + 1] * M - k[y] * I) -
                              (k[E] * $ +
                                k[E + 1] * da +
                                k[G + 1] * ea +
                                k[G + 2] * ja);
                            W = Ec;
                            if (1.1920928955078125e-7 < Ec) {
                              w = 0;
                            } else {
                              U = ec(-I * -I + M * M);
                              1.1920928955078125e-7 < U &&
                                ((W /= U),
                                1.0499999523162842 * W > ca &&
                                  ((ca = W),
                                  (K = 0),
                                  (k[z] = -I / U),
                                  (k[z + 1] = M / U),
                                  (k[z + 2] = 0),
                                  (ga = (0 > k[y + 1] * M - k[y] * I) & 1),
                                  (ha = 13)));
                              var xd =
                                sc(k[y + 1] * L - k[y] * R) -
                                (k[E] * Y +
                                  k[E + 1] * V +
                                  k[G] * ea +
                                  k[G + 2] * ka);
                              W = xd;
                              if (1.1920928955078125e-7 < xd) {
                                w = 0;
                              } else {
                                U = ec(-R * -R + L * L);
                                1.1920928955078125e-7 < U &&
                                  ((W /= U),
                                  1.0499999523162842 * W > ca &&
                                    ((ca = W),
                                    (K = 0),
                                    (k[z] = -R / U),
                                    (k[z + 1] = L / U),
                                    (k[z + 2] = 0),
                                    (ga = (0 > k[y + 1] * L - k[y] * R) & 1),
                                    (ha = 14)));
                                var od =
                                  sc(k[y + 1] * F - k[y] * O) -
                                  (k[E] * la +
                                    k[E + 1] * ba +
                                    k[G] * ja +
                                    k[G + 1] * ka);
                                W = od;
                                if (1.1920928955078125e-7 < od) {
                                  w = 0;
                                } else {
                                  U = ec(-O * -O + F * F);
                                  1.1920928955078125e-7 < U
                                    ? ((W /= U),
                                      1.0499999523162842 * W > ca
                                        ? ((ca = W),
                                          (K = 0),
                                          (k[z] = -O / U),
                                          (k[z + 1] = F / U),
                                          (k[z + 2] = 0),
                                          (ga =
                                            (0 > k[y + 1] * F - k[y] * O) & 1),
                                          (ha = 15),
                                          (t = 73))
                                        : (t = 71))
                                    : (t = 71);
                                  do {
                                    if (71 == t && 0 == (ha | 0)) {
                                      w = 0;
                                      break a;
                                    }
                                  } while (0);
                                  0 != (K | 0)
                                    ? ((k[i] = k[K]),
                                      (k[i + 1] = k[K + 4]),
                                      (k[i + 2] = k[K + 8]))
                                    : ((k[i] = JX(d, z)),
                                      (k[i + 1] = JX(d + 4, z)),
                                      (k[i + 2] = JX(d + 8, z)));
                                  0 != (ga | 0) &&
                                    ((k[i] = -k[i]),
                                    (k[i + 1] = -k[i + 1]),
                                    (k[i + 2] = -k[i + 2]));
                                  k[j] = -ca;
                                  if (6 < (ha | 0)) {
                                    for (X = 0; ; ) {
                                      k[ra + X] = k[a + X];
                                      var pd = X + 1;
                                      X = pd;
                                      if (3 <= (pd | 0)) {
                                        break;
                                      }
                                    }
                                    for (ma = 0; ; ) {
                                      ua = 0 < MX(i, d + ma) ? 1 : -1;
                                      for (X = 0; ; ) {
                                        var bd = ra + X;
                                        k[bd] +=
                                          ua * k[E + ma] * k[(X << 2) + d + ma];
                                        var jd = X + 1;
                                        X = jd;
                                        if (3 <= (jd | 0)) {
                                          break;
                                        }
                                      }
                                      var Ld = ma + 1;
                                      ma = Ld;
                                      if (3 <= (Ld | 0)) {
                                        break;
                                      }
                                    }
                                    for (X = 0; ; ) {
                                      k[za + X] = k[f + X];
                                      var Gd = X + 1;
                                      X = Gd;
                                      if (3 <= (Gd | 0)) {
                                        break;
                                      }
                                    }
                                    for (ma = 0; ; ) {
                                      ua = 0 < MX(i, g + ma) ? -1 : 1;
                                      for (X = 0; ; ) {
                                        var Dd = za + X;
                                        k[Dd] +=
                                          ua * k[G + ma] * k[(X << 2) + g + ma];
                                        var fe = X + 1;
                                        X = fe;
                                        if (3 <= (fe | 0)) {
                                          break;
                                        }
                                      }
                                      var ge = ma + 1;
                                      ma = ge;
                                      if (3 <= (ge | 0)) {
                                        break;
                                      }
                                    }
                                    for (X = 0; ; ) {
                                      k[Ca + X] =
                                        k[
                                          (X << 2) +
                                            d +
                                            ((((ha - 7) | 0) / 3) & -1)
                                        ];
                                      var Hd = X + 1;
                                      X = Hd;
                                      if (3 <= (Hd | 0)) {
                                        break;
                                      }
                                    }
                                    for (X = 0; ; ) {
                                      k[Sa + X] =
                                        k[(X << 2) + g + ((ha - 7) | 0) % 3];
                                      var he = X + 1;
                                      X = he;
                                      if (3 <= (he | 0)) {
                                        break;
                                      }
                                    }
                                    BPa(ra, Ca, za, Sa, Za, ib);
                                    for (X = 0; ; ) {
                                      var Zd = ra + X;
                                      k[Zd] += k[Ca + X] * k[Za];
                                      var $d = X + 1;
                                      X = $d;
                                      if (3 <= ($d | 0)) {
                                        break;
                                      }
                                    }
                                    for (X = 0; ; ) {
                                      var pg = za + X;
                                      k[pg] += k[Sa + X] * k[ib];
                                      var Ze = X + 1;
                                      X = Ze;
                                      if (3 <= (Ze | 0)) {
                                        break;
                                      }
                                    }
                                    var Xg = r,
                                      Dh = c[c[Xg] + 4];
                                    WP(mb, i);
                                    v[Dh](Xg, mb, za, -k[j]);
                                    c[l] = ha;
                                    w = 1;
                                  } else {
                                    3 >= (ha | 0)
                                      ? ((Oa = d),
                                        (Pa = g),
                                        (fc = a),
                                        (jb = f),
                                        (La = E),
                                        (fb = G))
                                      : ((Oa = g),
                                        (Pa = d),
                                        (fc = f),
                                        (jb = a),
                                        (La = G),
                                        (fb = E));
                                    var wf = k[i];
                                    3 >= (ha | 0)
                                      ? ((k[Rb] = wf),
                                        (k[Rb + 1] = k[i + 1]),
                                        (k[Rb + 2] = k[i + 2]))
                                      : ((k[Rb] = -wf),
                                        (k[Rb + 1] = -k[i + 1]),
                                        (k[Rb + 2] = -k[i + 2]));
                                    k[pb] = KX(Pa, Rb);
                                    k[pb + 1] = KX(Pa + 1, Rb);
                                    k[pb + 2] = KX(Pa + 2, Rb);
                                    var Oe = sc(k[pb]);
                                    k[Sb] = Oe;
                                    var If = sc(k[pb + 1]);
                                    k[Sb + 1] = If;
                                    var Ai = sc(k[pb + 2]);
                                    k[Sb + 2] = Ai;
                                    var qg = Sb;
                                    if (k[Sb + 1] > k[Sb]) {
                                      var Yg = k[qg + 1];
                                      Ib = 0;
                                      Yg > k[Sb + 2]
                                        ? ((ab = 1), (Fc = 2))
                                        : ((Fc = 1), (ab = 2));
                                    } else {
                                      k[qg] > k[Sb + 2]
                                        ? ((ab = 0), (Ib = 1), (Fc = 2))
                                        : ((Ib = 0), (Fc = 1), (ab = 2));
                                    }
                                    var Zg = 0 > k[pb + ab];
                                    X = 0;
                                    b: do {
                                      if (Zg) {
                                        for (;;) {
                                          k[Ac + X] =
                                            k[jb + X] -
                                            k[fc + X] +
                                            k[fb + ab] * k[(X << 2) + Pa + ab];
                                          var Vf = X + 1;
                                          X = Vf;
                                          if (3 <= (Vf | 0)) {
                                            break b;
                                          }
                                        }
                                      } else {
                                        for (;;) {
                                          k[Ac + X] =
                                            k[jb + X] -
                                            k[fc + X] -
                                            k[fb + ab] * k[(X << 2) + Pa + ab];
                                          var rg = X + 1;
                                          X = rg;
                                          if (3 <= (rg | 0)) {
                                            break b;
                                          }
                                        }
                                      }
                                    } while (0);
                                    var sg = ha;
                                    if (3 >= (ha | 0)) {
                                      var om = sg - 1,
                                        mn = (ob = om);
                                    } else {
                                      var yl = sg - 4,
                                        mn = (ob = yl);
                                    }
                                    0 == (mn | 0)
                                      ? ((Gc = 1), (Yc = 2))
                                      : ((Gc = 0),
                                        (Yc = 1 == (ob | 0) ? 2 : 1));
                                    Ub = MX(Ac, Oa + Gc);
                                    Uc = MX(Ac, Oa + Yc);
                                    nd = LX(Oa + Gc, Pa + Ib);
                                    Ic = LX(Oa + Gc, Pa + Fc);
                                    tc = LX(Oa + Yc, Pa + Ib);
                                    hd = LX(Oa + Yc, Pa + Fc);
                                    Tb = nd * k[fb + Ib];
                                    Jc = tc * k[fb + Ib];
                                    ub = Ic * k[fb + Fc];
                                    uc = hd * k[fb + Fc];
                                    k[Cc] = Ub - Tb - ub;
                                    k[Cc + 1] = Uc - Jc - uc;
                                    k[Cc + 2] = Ub - Tb + ub;
                                    k[Cc + 3] = Uc - Jc + uc;
                                    k[Cc + 4] = Ub + Tb + ub;
                                    k[Cc + 5] = Uc + Jc + uc;
                                    k[Cc + 6] = Ub + Tb - ub;
                                    k[Cc + 7] = Uc + Jc - uc;
                                    k[Kc] = k[La + Gc];
                                    k[Kc + 1] = k[La + Yc];
                                    var tg = EPa(Kc, Cc, gb);
                                    gc = tg;
                                    if (1 <= (tg | 0)) {
                                      Eb = 1 / (nd * hd - Ic * tc);
                                      nd *= Eb;
                                      Ic *= Eb;
                                      tc *= Eb;
                                      hd *= Eb;
                                      ma = Ra = 0;
                                      var $e = (ma | 0) < (gc | 0);
                                      do {
                                        if ($e) {
                                          for (var af = Lc; ; ) {
                                            qb =
                                              hd * (k[(ma << 1) + gb] - Ub) -
                                              Ic * (k[(ma << 1) + gb + 1] - Uc);
                                            Ab =
                                              -tc * (k[(ma << 1) + gb] - Ub) +
                                              nd * (k[(ma << 1) + gb + 1] - Uc);
                                            for (X = 0; ; ) {
                                              k[Lc + 3 * Ra + X] =
                                                k[Ac + X] +
                                                qb * k[(X << 2) + Pa + Ib] +
                                                Ab * k[(X << 2) + Pa + Fc];
                                              var Wf = X + 1;
                                              X = Wf;
                                              if (3 <= (Wf | 0)) {
                                                break;
                                              }
                                            }
                                            k[Dc + Ra] =
                                              k[La + ob] - JX(Rb, af + 3 * Ra);
                                            0 <= k[Dc + Ra] &&
                                              ((k[(Ra << 1) + gb] =
                                                k[(ma << 1) + gb]),
                                              (k[(Ra << 1) + gb + 1] =
                                                k[(ma << 1) + gb + 1]),
                                              (Ra += 1));
                                            ma += 1;
                                            if ((ma | 0) >= (gc | 0)) {
                                              break;
                                            }
                                          }
                                          if (1 <= (Ra | 0)) {
                                            var Xf = x;
                                            if ((Xf | 0) > (Ra | 0)) {
                                              var ug = Ra,
                                                vg = (x = ug);
                                            } else {
                                              vg = Xf;
                                            }
                                            1 > (vg | 0) && (x = 1);
                                            var rh = (Ra | 0) <= (x | 0);
                                            b: do {
                                              if (rh) {
                                                ma = 0;
                                                var nn = (ma | 0) < (Ra | 0);
                                                if (4 > (ha | 0)) {
                                                  if (nn) {
                                                    for (;;) {
                                                      for (X = 0; ; ) {
                                                        k[hc + X] =
                                                          k[Lc + 3 * ma + X] +
                                                          k[fc + X];
                                                        var on = X + 1;
                                                        X = on;
                                                        if (3 <= (on | 0)) {
                                                          break;
                                                        }
                                                      }
                                                      var $g = r,
                                                        Eh = c[c[$g] + 4];
                                                      WP(Hc, i);
                                                      v[Eh](
                                                        $g,
                                                        Hc,
                                                        hc,
                                                        -k[Dc + ma]
                                                      );
                                                      ma += 1;
                                                      if (
                                                        (ma | 0) >=
                                                        (Ra | 0)
                                                      ) {
                                                        break b;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  if (nn) {
                                                    for (;;) {
                                                      for (X = 0; ; ) {
                                                        k[ic + X] =
                                                          k[Lc + 3 * ma + X] +
                                                          k[fc + X] -
                                                          k[i + X] * k[Dc + ma];
                                                        var pn = X + 1;
                                                        X = pn;
                                                        if (3 <= (pn | 0)) {
                                                          break;
                                                        }
                                                      }
                                                      var $u = r,
                                                        qja = c[c[$u] + 4];
                                                      WP(db, i);
                                                      v[qja](
                                                        $u,
                                                        db,
                                                        ic,
                                                        -k[Dc + ma]
                                                      );
                                                      ma += 1;
                                                      if (
                                                        (ma | 0) >=
                                                        (Ra | 0)
                                                      ) {
                                                        break b;
                                                      }
                                                    }
                                                  }
                                                }
                                              } else {
                                                bb = 0;
                                                id = k[Dc];
                                                X = 1;
                                                var hC = (X | 0) < (Ra | 0);
                                                c: do {
                                                  if (hC) {
                                                    for (;;) {
                                                      if (
                                                        (k[Dc + X] > id &&
                                                          ((id = k[Dc + X]),
                                                          (bb = X)),
                                                        (X += 1),
                                                        (X | 0) >= (Ra | 0))
                                                      ) {
                                                        break c;
                                                      }
                                                    }
                                                  }
                                                } while (0);
                                                CPa(Ra, gb, x, bb, Zc);
                                                ma = 0;
                                                var iC = (ma | 0) < (x | 0);
                                                c: do {
                                                  if (iC) {
                                                    for (;;) {
                                                      for (X = 0; ; ) {
                                                        k[vb + X] =
                                                          k[
                                                            Lc +
                                                              3 * c[Zc + ma] +
                                                              X
                                                          ] + k[fc + X];
                                                        var av = X + 1;
                                                        X = av;
                                                        if (3 <= (av | 0)) {
                                                          break;
                                                        }
                                                      }
                                                      var nr = r,
                                                        bv = c[c[nr] + 4],
                                                        cv = i;
                                                      4 > (ha | 0)
                                                        ? (WP(rb, cv),
                                                          v[bv](
                                                            nr,
                                                            rb,
                                                            vb,
                                                            -k[Dc + c[Zc + ma]]
                                                          ))
                                                        : (WP(vc, cv),
                                                          Q(
                                                            Rc,
                                                            i,
                                                            Dc + c[Zc + ma]
                                                          ),
                                                          N(Qc, vb, Rc),
                                                          v[bv](
                                                            nr,
                                                            vc,
                                                            Qc,
                                                            -k[Dc + c[Zc + ma]]
                                                          ));
                                                      ma += 1;
                                                      if ((ma | 0) >= (x | 0)) {
                                                        break c;
                                                      }
                                                    }
                                                  }
                                                } while (0);
                                                Ra = x;
                                              }
                                            } while (0);
                                            c[l] = ha;
                                            w = Ra;
                                            break a;
                                          }
                                        }
                                      } while (0);
                                    }
                                    w = 0;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } while (0);
  var rja = w;
  b = s;
  return rja;
}
DPa.X = 1;
function FPa() {
  return D.Sd;
}
FPa.X = 1;
function KX(a, d) {
  return k[a] * k[d] + k[a + 4] * k[d + 1] + k[a + 8] * k[d + 2];
}
KX.X = 1;
function LX(a, d) {
  return k[a] * k[d] + k[a + 4] * k[d + 4] + k[a + 8] * k[d + 8];
}
LX.X = 1;
function MX(a, d) {
  return k[a] * k[d] + k[a + 1] * k[d + 4] + k[a + 2] * k[d + 8];
}
MX.X = 1;
function EPa(a, d, e) {
  var f = b;
  b += 16;
  var g, h, i, j, l, m, n, p, r;
  g = 4;
  h = 0;
  i = e;
  var s = (j = 0);
  a: for (; 1 >= (s | 0); ) {
    var t = (l = -1);
    b: for (;;) {
      if (!(1 >= (t | 0))) {
        s = j = l = j + 1;
        continue a;
      }
      m = d;
      n = i;
      h = 0;
      for (p = r = g; ; ) {
        if (0 >= (r | 0)) {
          d = i;
          i = (d | 0) == (e | 0) ? f : e;
          g = h;
          t = l = m = l + 2;
          continue b;
        }
        r = (l | 0) * k[m + j] < k[a + j];
        do {
          if (
            r &&
            ((k[n] = k[m]),
            (k[n + 1] = k[m + 1]),
            (n += 2),
            (h += 1),
            0 != ((h & 8) | 0))
          ) {
            d = i;
            break a;
          }
        } while (0);
        r = 1 < (p | 0) ? m + 2 : d;
        var w =
          0 !=
          (((((l | 0) * k[r + j] < k[a + j]) & 1) ^
            (((l | 0) * k[m + j] < k[a + j]) & 1)) |
            0);
        do {
          if (
            w &&
            ((k[n + (1 - j)] =
              k[m + (1 - j)] +
              (k[r + (1 - j)] - k[m + (1 - j)]) /
                (k[r + j] - k[m + j]) *
                ((l | 0) * k[a + j] - k[m + j])),
            (k[n + j] = (l | 0) * k[a + j]),
            (n += 2),
            (h += 1),
            0 != ((h & 8) | 0))
          ) {
            d = i;
            break a;
          }
        } while (0);
        m += 2;
        p = r = p - 1;
      }
    }
  }
  if ((d | 0) != (e | 0)) {
    a = d;
    for (g = a + 1 * ((h << 3) / 4); a < g; a++, e++) {
      (c[e] = c[a]), (k[e] = k[a]);
    }
  }
  b = f;
  return h;
}
EPa.X = 1;
function xPa(a, d, e, f, g) {
  var h = b;
  b += 48;
  var i = h + 12,
    j = h + 24,
    l = h + 28,
    m = h + 29,
    n = h + 30,
    p = h + 34,
    r = h + 35,
    s = h + 39,
    t = h + 43,
    w = h + 44;
  $6 = f;
  $7 = g & 1;
  f = d + 16;
  for (g = 0; ; ) {
    k[(g << 2) + h] = k[(g << 2) + d];
    k[(g << 2) + i] = k[(g << 2) + f];
    k[(g << 2) + h + 1] = k[(g << 2) + d + 1];
    k[(g << 2) + i + 1] = k[(g << 2) + f + 1];
    k[(g << 2) + h + 2] = k[(g << 2) + d + 2];
    k[(g << 2) + i + 2] = k[(g << 2) + f + 2];
    var x = g + 1,
      g = x;
    if (3 <= (x | 0)) {
      break;
    }
  }
  d += 12;
  k[p] = 2;
  nV(r, c[a + 1]);
  Q(n, r, p);
  p = f + 12;
  k[t] = 2;
  nV(w, c[a + 2]);
  Q(s, w, t);
  DPa(d, h, n, p, i, s, j, l, m, 4, 0, 0, e);
  b = h;
}
xPa.X = 1;
function GPa(a) {
  xe(a);
}
GPa.X = 1;
function HPa(a, d, e, f) {
  DX(a + 7, v[c[c[a] + 11]](a), d, e, f);
}
HPa.X = 1;
function IPa(a, d, e) {
  var f = b;
  b += 7;
  var g,
    h,
    i = f + 4,
    j = f + 5,
    l = f + 6;
  nV(f, a);
  a = 2 * k[f];
  g = 2 * k[f + 1];
  h = 2 * k[f + 2];
  k[i] = d / 12 * (g * g + h * h);
  k[j] = d / 12 * (a * a + h * h);
  k[l] = d / 12 * (a * a + g * g);
  pe(e, i, j, l);
  b = f;
}
IPa.X = 1;
function JPa(a) {
  EX(a);
}
JPa.X = 1;
function KPa(a, d) {
  var e = b;
  b += 23;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 19;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  eX(j, i, a + 3);
  FX(a, d);
  ig(m, j, a + 3);
  N(l, m, e);
  f = a + 7;
  c[f] = c[l];
  k[f] = k[l];
  c[f + 1] = c[l + 1];
  k[f + 1] = k[l + 1];
  c[f + 2] = c[l + 2];
  k[f + 2] = k[l + 2];
  c[f + 3] = c[l + 3];
  k[f + 3] = k[l + 3];
  b = e;
}
KPa.X = 1;
function LPa(a, d) {
  var e = b;
  b += 22;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 16,
    n = e + 17,
    p = e + 18;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  fW(a, d);
  k[l] = v[c[c[a] + 11]](a);
  k[m] = v[c[c[a] + 11]](a);
  k[n] = v[c[c[a] + 11]](a);
  H(j, l, m, n);
  N(p, i, j);
  f = a + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  b = e;
}
LPa.X = 1;
function MPa(a, d, e) {
  var f = b;
  b += 14;
  var g = f + 4,
    h = f + 8,
    i = f + 9,
    j = f + 10,
    l = f + 11,
    m = f + 12,
    n = f + 13,
    p = d + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  k[h] = v[c[c[d] + 11]](d);
  k[i] = v[c[c[d] + 11]](d);
  k[j] = v[c[c[d] + 11]](d);
  H(g, h, i, j);
  xn(f, g);
  k[l] = 0 <= k[e] ? k[f] : -k[f];
  k[m] = 0 <= k[e + 1] ? k[f + 1] : -k[f + 1];
  k[n] = 0 <= k[e + 2] ? k[f + 2] : -k[f + 2];
  H(a, l, m, n);
  b = f;
}
MPa.X = 1;
function NPa(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2,
    d = d + 7;
  k[f] = 0 <= k[e] ? k[d] : -k[d];
  k[g] = 0 <= k[e + 1] ? k[d + 1] : -k[d + 1];
  k[h] = 0 <= k[e + 2] ? k[d + 2] : -k[d + 2];
  H(a, f, g, h);
  b = f;
}
NPa.X = 1;
function OPa(a) {
  EX(a);
  yh(a);
}
OPa.X = 1;
function PPa() {
  return 6;
}
PPa.X = 1;
function QPa() {
  return 8;
}
QPa.X = 1;
function RPa() {
  return 12;
}
RPa.X = 1;
function SPa() {
  return 6;
}
SPa.X = 1;
function TPa(a, d) {
  return d;
}
TPa.X = 1;
function UPa(a, d, e, f) {
  var g = b;
  b += 3;
  var h,
    i,
    j = g + 1,
    l = g + 2,
    a = a + 7;
  h = 0;
  var m = (h | 0) < (f | 0);
  a: do {
    if (m) {
      for (;;) {
        if (
          ((i = (h << 2) + d),
          (k[g] = 0 <= k[i] ? k[a] : -k[a]),
          (k[j] = 0 <= k[i + 1] ? k[a + 1] : -k[a + 1]),
          (k[l] = 0 <= k[i + 2] ? k[a + 2] : -k[a + 2]),
          pe((h << 2) + e, g, j, l),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
UPa.X = 1;
function VPa(a, d, e) {
  var f = b;
  b += 18;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8,
    r = f + 9,
    s = f + 10,
    t = f + 11,
    w = f + 12,
    x = f + 13,
    y = f + 14,
    z = f + 15,
    A = f + 16,
    C = f + 17;
  $1 = a;
  0 == (d | 0)
    ? ((k[f] = 1), (k[g] = 0), (k[h] = 0), pe(e, f, g, h))
    : 1 == (d | 0)
      ? ((k[i] = -1), (k[j] = 0), (k[l] = 0), pe(e, i, j, l))
      : 2 == (d | 0)
        ? ((k[m] = 0), (k[n] = 1), (k[p] = 0), pe(e, m, n, p))
        : 3 == (d | 0)
          ? ((k[r] = 0), (k[s] = -1), (k[t] = 0), pe(e, r, s, t))
          : 4 == (d | 0)
            ? ((k[w] = 0), (k[x] = 0), (k[y] = 1), pe(e, w, x, y))
            : 5 == (d | 0) &&
              ((k[z] = 0), (k[A] = 0), (k[C] = -1), pe(e, z, A, C));
  b = f;
}
VPa.X = 1;
function WPa(a, d, e, f) {
  var g, h;
  h = g = 0;
  0 == (d | 0)
    ? ((g = 0), (h = 1))
    : 1 == (d | 0)
      ? ((g = 0), (h = 2))
      : 2 == (d | 0)
        ? ((g = 1), (h = 3))
        : 3 == (d | 0)
          ? ((g = 2), (h = 3))
          : 4 == (d | 0)
            ? ((g = 0), (h = 4))
            : 5 == (d | 0)
              ? ((g = 1), (h = 5))
              : 6 == (d | 0)
                ? ((g = 2), (h = 6))
                : 7 == (d | 0)
                  ? ((g = 3), (h = 7))
                  : 8 == (d | 0)
                    ? ((g = 4), (h = 5))
                    : 9 == (d | 0)
                      ? ((g = 4), (h = 6))
                      : 10 == (d | 0)
                        ? ((g = 5), (h = 7))
                        : 11 == (d | 0) && ((g = 6), (h = 7));
  v[c[c[a] + 25]](a, g, e);
  v[c[c[a] + 25]](a, h, f);
}
WPa.X = 1;
function XPa(a, d, e) {
  var f = b;
  b += 11;
  var g = f + 4,
    h = f + 8,
    i = f + 9,
    j = f + 10;
  nV(f, a);
  k[h] = k[f] * ((1 - (d & 1)) | 0) - k[f] * ((d & 1) | 0);
  k[i] =
    k[f + 1] * ((1 - ((d & 2) >> 1)) | 0) - k[f + 1] * (((d & 2) >> 1) | 0);
  k[j] =
    k[f + 2] * ((1 - ((d & 4) >> 2)) | 0) - k[f + 2] * (((d & 4) >> 2) | 0);
  H(g, h, i, j);
  c[e] = c[g];
  k[e] = k[g];
  c[e + 1] = c[g + 1];
  k[e + 1] = k[g + 1];
  c[e + 2] = c[g + 2];
  k[e + 2] = k[g + 2];
  c[e + 3] = c[g + 3];
  k[e + 3] = k[g + 3];
  b = f;
}
XPa.X = 1;
function YPa(a, d, e, f) {
  var g = b;
  b += 16;
  var h = g + 4,
    i = g + 8,
    j = g + 12;
  v[c[c[a] + 29]](a, g, f);
  H(h, g, g + 1, g + 2);
  c[d] = c[h];
  k[d] = k[h];
  c[d + 1] = c[h + 1];
  k[d + 1] = k[h + 1];
  c[d + 2] = c[h + 2];
  k[d + 2] = k[h + 2];
  c[d + 3] = c[h + 3];
  k[d + 3] = k[h + 3];
  f = c[c[a] + 15];
  WP(j, d);
  v[f](i, a, j);
  c[e] = c[i];
  k[e] = k[i];
  c[e + 1] = c[i + 1];
  k[e + 1] = k[i + 1];
  c[e + 2] = c[i + 2];
  k[e + 2] = k[i + 2];
  c[e + 3] = c[i + 3];
  k[e + 3] = k[i + 3];
  b = g;
}
YPa.X = 1;
function ZPa(a, d, e) {
  var f = b;
  b += 4;
  a += 7;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  d =
    (k[d] <= k[f] + e
      ? k[d] >= -k[f] - e
        ? k[d + 1] <= k[f + 1] + e
          ? k[d + 1] >= -k[f + 1] - e
            ? k[d + 2] <= k[f + 2] + e ? k[d + 2] >= -k[f + 2] - e : 0
            : 0
          : 0
        : 0
      : 0) & 1;
  b = f;
  return d;
}
ZPa.X = 1;
function $Pa(a, d, e) {
  var f = b;
  b += 28;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11,
    r = f + 12,
    s = f + 13,
    t = f + 14,
    w = f + 15,
    x = f + 16,
    y = f + 17,
    z = f + 18,
    A = f + 19,
    C = f + 20,
    B = f + 21,
    K = f + 22,
    E = f + 23,
    G = f + 24,
    M = f + 25,
    L = f + 26,
    F = f + 27,
    a = a + 7;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  0 == (e | 0)
    ? ((k[g] = 1), (k[h] = 0), (k[i] = 0), (k[j] = -k[f]), $B(d, g, h, i, j))
    : 1 == (e | 0)
      ? ((k[l] = -1), (k[m] = 0), (k[n] = 0), (k[p] = -k[f]), $B(d, l, m, n, p))
      : 2 == (e | 0)
        ? ((k[r] = 0),
          (k[s] = 1),
          (k[t] = 0),
          (k[w] = -k[f + 1]),
          $B(d, r, s, t, w))
        : 3 == (e | 0)
          ? ((k[x] = 0),
            (k[y] = -1),
            (k[z] = 0),
            (k[A] = -k[f + 1]),
            $B(d, x, y, z, A))
          : 4 == (e | 0)
            ? ((k[C] = 0),
              (k[B] = 0),
              (k[K] = 1),
              (k[E] = -k[f + 2]),
              $B(d, C, B, K, E))
            : 5 == (e | 0) &&
              ((k[G] = 0),
              (k[M] = 0),
              (k[L] = -1),
              (k[F] = -k[f + 2]),
              $B(d, G, M, L, F));
  b = f;
}
$Pa.X = 1;
function yR(a, d, e, f) {
  e &= 1;
  f &= 1;
  NX(a, d);
  c[a] = OX + 2;
  c[a + 13] = 0;
  c[a + 14] = 0;
  c[a + 15] = e & 1;
  c[a + 16] = 0;
  c[a + 1] = 21;
  f & 1 && hR(a);
}
yR.X = 1;
function hR(a) {
  if (c[a + 16] & 1) {
    var d = c[a + 13];
    v[c[c[d]]](d);
    yh(c[a + 13]);
  }
  d = TPa(0, Ue(172, 16));
  xp(d);
  c[a + 13] = d;
  cp(c[a + 13], c[a + 12], c[a + 15] & 1, a + 4, a + 8);
  c[a + 16] = 1;
}
hR.X = 1;
function BR(a, d, e, f, g, h) {
  e &= 1;
  h &= 1;
  NX(a, d);
  c[a] = OX + 2;
  c[a + 13] = 0;
  c[a + 14] = 0;
  c[a + 15] = e & 1;
  c[a + 16] = 0;
  c[a + 1] = 21;
  h & 1 &&
    ((h = TPa(0, Ue(172, 16))),
    xp(h),
    (c[a + 13] = h),
    cp(c[a + 13], d, c[a + 15] & 1, f, g),
    (c[a + 16] = 1));
}
BR.X = 1;
function lR(a, d, e) {
  dp(c[a + 13], c[a + 12], d, e);
  hp(a + 4, d);
  gp(a + 8, e);
}
lR.X = 1;
function aR(a, d, e) {
  ip(c[a + 13], c[a + 12], d, e);
  jR(a);
}
aR.X = 1;
function aQa(a) {
  bQa(a);
  yh(a);
}
aQa.X = 1;
function cQa() {
  return D.Vd;
}
cQa.X = 1;
function dQa() {
  return 60;
}
dQa.X = 1;
function PX(a) {
  c[a] = eQa + 2;
}
PX.X = 1;
function fQa(a, d) {
  k[a + 3] = d;
}
fQa.X = 1;
function gQa(a) {
  return k[a + 3];
}
gQa.X = 1;
function bQa(a) {
  c[a] = OX + 2;
  if (c[a + 16] & 1) {
    var d = c[a + 13];
    v[c[c[d]]](d);
    yh(c[a + 13]);
  }
}
bQa.X = 1;
function cR(a, d, e, f) {
  var g = b;
  b += 3;
  hQa(g, d, c[a + 12]);
  ap(c[a + 13], g, e, f);
  b = g;
}
cR.X = 1;
function mR(a, d, e, f, g, h) {
  var i = b;
  b += 3;
  iQa(i, d, c[a + 12]);
  sp(c[a + 13], i, e, f, g, h);
  b = i;
}
mR.X = 1;
function jQa(a, d, e, f) {
  var g = b;
  b += 15;
  kQa(g, d, c[a + 12]);
  $o(c[a + 13], g, e, f);
  b = g;
}
jQa.X = 1;
function lQa(a, d) {
  var e = b;
  b += 4;
  N(e, v[c[c[a] + 7]](a), d);
  1.1920928955078125e-7 < Um(e) && (QX(a, d), hR(a));
  b = e;
}
lQa.X = 1;
function wR(a, d, e) {
  var f = b;
  b += 4;
  c[a + 13] = d;
  c[a + 16] = 0;
  N(f, v[c[c[a] + 7]](a), e);
  1.1920928955078125e-7 < Um(f) && QX(a, e);
  b = f;
}
wR.X = 1;
function mQa(a, d, e) {
  var f, g;
  HX(a, d, e);
  f = c[a + 12];
  v[c[c[f] + 14]](f, d + 6, e);
  k[d + 19] = k[a + 3];
  0 != (c[a + 13] | 0)
    ? 0 != ((v[c[c[e] + 13]](e) & 1) | 0)
      ? (f = 7)
      : ((f = v[c[c[e] + 6]](e, c[a + 13])),
        0 != (f | 0)
          ? ((c[d + 16] = f), (c[d + 17] = 0))
          : ((c[d + 16] = v[c[c[e] + 7]](e, c[a + 13])),
            (c[d + 17] = 0),
            (f = c[a + 13]),
            (f = v[c[c[f] + 3]](f)),
            (f = v[c[c[e] + 4]](e, f, 1)),
            (g = c[a + 13]),
            (g = v[c[c[g] + 4]](g, c[f + 2], e)),
            v[c[c[e] + 5]](e, f, g, 1213612625, c[a + 13])),
        (f = 8))
    : (f = 7);
  7 == f && ((c[d + 16] = 0), (c[d + 17] = 0));
  0 != (c[a + 14] | 0)
    ? 0 != ((v[c[c[e] + 13]](e) & 2) | 0)
      ? (f = 13)
      : ((f = v[c[c[e] + 6]](e, c[a + 14])),
        0 != (f | 0)
          ? (c[d + 18] = f)
          : ((c[d + 18] = v[c[c[e] + 7]](e, c[a + 14])),
            (f = c[a + 14]),
            (f = v[c[c[f] + 2]](f)),
            (f = v[c[c[e] + 4]](e, f, 1)),
            (g = c[a + 14]),
            (g = v[c[c[g] + 3]](g, c[f + 2], e)),
            v[c[c[e] + 5]](e, f, g, 1346456916, c[a + 14])),
        (f = 14))
    : (f = 13);
  13 == f && (c[d + 18] = 0);
  return D.me;
}
mQa.X = 1;
function nQa(a, d) {
  var e, f;
  0 != (c[a + 13] | 0) &&
    ((e = c[a + 13]),
    (e = v[c[c[e] + 3]](e)),
    (e = v[c[c[d] + 4]](d, e, 1)),
    (f = c[a + 13]),
    (f = v[c[c[f] + 4]](f, c[e + 2], d)),
    v[c[c[d] + 5]](d, e, f, 1213612625, c[a + 13]));
}
nQa.X = 1;
function oQa(a, d) {
  var e, f;
  0 != (c[a + 14] | 0) &&
    ((e = c[a + 14]),
    (e = v[c[c[e] + 2]](e)),
    (e = v[c[c[d] + 4]](d, e, 1)),
    (f = c[a + 14]),
    (f = v[c[c[f] + 3]](f, c[e + 2], d)),
    v[c[c[d] + 5]](d, e, f, 1346456916, c[a + 14]));
}
oQa.X = 1;
function pQa(a, d, e) {
  v[c[c[d] + 16]](a, d, e);
}
pQa.X = 1;
function qQa() {}
qQa.X = 1;
function kQa(a, d, e) {
  PX(a);
  c[a] = rQa + 2;
  c[a + 1] = e;
  c[a + 2] = d;
}
kQa.X = 1;
function sQa(a) {
  xe(a);
}
sQa.X = 1;
function tQa(a, d, e) {
  var f = b;
  b += 22;
  var g = f + 2,
    h = f + 3,
    i = f + 4,
    j = f + 5,
    l = f + 7,
    m,
    n,
    p = f + 8,
    r = f + 12,
    s = f + 13,
    t = f + 14,
    w = f + 15,
    x = f + 19,
    y = f + 20,
    z = f + 21;
  m = c[a + 1];
  v[c[c[m] + 4]](m, f, f + 1, g, h, i, j, f + 6, l, d);
  i = c[i] + c[j] * e;
  j = c[a + 1] + 1;
  m = 2;
  for (var A = a + 3, C = a + 3; ; ) {
    if (3 == (c[l] | 0)) {
      n = c[i + m] & 65535;
    } else {
      n = m;
      var B = i;
      n = 2 == (c[l] | 0) ? c[B + n] : c[B + n] & 255;
    }
    n = c[f] + c[h] * n;
    0 == (c[g] | 0)
      ? ((k[r] = k[n] * k[j]),
        (k[s] = k[n + 1] * k[j + 1]),
        (k[t] = k[n + 2] * k[j + 2]),
        H(p, r, s, t),
        (n = (m << 2) + A),
        (c[n] = c[p]),
        (k[n] = k[p]),
        (c[n + 1] = c[p + 1]),
        (k[n + 1] = k[p + 1]),
        (c[n + 2] = c[p + 2]),
        (k[n + 2] = k[p + 2]),
        (c[n + 3] = c[p + 3]),
        (k[n + 3] = k[p + 3]))
      : ((k[x] = k[n] * k[j]),
        (k[y] = k[n + 1] * k[j + 1]),
        (k[z] = k[n + 2] * k[j + 2]),
        H(w, x, y, z),
        (n = (m << 2) + C),
        (c[n] = c[w]),
        (k[n] = k[w]),
        (c[n + 1] = c[w + 1]),
        (k[n + 1] = k[w + 1]),
        (c[n + 2] = c[w + 2]),
        (k[n + 2] = k[w + 2]),
        (c[n + 3] = c[w + 3]),
        (k[n + 3] = k[w + 3]));
    m = n = m - 1;
    if (!(0 <= (n | 0))) {
      break;
    }
  }
  g = c[a + 2];
  v[c[c[g] + 2]](g, a + 3, d, e);
  a = c[a + 1];
  v[c[c[a] + 6]](a, d);
  b = f;
}
tQa.X = 1;
function uQa() {}
uQa.X = 1;
function vQa(a) {
  xe(a);
}
vQa.X = 1;
function wQa() {}
wQa.X = 1;
function iQa(a, d, e) {
  PX(a);
  c[a] = xQa + 2;
  c[a + 1] = e;
  c[a + 2] = d;
}
iQa.X = 1;
function yQa(a) {
  xe(a);
}
yQa.X = 1;
function zQa(a, d, e) {
  var f = b;
  b += 34;
  var g = f + 12,
    h = f + 14,
    i = f + 15,
    j = f + 16,
    l = f + 17,
    m = f + 19,
    n,
    p,
    r = f + 20,
    s = f + 24,
    t = f + 25,
    w = f + 26,
    x = f + 27,
    y = f + 31,
    z = f + 32,
    A = f + 33;
  n = c[a + 1];
  v[c[c[n] + 4]](n, g, f + 13, h, i, j, l, f + 18, m, d);
  j = c[j] + c[l] * e;
  l = c[a + 1] + 1;
  for (n = 2; ; ) {
    p = n;
    var C = j;
    p = c[g] + c[i] * (3 == (c[m] | 0) ? c[C + p] & 65535 : c[C + p]);
    0 == (c[h] | 0)
      ? ((k[s] = k[p] * k[l]),
        (k[t] = k[p + 1] * k[l + 1]),
        (k[w] = k[p + 2] * k[l + 2]),
        H(r, s, t, w),
        (p = (n << 2) + f),
        (c[p] = c[r]),
        (k[p] = k[r]),
        (c[p + 1] = c[r + 1]),
        (k[p + 1] = k[r + 1]),
        (c[p + 2] = c[r + 2]),
        (k[p + 2] = k[r + 2]),
        (c[p + 3] = c[r + 3]),
        (k[p + 3] = k[r + 3]))
      : ((k[y] = k[p] * k[l]),
        (k[z] = k[p + 1] * k[l + 1]),
        (k[A] = k[p + 2] * k[l + 2]),
        H(x, y, z, A),
        (p = (n << 2) + f),
        (c[p] = c[x]),
        (k[p] = k[x]),
        (c[p + 1] = c[x + 1]),
        (k[p + 1] = k[x + 1]),
        (c[p + 2] = c[x + 2]),
        (k[p + 2] = k[x + 2]),
        (c[p + 3] = c[x + 3]),
        (k[p + 3] = k[x + 3]));
    n = p = n - 1;
    if (!(0 <= (p | 0))) {
      break;
    }
  }
  g = c[a + 2];
  v[c[c[g] + 2]](g, f, d, e);
  a = c[a + 1];
  v[c[c[a] + 6]](a, d);
  b = f;
}
zQa.X = 1;
function AQa() {}
AQa.X = 1;
function hQa(a, d, e) {
  PX(a);
  c[a] = BQa + 2;
  c[a + 1] = e;
  c[a + 2] = d;
}
hQa.X = 1;
function CQa(a) {
  xe(a);
}
CQa.X = 1;
function DQa(a, d, e) {
  var f = b;
  b += 34;
  var g = f + 12,
    h = f + 14,
    i = f + 15,
    j = f + 16,
    l = f + 17,
    m = f + 19,
    n,
    p,
    r = f + 20,
    s = f + 24,
    t = f + 25,
    w = f + 26,
    x = f + 27,
    y = f + 31,
    z = f + 32,
    A = f + 33;
  n = c[a + 1];
  v[c[c[n] + 4]](n, g, f + 13, h, i, j, l, f + 18, m, d);
  j = c[j] + c[l] * e;
  l = c[a + 1] + 1;
  for (n = 2; ; ) {
    p = n;
    var C = j;
    p = c[g] + c[i] * (3 == (c[m] | 0) ? c[C + p] & 65535 : c[C + p]);
    0 == (c[h] | 0)
      ? ((k[s] = k[p] * k[l]),
        (k[t] = k[p + 1] * k[l + 1]),
        (k[w] = k[p + 2] * k[l + 2]),
        H(r, s, t, w),
        (p = (n << 2) + f),
        (c[p] = c[r]),
        (k[p] = k[r]),
        (c[p + 1] = c[r + 1]),
        (k[p + 1] = k[r + 1]),
        (c[p + 2] = c[r + 2]),
        (k[p + 2] = k[r + 2]),
        (c[p + 3] = c[r + 3]),
        (k[p + 3] = k[r + 3]))
      : ((k[y] = k[p] * k[l]),
        (k[z] = k[p + 1] * k[l + 1]),
        (k[A] = k[p + 2] * k[l + 2]),
        H(x, y, z, A),
        (p = (n << 2) + f),
        (c[p] = c[x]),
        (k[p] = k[x]),
        (c[p + 1] = c[x + 1]),
        (k[p + 1] = k[x + 1]),
        (c[p + 2] = c[x + 2]),
        (k[p + 2] = k[x + 2]),
        (c[p + 3] = c[x + 3]),
        (k[p + 3] = k[x + 3]));
    n = p = n - 1;
    if (!(0 <= (p | 0))) {
      break;
    }
  }
  g = c[a + 2];
  v[c[c[g] + 2]](g, f, d, e);
  a = c[a + 1];
  v[c[c[a] + 6]](a, d);
  b = f;
}
DQa.X = 1;
function Te(a, d, e) {
  var f = b;
  b += 2;
  var g = f + 1;
  k[f] = d;
  yW(a);
  c[a] = RX + 2;
  c[a + 1] = 10;
  c[a + 13] = 1;
  k[g] = 0.5 * e;
  pe(a + 7, f, g, f);
  b = f;
}
Te.X = 1;
function EQa(a, d, e) {
  var f = b;
  b += 72;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 7,
    l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11,
    r = f + 15,
    s = f + 16,
    t = f + 20,
    w = f + 21,
    x = f + 22,
    y = f + 23,
    z = f + 27,
    A = f + 31,
    C = f + 35,
    B = f + 39,
    K = f + 43,
    E = f + 44,
    G = f + 48,
    M = f + 49,
    L = f + 50,
    F = f + 51,
    I = f + 55,
    R = f + 59,
    O = f + 63,
    Z = f + 67,
    P = f + 71;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  H(a, f, g, h);
  g = -0xde0b6b000000000;
  c[i] = c[e];
  k[i] = k[e];
  c[i + 1] = c[e + 1];
  k[i + 1] = k[e + 1];
  c[i + 2] = c[e + 2];
  k[i + 2] = k[e + 2];
  c[i + 3] = c[e + 3];
  k[i + 3] = k[e + 3];
  e = Um(i);
  9999999747378752e-20 > e
    ? ((k[j] = 1), (k[l] = 0), (k[m] = 0), pe(i, j, l, m))
    : ((k[n] = 1 / ec(e)), LC(i, n));
  k[r] = cf(d);
  k[t] = 0;
  k[w] = 0;
  k[x] = 0;
  H(s, t, w, x);
  k[s + Ke(d)] = gf(d);
  ig(C, i, d + 3);
  Q(A, C, r);
  wn(z, s, A);
  k[K] = v[c[c[d] + 11]](d);
  Q(B, i, K);
  N(y, z, B);
  c[p] = c[y];
  k[p] = k[y];
  c[p + 1] = c[y + 1];
  k[p + 1] = k[y + 1];
  c[p + 2] = c[y + 2];
  k[p + 2] = k[y + 2];
  c[p + 3] = c[y + 3];
  k[p + 3] = k[y + 3];
  j = J(i, p);
  j > g &&
    ((g = j),
    (c[a] = c[p]),
    (k[a] = k[p]),
    (c[a + 1] = c[p + 1]),
    (k[a + 1] = k[p + 1]),
    (c[a + 2] = c[p + 2]),
    (k[a + 2] = k[p + 2]),
    (c[a + 3] = c[p + 3]),
    (k[a + 3] = k[p + 3]));
  k[G] = 0;
  k[M] = 0;
  k[L] = 0;
  H(E, G, M, L);
  k[E + Ke(d)] = -gf(d);
  ig(O, i, d + 3);
  Q(R, O, r);
  wn(I, E, R);
  k[P] = v[c[c[d] + 11]](d);
  Q(Z, i, P);
  N(F, I, Z);
  c[p] = c[F];
  k[p] = k[F];
  c[p + 1] = c[F + 1];
  k[p + 1] = k[F + 1];
  c[p + 2] = c[F + 2];
  k[p + 2] = k[F + 2];
  c[p + 3] = c[F + 3];
  k[p + 3] = k[F + 3];
  j = J(i, p);
  j > g &&
    ((c[a] = c[p]),
    (k[a] = k[p]),
    (c[a + 1] = c[p + 1]),
    (k[a + 1] = k[p + 1]),
    (c[a + 2] = c[p + 2]),
    (k[a + 2] = k[p + 2]),
    (c[a + 3] = c[p + 3]),
    (k[a + 3] = k[p + 3]));
  b = f;
}
EQa.X = 1;
function FQa(a, d, e, f) {
  var g = b;
  b += 61;
  var h,
    i,
    j,
    l = g + 1,
    m,
    n = g + 5,
    p = g + 9,
    r = g + 10,
    s = g + 11,
    t = g + 12,
    w = g + 16,
    x = g + 20,
    y = g + 24,
    z = g + 28,
    A = g + 32,
    C = g + 33,
    B = g + 37,
    K = g + 38,
    E = g + 39,
    G = g + 40,
    M = g + 44,
    L = g + 48,
    F = g + 52,
    I = g + 56,
    R = g + 60;
  k[g] = cf(a);
  h = 0;
  var O = (h | 0) < (f | 0);
  a: do {
    if (O) {
      for (
        var Z = a + 3,
          P = a,
          S = P,
          da = l,
          V = t,
          ba = l,
          $ = a + 3,
          Y = a,
          la = Y,
          ka = l,
          ja = G,
          ea = l;
        ;

      ) {
        if (
          ((i = -0xde0b6b000000000),
          (j = (h << 2) + d),
          (k[p] = 0),
          (k[r] = 0),
          (k[s] = 0),
          H(n, p, r, s),
          (k[n + Ke(a)] = gf(a)),
          ig(y, j, Z),
          Q(x, y, g),
          wn(w, n, x),
          (k[A] = v[c[c[S] + 11]](P)),
          Q(z, j, A),
          N(t, w, z),
          (c[da] = c[V]),
          (k[da] = k[V]),
          (c[da + 1] = c[V + 1]),
          (k[da + 1] = k[V + 1]),
          (c[da + 2] = c[V + 2]),
          (k[da + 2] = k[V + 2]),
          (c[da + 3] = c[V + 3]),
          (k[da + 3] = k[V + 3]),
          (m = J(j, l)),
          m > i &&
            ((i = m),
            (m = (h << 2) + e),
            (c[m] = c[ba]),
            (k[m] = k[ba]),
            (c[m + 1] = c[ba + 1]),
            (k[m + 1] = k[ba + 1]),
            (c[m + 2] = c[ba + 2]),
            (k[m + 2] = k[ba + 2]),
            (c[m + 3] = c[ba + 3]),
            (k[m + 3] = k[ba + 3])),
          (k[B] = 0),
          (k[K] = 0),
          (k[E] = 0),
          H(C, B, K, E),
          (k[C + Ke(a)] = -gf(a)),
          ig(F, j, $),
          Q(L, F, g),
          wn(M, C, L),
          (k[R] = v[c[c[la] + 11]](Y)),
          Q(I, j, R),
          N(G, M, I),
          (c[ka] = c[ja]),
          (k[ka] = k[ja]),
          (c[ka + 1] = c[ja + 1]),
          (k[ka + 1] = k[ja + 1]),
          (c[ka + 2] = c[ja + 2]),
          (k[ka + 2] = k[ja + 2]),
          (c[ka + 3] = c[ja + 3]),
          (k[ka + 3] = k[ja + 3]),
          (m = J(j, l)),
          m > i &&
            ((i = (h << 2) + e),
            (c[i] = c[ea]),
            (k[i] = k[ea]),
            (c[i + 1] = c[ea + 1]),
            (k[i + 1] = k[ea + 1]),
            (c[i + 2] = c[ea + 2]),
            (k[i + 2] = k[ea + 2]),
            (c[i + 3] = c[ea + 3]),
            (k[i + 3] = k[ea + 3])),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
FQa.X = 1;
function GQa(a, d, e) {
  var f = b;
  b += 21;
  var g = f + 16,
    h = f + 17,
    i;
  eQ(f);
  k[g] = cf(a);
  H(h, g, g, g);
  g = h + Ke(a);
  k[g] += gf(a);
  i = 2 * (k[h] + 0.03999999910593033);
  a = 2 * (k[h + 1] + 0.03999999910593033);
  g = 2 * (k[h + 2] + 0.03999999910593033);
  h = i * i;
  a *= a;
  g *= g;
  d *= 0.0833333283662796;
  k[e] = d * (a + g);
  k[e + 1] = d * (h + g);
  k[e + 2] = d * (h + a);
  b = f;
}
GQa.X = 1;
function oEa(a, d, e) {
  var f = b;
  b += 2;
  var g = f + 1;
  k[f] = d;
  HQa(a);
  c[a] = IQa + 2;
  c[a + 13] = 0;
  k[g] = 0.5 * e;
  pe(a + 7, g, f, f);
  b = f;
}
oEa.X = 1;
function JQa() {
  return D.Ve;
}
JQa.X = 1;
function KQa() {
  return 60;
}
KQa.X = 1;
function LQa() {
  return 0;
}
LQa.X = 1;
function MQa() {}
MQa.X = 1;
function NQa() {
  return D.ee;
}
NQa.X = 1;
function OQa() {
  return D.Ne;
}
OQa.X = 1;
function PQa(a) {
  c[a] = QQa + 2;
}
PQa.X = 1;
function ZW(a, d) {
  c[a] = RQa + 2;
  c[a + 1] = c[d];
}
ZW.X = 1;
function fs(a, d, e, f) {
  c[a + 36 * d + e + 50] = f;
}
fs.X = 1;
function HQa(a) {
  yW(a);
  c[a] = RX + 2;
  c[a + 1] = 10;
}
HQa.X = 1;
function wGa(a, d, e) {
  var f = b;
  b += 2;
  var g = f + 1;
  k[f] = d;
  HQa(a);
  c[a] = SQa + 2;
  c[a + 13] = 2;
  k[g] = 0.5 * e;
  pe(a + 7, f, f, g);
  b = f;
}
wGa.X = 1;
function TQa() {}
TQa.X = 1;
function UQa(a) {
  yh(a);
}
UQa.X = 1;
function VQa(a, d, e, f) {
  var g = b;
  b += 45;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = g + 14,
    s = g + 26,
    t = g + 30,
    w = g + 34,
    x = g + 35,
    y = g + 36,
    z = g + 37,
    A = g + 41;
  k[h] = cf(a);
  k[i] = cf(a);
  k[j] = cf(a);
  H(g, h, i, j);
  k[g + c[a + 13]] = cf(a) + gf(a);
  k[m] = v[c[c[a] + 11]](a);
  k[n] = v[c[c[a] + 11]](a);
  k[p] = v[c[c[a] + 11]](a);
  H(l, m, n, p);
  xn(g, l);
  qc(r, d);
  a = d + 12;
  c[s] = c[a];
  k[s] = k[a];
  c[s + 1] = c[a + 1];
  k[s + 1] = k[a + 1];
  c[s + 2] = c[a + 2];
  k[s + 2] = k[a + 2];
  c[s + 3] = c[a + 3];
  k[s + 3] = k[a + 3];
  k[w] = J(0 + r, g);
  k[x] = J(4 + r, g);
  k[y] = J(8 + r, g);
  H(t, w, x, y);
  N(z, s, t);
  c[e] = c[z];
  k[e] = k[z];
  c[e + 1] = c[z + 1];
  k[e + 1] = k[z + 1];
  c[e + 2] = c[z + 2];
  k[e + 2] = k[z + 2];
  c[e + 3] = c[z + 3];
  k[e + 3] = k[z + 3];
  wn(A, s, t);
  c[f] = c[A];
  k[f] = k[A];
  c[f + 1] = c[A + 1];
  k[f + 1] = k[A + 1];
  c[f + 2] = c[A + 2];
  k[f + 2] = k[A + 2];
  c[f + 3] = c[A + 3];
  k[f + 3] = k[A + 3];
  b = g;
}
VQa.X = 1;
function WQa(a, d) {
  var e = b;
  b += 23;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 19;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  eX(j, i, a + 3);
  FX(a, d);
  ig(m, j, a + 3);
  N(l, m, e);
  f = a + 7;
  c[f] = c[l];
  k[f] = k[l];
  c[f + 1] = c[l + 1];
  k[f + 1] = k[l + 1];
  c[f + 2] = c[l + 2];
  k[f + 2] = k[l + 2];
  c[f + 3] = c[l + 3];
  k[f + 3] = k[l + 3];
  b = e;
}
WQa.X = 1;
function XQa(a, d) {
  var e = b;
  b += 22;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 16,
    n = e + 17,
    p = e + 18;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  fW(a, d);
  k[l] = v[c[c[a] + 11]](a);
  k[m] = v[c[c[a] + 11]](a);
  k[n] = v[c[c[a] + 11]](a);
  H(j, l, m, n);
  N(p, i, j);
  f = a + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  b = e;
}
XQa.X = 1;
function YQa(a, d, e) {
  GX(a, d, e);
  c[d + 16] = c[a + 13];
  return D.Ae;
}
YQa.X = 1;
function ZQa() {}
ZQa.X = 1;
function $Qa(a) {
  yh(a);
}
$Qa.X = 1;
function aRa() {}
aRa.X = 1;
function bRa(a) {
  yh(a);
}
bRa.X = 1;
function cRa() {}
cRa.X = 1;
function dRa(a) {
  xe(a);
}
dRa.X = 1;
function os(a, d, e) {
  var f = b;
  b += 40;
  var g, h;
  g = c[c[a]];
  h = c[c[a + 1]];
  if (
    v[c[c[d] + 6]](d, g, h) &&
    (0 == (c[a + 2] | 0) && (c[a + 2] = v[c[c[d] + 2]](d, g, h, 0)),
    0 != (c[a + 2] | 0))
  ) {
    if ((AI(f, g, h), (a = c[a + 2]), 1 == (c[e + 2] | 0))) {
      v[c[c[a] + 2]](a, g, h, e, f);
    } else {
      (g = v[c[c[a] + 3]](a, g, h, e, f)), k[e + 3] > g && (k[e + 3] = g);
    }
  }
  b = f;
}
os.X = 1;
function eRa() {}
eRa.X = 1;
function fRa(a) {
  gRa(a);
  xe(a);
}
fRa.X = 1;
function gRa(a) {
  c[a] = SX + 2;
  TX(a + 2);
}
gRa.X = 1;
function hRa(a, d, e) {
  var f = b;
  b += 5;
  var g, h, i;
  i = f + 1;
  var j;
  j = f + 2;
  g = f + 3;
  var l,
    m = f + 4;
  c[UX] += 1;
  0 != ((c[a + 1] & 2) | 0)
    ? ((l = bi(d)),
      (k[f] = v[c[c[l] + 5]](l, k[VX])),
      (l = bi(e)),
      (k[i] = v[c[c[l] + 5]](l, k[VX])),
      (i = k[WX(f, i)]))
    : (i = k[VX]);
  k[j] = ni(d);
  k[g] = ni(e);
  j = k[WX(j, g)];
  l = 0;
  0 != (iRa(c[a + 49]) | 0)
    ? ((l = jRa(c[a + 49], 1140)), (g = 10))
    : 0 == ((c[a + 1] & 4) | 0)
      ? ((l = Ue(1140, 16)), (g = 10))
      : ((h = 0), (g = 11));
  10 == g &&
    ((h = l),
    yk(h, d, e, 0, i, j),
    (c[m] = h),
    (c[c[m] + 284] = AX(a + 2)),
    CX(a + 2, m),
    (h = c[m]));
  b = f;
  return h;
}
hRa.X = 1;
function Sr(a, d) {
  var e, f;
  PQa(a);
  c[a] = SX + 2;
  c[a + 1] = 2;
  XX(a + 2);
  yI(a + 7);
  c[a + 1346] = d;
  Tr(a, 2);
  c[a + 48] = v[c[c[d] + 3]](d);
  c[a + 49] = v[c[c[d] + 2]](d);
  e = 0;
  var g = a + 1346,
    h = a + 50;
  for (f = 0; 36 > (f | 0); ) {
    for (var i = (f = 0); 36 > (i | 0); ) {
      (i = c[g]),
        (c[h + 36 * e + f] = v[c[c[i] + 5]](i, e, f)),
        (f = i = f + 1);
    }
    e = f = e + 1;
  }
}
Sr.X = 1;
function kRa() {}
kRa.X = 1;
function WX(a, d) {
  return k[a] < k[d] ? a : d;
}
WX.X = 1;
function YX(a) {
  c[a] = lRa + 2;
}
YX.X = 1;
function iRa(a) {
  return c[a + 2];
}
iRa.X = 1;
function jRa(a, d) {
  var e;
  $2 = d;
  e = c[a + 3];
  c[a + 3] = c[c[a + 3]];
  var f = a + 2;
  c[f] -= 1;
  return e;
}
jRa.X = 1;
function mRa(a, d, e) {
  var f;
  f = c[c[a + 3] + d];
  c[c[a + 3] + d] = c[c[a + 3] + e];
  c[c[a + 3] + e] = f;
}
mRa.X = 1;
function ZX(a, d) {
  return c[a + 3] + d;
}
ZX.X = 1;
function nRa(a) {
  a += 1;
  c[a] -= 1;
}
nRa.X = 1;
function oRa(a, d) {
  var e, f;
  0 != (d | 0)
    ? d >>> 0 >= c[a + 4] >>> 0
      ? d >>> 0 < (c[a + 4] + c[a] * c[a + 1]) >>> 0
        ? ((f = 1), (e = 7))
        : (e = 6)
      : (e = 6)
    : (e = 6);
  6 == e && (f = 0);
  return f;
}
oRa.X = 1;
function pRa(a, d) {
  if (0 != (d | 0)) {
    c[d] = c[a + 3];
    c[a + 3] = d;
    var e = a + 2;
    c[e] += 1;
  }
}
pRa.X = 1;
function qRa(a) {
  return c[a + 49];
}
qRa.X = 1;
function rRa(a) {
  return c[a + 49];
}
rRa.X = 1;
function XX(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
XX.X = 1;
function Li(a, d) {
  4 != (c[a + 54] | 0) && 5 != (c[a + 54] | 0) && (c[a + 54] = d);
}
Li.X = 1;
function Fi(a, d) {
  c[a + 54] = d;
}
Fi.X = 1;
function sRa(a, d) {
  $1 = a;
  Bk(d);
}
sRa.X = 1;
function tRa(a, d) {
  var e;
  c[UX] -= 1;
  v[c[c[a] + 5]](a, d);
  e = c[d + 284];
  mRa(a + 2, e, AX(a + 2) - 1);
  c[c[ZX(a + 2, e)] + 284] = e;
  nRa(a + 2);
  oRa(c[a + 49], d) ? pRa(c[a + 49], d) : yh(d);
}
tRa.X = 1;
function uRa(a, d, e, f) {
  var g = b;
  b += 2;
  ct(g);
  c[g] = a;
  c[g + 1] = f;
  a = c[a + 36 * Ie(bi(d)) + Ie(bi(e)) + 50];
  d = v[c[c[a] + 2]](a, g, d, e);
  b = g;
  return d;
}
uRa.X = 1;
function vRa(a, d, e) {
  $1 = a;
  a = (li(d) ? li(e) : 0) & 1;
  a = (a & 1 ? (Pi(d) ? Pi(e) ^ 1 : 1) : 0) & 1;
  return a & 1;
}
vRa.X = 1;
function wRa(a, d, e) {
  var f;
  $1 = a;
  f = 1;
  Ki(d) ? (a = 5) : Ki(e) ? (a = 5) : ((f = 0), (a = 7));
  5 == a && !Di(d, e) && (f = 0);
  return f & 1;
}
wRa.X = 1;
function xRa(a, d, e, f) {
  var g = b;
  b += 3;
  yRa(g, e, a);
  v[c[c[d] + 12]](d, g, f);
  b = g;
}
xRa.X = 1;
function zRa() {}
zRa.X = 1;
function ARa(a, d) {
  return 0 != (iRa(c[a + 48]) | 0) ? jRa(c[a + 48], d) : Ue(d, 16);
}
ARa.X = 1;
function BRa(a, d) {
  oRa(c[a + 48], d) ? pRa(c[a + 48], d) : yh(d);
}
BRa.X = 1;
function CRa(a) {
  return AX(a + 2);
}
CRa.X = 1;
function DRa(a, d) {
  return c[ZX(a + 2, d)];
}
DRa.X = 1;
function ERa(a) {
  return ZX(a + 2, 0);
}
ERa.X = 1;
function TX(a) {
  LOa(a, 0, AX(a));
  ROa(a);
  XX(a);
}
TX.X = 1;
function yRa(a, d, e) {
  YX(a);
  c[a] = FRa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
}
yRa.X = 1;
function GRa(a) {
  xe(a);
}
GRa.X = 1;
function HRa(a, d) {
  v[Ur(c[a + 2])](d, c[a + 2], c[a + 1]);
  return 0;
}
HRa.X = 1;
function IRa() {}
IRa.X = 1;
function JRa(a) {
  xe(a);
}
JRa.X = 1;
function Bi(a) {
  var d = b;
  b += 3;
  var e = d + 1,
    f = d + 2;
  c[a] = KRa + 2;
  k[d] = 1;
  k[e] = 1;
  k[f] = 1;
  H(a + 41, d, e, f);
  c[a + 45] = 0;
  k[a + 46] = 0xde0b6b000000000;
  e = a + 47;
  c[e] = 0;
  k[e] = 0;
  c[e + 1] = 0;
  k[e + 1] = 0;
  c[e + 2] = 0;
  k[e + 2] = 0;
  c[e + 3] = 0;
  k[e + 3] = 0;
  c[a + 51] = 1;
  c[a + 52] = -1;
  c[a + 53] = -1;
  c[a + 54] = 1;
  k[a + 55] = 0;
  k[a + 56] = 0.5;
  k[a + 57] = 0;
  c[a + 58] = 1;
  c[a + 59] = 0;
  k[a + 60] = 1;
  k[a + 61] = 0;
  k[a + 62] = 0;
  c[a + 63] = 0;
  eQ(a + 1);
  b = d;
}
Bi.X = 1;
function LRa(a) {
  yh(a);
}
LRa.X = 1;
function ui(a, d) {
  if (4 == (d & 1 ? 4 : 0 != ((c[a + 51] & 3) | 0) ? 5 : 4)) {
    Li(a, 1), (k[a + 55] = 0);
  }
}
ui.X = 1;
function MRa() {
  return 1;
}
MRa.X = 1;
function NRa() {
  return 248;
}
NRa.X = 1;
function ORa() {
  return 12;
}
ORa.X = 1;
function PRa(a, d) {
  c[a + 48] = d;
  c[a + 50] = d;
}
PRa.X = 1;
function $X(a, d) {
  return c[a + 3] + d;
}
$X.X = 1;
function QRa(a, d, e) {
  var f;
  gQ(a + 1, d + 4);
  gQ(a + 17, d + 20);
  Mb(a + 33, d + 36);
  Mb(a + 37, d + 40);
  Mb(a + 41, d + 44);
  c[d + 55] = c[a + 45];
  k[d + 48] = k[a + 46];
  c[d] = 0;
  c[d + 1] = v[c[c[e] + 7]](e, c[a + 48]);
  c[d + 2] = 0;
  c[d + 56] = c[a + 51];
  c[d + 57] = c[a + 52];
  c[d + 58] = c[a + 53];
  c[d + 59] = c[a + 54];
  c[d + 59] = c[a + 54];
  k[d + 49] = k[a + 55];
  k[d + 50] = k[a + 56];
  k[d + 51] = k[a + 57];
  c[d + 60] = c[a + 58];
  f = v[c[c[e] + 10]](e, a);
  c[d + 3] = v[c[c[e] + 7]](e, f);
  if (0 != (c[d + 3] | 0)) {
    v[c[c[e] + 12]](e, f);
  }
  k[d + 52] = k[a + 60];
  k[d + 53] = k[a + 61];
  k[d + 54] = k[a + 62];
  k[d + 54] = k[a + 62];
  c[d + 61] = c[a + 63];
  return D.bf;
}
QRa.X = 1;
function RRa(a, d) {
  var e, f;
  e = v[c[c[a] + 4]](a);
  e = v[c[c[d] + 4]](d, e, 1);
  f = v[c[c[a] + 5]](a, c[e + 2], d);
  v[c[c[d] + 5]](d, e, f, 1245859651, a);
}
RRa.X = 1;
function SRa(a, d, e) {
  var f = b;
  b += 37;
  var g = f + 16,
    h = f + 20,
    i = f + 24,
    j = f + 28,
    l = f + 32,
    m = f + 36;
  eQ(f);
  v[c[c[a] + 2]](a, f, g, h);
  N(i, h, g);
  k[e] = 0.5 * JB(i);
  wn(l, g, h);
  k[m] = 0.5;
  Q(j, l, m);
  c[d] = c[j];
  k[d] = k[j];
  c[d + 1] = c[j + 1];
  k[d + 1] = k[j + 1];
  c[d + 2] = c[j + 2];
  k[d + 2] = k[j + 2];
  c[d + 3] = c[j + 3];
  k[d + 3] = k[j + 3];
  b = f;
}
SRa.X = 1;
function TRa(a, d) {
  return v[c[c[a] + 4]](a) * d;
}
TRa.X = 1;
function URa(a) {
  var d = b;
  b += 5;
  var e = d + 4;
  v[c[c[a] + 3]](a, d, e);
  a = JB(d);
  k[e] += a;
  e = k[e];
  b = d;
  return e;
}
URa.X = 1;
function Tf(a, d, e, f, g, h, i) {
  var j = b;
  b += 24;
  var l = j + 1,
    m = j + 2,
    n = j + 3,
    p = j + 4,
    r = j + 5,
    s = j + 6,
    t = j + 7,
    w = j + 11,
    x = j + 12,
    y = j + 16,
    z = j + 20;
  k[j] = g;
  v[c[c[a] + 2]](a, d, h, i);
  k[l] = k[i];
  k[m] = k[i + 1];
  k[n] = k[i + 2];
  k[p] = k[h];
  k[r] = k[h + 1];
  k[s] = k[h + 2];
  Q(t, e, j);
  d = k[t];
  0 < k[t] ? (k[l] += d) : (k[p] += d);
  d = k[t + 1];
  0 < k[t + 1] ? (k[m] += d) : (k[r] += d);
  d = k[t + 2];
  0 < k[t + 2] ? (k[n] += d) : (k[s] += d);
  a = JB(f) * v[c[c[a] + 4]](a);
  k[w] = a * k[j];
  H(x, w, w, w);
  H(y, p, r, s);
  c[h] = c[y];
  k[h] = k[y];
  c[h + 1] = c[y + 1];
  k[h + 1] = k[y + 1];
  c[h + 2] = c[y + 2];
  k[h + 2] = k[y + 2];
  c[h + 3] = c[y + 3];
  k[h + 3] = k[y + 3];
  H(z, l, m, n);
  c[i] = c[z];
  k[i] = k[z];
  c[i + 1] = c[z + 1];
  k[i + 1] = k[z + 1];
  c[i + 2] = c[z + 2];
  k[i + 2] = k[z + 2];
  c[i + 3] = c[z + 3];
  k[i + 3] = k[z + 3];
  JC(h, x);
  xn(i, x);
  b = j;
}
Tf.X = 1;
function HX(a, d, e) {
  var f;
  f = v[c[c[e] + 10]](e, a);
  c[d] = v[c[c[e] + 7]](e, f);
  if (0 != (c[d] | 0)) {
    v[c[c[e] + 12]](e, f);
  }
  c[d + 1] = c[a + 1];
  return D.jf;
}
HX.X = 1;
function VRa(a, d) {
  var e, f;
  e = v[c[c[a] + 12]](a);
  e = v[c[c[d] + 4]](d, e, 1);
  f = v[c[c[a] + 13]](a, c[e + 2], d);
  v[c[c[d] + 5]](d, e, f, 1346455635, a);
}
VRa.X = 1;
function WRa() {}
WRa.X = 1;
function XRa(a) {
  xe(a);
}
XRa.X = 1;
function YRa(a) {
  aY(a);
  xe(a);
}
YRa.X = 1;
function ZRa(a, d, e, f) {
  var g = b;
  b += 25;
  var h = g + 1,
    i = g + 17,
    j = g + 21;
  c[g] = d;
  OW(a + 1, g);
  sQ(h, c[g] + 1);
  d = bi(c[g]);
  v[c[c[d] + 2]](d, h, i, j);
  h = am(a);
  Si(c[g], v[c[c[h] + 2]](h, i, j, Ie(bi(c[g])), c[g], e, f, c[a + 6], 0));
  b = g;
}
ZRa.X = 1;
function qM(a, d, e, f) {
  c[a] = bY + 2;
  JW(a + 1);
  c[a + 6] = d;
  De(a + 7);
  c[a + 21] = e;
  c[a + 22] = 0;
  c[a + 23] = 1;
  c[a + 20] = v[c[c[f] + 4]](f);
  c[a + 19] = c[a + 20];
}
qM.X = 1;
function aY(a) {
  var d, e, f;
  c[a] = bY + 2;
  d = 0;
  for (
    var g = a + 1, h = a + 1, i = a + 6, j = a + 6;
    (d | 0) < (Tl(g) | 0);

  ) {
    e = c[$X(h, d)];
    f = ci(e);
    if (0 != (f | 0)) {
      var l = am(a),
        l = v[c[c[l] + 9]](l);
      v[c[c[l] + 10]](l, f, c[i]);
      l = am(a);
      v[c[c[l] + 3]](l, f, c[j]);
      Si(e, 0);
    }
    d += 1;
  }
  TW(h);
}
aY.X = 1;
function $Ra(a) {
  return c[a + 16];
}
$Ra.X = 1;
function ym(a, d) {
  var e = b;
  b += 24;
  var f,
    g = e + 4,
    h = e + 8,
    i = e + 12,
    j = e + 16;
  f = e + 20;
  var l = bi(d);
  v[c[c[l] + 2]](l, d + 1, e, g);
  H(h, VX, VX, VX);
  JC(e, h);
  xn(g, h);
  c[a + 7 + 4] & 1 &&
    2 == (ji(d) | 0) &&
    ((l = bi(d)),
    v[c[c[l] + 2]](l, d + 17, i, j),
    JC(i, h),
    xn(j, h),
    hp(e, i),
    gp(g, j));
  h = c[a + 21];
  if (ai(d)) {
    f = 7;
  } else {
    if ((N(f, g, e), 999999995904 > Um(f))) {
      f = 7;
    } else {
      Li(d, 5);
      if ((c[aSa] ? 0 : 1) & 1 && 0 != (c[a + 22] | 0)) {
        (c[aSa] = 1),
          (f = c[a + 22]),
          v[c[c[f] + 9]](f, D.pf),
          (f = c[a + 22]),
          v[c[c[f] + 9]](f, D.oe),
          (f = c[a + 22]),
          v[c[c[f] + 9]](f, D.Fe),
          (f = c[a + 22]),
          v[c[c[f] + 9]](f, D.Pe);
      }
      f = 11;
    }
  }
  if (7 == f) {
    v[c[c[h] + 4]](h, ci(d), e, g, c[a + 6]);
  }
  b = e;
}
ym.X = 1;
function cY(a, d) {
  var e = b;
  b += 1;
  var f;
  c[e] = d;
  f = ci(c[e]);
  if (0 != (f | 0)) {
    var g = am(a),
      g = v[c[c[g] + 9]](g);
    v[c[c[g] + 10]](g, f, c[a + 6]);
    g = am(a);
    v[c[c[g] + 3]](g, f, c[a + 6]);
    Si(c[e], 0);
  }
  bSa(a + 1, e);
  b = e;
}
cY.X = 1;
function bSa(a, d) {
  var e;
  e = dY(a, d);
  (e | 0) < (Tl(a) | 0) && (cSa(a, e, Tl(a) - 1), eY(a));
}
bSa.X = 1;
function mm(a, d, e, f, g, h) {
  var i = b;
  b += 326;
  var j = i + 13,
    l = i + 57,
    m = i + 148,
    n = i + 152,
    p = i + 156,
    r,
    s = i + 163,
    t = i + 179,
    w = i + 183,
    x = i + 187,
    y = i + 217,
    z = i + 233,
    A = i + 237,
    C = i + 241,
    B = i + 271,
    K = i + 275,
    E,
    G = i + 279,
    M = i + 286,
    L = i + 290,
    F = i + 306,
    I = i + 310,
    R,
    O;
  hW(i, 0);
  fW(i, 0);
  var Z = xf(f);
  do {
    if (Z) {
      fY(j),
        (k[j + 41] = k[h + 1]),
        gY(l),
        hY(m, i, f, l),
        iY(m, a, d, g, g, j) &&
          9999999747378752e-20 < Um(j + 33) &&
          k[j + 41] < k[h + 1] &&
          (Bo(n, a, j + 33),
          (r = j + 33),
          (E = n),
          (c[r] = c[E]),
          (k[r] = k[E]),
          (c[r + 1] = c[E + 1]),
          (k[r + 1] = k[E + 1]),
          (c[r + 2] = c[E + 2]),
          (k[r + 2] = k[E + 2]),
          (c[r + 3] = c[E + 3]),
          (k[r + 3] = k[E + 3]),
          IB(j + 33),
          pE(p, e, 0, j + 33, k[j + 41]),
          (r = h),
          v[c[c[r] + 3]](r, p, 1));
    } else {
      if (((r = f), Uf(f))) {
        if (((E = f), 21 == (Ie(r) | 0))) {
          (r = E),
            uw(s, g),
            vw(t, s, a + 12),
            vw(w, s, d + 12),
            dSa(x, t, w, h, e, r, g),
            (k[x + 10] = k[h + 1]),
            cR(r, x, t, w);
        } else {
          r = E;
          uw(y, g);
          vw(z, y, a + 12);
          vw(A, y, d + 12);
          eSa(C, z, A, h, e, r, g);
          k[C + 10] = k[h + 1];
          E = B;
          var P = z;
          c[E] = c[P];
          k[E] = k[P];
          c[E + 1] = c[P + 1];
          k[E + 1] = k[P + 1];
          c[E + 2] = c[P + 2];
          k[E + 2] = k[P + 2];
          c[E + 3] = c[P + 3];
          k[E + 3] = k[P + 3];
          hp(B, A);
          E = K;
          P = z;
          c[E] = c[P];
          k[E] = k[P];
          c[E + 1] = c[P + 1];
          k[E + 1] = k[P + 1];
          c[E + 2] = c[P + 2];
          k[E + 2] = k[P + 2];
          c[E + 3] = c[P + 3];
          k[E + 3] = k[P + 3];
          gp(K, A);
          v[c[c[r] + 15]](r, C, B, K);
        }
      } else {
        if (Ge(r)) {
          r = f;
          E = $Ra(r);
          fSa(G, e, r, g, a, d, h);
          P = 0 != (E | 0);
          a: do {
            if (P) {
              $P(L, g, a),
                (R = M),
                (O = L + 12),
                (c[R] = c[O]),
                (k[R] = k[O]),
                (c[R + 1] = c[O + 1]),
                (k[R + 1] = k[O + 1]),
                (c[R + 2] = c[O + 2]),
                (k[R + 2] = k[O + 2]),
                (c[R + 3] = c[O + 3]),
                (k[R + 3] = k[O + 3]),
                $P(I, g, d),
                (R = F),
                (O = I + 12),
                (c[R] = c[O]),
                (k[R] = k[O]),
                (c[R + 1] = c[O + 1]),
                (k[R + 1] = k[O + 1]),
                (c[R + 2] = c[O + 2]),
                (k[R + 2] = k[O + 2]),
                (c[R + 3] = c[O + 3]),
                (k[R + 3] = k[O + 3]),
                gSa(c[E], M, F, G);
            } else {
              R = 0;
              for (O = el(r); ; ) {
                if ((R | 0) >= (O | 0)) {
                  break a;
                }
                hSa(G, R);
                R += 1;
              }
            }
          } while (0);
        }
      }
    }
  } while (0);
  b = i;
}
mm.X = 1;
function iSa(a, d) {
  fW(a, d);
}
iSa.X = 1;
function jSa() {}
jSa.X = 1;
function kSa() {}
kSa.X = 1;
function lSa(a) {
  var d = b;
  b += 17;
  var e, f, g;
  jY(d, D.Ye);
  f = 0;
  for (var h = a + 1, i = a + 1, j = a + 23; (f | 0) < (Tl(h) | 0); ) {
    (g = c[$X(i, f)]),
      (e = c[j] & 1 ? 6 : Ki(g) ? 6 : 8),
      6 == e && ym(a, g),
      (f += 1);
  }
  kY(d);
  b = d;
}
lSa.X = 1;
function mSa(a) {
  var d = b;
  b += 3;
  var e,
    f = d + 1,
    g = d + 2;
  jY(d, D.$e);
  e = a + 7;
  v[c[c[a] + 2]](a);
  jY(f, D.hf);
  var h = c[a + 21];
  v[c[c[h] + 8]](h, c[a + 6]);
  kY(f);
  f = Sk(a);
  jY(g, D.sf);
  if (0 != (f | 0)) {
    var h = c[c[f] + 8],
      i = c[a + 21],
      i = v[c[c[i] + 9]](i);
    v[h](f, i, e, c[a + 6]);
  }
  kY(g);
  kY(d);
  b = d;
}
mSa.X = 1;
function hSa(a, d) {
  var e = b;
  b += 24;
  var f,
    g,
    h = e + 16;
  f = lY(c[a + 2], d);
  WW(e, c[a + 3], mY(c[a + 2], d));
  g = bi(c[a + 1]);
  hi(c[a + 1], f);
  nSa(h, d, c[a + 6]);
  mm(c[a + 4], c[a + 5], c[a + 1], f, e, h);
  hi(c[a + 1], g);
  b = e;
}
hSa.X = 1;
function oSa() {}
oSa.X = 1;
function pSa() {}
pSa.X = 1;
function qSa() {}
qSa.X = 1;
function mY(a, d) {
  return nY(a + 3, d);
}
mY.X = 1;
function lY(a, d) {
  return c[nY(a + 3, d) + 16];
}
lY.X = 1;
function gSa(a, d, e, f) {
  var g = b;
  b += 35;
  var h = g + 4,
    i = g + 8,
    j = g + 11,
    l = g + 19,
    m,
    n = g + 24,
    p = g + 25,
    r = g + 33,
    s = g + 34;
  if (0 != (a | 0)) {
    N(g, e, d);
    IB(g);
    k[h] = 0 == k[g] ? 0xde0b6b000000000 : 1 / k[g];
    k[h + 1] = 0 == k[g + 1] ? 0xde0b6b000000000 : 1 / k[g + 1];
    k[h + 2] = 0 == k[g + 2] ? 0xde0b6b000000000 : 1 / k[g + 2];
    c[i] = (0 > k[h]) & 1;
    m = i + 1;
    c[m] = (0 > k[h + 1]) & 1;
    c[m + 1] = (0 > k[h + 2]) & 1;
    N(j, e, d);
    e = J(g, j);
    oY(l);
    j = 1;
    m = 126;
    c[n] = 0;
    pY(l, 128, n);
    c[qY(l, 0)] = a;
    for (a = p + 4; ; ) {
      var j = (n = j - 1),
        t = (n = c[qY(l, n)]);
      c[p] = c[t];
      k[p] = k[t];
      c[p + 1] = c[t + 1];
      k[p + 1] = k[t + 1];
      c[p + 2] = c[t + 2];
      k[p + 2] = k[t + 2];
      c[p + 3] = c[t + 3];
      k[p + 3] = k[t + 3];
      t = n + 4;
      c[a] = c[t];
      k[a] = k[t];
      c[a + 1] = c[t + 1];
      k[a + 1] = k[t + 1];
      c[a + 2] = c[t + 2];
      k[a + 2] = k[t + 2];
      c[a + 3] = c[t + 3];
      k[a + 3] = k[t + 3];
      k[r] = 1;
      $result1 = t = rY(d, h, i, p, r, 0, e) & 1;
      if (0 != (t | 0)) {
        if (sY(n)) {
          (j | 0) > (m | 0) &&
            ((m = tY(l) << 1), (c[s] = 0), pY(l, m, s), (m = tY(l) - 2));
          var t = c[n + 9],
            w = j,
            j = w + 1;
          c[qY(l, w)] = t;
          n = c[n + 10];
          t = j;
          j = t + 1;
          c[qY(l, t)] = n;
        } else {
          (t = f), v[c[c[t] + 3]](t, n);
        }
      }
      if (0 == (j | 0)) {
        break;
      }
    }
    uY(l);
  }
  b = g;
}
gSa.X = 1;
function Dm(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 507;
  var m = l + 44,
    n = l + 135,
    p = l + 136,
    r = l + 142,
    s,
    t = l + 153,
    w = l + 169,
    x = l + 173,
    y = l + 177,
    z = l + 193,
    A = l + 205,
    C = l + 209,
    B = l + 210,
    K = l + 211,
    E = l + 212,
    G = l + 268,
    M = l + 272,
    L = l + 276,
    F = l + 320,
    I = l + 326,
    R = l + 337,
    O = l + 353,
    Z = l + 357,
    P = l + 361,
    S = l + 377,
    da = l + 389,
    V = l + 393,
    ba = l + 394,
    $ = l + 395,
    Y = l + 396,
    la = l + 452,
    ka = l + 456,
    ja = l + 460,
    ea = l + 464,
    ca = l + 468,
    W,
    U = l + 469,
    X,
    ma = l + 485,
    ga,
    ha = l + 501,
    ta = xf(g);
  if (ta) {
    fY(l),
      (k[l + 43] = j),
      (k[l + 41] = k[i + 1]),
      gY(m),
      vY(n),
      wY(p, a, g, m, n),
      (s = p),
      v[c[c[s] + 2]](s, d, e, h, h, l) &&
        9999999747378752e-20 < Um(l + 33) &&
        k[l + 41] < k[i + 1] &&
        (IB(l + 33),
        SV(r, f, 0, l + 33, l + 37, k[l + 41]),
        (s = i),
        v[c[c[s] + 3]](s, r, 1));
  } else {
    if (((s = g), Uf(g))) {
      (W = g),
        21 == (Ie(s) | 0)
          ? ((s = W),
            uw(t, h),
            vw(w, t, d + 12),
            vw(x, t, e + 12),
            ww(z, t, e),
            (k[C] = 0),
            (k[B] = 0),
            (k[K] = 0),
            H(A, C, B, K),
            Tz(y, z, A),
            rSa(E, a, d, e, i, f, s, h),
            (k[E + 50] = k[i + 1]),
            (k[E + 52] = j),
            (W = a),
            v[c[c[W] + 2]](W, y, G, M),
            mR(s, E, w, x, G, M))
          : 28 == (Ie(W) | 0)
            ? (fY(L),
              (k[L + 43] = j),
              (k[L + 41] = k[i + 1]),
              sSa(F, a, g),
              (s = F),
              v[c[c[s] + 2]](s, d, e, h, h, L) &&
                9999999747378752e-20 < Um(L + 33) &&
                k[L + 41] < k[i + 1] &&
                (IB(L + 33),
                SV(I, f, 0, L + 33, L + 37, k[L + 41]),
                (s = i),
                v[c[c[s] + 3]](s, I, 1)))
            : ((s = g),
              uw(R, h),
              vw(O, R, d + 12),
              vw(Z, R, e + 12),
              ww(S, R, e),
              (k[V] = 0),
              (k[ba] = 0),
              (k[$] = 0),
              H(da, V, ba, $),
              Tz(P, S, da),
              tSa(Y, a, d, e, i, f, s, h),
              (k[Y + 50] = k[i + 1]),
              (k[Y + 52] = j),
              (W = a),
              v[c[c[W] + 2]](W, P, la, ka),
              (W = ja),
              (X = O),
              (c[W] = c[X]),
              (k[W] = k[X]),
              (c[W + 1] = c[X + 1]),
              (k[W + 1] = k[X + 1]),
              (c[W + 2] = c[X + 2]),
              (k[W + 2] = k[X + 2]),
              (c[W + 3] = c[X + 3]),
              (k[W + 3] = k[X + 3]),
              hp(ja, Z),
              (W = ea),
              (X = O),
              (c[W] = c[X]),
              (k[W] = k[X]),
              (c[W + 1] = c[X + 1]),
              (k[W + 1] = k[X + 1]),
              (c[W + 2] = c[X + 2]),
              (k[W + 2] = k[X + 2]),
              (c[W + 3] = c[X + 3]),
              (k[W + 3] = k[X + 3]),
              gp(ea, Z),
              xn(ja, la),
              xn(ea, ka),
              v[c[c[s] + 15]](s, Y, ja, ea));
    } else {
      if (Ge(s)) {
        jY(ca, D.tf);
        s = g;
        W = 0;
        for (var ra = ha; (W | 0) < (el(s) | 0); ) {
          sQ(U, mY(s, W)),
            (X = lY(s, W)),
            WW(ma, h, U),
            (ga = bi(f)),
            hi(f, X),
            uSa(ha, W, i),
            Dm(a, d, e, f, X, ma, ra, j),
            hi(f, ga),
            (W += 1);
        }
        kY(ca);
      }
    }
  }
  b = l;
}
Dm.X = 1;
function vSa(a, d, e, f) {
  var g = b;
  b += 69;
  var h = g + 55,
    i = g + 59,
    j = g + 60,
    l = g + 61,
    m = g + 62,
    n = g + 66,
    p = g + 67,
    r = g + 68;
  wSa(g, d, e, a, f);
  a = c[a + 21];
  f = c[c[a] + 6];
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  k[n] = 0;
  k[p] = 0;
  k[r] = 0;
  H(m, n, p, r);
  v[f](a, d, e, g, h, m);
  b = g;
}
vSa.X = 1;
function xSa() {}
xSa.X = 1;
function xY(a, d, e, f, g) {
  var h = b;
  b += 22;
  var i = h + 1,
    j = h + 5,
    l = h + 9,
    m = h + 13,
    n = h + 14,
    p = h + 18;
  k[h] = e;
  N(j, d + 12, a + 12);
  wC(i, j, h);
  c[f] = c[i];
  k[f] = k[i];
  c[f + 1] = c[i + 1];
  k[f + 1] = k[i + 1];
  c[f + 2] = c[i + 2];
  k[f + 2] = k[i + 2];
  c[f + 3] = c[i + 3];
  k[f + 3] = k[i + 3];
  ySa(a, d, l, m);
  Q(p, l, m);
  wC(n, p, h);
  c[g] = c[n];
  k[g] = k[n];
  c[g + 1] = c[n + 1];
  k[g + 1] = k[n + 1];
  c[g + 2] = c[n + 2];
  k[g + 2] = k[n + 2];
  c[g + 3] = c[n + 3];
  k[g + 3] = k[n + 3];
  b = h;
}
xY.X = 1;
function zSa() {}
zSa.X = 1;
function Jl(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 8,
    i = bi(d);
  v[c[c[i] + 2]](i, d + 1, f, g);
  ASa(h, d, a, e);
  a = c[a + 21];
  v[c[c[a] + 7]](a, f, g, h);
  b = f;
}
Jl.X = 1;
function BSa() {}
BSa.X = 1;
function Xl(a, d, e, f) {
  var g = b;
  b += 41;
  var h;
  h = Sk(a);
  h = v[c[c[h] + 2]](h, d, e, 0);
  0 != (h | 0) &&
    (CSa(g, d, e, f),
    v[c[c[h] + 2]](h, d, e, a + 7, g),
    v[c[c[h]]](h),
    (a = Sk(a)),
    v[c[c[a] + 15]](a, h));
  b = g;
}
Xl.X = 1;
function DSa() {}
DSa.X = 1;
function Rl(a, d, e, f, g, h) {
  var i = b;
  b += 125;
  var j = i + 1,
    l = i + 17,
    m = i + 33,
    n = i + 37,
    p = i + 41,
    r = i + 45,
    s = i + 49,
    t = i + 53,
    w = i + 54,
    x = i + 55,
    y = i + 56,
    z = i + 72,
    A = i + 76;
  jY(i, D.zf);
  xi(j, e);
  xi(l, f);
  xY(j, l, 1, p, r);
  k[t] = 0;
  k[w] = 0;
  k[x] = 0;
  pe(s, t, w, x);
  eQ(y);
  dc(j, z);
  zb(y, z);
  Tf(d, y, s, r, 1, m, n);
  ESa(A, d, e, f, a, g, h);
  a = c[a + 21];
  v[c[c[a] + 6]](a, j + 12, l + 12, A, m, n);
  kY(i);
  b = i;
}
Rl.X = 1;
function FSa(a) {
  return c[a + 23];
}
FSa.X = 1;
function yY(a) {
  return c[a + 1];
}
yY.X = 1;
function zY(a, d) {
  return c[a + 3] + 14 * d;
}
zY.X = 1;
function GSa(a, d, e, f) {
  var g = b;
  b += 205;
  var h,
    i,
    j,
    l = g + 16,
    m = g + 32,
    n = g + 36,
    p,
    r,
    s = g + 40,
    t,
    w = g + 56,
    x,
    y,
    z,
    A,
    C,
    B,
    K,
    E,
    G,
    M,
    L,
    F,
    I = g + 72,
    R,
    O,
    Z,
    P = g + 76,
    S = g + 80,
    da = g + 81,
    V = g + 82,
    ba = g + 83,
    $ = g + 87,
    Y = g + 88,
    la = g + 89,
    ka = g + 90,
    ja = g + 113,
    ea = g + 117,
    ca = g + 118,
    W = g + 119,
    U = g + 120,
    X = g + 124,
    ma = g + 125,
    ga = g + 126,
    ha = g + 127,
    ta,
    ra,
    ua,
    za = g + 150,
    Za = g + 154,
    ib = g + 155,
    Ca = g + 156,
    Sa,
    mb,
    Oa,
    Pa,
    fc = g + 157,
    jb = g + 161,
    La = g + 165,
    fb = g + 166,
    Rb = g + 170,
    pb = g + 171,
    Sb = g + 172,
    ab = g + 173,
    Ib = g + 177,
    Fc = g + 181,
    Ac = g + 185,
    ob = g + 189,
    Gc = g + 193,
    Yc = g + 197,
    Cc = g + 201,
    Ub = v[c[c[a] + 4]](a);
  v[c[c[Ub] + 14]](Ub, d, 1);
  var Uc = 31 == (Ie(e) | 0);
  a: do {
    if (Uc) {
      h = e;
      var nd = el(h) - 1;
      i = nd;
      if (0 <= (nd | 0)) {
        for (var Ic = a; ; ) {
          sQ(g, mY(h, i));
          j = lY(h, i);
          var tc = c[c[Ic] + 6];
          WW(l, d, g);
          v[tc](a, l, j, f);
          var hd = i - 1;
          i = hd;
          if (!(0 <= (hd | 0))) {
            break a;
          }
        }
      }
    } else {
      var Tb = Ie(e);
      if (0 == (Tb | 0)) {
        nV(m, e);
        var Jc = v[c[c[a] + 4]](a),
          ub = c[c[Jc] + 18];
        WP(n, m);
        v[ub](Jc, n, m, d, f);
      } else {
        if (8 == (Tb | 0)) {
          var uc = e;
          p = v[c[c[uc] + 11]](uc);
          var Kc = v[c[c[a] + 4]](a);
          v[c[c[Kc] + 4]](Kc, p, d, f);
        } else {
          if (9 == (Tb | 0)) {
            r = e;
            eQ(s);
            var gb = QI(r) - 1;
            t = gb;
            if (0 <= (gb | 0)) {
              for (var gc = a; ; ) {
                pQ(s, $I(r, t));
                var Lc = v[c[c[gc] + 4]](a),
                  Dc = c[c[Lc] + 4],
                  Eb = KI(r, t);
                WW(w, d, s);
                v[Dc](Lc, Eb, w, f);
                var Ra = t - 1;
                t = Ra;
                if (!(0 <= (Ra | 0))) {
                  break a;
                }
              }
            }
          } else {
            if (10 == (Tb | 0)) {
              x = e;
              y = cf(x);
              z = gf(x);
              A = Ke(x);
              var qb = v[c[c[a] + 4]](a);
              v[c[c[qb] + 19]](qb, y, z, A, d, f);
            } else {
              if (11 == (Tb | 0)) {
                C = e;
                B = Xw(C);
                K = Yw(C);
                E = Zw(C);
                var Ab = v[c[c[a] + 4]](a);
                v[c[c[Ab] + 21]](Ab, B, K, E, d, f);
              } else {
                if (13 == (Tb | 0)) {
                  G = e;
                  M = dF(G);
                  var hc = G;
                  L = v[c[c[hc] + 21]](hc);
                  qG(I, G);
                  F = k[I + M];
                  var Hc = v[c[c[a] + 4]](a);
                  v[c[c[Hc] + 20]](Hc, L, F, M, d, f);
                } else {
                  if (28 == (Tb | 0)) {
                    R = e;
                    O = k[R + 16];
                    Z = R + 12;
                    var ic = v[c[c[a] + 4]](a);
                    v[c[c[ic] + 22]](ic, Z, O, d, f);
                  } else {
                    if (Uf(e)) {
                      k[S] = 0xde0b6b000000000;
                      k[da] = 0xde0b6b000000000;
                      k[V] = 0xde0b6b000000000;
                      H(P, S, da, V);
                      k[$] = -0xde0b6b000000000;
                      k[Y] = -0xde0b6b000000000;
                      k[la] = -0xde0b6b000000000;
                      H(ba, $, Y, la);
                      var db = v[c[c[a] + 4]](a);
                      HSa(ka, db, d, f);
                      var bb = e;
                      v[c[c[bb] + 15]](bb, ka, ba, P);
                    }
                    if (3 == (Ie(e) | 0)) {
                      k[ea] = 0xde0b6b000000000;
                      k[ca] = 0xde0b6b000000000;
                      k[W] = 0xde0b6b000000000;
                      H(ja, ea, ca, W);
                      k[X] = -0xde0b6b000000000;
                      k[ma] = -0xde0b6b000000000;
                      k[ga] = -0xde0b6b000000000;
                      H(U, X, ma, ga);
                      var id = v[c[c[a] + 4]](a);
                      HSa(ha, id, d, f);
                      var Zc = FSa(e);
                      v[c[c[Zc] + 2]](Zc, 0 == (ha | 0) ? 0 : ha + 4, U, ja);
                    }
                    if (Ye(e)) {
                      if (((ta = e), 0 != (yg(ta) | 0))) {
                        if (
                          ((ua = yg(ta)), (ra = 0), (ra | 0) < (yY(ua + 6) | 0))
                        ) {
                          for (var vb = a, rb = a; ; ) {
                            k[Za] = 0;
                            k[ib] = 0;
                            k[Ca] = 0;
                            H(za, Za, ib, Ca);
                            var vc = rW(zY(ua + 6, ra));
                            Sa = vc;
                            var Qc = 0 != (vc | 0);
                            b: do {
                              if (
                                Qc &&
                                ((mb = c[sW(zY(ua + 6, ra), Sa - 1)]),
                                (Oa = 0),
                                (Oa | 0) < (rW(zY(ua + 6, ra)) | 0))
                              ) {
                                for (;;) {
                                  Pa = c[sW(zY(ua + 6, ra), Oa)];
                                  xn(za, jg(ua + 1, Pa));
                                  var Rc = v[c[c[vb] + 4]](a),
                                    Xd = c[c[Rc] + 2];
                                  vw(fc, d, jg(ua + 1, mb));
                                  vw(jb, d, jg(ua + 1, Pa));
                                  v[Xd](Rc, fc, jb, f);
                                  mb = Pa;
                                  Oa += 1;
                                  if ((Oa | 0) >= (rW(zY(ua + 6, ra)) | 0)) {
                                    break b;
                                  }
                                }
                              }
                            } while (0);
                            k[La] = 1 / (Sa | 0);
                            LC(za, La);
                            k[Rb] = 1;
                            k[pb] = 1;
                            k[Sb] = 0;
                            H(fb, Rb, pb, Sb);
                            H(
                              ab,
                              zY(ua + 6, ra) + 10,
                              zY(ua + 6, ra) + 11,
                              zY(ua + 6, ra) + 12
                            );
                            var Sc = v[c[c[rb] + 4]](a),
                              Mc = c[c[Sc] + 2];
                            vw(Ib, d, za);
                            wn(Ac, za, ab);
                            vw(Fc, d, Ac);
                            v[Mc](Sc, Ib, Fc, fb);
                            ra += 1;
                            if ((ra | 0) >= (yY(ua + 6) | 0)) {
                              break a;
                            }
                          }
                        }
                      } else {
                        ra = 0;
                        var $c = ta;
                        if ((ra | 0) < (v[c[c[$c] + 23]]($c) | 0)) {
                          for (var Cd = a; ; ) {
                            var wc = ta;
                            v[c[c[wc] + 24]](wc, ra, ob, Gc);
                            vw(Yc, d, ob);
                            vw(Cc, d, Gc);
                            var Bb = v[c[c[Cd] + 4]](a);
                            v[c[c[Bb] + 2]](Bb, Yc, Cc, f);
                            ra += 1;
                            var fd = ta;
                            if ((ra | 0) >= (v[c[c[fd] + 23]](fd) | 0)) {
                              break a;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } while (0);
  b = g;
}
GSa.X = 1;
function ISa() {}
ISa.X = 1;
function JSa(a, d) {
  c[a + 22] = d;
}
JSa.X = 1;
function KSa(a) {
  return c[a + 22];
}
KSa.X = 1;
function AY(a) {
  return c[a + 2];
}
AY.X = 1;
function BY(a, d) {
  return c[a + 3] + d;
}
BY.X = 1;
function CY(a) {
  return c[a + 1];
}
CY.X = 1;
function LSa(a) {
  var d = b;
  b += 83;
  var e,
    f = d + 4,
    g = d + 5,
    h = d + 6,
    i,
    j,
    l,
    m,
    n,
    p,
    r = d + 7,
    s = d + 11,
    t = d + 12,
    w = d + 13,
    x = d + 14,
    y = d + 18,
    z = d + 19,
    A = d + 20,
    C = d + 21,
    B = d + 25,
    K = d + 26,
    E = d + 27,
    G = d + 28,
    M = d + 32,
    L = d + 33,
    F = d + 34,
    I = d + 35,
    R = d + 39,
    O = d + 40,
    Z = d + 41,
    P = d + 42,
    S = d + 46,
    da = d + 47,
    V = d + 48,
    ba = d + 49,
    $ = d + 53,
    Y = d + 54,
    la = d + 55,
    ka = d + 56,
    ja = d + 60,
    ea = d + 64,
    ca = d + 68,
    W = d + 69,
    U = d + 70,
    X = d + 71,
    ma = d + 75,
    ga = d + 79,
    ha = 0 != (v[c[c[a] + 4]](a) | 0);
  a: do {
    if (
      ha &&
      ((e = v[c[c[a] + 4]](a)),
      0 != ((v[c[c[e] + 12]](e) & 8) | 0) &&
        ((e = Sk(a)),
        (e = v[c[c[e] + 9]](e)),
        (k[f] = 0),
        (k[g] = 0),
        (k[h] = 0),
        H(d, f, g, h),
        (i = 0),
        (i | 0) < (e | 0)))
    ) {
      for (var ta = a; ; ) {
        j = Sk(a);
        j = v[c[c[j] + 10]](j, i);
        l = Xj(j);
        m = 0;
        var ra = (m | 0) < (l | 0);
        b: do {
          if (ra) {
            for (;;) {
              n = j + 69 * m + 1;
              var ua = v[c[c[ta] + 4]](a);
              v[c[c[ua] + 8]](ua, n + 8, n + 16, aU(n), Fk(n), d);
              m += 1;
              if ((m | 0) >= (l | 0)) {
                break b;
              }
            }
          }
        } while (0);
        i += 1;
        if ((i | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
  f = 0 != (v[c[c[a] + 4]](a) | 0);
  a: do {
    if (
      f &&
      ((g = v[c[c[a] + 4]](a)),
      0 != ((v[c[c[g] + 12]](g) & 3) | 0) &&
        ((g = 0), (h = a + 1), (g | 0) < (Tl(h) | 0)))
    ) {
      ha = a + 1;
      i = e = a;
      ta = r;
      j = ba;
      l = a;
      m = r;
      n = x;
      for (
        var ra = r,
          ua = C,
          za = r,
          Za = G,
          ib = r,
          Ca = I,
          Sa = r,
          mb = P,
          Oa = a + 22,
          Pa = a + 22,
          fc = a + 22;
        ;

      ) {
        p = c[$X(ha, g)];
        if (0 == (($h(p) & 32) | 0)) {
          if (0 != (v[c[c[e] + 4]](a) | 0)) {
            var jb = v[c[c[i] + 4]](a);
            0 != ((v[c[c[jb] + 12]](jb) & 1) | 0) &&
              ((k[s] = 1),
              (k[t] = 1),
              (k[w] = 1),
              H(r, s, t, w),
              (jb = ki(p)),
              1 == (jb | 0)
                ? ((k[y] = 1),
                  (k[z] = 1),
                  (k[A] = 1),
                  H(x, y, z, A),
                  (c[m] = c[n]),
                  (k[m] = k[n]),
                  (c[m + 1] = c[n + 1]),
                  (k[m + 1] = k[n + 1]),
                  (c[m + 2] = c[n + 2]),
                  (k[m + 2] = k[n + 2]),
                  (c[m + 3] = c[n + 3]),
                  (k[m + 3] = k[n + 3]))
                : 2 == (jb | 0)
                  ? ((k[B] = 0),
                    (k[K] = 1),
                    (k[E] = 0),
                    H(C, B, K, E),
                    (c[ra] = c[ua]),
                    (k[ra] = k[ua]),
                    (c[ra + 1] = c[ua + 1]),
                    (k[ra + 1] = k[ua + 1]),
                    (c[ra + 2] = c[ua + 2]),
                    (k[ra + 2] = k[ua + 2]),
                    (c[ra + 3] = c[ua + 3]),
                    (k[ra + 3] = k[ua + 3]))
                  : 3 == (jb | 0)
                    ? ((k[M] = 0),
                      (k[L] = 1),
                      (k[F] = 1),
                      H(G, M, L, F),
                      (c[za] = c[Za]),
                      (k[za] = k[Za]),
                      (c[za + 1] = c[Za + 1]),
                      (k[za + 1] = k[Za + 1]),
                      (c[za + 2] = c[Za + 2]),
                      (k[za + 2] = k[Za + 2]),
                      (c[za + 3] = c[Za + 3]),
                      (k[za + 3] = k[Za + 3]))
                    : 4 == (jb | 0)
                      ? ((k[R] = 1),
                        (k[O] = 0),
                        (k[Z] = 0),
                        H(I, R, O, Z),
                        (c[ib] = c[Ca]),
                        (k[ib] = k[Ca]),
                        (c[ib + 1] = c[Ca + 1]),
                        (k[ib + 1] = k[Ca + 1]),
                        (c[ib + 2] = c[Ca + 2]),
                        (k[ib + 2] = k[Ca + 2]),
                        (c[ib + 3] = c[Ca + 3]),
                        (k[ib + 3] = k[Ca + 3]))
                      : 5 == (jb | 0)
                        ? ((k[S] = 1),
                          (k[da] = 1),
                          (k[V] = 0),
                          H(P, S, da, V),
                          (c[Sa] = c[mb]),
                          (k[Sa] = k[mb]),
                          (c[Sa + 1] = c[mb + 1]),
                          (k[Sa + 1] = k[mb + 1]),
                          (c[Sa + 2] = c[mb + 2]),
                          (k[Sa + 2] = k[mb + 2]),
                          (c[Sa + 3] = c[mb + 3]),
                          (k[Sa + 3] = k[mb + 3]))
                        : ((k[$] = 1),
                          (k[Y] = 0),
                          (k[la] = 0),
                          H(ba, $, Y, la),
                          (c[ta] = c[j]),
                          (k[ta] = k[j]),
                          (c[ta + 1] = c[j + 1]),
                          (k[ta + 1] = k[j + 1]),
                          (c[ta + 2] = c[j + 2]),
                          (k[ta + 2] = k[j + 2]),
                          (c[ta + 3] = c[j + 3]),
                          (k[ta + 3] = k[j + 3])),
              v[c[c[l] + 6]](a, p + 1, bi(p), r));
          }
          0 != (c[Oa] | 0) &&
            ((jb = c[Pa]),
            0 != ((v[c[c[jb] + 12]](jb) & 2) | 0) &&
              ((k[ca] = 1),
              (k[W] = 0),
              (k[U] = 0),
              H(ea, ca, W, U),
              (jb = bi(p)),
              v[c[c[jb] + 2]](jb, p + 1, ka, ja),
              H(X, VX, VX, VX),
              JC(ka, X),
              xn(ja, X),
              2 == (ji(p) | 0) &&
                ((jb = bi(p)),
                v[c[c[jb] + 2]](jb, p + 17, ma, ga),
                JC(ma, X),
                xn(ga, X),
                hp(ka, ma),
                gp(ja, ga)),
              (p = c[fc]),
              v[c[c[p] + 13]](p, ka, ja, ea)));
        }
        g += 1;
        if ((g | 0) >= (Tl(h) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = d;
}
LSa.X = 1;
function MSa(a, d) {
  var e;
  e = NSa(a, d);
  return -1 == (e | 0) ? 0 : BY(a + 10, e);
}
MSa.X = 1;
function OSa(a, d, e) {
  var f, g, h;
  f = OM(d);
  f &= AY(a + 10) - 1;
  g = NSa(a, d);
  -1 != (g | 0)
    ? (c[BY(a + 10, g)] = c[e])
    : ((g = CY(a + 10)),
      (h = AY(a + 10)),
      PSa(a + 10, e),
      QSa(a + 15, d),
      (h | 0) < (AY(a + 10) | 0) &&
        (RSa(a, d), (d = OM(d)), (f = (AY(a + 10) - 1) & d)),
      (c[QV(a + 5, g)] = c[QV(a, f)]),
      (c[QV(a, f)] = g));
}
OSa.X = 1;
function SSa(a, d) {
  v[c[c[d] + 8]](d);
  TSa(a, d);
  v[c[c[d] + 9]](d);
}
SSa.X = 1;
function NSa(a, d) {
  var e;
  e = OM(d);
  e &= AY(a + 10) - 1;
  if (e >>> 0 >= rW(a) >>> 0) {
    e = -1;
  } else {
    var f = c[sW(a, e)];
    e = f;
    for (
      var g = a + 15, h = a + 5;
      -1 != (f | 0) && 0 == ((vN(d, USa(g, e)) & 1) | 0);

    ) {
      e = f = c[sW(h, e)];
    }
  }
  return e;
}
NSa.X = 1;
function PSa(a, d) {
  (CY(a) | 0) == (AY(a) | 0) && VSa(a, WSa(a, CY(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
PSa.X = 1;
function QSa(a, d) {
  (DY(a) | 0) == (XSa(a) | 0) && YSa(a, ZSa(a, DY(a)));
  var e = (c[a + 1] << 1) + c[a + 3];
  0 != (e | 0) &&
    ((c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]));
  e = a + 1;
  c[e] += 1;
}
QSa.X = 1;
function TSa(a, d) {
  var e = b;
  b += 25;
  var f,
    g,
    h = e + 20,
    i = e + 21,
    j = e + 23;
  f = 0;
  var l = a + 1,
    m = (f | 0) < (Tl(l) | 0);
  a: do {
    if (m) {
      for (var n = a + 1; ; ) {
        g = c[$X(n, f)];
        if (1 == (ji(g) | 0)) {
          v[c[c[g] + 6]](g, d);
        }
        f += 1;
        if ((f | 0) >= (Tl(l) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  $Sa(e);
  f = 0;
  l = a + 1;
  for (m = a + 1; (f | 0) < (Tl(l) | 0); ) {
    (c[h] = bi(c[$X(m, f)])),
      (c[i] = c[h]),
      0 == (MSa(e, i) | 0) &&
        ((c[j] = c[h]), OSa(e, j, h), (n = c[h]), v[c[c[n] + 14]](n, d)),
      (f += 1);
  }
  aTa(e);
  b = e;
}
TSa.X = 1;
function ZSa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
ZSa.X = 1;
function bTa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
bTa.X = 1;
function WSa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
WSa.X = 1;
function cTa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
cTa.X = 1;
function dTa(a, d) {
  return (d << 1) + c[a + 3];
}
dTa.X = 1;
function DY(a) {
  return c[a + 1];
}
DY.X = 1;
function XSa(a) {
  return c[a + 2];
}
XSa.X = 1;
function eTa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
eTa.X = 1;
function USa(a, d) {
  return (d << 1) + c[a + 3];
}
USa.X = 1;
function cSa(a, d, e) {
  var f;
  f = c[c[a + 3] + d];
  c[c[a + 3] + d] = c[c[a + 3] + e];
  c[c[a + 3] + e] = f;
}
cSa.X = 1;
function eY(a) {
  a += 1;
  c[a] -= 1;
}
eY.X = 1;
function fTa(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
fTa.X = 1;
function gTa(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
gTa.X = 1;
function RSa(a, d) {
  var e = b;
  b += 2;
  var f,
    g,
    h = e + 1,
    i,
    j;
  $3 = d;
  f = AY(a + 10);
  var l = (rW(a) | 0) < (f | 0);
  a: do {
    if (l) {
      g = rW(a);
      c[e] = 0;
      PV(a, f, e);
      c[h] = 0;
      PV(a + 5, f, h);
      i = 0;
      var m = (i | 0) < (f | 0);
      b: do {
        if (m) {
          for (var n = a; ; ) {
            if (((c[QV(n, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      m = (i | 0) < (f | 0);
      b: do {
        if (m) {
          for (n = a + 5; ; ) {
            if (((c[QV(n, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      if ((i | 0) < (g | 0)) {
        for (var m = a + 15, n = a + 10, p = a, r = a + 5, s = a; ; ) {
          if (
            ((j = OM(dTa(m, i))),
            (j &= AY(n) - 1),
            (c[QV(r, i)] = c[QV(p, j)]),
            (c[QV(s, j)] = i),
            (i += 1),
            (i | 0) >= (g | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = e;
}
RSa.X = 1;
function YSa(a, d) {
  var e;
  (XSa(a) | 0) < (d | 0) &&
    ((e = hTa(a, d)),
    iTa(a, 0, DY(a), e),
    bTa(a, 0, DY(a)),
    jTa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
YSa.X = 1;
function hTa(a, d) {
  return 0 != (d | 0) ? kTa(a, d, 0) : 0;
}
hTa.X = 1;
function iTa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 1) + f;
        if (0 != (i | 0)) {
          var j = (d << 1) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
iTa.X = 1;
function jTa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && lTa(a, c[a + 3]), (c[a + 3] = 0));
}
jTa.X = 1;
function lTa(a, d) {
  $1 = a;
  yh(d);
}
lTa.X = 1;
function kTa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 3, 16);
}
kTa.X = 1;
function VSa(a, d) {
  var e;
  (AY(a) | 0) < (d | 0) &&
    ((e = mTa(a, d)),
    eTa(a, 0, CY(a), e),
    cTa(a, 0, CY(a)),
    nTa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
VSa.X = 1;
function mTa(a, d) {
  return 0 != (d | 0) ? oTa(a, d, 0) : 0;
}
mTa.X = 1;
function nTa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && pTa(a, c[a + 3]), (c[a + 3] = 0));
}
nTa.X = 1;
function pTa(a, d) {
  $1 = a;
  yh(d);
}
pTa.X = 1;
function oTa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
oTa.X = 1;
function dY(a, d) {
  var e, f;
  e = Tl(a);
  f = 0;
  for (var g = a + 3; (f | 0) < (Tl(a) | 0); ) {
    var h = f;
    if ((c[c[g] + f] | 0) == (c[d] | 0)) {
      e = h;
      break;
    }
    f = h + 1;
  }
  return e;
}
dY.X = 1;
function qTa(a) {
  cTa(a, 0, CY(a));
  nTa(a);
  fTa(a);
}
qTa.X = 1;
function rTa(a) {
  bTa(a, 0, DY(a));
  jTa(a);
  gTa(a);
}
rTa.X = 1;
function $Sa(a) {
  vW(a);
  vW(a + 5);
  fTa(a + 10);
  gTa(a + 15);
}
$Sa.X = 1;
function aTa(a) {
  rTa(a + 15);
  qTa(a + 10);
  wW(a + 5);
  wW(a);
}
aTa.X = 1;
function EY(a) {
  c[a] = sTa + 2;
}
EY.X = 1;
function FY(a) {
  c[a] = tTa + 2;
}
FY.X = 1;
function uTa(a) {
  c[a] = vTa + 2;
}
uTa.X = 1;
function wTa(a, d, e) {
  c[a + 36] = d;
  c[a + 38] = e;
}
wTa.X = 1;
function xTa(a, d, e) {
  c[a + 37] = d;
  c[a + 39] = e;
}
xTa.X = 1;
function yTa() {}
yTa.X = 1;
function HSa(a, d, e, f) {
  EY(a);
  FY(a + 4);
  c[a] = GY + 2;
  c[a + 4] = GY + 8;
  c[a + 2] = d;
  d = a + 3;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  sQ(a + 7, e);
}
HSa.X = 1;
function zTa(a) {
  xe(a);
}
zTa.X = 1;
function ATa(a, d, e, f) {
  var g = b;
  b += 60;
  var h = g + 4,
    i = g + 8,
    j = g + 12,
    l = g + 16,
    m = g + 20,
    n = g + 24,
    p = g + 28,
    r = g + 32,
    s = g + 36,
    t = g + 37,
    w = g + 41,
    x = g + 45,
    y = g + 49,
    z = g + 53,
    A = g + 54,
    C = g + 55,
    B = g + 56;
  $3 = e;
  $4 = f;
  vw(j, a + 7, d);
  c[g] = c[j];
  k[g] = k[j];
  c[g + 1] = c[j + 1];
  k[g + 1] = k[j + 1];
  c[g + 2] = c[j + 2];
  k[g + 2] = k[j + 2];
  c[g + 3] = c[j + 3];
  k[g + 3] = k[j + 3];
  vw(l, a + 7, d + 4);
  c[h] = c[l];
  k[h] = k[l];
  c[h + 1] = c[l + 1];
  k[h + 1] = k[l + 1];
  c[h + 2] = c[l + 2];
  k[h + 2] = k[l + 2];
  c[h + 3] = c[l + 3];
  k[h + 3] = k[l + 3];
  vw(m, a + 7, d + 8);
  c[i] = c[m];
  k[i] = k[m];
  c[i + 1] = c[m + 1];
  k[i + 1] = k[m + 1];
  c[i + 2] = c[m + 2];
  k[i + 2] = k[m + 2];
  c[i + 3] = c[m + 3];
  k[i + 3] = k[m + 3];
  wn(r, g, h);
  wn(p, r, i);
  k[s] = 0.3333333432674408;
  Q(n, p, s);
  N(w, h, g);
  N(x, i, g);
  qn(t, w, x);
  IB(t);
  k[z] = 1;
  k[A] = 1;
  k[C] = 0;
  H(y, z, A, C);
  d = c[a + 2];
  e = c[c[d] + 2];
  wn(B, n, t);
  v[e](d, n, B, y);
  n = c[a + 2];
  v[c[c[n] + 2]](n, g, h, a + 3);
  n = c[a + 2];
  v[c[c[n] + 2]](n, h, i, a + 3);
  h = c[a + 2];
  v[c[c[h] + 2]](h, i, g, a + 3);
  b = g;
}
ATa.X = 1;
function BTa(a, d, e, f) {
  v[c[c[a] + 2]](a, d, e, f);
}
BTa.X = 1;
function CTa(a) {
  xe(a - 4);
}
CTa.X = 1;
function DTa(a, d, e, f) {
  BTa(a - 4, d, e, f);
}
DTa.X = 1;
function CSa(a, d, e, f) {
  AI(a, d, e);
  c[a] = ETa + 2;
  c[a + 40] = f;
}
CSa.X = 1;
function FTa(a) {
  xe(a);
}
FTa.X = 1;
function GTa(a, d, e, f) {
  var g = b;
  b += 102;
  var h = g + 1,
    i = g + 5,
    j = g + 9,
    l = g + 13,
    m = g + 17,
    n = g + 21,
    p = g + 25,
    r = g + 29,
    s = g + 33;
  k[g] = f;
  f = (($j(c[a + 1]) | 0) != (c[a + 34] | 0)) & 1;
  Q(i, d, g);
  wn(h, e, i);
  f & 1
    ? (kQ(m, a + 18, h),
      (c[j] = c[m]),
      (k[j] = k[m]),
      (c[j + 1] = c[m + 1]),
      (k[j + 1] = k[m + 1]),
      (c[j + 2] = c[m + 2]),
      (k[j + 2] = k[m + 2]),
      (c[j + 3] = c[m + 3]),
      (k[j + 3] = k[m + 3]),
      kQ(n, a + 2, e),
      (c[l] = c[n]),
      (k[l] = k[n]),
      (c[l + 1] = c[n + 1]),
      (k[l + 1] = k[n + 1]),
      (c[l + 2] = c[n + 2]),
      (k[l + 2] = k[n + 2]),
      (c[l + 3] = c[n + 3]),
      (k[l + 3] = k[n + 3]))
    : (kQ(p, a + 2, h),
      (c[j] = c[p]),
      (k[j] = k[p]),
      (c[j + 1] = c[p + 1]),
      (k[j + 1] = k[p + 1]),
      (c[j + 2] = c[p + 2]),
      (k[j + 2] = k[p + 2]),
      (c[j + 3] = c[p + 3]),
      (k[j + 3] = k[p + 3]),
      kQ(r, a + 18, e),
      (c[l] = c[r]),
      (k[l] = k[r]),
      (c[l + 1] = c[r + 1]),
      (k[l + 1] = k[r + 1]),
      (c[l + 2] = c[r + 2]),
      (k[l + 2] = k[r + 2]),
      (c[l + 3] = c[r + 3]),
      (k[l + 3] = k[r + 3]));
  EU(s, j, l, d, k[g]);
  d = s + 12;
  c[d] = c[h];
  k[d] = k[h];
  c[d + 1] = c[h + 1];
  k[d + 1] = k[h + 1];
  c[d + 2] = c[h + 2];
  k[d + 2] = k[h + 2];
  c[d + 3] = c[h + 3];
  k[d + 3] = k[h + 3];
  h = s + 8;
  c[h] = c[e];
  k[h] = k[e];
  c[h + 1] = c[e + 1];
  k[h + 1] = k[e + 1];
  c[h + 2] = c[e + 2];
  k[h + 2] = k[e + 2];
  c[h + 3] = c[e + 3];
  k[h + 3] = k[e + 3];
  f & 1
    ? ((c[s + 23] = c[a + 37]),
      (c[s + 24] = c[a + 36]),
      (c[s + 25] = c[a + 39]),
      (c[s + 26] = c[a + 38]))
    : ((c[s + 23] = c[a + 36]),
      (c[s + 24] = c[a + 37]),
      (c[s + 25] = c[a + 38]),
      (c[s + 26] = c[a + 39]));
  e = c[a + 40];
  v[c[c[e] + 3]](
    e,
    s,
    f & 1 ? c[a + 35] : c[a + 34],
    c[s + 23],
    c[s + 25],
    f & 1 ? c[a + 34] : c[a + 35],
    c[s + 24],
    c[s + 26]
  );
  b = g;
}
GTa.X = 1;
function ASa(a, d, e, f) {
  uTa(a);
  c[a] = HTa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
}
ASa.X = 1;
function ITa(a) {
  xe(a);
}
ITa.X = 1;
function JTa(a, d) {
  var e = b;
  b += 41;
  var f, g;
  f = c[d];
  (f | 0) != (c[a + 1] | 0) &&
    ((g = c[a + 3]),
    v[c[c[g] + 2]](g, ci(f)) &&
      ((g = Sk(c[a + 2])),
      (g = v[c[c[g] + 2]](g, c[a + 1], f, 0)),
      0 != (g | 0) &&
        (CSa(e, c[a + 1], f, c[a + 3]),
        v[c[c[g] + 2]](g, c[a + 1], f, c[a + 2] + 7, e),
        v[c[c[g]]](g),
        (f = Sk(c[a + 2])),
        v[c[c[f] + 15]](f, g))));
  b = e;
  return 1;
}
JTa.X = 1;
function KTa() {}
KTa.X = 1;
function LTa(a) {
  xe(a);
}
LTa.X = 1;
function ESa(a, d, e, f, g, h, i) {
  var j = b;
  b += 8;
  var l = j + 4;
  MTa(a);
  c[a] = NTa + 2;
  sQ(a + 9, e);
  sQ(a + 25, f);
  c[a + 45] = g;
  c[a + 46] = h;
  k[a + 47] = i;
  c[a + 48] = d;
  N(j, a + 25 + 12, a + 9 + 12);
  uC(l, j);
  k[a + 1] = 0 == k[l] ? 0xde0b6b000000000 : 1 / k[l];
  k[a + 1 + 1] = 0 == k[l + 1] ? 0xde0b6b000000000 : 1 / k[l + 1];
  k[a + 1 + 2] = 0 == k[l + 2] ? 0xde0b6b000000000 : 1 / k[l + 2];
  c[a + 5] = (0 > k[a + 1]) & 1;
  c[a + 6] = (0 > k[a + 1 + 1]) & 1;
  c[a + 7] = (0 > k[a + 1 + 2]) & 1;
  k[a + 8] = J(l, j);
  b = j;
}
ESa.X = 1;
function MTa(a) {
  uTa(a);
  c[a] = OTa + 2;
}
MTa.X = 1;
function PTa(a) {
  xe(a);
}
PTa.X = 1;
function QTa(a) {
  c[a] = RTa + 2;
}
QTa.X = 1;
function nY(a, d) {
  return c[a + 3] + 20 * d;
}
nY.X = 1;
function STa(a, d) {
  var e;
  if (0 == k[c[a + 46] + 1]) {
    e = 0;
  } else {
    e = c[d];
    var f = c[a + 46];
    v[c[c[f] + 2]](f, ci(e)) &&
      Dm(c[a + 48], a + 9, a + 25, e, bi(e), e + 1, c[a + 46], k[a + 47]);
    e = 1;
  }
  return e;
}
STa.X = 1;
function TTa() {}
TTa.X = 1;
function UTa(a) {
  xe(a);
}
UTa.X = 1;
function ySa(a, d, e, f) {
  var g = b;
  b += 40;
  var h = g + 12,
    i = g + 24,
    j = g + 28,
    l = g + 32,
    m = g + 36,
    n = g + 37,
    p = g + 38,
    r = g + 39;
  Bc(h, a);
  ww(g, d, h);
  dc(g, i);
  AV(i);
  k[f] = KV(i);
  H(j, i, i + 1, i + 2);
  c[e] = c[j];
  k[e] = k[j];
  c[e + 1] = c[j + 1];
  k[e + 1] = k[j + 1];
  c[e + 2] = c[j + 2];
  k[e + 2] = k[j + 2];
  c[e + 3] = c[j + 3];
  k[e + 3] = k[j + 3];
  k[e + 3] = 0;
  a = Um(e);
  1.4210854715202004e-14 > a
    ? ((k[m] = 1),
      (k[n] = 0),
      (k[p] = 0),
      H(l, m, n, p),
      (c[e] = c[l]),
      (k[e] = k[l]),
      (c[e + 1] = c[l + 1]),
      (k[e + 1] = k[l + 1]),
      (c[e + 2] = c[l + 2]),
      (k[e + 2] = k[l + 2]),
      (c[e + 3] = c[l + 3]),
      (k[e + 3] = k[l + 3]))
    : ((k[r] = ec(a)), KB(e, r));
  b = g;
}
ySa.X = 1;
function wSa(a, d, e, f, g) {
  var h = b;
  b += 8;
  var i = h + 4;
  MTa(a);
  c[a] = VTa + 2;
  var j = a + 9;
  c[j] = c[d];
  k[j] = k[d];
  c[j + 1] = c[d + 1];
  k[j + 1] = k[d + 1];
  c[j + 2] = c[d + 2];
  k[j + 2] = k[d + 2];
  c[j + 3] = c[d + 3];
  k[j + 3] = k[d + 3];
  j = a + 13;
  c[j] = c[e];
  k[j] = k[e];
  c[j + 1] = c[e + 1];
  k[j + 1] = k[e + 1];
  c[j + 2] = c[e + 2];
  k[j + 2] = k[e + 2];
  c[j + 3] = c[e + 3];
  k[j + 3] = k[e + 3];
  c[a + 53] = f;
  c[a + 54] = g;
  eQ(a + 17);
  pQ(a + 17, a + 9);
  eQ(a + 33);
  pQ(a + 33, a + 13);
  N(h, e, d);
  IB(h);
  k[a + 1] = 0 == k[h] ? 0xde0b6b000000000 : 1 / k[h];
  k[a + 1 + 1] = 0 == k[h + 1] ? 0xde0b6b000000000 : 1 / k[h + 1];
  k[a + 1 + 2] = 0 == k[h + 2] ? 0xde0b6b000000000 : 1 / k[h + 2];
  c[a + 5] = (0 > k[a + 1]) & 1;
  c[a + 6] = (0 > k[a + 1 + 1]) & 1;
  c[a + 7] = (0 > k[a + 1 + 2]) & 1;
  N(i, a + 13, a + 9);
  k[a + 8] = J(h, i);
  b = h;
}
wSa.X = 1;
function WTa(a) {
  xe(a);
}
WTa.X = 1;
function XTa(a, d) {
  var e;
  if (0 == k[c[a + 54] + 1]) {
    e = 0;
  } else {
    e = c[d];
    var f = c[a + 54];
    v[c[c[f] + 2]](f, ci(e)) && mm(a + 17, a + 33, e, bi(e), e + 1, c[a + 54]);
    e = 1;
  }
  return e;
}
XTa.X = 1;
function YTa() {}
YTa.X = 1;
function uSa(a, d, e) {
  bLa(a);
  c[a] = ZTa + 2;
  c[a + 4] = e;
  c[a + 5] = d;
  k[a + 1] = k[c[a + 4] + 1];
}
uSa.X = 1;
function $Ta(a) {
  xe(a);
}
$Ta.X = 1;
function aUa(a, d) {
  var e = c[a + 4];
  return v[c[c[e] + 2]](e, d);
}
aUa.X = 1;
function bUa(a, d, e) {
  var f = b;
  b += 2;
  c[f] = -1;
  c[f + 1] = c[a + 5];
  0 == (c[d + 1] | 0) && (c[d + 1] = f);
  var g = c[a + 4],
    d = v[c[c[g] + 3]](g, d, e & 1);
  k[a + 1] = k[c[a + 4] + 1];
  b = f;
  return d;
}
bUa.X = 1;
function cUa() {}
cUa.X = 1;
function tSa(a, d, e, f, g, h, i, j) {
  dUa(a, d, e, f, j, v[c[c[i] + 11]](i));
  c[a] = eUa + 2;
  c[a + 53] = g;
  c[a + 54] = h;
  c[a + 55] = i;
}
tSa.X = 1;
function fUa(a) {
  xe(a);
}
fUa.X = 1;
function gUa(a, d, e, f, g, h) {
  var i = b;
  b += 13;
  var j;
  j = i + 2;
  c[i] = g;
  c[i + 1] = h;
  f <= k[c[a + 53] + 1]
    ? (SV(j, c[a + 54], i, d, e, f),
      (a = c[a + 53]),
      (j = v[c[c[a] + 3]](a, j, 0)))
    : (j = f);
  b = i;
  return j;
}
gUa.X = 1;
function hUa() {}
hUa.X = 1;
function rSa(a, d, e, f, g, h, i, j) {
  dUa(a, d, e, f, j, v[c[c[i] + 11]](i));
  c[a] = iUa + 2;
  c[a + 53] = g;
  c[a + 54] = h;
  c[a + 55] = i;
}
rSa.X = 1;
function jUa(a) {
  xe(a);
}
jUa.X = 1;
function kUa(a, d, e, f, g, h) {
  var i = b;
  b += 13;
  var j;
  j = i + 2;
  c[i] = g;
  c[i + 1] = h;
  f <= k[c[a + 53] + 1]
    ? (SV(j, c[a + 54], i, d, e, f),
      (a = c[a + 53]),
      (j = v[c[c[a] + 3]](a, j, 1)))
    : (j = f);
  b = i;
  return j;
}
kUa.X = 1;
function vY(a) {
  QTa(a);
  c[a] = lUa + 2;
}
vY.X = 1;
function mUa() {}
mUa.X = 1;
function nUa(a) {
  xe(a);
}
nUa.X = 1;
function oUa() {}
oUa.X = 1;
function pUa() {}
pUa.X = 1;
function nSa(a, d, e) {
  GW(a);
  c[a] = qUa + 2;
  c[a + 6] = e;
  c[a + 7] = d;
  k[a + 1] = k[c[a + 6] + 1];
}
nSa.X = 1;
function rUa(a) {
  xe(a);
}
rUa.X = 1;
function sUa(a, d) {
  var e = c[a + 6];
  return v[c[c[e] + 2]](e, d);
}
sUa.X = 1;
function tUa() {}
tUa.X = 1;
function uUa() {
  return 1;
}
uUa.X = 1;
function vUa() {
  return 1;
}
vUa.X = 1;
function wUa() {}
wUa.X = 1;
function xUa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
xUa.X = 1;
function HY(a) {
  c[a] = yUa + 2;
}
HY.X = 1;
function qY(a, d) {
  return c[a + 3] + d;
}
qY.X = 1;
function tY(a) {
  return c[a + 1];
}
tY.X = 1;
function oY(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
oY.X = 1;
function IY(a) {
  return 0 == (c[a + 10] | 0);
}
IY.X = 1;
function zUa(a) {
  return c[a + 2];
}
zUa.X = 1;
function AUa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
AUa.X = 1;
function BUa(a, d, e) {
  var f = b;
  b += 2;
  c[f] = -1;
  c[f + 1] = c[a + 7];
  0 == (c[d + 1] | 0) && (c[d + 1] = f);
  var g = c[a + 6],
    d = v[c[c[g] + 3]](g, d, e & 1);
  k[a + 1] = k[c[a + 6] + 1];
  b = f;
  return d;
}
BUa.X = 1;
function pY(a, d, e) {
  var f, g;
  f = tY(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (tY(a) | 0) && JY(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (c[j] = c[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
pY.X = 1;
function rY(a, d, e, f, g, h, i) {
  var j, l, m, n, p;
  k[g] = (k[(c[e] << 2) + f] - k[a]) * k[d];
  m = (k[((1 - c[e]) << 2) + f] - k[a]) * k[d];
  n = (k[(c[e + 1] << 2) + f + 1] - k[a + 1]) * k[d + 1];
  p = (k[((1 - c[e + 1]) << 2) + f + 1] - k[a + 1]) * k[d + 1];
  var r = k[g] > p;
  a: do {
    if (r) {
      j = 4;
    } else {
      if (n > m) {
        j = 4;
      } else {
        n > k[g] && (k[g] = n);
        p < m && (m = p);
        j = (k[(c[e + 2] << 2) + f + 2] - k[a + 2]) * k[d + 2];
        l = (k[((1 - c[e + 2]) << 2) + f + 2] - k[a + 2]) * k[d + 2];
        var s = k[g] > l;
        do {
          if (!s && j <= m) {
            j > k[g] && (k[g] = j);
            l < m && (m = l);
            l = k[g] < i ? m > h : 0;
            j = 19;
            break a;
          }
        } while (0);
        l = 0;
        j = 19;
      }
    }
  } while (0);
  4 == j && (l = 0);
  return l;
}
rY.X = 1;
function sY(a) {
  return IY(a) ^ 1;
}
sY.X = 1;
function uY(a) {
  xUa(a, 0, tY(a));
  CUa(a);
  oY(a);
}
uY.X = 1;
function CUa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && DUa(a, c[a + 3]), (c[a + 3] = 0));
}
CUa.X = 1;
function DUa(a, d) {
  $1 = a;
  yh(d);
}
DUa.X = 1;
function JY(a, d) {
  var e;
  (zUa(a) | 0) < (d | 0) &&
    ((e = EUa(a, d)),
    AUa(a, 0, tY(a), e),
    xUa(a, 0, tY(a)),
    CUa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
JY.X = 1;
function EUa(a, d) {
  return 0 != (d | 0) ? FUa(a, d, 0) : 0;
}
EUa.X = 1;
function FUa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
FUa.X = 1;
function fSa(a, d, e, f, g, h, i) {
  HY(a);
  c[a] = GUa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
  c[a + 4] = g;
  c[a + 5] = h;
  c[a + 6] = i;
}
fSa.X = 1;
function HUa(a) {
  xe(a);
}
HUa.X = 1;
function IUa(a, d) {
  hSa(a, c[d + 9]);
}
IUa.X = 1;
function JUa(a, d, e) {
  $4 = e;
  v[c[c[a] + 3]](a, d);
}
JUa.X = 1;
function KUa() {}
KUa.X = 1;
function LUa(a) {
  xe(a);
}
LUa.X = 1;
function MUa() {}
MUa.X = 1;
function eSa(a, d, e, f, g, h, i) {
  NUa(a, d, e, c[f + 5]);
  c[a] = OUa + 2;
  c[a + 11] = f;
  c[a + 12] = g;
  c[a + 13] = h;
  sQ(a + 14, i);
}
eSa.X = 1;
function PUa(a) {
  xe(a);
}
PUa.X = 1;
function QUa(a, d, e, f, g) {
  var h = b;
  b += 13;
  var i = h + 2,
    j = h + 6;
  c[h] = f;
  c[h + 1] = g;
  Bo(i, a + 14, d);
  pE(j, c[a + 12], h, i, e);
  a = c[a + 11];
  j = v[c[c[a] + 3]](a, j, 1);
  b = h;
  return j;
}
QUa.X = 1;
function RUa() {}
RUa.X = 1;
function SUa() {}
SUa.X = 1;
function TUa() {}
TUa.X = 1;
function KY(a) {
  c[a] &= -2;
  c[a] &= -3;
  c[a] &= -5;
  c[a] &= -9;
}
KY.X = 1;
function LY(a, d) {
  return c[a + 3] + d;
}
LY.X = 1;
function MY(a) {
  return c[a + 1];
}
MY.X = 1;
function UUa() {}
UUa.X = 1;
function dSa(a, d, e, f, g, h, i) {
  NUa(a, d, e, c[f + 5]);
  c[a] = VUa + 2;
  c[a + 11] = f;
  c[a + 12] = g;
  c[a + 13] = h;
  sQ(a + 14, i);
}
dSa.X = 1;
function WUa(a) {
  xe(a);
}
WUa.X = 1;
function XUa(a, d, e, f, g) {
  var h = b;
  b += 13;
  var i = h + 2,
    j = h + 6;
  c[h] = f;
  c[h + 1] = g;
  Bo(i, a + 14, d);
  pE(j, c[a + 12], h, i, e);
  a = c[a + 11];
  j = v[c[c[a] + 3]](a, j, 1);
  b = h;
  return j;
}
XUa.X = 1;
function gY(a) {
  k[a + 77] = 9999999747378752e-20;
  YUa(a + 79);
}
gY.X = 1;
function YUa(a) {
  KY(a + 4);
}
YUa.X = 1;
function fY(a) {
  c[a] = ZUa + 2;
  k[a + 41] = 0xde0b6b000000000;
  c[a + 42] = 0;
  k[a + 43] = 0;
}
fY.X = 1;
function $Ua(a) {
  xe(a);
}
$Ua.X = 1;
function kY(a) {
  $1 = a;
  aVa();
}
kY.X = 1;
function jY(a, d) {
  $1 = a;
  bVa(d);
}
jY.X = 1;
function cVa(a, d, e) {
  var f = b;
  b += 1;
  var g, h, i, j;
  g = c[a + 7] & 1 ? e : d;
  d = c[a + 7] & 1 ? d : e;
  e = bi(g);
  h = el(e);
  c[f] = 0;
  dVa(a + 2, h, f);
  i = 0;
  var l = (i | 0) < (h | 0);
  a: do {
    if (l) {
      for (var m = a + 2, n = a + 1, p = a + 8, r = a + 2; ; ) {
        if (0 != (hk(e) | 0)) {
          c[LY(m, i)] = 0;
        } else {
          j = bi(g);
          hi(g, Yk(e, i));
          var s = c[n],
            s = v[c[c[s] + 2]](s, g, d, c[p]);
          c[LY(r, i)] = s;
          hi(g, j);
        }
        i += 1;
        if ((i | 0) >= (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
cVa.X = 1;
function dVa(a, d, e) {
  var f, g;
  f = MY(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (MY(a) | 0) && eVa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (c[j] = c[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
dVa.X = 1;
function fVa(a) {
  var d, e;
  d = MY(a + 2);
  e = 0;
  var f = (e | 0) < (d | 0);
  a: do {
    if (f) {
      for (var g = a + 2, h = a + 2, i = a + 1, j = a + 2; ; ) {
        if (0 != (c[LY(g, e)] | 0)) {
          var l = c[LY(h, e)];
          v[c[c[l]]](l);
          l = c[i];
          v[c[c[l] + 15]](l, c[LY(j, e)]);
        }
        e += 1;
        if ((e | 0) >= (d | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
fVa.X = 1;
function gVa(a) {
  hVa(a);
  xe(a);
}
gVa.X = 1;
function NY(a, d, e, f, g) {
  g &= 1;
  aX(a, d, e, f);
  c[a] = OY + 2;
  iVa(a + 2);
  c[a + 7] = g & 1;
  c[a + 8] = c[d + 1];
  c[a + 9] = 0;
  c[a + 10] = ik(bi(c[a + 7] & 1 ? f : e));
  cVa(a, e, f);
}
NY.X = 1;
function hVa(a) {
  c[a] = OY + 2;
  fVa(a);
  jVa(a + 2);
}
hVa.X = 1;
function PY(a, d, e) {
  var f, g;
  f = AX(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (AX(a) | 0) && POa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (c[j] = c[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
PY.X = 1;
function QY(a, d, e) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  a += 4;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
QY.X = 1;
function kVa(a, d, e) {
  var f = b;
  b += 86;
  var g,
    h = f + 16,
    i = f + 32,
    j = f + 48,
    l = f + 52,
    m = f + 56,
    n = f + 60,
    p = f + 72,
    r = f + 76,
    s = f + 77,
    t = f + 78,
    w = f + 79,
    x = f + 83,
    y = f + 84,
    z = f + 85;
  g = bi(c[a + 1]);
  sQ(f, c[a + 1] + 1);
  sQ(h, c[a + 1] + 17);
  WW(i, f, al(g, e));
  v[c[c[d] + 2]](d, i, j, l);
  g = bi(c[a + 2]);
  v[c[c[g] + 2]](g, c[a + 2] + 1, m, n);
  if (hX(j, l, m, n)) {
    Ji(c[a + 1], i);
    wi(c[a + 1], i);
    i = bi(c[a + 1]);
    hi(c[a + 1], d);
    0 == (c[c[a + 6] + e] | 0) &&
      ((d = c[a + 3]),
      (d = v[c[c[d] + 2]](d, c[a + 1], c[a + 2], c[a + 7])),
      (c[c[a + 6] + e] = d));
    d = c[a + 5];
    g = c[d];
    if ((dI(c[a + 5]) | 0) == (c[a + 1] | 0)) {
      v[c[g + 2]](d, -1, e);
    } else {
      v[c[g + 3]](d, -1, e);
    }
    e = c[c[a + 6] + e];
    v[c[c[e] + 2]](e, c[a + 1], c[a + 2], c[a + 4], c[a + 5]);
    0 != (c[c[a + 4] + 5] | 0) &&
      ((e = c[c[a + 4] + 5]),
      0 != ((v[c[c[e] + 12]](e) & 2) | 0) &&
        ((e = c[c[a + 4] + 5]),
        (d = c[c[e] + 13]),
        (k[r] = 1),
        (k[s] = 1),
        (k[t] = 1),
        H(p, r, s, t),
        v[d](e, j, l, p),
        (j = c[c[a + 4] + 5]),
        (l = c[c[j] + 13]),
        (k[x] = 1),
        (k[y] = 1),
        (k[z] = 1),
        H(w, x, y, z),
        v[l](j, m, n, w)));
    hi(c[a + 1], i);
    Ji(c[a + 1], f);
    wi(c[a + 1], h);
  }
  b = f;
}
kVa.X = 1;
function lVa() {}
lVa.X = 1;
function mVa(a, d, e, f, g) {
  var h = b;
  b += 163;
  var i,
    j,
    l,
    m = h + 8,
    n,
    p = h + 13,
    r = h + 14,
    s = h + 18,
    t = h + 22,
    w = h + 38,
    x = h + 54,
    y = h + 70,
    z = h + 78,
    A = h + 83,
    C = h + 99,
    B = h + 115,
    K = h + 131,
    E = h + 135,
    G = h + 139,
    M = h + 143,
    L = h + 147;
  i = c[a + 7] & 1 ? e : d;
  j = c[a + 7] & 1 ? d : e;
  l = bi(i);
  (ik(l) | 0) != (c[a + 10] | 0) && (fVa(a), cVa(a, d, e));
  d = hk(l);
  nVa(h, i, j, c[a + 1], f, g, LY(a + 2, 0), c[a + 8]);
  XX(m);
  for (var f = 0, e = a + 2, F = a + 2, I = a + 2; (f | 0) < (MY(e) | 0); ) {
    if (0 != (c[LY(F, f)] | 0)) {
      n = c[LY(I, f)];
      v[c[c[n] + 4]](n, m);
      for (n = 0; (n | 0) < (AX(m) | 0); ) {
        0 != (Xj(c[ZX(m, n)]) | 0) && (fI(g, c[ZX(m, n)]), DI(g), fI(g, 0)),
          (n += 1);
      }
      c[p] = 0;
      PY(m, 0, p);
    }
    f += 1;
  }
  TX(m);
  g = 0 != (d | 0);
  a: do {
    if (g) {
      uw(x, i + 1),
        WW(w, x, j + 1),
        xi(t, w),
        (m = bi(j)),
        v[c[c[m] + 2]](m, t, r, s),
        QY(y, r, s),
        RY(d, c[d], y, h);
    } else {
      m = MY(a + 2);
      for (p = 0; ; ) {
        if ((p | 0) >= (m | 0)) {
          break a;
        }
        kVa(h, Yk(l, p), p);
        p += 1;
      }
    }
  } while (0);
  r = MY(a + 2);
  XX(z);
  s = 0;
  t = a + 2;
  w = a + 2;
  x = a + 1;
  y = a + 2;
  for (a += 2; (s | 0) < (r | 0); ) {
    0 != (c[LY(t, s)] | 0) &&
      ((d = Yk(l, s)),
      xi(A, i + 1),
      xi(C, i + 17),
      WW(L, A, al(l, s)),
      xi(B, L),
      v[c[c[d] + 2]](d, B, K, E),
      (d = bi(j)),
      v[c[c[d] + 2]](d, j + 1, G, M),
      hX(K, E, G, M) ||
        ((d = c[LY(w, s)]),
        v[c[c[d]]](d),
        (d = c[x]),
        v[c[c[d] + 15]](d, c[LY(y, s)]),
        (c[LY(a, s)] = 0))),
      (s += 1);
  }
  TX(z);
  b = h;
}
mVa.X = 1;
function RY(a, d, e, f) {
  var g = b;
  b += 17;
  var h = g + 1,
    i = g + 9,
    j = g + 14,
    l = g + 15,
    m = g + 16;
  $1 = a;
  c[g] = d;
  if (0 != (c[g] | 0)) {
    c[h] = c[e];
    k[h] = k[e];
    c[h + 1] = c[e + 1];
    k[h + 1] = k[e + 1];
    c[h + 2] = c[e + 2];
    k[h + 2] = k[e + 2];
    c[h + 3] = c[e + 3];
    k[h + 3] = k[e + 3];
    c[h + 4] = c[e + 4];
    k[h + 4] = k[e + 4];
    c[h + 5] = c[e + 5];
    k[h + 5] = k[e + 5];
    c[h + 6] = c[e + 6];
    k[h + 6] = k[e + 6];
    c[h + 7] = c[e + 7];
    k[h + 7] = k[e + 7];
    oY(i);
    c[j] = 0;
    pY(i, 0, j);
    JY(i, 64);
    for (
      SY(i, g);
      !((a = c[qY(i, tY(i) - 1)]),
      oVa(i),
      TY(a, h) &&
        (sY(a)
          ? ((c[l] = c[a + 9]), SY(i, l), (c[m] = c[a + 10]), SY(i, m))
          : ((d = f), v[c[c[d] + 3]](d, a))),
      0 >= (tY(i) | 0));

    ) {}
    uY(i);
  }
  b = g;
}
RY.X = 1;
function pVa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
pVa.X = 1;
function qVa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
qVa.X = 1;
function rVa(a) {
  return c[a + 2];
}
rVa.X = 1;
function sVa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
sVa.X = 1;
function iVa(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
iVa.X = 1;
function oVa(a) {
  a += 1;
  c[a] -= 1;
}
oVa.X = 1;
function UY(a) {
  c[a] = tVa + 2;
  c[a + 1] = 35;
  c[a + 2] = 0;
}
UY.X = 1;
function uVa(a, d, e, f, g) {
  var h = b;
  b += 32;
  var i,
    j,
    l,
    m,
    n,
    p = h + 16,
    r;
  i = c[a + 7] & 1 ? e : d;
  d = c[a + 7] & 1 ? d : e;
  e = bi(i);
  j = 1;
  l = MY(a + 2);
  m = 0;
  var s = (m | 0) < (l | 0);
  a: do {
    if (s) {
      for (var t = a + 2; ; ) {
        if (
          ((n = Yk(e, m)),
          xi(h, i + 1),
          WW(p, h, al(e, m)),
          Ji(i, p),
          (r = bi(i)),
          hi(i, n),
          (n = c[LY(t, m)]),
          (n = v[c[c[n] + 3]](n, i, d, f, g)),
          n < j && (j = n),
          hi(i, r),
          Ji(i, h),
          (m += 1),
          (m | 0) >= (l | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
  return j;
}
uVa.X = 1;
function vVa(a, d) {
  var e;
  e = 0;
  var f = a + 2,
    g = (e | 0) < (MY(f) | 0);
  a: do {
    if (g) {
      for (var h = a + 2, i = a + 2; ; ) {
        if (0 != (c[LY(h, e)] | 0)) {
          var j = c[LY(i, e)];
          v[c[c[j] + 4]](j, d);
        }
        e += 1;
        if ((e | 0) >= (MY(f) | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
vVa.X = 1;
function eVa(a, d) {
  var e;
  (rVa(a) | 0) < (d | 0) &&
    ((e = wVa(a, d)),
    sVa(a, 0, MY(a), e),
    pVa(a, 0, MY(a)),
    xVa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
eVa.X = 1;
function wVa(a, d) {
  return 0 != (d | 0) ? yVa(a, d, 0) : 0;
}
wVa.X = 1;
function xVa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && zVa(a, c[a + 3]), (c[a + 3] = 0));
}
xVa.X = 1;
function zVa(a, d) {
  $1 = a;
  yh(d);
}
zVa.X = 1;
function yVa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
yVa.X = 1;
function jVa(a) {
  pVa(a, 0, MY(a));
  xVa(a);
  iVa(a);
}
jVa.X = 1;
function SY(a, d) {
  (tY(a) | 0) == (zUa(a) | 0) && JY(a, qVa(a, tY(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
SY.X = 1;
function TY(a, d) {
  return k[a] <= k[d + 4]
    ? k[a + 4] >= k[d]
      ? k[a + 1] <= k[d + 4 + 1]
        ? k[a + 4 + 1] >= k[d + 1]
          ? k[a + 2] <= k[d + 4 + 2] ? k[a + 4 + 2] >= k[d + 2] : 0
          : 0
        : 0
      : 0
    : 0;
}
TY.X = 1;
function nVa(a, d, e, f, g, h, i, j) {
  HY(a);
  c[a] = AVa + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
  c[a + 4] = g;
  c[a + 5] = h;
  c[a + 6] = i;
  c[a + 7] = j;
}
nVa.X = 1;
function BVa(a) {
  xe(a);
}
BVa.X = 1;
function CVa(a, d) {
  var e = b;
  b += 31;
  var f,
    g,
    h = e + 4,
    i = e + 8,
    j = e + 24,
    l = e + 28,
    m = e + 29,
    n = e + 30;
  f = c[d + 9];
  g = Yk(bi(c[a + 1]), f);
  if (0 != (c[c[a + 4] + 5] | 0)) {
    var p = c[c[a + 4] + 5];
    0 != ((v[c[c[p] + 12]](p) & 2) | 0) &&
      (sQ(i, c[a + 1] + 1),
      fh(d, d + 4, 0, i, e, h),
      (i = c[c[a + 4] + 5]),
      (p = c[c[i] + 13]),
      (k[l] = 1),
      (k[m] = 0),
      (k[n] = 0),
      H(j, l, m, n),
      v[p](i, e, h, j));
  }
  kVa(a, g, f);
  b = e;
}
CVa.X = 1;
function Qk(a, d) {
  var e = b;
  b += 9;
  var f,
    g = e + 1,
    h = e + 2,
    i = e + 3,
    j = e + 4,
    l = e + 5,
    m = e + 6,
    n = e + 7,
    p = e + 8;
  f = d & 1;
  UY(a);
  c[a] = VY + 2;
  DVa(a + 3);
  k[e] = 0xde0b6b000000000;
  k[g] = 0xde0b6b000000000;
  k[h] = 0xde0b6b000000000;
  H(a + 8, e, g, h);
  k[i] = -0xde0b6b000000000;
  k[j] = -0xde0b6b000000000;
  k[l] = -0xde0b6b000000000;
  H(a + 12, i, j, l);
  c[a + 16] = 0;
  c[a + 17] = 1;
  k[a + 18] = 0;
  k[m] = 1;
  k[n] = 1;
  k[p] = 1;
  H(a + 19, m, n, p);
  c[a + 1] = 31;
  f & 1 && ((f = Ue(40, 16)), 0 == (f | 0) ? (f = 0) : WY(f), (c[a + 16] = f));
  b = e;
}
Qk.X = 1;
function EVa(a) {
  FVa(a);
  yh(a);
}
EVa.X = 1;
function GVa(a) {
  a += 1;
  c[a] -= 1;
}
GVa.X = 1;
function $k(a, d, e) {
  var f = b;
  b += 36;
  var g = f + 20,
    h = f + 24,
    i = f + 28,
    j = a + 17;
  c[j] += 1;
  c[f + 19] = 0;
  xi(f, d);
  c[f + 16] = e;
  c[f + 17] = Ie(e);
  k[f + 18] = v[c[c[e] + 11]](e);
  v[c[c[e] + 2]](e, d, g, h);
  for (var d = 0, e = a + 8, j = a + 8, l = a + 12, m = a + 12; ; ) {
    k[e + d] > k[g + d] && (k[j + d] = k[g + d]);
    k[l + d] < k[h + d] && (k[m + d] = k[h + d]);
    var n = d + 1,
      d = n;
    if (3 <= (n | 0)) {
      break;
    }
  }
  0 != (c[a + 16] | 0) &&
    (QY(i, g, h), (g = fl(a + 3)), (c[f + 19] = XY(c[a + 16], i, g)));
  HVa(a + 3, f);
  b = f;
}
$k.X = 1;
function HVa(a, d) {
  (fl(a) | 0) == (IVa(a) | 0) && JVa(a, KVa(a, fl(a)));
  YY(c[a + 3] + 20 * c[a + 1], d);
  var e = a + 1;
  c[e] += 1;
}
HVa.X = 1;
function kl(a, d, e, f) {
  var g = b;
  b += 16;
  var h = g + 4,
    i = g + 8,
    f = f & 1;
  xi(Zk(a + 3, d), e);
  if (0 != (c[a + 16] | 0)) {
    var j = c[Zk(a + 3, d) + 16];
    v[c[c[j] + 2]](j, e, g, h);
    QY(i, g, h);
    ZY(c[a + 16], c[Zk(a + 3, d) + 19], i);
  }
  if (f & 1) {
    v[c[c[a] + 16]](a);
  }
  b = g;
}
kl.X = 1;
function gl(a, d) {
  var e = a + 17;
  c[e] += 1;
  0 != (c[a + 16] | 0) && $Y(c[a + 16], c[Zk(a + 3, d) + 19]);
  LVa(a + 3, d, fl(a + 3) - 1);
  0 != (c[a + 16] | 0) && (c[c[Zk(a + 3, d) + 19] + 9] = d);
  GVa(a + 3);
}
gl.X = 1;
function LVa(a, d, e) {
  var f = b;
  b += 20;
  YY(f, c[a + 3] + 20 * d);
  MVa(c[a + 3] + 20 * d, c[a + 3] + 20 * e);
  MVa(c[a + 3] + 20 * e, f);
  b = f;
}
LVa.X = 1;
function NVa(a, d) {
  var e;
  e = a + 17;
  c[e] += 1;
  var f = fl(a + 3) - 1;
  e = f;
  f = 0 <= (f | 0);
  a: do {
    if (f) {
      for (var g = a + 3; ; ) {
        (c[Zk(g, e) + 16] | 0) == (d | 0) && gl(a, e);
        var h = e - 1;
        e = h;
        if (!(0 <= (h | 0))) {
          break a;
        }
      }
    }
  } while (0);
  v[c[c[a] + 16]](a);
}
NVa.X = 1;
function OVa(a) {
  var d = b;
  b += 22;
  var e = d + 4,
    f = d + 5,
    g = d + 6,
    h = d + 7,
    i = d + 11,
    j = d + 12,
    l = d + 13,
    m = d + 14,
    n = d + 18,
    p;
  k[e] = 0xde0b6b000000000;
  k[f] = 0xde0b6b000000000;
  k[g] = 0xde0b6b000000000;
  H(d, e, f, g);
  e = a + 8;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  k[i] = -0xde0b6b000000000;
  k[j] = -0xde0b6b000000000;
  k[l] = -0xde0b6b000000000;
  H(h, i, j, l);
  i = a + 12;
  c[i] = c[h];
  k[i] = k[h];
  c[i + 1] = c[h + 1];
  k[i + 1] = k[h + 1];
  c[i + 2] = c[h + 2];
  k[i + 2] = k[h + 2];
  c[i + 3] = c[h + 3];
  k[i + 3] = k[h + 3];
  h = 0;
  i = a + 3;
  j = (h | 0) < (fl(i) | 0);
  a: do {
    if (j) {
      for (
        var l = a + 3, e = a + 3, f = a + 8, g = a + 8, r = a + 12, s = a + 12;
        ;

      ) {
        p = c[Zk(l, h) + 16];
        v[c[c[p] + 2]](p, Zk(e, h), m, n);
        for (p = 0; ; ) {
          k[f + p] > k[m + p] && (k[g + p] = k[m + p]);
          k[r + p] < k[n + p] && (k[s + p] = k[n + p]);
          var t = p + 1;
          p = t;
          if (3 <= (t | 0)) {
            break;
          }
        }
        h += 1;
        if ((h | 0) >= (fl(i) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = d;
}
OVa.X = 1;
function PVa(a, d, e, f) {
  var g = b;
  b += 62;
  var h = g + 4,
    i = g + 5,
    j = g + 9,
    l = g + 13,
    m = g + 14,
    n = g + 18,
    p = g + 19,
    r = g + 20,
    s = g + 21,
    t = g + 22,
    w = g + 23,
    x = g + 24,
    y = g + 28,
    z = g + 29,
    A = g + 30,
    C = g + 31,
    B = g + 43,
    K = g + 47,
    E = g + 51,
    G = g + 52,
    M = g + 53,
    L = g + 54,
    F = g + 58;
  k[h] = 0.5;
  N(i, a + 12, a + 8);
  Q(g, i, h);
  k[l] = 0.5;
  wn(m, a + 12, a + 8);
  Q(j, m, l);
  0 == (fl(a + 3) | 0) &&
    ((k[n] = 0),
    (k[p] = 0),
    (k[r] = 0),
    pe(g, n, p, r),
    (k[s] = 0),
    (k[t] = 0),
    (k[w] = 0),
    pe(j, s, t, w));
  k[y] = v[c[c[a] + 11]](a);
  k[z] = v[c[c[a] + 11]](a);
  k[A] = v[c[c[a] + 11]](a);
  H(x, y, z, A);
  xn(g, x);
  qc(C, d);
  vw(B, d, j);
  k[E] = J(0 + C, g);
  k[G] = J(4 + C, g);
  k[M] = J(8 + C, g);
  H(K, E, G, M);
  N(L, B, K);
  c[e] = c[L];
  k[e] = k[L];
  c[e + 1] = c[L + 1];
  k[e + 1] = k[L + 1];
  c[e + 2] = c[L + 2];
  k[e + 2] = k[L + 2];
  c[e + 3] = c[L + 3];
  k[e + 3] = k[L + 3];
  wn(F, B, K);
  c[f] = c[F];
  k[f] = k[F];
  c[f + 1] = c[F + 1];
  k[f + 1] = k[F + 1];
  c[f + 2] = c[F + 2];
  k[f + 2] = k[F + 2];
  c[f + 3] = c[F + 3];
  k[f + 3] = k[F + 3];
  b = g;
}
PVa.X = 1;
function QVa(a, d, e) {
  var f = b;
  b += 33;
  var g = f + 16,
    h = f + 20,
    i = f + 24,
    j = f + 28,
    l = f + 32;
  eQ(f);
  v[c[c[a] + 2]](a, f, g, h);
  N(j, h, g);
  k[l] = 0.5;
  Q(i, j, l);
  a = 2 * k[i];
  g = 2 * k[i + 1];
  i = 2 * k[i + 2];
  k[e] = d / 12 * (g * g + i * i);
  k[e + 1] = d / 12 * (a * a + i * i);
  k[e + 2] = d / 12 * (a * a + g * g);
  b = f;
}
QVa.X = 1;
function FVa(a) {
  c[a] = VY + 2;
  0 != (c[a + 16] | 0) && (aZ(c[a + 16]), yh(c[a + 16]));
  RVa(a + 3);
}
FVa.X = 1;
function SVa() {
  return D.He;
}
SVa.X = 1;
function TVa() {
  return 24;
}
TVa.X = 1;
function KVa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
KVa.X = 1;
function UVa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
UVa.X = 1;
function VVa(a) {
  return a + 19;
}
VVa.X = 1;
function WVa(a, d) {
  k[a + 18] = d;
}
WVa.X = 1;
function XVa(a) {
  return k[a + 18];
}
XVa.X = 1;
function IVa(a) {
  return c[a + 2];
}
IVa.X = 1;
function pl(a, d, e, f) {
  var g = b;
  b += 99;
  var h,
    i = g + 1,
    j = g + 5,
    l = g + 6,
    m = g + 7,
    n = g + 8,
    p = g + 12,
    r = g + 24,
    s = g + 25,
    t = g + 26,
    w = g + 27,
    x = g + 28,
    y = g + 29,
    z = g + 30,
    A = g + 31,
    C = g + 32,
    B = g + 33,
    K = g + 37,
    E = g + 41,
    G = g + 53,
    M = g + 65,
    L = g + 66,
    F = g + 67,
    I = g + 68,
    R = g + 69,
    O = g + 70,
    Z = g + 71,
    P = g + 72,
    S = g + 76,
    da = g + 77,
    V = g + 81,
    ba = g + 82,
    $ = g + 86,
    Y = g + 87,
    la = g + 91,
    ka = g + 95;
  h = fl(a + 3);
  k[g] = 0;
  k[j] = 0;
  k[l] = 0;
  k[m] = 0;
  H(i, j, l, m);
  j = 0;
  l = (j | 0) < (h | 0);
  a: do {
    if (l) {
      for (m = a + 3; ; ) {
        if (
          (Q(n, nY(m, j) + 12, d + j),
          xn(i, n),
          (k[g] += k[d + j]),
          (j += 1),
          (j | 0) >= (h | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  KB(i, g);
  pQ(e, i);
  k[r] = 0;
  k[s] = 0;
  k[t] = 0;
  k[w] = 0;
  k[x] = 0;
  k[y] = 0;
  k[z] = 0;
  k[A] = 0;
  k[C] = 0;
  Db(p, r, s, t, w, x, y, z, A, C);
  j = 0;
  n = (j | 0) < (h | 0);
  a: do {
    if (n) {
      r = a + 3;
      for (s = a + 3; ; ) {
        if (
          ((t = c[nY(r, j) + 16]),
          v[c[c[t] + 8]](t, k[d + j], B),
          (t = nY(s, j)),
          N(K, t + 12, i),
          ue(E, t),
          LC(0 + E, B),
          LC(4 + E, B + 1),
          LC(8 + E, B + 2),
          ww(G, t, E),
          Wb(E, G),
          xn(0 + p, 0 + E),
          xn(4 + p, 4 + E),
          xn(8 + p, 8 + E),
          (k[M] = Um(K)),
          (t = 0 + E),
          (k[L] = 0),
          (k[F] = 0),
          pe(t, M, L, F),
          (t = 4 + E),
          (k[I] = 0),
          (k[R] = 0),
          pe(t, I, M, R),
          (t = 8 + E),
          (k[O] = 0),
          (k[Z] = 0),
          pe(t, O, Z, M),
          (t = 0 + E),
          (k[S] = -k[K]),
          Q(P, K, S),
          xn(t, P),
          (t = 4 + E),
          (k[V] = -k[K + 1]),
          Q(da, K, V),
          xn(t, da),
          (t = 8 + E),
          (k[$] = -k[K + 2]),
          Q(ba, K, $),
          xn(t, ba),
          (t = 0 + p),
          Q(Y, 0 + E, d + j),
          xn(t, Y),
          (t = 4 + p),
          Q(la, 4 + E, d + j),
          xn(t, la),
          (t = 8 + p),
          Q(ka, 8 + E, d + j),
          xn(t, ka),
          (j += 1),
          (j | 0) >= (h | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  md(p, e, 9999999747378752e-21, 20);
  pe(f, 0 + p, 4 + p + 1, 8 + p + 2);
  b = g;
}
pl.X = 1;
function YVa(a, d) {
  var e = b;
  b += 32;
  var f,
    g = e + 16,
    h = e + 20,
    i = e + 24,
    j = e + 28;
  f = 0;
  var l = a + 3,
    m = (f | 0) < (fl(l) | 0);
  a: do {
    if (m) {
      for (var n = a + 3, p = g, r = a + 19, s = g, t = h, w = a + 3; ; ) {
        sQ(e, al(a, f));
        var x = c[Zk(n, f) + 16],
          x = v[c[c[x] + 7]](x);
        c[p] = c[x];
        k[p] = k[x];
        c[p + 1] = c[x + 1];
        k[p + 1] = k[x + 1];
        c[p + 2] = c[x + 2];
        k[p + 2] = k[x + 2];
        c[p + 3] = c[x + 3];
        k[p + 3] = k[x + 3];
        ig(i, g, d);
        eX(h, i, r);
        c[s] = c[t];
        k[s] = k[t];
        c[s + 1] = c[t + 1];
        k[s + 1] = k[t + 1];
        c[s + 2] = c[t + 2];
        k[s + 2] = k[t + 2];
        c[s + 3] = c[t + 3];
        k[s + 3] = k[t + 3];
        x = c[Zk(w, f) + 16];
        v[c[c[x] + 6]](x, g);
        ig(j, e + 12, d);
        pQ(e, j);
        kl(a, f, e, 0);
        f += 1;
        if ((f | 0) >= (fl(l) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  f = a + 19;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  v[c[c[a] + 16]](a);
  b = e;
}
YVa.X = 1;
function Kk(a) {
  var d = b;
  b += 16;
  var e,
    f,
    g = d + 4,
    h = d + 8,
    i = 0 != (c[a + 16] | 0);
  a: do {
    if (!i) {
      e = Ue(40, 16);
      0 == (e | 0) ? (e = 0) : WY(e);
      c[a + 16] = e;
      e = 0;
      var j = a + 3;
      if ((e | 0) < (fl(j) | 0)) {
        for (var l = a + 3, m = a + 16; ; ) {
          f = Zk(l, e);
          var n = c[f + 16];
          v[c[c[n] + 2]](n, f, d, g);
          QY(h, d, g);
          c[f + 19] = XY(c[m], h, e);
          e += 1;
          if ((e | 0) >= (fl(j) | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = d;
}
Kk.X = 1;
function ZVa(a, d, e) {
  var f, g, h, i, j;
  HX(a, d, e);
  k[d + 8] = k[a + 18];
  c[d + 7] = fl(a + 3);
  c[d + 6] = 0;
  if (0 != (c[d + 7] | 0)) {
    f = v[c[c[e] + 4]](e, 76, c[d + 7]);
    g = c[f + 2];
    c[d + 6] = v[c[c[e] + 7]](e, g);
    h = 0;
    var l = (h | 0) < (c[d + 7] | 0);
    a: do {
      if (l) {
        for (
          var m = a + 3,
            n = a + 3,
            p = a + 3,
            r = a + 3,
            s = a + 3,
            t = a + 3,
            w = a + 3,
            x = a + 3;
          ;

        ) {
          k[g + 18] = k[nY(m, h) + 18];
          i = e;
          c[g + 16] = v[c[c[i] + 7]](i, c[nY(n, h) + 16]);
          i = e;
          if (0 == (v[c[c[i] + 6]](i, c[nY(p, h) + 16]) | 0)) {
            i = e;
            j = c[nY(t, h) + 16];
            i = v[c[c[i] + 4]](i, v[c[c[j] + 12]](j), 1);
            j = c[nY(w, h) + 16];
            j = v[c[c[j] + 13]](j, c[i + 2], e);
            var y = e;
            v[c[c[y] + 5]](y, i, j, 1346455635, c[nY(x, h) + 16]);
          }
          c[g + 17] = c[nY(r, h) + 17];
          mQ(nY(s, h), g);
          h += 1;
          g += 19;
          if ((h | 0) >= (c[d + 7] | 0)) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, f, D.Af, 1497453121, c[f + 2]);
  }
  return D.qe;
}
ZVa.X = 1;
function MVa(a, d) {
  xi(a, d);
  c[a + 16] = c[d + 16];
  c[a + 17] = c[d + 17];
  k[a + 18] = k[d + 18];
  c[a + 19] = c[d + 19];
  return a;
}
MVa.X = 1;
function YY(a, d) {
  sQ(a, d);
  c[a + 16] = c[d + 16];
  c[a + 17] = c[d + 17];
  k[a + 18] = k[d + 18];
  c[a + 19] = c[d + 19];
}
YY.X = 1;
function JVa(a, d) {
  var e;
  (IVa(a) | 0) < (d | 0) &&
    ((e = $Va(a, d)),
    aWa(a, 0, fl(a), e),
    UVa(a, 0, fl(a)),
    bWa(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
JVa.X = 1;
function $Va(a, d) {
  return 0 != (d | 0) ? cWa(a, d, 0) : 0;
}
$Va.X = 1;
function aWa(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        if ((YY(f + 20 * d, c[h] + 20 * d), (d += 1), (d | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
aWa.X = 1;
function bWa(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && dWa(a, c[a + 3]), (c[a + 3] = 0));
}
bWa.X = 1;
function dWa(a, d) {
  $1 = a;
  yh(d);
}
dWa.X = 1;
function eWa() {
  return D.Pd;
}
eWa.X = 1;
function bZ(a) {
  c[a] = fWa + 2;
}
bZ.X = 1;
function DVa(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
DVa.X = 1;
function wx(a, d) {
  0 == (d | 0)
    ? ((c[a + 16] = 1), (c[a + 17] = 0), (c[a + 18] = 2))
    : 1 == (d | 0)
      ? ((c[a + 16] = 0), (c[a + 17] = 1), (c[a + 18] = 2))
      : 2 == (d | 0) && ((c[a + 16] = 0), (c[a + 17] = 2), (c[a + 18] = 1));
}
wx.X = 1;
function cWa(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(80 * d, 16);
}
cWa.X = 1;
function RVa(a) {
  UVa(a, 0, fl(a));
  bWa(a);
  DVa(a);
}
RVa.X = 1;
function cZ(a) {
  UY(a);
  c[a] = gWa + 2;
  k[a + 3] = 0;
}
cZ.X = 1;
function hWa(a) {
  xe(a);
}
hWa.X = 1;
function iWa() {}
iWa.X = 1;
function PA(a, d, e) {
  var f = b;
  b += 4;
  yW(a);
  c[a] = jWa + 2;
  k[a + 14] = d;
  k[a + 15] = e;
  c[a + 1] = 11;
  wx(a, 1);
  k[a + 13] = k[a + 14] / ec(k[a + 14] * k[a + 14] + k[a + 15] * k[a + 15]);
  b = f;
}
PA.X = 1;
function ox(a, d, e) {
  PA(a, d, e);
  c[a] = kWa + 2;
  wx(a, 2);
}
ox.X = 1;
function Xx(a, d, e) {
  PA(a, d, e);
  c[a] = lWa + 2;
  wx(a, 0);
}
Xx.X = 1;
function dZ(a, d, e) {
  var f = b;
  b += 12;
  var g,
    h,
    i,
    j = f + 4;
  i = f + 8;
  g = 0.5 * k[d + 15];
  h = k[e + c[d + 17]];
  var l = JB(e);
  h > l * k[d + 13]
    ? ((k[f + c[d + 16]] = 0),
      (k[f + c[d + 17]] = g),
      (k[f + c[d + 18]] = 0),
      (c[a] = c[f]),
      (k[a] = k[f]),
      (c[a + 1] = c[f + 1]),
      (k[a + 1] = k[f + 1]),
      (c[a + 2] = c[f + 2]),
      (k[a + 2] = k[f + 2]),
      (c[a + 3] = c[f + 3]),
      (k[a + 3] = k[f + 3]))
    : ((h = ec(
        k[e + c[d + 16]] * k[e + c[d + 16]] +
          k[e + c[d + 18]] * k[e + c[d + 18]]
      )),
      1.1920928955078125e-7 < h
        ? ((i = k[d + 14] / h),
          (k[j + c[d + 16]] = k[e + c[d + 16]] * i),
          (k[j + c[d + 17]] = -g),
          (k[j + c[d + 18]] = k[e + c[d + 18]] * i),
          (c[a] = c[j]),
          (k[a] = k[j]),
          (c[a + 1] = c[j + 1]),
          (k[a + 1] = k[j + 1]),
          (c[a + 2] = c[j + 2]),
          (k[a + 2] = k[j + 2]),
          (c[a + 3] = c[j + 3]),
          (k[a + 3] = k[j + 3]))
        : ((k[i + c[d + 16]] = 0),
          (k[i + c[d + 17]] = -g),
          (k[i + c[d + 18]] = 0),
          (c[a] = c[i]),
          (k[a] = k[i]),
          (c[a + 1] = c[i + 1]),
          (k[a + 1] = k[i + 1]),
          (c[a + 2] = c[i + 2]),
          (k[a + 2] = k[i + 2]),
          (c[a + 3] = c[i + 3]),
          (k[a + 3] = k[i + 3])));
  b = f;
}
dZ.X = 1;
function mWa(a, d, e) {
  dZ(a, d, e);
}
mWa.X = 1;
function nWa(a, d, e, f) {
  var g = b;
  b += 4;
  var h;
  h = 0;
  var i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = g; ; ) {
        dZ(g, a, (h << 2) + d);
        var l = (h << 2) + e;
        c[l] = c[j];
        k[l] = k[j];
        c[l + 1] = c[j + 1];
        k[l + 1] = k[j + 1];
        c[l + 2] = c[j + 2];
        k[l + 2] = k[j + 2];
        c[l + 3] = c[j + 3];
        k[l + 3] = k[j + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
nWa.X = 1;
function oWa(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11;
  dZ(a, d, e);
  0 != v[c[c[d] + 11]](d) &&
    ((c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(f) &&
      ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i)),
    IB(f),
    (k[l] = v[c[c[d] + 11]](d)),
    Q(j, f, l),
    xn(a, j));
  b = f;
}
oWa.X = 1;
function pWa(a, d) {
  var e, f, g;
  e = c[a + 17];
  f = c[a + 16];
  g = c[a + 18];
  var h = a + 15;
  k[h] *= k[d + e] / k[a + 3 + e];
  e = a + 14;
  k[e] *= (k[d + f] / k[a + 3 + f] + k[d + g] / k[a + 3 + g]) / 2;
  k[a + 13] = k[a + 14] / ec(k[a + 14] * k[a + 14] + k[a + 15] * k[a + 15]);
  FX(a, d);
}
pWa.X = 1;
function qWa() {}
qWa.X = 1;
function rWa(a) {
  yh(a);
}
rWa.X = 1;
function sWa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
sWa.X = 1;
function tWa(a, d, e) {
  var f = b;
  b += 45;
  var g = f + 16,
    h = f + 20,
    i = f + 24,
    j = f + 28,
    l = f + 32,
    m = f + 33,
    n = f + 34,
    p = f + 38,
    r = f + 42,
    s = f + 43,
    t = f + 44;
  eQ(f);
  v[c[c[a] + 2]](a, f, g, h);
  N(j, h, g);
  k[l] = 0.5;
  Q(i, j, l);
  h = v[c[c[a] + 11]](a);
  g = 2 * (k[i] + h);
  a = 2 * (k[i + 1] + h);
  i = 2 * (k[i + 2] + h);
  g *= g;
  a *= a;
  i *= i;
  k[m] = 0.0833333283662796 * d;
  k[r] = a + i;
  k[s] = g + i;
  k[t] = g + a;
  H(p, r, s, t);
  Q(n, p, m);
  c[e] = c[n];
  k[e] = k[n];
  c[e + 1] = c[n + 1];
  k[e + 1] = k[n + 1];
  c[e + 2] = c[n + 2];
  k[e + 2] = k[n + 2];
  c[e + 3] = c[n + 3];
  k[e + 3] = k[n + 3];
  b = f;
}
tWa.X = 1;
function uWa() {}
uWa.X = 1;
function vWa(a) {
  yh(a);
}
vWa.X = 1;
function wWa() {}
wWa.X = 1;
function xWa(a) {
  yh(a);
}
xWa.X = 1;
function wY(a, d, e, f, g) {
  bZ(a);
  c[a] = eZ + 2;
  c[a + 1] = f;
  c[a + 2] = g;
  c[a + 3] = d;
  c[a + 4] = e;
  c[a + 5] = 0;
}
wY.X = 1;
function sSa(a, d, e) {
  bZ(a);
  c[a] = eZ + 2;
  c[a + 1] = 0;
  c[a + 2] = 0;
  c[a + 3] = d;
  c[a + 4] = 0;
  c[a + 5] = e;
}
sSa.X = 1;
function yWa() {}
yWa.X = 1;
function zWa() {}
zWa.X = 1;
function AWa(a, d, e, f) {
  var g = b;
  b += 198;
  var h = g + 19,
    i,
    j = g + 53,
    l = g + 69,
    m = g + 85,
    n = g + 101,
    p = g + 117,
    r = g + 133,
    s = g + 149,
    t = g + 165,
    w = g + 169,
    x = g + 173,
    y = g + 177,
    z = g + 181,
    A = g + 182,
    C = g + 186,
    B = g + 190,
    K = g + 194;
  0 != (c[a + 4] | 0)
    ? (fZ(c[a + 1]),
      (l = c[a + 3]),
      (p = c[a + 4]),
      (t = Ie(c[a + 3])),
      (w = Ie(c[a + 4])),
      (x = c[a + 3]),
      (x = v[c[c[x] + 11]](x)),
      (y = c[a + 4]),
      (y = v[c[c[y] + 11]](y)),
      BWa(g, l, p, t, w, x, y, c[a + 1], c[a + 2]),
      QQ(h),
      xi(h, d),
      xi(h + 16, e),
      gZ(g, h, f, 0, 0))
    : ((h = c[a + 3]),
      (i = c[a + 5]),
      ($hasCollision = 0),
      (a = i + 12),
      (i += 16),
      sQ(j, d),
      uw(n, e),
      WW(m, n, j),
      xi(l, m),
      uw(s, j),
      WW(r, s, e),
      xi(p, r),
      (d = c[c[h] + 15]),
      WP(x, a),
      Bo(w, p, x),
      v[d](t, h, w),
      vw(y, l, t),
      (k[z] = J(a, y) - k[i]),
      Q(C, a, z),
      N(A, y, C),
      vw(B, e, A),
      Bo(K, e, a),
      v[c[c[f] + 4]](f, K, B, k[z]));
  b = g;
}
AWa.X = 1;
function CWa() {}
CWa.X = 1;
function DWa(a, d, e, f, g, h) {
  var i = b;
  b += 142;
  var j,
    l = i + 4,
    m = i + 8,
    n = i + 12,
    p = i + 16,
    r = i + 20,
    s = i + 24,
    t = i + 28,
    w = i + 29,
    x = i + 30,
    y = i + 31,
    z = i + 35,
    A = i + 36,
    C = i + 37,
    B = i + 38,
    K = i + 42,
    E,
    G = i + 53,
    M = i + 57,
    L = i + 58,
    F = i + 59,
    I = i + 60,
    R = i + 76,
    O = i + 92,
    Z = i + 108,
    P = i + 124,
    S = i + 128,
    da = i + 129,
    V = i + 130,
    ba = i + 131;
  xY(d, e, 1, i, l);
  xY(f, g, 1, m, n);
  e = c[a + 3];
  e = v[c[c[e] + 4]](e);
  0 != (c[a + 4] | 0) ? ((g = c[a + 4]), (g = v[c[c[g] + 4]](g))) : (g = 0);
  e = JB(l) * e + JB(n) * g;
  N(p, m, i);
  N(r, m, i);
  if (0 == JB(r) + e) {
    j = 0;
  } else {
    r = 0;
    k[t] = 1;
    k[w] = 0;
    k[x] = 0;
    H(s, t, w, x);
    k[z] = 0;
    k[A] = 0;
    k[C] = 0;
    pe(y, z, A, C);
    s = r;
    t = 0;
    hZ(K);
    AWa(a, d, f, K);
    w = c[K + 10] & 1;
    x = K + 5;
    c[B] = c[x];
    k[B] = k[x];
    c[B + 1] = c[x + 1];
    k[B + 1] = k[x + 1];
    c[B + 2] = c[x + 2];
    k[B + 2] = k[x + 2];
    c[B + 3] = c[x + 3];
    k[B + 3] = k[x + 3];
    x = w & 1;
    a: do {
      if (x) {
        if (
          ((w = k[K + 9] + k[h + 43]),
          (z = y),
          (A = K + 1),
          (c[z] = c[A]),
          (k[z] = k[A]),
          (c[z + 1] = c[A + 1]),
          (k[z + 1] = k[A + 1]),
          (c[z + 2] = c[A + 2]),
          (k[z + 2] = k[A + 2]),
          (c[z + 3] = c[A + 3]),
          (k[z + 3] = k[A + 3]),
          (E = J(p, y)),
          1.1920928955078125e-7 >= E + e)
        ) {
          j = 0;
        } else {
          for (
            var z = ba + 10, A = ba + 9, C = B, g = ba + 5, $ = y, Y = ba + 1;
            ;

          ) {
            if (0.0010000000474974513 >= w) {
              k[h + 41] = r;
              a = h + 33;
              c[a] = c[y];
              k[a] = k[y];
              c[a + 1] = c[y + 1];
              k[a + 1] = k[y + 1];
              c[a + 2] = c[y + 2];
              k[a + 2] = k[y + 2];
              c[a + 3] = c[y + 3];
              k[a + 3] = k[y + 3];
              h += 37;
              c[h] = c[B];
              k[h] = k[B];
              c[h + 1] = c[B + 1];
              k[h + 1] = k[B + 1];
              c[h + 2] = c[B + 2];
              k[h + 2] = k[B + 2];
              c[h + 3] = c[B + 3];
              k[h + 3] = k[B + 3];
              j = 1;
              break a;
            }
            if (0 != (c[h + 42] | 0)) {
              E = c[h + 42];
              var la = c[c[E] + 5];
              k[M] = 1;
              k[L] = 1;
              k[F] = 1;
              H(G, M, L, F);
              v[la](E, B, 0.20000000298023224, G);
            }
            E = J(p, y);
            if (1.1920928955078125e-7 >= E + e) {
              j = 0;
              break a;
            }
            E = w / (E + e);
            r += E;
            if (1 < r) {
              j = 0;
              break a;
            }
            if (0 > r) {
              j = 0;
              break a;
            }
            if (r <= s) {
              j = 0;
              break a;
            }
            s = r;
            iZ(d, i, l, r, I);
            iZ(f, m, n, r, R);
            $P(Z, R, I);
            xi(O, Z);
            if (0 != (c[h + 42] | 0)) {
              E = c[h + 42];
              var la = c[c[E] + 5],
                ka = I + 12;
              k[S] = 1;
              k[da] = 0;
              k[V] = 0;
              H(P, S, da, V);
              v[la](E, ka, 0.20000000298023224, P);
            }
            E = h;
            v[c[c[E]]](E, r);
            hZ(ba);
            AWa(a, I, R, ba);
            c[z] & 1
              ? ((w = k[A] + k[h + 43]),
                (c[C] = c[g]),
                (k[C] = k[g]),
                (c[C + 1] = c[g + 1]),
                (k[C + 1] = k[g + 1]),
                (c[C + 2] = c[g + 2]),
                (k[C + 2] = k[g + 2]),
                (c[C + 3] = c[g + 3]),
                (k[C + 3] = k[g + 3]),
                (c[$] = c[Y]),
                (k[$] = k[Y]),
                (c[$ + 1] = c[Y + 1]),
                (k[$ + 1] = k[Y + 1]),
                (c[$ + 2] = c[Y + 2]),
                (k[$ + 2] = k[Y + 2]),
                (c[$ + 3] = c[Y + 3]),
                (k[$ + 3] = k[Y + 3]),
                (t += 1),
                64 < (t | 0)
                  ? ((j = h), v[c[c[j] + 2]](j, -2, t), (j = 0), (E = 1))
                  : (E = 0))
              : ((j = h), v[c[c[j] + 2]](j, -1, t), (j = 0), (E = 1));
            if (0 != (E | 0)) {
              break a;
            }
          }
        }
      } else {
        j = 0;
      }
    } while (0);
  }
  b = i;
  return j;
}
DWa.X = 1;
function iZ(a, d, e, f, g) {
  var h = b;
  b += 36;
  var i = h + 1,
    j = h + 5,
    l = h + 9,
    m = h + 13,
    n = h + 17,
    p = h + 18,
    r = h + 22,
    s = h + 23,
    t = h + 27,
    w = h + 28,
    x = h + 32;
  k[h] = f;
  f = a + 12;
  Q(j, d, h);
  wn(i, f, j);
  pQ(g, i);
  i = d = JB(e);
  0.7853981852531433 < i * k[h] && (d = i = 0.7853981852531433 / k[h]);
  0.0010000000474974513 > i
    ? ((k[n] = 0.5 * k[h] - 0.02083333395421505 * k[h] * k[h] * k[h] * d * d),
      Q(m, e, n),
      (c[l] = c[m]),
      (k[l] = k[m]),
      (c[l + 1] = c[m + 1]),
      (k[l + 1] = k[m + 1]),
      (c[l + 2] = c[m + 2]),
      (k[l + 2] = k[m + 2]),
      (c[l + 3] = c[m + 3]),
      (k[l + 3] = k[m + 3]))
    : ((k[r] = ud(0.5 * d * k[h]) / d),
      Q(p, e, r),
      (c[l] = c[p]),
      (k[l] = k[p]),
      (c[l + 1] = c[p + 1]),
      (k[l + 1] = k[p + 1]),
      (c[l + 2] = c[p + 2]),
      (k[l + 2] = k[p + 2]),
      (c[l + 3] = c[p + 3]),
      (k[l + 3] = k[p + 3]));
  e = l + 1;
  m = l + 2;
  k[t] = td(0.5 * d * k[h]);
  NG(s, l, e, m, t);
  dc(a, w);
  BW(x, s, w);
  AV(x);
  zb(g, x);
  b = h;
}
iZ.X = 1;
function EWa() {}
EWa.X = 1;
function FWa(a) {
  xe(a);
}
FWa.X = 1;
function hZ(a) {
  FW(a);
  c[a] = GWa + 2;
  k[a + 9] = 0xde0b6b000000000;
  c[a + 10] = 0;
}
hZ.X = 1;
function HWa(a) {
  xe(a);
}
HWa.X = 1;
function IWa(a, d, e, f) {
  if (f < k[a + 9]) {
    c[a + 10] = 1;
    var g = a + 1;
    c[g] = c[d];
    k[g] = k[d];
    c[g + 1] = c[d + 1];
    k[g + 1] = k[d + 1];
    c[g + 2] = c[d + 2];
    k[g + 2] = k[d + 2];
    c[g + 3] = c[d + 3];
    k[g + 3] = k[d + 3];
    d = a + 5;
    c[d] = c[e];
    k[d] = k[e];
    c[d + 1] = c[e + 1];
    k[d + 1] = k[e + 1];
    c[d + 2] = c[e + 2];
    k[d + 2] = k[e + 2];
    c[d + 3] = c[e + 3];
    k[d + 3] = k[e + 3];
    k[a + 9] = f;
  }
}
IWa.X = 1;
function JWa(a, d, e) {
  gM(a);
  c[a] = KWa + 2;
  c[a + 4] = 0;
  c[a + 5] = 3;
  c[a + 3] = d;
  c[a + 2] = e;
}
JWa.X = 1;
function LWa(a) {
  xe(a);
}
LWa.X = 1;
function MWa() {}
MWa.X = 1;
function NWa(a, d) {
  c[a + 7] = d;
}
NWa.X = 1;
function OWa(a, d) {
  c[a + 8] = d;
}
OWa.X = 1;
function PWa(a, d, e, f, g, h, i, j, l) {
  aX(a, e, f, g);
  c[a] = jZ + 2;
  c[a + 2] = h;
  c[a + 3] = i;
  c[a + 4] = 0;
  c[a + 5] = d;
  c[a + 6] = 0;
  c[a + 7] = j;
  c[a + 8] = l;
}
PWa.X = 1;
function QWa(a) {
  RWa(a);
  xe(a);
}
QWa.X = 1;
function RWa(a) {
  c[a] = jZ + 2;
  if (c[a + 4] & 1 && 0 != (c[a + 5] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 5]);
  }
}
RWa.X = 1;
function SWa(a, d, e, f, g) {
  var h = b;
  b += 73;
  var i,
    j,
    l = h + 8,
    m = h + 42;
  0 == (c[a + 5] | 0) &&
    ((i = c[a + 1]), (c[a + 5] = v[c[c[i] + 3]](i, d, e)), (c[a + 4] = 1));
  fI(g, c[a + 5]);
  i = bi(d);
  j = bi(e);
  QQ(l);
  kZ(m, i, j, c[a + 2], c[a + 3]);
  NWa(m, i);
  OWa(m, j);
  i = v[c[c[i] + 11]](i) + v[c[c[j] + 11]](j);
  k[l + 32] = i + rk(c[a + 5]);
  i = l + 32;
  k[i] *= k[l + 32];
  c[l + 33] = c[f + 12];
  xi(l, d + 1);
  xi(l + 16, e + 1);
  gZ(m, l, g, c[f + 5], 0);
  c[a + 4] & 1 && DI(g);
  b = h;
}
SWa.X = 1;
function TWa(a, d, e, f, g) {
  var h = b;
  b += 312;
  var i, j;
  i = h + 4;
  var l = h + 8,
    m = h + 21,
    n = h + 65,
    p = h + 156,
    r = h + 160,
    s = h + 173,
    t = h + 217,
    w = h + 308;
  $2 = a;
  $5 = f;
  $6 = g;
  a = 1;
  N(h, d + 17 + 12, d + 1 + 12);
  f = Um(h);
  N(i, e + 17 + 12, e + 1 + 12);
  i = Um(i);
  f < gi(d) ? (i < gi(e) ? ((j = a), (i = 24)) : (i = 5)) : (i = 5);
  5 == i &&
    ((j = bi(d)),
    hW(l, pi(e)),
    fY(m),
    gY(n),
    lZ(p, j, l, n),
    mZ(p, d + 1, d + 17, e + 1, e + 17, m) &&
      (oi(d) > k[m + 41] && Zh(d, k[m + 41]),
      oi(e) > k[m + 41] && Zh(e, k[m + 41]),
      a > k[m + 41] && (a = k[m + 41])),
    (l = bi(e)),
    hW(r, pi(d)),
    fY(s),
    gY(t),
    lZ(w, r, l, t),
    mZ(w, d + 1, d + 17, e + 1, e + 17, s) &&
      (oi(d) > k[s + 41] && Zh(d, k[s + 41]),
      oi(e) > k[s + 41] && Zh(e, k[s + 41]),
      a > k[s + 41] && (a = k[s + 41])),
    (j = a));
  b = h;
  return j;
}
TWa.X = 1;
function UWa() {}
UWa.X = 1;
function VWa(a, d) {
  0 != (c[a + 5] | 0) && c[a + 4] & 1 && CX(d, a + 5);
}
VWa.X = 1;
function WWa(a, d, e, f) {
  var g = c[d],
    g = v[c[c[g] + 14]](g, 36);
  0 == (g | 0)
    ? (a = 0)
    : (PWa(g, c[d + 1], d, e, f, c[a + 3], c[a + 2], c[a + 4], c[a + 5]),
      (a = g));
  return a;
}
WWa.X = 1;
function XWa(a, d) {
  nZ(a);
  c[a] = YWa + 2;
  c[a + 3] = d;
  c[a + 1] = 18;
}
XWa.X = 1;
function ZWa(a) {
  yh(a);
}
ZWa.X = 1;
function $Wa() {}
$Wa.X = 1;
function aXa(a, d, e) {
  d = c[d + 3];
  v[c[c[d] + 16]](a, d, e);
}
aXa.X = 1;
function bXa(a, d, e, f) {
  a = c[a + 3];
  v[c[c[a] + 17]](a, d, e, f);
}
bXa.X = 1;
function cXa(a, d, e) {
  d = c[d + 3];
  v[c[c[d] + 15]](a, d, e);
}
cXa.X = 1;
function dXa(a, d, e) {
  a = c[a + 3];
  v[c[c[a] + 8]](a, d, e);
}
dXa.X = 1;
function eXa(a, d, e, f) {
  a = c[a + 3];
  v[c[c[a] + 2]](a, d, e, f);
}
eXa.X = 1;
function fXa(a, d, e, f) {
  a = c[a + 3];
  v[c[c[a] + 18]](a, d, e, f);
}
fXa.X = 1;
function gXa(a, d) {
  var e = c[a + 3];
  v[c[c[e] + 6]](e, d);
}
gXa.X = 1;
function hXa(a) {
  a = c[a + 3];
  return v[c[c[a] + 7]](a);
}
hXa.X = 1;
function iXa(a, d) {
  var e = c[a + 3];
  v[c[c[e] + 10]](e, d);
}
iXa.X = 1;
function jXa(a) {
  a = c[a + 3];
  return v[c[c[a] + 11]](a);
}
jXa.X = 1;
function kXa(a) {
  a = c[a + 3];
  return v[c[c[a] + 19]](a);
}
kXa.X = 1;
function lXa(a, d, e) {
  a = c[a + 3];
  v[c[c[a] + 20]](a, d, e);
}
lXa.X = 1;
function mXa() {
  return D.Zd;
}
mXa.X = 1;
function nXa() {}
nXa.X = 1;
function oXa(a) {
  xe(a);
}
oXa.X = 1;
function oZ(a, d, e, f, g) {
  g &= 1;
  aX(a, d, e, f);
  c[a] = pZ + 2;
  c[a + 2] = g & 1;
  pXa(a + 3, c[d], e, f, g & 1);
}
oZ.X = 1;
function qXa(a) {
  rXa(a);
  xe(a);
}
qXa.X = 1;
function rXa(a) {
  c[a] = pZ + 2;
  qZ(a + 3);
}
rXa.X = 1;
function sXa(a, d) {
  0 != (c[a + 19] | 0) && CX(d, a + 19);
}
sXa.X = 1;
function pXa(a, d, e, f, g) {
  g &= 1;
  EY(a);
  c[a] = rZ + 2;
  c[a + 12] = d;
  c[a + 13] = 0;
  c[a + 1] = g & 1 ? f : e;
  c[a + 2] = g & 1 ? e : f;
  d = c[a + 12];
  c[a + 16] = v[c[c[d] + 3]](d, c[a + 1], c[a + 2]);
  tXa(a);
}
pXa.X = 1;
function tXa(a) {
  var d = c[a + 12];
  v[c[c[d] + 5]](d, c[a + 16]);
}
tXa.X = 1;
function uXa(a) {
  qZ(a);
  xe(a);
}
uXa.X = 1;
function qZ(a) {
  c[a] = rZ + 2;
  tXa(a);
  var d = c[a + 12];
  v[c[c[d] + 4]](d, c[a + 16]);
}
qZ.X = 1;
function vXa(a) {
  EX(a);
}
vXa.X = 1;
function wXa(a, d, e, f) {
  var g = b;
  b += 53;
  var h = g + 16,
    i = g + 32,
    j = g + 48,
    l = g + 49;
  c[a + 13] = e;
  k[a + 14] = d;
  c[a + 11] = f;
  uw(i, c[a + 2] + 1);
  WW(h, i, c[a + 1] + 1);
  xi(g, h);
  e = bi(c[a + 1]);
  v[c[c[e] + 2]](e, g, a + 3, a + 7);
  k[j] = d;
  H(l, j, j, j);
  xn(a + 7, l);
  JC(a + 3, l);
  b = g;
}
wXa.X = 1;
function xXa(a, d, e, f, g) {
  var h, i;
  h = c[a + 2] & 1 ? e : d;
  d = c[a + 2] & 1 ? d : e;
  Uf(bi(d)) &&
    ((e = bi(d)),
    xf(bi(h)) &&
      ((i = v[c[c[e] + 11]](e)),
      fI(g, c[a + 19]),
      wXa(a + 3, i, f, g),
      ak(c[a + 19], h, d),
      v[c[c[e] + 15]](e, a + 3, a + 3 + 3, a + 3 + 7),
      DI(g)));
}
xXa.X = 1;
function yXa(a, d, e, f, g) {
  var h = b;
  b += 120;
  var i,
    j = h + 4,
    l = h + 20,
    m = h + 36,
    n = h + 52,
    p = h + 56,
    r = h + 60,
    s = h + 61,
    t = h + 65,
    w = h + 69;
  $5 = f;
  $6 = g;
  f = c[a + 2] & 1 ? e : d;
  a = c[a + 2] & 1 ? d : e;
  N(h, f + 17 + 12, f + 1 + 12);
  d = Um(h) < gi(f);
  do {
    if (!d && (uw(j, a + 1), WW(l, j, f + 1), WW(m, j, f + 17), Uf(bi(a)))) {
      e = n;
      g = l + 12;
      c[e] = c[g];
      k[e] = k[g];
      c[e + 1] = c[g + 1];
      k[e + 1] = k[g + 1];
      c[e + 2] = c[g + 2];
      k[e + 2] = k[g + 2];
      c[e + 3] = c[g + 3];
      k[e + 3] = k[g + 3];
      hp(n, m + 12);
      e = p;
      g = l + 12;
      c[e] = c[g];
      k[e] = k[g];
      c[e + 1] = c[g + 1];
      k[e + 1] = k[g + 1];
      c[e + 2] = c[g + 2];
      k[e + 2] = k[g + 2];
      c[e + 3] = c[g + 3];
      k[e + 3] = k[g + 3];
      gp(p, m + 12);
      k[r] = pi(f);
      H(s, r, r, r);
      JC(n, s);
      H(t, r, r, r);
      xn(p, t);
      zXa(w, l, m, pi(f), 1);
      k[w + 50] = oi(f);
      e = bi(a);
      if (0 != (e | 0)) {
        v[c[c[e] + 15]](e, w, n, p);
      }
      k[w + 50] < oi(f)
        ? (Zh(f, k[w + 50]), (i = k[w + 50]), (e = 1))
        : (e = 0);
      if (1 == (e | 0)) {
        break;
      }
    }
    i = 1;
  } while (0);
  b = h;
  return i;
}
yXa.X = 1;
function AXa() {}
AXa.X = 1;
function zXa(a, d, e, f, g) {
  EY(a);
  c[a] = BXa + 2;
  sQ(a + 1, d);
  sQ(a + 17, e);
  k[a + 49] = f;
  k[a + 50] = g;
}
zXa.X = 1;
function CXa(a) {
  xe(a);
}
CXa.X = 1;
function DXa(a, d, e, f) {
  var g = b;
  b += 28;
  var h,
    i = g + 2,
    j;
  ct(g);
  c[g] = c[a + 12];
  h = c[a + 2];
  if (xf(bi(c[a + 1]))) {
    sZ(i, d, d + 4, d + 8);
    v[c[c[i] + 10]](i, k[a + 14]);
    d = bi(h);
    hi(h, i);
    j = c[g];
    j = v[c[c[j] + 2]](j, c[a + 1], c[a + 2], c[a + 16]);
    var l = c[a + 11],
      m = c[l];
    if ((dI(c[a + 11]) | 0) == (c[a + 2] | 0)) {
      v[c[m + 2]](l, e, f);
    } else {
      v[c[m + 3]](l, e, f);
    }
    v[c[c[j] + 2]](j, c[a + 1], c[a + 2], c[a + 13], c[a + 11]);
    v[c[c[j]]](j);
    a = c[g];
    v[c[c[a] + 15]](a, j);
    hi(h, d);
    EX(i);
  }
  b = g;
}
DXa.X = 1;
function EXa() {
  return D.Qd;
}
EXa.X = 1;
function FXa() {
  return 2;
}
FXa.X = 1;
function GXa() {
  return 3;
}
GXa.X = 1;
function HXa() {
  return 3;
}
HXa.X = 1;
function IXa() {
  return 1;
}
IXa.X = 1;
function sZ(a, d, e, f) {
  CW(a);
  c[a] = JXa + 2;
  c[a + 1] = 1;
  var g = a + 14;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  d = a + 18;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  a += 22;
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
}
sZ.X = 1;
function KXa(a, d, e, f) {
  v[c[c[a] + 18]](a, d, e, f);
}
KXa.X = 1;
function LXa(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  $1 = a;
  $2 = d;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  b = f;
}
LXa.X = 1;
function MXa(a, d, e) {
  var f = b;
  b += 7;
  var g = f + 4,
    h = f + 5,
    i = f + 6;
  k[g] = J(e, d + 14);
  k[h] = J(e, d + 18);
  k[i] = J(e, d + 22);
  H(f, g, h, i);
  d = (fC(f) << 2) + d + 14;
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  b = f;
}
MXa.X = 1;
function NXa(a, d, e, f) {
  var g = b;
  b += 7;
  var h,
    i,
    j = g + 4,
    l = g + 5,
    m = g + 6;
  h = 0;
  var n = (h | 0) < (f | 0);
  a: do {
    if (n) {
      for (var p = a + 14, r = a + 18, s = a + 22, t = a + 14; ; ) {
        i = (h << 2) + d;
        k[j] = J(i, p);
        k[l] = J(i, r);
        k[m] = J(i, s);
        H(g, j, l, m);
        i = (h << 2) + e;
        var w = (fC(g) << 2) + t;
        c[i] = c[w];
        k[i] = k[w];
        c[i + 1] = c[w + 1];
        k[i + 1] = k[w + 1];
        c[i + 2] = c[w + 2];
        k[i + 2] = k[w + 2];
        c[i + 3] = c[w + 3];
        k[i + 3] = k[w + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
NXa.X = 1;
function OXa(a, d, e) {
  var f = b;
  b += 1;
  tZ(a, e);
  0 != (d | 0) && ((k[f] = -1), LC(e, f));
  b = f;
}
OXa.X = 1;
function PXa(a, d, e, f) {
  v[c[c[a] + 25]](a, d, e);
  v[c[c[a] + 25]](a, ((d + 1) | 0) % 3, f);
}
PXa.X = 1;
function QXa(a, d, e) {
  a = (d << 2) + a + 14;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
}
QXa.X = 1;
function RXa(a, d, e, f) {
  v[c[c[a] + 29]](a, f, d, e);
}
RXa.X = 1;
function SXa(a, d, e) {
  var f = b;
  b += 20;
  var g,
    h,
    i,
    j,
    l = f + 4,
    m = f + 8,
    n = f + 12,
    p = f + 16,
    r;
  tZ(a, f);
  i = J(d, f);
  i -= J(a + 14, f);
  var s = i >= -e;
  a: do {
    if (s) {
      if (i <= e) {
        j = 0;
        var t = a;
        for (r = 0; ; ) {
          if (3 <= (r | 0)) {
            h = 1;
            g = 11;
            break a;
          }
          v[c[c[t] + 24]](a, j, l, m);
          N(n, m, l);
          qn(p, n, f);
          IB(p);
          r = J(d, p);
          r -= J(l, p);
          if (r < -e) {
            h = 0;
            g = 11;
            break a;
          }
          j = r = j + 1;
        }
      } else {
        g = 10;
      }
    } else {
      g = 10;
    }
  } while (0);
  10 == g && (h = 0);
  b = f;
  return h;
}
SXa.X = 1;
function TXa(a, d, e, f) {
  $2 = d;
  tZ(a, e);
  a += 14;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
}
TXa.X = 1;
function tZ(a, d) {
  var e = b;
  b += 12;
  var f = e + 4,
    g = e + 8;
  N(f, a + 18, a + 14);
  N(g, a + 22, a + 14);
  qn(e, f, g);
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  IB(d);
  b = e;
}
tZ.X = 1;
function UXa(a, d, e) {
  gM(a);
  c[a] = VXa + 2;
  c[a + 4] = 0;
  c[a + 5] = 3;
  c[a + 3] = d;
  c[a + 2] = e;
}
UXa.X = 1;
function WXa(a) {
  xe(a);
}
WXa.X = 1;
function XXa() {}
XXa.X = 1;
function YXa(a, d, e, f, g, h, i, j, l) {
  aX(a, e, f, g);
  c[a] = uZ + 2;
  c[a + 2] = h;
  c[a + 3] = i;
  c[a + 4] = 0;
  c[a + 5] = d;
  c[a + 6] = 0;
  c[a + 7] = j;
  c[a + 8] = l;
}
YXa.X = 1;
function ZXa(a) {
  $Xa(a);
  xe(a);
}
ZXa.X = 1;
function $Xa(a) {
  c[a] = uZ + 2;
  if (c[a + 4] & 1 && 0 != (c[a + 5] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 5]);
  }
}
$Xa.X = 1;
function aYa(a, d, e, f) {
  var g = b;
  b += 194;
  var h = g + 16,
    i = g + 60,
    j = g + 73,
    l = g + 99,
    m = g + 190;
  $3 = e;
  $4 = f;
  eQ(g);
  fY(h);
  k[h + 41] = k[a + 50];
  hW(i, k[a + 49]);
  sZ(j, d, d + 4, d + 8);
  gY(l);
  hY(m, i, j, l);
  iY(m, a + 1, a + 17, g, g, h) &&
    k[a + 50] > k[h + 41] &&
    (k[a + 50] = k[h + 41]);
  EX(j);
  b = g;
}
aYa.X = 1;
function bYa(a) {
  EX(a);
  yh(a);
}
bYa.X = 1;
function cYa(a) {
  return k[a + 14];
}
cYa.X = 1;
function dYa(a, d, e, f, g, h, i, j, l, m, n) {
  var p = b;
  b += 56;
  var r = p + 1,
    s = p + 5,
    t = p + 9,
    w = p + 13,
    x = p + 17,
    y = p + 21,
    z = p + 25,
    A = p + 29,
    C = p + 35,
    B = p + 39,
    K = p + 43,
    E = p + 44,
    G = p + 48,
    M = p + 52;
  k[p] = h;
  Jb(r, l, i);
  h = l + 12;
  c[s] = c[h];
  k[s] = k[h];
  c[s + 1] = c[h + 1];
  k[s + 1] = k[h + 1];
  c[s + 2] = c[h + 2];
  k[s + 2] = k[h + 2];
  c[s + 3] = c[h + 3];
  k[s + 3] = k[h + 3];
  Jb(t, m, j);
  j = m + 12;
  c[w] = c[j];
  k[w] = k[j];
  c[w + 1] = c[j + 1];
  k[w + 1] = k[j + 1];
  c[w + 2] = c[j + 2];
  k[w + 2] = k[j + 2];
  c[w + 3] = c[j + 3];
  k[w + 3] = k[j + 3];
  N(x, w, s);
  eYa(y, z, A, p + 33, p + 34, x, r, e, t, g);
  e = JB(y) - f - k[p];
  e > n ||
    ((n = Um(y)),
    1.4210854715202004e-14 >= n
      ? rw(r, a, C)
      : ((k[K] = -(1 / ec(n))),
        Q(B, y, K),
        (c[a] = c[B]),
        (k[a] = k[B]),
        (c[a + 1] = c[B + 1]),
        (k[a + 1] = k[B + 1]),
        (c[a + 2] = c[B + 2]),
        (k[a + 2] = k[B + 2]),
        (c[a + 3] = c[B + 3]),
        (k[a + 3] = k[B + 3])),
    wn(G, m + 12, A),
    Q(M, a, p),
    wn(E, G, M),
    (c[d] = c[E]),
    (k[d] = k[E]),
    (c[d + 1] = c[E + 1]),
    (k[d + 1] = k[E + 1]),
    (c[d + 2] = c[E + 2]),
    (k[d + 2] = k[E + 2]),
    (c[d + 3] = c[E + 3]),
    (k[d + 3] = k[E + 3]));
  b = p;
  return e;
}
dYa.X = 1;
function fYa(a, d, e, f, g, h, i) {
  gYa(a, d, e, f, g, h & 1, i);
}
fYa.X = 1;
function hYa(a, d, e, f, g) {
  var h = b;
  b += 304;
  var i, j, l;
  i = h + 4;
  var m = h + 8,
    n = h + 12,
    p = h + 16,
    r = h + 50,
    s = h + 69,
    t,
    w,
    x = h + 70,
    y,
    z = h + 74,
    A = h + 78,
    C = h + 82,
    B = h + 87,
    K = h + 91,
    E = h + 95,
    G = h + 99,
    M = h + 103,
    L = h + 107,
    F = h + 111,
    I = h + 115,
    R = h + 116,
    O = h + 132,
    Z = h + 136,
    P = h + 137,
    S = h + 141,
    da = h + 153,
    V = h + 165,
    ba = h + 169,
    $ = h + 173,
    Y = h + 177,
    la = h + 189,
    ka = h + 201,
    ja = h + 205,
    ea = h + 209,
    ca = h + 213;
  0 == (c[a + 5] | 0) &&
    ((j = c[a + 1]), (c[a + 5] = v[c[c[j] + 3]](j, d, e)), (c[a + 4] = 1));
  fI(g, c[a + 5]);
  j = bi(d);
  l = bi(e);
  if (10 == (Ie(j) | 0)) {
    if (10 != (Ie(l) | 0)) {
      i = 9;
    } else {
      t = v[c[c[j] + 7]](j);
      c[m] = c[t];
      k[m] = k[t];
      c[m + 1] = c[t + 1];
      k[m + 1] = k[t + 1];
      c[m + 2] = c[t + 2];
      k[m + 2] = k[t + 2];
      c[m + 3] = c[t + 3];
      k[m + 3] = k[t + 3];
      m = v[c[c[l] + 7]](l);
      c[n] = c[m];
      k[n] = k[m];
      c[n + 1] = c[m + 1];
      k[n + 1] = k[m + 1];
      c[n + 2] = c[m + 2];
      k[n + 2] = k[m + 2];
      c[n + 3] = c[m + 3];
      k[n + 3] = k[m + 3];
      n = rk(c[a + 5]);
      m = dYa(h, i, gf(j), cf(j), gf(l), cf(l), Ke(j), Ke(l), d + 1, e + 1, n);
      if (m < n) {
        v[c[c[g] + 4]](g, h, i, m);
      }
      DI(g);
      i = 72;
    }
  } else {
    i = 9;
  }
  do {
    if (9 == i) {
      QQ(p);
      kZ(r, j, l, c[a + 2], c[a + 3]);
      NWa(r, j);
      OWa(r, l);
      i = j;
      i = v[c[c[i] + 11]](i);
      n = l;
      i += v[c[c[n] + 11]](n);
      k[p + 32] = i + rk(c[a + 5]);
      i = p + 32;
      k[i] *= k[p + 32];
      c[p + 33] = c[f + 12];
      xi(p, d + 1);
      xi(p + 16, e + 1);
      m = Ye(j);
      do {
        if (m) {
          if (Ye(l)) {
            iYa(s);
            n = j;
            t = l;
            if (0 != (yg(n) | 0)) {
              if (0 == (yg(t) | 0)) {
                i = 29;
              } else {
                gZ(r, p, s, c[f + 5], 0);
                i = rk(c[a + 5]);
                w = 0;
                y = 1;
                if (c[f + 6] & 1) {
                  y = jYa(yg(n), yg(t), d + 1, e + 1, x) & 1;
                } else {
                  uC(z, r + 1);
                  w = x;
                  var W = z;
                  c[w] = c[W];
                  k[w] = k[W];
                  c[w + 1] = c[W + 1];
                  k[w + 1] = k[W + 1];
                  c[w + 2] = c[W + 2];
                  k[w + 2] = k[W + 2];
                  c[w + 3] = c[W + 3];
                  k[w + 3] = k[W + 3];
                  w = cYa(r);
                }
                y & 1 && kYa(x, yg(n), yg(t), d + 1, e + 1, w - i, i, g);
                c[a + 4] & 1 && DI(g);
                y = 1;
                i = 41;
              }
            } else {
              i = 29;
            }
            a: do {
              if (29 == i) {
                y = 0 != (yg(n) | 0);
                do {
                  if (y && 1 == (Ie(t) | 0)) {
                    gZ(r, p, s, c[f + 5], 0);
                    uC(A, r + 1);
                    KW(C);
                    i = t;
                    vw(B, e + 1, i + 14);
                    PW(C, B);
                    vw(K, e + 1, i + 18);
                    PW(C, K);
                    vw(E, e + 1, i + 22);
                    PW(C, E);
                    i = rk(c[a + 5]);
                    y = cYa(r);
                    lYa(A, yg(n), d + 1, C, y - i, i, g);
                    c[a + 4] & 1 && DI(g);
                    y = 1;
                    UW(C);
                    break a;
                  }
                } while (0);
                y = 0;
              }
            } while (0);
            i = 0 == (y | 0) ? 43 : 69;
          } else {
            i = 43;
          }
        } else {
          i = 43;
        }
      } while (0);
      if (43 == i) {
        gZ(r, p, g, c[f + 5], 0);
        y = 0 != (c[a + 7] | 0);
        a: do {
          if (y && (Xj(cI(g)) | 0) < (c[a + 8] | 0)) {
            uC(F, r + 1);
            n = L;
            m = F;
            c[n] = c[m];
            k[n] = k[m];
            c[n + 1] = c[m + 1];
            k[n + 1] = k[m + 1];
            c[n + 2] = c[m + 2];
            k[n + 2] = k[m + 2];
            c[n + 3] = c[m + 3];
            k[n + 3] = k[m + 3];
            rw(L, G, M);
            $angleLimit = 0.39269909262657166;
            n = j;
            n = v[c[c[n] + 4]](n);
            m = l;
            m = v[c[c[m] + 4]](m);
            t = k[VX];
            n < m
              ? ((m = t / n), (k[I] = m), (n = 1))
              : ((m = t / m), (k[I] = m), (n = 0));
            0.39269909262657166 < m && (k[I] = 0.39269909262657166);
            n & 1 ? xi(R, p) : xi(R, p + 16);
            m = 0;
            t = a + 7;
            w = a + 7;
            for (
              var W = p, U = p + 16, X = p, ma = p + 16, ga = ca, ha = p + 16;
              ;

            ) {
              if ((m | 0) >= (c[t] | 0)) {
                break a;
              }
              1.1920928955078125e-7 < Um(G) &&
                (IV(O, G, I),
                (k[Z] = (m | 0) * (6.2831854820251465 / (c[w] | 0))),
                IV(P, L, Z),
                n & 1
                  ? (EV($, P),
                    BW(ba, $, O),
                    BW(V, ba, P),
                    zb(da, V),
                    ww(S, da, d + 1),
                    Wb(W, S),
                    xi(U, e + 1))
                  : (xi(W, d + 1),
                    EV(ea, P),
                    BW(ja, ea, O),
                    BW(ka, ja, P),
                    zb(la, ka),
                    ww(Y, la, e + 1),
                    Wb(ha, Y)),
                fYa(ca, g, X, ma, R, n & 1, c[f + 5]),
                gZ(r, p, ga, c[f + 5], 0));
              m += 1;
            }
          }
        } while (0);
        y = 0;
      }
      1 != (y | 0) && c[a + 4] & 1 && DI(g);
    }
  } while (0);
  b = h;
}
hYa.X = 1;
function mYa() {}
mYa.X = 1;
function nYa() {}
nYa.X = 1;
function oYa() {}
oYa.X = 1;
function pYa() {}
pYa.X = 1;
function qYa(a, d, e, f, g) {
  var h = b;
  b += 312;
  var i, j;
  i = h + 4;
  var l = h + 8,
    m = h + 21,
    n = h + 65,
    p = h + 156,
    r = h + 160,
    s = h + 173,
    t = h + 217,
    w = h + 308;
  $2 = a;
  $5 = f;
  $6 = g;
  a = 1;
  N(h, d + 17 + 12, d + 1 + 12);
  f = Um(h);
  N(i, e + 17 + 12, e + 1 + 12);
  i = Um(i);
  f < gi(d) ? (i < gi(e) ? ((j = a), (i = 26)) : (i = 5)) : (i = 5);
  5 == i &&
    (c[rYa] & 1
      ? (j = 1)
      : ((j = bi(d)),
        hW(l, pi(e)),
        fY(m),
        gY(n),
        lZ(p, j, l, n),
        mZ(p, d + 1, d + 17, e + 1, e + 17, m) &&
          (oi(d) > k[m + 41] && Zh(d, k[m + 41]),
          oi(e) > k[m + 41] && Zh(e, k[m + 41]),
          a > k[m + 41] && (a = k[m + 41])),
        (l = bi(e)),
        hW(r, pi(d)),
        fY(s),
        gY(t),
        lZ(w, r, l, t),
        mZ(w, d + 1, d + 17, e + 1, e + 17, s) &&
          (oi(d) > k[s + 41] && Zh(d, k[s + 41]),
          oi(e) > k[s + 41] && Zh(e, k[s + 41]),
          a > k[s + 41] && (a = k[s + 41])),
        (j = a)));
  b = h;
  return j;
}
qYa.X = 1;
function sYa(a, d) {
  0 != (c[a + 5] | 0) && c[a + 4] & 1 && CX(d, a + 5);
}
sYa.X = 1;
function tYa(a, d, e, f) {
  var g = c[d],
    g = v[c[c[g] + 14]](g, 36);
  0 == (g | 0)
    ? (a = 0)
    : (YXa(g, c[d + 1], d, e, f, c[a + 3], c[a + 2], c[a + 4], c[a + 5]),
      (a = g));
  return a;
}
tYa.X = 1;
function gYa(a, d, e, f, g, h, i) {
  h &= 1;
  yI(a);
  c[a] = uYa + 2;
  c[a + 40] = d;
  sQ(a + 41, e);
  sQ(a + 57, f);
  sQ(a + 73, g);
  c[a + 89] = h & 1;
  c[a + 90] = i;
}
gYa.X = 1;
function vYa(a) {
  xe(a);
}
vYa.X = 1;
function wYa(a, d, e, f) {
  var g = b;
  b += 118;
  var h = g + 1,
    i = g + 5,
    j = g + 9,
    l = g + 14,
    m = g + 18,
    n = g + 22,
    p = g + 26,
    r = g + 42,
    s = g + 58,
    t = g + 62,
    w = g + 66,
    x = g + 70,
    y = g + 74,
    z = g + 78,
    A = g + 82,
    C = g + 98,
    B = g + 114;
  k[g] = f;
  c[a + 89] & 1
    ? (Q(m, d, g),
      wn(l, e, m),
      uw(p, a + 41),
      WW(r, a + 73, p),
      vw(n, r, l),
      (c[h] = c[n]),
      (k[h] = k[n]),
      (c[h + 1] = c[n + 1]),
      (k[h + 1] = k[n + 1]),
      (c[h + 2] = c[n + 2]),
      (k[h + 2] = k[n + 2]),
      (c[h + 3] = c[n + 3]),
      (k[h + 3] = k[n + 3]),
      N(s, h, e),
      (k[j] = J(s, d)),
      Q(w, d, j),
      wn(t, h, w),
      (c[i] = c[t]),
      (k[i] = k[t]),
      (c[i + 1] = c[t + 1]),
      (k[i + 1] = k[t + 1]),
      (c[i + 2] = c[t + 2]),
      (k[i + 2] = k[t + 2]),
      (c[i + 3] = c[t + 3]),
      (k[i + 3] = k[t + 3]))
    : (Q(y, d, g),
      wn(x, e, y),
      (c[h] = c[x]),
      (k[h] = k[x]),
      (c[h + 1] = c[x + 1]),
      (k[h + 1] = k[x + 1]),
      (c[h + 2] = c[x + 2]),
      (k[h + 2] = k[x + 2]),
      (c[h + 3] = c[x + 3]),
      (k[h + 3] = k[x + 3]),
      uw(A, a + 57),
      WW(C, a + 73, A),
      vw(z, C, e),
      (c[i] = c[z]),
      (k[i] = k[z]),
      (c[i + 1] = c[z + 1]),
      (k[i + 1] = k[z + 1]),
      (c[i + 2] = c[z + 2]),
      (k[i + 2] = k[z + 2]),
      (c[i + 3] = c[z + 3]),
      (k[i + 3] = k[z + 3]),
      N(B, h, i),
      (k[j] = J(B, d)));
  a = c[a + 40];
  v[c[c[a] + 4]](a, d, i, k[j]);
  b = g;
}
wYa.X = 1;
function xYa() {}
xYa.X = 1;
function iYa(a) {
  FW(a);
  c[a] = yYa + 2;
}
iYa.X = 1;
function zYa(a) {
  xe(a);
}
zYa.X = 1;
function eYa(a, d, e, f, g, h, i, j, l, m) {
  var n = b;
  b += 16;
  var p,
    r,
    s,
    t,
    w = n + 4,
    x = n + 8,
    y = n + 12;
  p = J(i, l);
  r = J(i, h);
  s = J(l, h);
  t = 1 - p * p;
  0 == t
    ? (k[f] = 0)
    : ((k[f] = (r - s * p) / t),
      k[f] < -j ? (k[f] = -j) : k[f] > j && (k[f] = j));
  k[g] = k[f] * p - s;
  k[g] < -m
    ? ((k[g] = -m),
      (k[f] = k[g] * p + r),
      k[f] < -j ? (k[f] = -j) : k[f] > j && (k[f] = j))
    : k[g] > m &&
      ((k[g] = m),
      (k[f] = k[g] * p + r),
      k[f] < -j ? (k[f] = -j) : k[f] > j && (k[f] = j));
  Q(n, i, f);
  c[d] = c[n];
  k[d] = k[n];
  c[d + 1] = c[n + 1];
  k[d + 1] = k[n + 1];
  c[d + 2] = c[n + 2];
  k[d + 2] = k[n + 2];
  c[d + 3] = c[n + 3];
  k[d + 3] = k[n + 3];
  Q(w, l, g);
  c[e] = c[w];
  k[e] = k[w];
  c[e + 1] = c[w + 1];
  k[e + 1] = k[w + 1];
  c[e + 2] = c[w + 2];
  k[e + 2] = k[w + 2];
  c[e + 3] = c[w + 3];
  k[e + 3] = k[w + 3];
  N(y, h, d);
  wn(x, y, e);
  c[a] = c[x];
  k[a] = k[x];
  c[a + 1] = c[x + 1];
  k[a + 1] = k[x + 1];
  c[a + 2] = c[x + 2];
  k[a + 2] = k[x + 2];
  c[a + 3] = c[x + 3];
  k[a + 3] = k[x + 3];
  b = n;
}
eYa.X = 1;
function Ch(a, d, e, f) {
  var g = b;
  b += 8;
  var h,
    i,
    j = g + 4;
  vZ(a);
  c[a] = wZ + 2;
  KW(a + 23);
  c[a + 1] = 4;
  xZ(a + 23, e, g);
  h = 0;
  var l = (h | 0) < (e | 0);
  a: do {
    if (l) {
      for (var m = a + 23, n = j; ; ) {
        i = d;
        var p = xg(m, h);
        H(j, i, i + 1, i + 2);
        i = p;
        c[i] = c[n];
        k[i] = k[n];
        c[i + 1] = c[n + 1];
        k[i + 1] = k[n + 1];
        c[i + 2] = c[n + 2];
        k[i + 2] = k[n + 2];
        c[i + 3] = c[n + 3];
        k[i + 3] = k[n + 3];
        d += f;
        h += 1;
        if ((h | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
  bh(a);
  b = g;
}
Ch.X = 1;
function AYa() {
  return 0;
}
AYa.X = 1;
function BYa() {}
BYa.X = 1;
function CYa() {
  return 0;
}
CYa.X = 1;
function DYa() {
  return D.re;
}
DYa.X = 1;
function EYa() {
  return 68;
}
EYa.X = 1;
function xZ(a, d, e) {
  var f, g;
  f = th(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (th(a) | 0) && RW(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = (g << 2) + c[i];
          if (0 != (j | 0)) {
            var l = e;
            c[j] = c[l];
            k[j] = k[l];
            c[j + 1] = c[l + 1];
            k[j + 1] = k[l + 1];
            c[j + 2] = c[l + 2];
            k[j + 2] = k[l + 2];
            c[j + 3] = c[l + 3];
            k[j + 3] = k[l + 3];
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
xZ.X = 1;
function FYa(a, d) {
  var e = a + 3;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  bh(a);
}
FYa.X = 1;
function Vg(a, d) {
  PW(a + 23, d);
  bh(a);
}
Vg.X = 1;
function GYa(a, d, e) {
  var f = b;
  b += 7;
  var g = f + 1,
    h = f + 2,
    i,
    j = f + 3;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  H(a, f, g, h);
  h = -0xde0b6b000000000;
  i = 0;
  var l = d + 23,
    m = (i | 0) < (th(l) | 0);
  a: do {
    if (m) {
      for (var n = d + 23, p = d + 3, r = a, s = j; ; ) {
        if (
          (ig(j, jg(n, i), p),
          (g = J(e, j)),
          g > h &&
            ((h = g),
            (c[r] = c[s]),
            (k[r] = k[s]),
            (c[r + 1] = c[s + 1]),
            (k[r + 1] = k[s + 1]),
            (c[r + 2] = c[s + 2]),
            (k[r + 2] = k[s + 2]),
            (c[r + 3] = c[s + 3]),
            (k[r + 3] = k[s + 3])),
          (i += 1),
          (i | 0) >= (th(l) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
GYa.X = 1;
function HYa(a, d, e, f) {
  var g = b;
  b += 4;
  var h, i, j;
  h = 0;
  i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (;;) {
        if (
          ((k[(h << 2) + e + 3] = -0xde0b6b000000000),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  i = 0;
  var l = a + 23,
    m = (i | 0) < (th(l) | 0);
  a: do {
    if (m) {
      for (var n = g; ; ) {
        gg(g, a, i);
        j = 0;
        var p = (j | 0) < (f | 0);
        b: do {
          if (p) {
            for (;;) {
              h = J((j << 2) + d, g);
              if (h > k[(j << 2) + e + 3]) {
                var r = (j << 2) + e;
                c[r] = c[n];
                k[r] = k[n];
                c[r + 1] = c[n + 1];
                k[r + 1] = k[n + 1];
                c[r + 2] = c[n + 2];
                k[r + 2] = k[n + 2];
                c[r + 3] = c[n + 3];
                k[r + 3] = k[n + 3];
                k[(j << 2) + e + 3] = h;
              }
              j += 1;
              if ((j | 0) >= (f | 0)) {
                break b;
              }
            }
          }
        } while (0);
        i += 1;
        if ((i | 0) >= (th(l) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
HYa.X = 1;
function IYa(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11;
  v[c[c[d] + 16]](a, d, e);
  0 != v[c[c[d] + 11]](d) &&
    ((c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(f) &&
      ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i)),
    IB(f),
    (k[l] = v[c[c[d] + 11]](d)),
    Q(j, f, l),
    xn(a, j));
  b = f;
}
IYa.X = 1;
function JYa(a) {
  return th(a + 23);
}
JYa.X = 1;
function KYa(a) {
  return th(a + 23);
}
KYa.X = 1;
function LYa(a, d, e, f) {
  var g = b;
  b += 8;
  var h,
    i = g + 4;
  h = (d | 0) % (th(a + 23) | 0);
  d = ((d + 1) | 0) % (th(a + 23) | 0);
  gg(g, a, h);
  c[e] = c[g];
  k[e] = k[g];
  c[e + 1] = c[g + 1];
  k[e + 1] = k[g + 1];
  c[e + 2] = c[g + 2];
  k[e + 2] = k[g + 2];
  c[e + 3] = c[g + 3];
  k[e + 3] = k[g + 3];
  gg(i, a, d);
  c[f] = c[i];
  k[f] = k[i];
  c[f + 1] = c[i + 1];
  k[f + 1] = k[i + 1];
  c[f + 2] = c[i + 2];
  k[f + 2] = k[i + 2];
  c[f + 3] = c[i + 3];
  k[f + 3] = k[i + 3];
  b = g;
}
LYa.X = 1;
function MYa(a, d, e) {
  var f = b;
  b += 4;
  gg(f, a, d);
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  b = f;
}
MYa.X = 1;
function NYa(a, d, e) {
  var f, g, h;
  GX(a, d, e);
  f = th(a + 23);
  c[d + 18] = f;
  g = 0 != (f | 0) ? v[c[c[e] + 7]](e, jg(a + 23, 0)) : 0;
  c[d + 16] = g;
  c[d + 17] = 0;
  if (0 != (f | 0)) {
    d = v[c[c[e] + 4]](e, 16, f);
    g = c[d + 2];
    h = 0;
    var i = (h | 0) < (f | 0);
    a: do {
      if (i) {
        for (var j = a + 23; ; ) {
          if ((Mb(jg(j, h), g), (h += 1), (g += 4), (h | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, d, D.q, 1497453121, jg(a + 23, 0));
  }
  return D.Rd;
}
NYa.X = 1;
function OYa(a) {
  PYa(a);
}
OYa.X = 1;
function yW(a) {
  var d = b;
  b += 3;
  var e = d + 1,
    f = d + 2;
  nZ(a);
  c[a] = QYa + 2;
  k[d] = 1;
  k[e] = 1;
  k[f] = 1;
  H(a + 3, d, e, f);
  k[a + 11] = 0.03999999910593033;
  b = d;
}
yW.X = 1;
function FX(a, d) {
  var e = b;
  b += 4;
  var f = a + 3;
  GB(e, d);
  c[f] = c[e];
  k[f] = k[e];
  c[f + 1] = c[e + 1];
  k[f + 1] = k[e + 1];
  c[f + 2] = c[e + 2];
  k[f + 2] = k[e + 2];
  c[f + 3] = c[e + 3];
  k[f + 3] = k[e + 3];
  b = e;
}
FX.X = 1;
function RYa(a, d, e, f) {
  var g = b;
  b += 31;
  var h,
    i,
    j = g + 4,
    l = g + 5,
    m = g + 6,
    n = g + 7,
    p = g + 11,
    r = g + 15,
    s = g + 19,
    t = g + 23,
    w = g + 27;
  h = v[c[c[a] + 11]](a);
  for (i = 0; ; ) {
    k[j] = 0;
    k[l] = 0;
    k[m] = 0;
    H(g, j, l, m);
    k[g + i] = 1;
    var x = c[c[a] + 15];
    rn(p, g, d);
    v[x](n, a, p);
    vw(r, d, n);
    k[f + i] = k[r + i] + h;
    k[g + i] = -1;
    x = c[c[a] + 15];
    rn(w, g, d);
    v[x](t, a, w);
    vw(s, d, t);
    c[r] = c[s];
    k[r] = k[s];
    c[r + 1] = c[s + 1];
    k[r + 1] = k[s + 1];
    c[r + 2] = c[s + 2];
    k[r + 2] = k[s + 2];
    c[r + 3] = c[s + 3];
    k[r + 3] = k[s + 3];
    k[e + i] = k[r + i] - h;
    i = x = i + 1;
    if (3 <= (x | 0)) {
      break;
    }
  }
  b = g;
}
RYa.X = 1;
function SYa(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11;
  v[c[c[d] + 16]](a, d, e);
  0 != v[c[c[d] + 11]](d) &&
    ((c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(f) &&
      ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i)),
    IB(f),
    (k[l] = v[c[c[d] + 11]](d)),
    Q(j, f, l),
    xn(a, j));
  b = f;
}
SYa.X = 1;
function TYa(a) {
  var d = b;
  b += 6;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5;
  yW(a);
  c[a] = UYa + 2;
  k[d] = 1;
  k[e] = 1;
  k[f] = 1;
  H(a + 13, d, e, f);
  k[g] = -1;
  k[h] = -1;
  k[i] = -1;
  H(a + 17, g, h, i);
  c[a + 21] = 0;
  b = d;
}
TYa.X = 1;
function VYa(a, d, e, f) {
  WYa(a, d, e, f, v[c[c[a] + 11]](a));
}
VYa.X = 1;
function WYa(a, d, e, f, g) {
  fh(a + 13, a + 17, g, d, e, f);
}
WYa.X = 1;
function XYa(a) {
  PYa(a);
  yh(a);
}
XYa.X = 1;
function PYa(a) {
  c[a] = wZ + 2;
  UW(a + 23);
  EX(a);
}
PYa.X = 1;
function YYa() {
  return 1;
}
YYa.X = 1;
function ZYa(a, d) {
  FX(a, d);
  cJ(a);
}
ZYa.X = 1;
function cJ(a) {
  var d = b;
  b += 60;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5,
    j = d + 6,
    l = d + 7,
    m = d + 8,
    n = d + 9,
    p = d + 10,
    r = d + 11,
    s = d + 12,
    t = d + 13,
    w = d + 14,
    x = d + 15,
    y = d + 16,
    z = d + 17,
    A = d + 18,
    C = d + 42,
    B = d + 43,
    K = d + 44,
    E = d + 45,
    G = d + 46,
    M = d + 47,
    L = d + 48,
    F = d + 49,
    I = d + 50,
    R = d + 51,
    O = d + 52,
    Z = d + 53,
    P = d + 54,
    S = d + 55,
    da = d + 56,
    V = d + 57,
    ba = d + 58,
    $ = d + 59;
  c[a + 21] = 1;
  0 == (c[$Ya] << 24) >> 24 &&
    0 != (Hb($Ya) | 0) &&
    ((k[d] = 1),
    (k[e] = 0),
    (k[f] = 0),
    H(yZ, d, e, f),
    (k[g] = 0),
    (k[h] = 1),
    (k[i] = 0),
    H(yZ + 4, g, h, i),
    (k[j] = 0),
    (k[l] = 0),
    (k[m] = 1),
    H(yZ + 8, j, l, m),
    (k[n] = -1),
    (k[p] = 0),
    (k[r] = 0),
    H(yZ + 12, n, p, r),
    (k[s] = 0),
    (k[t] = -1),
    (k[w] = 0),
    H(yZ + 16, s, t, w),
    (k[x] = 0),
    (k[y] = 0),
    (k[z] = -1),
    H(yZ + 20, x, y, z));
  k[C] = 0;
  k[B] = 0;
  k[K] = 0;
  H(A, C, B, K);
  e = A + 4;
  k[E] = 0;
  k[G] = 0;
  k[M] = 0;
  H(e, E, G, M);
  E = e + 4;
  k[L] = 0;
  k[F] = 0;
  k[I] = 0;
  H(E, L, F, I);
  L = E + 4;
  k[R] = 0;
  k[O] = 0;
  k[Z] = 0;
  H(L, R, O, Z);
  R = L + 4;
  k[P] = 0;
  k[S] = 0;
  k[da] = 0;
  H(R, P, S, da);
  k[V] = 0;
  k[ba] = 0;
  k[$] = 0;
  H(R + 4, V, ba, $);
  v[c[c[a] + 17]](a, yZ, A, 6);
  P = 0;
  S = a + 11;
  da = a + 17;
  V = a + 11;
  for (
    a += 13;
    !((k[da + P] = k[(P << 2) + A + P] + k[S]),
    (k[a + P] = k[((P + 3) << 2) + A + P] - k[V]),
    (P = ba = P + 1),
    3 <= (ba | 0));

  ) {}
  b = d;
}
cJ.X = 1;
function aZa() {}
aZa.X = 1;
function bZa(a) {
  yh(a);
}
bZa.X = 1;
function cZa() {}
cZa.X = 1;
function dZa(a) {
  yh(a);
}
dZa.X = 1;
function zZ(a, d, e, f, g, h, i, j) {
  h &= 1;
  ZW(a, e);
  c[a] = AZ + 2;
  c[a + 2] = 0;
  c[a + 3] = d;
  c[a + 4] = h & 1;
  c[a + 5] = i;
  c[a + 6] = j;
  d = c[a + 4] & 1 ? g : f;
  f = c[a + 4] & 1 ? f : g;
  0 == (c[a + 3] | 0) &&
    ((g = c[a + 1]),
    v[c[c[g] + 6]](g, d, f) &&
      ((g = c[a + 1]), (c[a + 3] = v[c[c[g] + 3]](g, d, f)), (c[a + 2] = 1)));
}
zZ.X = 1;
function eZa(a) {
  fZa(a);
  xe(a);
}
eZa.X = 1;
function fZa(a) {
  c[a] = AZ + 2;
  if (c[a + 2] & 1 && 0 != (c[a + 3] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 3]);
  }
}
fZa.X = 1;
function gZa(a, d, e, f, g, h) {
  var i = b;
  b += 161;
  var j, l, m;
  m = i + 16;
  var n = i + 32,
    p = i + 48,
    r = i + 64,
    s = i + 76,
    t = i + 92,
    w = i + 108,
    x = i + 124,
    y = i + 128,
    z = i + 132,
    A = i + 136,
    C = i + 140,
    B = i + 141,
    K = i + 145,
    E = i + 149,
    G = i + 153,
    M = i + 157;
  $5 = g;
  g = c[a + 4] & 1 ? f : e;
  e = c[a + 4] & 1 ? e : f;
  j = bi(g);
  l = bi(e);
  f = l + 12;
  l += 16;
  sQ(i, g + 1);
  uw(p, e + 1);
  WW(n, p, i);
  xi(m, n);
  zb(r, d);
  ld(i, r);
  uw(w, i);
  WW(t, w, e + 1);
  xi(s, t);
  d = c[c[j] + 15];
  WP(z, f);
  Bo(y, s, z);
  v[d](x, j, y);
  vw(A, m, x);
  k[C] = J(f, A) - k[l];
  Q(K, f, C);
  N(B, A, K);
  vw(E, e + 1, B);
  m = (k[C] < rk(c[a + 3])) & 1;
  fI(h, c[a + 3]);
  m & 1 &&
    (Bo(G, e + 1, f),
    (c[M] = c[E]),
    (k[M] = k[E]),
    (c[M + 1] = c[E + 1]),
    (k[M + 1] = k[E + 1]),
    (c[M + 2] = c[E + 2]),
    (k[M + 2] = k[E + 2]),
    (c[M + 3] = c[E + 3]),
    (k[M + 3] = k[E + 3]),
    v[c[c[h] + 4]](h, G, M, k[C]));
  b = i;
}
gZa.X = 1;
function hZa(a, d, e, f, g) {
  var h = b;
  b += 38;
  var i,
    j,
    l = h + 4,
    m = h + 5,
    n = h + 6,
    p = h + 7,
    r = h + 8,
    s = h + 12,
    t = h + 16,
    w,
    x = h + 17,
    y = h + 21,
    z = h + 22,
    A = h + 26,
    C = h + 30,
    B = h + 34,
    K = 0 != (c[a + 3] | 0);
  do {
    if (K) {
      i = c[a + 4] & 1 ? d : e;
      j = bi(c[a + 4] & 1 ? e : d);
      i = bi(i) + 12;
      k[l] = 0;
      k[m] = 0;
      k[n] = 0;
      k[p] = 1;
      NG(h, l, m, n, p);
      gZa(a, h, d, e, f, g);
      var E = (Xj(cI(g)) | 0) < (c[a + 6] | 0);
      a: do {
        if (E) {
          rw(i, r, s);
          $angleLimit = 0.39269909262657166;
          w = j;
          w = v[c[c[w] + 4]](w);
          k[t] = k[VX] / w;
          0.39269909262657166 < k[t] && (k[t] = 0.39269909262657166);
          IV(x, r, t);
          w = 0;
          var G = a + 5;
          if ((w | 0) < (c[G] | 0)) {
            for (var M = a + 5; ; ) {
              if (
                ((k[y] = (w | 0) * (6.2831854820251465 / (c[M] | 0))),
                IV(z, i, y),
                EV(B, z),
                BW(C, B, x),
                BW(A, C, z),
                gZa(a, A, d, e, f, g),
                (w += 1),
                (w | 0) >= (c[G] | 0))
              ) {
                break a;
              }
            }
          }
        }
      } while (0);
      c[a + 2] & 1 && 0 != (Xj(c[a + 3]) | 0) && DI(g);
    }
  } while (0);
  b = h;
}
hZa.X = 1;
function iZa(a, d) {
  0 != (c[a + 3] | 0) && c[a + 2] & 1 && CX(d, a + 3);
}
iZa.X = 1;
function jZa(a, d) {
  var e = a + 3;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  bh(a);
}
jZa.X = 1;
function kZa(a, d, e) {
  var f = b;
  b += 15;
  var g = f + 1,
    h = f + 2,
    i,
    j = f + 3;
  i = f + 7;
  var l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  H(a, f, g, h);
  g = -0xde0b6b000000000;
  c[j] = c[e];
  k[j] = k[e];
  c[j + 1] = c[e + 1];
  k[j + 1] = k[e + 1];
  c[j + 2] = c[e + 2];
  k[j + 2] = k[e + 2];
  c[j + 3] = c[e + 3];
  k[j + 3] = k[e + 3];
  e = Um(j);
  9999999747378752e-20 > e
    ? ((k[i] = 1), (k[l] = 0), (k[m] = 0), pe(j, i, l, m))
    : ((k[n] = 1 / ec(e)), LC(j, n));
  l = 0;
  m = d + 24;
  n = (l | 0) < (c[m] | 0);
  a: do {
    if (n) {
      e = a;
      for (h = p; ; ) {
        if (
          (lZa(p, d, l),
          (i = J(j, p)),
          i > g &&
            ((g = i),
            (c[e] = c[h]),
            (k[e] = k[h]),
            (c[e + 1] = c[h + 1]),
            (k[e + 1] = k[h + 1]),
            (c[e + 2] = c[h + 2]),
            (k[e + 2] = k[h + 2]),
            (c[e + 3] = c[h + 3]),
            (k[e + 3] = k[h + 3])),
          (l += 1),
          (l | 0) >= (c[m] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
kZa.X = 1;
function lZa(a, d, e) {
  ig(a, (e << 2) + c[d + 23], d + 3);
}
lZa.X = 1;
function mZa() {
  return 0;
}
mZa.X = 1;
function nZa() {}
nZa.X = 1;
function oZa() {
  return 0;
}
oZa.X = 1;
function pZa() {}
pZa.X = 1;
function qZa() {
  return 0;
}
qZa.X = 1;
function rZa() {
  return D.Td;
}
rZa.X = 1;
function sZa(a) {
  return c[a + 24];
}
sZa.X = 1;
function BZ(a, d) {
  return c[a + 3] + 14 * d;
}
BZ.X = 1;
function tZa(a, d, e, f) {
  var g = b;
  b += 4;
  var h, i, j;
  h = 0;
  i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (;;) {
        if (
          ((k[(h << 2) + e + 3] = -0xde0b6b000000000),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  i = 0;
  var l = a + 24,
    m = (i | 0) < (c[l] | 0);
  a: do {
    if (m) {
      for (var n = g; ; ) {
        lZa(g, a, i);
        j = 0;
        var p = (j | 0) < (f | 0);
        b: do {
          if (p) {
            for (;;) {
              h = J((j << 2) + d, g);
              if (h > k[(j << 2) + e + 3]) {
                var r = (j << 2) + e;
                c[r] = c[n];
                k[r] = k[n];
                c[r + 1] = c[n + 1];
                k[r + 1] = k[n + 1];
                c[r + 2] = c[n + 2];
                k[r + 2] = k[n + 2];
                c[r + 3] = c[n + 3];
                k[r + 3] = k[n + 3];
                k[(j << 2) + e + 3] = h;
              }
              j += 1;
              if ((j | 0) >= (f | 0)) {
                break b;
              }
            }
          }
        } while (0);
        i += 1;
        if ((i | 0) >= (c[l] | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
tZa.X = 1;
function uZa(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11;
  v[c[c[d] + 16]](a, d, e);
  0 != v[c[c[d] + 11]](d) &&
    ((c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(f) &&
      ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i)),
    IB(f),
    (k[l] = v[c[c[d] + 11]](d)),
    Q(j, f, l),
    xn(a, j));
  b = f;
}
uZa.X = 1;
function vZa(a, d, e) {
  var f = b;
  b += 4;
  ig(f, (d << 2) + c[a + 23], a + 3);
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  b = f;
}
vZa.X = 1;
function wZa(a) {
  EX(a);
}
wZa.X = 1;
function xZa(a) {
  c[a] = CZ + 2;
  KW(a + 1);
  yZa(a + 6);
  KW(a + 11);
}
xZa.X = 1;
function zZa(a) {
  AZa(a);
  xe(a);
}
zZa.X = 1;
function BZa(a, d) {
  var e;
  e = CZa(a, d);
  return -1 == (e | 0) ? 0 : DZa(a + 10, e);
}
BZa.X = 1;
function DZ(a) {
  var d;
  1e-6 < sc(k[a])
    ? (a = 5)
    : 1e-6 < sc(k[a + 1])
      ? (a = 5)
      : 1e-6 < sc(k[a + 2]) ? (a = 5) : ((d = 1), (a = 7));
  5 == a && (d = 0);
  return d;
}
DZ.X = 1;
function EZa(a) {
  EX(a);
  yh(a);
}
EZa.X = 1;
function AZa(a) {
  c[a] = CZ + 2;
  UW(a + 11);
  FZa(a + 6);
  UW(a + 1);
}
AZa.X = 1;
function GZa(a) {
  var d = b;
  b += 73;
  var e = d + 20,
    f = d + 21,
    g = d + 22,
    h = d + 23,
    i,
    j = d + 24,
    l,
    m = d + 26,
    n,
    p,
    r = d + 30,
    s = d + 34,
    t = d + 38,
    w = d + 40,
    x = d + 41,
    y = d + 43,
    z = d + 44,
    A = d + 48,
    C = d + 52,
    B = d + 56,
    K = d + 60,
    E = d + 64,
    G = d + 68,
    M = d + 69;
  HZa(d);
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(a + 16, f, g, h);
  for (
    var f = 0,
      L = a + 6,
      F = a + 6,
      I = a + 6,
      R = a + 6,
      O = a + 1,
      Z = j + 1,
      P = a + 1,
      S = a + 11,
      da = a + 11,
      V = a + 11,
      ba = a + 11;
    (f | 0) < (yY(L) | 0);

  ) {
    h = g = rW(BZ(F, f));
    for (i = 0; (i | 0) < (h | 0); ) {
      IZa(
        j,
        c[QV(BZ(I, f), i)] & 65535,
        c[QV(BZ(R, f), ((i + 1) | 0) % (g | 0))] & 65535
      );
      l = BZa(d, j);
      N(m, xg(O, (c[Z] << 16) >> 16), xg(P, (c[j] << 16) >> 16));
      IB(m);
      p = n = 0;
      a: for (; (p | 0) < (th(S) | 0); ) {
        N(r, xg(da, p), m);
        var $ = DZ(r);
        do {
          if (!$ && (wn(s, xg(V, p), m), !DZ(s))) {
            p += 1;
            continue a;
          }
        } while (0);
        n = 1;
        break;
      }
      n & 1 || PW(ba, m);
      0 != (l | 0)
        ? (c[l + 1] = f & 65535)
        : (JZa(t), (c[t] = f & 65535), KZa(d, j, t));
      i += 1;
    }
    f += 1;
  }
  j = 0;
  r = a + 6;
  s = a + 6;
  t = a + 6;
  f = a + 6;
  g = a + 6;
  for (h = a + 6; (j | 0) < (yY(r) | 0); ) {
    m = rW(BZ(s, j));
    i = BZ(t, j) + 5;
    c[w] = 0;
    PV(i, m, w);
    i = 0;
    n = (i | 0) < (m | 0);
    a: do {
      if (n) {
        for (;;) {
          if (
            (IZa(
              x,
              c[QV(BZ(f, j), i)] & 65535,
              c[QV(BZ(g, j), ((i + 1) | 0) % (m | 0))] & 65535
            ),
            (p = l = BZa(d, x)),
            (c[QV(BZ(h, j) + 5, i)] =
              (((((c[l] << 16) >> 16) | 0) == (j | 0) ? c[p + 1] : c[p]) <<
                16) >>
              16),
            (i += 1),
            (i | 0) >= (m | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    j += 1;
  }
  w = 0;
  f = a + 6;
  g = (w | 0) < (yY(f) | 0);
  a: do {
    if (g) {
      h = a + 6;
      i = a + 1;
      l = a + 6;
      n = a + 1;
      p = a + 6;
      L = a + 1;
      F = a + 6;
      for (I = a + 16; ; ) {
        x = rW(BZ(h, w));
        j = x - 2;
        m = xg(i, c[QV(BZ(l, w), 0)]);
        r = 1;
        R = (r | 0) <= (j | 0);
        b: do {
          if (R) {
            for (;;) {
              if (
                ((s = xg(n, c[QV(BZ(p, w), r)])),
                (t = xg(L, c[QV(BZ(F, w), ((r + 1) | 0) % (x | 0))])),
                N(z, m, s),
                N(A, m, t),
                qn(C, z, A),
                (k[y] = 0.5 * JB(C)),
                wn(E, m, s),
                wn(K, E, t),
                (k[G] = 3),
                wC(B, K, G),
                Q(M, B, y),
                xn(I, M),
                (k[e] += k[y]),
                (r += 1),
                !((r | 0) <= (j | 0)))
              ) {
                break b;
              }
            }
          }
        } while (0);
        w += 1;
        if ((w | 0) >= (yY(f) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  KB(a + 16, e);
  LZa(d);
  b = d;
}
GZa.X = 1;
function MZa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
MZa.X = 1;
function NZa(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
NZa.X = 1;
function OZa(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
OZa.X = 1;
function EZ(a) {
  return ((c[a] << 16) >> 16) + (((c[a + 1] << 16) >> 16) << 16);
}
EZ.X = 1;
function FZ(a) {
  return c[a + 2];
}
FZ.X = 1;
function DZa(a, d) {
  return (d << 1) + c[a + 3];
}
DZa.X = 1;
function GZ(a) {
  return c[a + 1];
}
GZ.X = 1;
function PZa(a, d) {
  return (d << 1) + c[a + 3];
}
PZa.X = 1;
function HZ(a) {
  return c[a + 1];
}
HZ.X = 1;
function QZa(a) {
  return c[a + 2];
}
QZa.X = 1;
function KZa(a, d, e) {
  var f, g, h;
  f = (FZ(a + 10) - 1) & EZ(d);
  g = CZa(a, d);
  h = a + 10;
  -1 != (g | 0)
    ? ((a = DZa(h, g)),
      (c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]))
    : ((g = GZ(h)),
      (h = FZ(a + 10)),
      RZa(a + 10, e),
      SZa(a + 15, d),
      (h | 0) < (FZ(a + 10) | 0) && (TZa(a, d), (f = (FZ(a + 10) - 1) & EZ(d))),
      (c[QV(a + 5, g)] = c[QV(a, f)]),
      (c[QV(a, f)] = g));
}
KZa.X = 1;
function UZa(a, d, e, f, g) {
  var h = b;
  b += 4;
  var i, j, l;
  k[f] = 3.4028234663852886e38;
  k[g] = -3.4028234663852886e38;
  i = th(a + 1);
  j = 0;
  var m = (j | 0) < (i | 0);
  a: do {
    if (m) {
      for (var n = a + 1; ; ) {
        if (
          (vw(h, d, jg(n, j)),
          (l = J(h, e)),
          l < k[f] && (k[f] = l),
          l > k[g] && (k[g] = l),
          (j += 1),
          (j | 0) >= (i | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[f] > k[g] && ((a = k[f]), (k[f] = k[g]), (k[g] = a));
  b = h;
}
UZa.X = 1;
function CZa(a, d) {
  var e;
  e = (FZ(a + 10) - 1) & EZ(d);
  if (e >>> 0 >= rW(a) >>> 0) {
    e = -1;
  } else {
    var f = c[sW(a, e)];
    e = f;
    for (
      var g = a + 15, h = a + 5;
      -1 != (f | 0) && 0 == ((VZa(d, WZa(g, e)) & 1) | 0);

    ) {
      e = f = c[sW(h, e)];
    }
  }
  return e;
}
CZa.X = 1;
function RZa(a, d) {
  (GZ(a) | 0) == (FZ(a) | 0) && XZa(a, OZa(a, GZ(a)));
  var e = (c[a + 1] << 1) + c[a + 3];
  0 != (e | 0) &&
    ((c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]));
  e = a + 1;
  c[e] += 1;
}
RZa.X = 1;
function SZa(a, d) {
  (HZ(a) | 0) == (QZa(a) | 0) && YZa(a, MZa(a, HZ(a)));
  var e = (c[a + 1] << 1) + c[a + 3];
  0 != (e | 0) &&
    ((c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]));
  e = a + 1;
  c[e] += 1;
}
SZa.X = 1;
function TZa(a, d) {
  var e = b;
  b += 2;
  var f,
    g,
    h = e + 1,
    i,
    j;
  $3 = d;
  f = FZ(a + 10);
  var l = (rW(a) | 0) < (f | 0);
  a: do {
    if (l) {
      g = rW(a);
      c[e] = 0;
      PV(a, f, e);
      c[h] = 0;
      PV(a + 5, f, h);
      i = 0;
      j = (i | 0) < (f | 0);
      b: do {
        if (j) {
          for (var m = a; ; ) {
            if (((c[QV(m, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      j = (i | 0) < (f | 0);
      b: do {
        if (j) {
          for (m = a + 5; ; ) {
            if (((c[QV(m, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      if ((i | 0) < (g | 0)) {
        for (var m = a + 15, n = a + 10, p = a, r = a + 5, s = a; ; ) {
          if (
            ((j = (FZ(n) - 1) & EZ(PZa(m, i))),
            (c[QV(r, i)] = c[QV(p, j)]),
            (c[QV(s, j)] = i),
            (i += 1),
            (i | 0) >= (g | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = e;
}
TZa.X = 1;
function YZa(a, d) {
  var e;
  (QZa(a) | 0) < (d | 0) &&
    ((e = ZZa(a, d)),
    $Za(a, 0, HZ(a), e),
    NZa(a, 0, HZ(a)),
    a_a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
YZa.X = 1;
function ZZa(a, d) {
  return 0 != (d | 0) ? b_a(a, d, 0) : 0;
}
ZZa.X = 1;
function $Za(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 1) + f;
        if (0 != (i | 0)) {
          var j = (d << 1) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
$Za.X = 1;
function a_a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && c_a(a, c[a + 3]), (c[a + 3] = 0));
}
a_a.X = 1;
function c_a(a, d) {
  $1 = a;
  yh(d);
}
c_a.X = 1;
function b_a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
b_a.X = 1;
function XZa(a, d) {
  var e;
  (FZ(a) | 0) < (d | 0) &&
    ((e = d_a(a, d)),
    e_a(a, 0, GZ(a), e),
    f_a(a, 0, GZ(a)),
    g_a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
XZa.X = 1;
function d_a(a, d) {
  return 0 != (d | 0) ? h_a(a, d, 0) : 0;
}
d_a.X = 1;
function e_a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 1) + f;
        if (0 != (i | 0)) {
          var j = (d << 1) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
e_a.X = 1;
function i_a(a, d) {
  var e;
  e = c[a];
  c[a] = c[d];
  c[d] = e;
}
i_a.X = 1;
function f_a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
f_a.X = 1;
function VZa(a, d) {
  return (((c[a] << 16) >> 16) | 0) == (((c[d] << 16) >> 16) | 0)
    ? (((c[a + 1] << 16) >> 16) | 0) == (((c[d + 1] << 16) >> 16) | 0)
    : 0;
}
VZa.X = 1;
function WZa(a, d) {
  return (d << 1) + c[a + 3];
}
WZa.X = 1;
function yZa(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
yZa.X = 1;
function j_a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
j_a.X = 1;
function k_a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
k_a.X = 1;
function JZa(a) {
  c[a] = -1;
  c[a + 1] = -1;
}
JZa.X = 1;
function g_a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && l_a(a, c[a + 3]), (c[a + 3] = 0));
}
g_a.X = 1;
function l_a(a, d) {
  $1 = a;
  yh(d);
}
l_a.X = 1;
function h_a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
h_a.X = 1;
function FZa(a) {
  m_a(a, 0, yY(a));
  n_a(a);
  yZa(a);
}
FZa.X = 1;
function m_a(a, d, e) {
  var f = (d | 0) < (e | 0);
  a: do {
    if (f) {
      for (var g = a + 3; ; ) {
        if ((IZ(c[g] + 14 * d), (d += 1), (d | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
m_a.X = 1;
function n_a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && o_a(a, c[a + 3]), (c[a + 3] = 0));
}
n_a.X = 1;
function o_a(a, d) {
  $1 = a;
  yh(d);
}
o_a.X = 1;
function p_a(a) {
  f_a(a, 0, GZ(a));
  g_a(a);
  j_a(a);
}
p_a.X = 1;
function q_a(a) {
  NZa(a, 0, HZ(a));
  a_a(a);
  k_a(a);
}
q_a.X = 1;
function IZa(a, d, e) {
  c[a] = d;
  c[a + 1] = e;
  (((c[a + 1] << 16) >> 16) | 0) > (((c[a] << 16) >> 16) | 0) && i_a(a, a + 1);
}
IZa.X = 1;
function HZa(a) {
  vW(a);
  vW(a + 5);
  j_a(a + 10);
  k_a(a + 15);
}
HZa.X = 1;
function nZ(a) {
  UY(a);
  c[a] = r_a + 2;
}
nZ.X = 1;
function s_a(a) {
  yh(a);
}
s_a.X = 1;
function t_a() {}
t_a.X = 1;
function IZ(a) {
  wW(a + 5);
  wW(a);
}
IZ.X = 1;
function LZa(a) {
  q_a(a + 15);
  p_a(a + 10);
  wW(a + 5);
  wW(a);
}
LZa.X = 1;
function u_a(a) {
  return c[a + 23];
}
u_a.X = 1;
function v_a(a) {
  return c[a + 24];
}
v_a.X = 1;
function kf(a, d, e) {
  var f = b;
  b += 113;
  var g = f + 1,
    h = f + 2,
    i,
    j = f + 3,
    l = f + 4,
    m = f + 5,
    n = f + 6,
    p = f + 10,
    r = f + 14,
    s = f + 15,
    t = f + 16,
    w = f + 17,
    x = f + 21;
  i = f + 25;
  var y,
    z,
    A,
    C,
    B = f + 29,
    K = f + 33;
  z = f + 37;
  A = f + 38;
  var E = f + 42,
    G = f + 43,
    M = f + 44;
  C = f + 45;
  var L = f + 49,
    F = f + 50,
    I = f + 51,
    R = f + 52;
  y = f + 53;
  var O = f + 57,
    Z = f + 61,
    P = f + 62,
    S = f + 63,
    da = f + 64,
    V = f + 68,
    ba = f + 72,
    $ = f + 76,
    Y = f + 80,
    la = f + 84,
    ka = f + 85,
    ja = f + 89,
    ea = f + 90,
    ca = f + 91,
    W = f + 92,
    U = f + 96,
    X = f + 100,
    ma = f + 104,
    ga = f + 108,
    ha = f + 112,
    ta = c[d + 1];
  if (8 == (ta | 0)) {
    (k[f] = 0), (k[g] = 0), (k[h] = 0), H(a, f, g, h);
  } else {
    if (0 == (ta | 0)) {
      (i = d + 7),
        (k[j] = 0 <= k[e] ? k[i] : -k[i]),
        (k[l] = 0 <= k[e + 1] ? k[i + 1] : -k[i + 1]),
        (k[m] = 0 <= k[e + 2] ? k[i + 2] : -k[i + 2]),
        H(a, j, l, m);
    } else {
      if (1 == (ta | 0)) {
        H(n, e, e + 1, e + 2),
          (i = d + 14),
          (k[r] = J(n, i)),
          (k[s] = J(n, i + 4)),
          (k[t] = J(n, i + 8)),
          H(p, r, s, t),
          (i = (fC(p) << 2) + i),
          (c[w] = c[i]),
          (k[w] = k[i]),
          (c[w + 1] = c[i + 1]),
          (k[w + 1] = k[i + 1]),
          (c[w + 2] = c[i + 2]),
          (k[w + 2] = k[i + 2]),
          (c[w + 3] = c[i + 3]),
          (k[w + 3] = k[i + 3]),
          H(a, w, w + 1, w + 2);
      } else {
        if (13 == (ta | 0)) {
          (z = d + 7),
            (c[x] = c[z]),
            (k[x] = k[z]),
            (c[x + 1] = c[z + 1]),
            (k[x + 1] = k[z + 1]),
            (c[x + 2] = c[z + 2]),
            (k[x + 2] = k[z + 2]),
            (c[x + 3] = c[z + 3]),
            (k[x + 3] = k[z + 3]),
            H(i, e, e + 1, e + 2),
            (y = dF(d)),
            (d = 1),
            (z = 0),
            (A = 2),
            0 == (y | 0)
              ? ((d = 1), (z = 0), (A = 2))
              : 1 == (y | 0)
                ? ((d = 0), (z = 1), (A = 2))
                : 2 == (y | 0) && ((d = 0), (z = 2), (A = 1)),
            (C = k[x + d]),
            (x = k[x + y]),
            (y = ec(k[i + d] * k[i + d] + k[i + A] * k[i + A])),
            0 != y
              ? ((C /= y),
                (k[B + d] = k[i + d] * C),
                (k[B + z] = 0 > k[i + z] ? -x : x),
                (k[B + A] = k[i + A] * C))
              : ((k[B + d] = C),
                (k[B + z] = 0 > k[i + z] ? -x : x),
                (k[B + A] = 0)),
            H(a, B, B + 1, B + 2);
        } else {
          if (10 == (ta | 0)) {
            H(K, e, e + 1, e + 2),
              (i = gf(d)),
              (B = Ke(d)),
              (k[z] = cf(d)),
              (k[E] = 0),
              (k[G] = 0),
              (k[M] = 0),
              H(A, E, G, M),
              (x = -0xde0b6b000000000),
              (c[C] = c[K]),
              (k[C] = k[K]),
              (c[C + 1] = c[K + 1]),
              (k[C + 1] = k[K + 1]),
              (c[C + 2] = c[K + 2]),
              (k[C + 2] = k[K + 2]),
              (c[C + 3] = c[K + 3]),
              (k[C + 3] = k[K + 3]),
              (e = Um(C)),
              9999999747378752e-20 > e
                ? ((k[L] = 1), (k[F] = 0), (k[I] = 0), pe(C, L, F, I))
                : ((k[R] = 1 / ec(e)), LC(C, R)),
              (k[Z] = 0),
              (k[P] = 0),
              (k[S] = 0),
              H(O, Z, P, S),
              (k[O + B] = i),
              ig($, C, d + 3),
              Q(ba, $, z),
              wn(V, O, ba),
              (k[la] = Le(d)),
              Q(Y, C, la),
              N(da, V, Y),
              (c[y] = c[da]),
              (k[y] = k[da]),
              (c[y + 1] = c[da + 1]),
              (k[y + 1] = k[da + 1]),
              (c[y + 2] = c[da + 2]),
              (k[y + 2] = k[da + 2]),
              (c[y + 3] = c[da + 3]),
              (k[y + 3] = k[da + 3]),
              (e = J(C, y)),
              e > x &&
                ((x = e),
                (c[A] = c[y]),
                (k[A] = k[y]),
                (c[A + 1] = c[y + 1]),
                (k[A + 1] = k[y + 1]),
                (c[A + 2] = c[y + 2]),
                (k[A + 2] = k[y + 2]),
                (c[A + 3] = c[y + 3]),
                (k[A + 3] = k[y + 3])),
              (k[ja] = 0),
              (k[ea] = 0),
              (k[ca] = 0),
              H(ka, ja, ea, ca),
              (k[ka + B] = -i),
              ig(ma, C, d + 3),
              Q(X, ma, z),
              wn(U, ka, X),
              (k[ha] = Le(d)),
              Q(ga, C, ha),
              N(W, U, ga),
              (c[y] = c[W]),
              (k[y] = k[W]),
              (c[y + 1] = c[W + 1]),
              (k[y + 1] = k[W + 1]),
              (c[y + 2] = c[W + 2]),
              (k[y + 2] = k[W + 2]),
              (c[y + 3] = c[W + 3]),
              (k[y + 3] = k[W + 3]),
              (e = J(C, y)),
              e > x &&
                ((c[A] = c[y]),
                (k[A] = k[y]),
                (c[A + 1] = c[y + 1]),
                (k[A + 1] = k[y + 1]),
                (c[A + 2] = c[y + 2]),
                (k[A + 2] = k[y + 2]),
                (c[A + 3] = c[y + 3]),
                (k[A + 3] = k[y + 3])),
              H(a, A, A + 1, A + 2);
          } else {
            if (5 == (ta | 0)) {
              (i = u_a(d)), w_a(a, e, i, v_a(d), d + 3);
            } else {
              if (4 == (ta | 0)) {
                (i = wg(d)), w_a(a, e, i, sh(d), d + 3);
              } else {
                v[c[c[d] + 16]](a, d, e);
              }
            }
          }
        }
      }
    }
  }
  b = f;
}
kf.X = 1;
function w_a(a, d, e, f, g) {
  var h = b;
  b += 4;
  var i, j, l;
  ig(h, d, g);
  i = -0xde0b6b000000000;
  j = -1;
  l = 0;
  var m = (l | 0) < (f | 0);
  a: do {
    if (m) {
      for (;;) {
        if (
          ((d = J(h, (l << 2) + e)),
          d > i && ((i = d), (j = l)),
          (l += 1),
          (l | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  ig(a, (j << 2) + e, g);
  b = h;
}
w_a.X = 1;
function tf(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11,
    m = f + 15;
  c[f] = c[e];
  k[f] = k[e];
  c[f + 1] = c[e + 1];
  k[f + 1] = k[e + 1];
  c[f + 2] = c[e + 2];
  k[f + 2] = k[e + 2];
  c[f + 3] = c[e + 3];
  k[f + 3] = k[e + 3];
  1.4210854715202004e-14 > Um(f) &&
    ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i));
  IB(f);
  kf(j, d, f);
  k[m] = Mf(d);
  Q(l, f, m);
  wn(a, j, l);
  b = f;
}
tf.X = 1;
function Mf(a) {
  var d = c[a + 1];
  return 8 == (d | 0)
    ? dW(a)
    : 0 == (d | 0)
      ? Le(a)
      : 1 == (d | 0)
        ? Le(a)
        : 13 == (d | 0)
          ? Le(a)
          : 10 == (d | 0)
            ? Le(a)
            : 5 == (d | 0) || 4 == (d | 0) ? Le(a) : v[c[c[a] + 11]](a);
}
Mf.X = 1;
function x_a() {
  return 0;
}
x_a.X = 1;
function y_a() {
  return 0;
}
y_a.X = 1;
function z_a() {}
z_a.X = 1;
function A_a() {}
A_a.X = 1;
function B_a() {
  return 0;
}
B_a.X = 1;
function C_a() {}
C_a.X = 1;
function D_a() {
  return 0;
}
D_a.X = 1;
function E_a() {
  return D.Wd;
}
E_a.X = 1;
function df(a, d, e, f) {
  var g = b;
  b += 129;
  var h,
    i = g + 1,
    j = g + 5,
    l = g + 9,
    m,
    n = g + 13,
    p = g + 14,
    r = g + 18,
    s = g + 22,
    t = g + 34,
    w = g + 38,
    x = g + 42,
    y = g + 43,
    z = g + 44,
    A = g + 45,
    C = g + 49,
    B = g + 53,
    K = g + 57,
    E = g + 58,
    G = g + 59,
    M = g + 60,
    L = g + 64,
    F = g + 68,
    I = g + 72,
    R = g + 76,
    O = g + 80,
    Z = g + 84,
    P = g + 88,
    S = g + 89,
    da = g + 90,
    V = g + 91,
    ba = g + 95,
    $ = g + 96,
    Y = g + 97,
    la = g + 98,
    ka = g + 110,
    ja = g + 114,
    ea = g + 118,
    ca = g + 119,
    W = g + 120,
    U = g + 121,
    X = g + 125,
    ma = c[a + 1];
  a: do {
    if (8 == (ma | 0)) {
      h = a;
      k[g] = k[h + 7] + Mf(h);
      h = d + 12;
      H(i, g, g, g);
      N(j, h, i);
      m = e;
      var ga = j;
      c[m] = c[ga];
      k[m] = k[ga];
      c[m + 1] = c[ga + 1];
      k[m + 1] = k[ga + 1];
      c[m + 2] = c[ga + 2];
      k[m + 2] = k[ga + 2];
      c[m + 3] = c[ga + 3];
      k[m + 3] = k[ga + 3];
      wn(l, h, i);
      h = f;
      m = l;
      c[h] = c[m];
      k[h] = k[m];
      c[h + 1] = c[m + 1];
      k[h + 1] = k[m + 1];
      c[h + 2] = c[m + 2];
      k[h + 2] = k[m + 2];
      c[h + 3] = c[m + 3];
      k[h + 3] = k[m + 3];
    } else {
      if (13 == (ma | 0) || 0 == (ma | 0)) {
        (m = a),
          (k[n] = Mf(m)),
          (h = p),
          (m += 7),
          (c[h] = c[m]),
          (k[h] = k[m]),
          (c[h + 1] = c[m + 1]),
          (k[h + 1] = k[m + 1]),
          (c[h + 2] = c[m + 2]),
          (k[h + 2] = k[m + 2]),
          (c[h + 3] = c[m + 3]),
          (k[h + 3] = k[m + 3]),
          H(r, n, n, n),
          xn(p, r),
          qc(s, d),
          (h = t),
          (m = d + 12),
          (c[h] = c[m]),
          (k[h] = k[m]),
          (c[h + 1] = c[m + 1]),
          (k[h + 1] = k[m + 1]),
          (c[h + 2] = c[m + 2]),
          (k[h + 2] = k[m + 2]),
          (c[h + 3] = c[m + 3]),
          (k[h + 3] = k[m + 3]),
          (k[x] = J(0 + s, p)),
          (k[y] = J(4 + s, p)),
          (k[z] = J(8 + s, p)),
          H(w, x, y, z),
          N(A, t, w),
          (h = e),
          (m = A),
          (c[h] = c[m]),
          (k[h] = k[m]),
          (c[h + 1] = c[m + 1]),
          (k[h + 1] = k[m + 1]),
          (c[h + 2] = c[m + 2]),
          (k[h + 2] = k[m + 2]),
          (c[h + 3] = c[m + 3]),
          (k[h + 3] = k[m + 3]),
          wn(C, t, w),
          (h = f),
          (m = C),
          (c[h] = c[m]),
          (k[h] = k[m]),
          (c[h + 1] = c[m + 1]),
          (k[h + 1] = k[m + 1]),
          (c[h + 2] = c[m + 2]),
          (k[h + 2] = k[m + 2]),
          (c[h + 3] = c[m + 3]),
          (k[h + 3] = k[m + 3]);
      } else {
        if (1 == (ma | 0)) {
          h = Mf(a);
          m = 0;
          for (var ga = F, ha = I; ; ) {
            k[K] = 0;
            k[E] = 0;
            k[G] = 0;
            H(B, K, E, G);
            k[B + m] = 1;
            rn(L, B, d);
            kf(M, a, L);
            vw(F, d, M);
            k[f + m] = k[F + m] + h;
            k[B + m] = -1;
            rn(O, B, d);
            kf(R, a, O);
            vw(I, d, R);
            c[ga] = c[ha];
            k[ga] = k[ha];
            c[ga + 1] = c[ha + 1];
            k[ga + 1] = k[ha + 1];
            c[ga + 2] = c[ha + 2];
            k[ga + 2] = k[ha + 2];
            c[ga + 3] = c[ha + 3];
            k[ga + 3] = k[ha + 3];
            k[e + m] = k[F + m] - h;
            var ta = m + 1;
            m = ta;
            if (3 <= (ta | 0)) {
              break a;
            }
          }
        } else {
          if (10 == (ma | 0)) {
            (h = a),
              (k[P] = cf(h)),
              (k[S] = cf(h)),
              (k[da] = cf(h)),
              H(Z, P, S, da),
              (m = Ke(h)),
              (k[Z + m] = cf(h) + gf(h)),
              (k[ba] = Mf(h)),
              (k[$] = Mf(h)),
              (k[Y] = Mf(h)),
              H(V, ba, $, Y),
              xn(Z, V),
              qc(la, d),
              (h = ka),
              (m = d + 12),
              (c[h] = c[m]),
              (k[h] = k[m]),
              (c[h + 1] = c[m + 1]),
              (k[h + 1] = k[m + 1]),
              (c[h + 2] = c[m + 2]),
              (k[h + 2] = k[m + 2]),
              (c[h + 3] = c[m + 3]),
              (k[h + 3] = k[m + 3]),
              (k[ea] = J(0 + la, Z)),
              (k[ca] = J(4 + la, Z)),
              (k[W] = J(8 + la, Z)),
              H(ja, ea, ca, W),
              N(U, ka, ja),
              (h = e),
              (m = U),
              (c[h] = c[m]),
              (k[h] = k[m]),
              (c[h + 1] = c[m + 1]),
              (k[h + 1] = k[m + 1]),
              (c[h + 2] = c[m + 2]),
              (k[h + 2] = k[m + 2]),
              (c[h + 3] = c[m + 3]),
              (k[h + 3] = k[m + 3]),
              wn(X, ka, ja),
              (h = f),
              (m = X),
              (c[h] = c[m]),
              (k[h] = k[m]),
              (c[h + 1] = c[m + 1]),
              (k[h + 1] = k[m + 1]),
              (c[h + 2] = c[m + 2]),
              (k[h + 2] = k[m + 2]),
              (c[h + 3] = c[m + 3]),
              (k[h + 3] = k[m + 3]);
          } else {
            if (5 == (ma | 0) || 4 == (ma | 0)) {
              (h = a), eh(h, d, e, f, Mf(h));
            } else {
              v[c[c[a] + 2]](a, d, e, f);
            }
          }
        }
      }
    }
  } while (0);
  b = g;
}
df.X = 1;
function F_a(a, d, e) {
  var f = b;
  b += 36;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 7,
    l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11,
    r = f + 21,
    s = f + 25,
    t = f + 26,
    w = f + 27,
    x = f + 28,
    y = f + 32;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  H(a, f, g, h);
  c[i] = c[e];
  k[i] = k[e];
  c[i + 1] = c[e + 1];
  k[i + 1] = k[e + 1];
  c[i + 2] = c[e + 2];
  k[i + 2] = k[e + 2];
  c[i + 3] = c[e + 3];
  k[i + 3] = k[e + 3];
  e = Um(i);
  9999999747378752e-20 > e
    ? ((k[j] = 1), (k[l] = 0), (k[m] = 0), pe(i, j, l, m))
    : ((k[n] = 1 / ec(e)), LC(i, n));
  G_a(p, i);
  k[s] = 0xde0b6b000000000;
  k[t] = 0xde0b6b000000000;
  k[w] = 0xde0b6b000000000;
  H(r, s, t, w);
  d = c[d + 23];
  i = c[c[d] + 2];
  WP(x, r);
  v[i](d, p, x, r);
  H_a(y, p);
  c[a] = c[y];
  k[a] = k[y];
  c[a + 1] = c[y + 1];
  k[a + 1] = k[y + 1];
  c[a + 2] = c[y + 2];
  k[a + 2] = k[y + 2];
  c[a + 3] = c[y + 3];
  k[a + 3] = k[y + 3];
  $16 = 1;
  b = f;
}
F_a.X = 1;
function H_a(a, d) {
  var e = d + 1;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
H_a.X = 1;
function I_a() {}
I_a.X = 1;
function J_a(a, d, e, f) {
  var g = b;
  b += 25;
  var h,
    i = g + 10,
    j = g + 14,
    l = g + 15,
    m = g + 16,
    n = g + 17,
    p = g + 21;
  h = 0;
  var r = (h | 0) < (f | 0);
  a: do {
    if (r) {
      for (;;) {
        if (
          ((k[(h << 2) + e + 3] = -0xde0b6b000000000),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  h = 0;
  for (a += 23; (h | 0) < (f | 0); ) {
    G_a(g, (h << 2) + d);
    k[j] = 0xde0b6b000000000;
    k[l] = 0xde0b6b000000000;
    k[m] = 0xde0b6b000000000;
    H(i, j, l, m);
    var r = c[a],
      s = c[c[r] + 2];
    WP(n, i);
    v[s](r, g, n, i);
    H_a(p, g);
    r = (h << 2) + e;
    c[r] = c[p];
    k[r] = k[p];
    c[r + 1] = c[p + 1];
    k[r + 1] = k[p + 1];
    c[r + 2] = c[p + 2];
    k[r + 2] = k[p + 2];
    c[r + 3] = c[p + 3];
    k[r + 3] = k[p + 3];
    h += 1;
  }
  b = g;
}
J_a.X = 1;
function K_a(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11;
  v[c[c[d] + 16]](a, d, e);
  0 != v[c[c[d] + 11]](d) &&
    ((c[f] = c[e]),
    (k[f] = k[e]),
    (c[f + 1] = c[e + 1]),
    (k[f + 1] = k[e + 1]),
    (c[f + 2] = c[e + 2]),
    (k[f + 2] = k[e + 2]),
    (c[f + 3] = c[e + 3]),
    (k[f + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(f) &&
      ((k[g] = -1), (k[h] = -1), (k[i] = -1), pe(f, g, h, i)),
    IB(f),
    (k[l] = v[c[c[d] + 11]](d)),
    Q(j, f, l),
    xn(a, j));
  b = f;
}
K_a.X = 1;
function L_a(a, d) {
  Iy(c[a + 23], d);
  bh(a);
}
L_a.X = 1;
function M_a(a) {
  return c[a + 23] + 1;
}
M_a.X = 1;
function N_a(a) {
  EX(a);
}
N_a.X = 1;
function O_a() {}
O_a.X = 1;
function P_a(a, d, e) {
  e &= 1;
  vZ(a);
  c[a] = Q_a + 2;
  c[a + 23] = d;
  c[a + 1] = 3;
  e & 1 && bh(a);
}
P_a.X = 1;
function R_a(a) {
  EX(a);
  yh(a);
}
R_a.X = 1;
function S_a() {}
S_a.X = 1;
function T_a(a) {
  xe(a);
}
T_a.X = 1;
function U_a(a, d, e, f) {
  var g = b;
  b += 24;
  var h = g + 12,
    i = g + 16,
    j = g + 20;
  $3 = e;
  $4 = f;
  N(h, d, a + 13);
  N(i, d + 4, a + 13);
  N(j, d + 8, a + 13);
  d = 0.1666666716337204 * -sc(ne(h, i, j));
  for (e = 0; ; ) {
    var f = 0,
      l = (f | 0) <= (e | 0);
    a: do {
      if (l) {
        for (;;) {
          var m =
            d *
            (0.10000000149011612 *
              (k[h + e] * k[h + f] +
                k[i + e] * k[i + f] +
                k[j + e] * k[j + f]) +
              0.05000000074505806 *
                (k[h + e] * k[i + f] +
                  k[h + f] * k[i + e] +
                  k[h + e] * k[j + f] +
                  k[h + f] * k[j + e] +
                  k[i + e] * k[j + f] +
                  k[i + f] * k[j + e]));
          k[(f << 2) + g + e] = m;
          k[(e << 2) + g + f] = m;
          f += 1;
          if (!((f | 0) <= (e | 0))) {
            break a;
          }
        }
      }
    } while (0);
    e = f = e + 1;
    if (3 <= (f | 0)) {
      break;
    }
  }
  h = -k[0 + g];
  i = -k[4 + g + 1];
  j = -k[8 + g + 2];
  k[0 + g] = i + j;
  k[4 + g + 1] = j + h;
  k[8 + g + 2] = h + i;
  xn(0 + (a + 1), 0 + g);
  xn(4 + (a + 1), 4 + g);
  xn(8 + (a + 1), 8 + g);
  b = g;
}
U_a.X = 1;
function V_a(a) {
  xe(a);
}
V_a.X = 1;
function W_a(a, d, e, f) {
  var g = b;
  b += 29;
  var h = g + 4,
    i = g + 8,
    j = g + 12,
    l = g + 16,
    m = g + 17,
    n = g + 21,
    p = g + 25;
  $3 = e;
  $4 = f;
  c[a + 1] & 1
    ? ((j = a + 2),
      (c[j] = c[d]),
      (k[j] = k[d]),
      (c[j + 1] = c[d + 1]),
      (k[j + 1] = k[d + 1]),
      (c[j + 2] = c[d + 2]),
      (k[j + 2] = k[d + 2]),
      (c[j + 3] = c[d + 3]),
      (k[j + 3] = k[d + 3]),
      (c[a + 1] = 0))
    : (N(g, d, a + 2),
      N(h, d + 4, a + 2),
      N(i, d + 8, a + 2),
      (e = sc(ne(g, h, i))),
      (k[l] = 0.25 * e),
      wn(p, d, d + 4),
      wn(n, p, d + 8),
      wn(m, n, a + 2),
      Q(j, m, l),
      xn(a + 6, j),
      (a += 10),
      (k[a] += e));
  b = g;
}
W_a.X = 1;
function G_a(a, d) {
  var e = b;
  b += 3;
  var f = e + 1,
    g = e + 2;
  FY(a);
  c[a] = X_a + 2;
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  H(a + 1, e, f, g);
  k[a + 5] = -0xde0b6b000000000;
  f = a + 6;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
  b = e;
}
G_a.X = 1;
function Y_a(a) {
  xe(a);
}
Y_a.X = 1;
function Z_a(a, d, e, f) {
  var g;
  $3 = e;
  $4 = f;
  for (
    var e = 0, f = a + 6, h = a + 5, i = a + 5, a = a + 1;
    !((g = J(f, (e << 2) + d)),
    g > k[h] &&
      ((k[i] = g),
      (g = (e << 2) + d),
      (c[a] = c[g]),
      (k[a] = k[g]),
      (c[a + 1] = c[g + 1]),
      (k[a + 1] = k[g + 1]),
      (c[a + 2] = c[g + 2]),
      (k[a + 2] = k[g + 2]),
      (c[a + 3] = c[g + 3]),
      (k[a + 3] = k[g + 3])),
    (e = g = e + 1),
    3 <= (g | 0));

  ) {}
}
Z_a.X = 1;
function RH(a, d) {
  var e = b;
  b += 15;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11;
  yW(a);
  c[a] = $_a + 2;
  c[a + 13] = 1;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  ig(j, d, a + 3);
  N(i, j, e);
  f = a + 7;
  c[f] = c[i];
  k[f] = k[i];
  c[f + 1] = c[i + 1];
  k[f + 1] = k[i + 1];
  c[f + 2] = c[i + 2];
  k[f + 2] = k[i + 2];
  c[f + 3] = c[i + 3];
  k[f + 3] = k[i + 3];
  c[a + 1] = 13;
  b = e;
}
RH.X = 1;
function QG(a, d) {
  RH(a, d);
  c[a] = a0a + 2;
  c[a + 13] = 0;
}
QG.X = 1;
function Vza(a, d) {
  RH(a, d);
  c[a] = b0a + 2;
  c[a + 13] = 2;
}
Vza.X = 1;
function c0a(a, d, e, f) {
  DX(a + 7, v[c[c[a] + 11]](a), d, e, f);
}
c0a.X = 1;
function d0a(a, d, e) {
  var f = b;
  b += 6;
  var g,
    h,
    i = f + 4,
    j = f + 5;
  qG(f, a);
  h = c[a + 13];
  0 == (h | 0)
    ? ((g = 1), (h = 0))
    : 2 == (h | 0) ? ((g = 0), (h = 2)) : ((g = 0), (h = 1));
  g = k[f + g] * k[f + g];
  k[i] = d / 12 * 4 * k[f + h] * k[f + h] + d / 4 * g;
  k[j] = d / 2 * g;
  a = c[a + 13];
  0 == (a | 0)
    ? pe(e, j, i, i)
    : 2 == (a | 0) ? pe(e, i, i, j) : pe(e, i, j, i);
  b = f;
}
d0a.X = 1;
function e0a(a, d, e) {
  f0a(a, d + 7, e);
}
e0a.X = 1;
function f0a(a, d, e) {
  var f, g;
  $cylinderUpAxis = 0;
  $XX = 1;
  $YY = 0;
  $ZZ = 2;
  f = k[d + 1];
  d = k[d];
  g = ec(k[e + 1] * k[e + 1] + k[e + 2] * k[e + 2]);
  0 != g
    ? ((f /= g),
      (k[a + 1] = k[e + 1] * f),
      (k[a] = 0 > k[e] ? -d : d),
      (k[a + 2] = k[e + 2] * f))
    : ((k[a + 1] = f), (k[a] = 0 > k[e] ? -d : d), (k[a + 2] = 0));
}
f0a.X = 1;
function g0a(a, d, e) {
  h0a(a, d + 7, e);
}
g0a.X = 1;
function i0a() {
  return D.Ue;
}
i0a.X = 1;
function j0a() {
  return 60;
}
j0a.X = 1;
function k0a() {
  return D.Xd;
}
k0a.X = 1;
function l0a() {
  return D.ne;
}
l0a.X = 1;
function h0a(a, d, e) {
  var f, g;
  $cylinderUpAxis = 2;
  $XX = 0;
  $YY = 2;
  $ZZ = 1;
  f = k[d];
  d = k[d + 2];
  g = ec(k[e] * k[e] + k[e + 1] * k[e + 1]);
  0 != g
    ? ((f /= g),
      (k[a] = k[e] * f),
      (k[a + 2] = 0 > k[e + 2] ? -d : d),
      (k[a + 1] = k[e + 1] * f))
    : ((k[a] = f), (k[a + 2] = 0 > k[e + 2] ? -d : d), (k[a + 1] = 0));
}
h0a.X = 1;
function m0a(a, d, e) {
  n0a(a, d + 7, e);
}
m0a.X = 1;
function n0a(a, d, e) {
  var f, g;
  $cylinderUpAxis = 1;
  $XX = 0;
  $YY = 1;
  $ZZ = 2;
  f = k[d];
  d = k[d + 1];
  g = ec(k[e] * k[e] + k[e + 2] * k[e + 2]);
  0 != g
    ? ((f /= g),
      (k[a] = k[e] * f),
      (k[a + 1] = 0 > k[e + 1] ? -d : d),
      (k[a + 2] = k[e + 2] * f))
    : ((k[a] = f), (k[a + 1] = 0 > k[e + 1] ? -d : d), (k[a + 2] = 0));
}
n0a.X = 1;
function o0a(a, d, e, f) {
  var g = b;
  b += 4;
  var h;
  h = 0;
  var i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = g; ; ) {
        n0a(g, a + 7, (h << 2) + d);
        var l = (h << 2) + e;
        c[l] = c[j];
        k[l] = k[j];
        c[l + 1] = c[j + 1];
        k[l + 1] = k[j + 1];
        c[l + 2] = c[j + 2];
        k[l + 2] = k[j + 2];
        c[l + 3] = c[j + 3];
        k[l + 3] = k[j + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
o0a.X = 1;
function p0a(a, d, e, f) {
  var g = b;
  b += 4;
  var h;
  h = 0;
  var i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = a, l = g; ; ) {
        h0a(g, j + 7, (h << 2) + d);
        var m = (h << 2) + e;
        c[m] = c[l];
        k[m] = k[l];
        c[m + 1] = c[l + 1];
        k[m + 1] = k[l + 1];
        c[m + 2] = c[l + 2];
        k[m + 2] = k[l + 2];
        c[m + 3] = c[l + 3];
        k[m + 3] = k[l + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
p0a.X = 1;
function q0a(a, d, e, f) {
  var g = b;
  b += 4;
  var h;
  h = 0;
  var i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = a, l = g; ; ) {
        f0a(g, j + 7, (h << 2) + d);
        var m = (h << 2) + e;
        c[m] = c[l];
        k[m] = k[l];
        c[m + 1] = c[l + 1];
        k[m + 1] = k[l + 1];
        c[m + 2] = c[l + 2];
        k[m + 2] = k[l + 2];
        c[m + 3] = c[l + 3];
        k[m + 3] = k[l + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
q0a.X = 1;
function r0a() {}
r0a.X = 1;
function s0a(a) {
  yh(a);
}
s0a.X = 1;
function t0a(a, d) {
  var e = b;
  b += 23;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 19;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  eX(j, i, a + 3);
  FX(a, d);
  ig(m, j, a + 3);
  N(l, m, e);
  f = a + 7;
  c[f] = c[l];
  k[f] = k[l];
  c[f + 1] = c[l + 1];
  k[f + 1] = k[l + 1];
  c[f + 2] = c[l + 2];
  k[f + 2] = k[l + 2];
  c[f + 3] = c[l + 3];
  k[f + 3] = k[l + 3];
  b = e;
}
t0a.X = 1;
function u0a(a, d) {
  var e = b;
  b += 22;
  var f = e + 4,
    g = e + 5,
    h = e + 6,
    i = e + 7,
    j = e + 11,
    l = e + 15,
    m = e + 16,
    n = e + 17,
    p = e + 18;
  k[f] = v[c[c[a] + 11]](a);
  k[g] = v[c[c[a] + 11]](a);
  k[h] = v[c[c[a] + 11]](a);
  H(e, f, g, h);
  wn(i, a + 7, e);
  fW(a, d);
  k[l] = v[c[c[a] + 11]](a);
  k[m] = v[c[c[a] + 11]](a);
  k[n] = v[c[c[a] + 11]](a);
  H(j, l, m, n);
  N(p, i, j);
  f = a + 7;
  c[f] = c[p];
  k[f] = k[p];
  c[f + 1] = c[p + 1];
  k[f + 1] = k[p + 1];
  c[f + 2] = c[p + 2];
  k[f + 2] = k[p + 2];
  c[f + 3] = c[p + 3];
  k[f + 3] = k[p + 3];
  b = e;
}
u0a.X = 1;
function v0a(a, d, e) {
  GX(a, d, e);
  c[d + 16] = c[a + 13];
  return D.te;
}
v0a.X = 1;
function w0a(a, d, e) {
  var f = b;
  b += 16;
  var g = f + 4,
    h = f + 8,
    i = f + 9,
    j = f + 10,
    l = f + 11,
    m = f + 15;
  v[c[c[d] + 16]](f, d, e);
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
  0 != v[c[c[d] + 11]](d) &&
    ((c[g] = c[e]),
    (k[g] = k[e]),
    (c[g + 1] = c[e + 1]),
    (k[g + 1] = k[e + 1]),
    (c[g + 2] = c[e + 2]),
    (k[g + 2] = k[e + 2]),
    (c[g + 3] = c[e + 3]),
    (k[g + 3] = k[e + 3]),
    1.4210854715202004e-14 > Um(g) &&
      ((k[h] = -1), (k[i] = -1), (k[j] = -1), pe(g, h, i, j)),
    IB(g),
    (k[m] = v[c[c[d] + 11]](d)),
    Q(l, g, m),
    xn(a, l));
  b = f;
}
w0a.X = 1;
function x0a(a) {
  var d = b;
  b += 4;
  qG(d, a);
  a = k[d];
  b = d;
  return a;
}
x0a.X = 1;
function y0a() {}
y0a.X = 1;
function z0a(a) {
  yh(a);
}
z0a.X = 1;
function A0a(a) {
  var d = b;
  b += 4;
  qG(d, a);
  a = k[d + 1];
  b = d;
  return a;
}
A0a.X = 1;
function B0a() {}
B0a.X = 1;
function C0a(a) {
  yh(a);
}
C0a.X = 1;
function D0a(a) {
  var d = b;
  b += 4;
  qG(d, a);
  a = k[d];
  b = d;
  return a;
}
D0a.X = 1;
function WY(a) {
  E0a(a + 5);
  c[a] = 0;
  c[a + 1] = 0;
  c[a + 2] = -1;
  c[a + 3] = 0;
  c[a + 4] = 0;
}
WY.X = 1;
function JZ(a) {
  0 != (c[a] | 0) && KZ(a, c[a]);
  yh(c[a + 1]);
  c[a + 1] = 0;
  c[a + 2] = -1;
  F0a(a + 5);
  c[a + 4] = 0;
}
JZ.X = 1;
function KZ(a, d) {
  IY(d) || (KZ(a, c[d + 9]), KZ(a, c[d + 10]));
  (d | 0) == (c[a] | 0) && (c[a] = 0);
  LZ(a, d);
}
KZ.X = 1;
function F0a(a) {
  G0a(a, 0, MZ(a));
  H0a(a);
  E0a(a);
}
F0a.X = 1;
function aZ(a) {
  JZ(a);
  F0a(a + 5);
}
aZ.X = 1;
function NZ(a, d) {
  return c[a + 3] + d;
}
NZ.X = 1;
function OZ(a, d) {
  var e;
  (I0a(a) | 0) < (d | 0) &&
    ((e = J0a(a, d)),
    K0a(a, 0, PZ(a), e),
    L0a(a, 0, PZ(a)),
    M0a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
OZ.X = 1;
function QZ(a, d, e, f) {
  var g = b;
  b += 1;
  c[g] = d;
  sY(c[g])
    ? 0 == (f | 0)
      ? (a = 5)
      : (QZ(a, c[c[g] + 9], e, f - 1),
        QZ(a, c[c[g] + 10], e, f - 1),
        LZ(a, c[g]),
        (a = 6))
    : (a = 5);
  5 == a && RZ(e, g);
  b = g;
}
QZ.X = 1;
function N0a(a, d) {
  var e = b;
  b += 12;
  var f,
    g,
    h,
    i,
    j = e + 2,
    l = e + 10,
    m = 1 < (PZ(d) | 0);
  a: do {
    if (m) {
      for (
        var n = e,
          p = l,
          r = e,
          s = p + 1,
          t = e + 1,
          w = l,
          x = l + 1,
          y = l,
          z = l + 1,
          A = l,
          C = l + 1,
          B = e,
          K = e + 1,
          E = e,
          G = e + 1;
        ;

      ) {
        f = 3.4028234663852886e38;
        c[n] = -1;
        k[n] = -1;
        c[n + 1] = -1;
        k[n + 1] = -1;
        g = 0;
        var M = (g | 0) < (PZ(d) | 0);
        b: do {
          if (M) {
            for (;;) {
              h = g + 1;
              var L = (h | 0) < (PZ(d) | 0);
              c: do {
                if (L) {
                  for (;;) {
                    if (
                      (O0a(j, c[NZ(d, g)], c[NZ(d, h)]),
                      (i = P0a(j)),
                      i < f && ((f = i), (c[E] = g), (c[G] = h)),
                      (h += 1),
                      (h | 0) >= (PZ(d) | 0))
                    ) {
                      break c;
                    }
                  }
                }
              } while (0);
              g += 1;
              if ((g | 0) >= (PZ(d) | 0)) {
                break b;
              }
            }
          }
        } while (0);
        c[p] = c[NZ(d, c[r])];
        c[s] = c[NZ(d, c[t])];
        f = Q0a(a, 0, c[w], c[x]);
        c[f + 9] = c[y];
        c[f + 10] = c[z];
        c[c[A] + 8] = f;
        c[c[C] + 8] = f;
        c[NZ(d, c[B])] = f;
        R0a(d, c[K], PZ(d) - 1);
        S0a(d);
        if (1 >= (PZ(d) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = e;
}
N0a.X = 1;
function T0a(a, d) {
  var e, f, g;
  e = d;
  0 > (e | 0) && (e = c[a + 3]);
  var h = 0 != (c[a] | 0);
  a: do {
    if (h && 0 < (e | 0)) {
      for (var i = a, j = a + 4, l = a + 4, m = a; ; ) {
        f = c[i];
        g = 0;
        var n = sY(f);
        b: do {
          if (n) {
            for (;;) {
              var p = (c[l] >>> (g >>> 0)) & 1;
              f = c[U0a(f, m) + p + 9];
              g = (g + 1) & 31;
              if (!sY(f)) {
                break b;
              }
            }
          }
        } while (0);
        V0a(a, f, -1);
        c[j] += 1;
        e = f = e - 1;
        if (0 == (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
T0a.X = 1;
function W0a(a, d) {
  var e = b;
  b += 5;
  0 != (c[a] | 0) &&
    (SZ(e), OZ(e, c[a + 3]), QZ(a, c[a], e, -1), (c[a] = TZ(a, e, d)), UZ(e));
  b = e;
}
W0a.X = 1;
function TZ(a, d, e) {
  var f = b;
  b += 45;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5,
    m = f + 6,
    n = f + 7,
    p = f + 8,
    r = f + 9,
    s = f + 17,
    t = f + 21,
    w = f + 31,
    x = f + 37,
    y = f + 41;
  0 == (c[X0a] << 24) >> 24 &&
    0 != (Hb(X0a) | 0) &&
    ((k[f] = 1),
    (k[g] = 0),
    (k[h] = 0),
    H(VZ, f, g, h),
    (k[i] = 0),
    (k[j] = 1),
    (k[l] = 0),
    H(VZ + 4, i, j, l),
    (k[m] = 0),
    (k[n] = 0),
    (k[p] = 1),
    H(VZ + 8, m, n, p));
  if (1 < (PZ(d) | 0)) {
    if ((PZ(d) | 0) > (e | 0)) {
      Y0a(r, d);
      WZ(s, r);
      SZ(t);
      SZ(t + 5);
      g = -1;
      h = PZ(d);
      c[w] = 0;
      k[w] = 0;
      c[w + 1] = 0;
      k[w + 1] = 0;
      c[w + 2] = 0;
      k[w + 2] = 0;
      c[w + 3] = 0;
      k[w + 3] = 0;
      c[w + 4] = 0;
      k[w + 4] = 0;
      c[w + 5] = 0;
      i = k[w + 5] = 0;
      l = (i | 0) < (PZ(d) | 0);
      a: do {
        if (l) {
          for (;;) {
            WZ(y, c[NZ(d, i)]);
            N(x, y, s);
            for (
              j = 0;
              !((m = (j << 1) + w + (0 < J(x, (j << 2) + VZ) ? 1 : 0)),
              (c[m] += 1),
              (j = m = j + 1),
              3 <= (m | 0));

            ) {}
            i += 1;
            if ((i | 0) >= (PZ(d) | 0)) {
              break a;
            }
          }
        }
      } while (0);
      for (x = i = 0; 3 > (x | 0); ) {
        0 < (c[(i << 1) + w] | 0) &&
          0 < (c[(i << 1) + w + 1] | 0) &&
          ((x = sc((c[(i << 1) + w] - c[(i << 1) + w + 1]) | 0) & -1),
          (x | 0) < (h | 0) && ((g = i), (h = x))),
          (i = x = i + 1);
      }
      h = 0 <= (g | 0);
      a: do {
        if (h) {
          OZ(t, c[(g << 1) + w]),
            OZ(t + 5, c[(g << 1) + w + 1]),
            Z0a(d, t, t + 5, s, (g << 2) + VZ);
        } else {
          OZ(t, (((PZ(d) | 0) / 2) & -1) + 1);
          OZ(t + 5, ((PZ(d) | 0) / 2) & -1);
          x = 0;
          for (y = PZ(d); ; ) {
            if ((x | 0) >= (y | 0)) {
              break a;
            }
            RZ(t + 5 * (x & 1), NZ(d, x));
            x += 1;
          }
        }
      } while (0);
      d = $0a(a, 0, r, 0);
      c[d + 9] = TZ(a, t, e);
      c[d + 10] = TZ(a, t + 5, e);
      c[c[d + 9] + 8] = d;
      a = c[c[d + 10] + 8] = d;
      $17 = 1;
      t = t + 10 - 5;
      UZ(t);
      UZ(t - 5);
    } else {
      N0a(a, d), (a = c[NZ(d, 0)]);
    }
  } else {
    a = c[NZ(d, 0)];
  }
  b = f;
  return a;
}
TZ.X = 1;
function U0a(a, d) {
  var e, f, g, h, i;
  e = c[a + 8];
  e >>> 0 > a >>> 0
    ? ((f = XZ(a)),
      (g = 1 - f),
      (h = c[e + (g + 9)]),
      (i = c[e + 8]),
      0 != (i | 0) ? (c[i + XZ(e) + 9] = a) : (c[d] = a),
      (c[h + 8] = a),
      (c[e + 8] = a),
      (c[a + 8] = i),
      (c[e + 9] = c[a + 9]),
      (c[e + 10] = c[a + 10]),
      (c[c[a + 9] + 8] = e),
      (c[c[a + 10] + 8] = e),
      (c[a + (f + 9)] = e),
      (c[a + (g + 9)] = h),
      a1a(e, a))
    : (e = a);
  return e;
}
U0a.X = 1;
function V0a(a, d, e) {
  var f, g;
  f = YZ(a, d);
  var h = 0 != (f | 0);
  a: do {
    if (h) {
      if (0 <= (e | 0)) {
        for (g = 0; ; ) {
          if ((g | 0) >= (e | 0)) {
            break a;
          }
          if (0 == (c[f + 8] | 0)) {
            break a;
          }
          f = c[f + 8];
          g += 1;
        }
      } else {
        f = c[a];
      }
    }
  } while (0);
  ZZ(a, f, d);
}
V0a.X = 1;
function XY(a, d, e) {
  d = $0a(a, 0, d, e);
  ZZ(a, c[a], d);
  a += 3;
  c[a] += 1;
  return d;
}
XY.X = 1;
function $0a(a, d, e, f) {
  a = b1a(a, d, f);
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
  c[a + 4] = c[e + 4];
  k[a + 4] = k[e + 4];
  c[a + 5] = c[e + 5];
  k[a + 5] = k[e + 5];
  c[a + 6] = c[e + 6];
  k[a + 6] = k[e + 6];
  c[a + 7] = c[e + 7];
  k[a + 7] = k[e + 7];
  return a;
}
$0a.X = 1;
function ZZ(a, d, e) {
  var f,
    g,
    h = 0 != (c[a] | 0);
  a: do {
    if (h) {
      f = IY(d);
      b: do {
        if (!f) {
          for (;;) {
            if (((d = c[d + c1a(e, c[d + 9], c[d + 10]) + 9]), !(IY(d) ^ 1))) {
              break b;
            }
          }
        }
      } while (0);
      f = c[d + 8];
      g = Q0a(a, f, e, d);
      if (0 != (f | 0)) {
        c[f + XZ(d) + 9] = g;
        c[g + 9] = d;
        c[d + 8] = g;
        c[g + 10] = e;
        for (c[e + 8] = g; ; ) {
          if (d1a(f, g)) {
            break a;
          }
          $Z(c[f + 9], c[f + 10], f);
          g = f;
          var i = c[g + 8];
          f = i;
          if (0 == (i | 0)) {
            break a;
          }
        }
      } else {
        (c[g + 9] = d),
          (c[d + 8] = g),
          (c[g + 10] = e),
          (c[e + 8] = g),
          (c[a] = g);
      }
    } else {
      (c[a] = e), (c[e + 8] = 0);
    }
  } while (0);
}
ZZ.X = 1;
function YZ(a, d) {
  var e = b;
  b += 8;
  var f, g, h;
  if ((d | 0) == (c[a] | 0)) {
    f = c[a] = 0;
  } else {
    if (
      ((g = c[d + 8]),
      (f = c[g + 8]),
      (h = c[g + (1 - XZ(d)) + 9]),
      0 != (f | 0))
    ) {
      c[f + XZ(g) + 9] = h;
      c[h + 8] = f;
      LZ(a, g);
      for (g = f; 0 != (g | 0); ) {
        g = f;
        c[e] = c[g];
        k[e] = k[g];
        c[e + 1] = c[g + 1];
        k[e + 1] = k[g + 1];
        c[e + 2] = c[g + 2];
        k[e + 2] = k[g + 2];
        c[e + 3] = c[g + 3];
        k[e + 3] = k[g + 3];
        c[e + 4] = c[g + 4];
        k[e + 4] = k[g + 4];
        c[e + 5] = c[g + 5];
        k[e + 5] = k[g + 5];
        c[e + 6] = c[g + 6];
        k[e + 6] = k[g + 6];
        c[e + 7] = c[g + 7];
        k[e + 7] = k[g + 7];
        $Z(c[f + 9], c[f + 10], f);
        if (!e1a(e, f)) {
          break;
        }
        f = g = c[f + 8];
      }
      f = 0 != (f | 0) ? f : c[a];
    } else {
      (c[a] = h), (c[h + 8] = 0), LZ(a, g), (f = c[a]);
    }
  }
  b = e;
  return f;
}
YZ.X = 1;
function ZY(a, d, e) {
  var f, g;
  f = YZ(a, d);
  var h = 0 != (f | 0);
  a: do {
    if (h) {
      if (0 <= (c[a + 2] | 0)) {
        g = 0;
        for (var i = a + 2; ; ) {
          if ((g | 0) >= (c[i] | 0)) {
            break a;
          }
          if (0 == (c[f + 8] | 0)) {
            break a;
          }
          f = c[f + 8];
          g += 1;
        }
      } else {
        f = c[a];
      }
    }
  } while (0);
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[d + 4] = c[e + 4];
  k[d + 4] = k[e + 4];
  c[d + 5] = c[e + 5];
  k[d + 5] = k[e + 5];
  c[d + 6] = c[e + 6];
  k[d + 6] = k[e + 6];
  c[d + 7] = c[e + 7];
  k[d + 7] = k[e + 7];
  ZZ(a, f, d);
}
ZY.X = 1;
function f1a(a, d, e, f, g) {
  var h = b;
  b += 5;
  var i = h + 1;
  k[h] = g;
  d1a(d, e)
    ? (a = 0)
    : (H(i, h, h, h), g1a(e, i), h1a(e, f), ZY(a, d, e), (a = 1));
  b = h;
  return a;
}
f1a.X = 1;
function d1a(a, d) {
  return k[a] <= k[d]
    ? k[a + 1] <= k[d + 1]
      ? k[a + 2] <= k[d + 2]
        ? k[a + 4] >= k[d + 4]
          ? k[a + 4 + 1] >= k[d + 4 + 1] ? k[a + 4 + 2] >= k[d + 4 + 2] : 0
          : 0
        : 0
      : 0
    : 0;
}
d1a.X = 1;
function g1a(a, d) {
  JC(a, d);
  xn(a + 4, d);
}
g1a.X = 1;
function h1a(a, d) {
  0 < k[d] ? (k[a + 4] += k[d]) : (k[a] += k[d]);
  0 < k[d + 1]
    ? cC(a + 4, k[a + 4 + 1] + k[d + 1])
    : cC(a, k[a + 1] + k[d + 1]);
  0 < k[d + 2]
    ? dC(a + 4, k[a + 4 + 2] + k[d + 2])
    : dC(a, k[a + 2] + k[d + 2]);
}
h1a.X = 1;
function $Y(a, d) {
  YZ(a, d);
  LZ(a, d);
  var e = a + 3;
  c[e] -= 1;
}
$Y.X = 1;
function LZ(a, d) {
  yh(c[a + 1]);
  c[a + 1] = d;
}
LZ.X = 1;
function i1a(a) {
  j1a(a);
}
i1a.X = 1;
function G0a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
G0a.X = 1;
function L0a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
L0a.X = 1;
function a_(a, d) {
  return (c[a] | 0) > (c[d] | 0) ? a : d;
}
a_.X = 1;
function MZ(a) {
  return c[a + 1];
}
MZ.X = 1;
function E0a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
E0a.X = 1;
function I0a(a) {
  return c[a + 2];
}
I0a.X = 1;
function K0a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
K0a.X = 1;
function PZ(a) {
  return c[a + 1];
}
PZ.X = 1;
function SZ(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
SZ.X = 1;
function XZ(a) {
  return ((c[c[a + 8] + 10] | 0) == (a | 0)) & 1;
}
XZ.X = 1;
function H0a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && k1a(a, c[a + 3]), (c[a + 3] = 0));
}
H0a.X = 1;
function k1a(a, d) {
  $1 = a;
  yh(d);
}
k1a.X = 1;
function J0a(a, d) {
  return 0 != (d | 0) ? l1a(a, d, 0) : 0;
}
J0a.X = 1;
function M0a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && m1a(a, c[a + 3]), (c[a + 3] = 0));
}
M0a.X = 1;
function m1a(a, d) {
  $1 = a;
  yh(d);
}
m1a.X = 1;
function l1a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
l1a.X = 1;
function UZ(a) {
  L0a(a, 0, PZ(a));
  M0a(a);
  SZ(a);
}
UZ.X = 1;
function j1a(a) {
  c[a] = n1a + 2;
  uY(a + 1);
}
j1a.X = 1;
function o1a(a) {
  j1a(a);
  xe(a);
}
o1a.X = 1;
function p1a(a, d) {
  var e = b;
  b += 1;
  c[e] = d;
  SY(a + 1, e);
  b = e;
}
p1a.X = 1;
function $Z(a, d, e) {
  var f;
  for (f = 0; ; ) {
    var g = f;
    k[e + f] = k[a + f] < k[d + f] ? k[a + g] : k[d + g];
    g = f;
    k[e + 4 + f] = k[a + 4 + f] > k[d + 4 + f] ? k[a + 4 + g] : k[d + 4 + g];
    f = g = f + 1;
    if (3 <= (g | 0)) {
      break;
    }
  }
}
$Z.X = 1;
function e1a(a, d) {
  return k[a] != k[d]
    ? 1
    : k[a + 1] != k[d + 1]
      ? 1
      : k[a + 2] != k[d + 2]
        ? 1
        : k[a + 4] != k[d + 4]
          ? 1
          : k[a + 4 + 1] != k[d + 4 + 1] ? 1 : k[a + 4 + 2] != k[d + 4 + 2];
}
e1a.X = 1;
function c1a(a, d, e) {
  return q1a(a, d) < q1a(a, e) ? 0 : 1;
}
c1a.X = 1;
function Q0a(a, d, e, f) {
  a = b1a(a, d, 0);
  $Z(e, f, a);
  return a;
}
Q0a.X = 1;
function b1a(a, d, e) {
  var f;
  if (0 != (c[a + 1] | 0)) {
    (f = c[a + 1]), (c[a + 1] = 0);
  } else {
    a = Ue(44, 16);
    if (0 == (a | 0)) {
      a = 0;
    } else {
      f = a;
      for (var g = f + 11; f < g; f++) {
        (c[f] = 0), (k[f] = 0);
      }
    }
    f = a;
  }
  c[f + 8] = d;
  c[f + 9] = e;
  c[f + 10] = 0;
  return f;
}
b1a.X = 1;
function q1a(a, d) {
  var e = b;
  b += 12;
  var f = e + 4,
    g = e + 8;
  wn(f, a, a + 4);
  wn(g, d, d + 4);
  N(e, f, g);
  f = sc(k[e]) + sc(k[e + 1]) + sc(k[e + 2]);
  b = e;
  return f;
}
q1a.X = 1;
function a1a(a, d) {
  var e = b;
  b += 8;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
  c[e + 4] = c[a + 4];
  k[e + 4] = k[a + 4];
  c[e + 5] = c[a + 5];
  k[e + 5] = k[a + 5];
  c[e + 6] = c[a + 6];
  k[e + 6] = k[a + 6];
  c[e + 7] = c[a + 7];
  k[e + 7] = k[a + 7];
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  c[a + 4] = c[d + 4];
  k[a + 4] = k[d + 4];
  c[a + 5] = c[d + 5];
  k[a + 5] = k[d + 5];
  c[a + 6] = c[d + 6];
  k[a + 6] = k[d + 6];
  c[a + 7] = c[d + 7];
  k[a + 7] = k[d + 7];
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[d + 4] = c[e + 4];
  k[d + 4] = k[e + 4];
  c[d + 5] = c[e + 5];
  k[d + 5] = k[e + 5];
  c[d + 6] = c[e + 6];
  k[d + 6] = k[e + 6];
  c[d + 7] = c[e + 7];
  k[d + 7] = k[e + 7];
  b = e;
}
a1a.X = 1;
function r1a(a, d) {
  return d;
}
r1a.X = 1;
function s1a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
s1a.X = 1;
function b_(a, d) {
  return c[a + 3] + d;
}
b_.X = 1;
function R0a(a, d, e) {
  var f;
  f = c[c[a + 3] + d];
  c[c[a + 3] + d] = c[c[a + 3] + e];
  c[c[a + 3] + e] = f;
}
R0a.X = 1;
function S0a(a) {
  a += 1;
  c[a] -= 1;
}
S0a.X = 1;
function c_(a, d) {
  c[a + 14] = 0;
  c[a + 15] = c[d];
  0 != (c[d] | 0) && (c[c[d] + 14] = a);
  c[d] = a;
}
c_.X = 1;
function Y0a(a, d) {
  var e = b;
  b += 32;
  var f, g;
  f = c[b_(d, 0)];
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  c[e + 4] = c[f + 4];
  k[e + 4] = k[f + 4];
  c[e + 5] = c[f + 5];
  k[e + 5] = k[f + 5];
  c[e + 6] = c[f + 6];
  k[e + 6] = k[f + 6];
  c[e + 7] = c[f + 7];
  k[e + 7] = k[f + 7];
  f = 1;
  g = PZ(d);
  var h = (f | 0) < (g | 0);
  a: do {
    if (h) {
      for (var i = e; ; ) {
        if (($Z(i, c[b_(d, f)], e), (f += 1), (i = e), (f | 0) >= (g | 0))) {
          var j = i;
          break a;
        }
      }
    } else {
      j = e;
    }
  } while (0);
  c[a] = c[j];
  k[a] = k[j];
  c[a + 1] = c[j + 1];
  k[a + 1] = k[j + 1];
  c[a + 2] = c[j + 2];
  k[a + 2] = k[j + 2];
  c[a + 3] = c[j + 3];
  k[a + 3] = k[j + 3];
  c[a + 4] = c[j + 4];
  k[a + 4] = k[j + 4];
  c[a + 5] = c[j + 5];
  k[a + 5] = k[j + 5];
  c[a + 6] = c[j + 6];
  k[a + 6] = k[j + 6];
  c[a + 7] = c[j + 7];
  k[a + 7] = k[j + 7];
  b = e;
}
Y0a.X = 1;
function WZ(a, d) {
  var e = b;
  b += 5;
  var f = e + 4;
  wn(e, d, d + 4);
  k[f] = 2;
  wC(a, e, f);
  b = e;
}
WZ.X = 1;
function Z0a(a, d, e, f, g) {
  var h = b;
  b += 10;
  var i = h + 1,
    j,
    l = h + 2,
    m = h + 6;
  c[h] = 0;
  t1a(d, 0, h);
  c[i] = 0;
  t1a(e, 0, i);
  i = 0;
  j = PZ(a);
  var n = (i | 0) < (j | 0);
  a: do {
    if (n) {
      for (;;) {
        if (
          (WZ(m, c[b_(a, i)]),
          N(l, m, f),
          0 > J(g, l) ? RZ(d, b_(a, i)) : RZ(e, b_(a, i)),
          (i += 1),
          (i | 0) >= (j | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = h;
}
Z0a.X = 1;
function RZ(a, d) {
  (PZ(a) | 0) == (I0a(a) | 0) && OZ(a, s1a(a, PZ(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
RZ.X = 1;
function t1a(a, d, e) {
  var f, g;
  f = PZ(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (PZ(a) | 0) && OZ(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (c[j] = c[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
t1a.X = 1;
function P0a(a) {
  var d = b;
  b += 4;
  u1a(d, a);
  a = k[d] * k[d + 1] * k[d + 2] + k[d] + k[d + 1] + k[d + 2];
  b = d;
  return a;
}
P0a.X = 1;
function O0a(a, d, e) {
  var f = b;
  b += 32;
  $Z(d, e, f);
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
  c[a + 4] = c[f + 4];
  k[a + 4] = k[f + 4];
  c[a + 5] = c[f + 5];
  k[a + 5] = k[f + 5];
  c[a + 6] = c[f + 6];
  k[a + 6] = k[f + 6];
  c[a + 7] = c[f + 7];
  k[a + 7] = k[f + 7];
  b = f;
}
O0a.X = 1;
function u1a(a, d) {
  N(a, d + 4, d);
}
u1a.X = 1;
function xr(a, d) {
  var e;
  bX(a);
  c[a] = d_ + 2;
  e = a + 1;
  WY(e);
  WY(e + 10);
  c[a + 39] = 0;
  c[a + 40] = 1;
  c[a + 38] = (0 != (d | 0) ? 0 : 1) & 1;
  k[a + 25] = 0;
  c[a + 26] = 0;
  c[a + 31] = 0;
  c[a + 27] = 1;
  c[a + 28] = 0;
  c[a + 29] = 10;
  c[a + 30] = 1;
  c[a + 32] = 0;
  c[a + 33] = 0;
  k[a + 34] = 0;
  0 != (d | 0) ? (e = d) : ((e = Ue(76, 16)), 0 == (e | 0) ? (e = 0) : dX(e));
  c[a + 24] = e;
  c[a + 37] = 0;
  c[a + 35] = 0;
  e = c[a + 36] = 0;
  for (var f = a + 21; ; ) {
    c[f + e] = 0;
    var g = e + 1;
    e = g;
    if (!(2 >= (g | 0))) {
      break;
    }
  }
}
xr.X = 1;
function v1a(a) {
  w1a(a);
  xe(a);
}
v1a.X = 1;
function x1a(a, d, e, f, g, h, i, j, l) {
  var m = b;
  b += 11;
  var n = m + 8;
  $7 = f;
  $11 = j;
  $12 = l;
  f = r1a(0, Ue(64, 16));
  PH(f, d, e, g, h, i);
  QY(m, d, e);
  c[f + 16] = c[a + 26];
  d = a + 37;
  e = c[d] + 1;
  c[d] = e;
  c[f + 4] = e;
  c[f + 13] = XY(a + 1, m, f);
  c_(f, a + c[a + 26] + 21);
  c[a + 39] & 1 ||
    (e_(n, a),
    (c[n + 2] = f),
    RY(a + 1, c[a + 1], m, n),
    RY(a + 11, c[a + 11], m, n));
  b = m;
  return f;
}
x1a.X = 1;
function y1a() {}
y1a.X = 1;
function z1a(a, d, e) {
  var f = a + 1;
  2 == (c[d + 16] | 0) ? $Y(f + 10, c[d + 13]) : $Y(f, c[d + 13]);
  f_(d, a + c[d + 16] + 21);
  f = c[a + 24];
  v[c[c[f] + 4]](f, d, e);
  yh(d);
  c[a + 40] = 1;
}
z1a.X = 1;
function w1a(a) {
  c[a] = d_ + 2;
  if (c[a + 38] & 1) {
    var d = c[a + 24];
    v[c[c[d]]](d);
    yh(c[a + 24]);
  }
  a = a + 21 - 10;
  aZ(a);
  aZ(a - 10);
}
w1a.X = 1;
function f_(a, d) {
  var e = c[a + 15];
  0 != (c[a + 14] | 0) ? (c[c[a + 14] + 15] = e) : (c[d] = e);
  0 != (c[a + 15] | 0) && (c[c[a + 15] + 14] = c[a + 14]);
}
f_.X = 1;
function A1a(a, d, e, f) {
  $1 = a;
  a = d + 5;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
  d += 9;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
}
A1a.X = 1;
function B1a(a, d, e, f, g, h) {
  var i = b;
  b += 2;
  C1a(i, f);
  D1a(a + 1, c[a + 1], d, e, f + 1, f + 5, k[f + 8], g, h, i);
  D1a(a + 11, c[a + 11], d, e, f + 1, f + 5, k[f + 8], g, h, i);
  b = i;
}
B1a.X = 1;
function E1a() {}
E1a.X = 1;
function F1a(a, d, e, f) {
  var g = b;
  b += 10;
  var h = g + 2;
  G1a(g, f);
  QY(h, d, e);
  RY(a + 1, c[a + 1], h, g);
  RY(a + 11, c[a + 11], h, g);
  b = g;
}
F1a.X = 1;
function H1a() {}
H1a.X = 1;
function I1a(a, d, e, f, g) {
  var h = b;
  b += 28;
  var i = h + 8,
    j = h + 12,
    l = h + 16,
    m = h + 20,
    n = h + 24,
    p = h + 25;
  $6 = g;
  QY(h, e, f);
  g = 0;
  if (2 == (c[d + 16] | 0)) {
    $Y(a + 11, c[d + 13]), (c[d + 13] = XY(a + 1, h, d)), (g = 1);
  } else {
    var r = a + 32;
    c[r] += 1;
    TY(c[d + 13], h)
      ? (N(i, e, d + 5),
        N(m, d + 9, d + 5),
        (k[n] = 2),
        wC(l, m, n),
        Q(j, l, a + 25),
        0 > k[i] && (k[j] = -k[j]),
        0 > k[i + 1] && (k[j + 1] = -k[j + 1]),
        0 > k[i + 2] && (k[j + 2] = -k[j + 2]),
        f1a(a + 1, c[d + 13], h, j, 0.05000000074505806) &&
          ((g = a + 33), (c[g] += 1), (g = 1)))
      : (ZY(a + 1, c[d + 13], h), (g = a + 33), (c[g] += 1), (g = 1));
  }
  f_(d, a + c[d + 16] + 21);
  i = d + 5;
  c[i] = c[e];
  k[i] = k[e];
  c[i + 1] = c[e + 1];
  k[i + 1] = k[e + 1];
  c[i + 2] = c[e + 2];
  k[i + 2] = k[e + 2];
  c[i + 3] = c[e + 3];
  k[i + 3] = k[e + 3];
  e = d + 9;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  c[d + 16] = c[a + 26];
  c_(d, a + c[a + 26] + 21);
  g & 1 &&
    ((c[a + 40] = 1),
    c[a + 39] & 1 ||
      (e_(p, a),
      g_(a + 11, c[a + 11], c[d + 13], p),
      g_(a + 1, c[a + 1], c[d + 13], p)));
  b = h;
}
I1a.X = 1;
function D1a(a, d, e, f, g, h, i, j, l, m) {
  var n = b;
  b += 28;
  var p = n + 4,
    r = n + 9,
    s = n + 10,
    t = n + 18,
    w = n + 22,
    x = n + 26,
    y = n + 27;
  $1 = a;
  $4 = f;
  if (0 != (d | 0)) {
    a = 1;
    f = 126;
    oY(p);
    c[r] = 0;
    pY(p, 128, r);
    c[qY(p, 0)] = d;
    for (d = s + 4; ; ) {
      a = r = a - 1;
      r = c[qY(p, r)];
      N(t, r, l);
      c[s] = c[t];
      k[s] = k[t];
      c[s + 1] = c[t + 1];
      k[s + 1] = k[t + 1];
      c[s + 2] = c[t + 2];
      k[s + 2] = k[t + 2];
      c[s + 3] = c[t + 3];
      k[s + 3] = k[t + 3];
      N(w, r + 4, j);
      c[d] = c[w];
      k[d] = k[w];
      c[d + 1] = c[w + 1];
      k[d + 1] = k[w + 1];
      c[d + 2] = c[w + 2];
      k[d + 2] = k[w + 2];
      c[d + 3] = c[w + 3];
      k[d + 3] = k[w + 3];
      k[x] = 1;
      $result1 = 0;
      var z = rY(e, g, h, s, x, 0, i) & 1;
      $result1 = z;
      if (0 != (z | 0)) {
        if (sY(r)) {
          (a | 0) > (f | 0) &&
            ((f = tY(p) << 1), (c[y] = 0), pY(p, f, y), (f = tY(p) - 2));
          var z = c[r + 9],
            A = a,
            a = A + 1;
          c[qY(p, A)] = z;
          r = c[r + 10];
          z = a;
          a = z + 1;
          c[qY(p, z)] = r;
        } else {
          (z = m), v[c[c[z] + 3]](z, r);
        }
      }
      if (0 == (a | 0)) {
        break;
      }
    }
    uY(p);
  }
  b = n;
}
D1a.X = 1;
function g_(a, d, e, f) {
  var g = b;
  b += 30;
  var h,
    i,
    j = g + 2,
    l = g + 4,
    m = g + 6,
    n = g + 8,
    p = g + 10,
    r = g + 12,
    s = g + 14,
    t = g + 16,
    w = g + 18,
    x = g + 20,
    y = g + 22,
    z = g + 24,
    A = g + 26,
    C = g + 28,
    B = 0 != (d | 0);
  a: do {
    if (B && 0 != (e | 0)) {
      h = 1;
      i = 124;
      J1a(a + 5, 128, g);
      var K = h_(a + 5, 0);
      i_(j, d, e);
      var E = K,
        G = j;
      c[E] = c[G];
      k[E] = k[G];
      c[E + 1] = c[G + 1];
      k[E + 1] = k[G + 1];
      for (
        var M = a + 5,
          L = l,
          F = a + 5,
          I = a + 5,
          R = a + 5,
          O = l,
          Z = l + 1,
          P = l,
          S = a + 5,
          da = l,
          V = l,
          ba = n,
          $ = a + 5,
          Y = l,
          la = l,
          ka = p,
          ja = a + 5,
          ea = l,
          ca = l,
          W = r,
          U = l + 1,
          X = l,
          ma = l + 1,
          ga = a + 5,
          ha = l,
          ta = l + 1,
          ra = s,
          ua = a + 5,
          za = l,
          Za = l + 1,
          ib = t,
          Ca = a + 5,
          Sa = l,
          mb = l + 1,
          Oa = w,
          Pa = a + 5,
          fc = l,
          jb = l + 1,
          La = x,
          fb = y,
          Rb = a + 5,
          pb = l,
          Sb = l + 1,
          ab = z,
          Ib = a + 5,
          Fc = l,
          Ac = l + 1,
          ob = A,
          Gc = a + 5,
          Yc = l,
          Cc = l + 1,
          Ub = C,
          Uc = l,
          nd = l + 1;
        ;

      ) {
        var Ic = h - 1;
        h = Ic;
        var tc = h_(M, Ic);
        c[L] = c[tc];
        k[L] = k[tc];
        c[L + 1] = c[tc + 1];
        k[L + 1] = k[tc + 1];
        (h | 0) > (i | 0) && (J1a(F, MZ(I) << 1, m), (i = MZ(R) - 4));
        var hd = c[P];
        if ((c[O] | 0) == (c[Z] | 0)) {
          if (sY(hd)) {
            var Tb = h;
            h = Tb + 1;
            var Jc = h_(S, Tb);
            i_(n, c[c[da] + 9], c[c[V] + 9]);
            var ub = Jc;
            c[ub] = c[ba];
            k[ub] = k[ba];
            c[ub + 1] = c[ba + 1];
            k[ub + 1] = k[ba + 1];
            var uc = h;
            h = uc + 1;
            var Kc = h_($, uc);
            i_(p, c[c[Y] + 10], c[c[la] + 10]);
            var gb = Kc;
            c[gb] = c[ka];
            k[gb] = k[ka];
            c[gb + 1] = c[ka + 1];
            k[gb + 1] = k[ka + 1];
            var gc = h;
            h = gc + 1;
            var Lc = h_(ja, gc);
            i_(r, c[c[ea] + 9], c[c[ca] + 10]);
            var Dc = Lc;
            c[Dc] = c[W];
            k[Dc] = k[W];
            c[Dc + 1] = c[W + 1];
            k[Dc + 1] = k[W + 1];
          }
        } else {
          if (TY(hd, c[U])) {
            var Eb = sY(c[ma]);
            if (sY(c[X])) {
              var Ra = h;
              h = Ra + 1;
              var qb = h_(ga, Ra),
                Ab = c[c[ha] + 9],
                hc = c[ta];
              if (Eb) {
                i_(s, Ab, c[hc + 9]);
                var Hc = qb;
                c[Hc] = c[ra];
                k[Hc] = k[ra];
                c[Hc + 1] = c[ra + 1];
                k[Hc + 1] = k[ra + 1];
                var ic = h;
                h = ic + 1;
                var db = h_(ua, ic);
                i_(t, c[c[za] + 10], c[c[Za] + 9]);
                var bb = db;
                c[bb] = c[ib];
                k[bb] = k[ib];
                c[bb + 1] = c[ib + 1];
                k[bb + 1] = k[ib + 1];
                var id = h;
                h = id + 1;
                var Zc = h_(Ca, id);
                i_(w, c[c[Sa] + 9], c[c[mb] + 10]);
                var vb = Zc;
                c[vb] = c[Oa];
                k[vb] = k[Oa];
                c[vb + 1] = c[Oa + 1];
                k[vb + 1] = k[Oa + 1];
                var rb = h;
                h = rb + 1;
                var vc = h_(Pa, rb);
                i_(x, c[c[fc] + 10], c[c[jb] + 10]);
                var Qc = vc;
                c[Qc] = c[La];
                k[Qc] = k[La];
                c[Qc + 1] = c[La + 1];
                k[Qc + 1] = k[La + 1];
              } else {
                i_(y, Ab, hc);
                var Rc = qb;
                c[Rc] = c[fb];
                k[Rc] = k[fb];
                c[Rc + 1] = c[fb + 1];
                k[Rc + 1] = k[fb + 1];
                var Xd = h;
                h = Xd + 1;
                var Sc = h_(Rb, Xd);
                i_(z, c[c[pb] + 10], c[Sb]);
                var Mc = Sc;
                c[Mc] = c[ab];
                k[Mc] = k[ab];
                c[Mc + 1] = c[ab + 1];
                k[Mc + 1] = k[ab + 1];
              }
            } else {
              if (Eb) {
                var $c = h;
                h = $c + 1;
                var Cd = h_(Ib, $c);
                i_(A, c[Fc], c[c[Ac] + 9]);
                var wc = Cd;
                c[wc] = c[ob];
                k[wc] = k[ob];
                c[wc + 1] = c[ob + 1];
                k[wc + 1] = k[ob + 1];
                var Bb = h;
                h = Bb + 1;
                var fd = h_(Gc, Bb);
                i_(C, c[Yc], c[c[Cc] + 10]);
                var ad = fd;
                c[ad] = c[Ub];
                k[ad] = k[Ub];
                c[ad + 1] = c[Ub + 1];
                k[ad + 1] = k[Ub + 1];
              } else {
                var wd = f;
                v[c[c[wd] + 2]](wd, c[Uc], c[nd]);
              }
            }
          }
        }
        if (0 == (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
g_.X = 1;
function Nr(a, d, e, f, g) {
  var h = b;
  b += 11;
  var i = h + 8;
  $6 = g;
  QY(h, e, f);
  2 == (c[d + 16] | 0)
    ? ($Y(a + 11, c[d + 13]), (c[d + 13] = XY(a + 1, h, d)))
    : ((g = a + 32),
      (c[g] += 1),
      ZY(a + 1, c[d + 13], h),
      (g = a + 33),
      (c[g] += 1));
  f_(d, a + c[d + 16] + 21);
  g = d + 5;
  c[g] = c[e];
  k[g] = k[e];
  c[g + 1] = c[e + 1];
  k[g + 1] = k[e + 1];
  c[g + 2] = c[e + 2];
  k[g + 2] = k[e + 2];
  c[g + 3] = c[e + 3];
  k[g + 3] = k[e + 3];
  e = d + 9;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  c[d + 16] = c[a + 26];
  c_(d, a + c[a + 26] + 21);
  c[a + 40] = 1;
  c[a + 39] & 1 ||
    (e_(i, a),
    g_(a + 11, c[a + 11], c[d + 13], i),
    g_(a + 1, c[a + 1], c[d + 13], i));
  b = h;
}
Nr.X = 1;
function K1a(a, d) {
  Hr(a, d);
  zr(a, d);
}
K1a.X = 1;
function Hr(a, d) {
  var e = b;
  b += 18;
  var f,
    g = e + 1,
    h = e + 2,
    i = e + 5,
    j = e + 13,
    l = e + 16,
    m = e + 17,
    n,
    p;
  T0a(a + 1, ((((c[a + 28] * c[a + 4]) | 0) / 100) & -1) + 1);
  0 != (c[a + 31] | 0) &&
    ((f = ((((c[a + 27] * c[a + 14]) | 0) / 100) & -1) + 1),
    T0a(a + 11, ((((c[a + 27] * c[a + 14]) | 0) / 100) & -1) + 1),
    (c[e] = 0),
    (c[g] = c[a + 31] - f),
    (c[a + 31] = c[a_(e, g)]));
  c[a + 26] = ((c[a + 26] + 1) | 0) % 2;
  f = g = c[a + c[a + 26] + 21];
  if (0 != (g | 0)) {
    e_(h, a);
    for (
      var g = a + 21, r = a + 23, s = a + 1, t = a + 11;
      !((h = c[f + 15]),
      f_(f, g + c[f + 16]),
      c_(f, r),
      $Y(s, c[f + 13]),
      QY(i, f + 5, f + 9),
      (c[f + 13] = XY(t, i, f)),
      (c[f + 16] = 2),
      (f = h),
      0 == (f | 0));

    ) {}
    c[a + 31] = c[a + 14];
    c[a + 40] = 1;
  }
  e_(j, a);
  c[a + 39] & 1 && g_(a + 1, c[a + 1], c[a + 11], j);
  c[a + 39] & 1 && g_(a + 1, c[a + 1], c[a + 1], j);
  i = c[a + 40] & 1;
  do {
    if (i && ((j = c[a + 24]), (j = v[c[c[j] + 7]](j)), 0 < (jX(j) | 0))) {
      c[l] = jX(j);
      c[m] = (((c[a + 29] * jX(j)) | 0) / 100) & -1;
      f = c[L1a(l, a_(a + 30, m))];
      h = 0;
      g = (h | 0) < (f | 0);
      r = j;
      a: do {
        if (g) {
          s = a + 36;
          t = a + 24;
          for (p = r; ; ) {
            n = lX(p, ((h + c[s]) | 0) % (jX(j) | 0));
            p = c[n];
            n = c[n + 1];
            if (!TY(c[p + 13], c[n + 13])) {
              var w = c[t];
              v[c[c[w] + 3]](w, p, n, d);
              f -= 1;
              h -= 1;
            }
            h += 1;
            p = j;
            if ((h | 0) >= (f | 0)) {
              var x = p;
              break a;
            }
          }
        } else {
          x = r;
        }
      } while (0);
      h = a + 36;
      0 < (jX(x) | 0)
        ? (c[a + 36] = ((f + c[h]) | 0) % (jX(j) | 0))
        : (c[h] = 0);
    }
  } while (0);
  l = a + 35;
  c[l] += 1;
  c[a + 30] = 1;
  c[a + 40] = 0;
  k[a + 34] = 0 < c[a + 32] >>> 0 ? (c[a + 33] >>> 0) / (c[a + 32] >>> 0) : 0;
  l = a + 33;
  c[l] = Math.floor((c[l] >>> 0) / 2);
  l = a + 32;
  c[l] = Math.floor((c[l] >>> 0) / 2);
  b = e;
}
Hr.X = 1;
function M1a() {}
M1a.X = 1;
function L1a(a, d) {
  return (c[a] | 0) < (c[d] | 0) ? a : d;
}
L1a.X = 1;
function N1a(a) {
  return c[a + 24];
}
N1a.X = 1;
function O1a(a) {
  return c[a + 24];
}
O1a.X = 1;
function P1a(a) {
  return 0 == (c[a] | 0);
}
P1a.X = 1;
function h_(a, d) {
  return (d << 1) + c[a + 3];
}
h_.X = 1;
function i_(a, d, e) {
  c[a] = d;
  c[a + 1] = e;
}
i_.X = 1;
function Q1a(a) {
  return c[a + 2];
}
Q1a.X = 1;
function zr(a, d) {
  var e = b;
  b += 8;
  var f,
    g,
    h,
    i,
    j,
    l = e + 4;
  f = c[a + 24];
  if (v[c[c[f] + 14]](f)) {
    f = c[a + 24];
    f = v[c[c[f] + 7]](f);
    iX(f);
    g = 0;
    Az(e);
    c[e] = 0;
    c[e + 1] = 0;
    h = c[e + 2] = 0;
    var m = (h | 0) < (jX(f) | 0);
    a: do {
      if (m) {
        var n = e,
          p = a + 24;
        for (i = f; ; ) {
          i = lX(i, h);
          j = mX(i, e) & 1;
          var r = i;
          c[n] = c[r];
          k[n] = k[r];
          c[n + 1] = c[r + 1];
          k[n + 1] = k[r + 1];
          c[n + 2] = c[r + 2];
          k[n + 2] = k[r + 2];
          c[n + 3] = c[r + 3];
          k[n + 3] = k[r + 3];
          j = j & 1 ? 1 : TY(c[c[i] + 13], c[c[i + 1] + 13]) & 1 ? 0 : 1;
          j & 1 &&
            ((j = c[p]),
            v[c[c[j] + 8]](j, i, d),
            (c[i] = 0),
            (c[i + 1] = 0),
            (g += 1));
          h += 1;
          i = f;
          if ((h | 0) >= (jX(f) | 0)) {
            var s = i;
            break a;
          }
        }
      } else {
        s = f;
      }
    } while (0);
    iX(s);
    s = jX(f) - g;
    Az(l);
    kX(f, s, l);
  }
  b = e;
}
zr.X = 1;
function Kr(a) {
  W0a(a + 1, 128);
  W0a(a + 11, 128);
}
Kr.X = 1;
function R1a(a, d, e) {
  var f = b;
  b += 23;
  var g = f + 8,
    h = f + 16,
    i = f + 20,
    j = f + 21,
    l = f + 22,
    m = P1a(a + 11);
  P1a(a + 1)
    ? m
      ? ((k[i] = 0),
        (k[j] = 0),
        (k[l] = 0),
        H(h, i, j, l),
        S1a(g, h, 0),
        (c[f] = c[g]),
        (k[f] = k[g]),
        (c[f + 1] = c[g + 1]),
        (k[f + 1] = k[g + 1]),
        (c[f + 2] = c[g + 2]),
        (k[f + 2] = k[g + 2]),
        (c[f + 3] = c[g + 3]),
        (k[f + 3] = k[g + 3]),
        (c[f + 4] = c[g + 4]),
        (k[f + 4] = k[g + 4]),
        (c[f + 5] = c[g + 5]),
        (k[f + 5] = k[g + 5]),
        (c[f + 6] = c[g + 6]),
        (k[f + 6] = k[g + 6]),
        (c[f + 7] = c[g + 7]),
        (k[f + 7] = k[g + 7]))
      : ((a = c[a + 11]),
        (c[f] = c[a]),
        (k[f] = k[a]),
        (c[f + 1] = c[a + 1]),
        (k[f + 1] = k[a + 1]),
        (c[f + 2] = c[a + 2]),
        (k[f + 2] = k[a + 2]),
        (c[f + 3] = c[a + 3]),
        (k[f + 3] = k[a + 3]),
        (c[f + 4] = c[a + 4]),
        (k[f + 4] = k[a + 4]),
        (c[f + 5] = c[a + 5]),
        (k[f + 5] = k[a + 5]),
        (c[f + 6] = c[a + 6]),
        (k[f + 6] = k[a + 6]),
        (c[f + 7] = c[a + 7]),
        (k[f + 7] = k[a + 7]))
    : ((g = c[a + 1]),
      m
        ? ((c[f] = c[g]),
          (k[f] = k[g]),
          (c[f + 1] = c[g + 1]),
          (k[f + 1] = k[g + 1]),
          (c[f + 2] = c[g + 2]),
          (k[f + 2] = k[g + 2]),
          (c[f + 3] = c[g + 3]),
          (k[f + 3] = k[g + 3]),
          (c[f + 4] = c[g + 4]),
          (k[f + 4] = k[g + 4]),
          (c[f + 5] = c[g + 5]),
          (k[f + 5] = k[g + 5]),
          (c[f + 6] = c[g + 6]),
          (k[f + 6] = k[g + 6]),
          (c[f + 7] = c[g + 7]),
          (k[f + 7] = k[g + 7]))
        : $Z(g, c[a + 11], f));
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  d = f + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  b = f;
}
R1a.X = 1;
function S1a(a, d, e) {
  var f = b;
  b += 5;
  var g = f + 1;
  k[f] = e;
  H(g, f, f, f);
  T1a(a, d, g);
  b = f;
}
S1a.X = 1;
function U1a(a, d) {
  var e;
  $2 = d;
  var f = 0 != ((c[a + 14] + c[a + 4]) | 0);
  a: do {
    if (!f) {
      JZ(a + 1);
      JZ(a + 11);
      c[a + 39] = 0;
      c[a + 40] = 1;
      c[a + 26] = 0;
      c[a + 31] = 0;
      c[a + 27] = 1;
      c[a + 28] = 0;
      c[a + 29] = 10;
      c[a + 30] = 1;
      e = a + 32;
      c[e] = 0;
      k[e] = 0;
      c[e + 1] = 0;
      k[e + 1] = 0;
      c[e + 2] = 0;
      k[e + 2] = 0;
      c[e + 3] = 0;
      k[e + 3] = 0;
      c[e + 4] = 0;
      k[e + 4] = 0;
      c[e + 5] = 0;
      e = k[e + 5] = 0;
      for (var g = a + 21; ; ) {
        c[g + e] = 0;
        var h = e + 1;
        e = h;
        if (!(2 >= (h | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
U1a.X = 1;
function T1a(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4;
  N(f, d, e);
  c[a] = c[f];
  k[a] = k[f];
  c[a + 1] = c[f + 1];
  k[a + 1] = k[f + 1];
  c[a + 2] = c[f + 2];
  k[a + 2] = k[f + 2];
  c[a + 3] = c[f + 3];
  k[a + 3] = k[f + 3];
  a += 4;
  wn(g, d, e);
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  b = f;
}
T1a.X = 1;
function J1a(a, d, e) {
  var f, g;
  f = MZ(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (MZ(a) | 0) && V1a(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = (g << 1) + c[i];
          if (0 != (j | 0)) {
            var l = e;
            c[j] = c[l];
            k[j] = k[l];
            c[j + 1] = c[l + 1];
            k[j + 1] = k[l + 1];
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
J1a.X = 1;
function V1a(a, d) {
  var e;
  (Q1a(a) | 0) < (d | 0) &&
    ((e = W1a(a, d)),
    X1a(a, 0, MZ(a), e),
    G0a(a, 0, MZ(a)),
    H0a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
V1a.X = 1;
function W1a(a, d) {
  return 0 != (d | 0) ? Y1a(a, d, 0) : 0;
}
W1a.X = 1;
function X1a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 1) + f;
        if (0 != (i | 0)) {
          var j = (d << 1) + c[h];
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
X1a.X = 1;
function Y1a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 3, 16);
}
Y1a.X = 1;
function G1a(a, d) {
  HY(a);
  c[a] = Z1a + 2;
  c[a + 1] = d;
}
G1a.X = 1;
function $1a(a) {
  xe(a);
}
$1a.X = 1;
function a2a(a, d) {
  var e = c[a + 1];
  v[c[c[e] + 2]](e, c[d + 9]);
}
a2a.X = 1;
function C1a(a, d) {
  HY(a);
  c[a] = b2a + 2;
  c[a + 1] = d;
}
C1a.X = 1;
function c2a(a) {
  xe(a);
}
c2a.X = 1;
function d2a(a, d) {
  var e = c[a + 1];
  v[c[c[e] + 2]](e, c[d + 9]);
}
d2a.X = 1;
function e_(a, d) {
  HY(a);
  c[a] = e2a + 2;
  c[a + 1] = d;
}
e_.X = 1;
function f2a(a) {
  xe(a);
}
f2a.X = 1;
function g2a(a, d, e) {
  if ((d | 0) != (e | 0)) {
    var f = c[c[a + 1] + 24];
    v[c[c[f] + 2]](f, c[d + 9], c[e + 9]);
    a = c[a + 1] + 30;
    c[a] += 1;
  }
}
g2a.X = 1;
function h2a(a, d) {
  v[c[c[a] + 2]](a, d, c[c[a + 2] + 13]);
}
h2a.X = 1;
function i2a(a) {
  c[a] = j2a + 2;
}
i2a.X = 1;
function Ij(a, d) {
  var e = b;
  b += 4;
  var f,
    g = e + 1,
    h = e + 2,
    i = e + 3;
  i2a(a);
  c[a] = j_ + 2;
  f = Ue(360, 16);
  0 == (f | 0) ? (f = 0) : gY(f);
  c[a + 8] = f;
  0 != (c[d + 7] | 0)
    ? ((f = Ue(4, 16)), 0 == (f | 0) ? (f = 0) : vY(f))
    : ((f = Ue(4, 16)), 0 == (f | 0) ? (f = 0) : k2a(f));
  c[a + 9] = f;
  f = Ue(24, 16);
  0 == (f | 0) ? (f = 0) : UXa(f, c[a + 8], c[a + 9]);
  c[a + 10] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : l2a(f);
  c[a + 11] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : m2a(f);
  c[a + 12] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : n2a(f);
  c[a + 13] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : o2a(f);
  c[a + 14] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : p2a(f);
  c[a + 15] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : q2a(f);
  c[a + 16] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : r2a(f);
  c[a + 18] = f;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : r2a(f);
  c[a + 19] = f;
  c[c[a + 19] + 1] = 1;
  f = Ue(8, 16);
  0 == (f | 0) ? (f = 0) : s2a(f);
  c[a + 17] = f;
  f = Ue(16, 16);
  0 == (f | 0) ? (f = 0) : t2a(f);
  c[a + 21] = f;
  f = Ue(16, 16);
  0 == (f | 0) ? (f = 0) : t2a(f);
  c[a + 20] = f;
  c[c[a + 20] + 1] = 1;
  c[e] = 36;
  c[g] = 80;
  c[h] = 44;
  $sl = 76;
  c[i] = c[a_(e, d + 5)];
  c[i] = c[a_(i, g)];
  c[i] = c[a_(i, h)];
  g = a + 3;
  0 != (c[d] | 0)
    ? ((c[g] = 0), (c[a + 2] = c[d]))
    : ((c[g] = 1),
      (g = Ue(20, 16)),
      0 == (g | 0) ? (g = 0) : Om(g, c[d + 6]),
      (c[a + 2] = g));
  g = a + 5;
  0 != (c[d + 1] | 0)
    ? ((c[g] = 0), (c[a + 4] = c[d + 1]))
    : ((c[g] = 1),
      (g = Ue(20, 16)),
      0 == (g | 0) ? (g = 0) : u2a(g, 1140, c[d + 3]),
      (c[a + 4] = g));
  g = a + 7;
  0 != (c[d + 2] | 0)
    ? ((c[g] = 0), (c[a + 6] = c[d + 2]))
    : ((c[g] = 1),
      (g = Ue(20, 16)),
      0 == (g | 0) ? (i = 0) : (u2a(g, c[i], c[d + 4]), (i = g)),
      (c[a + 6] = i));
  b = e;
}
Ij.X = 1;
function v2a(a) {
  w2a(a);
  xe(a);
}
v2a.X = 1;
function w2a(a) {
  c[a] = j_ + 2;
  c[a + 3] & 1 && (Lm(c[a + 2]), Lm(c[a + 2]), yh(c[a + 2]));
  c[a + 7] & 1 && (x2a(c[a + 6]), yh(c[a + 6]));
  c[a + 5] & 1 && (x2a(c[a + 4]), yh(c[a + 4]));
  var d = c[a + 10];
  v[c[c[d]]](d);
  yh(c[a + 10]);
  d = c[a + 11];
  v[c[c[d]]](d);
  yh(c[a + 11]);
  d = c[a + 12];
  v[c[c[d]]](d);
  yh(c[a + 12]);
  d = c[a + 13];
  v[c[c[d]]](d);
  yh(c[a + 13]);
  d = c[a + 14];
  v[c[c[d]]](d);
  yh(c[a + 14]);
  d = c[a + 15];
  v[c[c[d]]](d);
  yh(c[a + 15]);
  d = c[a + 16];
  v[c[c[d]]](d);
  yh(c[a + 16]);
  d = c[a + 18];
  v[c[c[d]]](d);
  yh(c[a + 18]);
  d = c[a + 19];
  v[c[c[d]]](d);
  yh(c[a + 19]);
  d = c[a + 17];
  v[c[c[d]]](d);
  yh(c[a + 17]);
  d = c[a + 21];
  v[c[c[d]]](d);
  yh(c[a + 21]);
  d = c[a + 20];
  v[c[c[d]]](d);
  yh(c[a + 20]);
  yh(c[a + 8]);
  d = c[a + 9];
  v[c[c[d]]](d);
  yh(c[a + 9]);
}
w2a.X = 1;
function Nj(a, d, e) {
  a = c[a + 10];
  c[a + 4] = d;
  c[a + 5] = e;
}
Nj.X = 1;
function y2a(a) {
  return c[a + 4];
}
y2a.X = 1;
function z2a(a) {
  return c[a + 6];
}
z2a.X = 1;
function A2a(a) {
  return c[a + 2];
}
A2a.X = 1;
function B2a(a) {
  return c[a + 8];
}
B2a.X = 1;
function C2a(a, d, e) {
  var f, g;
  if (8 == (d | 0)) {
    if (8 == (e | 0)) {
      (g = c[a + 16]), (f = 35);
    } else {
      if (8 != (d | 0)) {
        var h = d;
        f = 9;
      } else {
        1 != (e | 0) ? (f = 8) : ((g = c[a + 18]), (f = 35));
      }
    }
  } else {
    f = 8;
  }
  8 == f && ((h = d), (f = 9));
  a: do {
    if (9 == f) {
      g = 1 == (h | 0);
      do {
        if (g && 8 == (e | 0)) {
          g = c[a + 19];
          break a;
        }
      } while (0);
      g = 0 == (d | 0);
      do {
        if (g && 0 == (e | 0)) {
          g = c[a + 17];
          break a;
        }
      } while (0);
      g = yf(d);
      do {
        if (g && 28 == (e | 0)) {
          g = c[a + 21];
          break a;
        }
      } while (0);
      g = yf(e);
      do {
        if (g && 28 == (d | 0)) {
          g = c[a + 20];
          break a;
        }
      } while (0);
      g = yf(d);
      do {
        if (g && yf(e)) {
          g = c[a + 10];
          break a;
        }
      } while (0);
      g = yf(d);
      do {
        if (g && Yf(e)) {
          g = c[a + 11];
          break a;
        }
      } while (0);
      g = yf(e);
      do {
        if (g && Yf(d)) {
          g = c[a + 12];
          break a;
        }
      } while (0);
      g = He(d) ? c[a + 13] : He(e) ? c[a + 14] : c[a + 15];
    }
  } while (0);
  return g;
}
C2a.X = 1;
function x2a(a) {
  yh(c[a + 4]);
}
x2a.X = 1;
function u2a(a, d, e) {
  c[a] = d;
  c[a + 1] = e;
  c[a + 4] = Ue(c[a + 1] * c[a], 16);
  d = c[a + 4];
  c[a + 3] = d;
  c[a + 2] = c[a + 1];
  var e = c[a + 1],
    f = e - 1,
    e = f,
    f = 0 != (f | 0),
    g = d;
  a: do {
    if (f) {
      for (var h = a, i = a, j = g; ; ) {
        c[d] = j + c[h];
        var d = d + c[i],
          e = (j = e - 1),
          l = d;
        if (0 == (j | 0)) {
          var m = l;
          break a;
        }
        j = l;
      }
    } else {
      m = g;
    }
  } while (0);
  c[m] = 0;
}
u2a.X = 1;
function t2a(a) {
  gM(a);
  c[a] = D2a + 2;
  c[a + 2] = 1;
  c[a + 3] = 1;
}
t2a.X = 1;
function E2a() {}
E2a.X = 1;
function F2a(a) {
  xe(a);
}
F2a.X = 1;
function G2a(a, d, e, f) {
  var g = c[d],
    g = v[c[c[g] + 14]](g, 28),
    h = 0 == (g | 0);
  c[a + 1] & 1
    ? h ? (a = 0) : (zZ(g, 0, d, e, f, 1, c[a + 2], c[a + 3]), (a = g))
    : h ? (a = 0) : (zZ(g, 0, d, e, f, 0, c[a + 2], c[a + 3]), (a = g));
  return a;
}
G2a.X = 1;
function s2a(a) {
  gM(a);
  c[a] = H2a + 2;
}
s2a.X = 1;
function I2a() {}
I2a.X = 1;
function J2a(a) {
  xe(a);
}
J2a.X = 1;
function K2a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 16);
  0 == (a | 0) ? (d = 0) : (sPa(a, 0, d, e, f), (d = a));
  return d;
}
K2a.X = 1;
function r2a(a) {
  gM(a);
  c[a] = L2a + 2;
}
r2a.X = 1;
function M2a() {}
M2a.X = 1;
function N2a(a) {
  xe(a);
}
N2a.X = 1;
function O2a(a, d, e, f) {
  var g = c[d],
    g = v[c[c[g] + 14]](g, 20);
  0 == (g | 0) ? (a = 0) : (P2a(g, c[d + 1], d, e, f, c[a + 1] & 1), (a = g));
  return a;
}
O2a.X = 1;
function q2a(a) {
  gM(a);
  c[a] = Q2a + 2;
}
q2a.X = 1;
function R2a() {}
R2a.X = 1;
function S2a(a) {
  xe(a);
}
S2a.X = 1;
function T2a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 16);
  0 == (a | 0) ? (d = 0) : (Wj(a, 0, d, e, f), (d = a));
  return d;
}
T2a.X = 1;
function p2a(a) {
  gM(a);
  c[a] = U2a + 2;
}
p2a.X = 1;
function V2a() {}
V2a.X = 1;
function W2a(a) {
  xe(a);
}
W2a.X = 1;
function X2a(a, d, e, f) {
  $1 = a;
  $3 = e;
  $4 = f;
  a = c[d];
  a = v[c[c[a] + 14]](a, 8);
  0 == (a | 0) ? (d = 0) : (Y2a(a, d), (d = a));
  return d;
}
X2a.X = 1;
function o2a(a) {
  gM(a);
  c[a] = Z2a + 2;
}
o2a.X = 1;
function $2a() {}
$2a.X = 1;
function a3a(a) {
  xe(a);
}
a3a.X = 1;
function b3a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 44);
  0 == (a | 0) ? (d = 0) : (NY(a, d, e, f, 1), (d = a));
  return d;
}
b3a.X = 1;
function n2a(a) {
  gM(a);
  c[a] = c3a + 2;
}
n2a.X = 1;
function d3a() {}
d3a.X = 1;
function e3a(a) {
  xe(a);
}
e3a.X = 1;
function f3a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 44);
  0 == (a | 0) ? (d = 0) : (NY(a, d, e, f, 0), (d = a));
  return d;
}
f3a.X = 1;
function m2a(a) {
  gM(a);
  c[a] = g3a + 2;
}
m2a.X = 1;
function h3a() {}
h3a.X = 1;
function i3a(a) {
  xe(a);
}
i3a.X = 1;
function j3a() {}
j3a.X = 1;
function k3a() {}
k3a.X = 1;
function l3a() {
  return 1;
}
l3a.X = 1;
function m3a() {}
m3a.X = 1;
function n3a() {}
n3a.X = 1;
function o3a() {
  return D.se;
}
o3a.X = 1;
function p3a() {}
p3a.X = 1;
function q3a(a) {
  return a + 4;
}
q3a.X = 1;
function k_(a, d) {
  return c[a + 3] + 9 * d;
}
k_.X = 1;
function r3a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 80);
  0 == (a | 0) ? (d = 0) : (oZ(a, d, e, f, 1), (d = a));
  return d;
}
r3a.X = 1;
function l2a(a) {
  gM(a);
  c[a] = s3a + 2;
}
l2a.X = 1;
function t3a() {}
t3a.X = 1;
function u3a(a) {
  xe(a);
}
u3a.X = 1;
function v3a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 80);
  0 == (a | 0) ? (d = 0) : (oZ(a, d, e, f, 0), (d = a));
  return d;
}
v3a.X = 1;
function k2a(a) {
  QTa(a);
  c[a] = w3a + 2;
}
k2a.X = 1;
function x3a() {}
x3a.X = 1;
function y3a(a) {
  xe(a);
}
y3a.X = 1;
function z3a(a) {
  xe(a);
}
z3a.X = 1;
function Y2a(a, d) {
  ZW(a, d);
  c[a] = A3a + 2;
}
Y2a.X = 1;
function B3a() {}
B3a.X = 1;
function C3a(a) {
  xe(a);
}
C3a.X = 1;
function D3a(a) {
  cZ(a);
  c[a] = E3a + 2;
  c[a + 1] = 27;
}
D3a.X = 1;
function F3a(a) {
  xe(a);
}
F3a.X = 1;
function G3a() {}
G3a.X = 1;
function H3a(a, d, e, f) {
  var g = b;
  b += 15;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11;
  k[h] = v[c[c[a] + 11]](a);
  k[i] = v[c[c[a] + 11]](a);
  k[j] = v[c[c[a] + 11]](a);
  H(g, h, i, j);
  N(l, d + 12, g);
  c[e] = c[l];
  k[e] = k[l];
  c[e + 1] = c[l + 1];
  k[e + 1] = k[l + 1];
  c[e + 2] = c[l + 2];
  k[e + 2] = k[l + 2];
  c[e + 3] = c[l + 3];
  k[e + 3] = k[l + 3];
  wn(m, d + 12, g);
  c[f] = c[m];
  k[f] = k[m];
  c[f + 1] = c[m + 1];
  k[f + 1] = k[m + 1];
  c[f + 2] = c[m + 2];
  k[f + 2] = k[m + 2];
  c[f + 3] = c[m + 3];
  k[f + 3] = k[m + 3];
  b = g;
}
H3a.X = 1;
function I3a(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
I3a.X = 1;
function J3a(a, d, e) {
  var f = b;
  b += 9;
  l_(f, c[a + 3] + 9 * d);
  for (
    var g = c[a + 3] + 9 * e, d = c[a + 3] + 9 * d, h = g + 9;
    g < h;
    g++, d++
  ) {
    (c[d] = c[g]), (k[d] = k[g]);
  }
  a = c[a + 3] + 9 * e;
  g = f;
  d = a;
  for (h = g + 9; g < h; g++, d++) {
    (c[d] = c[g]), (k[d] = k[g]);
  }
  b = f;
}
J3a.X = 1;
function m_(a) {
  k[a] = 3.4028234663852886e38;
  k[a + 1] = 3.4028234663852886e38;
  k[a + 2] = 3.4028234663852886e38;
  k[a + 4] = -3.4028234663852886e38;
  k[a + 4 + 1] = -3.4028234663852886e38;
  k[a + 4 + 2] = -3.4028234663852886e38;
}
m_.X = 1;
function n_(a) {
  return c[a + 1];
}
n_.X = 1;
function o_(a, d) {
  k[a] = k[a] > k[d] ? k[d] : k[a];
  k[a + 1] = k[a + 1] > k[d + 1] ? k[d + 1] : k[a + 1];
  k[a + 2] = k[a + 2] > k[d + 2] ? k[d + 2] : k[a + 2];
  k[a + 4] = k[a + 4] < k[d + 4] ? k[d + 4] : k[a + 4];
  k[a + 4 + 1] = k[a + 4 + 1] < k[d + 4 + 1] ? k[d + 4 + 1] : k[a + 4 + 1];
  k[a + 4 + 2] = k[a + 4 + 2] < k[d + 4 + 2] ? k[d + 4 + 2] : k[a + 4 + 2];
}
o_.X = 1;
function K3a(a, d, e) {
  var f, g;
  f = n_(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (n_(a) | 0) && L3a(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + 9 * g;
          0 != (j | 0) && l_(j, e);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
K3a.X = 1;
function M3a(a, d) {
  var e, f;
  k[a] > k[d + 4]
    ? (e = 8)
    : k[a + 4] < k[d]
      ? (e = 8)
      : k[a + 1] > k[d + 4 + 1]
        ? (e = 8)
        : k[a + 4 + 1] < k[d + 1]
          ? (e = 8)
          : k[a + 2] > k[d + 4 + 2]
            ? (e = 8)
            : k[a + 4 + 2] < k[d + 2] ? (e = 8) : ((f = 1), (e = 10));
  8 == e && (f = 0);
  return f;
}
M3a.X = 1;
function N3a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
N3a.X = 1;
function O3a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
O3a.X = 1;
function P3a(a) {
  return c[a + 2];
}
P3a.X = 1;
function p_(a, d) {
  (rW(a) | 0) == (LKa(a) | 0) && OKa(a, N3a(a, rW(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
p_.X = 1;
function Q3a(a, d, e) {
  var f = b;
  b += 32;
  var g = f + 16;
  uw(f, d);
  WW(g, f, e);
  xi(f, g);
  d = f + 12;
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  Wb(a + 4, f);
  R3a(a);
  b = f;
}
Q3a.X = 1;
function L3a(a, d) {
  var e;
  (P3a(a) | 0) < (d | 0) &&
    ((e = S3a(a, d)),
    T3a(a, 0, n_(a), e),
    O3a(a, 0, n_(a)),
    U3a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
L3a.X = 1;
function l_(a, d) {
  V3a(a, d);
  c[a + 8] = c[d + 8];
}
l_.X = 1;
function V3a(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  var e = a + 4,
    f = d + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
}
V3a.X = 1;
function S3a(a, d) {
  return 0 != (d | 0) ? W3a(a, d, 0) : 0;
}
S3a.X = 1;
function T3a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + 9 * d;
        0 != (i | 0) && l_(i, c[h] + 9 * d);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
T3a.X = 1;
function U3a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && X3a(a, c[a + 3]), (c[a + 3] = 0));
}
U3a.X = 1;
function X3a(a, d) {
  $1 = a;
  yh(d);
}
X3a.X = 1;
function W3a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(36 * d, 16);
}
W3a.X = 1;
function Y3a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
Y3a.X = 1;
function Z3a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
Z3a.X = 1;
function $3a(a, d, e) {
  c[a] = d;
  c[a + 1] = e;
}
$3a.X = 1;
function q_(a) {
  return c[a + 1];
}
q_.X = 1;
function a4a(a) {
  return c[a + 2];
}
a4a.X = 1;
function b4a(a, d) {
  c[a] = c[d];
  c[a + 1] = c[d + 1];
}
b4a.X = 1;
function c4a(a, d, e) {
  var f = b;
  b += 2;
  $3a(f, d, e);
  d4a(a, f);
  b = f;
}
c4a.X = 1;
function d4a(a, d) {
  (q_(a) | 0) == (a4a(a) | 0) && e4a(a, Y3a(a, q_(a)));
  var e = (c[a + 1] << 1) + c[a + 3];
  0 != (e | 0) && b4a(e, d);
  e = a + 1;
  c[e] += 1;
}
d4a.X = 1;
function e4a(a, d) {
  var e;
  (a4a(a) | 0) < (d | 0) &&
    ((e = f4a(a, d)),
    g4a(a, 0, q_(a), e),
    Z3a(a, 0, q_(a)),
    h4a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
e4a.X = 1;
function f4a(a, d) {
  return 0 != (d | 0) ? i4a(a, d, 0) : 0;
}
f4a.X = 1;
function g4a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = (d << 1) + f;
        0 != (i | 0) && b4a(i, (d << 1) + c[h]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
g4a.X = 1;
function h4a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && j4a(a, c[a + 3]), (c[a + 3] = 0));
}
h4a.X = 1;
function j4a(a, d) {
  $1 = a;
  yh(d);
}
j4a.X = 1;
function i4a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 3, 16);
}
i4a.X = 1;
function k4a(a, d, e, f) {
  var g = b;
  b += 20;
  var h,
    i,
    j = g + 4,
    l = g + 8,
    m = g + 12,
    n = g + 16,
    p,
    r,
    s,
    t,
    f = f & 1;
  l4a(a, l, g);
  l4a(d, m, j);
  for (d = a = 0; ; ) {
    if (3 <= (d | 0)) {
      h = 7;
      break;
    }
    k[n + a] = J((a << 2) + (e + 4), m) + k[e + a] - k[l + a];
    d = J((a << 2) + (e + 16), j) + k[g + a];
    if (sc(k[n + a]) > d) {
      i = 0;
      h = 22;
      break;
    }
    a = d = a + 1;
  }
  a: do {
    if (7 == h) {
      for (d = a = 0; 3 > (d | 0); ) {
        d = m4a(e + 4, n, a);
        p = m4a(e + 16, g, a) + k[j + a];
        if (sc(d) > p) {
          i = 0;
          break a;
        }
        a = d = a + 1;
      }
      a = f & 1;
      b: do {
        if (a) {
          d = a = 0;
          c: for (;;) {
            if (3 <= (d | 0)) {
              break b;
            }
            l = ((a + 1) | 0) % 3;
            m = ((a + 2) | 0) % 3;
            r = 0 == (a | 0) ? 1 : 0;
            s = 2 == (a | 0) ? 1 : 2;
            for (d = i = 0; 3 > (d | 0); ) {
              p = 2 == (i | 0) ? 1 : 2;
              t = 0 == (i | 0) ? 1 : 0;
              d =
                k[n + m] * k[(l << 2) + (e + 4) + i] -
                k[n + l] * k[(m << 2) + (e + 4) + i];
              p =
                k[g + r] * k[(s << 2) + (e + 16) + i] +
                k[g + s] * k[(r << 2) + (e + 16) + i] +
                k[j + t] * k[(a << 2) + (e + 16) + p] +
                k[j + p] * k[(a << 2) + (e + 16) + t];
              if (sc(d) > p) {
                break c;
              }
              i = d = i + 1;
            }
            a = d = a + 1;
          }
          i = 0;
          break a;
        }
      } while (0);
      i = 1;
    }
  } while (0);
  b = g;
  return i;
}
k4a.X = 1;
function n4a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
n4a.X = 1;
function l4a(a, d, e) {
  var f = b;
  b += 13;
  var g = f + 4,
    h = f + 8,
    i = f + 9;
  wn(g, a + 4, a);
  k[h] = 0.5;
  Q(f, g, h);
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  N(i, a + 4, d);
  c[e] = c[i];
  k[e] = k[i];
  c[e + 1] = c[i + 1];
  k[e + 1] = k[i + 1];
  c[e + 2] = c[i + 2];
  k[e + 2] = k[i + 2];
  c[e + 3] = c[i + 3];
  k[e + 3] = k[i + 3];
  b = f;
}
l4a.X = 1;
function m4a(a, d, e) {
  return (
    k[d] * k[0 + a + e] + k[d + 1] * k[4 + a + e] + k[d + 2] * k[8 + a + e]
  );
}
m4a.X = 1;
function R3a(a) {
  var d, e;
  d = 0;
  for (var f = a + 4, a = a + 16; ; ) {
    for (e = 0; ; ) {
      var g = sc(k[(d << 2) + f + e]) + 9.999999974752427e-7;
      k[(d << 2) + a + e] = g;
      e = g = e + 1;
      if (3 <= (g | 0)) {
        break;
      }
    }
    d = e = d + 1;
    if (3 <= (e | 0)) {
      break;
    }
  }
}
R3a.X = 1;
function o4a(a) {
  O3a(a, 0, n_(a));
  U3a(a);
  n4a(a);
}
o4a.X = 1;
function p4a(a, d, e, f) {
  aX(a, d, e, f);
  c[a] = r_ + 2;
  c[a + 3] = 0;
  c[a + 2] = 0;
}
p4a.X = 1;
function q4a(a) {
  r4a(a);
  xe(a);
}
q4a.X = 1;
function r4a(a) {
  c[a] = r_ + 2;
  s4a(a);
}
r4a.X = 1;
function s4a(a) {
  t4a(a);
  u4a(a);
  a += 6;
  c[a] = -1;
  k[a] = -1;
  c[a + 1] = -1;
  k[a + 1] = -1;
  c[a + 2] = -1;
  k[a + 2] = -1;
  c[a + 3] = -1;
  k[a + 3] = -1;
}
s4a.X = 1;
function s_(a, d, e, f, g, h) {
  var i = c[a + 4];
  v[c[c[i] + 2]](i, c[a + 7], c[a + 6]);
  i = c[a + 4];
  v[c[c[i] + 3]](i, c[a + 9], c[a + 8]);
  v4a(a, d, e);
  a = c[a + 4];
  v[c[c[a] + 4]](a, g, f, h);
}
s_.X = 1;
function v4a(a, d, e) {
  0 == (t_(a) | 0) && w4a(a, d, e);
  fI(c[a + 4], t_(a));
}
v4a.X = 1;
function x4a(a, d, e, f, g) {
  var h, i;
  h = bi(d);
  i = bi(e);
  hi(d, f);
  hi(e, g);
  f = y4a(a, d, e);
  g = c[a + 4];
  v[c[c[g] + 2]](g, c[a + 7], c[a + 6]);
  g = c[a + 4];
  v[c[c[g] + 3]](g, c[a + 9], c[a + 8]);
  v[c[c[f] + 2]](f, d, e, c[a + 5], c[a + 4]);
  v[c[c[f]]](f);
  a = c[a + 1];
  v[c[c[a] + 15]](a, f);
  hi(d, h);
  hi(e, i);
}
x4a.X = 1;
function y4a(a, d, e) {
  v4a(a, d, e);
  var f = c[a + 1];
  return v[c[c[f] + 2]](f, d, e, t_(a));
}
y4a.X = 1;
function z4a(a, d, e, f, g) {
  var h, i;
  h = bi(d);
  i = bi(e);
  hi(d, f);
  hi(e, g);
  f = c[a + 4];
  v[c[c[f] + 2]](f, c[a + 7], c[a + 6]);
  f = c[a + 4];
  v[c[c[f] + 3]](f, c[a + 9], c[a + 8]);
  A4a(a, d, e);
  f = c[a + 2];
  v[c[c[f] + 2]](f, d, e, c[a + 5], c[a + 4]);
  hi(d, h);
  hi(e, i);
}
z4a.X = 1;
function A4a(a, d, e) {
  0 == (c[a + 2] | 0) && (c[a + 2] = y4a(a, d, e));
}
A4a.X = 1;
function B4a(a, d, e, f, g, h) {
  var i = b;
  b += 16;
  var j = i + 8,
    l,
    m;
  $1 = a;
  u_(f)
    ? u_(g) ? (C4a(f + 17, d, g + 17, e, h), (a = 12)) : (a = 5)
    : (a = 5);
  a: do {
    if (5 == a) {
      l = f;
      var n = v[c[c[l] + 21]](l);
      l = n - 1;
      if (0 != (n | 0)) {
        for (var n = i, p = i + 4, r = j, s = j + 4; ; ) {
          m = f;
          v[c[c[m] + 29]](m, l, d, n, p);
          m = g;
          var t = v[c[c[m] + 21]](m);
          m = t - 1;
          t = 0 != (t | 0);
          b: do {
            if (t) {
              for (;;) {
                var w = g;
                v[c[c[w] + 29]](w, l, e, r, s);
                M3a(j, i) && c4a(h, l, m);
                w = m;
                m = w - 1;
                if (0 == (w | 0)) {
                  break b;
                }
              }
            }
          } while (0);
          m = l;
          l = m - 1;
          if (0 == (m | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = i;
}
B4a.X = 1;
function u_(a) {
  return 0 == (c[a + 17] | 0) ? 0 : 1;
}
u_.X = 1;
function D4a(a, d, e, f, g, h) {
  var i = b;
  b += 33;
  var j = i + 8,
    l = i + 24,
    m = i + 32;
  $1 = a;
  a = u_(f);
  a: do {
    if (a) {
      uw(j, d);
      E4a(j, e);
      var n = g;
      v[c[c[n] + 2]](n, j, i, i + 4);
      F4a(f + 17, i, h);
    } else {
      if (
        ((n = g),
        v[c[c[n] + 2]](n, e, i, i + 4),
        (n = f),
        (n = v[c[c[n] + 21]](n)),
        (c[m] = n - 1),
        0 != (n | 0))
      ) {
        for (var n = l, p = l + 4; ; ) {
          var r = f;
          v[c[c[r] + 29]](r, c[m], d, n, p);
          M3a(i, l) && p_(h, m);
          r = c[m];
          c[m] = r - 1;
          if (0 == (r | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = i;
}
D4a.X = 1;
function E4a(a, d) {
  var e = b;
  b += 4;
  Bo(e, a, d + 12);
  xn(a + 12, e);
  ld(a, d);
  b = e;
  return a;
}
E4a.X = 1;
function G4a(a) {
  EX(a);
}
G4a.X = 1;
function H4a(a, d, e, f, g, h, i) {
  var j = b;
  b += 138;
  var l = j + 16,
    m = j + 32,
    n = j + 50,
    p = j + 68,
    r;
  sQ(j, d + 1);
  sQ(l, e + 1);
  v_(m);
  v_(n);
  v[c[c[f] + 27]](f);
  v[c[c[g] + 27]](g);
  var s = i,
    i = s - 1,
    s = 0 != (s | 0);
  a: do {
    if (s) {
      for (
        var t = a + 6,
          w = a + 8,
          x = a + 6,
          y = a + 8,
          z = p + 1,
          A = p + 6,
          C = p + 2,
          B = p;
        ;

      ) {
        c[t] = c[h];
        c[w] = c[h + 1];
        h += 2;
        w_(f, c[x], m);
        w_(g, c[y], n);
        I4a(m, j);
        I4a(n, l);
        J4a(m);
        J4a(n);
        var K = K4a(m, n);
        b: do {
          if (K && L4a(m, n, p)) {
            var E = c[z];
            r = E - 1;
            if (0 != (E | 0)) {
              for (;;) {
                if (
                  (s_(a, d, e, (r << 2) + A, C, -k[B]),
                  (E = r),
                  (r = E - 1),
                  0 == (E | 0))
                ) {
                  break b;
                }
              }
            }
          }
        } while (0);
        r = i;
        i = r - 1;
        if (0 == (r | 0)) {
          break a;
        }
      }
    }
  } while (0);
  v[c[c[f] + 28]](f);
  v[c[c[g] + 28]](g);
  b = j;
}
H4a.X = 1;
function w_(a, d, e) {
  a = v[c[c[a] + 20]](a);
  v[c[c[a] + 5]](a, d, e);
}
w_.X = 1;
function I4a(a, d) {
  var e = b;
  b += 12;
  var f = e + 4,
    g = e + 8;
  vw(e, d, a);
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
  vw(f, d, a + 4);
  var h = a + 4;
  c[h] = c[f];
  k[h] = k[f];
  c[h + 1] = c[f + 1];
  k[h + 1] = k[f + 1];
  c[h + 2] = c[f + 2];
  k[h + 2] = k[f + 2];
  c[h + 3] = c[f + 3];
  k[h + 3] = k[f + 3];
  vw(g, d, a + 8);
  f = a + 8;
  c[f] = c[g];
  k[f] = k[g];
  c[f + 1] = c[g + 1];
  k[f + 1] = k[g + 1];
  c[f + 2] = c[g + 2];
  k[f + 2] = k[g + 2];
  c[f + 3] = c[g + 3];
  k[f + 3] = k[g + 3];
  b = e;
}
I4a.X = 1;
function J4a(a) {
  var d = b;
  b += 13;
  var e = d + 4,
    f = d + 8,
    g = d + 12;
  N(e, a + 4, a);
  N(f, a + 8, a);
  qn(d, e, f);
  IB(d);
  k[g] = J(a, d);
  $B(a + 12, d, d + 1, d + 2, g);
  b = d;
}
J4a.X = 1;
function M4a(a, d) {
  return (d << 1) + c[a + 3];
}
M4a.X = 1;
function x_(a) {
  return y_(a + 37);
}
x_.X = 1;
function z_(a, d) {
  return c[A_(a + 37, d)];
}
z_.X = 1;
function B_(a, d) {
  var e = c[a + 73];
  return v[c[c[e]]](e, d);
}
B_.X = 1;
function C_(a, d, e, f, g) {
  var h = b;
  b += 249;
  var i,
    j = h + 16,
    l = h + 32,
    m = h + 37,
    n = h + 111,
    p,
    r,
    s,
    t,
    w = h + 185,
    x = h + 201,
    y = h + 217,
    z = h + 233,
    A = 2 == (v[c[c[f] + 19]](f) | 0);
  a: do {
    if (A) {
      if (
        ((i = f),
        (c[a + 7] = x_(i)),
        (p = a + 7),
        (r = c[p]),
        (c[p] = r - 1),
        0 != (r | 0))
      ) {
        for (r = a + 7; ; ) {
          if (
            (C_(a, d, e, z_(i, c[r]), g),
            (s = c[p]),
            (c[p] = s - 1),
            0 == (s | 0))
          ) {
            break a;
          }
        }
      }
    } else {
      if (((i = g), 2 == (v[c[c[i] + 19]](i) | 0))) {
        if (
          ((i = g),
          (c[a + 9] = x_(i)),
          (p = a + 9),
          (r = c[p]),
          (c[p] = r - 1),
          0 != (r | 0))
        ) {
          for (r = a + 9; ; ) {
            if (
              (C_(a, d, e, f, z_(i, c[r])),
              (s = c[p]),
              (c[p] = s - 1),
              0 == (s | 0))
            ) {
              break a;
            }
          }
        }
      } else {
        sQ(h, d + 1);
        sQ(j, e + 1);
        N4a(l);
        B4a(a, h, j, f, g, l);
        i = 0 == (q_(l) | 0);
        b: do {
          if (i) {
            $8 = 1;
          } else {
            p = f;
            p = 1 == (v[c[c[p] + 19]](p) | 0);
            do {
              if (p && ((r = g), 1 == (v[c[c[r] + 19]](r) | 0))) {
                H4a(a, d, e, f, g, M4a(l, 0), q_(l));
                $8 = 1;
                break b;
              }
            } while (0);
            p = f;
            v[c[c[p] + 27]](p);
            p = g;
            v[c[c[p] + 27]](p);
            D_(m, f);
            D_(n, g);
            p = f;
            p = v[c[c[p] + 22]](p) & 1;
            r = g;
            r = v[c[c[r] + 22]](r) & 1;
            var C = l,
              B = a + 6,
              K = a + 8,
              E = a + 6,
              G = a + 8,
              M = a + 6,
              L = a + 8;
            for (t = q_(l); ; ) {
              s = t - 1;
              if (0 == (t | 0)) {
                break;
              }
              t = M4a(C, s);
              c[B] = c[t];
              c[K] = c[t + 1];
              t = B_(m, c[E]);
              if (p & 1) {
                var F = f;
                v[c[c[F] + 32]](x, F, c[M]);
                WW(w, h, x);
                Ji(d, w);
              }
              r & 1 &&
                ((F = g), v[c[c[F] + 32]](z, F, c[L]), WW(y, j, z), Ji(e, y));
              z4a(a, d, e, t, B_(n, c[G]));
              p & 1 && Ji(d, h);
              r & 1 && Ji(e, j);
              t = s;
            }
            p = f;
            v[c[c[p] + 28]](p);
            p = g;
            v[c[c[p] + 28]](p);
            E_(n);
            E_(m);
            $8 = 0;
          }
        } while (0);
        O4a(l);
      }
    }
  } while (0);
  b = h;
}
C_.X = 1;
function F_(a, d, e, f, g, h) {
  var i = b;
  b += 143;
  var j,
    l,
    m = i + 16,
    n = i + 32,
    p = i + 37,
    r,
    s,
    t = i + 111,
    w = i + 127,
    h = h & 1,
    x = 2 == (v[c[c[f] + 19]](f) | 0);
  a: do {
    if (x) {
      j = f;
      l = h & 1 ? a + 9 : a + 7;
      c[l] = x_(j);
      var y = l,
        z = c[y];
      c[y] = z - 1;
      if (0 != (z | 0)) {
        for (;;) {
          if (
            (F_(a, d, e, z_(j, c[l]), g, h & 1),
            (y = l),
            (z = c[y]),
            (c[y] = z - 1),
            0 == (z | 0))
          ) {
            break a;
          }
        }
      }
    } else {
      j = 1 == (v[c[c[f] + 19]](f) | 0);
      do {
        if (j && 28 == (Ie(g) | 0)) {
          P4a(a, d, e, f, g, h & 1);
          break a;
        }
      } while (0);
      j = g;
      if (Ge(g)) {
        Q4a(a, d, e, f, j, h & 1);
      } else {
        if (Uf(j)) {
          R4a(a, d, e, f, g, h & 1);
        } else {
          sQ(i, d + 1);
          sQ(m, e + 1);
          vW(n);
          D4a(a, i, m, f, g, n);
          if (0 == (rW(n) | 0)) {
            $9 = 1;
          } else {
            j = f;
            v[c[c[j] + 27]](j);
            D_(p, f);
            j = f;
            j = v[c[c[j] + 22]](j) & 1;
            y = a + 8;
            z = a + 6;
            for (r = rW(n); ; ) {
              l = r - 1;
              if (0 == (r | 0)) {
                break;
              }
              s = r = c[QV(n, l)];
              h & 1 ? (c[y] = s) : (c[z] = s);
              s = B_(p, r);
              if (j & 1) {
                var A = f;
                v[c[c[A] + 32]](w, A, r);
                WW(t, i, w);
                Ji(d, t);
              }
              h & 1 ? x4a(a, e, d, g, s) : x4a(a, d, e, s, g);
              j & 1 && Ji(d, i);
              r = l;
            }
            j = f;
            v[c[c[j] + 28]](j);
            E_(p);
            $9 = 0;
          }
          wW(n);
        }
      }
    }
  } while (0);
  b = i;
}
F_.X = 1;
function S4a() {
  return 1;
}
S4a.X = 1;
function T4a(a, d) {
  c[a + 7] = d;
}
T4a.X = 1;
function U4a(a, d) {
  c[a + 6] = d;
}
U4a.X = 1;
function V4a(a, d) {
  c[a + 9] = d;
}
V4a.X = 1;
function P4a(a, d, e, f, g, h) {
  var i = b;
  b += 56;
  var j = i + 16,
    l = i + 32,
    m = i + 36,
    n = i + 44,
    p = i + 48,
    r,
    s = i + 52,
    h = h & 1;
  sQ(i, d + 1);
  sQ(j, e + 1);
  W4a(g, j, l);
  v[c[c[f] + 2]](f, i, m, m + 4);
  X4a(m, v[c[c[g] + 11]](g));
  if (1 == (Y4a(m, l) | 0)) {
    v[c[c[f] + 27]](f);
    g = v[c[c[f] + 11]](f) + v[c[c[g] + 11]](g);
    m = Z4a(f);
    j = m - 1;
    m = 0 != (m | 0);
    a: do {
      if (m) {
        var t = n,
          w = p,
          x = l,
          y = l,
          z = l,
          A = l;
        for (r = f; ; ) {
          $4a(r, j, n);
          vw(p, i, n);
          c[t] = c[w];
          k[t] = k[w];
          c[t + 1] = c[w + 1];
          k[t + 1] = k[w + 1];
          c[t + 2] = c[w + 2];
          k[t + 2] = k[w + 2];
          c[t + 3] = c[w + 3];
          k[t + 3] = k[w + 3];
          r = J(n, x) - k[y + 3] - g;
          0 > r &&
            (h & 1 ? (WP(s, z), s_(a, e, d, n, s, r)) : s_(a, d, e, n, A, r));
          r = j;
          var j = r - 1,
            C = f;
          if (0 == (r | 0)) {
            var B = C;
            break a;
          }
          r = C;
        }
      } else {
        B = f;
      }
    } while (0);
    v[c[c[B] + 28]](B);
  }
  b = i;
}
P4a.X = 1;
function Q4a(a, d, e, f, g, h) {
  var i = b;
  b += 32;
  var j,
    l,
    m = i + 16,
    h = h & 1;
  sQ(i, e + 1);
  var n = el(g);
  j = n - 1;
  n = 0 != (n | 0);
  a: do {
    if (n) {
      for (;;) {
        if (
          ((l = Yk(g, j)),
          WW(m, i, al(g, j)),
          Ji(e, m),
          F_(a, d, e, f, l, h & 1),
          Ji(e, i),
          (l = j),
          (j = l - 1),
          0 == (l | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = i;
}
Q4a.X = 1;
function R4a(a, d, e, f, g, h) {
  var i = b;
  b += 63;
  var j = i + 7,
    l = i + 23,
    m = i + 39,
    n = i + 55,
    p = i + 59,
    h = h & 1;
  a5a(i);
  c[i + 1] = a;
  c[i + 2] = d;
  c[i + 3] = e;
  c[i + 4] = f;
  c[i + 5] = h & 1;
  k[i + 6] = v[c[c[g] + 11]](g);
  uw(m, e + 1);
  WW(l, m, d + 1);
  xi(j, l);
  v[c[c[f] + 2]](f, j, n, p);
  v[c[c[g] + 15]](g, i, n, p);
  b = i;
}
R4a.X = 1;
function W4a(a, d, e) {
  k[e] = J(0 + d, a + 12);
  k[e + 1] = J(4 + d, a + 12);
  k[e + 2] = J(8 + d, a + 12);
  k[e + 3] = J(d + 12, a + 12) + k[a + 16];
}
W4a.X = 1;
function X4a(a, d) {
  k[a] -= d;
  var e = a + 1;
  k[e] -= d;
  e = a + 2;
  k[e] -= d;
  e = a + 4;
  k[e] += d;
  e = a + 4 + 1;
  k[e] += d;
  e = a + 4 + 2;
  k[e] += d;
}
X4a.X = 1;
function Y4a(a, d) {
  var e = b;
  b += 2;
  var f = e + 1;
  b5a(a, d, e, f);
  f =
    k[d + 3] > k[f] + 9.999999974752427e-7
      ? 0
      : k[d + 3] + 9.999999974752427e-7 >= k[e] ? 1 : 2;
  b = e;
  return f;
}
Y4a.X = 1;
function Z4a(a) {
  return c5a(a + 36);
}
Z4a.X = 1;
function $4a(a, d, e) {
  G_(a + 36, d, e);
}
$4a.X = 1;
function d5a() {}
d5a.X = 1;
function e5a(a, d, e, f, g) {
  s4a(a);
  c[a + 4] = g;
  c[a + 5] = f;
  25 == (Ie(bi(d)) | 0)
    ? ((f = bi(d)),
      25 == (Ie(bi(e)) | 0)
        ? ((g = bi(e)), C_(a, d, e, f, g))
        : F_(a, d, e, f, bi(e), 0))
    : 25 == (Ie(bi(e)) | 0) && ((g = bi(e)), F_(a, e, d, g, bi(d), 1));
}
e5a.X = 1;
function f5a() {}
f5a.X = 1;
function g5a(a, d) {
  0 != (c[a + 3] | 0) && CX(d, a + 3);
}
g5a.X = 1;
function h5a(a) {
  xe(a);
}
h5a.X = 1;
function i5a(a, d, e, f) {
  $1 = a;
  a = c[d];
  a = v[c[c[a] + 14]](a, 40);
  0 == (a | 0) ? (d = 0) : (p4a(a, d, e, f), (d = a));
  return d;
}
i5a.X = 1;
function a5a(a) {
  EY(a);
  c[a] = j5a + 2;
}
a5a.X = 1;
function k5a(a) {
  xe(a);
}
k5a.X = 1;
function l5a(a, d, e, f) {
  var g = b;
  b += 26;
  m5a(g, d, d + 4, d + 8);
  v[c[c[g] + 10]](g, k[a + 6]);
  d = c[a + 1];
  c[a + 5] & 1 ? (T4a(d, e), U4a(c[a + 1], f)) : (V4a(d, e), n5a(c[a + 1], f));
  F_(c[a + 1], c[a + 2], c[a + 3], c[a + 4], g, c[a + 5] & 1);
  EX(g);
  b = g;
}
l5a.X = 1;
function n5a(a, d) {
  c[a + 8] = d;
}
n5a.X = 1;
function c5a(a) {
  return c[a + 10];
}
c5a.X = 1;
function o5a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
o5a.X = 1;
function m5a(a, d, e, f) {
  sZ(a, d, e, f);
  c[a] = H_ + 2;
}
m5a.X = 1;
function p5a(a, d, e, f) {
  var g = b;
  b += 20;
  var h = g + 4,
    i = g + 8,
    j = g + 12;
  vw(g, d, a + 14);
  vw(h, d, a + 18);
  vw(i, d, a + 22);
  q5a(j, g, h, i, k[a + 11]);
  c[e] = c[j];
  k[e] = k[j];
  c[e + 1] = c[j + 1];
  k[e + 1] = k[j + 1];
  c[e + 2] = c[j + 2];
  k[e + 2] = k[j + 2];
  c[e + 3] = c[j + 3];
  k[e + 3] = k[j + 3];
  a = j + 4;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  b = g;
}
p5a.X = 1;
function q5a(a, d, e, f, g) {
  k[a] =
    k[d] > (k[e] > k[f] ? k[f] : k[e]) ? (k[e] > k[f] ? k[f] : k[e]) : k[d];
  k[a + 1] =
    k[d + 1] > (k[e + 1] > k[f + 1] ? k[f + 1] : k[e + 1])
      ? k[e + 1] > k[f + 1] ? k[f + 1] : k[e + 1]
      : k[d + 1];
  k[a + 2] =
    k[d + 2] > (k[e + 2] > k[f + 2] ? k[f + 2] : k[e + 2])
      ? k[e + 2] > k[f + 2] ? k[f + 2] : k[e + 2]
      : k[d + 2];
  k[a + 4] =
    k[d] < (k[e] < k[f] ? k[f] : k[e]) ? (k[e] < k[f] ? k[f] : k[e]) : k[d];
  k[a + 4 + 1] =
    k[d + 1] < (k[e + 1] < k[f + 1] ? k[f + 1] : k[e + 1])
      ? k[e + 1] < k[f + 1] ? k[f + 1] : k[e + 1]
      : k[d + 1];
  k[a + 4 + 2] =
    k[d + 2] < (k[e + 2] < k[f + 2] ? k[f + 2] : k[e + 2])
      ? k[e + 2] < k[f + 2] ? k[f + 2] : k[e + 2]
      : k[d + 2];
  k[a] -= g;
  d = a + 1;
  k[d] -= g;
  d = a + 2;
  k[d] -= g;
  d = a + 4;
  k[d] += g;
  d = a + 4 + 1;
  k[d] += g;
  a = a + 4 + 2;
  k[a] += g;
}
q5a.X = 1;
function G_(a, d, e) {
  d = c[a + 9] + c[a + 12] * d;
  k[e] = k[d] * k[a + 3];
  k[e + 1] = k[d + 1] * k[a + 3 + 1];
  k[e + 2] = k[d + 2] * k[a + 3 + 2];
}
G_.X = 1;
function b5a(a, d, e, f) {
  var g = b;
  b += 17;
  var h = g + 4,
    i = g + 8,
    j = g + 9,
    l = g + 13;
  wn(h, a + 4, a);
  k[i] = 0.5;
  Q(g, h, i);
  N(j, a + 4, g);
  a = J(d, g);
  GB(l, d);
  d = J(j, l);
  k[e] = a - d;
  k[f] = a + d;
  b = g;
}
b5a.X = 1;
function O4a(a) {
  Z3a(a, 0, q_(a));
  h4a(a);
  o5a(a);
}
O4a.X = 1;
function r5a() {}
r5a.X = 1;
function s5a() {}
s5a.X = 1;
function t5a() {}
t5a.X = 1;
function u5a(a) {
  EX(a);
}
u5a.X = 1;
function v5a(a) {
  EX(a);
  yh(a);
}
v5a.X = 1;
function E_(a) {
  EX(a + 27);
  EX(a + 1);
}
E_.X = 1;
function w5a() {
  return D.ue;
}
w5a.X = 1;
function I_(a) {
  c[a] = x5a + 2;
}
I_.X = 1;
function A_(a, d) {
  return c[a + 3] + d;
}
A_.X = 1;
function y_(a) {
  return c[a + 1];
}
y_.X = 1;
function t_(a) {
  return c[a + 3];
}
t_.X = 1;
function y5a(a) {
  I_(a);
  c[a] = z5a + 2;
}
y5a.X = 1;
function A5a(a, d) {
  var e = c[c[a + 1]];
  v[c[c[e] + 26]](e, d, c[a + 1] + 27);
  return c[a + 1] + 27;
}
A5a.X = 1;
function B5a(a) {
  xe(a);
}
B5a.X = 1;
function C5a(a, d) {
  var e = c[c[a + 1]];
  return v[c[c[e] + 30]](e, d);
}
C5a.X = 1;
function D5a(a) {
  xe(a);
}
D5a.X = 1;
function E5a(a) {
  I_(a);
  c[a] = F5a + 2;
}
E5a.X = 1;
function G5a(a, d) {
  var e = c[c[a + 1]];
  v[c[c[e] + 25]](e, d, c[a + 1] + 1);
  return c[a + 1] + 1;
}
G5a.X = 1;
function H5a(a) {
  xe(a);
}
H5a.X = 1;
function I5a(a) {
  J5a(a);
  c[a] = K5a + 2;
  c[a + 23] = 4;
}
I5a.X = 1;
function v_(a) {
  k[a + 16] = 0.009999999776482582;
}
v_.X = 1;
function L5a(a) {
  var d = b;
  b += 21;
  var e = d + 4,
    f = d + 5,
    g = d + 6,
    h = d + 7,
    i = d + 11,
    j = d + 12,
    l = d + 13,
    m = d + 14,
    n = d + 18,
    p = d + 19,
    r = d + 20;
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  H(d, e, f, g);
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(h, i, j, l);
  k[n] = 0;
  k[p] = 0;
  k[r] = 0;
  H(m, n, p, r);
  sZ(a, d, h, m);
  c[a] = H_ + 2;
  b = d;
}
L5a.X = 1;
function w4a(a, d, e) {
  var f = c[a + 1];
  c[a + 3] = v[c[c[f] + 3]](f, d, e);
  return c[a + 3];
}
w4a.X = 1;
function t4a(a) {
  if (0 != (c[a + 3] | 0)) {
    var d = c[a + 1];
    v[c[c[d] + 4]](d, c[a + 3]);
    c[a + 3] = 0;
  }
}
t4a.X = 1;
function u4a(a) {
  if (0 != (c[a + 2] | 0)) {
    var d = c[a + 2];
    v[c[c[d]]](d);
    d = c[a + 1];
    v[c[c[d] + 15]](d, c[a + 2]);
    c[a + 2] = 0;
  }
}
u4a.X = 1;
function M5a(a, d, e) {
  var f = b;
  b += 8;
  var g;
  m_(f);
  g = 0;
  var h = (g | 0) < (n_(d) | 0);
  a: do {
    if (h) {
      for (;;) {
        if ((o_(f, k_(d, g)), (g += 1), (g | 0) >= (n_(d) | 0))) {
          break a;
        }
      }
    }
  } while (0);
  N5a(a + 6, a + 10, a + 14, f, f + 4, e);
  b = f;
}
M5a.X = 1;
function N5a(a, d, e, f, g, h) {
  var i = b;
  b += 28;
  var j = i + 1,
    l = i + 5,
    m = i + 9,
    n = i + 13,
    p = i + 17,
    r = i + 21,
    s = i + 25,
    t = i + 26,
    w = i + 27;
  k[i] = h;
  H(j, i, i, i);
  N(l, f, j);
  c[a] = c[l];
  k[a] = k[l];
  c[a + 1] = c[l + 1];
  k[a + 1] = k[l + 1];
  c[a + 2] = c[l + 2];
  k[a + 2] = k[l + 2];
  c[a + 3] = c[l + 3];
  k[a + 3] = k[l + 3];
  wn(m, g, j);
  c[d] = c[m];
  k[d] = k[m];
  c[d + 1] = c[m + 1];
  k[d + 1] = k[m + 1];
  c[d + 2] = c[m + 2];
  k[d + 2] = k[m + 2];
  c[d + 3] = c[m + 3];
  k[d + 3] = k[m + 3];
  N(n, d, a);
  k[s] = 65535;
  k[t] = 65535;
  k[w] = 65535;
  H(r, s, t, w);
  eX(p, r, n);
  c[e] = c[p];
  k[e] = k[p];
  c[e + 1] = c[p + 1];
  k[e + 1] = k[p + 1];
  c[e + 2] = c[p + 2];
  k[e + 2] = k[p + 2];
  c[e + 3] = c[p + 3];
  k[e + 3] = k[p + 3];
  b = i;
}
N5a.X = 1;
function O5a(a, d, e, f) {
  var g = b;
  b += 42;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13,
    r = g + 14,
    s = g + 18,
    t = g + 19,
    w = g + 23,
    x = g + 24,
    y = g + 28,
    z = g + 29,
    A = g + 33,
    C = g + 37,
    B = g + 41;
  $1 = a;
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  h = f - e;
  a = e;
  i = (a | 0) < (f | 0);
  a: do {
    if (i) {
      for (;;) {
        if (
          ((k[s] = 0.5),
          wn(t, k_(d, a) + 4, k_(d, a)),
          Q(r, t, s),
          xn(g, r),
          (a += 1),
          (a | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[w] = 1 / (h | 0);
  LC(g, w);
  a = e;
  e = (a | 0) < (f | 0);
  a: do {
    if (e) {
      r = A;
      for (s = C; ; ) {
        if (
          ((k[y] = 0.5),
          wn(z, k_(d, a) + 4, k_(d, a)),
          Q(x, z, y),
          N(A, x, g),
          ig(C, A, A),
          (c[r] = c[s]),
          (k[r] = k[s]),
          (c[r + 1] = c[s + 1]),
          (k[r + 1] = k[s + 1]),
          (c[r + 2] = c[s + 2]),
          (k[r + 2] = k[s + 2]),
          (c[r + 3] = c[s + 3]),
          (k[r + 3] = k[s + 3]),
          xn(l, A),
          (a += 1),
          (a | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[B] = 1 / ((h | 0) - 1);
  LC(l, B);
  d = fC(l);
  b = g;
  return d;
}
O5a.X = 1;
function D_(a, d) {
  L5a(a + 1);
  I5a(a + 27);
  I_(a + 67);
  E5a(a + 69);
  y5a(a + 71);
  c[a] = d;
  var e = c[a];
  v[c[c[e] + 23]](e)
    ? (c[a + 73] = a + 69)
    : ((e = c[a]), (c[a + 73] = v[c[c[e] + 24]](e) ? a + 71 : a + 67));
  c[c[a + 73] + 1] = a;
}
D_.X = 1;
function P5a(a) {
  EX(a);
  yh(a);
}
P5a.X = 1;
function N4a(a) {
  o5a(a);
  e4a(a, 32);
}
N4a.X = 1;
function J_(a, d) {
  return c[a + 3] + 7 * d;
}
J_.X = 1;
function Q5a(a, d) {
  c[a + 6] = d;
}
Q5a.X = 1;
function R5a(a, d) {
  c[a + 6] = -d;
}
R5a.X = 1;
function S5a(a, d, e, f, g) {
  var h = b;
  b += 26;
  var i, j, l;
  i = h + 4;
  var m = h + 5,
    n = h + 6;
  l = h + 7;
  var p = h + 11,
    r = h + 12,
    s = h + 16,
    t = h + 17,
    w = h + 21,
    x = h + 22;
  $1 = a;
  a = e;
  j = f - e;
  k[i] = 0;
  k[m] = 0;
  k[n] = 0;
  H(h, i, m, n);
  i = e;
  m = (i | 0) < (f | 0);
  a: do {
    if (m) {
      for (;;) {
        if (
          ((k[p] = 0.5),
          wn(r, k_(d, i) + 4, k_(d, i)),
          Q(l, r, p),
          xn(h, l),
          (i += 1),
          (i | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[s] = 1 / (j | 0);
  LC(h, s);
  l = k[h + g];
  i = e;
  p = (i | 0) < (f | 0);
  a: do {
    if (p) {
      for (;;) {
        if (
          ((k[w] = 0.5),
          wn(x, k_(d, i) + 4, k_(d, i)),
          Q(t, x, w),
          k[t + g] > l && (J3a(d, i, a), (a += 1)),
          (i += 1),
          (i | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  d = ((j | 0) / 3) & -1;
  ((a | 0) <= ((d + e) | 0) ? 1 : (a | 0) >= ((f - 1 + -d) | 0)) & 1 &&
    (a = (j >> 1) + e);
  b = h;
  return a;
}
S5a.X = 1;
function K_(a, d, e, f) {
  var g = b;
  b += 8;
  var h, i, j;
  h = c[a];
  c[a] += 1;
  if (1 == ((f - e) | 0)) {
    L_(a, h, k_(d, e)), Q5a(J_(a + 1, h), c[k_(d, e) + 8]);
  } else {
    i = O5a(a, d, e, f);
    i = S5a(a, d, e, f, i);
    m_(g);
    j = e;
    var l = (j | 0) < (f | 0);
    a: do {
      if (l) {
        for (;;) {
          if ((o_(g, k_(d, j)), (j += 1), (j | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } while (0);
    L_(a, h, g);
    K_(a, d, e, i);
    K_(a, d, i, f);
    R5a(J_(a + 1, h), c[a] - h);
  }
  b = g;
}
K_.X = 1;
function L_(a, d, e) {
  M_(J_(a + 1, d), e, a + 6, a + 10, a + 14);
  M_(J_(a + 1, d) + 3, e + 4, a + 6, a + 10, a + 14);
}
L_.X = 1;
function T5a(a, d) {
  var e = b;
  b += 7;
  M5a(a, d, 1);
  c[a] = 0;
  var f = n_(d) << 1;
  U5a(e);
  V5a(a + 1, f, e);
  K_(a, d, 0, n_(d));
  b = e;
}
T5a.X = 1;
function V5a(a, d, e) {
  var f, g;
  f = N_(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (N_(a) | 0) && W5a(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + 7 * g;
          if (0 != (j | 0)) {
            var l = e;
            c[j] = c[l];
            k[j] = k[l];
            c[j + 1] = c[l + 1];
            k[j + 1] = k[l + 1];
            c[j + 2] = c[l + 2];
            k[j + 2] = k[l + 2];
            c[j + 3] = c[l + 3];
            k[j + 3] = k[l + 3];
            c[j + 4] = c[l + 4];
            k[j + 4] = k[l + 4];
            c[j + 5] = c[l + 5];
            k[j + 5] = k[l + 5];
            c[j + 6] = c[l + 6];
            k[j + 6] = k[l + 6];
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
V5a.X = 1;
function X5a(a) {
  var d = b;
  b += 24;
  var e,
    f = d + 8,
    g = d + 16,
    h,
    i = c[a];
  e = i - 1;
  i = 0 != (i | 0);
  a: do {
    if (i) {
      for (var j = a + 18; ; ) {
        if (O_(a, e)) {
          (h = c[j]), v[c[c[h] + 4]](h, P_(a, e), d), L_(a, e, d);
        } else {
          m_(f);
          h = e + 1;
          0 != (h | 0) && (Q_(a, h, g), o_(f, g));
          var l = R_(a, e);
          h = l;
          0 != (l | 0) && (Q_(a, h, g), o_(f, g));
          L_(a, e, f);
        }
        h = e;
        e = h - 1;
        if (0 == (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = d;
}
X5a.X = 1;
function F4a(a, d, e) {
  var f = b;
  b += 7;
  var g,
    h,
    i,
    j = f + 3,
    l,
    m = f + 6;
  h = 0;
  i = c[a];
  Y5a(a, f, d);
  Y5a(a, j, d + 4);
  d = (h | 0) < (i | 0);
  a: do {
    if (d) {
      for (var n = a, p = f, r = j; ; ) {
        if (
          ((g = Z5a(n, h, p, r) & 1),
          (l = O_(a, h) & 1),
          l & 1 && g & 1 && ((c[m] = P_(a, h)), p_(e, m)),
          g & 1 ? (g = 9) : l & 1 ? (g = 9) : ((h += $5a(a, h)), (g = 11)),
          9 == g && (h += 1),
          (h | 0) >= (i | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  a = 0 < (rW(e) | 0) ? 1 : 0;
  b = f;
  return a;
}
F4a.X = 1;
function Y5a(a, d, e) {
  M_(d, e, a + 6, a + 10, a + 14);
}
Y5a.X = 1;
function Z5a(a, d, e, f) {
  return a6a(S_(a + 1, d), e, f);
}
Z5a.X = 1;
function b6a(a) {
  var d = b;
  b += 14;
  var e = d + 5;
  n4a(d);
  for (var f = c[a + 18], f = v[c[c[f] + 3]](f), g = e, h = g + 9; g < h; g++) {
    (c[g] = 0), (k[g] = 0);
  }
  K3a(d, f, e);
  e = 0;
  for (f = a + 18; (e | 0) < (n_(d) | 0); ) {
    (g = c[f]), v[c[c[g] + 4]](g, e, k_(d, e)), (c[k_(d, e) + 8] = e), (e += 1);
  }
  T5a(a, d);
  o4a(d);
  b = d;
}
b6a.X = 1;
function c6a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
c6a.X = 1;
function N_(a) {
  return c[a + 1];
}
N_.X = 1;
function d6a(a) {
  return c[a + 2];
}
d6a.X = 1;
function S_(a, d) {
  return c[a + 3] + 7 * d;
}
S_.X = 1;
function e6a(a) {
  return -c[a + 6];
}
e6a.X = 1;
function a6a(a, d, e) {
  var f;
  ((c[a] & 65535) | 0) > ((c[e] & 65535) | 0)
    ? (a = 8)
    : ((c[a + 3] & 65535) | 0) < ((c[d] & 65535) | 0)
      ? (a = 8)
      : ((c[a + 1] & 65535) | 0) > ((c[e + 1] & 65535) | 0)
        ? (a = 8)
        : ((c[a + 4] & 65535) | 0) < ((c[d + 1] & 65535) | 0)
          ? (a = 8)
          : ((c[a + 2] & 65535) | 0) > ((c[e + 2] & 65535) | 0)
            ? (a = 8)
            : ((c[a + 5] & 65535) | 0) < ((c[d + 2] & 65535) | 0)
              ? (a = 8)
              : ((f = 1), (a = 10));
  8 == a && (f = 0);
  return f;
}
a6a.X = 1;
function f6a(a) {
  return 0 <= (c[a + 6] | 0);
}
f6a.X = 1;
function g6a(a) {
  return c[a + 6];
}
g6a.X = 1;
function U5a(a) {
  c[a + 6] = 0;
}
U5a.X = 1;
function C4a(a, d, e, f, g) {
  var h = b;
  b += 28;
  0 != (c[a] | 0) && 0 != (c[e] | 0) && (Q3a(h, d, f), T_(a, e, g, h, 0, 0, 1));
  b = h;
}
C4a.X = 1;
function T_(a, d, e, f, g, h, i) {
  if (0 != ((h6a(a, d, f, g, h, i & 1) & 1) | 0)) {
    if (((i = O_(d, h)), O_(a, g))) {
      i
        ? c4a(e, P_(a, g), P_(d, h))
        : (T_(a, d, e, f, g, h + 1, 0), T_(a, d, e, f, g, R_(d, h), 0));
    } else {
      var j = g + 1;
      i
        ? (T_(a, d, e, f, j, h, 0), T_(a, d, e, f, R_(a, g), h, 0))
        : (T_(a, d, e, f, j, h + 1, 0),
          T_(a, d, e, f, g + 1, R_(d, h), 0),
          T_(a, d, e, f, R_(a, g), h + 1, 0),
          T_(a, d, e, f, R_(a, g), R_(d, h), 0));
    }
  }
}
T_.X = 1;
function W5a(a, d) {
  var e;
  (d6a(a) | 0) < (d | 0) &&
    ((e = i6a(a, d)),
    j6a(a, 0, N_(a), e),
    c6a(a, 0, N_(a)),
    k6a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
W5a.X = 1;
function i6a(a, d) {
  return 0 != (d | 0) ? l6a(a, d, 0) : 0;
}
i6a.X = 1;
function j6a(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + 7 * d;
        if (0 != (i | 0)) {
          var j = c[h] + 7 * d;
          c[i] = c[j];
          k[i] = k[j];
          c[i + 1] = c[j + 1];
          k[i + 1] = k[j + 1];
          c[i + 2] = c[j + 2];
          k[i + 2] = k[j + 2];
          c[i + 3] = c[j + 3];
          k[i + 3] = k[j + 3];
          c[i + 4] = c[j + 4];
          k[i + 4] = k[j + 4];
          c[i + 5] = c[j + 5];
          k[i + 5] = k[j + 5];
          c[i + 6] = c[j + 6];
          k[i + 6] = k[j + 6];
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
j6a.X = 1;
function k6a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && m6a(a, c[a + 3]), (c[a + 3] = 0));
}
k6a.X = 1;
function m6a(a, d) {
  $1 = a;
  yh(d);
}
m6a.X = 1;
function l6a(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 4, 16);
}
l6a.X = 1;
function h6a(a, d, e, f, g, h) {
  var i = b;
  b += 16;
  var j = i + 8,
    h = h & 1;
  Q_(a, f, i);
  Q_(d, g, j);
  a = k4a(i, j, e, h & 1);
  b = i;
  return a;
}
h6a.X = 1;
function $5a(a, d) {
  return e6a(S_(a + 1, d));
}
$5a.X = 1;
function M_(a, d, e, f, g) {
  var h = b;
  b += 12;
  var i = h + 4,
    j = h + 8;
  c[h] = c[d];
  k[h] = k[d];
  c[h + 1] = c[d + 1];
  k[h + 1] = k[d + 1];
  c[h + 2] = c[d + 2];
  k[h + 2] = k[d + 2];
  c[h + 3] = c[d + 3];
  k[h + 3] = k[d + 3];
  gp(h, e);
  hp(h, f);
  N(j, h, e);
  ig(i, j, g);
  c[a] = Math.floor(k[i] + 0.5);
  c[a + 1] = Math.floor(k[i + 1] + 0.5);
  c[a + 2] = Math.floor(k[i + 2] + 0.5);
  b = h;
}
M_.X = 1;
function R_(a, d) {
  return f6a(S_(a + 1, d + 1)) ? d + 2 : d + e6a(S_(a + 1, d + 1)) + 1;
}
R_.X = 1;
function Q_(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4;
  n6a(f, S_(a + 1, d), a + 6, a + 14);
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  n6a(g, S_(a + 1, d) + 3, a + 6, a + 14);
  a = e + 4;
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  b = f;
}
Q_.X = 1;
function n6a(a, d, e, f) {
  var g = b;
  b += 3;
  var h = g + 1,
    i = g + 2;
  k[g] = (c[d] & 65535) / k[f];
  k[h] = (c[d + 1] & 65535) / k[f + 1];
  k[i] = (c[d + 2] & 65535) / k[f + 2];
  pe(a, g, h, i);
  xn(a, e);
  b = g;
}
n6a.X = 1;
function P_(a, d) {
  return g6a(S_(a + 1, d));
}
P_.X = 1;
function O_(a, d) {
  return f6a(S_(a + 1, d));
}
O_.X = 1;
function o6a() {}
o6a.X = 1;
function p6a() {
  return D.Ke;
}
p6a.X = 1;
function q6a() {}
q6a.X = 1;
function r6a() {
  return 25;
}
r6a.X = 1;
function s6a() {
  return 0;
}
s6a.X = 1;
function U_(a, d) {
  return c[a + 3] + d;
}
U_.X = 1;
function V_(a, d) {
  return (d << 4) + c[a + 3];
}
V_.X = 1;
function t6a(a) {
  return c[a + 43];
}
t6a.X = 1;
function u6a(a, d) {
  return c[a + 3] + d;
}
u6a.X = 1;
function v6a(a) {
  return a + 13;
}
v6a.X = 1;
function w6a(a) {
  c[a + 12] = 1;
}
w6a.X = 1;
function x6a(a) {
  return a + 36;
}
x6a.X = 1;
function y6a(a, d, e) {
  var f = b;
  b += 15;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 7,
    l = f + 11;
  v[c[c[a] + 27]](a);
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  h = g = v[c[c[a] + 21]](a);
  d /= h | 0;
  g = h - 1;
  h = 0 != (h | 0);
  a: do {
    if (h) {
      for (var m = a + 43, n = a, p = a + 38, r = j, s = l; ; ) {
        var t = c[U_(m, g)];
        v[c[c[t] + 8]](t, d, i);
        var w = (t = e);
        v[c[c[n] + 22]](a)
          ? (z6a(j, w, i, V_(p, g)),
            (c[t] = c[r]),
            (k[t] = k[r]),
            (c[t + 1] = c[r + 1]),
            (k[t + 1] = k[r + 1]),
            (c[t + 2] = c[r + 2]),
            (k[t + 2] = k[r + 2]),
            (c[t + 3] = c[r + 3]),
            (k[t + 3] = k[r + 3]))
          : (Pz(),
            z6a(l, w, i, Rz),
            (c[t] = c[s]),
            (k[t] = k[s]),
            (c[t + 1] = c[s + 1]),
            (k[t + 1] = k[s + 1]),
            (c[t + 2] = c[s + 2]),
            (k[t + 2] = k[s + 2]),
            (c[t + 3] = c[s + 3]),
            (k[t + 3] = k[s + 3]));
        t = g;
        g = t - 1;
        if (0 == (t | 0)) {
          break a;
        }
      }
    }
  } while (0);
  v[c[c[a] + 28]](a);
  b = f;
}
y6a.X = 1;
function z6a(a, d, e, f) {
  var g = b;
  b += 39;
  var h = g + 12,
    i = g + 24,
    j = g + 36,
    l = g + 37,
    m = g + 38;
  Vb(h, f, e);
  ue(i, f);
  ww(g, h, i);
  e = k[f + 12];
  e *= e;
  h = k[f + 12 + 1];
  h *= h;
  i = k[f + 12 + 2];
  i *= i;
  f = k[0 + g] * (h + i);
  i = k[4 + g + 1] * (e + i);
  e = k[8 + g + 2] * (e + h);
  k[j] = k[d] + f;
  k[l] = k[d + 1] + i;
  k[m] = k[d + 2] + e;
  H(a, j, l, m);
  b = g;
}
z6a.X = 1;
function A6a(a, d, e) {
  var f = b;
  b += 11;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 7;
  v[c[c[a] + 27]](a);
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  h = g = Z4a(a);
  d /= h | 0;
  g = h - 1;
  h = 0 != (h | 0);
  a: do {
    if (h) {
      for (var l = i, m = j; ; ) {
        $4a(a, g, i);
        B6a(j, i, d);
        c[l] = c[m];
        k[l] = k[m];
        c[l + 1] = c[m + 1];
        k[l + 1] = k[m + 1];
        c[l + 2] = c[m + 2];
        k[l + 2] = k[m + 2];
        c[l + 3] = c[m + 3];
        k[l + 3] = k[m + 3];
        xn(e, i);
        var n = g,
          g = n - 1;
        if (0 == (n | 0)) {
          break a;
        }
      }
    }
  } while (0);
  v[c[c[a] + 28]](a);
  b = f;
}
A6a.X = 1;
function B6a(a, d, e) {
  var f = b;
  b += 3;
  var g,
    h,
    i = f + 1,
    j = f + 2;
  g = k[d] * k[d];
  h = k[d + 1] * k[d + 1];
  d = k[d + 2] * k[d + 2];
  k[f] = e * (h + d);
  k[i] = e * (g + d);
  k[j] = e * (g + h);
  H(a, f, i, j);
  b = f;
}
B6a.X = 1;
function C6a(a, d, e) {
  var f = b;
  b += 7;
  var g = f + 1,
    h = f + 2,
    i = f + 3;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  h = g = x_(a);
  d /= h | 0;
  g = h - 1;
  h = 0 != (h | 0);
  a: do {
    if (h) {
      for (;;) {
        var j = D6a(a, g);
        v[c[c[j] + 8]](j, d, i);
        xn(e, i);
        j = g;
        g = j - 1;
        if (0 == (j | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
C6a.X = 1;
function D6a(a, d) {
  return c[u6a(a + 37, d)];
}
D6a.X = 1;
function E6a(a, d, e, f) {
  var g,
    h = y_(a + 37);
  g = h - 1;
  h = 0 != (h | 0);
  a: do {
    if (h) {
      for (var i = a + 37; ; ) {
        var j = c[u6a(i, g)];
        v[c[c[j] + 15]](j, d, e, f);
        j = g;
        g = j - 1;
        if (0 == (j | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
E6a.X = 1;
function F6a(a, d, e) {
  HX(a, d, e);
  var f = c[a + 36];
  v[c[c[f] + 14]](f, d + 6, e);
  k[d + 20] = k[a + 3];
  mc(a + 13, d + 16);
  c[d + 21] = v[c[c[a] + 19]](a);
  return D.we;
}
F6a.X = 1;
function G6a(a) {
  H6a(a);
}
G6a.X = 1;
function I6a(a) {
  H6a(a);
  xe(a);
}
I6a.X = 1;
function J6a(a, d, e, f) {
  var g = b;
  b += 8;
  V3a(g, a + 4);
  K6a(g, d);
  c[e] = c[g];
  k[e] = k[g];
  c[e + 1] = c[g + 1];
  k[e + 1] = k[g + 1];
  c[e + 2] = c[g + 2];
  k[e + 2] = k[g + 2];
  c[e + 3] = c[g + 3];
  k[e + 3] = k[g + 3];
  a = g + 4;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  b = g;
}
J6a.X = 1;
function L6a(a, d) {
  var e = a + 13;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  v[c[c[a] + 17]](a);
}
L6a.X = 1;
function M6a(a, d) {
  var e;
  k[a + 3] = d;
  var f = v[c[c[a] + 21]](a);
  e = f - 1;
  f = 0 != (f | 0);
  a: do {
    if (f) {
      for (var g = a; ; ) {
        var h = v[c[c[g] + 30]](a, e);
        v[c[c[h] + 10]](h, d);
        h = e;
        e = h - 1;
        if (0 == (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 12] = 1;
}
M6a.X = 1;
function N6a(a) {
  var d = b;
  b += 8;
  v[c[c[a] + 27]](a);
  var e = a + 17;
  0 == (c[a + 17] | 0) ? b6a(e) : X5a(e);
  v[c[c[a] + 28]](a);
  O6a(d, a + 17);
  a += 4;
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  c[a + 4] = c[d + 4];
  k[a + 4] = k[d + 4];
  c[a + 5] = c[d + 5];
  k[a + 5] = k[d + 5];
  c[a + 6] = c[d + 6];
  k[a + 6] = k[d + 6];
  c[a + 7] = c[d + 7];
  k[a + 7] = k[d + 7];
  b = d;
}
N6a.X = 1;
function P6a(a) {
  return CY(a + 43);
}
P6a.X = 1;
function Q6a(a) {
  return 0 == (R6a(a + 38) | 0) ? 0 : 1;
}
Q6a.X = 1;
function S6a(a, d, e, f) {
  var g = b;
  b += 31;
  var h = g + 8,
    i = g + 13;
  v[c[c[a] + 27]](a);
  c[g] = c[e];
  k[g] = k[e];
  c[g + 1] = c[e + 1];
  k[g + 1] = k[e + 1];
  c[g + 2] = c[e + 2];
  k[g + 2] = k[e + 2];
  c[g + 3] = c[e + 3];
  k[g + 3] = k[e + 3];
  e = g + 4;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  vW(h);
  F4a(a + 17, g, h);
  if (0 == (rW(h) | 0)) {
    v[c[c[a] + 28]](a), ($7 = 1);
  } else {
    f = t6a(a);
    v_(i);
    for (var j = rW(h); ; ) {
      e = j - 1;
      if (0 == (j | 0)) {
        break;
      }
      w_(a, c[QV(h, e)], i);
      j = d;
      v[c[c[j] + 2]](j, i, f, c[QV(h, e)]);
      j = e;
    }
    v[c[c[a] + 28]](a);
    $7 = 0;
  }
  wW(h);
  b = g;
}
S6a.X = 1;
function T6a() {
  return 0;
}
T6a.X = 1;
function U6a() {
  return 0;
}
U6a.X = 1;
function V6a() {}
V6a.X = 1;
function W6a() {}
W6a.X = 1;
function X6a() {}
X6a.X = 1;
function Y6a() {}
Y6a.X = 1;
function Z6a() {}
Z6a.X = 1;
function $6a() {
  return D.ve;
}
$6a.X = 1;
function a7a() {
  return 1;
}
a7a.X = 1;
function b7a() {
  return 0;
}
b7a.X = 1;
function c7a() {
  return 1;
}
c7a.X = 1;
function d7a() {
  return 0;
}
d7a.X = 1;
function e7a() {}
e7a.X = 1;
function f7a() {
  return 0;
}
f7a.X = 1;
function g7a() {
  return 0;
}
g7a.X = 1;
function h7a() {}
h7a.X = 1;
function i7a() {
  return D.Yd;
}
i7a.X = 1;
function j7a() {
  return 64;
}
j7a.X = 1;
function k7a() {
  return 2;
}
k7a.X = 1;
function l7a() {
  return 0;
}
l7a.X = 1;
function m7a() {
  return 0;
}
m7a.X = 1;
function n7a() {
  return 0;
}
n7a.X = 1;
function o7a() {
  return 0;
}
o7a.X = 1;
function p7a() {
  return 0;
}
p7a.X = 1;
function q7a() {}
q7a.X = 1;
function r7a() {}
r7a.X = 1;
function s7a() {}
s7a.X = 1;
function t7a() {}
t7a.X = 1;
function u7a() {}
u7a.X = 1;
function v7a() {
  return 0;
}
v7a.X = 1;
function w7a() {
  return 0;
}
w7a.X = 1;
function x7a() {}
x7a.X = 1;
function y7a(a) {
  return a + 39;
}
y7a.X = 1;
function z7a(a) {
  return k[a + 37];
}
z7a.X = 1;
function A7a(a) {
  return a + 36;
}
A7a.X = 1;
function B7a(a, d, e, f, g) {
  var h = b;
  b += 16;
  var i = v[c[c[a] + 22]](a),
    j = c[U_(a + 43, d)],
    l = c[c[j] + 2];
  if (i) {
    WW(h, e, V_(a + 38, d)), v[l](j, h, f, g);
  } else {
    v[l](j, e, f, g);
  }
  b = h;
}
B7a.X = 1;
function C7a(a, d) {
  return c[BY(a + 43, d)];
}
C7a.X = 1;
function D7a(a, d) {
  return c[U_(a + 43, d)];
}
D7a.X = 1;
function E7a(a, d, e) {
  sQ(a, V_(d + 38, e));
}
E7a.X = 1;
function F7a(a, d, e) {
  xi(G7a(a + 38, d), e);
  v[c[c[a] + 17]](a);
}
F7a.X = 1;
function H7a(a) {
  W_(a);
}
H7a.X = 1;
function I7a(a) {
  W_(a);
  xe(a);
}
I7a.X = 1;
function J7a(a, d) {
  var e = a + 39;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  v[c[c[a] + 17]](a);
}
J7a.X = 1;
function K7a(a, d) {
  k[a + 37] = d;
  v[c[c[a] + 17]](a);
}
K7a.X = 1;
function L7a(a) {
  a += 36;
  return v[c[c[a] + 3]](a);
}
L7a.X = 1;
function M7a(a, d, e) {
  N7a(a + 36, d, e);
}
M7a.X = 1;
function O7a(a) {
  P7a(Q7a(a + 17));
}
O7a.X = 1;
function R7a(a) {
  S7a(Q7a(a + 17));
}
R7a.X = 1;
function T7a(a, d, e, f, g) {
  var h = b;
  b += 8;
  a = v[c[c[a] + 20]](a);
  v[c[c[a] + 4]](a, d, h);
  K6a(h, e);
  c[f] = c[h];
  k[f] = k[h];
  c[f + 1] = c[h + 1];
  k[f + 1] = k[h + 1];
  c[f + 2] = c[h + 2];
  k[f + 2] = k[h + 2];
  c[f + 3] = c[h + 3];
  k[f + 3] = k[h + 3];
  d = h + 4;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  b = h;
}
T7a.X = 1;
function U7a(a, d, e) {
  $1 = d;
  $2 = e;
}
U7a.X = 1;
function V7a(a) {
  W7a(a);
}
V7a.X = 1;
function X7a(a) {
  W7a(a);
  xe(a);
}
X7a.X = 1;
function Y7a(a, d) {
  var e;
  e = a + 13;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  var f = y_(a + 37);
  e = f - 1;
  f = 0 != (f | 0);
  a: do {
    if (f) {
      for (var g = a + 37; ; ) {
        var h = c[A_(g, e)];
        v[c[c[h] + 6]](h, d);
        h = e;
        e = h - 1;
        if (0 == (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 12] = 1;
}
Y7a.X = 1;
function Z7a(a, d) {
  var e;
  k[a + 3] = d;
  var f = y_(a + 37);
  e = f - 1;
  f = 0 != (f | 0);
  a: do {
    if (f) {
      for (var g = a + 37; ; ) {
        var h = c[A_(g, e)];
        v[c[c[h] + 10]](h, d);
        h = e;
        e = h - 1;
        if (0 == (h | 0)) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 12] = 1;
}
Z7a.X = 1;
function $7a(a) {
  var d;
  m_(a + 4);
  var e = y_(a + 37);
  d = e - 1;
  e = 0 != (e | 0);
  a: do {
    if (e) {
      for (var f = a + 37, g = a + 4, h = a + 37; ; ) {
        a8a(c[A_(f, d)]);
        o_(g, c[A_(h, d)] + 4);
        var i = d;
        d = i - 1;
        if (0 == (i | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
$7a.X = 1;
function b8a(a) {
  var d,
    e = y_(a + 37);
  d = e - 1;
  e = 0 != (e | 0);
  a: do {
    if (e) {
      for (var f = a + 37; ; ) {
        var g = c[A_(f, d)];
        v[c[c[g] + 17]](g);
        g = d;
        d = g - 1;
        if (0 == (g | 0)) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 12] = 1;
}
b8a.X = 1;
function c8a(a, d, e) {
  $1 = d;
  $2 = e;
}
c8a.X = 1;
function a8a(a) {
  c[a + 12] & 1 && (v[c[c[a] + 16]](a), (c[a + 12] = 0));
}
a8a.X = 1;
function d8a(a) {
  e8a(a, 0, y_(a));
  f8a(a);
  g8a(a);
}
d8a.X = 1;
function W_(a) {
  c[a] = h8a + 2;
  i8a(a + 17);
}
W_.X = 1;
function j8a(a) {
  W_(a);
}
j8a.X = 1;
function k8a(a) {
  W_(a);
  xe(a);
}
k8a.X = 1;
function i8a(a) {
  l8a(a + 1);
}
i8a.X = 1;
function l8a(a) {
  c6a(a, 0, N_(a));
  k6a(a);
  m8a(a);
}
l8a.X = 1;
function W7a(a) {
  var d;
  c[a] = n8a + 2;
  for (var e = a + 37, f = y_(a + 37); ; ) {
    d = f - 1;
    if (0 == (f | 0)) {
      break;
    }
    f = c[A_(e, d)];
    if (0 != (f | 0)) {
      v[c[c[f] + 1]](f);
    }
    f = d;
  }
  d8a(e);
  d8a(a + 37);
  W_(a);
}
W7a.X = 1;
function e8a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
e8a.X = 1;
function o8a(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
o8a.X = 1;
function m8a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
m8a.X = 1;
function g8a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
g8a.X = 1;
function Q7a(a) {
  return c[a + 18];
}
Q7a.X = 1;
function p8a(a, d, e, f, g) {
  d = c[a + 13] + c[a + 14] * d;
  3 == (c[a + 16] | 0)
    ? ((c[e] = (c[d] << 16) >> 16),
      (c[f] = (c[d + 1] << 16) >> 16),
      (c[g] = (c[d + 2] << 16) >> 16))
    : ((c[e] = c[d]), (c[f] = c[d + 1]), (c[g] = c[d + 2]));
}
p8a.X = 1;
function G7a(a, d) {
  return (d << 4) + c[a + 3];
}
G7a.X = 1;
function R6a(a) {
  return c[a + 1];
}
R6a.X = 1;
function q8a(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
q8a.X = 1;
function f8a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && r8a(a, c[a + 3]), (c[a + 3] = 0));
}
f8a.X = 1;
function r8a(a, d) {
  $1 = a;
  yh(d);
}
r8a.X = 1;
function K6a(a, d) {
  var e = b;
  b += 44;
  var f = e + 4,
    g = e + 8,
    h = e + 9,
    i = e + 13,
    j = e + 17,
    l = e + 21,
    m = e + 25,
    n = e + 26,
    p = e + 30,
    r = e + 31,
    s = e + 35,
    t = e + 36,
    w = e + 40;
  wn(f, a + 4, a);
  k[g] = 0.5;
  Q(e, f, g);
  N(h, a + 4, e);
  vw(i, d, e);
  c[e] = c[i];
  k[e] = k[i];
  c[e + 1] = c[i + 1];
  k[e + 1] = k[i + 1];
  c[e + 2] = c[i + 2];
  k[e + 2] = k[i + 2];
  c[e + 3] = c[i + 3];
  k[e + 3] = k[i + 3];
  GB(l, 0 + d);
  k[m] = J(h, l);
  GB(n, 4 + d);
  k[p] = J(h, n);
  GB(r, 8 + d);
  k[s] = J(h, r);
  H(j, m, p, s);
  N(t, e, j);
  c[a] = c[t];
  k[a] = k[t];
  c[a + 1] = c[t + 1];
  k[a + 1] = k[t + 1];
  c[a + 2] = c[t + 2];
  k[a + 2] = k[t + 2];
  c[a + 3] = c[t + 3];
  k[a + 3] = k[t + 3];
  wn(w, e, j);
  f = a + 4;
  c[f] = c[w];
  k[f] = k[w];
  c[f + 1] = c[w + 1];
  k[f + 1] = k[w + 1];
  c[f + 2] = c[w + 2];
  k[f + 2] = k[w + 2];
  c[f + 3] = c[w + 3];
  k[f + 3] = k[w + 3];
  b = e;
}
K6a.X = 1;
function S7a(a) {
  if (0 != (c[a + 8] | 0)) {
    if (1 < (c[a + 8] | 0)) {
      (a += 8), (c[a] -= 1);
    } else {
      var d = c[a + 2];
      v[c[c[d] + 6]](d, c[a + 7]);
      c[a + 9] = 0;
      c[a + 8] = 0;
    }
  }
}
S7a.X = 1;
function P7a(a) {
  if (0 < (c[a + 8] | 0)) {
    (a += 8), (c[a] += 1);
  } else {
    var d = c[a + 2];
    v[c[c[d] + 4]](
      d,
      a + 9,
      a + 10,
      a + 11,
      a + 12,
      a + 13,
      a + 14,
      a + 15,
      a + 16,
      c[a + 7]
    );
    c[a + 8] = 1;
  }
}
P7a.X = 1;
function N7a(a, d, e) {
  var f = b;
  b += 3;
  p8a(a, d, f, f + 1, f + 2);
  G_(a, c[f], e + 14);
  G_(a, c[f + 1], e + 18);
  G_(a, c[f + 2], e + 22);
  v[c[c[e] + 10]](e, k[a + 1]);
  b = f;
}
N7a.X = 1;
function O6a(a, d) {
  Q_(d, 0, a);
}
O6a.X = 1;
function s8a(a) {
  o8a(a, 0, R6a(a));
  t8a(a);
  q8a(a);
}
s8a.X = 1;
function t8a(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && u8a(a, c[a + 3]), (c[a + 3] = 0));
}
t8a.X = 1;
function u8a(a, d) {
  $1 = a;
  yh(d);
}
u8a.X = 1;
function v8a(a) {
  Bi(a);
  c[a] = X_ + 2;
  JW(a + 64);
  c[a + 58] = 4;
}
v8a.X = 1;
function Y_(a) {
  c[a] = X_ + 2;
  TW(a + 64);
}
Y_.X = 1;
function w8a(a, d, e) {
  var f = b;
  b += 1;
  $3 = e;
  c[f] = c[d];
  (dY(a + 64, f) | 0) == (Tl(a + 64) | 0) && OW(a + 64, f);
  b = f;
}
w8a.X = 1;
function x8a(a, d, e, f) {
  var g = b;
  b += 1;
  $3 = e;
  $4 = f;
  c[g] = c[d];
  d = dY(a + 64, g);
  (d | 0) < (Tl(a + 64) | 0) &&
    ((c[$X(a + 64, d)] = c[$X(a + 64, Tl(a + 64) - 1)]), eY(a + 64));
  b = g;
}
x8a.X = 1;
function H6a(a) {
  c[a] = y8a + 2;
  qTa(a + 43);
  s8a(a + 38);
  W_(a);
}
H6a.X = 1;
function z8a(a) {
  Y_(a);
  yh(a);
}
z8a.X = 1;
function A8a(a) {
  v8a(a);
  c[a] = Z_ + 2;
  var d = Ue(76, 16);
  0 == (d | 0) ? (d = 0) : dX(d);
  c[a + 69] = d;
}
A8a.X = 1;
function B8a(a) {
  C8a(a);
  yh(a);
}
B8a.X = 1;
function C8a(a) {
  c[a] = Z_ + 2;
  var d = c[a + 69];
  v[c[c[d]]](d);
  yh(c[a + 69]);
  Y_(a);
}
C8a.X = 1;
function D8a(a, d) {
  return c[a + 3] + d;
}
D8a.X = 1;
function E8a(a, d, e) {
  var f = b;
  b += 1;
  e = 0 != (e | 0) ? e : ci(a);
  c[f] = c[d];
  (dY(a + 64, f) | 0) == (Tl(a + 64) | 0) &&
    (OW(a + 64, f), (a = c[a + 69]), v[c[c[a] + 2]](a, e, d));
  b = f;
}
E8a.X = 1;
function F8a(a, d, e, f) {
  var g = b;
  b += 1;
  var h;
  c[g] = c[d];
  f = 0 != (f | 0) ? f : ci(a);
  h = dY(a + 64, g);
  (h | 0) < (Tl(a + 64) | 0) &&
    ((c[$X(a + 64, h)] = c[$X(a + 64, Tl(a + 64) - 1)]),
    eY(a + 64),
    (a = c[a + 69]),
    v[c[c[a] + 3]](a, f, d, e));
  b = g;
}
F8a.X = 1;
function $_(a, d, e, f, g, h) {
  var i = b;
  b += 81;
  var j = i + 16,
    l = i + 32,
    m = i + 36,
    n = i + 40,
    p = i + 44,
    r = i + 48,
    s = i + 64,
    t = i + 68,
    w = i + 72,
    x = i + 76,
    y = i + 77;
  xi(i, e);
  xi(j, f);
  xY(i, j, 1, n, p);
  eQ(r);
  dc(i, s);
  zb(r, s);
  Tf(d, r, n, p, 1, l, m);
  n = 0;
  r = a + 64;
  s = (n | 0) < (Tl(r) | 0);
  a: do {
    if (s) {
      for (var z = a + 64; ; ) {
        var p = c[D8a(z, n)],
          A = g;
        v[c[c[A] + 2]](A, ci(p)) &&
          ((A = bi(p)),
          v[c[c[A] + 2]](A, p + 1, t, w),
          G8a(t, w, l, m),
          (k[x] = 1),
          H8a(e + 12, f + 12, t, w, x, y) &&
            Dm(d, i, j, p, bi(p), p + 1, g, h));
        n += 1;
        if ((n | 0) >= (Tl(r) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = i;
}
$_.X = 1;
function G8a(a, d, e, f) {
  var g = b;
  b += 8;
  var h = g + 4;
  wn(g, a, e);
  c[a] = c[g];
  k[a] = k[g];
  c[a + 1] = c[g + 1];
  k[a + 1] = k[g + 1];
  c[a + 2] = c[g + 2];
  k[a + 2] = k[g + 2];
  c[a + 3] = c[g + 3];
  k[a + 3] = k[g + 3];
  wn(h, d, f);
  c[d] = c[h];
  k[d] = k[h];
  c[d + 1] = c[h + 1];
  k[d + 1] = k[h + 1];
  c[d + 2] = c[h + 2];
  k[d + 2] = k[h + 2];
  c[d + 3] = c[h + 3];
  k[d + 3] = k[h + 3];
  b = g;
}
G8a.X = 1;
function H8a(a, d, e, f, g, h) {
  var i = b;
  b += 42;
  var j,
    l = i + 4,
    m = i + 8,
    n = i + 9,
    p = i + 13,
    r = i + 17,
    s = i + 18,
    t = i + 22,
    w = i + 26,
    x = i + 27,
    y = i + 31,
    z = i + 35,
    A = i + 36,
    C = i + 37,
    B = i + 38,
    K = i + 39,
    E = i + 40,
    G = i + 41;
  N(l, f, e);
  k[m] = 0.5;
  Q(i, l, m);
  wn(p, f, e);
  k[r] = 0.5;
  Q(n, p, r);
  N(s, a, n);
  N(t, d, n);
  a = I8a(s, i);
  d = I8a(t, i);
  e = 0 == ((d & a) | 0);
  do {
    if (e) {
      f = 0;
      k[w] = k[g];
      N(x, t, s);
      l = 1;
      k[z] = 0;
      k[A] = 0;
      k[C] = 0;
      H(y, z, A, C);
      m = 1;
      for (n = 0; ; ) {
        for (
          p = 0;
          !(0 != ((m & a) | 0)
            ? ((r = (-k[s + p] - k[i + p] * l) / k[x + p]),
              f <= r &&
                ((f = r),
                (k[B] = 0),
                (k[K] = 0),
                (k[E] = 0),
                pe(y, B, K, E),
                (k[y + p] = l)))
            : 0 != ((m & d) | 0) &&
              ((k[G] = (-k[s + p] - k[i + p] * l) / k[x + p]), BB(w, G)),
          (m <<= 1),
          (p = r = p + 1),
          3 == (r | 0));

        ) {}
        l = -1;
        n = p = n + 1;
        if (2 <= (p | 0)) {
          break;
        }
      }
      f <= k[w]
        ? ((k[g] = f),
          (j = h),
          (f = y),
          (c[j] = c[f]),
          (k[j] = k[f]),
          (c[j + 1] = c[f + 1]),
          (k[j + 1] = k[f + 1]),
          (c[j + 2] = c[f + 2]),
          (k[j + 2] = k[f + 2]),
          (c[j + 3] = c[f + 3]),
          (k[j + 3] = k[f + 3]),
          (j = 1),
          (f = 15))
        : (f = 14);
    } else {
      f = 14;
    }
  } while (0);
  14 == f && (j = 0);
  b = i;
  return j;
}
H8a.X = 1;
function I8a(a, d) {
  return (
    (k[a] > k[d] ? 8 : 0) |
    (k[a] < -k[d] ? 1 : 0) |
    (k[a + 1] < -k[d + 1] ? 2 : 0) |
    (k[a + 1] > k[d + 1] ? 16 : 0) |
    (k[a + 2] < -k[d + 2] ? 4 : 0) |
    (k[a + 2] > k[d + 2] ? 32 : 0)
  );
}
I8a.X = 1;
function lZ(a, d, e, f) {
  bZ(a);
  c[a] = J8a + 2;
  c[a + 1] = f;
  c[a + 2] = d;
  c[a + 3] = e;
}
lZ.X = 1;
function mZ(a, d, e, f, g, h) {
  var i = b;
  b += 118;
  var j,
    l = i + 4,
    m = i + 8,
    n = i + 12,
    p = i + 20,
    r = i + 21,
    s = i + 22,
    t = i + 23,
    w = i + 27,
    x = i + 28,
    y = i + 29,
    z = i + 30,
    A = i + 34,
    C = i + 38,
    B = i + 54,
    K = i + 65,
    E = i + 84;
  fZ(c[a + 1]);
  N(m, e + 12, d + 12);
  c[i] = c[m];
  k[i] = k[m];
  c[i + 1] = c[m + 1];
  k[i + 1] = k[m + 1];
  c[i + 2] = c[m + 2];
  k[i + 2] = k[m + 2];
  c[i + 3] = c[m + 3];
  k[i + 3] = k[m + 3];
  N(n, g + 12, f + 12);
  c[l] = c[n];
  k[l] = k[n];
  c[l + 1] = c[n + 1];
  k[l + 1] = k[n + 1];
  c[l + 2] = c[n + 2];
  k[l + 2] = k[n + 2];
  c[l + 3] = c[n + 3];
  k[l + 3] = k[n + 3];
  m = 0;
  k[p] = 1;
  k[r] = 0;
  k[s] = 0;
  H(i + 16, p, r, s);
  k[w] = 0;
  k[x] = 0;
  k[y] = 0;
  pe(t, w, x, y);
  N(A, i, l);
  l = m;
  p = 0;
  eQ(C);
  hZ(B);
  kZ(K, c[a + 2], c[a + 3], c[a + 1], 0);
  QQ(E);
  xi(E, d);
  xi(E + 16, f);
  gZ(K, E, B, 0, 0);
  a = c[B + 10] & 1;
  C = B + 5;
  c[z] = c[C];
  k[z] = k[C];
  c[z + 1] = c[C + 1];
  k[z + 1] = k[C + 1];
  c[z + 2] = c[C + 2];
  k[z + 2] = k[C + 2];
  c[z + 3] = c[C + 3];
  k[z + 3] = k[C + 3];
  a &= 1;
  a: do {
    if (a) {
      C = k[B + 9];
      r = t;
      s = B + 1;
      c[r] = c[s];
      k[r] = k[s];
      c[r + 1] = c[s + 1];
      k[r + 1] = k[s + 1];
      c[r + 2] = c[s + 2];
      k[r + 2] = k[s + 2];
      c[r + 3] = c[s + 3];
      k[r + 3] = k[s + 3];
      for (
        var r = E,
          s = E + 16,
          w = B,
          x = B + 10,
          y = B + 9,
          n = z,
          G = B + 5,
          M = t,
          L = B + 1,
          F = B + 9;
        ;

      ) {
        if (0.0010000000474974513 < C) {
          p += 1;
          if (32 < (p | 0)) {
            j = 0;
            $18 = 1;
            break a;
          }
          C /= J(A, t);
          m -= C;
          if (1 < m) {
            j = 0;
            $18 = 1;
            break a;
          }
          if (0 > m) {
            j = 0;
            $18 = 1;
            break a;
          }
          if (m <= l) {
            j = 0;
            $18 = 1;
            break a;
          }
          l = m;
          C = h;
          v[c[c[C]]](C, m);
          yB(r + 12, d + 12, e + 12, m);
          yB(s + 12, f + 12, g + 12, m);
          gZ(K, E, w, 0, 0);
          if (!(c[x] & 1)) {
            j = 0;
            $18 = 1;
            break a;
          }
          if (0 > k[y]) {
            k[h + 41] = l;
            z = t;
            d = B + 1;
            c[z] = c[d];
            k[z] = k[d];
            c[z + 1] = c[d + 1];
            k[z + 1] = k[d + 1];
            c[z + 2] = c[d + 2];
            k[z + 2] = k[d + 2];
            c[z + 3] = c[d + 3];
            k[z + 3] = k[d + 3];
            z = h + 33;
            c[z] = c[t];
            k[z] = k[t];
            c[z + 1] = c[t + 1];
            k[z + 1] = k[t + 1];
            c[z + 2] = c[t + 2];
            k[z + 2] = k[t + 2];
            c[z + 3] = c[t + 3];
            k[z + 3] = k[t + 3];
            h += 37;
            B += 5;
            c[h] = c[B];
            k[h] = k[B];
            c[h + 1] = c[B + 1];
            k[h + 1] = k[B + 1];
            c[h + 2] = c[B + 2];
            k[h + 2] = k[B + 2];
            c[h + 3] = c[B + 3];
            k[h + 3] = k[B + 3];
            $18 = j = 1;
            break a;
          }
          c[n] = c[G];
          k[n] = k[G];
          c[n + 1] = c[G + 1];
          k[n + 1] = k[G + 1];
          c[n + 2] = c[G + 2];
          k[n + 2] = k[G + 2];
          c[n + 3] = c[G + 3];
          k[n + 3] = k[G + 3];
          c[M] = c[L];
          k[M] = k[L];
          c[M + 1] = c[L + 1];
          k[M + 1] = k[L + 1];
          c[M + 2] = c[L + 2];
          k[M + 2] = k[L + 2];
          c[M + 3] = c[L + 3];
          k[M + 3] = k[L + 3];
          C = k[F];
        } else {
          if (J(t, A) >= -k[h + 43]) {
            j = 0;
            $18 = 1;
            break a;
          }
          k[h + 41] = m;
          B = h + 33;
          c[B] = c[t];
          k[B] = k[t];
          c[B + 1] = c[t + 1];
          k[B + 1] = k[t + 1];
          c[B + 2] = c[t + 2];
          k[B + 2] = k[t + 2];
          c[B + 3] = c[t + 3];
          k[B + 3] = k[t + 3];
          h += 37;
          B = z;
          c[h] = c[B];
          k[h] = k[B];
          c[h + 1] = c[B + 1];
          k[h + 1] = k[B + 1];
          c[h + 2] = c[B + 2];
          k[h + 2] = k[B + 2];
          c[h + 3] = c[B + 3];
          k[h + 3] = k[B + 3];
          $18 = j = 1;
          break a;
        }
      }
    } else {
      (j = 0), ($18 = 1);
    }
  } while (0);
  b = i;
  return j;
}
mZ.X = 1;
function K8a(a) {
  xe(a);
}
K8a.X = 1;
function L8a(a, d, e, f, g, h) {
  var i = b;
  b += 175;
  var j = i + 32,
    l = i + 127,
    m = i + 131,
    n = i + 132,
    p = i + 133,
    r = i + 134,
    s = i + 138,
    t = i + 139,
    w = i + 140,
    x = i + 141,
    y = i + 142,
    z = i + 146,
    A = i + 150,
    C = i + 154,
    B = i + 158,
    K = i + 162,
    E = i + 166,
    G = i + 170,
    M = i + 174;
  M8a(a, d, e, f, h, i, 0);
  N8a(j);
  a = O8a(j, i, g);
  if (0 == (a | 0)) {
    k[m] = 0;
    k[n] = 0;
    k[p] = 0;
    H(l, m, n, p);
    k[s] = 0;
    k[t] = 0;
    k[w] = 0;
    H(r, s, t, w);
    m = 0;
    n = j + 93;
    p = m >>> 0 < c[c[n] + 8] >>> 0;
    a: do {
      if (p) {
        s = j + 93;
        t = j + 93;
        for (w = j + 93; ; ) {
          if (
            ((k[x] = k[c[s] + m + 4]),
            a0(z, i, c[c[t] + m], 0),
            Q(y, z, x),
            xn(l, y),
            WP(B, c[c[w] + m]),
            a0(C, i, B, 1),
            Q(A, C, x),
            xn(r, A),
            (m += 1),
            m >>> 0 >= c[c[n] + 8] >>> 0)
          ) {
            break a;
          }
        }
      }
    } while (0);
    vw(K, d, l);
    j = h + 1;
    c[j] = c[K];
    k[j] = k[K];
    c[j + 1] = c[K + 1];
    k[j + 1] = k[K + 1];
    c[j + 2] = c[K + 2];
    k[j + 2] = k[K + 2];
    c[j + 3] = c[K + 3];
    k[j + 3] = k[K + 3];
    vw(E, d, r);
    d = h + 5;
    c[d] = c[E];
    k[d] = k[E];
    c[d + 1] = c[E + 1];
    k[d + 1] = k[E + 1];
    c[d + 2] = c[E + 2];
    k[d + 2] = k[E + 2];
    c[d + 3] = c[E + 3];
    k[d + 3] = k[E + 3];
    N(G, l, r);
    l = h + 9;
    c[l] = c[G];
    k[l] = k[G];
    c[l + 1] = c[G + 1];
    k[l + 1] = k[G + 1];
    c[l + 2] = c[G + 2];
    k[l + 2] = k[G + 2];
    c[l + 3] = c[G + 3];
    k[l + 3] = k[G + 3];
    k[h + 13] = JB(h + 9);
    k[M] = 9999999747378752e-20 < k[h + 13] ? k[h + 13] : 1;
    KB(h + 9, M);
    h = 1;
  } else {
    (c[h] = 1 == (a | 0) ? 1 : 2), (h = 0);
  }
  b = i;
  return h;
}
L8a.X = 1;
function M8a(a, d, e, f, g, h, i) {
  var j = b;
  b += 35;
  var l = j + 4,
    m = j + 5,
    n = j + 6,
    p = j + 7,
    r = j + 19,
    i = i & 1;
  k[l] = 0;
  k[m] = 0;
  k[n] = 0;
  H(j, l, m, n);
  l = g + 5;
  c[l] = c[j];
  k[l] = k[j];
  c[l + 1] = c[j + 1];
  k[l + 1] = k[j + 1];
  c[l + 2] = c[j + 2];
  k[l + 2] = k[j + 2];
  c[l + 3] = c[j + 3];
  k[l + 3] = k[j + 3];
  P8a(g + 1, j);
  c[g] = 0;
  c[h] = a;
  c[h + 1] = e;
  bc(p, f, d);
  Wb(h + 2, p);
  $P(r, d, f);
  xi(h + 14, r);
  Q8a(h, i & 1);
  b = j;
}
M8a.X = 1;
function O8a(a, d, e) {
  var f = b;
  b += 49;
  var g,
    h,
    i = f + 1,
    j;
  h = f + 17;
  var l = f + 21,
    m = f + 22,
    n = f + 23,
    p,
    r,
    s,
    t,
    w = f + 24,
    x,
    y,
    z,
    A = f + 28,
    C = f + 32,
    B = f + 33,
    K = f + 37,
    E = f + 38,
    G = f + 42,
    M = f + 43,
    L = f + 44,
    F = f + 45;
  g = 0;
  j = k[f] = 0;
  c[a + 87] = a + 55;
  c[a + 88] = a + 63;
  c[a + 89] = a + 71;
  c[a + 90] = a + 79;
  c[a + 91] = 4;
  c[a + 92] = 0;
  c[a + 94] = 0;
  R8a(a, d);
  k[a + 36] = 0;
  c[a + 45] = 0;
  d = a + 32;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  e = Um(a + 32);
  0 < e ? WP(h, a + 32) : ((k[l] = 1), (k[m] = 0), (k[n] = 0), H(h, l, m, n));
  b0(a, a + 37, h);
  k[a + 41] = 1;
  h = a + 32;
  l = c[a + 37] + 4;
  c[h] = c[l];
  k[h] = k[l];
  c[h + 1] = c[l + 1];
  k[h + 1] = k[l + 1];
  c[h + 2] = c[l + 2];
  k[h + 2] = k[l + 2];
  c[h + 3] = c[l + 3];
  k[h + 3] = k[l + 3];
  h = e;
  l = i + 8;
  m = i + 12;
  n = a + 32;
  c[m] = c[n];
  k[m] = k[n];
  c[m + 1] = c[n + 1];
  k[m + 1] = k[n + 1];
  c[m + 2] = c[n + 2];
  k[m + 2] = k[n + 2];
  c[m + 3] = c[n + 3];
  k[m + 3] = k[n + 3];
  P8a(l, n);
  m = i + 4;
  c[m] = c[l];
  k[m] = k[l];
  c[m + 1] = c[l + 1];
  k[m + 1] = k[l + 1];
  c[m + 2] = c[l + 2];
  k[m + 2] = k[l + 2];
  c[m + 3] = c[l + 3];
  k[m + 3] = k[l + 3];
  P8a(i, l);
  for (
    var l = a + 92,
      m = a + 92,
      n = a + 37,
      e = a + 37,
      d = a + 32,
      I = a + 32,
      R = a + 32,
      O = a + 32,
      Z = a + 92,
      P = a + 94,
      S = a + 94,
      da = a + 94,
      V = a + 32,
      ba = a + 91,
      $ = a + 87;
    ;

  ) {
    p = 1 - c[l];
    r = n + 9 * c[m];
    s = e + 9 * p;
    t = x = JB(d);
    if (9999999747378752e-20 > x) {
      c[a + 94] = 1;
      break;
    }
    WP(w, I);
    b0(a, r, w);
    x = c[r + (c[r + 8] - 1)] + 4;
    for (var Y = (z = y = 0); 4 > Y >>> 0; ) {
      N(A, x, (z << 2) + i);
      if (9999999747378752e-20 > Um(A)) {
        y = 1;
        break;
      }
      z = Y = z + 1;
    }
    if (y & 1) {
      c0(a, a + 9 * c[a + 92] + 37);
      break;
    }
    j = y = (j + 1) & 3;
    y = (y << 2) + i;
    z = x;
    c[y] = c[z];
    k[y] = k[z];
    c[y + 1] = c[z + 1];
    k[y + 1] = k[z + 1];
    c[y + 2] = c[z + 2];
    k[y + 2] = k[z + 2];
    c[y + 3] = c[z + 3];
    k[y + 3] = k[z + 3];
    k[C] = J(R, x) / t;
    k[f] = k[d0(C, f)];
    if (0 >= t - k[f] - 9999999747378752e-20 * t) {
      c0(a, a + 9 * c[a + 92] + 37);
      break;
    }
    c[K] = 0;
    t = c[r + 8];
    2 == (t | 0)
      ? (h = t = S8a(c[r] + 4, c[r + 1] + 4, B, K))
      : 3 == (t | 0)
        ? (h = t = T8a(c[r] + 4, c[r + 1] + 4, c[r + 2] + 4, B, K))
        : 4 == (t | 0)
          ? (h = t = U8a(
              c[r] + 4,
              c[r + 1] + 4,
              c[r + 2] + 4,
              c[r + 3] + 4,
              B,
              K
            ))
          : (t = h);
    if (!(0 <= t)) {
      c0(a, a + 9 * c[a + 92] + 37);
      break;
    }
    c[s + 8] = 0;
    k[G] = 0;
    k[M] = 0;
    k[L] = 0;
    H(E, G, M, L);
    c[O] = c[E];
    k[O] = k[E];
    c[O + 1] = c[E + 1];
    k[O + 1] = k[E + 1];
    c[O + 2] = c[E + 2];
    k[O + 2] = k[E + 2];
    c[O + 3] = c[E + 3];
    k[O + 3] = k[E + 3];
    c[Z] = p;
    p = 0;
    t = c[r + 8];
    x = p >>> 0 < t >>> 0;
    y = c[K];
    a: do {
      if (x) {
        for (Y = y; ; ) {
          z = c[r + p];
          if (0 != (((1 << p) & Y) | 0)) {
            c[s + c[s + 8]] = z;
            z = k[B + p];
            var Y = s + 8,
              la = c[Y];
            c[Y] = la + 1;
            k[s + (la + 4)] = z;
            Q(F, c[r + p] + 4, B + p);
            xn(V, F);
          } else {
            (Y = c[ba]), (c[ba] = Y + 1), (c[$ + Y] = z);
          }
          p += 1;
          z = c[K];
          if (p >>> 0 >= t >>> 0) {
            var ka = z;
            break a;
          }
          Y = z;
        }
      } else {
        ka = y;
      }
    } while (0);
    15 == (ka | 0) && (c[P] = 1);
    g = r = g + 1;
    if (128 <= r >>> 0) {
      c[da] = 2;
      break;
    }
    r = c[S];
    c[da] = r;
    if (0 != (r | 0)) {
      break;
    }
  }
  c[a + 93] = a + 9 * c[a + 92] + 37;
  g = c[a + 94];
  0 == (g | 0) ? (k[a + 36] = JB(a + 32)) : 1 == (g | 0) && (k[a + 36] = 0);
  a = c[a + 94];
  b = f;
  return a;
}
O8a.X = 1;
function a0(a, d, e, f) {
  0 != (f | 0) ? V8a(a, d, e) : W8a(a, d, e);
}
a0.X = 1;
function X8a(a, d, e, f, g, h, i) {
  var j = b;
  b += 3006;
  var l,
    m = j + 32,
    n = j + 127,
    p = j + 131,
    r = j + 2967,
    s = j + 2971,
    t = j + 2975,
    w = j + 2976,
    x = j + 2977,
    y = j + 2978,
    z = j + 2982,
    A = j + 2986,
    C = j + 2990,
    B = j + 2994,
    K = j + 2998,
    E = j + 3002;
  M8a(a, d, e, f, h, j, i & 1);
  N8a(m);
  WP(n, g);
  a = O8a(m, j, n);
  do {
    if (1 == (a | 0)) {
      if ((Y8a(p), WP(r, g), 9 != (Z8a(p, m, r) | 0))) {
        k[t] = 0;
        k[w] = 0;
        k[x] = 0;
        H(s, t, w, x);
        l = 0;
        e = p + 9;
        f = l >>> 0 < c[e] >>> 0;
        a: do {
          if (f) {
            i = p + 1;
            for (n = p + 5; ; ) {
              if (
                (a0(z, j, c[i + l], 0),
                Q(y, z, n + l),
                xn(s, y),
                (l += 1),
                l >>> 0 >= c[e] >>> 0)
              ) {
                break a;
              }
            }
          }
        } while (0);
        c[h] = 1;
        vw(A, d, s);
        l = h + 1;
        e = A;
        c[l] = c[e];
        k[l] = k[e];
        c[l + 1] = c[e + 1];
        k[l + 1] = k[e + 1];
        c[l + 2] = c[e + 2];
        k[l + 2] = k[e + 2];
        c[l + 3] = c[e + 3];
        k[l + 3] = k[e + 3];
        Q(K, p + 10, p + 14);
        N(B, s, K);
        vw(C, d, B);
        l = h + 5;
        e = C;
        c[l] = c[e];
        k[l] = k[e];
        c[l + 1] = c[e + 1];
        k[l + 1] = k[e + 1];
        c[l + 2] = c[e + 2];
        k[l + 2] = k[e + 2];
        c[l + 3] = c[e + 3];
        k[l + 3] = k[e + 3];
        WP(E, p + 10);
        l = h + 9;
        e = E;
        c[l] = c[e];
        k[l] = k[e];
        c[l + 1] = c[e + 1];
        k[l + 1] = k[e + 1];
        c[l + 2] = c[e + 2];
        k[l + 2] = k[e + 2];
        c[l + 3] = c[e + 3];
        k[l + 3] = k[e + 3];
        k[h + 13] = -k[p + 14];
        l = 1;
        e = 11;
      } else {
        (c[h] = 3), (e = 10);
      }
    } else {
      2 == (a | 0) && (c[h] = 2), (e = 10);
    }
  } while (0);
  10 == e && (l = 0);
  b = j;
  return l;
}
X8a.X = 1;
function Z8a(a, d, e) {
  var f = b;
  b += 93;
  var g,
    h,
    i,
    j = f + 4,
    l = f + 8,
    m = f + 12,
    n = f + 16,
    p,
    r = f + 34,
    s,
    t,
    w,
    x = f + 37,
    y = f + 41,
    z = f + 45,
    A = f + 49,
    C = f + 53,
    B = f + 57,
    K = f + 61,
    E = f + 65,
    G = f + 69,
    M = f + 73,
    L = f + 77,
    F = f + 81,
    I = f + 82,
    R = f + 86,
    O = f + 90,
    Z = f + 91,
    P = f + 92;
  i = c[d + 93];
  var S = 1 < c[i + 8] >>> 0;
  do {
    if (S) {
      if (e0(d)) {
        p = a + 2832;
        var da = 0 != (c[p] | 0);
        a: do {
          if (da) {
            for (var V = a + 2832, ba = a + 2832, $ = a + 2834; ; ) {
              if (((g = c[V]), f0(ba, g), g0($, g), 0 == (c[p] | 0))) {
                break a;
              }
            }
          }
        } while (0);
        c[a] = 0;
        c[a + 2831] = 0;
        N(f, c[i] + 4, c[i + 3] + 4);
        N(j, c[i + 1] + 4, c[i + 3] + 4);
        N(l, c[i + 2] + 4, c[i + 3] + 4);
        0 > h0(f, j, l) && ($8a(i, i + 1), a9a(i + 4, i + 5));
        g = m;
        c[g] = i0(a, c[i], c[i + 1], c[i + 2], 1);
        g += 1;
        c[g] = i0(a, c[i + 1], c[i], c[i + 3], 1);
        g += 1;
        c[g] = i0(a, c[i + 2], c[i + 1], c[i + 3], 1);
        c[g + 1] = i0(a, c[i], c[i + 2], c[i + 3], 1);
        if (4 != (c[a + 2833] | 0)) {
          g = 27;
        } else {
          s = h = b9a(a);
          t = n;
          for (w = s + 18; s < w; s++, t++) {
            (c[t] = c[s]), (k[t] = k[s]);
          }
          p = g = 0;
          j0(c[m], 0, c[m + 1], 0);
          j0(c[m], 1, c[m + 2], 0);
          j0(c[m], 2, c[m + 3], 0);
          j0(c[m + 1], 1, c[m + 3], 2);
          j0(c[m + 1], 2, c[m + 2], 1);
          j0(c[m + 2], 2, c[m + 3], 1);
          c[a] = 0;
          var da = a + 2831,
            V = a + 2831,
            ba = a + 15,
            $ = r + 2,
            Y = r,
            la = r + 1,
            ka = a + 2832,
            ja = a + 2834,
            ea = n + 5,
            ca = n;
          s = p;
          a: for (; 255 > s >>> 0; ) {
            if (64 <= c[da] >>> 0) {
              c[a] = 6;
              break;
            }
            c9a(r);
            s = c[V];
            c[V] = s + 1;
            s = (s << 3) + ba;
            t = 1;
            g = w = g + 1;
            c[h + 17] = w & 255;
            d9a(d, h, s);
            if (9999999747378752e-20 < J(h, s + 4) - k[h + 4]) {
              for (var W = (w = 0); 3 > W >>> 0 && t & 1; ) {
                (t =
                  (0 !=
                    ((t &
                      1 &
                      k0(a, g, s, c[h + (w + 9)], c[h + (w + 14)] & 255, r) &
                      1) |
                      0)) &
                  1),
                  (w = W = w + 1);
              }
              s = t & 1;
              do {
                if (s && 3 <= c[$] >>> 0) {
                  j0(c[Y], 1, c[la], 2);
                  f0(ka, h);
                  g0(ja, h);
                  h = b9a(a);
                  if (k[h + 5] >= k[ea]) {
                    s = h;
                    t = ca;
                    for (w = s + 18; s < w; s++, t++) {
                      (c[t] = c[s]), (k[t] = k[s]);
                    }
                  }
                  p = s = p + 1;
                  continue a;
                }
              } while (0);
              c[a] = 4;
              break;
            }
            c[a] = 7;
            break;
          }
          Q(x, n, n + 4);
          h = a + 10;
          g = n;
          c[h] = c[g];
          k[h] = k[g];
          c[h + 1] = c[g + 1];
          k[h + 1] = k[g + 1];
          c[h + 2] = c[g + 2];
          k[h + 2] = k[g + 2];
          c[h + 3] = c[g + 3];
          k[h + 3] = k[g + 3];
          k[a + 14] = k[n + 4];
          c[a + 9] = 3;
          c[a + 1] = c[n + 6];
          c[a + 2] = c[n + 7];
          c[a + 3] = c[n + 8];
          N(y, c[n + 7] + 4, x);
          N(z, c[n + 8] + 4, x);
          qn(A, y, z);
          k[a + 5] = JB(A);
          N(C, c[n + 8] + 4, x);
          N(B, c[n + 6] + 4, x);
          qn(K, C, B);
          k[a + 6] = JB(K);
          N(E, c[n + 6] + 4, x);
          N(G, c[n + 7] + 4, x);
          qn(M, E, G);
          k[a + 7] = JB(M);
          h = k[a + 5] + k[a + 6] + k[a + 7];
          g = a + 5;
          k[g] /= h;
          g = a + 6;
          k[g] /= h;
          g = a + 7;
          k[g] /= h;
          h = c[a];
          g = 31;
        }
      } else {
        g = 27;
      }
    } else {
      g = 27;
    }
  } while (0);
  27 == g &&
    ((c[a] = 8),
    WP(L, e),
    (d = a + 10),
    (c[d] = c[L]),
    (k[d] = k[L]),
    (c[d + 1] = c[L + 1]),
    (k[d + 1] = k[L + 1]),
    (c[d + 2] = c[L + 2]),
    (k[d + 2] = k[L + 2]),
    (c[d + 3] = c[L + 3]),
    (k[d + 3] = k[L + 3]),
    (L = JB(a + 10)),
    (k[F] = L),
    (d = a + 10),
    0 < L
      ? (wC(I, a + 10, F),
        (c[d] = c[I]),
        (k[d] = k[I]),
        (c[d + 1] = c[I + 1]),
        (k[d + 1] = k[I + 1]),
        (c[d + 2] = c[I + 2]),
        (k[d + 2] = k[I + 2]),
        (c[d + 3] = c[I + 3]),
        (k[d + 3] = k[I + 3]))
      : ((k[O] = 1),
        (k[Z] = 0),
        (k[P] = 0),
        H(R, O, Z, P),
        (c[d] = c[R]),
        (k[d] = k[R]),
        (c[d + 1] = c[R + 1]),
        (k[d + 1] = k[R + 1]),
        (c[d + 2] = c[R + 2]),
        (k[d + 2] = k[R + 2]),
        (c[d + 3] = c[R + 3]),
        (k[d + 3] = k[R + 3])),
    (k[a + 14] = 0),
    (c[a + 9] = 1),
    (c[a + 1] = c[i]),
    (k[a + 5] = 1),
    (h = c[a]));
  b = f;
  return h;
}
Z8a.X = 1;
function $8a(a, d) {
  var e;
  e = c[a];
  c[a] = c[d];
  c[d] = e;
}
$8a.X = 1;
function a9a(a, d) {
  var e;
  e = k[a];
  k[a] = k[d];
  k[d] = e;
}
a9a.X = 1;
function f0(a, d) {
  0 != (c[d + 13] | 0) && (c[c[d + 13] + 12] = c[d + 12]);
  0 != (c[d + 12] | 0) && (c[c[d + 12] + 13] = c[d + 13]);
  (d | 0) == (c[a] | 0) && (c[a] = c[d + 13]);
  var e = a + 1;
  c[e] -= 1;
}
f0.X = 1;
function g0(a, d) {
  c[d + 12] = 0;
  c[d + 13] = c[a];
  0 != (c[a] | 0) && (c[c[a] + 12] = d);
  c[a] = d;
  var e = a + 1;
  c[e] += 1;
}
g0.X = 1;
function b9a(a) {
  var d,
    e,
    f,
    g,
    a = c[a + 2832];
  d = k[a + 4] * k[a + 4];
  e = k[a + 5];
  var h = c[a + 13];
  f = h;
  h = 0 != (h | 0);
  a: do {
    if (h) {
      for (;;) {
        if (
          ((g = k[f + 4] * k[f + 4]),
          k[f + 5] >= e && g < d && ((a = f), (d = g), (e = k[f + 5])),
          (f = g = c[f + 13]),
          0 == (g | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  return a;
}
b9a.X = 1;
function j0(a, d, e, f) {
  c[a + (d + 14)] = f & 255;
  c[a + (d + 9)] = e;
  c[e + (f + 14)] = d & 255;
  c[e + (f + 9)] = a;
}
j0.X = 1;
function e0(a) {
  var d = b;
  b += 58;
  var e,
    f,
    g,
    h = d + 4,
    i = d + 5,
    j = d + 6,
    l = d + 7,
    m = d + 11,
    n = d + 15,
    p = d + 19,
    r = d + 20,
    s = d + 21,
    t = d + 22,
    w = d + 26,
    x = d + 30,
    y = d + 34,
    z = d + 38,
    A = d + 42,
    C = d + 46,
    B = d + 50,
    K = d + 54,
    E = c[c[a + 93] + 8];
  a: do {
    if (1 == (E | 0)) {
      g = 0;
      for (var G = a + 93, M = a + 93, L = a + 93, F = a + 93, I = 0; ; ) {
        if (3 <= I >>> 0) {
          e = 27;
          break a;
        }
        k[h] = 0;
        k[i] = 0;
        k[j] = 0;
        H(d, h, i, j);
        k[d + g] = 1;
        b0(a, c[G], d);
        if (e0(a)) {
          f = 1;
          e = 28;
          break a;
        }
        c0(a, c[M]);
        I = c[L];
        WP(l, d);
        b0(a, I, l);
        if (e0(a)) {
          f = 1;
          e = 28;
          break a;
        }
        c0(a, c[F]);
        g = I = g + 1;
      }
    } else {
      if (2 == (E | 0)) {
        N(m, c[c[a + 93] + 1] + 4, c[c[a + 93]] + 4);
        g = 0;
        G = a + 93;
        M = a + 93;
        L = a + 93;
        F = a + 93;
        for (I = 0; ; ) {
          if (3 <= I >>> 0) {
            e = 27;
            break a;
          }
          k[p] = 0;
          k[r] = 0;
          k[s] = 0;
          H(n, p, r, s);
          k[n + g] = 1;
          qn(t, m, n);
          if (0 < Um(t)) {
            b0(a, c[G], t);
            if (e0(a)) {
              f = 1;
              e = 28;
              break a;
            }
            c0(a, c[M]);
            I = c[L];
            WP(w, t);
            b0(a, I, w);
            if (e0(a)) {
              f = 1;
              e = 28;
              break a;
            }
            c0(a, c[F]);
          }
          g = I = g + 1;
        }
      } else {
        3 == (E | 0)
          ? (N(y, c[c[a + 93] + 1] + 4, c[c[a + 93]] + 4),
            N(z, c[c[a + 93] + 2] + 4, c[c[a + 93]] + 4),
            qn(x, y, z),
            0 < Um(x)
              ? (b0(a, c[a + 93], x),
                e0(a)
                  ? ((f = 1), (e = 28))
                  : (c0(a, c[a + 93]),
                    (e = c[a + 93]),
                    WP(A, x),
                    b0(a, e, A),
                    e0(a) ? ((f = 1), (e = 28)) : (c0(a, c[a + 93]), (e = 27))))
              : (e = 27))
          : 4 == (E | 0)
            ? (N(C, c[c[a + 93]] + 4, c[c[a + 93] + 3] + 4),
              N(B, c[c[a + 93] + 1] + 4, c[c[a + 93] + 3] + 4),
              N(K, c[c[a + 93] + 2] + 4, c[c[a + 93] + 3] + 4),
              0 < sc(h0(C, B, K)) ? ((f = 1), (e = 28)) : (e = 27))
            : (e = 27);
      }
    }
  } while (0);
  27 == e && (f = 0);
  b = d;
  return f;
}
e0.X = 1;
function h0(a, d, e) {
  return (
    k[a + 1] * k[d + 2] * k[e] +
    k[a + 2] * k[d] * k[e + 1] -
    k[a] * k[d + 2] * k[e + 1] -
    k[a + 1] * k[d] * k[e + 2] +
    k[a] * k[d + 1] * k[e + 2] -
    k[a + 2] * k[d + 1] * k[e]
  );
}
h0.X = 1;
function i0(a, d, e, f, g) {
  var h = b;
  b += 40;
  var i,
    j = h + 4,
    l = h + 8,
    m = h + 12,
    n,
    p = h + 13,
    r = h + 17,
    s = h + 21,
    t = h + 22,
    w = h + 26,
    x = h + 30,
    y = h + 31,
    z = h + 35,
    A = h + 39,
    g = g & 1,
    C = 0 != (c[a + 2834] | 0),
    B = c[a + 2834];
  a: do {
    if (C) {
      i = B;
      f0(a + 2834, i);
      g0(a + 2832, i);
      c[i + 17] = 0;
      c[i + 6] = d;
      c[i + 7] = e;
      c[i + 8] = f;
      N(j, e + 4, d + 4);
      N(l, f + 4, d + 4);
      qn(h, j, l);
      n = i;
      var K = h;
      c[n] = c[K];
      k[n] = k[K];
      c[n + 1] = c[K + 1];
      k[n + 1] = k[K + 1];
      c[n + 2] = c[K + 2];
      k[n + 2] = k[K + 2];
      c[n + 3] = c[K + 3];
      k[n + 3] = k[K + 3];
      k[m] = JB(i);
      n = (9999999747378752e-20 < k[m]) & 1;
      N(r, d + 4, e + 4);
      qn(p, i, r);
      k[s] = J(d + 4, p);
      N(w, e + 4, f + 4);
      qn(t, i, w);
      k[x] = J(e + 4, t);
      K = WX(s, x);
      N(z, f + 4, d + 4);
      qn(y, i, z);
      k[A] = J(f + 4, y);
      k[i + 5] = k[WX(K, A)] / (n & 1 ? k[m] : 1);
      k[i + 5] = -0.009999999776482582 <= k[i + 5] ? 0 : k[i + 5];
      n &= 1;
      b: do {
        if (n) {
          k[i + 4] = J(d + 4, i) / k[m];
          KB(i, m);
          n = g & 1;
          do {
            if (!n && !(-9999999747378752e-21 <= k[i + 4])) {
              c[a] = 3;
              break b;
            }
          } while (0);
          break a;
        }
        c[a] = 2;
      } while (0);
      f0(a + 2832, i);
      g0(a + 2834, i);
    } else {
      c[a] = 0 != (B | 0) ? 6 : 5;
    }
    i = 0;
  } while (0);
  b = h;
  return i;
}
i0.X = 1;
function d9a(a, d, e) {
  var f = b;
  b += 9;
  var g = f + 4,
    h = f + 5;
  k[g] = JB(d);
  wC(f, d, g);
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e9a(h, a, e);
  a = e + 4;
  c[a] = c[h];
  k[a] = k[h];
  c[a + 1] = c[h + 1];
  k[a + 1] = k[h + 1];
  c[a + 2] = c[h + 2];
  k[a + 2] = k[h + 2];
  c[a + 3] = c[h + 3];
  k[a + 3] = k[h + 3];
  b = f;
}
d9a.X = 1;
function d0(a, d) {
  return k[a] > k[d] ? a : d;
}
d0.X = 1;
function c9a(a) {
  c[a] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
c9a.X = 1;
function c0(a, d) {
  var e = d + 8,
    f = c[e] - 1;
  c[e] = f;
  var e = c[d + f],
    f = a + 91,
    g = c[f];
  c[f] = g + 1;
  c[a + (g + 87)] = e;
}
c0.X = 1;
function f9a(a) {
  c[a] = 0;
  c[a + 1] = 0;
}
f9a.X = 1;
function k0(a, d, e, f, g, h) {
  var i, j;
  ((c[f + 17] & 255) | 0) != (d | 0)
    ? ((j = c[g9a + g]),
      -9999999747378752e-21 > J(f, e + 4) - k[f + 4]
        ? ((a = i0(a, c[f + (j + 6)], c[f + (g + 6)], e, 0)),
          0 == (a | 0)
            ? (f = 12)
            : (j0(a, 0, f, g),
              0 != (c[h] | 0) ? j0(c[h], 1, a, 2) : (c[h + 1] = a),
              (c[h] = a),
              (i = h + 2),
              (c[i] += 1),
              (i = 1),
              (f = 13)))
        : ((g = c[h9a + g]),
          (c[f + 17] = d & 255),
          k0(a, d, e, c[f + (j + 9)], c[f + (j + 14)] & 255, h)
            ? k0(a, d, e, c[f + (g + 9)], c[f + (g + 14)] & 255, h)
              ? (f0(a + 2832, f), g0(a + 2834, f), (i = 1), (f = 13))
              : (f = 12)
            : (f = 12)))
    : (f = 12);
  12 == f && (i = 0);
  return i;
}
k0.X = 1;
function e9a(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 8;
  W8a(f, d, e);
  WP(h, e);
  V8a(g, d, h);
  N(a, f, g);
  b = f;
}
e9a.X = 1;
function W8a(a, d, e) {
  var f = d + 30,
    d = c[d] + c[f + 1],
    f = c[f];
  v[0 != ((f & 1) | 0) ? c[c[d] + (f - 1)] : f](a, d, e);
}
W8a.X = 1;
function V8a(a, d, e) {
  var f = b;
  b += 8;
  var g = f + 4,
    h = d + 30,
    i = c[d + 1] + c[h + 1],
    h = c[h],
    h = 0 != ((h & 1) | 0) ? c[c[i] + (h - 1)] : h;
  Bo(g, d + 2, e);
  v[h](f, i, g);
  vw(a, d + 14, f);
  b = f;
}
V8a.X = 1;
function b0(a, d, e) {
  k[d + c[d + 8] + 4] = 0;
  var f = a + 91,
    g = c[f] - 1;
  c[f] = g;
  c[d + c[d + 8]] = c[a + (g + 87)];
  f = d + 8;
  g = c[f];
  c[f] = g + 1;
  d9a(a, e, c[d + g]);
}
b0.X = 1;
function Y8a(a) {
  for (var d = a + 15, e = d + 512; !((d += 8), (d | 0) == (e | 0)); ) {}
  d = a + 527;
  for (e = d + 2304; !((d += 18), (d | 0) == (e | 0)); ) {}
  f9a(a + 2832);
  f9a(a + 2834);
  i9a(a);
}
Y8a.X = 1;
function i9a(a) {
  var d = b;
  b += 7;
  var e = d + 4,
    f = d + 5,
    g = d + 6;
  c[a] = 9;
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  H(d, e, f, g);
  e = a + 10;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  k[a + 14] = 0;
  e = c[a + 2831] = 0;
  f = a + 2834;
  for (
    a += 527;
    !(g0(f, a + 18 * (-e + 127)), (e = g = e + 1), 128 <= g >>> 0);

  ) {}
  b = d;
}
i9a.X = 1;
function R8a(a, d) {
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  Wb(a + 2, d + 2);
  xi(a + 14, d + 14);
  var e = d + 30,
    f = c[e + 1],
    g = a + 30;
  c[g] = c[e];
  c[g + 1] = f;
  return a;
}
R8a.X = 1;
function S8a(a, d, e, f) {
  var g = b;
  b += 13;
  var h,
    i,
    j = g + 4,
    l = g + 5,
    m = g + 9;
  N(g, d, a);
  i = Um(g);
  var n = 0 < i;
  a: do {
    if (n) {
      h = 0 < i;
      do {
        if (h) {
          var p = -J(a, g) / i;
          k[j] = p;
          if (1 <= p) {
            k[e] = 0;
            k[e + 1] = 1;
            c[f] = 2;
            h = Um(d);
            break a;
          }
          if (!(0 >= p)) {
            d = k[j];
            k[e + 1] = d;
            k[e] = 1 - d;
            c[f] = 3;
            Q(l, g, j);
            wn(m, a, l);
            h = Um(m);
            break a;
          }
        } else {
          k[j] = 0;
        }
      } while (0);
      k[e] = 1;
      k[e + 1] = 0;
      c[f] = 1;
      h = Um(a);
    } else {
      h = -1;
    }
  } while (0);
  b = g;
  return h;
}
S8a.X = 1;
function T8a(a, d, e, f, g) {
  var h = b;
  b += 47;
  var i = h + 3,
    j = h + 15,
    l,
    m,
    n = h + 19,
    p = h + 21,
    r,
    s = h + 22,
    t,
    w,
    x = h + 26,
    y = h + 30,
    z = h + 31,
    A = h + 35,
    C = h + 39,
    B = h + 43;
  c[h] = a;
  l = h + 1;
  c[l] = d;
  c[l + 1] = e;
  N(i, a, d);
  l = i + 4;
  N(l, d, e);
  N(l + 4, e, a);
  qn(j, i, i + 4);
  l = Um(j);
  if (0 < l) {
    m = -1;
    c[n] = 0;
    k[n] = 0;
    c[n + 1] = 0;
    k[n + 1] = 0;
    r = c[p] = 0;
    for (var K = n + 1; ; ) {
      t = c[h + r];
      qn(s, (r << 2) + i, j);
      if (
        0 < J(t, s) &&
        ((t = c[j9a + r]), (w = S8a(c[h + r], c[h + t], n, p)), 0 > m || w < m)
      ) {
        (m = w),
          (c[g] =
            (0 != ((c[p] & 2) | 0) ? 1 << t : 0) +
            (0 != ((c[p] & 1) | 0) ? 1 << r : 0)),
          (k[f + r] = k[n]),
          (k[f + t] = k[K]),
          (k[f + c[j9a + t]] = 0);
      }
      r = t = r + 1;
      if (3 <= t >>> 0) {
        break;
      }
    }
    0 > m &&
      ((n = J(a, j)),
      (a = ec(l)),
      (k[y] = n / l),
      Q(x, j, y),
      (m = Um(x)),
      (c[g] = 7),
      N(z, d, x),
      qn(A, i + 4, z),
      (k[f] = JB(A) / a),
      N(C, e, x),
      qn(B, i + 8, C),
      (k[f + 1] = JB(B) / a),
      (k[f + 2] = 1 - (k[f] + k[f + 1])));
    d = m;
  } else {
    d = -1;
  }
  b = h;
  return d;
}
T8a.X = 1;
function Q8a(a, d) {
  var e = a + 30;
  c[e] = d & 1 ? 6 : 8;
  c[e + 1] = 0;
}
Q8a.X = 1;
function U8a(a, d, e, f, g, h) {
  var i = b;
  b += 36;
  var j,
    l,
    m = i + 4,
    n,
    p = i + 16;
  j = i + 20;
  var r = i + 24,
    s = i + 28,
    t = i + 31,
    w,
    x = i + 32,
    y;
  c[i] = a;
  n = i + 1;
  c[n] = d;
  n += 1;
  c[n] = e;
  c[n + 1] = f;
  N(m, a, f);
  n = m + 4;
  N(n, d, f);
  N(n + 4, e, f);
  n = h0(m, m + 4, m + 8);
  N(j, d, e);
  N(r, a, d);
  qn(p, j, r);
  p = (0 >= n * J(a, p)) & 1;
  do {
    if (p) {
      if (0 < sc(n)) {
        l = -1;
        j = s;
        c[j] = 0;
        k[j] = 0;
        c[j + 1] = 0;
        k[j + 1] = 0;
        c[j + 2] = 0;
        k[j + 2] = 0;
        j = c[t] = 0;
        for (var z = (r = s), A = s + 1, C = s + 2; ; ) {
          w = c[k9a + j];
          qn(x, (j << 2) + m, (w << 2) + m);
          $s = y = n * J(f, x);
          if (
            0 < y &&
            ((y = T8a(c[i + j], c[i + w], f, r, t)), 0 > l || y < l)
          ) {
            (l = y),
              (c[h] =
                (0 != ((c[t] & 2) | 0) ? 1 << w : 0) +
                (0 != ((c[t] & 1) | 0) ? 1 << j : 0) +
                (0 != ((c[t] & 4) | 0) ? 8 : 0)),
              (k[g + j] = k[z]),
              (k[g + w] = k[A]),
              (k[g + c[k9a + w]] = 0),
              (k[g + 3] = k[C]);
          }
          j = w = j + 1;
          if (3 <= w >>> 0) {
            break;
          }
        }
        0 > l &&
          ((l = 0),
          (c[h] = 15),
          (k[g] = h0(e, d, f) / n),
          (k[g + 1] = h0(a, e, f) / n),
          (k[g + 2] = h0(d, a, f) / n),
          (k[g + 3] = 1 - (k[g] + k[g + 1] + k[g + 2])));
        j = 18;
      } else {
        j = 17;
      }
    } else {
      j = 17;
    }
  } while (0);
  17 == j && (l = -1);
  b = i;
  return l;
}
U8a.X = 1;
function N8a(a) {
  var d = b;
  b += 7;
  var e = d + 4,
    f = d + 5,
    g = d + 6;
  k[e] = 0;
  k[f] = 0;
  k[g] = 0;
  H(d, e, f, g);
  e = a + 32;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  c[a + 91] = 0;
  c[a + 94] = 2;
  c[a + 92] = 0;
  k[a + 36] = 0;
  b = d;
}
N8a.X = 1;
function l9a(a, d, e, f, g, h, i, j, l, m, n) {
  var p = b;
  b += 18;
  var r = p + 4;
  $2 = a;
  $3 = d;
  $11 = m;
  $12 = n;
  N(p, g + 12, h + 12);
  X8a(e, g, f, h, p, r, 1)
    ? ((a = r + 1),
      (c[j] = c[a]),
      (k[j] = k[a]),
      (c[j + 1] = c[a + 1]),
      (k[j + 1] = k[a + 1]),
      (c[j + 2] = c[a + 2]),
      (k[j + 2] = k[a + 2]),
      (c[j + 3] = c[a + 3]),
      (k[j + 3] = k[a + 3]),
      (j = r + 5),
      (c[l] = c[j]),
      (k[l] = k[j]),
      (c[l + 1] = c[j + 1]),
      (k[l + 1] = k[j + 1]),
      (c[l + 2] = c[j + 2]),
      (k[l + 2] = k[j + 2]),
      (c[l + 3] = c[j + 3]),
      (k[l + 3] = k[j + 3]),
      (l = r + 9),
      (c[i] = c[l]),
      (k[i] = k[l]),
      (c[i + 1] = c[l + 1]),
      (k[i + 1] = k[l + 1]),
      (c[i + 2] = c[l + 2]),
      (k[i + 2] = k[l + 2]),
      (c[i + 3] = c[l + 3]),
      (k[i + 3] = k[l + 3]),
      (i = 1))
    : (L8a(e, g, f, h, p, r) &&
        ((a = r + 1),
        (c[j] = c[a]),
        (k[j] = k[a]),
        (c[j + 1] = c[a + 1]),
        (k[j + 1] = k[a + 1]),
        (c[j + 2] = c[a + 2]),
        (k[j + 2] = k[a + 2]),
        (c[j + 3] = c[a + 3]),
        (k[j + 3] = k[a + 3]),
        (j = r + 5),
        (c[l] = c[j]),
        (k[l] = k[j]),
        (c[l + 1] = c[j + 1]),
        (k[l + 1] = k[j + 1]),
        (c[l + 2] = c[j + 2]),
        (k[l + 2] = k[j + 2]),
        (c[l + 3] = c[j + 3]),
        (k[l + 3] = k[j + 3]),
        (l = r + 9),
        (c[i] = c[l]),
        (k[i] = k[l]),
        (c[i + 1] = c[l + 1]),
        (k[i + 1] = k[l + 1]),
        (c[i + 2] = c[l + 2]),
        (k[i + 2] = k[l + 2]),
        (c[i + 3] = c[l + 3]),
        (k[i + 3] = k[l + 3])),
      (i = 0));
  b = p;
  return i;
}
l9a.X = 1;
function m9a(a) {
  xe(a);
}
m9a.X = 1;
function kZ(a, d, e, f, g) {
  var h = b;
  b += 3;
  var i = h + 1,
    j = h + 2;
  XW(a);
  c[a] = l0 + 2;
  k[h] = 0;
  k[i] = 1;
  k[j] = 0;
  H(a + 1, h, i, j);
  c[a + 5] = g;
  c[a + 6] = f;
  c[a + 7] = d;
  c[a + 8] = e;
  c[a + 9] = Ie(d);
  c[a + 10] = Ie(e);
  k[a + 11] = v[c[c[d] + 11]](d);
  k[a + 12] = v[c[c[e] + 11]](e);
  c[a + 13] = 0;
  c[a + 15] = -1;
  c[a + 18] = 1;
  b = h;
}
kZ.X = 1;
function BWa(a, d, e, f, g, h, i, j, l) {
  var m = b;
  b += 3;
  var n = m + 1,
    p = m + 2;
  XW(a);
  c[a] = l0 + 2;
  k[m] = 0;
  k[n] = 1;
  k[p] = 0;
  H(a + 1, m, n, p);
  c[a + 5] = l;
  c[a + 6] = j;
  c[a + 7] = d;
  c[a + 8] = e;
  c[a + 9] = f;
  c[a + 10] = g;
  k[a + 11] = h;
  k[a + 12] = i;
  c[a + 13] = 0;
  c[a + 15] = -1;
  c[a + 18] = 1;
  b = m;
}
BWa.X = 1;
function gZ(a, d, e, f, g) {
  $5 = g & 1;
  n9a(a, d, e, f);
}
gZ.X = 1;
function o9a(a) {
  return 4 == (c[a] | 0);
}
o9a.X = 1;
function n9a(a, d, e, f) {
  var g = b;
  b += 141;
  var h,
    i = g + 4,
    j = g + 5,
    l = g + 6,
    m = g + 7,
    n = g + 11,
    p = g + 15,
    r = g + 31,
    s = g + 47,
    t = g + 51,
    w = g + 55,
    x = g + 56,
    y = g + 57,
    z = g + 58,
    A = g + 59,
    C = g + 60,
    B,
    K = g + 61,
    E = g + 65,
    G = g + 69,
    M = g + 73,
    L = g + 77,
    F = g + 81,
    I = g + 85,
    R = g + 89,
    O = g + 93,
    Z = g + 97,
    P = g + 98,
    S = g + 102,
    da = g + 103,
    V = g + 107,
    ba = g + 108,
    $ = g + 112,
    Y = g + 116,
    la = g + 120,
    ka = g + 121,
    ja = g + 125,
    ea = g + 129,
    ca = g + 133,
    W = g + 137;
  h = k[a + 14] = 0;
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  H(g, i, j, l);
  sQ(p, d);
  sQ(r, d + 16);
  wn(t, p + 12, r + 12);
  k[w] = 0.5;
  Q(s, t, w);
  JC(p + 12, s);
  JC(r + 12, s);
  i = (Gf(c[a + 7]) ? Gf(c[a + 8]) : 0) & 1;
  k[x] = k[a + 11];
  k[y] = k[a + 12];
  c[p9a] += 1;
  c[a + 13] & 1 && ((k[x] = 0), (k[y] = 0));
  c[a + 16] = 0;
  k[z] = 0;
  k[A] = 1;
  k[C] = 0;
  pe(a + 1, z, A, C);
  j = A = 0;
  c[a + 17] = 0;
  c[a + 15] = -1;
  C = 0xde0b6b000000000;
  z = k[x] + k[y];
  fZ(c[a + 6]);
  var l = a + 1,
    t = a + 1,
    w = a + 7,
    U = a + 8,
    X = a + 1,
    ma = a + 6,
    ga = a + 6,
    ha = a + 6,
    ta = a + 1,
    ra = a + 16,
    ua = a + 6;
  a: for (;;) {
    WP(E, l);
    rn(K, E, d);
    rn(G, t, d + 16);
    kf(M, c[w], K);
    kf(L, c[U], G);
    vw(F, p, M);
    vw(I, r, L);
    i & 1 && ((k[F + 2] = 0), (k[I + 2] = 0));
    N(R, F, I);
    var za = J(X, R);
    B = za;
    za = 0 < za;
    do {
      if (za && B * B > C * k[d + 32]) {
        c[a + 17] = 10;
        j = 1;
        break a;
      }
    } while (0);
    if (q9a(c[ma], R)) {
      j = c[a + 17] = 1;
      break;
    }
    B = C - B;
    if (B <= 9.999999974752427e-7 * C) {
      c[a + 17] = 0 >= B ? 2 : 11;
      j = 1;
      break;
    }
    r9a(c[ga], R, F, I);
    if (!s9a(c[ha], O)) {
      c[a + 17] = 3;
      j = 1;
      break;
    }
    if (9.999999974752427e-7 > Um(O)) {
      K = a + 1;
      c[K] = c[O];
      k[K] = k[O];
      c[K + 1] = c[O + 1];
      k[K + 1] = k[O + 1];
      c[K + 2] = c[O + 2];
      k[K + 2] = k[O + 2];
      c[K + 3] = c[O + 3];
      k[K + 3] = k[O + 3];
      c[a + 17] = 6;
      j = 1;
      break;
    }
    B = C;
    C = Um(O);
    if (B - C <= 1.1920928955078125e-7 * B) {
      j = 1;
      c[a + 17] = 12;
      break;
    }
    c[ta] = c[O];
    k[ta] = k[O];
    c[ta + 1] = c[O + 1];
    k[ta + 1] = k[O + 1];
    c[ta + 2] = c[O + 2];
    k[ta + 2] = k[O + 2];
    c[ta + 3] = c[O + 3];
    k[ta + 3] = k[O + 3];
    B = c[ra];
    c[ra] = B + 1;
    if (1e3 < (B | 0)) {
      break;
    }
    if (!((o9a(c[ua]) ^ 1) & 1)) {
      c[a + 17] = 13;
      break;
    }
  }
  j & 1 &&
    (t9a(c[a + 6], m, n),
    (O = a + 1),
    (c[g] = c[O]),
    (k[g] = k[O]),
    (c[g + 1] = c[O + 1]),
    (k[g + 1] = k[O + 1]),
    (c[g + 2] = c[O + 2]),
    (k[g + 2] = k[O + 2]),
    (c[g + 3] = c[O + 3]),
    (k[g + 3] = k[O + 3]),
    (O = Um(a + 1)),
    1e-4 > O && (c[a + 17] = 5),
    (K = O),
    1.4210854715202004e-14 < K
      ? ((k[Z] = 1 / ec(O)),
        LC(g, Z),
        (h = ec(C)),
        (k[S] = k[x] / h),
        Q(P, a + 1, S),
        JC(m, P),
        (k[V] = k[y] / h),
        Q(da, a + 1, V),
        xn(n, da),
        (h = 1 / k[Z] - z),
        (A = 1),
        (c[a + 15] = 1))
      : (c[a + 15] = 2));
  Z =
    (0 != (c[a + 18] | 0)
      ? 0 == (c[a + 5] | 0) ? 0 : 0 == (c[a + 17] | 0) ? 0 : 0.01 > h + z
      : 0) & 1;
  a: do {
    if ((!(A & 1) || Z & 1) && 0 != (c[a + 5] | 0)) {
      if (
        ((c[u9a] += 1),
        EC(a + 1),
        (P = c[a + 5]),
        v[c[c[P] + 2]](
          P,
          c[a + 6],
          c[a + 7],
          c[a + 8],
          p,
          r,
          a + 1,
          ba,
          $,
          f,
          c[d + 33]
        ) & 1)
      ) {
        if (
          (N(Y, $, ba),
          (S = P = Um(Y)),
          1.4210854715202004e-14 >= S &&
            ((P = Y),
            (S = a + 1),
            (c[P] = c[S]),
            (k[P] = k[S]),
            (c[P + 1] = c[S + 1]),
            (k[P + 1] = k[S + 1]),
            (c[P + 2] = c[S + 2]),
            (k[P + 2] = k[S + 2]),
            (c[P + 3] = c[S + 3]),
            (k[P + 3] = k[S + 3]),
            (P = S = Um(a + 1))),
          1.4210854715202004e-14 < S)
        ) {
          k[la] = ec(P);
          KB(Y, la);
          N(ka, ba, $);
          P = -JB(ka);
          S = A & 1;
          do {
            if (S && P >= h) {
              c[a + 15] = 8;
              break a;
            }
          } while (0);
          h = P;
          A = m;
          P = ba;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          A = n;
          P = $;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          A = g;
          P = Y;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          A = 1;
          c[a + 15] = 3;
        } else {
          c[a + 15] = 9;
        }
      } else {
        if (0 < Um(a + 1)) {
          N(ja, ba, $);
          P = JB(ja) - z;
          S = A & 1;
          do {
            if (S && P >= h) {
              c[a + 15] = 5;
              break a;
            }
          } while (0);
          h = P;
          A = m;
          P = ba;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          A = n;
          P = $;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          Q(ea, a + 1, x);
          JC(m, ea);
          Q(ca, a + 1, y);
          xn(n, ca);
          A = g;
          P = a + 1;
          c[A] = c[P];
          k[A] = k[P];
          c[A + 1] = c[P + 1];
          k[A + 1] = k[P + 1];
          c[A + 2] = c[P + 2];
          k[A + 2] = k[P + 2];
          c[A + 3] = c[P + 3];
          k[A + 3] = k[P + 3];
          IB(g);
          A = 1;
          c[a + 15] = 6;
        }
      }
    }
  } while (0);
  if (A & 1 && (0 > h || h * h < k[d + 32])) {
    (d = a + 1),
      (c[d] = c[g]),
      (k[d] = k[g]),
      (c[d + 1] = c[g + 1]),
      (k[d + 1] = k[g + 1]),
      (c[d + 2] = c[g + 2]),
      (k[d + 2] = k[g + 2]),
      (c[d + 3] = c[g + 3]),
      (k[d + 3] = k[g + 3]),
      (k[a + 14] = h),
      (a = c[c[e] + 4]),
      wn(W, n, s),
      v[a](e, g, W, h);
  }
  b = g;
}
n9a.X = 1;
function v9a(a) {
  xe(a);
}
v9a.X = 1;
function vJ(a, d, e, f, g, h, i, j, l, m) {
  m &= 1;
  cZ(a);
  c[a] = m0 + 2;
  w9a(a, d, e, f, g, h, i, j, l, m & 1);
}
vJ.X = 1;
function w9a(a, d, e, f, g, h, i, j, l, m) {
  var n = b;
  b += 18;
  var p = n + 1,
    r = n + 2,
    s = n + 3,
    t = n + 4,
    w = n + 5,
    x = n + 6,
    y = n + 7,
    z = n + 8,
    A = n + 9,
    C = n + 13,
    B = n + 14;
  c[a + 1] = 24;
  c[a + 16] = d;
  c[a + 17] = e;
  k[a + 18] = h;
  k[a + 19] = i;
  k[a + 20] = (d - 1) | 0;
  k[a + 21] = (e - 1) | 0;
  k[a + 22] = g;
  c[a + 23] = f;
  c[a + 24] = l;
  c[a + 25] = m & 1;
  c[a + 26] = 0;
  c[a + 27] = j;
  k[n] = 1;
  k[p] = 1;
  k[r] = 1;
  pe(a + 28, n, p, r);
  d = c[a + 27];
  0 == (d | 0)
    ? ((k[s] = 0),
      (k[t] = 0),
      pe(a + 4, a + 18, s, t),
      pe(a + 8, a + 19, a + 20, a + 21))
    : 1 == (d | 0)
      ? ((k[w] = 0),
        (k[x] = 0),
        pe(a + 4, w, a + 18, x),
        pe(a + 8, a + 20, a + 19, a + 21))
      : 2 == (d | 0) &&
        ((k[y] = 0),
        (k[z] = 0),
        pe(a + 4, y, z, a + 18),
        pe(a + 8, a + 20, a + 21, a + 19));
  k[C] = 0.5;
  wn(B, a + 4, a + 8);
  Q(A, B, C);
  a += 12;
  c[a] = c[A];
  k[a] = k[A];
  c[a + 1] = c[A + 1];
  k[a + 1] = k[A + 1];
  c[a + 2] = c[A + 2];
  k[a + 2] = k[A + 2];
  c[a + 3] = c[A + 3];
  k[a + 3] = k[A + 3];
  b = n;
}
w9a.X = 1;
function tJ(a, d, e, f, g, h, i, j) {
  i &= 1;
  j &= 1;
  cZ(a);
  c[a] = m0 + 2;
  w9a(a, d, e, f, g / 65535, 0, g, h, i & 1 ? 0 : 5, j & 1);
}
tJ.X = 1;
function x9a(a) {
  xe(a);
}
x9a.X = 1;
function y9a() {
  return D.Be;
}
y9a.X = 1;
function n0(a) {
  return 0 > a ? (a - 0.5) & -1 : (a + 0.5) & -1;
}
n0.X = 1;
function z9a(a, d, e) {
  var f;
  f = 0;
  var g = c[a + 24];
  0 == (g | 0)
    ? (f = k[c[a + 23] + c[a + 16] * e + d])
    : 5 == (g | 0)
      ? (f = ((c[c[a + 23] + c[a + 16] * e + d] & 255) | 0) * k[a + 22])
      : 3 == (g | 0) &&
        (f =
          (((c[c[a + 23] + c[a + 16] * e + d] << 16) >> 16) | 0) * k[a + 22]);
  return f;
}
z9a.X = 1;
function A9a(a) {
  return a + 28;
}
A9a.X = 1;
function B9a() {}
B9a.X = 1;
function C9a(a, d, e, f) {
  var g = b;
  b += 58;
  var h = g + 4,
    i = g + 8,
    j = g + 12,
    l = g + 13,
    m = g + 17,
    n = g + 18,
    p = g + 19,
    r = g + 20,
    s = g + 32,
    t = g + 36,
    w = g + 40,
    x = g + 41,
    y = g + 42,
    z = g + 43,
    A = g + 47,
    C = g + 48,
    B = g + 49,
    K = g + 50,
    E = g + 54;
  N(i, a + 8, a + 4);
  ig(h, i, a + 28);
  k[j] = 0.5;
  Q(g, h, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  k[l + c[a + 27]] = 0.5 * (k[a + 18] + k[a + 19]);
  JL(l, a + 28);
  qc(r, d);
  d += 12;
  c[s] = c[d];
  k[s] = k[d];
  c[s + 1] = c[d + 1];
  k[s + 1] = k[d + 1];
  c[s + 2] = c[d + 2];
  k[s + 2] = k[d + 2];
  c[s + 3] = c[d + 3];
  k[s + 3] = k[d + 3];
  k[w] = J(0 + r, g);
  k[x] = J(4 + r, g);
  k[y] = J(8 + r, g);
  H(t, w, x, y);
  k[A] = v[c[c[a] + 11]](a);
  k[C] = v[c[c[a] + 11]](a);
  k[B] = v[c[c[a] + 11]](a);
  H(z, A, C, B);
  xn(t, z);
  N(K, s, t);
  c[e] = c[K];
  k[e] = k[K];
  c[e + 1] = c[K + 1];
  k[e + 1] = k[K + 1];
  c[e + 2] = c[K + 2];
  k[e + 2] = k[K + 2];
  c[e + 3] = c[K + 3];
  k[e + 3] = k[K + 3];
  wn(E, s, t);
  c[f] = c[E];
  k[f] = k[E];
  c[f + 1] = c[E + 1];
  k[f + 1] = k[E + 1];
  c[f + 2] = c[E + 2];
  k[f + 2] = k[E + 2];
  c[f + 3] = c[E + 3];
  k[f + 3] = k[E + 3];
  b = g;
}
C9a.X = 1;
function o0(a, d, e, f) {
  var g = b;
  b += 9;
  var h,
    i = g + 1,
    j = g + 2,
    l = g + 3,
    m = g + 4,
    n = g + 5,
    p = g + 6,
    r = g + 7,
    s = g + 8;
  h = v[c[c[a] + 16]](a, d, e);
  var t = c[a + 27];
  0 == (t | 0)
    ? ((k[g] = h - k[a + 12]),
      (k[i] = -k[a + 20] / 2 + (d | 0)),
      (k[j] = -k[a + 21] / 2 + (e | 0)),
      pe(f, g, i, j))
    : 1 == (t | 0)
      ? ((k[l] = -k[a + 20] / 2 + (d | 0)),
        (k[m] = h - k[a + 12 + 1]),
        (k[n] = -k[a + 21] / 2 + (e | 0)),
        pe(f, l, m, n))
      : 2 == (t | 0) &&
        ((k[p] = -k[a + 20] / 2 + (d | 0)),
        (k[r] = -k[a + 21] / 2 + (e | 0)),
        (k[s] = h - k[a + 12 + 2]),
        pe(f, p, r, s));
  JL(f, a + 28);
  b = g;
}
o0.X = 1;
function D9a(a, d, e, f) {
  var g = b;
  b += 4;
  $5 = f;
  c[g] = c[e];
  k[g] = k[e];
  c[g + 1] = c[e + 1];
  k[g + 1] = k[e + 1];
  c[g + 2] = c[e + 2];
  k[g + 2] = k[e + 2];
  c[g + 3] = c[e + 3];
  k[g + 3] = k[e + 3];
  gp(g, a + 4);
  hp(g, a + 8);
  c[d] = n0(k[g]);
  c[d + 1] = n0(k[g + 1]);
  c[d + 2] = n0(k[g + 2]);
  b = g;
}
D9a.X = 1;
function E9a(a, d, e, f) {
  var g = b;
  b += 40;
  var h,
    i = g + 4,
    j = g + 8,
    l = g + 9,
    m = g + 10,
    n = g + 11,
    p = g + 15,
    r = g + 19,
    s = g + 20,
    t = g + 21,
    w = g + 22,
    x = g + 25,
    y = g + 28;
  k[j] = 1 / k[a + 28];
  k[l] = 1 / k[a + 28 + 1];
  k[m] = 1 / k[a + 28 + 2];
  H(i, j, l, m);
  ig(g, e, i);
  k[r] = 1 / k[a + 28];
  k[s] = 1 / k[a + 28 + 1];
  k[t] = 1 / k[a + 28 + 2];
  H(p, r, s, t);
  ig(n, f, p);
  xn(g, a + 12);
  xn(n, a + 12);
  D9a(a, w, g, 0);
  D9a(a, x, n, 1);
  for (
    e = 0;
    !((f = w + e),
    (c[f] -= 1),
    (f = x + e),
    (c[f] += 1),
    (e = f = e + 1),
    3 <= (f | 0));

  ) {}
  e = 0;
  f = c[a + 16] - 1;
  j = 0;
  i = c[a + 17] - 1;
  l = c[a + 27];
  0 == (l | 0)
    ? ((c[w + 1] | 0) > (e | 0) && (e = c[w + 1]),
      (c[x + 1] | 0) < (f | 0) && (f = c[x + 1]),
      (c[w + 2] | 0) > (j | 0) && (j = c[w + 2]),
      (c[x + 2] | 0) < (i | 0) && (i = c[x + 2]))
    : 1 == (l | 0)
      ? ((c[w] | 0) > (e | 0) && (e = c[w]),
        (c[x] | 0) < (f | 0) && (f = c[x]),
        (c[w + 2] | 0) > (j | 0) && (j = c[w + 2]),
        (c[x + 2] | 0) < (i | 0) && (i = c[x + 2]))
      : 2 == (l | 0) &&
        ((c[w] | 0) > (e | 0) && (e = c[w]),
        (c[x] | 0) < (f | 0) && (f = c[x]),
        (c[w + 1] | 0) > (j | 0) && (j = c[w + 1]),
        (c[x + 1] | 0) < (i | 0) && (i = c[x + 1]));
  w = j;
  j = (w | 0) < (i | 0);
  a: do {
    if (j) {
      for (
        var l = a + 25,
          m = y,
          n = y + 4,
          p = y + 8,
          s = (r = y),
          t = y + 4,
          z = y + 8,
          A = y,
          C = a + 26,
          B = y,
          K = y + 4,
          E = y + 8,
          G = y,
          M = y,
          L = y + 4,
          F = y + 8,
          I = y;
        ;

      ) {
        var x = e,
          R = (x | 0) < (f | 0);
        b: do {
          if (R) {
            for (;;) {
              if (
                (c[l] & 1
                  ? (h = 35)
                  : c[C] & 1 && 0 == (((x + w) & 1) | 0)
                    ? (h = 35)
                    : (o0(a, x, w, B),
                      o0(a, x, w + 1, K),
                      o0(a, x + 1, w, E),
                      (h = d),
                      v[c[c[h] + 2]](h, G, x, w),
                      o0(a, x + 1, w, M),
                      o0(a, x, w + 1, L),
                      o0(a, x + 1, w + 1, F),
                      (h = d),
                      v[c[c[h] + 2]](h, I, x, w),
                      (h = 37)),
                35 == h &&
                  (o0(a, x, w, m),
                  o0(a, x + 1, w, n),
                  o0(a, x + 1, w + 1, p),
                  (h = d),
                  v[c[c[h] + 2]](h, r, x, w),
                  o0(a, x, w, s),
                  o0(a, x + 1, w + 1, t),
                  o0(a, x, w + 1, z),
                  (h = d),
                  v[c[c[h] + 2]](h, A, x, w)),
                (x += 1),
                (x | 0) >= (f | 0))
              ) {
                break b;
              }
            }
          }
        } while (0);
        w += 1;
        if ((w | 0) >= (i | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
E9a.X = 1;
function F9a(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  $2 = a;
  $3 = d;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  b = f;
}
F9a.X = 1;
function G9a(a, d) {
  var e = a + 28;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
G9a.X = 1;
function H9a() {}
H9a.X = 1;
function I9a(a, d, e) {
  var f = b;
  b += 12;
  var g = f + 4,
    h = f + 8;
  c[f] = c[a];
  k[f] = k[a];
  c[f + 1] = c[a + 1];
  k[f + 1] = k[a + 1];
  c[f + 2] = c[a + 2];
  k[f + 2] = k[a + 2];
  c[f + 3] = c[a + 3];
  k[f + 3] = k[a + 3];
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  c[h] = c[e];
  k[h] = k[e];
  c[h + 1] = c[e + 1];
  k[h + 1] = k[e + 1];
  c[h + 2] = c[e + 2];
  k[h + 2] = k[e + 2];
  c[h + 3] = c[e + 3];
  k[h + 3] = k[e + 3];
  a = ee(J(h, f), J(h, g));
  b = f;
  return a;
}
I9a.X = 1;
function J9a(a, d) {
  var e;
  e = K9a(a, d);
  return -1 == (e | 0) ? 0 : RV(a + 10, e);
}
J9a.X = 1;
function K9a(a, d) {
  var e;
  e = (xW(a + 10) - 1) & SL(d);
  if (e >>> 0 >= rW(a) >>> 0) {
    e = -1;
  } else {
    var f = c[sW(a, e)];
    e = f;
    for (
      var g = a + 15, h = a + 5;
      -1 != (f | 0) && 0 == ((cM(d, DKa(g, e)) & 1) | 0);

    ) {
      e = f = c[sW(h, e)];
    }
  }
  return e;
}
K9a.X = 1;
function L9a(a) {
  xe(a);
}
L9a.X = 1;
function M9a(a, d, e) {
  var f, g, h;
  f = (xW(a + 10) - 1) & SL(d);
  g = K9a(a, d);
  h = a + 10;
  -1 != (g | 0)
    ? ((a = RV(h, g)),
      (c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]),
      (c[a + 2] = c[e + 2]),
      (k[a + 2] = k[e + 2]),
      (c[a + 3] = c[e + 3]),
      (k[a + 3] = k[e + 3]))
    : ((g = tW(h)),
      (h = xW(a + 10)),
      N9a(a + 10, e),
      O9a(a + 15, d),
      (h | 0) < (xW(a + 10) | 0) && (P9a(a, d), (f = (xW(a + 10) - 1) & SL(d))),
      (c[QV(a + 5, g)] = c[QV(a, f)]),
      (c[QV(a, f)] = g));
}
M9a.X = 1;
function Q9a(a, d, e, f) {
  var g = b;
  b += 206;
  var h = g + 3,
    i = g + 6,
    j = g + 10,
    l = g + 14,
    m = g + 18,
    n = g + 22,
    p = g + 26,
    r,
    s,
    t = g + 30,
    w = g + 34,
    x = g + 35,
    y = g + 39,
    z = g + 40,
    A = g + 41,
    C = g + 45,
    B,
    K = g + 71,
    E = g + 97,
    G = g + 101,
    M = g + 105,
    L = g + 109,
    F = g + 113,
    I = g + 117,
    R = g + 118,
    O = g + 122,
    Z = g + 126,
    P = g + 130,
    S = g + 131,
    da = g + 135,
    V,
    ba = g + 139,
    $ = g + 143,
    Y = g + 147,
    la = g + 148,
    ka = g + 152,
    ja = g + 164,
    ea = g + 168,
    ca = g + 172,
    W = g + 173,
    U = g + 177,
    X = g + 178,
    ma = g + 182,
    ga = g + 186,
    ha = g + 187,
    ta = g + 191,
    ra = g + 192,
    ua = g + 196,
    za = g + 200,
    Za = g + 201,
    ib = g + 205,
    e = (c[a + 1] | 0) == (e | 0) ? ((c[a + 2] | 0) == (f | 0) ? 49 : 4) : 4;
  a: do {
    if (
      4 == e &&
      ((f = 0),
      (r = g),
      (c[r] = -1),
      (k[r] = -1),
      (c[r + 1] = -1),
      (k[r + 1] = -1),
      (c[r + 2] = -1),
      (k[r + 2] = -1),
      (r = h),
      (c[r] = -1),
      (k[r] = -1),
      (c[r + 1] = -1),
      (k[r + 1] = -1),
      (c[r + 2] = -1),
      (k[r + 2] = -1),
      N(i, d + 4, d),
      N(j, d + 8, d),
      qn(l, i, j),
      Um(l) >= k[c[a + 4] + 23] &&
        (N(m, c[a + 3] + 4, c[a + 3]),
        N(n, c[a + 3] + 8, c[a + 3]),
        qn(p, m, n),
        Um(p) >= k[c[a + 4] + 23]))
    ) {
      r = 0;
      B = a + 3;
      V = a + 4;
      for (s = 0; 3 > (s | 0); ) {
        for (var Ca = (s = 0); 3 > (Ca | 0); ) {
          N(t, (r << 2) + c[B], (s << 2) + d);
          if (
            Um(t) < k[c[V] + 23] &&
            ((c[g + f] = r), (c[h + f] = s), (f += 1), 3 <= (f | 0))
          ) {
            break a;
          }
          s = Ca = s + 1;
        }
        if (3 <= (f | 0)) {
          break a;
        }
        r = s = r + 1;
      }
      2 == (f | 0) &&
        (0 == (c[g] | 0) &&
          2 == (c[g + 1] | 0) &&
          ((c[g] = 2),
          (c[g + 1] = 0),
          (f = c[h + 1]),
          (c[h + 1] = c[h]),
          (c[h] = f)),
        (r = (c[a + 1] << 21) | c[a + 2]),
        (f = c[a + 4] + 4),
        (c[w] = r),
        (f = B = J9a(f, w)),
        0 == (B | 0) &&
          (cE(x),
          (f = c[a + 4] + 4),
          (c[y] = r),
          M9a(f, y, x),
          (f = c[a + 4] + 4),
          (c[z] = r),
          (f = J9a(f, z))),
        (r = c[g + 1] + c[g]),
        N(A, (c[g + 1] << 2) + c[a + 3], (c[g] << 2) + c[a + 3]),
        sZ(C, c[a + 3], c[a + 3] + 4, c[a + 3] + 8),
        (B = -c[h] + -c[h + 1] + 3),
        sZ(K, (c[h + 1] << 2) + d, (c[h] << 2) + d, (B << 2) + d),
        tZ(C, E),
        tZ(K, G),
        IB(A),
        qn(L, A, E),
        (V = M),
        (s = IB(L)),
        (c[V] = c[s]),
        (k[V] = k[s]),
        (c[V + 1] = c[s + 1]),
        (k[V + 1] = k[s + 1]),
        (c[V + 2] = c[s + 2]),
        (k[V + 2] = k[s + 2]),
        (c[V + 3] = c[s + 3]),
        (k[V + 3] = k[s + 3]),
        N(F, ((3 - r) << 2) + c[a + 3], (c[g] << 2) + c[a + 3]),
        0 > J(M, F) && ((k[I] = -1), LC(M, I)),
        qn(O, A, G),
        (V = R),
        (s = IB(O)),
        (c[V] = c[s]),
        (k[V] = k[s]),
        (c[V + 1] = c[s + 1]),
        (k[V + 1] = k[s + 1]),
        (c[V + 2] = c[s + 2]),
        (k[V + 2] = k[s + 2]),
        (c[V + 3] = c[s + 3]),
        (k[V + 3] = k[s + 3]),
        N(Z, (B << 2) + d, (c[h] << 2) + d),
        0 > J(R, Z) && ((k[P] = -1), LC(R, P)),
        qn(S, M, R),
        (s = Um(S)),
        (B = 0),
        (V = da),
        (Ca = E),
        (c[V] = c[Ca]),
        (k[V] = k[Ca]),
        (c[V + 1] = c[Ca + 1]),
        (k[V + 1] = k[Ca + 1]),
        (c[V + 2] = c[Ca + 2]),
        (k[V + 2] = k[Ca + 2]),
        (c[V + 3] = c[Ca + 3]),
        (k[V + 3] = k[Ca + 3]),
        (V = 0),
        s < k[c[a + 4] + 22] ||
          (IB(S),
          qn(ba, S, M),
          IB(ba),
          (B = I9a(ba, M, R)),
          (B = 3.1415927410125732 - B),
          (V = (0 > J(E, R)) & 1),
          (B = V & 1 ? B : -B),
          (k[Y] = -B),
          IV($, S, Y),
          zb(ka, $),
          Bo(la, ka, E),
          (s = da),
          (Ca = la),
          (c[s] = c[Ca]),
          (k[s] = k[Ca]),
          (c[s + 1] = c[Ca + 1]),
          (k[s + 1] = k[Ca + 1]),
          (c[s + 2] = c[Ca + 2]),
          (k[s + 2] = k[Ca + 2]),
          (c[s + 3] = c[Ca + 3]),
          (k[s + 3] = k[Ca + 3])),
        1 == (r | 0)
          ? (N(ja, c[a + 3], c[a + 3] + 4),
            (k[ca] = -B),
            IV(ea, ja, ca),
            tw(W, ea, E),
            0 > J(W, G) && ((k[U] = -1), LC(W, U), (r = f), (c[r] |= 8)),
            (k[f + 1] = -B),
            V & 1 && (c[f] |= 1))
          : 2 == (r | 0)
            ? (N(X, c[a + 3] + 8, c[a + 3]),
              (k[ga] = -B),
              IV(ma, X, ga),
              tw(ha, ma, E),
              0 > J(ha, G) && ((k[ta] = -1), LC(ha, ta), (r = f), (c[r] |= 32)),
              (k[f + 3] = -B),
              V & 1 && (c[f] |= 4))
            : 3 == (r | 0) &&
              (N(ra, c[a + 3] + 4, c[a + 3] + 8),
              (k[za] = -B),
              IV(ua, ra, za),
              tw(Za, ua, E),
              0 > J(Za, G) && ((r = f), (c[r] |= 16), (k[ib] = -1), LC(Za, ib)),
              (k[f + 2] = -B),
              V & 1 && (c[f] |= 2)),
        ($30 = 8),
        EX(K),
        EX(C));
    }
  } while (0);
  b = g;
}
Q9a.X = 1;
function R9a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
R9a.X = 1;
function S9a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
S9a.X = 1;
function N9a(a, d) {
  (tW(a) | 0) == (xW(a) | 0) && PKa(a, S9a(a, tW(a)));
  var e = (c[a + 1] << 2) + c[a + 3];
  0 != (e | 0) &&
    ((c[e] = c[d]),
    (k[e] = k[d]),
    (c[e + 1] = c[d + 1]),
    (k[e + 1] = k[d + 1]),
    (c[e + 2] = c[d + 2]),
    (k[e + 2] = k[d + 2]),
    (c[e + 3] = c[d + 3]),
    (k[e + 3] = k[d + 3]));
  e = a + 1;
  c[e] += 1;
}
N9a.X = 1;
function O9a(a, d) {
  (uW(a) | 0) == (KKa(a) | 0) && QKa(a, R9a(a, uW(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && ((c[e] = c[d]), (k[e] = k[d]));
  e = a + 1;
  c[e] += 1;
}
O9a.X = 1;
function P9a(a, d) {
  var e = b;
  b += 2;
  var f,
    g,
    h = e + 1,
    i,
    j;
  $3 = d;
  f = xW(a + 10);
  var l = (rW(a) | 0) < (f | 0);
  a: do {
    if (l) {
      g = rW(a);
      c[e] = 0;
      PV(a, f, e);
      c[h] = 0;
      PV(a + 5, f, h);
      i = 0;
      j = (i | 0) < (f | 0);
      b: do {
        if (j) {
          for (var m = a; ; ) {
            if (((c[QV(m, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      j = (i | 0) < (f | 0);
      b: do {
        if (j) {
          for (m = a + 5; ; ) {
            if (((c[QV(m, i)] = -1), (i += 1), (i | 0) >= (f | 0))) {
              break b;
            }
          }
        }
      } while (0);
      i = 0;
      if ((i | 0) < (g | 0)) {
        for (var m = a + 15, n = a + 10, p = a, r = a + 5, s = a; ; ) {
          if (
            ((j = (xW(n) - 1) & SL(QHa(m, i))),
            (c[QV(r, i)] = c[QV(p, j)]),
            (c[QV(s, j)] = i),
            (i += 1),
            (i | 0) >= (g | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = e;
}
P9a.X = 1;
function AI(a, d, e) {
  FW(a);
  c[a] = HW + 2;
  c[a + 1] = 0;
  c[a + 34] = d;
  c[a + 35] = e;
  var f = a + 36;
  c[f] = -1;
  k[f] = -1;
  c[f + 1] = -1;
  k[f + 1] = -1;
  c[f + 2] = -1;
  k[f + 2] = -1;
  c[f + 3] = -1;
  k[f + 3] = -1;
  xi(a + 2, d + 1);
  xi(a + 18, e + 1);
}
AI.X = 1;
function p0(a, d, e, f) {
  var g = b;
  b += 102;
  var h = g + 1,
    i = g + 5,
    j = g + 9,
    l = g + 13,
    m = g + 17,
    n = g + 21,
    p = g + 25,
    r = g + 29,
    s = g + 33;
  k[g] = f;
  if (
    k[g] <= ck(c[a + 1]) &&
    ((f = (($j(c[a + 1]) | 0) != (c[a + 34] | 0)) & 1),
    Q(i, d, g),
    wn(h, e, i),
    f & 1
      ? (kQ(m, a + 18, h),
        (c[j] = c[m]),
        (k[j] = k[m]),
        (c[j + 1] = c[m + 1]),
        (k[j + 1] = k[m + 1]),
        (c[j + 2] = c[m + 2]),
        (k[j + 2] = k[m + 2]),
        (c[j + 3] = c[m + 3]),
        (k[j + 3] = k[m + 3]),
        kQ(n, a + 2, e),
        (c[l] = c[n]),
        (k[l] = k[n]),
        (c[l + 1] = c[n + 1]),
        (k[l + 1] = k[n + 1]),
        (c[l + 2] = c[n + 2]),
        (k[l + 2] = k[n + 2]),
        (c[l + 3] = c[n + 3]),
        (k[l + 3] = k[n + 3]))
      : (kQ(p, a + 2, h),
        (c[j] = c[p]),
        (k[j] = k[p]),
        (c[j + 1] = c[p + 1]),
        (k[j + 1] = k[p + 1]),
        (c[j + 2] = c[p + 2]),
        (k[j + 2] = k[p + 2]),
        (c[j + 3] = c[p + 3]),
        (k[j + 3] = k[p + 3]),
        kQ(r, a + 18, e),
        (c[l] = c[r]),
        (k[l] = k[r]),
        (c[l + 1] = c[r + 1]),
        (k[l + 1] = k[r + 1]),
        (c[l + 2] = c[r + 2]),
        (k[l + 2] = k[r + 2]),
        (c[l + 3] = c[r + 3]),
        (k[l + 3] = k[r + 3])),
    EU(s, j, l, d, k[g]),
    (d = s + 12),
    (c[d] = c[h]),
    (k[d] = k[h]),
    (c[d + 1] = c[h + 1]),
    (k[d + 1] = k[h + 1]),
    (c[d + 2] = c[h + 2]),
    (k[d + 2] = k[h + 2]),
    (c[d + 3] = c[h + 3]),
    (k[d + 3] = k[h + 3]),
    (h = s + 8),
    (c[h] = c[e]),
    (k[h] = k[e]),
    (c[h + 1] = c[e + 1]),
    (k[h + 1] = k[e + 1]),
    (c[h + 2] = c[e + 2]),
    (k[h + 2] = k[e + 2]),
    (c[h + 3] = c[e + 3]),
    (k[h + 3] = k[e + 3]),
    (e = Ak(c[a + 1], s)),
    (k[s + 21] = T9a(c[a + 34], c[a + 35])),
    (k[s + 22] = U9a(c[a + 34], c[a + 35])),
    f & 1
      ? ((c[s + 23] = c[a + 37]),
        (c[s + 24] = c[a + 36]),
        (c[s + 25] = c[a + 39]),
        (c[s + 26] = c[a + 38]))
      : ((c[s + 23] = c[a + 36]),
        (c[s + 24] = c[a + 37]),
        (c[s + 25] = c[a + 38]),
        (c[s + 26] = c[a + 39])),
    (h = c[a + 1]),
    0 <= (e | 0) ? Ek(h, s, e) : (e = zk(h, s)),
    0 != (c[V9a] | 0) &&
      !(0 == (($h(c[a + 34]) & 8) | 0) && 0 == (($h(c[a + 35]) & 8) | 0)))
  ) {
    v[c[V9a]](
      c[a + 1] + 69 * e + 1,
      f & 1 ? c[a + 35] : c[a + 34],
      c[s + 23],
      c[s + 25],
      f & 1 ? c[a + 34] : c[a + 35],
      c[s + 24],
      c[s + 26]
    );
  }
  b = g;
}
p0.X = 1;
function T9a(a, d) {
  var e;
  e = Nh(a) * Nh(d);
  $MAX_FRICTION = 10;
  var f = e;
  -10 > f ? (e = -10) : 10 < f && (e = 10);
  return e;
}
T9a.X = 1;
function U9a(a, d) {
  return di(a) * di(d);
}
U9a.X = 1;
function W9a(a) {
  xe(a);
}
W9a.X = 1;
function X9a(a, d, e, f, g, h, i, j, l, m, n) {
  var p = b;
  b += 1220;
  var r,
    s,
    t,
    w = p + 4,
    x = p + 5,
    y = p + 6,
    z = p + 7,
    A = p + 11,
    C = p + 15,
    B = p + 19,
    K = p + 23,
    E = p + 27,
    G = p + 31,
    M = p + 35,
    L = p + 39,
    F = p + 43,
    I = p + 291,
    R = p + 539,
    O = p + 787,
    Z,
    P,
    S = p + 1035,
    da = p + 1039,
    V = p + 1043,
    ba = p + 1047,
    $,
    Y = p + 1051,
    la = p + 1055,
    ka = p + 1059,
    ja = p + 1063,
    ea = p + 1067,
    ca,
    W = p + 1071,
    U = p + 1075,
    X = p + 1079,
    ma = p + 1083,
    ga = p + 1087,
    ha = p + 1091,
    ta = p + 1095,
    ra = p + 1099,
    ua = p + 1103,
    za,
    Za = p + 1107,
    ib = p + 1111,
    Ca = p + 1112,
    Sa = p + 1116,
    mb = p + 1117,
    Oa = p + 1136,
    Pa = p + 1137,
    fc = p + 1141,
    jb = p + 1175,
    La = p + 1179,
    fb = p + 1195,
    Rb = p + 1206,
    pb = p + 1210,
    Sb = p + 1211,
    ab = p + 1212,
    Ib = p + 1216;
  $2 = a;
  $12 = n;
  s = (Gf(e) ? Gf(f) : 0) & 1;
  t = 0xde0b6b000000000;
  k[w] = 0;
  k[x] = 0;
  k[y] = 0;
  H(p, w, x, y);
  for (var Fc = F + 248, Ac = F; ; ) {
    var ob = Ac + 4;
    if ((ob | 0) == (Fc | 0)) {
      break;
    }
    Ac = ob;
  }
  for (var Gc = I + 248, Yc = I; ; ) {
    var Cc = Yc + 4;
    if ((Cc | 0) == (Gc | 0)) {
      break;
    }
    Yc = Cc;
  }
  for (var Ub = R + 248, Uc = R; ; ) {
    var nd = Uc + 4;
    if ((nd | 0) == (Ub | 0)) {
      break;
    }
    Uc = nd;
  }
  for (var Ic = O + 248, tc = O; ; ) {
    var hd = tc + 4;
    if ((hd | 0) == (Ic | 0)) {
      break;
    }
    tc = hd;
  }
  P = 42;
  Z = 0;
  var Tb = (Z | 0) < (P | 0);
  a: do {
    if (Tb) {
      for (var Jc = S, ub = da, uc = ba; ; ) {
        q0();
        var Kc = (Z << 2) + r0;
        c[Jc] = c[Kc];
        k[Jc] = k[Kc];
        c[Jc + 1] = c[Kc + 1];
        k[Jc + 1] = k[Kc + 1];
        c[Jc + 2] = c[Kc + 2];
        k[Jc + 2] = k[Kc + 2];
        c[Jc + 3] = c[Kc + 3];
        k[Jc + 3] = k[Kc + 3];
        WP(V, S);
        rn(da, V, g);
        var gb = (Z << 2) + R;
        c[gb] = c[ub];
        k[gb] = k[ub];
        c[gb + 1] = c[ub + 1];
        k[gb + 1] = k[ub + 1];
        c[gb + 2] = c[ub + 2];
        k[gb + 2] = k[ub + 2];
        c[gb + 3] = c[ub + 3];
        k[gb + 3] = k[ub + 3];
        rn(ba, S, h);
        var gc = (Z << 2) + O;
        c[gc] = c[uc];
        k[gc] = k[uc];
        c[gc + 1] = c[uc + 1];
        k[gc + 1] = k[uc + 1];
        c[gc + 2] = c[uc + 2];
        k[gc + 2] = k[uc + 2];
        c[gc + 3] = c[uc + 3];
        k[gc + 3] = k[uc + 3];
        Z += 1;
        if ((Z | 0) >= (P | 0)) {
          break a;
        }
      }
    }
  } while (0);
  var Lc = v[c[c[e] + 19]](e),
    Dc = 0 != (Lc | 0);
  a: do {
    if (Dc && (($ = 0), ($ | 0) < (Lc | 0))) {
      for (var Eb = Y, Ra = la, qb = Y, Ab = ka, hc = ea; ; ) {
        var Hc = e;
        v[c[c[Hc] + 20]](Hc, $, Y);
        Bo(la, g, Y);
        c[Eb] = c[Ra];
        k[Eb] = k[Ra];
        c[Eb + 1] = c[Ra + 1];
        k[Eb + 1] = k[Ra + 1];
        c[Eb + 2] = c[Ra + 2];
        k[Eb + 2] = k[Ra + 2];
        c[Eb + 3] = c[Ra + 3];
        k[Eb + 3] = k[Ra + 3];
        q0();
        var ic = (P << 2) + r0;
        c[ic] = c[qb];
        k[ic] = k[qb];
        c[ic + 1] = c[qb + 1];
        k[ic + 1] = k[qb + 1];
        c[ic + 2] = c[qb + 2];
        k[ic + 2] = k[qb + 2];
        c[ic + 3] = c[qb + 3];
        k[ic + 3] = k[qb + 3];
        WP(ja, Y);
        rn(ka, ja, g);
        var db = (P << 2) + R;
        c[db] = c[Ab];
        k[db] = k[Ab];
        c[db + 1] = c[Ab + 1];
        k[db + 1] = k[Ab + 1];
        c[db + 2] = c[Ab + 2];
        k[db + 2] = k[Ab + 2];
        c[db + 3] = c[Ab + 3];
        k[db + 3] = k[Ab + 3];
        rn(ea, Y, h);
        var bb = (P << 2) + O;
        c[bb] = c[hc];
        k[bb] = k[hc];
        c[bb + 1] = c[hc + 1];
        k[bb + 1] = k[hc + 1];
        c[bb + 2] = c[hc + 2];
        k[bb + 2] = k[hc + 2];
        c[bb + 3] = c[hc + 3];
        k[bb + 3] = k[hc + 3];
        P += 1;
        $ += 1;
        if (($ | 0) >= (Lc | 0)) {
          break a;
        }
      }
    }
  } while (0);
  var id = v[c[c[f] + 19]](f),
    Zc = 0 != (id | 0);
  a: do {
    if (Zc && ((ca = 0), (ca | 0) < (id | 0))) {
      for (var vb = W, rb = U, vc = W, Qc = X, Rc = ga; ; ) {
        var Xd = f;
        v[c[c[Xd] + 20]](Xd, ca, W);
        Bo(U, h, W);
        c[vb] = c[rb];
        k[vb] = k[rb];
        c[vb + 1] = c[rb + 1];
        k[vb + 1] = k[rb + 1];
        c[vb + 2] = c[rb + 2];
        k[vb + 2] = k[rb + 2];
        c[vb + 3] = c[rb + 3];
        k[vb + 3] = k[rb + 3];
        q0();
        var Sc = (P << 2) + r0;
        c[Sc] = c[vc];
        k[Sc] = k[vc];
        c[Sc + 1] = c[vc + 1];
        k[Sc + 1] = k[vc + 1];
        c[Sc + 2] = c[vc + 2];
        k[Sc + 2] = k[vc + 2];
        c[Sc + 3] = c[vc + 3];
        k[Sc + 3] = k[vc + 3];
        WP(ma, W);
        rn(X, ma, g);
        var Mc = (P << 2) + R;
        c[Mc] = c[Qc];
        k[Mc] = k[Qc];
        c[Mc + 1] = c[Qc + 1];
        k[Mc + 1] = k[Qc + 1];
        c[Mc + 2] = c[Qc + 2];
        k[Mc + 2] = k[Qc + 2];
        c[Mc + 3] = c[Qc + 3];
        k[Mc + 3] = k[Qc + 3];
        rn(ga, W, h);
        var $c = (P << 2) + O;
        c[$c] = c[Rc];
        k[$c] = k[Rc];
        c[$c + 1] = c[Rc + 1];
        k[$c + 1] = k[Rc + 1];
        c[$c + 2] = c[Rc + 2];
        k[$c + 2] = k[Rc + 2];
        c[$c + 3] = c[Rc + 3];
        k[$c + 3] = k[Rc + 3];
        P += 1;
        ca += 1;
        if ((ca | 0) >= (id | 0)) {
          break a;
        }
      }
    }
  } while (0);
  v[c[c[e] + 17]](e, R, F, P);
  v[c[c[f] + 17]](f, O, I, P);
  Z = 0;
  var Cd = (Z | 0) < (P | 0);
  a: do {
    if (Cd) {
      for (
        var wc = ha,
          Bb = C,
          fd = B,
          ad = K,
          wd = E,
          Kd = G,
          Rd = ta,
          Ec = M,
          xd = ra,
          od = L,
          pd = ua,
          bd = p,
          jd = ha,
          Ld = z,
          Gd = G,
          Dd = A,
          fe = M;
        ;

      ) {
        q0();
        var ge = (Z << 2) + r0;
        c[wc] = c[ge];
        k[wc] = k[ge];
        c[wc + 1] = c[ge + 1];
        k[wc + 1] = k[ge + 1];
        c[wc + 2] = c[ge + 2];
        k[wc + 2] = k[ge + 2];
        c[wc + 3] = c[ge + 3];
        k[wc + 3] = k[ge + 3];
        s & 1 && (k[ha + 2] = 0);
        if (0.01 < Um(ha)) {
          var Hd = (Z << 2) + R;
          c[Bb] = c[Hd];
          k[Bb] = k[Hd];
          c[Bb + 1] = c[Hd + 1];
          k[Bb + 1] = k[Hd + 1];
          c[Bb + 2] = c[Hd + 2];
          k[Bb + 2] = k[Hd + 2];
          c[Bb + 3] = c[Hd + 3];
          k[Bb + 3] = k[Hd + 3];
          var he = (Z << 2) + O;
          c[fd] = c[he];
          k[fd] = k[he];
          c[fd + 1] = c[he + 1];
          k[fd + 1] = k[he + 1];
          c[fd + 2] = c[he + 2];
          k[fd + 2] = k[he + 2];
          c[fd + 3] = c[he + 3];
          k[fd + 3] = k[he + 3];
          var Zd = (Z << 2) + F;
          c[ad] = c[Zd];
          k[ad] = k[Zd];
          c[ad + 1] = c[Zd + 1];
          k[ad + 1] = k[Zd + 1];
          c[ad + 2] = c[Zd + 2];
          k[ad + 2] = k[Zd + 2];
          c[ad + 3] = c[Zd + 3];
          k[ad + 3] = k[Zd + 3];
          var $d = (Z << 2) + I;
          c[wd] = c[$d];
          k[wd] = k[$d];
          c[wd + 1] = c[$d + 1];
          k[wd + 1] = k[$d + 1];
          c[wd + 2] = c[$d + 2];
          k[wd + 2] = k[$d + 2];
          c[wd + 3] = c[$d + 3];
          k[wd + 3] = k[$d + 3];
          vw(ta, g, K);
          c[Kd] = c[Rd];
          k[Kd] = k[Rd];
          c[Kd + 1] = c[Rd + 1];
          k[Kd + 1] = k[Rd + 1];
          c[Kd + 2] = c[Rd + 2];
          k[Kd + 2] = k[Rd + 2];
          c[Kd + 3] = c[Rd + 3];
          k[Kd + 3] = k[Rd + 3];
          vw(ra, h, E);
          c[Ec] = c[xd];
          k[Ec] = k[xd];
          c[Ec + 1] = c[xd + 1];
          k[Ec + 1] = k[xd + 1];
          c[Ec + 2] = c[xd + 2];
          k[Ec + 2] = k[xd + 2];
          c[Ec + 3] = c[xd + 3];
          k[Ec + 3] = k[xd + 3];
          s & 1 && ((k[G + 2] = 0), (k[M + 2] = 0));
          N(ua, M, G);
          c[od] = c[pd];
          k[od] = k[pd];
          c[od + 1] = c[pd + 1];
          k[od + 1] = k[pd + 1];
          c[od + 2] = c[pd + 2];
          k[od + 2] = k[pd + 2];
          c[od + 3] = c[pd + 3];
          k[od + 3] = k[pd + 3];
          za = J(ha, L);
          za < t &&
            ((t = za),
            (c[bd] = c[jd]),
            (k[bd] = k[jd]),
            (c[bd + 1] = c[jd + 1]),
            (k[bd + 1] = k[jd + 1]),
            (c[bd + 2] = c[jd + 2]),
            (k[bd + 2] = k[jd + 2]),
            (c[bd + 3] = c[jd + 3]),
            (k[bd + 3] = k[jd + 3]),
            (c[Ld] = c[Gd]),
            (k[Ld] = k[Gd]),
            (c[Ld + 1] = c[Gd + 1]),
            (k[Ld + 1] = k[Gd + 1]),
            (c[Ld + 2] = c[Gd + 2]),
            (k[Ld + 2] = k[Gd + 2]),
            (c[Ld + 3] = c[Gd + 3]),
            (k[Ld + 3] = k[Gd + 3]),
            (c[Dd] = c[fe]),
            (k[Dd] = k[fe]),
            (c[Dd + 1] = c[fe + 1]),
            (k[Dd + 1] = k[fe + 1]),
            (c[Dd + 2] = c[fe + 2]),
            (k[Dd + 2] = k[fe + 2]),
            (c[Dd + 3] = c[fe + 3]),
            (k[Dd + 3] = k[fe + 3]));
        }
        Z += 1;
        if ((Z | 0) >= (P | 0)) {
          break a;
        }
      }
    }
  } while (0);
  k[ib] = Mf(e);
  Q(Za, p, ib);
  xn(z, Za);
  k[Sa] = Mf(f);
  Q(Ca, p, Sa);
  JC(A, Ca);
  if (0 > t) {
    r = 0;
  } else {
    var pg = Mf(e);
    t = t + pg + Mf(f) + 0.5;
    kZ(mb, e, f, d, 0);
    k[Oa] = t;
    Q(Pa, p, Oa);
    QQ(fc);
    wn(jb, g + 12, Pa);
    sQ(La, g);
    pQ(La, jb);
    xi(fc, La);
    xi(fc + 16, h);
    k[fc + 32] = 0xde0b6b000000000;
    Y9a(fb);
    WP(Rb, p);
    Z9a(mb, Rb);
    gZ(mb, fc, fb, m, 0);
    k[pb] = t - k[fb + 9];
    k[Sb] = 1;
    LC(p, Sb);
    if (c[fb + 10] & 1) {
      Q(Ib, p, pb);
      N(ab, fb + 5, Ib);
      c[j] = c[ab];
      k[j] = k[ab];
      c[j + 1] = c[ab + 1];
      k[j + 1] = k[ab + 1];
      c[j + 2] = c[ab + 2];
      k[j + 2] = k[ab + 2];
      c[j + 3] = c[ab + 3];
      k[j + 3] = k[ab + 3];
      var Ze = fb + 5;
      c[l] = c[Ze];
      k[l] = k[Ze];
      c[l + 1] = c[Ze + 1];
      k[l + 1] = k[Ze + 1];
      c[l + 2] = c[Ze + 2];
      k[l + 2] = k[Ze + 2];
      c[l + 3] = c[Ze + 3];
      k[l + 3] = k[Ze + 3];
      c[i] = c[p];
      k[i] = k[p];
      c[i + 1] = c[p + 1];
      k[i + 1] = k[p + 1];
      c[i + 2] = c[p + 2];
      k[i + 2] = k[p + 2];
      c[i + 3] = c[p + 3];
      k[i + 3] = k[p + 3];
    }
    r = c[fb + 10] & 1;
    $39 = 1;
  }
  var Xg = r;
  b = p;
  return Xg;
}
X9a.X = 1;
function q0() {
  var a = b;
  b += 126;
  var d = a + 1,
    e = a + 2,
    f = a + 3,
    g = a + 4,
    h = a + 5,
    i = a + 6,
    j = a + 7,
    l = a + 8,
    m = a + 9,
    n = a + 10,
    p = a + 11,
    r = a + 12,
    s = a + 13,
    t = a + 14,
    w = a + 15,
    x = a + 16,
    y = a + 17,
    z = a + 18,
    A = a + 19,
    C = a + 20,
    B = a + 21,
    K = a + 22,
    E = a + 23,
    G = a + 24,
    M = a + 25,
    L = a + 26,
    F = a + 27,
    I = a + 28,
    R = a + 29,
    O = a + 30,
    Z = a + 31,
    P = a + 32,
    S = a + 33,
    da = a + 34,
    V = a + 35,
    ba = a + 36,
    $ = a + 37,
    Y = a + 38,
    la = a + 39,
    ka = a + 40,
    ja = a + 41,
    ea = a + 42,
    ca = a + 43,
    W = a + 44,
    U = a + 45,
    X = a + 46,
    ma = a + 47,
    ga = a + 48,
    ha = a + 49,
    ta = a + 50,
    ra = a + 51,
    ua = a + 52,
    za = a + 53,
    Za = a + 54,
    ib = a + 55,
    Ca = a + 56,
    Sa = a + 57,
    mb = a + 58,
    Oa = a + 59,
    Pa = a + 60,
    fc = a + 61,
    jb = a + 62,
    La = a + 63,
    fb = a + 64,
    Rb = a + 65,
    pb = a + 66,
    Sb = a + 67,
    ab = a + 68,
    Ib = a + 69,
    Fc = a + 70,
    Ac = a + 71,
    ob = a + 72,
    Gc = a + 73,
    Yc = a + 74,
    Cc = a + 75,
    Ub = a + 76,
    Uc = a + 77,
    nd = a + 78,
    Ic = a + 79,
    tc = a + 80,
    hd = a + 81,
    Tb = a + 82,
    Jc = a + 83,
    ub = a + 84,
    uc = a + 85,
    Kc = a + 86,
    gb = a + 87,
    gc = a + 88,
    Lc = a + 89,
    Dc = a + 90,
    Eb = a + 91,
    Ra = a + 92,
    qb = a + 93,
    Ab = a + 94,
    hc = a + 95,
    Hc = a + 96,
    ic = a + 97,
    db = a + 98,
    bb = a + 99,
    id = a + 100,
    Zc = a + 101,
    vb = a + 102,
    rb = a + 103,
    vc = a + 104,
    Qc = a + 105,
    Rc = a + 106,
    Xd = a + 107,
    Sc = a + 108,
    Mc = a + 109,
    $c = a + 110,
    Cd = a + 111,
    wc = a + 112,
    Bb = a + 113,
    fd = a + 114,
    ad = a + 115,
    wd = a + 116,
    Kd = a + 117,
    Rd = a + 118,
    Ec = a + 119,
    xd = a + 120,
    od = a + 121,
    pd = a + 122,
    bd = a + 123,
    jd = a + 124,
    Ld = a + 125;
  0 == (c[$9a] << 24) >> 24 &&
    0 != (Hb($9a) | 0) &&
    ((k[a] = 0),
    (k[d] = 0),
    (k[e] = -1),
    H(r0, a, d, e),
    (k[f] = 0.7236080169677734),
    (k[g] = -0.5257250070571899),
    (k[h] = -0.44721901416778564),
    H(r0 + 4, f, g, h),
    (k[i] = -0.2763879895210266),
    (k[j] = -0.8506489992141724),
    (k[l] = -0.44721901416778564),
    H(r0 + 8, i, j, l),
    (k[m] = -0.8944259881973267),
    (k[n] = 0),
    (k[p] = -0.4472160041332245),
    H(r0 + 12, m, n, p),
    (k[r] = -0.2763879895210266),
    (k[s] = 0.8506489992141724),
    (k[t] = -0.44721999764442444),
    H(r0 + 16, r, s, t),
    (k[w] = 0.7236080169677734),
    (k[x] = 0.5257250070571899),
    (k[y] = -0.44721901416778564),
    H(r0 + 20, w, x, y),
    (k[z] = 0.2763879895210266),
    (k[A] = -0.8506489992141724),
    (k[C] = 0.44721999764442444),
    H(r0 + 24, z, A, C),
    (k[B] = -0.7236080169677734),
    (k[K] = -0.5257250070571899),
    (k[E] = 0.44721901416778564),
    H(r0 + 28, B, K, E),
    (k[G] = -0.7236080169677734),
    (k[M] = 0.5257250070571899),
    (k[L] = 0.44721901416778564),
    H(r0 + 32, G, M, L),
    (k[F] = 0.2763879895210266),
    (k[I] = 0.8506489992141724),
    (k[R] = 0.44721901416778564),
    H(r0 + 36, F, I, R),
    (k[O] = 0.8944259881973267),
    (k[Z] = 0),
    (k[P] = 0.4472160041332245),
    H(r0 + 40, O, Z, P),
    (k[S] = 0),
    (k[da] = 0),
    (k[V] = 1),
    H(r0 + 44, S, da, V),
    (k[ba] = 0.4253230094909668),
    (k[$] = -0.3090110123157501),
    (k[Y] = -0.8506540060043335),
    H(r0 + 48, ba, $, Y),
    (k[la] = -0.16245600581169128),
    (k[ka] = -0.49999499320983887),
    (k[ja] = -0.8506540060043335),
    H(r0 + 52, la, ka, ja),
    (k[ea] = 0.2628690004348755),
    (k[ca] = -0.8090119957923889),
    (k[W] = -0.525738000869751),
    H(r0 + 56, ea, ca, W),
    (k[U] = 0.4253230094909668),
    (k[X] = 0.3090110123157501),
    (k[ma] = -0.8506540060043335),
    H(r0 + 60, U, X, ma),
    (k[ga] = 0.8506479859352112),
    (k[ha] = 0),
    (k[ta] = -0.5257359743118286),
    H(r0 + 64, ga, ha, ta),
    (k[ra] = -0.5257300138473511),
    (k[ua] = 0),
    (k[za] = -0.8506519794464111),
    H(r0 + 68, ra, ua, za),
    (k[Za] = -0.6881899833679199),
    (k[ib] = -0.49999698996543884),
    (k[Ca] = -0.5257359743118286),
    H(r0 + 72, Za, ib, Ca),
    (k[Sa] = -0.16245600581169128),
    (k[mb] = 0.49999499320983887),
    (k[Oa] = -0.8506540060043335),
    H(r0 + 76, Sa, mb, Oa),
    (k[Pa] = -0.6881899833679199),
    (k[fc] = 0.49999698996543884),
    (k[jb] = -0.5257359743118286),
    H(r0 + 80, Pa, fc, jb),
    (k[La] = 0.2628690004348755),
    (k[fb] = 0.8090119957923889),
    (k[Rb] = -0.525738000869751),
    H(r0 + 84, La, fb, Rb),
    (k[pb] = 0.9510579705238342),
    (k[Sb] = 0.3090130090713501),
    (k[ab] = 0),
    H(r0 + 88, pb, Sb, ab),
    (k[Ib] = 0.9510579705238342),
    (k[Fc] = -0.3090130090713501),
    (k[Ac] = 0),
    H(r0 + 92, Ib, Fc, Ac),
    (k[ob] = 0.5877860188484192),
    (k[Gc] = -0.80901700258255),
    (k[Yc] = 0),
    H(r0 + 96, ob, Gc, Yc),
    (k[Cc] = 0),
    (k[Ub] = -1),
    (k[Uc] = 0),
    H(r0 + 100, Cc, Ub, Uc),
    (k[nd] = -0.5877860188484192),
    (k[Ic] = -0.80901700258255),
    (k[tc] = 0),
    H(r0 + 104, nd, Ic, tc),
    (k[hd] = -0.9510579705238342),
    (k[Tb] = -0.3090130090713501),
    (k[Jc] = 0),
    H(r0 + 108, hd, Tb, Jc),
    (k[ub] = -0.9510579705238342),
    (k[uc] = 0.3090130090713501),
    (k[Kc] = 0),
    H(r0 + 112, ub, uc, Kc),
    (k[gb] = -0.5877860188484192),
    (k[gc] = 0.80901700258255),
    (k[Lc] = 0),
    H(r0 + 116, gb, gc, Lc),
    (k[Dc] = 0),
    (k[Eb] = 1),
    (k[Ra] = 0),
    H(r0 + 120, Dc, Eb, Ra),
    (k[qb] = 0.5877860188484192),
    (k[Ab] = 0.80901700258255),
    (k[hc] = 0),
    H(r0 + 124, qb, Ab, hc),
    (k[Hc] = 0.6881899833679199),
    (k[ic] = -0.49999698996543884),
    (k[db] = 0.5257359743118286),
    H(r0 + 128, Hc, ic, db),
    (k[bb] = -0.2628690004348755),
    (k[id] = -0.8090119957923889),
    (k[Zc] = 0.525738000869751),
    H(r0 + 132, bb, id, Zc),
    (k[vb] = -0.8506479859352112),
    (k[rb] = 0),
    (k[vc] = 0.5257359743118286),
    H(r0 + 136, vb, rb, vc),
    (k[Qc] = -0.2628690004348755),
    (k[Rc] = 0.8090119957923889),
    (k[Xd] = 0.525738000869751),
    H(r0 + 140, Qc, Rc, Xd),
    (k[Sc] = 0.6881899833679199),
    (k[Mc] = 0.49999698996543884),
    (k[$c] = 0.5257359743118286),
    H(r0 + 144, Sc, Mc, $c),
    (k[Cd] = 0.5257300138473511),
    (k[wc] = 0),
    (k[Bb] = 0.8506519794464111),
    H(r0 + 148, Cd, wc, Bb),
    (k[fd] = 0.16245600581169128),
    (k[ad] = -0.49999499320983887),
    (k[wd] = 0.8506540060043335),
    H(r0 + 152, fd, ad, wd),
    (k[Kd] = -0.4253230094909668),
    (k[Rd] = -0.3090110123157501),
    (k[Ec] = 0.8506540060043335),
    H(r0 + 156, Kd, Rd, Ec),
    (k[xd] = -0.4253230094909668),
    (k[od] = 0.3090110123157501),
    (k[pd] = 0.8506540060043335),
    H(r0 + 160, xd, od, pd),
    (k[bd] = 0.16245600581169128),
    (k[jd] = 0.49999499320983887),
    (k[Ld] = 0.8506540060043335),
    H(r0 + 164, bd, jd, Ld));
  b = a;
  return r0;
}
q0.X = 1;
function Z9a(a, d) {
  var e = a + 1;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
Z9a.X = 1;
function a$a() {}
a$a.X = 1;
function b$a() {}
b$a.X = 1;
function c$a() {}
c$a.X = 1;
function d$a() {
  return D.ae;
}
d$a.X = 1;
function e$a() {}
e$a.X = 1;
function f$a(a) {
  return c[a + 1];
}
f$a.X = 1;
function g$a(a, d) {
  return c[a + 3] + d;
}
g$a.X = 1;
function h$a(a) {
  xe(a);
}
h$a.X = 1;
function i$a() {}
i$a.X = 1;
function Y9a(a) {
  FW(a);
  c[a] = j$a + 2;
  c[a + 10] = 0;
}
Y9a.X = 1;
function k$a(a) {
  xe(a);
}
k$a.X = 1;
function l$a(a, d, e, f) {
  var g = a + 1;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  d = a + 5;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  k[a + 9] = f;
  c[a + 10] = 1;
}
l$a.X = 1;
function m$a(a, d, e) {
  yW(a);
  c[a] = n$a + 2;
  c[a + 45] = d;
  c[a + 46] = e;
  c[a + 1] = 16;
  eQ(a + 13);
  eQ(a + 29);
}
m$a.X = 1;
function o$a(a, d, e) {
  var f = b;
  b += 28;
  var g = f + 4,
    h = f + 8,
    i = f + 12,
    j = f + 16,
    l = f + 20,
    m = f + 24,
    n = c[d + 45],
    p = c[c[n] + 16];
  rn(h, e, d + 13);
  v[p](g, n, h);
  vw(f, d + 13, g);
  g = c[d + 46];
  h = c[c[g] + 16];
  WP(m, e);
  rn(l, m, d + 29);
  v[h](j, g, l);
  vw(i, d + 29, j);
  N(a, f, i);
  b = f;
}
o$a.X = 1;
function p$a(a, d, e, f) {
  var g = b;
  b += 4;
  var h;
  h = 0;
  var i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = a, l = g; ; ) {
        v[c[c[j] + 16]](g, a, (h << 2) + d);
        var m = (h << 2) + e;
        c[m] = c[l];
        k[m] = k[l];
        c[m + 1] = c[l + 1];
        k[m + 1] = k[l + 1];
        c[m + 2] = c[l + 2];
        k[m + 2] = k[l + 2];
        c[m + 3] = c[l + 3];
        k[m + 3] = k[l + 3];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
p$a.X = 1;
function q$a(a) {
  var d = c[a + 45],
    d = v[c[c[d] + 11]](d),
    a = c[a + 46];
  return d + v[c[c[a] + 11]](a);
}
q$a.X = 1;
function r$a(a, d, e) {
  var f = b;
  b += 3;
  var g = f + 1,
    h = f + 2;
  $1 = a;
  $2 = d;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  pe(e, f, g, h);
  b = f;
}
r$a.X = 1;
function s$a() {}
s$a.X = 1;
function t$a(a) {
  yh(a);
}
t$a.X = 1;
function u$a(a) {
  v$a(a);
  xe(a);
}
u$a.X = 1;
function w$a(a, d) {
  (s0(a) | 0) == (x$a(a) | 0) && y$a(a, z$a(a, s0(a)));
  var e = c[a + 3] + 7 * c[a + 1];
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  c[e + 4] = c[d + 4];
  k[e + 4] = k[d + 4];
  c[e + 5] = c[d + 5];
  k[e + 5] = k[d + 5];
  c[e + 6] = c[d + 6];
  k[e + 6] = k[d + 6];
  e = a + 1;
  c[e] += 1;
}
w$a.X = 1;
function A$a(a, d, e, f, g, h, i, j, l) {
  var m = b;
  b += 1;
  $10 = l;
  l = r1a(0, Ue(104, 16));
  B$a(l, d, e, f, g, h, i);
  c[m] = l;
  C$a(a + 12, m);
  v[c[c[a] + 4]](a, c[m], d, e, j);
  a = c[m];
  b = m;
  return a;
}
A$a.X = 1;
function C$a(a, d) {
  (t0(a) | 0) == (D$a(a) | 0) && E$a(a, F$a(a, t0(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
C$a.X = 1;
function G$a(a, d, e, f) {
  var g = b;
  b += 1;
  $1 = a;
  a = Ue(8, 16);
  c[g] = 0 == (a | 0) ? 0 : a;
  c[c[g]] = e;
  c[c[g] + 1] = f;
  H$a(d + 13, g);
  b = g;
}
G$a.X = 1;
function H$a(a, d) {
  (u0(a) | 0) == (I$a(a) | 0) && J$a(a, K$a(a, u0(a)));
  var e = c[a + 3] + c[a + 1];
  0 != (e | 0) && (c[e] = c[d]);
  e = a + 1;
  c[e] += 1;
}
H$a.X = 1;
function v$a(a) {
  c[a] = L$a + 2;
  if (c[a + 9] & 1) {
    var d = c[a + 7];
    v[c[c[d]]](d);
    yh(c[a + 7]);
  }
  M$a(a + 12);
  N$a(a + 1);
}
v$a.X = 1;
function O$a() {}
O$a.X = 1;
function P$a() {}
P$a.X = 1;
function t0(a) {
  return c[a + 1];
}
t0.X = 1;
function Q$a(a, d) {
  return c[a + 3] + d;
}
Q$a.X = 1;
function u0(a) {
  return c[a + 1];
}
u0.X = 1;
function v0(a, d) {
  return c[a + 3] + d;
}
v0.X = 1;
function R$a(a, d, e) {
  var f;
  f = c[c[a + 3] + d];
  c[c[a + 3] + d] = c[c[a + 3] + e];
  c[c[a + 3] + e] = f;
}
R$a.X = 1;
function S$a(a) {
  a += 1;
  c[a] -= 1;
}
S$a.X = 1;
function T$a(a) {
  return c[a + 7];
}
T$a.X = 1;
function U$a(a) {
  return c[a + 7];
}
U$a.X = 1;
function V$a(a, d, e, f) {
  $1 = a;
  a = d + 18;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
  d += 22;
  c[f] = c[d];
  k[f] = k[d];
  c[f + 1] = c[d + 1];
  k[f + 1] = k[d + 1];
  c[f + 2] = c[d + 2];
  k[f + 2] = k[d + 2];
  c[f + 3] = c[d + 3];
  k[f + 3] = k[d + 3];
}
V$a.X = 1;
function W$a(a, d, e, f, g, h) {
  $2 = d;
  $3 = e;
  $5 = g;
  $6 = h;
  d = 0;
  e = a + 12;
  g = (d | 0) < (t0(e) | 0);
  a: do {
    if (g) {
      for (h = a + 12; ; ) {
        var i = f;
        v[c[c[i] + 2]](i, c[Q$a(h, d)]);
        d += 1;
        if ((d | 0) >= (t0(e) | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
W$a.X = 1;
function X$a(a, d, e, f, g) {
  var h = b;
  b += 12;
  var i = h + 4,
    j = h + 8,
    l;
  l = d + 18;
  c[l] = c[e];
  k[l] = k[e];
  c[l + 1] = c[e + 1];
  k[l + 1] = k[e + 1];
  c[l + 2] = c[e + 2];
  k[l + 2] = k[e + 2];
  c[l + 3] = c[e + 3];
  k[l + 3] = k[e + 3];
  l = d + 22;
  c[l] = c[f];
  k[l] = k[f];
  c[l + 1] = c[f + 1];
  k[l + 1] = k[f + 1];
  c[l + 2] = c[f + 2];
  k[l + 2] = k[f + 2];
  c[l + 3] = c[f + 3];
  k[l + 3] = k[f + 3];
  Y$a(h, a, d, g);
  0 != (c[a + 8] | 0) && $o(c[a + 8], h, e, f);
  for (a = 0; (a | 0) < (u0(d + 13) | 0); ) {
    l = c[c[v0(d + 13, a)] + 1];
    v[c[c[l] + 11]](l, i, j);
    if (!(hX(i, j, d + 18, d + 22) & 1)) {
      l = c[v0(d + 13, a)];
      var m = c[l + 1];
      v[c[c[m] + 3]](m, c[l], g);
      R$a(d + 13, a, u0(d + 13) - 1);
      S$a(d + 13);
    }
    a += 1;
  }
  for (a = 0; (a | 0) < (u0(d + 13) | 0); ) {
    (i = c[v0(d + 13, a)]),
      (j = c[i + 1]),
      v[c[c[j] + 4]](j, c[i], e, f, g),
      (a += 1);
  }
  b = h;
}
X$a.X = 1;
function Z$a(a, d) {
  var e = b;
  b += 12;
  var f,
    g,
    h = e + 4,
    i,
    j,
    l = e + 8,
    m = c[$$a] & 1;
  do {
    if (!m && ((f = v[c[c[a] + 9]](a)), v[c[c[f] + 14]](f))) {
      f = v[c[c[a] + 9]](a);
      f = v[c[c[f] + 7]](f);
      aab(f);
      g = jX(f) - c[a + 11];
      Az(e);
      kX(f, g, e);
      c[a + 11] = 0;
      Az(h);
      c[h] = 0;
      c[h + 1] = 0;
      g = c[h + 2] = 0;
      var n = (g | 0) < (jX(f) | 0),
        p = f;
      a: do {
        if (n) {
          var r = h,
            s = h,
            t = h + 1,
            w = h + 1,
            x = h,
            y = a,
            z = a + 11;
          for (i = p; ; ) {
            i = lX(i, g);
            j = 0 != (c[i + 1] | 0) ? c[c[i + 1] + 3] : 0;
            var A = 0 != (c[t] | 0) ? c[c[w] + 3] : 0;
            j =
              ((0 != (c[i] | 0) ? c[c[i] + 3] : 0) | 0) ==
              ((0 != (c[r] | 0) ? c[c[s] + 3] : 0) | 0)
                ? (j | 0) == (A | 0)
                : 0;
            A = i;
            c[x] = c[A];
            k[x] = k[A];
            c[x + 1] = c[A + 1];
            k[x + 1] = k[A + 1];
            c[x + 2] = c[A + 2];
            k[x + 2] = k[A + 2];
            c[x + 3] = c[A + 3];
            k[x + 3] = k[A + 3];
            j = j & 1 ? 1 : bab(a, c[i], c[i + 1]) & 1 ? 0 : 1;
            j & 1 &&
              ((j = v[c[c[y] + 9]](a)),
              v[c[c[j] + 8]](j, i, d),
              (c[i] = 0),
              (c[i + 1] = 0),
              (c[z] += 1),
              (c[nX] -= 1));
            g += 1;
            i = f;
            if ((g | 0) >= (jX(f) | 0)) {
              var C = i;
              break a;
            }
          }
        } else {
          C = p;
        }
      } while (0);
      aab(C);
      g = jX(f) - c[a + 11];
      Az(l);
      kX(f, g, l);
      c[a + 11] = 0;
    }
  } while (0);
  b = e;
}
Z$a.X = 1;
function aab(a) {
  1 < (jX(a) | 0) && w0(a, 0, jX(a) - 1);
}
aab.X = 1;
function bab(a, d, e) {
  $1 = a;
  a = c[d + 3];
  e = c[e + 3];
  return hX(a + 18, a + 22, e + 18, e + 22);
}
bab.X = 1;
function cab(a, d, e) {
  var f = b;
  b += 6;
  var g = f + 1,
    h = f + 2,
    i = f + 3,
    j = f + 4,
    l = f + 5;
  $1 = a;
  k[f] = -0xde0b6b000000000;
  k[g] = -0xde0b6b000000000;
  k[h] = -0xde0b6b000000000;
  pe(d, f, g, h);
  k[i] = 0xde0b6b000000000;
  k[j] = 0xde0b6b000000000;
  k[l] = 0xde0b6b000000000;
  pe(e, i, j, l);
  b = f;
}
cab.X = 1;
function w0(a, d, e) {
  var f = b;
  b += 5;
  var g,
    h,
    i = f + 1;
  g = d;
  h = e;
  Cz(i, (((((e + d) | 0) / 2) & -1) << 2) + c[a + 3]);
  for (var j = a + 3, l = a + 3; ; ) {
    if (x0(f, (g << 2) + c[j], i)) {
      g += 1;
    } else {
      var m = x0(f, i, (h << 2) + c[l]);
      a: do {
        if (m) {
          for (;;) {
            if (((h -= 1), !x0(f, i, (h << 2) + c[l]))) {
              break a;
            }
          }
        }
      } while (0);
      (g | 0) <= (h | 0) && (tX(a, g, h), (g += 1), (h -= 1));
      if (!((g | 0) <= (h | 0))) {
        break;
      }
    }
  }
  (d | 0) < (h | 0) && w0(a, d, h);
  (g | 0) < (e | 0) && w0(a, g, e);
  b = f;
}
w0.X = 1;
function K$a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
K$a.X = 1;
function dab(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
dab.X = 1;
function F$a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
F$a.X = 1;
function eab(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
eab.X = 1;
function z$a(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
z$a.X = 1;
function fab(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
fab.X = 1;
function gab(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
gab.X = 1;
function x0(a, d, e) {
  var f, g, h;
  $1 = a;
  a = 0 != (c[d] | 0) ? c[c[d] + 3] : 0;
  f = 0 != (c[d + 1] | 0) ? c[c[d + 1] + 3] : 0;
  g = 0 != (c[e] | 0) ? c[c[e] + 3] : 0;
  h = 0 != (c[e + 1] | 0) ? c[c[e + 1] + 3] : 0;
  return a >>> 0 > g >>> 0
    ? 1
    : (a | 0) == (g | 0) && f >>> 0 > h >>> 0
      ? 1
      : (a | 0) != (g | 0)
        ? 0
        : (f | 0) != (h | 0) ? 0 : c[d + 2] >>> 0 > c[e + 2] >>> 0;
}
x0.X = 1;
function I$a(a) {
  return c[a + 2];
}
I$a.X = 1;
function hab(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
hab.X = 1;
function D$a(a) {
  return c[a + 2];
}
D$a.X = 1;
function iab(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + d;
        0 != (i | 0) && (c[i] = c[c[h] + d]);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
iab.X = 1;
function s0(a) {
  return c[a + 1];
}
s0.X = 1;
function x$a(a) {
  return c[a + 2];
}
x$a.X = 1;
function jab(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
jab.X = 1;
function J$a(a, d) {
  var e;
  (I$a(a) | 0) < (d | 0) &&
    ((e = kab(a, d)),
    hab(a, 0, u0(a), e),
    dab(a, 0, u0(a)),
    lab(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
J$a.X = 1;
function kab(a, d) {
  return 0 != (d | 0) ? mab(a, d, 0) : 0;
}
kab.X = 1;
function lab(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && nab(a, c[a + 3]), (c[a + 3] = 0));
}
lab.X = 1;
function nab(a, d) {
  $1 = a;
  yh(d);
}
nab.X = 1;
function mab(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
mab.X = 1;
function E$a(a, d) {
  var e;
  (D$a(a) | 0) < (d | 0) &&
    ((e = oab(a, d)),
    iab(a, 0, t0(a), e),
    eab(a, 0, t0(a)),
    pab(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
E$a.X = 1;
function oab(a, d) {
  return 0 != (d | 0) ? qab(a, d, 0) : 0;
}
oab.X = 1;
function pab(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && rab(a, c[a + 3]), (c[a + 3] = 0));
}
pab.X = 1;
function rab(a, d) {
  $1 = a;
  yh(d);
}
rab.X = 1;
function qab(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 2, 16);
}
qab.X = 1;
function y$a(a, d) {
  var e;
  (x$a(a) | 0) < (d | 0) &&
    ((e = sab(a, d)),
    tab(a, 0, s0(a), e),
    fab(a, 0, s0(a)),
    uab(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
y$a.X = 1;
function sab(a, d) {
  return 0 != (d | 0) ? vab(a, d, 0) : 0;
}
sab.X = 1;
function tab(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + 7 * d,
          j = c[h] + 7 * d;
        c[i] = c[j];
        k[i] = k[j];
        c[i + 1] = c[j + 1];
        k[i + 1] = k[j + 1];
        c[i + 2] = c[j + 2];
        k[i + 2] = k[j + 2];
        c[i + 3] = c[j + 3];
        k[i + 3] = k[j + 3];
        c[i + 4] = c[j + 4];
        k[i + 4] = k[j + 4];
        c[i + 5] = c[j + 5];
        k[i + 5] = k[j + 5];
        c[i + 6] = c[j + 6];
        k[i + 6] = k[j + 6];
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
tab.X = 1;
function uab(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && wab(a, c[a + 3]), (c[a + 3] = 0));
}
uab.X = 1;
function wab(a, d) {
  $1 = a;
  yh(d);
}
wab.X = 1;
function vab(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 4, 16);
}
vab.X = 1;
function M$a(a) {
  eab(a, 0, t0(a));
  pab(a);
  jab(a);
}
M$a.X = 1;
function N$a(a) {
  gab(a, 0, f$a(a));
  xab(a);
  yab(a);
}
N$a.X = 1;
function xab(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && zab(a, c[a + 3]), (c[a + 3] = 0));
}
xab.X = 1;
function yab(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
yab.X = 1;
function Aab(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
Aab.X = 1;
function Bab(a, d, e) {
  $1 = a;
  a = c[d + 3];
  e = c[e + 3];
  d = (0 != ((((c[e + 2] << 16) >> 16) & ((c[a + 1] << 16) >> 16)) | 0)) & 1;
  d =
    (d & 1
      ? 0 != ((((c[a + 2] << 16) >> 16) & ((c[e + 1] << 16) >> 16)) | 0)
      : 0) & 1;
  return d & 1;
}
Bab.X = 1;
function y0(a, d) {
  return c[a + 3] + d;
}
y0.X = 1;
function zab(a, d) {
  $1 = a;
  yh(d);
}
zab.X = 1;
function Cab() {}
Cab.X = 1;
function Y$a(a, d, e, f) {
  PX(a);
  c[a] = Dab + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
}
Y$a.X = 1;
function Eab(a) {
  xe(a);
}
Eab.X = 1;
function Fab(a, d, e) {
  var f;
  $3 = d;
  for (var d = c[g$a(c[a + 1] + 1, e)], e = 0, g = a + 2, h = a + 2; ; ) {
    if ((e | 0) >= (u0(c[g] + 13) | 0)) {
      f = -1;
      break;
    }
    var i = e;
    if ((c[c[v0(c[h] + 13, e)] + 1] | 0) == (d | 0)) {
      f = i;
      break;
    }
    e = i + 1;
  }
  0 > (f | 0) &&
    ((f = v[c[c[d] + 2]](
      d,
      c[a + 2] + 18,
      c[a + 2] + 22,
      c[c[a + 2] + 26],
      c[c[a + 2]],
      c[c[a + 2] + 1],
      c[c[a + 2] + 2],
      c[a + 3],
      c[a + 2]
    )),
    G$a(c[a + 1], c[a + 2], f, d));
}
Fab.X = 1;
function B$a(a, d, e, f, g, h, i) {
  hV(a, d, e, g, h, i, 0);
  Aab(a + 13);
  g = a + 18;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  d = a + 22;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[a + 26] = f;
  c[a + 3] = a;
}
B$a.X = 1;
function Gab(a) {
  xe(a);
}
Gab.X = 1;
function Hab() {}
Hab.X = 1;
function Iab() {}
Iab.X = 1;
function Jab(a) {
  xe(a);
}
Jab.X = 1;
function z0(a, d, e) {
  var f, g;
  f = MW(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (MW(a) | 0) && YLa(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + g;
          0 != (j | 0) && (k[j] = k[e]);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
z0.X = 1;
function Kab(a, d, e) {
  var f = b;
  b += 36;
  var g,
    h = f + 1,
    i = f + 2,
    j = f + 3;
  g = f + 7;
  var l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11,
    r = f + 15,
    s = f + 19,
    t = f + 23,
    w = f + 27,
    x = f + 31,
    y = f + 35;
  k[f] = 0;
  k[h] = 0;
  k[i] = 0;
  H(a, f, h, i);
  h = -0xde0b6b000000000;
  c[j] = c[e];
  k[j] = k[e];
  c[j + 1] = c[e + 1];
  k[j + 1] = k[e + 1];
  c[j + 2] = c[e + 2];
  k[j + 2] = k[e + 2];
  c[j + 3] = c[e + 3];
  k[j + 3] = k[e + 3];
  e = Um(j);
  1.4210854715202004e-14 > e
    ? ((k[g] = 1), (k[l] = 0), (k[m] = 0), pe(j, g, l, m))
    : ((k[n] = 1 / ec(e)), LC(j, n));
  m = jg(d + 22, 0);
  n = LI(d + 27, 0);
  e = th(d + 22);
  g = 0;
  i = (g | 0) < (e | 0);
  a: do {
    if (i) {
      for (var z = d + 3, A = d, C = A, B = p, K = r, E = a, G = p; ; ) {
        if (
          (ig(w, j, z),
          Q(t, w, n),
          wn(s, m, t),
          (k[y] = v[c[c[C] + 11]](A)),
          Q(x, j, y),
          N(r, s, x),
          (c[B] = c[K]),
          (k[B] = k[K]),
          (c[B + 1] = c[K + 1]),
          (k[B + 1] = k[K + 1]),
          (c[B + 2] = c[K + 2]),
          (k[B + 2] = k[K + 2]),
          (c[B + 3] = c[K + 3]),
          (k[B + 3] = k[K + 3]),
          (m += 4),
          (n += 1),
          (l = J(j, p)),
          l > h &&
            ((h = l),
            (c[E] = c[G]),
            (k[E] = k[G]),
            (c[E + 1] = c[G + 1]),
            (k[E + 1] = k[G + 1]),
            (c[E + 2] = c[G + 2]),
            (k[E + 2] = k[G + 2]),
            (c[E + 3] = c[G + 3]),
            (k[E + 3] = k[G + 3])),
          (g += 1),
          (g | 0) >= (e | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
Kab.X = 1;
function Lab(a, d, e, f) {
  var g = b;
  b += 25;
  var h,
    i,
    j,
    l,
    m,
    n,
    p,
    r,
    s = g + 4,
    t = g + 8,
    w = g + 12,
    x = g + 16,
    y = g + 20,
    z = g + 24;
  h = 0;
  var A = (h | 0) < (f | 0);
  a: do {
    if (A) {
      for (
        var C = a + 22,
          B = a + 27,
          K = a + 22,
          E = a + 3,
          G = a,
          M = G,
          L = g,
          F = s,
          I = g;
        ;

      ) {
        i = -0xde0b6b000000000;
        j = (h << 2) + d;
        m = jg(C, 0);
        n = LI(B, 0);
        p = th(K);
        r = 0;
        var R = (r | 0) < (p | 0);
        b: do {
          if (R) {
            for (;;) {
              if (
                (ig(x, j, E),
                Q(w, x, n),
                wn(t, m, w),
                (k[z] = v[c[c[M] + 11]](G)),
                Q(y, j, z),
                N(s, t, y),
                (c[L] = c[F]),
                (k[L] = k[F]),
                (c[L + 1] = c[F + 1]),
                (k[L + 1] = k[F + 1]),
                (c[L + 2] = c[F + 2]),
                (k[L + 2] = k[F + 2]),
                (c[L + 3] = c[F + 3]),
                (k[L + 3] = k[F + 3]),
                (m += 4),
                (n += 1),
                (l = J(j, g)),
                l > i &&
                  ((i = l),
                  (l = (h << 2) + e),
                  (c[l] = c[I]),
                  (k[l] = k[I]),
                  (c[l + 1] = c[I + 1]),
                  (k[l + 1] = k[I + 1]),
                  (c[l + 2] = c[I + 2]),
                  (k[l + 2] = k[I + 2]),
                  (c[l + 3] = c[I + 3]),
                  (k[l + 3] = k[I + 3])),
                (r += 1),
                (r | 0) >= (p | 0))
              ) {
                break b;
              }
            }
          }
        } while (0);
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
Lab.X = 1;
function WI(a, d, e, f) {
  var g = b;
  b += 5;
  var h = g + 4;
  TYa(a);
  c[a] = A0 + 2;
  KW(a + 22);
  LW(a + 27);
  c[a + 1] = 9;
  xZ(a + 22, f, g);
  k[h] = 0;
  z0(a + 27, f, h);
  var h = 0,
    i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (var j = a + 22, l = a + 27; ; ) {
        var m = xg(j, h),
          n = (h << 2) + d;
        c[m] = c[n];
        k[m] = k[n];
        c[m + 1] = c[n + 1];
        k[m + 1] = k[n + 1];
        c[m + 2] = c[n + 2];
        k[m + 2] = k[n + 2];
        c[m + 3] = c[n + 3];
        k[m + 3] = k[n + 3];
        k[y0(l, h)] = k[e + h];
        h += 1;
        if ((h | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  cJ(a);
  b = g;
}
WI.X = 1;
function Mab() {
  return D.xe;
}
Mab.X = 1;
function Nab() {
  return 64;
}
Nab.X = 1;
function B0(a) {
  return c[a + 1];
}
B0.X = 1;
function C0(a) {
  return c[a + 1];
}
C0.X = 1;
function D0(a, d) {
  return c[a + 3] + 7 * d;
}
D0.X = 1;
function E0(a) {
  return 0 <= (c[a + 6] | 0);
}
E0.X = 1;
function F0(a) {
  return -c[a + 6];
}
F0.X = 1;
function Oab(a, d, e) {
  var f = b;
  b += 20;
  var g = f + 4,
    h = f + 8,
    i = f + 12,
    j = f + 16,
    l = f + 17,
    m = f + 18,
    n = f + 19;
  Pab(a, f, g);
  N(i, g, f);
  k[j] = 0.5;
  Q(h, i, j);
  a = 2 * k[h];
  g = 2 * k[h + 1];
  h = 2 * k[h + 2];
  k[l] = d / 12 * (g * g + h * h);
  k[m] = d / 12 * (a * a + h * h);
  k[n] = d / 12 * (a * a + g * g);
  pe(e, l, m, n);
  b = f;
}
Oab.X = 1;
function Pab(a, d, e) {
  var f = a + 13;
  c[d] = c[f];
  k[d] = k[f];
  c[d + 1] = c[f + 1];
  k[d + 1] = k[f + 1];
  c[d + 2] = c[f + 2];
  k[d + 2] = k[f + 2];
  c[d + 3] = c[f + 3];
  k[d + 3] = k[f + 3];
  a += 17;
  c[e] = c[a];
  k[e] = k[a];
  c[e + 1] = c[a + 1];
  k[e + 1] = k[a + 1];
  c[e + 2] = c[a + 2];
  k[e + 2] = k[a + 2];
  c[e + 3] = c[a + 3];
  k[e + 3] = k[a + 3];
}
Pab.X = 1;
function Qab(a, d, e) {
  var f, g, h;
  GX(a, d, e);
  f = th(a + 22);
  g = 0 != (f | 0) ? v[c[c[e] + 7]](e, jg(a + 22, 0)) : 0;
  c[d + 16] = g;
  c[d + 17] = f;
  if (0 != (f | 0)) {
    d = v[c[c[e] + 4]](e, 20, f);
    g = c[d + 2];
    h = 0;
    var i = (h | 0) < (f | 0);
    a: do {
      if (i) {
        for (var j = a + 22, l = a + 27; ; ) {
          if (
            (mc(jg(j, h), g),
            (k[g + 4] = k[LI(l, h)]),
            (h += 1),
            (g += 5),
            (h | 0) >= (f | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, d, D.Ee, 1497453121, jg(a + 22, 0));
  }
  return D.be;
}
Qab.X = 1;
function Rab(a) {
  Sab(a);
}
Rab.X = 1;
function xp(a) {
  mW(a);
  c[a] = Tab + 2;
}
xp.X = 1;
function Uab(a) {
  G0(a);
}
Uab.X = 1;
function cp(a, d, e, f, g) {
  var h = b;
  b += 53;
  var i = h + 3,
    j = h + 10,
    l = h + 12,
    m = h + 16,
    n = h + 17,
    p = h + 18,
    r = h + 19,
    s = h + 23,
    t = h + 24,
    w = h + 25,
    x = h + 26,
    y = h + 42;
  c[a + 15] = e & 1;
  if (c[a + 15] & 1) {
    Wo(a, f, g, 1),
      Vab(h, a + 26, a),
      v[c[c[d] + 2]](d, h, a + 1, a + 5),
      (d = s0(a + 26)),
      (c[i] = 0),
      (k[i] = 0),
      (c[i + 1] = 0),
      (k[i + 1] = 0),
      (c[i + 2] = 0),
      (k[i + 2] = 0),
      (c[i + 3] = 0),
      (k[i + 3] = 0),
      (c[i + 4] = 0),
      (k[i + 4] = 0),
      (c[i + 5] = 0),
      (k[i + 5] = 0),
      (c[i + 6] = 0),
      (k[i + 6] = 0),
      H0(a + 31, d << 1, i);
  } else {
    Wab(j, a + 16);
    k[m] = -0xde0b6b000000000;
    k[n] = -0xde0b6b000000000;
    k[p] = -0xde0b6b000000000;
    H(l, m, n, p);
    k[s] = 0xde0b6b000000000;
    k[t] = 0xde0b6b000000000;
    k[w] = 0xde0b6b000000000;
    H(r, s, t, w);
    v[c[c[d] + 2]](d, j, l, r);
    d = B0(a + 16);
    i = x;
    for (e = i + 16; i < e; i++) {
      (c[i] = 0), (k[i] = 0);
    }
    I0(a + 21, d << 1, x);
  }
  c[a + 14] = 0;
  J0(a, 0, d);
  c[a + 15] & 1 &&
    0 == (C0(a + 37) | 0) &&
    ((x = K0(a + 37, y)),
    ZU(x, D0(a + 31, 0)),
    (c[x + 6] = 0),
    (c[x + 7] = E0(D0(a + 31, 0)) ? 1 : F0(D0(a + 31, 0))));
  c[a + 42] = C0(a + 37);
  L0(a + 26);
  M0(a + 16);
  b = h;
}
cp.X = 1;
function H0(a, d, e) {
  var f, g;
  f = s0(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (s0(a) | 0) && y$a(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          var j = c[i] + 7 * g,
            l = e;
          c[j] = c[l];
          k[j] = k[l];
          c[j + 1] = c[l + 1];
          k[j + 1] = k[l + 1];
          c[j + 2] = c[l + 2];
          k[j + 2] = k[l + 2];
          c[j + 3] = c[l + 3];
          k[j + 3] = k[l + 3];
          c[j + 4] = c[l + 4];
          k[j + 4] = k[l + 4];
          c[j + 5] = c[l + 5];
          k[j + 5] = k[l + 5];
          c[j + 6] = c[l + 6];
          k[j + 6] = k[l + 6];
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
H0.X = 1;
function I0(a, d, e) {
  var f, g;
  f = B0(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (B0(a) | 0) && Xab(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          for (var j = e, l = (g << 4) + c[i], m = j + 16; j < m; j++, l++) {
            (c[l] = c[j]), (k[l] = k[j]);
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
I0.X = 1;
function K0(a, d) {
  var e;
  e = C0(a);
  (e | 0) == (Yab(a) | 0) && Zab(a, $ab(a, C0(a)));
  var f = a + 1;
  c[f] += 1;
  for (var f = d, g = c[a + 3] + 11 * e, h = f + 11; f < h; f++, g++) {
    (c[g] = c[f]), (k[g] = k[f]);
  }
  return c[a + 3] + 11 * e;
}
K0.X = 1;
function L0(a) {
  fab(a, 0, s0(a));
  uab(a);
  N0(a);
}
L0.X = 1;
function M0(a) {
  abb(a, 0, B0(a));
  bbb(a);
  O0(a);
}
M0.X = 1;
function cbb(a) {
  Sab(a);
  yh(a);
}
cbb.X = 1;
function Sab(a) {
  c[a] = A0 + 2;
  SW(a + 27);
  UW(a + 22);
}
Sab.X = 1;
function dbb(a) {
  G0(a);
  yh(a);
}
dbb.X = 1;
function ebb() {
  return 84;
}
ebb.X = 1;
function abb(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
abb.X = 1;
function $ab(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
$ab.X = 1;
function P0(a, d) {
  return c[a + 3] + 11 * d;
}
P0.X = 1;
function Q0(a) {
  return c[a + 6] >> 21;
}
Q0.X = 1;
function R0(a) {
  return c[a + 6] & 2097151;
}
R0.X = 1;
function O0(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
O0.X = 1;
function N0(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
N0.X = 1;
function Yab(a) {
  return c[a + 2];
}
Yab.X = 1;
function ip(a, d, e, f) {
  var g,
    h,
    i = c[a + 15] & 1;
  a: do {
    if (i) {
      Wo(a, e, f, 1);
      Yo(a, d, 0, c[a + 14], 0);
      g = 0;
      var j = a + 37;
      if ((g | 0) < (C0(j) | 0)) {
        for (var l = a + 37, m = a + 31; ; ) {
          if (
            ((h = P0(l, g)),
            ZU(h, D0(m, c[h + 6])),
            (g += 1),
            (g | 0) >= (C0(j) | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
}
ip.X = 1;
function Yo(a, d, e, f, g) {
  var h = b;
  b += 48;
  var i,
    j = h + 1,
    l = h + 2,
    m = h + 3,
    n = h + 4,
    p = h + 5,
    r = h + 6,
    s = h + 7,
    t = h + 8,
    w = h + 20,
    x = h + 24,
    y,
    z,
    A,
    C,
    B = h + 28,
    K = h + 32,
    E = h + 33,
    G = h + 34,
    M = h + 35,
    L = h + 39,
    F = h + 40,
    I = h + 41,
    R = h + 42,
    O = h + 43,
    Z = h + 44,
    P = h + 45,
    S = h + 46,
    da = h + 47;
  $5 = g;
  i = -1;
  c[h] = 0;
  c[j] = 0;
  c[l] = 2;
  c[m] = 0;
  c[n] = 0;
  c[p] = 0;
  c[r] = 0;
  c[s] = 2;
  var g = d + 1,
    f = f - 1,
    V = (f | 0) >= (e | 0);
  a: do {
    if (V) {
      for (
        var ba = a + 31,
          $ = B,
          Y = M,
          la = t,
          ka = t,
          ja = t + 4,
          ea = t + 4,
          ca = t + 8,
          W = t + 8,
          U = a,
          X = a,
          ma = a + 31,
          ga = a + 31;
        ;

      ) {
        y = D0(ba, f);
        var ha = E0(y);
        b: do {
          if (ha) {
            z = Q0(y);
            A = R0(y);
            (z | 0) != (i | 0) &&
              (0 <= (i | 0) && ((C = d), v[c[c[C] + 6]](C, i)),
              (i = d),
              v[c[c[i] + 4]](i, h, j, l, m, n, p, r, s, z),
              (i = z));
            z = c[n] + c[p] * A;
            for (A = 2; ; ) {
              C = A;
              var ta = z;
              C =
                c[h] + c[m] * (3 == (c[s] | 0) ? c[ta + C] & 65535 : c[ta + C]);
              0 == (c[l] | 0)
                ? ((k[K] = k[C] * k[g]),
                  (k[E] = k[C + 1] * k[g + 1]),
                  (k[G] = k[C + 2] * k[g + 2]),
                  H(B, K, E, G),
                  (C = (A << 2) + t),
                  (c[C] = c[$]),
                  (k[C] = k[$]),
                  (c[C + 1] = c[$ + 1]),
                  (k[C + 1] = k[$ + 1]),
                  (c[C + 2] = c[$ + 2]),
                  (k[C + 2] = k[$ + 2]),
                  (c[C + 3] = c[$ + 3]),
                  (k[C + 3] = k[$ + 3]))
                : ((k[L] = k[C] * k[g]),
                  (k[F] = k[C + 1] * k[g + 1]),
                  (k[I] = k[C + 2] * k[g + 2]),
                  H(M, L, F, I),
                  (C = (A << 2) + t),
                  (c[C] = c[Y]),
                  (k[C] = k[Y]),
                  (c[C + 1] = c[Y + 1]),
                  (k[C + 1] = k[Y + 1]),
                  (c[C + 2] = c[Y + 2]),
                  (k[C + 2] = k[Y + 2]),
                  (c[C + 3] = c[Y + 3]),
                  (k[C + 3] = k[Y + 3]));
              A = C = A - 1;
              if (!(0 <= (C | 0))) {
                break;
              }
            }
            k[R] = 0xde0b6b000000000;
            k[O] = 0xde0b6b000000000;
            k[Z] = 0xde0b6b000000000;
            pe(w, R, O, Z);
            k[P] = -0xde0b6b000000000;
            k[S] = -0xde0b6b000000000;
            k[da] = -0xde0b6b000000000;
            pe(x, P, S, da);
            hp(w, la);
            gp(x, ka);
            hp(w, ja);
            gp(x, ea);
            hp(w, ca);
            gp(x, W);
            Xo(U, y, w, 0);
            Xo(X, y + 3, x, 1);
          } else {
            z = D0(ma, f + 1);
            A = f;
            A = E0(z) ? D0(ga, A + 2) : D0(ga, A + F0(z) + 1);
            for (C = 0; ; ) {
              if (
                ((c[y + C] = c[z + C]),
                ((c[y + C] & 65535) | 0) > ((c[A + C] & 65535) | 0) &&
                  (c[y + C] = c[A + C]),
                (c[y + (C + 3)] = c[z + (C + 3)]),
                ((c[y + (C + 3)] & 65535) | 0) <
                  ((c[A + (C + 3)] & 65535) | 0) &&
                  (c[y + (C + 3)] = c[A + (C + 3)]),
                (C = ta = C + 1),
                3 <= (ta | 0))
              ) {
                break b;
              }
            }
          }
        } while (0);
        f -= 1;
        if (!((f | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
  if (0 <= (i | 0)) {
    v[c[c[d] + 6]](d, i);
  }
  b = h;
}
Yo.X = 1;
function dp(a, d, e, f) {
  var g = b;
  b += 6;
  var h = g + 3;
  Xo(a, g, e, 0);
  Xo(a, h, f, 1);
  var e = 0,
    i = a + 37,
    j = (e | 0) < (C0(i) | 0);
  a: do {
    if (j) {
      for (var l = a + 37, m = g, n = h, p = a + 31; ; ) {
        var f = P0(l, e),
          r = S0(m, n, f, f + 3);
        $overlap = r;
        0 != (r | 0) &&
          (Yo(a, d, c[f + 6], c[f + 7] + c[f + 6], e), ZU(f, D0(p, c[f + 6])));
        e += 1;
        if ((e | 0) >= (C0(i) | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
dp.X = 1;
function S0(a, d, e, f) {
  return fbb(
    (((c[d] & 65535) | 0) >= ((c[e] & 65535) | 0)) &
      1 &
      (((c[a] & 65535) | 0) <= ((c[f] & 65535) | 0)) &
      1 &
      (((c[a + 2] & 65535) | 0) <= ((c[f + 2] & 65535) | 0)) &
      1 &
      (((c[d + 2] & 65535) | 0) >= ((c[e + 2] & 65535) | 0)) &
      1 &
      (((c[a + 1] & 65535) | 0) <= ((c[f + 1] & 65535) | 0)) &
      1 &
      (((c[d + 1] & 65535) | 0) >= ((c[e + 1] & 65535) | 0)) &
      1,
    1,
    0
  );
}
S0.X = 1;
function cha(a, d, e) {
  return dKa(a, d, e & 1);
}
cha.X = 1;
function gbb(a, d, e, f) {
  hbb(a, d, e, f & 1);
  return 1;
}
gbb.X = 1;
function bbb(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && ibb(a, c[a + 3]), (c[a + 3] = 0));
}
bbb.X = 1;
function ibb(a, d) {
  $1 = a;
  yh(d);
}
ibb.X = 1;
function Zab(a, d) {
  var e;
  (Yab(a) | 0) < (d | 0) &&
    ((e = jbb(a, d)),
    kbb(a, 0, C0(a), e),
    lbb(a, 0, C0(a)),
    mbb(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
Zab.X = 1;
function jbb(a, d) {
  return 0 != (d | 0) ? nbb(a, d, 0) : 0;
}
jbb.X = 1;
function lbb(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
lbb.X = 1;
function fbb(a, d, e) {
  a = (-a | a) >> 31;
  return ((a ^ -1) & e) | (a & d);
}
fbb.X = 1;
function obb(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
obb.X = 1;
function pbb(a) {
  return c[a + 2];
}
pbb.X = 1;
function kbb(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        for (
          var i = c[h] + 11 * d, j = f + 11 * d, l = i + 11;
          i < l;
          i++, j++
        ) {
          (c[j] = c[i]), (k[j] = k[i]);
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
kbb.X = 1;
function mbb(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && qbb(a, c[a + 3]), (c[a + 3] = 0));
}
mbb.X = 1;
function qbb(a, d) {
  $1 = a;
  yh(d);
}
qbb.X = 1;
function nbb(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 5, 16);
}
nbb.X = 1;
function Xab(a, d) {
  var e;
  (pbb(a) | 0) < (d | 0) &&
    ((e = rbb(a, d)),
    sbb(a, 0, B0(a), e),
    abb(a, 0, B0(a)),
    bbb(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
Xab.X = 1;
function rbb(a, d) {
  return 0 != (d | 0) ? tbb(a, d, 0) : 0;
}
rbb.X = 1;
function sbb(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        for (
          var i = (d << 4) + c[h], j = (d << 4) + f, l = i + 16;
          i < l;
          i++, j++
        ) {
          (c[j] = c[i]), (k[j] = k[i]);
        }
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
sbb.X = 1;
function tbb(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(d << 6, 16);
}
tbb.X = 1;
function ubb() {}
ubb.X = 1;
function Wab(a, d) {
  FY(a);
  c[a] = vbb + 2;
  c[a + 1] = d;
}
Wab.X = 1;
function wbb(a) {
  xe(a);
}
wbb.X = 1;
function xbb(a, d, e, f) {
  var g = b;
  b += 30;
  var h = g + 16,
    i = g + 20,
    j = g + 24,
    l = g + 25,
    m = g + 26,
    n = g + 27,
    p = g + 28,
    r = g + 29;
  k[j] = 0xde0b6b000000000;
  k[l] = 0xde0b6b000000000;
  k[m] = 0xde0b6b000000000;
  pe(h, j, l, m);
  k[n] = -0xde0b6b000000000;
  k[p] = -0xde0b6b000000000;
  k[r] = -0xde0b6b000000000;
  pe(i, n, p, r);
  hp(h, d);
  gp(i, d);
  hp(h, d + 4);
  gp(i, d + 4);
  hp(h, d + 8);
  gp(i, d + 8);
  c[g] = c[h];
  k[g] = k[h];
  c[g + 1] = c[h + 1];
  k[g + 1] = k[h + 1];
  c[g + 2] = c[h + 2];
  k[g + 2] = k[h + 2];
  c[g + 3] = c[h + 3];
  k[g + 3] = k[h + 3];
  d = g + 4;
  c[d] = c[i];
  k[d] = k[i];
  c[d + 1] = c[i + 1];
  k[d + 1] = k[i + 1];
  c[d + 2] = c[i + 2];
  k[d + 2] = k[i + 2];
  c[d + 3] = c[i + 3];
  k[d + 3] = k[i + 3];
  c[g + 8] = -1;
  c[g + 9] = e;
  c[g + 10] = f;
  ybb(c[a + 1], g);
  b = g;
}
xbb.X = 1;
function ybb(a, d) {
  (B0(a) | 0) == (pbb(a) | 0) && Xab(a, obb(a, B0(a)));
  for (var e = d, f = (c[a + 1] << 4) + c[a + 3], g = e + 16; e < g; e++, f++) {
    (c[f] = c[e]), (k[f] = k[e]);
  }
  e = a + 1;
  c[e] += 1;
}
ybb.X = 1;
function zbb() {}
zbb.X = 1;
function Vab(a, d, e) {
  FY(a);
  c[a] = Abb + 2;
  c[a + 1] = d;
  c[a + 2] = e;
}
Vab.X = 1;
function Bbb(a) {
  xe(a);
}
Bbb.X = 1;
function Cbb(a, d, e, f) {
  var g = b;
  b += 21;
  var h = g + 7,
    i = g + 11,
    j = g + 15,
    l = g + 16,
    m = g + 17,
    n = g + 18,
    p = g + 19,
    r = g + 20;
  k[j] = 0xde0b6b000000000;
  k[l] = 0xde0b6b000000000;
  k[m] = 0xde0b6b000000000;
  pe(h, j, l, m);
  k[n] = -0xde0b6b000000000;
  k[p] = -0xde0b6b000000000;
  k[r] = -0xde0b6b000000000;
  pe(i, n, p, r);
  hp(h, d);
  gp(i, d);
  hp(h, d + 4);
  gp(i, d + 4);
  hp(h, d + 8);
  gp(i, d + 8);
  $MIN_AABB_DIMENSION = 0.0020000000949949026;
  $MIN_AABB_HALF_DIMENSION = 0.0010000000474974513;
  0.0020000000949949026 > k[i] - k[h] &&
    ((k[i] += 0.0010000000474974513), (k[h] -= 0.0010000000474974513));
  0.0020000000949949026 > k[i + 1] - k[h + 1] &&
    (cC(i, k[i + 1] + 0.0010000000474974513),
    cC(h, k[h + 1] - 0.0010000000474974513));
  0.0020000000949949026 > k[i + 2] - k[h + 2] &&
    (dC(i, k[i + 2] + 0.0010000000474974513),
    dC(h, k[h + 2] - 0.0010000000474974513));
  Xo(c[a + 2], g, h, 0);
  Xo(c[a + 2], g + 3, i, 1);
  c[g + 6] = (e << 21) | f;
  w$a(c[a + 1], g);
  b = g;
}
Cbb.X = 1;
function Dbb(a) {
  var d = b;
  b += 2;
  var e,
    f,
    g = d + 1,
    h,
    i,
    j;
  e = pX(a + 1);
  var l = (rW(a + 8) | 0) < (e | 0);
  a: do {
    if (l) {
      f = rW(a + 8);
      c[d] = 0;
      PV(a + 8, e, d);
      c[g] = 0;
      PV(a + 13, e, g);
      h = 0;
      var m = (h | 0) < (e | 0);
      b: do {
        if (m) {
          for (var n = a + 8; ; ) {
            if (((c[QV(n, h)] = -1), (h += 1), (h | 0) >= (e | 0))) {
              break b;
            }
          }
        }
      } while (0);
      h = 0;
      m = (h | 0) < (e | 0);
      b: do {
        if (m) {
          for (n = a + 13; ; ) {
            if (((c[QV(n, h)] = -1), (h += 1), (h | 0) >= (e | 0))) {
              break b;
            }
          }
        }
      } while (0);
      h = 0;
      if ((h | 0) < (f | 0)) {
        for (var m = a + 1, n = a + 1, p = a + 8, r = a + 13, s = a + 8; ; ) {
          if (
            ((i = lX(m, h)),
            (j = YG(c[i])),
            (i = (pX(n) - 1) & T0(0, j, YG(c[i + 1]))),
            (c[QV(r, h)] = c[QV(p, i)]),
            (c[QV(s, i)] = h),
            (h += 1),
            (h | 0) >= (f | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  b = d;
}
Dbb.X = 1;
function Ebb(a) {
  Fbb(a);
  xe(a);
}
Ebb.X = 1;
function dX(a) {
  uX(a);
  c[a] = U0 + 2;
  wX(a + 1);
  c[a + 6] = 0;
  c[a + 7] = 0;
  vW(a + 8);
  vW(a + 13);
  c[a + 18] = 0;
  rX(a + 1, 2);
  Dbb(a);
}
dX.X = 1;
function V0(a, d) {
  var e;
  e = c[a];
  c[a] = c[d];
  c[d] = e;
}
V0.X = 1;
function T0(a, d, e) {
  a = (e << 16) | d;
  a += (a << 15) ^ -1;
  a ^= a >> 10;
  a = (a << 3) + a;
  a ^= a >> 6;
  a += (a << 11) ^ -1;
  return a ^ (a >> 16);
}
T0.X = 1;
function Gbb(a, d, e) {
  $1 = a;
  0 != (c[d + 2] | 0) &&
    ((a = c[d + 2]),
    v[c[c[a]]](a),
    v[c[c[e] + 15]](e, c[d + 2]),
    (c[d + 2] = 0));
}
Gbb.X = 1;
function Hbb(a, d, e) {
  var f = b;
  b += 4;
  Ibb(f, d, a, e);
  v[c[c[a] + 12]](a, f, e);
  b = f;
}
Hbb.X = 1;
function Jbb(a, d, e) {
  var f = b;
  b += 2;
  Kbb(f, d);
  v[c[c[a] + 12]](a, f, e);
  b = f;
}
Jbb.X = 1;
function Lbb(a, d, e) {
  var f = b;
  b += 2;
  var g = f + 1;
  c[f] = d;
  c[g] = e;
  c[Mbb] += 1;
  (c[c[f] + 4] | 0) > (c[c[g] + 4] | 0) && V0(f, g);
  d = YG(c[f]);
  g = YG(c[g]);
  e = (pX(a + 1) - 1) & T0(0, d, g);
  if ((e | 0) >= (rW(a + 8) | 0)) {
    a = 0;
  } else {
    for (
      var h = c[QV(a + 8, e)], e = h, i = a + 1, j = a + 13;
      -1 != (h | 0) && 0 == ((Nbb(a, lX(i, e), d, g) & 1) | 0);

    ) {
      e = h = c[QV(j, e)];
    }
    a = -1 == (e | 0) ? 0 : lX(a + 1, e);
  }
  b = f;
  return a;
}
Lbb.X = 1;
function Nbb(a, d, e, f) {
  $1 = a;
  return (YG(c[d]) | 0) == (e | 0) ? (YG(c[d + 1]) | 0) == (f | 0) : 0;
}
Nbb.X = 1;
function Obb(a, d, e) {
  var f = b;
  b += 2;
  var g = f + 1,
    h,
    i,
    j,
    l;
  c[f] = d;
  c[g] = e;
  (c[c[f] + 4] | 0) > (c[c[g] + 4] | 0) && V0(f, g);
  d = YG(c[f]);
  e = YG(c[g]);
  h = (pX(a + 1) - 1) & T0(0, d, e);
  i = j = Pbb(a, c[f], c[g], h);
  if (0 == (j | 0)) {
    j = jX(a + 1);
    i = pX(a + 1);
    l = Qbb(a + 1);
    if (0 != (c[a + 18] | 0)) {
      var m = c[a + 18];
      v[c[c[m] + 2]](m, c[f], c[g]);
    }
    (i | 0) < (pX(a + 1) | 0) && (Dbb(a), (h = (pX(a + 1) - 1) & T0(0, d, e)));
    Ez(l, c[f], c[g]);
    i = l;
    c[i + 2] = 0;
    c[i + 3] = 0;
    c[QV(a + 13, j)] = c[QV(a + 8, h)];
    c[QV(a + 8, h)] = j;
  }
  b = f;
  return i;
}
Obb.X = 1;
function Pbb(a, d, e, f) {
  for (
    var d = YG(d), e = YG(e), g = c[QV(a + 8, f)], f = g, h = a + 1, i = a + 13;
    -1 != (g | 0) && 0 == ((Nbb(a, lX(h, f), d, e) & 1) | 0);

  ) {
    f = g = c[QV(i, f)];
  }
  return -1 == (f | 0) ? 0 : lX(a + 1, f);
}
Pbb.X = 1;
function Qbb(a) {
  var d;
  d = jX(a);
  (d | 0) == (pX(a) | 0) && rX(a, Rbb(a, jX(a)));
  var e = a + 1;
  c[e] += 1;
  return (d << 2) + c[a + 3];
}
Qbb.X = 1;
function Sbb(a, d, e, f) {
  var g = b;
  b += 2;
  var h = g + 1,
    i,
    j,
    l;
  c[g] = d;
  c[h] = e;
  c[W0] += 1;
  (c[c[g] + 4] | 0) > (c[c[h] + 4] | 0) && V0(g, h);
  i = (pX(a + 1) - 1) & T0(0, YG(c[g]), YG(c[h]));
  e = Pbb(a, c[g], c[h], i);
  if (0 == (e | 0)) {
    a = 0;
  } else {
    v[c[c[a] + 8]](a, e, f);
    d = c[e + 3];
    e = (((e - lX(a + 1, 0)) | 0) / ((lX(a + 1, 1) - lX(a + 1, 0)) | 0)) & -1;
    j = c[QV(a + 8, i)];
    l = -1;
    if ((j | 0) != (e | 0)) {
      for (
        var m = a + 13;
        !((l = j), (j = c[QV(m, j)]), (j | 0) == (e | 0));

      ) {}
      j = l;
    } else {
      j = -1;
    }
    m = c[QV(a + 13, e)];
    -1 != (j | 0) ? (c[QV(a + 13, l)] = m) : (c[QV(a + 8, i)] = m);
    i = jX(a + 1) - 1;
    0 != (c[a + 18] | 0) && ((l = c[a + 18]), v[c[c[l] + 3]](l, c[g], c[h], f));
    f = a + 1;
    if ((i | 0) == (e | 0)) {
      X0(f);
    } else {
      f = lX(f, i);
      f = (pX(a + 1) - 1) & T0(0, YG(c[f]), YG(c[f + 1]));
      j = c[QV(a + 8, f)];
      l = -1;
      if ((j | 0) != (i | 0)) {
        for (h = a + 13; !((l = j), (j = c[QV(h, j)]), (j | 0) == (i | 0)); ) {}
        h = l;
      } else {
        h = -1;
      }
      j = c[QV(a + 13, i)];
      -1 != (h | 0) ? (c[QV(a + 13, l)] = j) : (c[QV(a + 8, f)] = j);
      h = lX(a + 1, e);
      l = lX(a + 1, i);
      c[h] = c[l];
      k[h] = k[l];
      c[h + 1] = c[l + 1];
      k[h + 1] = k[l + 1];
      c[h + 2] = c[l + 2];
      k[h + 2] = k[l + 2];
      c[h + 3] = c[l + 3];
      k[h + 3] = k[l + 3];
      c[QV(a + 13, e)] = c[QV(a + 8, f)];
      c[QV(a + 8, f)] = e;
      X0(a + 1);
    }
    a = d;
  }
  b = g;
  return a;
}
Sbb.X = 1;
function Fbb(a) {
  c[a] = U0 + 2;
  wW(a + 13);
  wW(a + 8);
  yX(a + 1);
}
Fbb.X = 1;
function Tbb() {}
Tbb.X = 1;
function X0(a) {
  a += 1;
  c[a] -= 1;
}
X0.X = 1;
function Ubb(a, d, e) {
  var f, g;
  f = 0;
  var h = a + 1,
    i = (f | 0) < (jX(h) | 0);
  a: do {
    if (i) {
      for (var j = a + 1, l = a; ; ) {
        g = lX(j, f);
        var m = d;
        v[c[c[m] + 2]](m, g)
          ? (v[c[c[l] + 3]](a, c[g], c[g + 1], e), (c[nX] -= 1))
          : (f += 1);
        if ((f | 0) >= (jX(h) | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
Ubb.X = 1;
function Vbb(a, d) {
  (jX(a) | 0) == (pX(a) | 0) && rX(a, Rbb(a, jX(a)));
  Cz((c[a + 1] << 2) + c[a + 3], d);
  var e = a + 1;
  c[e] += 1;
}
Vbb.X = 1;
function Wbb(a, d, e, f) {
  var g = b;
  b += 4;
  var h, i, j;
  v[c[c[a] + 14]](a)
    ? (a = 7)
    : (Ez(g, d, e),
      (i = Xbb(a + 1, g)),
      (i | 0) < (jX(a + 1) | 0)
        ? ((c[nX] -= 1),
          (j = lX(a + 1, i)),
          (h = c[j + 3]),
          v[c[c[a] + 8]](a, j, f),
          0 != (c[a + 9] | 0) && ((j = c[a + 9]), v[c[c[j] + 3]](j, d, e, f)),
          tX(a + 1, i, pX(a + 1) - 1),
          X0(a + 1),
          (a = 8))
        : (a = 7));
  7 == a && (h = 0);
  b = g;
  return h;
}
Wbb.X = 1;
function Xbb(a, d) {
  var e, f;
  e = jX(a);
  f = 0;
  for (var g = a + 3; (f | 0) < (jX(a) | 0); ) {
    var h = f;
    if (mX((f << 2) + c[g], d)) {
      e = h;
      break;
    }
    f = h + 1;
  }
  return e;
}
Xbb.X = 1;
function Ybb(a, d, e) {
  if (Zbb(a, d, e)) {
    var f;
    f = Qbb(a + 1);
    Ez(f, d, e);
    c[nX] += 1;
    c[Y0] += 1;
    0 != (c[a + 9] | 0) && ((a = c[a + 9]), v[c[c[a] + 2]](a, d, e));
    d = f;
  } else {
    d = 0;
  }
  return d;
}
Ybb.X = 1;
function Zbb(a, d, e) {
  0 != (c[a + 8] | 0)
    ? ((a = c[a + 8]), (d = v[c[c[a] + 2]](a, d, e)))
    : ((a =
        (0 != ((((c[e + 2] << 16) >> 16) & ((c[d + 1] << 16) >> 16)) | 0)) & 1),
      (a =
        (a & 1
          ? 0 != ((((c[d + 2] << 16) >> 16) & ((c[e + 1] << 16) >> 16)) | 0)
          : 0) & 1),
      (d = a & 1));
  return d;
}
Zbb.X = 1;
function $bb(a, d, e) {
  var f = b;
  b += 4;
  Zbb(a, d, e)
    ? (Ez(f, d, e),
      (d = Xbb(a + 1, f)),
      (a = (d | 0) < (jX(a + 1) | 0) ? lX(a + 1, d) : 0))
    : (a = 0);
  b = f;
  return a;
}
$bb.X = 1;
function acb(a, d, e) {
  var f, g;
  f = 0;
  var h = a + 1,
    i = (f | 0) < (jX(h) | 0);
  a: do {
    if (i) {
      for (var j = a + 1, l = a, m = a + 1, n = a + 1, p = a + 1; ; ) {
        g = lX(j, f);
        var r = d;
        v[c[c[r] + 2]](r, g)
          ? (v[c[c[l] + 8]](a, g, e),
            (c[g] = 0),
            (c[g + 1] = 0),
            tX(m, f, jX(n) - 1),
            X0(p),
            (c[nX] -= 1))
          : (f += 1);
        if ((f | 0) >= (jX(h) | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
acb.X = 1;
function bcb(a) {
  ccb(a);
  xe(a);
}
bcb.X = 1;
function ccb(a) {
  c[a] = Z0 + 2;
  yX(a + 1);
}
ccb.X = 1;
function dcb(a, d, e) {
  $1 = a;
  0 != (c[d + 2] | 0) &&
    ((a = c[d + 2]),
    v[c[c[a]]](a),
    v[c[c[e] + 15]](e, c[d + 2]),
    (c[d + 2] = 0),
    (c[W0] -= 1));
}
dcb.X = 1;
function ecb(a, d, e) {
  var f = b;
  b += 4;
  fcb(f, d, a, e);
  v[c[c[a] + 12]](a, f, e);
  b = f;
}
ecb.X = 1;
function gcb(a, d, e) {
  var f = b;
  b += 2;
  hcb(f, d);
  v[c[c[a] + 12]](a, f, e);
  b = f;
}
gcb.X = 1;
function icb(a, d) {
  var e = b;
  b += 5;
  var f;
  wX(e);
  f = 0;
  for (var g = a + 1, h = a + 1; (f | 0) < (jX(g) | 0); ) {
    Vbb(e, lX(h, f)), (f += 1);
  }
  for (f = 0; (f | 0) < (jX(e) | 0); ) {
    v[c[c[a] + 3]](a, c[lX(e, f)], c[lX(e, f) + 1], d), (f += 1);
  }
  f = 0;
  g = a + 13;
  h = (f | 0) < (rW(g) | 0);
  a: do {
    if (h) {
      for (var i = a + 13; ; ) {
        if (((c[QV(i, f)] = -1), (f += 1), (f | 0) >= (rW(g) | 0))) {
          break a;
        }
      }
    }
  } while (0);
  iX(e);
  for (f = 0; (f | 0) < (jX(e) | 0); ) {
    v[c[c[a] + 2]](a, c[lX(e, f)], c[lX(e, f) + 1]), (f += 1);
  }
  yX(e);
  b = e;
}
icb.X = 1;
function jcb(a) {
  uX(a);
  c[a] = Z0 + 2;
  wX(a + 1);
  c[a + 6] = 0;
  c[a + 7] = 1;
  c[a + 8] = 0;
  c[a + 9] = 0;
  rX(a + 1, 2);
}
jcb.X = 1;
function kcb() {
  return 0;
}
kcb.X = 1;
function Rbb(a, d) {
  $1 = a;
  return 0 != (d | 0) ? d << 1 : 1;
}
Rbb.X = 1;
function lcb(a) {
  return a + 1;
}
lcb.X = 1;
function mcb(a, d) {
  c[a + 6] = d;
}
mcb.X = 1;
function ncb(a, d) {
  c[a + 18] = d;
}
ncb.X = 1;
function ocb(a) {
  return a + 1;
}
ocb.X = 1;
function pcb(a, d) {
  c[a + 8] = d;
}
pcb.X = 1;
function qcb(a) {
  return c[a + 7] & 1;
}
qcb.X = 1;
function rcb(a, d) {
  c[a + 9] = d;
}
rcb.X = 1;
function scb(a, d) {
  return (c[d] | 0) == (c[a + 1] | 0) ? 1 : (c[d + 1] | 0) == (c[a + 1] | 0);
}
scb.X = 1;
function tcb(a, d) {
  return (c[d] | 0) == (c[a + 1] | 0) ? 1 : (c[d + 1] | 0) == (c[a + 1] | 0);
}
tcb.X = 1;
function rk(a) {
  return k[a + 280];
}
rk.X = 1;
function ucb(a, d, e) {
  c[Y0] += 1;
  return vcb(a, d, e) ? Obb(a, d, e) : 0;
}
ucb.X = 1;
function wcb(a) {
  return lX(a + 1, 0);
}
wcb.X = 1;
function xcb(a) {
  return xX(a + 1, 0);
}
xcb.X = 1;
function ycb(a) {
  return jX(a + 1);
}
ycb.X = 1;
function zcb(a) {
  return lX(a + 1, 0);
}
zcb.X = 1;
function Acb(a) {
  return xX(a + 1, 0);
}
Acb.X = 1;
function Bcb(a) {
  return jX(a + 1);
}
Bcb.X = 1;
function vcb(a, d, e) {
  0 != (c[a + 6] | 0)
    ? ((a = c[a + 6]), (d = v[c[c[a] + 2]](a, d, e)))
    : ((a =
        (0 != ((((c[e + 2] << 16) >> 16) & ((c[d + 1] << 16) >> 16)) | 0)) & 1),
      (a =
        (a & 1
          ? 0 != ((((c[d + 2] << 16) >> 16) & ((c[e + 1] << 16) >> 16)) | 0)
          : 0) & 1),
      (d = a & 1));
  return d;
}
vcb.X = 1;
function Ccb() {}
Ccb.X = 1;
function hcb(a, d) {
  YX(a);
  c[a] = Dcb + 2;
  c[a + 1] = d;
}
hcb.X = 1;
function Ecb(a) {
  xe(a);
}
Ecb.X = 1;
function Fcb() {}
Fcb.X = 1;
function fcb(a, d, e, f) {
  YX(a);
  c[a] = Gcb + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
}
fcb.X = 1;
function Hcb(a) {
  xe(a);
}
Hcb.X = 1;
function Icb(a, d) {
  if (
    4 ==
    ((c[d] | 0) == (c[a + 1] | 0)
      ? 4
      : (c[d + 1] | 0) == (c[a + 1] | 0) ? 4 : 5)
  ) {
    var e = c[a + 2];
    v[c[c[e] + 8]](e, d, c[a + 3]);
  }
  return 0;
}
Icb.X = 1;
function Jcb() {}
Jcb.X = 1;
function Kbb(a, d) {
  YX(a);
  c[a] = Kcb + 2;
  c[a + 1] = d;
}
Kbb.X = 1;
function Lcb(a) {
  xe(a);
}
Lcb.X = 1;
function Mcb() {}
Mcb.X = 1;
function Ibb(a, d, e, f) {
  YX(a);
  c[a] = Ncb + 2;
  c[a + 1] = d;
  c[a + 2] = e;
  c[a + 3] = f;
}
Ibb.X = 1;
function Ocb(a) {
  xe(a);
}
Ocb.X = 1;
function Pcb(a, d) {
  if (
    4 ==
    ((c[d] | 0) == (c[a + 1] | 0)
      ? 4
      : (c[d + 1] | 0) == (c[a + 1] | 0) ? 4 : 5)
  ) {
    var e = c[a + 2];
    v[c[c[e] + 8]](e, d, c[a + 3]);
  }
  return 0;
}
Pcb.X = 1;
function wk(a) {
  c[a] = 1025;
  var d = a + 1;
  CU(d);
  d += 69;
  CU(d);
  d += 69;
  CU(d);
  CU(d + 69);
  c[a + 277] = 0;
  c[a + 278] = 0;
  c[a + 279] = 0;
  c[a + 284] = 0;
}
wk.X = 1;
function tk(a, d) {
  $1 = a;
  0 != (c[d + 27] | 0) &&
    (0 != (c[d + 27] | 0)) & (0 != (c[Qcb] | 0)) &&
    (v[c[Qcb]](c[d + 27]), (c[d + 27] = 0));
}
tk.X = 1;
function Rcb(a, d) {
  var e = b;
  b += 56;
  var f,
    g,
    h,
    i = e + 1,
    j = e + 2,
    l = e + 3,
    m = e + 4,
    n = e + 8,
    p = e + 12,
    r = e + 16,
    s = e + 20,
    t = e + 24,
    w = e + 28,
    x = e + 32,
    y = e + 36,
    z = e + 40,
    A = e + 44,
    C = e + 48,
    B = e + 52;
  g = -1;
  f = aU(d);
  h = 0;
  for (var K = a + 1, E = a + 1; ; ) {
    aU(K + 69 * h) < f && ((g = h), (f = aU(E + 69 * h)));
    var G = h + 1;
    h = G;
    if (4 <= (G | 0)) {
      break;
    }
  }
  k[e] = 0;
  k[i] = 0;
  k[j] = 0;
  k[l] = 0;
  0 != (g | 0)
    ? (N(m, d, a + 70),
      N(n, a + 208, a + 139),
      qn(p, m, n),
      (k[e] = Um(p)),
      (f = 1 != (g | 0) ? 8 : 9))
    : (f = 8);
  8 == f &&
    (N(r, d, a + 1),
    N(s, a + 208, a + 139),
    qn(t, r, s),
    (k[i] = Um(t)),
    (f = 2 != (g | 0) ? 9 : 10));
  9 == f &&
    (N(w, d, a + 1),
    N(x, a + 208, a + 70),
    qn(y, w, x),
    (k[j] = Um(y)),
    (f = 3 != (g | 0) ? 10 : 11));
  10 == f &&
    (N(z, d, a + 1), N(A, a + 139, a + 70), qn(C, z, A), (k[l] = Um(C)));
  jC(B, e, i, j, l);
  g = CC(B);
  b = e;
  return g;
}
Rcb.X = 1;
function Ak(a, d) {
  var e = b;
  b += 4;
  var f, g, h, i, j;
  f = rk(a) * rk(a);
  g = Xj(a);
  h = -1;
  i = 0;
  var l = (i | 0) < (g | 0);
  a: do {
    if (l) {
      for (var m = a + 1; ; ) {
        if (
          (N(e, m + 69 * i, d),
          (j = J(e, e)),
          j < f && ((f = j), (h = i)),
          (i += 1),
          (i | 0) >= (g | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = e;
  return h;
}
Ak.X = 1;
function zk(a, d) {
  var e;
  e = Xj(a);
  if (4 == (e | 0)) {
    (e = Rcb(a, d)), tk(a, a + 69 * e + 1);
  } else {
    var f = a + 279;
    c[f] += 1;
  }
  0 > (e | 0) && (e = 0);
  for (var f = d, g = a + 69 * e + 1, h = f + 69; f < h; f++, g++) {
    (c[g] = c[f]), (k[g] = k[f]);
  }
  return e;
}
zk.X = 1;
function sk(a, d, e) {
  var f = b;
  b += 32;
  var g,
    h,
    i = f + 4,
    j = f + 8,
    l = f + 12,
    m = f + 16,
    n = f + 20,
    p = f + 24,
    r = f + 28,
    s = Xj(a) - 1;
  g = s;
  s = 0 <= (s | 0);
  a: do {
    if (s) {
      for (var t = a + 1, w = f, x = i; ; ) {
        h = t + 69 * g;
        vw(f, d, h);
        var y = h + 12;
        c[y] = c[w];
        k[y] = k[w];
        c[y + 1] = c[w + 1];
        k[y + 1] = k[w + 1];
        c[y + 2] = c[w + 2];
        k[y + 2] = k[w + 2];
        c[y + 3] = c[w + 3];
        k[y + 3] = k[w + 3];
        vw(i, e, h + 4);
        y = h + 8;
        c[y] = c[x];
        k[y] = k[x];
        c[y + 1] = c[x + 1];
        k[y + 1] = k[x + 1];
        c[y + 2] = c[x + 2];
        k[y + 2] = k[x + 2];
        c[y + 3] = c[x + 3];
        k[y + 3] = k[x + 3];
        N(j, h + 12, h + 8);
        k[h + 20] = J(j, h + 16);
        h += 36;
        c[h] += 1;
        g = h = g - 1;
        if (!(0 <= (h | 0))) {
          break a;
        }
      }
    }
  } while (0);
  g = d = Xj(a) - 1;
  d = 0 <= (d | 0);
  a: do {
    if (d) {
      e = a + 1;
      i = m;
      j = n;
      s = l;
      t = r;
      w = a + 277;
      for (x = a + 278; ; ) {
        h = e + 69 * g;
        if (qk(a, h)) {
          if (
            (Q(p, h + 16, h + 20),
            N(n, h + 12, p),
            (c[i] = c[j]),
            (k[i] = k[j]),
            (c[i + 1] = c[j + 1]),
            (k[i + 1] = k[j + 1]),
            (c[i + 2] = c[j + 2]),
            (k[i + 2] = k[j + 2]),
            (c[i + 3] = c[j + 3]),
            (k[i + 3] = k[j + 3]),
            N(r, h + 8, m),
            (c[s] = c[t]),
            (k[s] = k[t]),
            (c[s + 1] = c[t + 1]),
            (k[s + 1] = k[t + 1]),
            (c[s + 2] = c[t + 2]),
            (k[s + 2] = k[t + 2]),
            (c[s + 3] = c[t + 3]),
            (k[s + 3] = k[t + 3]),
            J(l, l) > rk(a) * rk(a))
          ) {
            Ck(a, g);
          } else {
            if (0 != (c[Scb] | 0)) {
              v[c[Scb]](h, c[w], c[x]);
            }
          }
        } else {
          Ck(a, g);
        }
        g = h = g - 1;
        if (!(0 <= (h | 0))) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
sk.X = 1;
function Tcb(a, d, e, f) {
  var g = b;
  b += 18;
  var h,
    i,
    j,
    l,
    m = g + 4,
    n = g + 8,
    p = g + 12,
    r = g + 13,
    s = g + 17;
  l = th(a);
  var t = 2 > (l | 0);
  a: do {
    if (
      !t &&
      ((h = g),
      (i = jg(a, th(a) - 1)),
      (c[h] = c[i]),
      (k[h] = k[i]),
      (c[h + 1] = c[i + 1]),
      (k[h + 1] = k[i + 1]),
      (c[h + 2] = c[i + 2]),
      (k[h + 2] = k[i + 2]),
      (c[h + 3] = c[i + 3]),
      (k[h + 3] = k[i + 3]),
      (h = m),
      (i = jg(a, 0)),
      (c[h] = c[i]),
      (k[h] = k[i]),
      (c[h + 1] = c[i + 1]),
      (k[h + 1] = k[i + 1]),
      (c[h + 2] = c[i + 2]),
      (k[h + 2] = k[i + 2]),
      (c[h + 3] = c[i + 3]),
      (k[h + 3] = k[i + 3]),
      (i = J(e, g) + f),
      (h = 0),
      (h | 0) < (l | 0))
    ) {
      for (var w = m, x = g, y = m; ; ) {
        j = jg(a, h);
        c[w] = c[j];
        k[w] = k[j];
        c[w + 1] = c[j + 1];
        k[w + 1] = k[j + 1];
        c[w + 2] = c[j + 2];
        k[w + 2] = k[j + 2];
        c[w + 3] = c[j + 3];
        k[w + 3] = k[j + 3];
        var z = J(e, m) + f;
        j = z;
        z = 0 > z;
        if (0 > i) {
          var A = d;
          z ? PW(A, m) : ((k[p] = i / (i - j)), PB(n, g, m, p), PW(A, n));
        } else {
          z && ((k[s] = i / (i - j)), PB(r, g, m, s), PW(d, r), PW(d, m));
        }
        c[x] = c[y];
        k[x] = k[y];
        c[x + 1] = c[y + 1];
        k[x + 1] = k[y + 1];
        c[x + 2] = c[y + 2];
        k[x + 2] = k[y + 2];
        c[x + 3] = c[y + 3];
        k[x + 3] = k[y + 3];
        i = j;
        h += 1;
        if ((h | 0) >= (l | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
Tcb.X = 1;
function jYa(a, d, e, f, g) {
  var h = b;
  b += 63;
  var i,
    j,
    l,
    m,
    n,
    p = h + 4,
    r = h + 8,
    s = h + 9,
    t = h + 13,
    w = h + 17,
    x = h + 34,
    y = h + 38,
    z,
    A = h + 42,
    C = h + 46,
    B = h + 50,
    K = h + 54,
    E = h + 55,
    G = h + 59;
  c[Ucb] += 1;
  l = 3.4028234663852886e38;
  m = yY(a + 6);
  for (n = 0; ; ) {
    if ((n | 0) >= (m | 0)) {
      i = 9;
      break;
    }
    H(h, zY(a + 6, n) + 10, zY(a + 6, n) + 11, zY(a + 6, n) + 12);
    Bo(p, e, h);
    if (!$0(a, d, e, f, p, r)) {
      j = 0;
      i = 30;
      break;
    }
    if (k[r] < l) {
      l = k[r];
      var M = g;
      c[M] = c[p];
      k[M] = k[p];
      c[M + 1] = c[p + 1];
      k[M + 1] = k[p + 1];
      c[M + 2] = c[p + 2];
      k[M + 2] = k[p + 2];
      c[M + 3] = c[p + 3];
      k[M + 3] = k[p + 3];
    }
    n += 1;
  }
  a: do {
    if (9 == i) {
      m = yY(d + 6);
      n = 0;
      for (p = t; (n | 0) < (m | 0); ) {
        H(s, zY(d + 6, n) + 10, zY(d + 6, n) + 11, zY(d + 6, n) + 12);
        Bo(t, f, s);
        if (!$0(a, d, e, f, t, w)) {
          j = 0;
          break a;
        }
        k[w] < l &&
          ((l = k[w]),
          (r = g),
          (c[r] = c[p]),
          (k[r] = k[p]),
          (c[r + 1] = c[p + 1]),
          (k[r + 1] = k[p + 1]),
          (c[r + 2] = c[p + 2]),
          (k[r + 2] = k[p + 2]),
          (c[r + 3] = c[p + 3]),
          (k[r + 3] = k[p + 3]));
        n += 1;
      }
      m = 0;
      n = x;
      p = A;
      M = r = B;
      b: for (;;) {
        if ((m | 0) >= (th(a + 11) | 0)) {
          N(E, f + 12, e + 12);
          0 < J(E, g) &&
            (WP(G, g),
            (a = g),
            (c[a] = c[G]),
            (k[a] = k[G]),
            (c[a + 1] = c[G + 1]),
            (k[a + 1] = k[G + 1]),
            (c[a + 2] = c[G + 2]),
            (k[a + 2] = k[G + 2]),
            (c[a + 3] = c[G + 3]),
            (k[a + 3] = k[G + 3]));
          j = 1;
          break a;
        }
        z = jg(a + 11, m);
        c[n] = c[z];
        k[n] = k[z];
        c[n + 1] = c[z + 1];
        k[n + 1] = k[z + 1];
        c[n + 2] = c[z + 2];
        k[n + 2] = k[z + 2];
        c[n + 3] = c[z + 3];
        k[n + 3] = k[z + 3];
        Bo(y, e, x);
        for (z = 0; ; ) {
          if ((z | 0) >= (th(d + 11) | 0)) {
            m += 1;
            continue b;
          }
          var L = jg(d + 11, z);
          c[p] = c[L];
          k[p] = k[L];
          c[p + 1] = c[L + 1];
          k[p + 1] = k[L + 1];
          c[p + 2] = c[L + 2];
          k[p + 2] = k[L + 2];
          c[p + 3] = c[L + 3];
          k[p + 3] = k[L + 3];
          Bo(C, f, A);
          qn(B, y, C);
          L = DZ(B);
          do {
            if (!L) {
              var F = IB(B);
              c[r] = c[F];
              k[r] = k[F];
              c[r + 1] = c[F + 1];
              k[r + 1] = k[F + 1];
              c[r + 2] = c[F + 2];
              k[r + 2] = k[F + 2];
              c[r + 3] = c[F + 3];
              k[r + 3] = k[F + 3];
              if (!$0(a, d, e, f, B, K)) {
                j = 0;
                break a;
              }
              k[K] < l &&
                ((l = k[K]),
                (F = g),
                (c[F] = c[M]),
                (k[F] = k[M]),
                (c[F + 1] = c[M + 1]),
                (k[F + 1] = k[M + 1]),
                (c[F + 2] = c[M + 2]),
                (k[F + 2] = k[M + 2]),
                (c[F + 3] = c[M + 3]),
                (k[F + 3] = k[M + 3]));
            }
          } while (0);
          z += 1;
        }
      }
    }
  } while (0);
  b = h;
  return j;
}
jYa.X = 1;
function $0(a, d, e, f, g, h) {
  var i = b;
  b += 4;
  var j,
    l = i + 1,
    m = i + 2,
    n = i + 3;
  UZa(a, e, g, i, l);
  UZa(d, f, g, m, n);
  k[l] < k[m]
    ? (h = 4)
    : k[n] < k[i]
      ? (h = 4)
      : ((j = k[l] - k[m]),
        0 <= j || Vcb(89, D.ce),
        (n = k[n] - k[i]),
        0 <= n || Vcb(91, D.ye),
        (k[h] = j < n ? j : n),
        (j = 1),
        (h = 10));
  4 == h && (j = 0);
  b = i;
  return j;
}
$0.X = 1;
function Wcb(a, d) {
  var e;
  e = c[a];
  c[a] = c[d];
  c[d] = e;
}
Wcb.X = 1;
function Xcb(a, d) {
  return (d << 2) + c[a + 3];
}
Xcb.X = 1;
function CW(a) {
  yW(a);
  c[a] = a1 + 2;
  c[a + 13] = 0;
}
CW.X = 1;
function EX(a) {
  c[a] = a1 + 2;
  0 != (c[a + 13] | 0) && yh(c[a + 13]);
}
EX.X = 1;
function lYa(a, d, e, f, g, h, i) {
  var j = b;
  b += 43;
  var l = j + 5,
    m = j + 6,
    n,
    p,
    r = j + 7,
    s = j + 11,
    t,
    w = j + 15,
    x = j + 19,
    y = j + 23,
    z = j + 31,
    A = j + 35,
    C = j + 39;
  KW(j);
  c[l] = f;
  c[m] = j;
  RW(c[m], th(c[l]));
  f = -1;
  n = 3.4028234663852886e38;
  p = 0;
  var B = (p | 0) < (yY(d + 6) | 0);
  a: do {
    if (B) {
      for (;;) {
        if (
          (H(r, zY(d + 6, p) + 10, zY(d + 6, p) + 11, zY(d + 6, p) + 12),
          Bo(s, e, r),
          (t = J(s, a)),
          t < n && ((n = t), (f = p)),
          (p += 1),
          (p | 0) >= (yY(d + 6) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  if (0 > (f | 0)) {
    $10 = 1;
  } else {
    r = zY(d + 6, f);
    $numContacts = th(c[l]);
    s = rW(r);
    for (f = 0; (f | 0) < (s | 0); ) {
      (n = c[sW(r + 5, f)]),
        H(w, zY(d + 6, n) + 10, zY(d + 6, n) + 11, zY(d + 6, n) + 12),
        (n = k[zY(d + 6, n) + 13]),
        Bo(x, e, w),
        (n -= J(x, e + 12)),
        Tcb(c[l], c[m], x, n),
        Wcb(l, m),
        xZ(c[m], 0, y),
        (f += 1);
    }
    H(z, r + 10, r + 11, r + 12);
    d = k[r + 13];
    Bo(A, e, z);
    e = d - J(A, e + 12);
    for (z = 0; (z | 0) < (th(c[l]) | 0); ) {
      (d = J(A, Xcb(c[l], z)) + e),
        d <= h &&
          d >= g &&
          ((m = Xcb(c[l], z)),
          (c[C] = c[m]),
          (k[C] = k[m]),
          (c[C + 1] = c[m + 1]),
          (k[C + 1] = k[m + 1]),
          (c[C + 2] = c[m + 2]),
          (k[C + 2] = k[m + 2]),
          (c[C + 3] = c[m + 3]),
          (k[C + 3] = k[m + 3]),
          (m = i),
          v[c[c[m] + 4]](m, a, C, d)),
        (z += 1);
    }
    $10 = 0;
  }
  UW(j);
  b = j;
}
lYa.X = 1;
function kYa(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 17;
  var m,
    n,
    p,
    r = l + 4,
    s,
    t = l + 8,
    w = l + 13;
  $curMaxDist = i;
  m = -1;
  n = -3.4028234663852886e38;
  p = 0;
  var x = (p | 0) < (yY(e + 6) | 0);
  a: do {
    if (x) {
      for (;;) {
        if (
          (H(l, zY(e + 6, p) + 10, zY(e + 6, p) + 11, zY(e + 6, p) + 12),
          Bo(r, g, l),
          (s = J(r, a)),
          s > n && ((n = s), (m = p)),
          (p += 1),
          (p | 0) >= (yY(e + 6) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  if (0 <= (m | 0)) {
    KW(t);
    m = zY(e + 6, m);
    n = rW(m);
    for (p = 0; (p | 0) < (n | 0); ) {
      vw(w, g, jg(e + 1, c[sW(m, p)])), PW(t, w), (p += 1);
    }
    lYa(a, d, f, t, h, i, j);
    UW(t);
  }
  b = l;
}
kYa.X = 1;
function Ycb(a) {
  EX(a);
  yh(a);
}
Ycb.X = 1;
function Zcb(a, d) {
  var e;
  e = c[a];
  c[a] = c[d];
  c[d] = e;
}
Zcb.X = 1;
function b1(a, d) {
  return c[a + 3] + 3 * d;
}
b1.X = 1;
function $cb(a) {
  return c[a + 3 * c[a + 1] + 2];
}
$cb.X = 1;
function adb(a) {
  return c[a + 2];
}
adb.X = 1;
function bdb(a, d) {
  var e;
  e = th(a);
  (e | 0) == (NW(a) | 0) && RW(a, NLa(a, th(a)));
  var f = a + 1;
  c[f] += 1;
  f = (e << 2) + c[a + 3];
  0 != (f | 0) &&
    ((c[f] = c[d]),
    (k[f] = k[d]),
    (c[f + 1] = c[d + 1]),
    (k[f + 1] = k[d + 1]),
    (c[f + 2] = c[d + 2]),
    (k[f + 2] = k[d + 2]),
    (c[f + 3] = c[d + 3]),
    (k[f + 3] = k[d + 3]));
  return (e << 2) + c[a + 3];
}
bdb.X = 1;
function cdb(a, d, e, f, g, h) {
  return ddb(a, d, 0, e, f, g, h);
}
cdb.X = 1;
function edb(a, d, e) {
  var f, g;
  f = yY(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (var i = a + 3; ; ) {
          if ((IZ(c[i] + 14 * g), (g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (yY(a) | 0) && fdb(a, d), (g = f), (g | 0) < (d | 0))) {
        for (i = a + 3; ; ) {
          var j = c[i] + 14 * g;
          0 != (j | 0) && gdb(j, e);
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
edb.X = 1;
function hdb(a) {
  return idb(a + 3 * c[a + 1]);
}
hdb.X = 1;
function jdb(a) {
  var d = b;
  b += 92;
  var e,
    f,
    g = d + 5,
    h = d + 9,
    i = d + 24,
    j = d + 29,
    l = d + 33,
    m = d + 47,
    n,
    p,
    r = d + 51,
    s,
    t = d + 63,
    w,
    x = d + 64,
    y = d + 68,
    z = d + 72,
    A = d + 76,
    C = d + 80,
    B,
    K = d + 84,
    E = d + 88,
    G;
  0 != (c[a + 13] | 0) && yh(c[a + 13]);
  $mem = e = Ue(80, 16);
  0 == (e | 0) ? (e = 0) : xZa(e);
  c[a + 13] = e;
  KW(d);
  for (e = 0; (e | 0) < (v[c[c[a] + 22]](a) | 0); ) {
    (f = bdb(d, g)), v[c[c[a] + 25]](a, e, f), (e += 1);
  }
  kdb(h);
  cdb(h, xg(d, 0), 16, th(d), 0, 0);
  KW(i);
  g = rW(h + 10);
  xZ(i, g, j);
  j = c[a + 13] + 6;
  e = l;
  for (f = e + 14; e < f; e++) {
    (c[e] = 0), (k[e] = 0);
  }
  ldb(l);
  edb(j, g, l);
  IZ(l);
  l = th(h);
  xZ(c[a + 13] + 1, l, m);
  m = 0;
  j = (m | 0) < (l | 0);
  a: do {
    if (j) {
      for (e = a + 13; ; ) {
        f = xg(c[e] + 1, m);
        var M = xg(h, m);
        c[f] = c[M];
        k[f] = k[M];
        c[f + 1] = c[M + 1];
        k[f + 1] = k[M + 1];
        c[f + 2] = c[M + 2];
        k[f + 2] = k[M + 2];
        c[f + 3] = c[M + 3];
        k[f + 3] = k[M + 3];
        m += 1;
        if ((m | 0) >= (l | 0)) {
          break a;
        }
      }
    }
  } while (0);
  m = 0;
  l = a + 13;
  j = r + 4;
  e = a + 13;
  f = a + 13;
  var M = a + 13,
    L = a + 13,
    F = a + 13,
    I = a + 13;
  B = a + 13;
  for (G = a + 13; (m | 0) < (g | 0); ) {
    p = n = b1(h + 5, c[QV(h + 10, m)]);
    $maxCross2 = s = 0;
    for ($chosenEdge = -1; ; ) {
      c[t] = $cb(p);
      p_(BZ(c[l] + 6, m), t);
      w = adb(p);
      var R = xg(h, c[t]);
      c[x] = c[R];
      k[x] = k[R];
      c[x + 1] = c[R + 1];
      k[x + 1] = k[R + 1];
      c[x + 2] = c[R + 2];
      k[x + 2] = k[R + 2];
      c[x + 3] = c[R + 3];
      k[x + 3] = k[R + 3];
      w = xg(h, w);
      c[y] = c[w];
      k[y] = k[w];
      c[y + 1] = c[w + 1];
      k[y + 1] = k[w + 1];
      c[y + 2] = c[w + 2];
      k[y + 2] = k[w + 2];
      c[y + 3] = c[w + 3];
      k[y + 3] = k[w + 3];
      N(z, y, x);
      IB(z);
      2 > (s | 0) &&
        ((w = s),
        (s = w + 1),
        (w = (w << 2) + r),
        (c[w] = c[z]),
        (k[w] = k[z]),
        (c[w + 1] = c[z + 1]),
        (k[w + 1] = k[z + 1]),
        (c[w + 2] = c[z + 2]),
        (k[w + 2] = k[z + 2]),
        (c[w + 3] = c[z + 3]),
        (k[w + 3] = k[z + 3]));
      p = hdb(p);
      if ((p | 0) == (n | 0)) {
        break;
      }
    }
    n = 1.0000000150474662e30;
    p = xg(i, m);
    2 == (s | 0)
      ? (qn(A, r, j),
        (s = p),
        (c[s] = c[A]),
        (k[s] = k[A]),
        (c[s + 1] = c[A + 1]),
        (k[s + 1] = k[A + 1]),
        (c[s + 2] = c[A + 2]),
        (k[s + 2] = k[A + 2]),
        (c[s + 3] = c[A + 3]),
        (k[s + 3] = k[A + 3]),
        IB(xg(i, m)),
        (k[BZ(c[e] + 6, m) + 10] = -k[xg(i, m)]),
        (k[BZ(c[f] + 6, m) + 11] = -k[xg(i, m) + 1]),
        (k[BZ(c[M] + 6, m) + 12] = -k[xg(i, m) + 2]),
        (k[BZ(c[L] + 6, m) + 13] = n))
      : EC(p);
    s = 0;
    w = (s | 0) < (rW(BZ(c[F] + 6, m)) | 0);
    a: do {
      if (w) {
        for (;;) {
          if (
            ((p = J(xg(c[B] + 1, c[QV(BZ(c[G] + 6, m), s)]), xg(i, m))),
            n > p && (n = p),
            (s += 1),
            (s | 0) >= (rW(BZ(c[F] + 6, m)) | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    k[BZ(c[I] + 6, m) + 13] = n;
    m += 1;
  }
  t = 0 != (yY(c[a + 13] + 6) | 0);
  a: do {
    if (t && 0 != (th(h) | 0)) {
      r = 0;
      x = a + 13;
      y = a + 13;
      z = a + 13;
      A = a + 13;
      g = a + 13;
      l = m = a;
      j = a + 13;
      e = a + 13;
      f = a + 13;
      M = a + 13;
      L = a + 13;
      F = a + 13;
      for (I = a + 13; ; ) {
        if ((r | 0) >= (yY(c[x] + 6) | 0)) {
          break a;
        }
        H(C, BZ(c[y] + 6, r) + 10, BZ(c[z] + 6, r) + 11, BZ(c[A] + 6, r) + 12);
        B = k[BZ(c[g] + 6, r) + 13];
        G = c[c[l] + 15];
        WP(E, C);
        v[G](K, m, E);
        B = J(K, C) < B;
        b: do {
          if (
            B &&
            ((G = BZ(c[j] + 6, r) + 10),
            (k[G] *= -1),
            (G = BZ(c[e] + 6, r) + 11),
            (k[G] *= -1),
            (G = BZ(c[f] + 6, r) + 12),
            (k[G] *= -1),
            (G = BZ(c[M] + 6, r) + 13),
            (k[G] *= -1),
            (G = rW(BZ(c[L] + 6, r))),
            (s = 0),
            (s | 0) < ((((G | 0) / 2) & -1) | 0))
          ) {
            for (;;) {
              if (
                (Zcb(QV(BZ(c[F] + 6, r), s), QV(BZ(c[I] + 6, r), G - 1 + -s)),
                (s += 1),
                (s | 0) >= ((((G | 0) / 2) & -1) | 0))
              ) {
                break b;
              }
            }
          }
        } while (0);
        r += 1;
      }
    }
  } while (0);
  GZa(c[a + 13]);
  $10 = 1;
  UW(i);
  mdb(h);
  UW(d);
  b = d;
  return 1;
}
jdb.X = 1;
function ndb(a) {
  return c[a + 2];
}
ndb.X = 1;
function odb(a, d, e) {
  var f = b;
  b += 15;
  var g = f + 1,
    h = f + 2,
    i,
    j = f + 3;
  i = f + 7;
  var l = f + 8,
    m = f + 9,
    n = f + 10,
    p = f + 11;
  k[f] = 0;
  k[g] = 0;
  k[h] = 0;
  H(a, f, g, h);
  g = -0xde0b6b000000000;
  c[j] = c[e];
  k[j] = k[e];
  c[j + 1] = c[e + 1];
  k[j + 1] = k[e + 1];
  c[j + 2] = c[e + 2];
  k[j + 2] = k[e + 2];
  c[j + 3] = c[e + 3];
  k[j + 3] = k[e + 3];
  e = Um(j);
  9999999747378752e-20 > e
    ? ((k[i] = 1), (k[l] = 0), (k[m] = 0), pe(j, i, l, m))
    : ((k[n] = 1 / ec(e)), LC(j, n));
  i = 0;
  m = (i | 0) < (v[c[c[d] + 22]](d) | 0);
  a: do {
    if (m) {
      n = d;
      e = a;
      for (h = p; ; ) {
        if (
          (v[c[c[n] + 25]](d, i, p),
          (l = J(j, p)),
          l > g &&
            ((g = l),
            (c[e] = c[h]),
            (k[e] = k[h]),
            (c[e + 1] = c[h + 1]),
            (k[e + 1] = k[h + 1]),
            (c[e + 2] = c[h + 2]),
            (k[e + 2] = k[h + 2]),
            (c[e + 3] = c[h + 3]),
            (k[e + 3] = k[h + 3])),
          (i += 1),
          (i | 0) >= (v[c[c[d] + 22]](d) | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = f;
}
odb.X = 1;
function pdb(a, d, e, f) {
  var g = b;
  b += 4;
  var h, i, j, l;
  h = 0;
  i = (h | 0) < (f | 0);
  a: do {
    if (i) {
      for (;;) {
        if (
          ((k[(h << 2) + e + 3] = -0xde0b6b000000000),
          (h += 1),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  j = 0;
  var m = (j | 0) < (f | 0);
  a: do {
    if (m) {
      for (var n = a, p = a, r = g; ; ) {
        l = (j << 2) + d;
        h = 0;
        var s = (h | 0) < (v[c[c[n] + 22]](a) | 0);
        b: do {
          if (s) {
            for (;;) {
              v[c[c[p] + 25]](a, h, g);
              i = J(l, g);
              if (i > k[(j << 2) + e + 3]) {
                var t = (j << 2) + e;
                c[t] = c[r];
                k[t] = k[r];
                c[t + 1] = c[r + 1];
                k[t + 1] = k[r + 1];
                c[t + 2] = c[r + 2];
                k[t + 2] = k[r + 2];
                c[t + 3] = c[r + 3];
                k[t + 3] = k[r + 3];
                k[(j << 2) + e + 3] = i;
              }
              h += 1;
              if ((h | 0) >= (v[c[c[n] + 22]](a) | 0)) {
                break b;
              }
            }
          }
        } while (0);
        j += 1;
        if ((j | 0) >= (f | 0)) {
          break a;
        }
      }
    }
  } while (0);
  b = g;
}
pdb.X = 1;
function qdb(a, d, e) {
  var f = b;
  b += 45;
  var g,
    h = f + 16,
    i = f + 20,
    j = f + 24,
    l = f + 28,
    m = f + 32,
    n = f + 33,
    p = f + 34,
    r = f + 38,
    s = f + 42,
    t = f + 43,
    w = f + 44;
  g = v[c[c[a] + 11]](a);
  eQ(f);
  v[c[c[a] + 2]](a, f, h, i);
  N(l, i, h);
  k[m] = 0.5;
  Q(j, l, m);
  h = 2 * (k[j] + g);
  a = 2 * (k[j + 1] + g);
  g = 2 * (k[j + 2] + g);
  j = h * h;
  a *= a;
  g *= g;
  k[n] = 0.0833333283662796 * d;
  k[s] = a + g;
  k[t] = j + g;
  k[w] = j + a;
  H(r, s, t, w);
  Q(p, r, n);
  c[e] = c[p];
  k[e] = k[p];
  c[e + 1] = c[p + 1];
  k[e + 1] = k[p + 1];
  c[e + 2] = c[p + 2];
  k[e + 2] = k[p + 2];
  c[e + 3] = c[p + 3];
  k[e + 3] = k[p + 3];
  b = f;
}
qdb.X = 1;
function rdb(a, d) {
  FX(a, d);
  bh(a);
}
rdb.X = 1;
function bh(a) {
  var d = b;
  b += 60;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5,
    j = d + 6,
    l = d + 7,
    m = d + 8,
    n = d + 9,
    p = d + 10,
    r = d + 11,
    s = d + 12,
    t = d + 13,
    w = d + 14,
    x = d + 15,
    y = d + 16,
    z = d + 17,
    A = d + 18,
    C = d + 42,
    B = d + 43,
    K = d + 44,
    E = d + 45,
    G = d + 46,
    M = d + 47,
    L = d + 48,
    F = d + 49,
    I = d + 50,
    R = d + 51,
    O = d + 52,
    Z = d + 53,
    P = d + 54,
    S = d + 55,
    da = d + 56,
    V = d + 57,
    ba = d + 58,
    $ = d + 59;
  c[a + 22] = 1;
  0 == (c[sdb] << 24) >> 24 &&
    0 != (Hb(sdb) | 0) &&
    ((k[d] = 1),
    (k[e] = 0),
    (k[f] = 0),
    H(c1, d, e, f),
    (k[g] = 0),
    (k[h] = 1),
    (k[i] = 0),
    H(c1 + 4, g, h, i),
    (k[j] = 0),
    (k[l] = 0),
    (k[m] = 1),
    H(c1 + 8, j, l, m),
    (k[n] = -1),
    (k[p] = 0),
    (k[r] = 0),
    H(c1 + 12, n, p, r),
    (k[s] = 0),
    (k[t] = -1),
    (k[w] = 0),
    H(c1 + 16, s, t, w),
    (k[x] = 0),
    (k[y] = 0),
    (k[z] = -1),
    H(c1 + 20, x, y, z));
  k[C] = 0;
  k[B] = 0;
  k[K] = 0;
  H(A, C, B, K);
  e = A + 4;
  k[E] = 0;
  k[G] = 0;
  k[M] = 0;
  H(e, E, G, M);
  E = e + 4;
  k[L] = 0;
  k[F] = 0;
  k[I] = 0;
  H(E, L, F, I);
  L = E + 4;
  k[R] = 0;
  k[O] = 0;
  k[Z] = 0;
  H(L, R, O, Z);
  R = L + 4;
  k[P] = 0;
  k[S] = 0;
  k[da] = 0;
  H(R, P, S, da);
  k[V] = 0;
  k[ba] = 0;
  k[$] = 0;
  H(R + 4, V, ba, $);
  v[c[c[a] + 17]](a, c1, A, 6);
  P = 0;
  S = a + 11;
  da = a + 18;
  V = a + 11;
  for (
    a += 14;
    !((k[da + P] = k[(P << 2) + A + P] + k[S]),
    (k[a + P] = k[((P + 3) << 2) + A + P] - k[V]),
    (P = ba = P + 1),
    3 <= (ba | 0));

  ) {}
  b = d;
}
bh.X = 1;
function vZ(a) {
  var d = b;
  b += 6;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5;
  CW(a);
  c[a] = tdb + 2;
  k[d] = 1;
  k[e] = 1;
  k[f] = 1;
  H(a + 14, d, e, f);
  k[g] = -1;
  k[h] = -1;
  k[i] = -1;
  H(a + 18, g, h, i);
  c[a + 22] = 0;
  b = d;
}
vZ.X = 1;
function udb(a, d, e, f) {
  eh(a, d, e, f, v[c[c[a] + 11]](a));
}
udb.X = 1;
function vdb(a) {
  EX(a);
}
vdb.X = 1;
function fdb(a, d) {
  var e;
  (ndb(a) | 0) < (d | 0) &&
    ((e = wdb(a, d)),
    xdb(a, 0, yY(a), e),
    m_a(a, 0, yY(a)),
    n_a(a),
    (c[a + 4] = 1),
    (c[a + 3] = e),
    (c[a + 2] = d));
}
fdb.X = 1;
function ydb(a, d) {
  var e = b;
  b += 1;
  var f;
  vW(a);
  f = rW(d);
  c[e] = 0;
  PV(a, f, e);
  MKa(d, 0, f, c[a + 3]);
  b = e;
}
ydb.X = 1;
function wdb(a, d) {
  return 0 != (d | 0) ? zdb(a, d, 0) : 0;
}
wdb.X = 1;
function xdb(a, d, e, f) {
  var g = (d | 0) < (e | 0);
  a: do {
    if (g) {
      for (var h = a + 3; ; ) {
        var i = f + 14 * d;
        0 != (i | 0) && gdb(i, c[h] + 14 * d);
        d += 1;
        if ((d | 0) >= (e | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
xdb.X = 1;
function zdb(a, d, e) {
  $1 = a;
  $3 = e;
  return Ue(56 * d, 16);
}
zdb.X = 1;
function d1(a) {
  Adb(a, 0, e1(a));
  Bdb(a);
  Cdb(a);
}
d1.X = 1;
function Ddb(a) {
  EX(a);
  yh(a);
}
Ddb.X = 1;
function gdb(a, d) {
  ydb(a, d);
  ydb(a + 5, d + 5);
  var e = a + 10,
    f = d + 10;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
}
gdb.X = 1;
function mdb(a) {
  wW(a + 10);
  d1(a + 5);
  UW(a);
}
mdb.X = 1;
function Adb(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
  } while (0);
}
Adb.X = 1;
function e1(a) {
  return c[a + 1];
}
e1.X = 1;
function Cdb(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
Cdb.X = 1;
function idb(a) {
  return a + 3 * c[a];
}
idb.X = 1;
function Bdb(a) {
  0 != (c[a + 3] | 0) && (c[a + 4] & 1 && Edb(a, c[a + 3]), (c[a + 3] = 0));
}
Bdb.X = 1;
function Edb(a, d) {
  $1 = a;
  yh(d);
}
Edb.X = 1;
function ldb(a) {
  vW(a);
  vW(a + 5);
}
ldb.X = 1;
function kdb(a) {
  KW(a);
  Cdb(a + 5);
  vW(a + 10);
}
kdb.X = 1;
function mW(a) {
  var d = b;
  b += 6;
  var e = d + 1,
    f = d + 2,
    g = d + 3,
    h = d + 4,
    i = d + 5;
  c[a] = f1 + 2;
  c[a + 13] = 278;
  c[a + 15] = 0;
  O0(a + 16);
  O0(a + 21);
  N0(a + 26);
  N0(a + 31);
  c[a + 36] = 0;
  g1(a + 37);
  c[a + 42] = 0;
  k[d] = -3.4028234663852886e38;
  k[e] = -3.4028234663852886e38;
  k[f] = -3.4028234663852886e38;
  pe(a + 1, d, e, f);
  k[g] = 3.4028234663852886e38;
  k[h] = 3.4028234663852886e38;
  k[i] = 3.4028234663852886e38;
  pe(a + 5, g, h, i);
  b = d;
}
mW.X = 1;
function So(a) {
  var d = b;
  b += 18;
  var e,
    f = d + 7;
  c[a + 15] = 1;
  e = 0;
  c[a + 15] & 1 &&
    ((e = s0(a + 26)),
    (c[d] = 0),
    (k[d] = 0),
    (c[d + 1] = 0),
    (k[d + 1] = 0),
    (c[d + 2] = 0),
    (k[d + 2] = 0),
    (c[d + 3] = 0),
    (k[d + 3] = 0),
    (c[d + 4] = 0),
    (k[d + 4] = 0),
    (c[d + 5] = 0),
    (k[d + 5] = 0),
    (c[d + 6] = 0),
    (k[d + 6] = 0),
    H0(a + 31, e << 1, d));
  c[a + 14] = 0;
  J0(a, 0, e);
  c[a + 15] & 1 &&
    0 == (C0(a + 37) | 0) &&
    ((e = K0(a + 37, f)),
    ZU(e, D0(a + 31, 0)),
    (c[e + 6] = 0),
    (c[e + 7] = E0(D0(a + 31, 0)) ? 1 : F0(D0(a + 31, 0))));
  c[a + 42] = C0(a + 37);
  L0(a + 26);
  M0(a + 16);
  b = d;
}
So.X = 1;
function J0(a, d, e) {
  var f = b;
  b += 8;
  var g,
    h,
    i,
    j,
    l = f + 4;
  i = c[a + 14];
  if (1 == ((e - d) | 0)) {
    Fdb(a, c[a + 14], d), (a += 14), (c[a] += 1);
  } else {
    g = Gdb(a, d, e, Hdb(a, d, e));
    j = c[a + 14];
    Idb(a, c[a + 14], a + 5);
    Jdb(a, c[a + 14], a + 1);
    h = d;
    var m = (h | 0) < (e | 0),
      n = a + 14,
      p = c[n];
    a: do {
      if (m) {
        for (var r = p; ; ) {
          if (
            (h1(f, a, h),
            i1(l, a, h),
            Kdb(a, r, f, l),
            (h += 1),
            (r = c[n]),
            (h | 0) >= (e | 0))
          ) {
            var s = r;
            break a;
          }
        }
      } else {
        s = p;
      }
    } while (0);
    c[n] = s + 1;
    h = c[a + 14];
    J0(a, d, g);
    d = c[a + 14];
    J0(a, g, e);
    e = c[a + 14] - i;
    c[a + 15] & 1 &&
      (($sizeQuantizedNode = 16), 2048 < ((e << 4) | 0) && Ldb(a, h, d));
    Mdb(a, j, e);
  }
  b = f;
}
J0.X = 1;
function Wo(a, d, e, f) {
  var g = b;
  b += 28;
  var h = g + 1,
    i = g + 5,
    j = g + 9,
    l = g + 13,
    m = g + 17,
    n = g + 21,
    p = g + 25,
    r = g + 26,
    s = g + 27;
  k[g] = f;
  H(h, g, g, g);
  N(i, d, h);
  d = a + 1;
  c[d] = c[i];
  k[d] = k[i];
  c[d + 1] = c[i + 1];
  k[d + 1] = k[i + 1];
  c[d + 2] = c[i + 2];
  k[d + 2] = k[i + 2];
  c[d + 3] = c[i + 3];
  k[d + 3] = k[i + 3];
  wn(j, e, h);
  e = a + 5;
  c[e] = c[j];
  k[e] = k[j];
  c[e + 1] = c[j + 1];
  k[e + 1] = k[j + 1];
  c[e + 2] = c[j + 2];
  k[e + 2] = k[j + 2];
  c[e + 3] = c[j + 3];
  k[e + 3] = k[j + 3];
  N(l, a + 5, a + 1);
  k[p] = 65533;
  k[r] = 65533;
  k[s] = 65533;
  H(n, p, r, s);
  eX(m, n, l);
  j = a + 9;
  c[j] = c[m];
  k[j] = k[m];
  c[j + 1] = c[m + 1];
  k[j + 1] = k[m + 1];
  c[j + 2] = c[m + 2];
  k[j + 2] = k[m + 2];
  c[j + 3] = c[m + 3];
  k[j + 3] = k[m + 3];
  c[a + 15] = 1;
  b = g;
}
Wo.X = 1;
function Fdb(a, d, e) {
  if (c[a + 15] & 1) {
    (d = D0(a + 31, d)),
      (a = D0(a + 26, e)),
      (c[d] = c[a]),
      (k[d] = k[a]),
      (c[d + 1] = c[a + 1]),
      (k[d + 1] = k[a + 1]),
      (c[d + 2] = c[a + 2]),
      (k[d + 2] = k[a + 2]),
      (c[d + 3] = c[a + 3]),
      (k[d + 3] = k[a + 3]),
      (c[d + 4] = c[a + 4]),
      (k[d + 4] = k[a + 4]),
      (c[d + 5] = c[a + 5]),
      (k[d + 5] = k[a + 5]),
      (c[d + 6] = c[a + 6]),
      (k[d + 6] = k[a + 6]);
  } else {
    e = j1(a + 16, e);
    a = j1(a + 21, d);
    for (d = e + 16; e < d; e++, a++) {
      (c[a] = c[e]), (k[a] = k[e]);
    }
  }
}
Fdb.X = 1;
function Hdb(a, d, e) {
  var f = b;
  b += 58;
  var g;
  g = f + 4;
  var h = f + 5,
    i = f + 6,
    j = f + 7,
    l = f + 11,
    m = f + 12,
    n = f + 13,
    p = f + 14,
    r = f + 18,
    s = f + 19,
    t = f + 23,
    w = f + 27,
    x = f + 31,
    y = f + 32,
    z = f + 36,
    A = f + 37,
    C = f + 41,
    B = f + 45,
    K = f + 49,
    E = f + 53,
    G = f + 57;
  k[g] = 0;
  k[h] = 0;
  k[i] = 0;
  H(f, g, h, i);
  k[l] = 0;
  k[m] = 0;
  k[n] = 0;
  H(j, l, m, n);
  h = e - d;
  g = d;
  i = (g | 0) < (e | 0);
  a: do {
    if (i) {
      for (;;) {
        if (
          ((k[r] = 0.5),
          i1(t, a, g),
          h1(w, a, g),
          wn(s, t, w),
          Q(p, s, r),
          xn(f, p),
          (g += 1),
          (g | 0) >= (e | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[x] = 1 / (h | 0);
  LC(f, x);
  g = d;
  d = (g | 0) < (e | 0);
  a: do {
    if (d) {
      p = K;
      for (r = E; ; ) {
        if (
          ((k[z] = 0.5),
          i1(C, a, g),
          h1(B, a, g),
          wn(A, C, B),
          Q(y, A, z),
          N(K, y, f),
          ig(E, K, K),
          (c[p] = c[r]),
          (k[p] = k[r]),
          (c[p + 1] = c[r + 1]),
          (k[p + 1] = k[r + 1]),
          (c[p + 2] = c[r + 2]),
          (k[p + 2] = k[r + 2]),
          (c[p + 3] = c[r + 3]),
          (k[p + 3] = k[r + 3]),
          xn(j, K),
          (g += 1),
          (g | 0) >= (e | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[G] = 1 / ((h | 0) - 1);
  LC(j, G);
  a = fC(j);
  b = f;
  return a;
}
Hdb.X = 1;
function Ndb(a) {
  G0(a);
  yh(a);
}
Ndb.X = 1;
function G0(a) {
  c[a] = f1 + 2;
  Odb(a + 37);
  L0(a + 31);
  L0(a + 26);
  M0(a + 21);
  M0(a + 16);
}
G0.X = 1;
function k1(a, d) {
  return c[a + 3] + 7 * d;
}
k1.X = 1;
function Gdb(a, d, e, f) {
  var g = b;
  b += 42;
  var h, i, j, l;
  h = g + 4;
  var m = g + 5,
    n = g + 6;
  l = g + 7;
  var p = g + 11,
    r = g + 12,
    s = g + 16,
    t = g + 20,
    w = g + 24,
    x = g + 25,
    y = g + 29,
    z = g + 30,
    A = g + 34,
    C = g + 38;
  i = d;
  j = e - d;
  k[h] = 0;
  k[m] = 0;
  k[n] = 0;
  H(g, h, m, n);
  h = d;
  m = (h | 0) < (e | 0);
  a: do {
    if (m) {
      for (;;) {
        if (
          ((k[p] = 0.5),
          i1(s, a, h),
          h1(t, a, h),
          wn(r, s, t),
          Q(l, r, p),
          xn(g, l),
          (h += 1),
          (h | 0) >= (e | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  k[w] = 1 / (j | 0);
  LC(g, w);
  l = k[g + f];
  h = d;
  p = (h | 0) < (e | 0);
  a: do {
    if (p) {
      for (;;) {
        if (
          ((k[y] = 0.5),
          i1(A, a, h),
          h1(C, a, h),
          wn(z, A, C),
          Q(x, z, y),
          k[x + f] > l && (Pdb(a, h, i), (i += 1)),
          (h += 1),
          (h | 0) >= (e | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  a = ((j | 0) / 3) & -1;
  ((i | 0) <= ((a + d) | 0) ? 1 : (i | 0) >= ((e - 1 + -a) | 0)) & 1 &&
    (i = (j >> 1) + d);
  b = g;
  return i;
}
Gdb.X = 1;
function Idb(a, d, e) {
  c[a + 15] & 1
    ? Xo(a, D0(a + 31, d), e, 0)
    : ((a = j1(a + 21, d)),
      (c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]),
      (c[a + 2] = c[e + 2]),
      (k[a + 2] = k[e + 2]),
      (c[a + 3] = c[e + 3]),
      (k[a + 3] = k[e + 3]));
}
Idb.X = 1;
function Jdb(a, d, e) {
  c[a + 15] & 1
    ? Xo(a, D0(a + 31, d) + 3, e, 1)
    : ((a = j1(a + 21, d) + 4),
      (c[a] = c[e]),
      (k[a] = k[e]),
      (c[a + 1] = c[e + 1]),
      (k[a + 1] = k[e + 1]),
      (c[a + 2] = c[e + 2]),
      (k[a + 2] = k[e + 2]),
      (c[a + 3] = c[e + 3]),
      (k[a + 3] = k[e + 3]));
}
Jdb.X = 1;
function Kdb(a, d, e, f) {
  var g = b;
  b += 6;
  var h = g + 3,
    i,
    j = c[a + 15] & 1;
  a: do {
    if (j) {
      Xo(a, g, e, 0);
      Xo(a, h, f, 1);
      i = 0;
      for (var l = a + 31, m = a + 31, n = a + 31, p = a + 31; ; ) {
        ((c[D0(l, d) + i] & 65535) | 0) > ((c[g + i] & 65535) | 0) &&
          (c[D0(m, d) + i] = c[g + i]);
        ((c[D0(n, d) + i + 3] & 65535) | 0) < ((c[h + i] & 65535) | 0) &&
          (c[D0(p, d) + i + 3] = c[h + i]);
        var r = i + 1;
        i = r;
        if (3 <= (r | 0)) {
          break a;
        }
      }
    } else {
      hp(j1(a + 21, d), e), gp(j1(a + 21, d) + 4, f);
    }
  } while (0);
  b = g;
}
Kdb.X = 1;
function h1(a, d, e) {
  c[d + 15] & 1
    ? qp(a, d, k1(d + 26, e))
    : ((d = l1(d + 16, e)),
      (c[a] = c[d]),
      (k[a] = k[d]),
      (c[a + 1] = c[d + 1]),
      (k[a + 1] = k[d + 1]),
      (c[a + 2] = c[d + 2]),
      (k[a + 2] = k[d + 2]),
      (c[a + 3] = c[d + 3]),
      (k[a + 3] = k[d + 3]));
}
h1.X = 1;
function i1(a, d, e) {
  c[d + 15] & 1
    ? qp(a, d, k1(d + 26, e) + 3)
    : ((d = l1(d + 16, e) + 4),
      (c[a] = c[d]),
      (k[a] = k[d]),
      (c[a + 1] = c[d + 1]),
      (k[a + 1] = k[d + 1]),
      (c[a + 2] = c[d + 2]),
      (k[a + 2] = k[d + 2]),
      (c[a + 3] = c[d + 3]),
      (k[a + 3] = k[d + 3]));
}
i1.X = 1;
function Ldb(a, d, e) {
  var f = b;
  b += 22;
  var g, h, i, j, l, m;
  m = f + 11;
  g = D0(a + 31, d);
  h = E0(g) ? 1 : F0(g);
  i = D0(a + 31, e);
  j = E0(i) ? 1 : F0(i);
  var n = j << 4;
  2048 >= ((h << 4) | 0) &&
    ((l = K0(a + 37, f)), ZU(l, g), (c[l + 6] = d), (c[l + 7] = h));
  d = n;
  2048 >= (d | 0) &&
    ((m = K0(a + 37, m)), ZU(m, i), (c[m + 6] = e), (c[m + 7] = j));
  c[a + 42] = C0(a + 37);
  b = f;
}
Ldb.X = 1;
function Mdb(a, d, e) {
  c[a + 15] & 1 ? (c[D0(a + 31, d) + 6] = -e) : (c[j1(a + 21, d) + 8] = e);
}
Mdb.X = 1;
function Pdb(a, d, e) {
  var f = b;
  b += 23;
  var g = f + 7;
  if (c[a + 15] & 1) {
    g = D0(a + 26, d);
    c[f] = c[g];
    k[f] = k[g];
    c[f + 1] = c[g + 1];
    k[f + 1] = k[g + 1];
    c[f + 2] = c[g + 2];
    k[f + 2] = k[g + 2];
    c[f + 3] = c[g + 3];
    k[f + 3] = k[g + 3];
    c[f + 4] = c[g + 4];
    k[f + 4] = k[g + 4];
    c[f + 5] = c[g + 5];
    k[f + 5] = k[g + 5];
    c[f + 6] = c[g + 6];
    k[f + 6] = k[g + 6];
    var g = D0(a + 26, d),
      h = D0(a + 26, e);
    c[g] = c[h];
    k[g] = k[h];
    c[g + 1] = c[h + 1];
    k[g + 1] = k[h + 1];
    c[g + 2] = c[h + 2];
    k[g + 2] = k[h + 2];
    c[g + 3] = c[h + 3];
    k[g + 3] = k[h + 3];
    c[g + 4] = c[h + 4];
    k[g + 4] = k[h + 4];
    c[g + 5] = c[h + 5];
    k[g + 5] = k[h + 5];
    c[g + 6] = c[h + 6];
    k[g + 6] = k[h + 6];
    a = D0(a + 26, e);
    c[a] = c[f];
    k[a] = k[f];
    c[a + 1] = c[f + 1];
    k[a + 1] = k[f + 1];
    c[a + 2] = c[f + 2];
    k[a + 2] = k[f + 2];
    c[a + 3] = c[f + 3];
    k[a + 3] = k[f + 3];
    c[a + 4] = c[f + 4];
    k[a + 4] = k[f + 4];
    c[a + 5] = c[f + 5];
    k[a + 5] = k[f + 5];
    c[a + 6] = c[f + 6];
    k[a + 6] = k[f + 6];
  } else {
    for (var h = j1(a + 16, d), i = g, j = h + 16; h < j; h++, i++) {
      (c[i] = c[h]), (k[i] = k[h]);
    }
    d = j1(a + 16, d);
    h = j1(a + 16, e);
    i = d;
    for (j = h + 16; h < j; h++, i++) {
      (c[i] = c[h]), (k[i] = k[h]);
    }
    a = j1(a + 16, e);
    h = g;
    i = a;
    for (j = h + 16; h < j; h++, i++) {
      (c[i] = c[h]), (k[i] = k[h]);
    }
  }
  b = f;
}
Pdb.X = 1;
function $o(a, d, e, f) {
  var g = b;
  b += 6;
  var h = g + 3;
  c[a + 15] & 1
    ? (fp(a, g, e, 0),
      fp(a, h, f, 1),
      (e = c[a + 36]),
      0 == (e | 0)
        ? Qdb(a, d, g, h, 0, c[a + 14])
        : 1 == (e | 0)
          ? Rdb(a, d, g, h)
          : 2 == (e | 0) && m1(a, k1(a + 31, 0), d, g, h))
    : Sdb(a, d, e, f);
  b = g;
}
$o.X = 1;
function Qdb(a, d, e, f, g, h) {
  var i, j, l, m, n;
  j = g;
  l = 0;
  $subTreeSize = h - g;
  a = k1(a + 31, g);
  g = (j | 0) < (h | 0);
  a: do {
    if (g) {
      for (;;) {
        if (
          ((l += 1),
          (n = S0(e, f, a, a + 3)),
          (m = E0(a) & 1),
          m & 1
            ? 0 == (n | 0)
              ? (i = 7)
              : ((i = d), v[c[c[i] + 2]](i, Q0(a), R0(a)), (i = 6))
            : (i = 6),
          6 == i && (i = 0 != (n | 0) ? 8 : 7),
          7 == i &&
            (m & 1 ? (i = 8) : ((m = F0(a)), (a += 7 * m), (j += m), (i = 10))),
          8 == i && ((a += 7), (j += 1)),
          (j | 0) >= (h | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  (c[n1] | 0) < (l | 0) && (c[n1] = l);
}
Qdb.X = 1;
function Rdb(a, d, e, f) {
  var g, h;
  g = 0;
  var i = a + 37,
    j = (g | 0) < (C0(i) | 0);
  a: do {
    if (j) {
      for (var l = a + 37; ; ) {
        h = o1(l, g);
        var m = S0(e, f, h, h + 3);
        $overlap = m;
        0 != (m | 0) && Qdb(a, d, e, f, c[h + 6], c[h + 7] + c[h + 6]);
        g += 1;
        if ((g | 0) >= (C0(i) | 0)) {
          break a;
        }
      }
    }
  } while (0);
}
Rdb.X = 1;
function l1(a, d) {
  return (d << 4) + c[a + 3];
}
l1.X = 1;
function o1(a, d) {
  return c[a + 3] + 11 * d;
}
o1.X = 1;
function j1(a, d) {
  return (d << 4) + c[a + 3];
}
j1.X = 1;
function m1(a, d, e, f, g) {
  var h, i;
  i = S0(f, g, d, d + 3);
  h = E0(d) & 1;
  if (0 != (i | 0)) {
    if (h & 1) {
      v[c[c[e] + 2]](e, Q0(d), R0(d));
    } else {
      (d += 7),
        m1(a, d, e, f, g),
        m1(a, E0(d) ? d + 7 : d + 7 * F0(d), e, f, g);
    }
  }
}
m1.X = 1;
function Sdb(a, d, e, f) {
  var g, h, i, j, l, m;
  h = l1(a + 21, 0);
  l = j = 0;
  var a = a + 14,
    n = (j | 0) < (c[a] | 0);
  a: do {
    if (n) {
      for (;;) {
        if (
          ((l += 1),
          (m = hX(e, f, h, h + 4) & 1),
          (i = (-1 == (c[h + 8] | 0)) & 1),
          i & 1
            ? 0 == (m | 0)
              ? (g = 7)
              : ((g = d), v[c[c[g] + 2]](g, c[h + 9], c[h + 10]), (g = 6))
            : (g = 6),
          6 == g && (g = 0 != (m | 0) ? 8 : 7),
          7 == g &&
            (i & 1
              ? (g = 8)
              : ((i = c[h + 8]), (h = (i << 4) + h), (j += i), (g = 10))),
          8 == g && ((h += 16), (j += 1)),
          (j | 0) >= (c[a] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  (c[n1] | 0) < (l | 0) && (c[n1] = l);
}
Sdb.X = 1;
function Tdb(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 32;
  var m,
    n,
    p,
    r,
    s = l + 4,
    t = l + 8,
    w = l + 12,
    x = l + 16,
    y = l + 20,
    z = l + 23,
    A = l + 31;
  $7 = i;
  $8 = j;
  i = l1(a + 21, 0);
  $aabbOverlap = p = j = 0;
  c[l] = c[e];
  k[l] = k[e];
  c[l + 1] = c[e + 1];
  k[l + 1] = k[e + 1];
  c[l + 2] = c[e + 2];
  k[l + 2] = k[e + 2];
  c[l + 3] = c[e + 3];
  k[l + 3] = k[e + 3];
  c[s] = c[e];
  k[s] = k[e];
  c[s + 1] = c[e + 1];
  k[s + 1] = k[e + 1];
  c[s + 2] = c[e + 2];
  k[s + 2] = k[e + 2];
  c[s + 3] = c[e + 3];
  k[s + 3] = k[e + 3];
  hp(l, f);
  gp(s, f);
  xn(l, g);
  xn(s, h);
  N(t, f, e);
  IB(t);
  N(w, f, e);
  f = J(t, w);
  k[x] = 0 == k[t] ? 0xde0b6b000000000 : 1 / k[t];
  k[x + 1] = 0 == k[t + 1] ? 0xde0b6b000000000 : 1 / k[t + 1];
  k[x + 2] = 0 == k[t + 2] ? 0xde0b6b000000000 : 1 / k[t + 2];
  c[y] = (0 > k[x]) & 1;
  t = y + 1;
  c[t] = (0 > k[x + 1]) & 1;
  c[t + 1] = (0 > k[x + 2]) & 1;
  a += 14;
  t = (j | 0) < (c[a] | 0);
  a: do {
    if (t) {
      for (var w = z, C = z + 4, B = z, K = z + 4, E = y, G = z; ; ) {
        if (
          ((k[A] = 1),
          (p += 1),
          (n = i),
          (c[w] = c[n]),
          (k[w] = k[n]),
          (c[w + 1] = c[n + 1]),
          (k[w + 1] = k[n + 1]),
          (c[w + 2] = c[n + 2]),
          (k[w + 2] = k[n + 2]),
          (c[w + 3] = c[n + 3]),
          (k[w + 3] = k[n + 3]),
          (n = i + 4),
          (c[C] = c[n]),
          (k[C] = k[n]),
          (c[C + 1] = c[n + 1]),
          (k[C + 1] = k[n + 1]),
          (c[C + 2] = c[n + 2]),
          (k[C + 2] = k[n + 2]),
          (c[C + 3] = c[n + 3]),
          (k[C + 3] = k[n + 3]),
          JC(B, h),
          JC(K, g),
          ($aabbOverlap = n = hX(l, s, i, i + 4) & 1),
          (r = (0 != (n | 0) ? rY(e, x, E, G, A, 0, f) : 0) & 1),
          (n = (-1 == (c[i + 8] | 0)) & 1),
          n & 1
            ? 0 == (r | 0)
              ? (m = 16)
              : ((m = d), v[c[c[m] + 2]](m, c[i + 9], c[i + 10]), (m = 15))
            : (m = 15),
          15 == m && (m = 0 != (r | 0) ? 17 : 16),
          16 == m &&
            (n & 1
              ? (m = 17)
              : ((n = c[i + 8]), (i = (n << 4) + i), (j += n), (m = 19))),
          17 == m && ((i += 16), (j += 1)),
          (j | 0) >= (c[a] | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  (c[n1] | 0) < (p | 0) && (c[n1] = p);
  b = l;
}
Tdb.X = 1;
function Udb(a, d, e, f, g, h, i, j) {
  var l = b;
  b += 46;
  var m, n, p, r, s, t;
  t = l + 4;
  var w = l + 8,
    x = l + 11,
    y = l + 15,
    z = l + 19,
    A = l + 22,
    C = l + 25,
    B = l + 26,
    K = l + 34,
    E = l + 38;
  n = i;
  p = 0;
  $subTreeSize = j - i;
  i = k1(a + 31, i);
  N(l, f, e);
  IB(l);
  N(t, f, e);
  t = J(l, t);
  k[l] = 0 == k[l] ? 0xde0b6b000000000 : 1 / k[l];
  k[l + 1] = 0 == k[l + 1] ? 0xde0b6b000000000 : 1 / k[l + 1];
  k[l + 2] = 0 == k[l + 2] ? 0xde0b6b000000000 : 1 / k[l + 2];
  c[w] = (0 > k[l]) & 1;
  var G = w + 1;
  c[G] = (0 > k[l + 1]) & 1;
  c[G + 1] = (0 > k[l + 2]) & 1;
  c[x] = c[e];
  k[x] = k[e];
  c[x + 1] = c[e + 1];
  k[x + 1] = k[e + 1];
  c[x + 2] = c[e + 2];
  k[x + 2] = k[e + 2];
  c[x + 3] = c[e + 3];
  k[x + 3] = k[e + 3];
  c[y] = c[e];
  k[y] = k[e];
  c[y + 1] = c[e + 1];
  k[y + 1] = k[e + 1];
  c[y + 2] = c[e + 2];
  k[y + 2] = k[e + 2];
  c[y + 3] = c[e + 3];
  k[y + 3] = k[e + 3];
  hp(x, f);
  gp(y, f);
  xn(x, g);
  xn(y, h);
  fp(a, z, x, 0);
  fp(a, A, y, 1);
  f = (n | 0) < (j | 0);
  a: do {
    if (f) {
      for (
        var x = z,
          y = A,
          G = B,
          M = K,
          L = B + 4,
          F = E,
          I = B,
          R = B + 4,
          O = w,
          Z = B;
        ;

      ) {
        if (
          ((p += 1),
          (k[C] = 1),
          (s = 0),
          (m = S0(x, y, i, i + 3)),
          (r = E0(i) & 1),
          0 != (m | 0) &&
            (qp(K, a, i),
            (c[G] = c[M]),
            (k[G] = k[M]),
            (c[G + 1] = c[M + 1]),
            (k[G + 1] = k[M + 1]),
            (c[G + 2] = c[M + 2]),
            (k[G + 2] = k[M + 2]),
            (c[G + 3] = c[M + 3]),
            (k[G + 3] = k[M + 3]),
            qp(E, a, i + 3),
            (c[L] = c[F]),
            (k[L] = k[F]),
            (c[L + 1] = c[F + 1]),
            (k[L + 1] = k[F + 1]),
            (c[L + 2] = c[F + 2]),
            (k[L + 2] = k[F + 2]),
            (c[L + 3] = c[F + 3]),
            (k[L + 3] = k[F + 3]),
            JC(I, h),
            JC(R, g),
            (s = rY(e, l, O, Z, C, 0, t) & 1)),
          r & 1
            ? 0 == (s | 0)
              ? (m = 16)
              : ((m = d), v[c[c[m] + 2]](m, Q0(i), R0(i)), (m = 15))
            : (m = 15),
          15 == m && (m = 0 != (s | 0) ? 17 : 16),
          16 == m &&
            (r & 1
              ? (m = 17)
              : ((r = F0(i)), (i += 7 * r), (n += r), (m = 19))),
          17 == m && ((i += 7), (n += 1)),
          (n | 0) >= (j | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  (c[n1] | 0) < (p | 0) && (c[n1] = p);
  b = l;
}
Udb.X = 1;
function ap(a, d, e, f) {
  var g = b;
  b += 14;
  var h = g + 4,
    i = g + 5,
    j = g + 6,
    l = g + 7,
    m = g + 11,
    n = g + 12,
    p = g + 13;
  k[h] = 0;
  k[i] = 0;
  k[j] = 0;
  H(g, h, i, j);
  k[m] = 0;
  k[n] = 0;
  k[p] = 0;
  H(l, m, n, p);
  sp(a, d, e, f, g, l);
  b = g;
}
ap.X = 1;
function sp(a, d, e, f, g, h) {
  var i = c[a + 14];
  c[a + 15] & 1 ? Udb(a, d, e, f, g, h, 0, i) : Tdb(a, d, e, f, g, h, 0, i);
}
sp.X = 1;
function Zo(a) {
  var d;
  d = (c[a + 42] << 5) + 172;
  var e = c[a + 14];
  return c[a + 15] & 1 ? (e << 4) + d : (e << 6) + d;
}
Zo.X = 1;
function hbb(a, d, e, f) {
  var g, h;
  $4 = e;
  e = f & 1;
  c[a + 42] = C0(a + 37);
  mW(d);
  f = c[a + 14];
  e & 1
    ? ((c[d + 14] = p1(f)),
      q1(a + 1, d + 1),
      q1(a + 5, d + 5),
      q1(a + 9, d + 9),
      (c[d + 36] = p1(c[a + 36])),
      (c[d + 42] = p1(c[a + 42])))
    : ((c[d + 14] = f),
      (f = d + 1),
      (g = a + 1),
      (c[f] = c[g]),
      (k[f] = k[g]),
      (c[f + 1] = c[g + 1]),
      (k[f + 1] = k[g + 1]),
      (c[f + 2] = c[g + 2]),
      (k[f + 2] = k[g + 2]),
      (c[f + 3] = c[g + 3]),
      (k[f + 3] = k[g + 3]),
      (f = d + 5),
      (g = a + 5),
      (c[f] = c[g]),
      (k[f] = k[g]),
      (c[f + 1] = c[g + 1]),
      (k[f + 1] = k[g + 1]),
      (c[f + 2] = c[g + 2]),
      (k[f + 2] = k[g + 2]),
      (c[f + 3] = c[g + 3]),
      (k[f + 3] = k[g + 3]),
      (f = d + 9),
      (g = a + 9),
      (c[f] = c[g]),
      (k[f] = k[g]),
      (c[f + 1] = c[g + 1]),
      (k[f + 1] = k[g + 1]),
      (c[f + 2] = c[g + 2]),
      (k[f + 2] = k[g + 2]),
      (c[f + 3] = c[g + 3]),
      (k[f + 3] = k[g + 3]),
      (c[d + 36] = c[a + 36]),
      (c[d + 42] = c[a + 42]));
  c[d + 15] = c[a + 15] & 1;
  f = d + 172;
  f += 0;
  g = c[a + 14];
  if (c[a + 15] & 1) {
    r1(d + 31, f, g, g);
    var i = e & 1;
    a: do {
      if (i) {
        if (((h = 0), (h | 0) < (g | 0))) {
          for (
            var j = a + 31,
              l = a + 31,
              m = a + 31,
              n = a + 31,
              p = a + 31,
              r = a + 31,
              s = a + 31;
            ;

          ) {
            if (
              ((c[D0(d + 31, h)] = s1(c[k1(j, h)])),
              (c[D0(d + 31, h) + 1] = s1(c[k1(l, h) + 1])),
              (c[D0(d + 31, h) + 2] = s1(c[k1(m, h) + 2])),
              (c[D0(d + 31, h) + 3] = s1(c[k1(n, h) + 3])),
              (c[D0(d + 31, h) + 4] = s1(c[k1(p, h) + 4])),
              (c[D0(d + 31, h) + 5] = s1(c[k1(r, h) + 5])),
              (c[D0(d + 31, h) + 6] = p1(c[k1(s, h) + 6])),
              (h += 1),
              (h | 0) >= (g | 0))
            ) {
              break a;
            }
          }
        }
      } else {
        if (((h = 0), (h | 0) < (g | 0))) {
          j = a + 31;
          l = a + 31;
          m = a + 31;
          n = a + 31;
          p = a + 31;
          r = a + 31;
          for (s = a + 31; ; ) {
            if (
              ((c[D0(d + 31, h)] = c[k1(j, h)]),
              (c[D0(d + 31, h) + 1] = c[k1(l, h) + 1]),
              (c[D0(d + 31, h) + 2] = c[k1(m, h) + 2]),
              (c[D0(d + 31, h) + 3] = c[k1(n, h) + 3]),
              (c[D0(d + 31, h) + 4] = c[k1(p, h) + 4]),
              (c[D0(d + 31, h) + 5] = c[k1(r, h) + 5]),
              (c[D0(d + 31, h) + 6] = c[k1(s, h) + 6]),
              (h += 1),
              (h | 0) >= (g | 0))
            ) {
              break a;
            }
          }
        }
      }
    } while (0);
    f = (g << 4) + f;
    r1(d + 31, 0, 0, 0);
  } else {
    t1(d + 21, f, g, g);
    i = e & 1;
    a: do {
      if (i) {
        if (((h = 0), (h | 0) < (g | 0))) {
          j = a + 21;
          l = a + 21;
          m = a + 21;
          n = a + 21;
          for (p = a + 21; ; ) {
            if (
              (q1(l1(j, h), j1(d + 21, h)),
              q1(l1(l, h) + 4, j1(d + 21, h) + 4),
              (c[j1(d + 21, h) + 8] = p1(c[l1(m, h) + 8])),
              (c[j1(d + 21, h) + 9] = p1(c[l1(n, h) + 9])),
              (c[j1(d + 21, h) + 10] = p1(c[l1(p, h) + 10])),
              (h += 1),
              (h | 0) >= (g | 0))
            ) {
              break a;
            }
          }
        }
      } else {
        if (((h = 0), (h | 0) < (g | 0))) {
          j = a + 21;
          l = a + 21;
          m = a + 21;
          n = a + 21;
          for (p = a + 21; ; ) {
            if (
              ((r = j1(d + 21, h)),
              (s = l1(j, h)),
              (c[r] = c[s]),
              (k[r] = k[s]),
              (c[r + 1] = c[s + 1]),
              (k[r + 1] = k[s + 1]),
              (c[r + 2] = c[s + 2]),
              (k[r + 2] = k[s + 2]),
              (c[r + 3] = c[s + 3]),
              (k[r + 3] = k[s + 3]),
              (r = j1(d + 21, h) + 4),
              (s = l1(l, h) + 4),
              (c[r] = c[s]),
              (k[r] = k[s]),
              (c[r + 1] = c[s + 1]),
              (k[r + 1] = k[s + 1]),
              (c[r + 2] = c[s + 2]),
              (k[r + 2] = k[s + 2]),
              (c[r + 3] = c[s + 3]),
              (k[r + 3] = k[s + 3]),
              (c[j1(d + 21, h) + 8] = c[l1(m, h) + 8]),
              (c[j1(d + 21, h) + 9] = c[l1(n, h) + 9]),
              (c[j1(d + 21, h) + 10] = c[l1(p, h) + 10]),
              (h += 1),
              (h | 0) >= (g | 0))
            ) {
              break a;
            }
          }
        }
      }
    } while (0);
    f = (g << 6) + f;
    t1(d + 21, 0, 0, 0);
  }
  f += 0;
  u1(d + 37, f, c[a + 42], c[a + 42]);
  e &= 1;
  a: do {
    if (e) {
      if (((f = 0), (g = a + 42), (f | 0) < (c[g] | 0))) {
        i = a + 37;
        h = a + 37;
        j = a + 37;
        l = a + 37;
        m = a + 37;
        n = a + 37;
        p = a + 37;
        for (r = a + 37; ; ) {
          if (
            ((c[P0(d + 37, f)] = s1(c[o1(i, f)])),
            (c[P0(d + 37, f) + 1] = s1(c[o1(h, f) + 1])),
            (c[P0(d + 37, f) + 2] = s1(c[o1(j, f) + 2])),
            (c[P0(d + 37, f) + 3] = s1(c[o1(l, f) + 3])),
            (c[P0(d + 37, f) + 4] = s1(c[o1(m, f) + 4])),
            (c[P0(d + 37, f) + 5] = s1(c[o1(n, f) + 5])),
            (c[P0(d + 37, f) + 6] = p1(c[o1(p, f) + 6])),
            (c[P0(d + 37, f) + 7] = p1(c[o1(r, f) + 7])),
            (f += 1),
            (f | 0) >= (c[g] | 0))
          ) {
            break a;
          }
        }
      }
    } else {
      if (((f = 0), (g = a + 42), (f | 0) < (c[g] | 0))) {
        i = a + 37;
        h = a + 37;
        j = a + 37;
        l = a + 37;
        m = a + 37;
        n = a + 37;
        p = a + 37;
        for (r = a + 37; ; ) {
          if (
            ((c[P0(d + 37, f)] = c[o1(i, f)]),
            (c[P0(d + 37, f) + 1] = c[o1(h, f) + 1]),
            (c[P0(d + 37, f) + 2] = c[o1(j, f) + 2]),
            (c[P0(d + 37, f) + 3] = c[o1(l, f) + 3]),
            (c[P0(d + 37, f) + 4] = c[o1(m, f) + 4]),
            (c[P0(d + 37, f) + 5] = c[o1(n, f) + 5]),
            (c[P0(d + 37, f) + 6] = c[o1(p, f) + 6]),
            (c[P0(d + 37, f) + 7] = c[o1(r, f) + 7]),
            (c[P0(d + 37, f) + 8] = 0),
            (c[P0(d + 37, f) + 9] = 0),
            (c[P0(d + 37, f) + 10] = 0),
            (f += 1),
            (f | 0) >= (c[g] | 0))
          ) {
            break a;
          }
        }
      }
    }
  } while (0);
  u1(d + 37, 0, 0, 0);
  c[d] = 0;
  return 1;
}
hbb.X = 1;
function q1(a, d) {
  var e;
  for (e = 0; ; ) {
    Vdb(a + e, d + e);
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
}
q1.X = 1;
function r1(a, d, e, f) {
  L0(a);
  c[a + 4] = 0;
  c[a + 3] = d;
  c[a + 1] = e;
  c[a + 2] = f;
}
r1.X = 1;
function s1(a) {
  return (((a & 255) << 8) | ((a & 65280) >> 8)) & 65535;
}
s1.X = 1;
function t1(a, d, e, f) {
  M0(a);
  c[a + 4] = 0;
  c[a + 3] = d;
  c[a + 1] = e;
  c[a + 2] = f;
}
t1.X = 1;
function u1(a, d, e, f) {
  Odb(a);
  c[a + 4] = 0;
  c[a + 3] = d;
  c[a + 1] = e;
  c[a + 2] = f;
}
u1.X = 1;
function dKa(a, d, e) {
  var f,
    g,
    e = e & 1;
  if (0 == (a | 0)) {
    a = 0;
  } else {
    if (
      (e & 1 &&
        ((c[a + 14] = p1(c[a + 14])),
        v1(a + 1),
        v1(a + 5),
        v1(a + 9),
        (c[a + 36] = p1(c[a + 36])),
        (c[a + 42] = p1(c[a + 42]))),
      Zo(a) >>> 0 > d >>> 0)
    ) {
      a = 0;
    } else {
      d = a + 172;
      d += 0;
      f = c[a + 14];
      Wdb(a, a, 0);
      if (c[a + 15] & 1) {
        r1(a + 31, d, f, f);
        var h = e & 1;
        a: do {
          if (h && ((g = 0), (g | 0) < (f | 0))) {
            for (;;) {
              if (
                ((c[D0(a + 31, g)] = s1(c[D0(a + 31, g)])),
                (c[D0(a + 31, g) + 1] = s1(c[D0(a + 31, g) + 1])),
                (c[D0(a + 31, g) + 2] = s1(c[D0(a + 31, g) + 2])),
                (c[D0(a + 31, g) + 3] = s1(c[D0(a + 31, g) + 3])),
                (c[D0(a + 31, g) + 4] = s1(c[D0(a + 31, g) + 4])),
                (c[D0(a + 31, g) + 5] = s1(c[D0(a + 31, g) + 5])),
                (c[D0(a + 31, g) + 6] = p1(c[D0(a + 31, g) + 6])),
                (g += 1),
                (g | 0) >= (f | 0))
              ) {
                break a;
              }
            }
          }
        } while (0);
        d = (f << 4) + d;
      } else {
        t1(a + 21, d, f, f);
        h = e & 1;
        a: do {
          if (h && ((g = 0), (g | 0) < (f | 0))) {
            for (;;) {
              if (
                (v1(j1(a + 21, g)),
                v1(j1(a + 21, g) + 4),
                (c[j1(a + 21, g) + 8] = p1(c[j1(a + 21, g) + 8])),
                (c[j1(a + 21, g) + 9] = p1(c[j1(a + 21, g) + 9])),
                (c[j1(a + 21, g) + 10] = p1(c[j1(a + 21, g) + 10])),
                (g += 1),
                (g | 0) >= (f | 0))
              ) {
                break a;
              }
            }
          }
        } while (0);
        d = (f << 6) + d;
      }
      d += 0;
      u1(a + 37, d, c[a + 42], c[a + 42]);
      d = e & 1;
      a: do {
        if (d && ((e = 0), (e | 0) < (c[a + 42] | 0))) {
          for (;;) {
            if (
              ((c[P0(a + 37, e)] = s1(c[P0(a + 37, e)])),
              (c[P0(a + 37, e) + 1] = s1(c[P0(a + 37, e) + 1])),
              (c[P0(a + 37, e) + 2] = s1(c[P0(a + 37, e) + 2])),
              (c[P0(a + 37, e) + 3] = s1(c[P0(a + 37, e) + 3])),
              (c[P0(a + 37, e) + 4] = s1(c[P0(a + 37, e) + 4])),
              (c[P0(a + 37, e) + 5] = s1(c[P0(a + 37, e) + 5])),
              (c[P0(a + 37, e) + 6] = p1(c[P0(a + 37, e) + 6])),
              (c[P0(a + 37, e) + 7] = p1(c[P0(a + 37, e) + 7])),
              (e += 1),
              (e | 0) >= (c[a + 42] | 0))
            ) {
              break a;
            }
          }
        }
      } while (0);
    }
  }
  return a;
}
dKa.X = 1;
function v1(a) {
  var d = b;
  b += 4;
  var e;
  for (e = 0; ; ) {
    Vdb(a + e, d + e);
    var f = e + 1;
    e = f;
    if (4 <= (f | 0)) {
      break;
    }
  }
  c[a] = c[d];
  k[a] = k[d];
  c[a + 1] = c[d + 1];
  k[a + 1] = k[d + 1];
  c[a + 2] = c[d + 2];
  k[a + 2] = k[d + 2];
  c[a + 3] = c[d + 3];
  k[a + 3] = k[d + 3];
  b = d;
}
v1.X = 1;
function Wdb(a, d, e) {
  $4 = e & 1;
  c[a] = f1 + 2;
  var e = a + 1,
    f = d + 1;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 5;
  f = d + 5;
  c[e] = c[f];
  k[e] = k[f];
  c[e + 1] = c[f + 1];
  k[e + 1] = k[f + 1];
  c[e + 2] = c[f + 2];
  k[e + 2] = k[f + 2];
  c[e + 3] = c[f + 3];
  k[e + 3] = k[f + 3];
  e = a + 9;
  d += 9;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
  c[a + 13] = 278;
  O0(a + 16);
  O0(a + 21);
  N0(a + 26);
  N0(a + 31);
  g1(a + 37);
}
Wdb.X = 1;
function Xdb(a, d) {
  var e = b;
  b += 34;
  var f,
    g,
    h,
    i = e + 16,
    j = e + 23;
  Tc(a + 5, d + 4);
  Tc(a + 1, d);
  Tc(a + 9, d + 8);
  c[a + 14] = c[d + 12];
  c[a + 15] = (0 != (c[d + 13] | 0)) & 1;
  f = c[d + 14];
  g = e;
  for (h = g + 16; g < h; g++) {
    (c[g] = 0), (k[g] = 0);
  }
  I0(a + 21, f, e);
  var l = 0 != (f | 0);
  a: do {
    if (l && ((g = c[d + 16]), (h = 0), (h | 0) < (f | 0))) {
      for (var m = a + 21, n = a + 21, p = a + 21, r = a + 21, s = a + 21; ; ) {
        if (
          (Tc(j1(m, h) + 4, g + 4),
          Tc(j1(n, h), g),
          (c[j1(p, h) + 8] = c[g + 8]),
          (c[j1(r, h) + 9] = c[g + 9]),
          (c[j1(s, h) + 10] = c[g + 10]),
          (h += 1),
          (g += 15),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  f = c[d + 15];
  c[i] = 0;
  k[i] = 0;
  c[i + 1] = 0;
  k[i + 1] = 0;
  c[i + 2] = 0;
  k[i + 2] = 0;
  c[i + 3] = 0;
  k[i + 3] = 0;
  c[i + 4] = 0;
  k[i + 4] = 0;
  c[i + 5] = 0;
  k[i + 5] = 0;
  c[i + 6] = 0;
  k[i + 6] = 0;
  H0(a + 31, f, i);
  h = 0 != (f | 0);
  a: do {
    if (h && ((i = c[d + 17]), (g = 0), (g | 0) < (f | 0))) {
      for (
        var l = a + 31,
          m = a + 31,
          n = a + 31,
          p = a + 31,
          r = a + 31,
          s = a + 31,
          t = a + 31;
        ;

      ) {
        if (
          ((c[D0(l, g) + 6] = c[i + 6]),
          (c[D0(m, g) + 3] = c[i + 3]),
          (c[D0(n, g) + 4] = c[i + 4]),
          (c[D0(p, g) + 5] = c[i + 5]),
          (c[D0(r, g)] = c[i]),
          (c[D0(s, g) + 1] = c[i + 1]),
          (c[D0(t, g) + 2] = c[i + 2]),
          (g += 1),
          (i += 7),
          (g | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 36] = c[d + 19];
  i = c[d + 20];
  Ydb(a + 37, i, j);
  g = 0 != (i | 0);
  a: do {
    if (g && ((j = c[d + 18]), (f = 0), (f | 0) < (i | 0))) {
      h = a + 37;
      l = a + 37;
      m = a + 37;
      n = a + 37;
      p = a + 37;
      r = a + 37;
      s = a + 37;
      for (t = a + 37; ; ) {
        if (
          ((c[P0(h, f) + 3] = c[j + 5]),
          (c[P0(l, f) + 4] = c[j + 6]),
          (c[P0(m, f) + 5] = c[j + 7]),
          (c[P0(n, f)] = c[j + 2]),
          (c[P0(p, f) + 1] = c[j + 3]),
          (c[P0(r, f) + 2] = c[j + 4]),
          (c[P0(s, f) + 6] = c[j]),
          (c[P0(t, f) + 7] = c[j + 1]),
          (f += 1),
          (j += 8),
          (f | 0) >= (i | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = e;
}
Xdb.X = 1;
function Ydb(a, d, e) {
  var f, g;
  f = C0(a);
  var h = (d | 0) < (f | 0);
  a: do {
    if (h) {
      if (((g = d), (g | 0) < (f | 0))) {
        for (;;) {
          if (((g += 1), (g | 0) >= (f | 0))) {
            break a;
          }
        }
      }
    } else {
      if (((d | 0) > (C0(a) | 0) && Zab(a, d), (g = f), (g | 0) < (d | 0))) {
        for (var i = a + 3; ; ) {
          for (var j = e, l = c[i] + 11 * g, m = j + 11; j < m; j++, l++) {
            (c[l] = c[j]), (k[l] = k[j]);
          }
          g += 1;
          if ((g | 0) >= (d | 0)) {
            break a;
          }
        }
      }
    }
  } while (0);
  c[a + 1] = d;
}
Ydb.X = 1;
function Zdb(a, d) {
  var e = b;
  b += 34;
  var f,
    g,
    h,
    i = e + 16,
    j = e + 23;
  Ob(a + 5, d + 4);
  Ob(a + 1, d);
  Ob(a + 9, d + 8);
  c[a + 14] = c[d + 12];
  c[a + 15] = (0 != (c[d + 13] | 0)) & 1;
  f = c[d + 14];
  g = e;
  for (h = g + 16; g < h; g++) {
    (c[g] = 0), (k[g] = 0);
  }
  I0(a + 21, f, e);
  var l = 0 != (f | 0);
  a: do {
    if (l && ((g = c[d + 16]), (h = 0), (h | 0) < (f | 0))) {
      for (var m = a + 21, n = a + 21, p = a + 21, r = a + 21, s = a + 21; ; ) {
        if (
          (Ob(j1(m, h) + 4, g + 4),
          Ob(j1(n, h), g),
          (c[j1(p, h) + 8] = c[g + 8]),
          (c[j1(r, h) + 9] = c[g + 9]),
          (c[j1(s, h) + 10] = c[g + 10]),
          (h += 1),
          (g += 15),
          (h | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  f = c[d + 15];
  c[i] = 0;
  k[i] = 0;
  c[i + 1] = 0;
  k[i + 1] = 0;
  c[i + 2] = 0;
  k[i + 2] = 0;
  c[i + 3] = 0;
  k[i + 3] = 0;
  c[i + 4] = 0;
  k[i + 4] = 0;
  c[i + 5] = 0;
  k[i + 5] = 0;
  c[i + 6] = 0;
  k[i + 6] = 0;
  H0(a + 31, f, i);
  h = 0 != (f | 0);
  a: do {
    if (h && ((i = c[d + 17]), (g = 0), (g | 0) < (f | 0))) {
      for (
        var l = a + 31,
          m = a + 31,
          n = a + 31,
          p = a + 31,
          r = a + 31,
          s = a + 31,
          t = a + 31;
        ;

      ) {
        if (
          ((c[D0(l, g) + 6] = c[i + 6]),
          (c[D0(m, g) + 3] = c[i + 3]),
          (c[D0(n, g) + 4] = c[i + 4]),
          (c[D0(p, g) + 5] = c[i + 5]),
          (c[D0(r, g)] = c[i]),
          (c[D0(s, g) + 1] = c[i + 1]),
          (c[D0(t, g) + 2] = c[i + 2]),
          (g += 1),
          (i += 7),
          (g | 0) >= (f | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  c[a + 36] = c[d + 18];
  i = c[d + 19];
  Ydb(a + 37, i, j);
  g = 0 != (i | 0);
  a: do {
    if (g && ((j = c[d + 20]), (f = 0), (f | 0) < (i | 0))) {
      h = a + 37;
      l = a + 37;
      m = a + 37;
      n = a + 37;
      p = a + 37;
      r = a + 37;
      s = a + 37;
      for (t = a + 37; ; ) {
        if (
          ((c[P0(h, f) + 3] = c[j + 5]),
          (c[P0(l, f) + 4] = c[j + 6]),
          (c[P0(m, f) + 5] = c[j + 7]),
          (c[P0(n, f)] = c[j + 2]),
          (c[P0(p, f) + 1] = c[j + 3]),
          (c[P0(r, f) + 2] = c[j + 4]),
          (c[P0(s, f) + 6] = c[j]),
          (c[P0(t, f) + 7] = c[j + 1]),
          (f += 1),
          (j += 8),
          (f | 0) >= (i | 0))
        ) {
          break a;
        }
      }
    }
  } while (0);
  b = e;
}
Zdb.X = 1;
function p1(a) {
  return (
    ((a & 16711680) >>> 8) |
    ((a & -16777216) >>> 24) |
    ((a & 65280) << 8) |
    ((a & 255) << 24)
  );
}
p1.X = 1;
function g1(a) {
  c[a + 4] = 1;
  c[a + 3] = 0;
  c[a + 1] = 0;
  c[a + 2] = 0;
}
g1.X = 1;
function Vdb(a, d) {
  c[d] = c[a + 3];
  c[d + 1] = c[a + 2];
  c[d + 2] = c[a + 1];
  c[d + 3] = c[a];
}
Vdb.X = 1;
function $db(a, d, e) {
  var f, g, h, i;
  Mb(a + 5, d + 4);
  Mb(a + 1, d);
  Mb(a + 9, d + 8);
  c[d + 12] = c[a + 14];
  c[d + 13] = c[a + 15] & 1;
  c[d + 14] = B0(a + 21);
  f = 0 != (B0(a + 21) | 0) ? v[c[c[e] + 7]](e, l1(a + 21, 0)) : 0;
  c[d + 16] = f;
  if (0 != (c[d + 16] | 0)) {
    f = B0(a + 21);
    g = v[c[c[e] + 4]](e, 48, f);
    h = c[g + 2];
    i = 0;
    var j = (i | 0) < (f | 0);
    a: do {
      if (j) {
        for (
          var l = a + 21, m = a + 21, n = a + 21, p = a + 21, r = a + 21;
          ;

        ) {
          if (
            (Mb(l1(l, i) + 4, h + 4),
            Mb(l1(m, i), h),
            (c[h + 8] = c[l1(n, i) + 8]),
            (c[h + 9] = c[l1(p, i) + 9]),
            (c[h + 10] = c[l1(r, i) + 10]),
            (i += 1),
            (h += 15),
            (i | 0) >= (f | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, g, D.Me, 1497453121, l1(a + 21, 0));
  }
  c[d + 15] = s0(a + 31);
  f = 0 != (s0(a + 31) | 0) ? v[c[c[e] + 7]](e, k1(a + 31, 0)) : 0;
  c[d + 17] = f;
  if (0 != (c[d + 17] | 0)) {
    f = s0(a + 31);
    g = v[c[c[e] + 4]](e, 16, f);
    h = c[g + 2];
    i = 0;
    j = (i | 0) < (f | 0);
    a: do {
      if (j) {
        for (
          var l = a + 31,
            m = a + 31,
            n = a + 31,
            p = a + 31,
            r = a + 31,
            s = a + 31,
            t = a + 31;
          ;

        ) {
          if (
            ((c[h + 6] = c[k1(l, i) + 6]),
            (c[h + 3] = c[k1(m, i) + 3]),
            (c[h + 4] = c[k1(n, i) + 4]),
            (c[h + 5] = c[k1(p, i) + 5]),
            (c[h] = c[k1(r, i)]),
            (c[h + 1] = c[k1(s, i) + 1]),
            (c[h + 2] = c[k1(t, i) + 2]),
            (i += 1),
            (h += 7),
            (i | 0) >= (f | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, g, D.de, 1497453121, k1(a + 31, 0));
  }
  c[d + 19] = c[a + 36];
  c[d + 20] = C0(a + 37);
  f = 0 != (C0(a + 37) | 0) ? v[c[c[e] + 7]](e, o1(a + 37, 0)) : 0;
  c[d + 18] = f;
  if (0 != (c[d + 18] | 0)) {
    d = C0(a + 37);
    f = v[c[c[e] + 4]](e, 20, d);
    g = c[f + 2];
    h = 0;
    i = (h | 0) < (d | 0);
    a: do {
      if (i) {
        j = a + 37;
        l = a + 37;
        m = a + 37;
        n = a + 37;
        p = a + 37;
        r = a + 37;
        s = a + 37;
        for (t = a + 37; ; ) {
          if (
            ((c[g + 5] = c[o1(j, h) + 3]),
            (c[g + 6] = c[o1(l, h) + 4]),
            (c[g + 7] = c[o1(m, h) + 5]),
            (c[g + 2] = c[o1(n, h)]),
            (c[g + 3] = c[o1(p, h) + 1]),
            (c[g + 4] = c[o1(r, h) + 2]),
            (c[g] = c[o1(s, h) + 6]),
            (c[g + 1] = c[o1(t, h) + 7]),
            (h += 1),
            (g += 8),
            (h | 0) >= (d | 0))
          ) {
            break a;
          }
        }
      }
    } while (0);
    v[c[c[e] + 5]](e, f, D.ze, 1497453121, o1(a + 37, 0));
  }
  return D.Le;
}
$db.X = 1;
function Odb(a) {
  lbb(a, 0, C0(a));
  mbb(a);
  g1(a);
}
Odb.X = 1;
function NUa(a, d, e, f) {
  EY(a);
  c[a] = aeb + 2;
  var g = a + 1;
  c[g] = c[d];
  k[g] = k[d];
  c[g + 1] = c[d + 1];
  k[g + 1] = k[d + 1];
  c[g + 2] = c[d + 2];
  k[g + 2] = k[d + 2];
  c[g + 3] = c[d + 3];
  k[g + 3] = k[d + 3];
  d = a + 5;
  c[d] = c[e];
  k[d] = k[e];
  c[d + 1] = c[e + 1];
  k[d + 1] = k[e + 1];
  c[d + 2] = c[e + 2];
  k[d + 2] = k[e + 2];
  c[d + 3] = c[e + 3];
  k[d + 3] = k[e + 3];
  c[a + 9] = f;
  k[a + 10] = 1;
}
NUa.X = 1;
function beb(a, d, e, f) {
  var g = b;
  b += 80;
  var h,
    i,
    j = g + 4,
    l = g + 8,
    m = g + 12,
    n = g + 16,
    p = g + 20,
    r,
    s = g + 24,
    t = g + 28,
    w = g + 32,
    x = g + 36,
    y = g + 40,
    z = g + 44,
    A = g + 48,
    C = g + 52,
    B = g + 56,
    K = g + 60,
    E = g + 64,
    G = g + 68,
    M = g + 72,
    L = g + 76;
  h = d + 4;
  i = d + 8;
  N(j, h, d);
  c[g] = c[j];
  k[g] = k[j];
  c[g + 1] = c[j + 1];
  k[g + 1] = k[j + 1];
  c[g + 2] = c[j + 2];
  k[g + 2] = k[j + 2];
  c[g + 3] = c[j + 3];
  k[g + 3] = k[j + 3];
  N(m, i, d);
  c[l] = c[m];
  k[l] = k[m];
  c[l + 1] = c[m + 1];
  k[l + 1] = k[m + 1];
  c[l + 2] = c[m + 2];
  k[l + 2] = k[m + 2];
  c[l + 3] = c[m + 3];
  k[l + 3] = k[m + 3];
  qn(p, g, l);
  c[n] = c[p];
  k[n] = k[p];
  c[n + 1] = c[p + 1];
  k[n + 1] = k[p + 1];
  c[n + 2] = c[p + 2];
  k[n + 2] = k[p + 2];
  c[n + 3] = c[p + 3];
  k[n + 3] = k[p + 3];
  m = J(d, n);
  j = J(n, a + 1);
  j -= m;
  l = J(n, a + 5);
  l -= m;
  p = 0 <= j * l;
  a: do {
    if (
      !p &&
      !(0 != ((c[a + 9] & 1) | 0) && 0 < j) &&
      ((m = j / (j - l)), m < k[a + 10])
    ) {
      r = Um(n);
      r *= -9999999747378752e-20;
      yB(s, a + 1, a + 5, m);
      N(w, d, s);
      var F = t,
        I = w;
      c[F] = c[I];
      k[F] = k[I];
      c[F + 1] = c[I + 1];
      k[F + 1] = k[I + 1];
      c[F + 2] = c[I + 2];
      k[F + 2] = k[I + 2];
      c[F + 3] = c[I + 3];
      k[F + 3] = k[I + 3];
      N(y, h, s);
      F = x;
      I = y;
      c[F] = c[I];
      k[F] = k[I];
      c[F + 1] = c[I + 1];
      k[F + 1] = k[I + 1];
      c[F + 2] = c[I + 2];
      k[F + 2] = k[I + 2];
      c[F + 3] = c[I + 3];
      k[F + 3] = k[I + 3];
      qn(A, t, x);
      F = z;
      I = A;
      c[F] = c[I];
      k[F] = k[I];
      c[F + 1] = c[I + 1];
      k[F + 1] = k[I + 1];
      c[F + 2] = c[I + 2];
      k[F + 2] = k[I + 2];
      c[F + 3] = c[I + 3];
      k[F + 3] = k[I + 3];
      if (
        J(z, n) >= r &&
        (N(B, i, s),
        (F = C),
        (I = B),
        (c[F] = c[I]),
        (k[F] = k[I]),
        (c[F + 1] = c[I + 1]),
        (k[F + 1] = k[I + 1]),
        (c[F + 2] = c[I + 2]),
        (k[F + 2] = k[I + 2]),
        (c[F + 3] = c[I + 3]),
        (k[F + 3] = k[I + 3]),
        qn(E, x, C),
        (F = K),
        (I = E),
        (c[F] = c[I]),
        (k[F] = k[I]),
        (c[F + 1] = c[I + 1]),
        (k[F + 1] = k[I + 1]),
        (c[F + 2] = c[I + 2]),
        (k[F + 2] = k[I + 2]),
        (c[F + 3] = c[I + 3]),
        (k[F + 3] = k[I + 3]),
        J(K, n) >= r &&
          (qn(M, C, t),
          (F = G),
          (I = M),
          (c[F] = c[I]),
          (k[F] = k[I]),
          (c[F + 1] = c[I + 1]),
          (k[F + 1] = k[I + 1]),
          (c[F + 2] = c[I + 2]),
          (k[F + 2] = k[I + 2]),
          (c[F + 3] = c[I + 3]),
          (k[F + 3] = k[I + 3]),
          J(G, n) >= r))
      ) {
        IB(n);
        r = 0 != ((c[a + 9] & 2) | 0);
        do {
          if (!r && !(0 >= j)) {
            k[a + 10] = v[c[c[a] + 3]](a, n, m, e, f);
            break a;
          }
        } while (0);
        r = c[c[a] + 3];
        WP(L, n);
        k[a + 10] = v[r](a, L, m, e, f);
      }
    }
  } while (0);
  b = g;
}
beb.X = 1;
function ceb() {}
ceb.X = 1;
function deb() {
  return D.fe;
}
deb.X = 1;
function eeb() {
  return 76;
}
eeb.X = 1;
function feb(a) {
  return a + 4;
}
feb.X = 1;
function dUa(a, d, e, f, g, h) {
  EY(a);
  c[a] = geb + 2;
  c[a + 1] = d;
  xi(a + 2, e);
  xi(a + 18, f);
  xi(a + 34, g);
  k[a + 50] = 1;
  k[a + 51] = h;
  k[a + 52] = 0;
}
dUa.X = 1;
function heb() {}
heb.X = 1;
function ieb(a) {
  xe(a);
}
ieb.X = 1;
function jeb() {}
jeb.X = 1;
function keb(a) {
  xe(a);
}
keb.X = 1;
function leb(a, d, e) {
  cZ(a);
  c[a] = meb + 2;
  var f = a + 4;
  c[f] = c[e];
  k[f] = k[e];
  c[f + 1] = c[e + 1];
  k[f + 1] = k[e + 1];
  c[f + 2] = c[e + 2];
  k[f + 2] = k[e + 2];
  c[f + 3] = c[e + 3];
  k[f + 3] = k[e + 3];
  c[a + 8] = d;
  c[a + 1] = 22;
}
leb.X = 1;
function neb(a) {
  xe(a);
}
neb.X = 1;
function oeb() {}
oeb.X = 1;
function peb(a, d, e, f) {
  var g = b;
  b += 21;
  var h = g + 6,
    i = g + 10,
    j = g + 11,
    l = g + 12,
    m = g + 13,
    n = g + 17;
  qeb(g, d, a + 4);
  k[i] = 1 / k[a + 4];
  k[j] = 1 / k[a + 4 + 1];
  k[l] = 1 / k[a + 4 + 2];
  H(h, i, j, l);
  k[m] = 0 <= k[a + 4] ? k[e] * k[h] : k[f] * k[h];
  k[m + 1] = 0 <= k[a + 4 + 1] ? k[e + 1] * k[h + 1] : k[f + 1] * k[h + 1];
  k[m + 2] = 0 <= k[a + 4 + 2] ? k[e + 2] * k[h + 2] : k[f + 2] * k[h + 2];
  k[m + 3] = 0;
  k[n] = 0 >= k[a + 4] ? k[e] * k[h] : k[f] * k[h];
  k[n + 1] = 0 >= k[a + 4 + 1] ? k[e + 1] * k[h + 1] : k[f + 1] * k[h + 1];
  k[n + 2] = 0 >= k[a + 4 + 2] ? k[e + 2] * k[h + 2] : k[f + 2] * k[h + 2];
  k[n + 3] = 0;
  a = c[a + 8];
  v[c[c[a] + 15]](a, g, m, n);
  b = g;
}
peb.X = 1;
function reb() {}
reb.X = 1;
function seb(a, d, e, f) {
  var g = b;
  b += 70;
  var h = g + 4,
    i = g + 8,
    j = g + 12,
    l = g + 16,
    m = g + 20,
    n = g + 21,
    p = g + 25,
    r = g + 26,
    s = g + 30,
    t = g + 34,
    w = g + 35,
    x = g + 39,
    y = g + 51,
    z = g + 55,
    A = g + 59,
    C = g + 60,
    B = g + 61,
    K = g + 62,
    E = g + 66,
    G = c[a + 8] + 4;
  c[g] = c[G];
  k[g] = k[G];
  c[g + 1] = c[G + 1];
  k[g + 1] = k[G + 1];
  c[g + 2] = c[G + 2];
  k[g + 2] = k[G + 2];
  c[g + 3] = c[G + 3];
  k[g + 3] = k[G + 3];
  G = c[a + 8] + 8;
  c[h] = c[G];
  k[h] = k[G];
  c[h + 1] = c[G + 1];
  k[h + 1] = k[G + 1];
  c[h + 2] = c[G + 2];
  k[h + 2] = k[G + 2];
  c[h + 3] = c[G + 3];
  k[h + 3] = k[G + 3];
  ig(i, g, a + 4);
  ig(j, h, a + 4);
  k[g] = 0 <= k[a + 4] ? k[i] : k[j];
  k[g + 1] = 0 <= k[a + 4 + 1] ? k[i + 1] : k[j + 1];
  k[g + 2] = 0 <= k[a + 4 + 2] ? k[i + 2] : k[j + 2];
  k[h] = 0 >= k[a + 4] ? k[i] : k[j];
  k[h + 1] = 0 >= k[a + 4 + 1] ? k[i + 1] : k[j + 1];
  k[h + 2] = 0 >= k[a + 4 + 2] ? k[i + 2] : k[j + 2];
  k[m] = 0.5;
  N(n, h, g);
  Q(l, n, m);
  a = c[a + 8];
  k[p] = v[c[c[a] + 11]](a);
  H(r, p, p, p);
  xn(l, r);
  k[t] = 0.5;
  wn(w, h, g);
  Q(s, w, t);
  qc(x, d);
  vw(y, d, s);
  k[A] = J(0 + x, l);
  k[C] = J(4 + x, l);
  k[B] = J(8 + x, l);
  H(z, A, C, B);
  N(K, y, z);
  c[e] = c[K];
  k[e] = k[K];
  c[e + 1] = c[K + 1];
  k[e + 1] = k[K + 1];
  c[e + 2] = c[K + 2];
  k[e + 2] = k[K + 2];
  c[e + 3] = c[K + 3];
  k[e + 3] = k[K + 3];
  wn(E, y, z);
  c[f] = c[E];
  k[f] = k[E];
  c[f + 1] = c[E + 1];
  k[f + 1] = k[E + 1];
  c[f + 2] = c[E + 2];
  k[f + 2] = k[E + 2];
  c[f + 3] = c[E + 3];
  k[f + 3] = k[E + 3];
  b = g;
}
seb.X = 1;
function teb(a, d) {
  var e = a + 4;
  c[e] = c[d];
  k[e] = k[d];
  c[e + 1] = c[d + 1];
  k[e + 1] = k[d + 1];
  c[e + 2] = c[d + 2];
  k[e + 2] = k[d + 2];
  c[e + 3] = c[d + 3];
  k[e + 3] = k[d + 3];
}
teb.X = 1;
function ueb(a, d, e) {
  var f = c[a + 8];
  v[c[c[f] + 13]](f, d, e);
  c[d + 1] = 22;
  mc(a + 4, d + 24);
  return D.Qe;
}
ueb.X = 1;
function qeb(a, d, e) {
  EY(a);
  c[a] = veb + 2;
  c[a + 1] = d;
  a += 2;
  c[a] = c[e];
  k[a] = k[e];
  c[a + 1] = c[e + 1];
  k[a + 1] = k[e + 1];
  c[a + 2] = c[e + 2];
  k[a + 2] = k[e + 2];
  c[a + 3] = c[e + 3];
  k[a + 3] = k[e + 3];
}
qeb.X = 1;
function web(a) {
  xe(a);
}
web.X = 1;
function xeb(a, d, e, f) {
  var g = b;
  b += 168;
  var h = g + 26,
    i = g + 117,
    j = g + 118,
    l = g + 124;
  sZ(g, d, d + 4, d + 8);
  v[c[c[g] + 10]](g, k[a + 51]);
  gY(h);
  vY(i);
  wY(j, c[a + 1], g, h, i);
  fY(l);
  k[l + 41] = 1;
  k[l + 43] = k[a + 52];
  DWa(j, a + 2, a + 18, a + 34, a + 34, l) &&
    9999999747378752e-20 < Um(l + 33) &&
    k[l + 41] < k[a + 50] &&
    (IB(l + 33), v[c[c[a] + 3]](a, l + 33, l + 37, k[l + 41], e, f));
  EX(g);
  b = g;
}
xeb.X = 1;
function yeb(a, d) {
  return c[a + 3] + d;
}
yeb.X = 1;
function zeb(a, d, e, f) {
  var g = b;
  b += 24;
  var h = g + 12,
    i = g + 16,
    j = g + 20;
  ig(h, d, a + 2);
  c[g] = c[h];
  k[g] = k[h];
  c[g + 1] = c[h + 1];
  k[g + 1] = k[h + 1];
  c[g + 2] = c[h + 2];
  k[g + 2] = k[h + 2];
  c[g + 3] = c[h + 3];
  k[g + 3] = k[h + 3];
  ig(i, d + 4, a + 2);
  h = g + 4;
  c[h] = c[i];
  k[h] = k[i];
  c[h + 1] = c[i + 1];
  k[h + 1] = k[i + 1];
  c[h + 2] = c[i + 2];
  k[h + 2] = k[i + 2];
  c[h + 3] = c[i + 3];
  k[h + 3] = k[i + 3];
  ig(j, d + 8, a + 2);
  d = g + 8;
  c[d] = c[j];
  k[d] = k[j];
  c[d + 1] = c[j + 1];
  k[d + 1] = k[j + 1];
  c[d + 2] = c[j + 2];
  k[d + 2] = k[j + 2];
  c[d + 3] = c[j + 3];
  k[d + 3] = k[j + 3];
  a = c[a + 1];
  v[c[c[a] + 2]](a, g, e, f);
  b = g;
}
zeb.X = 1;
function w1(a) {
  Aeb(a, 0, x1(a));
  Beb(a);
  y1(a);
}
w1.X = 1;
function Ceb(a, d) {
  KW(a);
  y1(a + 5);
  c[a + 11] = d;
  UW(a);
  w1(a + 5);
  c[a + 10] = 0;
}
Ceb.X = 1;
function Deb(a) {
  w1(a + 5);
  UW(a);
  w1(a + 5);
  UW(a);
}
Deb.X = 1;
function Aeb(a, d, e) {
  $1 = a;
  a = d;
  d = (a | 0) < (e | 0);
  a: do {
    if (d) {
      for (;;) {
        if (((a += 1), (a | 0) >= (e | 0))) {
          break a;
        }
      }
    }
}