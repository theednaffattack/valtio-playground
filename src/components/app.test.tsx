import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./app";

describe("App", () => {
  it("Renders 'Valtio Demo'", () => {
    // Arrange
    render(<App />);

    // ACT

    // EXPECT
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /^Valtio Demo$/
    );
  });
});
