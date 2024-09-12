import { render, screen } from "@testing-library/react";
import { HelperText } from "./HelperText";
import { helperTextConfig } from "@/utils/favoritesHelper";

describe("HelperText", () => {
  test("renders helper text correctly", () => {
    render(<HelperText />);

    expect(screen.getByText(helperTextConfig.title)).toBeInTheDocument();

    expect(screen.getByText(helperTextConfig.description)).toBeInTheDocument();

    helperTextConfig.steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });

    expect(screen.getByText(helperTextConfig.footer)).toBeInTheDocument();
  });
});
