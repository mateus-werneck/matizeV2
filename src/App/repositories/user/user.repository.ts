import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { UserEntity } from '@Entities/user.entity';
import { UserRepositoryProps } from '@Interfaces/user/user.repository';

export abstract class UserRepository implements UserRepositoryProps {
  abstract findOne: (matizeId: string) => Promise<UserEntity | null>;
  abstract findByEmail: (email: string) => Promise<UserEntity>;
  abstract findAll: () => Promise<UserEntity[]>;
  abstract create: (user: CreateUserDto) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: UpdateUserDto;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
