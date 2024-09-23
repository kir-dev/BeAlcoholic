'use client';

import { useAddDrinkActionToEventMutation, useFetchEventDetailsQuery } from '@/api/eventHooks';
import { DrinkActionTile } from '@/components/drink-action-tile';

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { data: event, isLoading, error, refetch } = useFetchEventDetailsQuery(params.id);
  const { mutate } = useAddDrinkActionToEventMutation();

  if (isLoading) return 'Loading...';
  if (error) return error.message;
  if (!event) return null;

  const addDrinkAction = () => {
    mutate(
      { drinkId: '4bd5daa0-cad6-4c0a-961c-feb9c8eb0fc4', eventId: params.id, milliliter: 500, price: 999 },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>{event.name}</h1>
      {event.description && <p>{event.description}</p>}
      <p>
        {new Date(event.startDate).toLocaleString('hu')} - {new Date(event.endDate).toLocaleString('hu')}
      </p>
      <p>
        Létrehozta: {event.owner.lastName} {event.owner.firstName}
      </p>

      <div className='flex flex-col gap-4'>
        {event.drinkActions.map((da) => (
          <DrinkActionTile key={da.id} drinkAction={da} />
        ))}
      </div>
      <button onClick={addDrinkAction}>Ittam valamit!</button>
    </main>
  );
}
