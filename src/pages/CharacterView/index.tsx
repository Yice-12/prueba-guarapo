import "./characterView.scss";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrowBack.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getCharacterById } from "../../store/slices/charactersSlice/actions/getCharacterById";
import { getEpisodes } from "../../store/slices/charactersSlice/actions/getEpisodes";
import { resetCharacters } from "../../store/slices/charactersSlice/charactersSlice";

const NAME_SPACE = "characterView";

export const CharacterView = () => {
  const { idCharacter } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { character, episodes } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacterById(idCharacter));
  }, []);

  useEffect(() => {
    if (character?.episode) {
      dispatch(getEpisodes(character.episode));
    }
  }, [character]);

  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <div
          className={`${NAME_SPACE}__arrowBack`}
          onClick={() => {
            dispatch(resetCharacters());
            navigate("/");
          }}
        >
          <img src={arrowBack} alt="arrowBack" />
          <p>GO BACK</p>
        </div>
        <div className={`${NAME_SPACE}__profile`}>
          <img src={character.image} />
          <h1>{character.name}</h1>
        </div>
        <div className={`${NAME_SPACE}__container`}>
          <div className={`${NAME_SPACE}__information`}>
            <h2>Informations</h2>
            <ul className={`${NAME_SPACE}__information-list`}>
              <li>
                <p>Gender</p>
                <span>{character?.gender}</span>
              </li>
              <li>
                <p>Status</p>
                <span>{character?.status}</span>
              </li>
              <li>
                <p>Specie</p>
                <span>{character?.species}</span>
              </li>
              <li>
                <p>Origin</p>
                <span>{character?.origin?.name}</span>
              </li>
              <li>
                <p>Type</p>
                <span>{character?.type}</span>
              </li>
              <li>
                <p>Location</p>
                <span>{character?.location?.name}</span>
              </li>
            </ul>
          </div>
          <div className={`${NAME_SPACE}__episodes`}>
            <h2>Episodes</h2>
            <ul className={`${NAME_SPACE}__episodes-list`}>
              {episodes.map((episode, i) => (
                <li key={i}>
                  <p>{episode.episode}</p>
                  <span>{episode.name}</span>
                  <span>{episode.air_date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
