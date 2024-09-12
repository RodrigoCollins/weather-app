import { render, screen } from "@testing-library/react";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentWeather as CurrentWeatherType } from "@/types/currentWeather";

export const mockCurrentWeather: CurrentWeatherType = {
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
};

describe("CurrentWeather", () => {
  test("renders current weather information", () => {
    render(<CurrentWeather current={mockCurrentWeather} />);

    expect(screen.getByText(/Clima Actual/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Se siente como: 24.8°C \(76.6°F\)/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Descripción: Soleado/i)).toBeInTheDocument();
  });
});
