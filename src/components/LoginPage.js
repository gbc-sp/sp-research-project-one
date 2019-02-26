import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <main className="layout">
        <div className="tile" id="tiles">
          <h1>Login</h1>
          <input type="text" placeholder="E-mail / Username" />
          <input type="text" placeholder="Password" />
          <a href="dashboardv2.html" className="button">
            Login
          </a>
        </div>
      </main>
    );
  }
}

export default LoginPage;
