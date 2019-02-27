import React, { Component } from "react";

class IndexPage extends Component {
  render() {
    return (
      <main className="layout">
        {/* <!-- TILE Component --> */}
        <div className="tile" id="the-grid">
          <h1>Welcome to Skillpod!</h1>
          <p>
            Skillpod is an executive skills coaching program that helps young
            adults build, demonstrate and articulate 7 executive skills critical
            to working and living in the digital age.
          </p>
          <p>
            Already have an account?{" "}
            <a href="login.html" className="buttonAlt">
              Login.
            </a>
          </p>
        </div>

        {/* <!-- TILE Component --> */}
        <div className="tile" id="content">
          <h2>What is your goal?</h2>

          {/* <!-- SELECT Component --> */}
          <div>
            <p>I want to learn about</p>
            <select>
              <option value={null}>Select an option</option>
              <option value="being">Being more prepared</option>
              <option value="confidence">Confidence</option>
              <option value="anticipation">Anticipation</option>
              <option value="consequences">Consequences</option>
              <option value="leadership">Leadership</option>
              <option value="personal">Personal branding</option>
              <option value="conflict">Conflict resolution</option>
              <option value="picturing">Picturing my future</option>
              <option value="effective">Effective communication</option>
              <option value="achieving">Achieving goals</option>
            </select>
          </div>

          {/* <!-- SELECT Component --> */}
          <div>
            <p>in the field of something else</p>
            <select>
              <option value={null}>Select an option</option>
              <option value="journalism">Journalism</option>
              <option value="politics">Politics</option>
              <option value="legal">Legal</option>
              <option value="visual">Visual & Performing Arts</option>
              <option value="health">Health Services</option>
              <option value="business">Business Management</option>
              <option value="sports">Sports, Playing, Coaching</option>
              <option value="teaching">Teaching</option>
              <option value="nature">Nature, Ecology, Farming</option>
              <option value="digital">Digital, Computing</option>
              <option value="trades">Trades</option>
              <option value="selling">Selling, Marketing</option>
              <option value="building">Building, Engineering</option>
              <option value="creative">Creative, Inventing</option>
            </select>
          </div>

          {/* <!-- BUTTON Component --> */}
          <div>
            <a href="signup.html" className="button">
              Begin
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default IndexPage;
