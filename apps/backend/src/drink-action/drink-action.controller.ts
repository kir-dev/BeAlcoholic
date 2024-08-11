import { CurrentUser } from '@kir-dev/passport-authsch';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

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
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Body() createDrinkActionDto: CreateDrinkActionDto, @CurrentUser() user: User): Promise<DrinkAction> {
    return this.drinkActionsService.create(createDrinkActionDto, user.authSchId);
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
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDrinkActionDto: UpdateDrinkActionDto,
    @CurrentUser() user: User
  ): Promise<DrinkAction> {
    return this.drinkActionsService.update(id, updateDrinkActionDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async remove(@Param('id', new ParseUUIDPipe()) id: string, @CurrentUser() user: User): Promise<DrinkAction> {
    return this.drinkActionsService.remove(id, user);
  }
}
