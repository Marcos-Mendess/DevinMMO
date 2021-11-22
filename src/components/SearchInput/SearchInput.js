import React, { useContext } from "react";
import GameContext from "../Contexts/GameContext";
import { StyledInput } from "./SearchInputStyles";

const SearchBar = () => {
  const { filterText, setFilterText } = useContext(GameContext);

  const handleChangeInput = (target) => {
    setFilterText(target.value);
  };

  return (
    <>
      <StyledInput
        
        onChange={({ target }) => handleChangeInput(target)}
        value={filterText}
      >
        <input placeholder="Search..."></input>
      </StyledInput>

    </>
  );
};

export default SearchBar;
