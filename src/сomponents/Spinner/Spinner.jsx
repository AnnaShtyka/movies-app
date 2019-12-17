import React from "react";
import classes from "./Spinner.module.css"
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Spinner;
