import React from "react";

import { connect } from "react-redux";

import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Spinner from "../Spinner/Spinner";

const Loading = props => {
  const { loading } = props;
  return <div>{loading ? <Spinner /> : <MoviesContainer />}</div>;
};

const mapStateToProps = state => ({
  loading: state.loading.loading
});

export default connect(mapStateToProps)(Loading);
