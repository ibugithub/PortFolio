import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between p-10 py-15">
      <div className="">Mady by Ibrahim</div>
      <ul className="flex flex-row gap-5">
        <li> <a href="https://www.linkedin.com/in/ibuu/"> <FaLinkedin /> </a>  </li>
        <li> <a href="https://twitter.com/mdibrahimibuu"> <FaXTwitter /> </a> </li>
        <li> <a href="https://github.com/ibugithub"> <FaGithub /> </a> </li>
      </ul>
    </div>
  )
}

export default Footer;
