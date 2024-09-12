import { render, screen, fireEvent } from "@testing-library/react";
import { useLoginForm } from "@/hooks";
import LoginPage from "./Login";

jest.mock("@/hooks", () => ({
  useLoginForm: jest.fn(),
}));

describe("LoginPage", () => {
  const mockHandleSubmit = jest.fn();
  const mockHandleInputChange = jest.fn();

  beforeEach(() => {
    (useLoginForm as jest.Mock).mockReturnValue({
      values: { email: "", password: "" },
      errors: { email: "", password: "" },
      handleInputChange: mockHandleInputChange,
      handleSubmit: mockHandleSubmit,
    });
  });

  test("renders LoginPage with correct elements", () => {
    render(<LoginPage />);
    expect(screen.getByText("Weather App ☀️")).toBeInTheDocument();

    expect(
      screen.getByLabelText("Campo de correo electrónico")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Campo de contraseña")).toBeInTheDocument();

    expect(
      screen.getByLabelText("Botón para iniciar sesión")
    ).toBeInTheDocument();
  });

  test("calls handleSubmit on form submit", () => {
    render(<LoginPage />);

    fireEvent.submit(screen.getByRole("form"));
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
