const ignorPatterns =
  '/node_modules/(?!(@react-native|react-native-fs|react-native-permissions|react-native-qrcode-svg|@react-native-camera-roll|react-native|react-native-swipe-gestures|react-native-linear-gradient|react-native-popover-view|react-native-image-zoom-viewer|react-native-image-pan-zoom|react-native-document-picker|react-native-image-picker)/)';
module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/lib'],
  transformIgnorePatterns: [ignorPatterns],
  setupFiles: [
    './setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
