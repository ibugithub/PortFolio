import React from "react";
import { styles } from "./styles";

const About = () => {
  return (
    <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mb-16">
    
      <h2 className="text-[35px] font-bold">INTRODUCTION</h2>

      <p className='mt-4 text-secondary text-[25px] max-w-3xl leading-[40px]'>
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!

      </p>

      <button type="button" className=" bg-green-200 p-5 rounded mt-5">
        Download the CV
      </button>
    </div>
  );
};

export default About;
