import React from "react";
import classes from "./FilmDescription.module.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const FilmDescription = () => {
  return (
    <div className={classes.description_container}>
      <div className={classes.image_container}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          alt=""
        />
        <button className={classes.favorite}>
          <Link to={"/FavoriteMovies/"}>Add to favorites</Link>
        </button>
      </div>

      <div className={classes.details}>
        <div>Title:</div>
        <div>Actors:</div>
        <div>Country:</div>
        <div>Genre:</div>
        <div>Year:</div>
        <div>imdbRating:</div>
      </div>

      <div className={classes.description}>
        <h3>About film</h3>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis non,
          quam, mollitia optio autem soluta dolores accusamus cupiditate vitae
          obcaecati delectus et molestiae! Assumenda deserunt explicabo dolor
          accusamus voluptatem labore? L orem ipsum dolor sit, amet consectetur
          adipisicing elit. Debitis non, quam, mollitia optio autem soluta
          dolores accusamus cupiditate vitae obcaecati delectus et molestiae!
          Assumenda deserunt explicabo dolor accusamus voluptatem labore?
        </span>
      </div>
    </div>
  );
};

export default FilmDescription;
