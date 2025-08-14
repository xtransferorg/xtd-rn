// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    c = e(i, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: a,
        height: a,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(t, {
      d: 'M6.53906 5.14697C6.53906 3.49012 7.88221 2.14697 9.53906 2.14697H30.54L41.1004 15.0115V42.9492C41.1004 44.6061 39.7573 45.9492 38.1004 45.9492H9.53906C7.88221 45.9492 6.53906 44.6061 6.53906 42.9492V5.14697Z',
      fill: String(('none' !== m && m) || '#B3B2C2'),
    }),
    o.createElement(t, {
      d: 'M32.0761 15.011C31.2278 15.011 30.54 14.3233 30.54 13.4749V2.14648L41.1005 15.011H32.0761Z',
      fill: String(('none' !== m && m) || '#838099'),
    }),
    o.createElement(t, {
      fill: String(('none' !== m && m) || 'white'),
      d: 'M15 23H33V26H15zM15 31H28V34H15z',
    })
  );
}
