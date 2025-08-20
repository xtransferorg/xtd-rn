// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import t from 'react';
import { Svg as r, Path as l } from 'react-native-svg';
export default function (n) {
  var i = n.color,
    C = void 0 === i ? 'none' : i,
    a = n.size,
    m = void 0 === a ? '24' : a,
    s = n.fillColor,
    c = void 0 === s ? 'none' : s,
    f = e(n, ['color', 'size', 'fillColor']);
  return t.createElement(
    r,
    o(
      {
        width: m,
        height: m,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      f
    ),
    t.createElement(l, {
      d: 'M6.53906 5.14697C6.53906 3.49012 7.88221 2.14697 9.53906 2.14697H30.54L41.1004 15.0115V42.9492C41.1004 44.6061 39.7573 45.9492 38.1004 45.9492H9.53906C7.88221 45.9492 6.53906 44.6061 6.53906 42.9492V5.14697Z',
      fill: String(('none' !== c && c) || '#F04853'),
    }),
    t.createElement(l, {
      d: 'M20.823 21.9084C21.0968 23.1131 22.1647 25.3808 24.1818 27.0351C26.5059 28.9411 29.8586 30.1476 30.8996 29.8637C32.8443 29.3333 31.9604 26.9172 30.1925 27.0351C28.5392 27.1454 23.7742 28.8026 17.6407 32.1618C17.2156 32.3947 16.2264 33.0458 15.5193 33.7529C14.8122 34.46 14.4234 36.8996 17.1105 36.0511C20.4694 34.9904 24.8374 23.6983 23.6515 20.1406C23.1211 18.5495 21.4567 18.8717 20.9997 19.6102C20.5427 20.3488 20.6741 21.436 20.823 21.9084Z',
      stroke: String(('none' !== C && C) || 'white'),
      strokeWidth: '1.7',
    }),
    t.createElement(l, {
      d: 'M32.0761 15.011C31.2278 15.011 30.54 14.3233 30.54 13.4749V2.14648L41.1005 15.011H32.0761Z',
      fill: String(('none' !== c && c) || '#9E182A'),
    })
  );
}
