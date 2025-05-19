import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";
import BlogCard from "../components/BlogCard";
import AlertMessage from "../components/AlertMessage";
import { useNavigate } from "react-router-dom";

const MyBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const fetchMyBlogs = async () => {
    try {
      const res = await axiosInstance.get("/api/blogs/my");
      setBlogs(res.data);
    } catch {
      setAlert({ type: "error", message: "Failed to load your blogs." });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      setAlert({ type: "success", message: "Deleted successfully!" });
    } catch {
      setAlert({ type: "error", message: "Delete failed." });
    }
  };

  const handleEdit = (blog) => {
    navigate(`/edit/${blog._id}`);
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Blogs</h1>
      {alert && <AlertMessage type={alert.type} message={alert.message} />}
      {blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} showActions={true} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MyBlogsPage;
