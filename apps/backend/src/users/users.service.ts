import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) {}

  create(/*createUserDto: CreateUserDto*/) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number /* updateUserDto: UpdateUserDto*/) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
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
