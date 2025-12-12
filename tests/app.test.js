/**
 * Express Application Test Suite
 * 
 * Comprehensive unit and integration tests for the Express.js REST API endpoints.
 * Uses Jest as the testing framework and Supertest for HTTP assertions.
 * 
 * Test Coverage:
 * - GET / endpoint (Hello World)
 * - GET /evening endpoint (Good Evening)
 * - Error handling (404 for unknown routes)
 * 
 * @file tests/app.test.js
 * @description Jest test suite for Express.js application endpoints
 */

const request = require('supertest');
const app = require('../src/app');

/**
 * Express Application Test Suite
 * 
 * Contains all tests for the Express REST API endpoints including
 * happy path tests, response validation, and error handling tests.
 */
describe('Express Application', () => {
  /**
   * Test Suite: GET / (Hello World Endpoint)
   * 
   * Validates the root endpoint functionality including:
   * - Response body content
   * - HTTP status code
   * - Content-Type header
   */
  describe('GET /', () => {
    /**
     * Test: Response body validation
     * Verifies that GET / returns exact string "Hello world"
     */
    it('should return "Hello world"', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('Hello world');
    });

    /**
     * Test: HTTP status code validation
     * Verifies that GET / returns status 200 OK
     */
    it('should return status 200', async () => {
      const response = await request(app)
        .get('/');
      
      expect(response.status).toBe(200);
    });

    /**
     * Test: Content-Type header validation
     * Verifies that GET / returns correct content type (text/html with charset)
     */
    it('should return correct content type', async () => {
      const response = await request(app)
        .get('/');
      
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  /**
   * Test Suite: GET /evening (Good Evening Endpoint)
   * 
   * Validates the evening endpoint functionality including:
   * - Response body content
   * - HTTP status code
   * - Content-Type header
   */
  describe('GET /evening', () => {
    /**
     * Test: Response body validation
     * Verifies that GET /evening returns exact string "Good evening"
     */
    it('should return "Good evening"', async () => {
      const response = await request(app)
        .get('/evening')
        .expect(200);
      
      expect(response.text).toBe('Good evening');
    });

    /**
     * Test: HTTP status code validation
     * Verifies that GET /evening returns status 200 OK
     */
    it('should return status 200', async () => {
      const response = await request(app)
        .get('/evening');
      
      expect(response.status).toBe(200);
    });

    /**
     * Test: Content-Type header validation
     * Verifies that GET /evening returns correct content type (text/html with charset)
     */
    it('should return correct content type', async () => {
      const response = await request(app)
        .get('/evening');
      
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  /**
   * Test Suite: Error Handling
   * 
   * Validates error handling behavior including:
   * - 404 responses for unknown routes
   */
  describe('Error Handling', () => {
    /**
     * Test: 404 response for unknown routes
     * Verifies that requests to undefined routes return 404 Not Found
     */
    it('should return 404 for unknown routes', async () => {
      const response = await request(app)
        .get('/nonexistent');
      
      expect(response.status).toBe(404);
    });

    /**
     * Test: 404 response for another invalid route
     * Verifies consistent 404 handling across different invalid paths
     */
    it('should return 404 for another unknown route', async () => {
      const response = await request(app)
        .get('/unknown/path');
      
      expect(response.status).toBe(404);
    });
  });

  /**
   * Test Suite: Module Export Validation
   * 
   * Validates that the app module is properly exported and structured
   */
  describe('Module Export', () => {
    /**
     * Test: App instance type validation
     * Verifies that the exported app is a valid Express instance
     */
    it('should export a valid Express app instance', () => {
      expect(app).toBeDefined();
      expect(typeof app).toBe('function');
    });

    /**
     * Test: Express methods availability
     * Verifies that standard Express methods are available on the app instance
     */
    it('should have Express routing methods', () => {
      expect(typeof app.get).toBe('function');
      expect(typeof app.post).toBe('function');
      expect(typeof app.use).toBe('function');
    });
  });
});
