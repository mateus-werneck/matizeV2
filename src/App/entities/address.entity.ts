import { Entity } from '@Entities/standard/entity';
import { IAddress } from '@Interfaces/address/address';
import { AddressViewMapper } from '@Views/address/address.view';

export class AddressEntity extends Entity {
  props: IAddress;

  getViewClass(): AddressViewMapper {
    return new AddressViewMapper();
  }
}
