/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../types/globalTypes";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/cart/cartApi";
import { useMemo, useState } from "react";

export default function Product() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPublicationYear, setSelectedPublicationYear] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = useMemo(() => {
    if (!data) return [];

    const lowercaseSearchTerm = searchTerm.toLowerCase();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,
    return data?.data?.filter((book: IBook) => {
      const lowercaseGenre = book.genre.toLowerCase();
      const lowercasePublicationYear = book.publicationDate
        ?.split("T")[0].substring(0, 4).toLowerCase();
      console.log(lowercasePublicationYear);
      // Apply filters based on selectedGenre and selectedPublicationYear
      const genreFilterPass =
        selectedGenre === "" || lowercaseGenre === selectedGenre.toLowerCase();
      const publicationYearFilterPass =
        selectedPublicationYear === "" ||
        lowercasePublicationYear === selectedPublicationYear.toLowerCase();

      // Apply search filter based on title, author, and genre
      const searchFilterPass =
        lowercaseSearchTerm === "" ||
        book.tittle.toLowerCase().includes(lowercaseSearchTerm) ||
        book.author.toLowerCase().includes(lowercaseSearchTerm) ||
        lowercaseGenre.includes(lowercaseSearchTerm);

      return genreFilterPass && publicationYearFilterPass && searchFilterPass;
    });
  }, [data, searchTerm, selectedGenre, selectedPublicationYear]);

  const newFilterData = filteredData?.map((obj) => obj.genre)
    .filter((genre, index, array) => array.indexOf(genre) === index);
 

  const newFilterDate = filteredData?.map((obj) => obj.publicationDate)
    .filter((publicationDate, index, array) => array.indexOf(publicationDate) === index);
  console.log(newFilterDate);

  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto py-8">
      <div className="flex justify-between items-center my-4">
        <div className="h-8 relative">
          <input
            className="w-80 bg-base-200 h-full outline-none px-2"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="w-12 bg-blue-300 h-full absolute">
            <div className="flex justify-center items-center text-2xl">
              <AiOutlineSearch />
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <select
            className="bg-base-200 rounded-md px-2 py-1"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            
            {
              newFilterData?.map((filt)=><option value="fiction">
                {filt}
              </option>)
            }
          </select>
          <select
            className="bg-base-200 rounded-md px-2 py-1"
            value={selectedPublicationYear}
            onChange={(e) => setSelectedPublicationYear(e.target.value)}
          >
            <option value="">All Years</option>
            {
              newFilterDate?.map((filt)=><option value={filt?.substring(0, 4)}>
                {filt?.substring(0, 4)}
              </option>)
            }
          </select>
          <button
            className="px-3 py-1 rounded-2xl text-white font-bold text-md bg-blue-300"
            onClick={() => {
              setSelectedGenre("");
              setSelectedPublicationYear("");
              setSearchTerm("");
            }}
          >
            Clear Filters
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
        {filteredData?.map((card: IBook, i: number) => (
          <Link key={i} to={`/books/${card._id}`}>
            <div className="card w-60 mx-auto bg-base-100 shadow-xl">
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
