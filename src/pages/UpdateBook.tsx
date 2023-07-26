import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/cart/cartApi";
import { useForm } from "react-hook-form";
import { IBook } from "../types/globalTypes";
import toast,{Toaster} from "react-hot-toast";

export default function UpdateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const [updateBook,{isSuccess}] = useUpdateBookMutation();

  if (isLoading) {
    return;
  }

  const { tittle, author, genre, publicationDate } = data?.data as IBook;

  const handleUpdateBook = async (newData) => {
    const { data } = await updateBook({ id, newData });
    console.log(data);
    if(data?.success){
      toast.success('Book updated successfully')
      reset()
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Update Book
        </h1>

        <form onSubmit={handleSubmit(handleUpdateBook)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              defaultValue={tittle}
              id="tittle"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              {...register("tittle")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-medium mb-2"
            >
              Author
            </label>
            <input
              type="text"
              {...register("author")}
              id="author"
              defaultValue={author}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-medium mb-2"
            >
              Genre
            </label>
            <input
              type="text"
              {...register("genre")}
              id="genre"
              defaultValue={genre}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="publicationDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Publication Date
            </label>
            <input
              type="date"
              {...register("publicationDate")}
              id="publicationDate"
              defaultValue={publicationDate}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
}
