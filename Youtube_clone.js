import React from "react";
import Header from "./components/Header";
import Sitebar from "./components/Sitebar";
import Videos from "./components/Videos";
import "./youtube.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function youtube_cone() {
  return (
    <div className="youtube">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <div className="app_page">
              <Sitebar />
              <Videos />
            </div>
          </Route>
          {/* <Route path="/search">
            {" "}
            <Header />
            <h1>Search page </h1>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default youtube_cone;
