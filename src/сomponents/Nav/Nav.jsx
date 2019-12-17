import React from "react";
import classes from "./Nav.module.css";


const Nav = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.info}>
          <a href="/" className={classes.title}>
            <h1>Movies Info</h1>
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
