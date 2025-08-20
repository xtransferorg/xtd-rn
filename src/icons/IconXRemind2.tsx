// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    a = void 0 === n ? '24' : n,
    f = t.fillColor,
    c = void 0 === f ? 'none' : f,
    d = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      d
    ),
    o.createElement(i, {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
      fill: String(('none' !== c && c) || '#5731E0'),
    }),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M11.25 10.5H12.75V17H11.25V10.5ZM11.25 7H12.75V9H11.25V7Z',
      fill: String(('none' !== c && c) || 'white'),
    })
  );
}
