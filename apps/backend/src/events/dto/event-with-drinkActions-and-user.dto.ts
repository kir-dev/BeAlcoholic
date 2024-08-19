import { DrinkActionWithDrinkAndUser } from 'src/drink-action/dto/drinkAction-with-user.dto';
import { User } from 'src/users/entities/user.entity';

import { Event } from '../entities/event.entity';

export class EventWithDrinkActionsAndUser extends Event {
  /**
   * List of DrinkActions associated with the event
   */
  drinkActions: DrinkActionWithDrinkAndUser[];
  /**
   * The owner of the Event
   */
  owner: User;
}
