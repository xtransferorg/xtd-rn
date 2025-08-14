// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as i } from 'react-native-svg';
export default function (l) {
  var n = l.color,
    a = void 0 === n ? 'none' : n,
    s = l.size,
    f = void 0 === s ? '24' : s,
    m = l.fillColor,
    c = void 0 === m ? 'none' : m,
    d = e(l, ['color', 'size', 'fillColor']);
  return r.createElement(
    t,
    o(
      {
        width: f,
        height: f,
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      d
    ),
    r.createElement(i, {
      d: 'M1.45455 5C1.45455 3.0419 3.0419 1.45455 5 1.45455H17C18.9581 1.45455 20.5455 3.0419 20.5455 5V17C20.5455 18.9581 18.9581 20.5455 17 20.5455H5C3.0419 20.5455 1.45455 18.9581 1.45455 17V5Z',
      fill: String(('none' !== c && c) || '#F56A00'),
      stroke: String(('none' !== a && a) || '#F56A00'),
      strokeWidth: '0.909091',
    }),
    r.createElement(i, {
      d: 'M16.0956 6.95312L17.637 8.38024L10.4248 14.8176C9.85433 15.3268 8.94028 15.3268 8.36976 14.8176L4.3623 11.2406L5.90362 9.81353L9.39729 12.9313L16.0956 6.95312Z',
      fill: String(('none' !== c && c) || 'white'),
    })
  );
}
