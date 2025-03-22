import { render } from "@testing-library/react";
import { Dropdown } from "../";

test("render Dropdown", () => {
  const mockOnchange = jest.fn();

  const { asFragment } = render(
    <Dropdown
      options={["test 1"]}
      name="test"
      onChange={mockOnchange}
      placeHolder="test"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
