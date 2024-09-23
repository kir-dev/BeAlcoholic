import { DrinkAction } from './drinkAction';
import { PublicUser } from './user';

export interface EventDetails {
  id: string;
  name: string;
  location: string;
  ownerId: string;
  startDate: string;
  endDate: string;
  description?: string;
  createdAt: Date;
  owner: PublicUser;
  drinkActions: DrinkAction[];
}
