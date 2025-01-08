import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white p-6">
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-center px-4">
        <p className="text-2xl font-medium tracking-tighter mb-4">
          Got an interesting project? I can help you.
        </p>
        <div className="border-t border-gray-500 w-full mb-4"></div>
        <div className="flex flex-col md:flex-row justify-around items-center w-full space-y-4 md:space-y-0">
          <div>
            <p className="text-xl font-semibold tracking-tighter">Say hello!</p>
            <h4 className="text-lg">
              <a href="mailto:jaharicraw11@gmail.com" className="text-white hover:text-gray-400">
                jaharicraw11@gmail.com
              </a>
            </h4>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tighter">Connect with me</p>
            <ul className="space-y-2 ">
              <li className="flex items-center space-x-2 justify-center">
                <FaGithub size={20} />
                <a
                  href="https://github.com/jahari11"
                  className="text-white hover:text-gray-400"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center space-x-2 justify-center">
                <FaLinkedin size={20} />
                <a
                  href="https://www.linkedin.com/in/jahari-crawford-young-b11564165/"
                  className="text-white hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
