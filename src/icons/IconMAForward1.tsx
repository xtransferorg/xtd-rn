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
      d: 'M16.9158 9.46424C18.2683 10.7562 18.3618 12.8725 17.1604 14.2772L16.9893 14.4634L9.53685 21.5845C8.93723 22.1573 7.98727 22.1351 7.41505 21.5349C6.84283 20.9347 6.86504 19.9838 7.46465 19.411L14.8602 12.3457C15.0509 12.1456 15.0435 11.8287 14.8436 11.6377L7.46465 4.58897C6.86504 4.01619 6.84283 3.0653 7.41505 2.4651C7.98727 1.8649 8.93723 1.84268 9.53685 2.41546L16.9158 9.46424Z',
      fill: String(('none' !== m && m) || '#222222'),
    })
  );
}
