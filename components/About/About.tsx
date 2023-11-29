import React from "react";
import { styles } from "./styles";

const About = () => {
  return (
    <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mb-16">
    
      <h2 className="text-[35px] font-bold">INTRODUCTION</h2>

      <p className='mt-4 text-secondary text-[25px] max-w-3xl leading-[40px]'>
      Full Stack Web Developer with a relentless passion for crafting top-tier web solutions. Proficient in JavaScript, React, Redux, Ruby, Rails, and Python Django, with a track record of a 50% reduction in bounce rates and a 60% website performance improvement on Upwork. Mentored 20 junior developers, achieving a 70% code quality boost and 10% higher student retention at MICROVERSE. Strong soft skills include effective communication and adaptability, key to remote collaboration and quick language acquisition. Committed to high-quality code and passionate about creating innovative solutions that positively impact the world.

      </p>

      <button type="button" className=" bg-green-200 p-5 rounded mt-5">
        Download the CV
      </button>
    </div>
  );
};

export default About;
