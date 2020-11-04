import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history";

// pages for this product
//import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ArchitecturePortfolio from "views/ArchitecturePortfolio/ArchitecturePortfolio.js"
import ProfessionalWork from "views/ProfessionalWork/ProfessionalWork";
// import LoginPage from "views/LoginPage/LoginPage.js";

function App(props) {

  var hist = createBrowserHistory()

  return (
    <div>
      <Router history={hist}>
        <Route path="/profile-page" exact component={ProfilePage} />
        <Route path="/architecture" exact component={ArchitecturePortfolio} />

        <Route path="/" exact component={LandingPage} />
        <Route path="/professional-portfolio" exact component={ProfessionalWork} />

      </Router>
      </div>
  )
}

export default App;