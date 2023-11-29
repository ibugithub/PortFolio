import React from "react";
import Image from 'next/image'

import { technologies } from './constant'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mb-16'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Image src={technology.icon} alt="this is a tech image"/>
        </div>
      ))}
    </div>
  );
};

export default Tech ;
