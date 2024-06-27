import { Prisma, User } from '@prisma/client'
import { usersRepository } from '../prisma/users-repository'

export class InMemoryUsersRepository implements usersRepository {
  public items: User[] = []

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      create_at: new Date(),
    }
    this.items.push(user)

    return user
  }
}
