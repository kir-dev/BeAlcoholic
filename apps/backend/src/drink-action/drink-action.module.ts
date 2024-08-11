import { Module } from '@nestjs/common';

import { DrinkActionsController } from './drink-action.controller';
import { DrinkActionsService } from './drink-action.service';

@Module({
  controllers: [DrinkActionsController],
  providers: [DrinkActionsService],
})
export class DrinkActionsModule {}
