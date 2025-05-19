import React from "react";

const BlogFilter = ({ authors, categories, selected, onChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select name="author" value={selected.author} onChange={onChange} className="border p-2 rounded">
        <option value="">All Authors</option>
        {authors.map(author => (
          <option key={author} value={author}>{author}</option>
        ))}
      </select>
      <select name="category" value={selected.category} onChange={onChange} className="border p-2 rounded">
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default BlogFilter;
