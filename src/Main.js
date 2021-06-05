import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./Login/Login";
import DailyGame from "./DailyGame/DailyGame";
import Leaderboard from "./Leaderboard/Leaderboard";
import ChallengeComplete from "./ChallengeComplete/ChallengeComplete";
import Error from "./404/Error";

function Main() {
  return (
    <main>
      <BrowserRouter>
        {" "}
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/daily-game" component={DailyGame} exact />
          <Route path="/leaderboard" component={Leaderboard} exact />
          <Route
            path="/challenge-complete"
            component={ChallengeComplete}
            exact
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
export default Main;
