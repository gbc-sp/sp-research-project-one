import React, { Component } from "react";
import IndexGoalForm from "IndexGoalForm";
import { Link } from "react-router-dom";

class Goals extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <main class="layout goals">
            <div class="tile blank white-txt">
            <h1>Create Your Goal</h1>
            <h5>This goals determines your custom path through Skillpod!</h5>
            </div>
            <div class="tile blank white-txt">
            <div class="build-goal">
                <div class="goal-line">
                    <h1>I want to build skills in</h1>
                </div>
                <div class="goal-line">
                    <select class="goal-input" id="goalFieldOne">
                        <option disabled selected value>Select One</option>
                        <option value="none">options here</option>
                    </select>
                    <h1>in the</h1>
                </div>
                <div class="goal-line">
                    <h1>field of</h1>
                    <select class="goal-input">
                        <option disabled selected value>Select One</option>
                        <option value="none">options here</option>
                    </select>
                    <h1>.</h1>
                </div>
            </div>
            </div>
            <div class="tile blank no-top-padding center">
                <Link to="confirm-goal.html" class="button button-wide">Begin</Link>
            </div>
            {/*<div>
                <IndexGoalForm className="tile" />
             </div>    SHOULD BE REWORKED*/}
            </main>
    );
  }
}

export default Goals;
