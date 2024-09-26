import { IsNumber, IsUUID, Min } from 'class-validator';

export class DrinkAction {
  /**
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  @IsUUID()
  id: string;

  /**
   * Id of the drink involved in the action
   * @example "123e4567-e89b-12d3-a456-426614174001"
   */
  @IsUUID()
  drinkId: string;

  /**
   * Id of the event where the drink action happened
   * @example "123e4567-e89b-12d3-a456-426614174002"
   */
  @IsUUID()
  eventId: string;

  /**
   * Price of the drink
   * @example 450
   */
  @IsNumber()
  @Min(0)
  price: number;

  /**
   * Shows if the alcohol still has effect on the user.
   * @example false
   */
  hasEffect: boolean;

  /**
   * The date and time when the alcohol was consumed
   * @example 2024-07-27T15:31:11.763Z
   */
  createdAt: Date;

  /**
   * Id of the user who consumed the alcohol
   * @example "123e4567-e89b-12d3-a456-426614174003"
   */
  @IsUUID()
  userId: string;
}
