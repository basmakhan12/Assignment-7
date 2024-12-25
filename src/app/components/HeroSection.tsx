import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='h-[500px] flex flex-col items-center justify-center'>
      {/* Title */}
      <div className='font-extrabold text-xl md:text-2xl lg:text-4xl text-center mb-8'>
        Data Fetching Assignment
      </div>

      {/* Buttons */}
      <div className='flex flex-col md:flex-row gap-4'>
        {/* Client-Side Rendering Button */}
        <Link href="/ClientSide">
          <button className='bg-black text-white text-lg md:text-xl lg:text-2xl font-bold border-2 border-solid border-white rounded px-6 py-4 hover:bg-white hover:text-black transition-all'>
            Client-Side Rendering
          </button>
        </Link>

        {/* Server-Side Rendering Button */}
        <Link href="/ServerSide">
          <button className='bg-black text-white text-lg md:text-xl lg:text-2xl font-bold border-2 border-solid border-white rounded px-6 py-4 hover:bg-white hover:text-black transition-all'>
            Server-Side Rendering
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
