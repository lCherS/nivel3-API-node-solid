import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { usersRepository } from '../users-repository'

export class PrismaUsersRepository implements usersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }

  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async findUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return user
  }
}
