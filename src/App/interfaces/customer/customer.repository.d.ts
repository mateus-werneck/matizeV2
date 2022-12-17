import { CreateCustomerDto } from "@Dtos/customer/create-customer.dto";
import { UpdateCustomerDto } from "@Dtos/customer/update-customer.dto";

export interface ICustomerRepository extends Repository {
  findOne: (matizeId: string) => Promise<object>;
  findByEmail: (email: string) => Promise<object>;
  findAll: () => Promise<object[]>;
  create: (customer: CreateCustomerDto) => Promise<void>;
  update: (params: { matizeId: string; data: UpdateCustomerDto }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
