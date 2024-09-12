import { render, screen } from "@testing-library/react";
import { SplashScreen } from "./SplashScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

describe("SplashScreen Component", () => {
  test("renderiza el SplashScreen correctamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <SplashScreen />
      </ThemeProvider>
    );
    const splashScreen = screen.getByRole("progressbar");
    expect(splashScreen).toBeInTheDocument();

    expect(splashScreen.parentElement).toHaveStyle({
      display: "flex",
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
    });
  });
});
