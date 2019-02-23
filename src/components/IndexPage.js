import React, { Component } from "react";

class IndexPage extends Component {
  render() {
    return (
      <main className="layout">
        {/* <a href="login.html" className="buttonAlt">Login.</a> */}
        <div className="tile blank more-tile-padding" id="introScreen">
          <img className="logo-img" src="img/skillpod-logo.svg" />
          {/* <div id="animation">Animation Here</div> */}
          <div className="txt-anim-up">
            <p>
              Prepare to thrive in work and life. Build, demonstrate, and
              articulate skills critical to working and living in the digital
              age.
            </p>
            <p>
              Prepare for employment by honing and sharing your own unique,
              essential skills required for success in the entrepreneurial
              economy.
            </p>
            <p>Start building your skills now, with Skillpod.</p>
          </div>
          <button id="progBtn" className="button">
            Begin
          </button>
        </div>

        <div className="tile blank hidden" id="goalsScreen">
          <h1>Create a goal.</h1>
          <div className="goal-field">
            <p>I want to build skills in</p>
            <select id="goalFieldOne">
              <option disabled selected value>
                Select an option
              </option>
              <option value="one">Being more prepared</option>
              <option value="two">Confidence</option>
              <option value="three">Anticipation</option>
              <option value="four">Consequences</option>
              <option value="one">Leadership</option>
              <option value="two">Personal branding</option>
              <option value="three">Conflict resolution</option>
              <option value="one">Picturing my future</option>
              <option value="two">Effective communication</option>
              <option value="three">Achieving goals</option>
            </select>
          </div>

          <div id="goalFieldTwo" className="goal-field hidden">
            <p>in the field of</p>
            <select>
              <option disabled selected value>
                Select an option
              </option>
              <option value="none">I Don't Know</option>
              <option disabled>________________</option>
              <option value="one">Journalism</option>
              <option value="two">Politics</option>
              <option value="three">Legal</option>
              <option value="four">Visual & Performing Arts</option>
              <option value="one">Health Services</option>
              <option value="two">Business Management</option>
              <option value="three">Sports, Playing, Coaching</option>
              <option value="four">Teaching</option>
              <option value="one">Nature, Ecology, Farming</option>
              <option value="two">Digital, Computing</option>
              <option value="three">Trades</option>
              <option value="four">Selling, Marketing</option>
              <option value="one">Building, Engineering</option>
              <option value="two">Creative, Inventing</option>
            </select>
          </div>
          <a href="signup.html" className="button">
            Begin
          </a>
        </div>
      </main>
    );
  }
}

export default IndexPage;
