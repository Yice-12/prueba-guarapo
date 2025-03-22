import { fireEvent, render } from "@testing-library/react";
import { Card } from "..";
import { BrowserRouter } from "react-router-dom";

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

test("render card and click", () => {
  const { asFragment, getByText } = render(
    <BrowserRouter>
      <Card character={mockCharacter} />
    </BrowserRouter>
  );

  expect(asFragment()).toMatchSnapshot();

  const button = getByText("Rick Sanchez");
  fireEvent.click(button);
});
