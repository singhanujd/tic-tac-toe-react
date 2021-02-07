import React from "react";
import Cross from "../../../Cross/Cross";
import Zero from "../../../Zero/Zero";
import classes from "./Square.module.css";

const Square = ({ value, clicked }) => (
  <button className={classes.Square} onClick={clicked}>
    {value === null ? null : value === "X" ? <Cross /> : <Zero />}
  </button>
);

export default Square;
