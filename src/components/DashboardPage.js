import React, { Component } from 'react';

class DashboardPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="tile blank">
          <h1>Welcome back!</h1>
          <p>Good morning Sherry, here’s your current module progress.</p>
        </div>

        <div className="tile">
          <h2>Current Goal</h2>
          <p>I want to have more this in that.</p>
        </div>

        <div className="tile blank">
          <h1>Module Flow</h1>
        </div>

        <div className="scrollable-row">
          <div data-id="0" className="tile module">
            <img src="img/selfWork.svg" />
            <h3>Self Work</h3>
          </div>
          <div data-id="1" className="tile module selected">
            <img src="img/teamwork.svg" />
            <h3>Teamwork</h3>
          </div>
          <div data-id="2" className="tile module">
            <img src="img/communication.svg" />
            <h3>Communication</h3>
          </div>
          <div data-id="3" className="tile module">
            <img src="img/designInnovation.svg" />
            <h3>Design & Innovation</h3>
          </div>
          <div data-id="4" className="tile module">
            <img src="img/infoManagement.svg" />
            <h3>Information Management</h3>
          </div>
          <div data-id="5" className="tile module">
            <img src="img/strategicThinking.svg" />
            <h3>Strategic Thinking</h3>
          </div>
          <div data-id="6" className="tile module">
            <img src="img/smarterLearning.svg" />
            <h3>Smarter Learning</h3>
          </div>
        </div>

        <div className="tile">

          <div className="progress-bar">
            <div id="progressBar" className="progress-amount"></div>
          </div>
          <a className="button-link" href="module-start.html"><button id="moduleProgressButton" className="button">Continue</button></a>
          <button id="moduleTipsButton" className="button">Tips & Reflection</button>

          <p>Want us to serve you content in a way that best suits your learning style?</p>
          <a href="https://plp.skillpod.ca" className="button">Complete Our Learning Style PLP</a>

        </div>
      </main>
    );
  }
}

export default DashboardPage;
