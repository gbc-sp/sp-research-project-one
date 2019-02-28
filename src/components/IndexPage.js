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
        {/* <!-- TILE Component --> */}
        
        <p>
          Already have an account?{" "}
          <Link to="/login" className="buttonAlt">
            Login
          </Link>
        </p>

        <div className={this.state.visible ? 'tile blank more-tile-padding': 'tile blank more-tile-padding hidden'}>
          <img className="logo-img" src={ logo } />
            <div className="txt-anim-up">
              <p>Prepare to thrive in work and life. Build, demonstrate, and articulate skills critical to working and living in the digital age.</p>
              <p>Prepare for employment by honing and sharing your own unique, essential skills required for success in the entrepreneurial economy.</p>
              <p>Start building your skills now, with Skillpod.</p>
            </div>
          <button onClick={ this.handleClick } className="button">Begin</button>
          <img className="head-art" src={ head } />
        </div>

        {/* The goals form */}
        <div className={this.state.visible ? 'hidden': null}>
          <IndexGoalForm className="tile" />
        </div>

      </main>
    );
  }
}

export default IndexPage;
