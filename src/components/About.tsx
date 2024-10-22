import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] text-white">
      <h1 className="text-6xl text-center mb-8 text-green-400">About Us</h1>
      <p className="text-xl font-extralight mb-4 text-center">
        Welcome to SABZI.COM, your number one source for fresh vegetables and
        fruits. We’re dedicated to providing you the very best of organic
        produce, with an emphasis on quality, freshness, and sustainability.
      </p>
      <h2 className="text-3xl text-center mb-4 text-green-400">Our Mission</h2>
      <p className="text-lg mb-8 text-center font-extralight z-50">
        Our mission is to make fresh, organic produce accessible to everyone. We
        believe in supporting local farmers and providing our customers with the
        best produce available.
      </p>

      <h2 className="text-3xl text-center mb-4 text-green-400">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-400">Kashif Imran</h3>
          <p className="text-gray-400">Founder & CEO</p>
          <p className="mt-2 tracking-wide">
            Kashif Imran has over 10 years of experience in the organic farming industry
            and is passionate about bringing fresh produce to your table.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-emerald-400">Mehwish Ali</h3>
          <p className="text-gray-400">Head of Operations</p>
          <p className="mt-2 tracking-wide">
            Mehwish ensures that our operations run smoothly, from sourcing to
            delivery, always with the customer in mind.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-400">Asad Mehmood</h3>
          <p className="text-gray-400">Marketing Director</p>
          <p className="mt-2 tracking-wide">
            Asad is responsible for spreading the word about our products and
            values, connecting us with our wonderful community.
          </p>
        </div>
      </div>

      <h2 className="text-3xl text-center my-8">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4 mx-auto max-w-xl text-lg">
        <li>High-Quality Organic Produce</li>
        <li>Support Local Farmers</li>
        <li>Freshness Guaranteed</li>
        <li>Exceptional Customer Service</li>
      </ul>
      <p className="text-center">
        Thank you for choosing SABZI.COM! We look forward to serving you with
        the freshest produce.
      </p>
    </div>
  );
};

export default About;
