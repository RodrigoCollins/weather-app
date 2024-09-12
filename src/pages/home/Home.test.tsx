import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useSearchCity } from "@/hooks";
import Home from "./Home";

jest.mock("@/hooks", () => ({
  useSearchCity: jest.fn(),
}));

jest.mock("@/components/form", () => ({
  SearchForm: jest.fn(({ isLoading, onSearch }) => (
    <div>
      <button onClick={() => onSearch("Test City")} disabled={isLoading}>
        Search
      </button>
    </div>
  )),
}));

jest.mock("@/components/home/ResultDetail", () => ({
  ResultDetail: jest.fn(({ data, error, isLoading }) => (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Results: {JSON.stringify(data)}</div>}
    </div>
  )),
}));

describe("Home Component", () => {
  test("renders SearchForm and ResultDetail components", () => {
    (useSearchCity as jest.Mock).mockReturnValue({
      results: undefined,
      isLoading: false,
      error: null,
      searchCity: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("displays loading state", () => {
    (useSearchCity as jest.Mock).mockReturnValue({
      results: undefined,
      isLoading: true,
      error: null,
      searchCity: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays error message", () => {
    (useSearchCity as jest.Mock).mockReturnValue({
      results: undefined,
      isLoading: false,
      error: "Test error message",
      searchCity: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText(/Error: Test error message/i)).toBeInTheDocument();
  });

  test("calls searchCity function on search button click", async () => {
    const searchCityMock = jest.fn();
    (useSearchCity as jest.Mock).mockReturnValue({
      results: undefined,
      isLoading: false,
      error: null,
      searchCity: searchCityMock,
    });

    render(<Home />);

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(searchCityMock).toHaveBeenCalledWith("Test City");
    });
  });
});
