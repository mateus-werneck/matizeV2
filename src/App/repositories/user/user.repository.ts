import { PrismaService } from '@Database/prisma/prisma.service';
import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { treatStringToDate } from '@Helpers/Date';
import { isValidObject } from '@Helpers/Object';
import { treatPassword } from '@Helpers/Password';
import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(matizeId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { matizeId }
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    });
    if (!user) {
      throw new HttpException({ message: 'User not found' }, 204);
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({ include: { addresses: true } });
  }

  async create(user: CreateUserDto): Promise<User> {
    const data = {
      ...user,
      birthDate: treatStringToDate(user.birthDate),
      fullName: `${user.firstName} ${user.lastName}`,
      password: treatPassword(user.password)
    } as User;
    const createdUser = await this.prisma.user.create({ data });
    return createdUser;
  }

  // async update(params: {
  //   matizeId: string;
  //   data: UpdateUserDto;
  // }): Promise<object> {
  //   const { data, matizeId } = params;
  //   const userData = treatUserUpdateData(data);
  //   if (!isValidObject(userData)) {
  //     return { type: false };
  //   }
  //   const updatedUser = await this.prisma.user.update({
  //     where: { matizeId },
  //     data: userData
  //   });
  //   return { type: isValidObject(updatedUser) };
  // }

  async remove(matizeId: string): Promise<object> {
    const deletedUser = await this.prisma.user.delete({ where: { matizeId } });
    return { type: isValidObject(deletedUser) };
  }
}
