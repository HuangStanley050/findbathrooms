import React, {useEffect} from "react";
import {getLocationStart} from "../store/actions/getData";
import {connect} from "react-redux";
import Loader from "../components/loader";

const Result = props => {
  useEffect(() => {
    props.getLocation();
    //props.findbathroom();
  }, []);
  return props.loading ? <Loader /> : <h1>Toilets found!!</h1>;
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(getLocationStart())
    //findbathroom: () => dispatch(findBathroomsStart(12, 15))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.data.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
