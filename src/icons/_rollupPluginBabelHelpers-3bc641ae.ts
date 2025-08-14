// @ts-nocheck
function r() {
  return (
    (r =
      Object.assign ||
      function (r) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        }
        return r;
      }),
    r.apply(this, arguments)
  );
}
function t(r: any, t: any) {
  if (null == r) return {};
  var e,
    n,
    o = (function (r: any, t: any) {
      if (null == r) return {};
      var e,
        n,
        o: any = {},
        a = Object.keys(r);
      for (n = 0; n < a.length; n++)
        (e = a[n]), t.indexOf(e) >= 0 || (o[e] = r[e]);
      return o;
    })(r, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++)
      (e = a[n]),
        t.indexOf(e) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(r, e) && (o[e] = r[e]));
  }
  return o;
}
export { t as _, r as a };
