import axios from "axios";
import { BASE_API_URL, UNAUTHORIZED } from "./constants";

const key = import.meta.env.VITE_WEATHER_API_KEY;

export const publicAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

publicAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export const privateAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  params: {
    key,
  },
});

privateAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
      sessionStorage.clear();
    }
    return Promise.reject(error.response.data);
  }
);
