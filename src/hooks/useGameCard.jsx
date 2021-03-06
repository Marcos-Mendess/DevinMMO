import axios from "axios";
import { useContext, useEffect } from "react";
import GameContext from "../components/Contexts/GameContext";

export default function useGameCard() {
  const { gameList, setGameList } = useContext(GameContext);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "b825f0fd04msh3da86559b52f59ep1454afjsn3793750c9fab",
      },
    };
    axios
      .get("https://mmo-games.p.rapidapi.com/games", config)
      .then((res) => {
        console.log(res.data);
        setGameList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setGameList]);

  return { gameList };
}
