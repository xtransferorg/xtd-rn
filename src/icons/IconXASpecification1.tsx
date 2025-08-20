// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import {
  Svg as o,
  Defs as n,
  ClipPath as i,
  Path as l,
  G as a,
  Circle as c,
} from 'react-native-svg';
export default function (s) {
  var m = s.color,
    d = void 0 === m ? 'none' : m,
    f = s.size,
    p = void 0 === f ? '24' : f,
    g = s.fillColor,
    h = void 0 === g ? 'none' : g,
    u = e(s, ['color', 'size', 'fillColor']);
  return r.createElement(
    o,
    t(
      {
        width: p,
        height: p,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      u
    ),
    r.createElement(
      n,
      null,
      r.createElement(
        i,
        { id: 'x-a-specification-1-0' },
        r.createElement(l, {
          fill: String(('none' !== h && h) || 'white'),
          d: 'M0 0H16V16H0z',
        })
      )
    ),
    r.createElement(
      a,
      { clipPath: 'url(#x-a-specification-1-0)' },
      r.createElement(l, {
        d: 'M1.33301 4.25H3M13 11.5H14.3337M10.167 4.25 14.3337 4.25M1.33301 11.5835H5.83301',
        stroke: String(('none' !== d && d) || '#181721'),
        strokeWidth: '2',
        strokeLinecap: 'square',
      }),
      r.createElement(c, {
        cx: '5',
        cy: '4',
        r: '2',
        stroke: String(('none' !== d && d) || '#181721'),
        strokeWidth: '2',
      }),
      r.createElement(l, {
        d: 'M13 11.5C13 12.6046 12.1046 13.5 11 13.5C9.89543 13.5 9 12.6046 9 11.5C9 10.3954 9.89543 9.5 11 9.5C12.1046 9.5 13 10.3954 13 11.5Z',
        stroke: String(('none' !== d && d) || '#181721'),
        strokeWidth: '2',
      })
    )
  );
}
