import React from "react";
import { useParams } from "react-router";
import Coments from "./Coments/Coments";
import Description from "./Description/Description";
import { Container } from "./GameDetailContainerStyles";
import GenderePlataform from "./GenderePlataform/GenderePlataform";
import LittleImages from "./Images/LittleImages";
import MainImage from "./Images/MainImage";
import SystemRequisits from "./SystemRequisits/SystemRequisits";

function GameDetailContainer() {
  return (
    <Container>
      <h1>Nome do jogo + Data de criação</h1>
      <MainImage/>
      <LittleImages/>
      <GenderePlataform/>
      <Description/>
      <SystemRequisits />
    <Coments/>
    </Container>
  );
}

export default GameDetailContainer;
