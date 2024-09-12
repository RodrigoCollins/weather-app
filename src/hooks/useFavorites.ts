import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "@/services/currentWeather";
import { WeatherApiResponse } from "@/types/currentWeather";

interface UseFavoritesReturn {
  favoriteWeatherData: WeatherApiResponse[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export const useFavorites = (favoriteCities: string[]): UseFavoritesReturn => {
  const [favoriteWeatherData, setFavoriteWeatherData] = useState<
    WeatherApiResponse[] | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoritesWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const weatherPromises = favoriteCities.map((city) =>
          fetchCurrentWeather(city)
        );
        const weatherData = await Promise.all(weatherPromises);
        setFavoriteWeatherData(weatherData);
      } catch (err: any) {
        setError(err.message || "Error desconocido al cargar favoritos");
      } finally {
        setIsLoading(false);
      }
    };

    if (favoriteCities.length > 0) {
      fetchFavoritesWeather();
    } else {
      setFavoriteWeatherData([]);
    }
  }, [favoriteCities]);

  return { favoriteWeatherData, isLoading, error };
};
