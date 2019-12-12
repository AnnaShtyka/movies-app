import React from "react";

import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import MovieDescription from "../Description/MovieDescription";
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
          <Route exact path="/" component={MoviesContainer} />
          <Route exact path="/MovieDescription/" component={MovieDescription} />
          <Route exact path="/FavoriteMovies/" component={FavoriteMovies} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


