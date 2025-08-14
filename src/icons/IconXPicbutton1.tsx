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
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM21.8824 12C21.8824 17.4579 17.4579 21.8824 12 21.8824C6.54213 21.8824 2.11765 17.4579 2.11765 12C2.11765 6.54213 6.54213 2.11765 12 2.11765C17.4579 2.11765 21.8824 6.54213 21.8824 12Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
