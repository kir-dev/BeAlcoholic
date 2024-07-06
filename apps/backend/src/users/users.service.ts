import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Gender, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { UserWithFavoriteDrinks } from './entities/UserWithFavoriteDrinks';

@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) {}

  async update(authSchId: string, gender?: Gender, weight?: number) {
    return await this.prisma.user.updateMany({
      where: { authSchId },
      data: {
        gender: gender,
        weight: weight,
      },
    });
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

  async findAll() {
    return await this.prisma.user.findMany({ omit: { weight: true } });
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
