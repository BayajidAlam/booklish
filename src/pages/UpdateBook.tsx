import React, { useState } from "react";
import { IBook } from "../types/globalTypes";

export default function UpdateBook() {
  const [updatedBook, setUpdatedBook] = useState<IBook>(initialBook);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the onUpdate function with the updated book data
    onUpdate(updatedBook);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Update Book
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={updatedBook.title}
              onChange={handleChange}
              required
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
              name="author"
              id="author"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={updatedBook.author}
              onChange={handleChange}
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
              name="genre"
              id="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              value={updatedBook.genre}
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
              value={updatedBook.publicationDate}
              onChange={handleChange}
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
    </div>
  );
}
