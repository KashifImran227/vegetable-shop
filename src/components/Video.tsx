"use client";

import React from "react";

const Video: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-white text-opacity-85 text-6xl font-bold bg-green-950 bg-opacity-50 p-6 font-sans rounded text-center">
          Welcome to My Vegetable Shop
        </div>
        <div className="mt-4 text-white text-2xl bg-green-950 bg-opacity-50 p-2 rounded-lg text-center">
          Discover the fresh vegetables and fruits available!
        </div>
      </div>
    </div>
  );
};

export default Video;
