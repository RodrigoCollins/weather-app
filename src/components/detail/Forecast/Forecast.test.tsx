import { render, screen } from "@testing-library/react";
import { Forecast } from "./Forecast";
import { DayForecast } from "@/types/forecastWeather";

const mockForecast = {
  forecastday: [
    {
      date: "2024-09-13",
      day: {
        maxtemp_c: 30.0,
        maxtemp_f: 86.0,
        mintemp_c: 20.0,
        mintemp_f: 68.0,
        daily_chance_of_rain: 10,
        daily_chance_of_snow: 0,
        condition: {
          text: "Soleado",
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
          code: 1000,
        },
        uv: 5,
      } as DayForecast,
    },
  ],
};

describe("Forecast", () => {
  test("renders forecast for each day", () => {
    render(<Forecast forecast={mockForecast} />);

    expect(screen.getByText(/Pronóstico a 5 Días/i)).toBeInTheDocument();

    expect(screen.getByText(/Soleado/i)).toBeInTheDocument();
    expect(screen.getByText(/Temp Máx/i)).toBeInTheDocument();
  });

  test("renders weather data correctly", () => {
    render(<Forecast forecast={mockForecast} />);

    expect(screen.getByText(/Temp Máx/i)).toBeInTheDocument();
    expect(screen.getByText(/Temp Mín/i)).toBeInTheDocument();
    expect(screen.getByText(/Probabilidad de Lluvia/i)).toBeInTheDocument();
    expect(screen.getByText(/Índice UV/i)).toBeInTheDocument();
  });
});
