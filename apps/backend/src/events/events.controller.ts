import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiOperation({ summary: 'Create an Event' })
  @ApiBody({
    type: CreateEventDto,
    description: 'Json structure for Event object',
  })
  @ApiCreatedResponse({
    type: Event,
    description: 'Event created.',
  })
  async create(@Body() data: CreateEventDto): Promise<Event> {
    return this.eventsService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'List all Events' })
  @ApiOkResponse({
    type: [Event],
    description: 'Events listed.',
  })
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find an Event by id' })
  @ApiOkResponse({
    type: Event,
    description: 'Event found by id.',
  })
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Event> {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an Event' })
  @ApiBody({
    type: CreateEventDto,
    description: 'Json structure for partial Event object (fields to update)',
  })
  @ApiOkResponse({
    type: Event,
    description: 'Event updated.',
  })
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateEventDto): Promise<Event> {
    return this.eventsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Event' })
  @ApiOkResponse({
    type: Event,
    description: 'Event deleted.',
  })
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Event> {
    return this.eventsService.remove(id);
  }
}
