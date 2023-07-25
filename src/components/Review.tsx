interface Review {
  name: string;
  content: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
}

export default function Review({ review }:ReviewCardProps) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">{review.name}</h2>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 fill-current ${
                  index < review.rating ? "text-yellow-500" : "text-gray-400"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .76l2.42 6.93h6.21l-4.99 3.86 1.99 6.86-5.14-3.89-5.15 3.9 1.99-6.86L1.37 7.69H7.6L10 .76zM6.89 9.56l1.93 6.63 1.92-6.63H6.89z"
                />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-600 ml-4">{review.rating.toFixed(1)}</p>
      </div>
      <p className="mt-4 text-gray-800">{review.content}</p>
    </div>
  );
}
