import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerView } from '@Interfaces/customer/customer.view';
import { UserView } from '@Interfaces/user/user.view';
import { CustomerRepository } from '@Repositories/customer/customer.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService extends Service {
  constructor(private customerRepository: CustomerRepository) {
    super();
  }

  async findAll(): Promise<CustomerView[]> {
    const customers = await this.customerRepository.findAll();
    return this.treatList(customers) as CustomerView[];
  }

  async findByMatizeId(matizeId: string): Promise<CustomerView> {
    const customer = this.customerRepository.findOne(matizeId);
    return this.treatItem(customer) as CustomerView;
  }

  async findByEmail(email: string): Promise<UserView> {
    const user = this.customerRepository.findByEmail(email);
    return this.treatItem(user) as UserView;
  }

  async create(customer: CreateCustomerDto): Promise<void> {
    return await this.customerRepository.create(customer);
  }

  async update(params: {
    matizeId: string;
    data: UpdateCustomerDto;
  }): Promise<void> {
    return await this.customerRepository.update(params);
  }

  async remove(matizeId: string): Promise<void> {
    return await this.customerRepository.remove(matizeId);
  }
}
