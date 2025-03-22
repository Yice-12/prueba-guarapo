import { fireEvent, render } from "@testing-library/react";
import { Input } from "../";
import { Provider } from "react-redux";
import { store } from "../../../const/mock";

test("render Input and change", () => {
  const mockSetPage = jest.fn();
  const { asFragment, getByPlaceholderText } = render(
    <Provider store={store}>
      <Input setPage={mockSetPage} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();

  const input = getByPlaceholderText("Filter by name...");

  fireEvent.change(input, { target: { value: "test" } });
});
