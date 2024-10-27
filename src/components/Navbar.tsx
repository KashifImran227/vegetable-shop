"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 bg-[#0000000] backdrop-blur-lg p-2 z-50 shadow-md text-lg">
=======
    <nav className="fixed top-0 left-0 right-0 bg-[#00000000] backdrop-blur-lg p-2 z-50 shadow-md text-lg">
>>>>>>> 9200265c3ea73b1813ccb53a9b96e4da413904fa
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">
            SABZI.<span className="text-green-600 text-[18px]">COM</span>
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"} 
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-[#00000075] md:bg-transparent left-0 right-0 top-full transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-green-300 transition duration-300 block p-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Products"
              className="text-white hover:text-green-300 transition duration-300 block p-4"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-white hover:text-green-300 transition duration-300 block p-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white hover:text-green-300 transition duration-300 block p-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
