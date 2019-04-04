import { Link } from "react-router-dom";
import React, { Component } from 'react';

import SkillTile from "dashboard/SkillTile";
import MiniSkillTile from "dashboard/MiniSkillTile";
import HeadProgress from "dashboard/HeadProgress";

import smarterLearning from "icons/skills/smarterLearning.svg";
import strategicThinking from "icons/skills/strategicThinking.svg";
import teamwork from "icons/skills/teamwork.svg";
import communication from "icons/skills/communication.svg";
import selfWork from "icons/skills/selfWork.svg";
import designInnovation from "icons/skills/designInnovation.svg";
import infoManagement from "icons/skills/infoManagement.svg";

import nav_back from "icons/backward-arrow.svg";
import nav_forward from "icons/forward-arrow.svg";

const { useState, useRef } = React;

function DashboardPage(props) {
  const [tiles, setTile] = useState([
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
  ]);
  
  const navigateSkills = () => {
    console.log("do something");
    
  }
  
  return (

    <main className="layout dashboard">
    
      {/* {this.state.tipsPop && <TipsPopup />} */}

      <div className="tile no-shadow no-bottom-padding">
        <h1>Dashboard</h1>
        <h5>Welcome back, Sherry.</h5>
        <h4>Skill Path</h4>
      </div>
  
      <div id="setBackgroundGradient" className="scrollable-row">
        {
          tiles.map( (tile,i) => 
            <SkillTile tile={tile} key={i}/>
          )
        }  
      </div>
  
      <div className="skill-navigation">
        <div className="skill-nav-buttons">
          <button className="round" onClick={navigateSkills}><img alt="back one skill icon" src={nav_back}/></button>
          <button className="round" onClick={navigateSkills}><img alt="forward one skill icon" src={nav_forward}/></button>
        </div>
      </div>
  
      <div className="tile trophies">
        <div>
          <h4>Completed Skills</h4>
          <h5>Recap on skills you’ve completed.</h5>
          <div className="scrollable-row trophy-case">
            {
              tiles.filter (tile => tile.complete).map((tile,i) =>
                <MiniSkillTile tile={tile} key={i} />
              )
            }
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
            <a className="button" rel="noopener" target="_blank" href="https://plp.skillpod.ca">Learning Profile</a>
          </section>
          <section>
              <h1>Get extra help.</h1>
              <h2>Tips, Tools, and FAQ.</h2>
              <Link className="button" to="/help">Help</Link>
            </section>
          <section>
            <h1>More about Skillpod.</h1>
            <h2>Read more about the organization.</h2>
            <a className="button" rel="noopener" target="_blank" href="https://skillpod.ca">Skillpod</a>
          </section>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
