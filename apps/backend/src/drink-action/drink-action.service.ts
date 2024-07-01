import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

import { CreateDrinkActionDto } from './dto/create-drink-action.dto';
import { DrinkActionDto } from './dto/drink-action.dto';
import { UpdateDrinkActionDto } from './dto/update-drink-action.dto';
import { DrinkAction } from './entities/drink-action.entity';

@Injectable()
export class DrinkActionsService {
  constructor(private prisma: PrismaService) {}

  async create(createDrinkActionDto: CreateDrinkActionDto): Promise<DrinkAction> {
    try {
      const { drinkId, eventId, ...rest } = createDrinkActionDto;
      return await this.prisma.drinkAction.create({
        data: {
          ...rest,
          drink: { connect: { id: drinkId } },
          event: { connect: { id: eventId } },
        },
        include: { drink: true, event: true },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException('drinkId or eventId does not exist');
        }
      }
      throw error;
    }
  }

  async findAll(): Promise<DrinkActionDto[]> {
    return this.prisma.drinkAction.findMany({
      include: { drink: true, event: true },
    });
  }

  async findOne(id: string): Promise<DrinkActionDto> {
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
