import { OmitType } from '@nestjs/swagger';

import { Drink } from '../entities/drink.entity';

export class CreateDrinkDto extends OmitType(Drink, ['id', 'createdAt']) {}
