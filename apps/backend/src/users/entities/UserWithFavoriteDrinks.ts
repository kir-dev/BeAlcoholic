import { Drink } from 'src/drinks/entities/drink.entity';

import { User } from './user.entity';

export class UserWithFavoriteDrinks extends User {
  /**
   * A list of Favorite Drinks.
   */
  favouriteDrinks: Drink[];
}
