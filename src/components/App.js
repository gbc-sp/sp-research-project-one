import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import TipsPopup from "TipsPopup";
import IndexPage from "IndexPage";
import DashboardPage from "DashboardPage";
import CompetencyPage1 from "CompetencyPage1";
import CompetencyPage2 from "CompetencyPage2";
import CompetencyPage3 from "CompetencyPage3";
import CompetencyPage4 from "CompetencyPage4";
import PortfolioEditPage from "PortfolioEditPage";
import PortfolioDisplayPage from "PortfolioDisplayPage";
import PortfolioCreatePage from "PortfolioCreatePage";
import SignupPage from "SignupPage";
import LoginPage from "LoginPage";
import HelpPage from "HelpPage";
import ModuleStartPage from "ModuleStartPage";
import Recap from "Recap";
import UserGoals from "UserGoals";
import CompSelection from "CompSelection";
import SkillHome from "SkillHome";
import SignIn from "SignIn";
import Loading from "Loading";

class App extends Component {
  render() {
    return (
      <Router>
        {/* https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-4b12e369d10 */}
        {/* https://codeburst.io/getting-started-with-react-router-5c978f70df91  */}
        {/* https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/ */}
        {/* https://reacttraining.com/react-router/web/api/Link */}

        <div className="app">
          <nav className="toolbar">
            <ul className="tools">
              <li className="tool current">
                <Link to="/dashboard">dashboard</Link>
                <div className="tool-selected" />
              </li>
              <li className="tool">
                <Link to="/portfolio">portfolio</Link>
                <div className="tool-selected" />
              </li>
              <li />
              <li className="tool">
                <Link to="/help">help</Link>
                <div className="tool-selected" />
              </li>
            </ul>
          </nav>

          {/* <TipsPopup /> */}

          {/* EVERY URL THAT NEEDS TO BE REGISTERED (PAGES) IS DONE SO HERE */}
          <Route exact path="/" component={IndexPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route exact path="/portfolio" component={PortfolioDisplayPage} />
          <Route path="/portfolio/create" component={PortfolioCreatePage} />
          <Route path="/portfolio/edit" component={PortfolioEditPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/module" component={ModuleStartPage} />
          <Route exact path="/competency/1" component={CompetencyPage1} />
          <Route path="/competency/2" component={CompetencyPage2} />
          <Route path="/competency/3" component={CompetencyPage3} />
          <Route path="/competency/4" component={CompetencyPage4} />
          <Route path="/user/goals" component={UserGoals} />
          <Route path="/recap" component={Recap} />
          <Route path="/comp/selection" component={CompSelection} />
          <Route path="/skill/home" component={SkillHome} />
          <Route path="/loading" component={Loading} />
          <Route path="/sign/in" component={SignIn} />
        </div>
      </Router>
    ); // end return
  } // end render()
} // end class

export default App;
