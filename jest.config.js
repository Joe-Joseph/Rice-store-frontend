/* eslint-disable no-undef */
module.exports = {
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: [
      '**/src/**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
      '!**/dist/**',
      '!**/webpack.config.js',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['jest-canvas-mock', 'jest-localstorage-mock'],
  };