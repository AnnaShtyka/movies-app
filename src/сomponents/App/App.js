import React from "react";

import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import MovieDescription from "../Description/MovieDescription";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import Search from "../Search/Search";
import Loading from "../Loading/Loading"


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
            <Loading />
          </Route>
          <Route path="/description/:id" component={MovieDescription} />
          <Route path="/favorite/:id" component={FavoriteMovies} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
