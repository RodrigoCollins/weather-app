import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFavoritesContext } from "@/context";
import { useFavorites } from "@/hooks";
import Favorites from "./Favorites";

jest.mock("@/hooks", () => ({
  useFavorites: jest.fn(),
}));

jest.mock("@/context", () => ({
  useFavoritesContext: jest.fn(),
}));

describe("Favorites Component", () => {
  test("renders loader when data is loading", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favoriteWeatherData: [],
      isLoading: true,
      error: null,
    });
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [] });

    render(
      <Router>
        <Favorites />
      </Router>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders error message when there is an error", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favoriteWeatherData: [],
      isLoading: false,
      error: "Error al cargar los datos",
    });
    (useFavoritesContext as jest.Mock).mockReturnValue({ favorites: [] });

    render(
      <Router>
        <Favorites />
      </Router>
    );

    expect(screen.getByText(/Error al cargar los datos/i)).toBeInTheDocument();
  });
});
