import React from "react";

const vegetables = [
  {
    id: 1,
    title: "Fresh Mix Vegetables",
    description: "A mix of the freshest vegetables available.",
    image: "/mix1.jpg",
    price: "$2.99",
  },
  {
    id: 2,
    title: "Spicy Red Chilli",
    description: "Add some spice to your dishes.",
    image: "/redchilli.jpg",
    price: "$1.49",
  },
  {
    id: 3,
    title: "Juicy Tomato",
    description: "Perfect for salads and cooking.",
    image: "/tomato.jpg",
    price: "$0.99",
  },
  {
    id: 4,
    title: "Organic Potato",
    description: "Farm fresh and organic.",
    image: "/potato.jpg",
    price: "$1.20",
  },
  {
    id: 5,
    title: "Sweet Cherry Tomatoes",
    description: "Perfectly sweet and juicy.",
    image: "/cherry.jpg",
    price: "$3.00",
  },
  {
    id: 6,
    title: "Fresh Cauliflower",
    description: "Ideal for your favorite dishes.",
    image: "/cauliflower.jpg",
    price: "$2.50",
  },
  {
    id: 7,
    title: "Onions",
    description: "Freshly picked, daily use vegetable.",
    image: "/onion.jpg",
    price: "$0.70",
  },
  {
    id: 8,
    title: "Organic Corn",
    description: "Soft and fresh corn.",
    image: "/corn.jpg",
    price: "$1.80",
  },
];

const fruits = [
  {
    id: 1,
    title: "Fresh Apples",
    description: "Crisp and juicy apples.",
    image: "/apple.jpg",
    price: "$2.50",
  },
  {
    id: 2,
    title: "Bananas",
    description: "Sweet and ripe bananas.",
    image: "/banana.jpg",
    price: "$1.00",
  },
  {
    id: 3,
    title: "Oranges",
    description: "Fresh and tangy oranges.",
    image: "/orange1.jpg",
    price: "$3.00",
  },
  {
    id: 4,
    title: "Grapes",
    description: "Sweet and delicious grapes.",
    image: "/grapes.jpg",
    price: "$2.00",
  },
  {
    id: 5,
    title: "Pineapple",
    description: "Tropical and sweet pineapple.",
    image: "/pineapple.jpg",
    price: "$4.00",
  },
  {
    id: 6,
    title: "Strawberries",
    description: "Fresh and juicy strawberries.",
    image: "/strawberry.jpg",
    price: "$3.50",
  },
  {
    id: 7,
    title: "Blueberries",
    description: "Healthy and sweet blueberries.",
    image: "/blueberries.jpg",
    price: "$5.00",
  },
  {
    id: 8,
    title: "Watermelon",
    description: "Refreshing and juicy watermelon.",
    image: "/melon.jpg",
    price: "$4.50",
  },
];

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-white text-6xl mb-4 text-center">Our Products</h1>
      <h2 className="text-3xl mb-4 text-center text-green-500">
        Fresh Vegetables
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {vegetables.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-white text-xl mt-2">{product.title}</h2>
            <p className="text-gray-400">{product.description}</p>
            <p className="text-green-400 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mb-0 text-center text-green-500 p-10 ">
        Organic Fruits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {fruits.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-white text-xl mt-2">{product.title}</h2>
            <p className="text-gray-400">{product.description}</p>
            <p className="text-green-400 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
