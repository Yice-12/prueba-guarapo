import "./input.scss";
import loupe from "../../assets/icons/loupe.svg";
import { useAppDispatch } from "../../store/store";

import {
  resetCharacters,
  setName,
} from "../../store/slices/charactersSlice/charactersSlice";
import { Dispatch, SetStateAction } from "react";

const NAME_SPACE = "input";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
};

export const Input = ({ setPage }: Props) => {
  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetCharacters());
    setPage(1);
    dispatch(setName(e.target.value));
  };

  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <img src={loupe} alt="loupe" />
        <input
          type="text"
          placeholder="Filter by name..."
          onChange={handleInput}
        />
      </div>
    </div>
  );
};
