import { PrismaService } from '@Database/prisma/prisma.service';
import { UserNotFoundException } from '@Exceptions/user/userNotFoundException';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '../../dtos/customer/update-customer.dto';
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

  async create(customer: CreateCustomerDto): Promise<void> {
    await this.prisma.customer.create({
      data: {
        ...customer,
        fullName: customer.getFullName(),
        password: customer.getPassword(),
        birthDate: customer.getBirthDate()
      }
    });
  }

  async update(params: {
    matizeId: string;
    data: UpdateCustomerDto;
  }): Promise<void> {
    // const updateData = {
    //   ...data,
    //   password:
    // }
    // await this.prisma.customer.update({where: matizeId,})
  }

  async remove(matizeId: string): Promise<void> {
    await this.prisma.customer.update({
      where: { matizeId },
      data: { deletedAt: new Date() }
    });
  }
}
