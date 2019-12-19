import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./сomponents/Nav/Nav";
import MovieDescription from "./сomponents/Description/MovieDescription";
import FavoriteMovies from "./сomponents/FavoriteMovies/FavoriteMovies";
import Search from "./сomponents/Search/Search";
import Loading from "./сomponents/Loading/Loading"


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
