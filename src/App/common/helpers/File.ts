import { UnprocessableEntityException } from '@nestjs/common';
import { readFileSync, unlink, writeFileSync } from 'fs';
import mime from 'mime-types';


export async function saveFileToStorage(
  tmpPath: string,
  path: string
): Promise<void> {
  try {
    writeFileSync(path, readFileSync(tmpPath));
  } catch (error) {
    deleteFile(tmpPath);
    throw new UnprocessableEntityException();
  } finally {
    deleteFile(tmpPath);
  }
}

export async function saveImage(
  file: Express.Multer.File,
  type: string
): Promise<string> {
  const tmpPath = `./${file.path}`;
  
  const fileName = `${new Date().toISOString()}-${type}.${mime
    .extension(file.mimetype)
    .toString()}`;
  
    const storagePath = `${process.env.IMAGE_PATH}/${fileName}`
  
  await this.saveFileToStorage(tmpPath, storagePath)
  return fileName
}

export function deleteFile(path: string) {
  unlink(path, (err) => {
    return;
  });
}
