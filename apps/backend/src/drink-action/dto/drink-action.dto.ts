import { Drink } from '../../drinks/entities/drink.entity';
import { Event } from '../../events/entities/event.entity';
import { DrinkAction } from '../entities/drink-action.entity';

export class DrinkActionDto extends DrinkAction {
  drink: Drink;
  event: Event;
}
