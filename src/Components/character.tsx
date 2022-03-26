import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Heart, HeartFill } from "../assets/icons/svgs";
import { CommonContext } from "../Context/context";
import { character } from "../types";
export default function Character({ character }: { character: character }) {
  const { isFav, toggleFav } = useContext(CommonContext);
  return (
    <Card className="shadow mb-5 character-card">
      <Card.Img src={character.image} className="card-image"></Card.Img>
      <Card.Body>
        <Card.Text>
          <b>{character.name}</b>
        </Card.Text>
        <Card.Text>{character.status}</Card.Text>
        <Card.Text>{character.gender}</Card.Text>
        <span
          className="heart"
          onClick={() => {
            toggleFav(character.id);
          }}
        >
          {isFav(character.id) ? HeartFill : Heart}
        </span>
      </Card.Body>
    </Card>
  );
}
