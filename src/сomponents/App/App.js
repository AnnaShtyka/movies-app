import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Films from "../Movies/MoviesCard";
import Search from "../Search/Search";
import FilmDescription from "../Description/FilmDescription";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";

import store from "../../store";

const App = () => {
  return (
    <Provider store={configureStore}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Search />
              <Films />
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
    </Provider>
  );
};

export default App;
