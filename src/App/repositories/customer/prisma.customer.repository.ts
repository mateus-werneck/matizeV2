import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerEntity } from '@Entities/customer.entity';
import { UserNotFoundException } from '@Exceptions/user/userNotFoundException';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { treatCustomerUpdateData } from './helpers/treatCustomerData';

@Injectable()
export class PrismaCustomerRepository
  extends PrismaRepository
  implements CustomerRepository
{
  getRepository(): string {
    return 'customer';
  }
  
  getEntity(): typeof CustomerEntity {
    return CustomerEntity;
  }

  async findAll(): Promise<CustomerEntity[]> {
    const customers = await this.prisma.customer.findMany({
      where: { deletedAt: null },
      include: { addresses: true }
    });
    return this.treatList(customers);
  }

  async findOne(matizeId: string): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.findUnique({
      where: { matizeId },
      include: { addresses: true }
    });

    if (!customer) {
      throw new UserNotFoundException();
    }

    return this.treatEntity(customer);
  }

  async findByEmail(email: string): Promise<CustomerEntity> {
    const customer = await this.prisma.customer.findFirstOrThrow({
      where: { email }
    });

    return this.treatEntity(customer);
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
    const { matizeId, data } = params;
    const updateData = treatCustomerUpdateData(data);
    await this.prisma.customer.update({
      where: { matizeId },
      data: updateData
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId)
  }
}
