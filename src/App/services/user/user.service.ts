import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { UserEntity } from '@Entities/user.entity';
import { UserRepository } from '@Interfaces/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async findOne(matizeId: string): Promise<UserEntity | null> {
    return this.userRepository.findOne(matizeId)
  }

  async create(user: CreateUserDto): Promise<void> {
    return await this.userRepository.create(user);
  }

  async update(params: {
    matizeId: string;
    data: UpdateUserDto;
  }): Promise<void> {
    return await this.userRepository.update(params);
  }

  async remove(matizeId: string): Promise<void> {
    return await this.userRepository.remove(matizeId);
  }
}
