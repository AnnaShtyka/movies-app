import React, { Component } from "react";
import classes from "./MovieDescription.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveMovieDescription } from "../../redux/actions/saveMovieDescription";

class MovieDescription extends Component {
  componentDidMount() {
    this.props.saveMovieDescription(this.props.id);
  }
  render() {
    const { Title, Poster, Actors, Country, Genre, Year, imdbID, Plot} = this.props;
    return (
      <div className={classes.description_container}>
        <div className={classes.image_container}>
          <img src={Poster} alt="Poster" />
          <button className={classes.favorite}>
            <Link to={"/FavoriteMovies/"}>Add to favorites</Link>
          </button>
        </div>

        <div className={classes.details}>
          <div>Title:{Title}</div>
          <div>Actors:{Actors}</div>
          <div>Country:{Country}</div>
          <div>Genre:{Genre}</div>
          <div>Year:{Year}</div>
          <div>imdb{imdbID}</div>
        </div>

        <div className={classes.description}>
          <h3>About film</h3>
          <span>{Plot}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.saveMovieDescription.movie
});

export default connect(mapStateToProps, { saveMovieDescription })(
  MovieDescription
);

