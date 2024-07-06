import { BadRequestException, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Gender, User } from '@prisma/client';
import { isNumber } from 'class-validator';

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
  async findAll() {
    return await this.usersService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return await this.usersService.remove(id);
  }

  @Patch(':id/')
  @ApiOperation({ summary: 'Edit Gender and Weight' })
  @ApiQuery({ name: 'gender', required: false, type: String, enum: [Gender.Male, Gender.Female] })
  @ApiQuery({ name: 'weight', required: false, type: String })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('gender') gender?: Gender,
    @Query('weight') weightString?: string //
  ) {
    const weight = parseFloat(weightString);

    if (!weightString === null && !isNumber(weight)) {
      throw new BadRequestException('Invalid weight value');
    }

    if (!weightString) {
      const updatedUsersCount = await this.usersService.update(id, gender);
      return { message: `${updatedUsersCount.count} User was updated successfully` };
    }

    const updatedUsersCount = await this.usersService.update(id, gender, weight);

    return { message: `${updatedUsersCount.count} User was updated successfully` };
  }

  @Post(':id/favoriteDrinks/:favoriteDrinkId')
  addFavoriteDrink(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('favoriteDrinkId', new ParseUUIDPipe()) favoriteDrinkId: string
  ) {
    return this.usersService.addFavoriteDrink(id, favoriteDrinkId);
  }

  @Delete(':id/favoriteDrinks/:favoriteDrinkId')
  removeFavoriteDrink(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('favoriteDrinkId', new ParseUUIDPipe()) favoriteDrinkId: string
  ) {
    return this.usersService.removeFavoriteDrink(id, favoriteDrinkId);
  }
}
