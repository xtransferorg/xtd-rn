// @ts-nocheck
import { _ as e, a as t } from './_rollupPluginBabelHelpers-3bc641ae';
import l from 'react';
import {
  Svg as r,
  Defs as o,
  LinearGradient as n,
  Stop as i,
  Path as a,
} from 'react-native-svg';
export default function (s) {
  s.color;
  var m = s.size,
    c = void 0 === m ? '24' : m,
    f = s.fillColor,
    C = void 0 === f ? 'none' : f,
    p = e(s, ['color', 'size', 'fillColor']);
  return l.createElement(
    r,
    t(
      {
        width: c,
        height: c,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      p
    ),
    l.createElement(
      o,
      null,
      l.createElement(
        n,
        {
          id: 'm-a-fail-2-0',
          x1: '0',
          y1: '24',
          x2: '48',
          y2: '24',
          gradientUnits: 'userSpaceOnUse',
        },
        l.createElement(i, { stopColor: '#FF7070' }),
        l.createElement(i, { offset: '1', stopColor: '#FF4D4D' })
      ),
      l.createElement(
        n,
        {
          id: 'm-a-fail-2-1',
          x1: '33.8996',
          y1: '33.8992',
          x2: '24.0001',
          y2: '23.9997',
          gradientUnits: 'userSpaceOnUse',
        },
        l.createElement(i, { stopColor: 'white' }),
        l.createElement(i, {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.6',
        })
      ),
      l.createElement(
        n,
        {
          id: 'm-a-fail-2-2',
          x1: '14.1005',
          y1: '14.1003',
          x2: '24',
          y2: '23.9998',
          gradientUnits: 'userSpaceOnUse',
        },
        l.createElement(i, { stopColor: 'white' }),
        l.createElement(i, {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.6',
        })
      )
    ),
    l.createElement(a, {
      d: 'M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z',
      fill: String(('none' !== C && C) || 'url(#m-a-fail-2-0)'),
    }),
    l.createElement(a, {
      d: 'M33.8996 30.3637L27.5356 23.9997C26.5593 23.0234 24.9764 23.0234 24.0001 23.9997C23.0237 24.976 23.0237 26.5589 24.0001 27.5352L30.364 33.8992C31.3403 34.8755 32.9232 34.8755 33.8996 33.8992C34.8759 32.9229 34.8759 31.34 33.8996 30.3637Z',
      fill: String(('none' !== C && C) || 'url(#m-a-fail-2-1)'),
    }),
    l.createElement(a, {
      d: 'M24 20.4642L17.6361 14.1003C16.6597 13.124 15.0768 13.124 14.1005 14.1003C13.1242 15.0766 13.1242 16.6595 14.1005 17.6358L20.4645 23.9998C21.4408 24.9761 23.0237 24.9761 24 23.9998C24.9763 23.0235 24.9763 21.4406 24 20.4642Z',
      fill: String(('none' !== C && C) || 'url(#m-a-fail-2-2)'),
    }),
    l.createElement(a, {
      d: 'M17.636 33.8994L33.8995 17.6359C34.8758 16.6596 34.8758 15.0767 33.8995 14.1004C32.9232 13.1241 31.3402 13.1241 30.3639 14.1004L14.1005 30.3639C13.1242 31.3402 13.1242 32.9231 14.1005 33.8994C15.0768 34.8757 16.6597 34.8757 17.636 33.8994Z',
      fill: String(('none' !== C && C) || 'white'),
    })
  );
}
