import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Footer } from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

describe("Footer Component", () => {
  const theme = createTheme();

  test("renderiza el Footer y navega correctamente", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </Router>
    );

    expect(
      screen.getByLabelText("Navegación de la aplicación")
    ).toBeInTheDocument();

    const homeButton = screen.getByLabelText("Ir al inicio");
    const favoritesButton = screen.getByLabelText("Ir a favoritos");

    expect(homeButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();

    fireEvent.click(homeButton);
    expect(history.location.pathname).toBe("/");

    fireEvent.click(favoritesButton);
    expect(history.location.pathname).toBe("/favorites");
  });
});
