import React, { useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Game from "../Game/Game";
import history from "../history";
import PickSide from "../PickSide/PickSide";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [playingWithFriend, setPlayingWithFriend] = useState(true);

  const isPlayingWithFrindOrAI = (isFriendPlaying) => {
    setPlayingWithFriend(isFriendPlaying);
  };

  return (
    <Router history={history}>
      <div className={classes.Container}>
        <Switch>
          <Route path="/" exact>
            <LandingPage clicked={isPlayingWithFrindOrAI} />
          </Route>
          <Route path="/pick-side" component={PickSide} />
          <Route path="/game">
            <Game playingWithAI={!playingWithFriend} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
