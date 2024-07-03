import { Controller, Delete, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  // @UseGuards(AuthGuard())
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Get()
  // @UseGuards(AuthGuard())
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Delete(':id')
  // @UseGuards(AuthGuard())
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
