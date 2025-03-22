import { render } from "@testing-library/react";
import { CardList } from "..";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../const/mock";

test("render CardList and click", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Provider store={store}>
        <CardList />
      </Provider>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
