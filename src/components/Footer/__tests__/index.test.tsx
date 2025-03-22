import { render } from "@testing-library/react";
import { Footer } from "../";

test("render Footer", () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});
