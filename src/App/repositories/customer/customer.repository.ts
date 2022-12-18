import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerEntity } from '@Entities/customer.entity';
import { ICustomerRepository } from '@Interfaces/customer/customer.repository';

export class CustomerRepository implements ICustomerRepository {
  findAll: () => Promise<CustomerEntity[]>;
  findOne: (matizeId: string) => Promise<CustomerEntity>;
  findByEmail: (email: string) => Promise<CustomerEntity>;
  create: (customer: CreateCustomerDto) => Promise<void>;
  update: (params: {
    matizeId: string;
    data: UpdateCustomerDto;
  }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
