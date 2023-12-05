'use client'

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  const inputTextColor = theme === 'dark' ? 'text-white' : 'text-black';
  return (
    <div className={ `flex flex-row justify-between p-10 py-15  mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 ${inputTextColor}` }>
      <div className="">Made by Ibrahim</div>
      <ul className="flex flex-row gap-5 font">
        <li> <a href="https://www.linkedin.com/in/ibuu/"> <FaLinkedin /> </a>  </li>
        <li> <a href="https://twitter.com/mdibrahimibuu"> <FaXTwitter /> </a> </li>
        <li> <a href="https://github.com/ibugithub"> <FaGithub /> </a> </li>
      </ul>
    </div>
  )
}

export default Footer;
