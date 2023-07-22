import React from "react";

interface RatingStarsProps {
  rating: number;
}

export default function Star({ rating }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasFraction = rating % 1 !== 0;
  const fraction = hasFraction ? rating % 1 : 0;
  return (
    <div className="flex items-center">
    {[...Array(fullStars)].map((_, index) => (
      <svg
        key={index}
        className="w-6 h-6 fill-current text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 .76l2.42 6.93h6.21l-4.99 3.86 1.99 6.86-5.14-3.89-5.15 3.9 1.99-6.86L1.37 7.69H7.6L10 .76zM6.89 9.56l1.93 6.63 1.92-6.63H6.89z"
        />
      </svg>
    ))}

    {hasFraction && (
      <svg
        className="w-6 h-6 fill-current text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/* Path for a partially filled star */}
        <path d="M10 0L6.89 9.56l-4.38.64L8.38 15l-2.49 4.8 4.89-2.98 4.89 2.98-2.49-4.8 6.88-4.8-4.37-.64L10 0z" />
      </svg>
    )}

    {[...Array(5 - Math.ceil(rating))].map((_, index) => (
      <svg
        key={index}
        className="w-6 h-6 fill-current text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 .76l2.42 6.93h6.21l-4.99 3.86 1.99 6.86-5.14-3.89-5.15 3.9 1.99-6.86L1.37 7.69H7.6L10 .76zM6.89 9.56l1.93 6.63 1.92-6.63H6.89z"
        />
      </svg>
    ))}
  </div>
  );
}
