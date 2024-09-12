import { render, screen } from "@testing-library/react";
import HowItWorks from "./HowItWorks";
import { howItWorksData } from "@/utils/howItWorksData";

describe("HowItWorks", () => {
  test("renders the How It Works component correctly", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/¿Cómo Funciona?/i)).toBeInTheDocument();

    howItWorksData.forEach(({ description }) => {
      const descriptionText = description;
      expect(screen.getByText(descriptionText)).toBeInTheDocument();
    });
  });
});
