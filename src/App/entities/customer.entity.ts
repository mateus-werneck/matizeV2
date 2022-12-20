import { Entity } from '@Entities/standard/entity';
import { treatMany } from '@Helpers/ViewTreat';
import { AddressView } from '@Interfaces/address/address.view';
import { ICustomer } from '@Interfaces/customer/customer';
import { CustomerViewMapper } from '@Views/customer/customer.view';
import { AddressEntity } from './address.entity';

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

  get addresses(): AddressView[] {
    const addresses = this.props.addresses.map(
      (address) => new AddressEntity(address)
    );
    return treatMany(addresses) as AddressView[];
  }

  getViewClass(): typeof CustomerViewMapper {
    return CustomerViewMapper;
  }
}
