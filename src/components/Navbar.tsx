"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setNavbarVisible(lastScrollTop > currentScroll || currentScroll < 10);
    setLastScrollTop(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-1 z-50 shadow-md transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">
            SABZI.<span className="text-green-600 text-[18px]">COM</span>
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static bg-[#00000075] md:bg-transparent left-0 right-0 top-full transition-all duration-300 ease-in-out`}
        >
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item} className="border-b md:border-none">
              <Link
                href={`/${item === "Home" ? "" : item}`}
                className="text-white hover:text-green-300 transition duration-300 block p-4"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
