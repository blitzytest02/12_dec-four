# Technical Specification

# 0. Agent Action Plan

## 0.1 Intent Clarification

Based on the provided requirements, the Blitzy platform understands that the testing objective is to **add comprehensive unit and integration tests** for a new Node.js/Express.js server application with two HTTP endpoints.

### 0.1.1 Core Testing Objective

**Request Category:** Add new tests (greenfield testing implementation)

Based on the user's requirements to add Express.js and create endpoints returning "Hello world" and "Good evening", the Blitzy platform interprets the following testing requirements:

- **Primary Objective:** Establish a complete testing infrastructure for a new Express.js REST API
- **Test Type Classification:** Unit tests for endpoint handlers + Integration tests for HTTP request/response validation
- **Test Framework Selection:** Jest (industry-standard JavaScript testing framework) with Supertest (HTTP assertion library)

**Explicit Testing Requirements:**
- Verify the "Hello world" endpoint returns the expected response
- Verify the "Good evening" endpoint returns the expected response
- Ensure both endpoints respond with correct HTTP status codes (200 OK)
- Validate response content-type and body format

**Implicit Testing Needs (surfaced by analysis):**
- Edge case testing: Empty paths, malformed requests
- Error handling: Invalid routes (404), server errors (500)
- Response format validation: Content-Type headers
- Server lifecycle: Application startup and graceful shutdown

### 0.1.2 Special Instructions and Constraints

**Critical Directives Captured:**
- This is a tutorial-style Node.js server project
- Express.js must be added as a new dependency
- Existing functionality (if any) should be preserved
- Follow Node.js/Express.js testing conventions

**Testing Requirements:**
- Use Jest as the testing framework (aligns with JavaScript ecosystem standards)
- Use Supertest for HTTP endpoint testing (recommended for Express.js applications)
- Follow the repository's anticipated test conventions (new project, so we establish patterns)

**Web Search Requirements:**
- ✓ Verified Express.js latest version: 5.2.1 (requires Node.js 18+)
- ✓ Verified Jest latest version: 30.2.0
- ✓ Verified Supertest latest version: 7.1.4
- ✓ Researched Express.js testing best practices with Jest and Supertest

### 0.1.3 Technical Interpretation

These testing requirements translate to the following technical test implementation strategy:

| Requirement | Technical Implementation |
|-------------|-------------------------|
| Test "Hello world" endpoint | Create unit test using Supertest to GET the root endpoint and assert response body equals "Hello world" |
| Test "Good evening" endpoint | Create unit test using Supertest to GET the second endpoint and assert response body equals "Good evening" |
| Validate HTTP responses | Use Supertest's `.expect()` chain to verify status codes and content types |
| Test isolation | Export Express app separately from server startup to enable Supertest injection |
| Establish test patterns | Create test file structure following Jest conventions (`__tests__/` or `*.test.js`) |

**Implementation Actions:**
- To test the "Hello world" endpoint, we will **create** `tests/app.test.js` with GET request validation
- To test the "Good evening" endpoint, we will **extend** the same test file with additional test cases
- To enable testing without port binding, we will **structure** the app to export the Express instance separately

### 0.1.4 Coverage Requirements Interpretation

**Explicit Coverage Targets:** None specified by user

**Implicit Coverage Expectations Based on Best Practices:**
- Industry standard for Node.js APIs: 80% minimum line coverage
- Express.js endpoint testing: 100% route handler coverage for defined endpoints
- Critical path analysis: Both endpoint responses are critical paths requiring full test coverage

**To achieve comprehensive testing, coverage should include:**
- All route handlers (2 endpoints: "Hello world" and "Good evening")
- HTTP status code validation for success cases
- Response body validation for correct content
- Error handling for undefined routes (404 responses)
- Server initialization and configuration

## 0.2 Test Discovery and Analysis

### 0.2.1 Existing Test Infrastructure Assessment

**Repository Analysis Results:**

