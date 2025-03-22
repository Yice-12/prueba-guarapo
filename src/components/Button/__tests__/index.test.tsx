import { fireEvent, render } from "@testing-library/react";
import { Button } from "../";

test("render button and click", () => {
  const mockSetPage = jest.fn();

  const { asFragment, getByText } = render(
    <Button page={1} setPage={mockSetPage} />
  );

  expect(asFragment()).toMatchSnapshot();

  const button = getByText("LOAD MORE");
  fireEvent.click(button);

  expect(mockSetPage).toHaveBeenCalledTimes(1);
});
