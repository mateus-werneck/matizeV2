export interface IProduct {
  matizeId: string;
  name: string;
  internalName: string | null;
  description: string | null;
  typeName: string;
  sizeName: string | null;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
