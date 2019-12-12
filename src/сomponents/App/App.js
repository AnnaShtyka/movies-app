import React from "react";

import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import FilmDescription from "../Description/FilmDescription";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Search from "../Search/Search";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Search />
        <Switch>
          <Route exact path="/" component={MoviesContainer} >
           </Route>
          <Route
            exact
            path="/FilmDescription/"
            component={FilmDescription}
          ></Route>
          <Route
            exact
            path="/FavoriteMovies/"
            component={FavoriteMovies}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;


