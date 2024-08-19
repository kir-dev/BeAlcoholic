import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/entities/user.entity';

import { CreateDrinkActionDto } from './dto/create-drink-action.dto';
import { DrinkActionDto } from './dto/drink-action.dto';
import { UpdateDrinkActionDto } from './dto/update-drink-action.dto';
import { DrinkAction } from './entities/drink-action.entity';

@Injectable()
export class DrinkActionsService {
  constructor(private prisma: PrismaService) {}

  async create(createDrinkActionDto: CreateDrinkActionDto, authSchId: string): Promise<DrinkAction> {
    try {
      const { drinkId, eventId, ...rest } = createDrinkActionDto;

      const drinkActionData: Prisma.DrinkActionCreateInput = {
        ...rest,
        drink: { connect: { id: drinkId } },
        event: { connect: { id: eventId } },
        user: { connect: { authSchId } },
      };

      return await this.prisma.drinkAction.create({
        data: drinkActionData,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new BadRequestException('userId, drinkId or eventId does not exist');
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

  async update(id: string, updateDrinkActionDto: UpdateDrinkActionDto, user: User) {
    const drinkaction = await this.prisma.drinkAction.findUnique({ where: { id } });
    if (!drinkaction || (drinkaction.userId !== user.authSchId && !user.isAdmin)) {
      throw new NotFoundException("DrinkAction not found or you don't have permission to update it");
    }
    return await this.prisma.drinkAction.update({ where: { id }, data: updateDrinkActionDto });
  }

  async remove(id: string, user: User) {
    const drinkaction = await this.prisma.drinkAction.findUnique({ where: { id } });
    if (!drinkaction || (drinkaction.userId !== user.authSchId && !user.isAdmin)) {
      throw new NotFoundException("DrinkAction not found or you don't have permission to delete it");
    }
    return await this.prisma.drinkAction.delete({ where: { id } });
  }
}
