import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

export class MovieCard extends Component {
  render() {
    const { Title, Poster, imdbID } = this.props;
    return (
      <div className={classes.film_container}>
        <div className={classes.film_card}>
          <img className={classes.img} src={Poster} alt="Poster" />
          <p>{Title}</p>
          <button className={classes.button}>
            <Link to={"/MovieDescription/" + imdbID}>Details</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
