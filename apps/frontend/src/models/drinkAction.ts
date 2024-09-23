import { Drink } from './drink';
import { PublicUser } from './user';

export interface DrinkAction {
  id: string;
  drinkId: string;
  eventId: string;
  price: number;
  milliliter: number;
  hasEffect: boolean;
  createdAt: Date;
  userId: string;
  user: PublicUser;
  drink: Drink;
}

export interface CreateDrinkAction {
  drinkId: string;
  eventId: string;
  price: number;
  milliliter: number;
}