Based on comprehensive repository analysis, this is a **greenfield project** with the following characteristics:

| Aspect | Finding |
|--------|---------|
| Repository Contents | Only `README.md` exists (contains header "# 12_dec-four") |
| Existing Test Files | None |
| Package Configuration | No `package.json` present |
| Test Framework | None configured |
| Test Configuration | No test config files found |
| Coverage Tools | None present |
| Mock Libraries | None present |
| Test Fixtures | None present |

**Search Patterns Employed:**
- Searched for test files: `*test*`, `*spec*`, `test_*`, `spec_*`, `*_test.*`, `*_spec.*` - **None found**
- Searched for package files: `package.json`, `package-lock.json`, `yarn.lock` - **None found**
- Searched for test config: `jest.config.*`, `.jestrc`, `jest.setup.js` - **None found**
- Searched for Node.js files: `*.js`, `*.mjs`, `*.cjs` - **None found**

**Repository Analysis Conclusion:** "Repository analysis reveals a greenfield project with no existing test infrastructure. A complete testing setup must be established from scratch, including test framework installation, configuration, and test file creation."

### 0.2.2 Current Testing Framework Status

| Component | Status | Required Action |
|-----------|--------|-----------------|
| Testing Framework | Not installed | Install Jest 30.2.0 |
| Test Runner | Not configured | Configure Jest in package.json |
| Coverage Tools | Not present | Add Jest's built-in coverage |
| Mock/Stub Libraries | Not present | Supertest provides mocking for HTTP |
| Test Data Fixtures | Not present | Create minimal fixtures as needed |
| HTTP Testing | Not present | Install Supertest 7.1.4 |

### 0.2.3 Web Search Research Conducted

**Research Topics and Findings:**

**1. Express.js 5.x Testing Patterns:**
- Express 5.2.1 is the latest stable version (released December 2025)
- Requires Node.js 18 or higher
- Native async/await support in middleware simplifies testing
- Recommended pattern: Export app instance without calling `listen()` for testability

**2. Jest Best Practices for Node.js:**
- Jest 30.2.0 is the latest version
- Built-in coverage reporting with `--coverage` flag
- Test environment should be set to `node` for backend testing
- Use `describe()` and `it()`/`test()` blocks for organization

**3. Supertest Mocking Strategies:**
- Supertest 7.1.4 is the latest version
- Directly accepts Express app instances without port binding
- Chain `.expect()` methods for assertions
- Works seamlessly with Jest's async/await patterns

**4. Test Organization Conventions:**
- Recommended file naming: `*.test.js` or `*.spec.js`
- Location options: `__tests__/` directory or co-located with source
- For small projects: Single test file is acceptable
- Configuration in `package.json` or separate `jest.config.js`

**5. Common Pitfalls to Avoid:**
- Starting server with `listen()` in test files (causes port conflicts)
- Missing `testEnvironment: 'node'` in Jest config
- Not properly awaiting async test assertions
- Not cleaning up after tests (though minimal concern for stateless endpoints)

## 0.3 Testing Scope Analysis

### 0.3.1 Test Target Identification

**Primary Code to be Tested:**

| Module/Component | Path (To Be Created) | Test Type Required |
|------------------|----------------------|-------------------|
| Express Application | `src/app.js` | Unit + Integration |
| Hello World Handler | `src/app.js` (inline) | Unit Test |
| Good Evening Handler | `src/app.js` (inline) | Unit Test |
| Server Entry Point | `src/server.js` | Not directly tested |

**Functions Requiring Tests:**

| Function/Handler | Test Categories |
|------------------|-----------------|
| GET `/` (Hello World) | Response body, status code, content-type |
| GET `/evening` (Good Evening) | Response body, status code, content-type |
| 404 Handler (implicit) | Invalid route handling |

**Existing Test File Mapping:**

| Source File | Existing Test File | Test Categories Present |
|-------------|-------------------|------------------------|
| `src/app.js` (to be created) | None | None - must create |

