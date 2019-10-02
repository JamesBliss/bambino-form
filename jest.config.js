// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { resolve } = require('path');

module.exports = {
  bail: true,
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // '**/*.{js,jsx}',
    'src/**/*.{js,jsx}',
    '!node_modules/**',
    '!dist/**',
    '!__coverage__/**',
    '!__test__/**',
    '!docs/**'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__coverage__/',
    '/__test__/'
  ],
  coverageDirectory: '__coverage__',
  coverageReporters: ['json', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  testMatch: ['**/__tests__/**/*.spec.+(js)'],
  moduleFileExtensions: ['js', 'jsx']
};