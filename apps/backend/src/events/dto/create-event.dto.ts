import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { CreateDrinkActionDto } from 'src/drink-action/dto/create-drink-action.dto';

import { Event } from '../entities/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'createdAt', 'ownerId']) {
  @ApiProperty({ type: [CreateDrinkActionDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDrinkActionDto)
  @IsOptional()
  drinkActions?: CreateDrinkActionDto[];
}
