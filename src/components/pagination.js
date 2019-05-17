import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { changePage } from "../store/actions/getData";
import { connect } from "react-redux";

const Page = props => {
  const buttonStyle = {
    fontSize: "4rem"
  };
  return (
    <section>
      <Pagination style={{ justifyContent: "center", marginTop: "2.5rem" }}>
        <PaginationItem>
          <PaginationLink
            onClick={() => props.change("prev")}
            style={buttonStyle}
            previous
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => props.change("first")}
            style={buttonStyle}
          >
            First Page
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => props.change("next")}
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
    change: direction => dispatch(changePage(direction))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Page);
