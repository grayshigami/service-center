import { Inject, Injectable } from '@nestjs/common';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../repositories/users.repository';
import { User } from '../entities/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  async getAll() {
    return await this.usersRepository.findAll();
  }

  async create(user: User) {
    return await this.usersRepository.create(user);
  }

  async getByEmail(email: string): Promise<User> {
    return await this.usersRepository.findByEmail(email);
  }

  async getById(id: number) {
    return await this.usersRepository.findById(id);
  }

  async update(id: number, user: User) {
    return await this.usersRepository.update(id, user);
  }

  async delete(id: number) {
    return await this.usersRepository.delete(id);
  }
}
