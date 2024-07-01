import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsUseCase() {
  const GymsRepository = new PrismaGymsRepository()
  const UseCase = new FetchNearbyGymsUseCase(GymsRepository)

  return UseCase
}
