import { Entity } from '@Entities/standard/entity';
import { IUser } from '@Interfaces/user/user';
import { UserViewMapper } from '@Views/user/user.view';

export class UserEntity extends Entity {
  props: IUser;

  getViewClass(): UserViewMapper {
    return new UserViewMapper();
  }
}
