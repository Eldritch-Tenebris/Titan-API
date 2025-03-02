import request from 'supertest';
import app from '../../src/app';
import { User } from '../../src/models/User';

describe('API Integration Tests', () => {
  describe('User Routes', () => {
    const testUser = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'Test123!'
    };

    describe('POST /api/register', () => {
      it('should register a new user', async () => {
        const response = await request(app)
          .post('/api/register')
          .send(testUser);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body.data).toHaveProperty('id');
        expect(response.body.data).not.toHaveProperty('password');
      });

      it('should not register user with existing email', async () => {
        await User.create(testUser);

        const response = await request(app)
          .post('/api/register')
          .send(testUser);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('success', false);
      });
    });

    describe('POST /api/login', () => {
      beforeEach(async () => {
        await User.create(testUser);
      });

      it('should login with valid credentials', async () => {
        const response = await request(app)
          .post('/api/login')
          .send({
            email: testUser.email,
            password: testUser.password
          });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('token');
      });

      it('should not login with invalid credentials', async () => {
        const response = await request(app)
          .post('/api/login')
          .send({
            email: testUser.email,
            password: 'wrongpassword'
          });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('success', false);
      });
    });
  });
});