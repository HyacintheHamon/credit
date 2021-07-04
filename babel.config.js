module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@assets': 'credit/src/assets',
          '@components': 'credit/src/components',
          '@constants': 'credit/src/constants',
          '@navigation': 'credit/src/navigation',
          '@pages': 'credit/src/pages',
          '@utils': 'credit/src/utils',
          '@styles': 'credit/src/styles',
        },
      },
    ],
  ],
};
