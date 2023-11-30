import React from "react";
import Image from 'next/image'

import { technologies } from './constant'

const Tech = () => {
  return (
    <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mb-16">
      <h2 className="text-[35px] font-bold">Tech Stack</h2>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <Image src={technology.icon} alt="this is a tech image" />
          </div>
        ))}
      </div>
    </div>

  );
};

export default Tech;
