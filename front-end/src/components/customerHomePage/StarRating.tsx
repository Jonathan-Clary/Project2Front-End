// StarRating.tsx
import React from 'react';
interface StarRatingProps {
  rating: number; // Rating value from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Ensure rating is within the 0-5 range
  const clampedRating = Math.max(0, Math.min(rating, 5));

  // Determine the number of full stars, half star, and empty stars
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating - fullStars >= 0.01;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', color:"gold"}}>
      {Array.from({ length: fullStars }, (_, index) => (
        <i className="bi bi-star-fill"></i>
      ))}
      {hasHalfStar && <i className="bi bi-star-half"></i>}
      {Array.from({ length: emptyStars }, (_, index) => (
        <i className="bi bi-star"></i>
      ))}
    </div>
  );
};

export default StarRating;