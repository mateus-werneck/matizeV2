import { UserProps } from '@Interfaces/user/user';

export class UserEntity {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  toPrisma(): any {
    
  }
}
