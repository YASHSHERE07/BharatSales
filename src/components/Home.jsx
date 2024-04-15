import React from "react";
import { Link } from "react-router-dom";
import NewArrivals from "./NewArrivals";

const Home = () => {
  const handleSubscribe = () => {
    // Handle subscription logic here
  };

  return (
    <>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 bg-[#D1BB9E] p-14 rounded-b-[100px]">
          {/* Hero Image container */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Hero Fashion"
              className="max-w-full md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
          {/* Hero Text container */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-2xl md:text-3xl lg:text-[40px] font-bold text-brown-800   font-rubik-mono">
              Click Explore Love
            </p>
            <p className="mt-4 text-base md:text-3xl text-brown-600">
              Everything You Desire, Just a Tap Away!
            </p>
            <Link to="/products">
              <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                View Collections
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/products">
        <div className="bg-black h-[200px] my-10 text-white flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <div className="text-center font-bungee text-lg md:text-[30px] space-x-10 font-rubik-mono">
            From Tech to Trends: Discover Your Style in Gadgets, Jewelry, and
            Apparel
            <p>WE GOT EVERYTHING.....</p>
          </div>
        </div>
      </Link>
      {/* After hero */}
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <NewArrivals />
      </div>
      <div>
        <div className="bg-black p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="col-span-1 md:col-span-2 text-center md:text-left font-rubik-mono text-lg md:text-[30px]">
            <p className="text-white">Subscribe to our newsletter</p>
            <p className="text-white">
              Get updates on new products, special offers, and more.
            </p>
          </div>
          <form className="flex" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              className="py-2 px-4 grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
