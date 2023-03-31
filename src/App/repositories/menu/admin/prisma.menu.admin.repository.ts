import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminEntity } from '@Entities/menu/menu.admin.entity';
import { isValidObject, treatObject } from '@Helpers/Object';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';
import { MenuAdminRepository } from './menu.admin.repository';

@Injectable()
export class PrismaMenuAdminRepository
  extends PrismaRepository
  implements MenuAdminRepository
{
  getRepository(): string {
    return 'menuAdminPanel';
  }

  getEntity(): typeof MenuAdminEntity {
    return MenuAdminEntity;
  }

  async findOne(matizeId: string): Promise<MenuAdminEntity> {
    const menu = this.prisma.menuAdminPanel.findFirstOrThrow({
      where: { matizeId }
    });
    return this.treatEntity(menu);
  }

  async findAll(): Promise<MenuAdminEntity[]> {
    const menus = await this.prisma.menuAdminPanel.findMany();
    return this.treatList(menus);
  }

  async create(data: CreateMenuAdminDto): Promise<void> {
    treatObject(data);

    await this.prisma.menuAdminPanel.create({
      data: data
    });
  }

  async update(params: {
    matizeId: string;
    data: UpdateMenuAdminDto;
  }): Promise<void> {
    const { matizeId, data } = params;

    treatObject(data);

    if (!isValidObject(data)) {
      return;
    }

    await this.prisma.menuAdminPanel.updateMany({
      where: { matizeId },
      data
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId);
  }
}
