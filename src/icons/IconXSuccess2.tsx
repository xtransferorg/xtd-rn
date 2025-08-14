// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import l from 'react';
import { Svg as r, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    c = e(i, ['color', 'size', 'fillColor']);
  return l.createElement(
    r,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    l.createElement(t, {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
      fill: String(('none' !== m && m) || '#0DA554'),
    }),
    l.createElement(t, {
      d: 'M15.4746 8.96484L16.5255 10.0352L11.6082 14.8632C11.2192 15.2451 10.596 15.2451 10.207 14.8632L7.47461 12.1805L8.52551 11.1101L10.9076 13.4485L15.4746 8.96484Z',
      fill: String(('none' !== m && m) || 'white'),
    })
  );
}
