// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    C = void 0 === n ? '24' : n,
    a = t.fillColor,
    f = void 0 === a ? 'none' : a,
    c = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: C,
        height: C,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M27.9378 2C30.3912 2 32.5975 3.49371 33.5087 5.77166L34.4 8H37C41.4183 8 45 11.5817 45 16V36C45 40.4183 41.4183 44 37 44H11C6.58172 44 3 40.4183 3 36V16C3 11.5817 6.58172 8 11 8H13.6L14.4913 5.77166C15.4025 3.49371 17.6088 2 20.0622 2H27.9378ZM24 17C19.0294 17 15 21.0294 15 26C15 30.9706 19.0294 35 24 35C28.9706 35 33 30.9706 33 26C33 21.0294 28.9706 17 24 17ZM24 20C27.3137 20 30 22.6863 30 26C30 29.3137 27.3137 32 24 32C20.6863 32 18 29.3137 18 26C18 22.6863 20.6863 20 24 20Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
