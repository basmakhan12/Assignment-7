import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
       
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
  );
};

export default Footer;
