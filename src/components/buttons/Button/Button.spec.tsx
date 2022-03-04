import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button/>", () => {
  afterAll(() => {
    cleanup();
  });

  it("Should render with a text element inside it", () => {
    const text = "Test";
    render(<Button>{text}</Button>);
    expect(screen.getByRole("button")).toHaveTextContent(text);
  });
});
