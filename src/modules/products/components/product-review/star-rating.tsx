import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface StarRatingProps {
    rating: number;
  }
  
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
