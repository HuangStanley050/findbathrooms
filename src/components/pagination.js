import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Page = props => {
  const buttonStyle = {
    fontSize: "4rem"
  };
  return (
    <section>
      <Pagination style={{ justifyContent: "center", marginTop: "2.5rem" }}>
        <PaginationItem>
          <PaginationLink style={buttonStyle} previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink style={buttonStyle}>First Page</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink style={buttonStyle} next />
        </PaginationItem>
      </Pagination>
    </section>
  );
};

export default Page;
