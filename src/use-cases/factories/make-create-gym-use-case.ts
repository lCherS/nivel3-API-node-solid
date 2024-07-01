import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const GymsRepository = new PrismaGymsRepository()
  const UseCase = new CreateGymUseCase(GymsRepository)

  return UseCase
}
