import { Module } from '@nestjs/common';

import { EventWithDrinkActionsAndUser } from './dto/event-with-drinkActions-and-user.dto';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [EventWithDrinkActionsAndUser],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
