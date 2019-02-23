import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    return (
        <main className="layout">

            {/* <!-- TILE Component --> */}
            <div className="tile" id="the-grid">
            <h1>Welcome to Skillpod!</h1>
            <p>Skillpod is an executive skills coaching program that helps young adults build, demonstrate and articulate 7 executive skills critical to working and living in the digital age.</p>
            <p>Already have an account? <a href="login.html" className="buttonAlt">Login.</a></p>
            </div>

            {/* <!-- TILE Component --> */}
            <div className="tile" id="content">
                <h2>What is your goal?</h2>

                {/* <!-- SELECT Component --> */}
                <div>
                    <p>I want to learn about</p>
                    <select>
                    <option disabled selected value>Select an option</option>
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

                {/* <!-- SELECT Component --> */}
                <div>
                    <p>in the field of something else</p>
                    <select>
                    <option disabled selected value>Select an option</option>
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

                {/* <!-- BUTTON Component --> */}
                <div>
                    <a href="signup.html" className="button">Begin</a>
                </div>
            </div>
        </main>
    );
  }
}

export default IndexPage;