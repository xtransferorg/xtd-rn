// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as i } from 'react-native-svg';
export default function (n) {
  var l = n.color,
    a = void 0 === l ? 'none' : l,
    s = n.size,
    c = void 0 === s ? '24' : s,
    m = n.fillColor,
    d = void 0 === m ? 'none' : m,
    f = e(n, ['color', 'size', 'fillColor']);
  return r.createElement(
    t,
    o(
      {
        width: c,
        height: c,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      f
    ),
    r.createElement(i, {
      fill: String(('none' !== d && d) || 'white'),
      d: 'M0 0H24V24H0z',
    }),
    r.createElement(i, {
      d: 'M12 13.125 12 16.25M9 2.39062H15M18.8162 4.79688H5.19071C4.79645 4.79688 4.55729 5.23188 4.76854 5.56477L7.98443 10.6326C7.9946 10.6486 8 10.6672 8 10.6862V21.1094C8 21.3855 8.22386 21.6094 8.5 21.6094H15.6751C15.9512 21.6094 16.1751 21.3855 16.1751 21.1094V10.834C16.1751 10.8162 16.1798 10.7988 16.1887 10.7835L19.2478 5.54916C19.4426 5.21584 19.2022 4.79688 18.8162 4.79688Z',
      stroke: String(('none' !== a && a) || '#181721'),
      strokeWidth: '1.5',
      strokeLinecap: 'round',
    })
  );
}
