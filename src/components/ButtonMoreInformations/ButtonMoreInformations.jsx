import React from "react";
import { useNavigate } from "react-router";
import { Button } from "./ButtonMoreInformations.styles";

export default function ButtonMoreInformations({ title, id }) {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate(`/gamedetails/${id}`);
  };

  return (
    <>
      <Button onClick={() => routeChange()}>{title}</Button>
    </>
  );
}
