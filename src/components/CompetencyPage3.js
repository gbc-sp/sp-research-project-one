import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompetencyPage3 extends Component {
  render() {
    return (
      <main className="layout competency">
        <header className="shrink-vertical">
          <Link to="/module" className="button">Quit</Link>
          Module progress (ie, Competency 1 of 4)
        </header>
        <div className="tile grow-vertical">
          <h3 className="txt-impact">Smarter Learning</h3>
          <h1>Coach's insight</h1>
          <p>
            Two key elements of this scenario are setting up a plan in order to
            maximize strength in learning; and the initiating of new learning
            when needed. Jim missed both elements. Essentially, because it is
            not his strength, he turns his back on a critical task and, by doing
            so, really limits his effectiveness. Had he really understood the
            idea of learning preferences and how to make the most of individual
            differences, he could have planned better and planned to fill his
            gaps in skill. The best chances of success follow the quadrant
            preferences: knowing what you are doing (Q1); communicating it (Q2);
            working probable options (Q3); and seeing the big picture in order
            to identify key priorities (Q4). Jim had the ability to succeed, but
            not the plan or understanding of what needed to be learned, and by
            whom.
          </p>
        </div>
        <div className="button-sticky">
          <Link to="/competency/2" className="button button-sticky-small">&lt;</Link>
          <Link to="/competency/4" className="button button-sticky-big">Continue</Link>
        </div>
      </main>
    );
  }
}

export default CompetencyPage3;
