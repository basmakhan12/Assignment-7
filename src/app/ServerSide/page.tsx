import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from 'next/link';

const Server = () => {
  // JSON data
  const books = [
    {
      "id": 1,
      "name": "The Russian",
      "type": "fiction",
      "available": true
    },
    {
      "id": 2,
      "name": "Just as I Am",
      "type": "non-fiction",
      "available": false
    },
    {
      "id": 3,
      "name": "The Vanishing Half",
      "type": "fiction",
      "available": true
    },
    {
      "id": 4,
      "name": "The Midnight Library",
      "type": "fiction",
      "available": true
    },
    {
      "id": 5,
      "name": "Untamed",
      "type": "non-fiction",
      "available": true
    },
    {
      "id": 6,
      "name": "Viscount Who Loved Me",
      "type": "fiction",
      "available": true
    }
  ];

  return (
    <div className="font-sans">
      <div className="flex items-center justify-between w-full h-[80px] bg-purple-800 px-4 md:px-8">
        {/* Title */}
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
          Data Fetching
        </div>

        {/* Icon */}
        <FiAlignJustify className="text-white text-4xl md:text-5xl lg:text-6xl cursor-pointer" />
      </div>

      {/* Books List */}
      <div className="h-auto max-h-[600px] p-4 overflow-y-auto">
        {books.map((book) => (
          <div key={book.id} className="p-4 border-b border-gray-300">
            <h2 className="text-lg font-bold">{book.name}</h2>
            <p className="text-sm md:text-base">Type: {book.type}</p>
            <p className="text-sm md:text-base">Available: {book.available ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="w-full h-auto bg-purple-800 p-6 flex flex-col items-center">
        <div className="text-white text-2xl sm:text-3xl font-semibold mt-10 text-center">
          Data Fetching
        </div>
        <div className="text-white font-bold text-lg sm:text-xl mt-4 text-center">
          About this Project
        </div>
        <FaArrowAltCircleDown className="text-white text-3xl mt-4" />
        <Link href="https://segment.com/academy/collecting-data/when-to-track-on-the-client-vs-server/#:~:text=The%20main%20difference%20between%20client,server%2Dside%20fulfills%20these%20requests.">
          <button className="mt-6 px-6 py-2 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-purple-800 transition duration-300">
            Click This
          </button>
        </Link>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-center items-center text-white w-full h-[50px] bg-black md:h-[60px] lg:h-[70px] text-xs sm:text-sm md:text-base lg:text-lg">
        2024 Data Fetching Assignment developed by Basma Khan
      </div>
    </div>
  );
}

export default Server;
