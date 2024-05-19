import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { Drink } from './entities/drink.entity';

@Injectable()
export class DrinksService {
  constructor(private prisma: PrismaService) {}

  create(createDrinkDto: CreateDrinkDto): Promise<Drink> {
    return this.prisma.drink.create({ data: createDrinkDto });
  }

  findAll(): Promise<Drink[]> {
    return this.prisma.drink.findMany();
  }

  async findOne(id: string): Promise<Drink> {
    const drink = await this.prisma.drink.findUnique({ where: { id } });
    if (!drink) {
      throw new NotFoundException('Drink not found');
    }
    return drink;
  }

  async update(id: string, updateDrinkDto: UpdateDrinkDto): Promise<Drink> {
    try {
      return this.prisma.drink.update({ where: { id }, data: updateDrinkDto });
    } catch {
      throw new NotFoundException('Drink not found');
    }
  }

  async remove(id: string): Promise<Drink> {
    try {
      return this.prisma.drink.delete({ where: { id } });
    } catch {
      throw new NotFoundException('Drink not found');
    }
  }
}
