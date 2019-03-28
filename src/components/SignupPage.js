import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "logos/skillpod-logo-head.svg";

class SignupPage extends Component {
  render() {
    return (
        <main className="layout">
          <div className="tile blank">
            <div className="bio-grid">
              <img src={logo}/>
              <div>
                  <h1>One last step</h1>
                  <h5>Please signup to access the rest of Skillpod.</h5>
              </div>
            </div>
          </div>
          <div className="tile" id="tiles">
            <div className="signup two-column-grid">
              <div>
                <h2>You</h2>
                  <input type="text" placeholder="First Name"/>
                  <input type="text" placeholder="Last Name"/>
                  <input type="text" placeholder="E-mail"/>
                  <select>
                    <option disabled selected value={ null }>Identity</option>
                    <option value="three">Prefer not to answer</option>
                    <option value="one">Male</option>
                    <option value="two">Female</option>
                    <option value="three">Non-Binary</option>
                    <option value="three">Other</option>
                  </select>
              </div>
              <div>
                <h2>Location</h2>
                <input type="text" placeholder="City"/>
                <select>
                  <option disabled selected value={null}>Country</option>
                  <option value="one">Canada</option>
                  <option value="two">Uganda</option>
                  <option value="three">Other countries</option>
                </select>
              </div>
            </div>
          
            <p>What best describes your current status?</p>
            <select>
              <option disabled selected value={null}>Pick one</option>
              <option value="three">High School</option>
              <option value="one">Community College</option>
              <option value="two">University</option>
              <option value="three">Looking for work</option>
              <option value="one">Onboarding at work</option>
              <option value="two">Looking to advance at work</option>
            </select>
            {/* CONFIRM CONSET POP UP BEFORE THIS */}
            <Link to="/dashboard" className="button">Submit</Link>
          </div>
        </main>
    );
  }
}

export default SignupPage;
