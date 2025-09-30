import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/(homepage)/page";

describe("Page", () => {
  it("renders above the fold content", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const hero = screen.getByRole("img", { name: "Hero Image" });
    expect(hero).toBeInTheDocument();

    const cta = screen.getByRole("button", { name: "Shop Now" });
    expect(cta).toBeInTheDocument();
  });
});
