import React, { Component } from "react";

class CompetencyPage2 extends Component {
  render() {
    return (
      <main className="layout competency">
        <header className="shrink-vertical">
          <a href="module-start.html" className="button">
            Save & Quit
          </a>
          Module progress (ie, Competency 1 of 4)
        </header>

        <div className="tile grow-vertical">
          <h3 className="txt-impact">Smarter Learning</h3>
          <h1>Your analysis</h1>
          <h2 className="lighten">Choose all that apply:</h2>
          <ul className="check-box-container">
            <li>
              <input className="check-box" type="checkbox" />
              <span>Jim understood what he needed to learn</span>
            </li>
            <li>
              <input className="check-box" type="checkbox" />
              <span>Jim understood what he needed to learn</span>
            </li>
            <li>
              <input className="check-box" type="checkbox" />
              <span>Jim’s assistant was unhelpful</span>
            </li>
            <li>
              <input className="check-box" type="checkbox" />
              <span>Jim had the wrong learning profile for the job</span>
            </li>
            <li>
              <input className="check-box" type="checkbox" />
              <span>The politician was unhelpful</span>
            </li>
          </ul>
          <button type="button">Check answers</button>
        </div>

        <div className="button-sticky">
          <a href="competency1.html" className="button button-sticky-small">
            <span>back</span>
          </a>
          <a href="competency3.html" className="button button-sticky-big">
            Continue
          </a>
        </div>
      </main>
    );
  }
}

export default CompetencyPage2;
