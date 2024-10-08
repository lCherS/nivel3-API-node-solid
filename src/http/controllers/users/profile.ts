import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
/*
import { z } from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'
*/
export async function profile(req: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase()

  const { user } = await getUserProfile.execute({
    userId: req.user.sub,
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}
