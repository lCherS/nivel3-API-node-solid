import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '../search-gyms'

export function makeSearchGymsUseCase() {
  const GymsRepository = new PrismaGymsRepository()
  const UseCase = new SearchGymsUseCase(GymsRepository)

  return UseCase
}
