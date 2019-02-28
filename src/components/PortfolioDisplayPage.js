import React, { Component } from "react";
import { Link } from "react-router-dom";

import me from "me.jpg";
import communication from "communication.svg";
import selfWork from "selfWork.svg";
import designInnovation from "designInnovation.svg";
import infoManagement from "infoManagement.svg";


class PortfolioDisplayPage extends Component {
  render() {
    return (

      <main className="layout">
        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h3>A collection about you.</h3>
          <Link to="/portfolio/edit" className="button">
            <span>Edit Information</span>
          </Link>
        </div>

        <div className="tile">
          <div className="bio-grid">
            <div className="bio-image">
              <img src={me} alt="my profile picture" />
            </div>
            <h1>Aaron DeRoche</h1>
            <div className="bio-span">
              <h2>Bio</h2>
              <p>
                This is all about me! I'm a person that uses Skillpod, and I
                love it!
              </p>
            </div>
            <div className="bio-span">
              <h2>Contact</h2>
              <p>abc@def.com</p>
            </div>
          </div>
        </div>

        <div className="tile blank no-bottom-padding">
          <h2>Portfolio Pieces</h2>
        </div>

        <div className="dynamic-content-panel two-column-grid">
          <ul className="vertical-stack scrollable-row invert">
            <li id="examplePP" className="tile module selected two-column-grid selfwork">
              <div className="put-after">
                <h4 className="small-margin-bottom">Module</h4>
                <h3>Self Work</h3>
              </div>
              <img src={selfWork} />
              <div className="selected-bar" />
            </li>
            <li id="designInnovation" className="tile module two-column-grid designInnovation" >
              <div className="put-after">
                <h4 className="small-margin-bottom">Module</h4>
                <h3>Design & Innovation</h3>
              </div>
              <img src={designInnovation} />
              <div className="selected-bar" />
            </li>
            <li id="networking" className="tile module two-column-grid networking">
              <div className="put-after">
                <h4 className="small-margin-bottom">Module</h4>
                <h3>Communication & Networking</h3>
              </div>
              <img src={communication} />
              <div className="selected-bar" />
            </li>
            <li id="infoManagement" className="tile module two-column-grid infoManagement">
              <div className="put-after">
                <h4 className="small-margin-bottom">Module</h4>
                <h3>Information Management</h3>
              </div>
              <img src={infoManagement} />
              <div className="selected-bar" />
            </li>
          </ul>
          <div className="tile">
            <h1>Portfolio Piece</h1>
            <p>
              Information Management is crucial for me as a recent graduate
              looking for work. While talking to a prospective employer, she
              told me that she found a link to a number of YouTube videos that I
              had created when I was younger. This was not the professional
              image that I hoped to share. As a result, I have carefully
              searched and changed privacy settings on my social media to make
              sure that I have managed my personal image. I know that care and
              attention to privacy is important for me and for those around me
              and also will reflect on how I care about the company and
              colleagues where I work.
            </p>
          </div>
        </div>

        <div className="tile">
          <h1>About Me</h1>
          <h2>My Strengths</h2>
          <h3>Leadership</h3>
          <h3>Resillance</h3>
          <h3>Consequences</h3>
          <h2>My Goals</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2>What I can offer a company is</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
    );
  }
}

export default PortfolioDisplayPage;
