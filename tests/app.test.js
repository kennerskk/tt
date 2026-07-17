const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db');

jest.mock('../src/db', () => ({
  query: jest.fn(),
}));

describe('Items API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /items - returns all items', async () => {
    db.query.mockResolvedValueOnce({ rows: [{ id: 1, name: 'Item 1', description: 'Desc 1' }] });
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{ id: 1, name: 'Item 1', description: 'Desc 1' }]);
  });

  it('POST /items - creates an item', async () => {
    db.query.mockResolvedValueOnce({ rows: [{ id: 2, name: 'Item 2', description: 'Desc 2' }] });
    const res = await request(app).post('/items').send({ name: 'Item 2', description: 'Desc 2' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({ id: 2, name: 'Item 2', description: 'Desc 2' });
  });
});
