import React from "react";
import {Spinner} from "reactstrap";

const Loader = props => {
  // const alter = {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center"
  //   //minHeight: "100vh"
  // };
  const loaderStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    width: "3rem",
    height: "3rem"
  };
  return (
    <div>
      {" "}
      <Spinner style={loaderStyle} color="danger" />
    </div>
  );
};

export default Loader;
