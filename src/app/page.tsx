"use client";
import React from "react";
import ImageSlider from "@/components/ImageSlider";
import Video from "@/components/Video";
import Link from "next/link";
import Products from '@/components/Products';
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-[#00000059] backdrop-blur-lg p-4 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">
            <Link href="/">
              SABZI.<span className="text-green-600 text-[18px]">COM</span>
            </Link>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#"
                className="text-white hover:text-green-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#Products"
                className="text-white hover:text-green-300 transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="text-white hover:text-green-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="text-white hover:text-green-300 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ImageSlider />
      <Video />

      <section
        id="Products"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
      <Products/>
      </section>

      <section
        id="About"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
       <About/>
      
      </section>

      <section
        id="Contact"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
      <Contact/>
      
      </section>
    </div>
  );
};

export default Home;
