import React, { Component } from "react";
import classes from "./FavoriteMovies.module.css";

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
        <div className={classes.favorite_title}>
          <h2>My Favorite</h2>
        </div>
        <div className={classes.container}>
          <div className={classes.film_card}>
            <img className={classes.img} src={movies.Poster} alt="Poster" />
            <div>{movies.Title}</div>
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

