import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuth } from "@/context";

jest.mock("@/context", () => ({
  useAuth: jest.fn(),
}));

const theme = createTheme();

describe("Navbar Component", () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      logout: mockLogout,
    });
  });

  test("renderiza los elementos de navegación y permite el logout", () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>
    );

    const title = screen.getByLabelText("Volver al inicio");
    expect(title).toBeInTheDocument();
    fireEvent.click(title);
    expect(window.location.pathname).toBe("/");

    const homeButton = screen.getByLabelText("Navegar a Inicio");
    const favoritesButton = screen.getByLabelText("Navegar a Favoritos");
    expect(homeButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();

    const logoutButton = screen.getByLabelText("Cerrar Sesion");
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});
