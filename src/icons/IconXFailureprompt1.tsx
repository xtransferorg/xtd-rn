// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    C = i.fillColor,
    L = void 0 === C ? 'none' : C,
    f = e(i, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      f
    ),
    r.createElement(t, {
      d: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM14.75 8.18934L15.8107 9.25L13.0605 12L15.8107 14.75L14.75 15.8107L12 13.0605L9.25 15.8107L8.18934 14.75L10.939 12L8.18934 9.25L9.25 8.18934L12 10.939L14.75 8.18934Z',
      fill: String(('none' !== L && L) || '#C72D3C'),
    })
  );
}
