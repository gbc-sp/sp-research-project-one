import React from "react";
import { Link } from "react-router-dom";

import dashboard_ico from "icons/dashboard.svg";
import portfolio_ico from "icons/portfolio.svg";
import logo from "logos/skillpod-logo-head.svg";

const { useState, useRef } = React;

const MainToolbar = (props) => {
    return (
        <nav className={`toolbar ${props.classVal}`}>
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
    )
} 
export default MainToolbar;