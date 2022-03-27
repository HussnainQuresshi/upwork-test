import React from 'react';
import { Card } from 'react-bootstrap';
import { character } from '../types';

export default function CharacterDetails({ character }: { character: character }) {
  return (
    <>
      {Object.entries(character).map(([key, value]) => {
        return (
          <Card.Text key={key}>
            <b>{key.toUpperCase()}:</b> {value}
          </Card.Text>
        );
      })}
    </>
  );
}
