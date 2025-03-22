import "./dropdown.scss";
import arrowDropdown from "../../assets/icons/arrowDropdown.svg";

const NAME_SPACE = "dropdown";

type Props = {
  options: Array<string>;
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
};

export const Dropdown = ({ options, placeHolder, onChange, name }: Props) => {
  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <select onChange={onChange} name={name}>
          <option value="" hidden>
            {placeHolder}
          </option>

          <option value="">Clear selection</option>
          {options?.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className={`${NAME_SPACE}__img-arrowDropdown`}>
          <img src={arrowDropdown} alt="arrowDropdown" />
        </div>
      </div>
    </div>
  );
};
