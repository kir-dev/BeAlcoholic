'use client';
import { Plus } from 'lucide-react';
import Link from 'next/link';

import { CommentSection } from '@/components/comment-section';
import { DrinkList } from '@/components/drinkAction-drink-list';
import { EventDiscription } from '@/components/event-discription';
import { ShareLink } from '@/components/share-link';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { UserAvatar } from '@/components/user-avatar';
import { UserHoverCard } from '@/components/user-hovercard';
import { events } from '@/models/mockData';

import { LikeButton } from '../../src/components/like-button';

export default function EventFeedPage() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center bg-green-300'>
        <Link href='http://bealcoholic.com'>
          <h1 className='text-4xl font-bold m-3'>BeAlcoholic</h1>
        </Link>
      </div>
      <div className='flex flex-col items-end justify-end mr-20 mt-10'>
        <Button variant='default' asChild>
          <Link href='/events/new'>
            <Plus className='size-5 -ml-1' /> Új Esemény
          </Link>
        </Button>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='w-[61rem]'>
          {events.map((event) => (
            <div key={event.id} className='my-4'>
              {/* <Link href={`/events/${event.id}`}> */}
              <div className='bg-white rounded-lg shadow-md p-4 flex items-start'>
                <div className='flex-shrink-0 mr-4'>
                  <UserAvatar user={event.owner} />
                </div>
                <div>
                  <h2 className='text-2xl font-bold'>{event.name}</h2>
                  <p className='text-sm'>
                    Létrehozta: <UserHoverCard user={event.owner} />
                  </p>
                  <div>
                    <DrinkList event={event} />
                  </div>
                  <div>
                    <EventDiscription event={event} />
                  </div>
                  <p className='text-gray-600 text-xs mt-2'>
                    {event.startDate.toLocaleString('hu')} - {event.endDate.toLocaleString('hu')}
                  </p>
                  <div className='flex flex-row mt-3'>
                    <LikeButton />
                    <CommentSection />
                    <ShareLink event={event} />
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
      <footer>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </main>
  );
}
