import { CalendarDays } from 'lucide-react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { PublicUser } from '@/models/user';

import { Button } from './ui/button';
import { UserAvatar } from './user-avatar';

interface Props {
  user: PublicUser;
}

export function UserHoverCard({ user }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='ghost' className='-ml-7 -mt-1 font-normal text-sm'>
          {user.lastName} {user.firstName}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <UserAvatar className='size-20 text-2xl' user={user} />
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>@{user.lastName}</h4>
            <p className='text-xl'>
              {user.lastName} {user.firstName}
            </p>
            <p className='text-sm'> {user.email} </p>
            <div className='flex items-center pt-2'>
              <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
              <span className='text-xs text-muted-foreground'>Joined {user.createdAt.toDateString()}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
