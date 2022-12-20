import { Public } from '@Decorators/public.decorator';
import { AdminGuard } from '@Guards/authorization/admin-auth.guard';
import { IpGuard } from '@Guards/authorization/ip-auth.guard';
import { getFilePath } from '@Helpers/File';
import { MatizeFileInterceptor } from '@Interceptors/matize.file.interceptor';
import { FileView } from '@Interfaces/file/file.view';
import { FileService } from '@Services/file/file.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { Response } from 'express';

@Controller('files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  @UseGuards(AdminGuard, IpGuard)
  async findAll(): Promise<FileView[]> {
    return await this.fileService.findAll();
  }

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

  @Post('image/:type/:matizeId')
  @UseGuards(AdminGuard, IpGuard)
  @UseInterceptors(MatizeFileInterceptor())
  async saveImage(
    @Param('type') type: string,
    @Param('matizeId') matizeId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    await this.fileService.saveImage(file, type, matizeId);
  }

  @Delete(':matizeId')
  @UseGuards(AdminGuard, IpGuard)
  async remove(@Param('matizeId') matizeId: string): Promise<void> {
    await this.fileService.remove(matizeId);
  }
}
