// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    C = void 0 === n ? '24' : n,
    a = i.fillColor,
    f = void 0 === a ? 'none' : a,
    m = e(i, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    o(
      {
        width: C,
        height: C,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    r.createElement(t, {
      d: 'M23.5 2C35.3741 2 45 11.6259 45 23.5C45 28.8972 43.0112 33.83 39.7266 37.6054L45.5642 43.4397C46.1501 44.0254 46.1503 44.9752 45.5646 45.5611C44.9789 46.147 44.0292 46.1471 43.4433 45.5615L37.6064 39.7257C33.8309 43.0109 28.8977 45 23.5 45C11.6259 45 2 35.3741 2 23.5C2 11.6259 11.6259 2 23.5 2ZM23.5 5C13.2827 5 5 13.2827 5 23.5C5 33.7173 13.2827 42 23.5 42C33.7173 42 42 33.7173 42 23.5C42 13.2827 33.7173 5 23.5 5Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
