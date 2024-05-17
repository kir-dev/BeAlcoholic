import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { IsAfterDate } from '../validators/is-after-date.validator';

export class Event {
  @IsUUID()
  id: string;

  /**
   * Name of the event.
   * @example 'Pöci'
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Location of the event.
   * @example 'Budapest, Irinyi József u. 42, 1117 (8. floor)'
   */
  @IsString()
  @IsNotEmpty()
  location: string;

  /**
   * Date and time when the event starts.
   * @example '2022-01-01T22:30:00.000Z'
   */
  @IsDateString()
  startDate: Date;

  /**
   * Date and time when the event ends.
   * @example '2022-01-02T04:00:00.000Z'
   */
  @IsDateString()
  @IsAfterDate('startDate')
  endDate: Date;

  /**
   * Description of the event.
   * @example 'We are going to play a turn-based strategy game played with 20 forint coins, during which wearing a "tie" is mandatory.'
   */
  @IsString()
  @IsOptional()
  description?: string;

  @IsDate()
  createdAt: Date;
}
