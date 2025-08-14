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
      d: 'M7.08418 9.46424C5.73172 10.7562 5.63822 12.8725 6.83956 14.2772L7.01072 14.4634L14.4632 21.5845C15.0628 22.1573 16.0127 22.1351 16.5849 21.5349C17.1572 20.9347 17.135 19.9838 16.5354 19.411L9.13984 12.3457C8.9491 12.1456 8.95651 11.8287 9.15638 11.6377L16.5354 4.58897C17.135 4.01619 17.1572 3.0653 16.5849 2.4651C16.0127 1.8649 15.0628 1.84268 14.4632 2.41546L7.08418 9.46424Z',
      fill: String(('none' !== m && m) || '#222222'),
    })
  );
}
