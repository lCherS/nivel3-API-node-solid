// import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface createGymUseCaseRequest {
  title: string
  description?: string | null
  phone: string | null
  latitude: number
  Longitude: number
}

interface createGymUseCaseResponse {
  gym: Gym
}

// S O L I D

// D - Dependency Inversion Principle

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    Longitude,
  }: createGymUseCaseRequest): Promise<createGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      Longitude,
    })

    return {
      gym,
    }
  }

  async findGymById() {
    return null
  }
}
