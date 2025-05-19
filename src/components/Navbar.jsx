import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow flex justify-between items-center p-6 max-w-4xl mx-auto">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center gap-6">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/blogs")}
        >
          Blogs
        </h1>
        <div className="flex gap-4 ml-6">
          <button
            onClick={() => navigate("/blogs")}
            className={`text-sm font-medium ${
              isActive("/blogs") ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            All Blogs
          </button>
          <button
            onClick={() => navigate("/my-blogs")}
            className={`text-sm font-medium ${
              isActive("/my-blogs") ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            My Blogs
          </button>
        </div>
      </div>

      {/* Right side - Logout */}
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
