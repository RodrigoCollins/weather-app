import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

describe("Loader Component", () => {
  test("renderiza el Loader correctamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );

    const loader = screen.getByRole("progressbar");
    expect(loader).toBeInTheDocument();
  });
});
