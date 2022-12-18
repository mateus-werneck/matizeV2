import { CustomerView } from '@Interfaces/customer/customer.view';
import { ViewMapper } from '@Views/standard/view';

export class CustomerViewMapper extends ViewMapper {
  props: CustomerView;

  getPropsToView(): string[] {
    return [
      'matizeId',
      'firstName',
      'lastName',
      'fullName',
      'email',
      'phoneNumber',
      'createdAt',
      'updatedAt'
    ];
  }
}
