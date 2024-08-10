module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@common': './src/modules/common',
          '@products': './src/modules/products',
        },
      },
    ],
  ],
};
