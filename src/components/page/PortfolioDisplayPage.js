import React, {useState} from "react";
import { Link } from "react-router-dom";

import PortfolioThumbs from "portfolio/PortfolioThumbs";
import CurrentPortfolioPiece from "portfolio/CurrentPortfolioPiece";
import MainToolbar from "utility/MainToolbar";

import me from "user/me.jpg";
import portfolio_hero from "user/portfolio/infoManagement/hero.jpg";
import back_arrow from "icons/back-arrow.svg";
import edit_ico from "icons/edit.svg";
import communication from "icons/skills/communication.svg";
import selfWork from "icons/skills/selfWork.svg";
import designInnovation from "icons/skills/designInnovation.svg";
import infoManagement from "icons/skills/infoManagement.svg";

import infoManagementPortfolio from "user/portfolio/infoManagement/hero.jpg";


const PortfolioDisplayPage = props => {

  const [pieces, setPieces] = useState([
    {
      id: 1,
      title: `My Professional Image`,
      skill: {
        id: 3,
        name: `Information Management`,
        icon: infoManagement,
        class: `infoManagement`
      },
      content: `Information Management is crucial for me as a recent graduate looking for work. While talking to a prospective employer, she told me that she found a link to a number of YouTube videos that I had created when I was younger. This was not the professional image that I hoped to share. As a result, I have carefully searched and changed privacy settings on my social media to make sure that I have managed my personal image. I know that care and attention to privacy is important for me and for those around me and also will reflect on how I care about the company and colleagues where I work.`,
      img: infoManagementPortfolio
    },
    {
      id: 2,
      title: `Working on Myself`,
      skill: {
        id: 1,
        name: `Selfwork`,
        icon: selfWork,
        class: `selfwork`
      },
      content: `Selfwork is crucial for me as a recent graduate looking for work. While talking to a prospective employer, she told me that she found a link to a number of YouTube videos that I had created when I was younger. This was not the professional image that I hoped to share. As a result, I have carefully searched and changed privacy settings on my social media to make sure that I have managed my personal image. I know that care and attention to privacy is important for me and for those around me and also will reflect on how I care about the company and colleagues where I work.`,
      img: infoManagementPortfolio
    },
    {
      id: 3,
      title: `Worsn Myself`,
      skill: {
        id: 7,
        name: `Seyeetrk`,
        icon: infoManagement,
        class: `infoManagement`
      },
      content: `Selfwork is crucial for me as a recent graduate looking for work. While talking to a prospective employer, she told me that she found a link to a number of YouTube videos that I had created when I was younger. This was not the professional image that I hoped to share. As a result, I have carefully searched and changed privacy settings on my social media to make sure that I have managed my personal image. I know that care and attention to privacy is important for me and for those around me and also will reflect on how I care about the company and colleagues where I work.`,
      img: infoManagementPortfolio
    }
  ]);

  return (
    <>
      <MainToolbar page="portfolio" />
      <main className="layout">
        <div className="button-corner">
          <Link to="/portfolio/edit">
            <img alt="edit portfolio" src={edit_ico} />
          </Link>
        </div>
        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h3>A collection about you.</h3>
        </div>

        <div className="tile full no-padding profile-hero">
          <section className="portfolio-bio two-column-grid">
            <div className="profile-image">
              <img alt="It's you!" src={me} />
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
                <p>
                  This is all about me! I'm a person that uses Skillpod, and I
                  love it!
                </p>
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
          {pieces.map(piece => (
            <PortfolioThumbs piece={piece} />
          ))}
        </div>

        <CurrentPortfolioPiece piece={pieces[0]} />

        <div className="tile blank">
          <h1>About Brent</h1>
          <h2>More Information</h2>
        </div>
        <div className="tile full">
          <h2>My Goal</h2>
          <h1>
            I want to build skills in{" "}
            <span className="txt-impact">Leadership</span>, in the field of{" "}
            <span className="txt-impact">Teaching</span>.
          </h1>
          <p>
            Here is a bit about why I'm striving towards this goal. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>

          <h2>What I can offer a company is</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
    </>
  );
}

export default PortfolioDisplayPage;
