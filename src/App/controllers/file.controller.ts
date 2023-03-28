import { Public } from '@Decorators/public.decorator';
import { getFilePath } from '@Helpers/File';
import { FileService } from '@Services/file/file.service';
import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';

@Controller('files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get('images/:matizeId')
  @Public()
  async findOne(
    @Param('matizeId') matizeId: string,
    @Res({ passthrough: true }) res: Response
  ): Promise<StreamableFile> {
    const fileView = await this.fileService.findByMatizeId(matizeId);
    const fileStream = getFilePath(fileView);

    res.set({
      'Content-Type': fileView.mimeType,
      'Content-Disposition': `inline; filename="${fileView.name}"`
    });

    return new StreamableFile(fileStream);
  }
}
