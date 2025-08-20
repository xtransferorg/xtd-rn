// 最新推荐用法 使用xtd-rn的StyleSheet.createTheme
import { StyleSheet } from '@xrnjs/ui';

export default StyleSheet.createTheme((token) => {
  return {
    contentStyle: {
      backgroundColor: token['--color-primary-6'],
      width: 200,
      height: 100,
    },
  };
});

// 老用法
// import { StyleSheet } from 'react-native';
// import { ThemeToken } from '@xrnjs/ui';
//
// export default (token: ThemeToken) =>
//   StyleSheet.create({
//     contentStyle: {
//       backgroundColor: token['--color-primary-6'],
//       width: 200,
//       height: 100,
//     },
//   });
