import { cleanup, render, screen } from "@testing-library/react";
import { LinkWrapper } from "./LinkWrapper";

describe("<Checkbox/>", () => {
  afterAll(() => {
    cleanup();
  });

  it("Should pass an href to link", () => {
    const redirectUrl = "/test";

    render(<LinkWrapper href={redirectUrl} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", redirectUrl);
  });
});
