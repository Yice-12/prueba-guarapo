import { fireEvent, render } from "@testing-library/react";
import { CharacterView } from "../";
import { Provider } from "react-redux";
import { store } from "../../../const/mock";
import { BrowserRouter } from "react-router-dom";

test("render CharacterView and back", () => {
  const { asFragment, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <CharacterView />
      </BrowserRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();

  const buttonBack = getByText("GO BACK");
  fireEvent.click(buttonBack);
});
