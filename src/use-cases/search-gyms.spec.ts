import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Javascript academy',
      description: null,
      phone: null,
      latitude: -27.2092052,
      Longitude: -49.6401091,
    })

    await gymsRepository.create({
      title: 'typescript academy',
      description: null,
      phone: null,
      latitude: -27.2092052,
      Longitude: -49.6401091,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Javascript academy' }),
    ])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `dev-${i}`,
        description: `desc-${i}`,
        phone: null,
        latitude: -27.2092052,
        Longitude: -49.6401091,
      })
    }

    const { gyms } = await sut.execute({
      query: 'desc',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'dev-21' }),
      expect.objectContaining({ title: 'dev-22' }),
    ])
  })
})
