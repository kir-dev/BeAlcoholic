import { OmitType } from '@nestjs/swagger';

import { DrinkAction } from '../entities/drink-action.entity';

export class CreateDrinkActionDto extends OmitType(DrinkAction, ['id', 'hasEffect', 'userId']) {}
