import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompetencyPage1 extends Component {
  render() {
    return (
      <main className="layout competency">
        <header className="shrink-vertical">
          <Link to="/module" className="button">Quit</Link>
          Module progress (ie, Competency 1 of 4)
        </header>
        <div className="tile grow-vertical">
          <h3 className="txt-impact small-margin-bottom">Smarter Learning</h3>
          <h1>
            Scenario: <span className="lighten">Jim</span>
          </h1>
          <p>
            Jim was hired to help a local politician get re-elected. He had a
            college certificate in general business practice, and a Personal
            Learning Preference (PLP) that leaned to the concrete/graphic
            preference quadrant. When Jim arrived at the office, he received a
            large file of documents and instructions which detailed his very
            wide range of responsibilities. The politician was mostly on the
            road, building community support, so Jim was left with one office
            colleague and some volunteers to see things ran smoothly at
            headquarters. Jim was not a person comfortable with text as much as
            he was with graphic material and the thought of wading through the
            file was daunting - he wanted to get things done. Jim did not read
            the file, nor did he find someone more comfortable with textual
            material to help him by doing so.
          </p>
          <p>
            At the same time, he contacted the returning officer to make sure
            the dates and rules were followed. He gave an assistant the job of
            organizing the volunteers for the canvassing, and he took on the job
            of fundraising with the candidate. Jim was a personable guy and
            people were happy to see him. But what was not so positive was that
            Jim lacked any knowledge of the riding, the procedures that had
            historically been in place or, most vitally, the policies of his
            boss. All that material had been in the file which Jim had decided
            not to read. The result was that Jim could not really campaign with
            his boss, could not answer questions, help with briefings or speak
            to the press or local associations on behalf of the riding office.
          </p>
          <p>The candidate lost the election.</p>
        </div>
        <div className="button-sticky">
          <Link to="/module" className="button button-sticky-small">&lt;</Link>
          <Link to="/competency/2" className="button button-sticky-big">Continue</Link>
        </div>
      </main>
    );
  }
}

export default CompetencyPage1;