**Dependencies Requiring Mocking:**
- **External services to mock:** None (stateless endpoints)
- **Database interactions to stub:** None (no database)
- **File system operations to virtualize:** None (no file I/O)

*Note: The application is intentionally simple with no external dependencies, making testing straightforward.*

### 0.3.2 Version Compatibility Research

**CRITICAL: Verified compatible versions for Node.js 20.x LTS:**

Based on web search verification and npm registry data, the recommended testing stack is:

| Component | Package | Version | Compatibility Rationale |
|-----------|---------|---------|------------------------|
| Runtime | Node.js | ≥18.x (recommend 20.x LTS) | Required by Express 5.x |
| Framework | Express | 5.2.1 | Latest stable, requires Node 18+ |
| Testing Framework | Jest | 30.2.0 | Latest stable, full Node.js support |
| HTTP Assertions | Supertest | 7.1.4 | Latest stable, Express compatible |
| Assertion Library | Built-in Jest | (included) | `expect()` API included |
| Coverage Tool | Jest Built-in | (included) | `--coverage` flag |

**Version Conflict Analysis:**
- No conflicts detected between recommended versions
- Express 5.x and Jest 30.x both support modern ECMAScript features
- Supertest 7.x is actively maintained and compatible with current Express

### 0.3.3 Test Structure Design

**Recommended Test Architecture:**

```
project-root/
├── src/
│   ├── app.js          # Express app (exportable)
│   └── server.js       # Server startup (calls listen())
├── tests/
│   └── app.test.js     # All endpoint tests
├── package.json        # Dependencies + Jest config
└── jest.config.js      # Optional separate config
```

**Rationale for Structure:**
- **Separation of app and server:** Enables Supertest to inject the app without port binding
- **Single test file:** Appropriate for a simple two-endpoint application
- **`tests/` directory:** Clear separation of test code from source code

## 0.4 Test Implementation Design

### 0.4.1 Test Strategy Selection

**Test Types to Implement:**

| Test Type | Focus Areas | Priority |
|-----------|-------------|----------|
| Unit Tests | Individual endpoint handlers | High |
| Integration Tests | Full HTTP request/response cycle | High |
| Edge Case Tests | Invalid routes, malformed requests | Medium |
| Error Handling Tests | 404 responses, error scenarios | Medium |

**Unit Tests Focus:**
- Isolated testing of each endpoint's response
- Verify exact response body content
- Validate HTTP status codes

**Integration Tests Coverage:**
- Complete request/response flow through Express
- Content-Type header validation
- Response timing (implicit via Supertest)

**Edge Cases to Address:**
- Request to undefined routes (expect 404)
- Case sensitivity of route paths
- Trailing slashes in URLs

**Error Cases to Verify:**
- Invalid HTTP methods on endpoints (POST, PUT, DELETE)
- Non-existent routes return proper 404

### 0.4.2 Test Case Blueprint

**Component: Hello World Endpoint (`GET /`)**

```
Test Categories:
- Happy path: GET / returns "Hello world" with 200 status
- Response validation: Content-Type is text/html or text/plain
- Edge cases: Trailing slash handling (GET / vs GET //)
- Error cases: POST / should return 404 or 405
```

**Component: Good Evening Endpoint (`GET /evening`)**

```
Test Categories:
- Happy path: GET /evening returns "Good evening" with 200 status
- Response validation: Content-Type is text/html or text/plain
- Edge cases: Case sensitivity (/evening vs /Evening)
- Error cases: DELETE /evening should return 404 or 405
```

**Component: Error Handling (404 Routes)**

```
Test Categories:
- Invalid routes: GET /nonexistent returns 404
- Error response format validation
```

### 0.4.3 Existing Test Extension Strategy

**Since this is a greenfield project, all tests will be newly created:**

