import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Automatically set the Authorization header if a token exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
