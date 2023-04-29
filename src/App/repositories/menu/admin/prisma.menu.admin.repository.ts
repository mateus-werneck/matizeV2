import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminEntity } from '@Entities/menu/admin/menu.admin.entity';
import { isValidObject, treatObject } from '@Helpers/Object';
import { MenuAdminRepository } from '@Repositories/menu/admin/menu.admin.repository';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';

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
    const menu = await this.prisma.menuAdminPanel.findFirstOrThrow({
      where: { matizeId },
    });
    return this.treatEntity(menu);
  }

  async findAll(): Promise<MenuAdminEntity[]> {
      return await this.findAllMatize({}, {orderBy: {name: 'asc'}}) as MenuAdminEntity[]
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

    await this.prisma.menuAdminPanel.update({
      where: { matizeId },
      data
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId);
  }
}
