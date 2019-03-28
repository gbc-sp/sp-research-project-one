import React, { Component } from "react";
import IndexGoalForm from "IndexGoalForm";
import { Link } from "react-router-dom";

import head from "web_art.jpg";
import logo from "skillpod-logo.svg";

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      visible: true
    };
  }

  handleClick() {
    this.setState(state => ({
      visible: false
    }));
  }

  render() {
    return (
      <main className="layout intro">

        <div className="tile blank more-tile-padding">
          <div className="indexLarge">
            <div className="logo">
                <img className="logo-img" src="img/logos/skillpod-logo.svg"/>
            </div>
            <div className="graphic first">
              <img src="img/art/web-art-1.png"/>
              <h4>The Digital Age</h4>
              <p>Prepare to thrive in work and life. Build, demonstrate, and articulate skills critical to working and living in the digital age. PUT ALL TEXT HERE ON MOBILE</p>
            </div>
            <div className="graphic second">
              <img src="img/art/web-art-2.png"/>
              <h4>Entrepreneurial Economy</h4>
              <p>Prepare for employment by honing and sharing your own unique, essential skills required for success in the entrepreneurial economy.</p>
            </div>

            <div className="graphic third">
              <img src="img/art/web-art-3.png"/>
              <h4>Build Your Skills</h4>
              <p>Start building your skills now, with Skillpod.</p>
            </div>
            <div></div>
            <div className="start">
                <Link to="/goals.html" className="button">Begin</Link>
                <Link to="/login.html" className="buttonAlt">I already have an account.</Link>
            </div>
            
          </div>
        </div>
      </main>
    );
  }
}

export default IndexPage;
