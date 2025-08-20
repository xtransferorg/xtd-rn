// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Rect as i, Path as n } from 'react-native-svg';
export default function (l) {
  var a = l.color,
    s = void 0 === a ? 'none' : a,
    h = l.size,
    m = void 0 === h ? '24' : h,
    c = l.fillColor,
    d = void 0 === c ? 'none' : c,
    g = e(l, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    t(
      {
        width: m,
        height: m,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      g
    ),
    o.createElement(i, {
      x: '0.7',
      y: '4.3001',
      width: '22.6',
      height: '15.4',
      rx: '1.7',
      stroke: String(('none' !== s && s) || '#181721'),
      strokeWidth: '1.4',
    }),
    o.createElement(n, {
      fill: String(('none' !== d && d) || '#181721'),
      d: 'M6 13.2002H18V14.600200000000001H6zM6 16.2002H18V17.600199999999997H6z',
    }),
    o.createElement(i, {
      x: '10.2996',
      y: '7.3001',
      width: '3.4',
      height: '3.4',
      rx: '1.7',
      stroke: String(('none' !== s && s) || '#181721'),
      strokeWidth: '1.4',
    })
  );
}
