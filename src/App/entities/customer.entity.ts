import { Entity } from '@Entities/standard/entity';
import { ICustomer } from '@Interfaces/customer/customer';
import { CustomerViewMapper } from '@Views/customer/customer.view';

export class CustomerEntity extends Entity {
  props: ICustomer;

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get isAdmin(): boolean {
    return false;
  }

  getViewClass(): CustomerViewMapper {
    return new CustomerViewMapper();
  }
}
