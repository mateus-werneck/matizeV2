import { PrismaService } from '@Database/prisma/prisma.service';
import { CreateAddressDto } from '@Dtos/address/create-address.dto';
import { UpdateAddressDto } from '@Dtos/address/update-address.dto';
import { AddressEntity } from '@Entities/address.entity';
import { isValidObject, treatObject } from '@Helpers/Object';
import { Address } from '@prisma/client';
import { AddressRepository } from './address.repository';

export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(matizeId: string): Promise<AddressEntity> {
    const address = this.prisma.address.findFirstOrThrow({
      where: { matizeId }
    });
    return new AddressEntity(address);
  }

  async findAll(): Promise<AddressEntity[]> {
    const addresses = await this.prisma.address.findMany();
    return addresses.map((address) => new AddressEntity(address));
  }

  async create(params: {
    customerMatizeId: string;
    data: CreateAddressDto;
  }): Promise<void> {
    const { customerMatizeId, data } = params;

    const createData = {
      ...data,
      customerMatizeId
    };

    treatObject(createData);

    await this.prisma.address.create({
      data: createData as Address
    });
  }

  async update(params: {
    matizeId: string;
    data: UpdateAddressDto;
  }): Promise<void> {
    const { matizeId, data } = params;
    treatObject(data)

    if (!isValidObject(data)) {
      return;
    }
    
    await this.prisma.address.update({ where: { matizeId }, data });
  }

  async remove(matizeId: string): Promise<void> {
    await this.prisma.address.delete({ where: { matizeId } });
  }
}
