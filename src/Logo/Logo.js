import React from "react";
import Cross from "../Cross/Cross";
import Zero from "../Zero/Zero";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div className={classes.Logo}>
    <Cross />
    <Zero />
  </div>
);

export default Logo;
