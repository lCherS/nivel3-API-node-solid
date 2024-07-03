import { FastifyReply, FastifyRequest } from 'fastify'
/*
import { z } from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'
*/
export async function profile(req: FastifyRequest, reply: FastifyReply) {
  await req.jwtVerify()
  return reply.status(200).send()
}
