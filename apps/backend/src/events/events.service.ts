import { Injectable, NotFoundException } from '@nestjs/common';
import { Event } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/entities/user.entity';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: CreateEventDto, userId: string): Promise<Event> {
    return await this.prisma.event.create({
      data: {
        ...data,
        ownerId: userId,
      },
    });
  }

  async findAll(): Promise<Event[]> {
    return await this.prisma.event.findMany();
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  async update(id: string, data: UpdateEventDto, user: User): Promise<Event> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event || (event.ownerId !== user.authSchId && !user.isAdmin)) {
      throw new NotFoundException("Event not found or you don't have permission to update it");
    }
    return await this.prisma.event.update({ where: { id }, data });
  }

  async remove(id: string, user: User): Promise<Event> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event || (event.ownerId !== user.authSchId && !user.isAdmin)) {
      throw new NotFoundException("Event not found or you don't have permission to delete it");
    }
    return await this.prisma.event.delete({ where: { id } });
  }
}
