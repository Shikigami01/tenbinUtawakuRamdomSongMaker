(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Qu = { exports: {} },
  nl = {},
  Ku = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xt = Symbol.for('react.element'),
  fc = Symbol.for('react.portal'),
  dc = Symbol.for('react.fragment'),
  pc = Symbol.for('react.strict_mode'),
  mc = Symbol.for('react.profiler'),
  hc = Symbol.for('react.provider'),
  vc = Symbol.for('react.context'),
  yc = Symbol.for('react.forward_ref'),
  gc = Symbol.for('react.suspense'),
  Sc = Symbol.for('react.memo'),
  wc = Symbol.for('react.lazy'),
  Ai = Symbol.iterator;
function kc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ai && e[Ai]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Yu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gu = Object.assign,
  Xu = {};
function lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xu),
    (this.updater = t || Yu);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, n, 'setState');
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Zu() {}
Zu.prototype = lt.prototype;
function $o(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xu),
    (this.updater = t || Yu);
}
var Vo = ($o.prototype = new Zu());
Vo.constructor = $o;
Gu(Vo, lt.prototype);
Vo.isPureReactComponent = !0;
var ji = Array.isArray,
  Ju = Object.prototype.hasOwnProperty,
  Ho = { current: null },
  qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (i = n.ref),
    n.key !== void 0 && (o = '' + n.key),
    n))
      Ju.call(n, r) && !qu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xt,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ho.current,
  };
}
function Ec(e, n) {
  return {
    $$typeof: Xt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xt;
}
function xc(e) {
  var n = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Fi = /\/+/g;
function kl(e, n) {
  return typeof e == 'object' && e !== null && e.key != null
    ? xc('' + e.key)
    : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Xt:
          case fc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + kl(i, 0) : r),
      ji(l)
        ? ((t = ''),
          e != null && (t = e.replace(Fi, '$&/') + '/'),
          Sr(l, n, t, '', function (c) {
            return c;
          }))
        : l != null &&
          (Wo(l) &&
            (l = Ec(
              l,
              t +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Fi, '$&/') + '/') +
                e,
            )),
          n.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), ji(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + kl(o, u);
      i += Sr(o, n, t, s, l);
    }
  else if (((s = kc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + kl(o, u++)), (i += Sr(o, n, t, s, l));
  else if (o === 'object')
    throw (
      ((n = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (n === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : n) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, '', '', function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function Cc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  _c = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Ho,
  };
z.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t,
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Wo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
z.Component = lt;
z.Fragment = dc;
z.Profiler = mc;
z.PureComponent = $o;
z.StrictMode = pc;
z.Suspense = gc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _c;
z.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Gu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (i = Ho.current)),
      n.key !== void 0 && (l = '' + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      Ju.call(n, s) &&
        !qu.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: vc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = bu;
z.createFactory = function (e) {
  var n = bu.bind(null, e);
  return (n.type = e), n;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: yc, render: e };
};
z.isValidElement = Wo;
z.lazy = function (e) {
  return { $$typeof: wc, _payload: { _status: -1, _result: e }, _init: Cc };
};
z.memo = function (e, n) {
  return { $$typeof: Sc, type: e, compare: n === void 0 ? null : n };
};
z.startTransition = function (e) {
  var n = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = n;
  }
};
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
z.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
z.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
z.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
z.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = '18.2.0';
Ku.exports = z;
var tl = Ku.exports;
const Nc = cc(tl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = tl,
  Tc = Symbol.for('react.element'),
  Lc = Symbol.for('react.fragment'),
  zc = Object.prototype.hasOwnProperty,
  Rc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  t !== void 0 && (o = '' + t),
    n.key !== void 0 && (o = '' + n.key),
    n.ref !== void 0 && (i = n.ref);
  for (r in n) zc.call(n, r) && !Oc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Tc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Rc.current,
  };
}
nl.Fragment = Lc;
nl.jsx = es;
nl.jsxs = es;
Qu.exports = nl;
var L = Qu.exports,
  Yl = {},
  ns = { exports: {} },
  ge = {},
  ts = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(x, P) {
    var T = x.length;
    x.push(P);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        X = x[W];
      if (0 < l(X, P)) (x[W] = P), (x[T] = X), (T = W);
      else break e;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var P = x[0],
      T = x.pop();
    if (T !== P) {
      x[0] = T;
      e: for (var W = 0, X = x.length, er = X >>> 1; W < er; ) {
        var vn = 2 * (W + 1) - 1,
          wl = x[vn],
          yn = vn + 1,
          nr = x[yn];
        if (0 > l(wl, T))
          yn < X && 0 > l(nr, wl)
            ? ((x[W] = nr), (x[yn] = T), (W = yn))
            : ((x[W] = wl), (x[vn] = T), (W = vn));
        else if (yn < X && 0 > l(nr, T)) (x[W] = nr), (x[yn] = T), (W = yn);
        else break e;
      }
    }
    return P;
  }
  function l(x, P) {
    var T = x.sortIndex - P.sortIndex;
    return T !== 0 ? T : x.id - P.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    S = !1,
    w = !1,
    j = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var P = t(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= x)
        r(c), (P.sortIndex = P.expirationTime), n(s, P);
      else break;
      P = t(c);
    }
  }
  function v(x) {
    if (((w = !1), d(x), !S))
      if (t(s) !== null) (S = !0), gl(E);
      else {
        var P = t(c);
        P !== null && Sl(v, P.startTime - x);
      }
  }
  function E(x, P) {
    (S = !1), w && ((w = !1), f(N), (N = -1)), (g = !0);
    var T = p;
    try {
      for (
        d(P), m = t(s);
        m !== null && (!(m.expirationTime > P) || (x && !Ne()));

      ) {
        var W = m.callback;
        if (typeof W == 'function') {
          (m.callback = null), (p = m.priorityLevel);
          var X = W(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == 'function' ? (m.callback = X) : m === t(s) && r(s),
            d(P);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var er = !0;
      else {
        var vn = t(c);
        vn !== null && Sl(v, vn.startTime - P), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = T), (g = !1);
    }
  }
  var C = !1,
    _ = null,
    N = -1,
    H = 5,
    R = -1;
  function Ne() {
    return !(e.unstable_now() - R < H);
  }
  function ut() {
    if (_ !== null) {
      var x = e.unstable_now();
      R = x;
      var P = !0;
      try {
        P = _(!0, x);
      } finally {
        P ? st() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var st;
  if (typeof a == 'function')
    st = function () {
      a(ut);
    };
  else if (typeof MessageChannel < 'u') {
    var Di = new MessageChannel(),
      ac = Di.port2;
    (Di.port1.onmessage = ut),
      (st = function () {
        ac.postMessage(null);
      });
  } else
    st = function () {
      j(ut, 0);
    };
  function gl(x) {
    (_ = x), C || ((C = !0), st());
  }
  function Sl(x, P) {
    N = j(function () {
      x(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), gl(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (H = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var T = p;
      p = P;
      try {
        return x();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, P) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var T = p;
      p = x;
      try {
        return P();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, P, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == 'object' && T !== null
          ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? W + T : W))
          : (T = W),
        x)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = T + X),
        (x = {
          id: h++,
          callback: P,
          priorityLevel: x,
          startTime: T,
          expirationTime: X,
          sortIndex: -1,
        }),
        T > W
          ? ((x.sortIndex = T),
            n(c, x),
            t(s) === null &&
              x === t(c) &&
              (w ? (f(N), (N = -1)) : (w = !0), Sl(v, T - W)))
          : ((x.sortIndex = X), n(s, x), S || g || ((S = !0), gl(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (x) {
      var P = p;
      return function () {
        var T = p;
        p = P;
        try {
          return x.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(rs);
ts.exports = rs;
var Ic = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = tl,
  ye = Ic;
function y(e) {
  for (
    var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1;
    t < arguments.length;
    t++
  )
    n += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    n +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var os = new Set(),
  Ot = {};
function zn(e, n) {
  Jn(e, n), Jn(e + 'Capture', n);
}
function Jn(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++) os.add(n[e]);
}
var We = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Gl = Object.prototype.hasOwnProperty,
  Mc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ui = {},
  Bi = {};
function Dc(e) {
  return Gl.call(Bi, e)
    ? !0
    : Gl.call(Ui, e)
      ? !1
      : Mc.test(e)
        ? (Bi[e] = !0)
        : ((Ui[e] = !0), !1);
}
function Ac(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function jc(e, n, t, r) {
  if (n === null || typeof n > 'u' || Ac(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, o, i) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qo = /[\-:]([a-z])/g;
function Ko(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Qo, Ko);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Qo, Ko);
    ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var n = e.replace(Qo, Ko);
  ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== 'o' && n[0] !== 'O') ||
      (n[1] !== 'n' && n[1] !== 'N')) &&
    (jc(n, t, l, r) && (t = null),
    r || l === null
      ? Dc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
      : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for('react.element'),
  In = Symbol.for('react.portal'),
  Mn = Symbol.for('react.fragment'),
  Go = Symbol.for('react.strict_mode'),
  Xl = Symbol.for('react.profiler'),
  is = Symbol.for('react.provider'),
  us = Symbol.for('react.context'),
  Xo = Symbol.for('react.forward_ref'),
  Zl = Symbol.for('react.suspense'),
  Jl = Symbol.for('react.suspense_list'),
  Zo = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  ss = Symbol.for('react.offscreen'),
  $i = Symbol.iterator;
function at(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = ($i && e[$i]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $ = Object.assign,
  El;
function St(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      El = (n && n[1]) || '';
    }
  return (
    `
` +
    El +
    e
  );
}
var xl = !1;
function Cl(e, n) {
  if (!e || xl) return '';
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : '') ? St(e) : '';
}
function Fc(e) {
  switch (e.tag) {
    case 5:
      return St(e.type);
    case 16:
      return St('Lazy');
    case 13:
      return St('Suspense');
    case 19:
      return St('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return '';
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Mn:
      return 'Fragment';
    case In:
      return 'Portal';
    case Xl:
      return 'Profiler';
    case Go:
      return 'StrictMode';
    case Zl:
      return 'Suspense';
    case Jl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case us:
        return (e.displayName || 'Context') + '.Consumer';
      case is:
        return (e._context.displayName || 'Context') + '.Provider';
      case Xo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Zo:
        return (
          (n = e.displayName || null), n !== null ? n : ql(e.type) || 'Memo'
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return ql(e(n));
        } catch {}
    }
  return null;
}
function Uc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (n.displayName || 'Context') + '.Consumer';
    case 10:
      return (n._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ''),
        n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return n;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ql(n);
    case 8:
      return n === Go ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == 'function') return n.displayName || n.name || null;
      if (typeof n == 'string') return n;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function as(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (n === 'checkbox' || n === 'radio')
  );
}
function Bc(e) {
  var n = as(e) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = '' + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Bc(e));
}
function cs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = '';
  return (
    e && (r = as(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Rr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, n) {
  var t = n.checked;
  return $({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Vi(e, n) {
  var t = n.defaultValue == null ? '' : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = fn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === 'checkbox' || n.type === 'radio'
          ? n.checked != null
          : n.value != null,
    });
}
function fs(e, n) {
  (n = n.checked), n != null && Yo(e, 'checked', n, !1);
}
function eo(e, n) {
  fs(e, n);
  var t = fn(n.value),
    r = n.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
      : e.value !== '' + t && (e.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  n.hasOwnProperty('value')
    ? no(e, n.type, t)
    : n.hasOwnProperty('defaultValue') && no(e, n.type, fn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Hi(e, n, t) {
  if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
    var r = n.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = '' + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== '' && (e.name = t);
}
function no(e, n, t) {
  (n !== 'number' || Rr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
}
var wt = Array.isArray;
function Qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty('$' + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = '' + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function to(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Wi(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (wt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ''), (t = n);
  }
  e._wrapperState = { initialValue: fn(t) };
}
function ds(e, n) {
  var t = fn(n.value),
    r = fn(n.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = '' + r);
}
function Qi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
}
function ps(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ro(e, n) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ps(n)
    : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var or,
  ms = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = n;
    else {
      for (
        or = or || document.createElement('div'),
          or.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
          n = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function It(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $c = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xt).forEach(function (e) {
  $c.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function hs(e, n, t) {
  return n == null || typeof n == 'boolean' || n === ''
    ? ''
    : t || typeof n != 'number' || n === 0 || (xt.hasOwnProperty(e) && xt[e])
      ? ('' + n).trim()
      : n + 'px';
}
function vs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        l = hs(t, n[t], r);
      t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Vc = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function lo(e, n) {
  if (n) {
    if (Vc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != 'object' ||
        !('__html' in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != 'object') throw Error(y(62));
  }
}
function oo(e, n) {
  if (e.indexOf('-') === -1) return typeof n.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var io = null;
function Jo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uo = null,
  Kn = null,
  Yn = null;
function Ki(e) {
  if ((e = qt(e))) {
    if (typeof uo != 'function') throw Error(y(280));
    var n = e.stateNode;
    n && ((n = ul(n)), uo(e.stateNode, e.type, n));
  }
}
function ys(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function gs() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Ki(e), n)) for (e = 0; e < n.length; e++) Ki(n[e]);
  }
}
function Ss(e, n) {
  return e(n);
}
function ws() {}
var _l = !1;
function ks(e, n, t) {
  if (_l) return e(n, t);
  _l = !0;
  try {
    return Ss(e, n, t);
  } finally {
    (_l = !1), (Kn !== null || Yn !== null) && (ws(), gs());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ul(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != 'function') throw Error(y(231, n, typeof t));
  return t;
}
var so = !1;
if (We)
  try {
    var ct = {};
    Object.defineProperty(ct, 'passive', {
      get: function () {
        so = !0;
      },
    }),
      window.addEventListener('test', ct, ct),
      window.removeEventListener('test', ct, ct);
  } catch {
    so = !1;
  }
function Hc(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Ct = !1,
  Or = null,
  Ir = !1,
  ao = null,
  Wc = {
    onError: function (e) {
      (Ct = !0), (Or = e);
    },
  };
function Qc(e, n, t, r, l, o, i, u, s) {
  (Ct = !1), (Or = null), Hc.apply(Wc, arguments);
}
function Kc(e, n, t, r, l, o, i, u, s) {
  if ((Qc.apply(this, arguments), Ct)) {
    if (Ct) {
      var c = Or;
      (Ct = !1), (Or = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (ao = c));
  }
}
function Rn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Es(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Yi(e) {
  if (Rn(e) !== e) throw Error(y(188));
}
function Yc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Rn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Yi(l), e;
        if (o === r) return Yi(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          (i = !0), (t = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (t = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            (i = !0), (t = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function xs(e) {
  return (e = Yc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Cs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var _s = ye.unstable_scheduleCallback,
  Gi = ye.unstable_cancelCallback,
  Gc = ye.unstable_shouldYield,
  Xc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Zc = ye.unstable_getCurrentPriorityLevel,
  qo = ye.unstable_ImmediatePriority,
  Ns = ye.unstable_UserBlockingPriority,
  Mr = ye.unstable_NormalPriority,
  Jc = ye.unstable_LowPriority,
  Ps = ye.unstable_IdlePriority,
  rl = null,
  je = null;
function qc(e) {
  if (je && typeof je.onCommitFiberRoot == 'function')
    try {
      je.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : nf,
  bc = Math.log,
  ef = Math.LN2;
function nf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bc(e) / ef) | 0)) | 0;
}
var ir = 64,
  ur = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = kt(u)) : ((o &= i), o !== 0 && (r = kt(o)));
  } else (i = t & ~l), i !== 0 ? (r = kt(i)) : o !== 0 && (r = kt(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function tf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & t) || u & r) && (l[i] = tf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function co(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ts() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Re(n)),
    (e[n] = t);
}
function lf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function bo(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var I = 0;
function Ls(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  ei,
  Rs,
  Os,
  Is,
  fo = !1,
  sr = [],
  tn = null,
  rn = null,
  ln = null,
  Dt = new Map(),
  At = new Map(),
  qe = [],
  of =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Xi(e, n) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ln = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Dt.delete(n.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      At.delete(n.pointerId);
  }
}
function ft(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = qt(n)), n !== null && ei(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function uf(e, n, t, r, l) {
  switch (n) {
    case 'focusin':
      return (tn = ft(tn, e, n, t, r, l)), !0;
    case 'dragenter':
      return (rn = ft(rn, e, n, t, r, l)), !0;
    case 'mouseover':
      return (ln = ft(ln, e, n, t, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Dt.set(o, ft(Dt.get(o) || null, e, n, t, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), At.set(o, ft(At.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var n = wn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Es(t)), n !== null)) {
          (e.blockedOn = n),
            Is(e.priority, function () {
              Rs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = po(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (io = r), t.target.dispatchEvent(r), (io = null);
    } else return (n = qt(t)), n !== null && ei(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Zi(e, n, t) {
  kr(e) && t.delete(n);
}
function sf() {
  (fo = !1),
    tn !== null && kr(tn) && (tn = null),
    rn !== null && kr(rn) && (rn = null),
    ln !== null && kr(ln) && (ln = null),
    Dt.forEach(Zi),
    At.forEach(Zi);
}
function dt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    fo ||
      ((fo = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, sf)));
}
function jt(e) {
  function n(l) {
    return dt(l, e);
  }
  if (0 < sr.length) {
    dt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && dt(tn, e),
      rn !== null && dt(rn, e),
      ln !== null && dt(ln, e),
      Dt.forEach(n),
      At.forEach(n),
      t = 0;
    t < qe.length;
    t++
  )
    (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); )
    Ms(t), t.blockedOn === null && qe.shift();
}
var Gn = Ge.ReactCurrentBatchConfig,
  Ar = !0;
function af(e, n, t, r) {
  var l = I,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (I = 1), ni(e, n, t, r);
  } finally {
    (I = l), (Gn.transition = o);
  }
}
function cf(e, n, t, r) {
  var l = I,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (I = 4), ni(e, n, t, r);
  } finally {
    (I = l), (Gn.transition = o);
  }
}
function ni(e, n, t, r) {
  if (Ar) {
    var l = po(e, n, t, r);
    if (l === null) Al(e, n, r, jr, t), Xi(e, r);
    else if (uf(l, e, n, t, r)) r.stopPropagation();
    else if ((Xi(e, r), n & 4 && -1 < of.indexOf(e))) {
      for (; l !== null; ) {
        var o = qt(l);
        if (
          (o !== null && zs(o),
          (o = po(e, n, t, r)),
          o === null && Al(e, n, r, jr, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Al(e, n, r, null, t);
  }
}
var jr = null;
function po(e, n, t, r) {
  if (((jr = null), (e = Jo(r)), (e = wn(e)), e !== null))
    if (((n = Rn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Es(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (jr = e), null;
}
function Ds(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Zc()) {
        case qo:
          return 1;
        case Ns:
          return 4;
        case Mr:
        case Jc:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  ti = null,
  Er = null;
function As() {
  if (Er) return Er;
  var e,
    n = ti,
    t = n.length,
    r,
    l = 'value' in en ? en.value : en.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Ji() {
  return !1;
}
function Se(e) {
  function n(t, r, l, o, i) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : Ji),
      (this.isPropagationStopped = Ji),
      this
    );
  }
  return (
    $(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    n
  );
}
var ot = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ri = Se(ot),
  Jt = $({}, ot, { view: 0, detail: 0 }),
  ff = Se(Jt),
  Pl,
  Tl,
  pt,
  ll = $({}, Jt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: li,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== pt &&
            (pt && e.type === 'mousemove'
              ? ((Pl = e.screenX - pt.screenX), (Tl = e.screenY - pt.screenY))
              : (Tl = Pl = 0),
            (pt = e)),
          Pl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Tl;
    },
  }),
  qi = Se(ll),
  df = $({}, ll, { dataTransfer: 0 }),
  pf = Se(df),
  mf = $({}, Jt, { relatedTarget: 0 }),
  Ll = Se(mf),
  hf = $({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = Se(hf),
  yf = $({}, ot, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gf = Se(yf),
  Sf = $({}, ot, { data: 0 }),
  bi = Se(Sf),
  wf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  kf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ef = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function xf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ef[e]) ? !!n[e] : !1;
}
function li() {
  return xf;
}
var Cf = $({}, Jt, {
    key: function (e) {
      if (e.key) {
        var n = wf[e.key] || e.key;
        if (n !== 'Unidentified') return n;
      }
      return e.type === 'keypress'
        ? ((e = xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? kf[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: li,
    charCode: function (e) {
      return e.type === 'keypress' ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? xr(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  _f = Se(Cf),
  Nf = $({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  eu = Se(Nf),
  Pf = $({}, Jt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: li,
  }),
  Tf = Se(Pf),
  Lf = $({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zf = Se(Lf),
  Rf = $({}, ll, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Of = Se(Rf),
  If = [9, 13, 27, 32],
  oi = We && 'CompositionEvent' in window,
  _t = null;
We && 'documentMode' in document && (_t = document.documentMode);
var Mf = We && 'TextEvent' in window && !_t,
  js = We && (!oi || (_t && 8 < _t && 11 >= _t)),
  nu = ' ',
  tu = !1;
function Fs(e, n) {
  switch (e) {
    case 'keyup':
      return If.indexOf(n.keyCode) !== -1;
    case 'keydown':
      return n.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Dn = !1;
function Df(e, n) {
  switch (e) {
    case 'compositionend':
      return Us(n);
    case 'keypress':
      return n.which !== 32 ? null : ((tu = !0), nu);
    case 'textInput':
      return (e = n.data), e === nu && tu ? null : e;
    default:
      return null;
  }
}
function Af(e, n) {
  if (Dn)
    return e === 'compositionend' || (!oi && Fs(e, n))
      ? ((e = As()), (Er = ti = en = null), (Dn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case 'compositionend':
      return js && n.locale !== 'ko' ? null : n.data;
    default:
      return null;
  }
}
var jf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ru(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === 'input' ? !!jf[e.type] : n === 'textarea';
}
function Bs(e, n, t, r) {
  ys(r),
    (n = Fr(n, 'onChange')),
    0 < n.length &&
      ((t = new ri('onChange', 'change', null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Nt = null,
  Ft = null;
function Ff(e) {
  Js(e, 0);
}
function ol(e) {
  var n = Fn(e);
  if (cs(n)) return e;
}
function Uf(e, n) {
  if (e === 'change') return n;
}
var $s = !1;
if (We) {
  var zl;
  if (We) {
    var Rl = 'oninput' in document;
    if (!Rl) {
      var lu = document.createElement('div');
      lu.setAttribute('oninput', 'return;'),
        (Rl = typeof lu.oninput == 'function');
    }
    zl = Rl;
  } else zl = !1;
  $s = zl && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  Nt && (Nt.detachEvent('onpropertychange', Vs), (Ft = Nt = null));
}
function Vs(e) {
  if (e.propertyName === 'value' && ol(Ft)) {
    var n = [];
    Bs(n, Ft, e, Jo(e)), ks(Ff, n);
  }
}
function Bf(e, n, t) {
  e === 'focusin'
    ? (ou(), (Nt = n), (Ft = t), Nt.attachEvent('onpropertychange', Vs))
    : e === 'focusout' && ou();
}
function $f(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ol(Ft);
}
function Vf(e, n) {
  if (e === 'click') return ol(n);
}
function Hf(e, n) {
  if (e === 'input' || e === 'change') return ol(n);
}
function Wf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ie = typeof Object.is == 'function' ? Object.is : Wf;
function Ut(e, n) {
  if (Ie(e, n)) return !0;
  if (typeof e != 'object' || e === null || typeof n != 'object' || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Ie(e[l], n[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, n) {
  var t = iu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = iu(t);
  }
}
function Hs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
          ? Hs(e, n.parentNode)
          : 'contains' in e
            ? e.contains(n)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function Ws() {
  for (var e = window, n = Rr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Rr(e.document);
  }
  return n;
}
function ii(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      n === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Qf(e) {
  var n = Ws(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Hs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && ii(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        'selectionStart' in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uu(t, o));
        var i = uu(t, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(i.node, i.offset))
            : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kf = We && 'documentMode' in document && 11 >= document.documentMode,
  An = null,
  mo = null,
  Pt = null,
  ho = !1;
function su(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  ho ||
    An == null ||
    An !== Rr(r) ||
    ((r = An),
    'selectionStart' in r && ii(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && Ut(Pt, r)) ||
      ((Pt = r),
      (r = Fr(mo, 'onSelect')),
      0 < r.length &&
        ((n = new ri('onSelect', 'select', null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = An))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t['Webkit' + e] = 'webkit' + n),
    (t['Moz' + e] = 'moz' + n),
    t
  );
}
var jn = {
    animationend: cr('Animation', 'AnimationEnd'),
    animationiteration: cr('Animation', 'AnimationIteration'),
    animationstart: cr('Animation', 'AnimationStart'),
    transitionend: cr('Transition', 'TransitionEnd'),
  },
  Ol = {},
  Qs = {};
We &&
  ((Qs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete jn.animationend.animation,
    delete jn.animationiteration.animation,
    delete jn.animationstart.animation),
  'TransitionEvent' in window || delete jn.transitionend.transition);
function il(e) {
  if (Ol[e]) return Ol[e];
  if (!jn[e]) return e;
  var n = jn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Qs) return (Ol[e] = n[t]);
  return e;
}
var Ks = il('animationend'),
  Ys = il('animationiteration'),
  Gs = il('animationstart'),
  Xs = il('transitionend'),
  Zs = new Map(),
  au =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function pn(e, n) {
  Zs.set(e, n), zn(n, [e]);
}
for (var Il = 0; Il < au.length; Il++) {
  var Ml = au[Il],
    Yf = Ml.toLowerCase(),
    Gf = Ml[0].toUpperCase() + Ml.slice(1);
  pn(Yf, 'on' + Gf);
}
pn(Ks, 'onAnimationEnd');
pn(Ys, 'onAnimationIteration');
pn(Gs, 'onAnimationStart');
pn('dblclick', 'onDoubleClick');
pn('focusin', 'onFocus');
pn('focusout', 'onBlur');
pn(Xs, 'onTransitionEnd');
Jn('onMouseEnter', ['mouseout', 'mouseover']);
Jn('onMouseLeave', ['mouseout', 'mouseover']);
Jn('onPointerEnter', ['pointerout', 'pointerover']);
Jn('onPointerLeave', ['pointerout', 'pointerover']);
zn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
zn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
zn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
zn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Et =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Xf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Et));
function cu(e, n, t) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = t), Kc(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          cu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          cu(l, u, c), (o = s);
        }
    }
  }
  if (Ir) throw ((e = ao), (Ir = !1), (ao = null), e);
}
function D(e, n) {
  var t = n[wo];
  t === void 0 && (t = n[wo] = new Set());
  var r = e + '__bubble';
  t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Dl(e, n, t) {
  var r = 0;
  n && (r |= 4), qs(t, e, r, n);
}
var fr = '_reactListening' + Math.random().toString(36).slice(2);
function Bt(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      os.forEach(function (t) {
        t !== 'selectionchange' && (Xf.has(t) || Dl(t, !1, e), Dl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Dl('selectionchange', !1, n));
  }
}
function qs(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = ni;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !so ||
      (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
}
function Al(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = wn(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = o,
      h = Jo(t),
      m = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var g = ri,
          S = e;
        switch (e) {
          case 'keypress':
            if (xr(t) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = _f;
            break;
          case 'focusin':
            (S = 'focus'), (g = Ll);
            break;
          case 'focusout':
            (S = 'blur'), (g = Ll);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Ll;
            break;
          case 'click':
            if (t.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = qi;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = pf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Tf;
            break;
          case Ks:
          case Ys:
          case Gs:
            g = vf;
            break;
          case Xs:
            g = zf;
            break;
          case 'scroll':
            g = ff;
            break;
          case 'wheel':
            g = Of;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = gf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = eu;
        }
        var w = (n & 4) !== 0,
          j = !w && e === 'scroll',
          f = w ? (p !== null ? p + 'Capture' : null) : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Mt(a, f)), v != null && w.push($t(a, v, d)))),
            j)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((p = new g(p, S, null, t, h)), m.push({ event: p, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            t !== io &&
            (S = t.relatedTarget || t.fromElement) &&
            (wn(S) || S[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          g
            ? ((S = t.relatedTarget || t.toElement),
              (g = c),
              (S = S ? wn(S) : null),
              S !== null &&
                ((j = Rn(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = c)),
          g !== S)
        ) {
          if (
            ((w = qi),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = eu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (j = g == null ? p : Fn(g)),
            (d = S == null ? p : Fn(S)),
            (p = new w(v, a + 'leave', g, t, h)),
            (p.target = j),
            (p.relatedTarget = d),
            (v = null),
            wn(h) === c &&
              ((w = new w(f, a + 'enter', S, t, h)),
              (w.target = d),
              (w.relatedTarget = j),
              (v = w)),
            (j = v),
            g && S)
          )
            n: {
              for (w = g, f = S, a = 0, d = w; d; d = On(d)) a++;
              for (d = 0, v = f; v; v = On(v)) d++;
              for (; 0 < a - d; ) (w = On(w)), a--;
              for (; 0 < d - a; ) (f = On(f)), d--;
              for (; a--; ) {
                if (w === f || (f !== null && w === f.alternate)) break n;
                (w = On(w)), (f = On(f));
              }
              w = null;
            }
          else w = null;
          g !== null && fu(m, p, g, w, !1),
            S !== null && j !== null && fu(m, j, S, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? Fn(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var E = Uf;
        else if (ru(p))
          if ($s) E = Hf;
          else {
            E = $f;
            var C = Bf;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = Vf);
        if (E && (E = E(e, c))) {
          Bs(m, E, t, h);
          break e;
        }
        C && C(e, p, c),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            no(p, 'number', p.value);
      }
      switch (((C = c ? Fn(c) : window), e)) {
        case 'focusin':
          (ru(C) || C.contentEditable === 'true') &&
            ((An = C), (mo = c), (Pt = null));
          break;
        case 'focusout':
          Pt = mo = An = null;
          break;
        case 'mousedown':
          ho = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ho = !1), su(m, t, h);
          break;
        case 'selectionchange':
          if (Kf) break;
        case 'keydown':
        case 'keyup':
          su(m, t, h);
      }
      var _;
      if (oi)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        Dn
          ? Fs(e, t) && (N = 'onCompositionEnd')
          : e === 'keydown' && t.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (js &&
          t.locale !== 'ko' &&
          (Dn || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && Dn && (_ = As())
            : ((en = h),
              (ti = 'value' in en ? en.value : en.textContent),
              (Dn = !0))),
        (C = Fr(c, N)),
        0 < C.length &&
          ((N = new bi(N, e, null, t, h)),
          m.push({ event: N, listeners: C }),
          _ ? (N.data = _) : ((_ = Us(t)), _ !== null && (N.data = _)))),
        (_ = Mf ? Df(e, t) : Af(e, t)) &&
          ((c = Fr(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new bi('onBeforeInput', 'beforeinput', null, t, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    Js(m, n);
  });
}
function $t(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Fr(e, n) {
  for (var t = n + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Mt(e, t)),
      o != null && r.unshift($t(e, o, l)),
      (o = Mt(e, n)),
      o != null && r.push($t(e, o, l))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Mt(t, o)), s != null && i.unshift($t(t, s, u)))
        : l || ((s = Mt(t, o)), s != null && i.push($t(t, s, u)))),
      (t = t.return);
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function du(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Zf,
      `
`,
    )
    .replace(Jf, '');
}
function dr(e, n, t) {
  if (((n = du(n)), du(e) !== n && t)) throw Error(y(425));
}
function Ur() {}
var vo = null,
  yo = null;
function go(e, n) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof n.children == 'string' ||
    typeof n.children == 'number' ||
    (typeof n.dangerouslySetInnerHTML == 'object' &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var So = typeof setTimeout == 'function' ? setTimeout : void 0,
  qf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  pu = typeof Promise == 'function' ? Promise : void 0,
  bf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof pu < 'u'
        ? function (e) {
            return pu.resolve(null).then(e).catch(ed);
          }
        : So;
function ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function jl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === '/$')) {
        if (r === 0) {
          e.removeChild(l), jt(n);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = l;
  } while (t);
  jt(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
      if (n === '/$') return null;
    }
  }
  return e;
}
function mu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (n === 0) return e;
        n--;
      } else t === '/$' && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var it = Math.random().toString(36).slice(2),
  Ae = '__reactFiber$' + it,
  Vt = '__reactProps$' + it,
  Qe = '__reactContainer$' + it,
  wo = '__reactEvents$' + it,
  nd = '__reactListeners$' + it,
  td = '__reactHandles$' + it;
function wn(e) {
  var n = e[Ae];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Qe] || t[Ae])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = mu(e); e !== null; ) {
          if ((t = e[Ae])) return t;
          e = mu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function qt(e) {
  return (
    (e = e[Ae] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ul(e) {
  return e[Vt] || null;
}
var ko = [],
  Un = -1;
function mn(e) {
  return { current: e };
}
function A(e) {
  0 > Un || ((e.current = ko[Un]), (ko[Un] = null), Un--);
}
function M(e, n) {
  Un++, (ko[Un] = e.current), (e.current = n);
}
var dn = {},
  le = mn(dn),
  fe = mn(!1),
  _n = dn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  A(fe), A(le);
}
function hu(e, n, t) {
  if (le.current !== dn) throw Error(y(168));
  M(le, n), M(fe, t);
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Uc(e) || 'Unknown', l));
  return $({}, t, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (_n = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function vu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = bs(e, n, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(fe),
      A(le),
      M(le, e))
    : A(fe),
    M(fe, t);
}
var Be = null,
  sl = !1,
  Fl = !1;
function ea(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function rd(e) {
  (sl = !0), ea(e);
}
function hn() {
  if (!Fl && Be !== null) {
    Fl = !0;
    var e = 0,
      n = I;
    try {
      var t = Be;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (sl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), _s(qo, hn), l);
    } finally {
      (I = n), (Fl = !1);
    }
  }
  return null;
}
var Bn = [],
  $n = 0,
  Vr = null,
  Hr = 0,
  we = [],
  ke = 0,
  Nn = null,
  $e = 1,
  Ve = '';
function gn(e, n) {
  (Bn[$n++] = Hr), (Bn[$n++] = Vr), (Vr = e), (Hr = n);
}
function na(e, n, t) {
  (we[ke++] = $e), (we[ke++] = Ve), (we[ke++] = Nn), (Nn = e);
  var r = $e;
  e = Ve;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Re(n) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      ($e = (1 << (32 - Re(n) + l)) | (t << l) | r),
      (Ve = o + e);
  } else ($e = (1 << o) | (t << l) | r), (Ve = e);
}
function ui(e) {
  e.return !== null && (gn(e, 1), na(e, 1, 0));
}
function si(e) {
  for (; e === Vr; )
    (Vr = Bn[--$n]), (Bn[$n] = null), (Hr = Bn[--$n]), (Bn[$n] = null);
  for (; e === Nn; )
    (Nn = we[--ke]),
      (we[ke] = null),
      (Ve = we[--ke]),
      (we[ke] = null),
      ($e = we[--ke]),
      (we[ke] = null);
}
var ve = null,
  he = null,
  F = !1,
  ze = null;
function ta(e, n) {
  var t = Ee(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function yu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ve = e), (he = on(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: $e, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ee(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xo(e) {
  if (F) {
    var n = he;
    if (n) {
      var t = n;
      if (!yu(e, n)) {
        if (Eo(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && yu(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e));
      }
    } else {
      if (Eo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!F) return gu(e), (F = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== 'head' && n !== 'body' && !go(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (Eo(e)) throw (ra(), Error(y(418)));
    for (; n; ) ta(e, n), (n = on(n.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === '/$') {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function bn() {
  (he = ve = null), (F = !1);
}
function ai(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var ld = Ge.ReactCurrentBatchConfig;
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = $({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Wr = mn(null),
  Qr = null,
  Vn = null,
  ci = null;
function fi() {
  ci = Vn = Qr = null;
}
function di(e) {
  var n = Wr.current;
  A(Wr), (e._currentValue = n);
}
function Co(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Xn(e, n) {
  (Qr = e),
    (ci = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var n = e._currentValue;
  if (ci !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Vn === null)) {
      if (Qr === null) throw Error(y(308));
      (Vn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return n;
}
var kn = null;
function pi(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), pi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function mi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), pi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function Cr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
  }
}
function Su(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((p = n), (g = t), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == 'function')) {
                m = S.call(g, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == 'function' ? S.call(g, m, p) : S),
                p == null)
              )
                break e;
              m = $({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (i |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (Tn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function wu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ia = new ls.Component().refs;
function _o(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : $({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ie(),
      l = an(e),
      o = He(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = un(e, o, l)),
      n !== null && (Oe(n, e, l, r), Cr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ie(),
      l = an(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = un(e, o, l)),
      n !== null && (Oe(n, e, l, r), Cr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ie(),
      r = an(e),
      l = He(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = un(e, l, r)),
      n !== null && (Oe(n, e, r, t), Cr(n, e, r));
  },
};
function ku(e, n, t, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : n.prototype && n.prototype.isPureReactComponent
        ? !Ut(t, r) || !Ut(l, o)
        : !0
  );
}
function ua(e, n, t) {
  var r = !1,
    l = dn,
    o = n.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ce(o))
      : ((l = de(n) ? _n : le.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? qn(e, l) : dn)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = al),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function Eu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == 'function' &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && al.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ia), mi(e);
  var o = n.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = Ce(o))
    : ((o = de(n) ? _n : le.current), (l.context = qn(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == 'function' && (_o(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((n = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && al.enqueueReplaceState(l, l.state, null),
      Kr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function mt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = '' + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == 'function' &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (i) {
            var u = l.refs;
            u === ia && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(n).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function xu(e) {
  var n = e._init;
  return n(e._payload);
}
function sa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Ql(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Mn
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === Ze &&
              xu(E) === a.type))
        ? ((v = l(a, d.props)), (v.ref = mt(f, a, d)), (v.return = f), v)
        : ((v = zr(d.type, d.key, d.props, null, f.mode, v)),
          (v.ref = mt(f, a, d)),
          (v.return = f),
          v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Cn(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Ql('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = zr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = mt(f, null, a)),
            (d.return = f),
            d
          );
        case In:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (wt(a) || at(a))
        return (a = Cn(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case In:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (wt(d) || at(d)) return E !== null ? null : h(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case In:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Ze:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (wt(v) || at(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function S(f, a, d, v) {
    for (
      var E = null, C = null, _ = a, N = (a = 0), H = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var R = p(f, _, d[N], v);
      if (R === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && R.alternate === null && n(f, _),
        (a = o(R, a, N)),
        C === null ? (E = R) : (C.sibling = R),
        (C = R),
        (_ = H);
    }
    if (N === d.length) return t(f, _), F && gn(f, N), E;
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = m(f, d[N], v)),
          _ !== null &&
            ((a = o(_, a, N)), C === null ? (E = _) : (C.sibling = _), (C = _));
      return F && gn(f, N), E;
    }
    for (_ = r(f, _); N < d.length; N++)
      (H = g(_, f, N, d[N], v)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? N : H.key),
          (a = o(H, a, N)),
          C === null ? (E = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        _.forEach(function (Ne) {
          return n(f, Ne);
        }),
      F && gn(f, N),
      E
    );
  }
  function w(f, a, d, v) {
    var E = at(d);
    if (typeof E != 'function') throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (E = null), _ = a, N = (a = 0), H = null, R = d.next();
      _ !== null && !R.done;
      N++, R = d.next()
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var Ne = p(f, _, R.value, v);
      if (Ne === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Ne.alternate === null && n(f, _),
        (a = o(Ne, a, N)),
        C === null ? (E = Ne) : (C.sibling = Ne),
        (C = Ne),
        (_ = H);
    }
    if (R.done) return t(f, _), F && gn(f, N), E;
    if (_ === null) {
      for (; !R.done; N++, R = d.next())
        (R = m(f, R.value, v)),
          R !== null &&
            ((a = o(R, a, N)), C === null ? (E = R) : (C.sibling = R), (C = R));
      return F && gn(f, N), E;
    }
    for (_ = r(f, _); !R.done; N++, R = d.next())
      (R = g(_, f, N, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? N : R.key),
          (a = o(R, a, N)),
          C === null ? (E = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        _.forEach(function (ut) {
          return n(f, ut);
        }),
      F && gn(f, N),
      E
    );
  }
  function j(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Mn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Mn)) {
                  if (C.tag === 7) {
                    t(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    xu(E) === C.type)
                ) {
                  t(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = mt(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, C);
                break;
              } else n(f, C);
              C = C.sibling;
            }
            d.type === Mn
              ? ((a = Cn(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = zr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = mt(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case In:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Ze:
          return (C = d._init), j(f, a, C(d._payload), v);
      }
      if (wt(d)) return S(f, a, d, v);
      if (at(d)) return w(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Ql(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : t(f, a);
  }
  return j;
}
var et = sa(!0),
  aa = sa(!1),
  bt = {},
  Fe = mn(bt),
  Ht = mn(bt),
  Wt = mn(bt);
function En(e) {
  if (e === bt) throw Error(y(174));
  return e;
}
function hi(e, n) {
  switch ((M(Wt, n), M(Ht, e), M(Fe, bt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ro(null, '');
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = ro(n, e));
  }
  A(Fe), M(Fe, n);
}
function nt() {
  A(Fe), A(Ht), A(Wt);
}
function ca(e) {
  En(Wt.current);
  var n = En(Fe.current),
    t = ro(n, e.type);
  n !== t && (M(Ht, e), M(Fe, t));
}
function vi(e) {
  Ht.current === e && (A(Fe), A(Ht));
}
var U = mn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ul = [];
function yi() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var _r = Ge.ReactCurrentDispatcher,
  Bl = Ge.ReactCurrentBatchConfig,
  Pn = 0,
  B = null,
  Y = null,
  Z = null,
  Gr = !1,
  Tt = !1,
  Qt = 0,
  od = 0;
function ne() {
  throw Error(y(321));
}
function gi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Ie(e[t], n[t])) return !1;
  return !0;
}
function Si(e, n, t, r, l, o) {
  if (
    ((Pn = o),
    (B = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? ad : cd),
    (e = t(r, l)),
    Tt)
  ) {
    o = 0;
    do {
      if (((Tt = !1), (Qt = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (_r.current = fd),
        (e = t(r, l));
    } while (Tt);
  }
  if (
    ((_r.current = Xr),
    (n = Y !== null && Y.next !== null),
    (Pn = 0),
    (Z = Y = B = null),
    (Gr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function wi() {
  var e = Qt !== 0;
  return (Qt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? B.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kt(e, n) {
  return typeof n == 'function' ? n(e) : n;
}
function $l(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Pn & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (B.lanes |= h),
          (Tn |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Ie(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = i),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Tn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ie(o, n.memoizedState) || (ce = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function fa() {}
function da(e, n) {
  var t = B,
    r = _e(),
    l = n(),
    o = !Ie(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ki(ha.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Yt(9, ma.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Pn & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ma(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), va(n) && ya(e);
}
function ha(e, n, t) {
  return t(function () {
    va(n) && ya(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ie(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ke(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function Cu(e) {
  var n = De();
  return (
    typeof e == 'function' && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = sd.bind(null, B, e)),
    [n.memoizedState, e]
  );
}
function Yt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ga() {
  return _e().memoizedState;
}
function Nr(e, n, t, r) {
  var l = De();
  (B.flags |= e),
    (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function cl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && gi(r, i.deps))) {
      l.memoizedState = Yt(n, t, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = Yt(1 | n, t, o, r));
}
function _u(e, n) {
  return Nr(8390656, 8, e, n);
}
function ki(e, n) {
  return cl(2048, 8, e, n);
}
function Sa(e, n) {
  return cl(4, 2, e, n);
}
function wa(e, n) {
  return cl(4, 4, e, n);
}
function ka(e, n) {
  if (typeof n == 'function')
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ea(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), cl(4, 4, ka.bind(null, n, e), t)
  );
}
function Ei() {}
function xa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && gi(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && gi(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return Pn & 21
    ? (Ie(t, n) || ((t = Ts()), (B.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function id(e, n) {
  var t = I;
  (I = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), n();
  } finally {
    (I = t), (Bl.transition = r);
  }
}
function Na() {
  return _e().memoizedState;
}
function ud(e, n, t) {
  var r = an(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pa(e))
  )
    Ta(n, t);
  else if (((t = la(e, n, t, r)), t !== null)) {
    var l = ie();
    Oe(t, e, r, l), La(t, n, r);
  }
}
function sd(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e)) Ta(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var i = n.lastRenderedState,
          u = o(i, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), pi(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = la(e, n, l, r)),
      t !== null && ((l = ie()), Oe(t, e, r, l), La(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === B || (n !== null && n === B);
}
function Ta(e, n) {
  Tt = Gr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function La(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
  }
}
var Xr = {
    readContext: Ce,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: Ce,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ce,
    useEffect: _u,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Nr(4194308, 4, ka.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Nr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Nr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = ud.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Cu,
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Cu(!1),
        n = e[0];
      return (e = id.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = B,
        l = De();
      if (F) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(y(349));
        Pn & 30 || pa(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        _u(ha.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yt(9, ma.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = J.identifierPrefix;
      if (F) {
        var t = Ve,
          r = $e;
        (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
          (n = ':' + n + 'R' + t),
          (t = Qt++),
          0 < t && (n += 'H' + t.toString(32)),
          (n += ':');
      } else (t = od++), (n = ':' + n + 'r' + t.toString(32) + ':');
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: ki,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: $l,
    useRef: ga,
    useState: function () {
      return $l(Kt);
    },
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      var n = _e();
      return _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Kt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: ki,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Kt);
    },
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      var n = _e();
      return Y === null ? (n.memoizedState = e) : _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Kt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function tt(e, n) {
  try {
    var t = '',
      r = n;
    do (t += Fc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Hl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Po(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var dd = typeof WeakMap == 'function' ? WeakMap : Map;
function za(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Jr || ((Jr = !0), (jo = r)), Po(e, n);
    }),
    t
  );
}
function Ra(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Po(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (t.callback = function () {
        Po(e, n),
          typeof r != 'function' &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    t
  );
}
function Nu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Nd.bind(null, e, n, t)), n.then(e, e));
}
function Pu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), un(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var pd = Ge.ReactCurrentOwner,
  ce = !1;
function oe(e, n, t, r) {
  n.child = e === null ? aa(n, null, t, r) : et(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    Xn(n, l),
    (r = Si(e, n, t, r, o, l)),
    (t = wi()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (F && t && ui(n), (n.flags |= 1), oe(e, n, r, l), n.child)
  );
}
function zu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == 'function' &&
      !zi(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Oa(e, n, o, r, l))
      : ((e = zr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ut), t(i, r) && e.ref === n.ref)
    )
      return Ye(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = cn(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Oa(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ut(o, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Ye(e, n, l);
  }
  return To(e, n, t, r, l);
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Wn, me),
        (me |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          M(Wn, me),
          (me |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        M(Wn, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      M(Wn, me),
      (me |= r);
  return oe(e, n, l, t), n.child;
}
function Ma(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function To(e, n, t, r, l) {
  var o = de(t) ? _n : le.current;
  return (
    (o = qn(n, o)),
    Xn(n, l),
    (t = Si(e, n, t, r, o, l)),
    (r = wi()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (F && r && ui(n), (n.flags |= 1), oe(e, n, t, l), n.child)
  );
}
function Ru(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    $r(n);
  } else o = !1;
  if ((Xn(n, l), n.stateNode === null))
    Pr(e, n), ua(n, t, r), No(n, t, r, l), (r = !0);
  else if (e === null) {
    var i = n.stateNode,
      u = n.memoizedProps;
    i.props = u;
    var s = i.context,
      c = t.contextType;
    typeof c == 'object' && c !== null
      ? (c = Ce(c))
      : ((c = de(t) ? _n : le.current), (c = qn(n, c)));
    var h = t.getDerivedStateFromProps,
      m =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Eu(n, i, r, c)),
      (Je = !1);
    var p = n.memoizedState;
    (i.state = p),
      Kr(n, r, i, l),
      (s = n.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof h == 'function' && (_o(n, t, h, r), (s = n.memoizedState)),
          (u = Je || ku(n, t, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (n.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1));
  } else {
    (i = n.stateNode),
      oa(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : Te(n.type, u)),
      (i.props = c),
      (m = n.pendingProps),
      (p = i.context),
      (s = t.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ce(s))
        : ((s = de(t) ? _n : le.current), (s = qn(n, s)));
    var g = t.getDerivedStateFromProps;
    (h =
      typeof g == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && Eu(n, i, r, s)),
      (Je = !1),
      (p = n.memoizedState),
      (i.state = p),
      Kr(n, r, i, l);
    var S = n.memoizedState;
    u !== m || p !== S || fe.current || Je
      ? (typeof g == 'function' && (_o(n, t, g, r), (S = n.memoizedState)),
        (c = Je || ku(n, t, c, r, p, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == 'function' && (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Lo(e, n, t, r, o, l);
}
function Lo(e, n, t, r, l, o) {
  Ma(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && vu(n, t, !1), Ye(e, n, o);
  (r = n.stateNode), (pd.current = n);
  var u =
    i && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && i
      ? ((n.child = et(n, e.child, null, o)), (n.child = et(n, null, u, o)))
      : oe(e, n, u, o),
    (n.memoizedState = r.state),
    l && vu(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext
    ? hu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && hu(e, n.context, !1),
    hi(e, n.containerInfo);
}
function Ou(e, n, t, r, l) {
  return bn(), ai(l), (n.flags |= 256), oe(e, n, t, r), n.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, n, t) {
  var r = n.pendingProps,
    l = U.current,
    o = !1,
    i = (n.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(U, l & 1),
    e === null)
  )
    return (
      xo(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === '$!'
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = pl(i, r, 0, null)),
              (e = Cn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Ro(t)),
              (n.memoizedState = zo),
              e)
            : xi(n, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return md(e, n, i, r, u, l, t);
  if (o) {
    (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = cn(u, o)) : ((o = Cn(o, i, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ro(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = cn(o, { mode: 'visible', children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function xi(e, n) {
  return (
    (n = pl({ mode: 'visible', children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && ai(r),
    et(n, e.child, null, t),
    (e = xi(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function md(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Hl(Error(y(422)))), hr(e, n, i, r))
      : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((o = r.fallback),
          (l = n.mode),
          (r = pl({ mode: 'visible', children: r.children }, l, 0, null)),
          (o = Cn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = n),
          (o.return = n),
          (r.sibling = o),
          (n.child = r),
          n.mode & 1 && et(n, e.child, null, i),
          (n.child.memoizedState = Ro(i)),
          (n.memoizedState = zo),
          o);
  if (!(n.mode & 1)) return hr(e, n, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Hl(o, r, void 0)), hr(e, n, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ke(e, l), Oe(r, e, l, -1));
    }
    return Li(), (r = Hl(Error(y(421)))), hr(e, n, i, r);
  }
  return l.data === '$?'
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Pd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (he = on(l.nextSibling)),
      (ve = n),
      (F = !0),
      (ze = null),
      e !== null &&
        ((we[ke++] = $e),
        (we[ke++] = Ve),
        (we[ke++] = Nn),
        ($e = e.id),
        (Ve = e.overflow),
        (Nn = n)),
      (n = xi(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Iu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Co(e.return, n, t);
}
function Wl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function ja(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, n, r.children, t), (r = U.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, t, n);
        else if (e.tag === 19) Iu(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(U, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Yr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Wl(n, !1, l, t, o);
        break;
      case 'backwards':
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Wl(n, !0, t, null, o);
        break;
      case 'together':
        Wl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Pr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function hd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), bn();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      de(n.type) && $r(n);
      break;
    case 4:
      hi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      M(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(U, U.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
            ? Aa(e, n, t)
            : (M(U, U.current & 1),
              (e = Ye(e, n, t)),
              e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return ja(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Ia(e, n, t);
  }
  return Ye(e, n, t);
}
var Fa, Oo, Ua, Ba;
Fa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Oo = function () {};
Ua = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), En(Fe.current);
    var o = null;
    switch (t) {
      case 'input':
        (l = bl(e, l)), (r = bl(e, r)), (o = []);
        break;
      case 'select':
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ur);
    }
    lo(t, r);
    var i;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Ot.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (t || (t = {}), (t[i] = s[i]));
          } else t || (o || (o = []), o.push(c, t)), (t = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (o = o || []).push(c, '' + s)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Ot.hasOwnProperty(c)
                  ? (s != null && c === 'onScroll' && D('scroll', e),
                    o || u === s || (o = []))
                  : (o = o || []).push(c, s));
    }
    t && (o = o || []).push('style', t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ba = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!F)
    switch (e.tailMode) {
      case 'hidden':
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function vd(e, n, t) {
  var r = n.pendingProps;
  switch ((si(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && Br(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        A(fe),
        A(le),
        yi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), ze !== null && (Bo(ze), (ze = null)))),
        Oo(e, n),
        te(n),
        null
      );
    case 5:
      vi(n);
      var l = En(Wt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ua(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = En(Fe.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[Ae] = n), (r[Vt] = o), (e = (n.mode & 1) !== 0), t)) {
            case 'dialog':
              D('cancel', r), D('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Et.length; l++) D(Et[l], r);
              break;
            case 'source':
              D('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r);
              break;
            case 'details':
              D('toggle', r);
              break;
            case 'input':
              Vi(r, o), D('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D('invalid', r);
              break;
            case 'textarea':
              Wi(r, o), D('invalid', r);
          }
          lo(t, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Ot.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  D('scroll', r);
            }
          switch (t) {
            case 'input':
              lr(r), Hi(r, o, !0);
              break;
            case 'textarea':
              lr(r), Qi(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Ur);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ps(t)),
            e === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, t)),
            (e[Ae] = n),
            (e[Vt] = r),
            Fa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((i = oo(t, r)), t)) {
              case 'dialog':
                D('cancel', e), D('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Et.length; l++) D(Et[l], e);
                l = r;
                break;
              case 'source':
                D('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (l = r);
                break;
              case 'details':
                D('toggle', e), (l = r);
                break;
              case 'input':
                Vi(e, r), (l = bl(e, r)), D('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                Wi(e, r), (l = to(e, r)), D('invalid', e);
                break;
              default:
                l = r;
            }
            lo(t, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? vs(e, s)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                    : o === 'children'
                      ? typeof s == 'string'
                        ? (t !== 'textarea' || s !== '') && It(e, s)
                        : typeof s == 'number' && It(e, '' + s)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Ot.hasOwnProperty(o)
                          ? s != null && o === 'onScroll' && D('scroll', e)
                          : s != null && Yo(e, o, s, i));
              }
            switch (t) {
              case 'input':
                lr(e), Hi(e, r, !1);
                break;
              case 'textarea':
                lr(e), Qi(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + fn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ur);
            }
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Ba(e, n, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && n.stateNode === null) throw Error(y(166));
        if (((t = En(Wt.current)), En(Fe.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ae] = n),
            (o = r.nodeValue !== t) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ae] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (A(U),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (F && he !== null && n.mode & 1 && !(n.flags & 128))
          ra(), bn(), (n.flags |= 98560), (o = !1);
        else if (((o = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ae] = n;
          } else
            bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (o = !1);
        } else ze !== null && (Bo(ze), (ze = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : Li())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        nt(), Oo(e, n), e === null && Bt(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return di(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Br(), te(n), null;
    case 19:
      if ((A(U), (o = n.memoizedState), o === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ht(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (
                  n.flags |= 128,
                    ht(o, !1),
                    r = i.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return M(U, (U.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > rt &&
            ((n.flags |= 128), (r = !0), ht(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              ht(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !F)
            )
              return te(n), null;
          } else
            2 * Q() - o.renderingStartTime > rt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), ht(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = n.child), (n.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (n.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = Q()),
          (n.sibling = null),
          (t = U.current),
          M(U, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        Ti(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function yd(e, n) {
  switch ((si(n), n.tag)) {
    case 1:
      return (
        de(n.type) && Br(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        nt(),
        A(fe),
        A(le),
        yi(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return vi(n), null;
    case 13:
      if ((A(U), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        bn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return A(U), null;
    case 4:
      return nt(), null;
    case 10:
      return di(n.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  gd = typeof WeakSet == 'function' ? WeakSet : Set,
  k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function Io(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Mu = !1;
function Sd(e, n) {
  if (((vo = Ar), (e = Ws()), ii(e))) {
    if ('selectionStart' in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (yo = { focusedElem: e, selectionRange: t }, Ar = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    j = S.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : Te(n.type, w),
                      j,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (S = Mu), (Mu = !1), S;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Io(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Mo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == 'function' ? n(e) : (n.current = e);
  }
}
function $a(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), $a(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ae], delete n[Vt], delete n[wo], delete n[nd], delete n[td])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Do(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Do(e, n, t), e = e.sibling; e !== null; ) Do(e, n, t), (e = e.sibling);
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), (e = e.sibling);
}
var q = null,
  Le = !1;
function Xe(e, n, t) {
  for (t = t.child; t !== null; ) Ha(e, n, t), (t = t.sibling);
}
function Ha(e, n, t) {
  if (je && typeof je.onCommitFiberUnmount == 'function')
    try {
      je.onCommitFiberUnmount(rl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Hn(t, n);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Xe(e, n, t),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? jl(e.parentNode, t)
              : e.nodeType === 1 && jl(e, t),
            jt(e))
          : jl(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = t.stateNode.containerInfo),
        (Le = !0),
        Xe(e, n, t),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Io(t, n, i),
            (l = l.next);
        } while (l !== r);
      }
      Xe(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Xe(e, n, t);
      break;
    case 21:
      Xe(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Xe(e, n, t), (re = r))
        : Xe(e, n, t);
      break;
    default:
      Xe(e, n, t);
  }
}
function Au(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new gd()),
      n.forEach(function (r) {
        var l = Td.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Ha(o, i, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), Me(e), r & 4)) {
        try {
          Lt(3, e, e.return), fl(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Lt(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      Pe(n, e), Me(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Pe(n, e),
        Me(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          It(l, '');
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && fs(l, o),
              oo(u, i);
            var c = oo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === 'style'
                ? vs(l, m)
                : h === 'dangerouslySetInnerHTML'
                  ? ms(l, m)
                  : h === 'children'
                    ? It(l, m)
                    : Yo(l, h, m, c);
            }
            switch (u) {
              case 'input':
                eo(l, o);
                break;
              case 'textarea':
                ds(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Qn(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qn(l, !!o.multiple, o.defaultValue, !0)
                      : Qn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Vt] = o;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Pe(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          jt(n.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      Pe(n, e), Me(e);
      break;
    case 13:
      Pe(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ni = Q())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((h = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), Pe(n, e), (re = c)) : Pe(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == 'function') {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      V(r, t, w);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : Fu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = hs('display', i)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(n, e), Me(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      Pe(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Va(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (It(l, ''), (r.flags &= -33));
          var o = Du(e);
          Ao(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Du(e);
          Do(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function wd(e, n, t) {
  (k = e), Qa(e);
}
function Qa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = i), (re = s) && !c))
          for (k = l; k !== null; )
            (i = k),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Uu(l)
                : s !== null
                  ? ((s.return = i), (k = s))
                  : Uu(l);
        for (; o !== null; ) (k = o), Qa(o), (o = o.sibling);
        (k = l), (vr = u), (re = c);
      }
      ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : ju(e);
  }
}
function ju(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = n.updateQueue;
              o !== null && wu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                wu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && t.focus();
                    break;
                  case 'img':
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && jt(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (n.flags & 512 && Mo(n));
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Fu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            fl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (k = u);
      break;
    }
    k = n.return;
  }
}
var kd = Math.ceil,
  Zr = Ge.ReactCurrentDispatcher,
  Ci = Ge.ReactCurrentOwner,
  xe = Ge.ReactCurrentBatchConfig,
  O = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Wn = mn(0),
  G = 0,
  Gt = null,
  Tn = 0,
  dl = 0,
  _i = 0,
  zt = null,
  ae = null,
  Ni = 0,
  rt = 1 / 0,
  Ue = null,
  Jr = !1,
  jo = null,
  sn = null,
  yr = !1,
  nn = null,
  qr = 0,
  Rt = 0,
  Fo = null,
  Tr = -1,
  Lr = 0;
function ie() {
  return O & 6 ? Q() : Tr !== -1 ? Tr : (Tr = Q());
}
function an(e) {
  return e.mode & 1
    ? O & 2 && b !== 0
      ? b & -b
      : ld.transition !== null
        ? (Lr === 0 && (Lr = Ts()), Lr)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
          e)
    : 1;
}
function Oe(e, n, t, r) {
  if (50 < Rt) throw ((Rt = 0), (Fo = null), Error(y(185)));
  Zt(e, t, r),
    (!(O & 2) || e !== J) &&
      (e === J && (!(O & 2) && (dl |= t), G === 4 && be(e, b)),
      pe(e, r),
      t === 1 && O === 0 && !(n.mode & 1) && ((rt = Q() + 500), sl && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  rf(e, n);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Gi(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Gi(t), n === 1))
      e.tag === 0 ? rd(Bu.bind(null, e)) : ea(Bu.bind(null, e)),
        bf(function () {
          !(O & 6) && hn();
        }),
        (t = null);
    else {
      switch (Ls(r)) {
        case 1:
          t = qo;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = Mr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = Mr;
      }
      t = ba(t, Ka.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ka(e, n) {
  if (((Tr = -1), (Lr = 0), O & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var o = Ga();
    (J !== e || b !== n) && ((Ue = null), (rt = Q() + 500), xn(e, n));
    do
      try {
        Cd();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (!0);
    fi(),
      (Zr.current = o),
      (O = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = G));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = co(e)), l !== 0 && ((r = l), (n = Uo(e, l)))), n === 1)
    )
      throw ((t = Gt), xn(e, 0), be(e, r), pe(e, Q()), t);
    if (n === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ed(l) &&
          ((n = br(e, r)),
          n === 2 && ((o = co(e)), o !== 0 && ((r = o), (n = Uo(e, o)))),
          n === 1))
      )
        throw ((t = Gt), xn(e, 0), be(e, r), pe(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ae, Ue);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((n = Ni + 500 - Q()), 10 < n))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = So(Sn.bind(null, e, ae, Ue), n);
            break;
          }
          Sn(e, ae, Ue);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * kd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = So(Sn.bind(null, e, ae, Ue), r);
            break;
          }
          Sn(e, ae, Ue);
          break;
        case 5:
          Sn(e, ae, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function Uo(e, n) {
  var t = zt;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, n).flags |= 256),
    (e = br(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Bo(n)),
    e
  );
}
function Bo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Ed(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (
    n &= ~_i,
      n &= ~dl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Re(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Bu(e) {
  if (O & 6) throw Error(y(327));
  Zn();
  var n = Dr(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = co(e);
    r !== 0 && ((n = r), (t = Uo(e, r)));
  }
  if (t === 1) throw ((t = Gt), xn(e, 0), be(e, n), pe(e, Q()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Sn(e, ae, Ue),
    pe(e, Q()),
    null
  );
}
function Pi(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    (O = t), O === 0 && ((rt = Q() + 500), sl && hn());
  }
}
function Ln(e) {
  nn !== null && nn.tag === 0 && !(O & 6) && Zn();
  var n = O;
  O |= 1;
  var t = xe.transition,
    r = I;
  try {
    if (((xe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (xe.transition = t), (O = n), !(O & 6) && hn();
  }
}
function Ti() {
  (me = Wn.current), A(Wn);
}
function xn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), qf(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((si(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          nt(), A(fe), A(le), yi();
          break;
        case 5:
          vi(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          A(U);
          break;
        case 19:
          A(U);
          break;
        case 10:
          di(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = cn(e.current, null)),
    (b = me = n),
    (G = 0),
    (Gt = null),
    (_i = dl = Tn = 0),
    (ae = zt = null),
    kn !== null)
  ) {
    for (n = 0; n < kn.length; n++)
      if (((t = kn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        t.pending = r;
      }
    kn = null;
  }
  return e;
}
function Ya(e, n) {
  do {
    var t = K;
    try {
      if ((fi(), (_r.current = Xr), Gr)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((Pn = 0),
        (Z = Y = B = null),
        (Tt = !1),
        (Qt = 0),
        (Ci.current = null),
        t === null || t.return === null)
      ) {
        (G = 1), (Gt = n), (K = null);
        break;
      }
      e: {
        var o = e,
          i = t.return,
          u = t,
          s = n;
        if (
          ((n = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Pu(i);
          if (g !== null) {
            (g.flags &= -257),
              Tu(g, i, u, o, n),
              g.mode & 1 && Nu(o, c, n),
              (n = g),
              (s = c);
            var S = n.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (n.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Nu(o, c, n), Li();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && u.mode & 1) {
          var j = Pu(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Tu(j, i, u, o, n),
              ai(tt(s, u));
            break e;
          }
        }
        (o = s = tt(s, u)),
          G !== 4 && (G = 2),
          zt === null ? (zt = [o]) : zt.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var f = za(o, s, n);
              Su(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(d))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var v = Ra(o, u, n);
                Su(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Za(t);
    } catch (E) {
      (n = E), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ga() {
  var e = Zr.current;
  return (Zr.current = Xr), e === null ? Xr : e;
}
function Li() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Tn & 268435455) && !(dl & 268435455)) || be(J, b);
}
function br(e, n) {
  var t = O;
  O |= 2;
  var r = Ga();
  (J !== e || b !== n) && ((Ue = null), xn(e, n));
  do
    try {
      xd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (!0);
  if ((fi(), (O = t), (Zr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function xd() {
  for (; K !== null; ) Xa(K);
}
function Cd() {
  for (; K !== null && !Gc(); ) Xa(K);
}
function Xa(e) {
  var n = qa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    n === null ? Za(e) : (K = n),
    (Ci.current = null);
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = yd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((t = vd(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  G === 0 && (G = 5);
}
function Sn(e, n, t) {
  var r = I,
    l = xe.transition;
  try {
    (xe.transition = null), (I = 1), _d(e, n, t, r);
  } finally {
    (xe.transition = l), (I = r);
  }
  return null;
}
function _d(e, n, t, r) {
  do Zn();
  while (nn !== null);
  if (O & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (lf(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      ba(Mr, function () {
        return Zn(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = xe.transition), (xe.transition = null);
    var i = I;
    I = 1;
    var u = O;
    (O |= 4),
      (Ci.current = null),
      Sd(e, t),
      Wa(t, e),
      Qf(yo),
      (Ar = !!vo),
      (yo = vo = null),
      (e.current = t),
      wd(t),
      Xc(),
      (O = u),
      (I = i),
      (xe.transition = o);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (nn = e), (qr = l)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    qc(t.stateNode),
    pe(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = jo), (jo = null), e);
  return (
    qr & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Fo ? Rt++ : ((Rt = 0), (Fo = e))) : (Rt = 0),
    hn(),
    null
  );
}
function Zn() {
  if (nn !== null) {
    var e = Ls(qr),
      n = xe.transition,
      t = I;
    try {
      if (((xe.transition = null), (I = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (qr = 0), O & 6)) throw Error(y(331));
        var l = O;
        for (O |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        g = h.return;
                      if (($a(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lt(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (k = d);
          else
            e: for (i = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, u);
                  }
                } catch (E) {
                  V(u, u.return, E);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((O = l), hn(), je && typeof je.onPostCommitFiberRoot == 'function')
        )
          try {
            je.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = t), (xe.transition = n);
    }
  }
  return !1;
}
function $u(e, n, t) {
  (n = tt(t, n)),
    (n = za(e, n, 1)),
    (e = un(e, n, 1)),
    (n = ie()),
    e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) $u(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        $u(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sn === null || !sn.has(r)))
        ) {
          (e = tt(t, e)),
            (e = Ra(n, e, 1)),
            (n = un(n, e, 1)),
            (e = ie()),
            n !== null && (Zt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Nd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ie()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Ni)
        ? xn(e, 0)
        : (_i |= t)),
    pe(e, n);
}
function Ja(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (n = 1));
  var t = ie();
  (e = Ke(e, n)), e !== null && (Zt(e, n, t), pe(e, t));
}
function Pd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function Td(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), hd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), F && n.flags & 1048576 && na(n, Hr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Pr(e, n), (e = n.pendingProps);
      var l = qn(n, le.current);
      Xn(n, t), (l = Si(null, n, r, e, l, t));
      var o = wi();
      return (
        (n.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((o = !0), $r(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            mi(n),
            (l.updater = al),
            (n.stateNode = l),
            (l._reactInternals = n),
            No(n, r, e, t),
            (n = Lo(null, n, r, !0, o, t)))
          : ((n.tag = 0), F && o && ui(n), oe(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Pr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = zd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = To(null, n, r, e, t);
            break e;
          case 1:
            n = Ru(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = zu(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        To(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Ru(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          oa(e, n),
          Kr(n, r, null, t);
        var i = n.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = tt(Error(y(423)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(y(424)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else
            for (
              he = on(n.stateNode.containerInfo.firstChild),
                ve = n,
                F = !0,
                ze = null,
                t = aa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((bn(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && xo(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        go(r, l) ? (i = null) : o !== null && go(r, o) && (n.flags |= 32),
        Ma(e, n),
        oe(e, n, i, t),
        n.child
      );
    case 6:
      return e === null && xo(n), null;
    case 13:
      return Aa(e, n, t);
    case 4:
      return (
        hi(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = et(n, null, r, t)) : oe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Lu(e, n, r, l, t)
      );
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (i = l.value),
          M(Wr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ie(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, t & -t)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= t),
                      (s = o.alternate),
                      s !== null && (s.lanes |= t),
                      Co(o.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= t),
                  (u = i.alternate),
                  u !== null && (u.lanes |= t),
                  Co(i, t, n),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Xn(n, t),
        (l = Ce(l)),
        (r = r(l)),
        (n.flags |= 1),
        oe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Te(r, n.pendingProps)),
        (l = Te(r.type, l)),
        zu(e, n, r, l, t)
      );
    case 15:
      return Oa(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Pr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), $r(n)) : (e = !1),
        Xn(n, t),
        ua(n, r, l),
        No(n, r, l, t),
        Lo(null, n, r, !0, e, t)
      );
    case 19:
      return ja(e, n, t);
    case 22:
      return Ia(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ba(e, n) {
  return _s(e, n);
}
function Ld(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, n, t, r) {
  return new Ld(e, n, t, r);
}
function zi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zd(e) {
  if (typeof e == 'function') return zi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xo)) return 11;
    if (e === Zo) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ee(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function zr(e, n, t, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) zi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Mn:
        return Cn(t.children, l, o, n);
      case Go:
        (i = 8), (l |= 8);
        break;
      case Xl:
        return (
          (e = Ee(12, t, n, l | 2)), (e.elementType = Xl), (e.lanes = o), e
        );
      case Zl:
        return (e = Ee(13, t, n, l)), (e.elementType = Zl), (e.lanes = o), e;
      case Jl:
        return (e = Ee(19, t, n, l)), (e.elementType = Jl), (e.lanes = o), e;
      case ss:
        return pl(t, l, o, n);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case is:
              i = 10;
              break e;
            case us:
              i = 9;
              break e;
            case Xo:
              i = 11;
              break e;
            case Zo:
              i = 14;
              break e;
            case Ze:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (n = Ee(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Cn(e, n, t, r) {
  return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function pl(e, n, t, r) {
  return (
    (e = Ee(22, e, r, n)),
    (e.elementType = ss),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ql(e, n, t) {
  return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Kl(e, n, t) {
  return (
    (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Rd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ri(e, n, t, r, l, o, i, u, s) {
  return (
    (e = new Rd(e, n, t, u, s)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Ee(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mi(o),
    e
  );
}
function Od(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ec(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return bs(e, t, n);
  }
  return n;
}
function nc(e, n, t, r, l, o, i, u, s) {
  return (
    (e = Ri(t, r, !0, e, l, o, i, u, s)),
    (e.context = ec(null)),
    (t = e.current),
    (r = ie()),
    (l = an(t)),
    (o = He(r, l)),
    (o.callback = n ?? null),
    un(t, o, l),
    (e.current.lanes = l),
    Zt(e, l, r),
    pe(e, r),
    e
  );
}
function ml(e, n, t, r) {
  var l = n.current,
    o = ie(),
    i = an(l);
  return (
    (t = ec(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(o, i)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(l, n, i)),
    e !== null && (Oe(e, l, i, o), Cr(e, l, i)),
    i
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Oi(e, n) {
  Vu(e, n), (e = e.alternate) && Vu(e, n);
}
function Id() {
  return null;
}
var tc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ii(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ii.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  ml(e, n, null, null);
};
hl.prototype.unmount = Ii.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function () {
      ml(null, e, null, null);
    }),
      (n[Qe] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Os();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
    qe.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Mi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Hu() {}
function Md(e, n, t, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = el(i);
        o.call(c);
      };
    }
    var i = nc(n, r, e, 0, null, !1, !1, '', Hu);
    return (
      (e._reactRootContainer = i),
      (e[Qe] = i.current),
      Bt(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Ri(e, 0, !1, null, null, !1, !1, '', Hu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Bt(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      ml(n, s, t, r);
    }),
    s
  );
}
function yl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = el(i);
        u.call(s);
      };
    }
    ml(n, i, e, l);
  } else i = Md(t, n, e, l, r);
  return el(i);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (bo(n, t | 1), pe(n, Q()), !(O & 6) && ((rt = Q() + 500), hn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }),
        Oi(e, 1);
  }
};
ei = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = ie();
      Oe(n, e, 134217728, t);
    }
    Oi(e, 134217728);
  }
};
Rs = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = ie();
      Oe(t, e, n, r);
    }
    Oi(e, n);
  }
};
Os = function () {
  return I;
};
Is = function (e, n) {
  var t = I;
  try {
    return (I = e), n();
  } finally {
    I = t;
  }
};
uo = function (e, n, t) {
  switch (n) {
    case 'input':
      if ((eo(e, t), (n = t.name), t.type === 'radio' && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]',
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l) throw Error(y(90));
            cs(r), eo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ds(e, t);
      break;
    case 'select':
      (n = t.value), n != null && Qn(e, !!t.multiple, n, !1);
  }
};
Ss = Pi;
ws = Ln;
var Dd = { usingClientEntryPoint: !1, Events: [qt, Fn, ul, ys, gs, Pi] },
  vt = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Ad = {
    bundleType: vt.bundleType,
    version: vt.version,
    rendererPackageName: vt.rendererPackageName,
    rendererConfig: vt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vt.findFiberByHostInstance || Id,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (rl = gr.inject(Ad)), (je = gr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
ge.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(n)) throw Error(y(200));
  return Od(e, n, null, t);
};
ge.createRoot = function (e, n) {
  if (!Mi(e)) throw Error(y(299));
  var t = !1,
    r = '',
    l = tc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Ri(e, 1, !1, null, null, t, !1, r, l)),
    (e[Qe] = n.current),
    Bt(e.nodeType === 8 ? e.parentNode : e),
    new Ii(n)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = xs(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Ln(e);
};
ge.hydrate = function (e, n, t) {
  if (!vl(n)) throw Error(y(200));
  return yl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
  if (!Mi(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = '',
    i = tc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (n = nc(n, null, e, 1, t ?? null, l, !1, o, i)),
    (e[Qe] = n.current),
    Bt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new hl(n);
};
ge.render = function (e, n, t) {
  if (!vl(n)) throw Error(y(200));
  return yl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Ln(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Pi;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!vl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, n, t, !1, r);
};
ge.version = '18.2.0-next-9e3b772b8-20220608';
function rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), (ns.exports = ge);
var jd = ns.exports,
  Wu = jd;
(Yl.createRoot = Wu.createRoot), (Yl.hydrateRoot = Wu.hydrateRoot);
const Fd = ({ onClick: e }) =>
    L.jsx('button', {
      onClick: e,
      className: 'p-4 border-2 border-black rounded bg-blue-100',
      children: 'ランダムで歌える曲を選ぶ',
    }),
  Ud = ({ resultText: e }) => L.jsx('div', { className: 'mb-4', children: e }),
  yt = ({ data: e }) => {
    const [n, t] = tl.useState('下のボタンを押してね'),
      r = () => (t(e[Math.floor(Math.random() * e.length)]), n);
    return L.jsxs('div', {
      className: 'text-base',
      children: [L.jsx(Ud, { resultText: n }), L.jsx(Fd, { onClick: r })],
    });
  },
  gt = ({ children: e }) =>
    L.jsx('h1', {
      className: 'text-xl mb-4 border-b-2 border-black',
      children: e,
    }),
  lc = [
    'アマカミサマ（名取さなさん）',
    '人類みなセンパイ！（アズマリムさん）',
    'アイドル活動！ / わか・ふうり・すなお from STAR☆ANIS（アイカツ！）',
    'Wake up my music / りさ・えいみ（アイカツ！）',
    'START DASH SENSATION / るか・もな・みき from AIKATSU☆STARS!（アイカツ！）',
    'fashion check! / STAR☆ANIS（アイカツ！）',
    'MY STARWAY / わか・ふうり・ゆな（アイカツ！ 10th STORY ～未来へのSTARWAY～）',
    'TRAVEL RIBBON / るか・りえ・みき（アイカツ！ 10th STORY ～未来へのSTARWAY～）',
    'アイカツ☆ステップ / AIKATSU☆STARS!（アイカツスターズ！）',
    'スタートライン! / AIKATSU☆STARS!（アイカツスターズ！）',
    'スタージェット！ / AIKATSU☆STARS!（アイカツスターズ！）',
    'STARDOM! / AIKATSU☆STARS!（アイカツスターズ！）',
    'MUSIC of DREAM!!! / AIKATSU☆STARS!（アイカツスターズ！）',
    'Inner Voice / るり・明咲 from STARRY PLANET（アイカツプラネット！）',
    'ショコラショー・タイム / ふうり from AIKATSU☆STARS!（フォトカツ！）',
    'ドラマチックガール / STAR☆ANIS, AIKATSU☆STARS！（フォトカツ！',
    'Shiny day / アイカツ8',
    '1等星のプロキオン / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    '劇場のゴースト / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    '99 Illusion! / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    'Star Diamond / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    '星のダイアローグ / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    'よろしく九九組 / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    '舞台少女心得 / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    'Star Divine / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    'Circle of the Revue / スタァライト九九組（少女☆歌劇 レヴュースタァライト）',
    'プリパラOPメドレー / i☆Ris（麻倉由衣さんの音源です）',
    'バラライカ / 月島 きらり starring 久住 小春（きらりんレボリューション）',
    '僕らは青空になる / 777☆SISTERS（ナナシス/Tokyo 7th シスターズ）',
    'FUNBARE☆RUNNER / 777☆SISTERS（ナナシス/Tokyo 7th シスターズ）',
    'Lucky☆Lucky / 4U（ナナシス/Tokyo 7th シスターズ）',
    'SEVENTH HAVEN / セブンスシスターズ（ナナシス/Tokyo 7th シスターズ）',
    '-Zero / KARAKURI （ナナシス/Tokyo 7th シスターズ）',
    'プリキュア5、スマイル go go! / 工藤真由（Yes！プリキュア5）',
    'Alright!ハートキャッチプリキュア! / 池田彩（ハートキャッチプリキュア）',
    "Let's go!スマイルプリキュア! / 池田彩（スマイルプリキュア！）",
    'SHINE!! キラキラ☆プリキュアアラモード  / 駒形友梨（キラキラ☆プリキュアアラモード）',
    'Dokkin◇魔法つかいプリキュア！ / 北川理恵（魔法つかいプリキュア）',
    '魔法アラ・ドーモ! / キュアミラクル,キュアマジカル / （魔法つかいプリキュア）',
    'イェイ!イェイ!イェイ! / 吉田仁美（スマイルプリキュア）',
    'プリキュア5、フル・スロットルGO GO! / 工藤真由（Yes!プリキュア5GoGo！）',
    '恋はア・ラ・モード / 東京ミュウミュウ（東京ミュウミュウ）',
    'ハッピー・ジャムジャム（しまじろう）',
    'めざせポケモンマスター（ポケモン）',
    'Together（ポケモン）',
    'ハム太郎のとっとこうた（ハム太郎）',
    'おジャ魔女カーニバル!! / MAHO堂（おジャ魔女どれみ）',
    'Super Driver / 平野綾（涼宮ハルヒの憂鬱）',
    'ハレ晴レユカイ / 平野綾、茅原実里、後藤邑子（涼宮ハルヒの憂鬱）',
    '雪、無音、窓辺にて。 / 長門有希（涼宮ハルヒの憂鬱）',
    '冒険でしょでしょ？ / 平野綾（涼宮ハルヒの憂鬱）',
    '聖少女領域 / ALI PROJECT（ローゼンメイデン）',
    'オトメロディー / 高橋美佳子（おねがいマイメロディ）',
    'ハイタッチ☆メモリー / 小倉唯（ヴァンガード）',
    'Honey♥Come!! / 小倉唯（城下町のダンデライオン）',
    '回レ! 雪月花 / 歌組雪月花（機巧少女は傷つかない）',
    '人生イージー？ / DIALOGUE+（弱キャラ友崎くん）',
    'はじめてのかくめい！ / DIALOGUE+（超人高校生たちは異世界でも余裕で生き抜くようです！）',
    'アイガッテ♡ランテ / DIALOGUE+',
    "Daydream Café / Petit Rabbit's（ご注文はうさぎですか？）",
    'マジックナンバー / 坂本真綾（こばと）',
    'ぼなぺてぃーと♡S / ブレンド • A（ブレンド・S）',
    '寝・逃・げでリセット！ / 柊つかさ（らき☆すた）',
    'もってけ！セーラーふく / 平野綾, 加藤英美里, 福原香織, 遠藤綾（らき☆すた）',
    'Alchemy / Girls Dead Monster（Angel Beats!）',
    'My Soul, Your Beats! / Lia（Angel Beats!）',
    'DISCOTHEQUE / 水樹奈々（ロザリオとバンパイア）',
    'プレパレード / 逢坂大河・櫛枝実乃梨・川嶋亜美（とらドラ!）',
    '青空のラプソディ / fhána（メイドラゴン）',
    '愛のシュプリーム！ / fhána（メイドラゴン）',
    'とまどい→レシピ / みかくにんぐッ!（未確認で進行形）',
    "ETERNAL BLAZE / 水樹奈々（魔法少女リリカルなのはA's）",
    'only my railgun / fripSide（とある科学の超電磁砲）',
    'SHOOT! / RO-KYU-BU!（ロウきゅーぶ!）',
    '7 Girls War / Wake Up, Girls!',
    'タチアガレ！ / Wake Up, Girls!',
    '恋？で愛？で暴君です！ / Wake Up, Girls!（恋愛暴君）',
    'オオカミとピアノ / 山下七海（Wake Up, Girls!）',
    '灼熱スイッチ / 雀が原中学卓球部（灼熱の卓球娘）',
    'PUNCH☆MIND☆HAPPINESS / Happy Clover（あんハピ）',
    '君じゃなきゃダメみたい / オーイシマサヨシ（月刊少女野崎くん）',
    'Love marginal / Printemps（ラブライブ）',
    "Snow halation / μ's（ラブライブ）",
    "No brand girls / μ's（ラブライブ）",
    "僕らのLIVE 君とのLIFE / μ's（ラブライブ）",
    "Wonderful Rush / μ's（ラブライブ）",
    '恋になりたいAQUARIUM / Aqours（ラブライブ サンシャイン）',
    'プラチナ / 坂本真綾（カードキャプターさくら）',
    'Catch You Catch Me / グミ（カードキャプターさくら）',
    '花ハ踊レヤいろはにほ / チーム“ハナヤマタ”（ハナヤマタ）',
    '？でわっしょい（ひだまりスケッチ）',
    'GO!GO!MANIAC / 放課後ティータイム（けいおん）',
    `Don't say "lazy" / 桜高軽音部（けいおん）`,
    '空色デイズ / 中川翔子（グレンラガン）',
    'ファッとして桃源郷 / 新庄かなえ（てーきゅう）',
    'メニメニマニマニ / 高宮なすの（てーきゅう）',
    '君の知らない物語 / supercell（化物語）',
    '名前のない怪物 / EGOIST（PSYCHO-PASS）',
    'トライアングラー / 坂本真綾（マクロスF）',
    '星間飛行 / ランカ・リー=中島愛（マクロスF）',
    'アナタノオト / ランカ・リー=中島愛（マクロスF）',
    "インフィニティ / シェリル・ノーム starring May'n（マクロスF）",
    '一度だけの恋なら / ワルキューレ（マクロスΔ）',
    '不確定性☆Cosmic Movement / ワルキューレ（マクロスΔ）',
    'pray / Tommy heavenly6（銀魂）',
    "GIRLS' LEGEND U（ウマ娘）",
    'コネクト / ClariS（魔法少女まどか☆マギカ）',
    'シュガーソングとビターステップ / UNISON SQUARE GARDEN（血界戦線）',
    '秘密の扉から会いにきて / 田村ゆかり（のうりん）',
    'fancy baby doll / 田村ゆかり',
    '童話迷宮 / 田村ゆかり（おとぎ銃士 赤ずきん）',
    'This game / 鈴木このみ（ノゲノラ）',
    '檄!帝国華撃団 / 真宮寺さくら＆帝国歌撃団（サクラ大戦）',
    'motto☆派手にね! / 戸松 遥（かんなぎ）',
    'again / YUI（ハガレン）',
    'ヴィーナスとジーザス / やくしまるえつこ（荒川アンダー ザ ブリッジ）',
    '鳥の詩 / Lia（AIR）',
    '輪舞-revolution-（少女革命ウテナ）',
    'リフレクティア / eufonius（true tears）',
    'The Sun, Moon and Stars / 星見プロダクション（IDOLY PRIDE）',
    '割れたリンゴ（新世界より）',
    '創傷イノセンス / 内田真礼（悪魔のリドル）',
    'ギミー！レボリューション / 内田真礼（俺ツイ）',
    'おねだりShall We～? / 前川みく （デレマス）',
    '撲殺天使ドクロちゃん',
    'Go!!! / FLOW（NARUTO）',
    'はっぴぃ にゅう にゃあ / （迷い猫オーバーラン!）',
    '徒花ネクロマンシー / フランシュシュ（ゾンビランドサガ）',
    'アイドル / YOASOBI（【推しの子】）',
    'ようこそジャパリパークへ / どうぶつビスケッツ×PPP（けものフレンズ）',
    '正解はひとつ!じゃない!! / （ミルキィホームズ）',
    'ぺこらんだむぶれいん! / 兎田ぺこら（ホロライブ）',
    "I'm Your Treasure Box ＊あなたは マリンせんちょうを たからばこからみつけた。 / 宝鐘マリン（ホロライブ）",
    'ハム太郎とっとこうた / ハムちゃんず（とっとこハム太郎）',
    'スーパーウルトラハイパーミラクルロマンチック / 敷島魅零, 処女まもり（ヴァルキリードライヴマーメイド）',
  ],
  oc = [
    'ダーリンダンス / かいりきベア',
    'おねがいダーリン / ナナホシ管弦楽団',
    '投資家レコーズ / TOKOTOKO(西沢さんP)',
    'ハッピーシンセサイザ / EasyPop',
    'いーあるふぁんくらぶ / みきとP',
    '恋愛裁判 / 40mP',
    'Sweetiex2 / Dixie Flatline',
    '脱法ロック / Neru',
    '携帯恋話 / まふまふ',
    'ワーワーワールド / Giga, Mitchie M',
    'Ready Steady / Giga',
    '劣等上等 / Giga',
    'トンデモワンダーズ / sasakure.UK',
    '深海のリトルクライ / sasakure.UK',
    'ハロー、プラネット。 / sasakure.UK',
    'スイートマジック / Junky',
    'ビバハピ / Mitchie M',
    'モザイクロール / DECO*27',
    'トリノコシティ / 40mP',
    'キリトリセン / 40mP',
    'マーシャル・マキシマイザー / 柊マグネタイト',
    'マーメイド / 10日P',
    'セツナトリップ / Last Note.',
    'おちゃめ機能 / ラマーズP',
    'FREELY TOMORROW / Mitchie M',
    'ドーナツホール / ハチ',
    'きゅうくらりん / いよわ',
  ],
  ic = [
    'Yeah!めっちゃホリディ / 松浦 亜弥',
    '都会っ子 純情 / ℃-ute',
    'Kiss me 愛してる / ℃-ute',
    '夢見る 15歳 / スマイレージ',
    '初恋サイダー / Buono!',
    'ザ☆ピ～ス! / モーニング娘。',
    '青春バスガイド / Berryz工房（イナズマイレブン）',
    '本気ボンバー!! / Berryz工房（イナズマイレブン）',
    'ミニモニ。ジャンケンぴょん! / ミニモニ。',
    'New Stranger / sora tob sakana（ハイスコアガール）',
    '魔法の言葉 / sora tob sakana',
    '星が瞬く夜に / BiSH',
    'イジメ、ダメ、ゼッタイ / BABYMETAL',
    'Doki Doki ☆ Morning / BABYMETAL',
    'KARATE / BABYMETAL',
    '完璧ぐ～のね / 渡り廊下走り隊',
    'Baby! Baby! Baby! / AKB48',
    '1!2!3!4! ヨロシク! / SKE48',
    'ごめんね、SUMMER / SKE48',
    'サイレントマジョリティー / 欅坂46',
    '誰よりも高く跳べ! / けやき坂46(日向坂46)',
    'ミライボウル / ももいろクローバー',
    'シスター / フィロソフィーのダンス',
    'ダンス・ファウンダー / フィロソフィーのダンス',
    '水生 / CYNHN',
    'moreきゅん奴隷 / 戦慄かなの',
    'チュープリ / ZOC',
    'すきっ！ / ときめき♡宣伝部',
    'しゅきぴ / =LOVE',
    'グリズリーに襲われたら♡/神宿',
    'わたしの一番かわいいところ / FRUITS ZIPPER',
    'キミだけのワンダーランド / 天晴れ！原宿/Appare!',
    '全力バタンキュー / A応P（おそ松さん）',
    'はなまるぴっぴはよいこだけ / A応P（おそ松さん）',
    '天国のキッス / 松田聖子',
    'だいしきゅーだしゅき / femme fatale',
    'DITTO / New Jeans',
    'Girl Front / LOONA',
    'Hi High / LOONA',
    'ELEVEN / IVE',
    'Zero Gravity / Perfume',
    'スウィートドーナッツ / Perfume',
    'OMG / newjeans',
    'だいしきゅーだいしゅき / Femme fatale',
    'ヒアルロンリーガール / METAMUSE',
  ],
  uc = [
    'ときめきブローカー / P丸様。',
    'シル・ヴ・プレジデント / P丸様。',
    '女の子になりたい / まふまふ（と田中秀和）',
    '気まぐれロマンティック / いきものがかり',
    'キラキラ / aiko',
    'アンドロメダ / aiko',
    'milk / aiko',
    '花火 / aiko',
    '「ぴえん」の歌',
    'INTERNET OVERDOSE / Aiobahn feat. KOTOKO',
    'エビカニクス / ケロポンズ',
    'ダダダダ天使 / ナナヲアカリ',
    '風になる / つじあやの',
    'RALLY / Cymbals',
    '小学館 / 相対性理論',
    '人工衛星 / 相対性理論',
    '気になるあの娘 / 相対性理論',
    'チャイナアドバイス / 相対性理論',
    '地獄先生 / 相対性理論',
    'スマトラ警備隊 / 相対性理論',
  ],
  sc = [];
sc.push(...lc, ...oc, ...ic, ...uc);
const Bd = () =>
  L.jsxs(L.Fragment, {
    children: [
      L.jsxs('main', {
        className: 'mt-4 mx-2 mb-12',
        children: [
          L.jsxs('section', {
            className: 'mb-12 mx-auto max-w-3xl',
            children: [
              L.jsx(gt, { children: '全ての中から1つを選ぶ' }),
              L.jsx(yt, { data: sc }),
            ],
          }),
          L.jsxs('section', {
            className: 'mb-12 mx-auto max-w-3xl',
            children: [
              L.jsx(gt, {
                children: 'アニメ・声優さん・Vさん・インターネット活動者の曲',
              }),
              L.jsx(yt, { data: lc }),
            ],
          }),
          L.jsxs('section', {
            className: 'mb-12 mx-auto max-w-3xl',
            children: [
              L.jsx(gt, { children: 'ボカロP、UTAU、CeVIO曲' }),
              L.jsx(yt, { data: oc }),
            ],
          }),
          L.jsxs('section', {
            className: 'mb-12 mx-auto max-w-3xl',
            children: [
              L.jsx(gt, { children: 'アイドル曲' }),
              L.jsx(yt, { data: ic }),
            ],
          }),
          L.jsxs('section', {
            className: 'mb-12 mx-auto max-w-3xl',
            children: [
              L.jsx(gt, { children: 'ほかインターネットの曲とかJPOPとか' }),
              L.jsx(yt, { data: uc }),
            ],
          }),
          L.jsx('section', {
            className: 'mx-auto max-w-5xl',
            children: L.jsx('p', {
              className: 'text-center text-xs',
              children: '最終確認・更新日:2023/12/19',
            }),
          }),
        ],
      }),
      L.jsxs('footer', {
        className: 'text-center text-xs py-4 bg-gray-600 text-white',
        children: [
          L.jsxs('ul', {
            className: 'flex justify-center items-center mb-4',
            children: [
              L.jsx('li', {
                className: 'w-8 h-auto mr-2',
                children: L.jsx('a', {
                  href: 'https://github.com/Shikigami01/tenbinUtawakuRamdomSongMaker',
                  className: 'w-full h-auto',
                  children: L.jsx('img', {
                    src: '/images/icon_github.svg',
                    alt: 'このプロジェクトのgithub',
                    className: 'block w-full h-auto',
                  }),
                }),
              }),
              L.jsx('li', {
                className: 'w-8 h-auto ml-2',
                children: L.jsx('a', {
                  href: 'https://twitter.com/HouraijiN',
                  className: 'w-full h-auto',
                  children: L.jsx('img', {
                    src: '/images/icon_twitter.svg',
                    alt: '敷き紙のtwitter',
                    className: 'block w-full h-auto',
                  }),
                }),
              }),
            ],
          }),
          L.jsx('p', { children: '© 2023 敷き紙' }),
        ],
      }),
    ],
  });
Yl.createRoot(document.getElementById('root')).render(
  L.jsx(Nc.StrictMode, { children: L.jsx(Bd, {}) }),
);
