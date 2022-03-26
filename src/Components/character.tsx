import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Heart, HeartFill } from "../assets/icons/svgs";
import { CommonContext } from "../Context/context";
import { character } from "../types";
import CharacterDetails from "./CharacterDetails";
import ModalContainer from "./ModalContainer";
export default function Character({ character }: { character: character }) {
  const { isFav, toggleFav } = useContext(CommonContext);
  return (
    <ModalContainer
      title={`${character.name} Details`}
      btnComponent={({ onClick }) => (
        <Card className="shadow mb-5 character-card">
          <Card.Img
            src={character.image}
            className="card-image"
            onClick={onClick}
          ></Card.Img>
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
      )}
      content={() => <CharacterDetails character={character} />}
    />
  );
}
