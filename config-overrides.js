const rewireAliases = require('react-app-rewire-aliases');
const {alias, configPaths} = require('react-app-rewire-alias');

const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@assets': path.resolve(__dirname, `./src/assets/`),
    '@components': path.resolve(__dirname, `./src/components/`),
    '@constants': path.resolve(__dirname, `./src/constants/`),
    '@navigation': path.resolve(__dirname, `./src/navigation/`),
    '@pages': path.resolve(__dirname, `./src/pages/`),
    '@utils': path.resolve(__dirname, `./src/utils/`),
    '@styles': path.resolve(__dirname, `./src/styles/`),
  })(config, env);
  config.resolve.alias['victory-native'] = 'victory';
  config.resolve.alias['react-native-linear-gradient'] =
    'react-native-web-linear-gradient';
  config.resolve.alias['react-native-image-picker'] =
    'react-native-everywhere-image-picker';
  return alias(configPaths('./tsconfig.paths.json'))(config);
};
