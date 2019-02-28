import React, { Component } from 'react';

import designInnovation from "designInnovation.svg";

class TipsPopup extends Component {
  render() {
    return (
      <div id="tipsPopUp" className="pop-up dynamic-content-panel two-column-grid">

        <div className="pop-up-nav">
          <nav className="toolbar">
            <ul className="tools">
              <li className="tool current"><a href="javascript:">tips</a><div className="tool-selected"></div></li>
              <li className="tool"><a href="javascript:">reflection</a><div className="tool-selected"></div></li>
              <li></li>
              <li className="tool" id="tipsClose"><a href="javascript:">close</a><div className="tool-selected"></div></li>
            </ul>
          </nav>
        </div>
    
        <div className="vertical-stack scrollable-row">
          <div className="tile shrink-vertical tight-padding selected designInnovation white-txt">
            <div className="two-column-grid invert">
              <img src={ designInnovation } />
              <div>
                <h2 className="small-margin-bottom">Module</h2>
                <h3 className="no-vertical-margin" id="moduleTitle">Module Name</h3>
              </div>
              <div className="selected-bar"></div>
            </div>
          </div>
          <div className="tile blank shrink-vertical tight-padding">
            <div className="two-column-grid">
            <img src={ designInnovation } />
              <div>
                <h2 className="small-margin-bottom">Module</h2>
                <h3 className="no-vertical-margin">Module Name</h3>
              </div>
            </div>
          </div>
          <div className="tile blank shrink-vertical tight-padding">
            <div className="two-column-grid">
            <img src={ designInnovation } />
              <div>
                <h2 className="small-margin-bottom">Module</h2>
                <h3 className="no-vertical-margin">Module Name</h3>
              </div>
            </div>
          </div>
        </div>
    
        <div className="tile">
          <h1>Tips</h1>
          <select id="compSelection" className="">
            <option value="0">competency one</option>
            <option value="1">competency two</option>
            <option value="2">competency three</option>
          </select>
          <p id="tipsContent">Tips Content</p>
        </div>
    
      </div>
    );
  }
}

export default TipsPopup;
