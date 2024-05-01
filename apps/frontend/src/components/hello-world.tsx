import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function HelloWorld({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-white shadow-md p-10 rounded-lg', className)} {...props}>
      <h1>Hello, world!</h1>
      {children}
    </div>
  );
}
