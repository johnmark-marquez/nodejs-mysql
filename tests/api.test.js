const request = require('supertest');
const app = require('../server.js');

describe('User Management System API tests', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
    }),

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                first_name: 'John Mark',
                last_name: 'Marquez',
                email: 'john@marquez.com',
                phone: '09178056622',
                address: 'Binan, Laguna',
                postcode: '4024',
                username: 'jm@marquez.com',
                password: '12345678'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    }),

    it('should update a user', async () => {
        const res = await request(app)
            .put('/api/users/3')
            .send({
                first_name: 'Mark',
                lastName: 'John',
                email: 'john@mark.com',
                password: 'mark1234'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('user');
    }),
    
    it('should delete a user', async () => {
        const res = await request(app)
            .del('/api/users/3');
        expect(res.statusCode).toEqual(204);
    }),

    it('should delete multiple users', async () => {
        const res = await request(app)
            .del('/api/users')
            .send({
                ids: [1, 2]
            });
        expect(res.statusCode).toEqual(204);
    })

});
