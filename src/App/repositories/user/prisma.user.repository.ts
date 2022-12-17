import { PrismaService } from '@Database/prisma/prisma.service';
import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { UserEntity } from '@Entities/user.entity';
import { treatStringToDate } from '@Helpers/Date';
import { isValidObject } from '@Helpers/Object';
import { treatPassword } from '@Helpers/Password';
import { UserRepository } from '@Interfaces/user/user.repository';
import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { treatUserUpdateData } from './helpers/treatUserData';

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
    const user = await this.prisma.user.findUnique({
      where: { email }
    });
    if (!user) {
      throw new HttpException({ message: 'User not found' }, 204);
    }
    return new UserEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany({
      include: { addresses: true }
    });
    return users.map((user) => new UserEntity(user));
  }

  async create(user: CreateUserDto): Promise<void> {
    const data = {
      ...user,
      birthDate: treatStringToDate(user.birthDate),
      fullName: `${user.firstName} ${user.lastName}`,
      password: treatPassword(user.password)
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
