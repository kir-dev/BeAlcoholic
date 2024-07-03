import { Drink } from '@prisma/client';

export class User {
  authSchId: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePictureUrl?: string;
  favouriteDrinks: Drink[];
}
