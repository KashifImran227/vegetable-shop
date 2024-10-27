'use client'
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target; 
    setFormData({ ...formData, [id]: value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

   
    setSuccess("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="p-6 bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] text-white">
      <h1 className="text-6xl text-center mb-8 mt-12 text-green-400">
        Contact Us
      </h1>
      <p className="text-xl mb-4 text-center">
        We’d love to hear from you! Whether you have a question about our
        products, pricing, or anything else, our team is ready to help you.
      </p>

      <div className="max-w-lg mx-auto mt-2 p-10">
        <form
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 text-center pb-10">
        <h2 className="text-3xl mb-0">Our Location</h2>
        <p>DHA Phase 1, Karachi</p>
      </div>
    </div>
  );
};

export default Contact;
