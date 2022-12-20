import { PrismaService } from '@Database/prisma/prisma.service';
import { CreateFileDto } from '@Dtos/file/create-file-dto';
import { FileEntity } from '@Entities/file.entity';
import { isPublicFile, saveImageFile } from '@Helpers/File';
import { FileView } from '@Interfaces/file/file.view';
import { FileRepository } from '@Repositories/file/file.repository';
import { PrismaProductImageRepository } from '@Repositories/product/product.image.repository';
import { Service } from '@Services/standard/service';
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common';
import mime from 'mime-types';

@Injectable()
export class FileService extends Service {
  constructor(
    private fileRepository: FileRepository,
    private prisma: PrismaService
  ) {
    super();
  }

  async findAll(): Promise<FileView[]> {
    const files = await this.fileRepository.findAll();
    return this.treatList(files) as FileView[];
  }

  async findByMatizeId(matizeId: string): Promise<FileView> {
    const file = await this.fileRepository.findOne(matizeId);
    const fileView = this.treatItem(file) as FileView;

    if (!isPublicFile(fileView)) {
      throw new NotFoundException();
    }

    return fileView;
  }

  async create(file: CreateFileDto) {
    return await this.fileRepository.create(file);
  }

  async remove(matizeId: string) {
    await this.fileRepository.remove(matizeId);
  }

  async saveImage(
    file: Express.Multer.File,
    type: string,
    ownerMatizeId: string
  ): Promise<void> {
    const imageFile = await saveImageFile(file, type);
    let fileEntity;

    try {
      fileEntity = await this.create({
        name: imageFile,
        type: mime.extension(file.mimetype)?.toString(),
        mimeType: file.mimetype
      });
    } catch (error) {
      throw new UnprocessableEntityException();
    }

    await this.addFileOwner({ fileEntity, owner: type, ownerMatizeId });
  }

  private async addFileOwner(params: {
    fileEntity: FileEntity;
    owner: string;
    ownerMatizeId: string;
  }) {
    const { fileEntity, owner, ownerMatizeId } = params;

    try {
      const fileOwnerService = this.getFileOwner(owner);
      await fileOwnerService.create(fileEntity.matizeId, ownerMatizeId);
    } catch (error) {
      this.remove(fileEntity.matizeId);
      throw new UnprocessableEntityException();
    }
  }

  private getFileOwner(owner: string) {
    switch (owner) {
      case 'product':
        return new PrismaProductImageRepository(this.prisma);
    }
    throw new UnprocessableEntityException();
  }
}
