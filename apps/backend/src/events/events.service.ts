import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  create(/*createEventDto: CreateEventDto*/) {
    return 'This action adds a new event';
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: string) {
    return `This action returns a #${id} event`;
  }

  update(id: string /* updateEventDto: UpdateEventDto*/) {
    return `This action updates a #${id} event`;
  }

  remove(id: string) {
    return `This action removes a #${id} event`;
  }
}
