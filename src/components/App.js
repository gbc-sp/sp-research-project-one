import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import TipsPopup from "TipsPopup";
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

import dashboard_ico from "icons/dashboard.svg";
import portfolio_ico from "icons/portfolio.svg";
import logo from "logos/skillpod-logo-head.svg";
import comp_ico from "icons/competency.svg";

const { useState, useRef } = React;

const App = (props) => {
  return (
    <Router>

      {/* https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-4b12e369d10 */}
      {/* https://codeburst.io/getting-started-with-react-router-5c978f70df91  */}
      {/* https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/ */}
      {/* https://reacttraining.com/react-router/web/api/Link */}

      <div className="app">
        <nav className="toolbar">
          <ul className="tools">
            <li className="tool logo"><img alt="skillpod logo" src={logo} /></li>
            <li></li>
            <li className="tool current"><Link to="/dashboard"><img alt="dashboard icon" src={dashboard_ico} /><span>dashboard</span></Link></li>
            <li className="tool"><Link to="/portfolio"><img alt="portfolio icon" src={portfolio_ico} /><span>portfolio</span></Link></li>
            <li className="tool more">
              <h4>Want to know <br/>yourself better?</h4>
              <h5>Take the PLP, a personalized learning profile quiz.</h5>
              <a className="button light" rel="noopener" target="_blank" href="https://plp.skillpod.ca">Learning Profile</a>
            </li>
            <li className="tool more">
              <Link target="_blank" to="/help">More Help</Link>
              <a target="_blank" rel="noopener" href="https://skillpod.ca">Skillpod Organization</a>
              <h5>Copyright Info Here, 2019 ©</h5>
            </li>
          </ul>
        </nav>
        <nav className="toolbarModule">
          <h1>Skill Home</h1>
          <h5>A skill consists of four competencies.</h5>
          <h4>Start Learning</h4>
          <h6>Current Competency</h6>
          <div className="two-column-grid active">
            <img src={comp_ico}/>
            <span>Harnessing the power of failure</span>
            <div className="progress"></div>
          </div>
          <h6>Unbegan Competencies</h6>
          <div className="two-column-grid">
            <img src={comp_ico}/>
            <span>Cultivating a growth mindset</span>
            <div className="progress"></div>
          </div>
          <h6>Completed Competencies</h6>
          <div className="two-column-grid complete">
            <img src={comp_ico}/>
            <span>Knowing yourself as a failure</span>
            <div className="progress"></div>
          </div>
          <div className="two-column-grid complete">
            <img src={comp_ico}/>
            <span>Achieving nothing in your life</span>
            <div className="progress"></div>
          </div>
          
        </nav>

        {/* <TipsPopup /> */}
        {/* EVERY URL THAT NEEDS TO BE REGISTERED (PAGES) IS DONE SO HERE */}
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/yourgoal" component={Goals} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/dashboard/recap" isVisible={} />
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
