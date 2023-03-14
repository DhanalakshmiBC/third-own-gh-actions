import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingStateChange from "../components/TestingStateChange";

describe("TestingStateChange Component", () => {
  test("Testing state change", () => {
    render(<TestingStateChange />);

    expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
  });

  test("Testing state change on button click", async () => {
    render(<TestingStateChange />);

    await waitFor(() => {
      userEvent.click(screen.getByText(/toggle text/i));
    });

    expect(screen.getByText(/text visible/i)).toBeInTheDocument();
  });
});
