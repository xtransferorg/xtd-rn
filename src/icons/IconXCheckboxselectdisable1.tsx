// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as l } from 'react-native-svg';
export default function (n) {
  var i = n.color,
    a = void 0 === i ? 'none' : i,
    s = n.size,
    f = void 0 === s ? '24' : s,
    m = n.fillColor,
    c = void 0 === m ? 'none' : m,
    C = e(n, ['color', 'size', 'fillColor']);
  return r.createElement(
    t,
    o(
      {
        width: f,
        height: f,
        viewBox: '0 0 20 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      C
    ),
    r.createElement(l, {
      d: 'M1 5C1 3.34315 2.34315 2 4 2H16.0001C17.657 2 19.0001 3.34315 19.0001 5V17.0001C19.0001 18.657 17.657 20.0001 16.0001 20.0001H4C2.34315 20.0001 1 18.657 1 17.0001V5Z',
      fill: String(('none' !== c && c) || '#F5F5F7'),
      stroke: String(('none' !== a && a) || '#B3B2C2'),
      strokeWidth: '2',
    }),
    r.createElement(l, {
      d: 'M14.6325 6.95312L16.0337 8.38024L9.47722 14.8176C8.95857 15.3268 8.12761 15.3268 7.60896 14.8176L3.96582 11.2406L5.36701 9.81353L8.54308 12.9313L14.6325 6.95312Z',
      fill: String(('none' !== c && c) || '#B3B2C2'),
    })
  );
}
