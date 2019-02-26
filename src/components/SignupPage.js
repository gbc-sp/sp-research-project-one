import React, { Component } from "react";

class SignupPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="tile">
          <h1>One last step</h1>
          <p>Please signup to access the rest of Skillpod.</p>
        </div>
        <div className="tile" id="tiles">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="E-mail" />
          <select>
            <option value={null}>Sex</option>
            <option value="three">Prefer not to answer</option>
            <option value="one">Male</option>
            <option value="two">Female</option>
            <option value="three">Non-Binary</option>
          </select>
          <div>
            <input type="text" placeholder="City" />
            <select>
              <option value={null}>Country</option>
              <option value="one">Canada</option>
              <option value="two">Wakanda</option>
              <option value="three">Other countries</option>
            </select>
          </div>
          <p>What best describes your current status?</p>
          <select>
            <option value={null}>Pick one</option>
            <option value="three">High School</option>
            <option value="one">Community College</option>
            <option value="two">University</option>
            <option value="three">Looking for work</option>
            <option value="one">Onboarding at work</option>
            <option value="two">Looking to advance at work</option>
          </select>
          <a href="dashboardv2.html" className="button">
            Submit
          </a>
        </div>
      </main>
    );
  }
}

export default SignupPage;
