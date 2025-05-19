import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import BlogCard from "../components/BlogCard";
import BlogFilter from "../components/BlogFilter";
import { useAuth } from "../context/AuthContext";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({ author: "", category: "" });
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchBlogs();
  }, [filters]);

  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/api/blogs", { params: filters });
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/blogs/${id}`);
      fetchBlogs(); // Refresh after deletion
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">All Blogs</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/create")}
        >
          + Create Blog
        </button>
      </div>

      <BlogFilter
        authors={[...new Set(blogs.map((blog) => blog.author))]}
        categories={[...new Set(blogs.map((blog) => blog.category))]}
        selected={filters}
        onChange={(e) =>
          setFilters({ ...filters, [e.target.name]: e.target.value })
        }
      />

      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          showActions={user.user._id === blog.userId}
          onEdit={() => navigate(`/edit/${blog._id}`)}
          onDelete={() => handleDelete(blog._id)}
        />
      ))}
    </div>
  );
};

export default BlogsPage;
