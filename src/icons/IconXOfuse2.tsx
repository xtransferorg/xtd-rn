// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    a = void 0 === n ? '24' : n,
    f = t.fillColor,
    c = void 0 === f ? 'none' : f,
    d = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      d
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M5.5 7.49973V21.4997L3 21.5001C2.44772 21.5001 2 21.0524 2 20.5001V8.50011C2 7.94783 2.44772 7.50011 3 7.50011L5.5 7.49973ZM13.1775 1.89531L14.3256 2.55813C15.4017 3.17945 15.7704 4.55552 15.1491 5.63168L14.0705 7.49973L20.7472 7.50011C21.2995 7.50011 21.7472 7.94783 21.7472 8.50011C21.7472 8.57468 21.7389 8.64902 21.7224 8.72173L18.9951 20.7217C18.8916 21.177 18.4869 21.5001 18.02 21.5001L7 21.4997V7.49923L8.207 7.49973L11.8534 2.1949C12.149 1.76485 12.7256 1.63439 13.1775 1.89531Z',
      fill: String(('none' !== c && c) || '#F56A00'),
    })
  );
}
