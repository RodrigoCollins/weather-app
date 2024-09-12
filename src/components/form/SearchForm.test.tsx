import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "./SearchForm";

const mockOnSearch = jest.fn();

describe("SearchForm", () => {
  test("renders the search form correctly", () => {
    render(<SearchForm isLoading={false} onSearch={mockOnSearch} />);

    expect(
      screen.getByLabelText(/Ingrese el nombre de la ciudad/i)
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Buscar clima/i)).toBeInTheDocument();
  });

  test("calls onSearch with the query when form is submitted", () => {
    render(<SearchForm isLoading={false} onSearch={mockOnSearch} />);

    const input = screen.getByLabelText(
      /Ingrese el nombre de la ciudad/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Buenos Aires" } });

    fireEvent.click(screen.getByLabelText(/Buscar clima/i));

    expect(mockOnSearch).toHaveBeenCalledWith("Buenos Aires");
  });

  test("disables the input and button when isLoading is true", () => {
    render(<SearchForm isLoading={true} onSearch={mockOnSearch} />);

    expect(
      screen.getByLabelText(/Ingrese el nombre de la ciudad/i)
    ).toBeDisabled();

    expect(screen.getByLabelText(/Buscando clima/i)).toBeDisabled();
  });

  test("displays a spinner when isLoading is true", () => {
    render(<SearchForm isLoading={true} onSearch={mockOnSearch} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
