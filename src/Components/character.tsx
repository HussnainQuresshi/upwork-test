import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Heart, HeartFill } from "../assets/icons/svgs";
import { CommonContext } from "../Context/context";
import { character } from "../types";
export default function Character({ character }: { character: character }) {
  const { isFav, toggleFav } = useContext(CommonContext);
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src="asd" />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Title>{character.status}</Card.Title>
        <Card.Title>{character.gender}</Card.Title>
        <Button
          variant="light"
          onClick={() => {
            toggleFav(character.id);
          }}
        >
          {isFav(character.id) ? Heart : HeartFill}
        </Button>
      </Card.Body>
    </Card>
  );
}
