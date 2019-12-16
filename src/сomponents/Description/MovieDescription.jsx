import React, { Component } from "react";
import classes from "./MovieDescription.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieDescription } from "../../redux/actions/moviesActions";

export class MovieDescription extends Component {
  componentDidMount() {
    this.props.getMovieDescription(this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;
    return (
      <div className={classes.description_container}>
        <div className={classes.image_container}>
          <img src={movie.Poster} alt="Poster" />
          <button className={classes.favorite}>
            <Link to={"/FavoriteMovies/" + movie.imdbID}>Add to favorites</Link>
          </button>
        </div>
        <div className={classes.details}>
          <div>
            <strong>Title:</strong> {movie.Title}
          </div>
          <div>
            <strong>Year:</strong> {movie.Year}
          </div>
          <div>
            <strong>Director:</strong> {movie.Director}
          </div>
          <div>
            <strong>Writer:</strong> {movie.Writer}
          </div>
          <div>
            <strong>Genre:</strong> {movie.Genre}
          </div>
          <div>
            <strong>Actors:</strong> {movie.Actors}
          </div>
          <div>
            <strong>Country:</strong> {movie.Country}
          </div>
          <div>
            <strong>Language:</strong> {movie.Language}
          </div>
          <div>
            <strong>imdb:</strong> {movie.imdbRating}
          </div>
          <div>
            <strong>Released:</strong> {movie.Released}
          </div>
        </div>

        <div className={classes.description}>
          <h3>About film:</h3>
          <span>{movie.Plot}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(mapStateToProps, { getMovieDescription })(
  MovieDescription
);


