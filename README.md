# Express Hello World Server

A Node.js/Express.js tutorial server application demonstrating a simple REST API with two HTTP endpoints. This project serves as an educational example for learning Node.js server development, including comprehensive testing with Jest and Supertest.

## Features

- Simple Express.js REST API server
- Two HTTP GET endpoints with text responses
- Comprehensive test suite using Jest and Supertest
- Code coverage reporting
- Clean separation of app and server for testability

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (20.x LTS recommended)
- **npm**: Version 9.x or higher (included with Node.js)

To verify your Node.js installation:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd 12_dec-four
```

2. Install dependencies:

```bash
npm install
```

This will install all required dependencies including:
- **express** (5.2.1): Web framework for Node.js
- **jest** (30.2.0): Testing framework (dev dependency)
- **supertest** (7.1.4): HTTP assertions library (dev dependency)

## Running the Server

Start the server with the following command:

```bash
npm start
```

The server will start on port 3000. You can access the endpoints at:
- http://localhost:3000/ - Returns "Hello world"
- http://localhost:3000/evening - Returns "Good evening"

## Testing

This project uses Jest as the testing framework with Supertest for HTTP endpoint testing.

### Run All Tests

Execute the complete test suite:

```bash
npm test
```

### Run Tests with Coverage Report

Generate a code coverage report while running tests:

```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in a browser to view the detailed HTML report.

### Run Tests in Watch Mode

For development, run tests in watch mode to automatically re-run tests when files change:

```bash
npm run test:watch
```

### Test Coverage Targets

The project aims to meet the following coverage thresholds:
- **Lines**: ≥90%
- **Branches**: ≥85%
- **Functions**: 100%
- **Statements**: ≥90%

## Endpoints

### GET /

Returns a "Hello world" greeting message.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
- **Status Code**: 200 OK
- **Content-Type**: text/html
- **Body**: `Hello world`

### GET /evening

Returns a "Good evening" greeting message.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
- **Status Code**: 200 OK
- **Content-Type**: text/html
- **Body**: `Good evening`

### Error Handling

For undefined routes, the server returns a 404 Not Found response.

**Example:**
```bash
curl http://localhost:3000/nonexistent
```

**Response:**
- **Status Code**: 404 Not Found

## Project Structure

```
12_dec-four/
├── src/
│   ├── app.js          # Express application (exportable for testing)
│   └── server.js       # Server entry point (handles port binding)
├── tests/
│   └── app.test.js     # Endpoint test suite
├── coverage/           # Generated coverage reports (gitignored)
├── node_modules/       # Dependencies (gitignored)
├── package.json        # Project configuration and dependencies
├── jest.config.js      # Jest testing configuration
└── README.md           # Project documentation
```

### Key Files

| File | Description |
|------|-------------|
| `src/app.js` | Express application with route definitions. Exports the app instance without calling `listen()` to enable testing. |
| `src/server.js` | Server entry point that imports the app and starts listening on port 3000. |
| `tests/app.test.js` | Comprehensive test suite covering all endpoints and error handling. |
| `package.json` | Project metadata, dependencies, and npm scripts. |
| `jest.config.js` | Jest configuration for Node.js testing environment. |

## Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `npm start` | Start the production server |
| `test` | `npm test` | Run the test suite |
| `test:coverage` | `npm run test:coverage` | Run tests with coverage report |
| `test:watch` | `npm run test:watch` | Run tests in watch mode |

## Architecture Notes

### Separation of App and Server

The application follows a testable architecture pattern where:

1. **`src/app.js`**: Contains the Express application configuration and route definitions. It exports the `app` instance without calling `app.listen()`.

2. **`src/server.js`**: Imports the app from `app.js` and calls `app.listen()` to start the server.

This separation allows Supertest to inject the Express app directly without binding to a port, enabling fast and isolated HTTP testing without port conflicts.

## License

This project is created for educational purposes.
