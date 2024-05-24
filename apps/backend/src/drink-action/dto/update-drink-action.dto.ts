import { PartialType } from '@nestjs/swagger';

import { CreateDrinkActionDto } from './create-drink-action.dto';

export class UpdateDrinkActionDto extends PartialType(CreateDrinkActionDto) {}
