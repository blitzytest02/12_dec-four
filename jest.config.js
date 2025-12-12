/**
 * Jest Configuration for Express.js Application
 * 
 * This configuration file defines the testing environment and coverage settings
 * for the Node.js/Express.js REST API application. It is optimized for backend
 * testing with proper coverage thresholds aligned with industry standards.
 * 
 * @file jest.config.js
 * @description Jest testing framework configuration for Node.js backend testing
 * @see https://jestjs.io/docs/configuration
 */

module.exports = {
  /**
   * Test Environment Configuration
   * 
   * Set to 'node' for backend/server-side JavaScript testing.
   * This ensures that Node.js globals like `process`, `Buffer`, and
   * `__dirname` are available during test execution.
   * 
   * @type {string}
   */
  testEnvironment: 'node',

  /**
   * Coverage Output Directory
   * 
   * Specifies the directory where Jest should output its coverage files.
   * Coverage reports will be generated in HTML, JSON, and LCOV formats.
   * 
   * @type {string}
   */
  coverageDirectory: 'coverage',

  /**
   * Coverage Collection Configuration
   * 
   * Defines which files should be included in coverage analysis.
   * - Includes: All JavaScript files under the src/ directory
   * - Excludes: src/server.js (entry point that only calls listen())
   * 
   * The server.js file is excluded because it only contains the app.listen()
   * call which cannot be meaningfully unit tested without port binding conflicts.
   * 
   * @type {string[]}
   */
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/server.js'
  ],

  /**
   * Coverage Threshold Configuration
   * 
   * Enforces minimum coverage percentages for the codebase.
   * Tests will fail if coverage falls below these thresholds.
   * 
   * Thresholds are set according to industry best practices:
   * - branches: 85% - Ensure most conditional paths are tested
   * - functions: 100% - All route handlers must have test coverage
   * - lines: 90% - High line coverage for production readiness
   * - statements: 90% - Comprehensive statement execution coverage
   * 
   * @type {Object}
   */
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 90,
      statements: 90
    }
  },

  /**
   * Test File Pattern Matching
   * 
   * Specifies glob patterns Jest uses to detect test files.
   * This configuration looks for files matching:
   * - Located in any `tests/` directory (at any depth)
   * - Named with `.test.js` suffix
   * 
   * Examples of matched files:
   * - tests/app.test.js
   * - tests/unit/handlers.test.js
   * - src/tests/integration.test.js
   * 
   * @type {string[]}
   */
  testMatch: [
    '**/tests/**/*.test.js'
  ],

  /**
   * Verbose Output Configuration
   * 
   * When set to true, Jest displays individual test results
   * with the test suite hierarchy. This provides detailed
   * feedback during test execution, making it easier to
   * identify which specific tests pass or fail.
   * 
   * @type {boolean}
   */
  verbose: true
};
