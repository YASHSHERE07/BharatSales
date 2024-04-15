import React from "react";
import { Link } from "react-router-dom";

const isAuthenticated = false; // This placeholder represents authentication state

const AuthLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center bg-[#1B3C73] text-white py-5 px-4 sm:px-6 lg:px-8 mb-10">
      <Link to="/home" className="mb-4 sm:mb-0">
        <h2 className="font-rubik-mono text-[30px] sm:text-[50px] leading-none">
          BHARAT SALES
        </h2>
      </Link>

      <div className="flex justify-center space-x-2 sm:space-x-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 hover:bg-blue-50 px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default AuthLinks;
