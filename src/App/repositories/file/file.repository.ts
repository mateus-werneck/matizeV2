import { CreateFileDto } from '@Dtos/file/create-file-dto';
import { FileEntity } from '@Entities/file.entity';
import { IFileRepository } from '@Interfaces/file/file.repository';

export abstract class FileRepository implements IFileRepository {
  abstract findOne: (matizeId: string) => Promise<object>;
  abstract findAll: () => Promise<FileEntity[]>;
  abstract create: (data: CreateFileDto) => Promise<FileEntity>;
  abstract update: (params) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
