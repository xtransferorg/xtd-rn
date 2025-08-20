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
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      s
    ),
    r.createElement(t, {
      d: 'M12.6325 3.95312L14.0337 5.38024L7.47722 11.8176C6.95857 12.3268 6.12761 12.3268 5.60896 11.8176L1.96582 8.24064L3.36701 6.81353L6.54308 9.93135L12.6325 3.95312Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
