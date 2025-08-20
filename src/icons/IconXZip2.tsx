// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import l from 'react';
import { Svg as n, Path as i } from 'react-native-svg';
export default function (r) {
  r.color;
  var o = r.size,
    a = void 0 === o ? '24' : o,
    f = r.fillColor,
    m = void 0 === f ? 'none' : f,
    C = e(r, ['color', 'size', 'fillColor']);
  return l.createElement(
    n,
    t(
      {
        width: a,
        height: a,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      C
    ),
    l.createElement(i, {
      d: 'M6.53906 5.14697C6.53906 3.49012 7.88221 2.14697 9.53906 2.14697H30.54L41.1004 15.0115V42.9492C41.1004 44.6061 39.7573 45.9492 38.1004 45.9492H9.53906C7.88221 45.9492 6.53906 44.6061 6.53906 42.9492V5.14697Z',
      fill: String(('none' !== m && m) || '#B3B2C2'),
    }),
    l.createElement(i, {
      d: 'M23.6418 35.8678C22.9416 35.8667 22.2705 35.5879 21.7756 35.0926C21.2807 34.5974 21.0025 33.926 21.002 33.2259V30.584H26.2836V33.2259C26.2831 33.9264 26.0046 34.598 25.5092 35.0934C25.0139 35.5887 24.3423 35.8672 23.6418 35.8678ZM22.3531 31.9351V33.2259C22.3531 33.5678 22.4888 33.8958 22.7304 34.1378C22.972 34.3798 23.2998 34.5161 23.6418 34.5166C23.9839 34.5161 24.3119 34.3799 24.5538 34.138C24.7958 33.896 24.932 33.568 24.9325 33.2259V31.9351H22.3531Z',
      fill: String(('none' !== m && m) || 'white'),
    }),
    l.createElement(i, {
      d: 'M21.0003 30.5859H23.6484V27.9378H21.0003V30.5859Z',
      fill: String(('none' !== m && m) || 'white'),
    }),
    l.createElement(i, {
      d: 'M23.6419 27.9399H26.29V25.2918H23.6419V27.9399Z',
      fill: String(('none' !== m && m) || 'white'),
    }),
    l.createElement(i, {
      d: 'M21.0003 25.2939H23.6484V22.6458H21.0003V25.2939Z',
      fill: String(('none' !== m && m) || 'white'),
    }),
    l.createElement(i, {
      d: 'M23.6419 22.6479H26.29V19.9998H23.6419V22.6479Z',
      fill: String(('none' !== m && m) || 'white'),
    }),
    l.createElement(i, {
      d: 'M32.0761 15.011C31.2278 15.011 30.54 14.3233 30.54 13.4749V2.14648L41.1005 15.011H32.0761Z',
      fill: String(('none' !== m && m) || '#838099'),
    })
  );
}
