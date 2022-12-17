import { UserEntity } from '@Entities/user.entity';
import { UserViewProps } from '@Interfaces/user/user.view';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/App/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/App/dtos/user/update-user.dto';
import { UserRepository } from 'src/App/interfaces/user/user.repository';

@Injectable()
export class UserService extends Service {
  constructor(private userRepository: UserRepository) {
    super();
  }

  async findAll(): Promise<UserViewProps[]> {
    const users = await this.userRepository.findAll();
    return this.treatList(users) as UserViewProps[];
  }

  async findUserByMatizeId(matizeId: string): Promise<UserEntity | null> {
    return this.userRepository.findOne(matizeId);
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
