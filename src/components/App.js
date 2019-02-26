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
import SignupPage from "SignupPage";
import LoginPage from "LoginPage";
import HelpPage from "HelpPage";
import ModuleStartPage from "ModuleStartPage";

import dash from "dashboard.svg";
import port from "portfolio.svg";
import help from "help.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="toolbar">
            <ul className="tools">
              <li className="tool">
                <Link to="/">Home</Link>
              </li>
              <li className="tool">
                <Link to="/dashboard">
                  <img src={dash} alt="FILL THIS IN!!" />
                </Link>
              </li>
              {/* <li className="tool"><Link to="/portfolio"><img src={port} alt="FILL THIS IN!!" /></Link></li> */}
              {/* <li className="tool"><Link to="/help"><img src={help} alt="FILL THIS IN!!" /></Link></li> */}
            </ul>
          </nav>

          <TipsPopup />

          {/* EVERY URL THAT NEEDS TO BE REGISTERED (PAGES) IS DONE SO HERE */}
          <Route exact path="/" component={IndexPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/portfolio" component={PortfolioDisplayPage} />
          <Route path="/help" component={HelpPage} />
          <SignupPage />
          <LoginPage />
          {/* <DashboardPage /> */}
          <ModuleStartPage />
          {/* <PortfolioCreatePage /> */}
          <PortfolioEditPage />
          {/* <CompetencyPage /> */}
          <Route path="/" component={CompetencyPage1} />
          <Route path="/" component={CompetencyPage2} />
          <Route path="/" component={CompetencyPage3} />
          <CompetencyPage4 />
        </div>
      </Router>
    ); // end return
  } // end render()
} // end class

export default App;
