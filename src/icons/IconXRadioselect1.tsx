// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import t from 'react';
import { Svg as r, Path as l } from 'react-native-svg';
export default function (n) {
  var i = n.color,
    a = void 0 === i ? 'none' : i,
    m = n.size,
    s = void 0 === m ? '24' : m,
    C = n.fillColor,
    c = void 0 === C ? 'none' : C,
    f = e(n, ['color', 'size', 'fillColor']);
  return t.createElement(
    r,
    o(
      {
        width: s,
        height: s,
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      f
    ),
    t.createElement(l, {
      d: 'M1.45455 11C1.45455 5.72819 5.72819 1.45455 11 1.45455C16.2718 1.45455 20.5455 5.72819 20.5455 11C20.5455 16.2718 16.2718 20.5455 11 20.5455C5.72819 20.5455 1.45455 16.2718 1.45455 11Z',
      fill: String(('none' !== c && c) || '#F56A00'),
    }),
    t.createElement(l, {
      d: 'M1.45455 11C1.45455 5.72819 5.72819 1.45455 11 1.45455C16.2718 1.45455 20.5455 5.72819 20.5455 11C20.5455 16.2718 16.2718 20.5455 11 20.5455C5.72819 20.5455 1.45455 16.2718 1.45455 11Z',
      stroke: String(('none' !== a && a) || '#F56A00'),
      strokeWidth: '0.909091',
    }),
    t.createElement(l, {
      d: 'M15.6325 7.59375L17.0337 8.89113L10.4772 14.7433C9.95857 15.2062 9.12761 15.2062 8.60896 14.7433L4.96582 11.4915L6.36701 10.1941L9.54308 13.0285L15.6325 7.59375Z',
      fill: String(('none' !== c && c) || 'white'),
    })
  );
}
