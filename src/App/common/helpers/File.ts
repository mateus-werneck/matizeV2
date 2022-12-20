import { FileView } from '@Interfaces/file/file.view';
import { UnprocessableEntityException } from '@nestjs/common';
import { ReadStream, createReadStream, existsSync, readFileSync, unlink, writeFileSync } from 'fs';
import mime from 'mime-types';
import { join } from 'path';


export function getFilePath(file: FileView): ReadStream {
  const filePath = getPublicFilePath(file)
  return createReadStream(filePath)
  
}

export function isPublicFile(file: FileView): boolean {
  const filePath = getPublicFilePath(file)
  return existsSync(filePath)
}

function getPublicFilePath(file: FileView): string {
  return join(process.cwd(), process.env.IMAGE_PATH as string, file.name)
}

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

export async function saveImageFile(
  file: Express.Multer.File,
  type: string
): Promise<string> {
  const tmpPath = `./${file.path}`;
  
  const fileName = `${new Date().toISOString()}-${type}.${mime
    .extension(file.mimetype)
    .toString()}`;
  
    const storagePath = `${process.env.IMAGE_PATH}/${fileName}`
  
  await saveFileToStorage(tmpPath, storagePath)
  return fileName
}

export function deleteFile(path: string) {
  unlink(path, (err) => {
    return;
  });
}
