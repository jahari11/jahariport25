import React, {useState} from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  return(
    <nav className="flex items-center justify-between py-4 px-6 bg-[#0F0F0F] text-white">
      <span className="text-2xl font-bold">
        <a href="/">JC</a>
      </span>
      <ul className="hidden md:flex space-x-4">
        <li className="hover:text-gray-400">Home</li>
        <li className="hover:text-gray-400">Work</li>
        <li className="hover:text-gray-400">About Me</li>
      </ul>
      <div className="md:hidden" onClick={toggleMenu}>
        <div id="toggle" className="text-sm">menu</div>
      </div>
      {menuActive && (
        <div id="resize" className="absolute top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-50">
          <div className="text-xl cursor-pointer mb-4" onClick={toggleMenu}>close</div>
          <ul className="space-y-4 text-center">
            <li><a href="/index" className="hover:text-gray-400">Home</a></li>
            <li><a href="/work" className="hover:text-gray-400">Work</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Me</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar;