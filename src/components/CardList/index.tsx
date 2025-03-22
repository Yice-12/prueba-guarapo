import "./cardList.scss";
import { Card } from "../Card";
import { useAppSelector } from "../../store/store";

const NAME_SPACE = "cardList";

export const CardList = () => {
  const { characters } = useAppSelector((state) => state.characters);

  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
