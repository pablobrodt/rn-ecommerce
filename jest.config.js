module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./.jest/jest-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/modules/cart/store/cart/cart.store.ts',
    '<rootDir>/src/modules/common/services/http/mock/http.service.mock.ts',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.ts',
  },
};
