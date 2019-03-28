import React, { Component } from "react";
import { Link } from "react-router-dom";

import me from "user/me.jpg";
import portfolio_hero from "user/portfolio/infoManagement/hero.jpg";
import back_arrow from "icons/back-arrow.svg";
import edit_ico from "icons/edit.svg";
import communication from "icons/skills/communication.svg";
import selfWork from "icons/skills/selfWork.svg";
import designInnovation from "icons/skills/designInnovation.svg";
import infoManagement from "icons/skills/infoManagement.svg";


class PortfolioDisplayPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="button-corner">
          <Link to="/portfolio/edit">
            <img src={edit_ico}/>
          </Link>
        </div>
        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h3>A collection about you.</h3>
        </div>
        
        <div className="tile full no-padding profile-hero">
          <section className="portfolio-bio two-column-grid">

            <div className="profile-image">
              <img src={ me }/>
              <div className="hero-info">
                  <h1 className="white-txt">Brent Chad</h1>
                  <div className="tags">
                      <h4>Leadership</h4>
                      <h4>Resilience</h4>
                      <h4>Coolness</h4>
                  </div>
              </div>
            </div>

            <div>
              <div className="tile blank">
                  <h2>Bio</h2>
                  <p>This is all about me! I'm a person that uses Skillpod, and I love it!</p>
              </div>

              <div className="tile blank no-top-padding">
                <div>
                  <h2>Contact Brent</h2>
                  <div className="two-column-grid">
                    <button className="button">Email</button>
                    <button className="button">Phone</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        

        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h2>A collection of Brent's Portfolio Pieces</h2>
        </div>
        
        <div className="portfolio-pieces">
          <div className="portfolio-thumb">
            <div className="thumb-info">
              <div className="mini-module module selfwork">
                <img src={ selfWork}/>
              </div>
              <h4>My Professional Image</h4>
            </div>
          </div>
          <div className="portfolio-thumb">
            <div className="thumb-info">
              <div className="mini-module module selfwork">
              <img src={ selfWork}/>
              </div>
              <h4>My Professional Image</h4>
            </div>
          </div>
          <div className="portfolio-thumb">
            <div className="thumb-info">
              <div className="mini-module module selfwork">
              <img src={ selfWork}/>
              </div>
              <h4>My Professional Image</h4>
            </div>
          </div>
          <div className="portfolio-thumb">
            <div className="thumb-info">
              <div className="mini-module module selfwork">
              <img src={ selfWork}/>
              </div>
              <h4>My Professional Image</h4>
            </div>
          </div>
        </div>
        
        <div className="current-portfolio-piece">
            <div className="tile full no-padding">
              
              <div className="profile-image">
                <div>
                  <img src={ portfolio_hero }/>
                </div>
              </div>
              <div className="tile blank">
                <Link to="null:"><img className="go-back" src={back_arrow}/></Link>
                <h1 className="no-vertical-margin">My Professional Image</h1>
                <h2 className="no-vertical-margin">Information Management</h2>
                <p><span className="txt-impact">Information Management</span> is crucial for me as a recent graduate looking for work. While talking to a prospective employer, she told me that she found a link to a number of YouTube videos that I had created when I was younger. This was not the professional image that I hoped to share. As a result, I have carefully searched and changed privacy settings on my social media to make sure that I have managed my personal image. I know that care and attention to privacy is important for me and for those around me and also will reflect on how I care about the company and colleagues where I work.</p>
                {/* This would go back to portfolio piece selection. it only shoes if a piece has been selected. */}
                <Link to="null:" className="button">Go Back</Link>
              </div>
              
            </div>
          </div>

        <div className="tile blank">
            <h1>About Brent</h1>
            <h2>More Information</h2>
        </div>
        <div className="tile full">
            <h2>My Goal</h2>
            <h1>I want to build skills in <span className="txt-impact">Leadership</span>, in the field of <span className="txt-impact">Teaching</span>.</h1>
            <p>Here is a bit about why I'm striving towards this goal. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    
            <h2>What I can offer a company is</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      </main>
    );
  }
}

export default PortfolioDisplayPage;
