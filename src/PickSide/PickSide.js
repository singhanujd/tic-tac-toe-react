import Radium from "radium";
import React, { useState } from "react";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Cross from "../Cross/Cross";
import Zero from "../Zero/Zero";
import classes from "./PickSide.module.css";

const PickSide = (props) => {
  const [isCross, setIsCross] = useState(true);

  const optionChangeHandler = (event) => {
    const type = event.target.name;
    if ((type === "cross" && !isCross) || (type === "zero" && isCross)) {
      setIsCross((state) => !state);
    }
  };

  return (
    <div className={classes.Container}>
      <h3>Pick your side</h3>
      <div className={classes.Main}>
        <div
          className={classes.Option}
          style={{ opacity: !isCross ? "0.3" : "1" }}
        >
          <Cross />
        </div>
        <div style={{ opacity: isCross ? "0.3" : "1" }}>
          <Zero />
        </div>
      </div>
      <div className={classes.Options}>
        <div className={classes.Option}>
          <CheckBox
            value="cross"
            checked={isCross}
            changed={optionChangeHandler}
          />
        </div>
        <div>
          <CheckBox
            value="zero"
            checked={!isCross}
            changed={optionChangeHandler}
          />
        </div>
      </div>
      <Button
        backgroundColor="white"
        color="black"
        hoverBackgroundColor="#ECE9E6"
        hoverColor="black"
        onClick={() =>
          props.history.push({
            pathname: "/game",
            state: isCross,
          })
        }
      >
        Continue
      </Button>
    </div>
  );
};

export default Radium(PickSide);
