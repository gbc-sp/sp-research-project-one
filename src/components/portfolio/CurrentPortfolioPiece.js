import React, { Component } from "react";
import { Link } from "react-router-dom";

import back_arrow from "icons/back-arrow.svg";

class CurrentPortfolioPiece extends Component {
  state = {
    piece: this.props.piece
  };

  render() {
    return (
      <div className="current-portfolio-piece">
        <div className="tile full no-padding">
          <div className="profile-image">
            <div>
              <img alt="portfolio piece image" src={this.state.piece.img} />
            </div>
          </div>
          <div className="tile blank">
            <Link to="null:">
              <img alt="page back icon" className="go-back" src={back_arrow} />
            </Link>
            <h1 className="no-vertical-margin">{this.state.piece.title}</h1>
            <h2 className="no-vertical-margin">
              {this.state.piece.skill.name}
            </h2>
            <p>{this.state.piece.content}</p>
            {/* This would go back to portfolio piece selection. it only shows if a piece has been selected. */}
            <Link to="null:" className="button">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentPortfolioPiece;
