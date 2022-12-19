import { Public } from '@Decorators/public.decorator';
import { IpGuard } from '@Guards/authorization/ip-auth.guard';
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
import { createReadStream } from 'fs';
import { join } from 'path';
import { AdminGuard } from '../common/guards/authorization/admin-auth.guard';

@Controller('files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  @UseGuards(AdminGuard, IpGuard) 
  async findAll(): Promise<FileView[]> {
    return await this.fileService.findAll()
  }

  @Get(':matizeId')
  @Public()
  async findOne(@Param('matizeId') matizeId: string, @Res({ passthrough: true }) res: Response): Promise<StreamableFile> {
    const fileView = await this.fileService.findByMatizeId(matizeId)
    const file = createReadStream(join(process.cwd(), fileView.url))
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${fileView.name}"` 
    })
    return new StreamableFile(file)
  }

  @Post('/image/:type/:matizeId')
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
    await this.fileService.remove(matizeId)
  }
}
