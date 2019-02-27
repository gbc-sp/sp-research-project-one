import React, { Component } from "react";
import IndexGoalForm from "IndexGoalForm";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  render() {
    return (
      <main className="layout">
        {/* <!-- TILE Component --> */}
        <div className="tile" id="the-grid">
          <h1>Welcome to Skillpod!</h1>
          <p>
            Skillpod is an executive skills coaching program that helps young
            adults build, demonstrate and articulate 7 executive skills critical
            to working and living in the digital age.
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="buttonAlt">
              Login
            </Link>
          </p>
        </div>

        {/* The goals form */}
        <IndexGoalForm className="tile" />

      </main>
    );
  }
}

export default IndexPage;
