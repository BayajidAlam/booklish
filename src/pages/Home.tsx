import React, { useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";

const data = [
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954db0916593be5d090f0",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954db0916593be5d090f0",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954db0916593be5d090f1",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954db0916593be5d090f1",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b88",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b88",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954db0916593be5d090ef",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954db0916593be5d090ef",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b89",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b89",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b87",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b87",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b85",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b85",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b84",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b84",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954da0916593be5d08b86",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954da0916593be5d08b86",
  },
  {
    publicationDate: "2023-07-20T15:34:01.543Z",
    _id: "64b954db0916593be5d090ee",
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    id: "64b954db0916593be5d090ee",
  },
];


export default function Home() {
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto py-12">
      <p className="text-xl font-mono">New on Booklish</p>
      <hr className="my-6 text-black" />
      <div className="grid grid-cols-5 gap-12">
        {books?.data?.map((card: IBook, i: number) => (
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
        ))}
      </div>
    </div>
  );
}
