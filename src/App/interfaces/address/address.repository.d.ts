import { AddressEntity } from "@Entities/address.entity";
import { IRepository } from "@Interfaces/standard/repository";

export interface IAddressRepository extends IRepository{
  findOne: (matizeId: string) => Promise<AddressEntity>;
  findAll: () => Promise<AddressEntity[]>;
  create: (data: object) => Promise<void>;
  update: (params: { matizeId: string; data: object }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
