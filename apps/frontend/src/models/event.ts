import { DrinkAction } from './drinkAction';
import { PublicUser } from './user';

export interface EventDetails {
  id: string;
  name: string;
  location: string;
  ownerId: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  createdAt: Date;
  owner: PublicUser;
  drinkActions: DrinkAction[];
}
