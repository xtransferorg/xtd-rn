// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    a = void 0 === n ? '24' : n,
    f = t.fillColor,
    c = void 0 === f ? 'none' : f,
    d = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: a,
        height: a,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      d
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M1.33301 6.6665H3.99967V9.33317H1.33301V6.6665ZM6.66634 6.6665H9.33301V9.33317H6.66634V6.6665ZM11.9997 6.6665H14.6663V9.33317H11.9997V6.6665Z',
      fill: String(('none' !== c && c) || '#181721'),
    })
  );
}
