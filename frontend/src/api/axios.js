import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const searchPGs = (location, page = 1) => {
  return API.get(`/search?location=${location}&page=${page}`);
};

export const getLocationSuggestions = async (query) => {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
  );

  return res.data;
};

export default axios;