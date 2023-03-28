import { AdminGuard } from '@Guards/authorization/admin-auth.guard';
import { IpGuard } from '@Guards/authorization/ip-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AdminGuard, IpGuard)
export class AdminController {}
