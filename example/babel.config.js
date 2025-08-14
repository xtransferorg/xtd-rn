module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@xrnjs/ui': '../src',
          '@xt/react-icon/dist/react-native':
            './node_modules/@xt/react-icon/dist/react-native',
        },
      },
    ],
  ],
};
