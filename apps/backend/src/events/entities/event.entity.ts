import { IsDate, IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

import { IsAfterDate } from '../validators/is-after-date.validator';

export class Event {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  @IsAfterDate('startDate')
  endDate: Date;

  @IsString()
  description: string;

  @IsDate()
  createdAt: Date;
}
