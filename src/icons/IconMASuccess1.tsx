// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as i, Path as r } from 'react-native-svg';
export default function (n) {
  n.color;
  var t = n.size,
    C = void 0 === t ? '24' : t,
    d = n.fillColor,
    a = void 0 === d ? 'none' : d,
    f = e(n, ['color', 'size', 'fillColor']);
  return o.createElement(
    i,
    l(
      {
        width: C,
        height: C,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      f
    ),
    o.createElement(r, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM43.8621 24C43.8621 34.9695 34.9695 43.8621 24 43.8621C13.0305 43.8621 4.13793 34.9695 4.13793 24C4.13793 13.0305 13.0305 4.13793 24 4.13793C34.9695 4.13793 43.8621 13.0305 43.8621 24Z',
      fill: String(('none' !== a && a) || '#222222'),
    }),
    o.createElement(r, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M22.1225 26.6103L32.3734 16.3594C33.1814 15.5514 34.4914 15.5514 35.2994 16.3594C36.1073 17.1674 36.1073 18.4774 35.2994 19.2854L23.5955 30.9892C22.818 31.7667 21.5756 31.796 20.763 31.0771C20.6911 31.022 20.6219 30.9616 20.5561 30.8957L14.7042 25.0438C13.8962 24.2358 13.8962 22.9258 14.7042 22.1179C15.5122 21.3099 16.8222 21.3099 17.6301 22.1179L22.1225 26.6103Z',
      fill: String(('none' !== a && a) || '#222222'),
    })
  );
}
