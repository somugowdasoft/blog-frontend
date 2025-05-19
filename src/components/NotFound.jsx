import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Go to Signup
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
