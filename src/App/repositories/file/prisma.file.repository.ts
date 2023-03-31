import { CreateFileDto } from '@Dtos/file/create-file-dto';
import { FileEntity } from '@Entities/file/file.entity';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';
import { FileRepository } from './file.repository';

@Injectable()
export class PrismaFileRepository
  extends PrismaRepository
  implements FileRepository
{
  getRepository(): string {
    return 'file';
  }

  getEntity(): typeof FileEntity {
    return FileEntity;
  }

  async findOne(matizeId: string): Promise<FileEntity> {
    const file = await this.prisma.file.findUniqueOrThrow({
      where: { matizeId }
    });
    return await this.treatEntity(file);
  }

  async findAll(): Promise<FileEntity[]> {
    const files = await this.prisma.file.findMany();
    return this.treatList(files);
  }

  async create(data: CreateFileDto): Promise<FileEntity> {
    const file = await this.prisma.file.create({ data });
    return this.treatEntity(file);
  }

  update: (params: any) => Promise<void>;

  async remove(matizeId: string): Promise<void> {
    await this.hardDelete(matizeId);
  }
}
