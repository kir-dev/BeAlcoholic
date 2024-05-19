import { Module } from '@nestjs/common';

import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';

@Module({
  controllers: [DrinksController],
  providers: [DrinksService],
})
export class DrinksModule {}
