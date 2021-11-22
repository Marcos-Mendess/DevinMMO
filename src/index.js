import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GameProvider from "./components/Contexts/GameProvider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
