import { DrinkAction } from '@/models/drinkAction';

import { DrinkTypeBadge } from './drink-type-badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {
  drinkAction: DrinkAction;
};

export function DrinkActionTile({ drinkAction }: Props) {
  return (
    <div className='border-gray-500 border-2 rounded p-5 flex flex-col gap-2'>
      <div className='flex gap-4 items-center'>
        <Avatar>
          <AvatarImage src={drinkAction.user.profilePictureUrl} alt='@shadcn' />
          <AvatarFallback>
            {drinkAction.user.lastName[0]}
            {drinkAction.user.firstName[0]}
          </AvatarFallback>
        </Avatar>
        <p className='font-bold'>
          {drinkAction.user.lastName} {drinkAction.user.firstName}
        </p>
      </div>
      <div className='flex gap-2 items-center'>
        <DrinkTypeBadge type={drinkAction.drink.type} />
        <p>{drinkAction.drink.name}</p>
      </div>
      <p>{drinkAction.milliliter} ml</p>
      <p>{drinkAction.price} JMF</p>
    </div>
  );
}
