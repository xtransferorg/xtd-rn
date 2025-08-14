// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as i, Path as n, Mask as t } from 'react-native-svg';
export default function (r) {
  var L = r.color,
    d = void 0 === L ? 'none' : L,
    a = r.size,
    c = void 0 === a ? '24' : a,
    u = r.fillColor,
    f = void 0 === u ? 'none' : u,
    m = e(r, ['color', 'size', 'fillColor']);
  return o.createElement(
    i,
    l(
      {
        width: c,
        height: c,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    o.createElement(n, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4.19934 14.0101C3.79368 14.0101 3.44409 13.7245 3.36316 13.327L1.82437 5.76876C1.78704 5.56964 1.85659 5.36551 2.00772 5.23059C2.15885 5.09568 2.36954 5.04964 2.56317 5.10923L5.13248 5.90067L7.54616 2.64868C7.65522 2.5018 7.82734 2.41515 8.01029 2.41504C8.19324 2.41493 8.36547 2.50135 8.47472 2.6481L10.8948 5.90067L13.4375 5.11096C13.6311 5.05076 13.8421 5.09632 13.9936 5.23104C14.1452 5.36577 14.2151 5.57 14.178 5.76934L12.6009 13.331C12.5184 13.7266 12.1697 14.0101 11.7655 14.0101H4.19934Z',
      stroke: String(('none' !== d && d) || '#181721'),
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    o.createElement(
      t,
      { id: 'x-highquality-1-0', fill: String(('none' !== f && f) || 'white') },
      o.createElement(n, {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M6 8.00044L7.16807 9.75211C7.56394 10.3458 8.43635 10.3457 8.83213 9.75198L10 8',
      })
    ),
    o.createElement(n, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M6 8.00044L7.16807 9.75211C7.56394 10.3458 8.43635 10.3457 8.83213 9.75198L10 8',
      fill: String(('none' !== f && f) || 'white'),
    }),
    o.createElement(n, {
      d: 'M7.66397 6.89085L6.55438 5.22687L3.22644 7.44605L4.33603 9.11003L7.66397 6.89085ZM11.6642 9.10932L12.7735 7.44517L9.44517 5.22652L8.33585 6.89068L11.6642 9.10932ZM4.33603 9.11003L5.5041 10.8617L8.83204 8.64252L7.66397 6.89085L4.33603 9.11003ZM10.4963 10.8613L11.6642 9.10932L8.33585 6.89068L7.16798 8.64265L10.4963 10.8613ZM5.5041 10.8617C6.69172 12.6427 9.30895 12.6425 10.4963 10.8613L7.16798 8.64265C7.56376 8.04893 8.43617 8.04885 8.83204 8.64252L5.5041 10.8617Z',
      fill: String(('none' !== f && f) || '#181721'),
      mask: 'url(#x-highquality-1-0)',
    })
  );
}
