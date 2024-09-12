import axios from "axios";
import { BASE_API_URL } from "./constants";

const key = import.meta.env.VITE_WEATHER_API_KEY;

export const publicAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  params: {
    key,
  },
});

publicAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response.data);
  }
);
