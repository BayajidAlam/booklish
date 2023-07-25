import React, { useState } from "react";
import { useAppSelector } from "../redux/hook";
import { useCreateBookMutation } from "../redux/features/cart/cartApi";

interface Book {
  tittle: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  price: number;
  authorGmail: string;
}

export default function AddNewBook() {

  const { user} = useAppSelector((state)=>state.user)
  const [newBook, setNewBook] = useState<Book>({
    tittle: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: '',
    price: 0,
    authorGmail: user?.email!,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const [createBook,{isLoading}] = useCreateBookMutation()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Book:", newBook);
    createBook(newBook)
    
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
     
    >
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Add New Book
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="tittle"
              id="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="author"
              className="block text-gray-700 font-medium mb-2"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="author"
              className="block text-gray-700 font-medium mb-2"
            >
              Author Email
            </label>
            <input
              type="text"
              name="authorEmail"
              id="author"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.authorGmail}
              onChange={handleChange}
              defaultValue={user.email!}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-medium mb-2"
            >
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.genre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-medium mb-2"
            >
              Image Link
            </label>
            <input
              type="text"
              name="image"
              id="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="genre"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.price}
              onChange={handleChange}
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
              name="publicationDate"
              id="publicationDate"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={newBook.publicationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
