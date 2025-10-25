import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

// Example API functions (adjust endpoints to backend)
export const getProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await api.get(`/api/products/${id}`);
  return res.data;
};

export const createOrder = async (payload) => {
  const res = await api.post("/api/orders", payload);
  return res.data;
};

export const login = async (credentials) => {
  const res = await api.post("/api/auth/login", credentials);
  return res.data;
};

export default api;
