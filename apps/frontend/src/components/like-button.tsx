import { ThumbsUp } from 'lucide-react';
import { useState } from 'react';

import { Button } from './ui/button';

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Button variant='ghost' onClick={handleLikeClick}>
      <ThumbsUp
        className={`-ml-6 mr-2 -mt-1 transition-transform duration-300 ${isAnimating ? 'scale-125 rotate-12' : ''}`}
        color={liked ? '#22c55e' : 'black'}
      />
      {liked ? likeCount : 'Like'}
    </Button>
  );
}
