import React from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

const MovieCard = props => {
  const { movie } = props;
  return (
    <div className={classes.film_container}>
      <div className={classes.film_card}>
        <img className={classes.img} src={movie.Poster} alt="Poster" />
        <p>
          {movie.Title}, {movie.Year}
        </p>
        <button className={classes.button}>
          <Link to={`/description/ ${movie.imdbID}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
