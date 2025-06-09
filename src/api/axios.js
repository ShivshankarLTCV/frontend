import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // ✅ Replace with your actual backend base URL
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true,
});

export default api;