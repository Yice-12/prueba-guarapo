import { fireEvent, render } from "@testing-library/react";
import { Characters } from "../";
import { Provider } from "react-redux";
import { store } from "../../../const/mock";
import { BrowserRouter } from "react-router-dom";

test("render Characters", () => {
  const { asFragment, container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();

  const select = container.querySelector('select[name="gender"]');

  if (select) {
    fireEvent.change(select, { target: { value: "test" } });
  }
});
