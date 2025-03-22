import { Dispatch, SetStateAction } from "react";
import "./button.scss";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const NAME_SPACE = "button";

export const Button = ({ page, setPage }: Props) => {
  return (
    <div className={`${NAME_SPACE}`} onClick={() => setPage(page + 1)}>
      <div className={`${NAME_SPACE}__content`}>
        <button>LOAD MORE</button>
      </div>
    </div>
  );
};
