// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    L = i.fillColor,
    C = void 0 === L ? 'none' : L,
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
      d: 'M12.6775 1.89531L13.8256 2.55813C14.9017 3.17945 15.2704 4.55552 14.6491 5.63168L13.5705 7.49973L20.7472 7.50011C21.2995 7.50011 21.7472 7.94783 21.7472 8.50011C21.7472 8.57468 21.7389 8.64902 21.7224 8.72173L18.9951 20.7217C18.8916 21.177 18.4869 21.5001 18.02 21.5001H3C2.44772 21.5001 2 21.0524 2 20.5001V8.50011C2 7.94783 2.44772 7.50011 3 7.50011L7.707 7.49973L11.3534 2.1949C11.649 1.76485 12.2256 1.63439 12.6775 1.89531ZM5.5 8.99973H3.5V19.9997H5.5V8.99973ZM12.3275 3.42523L8.49617 8.99967L7 8.99923V19.9997H17.6205L20.1205 8.99973L10.9724 8.99959L13.3501 4.88168C13.5572 4.52296 13.4343 4.06427 13.0756 3.85716L12.3275 3.42523Z',
      fill: String(('none' !== C && C) || '#181721'),
    })
  );
}
