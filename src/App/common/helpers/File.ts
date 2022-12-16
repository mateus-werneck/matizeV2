import { hasMatizeId } from '@Helpers/Object';
import { UnprocessableEntityException } from '@nestjs/common';
import { File } from '@prisma/client';
import { readFileSync, unlink, writeFileSync } from 'fs';
import mime from 'mime-types';

export async function saveFileToStorage(
  file: Express.Multer.File,
  type: string
) {
  const originalFilePath = `./${file.path}`;
  const fileName = `${new Date().toISOString()}-${type}.${mime
    .extension(file.mimetype)
    .toString()}`;
  try {
    writeFileSync(
      `${process.env.IMAGE_PATH}/${fileName}`,
      readFileSync(originalFilePath)
    );
  } catch (error) {
    deleteFile(originalFilePath);
    throw new UnprocessableEntityException();
  } finally {
    deleteFile(originalFilePath);
    return fileName;
  }
}

export function deleteFile(path: string) {
  unlink(path, (err) => {
    return;
  });
}

export function verifyFileIsValid(newFile: File) {
  if (!hasMatizeId(newFile)) {
    throw new UnprocessableEntityException(
      'Failed to save file on the database.'
    );
  }
}

export function verifyFileOwnerIsValid(fileOwner: object) {
  if (!hasMatizeId(fileOwner)) {
    throw new UnprocessableEntityException(
      'Failed to save file owner on the database.'
    );
  }
}
