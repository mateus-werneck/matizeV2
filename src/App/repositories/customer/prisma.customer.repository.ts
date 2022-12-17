import { PrismaService } from '@Database/prisma/prisma.service';
import { UserNotFoundException } from '@Exceptions/user/userNotFoundException';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<object[]> {
    return await this.prisma.customer.findMany();
  }

  async findOne(matizeId: string): Promise<object> {
    const customer = await this.prisma.customer.findUnique({
      where: { matizeId }
    });

    if (!customer) {
      throw new UserNotFoundException();
    }

    return customer;
  }

  async findByEmail(email: string): Promise<object> {
    return await this.prisma.customer.findFirstOrThrow({ where: { email } });
  }

  async create(user: object): Promise<void> {}

  async update(params: { matizeId: string; data: object }): Promise<void> {}

  async remove(matizeId: string): Promise<void> {
    await this.prisma.customer.update({
      where: { matizeId },
      data: { deletedAt: new Date() }
    });
  }
}
