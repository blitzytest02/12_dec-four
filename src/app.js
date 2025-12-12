/**
 * Express.js Application Instance
 * 
 * This file contains the core Express application with route handlers for the REST API.
 * The app is exported WITHOUT calling listen() to enable Supertest injection for testing.
 * 
 * Routes:
 * - GET /         - Returns 'Hello world'
 * - GET /evening  - Returns 'Good evening'
 * 
 * @module src/app
 */

const express = require('express');

/**
 * Express application instance
 * Provides the core Express app with configured routes and middleware support.
 * 
 * Exposed methods include:
 * - get(), post(), put(), delete() - HTTP method routing
 * - use() - Middleware registration
 * - listen() - Start HTTP server (called in server.js, NOT here)
 * - set(), enable(), disable() - Application settings
 */
const app = express();

/**
 * Root endpoint handler
 * 
 * @route GET /
 * @returns {string} 'Hello world' with Content-Type text/html
 * @example
 * // Request: GET /
 * // Response: 200 OK
 * // Body: Hello world
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Evening endpoint handler
 * 
 * @route GET /evening
 * @returns {string} 'Good evening' with Content-Type text/html
 * @example
 * // Request: GET /evening
 * // Response: 200 OK
 * // Body: Good evening
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Export the Express app instance for use by:
 * - server.js (to call app.listen() and start the HTTP server)
 * - Test files (to inject into Supertest without port binding conflicts)
 * 
 * IMPORTANT: Do NOT call app.listen() in this file.
 * The separation of app configuration from server startup enables:
 * - Clean testing via Supertest injection
 * - Independence from port binding during tests
 * - Proper dependency injection patterns
 */
module.exports = app;
