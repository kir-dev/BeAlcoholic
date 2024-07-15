import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { UserBac } from './dto/user-bac.dto';
import { UserGenderWeight } from './dto/user-gender-weight.dto';
import { UserWithFavoriteDrinks } from './dto/user-with-favorite-drinks.dto';
import { UserWithoutWeight } from './dto/user-without-weight.dto';

@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) {}

  async update(authSchId: string, data: UserGenderWeight) {
    try {
      return await this.prisma.user.update({
        where: { authSchId },
        data: { gender: data.gender, weight: data.weight },
      });
    } catch {
      throw new NotFoundException('User not found');
    }
  }

  async findOne(authSchId: string): Promise<UserWithFavoriteDrinks> {
    const user = await this.prisma.user.findUnique({
      where: { authSchId },
      include: { favouriteDrinks: true },
      omit: { weight: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findAll(): Promise<UserWithoutWeight[]> {
    return await this.prisma.user.findMany({ omit: { weight: true } });
  }

  private calculateHoursSinceDrink(drinkTime: Date, currentTime: Date): number {
    const timeDifference = currentTime.getTime() - drinkTime.getTime();
    return timeDifference / (1000 * 60 * 60);
  }

  async calBac(authSchId: string): Promise<UserBac> {
    const drinkActions = await this.prisma.drinkAction.findMany({
      // where: { authSchId },
      include: { drink: { select: { alcoholContent: true } } },
    });

    const currentTime = new Date();

    const user = await this.prisma.user.findUnique({ where: { authSchId }, select: { weight: true, gender: true } });

    let totalDose = 0;
    let totalEliminatedAlcohol = 0;

    for (const drinkAction of drinkActions) {
      const dose = drinkAction.milliliter * drinkAction.drink.alcoholContent * 0.789;
      const hoursSinceDrink = this.calculateHoursSinceDrink(drinkAction.createdAt, currentTime);
      const eliminatedAlcohol = hoursSinceDrink * 0.016;
      totalDose += dose;
      totalEliminatedAlcohol += eliminatedAlcohol;
    }

    const userWeightInGrams = user.weight * 1000;
    const genderFactor = user.gender === 'Male' ? 0.68 : 0.55;
    const bac = (totalDose / (userWeightInGrams * genderFactor)) * 100;

    return { alcoholContent: Math.max(0, bac - totalEliminatedAlcohol) };
  }

  async remove(authSchId: string): Promise<User> {
    try {
      return await this.prisma.user.delete({ where: { authSchId } });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async addFavoriteDrink(userId: string, favoriteDrinkId: string): Promise<User> {
    const [user, drink] = await Promise.all([
      this.prisma.user.findUnique({
        where: { authSchId: userId },
        include: { favouriteDrinks: true },
      }),
      this.prisma.drink.findUnique({ where: { id: favoriteDrinkId } }),
    ]);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!drink) {
      throw new NotFoundException('Drink not found');
    }

    if (user.favouriteDrinks.length >= 3) {
      throw new BadRequestException('A user can have only 3 favorite drinks.');
    }

    if (user.favouriteDrinks.some((drink) => drink.id === favoriteDrinkId)) {
      throw new BadRequestException('The drink is already in the user list of favorite drinks.');
    }

    return this.prisma.user.update({
      where: { authSchId: userId },
      data: { favouriteDrinks: { connect: { id: favoriteDrinkId } } },
    });
  }

  async removeFavoriteDrink(userId: string, favoriteDrinkId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { authSchId: userId },
      include: { favouriteDrinks: { where: { id: favoriteDrinkId } } },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.favouriteDrinks.length === 0) {
      throw new BadRequestException("The drink is not in the user's list of favorite drinks.");
    }

    return this.prisma.user.update({
      where: { authSchId: userId },
      data: { favouriteDrinks: { disconnect: { id: favoriteDrinkId } } },
    });
  }
}
