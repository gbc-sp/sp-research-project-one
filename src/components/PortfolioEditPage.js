import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sherry from "Sherry.jpg";
import communication from "communication.svg";
import selfWork from "selfWork.svg";
import designInnovation from "designInnovation.svg";
import infoManagement from "infoManagement.svg";

class PortfolioEditPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h3>Editing</h3>
        </div>

        <div className="tile">
          <div className="bio-grid">
            <div className="bio-image">
              <img src={Sherry} alt="User image" />
            </div>
            <h1>Sherry DeRoche</h1>
            <div className="bio-span">
              <h2>Bio</h2>
              <input
                type="text"
                defaultValue="Who are you outside of SKillpod?"
              />
            </div>
            <div className="bio-span">
              <h2>Contact</h2>
              <input type="text" defaultValue="abc@def.com" />
            </div>
          </div>
        </div>

        <div className="tile blank no-bottom-padding">
          <h1>Portfolio Pieces</h1>
        </div>

        <div className="two-column-grid public-private">
          <div>
            <h2 className="very-tight-padding no-vertical-margin">Public</h2>
            <ul className="vertical-stack invert">
              <li className="tile module two-column-grid selfwork">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Self Work</h3>
                </div>
                <img src={selfWork} alt="self work" />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Private</h3>
                  <h3>View</h3>
                </div>
                <div className="selected-bar" />
              </li>
              <li className="tile module two-column-grid designInnovation">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Design & Innovation</h3>
                </div>
                <img src={designInnovation} alt="design innovation" />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Private</h3>
                  <h3>View</h3>
                </div>
                <div className="selected-bar" />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="very-tight-padding no-vertical-margin">Private</h2>
            <ul className="vertical-stack dark-bg invert">
              <li className="tile module two-column-grid networking">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Communication & Networking</h3>
                </div>
                <img src={communication} alt="communication" />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Public</h3>
                  <h3>View</h3>
                </div>
                <div className="selected-bar" />
              </li>
            </ul>
          </div>
        </div>

        <div className="tile blank">
          <h1>About You</h1>
        </div>

        <div className="tile">
          <h2>Using a Skillpod lens:</h2>
          <input type="text" placeholder="Describe yourself." />
          <h2>What are your top strengths (choose a maximum of 3)</h2>

          <ul className="check-box-container">
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option1"
                defaultValue="Communication"
              />
              <span>Communication</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option2"
                defaultValue="Consequences"
              />
              <span>Cosequences</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option3"
                defaultValue="Confidence"
              />
              <span>Confidence</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option4"
                defaultValue="Leadership"
              />
              <span>Leadership</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option5"
                defaultValue="Conflict Resolution"
              />
              <span>Conflict resolution</span>
            </li>
          </ul>
          <h2>My Goal</h2>
          <p>I want to have more this in that.</p>
          <input type="text" name="goals" placeholder="Talk about your goal." />

          <h2>What I can offer a company</h2>
          <input type="text" name="offer" defaultValue="" />

          <Link to="/portfolio" className="button">
            <span>Save</span>
          </Link>
        </div>
      </main>
    );
  }
}

export default PortfolioEditPage;
