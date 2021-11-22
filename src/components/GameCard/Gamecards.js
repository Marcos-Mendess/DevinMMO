import React, { useContext, useState } from "react";
import useGameCard from "../../hooks/useGameCard";
import ButtonMoreInformations from "../ButtonMoreInformations/ButtonMoreInformations";
import {
  StyledCard,
  StyledGameContainer,
  StyledGameDescriptions,
  StyledGameImg,
  StyledGameInformations,
  StyledPlatform,
} from "./GameCard.styles";

import GameContext from "../Contexts/GameContext";
import { AllResults } from "../SearchInput/SearchInputStyles";

function Gamecards() {
  const { filterText } = useContext(GameContext);
  const { gameList } = useGameCard();
  

  const gameListMap = (gameList) => {
    return (
      
      gameList.map(
      ({ id, thumbnail, title, platform, short_description, game_url }) => (
        <StyledCard key={id}>
          <StyledGameImg src={thumbnail} alt={`${title} img`} />

          <StyledGameInformations>
            <strong>{title}</strong>
            <StyledPlatform>{platform.split(" ")[0]}</StyledPlatform>
          </StyledGameInformations>

          <StyledGameDescriptions>
            {short_description}
          </StyledGameDescriptions>

          <ButtonMoreInformations title="Ver mais" id={id} />
        </StyledCard>
      )
    ))

  }

  const gameListMapWithFilter = (gameList) => {
    return (
      gameList.filter(({ title }) => title.toLowerCase().includes(filterText.toLowerCase())).map(
      ({ id, thumbnail, title, platform, short_description }) => (
        <StyledCard key={id}>
          <StyledGameImg src={thumbnail} alt={`${title} img`} />

          <StyledGameInformations>
            <strong>{title}</strong>
            <StyledPlatform>{platform.split(" ")[0]}</StyledPlatform>
          </StyledGameInformations>

          <StyledGameDescriptions>
            {short_description}
          </StyledGameDescriptions>

          <ButtonMoreInformations title="Ver mais" id={id} />
        </StyledCard>
      )
    ))
  }

  return (
    <div>
      <AllResults><h1>Todos os resultados: {gameList.length}</h1>
      </AllResults>
      <StyledGameContainer>
        {filterText ? gameListMapWithFilter(gameList) : gameListMap(gameList) }
      </StyledGameContainer>
    </div>
  );
}

export default Gamecards;
