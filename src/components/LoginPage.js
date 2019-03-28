import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <main class="layout">
        <div class="tile blank">
          <div class="bio-grid">
            <img src="img/logos/skillpod-logo-head.svg"/>
            <div>
                <h1>Login</h1>
                <h5>Please signup to access the rest of Skillpod.</h5>
            </div>
          </div>
        </div>
        <div class="tile blank">
          <input type="text" placeholder="E-mail / Username"/>
          <input type="text" placeholder="Password"/>
          <Link to="dashboard.html" class="button">Login</Link>
        </div>
      </main>
    );
  }
}

export default LoginPage;
