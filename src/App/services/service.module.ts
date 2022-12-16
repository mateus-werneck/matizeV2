import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Config/database/database.module';
import { UserService } from './user/user.service';

@Module({
    imports: [DatabaseModule],
    providers: [UserService],
    exports:[UserService]
})
export class ServiceModule {}
