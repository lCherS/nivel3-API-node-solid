import { afterAll, beforeAll, describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to Authenticate', async () => {
    await request(app.server).post('/users').send({
      name: 'Jonas Dolly',
      email: 'JonDon@example.com',
      password: '123456',
    })

    const response = await request(app.server).post('/session').send({
      email: 'JonDon@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })
})
