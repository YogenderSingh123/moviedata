import React from "react";
import { Card } from "react-bootstrap";
import cross from "../cross.svg";
import updateicon from "../updateicon.svg";
import Rate from "./Rate";

function MovieCard({ movie,updateMovie, deleteMovie }) {
  return (
    <div>
      <Card>
        <Card.Body className="bg-info">
          <h4>
            {movie.name} <Rate rating={movie.rating}/>
            <img
              className="float-right" alt="delete"
              onClick={() => deleteMovie(movie.index)}
              src={cross}
            />{" "}
            <img className="float-right " alt="update"
              onClick={() => updateMovie(movie.index)}
              src={updateicon} />
          </h4>
          <h6>This is {movie.details} movie</h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
