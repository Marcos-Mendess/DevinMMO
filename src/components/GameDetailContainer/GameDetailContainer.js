import React, { useState } from "react";
import { useParams } from "react-router";
import useGameDetails from "../../hooks/useGameDetails";
import { Boldiv, GenderePlataformStyle } from "../GameDetails/GenderePlataform/GenderePlataformStyles";
import MainImage from "../GameDetails/Images/MainImage";
import { RequisitStyle } from "../GameDetails/SystemRequisits/SystemRequisitsStyles";
import {
  Container,
  DescriptionStyle,
  ImagesInline,
} from "./GameDetailContainerStyles";

function GameDetailContainer() {
  const [imgNumber, setImageNumber] = useState(0);

  const { id } = useParams();

  const { gameDetails } = useGameDetails(id);

  return (
    <Container>
      

      {gameDetails && (
        <>
          <h1>
            {gameDetails?.title} : {gameDetails?.release_date}
          </h1>
          {gameDetails?.screenshots[imgNumber] ? (
            <MainImage src={gameDetails?.screenshots[imgNumber].image} />
          ) : (
            <MainImage src={gameDetails?.thumbnail} />
          )}
          <ImagesInline>
            {gameDetails?.screenshots &&
              gameDetails?.screenshots.map((scrshoot, index) => (
                <img
                  key={scrshoot.id}
                  onClick={() => setImageNumber(index)}
                  src={scrshoot.image}
                  alt={scrshoot.id}
                />
              ))}
          </ImagesInline>
          <GenderePlataformStyle>
        <Boldiv>
          <span>Gênero</span>
          <span>Plataforma</span>
        </Boldiv>
        <div>
          <p>{gameDetails.genre}</p>
          <p>{gameDetails.platform}</p>
        </div>
      </GenderePlataformStyle>

          <h2>Descrição</h2>
          <DescriptionStyle>
            <p>{gameDetails.short_description}</p>
          </DescriptionStyle>

          <RequisitStyle>
      <h1>Requisitos de sistema</h1>
      <div> 
        <p> Sistema Operacional: <span>{gameDetails.minimum_system_requirements.os}</span> </p>
      </div>
      <div> 
        <p> Processador: <span>{gameDetails.minimum_system_requirements.processor}</span> </p>
      </div><div> 
        <p> Memória: <span> {gameDetails.minimum_system_requirements.memory}</span> </p>
      </div><div> 
        <p> Gráficos: <span> {gameDetails.minimum_system_requirements.graphics}</span> </p>
      </div>
      <div> 
        <p>Espaço em disco: <span> {gameDetails.minimum_system_requirements.storage}</span> </p>
      </div>
    </RequisitStyle>
        </>
      )}
    </Container>
  );
}

export default GameDetailContainer;
