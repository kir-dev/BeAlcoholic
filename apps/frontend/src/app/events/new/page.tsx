'use client';

import { useState } from 'react';

type simpleDrink = {
  id: number;
  name: string;
};
// Mock data for drinks
const mockDrinks: simpleDrink[] = [
  { id: 1, name: 'Gösser' },
  { id: 2, name: 'Heineken' },
  { id: 3, name: 'Soproni' },
];
export default function NewEventPage() {
  // States for event fields
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [consumedDrinks, setConsumedDrinks] = useState<Map<simpleDrink, number>>(new Map());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  let elements: any = Array.from(consumedDrinks.entries()).map(([drink, value]) => (
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
    </li>
  ));
  if (elements.length === 0) {
    elements = <li className='text-gray-500'>Nincs hozzáadott ital</li>;
  }

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
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Új esemény</h1>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <label className='block mb-2'>Esemény neve</label>
          <input
            type='text'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div>
          <label className='block mb-2'>Helyszín</label>
          <input
            type='text'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label className='block mb-2'>Kezdő dátum</label>
          <input
            type='datetime-local'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className='block mb-2'>Vége dátum</label>
          <input
            type='datetime-local'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Grid for Description and Consumed Drinks */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        {/* Description on the left */}
        <div>
          <label className='block mb-2'>Leírás</label>
          <textarea
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Placeholder'
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Consumed Drinks on the right */}
        <div>
          <label className='block font-bold mb-2'>Eddig elfogyasztott italok</label>
          <ul className='mb-4'>{elements}</ul>
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
  );
}
