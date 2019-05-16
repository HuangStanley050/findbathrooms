import React from "react";
import { Spinner } from "reactstrap";

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
    position: "absolute",
    top: "50%",
    left: "50%",
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
