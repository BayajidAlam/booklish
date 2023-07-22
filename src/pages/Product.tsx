import { useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Product() {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/books/updated-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: IBook[]) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto py-8">
      <div className="flex justify-between items-center my-4">
        <div className="h-8 relative">
          <input
            className="w-80 bg-base-200 h-full outline-none px-2"
            type="text"
          />
          <button className="w-12 bg-blue-300 h-full absolute">
            <div className="flex justify-center items-center text-2xl">
              <AiOutlineSearch />
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="px-3 py-1 rounded-2xl text-white font-bold text-md bg-blue-300">
            genre
          </button>
          <button className="px-3 py-1 rounded-2xl text-white font-bold text-md bg-blue-300">
            genre
          </button>
          <Link
            to="/add-new-book"
            className="px-3 py-1 rounded-2xl text-white font-bold text-md bg-blue-300"
          >
            Add New Book
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-12">
        {books?.data?.map((card: IBook, i: number) => (
          <Link to={`/book/${card._id}`}>
            <div key={i} className="card w-60 mx-auto bg-base-100 shadow-xl">
              <figure>
                <img src={card.image} className="h-72 w-60" alt="Shoes" />
              </figure>
              <div className="card-body p-3">
                <h2 className="font-bold">{card.tittle}</h2>
                <div className="flex gap-4">
                  <p className="font-semibold ">{card.author}</p>
                  <p>{card.genre}</p>
                </div>
                <p>Published: {card?.publicationDate?.split("T")[0]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
