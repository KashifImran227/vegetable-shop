"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const images = [
  {
    src: "/mix1.jpg",
    title: "Fresh Mix Vegetables",
    description: "A mix of the freshest vegetables available in the market.",
  },
  {
    src: "/redchilli.jpg",
    title: "Spicy Red Chilli",
    description: "Add some spice to your dishes with our red chilies!",
  },
  {
    src: "/tomato.jpg",
    title: "Juicy Tomato",
    description: "Perfect for salads and cooking.",
  },
  {
    src: "/potato.jpg",
    title: "Organic Potato",
    description: "Farm fresh and organic potatoes.",
  },
  {
    src: "/cherry.jpg",
    title: "Sweet Cherry Tomatoes",
    description: "Perfectly sweet and juicy.",
  },
  {
    src: "/cauliflower.jpg",
    title: "Fresh Cauliflower",
    description: "Ideal for your favorite dishes.",
  },
  {
    src: "/orange1.jpg",
    title: "Organic Oranges",
    description: "Freshly picked oranges rich in Vitamin C.",
  },
];

const ImageSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        className="h-screen w-full"
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="text-white text-xl md:text-3xl font-bold bg-black bg-opacity-70 p-4 rounded-lg shadow-lg mb-2 transition duration-300 transform hover:scale-105">
                {image.title}
              </div>
              <div className="text-white text-sm md:text-lg bg-black bg-opacity-70 p-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                {image.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="overflow-hidden whitespace-nowrap bg-[#00000067] py-2">
        <div className="animate-marquee whitespace-nowrap">
          Hello, this is a vegetable shop! You find all fresh fruits and vegetables here. Contact +92-300-1234567.
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
