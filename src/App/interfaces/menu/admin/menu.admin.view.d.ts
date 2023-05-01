/* eslint-disable @typescript-eslint/naming-convention */
import { View } from '@Interfaces/standard/view';

export interface MenuAdminView extends View {
  matizeId: string;
  parent?: string;
  name: string;
  route: string;
  icon: string;
  orderBy: number;
}
