import React from "react";

import { connect } from "react-redux";

import MovieCard from "../Movies/MovieCard";
import classes from './MoviesContainer.module.css';

export const MoviesContainer = props => {
  const { movies } = props;
  return (
    <div className={classes.container}>
      {!movies || !movies.Search
        ? null
        : movies.Search.map((movie, i) => <MovieCard key={i} movie={movie} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
