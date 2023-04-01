import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerEntity } from '@Entities/customer/customer.entity';
import { ICustomerRepository } from '@Interfaces/customer/customer.repository';

export abstract class CustomerRepository implements ICustomerRepository {
  abstract findAll: () => Promise<CustomerEntity[]>;
  abstract findOne: (matizeId: string) => Promise<CustomerEntity>;
  abstract findByEmail: (email: string) => Promise<CustomerEntity>;
  abstract create: (customer: CreateCustomerDto) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: UpdateCustomerDto;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
