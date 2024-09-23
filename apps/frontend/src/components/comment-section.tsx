import { MessageCircleMore, SendHorizonal } from 'lucide-react';

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

import { Button } from './ui/button';
import { Input } from './ui/input';

export function CommentSection() {
  return (
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
          <div className='flex w-full max-w-sm items-center space-x-2'>
            <Input type='text' placeholder='Comment' />
            <Button type='submit'>
              <SendHorizonal className='-mx-3 -my-1' />
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline' className='-mx-4'>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
