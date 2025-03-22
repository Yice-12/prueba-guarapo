import { useNavigate } from "react-router-dom";
import { Character } from "../../types/characters";
import "./card.scss";

const NAME_SPACE = "card";

type Props = {
  character: Character;
};

export const Card = ({ character }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${NAME_SPACE}`}
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <div className={`${NAME_SPACE}__content`}>
        <img src={character.image} />
        <div className={`${NAME_SPACE}__description`}>
          <h1>{character.name}</h1>
          <p>{character.species}</p>
        </div>
      </div>
    </div>
  );
};
