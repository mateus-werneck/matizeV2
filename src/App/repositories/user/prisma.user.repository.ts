import { PrismaService } from '@Database/prisma/prisma.service';
import { UserEntity } from '@Entities/user.entity';
import { isValidObject } from '@Helpers/Object';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/App/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/App/dtos/user/update-user.dto';
import { treatUserUpdateData } from './helpers/treatUserData';
import { UserRepository } from './user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(matizeId: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { matizeId }
    });

    if (!user) {
      return null;
    }

    return new UserEntity(user);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email }
    });
    return new UserEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user));
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
    await this.prisma.user.delete({ where: { matizeId } });
  }
}
