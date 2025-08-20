// @ts-nocheck
import React, { isValidElement } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageProps,
  ImageStyle,
  StyleProp,
  Keyboard,
} from 'react-native';
import { Input, ShouldRender } from '@xrnjs/ui';
import { addThousandSeparators } from '../Input/utils';
import Select from '../Select';
import { IconXLowersmall1 } from '../../icons/index';
import { AmountInputProps, Group } from './interface';
import createStyle from './styles/AmountInput.style';
import { useMemoizedFn, useControllableValue } from 'ahooks';
import { useLocale } from '../Locale/locale';
import merge from 'lodash/merge';
import { useTheme } from '../Theme/Theme';
import Image from '../Image';

const initValue = {
  amount: '',
  currency: '',
  canUseAmount: 0,
};

const digitRegex = /^(0|[1-9]\d*)((\.|,)\d*)?$/;

const AmountInput = ({
  onChange,
  onChangeSelect,
  onSelectAll,
  formatBalance,
  showSelectCurrency = true,
  options = [],
  showSellAll = true,
  value = initValue,
  selectProps = {},
  inputProps = {},
  selectTitle,
  disabled,
  placeholder,
  currencyInputProps,
  showBalance,
  allText,
  style,
  availableBalanceText,
  availableBalanceColon = '：',
  selectPosition = 'prefix',
  autoClear = true,
  decimalNum,
  precision = 2,
  ...props
}: AmountInputProps) => {
  const _precision = decimalNum ?? precision;
  const token = useTheme();
  const styles = createStyle(token);
  const decimalSeparator = inputProps?.decimalSeparator ?? '.';
  const thousandSeparator = inputProps?.thousandSeparator ?? ',';

  const locale = useLocale();
  const [visible, setVisible] = useControllableValue<boolean>(props, {
    defaultValue: false,
    valuePropName: 'selectVisible',
    trigger: 'onSelectVisibleChange',
  });

  const findOption = (val: string) => {
    let opt = null;
    if (options.length < 1) return opt;

    const firstOpt = options?.[0] as Group;
    if (firstOpt?.children instanceof Array) {
      const groups = options as Group[];
      groups.some((opts) => {
        opt = opts?.children?.find((x) => x.value === val);
        return !!opt;
      });
    } else {
      opt = options?.find?.((x) => x.value === val);
    }

    return opt;
  };

  const onChangeCurrency = useMemoizedFn((ccy: string) => {
    setVisible(false);
    const balance = findOption(ccy)?.balance;
    onChange?.({
      amount: autoClear ? '' : value.amount,
      currency: ccy,
      canUseAmount: balance ? Number(balance) : 0,
    });
    onChangeSelect?.(ccy);
  });

  const balance = findOption(value.currency)?.balance;

  const onCancel = useMemoizedFn(() => {
    setVisible(false);
  });

  const onChangeAmount = useMemoizedFn((amount: string) => {
    if (digitRegex.test(amount) || amount === '') {
      onChange?.({
        ...value,
        amount: amount ?? '',
      });
    }
  });

  const sellAll = useMemoizedFn(() => {
    onChange?.({
      ...value,
      amount: balance ? balance?.toString() : '',
    });
    onSelectAll?.(balance ? balance?.toString() : '');
  });

  const getCurrencyImg = () =>
    findOption(value.currency)?.prefixIcon?.toString();

  const getCurrencyNode = () => findOption(value.currency)?.prefixIcon;

  const showCurrencyModel = () => {
    if (disabled) return;
    Keyboard.dismiss();
    showSelectCurrency && setVisible(true);
  };

  const renderIcon = () => {
    const node = getCurrencyNode();
    if (isValidElement(node)) {
      return React.cloneElement(
        node,
        merge(
          {
            ...node.props,
            style: StyleSheet.flatten([
              disabled && styles.imgDisabled,
              node.props.style,
              currencyInputProps?.imageStyle,
            ]),
          },
          currencyInputProps?.imageProps
        )
      );
    }

    const isShowIcon = !!getCurrencyImg();
    return (
      <ShouldRender condition={isShowIcon}>
        <Image
          {...((currencyInputProps?.imageProps as ImageProps) || {})}
          style={StyleSheet.flatten([
            styles.img,
            disabled && styles.imgDisabled,
            currencyInputProps?.imageStyle as StyleProp<ImageStyle>,
          ])}
          source={{
            uri: getCurrencyImg(),
          }}
        />
      </ShouldRender>
    );
  };

  const selectView = (
    <TouchableOpacity
      disabled={disabled}
      onPress={showCurrencyModel}
      style={styles.prefixContainer}
    >
      {renderIcon()}

      <ShouldRender condition={!!value.currency}>
        <Text
          style={StyleSheet.flatten([
            styles.selectedCurrencyTxt,
            disabled && styles.selectedCurrencyTxtDisabled,
            currencyInputProps?.textStyle,
          ])}
        >
          {value.currency}
        </Text>
      </ShouldRender>
      <ShouldRender condition={!value.currency}>
        <Text
          style={StyleSheet.flatten([
            styles.selectedCurrencyPlaceholder,
            disabled && styles.selectedCurrencyPlaceholderDisabled,
            currencyInputProps?.placeholdStyle,
          ])}
        >
          {locale.AmountInput.selectPlaceholder}
        </Text>
      </ShouldRender>
      {showSelectCurrency && options.length > 0 && (
        <IconXLowersmall1
          size={token['--font-size-3']}
          style={styles.forwardIconStyle}
          fillColor={
            disabled ? token['--color-text-2'] : token['--color-text-5']
          }
          {...(currencyInputProps?.arrowProps || {})}
        />
      )}
    </TouchableOpacity>
  );
  const isPrefix = selectPosition === 'prefix';
  const loadingProps = isPrefix
    ? { style: { left: undefined, right: 0 }, ...inputProps?.loadingProps }
    : inputProps?.loadingProps;

  const availableBalanceNote =
    availableBalanceText || locale.AmountInput.availableBalance;
  return (
    <View style={[styles.container, style]}>
      <Input
        disabled={disabled}
        placeholderWrapper={{ justifyContent: 'center' }}
        value={value.amount || ''}
        allowClear={false}
        placeholderStyle={StyleSheet.flatten([
          styles.placeholderStyle,
          !isPrefix && styles.placeholderSuffixStyle,
        ])}
        align={selectPosition === 'prefix' ? 'right' : 'left'}
        type="number"
        formatter="thousandSeparators"
        bizInputType="amount"
        precision={_precision}
        onChange={onChangeAmount}
        inputStyle={styles.amount}
        placeholder={placeholder || locale.AmountInput.placeholder}
        prefix={isPrefix ? selectView : undefined}
        suffix={!isPrefix ? selectView : undefined}
        size="max"
        autoTransformToNumber
        {...inputProps}
        loadingProps={loadingProps}
      />

      <View
        style={StyleSheet.flatten([
          [styles.descContainer, showBalance && styles.descBalanceContainer],
        ])}
      >
        <ShouldRender condition={showBalance}>
          <Text style={styles.availableBalanceTxt}>
            {availableBalanceNote}
            {availableBalanceColon}
            {formatBalance
              ? formatBalance(balance)
              : addThousandSeparators(
                  balance
                    ? String(Number(balance).toFixed(_precision)).replace(
                        '.',
                        decimalSeparator
                      )
                    : 0,
                  thousandSeparator
                )}{' '}
            {value.currency}
          </Text>
        </ShouldRender>
        <ShouldRender condition={showSellAll}>
          <TouchableOpacity onPress={sellAll}>
            <Text style={styles.sellAll}>
              {allText || locale.AmountInput.sellAll}
            </Text>
          </TouchableOpacity>
        </ShouldRender>
      </View>

      <Select
        type={Select.Type.radio}
        options={options}
        title={selectTitle || locale.AmountInput.selectTitle}
        value={value.currency}
        visible={visible}
        onPressOverlay={() => setVisible(false)}
        onCancel={onCancel}
        onChange={(value) => {
          if (value) {
            onChangeCurrency(value as string);
          } else {
            setVisible(false);
          }
        }}
        {...selectProps}
      />
    </View>
  );
};

export default AmountInput;
