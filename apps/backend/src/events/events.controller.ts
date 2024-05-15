import { Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';

import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(/*@Body() data: CreateEventDto*/) {
    return this.eventsService.create(/*data*/);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string /*, @Body() data: UpdateEventDto*/) {
    return this.eventsService.update(id /*,data*/);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.eventsService.remove(id);
  }
}
