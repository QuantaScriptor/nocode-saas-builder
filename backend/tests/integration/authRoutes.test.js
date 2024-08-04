
/**
 * Title: Auth Routes Test
 * Description: Tests authentication routes for expected functionality.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /tests/integration/authRoutes.test.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                email: 'testuser@example.com',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'testuser@example.com',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
                    