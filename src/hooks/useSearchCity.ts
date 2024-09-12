import { useState } from "react";
import { fetchCurrentWeather } from "@/services/currentWeather";
import { WeatherApiResponse } from "@/types/currentWeather";

interface UseSearchCityReturn {
  results: WeatherApiResponse | undefined;
  isLoading: boolean;
  error: string | null;
  searchCity: (query: string) => Promise<void>;
}

export const useSearchCity = (): UseSearchCityReturn => {
  const [results, setResults] = useState<WeatherApiResponse | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const weatherData = await fetchCurrentWeather(query);
      setResults(weatherData);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  return { results, isLoading, error, searchCity };
};
