import React from "react";
import Radium from "radium";

const Button = (props) => {
  const style = {
    width: "150px",
    padding: "10px",
    fontSize: "15px",
    borderRadius: "20px",
    color: props.color,
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    outline: "none",
    ":hover": {
      backgroundColor: props.hoverBackgroundColor,
      color: props.hoverColor,
    },
  };
  return (
    <button onClick={props.onClick} style={style}>
      {props.children}
    </button>
  );
};

export default Radium(Button);
