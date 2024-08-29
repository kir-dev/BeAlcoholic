'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  eventname: z.string({
    required_error: 'Ez a mező kötelező',
    invalid_type_error: 'String, tesó!',
  }),
  eventplace: z.string(),
  startdate: z.string(), //date kene!!?
  enddate: z.string(),
  description: z.string(),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const response = await axios.post('/api/application', values);
    if (response.status === 200) {
      console.error('siker');
    } else {
      console.error('sikertelen');
    }
  } catch (error) {
    console.error('There was an error!', error);
  }
}

type simpleDrink = {
  id: number;
  name: string;
  price?: number;
};
// Mock data for drinks
const mockDrinks: simpleDrink[] = [
  { id: 1, name: 'Gösser' },
  { id: 2, name: 'Heineken' },
  { id: 3, name: 'Soproni' },
];
export default function NewEventPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventname: 'pöci',
      eventplace: '',
      startdate: '2022-01-01T22:30:00.000Z',
      enddate: '2022-01-02T22:30:00.000Z',
      description: 'salalallaala',
    },
  });

  // States for event fields
  /*const [eventName, setEventName] = useState('');*/
  /*const [location, setLocation] = useState('');*/
  /*const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');*/
  const [consumedDrinks, setConsumedDrinks] = useState<Map<simpleDrink, number>>(new Map());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addDrink = (drink: simpleDrink) => {
    const prevDrinkCount = consumedDrinks.get(drink);
    if (prevDrinkCount) {
      setConsumedDrinks((prevState) => new Map(prevState.set(drink, prevDrinkCount + 1)));
    } else {
      setConsumedDrinks((prevState) => new Map(prevState.set(drink, 1)));
    }
  };
  const removeDrink = (drink: simpleDrink) => {
    const prevDrinkCount = consumedDrinks.get(drink);
    if (prevDrinkCount) {
      if (prevDrinkCount > 1) setConsumedDrinks((prevState) => new Map(prevState.set(drink, prevDrinkCount - 1)));
      else
        setConsumedDrinks((prevState) => {
          prevState.delete(drink);
          return new Map(prevState);
        });
    }
    if (consumedDrinks.values.length > 0) {
      setIsDialogOpen(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4' />
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4 my-3'>Új esemény</h1>

        {/*<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <label className='block mb-2'>Esemény neve</label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Placeholder'
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>*/}

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-3'>
          <FormField
            control={form.control}
            name='eventname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Esemény neve</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*<div>
            <label className='block mb-2'>Helyszín</label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Placeholder'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>*/}

          <FormField
            control={form.control}
            name='eventplace'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Helyszín</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Placeholder' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/*<div>
            <label className='block mb-2'>Kezdő dátum</label>
            <input
              type='datetime-local'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Placeholder'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>*/}

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-3'>
          <FormField
            control={form.control}
            name='startdate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kezdő dátum</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/*<div>
            <label className='block mb-2'>Vége dátum</label>
            <input
              type='datetime-local'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Placeholder'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>*/}

          <FormField
            control={form.control}
            name='enddate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vége dátum</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Grid for Description and Consumed Drinks */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          {/*<div>
          <label className='block mb-2'>Leírás</label>
          <textarea
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>*/}

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leírás</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='sallalalala' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Consumed Drinks on the right */}

          <div>
            <label className='block font-bold mb-2'>Eddig elfogyasztott italok</label>
            <ul className='mb-4'>
              {consumedDrinks.size === 0 ? (
                <li className='text-gray-500'>Nincs hozzáadott ital</li>
              ) : (
                Array.from(consumedDrinks.entries()).map(([drink, value]) => (
                  <li key={drink.id} className='mb-2'>
                    {drink.name} {value}x{' '}
                    <button
                      className='bg-gray-600 hover:bg-gray-500 text-white font-bold py-0.25 px-2 rounded-full '
                      onClick={() => {
                        removeDrink(drink);
                      }}
                    >
                      -
                    </button>
                    <input
                      type='text'
                      className='mx-2 border border-gray-300 rounded w-20 text-center ml-7'
                      placeholder='egységár'
                      value={drink.price}
                      onChange={(e) => (drink.price = Number(e.target.value))}
                    />
                    jmf
                  </li>
                ))
              )}
            </ul>
            <button
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={() => setIsDialogOpen(true)}
            >
              Ital hozzáadása
            </button>
          </div>
        </div>

        <div className='mt-8'>
          <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Mentés</button>
        </div>

        {/* Drink Selection Dialog */}
        {isDialogOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-4 rounded shadow-lg w-1/3'>
              <h2 className='text-xl font-bold mb-4'>Válassz egy italt</h2>
              <ul>
                {mockDrinks.map((drink) => (
                  <li key={drink.id} className='mb-2'>
                    <button
                      className='text-black hover:text-gray-500'
                      onClick={() => {
                        addDrink(drink);
                        setIsDialogOpen(false);
                      }}
                    >
                      {drink.name}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                className='mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setIsDialogOpen(false)}
              >
                Mégse
              </button>
            </div>
          </div>
        )}
      </div>
    </Form>
  );
}
