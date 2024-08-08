import Link from 'next/link';

import { events } from '@/models/mockData';

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      {events.map((e) => (
        <Link key={e.id} href={`/events/${e.id}`}>
          <h2>{e.name}</h2>
        </Link>
      ))}
    </main>
  );
}
