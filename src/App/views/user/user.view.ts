import { UserView } from '@Interfaces/user/user.view';
import { ViewMapper } from '@Views/standard/view';

export class UserViewMapper extends ViewMapper {
  props: UserView;

  getPropsToView(): string[] {
    return [
      'matizeId',
      'document',
      'firstName',
      'lastName',
      'fullName',
      'email',
      'phoneNumber',
      'birthDate',
      'createdAt',
      'updatedAt'
    ];
  }
}
