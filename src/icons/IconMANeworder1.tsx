// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as C } from 'react-native-svg';
export default function (t) {
  t.color;
  var i = t.size,
    n = void 0 === i ? '24' : i,
    a = t.fillColor,
    f = void 0 === a ? 'none' : a,
    m = e(t, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    o(
      {
        width: n,
        height: n,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    r.createElement(C, {
      d: 'M26.9716 4C28.6625 4 30.31 4.53582 31.6775 5.53052L40.7059 12.0979C42.7756 13.6033 44 16.0081 44 18.5673V36C44 40.4183 40.4183 44 36 44H12C7.58172 44 4 40.4183 4 36V12C4 7.58172 7.58172 4 12 4H26.9716ZM26.9716 7H12C9.23858 7 7 9.23858 7 12V36C7 38.7614 9.23858 41 12 41H36C38.7614 41 41 38.7614 41 36V18.5673C41 16.9678 40.2347 15.4648 38.9412 14.5239L29.9128 7.95657C29.1293 7.38669 28.1988 7.05781 27.2351 7.00695L26.9716 7ZM24 16C24.8284 16 25.5 16.6716 25.5 17.5V23.5H31.5C32.3284 23.5 33 24.1716 33 25C33 25.8284 32.3284 26.5 31.5 26.5H25.499L25.5 32.5C25.5 33.3284 24.8284 34 24 34C23.1716 34 22.5 33.3284 22.5 32.5L22.499 26.5H16.5C15.6716 26.5 15 25.8284 15 25C15 24.1716 15.6716 23.5 16.5 23.5H22.5V17.5C22.5 16.6716 23.1716 16 24 16Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