| Action | Description |
|--------|-------------|
| Create | `tests/app.test.js` - Main test file with all endpoint tests |
| Create | Jest configuration in `package.json` |
| Create | Test scripts in `package.json` (`test`, `test:coverage`) |

### 0.4.4 Test Data and Fixtures Design

**Required Test Data Structures:**
- None required (stateless endpoints with no input data)

**Fixture Organization Strategy:**
- No fixtures needed for this simple application
- Response expectations defined inline in test cases

**Mock Object Specifications:**
- No mocks required (Supertest handles HTTP simulation)

**Test Database/State Management:**
- Not applicable (no database or persistent state)

### 0.4.5 Sample Test Implementation Pattern

**Recommended Test Pattern for Express.js with Supertest:**

```javascript
const request = require('supertest');
const app = require('../src/app');

describe('Express Endpoints', () => {
  describe('GET /', () => {
    it('returns Hello world', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      expect(response.text).toBe('Hello world');
    });
  });
});
```

**Key Patterns:**
- Import app without server listening
- Use `async/await` for clean test syntax
- Chain `.expect()` for status assertions
- Use Jest's `expect()` for body validation

## 0.5 Test File Transformation Mapping

### 0.5.1 File-by-File Test Plan

**CRITICAL: Complete mapping of all test files to be created, updated, or deleted:**

| Target Test File | Transformation | Source File/Reference | Purpose/Changes |
|-----------------|----------------|----------------------|-----------------|
| `tests/app.test.js` | CREATE | `src/app.js` | Main test file covering all Express endpoints including "Hello world" and "Good evening" routes |
| `package.json` | CREATE | N/A | Project configuration with Jest, test scripts, and dependencies |
| `jest.config.js` | CREATE | N/A | Jest configuration for Node.js testing environment |

### 0.5.2 New Test Files Detail

**tests/app.test.js** - Comprehensive endpoint test coverage

| Test Category | Description |
|---------------|-------------|
| Happy Path | Verify correct responses for both endpoints |
| Edge Cases | Handle trailing slashes, case sensitivity |
| Error Cases | Invalid routes return 404 |

**Test Methods to Implement:**

| Test Method | Description |
|-------------|-------------|
| `should return "Hello world" for GET /` | Validates root endpoint response |
| `should return 200 status for GET /` | Validates root endpoint status code |
| `should return "Good evening" for GET /evening` | Validates evening endpoint response |
| `should return 200 status for GET /evening` | Validates evening endpoint status code |
| `should return 404 for unknown routes` | Validates error handling |

**Mock Dependencies:** None required

**Assertions Focus:**
- Response body exact match
- HTTP status code verification
- Proper request handling

### 0.5.3 Test Configuration Updates

**package.json Configuration:**

```json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "node",
    "coverageDirectory": "coverage",
    "collectCoverageFrom": ["src/**/*.js"]
  }
}
```

**jest.config.js (Alternative):**

| Setting | Value | Purpose |
|---------|-------|---------|
| `testEnvironment` | `"node"` | Backend testing mode |
| `coverageDirectory` | `"coverage"` | Coverage output location |
| `testMatch` | `["**/tests/**/*.test.js"]` | Test file pattern |
| `verbose` | `true` | Detailed test output |

### 0.5.4 Cross-File Test Dependencies

**Shared Fixtures:** None required

**Mock Objects:** None required (Supertest provides HTTP mocking)

**Test Utilities:**
- Supertest's `request()` function
- Jest's built-in `expect()` assertions

**Import Updates Required:**

| File | Import Statement |
|------|-----------------|
| `tests/app.test.js` | `const request = require('supertest');` |
| `tests/app.test.js` | `const app = require('../src/app');` |

### 0.5.5 Complete Test File Inventory

**All test files expected to be in scope:**

| File Path | Type | Purpose |
|-----------|------|---------|
| `tests/app.test.js` | Test Suite | All endpoint tests |
| `package.json` | Configuration | Jest configuration and scripts |
| `jest.config.js` | Configuration | Optional detailed Jest settings |

