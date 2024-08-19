import { afterAll, beforeAll, describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('Profile (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get users Profile', async () => {
    await request(app.server).post('/users').send({
      name: 'Jonas Dolly',
      email: 'JonDon@example.com',
      password: '123456',
    })

    const authResponse = await request(app.server).post('/session').send({
      email: 'JonDon@example.com',
      password: '123456',
    })

    const { token } = authResponse.body

    const profileResponse = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: 'JonDon@example.com',
      }),
    )
  })
})
