import { useState, useEffect } from "react";
import { fetchForecastWeather } from "@/services/forecastWeather";
import { ForecastApiResponse } from "@/types/forecastWeather";

interface UseFutureWeatherReturn {
  futureForecast: ForecastApiResponse | undefined;
  isLoading: boolean;
  error: string | null;
}

export const useFutureWeather = (
  city: string | undefined
): UseFutureWeatherReturn => {
  const [futureForecast, setFutureForecast] = useState<ForecastApiResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchForecastWeather(city);
        setFutureForecast(response);
      } catch (err: any) {
        setError(err.message || "Error desconocido al obtener el clima");
      } finally {
        setIsLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  return { futureForecast, isLoading, error };
};
