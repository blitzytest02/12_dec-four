module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/server.js'
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 90,
      statements: 90
    }
  },
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  verbose: true
};
