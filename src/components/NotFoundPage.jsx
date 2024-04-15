// src/components/NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-8">
        We can't seem to find the page you're looking for.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
