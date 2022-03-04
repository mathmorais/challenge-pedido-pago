import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("<Checkbox/>", () => {
  afterAll(() => {
    cleanup();
  });

  it("Should change to be checked on click", () => {
    render(<Checkbox field="test" />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("Should be able to get field value", () => {
    let fieldValue = null;
    const field = render(
      <Checkbox
        field="test"
        onCheck={({ checked }) => (fieldValue = checked)}
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(fieldValue).toBe(true);
  });

  it("Should not be checked when not clicked", () => {
    const field = "test-field";
    let fieldValue = null;
    render(
      <Checkbox
        field={"test"}
        onCheck={({ checked }) => (fieldValue = checked)}
      />
    );
    expect(fieldValue).toBe(false);
  });
});
