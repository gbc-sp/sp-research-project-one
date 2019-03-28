import React, { Component } from "react";
import { Link } from "react-router-dom";

import menu from "icons/menu.svg";
import comp_ico from "icons/competency.svg";
import back_arrow from "icons/back-arrow.svg";
import smarterLearning from "icons/skills/smarterLearning.svg";

class ModuleStartPage extends Component {
  render() {
    return (
      <main className="layout skill-home">
        <div>
          <div className="tile full smarterLearning white-txt make-it-relative">
            <div className="local-nav">
              <Link to="/dashboard"><img src={back_arrow} className="back-icon" alt="back icon"/></Link>
              <Link to=""><img src={menu} className="menu-icon" alt="menu icon"/></Link>
            </div>
            <div className="bring-forward skill-info">
              <h1>Smarter Learning</h1>
              <h5>Anything and everything Smarter Learning.</h5>
              <p>Learning is the change in one's behaviour or knowledge which comes about as a result of experience.</p>
              <p>We all learn in different ways, and sometimes individuals have different methods of learning depending on the job they need to do.</p>
              <ul>
                <h2>What Employers Value</h2>
                <li>willingness to learn</li>
                <li>resilience</li>
                <li>recourcefulness</li>
                <li>adaptability</li>
                <li>learns effectively from others</li>
              </ul>
            </div>
            <div className="skill-progress">
                <h6>Progress</h6>
                <div className="prog-bar light">
                    <h3 className="complete">1</h3>
                    <h3 className="complete">2</h3>
                    <h3 className="active">3</h3>
                    <h3>4</h3>
                </div>
              </div>
            <div className="begin-module">
              <Link to="/competency/1" className="button">Begin</Link>
            </div>

            <img src={smarterLearning} className="module-background-icon" alt="Smarter Learning background image"/>

          </div>

          </div>
          <div>
          <div className="tile full module-snug-top bring-forward">
              <div className="comp-breakdown-grid">
                <img src={comp_ico} alt="chapters icon"/>
                <div>
                  <h1>Chapter Breakdowns</h1>
                  <h5>Explainations of the Smarter Learning chapters.</h5>
                </div>
              </div>
              <div className="more-top-padding">
                <h4>Knowing yourself as a learner.</h4>
                <p>Complete the Personal Learning Profile to get a more in depth understanding of your learning preferences. The better you know yourself, the smarter and faster you can learn.</p>
                <h4>Cultivating a growth mindset.</h4>
                <p>A growth mindset is more than being open-minded. It is a belief that you,as an individual are capable of improving if consistent effort is applied. These individuals are less concerned with proving themselves than about improving.</p>
                <h4>Aclieving your goals.</h4>
                <p>Creating well defined goals will help structure your learning.</p>
                <h4>Harnessing the power of failure.</h4>
                <p>Fear of failure prevents learning. Failure must be reframed as an opportunity for learning.</p>
              </div>
            </div>

          </div>
        </main>
    );
  }
}

export default ModuleStartPage;
