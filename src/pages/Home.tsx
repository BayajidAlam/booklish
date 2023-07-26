import React, { useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";
import { useUpdatedBooksQuery } from "../redux/features/cart/cartApi";

const data = [
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
    price: 500
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 850
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price:600
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 900
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 800
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 100
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 200
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 300
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 400
  },
  {
    tittle: "jgosford3",
    author: "Julietta Gosford",
    genre: "Apache",
    publicationData: "10/9/2022",
    image: "https://i.ibb.co/zrhjLbp/images.jpg",
     price: 400
  },
];


export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/books/updated-books")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data: IBook[]) => {
  //       setBooks(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const {data} = useUpdatedBooksQuery()
  
  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto py-12">
      <p className="text-xl font-mono">New on Booklish</p>
      <hr className="my-6 text-black" />
      <div className="grid grid-cols-5 gap-12">
        {data?.data?.map((card: IBook, i: number) => (
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
