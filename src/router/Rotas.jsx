import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../App";
import GameDetailContainer from "../components/GameDetailContainer/GameDetailContainer";

function Rotas() {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route
          exact={true}
          path="/gamedetails/"
          element={<GameDetailContainer />}
        />
      </Routes>
    </>
  );
}

export default Rotas;
