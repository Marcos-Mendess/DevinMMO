import React, { useState } from 'react';
import GameContext from './GameContext';

function GameProvider({ children }) {
  const [filterText, setFilterText] = useState('');
  const [gameList, setGameList] = useState([]);
  const [gameDetails, setGameDetails] = useState(null);


  const contextValue = {
    filterText,
    setFilterText,
    gameList,
    setGameList,
    gameDetails,
    setGameDetails
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;

