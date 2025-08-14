// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import {
  Svg as l,
  Defs as n,
  ClipPath as i,
  Rect as o,
  G as a,
  Path as c,
} from 'react-native-svg';
export default function (h) {
  var m = h.color,
    d = void 0 === m ? 'none' : m,
    f = h.size,
    g = void 0 === f ? '24' : f,
    s = h.fillColor,
    E = void 0 === s ? 'none' : s,
    w = e(h, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    t(
      {
        width: g,
        height: g,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      w
    ),
    r.createElement(
      n,
      null,
      r.createElement(
        i,
        { id: 'x-china-1-0' },
        r.createElement(o, {
          width: '48',
          height: '48',
          rx: '24',
          fill: String(('none' !== E && E) || 'white'),
        })
      )
    ),
    r.createElement(
      a,
      { clipPath: 'url(#x-china-1-0)' },
      r.createElement(c, {
        d: 'M0 0H48V48H0V0Z',
        fill: String(('none' !== E && E) || '#ED0000'),
      }),
      r.createElement(c, {
        d: 'M19.1998 9.84005 6.9598 17.76 11.9998 4.80005 16.3198 17.76 4.7998 9.84005H19.1998ZM22.1795 3.09841 26.5408 5.2345 21.9757 6.0189 24.935 2.56195 24.65 7.21003 22.1795 3.09841ZM27.7379 7.33197 30.9264 10.9993 26.4128 9.94474 30.4868 7.91042 28.4142 12.0841 27.7379 7.33197ZM28.7413 14.2997 30.1552 18.9518 26.4636 16.1446 31.0156 15.9511 27.4175 18.9162 28.7413 14.2997ZM24.9383 19.2779 24.4475 24.1103 22.1279 20.0999 26.3975 21.6767 21.9383 23.0219 24.9383 19.2779Z',
        fill: String(('none' !== E && E) || '#FFDE00'),
      })
    ),
    r.createElement(o, {
      x: '0.25',
      y: '0.25',
      width: '47.5',
      height: '47.5',
      rx: '23.75',
      stroke: String(('none' !== d && d) || '#DADAE3'),
      strokeWidth: '0.5',
    })
  );
}
