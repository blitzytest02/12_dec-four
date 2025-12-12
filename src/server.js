/**
 * Server Entry Point
 * 
 * This file is the main entry point for the Express.js application.
 * It imports the Express app instance from app.js and starts the HTTP server.
 * 
 * The separation of app configuration (app.js) from server startup (this file)
 * enables Supertest to inject the app for testing without port binding conflicts.
 * 
 * @file src/server.js
 * @description Server entry point that starts the HTTP server
 */

const app = require('./app');

/**
 * Server port configuration
 * Uses environment variable PORT if available, otherwise defaults to 3000
 * @constant {number}
 */
const PORT = process.env.PORT || 3000;

/**
 * Start the HTTP server
 * 
 * Binds the Express application to the specified port and begins
 * accepting incoming connections. Logs a message when the server
 * is ready to receive requests.
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
