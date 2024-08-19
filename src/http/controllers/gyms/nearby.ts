import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { makeFetchNearbyGymsUseCase } from '@/use-cases/factories/make-fetch-nearby-gyms-use-case'

export async function nearby(req: FastifyRequest, reply: FastifyReply) {
  const nearbyGymsQuerySchema = z.object({
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    Longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { latitude, Longitude } = nearbyGymsQuerySchema.parse(req.body)

  const fetchNearbyGymsUseCase = makeFetchNearbyGymsUseCase()

  const { gyms } = await fetchNearbyGymsUseCase.execute({
    userLatitude: latitude,
    userLongitude: Longitude,
  })

  return reply.status(200).send({
    gyms,
  })
}
