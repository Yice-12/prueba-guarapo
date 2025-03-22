import "./navbar.scss";
import logoBlack from "../../assets/icons/logoBlack.svg";
const NAME_SPACE = "nabvar";

export const Navbar = () => {
  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <img src={logoBlack} alt="logoBlack" />
        <ul>
          <li>Characters</li>
          <li>Locations</li>
          <li>Episodes</li>
        </ul>
      </div>
    </div>
  );
};
