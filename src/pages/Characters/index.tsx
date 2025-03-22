import "./characters.scss";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { CardList } from "../../components/CardList";
import RickAndMorty from "../../assets/icons/RickAndMorty.svg";
import { GENDER_LIST, SPECIE_LIST, STATUS_LIST } from "../../const";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getCharacters } from "../../store/slices/charactersSlice/actions/getCharacters";
import { resetCharacters } from "../../store/slices/charactersSlice/charactersSlice";

const NAME_SPACE = "characters";

export const Characters = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    status: "",
  });
  const { name } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters({ page, name, filters }));
  }, [page, name, filters]);

  const handleChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(resetCharacters());
    setPage(1);
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <div className={`${NAME_SPACE}__content-img`}>
          <img src={RickAndMorty} alt="RickAndMorty" />
        </div>
        <div className={`${NAME_SPACE}__container-inputs`}>
          <Input setPage={setPage} />
          <Dropdown
            options={SPECIE_LIST}
            placeHolder="Species"
            onChange={handleChangeDropdown}
            name="species"
          />
          <Dropdown
            options={GENDER_LIST}
            placeHolder="Gender"
            onChange={handleChangeDropdown}
            name="gender"
          />
          <Dropdown
            options={STATUS_LIST}
            placeHolder="Status"
            name="status"
            onChange={handleChangeDropdown}
          />
        </div>
        <CardList />
        <div className={`${NAME_SPACE}__container-button`}>
          <Button setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
};
