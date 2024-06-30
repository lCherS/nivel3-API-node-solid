import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckInUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckInUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInUseCaseRequest): Promise<FetchUserCheckInUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
