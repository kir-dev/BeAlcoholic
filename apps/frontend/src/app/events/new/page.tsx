'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { axiosConfig } from '@/api/axiosConfig';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string({
    required_error: 'Ez a mező kötelező',
    invalid_type_error: 'String, tesó!',
  }),
  location: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  description: z.string(),
  drinkActions: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
        price: z.number().optional(),
      })
    )
    .optional(),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  console.log('Á');
  try {
    const response = await axiosConfig.post('/events', values);
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
      name: '',
      location: '',
      startDate: new Date(),
      endDate: new Date(),
      description: 'salalallaala',
      drinkActions: [],
    },
  });

  /*const [consumedDrinks, setConsumedDrinks] = useState<Map<simpleDrink, number>>(new Map());*/
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addDrink = (drink: simpleDrink) => {
    const existingDrinks = form.getValues('drinkActions') || [];
    const drinkIndex = existingDrinks.findIndex((d) => d.id === drink.id);

    if (drinkIndex === -1) {
      existingDrinks.push({ ...drink });
    } else {
      existingDrinks[drinkIndex].price = drink.price;
    }

    form.setValue('drinkActions', existingDrinks);
  };

  const removeDrink = (drink: simpleDrink) => {
    let existingDrinks = form.getValues('drinkActions') || [];
    existingDrinks = existingDrinks.filter((d) => d.id !== drink.id);
    form.setValue('drinkActions', existingDrinks);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='container mx-auto p-4'>
          <h1 className='text-3xl font-bold mb-4 my-3'>Új esemény</h1>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-3'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg font-bold'>Esemény neve</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg font-bold'>Helyszín</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-3'>
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg font-bold'>Kezdő dátum</FormLabel>
                  <FormControl>
                    <Input
                      type='datetime-local'
                      {...field}
                      value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='endDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold text-lg'>Vége dátum</FormLabel>
                  <FormControl>
                    <Input
                      type='datetime-local'
                      {...field}
                      value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Grid for Description and Consumed Drinks */}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg font-bold'>Leírás</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='sallalalala' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel className='block mb-2 font-bold text-lg'>Eddig elfogyasztott italok</FormLabel>
              <ul className='mb-4'>
                {form.watch('drinkActions').length === 0 ? (
                  <li className='text-gray-500'>Nincs hozzáadott ital</li>
                ) : (
                  form.watch('drinkActions')?.map((drink) => (
                    <li key={drink.id} className='mb-2'>
                      {drink.name} x1
                      <button
                        className='bg-gray-600 hover:bg-gray-500 text-white font-bold py-0.25 px-2 rounded-full mx-1 '
                        onClick={() => removeDrink(drink)}
                      >
                        -
                      </button>
                      <input
                        type='text'
                        className='mx-2 border border-gray-300 rounded w-20 text-center ml-7'
                        placeholder='egységár'
                        value={drink.price ?? ''}
                        onChange={(e) => {
                          const updatedDrinks = form
                            .getValues('drinkActions')
                            .map((d) => (d.id === drink.id ? { ...d, price: Number(e.target.value) } : d));
                          form.setValue('drinkActions', updatedDrinks);
                        }}
                      />
                      jmf
                    </li>
                  ))
                )}
              </ul>
              <button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'
                onClick={() => setIsDialogOpen(true)}
                type='button'
              >
                Ital hozzáadása
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <button type='submit' className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
              Mentés
            </button>
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
      </form>
    </Form>
  );
}
