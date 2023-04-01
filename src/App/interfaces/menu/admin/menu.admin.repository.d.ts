import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminEntity } from '@Entities/menu/menu.admin.entity';
import { IRepository } from '@Interfaces/standard/repository';

export interface IMenuAdminRepository extends IRepository {
  findOne: (matizeId: string) => Promise<MenuAdminEntity>;
  findAll: () => Promise<MenuAdminEntity[]>;
  create: (data: CreateMenuAdminDto) => Promise<void>;
  update: (params: {
    matizeId: string;
    data: UpdateMenuAdminDto;
  }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
