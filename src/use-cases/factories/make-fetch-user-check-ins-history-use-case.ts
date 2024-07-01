import { FetchUserCheckInUseCase } from '../fetch-member-check-ins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const UseCase = new FetchUserCheckInUseCase(checkInsRepository)

  return UseCase
}
