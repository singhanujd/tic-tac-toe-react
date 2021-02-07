import React from "react";
import Button from "../Button/Button";
import history from "../history";
import Logo from "../Logo/Logo";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.Container}>
      <Logo />
      <h3>Choose your play mode</h3>
      <Button
        backgroundColor="#0052d4"
        color="white"
        hoverBackgroundColor="#6fb1fc"
        hoverColor="white"
        onClick={() => {
          history.push("/pick-side");
          props.clicked(false);
        }}
      >
        With AI
      </Button>
      <Button
        backgroundColor="white"
        color="black"
        hoverBackgroundColor="#ECE9E6"
        hoverColor="black"
        onClick={() => {
          history.push("/pick-side");
          props.clicked(true);
        }}
      >
        With a Friends
      </Button>
    </div>
  );
};

export default LandingPage;
