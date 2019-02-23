import React, { Component } from "react";

class HelpPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="tile blank">
          <h1>Skillpod FAQ</h1>
        </div>
        <div className="tile limit-width">
          <h2>What is Skillpod?</h2>
          <p>
            Skillpod is a platform that allows you to build a repertoire of
            skills useful in your working and personal life. By using Skillpod,
            you will be able to think and learn more effectively as well as
            manage your own learning needs more effectively. By using Skillpod
            you provide evidence of your skills to potnetial employers and talk
            about your skills with confidence.
          </p>
          <br>
            <h2>What are executive skills?</h2>
            <p>
              Executive skills are skills that allow you to thrive in your work
              and life. You may be familiar with the term “soft skills”. This
              generally refers to interpersonal skills like communication and
              teamwork. Executive skills include these “soft skills” but include
              additional skills as well.
            </p>
          </br>
          <h2>Why do I have to do a portfolio peice?</h2>
          <p>
            As a result of doing the work, you will have a portfolio of
            marketable and transferable skills which are supported with concrete
            examples of performance. Think of these skills as the “key words” in
            any search for which the field is populated by candidates with the
            same knowledge you have, but whose skills are less developed and
            specific. You will stand out as a candidate, whether your CV is
            processed by hand or algorithm, and when you are interviewed, your
            ability to discuss these skills and their component parts will help
            you to land the job you want.
          </p>
          <br>
            <h2>What are competencies?</h2>
            <p>
              Each skill is further defined by four main“competencies” or key
              elements. We then provide a scenario-based learning program that
              focuses on building knowledge of each competency. After you
              complete all four competnacies you are prompted to make a
              portfolio peice.
            </p>
          </br>
          <h2>What is the PLP?</h2>
          <p>
            The PLP stands for Personal Learning Plan. It provides a customized
            overview of your learning preferences at the current time, based on
            your responses to a series of questions, ultimately giving you a
            greater understanding of how you learn best. It provides a logical
            way to learn better and faster that has been tested and used by
            thousands of students from primary to university levels.
          </p>
        </div>
      </main>
    );
  }
}

export default HelpPage;
