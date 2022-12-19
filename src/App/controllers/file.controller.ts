import { IpGuard } from '@Guards/authorization/ip-auth.guard';
import { MatizeFileInterceptor } from '@Interceptors/matize.file.interceptor';
import { FileView } from '@Interfaces/file/file.view';
import { FileService } from '@Services/file/file.service';
import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
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
  async findOne(@Param() matizeId: string): Promise<FileView> {
    return await this.fileService.findByMatizeId(matizeId)
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
}
