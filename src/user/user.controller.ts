import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  getAllUsers() {
    console.log('test');
    return this.userService.getAllUsers();
  }
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log('test');
    return user;
  }

  @Patch()
  editUser() {
    return 'babe babe';
  }
}
