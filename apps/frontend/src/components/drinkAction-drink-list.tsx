import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export function DrinkList() {
  return (
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
  );
}
