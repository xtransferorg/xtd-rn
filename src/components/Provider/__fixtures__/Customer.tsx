import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStyle } from '@xrnjs/ui';
import styles from './styles';

const Customer = () => {
  // 老hook方法
  // themeToken可用于组件内联样式取值
  // const themeToken = useTheme(); // 获取当前组件库的所有主题配置，当前context的值，动态响应
  // const userStyle = styles(themeToken); //获取相应主题的样式 styles为业务自定义样式

  // 最新hook方法
  const userStyle = useThemeStyle(styles);

  return (
    <View style={userStyle.contentStyle}>
      <Text>Customer 动态响应</Text>
    </View>
  );
};

export default Customer;
