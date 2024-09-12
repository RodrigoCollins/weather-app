import { render, screen, fireEvent } from "@testing-library/react";
import { useFavoritesContext } from "@/context";
import { BrowserRouter } from "react-router-dom";
import { WeatherCard } from "./WeatherCard";
import { WeatherApiResponse } from "@/types/currentWeather";

export const mockWeatherApiResponse: WeatherApiResponse = {
  location: {
    name: "Buenos Aires",
    region: "Buenos Aires",
    country: "Argentina",
    lat: -34.61,
    lon: -58.38,
    tz_id: "America/Argentina/Buenos_Aires",
    localtime_epoch: 1633021236,
    localtime: "2024-09-12 14:30",
  },
  current: {
    last_updated_epoch: 1633021236,
    last_updated: "2024-09-12 14:00",
    temp_c: 25.0,
    temp_f: 77.0,
    is_day: 1,
    condition: {
      text: "Soleado",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
    wind_mph: 10.0,
    wind_kph: 16.1,
    wind_degree: 90,
    wind_dir: "E",
    pressure_mb: 1015.0,
    pressure_in: 30.0,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 60,
    cloud: 10,
    feelslike_c: 24.8,
    feelslike_f: 76.6,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 5.0,
    gust_mph: 15.0,
    gust_kph: 24.1,
    dewpoint_c: 16.0,
    dewpoint_f: 60.8,
    windchill_c: 25.0,
    windchill_f: 77.0,
    heatindex_c: 26.0,
    heatindex_f: 78.8,
  },
};

jest.mock("@/context", () => ({
  useFavoritesContext: jest.fn(),
}));

describe("WeatherCard", () => {
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  beforeEach(() => {
    (useFavoritesContext as jest.Mock).mockReturnValue({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      isFavorite: mockIsFavorite,
    });
  });

  test("renders weather card with correct data", () => {
    mockIsFavorite.mockReturnValue(false);

    render(
      <BrowserRouter>
        <WeatherCard data={mockWeatherApiResponse} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Buenos Aires/i)).toBeInTheDocument();
    expect(screen.getByText(/Soleado/i)).toBeInTheDocument();
  });

  test("adds to favorites when favorite button is clicked", () => {
    mockIsFavorite.mockReturnValue(false);

    render(
      <BrowserRouter>
        <WeatherCard data={mockWeatherApiResponse} />
      </BrowserRouter>
    );

    const favoriteButton = screen.getByRole("button", {
      name: /Agregar a favoritos/i,
    });

    fireEvent.click(favoriteButton);

    expect(mockAddFavorite).toHaveBeenCalledWith("Buenos Aires");
  });

  test("removes from favorites when favorite button is clicked", () => {
    mockIsFavorite.mockReturnValue(true);

    render(
      <BrowserRouter>
        <WeatherCard data={mockWeatherApiResponse} />
      </BrowserRouter>
    );

    const favoriteButton = screen.getByRole("button", {
      name: /Eliminar de favoritos/i,
    });

    fireEvent.click(favoriteButton);

    expect(mockRemoveFavorite).toHaveBeenCalledWith("Buenos Aires");
  });
});
