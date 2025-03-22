import { render } from "@testing-library/react";
import { Navbar } from "../";

test("render Navbar", () => {
  const { asFragment } = render(<Navbar />);

  expect(asFragment()).toMatchSnapshot();
});
