module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@cart': './src/modules/cart',
          '@common': './src/modules/common',
          '@products': './src/modules/products',
        },
      },
    ],
  ],
};
