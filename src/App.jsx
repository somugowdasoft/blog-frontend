import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Login from './authApis/Login'
import Signup from './authApis/SignUp'
import NotFound from './components/NotFound'
import PrivateRoute from './routes/PrivateRoute'
import BlogsPage from "./pages/Blogs";
import CreateBlogPage from "./pages/CreateBlog";
import EditBlogPage from "./pages/EditBlog";
import MyBlogsPage from "./pages/MyBlogs";
import Layout from "./components/Layout";

function App() {

  return (
    <React.StrictMode>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <AuthProvider>
          <main className="min-h-screen">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              {/* Protected routes with Navbar */}
              <Route
                element={<PrivateRoute><Layout /></PrivateRoute>}
              >
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/create" element={<CreateBlogPage />} />
                <Route path="/edit/:id" element={<EditBlogPage />} />
                <Route path="/my-blogs" element={<MyBlogsPage />} />
              </Route>

              {/* Not found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>

  )
}

export default App
