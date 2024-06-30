import { Gym, Prisma } from '@prisma/client'

export interface findManyNearbyParams {
  latitude: number
  longitude: number
}

export interface GymsRepository {
  create(data: Prisma.GymCreateInput): Promise<Gym>
  searchMany(query: string, page: number): Promise<Gym[]>
  findGymById(id: string): Promise<Gym | null>
  findManyNearby(params: findManyNearbyParams): Promise<Gym[]>
}
