import React, { Component } from 'react';
// import logo from 'skillpod-head.png';
import dash from 'dashboard.svg';
import port from 'portfolio.svg';
import help from 'help.svg';


class ToolBar extends Component {
  render() {
    return (
      <nav className="toolbar">
        <ul className="tools">
          <li className="tool"><a href="dashboard.html"><img src={dash} alt="FILL THIS IN!!" /></a></li>
          <li className="tool"><a href="portfolio.html"><img src={port} alt="FILL THIS IN!!" /></a></li>
          <li className="tool"><a href="help.html"><img src={help} alt="FILL THIS IN!!" /></a></li>
        </ul>
      </nav>
    );
  }
}

export default ToolBar;
