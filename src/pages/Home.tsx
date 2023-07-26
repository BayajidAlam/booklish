import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";
import { useUpdatedBooksQuery } from "../redux/features/cart/cartApi";

export default function Home() {
  const { data } = useUpdatedBooksQuery(undefined);

  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto py-12">
      <p className="text-xl font-mono">New on Booklish</p>
      <hr className="my-6 text-black" />
      <div className="grid grid-cols-5 gap-12">
        {data?.data?.map((card: IBook, i: number) => (
          <Link key={i} to={`/books/${card._id}`}>
            <div key={i} className="card w-60 bg-base-100 shadow-xl">
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
