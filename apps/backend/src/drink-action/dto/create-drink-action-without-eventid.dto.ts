import { OmitType } from '@nestjs/swagger';

import { DrinkAction } from '../entities/drink-action.entity';

export class CreateDrinkActionWithoutEventIdDto extends OmitType(DrinkAction, ['id', 'eventId', 'userId']) {}
