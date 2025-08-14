// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as i } from 'react-native-svg';
export default function (l) {
  var n = l.color,
    a = void 0 === n ? 'none' : n,
    s = l.size,
    c = void 0 === s ? '24' : s,
    m = (l.fillColor, e(l, ['color', 'size', 'fillColor']));
  return r.createElement(
    t,
    o(
      {
        width: c,
        height: c,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    r.createElement(i, {
      d: 'M12 13.125 12 16.25M11.9844 1.70312 11.9844 4.20313M17.5 2.4353 15.7322 4.20307M5.73242 2.4353 7.50019 4.20307M18.6345 6.5H5.39938C4.96721 6.5 4.73859 7.01126 5.02673 7.33336L7.97453 10.6287C7.99093 10.647 8 10.6707 8 10.6953V21.1094C8 21.3855 8.22386 21.6094 8.5 21.6094H15.6751C15.9512 21.6094 16.1751 21.3855 16.1751 21.1094V10.8425C16.1751 10.8195 16.183 10.7972 16.1976 10.7793L19.022 7.31601C19.2884 6.9894 19.056 6.5 18.6345 6.5Z',
      stroke: String(('none' !== a && a) || '#181721'),
      strokeWidth: '1.5',
      strokeLinecap: 'round',
    })
  );
}
