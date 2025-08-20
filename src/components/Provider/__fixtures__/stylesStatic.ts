// // 新用法 使用xtd-rn的StyleSheet.create
// import { getTheme, StyleSheet } from '@xrnjs/ui';

// const userToken = getTheme({ '--color-primary-6': 'red' }); // 静态方法获取主题并修改--color-primary-6主题色，其余默认

// export default StyleSheet.create({
//   contentStyle: {
//     backgroundColor: userToken['--color-primary-6'],
//     width: 200,
//     height: 100,
//   },
// });

// 老用法
// import { StyleSheet } from 'react-native';
// import { getTheme } from '@xrnjs/ui';

// const userToken = getTheme({ '--color-primary-6': 'red' }); // 静态方法获取主题并修改--color-primary-6主题色，其余默认

// export default StyleSheet.create({
//   contentStyle: {
//     backgroundColor: userToken['--color-primary-6'],
//     width: 200,
//     height: 100,
//   },
// });
