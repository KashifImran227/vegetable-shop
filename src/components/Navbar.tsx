"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00000025] backdrop-blur-lg p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">
            SABZI.<span className="text-green-600 text-[18px]">COM</span>
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`absolute md:static md:flex md:items-center flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 bg-[#00000075] md:bg-transparent left-0 right-0 top-full md:top-0 transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-green-300 transition duration-300 block p-2"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Products"
              className="text-white hover:text-green-300 transition duration-300 block p-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-white hover:text-green-300 transition duration-300 block p-2"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white hover:text-green-300 transition duration-300 block p-2"
              onClick={toggleMenu}
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
