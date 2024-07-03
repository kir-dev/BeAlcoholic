import { Controller, Delete, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { UserWithFavoriteDrinks } from './entities/UserWithFavoriteDrinks';
import { UsersService } from './users.service';
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get user details by ID' })
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<UserWithFavoriteDrinks> {
    return await this.usersService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return await this.usersService.remove(id);
  }
}
