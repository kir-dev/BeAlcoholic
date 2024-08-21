import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { CreateDrinkActionWithoutEventIdDto } from 'src/drink-action/dto/create-drink-action-without-eventid.dto';

import { Event } from '../entities/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'createdAt', 'ownerId']) {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDrinkActionWithoutEventIdDto)
  @IsOptional()
  drinkActions?: CreateDrinkActionWithoutEventIdDto[];
}
