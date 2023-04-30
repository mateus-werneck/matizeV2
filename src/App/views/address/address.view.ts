import { AddressView } from '@Interfaces/address/address.view';
import { ViewMapper } from '@Views/standard/view';

export class AddressViewMapper extends ViewMapper {
  props: AddressView;

  getPropsToView(): string[] {
    return [
      'matizeId',
      'document',
      'city',
      'state',
      'street',
      'number',
      'district',
      'additionalInfo',
      'customerMatizeId'
    ];
  }
}
