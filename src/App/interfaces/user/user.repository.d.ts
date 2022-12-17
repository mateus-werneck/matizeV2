import { UserEntity } from '@Entities/user.entity';
import { Repository } from '@Interfaces/standard/repository';

export interface IUserRepository extends Repository {
  findOne: (matizeId: string) => Promise<UserEntity | null>;
  findByEmail: (email: string) => Promise<UserEntity>;
  findAll: () => Promise<UserEntity[]>;
  create: (user: CreateUserDto) => Promise<void>;
  update: (params: { matizeId: string; data: UpdateUserDto }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
