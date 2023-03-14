import { render, screen } from "@testing-library/react";
import TestingStateChange from "../components/TestingStateChange";

describe("TestingStateChange Component", () => {
  test("Testing state change", () => {
    render(<TestingStateChange />);

    expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
  });
});
