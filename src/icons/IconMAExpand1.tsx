// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    s = e(i, ['color', 'size', 'fillColor']);
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
      s
    ),
    r.createElement(t, {
      d: 'M14.4785 16.3105C13.1097 17.6793 10.8903 17.6793 9.52148 16.3105L2.43999 9.22899C1.85334 8.64234 1.85334 7.69119 2.43999 7.10454C3.02664 6.51789 3.97778 6.51789 4.56443 7.10454L11.6459 14.186C11.8415 14.3816 12.1585 14.3816 12.3541 14.186L19.4356 7.10454C20.0222 6.51789 20.9734 6.51789 21.56 7.10454C22.1467 7.69119 22.1467 8.64234 21.56 9.22899L14.4785 16.3105Z',
      fill: String(('none' !== m && m) || '#222222'),
    })
  );
}
