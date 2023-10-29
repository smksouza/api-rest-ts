import { test, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { server } from '../src/app'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await server.ready()
  })

  afterAll(async () => {
    await server.close()
  })

  test('user can create a new transaction', async () => {
    await request(server.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
