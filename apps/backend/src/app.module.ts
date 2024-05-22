import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinkActionsModule } from './drink-action/drink-action.module';
import { DrinksModule } from './drinks/drinks.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), UsersModule, EventsModule, DrinksModule, DrinkActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
