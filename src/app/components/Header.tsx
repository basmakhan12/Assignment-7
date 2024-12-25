import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-full h-[80px] bg-purple-800 px-4 md:px-8'>
        {/* Title */}
        <div className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
          Data Fetching
        </div>

        {/* Icon */}
        <FiAlignJustify className='text-white text-4xl md:text-5xl lg:text-6xl cursor-pointer' />
      </div>
    </div>
  );
};

export default Header;
