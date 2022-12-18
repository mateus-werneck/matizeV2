import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { UserEntity } from '@Entities/user.entity';
import { UserView } from '@Interfaces/user/user.view';
import { UserRepository } from '@Repositories/user/user.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends Service {
  constructor(private userRepository: UserRepository) {
    super();
  }

  async findAll(): Promise<UserView[]> {
    const users = await this.userRepository.findAll();
    return this.treatList(users) as UserView[];
  }

  async findByMatizeId(matizeId: string): Promise<UserEntity> {
    return this.userRepository.findOne(matizeId);
  }

  async findByEmail(email: string): Promise<UserView> {
    const user = this.userRepository.findByEmail(email);
    return this.treatItem(user) as UserView;
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
