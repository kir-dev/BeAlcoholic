import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { IsAfterDate } from '../validators/is-after-date.validator';

export class Event {
  @IsUUID()
  id: string;

  @ApiProperty({
    example: 'Pöci',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Budapest, Irinyi József u. 42, 1117 (8. floor)',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: '2022-01-01T22:30:00.000Z',
    required: true,
  })
  @IsDateString()
  startDate: Date;

  @ApiProperty({
    example: '2022-01-02T04:00:00.000Z',
    required: true,
  })
  @IsDateString()
  @IsAfterDate('startDate')
  endDate: Date;

  @ApiProperty({
    example:
      'We are going to play a turn-based strategy game played with 20 forint coins, during which wearing a "tie" is mandatory.',
    required: false,
  })
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @IsDate()
  createdAt: Date;
}
