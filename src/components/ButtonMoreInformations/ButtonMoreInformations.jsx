import React from "react";
import { Button } from "./ButtonMoreInformations.styles";

export default function ButtonMoreInformations({ title, gameurl }) {
  const routeChange = (url) => {
    window.location.href = `${url}`;
  };
  return (
    <>
      <Button onClick={() => routeChange(gameurl)}>{title}</Button>
    </>
  );
}
