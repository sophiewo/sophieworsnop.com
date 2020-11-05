import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history";

import LandingPage from "views/LandingPage/LandingPage.js";
import ArchitecturePortfolio from "views/ArchitecturePortfolio/ArchitecturePortfolio.js"
import ProfessionalWork from "views/ProfessionalWork/ProfessionalWork";

function App(props) {

  var hist = createBrowserHistory()

  return (
    <div>
      <Router history={hist}>
        <Route path="/academic-portfolio" exact component={ArchitecturePortfolio} />
        <Route path="/professional-portfolio" exact component={ProfessionalWork} />
        <Route path="/" exact component={LandingPage} />
      </Router>
      </div>
  )
}

export default App;