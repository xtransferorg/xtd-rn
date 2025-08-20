import React, { forwardRef, memo, useCallback, useMemo } from 'react';
import type { InputInstance } from '../Input/interface';
import { IconXVisiblee1, IconXInvisiblee1 } from '../../icons/index';
import type { PasswordInputProps } from './interface';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BOLD } from '../../common/weight';
import { useControllableValue } from 'ahooks';
import Input from '../Input';
import styles from './styles/passwordInput.style';
import { useTheme } from '../Theme/Theme';

/**
 * https://github.com/facebook/react-native/issues/35668
 * 在 IOS 系统中会发生输入密码后失去焦点再次输入时会清空已经输入的值
 * 在 RCTBackedTextInputDelegateAdapter.m 中 shouldChangeCharactersInRange 加入下面这段可以解决。
 * if (textField.isSecureTextEntry) {
 *    NSString *secureText = [textField.text stringByReplacingCharactersInRange:range withString:string];
 *    textField.text = secureText;
 *    return NO;
 *  }
 */
const PasswordInput = forwardRef<InputInstance, PasswordInputProps>(
  (props, ref) => {
    const token = useTheme();
    const {
      eyeColor = token['--color-text-5'],
      eyeSize = token['--font-size-3'],
      eyeStyle,
      showSecureControl = true,
      suffix,
      onChangeSecureTextEntry,
      disabled,
      ...restProps
    } = props;
    const [secureInput, setSecureInput] = useControllableValue(restProps, {
      valuePropName: 'secureTextEntry',
      defaultValuePropName: 'defaultSecureTextEntry',
      defaultValue: true,
      trigger: 'onChangeSecureTextEntry',
    });
    const IconSuffix = useMemo(() => {
      return secureInput ? IconXInvisiblee1 : IconXVisiblee1;
    }, [secureInput]);

    const onChangeVisible = useCallback(() => {
      const secure = !secureInput;
      onChangeSecureTextEntry?.(secure);
      setSecureInput(secure);
    }, [secureInput, onChangeSecureTextEntry]);

    return (
      <Input
        {...restProps}
        disabled={disabled}
        ref={ref}
        inputStyle={{ fontWeight: BOLD }}
        type={secureInput ? 'password' : 'text'}
        suffix={
          showSecureControl ? (
            <TouchableOpacity onPress={onChangeVisible} disabled={disabled}>
              <IconSuffix
                size={eyeSize}
                fillColor={eyeColor}
                style={StyleSheet.flatten([styles.eye, eyeStyle])}
              />
            </TouchableOpacity>
          ) : (
            suffix
          )
        }
      />
    );
  }
);

export default memo(PasswordInput);
