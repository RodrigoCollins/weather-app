import { privateAxiosInstance } from "./axios";
import { FUTURE_WEATHER } from "./constants";
import { ForecastApiResponse } from "@/types/forecastWeather";

export const fetchForecastWeather = async (query: string | undefined) => {
  try {
    const response: ForecastApiResponse = await privateAxiosInstance.get(
      FUTURE_WEATHER,
      {
        params: { q: query, days: 5 },
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
