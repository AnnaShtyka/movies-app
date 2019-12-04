import React from 'react';
import classes from './Films.module.css';




const Films = () => {
    return (
        <div className={classes.film_container}>
        <div className={classes.film_card}>
          <img className={classes.img} src='https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg' alt="" />
          <p>card-title</p>
          <button className={classes.button}>
            
            <a href='/filmDescription'>Details</a> 
            
          </button>
        </div>
      </div>
    )
}

export default Films;