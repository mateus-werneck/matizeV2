import { UserRepository } from '@Repositories/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<any[]> {
    return await this.userRepository.findAll();
  }
}
