import { Entity } from '@Entities/standard/entity';
import { treatStringToBoolean } from '@Helpers/Boolean';
import { IUser } from '@Interfaces/user/user';
import { UserViewMapper } from '@Views/user/user.view';

export class UserEntity extends Entity {
  props: IUser;

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get isAdmin(): boolean {
    return this.props.isAdmin !== undefined && treatStringToBoolean(this.props.isAdmin);
  }

  get fullName(): string {
    return this.props.firstName + ' ' + this.props.lastName;
  }

  getViewClass(): typeof UserViewMapper {
    return UserViewMapper;
  }
}
