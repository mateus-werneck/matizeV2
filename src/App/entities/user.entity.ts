import { Entity } from '@Entities/standard/entity';
import { UserProps } from '@Interfaces/user/user';
import { UserView } from '@Views/user/user.view';

export class UserEntity extends Entity {
    props: UserProps;

    getViewClass(): UserView {
      return new UserView()
    }
}
