import { OmitType } from '@nestjs/swagger';

import { Event } from '../entities/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'createdAt']) {}
