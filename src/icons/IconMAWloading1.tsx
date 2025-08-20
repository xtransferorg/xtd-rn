// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    C = void 0 === n ? '24' : n,
    a = t.fillColor,
    f = void 0 === a ? 'none' : a,
    c = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: C,
        height: C,
        viewBox: '0 0 40 40',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M17 3C17 1.34315 18.3431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 15.6063 1.42029 11.5355 3.82608 8.23343C4.80173 6.8943 6.67823 6.59964 8.01736 7.57528C9.3565 8.55093 9.65116 10.4274 8.67551 11.7666C6.99229 14.0769 6 16.9182 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6C18.3431 6 17 4.65685 17 3Z',
      fill: String(('none' !== f && f) || 'white'),
    })
  );
}
