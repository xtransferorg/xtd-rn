// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import {
  Svg as o,
  Defs as l,
  LinearGradient as s,
  Stop as n,
  Path as a,
} from 'react-native-svg';
export default function (c) {
  c.color;
  var i = c.size,
    m = void 0 === i ? '24' : i,
    C = c.fillColor,
    p = void 0 === C ? 'none' : C,
    u = e(c, ['color', 'size', 'fillColor']);
  return r.createElement(
    o,
    t(
      {
        width: m,
        height: m,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      u
    ),
    r.createElement(
      l,
      null,
      r.createElement(
        s,
        {
          id: 'm-a-success-2-0',
          x1: '0',
          y1: '24',
          x2: '48',
          y2: '24',
          gradientUnits: 'userSpaceOnUse',
        },
        r.createElement(n, { stopColor: '#33D68B' }),
        r.createElement(n, { offset: '1', stopColor: '#00CC6F' })
      ),
      r.createElement(
        s,
        {
          id: 'm-a-success-2-1',
          x1: '37.6534',
          y1: '14.7678',
          x2: '23.7732',
          y2: '28.6481',
          gradientUnits: 'userSpaceOnUse',
        },
        r.createElement(n, { stopColor: 'white', stopOpacity: '0.8' }),
        r.createElement(n, { offset: '1', stopColor: 'white' })
      ),
      r.createElement(
        s,
        {
          id: 'm-a-success-2-2',
          x1: '12.7678',
          y1: '21.7257',
          x2: '23.3744',
          y2: '32.3323',
          gradientUnits: 'userSpaceOnUse',
        },
        r.createElement(n, { stopColor: 'white' }),
        r.createElement(n, {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.6',
        })
      )
    ),
    r.createElement(a, {
      d: 'M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z',
      fill: String(('none' !== p && p) || 'url(#m-a-success-2-0)'),
    }),
    r.createElement(a, {
      d: 'M34.1179 14.7678L19.9758 28.91C18.9995 29.8863 18.9995 31.4692 19.9758 32.4455C20.9521 33.4218 22.535 33.4218 23.5113 32.4455L37.6534 18.3034C38.6298 17.3271 38.6298 15.7441 37.6534 14.7678C36.6771 13.7915 35.0942 13.7915 34.1179 14.7678Z',
      fill: String(('none' !== p && p) || 'url(#m-a-success-2-1)'),
    }),
    r.createElement(a, {
      d: 'M12.7678 25.2613L19.8389 32.3323C20.8152 33.3086 22.3981 33.3086 23.3744 32.3323C24.3507 31.356 24.3507 29.7731 23.3744 28.7968L16.3033 21.7257C15.327 20.7494 13.7441 20.7494 12.7678 21.7257C11.7915 22.702 11.7915 24.285 12.7678 25.2613Z',
      fill: String(('none' !== p && p) || 'url(#m-a-success-2-2)'),
    })
  );
}
