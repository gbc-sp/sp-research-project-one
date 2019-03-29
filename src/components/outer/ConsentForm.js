import React, { Component } from "react";
import { Link } from "react-router-dom";

class ConsentForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class='tile popup'>
            <h1>Your Information</h1>
            <p>Skillpod uses your information to do:</p> 
            <ul class="bulleted">
                <li>thing one</li>
                <li>thing two</li>
                <li>thing three</li>
            </ul>
            <p>We do not do thing four with it.</p>
            <Link to="/load" class="button">I Consent</Link><br/> {/* bad br */}
            <a href="javascript:" class="buttonAlt">More Information</a>
        </div>
    );
  }
}

export default ConsentForm;
