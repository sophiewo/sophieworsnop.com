import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history";

import LandingPage from "views/LandingPage/LandingPage";
import AcademicWork from "views/AcademicWork/AcademicWork"
import ProfessionalWork from "views/ProfessionalWork/ProfessionalWork";

function App() {

  var hist = createBrowserHistory()

  return (
    <div>
      <Router history={hist}>
        <Route path="/academic-portfolio" exact component={AcademicWork} />
        <Route path="/professional-portfolio" exact component={ProfessionalWork} />
        <Route path="/" exact component={LandingPage} />
      </Router>
      </div>
  )
}

export default App;