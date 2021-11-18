import axios from "axios";
import { useEffect, useState } from "react";

export default function useGameCard() {
  const [cards, setCards] = useState([]);

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
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { cards };
}
