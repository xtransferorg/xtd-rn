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
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(i, {
      d: 'M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM24 4.13793C34.9695 4.13793 43.8621 13.0305 43.8621 24C43.8621 34.9695 34.9695 43.8621 24 43.8621C13.0305 43.8621 4.13793 34.9695 4.13793 24C4.13793 13.0305 13.0305 4.13793 24 4.13793Z',
      fill: String(('none' !== f && f) || '#222222'),
    }),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M21.9312 26.0687V13.6549C21.9312 12.5122 22.8575 11.5859 24.0001 11.5859C25.1428 11.5859 26.0691 12.5122 26.0691 13.6549V26.0687C26.0691 27.2114 25.1428 28.1377 24.0001 28.1377C22.8575 28.1377 21.9312 27.2114 21.9312 26.0687ZM21.9312 32.6894C21.9312 31.5467 22.8575 30.6204 24.0001 30.6204C25.1428 30.6204 26.0691 31.5467 26.0691 32.6894C26.0691 33.832 25.1428 34.7584 24.0001 34.7584C22.8575 34.7584 21.9312 33.832 21.9312 32.6894Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
