// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    H = i.fillColor,
    f = void 0 === H ? 'none' : H,
    m = e(i, ['color', 'size', 'fillColor']);
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
      m
    ),
    o.createElement(t, {
      d: 'M6.53906 5.14697C6.53906 3.49012 7.88221 2.14697 9.53906 2.14697H30.54L41.1004 15.0115V42.9492C41.1004 44.6061 39.7573 45.9492 38.1004 45.9492H9.53906C7.88221 45.9492 6.53906 44.6061 6.53906 42.9492V5.14697Z',
      fill: String(('none' !== f && f) || '#2D62DD'),
    }),
    o.createElement(t, {
      d: 'M32.0761 15.011C31.2278 15.011 30.54 14.3233 30.54 13.4749V2.14648L41.1005 15.011H32.0761Z',
      fill: String(('none' !== f && f) || '#003AC0'),
    }),
    o.createElement(t, {
      d: 'M17.7882 35L13.9031 21.8268H17.8911L19.6921 29.9314H19.795L21.9305 21.8268H25.0695L27.205 29.9571H27.3079L29.1089 21.8268H33.0969L29.2118 35H25.7899L23.5515 27.6415H23.4485L21.2101 35H17.7882Z',
      fill: String(('none' !== f && f) || 'white'),
    })
  );
}
