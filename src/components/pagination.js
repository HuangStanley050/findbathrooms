import React from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {nextPage, prevPage, firstPage} from "../store/actions/getData";
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
            onClick={() => props.prev()}
            style={buttonStyle}
            previous
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => props.first()} style={buttonStyle}>
            First Page
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => props.next()}
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
    next: () => dispatch(nextPage()),
    prev: () => dispatch(prevPage()),
    first: () => dispatch(firstPage())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Page);
