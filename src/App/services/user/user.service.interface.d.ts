import { ServiceInterface } from '@Interfaces/service.interface';
import { User } from '@prisma/client';

export interface UserServiceInterface extends ServiceInterface {
  findAll: () => Promise<User[]>;
  //   findOne: () => Promise<User>;
}
