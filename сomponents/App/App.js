import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Films from "../Films/Movies";
import Search from "../Search/Search";
import FilmDescription from "../Description/FilmDescription";

const App = () => {
  return (
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
        </Switch>
      </div>
    </Router>
  );
};


export default App;
