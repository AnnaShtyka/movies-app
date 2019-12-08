import React from "react";
import classes from "./FavoriteMovies.module.css";

const FavoriteMovies = () => {
  return (
    <div>
      <div className={classes.favorite_title}>
        <h3>My Favorite</h3>
      </div>
      <div className={classes.container}>
      <div className={classes.film_card}>
        <img
          className={classes.img}
          src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          alt=""
        />
        
        <div>card-title</div>
        <div className={classes.rating}>5,5</div>
      </div>
    </div>
    </div>
  );
};

export default FavoriteMovies;
