import React, { useState } from "react";
import axiosInstance from "../api/axiosConfig";
import { toast } from "react-toastify";
import AlertMessage from "../components/AlertMessage";

const CreateBlogPage = () => {
  const [form, setForm] = useState({ title: "", category: "", content: "", image: "" });
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      await axiosInstance.post("/api/blogs", form);
      toast.success("Blog created successfully!");
      setForm({ title: "", category: "", content: "", image: "" });
    } catch (err) {
      setAlert({ type: "error", message: "Failed to create blog." });
      toast.error("message: Failed to create blog.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
      {alert && <AlertMessage type={alert.type} message={alert.message} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <textarea className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Content" rows="5" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Image URL (optional)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded" type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
