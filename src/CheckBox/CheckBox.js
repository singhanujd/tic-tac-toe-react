import React from "react";
import Radium from "radium";

const CheckBox = (props) => {
  const style = {
    transform: "scale(2)",
  };

  return (
    <>
      <input
        style={style}
        name={props.value}
        type="radio"
        checked={props.checked}
        onChange={props.changed}
      />
      <label htmlFor={props.value} />
    </>
  );
};

export default Radium(CheckBox);
