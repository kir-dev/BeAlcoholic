import { cocktail } from '@lucide/lab';
import { Beer, Icon, Skull, Wine } from 'lucide-react';

import { DrinkType } from '@/models/drink';

import { Badge } from './ui/badge';

type Props = {
  type: DrinkType;
};

export function DrinkTypeBadge({ type }: Props) {
  switch (type) {
    case DrinkType.BEER:
      return (
        <Badge variant='outline' className='bg-yellow-200'>
          <Beer />
        </Badge>
      );
    case DrinkType.WINE:
      return (
        <Badge variant='outline' className='bg-red-900 text-white'>
          <Wine />
        </Badge>
      );
    case DrinkType.COCKTAIL:
      return (
        <Badge variant='outline' className='bg-teal-500'>
          <Icon iconNode={cocktail} />
        </Badge>
      );
    case DrinkType.SPIRIT:
      return (
        <Badge variant='outline' className='bg-gray-500'>
          <Skull />
        </Badge>
      );
  }
}
