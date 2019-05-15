import React from "react";
import lightbulb from "../images/light-bulb.png";

const Error = props => {
  const background = {
    backgroundColor: "#26292E",
    color: "#2E2F30",
    fontFamily: "sans-serif",

    position: "fixed",
    width: "100vw",
    minHeight: "100vh"
  };
  const imageStyle = {
    position: "absolute",
    float: "left",
    top: "0",
    width: "60%"
  };
  const dialogStyle = {
    float: "right",
    textAlign: "left",
    width: "60%",
    margin: "5% auto 0"
  };
  return (
    <div style={background}>
      <img src={lightbulb} style={imageStyle} alt="light bulb" />
      <div style={dialogStyle}>
        <h1
          style={{
            fontSize: "4em",
            color: "#fff",
            lineHeight: "1em"
          }}
        >
          Hey, who turned off the lights?
        </h1>
        <p
          style={{
            fontSize: "1.4em",
            color: "#fff",
            paddingRight: "5%"
          }}
        >
          We were unable to find the page you were looking for.
        </p>
      </div>
    </div>
  );
};

export default Error;
