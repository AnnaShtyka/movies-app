import React from 'react';
import classes from './Search.module.css';

const Search = () => {
    return (
        <div className={classes.search}>
        <div className={classes.search_container}>
          <h1>
            <i className="fa fa-search" /> Search for a movie ..
          </h1>
          <form className={classes.searchForm}>
            <input
              type="text"
              name="searchText"
              placeholder="Search Movies ..."
            />
            <button type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
}

export default Search;