import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-row justify-around items-center w-full text-center py-4 bg-gradient-to-l from-slate-500 to-slate-800 border-t border-gray-700 text-white">
      <div className="text-sm hidden md:flex">
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights reserved.
      </div>
      <div className="flex flex-row gap-4">
        <a
          href="http://www.youtube.com/@cristianoSilvaDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaYoutube className="text-xl" title="YouTube" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristiano-pereira-da-silva-bb991a124/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin className="text-xl" title="LinkedIn" />
        </a>
        <a
          href="https://cristianosilvadev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaGlobe className="text-xl" title="Website" />
        </a>
      </div>
    </footer>
  );
}
