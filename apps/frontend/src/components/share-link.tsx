import { DialogClose } from '@radix-ui/react-dialog';
import { Copy, Share2 } from 'lucide-react';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EventDetails } from '@/models/event';

import { Button } from './ui/button';

type Props = {
  event: EventDetails;
};

export function ShareLink({ event }: Props) {
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
  );
}
