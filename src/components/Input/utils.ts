import { isNumber } from 'lodash';
import { useLocale } from '../Locale/locale';
function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

/**
 * 将字符串格式化成数字样式
 * @param value
 * @param allowDot 是否允许小数点，逗号
 * @param allowMinus 是否允许「-」号
 * @returns
 */
export function formatNumber(
  value: string,
  allowDot = true,
  allowMinus = true,
  decimalSeparator = '.',
  precision?: number
): string {
  let _value = value;
  if (allowDot) {
    _value = trimExtraChar(
      value,
      decimalSeparator,
      new RegExp(`\\${decimalSeparator}`, 'g')
    );
  } else {
    _value = value.split(decimalSeparator)[0] as string;
  }

  if (allowMinus) {
    _value = trimExtraChar(_value, '-', /-/g);
  } else {
    _value = _value.replace(/-/, '');
  }

  const regExp = allowDot
    ? new RegExp(`[^-0-9${decimalSeparator}]`, 'g')
    : /[^-0-9]/g;
  _value = _value.replace(regExp, '');
  // if (
  //   _value.length > 1 &&
  //   _value[0] === '0' &&
  //   _value[1] !== decimalSeparator
  // ) {
  //   _value = _value.slice(1);
  // }
  if (isNumber(precision)) {
    const temp = _value.split(decimalSeparator);
    if (precision === 0 && temp[0]) {
      _value = temp[0];
    } else if (temp[1]) {
      _value = temp[0] + decimalSeparator + temp[1].substring(0, precision);
    }
  }
  return _value;
}

export function addThousandSeparators(
  num: number | string,
  thousandSeparator = ','
): string {
  if (typeof num === 'number' && num === 0) return '0';
  if (!num) return '';
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + thousandSeparator;
    });
  });
}

export function getNumberUnit(number: number) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale().UnitInput;
  if (!number && number !== 0) return number;

  const ranges: { range: [number, number]; character: string }[] = [
    { range: [1e2, 1e3], character: locale.hundred },
    { range: [1e3, 1e4], character: locale.thousand },
    { range: [1e4, 1e5], character: locale.tenThousand },
    { range: [1e5, 1e6], character: locale.hundredThousand },
    { range: [1e6, 1e7], character: locale.million },
    { range: [1e7, 1e8], character: locale.tenMillion },
    { range: [1e8, 1e9], character: locale.hundredMillion },
    { range: [1e9, 1e10], character: locale.billion },
    { range: [1e10, 1e11], character: locale.tenBillion },
    { range: [1e11, 1e12], character: locale.hundredBillion },
    { range: [1e12, Infinity], character: locale.trillion },
  ];

  const selectedRange = ranges.find(
    (range) => number >= range.range[0] && number < range.range[1]
  );

  if (selectedRange) {
    return selectedRange.character;
  }
}
