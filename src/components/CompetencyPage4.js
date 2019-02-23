import React, { Component } from "react";

class CompetencyPage4 extends Component {
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
          <h1>Tips</h1>
          <h3>
            Ask yourself these questions to get a better understanding of how to
            apply your learning profile.
          </h3>
          <ul className="bulleted">
            <li>Have I completed, studied and understood my PLP?</li>
            <li>
              Can I recognize when there is an important new learning
              opportunity?
            </li>
            <li>
              Do I have strategies for engaging people with different learning
              profiles?
            </li>
            <li>
              Can I recognize, understand and appreciate how other’s different
              learning profiles can help me?
            </li>
            <li>
              Have I constructed a model or system for how I can be a smarter
              learner?
            </li>
          </ul>
        </div>
        <div className="tile grow-vertical">
          <h3 className="txt-impact">Smarter Learning</h3>
          <h1>Reflection</h1>
          <p>
            Take a minute to reflect on a situation where you effectively used
            context or wish that you had.
          </p>
          <textarea name="name" rows="8" cols="80" />
        </div>
        <div className="button-sticky">
          <a href="competency3.html" className="button button-sticky-small">
            <span />
          </a>
          <a href="dashboard.html" className="button button-sticky-big">
            Done
          </a>
        </div>
      </main>
    );
  }
}

export default CompetencyPage4;
