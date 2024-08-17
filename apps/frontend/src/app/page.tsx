'use client';
import { DialogClose } from '@radix-ui/react-dialog';
import { CalendarDays, Copy, MessageCircleMore, Share2, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { events } from '@/models/mockData';

export default function EventFeedPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (id: string) => {
    const linkToCopy = `https://bealcoholic.com/events/${id}`;
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error('Hiba történt a másolás során:', err);
      });
  };
  return (
    <main>
      <div className='flex flex-col items-center justify-center bg-green-300'>
        <h1 className='text-4xl font-bold m-3'>BeAlcoholic</h1>
      </div>
      <div className='flex flex-col items-end justify-end mr-20 mt-10'>
        <Button variant='default' asChild>
          <Link href='/events/new'>+ Új Esemény</Link>
        </Button>
      </div>

      <div className='flex flex-col items-center justify-center'>
        {events.map((event) => (
          <div key={event.id} className='my-3'>
            {/* <Link href={`/events/${event.id}`}> */}
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
                        <Avatar className='size-20 items-center justify-center'>
                          <AvatarImage src={event.owner.profilePictureUrl} alt='@shadcn' />
                          <AvatarFallback className='text-2xl'>
                            {event.owner.lastName[0]}
                            {event.owner.firstName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                          <h4 className='text-sm font-semibold'>@{event.owner.lastName}</h4>
                          <p className='text-xl'>
                            {event.owner.lastName} {event.owner.firstName}
                          </p>
                          <p className='text-sm'> {event.owner.email} </p>
                          <div className='flex items-center pt-2'>
                            <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                            <span className='text-xs text-muted-foreground'>
                              Joined {event.owner.createdAt.toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </p>
                <div>
                  <Carousel className='w-max max-w-sm'>
                    <CarouselContent className='-ml-1'>
                      {Array.from({ length: 10 }).map((_, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-auto'>
                          <div className='p-1'>
                            <Card className='w-48 h-48'>
                              <CardContent className='flex aspect-square items-center justify-center p-6'>
                                <span className='text-2xl font-semibold'>{index + 1}</span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <p>{event.description}</p>
                <p className='text-gray-600 text-xs'>
                  {event.startDate.toLocaleString('hu')} - {event.endDate.toLocaleString('hu')}
                </p>
                <div className='flex flex-row mt-3'>
                  <Button variant='ghost'>
                    <ThumbsUp className='mr-2' /> Like
                  </Button>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant='ghost'>
                        <MessageCircleMore className='mr-2 ml-6' /> Comment
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className='mx-auto w-full max-w-sm'>
                        <DrawerHeader>
                          <DrawerTitle>Comment Section</DrawerTitle>
                          <DrawerDescription>You can leave comments or talk to other users.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant='outline'>Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant='ghost'>
                        <Share2 className='mr-2 ml-6' /> Share
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-md'>
                      <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>Anyone who has this link will be able to view this Event.</DialogDescription>
                      </DialogHeader>
                      <div className='flex items-center space-x-2'>
                        <div className='grid flex-1 gap-2'>
                          <Label htmlFor='link' className='sr-only'>
                            Link
                          </Label>
                          <Input id='link' defaultValue={`https://bealcoholic.com/events/${event.id}`} readOnly />
                        </div>
                        <Button type='submit' size='sm' className='px-3' onClick={() => handleCopyClick(event.id)}>
                          <span className='sr-only'>Copy</span>
                          <Copy className='h-4 w-4' />
                          {copied && <span>Copied!</span>}
                        </Button>
                      </div>
                      <DialogFooter className='sm:justify-start'>
                        <DialogClose asChild>
                          <Button type='button' variant='secondary'>
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        ))}
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
