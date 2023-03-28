import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { MatizeFileInterceptor } from '@Interceptors/matize.file.interceptor';
import { FileView } from '@Interfaces/file/file.view';
import { FileService } from '@Services/file/file.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';

@Controller('files')
export class FileAdminController extends AdminController {
  constructor(private fileService: FileService) {
    super();
  }

  @Get()
  async findAll(): Promise<FileView[]> {
    return await this.fileService.findAll();
  }

  @Post('image/:type/:matizeId')
  @UseInterceptors(MatizeFileInterceptor())
  async saveImage(
    @Param('type') type: string,
    @Param('matizeId') matizeId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    await this.fileService.saveImage(file, type, matizeId);
  }

  @Delete(':matizeId')
  async remove(@Param('matizeId') matizeId: string): Promise<void> {
    await this.fileService.remove(matizeId);
  }
}
