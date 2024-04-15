import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <nav className="bg-[#191919] text-white px-2 sm:px-4 py-2.5 rounded-2xl my-10">
        <div className="container flex justify-between items-center mx-auto max-w-6xl">
          {/* Placeholder for left side to keep the nav items centered */}
          <div className="flex-1"></div>
          {/* Centered nav items */}
          <div className="flex space-x-4">
            <Link
              to="/home"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Categories
            </Link>
          </div>
          {/* Shopping Cart Link, positioned to the right */}
          <div className="flex-1 flex justify-end">
            <Link to="/cart" className="p-2">
              <ShoppingCartIcon className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
