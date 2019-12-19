import React, { Component } from "react";
import classes from "./Search.module.css";

import { connect } from "react-redux";

import { searchMovies, getMovies, setLoading  } from "../../actions/moviesActions";

class Search extends Component {
  onChange = e => {
    this.props.searchMovies(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getMovies(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <div className={classes.search}>
        <div className={classes.search_container}>
          <h1>
            <i className="fa fa-search" /> Search for a movie ..
          </h1>
          <form className={classes.searchForm} onSubmit={this.onSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search Movies ..."
              onChange={this.onChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, { searchMovies, getMovies, setLoading })(Search);
