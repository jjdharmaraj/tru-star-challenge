import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./Login/Login";
import DailyGame from "./DailyGame/DailyGame";
import Tree from "./Tree/Tree";
import Leaderboard from "./Leaderboard/Leaderboard";
import Error from "./404/Error";

function Main() {
  return (
    <main>
      <BrowserRouter>
        {" "}
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/daily-game" component={DailyGame} exact />
          <Route path="/tree" component={Tree} exact />
          <Route path="/leaderboard" component={Leaderboard} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
export default Main;
