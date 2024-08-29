// StarRating.tsx
import React from 'react';

interface StarRatingProps {
  rating: number; // Value from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Ensure rating is within the 0-5 range
  const clampedRating = Math.max(0, Math.min(rating, 5));

  // Generate star characters based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => 
    index < clampedRating ? '★' : '☆'
  );

  return (
    <div style={{ fontSize: '16px', color: '#FFD700' }}>
      {stars.join(' ')}
    </div>
  );
};

export default StarRating;