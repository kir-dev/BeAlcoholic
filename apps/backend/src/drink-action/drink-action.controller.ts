import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DrinkActionsService } from './drink-action.service';
import { CreateDrinkActionDto } from './dto/create-drink-action.dto';
import { DrinkActionDto } from './dto/drink-action.dto';
import { UpdateDrinkActionDto } from './dto/update-drink-action.dto';
import { DrinkAction } from './entities/drink-action.entity';

@ApiTags('DrinkActions')
@Controller('drink-actions')
export class DrinkActionsController {
  constructor(private readonly drinkActionsService: DrinkActionsService) {}

  @Post()
  async create(@Body() createDrinkActionDto: CreateDrinkActionDto): Promise<DrinkAction> {
    return this.drinkActionsService.create(createDrinkActionDto);
  }

  @Get()
  async findAll(): Promise<DrinkActionDto[]> {
    return this.drinkActionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<DrinkActionDto> {
    return this.drinkActionsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDrinkActionDto: UpdateDrinkActionDto
  ): Promise<DrinkAction> {
    return this.drinkActionsService.update(id, updateDrinkActionDto);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<DrinkAction> {
    return this.drinkActionsService.remove(id);
  }
}
