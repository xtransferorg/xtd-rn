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
      d: 'M0.454545 11C0.454545 5.72819 4.72819 1.45455 10 1.45455C15.2718 1.45455 19.5455 5.72819 19.5455 11C19.5455 16.2718 15.2718 20.5455 10 20.5455C4.72819 20.5455 0.454545 16.2718 0.454545 11Z',
      fill: String(('none' !== c && c) || '#B3B2C2'),
      stroke: String(('none' !== a && a) || '#B3B2C2'),
      strokeWidth: '0.909091',
    }),
    r.createElement(l, {
      d: 'M14.6325 6.95312L16.0337 8.38024L9.47722 14.8176C8.95857 15.3268 8.12761 15.3268 7.60896 14.8176L3.96582 11.2406L5.36701 9.81353L8.54308 12.9313L14.6325 6.95312Z',
      fill: String(('none' !== c && c) || '#F5F5F7'),
    })
  );
}
