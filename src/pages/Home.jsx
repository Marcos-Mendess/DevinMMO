import React from "react";
import Gamecards from "../components/GameCard/Gamecards";
import SearchBar from "../components/SearchInput/SearchInput";

function Home() {
  return (
    <>
      <SearchBar />
      <Gamecards />
    </>
  );
}

export default Home;
