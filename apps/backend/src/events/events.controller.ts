import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() data: CreateEventDto): Promise<Event> {
    return this.eventsService.create(data);
  }

  @Get()
  async findAll(@Query('skip') skip?: string, @Query('take') take?: string): Promise<Event[]> {
    const skipVal = skip ? parseInt(skip, 10) : 0;
    const takeVal = take ? parseInt(take, 10) : 10;
    return this.eventsService.findAll(skipVal, takeVal);
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Event> {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateEventDto): Promise<Event> {
    return this.eventsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Event> {
    return this.eventsService.remove(id);
  }
}
