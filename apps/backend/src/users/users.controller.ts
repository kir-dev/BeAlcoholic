import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { UserBac } from './dto/user-bac.dto';
import { UserGenderWeight } from './dto/user-gender-weight.dto';
import { UserWithFavoriteDrinks } from './dto/user-with-favorite-drinks.dto';
import { UserWithoutWeight } from './dto/user-without-weight.dto';
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
  async findAll(): Promise<UserWithoutWeight[]> {
    return await this.usersService.findAll();
  }

  @Get(':id/bac')
  @ApiOperation({ summary: 'Get BAC (Blood Alcohol Content)' })
  async calBac(@Param('id', ParseUUIDPipe) id: string): Promise<UserBac> {
    return await this.usersService.calBac(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return await this.usersService.remove(id);
  }

  @Patch(':id/')
  @ApiOperation({ summary: 'Edit Gender and Weight' })
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() userGenderWeight: UserGenderWeight) {
    await this.usersService.update(id, userGenderWeight);
    return { message: `User was updated successfully: ${userGenderWeight.gender}, ${userGenderWeight.weight} kg` };
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
