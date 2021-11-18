import React from "react";
import Header from "./components/Header/Header";
import Gamecards from "./components/GameCard/Gamecards";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Gamecards />
      <GlobalStyles />
    </>
  );
}

export default App;
