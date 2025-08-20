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
      d: 'M19.4363 5.77072C20.0221 5.18394 20.9726 5.18309 21.5594 5.76882C22.1461 6.35455 22.147 7.30506 21.5613 7.89184L11.8566 17.6133C10.4692 18.9614 8.25156 18.9295 6.90343 17.5421L2.42454 12.9325C1.84678 12.3379 1.86044 11.3875 2.45506 10.8097C3.04968 10.232 4.00009 10.2456 4.57786 10.8402L9.05675 15.4498C9.24934 15.648 9.56614 15.6525 9.76435 15.46L19.4363 5.77072Z',
      fill: String(('none' !== m && m) || '#222222'),
    })
  );
}
