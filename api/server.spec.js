const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    // should return http 200
    it('should return 200 http status code', () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200)
        })
    })

    // it should return json
    it('should return html', async () => {
        const response = await request(server).get('/');

        // to match uses a regular expression to check the value
        expect(response.type).toMatch(/html/i);
    })

    // should return an object with an api property with the value 'up'
    it("should return an object", async () => {
        const response = await request(server).get('/');

        // check properties in object
        expect(response.body).toEqual({});
    })

})