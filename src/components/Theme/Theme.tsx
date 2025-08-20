import React, { createContext } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { THEME_TOKEN, Token } from './constant';

const ThemeContext = createContext(THEME_TOKEN);

export interface ThemeProviderProps extends React.PropsWithChildren<{}> {
  theme?: typeof THEME_TOKEN;
}

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = THEME_TOKEN,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

/**
 * 静态获取token 非响应式
 * @param userToken 自定义token
 * @returns 主题token信息
 */

export const getTheme = (userToken?: Partial<Token>) => {
  return {
    ...THEME_TOKEN,
    ...(userToken || {}),
  };
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export type ThemeStyleParamas<T extends NamedStyles<T> | NamedStyles<any>> = (
  token: Token
) => T;

/**
 * 获取相应主题的对应样式
 * @param creatStyle 业务自定义的主题函数
 * @returns 对应主题的样式
 */
export const useThemeStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  creatStyle: ThemeStyleParamas<T>
): T => {
  const token = useTheme();

  return creatStyle?.(token);
};

/**
 * 快捷创建主题样式，方便配合useThemeStyle使用
 * @param creatStyle 创建样式方法
 * @returns 创建样式方法
 */
const createThemeStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  createStyle: ThemeStyleParamas<T>
) => {
  return (token: Token) => createStyle?.(token);
};

/**
 * 创建样式 同RN的StyleSheet.create
 * @param styles
 * @returns 样式
 */
const createStyle = <T extends NamedStyles<T> | NamedStyles<any>>(styles: T) =>
  styles;

export const StyleSheet = {
  createTheme: createThemeStyle,
  create: createStyle,
};
