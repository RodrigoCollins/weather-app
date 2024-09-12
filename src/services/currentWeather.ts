import { WeatherApiResponse } from "@/types/currentWeather";
import { publicAxiosInstance } from "./axios";
import { CURRENT_WEATHER } from "./constants";

export const fetchCurrentWeather = async (query: string) => {
  try {
    const response: WeatherApiResponse = await publicAxiosInstance.get(
      CURRENT_WEATHER,
      {
        params: { q: query },
      }
    );
    return response;
  } catch (error: any) {
    if (error.error.message) {
      throw new Error(error.error.message);
    } else {
      throw new Error("Error al obtener los datos del clima.");
    }
  }
};
