import { IRepository } from '@Interfaces/standard/repository';

export interface IFileRepository extends IRepository {
  findOne: (matizeId: string) => Promise<FileEntity>;
  findAll: () => Promise<FileEntity[]>;
  create: (data: object) => Promise<FileEntity>;
  update: (params: { matizeId: string; data: object }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
