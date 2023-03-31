import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminEntity } from '@Entities/menu/menu.admin.entity';
import { IMenuAdminRepository } from '@Interfaces/menu/admin/menu.admin.repository';

export abstract class MenuAdminRepository implements IMenuAdminRepository {
  abstract findOne: (matizeId: string) => Promise<MenuAdminEntity>;
  abstract findAll: () => Promise<MenuAdminEntity[]>;
  abstract create: (data: CreateMenuAdminDto) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: UpdateMenuAdminDto;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
