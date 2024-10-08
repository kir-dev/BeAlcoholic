import { CurrentUser } from '@kir-dev/passport-authsch';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

import { CreateEventDto } from './dto/create-event.dto';
import { EventWithDrinkActionsAndUser } from './dto/event-with-drinkActions-and-user.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Body() data: CreateEventDto, @CurrentUser() user: User): Promise<Event> {
    return this.eventsService.create(data, user.authSchId);
  }

  @Get()
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  async findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take?: number
  ): Promise<Event[]> {
    return this.eventsService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOkResponse({ type: EventWithDrinkActionsAndUser })
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<EventWithDrinkActionsAndUser> {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateEventDto,
    @CurrentUser() user: User
  ): Promise<Event> {
    return this.eventsService.update(id, data, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async remove(@Param('id', new ParseUUIDPipe()) id: string, @CurrentUser() user: User): Promise<Event> {
    return this.eventsService.remove(id, user);
  }
}
