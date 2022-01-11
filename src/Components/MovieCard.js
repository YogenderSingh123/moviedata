import React from "react";
import { Card } from "react-bootstrap";
import cross from "../cross.svg";

function MovieCard({movie,deleteMovie}) {
  return (
    <div>
      <Card >
        <Card.Body className="bg-info">
            <h4>{movie.name} <img className="float-right" onClick={()=>deleteMovie(movie.index)} src={cross}/> </h4>
            <h6>this is {movie.name}</h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
