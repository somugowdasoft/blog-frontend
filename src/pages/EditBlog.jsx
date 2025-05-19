import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import AlertMessage from "../components/AlertMessage";
import { toast } from "react-toastify";

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", category: "", content: "", image: "" });
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/api/blogs/${id}`).then((res) => {
      setForm(res.data);
    }).catch(() => {
       toast.error("Unauthorized or not found");
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/api/blogs/${id}`, form);
       toast.success("Blog updated!");
      setTimeout(() => navigate("/my-blogs"), 1000);
    } catch {
      toast.error("Update failed.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
      {alert && <AlertMessage type={alert.type} message={alert.message} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="w-full border p-2 rounded" type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <textarea className="w-full border p-2 rounded" placeholder="Content" rows="5" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <input className="w-full border p-2 rounded" type="text" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlogPage;
