import { Entity } from '@Entities/standard/entity';
import { UserProps } from '@Interfaces/user/user';
import { UserViewMapper } from '@Views/user/user.view';

export class UserEntity extends Entity {
    props: UserProps;

    getViewClass(): UserViewMapper {
      return new UserViewMapper()
    }
}
