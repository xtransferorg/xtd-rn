// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import t from 'react';
import {
  Svg as n,
  Defs as o,
  LinearGradient as r,
  Stop as i,
  Rect as a,
  Path as m,
} from 'react-native-svg';
export default function (c) {
  c.color;
  var f = c.size,
    s = void 0 === f ? '24' : f,
    d = c.fillColor,
    p = void 0 === d ? 'none' : d,
    C = e(c, ['color', 'size', 'fillColor']);
  return t.createElement(
    n,
    l(
      {
        width: s,
        height: s,
        viewBox: '0 0 88 88',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      C
    ),
    t.createElement(
      o,
      null,
      t.createElement(
        r,
        {
          id: 'm-a-financialmanagement-2-0',
          x1: '15.5835',
          y1: '39.8757',
          x2: '72.4168',
          y2: '39.4173',
          gradientUnits: 'userSpaceOnUse',
        },
        t.createElement(i, { stopColor: '#FFA800' }),
        t.createElement(i, { offset: '1', stopColor: '#FFBA33' })
      )
    ),
    t.createElement(a, {
      opacity: '0.1',
      width: '88',
      height: '88',
      rx: '16',
      fill: String(('none' !== p && p) || '#FFA800'),
    }),
    t.createElement(m, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M44.0002 18.334C58.1755 18.334 69.6668 29.8253 69.6668 44.0007C69.6668 58.176 58.1755 69.6673 44.0002 69.6673C29.8249 69.6673 18.3335 58.176 18.3335 44.0007C18.3335 29.8253 29.8249 18.334 44.0002 18.334ZM47.3 35.7511C45.4775 33.9286 42.5228 33.9286 40.7003 35.7511L35.7506 40.7008C33.9281 42.5233 33.9281 45.478 35.7506 47.3005L40.7003 52.2502C42.5228 54.0727 45.4775 54.0727 47.3 52.2502L52.2497 47.3005C54.0722 45.478 54.0722 42.5233 52.2497 40.7008L47.3 35.7511Z',
      fill: String(('none' !== p && p) || 'url(#m-a-financialmanagement-2-0)'),
    })
  );
}
