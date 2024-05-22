import { IsNumber, IsUUID } from 'class-validator';

export class DrinkAction {
  @IsUUID()
  id: string;

  @IsUUID()
  drinkId: string;

  @IsUUID()
  eventId: string;

  /**
   * Price of the drink
   * @example '450'
   */
  @IsNumber()
  price: number;

  /**
   * Quantity of the drink in milliliter
   * @example '500'
   */
  @IsNumber()
  milliliter: number;
}
