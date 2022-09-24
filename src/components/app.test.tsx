import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { App, AppWithRouter } from "./app";

describe("App", () => {
  it("Renders 'Valtio Demo'", () => {
    // Arrange
    render(<AppWithRouter />);

    // ACT

    // EXPECT
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /^Valtio Demo$/
    );
  });

  it("Renders 'Oops, Page Not Found' if not a valid path", () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={["/banana"]}>
        <App />
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /^Oops, Page Not Found$/
    );
  });
});
