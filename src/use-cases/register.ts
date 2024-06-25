// import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { usersRepository } from '@/repositories/prisma/users-repository'
import { hash } from 'bcryptjs'

interface registerUseCaseRequest {
  name: string
  email: string
  password: string
}

// S O L I D

// D - Dependency Inversion Principle

export class RegisterUseCase {
  constructor(private usersRepository: usersRepository) {}

  async execute({ name, email, password }: registerUseCaseRequest) {
    const password_hash = await hash(password, 6)

    // const prismaUsersRepository = new PrismaUsersRepository()

    const userWithSameEmail = await this.usersRepository.findUserByEmail(email)

    if (userWithSameEmail) {
      throw new Error('user email already exists')
    }

    await this.usersRepository.create({ name, email, password_hash })
  }
}
