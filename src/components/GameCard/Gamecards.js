import React, { useEffect } from "react";
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

function Gamecards() {
  const { cards } = useGameCard();

  return (
    <div>
      <div>
        <h3>Todos os resultados ({cards.length})</h3>
      </div>
      <StyledGameContainer>
        {cards.map(
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
              <ButtonMoreInformations title="Ver mais" gameurl={game_url} />
            </StyledCard>
          )
        )}
      </StyledGameContainer>
    </div>
  );
}

export default Gamecards;
