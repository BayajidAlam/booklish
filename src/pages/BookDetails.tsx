import { IBook } from "../types/globalTypes";
import { Link, useParams } from "react-router-dom";
import Star from "../utils/Star";
import Review from "../components/Review";
import { useAppDispatch } from "../redux/hook";
import { addToCart } from "../redux/features/cart/cartSlice";
import MakeReview from "../components/MakeReview";
import { useGetSingleBookQuery } from "../redux/features/cart/cartApi";

const reviews = [
  {
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
  },
  {
    name: "Jane Smith",
    content: "Vestibulum ullamcorper tortor ac tristique placerat.",
    rating: 5,
  },
];

export default function BookDetails() {
  const { id } = useParams();
  const rating = 3.4;
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetSingleBookQuery(id);
  console.log(data?.data, "data");
  console.log(error, "error");

  if (isLoading) {
    return;
  }
  const { image, tittle, publicationDate, author } = data?.data as IBook;
  const handleAddToCart = (book: IBook) => {
    dispatch(addToCart(book));
  };

  return (
    <>
      <div className="flex justify-center items-center lg:container md:w-[90%] w-[90%] mx-auto py-12">
        <div className="w-[50%] bg-blue-400 h-96">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="w-[50%] h-96 px-8 py-6">
          <p className="text-2xl mb-4 capitalize">{tittle}</p>
          <div className="flex gap-4">
            <p className="font-semibold text-xl">
              Author: <span className="font-normal text-lg">{author}</span>
            </p>
            <p></p>
          </div>
          <div className="flex items-center justify-start gap-4 my-6">
            <p className="bg-white text-black border border-black rounded-md w-20 p-2 text-center">
              Fiction
            </p>
            <p className="bg-black text-white w-20 p-2 rounded-md text-center">
              Fiction
            </p>
            <p className="bg-white text-black border border-black rounded-md w-20 p-2 text-center">
              Fiction
            </p>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <Star rating={rating} />
            <p className="text-xl">246 Review</p>
          </div>
          <button
            onClick={() => handleAddToCart(books)}
            className="btn btn-primary rounded-none my-6 font-bold text-lg w-40"
          >
            Add to Cart
          </button>

          <div className="flex items-center justify-start gap-4">
            <Link to="/update-book">
              <button className="btn btn-danger rounded-none w-40 mt-0 mb-6 font-bold text-lg">
                Edit Book
              </button>
            </Link>

            <button className="btn w-40 btn-secondary rounded-none mt-0 mb-6 font-bold text-lg">
              Delete book
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12">
        <h1 className="text-3xl font-semibold mb-6">Reader's Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <MakeReview />
      </div>
    </>
  );
}
