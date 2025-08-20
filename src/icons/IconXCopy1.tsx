// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import t from 'react';
import {
  Svg as r,
  Defs as o,
  ClipPath as i,
  Path as n,
  G as a,
} from 'react-native-svg';
export default function (c) {
  c.color;
  var m = c.size,
    H = void 0 === m ? '24' : m,
    f = c.fillColor,
    p = void 0 === f ? 'none' : f,
    V = e(c, ['color', 'size', 'fillColor']);
  return t.createElement(
    r,
    l(
      {
        width: H,
        height: H,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      V
    ),
    t.createElement(
      o,
      null,
      t.createElement(
        i,
        { id: 'x-copy-1-0' },
        t.createElement(n, {
          fill: String(('none' !== p && p) || 'white'),
          d: 'M0 0H16V16H0z',
        })
      )
    ),
    t.createElement(
      a,
      { clipPath: 'url(#x-copy-1-0)' },
      t.createElement(n, {
        d: 'M13.333 1.3335C14.0694 1.3335 14.6663 1.93045 14.6663 2.66683V10.0002C14.6663 10.7365 14.0694 11.3335 13.333 11.3335H11.333V13.3335C11.333 14.0364 10.7891 14.6123 10.0992 14.6632L9.99967 14.6668H2.66634C1.92996 14.6668 1.33301 14.0699 1.33301 13.3335V6.00016C1.33301 5.26378 1.92996 4.66683 2.66634 4.66683H4.66634V2.66683C4.66634 1.93045 5.26329 1.3335 5.99967 1.3335H13.333ZM3.33301 6.66683V12.6668H9.33301V6.66683H3.33301ZM12.6663 3.3335H6.66634V4.66683H11.333V9.3335H12.6663V3.3335Z',
        fill: String(('none' !== p && p) || '#181721'),
      })
    )
  );
}
