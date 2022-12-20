export interface IAddress {
  matizeId: string;
  document: string;
  city: string;
  state: string;
  street: string;
  number: number;
  district: string;
  additionalInfo: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  customerMatizeId: string;
}
