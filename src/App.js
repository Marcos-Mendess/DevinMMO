import React from "react";
import { Routes, Route } from "react-router-dom";
import GameDetailContainer from "./components/GameDetailContainer/GameDetailContainer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route
          exact={true}
          path="/gamedetails/:id"
          element={<GameDetailContainer />}
        />
        {/* <Route
          exact={true}
          path="/latestnews/"
          element={<LatestNews />}
        /> */}
      </Routes>
      <GlobalStyles />
      </>
  );
}

export default App;
