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
import Goals from "Goals";

import dashboard_ico from "dashboard.svg";
import portfolio_ico from "portfolio.svg";
import logo from "skillpod-logo.svg";

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
              <li className="tool logo"><img src={logo} /></li>
              <li></li>
              <li className="tool current"><Link to="dashboard.html"><img src={dashboard_ico} /><span>dashboard</span></Link></li>
              <li className="tool"><Link to="portfolio.html"><img src={portfolio_ico} /><span>portfolio</span></Link></li>
              <li className="tool more">
                <h4>Want to know <br/>yourself better?</h4>
                <h5>Take the PLP, a personalized learning profile quiz.</h5>
                <Link className="button light" target="_blank" to="https://plp.skillpod.ca">Learning Profile</Link>
              </li>
              <li className="tool more">
                <Link target="_blank" to="/help.html">More Help</Link>
                <Link target="_blank" to="https://skillpod.ca">Skillpod Organization</Link>
                <h5>Copyright Info Here, 2019 ©</h5>
              </li>
            </ul>
          </nav>

          {/* <TipsPopup /> */}


          {/* EVERY URL THAT NEEDS TO BE REGISTERED (PAGES) IS DONE SO HERE */}
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/yourgoal" component={Goals} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route exact path="/portfolio" component={PortfolioDisplayPage} />
          <Route path="/portfolio/create" component={PortfolioCreatePage} />
          <Route path="/portfolio/edit" component={PortfolioEditPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/skill" component={ModuleStartPage} /> {/*put literal skill name here*/}
          <Route exact path="/competency/1" component={CompetencyPage1} />
          <Route path="/competency/2" component={CompetencyPage2} />
          <Route path="/competency/3" component={CompetencyPage3} />
          <Route path="/competency/4" component={CompetencyPage4} />
        </div>
      </Router>
    ); // end return
  } // end render()
} // end class

export default App;
