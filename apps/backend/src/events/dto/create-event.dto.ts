import { OmitType } from '@nestjs/swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { CreateDrinkActionWithoutEventIdDto } from 'src/drink-action/dto/create-drink-action-without-eventid.dto';

import { Event } from '../entities/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'createdAt', 'ownerId']) {
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  drinkActions?: CreateDrinkActionWithoutEventIdDto[];
}
