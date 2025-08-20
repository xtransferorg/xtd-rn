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
      d: 'M20.5614 3.44004C21.1466 4.02635 21.1461 4.97645 20.5603 5.56216L14.121 12L20.5603 18.4378C21.1095 18.9869 21.1443 19.8563 20.6643 20.4459L20.5614 20.56C19.9762 21.1463 19.0269 21.1467 18.4411 20.561L12 14.121L5.55892 20.561C4.97311 21.1467 4.02381 21.1463 3.4386 20.56C2.85338 19.9737 2.85386 19.0236 3.43967 18.4378L9.878 12L3.43967 5.56216C2.89048 5.01305 2.85573 4.14368 3.33573 3.55406L3.4386 3.44004C4.02381 2.85374 4.97311 2.85326 5.55892 3.43897L12 9.878L18.4411 3.43897C19.0269 2.85326 19.9762 2.85374 20.5614 3.44004Z',
      fill: String(('none' !== L && L) || '#222222'),
    })
  );
}
