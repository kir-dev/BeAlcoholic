import { Drink } from 'src/drinks/entities/drink.entity';
import { User } from 'src/users/entities/user.entity';

import { DrinkAction } from '../entities/drink-action.entity';

export class DrinkActionWithDrinkAndUser extends DrinkAction {
  /**
   * Drink that was consumed
   */
  drink: Drink;
  /*
   * User data for the DrinkAction
   */
  user: User;
}
