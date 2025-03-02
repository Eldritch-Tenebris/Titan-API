import request from 'supertest';
import app from '../../src/app';

describe('GET /api', () => {
    it('should return a 200 status and a welcome message', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Welcome to the API!' });
    });
});

// Adicione mais testes unitários conforme necessário