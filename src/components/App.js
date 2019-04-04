import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import IndexPage from "outer/IndexPage";
import DashboardPage from "dashboard/DashboardPage";
import CompetencyPage from "comp/CompetencyPage";
import PortfolioEditPage from "portfolio/PortfolioEditPage";
import PortfolioDisplayPage from "portfolio/PortfolioDisplayPage";
import PortfolioCreatePage from "portfolio/PortfolioCreatePage";
import SignupPage from "outer/SignupPage";
import LoginPage from "outer/LoginPage";
import HelpPage from "HelpPage";
import SkillHomePage from "SkillHomePage";
import Goals from "outer/GoalsPage";

const { useState, useRef } = React;

const App = (props) => {
  
  const [navSettings, setNavSettings] = useState({
    collapsed: true,
    more: true,
    hidden: false
  });
  
  return (
    <Router>

      {/* https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-4b12e369d10 */}
      {/* https://codeburst.io/getting-started-with-react-router-5c978f70df91  */}
      {/* https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/ */}
      {/* https://reacttraining.com/react-router/web/api/Link */}

      <div className="app">

        {/* <TipsPopup /> */}
        {/* EVERY URL THAT NEEDS TO BE REGISTERED (PAGES) IS DONE SO HERE */}
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/yourgoal" component={Goals} />
        <Route path="/dashboard" component={DashboardPage}/>
        <Route exact path="/portfolio" component={PortfolioDisplayPage} />
        <Route path="/portfolio/create" component={PortfolioCreatePage} />
        <Route path="/portfolio/edit" component={PortfolioEditPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/skill" component={SkillHomePage} /> {/*put literal skill name here*/}
        <Route exact path="/competency/1" component={CompetencyPage} />
        <Route path="/competency/2" component={CompetencyPage} />
        <Route path="/competency/3" component={CompetencyPage} />
        <Route path="/competency/4" component={CompetencyPage} />
      </div>
    </Router>
  ); // end return
}
export default App;
