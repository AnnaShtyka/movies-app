import React from 'react';
import classes from './FilmDescription.module.css';


const FilmDescription = () => {
    return (
        <div className={classes.description_container}>
            <div className={classes.image_container}>
                <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt=""/> 
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis non,
                 quam, mollitia optio autem soluta dolores accusamus cupiditate vitae 
                 obcaecati delectus et molestiae! Assumenda deserunt explicabo dolor 
                 accusamus voluptatem labore?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis non,
                 quam, mollitia optio autem soluta dolores accusamus cupiditate vitae 
                 obcaecati delectus et molestiae! Assumenda deserunt explicabo dolor 
                 accusamus voluptatem labore?
            </div>
        </div>
    )
}

export default FilmDescription;
