import { render, screen } from "@testing-library/react";
import { LocationDetails } from "./LocationsDetails";

const mockLocation = {
  name: "Buenos Aires",
  region: "Buenos Aires",
  country: "Argentina",
  lat: -34.61,
  lon: -58.38,
  tz_id: "America/Argentina/Buenos_Aires",
  localtime: "2024-09-12 14:30",
};

describe("LocationDetails", () => {
  test("renders location details correctly", () => {
    render(<LocationDetails location={mockLocation} />);

    expect(screen.getByText(/Buenos Aires, Argentina/i)).toBeInTheDocument();
    expect(screen.getByText(/Latitud: -34.61/i)).toBeInTheDocument();
    expect(screen.getByText(/Longitud: -58.38/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Zona Horaria: America\/Argentina\/Buenos_Aires/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Hora Local:/i)).toBeInTheDocument();
  });
});
