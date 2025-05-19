import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-backend-9rqu.onrender.com",
  withCredentials: true,
});

// token
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
