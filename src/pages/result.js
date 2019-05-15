import React, { useEffect } from "react";
import { getLocationStart } from "../store/actions/getData";
import { connect } from "react-redux";

const Result = props => {
  useEffect(() => {
    props.getLocation();
  });
  return <h1>result</h1>;
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(getLocationStart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Result);
