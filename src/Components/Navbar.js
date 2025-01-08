import React, { useState, useEffect } from "react";

const Navbar = ({ scrollToSection }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuActive]);

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-[#0F0F0F] text-white">
      <span className="text-2xl font-bold">
        <a href="/">JC</a>
      </span>

      {/* Menu for desktop */}
      <ul className="hidden font-semibold md:flex text-2xl space-x-4">
        <li>
          <button onClick={() => scrollToSection("hero")} className="hover:text-gray-400">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-400">
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")} className="hover:text-gray-400">
            Projects
          </button>
        </li>
      </ul>

      {/* Hamburger icon or close icon for mobile */}
      <div
        className="md:hidden z-50 fixed top-4 right-6"
        onClick={toggleMenu}
      >
        {menuActive ? (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>

      {/* Mobile menu */}
      {menuActive && (
        <div
          id="resize"
          className="absolute top-0 left-0 w-full h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-center z-40"
        >
          <ul className="space-y-4 text-center">
            <li className="text-4xl">
              <button
                onClick={() => {
                  scrollToSection("hero");
                  setMenuActive(false);
                }}
                className="hover:text-gray-400"
              >
                Home
              </button>
            </li>
            <li className="text-4xl">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setMenuActive(false);
                }}
                className="hover:text-gray-400"
              >
                About
              </button>
            </li>
            <li className="text-4xl">
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setMenuActive(false);
                }}
                className="hover:text-gray-400"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
