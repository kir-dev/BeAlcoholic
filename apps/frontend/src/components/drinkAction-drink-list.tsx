import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { EventDetails } from '@/models/event';

interface Props {
  event: EventDetails;
}

export function DrinkList({ event }: Props) {
  return (
    <Carousel className='w-[51rem]'>
      <CarouselContent className='-ml-1'>
        {event.drinkActions.map((drinkAction) => (
          // eslint-disable-next-line react/no-array-index-key
          <CarouselItem key={drinkAction.id} className='pl-1 md:basis-1/2 lg:basis-auto'>
            <div className='p-1'>
              <Card className='w-48 h-48'>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 w-auto'>
                  <span className='text-xl font-semibold no-'>{drinkAction.drink.name}</span>
                  <span className='text-xs mt-5'>Alcohol Content: {drinkAction.drink.alcoholContent}%</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
