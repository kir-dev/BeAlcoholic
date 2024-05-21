import { Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(/*@Body() createUserDto: CreateUserDto*/) {
    return this.usersService.create(/*createUserDto*/);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string /*,@Body() /*updateUserDto: UpdateUserDto*/) {
    return this.usersService.update(Number(id) /*updateUserDto*/);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
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
