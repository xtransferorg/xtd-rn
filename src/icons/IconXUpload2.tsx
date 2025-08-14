// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as i, Path as r } from 'react-native-svg';
export default function (n) {
  n.color;
  var t = n.size,
    d = void 0 === t ? '24' : t,
    a = n.fillColor,
    f = void 0 === a ? 'none' : a,
    c = e(n, ['color', 'size', 'fillColor']);
  return o.createElement(
    i,
    l(
      {
        width: d,
        height: d,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(r, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M12.8996 7.10001L12.8996 21.9L11.0996 21.9L11.0996 7.10001L12.8996 7.10001Z',
      fill: String(('none' !== f && f) || '#181721'),
    }),
    o.createElement(r, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M11.3639 6.36355C11.7154 6.01208 12.2853 6.01208 12.6367 6.36355L19.2731 12.9999 18.0003 14.2727 12.0003 8.27274 6.00033 14.2727 4.72754 12.9999 11.3639 6.36355ZM5.09961 2.10001H18.8996V3.90001H5.09961V2.10001Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
