import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, image, isFavourite }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Link style={{ textDecoration: "none" }} to={`/viewPokemon/${name}`}>
        {isFavourite ? (
          <span>
            <Badge bg='primary'>Remove me from favourite</Badge>
          </span>
        ) : (
          <span>
            <Badge bg='primary'>Add me to favourite</Badge>
          </span>
        )}
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};
export default PokemonCard;
