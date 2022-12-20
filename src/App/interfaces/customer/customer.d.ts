import { Address } from '@prisma/client';

export interface ICustomer {
  matizeId: string;
  document: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  addresses: Address[];
}
