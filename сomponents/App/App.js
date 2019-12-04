import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Nav from "../Nav/Nav";
import Films from "../Films/Films";
import Search from "../Search/Search";

import FilmDescription from "./Components/Description/FilmDescription";

const App = () => {
  return (
    <div>
      <Nav />
      <Search />
      <Films />
      <BrowserRouter>
        {/* <Route exact path="/" component={App} /> */}
        {/* <Route exact path="/filmDescription" component={FilmDescription} /> */}
      </BrowserRouter>
    </div>
  );
};

// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5cb241a4`)
//   .then(response => response.json())
//   .then(data => console.log(data));

export default App;
