
---

# 📝 React Blog Frontend

This is the frontend for a Blog application built with **React**, **React Router**, **Tailwind CSS**, and **Axios**. It connects to a backend REST API to manage blog posts with user authentication.

---
---
## 🚀 Features

- User Login & Signup
- Create, Edit, Delete Blog Posts
- Filter Blogs by Author or Category
- View All Blogs and My Blogs separately
- Protected Routes (Only authenticated users can access blog features)
- Responsive UI using Tailwind CSS
- Toast Notifications (react-toastify)
- JWT Token-based authentication

---

## 📁 Project Structure

```

src/
├── components/
│   ├── Navbar.jsx
│   ├── BlogCard.jsx
│   ├── BlogFilter.jsx
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── BlogsPage.jsx
│   ├── CreateBlogPage.jsx
│   ├── EditBlogPage.jsx
│   ├── MyBlogsPage.jsx
│   └── NotFound.jsx
├── context/
│   └── AuthContext.jsx
├── utils/
│   └── axiosInstance.js
│   └── PrivateRoute.jsx
├── App.jsx
└── main.jsx

````
---

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blogs-frontend.git
cd blogs-frontend
````
---

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory with the following:

```env
BACKEND_URL=http://localhost:5000/api
```

> Replace with your actual backend URL if different.

---

## 🧪 Available Scripts

### Start the dev server:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

---

## 🔐 Authentication

* JWT Token is stored in `localStorage`
* Auth context (`AuthProvider`) manages user login/logout and token access
* Protected routes are wrapped in `<PrivateRoute>` component

---

## ✅ Routing

This app uses `react-router-dom` to handle navigation:

| Route           | Description                              |
| --------------- | ---------------------------------------- |
| `/` or `/login` | Login page                               |
| `/signup`       | Register a new user                      |
| `/blogs`        | View all blogs                           |
| `/my-blogs`     | View blogs created by the logged-in user |
| `/create`       | Create a new blog post                   |
| `/edit/:id`     | Edit an existing blog post               |

---

## 🖼️ UI Design

* Built with **Tailwind CSS**
* Responsive and mobile-friendly layout
* Toast messages with `react-toastify`

---

## 🤝 Backend API Required

This frontend expects a backend with the following endpoints:

```
POST    /api/auth/signup
POST    /api/auth/login
GET     /api/blogs
GET     /api/blogs/my
GET     /api/blogs/:id
POST    /api/blogs
PUT     /api/blogs/:id
DELETE  /api/blogs/:id
```

---

## 📷 Preview

![Preview](./public/Screenshot%202025-05-19%20131142.png)
![Preview](./public/Screenshot%202025-05-19%20132150.png)
---

