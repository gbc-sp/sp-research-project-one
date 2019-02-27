import React, { Component } from "react";

class ModuleStartPage extends Component {
  render() {
    return (
      <main className="layout no-toolbar">
        <div className="tile">
          <h3 className="txt-impact small-margin-bottom">Module Home</h3>
          <h1>Smarter Learning</h1>
          <p>
            Learning is the change in one's behaviour or knowledge which comes
            about as a result of experience.
          </p>
          <p className="hidden">
            We all learn in different ways, and sometimes individuals have
            different methods of learning depending on the job they need to do.
            <span id="dotdotdot">...</span>
          </p>
          <p className="hidden">
            The Skillpod Smarter Learning module is based on understanding
            yourself as a learner so that you can start to learn faster and
            design learning in a way that best suits your personal needs. This
            begins with a self-assessment, the Personal Learning Preferences
            (PLP) which combines variables such as you Multiple intelligences
            (MI) strengths with your personal interests and career interests. It
            helps you learn from past successes and create a process that works
            best for you.
          </p>
          <button className="buttonAlt" type="button" id="read-more">
            Read more
          </button>
        </div>

        <div className="tile blank">
          <h2 className="lighten">Choose your competency order:</h2>
        </div>

        <div className="fixed-width-row">
          <div data-id={0} className="tile center selected compSelectors">
            <h1>1</h1>
            <div className="drag-me">
              <div />
              <div />
            </div>
          </div>
          <div data-id={1} className="tile center compSelectors">
            <h1>2</h1>
            <div className="drag-me">
              <div />
              <div />
            </div>
          </div>
          <div data-id={2} className="tile center compSelectors">
            <h1>3</h1>
            <div className="drag-me">
              <div />
              <div />
            </div>
          </div>
          <div data-id={3} className="tile center compSelectors">
            <h1>4</h1>
            <div className="drag-me">
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className="tile blank">
          <h2 id="compInfoTitle" />
          <p id="compInfoContent" />
        </div>
        <div className="button-sticky">
          <a href="dashboard.html" className="button button-sticky-small">
            <span>back</span>
          </a>
          <a href="competency1.html" className="button button-sticky-big">
            Start Module
          </a>
        </div>
      </main>
    );
  }
}

export default ModuleStartPage;
