import { CreateAddressDto } from '@Dtos/address/create-address.dto';
import { UpdateAddressDto } from '@Dtos/address/update-address.dto';
import { AddressEntity } from '@Entities/address.entity';
import { IAddressRepository } from '@Interfaces/address/address.repository';

export abstract class AddressRepository implements IAddressRepository {
  abstract findOne: (matizeId: string) => Promise<AddressEntity>;
  abstract findAll: (customerMatizeId?: string) => Promise<AddressEntity[]>;
  abstract create: (params: {
    customerMatizeId: string;
    data: CreateAddressDto;
  }) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: UpdateAddressDto;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
