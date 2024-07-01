import { Gym, Prisma } from '@prisma/client'
import { GymsRepository, findManyNearbyParams } from '../gyms-repository'
import { prisma } from '@/lib/prisma'

export class PrismaGymsRepository implements GymsRepository {
  async create(data: Prisma.GymCreateInput) {
    const gym = prisma.gym.create({
      data,
    })
    return gym
  }

  async searchMany(query: string, page: number) {
    const gyms = prisma.gym.findMany({
      where: {
        OR: [
          { description: { contains: query } },
          { title: { contains: query } },
        ],
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return gyms
  }

  async findGymById(id: string) {
    const gym = prisma.gym.findUnique({
      where: {
        id,
      },
    })
    return gym
  }

  async findManyNearby(params: findManyNearbyParams) {
    const gyms = await prisma.$queryRaw<Gym[]>`
    SELECT * from gyms
    WHERE ( 6371 * acos( cos( radians(${params.latitude}) ) *
          cos( radians( latitude ) ) * cos( radians( longitude ) -
          radians(${params.longitude}) ) + sin( radians(${params.latitude}) ) *
          sin( radians( latitude ) ) ) ) <= 10
    `
    return gyms
  }
}
