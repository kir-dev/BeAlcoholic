import { PartialType } from '@nestjs/swagger';

import { CreateDrinkDto } from './create-drink.dto';

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {}
