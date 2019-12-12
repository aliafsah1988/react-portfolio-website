import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonTop from "../buttonTop";
import Project from "../../views/project";
import Home from "../../views/home";
import Contact from "../contact";

import "../../styles/bootstrap.min.css";
import "../../styles/magnific-popup.css";
import "../../styles/all.min.css";
import "../../styles/themify-icons.css";
import "../../styles/animate.min.css";
import "../../styles/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <ButtonTop scrollStepInPx="50" delayInMs="16.66" />

          <Switch>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Contact />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
