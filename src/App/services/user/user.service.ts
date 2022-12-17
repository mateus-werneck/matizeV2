import { UserEntity } from '@Entities/user.entity';
import { UserRepository } from '@Interfaces/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
