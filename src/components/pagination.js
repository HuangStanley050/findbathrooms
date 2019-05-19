import React from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {changePage} from "../store/actions/getData";
import {connect} from "react-redux";

const Page = props => {
  const buttonStyle = {
    fontSize: "4rem"
  };
  return (
    <section>
      <Pagination style={{justifyContent: "center", marginTop: "2.5rem"}}>
        <PaginationItem>
          <PaginationLink
            onClick={() =>
              props.change("prev", props.currentPage - 1, props.long, props.lat)
            }
            style={buttonStyle}
            previous
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => props.change("first", 1, props.long, props.lat)}
            style={buttonStyle}
          >
            First Page
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() =>
              props.change("next", props.currentPage + 1, props.long, props.lat)
            }
            style={buttonStyle}
            next
          />
        </PaginationItem>
      </Pagination>
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    change: (direction, page, long, lat) =>
      dispatch(changePage(direction, page, long, lat))
  };
};
const mapStateToProps = state => {
  return {
    currentPage: state.data.currentPage,
    long: state.data.currentLocation.LONG,
    lat: state.data.currentLocation.LAT
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
