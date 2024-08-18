import { useState } from 'react';

import { EventDetails } from '@/models/event';

interface Props {
  event: EventDetails;
}
export function EventDiscription({ event }: Props) {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMoreClick = () => {
    setShowFullText(true);
  };

  const handleShowLessClick = () => {
    setShowFullText(false);
  };

  if (!event?.description || event?.description.trim() === '') {
    return null;
  }

  return (
    <div>
      <p>
        {/* eslint-disable-next-line no-nested-ternary */}
        {showFullText
          ? event.description
          : event?.description.length > 100
            ? `${event?.description.slice(0, 100)}... `
            : event.description}
        {!showFullText && event?.description.length > 100 && (
          <button onClick={handleShowMoreClick} className='text-blue-500 underline'>
            Show more
          </button>
        )}
        {showFullText && (
          <button onClick={handleShowLessClick} className='text-blue-500 underline'>
            Show less
          </button>
        )}
      </p>
    </div>
  );
}
