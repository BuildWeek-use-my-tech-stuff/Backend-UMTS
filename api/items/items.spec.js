const request = require('supertest');

const server = require('../server');
const Items = require('./items-model');


describe("items router", () => {
    test('should return 200 http status', async () => {
        const response = await request(server).get('/items')

        expect(response.type).toMatch(/html/i);
    })

    test('If no token in local storage for getting items', async () => {
        const response = await request(server).get('/api/items')

        expect(response.body).toStrictEqual({"message": "No token provided"})
    })
})