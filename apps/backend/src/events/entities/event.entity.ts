import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Event {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  description: string;

  @IsDate()
  createdAt: Date;
}