**No additional test files pending or to be discovered.**

### 0.5.6 Source Code Structure Requirements

**For tests to function, source code must follow this pattern:**

**src/app.js (testable export):**
```javascript
const express = require('express');
const app = express();
// Routes defined here
module.exports = app;
```

**src/server.js (entry point):**
```javascript
const app = require('./app');
app.listen(3000);
```

**Rationale:** This separation allows Supertest to import `app.js` without triggering `listen()`, enabling port-free testing.

## 0.6 Dependency Inventory

### 0.6.1 Testing Dependencies

**All key testing packages relevant to this testing exercise:**

| Registry | Package Name | Version | Purpose |
|----------|--------------|---------|---------|
| npm | jest | 30.2.0 | Testing framework - provides test runner, assertions, and coverage |
| npm | supertest | 7.1.4 | HTTP assertions library for testing Express endpoints |

### 0.6.2 Runtime Dependencies

**Production dependencies required for the application to function:**

| Registry | Package Name | Version | Purpose |
|----------|--------------|---------|---------|
| npm | express | 5.2.1 | Web framework for Node.js REST API |

### 0.6.3 Development Dependencies

**Complete development dependency list:**

| Registry | Package Name | Version | Category |
|----------|--------------|---------|----------|
| npm | jest | 30.2.0 | Testing Framework |
| npm | supertest | 7.1.4 | HTTP Testing |

### 0.6.4 Node.js Runtime Requirement

| Requirement | Version | Rationale |
|-------------|---------|-----------|
| Node.js | ≥18.x (recommend 20.x LTS) | Required by Express 5.x; LTS provides stability |
| npm | ≥9.x | Included with Node.js 20.x |

### 0.6.5 Package Installation Commands

**Initialize project and install all dependencies:**

```bash
npm init -y
npm install express@5.2.1
npm install --save-dev jest@30.2.0 supertest@7.1.4
```

### 0.6.6 Import Updates

**Test files requiring import statements:**

| File | Required Imports |
|------|-----------------|
| `tests/app.test.js` | `const request = require('supertest');` |
| `tests/app.test.js` | `const app = require('../src/app');` |

**Source files requiring imports:**

| File | Required Imports |
|------|-----------------|
| `src/app.js` | `const express = require('express');` |
| `src/server.js` | `const app = require('./app');` |

### 0.6.7 Package.json Template

**Complete package.json structure:**

