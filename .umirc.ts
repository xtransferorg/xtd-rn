import { defineConfig } from 'dumi';
import { version } from './package.json';
import path from 'path';

const navs = [
  { title: '指南', path: '/guide' },
  { title: 'UI组件', path: '/component' },
];

export default defineConfig({
  hash: true,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  base: '/xtd-rn',
  publicPath: '/xtd-rn/',
  outputPath: `docs/out`,
  navs,
  resolve: {
    includes: [
      'docs',
      'src',
      'src/components/**/__changlog__/*',
      './CHANGELOG.md',
    ],
    excludes: ['lib'],
  },
  alias: {
    '@xrnjs/ui': path.resolve(__dirname, 'src'),
    'lottie-react-native': path.resolve(
      __dirname,
      './node_modules/react-native-web-lottie'
    ),
    '_global': path.resolve(__dirname, '.dumi/global'),
    '@xrnjs/image': path.resolve(__dirname, '.dumi/mock/image.js'),
    'react-native-pdf': path.resolve(__dirname, '.dumi/mock/pdf.js'),
    'react-native-fs': path.resolve(__dirname, '.dumi/mock/fs.js'),
    '@react-native-camera-roll/camera-roll': path.resolve(
      __dirname,
      '.dumi/mock/camera-roll.js'
    ),
    'react-native-vision-camera': path.resolve(__dirname, '.dumi/mock/camera.js')
  },
  locales: [[version, 'zh-CN']],
  styles: [],
  mode: 'site',
  title: `xrn-ui`,
  favicon: 'https://github.com/hq001/picx-images-hosting/raw/master/安卓-512x512-圆192.4609vtrat.webp',
  logo: 'https://github.com/hq001/picx-images-hosting/raw/master/安卓-512x512-圆192.4609vtrat.webp',
  theme: {
    '@c-primary': '#ff934a',
  },
  plugins: ['./.dumi/plugin.ts'],
  chainWebpack(memo) {
    memo.module
      .rule('js-in-node_modules')
      .use('babel-loader')
      .loader(require.resolve('@umijs/deps/compiled/babel-loader'))
      .tap((options) => {
        options.plugins = (options.plugins || []).concat([
          '@babel/plugin-proposal-class-properties',
          ['@babel/plugin-transform-class-properties', { loose: true }],
        ]);
        return options;
      });
  },
});
