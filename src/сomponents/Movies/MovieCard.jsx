import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className={classes.film_container}>
        <div className={classes.film_card}>
          <img className={classes.img} src={movie.Poster} alt="Poster" />
          <p>{movie.Title}, {movie.Year}</p>
          <button className={classes.button}>
            <Link to={`/description/ ${movie.imdbID}`}>Details</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