```json
{
  "name": "express-hello-world",
  "version": "1.0.0",
  "description": "Node.js Express server tutorial",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "express": "5.2.1"
  },
  "devDependencies": {
    "jest": "30.2.0",
    "supertest": "7.1.4"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 0.6.8 Version Verification Status

| Package | Version | Verified | Source |
|---------|---------|----------|--------|
| express | 5.2.1 | ✓ | npm registry (December 2025) |
| jest | 30.2.0 | ✓ | npm registry (October 2025) |
| supertest | 7.1.4 | ✓ | npm registry (July 2025) |

*All versions have been verified against npm registry data from web search results.*

## 0.7 Coverage and Quality Targets

### 0.7.1 Coverage Metrics

**Current Coverage Status:**
- Current coverage: 0% (no tests exist)
- No prior coverage reports available

**Target Coverage Based on Best Practices:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| Line Coverage | ≥90% | Industry standard for small applications |
| Branch Coverage | ≥85% | Cover conditional logic paths |
| Function Coverage | 100% | All route handlers must be tested |
| Statement Coverage | ≥90% | Comprehensive execution |

**Coverage Gaps to Address:**

| Component | Current | Target | Focus Areas |
|-----------|---------|--------|-------------|
| Root endpoint (`GET /`) | 0% | 100% | Response body, status code |
| Evening endpoint (`GET /evening`) | 0% | 100% | Response body, status code |
| Error handling (404) | 0% | 100% | Invalid route responses |

**Per-File Coverage Targets:**

| File | Target Coverage | Critical Paths |
|------|-----------------|----------------|
| `src/app.js` | 100% | Both route handlers fully tested |

### 0.7.2 Test Quality Criteria

**Assertion Density Expectations:**
- Minimum 2 assertions per test case (status code + response body)
- Each endpoint should have at least 3 test cases

**Test Isolation Requirements:**
- Each test must be independent and not rely on other tests
- No shared state between test cases
- Tests should be runnable in any order

**Performance Constraints:**
- Total test suite execution: < 5 seconds
- Individual test timeout: 5000ms (Jest default)
- No long-running operations in tests

**Maintainability Standards:**
- Clear, descriptive test names using `describe`/`it` pattern
- Single assertion concept per test when practical
- Minimal test setup/teardown complexity

**Repository Test Patterns:**
- Follow Jest conventions for file naming (`*.test.js`)
- Use `describe` blocks to group related tests
- Use `async/await` for asynchronous operations
- Avoid callbacks where promises are available

### 0.7.3 Test Organization Standards

**Recommended Test Structure:**

```
describe('Express Application', () => {
  describe('GET /', () => {
    it('should return "Hello world"', async () => {...});
    it('should return status 200', async () => {...});
  });
  
  describe('GET /evening', () => {
    it('should return "Good evening"', async () => {...});
    it('should return status 200', async () => {...});
  });
  
  describe('Error Handling', () => {
    it('should return 404 for unknown routes', async () => {...});
  });
});
```

### 0.7.4 Quality Gates

**Minimum Requirements for Test Suite Acceptance:**

| Quality Gate | Threshold | Enforcement |
|--------------|-----------|-------------|
| All tests passing | 100% | CI/CD blocking |
| Line coverage | ≥90% | Coverage report |
| No skipped tests | 0 skipped | Test runner validation |
| No test warnings | 0 warnings | Jest strict mode |

### 0.7.5 Continuous Improvement Metrics

**Metrics to Track Over Time:**
- Test execution time trends
- Coverage percentage changes
- Test failure rates
- Flaky test identification

## 0.8 Scope Boundaries

### 0.8.1 Exhaustively In Scope

**New Test Files (with patterns):**

| Pattern | Description |
|---------|-------------|
| `tests/*.test.js` | All unit test files |
| `tests/app.test.js` | Main endpoint test suite |

**Test File Updates:**
- Not applicable (greenfield project - all files are new)

**Test Configuration Files:**

| File | Purpose |
|------|---------|
| `package.json` | Jest configuration, test scripts, dependencies |
| `jest.config.js` | Detailed Jest settings (optional) |

**Test Utilities and Helpers:**
- Supertest's `request()` function (provided by package)
- Jest's `expect()` assertions (provided by package)

**Documentation Updates:**

| File | Updates Required |
|------|-----------------|
| `README.md` | Add testing section with instructions |

**Source Files Required for Testing:**

| File | Purpose |
|------|---------|
| `src/app.js` | Express application (exportable for testing) |
| `src/server.js` | Server entry point (imports app) |

### 0.8.2 Explicitly Out of Scope

**Items NOT included in this testing scope:**

| Category | Exclusion | Rationale |
|----------|-----------|-----------|
| Performance Testing | Load testing, stress testing | Not requested; simple tutorial |
| Security Testing | Penetration testing, OWASP checks | Beyond tutorial scope |
| E2E Browser Testing | Selenium, Puppeteer | No frontend/UI present |
| Database Testing | Database integration tests | No database in application |
| Authentication Testing | Auth flows, JWT validation | No authentication required |
| CI/CD Pipeline Setup | GitHub Actions, Jenkins | Infrastructure beyond test scope |
| Containerization | Docker test environments | Not requested |
| Mock Service Workers | MSW for external API mocking | No external APIs |

**Source Code Modifications Outside Testing:**
- Business logic changes beyond making code testable
- Feature additions not specified by user
- Refactoring unrelated to testability

**Unrelated Test Files:**
- Any test files for features not specified in requirements
- Performance benchmark scripts
- Load testing configurations

### 0.8.3 Scope Boundary Clarifications

**What IS included:**

```
✓ Unit tests for GET / endpoint
✓ Unit tests for GET /evening endpoint
✓ Integration tests for HTTP request/response
✓ 404 error handling tests
✓ Jest configuration
✓ Test scripts in package.json
✓ Code coverage reporting setup
```

**What is NOT included:**

```
✗ Middleware testing (no middleware defined)
✗ POST/PUT/DELETE endpoint tests (no such endpoints)
✗ Database integration tests (no database)
✗ Authentication/authorization tests (no auth)
✗ Third-party API mocking (no external APIs)
✗ Browser-based testing (no UI)
```

### 0.8.4 Dependency on Source Code Structure

**Testing requires the following source code architecture:**

| Requirement | Description |
|-------------|-------------|
| App Export | `src/app.js` must export Express app instance |
| No Auto-Listen | App file must not call `app.listen()` |
| Separate Server | `src/server.js` handles port binding |

**Example compliant structure:**

```javascript
// src/app.js - MUST export without listening
const app = express();
app.get('/', (req, res) => res.send('Hello world'));
module.exports = app; // Export for testing

// src/server.js - Handles actual listening
const app = require('./app');
app.listen(3000);
```

This structure enables Supertest to inject the app without port conflicts.

## 0.9 Execution Parameters

### 0.9.1 Testing-Specific Instructions

**Test Execution Commands:**

| Command | Purpose |
|---------|---------|
| `npm test` | Run all tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:watch` | Run tests in watch mode (development) |

**Coverage Measurement Command:**
```bash
npm run test:coverage
# or directly:
npx jest --coverage
```

**Watch Mode Command (Development):**
```bash
npm run test:watch
# or directly:
npx jest --watch
```

**Single Test Execution Pattern:**
```bash
# Run specific test file
npx jest tests/app.test.js

#### Run tests matching pattern
npx jest --testNamePattern="Hello world"
```

**Debug Mode Execution:**
```bash
# With Node.js inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

### 0.9.2 Environment Setup Requirements

**Node.js Environment:**

| Requirement | Value |
|-------------|-------|
| Node.js Version | ≥18.x (recommend 20.x LTS) |
| npm Version | ≥9.x |
| Test Environment | `node` (configured in Jest) |

**Environment Variables:**
- `NODE_ENV=test` (automatically set by Jest)
- No additional environment variables required

**Pre-Test Setup Steps:**

```bash
# 1. Ensure Node.js 18+ is installed
node --version

##### 2. Install dependencies
npm install

##### 3. Verify Jest is available
npx jest --version
```

### 0.9.3 Test Configuration Details

**Jest Configuration (package.json):**

```json
{
  "jest": {
    "testEnvironment": "node",
    "coverageDirectory": "coverage",
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/server.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 85,
        "functions": 100,
        "lines": 90,
        "statements": 90
      }
    },
    "testMatch": [
      "**/tests/**/*.test.js"
    ],
    "verbose": true
  }
}
```

### 0.9.4 Test Script Definitions

**package.json scripts section:**

```json
{
  "scripts": {
    "start": "node src/server.js",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage --reporters=default"
  }
}
```

| Script | Purpose | CI/CD Compatible |
|--------|---------|------------------|
| `test` | Standard test run | Yes |
| `test:coverage` | With coverage report | Yes |
| `test:watch` | Interactive development | No (interactive) |
| `test:ci` | CI/CD optimized run | Yes |

### 0.9.5 Test Patterns to Follow

**File Naming Convention:**
- Test files: `*.test.js`
- Location: `tests/` directory

**Test Structure Convention:**

```javascript
describe('Component/Feature Name', () => {
  describe('Method/Endpoint', () => {
    it('should [expected behavior]', async () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

**Assertion Patterns:**

```javascript
// Supertest assertions (chained)
.expect(200)
.expect('Content-Type', /text/)

// Jest assertions
expect(response.text).toBe('Hello world');
expect(response.status).toBe(200);
```

### 0.9.6 Excluded Test Categories

**Per user instruction (none specified), no test categories are explicitly excluded.**

All test types appropriate for this application are in scope:
- Unit tests ✓
- Integration tests ✓
- Error handling tests ✓

## 0.10 Special Instructions

### 0.10.1 Testing-Specific Requirements

**User-Emphasized Requirements:**

- **Tutorial Context:** This is described as a tutorial project for Node.js server hosting
- **Framework Addition:** Express.js must be added to the project (not currently present)
- **Endpoint Requirements:** Two specific endpoints with exact response text:
  - Endpoint 1: Returns "Hello world"
  - Endpoint 2: Returns "Good evening"

### 0.10.2 Implementation Guidelines

**Minimal Change Principle:**
- Focus on creating tests for the specified endpoints only
- Do not add tests for functionality not described by the user
- Keep the test suite lean and focused on validation requirements

**Source Code Structure for Testability:**
- Express app MUST be exported without calling `listen()`
- Server startup MUST be in a separate file
- This enables Supertest to inject the app without port conflicts

**Follow Existing Patterns:**
- No existing patterns to follow (greenfield project)
- Establish clear, maintainable patterns for future development
- Use industry-standard Jest/Supertest conventions

### 0.10.3 Test Isolation Guidelines

**Maintain Test Isolation Using:**
- Each test is independent and stateless
- No shared mutable state between tests
- Tests can run in any order without affecting results

**Use Supertest for HTTP Testing:**
- Supertest handles app injection without actual network calls
- No need for complex mocking of HTTP layer
- Direct assertion of response status, headers, and body

### 0.10.4 Ensure Tests Run Independently

**Requirements for Independent Test Execution:**
- No database setup/teardown needed
- No external service dependencies
- Tests complete without human intervention
- All tests run in parallel by default (Jest behavior)

### 0.10.5 Backward Compatibility

**Not applicable for this greenfield project.**

All code and tests are being created from scratch. No backward compatibility concerns exist.

### 0.10.6 Code Style Conformance

**Match Repository Code Style:**
- No existing code style to match (greenfield)
- Recommended: Use consistent JavaScript conventions
- Use clear, descriptive variable and function names
- Follow Jest's recommended test organization patterns

**Naming Conventions:**
- Test files: `[component].test.js`
- Test descriptions: Start with "should" for `it()` blocks
- Describe blocks: Name the component or feature being tested

### 0.10.7 Critical Technical Note

**Tech Spec vs. User Request Deviation:**

The existing Technical Specification documents a Python/Flask backend architecture (sections 3.2, 3.3, 6.6). However, the user's explicit request is for a **Node.js/Express.js** implementation.

**Resolution:** This Agent Action Plan follows the user's explicit requirements (Node.js/Express.js) as stated in their prompt. The user's direct instruction takes precedence over pre-existing spec documentation when they conflict.

| Aspect | Tech Spec (3.2, 3.3) | User Request | This Plan |
|--------|---------------------|--------------|-----------|
| Backend Runtime | Python 3.12+ | Node.js | **Node.js** |
| Web Framework | Flask 3.1.2 | Express.js | **Express.js** |
| Testing Framework | pytest | (not specified) | **Jest** |
| HTTP Testing | pytest-flask | (not specified) | **Supertest** |

### 0.10.8 Summary of All User Directives

| Directive | Status |
|-----------|--------|
| Add Express.js to project | ✓ Addressed in dependency inventory |
| Create "Hello world" endpoint | ✓ Test cases defined |
| Create "Good evening" endpoint | ✓ Test cases defined |
| Tutorial-style implementation | ✓ Simple, educational structure |
| Maintain existing functionality | ✓ No existing functionality to preserve |

