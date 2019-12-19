import React from "react";

import { connect } from "react-redux";

import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Spinner from "../Spinner/Spinner";

export const Loading = props => {
  const { loading } = props;
  return (
    <div>
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Loading);
