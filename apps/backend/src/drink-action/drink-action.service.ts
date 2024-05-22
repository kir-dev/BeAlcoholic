import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateDrinkActionDto } from './dto/create-drink-action.dto';
import { UpdateDrinkActionDto } from './dto/update-drink-action.dto';
import { DrinkAction } from './entities/drink-action.entity';

@Injectable()
export class DrinkActionsService {
  constructor(private prisma: PrismaService) {}

  async create(createDrinkActionDto: CreateDrinkActionDto) {
    return this.prisma.drinkAction.create({ data: createDrinkActionDto });
  }

  async findAll(): Promise<DrinkAction[]> {
    return this.prisma.drinkAction.findMany({
      include: { drink: true, event: true },
    });
  }

  async findOne(id: string): Promise<DrinkAction> {
    const drinkAction = await this.prisma.drinkAction.findUnique({
      where: { id },
      include: { drink: true, event: true },
    });
    if (!drinkAction) {
      throw new NotFoundException('DrinkAction not found');
    }
    return drinkAction;
  }

  async update(id: string, updateDrinkActionDto: UpdateDrinkActionDto) {
    try {
      return await this.prisma.drinkAction.update({ where: { id }, data: updateDrinkActionDto });
    } catch {
      throw new NotFoundException('DrinkAction not found');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.drinkAction.delete({ where: { id } });
    } catch {
      throw new NotFoundException('DrinkAction not found');
    }
  }
}
