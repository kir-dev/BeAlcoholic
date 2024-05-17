import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';

import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { Drink } from './entities/drink.entity';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Post()
  create(@Body() createDrinkDto: CreateDrinkDto): Promise<Drink> {
    return this.drinksService.create(createDrinkDto);
  }

  @Get()
  findAll(): Promise<Drink[]> {
    return this.drinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Drink> {
    return this.drinksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDrinkDto: UpdateDrinkDto): Promise<Drink> {
    return this.drinksService.update(id, updateDrinkDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<Drink> {
    return this.drinksService.remove(id);
  }
}
