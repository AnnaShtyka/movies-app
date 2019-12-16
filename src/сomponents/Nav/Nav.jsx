import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.info}>
          <h1>Movies Info</h1>
        </div>
        <div className={classes.navigation}>
          <a href="/">
            <h2>Search</h2>
          </a>
        </div>
        <ul>
          <li>
            <i className="fab fa-imdb fa-5x" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
