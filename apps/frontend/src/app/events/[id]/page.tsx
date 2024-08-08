import { DrinkActionTile } from '@/components/drink-action-tile';
import { events } from '@/models/mockData';

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);
  if (!event) return null;
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>{event.name}</h1>
      {event.description && <p>{event.description}</p>}
      <p>
        {event.startDate.toLocaleString('hu')} - {event.endDate.toLocaleString('hu')}
      </p>
      <p>
        Létrehozta: {event.owner.lastName} {event.owner.firstName}
      </p>

      <div className='flex flex-col gap-4'>
        {event.drinkActions.map((da) => (
          <DrinkActionTile key={da.id} drinkAction={da} />
        ))}
      </div>
    </main>
  );
}
