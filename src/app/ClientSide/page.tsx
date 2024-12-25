"use client";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Client = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log("this is running before component");
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    // Add more products as needed...
  ];

  return (
    <div>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <>
          <div className="flex items-center justify-between w-full h-[80px] bg-purple-800 px-4 md:px-8">
            {/* Title */}
            <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
              Data Fetching
            </div>
            <FiAlignJustify className="text-white text-4xl md:text-5xl lg:text-6xl cursor-pointer" />
          </div>
  
          <div>
  <h1 className="text-center mt-6 font-bold text-2xl sm:text-3xl sm:mt-8 lg:mt-10 lg:text-4xl">
    Client Side Data Fetching
  </h1>
</div>

          <div className="p-4">
            {products.map((product) => (
              <div key={product.id} className="border-b py-2">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="font-bold">Price: ${product.price}</p>
                <p>Rating: {product.rating.rate} (Count: {product.rating.count})</p>
              </div>
              
            ))}
            <div className="w-full h-auto bg-purple-800 p-6 flex flex-col items-center">
      {/* Main Title */}
      <div className="text-white text-3xl font-semibold mt-10">
        Data Fetching
      </div>
      
      {/* Subtitle */}
      <div className="text-white font-bold text-xl mt-4">
        About this Project
      </div>
      
      {/* Arrow Icon */}
      <FaArrowAltCircleDown className="text-white text-3xl mt-4" />
      
      {/* Button with Link */}
      <Link href="https://segment.com/academy/collecting-data/when-to-track-on-the-client-vs-server/#:~:text=The%20main%20difference%20between%20client,server%2Dside%20fulfills%20these%20requests.">
        <button className="mt-6 px-4 py-2 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-purple-800 transition duration-300">
          Click This
        </button>
      </Link>
    </div>
    <div className='flex justify-center items-center text-white w-full h-[50px] bg-black md:h-[60px] lg:h-[70px] text-sm md:text-base lg:text-lg'>
  2024 Data Fetching Assignment
  develop by basma khan
</div>
          </div>
        </>
        
        
      )}
       
    </div>
  );
};

export default Client;