import React from "react";

const BlogCard = ({ blog, onEdit, onDelete, showActions = true }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500">By {blog.author} | {blog.category}</p>
      <p className="mt-2">{blog.content}</p>
      {blog.image && (
        <img src={blog.image} alt="blog" className="mt-2 w-full max-h-60 object-cover rounded" />
      )}
      {showActions && (
        <div className="flex gap-2 mt-4">
          <button onClick={() => onEdit(blog)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
          <button onClick={() => onDelete(blog._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
