import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TipsPopup from "TipsPopup";
import SkillTile from "SkillTile";
import HeadProgress from "HeadProgress";
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

      <main class="layout dashboard">
      
        {this.state.tipsPop && <TipsPopup />}

        <div class="tile no-shadow no-bottom-padding">
          <h1>Dashboard</h1>
          <h5>Welcome back, Sherry.</h5>
          <h4>Skill Path</h4>
        </div>
    
        <div id="setBackgroundGradient" class="scrollable-row">
          {
            this.state.tiles.map( tile => 
              <SkillTile tiles={this.state.tiles} />
            )
          }
          
        </div>
    
        <div class="skill-navigation">
          <div class="skill-nav-buttons">
            <button class="round"><img src="img/icons/backward-arrow.svg"/></button>
            <button class="round"><img src="img/icons/forward-arrow.svg"/></button>
          </div>
        </div>
    
        <div class="tile trophies">
          
          <div>
            <h4>Completed Skills</h4>
            <h5>Recap on skills you’ve completed.</h5>
            <div class="scrollable-row trophy-case">
              <div class="mini-module module selfwork">
                  <img src="img/icons/skills/selfWork.svg"/>
              </div>
              <div class="mini-module module infoManagement">
                <img src="img/icons/skills/infoManagement.svg"/>
              </div>
            </div>
          </div>
    
          <div>
            <h4>Progress</h4>
            <h5>All your Skillpod progress in one spot.</h5>
            <HeadProgress />
          </div>
    
          <div class="footer-grid">
            <section>
              <h1>Want to know yourself better?</h1>
              <h2>Take the PLP, a personalized learning profile quiz.</h2>
              <Link class="button" target="_blank" to="https://plp.skillpod.ca">Learning Profile</Link>
            </section>
            <section>
                <h1>Get extra help.</h1>
                <h2>Tips, Tools, and FAQ.</h2>
                <Link class="button" to="/help.html">Help</Link>
              </section>
            <section>
              <h1>More about Skillpod.</h1>
              <h2>Read more about the organization.</h2>
              <Link class="button" target="_blank" to="https://skillpod.ca">Skillpod</Link>
            </section>
          </div>
    
        </div>
    
      </main>
    );
  }
}

export default DashboardPage;
