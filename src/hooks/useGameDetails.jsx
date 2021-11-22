import axios from "axios";
import { useContext, useEffect } from "react";
import GameContext from "../components/Contexts/GameContext";

export default function useGameDetails(id) {
  const { gameDetails, setGameDetails } = useContext(GameContext);

  useEffect(() => {
    const config = {
      method: "GET",
      params: { id },
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "abae529f1bmsh022263372e22ccep1ea366jsnd70a6d21a2bc",
      },
    };
    axios
      .get("https://mmo-games.p.rapidapi.com/game", config)
      .then((res) => {
        console.log(res.data);
        setGameDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setGameDetails]);

  return { gameDetails };
}
