import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFutureWeather } from "@/hooks";
import Detail from "./Detail";

jest.mock("@/hooks", () => ({
  useFutureWeather: jest.fn(),
}));

describe("Detail Page", () => {
  test("renders loader when data is loading", () => {
    (useFutureWeather as jest.Mock).mockReturnValue({
      futureForecast: undefined,
      isLoading: true,
      error: null,
    });

    render(
      <Router>
        <Detail />
      </Router>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders error message when there is an error", () => {
    (useFutureWeather as jest.Mock).mockReturnValue({
      futureForecast: undefined,
      isLoading: false,
      error: "Error al cargar los datos",
    });

    render(
      <Router>
        <Detail />
      </Router>
    );

    expect(screen.getByText(/Error al cargar los datos/i)).toBeInTheDocument();
  });
});
