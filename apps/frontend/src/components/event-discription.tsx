import { useEffect, useRef, useState } from 'react';

import { EventDetails } from '@/models/event';

interface Props {
  event: EventDetails;
}
export function EventDiscription({ event }: Props) {
  const [showFullText, setShowFullText] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleShowMoreClick = () => {
    setShowFullText(true);
  };

  const handleShowLessClick = () => {
    setShowFullText(false);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = showFullText ? `${descriptionRef.current.scrollHeight}px` : '1.5rem';
    }
  }, [showFullText]);

  if (!event?.description || event?.description.trim() === '') {
    return null;
  }

  return (
    <div className='w-[53rem]'>
      <p ref={descriptionRef} className='overflow-hidden transition-max-h duration-500'>
        {event.description}
      </p>

      {!showFullText && event?.description.length > 100 && (
        <button onClick={handleShowMoreClick} className='underline'>
          Show more
        </button>
      )}
      {showFullText && (
        <button onClick={handleShowLessClick} className='underline'>
          Show less
        </button>
      )}
    </div>
  );
}
