import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TipsPopup from "TipsPopup";
import SkillTile from "SkillTile";
import logoApp from "skillpod-logo-2.svg";

import smarterLearning from "smarterLearning.svg";
import strategicThinking from "strategicThinking.svg";
import teamwork from "teamwork.svg";
import communication from "communication.svg";
import selfWork from "selfWork.svg";
import designInnovation from "designInnovation.svg";
import infoManagement from "infoManagement.svg";

class DashboardPage extends Component {

  state = {
    tipsPop: false,
    tiles: [
      //go to tips pop up
      {id: 0, name: "Self Work", icon: selfWork, class: "selfwork",
      progress: 12.5*8, color: "#42C2CF", complete: true, comp: 4 },
      //current module pos
      {id: 1, name: "Design & Innovation", icon: designInnovation, class: "designInnovation",
      progress: 12.5*5, color: "#42C2CF", complete: false, comp: 3 },
      //disabled, and so on
      {id: 2, name: "Communication & Networking", icon: communication, class: "networking",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },

      {id: 3, name: "Information Management", icon: infoManagement, class: "infoManagement",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },

      {id: 4, name: "Strategic Thinking", icon: strategicThinking,  class: "strategicThinking",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
      //new module
      {id: 5, name: "Teamwork", icon: teamwork, class: "teamwork",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
      //portfolio piece
      {id: 6, name: "Smarter Learning", icon: smarterLearning, class: "smarterLearning",
      progress: 12.5*8, color: "#42C2CF", complete: false, comp: 4 }
    ]
  }

  constructor(props) {
    super(props);
    this.popTips = this.popTips.bind(this);
  }

  popTips() {
    console.log("hello");
    this.setState({tipsPop: true});
  }
  render() {
    return (
      <main className="layout">

        {this.state.tipsPop && <TipsPopup />}
      
        <Link to="https://plp.skillpod.ca" className="button">Take The PLP</Link>

        <div className="tile blank tight-padding no-bottom-padding">
          <img className="logo-img logo-2" src={ logoApp } />
          <p>Good morning Sherry, here’s your current module progress.</p>
          <h2>Module Path</h2>
        </div>

        <div className="scrollable-row-double invert">

          <div className="timeline blank center"><span>&#10004;</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>2</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>3</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>4</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>5</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>6</span><div className="time-line"></div></div>
          <div className="timeline blank center"><span>7</span><div className="time-line"></div></div>

          {
            this.state.tiles.map( tile => 
              <SkillTile tile={tile} />
            )
          }

        </div>

        <div className="tile blank tight-padding no-vertical-padding">
          <h1 id="moduleTitleMain">Design & Innovation</h1>
          <h2 className="big-vertical-margin">Module Progress</h2>

          <div className="progress-bar">
            <div id="progressBar" className="progress-amount"></div>
          </div>
        </div>

        <div className="two-column-grid button-grid">
          <div className="tile very-tight-padding one-column-grid">
            <button id="moduleProgressButton" className="button-square center"><span>continue</span></button>
          </div>
          <div className="tile very-tight-padding center two-column-grid">
            <button id="modulePortfolioButton" className="button-square"><span>create</span></button>
            <button id="moduleTipsButton" className="button-square"><span>recap</span></button>
          </div>
        </div>

        <div className="tile">
          <p>Why do the buttons above break if i remove this?</p>
        </div>
      </main>
    );
  }
}

export default DashboardPage;
