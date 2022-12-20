import { Product } from '@prisma/client';

export interface IProductSize {
  internalName: string;
  friendlyName: string;
  product: Product[];
}
