import React from "react";
import SearchBar from "../components/searchBar.js";
import SearchResult from "../components/searchResult.js";
import Loader from "../components/loader";
import {connect} from "react-redux";

const Search = props => {
  return props.loading ? (
    <Loader />
  ) : (
    <section>
      <SearchBar />
      <SearchResult />}
    </section>
  );
};

const mapStateToProps = state => ({loading: state.data.loading});

export default connect(mapStateToProps)(Search);
