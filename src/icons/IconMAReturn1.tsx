// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    s = e(i, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      s
    ),
    r.createElement(t, {
      d: 'M16.6273 20.1056C14.4576 22.2564 14.4576 25.7436 16.6273 27.8944L30.4133 41.5601C31.005 42.1466 31.9644 42.1466 32.5562 41.5601C33.1479 40.9735 33.1479 40.0224 32.5562 39.4359L18.7702 25.7702C17.784 24.7925 17.784 23.2075 18.7702 22.2298L32.5562 8.56414C33.1479 7.97756 33.1479 7.02652 32.5562 6.43994C31.9644 5.85335 31.005 5.85335 30.4133 6.43994L16.6273 20.1056Z',
      fill: String(('none' !== m && m) || '#222222'),
    })
  );
}
