import React, { Component } from "react";
import classes from "./FavoriteMovies.module.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getFavoriteMovies } from "../../redux/actions/moviesActions";

class FavoriteMovies extends Component {
  componentDidMount() {
    this.props.getFavoriteMovies(this.props.match.params.id);
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.back}>
            <button>
              <Link to={`/description/ ${movies.imdbID}`}>
                Back to description
              </Link>
            </button>
          </div>
          <div className={classes.film_card}>
            <img className={classes.img} src={movies.Poster} alt="Poster" />

            <div>
              {movies.Title}, {movies.Year}
            </div>
            <div className={classes.rating}>{movies.imdbRating}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.favoriteMovies.movies
});

export default connect(mapStateToProps, { getFavoriteMovies })(FavoriteMovies);
