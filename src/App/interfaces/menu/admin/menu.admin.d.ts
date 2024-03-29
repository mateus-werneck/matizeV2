import { MenuAdminPanel } from '@prisma/client';

export interface IMenuAdmin {
  matizeId: string;
  name: string;
  route: string;
  icon: string;
  orderBy: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  children: MenuAdminPanel[];
}
