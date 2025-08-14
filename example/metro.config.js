const {mergeConfig, getDefaultConfig} = require('@react-native/metro-config');
const {
  createHarmonyMetroConfig,
} = require('@react-native-oh/react-native-harmony/metro.config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const pak = require('../package.json');

const root = path.resolve(__dirname, '..');
const modules = Object.keys({
  ...pak.peerDependencies,
});
// example项目依赖路径
const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

// 解析example项目之外的依赖
const extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(__dirname, '../node_modules', name);
  return acc;
}, {});

const defaultConfig = {
  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blacklistRE: exclusionList(
      modules.map(
        m => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`),
      ),
    ),

    extraNodeModules: {
      ...extraNodeModules,
      root: `${root}/src/components`,
      _global: `${root}/.dumi/global`,
    },

    nodeModulesPaths,
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    assetPlugins: [require.resolve('./assetPlugin')],
  },
};

module.exports = mergeConfig(
  getDefaultConfig(__dirname),
  createHarmonyMetroConfig({
    reactNativeHarmonyPackageName: '@react-native-oh/react-native-harmony',
  }),
  defaultConfig,
);
