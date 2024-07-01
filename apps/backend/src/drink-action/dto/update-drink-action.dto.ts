import { OmitType, PartialType } from '@nestjs/swagger';

import { CreateDrinkActionDto } from './create-drink-action.dto';

export class UpdateDrinkActionDto extends OmitType(PartialType(CreateDrinkActionDto), [
  'drinkId',
  'eventId',
] as const) {}
