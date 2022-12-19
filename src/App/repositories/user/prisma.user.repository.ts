import { UserEntity } from '@Entities/user.entity';
import { isValidObject } from '@Helpers/Object';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/App/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/App/dtos/user/update-user.dto';
import { treatUserUpdateData } from './helpers/treatUserData';
import { UserRepository } from './user.repository';

@Injectable()
export class PrismaUserRepository
  extends PrismaRepository
  implements UserRepository
{
  getRepository(): string {
    return 'user';
  }

  getEntity(): typeof UserEntity {
    return UserEntity;
  }

  async findOne(matizeId: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: { matizeId }
    });

    if (!user) {
      return this.treatEntity({});
    }

    return this.treatEntity(user);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email }
    });
    return this.treatEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return this.treatList(users);
  }

  async create(user: CreateUserDto): Promise<void> {
    const data = {
      ...user,
      password: user.getPassword()
    } as User;
    await this.prisma.user.create({ data });
  }

  async update(params: {
    matizeId: string;
    data: UpdateUserDto;
  }): Promise<void> {
    const { data, matizeId } = params;
    const userData = treatUserUpdateData(data);

    if (!isValidObject(userData)) {
      return;
    }

    await this.prisma.user.update({
      where: { matizeId },
      data: userData
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId);
  }
}
