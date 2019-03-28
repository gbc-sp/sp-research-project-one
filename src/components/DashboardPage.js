import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TipsPopup from "TipsPopup";
import SkillTile from "SkillTile";
import HeadProgress from "HeadProgress";

import smarterLearning from "icons/skills/smarterLearning.svg";
import strategicThinking from "icons/skills/strategicThinking.svg";
import teamwork from "icons/skills/teamwork.svg";
import communication from "icons/skills/communication.svg";
import selfWork from "icons/skills/selfWork.svg";
import designInnovation from "icons/skills/designInnovation.svg";
import infoManagement from "icons/skills/infoManagement.svg";

import nav_back from "icons/backward-arrow.svg";
import nav_forward from "icons/forward-arrow.svg";

class DashboardPage extends Component {

  state = {
    tipsPop: false,
    tiles: [
      //go to tips pop up
      {id: 0, name: "Self Work", icon: selfWork, class: "selfwork",
      progress: 12.5*8, color: "#42C2CF", complete: true, comp: 4 },
      //current module pos
      {id: 3, name: "Information Management", icon: infoManagement, class: "infoManagement",
      progress: 12.5*8, color: "#42C2CF", complete: true, comp: 4 },
      //portfolio piece
      {id: 6, name: "Smarter Learning", icon: smarterLearning, class: "smarterLearning",
      progress: 12.5*6, color: "#42C2CF", complete: false, comp: 3 },
      //disabled, and so on
      {id: 1, name: "Design & Innovation", icon: designInnovation, class: "designInnovation",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },

      {id: 4, name: "Strategic Thinking", icon: strategicThinking,  class: "strategicThinking",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
      //new module
      {id: 5, name: "Teamwork", icon: teamwork, class: "teamwork",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
      
      {id: 2, name: "Communication & Networking", icon: communication, class: "networking",
      progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
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
  
  navigateSkills() {
    console.log("clicked");
    
  }
  
  //is complete true? r:complete; is complete false? r:is comps false? r:disabled; is comps !false? r:null
  render() {
    return (

      <main className="layout dashboard">
      
        {this.state.tipsPop && <TipsPopup />}

        <div className="tile no-shadow no-bottom-padding">
          <h1>Dashboard</h1>
          <h5>Welcome back, Sherry.</h5>
          <h4>Skill Path</h4>
        </div>
    
        <div id="setBackgroundGradient" className="scrollable-row">
          {
            this.state.tiles.map( tile => 
              <SkillTile tile={tile} key={tile.id}/>
            )
          }  
        </div>
    
        <div className="skill-navigation">
          <div className="skill-nav-buttons">
            <button className="round" onClick={navigateSkills}><img src={nav_back}/></button>
            <button className="round" onClick={navigateSkills}><img src={nav_forward}/></button>
          </div>
        </div>
    
        <div className="tile trophies">
          
          <div>
            <h4>Completed Skills</h4>
            <h5>Recap on skills you’ve completed.</h5>
            <div className="scrollable-row trophy-case">
              {
                this.state.tiles.complete.map( tile => 
                  // <SkillTile tile={tile} key={tile.id}/>
                  console.log("counting")
                  
                )
              }
              <div className="mini-module module selfwork">
                  <img src={selfWork}/>
              </div>
              <div className="mini-module module infoManagement">
                <img src={infoManagement}/>
              </div>
            </div>
          </div>
    
          <div>
            <h4>Progress</h4>
            <h5>All your Skillpod progress in one spot.</h5>
            <HeadProgress />
          </div>
    
          <div className="footer-grid">
            <section>
              <h1>Want to know yourself better?</h1>
              <h2>Take the PLP, a personalized learning profile quiz.</h2>
              <Link className="button" target="_blank" to="https://plp.skillpod.ca">Learning Profile</Link>
            </section>
            <section>
                <h1>Get extra help.</h1>
                <h2>Tips, Tools, and FAQ.</h2>
                <Link className="button" to="/help">Help</Link>
              </section>
            <section>
              <h1>More about Skillpod.</h1>
              <h2>Read more about the organization.</h2>
              <Link className="button" target="_blank" to="https://skillpod.ca">Skillpod</Link>
            </section>
          </div>
    
        </div>
    
      </main>
    );
  }
}

export default DashboardPage;
