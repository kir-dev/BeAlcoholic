import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { events } from '@/models/mockData';

export default function EventFeedPage() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center bg-green-300'>
        <h1 className='text-4xl font-bold m-3'>BeAlcoholic</h1>
      </div>
      <div className='flex flex-col items-end justify-end mr-20 mt-10'>
        <Button variant='default'>+ Új Esemény</Button>
      </div>

      <div className='flex flex-col items-center justify-center'>
        {events.map((event) => (
          <div key={event.id} className='my-3'>
            <Link href={`/events/${event.id}`}>
              <div className='bg-white rounded-lg shadow-md p-4 flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <Avatar>
                    <AvatarImage src={event.owner.profilePictureUrl} alt='@shadcn' />
                    <AvatarFallback>
                      {event.owner.lastName[0]}
                      {event.owner.firstName[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h2 className='text-2xl font-bold'>{event.name}</h2>
                  <p>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant='link'>
                          Létrehozta: {event.owner.lastName} {event.owner.firstName}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className='w-80'>
                        <div className='flex justify-between space-x-4'>
                          <Avatar>
                            <AvatarImage src={event.owner.profilePictureUrl} alt='@shadcn' />
                            <AvatarFallback>
                              {event.owner.lastName[0]}
                              {event.owner.firstName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>@{event.owner.lastName}</h4>
                            <p className='text-sm'>
                              {event.owner.lastName} {event.owner.firstName}
                            </p>
                            <p className='text-sm'> {event.owner.email} </p>
                            <div className='flex items-center pt-2'>
                              <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                              <span className='text-xs text-muted-foreground'>Joined December 2021</span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </p>
                  <p>{event.description}</p>
                  <p className='text-gray-600'>
                    {event.startDate.toLocaleString('hu')} - {event.endDate.toLocaleString('hu')}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
