// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var C = i.size,
    n = void 0 === C ? '24' : C,
    a = i.fillColor,
    f = void 0 === a ? 'none' : a,
    m = e(i, ['color', 'size', 'fillColor']);
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
    r.createElement(t, {
      d: 'M24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5ZM24 15C24.8284 15 25.5 15.6716 25.5 16.5V22.5H31.5C32.3284 22.5 33 23.1716 33 24C33 24.8284 32.3284 25.5 31.5 25.5H25.499L25.5 31.5C25.5 32.3284 24.8284 33 24 33C23.1716 33 22.5 32.3284 22.5 31.5L22.499 25.5H16.5C15.6716 25.5 15 24.8284 15 24C15 23.1716 15.6716 22.5 16.5 22.5H22.5V16.5C22.5 15.6716 23.1716 15 24 15Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
